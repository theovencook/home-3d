var Gd=["frame2","frame4","cabinet","wall_frame","wall_cabinet"],qx=["wall_frame","wall_cabinet"],$d=["cabinet","wall_cabinet"],Hd=["none","glass","mesh","solid"],Bu=[19,10],Jr=.04445,Uu={19:.4826,10:.254},as=60,Kx=[1,100],Zx=[.05,1.5],jx=[0,2],Ou=.001,Jx=new Set(["u","form","width","door","start_u","desc","mount_depth","bottom"]),Wd=(i,[t,e])=>typeof i=="number"&&Number.isInteger(i)&&i>=t&&i<=e,Xd=(i,[t,e])=>typeof i=="number"&&Number.isFinite(i)&&i>=t&&i<=e,Qx=i=>qx.includes(i);function ty(i){let t=i.rack_frame;if(t===void 0)return[];if(!t||typeof t!="object"||Array.isArray(t))return[{field:"rack_frame",why:"a rack frame is an object"}];let e=t,n=[],r=(d,p)=>{n.push({field:d,why:p})};for(let d of Object.keys(e))Jx.has(d)||r(d,"not a rack frame field");if(Wd(e.u,[1,as])||r("u",`a whole number of U, 1 to ${as}`),Gd.includes(e.form)||r("form",`one of ${Gd.join(", ")}`),e.width!==void 0&&!Bu.includes(e.width)&&r("width","19 or 10 (inches)"),e.door!==void 0&&!Hd.includes(e.door)&&r("door",`one of ${Hd.join(", ")}`),e.start_u!==void 0&&!Wd(e.start_u,Kx)&&r("start_u","a whole number, 1 to 100"),e.desc!==void 0&&typeof e.desc!="boolean"&&r("desc","true or false"),e.mount_depth!==void 0&&!Xd(e.mount_depth,Zx)&&r("mount_depth","0.05 to 1.5 metres"),e.bottom!==void 0&&!Xd(e.bottom,jx)&&r("bottom","0 to 2 metres"),n.length)return n;let[o,s,a]=i.size,l=e.form,c=e.width??19;Uu[c]>o+Ou&&r("width","the rack's panels are wider than the item"),(e.mount_depth??0)>s+Ou&&r("mount_depth","deeper than the item");let h=e.u*Jr;(e.bottom??Math.max(0,(a-h)/2))+h>a+Ou&&r("u",`${e.u}U do not fit in the item's height`);let f=i.mount??"floor";return(Qx(l)!==(f==="wall")||f==="ceiling")&&r("mount",'a wall rack has "mount": "wall", any other stands on the floor or a desk'),(e.door??"none")!=="none"&&!$d.includes(l)&&r("door","only a cabinet has a door"),n}function zi(i){let t=i?.rack_frame;return!t||ty(i).length?null:{u:t.u,form:t.form,width:t.width??19,door:t.door??"none",startU:t.start_u??1,desc:t.desc??!1,mountDepth:t.mount_depth??null,bottom:t.bottom??null}}var Yd={19:.45085,10:.22225},Nu={frame2:0,frame4:0,cabinet:.08,wall_frame:.02,wall_cabinet:.06},ey={frame2:0,frame4:.02,cabinet:.05,wall_frame:.01,wall_cabinet:.04},ny=.075;function Vi(i,t,e,n){let r=i.u*Jr,o=Math.min(Math.max(0,i.bottom??(n-r)/2),Math.max(0,n-r)),s=Math.min(Jr,(n-o)/i.u),a=Array.from({length:i.u},(f,d)=>({index:d,label:i.desc?i.startU+i.u-1-d:i.startU+d,y0:o+d*s,y1:o+(d+1)*s})),l=i.form==="frame2",c=l?ny/2:e/2-Nu[i.form],h=l?e:Math.max(.01,e-Nu[i.form]-ey[i.form]),u=Math.min(i.mountDepth??h,l?e:e-Nu[i.form]);return{unit:s,units:a,bottom:o,top:o+i.u*s,panel:Math.min(t,Uu[i.width]),opening:Math.min(t,Yd[i.width]),front:c,rear:l?null:c-u,mountDepth:u,lane:Math.max(0,(t-Math.min(t,Uu[i.width]))/2)}}function qd(i){let t=i.opening/2,e=Math.max(.01,(i.panel-i.opening)/2),n=[];for(let r=0;r<=i.units.length;r++){let o=i.bottom+r*i.unit,s=r%5===0,a=Math.max(i.bottom,o-7e-4),l=Math.min(i.top,o+7e-4),c=t+e*.15,h=t+e*(s?.95:.6),u=i.front,f=i.front+.0015;n.push({x0:-h,x1:-c,y0:a,y1:l,z0:u,z1:f,major:s},{x0:c,x1:h,y0:a,y1:l,z0:u,z1:f,major:s})}return n}var Fa={online:"#2ecc71",warning:"#f5a623",offline:"#ff3b30"};function Kd(i){let t=[];for(let e of[i.entity,...i.links??[]])e&&!t.includes(e)&&t.push(e);return t}var Zd=["full","half","third"],jd=["half","full"];var iy=new Set(["u","width","depth","inch","shelf"]);function ry(i){let t=i.rack;if(t===void 0)return[];if(!t||typeof t!="object"||Array.isArray(t))return[{field:"rack",why:"rack gear is an object"}];let e=t,n=[];for(let r of Object.keys(e))iy.has(r)||n.push({field:r,why:"not a rack gear field"});return(typeof e.u!="number"||!Number.isInteger(e.u)||e.u<0||e.u>as)&&n.push({field:"u",why:`a whole number of U, 0 to ${as}`}),e.width!==void 0&&!Zd.includes(e.width)&&n.push({field:"width",why:`one of ${Zd.join(", ")}`}),e.depth!==void 0&&!jd.includes(e.depth)&&n.push({field:"depth",why:`one of ${jd.join(", ")}`}),e.inch!==void 0&&!Bu.includes(e.inch)&&n.push({field:"inch",why:"19 or 10 (inches)"}),e.shelf!==void 0&&typeof e.shelf!="boolean"?n.push({field:"shelf",why:"true or false"}):e.shelf&&e.u===0&&n.push({field:"shelf",why:"a shelf takes at least 1U"}),n}function ka(i){let t=i?.rack;return!t||ry(i).length?null:{u:t.u,width:t.width??"full",depth:t.depth??"half",inch:t.inch??19,shelf:t.shelf??!1}}var oy={full:1,half:2,third:3};var Jd=.004;var zu=.003;function gr(i,t,e){let n=[],r=new Map;for(let o of t){if(o.on)continue;let s=e(o.type),a=ka(s);if(!s||!a)continue;let l=o.face==="rear"&&a.depth!=="full";if(l&&i.rear===null)continue;let c=i.units[o.u-1];if(!c)continue;let h=o.col??0;if(a.u<1){if(h>1)continue;let x=Math.min(s.size[0],i.lane),v=Math.min(s.size[2],i.top-c.y0),y=Math.min(s.size[1],i.mountDepth),M=o.face==="rear"?(i.rear??i.front-i.mountDepth)+y/2:i.front-y/2;n.push({slot:o,item:s,x:(h===0?-1:1)*(i.panel/2+i.lane/2),z:M,y:c.y0,w:x,d:y,h:v,back:o.face==="rear"});continue}if(!i.units[o.u+a.u-2])continue;let u=oy[a.width];if(h>=u)continue;let f=a.u*i.unit,d=Math.min(s.size[2],f),p=Math.min(s.size[1],i.mountDepth+zu),g=l?i.rear-zu+p/2:i.front+zu-p/2,b=-i.panel/2+(h+.5)*i.panel/u,m={slot:o,item:s,x:b,z:g,y:a.shelf?c.y0:c.y0+(f-d)/2,w:Math.min(s.size[0],i.panel/u),d:p,h:d,back:l};if(n.push(m),a.shelf){let x=i.opening/u/2;r.set(o.id,{piece:m,x0:b-x,x1:b+x,top:c.y0+f})}}for(let o of t){let s=o.on?r.get(o.on):void 0,a=s&&e(o.type);if(!s||!a||a.rack_frame)continue;let l=s.piece,c=Math.min(a.size[0],s.x1-s.x0),h=Math.min(a.size[1],l.d),u=Math.min(a.size[2],Math.max(0,s.top-l.y-Jd)),f=l.back?l.z-l.d/2+h/2:l.z+l.d/2-h/2;n.push({slot:o,item:a,x:s.x0+c/2,z:f,y:l.y+Jd,w:c,d:h,h:u,back:l.back}),s.x0+=c}return n}function Qd(i){let t=Math.min(.01,i.h/3,i.w/6),e=Math.min(.025,i.w/5)+t/2,n=i.y+i.h-Math.min(.012,i.h/4)-t/2,r=.0015+t/2;return i.back?{x:i.x+i.w/2-e,y:n,z:i.z-i.d/2-r,size:t}:{x:i.x-i.w/2+e,y:n,z:i.z+i.d/2+r,size:t}}function tp(i,t){let[e,n,r]=t,o=.006,s=null;for(let a of i)Math.abs(e-a.x)>a.w/2+o||Math.abs(r-a.z)>a.d/2+o||n<a.y-o||n>a.y+a.h+o||(!s||a.w*a.h*a.d<s.w*s.h*s.d)&&(s=a);return s?.slot.id??null}function rp(i,t){let e=zi(t(i.type));return e?(n,r,o)=>gy({frame:e,size:[i.w,i.d,i.h],slots:i.rack?.slots??[],itemOf:t,nameOf:n,title:r,statusOf:o}):null}var sy=24,ay=220,Vu=8,Da=30,ls=14,ly=9,ep=7,Gu=13,op=7.6,cy="system-ui, -apple-system, Segoe UI, Roboto, sans-serif",Wu={body:"#3a4457",fabric:"#4a5468",cushion:"#56617a",wood:"#7a5a3c",white:"#e6e9ee",metal:"#9aa3b2",dark:"#2a303c",glass:"#5b7fa0",plant:"#3f7a4f",pot:"#6b5a4a",accent:"#2bb3e0"},Hu="#0d1017",uy="#161a22",hy="#07090d",np="#7d8696",Na="#3a4150",fy="#f2f5fa",ip="#a7b2c5",cs=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Be=i=>Math.round(i*10)/10+0,dy=i=>i&&/^#[0-9a-f]{3,8}$/i.test(i)?i:Wu[i??"body"]??Wu.body,py=(i,t)=>{let e=Math.max(3,Math.floor(t/op));return i.length<=e?i:`${i.slice(0,e-1).trimEnd()}\u2026`},my=(i,t)=>!i.slot.on&&ka(i.item)?.depth==="full"||i.back===(t==="rear");function gy(i){let{frame:t,slots:e,itemOf:n,nameOf:r}=i,o=i.face??"front",s=Math.max(.05,i.size[0]),a=Math.max(.005,i.size[2]),l=Vi(t,s,Math.max(.05,i.size[1]),a),c=Math.max(sy/Jr,ay/l.panel),h=Math.round(s*c+2*Da),u=Math.round(a*c+2*Vu),f=T=>Be(Da+(T+s/2)*c),d=T=>Be(Vu+(a-T)*c),p=(T,_,E,R,S,P,k="")=>`<rect class="${T}" x="${f(_)}" y="${d(S)}" width="${Be((R-_)*c)}" height="${Be((S-E)*c)}" fill="${P}"${k}/>`,g=[`<rect x="0" y="0" width="${h}" height="${u}" rx="8" fill="${Hu}"/>`];g.push(p("fp3d-el-rack",-s/2,0,s/2,a,uy,` stroke="${Na}"`));let b=l.opening/2,m=l.panel/2;g.push(p("fp3d-el-opening",-b,l.bottom,b,l.top,hy)),g.push(p("fp3d-el-rail",-m,l.bottom,-b,l.top,np),p("fp3d-el-rail",b,l.bottom,m,l.top,np));for(let T of l.units){T.index>0&&g.push(`<line x1="${f(-b)}" y1="${d(T.y0)}" x2="${f(b)}" y2="${d(T.y0)}" stroke="${Na}"/>`);let _=Be(d((T.y0+T.y1)/2)+Gu*.35);g.push(`<text class="fp3d-el-u fp3d-el-u-l" x="${Da-6}" y="${_}" font-size="${Gu}" text-anchor="end" fill="${ip}">${T.label}</text>`),g.push(`<text class="fp3d-el-u fp3d-el-u-r" x="${h-Da+6}" y="${_}" font-size="${Gu}" fill="${ip}">${T.label}</text>`)}let x=gr(l,e,n).filter(T=>my(T,o)),v=0,y=[];for(let T of x){v+=ka(T.item)?.u??0;let _=T.x-T.w/2,E=T.w*c,R=T.h*c,P=[...T.item.parts].sort((z,W)=>o==="front"?Oa(z)-Oa(W):Oa(W)-Oa(z)).map(z=>by(z,T,f,d,c,o)).join(""),k=r(T.slot,T.item),D=i.statusOf?.(T.slot)??null,U=Math.min(ly,R-4,E/4),A=!!D&&U>=3,I=py(k,E-20-(A?ep+U+4:0)),O=Be(d(T.y+T.h/2)+ls*.36),C=R>=ls+4?`<rect class="fp3d-el-tag" x="${Be(f(_)+6)}" y="${Be(O-ls)}" width="${Be(Math.min(E-12,I.length*op+8))}" height="${ls+5}" rx="3" fill="${Hu}" fill-opacity="0.75"/><text x="${Be(f(_)+10)}" y="${O}" font-size="${ls}" fill="${fy}">${cs(I)}</text>`:"",B=D&&A?`<rect class="fp3d-el-led fp3d-el-led-${D}" data-slot="${cs(T.slot.id)}" x="${Be(f(_)+E-ep-U)}" y="${Be(d(T.y+T.h/2)-U/2)}" width="${Be(U)}" height="${Be(U)}" rx="2" fill="${Fa[D]}" stroke="${Hu}"/>`:"";y.push({slot:T.slot.id,title:k,x:f(_),y:d(T.y+T.h),w:Be(E),h:Be(R)}),g.push(`<g class="fp3d-el-gear" data-slot="${cs(T.slot.id)}"><rect class="fp3d-el-face" x="${f(_)}" y="${d(T.y+T.h)}" width="${Be(E)}" height="${Be(R)}" fill="${Wu.dark}" stroke="${Na}"/>${P}${C}${B}<title>${cs(k)}</title></g>`)}let M=i.title??"Rack";return{svg:`<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${cs(M)}" class="fp3d-elevation" viewBox="0 0 ${h} ${u}" width="${h}" height="${u}" font-family="${cy}">${g.join("")}</svg>`,width:h,height:u,scale:c,pad:Vu,label:M,gear:y,pieces:x.length,used:v,u:t.u}}var Oa=i=>i.z+i.d/2;function by(i,t,e,n,r,o){let s=t.x+(o==="front"?i.x:-i.x)*t.w,a=t.y+(i.y+i.h/2)*t.h,l=i.w*t.w/2,c=i.h*t.h/2,h=dy(i.color),u=i.edges==="faint"?` stroke="${Na}"`:"";return i.shape==="sphere"||i.shape==="cyl"&&i.axis==="z"?`<ellipse class="fp3d-el-part" cx="${e(s)}" cy="${n(a)}" rx="${Be(l*r)}" ry="${Be(c*r)}" fill="${h}"${u}/>`:`<rect class="fp3d-el-part" x="${e(s-l)}" y="${n(a+c)}" width="${Be(2*l*r)}" height="${Be(2*c*r)}" fill="${h}"${u}/>`}var Vp=0,Rh=1,Gp=2;var Ph=0,Rr=1,Hp=2,Lo=3,hi=0,an=1,re=2,kn=0,Mn=1,Ee=2,Ch=3,Hs=4,Wp=5;var Pr=100,Xp=101,$p=102,Yp=103,qp=104,Kp=200,Zp=201,jp=202,Jp=203,Ih=204,Lh=205,Qp=206,tm=207,em=208,nm=209,im=210,rm=211,om=212,sm=213,am=214,ml=0,gl=1,bl=2,yo=3,xl=4,yl=5,vl=6,_l=7,Ws=0,lm=1,cm=2,$n=0,Fh=1,kh=2,Dh=3,Oh=4,Nh=5,Uh=6,Bh=7;var zh=300,Qi=301,Cr=302,Zl=303,jl=304,Xs=306,Mr=1e3,An=1001,Ml=1002,on=1003,um=1004;var $s=1005;var Ye=1006,Jl=1007;var tr=1008;var wn=1009,Vh=1010,Gh=1011,Fo=1012,Ql=1013,Yn=1014,qn=1015,Kn=1016,tc=1017,ec=1018,ko=1020,Hh=35902,Wh=35899,Xh=1021,$h=1022,Dn=1023,oi=1026,er=1027,Yh=1028,nc=1029,nr=1030,ic=1031;var rc=1033,Ys=33776,qs=33777,Ks=33778,Zs=33779,oc=35840,sc=35841,ac=35842,lc=35843,cc=36196,uc=37492,hc=37496,fc=37488,dc=37489,js=37490,pc=37491,mc=37808,gc=37809,bc=37810,xc=37811,yc=37812,vc=37813,_c=37814,Mc=37815,wc=37816,Sc=37817,Tc=37818,Ac=37819,Ec=37820,Rc=37821,Pc=36492,Cc=36494,Ic=36495,Lc=36283,Fc=36284,Js=36285,kc=36286;var ys=2300,wl=2301,fl=2302,gh=2303,bh=2400,xh=2401,yh=2402;var hm=3200;var Qs=0,fm=1,Ci="",Ie="srgb",vs="srgb-linear",_s="linear",_e="srgb";var dl=7680;var dm=519,pm=512,mm=513,gm=514,Dc=515,bm=516,xm=517,Oc=518,ym=519,qh=35044,Kh=35048;var Zh="300 es",Wn=2e3,vo=2001;function xy(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function yy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _o(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vm(){let i=_o("canvas");return i.style.display="block",i}var sp={},Mo=null;function Ms(...i){let t="THREE."+i.shift();Mo?Mo("log",t,...i):console.log(t,...i)}function _m(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qt(...i){i=_m(i);let t="THREE."+i.shift();if(Mo)Mo("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=_m(i);let t="THREE."+i.shift();if(Mo)Mo("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function _r(...i){let t=i.join(" ");t in sp||(sp[t]=!0,qt(...i))}function Mm(i,t,e){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}var wm={[ml]:gl,[bl]:vl,[xl]:_l,[yo]:yl,[gl]:ml,[vl]:bl,[_l]:xl,[yl]:yo},si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xu=Math.PI/180,Sl=180/Math.PI;function Yi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function vy(i,t){return(i%t+t)%t}function $u(i,t,e){return(1-e)*i+e*t}function ri(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ef=class ef{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,s=this.y-t.y;return this.x=o*n-s*r+t.x,this.y=o*r+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ef.prototype.isVector2=!0;var Zt=ef,ai=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,s,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=o[s+0],d=o[s+1],p=o[s+2],g=o[s+3];if(u!==g||l!==f||c!==d||h!==p){let b=l*f+c*d+h*p+u*g;b<0&&(f=-f,d=-d,p=-p,g=-g,b=-b);let m=1-a;if(b<.9995){let x=Math.acos(b),v=Math.sin(x);m=Math.sin(m*x)/v,a=Math.sin(a*x)/v,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+g*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+g*a;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=o[s],f=o[s+1],d=o[s+2],p=o[s+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,o=t._z,s=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(o/2),f=l(n/2),d=l(r/2),p=l(o/2);switch(s){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],o=e[8],s=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(s-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(o+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(o-c)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(s-r)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+s*a+r*c-o*l,this._y=r*h+s*l+o*a-n*c,this._z=o*h+s*c+n*l-r*a,this._w=s*h-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},nf=class nf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ap.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ap.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=t.elements,s=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,o=t.x,s=t.y,a=t.z,l=t.w,c=2*(s*r-a*n),h=2*(a*e-o*r),u=2*(o*n-s*e);return this.x=e+l*c+s*u-a*h,this.y=n+l*h+a*c-o*u,this.z=r+l*u+o*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,o=t.z,s=e.x,a=e.y,l=e.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yu.copy(this).projectOnVector(t),this.sub(Yu)}reflect(t){return this.sub(Yu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nf.prototype.isVector3=!0;var X=nf,Yu=new X,ap=new ai,rf=class rf{constructor(t,e,n,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c)}set(t,e,n,r,o,s,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],g=r[0],b=r[3],m=r[6],x=r[1],v=r[4],y=r[7],M=r[2],w=r[5],T=r[8];return o[0]=s*g+a*x+l*M,o[3]=s*b+a*v+l*w,o[6]=s*m+a*y+l*T,o[1]=c*g+h*x+u*M,o[4]=c*b+h*v+u*w,o[7]=c*m+h*y+u*T,o[2]=f*g+d*x+p*M,o[5]=f*b+d*v+p*w,o[8]=f*m+d*y+p*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*s*h-e*a*c-n*o*h+n*a*l+r*o*c-r*s*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*s-a*c,f=a*l-h*o,d=c*o-s*l,p=e*u+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return t[0]=u*g,t[1]=(r*c-h*n)*g,t[2]=(a*n-r*s)*g,t[3]=f*g,t[4]=(h*e-r*l)*g,t[5]=(r*o-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(s*e-n*o)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+t,-r*c,r*l,-r*(-c*s+l*a)+a+e,0,0,1),this}scale(t,e){return _r("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qu.makeScale(t,e)),this}rotate(t){return _r("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qu.makeRotation(-t)),this}translate(t,e){return _r("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};rf.prototype.isMatrix3=!0;var ne=rf,qu=new ne,lp=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cp=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _y(){let i={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===_e&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===_e&&(r.r=xo(r.r),r.g=xo(r.g),r.b=xo(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ci?_s:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return _r("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return _r("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vs]:{primaries:t,whitePoint:n,transfer:_s,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}var fe=_y();function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qr,Tl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Qr===void 0&&(Qr=_o("canvas")),Qr.width=t.width,Qr.height=t.height;let r=Qr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Qr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_o("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ri(o[s]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ri(e[n]/255)*255):e[n]=Ri(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},My=0,wo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Yi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Ku(r[s].image)):o.push(Ku(r[s]))}else o=Ku(r);n.url=o}return e||(t.images[this.uuid]=n),n}};function Ku(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var wy=0,Zu=new X,dn=class i extends si{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=An,r=An,o=Ye,s=tr,a=Dn,l=wn,c=i.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Yi(),this.name="",this.source=new wo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zu).x}get height(){return this.source.getSize(Zu).y}get depth(){return this.source.getSize(Zu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mr:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case Ml:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mr:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case Ml:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=zh;dn.DEFAULT_ANISOTROPY=1;var of=class of{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*e+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*e+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*e+s[7]*n+s[11]*r+s[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],g=l[2],b=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(p-b)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(p+b)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,y=(d+1)/2,M=(m+1)/2,w=(h+f)/4,T=(u+g)/4,_=(p+b)/4;return v>y&&v>M?v<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(v),r=w/n,o=T/n):y>M?y<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),n=w/r,o=_/r):M<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),n=T/o,r=_/o),this.set(n,r,o,e),this}let x=Math.sqrt((b-p)*(b-p)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(b-p)/x,this.y=(u-g)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};of.prototype.isVector4=!0;var Oe=of,Al=class extends si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},o=new dn(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new wo(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qe=class extends Al{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ws=class extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var El=class extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Kl=class Kl{constructor(t,e,n,r,o,s,a,l,c,h,u,f,d,p,g,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c,h,u,f,d,p,g,b)}set(t,e,n,r,o,s,a,l,c,h,u,f,d,p,g,b){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=o,m[5]=s,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=g,m[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/to.setFromMatrixColumn(t,0).length(),o=1/to.setFromMatrixColumn(t,1).length(),s=1/to.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,o=t.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){let f=s*h,d=s*u,p=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=p+d*c,e[10]=s*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,g=c*u;e[0]=f+g*a,e[4]=p*a-d,e[8]=s*c,e[1]=s*u,e[5]=s*h,e[9]=-a,e[2]=d*a-p,e[6]=g+f*a,e[10]=s*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,g=c*u;e[0]=f-g*a,e[4]=-s*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=s*h,e[9]=g-f*a,e[2]=-s*c,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){let f=s*h,d=s*u,p=a*h,g=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){let f=s*l,d=s*c,p=a*l,g=a*c;e[0]=l*h,e[4]=g-f*u,e[8]=p*u+d,e[1]=u,e[5]=s*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-g*u}else if(t.order==="XZY"){let f=s*l,d=s*c,p=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=s*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sy,t,Ty)}lookAt(t,e,n){let r=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Gi.crossVectors(n,Sn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Gi.crossVectors(n,Sn)),Gi.normalize(),Ua.crossVectors(Sn,Gi),r[0]=Gi.x,r[4]=Ua.x,r[8]=Sn.x,r[1]=Gi.y,r[5]=Ua.y,r[9]=Sn.y,r[2]=Gi.z,r[6]=Ua.z,r[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],g=n[6],b=n[10],m=n[14],x=n[3],v=n[7],y=n[11],M=n[15],w=r[0],T=r[4],_=r[8],E=r[12],R=r[1],S=r[5],P=r[9],k=r[13],D=r[2],U=r[6],A=r[10],I=r[14],O=r[3],C=r[7],B=r[11],z=r[15];return o[0]=s*w+a*R+l*D+c*O,o[4]=s*T+a*S+l*U+c*C,o[8]=s*_+a*P+l*A+c*B,o[12]=s*E+a*k+l*I+c*z,o[1]=h*w+u*R+f*D+d*O,o[5]=h*T+u*S+f*U+d*C,o[9]=h*_+u*P+f*A+d*B,o[13]=h*E+u*k+f*I+d*z,o[2]=p*w+g*R+b*D+m*O,o[6]=p*T+g*S+b*U+m*C,o[10]=p*_+g*P+b*A+m*B,o[14]=p*E+g*k+b*I+m*z,o[3]=x*w+v*R+y*D+M*O,o[7]=x*T+v*S+y*U+M*C,o[11]=x*_+v*P+y*A+M*B,o[15]=x*E+v*k+y*I+M*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],s=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],g=t[7],b=t[11],m=t[15],x=l*d-c*f,v=a*d-c*u,y=a*f-l*u,M=s*d-c*h,w=s*f-l*h,T=s*u-a*h;return e*(g*x-b*v+m*y)-n*(p*x-b*M+m*w)+r*(p*v-g*M+m*T)-o*(p*y-g*w+b*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[1],s=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(s*h-a*c)-n*(o*h-a*l)+r*(o*c-s*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],g=t[13],b=t[14],m=t[15],x=e*a-n*s,v=e*l-r*s,y=e*c-o*s,M=n*l-r*a,w=n*c-o*a,T=r*c-o*l,_=h*g-u*p,E=h*b-f*p,R=h*m-d*p,S=u*b-f*g,P=u*m-d*g,k=f*m-d*b,D=x*k-v*P+y*S+M*R-w*E+T*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/D;return t[0]=(a*k-l*P+c*S)*U,t[1]=(r*P-n*k-o*S)*U,t[2]=(g*T-b*w+m*M)*U,t[3]=(f*w-u*T-d*M)*U,t[4]=(l*R-s*k-c*E)*U,t[5]=(e*k-r*R+o*E)*U,t[6]=(b*y-p*T-m*v)*U,t[7]=(h*T-f*y+d*v)*U,t[8]=(s*P-a*R+c*_)*U,t[9]=(n*R-e*P-o*_)*U,t[10]=(p*w-g*y+m*x)*U,t[11]=(u*y-h*w-d*x)*U,t[12]=(a*E-s*S-l*_)*U,t[13]=(e*S-n*E+r*_)*U,t[14]=(g*v-p*M-b*x)*U,t[15]=(h*M-u*v+f*x)*U,this}scale(t){let e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),o=1-n,s=t.x,a=t.y,l=t.z,c=o*s,h=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*s,0,c*l-r*a,h*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,s){return this.set(1,n,o,0,t,1,s,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,o=e._x,s=e._y,a=e._z,l=e._w,c=o+o,h=s+s,u=a+a,f=o*c,d=o*h,p=o*u,g=s*h,b=s*u,m=a*u,x=l*c,v=l*h,y=l*u,M=n.x,w=n.y,T=n.z;return r[0]=(1-(g+m))*M,r[1]=(d+y)*M,r[2]=(p-v)*M,r[3]=0,r[4]=(d-y)*w,r[5]=(1-(f+m))*w,r[6]=(b+x)*w,r[7]=0,r[8]=(p+v)*T,r[9]=(b-x)*T,r[10]=(1-(f+g))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let s=to.set(r[0],r[1],r[2]).length(),a=to.set(r[4],r[5],r[6]).length(),l=to.set(r[8],r[9],r[10]).length();o<0&&(s=-s),zn.copy(this);let c=1/s,h=1/a,u=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,e.setFromRotationMatrix(zn),n.x=s,n.y=a,n.z=l,this}makePerspective(t,e,n,r,o,s,a=Wn,l=!1){let c=this.elements,h=2*o/(e-t),u=2*o/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),p,g;if(l)p=o/(s-o),g=s*o/(s-o);else if(a===Wn)p=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===vo)p=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,o,s,a=Wn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),p,g;if(l)p=1/(s-o),g=s/(s-o);else if(a===Wn)p=-2/(s-o),g=-(s+o)/(s-o);else if(a===vo)p=-1/(s-o),g=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Kl.prototype.isMatrix4=!0;var Me=Kl,to=new X,zn=new Me,Sy=new X(0,0,0),Ty=new X(1,1,1),Gi=new X,Ua=new X,Sn=new X,up=new Me,hp=new ai,li=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-pe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return up.makeRotationFromQuaternion(t),this.setFromRotationMatrix(up,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hp.setFromEuler(this),this.setFromQuaternion(hp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var So=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ay=0,fp=new X,eo=new ai,Mi=new Me,Ba=new X,us=new X,Ey=new X,Ry=new ai,dp=new X(1,0,0),pp=new X(0,1,0),mp=new X(0,0,1),gp={type:"added"},Py={type:"removed"},no={type:"childadded",child:null},ju={type:"childremoved",child:null},Ze=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new X,e=new li,n=new ai,r=new X(1,1,1);function o(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Me},normalMatrix:{value:new ne}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return eo.setFromAxisAngle(t,e),this.quaternion.multiply(eo),this}rotateOnWorldAxis(t,e){return eo.setFromAxisAngle(t,e),this.quaternion.premultiply(eo),this}rotateX(t){return this.rotateOnAxis(dp,t)}rotateY(t){return this.rotateOnAxis(pp,t)}rotateZ(t){return this.rotateOnAxis(mp,t)}translateOnAxis(t,e){return fp.copy(t).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dp,t)}translateY(t){return this.translateOnAxis(pp,t)}translateZ(t){return this.translateOnAxis(mp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ba.copy(t):Ba.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(us,Ba,this.up):Mi.lookAt(Ba,us,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),eo.setFromRotationMatrix(Mi),this.quaternion.premultiply(eo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gp),no.child=t,this.dispatchEvent(no),no.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Py),ju.child=t,this.dispatchEvent(ju),ju.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gp),no.child=t,this.dispatchEvent(no),no.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,Ey),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Ry,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*r,o[13]+=n-o[1]*e-o[5]*n-o[9]*r,o[14]+=r-o[2]*e-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));r.material=a}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(t.animations,l))}}if(e){let a=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),u=s(t.shapes),f=s(t.skeletons),d=s(t.animations),p=s(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function s(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ze.DEFAULT_UP=new X(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Te=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cy={type:"move"},To=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(let g of t.hand.values()){let b=e.getJointPose(g,n),m=this._getHandJoint(c,g);b!==null&&(m.matrix.fromArray(b.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=b.radius),m.visible=b!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},za={h:0,s:0,l:0};function Ju(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var K=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=fe.workingColorSpace){if(t=vy(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,s=2*n-o;this.r=Ju(s,o,t+1/3),this.g=Ju(s,o,t),this.b=Ju(s,o,t-1/3)}return fe.colorSpaceToWorking(this,r),this}setStyle(t,e=Ie){function n(o){o!==void 0&&parseFloat(o)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(o,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=Sm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=xo(t.r),this.g=xo(t.g),this.b=xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return fe.workingToColorSpace(fn.copy(this),t),Math.round(pe(fn.r*255,0,255))*65536+Math.round(pe(fn.g*255,0,255))*256+Math.round(pe(fn.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(fn.copy(this),e);let n=fn.r,r=fn.g,o=fn.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,h=(a+s)/2;if(a===s)l=0,c=0;else{let u=s-a;switch(c=h<=.5?u/(s+a):u/(2-s-a),s){case n:l=(r-o)/u+(r<o?6:0);break;case r:l=(o-n)/u+2;break;case o:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Ie){fe.workingToColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,r=fn.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(za);let n=$u(Hi.h,za.h,e),r=$u(Hi.s,za.s,e),o=$u(Hi.l,za.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new K;K.NAMES=Sm;var Ss=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new K(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ci=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vn=new X,wi=new X,Qu=new X,Si=new X,io=new X,ro=new X,bp=new X,th=new X,eh=new X,nh=new X,ih=new Oe,rh=new Oe,oh=new Oe,Ei=class i{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Vn.subVectors(t,e),r.cross(Vn);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){Vn.subVectors(r,e),wi.subVectors(n,e),Qu.subVectors(t,e);let s=Vn.dot(Vn),a=Vn.dot(wi),l=Vn.dot(Qu),c=wi.dot(wi),h=wi.dot(Qu),u=s*c-a*a;if(u===0)return o.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(s*h-a*l)*f;return o.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,n,r,o,s,a,l){return this.getBarycoord(t,e,n,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Si.x),l.addScaledVector(s,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(t,e,n,r,o,s){return ih.setScalar(0),rh.setScalar(0),oh.setScalar(0),ih.fromBufferAttribute(t,e),rh.fromBufferAttribute(t,n),oh.fromBufferAttribute(t,r),s.setScalar(0),s.addScaledVector(ih,o.x),s.addScaledVector(rh,o.y),s.addScaledVector(oh,o.z),s}static isFrontFacing(t,e,n,r){return Vn.subVectors(n,e),wi.subVectors(t,e),Vn.cross(wi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Vn.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,o){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,o=this.c,s,a;io.subVectors(r,n),ro.subVectors(o,n),th.subVectors(t,n);let l=io.dot(th),c=ro.dot(th);if(l<=0&&c<=0)return e.copy(n);eh.subVectors(t,r);let h=io.dot(eh),u=ro.dot(eh);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),e.copy(n).addScaledVector(io,s);nh.subVectors(t,o);let d=io.dot(nh),p=ro.dot(nh);if(p>=0&&d<=p)return e.copy(o);let g=d*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(ro,a);let b=h*p-d*u;if(b<=0&&u-h>=0&&d-p>=0)return bp.subVectors(o,r),a=(u-h)/(u-h+(d-p)),e.copy(r).addScaledVector(bp,a);let m=1/(b+g+f);return s=g*m,a=f*m,e.copy(n).addScaledVector(io,s).addScaledVector(ro,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_n=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,Gn):Gn.fromBufferAttribute(o,s),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Va.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Va.copy(n.boundingBox)),Va.applyMatrix4(t.matrixWorld),this.union(Va)}let r=t.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),Ga.subVectors(this.max,hs),oo.subVectors(t.a,hs),so.subVectors(t.b,hs),ao.subVectors(t.c,hs),Wi.subVectors(so,oo),Xi.subVectors(ao,so),br.subVectors(oo,ao);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-br.z,br.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,br.z,0,-br.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-br.y,br.x,0];return!sh(e,oo,so,ao,Ga)||(e=[1,0,0,0,1,0,0,0,1],!sh(e,oo,so,ao,Ga))?!1:(Ha.crossVectors(Wi,Xi),e=[Ha.x,Ha.y,Ha.z],sh(e,oo,so,ao,Ga))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ti=[new X,new X,new X,new X,new X,new X,new X,new X],Gn=new X,Va=new _n,oo=new X,so=new X,ao=new X,Wi=new X,Xi=new X,br=new X,hs=new X,Ga=new X,Ha=new X,xr=new X;function sh(i,t,e,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){xr.fromArray(i,o);let a=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),l=t.dot(xr),c=e.dot(xr),h=n.dot(xr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $e=new X,Wa=new Zt,Iy=0,vn=class extends si{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qh,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wa.fromBufferAttribute(this,e),Wa.applyMatrix3(t),this.setXY(e,Wa.x,Wa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array),o=Se(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ts=class extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var wr=class extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var It=class extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ly=new _n,fs=new X,ah=new X,qi=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ly.setFromPoints(t).getCenter(n);let r=0;for(let o=0,s=t.length;o<s;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);let e=fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(fs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ah.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(ah)),this.expandByPoint(fs.copy(t.center).sub(ah))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Fy=0,Ln=new Me,lh=new Ze,lo=new X,Tn=new _n,ds=new _n,nn=new X,Vt=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xy(t)?wr:Ts)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new ne().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return lh.lookAt(t),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,o=t.length;r<o;r++){let s=t[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let o=e[n];Tn.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let o=0,s=e.length;o<s;o++){let a=e[o];ds.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Tn.min,ds.min),Tn.expandByPoint(nn),nn.addVectors(Tn.max,ds.max),Tn.expandByPoint(nn)):(Tn.expandByPoint(ds.min),Tn.expandByPoint(ds.max))}Tn.getCenter(n);let r=0;for(let o=0,s=t.count;o<s;o++)nn.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(nn));if(e)for(let o=0,s=e.length;o<s;o++){let a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(lo.fromBufferAttribute(t,c),nn.add(lo)),r=Math.max(r,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,o=e.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new X,l[_]=new X;let c=new X,h=new X,u=new X,f=new Zt,d=new Zt,p=new Zt,g=new X,b=new X;function m(_,E,R){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,R),f.fromBufferAttribute(o,_),d.fromBufferAttribute(o,E),p.fromBufferAttribute(o,R),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let S=1/(d.x*p.y-p.x*d.y);isFinite(S)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(S),b.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(S),a[_].add(g),a[E].add(g),a[R].add(g),l[_].add(b),l[E].add(b),l[R].add(b))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let _=0,E=x.length;_<E;++_){let R=x[_],S=R.start,P=R.count;for(let k=S,D=S+P;k<D;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let v=new X,y=new X,M=new X,w=new X;function T(_){M.fromBufferAttribute(r,_),w.copy(M);let E=a[_];v.copy(E),v.sub(M.multiplyScalar(M.dot(E))).normalize(),y.crossVectors(w,E);let S=y.dot(l[_])<0?-1:1;s.setXYZW(_,v.x,v.y,v.z,S)}for(let _=0,E=x.length;_<E;++_){let R=x[_],S=R.start,P=R.count;for(let k=S,D=S+P;k<D;k+=3)T(t.getX(k+0)),T(t.getX(k+1)),T(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new X,o=new X,s=new X,a=new X,l=new X,c=new X,h=new X,u=new X;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),g=t.getX(f+1),b=t.getX(f+2);r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,g),s.fromBufferAttribute(e,b),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(b,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),s.fromBufferAttribute(e,f+2),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let g=0,b=l.length;g<b;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new vn(f,h,u)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let o=t.morphAttributes;for(let c in o){let h=[],u=o[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qh,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},yn=new X,As=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ri(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ri(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ri(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ri(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array),o=Se(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){Ms("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ms("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ch=new X,ky=new X,Dy=new ne,Hn=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=ch.subVectors(n,e).cross(ky.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(ch),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(r,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Dy.getNormalMatrix(t),r=this.coplanarPoint(ch).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Oy=0,Fn=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Mn,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Lh,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dl,this.stencilZFail=dl,this.stencilZPass=dl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(e){let o=r(t.textures),s=r(t.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new K().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ao=class extends Fn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new K(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},co,ps=new X,uo=new X,ho=new X,fo=new Zt,ms=new Zt,Tm=new Me,Xa=new X,gs=new X,$a=new X,xp=new Zt,uh=new Zt,yp=new Zt,Es=class extends Ze{constructor(t=new Ao){if(super(),this.isSprite=!0,this.type="Sprite",co===void 0){co=new Vt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rl(e,5);co.setIndex([0,1,2,0,2,3]),co.setAttribute("position",new As(n,3,0,!1)),co.setAttribute("uv",new As(n,2,3,!1))}this.geometry=co,this.material=t,this.center=new Zt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),uo.setFromMatrixScale(this.matrixWorld),Tm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ho.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&uo.multiplyScalar(-ho.z);let n=this.material.rotation,r,o;n!==0&&(o=Math.cos(n),r=Math.sin(n));let s=this.center;Ya(Xa.set(-.5,-.5,0),ho,s,uo,r,o),Ya(gs.set(.5,-.5,0),ho,s,uo,r,o),Ya($a.set(.5,.5,0),ho,s,uo,r,o),xp.set(0,0),uh.set(1,0),yp.set(1,1);let a=t.ray.intersectTriangle(Xa,gs,$a,!1,ps);if(a===null&&(Ya(gs.set(-.5,.5,0),ho,s,uo,r,o),uh.set(0,1),a=t.ray.intersectTriangle(Xa,$a,gs,!1,ps),a===null))return;let l=t.ray.origin.distanceTo(ps);l<t.near||l>t.far||e.push({distance:l,point:ps.clone(),uv:Ei.getInterpolation(ps,Xa,gs,$a,xp,uh,yp,new Zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ya(i,t,e,n,r,o){fo.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(ms.x=o*fo.x-r*fo.y,ms.y=r*fo.x+o*fo.y):ms.copy(fo),i.copy(t),i.x+=ms.x,i.y+=ms.y,i.applyMatrix4(Tm)}var Ai=new X,hh=new X,qa=new X,Ka=new X,Sr=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){hh.copy(t).add(e).multiplyScalar(.5),qa.copy(e).sub(t).normalize(),Ka.copy(this.origin).sub(hh);let o=t.distanceTo(e)*.5,s=-this.direction.dot(qa),a=Ka.dot(this.direction),l=-Ka.dot(qa),c=Ka.lengthSq(),h=Math.abs(1-s*s),u,f,d,p;if(h>0)if(u=s*l-a,f=s*a-l,p=o*h,u>=0)if(f>=-p)if(f<=p){let g=1/h;u*=g,f*=g,d=u*(u+s*f+2*a)+f*(s*u+f+2*l)+c}else f=o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-s*o+a)),f=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+c):(u=Math.max(0,-(s*o+a)),f=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c);else f=s>0?-o:o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(hh).addScaledVector(qa,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ai.subVectors(t.center,this.origin);let n=Ai.dot(this.direction),r=Ai.dot(Ai)-n*n,o=t.radius*t.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,s,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(o=(t.min.y-f.y)*h,s=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,s=(t.min.y-f.y)*h),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-s.x,f=t.y-s.y,d=t.z-s.z,p=e.x-s.x,g=e.y-s.y,b=e.z-s.z,m=n.x-s.x,x=n.y-s.y,v=n.z-s.z,y=Math.abs(l),M=Math.abs(c),w=Math.abs(h),T,_,E,R,S,P,k,D,U,A,I,O;if(y>=M&&y>=w?(E=l,P=u,U=p,O=m,l>=0?(T=c,_=h,R=f,S=d,k=g,D=b,A=x,I=v):(T=h,_=c,R=d,S=f,k=b,D=g,A=v,I=x)):M>=w?(E=c,P=f,U=g,O=x,c>=0?(T=h,_=l,R=d,S=u,k=b,D=p,A=v,I=m):(T=l,_=h,R=u,S=d,k=p,D=b,A=m,I=v)):(E=h,P=d,U=b,O=v,h>=0?(T=l,_=c,R=u,S=f,k=p,D=g,A=m,I=x):(T=c,_=l,R=f,S=u,k=g,D=p,A=x,I=m)),E===0)return null;let C=T/E,B=_/E,z=1/E,W=R-C*P,V=S-B*P,Y=k-C*U,et=D-B*U,nt=A-C*O,$=I-B*O,H=nt*et-$*Y,J=W*$-V*nt,ot=Y*V-et*W;if(r){if(H<0||J<0||ot<0)return null}else if((H<0||J<0||ot<0)&&(H>0||J>0||ot>0))return null;let Q=H+J+ot;if(Q===0)return null;let bt=z*(H*P+J*U+ot*O);return(Q>0?bt<0:bt>0)?null:this.at(bt/Q,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class extends Fn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},vp=new Me,yr=new Sr,Za=new qi,_p=new X,ja=new X,Ja=new X,Qa=new X,fh=new X,tl=new X,Mp=new X,el=new X,_t=class extends Ze{constructor(t=new Vt,e=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(o&&a){tl.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],u=o[l];h!==0&&(fh.fromBufferAttribute(u,t),s?tl.addScaledVector(fh,h):tl.addScaledVector(fh.sub(e),h))}e.add(tl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(o),yr.copy(t.ray).recast(t.near),!(Za.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Za,_p)===null||yr.origin.distanceToSquared(_p)>(t.far-t.near)**2))&&(vp.copy(o).invert(),yr.copy(t.ray).applyMatrix4(vp),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yr)))}_computeIntersections(t,e,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,g=f.length;p<g;p++){let b=f[p],m=s[b.materialIndex],x=Math.max(b.start,d.start),v=Math.min(a.count,Math.min(b.start+b.count,d.start+d.count));for(let y=x,M=v;y<M;y+=3){let w=a.getX(y),T=a.getX(y+1),_=a.getX(y+2);r=nl(this,m,t,n,c,h,u,w,T,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=b.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let b=p,m=g;b<m;b+=3){let x=a.getX(b),v=a.getX(b+1),y=a.getX(b+2);r=nl(this,s,t,n,c,h,u,x,v,y),r&&(r.faceIndex=Math.floor(b/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,g=f.length;p<g;p++){let b=f[p],m=s[b.materialIndex],x=Math.max(b.start,d.start),v=Math.min(l.count,Math.min(b.start+b.count,d.start+d.count));for(let y=x,M=v;y<M;y+=3){let w=y,T=y+1,_=y+2;r=nl(this,m,t,n,c,h,u,w,T,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=b.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let b=p,m=g;b<m;b+=3){let x=b,v=b+1,y=b+2;r=nl(this,s,t,n,c,h,u,x,v,y),r&&(r.faceIndex=Math.floor(b/3),e.push(r))}}}};function Ny(i,t,e,n,r,o,s,a){let l;if(t.side===an?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,t.side===hi,a),l===null)return null;el.copy(a),el.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(el);return c<e.near||c>e.far?null:{distance:c,point:el.clone(),object:i}}function nl(i,t,e,n,r,o,s,a,l,c){i.getVertexPosition(a,ja),i.getVertexPosition(l,Ja),i.getVertexPosition(c,Qa);let h=Ny(i,t,e,n,ja,Ja,Qa,Mp);if(h){let u=new X;Ei.getBarycoord(Mp,ja,Ja,Qa,u),r&&(h.uv=Ei.getInterpolatedAttribute(r,a,l,c,u,new Zt)),o&&(h.uv1=Ei.getInterpolatedAttribute(o,a,l,c,u,new Zt)),s&&(h.normal=Ei.getInterpolatedAttribute(s,a,l,c,u,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new X,materialIndex:0};Ei.getNormal(ja,Ja,Qa,f.normal),h.face=f,h.barycoord=u}return h}var Pl=class extends dn{constructor(t=null,e=1,n=1,r,o,s,a,l,c=on,h=on,u,f){super(null,s,a,l,c,h,r,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=new qi,Uy=new Zt(.5,.5),il=new X,Eo=class{constructor(t=new Hn,e=new Hn,n=new Hn,r=new Hn,o=new Hn,s=new Hn){this.planes=[t,e,n,r,o,s]}set(t,e,n,r,o,s){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){let r=this.planes,o=t.elements,s=o[0],a=o[1],l=o[2],c=o[3],h=o[4],u=o[5],f=o[6],d=o[7],p=o[8],g=o[9],b=o[10],m=o[11],x=o[12],v=o[13],y=o[14],M=o[15];if(r[0].setComponents(c-s,d-h,m-p,M-x).normalize(),r[1].setComponents(c+s,d+h,m+p,M+x).normalize(),r[2].setComponents(c+a,d+u,m+g,M+v).normalize(),r[3].setComponents(c-a,d-u,m-g,M-v).normalize(),n)r[4].setComponents(l,f,b,y).normalize(),r[5].setComponents(c-l,d-f,m-b,M-y).normalize();else if(r[4].setComponents(c-l,d-f,m-b,M-y).normalize(),e===Wn)r[5].setComponents(c+l,d+f,m+b,M+y).normalize();else if(e===vo)r[5].setComponents(l,f,b,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(t){vr.center.set(0,0,0);let e=Uy.distanceTo(t.center);return vr.radius=.7071067811865476+e,vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(il.x=r.normal.x>0?t.max.x:t.min.x,il.y=r.normal.y>0?t.max.y:t.min.y,il.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(il)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var je=class extends Fn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new K(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Cl=new X,Il=new X,wp=new Me,bs=new Sr,rl=new qi,dh=new X,Sp=new X,Ll=class extends Ze{constructor(t=new Vt,e=new je){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,o=e.count;r<o;r++)Cl.fromBufferAttribute(e,r-1),Il.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Cl.distanceTo(Il);t.setAttribute("lineDistance",new It(n,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(r),rl.radius+=o,t.ray.intersectsSphere(rl)===!1)return;wp.copy(r).invert(),bs.copy(t.ray).applyMatrix4(wp);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let g=d,b=p-1;g<b;g+=c){let m=h.getX(g),x=h.getX(g+1),v=ol(this,t,bs,l,m,x,g);v&&e.push(v)}if(this.isLineLoop){let g=h.getX(p-1),b=h.getX(d),m=ol(this,t,bs,l,g,b,p-1);m&&e.push(m)}}else{let d=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let g=d,b=p-1;g<b;g+=c){let m=ol(this,t,bs,l,g,g+1,g);m&&e.push(m)}if(this.isLineLoop){let g=ol(this,t,bs,l,p-1,d,p-1);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function ol(i,t,e,n,r,o,s){let a=i.geometry.attributes.position;if(Cl.fromBufferAttribute(a,r),Il.fromBufferAttribute(a,o),e.distanceSqToSegment(Cl,Il,dh,Sp)>n)return;dh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(dh);if(!(c<t.near||c>t.far))return{distance:c,point:Sp.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Tp=new X,Ap=new X,Ge=class extends Ll{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,o=e.count;r<o;r+=2)Tp.fromBufferAttribute(e,r),Ap.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Tp.distanceTo(Ap);t.setAttribute("lineDistance",new It(n,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Pi=class extends Fn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ep=new Me,vh=new Sr,sl=new qi,al=new X,Ki=class extends Ze{constructor(t=new Vt,e=new Pi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(r),sl.radius+=o,t.ray.intersectsSphere(sl)===!1)return;Ep.copy(r).invert(),vh.copy(t.ray).applyMatrix4(Ep);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let p=f,g=d;p<g;p++){let b=c.getX(p);al.fromBufferAttribute(u,b),Rp(al,b,l,r,t,e,this)}}else{let f=Math.max(0,s.start),d=Math.min(u.count,s.start+s.count);for(let p=f,g=d;p<g;p++)al.fromBufferAttribute(u,p),Rp(al,p,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Rp(i,t,e,n,r,o,s){let a=vh.distanceSqToPoint(i);if(a<e){let l=new X;vh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var Rs=class extends dn{constructor(t=[],e=Qi,n,r,o,s,a,l,c,h){super(t,e,n,r,o,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pn=class extends dn{constructor(t,e,n,r,o,s,a,l,c){super(t,e,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ui=class extends dn{constructor(t,e,n=Yn,r,o,s,a=on,l=on,c,h=oi,u=1){if(h!==oi&&h!==er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,o,s,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fl=class extends ui{constructor(t,e=Yn,n=Qi,r,o,s=on,a=on,l,c=oi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,r,o,s,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ps=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ro=class i extends Vt{constructor(t=1,e=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,s,o,0),p("z","y","x",1,-1,n,e,-t,s,o,1),p("x","z","y",1,1,t,n,e,r,s,2),p("x","z","y",1,-1,t,n,-e,r,s,3),p("x","y","z",1,-1,t,e,n,r,o,4),p("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function p(g,b,m,x,v,y,M,w,T,_,E){let R=y/T,S=M/_,P=y/2,k=M/2,D=w/2,U=T+1,A=_+1,I=0,O=0,C=new X;for(let B=0;B<A;B++){let z=B*S-k;for(let W=0;W<U;W++){let V=W*R-P;C[g]=V*x,C[b]=z*v,C[m]=D,c.push(C.x,C.y,C.z),C[g]=0,C[b]=0,C[m]=w>0?1:-1,h.push(C.x,C.y,C.z),u.push(W/T),u.push(1-B/_),I+=1}}for(let B=0;B<_;B++)for(let z=0;z<T;z++){let W=f+z+U*B,V=f+z+U*(B+1),Y=f+(z+1)+U*(B+1),et=f+(z+1)+U*B;l.push(W,V,et),l.push(V,Y,et),O+=6}a.addGroup(d,O,E),d+=O,f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Tr=class i extends Vt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let o=[],s=[],a=[],l=[],c=new X,h=new Zt;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),s.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(s[f]/t+1)/2,h.y=(s[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new It(s,3)),this.setAttribute("normal",new It(a,3)),this.setAttribute("uv",new It(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function By(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,o=Am(i,0,r,e,!0),s=[];if(!o||o.next===o.prev)return s;let a,l,c;if(n&&(o=Wy(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<r;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Cs(o,s,e,a,l,c,0),s}function Am(i,t,e,n,r){let o;if(r===ev(i,t,e,n)>0)for(let s=t;s<e;s+=n)o=Pp(s/n|0,i[s],i[s+1],o);else for(let s=e-n;s>=t;s-=n)o=Pp(s/n|0,i[s],i[s+1],o);return o&&Po(o,o.next)&&(Ls(o),o=o.next),o}function Ar(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Po(e,e.next)||Ue(e.prev,e,e.next)===0)){if(Ls(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Cs(i,t,e,n,r,o,s){if(!i)return;!s&&o&&Ky(i,n,r,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?Vy(i,n,r,o):zy(i)){t.push(l.i,i.i,c.i),Ls(i),i=c.next,a=c.next;continue}if(i=c,i===a){s?s===1?(i=Gy(Ar(i),t),Cs(i,t,e,n,r,o,2)):s===2&&Hy(i,t,e,n,r,o):Cs(Ar(i),t,e,n,r,o,1);break}}}function zy(i){let t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;let r=t.x,o=e.x,s=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,o,s),u=Math.min(a,l,c),f=Math.max(r,o,s),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&xs(r,a,o,l,s,c,p.x,p.y)&&Ue(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Vy(i,t,e,n){let r=i.prev,o=i,s=i.next;if(Ue(r,o,s)>=0)return!1;let a=r.x,l=o.x,c=s.x,h=r.y,u=o.y,f=s.y,d=Math.min(a,l,c),p=Math.min(h,u,f),g=Math.max(a,l,c),b=Math.max(h,u,f),m=_h(d,p,t,e,n),x=_h(g,b,t,e,n),v=i.prevZ,y=i.nextZ;for(;v&&v.z>=m&&y&&y.z<=x;){if(v.x>=d&&v.x<=g&&v.y>=p&&v.y<=b&&v!==r&&v!==s&&xs(a,h,l,u,c,f,v.x,v.y)&&Ue(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=g&&y.y>=p&&y.y<=b&&y!==r&&y!==s&&xs(a,h,l,u,c,f,y.x,y.y)&&Ue(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=g&&v.y>=p&&v.y<=b&&v!==r&&v!==s&&xs(a,h,l,u,c,f,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=g&&y.y>=p&&y.y<=b&&y!==r&&y!==s&&xs(a,h,l,u,c,f,y.x,y.y)&&Ue(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Gy(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Po(n,r)&&Rm(n,e,e.next,r)&&Is(n,r)&&Is(r,n)&&(t.push(n.i,e.i,r.i),Ls(e),Ls(e.next),e=i=r),e=e.next}while(e!==i);return Ar(e)}function Hy(i,t,e,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&Jy(s,a)){let l=Pm(s,a);s=Ar(s,s.next),l=Ar(l,l.next),Cs(s,t,e,n,r,o,0),Cs(l,t,e,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function Wy(i,t,e,n){let r=[];for(let o=0,s=t.length;o<s;o++){let a=t[o]*n,l=o<s-1?t[o+1]*n:i.length,c=Am(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(jy(c))}r.sort(Xy);for(let o=0;o<r.length;o++)e=$y(r[o],e);return e}function Xy(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function $y(i,t){let e=Yy(i,t);if(!e)return t;let n=Pm(e,i);return Ar(n,n.next),Ar(e,e.next)}function Yy(i,t){let e=t,n=i.x,r=i.y,o=-1/0,s;if(Po(i,e))return e;do{if(Po(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>o&&(o=u,s=e.x<e.next.x?e:e.next,u===n))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0;e=s;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Em(r<c?n:o,r,l,c,r<c?o:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);Is(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&qy(s,e)))&&(s=e,h=u)}e=e.next}while(e!==a);return s}function qy(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function Ky(i,t,e,n){let r=i;do r.z===0&&(r.z=_h(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Zy(r)}function Zy(i){let t,e=1;do{let n=i,r;i=null;let o=null;for(t=0;n;){t++;let s=n,a=0;for(let c=0;c<e&&(a++,s=s.nextZ,!!s);c++);let l=e;for(;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,l--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,e*=2}while(t>1);return i}function _h(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function jy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Em(i,t,e,n,r,o,s,a){return(r-s)*(t-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(e-s)*(t-a)&&(e-s)*(o-a)>=(r-s)*(n-a)}function xs(i,t,e,n,r,o,s,a){return!(i===s&&t===a)&&Em(i,t,e,n,r,o,s,a)}function Jy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Qy(i,t)&&(Is(i,t)&&Is(t,i)&&tv(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||Po(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Po(i,t){return i.x===t.x&&i.y===t.y}function Rm(i,t,e,n){let r=cl(Ue(i,t,e)),o=cl(Ue(i,t,n)),s=cl(Ue(e,n,i)),a=cl(Ue(e,n,t));return!!(r!==o&&s!==a||r===0&&ll(i,e,t)||o===0&&ll(i,n,t)||s===0&&ll(e,i,n)||a===0&&ll(e,t,n))}function ll(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function cl(i){return i>0?1:i<0?-1:0}function Qy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Rm(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Is(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function tv(i,t){let e=i,n=!1,r=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&r<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Pm(i,t){let e=Mh(i.i,i.x,i.y),n=Mh(t.i,t.x,t.y),r=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Pp(i,t,e,n){let r=Mh(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ls(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Mh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ev(i,t,e,n){let r=0;for(let o=t,s=e-n;o<e;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}var wh=class{static triangulate(t,e,n=2){return By(t,e,n)}},Fs=class i{static area(t){let e=t.length,n=0;for(let r=e-1,o=0;o<e;r=o++)n+=t[r].x*t[o].y-t[o].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],o=[];Cp(t),Ip(n,t);let s=t.length;e.forEach(Cp);for(let l=0;l<e.length;l++)r.push(s),s+=e[l].length,Ip(n,e[l]);let a=wh.triangulate(n,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function Cp(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ip(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Xn=class i extends Vt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let o=t/2,s=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],g=[],b=[];for(let m=0;m<h;m++){let x=m*f-s;for(let v=0;v<c;v++){let y=v*u-o;p.push(y,-x,0),g.push(0,0,1),b.push(v/a),b.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let v=x+c*m,y=x+c*(m+1),M=x+1+c*(m+1),w=x+1+c*m;d.push(v,y,w),d.push(y,M,w)}this.setIndex(d),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(g,3)),this.setAttribute("uv",new It(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ks=class i extends Vt{constructor(t=.5,e=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/r,d=new X,p=new Zt;for(let g=0;g<=r;g++){for(let b=0;b<=n;b++){let m=o+b/n*s;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let g=0;g<r;g++){let b=g*(n+1);for(let m=0;m<n;m++){let x=m+b,v=x,y=x+n+1,M=x+n+2,w=x+1;a.push(v,y,w),a.push(y,M,w)}}this.setIndex(a),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Ir(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Lp(r))r.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Lp(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();t[e][n]=o}else t[e][n]=r.slice();else t[e][n]=r}}return t}function gn(i){let t={};for(let e=0;e<i.length;e++){let n=Ir(i[e]);for(let r in n)t[r]=n[r]}return t}function Lp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function nv(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var Cm={clone:Ir,merge:gn},iv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Fn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iv,this.fragmentShader=rv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ir(t.uniforms),this.uniformsGroups=nv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?e.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[r]={type:"m4",value:s.toArray()}:e.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new K().setHex(r.value);break;case"v2":this.uniforms[n].value=new Zt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new X().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Oe().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},kl=class extends mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ds=class extends Fn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new K(16777215),this.specular=new K(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Ws,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Os=class extends Fn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Ws,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Co=class extends Fn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Dl=class extends Fn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function po(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ph(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Zi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],o=e[n-1];n:{t:{let s;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=e[++n],t<r)break t}s=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=o,o=e[--n-1],t>=o)break t}s=n,n=0;break e}break n}for(;n<s;){let a=n+s>>>1;t<e[a]?s=a:n=a+1}if(r=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=t*r;for(let s=0;s!==r;++s)e[s]=n[o+s];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ol=class extends Zi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(t,e,n){let r=this.parameterPositions,o=t-2,s=t+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case xh:o=t,a=2*e-n;break;case yh:o=r.length-2,a=e+r[o]-r[o+1];break;default:o=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xh:s=t,l=2*n-e;break;case yh:s=1,l=n+r[1]-r[0];break;default:s=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=s*h}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(r-e),g=p*p,b=g*p,m=-f*b+2*f*g-f*p,x=(1+f)*b+(-1.5-2*f)*g+(-.5+f)*p+1,v=(-1-d)*b+(1.5+d)*g+.5*p,y=d*b-d*g;for(let M=0;M!==a;++M)o[M]=m*s[h+M]+x*s[c+M]+v*s[l+M]+y*s[u+M];return o}},Nl=class extends Zi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)o[f]=s[c+f]*u+s[l+f]*h;return o}},Ul=class extends Zi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Bl=class extends Zi{interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(r-e),g=1-p;for(let b=0;b!==a;++b)o[b]=s[c+b]*g+s[l+b]*p;return o}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let g=s[c+p],b=s[l+p],m=d*f+p*2,x=u[m],v=u[m+1],y=t*f+p*2,M=h[y],w=h[y+1],T=sv(n,e,x,M,r);o[p]=Im(T,g,v,w,b)}return o}};function Im(i,t,e,n,r){let o=1-i;return o*o*o*t+3*o*o*i*e+3*o*i*i*n+i*i*i*r}function ov(i,t,e,n,r){let o=1-i;return 3*o*o*(e-t)+6*o*i*(n-e)+3*i*i*(r-n)}function sv(i,t,e,n,r){let o=(i-t)/(r-t);for(let s=0;s<8;s++){let a=Im(o,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=ov(o,t,e,n,r);if(Math.abs(l)<1e-10)break;o=Math.max(0,Math.min(1,o-a/l))}return o}var En=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=po(e,this.TimeBufferType),this.values=po(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:po(t.times,Array),values:po(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),ph(t.settings)&&(n.settings={inTangents:po(t.settings.inTangents,Array),outTangents:po(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Bl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ys:e=this.InterpolantFactoryMethodDiscrete;break;case wl:e=this.InterpolantFactoryMethodLinear;break;case fl:e=this.InterpolantFactoryMethodSmooth;break;case gh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return wl;case this.InterpolantFactoryMethodSmooth:return fl;case this.InterpolantFactoryMethodBezier:return gh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;ph(this.settings)&&(Fp(this.settings.inTangents,t),Fp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<t;)++o;for(;s!==-1&&n[s]>e;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,o=n.length;o===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(s!==null&&s>l){Kt("KeyframeTrack: Out of order keys.",this,a,l,s),t=!1;break}s=l}if(r!==void 0&&yy(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===fl,o=t.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let g=e[u+p];if(g!==e[f+p]||g!==e[d+p]){l=!0;break}}}if(l){if(a!==s){t[s]=t[a];let u=a*n,f=s*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++s}}if(o>0){t[s]=t[o];for(let a=o*n,l=s*n,c=0;c!==n;++c)e[l+c]=e[a+c];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,ph(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Fp(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=wl;var ji=class extends En{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=ys;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends En{constructor(t,e,n,r){super(t,e,n,r)}};zl.prototype.ValueTypeName="color";var Vl=class extends En{constructor(t,e,n,r){super(t,e,n,r)}};Vl.prototype.ValueTypeName="number";var Gl=class extends Zi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)ai.slerpFlat(o,0,s,c-a,s,c,l);return o}},Ns=class extends En{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Gl(this.times,this.values,this.getValueSize(),t)}};Ns.prototype.ValueTypeName="quaternion";Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends En{constructor(t,e,n){super(t,e,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=ys;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends En{constructor(t,e,n,r){super(t,e,n,r)}};Hl.prototype.ValueTypeName="vector";var pl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(kp(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!kp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function kp(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Wl=class{constructor(t,e,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&r.onStart!==void 0&&r.onStart(h,s,a),o=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lm=new Wl,Io=class{constructor(t){this.manager=t!==void 0?t:Lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,o){n.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Io.DEFAULT_MATERIAL_NAME="__DEFAULT";var mo=new WeakMap,Xl=class extends Io{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let o=this,s=pl.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(s),o.manager.itemEnd(t)},0);else{let u=mo.get(s);u===void 0&&(u=[],mo.set(s,u)),u.push({onLoad:e,onError:r})}return s}let a=_o("img");function l(){h(),e&&e(this);let u=mo.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}mo.delete(this),o.manager.itemEnd(t)}function c(u){h(),r&&r(u),pl.remove(`image:${t}`);let f=mo.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}mo.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),pl.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}};var Er=class extends Io{constructor(t){super(t)}load(t,e,n,r){let o=new dn,s=new Xl(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,r),o}},Us=class extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new K(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Bs=class extends Us{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},mh=new Me,Dp=new X,Op=new X,$l=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Dp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dp),Op.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Op),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,r){mh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(mh,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,s=r?r.z/o.x:1,a=r?r.w/o.y:1,l=r?r.x/o.x:0,c=r?r.y/o.y:0;t.coordinateSystem===vo||t.reversedDepth?e.set(.5*s,0,0,.5*s+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*s,0,0,.5*s+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(mh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ul=new X,hl=new ai,ii=new X,zs=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ul,hl,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ul,hl,ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ul,hl,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ul,hl,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new X,Np=new Zt,Up=new Zt,rn=class extends zs{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Sl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sl*2*Math.atan(Math.tan(Xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,Np,Up),e.subVectors(Up,Np)}setViewOffset(t,e,n,r,o,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xu*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,e-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Rn=class extends zs{constructor(t=-1,e=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-t,s=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Sh=class extends $l{constructor(){super(new Rn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new Sh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var go=-90,bo=1,Yl=class extends Ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new rn(go,bo,t,e);r.layers=this.layers,this.add(r);let o=new rn(go,bo,t,e);o.layers=this.layers,this.add(o);let s=new rn(go,bo,t,e);s.layers=this.layers,this.add(s);let a=new rn(go,bo,t,e);a.layers=this.layers,this.add(a);let l=new rn(go,bo,t,e);l.layers=this.layers,this.add(l);let c=new rn(go,bo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,o,s,a,l]=e;for(let c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let b=!1;t.isWebGLRenderer===!0?b=t.state.buffers.depth.getReversed():b=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,2,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),b&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ql=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Jh="\\[\\]\\.:\\/",av=new RegExp("["+Jh+"]","g"),Qh="[^"+Jh+"]",lv="[^"+Jh.replace("\\.","")+"]",cv=/((?:WC+[\/:])*)/.source.replace("WC",Qh),uv=/(WCOD+)?/.source.replace("WCOD",lv),hv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qh),fv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qh),dv=new RegExp("^"+cv+uv+hv+fv+"$"),pv=["material","materials","bones","map"],Th=class{constructor(t,e,n){let r=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(av,"")}static parseTrackName(t){let e=dv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);pv.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[r];if(s===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Th;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var IE=new Float32Array(1);var Bp=new Me,Gs=class{constructor(t,e,n=0,r=1/0){this.ray=new Sr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new So,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bp),this}intersectObject(t,e=!0,n=[]){return Ah(t,this,n,e),n.sort(zp),n}intersectObjects(t,e=!0,n=[]){for(let r=0,o=t.length;r<o;r++)Ah(t[r],this,n,e);return n.sort(zp),n}};function zp(i,t){return i.distance-t.distance}function Ah(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)Ah(o[s],t,e,!0)}}var sf=class sf{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=r,this}};sf.prototype.isMatrix2=!0;var Eh=sf;function tf(i,t,e,n){let r=mv(n);switch(e){case Xh:return i*t;case Yh:return i*t/r.components*r.byteLength;case nc:return i*t/r.components*r.byteLength;case nr:return i*t*2/r.components*r.byteLength;case ic:return i*t*2/r.components*r.byteLength;case $h:return i*t*3/r.components*r.byteLength;case Dn:return i*t*4/r.components*r.byteLength;case rc:return i*t*4/r.components*r.byteLength;case Ys:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ks:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:case lc:return Math.max(i,16)*Math.max(t,8)/4;case oc:case ac:return Math.max(i,8)*Math.max(t,8)/2;case cc:case uc:case fc:case dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hc:case js:case pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Pc:case Cc:case Ic:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lc:case Fc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Js:case kc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mv(i){switch(i){case wn:case Vh:return{byteLength:1,components:1};case Fo:case Gh:case Kn:return{byteLength:2,components:1};case tc:case ec:return{byteLength:2,components:4};case Yn:case Ql:case qn:return{byteLength:4,components:1};case Hh:case Wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function t0(){let i=null,t=!1,e=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),e(o,s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function bv(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],g=u[d];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let g=u[d];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var xv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_v=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Av=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ev=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Iv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Uv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$v=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,s1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,u1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,h1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,b1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,D1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,U1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,V1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,q1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,n_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,i_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,r_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,s_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,l_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,f_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,b_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,T_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,A_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,N_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,B_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,H_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Y_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:xv,alphahash_pars_fragment:yv,alphamap_fragment:vv,alphamap_pars_fragment:_v,alphatest_fragment:Mv,alphatest_pars_fragment:wv,aomap_fragment:Sv,aomap_pars_fragment:Tv,batching_pars_vertex:Av,batching_vertex:Ev,begin_vertex:Rv,beginnormal_vertex:Pv,bsdfs:Cv,iridescence_fragment:Iv,bumpmap_pars_fragment:Lv,clipping_planes_fragment:Fv,clipping_planes_pars_fragment:kv,clipping_planes_pars_vertex:Dv,clipping_planes_vertex:Ov,color_fragment:Nv,color_pars_fragment:Uv,color_pars_vertex:Bv,color_vertex:zv,common:Vv,cube_uv_reflection_fragment:Gv,defaultnormal_vertex:Hv,displacementmap_pars_vertex:Wv,displacementmap_vertex:Xv,emissivemap_fragment:$v,emissivemap_pars_fragment:Yv,colorspace_fragment:qv,colorspace_pars_fragment:Kv,envmap_fragment:Zv,envmap_common_pars_fragment:jv,envmap_pars_fragment:Jv,envmap_pars_vertex:Qv,envmap_physical_pars_fragment:u1,envmap_vertex:t1,fog_vertex:e1,fog_pars_vertex:n1,fog_fragment:i1,fog_pars_fragment:r1,gradientmap_pars_fragment:o1,lightmap_pars_fragment:s1,lights_lambert_fragment:a1,lights_lambert_pars_fragment:l1,lights_pars_begin:c1,lights_toon_fragment:h1,lights_toon_pars_fragment:f1,lights_phong_fragment:d1,lights_phong_pars_fragment:p1,lights_physical_fragment:m1,lights_physical_pars_fragment:g1,lights_fragment_begin:b1,lights_fragment_maps:x1,lights_fragment_end:y1,lightprobes_pars_fragment:v1,logdepthbuf_fragment:_1,logdepthbuf_pars_fragment:M1,logdepthbuf_pars_vertex:w1,logdepthbuf_vertex:S1,map_fragment:T1,map_pars_fragment:A1,map_particle_fragment:E1,map_particle_pars_fragment:R1,metalnessmap_fragment:P1,metalnessmap_pars_fragment:C1,morphinstance_vertex:I1,morphcolor_vertex:L1,morphnormal_vertex:F1,morphtarget_pars_vertex:k1,morphtarget_vertex:D1,normal_fragment_begin:O1,normal_fragment_maps:N1,normal_pars_fragment:U1,normal_pars_vertex:B1,normal_vertex:z1,normalmap_pars_fragment:V1,clearcoat_normal_fragment_begin:G1,clearcoat_normal_fragment_maps:H1,clearcoat_pars_fragment:W1,iridescence_pars_fragment:X1,opaque_fragment:$1,packing:Y1,premultiplied_alpha_fragment:q1,project_vertex:K1,dithering_fragment:Z1,dithering_pars_fragment:j1,roughnessmap_fragment:J1,roughnessmap_pars_fragment:Q1,shadowmap_pars_fragment:t_,shadowmap_pars_vertex:e_,shadowmap_vertex:n_,shadowmask_pars_fragment:i_,skinbase_vertex:r_,skinning_pars_vertex:o_,skinning_vertex:s_,skinnormal_vertex:a_,specularmap_fragment:l_,specularmap_pars_fragment:c_,tonemapping_fragment:u_,tonemapping_pars_fragment:h_,transmission_fragment:f_,transmission_pars_fragment:d_,uv_pars_fragment:p_,uv_pars_vertex:m_,uv_vertex:g_,worldpos_vertex:b_,background_vert:x_,background_frag:y_,backgroundCube_vert:v_,backgroundCube_frag:__,cube_vert:M_,cube_frag:w_,depth_vert:S_,depth_frag:T_,distance_vert:A_,distance_frag:E_,equirect_vert:R_,equirect_frag:P_,linedashed_vert:C_,linedashed_frag:I_,meshbasic_vert:L_,meshbasic_frag:F_,meshlambert_vert:k_,meshlambert_frag:D_,meshmatcap_vert:O_,meshmatcap_frag:N_,meshnormal_vert:U_,meshnormal_frag:B_,meshphong_vert:z_,meshphong_frag:V_,meshphysical_vert:G_,meshphysical_frag:H_,meshtoon_vert:W_,meshtoon_frag:X_,points_vert:$_,points_frag:Y_,shadow_vert:q_,shadow_frag:K_,sprite_vert:Z_,sprite_frag:j_},Et={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},di={basic:{uniforms:gn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:gn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:gn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:gn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:gn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new K(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:gn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:gn([Et.points,Et.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:gn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:gn([Et.common,Et.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:gn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:gn([Et.sprite,Et.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:gn([Et.common,Et.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:gn([Et.lights,Et.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};di.physical={uniforms:gn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var Nc={r:0,b:0,g:0},J_=new Me,e0=new ne;e0.set(-1,0,0,0,1,0,0,0,1);function Q_(i,t,e,n,r,o){let s=new K(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function d(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){let y=x.backgroundBlurriness>0;v=t.get(v,y)}return v}function p(x){let v=!1,y=d(x);y===null?b(s,a):y&&y.isColor&&(b(y,1),v=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,v){let y=d(v);y&&(y.isCubeTexture||y.mapping===Xs)?(c===void 0&&(c=new _t(new Ro(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Ir(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(J_.makeRotationFromEuler(v.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(e0),c.material.toneMapped=fe.getTransfer(y.colorSpace)!==_e,(h!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new _t(new Xn(2,2),new mn({name:"BackgroundMaterial",uniforms:Ir(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=fe.getTransfer(y.colorSpace)!==_e,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function b(x,v){x.getRGB(Nc,jh(i)),e.buffers.color.setClear(Nc.r,Nc.g,Nc.b,v,o)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,v=1){s.set(x),a=v,b(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,b(s,a)},render:p,addToRenderList:g,dispose:m}}function tM(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),o=r,s=!1;function a(S,P,k,D,U){let A=!1,I=u(S,D,k,P);o!==I&&(o=I,c(o.object)),A=d(S,D,k,U),A&&p(S,D,k,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(A||s)&&(s=!1,y(S,P,k,D),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,P,k,D){let U=D.wireframe===!0,A=n[P.id];A===void 0&&(A={},n[P.id]=A);let I=S.isInstancedMesh===!0?S.id:0,O=A[I];O===void 0&&(O={},A[I]=O);let C=O[k.id];C===void 0&&(C={},O[k.id]=C);let B=C[U];return B===void 0&&(B=f(l()),C[U]=B),B}function f(S){let P=[],k=[],D=[];for(let U=0;U<e;U++)P[U]=0,k[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:D,object:S,attributes:{},index:null}}function d(S,P,k,D){let U=o.attributes,A=P.attributes,I=0,O=k.getAttributes();for(let C in O)if(O[C].location>=0){let z=U[C],W=A[C];if(W===void 0&&(C==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),C==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),z===void 0||z.attribute!==W||W&&z.data!==W.data)return!0;I++}return o.attributesNum!==I||o.index!==D}function p(S,P,k,D){let U={},A=P.attributes,I=0,O=k.getAttributes();for(let C in O)if(O[C].location>=0){let z=A[C];z===void 0&&(C==="instanceMatrix"&&S.instanceMatrix&&(z=S.instanceMatrix),C==="instanceColor"&&S.instanceColor&&(z=S.instanceColor));let W={};W.attribute=z,z&&z.data&&(W.data=z.data),U[C]=W,I++}o.attributes=U,o.attributesNum=I,o.index=D}function g(){let S=o.newAttributes;for(let P=0,k=S.length;P<k;P++)S[P]=0}function b(S){m(S,0)}function m(S,P){let k=o.newAttributes,D=o.enabledAttributes,U=o.attributeDivisors;k[S]=1,D[S]===0&&(i.enableVertexAttribArray(S),D[S]=1),U[S]!==P&&(i.vertexAttribDivisor(S,P),U[S]=P)}function x(){let S=o.newAttributes,P=o.enabledAttributes;for(let k=0,D=P.length;k<D;k++)P[k]!==S[k]&&(i.disableVertexAttribArray(k),P[k]=0)}function v(S,P,k,D,U,A,I){I===!0?i.vertexAttribIPointer(S,P,k,U,A):i.vertexAttribPointer(S,P,k,D,U,A)}function y(S,P,k,D){g();let U=D.attributes,A=k.getAttributes(),I=P.defaultAttributeValues;for(let O in A){let C=A[O];if(C.location>=0){let B=U[O];if(B===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(B=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(B=S.instanceColor)),B!==void 0){let z=B.normalized,W=B.itemSize,V=t.get(B);if(V===void 0)continue;let Y=V.buffer,et=V.type,nt=V.bytesPerElement,$=et===i.INT||et===i.UNSIGNED_INT||B.gpuType===Ql;if(B.isInterleavedBufferAttribute){let H=B.data,J=H.stride,ot=B.offset;if(H.isInstancedInterleavedBuffer){for(let Q=0;Q<C.locationSize;Q++)m(C.location+Q,H.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Q=0;Q<C.locationSize;Q++)b(C.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let Q=0;Q<C.locationSize;Q++)v(C.location+Q,W/C.locationSize,et,z,J*nt,(ot+W/C.locationSize*Q)*nt,$)}else{if(B.isInstancedBufferAttribute){for(let H=0;H<C.locationSize;H++)m(C.location+H,B.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let H=0;H<C.locationSize;H++)b(C.location+H);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let H=0;H<C.locationSize;H++)v(C.location+H,W/C.locationSize,et,z,W*nt,W/C.locationSize*H*nt,$)}}else if(I!==void 0){let z=I[O];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(C.location,z);break;case 3:i.vertexAttrib3fv(C.location,z);break;case 4:i.vertexAttrib4fv(C.location,z);break;default:i.vertexAttrib1fv(C.location,z)}}}}x()}function M(){E();for(let S in n){let P=n[S];for(let k in P){let D=P[k];for(let U in D){let A=D[U];for(let I in A)h(A[I].object),delete A[I];delete D[U]}}delete n[S]}}function w(S){if(n[S.id]===void 0)return;let P=n[S.id];for(let k in P){let D=P[k];for(let U in D){let A=D[U];for(let I in A)h(A[I].object),delete A[I];delete D[U]}}delete n[S.id]}function T(S){for(let P in n){let k=n[P];for(let D in k){let U=k[D];if(U[S.id]===void 0)continue;let A=U[S.id];for(let I in A)h(A[I].object),delete A[I];delete U[S.id]}}}function _(S){for(let P in n){let k=n[P],D=S.isInstancedMesh===!0?S.id:0,U=k[D];if(U!==void 0){for(let A in U){let I=U[A];for(let O in I)h(I[O].object),delete I[O];delete U[A]}delete k[D],Object.keys(k).length===0&&delete n[P]}}}function E(){R(),s=!0,o!==r&&(o=r,c(o.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:b,disableUnusedAttributes:x}}function eM(i,t,e){let n;function r(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function s(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function nM(i,t,e,n){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(T){return!(T!==Dn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let _=T===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==wn&&T!==qn&&!_&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:b,maxAttributes:m,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:y,maxSamples:M,samples:w}}function iM(i){let t=this,e=null,n=0,r=!1,o=!1,s=new Hn,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,g=u.clipIntersection,b=u.clipShadows,m=i.get(u);if(!r||p===null||p.length===0||o&&!b)o?h(null):c();else{let x=o?0:n,v=x*4,y=m.clippingState||null;l.value=y,y=h(p,f,v,d);for(let M=0;M!==v;++M)y[M]=e[M];m.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let g=u!==null?u.length:0,b=null;if(g!==0){if(b=l.value,p!==!0||b===null){let m=d+g*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(b===null||b.length<m)&&(b=new Float32Array(m));for(let v=0,y=d;v!==g;++v,y+=4)s.copy(u[v]).applyMatrix4(x,a),s.normal.toArray(b,y),b[y+3]=s.constant}l.value=b,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,b}}var Oo=4,rM=6,oM=20,sM=256,ta=new Rn,Fm=new K,af=null,lf=0,cf=0,uf=!1,aM=new X,Lr=new X,Bc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,o={}){let{size:s=256,position:a=aM}=o;af=this._renderer.getRenderTarget(),lf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(af,lf,cf),this._renderer.xr.enabled=uf,t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),af=this._renderer.getRenderTarget(),lf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Kn,format:Dn,colorSpace:vs,depthBuffer:!1},r=km(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=km(t,e,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lM(o)),this._blurMaterial=uM(o,t,e),this._ggxMaterial=cM(o,t,e)}return r}_compileMaterial(t){let e=new _t(new Vt,t);this._renderer.compile(e,ta)}_sceneToCubeUV(t,e,n,r,o){let l=new rn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Fm),u.toneMapping=$n,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new Ro,new Xt({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,b=g.material,m=!1,x=t.background;x?x.isColor&&(b.color.copy(x),t.background=null,m=!0):(b.color.copy(Fm),m=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[v],o.y,o.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[v],o.z)):(l.up.set(0,c[v],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[v]));let M=this._cubeSize;Do(r,y*M,v>2?M:0,M,M),u.setRenderTarget(r),m&&u.render(g,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Qi||t.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=t;let l=this._cubeSize;Do(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(s,ta)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,g=this._sizeLods[n],b=3*g*(n>p-Oo?n-p+Oo:0),m=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Do(o,b,m,3*g,2*g),r.setRenderTarget(o),r.render(a,ta),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,Do(t,b,m,3*g,2*g),r.setRenderTarget(t),r.render(a,ta)}_blur(t,e,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,s),this._blurPass(o,t,n,n,s)}_blurPass(t,e,n,r,o){let s=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-Oo?r-this._lodMax+Oo:0),f=4*(this._cubeSize-h);Do(e,u,f,3*h,2*h),s.setRenderTarget(e),s.render(l,ta)}};function lM(i){let t=[],e=[],n=i,r=i-Oo+1+rM;for(let o=0;o<r;o++){let s=Math.pow(2,n);t.push(s);let a=1/(s-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),g=new Float32Array(d*f*u);for(let m=0;m<u;m++){let x=m%3*2/3-1,v=m>2?0:-1,y=[x,v,0,x+2/3,v,0,x+2/3,v+1,0,x,v,0,x+2/3,v+1,0,x,v+1,0];p.set(y,d*f*m);for(let M=0;M<f;M++){let w=h[M*2]*2-1,T=h[M*2+1]*2-1;m===0?Lr.set(1,T,w):m===1?Lr.set(-w,1,-T):m===2?Lr.set(-w,T,1):m===3?Lr.set(-1,T,-w):m===4?Lr.set(-w,-1,T):Lr.set(w,T,-1),Lr.toArray(g,(m*f+M)*d)}}let b=new Vt;b.setAttribute("position",new vn(p,d)),b.setAttribute("outputDirection",new vn(g,d)),e.push(new _t(b,null)),n>Oo&&n--}return{lodMeshes:e,sizeLods:t}}function km(i,t,e){let n=new qe(i,t,e);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function cM(i,t,e){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function uM(i,t,e){return new mn({name:"SphericalGaussianBlur",defines:{SAMPLES:oM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Dm(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Om(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Vc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var zc=class extends qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Rs(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ro(5,5,5),o=new mn({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:kn});o.uniforms.tEquirect.value=e;let s=new _t(r,o),a=e.minFilter;return e.minFilter===tr&&(e.minFilter=Ye),new Yl(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let o=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,r);t.setRenderTarget(o)}};function hM(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?s(f):o(f)}function o(f){if(f&&f.isTexture){let d=f.mapping;if(d===Zl||d===jl)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let g=new zc(p.height);return g.fromEquirectangularTexture(i,f),t.set(f,g),f.addEventListener("dispose",c),a(g.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let d=f.mapping,p=d===Zl||d===jl,g=d===Qi||d===Cr;if(p||g){let b=e.get(f),m=b!==void 0?b.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Bc(i)),b=p?n.fromEquirectangular(f,b):n.fromCubemap(f,b),b.texture.pmremVersion=f.pmremVersion,e.set(f,b),b.texture;if(b!==void 0)return b.texture;{let x=f.image;return p&&x&&x.height>0||g&&x&&l(x)?(n===null&&(n=new Bc(i)),b=p?n.fromEquirectangular(f):n.fromCubemap(f),b.texture.pmremVersion=f.pmremVersion,e.set(f,b),f.addEventListener("dispose",h),b.texture):null}}}return f}function a(f,d){return d===Zl?f.mapping=Qi:d===jl&&(f.mapping=Cr),f}function l(f){let d=0,p=6;for(let g=0;g<p;g++)f[g]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function fM(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&_r("WebGLRenderer: "+n+" extension not supported."),r}}}function dM(i,t,e,n){let r={},o=new WeakMap;function s(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",s),delete r[f.id];let d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,g=0;if(p===void 0)return;if(d!==null){let x=d.array;g=d.version;for(let v=0,y=x.length;v<y;v+=3){let M=x[v+0],w=x[v+1],T=x[v+2];f.push(M,w,w,T,T,M)}}else{let x=p.array;g=p.version;for(let v=0,y=x.length/3-1;v<y;v+=3){let M=v+0,w=v+1,T=v+2;f.push(M,w,w,T,T,M)}}let b=new(p.count>=65535?wr:Ts)(f,1);b.version=g;let m=o.get(u);m&&t.remove(m),o.set(u,b)}function h(u){let f=o.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function pM(i,t,e){let n;function r(u){n=u}let o,s;function a(u){o=u.type,s=u.bytesPerElement}function l(u,f){i.drawElements(n,f,o,u*s),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,o,u*s,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,d);let g=0;for(let b=0;b<d;b++)g+=f[b];e.update(g,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function mM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:Kt("WebGLInfo: Unknown draw mode:",s);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function gM(i,t,e){let n=new WeakMap,r=new Oe;function o(s,a,l){let c=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,b=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),g===!0&&(v=3);let y=a.attributes.position.count*v,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*M*4*u),T=new ws(w,y,M,u);T.type=qn,T.needsUpdate=!0;let _=v*4;for(let R=0;R<u;R++){let S=b[R],P=m[R],k=x[R],D=y*M*4*R;for(let U=0;U<S.count;U++){let A=U*_;d===!0&&(r.fromBufferAttribute(S,U),w[D+A+0]=r.x,w[D+A+1]=r.y,w[D+A+2]=r.z,w[D+A+3]=0),p===!0&&(r.fromBufferAttribute(P,U),w[D+A+4]=r.x,w[D+A+5]=r.y,w[D+A+6]=r.z,w[D+A+7]=0),g===!0&&(r.fromBufferAttribute(k,U),w[D+A+8]=r.x,w[D+A+9]=r.y,w[D+A+10]=r.z,w[D+A+11]=k.itemSize===4?r.w:1)}}f={count:u,texture:T,size:new Zt(y,M)},n.set(a,f),a.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function bM(i,t,e,n,r){let o=new WeakMap;function s(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(o.get(f)!==h&&(t.update(f),o.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return f}function a(){o=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:a}}var xM={[Fh]:"LINEAR_TONE_MAPPING",[kh]:"REINHARD_TONE_MAPPING",[Dh]:"CINEON_TONE_MAPPING",[Oh]:"ACES_FILMIC_TONE_MAPPING",[Uh]:"AGX_TONE_MAPPING",[Bh]:"NEUTRAL_TONE_MAPPING",[Nh]:"CUSTOM_TONE_MAPPING"};function yM(i,t,e,n,r,o){let s=new qe(t,e,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Vt;c.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new It([0,2,0,0,2,0],2));let h=new kl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new _t(c,h),f=new Rn(-1,1,1,-1,0,1),d=null,p=null,g=!1,b,m=null,x=[],v=!1;this.setSize=function(y,M){s.setSize(y,M),a!==null&&a.setSize(y,M),l!==null&&l.setSize(y,M);for(let w=0;w<x.length;w++){let T=x[w];T.setSize&&T.setSize(y,M)}},this.setEffects=function(y){x=y,v=x.length>0&&x[0].isRenderPass===!0;let M=s.width,w=s.height;x.length>0&&a===null&&(a=new qe(M,w,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new qe(M,w,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<x.length;T++){let _=x[T];_.setSize&&_.setSize(M,w)}},this.begin=function(y,M){if(g||y.toneMapping===$n&&x.length===0)return!1;if(m=M,M!==null){let w=M.width,T=M.height;(s.width!==w||s.height!==T)&&this.setSize(w,T)}return v===!1&&y.setRenderTarget(s),b=y.toneMapping,y.toneMapping=$n,!0},this.hasRenderPass=function(){return v},this.end=function(y,M){y.toneMapping=b,g=!0;let w=s,T=a;for(let _=0;_<x.length;_++){let E=x[_];E.enabled!==!1&&(E.render(y,T,w,M),E.needsSwap!==!1&&(w=T,T=T===a?l:a))}if(d!==y.outputColorSpace||p!==y.toneMapping){d=y.outputColorSpace,p=y.toneMapping,h.defines={},fe.getTransfer(d)===_e&&(h.defines.SRGB_TRANSFER="");let _=xM[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(m),y.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var n0=new dn,df=new ui(1,1),i0=new ws,r0=new El,o0=new Rs,Nm=[],Um=[],Bm=new Float32Array(16),zm=new Float32Array(9),Vm=new Float32Array(4);function Uo(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,o=Nm[r];if(o===void 0&&(o=new Float32Array(r),Nm[r]=o),t!==0){n.toArray(o,0);for(let s=1,a=0;s!==t;++s)a+=e,i[s].toArray(o,a)}return o}function Je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Gc(i,t){let e=Um[t];e===void 0&&(e=new Int32Array(t),Um[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _M(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function MM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function wM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function SM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,n))return;Vm.set(n),i.uniformMatrix2fv(this.addr,!1,Vm),Qe(e,n)}}function TM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,n))return;zm.set(n),i.uniformMatrix3fv(this.addr,!1,zm),Qe(e,n)}}function AM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,n))return;Bm.set(n),i.uniformMatrix4fv(this.addr,!1,Bm),Qe(e,n)}}function EM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function RM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function PM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function CM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function IM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function LM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function FM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function kM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function DM(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(df.compareFunction=e.isReversedDepthBuffer()?Oc:Dc,o=df):o=n0,e.setTexture2D(t||o,r)}function OM(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||r0,r)}function NM(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||o0,r)}function UM(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||i0,r)}function BM(i){switch(i){case 5126:return vM;case 35664:return _M;case 35665:return MM;case 35666:return wM;case 35674:return SM;case 35675:return TM;case 35676:return AM;case 5124:case 35670:return EM;case 35667:case 35671:return RM;case 35668:case 35672:return PM;case 35669:case 35673:return CM;case 5125:return IM;case 36294:return LM;case 36295:return FM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return DM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return UM}}function zM(i,t){i.uniform1fv(this.addr,t)}function VM(i,t){let e=Uo(t,this.size,2);i.uniform2fv(this.addr,e)}function GM(i,t){let e=Uo(t,this.size,3);i.uniform3fv(this.addr,e)}function HM(i,t){let e=Uo(t,this.size,4);i.uniform4fv(this.addr,e)}function WM(i,t){let e=Uo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function XM(i,t){let e=Uo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $M(i,t){let e=Uo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function YM(i,t){i.uniform1iv(this.addr,t)}function qM(i,t){i.uniform2iv(this.addr,t)}function KM(i,t){i.uniform3iv(this.addr,t)}function ZM(i,t){i.uniform4iv(this.addr,t)}function jM(i,t){i.uniform1uiv(this.addr,t)}function JM(i,t){i.uniform2uiv(this.addr,t)}function QM(i,t){i.uniform3uiv(this.addr,t)}function t2(i,t){i.uniform4uiv(this.addr,t)}function e2(i,t,e){let n=this.cache,r=t.length,o=Gc(e,r);Je(n,o)||(i.uniform1iv(this.addr,o),Qe(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=df:s=n0;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||s,o[a])}function n2(i,t,e){let n=this.cache,r=t.length,o=Gc(e,r);Je(n,o)||(i.uniform1iv(this.addr,o),Qe(n,o));for(let s=0;s!==r;++s)e.setTexture3D(t[s]||r0,o[s])}function i2(i,t,e){let n=this.cache,r=t.length,o=Gc(e,r);Je(n,o)||(i.uniform1iv(this.addr,o),Qe(n,o));for(let s=0;s!==r;++s)e.setTextureCube(t[s]||o0,o[s])}function r2(i,t,e){let n=this.cache,r=t.length,o=Gc(e,r);Je(n,o)||(i.uniform1iv(this.addr,o),Qe(n,o));for(let s=0;s!==r;++s)e.setTexture2DArray(t[s]||i0,o[s])}function o2(i){switch(i){case 5126:return zM;case 35664:return VM;case 35665:return GM;case 35666:return HM;case 35674:return WM;case 35675:return XM;case 35676:return $M;case 5124:case 35670:return YM;case 35667:case 35671:return qM;case 35668:case 35672:return KM;case 35669:case 35673:return ZM;case 5125:return jM;case 36294:return JM;case 36295:return QM;case 36296:return t2;case 35678:case 36198:case 36298:case 36306:case 35682:return e2;case 35679:case 36299:case 36307:return n2;case 35680:case 36300:case 36308:case 36293:return i2;case 36289:case 36303:case 36311:case 36292:return r2}}var pf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=BM(e.type)}},mf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=o2(e.type)}},gf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(t,e[a.id],n)}}},hf=/(\w+)(\])?(\[|\.)?/g;function Gm(i,t){i.seq.push(t),i.map[t.id]=t}function s2(i,t,e){let n=i.name,r=n.length;for(hf.lastIndex=0;;){let o=hf.exec(n),s=hf.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Gm(e,c===void 0?new pf(a,i,t):new mf(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new gf(a),Gm(e,u)),e=u}}}var No=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=t.getActiveUniform(e,s),l=t.getUniformLocation(e,a.name);s2(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,n,r){let o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,s=e.length;o!==s;++o){let a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,o=t.length;r!==o;++r){let s=t[r];s.id in e&&n.push(s)}return n}};function Hm(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var a2=37297,l2=0;function c2(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return n.join(`
`)}var Wm=new ne;function u2(i){fe._getMatrix(Wm,fe.workingColorSpace,i);let t=`mat3( ${Wm.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case _s:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xm(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+o+`

`+c2(i.getShaderSource(t),a)}else return o}function h2(i,t){let e=u2(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var f2={[Fh]:"Linear",[kh]:"Reinhard",[Dh]:"Cineon",[Oh]:"ACESFilmic",[Uh]:"AgX",[Bh]:"Neutral",[Nh]:"Custom"};function d2(i,t){let e=f2[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Uc=new X;function p2(){fe.getLuminanceCoefficients(Uc);let i=Uc.x.toFixed(4),t=Uc.y.toFixed(4),e=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function g2(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function b2(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(t,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[s]={type:o.type,location:i.getAttribLocation(t,s),locationSize:a}}return e}function na(i){return i!==""}function $m(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ym(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var x2=/^[ \t]*#include +<([\w\d./]+)>/gm;function bf(i){return i.replace(x2,v2)}var y2=new Map;function v2(i,t){let e=ce[t];if(e===void 0){let n=y2.get(t);if(n!==void 0)e=ce[n],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return bf(e)}var _2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(i){return i.replace(_2,M2)}function M2(i,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Km(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var w2={[Rr]:"SHADOWMAP_TYPE_PCF",[Lo]:"SHADOWMAP_TYPE_VSM"};function S2(i){return w2[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var T2={[Qi]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE_UV"};function A2(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":T2[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var E2={[Cr]:"ENVMAP_MODE_REFRACTION"};function R2(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":E2[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var P2={[Ws]:"ENVMAP_BLENDING_MULTIPLY",[lm]:"ENVMAP_BLENDING_MIX",[cm]:"ENVMAP_BLENDING_ADD"};function C2(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":P2[i.combine]||"ENVMAP_BLENDING_NONE"}function I2(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function L2(i,t,e,n){let r=i.getContext(),o=e.defines,s=e.vertexShader,a=e.fragmentShader,l=S2(e),c=A2(e),h=R2(e),u=C2(e),f=I2(e),d=m2(e),p=g2(o),g=r.createProgram(),b,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(na).join(`
`),b.length>0&&(b+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(na).join(`
`),m.length>0&&(m+=`
`)):(b=[Km(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),m=[Km(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?ce.tonemapping_pars_fragment:"",e.toneMapping!==$n?d2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,h2("linearToOutputTexel",e.outputColorSpace),p2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(na).join(`
`)),s=bf(s),s=$m(s,e),s=Ym(s,e),a=bf(a),a=$m(a,e),a=Ym(a,e),s=qm(s),a=qm(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,m=["#define varying in",e.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=x+b+s,y=x+m+a,M=Hm(r,r.VERTEX_SHADER,v),w=Hm(r,r.FRAGMENT_SHADER,y);r.attachShader(g,M),r.attachShader(g,w),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(S){if(i.debug.checkShaderErrors){let P=r.getProgramInfoLog(g)||"",k=r.getShaderInfoLog(M)||"",D=r.getShaderInfoLog(w)||"",U=P.trim(),A=k.trim(),I=D.trim(),O=!0,C=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,M,w);else{let B=Xm(r,M,"vertex"),z=Xm(r,w,"fragment");Kt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+U+`
`+B+`
`+z)}else U!==""?qt("WebGLProgram: Program Info Log:",U):(A===""||I==="")&&(C=!1);C&&(S.diagnostics={runnable:O,programLog:U,vertexShader:{log:A,prefix:b},fragmentShader:{log:I,prefix:m}})}r.deleteShader(M),r.deleteShader(w),_=new No(r,g),E=b2(r,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(g,a2)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l2++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=w,this}var F2=0,xf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yf(t),e.set(t,n)),n}},yf=class{constructor(t){this.id=F2++,this.code=t,this.usedTimes=0}};function k2(i){return i===nr||i===js||i===Js}function D2(i,t,e,n,r,o){let s=new So,a=new xf,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,E,R,S,P,k){let D=S.fog,U=P.geometry,A=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?S.environment:null,I=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=t.get(_.envMap||A,I),C=O&&O.mapping===Xs?O.image.height:null,B=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&qt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let z=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,W=z!==void 0?z.length:0,V=0;U.morphAttributes.position!==void 0&&(V=1),U.morphAttributes.normal!==void 0&&(V=2),U.morphAttributes.color!==void 0&&(V=3);let Y,et,nt,$;if(B){let Pe=di[B];Y=Pe.vertexShader,et=Pe.fragmentShader}else{Y=_.vertexShader,et=_.fragmentShader;let Pe=a.getVertexShaderStage(_),ye=a.getFragmentShaderStage(_);a.update(_,Pe,ye),nt=Pe.id,$=ye.id}let H=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),ot=P.isInstancedMesh===!0,Q=P.isBatchedMesh===!0,bt=!!_.map,gt=!!_.matcap,ut=!!O,ft=!!_.aoMap,Lt=!!_.lightMap,mt=!!_.bumpMap&&_.wireframe===!1,$t=!!_.normalMap,he=!!_.displacementMap,Re=!!_.emissiveMap,ie=!!_.metalnessMap,xe=!!_.roughnessMap,Z=_.anisotropy>0,Ke=_.clearcoat>0,ge=_.dispersion>0,G=_.retroreflectivity>0,L=_.iridescence>0,tt=_.sheen>0,st=_.transmission>0,lt=Z&&!!_.anisotropyMap,yt=Ke&&!!_.clearcoatMap,vt=Ke&&!!_.clearcoatNormalMap,ct=Ke&&!!_.clearcoatRoughnessMap,dt=L&&!!_.iridescenceMap,Mt=L&&!!_.iridescenceThicknessMap,Gt=tt&&!!_.sheenColorMap,At=tt&&!!_.sheenRoughnessMap,wt=!!_.specularMap,Ht=!!_.specularColorMap,Yt=!!_.specularIntensityMap,se=st&&!!_.transmissionMap,j=st&&!!_.thicknessMap,St=!!_.gradientMap,ht=!!_.alphaMap,Tt=_.alphaTest>0,Ct=!!_.alphaHash,xt=!!_.extensions,Wt=$n;_.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Wt=i.toneMapping);let Bt={shaderID:B,shaderType:_.type,shaderName:_.name,vertexShader:Y,fragmentShader:et,defines:_.defines,customVertexShaderID:nt,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Q,batchingColor:Q&&P._colorsTexture!==null,instancing:ot,instancingColor:ot&&P.instanceColor!==null,instancingMorph:ot&&P.morphTexture!==null,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:fe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:bt,matcap:gt,envMap:ut,envMapMode:ut&&O.mapping,envMapCubeUVHeight:C,aoMap:ft,lightMap:Lt,bumpMap:mt,normalMap:$t,displacementMap:he,emissiveMap:Re,normalMapObjectSpace:$t&&_.normalMapType===fm,normalMapTangentSpace:$t&&_.normalMapType===Qs,packedNormalMap:$t&&_.normalMapType===Qs&&k2(_.normalMap.format),metalnessMap:ie,roughnessMap:xe,anisotropy:Z,anisotropyMap:lt,clearcoat:Ke,clearcoatMap:yt,clearcoatNormalMap:vt,clearcoatRoughnessMap:ct,dispersion:ge,retroreflection:G,iridescence:L,iridescenceMap:dt,iridescenceThicknessMap:Mt,sheen:tt,sheenColorMap:Gt,sheenRoughnessMap:At,specularMap:wt,specularColorMap:Ht,specularIntensityMap:Yt,transmission:st,transmissionMap:se,thicknessMap:j,gradientMap:St,opaque:_.transparent===!1&&_.blending===Mn&&_.alphaToCoverage===!1,alphaMap:ht,alphaTest:Tt,alphaHash:Ct,combine:_.combine,mapUv:bt&&p(_.map.channel),aoMapUv:ft&&p(_.aoMap.channel),lightMapUv:Lt&&p(_.lightMap.channel),bumpMapUv:mt&&p(_.bumpMap.channel),normalMapUv:$t&&p(_.normalMap.channel),displacementMapUv:he&&p(_.displacementMap.channel),emissiveMapUv:Re&&p(_.emissiveMap.channel),metalnessMapUv:ie&&p(_.metalnessMap.channel),roughnessMapUv:xe&&p(_.roughnessMap.channel),anisotropyMapUv:lt&&p(_.anisotropyMap.channel),clearcoatMapUv:yt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:vt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:At&&p(_.sheenRoughnessMap.channel),specularMapUv:wt&&p(_.specularMap.channel),specularColorMapUv:Ht&&p(_.specularColorMap.channel),specularIntensityMapUv:Yt&&p(_.specularIntensityMap.channel),transmissionMapUv:se&&p(_.transmissionMap.channel),thicknessMapUv:j&&p(_.thicknessMap.channel),alphaMapUv:ht&&p(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&($t||Z),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(bt||ht),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&$t===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:J,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:V,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:bt&&_.map.isVideoTexture===!0&&fe.getTransfer(_.map.colorSpace)===_e,decodeVideoTextureEmissive:Re&&_.emissiveMap.isVideoTexture===!0&&fe.getTransfer(_.emissiveMap.colorSpace)===_e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===re,flipSided:_.side===an,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&_.extensions.multiDraw===!0||Q)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function b(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(E,_),x(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function x(_,E){s.disableAll(),E.instancing&&s.enable(0),E.instancingColor&&s.enable(1),E.instancingMorph&&s.enable(2),E.matcap&&s.enable(3),E.envMap&&s.enable(4),E.normalMapObjectSpace&&s.enable(5),E.normalMapTangentSpace&&s.enable(6),E.clearcoat&&s.enable(7),E.iridescence&&s.enable(8),E.alphaTest&&s.enable(9),E.vertexColors&&s.enable(10),E.vertexAlphas&&s.enable(11),E.vertexUv1s&&s.enable(12),E.vertexUv2s&&s.enable(13),E.vertexUv3s&&s.enable(14),E.vertexTangents&&s.enable(15),E.anisotropy&&s.enable(16),E.alphaHash&&s.enable(17),E.batching&&s.enable(18),E.dispersion&&s.enable(19),E.retroreflection&&s.enable(24),E.batchingColor&&s.enable(20),E.gradientMap&&s.enable(21),E.packedNormalMap&&s.enable(22),E.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.reversedDepthBuffer&&s.enable(4),E.skinning&&s.enable(5),E.morphTargets&&s.enable(6),E.morphNormals&&s.enable(7),E.morphColors&&s.enable(8),E.premultipliedAlpha&&s.enable(9),E.shadowMapEnabled&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),E.decodeVideoTextureEmissive&&s.enable(20),E.alphaToCoverage&&s.enable(21),E.numLightProbeGrids>0&&s.enable(22),E.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function v(_){let E=d[_.type],R;if(E){let S=di[E];R=Cm.clone(S.uniforms)}else R=_.uniforms;return R}function y(_,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new L2(i,E,_,r),c.push(R),h.set(E,R)),R}function M(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function T(){a.dispose()}return{getParameters:g,getProgramCacheKey:b,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:T}}function O2(){let i=new WeakMap;function t(s){return i.has(s)}function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:o}}function N2(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Zm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jm(){let i=[],t=0,e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function s(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,g,b,m){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:s(f),groupOrder:g,renderOrder:f.renderOrder,z:b,group:m},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=s(f),x.groupOrder=g,x.renderOrder=f.renderOrder,x.z=b,x.group=m),t++,x}function l(f,d,p,g,b,m,x){x.reversedDepth===!0&&(b=-b);let v=a(f,d,p,g,b,m);p.transmission>0?n.push(v):p.transparent===!0?r.push(v):e.push(v)}function c(f,d,p,g,b,m){let x=a(f,d,p,g,b,m);p.transmission>0?n.unshift(x):p.transparent===!0?r.unshift(x):e.unshift(x)}function h(f,d){e.length>1&&e.sort(f||N2),n.length>1&&n.sort(d||Zm),r.length>1&&r.sort(d||Zm)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:u,sort:h}}function U2(){let i=new WeakMap;function t(n,r){let o=i.get(n),s;return o===void 0?(s=new jm,i.set(n,[s])):r>=o.length?(s=new jm,o.push(s)):s=o[r],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function B2(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new X,color:new K};break;case"SpotLight":e={position:new X,direction:new X,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new K,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new K,groundColor:new K};break;case"RectAreaLight":e={color:new K,position:new X,halfWidth:new X,halfHeight:new X};break}return i[t.id]=e,e}}}function z2(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var V2=0;function G2(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function H2(i){let t=new B2,e=z2(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);let r=new X,o=new Me,s=new Me;function a(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,p=0,g=0,b=0,m=0,x=0,v=0,y=0,M=0,w=0,T=0,_=0,E=0,R=0;c.sort(G2);for(let P=0,k=c.length;P<k;P++){let D=c[P],U=D.color,A=D.intensity,I=D.distance,O=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===nr?O=D.shadow.map.texture:O=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=U.r*A,u+=U.g*A,f+=U.b*A;else if(D.isLightProbe){for(let C=0;C<9;C++)n.probe[C].addScaledVector(D.sh.coefficients[C],A);R++}else if(D.isSunLight){let C=t.get(D);if(C.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let B=D.shadow,z=e.get(D);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[p]=z,n.sunShadowMap[p]=O;let W=B.getViewportCount();for(let V=0;V<W;V++)n.sunShadowMatrix[g+V]=B.getMatrix(V),n.sunShadowCascade[g+V]=B._cascadeData[V];g+=W,p++}n.sun[d]=C,d++}else if(D.isDirectionalLight){let C=t.get(D);if(C.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let B=D.shadow,z=e.get(D);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.directionalShadow[b]=z,n.directionalShadowMap[b]=O,n.directionalShadowMatrix[b]=D.shadow.matrix,M++}n.directional[b]=C,b++}else if(D.isSpotLight){let C=t.get(D);C.position.setFromMatrixPosition(D.matrixWorld),C.color.copy(U).multiplyScalar(A),C.distance=I,C.coneCos=Math.cos(D.angle),C.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),C.decay=D.decay,n.spot[x]=C;let B=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,B.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[x]=B.matrix,D.castShadow){let z=e.get(D);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=O,T++}x++}else if(D.isRectAreaLight){let C=t.get(D);C.color.copy(U).multiplyScalar(A),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),n.rectArea[v]=C,v++}else if(D.isPointLight){let C=t.get(D);if(C.color.copy(D.color).multiplyScalar(D.intensity),C.distance=D.distance,C.decay=D.decay,D.castShadow){let B=D.shadow,z=e.get(D);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,z.shadowCameraNear=B.camera.near,z.shadowCameraFar=B.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=D.shadow.matrix,w++}n.point[m]=C,m++}else if(D.isHemisphereLight){let C=t.get(D);C.skyColor.copy(D.color).multiplyScalar(A),C.groundColor.copy(D.groundColor).multiplyScalar(A),n.hemi[y]=C,y++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let S=n.hash;(S.sunLength!==d||S.directionalLength!==b||S.pointLength!==m||S.spotLength!==x||S.rectAreaLength!==v||S.hemiLength!==y||S.numSunShadows!==p||S.numDirectionalShadows!==M||S.numPointShadows!==w||S.numSpotShadows!==T||S.numSpotMaps!==_||S.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=b,n.spot.length=x,n.rectArea.length=v,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,S.sunLength=d,S.directionalLength=b,S.pointLength=m,S.spotLength=x,S.rectAreaLength=v,S.hemiLength=y,S.numSunShadows=p,S.numDirectionalShadows=M,S.numPointShadows=w,S.numSpotShadows=T,S.numSpotMaps=_,S.numLightProbes=R,n.version=V2++)}function l(c,h){let u=0,f=0,d=0,p=0,g=0,b=0,m=h.matrixWorldInverse;for(let x=0,v=c.length;x<v;x++){let y=c[x];if(y.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),u++}else if(y.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(y.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),s.identity(),o.copy(y.matrixWorld),o.premultiply(m),s.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),g++}else if(y.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let M=n.hemi[b];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),b++}}}return{setup:a,setupView:l,state:n}}function Jm(i){let t=new H2(i),e=[],n=[],r=[];function o(f){u.camera=f,e.length=0,n.length=0,r.length=0}function s(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:u,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:a,pushLightProbeGrid:l}}function W2(i){let t=new WeakMap;function e(r,o=0){let s=t.get(r),a;return s===void 0?(a=new Jm(i),t.set(r,[a])):o>=s.length?(a=new Jm(i),s.push(a)):a=s[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var X2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Y2=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],q2=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Qm=new Me,ea=new X,ff=new X;function K2(i,t,e){let n=new Eo,r=new Zt,o=new Zt,s=new Oe,a=new Co,l=new Dl,c={},h=e.maxTextureSize,u={[hi]:an,[an]:hi,[re]:re},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:X2,fragmentShader:$2}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Vt;p.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new _t(p,f),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rr;let m=this.type;this.render=function(w,T,_){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||w.length===0)return;this.type===Hp&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rr);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),P=i.state;P.setBlending(kn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let k=m!==this.type;k&&T.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(U=>U.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,U=w.length;D<U;D++){let A=w[D],I=A.shadow;if(I===void 0){qt("WebGLShadowMap:",A,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);let O=I.getFrameExtents();r.multiply(O),o.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/O.x),r.x=o.x*O.x,I.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/O.y),r.y=o.y*O.y,I.mapSize.y=o.y));let C=i.state.buffers.depth.getReversed();if(I.camera._reversedDepth=C,I.map===null||k===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Lo){if(A.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new qe(r.x,r.y,{format:nr,type:Kn,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),I.map.texture.name=A.name+".shadowMap",I.map.depthTexture=new ui(r.x,r.y,qn),I.map.depthTexture.name=A.name+".shadowMapDepth",I.map.depthTexture.format=oi,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=on,I.map.depthTexture.magFilter=on}else A.isPointLight?(I.map=new zc(r.x),I.map.depthTexture=new Fl(r.x,Yn)):(I.map=new qe(r.x,r.y),I.map.depthTexture=new ui(r.x,r.y,Yn)),I.map.depthTexture.name=A.name+".shadowMap",I.map.depthTexture.format=oi,this.type===Rr?(I.map.depthTexture.compareFunction=C?Oc:Dc,I.map.depthTexture.minFilter=Ye,I.map.depthTexture.magFilter=Ye):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=on,I.map.depthTexture.magFilter=on);I.camera.updateProjectionMatrix()}I.map.isWebGLCubeRenderTarget!==!0&&(I.map.width!==r.x||I.map.height!==r.y)&&I.map.setSize(r.x,r.y);let B=I.map.isWebGLCubeRenderTarget?6:I.getViewportCount();A.isPointLight!==!0&&I.updateMatrices(A,_);for(let z=0;z<B;z++){let W=I.getCamera(z);if(A.isPointLight){let V=I.camera,Y=I.matrix,et=A.distance||V.far;et!==V.far&&(V.far=et,V.updateProjectionMatrix()),ea.setFromMatrixPosition(A.matrixWorld),V.position.copy(ea),ff.copy(V.position),ff.add(Y2[z]),V.up.copy(q2[z]),V.lookAt(ff),V.updateMatrixWorld(),Y.makeTranslation(-ea.x,-ea.y,-ea.z),Qm.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Qm,V.coordinateSystem,V.reversedDepth)}if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,z),i.clear();else{z===0&&(i.setRenderTarget(I.map),i.clear());let V=I.getViewport(z);s.set(o.x*V.x,o.y*V.y,o.x*V.z,o.y*V.w),P.viewport(s)}n=I.getFrustum(z),y(T,_,W,A,this.type)}I.isPointLightShadow!==!0&&this.type===Lo&&x(I,_),I.needsUpdate=!1}m=this.type,b.needsUpdate=!1,i.setRenderTarget(E,R,S)};function x(w,T){let _=t.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new qe(r.x,r.y,{format:nr,type:Kn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,_,f,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,_,d,g,null)}function v(w,T,_,E){let R=null,S=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)R=S;else if(R=_.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let P=R.uuid,k=T.uuid,D=c[P];D===void 0&&(D={},c[P]=D);let U=D[k];U===void 0&&(U=R.clone(),D[k]=U,T.addEventListener("dispose",M)),R=U}if(R.visible=T.visible,R.wireframe=T.wireframe,E===Lo?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:u[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let P=i.properties.get(R);P.light=_}return R}function y(w,T,_,E,R){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Lo)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let k=t.update(w),D=w.material;if(Array.isArray(D)){let U=k.groups;for(let A=0,I=U.length;A<I;A++){let O=U[A],C=D[O.materialIndex];if(C&&C.visible){let B=v(w,C,E,R);w.onBeforeShadow(i,w,T,_,k,B,O),i.renderBufferDirect(_,null,k,B,w,O),w.onAfterShadow(i,w,T,_,k,B,O)}}}else if(D.visible){let U=v(w,D,E,R);w.onBeforeShadow(i,w,T,_,k,U,null),i.renderBufferDirect(_,null,k,U,w,null),w.onAfterShadow(i,w,T,_,k,U,null)}}let P=w.children;for(let k=0,D=P.length;k<D;k++)y(P[k],T,_,E,R)}function M(w){w.target.removeEventListener("dispose",M);for(let _ in c){let E=c[_],R=w.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Z2(i,t){function e(){let j=!1,St=new Oe,ht=null,Tt=new Oe(0,0,0,0);return{setMask:function(Ct){ht!==Ct&&!j&&(i.colorMask(Ct,Ct,Ct,Ct),ht=Ct)},setLocked:function(Ct){j=Ct},setClear:function(Ct,xt,Wt,Bt,Pe){Pe===!0&&(Ct*=Bt,xt*=Bt,Wt*=Bt),St.set(Ct,xt,Wt,Bt),Tt.equals(St)===!1&&(i.clearColor(Ct,xt,Wt,Bt),Tt.copy(St))},reset:function(){j=!1,ht=null,Tt.set(-1,0,0,0)}}}function n(){let j=!1,St=!1,ht=null,Tt=null,Ct=null;return{setReversed:function(xt){if(St!==xt){let Wt=t.get("EXT_clip_control");xt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),St=xt;let Bt=Ct;Ct=null,this.setClear(Bt)}},getReversed:function(){return St},setTest:function(xt){xt?H(i.DEPTH_TEST):J(i.DEPTH_TEST)},setMask:function(xt){ht!==xt&&!j&&(i.depthMask(xt),ht=xt)},setFunc:function(xt){if(St&&(xt=wm[xt]),Tt!==xt){switch(xt){case ml:i.depthFunc(i.NEVER);break;case gl:i.depthFunc(i.ALWAYS);break;case bl:i.depthFunc(i.LESS);break;case yo:i.depthFunc(i.LEQUAL);break;case xl:i.depthFunc(i.EQUAL);break;case yl:i.depthFunc(i.GEQUAL);break;case vl:i.depthFunc(i.GREATER);break;case _l:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=xt}},setLocked:function(xt){j=xt},setClear:function(xt){Ct!==xt&&(Ct=xt,St&&(xt=1-xt),i.clearDepth(xt))},reset:function(){j=!1,ht=null,Tt=null,Ct=null,St=!1}}}function r(){let j=!1,St=null,ht=null,Tt=null,Ct=null,xt=null,Wt=null,Bt=null,Pe=null;return{setTest:function(ye){j||(ye?H(i.STENCIL_TEST):J(i.STENCIL_TEST))},setMask:function(ye){St!==ye&&!j&&(i.stencilMask(ye),St=ye)},setFunc:function(ye,Bn,ei){(ht!==ye||Tt!==Bn||Ct!==ei)&&(i.stencilFunc(ye,Bn,ei),ht=ye,Tt=Bn,Ct=ei)},setOp:function(ye,Bn,ei){(xt!==ye||Wt!==Bn||Bt!==ei)&&(i.stencilOp(ye,Bn,ei),xt=ye,Wt=Bn,Bt=ei)},setLocked:function(ye){j=ye},setClear:function(ye){Pe!==ye&&(i.clearStencil(ye),Pe=ye)},reset:function(){j=!1,St=null,ht=null,Tt=null,Ct=null,xt=null,Wt=null,Bt=null,Pe=null}}}let o=new e,s=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],g=null,b=!1,m=null,x=null,v=null,y=null,M=null,w=null,T=null,_=new K(0,0,0),E=0,R=!1,S=null,P=null,k=null,D=null,U=null,A=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,O=0,C=i.getParameter(i.VERSION);C.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(C)[1]),I=O>=1):C.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),I=O>=2);let B=null,z={},W=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),Y=new Oe().fromArray(W),et=new Oe().fromArray(V);function nt(j,St,ht,Tt){let Ct=new Uint8Array(4),xt=i.createTexture();i.bindTexture(j,xt),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<ht;Wt++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(St+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return xt}let $={};$[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),H(i.DEPTH_TEST),s.setFunc(yo),mt(!1),$t(Rh),H(i.CULL_FACE),ft(kn);function H(j){h[j]!==!0&&(i.enable(j),h[j]=!0)}function J(j){h[j]!==!1&&(i.disable(j),h[j]=!1)}function ot(j,St){return f[j]!==St?(i.bindFramebuffer(j,St),f[j]=St,j===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=St),j===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=St),!0):!1}function Q(j,St){let ht=p,Tt=!1;if(j){ht=d.get(St),ht===void 0&&(ht=[],d.set(St,ht));let Ct=j.textures;if(ht.length!==Ct.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Wt=Ct.length;xt<Wt;xt++)ht[xt]=i.COLOR_ATTACHMENT0+xt;ht.length=Ct.length,Tt=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(ht)}function bt(j){return g!==j?(i.useProgram(j),g=j,!0):!1}let gt={[Pr]:i.FUNC_ADD,[Xp]:i.FUNC_SUBTRACT,[$p]:i.FUNC_REVERSE_SUBTRACT};gt[Yp]=i.MIN,gt[qp]=i.MAX;let ut={[Kp]:i.ZERO,[Zp]:i.ONE,[jp]:i.SRC_COLOR,[Ih]:i.SRC_ALPHA,[im]:i.SRC_ALPHA_SATURATE,[em]:i.DST_COLOR,[Qp]:i.DST_ALPHA,[Jp]:i.ONE_MINUS_SRC_COLOR,[Lh]:i.ONE_MINUS_SRC_ALPHA,[nm]:i.ONE_MINUS_DST_COLOR,[tm]:i.ONE_MINUS_DST_ALPHA,[rm]:i.CONSTANT_COLOR,[om]:i.ONE_MINUS_CONSTANT_COLOR,[sm]:i.CONSTANT_ALPHA,[am]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(j,St,ht,Tt,Ct,xt,Wt,Bt,Pe,ye){if(j===kn){b===!0&&(J(i.BLEND),b=!1);return}if(b===!1&&(H(i.BLEND),b=!0),j!==Wp){if(j!==m||ye!==R){if((x!==Pr||M!==Pr)&&(i.blendEquation(i.FUNC_ADD),x=Pr,M=Pr),ye)switch(j){case Mn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ee:i.blendFunc(i.ONE,i.ONE);break;case Ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",j);break}else switch(j){case Mn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ee:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ch:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hs:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",j);break}v=null,y=null,w=null,T=null,_.set(0,0,0),E=0,m=j,R=ye}return}Ct=Ct||St,xt=xt||ht,Wt=Wt||Tt,(St!==x||Ct!==M)&&(i.blendEquationSeparate(gt[St],gt[Ct]),x=St,M=Ct),(ht!==v||Tt!==y||xt!==w||Wt!==T)&&(i.blendFuncSeparate(ut[ht],ut[Tt],ut[xt],ut[Wt]),v=ht,y=Tt,w=xt,T=Wt),(Bt.equals(_)===!1||Pe!==E)&&(i.blendColor(Bt.r,Bt.g,Bt.b,Pe),_.copy(Bt),E=Pe),m=j,R=!1}function Lt(j,St){j.side===re?J(i.CULL_FACE):H(i.CULL_FACE);let ht=j.side===an;St&&(ht=!ht),mt(ht),j.blending===Mn&&j.transparent===!1?ft(kn):ft(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),s.setFunc(j.depthFunc),s.setTest(j.depthTest),s.setMask(j.depthWrite),o.setMask(j.colorWrite);let Tt=j.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Re(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):J(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(j){S!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),S=j)}function $t(j){j!==Vp?(H(i.CULL_FACE),j!==P&&(j===Rh?i.cullFace(i.BACK):j===Gp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):J(i.CULL_FACE),P=j}function he(j){j!==k&&(I&&i.lineWidth(j),k=j)}function Re(j,St,ht){j?(H(i.POLYGON_OFFSET_FILL),(D!==St||U!==ht)&&(D=St,U=ht,s.getReversed()&&(St=-St),i.polygonOffset(St,ht))):J(i.POLYGON_OFFSET_FILL)}function ie(j){j?H(i.SCISSOR_TEST):J(i.SCISSOR_TEST)}function xe(j){j===void 0&&(j=i.TEXTURE0+A-1),B!==j&&(i.activeTexture(j),B=j)}function Z(j,St,ht){ht===void 0&&(B===null?ht=i.TEXTURE0+A-1:ht=B);let Tt=z[ht];Tt===void 0&&(Tt={type:void 0,texture:void 0},z[ht]=Tt),(Tt.type!==j||Tt.texture!==St)&&(B!==ht&&(i.activeTexture(ht),B=ht),i.bindTexture(j,St||$[j]),Tt.type=j,Tt.texture=St)}function Ke(){let j=z[B];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(j){Kt("WebGLState:",j)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(j){Kt("WebGLState:",j)}}function L(){try{i.texSubImage2D(...arguments)}catch(j){Kt("WebGLState:",j)}}function tt(){try{i.texSubImage3D(...arguments)}catch(j){Kt("WebGLState:",j)}}function st(){try{i.compressedTexSubImage2D(...arguments)}catch(j){Kt("WebGLState:",j)}}function lt(){try{i.compressedTexSubImage3D(...arguments)}catch(j){Kt("WebGLState:",j)}}function yt(){try{i.texStorage2D(...arguments)}catch(j){Kt("WebGLState:",j)}}function vt(){try{i.texStorage3D(...arguments)}catch(j){Kt("WebGLState:",j)}}function ct(){try{i.texImage2D(...arguments)}catch(j){Kt("WebGLState:",j)}}function dt(){try{i.texImage3D(...arguments)}catch(j){Kt("WebGLState:",j)}}function Mt(j){return u[j]!==void 0?u[j]:i.getParameter(j)}function Gt(j,St){u[j]!==St&&(i.pixelStorei(j,St),u[j]=St)}function At(j){Y.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),Y.copy(j))}function wt(j){et.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),et.copy(j))}function Ht(j,St){let ht=c.get(St);ht===void 0&&(ht=new WeakMap,c.set(St,ht));let Tt=ht.get(j);Tt===void 0&&(Tt=i.getUniformBlockIndex(St,j.name),ht.set(j,Tt))}function Yt(j,St){let Tt=c.get(St).get(j);l.get(St)!==Tt&&(i.uniformBlockBinding(St,Tt,j.__bindingPointIndex),l.set(St,Tt))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},B=null,z={},f={},d=new WeakMap,p=[],g=null,b=!1,m=null,x=null,v=null,y=null,M=null,w=null,T=null,_=new K(0,0,0),E=0,R=!1,S=null,P=null,k=null,D=null,U=null,Y.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:H,disable:J,bindFramebuffer:ot,drawBuffers:Q,useProgram:bt,setBlending:ft,setMaterial:Lt,setFlipSided:mt,setCullFace:$t,setLineWidth:he,setPolygonOffset:Re,setScissorTest:ie,activeTexture:xe,bindTexture:Z,unbindTexture:Ke,compressedTexImage2D:ge,compressedTexImage3D:G,texImage2D:ct,texImage3D:dt,pixelStorei:Gt,getParameter:Mt,updateUBOMapping:Ht,uniformBlockBinding:Yt,texStorage2D:yt,texStorage3D:vt,texSubImage2D:L,texSubImage3D:tt,compressedTexSubImage2D:st,compressedTexSubImage3D:lt,scissor:At,viewport:wt,reset:se}}function j2(i,t,e,n,r,o,s){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Zt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(G,L){return p?new OffscreenCanvas(G,L):_o("canvas")}function b(G,L,tt){let st=1,lt=ge(G);if((lt.width>tt||lt.height>tt)&&(st=tt/Math.max(lt.width,lt.height)),st<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){let yt=Math.floor(st*lt.width),vt=Math.floor(st*lt.height);f===void 0&&(f=g(yt,vt));let ct=L?g(yt,vt):f;return ct.width=yt,ct.height=vt,ct.getContext("2d").drawImage(G,0,0,yt,vt),qt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+yt+"x"+vt+")."),ct}else return"data"in G&&qt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),G;return G}function m(G){return G.generateMipmaps}function x(G){i.generateMipmap(G)}function v(G){return G.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?i.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(G,L,tt,st,lt,yt=!1){if(G!==null){if(i[G]!==void 0)return i[G];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let vt;st&&(vt=t.get("EXT_texture_norm16"),vt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=L;if(L===i.RED&&(tt===i.FLOAT&&(ct=i.R32F),tt===i.HALF_FLOAT&&(ct=i.R16F),tt===i.UNSIGNED_BYTE&&(ct=i.R8),tt===i.UNSIGNED_SHORT&&vt&&(ct=vt.R16_EXT),tt===i.SHORT&&vt&&(ct=vt.R16_SNORM_EXT)),L===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ct=i.R8UI),tt===i.UNSIGNED_SHORT&&(ct=i.R16UI),tt===i.UNSIGNED_INT&&(ct=i.R32UI),tt===i.BYTE&&(ct=i.R8I),tt===i.SHORT&&(ct=i.R16I),tt===i.INT&&(ct=i.R32I)),L===i.RG&&(tt===i.FLOAT&&(ct=i.RG32F),tt===i.HALF_FLOAT&&(ct=i.RG16F),tt===i.UNSIGNED_BYTE&&(ct=i.RG8),tt===i.UNSIGNED_SHORT&&vt&&(ct=vt.RG16_EXT),tt===i.SHORT&&vt&&(ct=vt.RG16_SNORM_EXT)),L===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ct=i.RG8UI),tt===i.UNSIGNED_SHORT&&(ct=i.RG16UI),tt===i.UNSIGNED_INT&&(ct=i.RG32UI),tt===i.BYTE&&(ct=i.RG8I),tt===i.SHORT&&(ct=i.RG16I),tt===i.INT&&(ct=i.RG32I)),L===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),tt===i.UNSIGNED_INT&&(ct=i.RGB32UI),tt===i.BYTE&&(ct=i.RGB8I),tt===i.SHORT&&(ct=i.RGB16I),tt===i.INT&&(ct=i.RGB32I)),L===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),tt===i.UNSIGNED_INT&&(ct=i.RGBA32UI),tt===i.BYTE&&(ct=i.RGBA8I),tt===i.SHORT&&(ct=i.RGBA16I),tt===i.INT&&(ct=i.RGBA32I)),L===i.RGB&&(tt===i.UNSIGNED_SHORT&&vt&&(ct=vt.RGB16_EXT),tt===i.SHORT&&vt&&(ct=vt.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(ct=i.R11F_G11F_B10F)),L===i.RGBA){let dt=yt?_s:fe.getTransfer(lt);tt===i.FLOAT&&(ct=i.RGBA32F),tt===i.HALF_FLOAT&&(ct=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(ct=dt===_e?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&vt&&(ct=vt.RGBA16_EXT),tt===i.SHORT&&vt&&(ct=vt.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function M(G,L){let tt;return G?L===null||L===Yn||L===ko?tt=i.DEPTH24_STENCIL8:L===qn?tt=i.DEPTH32F_STENCIL8:L===Fo&&(tt=i.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===Yn||L===ko?tt=i.DEPTH_COMPONENT24:L===qn?tt=i.DEPTH_COMPONENT32F:L===Fo&&(tt=i.DEPTH_COMPONENT16),tt}function w(G,L){return m(G)===!0||G.isFramebufferTexture&&G.minFilter!==on&&G.minFilter!==Ye?Math.log2(Math.max(L.width,L.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?L.mipmaps.length:1}function T(G){let L=G.target;L.removeEventListener("dispose",T),E(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&u.delete(L)}function _(G){let L=G.target;L.removeEventListener("dispose",_),S(L)}function E(G){let L=n.get(G);if(L.__webglInit===void 0)return;let tt=G.source,st=d.get(tt);if(st){let lt=st[L.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&R(G),Object.keys(st).length===0&&d.delete(tt)}n.remove(G)}function R(G){let L=n.get(G);i.deleteTexture(L.__webglTexture);let tt=G.source,st=d.get(tt);delete st[L.__cacheKey],s.memory.textures--}function S(G){let L=n.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),n.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(L.__webglFramebuffer[st]))for(let lt=0;lt<L.__webglFramebuffer[st].length;lt++)i.deleteFramebuffer(L.__webglFramebuffer[st][lt]);else i.deleteFramebuffer(L.__webglFramebuffer[st]);L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer[st])}else{if(Array.isArray(L.__webglFramebuffer))for(let st=0;st<L.__webglFramebuffer.length;st++)i.deleteFramebuffer(L.__webglFramebuffer[st]);else i.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&i.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let st=0;st<L.__webglColorRenderbuffer.length;st++)L.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(L.__webglColorRenderbuffer[st]);L.__webglDepthRenderbuffer&&i.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let tt=G.textures;for(let st=0,lt=tt.length;st<lt;st++){let yt=n.get(tt[st]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),s.memory.textures--),n.remove(tt[st])}n.remove(G)}let P=0;function k(){P=0}function D(){return P}function U(G){P=G}function A(){let G=P;return G>=r.maxTextures&&qt("WebGLTextures: Trying to use "+(G+1)+" texture units while this GPU supports only "+r.maxTextures),P+=1,G}function I(G){let L=[];return L.push(G.wrapS),L.push(G.wrapT),L.push(G.wrapR||0),L.push(G.magFilter),L.push(G.minFilter),L.push(G.anisotropy),L.push(G.internalFormat),L.push(G.format),L.push(G.type),L.push(G.generateMipmaps),L.push(G.premultiplyAlpha),L.push(G.flipY),L.push(G.unpackAlignment),L.push(G.colorSpace),L.join()}function O(G,L){let tt=n.get(G);if(G.isVideoTexture&&Z(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&tt.__version!==G.version){let st=G.image;if(st===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{J(tt,G,L);return}}else G.isExternalTexture&&(tt.__webglTexture=G.sourceTexture?G.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+L)}function C(G,L){let tt=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&tt.__version!==G.version){J(tt,G,L);return}else G.isExternalTexture&&(tt.__webglTexture=G.sourceTexture?G.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+L)}function B(G,L){let tt=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&tt.__version!==G.version){J(tt,G,L);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+L)}function z(G,L){let tt=n.get(G);if(G.isCubeDepthTexture!==!0&&G.version>0&&tt.__version!==G.version){ot(tt,G,L);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+L)}let W={[Mr]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[Ml]:i.MIRRORED_REPEAT},V={[on]:i.NEAREST,[um]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[Jl]:i.LINEAR_MIPMAP_NEAREST,[tr]:i.LINEAR_MIPMAP_LINEAR},Y={[pm]:i.NEVER,[ym]:i.ALWAYS,[mm]:i.LESS,[Dc]:i.LEQUAL,[gm]:i.EQUAL,[Oc]:i.GEQUAL,[bm]:i.GREATER,[xm]:i.NOTEQUAL};function et(G,L){if(L.type===qn&&t.has("OES_texture_float_linear")===!1&&(L.magFilter===Ye||L.magFilter===Jl||L.magFilter===$s||L.magFilter===tr||L.minFilter===Ye||L.minFilter===Jl||L.minFilter===$s||L.minFilter===tr)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(G,i.TEXTURE_WRAP_S,W[L.wrapS]),i.texParameteri(G,i.TEXTURE_WRAP_T,W[L.wrapT]),(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)&&i.texParameteri(G,i.TEXTURE_WRAP_R,W[L.wrapR]),i.texParameteri(G,i.TEXTURE_MAG_FILTER,V[L.magFilter]),i.texParameteri(G,i.TEXTURE_MIN_FILTER,V[L.minFilter]),L.compareFunction&&(i.texParameteri(G,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(G,i.TEXTURE_COMPARE_FUNC,Y[L.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===on||L.minFilter!==$s&&L.minFilter!==tr||L.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||n.get(L).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(G,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,r.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy}}}function nt(G,L){let tt=!1;G.__webglInit===void 0&&(G.__webglInit=!0,L.addEventListener("dispose",T));let st=L.source,lt=d.get(st);lt===void 0&&(lt={},d.set(st,lt));let yt=I(L);if(yt!==G.__cacheKey){lt[yt]===void 0&&(lt[yt]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,tt=!0),lt[yt].usedTimes++;let vt=lt[G.__cacheKey];vt!==void 0&&(lt[G.__cacheKey].usedTimes--,vt.usedTimes===0&&R(L)),G.__cacheKey=yt,G.__webglTexture=lt[yt].texture}return tt}function $(G,L,tt){return Math.floor(Math.floor(G/tt)/L)}function H(G,L,tt,st){let yt=G.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,L.width,L.height,tt,st,L.data);else{yt.sort((Gt,At)=>Gt.start-At.start);let vt=0;for(let Gt=1;Gt<yt.length;Gt++){let At=yt[vt],wt=yt[Gt],Ht=At.start+At.count,Yt=$(wt.start,L.width,4),se=$(At.start,L.width,4);wt.start<=Ht+1&&Yt===se&&$(wt.start+wt.count-1,L.width,4)===Yt?At.count=Math.max(At.count,wt.start+wt.count-At.start):(++vt,yt[vt]=wt)}yt.length=vt+1;let ct=e.getParameter(i.UNPACK_ROW_LENGTH),dt=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,L.width);for(let Gt=0,At=yt.length;Gt<At;Gt++){let wt=yt[Gt],Ht=Math.floor(wt.start/4),Yt=Math.ceil(wt.count/4),se=Ht%L.width,j=Math.floor(Ht/L.width),St=Yt,ht=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,se),e.pixelStorei(i.UNPACK_SKIP_ROWS,j),e.texSubImage2D(i.TEXTURE_2D,0,se,j,St,ht,tt,st,L.data)}G.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ct),e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function J(G,L,tt){let st=i.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),L.isData3DTexture&&(st=i.TEXTURE_3D);let lt=nt(G,L),yt=L.source;e.bindTexture(st,G.__webglTexture,i.TEXTURE0+tt);let vt=n.get(yt);if(yt.version!==vt.__version||lt===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&L.image instanceof ImageBitmap)===!1){let ht=fe.getPrimaries(fe.workingColorSpace),Tt=L.colorSpace===Ci?null:fe.getPrimaries(L.colorSpace),Ct=L.colorSpace===Ci||ht===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment);let dt=b(L.image,!1,r.maxTextureSize);dt=Ke(L,dt);let Mt=o.convert(L.format,L.colorSpace),Gt=o.convert(L.type),At=y(L.internalFormat,Mt,Gt,L.normalized,L.colorSpace,L.isVideoTexture);et(st,L);let wt,Ht=L.mipmaps,Yt=L.isVideoTexture!==!0,se=vt.__version===void 0||lt===!0,j=yt.dataReady,St=w(L,dt);if(L.isDepthTexture)At=M(L.format===er,L.type),se&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,At,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,At,dt.width,dt.height,0,Mt,Gt,null));else if(L.isDataTexture)if(Ht.length>0){Yt&&se&&e.texStorage2D(i.TEXTURE_2D,St,At,Ht[0].width,Ht[0].height);for(let ht=0,Tt=Ht.length;ht<Tt;ht++)wt=Ht[ht],Yt?j&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,wt.width,wt.height,Mt,Gt,wt.data):e.texImage2D(i.TEXTURE_2D,ht,At,wt.width,wt.height,0,Mt,Gt,wt.data);L.generateMipmaps=!1}else Yt?(se&&e.texStorage2D(i.TEXTURE_2D,St,At,dt.width,dt.height),j&&H(L,dt,Mt,Gt)):e.texImage2D(i.TEXTURE_2D,0,At,dt.width,dt.height,0,Mt,Gt,dt.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){Yt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,At,Ht[0].width,Ht[0].height,dt.depth);for(let ht=0,Tt=Ht.length;ht<Tt;ht++)if(wt=Ht[ht],L.format!==Dn)if(Mt!==null)if(Yt){if(j)if(L.layerUpdates.size>0){let Ct=tf(wt.width,wt.height,L.format,L.type);for(let xt of L.layerUpdates){let Wt=wt.data.subarray(xt*Ct/wt.data.BYTES_PER_ELEMENT,(xt+1)*Ct/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,xt,wt.width,wt.height,1,Mt,Wt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,wt.width,wt.height,dt.depth,Mt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,At,wt.width,wt.height,dt.depth,0,wt.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?j&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,wt.width,wt.height,dt.depth,Mt,Gt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,At,wt.width,wt.height,dt.depth,0,Mt,Gt,wt.data);L.layerUpdates.size>0&&L.clearLayerUpdates()}else{Yt&&se&&e.texStorage2D(i.TEXTURE_2D,St,At,Ht[0].width,Ht[0].height);for(let ht=0,Tt=Ht.length;ht<Tt;ht++)wt=Ht[ht],L.format!==Dn?Mt!==null?Yt?j&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,wt.width,wt.height,Mt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,At,wt.width,wt.height,0,wt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?j&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,wt.width,wt.height,Mt,Gt,wt.data):e.texImage2D(i.TEXTURE_2D,ht,At,wt.width,wt.height,0,Mt,Gt,wt.data)}else if(L.isDataArrayTexture)if(Yt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,At,dt.width,dt.height,dt.depth),j)if(L.layerUpdates.size>0){let ht=tf(dt.width,dt.height,L.format,L.type);for(let Tt of L.layerUpdates){let Ct=dt.data.subarray(Tt*ht/dt.data.BYTES_PER_ELEMENT,(Tt+1)*ht/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,dt.width,dt.height,1,Mt,Gt,Ct)}L.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Mt,Gt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,dt.width,dt.height,dt.depth,0,Mt,Gt,dt.data);else if(L.isData3DTexture)Yt?(se&&e.texStorage3D(i.TEXTURE_3D,St,At,dt.width,dt.height,dt.depth),j&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Mt,Gt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,At,dt.width,dt.height,dt.depth,0,Mt,Gt,dt.data);else if(L.isFramebufferTexture){if(se)if(Yt)e.texStorage2D(i.TEXTURE_2D,St,At,dt.width,dt.height);else{let ht=dt.width,Tt=dt.height;for(let Ct=0;Ct<St;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,At,ht,Tt,0,Mt,Gt,null),ht>>=1,Tt>>=1}}else if(L.isHTMLTexture){if("texElementImage2D"in i){let ht=i.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),dt.parentNode!==ht){ht.appendChild(dt),u.add(L),ht.onpaint=Tt=>{let Ct=Tt.changedElements;for(let xt of u)Ct.includes(xt.image)&&(xt.needsUpdate=!0)},ht.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,dt);else{let Ct=i.RGBA,xt=i.RGBA,Wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ct,xt,Wt,dt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(Yt&&se){let ht=ge(Ht[0]);e.texStorage2D(i.TEXTURE_2D,St,At,ht.width,ht.height)}for(let ht=0,Tt=Ht.length;ht<Tt;ht++)wt=Ht[ht],Yt?j&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Mt,Gt,wt):e.texImage2D(i.TEXTURE_2D,ht,At,Mt,Gt,wt);L.generateMipmaps=!1}else if(Yt){if(se){let ht=ge(dt);e.texStorage2D(i.TEXTURE_2D,St,At,ht.width,ht.height)}j&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Gt,dt)}else e.texImage2D(i.TEXTURE_2D,0,At,Mt,Gt,dt);m(L)&&x(st),vt.__version=yt.version,L.onUpdate&&L.onUpdate(L)}G.__version=L.version}function ot(G,L,tt){if(L.image.length!==6)return;let st=nt(G,L),lt=L.source;e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+tt);let yt=n.get(lt);if(lt.version!==yt.__version||st===!0){e.activeTexture(i.TEXTURE0+tt);let vt=fe.getPrimaries(fe.workingColorSpace),ct=L.colorSpace===Ci?null:fe.getPrimaries(L.colorSpace),dt=L.colorSpace===Ci||vt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Mt=L.isCompressedTexture||L.image[0].isCompressedTexture,Gt=L.image[0]&&L.image[0].isDataTexture,At=[];for(let xt=0;xt<6;xt++)!Mt&&!Gt?At[xt]=b(L.image[xt],!0,r.maxCubemapSize):At[xt]=Gt?L.image[xt].image:L.image[xt],At[xt]=Ke(L,At[xt]);let wt=At[0],Ht=o.convert(L.format,L.colorSpace),Yt=o.convert(L.type),se=y(L.internalFormat,Ht,Yt,L.normalized,L.colorSpace),j=L.isVideoTexture!==!0,St=yt.__version===void 0||st===!0,ht=lt.dataReady,Tt=w(L,wt);et(i.TEXTURE_CUBE_MAP,L);let Ct;if(Mt){j&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,se,wt.width,wt.height);for(let xt=0;xt<6;xt++){Ct=At[xt].mipmaps;for(let Wt=0;Wt<Ct.length;Wt++){let Bt=Ct[Wt];L.format!==Dn?Ht!==null?j?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt,0,0,Bt.width,Bt.height,Ht,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt,se,Bt.width,Bt.height,0,Bt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt,0,0,Bt.width,Bt.height,Ht,Yt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt,se,Bt.width,Bt.height,0,Ht,Yt,Bt.data)}}}else{if(Ct=L.mipmaps,j&&St){Ct.length>0&&Tt++;let xt=ge(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,se,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Gt){j?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,At[xt].width,At[xt].height,Ht,Yt,At[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,se,At[xt].width,At[xt].height,0,Ht,Yt,At[xt].data);for(let Wt=0;Wt<Ct.length;Wt++){let Pe=Ct[Wt].image[xt].image;j?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt+1,0,0,Pe.width,Pe.height,Ht,Yt,Pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt+1,se,Pe.width,Pe.height,0,Ht,Yt,Pe.data)}}else{j?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ht,Yt,At[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,se,Ht,Yt,At[xt]);for(let Wt=0;Wt<Ct.length;Wt++){let Bt=Ct[Wt];j?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt+1,0,0,Ht,Yt,Bt.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt+1,se,Ht,Yt,Bt.image[xt])}}}m(L)&&x(i.TEXTURE_CUBE_MAP),yt.__version=lt.version,L.onUpdate&&L.onUpdate(L)}G.__version=L.version}function Q(G,L,tt,st,lt,yt){let vt=o.convert(tt.format,tt.colorSpace),ct=o.convert(tt.type),dt=y(tt.internalFormat,vt,ct,tt.normalized,tt.colorSpace),Mt=n.get(L),Gt=n.get(tt);if(Gt.__renderTarget=L,!Mt.__hasExternalTextures){let At=Math.max(1,L.width>>yt),wt=Math.max(1,L.height>>yt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,yt,dt,At,wt,L.depth,0,vt,ct,null):e.texImage2D(lt,yt,dt,At,wt,0,vt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,G),xe(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,lt,Gt.__webglTexture,0,ie(L)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,lt,Gt.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(G,L,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,G),L.depthBuffer){let st=L.depthTexture,lt=st&&st.isDepthTexture?st.type:null,yt=M(L.stencilBuffer,lt),vt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xe(L)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(L),yt,L.width,L.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(L),yt,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,yt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,G)}else{let st=L.textures;for(let lt=0;lt<st.length;lt++){let yt=st[lt],vt=o.convert(yt.format,yt.colorSpace),ct=o.convert(yt.type),dt=y(yt.internalFormat,vt,ct,yt.normalized,yt.colorSpace);xe(L)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(L),dt,L.width,L.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(L),dt,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,dt,L.width,L.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(G,L,tt){let st=L.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,G),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let lt=n.get(L.depthTexture);if(lt.__renderTarget=L,(!lt.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),st){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,L.depthTexture.addEventListener("dispose",T)),lt.__webglTexture===void 0){lt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),et(i.TEXTURE_CUBE_MAP,L.depthTexture);let Mt=o.convert(L.depthTexture.format),Gt=o.convert(L.depthTexture.type),At;L.depthTexture.format===oi?At=i.DEPTH_COMPONENT24:L.depthTexture.format===er&&(At=i.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,At,L.width,L.height,0,Mt,Gt,null)}}else O(L.depthTexture,0);let yt=lt.__webglTexture,vt=ie(L),ct=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,dt=L.depthTexture.format===er?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(L.depthTexture.format===oi)xe(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,ct,yt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,dt,ct,yt,0);else if(L.depthTexture.format===er)xe(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,ct,yt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,dt,ct,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(G){let L=n.get(G),tt=G.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==G.depthTexture){let st=G.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),st){let lt=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,st.removeEventListener("dispose",lt)};st.addEventListener("dispose",lt),L.__depthDisposeCallback=lt}L.__boundDepthTexture=st}if(G.depthTexture&&!L.__autoAllocateDepthBuffer)if(tt)for(let st=0;st<6;st++)gt(L.__webglFramebuffer[st],G,st);else{let st=G.texture.mipmaps;st&&st.length>0?gt(L.__webglFramebuffer[0],G,0):gt(L.__webglFramebuffer,G,0)}else if(tt){L.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[st]),L.__webglDepthbuffer[st]===void 0)L.__webglDepthbuffer[st]=i.createRenderbuffer(),bt(L.__webglDepthbuffer[st],G,!1);else{let lt=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=L.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,yt)}}else{let st=G.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=i.createRenderbuffer(),bt(L.__webglDepthbuffer,G,!1);else{let lt=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=L.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(G,L,tt){let st=n.get(G);L!==void 0&&Q(st.__webglFramebuffer,G,G.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&ut(G)}function Lt(G){let L=G.texture,tt=n.get(G),st=n.get(L);G.addEventListener("dispose",_);let lt=G.textures,yt=G.isWebGLCubeRenderTarget===!0,vt=lt.length>1;if(vt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=L.version,s.memory.textures++),yt){tt.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(L.mipmaps&&L.mipmaps.length>0){tt.__webglFramebuffer[ct]=[];for(let dt=0;dt<L.mipmaps.length;dt++)tt.__webglFramebuffer[ct][dt]=i.createFramebuffer()}else tt.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){tt.__webglFramebuffer=[];for(let ct=0;ct<L.mipmaps.length;ct++)tt.__webglFramebuffer[ct]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(vt)for(let ct=0,dt=lt.length;ct<dt;ct++){let Mt=n.get(lt[ct]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),s.memory.textures++)}if(G.samples>0&&xe(G)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let ct=0;ct<lt.length;ct++){let dt=lt[ct];tt.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[ct]);let Mt=o.convert(dt.format,dt.colorSpace),Gt=o.convert(dt.type),At=y(dt.internalFormat,Mt,Gt,dt.normalized,dt.colorSpace,G.isXRRenderTarget===!0),wt=ie(G);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,At,G.width,G.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,tt.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),G.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(tt.__webglDepthRenderbuffer,G,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),et(i.TEXTURE_CUBE_MAP,L);for(let ct=0;ct<6;ct++)if(L.mipmaps&&L.mipmaps.length>0)for(let dt=0;dt<L.mipmaps.length;dt++)Q(tt.__webglFramebuffer[ct][dt],G,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,dt);else Q(tt.__webglFramebuffer[ct],G,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(L)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ct=0,dt=lt.length;ct<dt;ct++){let Mt=lt[ct],Gt=n.get(Mt),At=i.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(At=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,Gt.__webglTexture),et(At,Mt),Q(tt.__webglFramebuffer,G,Mt,i.COLOR_ATTACHMENT0+ct,At,0),m(Mt)&&x(At)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(ct=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,st.__webglTexture),et(ct,L),L.mipmaps&&L.mipmaps.length>0)for(let dt=0;dt<L.mipmaps.length;dt++)Q(tt.__webglFramebuffer[dt],G,L,i.COLOR_ATTACHMENT0,ct,dt);else Q(tt.__webglFramebuffer,G,L,i.COLOR_ATTACHMENT0,ct,0);m(L)&&x(ct),e.unbindTexture()}G.depthBuffer&&ut(G)}function mt(G){let L=G.textures;for(let tt=0,st=L.length;tt<st;tt++){let lt=L[tt];if(m(lt)){let yt=v(G),vt=n.get(lt).__webglTexture;e.bindTexture(yt,vt),x(yt),e.unbindTexture()}}}let $t=[],he=[];function Re(G){if(G.samples>0){if(xe(G)===!1){let L=G.textures,tt=G.width,st=G.height,lt=i.COLOR_BUFFER_BIT,yt=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(G),ct=L.length>1;if(ct)for(let Mt=0;Mt<L.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);let dt=G.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Mt=0;Mt<L.length;Mt++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Mt]);let Gt=n.get(L[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,tt,st,0,0,tt,st,lt,i.NEAREST),l===!0&&($t.length=0,he.length=0,$t.push(i.COLOR_ATTACHMENT0+Mt),G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&($t.push(yt),he.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,he)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let Mt=0;Mt<L.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Mt]);let Gt=n.get(L[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&l){let L=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[L])}}}function ie(G){return Math.min(r.maxSamples,G.samples)}function xe(G){let L=n.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Z(G){let L=s.render.frame;h.get(G)!==L&&(h.set(G,L),G.update())}function Ke(G,L){let tt=G.colorSpace,st=G.format,lt=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||tt!==vs&&tt!==Ci&&(fe.getTransfer(tt)===_e?(st!==Dn||lt!==wn)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",tt)),L}function ge(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(c.width=G.naturalWidth||G.width,c.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(c.width=G.displayWidth,c.height=G.displayHeight):(c.width=G.width,c.height=G.height),c}this.allocateTextureUnit=A,this.resetTextureUnits=k,this.getTextureUnits=D,this.setTextureUnits=U,this.setTexture2D=O,this.setTexture2DArray=C,this.setTexture3D=B,this.setTextureCube=z,this.rebindTextures=ft,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function J2(i,t){function e(n,r=Ci){let o,s=fe.getTransfer(r);if(n===wn)return i.UNSIGNED_BYTE;if(n===tc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ec)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vh)return i.BYTE;if(n===Gh)return i.SHORT;if(n===Fo)return i.UNSIGNED_SHORT;if(n===Ql)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===Xh)return i.ALPHA;if(n===$h)return i.RGB;if(n===Dn)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===Yh)return i.RED;if(n===nc)return i.RED_INTEGER;if(n===nr)return i.RG;if(n===ic)return i.RG_INTEGER;if(n===rc)return i.RGBA_INTEGER;if(n===Ys||n===qs||n===Ks||n===Zs)if(s===_e)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ys)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ys)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ks)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oc||n===sc||n===ac||n===lc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===oc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ac)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cc||n===uc||n===hc||n===fc||n===dc||n===js||n===pc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===cc||n===uc)return s===_e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===hc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===fc)return o.COMPRESSED_R11_EAC;if(n===dc)return o.COMPRESSED_SIGNED_R11_EAC;if(n===js)return o.COMPRESSED_RG11_EAC;if(n===pc)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===mc||n===gc||n===bc||n===xc||n===yc||n===vc||n===_c||n===Mc||n===wc||n===Sc||n===Tc||n===Ac||n===Ec||n===Rc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===mc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_c)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ac)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ec)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pc||n===Cc||n===Ic)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Pc)return s===_e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ic)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lc||n===Fc||n===Js||n===kc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Lc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Fc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Js)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ko?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Q2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ps(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mn({vertexShader:Q2,fragmentShader:tw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new Xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_f=class extends si{constructor(t,e){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,g=typeof XRWebGLBinding<"u",b=new vf,m={},x=e.getContextAttributes(),v=null,y=null,M=[],w=[],T=new Zt,_=null,E=null,R=new rn;R.viewport=new Oe;let S=new rn;S.viewport=new Oe;let P=[R,S],k=new ql,D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let H=M[$];return H===void 0&&(H=new To,M[$]=H),H.getTargetRaySpace()},this.getControllerGrip=function($){let H=M[$];return H===void 0&&(H=new To,M[$]=H),H.getGripSpace()},this.getHand=function($){let H=M[$];return H===void 0&&(H=new To,M[$]=H),H.getHandSpace()};function A($){let H=w.indexOf($.inputSource);if(H===-1)return;let J=M[H];J!==void 0&&(J.update($.inputSource,$.frame,c||s),J.dispatchEvent({type:$.type,data:$.inputSource}))}function I(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",O);for(let $=0;$<M.length;$++){let H=w[$];H!==null&&(w[$]=null,M[$].disconnect(H))}D=null,U=null,b.reset();for(let $ in m)delete m[$];if(t.setRenderTarget(v),d=null,f=null,u=null,r=null,y=null,nt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(T.width,T.height,!1),E!==null){let $=E.camera;$.fov=E.fov,$.zoom=E.zoom,$.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(v=t.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",I),r.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,ot=null,Q=null;x.depth&&(Q=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=x.stencil?er:oi,ot=x.stencil?ko:Yn);let bt={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:o};u=this.getBinding(),f=u.createProjectionLayer(bt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new qe(f.textureWidth,f.textureHeight,{format:Dn,type:wn,depthTexture:new ui(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let J={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(r,e,J),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new qe(d.framebufferWidth,d.framebufferHeight,{format:Dn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),nt.setContext(r),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function O($){for(let H=0;H<$.removed.length;H++){let J=$.removed[H],ot=w.indexOf(J);ot>=0&&(w[ot]=null,M[ot].disconnect(J))}for(let H=0;H<$.added.length;H++){let J=$.added[H],ot=w.indexOf(J);if(ot===-1){for(let bt=0;bt<M.length;bt++)if(bt>=w.length){w.push(J),ot=bt;break}else if(w[bt]===null){w[bt]=J,ot=bt;break}if(ot===-1)break}let Q=M[ot];Q&&Q.connect(J)}}let C=new X,B=new X;function z($,H,J){C.setFromMatrixPosition(H.matrixWorld),B.setFromMatrixPosition(J.matrixWorld);let ot=C.distanceTo(B),Q=H.projectionMatrix.elements,bt=J.projectionMatrix.elements,gt=Q[14]/(Q[10]-1),ut=Q[14]/(Q[10]+1),ft=(Q[9]+1)/Q[5],Lt=(Q[9]-1)/Q[5],mt=(Q[8]-1)/Q[0],$t=(bt[8]+1)/bt[0],he=gt*mt,Re=gt*$t,ie=ot/(-mt+$t),xe=ie*-mt;if(H.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(xe),$.translateZ(ie),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Q[10]===-1)$.projectionMatrix.copy(H.projectionMatrix),$.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{let Z=gt+ie,Ke=ut+ie,ge=he-xe,G=Re+(ot-xe),L=ft*ut/Ke*Z,tt=Lt*ut/Ke*Z;$.projectionMatrix.makePerspective(ge,G,L,tt,Z,Ke),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function W($,H){H===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(H.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let H=$.near,J=$.far;b.texture!==null&&(b.depthNear>0&&(H=b.depthNear),b.depthFar>0&&(J=b.depthFar)),k.near=S.near=R.near=H,k.far=S.far=R.far=J,(D!==k.near||U!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,U=k.far),k.layers.mask=$.layers.mask|6,R.layers.mask=k.layers.mask&-5,S.layers.mask=k.layers.mask&-3;let ot=$.parent,Q=k.cameras;W(k,ot);for(let bt=0;bt<Q.length;bt++)W(Q[bt],ot);Q.length===2?z(k,R,S):k.projectionMatrix.copy(R.projectionMatrix),E===null&&$.isPerspectiveCamera&&(E={camera:$,fov:$.fov,zoom:$.zoom}),V($,k,ot)};function V($,H,J){J===null?$.matrix.copy(H.matrixWorld):($.matrix.copy(J.matrixWorld),$.matrix.invert(),$.matrix.multiply(H.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(H.projectionMatrix),$.projectionMatrixInverse.copy(H.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Sl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(k)},this.getCameraTexture=function($){return m[$]};let Y=null;function et($,H){if(h=H.getViewerPose(c||s),p=H,h!==null){let J=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ot=!1;J.length!==k.cameras.length&&(k.cameras.length=0,ot=!0);for(let ut=0;ut<J.length;ut++){let ft=J[ut],Lt=null;if(d!==null)Lt=d.getViewport(ft);else{let $t=u.getViewSubImage(f,ft);Lt=$t.viewport,ut===0&&(t.setRenderTargetTextures(y,$t.colorTexture,$t.depthStencilTexture),t.setRenderTarget(y))}let mt=P[ut];mt===void 0&&(mt=new rn,mt.layers.enable(ut),mt.viewport=new Oe,P[ut]=mt),mt.matrix.fromArray(ft.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(ft.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),ut===0&&(k.matrix.copy(mt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ot===!0&&k.cameras.push(mt)}let Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let ut=u.getDepthInformation(J[0]);ut&&ut.isValid&&ut.texture&&b.init(ut,r.renderState)}if(Q&&Q.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let ut=0;ut<J.length;ut++){let ft=J[ut].camera;if(ft){let Lt=m[ft];Lt||(Lt=new Ps,m[ft]=Lt);let mt=u.getCameraImage(ft);Lt.sourceTexture=mt}}}}for(let J=0;J<M.length;J++){let ot=w[J],Q=M[J];ot!==null&&Q!==void 0&&Q.update(ot,H,c||s)}Y&&Y($,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),p=null}let nt=new t0;nt.setAnimationLoop(et),this.setAnimationLoop=function($){Y=$},this.dispose=function(){}}},ew=new Me,s0=new ne;s0.set(-1,0,0,0,1,0,0,0,1);function nw(i,t){function e(b,m){b.matrixAutoUpdate===!0&&b.updateMatrix(),m.value.copy(b.matrix)}function n(b,m){m.color.getRGB(b.fogColor.value,jh(i)),m.isFog?(b.fogNear.value=m.near,b.fogFar.value=m.far):m.isFogExp2&&(b.fogDensity.value=m.density)}function r(b,m,x,v,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(b,m):m.isMeshLambertMaterial?(o(b,m),m.envMap&&(b.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(b,m),u(b,m)):m.isMeshPhongMaterial?(o(b,m),h(b,m),m.envMap&&(b.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(b,m),f(b,m),m.isMeshPhysicalMaterial&&d(b,m,y)):m.isMeshMatcapMaterial?(o(b,m),p(b,m)):m.isMeshDepthMaterial?o(b,m):m.isMeshDistanceMaterial?(o(b,m),g(b,m)):m.isMeshNormalMaterial?o(b,m):m.isLineBasicMaterial?(s(b,m),m.isLineDashedMaterial&&a(b,m)):m.isPointsMaterial?l(b,m,x,v):m.isSpriteMaterial?c(b,m):m.isShadowMaterial?(b.color.value.copy(m.color),b.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(b,m){b.opacity.value=m.opacity,m.color&&b.diffuse.value.copy(m.color),m.emissive&&b.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(b.map.value=m.map,e(m.map,b.mapTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,e(m.alphaMap,b.alphaMapTransform)),m.bumpMap&&(b.bumpMap.value=m.bumpMap,e(m.bumpMap,b.bumpMapTransform),b.bumpScale.value=m.bumpScale,m.side===an&&(b.bumpScale.value*=-1)),m.normalMap&&(b.normalMap.value=m.normalMap,e(m.normalMap,b.normalMapTransform),b.normalScale.value.copy(m.normalScale),m.side===an&&b.normalScale.value.negate()),m.displacementMap&&(b.displacementMap.value=m.displacementMap,e(m.displacementMap,b.displacementMapTransform),b.displacementScale.value=m.displacementScale,b.displacementBias.value=m.displacementBias),m.emissiveMap&&(b.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,b.emissiveMapTransform)),m.specularMap&&(b.specularMap.value=m.specularMap,e(m.specularMap,b.specularMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest);let x=t.get(m),v=x.envMap,y=x.envMapRotation;v&&(b.envMap.value=v,b.envMapRotation.value.setFromMatrix4(ew.makeRotationFromEuler(y)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(s0),b.reflectivity.value=m.reflectivity,b.ior.value=m.ior,b.refractionRatio.value=m.refractionRatio),m.lightMap&&(b.lightMap.value=m.lightMap,b.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,b.lightMapTransform)),m.aoMap&&(b.aoMap.value=m.aoMap,b.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,b.aoMapTransform))}function s(b,m){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,m.map&&(b.map.value=m.map,e(m.map,b.mapTransform))}function a(b,m){b.dashSize.value=m.dashSize,b.totalSize.value=m.dashSize+m.gapSize,b.scale.value=m.scale}function l(b,m,x,v){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,b.size.value=m.size*x,b.scale.value=v*.5,m.map&&(b.map.value=m.map,e(m.map,b.uvTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,e(m.alphaMap,b.alphaMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest)}function c(b,m){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,b.rotation.value=m.rotation,m.map&&(b.map.value=m.map,e(m.map,b.mapTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,e(m.alphaMap,b.alphaMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest)}function h(b,m){b.specular.value.copy(m.specular),b.shininess.value=Math.max(m.shininess,1e-4)}function u(b,m){m.gradientMap&&(b.gradientMap.value=m.gradientMap)}function f(b,m){b.metalness.value=m.metalness,m.metalnessMap&&(b.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,b.metalnessMapTransform)),b.roughness.value=m.roughness,m.roughnessMap&&(b.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,b.roughnessMapTransform)),m.envMap&&(b.envMapIntensity.value=m.envMapIntensity)}function d(b,m,x){b.ior.value=m.ior,m.sheen>0&&(b.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),b.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(b.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,b.sheenColorMapTransform)),m.sheenRoughnessMap&&(b.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,b.sheenRoughnessMapTransform))),m.clearcoat>0&&(b.clearcoat.value=m.clearcoat,b.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(b.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,b.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(b.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===an&&b.clearcoatNormalScale.value.negate())),m.dispersion>0&&(b.dispersion.value=m.dispersion),m.retroreflectivity>0&&(b.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(b.iridescence.value=m.iridescence,b.iridescenceIOR.value=m.iridescenceIOR,b.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(b.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,b.iridescenceMapTransform)),m.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),m.transmission>0&&(b.transmission.value=m.transmission,b.transmissionSamplerMap.value=x.texture,b.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(b.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,b.transmissionMapTransform)),b.thickness.value=m.thickness,m.thicknessMap&&(b.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=m.attenuationDistance,b.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(b.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(b.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=m.specularIntensity,b.specularColor.value.copy(m.specularColor),m.specularColorMap&&(b.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,b.specularColorMapTransform)),m.specularIntensityMap&&(b.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,b.specularIntensityMapTransform))}function p(b,m){m.matcap&&(b.matcap.value=m.matcap)}function g(b,m){let x=t.get(m).light;b.referencePosition.value.setFromMatrixPosition(x.matrixWorld),b.nearDistance.value=x.shadow.camera.near,b.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function iw(i,t,e,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let w=M.program;n.uniformBlockBinding(y,w)}function c(y,M){let w=r[y.id];w===void 0&&(b(y),w=h(y),r[y.id]=w,y.addEventListener("dispose",x));let T=M.program;n.updateUBOMapping(y,T);let _=t.render.frame;o[y.id]!==_&&(f(y),o[y.id]=_)}function h(y){let M=u();y.__bindingPointIndex=M;let w=i.createBuffer(),T=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,T,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function u(){for(let y=0;y<a;y++)if(s.indexOf(y)===-1)return s.push(y),y;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let M=r[y.id],w=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,E=w.length;_<E;_++){let R=w[_];if(Array.isArray(R))for(let S=0,P=R.length;S<P;S++)d(R[S],_,S,T);else d(R,_,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,M,w,T){if(g(y,M,w,T)===!0){let _=y.__offset,E=y.value;if(Array.isArray(E)){let R=0;for(let S=0;S<E.length;S++){let P=E[S],k=m(P);p(P,y.__data,R),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function p(y,M,w){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,w)}function g(y,M,w,T){let _=y.value,E=M+"_"+w;if(T[E]===void 0)return typeof _=="number"||typeof _=="boolean"?T[E]=_:ArrayBuffer.isView(_)?T[E]=_.slice():T[E]=_.clone(),!0;{let R=T[E];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return T[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function b(y){let M=y.uniforms,w=0,T=16;for(let E=0,R=M.length;E<R;E++){let S=Array.isArray(M[E])?M[E]:[M[E]];for(let P=0,k=S.length;P<k;P++){let D=S[P],U=Array.isArray(D.value)?D.value:[D.value];for(let A=0,I=U.length;A<I;A++){let O=U[A],C=m(O),B=w%T,z=B%C.boundary,W=B+z;w+=z,W!==0&&T-W<C.storage&&(w+=T-W),D.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=C.storage}}}let _=w%T;return _>0&&(w+=T-_),y.__size=w,y.__cache={},this}function m(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",y),M}function x(y){let M=y.target;M.removeEventListener("dispose",x);let w=s.indexOf(M.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function v(){for(let y in r)i.deleteBuffer(r[y]);s=[],r={},o={}}return{bind:l,update:c,dispose:v}}var rw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function ow(){return fi===null&&(fi=new Pl(rw,16,16,nr,Kn),fi.name="DFG_LUT",fi.minFilter=Ye,fi.magFilter=Ye,fi.wrapS=An,fi.wrapT=An,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var Fr=class{constructor(t={}){let{canvas:e=vm(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=wn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;let g=d,b=new Set([rc,ic,nc]),m=new Set([wn,Yn,Fo,ko,tc,ec]),x=new Uint32Array(4),v=new Int32Array(4),y=new X,M=null,w=null,T=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,S=!1,P=null,k=null,D=null,U=null;this._outputColorSpace=Ie;let A=0,I=0,O=null,C=-1,B=null,z=new Oe,W=new Oe,V=null,Y=new K(0),et=0,nt=e.width,$=e.height,H=1,J=null,ot=null,Q=new Oe(0,0,nt,$),bt=new Oe(0,0,nt,$),gt=!1,ut=new Eo,ft=!1,Lt=!1,mt=new Me,$t=new X,he=new Oe,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function xe(){return O===null?H:1}let Z=n;function Ke(N,q){return e.getContext(N,q)}let ge,G,L,tt,st,lt,yt,vt,ct,dt,Mt,Gt,At,wt,Ht,Yt,se,j,St,ht,Tt,Ct,xt;try{let N={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",Bn,!1),Z===null){let q="webgl2";if(Z=Ke(q,N),Z===null)throw Ke(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(N){throw e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",Bn,!1),Kt("WebGLRenderer: "+N.message),N}function Wt(){ge=new fM(Z),ge.init(),Tt=new J2(Z,ge),G=new nM(Z,ge,t,Tt),L=new Z2(Z,ge),G.reversedDepthBuffer&&f&&L.buffers.depth.setReversed(!0),k=Z.createFramebuffer(),D=Z.createFramebuffer(),U=Z.createFramebuffer(),tt=new mM(Z),st=new O2,lt=new j2(Z,ge,L,st,G,Tt,tt),yt=new hM(R),vt=new bv(Z),Ct=new tM(Z,vt),ct=new dM(Z,vt,tt,Ct),dt=new bM(Z,ct,vt,Ct,tt),j=new gM(Z,G,lt),Ht=new iM(st),Mt=new D2(R,yt,ge,G,Ct,Ht),Gt=new nw(R,st),At=new U2,wt=new W2(ge),se=new Q_(R,yt,L,dt,p,l),Yt=new K2(R,dt,G),xt=new iw(Z,tt,G,L),St=new eM(Z,ge,tt),ht=new pM(Z,ge,tt),tt.programs=Mt.programs,R.capabilities=G,R.extensions=ge,R.properties=st,R.renderLists=At,R.shadowMap=Yt,R.state=L,R.info=tt}g!==wn&&(E=new yM(g,e.width,e.height,a,r,o));let Bt=new _f(R,Z);this.xr=Bt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let N=ge.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=ge.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(N){N!==void 0&&(H=N,this.setSize(nt,$,!1))},this.getSize=function(N){return N.set(nt,$)},this.setSize=function(N,q,at=!0){if(Bt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=N,$=q,e.width=Math.floor(N*H),e.height=Math.floor(q*H),at===!0&&(e.style.width=N+"px",e.style.height=q+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,N,q)},this.getDrawingBufferSize=function(N){return N.set(nt*H,$*H).floor()},this.setDrawingBufferSize=function(N,q,at){nt=N,$=q,H=at,e.width=Math.floor(N*at),e.height=Math.floor(q*at),this.setViewport(0,0,N,q)},this.setEffects=function(N){if(g===wn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let q=0;q<N.length;q++)if(N[q].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(z)},this.getViewport=function(N){return N.copy(Q)},this.setViewport=function(N,q,at,it){N.isVector4?Q.set(N.x,N.y,N.z,N.w):Q.set(N,q,at,it),L.viewport(z.copy(Q).multiplyScalar(H).round())},this.getScissor=function(N){return N.copy(bt)},this.setScissor=function(N,q,at,it){N.isVector4?bt.set(N.x,N.y,N.z,N.w):bt.set(N,q,at,it),L.scissor(W.copy(bt).multiplyScalar(H).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(N){L.setScissorTest(gt=N)},this.setOpaqueSort=function(N){J=N},this.setTransparentSort=function(N){ot=N},this.getClearColor=function(N){return N.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(N=!0,q=!0,at=!0){let it=0;if(N){let rt=!1;if(O!==null){let Pt=O.texture.format;rt=b.has(Pt)}if(rt){let Pt=O.texture.type,kt=m.has(Pt),Rt=se.getClearColor(),Ot=se.getClearAlpha(),zt=Rt.r,le=Rt.g,ue=Rt.b;kt?(x[0]=zt,x[1]=le,x[2]=ue,x[3]=Ot,Z.clearBufferuiv(Z.COLOR,0,x)):(v[0]=zt,v[1]=le,v[2]=ue,v[3]=Ot,Z.clearBufferiv(Z.COLOR,0,v))}else it|=Z.COLOR_BUFFER_BIT}q&&(it|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(it|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&Z.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),P=N},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",Bn,!1),se.dispose(),At.dispose(),wt.dispose(),st.dispose(),yt.dispose(),dt.dispose(),Ct.dispose(),xt.dispose(),Mt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Fd),Bt.removeEventListener("sessionend",kd),mr.stop()};function Pe(N){N.preventDefault(),Ms("WebGLRenderer: Context Lost."),S=!0}function ye(){Ms("WebGLRenderer: Context Restored."),S=!1;let N=tt.autoReset,q=Yt.enabled,at=Yt.autoUpdate,it=Yt.needsUpdate,rt=Yt.type;Wt(),tt.autoReset=N,Yt.enabled=q,Yt.autoUpdate=at,Yt.needsUpdate=it,Yt.type=rt}function Bn(N){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ei(N){let q=N.target;q.removeEventListener("dispose",ei),Vx(q)}function Vx(N){Gx(N),st.remove(N)}function Gx(N){let q=st.get(N).programs;q!==void 0&&(q.forEach(function(at){Mt.releaseProgram(at)}),N.isShaderMaterial&&Mt.releaseShaderCache(N))}this.renderBufferDirect=function(N,q,at,it,rt,Pt){q===null&&(q=Re);let kt=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Rt=Xx(N,q,at,it,rt);L.setMaterial(it,kt);let Ot=at.index,zt=1;if(it.wireframe===!0){if(Ot=ct.getWireframeAttribute(at),Ot===void 0)return;zt=2}let le=at.drawRange,ue=at.attributes.position,Nt=le.start*zt,ve=(le.start+le.count)*zt;Pt!==null&&(Nt=Math.max(Nt,Pt.start*zt),ve=Math.min(ve,(Pt.start+Pt.count)*zt)),Ot!==null?(Nt=Math.max(Nt,0),ve=Math.min(ve,Ot.count)):ue!=null&&(Nt=Math.max(Nt,0),ve=Math.min(ve,ue.count));let Xe=ve-Nt;if(Xe<0||Xe===1/0)return;Ct.setup(rt,it,Rt,at,Ot);let ke,Ae=St;if(Ot!==null&&(ke=vt.get(Ot),Ae=ht,Ae.setIndex(ke)),rt.isMesh)it.wireframe===!0?(L.setLineWidth(it.wireframeLinewidth*xe()),Ae.setMode(Z.LINES)):Ae.setMode(Z.TRIANGLES);else if(rt.isLine){let un=it.linewidth;un===void 0&&(un=1),L.setLineWidth(un*xe()),rt.isLineSegments?Ae.setMode(Z.LINES):rt.isLineLoop?Ae.setMode(Z.LINE_LOOP):Ae.setMode(Z.LINE_STRIP)}else rt.isPoints?Ae.setMode(Z.POINTS):rt.isSprite&&Ae.setMode(Z.TRIANGLES);if(rt.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))Ae.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{let un=rt._multiDrawStarts,Ft=rt._multiDrawCounts,xn=rt._multiDrawCount,be=Ot?vt.get(Ot).bytesPerElement:1,In=st.get(it).currentProgram.getUniforms();for(let ni=0;ni<xn;ni++)In.setValue(Z,"_gl_DrawID",ni),Ae.render(un[ni]/be,Ft[ni])}else if(rt.isInstancedMesh)Ae.renderInstances(Nt,Xe,rt.count);else if(at.isInstancedBufferGeometry){let un=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ft=Math.min(at.instanceCount,un);Ae.renderInstances(Nt,Xe,Ft)}else Ae.render(Nt,Xe)};function Ld(N,q,at,it){P!==null&&N.isNodeMaterial&&P.setObject(it,N),ft===!0&&Ht.setState(N,at,!1),N.transparent===!0&&N.side===re&&N.forceSinglePass===!1?(N.side=an,N.needsUpdate=!0,La(N,q,it),N.side=hi,N.needsUpdate=!0,La(N,q,it),N.side=re):La(N,q,it)}this.compile=function(N,q,at=null){at===null&&(at=N),P!==null&&P.renderStart(N,q,at),w=wt.get(at),w.init(q),_.push(w),at.traverseVisible(function(rt){rt.isLight&&rt.layers.test(q.layers)&&(w.pushLight(rt),rt.castShadow&&w.pushShadow(rt))}),N!==at&&N.traverseVisible(function(rt){rt.isLight&&rt.layers.test(q.layers)&&(w.pushLight(rt),rt.castShadow&&w.pushShadow(rt))}),w.setupLights(),P!==null&&P.updateLights(w.state.lightsArray),Lt=this.localClippingEnabled,ft=Ht.init(this.clippingPlanes,Lt),ft===!0&&Ht.setGlobalState(this.clippingPlanes,q),P!==null&&Yt.render(w.state.shadowsArray,at,q);let it=new Set;return N.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;let Pt=rt.material;if(Pt)if(Array.isArray(Pt))for(let kt=0;kt<Pt.length;kt++){let Rt=Pt[kt];Ld(Rt,at,q,rt),it.add(Rt)}else Ld(Pt,at,q,rt),it.add(Pt)}),w=_.pop(),P!==null&&P.renderEnd(),it},this.compileAsync=function(N,q,at=null){let it=this.compile(N,q,at);return new Promise(rt=>{function Pt(){if(it.forEach(function(kt){let Ot=st.get(kt).currentProgram;(Ot===void 0||Ot.isReady())&&it.delete(kt)}),it.size===0){rt(N);return}setTimeout(Pt,10)}ge.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let ku=null;function Hx(N){ku&&ku(N)}function Fd(){mr.stop()}function kd(){mr.start()}let mr=new t0;mr.setAnimationLoop(Hx),typeof self<"u"&&mr.setContext(self),this.setAnimationLoop=function(N){ku=N,Bt.setAnimationLoop(N),N===null?mr.stop():mr.start()},Bt.addEventListener("sessionstart",Fd),Bt.addEventListener("sessionend",kd),this.render=function(N,q){if(q!==void 0&&q.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;P!==null&&P.renderStart(N,q);let at=Bt.enabled===!0&&Bt.isPresenting===!0,it=E!==null&&(O===null||at)&&E.begin(R,O);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(q),q=Bt.getCamera()),N.isScene===!0&&N.onBeforeRender(R,N,q,O),w=wt.get(N,_.length),w.init(q),w.state.textureUnits=lt.getTextureUnits(),_.push(w),mt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ut.setFromProjectionMatrix(mt,Wn,q.reversedDepth),Lt=this.localClippingEnabled,ft=Ht.init(this.clippingPlanes,Lt),M=At.get(N,T.length),M.init(),T.push(M),Bt.enabled===!0&&Bt.isPresenting===!0){let kt=R.xr.getDepthSensingMesh();kt!==null&&Du(kt,q,-1/0,R.sortObjects)}Du(N,q,0,R.sortObjects),M.finish(),P!==null&&P.updateLights(w.state.lightsArray),R.sortObjects===!0&&M.sort(J,ot),ie=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,ie&&se.addToRenderList(M,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ft===!0&&Ht.beginShadows();let rt=w.state.shadowsArray;if(Yt.render(rt,N,q),ft===!0&&Ht.endShadows(),(it&&E.hasRenderPass())===!1){let kt=M.opaque,Rt=M.transmissive;if(w.setupLights(),q.isArrayCamera){let Ot=q.cameras;if(Rt.length>0)for(let zt=0,le=Ot.length;zt<le;zt++){let ue=Ot[zt];Od(kt,Rt,N,ue)}ie&&se.render(N);for(let zt=0,le=Ot.length;zt<le;zt++){let ue=Ot[zt];Dd(M,N,ue,ue.viewport)}}else Rt.length>0&&Od(kt,Rt,N,q),ie&&se.render(N),Dd(M,N,q)}O!==null&&I===0&&(lt.updateMultisampleRenderTarget(O),lt.updateRenderTargetMipmap(O)),it&&E.end(R),N.isScene===!0&&N.onAfterRender(R,N,q),Ct.resetDefaultState(),C=-1,B=null,_.pop(),_.length>0?(w=_[_.length-1],lt.setTextureUnits(w.state.textureUnits),ft===!0&&Ht.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?M=T[T.length-1]:M=null,P!==null&&P.renderEnd()};function Du(N,q,at,it){if(N.visible===!1)return;if(N.layers.test(q.layers)){if(N.isGroup)at=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(q);else if(N.isLightProbeGrid)w.pushLightProbeGrid(N);else if(N.isLight)w.pushLight(N),N.castShadow&&w.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(ut)){it&&he.setFromMatrixPosition(N.matrixWorld).applyMatrix4(mt);let kt=dt.update(N),Rt=N.material;Rt.visible&&M.push(N,kt,Rt,at,he.z,null,q)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(ut))){let kt=dt.update(N),Rt=N.material;if(it&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),he.copy(N.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),he.copy(kt.boundingSphere.center)),he.applyMatrix4(N.matrixWorld).applyMatrix4(mt)),Array.isArray(Rt)){let Ot=kt.groups;for(let zt=0,le=Ot.length;zt<le;zt++){let ue=Ot[zt],Nt=Rt[ue.materialIndex];Nt&&Nt.visible&&M.push(N,kt,Nt,at,he.z,ue,q)}}else Rt.visible&&M.push(N,kt,Rt,at,he.z,null,q)}}let Pt=N.children;for(let kt=0,Rt=Pt.length;kt<Rt;kt++)Du(Pt[kt],q,at,it)}function Dd(N,q,at,it){let{opaque:rt,transmissive:Pt,transparent:kt}=N;w.setupLightsView(at),ft===!0&&Ht.setGlobalState(R.clippingPlanes,at),it&&L.viewport(z.copy(it)),rt.length>0&&Ia(rt,q,at),Pt.length>0&&Ia(Pt,q,at),kt.length>0&&Ia(kt,q,at),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function Od(N,q,at,it){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[it.id]===void 0){let Nt=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[it.id]=new qe(1,1,{generateMipmaps:!0,type:Nt?Kn:wn,minFilter:tr,samples:Math.max(4,G.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:fe.workingColorSpace})}let Pt=w.state.transmissionRenderTarget[it.id],kt=it.viewport||z;Pt.setSize(kt.z*R.transmissionResolutionScale,kt.w*R.transmissionResolutionScale);let Rt=R.getRenderTarget(),Ot=R.getActiveCubeFace(),zt=R.getActiveMipmapLevel();R.setRenderTarget(Pt),R.getClearColor(Y),et=R.getClearAlpha(),et<1&&R.setClearColor(16777215,.5),R.clear(),ie&&se.render(at);let le=R.toneMapping;R.toneMapping=$n;let ue=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),w.setupLightsView(it),ft===!0&&Ht.setGlobalState(R.clippingPlanes,it),Ia(N,at,it),lt.updateMultisampleRenderTarget(Pt),lt.updateRenderTargetMipmap(Pt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let ve=0,Xe=q.length;ve<Xe;ve++){let ke=q[ve],{object:Ae,geometry:un,material:Ft,group:xn}=ke;if(Ft.side===re&&Ae.layers.test(it.layers)){let be=Ft.side;Ft.side=an,Ft.needsUpdate=!0,Nd(Ae,at,it,un,Ft,xn),Ft.side=be,Ft.needsUpdate=!0,Nt=!0}}Nt===!0&&(lt.updateMultisampleRenderTarget(Pt),lt.updateRenderTargetMipmap(Pt))}R.setRenderTarget(Rt,Ot,zt),R.setClearColor(Y,et),ue!==void 0&&(it.viewport=ue),R.toneMapping=le}function Ia(N,q,at){let it=q.isScene===!0?q.overrideMaterial:null;for(let rt=0,Pt=N.length;rt<Pt;rt++){let kt=N[rt],{object:Rt,geometry:Ot,group:zt}=kt,le=kt.material;le.allowOverride===!0&&it!==null&&(le=it),Rt.layers.test(at.layers)&&Nd(Rt,q,at,Ot,le,zt)}}function Nd(N,q,at,it,rt,Pt){P!==null&&rt.isNodeMaterial&&P.setObject(N,rt),N.onBeforeRender(R,q,at,it,rt,Pt),N.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),rt.onBeforeRender(R,q,at,it,N,Pt),rt.transparent===!0&&rt.side===re&&rt.forceSinglePass===!1?(rt.side=an,rt.needsUpdate=!0,R.renderBufferDirect(at,q,it,rt,N,Pt),rt.side=hi,rt.needsUpdate=!0,R.renderBufferDirect(at,q,it,rt,N,Pt),rt.side=re):R.renderBufferDirect(at,q,it,rt,N,Pt),N.onAfterRender(R,q,at,it,rt,Pt)}function La(N,q,at){q.isScene!==!0&&(q=Re);let it=st.get(N),rt=w.state.lights,Pt=w.state.shadowsArray,kt=rt.state.version,Rt=Mt.getParameters(N,rt.state,Pt,q,at,w.state.lightProbeGridArray),Ot=Mt.getProgramCacheKey(Rt),zt=it.programs;it.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?q.environment:null,it.fog=q.fog;let le=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;it.envMap=yt.get(N.envMap||it.environment,le),it.envMapRotation=it.environment!==null&&N.envMap===null?q.environmentRotation:N.envMapRotation,zt===void 0&&(N.addEventListener("dispose",ei),zt=new Map,it.programs=zt);let ue=zt.get(Ot);if(ue!==void 0){if(it.currentProgram===ue&&it.lightsStateVersion===kt)return Bd(N,Rt),ue}else Rt.uniforms=Mt.getUniforms(N),P!==null&&N.isNodeMaterial&&P.build(N,at,Rt),N.onBeforeCompile(Rt,R),ue=Mt.acquireProgram(Rt,Ot),zt.set(Ot,ue),it.uniforms=Rt.uniforms;let Nt=it.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Nt.clippingPlanes=Ht.uniform),Bd(N,Rt),it.needsLights=Yx(N),it.lightsStateVersion=kt,it.needsLights&&(Nt.ambientLightColor.value=rt.state.ambient,Nt.lightProbe.value=rt.state.probe,Nt.sunLights.value=rt.state.sun,Nt.sunLightShadows.value=rt.state.sunShadow,Nt.directionalLights.value=rt.state.directional,Nt.directionalLightShadows.value=rt.state.directionalShadow,Nt.spotLights.value=rt.state.spot,Nt.spotLightShadows.value=rt.state.spotShadow,Nt.rectAreaLights.value=rt.state.rectArea,Nt.ltc_1.value=rt.state.rectAreaLTC1,Nt.ltc_2.value=rt.state.rectAreaLTC2,Nt.pointLights.value=rt.state.point,Nt.pointLightShadows.value=rt.state.pointShadow,Nt.hemisphereLights.value=rt.state.hemi,Nt.sunShadowMatrix.value=rt.state.sunShadowMatrix,Nt.sunShadowCascade.value=rt.state.sunShadowCascade,Nt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,Nt.spotLightMatrix.value=rt.state.spotLightMatrix,Nt.spotLightMap.value=rt.state.spotLightMap,Nt.pointShadowMatrix.value=rt.state.pointShadowMatrix),it.lightProbeGrid=w.state.lightProbeGridArray.length>0,it.currentProgram=ue,it.uniformsList=null,ue}function Ud(N){if(N.uniformsList===null){let q=N.currentProgram.getUniforms();N.uniformsList=No.seqWithValue(q.seq,N.uniforms)}return N.uniformsList}function Bd(N,q){let at=st.get(N);at.outputColorSpace=q.outputColorSpace,at.batching=q.batching,at.batchingColor=q.batchingColor,at.instancing=q.instancing,at.instancingColor=q.instancingColor,at.instancingMorph=q.instancingMorph,at.skinning=q.skinning,at.morphTargets=q.morphTargets,at.morphNormals=q.morphNormals,at.morphColors=q.morphColors,at.morphTargetsCount=q.morphTargetsCount,at.numClippingPlanes=q.numClippingPlanes,at.numIntersection=q.numClipIntersection,at.vertexAlphas=q.vertexAlphas,at.vertexTangents=q.vertexTangents,at.toneMapping=q.toneMapping}function Wx(N,q){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;y.setFromMatrixPosition(q.matrixWorld);for(let at=0,it=N.length;at<it;at++){let rt=N[at];if(rt.texture!==null&&rt.boundingBox.containsPoint(y))return rt}return null}function Xx(N,q,at,it,rt){q.isScene!==!0&&(q=Re),lt.resetTextureUnits();let Pt=q.fog,kt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?q.environment:null,Rt=O===null?R.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:fe.workingColorSpace,Ot=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,zt=yt.get(it.envMap||kt,Ot),le=it.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ue=!!at.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Nt=!!at.morphAttributes.position,ve=!!at.morphAttributes.normal,Xe=!!at.morphAttributes.color,ke=$n;it.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ke=R.toneMapping);let Ae=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,un=Ae!==void 0?Ae.length:0,Ft=st.get(it),xn=w.state.lights;if(ft===!0&&(Lt===!0||N!==B)){let Ce=N===B&&it.id===C;Ht.setState(it,N,Ce)}let be=!1;it.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==xn.state.version||Ft.outputColorSpace!==Rt||rt.isBatchedMesh&&Ft.batching===!1||!rt.isBatchedMesh&&Ft.batching===!0||rt.isBatchedMesh&&Ft.batchingColor===!0&&rt._colorsTexture===null||rt.isBatchedMesh&&Ft.batchingColor===!1&&rt._colorsTexture!==null||rt.isInstancedMesh&&Ft.instancing===!1||!rt.isInstancedMesh&&Ft.instancing===!0||rt.isSkinnedMesh&&Ft.skinning===!1||!rt.isSkinnedMesh&&Ft.skinning===!0||rt.isInstancedMesh&&Ft.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&Ft.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&Ft.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&Ft.instancingMorph===!1&&rt.morphTexture!==null||Ft.envMap!==zt||it.fog===!0&&Ft.fog!==Pt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Ht.numPlanes||Ft.numIntersection!==Ht.numIntersection)||Ft.vertexAlphas!==le||Ft.vertexTangents!==ue||Ft.morphTargets!==Nt||Ft.morphNormals!==ve||Ft.morphColors!==Xe||Ft.toneMapping!==ke||Ft.morphTargetsCount!==un||!!Ft.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(be=!0):(be=!0,Ft.__version=it.version);let In=Ft.currentProgram;be===!0&&(In=La(it,q,rt),P&&it.isNodeMaterial&&P.onUpdateProgram(it,In,Ft));let ni=!1,Ni=!1,Zr=!1,we=In.getUniforms(),Ve=Ft.uniforms;if(L.useProgram(In.program)&&(ni=!0,Ni=!0,Zr=!0),it.id!==C&&(C=it.id,Ni=!0),Ft.needsLights){let Ce=Wx(w.state.lightProbeGridArray,rt);Ft.lightProbeGrid!==Ce&&(Ft.lightProbeGrid=Ce,Ni=!0)}if(ni||B!==N){L.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),we.setValue(Z,"projectionMatrix",N.projectionMatrix),we.setValue(Z,"viewMatrix",N.matrixWorldInverse);let Bi=we.map.cameraPosition;Bi!==void 0&&Bi.setValue(Z,$t.setFromMatrixPosition(N.matrixWorld)),G.logarithmicDepthBuffer&&we.setValue(Z,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&we.setValue(Z,"isOrthographic",N.isOrthographicCamera===!0),B!==N&&(B=N,Ni=!0,Zr=!0)}if(Ft.needsLights&&(xn.state.sunShadowMap.length>0&&we.setValue(Z,"sunShadowMap",xn.state.sunShadowMap,lt),xn.state.directionalShadowMap.length>0&&we.setValue(Z,"directionalShadowMap",xn.state.directionalShadowMap,lt),xn.state.spotShadowMap.length>0&&we.setValue(Z,"spotShadowMap",xn.state.spotShadowMap,lt),xn.state.pointShadowMap.length>0&&we.setValue(Z,"pointShadowMap",xn.state.pointShadowMap,lt)),rt.isSkinnedMesh){we.setOptional(Z,rt,"bindMatrix"),we.setOptional(Z,rt,"bindMatrixInverse");let Ce=rt.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),we.setValue(Z,"boneTexture",Ce.boneTexture,lt))}rt.isBatchedMesh&&(we.setOptional(Z,rt,"batchingTexture"),we.setValue(Z,"batchingTexture",rt._matricesTexture,lt),we.setOptional(Z,rt,"batchingIdTexture"),we.setValue(Z,"batchingIdTexture",rt._indirectTexture,lt),we.setOptional(Z,rt,"batchingColorTexture"),rt._colorsTexture!==null&&we.setValue(Z,"batchingColorTexture",rt._colorsTexture,lt));let Ui=at.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&j.update(rt,at,In),(Ni||Ft.receiveShadow!==rt.receiveShadow)&&(Ft.receiveShadow=rt.receiveShadow,we.setValue(Z,"receiveShadow",rt.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&q.environment!==null&&(Ve.envMapIntensity.value=q.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=ow()),Ni){if(we.setValue(Z,"toneMappingExposure",R.toneMappingExposure),Ft.needsLights&&$x(Ve,Zr),Pt&&it.fog===!0&&Gt.refreshFogUniforms(Ve,Pt),Gt.refreshMaterialUniforms(Ve,it,H,$,w.state.transmissionRenderTarget[N.id]),Ft.needsLights&&Ft.lightProbeGrid){let Ce=Ft.lightProbeGrid;Ve.probesSH.value=Ce.texture,Ve.probesMin.value.copy(Ce.boundingBox.min),Ve.probesMax.value.copy(Ce.boundingBox.max),Ve.probesResolution.value.copy(Ce.resolution)}No.upload(Z,Ud(Ft),Ve,lt)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(No.upload(Z,Ud(Ft),Ve,lt),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&we.setValue(Z,"center",rt.center),we.setValue(Z,"modelViewMatrix",rt.modelViewMatrix),we.setValue(Z,"normalMatrix",rt.normalMatrix),we.setValue(Z,"modelMatrix",rt.matrixWorld),it.uniformsGroups!==void 0){let Ce=it.uniformsGroups;for(let Bi=0,jr=Ce.length;Bi<jr;Bi++){let Vd=Ce[Bi];xt.update(Vd,In),xt.bind(Vd,In)}}return In}function $x(N,q){N.ambientLightColor.needsUpdate=q,N.lightProbe.needsUpdate=q,N.sunLights.needsUpdate=q,N.sunLightShadows.needsUpdate=q,N.directionalLights.needsUpdate=q,N.directionalLightShadows.needsUpdate=q,N.pointLights.needsUpdate=q,N.pointLightShadows.needsUpdate=q,N.spotLights.needsUpdate=q,N.spotLightShadows.needsUpdate=q,N.rectAreaLights.needsUpdate=q,N.hemisphereLights.needsUpdate=q}function Yx(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(N,q,at){let it=st.get(N);it.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),st.get(N.texture).__webglTexture=q,st.get(N.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:at,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,q){let at=st.get(N);at.__webglFramebuffer=q,at.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(N,q=0,at=0){O=N,A=q,I=at;let it=null,rt=!1,Pt=!1;if(N){let Rt=st.get(N);if(Rt.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(Z.FRAMEBUFFER,Rt.__webglFramebuffer),z.copy(N.viewport),W.copy(N.scissor),V=N.scissorTest,L.viewport(z),L.scissor(W),L.setScissorTest(V),C=-1;return}else if(Rt.__webglFramebuffer===void 0)lt.setupRenderTarget(N);else if(Rt.__hasExternalTextures)lt.rebindTextures(N,st.get(N.texture).__webglTexture,st.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let le=N.depthTexture;if(Rt.__boundDepthTexture!==le){if(le!==null&&st.has(le)&&(N.width!==le.image.width||N.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(N)}}let Ot=N.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Pt=!0);let zt=st.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(zt[q])?it=zt[q][at]:it=zt[q],rt=!0):N.samples>0&&lt.useMultisampledRTT(N)===!1?it=st.get(N).__webglMultisampledFramebuffer:Array.isArray(zt)?it=zt[at]:it=zt,z.copy(N.viewport),W.copy(N.scissor),V=N.scissorTest}else z.copy(Q).multiplyScalar(H).floor(),W.copy(bt).multiplyScalar(H).floor(),V=gt;if(at!==0&&(it=k),L.bindFramebuffer(Z.FRAMEBUFFER,it)&&L.drawBuffers(N,it),L.viewport(z),L.scissor(W),L.setScissorTest(V),rt){let Rt=st.get(N.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Rt.__webglTexture,at)}else if(Pt){let Rt=q;for(let Ot=0;Ot<N.textures.length;Ot++){let zt=st.get(N.textures[Ot]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Ot,zt.__webglTexture,at,Rt)}}else if(N!==null&&at!==0){let Rt=st.get(N.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Rt.__webglTexture,at)}C=-1};function zd(N){let q=st.get(N);return(q.__readFormat!==N.format||q.__readType!==N.type)&&(q.__readFormat=N.format,q.__readType=N.type,q.__formatReadable=G.textureFormatReadable(N.format),q.__typeReadable=G.textureTypeReadable(N.type)),q}this.readRenderTargetPixels=function(N,q,at,it,rt,Pt,kt,Rt=0){if(!(N&&N.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=st.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&kt!==void 0&&(Ot=Ot[kt]),Ot){L.bindFramebuffer(Z.FRAMEBUFFER,Ot);try{let zt=N.textures[Rt],le=zt.format,ue=zt.type;N.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Rt);let Nt=zd(zt);if(Nt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=N.width-it&&at>=0&&at<=N.height-rt&&Z.readPixels(q,at,it,rt,Tt.convert(le),Tt.convert(ue),Pt)}finally{let zt=O!==null?st.get(O).__webglFramebuffer:null;L.bindFramebuffer(Z.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(N,q,at,it,rt,Pt,kt,Rt=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=st.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&kt!==void 0&&(Ot=Ot[kt]),Ot)if(q>=0&&q<=N.width-it&&at>=0&&at<=N.height-rt){L.bindFramebuffer(Z.FRAMEBUFFER,Ot);let zt=N.textures[Rt],le=zt.format,ue=zt.type;N.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Rt);let Nt=zd(zt);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ve),Z.bufferData(Z.PIXEL_PACK_BUFFER,Pt.byteLength,Z.STREAM_READ),Z.readPixels(q,at,it,rt,Tt.convert(le),Tt.convert(ue),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);let Xe=O!==null?st.get(O).__webglFramebuffer:null;L.bindFramebuffer(Z.FRAMEBUFFER,Xe);let ke=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await Mm(Z,ke,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ve),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Pt),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(ve),Z.deleteSync(ke),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,q=null,at=0){let it=Math.pow(2,-at),rt=Math.floor(N.image.width*it),Pt=Math.floor(N.image.height*it),kt=q!==null?q.x:0,Rt=q!==null?q.y:0;lt.setTexture2D(N,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,at,0,0,kt,Rt,rt,Pt),L.unbindTexture()},this.copyTextureToTexture=function(N,q,at=null,it=null,rt=0,Pt=0){let kt,Rt,Ot,zt,le,ue,Nt,ve,Xe,ke=N.isCompressedTexture?N.mipmaps[Pt]:N.image;if(at!==null)kt=at.max.x-at.min.x,Rt=at.max.y-at.min.y,Ot=at.isBox3?at.max.z-at.min.z:1,zt=at.min.x,le=at.min.y,ue=at.isBox3?at.min.z:0;else{let Ve=Math.pow(2,-rt);kt=Math.floor(ke.width*Ve),Rt=Math.floor(ke.height*Ve),N.isDataArrayTexture?Ot=ke.depth:N.isData3DTexture?Ot=Math.floor(ke.depth*Ve):Ot=1,zt=0,le=0,ue=0}it!==null?(Nt=it.x,ve=it.y,Xe=it.z):(Nt=0,ve=0,Xe=0);let Ae=Tt.convert(q.format),un=Tt.convert(q.type),Ft;q.isData3DTexture?(lt.setTexture3D(q,0),Ft=Z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(lt.setTexture2DArray(q,0),Ft=Z.TEXTURE_2D_ARRAY):(lt.setTexture2D(q,0),Ft=Z.TEXTURE_2D),L.activeTexture(Z.TEXTURE0),L.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,q.flipY),L.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),L.pixelStorei(Z.UNPACK_ALIGNMENT,q.unpackAlignment);let xn=L.getParameter(Z.UNPACK_ROW_LENGTH),be=L.getParameter(Z.UNPACK_IMAGE_HEIGHT),In=L.getParameter(Z.UNPACK_SKIP_PIXELS),ni=L.getParameter(Z.UNPACK_SKIP_ROWS),Ni=L.getParameter(Z.UNPACK_SKIP_IMAGES);L.pixelStorei(Z.UNPACK_ROW_LENGTH,ke.width),L.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ke.height),L.pixelStorei(Z.UNPACK_SKIP_PIXELS,zt),L.pixelStorei(Z.UNPACK_SKIP_ROWS,le),L.pixelStorei(Z.UNPACK_SKIP_IMAGES,ue);let Zr=N.isDataArrayTexture||N.isData3DTexture,we=q.isDataArrayTexture||q.isData3DTexture;if(N.isDepthTexture){let Ve=st.get(N),Ui=st.get(q),Ce=st.get(Ve.__renderTarget),Bi=st.get(Ui.__renderTarget);L.bindFramebuffer(Z.READ_FRAMEBUFFER,Ce.__webglFramebuffer),L.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let jr=0;jr<Ot;jr++)Zr&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,st.get(N).__webglTexture,rt,ue+jr),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,st.get(q).__webglTexture,Pt,Xe+jr)),Z.blitFramebuffer(zt,le,kt,Rt,Nt,ve,kt,Rt,Z.DEPTH_BUFFER_BIT,Z.NEAREST);L.bindFramebuffer(Z.READ_FRAMEBUFFER,null),L.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(rt!==0||N.isRenderTargetTexture||st.has(N)){let Ve=st.get(N),Ui=st.get(q);L.bindFramebuffer(Z.READ_FRAMEBUFFER,D),L.bindFramebuffer(Z.DRAW_FRAMEBUFFER,U);for(let Ce=0;Ce<Ot;Ce++)Zr?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ve.__webglTexture,rt,ue+Ce):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ve.__webglTexture,rt),we?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ui.__webglTexture,Pt,Xe+Ce):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ui.__webglTexture,Pt),rt!==0?Z.blitFramebuffer(zt,le,kt,Rt,Nt,ve,kt,Rt,Z.COLOR_BUFFER_BIT,Z.NEAREST):we?Z.copyTexSubImage3D(Ft,Pt,Nt,ve,Xe+Ce,zt,le,kt,Rt):Z.copyTexSubImage2D(Ft,Pt,Nt,ve,zt,le,kt,Rt);L.bindFramebuffer(Z.READ_FRAMEBUFFER,null),L.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else we?N.isDataTexture||N.isData3DTexture?Z.texSubImage3D(Ft,Pt,Nt,ve,Xe,kt,Rt,Ot,Ae,un,ke.data):q.isCompressedArrayTexture?Z.compressedTexSubImage3D(Ft,Pt,Nt,ve,Xe,kt,Rt,Ot,Ae,ke.data):Z.texSubImage3D(Ft,Pt,Nt,ve,Xe,kt,Rt,Ot,Ae,un,ke):N.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Pt,Nt,ve,kt,Rt,Ae,un,ke.data):N.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Pt,Nt,ve,ke.width,ke.height,Ae,ke.data):Z.texSubImage2D(Z.TEXTURE_2D,Pt,Nt,ve,kt,Rt,Ae,un,ke);L.pixelStorei(Z.UNPACK_ROW_LENGTH,xn),L.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,be),L.pixelStorei(Z.UNPACK_SKIP_PIXELS,In),L.pixelStorei(Z.UNPACK_SKIP_ROWS,ni),L.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ni),Pt===0&&q.generateMipmaps&&Z.generateMipmap(Ft),L.unbindTexture()},this.initRenderTarget=function(N){st.get(N).__webglFramebuffer===void 0&&lt.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?lt.setTextureCube(N,0):N.isData3DTexture?lt.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?lt.setTexture2DArray(N,0):lt.setTexture2D(N,0),L.unbindTexture()},this.resetState=function(){A=0,I=0,O=null,L.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}};function a0(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function l0(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let o=t[r];o<=0||(i[r*3]=Math.min(1,n[0]*o),i[r*3+1]=Math.min(1,n[1]*o),i[r*3+2]=Math.min(1,n[2]*o))}}function d0(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var c0=[],Zn=new Map,u0=new Map,Sf=new Map,h0,f0="",p0=0;function ia(i){for(let t of i){let e=t.hash?c0.find(n=>n.id===t.id&&n.hash===t.hash):void 0;if(!(!e||e===t))for(let n of t.items){let r=wf(n)?void 0:Zn.get(Mf(t.id,n.id));r&&wf(r)&&sw(n,r)}}c0=i,Zn=new Map(i.flatMap(t=>t.items.map(e=>[Mf(t.id,e.id),e]))),u0=new Map(i.flatMap(t=>Object.entries(t.aliases??{}).map(([e,n])=>[e,Mf(t.id,n)])));for(let[t,e]of u0){let n=Zn.get(e);n&&!Zn.has(t)&&Zn.set(t,n)}p0++}function wf(i){return Array.isArray(i.parts)}function sw(i,t){i.parts=t.parts,t.symbol&&(i.symbol=t.symbol)}function Tf(i){if(i===h0)return;h0=i;let t=Object.entries(i??{}),e=t.map(([n,r])=>`${n}=${r.hash}`).sort().join("|");e!==f0&&(f0=e,Sf=new Map(t.map(([n,r])=>[n,r.recipe])),p0++)}var Af="pack:household.draft:item";function m0(i,t,e){let n=Zn.get(i);Zn.set(i,t);try{return e()}finally{n?Zn.set(i,n):Zn.delete(i)}}function Mf(i,t){return`pack:${i}:${t}`}function rr(i){return i.startsWith("pack:")}function Hc(i){return rr(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":/:roof_window[\w.-]*_blind$/.test(i)?"blind":null:null}function Ef(i,t){return i==="curtain"?t.color==="fabric":i==="blind"?t.color==="fabric"&&t.shape!=="cyl":t.shape!=="cyl"}function g0(i){return i==="robot_vacuum"||rr(i)&&i.endsWith(":robot_vacuum")}function ra(i){return i.z>.05}function b0(i){let t=(i?.parts??[]).filter(e=>e.shape==="cyl"&&ra(e));return t.length?t.reduce((e,n)=>n.w*n.d>e.w*e.d?n:e).z:.227}function x0(i){return ae(i)?.parts.find(t=>t.screen)}function ae(i){if(!rr(i))return;let t=Zn.get(i);return Sf.get(i)??(t&&wf(t)?t:void 0)}function aw(i){if(rr(i))return Sf.get(i)??Zn.get(i)}function tn(i,t){let e=aw(t.type);if(t.mount_y!=null)return t.mount_y;let n=M0(t,i.height);if(n!==null)return n;if(t.type==="lamp_wall")return Xc;if(y0.has(t.type))return Math.max(0,i.height-v0(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return ir(i,t)+_0(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?ir(i,t):kr(t)||ir(i,t)}}function ir(i,t){let e=i.rooms.filter(n=>n.points.length>=3);return!e.length||e.some(n=>jt([t.x,t.z],n.points))?0:Wc(i,t.x,t.z)}var Bo={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function jn(i){return i==="hedge"||i==="fence"||i==="pergola"}function Rf(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!jn(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function Yc(i){return[...i.rooms,...Rf(i)]}function cw(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",o=(c,h)=>r==="x"?c:r==="-x"?-c:r==="z"?h:-h,s=1/0,a=-1/0;for(let[c,h]of i.points){let u=o(c,h);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(t,e)-s)/(a-s)));return n*l}function uw(i,t,e,n){return Dr(i,t)+Bo[t.type]-oa(i,t,e,n)}var Pf=-.2,$c={set:!1,level:Pf};function S0(i){let t=i?.settings.terrain??null;$c={set:t?.level!=null,level:t?.level??Pf}}function zo(i,t){return $c.level}function T0(i){return i.elevation>.3?0:$c.set?$c.level-i.elevation:Pf}function Dr(i,t){return T0(i)+(t.offset??0)}function oa(i,t,e,n){return t.type==="pool"?0:cw(t,e,n)}function Wc(i,t,e){let n=(i.outdoor??[]).filter(o=>!jn(o.type)&&o.type!=="pool"&&jt([t,e],o.points)),r=[...n].reverse().find(o=>o.cut)??n[0];return r?uw(i,r,t,e):T0(i)}function qc(i,t){return Dr(i,t)+(t.above?E0(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function hw(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?E0(i):1.5}function Cf(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!jn(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>jt(n,e.points)))}function A0(i,t){return!t.above&&!Cf(i,t)?Kc(i,t)-.05:qc(i,t)-hw(t)}function Kc(i,t){return qc(i,t)-.15}function E0(i){return i.height&&i.height>.3?i.height:1.2}var fw={type:"none",pitch:35,overhang:.4},nC={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...fw}};var R0=.3;var P0=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Xc=1.75;var y0=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function v0(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var C0=new Set(["stairs","stairs_u"]),I0=3,dw=.18;function L0(i){let t=Math.max(3,Math.round(i.h/dw)),e=i.d>i.w+.3,n=e&&(i.stair_landing??0)>0?Math.min(i.stair_landing??0,t-1):0,r=!n&&i.stair_turn&&e?I0:0;return{n:t,fits:e,flat:n,winders:r,skip:n||r}}function F0(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,o=r-1,s=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),h=(t-c)/o;return{n,k:r,steps1:o,steps2:s,gap:a,fw:l,landing:c,run:h,rise:e/n}}function k0(i){return P0.has(i)||!!ae(i)?.light}var pw=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function kr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return i.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var w0=.04,mw=1.2;function _0(i,t,e,n=0){let r=0;for(let o of i.furniture)!(pw.has(o.type)||ae(o.type)?.surface)||!jt([t,e],sr(o))||o.type==="worktop"&&n>0&&o.h-w0>=mw&&n<=o.h-w0-.02||(r=Math.max(r,o.h));return r}var Zc=new Set(["wall_switch","wall_socket"]),gw=4;function D0(i){let t=(i.gangs??[]).slice(0,gw);return t.length?t:[{entity:null}]}function M0(i,t){return i.type==="wifi_ap"?i.variant==="wall"?2.1:Math.max(0,t-i.h):i.type==="water_heater"?i.variant==="wall"?1.1:0:null}var lw=new Set([...P0,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var bw=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],xw=["standard","bars","glass_wall"],yw=["sectional","up_and_over"];function pi(i,t){return i.type==="garage"?i.style&&yw.includes(i.style)?i.style:"sectional":i.type==="door"?i.style&&bw.includes(i.style)?i.style:t?"front":"interior":i.style&&xw.includes(i.style)?i.style:"standard"}function O0(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",o=i-.04,s=Math.min(1.05,Math.max(.6,o-(r?.6:.3))),a=(o-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let h=o-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function N0(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Pn(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[o,s]=i[(e+1)%i.length];t+=n*s-o*r}return t/2}function Jn(i){return Math.abs(Pn(i))}function or(i){let t=Pn(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;e+=(o+a)*c,n+=(s+l)*c}return[e/(6*t),n/(6*t)]}function U0(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,o]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function B0(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[o,s]of i)t=Math.min(t,o),e=Math.min(e,s),n=Math.max(n,o),r=Math.max(r,s);return{x0:t,z0:e,x1:n,z1:r}}function sr(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*e-a*n,i.z+s*n+a*e])}function jt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[o,s]=t[n],[a,l]=t[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(e=!e)}return e}function Lf(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],o=n*n+r*r,s=o>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/o)):0;return i.h0+(i.h1-i.h0)*s}var ze=(i,t)=>[i[0]-t[0],i[1]-t[1]],mi=(i,t)=>[i[0]+t[0],i[1]+t[1]],On=(i,t)=>[i[0]*t,i[1]*t],Nr=(i,t)=>i[0]*t[0]+i[1]*t[1],Or=(i,t)=>i[0]*t[1]-i[1]*t[0],sa=i=>Math.hypot(i[0],i[1]),Cn=i=>{let t=sa(i)||1;return[i[0]/t,i[1]/t]},If=i=>[-i[1],i[0]],z0=i=>[i[1],-i[0]];function gi(i,t,e=[]){let n=t.eps??.005,r=[],o=e.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),s=[],a=S=>{for(let P=0;P<s.length;P++)if(Math.abs(s[P][0]-S[0])<=n&&Math.abs(s[P][1]-S[1])<=n)return P;return s.push([S[0],S[1]]),s.length-1},l=[];for(let S of i){let P=S.points;if(P.length<3||Math.abs(Pn(P))<1e-6)continue;let k=Pn(P)>0,D=P.map(a);for(let U=0;U<P.length;U++){let A=D[U],I=D[(U+1)%P.length];A!==I&&l.push(k?{u:A,v:I,room:S.id,edge:U,forward:!0}:{u:I,v:A,room:S.id,edge:U,forward:!1})}}let c=o.map(S=>[a(S.a),a(S.b)]),h=new Set;for(let S of i){let P=S.points;P.length<3||(S.wall_splits??[]).forEach((k,D)=>{if(!k||D>=P.length)return;let U=P[D],A=ze(P[(D+1)%P.length],U),I=sa(A);for(let O of k)O>n&&O<I-n&&h.add(a(mi(U,On(A,O/I))))})}let u=[];for(let S of l){let P=s[S.u],k=s[S.v],D=ze(k,P),U=sa(D),A=On(D,1/U),I=[];for(let C=0;C<s.length;C++){if(C===S.u||C===S.v)continue;let B=ze(s[C],P),z=Nr(B,A);z<=n||z>=U-n||Math.abs(Or(A,B))<=n&&I.push({t:z,id:C})}I.sort((C,B)=>C.t-B.t);let O=[{t:0,id:S.u},...I,{t:U,id:S.v}];for(let C=0;C+1<O.length;C++){let B=O[C],z=O[C+1],W=S.forward?B.t:U-z.t,V=S.forward?z.t:U-B.t;u.push({u:B.id,v:z.id,room:S.room,edge:S.edge,t0:W,t1:V})}}let f=new Map;for(let S of u){let P=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,k=f.get(P);k||f.set(P,k=[]),k.push(S)}let d=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),p=new Map;for(let S of u){let P=`${S.room}:${S.edge}`;p.set(P,[...p.get(P)??[],S.t0].sort((k,D)=>k-D))}let g=S=>{let P=i.find(D=>D.id===S.room)?.wall_heights?.[S.edge];if(!Array.isArray(P))return P;let k=p.get(`${S.room}:${S.edge}`)??[];return P[k.indexOf(S.t0)]??null},b=S=>{let P=S.map(g).filter(D=>typeof D=="number"&&D>0);if(P.length)return Math.min(...P);let k=S.map(D=>i.find(U=>U.id===D.room)?.ceiling_height);return k.every(D=>typeof D=="number"&&D>0)?Math.max(...k):void 0},m=S=>{let P=S.map(k=>i.find(D=>D.id===k.room)?.wall_thickness?.[k.edge]).filter(k=>typeof k=="number"&&k>0);return P.length?Math.max(...P):void 0},x=S=>{for(let P of S){let k=i.find(I=>I.id===P.room),D=k?.wall_slopes?.[P.edge];if(!k||!D)continue;let U=k.points[P.edge],A=k.points[(P.edge+1)%k.points.length];return{p:[U[0],U[1]],q:[A[0],A[1]],h0:Math.max(.05,D[0]),h1:Math.max(.05,D[1])}}},v=S=>S.some(P=>g(P)===0),y=S=>{let P=x(S);return P?{height:Math.max(P.h0,P.h1),slope:P}:{height:b(S)}},M=[],w=[];for(let S of f.values()){let P=S[0],k=S.find(D=>D!==P&&D.u===P.v&&D.v===P.u&&D.room!==P.room);for(let D of S)D!==P&&D!==k&&D.room!==P.room&&r.push(`overlap:${P.room}:${D.room}`);if(v(k?[P,k]:[P])){k&&M.push([P.room,k.room]);continue}if(k){let D=m([P,k])??t.interior;w.push({a:P.u,b:P.v,left:D/2,right:D/2,exterior:!1,roomLeft:P.room,roomRight:k.room,sources:[d(P),d(k)],...y([P,k])})}else w.push({a:P.u,b:P.v,left:0,right:m([P])??t.exterior,exterior:!0,roomLeft:P.room,roomRight:null,sources:[d(P)],...y([P])})}let T=S=>Cn(ze(s[S.b],s[S.a])),_=new Set;for(let S of w){if(S.exterior||S.free)continue;let P=new Set;for(let D of[S.a,S.b])for(let U of w)!U.exterior||U.free||U.a!==D&&U.b!==D||Math.abs(Or(T(S),T(U)))>1e-6||(U.roomLeft===S.roomLeft?P.add("left"):U.roomLeft===S.roomRight&&P.add("right"));if(P.size!==1)continue;let k=S.left+S.right;P.has("left")?(S.left=0,S.right=k):(S.left=k,S.right=0),_.add(S)}for(let S of[..._]){let P=[S];for(;P.length;){let k=P.pop();for(let D of[k.a,k.b])for(let U of w){if(U===k||U.exterior||U.free||_.has(U)||U.a!==D&&U.b!==D||Math.abs(Or(T(k),T(U)))>1e-6)continue;let A=U.left+U.right,I=k.right===0==Nr(T(k),T(U))>0;U.left=I?A:0,U.right=I?0:A,_.add(U),P.push(U)}}}o.forEach((S,P)=>{let[k,D]=c[P];if(k===D)return;let U=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],A=i.find(C=>C.points.length>=3&&jt(U,C.points))?.id??null,I=(S.thickness??t.interior)/2,O=typeof S.height=="number"&&S.height>0?S.height:void 0;w.push({free:S.id,a:k,b:D,left:I,right:I,exterior:!1,roomLeft:A,roomRight:A,sources:[],height:O})}),w=_w(w,s,h);let E=ww(w,s);return{walls:w.map((S,P)=>{let k=s[S.a],D=s[S.b],U=E.get(`${P}:a`),A=E.get(`${P}:b`),I=Sw([U.right,A.left,D,A.right,U.left,k],1e-6);return{id:vw(k,D),a:[k[0],k[1]],b:[D[0],D[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:I,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{},...S.slope?{slope:S.slope}:{}}}),warnings:[...new Set(r)],open:M}}function vw(i,t){let e=o=>Math.round(o*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function V0(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function _w(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[s,a]of o){if(a.length!==2||e.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=V0(l)),c.a!==s&&(c=V0(c)),l.a===c.b)continue;let h=Cn(ze(t[l.b],t[l.a])),u=Cn(ze(t[c.b],t[c.a]));if(Math.abs(Or(h,u))>1e-6||Nr(h,u)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:Mw(l.sources,c.sources)},d=n.filter((p,g)=>g!==a[0]&&g!==a[1]);d.push(f),n.length=0,n.push(...d),r=!0;break}}return n}function Mw(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function ww(i,t){let e=new Map;i.forEach((r,o)=>{let s=Cn(ze(t[r.b],t[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:On(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(c)}});let n=new Map;for(let[r,o]of e){let s=t[r];o.sort((c,h)=>c.angle-h.angle);let a=c=>({left:mi(s,On(If(c.d),c.left)),right:mi(s,On(z0(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let h=o[c],u=o[(c+1)%o.length],f=mi(s,On(If(h.d),h.left)),d=mi(s,On(z0(u.d),u.right)),p=Or(h.d,u.d);if(Math.abs(p)<1e-4)continue;let g=Or(ze(d,f),u.d)/p,b=mi(f,On(h.d,g));sa(ze(b,s))>l||(n.get(h.key).left=b,n.get(u.key).right=b)}}return n}function Sw(i,t){let e=i.filter((r,o)=>sa(ze(r,i[(o+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let o=e[(r+e.length-1)%e.length],s=e[r],a=e[(r+1)%e.length],l=ze(s,o),c=ze(a,s);if(Math.abs(Or(Cn(l),Cn(c)))<1e-7&&Nr(l,c)>0){e=e.filter((h,u)=>u!==r),n=!0;break}}}return e}function Ff(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],o=Cn(ze(r,n));return mi(n,On(o,e))}function G0(i,t){let e=ze(i.b,i.a),n=If(Cn(e)),r=a=>t.some(l=>l.points.length>=3&&jt(a,l.points)),o=0,s=0;for(let a of[.2,.5,.8]){let l=mi(i.a,On(e,a));r(mi(l,On(n,i.left+.2)))&&o++,r(ze(l,On(n,i.right+.2)))&&s++}return o>=2&&s===0?!0:s>=2&&o===0?!1:null}function Vo(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=Cn(ze(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,mi(r.a,[-o[1],o[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Go(i,t,e){if(!t.wall)return Tw(i,e.room,e.edge,t.offset);let n=i.find(o=>o.free===t.wall);if(!n)return null;let r=Ff(e.room,0,t.offset);return{wall:n,s:Nr(ze(r,n.a),Cn(ze(n.b,n.a)))}}function kf(i,t,e){if(t.free)return null;let n=e?t.b:t.a,r=Cn(ze(t.b,t.a)),o=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,s=null;for(let a of i)if(!(a===t||!(o(a.a)||o(a.b)))){if(s||a.exterior!==t.exterior||a.free||!o(e?a.a:a.b)||Nr(Cn(ze(a.b,a.a)),r)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;s=a}return s}function Tw(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=Ff(t,e,n);return{wall:r,s:Nr(ze(s,r.a),Cn(ze(r.b,r.a)))}}return null}function jc(i,t,e,n){let r=t.rotation*Math.PI/180,o=[-Math.sin(r),Math.cos(r)],s=Math.max(.005,t.d),a=null;for(let c of i){let h=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(h<.05)continue;let u=[(c.b[0]-c.a[0])/h,(c.b[1]-c.a[1])/h],f=(t.x-c.a[0])*u[0]+(t.z-c.a[1])*u[1];if(f<-.02||f>h+.02)continue;let d=[-u[1],u[0]],p=(t.x-c.a[0])*d[0]+(t.z-c.a[1])*d[1],g=o[0]*d[0]+o[1]*d[1]>=0?1:-1;if(Math.abs(o[0]*d[0]+o[1]*d[1])<.5)continue;let b=g>0?c.left:-c.right,m=p>-c.right-1e-4&&p<c.left+1e-4,x=Math.abs(p-(b+g*(s/2)));if(!m&&x>.03||a&&x>=a.off)continue;let v=c.a[0]+u[0]*f,y=c.a[1]+u[1]*f,M=m?b+g*(s/2):p,w=c.slope?Lf(c.slope,t.x,t.z):Math.min(e,c.height??e);a={x:v+d[0]*M,z:y+d[1]*M,top:w,off:x}}if(!a)return{x:t.x,z:t.z,y:n};let l=t.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-t.h-.02)):n;return{x:a.x,z:a.z,y:l}}var ar=Math.PI/180;function Ur(i){let t=i.rotation??0;if(!t||i.points&&i.points.length>=3)return null;let e=t*ar;return{p:i.pivot??[(i.x0+i.x1)/2,(i.z0+i.z1)/2],c:Math.cos(e),s:Math.sin(e)}}function Qc(i,t,e=!1){if(!i)return t;let n=t[0]-i.p[0],r=t[1]-i.p[1],o=e?-i.s:i.s;return[i.p[0]+n*i.c-r*o,i.p[1]+n*o+r*i.c]}function cn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1),o=Ur(i),s=i.axis==="x"?(l,c)=>[l,i.flip?r-c:n+c]:(l,c)=>[i.flip?e-c:t+c,l],a=o?(l,c)=>Qc(o,s(l,c)):s;return i.axis==="x"?{u0:t,u1:e,w:r-n,at:a}:{u0:n,u1:r,w:e-t,at:a}}function Of(i,t,e,n=1e-6){let[r,o]=xi(i,t,e),s=cn({...i,rotation:0});return r>=s.u0-n&&r<=s.u1+n&&o>=-n&&o<=s.w+n}function ln(i){let t=cn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ar),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ar);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=q0(t,e,n,r,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+o>1e-6?Math.min(t,Math.max(0,(n-e+t*o)/(r+o))):t/2,a=e+s*r;return{vr:s,rh:a,y:l=>l<=s?e+l*r:n+(t-l)*o}}function Nf(i){let t=i.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var Uf=.14;function W0(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function Bf(i,t){return ln(i).rh-Uf>t+.01}function X0(i,t,e,n){let r=null,o=Math.max(0,i.settings.roof.overhang??0);for(let s of Nf(i)){if(s.open||n!==void 0&&!Bf(s,n)||!Of(s,t,e)||s.points&&s.points.length>=3&&!jt([t,e],s.points))continue;let[a,l]=xi(s,t,e),c=s.shape==="flat"||s.shape==="parapet",h=Math.max(0,s.overhang??o),f=((c?null:ca(zr(s,{u0:h,u1:h,a:h,b:h}),a,l))??ln(s).y(l))-Uf;r=r===null?f:Math.max(r,f)}return r}function tu(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(o=>[o[0],o[1]]);let n=Jn(i)>=0?1:-1,r=[];for(let o=0;o<e;o++){let s=i[(o+e-1)%e],a=i[o],l=i[(o+1)%e],c=H0([a[0]-s[0],a[1]-s[1]]),h=H0([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],p=u[1]+f[1],g=Math.hypot(d,p);if(g<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let b=(d*u[0]+p*u[1])/g,m=Math.min(4,1/Math.max(.25,b));r.push([a[0]+d/g*t*m,a[1]+p/g*t*m])}return r}function H0(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function $0(i,t){if(i.points&&i.points.length>=3)return tu(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,o=Math.max(i.z0,i.z1)+t,s=Ur(i);return[[e,r],[n,r],[n,o],[e,o]].map(a=>Qc(s,a))}function Y0(i,t,e,n){let r=gi(i,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let o=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,s=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let f of[u.a,u.b])s.set(o(f),[...s.get(o(f))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let f=[u.a,u.b],d=u.b;for(;;){let p=(s.get(o(d))??[]).find(g=>!l.has(g));if(!p||(l.add(p),d=o(p.a)===o(d)?p.b:p.a,o(d)===o(f[0])))break;f.push(d)}f.length>=3&&o(d)===o(f[0])&&(!c||Math.abs(Jn(f))>Math.abs(Jn(c)))&&(c=f)}if(!c)return null;let h=[];for(let u=0;u<c.length;u++){let f=c[(u+c.length-1)%c.length],d=c[u],p=c[(u+1)%c.length],g=(d[0]-f[0])*(p[1]-d[1])-(d[1]-f[1])*(p[0]-d[0]);Math.abs(g)>1e-6&&h.push(d)}return h.length>=3?tu(h,e):null}var aa=Math.tan(30*ar);function q0(i,t,e,n,r){let o=Math.min(i*.3,n>1e-6?2.4/n:i*.3),s=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+o*n,l=e+s*r,c=Math.min(i-s,Math.max(o,(l-a+aa*(i-s+o))/(2*aa))),h=a+(c-o)*aa;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=o?t+f*n:f<=c?a+(f-o)*aa:f<=i-s?l+(i-s-f)*aa:e+(i-f)*r}}function zr(i,t){let e=cn(i),n=ln(i),r=e.w,o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(O,C)=>[O,C,n.y(C)],h=c(a,-o),u=c(l,-o),f=c(l,r+s),d=c(a,r+s),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ar),g=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ar);if(i.shape==="pent"){let O=[h,u,f,d],C=[[0,n.y(0)],[r,n.y(r)]];return{faces:[O],rim:O,ridges:[[f,d]],gable:C,gables:[C,C]}}if(i.shape==="pyramid"){let O=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[h,u,O],[u,f,O],[f,d,O],[d,h,O]],rim:[h,u,f,d],ridges:[[h,O],[d,O],[u,O],[f,O]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let O=q0(r,i.eave_a,i.eave_b,p,g),C=[[0,n.y(0)],[O.vla,O.yla],[O.vr,O.rh],[r-O.vlb,O.ylb],[r,n.y(r)]],B=[a,O.vla,O.yla],z=[l,O.vla,O.yla],W=[a,r-O.vlb,O.ylb],V=[l,r-O.vlb,O.ylb],Y=[a,O.vr,O.rh],et=[l,O.vr,O.rh];return{faces:[[h,u,z,B],[B,z,et,Y],[Y,et,V,W],[W,V,f,d]],rim:[h,u,z,et,V,f,d,W,Y,B],ridges:[[Y,et],[B,z],[W,V]],gable:C,gables:[C,C]}}let[b,m]=eu(i)??["gable","gable"],x=zf(i,[b,m]),v=b==="gable"?[a,n.vr,n.rh]:[e.u0+x.d0,n.vr,n.rh],y=m==="gable"?[l,n.vr,n.rh]:[e.u1-x.d1,n.vr,n.rh],M=[a,x.vah,x.yh],w=[a,x.vbh,x.yh],T=[l,x.vah,x.yh],_=[l,x.vbh,x.yh],E=b==="halfhip",R=m==="halfhip",S=[[h,u,...R?[T]:[],y,v,...E?[M]:[]],[v,y,...R?[_]:[],f,d,...E?[w]:[]]];b==="hip"&&S.push([d,h,v]),E&&S.push([w,M,v]),m==="hip"&&S.push([u,f,y]),R&&S.push([T,_,y]);let P=[h,u,...m==="gable"?[y]:R?[T,_]:[],f,d,...b==="gable"?[v]:E?[w,M]:[]],k=[[v,y]];b==="hip"&&k.push([h,v],[d,v]),E&&k.push([M,v],[w,v]),m==="hip"&&k.push([u,y],[f,y]),R&&k.push([T,y],[_,y]);let D=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],U=[[0,n.y(0)],[x.vah,x.yh],[x.vbh,x.yh],[r,n.y(r)]],A=O=>O==="gable"?D:O==="halfhip"?U:null,I=[A(b),A(m)];return{faces:S,rim:P,ridges:k,gable:I[0]??I[1],gables:I}}function eu(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let t=i.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(i.end_u0),e(i.end_u1)]}function zf(i,t){let e=cn(i),n=ln(i),r=e.w,o=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ar),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ar),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),h=c+(n.rh-c)*.55,u=o>1e-6?Math.min(n.vr,(h-i.eave_a)/o):n.vr,f=s>1e-6?Math.max(n.vr,r-(h-i.eave_b)/s):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),p=Math.min(l-.1,(n.rh-h)/Math.max(.2,o)),g=b=>b==="hip"?d:b==="halfhip"?p:0;return{d0:g(t[0]),d1:g(t[1]),yh:h,vah:u,vbh:f}}function ca(i,t,e){let n=null;for(let r of i.faces){if(!jt([t,e],r.map(x=>[x[0],x[1]])))continue;let[o,s]=r,a=r.slice(2).find(x=>Math.abs((s[0]-o[0])*(x[1]-o[1])-(s[1]-o[1])*(x[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],c=s[2]-o[2],h=s[1]-o[1],u=a[0]-o[0],f=a[2]-o[2],d=a[1]-o[1],p=c*d-h*f,g=h*u-l*d,b=l*f-c*u;if(Math.abs(g)<1e-9)continue;let m=o[2]-(p*(t-o[0])+b*(e-o[1]))/g;n=n===null?m:Math.min(n,m)}return n}function xi(i,t,e){let[n,r]=Qc(Ur(i),[t,e],!0),o=Math.min(i.x0,i.x1),s=Math.max(i.x0,i.x1),a=Math.min(i.z0,i.z1),l=Math.max(i.z0,i.z1);return i.axis==="x"?[n,i.flip?l-r:r-a]:[r,i.flip?s-n:n-o]}function Df(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Br(i,t){let[e,n]=Qc(Ur(t),[(t.x0+t.x1)/2,(t.z0+t.z1)/2]),r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i)s===t||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(t)*1.5||Of(s,e,n)&&(!o||r(s)<r(o))&&(o=s);return o}function Vf(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=cn(t),n=ln(t).rh,r=zr(i,{u0:0,u1:0,a:0,b:0}),o=ln(i),s=g=>{let[b,m]=e.at(g,e.w/2),[x,v]=xi(i,b,m);return ca(r,x,v)??o.y(v)},a=s(e.u0)<=s(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let g=.5;g<u;g+=.05)if(s(l+h*g)>=n-.02){f=l+h*g;break}if(Math.abs(f-c)<.05)return t;let d=Ur(t),p={...t,...d?{pivot:d.p}:{}};return t.axis==="x"?c===e.u1?p.x1=f:p.x0=f:c===e.u1?p.z1=f:p.z0=f,p}function K0(i,t){let e=Vf(i,t),n=cn(e),r=ln(e),o=zr(i,{u0:0,u1:0,a:0,b:0}),s=ln(i),a=f=>{let[d,p]=n.at(f,n.w/2),[g,b]=xi(i,d,p);return ca(o,g,b)??s.y(b)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,p=c*(f+1)/u,g=l?n.u0+d:n.u1-d,b=l?n.u0+p:n.u1-p,m=a(b),x=1/0,v=-1/0;for(let _=0;_<=40;_++){let E=n.w*_/40;r.y(E)>m+.02&&(x=Math.min(x,E),v=Math.max(v,E))}if(!(v-x>.05))continue;let y=n.at(g,x),M=n.at(b,v),w=xi(i,y[0],y[1]),T=xi(i,M[0],M[1]);h.push({u0:Math.min(w[0],T[0]),u1:Math.max(w[0],T[0]),v0:Math.min(w[1],T[1]),v1:Math.max(w[1],T[1])})}return h}function bi(i,t,e,n){let r=s=>n?s[t]<=e+1e-9:s[t]>=e-1e-9,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c&&o.push(a),c!==h){let u=(e-a[t])/(l[t]-a[t]);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function Gf(i,t){let e=bi(i,0,t.u0,!0),n=bi(i,0,t.u1,!1),r=bi(bi(i,0,t.u0,!1),0,t.u1,!0),o=bi(r,1,t.v0,!0),s=bi(r,1,t.v1,!1);return[e,n,o,s].filter(a=>a.length>=3&&Math.abs(Jn(a.map(l=>[l[0],l[1]])))>1e-6)}function nu(i,t,e){let n=cn(t),r=i.floors.flatMap(c=>c.rooms.filter(h=>h.points.length>=3&&c.elevation+c.height>t.base+.05)),o=c=>c.some(h=>r.some(u=>jt(h,u.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(a.map(c=>n.at(c,-s)))?0:e,b:o(a.map(c=>n.at(c,n.w+s)))?0:e,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:e,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:e}}function Z0(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function Aw(i){return ln(i).rh}function j0(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>Br(n,l)??l);if(!r.length)return t.id;let o=Math.max(...r.map(l=>Aw(l))),s=l=>l.rooms.some(c=>c.points.length>=3&&r.some(h=>{let[u,f]=c.points.reduce((d,p)=>[d[0]+p[0]/c.points.length,d[1]+p[1]/c.points.length],[0,0]);return Of(h,u,f)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<o-.3&&s(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function Jc(i,[t,e,n]){let r=s=>t*s[0]+e*s[1]+n,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c>=-1e-9&&o.push(a),c>=-1e-9!=h>=-1e-9){let u=c/(c-h);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function la(i){let t=i[0];if(!t)return null;let e=t;for(let d of i)Math.hypot(d[0]-t[0],d[1]-t[1])>Math.hypot(e[0]-t[0],e[1]-t[1])&&(e=d);let n=e[0]-t[0],r=e[1]-t[1],o=t,s=0;for(let d of i){let p=n*(d[1]-t[1])-r*(d[0]-t[0]);Math.abs(p)>Math.abs(s)&&(s=p,o=d)}if(Math.abs(s)<1e-9)return null;let a=o[0]-t[0],l=o[1]-t[1],c=e[2]-t[2],h=o[2]-t[2],u=(c*l-h*r)/s,f=(n*h-a*c)/s;return[u,f,t[2]-u*t[0]-f*t[1]]}var Ho=i=>Math.abs(Jn(i.map(t=>[t[0],t[1]])));function iu(i){let t=Pn(i.map(n=>[n[0],n[1]]))>=0?1:-1,e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=Math.hypot(o[0]-r[0],o[1]-r[1]);if(s<1e-7)continue;let a=-(o[1]-r[1])*t/s,l=(o[0]-r[0])*t/s;e.push([a,l,-(a*r[0]+l*r[1])])}return e}function Ew(i,t){let e=la(i),n=la(t.poly);if(!e||!n||Ho(t.poly)<1e-6)return null;let r=[...iu(t.poly),[n[0]-e[0],n[1]-e[1],n[2]-e[2]-.01]];return Number.isFinite(t.depth)&&r.push([e[0]-n[0],e[1]-n[1],e[2]-n[2]+t.depth]),r}function J0(i,t){let e=[i];for(let n of t){let r=[];for(let o of e){let s=Ew(o,n),a=s?o:[];for(let c of s??[])a=Jc(a,c);if(a.length<3||Ho(a)<1e-6){r.push(o);continue}let l=o;for(let[c,h,u]of iu(a)){let f=Jc(l,[-c,-h,-u]);if(f.length>=3&&Ho(f)>1e-6&&r.push(f),l=Jc(l,[c,h,u]),l.length<3)break}}e=r}return e}function Hf(i,t,e){let n=[[0,1]],r=o=>[i[0]+(t[0]-i[0])*o,i[1]+(t[1]-i[1])*o,i[2]+(t[2]-i[2])*o];for(let o of e){let s=la(o.poly);if(!s||Ho(o.poly)<1e-6)continue;let a=iu(o.poly).map(([d,p,g])=>[d*i[0]+p*i[1]+g,d*(t[0]-i[0])+p*(t[1]-i[1])]),l=d=>s[0]*d[0]+s[1]*d[1]+s[2]-d[2],c=l(i),h=l(t)-c;a.push([c-.01,h]),Number.isFinite(o.depth)&&a.push([o.depth-c,-h]);let u=0,f=1;for(let[d,p]of a){if(Math.abs(p)<1e-12){d<-1e-9&&(f=-1);continue}let g=-d/p;p>0?u=Math.max(u,g):f=Math.min(f,g)}f-u<1e-6||(n=n.flatMap(([d,p])=>[[d,Math.min(p,u)],[Math.max(d,f),p]]).filter(([d,p])=>p-d>1e-6))}return n.map(([o,s])=>[r(o),r(s)])}function Q0(i,t){let e=la(i),n=la(t);if(!e||!n||Ho(t)<1e-6)return null;let r=[...i];for(let c of iu(t))r=Jc(r,c);if(r.length<3)return null;let o=c=>(n[0]-e[0])*c[0]+(n[1]-e[1])*c[1]+(n[2]-e[2]),s=[];for(let c=0;c<r.length;c++){let h=r[c],u=r[(c+1)%r.length],f=o(h),d=o(u);if(f<0!=d<0){let p=f/(f-d);s.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p,h[2]+(u[2]-h[2])*p])}}if(s.length<2)return null;let a=s[0],l=s[s.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function tg(i,t){let e=cn(i),n=o=>o.map(([s,a,l])=>{let[c,h]=e.at(s,a);return[c,h,l]}),r=[];for(let o of t){let s=bi(bi(bi(bi(o,0,e.u0,!1),0,e.u1,!0),1,0,!1),1,e.w,!0);s.length>=3&&Ho(s)>1e-6&&r.push({poly:n(s),depth:1/0});for(let a of Gf(o,{u0:e.u0,u1:e.u1,v0:0,v1:e.w}))r.push({poly:n(a),depth:Uf})}return r}function Wf(i,t){return t.map(e=>({poly:e.poly.map(([n,r,o])=>[...xi(i,n,r),o]),depth:e.depth}))}function eg(i,t,e){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return t===e||!n(t)||!n(e)?!1:Br(i,t)!==e&&Br(i,e)!==t}function ng(i,t){if(t.dormer||t.open||!eu(t)||Ur(t)||Br(i,t))return null;let e=cn(t),n=ln(t).rh,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===t||s.dormer||s.open||Ur(s)||s.axis===t.axis||s.shape==="flat"||s.shape==="parapet"||s.shape==="pent")continue;let a=ln(s).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(s)>r(t)||r(s)===r(t)&&i.indexOf(s)<i.indexOf(t))))continue;let c=Df(s),[h,u]=t.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[f,d]=t.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],p=Df(t),[g,b]=t.axis==="x"?[p.z0,p.z1]:[p.x0,p.x1];if(g<f-.05||b>d+.05)continue;let m=ig(t,s),x=null;e.u0<h-.05&&e.u1>=h-.05&&e.u1<=m+.05?x=1:e.u1>u+.05&&e.u0<=u+.05&&e.u0>=m-.05&&(x=0),x!==null&&(!o||r(s)>r(o.host))&&(o={host:s,end:x})}return o}function ig(i,t){let e=cn(t),n=e.at(e.u0,ln(t).vr);return i.axis==="x"?n[0]:n[1]}function rg(i,t){let e=ig(i,t.host),n={...i,...t.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=Df(i);return i.axis==="x"?(n.x0=t.end===0?Math.min(r.x0,e):r.x0,n.x1=t.end===1?Math.max(r.x1,e):r.x1):(n.z0=t.end===0?Math.min(r.z0,e):r.z0,n.z1=t.end===1?Math.max(r.z1,e):r.z1),n}function Xf(i,t){return t.rooms.some(e=>e.points.length>=3)?Y0(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function $f(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=Xf(i,t);return!!e&&e.some(([n,r])=>zo(n,r)-t.elevation>-.15)}function og(i,t,e,n,r){return!e||!$f(i,t)?!1:n<Math.min(t.height,zo(r[0],r[1])-t.elevation)-.05}function Wo(i,t){let e=Pn(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let o=t[r],s=t[(r+1)%t.length],a=c=>e*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let h=l[c],u=l[(c+1)%l.length],f=a(h),d=a(u);if(f>=0&&n.push(h),f>=0!=d>=0){let p=f/(f-d);n.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p])}}}return n}function sg(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],o=i[(e+2)%i.length],s=(r[0]-n[0])*(o[1]-r[1])-(r[1]-n[1])*(o[0]-r[0]);if(!(Math.abs(s)<1e-9)){if(t&&Math.sign(s)!==t)return!1;t=Math.sign(s)}}return!0}var Qn=1e-4;function Yf(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function ag(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],o=[n[0]-e[0],n[1]-e[1]],s=r[0]*o[1]-r[1]*o[0];if(Math.abs(s)<1e-12)return null;let a=((e[0]-i[0])*o[1]-(e[1]-i[1])*o[0])/s,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/s;return a>Qn&&a<1-Qn&&l>-Qn&&l<1+Qn?a:null}function qf(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r;if(o<1e-12)return null;let s=((i[0]-t[0])*n+(i[1]-t[1])*r)/o;return s<=Qn||s>=1-Qn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(o)<Qn?s:null}function Rw(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let o=0;o<t.length;o++){let s=t[o],a=t[(o+1)%t.length];if(ag(n,r,s,a)!==null||qf(s,n,r)!==null||qf(n,s,a)!==null||Math.hypot(n[0]-s[0],n[1]-s[1])<Qn)return!0}}return jt(i[0],t)||jt(t[0],i)}function Pw(i){let t=i.map(o=>Yf(o)>=0?o:[...o].reverse()),e=[];t.forEach((o,s)=>{for(let a=0;a<o.length;a++){let l=o[a],c=o[(a+1)%o.length],h=[0,1];t.forEach((u,f)=>{if(f!==s)for(let d=0;d<u.length;d++){let p=u[d],g=u[(d+1)%u.length],b=ag(l,c,p,g)??qf(p,l,c);b!==null&&h.push(b)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<Qn)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],p=Math.hypot(d[0]-f[0],d[1]-f[1]),g=[(f[0]+d[0])/2+(d[1]-f[1])/p*.001,(f[1]+d[1])/2-(d[0]-f[0])/p*.001];t.some((b,m)=>m!==s&&jt(g,b))||e.some(([b,m])=>Math.hypot(b[0]-f[0],b[1]-f[1])<Qn&&Math.hypot(m[0]-d[0],m[1]-d[1])<Qn)||e.push([f,d])}}});let n=[],r=new Set;for(let o=0;o<e.length;o++){if(r.has(o))continue;r.add(o);let s=[e[o][0]],a=e[o][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-s[0][0],a[1]-s[0][1])<.001);l++){let c=e.findIndex(([h],u)=>!r.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;r.add(c),s.push(e[c][0]),a=e[c][1]}s.length>=3&&Yf(s)>1e-6&&n.push(s)}return n}function lg(i){let t=i.filter(o=>o.length>=3),e=t.map((o,s)=>s),n=o=>e[o]===o?o:e[o]=n(e[o]);for(let o=0;o<t.length;o++)for(let s=o+1;s<t.length;s++)n(o)!==n(s)&&Rw(t[o],t[s])&&(e[n(s)]=n(o));let r=new Map;return t.forEach((o,s)=>r.set(n(s),[...r.get(n(s))??[],o])),[...r.values()].flatMap(o=>o.length===1?o:Pw(o))}function Cw(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r,s=o?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o)):0;return Math.hypot(i[0]-t[0]-n*s,i[1]-t[1]-r*s)}function cg(i,t,e=.03){return i.every(n=>jt(n,t)||t.some((r,o)=>Cw(n,r,t[(o+1)%t.length])<=e))}function ug(i,t){let e=Yf(i)>=0?i:[...i].reverse(),n=(r,o)=>{let s=Math.hypot(o[0]-r[0],o[1]-r[1])||1;return[-(o[1]-r[1])/s,(o[0]-r[0])/s]};return e.map((r,o)=>{let s=n(e[(o-1+e.length)%e.length],r),a=n(r,e[(o+1)%e.length]),l=1+s[0]*a[0]+s[1]*a[1];return l<.1?r:[r[0]+(s[0]+a[0])/l*t,r[1]+(s[1]+a[1])/l*t]})}function Zf(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var Xo=(i,t)=>!!i.fix&&i.fix.includes(t);function Kf(i,t,e,n){let r=new Map,o=i.filter(c=>Xo(c,t)).map(c=>({p:c,e:Zf(c,t,e)})),s=Math.min(.05,.1*e);for(let{p:c,e:h}of o)t!=="h"&&Math.abs((h[0]+h[1])/2-e/2)<1e-6&&r.set(c,"mid");let a=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of o)r.has(h)||u[0]>a+(a===0?s:.001)||t==="h"&&u[1]>=e-.01&&u[0]>.01||(r.set(h,"lo"),a=Math.max(a,u[1]),c=!0)}let l=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of o)r.has(h)||e-u[1]>l+(l>0?.001:t==="h"?.01:s)||(r.set(h,"hi"),l=Math.max(l,e-u[0]),c=!0)}for(let{p:c}of o)r.has(c)||r.set(c,"free");return a+l>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0,side:r}:{s0:e,s:n,lo:a,hi:l,side:r}}function Vr(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function hg(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!ru(n))return[Vr(t,n),Vr(e,n)];let r=n.side.get(i)??"lo",o=e-t;if(r==="mid")return[n.s/2-o/2,n.s/2+o/2];if(r==="free"){let s=Vr((t+e)/2,n);return[s-o/2,s+o/2]}return r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function ru(i){return i.lo>0||i.hi>0}function ua(i,t,e,n){let[r,o,s]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-o)<.001&&Math.abs(n-s)<.001)return i.parts;let a={w:Kf(i.parts,"w",r,t),d:Kf(i.parts,"d",o,e),h:Kf(i.parts,"h",s,n)},l={w:!ru(a.w)&&i.parts.some(c=>Xo(c,"w")),d:!ru(a.d)&&i.parts.some(c=>Xo(c,"d")),h:!ru(a.h)&&i.parts.some(c=>Xo(c,"h"))};return i.parts.map(c=>{let h=x=>{let v=a[x],[y,M]=Zf(c,x,v.s0);return Xo(c,x)&&!l[x]?hg(c,y,M,v):[Vr(y,v),Vr(M,v)]},[u,f]=h("w"),[d,p]=h("d"),[g,b]=h("h"),m={...c,x:(u+f)/2/t-.5,w:(f-u)/t,z:(d+p)/2/e-.5,d:(p-d)/e,y:g/n,h:(b-g)/n};if(c.shape==="loft"){let x=(T,_,E,R,S)=>{let P=a[T],k=_??R,D=E??S,U=(k-D/2+.5)*P.s0,A=(k+D/2+.5)*P.s0;if(!Xo(c,T)||l[T])return[Vr(U,P),Vr(A,P)];let[I,O]=Zf(c,T,P.s0),[C]=hg(c,I,O,P),B=C-I;return[U+B,A+B]},[v,y]=x("w",c.tx,c.tw,c.x,c.w),[M,w]=x("d",c.tz,c.td,c.z,c.d);m.tx=(v+y)/2/t-.5,m.tw=(y-v)/t,m.tz=(M+w)/2/e-.5,m.td=(w-M)/e}return m})}var ha=["body","fabric","cushion","wood","white","metal","dark","glass","plant","pot","accent"];var Iw=/^#[0-9a-f]{6}$/i;function jf(i,t){let e=i?.[t];return typeof e=="string"&&Iw.test(e)?e:null}var fg=["matt","gloss","fabric","glass","metal","rattan"],Lw={fabric:"fabric",cushion:"fabric",metal:"metal",glass:"glass",white:"gloss"},Fw=i=>typeof i=="string"&&fg.includes(i);function dg(i,t){let e=i?.[t];return Fw(e)?e:kw(t)}function kw(i){return Lw[i]??"matt"}function pg(i){return fg.indexOf(i)}var Dw=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var Ow=["wall","pole","pillar","parcel","bank"];function gg(i){return Dw.includes(i.variant??"")?i.variant:"bin240"}function bg(i){return Ow.includes(i.variant??"")?i.variant:"wall"}var He=["#3a3f47","#3a3f47"],Gr=["#23262b","#23262b"],ti=["#5a3b25","#5a3b25"],Ne=["#1f4fa8","#1f4fa8"],lr=["#e3b616","#e3b616"],de=["#2f7d3b","#2f7d3b"],mg={default:{rest:He,bio:ti,paper:Ne,plastic:lr,glass:de,garden:de,recycling:lr,other:He},DE:{rest:Gr,bio:ti,paper:Ne,plastic:lr,glass:de,garden:de,recycling:lr},AT:{rest:He,bio:ti,paper:[He[0],"#c0262d"],plastic:lr,glass:de,garden:de},CH:{rest:["#d8d8d8","#d8d8d8"],bio:de,paper:Ne,plastic:He,glass:de,garden:de},NL:{rest:He,bio:de,paper:Ne,plastic:["#3a3f47","#e57a1f"],glass:de,garden:de},BE:{rest:He,bio:de,paper:Ne,plastic:Ne,glass:de,garden:de},GB:{rest:Gr,bio:["#3a3f47","#5a3b25"],paper:Ne,plastic:Ne,glass:Gr,garden:ti,recycling:Ne},US:{rest:Gr,bio:de,paper:Ne,plastic:Ne,glass:Ne,garden:de,recycling:Ne},CA:{rest:Gr,bio:de,paper:Ne,plastic:Ne,glass:Ne,garden:de,recycling:Ne},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:He,bio:ti,paper:[He[0],"#e3b616"],plastic:[He[0],"#e3b616"],recycling:[He[0],"#e3b616"],glass:de,garden:de},IT:{rest:He,bio:ti,paper:Ne,plastic:lr,glass:de,garden:de},ES:{rest:He,bio:ti,paper:Ne,plastic:lr,glass:de,garden:de},PT:{rest:He,bio:ti,paper:Ne,plastic:lr,glass:de,garden:de},DK:{rest:Gr,bio:de,paper:Ne,plastic:He,glass:de,garden:de},SE:{rest:Gr,bio:ti,paper:Ne,plastic:He,glass:de,garden:de},NO:{rest:He,bio:ti,paper:Ne,plastic:He,glass:de,garden:de},FI:{rest:He,bio:ti,paper:Ne,plastic:He,glass:de,garden:de}},xg="DE";function yg(){return xg}function Nw(i,t){return mg[t]?.[i]??mg.default[i]??He}function vg(i,t=xg){let e=Nw(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var cr=Ut(3662079,.95),Jf=Ut(3662079,1),Ii=Ut(5995775,.34),_g=Ut(5995775,.22),$o=[-.55,.83],te=-1,ou=16,ur=32,Mg=48,Yo=64,Jt=class{p=[];c=[];f=[];uv;tile;m=null;materialOf=null;mat=0;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}useMaterials(t){let e=this.materialOf;return this.materialOf=t,this.mat=0,e}paint(t,e=t){let n=this.materialOf?this.materialOf(t)??this.materialOf(e)??0:0;this.mat=n,n&&!this.m&&(this.m=new Array(this.p.length/3).fill(0))}tri(t,e,n,r,o=r,s=r,a,l=te,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,o.r,o.g,o.b,s.r,s.g,s.b),this.f.push(l,l,l),this.m&&this.m.push(this.mat,this.mat,this.mat),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Vt;return t.setAttribute("position",new It(this.p,3)),t.setAttribute("color",new It(this.c,3)),t.setAttribute("fold",new It(this.f,1)),this.uv&&t.setAttribute("uv",new It(this.uv,2)),this.tile&&t.setAttribute("tile",new It(this.tile,2)),this.m&&t.setAttribute("fp3dMat",new It(this.m,1)),t.computeBoundingSphere(),t}},Le=class{p=[];c=[];f=[];seg(t,e,n=cr,r=te){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,o){let[s,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||o<0)return this.seg(s,a,n,te);if(s[1]>=r-1e-6)return this.seg(s,a,n,o);let l=(r-s[1])/(a[1]-s[1]),c=[s[0]+(a[0]-s[0])*l,r,s[2]+(a[2]-s[2])*l];this.seg(s,c,n,te),this.seg(c,a,n,o)}geometry(){let t=new Vt;return t.setAttribute("position",new It(this.p,3)),t.setAttribute("color",new It(this.c,3)),t.setAttribute("fold",new It(this.f,1)),t}};function Qf(i,t,e,n){let o=i.uv?2:0,s=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null,m:i.m?i.m[d]:0}},a=(u,f,d)=>({p:u.p.map((p,g)=>p+(f.p[g]-p)*d),c:u.c.map((p,g)=>p+(f.c[g]-p)*d),uv:u.uv&&f.uv?u.uv.map((p,g)=>p+(f.uv[g]-p)*d):null,tile:u.tile,m:u.m}),l=(u,f,d)=>{for(let p=0;p<3;p++){let g=u*3+p;for(let b=0;b<3;b++)i.p[g*3+b]=f[p].p[b],i.c[g*3+b]=f[p].c[b];if(i.uv&&f[p].uv)for(let b=0;b<o;b++)i.uv[g*2+b]=f[p].uv[b];if(i.tile&&f[p].tile)for(let b=0;b<2;b++)i.tile[g*2+b]=f[p].tile[b];i.f[g]=d}},c=(u,f)=>{let d=i.p.length/9;for(let p of u)i.p.push(...p.p),i.c.push(...p.c),i.f.push(f),i.uv&&i.uv.push(...p.uv??[.5,.5]),i.tile&&i.tile.push(...p.tile??[0,1]),i.m&&i.m.push(p.m);return d},h=i.p.length/9;for(let u=t;u<h;u++){let f=[s(u,0),s(u,1),s(u,2)],d=f.map(_=>_.p[1]>e+1e-6),p=f.map(_=>_.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let _=0;_<3;_++)i.f[u*3+_]=n;continue}let g=i.f[u*3],b=(_,E)=>a(_,E,(e-_.p[1])/(E.p[1]-_.p[1])),m=d.filter(Boolean).length,x=m===1?d.indexOf(!0):d.indexOf(!1),v=f[x],y=f[(x+1)%3],M=f[(x+2)%3],w=b(v,y),T=b(M,v);m===1?(l(u,[v,w,T],n),c([w,y,M],g),c([w,M,T],g)):(l(u,[v,w,T],g),c([w,y,M],n),c([w,M,T],n))}}function td(i,t,e,n){let r=i.p.length/6;for(let o=t;o<r;o++){let s=i.p.slice(o*6,o*6+3),a=i.p.slice(o*6+3,o*6+6),[l,c]=s[1]<=a[1]?[s,a]:[a,s];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[o*2]=n,i.f[o*2+1]=n;continue}let h=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,e,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[o*6+d]=l[d],i.p[o*6+3+d]=u[d];let f=i.c.slice(o*6,o*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var Qt=Math.PI/180;function Ut(i,t){let e=new K(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function Uw(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function bn(i,t=[]){let e=i.map(([n,r])=>new Zt(n,r));return Fs.triangulateShape(e,t.map(n=>n.map(([r,o])=>new Zt(r,o))))}function wg(i,t,e,n,r,o,s){let a=new K(s),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=t[d],g=t[(d+1)%4],b=e[d],m=e[(d+1)%4],x=g[0]-p[0],v=g[1]-p[1],y=Math.hypot(x,v);if(y<1e-6)continue;let w=.8+.28*((v/y*$o[0]-x/y*$o[1]+1)/2),T=(b[0]+m[0]-p[0]-g[0])/2*(-v/y)+(b[1]+m[1]-p[1]-g[1])/2*(x/y),_=Math.max(0,Math.min(1,T/Math.max(1e-6,Math.hypot(T,r-n)))),E=Ut(o,l(n)*w).lerp(a,_),R=Ut(o,l(r)*w).lerp(a,_);i.paint(_>.5?s:o,o),i.tri([p[0],n,p[1]],[b[0],r,b[1]],[m[0],r,m[1]],E,R,R),i.tri([p[0],n,p[1]],[m[0],r,m[1]],[g[0],n,g[1]],E,R,E)}let[c,h,u,f]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.paint(s,o),i.tri([c[0],r,c[1]],[u[0],r,u[1]],[h[0],r,h[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a))}function Sg(i,t,e,n,r,o,s,a,l,c){let h=new K(l),u=[];for(let b=0;b<c;b++){let m=b/c*Math.PI*2;u.push({y:o+Math.cos(m)*s,s:r+Math.sin(m)*s})}let f=(b,m)=>{let x=t(b,u[m%c].s);return[x[0],u[m%c].y,x[1]]},d=t(e,r),p=t(n,r),g=(b,m,x,v,y)=>{let M=(m[1]-b[1])*(x[2]-b[2])-(m[2]-b[2])*(x[1]-b[1]),w=(m[2]-b[2])*(x[0]-b[0])-(m[0]-b[0])*(x[2]-b[2]),T=(m[0]-b[0])*(x[1]-b[1])-(m[1]-b[1])*(x[0]-b[0]);M*v[0]+w*v[1]+T*v[2]<0?i.tri(b,x,m,y):i.tri(b,m,x,y)};i.paint(a);for(let b=0;b<c;b++){let m=(b+.5)/c*Math.PI*2,x=Ut(a,.62+.4*Math.max(0,Math.cos(m))),v=t((e+n)/2,r+Math.sin(m)*s),y=t((e+n)/2,r),M=[v[0]-y[0],Math.cos(m)*s,v[1]-y[1]];g(f(e,b),f(n,b+1),f(n,b),M,x),g(f(e,b),f(e,b+1),f(n,b+1),M,x)}for(let[b,m,x]of[[e,p,d],[n,d,p]]){i.paint(l,a);let v=t(b,r),y=[v[0],o,v[1]],M=[x[0]-m[0],0,x[1]-m[1]];for(let w=0;w<c;w++)g(y,f(b,w),f(b,w+1),M,h)}}function Fe(i,t,e,n,r,o,s={}){let a=typeof n=="number"?()=>n:p=>Math.max(e+.002,n(p[0],p[1])),l=s.aoFrom??e,c=s.fold??te,h=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),u=(s.holes??[]).map(p=>Uw(p)>0?[...p].reverse():p),f=u.length?[...t,...u.flat()]:t,d=s.topFace===!1&&!s.bottom?[]:bn(t,u);if(s.topFace!==!1){i.paint(o,r);let p=new K(o);for(let[g,b,m]of d){let x=f[g],v=f[b],y=f[m];i.tri([x[0],a(x),x[1]],[y[0],a(y),y[1]],[v[0],a(v),v[1]],p,p,p,void 0,s.topFold??c)}}if(i.paint(r),s.bottom){let p=Ut(r,.55);for(let[g,b,m]of d){let x=f[g],v=f[b],y=f[m];i.tri([x[0],e,x[1]],[v[0],e,v[1]],[y[0],e,y[1]],p,p,p,void 0,c)}}for(let p of[t,...u])for(let g=0;g<p.length;g++){let b=p[g],m=p[(g+1)%p.length],x=m[0]-b[0],v=m[1]-b[1],y=Math.hypot(x,v);if(y<1e-6||s.skipSide?.(b,m))continue;let w=.8+.28*((v/y*$o[0]-x/y*$o[1]+1)/2),T=a(b),_=a(m),E=Ut(r,h(e)*w),R=Ut(r,h(T)*w),S=Ut(r,h(_)*w);i.tri([b[0],e,b[1]],[b[0],T,b[1]],[m[0],_,m[1]],E,R,S,void 0,c),i.tri([b[0],e,b[1]],[m[0],_,m[1]],[m[0],e,m[1]],E,S,E,void 0,c)}}function Tg(i,t,e,n){if(t.length<2)return;let r=new K(n),o=c=>.5+.5*Math.min(1,Math.max(0,c/1.6)),s=(c,h,u)=>{let f=h[0]-c[0],d=h[1]-c[1],p=h[2]-c[2],g=u[0]-c[0],b=u[1]-c[1],m=u[2]-c[2],x=d*m-p*b,v=p*g-f*m,y=f*b-d*g,M=Math.hypot(x,v,y);if(M<1e-10)return;let w=Math.hypot(x,y),_=.8+.28*(w>1e-9?(x/w*$o[0]+y/w*$o[1]+1)/2:.5),E=v/M,R=S=>{let P=Ut(e,o(S)*_*(E<0?1+.45*E:1));return E>0?P.lerp(r,E):P};i.paint(E>.5?n:e,e),i.tri(c,h,u,R(c[1]),R(h[1]),R(u[1]))},a=(c,h)=>{let u=c.pts[h%c.pts.length];return[u[0],c.y,u[1]]};for(let c=0;c+1<t.length;c++){let h=t[c],u=t[c+1];for(let f=0;f<h.pts.length;f++)s(a(h,f),a(u,f),a(u,f+1)),s(a(h,f),a(u,f+1),a(h,f+1))}let l=(c,h)=>{let u=c.pts.length,f=c.pts.reduce((g,b)=>g+b[0],0)/u,d=c.pts.reduce((g,b)=>g+b[1],0)/u;if(c.pts.every(g=>Math.hypot(g[0]-f,g[1]-d)<1e-6))return;let p=[f,c.y,d];for(let g=0;g<u;g++)h?s(p,a(c,g+1),a(c,g)):s(p,a(c,g),a(c,g+1))};l(t[0],!1),l(t[t.length-1],!0)}function Ag(i,t){return Math.max(i,t)<.05?8:12}function Eg(i,t,e,n,r,o){let s=[];for(let a=0;a<o;a++){let l=a/o*Math.PI*2;s.push([i+Math.cos(l)*e,t+Math.sin(l)*n])}return{pts:s,y:r}}function Rg(i,t,e,n,r,o){let s=Ag(e,n),a=s===8?4:6,l=(r+o)/2,c=(o-r)/2,h=[];for(let u=0;u<=a;u++){let f=-Math.PI/2+u/a*Math.PI,d=u===0||u===a?0:Math.cos(f);h.push(Eg(i,t,e*d,n*d,l+Math.sin(f)*c,s))}return h}function Pg(i,t,e,n,r,o,s){let a=s.map(([u,f])=>[Math.min(1,Math.max(0,u)),Math.min(1,Math.max(0,f))]),l=0,c=[[0,a[0][1]],...a,[0,a[a.length-1][1]]];for(let u=0;u<c.length;u++){let f=c[u],d=c[(u+1)%c.length];l+=f[0]*d[1]-d[0]*f[1]}l<0&&a.reverse();let h=Ag(e,n);return a.map(([u,f])=>Eg(i,t,e*u,n*u,r+f*(o-r),h))}function Cg(i,t,e,n,r,o,s){s=Math.max(0,Math.min(s,(t-i)/2,(n-e)/2,(o-r)/2));let a=i+s,l=t-s,c=e+s,h=n-s,u=(d,p)=>{let g=[],b=[[l,c,-90],[l,h,0],[a,h,90],[a,c,180]];for(let[m,x,v]of b)for(let y=0;y<=3;y++){let M=(v+y*30)*Math.PI/180;g.push([m+Math.cos(M)*d,x+Math.sin(M)*d])}return{pts:g,y:p}},f=[];for(let d of[0,45,90]){let p=d*Math.PI/180;f.push(u(s*Math.sin(p),r+s-s*Math.cos(p)))}for(let d of[90,45,0]){let p=d*Math.PI/180;f.push(u(s*Math.sin(p),o-s+s*Math.cos(p)))}return f}var fa={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},F=fa,pt=Ut(5995775,.3),Dt=Ut(5995775,.17),ee=Ut(3662079,.45),yi=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=ed(n)}rotated(t,e,n){let r=n*Qt,o=Math.cos(r),s=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*o-(c-e)*s,e+(l-t)*s+(c-e)*o))}moved(t,e){let n=this.tf;return new i(this.buf,this.lines,(r,o)=>n(r+t,o+e))}box(t,e,n,r,o,s,a,l=a,c=null){if(e-t<1e-4||s-o<1e-4||r-n<1e-4)return;let h=[this.tf(t,o),this.tf(t,s),this.tf(e,s),this.tf(e,o)];Fe(this.buf,su(h),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,r,c)}prism(t,e,n,r,o=r,s=null){if(t.length<3||n-e<1e-4)return;let a=t.map(([l,c])=>this.tf(l,c));if(Fe(this.buf,su(a),e,n,r,o,{aoFrom:0,bottom:e>.05}),s)for(let l=0;l<a.length;l++)this.line(a[l],a[(l+1)%a.length],n,n,s)}loft(t,e,n,r,o,s=o,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==su(l)&&(l.reverse(),c.reverse()),wg(this.buf,l,c,n,r,o,s),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],r,r,a),this.line(l[h],c[h],n,r,a)}pad(t,e,n,r,o,s,a,l=a,c=.03,h=null){if(c=Math.min(c,(e-t)/2-.005,(s-o)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,o,s,a,l,h);this.loft([t+c,e-c,o+c,s-c],[t,e,o,s],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,o,s,a,a,h),this.loft([t,e,o,s],[t+c,e-c,o+c,s-c],r-c,r,a,l)}lyingCyl(t,e,n,r,o,s,a,l,c=l,h=12,u=null){let f=Math.min(a,o-r)/2;if(f<1e-4||s<1e-4)return;let d=(r+o)/2,p=t==="x"?e:n,g=t==="x"?n:e,b=(m,x)=>t==="x"?this.tf(m,x):this.tf(x,m);if(Sg(this.buf,b,p-s/2,p+s/2,g,d,f,l,c,h),u)for(let m of[p-s/2,p+s/2])for(let x=0;x<h;x++){let v=x/h*Math.PI*2,y=(x+1)/h*Math.PI*2;this.line(b(m,g+Math.sin(v)*f),b(m,g+Math.sin(y)*f),d+Math.cos(v)*f,d+Math.cos(y)*f,u)}}rings(t,e,n=e,r=null){let o=t.map(s=>{let a=s.pts.map(([l,c])=>this.tf(l,c));return{pts:this.mirrored?a.reverse():a,y:s.y}});if(Tg(this.buf,o,e,n),r){let s=l=>Math.max(...l.pts.map(([c,h])=>Math.hypot(c-l.pts[0][0],h-l.pts[0][1]))),a=o.reduce((l,c)=>s(c)>s(l)+1e-9?c:l,o[0]);for(let l=0;l<a.pts.length;l++)this.line(a.pts[l],a.pts[(l+1)%a.pts.length],a.y,a.y,r)}}cyl(t,e,n,r,o,s,a=s,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Fe(this.buf,su(h),r,o,s,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],o,o,c)}seg(t,e,n,r,o,s,a=pt){this.line(this.tf(t,n),this.tf(r,s),e,o,a)}line(t,e,n,r,o){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],o,te)}outline(t,e,n,r){for(let o=0;o<4;o++){let s=t[o],a=t[(o+1)%4];this.line(s,a,n,n,r),this.line(s,s,e,n,r)}}};function ed(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function su(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function Wr(i,t,e,n,r,o,s=F.metal,a=!1){let l=t/2-o-r,c=e/2-o-r;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,s):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,s)}}function da(i,t,e,n,r,o,s,a=null,l=!1){let c=(e-t)/s;for(let h=1;h<s;h++){let u=t+c*h;i.seg(u,n,o,u,r,o,Dt)}for(let h=0;h<s;h++){let u=t+c*(h+.5),f=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),f,o+.012,u+Math.min(.1,c/4),f,o+.012,ee);else{let d=s>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,o+.012,d,f+.08,o+.012,ee)}}}function Ig(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),h=n*.5,u=Math.min(.24,e*.28);Wr(i,t,e,.07,.05,.05,F.wood,!0),i.pad(o,s,.07,h-.08,a+.02,l,F.fabric,F.fabricTop,.04,pt),i.loft([o,s,a,a+u],[o+.01,s-.01,a,a+u*.5],h-.08,n,F.fabric,F.fabricTop,pt),i.pad(o,o+c,h-.08,n*.72,a+.02,l-.02,F.fabric,F.fabricTop,.04,pt),i.pad(s-c,s,h-.08,n*.72,a+.02,l-.02,F.fabric,F.fabricTop,.04,pt);let d=(s-c-(o+c))/r;for(let p=0;p<r;p++){let g=o+c+d*p+.02,b=g+d-.04;i.pad(g,b,h-.08,h+.05,a+u+.02,l-.06,F.cushion,F.cushion,.04),i.loft([g+.01,b-.01,a+u*.55,a+u+.14],[g+.03,b-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,F.cushion)}}function Lg(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),h=Math.min(.24,c*.28),u=Math.min(.2,c*.24),f=n*.5,d=n*.72,p=r?[-1,1]:[-1],g=(_,E)=>i.loft([_-.015,_+.015,E-.015,E+.015],[_-.025,_+.025,E-.025,E+.025],0,.07,F.wood);g(o+.06,a+.06),g(s-.06,a+.06),r||g(s-.06,a+c-.06);for(let _ of p)g(_*(t/2-.06),l-.06),g(_*(t/2-c+.06),l-.06);i.pad(o,s,.07,f-.08,a+.02,a+c,F.fabric,F.fabricTop,.04,pt);for(let _ of p){let[E,R]=_<0?[o+.02,o+c]:[s-c,s-.02];i.pad(E,R,.07,f-.08,a+c-.02,l,F.fabric,F.fabricTop,.04,pt)}i.loft([o,s,a,a+h],[o+.01,s-.01,a,a+h*.5],f-.08,n,F.fabric,F.fabricTop,pt);for(let _ of p)_<0?i.loft([o,o+h,a+h,l],[o,o+h*.5,a+h,l-.01],f-.08,n,F.fabric,F.fabricTop,pt):i.loft([s-h,s,a+h,l],[s-h*.5,s,a+h,l-.01],f-.08,n,F.fabric,F.fabricTop,pt);for(let _ of p){let[E,R]=_<0?[o+h,o+c]:[s-c,s-h];i.pad(E,R,f-.08,d,l-u,l,F.fabric,F.fabricTop,.04,pt)}r||i.pad(s-u,s,f-.08,d,a+.02,a+c-.02,F.fabric,F.fabricTop,.04,pt);let b=o+h,m=r?s-h:s-u,x=Math.max(1,Math.round((m-b)/.62)),v=(m-b)/x;for(let _=0;_<x;_++){let E=b+v*_+.02,R=E+v-.04;i.pad(E,R,f-.08,f+.05,a+h+.02,a+c-.04,F.cushion,F.cushion,.04),i.loft([E+.01,R-.01,a+h*.55,a+h+.14],[E+.03,R-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,F.cushion)}let y=a+c,M=l-u;if(M-y<.2)return;let w=Math.max(1,Math.round((M-y)/.62)),T=(M-y)/w;for(let _ of p)for(let E=0;E<w;E++){let R=y+T*E+.02,S=R+T-.04;_<0?(i.pad(o+h+.02,o+c-.04,f-.08,f+.05,R,S,F.cushion,F.cushion,.04),i.loft([o+h*.55,o+h+.14,R+.01,S-.01],[o+h*.4,o+h*.4+.06,R+.03,S-.03],f+.03,n*.93,F.cushion)):(i.pad(s-c+.04,s-h-.02,f-.08,f+.05,R,S,F.cushion,F.cushion,.04),i.loft([s-h-.14,s-h*.55,R+.01,S-.01],[s-h*.4-.06,s-h*.4,R+.03,S-.03],f+.03,n*.93,F.cushion))}}function Bw(i,t,e,n){let r=-e/2,o=e/2,s=-t/2,a=t/2,l=Math.min(.32,n*.36);Wr(i,t,e,.08,.06,.03,F.wood,!0),i.box(s,a,.08,l,r+.06,o,F.wood,F.woodTop,pt),i.pad(s+.03,a-.03,l,l+.2,r+.08,o-.03,F.white,F.whiteTop,.03),i.box(s,a,.08,n-.05,r,r+.07,F.wood,F.woodTop,pt),i.box(s,a,n-.05,n,r,r+.09,F.wood,F.woodTop,Dt);let c=l+.2,h=r+(e-.1)*.36;i.pad(s+.01,a-.01,c-.1,c+.05,h,o-.01,F.cushion,F.fabricTop,.025,Dt),i.lyingCyl("x",0,h+.05,c-.02,c+.09,t-.02,.1,F.cushion,F.fabricTop,8);let u=t>1.2?2:1,f=(t-.2)/u;for(let d=0;d<u;d++){let p=s+.1+f*d,g=r+.12,b=Math.min(.42,e*.2),m=.1;i.loft([p+.03+m,p+f-.03-m,g+m*.5,g+b-m*.5],[p+.03,p+f-.03,g,g+b],c,c+.06,F.whiteTop),i.loft([p+.03,p+f-.03,g,g+b],[p+.03+m,p+f-.03-m,g+m*.5,g+b-m*.5],c+.06,c+.12,F.whiteTop,F.whiteTop,Dt)}}function zw(i,t,e,n){let r=Math.min(.46,n*.52);Wr(i,t,e,r-.04,.035,.02,F.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,F.wood,F.woodTop,pt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,F.cushion,F.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,F.wood,F.woodTop,pt)}function Vw(i,t,e,n){Wr(i,t,e,n-.04,.06,.05,F.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.wood,F.woodTop,ee),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,F.body)}function Gw(i,t,e,n){let r=-t/2,o=t/2;i.box(r,o,n-.035,n,-e/2,e/2,F.wood,F.woodTop,pt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,F.metal);let s=Math.min(.42,t*.32);i.box(o-s,o,0,n-.035,-e/2+.03,e/2-.02,F.body,F.bodyTop,pt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(o-s,l,a,o,l,a,Dt);for(let l of[n*.2,n*.5,n*.82])i.seg(o-s/2-.07,l,a+.012,o-s/2+.07,l,a+.012,ee);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,F.dark,F.dark,ee),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,F.metal)}function hr(i,t,e,n,r,o=null,s=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,F.body,F.bodyTop,pt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,F.dark),da(i,-t/2,t/2,.08,n,e/2-.02,r,o,s)}function Hw(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,F.wood,F.woodTop,pt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,F.wood,F.woodTop,pt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,F.body);let o=Math.max(2,Math.round(n/.38));for(let s=0;s<=o;s++){let a=Math.min(n-.025,n/o*s);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,F.wood,F.woodTop,Dt),s<o){let l=-t/2+.025+.04,c=s*3;for(;l<t/2-.025-.12;){let h=.03+c*7%5*.008,u=n/o-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?F.fabric:F.cushion,F.fabricTop),l+=h+.006,c++}}}}function Ww(i,t,e,n){let r=Math.max(1,Math.round(t/.6));hr(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.whiteTop,F.whiteTop,pt)}function Xw(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,F.white,F.whiteTop,pt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Dt);let o=t/2-.06;i.seg(o,r+.08,e/2+.015,o,r+.4,e/2+.015,ee),i.seg(o,r-.4,e/2+.015,o,r-.08,e/2+.015,ee)}var qo=(i,t)=>Ut(parseInt(i.slice(1),16),t).getHex();function au(i){let t=Math.max(...new K(i).toArray());return qo(i,t>.05?Math.max(1,.62/t):1)}var Hr=!1;function Ng(i){Hr=i}function $w(i){let t=null;for(let e of ha){let n=jf(i,e);if(!n)continue;t??={...fa},t[e]=Hr?au(n):qo(n,.55);let r=`${e}Top`;r in t&&(t[r]=Hr?au(n):qo(n,.75))}return t??fa}function jo(i,t,e){let n=F;F=$w(t.colors);let r=i.useMaterials(Yw(F,t.materials));try{return e()}finally{F=n,i.useMaterials(r)}}function Yw(i,t){let e=new Map,n=(r,o)=>{r!==void 0&&!e.has(r)&&e.set(r,o)};for(let r of ha){let o=pg(dg(t,r));n(i[r],o),n(i[`${r}Top`],o)}return r=>e.get(r)}function Ug(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let o=.62/n;i[e]*=o,i[e+1]*=o,i[e+2]*=o}}function qw(i,t,e,n,r,o){let s=Hr?au(o[0]):qo(o[0],.55),a=Hr?au(o[1]):qo(o[1],.8),l=qo(o[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,s,s,Dt),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,a,a,Dt),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,l,l,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,s,s,pt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,a,l,Dt),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,a),i.box(t*.36,t*.42,n*.95,n,-.01,.01,a),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,a);return}if(r==="underground"){let u=Math.min(t,e)*.32;i.cyl(0,0,u,0,n*.9,s,s,16,pt),i.cyl(0,0,u*1.08,n*.9,n,a,l,16,Dt),i.box(-u*.5,u*.5,n*.62,n*.8,u*.7,u*1.02,F.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,F.metal,F.metal,Dt);return}if(r==="bin1100"){for(let f of[-1,1])for(let d of[-1,1])i.cyl(f*(t/2-.12),d*(e/2-.12),.05,0,.14,F.dark,F.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,s,s,pt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,a,l,Dt),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,a,l,Dt);return}let c=Math.min(.2,n*.19),h=-e/2;for(let u of[-1,1])i.lyingCyl("x",u*(t/2-.05),h+c/2+.01,0,c,.05,c,F.dark,F.metal,12);i.loft([-t*.42,t*.42,h+.07,e/2-.05],[-t/2+.01,t/2-.01,h+.05,e/2-.01],.03,n-.05,s,s,pt),i.box(-t/2,t/2,n-.05,n,h+.03,e/2,a,l,Dt),i.box(-t*.42,t*.42,n-.1,n-.02,h,h+.04,a,l),r==="multi"&&(i.seg(-t/2,n+.002,(h+e/2)/2,t/2,n+.002,(h+e/2)/2,ee),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Dt))}function Kw(i,t,e,n,r,o,s){let a=t/r;i.box(-t/2,t/2,0,n,-e/2,e/2,s?F.metal:F.white,s?F.metal:F.whiteTop,pt);for(let l=0;l<r;l++){let c=-t/2+a*(l+.5);if(l&&i.seg(-t/2+a*l,n*.06,e/2+.001,-t/2+a*l,n*.94,e/2+.001,Dt),!o)i.box(c-a*.34,c+a*.34,n*.16,n*.84,e/2,e/2+.006,F.white,F.whiteTop,Dt),i.seg(c-a*.3,n*.5,e/2+.007,c+a*.3,n*.5,e/2+.007,Dt);else if(s)i.box(c-a*.4,c+a*.4,n*.12,n*.9,e/2,e/2+.018,F.metal,F.metal,Dt),i.seg(c-a*.36,n*.86,e/2+.019,c+a*.36,n*.86,e/2+.019,Dt);else{let h=Math.min(a,n)*.34;i.lyingCyl("z",c,e/2+.002,n/2-h,n/2+h,.004,h*2,F.dark,F.dark,14,Dt),i.seg(c-h*.45,n/2,e/2+.0045,c-h*.45+.004,n/2,e/2+.0045,pt),i.seg(c+h*.45-.004,n/2,e/2+.0045,c+h*.45,n/2,e/2+.0045,pt)}}}function Zw(i,t,e,n,r){if(r){i.box(-t/2,t/2,0,n,-e/2,e/2,F.white,F.whiteTop,pt);let s=Math.min(t,n)*.3;for(let a=0;a<20;a++){let l=a/20*Math.PI*2,c=(a+1)/20*Math.PI*2;i.seg(Math.cos(l)*s,n/2+Math.sin(l)*s,e/2+.002,Math.cos(c)*s,n/2+Math.sin(c)*s,e/2+.002,Dt)}return}let o=Math.min(t,e)/2;i.cyl(0,0,o,0,n,F.white,F.whiteTop,24,pt),i.cyl(0,0,o*.5,n,n+.01,F.metal,F.metal,12)}function jw(i,t,e,n,r){if(r){i.pad(-t/2,t/2,0,n,-e/2,e/2,F.white,F.whiteTop,.05,pt),i.box(-t*.18,t*.18,n*.8,n*.88,e/2,e/2+.006,F.dark);for(let s of[-t*.2,t*.2])i.cyl(s,0,.012,-.12,0,F.metal,F.metal,6);return}let o=Math.min(t,e)/2;i.cyl(0,0,o,.04,n-.05,F.white,F.whiteTop,20,pt),i.cyl(0,0,o*.85,n-.05,n,F.white,F.whiteTop,20);for(let s=0;s<3;s++){let a=s/3*Math.PI*2;i.cyl(Math.cos(a)*o*.7,Math.sin(a)*o*.7,.03,0,.04,F.dark,F.dark,6)}i.box(-o*.3,o*.3,n*.55,n*.65,o-.01,o+.01,F.dark)}function Jw(i,t,e,n,r){let o=F.metal,s=Ut(F.metal,1.25).getHex(),a=Ut(F.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,F.wood,F.woodTop,Dt),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,o,s,pt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,o,s,14,pt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,F.dark,F.dark,Dt),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,o,s,12,Dt),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,o,s,pt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,F.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,pt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,s,Dt),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,F.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,pt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let h=-t/2+t/3*l+.015,u=n/2*c+.015;i.box(h,h+t/3-.03,u,u+n/2-.03,e/2,e/2+.01,a,s,Dt),i.box(h+.04,h+t/3-.07,u+n/2-.09,u+n/2-.07,e/2+.01,e/2+.014,F.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,o,s,pt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,o,s,pt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,F.dark)}function Qw(i,t,e,n){let r=e/2-Bg;i.box(-t/2,t/2,.02,n,-e/2,r,F.body,F.bodyTop,pt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,F.dark);for(let o of[.35,.7,1.05,1.4])o>n-.15||(i.seg(-t/2+.03,o,r+.001,-.03,o,r+.001,Dt),i.seg(.03,o,r+.001,t/2-.03,o,r+.001,Dt))}var Bg=.06;function zg(i,t,e,n){jo(i,t,()=>tS(i,t,e,n))}function tS(i,t,e,n){let r=t.rotation*Qt,o=Math.cos(r),s=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(A,I,O)=>[t.x+A*o-O*s,I,t.z+A*s+O*o],c=(A,I,O,C,B)=>{i.paint(x.get(B)??-1),i.tri(A,I,O,B),i.tri(A,O,C,B),i.tri(A,O,I,B),i.tri(A,C,O,B)},h=(A,I,O,C)=>{let B=l(A[0],A[1],A[2]),z=l(I[0],I[1],I[2]),W=z[0]-B[0],V=z[1]-B[1],Y=z[2]-B[2],et=Math.hypot(W,V,Y)||1,nt=[W/et,V/et,Y/et],$=Math.abs(nt[1])>.9?[1,0,0]:[0,1,0],H=[nt[1]*$[2]-nt[2]*$[1],nt[2]*$[0]-nt[0]*$[2],nt[0]*$[1]-nt[1]*$[0]],J=Math.hypot(H[0],H[1],H[2])||1,ot=[H[0]/J*O,H[1]/J*O,H[2]/J*O],Q=[nt[1]*ot[2]-nt[2]*ot[1],nt[2]*ot[0]-nt[0]*ot[2],nt[0]*ot[1]-nt[1]*ot[0]],bt=[[1,1],[-1,1],[-1,-1],[1,-1]];i.paint(x.get(C)??-1);let gt=(ut,ft)=>[ut[0]+ot[0]*bt[ft][0]+Q[0]*bt[ft][1],ut[1]+ot[1]*bt[ft][0]+Q[1]*bt[ft][1],ut[2]+ot[2]*bt[ft][0]+Q[2]*bt[ft][1]];for(let ut=0;ut<4;ut++){let ft=(ut+1)%4;i.tri(gt(B,ut),gt(z,ut),gt(z,ft),C),i.tri(gt(B,ut),gt(z,ft),gt(B,ft),C)}},u=(A,I,O,C,B,z,W,V)=>{c(l(A,C,B),l(I,C,B),l(I,C,z),l(A,C,z),V),c(l(A,O,z),l(I,O,z),l(I,C,z),l(A,C,z),W),c(l(A,O,B),l(I,O,B),l(I,O,z),l(A,O,z),W),c(l(A,O,B),l(A,O,z),l(A,C,z),l(A,C,B),W),c(l(I,O,B),l(I,O,z),l(I,C,z),l(I,C,B),W)},f=new K(F.body),d=new K(F.bodyTop),p=new K(F.accent),g=F.fabric!==fa.fabric,b=new K(g?F.fabricTop:1929098),m=new K(g?F.fabric:995141),x=new Map([[f,F.body],[d,F.body],[p,F.accent],[b,F.fabric],[m,F.fabric]]),v=(A,I,O,C,B)=>{let z=(W,V,Y)=>[W[0]+(V[0]-W[0])*Y,W[1]+(V[1]-W[1])*Y,W[2]+(V[2]-W[2])*Y];for(let W=0;W<B;W++){let V=z(A,I,W/B),Y=z(A,I,(W+1)/B),et=z(O,C,(W+1)/B),nt=z(O,C,W/B);c(l(V[0],V[1],V[2]),l(Y[0],Y[1],Y[2]),l(et[0],et[1],et[2]),l(nt[0],nt[1],nt[2]),W%2?b:m)}},y=t.w/2,M=-t.d/2,w=Math.max(.12,Math.min(.3,t.h)),T=Math.max(4,Math.round(t.w/.3)),_=(t.awning_pitch??12)*Math.PI/180,E=(A,I)=>{t.awning_valance!==!1&&v([-y+.04,A,I+.01],[y-.04,A,I+.01],[-y+.04,A-.2,I+.01],[y-.04,A-.2,I+.01],T)},R=t.variant??"arm";if(R==="side"){let A=e,I=.05,O=0,C=-y+.08+a*(t.w-.16);u(-y,-y+.1,0,A+.05,O-.05,O+.05,f,d),u(y-.06,y,0,A+.05,O-.03,O+.03,f,d),a>.01&&v([-y+.1,A,O],[-y+.1,I,O],[C,A,O],[C,I,O],Math.max(4,Math.round((A-I)/.3))),h([C,I,O],[C,A,O],.02,p);return}if(R==="vertical"){let A=M,I=Math.min(t.d/2,M+w);u(-y,y,e,e+w,A,I,f,d);let O=(A+I)/2;for(let B of[-y+.02,y-.02])h([B,.02,O],[B,e,O],.02,p);let C=e-a*Math.max(0,e-.04);a>.01&&v([-y+.04,e,O],[y-.04,e,O],[-y+.04,C,O],[y-.04,C,O],T),h([-y+.03,C,O],[y-.03,C,O],.025,p);return}if(R==="pergola"){let A=t.d/2-.05,I=e+w,O=I-(A-M)*Math.tan(_);u(-y,y,e,I,M,M+w,f,d);for(let z of[-y+.05,y-.05])h([z,I,M+w],[z,O,A],.035,p),h([z,0,A],[z,O,A],.045,f);h([-y+.05,O,A],[y-.05,O,A],.035,p);let C=M+w+a*(A-M-w),B=I-(C-M)*Math.tan(_)+.04;a>.01&&v([-y+.08,I+.04,M+w],[y-.08,I+.04,M+w],[-y+.08,B,C],[y-.08,B,C],T),h([-y+.08,B,C],[y-.08,B,C],.025,p);return}let S=M,P=M+w;u(-y,y,e,e+w,S,P,f,d);let k=[P-.02,e+w*.35];if(R==="drop"){let A=Math.max(.3,t.d-w),I=[P,k[1]-A],O=a*(Math.PI/2+_),C=[I[0]+Math.sin(O)*A,I[1]+Math.cos(O)*A];for(let B of[-y+.08,y-.08])h([B,I[1],I[0]],[B,C[1],C[0]],.018,p);a>.01&&v([-y+.04,k[1],k[0]],[y-.04,k[1],k[0]],[-y+.04,C[1],C[0]],[y-.04,C[1],C[0]],T),h([-y+.02,C[1],C[0]],[y-.02,C[1],C[0]],.03,p),a>.05&&E(C[1],C[0]);return}let D=Math.max(0,t.d-w)*a,U=[k[0]+D,k[1]-D*Math.tan(_)];if(D>.01){v([-y+.04,k[1],k[0]],[y-.04,k[1],k[0]],[-y+.04,U[1],U[0]],[y-.04,U[1],U[0]],T);let A=Math.max(.3,(t.d-w)/2+.05);for(let I of[-1,1]){let O=I*(y-.12),C=[O,e+.02,P-.04],B=[O,U[1]-.02,U[0]],z=Math.hypot(B[2]-C[2],B[1]-C[1]),W=Math.sqrt(Math.max(0,A*A-(z/2)**2)),V=[O-I*Math.min(W,y-.15),(C[1]+B[1])/2,(C[2]+B[2])/2];h(C,V,.018,p),h(V,B,.018,p)}}h([-y+.02,U[1],U[0]],[y-.02,U[1],U[0]],.03,p),D>.05&&E(U[1],U[0])}function Vg(i,t,e,n,r){let o=i.p.length;jo(i,t,()=>eS(i,t,e,n,r)),t.mirror&&rd(i,o)}function eS(i,t,e,n,r){let o=t.rotation*Qt,s=Math.cos(o),a=Math.sin(o),l=t.mirror?-1:1,c=(y,M)=>[t.x+l*y*s-M*a,t.z+l*y*a+M*s],h=e+.05,u=e+t.h-.02,f=new K(.75,.1,.14),d=new K(F.dark),p=new K(F.accent),g=t.w/2-.006,b=(y,M,w)=>{i.paint(F.body);let T=w/m,_=new K(F.body!==fa.body?F.bodyTop:2043212).lerp(f,T),E=new K(F.body).lerp(f,T*.8),R=Math.cos(w),S=Math.sin(w),P=(U,A)=>c(y+M*(U*R-A*S),t.d/2+U*S+A*R),k=(U,A,I,O)=>{let[C,B,z,W]=U;i.tri([C[0],A,C[1]],[B[0],A,B[1]],[z[0],I,z[1]],O),i.tri([C[0],A,C[1]],[z[0],I,z[1]],[W[0],I,W[1]],O)},D=(U,A,I,O,C,B,z,W=z)=>{let V=[P(U,B),P(A,B),P(A,C),P(U,C)];k([V[0],V[1],V[1],V[0]],I,O,W),k([V[3],V[2],V[2],V[3]],I,O,z),k([V[0],V[3],V[3],V[0]],I,O,z),k([V[1],V[2],V[2],V[1]],I,O,z),k([V[0],V[1],V[2],V[3]],O,O,z),k([V[3],V[2],V[1],V[0]],I,I,z)};return D(0,g,h,u,-Bg,0,E,_),D(g-.05,g-.03,e+t.h*.45,e+t.h*.75,.005,.025,p),D},m=1.83;b(-t.w/2,1,n*m)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),b(t.w/2,-1,r*m)(.06,g-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function nS(i,t,e,n){hr(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.dark,F.dark,pt);for(let[r,o,s]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=o*e/.62;i.cyl(a,l,s,n,n+.004,F.dark,1451583,12,ee)}}function iS(i,t,e,n){hr(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,F.whiteTop,F.whiteTop,pt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,F.whiteTop,F.whiteTop,pt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,F.whiteTop,F.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,F.whiteTop,F.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,F.metal,F.metal,ee),i.cyl(0,-e/2+.05,.02,n,n+.28,F.metal,F.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,F.metal)}function rS(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,F.white,F.whiteTop,pt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,F.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,F.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,F.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,F.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,F.glass,F.glass,ee),i.cyl(-t/2+.04,0,.02,n,n+.12,F.metal,F.metal,8)}function oS(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,F.whiteTop,F.whiteTop,pt),i.cyl(0,0,.04,.05,.052,F.metal,F.metal,8);for(let[r,o,s,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,o,s,.05,a,ee),i.seg(r,n,o,s,n,a,ee),i.seg(s,.05,a,s,n,a,ee);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,F.metal,F.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,F.metal,F.metal,12,ee)}function sS(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,F.white,F.whiteTop,pt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,F.white,F.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,F.white,F.whiteTop,12,pt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,F.whiteTop)}function aS(i,t,e,n){hr(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,F.white,F.whiteTop,pt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,F.glass,F.glass,ee),i.cyl(0,-e/2+.06,.018,n,n+.2,F.metal,F.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,F.glass,F.glass,ee)}function lS(i,t,e,n){hr(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),o=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,F.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,F.metal),i.box(-r/2,r/2,n+.1,n+.1+o,-e/2+.12,-e/2+.16,F.dark,F.dark,ee)}function cS(i,t,e,n){let r=Math.min(t,e)/2,o=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,o,F.pot,F.pot,10,pt),i.cyl(0,0,r*.08,o,n*.55,F.wood,F.wood,6);let s=4;for(let a=0;a<s;a++){let l=a/(s-1),c=r*(.95-.55*l),h=o+(n-o)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-o)*.16,F.plant,F.plantTop,8,a===s-1?Dt:null)}}function uS(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,F.fabric,F.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,o,s,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,o,s,.014,a,pt)}var Fg=.045;function hS(i,t,e,n,r=!1,o=null,s=0,a=0){let{n:l,flat:c,winders:h,skip:u}=L0({w:t,d:e,h:n,stair_turn:o,stair_landing:s}),f=n/l,d=e/2-(u?t:0),p=Math.max(0,Math.min(a,e-.2*(l-u))),g=(d+e/2-p)/(l-u),b=w=>r?Math.max(0,w-Fg):0;if(c){let w=f*c;i.box(-t/2,t/2,0,w,d,e/2,F.wood,F.woodTop,pt)}if(h){let w=o==="right"?-1:1,T=[-w*(t/2),d],_=E=>E<=t?[-w*(t/2)+w*E,e/2]:[w*(t/2),e/2-(E-t)];for(let E=0;E<h;E++){let R=2*t*E/h,S=2*t*(E+1)/h,P=[T,_(R)];R<t&&S>t&&P.push(_(t)),P.push(_(S));let k=f*(E+1);i.prism(P,b(k),k,F.wood,F.woodTop,pt)}}for(let w=u;w<l;w++){let T=d-g*(w-u),_=w===l-1&&p>0?-e/2:T-g,E=f*(w+1);i.box(-t/2,t/2,b(E),E,_,T,F.wood,F.woodTop),i.seg(-t/2,E,T,t/2,E,T,pt)}u||i.seg(-t/2,0,e/2,-t/2,f,e/2,pt);let m=f*(u+1);for(let w of[-t/2,t/2])i.seg(w,m,d,w,n,-e/2+g,Dt);if(r)for(let w=u;w<l;w++){let T=d-g*(w-u),_=f*(w+1);for(let E of[-t/2,t/2-.035])i.box(E,E+.035,Math.max(0,_-.28),_-Fg,T-g,T,F.wood,F.woodTop)}let x=.9,v=t/2-.03,y=Math.max(u+1,l-4),M=w=>d-g*(w-u+.5);i.seg(v,f*(u+1)+x,M(u),v,f*y+x,M(y-1),ee);for(let w=u;w<y;w+=3){let T=f*(w+1);i.seg(v,T,M(w),v,T+x,M(w),Dt)}}var fS=72;function dS(i,t,e,n){let r=-e/2,o=e/2,s=.05;i.box(-t/2,t/2,n-.03,n,r,r+s,F.white,F.whiteTop,pt),i.box(-t/2,t/2,n-.03,n,o-s,o,F.white,F.whiteTop,pt),i.box(-t/2,-t/2+s,n-.03,n,r+s,o-s,F.white,F.whiteTop,pt),i.box(t/2-s,t/2,n-.03,n,r+s,o-s,F.white,F.whiteTop,pt);let a=Math.min(e-2*s,n-.3);i.box(-t/2+s,t/2-s,n-a,n-.03,r,r+.035,F.white,F.whiteTop,pt);let l=Math.max(.12,t/2-.1),c=r+.06,h=Math.min(o,c+n/Math.tan(fS*Qt)),u=.03;for(let d of[-l,l-.04])i.loft([d,d+.04,h-u,h],[d,d+.04,c,c+u],0,n-.03,F.metal,F.metal,pt);let f=Math.max(2,Math.round(n/.25));for(let d=1;d<f;d++){let p=n*d/f,g=h+(c-h)*d/f;i.box(-l,l,p-.015,p+.015,g-.06,g+.02,F.metal,F.metal)}}function pS(i,t,e,n){let{k:r,steps1:o,steps2:s,fw:a,landing:l,run:c,rise:h}=F0(t,e,n),u=-t/2,f=-t/2+a,d=t/2-a,p=t/2,g=-e/2+l;for(let T=0;T<o;T++){let _=e/2-c*T,E=h*(T+1);i.box(u,f,0,E,_-c,_,F.wood,F.woodTop),i.seg(u,E,_,f,E,_,pt)}i.seg(u,0,e/2,u,h,e/2,pt);let b=h*r,m=.2;i.box(u,f,0,b,-e/2,g,F.wood,F.woodTop),i.box(f,p,Math.max(0,b-m),b,-e/2,g,F.wood,F.woodTop),i.seg(u,b,g,f,b,g,pt);for(let T=0;T<s;T++){let _=g+c*T,E=h*(r+1+T);i.box(d,p,Math.max(0,E-h-m),E,_,_+c,F.wood,F.woodTop),i.seg(d,E,_,p,E,_,pt)}i.seg(u,h,e/2,u,b,g,Dt),i.seg(p,b,g,p,n,g+c*(s-1),Dt);let x=.9,v=f-.03,y=d+.03,M=g-.03,w=Math.max(1,s-4);i.seg(v,h+x,e/2-c/2,v,b+x,M,ee),i.seg(v,b+x,M,y,b+x,M,ee),i.seg(y,b+x,M,y,h*(r+w)+x,g+c*(w-.5),ee);for(let T=0;T<o;T+=3){let _=e/2-c*(T+.5);i.seg(v,h*(T+1),_,v,h*(T+1)+x,_,Dt)}for(let T of[v,y])i.seg(T,b,M,T,b+x,M,Dt);for(let T=2;T<w;T+=3){let _=g+c*(T+.5);i.seg(y,h*(r+1+T),_,y,h*(r+1+T)+x,_,Dt)}}function mS(i,t,e,n){Wr(i,t,e,.12,.03,.04,F.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,F.wood,F.woodTop,pt),da(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function gS(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,F.wood,F.woodTop,pt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,F.dark);let r=Math.max(3,Math.round((n-.06)/.22)),o=e/2-.02;for(let s=1;s<r;s++){let a=.06+(n-.06)/r*s;i.seg(-t/2,a,o,t/2,a,o,Dt)}for(let s=0;s<r;s++){let a=.06+(n-.06)/r*(s+.5);i.seg(-.08,a,o+.012,.08,a,o+.012,ee)}}function bS(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,F.wood,F.woodTop,pt),da(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,F.body,F.bodyTop,pt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.wood,F.woodTop,pt);let r=Math.max(2,Math.round(t/.25));for(let o=0;o<r;o++){let s=-t/2+t/r*(o+.5);i.box(s-.015,s+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,F.metal,F.metal)}}function kg(i,t,e,n,r){let s=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+s,F.wood,F.woodTop,pt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,F.wood,F.woodTop,pt),i.box(-t/2+(r?s:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+s,F.cushion,F.cushion,Dt),r&&(i.box(-t/2,-t/2+s,0,.45-.06,-e/2+s,e/2,F.wood,F.woodTop,pt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,F.wood,F.woodTop,pt),i.box(-t/2+a,-t/2+s,.45-.06,.45+.02,-e/2+a,e/2-.02,F.cushion,F.cushion,Dt))}function xS(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,F.metal,F.metal,12),i.cyl(0,0,.025,.02,n-.05,F.metal,F.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,F.metal,F.metal,12,Dt),i.cyl(0,0,r,n-.05,n,F.cushion,F.fabricTop,14,pt)}function yS(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,F.metal),i.box(-.03,.03,.04,.08,-r,r,F.metal),i.cyl(0,0,.06,.02,.1,F.dark,F.dark,8),i.cyl(0,0,.025,.1,.44,F.metal,F.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,F.fabric,F.cushion,pt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,F.fabric,F.fabricTop,pt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,F.metal)}function vS(i,t,e,n){Wr(i,t,e,.08,.04,.05,F.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,F.fabric,F.cushion,pt)}function _S(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,F.body,F.bodyTop,pt),da(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function MS(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,F.body,F.bodyTop,pt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,F.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,F.dark,F.dark,ee),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,ee);for(let o of[.85,1.45])i.seg(-t/2,o,r,t/2,o,r,Dt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,ee),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,ee)}function wS(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,F.body,F.bodyTop,pt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,F.dark),da(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.whiteTop,F.whiteTop,pt)}function SS(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,F.body,F.bodyTop,pt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,F.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,ee),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.whiteTop,F.whiteTop,pt)}function Dg(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,F.white,F.whiteTop,pt);let o=e/2-.012;i.seg(-t/2,n-.14,o,t/2,n-.14,o,Dt),i.seg(t/2-.16,n-.07,o,t/2-.08,n-.07,o,ee);let s=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,s+Math.sin(h)*a,o,Math.cos(u)*a,s+Math.sin(u)*a,o,ee),r||i.seg(Math.cos(h)*a*.72,s+Math.sin(h)*a*.72,o,Math.cos(u)*a*.72,s+Math.sin(u)*a*.72,o,Dt)}}function TS(i,t,e,n){for(let s of[-1,1])for(let a of[-1,1])i.box(s*(t/2)-(s>0?.05:0),s*(t/2)+(s<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),F.wood,F.woodTop);for(let s of[.25,n-.55])i.box(-t/2,t/2,s,s+.08,-e/2,e/2,F.wood,F.woodTop,pt),i.box(-t/2+.04,t/2-.04,s+.08,s+.24,-e/2+.05,e/2-.05,F.white,F.whiteTop,Dt),i.box(-t/2+.05,t/2-.05,s+.24,s+.33,-e/2+.08,-e/2+.4,F.whiteTop,F.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,F.wood,F.woodTop);let o=t/2-.35;for(let s of[o-.18,o+.18])i.seg(s,0,e/2+.02,s,n-.15,e/2+.02,pt);for(let s=.3;s<n-.2;s+=.28)i.seg(o-.18,s,e/2+.02,o+.18,s,e/2+.02,Dt)}function AS(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,F.metal,F.metal,12),i.cyl(0,0,.05,.03,n-.04,F.wood,F.wood,8),i.cyl(0,0,r,n-.04,n,F.wood,F.woodTop,20,pt)}function ES(i,t,e,n){Wr(i,t,e,n-.03,.04,.03,F.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,F.wood,F.woodTop,pt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,F.body,F.bodyTop,Dt)}function RS(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,F.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,F.dark,F.dark,ee)}function PS(i,t,e,n){let r=nd;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,F.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,F.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,F.white,F.whiteTop,pt);let o=Math.max(3,Math.round(t/.1));for(let s=1;s<o;s++){let a=-t/2+t/o*s;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Dt)}}function CS(i,t,e,n){let r=id;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,F.white,F.whiteTop,pt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,F.white,F.white,pt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,F.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Dt),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,ee)}function Zo(i,t,e,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,ee)}}function IS(i,t,e,n,r){let s=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,F.dark,F.body,pt),i.seg(-t*.25,1.1+n*.15,s+.004,-t*.25,1.1+n*.85,s+.004,ee),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,s,s+.005,F.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,F.white,F.whiteTop,pt),Zo(i,0,1.1+n*.66,Math.min(t,n)*.22,s+.004),i.seg(-t*.08,1.1+n*.66,s+.005,t*.08,1.1+n*.66,s+.005,ee);for(let a of[-1,1])Zo(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,F.white,F.whiteTop,pt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,F.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,ee);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Dt)}function LS(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,F.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,F.metal,F.metal,pt);for(let s of[-t*.4,-t*.25,-t*.1])i.seg(s,.05+r*2+.003,-r,s,.05+r*2+.003,r,Dt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,F.dark,F.body,14,pt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,F.glass,F.glass,14);let o=Math.min(t*.2,e*.45)*.95;for(let s=0;s<16;s++){let a=s/16*Math.PI*2,l=(s+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*o,n*.83,Math.sin(a)*o,t*.28+Math.cos(l)*o,n*.83,Math.sin(l)*o,ee)}}function FS(i,t,e,n,r){let o=Math.min(t,e)/2;if(i.cyl(0,0,o*.95,0,n*.08,F.dark,F.dark,16),i.cyl(0,0,o,n*.08,n*.78,F.dark,F.body,18,pt),i.cyl(0,0,o*.75,n*.78,n*.84,F.dark,F.body,16),r==="side6"){let a=o*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,F.dark,F.metal,pt),Zo(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,F.dark,F.body);return}i.cyl(0,0,o*.45,n*.84,n*.95,F.dark,F.metal,16,pt);let s=o*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*s,n*.955,Math.sin(l)*s,Math.cos(c)*s,n*.955,Math.sin(c)*s,ee)}i.box(-.02,.02,n*.95,n,-o*.35,o*.35,F.dark,F.body)}function kS(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,F.white,F.whiteTop,pt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,F.dark);let r=Math.min(n*.38,t*.3),o=-t*.15,s=n*.53;Zo(i,o,s,r,e/2+.004,24),Zo(i,o,s,r*.55,e/2+.004,16),i.seg(o-r,s,e/2+.005,o+r,s,e/2+.005,Dt),i.seg(o,s-r,e/2+.005,o,s+r,e/2+.005,Dt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,F.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,ee);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Dt)}function DS(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,F.white,F.whiteTop,pt);for(let o of[-1,1])Zo(i,o*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,ee);for(let o of[-1,1])i.box(o*t*.25-t*.18,o*t*.25+t*.18,0,n*.5,-e/2,e/2,F.white,F.glass,Dt)}function OS(i,t,e,n){let r=R0-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,F.metal,F.metal,pt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,F.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,F.accent,F.accent)}function NS(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,F.dark,F.body,pt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,F.dark,F.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,ee),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Dt)}function US(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,F.dark,F.body,pt);let o=Math.min(t,n)*.28,s=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*o,s+Math.sin(c)*o,e/2+.003,Math.cos(h)*o,s+Math.sin(h)*o,e/2+.003,ee)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,F.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,F.dark,F.body)}function BS(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,F.white,F.whiteTop,pt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Dt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Dt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,F.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,F.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,ee)}function zS(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,F.white,F.whiteTop,pt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,ee),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Dt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,F.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,F.dark,F.body,pt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,ee),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,F.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,F.dark);let o=Math.max(2,Math.round((n-.06)/.3)),s=(n-.06)/o;for(let a=0;a<o;a++)i.box(-t/2,t/2,.06+a*s+.004,.06+(a+1)*s,-e/2,e/2,F.white,F.whiteTop,pt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,ee)}}var nd=.12,id=2.05;function Gg(i,t,e){let n=Math.min(.04,.08*Math.min(i,t)),r=Math.min(i-n,(t-n)*e);return{w:r,h:r/e}}function od(i,t){let e=VS(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function VS(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),o=x0(i.type);if(o){let l=t?tn(t,i):0,c=(o.x-o.w/2)*e,h=(o.x+o.w/2)*e,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+o.y*r+u,y1:l+(o.y+o.h)*r-u,z:(o.z+o.d/2)*n}}let s=t&&i.type!=="fridge_smart"?tn(t,i)-kr(i):0,a=GS(i,e,n,r,t);return a?{...a,y0:a.y0+s,y1:a.y1+s}:null}function GS(i,t,e,n,r){if(i.type==="pool_pump"){let o=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+o*2,z:o+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let o=Math.min(t,e)/2;return{x0:-o*.4,x1:o*.4,y0:n*.85,y1:n*.94,z:o*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let o=Math.min(t*.8,1.45),s=o*.56;return{x0:-o/2+.02,x1:o/2-.02,y0:n+.12,y1:n+.08+s,z:-e/2+.165}}if(i.type==="tv_wall"){let o=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:o+.02,y1:o+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let o=r?tn(r,i):0;return{x0:.06,x1:t/2-.06,y0:o+n*.52+.01,y1:o+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:nd+.02,y1:nd+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:id+.015,y1:id+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let o=(n-.14)/2+.04,s=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-s,x1:s,y0:o-s,y1:o+s,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function HS(i){if(i.type==="table_round"||i.type==="plant")return!0;let t=ae(i.type);if(!t?.parts.length)return!1;let e=t.parts.reduce((r,o)=>o.w*o.d>r.w*r.d?o:r,t.parts[0]);return(e.shape==="cyl"&&(e.axis??"y")==="y"||e.shape==="sphere"||e.shape==="lathe")&&e.w>=.85&&e.d>=.85}function WS(i,t,e,n,r,o=!1,s=0){let a=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),l=new K(1-r,1-r,1-r),c=new K(1,1,1),h=s+.003;if(o){let g=y=>[y[0],h,y[1]],m=(y,M,w)=>t(Math.cos(y/24*2*Math.PI)*M,Math.sin(y/24*2*Math.PI)*w),x=i.p.length,v=g(t(0,0));for(let y=0;y<24;y++){let M=g(m(y,e/2,n/2)),w=g(m(y+1,e/2,n/2)),T=g(m(y,e/2+a,n/2+a)),_=g(m(y+1,e/2+a,n/2+a));i.tri(v,M,w,l),i.tri(M,T,_,l,c,c),i.tri(M,_,w,l,c,l)}ed(t)&&rd(i,x);return}let u=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-a,-n/2-a),t(e/2+a,-n/2-a),t(e/2+a,n/2+a),t(-e/2-a,n/2+a)],d=g=>[g[0],h,g[1]],p=i.p.length;i.tri(d(u[0]),d(u[1]),d(u[2]),l),i.tri(d(u[0]),d(u[2]),d(u[3]),l);for(let g=0;g<4;g++){let b=(g+1)%4;i.tri(d(u[g]),d(f[g]),d(f[b]),l,c,c),i.tri(d(u[g]),d(f[b]),d(u[b]),l,c,l)}ed(t)&&rd(i,p)}function lu(i,t,e,n,r=0,o=!1,s=!0){jo(i,n,()=>XS(i,t,e,n,r,o,s))}function rd(i,t){let e=(n,r,o)=>{if(n)for(let s=0;s<o;s++){let a=r+o+s,l=r+2*o+s,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function XS(i,t,e,n,r,o=!1,s=!0){let a=ae(n.type)?0:r-kr(n);if(ae(n.type)||Math.abs(a)<.001)return Og(i,t,e,n,r,o,s);let l=i.p.length,c=t.p.length,h=e.p.length;Og(i,t,r<.05?e:new Jt,n,0);for(let u=l+1;u<i.p.length;u+=3)i.p[u]+=a;for(let u=c+1;u<t.p.length;u+=3)t.p[u]+=a;if(r<0)for(let u=h+1;u<e.p.length;u+=3)e.p[u]+=a}function Og(i,t,e,n,r,o=!1,s=!0){let a=n.rotation*Qt,l=Math.cos(a),c=Math.sin(a),h=n.mirror?-1:1,u=(b,m)=>[n.x+h*b*l-m*c,n.z+h*b*c+m*l],f=new yi(i,t,u),d=Math.max(.05,n.w),p=Math.max(.05,n.d),g=Math.max(.005,n.h);switch(n.type){case"sofa":Ig(f,d,p,g,Math.max(1,Math.round((d-.4)/.62)));break;case"armchair":Ig(f,d,p,g,1);break;case"sofa_l":Lg(f,d,p,g,!1);break;case"sofa_u":Lg(f,d,p,g,!0);break;case"bed":Bw(f,d,p,g);break;case"chair":zw(f,d,p,g);break;case"table":Vw(f,d,p,g);break;case"desk":Gw(f,d,p,g);break;case"nightstand":hr(f,d,p,g,1,g*.72,!0),f.seg(-d/2,g*.5,p/2-.02,d/2,g*.5,p/2-.02,Dt);break;case"wardrobe":hr(f,d,p,g,Math.max(2,Math.round(d/.5)),g*.5);break;case"shelf":Hw(f,d,p,g);break;case"kitchen":Ww(f,d,p,g);break;case"fridge":Xw(f,d,p,g);break;case"fridge_smart":Qw(f,d,p,g);break;case"waste_bin":{let b=i.c.length;qw(f,d,p,g,gg(n),vg(n,yg())),Hr&&Ug(i.c,b);break}case"mailbox":{let b=i.p.length,m=t.p.length;Jw(f,d,p,g,bg(n));let x=kr(n);for(let v=b+1;v<i.p.length;v+=3)i.p[v]+=x;for(let v=m+1;v<t.p.length;v+=3)t.p[v]+=x;if(x>0)return;break}case"wifi_ap":Zw(f,d,p,g,n.variant==="wall");return;case"water_heater":if(jw(f,d,p,g,n.variant==="wall"),n.variant==="wall")return;break;case"wall_switch":case"wall_socket":{let b=i.p.length,m=t.p.length;Kw(f,d,p,g,D0(n).length,n.type==="wall_socket",n.variant==="outdoor");let x=kr(n);for(let v=b+1;v<i.p.length;v+=3)i.p[v]+=x;for(let v=m+1;v<t.p.length;v+=3)t.p[v]+=x;return}case"awning":return;case"stove":nS(f,d,p,g);break;case"sink":iS(f,d,p,g);break;case"bathtub":rS(f,d,p,g);break;case"shower":oS(f,d,p,g);break;case"wc":sS(f,d,p,g);break;case"washbasin":aS(f,d,p,g);break;case"tv_board":lS(f,d,p,g);break;case"plant":cS(f,d,p,g);break;case"rug":uS(f,d,p);return;case"stairs":hS(f,d,p,g,!!n.stair_open,n.stair_turn??null,n.stair_landing??0,n.stair_top??0);break;case"stairs_u":pS(f,d,p,g);break;case"stairwell":return;case"loft_ladder":dS(f,d,p,g);break;case"sideboard":mS(f,d,p,g);break;case"dresser":gS(f,d,p,g);break;case"tall_cabinet":hr(f,d,p,g,1,g*.5);break;case"coat_rack":bS(f,d,p,g);break;case"bench":kg(f,d,p,g,!1);break;case"corner_bench":kg(f,d,p,g,!0);break;case"bar_stool":xS(f,d,p,g);break;case"office_chair":yS(f,d,p,g);break;case"stool":vS(f,d,p,g);break;case"kitchen_wall":_S(f,d,p,g);return;case"kitchen_tall":MS(f,d,p,g);break;case"island":wS(f,d,p,g);break;case"worktop":f.box(-d/2,d/2,Math.max(0,g-.04),g,-p/2,p/2,F.whiteTop,F.whiteTop,pt);return;case"dishwasher":SS(f,d,p,g);break;case"washer":Dg(f,d,p,g,!1);break;case"dryer":Dg(f,d,p,g,!0);break;case"bunk_bed":TS(f,d,p,g);break;case"table_round":AS(f,d,p,g);break;case"coffee_table":ES(f,d,p,g);break;case"tv_wall":RS(f,d,p,g);return;case"parking":{let m=[[-d/2,-p/2],[d/2,-p/2],[d/2,p/2],[-d/2,p/2]];for(let x=0;x<4;x++)f.seg(m[x][0],.012,m[x][1],m[(x+1)%4][0],.012,m[(x+1)%4][1],Dt);f.seg(-d*.15,.012,p/2-.45,0,.012,p/2-.2,pt),f.seg(0,.012,p/2-.2,d*.15,.012,p/2-.45,pt);return}case"robot_vacuum":f.box(-d*.45,d*.45,0,g,-p/2,-p/2+p*.3,F.white,F.whiteTop,pt),f.box(-d*.2,d*.2,g*.5,g*.62,-p/2+p*.3,-p/2+p*.31,F.accent);return;case"radiator":PS(f,d,p,g);return;case"ac_unit":CS(f,d,p,g);return;case"inverter":IS(f,d,p,g,n.variant??null);return;case"grid_point":NS(f,d,p,g);break;case"wallbox":US(f,d,p,g);return;case"pool_pump":LS(f,d,p,g);break;case"pool_filter":FS(f,d,p,g,n.variant??null);break;case"pool_heat_pump":kS(f,d,p,g);break;case"pool_dosing":DS(f,d,p,g);break;case"pool_valve":OS(f,d,p,g);return;case"meter":BS(f,d,p,g);return;case"home_battery":if(zS(f,d,p,g,n.variant??null),n.variant==="wall")return;break;default:{let b=ae(n.type);if(b){let m=Hc(n.type),x=m?v=>Ef(m,v):g0(n.type)&&!o?ra:null;if(Jo(f,b,d,p,g,r,null,null,x),b.rack_frame&&$S(f,b,n,d,p,g,r,s),r>.05)return}else f.box(-d/2,d/2,0,g,-p/2,p/2,F.body,F.bodyTop,pt)}}WS(e,u,d,p,n.type==="plant"?.35:.5,HS(n),Math.min(0,r))}function $S(i,t,e,n,r,o,s,a=!0){let l=zi(t);if(!l)return;let c=Vi(l,n,r,o);for(let h of qd(c))i.box(h.x0,h.x1,s+h.y0,s+h.y1,h.z0,h.z1,F.accent,F.accent);a&&Hg(i,e,c,s,!0)}function Hg(i,t,e,n,r){let o=t.rack?.slots;if(o?.length)for(let s of gr(e,o,ae)){let a=s.back?i.moved(s.x,s.z).rotated(0,0,180):i.moved(s.x,s.z);r?Jo(a,s.item,s.w,s.d,s.h,n+s.y,null):YS(a,s.item,s.w,s.d,s.h,n+s.y)}}function YS(i,t,e,n,r,o){let s=ua(t,e,n,r);if(!s.length)return;let a=[1/0,-1/0,1/0,-1/0,1/0,-1/0],l=(f,...d)=>{a[f]=Math.min(a[f],...d),a[f+1]=Math.max(a[f+1],...d)},c=s[0];for(let f of s){let d=f.shape==="loft";f.rot?l(0,-.5,.5):l(0,f.x-f.w/2,f.x+f.w/2,...d?[(f.tx??f.x)-(f.tw??f.w)/2,(f.tx??f.x)+(f.tw??f.w)/2]:[]),f.rot?l(2,-.5,.5):l(2,f.z-f.d/2,f.z+f.d/2,...d?[(f.tz??f.z)-(f.td??f.d)/2,(f.tz??f.z)+(f.td??f.d)/2]:[]),l(4,f.y,f.y+f.h),f.w*f.h>c.w*c.h&&(c=f)}let h=Ko(c.color,!1)??F.body,u=Ko(c.top,!1)??Ko(c.color,!0)??Ut(h,1.25).getHex();i.box(a[0]*e,a[1]*e,o+a[4]*r,o+Math.min(r,a[5]*r),a[2]*n,a[3]*n,h,u,Dt)}function Wg(i,t,e,n,r){let o=ae(e.type),s=o?zi(o):null;if(!s||!e.rack?.slots?.length)return;let a=e.rotation*Qt,l=Math.cos(a),c=Math.sin(a),h=e.mirror?-1:1,u=new yi(i,t,(d,p)=>[e.x+h*d*l-p*c,e.z+h*d*c+p*l]),f=Vi(s,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h));jo(i,e,()=>Hg(u,e,f,n,r))}function Xg(i,t,e,n){let r=new Map,o=ae(t.type),s=o?zi(o):null,a=t.rack?.slots;if(!s||!a?.length||!n.length)return r;let l=new Set(n),c=t.rotation*Qt,h=Math.cos(c),u=Math.sin(c),f=t.mirror?-1:1,d=new yi(i,new Le,(g,b)=>[t.x+f*g*h-b*u,t.z+f*g*u+b*h]),p=Vi(s,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h));for(let g of gr(p,a,ae)){if(!l.has(g.slot.id)||r.has(g.slot.id))continue;let b=Qd(g),m=b.size/2,x=i.count;d.box(b.x-m,b.x+m,e+b.y-m,e+b.y+m,b.z-m,b.z+m,16777215,16777215),r.set(g.slot.id,{start:x,end:i.count})}return r}function qS(i){return!!ae(i)?.parts.some(t=>t.color?.startsWith("#")||t.top?.startsWith("#"))}function $g(i){return i.type==="waste_bin"||qS(i.type)||ha.some(t=>jf(i.colors,t))}function Ko(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=F;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Jo(i,t,e,n,r,o,s,a=null,l=null){let c=!!a;for(let h of ua(t,e,n,r)){if(l?.(h)||a&&!a(h))continue;let u=c?{...h,glow:!0,w:h.w+.006/e,d:h.d+.006/n,y:Math.max(0,h.y-.002/r),h:h.h+.004/r}:h,f=u.glow&&s!==null,d=f?s:Ko(u.color,!1)??F.body,p=f?s:Ko(u.top,!1)??Ko(u.color,!0)??Ut(d,1.25).getHex(),g=o+u.y*r,b=o+Math.min(r,(u.y+u.h)*r),m=i.colors.length,x=u.edges==="glow"?cr:u.edges==="faint"?Dt:u.edges?pt:null,v=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))v.lyingCyl(u.axis,u.x*e,u.z*n,g,b,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,d,p,14,x);else if(u.shape==="cyl")v.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,g,b,d,p,14,x);else if(u.shape==="sphere")v.rings(Rg(u.x*e,u.z*n,u.w*e/2,u.d*n/2,g,b),d,p,x);else if(u.shape==="lathe")v.rings(Pg(u.x*e,u.z*n,u.w*e/2,u.d*n/2,g,b,u.profile??[[1,0],[1,1]]),d,p,x);else if(u.shape==="rbox"){let y=(u.round??.2)*Math.min(u.w*e,u.d*n,b-g);v.rings(Cg((u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n,g,b,y),d,p,x)}else if(u.shape==="loft"){let y=u.tx??u.x,M=u.tz??u.z,w=u.tw??u.w,T=u.td??u.d;v.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(y-w/2)*e,(y+w/2)*e,(M-T/2)*n,(M+T/2)*n],g,b,d,p,x)}else v.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,g,b,(u.z-u.d/2)*n,(u.z+u.d/2)*n,d,p,x);Hr&&!f&&!c&&(u.color?.startsWith("#")||u.top?.startsWith("#"))&&Ug(i.colors,m)}}function Yg(i,t,e,n,r,o){let s=o*Qt,a=Math.cos(s),l=Math.sin(s),c=(p,g)=>[e+p*a-g*l,r+p*l+g*a],h=new yi(i,new Le,c),u=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),h.cyl(0,0,.012,n-.075,n-.06,F.accent,F.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,F.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function qg(i,t,e,n,r){let o=b0(t)*n,s=new yi(i,new Le,(c,h)=>[c,h-o]);Jo(s,t,Math.max(.05,e),Math.max(.05,n),Math.max(.005,r),0,null,ra);let a=0,l=0;for(let c of ua(t,e,n,r)){if(!ra(c))continue;let h=Math.min(c.w*e,c.d*n)/2;c.shape==="cyl"&&h>a&&(a=h),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function Qo(i,t,e,n,r,o=s=>!!s.glow){let s=e.rotation*Qt,a=Math.cos(s),l=Math.sin(s),c=e.mirror?-1:1,h=(u,f)=>[e.x+c*u*a-f*l,e.z+c*u*l+f*a];Jo(new yi(i,new Le,h),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,o)}function Kg(i,t,e,n,r,o){let s=KS(t,e,o,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*Qt,l=Math.cos(a),c=Math.sin(a),h=n.mirror?-1:1,u=(f,d)=>[n.x+h*f*l-d*c,n.z+h*f*c+d*l];jo(i,n,()=>Jo(new yi(i,new Le,u),{...t,parts:s},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null))}function KS(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),o=i.parts.filter(a=>Ef(t,a)),s;if(t==="curtain")s=o.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else if(t==="blind"){let a=Math.max(.02,1-r),l=1-a;s=o.map(c=>{let h=(u,f)=>u+((f??u)-u)*l;return{...c,y:c.y+c.h*l,h:c.h*a,x:h(c.x,c.tx),z:h(c.z,c.tz),w:h(c.w,c.tw),d:h(c.d,c.td)}})}else{let a=Math.max(...o.map(c=>c.y+c.h)),l=Math.max(.02,1-r);s=o.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return s}function Zg(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),o=Math.max(.005,t.h),s=0,a=0,l=0,c=0;for(let b of ua(i,n,r,o)){if(!b.glow)continue;let m=(b.x+(b.shape==="loft"?b.tx??b.x:b.x))/2*n,x=(b.z+(b.shape==="loft"?b.tz??b.z:b.z))/2*r,v=b.y*o,y=Math.min(o,(b.y+b.h)*o),M=Math.max(1e-6,b.w*n*b.d*r*Math.max(0,y-v));s+=M,a+=m*M,l+=(v+y)/2*M,c+=x*M}if(!s)return null;let h=a/s,u=c/s,f=t.rotation*Qt,d=Math.cos(f),p=Math.sin(f),g=t.mirror?-1:1;return[t.x+g*h*d-u*p,e+l/s,t.z+g*h*p+u*d]}function cu(i,t,e,n,r){let o=e.rotation*Qt,s=Math.cos(o),a=Math.sin(o),l=e.mirror?-1:1,c=(h,u)=>[e.x+l*h*s-u*a,e.z+l*h*a+u*s];jo(i,e,()=>Jo(new yi(i,new Le,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r))}var ZS={lawn:{color:1854e3,side:1391142,edge:4055200,edgeAlpha:.28},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:2310186,side:1716256,edge:10146383,edgeAlpha:.22},hedge:{color:2252863,side:1591856,edge:4055200,edgeAlpha:.4},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function jS(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],o=e[1]-t[1],s=Math.hypot(r,o)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let h=a.points[(c+1)%a.points.length],u=h[0]-l[0],f=h[1]-l[1],d=Math.hypot(u,f)||1;if(Math.abs((r*f-o*u)/(s*d))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+u*p-n[0],l[1]+f*p-n[1])<.4}))}function Jg(i,t){return t.type==="pool"?Kc(i,t):Dr(i,t)+(jn(t.type)?.01:Bo[t.type])}function pa(i){return Pn(i)>=0?i:[...i].reverse()}function JS(i,t){let e=i[t];if(jn(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let o=i[r];r===t||!(o.cut&&r>t||o.type==="pool")||o.points.length<3||o.points.every(s=>jt(s,e.points))&&n.push(pa(o.points))}return n}function jg(i,t,e,n,r,o,s,a,l=0){let c=e[0]-t[0],h=e[1]-t[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Fe(i,pa([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,o,s,a,{aoFrom:r-1});return}let p=(y,M)=>[t[0]+f*M,y,t[1]+d*M],g=(y,M)=>[e[0]+f*M,y+l,e[1]+d*M],b=(y,M)=>{i.tri(y[0],y[1],y[2],M,M,M,void 0,te),i.tri(y[0],y[2],y[3],M,M,M,void 0,te),i.tri(y[0],y[2],y[1],M,M,M,void 0,te),i.tri(y[0],y[3],y[2],M,M,M,void 0,te)},m=new K(a),x=new K(Ut(s,.9)),v=new K(Ut(s,.6));b([p(o,1),g(o,1),g(o,-1),p(o,-1)],m),b([p(r,1),g(r,1),g(r,-1),p(r,-1)],v),b([p(r,1),g(r,1),g(o,1),p(o,1)],x),b([p(r,-1),g(r,-1),g(o,-1),p(o,-1)],x),b([p(r,1),p(r,-1),p(o,-1),p(o,1)],x),b([g(r,1),g(r,-1),g(o,-1),g(o,1)],x)}function Qg(i,t,e,n){let r=e.outdoor??[];r.forEach((o,s)=>{if(o.points.length<3)return;let a=Dr(e,o),l=(x,v)=>a-oa(e,o,x,v),c=a-(o.type==="pool"?0:o.slope??0),h=jn(o.type)&&o.height?o.height:Bo[o.type],u={...ZS[o.type],top:h},f=pa(o.points),d=Ut(u.edge,u.edgeAlpha),p=o.open&&(o.type==="fence"||o.type==="pergola")?f.length-1:-1,g=x=>{if(o.outline!==!1)for(let v=0;v<f.length;v++){if(v===p)continue;let y=f[v],M=f[(v+1)%f.length];t.seg([y[0],x(y[0],y[1]),y[1]],[M[0],x(M[0],M[1]),M[1]],d,te)}},b=n??i,m=new K(n?1734832:u.color);switch(o.type){case"pool":{let x=new K(u.side),v=new K(Ut(u.side,.55)),y=new K(932440),M=Kc(e,o),w=qc(e,o),T=A0(e,o);for(let[_,E,R]of bn(f)){let S=f[_],P=f[E],k=f[R];(n?b:i).tri([S[0],M,S[1]],[k[0],M,k[1]],[P[0],M,P[1]],m,m,m,void 0,te),i.tri([S[0],T,S[1]],[k[0],T,k[1]],[P[0],T,P[1]],y,y,y,void 0,te)}for(let _=0;_<f.length;_++){let E=f[_],R=f[(_+1)%f.length];i.tri([R[0],T,R[1]],[R[0],w,R[1]],[E[0],w,E[1]],v,x,x,void 0,te),i.tri([R[0],T,R[1]],[E[0],w,E[1]],[E[0],T,E[1]],v,x,v,void 0,te)}if(!o.above&&Cf(e,o)){let _=new K(660258),E=new K(396054),R=T-.2,S=Math.min(a,w);for(let P=0;P<f.length;P++){let k=f[P],D=f[(P+1)%f.length];i.tri([k[0],R,k[1]],[k[0],S,k[1]],[D[0],S,D[1]],E,_,_,void 0,te),i.tri([k[0],R,k[1]],[D[0],S,D[1]],[D[0],R,D[1]],E,_,E,void 0,te)}for(let[P,k,D]of bn(f)){let U=f[P],A=f[k],I=f[D];i.tri([U[0],R,U[1]],[A[0],R,A[1]],[I[0],R,I[1]],E,E,E,void 0,te)}if(o.outline!==!1)for(let P=0;P<f.length;P++){let k=f[P],D=f[(P+1)%f.length];t.seg([k[0],R,k[1]],[D[0],R,D[1]],Ut(u.edge,u.edgeAlpha*.35),te),t.seg([k[0],R,k[1]],[k[0],S,k[1]],Ut(u.edge,u.edgeAlpha*.25),te)}}if(w>a+.02){let _=new K(2044240),E=new K(1187123);for(let R=0;R<f.length;R++){let S=f[R],P=f[(R+1)%f.length];i.tri([S[0],a,S[1]],[S[0],w,S[1]],[P[0],w,P[1]],E,_,_,void 0,te),i.tri([S[0],a,S[1]],[P[0],w,P[1]],[P[0],a,P[1]],E,_,E,void 0,te)}g(()=>a+.005)}if(g(()=>w),g(()=>M+.005),o.outline!==!1)for(let _=0;_<f.length;_++){let E=f[_],R=f[(_+1)%f.length];t.seg([E[0],T+.005,E[1]],[R[0],T+.005,R[1]],Ut(u.edge,u.edgeAlpha*.4),te)}break}case"fence":{for(let x=0;x<f.length;x++){if(x===p)continue;let v=f[x],y=f[(x+1)%f.length],M=Math.hypot(y[0]-v[0],y[1]-v[1]),w=Math.max(1,Math.round(M/2)),T=p>=0&&x===p-1?w:w-1;for(let _=0;_<=T;_++){let E=_/w,R=v[0]+(y[0]-v[0])*E,S=v[1]+(y[1]-v[1])*E,P=l(R,S);Fe(i,pa([[R-.04,S-.04],[R+.04,S-.04],[R+.04,S+.04],[R-.04,S+.04]]),P,P+u.top,u.side,u.color)}for(let _ of[.35,.85])t.seg([v[0],l(v[0],v[1])+_*u.top,v[1]],[y[0],l(y[0],y[1])+_*u.top,y[1]],d,te)}break}case"pergola":{let x=u.top;for(let[v,y]of f){let M=l(v,y);Fe(i,pa([[v-.06,y-.06],[v+.06,y-.06],[v+.06,y+.06],[v-.06,y+.06]]),M,M+x,u.side,u.color)}for(let v=0;v<f.length;v++){if(v===p)continue;let y=f[v],M=f[(v+1)%f.length],w=l(y[0],y[1])+x;if(jg(i,y,M,.12,w-.16,w,u.side,u.color,l(M[0],M[1])-l(y[0],y[1])),o.bracing){let T=l(y[0],y[1]),_=l(M[0],M[1]);t.seg([y[0],T+.25,y[1]],[M[0],_+x-.25,M[1]],d,te),t.seg([M[0],_+.25,M[1]],[y[0],T+x-.25,y[1]],d,te)}}if(U0(f)){let v=B0(f),y=v.x1-v.x0,M=v.z1-v.z0,w=y>=M,T=w?y:M,_=Math.max(1,Math.round(T/.6));for(let E=1;E<_;E++){let R=(w?v.x0:v.z0)+T*E/_,S=w?[R,v.z0+.06]:[v.x0+.06,R],P=w?[R,v.z1-.06]:[v.x1-.06,R],k=l(S[0],S[1])+x;jg(i,S,P,.06,k-.04,k+.08,u.side,u.color,l(P[0],P[1])-l(S[0],S[1]))}}g((v,y)=>l(v,y)+x+.004);break}case"balcony":{Fe(i,f,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),g(()=>a+u.top+.004);let v=o.height&&o.height>.3?o.height:1,y=Ut(9417983,.42),M=Ut(3662079,.55);for(let w=0;w<f.length;w++){let T=f[w],_=f[(w+1)%f.length];if(jS(e,T,_))continue;let E=Math.hypot(_[0]-T[0],_[1]-T[1]),R=a+u.top;t.seg([T[0],R+v,T[1]],[_[0],R+v,_[1]],M,te),t.seg([T[0],R+.1,T[1]],[_[0],R+.1,_[1]],y,te);let S=Math.max(1,Math.round(E/.12));for(let P=0;P<=S;P++){let k=P/S,D=T[0]+(_[0]-T[0])*k,U=T[1]+(_[1]-T[1])*k;t.seg([D,R,U],[D,R+v,U],P===0||P===S?M:y,te)}}break}default:{let x=(y,M)=>l(y,M)+u.top,v=JS(r,s);if(Fe(i,f,c,o.slope?x:a+u.top,u.side,u.color,{aoFrom:c,holes:v}),g((y,M)=>x(y,M)+.004),o.type==="hedge"&&g((y,M)=>l(y,M)+.004),o.outline!==!1)for(let y of v)for(let M=0;M<y.length;M++){let w=y[M],T=y[(M+1)%y.length];t.seg([w[0],x(w[0],w[1])+.004,w[1]],[T[0],x(T[0],T[1])+.004,T[1]],d,te)}}}})}var hu=Math.PI/180,QS=1.13,tT=1.72,sd=.025,Xr=.07,tb=.25;function eb(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=gi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,h=-s/l,u=Math.min(n.height,o.height??n.height),f=o.sources.find(g=>g.room_id===o.roomLeft)?.edge??null,d={floorId:n.id,room:o.roomLeft,edge:f,free:!!o.free},p=(g,b,m,x)=>e.push({key:g,section:null,side:"top",flat:!1,o:b,eu:m,es:[0,1,0],n:x,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:d});p(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+h*o.right],[s/l,0,a/l],[c,0,h]),o.free&&p(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-h*o.left],[-s/l,0,-a/l],[-c,0,-h])}}return e}var ad="ground";function Yr(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function nb(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],o=Yr(i),s=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=o?o.elevation+(t.base!=null?t.base:Wc(o,s,a)):t.base??0;return{key:ad,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function eT(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function qr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(x=>nT(x,nu(i,x,x.overhang??t.overhang)));let e=eT(i);if(!e)return[];let n=e.rooms.flatMap(x=>x.points.map(v=>v[0])),r=e.rooms.flatMap(x=>x.points.map(v=>v[1])),o=i.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,h=e.elevation+e.height;if(t.type==="flat")return[ib("main",null,s,l,a,c,h+tb)];let u=a-s>=c-l,f=t.ridge==="short"?!u:u,d=(f?c-l:a-s)/2,p=d*Math.tan(t.pitch*hu),g=(x,v,y)=>f?[x,h+y,(l+c)/2+v]:[(s+a)/2+v,h+y,x],[b,m]=f?[s,a]:[l,c];return[-1,1].map(x=>uu(`main:${x<0?"a":"b"}`,null,x<0?"a":"b",g(b,x*d,0),g(m,x*d,0),g(b,0,p),t.pitch,()=>[0,m-b]))}function nT(i,t){let e=cn(i),n=ln(i),r=(v,y,M)=>{let[w,T]=e.at(v,y);return[w,M,T]},o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let v=e.at(a,-o),y=e.at(l,e.w+s);return[ib(i.id,i.id,Math.min(v[0],y[0]),Math.min(v[1],y[1]),Math.max(v[0],y[0]),Math.max(v[1],y[1]),i.eave_a+tb)]}if(i.shape==="pent")return[uu(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,e.w+s,n.y(e.w+s)),i.pitch_a,()=>[0,c])];let h=eu(i),u=h?zf(i,h):null,f=i.shape==="pyramid"||h?.[0]==="hip",d=i.shape==="pyramid"||h?.[1]==="hip",p=i.shape==="pyramid"?(e.u1-e.u0)/2:f?u.d0:0,g=i.shape==="pyramid"?(e.u1-e.u0)/2:d?u.d1:0,b=f?e.u0+p-a:0,m=d?l-(e.u1-g):0,x=[];if(n.vr>.3){let v=Math.hypot(n.vr+o,n.rh-n.y(-o));x.push(uu(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,n.vr,n.rh),i.pitch_a,y=>[b*(y/v),c-m*(y/v)]))}if(e.w-n.vr>.3){let v=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));x.push(uu(`${i.id}:b`,i.id,"b",r(l,e.w+s,n.y(e.w+s)),r(a,e.w+s,n.y(e.w+s)),r(l,n.vr,n.rh),i.pitch_b,y=>[m*(y/v),c-b*(y/v)]))}if(f||d){let v=n.y(-o),y=n.y(e.w+s),M=[];f&&M.push([`${i.id}:c`,"c",r(a,e.w+s,y),r(a,-o,v),r(e.u0+p,n.vr,n.rh)]),d&&M.push([`${i.id}:d`,"d",r(l,-o,v),r(l,e.w+s,y),r(e.u1-g,n.vr,n.rh)]);for(let[w,T,_,E,R]of M){let S=iT(w,i.id,T,_,E,R);S&&x.push(S)}}return x}function iT(i,t,e,n,r,o){let s=ma($r(r,n));if(s<.3)return null;let a=fr($r(r,n)),l=$r(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=ma(h);if(u<.3)return null;let f=fr(h),d=fr(sb(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=fr([-f[0],0,-f[2]]),g=Math.atan2(f[1],Math.hypot(f[0],f[2]))/hu;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:s,ls:u,pitch:g,span:m=>{let x=Math.min(1,Math.max(0,m/u));return[c*x,s-(s-c)*x]},facing:[p[0],p[2]]}}function uu(i,t,e,n,r,o,s,a){let l=fr($r(r,n)),c=fr($r(o,n)),h=fr(sb(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=fr([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:h,lu:ma($r(r,n)),ls:ma($r(o,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function ib(i,t,e,n,r,o,s){let a=r-e>=o-n,l=a?r-e:o-n,c=a?o-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function rb(i){let t=i.module_w||QS,e=i.module_h||tT;return i.portrait===!1?[e,t]:[t,e]}function rT(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function ob(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*hu:i.wall?Math.min(90,Math.max(0,t.tilt??0))*hu:0}function oT(i,t){let[,e]=rb(t),n=ob(i,t);return i.wall?e*Math.cos(n)+sd:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+sd}function ga(i,t,e=!1){let[n,r]=rb(t),o=[],s=ob(i,t),a=r*Math.cos(s),l=oT(i,t),c=rT(t),h=Math.max(1,...c),u=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(g,b,m)=>[i.o[0]+i.eu[0]*g+i.es[0]*b+i.n[0]*m,i.o[1]+i.eu[1]*g+i.es[1]*b+i.n[1]*m,i.o[2]+i.eu[2]*g+i.es[2]*b+i.n[2]*m],p=(g,b)=>{if(i.unbounded)return!0;if(b<-1e-6||b>i.ls+1e-6)return!1;let[m,x]=i.span(b);return g>=m-1e-6&&g<=x+1e-6};return c.forEach((g,b)=>{let m=t.align==="right"?h-g:t.align==="center"?(h-g)/2:0;for(let x=0;x<g;x++){let v=`${b}:${x}`,y=u.has(v);if(y&&!e)continue;let M=t.u+(x+m)*(n+sd),w=t.v+b*l,T=M+n,_=w+(i.flat||i.wall?a:r);if(f){if(!(p((M+T)/2,w)&&p((M+T)/2,_)))continue}else if(![[M,w],[T,w],[T,_],[M,_]].every(([D,U])=>p(D,U)))continue;if(i.wall&&s>.001){let D=Xr+r*Math.sin(s),[U,A]=t.flip?[D,Xr]:[Xr,D],I=[d(M,w,U),d(T,w,U),d(T,_,A),d(M,_,A)],O=t.flip?w:_,C=[M+.05,T-.05].map(B=>[d(B,O,0),d(B,O,D)]);o.push({corners:I,posts:C,cell:v,skipped:y});continue}if(!i.flat){o.push({corners:[d(M,w,Xr),d(T,w,Xr),d(T,_,Xr),d(M,_,Xr)],posts:[],cell:v,skipped:y});continue}let E=.15,R=E+r*Math.sin(s),[S,P]=t.flip?[_,w]:[w,_],k=[d(M,S,E),d(T,S,E),d(T,P,R),d(M,P,R)];o.push({corners:k,posts:[M+.05,T-.05].flatMap(D=>[[d(D,S,0),d(D,S,E)],[d(D,P,0),d(D,P,R)]]),cell:v,skipped:y})}}),o}function $r(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function ma(i){return Math.hypot(i[0],i[1],i[2])}function fr(i){let t=ma(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function sb(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var sT=.78,aT=1.18;function lT(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||sT,module_h:i.h||aT}}function fu(i,t){let e=ga(i,lT(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function du(i,t,e){let n=t?fu(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,o=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>o)continue;let l=a.rooms.find(c=>jt([r,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var ba=1712952,xa=2239816,ub=1318193,dr=Ut(3662079,.9),ts=Ut(5995775,.45),en=.14,cT=9427199,uT=13226982,hT=14936565,fT={black:{glass:new K(329483),edge:Ut(9082544,.32),cells:Ut(2766160,.22)},blue:{glass:new K(1386842),edge:Ut(10467583,.55),cells:Ut(4025599,.35)}},dT=Ut(13226982,.5),pT=Ut(13226982,.85),mT=Ut(16757575,.95),ab=new K(2845583),lb=new K(1713986),gT=new K(3662079).multiplyScalar(.35),cb=new K(4871791);function bT(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function hb(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:vT(i),r=e?.type==="custom"?_T(i,e.sections??[],e.overhang):n?[n]:[];return yT(i,r),xT(i,r,t),r}function xT(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(qr(i).map(o=>[o.key,o]));for(let o of n){let s=r.get(o.face),a=s?fu(s,o):null;if(!s||!a)continue;let l=s.section?t.find(A=>A.sections?.includes(s.section)):t[0];if(!l)continue;let c=o.float?du(i,s,o):null,h=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,u=h?h.elevation:l.floor.elevation+l.base,f=A=>[A[0],A[1]-u,A[2]],[d,p,g,b]=a.map(f),m=e.get(o.id)??{open:0,tilt:0,cover:0},x=!!c&&(h!==null||c.floor.id===l.floor.id),v=h?(l.winBelow??=new Map).get(h.id)??l.winBelow.set(h.id,{floor:h,solid:new Jt,lines:new Le,glass:new Jt}).get(h.id):x?l.win??={solid:new Jt,lines:new Le,glass:new Jt}:l.winRoof??={solid:new Jt,lines:new Le,glass:new Jt},y=(A,I)=>[A[0]+s.n[0]*I,A[1]+s.n[1]*I,A[2]+s.n[2]*I],M=(A,I,O)=>[A[0]+(I[0]-A[0])*O,A[1]+(I[1]-A[1])*O,A[2]+(I[2]-A[2])*O],w=m.open>.02||m.tilt>.02?mT:pT,T=[d,p,g,b].map(A=>y(A,.06)),_=[d,p,g,b].map(A=>y(A,-.02));for(let A=0;A<4;A++){v.lines.seg(T[A],T[(A+1)%4],w);let I=(A+1)%4;v.solid.tri(_[A],_[I],T[I],cb),v.solid.tri(_[A],T[I],T[A],cb)}let E=(m.open>.02?30*Math.min(1,m.open):m.tilt>.5?12:0)*Qt,R=Math.hypot(g[0]-p[0],g[1]-p[1],g[2]-p[2]),S=A=>{let I=s.es;return[A[0]-I[0]*R*Math.cos(E)+s.n[0]*R*Math.sin(E),A[1]-I[1]*R*Math.cos(E)+s.n[1]*R*Math.sin(E),A[2]-I[2]*R*Math.cos(E)+s.n[2]*R*Math.sin(E)]},P=y(b,.065),k=y(g,.065),D=S(P),U=S(k);v.glass.tri(D,U,k,ab),v.glass.tri(D,k,P,ab);for(let[A,I]of[[D,U],[U,k],[k,P],[P,D]])v.lines.seg(A,I,w);if(m.cover>.02){let A=Math.min(1,m.cover),I=y(M(P,D,A),.01),O=y(M(k,U,A),.01),C=y(P,.01),B=y(k,.01);v.solid.tri(I,O,B,lb),v.solid.tri(I,B,C,lb);let z=Math.max(1,Math.round(R*A/.05));for(let W=1;W<=z;W++){let V=W/z;v.lines.seg(y(M(C,I,V),.004),y(M(B,O,V),.004),gT)}}}}function yT(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(qr(i).map(r=>[r.key,r]));for(let r of e){let o=n.get(r.face);if(!o)continue;let s=o.section?t.find(a=>a.sections?.includes(o.section)):t[0];s&&ld(s.solid,s.lines,o,r,s.floor.elevation+s.base)}}function ld(i,t,e,n,r){let o=c=>[c[0],c[1]-r,c[2]],s=fT[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of ga(e,n)){let[h,u,f,d]=c.corners.map(o);i.tri(h,u,f,s.glass),i.tri(h,f,d,s.glass),i.tri(h,f,u,s.glass),i.tri(h,d,f,s.glass);let p=(m,x=.004)=>[m[0]+e.n[0]*x,m[1]+e.n[1]*x,m[2]+e.n[2]*x],g=(m,x,v)=>[m[0]+(x[0]-m[0])*v,m[1]+(x[1]-m[1])*v,m[2]+(x[2]-m[2])*v],b=[h,u,f,d].map(m=>p(m));for(let m=0;m<4;m++)t.seg(b[m],b[(m+1)%4],s.edge);for(let m=1;m<a;m++)t.seg(p(g(h,u,m/a)),p(g(d,f,m/a)),s.cells);for(let m=1;m<l;m++)t.seg(p(g(h,d,m/l)),p(g(u,f,m/l)),s.cells);for(let[m,x]of c.posts)t.seg(o(m),o(x),dT)}}function vT(i){let t=i.settings.roof,e=bT(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(R=>R.points.map(S=>S[0])),r=e.rooms.flatMap(R=>R.points.map(S=>S[1])),o=i.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,h=new Jt,u=new Le;if(t.type==="flat"){Fe(h,[[s,l],[a,l],[a,c],[s,c]],0,.25,ba,xa,{bottom:!0});let R=.252;for(let[S,P]of[[[s,l],[a,l]],[[a,l],[a,c]],[[a,c],[s,c]],[[s,c],[s,l]]])u.seg([S[0],R,S[1]],[P[0],R,P[1]],dr),u.seg([S[0],0,S[1]],[P[0],0,P[1]],ts);return{floor:e,base:e.height,solid:h,lines:u,glass:new Jt}}let f=a-s>=c-l,d=t.ridge==="short"?!f:f,p=(d?c-l:a-s)/2,g=p*Math.tan(t.pitch*Qt),b=(R,S,P)=>d?[R,P,(l+c)/2+S]:[(s+a)/2+S,P,R],[m,x]=d?[s,a]:[l,c],v=new K(xa),y=new K(ba),M=(R,S,P,k,D)=>{h.tri(R,S,P,D),h.tri(R,P,k,D)};for(let R of[-1,1]){M(b(m,R*p,0),b(x,R*p,0),b(x,0,g),b(m,0,g),v),M(b(m,R*p,-en),b(m,0,g-en),b(x,0,g-en),b(x,R*p,-en),y),M(b(m,R*p,-en),b(x,R*p,-en),b(x,R*p,0),b(m,R*p,0),y);for(let S of[m,x])M(b(S,R*p,-en),b(S,R*p,0),b(S,0,g),b(S,0,g-en),y);u.seg(b(m,R*p,0),b(x,R*p,0),ts);for(let S of[m,x])u.seg(b(S,R*p,0),b(S,0,g),ts)}let w=t.overhang,T=new K(ub),_=p-w,E=_*Math.tan(t.pitch*Qt);for(let R of[m+w,x-w])h.tri(b(R,-_,-en),b(R,_,-en),b(R,0,E-en),T),h.tri(b(R,_,-en),b(R,-_,-en),b(R,0,E-en),T);return u.seg(b(m,0,g+.004),b(x,0,g+.004),dr),{floor:e,base:e.height,solid:h,lines:u,glass:new Jt}}function _T(i,t,e){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,o=new Map(qr(i).map(l=>[l.key,l])),s=t.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(s.map(l=>{let c=Br(t,l),h=c?null:ng(t,l),u=c?Vf(c,l):h?rg(l,h):l,f=nu(i,c?u:l,u.overhang??e),d=h?{...f,[h.end===0?"u0":"u1"]:0}:f,p=!u.open&&u.shape!=="flat"&&u.shape!=="parapet";return[l,{parent:c,junction:h,drawn:u,ov:d,covers:p?tg(u,zr(u,d).faces):[]}]}));for(let l of s){let c=a.get(l),h=Z0(i,l)??n[0],u=l.open?`${h.id}:open`:h.id,f=r.get(u);f||r.set(u,f={floor:h,base:0,solid:new Jt,lines:new Le,glass:new Jt,sections:[],lift:!l.open}),f.sections.push(l.id);let d=c.parent,p=[(l.x0+l.x1)/2,(l.z0+l.z1)/2],g=n.some(w=>w.elevation>h.elevation&&w.elevation<=l.base+.5&&w.elevation+w.height>l.base&&w.rooms.some(T=>jt(p,T.points))),b=h.elevation+h.height>l.base+.05&&!l.dormer&&!d||g,m=t.filter(w=>w!==l&&Br(t,w)===l).flatMap(w=>K0(l,w));for(let w of i.settings.roof.windows??[]){let T=o.get(w.face),_=T&&T.section===l.id?fu(T,w):null;if(!_)continue;let E=_.map(R=>xi(l,R[0],R[2]));m.push({u0:Math.min(...E.map(R=>R[0])),u1:Math.max(...E.map(R=>R[0])),v0:Math.min(...E.map(R=>R[1])),v1:Math.max(...E.map(R=>R[1]))})}let x=c.drawn,v=c.junction?1-c.junction.end:null;if(d){let w=cn(x),T=zr(d,{u0:0,u1:0,a:0,b:0}),_=E=>{let[R,S]=w.at(E,w.w/2),[P,k]=xi(d,R,S);return ca(T,P,k)??ln(d).y(k)};v=_(w.u0)<=_(w.u1)?0:1}let y=s.filter(w=>eg(t,l,w)),M=y.length?{covers:Wf(x,y.flatMap(w=>a.get(w).covers)),lines:Wf(x,y.filter(w=>s.indexOf(w)>s.indexOf(l)).flatMap(w=>a.get(w).covers)),wallU:c.junction?[cn(l).u0,cn(l).u1]:null}:null;MT(f.solid,f.lines,x,c.ov,h.elevation,f.glass,b,m,v,M)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function MT(i,t,e,n,r,o=i,s=!1,a=[],l=null,c=null){let h=cn(e),u=ln(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,f.a),p=Math.max(0,f.b),g=h.w,b=h.u0-Math.max(0,f.u0),m=h.u1+Math.max(0,f.u1),x=(A,I,O)=>{let[C,B]=h.at(A,I);return[C,O-r,B]},v=new K(xa),y=new K(ba),M=new K(ub),w=(A,I)=>{for(let O=1;O+1<A.length;O++)i.tri(A[0],A[O],A[O+1],I)},T=[],_=[],E=[],R=[null,null],S=[];if(e.shape==="flat"||e.shape==="parapet"){let A=e.eave_a,I=e.shape==="parapet",O=e.points&&e.points.length>=3?$0(e,I?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):I?[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,g),h.at(h.u0,g)]:[h.at(b,-d),h.at(m,-d),h.at(m,g+p),h.at(b,g+p)];Fe(i,O,A-r,A-r+.25,ba,xa,{bottom:!0});for(let C=0;C<O.length;C++){let B=O[C],z=O[(C+1)%O.length];t.seg([B[0],A-r+.252,B[1]],[z[0],A-r+.252,z[1]],dr),t.seg([B[0],A-r,B[1]],[z[0],A-r,z[1]],ts)}if(I){let C=V=>Jn(V)>=0?V:[...V].reverse(),B=C(O),z=tu(B,-.2),W=B.length;for(let V=0;V<W;V++){let Y=C([B[V],B[(V+1)%W],z[(V+1)%W],z[V]]);Fe(i,Y,A-r+.25,A-r+.65,ba,xa),t.seg([B[V][0],A-r+.652,B[V][1]],[B[(V+1)%W][0],A-r+.652,B[(V+1)%W][1]],dr),t.seg([z[V][0],A-r+.652,z[V][1]],[z[(V+1)%W][0],A-r+.652,z[(V+1)%W][1]],dr)}}}else{let A=zr(e,f);T=A.faces;for(let I of a)T=T.flatMap(O=>Gf(O,I));if(_=A.rim,E=A.ridges,R=A.gables,c){for(let I of T)for(let O of c.lines){let C=Q0(I,O.poly);if(C)for(let[B,z]of Hf(C[0],C[1],c.covers.filter(W=>W!==O)))S.push([B,z])}T=T.flatMap(I=>J0(I,c.covers))}}let P=!!e.open,k=new K(cT);for(let A of T){if(P){for(let I=1;I+1<A.length;I++)o.tri(x(A[0][0],A[0][1],A[0][2]),x(A[I][0],A[I][1],A[I][2]),x(A[I+1][0],A[I+1][1],A[I+1][2]),k);continue}w(A.map(([I,O,C])=>x(I,O,C)),v),w(A.map(([I,O,C])=>x(I,O,C-en)),y)}let D=(A,I)=>c?Hf(A,I,c.covers):[[A,I]];for(let A=0;A<_.length;A++)for(let[[I,O,C],[B,z,W]]of D(_[A],_[(A+1)%_.length]))P||w([x(I,O,C),x(B,z,W),x(B,z,W-en),x(I,O,C-en)],y),t.seg(x(I,O,C),x(B,z,W),P?dr:ts);if(P){wT(i,t,h,u,f,x,r);return}for(let[A,I]of E)for(let[[O,C,B],[z,W,V]]of D(A,I))t.seg(x(O,C,B+.004),x(z,W,V+.004),dr);for(let[[A,I,O],[C,B,z]]of S)t.seg(x(A,I,O+.004),x(C,B,z+.004),dr);let U=e.base;if(!s){for(let A of[0,1]){let I=R[A];if(!I||l!==null&&l!==A)continue;let O=ST(I,U-en),C=A===0?h.u0:h.u1;O.length>=3&&w(O.map(([B,z])=>x(C,B,z)),M)}if(e.shape!=="flat"&&e.shape!=="parapet"){let[A,I]=c?.wallU??[h.u0,h.u1];for(let O of[0,g]){let C=u.y(O)-en;C>U+.02&&w([x(A,O,U),x(I,O,U),x(I,O,C),x(A,O,C)],M)}}else if(e.eave_a>U+.02)for(let[A,I,O,C]of[[h.u0,0,h.u1,0],[h.u1,0,h.u1,g],[h.u1,g,h.u0,g],[h.u0,g,h.u0,0]])w([x(A,I,U),x(O,C,U),x(O,C,e.eave_a),x(A,I,e.eave_a)],M)}}function wT(i,t,e,n,r,o,s){let a=e.w,l=.12,c=.16,h=r.a>0,u=r.b>0,f=r.u0>0,d=r.u1>0,p=(m,x,v,y,M,w)=>{let T=[e.at(m,v),e.at(x,v),e.at(x,y),e.at(m,y)],_=(T[1][0]-T[0][0])*(T[2][1]-T[0][1])-(T[2][0]-T[0][0])*(T[1][1]-T[0][1]);Fe(i,_<0?[...T].reverse():T,M-s,w-s,uT,hT,{bottom:!0})},g=s;for(let[m,x]of[[0,h],[a,u]]){if(!x)continue;let v=n.y(m)-.03,y=m===0?0:a-l;p(e.u0,e.u1,y,y+l,v-c,v),t.seg(o(e.u0,m,v-c),o(e.u1,m,v-c),ts)}for(let[m,x]of[[e.u0,f],[e.u1-l,d]])if(x)for(let v=0;v<6;v++){let y=a*v/6,M=a*(v+1)/6,w=Math.min(n.y(y),n.y(M))-.03;p(m,m+l,y,M,w-c,w)}let b=[];for(let[m,x]of[[0,h],[a-l,u]]){if(!x)continue;let v=e.u1-e.u0-l,y=Math.max(1,Math.ceil(v/3.5));for(let M=0;M<=y;M++){let w=e.u0+v*M/y;M===0&&!f||M===y&&!d||b.push([w,m])}}if(!h&&!u)for(let m of[e.u0,e.u1-l])(m===e.u0&&f||m!==e.u0&&d)&&b.push([m,a/2-l/2]);for(let[m,x]of b){let v=n.y(x+l/2)-.03-c;p(m,m+l,x,x+l,g,v)}}function ST(i,t){let e=[];for(let o=0;o<i.length;o++){let[s,a]=i[o];a>=t&&e.push([s,a]);let l=i[o+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([s+(l[0]-s)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var ya={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},pr={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},wa={wood:9067062,oak:12886644,tiles:13619146,carpet:11445651,stone:11117724,concrete:10329498},sn=.2,TT=-.06,AT=.01,va=8,pu=.42,cd=.42;function mb(i,t,e,n=[],r=[],o){let{walls:s,open:a}=gi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(A,I,O,C)=>{let B=C?.slope?Math.min(O,Lf(C.slope,A,I)):O,z=o?o(A,I):null;return z===null?B:Math.max(.05,Math.min(B,z))},c=(A,I)=>{let O=o?o(A,I):null;return O!==null&&O<TT},h=(A,I,O,C,B,z)=>{if(!o&&!z?.slope)return B;let W=B,V=Math.max(2,Math.ceil((C-O)/.25)+1);for(let Y=0;Y<V;Y++){let et=O+(C-O)*Y/(V-1);W=Math.min(W,l(A[0]+I[0]*et,A[1]+I[1]*et,B,z))}return W},u=new Jt(!0,!0),f=[],d=new Le,p=[];for(let A of i.rooms){if(A.points.length<3)continue;let I=mu(A.points),O=pr[A.floor_material]??pr.wood,C=new K(O.color),B=n.flatMap(nt=>{if(cg(nt,I))return[nt];if(!sg(nt))return[];let $=Wo(I,nt);return $.length>=3&&Math.abs(Jn($))>.01?[mu($)]:[]}),z=lg(B).map(nt=>ug(mu(nt),.003));p.push(...z);let W=[...I,...z.flat()],V=u.count;for(let[nt,$,H]of bn(I,z)){let J=W[nt],ot=W[$],Q=W[H];u.tri([J[0],0,J[1]],[Q[0],0,Q[1]],[ot[0],0,ot[1]],C,C,C,[J[0],J[1],Q[0],Q[1],ot[0],ot[1]],te,O.tile)}f.push({roomId:A.id,start:V,end:u.count,color:O.color});let Y=new K(ya.slab),et=nt=>{for(let $=0;$<nt.length;$++){let H=nt[$],J=nt[($+1)%nt.length];u.tri([H[0],-sn,H[1]],[H[0],0,H[1]],[J[0],0,J[1]],Y),u.tri([H[0],-sn,H[1]],[J[0],0,J[1]],[J[0],-sn,J[1]],Y)}};et(I);for(let nt of z){et([...mu(nt)].reverse());for(let $=0;$<nt.length;$++){let H=nt[$],J=nt[($+1)%nt.length];d.seg([H[0],.006,H[1]],[J[0],.006,J[1]],cr),d.seg([H[0],-sn,H[1]],[J[0],-sn,J[1]],Ii)}}}let g=new Map,b=[],m=new Map,x=new Map;for(let A of s){if(!A.free)continue;let I=G0(A,i.rooms);I!==null&&x.set(A,I)}for(let A of s){let I="interior",O=null,C=x.get(A);if(A.exterior||C!==void 0){let z=A.b[0]-A.a[0],W=A.b[1]-A.a[1],V=Math.hypot(z,W)||1,Y=C===!1?-1:1,et=[Y*W/V,-Y*z/V],nt=(Math.round(Math.atan2(et[1],et[0])/(2*Math.PI)*va)%va+va)%va;I=`s${nt}`;let $=nt/va*2*Math.PI;O=[Math.cos($),Math.sin($)]}let B=g.get(I);B===void 0&&(B=b.length,g.set(I,B),b.push(O)),m.set(A,B)}let v=new Map,y=[];for(let A of i.openings){let I=Vo(A,i.rooms,i.walls??[]);if(!I)continue;let O=Go(s,A,I);if(!O)continue;let{wall:C,s:B}=O,z=bu([C.b[0]-C.a[0],C.b[1]-C.a[1]]),W=Math.hypot(C.b[0]-C.a[0],C.b[1]-C.a[1]),V=B-A.width/2<-1e-6?kf(s,C,!1):null,Y=B+A.width/2>W+1e-6?kf(s,C,!0):null,et=ie=>ie?Math.hypot(ie.b[0]-ie.a[0],ie.b[1]-ie.a[1]):0,nt=-et(V),$=W+et(Y),H=Math.min(A.width,$-nt),J=Math.max(nt,Math.min($-H,B-H/2)),ot=I.room.points,Q=x.get(C),bt=C.free?Q??z[0]*(ot[1][0]-ot[0][0])+z[1]*(ot[1][1]-ot[0][1])>0:C.exterior||C.roomLeft===A.room_id,gt=[-z[1],z[0]],ut=bt?gt:[-gt[0],-gt[1]],ft=Math.min(h(C.a,z,J,J+H,_a(C,i.height),C)-.02,A.sill+A.height),Lt=Math.max(0,Math.min(A.sill,ft-.1)),mt=[ut[1],-ut[0]],$t=z[0]*mt[0]+z[1]*mt[1]>0,he={opening:A,bucket:m.get(C),start:[C.a[0]+z[0]*J,C.a[1]+z[1]*J],axis:z,width:H,toRoom:ut,faceRoom:bt?C.left:C.right,faceOut:bt?C.right:C.left,sill:Lt,top:ft,hingeAtStart:A.hinge==="left"===$t,exterior:C.exterior||Q!==void 0};y.push(he);let Re=v.get(C);Re||v.set(C,Re=[]),Re.push({s0:J,s1:J+H,sill:Lt,top:ft,info:he});for(let ie of[V,Y]){if(!ie)continue;let xe=G=>(C.a[0]+z[0]*G-ie.a[0])*z[0]+(C.a[1]+z[1]*G-ie.a[1])*z[1],Z=Math.max(0,xe(J)),Ke=Math.min(et(ie),xe(J+H));if(Ke-Z<1e-4)continue;let ge=v.get(ie);ge||v.set(ie,ge=[]),ge.push({s0:Z,s1:Ke,sill:Lt,top:ft,info:he,cont:!0})}}let M=Math.min(i.cut_height,i.height),w=new Jt;for(let A of s){let I=m.get(A),O=bu([A.b[0]-A.a[0],A.b[1]-A.a[1]]),C=(v.get(A)??[]).sort((H,J)=>H.s0-J.s0),B=_a(A,i.height),z=[],W=[-1/0,...new Set(C.flatMap(H=>[H.s0,H.s1])).values(),1/0].sort((H,J)=>H-J);for(let H=0;H+1<W.length;H++){let J=W[H],ot=W[H+1];if(ot-J<1e-6)continue;let Q=Number.isFinite(J)&&Number.isFinite(ot)?(J+ot)/2:Number.isFinite(J)?J+1:ot-1,bt=C.filter(ft=>ft.s0<Q&&ft.s1>Q).map(ft=>[ft.sill,ft.top]).sort((ft,Lt)=>ft[0]-Lt[0]),gt=[],ut=-sn;for(let[ft,Lt]of bt)ft>ut+1e-4&&gt.push([ut,ft<1e-4?-AT:ft]),ut=Math.max(ut,Lt);B>ut+1e-4&&gt.push([ut,B]),z.push({t0:J,t1:ot,ranges:gt})}let V=Math.hypot(A.b[0]-A.a[0],A.b[1]-A.a[1]),Y=(o||A.slope)&&h(A.a,O,0,V,B,A)<B-.001,et=Y?z.flatMap(H=>{let J=Math.max(H.t0,-.5),ot=Math.min(H.t1,V+.5),Q=Math.max(1,Math.ceil((ot-J)/.3));return Array.from({length:Q},(bt,gt)=>({t0:gt===0?H.t0:J+(ot-J)*gt/Q,t1:gt===Q-1?H.t1:J+(ot-J)*(gt+1)/Q,ranges:H.ranges,inner0:gt>0,inner1:gt<Q-1}))}):z.map(H=>({...H,inner0:!1,inner1:!1})),nt=H=>(H[0]-A.a[0])*O[0]+(H[1]-A.a[1])*O[1],$=H=>{if(!o)return[H];let J=ud(A.footprint,A.a,O,H.t0,H.t1),ot=J.filter(([ut,ft])=>c(ut,ft)).length;if(ot===0)return[H];if(ot===J.length)return[];let Q=Math.max(H.t0,-.5),bt=Math.min(H.t1,V+.5),gt=Math.max(1,Math.ceil((bt-Q)/.05));return Array.from({length:gt},(ut,ft)=>({t0:ft===0?H.t0:Q+(bt-Q)*ft/gt,t1:ft===gt-1?H.t1:Q+(bt-Q)*(ft+1)/gt,ranges:H.ranges,inner0:ft>0||H.inner0,inner1:ft<gt-1||H.inner1})).filter(ut=>!ud(A.footprint,A.a,O,ut.t0,ut.t1).every(([ft,Lt])=>c(ft,Lt)))};for(let H of Y?et.flatMap($):et){let J=ud(A.footprint,A.a,O,H.t0,H.t1);if(J.length<3)continue;let ot=(gt,ut)=>Math.abs(nt(gt)-ut)<1e-4,Q=(gt,ut)=>H.inner0&&ot(gt,H.t0)&&ot(ut,H.t0)||H.inner1&&ot(gt,H.t1)&&ot(ut,H.t1),bt=Y?Math.min(...J.map(([gt,ut])=>l(gt,ut,B,A))):B;for(let[gt,ut]of H.ranges){let ft=Math.min(ut,Y?Math.max(...J.map(([he,Re])=>l(he,Re,B,A))):ut);if(ft-gt<1e-4||bt-gt<.01)continue;let Lt=gt>.01,mt=Y&&ut>bt,$t=(he,Re)=>Math.min(ut,l(he,Re,B,A));if(gt<M-1e-6){let he=ft>M+1e-6?Mg+I:ur+I,Re=mt&&bt<M?(ie,xe)=>Math.min(M,$t(ie,xe)):Math.min(ft,M);Fe(w,J,gt,Re,ya.wall,ya.wallTop,{aoFrom:0,bottom:Lt,fold:ur+I,topFold:he,skipSide:Q})}ft>M+1e-6&&bt>M+1e-6&&Fe(w,J,Math.max(gt,M),mt?$t:ft,ya.wall,ya.wallTop,{aoFrom:0,fold:I,bottom:Lt&&gt>=M,skipSide:Q})}}}let T=s.flatMap(A=>A.footprint),_=PT(s,T),E=new Le;E.p.push(...d.p),E.c.push(...d.c),E.f.push(...d.f);let R=(A,I)=>(v.get(A)??[]).filter(I);for(let A of _.edges){let I=m.get(A.wall);for(let[C,B]of gu(A,R(A.wall,z=>z.sill<=.005)))E.seg([C[0],.004,C[1]],[B[0],.004,B[1]],_g);for(let[C,B]of gu(A,R(A.wall,z=>z.sill<M&&z.top>M)))E.seg([C[0],M,C[1]],[B[0],M,B[1]],Jf,ou+I);let O=_a(A.wall,i.height);for(let[C,B]of gu(A,R(A.wall,z=>z.top>=O-.021))){if(!o&&!A.wall.slope){E.seg([C[0],O,C[1]],[B[0],O,B[1]],cr,O<=M+1e-6?ur+I:I);continue}let z=Math.max(1,Math.ceil(Math.hypot(B[0]-C[0],B[1]-C[1])/.3));for(let W=0;W<z;W++){let V=[C[0]+(B[0]-C[0])*W/z,C[1]+(B[1]-C[1])*W/z],Y=[C[0]+(B[0]-C[0])*(W+1)/z,C[1]+(B[1]-C[1])*(W+1)/z];if(c(V[0],V[1])&&c(Y[0],Y[1]))continue;let et=l(V[0],V[1],O,A.wall),nt=l(Y[0],Y[1],O,A.wall);E.seg([V[0],et,V[1]],[Y[0],nt,Y[1]],cr,Math.max(et,nt)<=M+1e-6?ur+I:I)}}}let S=(A,I)=>l(I[0],I[1],_a(A,i.height),A);for(let A of _.corners){if(c(A.p[0],A.p[1]))continue;let I=A.walls.reduce((C,B)=>S(B,A.p)>S(C,A.p)+1e-6?B:C,A.wall),O=l(A.p[0],A.p[1],_a(I,i.height),I);E.segSplit([A.p[0],.004,A.p[1]],[A.p[0],O,A.p[1]],Ii,Math.min(M,O),m.get(I))}for(let A of _.joints){let[I,O]=A.walls,C=[S(I,A.a),S(O,A.a)],B=[S(I,A.b),S(O,A.b)];if(Math.abs(C[0]-C[1])<.01&&Math.abs(B[0]-B[1])<.01)continue;let z=C[1]+B[1]>=C[0]+B[0]?O:I,W=m.get(z),V=Math.max(...C),Y=Math.max(...B);E.seg([A.a[0],V,A.a[1]],[A.b[0],Y,A.b[1]],cr,Math.max(V,Y)<=M+1e-6?ur+W:W);for(let[et,nt]of[[A.a,C],[A.b,B]]){let $=Math.min(...nt),H=Math.max(...nt);H-$>.01&&E.segSplit([et[0],$,et[1]],[et[0],H,et[1]],Ii,M,W)}}for(let A of v.values())for(let I of A)I.cont||ET(E,I,M);let P=CT(_.edges,i.rooms,v),k=new Jt;Qg(w,E,i,k);for(let A of r)ld(w,E,A.face,A.field,i.elevation);let D=[],U=[];for(let A of i.furniture){if(k0(A.type))continue;let I=w.count,O=E.p.length/6,C=A,B=tn(i,C);if(Zc.has(C.type)){let W=jc(s,C,i.height,B);C={...C,x:W.x,z:W.z},B=W.y}let z=!!C.rack?.slots?.length&&!!ae(C.type)?.rack_frame;lu(w,E,P,C,B,!1,!z),z&&U.push({f:C,base:B}),B+C.h>M+.05&&(Qf(w,I,M,Yo),td(E,O,M,Yo)),D.push({id:C.id,start:I,end:w.count})}return{floor:u.geometry(),roomTris:f,holes:p,walls:w.geometry(),water:k.geometry(),lines:E.geometry(),shadow:P.geometry(),buckets:b,openings:y,walls2d:s,openRooms:a,wallBuckets:s.map(A=>m.get(A)),furnitureTris:D,racks:U,roofUnder:o}}function gb(i,t,e){let n=new Jt,r=new Le;Wg(n,r,t.f,t.base,e);let o=Math.min(i.cut_height,i.height);return t.base+t.f.h>o+.05&&(Qf(n,0,o,Yo),td(r,0,o,Yo)),{mesh:n.geometry(),lines:r.geometry()}}function ET(i,t,e){let{info:n}=t,r=n.bucket,o=(l,c,h)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],s=l=>l>e+1e-6?r:te,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(o(c,l,a),o(c,l,t.top),Ii,e,r);i.seg(o(t.s0,l,t.top),o(t.s1,l,t.top),Ii,s(t.top)),t.sill>.01&&i.seg(o(t.s0,l,t.sill),o(t.s1,l,t.sill),Ii,s(t.sill))}for(let l of[t.s0,t.s1])i.seg(o(l,n.faceRoom,t.top),o(l,-n.faceOut,t.top),Ii,s(t.top)),t.sill>.01&&i.seg(o(l,n.faceRoom,t.sill),o(l,-n.faceOut,t.sill),Ii,s(t.sill)),t.sill<e&&t.top>e&&i.seg(o(l,n.faceRoom,e),o(l,-n.faceOut,e),Jf,ou+r)}function ud(i,t,e,n,r){let o=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],s=i;return Number.isFinite(n)&&(s=fb(s,a=>o(a)-n)),Number.isFinite(r)&&(s=fb(s,a=>r-o(a))),s}function fb(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=t(r),a=t(o);if(s>=0&&e.push(r),s>=0!=a>=0){let l=s/(s-a);e.push([r[0]+(o[0]-r[0])*l,r[1]+(o[1]-r[1])*l])}}return e}var db=i=>Math.round(i*1e3),Ma=i=>`${db(i[0])},${db(i[1])}`,pb=(i,t)=>{let e=Ma(i),n=Ma(t);return e<n?`${e}|${n}`:`${n}|${e}`};function RT(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=o[0]-r[0],a=o[1]-r[1],l=s*s+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let f=((u[0]-r[0])*s+(u[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*s)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=r;for(let u of c){let f=[r[0]+s*u,r[1]+a*u];Ma(f)!==Ma(h)&&e.push([h,f]),h=f}e.push([h,o])}return e}function PT(i,t){let e=i.map(h=>({wall:h,edges:RT(h.footprint,t)})),n=new Map,r=new Map;for(let{wall:h,edges:u}of e)for(let[f,d]of u){let p=pb(f,d);n.set(p,(n.get(p)??0)+1);let g=r.get(p);g?g.walls.push(h):r.set(p,{a:f,b:d,walls:[h]})}let o=[];for(let h of r.values())h.walls.length===2&&h.walls[0]!==h.walls[1]&&o.push({a:h.a,b:h.b,walls:[h.walls[0],h.walls[1]]});let s=[],a=new Map,l=(h,u,f)=>{let d=Ma(h),p=a.get(d);p||a.set(d,p={p:h,wall:u,walls:[],d:[]}),p.d.push(f),p.walls.includes(u)||p.walls.push(u)};for(let{wall:h,edges:u}of e)for(let[f,d]of u){if(n.get(pb(f,d))!==1)continue;let p=Math.hypot(d[0]-f[0],d[1]-f[1]);if(p<1e-4)continue;s.push({a:f,b:d,wall:h});let g=[(d[0]-f[0])/p,(d[1]-f[1])/p];l(f,h,g),l(d,h,g)}let c=[];for(let{p:h,wall:u,walls:f,d}of a.values())d.some(p=>d.some(g=>Math.abs(p[0]*g[1]-p[1]*g[0])>.05))&&c.push({p:h,wall:u,walls:f});return{edges:s,corners:c,joints:o}}function gu(i,t){if(!t.length)return[[i.a,i.b]];let e=bu([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=bu([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],o=r(i.a),s=r(i.b),a=Math.min(o,s),l=Math.max(o,s),c=[[a,l]];for(let u of t)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let p=[];return u.s0>f&&p.push([f,u.s0]),u.s1<d&&p.push([u.s1,d]),p});let h=u=>{let f=(u-o)/(s-o||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>o<=s?[h(u),h(f)]:[h(f),h(u)])}function CT(i,t,e){let n=new Jt,r=new K(cd,cd,cd),o=new K(1,1,1),s=.002;for(let a of i)for(let[l,c]of gu(a,(e.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let d=[u/f,-h/f],p=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(m=>m.points.length>=3&&jt(p,m.points)))continue;let g=[l[0]+d[0]*pu,l[1]+d[1]*pu],b=[c[0]+d[0]*pu,c[1]+d[1]*pu];n.tri([l[0],s,l[1]],[g[0],s,g[1]],[b[0],s,b[1]],r,o,o),n.tri([l[0],s,l[1]],[b[0],s,b[1]],[c[0],s,c[1]],r,o,r)}return n}function bb(i,t){let e=t.furniture.filter(o=>o.type==="stairwell").map(sr),n=i.filter(o=>o.elevation<t.elevation).sort((o,s)=>s.elevation-o.elevation)[0];if(!n)return e;let r=n.furniture.filter(o=>(C0.has(o.type)||o.type==="loft_ladder"||ae(o.type)?.hole)&&n.elevation+(o.mount_y??0)+o.h>=t.elevation-.3).map(sr);return[...e,...r]}function _a(i,t){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(t,i.height??t)}function bu(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function mu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var IT=new K(1516340),LT=new K(527897),hd=new K(1779256),Sa=new K(1120808),FT=new K(4163256),xb=new K(5995161),kT=new K(2240842),DT=new K(1318704),OT=.35,es=.8,NT=.2,yb=.1;function UT(i,t,e,n){let r=-1/0;for(let o of i.floors)if(!(o.elevation>.3))for(let s of o.outdoor??[])s.points.length<3||s.type==="pool"||s.type==="balcony"||jn(s.type)||!jt(e,s.points)||(r=Math.max(r,o.elevation+Dr(o,s)+Bo[s.type]-t.elevation));return r>n?r-n:0}function vb(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let r=Xf(i,t);if(!r)return null;let o=(p,g)=>zo(p,g)-t.elevation,s=n&&r.some(([p,g])=>o(p,g)<-sn-.03);if(!s&&!$f(i,t))return null;let a=t.height,l=-OT,c=(p,g)=>Math.min(a,zo(p,g)-t.elevation),h=new Jt,u=new Jt,f=new Le,d=(p,g,b,m,x,v,y,M)=>{let w=[g[0]-p[0],g[2]-p[2]];-w[1]*x[0]+w[0]*x[1]>0?(M.tri(p,g,b,v,v,y),M.tri(p,b,m,v,y,y)):(M.tri(p,b,g,v,y,v),M.tri(p,m,b,v,y,y))};for(let p=0;p<r.length;p++){let g=r[p],b=r[(p+1)%r.length],m=Math.hypot(b[0]-g[0],b[1]-g[1]);if(m<1e-4)continue;let x=[(b[0]-g[0])/m,(b[1]-g[1])/m],v=[x[1],-x[0]],y=[(g[0]+b[0])/2+v[0]*.05,(g[1]+b[1])/2+v[1]*.05];jt(y,r)&&(v=[-v[0],-v[1]]);let M=(R,S=.012)=>[g[0]+x[0]*R+v[0]*S,g[1]+x[1]*R+v[1]*S],w=[];for(let R of e){if(R.opening.type!=="window"||!R.exterior||R.opening.well===!1)continue;let S=R.start[0]+R.axis[0]*(R.width/2)-R.toRoom[0]*R.faceOut,P=R.start[1]+R.axis[1]*(R.width/2)-R.toRoom[1]*R.faceOut,k=(S-g[0])*x[0]+(P-g[1])*x[1];Math.abs((S-g[0])*v[0]+(P-g[1])*v[1])>.08||k<-.05||k>m+.05||og(i,t,R.exterior,R.sill,[S,P])&&w.push({s0:Math.max(0,k-R.width/2-yb),s1:Math.min(m,k+R.width/2+yb),bottom:Math.max(l+.05,R.sill-NT),rim:R.opening.well_rim??0})}let T=new Set([0,m]);for(let R of w)T.add(R.s0),T.add(R.s1);let _=[...T].sort((R,S)=>R-S),E=[];for(let R=0;R<_.length-1;R++){let S=Math.max(1,Math.ceil((_[R+1]-_[R])/.5));for(let P=0;P<S;P++)E.push(_[R]+(_[R+1]-_[R])*P/S)}E.push(m);for(let R=0;R<E.length-1;R++){let S=E[R],P=E[R+1],k=w.find(W=>S>=W.s0-1e-6&&P<=W.s1+1e-6),D=M(S),U=M(P),A=c(D[0],D[1]),I=c(U[0],U[1]),O=k?Math.min(A,k.bottom):A,C=k?Math.min(I,k.bottom):I;if(O>l+.01||C>l+.01){let W=Math.min(O,l),V=Math.min(C,l);d([D[0],W,D[1]],[U[0],V,U[1]],[U[0],Math.max(C,l),U[1]],[D[0],Math.max(O,l),D[1]],v,LT,IT,h)}let B=o(D[0],D[1]),z=o(U[0],U[1]);if(s&&(B<-sn-.01||z<-sn-.01)&&d([D[0],Math.min(B,-sn),D[1]],[U[0],Math.min(z,-sn),U[1]],[U[0],-sn,U[1]],[D[0],-sn,D[1]],v,DT,kT,h),A>l||I>l||s&&(B<-sn||z<-sn)){let W=s?Math.min(B,Math.max(A,l)):Math.max(A,l),V=s?Math.min(z,Math.max(I,l)):Math.max(I,l);f.seg([D[0],W+.004,D[1]],[U[0],V+.004,U[1]],FT)}}for(let R of w){let S=M(R.s0,0),P=M(R.s1,0),k=[S[0]+v[0]*es,S[1]+v[1]*es],D=[P[0]+v[0]*es,P[1]+v[1]*es],U=[(S[0]+P[0]+k[0]+D[0])/4,(S[1]+P[1]+k[1]+D[1])/4],A=UT(i,t,U,c(U[0],U[1])),I=Math.max(R.rim,A>0?A+.02:0),O=Y=>c(Y[0],Y[1])+I,C=R.bottom,B=(Y,et)=>[Y[0],et,Y[1]];u.tri(B(S,C),B(P,C),B(D,C),Sa),u.tri(B(S,C),B(D,C),B(k,C),Sa);let z=(Y,et)=>{u.tri(B(Y,C),B(et,C),B(et,O(et)),Sa,Sa,hd),u.tri(B(Y,C),B(et,O(et)),B(Y,O(Y)),Sa,hd,hd)};z(S,k),z(P,D),z(k,D);let W=Y=>[Y[0],O(Y)+.01,Y[1]];for(let[Y,et]of[[S,P],[P,D],[D,k],[k,S]])f.seg(W(Y),W(et),xb);let V=Math.max(3,Math.round((R.s1-R.s0)/.12));for(let Y=1;Y<V;Y++){let et=Y/V,nt=[S[0]+(P[0]-S[0])*et,S[1]+(P[1]-S[1])*et];f.seg(W(nt),W([nt[0]+v[0]*es,nt[1]+v[1]*es]),xb)}}}return h.count||u.count?{earth:h,wells:u,lines:f}:null}var _b=i=>Math.round(i*1e3)/1e3;function BT(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let o=[(n[0]-e[0])/r,(n[1]-e[1])/r],s=l=>Math.abs(-(l[0]-e[0])*o[1]+(l[1]-e[1])*o[0]),a=l=>(l[0]-e[0])*o[0]+(l[1]-e[1])*o[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,h)=>{let u=l.points[(h+1)%l.points.length];return s(c)>.02||s(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function Mb(i,t,e,n,r,o=.05){let s=i.rooms.find(f=>f.points.length>=3&&jt([t.x,t.z],f.points));if(!s)return[e,n];let a=s.points,l=Pn(a)>=0?1:-1,c=sr({...t}),h=e,u=n;for(let f=0;f<2;f++){let d=sr({...t,x:h,z:u});for(let p=0;p<a.length;p++){let g=a[p],b=a[(p+1)%a.length],m=Math.hypot(b[0]-g[0],b[1]-g[1]);if(m<.05)continue;let x=[(b[0]-g[0])/m,(b[1]-g[1])/m],v=[-x[1]*l,x[0]*l],y=BT(i,s.id,g,b)?r/2:0,M=0;d.forEach((w,T)=>{let _=(w[0]-g[0])*x[0]+(w[1]-g[1])*x[1];if(_<-.01||_>m+.01)return;let E=(w[0]-g[0])*v[0]+(w[1]-g[1])*v[1]-y,R=c[T];(R[0]-g[0])*v[0]+(R[1]-g[1])*v[1]-y<-o||E<M&&(M=E)}),M<-1e-4&&(h-=v[0]*M,u-=v[1]*M)}}return[_b(h),_b(u)]}function wb(i,t,e){return i<(t?7:6)*(e?.6:1)}var zT=500,VT=1e3;function Sb(i,t){let e=t-i.timeStamp;return e>VT&&e<6e4}var Tb=.12,Ab=1.35,GT=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,xu=class{view={target:new X,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(o,s,a)=>{t.addEventListener(o,s,a),this.listeners.push([o,s])};r("pointerdown",o=>this.onDown(o)),r("pointermove",o=>this.onMove(o)),r("pointerup",o=>this.onUp(o)),r("pointercancel",o=>this.onUp(o)),r("wheel",o=>this.onWheel(o),{passive:!1}),r("contextmenu",o=>o.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(t-c)/h),f=GT(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=fd(this.view.phi+this.velocity.phi,Tb,Ab),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:o,phi:s}=this.view;return this.camera.position.set(n.x+r*Math.sin(s)*Math.sin(o),n.y+r*Math.cos(s),n.z+r*Math.sin(s)*Math.cos(o)),this.camera.lookAt(n),e}flyTo(t,e=700,n=!1){let r={...this.view,target:this.view.target.clone()},o=t.theta??r.theta;for(;o-r.theta>Math.PI;)o-=2*Math.PI;for(;o-r.theta<-Math.PI;)o+=2*Math.PI;let s=this.angleLock&&!n?{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:o,phi:t.phi??r.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:r,to:s,start:performance.now(),duration:e},this.events.change()}get goal(){let t=this.flight?.to??this.view;return{...t,target:t.target.clone()}}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},zT)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}if(Sb(t,performance.now())&&!this.swiping){e.x=t.clientX,e.y=t.clientY,this.pointers.size>1&&(this.pinch=this.pinchState());return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let o=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-o.left,this.down.y-o.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let o=e.type==="mouse";if(o&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!o))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=fd(this.view.phi+c,Tb,Ab),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let o=this.pinchState();this.pinch&&o&&(this.zoom(this.pinch.dist/Math.max(1,o.dist)),this.pan(o.mid[0]-this.pinch.mid[0],o.mid[1]-this.pinch.mid[1])),this.pinch=o}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,o=performance.now();o-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=o,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),!Sb(t,performance.now())&&(this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change())}zoom(t){this.view.radius=fd(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,o=new X(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),s=new X(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(o,-t*r),this.view.target.addScaledVector(s,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function fd(i,t,e){return Math.min(e,Math.max(t,i))}function Nn(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${e==="glass"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i.userData.fp3dFold={masks:t,role:e},i}var _u=5,yu=512,Eb=.7,vu=class{projectors=new Map;loader=new Er;loggedIds="";depthMaterial=new Xt({colorWrite:!1,side:re});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,o]of this.projectors)e.has(r)||this.drop(o);for(let[r,o]of e){let s=this.projectors.get(r);if(!s){let a=new qe(yu,yu);a.depthTexture=new ui(yu,yu),s={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new rn(60,16/9,Eb,40),target:a,matrix:new Me,uniforms:{uProjMat:{value:new Me},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},s.camera.layers.set(_u),this.projectors.set(r,s)}s.url=o,this.fetch(s)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`Home 3D lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=Ie;let r=n.image;r?.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`Home 3D lab: first picture of ${t.id}`,r?.width,"x",r?.height),t.texture?.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`Home 3D lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,o){for(let s of this.projectors.values()){let a=s.texture?r(s.id):null;if(s.texture&&!a&&!s.noPoseLogged&&(s.noPoseLogged=!0,console.warn(`Home 3D lab: ${s.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!a){for(let g of s.overlays.values())g.visible=!1;continue}let l=new Set(n.map(g=>g.key));for(let[g,b]of s.overlays)l.has(g)||(b.parent?.remove(b),b.material.dispose(),s.overlays.delete(g));for(let g of n){let b=s.overlays.get(g.key);(!b||b.parent!==g.parent)&&(b&&(b.parent?.remove(b),b.material.dispose()),b=new _t(g.geometry,this.material(s,g.masks)),b.renderOrder=2.5,b.frustumCulled=!1,g.parent.add(b),s.overlays.set(g.key,b)),b.geometry!==g.geometry&&(b.geometry=g.geometry),b.visible=g.visible}let c=`${a.position.toArray().map(g=>g.toFixed(3))},${a.direction.toArray().map(g=>g.toFixed(3))},${a.fov},${a.reach},${s.aspect.toFixed(3)},${o}`;if(c===s.poseKey)continue;s.poseKey=c;let h=s.camera,u=Math.min(150,Math.max(20,a.fov))*(Math.PI/180);h.fov=2*Math.atan(Math.tan(u/2)/s.aspect)*180/Math.PI,h.aspect=s.aspect,h.far=a.reach,h.near=Eb,h.position.copy(a.position),h.lookAt(a.position.clone().add(a.direction)),h.updateProjectionMatrix(),s.uniforms.uNearFar.value=[h.near,h.far],h.updateMatrixWorld(),s.uniforms.uProjMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);let f=[];for(let g of this.projectors.values())for(let b of g.overlays.values())b.visible&&f.push(b);for(let g of f)g.visible=!1;let d=t.getRenderTarget(),p=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(s.target),t.clear(),t.render(e,h),t.setRenderTarget(d),e.overrideMaterial=p;for(let g of f)g.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){for(let e of t.overlays.values())e.parent?.remove(e),e.material.dispose();t.texture?.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new Xt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?Nn(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(o,s)=>{r?.(o,s),Object.assign(o.uniforms,t.uniforms),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uProjMat;
varying vec4 vProj;`).replace("#include <project_vertex>",`#include <project_vertex>
vProj = uProjMat * modelMatrix * vec4(transformed, 1.0);`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uProjTex;
uniform sampler2D uDepth;
uniform vec2 uNearFar;
varying vec4 vProj;
float fp3dLinear(float d) { float z = d * 2.0 - 1.0; return 2.0 * uNearFar.x * uNearFar.y / (uNearFar.y + uNearFar.x - z * (uNearFar.y - uNearFar.x)); }`).replace("#include <color_fragment>",`#include <color_fragment>
          if (vProj.w <= 0.0) discard;
          vec3 fp3dNdc = vProj.xyz / vProj.w;
          if (abs(fp3dNdc.x) > 1.0 || abs(fp3dNdc.y) > 1.0 || abs(fp3dNdc.z) > 1.0) discard;
          vec2 fp3dUv = fp3dNdc.xy * 0.5 + 0.5;
          // hidden from the camera (something nearer in its depth picture): no picture here; compared in metres
          float fp3dSeen = fp3dLinear(texture2D(uDepth, fp3dUv).x);
          float fp3dHere = fp3dLinear(fp3dNdc.z * 0.5 + 0.5);
          if (fp3dHere > fp3dSeen + 0.06 + 0.01 * fp3dHere) discard;
          vec4 fp3dPic = texture2D(uProjTex, fp3dUv);
          float fp3dEdge = smoothstep(0.0, 0.05, min(min(fp3dUv.x, 1.0 - fp3dUv.x), min(fp3dUv.y, 1.0 - fp3dUv.y)));
          // far away the picture fades out (what lies near the horizon would be smeared across the whole plot)
          float fp3dFar = 1.0 - smoothstep(0.65 * uNearFar.y, uNearFar.y, fp3dHere);
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function Rb(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function Pb(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[o,s,a]=[i[r-1],i[r],i[r+1]],l=Rb(o,s),c=Rb(s,a),h=Math.min(t,l*.45,c*.45),u=[(o[0]-s[0])/l,(o[1]-s[1])/l,(o[2]-s[2])/l],f=[(a[0]-s[0])/c,(a[1]-s[1])/c,(a[2]-s[2])/c];if(h<.005||u[0]*f[0]+u[1]*f[1]+u[2]*f[2]<-.999){n.push(s);continue}let d=[s[0]+u[0]*h,s[1]+u[1]*h,s[2]+u[2]*h],p=[s[0]+f[0]*h,s[1]+f[1]*h,s[2]+f[2]*h];for(let g=0;g<=e;g++){let b=g/e,m=(1-b)*(1-b),x=2*(1-b)*b,v=b*b;n.push([m*d[0]+x*s[0]+v*p[0],m*d[1]+x*s[1]+v*p[1],m*d[2]+x*s[2]+v*p[2]])}}return n.push(i[i.length-1]),n}var Cb=new K(7568261),Ib=new K(4869974),HT=new K(3116287),Lb=new K(3948872),dd=Kr([.35,.85,.4]),Fb=10;function Kr(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function Ta(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function kb(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Kr(Ta(i,t));return[e,Kr(Ta(i,e))]}function Li(i,t){let e=.5+.5*Math.max(0,t[0]*dd[0]+t[1]*dd[1]+t[2]*dd[2]);return i.clone().multiplyScalar(e)}function ns(i,t,e,n,r,o=!1){let s=Kr([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=kb(s),c=(h,u)=>{let f=u/Fb*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[h[0]+d[0]*n,h[1]+d[1]*n,h[2]+d[2]*n],n:d}};for(let h=0;h<Fb;h++){let u=c(t,h),f=c(t,h+1),d=c(e,h),p=c(e,h+1);i.tri(u.p,p.p,d.p,Li(r,u.n),Li(r,p.n),Li(r,d.n)),i.tri(u.p,f.p,p.p,Li(r,u.n),Li(r,f.n),Li(r,p.n)),o&&(i.tri([...t],f.p,u.p,Li(r,[-s[0],-s[1],-s[2]])),i.tri([...e],d.p,p.p,Li(r,s)))}}function WT(i,t,e,n,r,o,s,a){let l=Kr(Ta(e,n)),c=(u,f,d)=>[t[0]+e[0]*u*r+n[0]*f*o+l[0]*d*s,t[1]+e[1]*u*r+n[1]*f*o+l[1]*d*s,t[2]+e[2]*u*r+n[2]*f*o+l[2]*d*s],h=[];for(let[u,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])h.push([u,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[u,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])h.push([u,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[u,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])h.push([u,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[u,f]of h){let d=Li(a,u);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function Db(i,t){if(t.points.length<2)return;let e=t.radius,n=Pb(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[o,s]=[n[r-1],n[r]];if(Math.hypot(s[0]-o[0],s[1]-o[1],s[2]-o[2])<1e-4)continue;let a=o[1]<-.02&&s[1]<-.02?Cb.clone().multiplyScalar(.55):Cb;ns(i,o,s,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let o=s=>[[r.p[0]-r.dir[0]*s,r.p[1]-r.dir[1]*s,r.p[2]-r.dir[2]*s],[r.p[0]+r.dir[0]*s,r.p[1]+r.dir[1]*s,r.p[2]+r.dir[2]*s]];if(r.kind==="sleeve"){let[s,a]=o(.03);ns(i,s,a,e*1.22,Ib,!0)}else if(r.kind==="sight"){let[s,a]=o(.08);ns(i,s,a,e*1.08,t.water?new K(...t.water).multiplyScalar(.9):new K(10475240),!0);for(let l of o(.08)){let[c,h]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];ns(i,c,h,e*1.3,Ib,!0)}}else{let[s,a]=o(.055);ns(i,s,a,e*1.4,Lb,!0);let[l]=kb(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],h=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];ns(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],h,e*.35,Lb,!0);let u=r.open===!1?Kr(Ta(r.dir,c)):r.dir,f=Kr(Ta(u,c)),d=[h[0]+u[0]*.045,h[1]+u[1]*.045,h[2]+u[2]*.045];WT(i,d,u,f,.1,.028,.012,HT)}}}var pd=1.62,Mu=.2,md=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let o=gi(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=o.walls;let s=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=Vo(a,e.rooms,e.walls??[]);if(!c)continue;let h=Go(this.walls,a,c);if(!h)continue;let u=h.wall,f=u.b[0]-u.a[0],d=u.b[1]-u.a[1],p=Math.hypot(f,d)||1,g=f/p,b=d/p,m=[u.a[0]+g*h.s,u.a[1]+b*h.s],x=u.left+.45,v=u.right+.45,y=[[m[0]-b*x,m[1]+g*x],[m[0]+b*v,m[1]-g*v]];if(u.exterior&&e.elevation>.3&&!(e.outdoor??[]).some(w=>w.points.length>=3&&jt(y[1],w.points)))continue;let M=s.get(u)??[];M.push([h.s-a.width/2+.05,h.s+a.width/2-.05]),s.set(u,M),this.doors.push({centre:m,p:y})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c);h<1e-6||this.solids.push({a:a.a,u:[l/h,c/h],len:h,left:a.left,right:a.right,gaps:s.get(a)??[]})}}blocked(t,e=Mu){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=Mu){for(let n of this.obstacles){let r=t[0]-n.c[0],o=t[1]-n.c[1];if(Math.abs(r*n.u[0]+o*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+o*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=Mu){for(let n of this.solids){let r=t[0]-n.a[0],o=t[1]-n.a[1],s=r*n.u[0]+o*n.u[1];if(s<-e||s>n.len+e)continue;let a=-r*n.u[1]+o*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>s>l+e*.6&&s<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let o=1;o<=r;o++){let s=o/r;if(this.blocked([t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]))return!1}return!0}roomAt(t){return this.rooms.find(e=>jt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let p=this.path(d,e);return p?[d,...p]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let p=this.path(t,d);return p?[...p,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>XT(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let p=Mu+.12,g=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([b,m])=>[d.c[0]+d.u[0]*b*(d.hw+p)+g[0]*m*(d.hd+p),d.c[1]+d.u[1]*b*(d.hw+p)+g[1]*m*(d.hd+p)])}).filter(d=>!this.blocked(d)),o=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],s=o.length,a=new Array(s).fill(1/0),l=new Array(s).fill(-1),c=new Array(s).fill(!1);a[0]=0;let h=new Map,u=(d,p)=>{let g=d<p?`${d}:${p}`:`${p}:${d}`,b=h.get(g);return b===void 0&&(b=this.clear(o[d],o[p]),h.set(g,b)),b};for(;;){let d=-1;for(let p=0;p<s;p++)!c[p]&&a[p]<1/0&&(d<0||a[p]<a[d])&&(d=p);if(d<0)return null;if(d===1)break;c[d]=!0;for(let p=0;p<s;p++){if(c[p]||p===d)continue;let g=Math.hypot(o[d][0]-o[p][0],o[d][1]-o[p][1]);a[d]+g>=a[p]||u(d,p)&&(a[p]=a[d]+g,l[p]=d)}}let f=[];for(let d=1;d>0;d=l[d])f.unshift(o[d]);return f}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let o=Vo(r,this.floor.rooms,this.floor.walls??[]);if(!o)continue;let s=Go(this.walls,r,o);if(!s||!s.wall.exterior)continue;let a=s.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c)||1,u=l/h,f=c/h,d=[a.a[0]+u*s.s,a.a[1]+f*s.s],p=[d[0]-f*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(u,-f))}}let e=[...this.rooms].sort((r,o)=>Ob(o)-Ob(r))[0],n=e?this.freeNear(or(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),o=Math.sin(e);for(let s=.2;s<n;s+=.15)if(this.blocked([t[0]+r*s,t[1]+o*s],.05))return s;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let o=0;o<24;o++){let s=o/24*Math.PI*2,a=this.sight(t,s);if(e!==null){let l=Math.abs(s-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=s)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function XT(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r||1,s=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o));return Math.hypot(i[0]-(t[0]+n*s),i[1]-(t[1]+r*s))}function Ob(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,o]=e[n],[s,a]=e[(n+1)%e.length];t+=r*a-s*o}return Math.abs(t/2)}var gd=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let o=r.start??(()=>{let s=e.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...o},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let s of t.floors)s.mask.standing.value=65535,s.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+pd}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,o=this.floorY(),s=Math.cos(r);return this.v.camera.position.set(t,o,e),this.v.camera.lookAt(t+Math.cos(n)*s,o+Math.sin(r),e+Math.sin(n)*s),this.v.controls.view.target.set(t,o-pd,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(or(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,o=0,s=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(o+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(o-=1),this.keys.has("a")&&(s-=1),this.keys.has("d")&&(s+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(o+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),o||s){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*o-Math.sin(r.yaw)*s)*l,h=(Math.sin(r.yaw)*o+Math.cos(r.yaw)*s)*l;this.move(c,h),n=!0}else if(this.path.length){let[l,c]=this.path[0],h=l-r.x,u=c-r.z,f=Math.hypot(h,u),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=h/f*d,r.z+=u/f*d,this.turnTo=Math.atan2(u,h)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,o=1-(e-n.top)/n.height*2,{yaw:s,pitch:a,x:l,z:c}=this.state,h=this.v.camera.fov*Math.PI/180,u=Math.tan(h/2),f=n.width/n.height,d=Math.cos(a),p=[Math.cos(s)*d,Math.sin(a),Math.sin(s)*d],g=[-Math.sin(s),0,Math.cos(s)],b=[p[1]*g[2]-p[2]*g[1],p[2]*g[0]-p[0]*g[2],p[0]*g[1]-p[1]*g[0]],m=[-b[0],-b[1],-b[2]],x=[p[0]+g[0]*r*u*f+m[0]*o*u,p[1]+g[1]*r*u*f+m[1]*o*u,p[2]+g[2]*r*u*f+m[2]*o*u];if(x[1]>=-.02)return null;let v=pd/-x[1];return[l+x[0]*v,c+x[2]*v]}bind(){let t=(s,a,l,c)=>{s.addEventListener(a,l,c),this.listeners.push([s,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",s=>{e||(e={x:s.clientX,y:s.clientY,moved:!1,id:s.pointerId},this.surface.setPointerCapture?.(s.pointerId))}),t(this.surface,"pointermove",s=>{if(!e||s.pointerId!==e.id)return;let a=s.clientX-e.x,l=s.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=s.clientX,e.y=s.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=s=>{if(!e||s.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(s.clientX,s.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",s=>{s.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-s.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=s=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(s.key.toLowerCase()),o=s=>!!s.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",s=>{!r(s)||o(s)||s.ctrlKey||s.metaKey||s.altKey||(s.preventDefault(),s.stopImmediatePropagation(),this.keys.add(s.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",s=>{r(s)&&(this.keys.delete(s.key.toLowerCase()),s.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function $T(i,t){let e=ae(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function bd(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,o=r?$T(n,r):null;return o?[n,o]:[n]});return{...i,furniture:e}}var Nb=8,Ub=1024,Fi=6,wu=class{group=new Te;shadow;target=null;arc=new Te;glow=KT();textures=[];constructor(){this.shadow=new _t(new Xn(1,1),new Xt({color:0,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,this.arc.visible=!1,this.group.add(this.shadow,this.arc)}setShadow(t,e,n,r,o,s,a=0){let[l,c,h,u]=[n[0]-.5,n[1]-.5,n[2]+.5,n[3]+.5],f=Math.min(Ub,Math.max(32,Math.ceil((h-l)*Nb))),d=Math.min(Ub,Math.max(32,Math.ceil((u-c)*Nb)));if(!this.target||this.target.width!==f||this.target.height!==d){this.target?.dispose(),this.target=new qe(f,d,{minFilter:Ye,magFilter:Ye,depthBuffer:!1});let w=this.shadow.material;w.map=this.target.texture,w.needsUpdate=!0}let p=new ci,g=w=>{let T=new Float32Array(w.length/2*3);for(let E=0,R=0;E<w.length;E+=2,R+=3)T.set([w[E],-w[E+1],0],R);let _=new Vt;return _.setAttribute("position",new It(T,3)),_},b=new _t(g(e),new Xt({color:16777215,side:re})),m=[];for(let w of r)for(let T of bn(w))for(let _ of T)m.push(w[_][0],w[_][1]);let x=new _t(g(m),new Xt({color:0,transparent:!0,opacity:0,blending:kn,side:re}));x.renderOrder=1,p.add(b,x);let v=new Rn(l,h,-c,-u,.1,10);v.position.z=1;let y=t.getRenderTarget();t.setRenderTarget(this.target),t.clear(),t.render(p,v),t.setRenderTarget(y);for(let w of[b,x])w.geometry.dispose(),w.material.dispose();this.shadow.scale.set(h-l,u-c,1),this.shadow.position.set((l+h)/2,o,(c+u)/2);let M=this.shadow.material;M.opacity=s,M.color.set(a),this.shadow.visible=s>.01}hideShadow(){this.shadow.visible=!1}showShadow(t){let e=this.shadow.material;this.shadow.visible=t&&!!e.map&&e.opacity>.01}setArc(t){if(this.clearArc(),t.fade<=.01||t.points.length<2)return;let e=t.light?Mn:Ee,n=(o,s)=>{let a=qT(t.points.map(c=>c.at),o,t.points.map(c=>YT(c.elevation,t.light).multiplyScalar(c.t<=t.now?1:t.light?.75:.5))),l=new _t(a,new Xt({vertexColors:!0,transparent:!0,opacity:s*t.fade,blending:e,depthWrite:!1}));return l.renderOrder=6,l};this.arc.add(n(t.size*.09,t.light?.95:1)),t.light||this.arc.add(n(t.size*.3,.22));let r=new Ki(Bb(t.hours.flat()),new Pi({color:t.light?13658624:16767370,map:this.glow,size:t.size*.55,transparent:!0,opacity:t.fade,blending:e,depthWrite:!1}));if(r.renderOrder=6,this.arc.add(r),t.sun){let o=this.sprite(ZT(t.light),t.size*5,t.size*5,t.fade,e);o.position.set(...t.sun),this.arc.add(o)}for(let o of t.labels){let s=this.sprite(jT(`${o.rising?"\u2191":"\u2193"} ${o.text}`,t.light),t.size*5.2,t.size*1.7,t.fade,Mn,!0);s.position.set(...o.at),this.arc.add(s)}this.buildRing(t),this.arc.visible=!0}buildRing(t){let{center:e,r:n,north:r,letters:o}=t.ring,s=e[1]+.03,a=(h,u)=>{let f=r+h*Math.PI/180;return[e[0]+Math.sin(f)*u,s,e[2]-Math.cos(f)*u]},l=[];for(let h=0;h<360;h+=3)l.push(...a(h,n),...a(h+3,n));for(let h=0;h<360;h+=15)l.push(...a(h,n),...a(h,n*(h%90===0?.93:.97)));let c=new Ge(Bb(l),new je({color:t.light?9071162:16761963,transparent:!0,opacity:(t.light?.45:.32)*t.fade,blending:t.light?Mn:Ee,depthWrite:!1}));c.renderOrder=6,this.arc.add(c),o.forEach((h,u)=>{let f=this.sprite(JT(h,u===0,t.light),t.size*1.6,t.size*1.6,t.fade,Mn,!0);f.position.set(...a(u*90,n*1.07)),f.position.y+=t.size*.6,this.arc.add(f)})}sprite(t,e,n,r,o,s=!1){this.textures.push(t);let a=new Es(new Ao({map:t,transparent:!0,opacity:r,blending:o,depthWrite:!1,depthTest:!s}));return a.scale.set(e,n,1),a.renderOrder=6,a}hideArc(){this.clearArc()}clearArc(){for(let t of[...this.arc.children]){this.arc.remove(t);let e=t;e.geometry?.dispose(),e.material.dispose()}for(let t of this.textures)t.dispose();this.textures=[],this.arc.visible=!1}dispose(){this.clearArc(),this.target?.dispose(),this.glow.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}};function Bb(i){let t=new Vt;return t.setAttribute("position",new It(i,3)),t}function YT(i,t){let e=Math.min(1,Math.max(0,i/35)),n=new K(t?13778970:16730666),r=new K(t?14711552:16753978),o=new K(t?15769600:16773832);return e<.4?n.lerp(r,e/.4):r.lerp(o,(e-.4)/.6)}function qT(i,t,e){let n=[],r=[],o=[],s=new X(0,1,0);for(let l=0;l<i.length;l++){let c=new X(...i[l]),h=new X(...i[Math.max(0,l-1)]),f=new X(...i[Math.min(i.length-1,l+1)]).sub(h).normalize(),d=new X().crossVectors(f,s);d.lengthSq()<1e-6&&d.set(1,0,0),d.normalize();let p=new X().crossVectors(d,f).normalize();for(let g=0;g<Fi;g++){let b=g/Fi*Math.PI*2,m=c.clone().addScaledVector(d,Math.cos(b)*t).addScaledVector(p,Math.sin(b)*t);n.push(m.x,m.y,m.z),r.push(e[l].r,e[l].g,e[l].b)}if(l!==0)for(let g=0;g<Fi;g++){let b=(l-1)*Fi+g,m=(l-1)*Fi+(g+1)%Fi,x=l*Fi+g,v=l*Fi+(g+1)%Fi;o.push(b,x,v,b,v,m)}}let a=new Vt;return a.setAttribute("position",new It(n,3)),a.setAttribute("color",new It(r,3)),a.setIndex(o),a}function Su(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function KT(){let[i,t]=Su(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new pn(i)}function ZT(i){let[t,e]=Su(256,256);e.translate(128,128);for(let r=0;r<12;r++){e.save(),e.rotate(r/12*Math.PI*2);let o=r%2===0?124:92,s=e.createLinearGradient(0,0,0,-o);s.addColorStop(0,i?"rgba(240,140,0,0.75)":"rgba(255,214,140,0.7)"),s.addColorStop(1,"rgba(255,170,60,0)"),e.fillStyle=s,e.beginPath(),e.moveTo(-7,0),e.lineTo(0,-o),e.lineTo(7,0),e.fill(),e.restore()}let n=e.createRadialGradient(0,0,0,0,0,80);return n.addColorStop(0,i?"rgba(255,190,60,0.95)":"rgba(255,236,190,1)"),n.addColorStop(.3,i?"rgba(245,150,20,0.8)":"rgba(255,190,90,0.75)"),n.addColorStop(1,"rgba(255,140,40,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,80,0,Math.PI*2),e.fill(),e.fillStyle=i?"#fff3cf":"#fffaf0",e.beginPath(),e.arc(0,0,22,0,Math.PI*2),e.fill(),new pn(t)}function jT(i,t){let[e,n]=Su(320,104);n.font="600 52px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let r=Math.min(304,n.measureText(i).width+56),o=(320-r)/2;return n.beginPath(),typeof n.roundRect=="function"?n.roundRect(o,10,r,84,42):n.rect(o,10,r,84),n.fillStyle=t?"rgba(255,248,236,0.92)":"rgba(20,12,4,0.72)",n.fill(),n.lineWidth=4,n.strokeStyle=t?"rgba(224,123,0,0.9)":"rgba(255,196,107,0.85)",n.stroke(),n.fillStyle=t?"#a34f00":"#ffe2a8",n.fillText(i,160,54),new pn(e)}function JT(i,t,e){let[n,r]=Su(96,96);return r.font=`${t?800:600} 64px system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=e?"rgba(255,255,255,0.9)":t?"rgba(255,90,60,0.9)":"rgba(255,196,107,0.8)",r.shadowBlur=12,r.fillStyle=t?e?"#c0301a":"#ff6a4a":e?"#7a5a2a":"#ffd9a0",r.fillText(i,48,52),new pn(n)}function Xb(i,t,e){return/\b(iPhone|iPod)\b/.test(i)||/Android/.test(i)&&/\bMobile\b/.test(i)||e>0&&t>0&&t<600?"phone":/\biPad\b/.test(i)||/Android|\bSilk\b/.test(i)||/Macintosh/.test(i)&&e>1?"tablet":"desktop"}function $b(i,t,e){return i==="phone"||!e?null:t?{size:1024,soft:!1,live:!1}:{size:2048,soft:!0,live:!0}}var zb=Math.PI/180,_i=i=>Math.min(1,Math.max(0,i)),vi=(i,t,e)=>i.map((n,r)=>n+(t[r]-n)*e);function Yb(i,t,e){if(!i)return{dir:[0,1,0],sun:0,color:[1,1,1],sky:1.6,shadow:0};let n=_i(t),r=(e+i.azimuth)*zb,o=Math.max(0,i.elevation)*zb,s=[Math.sin(r)*Math.cos(o),Math.sin(o),-Math.cos(r)*Math.cos(o)],l=2.6*_i(i.elevation/10)*(1-.75*n),c=_i((i.elevation+6)/12);return{dir:s,sun:l,color:vi([1,.62,.38],[1,.96,.9],_i(i.elevation/20)),sky:.35+c*(.75+.4*n),shadow:l>0?1-.8*n:0}}var Vb={top:[74,140,214],horizon:[178,208,234]},Gb={top:[148,155,164],horizon:[192,197,203]},Hb={top:[8,12,26],horizon:[24,32,54]},QT=[244,156,104],Wb=[186,190,195],tA=[88,112,70],eA=[226,231,238];function xd(i,t){let e=t??{cloud:0,rain:0,snow:0,fog:0},n=i??90,r=_i(e.cloud),o=_i((n+6)/12),s=1-.32*_i(e.rain),a=vi(Vb.top,Gb.top,r).map(p=>p*s),l=vi(Vb.horizon,Gb.horizon,r).map(p=>p*s),c=_i(1-Math.abs(n-1)/7)*(1-r);l=vi(l,QT,c*.85),a=vi(a,[92,112,168],c*.4);let h=_i(e.fog);a=vi(a,Wb,h),l=vi(l,Wb,h),a=vi(Hb.top,a,o),l=vi(Hb.horizon,l,o);let f=vi(tA,eA,_i(e.snow*1.25)).map(p=>p*(.15+.85*o)),d=p=>p.map(g=>Math.round(g));return{top:d(a),horizon:d(l),ground:d(f)}}function nA(i){return i instanceof Xt&&i.userData.fp3dThemed==="surface"&&i.blending===Mn}var Tu=class{group=new Te;sunLight=new Vs(16777215,0);skyLight=new Bs(12900590,5791818,1);lawn;twins=new Map;depths=new WeakMap;meshes=new Set;on=!1;plan=null;smooth=!1;dirty=!0;constructor(){let t=new Os({color:5795914,flatShading:!0,transparent:!0,depthWrite:!1});t.alphaMap=iA(),this.lawn=new _t(new Tr(1,48),t),this.lawn.rotation.x=-Math.PI/2,this.lawn.receiveShadow=!0,this.lawn.renderOrder=-2,this.group.add(this.sunLight,this.sunLight.target,this.skyLight,this.lawn)}get active(){return this.on}enable(t,e){if(e!==this.on){if(this.on=e,this.dirty=!0,e){t.add(this.group);return}t.remove(this.group);for(let n of this.meshes){let r=n.material.userData.fp3dBasic;r&&(n.material=r),n.castShadow=!1,n.receiveShadow=!1,n.customDepthMaterial=void 0}this.meshes.clear()}}setPlan(t,e){let n=this.plan;this.plan=e,this.smooth=!!t.getContextAttributes?.()?.antialias;let r=this.on&&!!e,o=e?.size??0;if(t.shadowMap.enabled!==r){t.shadowMap.enabled=r;for(let s of this.twins.values())s.needsUpdate=!0;this.lawn.material.needsUpdate=!0}t.shadowMap.type=e?.soft?Rr:Ph,t.shadowMap.autoUpdate=!!e?.live,this.sunLight.castShadow=r,o&&(!n||n.size!==o)&&(this.sunLight.shadow.map?.dispose(),this.sunLight.shadow.map=null,this.sunLight.shadow.mapSize.set(o,o)),this.sunLight.shadow.radius=e?.soft?3:1,this.sunLight.shadow.bias=e?.soft?-6e-4:-.002,this.dirty=!0}touch(){this.dirty=!0}update(t,e,n,r){let o=Yb(t,e?.cloud??0,n),s=xd(t?t.elevation:null,e),a=h=>new K().setRGB(h[0]/255,h[1]/255,h[2]/255,Ie);this.sunLight.intensity=o.sun,this.sunLight.color.setRGB(o.color[0],o.color[1],o.color[2],Ie),this.sunLight.shadow.intensity=o.shadow;let l=r.r*2;this.sunLight.position.set(r.x+o.dir[0]*l,r.y+o.dir[1]*l,r.z+o.dir[2]*l),this.sunLight.target.position.set(r.x,r.y,r.z),this.sunLight.target.updateMatrixWorld();let c=this.sunLight.shadow.camera;c.left=c.bottom=-r.r,c.right=c.top=r.r,c.near=.5,c.far=l*2,c.updateProjectionMatrix(),this.skyLight.intensity=o.sky,this.skyLight.color.copy(a(s.horizon).lerp(a(s.top),.4).lerp(new K(1,1,1),.6)),this.skyLight.groundColor.copy(a(s.ground)),this.lawn.material.color.copy(a(xd(null,e).ground)),this.lawn.position.set(r.x,r.y,r.z),this.lawn.scale.setScalar(r.r*1.6),this.dirty=!0}realize(t,e,n,r=!1){if(!this.on)return;let o=new Set;t.traverse(s=>{let a=s;if(!a.isMesh)return;let l=a.material,c=Array.isArray(l)?null:l.userData.fp3dBasic??(nA(l)?l:null);if(!c)return;o.add(a),a.material=this.twin(c),rA(a.geometry);let h=c.visible&&c.depthWrite&&(!c.transparent||c.opacity>.85);a.castShadow=e&&h,a.receiveShadow=e;let u=c.userData.fp3dFold;a.customDepthMaterial=u&&u.role!=="glass"?this.depth(u.masks,u.role):void 0}),this.meshes=o;for(let[s,a]of this.twins)qb(s,a,this.smooth);n&&this.plan&&!this.plan.live&&(this.dirty||r)&&(n.shadowMap.needsUpdate=!0),this.dirty=!1}dispose(){for(let t of this.twins.values())t.dispose();this.twins.clear(),this.lawn.geometry.dispose(),this.lawn.material.alphaMap?.dispose(),this.lawn.material.dispose(),this.sunLight.shadow.map?.dispose(),this.sunLight.dispose()}twin(t){let e=this.twins.get(t);if(e)return e;e=new Ds({vertexColors:t.vertexColors,map:t.map,flatShading:!0,specular:0}),e.userData.fp3dBasic=t,e.userData.fp3dVersion=t.version,qb(t,e,this.smooth),e.onBeforeCompile=(r,o)=>{t.onBeforeCompile(r,o),r.fragmentShader=r.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * fp3dGlow;`),oA(r)},e.customProgramCacheKey=()=>`${t.customProgramCacheKey()}-lit`;let n=e;return t.addEventListener("dispose",()=>{n.dispose(),this.twins.delete(t)}),this.twins.set(t,e),e}depth(t,e){let n=this.depths.get(t);n||this.depths.set(t,n=new Map);let r=n.get(e);return r||n.set(e,r=Nn(new Co,t,e)),r}};function iA(){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");if(!t)return null;let e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"#fff"),e.addColorStop(.55,"#fff"),e.addColorStop(1,"#000"),t.fillStyle=e,t.fillRect(0,0,64,64),new pn(i)}function qb(i,t,e){t.opacity=i.opacity,t.transparent=i.transparent,t.visible=i.visible,t.side=i.side,t.depthWrite=i.depthWrite,t.depthTest=i.depthTest,t.alphaTest=i.alphaTest,t.polygonOffset=i.polygonOffset,t.polygonOffsetFactor=i.polygonOffsetFactor,t.polygonOffsetUnits=i.polygonOffsetUnits,t.color.copy(i.color);let n=e&&!i.transparent;t.alphaToCoverage!==n&&(t.alphaToCoverage=n,t.needsUpdate=!0),t.map!==i.map&&(t.map=i.map,t.needsUpdate=!0),t.userData.fp3dVersion!==i.version&&(t.userData.fp3dVersion=i.version,t.needsUpdate=!0)}function rA(i){let t=i.getAttribute("position");if(!t)return;let e=i.getAttribute("fp3dMat");if(e&&(e.count===t.count||!("name"in e)||e.name!=="fp3dMatt"))return;let n=new vn(new Float32Array(t.count),1);n.name="fp3dMatt",i.setAttribute("fp3dMat",n)}function oA(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float fp3dMat;
flat varying int vFp3dMat;
varying vec3 vFp3dWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
  vFp3dMat = int(fp3dMat + 0.5);
  vFp3dWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
${sA}`).replace("#include <specularmap_fragment>",`#include <specularmap_fragment>
${aA}`).replace("#include <lights_phong_fragment>",`#include <lights_phong_fragment>
${lA}`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
${cA}`)}var sA=`
flat varying int vFp3dMat;
varying vec3 vFp3dWorld;
float fp3dHash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
// smooth value noise: the soft unevenness of a fabric
float fp3dNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(fp3dHash(i), fp3dHash(i + vec2(1.0, 0.0)), f.x), mix(fp3dHash(i + vec2(0.0, 1.0)), fp3dHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
// how much of a pattern (t in repeats) is still bigger than a pixel: 0 when finer, then only its average shows
float fp3dSharp(vec2 t) {
  return clamp(1.5 - max(fwidth(t.x), fwidth(t.y)) * 2.5, 0.0, 1.0);
}
`,aA=`
  int fp3dM = vFp3dMat;
  vec3 fp3dBase = diffuseColor.rgb;
  vec3 fp3dN = abs(normalize(cross(dFdx(vFp3dWorld), dFdy(vFp3dWorld))));
  vec2 fp3dUv = fp3dN.y > max(fp3dN.x, fp3dN.z) ? vFp3dWorld.xz : (fp3dN.x > fp3dN.z ? vFp3dWorld.zy : vFp3dWorld.xy);
  if (fp3dM == 3) {
    // glass: see-through without sorting: with antialiasing as coverage of the pixel, else every other pixel left out
    #ifdef ALPHA_TO_COVERAGE
      diffuseColor.a *= 0.45;
    #else
      if (mod(floor(gl_FragCoord.x) + floor(gl_FragCoord.y), 2.0) < 0.5) discard;
    #endif
    // a cool, pale tint
    diffuseColor.rgb = mix(fp3dBase, vec3(0.72, 0.84, 0.86), 0.5) * 0.6;
  } else if (fp3dM == 2) {
    // fabric: a soft unevenness and, close up, a plain weave of threads about 3 mm apart
    vec2 t = fp3dUv * 2000.0;
    float weave = (sin(t.x) * sin(t.y)) * fp3dSharp(t / 6.2832);
    float nap = fp3dNoise(fp3dUv * 18.0) - 0.5;
    diffuseColor.rgb *= 0.9 + 0.08 * weave + 0.12 * nap;
  } else if (fp3dM == 5) {
    // rattan: a basket weave of cells 5 cm across, two round strands each, turned a quarter in every other cell, dark
    // gaps between the cells; from afar the cells still show when the strands are finer than a pixel
    vec2 c = fp3dUv / 0.05;
    vec2 cell = floor(c);
    vec2 f = fract(c);
    bool across = mod(cell.x + cell.y, 2.0) < 0.5;
    float strand = fract((across ? f.y : f.x) * 2.0);
    float rounded = 1.0 - pow(abs(strand * 2.0 - 1.0), 2.0);
    float gap = smoothstep(0.0, 0.08, min(min(f.x, 1.0 - f.x), min(f.y, 1.0 - f.y)));
    float strands = mix(0.9, 0.62 + 0.48 * rounded, fp3dSharp(c * 2.0));
    float cells = mix(0.9, (across ? 1.0 : 0.8) * (0.6 + 0.4 * gap), fp3dSharp(c));
    diffuseColor.rgb *= strands * cells;
  } else if (fp3dM == 4) {
    // metal: little diffuse light, its colour is in its highlight and reflection
    diffuseColor.rgb = fp3dBase * 0.3;
  }
`,lA=`
  if (fp3dM == 1) {
    material.specularColor = vec3(0.45);
    material.specularShininess = 90.0;
  } else if (fp3dM == 4) {
    material.specularColor = mix(fp3dBase, vec3(1.0), 0.3) * 1.3;
    material.specularShininess = 45.0;
  } else if (fp3dM == 3) {
    material.specularColor = vec3(0.9);
    material.specularShininess = 160.0;
  } else if (fp3dM == 5) {
    material.specularColor = vec3(0.12);
    material.specularShininess = 20.0;
  }
`,cA=`
  if (fp3dM != 0) {
    // the sky and the ground in shiny surfaces (a bright sky above the horizon, the dark ground below it), more at a
    // glancing angle (Schlick); a sheen on fabric
    float fp3dFresnel = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 5.0);
    vec3 fp3dR = normalize((vec4(reflect(-geometryViewDir, geometryNormal), 0.0) * viewMatrix).xyz);
    #if NUM_HEMI_LIGHTS > 0
      vec3 fp3dSky = hemisphereLights[0].skyColor;
      vec3 fp3dGround = hemisphereLights[0].groundColor * 0.6;
    #else
      vec3 fp3dSky = vec3(0.4);
      vec3 fp3dGround = vec3(0.1);
    #endif
    vec3 fp3dEnv = mix(fp3dGround, fp3dSky, smoothstep(-0.15, 0.35, fp3dR.y));
    if (fp3dM == 1) reflectedLight.indirectSpecular += fp3dEnv * (0.05 + 0.35 * fp3dFresnel);
    else if (fp3dM == 4) reflectedLight.indirectSpecular += fp3dEnv * mix(fp3dBase, vec3(1.0), fp3dFresnel) * 0.7;
    else if (fp3dM == 3) reflectedLight.indirectSpecular += fp3dEnv * (0.12 + 0.6 * fp3dFresnel);
    else if (fp3dM == 2) reflectedLight.indirectDiffuse += fp3dSky * fp3dBase * fp3dFresnel * 0.6;
  }
`;var uA=40;function Kb(i,t,e,n,r){let o=[];if(n<=0)return o;let s=1/Math.tan(n*Math.PI/180),a=(c,h,u)=>{let f=Math.min(uA,Math.max(0,h-r)*s);return[c-e[0]*f,u-e[1]*f]},l=(c,h,u)=>o.push(c[0],c[1],h[0],h[1],u[0],u[1]);for(let c of i.floors)for(let h of c.rooms){if(h.outdoor||h.points.length<3)continue;let u=c.elevation+(h.ceiling_height??c.height);if(u<=r)continue;let f=Math.max(r,c.elevation),d=h.points.map(([g,b])=>a(g,f,b)),p=h.points.map(([g,b])=>a(g,u,b));for(let[g,b,m]of bn(h.points))l(d[g],d[b],d[m]),l(p[g],p[b],p[m]);for(let g=0;g<h.points.length;g++){let b=(g+1)%h.points.length;l(d[g],d[b],p[b]),l(d[g],p[b],p[g])}}for(let c of t){let h=c.floor.elevation+c.base,u=c.solid.p;for(let f=0;f+8<u.length;f+=9)l(a(u[f],h+u[f+1],u[f+2]),a(u[f+3],h+u[f+4],u[f+5]),a(u[f+6],h+u[f+7],u[f+8]))}return o}function Zb(i){if(!i.length)return null;let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let o=0;o<i.length;o+=2)t=Math.min(t,i[o]),n=Math.max(n,i[o]),e=Math.min(e,i[o+1]),r=Math.max(r,i[o+1]);return[t,e,n,r]}function yd(i,t){let e=[],n=[],r=[],o=[],s=[];for(let{face:l,field:c}of i){let h=e.length/3,u=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=hA(c.id)%1e3/1e3;for(let g of ga(l,c)){let[b,m,x,v]=g.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),y=[[b,0,0],[m,1,0],[x,1,1],[v,0,1]];for(let M of[0,1,2,0,2,3]){let[w,T,_]=y[M];e.push(w[0],w[1],w[2]),n.push(T,_),r.push(u,f),o.push(d)}}let p=e.length/3-h;p&&s.push({id:c.id,start:h,count:p})}if(!e.length)return null;let a=new Vt;return a.setAttribute("position",new It(e,3)),a.setAttribute("uv",new It(n,2)),a.setAttribute("aCells",new It(r,2)),a.setAttribute("aPhase",new It(o,1)),a.setAttribute("aLevel",new It(new Float32Array(e.length/3),1)),{geometry:a,ranges:s}}function Aa(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let o of i.ranges){let s=Math.min(1,Math.max(0,t.get(o.id)??0));n.fill(s,o.start,o.start+o.count),s>.02&&(r=!0)}return e.needsUpdate=!0,r}function vd(i){let t=new Xt({transparent:!0,blending:Ee,depthWrite:!1,side:re});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aCells;
attribute float aLevel;
attribute float aPhase;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCells = aCells;
vLevel = aLevel;
vPhase = aPhase;
vLiveUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        // the cell borders of the module
        vec2 fp3dG = abs(fract(vLiveUv * vCells) - 0.5);
        float fp3dLine = smoothstep(0.455, 0.5, max(fp3dG.x, fp3dG.y));
        // a band of light sweeping down the module towards the eave, faster with more power
        float fp3dSweep = exp(-fract(vLiveUv.y * 1.3 + uFlowTime * (0.12 + 0.3 * vLevel) + vPhase) * 4.0);
        // a second, faint band crossing the other way keeps the picture alive
        float fp3dBack = 0.35 * exp(-fract(vLiveUv.x * 0.9 - uFlowTime * 0.07 + vPhase * 2.0) * 6.0);
        // the cells glow softly, their borders light up as the band passes
        float fp3dGlow = vLevel * (0.07 + 0.32 * fp3dSweep + 0.10 * fp3dBack) + fp3dLine * vLevel * (0.35 + 0.9 * fp3dSweep);
        vec3 fp3dAmber = vec3(1.0, 0.76, 0.30);
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function hA(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var Jb=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,fA=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLevel;
  uniform float uFlow;
  uniform float uHeat;
  uniform float uSurface;
  varying vec2 vXZ;
  float wave(vec2 p, float t) {
    return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) + 0.5 * sin((p.x + p.y) * 4.3 + t * 1.7);
  }
  void main() {
    float t = uTime * (0.3 + 1.5 * uFlow);
    float c = wave(vXZ, t) + wave(vXZ * 1.7 + 3.0, t * 1.3);
    // bright lines where the waves cross: the caustics of light under moving water
    float caustic = pow(clamp(1.0 - abs(c) * 0.55, 0.0, 1.0), 5.0);
    // the surface of a pool with a basin is a faint shimmer, the light's pattern lies on the floor below
    float base = mix(0.32, 0.16, uSurface);
    float lines = mix(0.35 + 0.6 * uFlow, 0.18 + 0.3 * uFlow, uSurface);
    vec3 col = uColor * uLevel * (base + lines * caustic);
    col += vec3(1.0, 0.42, 0.12) * uHeat * 0.07 * (0.6 + 0.4 * sin(t * 1.7 + vXZ.x * 2.0 + vXZ.y));
    gl_FragColor = vec4(col, 1.0);
  }
`,dA=Jb,pA=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function jb(i,t){let e=[];for(let[r,o,s]of bn(i))for(let a of[r,s,o])e.push(i[a][0],t,i[a][1]);let n=new Vt;return n.setAttribute("position",new It(e,3)),n}function Qb(i,t){let e=new Te;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,o=(s,a)=>{let l=new _t(jb(n.points,s),new mn({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:Jb,fragmentShader:fA,transparent:!0,blending:Ee,depthWrite:!1,side:re}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(o(n.floorY+.01,0),o(n.y+.004,1)):o(n.y+.004,0),n.cover>.02){let s=n.points.map(b=>b[0]),a=n.points.map(b=>b[1]),[l,c,h,u]=[Math.min(...s),Math.max(...s),Math.min(...a),Math.max(...a)],f=c-l>=u-h,d=Math.min(1,n.cover),p=f?[[l-.1,h-.1],[l+(c-l)*d,h-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,h-.1],[c+.1,h-.1],[c+.1,h+(u-h)*d],[l-.1,h+(u-h)*d]],g=Wo(n.points,p);if(g.length>=3){let b=new _t(jb(g,n.y+.03),new mn({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:dA,fragmentShader:pA,transparent:!0,side:re}));b.renderOrder=6,e.add(b);let m=[];for(let v=0;v<g.length;v++){let y=g[v],M=g[(v+1)%g.length];m.push(y[0],n.y+.032,y[1],M[0],n.y+.032,M[1])}let x=new Vt;x.setAttribute("position",new It(m,3)),e.add(new Ge(x,new je({color:5995775,transparent:!0,opacity:.6})))}}}return e}function tx(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var ex=["neon","blueprint","day","realistic"];function Ru(i){return ex.indexOf(i)}var is={value:new X(.22,.88,1)},rs={value:0};function nx(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var Eu=i=>{let t=new K(i);return`vec3(${t.r.toFixed(6)}, ${t.g.toFixed(6)}, ${t.b.toFixed(6)})`},mA=`vec3 fp3dFloor(vec3 c) {
${Object.entries(wa).map(([i,t])=>`  if (distance(c, ${Eu(pr[i].color)}) < 0.0002) return ${Eu(t)};`).join(`
`)}
  return vec3(-1.0);
}`,gA=[.04,.09,.22],Au={base:.22,gain:5.8,max:.97,hue:.12},bA=11056326,xA=.25,yA=(i,t,e)=>[16,8,0].reduce((n,r)=>n|Math.round((i>>r&255)*(1-e)+(t>>r&255)*e)<<r,0);function vA(i){let t=Object.keys(pr).find(e=>pr[e].color===i);return t&&wa[t]!==void 0?yA(wa[t],bA,xA):null}var _d={from:.105,gain:54,max:.4};var _A=`vec3 fp3dDayFloor(vec3 c) {
${Object.keys(wa).map(i=>`  if (distance(c, ${Eu(pr[i].color)}) < 0.0002) return ${Eu(vA(pr[i].color))};`).join(`
`)}
  return vec3(-1.0);
}`,MA=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
// the realistic look: how much a signal colour lights itself (lit lamps, open windows, screens glow in the light)
float fp3dGlow = 0.0;
${mA}
${_A}
vec3 fp3dThemed(vec3 c, bool line) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    // a notch more light on walls and items than on the floors (#88); signal colours and lines as built
    if (line || (mx > 0.45 && sat > 0.45)) return c;
    float lift = dot(c, vec3(0.299, 0.587, 0.114));
    return c * (1.0 + clamp((lift - ${_d.from}) * ${_d.gain.toFixed(1)}, 0.0, ${_d.max}));
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 3) {
    // realistic (#39): the lights do the shading; surfaces get light, warm colours, edges are faint dark lines and
    // bright signal colours glow. The neon's navy cast is taken out of the hue, so its navy surfaces turn neutral
    // while a green lawn or a brown floor keeps some of its colour.
    if (line) return vec3(0.08, 0.09, 0.11);
    vec3 floorTint = fp3dFloor(c);
    if (floorTint.r >= 0.0) return floorTint;
    if (mx > 0.45 && sat > 0.45) {
      fp3dGlow = smoothstep(0.85, 1.0, mx) * 0.9;
      return c;
    }
    vec3 hue = (c / max(mx, 0.001)) / vec3(0.21, 0.4, 1.0);
    hue /= max(hue.r, max(hue.g, hue.b));
    vec3 g = vec3(clamp(0.3 + l * 3.2, 0.0, 0.86)) * vec3(1.0, 0.97, 0.93);
    return mix(g, g * hue, 0.5);
  }
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day (#86): dark navy lines; floors in their material's colour; other surfaces lighten by their neon luminance,
  // spread wide so slabs, walls and items stand apart, with a little of their hue
  if (line) return vec3(${gA.join(", ")}) * clamp(mx * 1.6, 0.75, 1.0);
  vec3 dayFloor = fp3dDayFloor(c);
  if (dayFloor.r >= 0.0) return dayFloor;
  vec3 g = vec3(clamp(${Au.base.toFixed(3)} + l * ${Au.gain.toFixed(3)}, 0.0, ${Au.max.toFixed(3)}));
  return mix(g, g * (c / max(mx, 0.001)), ${Au.hue.toFixed(3)});
}
`;function We(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,s)=>{n(o,s),o.uniforms.uTheme=t,o.uniforms.uAccent=is,o.uniforms.uAccentOn=rs,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${MA}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});${e?`
  if (uTheme == 3) diffuseColor.a *= 0.22;`:""}`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i.userData.fp3dThemed=e?"line":"surface",i}function Ea(i){return i==="day"||i==="realistic"?Mn:Ee}var ki=.012,wA=.012;function rx(i,t,e,n,r,o=[],s){let a=[],l=[],c=[],h=[],u=(m,x,v,y,M,w,T)=>{for(let _ of[m,x,v,m,v,y])a.push(_[0],_[1],_[2]),l.push(M[0],M[1],M[2]),c.push(w),h.push(T)};i.rooms.forEach((m,x)=>{if(m.points.length<3)return;let v=m.points.map(S=>S[0]),y=m.points.map(S=>S[1]),M=Math.min(...v),w=Math.min(...y),T=Math.max(...v),_=Math.max(...y),E=Math.max(1,Math.ceil((T-M)/r)),R=Math.max(1,Math.ceil((_-w)/r));for(let S=0;S<E;S++)for(let P=0;P<R;P++){let k=M+S*r,D=w+P*r,U=Math.min(k+r,T),A=Math.min(D+r,_),I=Wo(m.points,[[k,D],[U,D],[U,A],[k,A]]),O=I.length>=3?Math.abs(PA(I)):0;if(O<1e-4)continue;let C=CA(I);if(!o.some(B=>jt(C,B))){if(O>(U-k)*(A-D)-1e-6){u([k,ki,D],[k,ki,A],[U,ki,A],[U,ki,D],[0,1,0],x,-1);continue}for(let[B,z,W]of bn(I)){let V=I[B],Y=I[W],et=I[z];(et[1]-V[1])*(Y[0]-V[0])-(et[0]-V[0])*(Y[1]-V[1])<0&&([V,Y]=[Y,V]),u([V[0],ki,V[1]],[et[0],ki,et[1]],[Y[0],ki,Y[1]],[Y[0],ki,Y[1]],[0,1,0],x,-1)}}}});let f=i.rooms.length,d=(i.outdoor??[]).filter(m=>m.points.length>=3&&!jn(m.type));if(d.length){let m=d.flatMap(_=>_.points.map(E=>E[0])),x=d.flatMap(_=>_.points.map(E=>E[1])),v=Math.floor(Math.min(...m)/r)*r,y=Math.floor(Math.min(...x)/r)*r,M=Math.max(1,Math.ceil((Math.max(...m)-v)/r)),w=Math.max(1,Math.ceil((Math.max(...x)-y)/r)),T=(_,E,R)=>Jg(i,_)-oa(i,_,E,R)+ki;for(let _=0;_<M;_++)for(let E=0;E<w;E++){let R=v+_*r,S=y+E*r,P,k=[R+r/2,S+r/2];P=d.find(U=>U.type==="pool"&&jt(k,U.points));for(let U=d.length-1;U>=0&&!P;U--)jt(k,d[U].points)&&(P=d[U]);if(!P)continue;let D=(U,A)=>[U,T(P,U,A),A];u(D(R,S),D(R,S+r),D(R+r,S+r),D(R+r,S),[0,1,0],f,-1)}}let p=Math.min(i.cut_height,i.height),g=[];t.forEach((m,x)=>{let v=Math.min(i.height,m.height??i.height),y=Math.min(p,v-.02),M=m.b[0]-m.a[0],w=m.b[1]-m.a[1],T=Math.hypot(M,w);if(T<.05)return;let _=[M/T,w/T],E=[-_[1],_[0]],R=e[x],S=TA(m,_,T,n),P=(A,I)=>A?i.rooms.findIndex(O=>O.id===A):I?f:-1;g.push({a:m.a,b:m.b,h:v,ra:P(m.roomLeft,!1),rb:P(m.roomRight,m.exterior),gaps:S});let k=(A,I,O)=>[I,O,...A.filter(C=>C>I+.005&&C<O-.005)].sort((C,B)=>C-B).filter((C,B,z)=>B===0||C>z[B-1]+.005),D=k([y,(y+v)/2,...S.flatMap(A=>[A.y0+.01,A.y1-.01])],.02,v-.02),U=k(S.flatMap(A=>[A.s0,A.s1]),0,T);for(let A of[1,-1]){let I=A>0?m.roomLeft:m.roomRight,O=I?i.rooms.findIndex(V=>V.id===I):m.exterior?f:-1;if(O<0)continue;let C=(A>0?m.left:m.right)+wA,B=[E[0]*A,E[1]*A],z=(V,Y)=>[m.a[0]+_[0]*V+B[0]*C,Y,m.a[1]+_[1]*V+B[1]*C],W=V=>{let Y=z(V,0),et=s?.(Y[0],Y[2]);return et==null?1/0:et-.02};for(let V=0;V<U.length-1;V++){let Y=U[V+1]-U[V],et=Math.max(1,Math.ceil(Y/r));for(let nt=0;nt<et;nt++){let $=U[V]+Y/et*nt,H=U[V]+Y/et*(nt+1),J=($+H)/2;for(let ot=0;ot<D.length-1;ot++){let Q=D[ot],bt=D[ot+1];if(bt-Q<.01)continue;let gt=(Q+bt)/2;if(S.some(mt=>J>mt.s0&&J<mt.s1&&gt>mt.y0&&gt<mt.y1))continue;let ut=Q>=p-1e-6?R:ur+R,ft=Math.min(bt,W($)),Lt=Math.min(bt,W(H));ft<=Q+.005&&Lt<=Q+.005||u(z($,Q),z(H,Q),z(H,Math.max(Q,Lt)),z($,Math.max(Q,ft)),[B[0],0,B[1]],O,ut)}}}}});let b=[];for(let m of n){if(m.opening.type!=="door")continue;let x=t.find(M=>ox(M,m)&&SA(M,m));if(!x||!x.roomLeft||!x.roomRight)continue;let v=i.rooms.findIndex(M=>M.id===x.roomLeft),y=i.rooms.findIndex(M=>M.id===x.roomRight);v<0||y<0||b.push({id:m.opening.id,a:v,b:y,x:m.start[0]+m.axis[0]*(m.width/2),y:Math.min(1.1,m.top*.55),z:m.start[1]+m.axis[1]*(m.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:b,blockers:g}}function ox(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function SA(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,o=t.start[0]+t.axis[0]*(t.width/2),s=t.start[1]+t.axis[1]*(t.width/2),a=((o-i.a[0])*e+(s-i.a[1])*n)/r;return a>-.05&&a<r+.05}function TA(i,t,e,n){let r=[];for(let o of n){if(!ox(i,o))continue;let s=(o.start[0]-i.a[0])*t[0]+(o.start[1]-i.a[1])*t[1],l=o.axis[0]*t[0]+o.axis[1]*t[1]>0?s:s-o.width;l>e||l+o.width<0||r.push({s0:l,s1:l+o.width,y0:o.sill-.01,y1:o.top+.01})}return r}function AA(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function EA(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function ix(i,t,e,n,r,o,s){let a=t-i.x,l=e-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=EA(i),d=1/(1+h/(f*f)),p=d*Math.sqrt(d),g=Math.max(0,-(a*r+l*o+c*s)/u);return i.level*p*(.2+.8*g)*AA(i.kind,l/u)}function sx(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((h,u)=>{let f=n[u]??.5;if(!(f<=.01))for(let[d,p]of[[h.a,h.b],[h.b,h.a]]){let g=[0,0,0];for(let m of t){if(m.room!==d)continue;let x=m.x-h.x,v=m.y-h.y,y=m.z-h.z,M=Math.hypot(x,v,y)||1,w=ix(m,h.x,h.y,h.z,x/M,v/M,y/M);g[0]+=m.color[0]*w,g[1]+=m.color[1]*w,g[2]+=m.color[2]*w}let b=Math.max(g[0],g[1],g[2]);b<.01||r.push({x:h.x,y:h.y,z:h.z,color:[g[0]/b,g[1]/b,g[2]/b],level:Math.min(1,b*.9*(.35+.65*f)),kind:"wall",room:p})}});let o=new Map;for(let h of r){let u=i.blockers.filter(d=>d.ra===h.room||d.rb===h.room),f={...h,color:h.color.map(d=>Math.pow(d,1.5)),walls:u};o.set(h.room,[...o.get(h.room)??[],f])}let{pos:s,normal:a,room:l}=i,c=new Float32Array(s.length);for(let h=0;h<l.length;h++){let u=o.get(l[h]);if(!u)continue;let f=h*3,d=0,p=0,g=0;for(let b of u){if(b.walls.length&&RA(b,b.walls,s[f],s[f+1],s[f+2]))continue;let m=ix(b,s[f],s[f+1],s[f+2],a[f],a[f+1],a[f+2]);d+=b.color[0]*m,p+=b.color[1]*m,g+=b.color[2]*m}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-p*e*1.6),c[f+2]=1-Math.exp(-g*e*1.6)}return c}function RA(i,t,e,n,r){let o=e-i.x,s=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=o*c-s*l;if(Math.abs(h)<1e-9)continue;let u=a.a[0]-i.x,f=a.a[1]-i.z,d=(u*c-f*l)/h;if(d<=1e-6||d>=1-1e-6)continue;let p=(u*s-f*o)/h;if(p<0||p>1)continue;let g=i.y+(n-i.y)*d;if(g>=a.h)continue;let b=p*Math.hypot(l,c);if(!a.gaps.some(m=>b>m.s0&&b<m.s1&&g>m.y0&&g<m.y1))return!0}return!1}function Md(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&jt([t,e],r.points));return n<0?i.rooms.length:n}function os(i,t){return i&&t>=0&&t<i.length?i[t]:t}function PA(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function CA(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}var Ra={open:0,open2:0,tilt:0,tilt2:0,cover:null},ax=2043986,lx=2769520,IA=2242399,wd=1845831,LA=1450554,Di=16758087,Pu=3662079,FA=1.2,kA=1.5,DA=.5,OA=1846349,NA=2572395,UA=1120816,BA=1845831,cx=5995775,ux=9085695,ss=Ut(3662079,.08),zA=.2;function Cu(i,t,e,n,r,o,s,a,l,c,h){let u=(d,p,g)=>t(d,p,g),f=[[u(e,r,a),u(n,r,a),u(n,o,a),u(e,o,a),c],[u(e,r,s),u(n,r,s),u(n,o,s),u(e,o,s),Ut(l.getHex(),.6)],[u(e,o,s),u(n,o,s),u(n,o,a),u(e,o,a),l],[u(e,r,s),u(n,r,s),u(n,r,a),u(e,r,a),Ut(l.getHex(),.85)],[u(e,r,s),u(e,o,s),u(e,o,a),u(e,r,a),Ut(l.getHex(),.92)],[u(n,r,s),u(n,o,s),u(n,o,a),u(n,r,a),Ut(l.getHex(),.92)]];for(let[d,p,g,b,m]of f)i.tri(d,p,g,m,m,m,void 0,h),i.tri(d,g,b,m,m,m,void 0,h)}function me(i,t,e,n,r,o,s,a,l,c,h,u){if(a<=h+1e-6)return Cu(i,t,e,n,r,o,s,a,l,c,te);if(s>=h-1e-6)return Cu(i,t,e,n,r,o,s,a,l,c,u);Cu(i,t,e,n,r,o,s,h,l,c,te),Cu(i,t,e,n,r,o,h,a,l,c,u)}function Oi(i,t,e,n,r,o,s,a,l,c,h=0){let u=(f,d,p)=>{let g=y=>h?(s-y)/h:.5,b=t(e,r,f),m=t(n,r,f),x=t(n,r,d),v=t(e,r,d);i.tri(b,m,x,a,a,a,[0,g(f),1,g(f),1,g(d)],p),i.tri(b,x,v,a,a,a,[0,g(f),1,g(d),0,g(d)],p)};s<=l+1e-6?u(o,s,te):o>=l-1e-6?u(o,s,c):(u(o,l,te),u(l,s,c))}function VA(i,t,e,n,r,o,s,a,l,c){let h=t(e,r,s),u=t(n,r,s),f=t(n,o,s),d=t(e,o,s),p=0,g=(o-r)/c;i.tri(h,u,f,a,a,a,[0,p,1,p,1,g],l),i.tri(h,f,d,a,a,a,[0,p,1,g,0,g],l)}function GA(i,t){let[e,n]=i.axis;for(let r of t){if(r===i||r.opening.id===i.opening.id)continue;let o=e*r.axis[0]+n*r.axis[1];if(Math.abs(o)<.999)continue;let s=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(s*n-a*e)>.03)continue;let l=s*e+a*n,c=o>0?l:l-r.width,h=c+r.width;if(Math.min(i.width,h)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let f=i.sill-r.top;if(f>=-.05&&f<=.3)return!0}return!1}function HA(i,t){let e=i.opening.sill_board??"auto";if(e==="none")return{inside:!1,outside:!1};if(e==="inside"||e==="outside")return{inside:e==="inside",outside:e==="outside"};let n=i.sill>.3&&!GA(i,t)&&pi(i.opening,i.exterior)!=="glass_wall";return{inside:n,outside:n&&i.exterior}}function hx(i,t,e,n,r,o,s,a,l){let c=HA(i,t),h=i.width,u=Math.max(i.sill,.03);c.inside&&me(e,n,-.04,h+.04,r+o,i.faceRoom+.07,u-.03,u,new K(wd),s,a,l),c.outside&&me(e,n,-.03,h+.03,-i.faceOut-.06,r-o,u-.04,u-.02,new K(wd),s,a,l)}function fx(i,t,e){let n=new Jt,r=new Jt,o=new Jt(!0),s=new K(ax),a=new K(lx),l=[],c=[],h=[];for(let u of i){let f=n.count,d=r.count,p=o.count,g=t.get(u.opening.id)??Ra,b=u.width,{sill:m,top:x,bucket:v}=u,y=(_,E,R)=>[u.start[0]+u.axis[0]*_+u.toRoom[0]*E,R,u.start[1]+u.axis[1]*_+u.toRoom[1]*E],M=(u.faceRoom-u.faceOut)/2,w=u.opening.mark==="closed",T=u.opening.type==="door"&&pi(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!T||u.opening.type==="garage"){let _=-u.faceOut-.012,E=u.faceRoom+.012,R=u.opening.type==="garage"&&(w?!!g.sensed&&(g.cover??1)>=.95:(g.cover??1)<.95),S=R?Ut(Di,.8):new K(ax),P=R?Ut(Di,1):new K(lx);me(n,y,-.045,.02,_,E,m,x+.045,S,P,e,v),me(n,y,b-.02,b+.045,_,E,m,x+.045,S,P,e,v),me(n,y,.02,b-.02,_,E,x-.02,x+.045,S,P,e,v)}if(u.opening.type==="door"){let _=pi(u.opening,u.exterior),E=N0(_),R=u.opening.swing==="out"?-1:1,S=R>0?u.faceRoom:-u.faceOut,P=u.opening.leaves===2,k=.02,D=b-.02,U=O0(b,_,u.hingeAtStart,u.opening);if(U){let B=-u.faceOut-.012,z=u.faceRoom+.012,W=S-R*(E?.06:.04)/2,V=.06;for(let[Y,et]of U.panels)me(n,y,Y,Y+V,B,z,m+.02,x-.02,s,a,e,v),me(n,y,et-V,et,B,z,m+.02,x-.02,s,a,e,v),me(n,y,Y+V,et-V,B,z,m+.02,m+.12,s,a,e,v),Oi(r,y,Y+V,et-V,W,m+.12,x-.02,ss,e,v);k=U.x0,D=U.x1}let A=P?(D-k)/2-.004:D-k,I=E?.06:.04;u.exterior&&(E||_==="glass")&&me(n,y,b/2-.08,b/2+.08,-u.faceOut-.1,-u.faceOut,x+.1,x+.17,Ut(Di,.55),Ut(Di,.85),e,te),E&&me(n,y,.02,b-.02,-u.faceOut-.02,u.faceRoom,m,m+.02,new K(wd),a,e,v);let O=T?[]:[[u.hingeAtStart,g.open]];P&&!T&&O.push([!u.hingeAtStart,g.open2??0]);let C=u.opening.open_angle;for(let[B,z]of O){let W=Math.min(1,Math.max(0,z)),V=_==="sliding"?0:C!=null&&C>0?(g.sensed?W:Math.min(1,W/DA))*Math.min(170,C)*(Math.PI/180):W*kA,Y=_==="sliding"?W*A:0,et=(ut,ft,Lt)=>{let mt=ut*Math.cos(V)-ft*Math.sin(V)-Y,$t=S+R*(ft*Math.cos(V)+ut*Math.sin(V)+(Y?.05:0));return y(B?k+mt:D-mt,$t,Lt)},nt=W>.05?te:v,$=w?!!g.sensed&&W<.05:W>.9,H=$?Ut(Di,.7):new K(E?UA:OA),J=$?Ut(Di,.9):new K(E?BA:NA);_==="glass"?(me(n,et,0,.05,-I,0,m+.01,x-.01,H,J,e,nt),me(n,et,A-.05,A,-I,0,m+.01,x-.01,H,J,e,nt),me(n,et,.05,A-.05,-I,0,m+.01,m+.12,H,J,e,nt),me(n,et,.05,A-.05,-I,0,x-.08,x-.01,H,J,e,nt),Oi(r,et,.05,A-.05,-I/2,m+.12,x-.08,ss,e,nt)):me(n,et,0,A,-I,0,m+.01,x-.01,H,J,e,nt);for(let ut of[.001,-I-.001])_==="front_glass"?Oi(r,et,.12,A-.12,ut,m+(x-m)*.55,x-.18,ss,e,nt):E&&Oi(r,et,.1,.18,ut,m+.3,x-.3,ss,e,nt);let ot=m+Math.min(1.05,(x-m)*.5),Q=E?.3:.012,bt=E?A-.11:A-.16,gt=E?A-.08:A-.05;me(n,et,bt,gt,.004,.05,ot-Q,ot+Q,new K(cx),new K(ux),e,nt),me(n,et,bt,gt,-I-.05,-I-.004,ot-Q,ot+Q,new K(cx),new K(ux),e,nt),g.unlocked&&B===u.hingeAtStart&&me(n,et,A-.022,A+.004,-I-.006,.006,m+.03,x-.03,Ut(Pu,.85),Ut(Pu,1),e,nt)}}else if(u.opening.type==="garage"&&pi(u.opening,u.exterior)==="up_and_over"){let _=Math.min(1,Math.max(0,g.cover??1)),E=u.faceRoom-.03,R=x-m,S=R/3,P=(1-_)*(Math.PI/2),k=m+S+(x-.03-m-S)*(1-_),D=(A,I,O)=>y(A,E+O*Math.sin(P)+I*Math.cos(P),k+O*Math.cos(P)-I*Math.sin(P)),U=Math.cos(P)>.01?(e-k)/Math.cos(P):k>e?-1/0:1/0;Oi(o,D,.02,b-.02,0,-S,R-S,new K(13951231),U,v,.5)}else if(u.opening.type==="garage"){let _=Math.min(1,Math.max(0,g.cover??1)),E=new K(13951231),R=u.faceRoom-.03,S=x*(1-_);_>.01&&Oi(o,y,.02,b-.02,R,S,x,E,e,v,.5);let P=(1-_)*x;P>.01&&VA(o,y,.02,b-.02,R,R+P,x+.03,E,v,.5)}else if(pi(u.opening,u.exterior)==="glass_wall"){me(n,y,0,.04,M-.025,M+.025,m,x,s,a,e,v),me(n,y,b-.04,b,M-.025,M+.025,m,x,s,a,e,v),me(n,y,.04,b-.04,M-.025,M+.025,m,m+.03,s,a,e,v),me(n,y,.04,b-.04,M-.025,M+.025,x-.04,x,s,a,e,v),hx(u,i,n,y,M,.025,a,e,v);let R=Math.max(1,Math.round((b-2*.04)/.9)),S=(b-2*.04)/R;for(let P=1;P<R;P++){let k=.04+P*S;me(n,y,k-.02,k+.02,M-.025,M+.025,m+.03,x-.04,s,a,e,v)}for(let P=0;P<R;P++){let k=.04+P*S+(P?.02:0),D=.04+(P+1)*S-(P<R-1?.02:0);Oi(r,y,k,D,M,m+.03,x-.04,ss,e,v)}}else{me(n,y,0,.06,M-.035,M+.035,m,x,s,a,e,v),me(n,y,b-.06,b,M-.035,M+.035,m,x,s,a,e,v),me(n,y,.06,b-.06,M-.035,M+.035,m,m+(m>.05?.06:.03),s,a,e,v),me(n,y,.06,b-.06,M-.035,M+.035,x-.06,x,s,a,e,v),hx(u,i,n,y,M,.035,a,e,v);let R=.055,S=m+(m>.05?.06:.03),P=x-.06,k=M+.035,D=M+.035+.06,A=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:b/2,x1:u.hingeAtStart?b/2:b-.06,open:g.open,tilt:g.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?b/2:.06,x1:u.hingeAtStart?b-.06:b/2,open:g.open2??0,tilt:g.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:b-.06,open:g.open,tilt:g.tilt}];for(let I of A){let O=I.open>.02||I.tilt>.02,C=w?!!g.sensed&&!O:O,B=C?Ut(Di,.75):new K(IA),z=C?Ut(Di,.95):a,W=I.x0,V=I.x1,Y=V-W,et=I.open*FA*(u.opening.swing==="out"?-1:1),nt=I.tilt*zA,$=(J,ot,Q)=>{let bt=Q-S,gt=ot+bt*Math.sin(nt),ut=S+bt*Math.cos(nt),ft=J*Math.cos(et)-(gt-k)*Math.sin(et);gt=k+(gt-k)*Math.cos(et)+J*Math.sin(et);let Lt=I.atStart?W+ft:V-ft;return y(Lt,gt,ut)},H=Math.abs(et)>.05?te:v;if(me(n,$,0,R,k,D,S,P,B,z,e,H),me(n,$,Y-R,Y,k,D,S,P,B,z,e,H),me(n,$,R,Y-R,k,D,S,S+R,B,z,e,H),me(n,$,R,Y-R,k,D,P-R,P,B,z,e,H),Oi(r,$,R,Y-R,(k+D)/2,S+R,P-R,C?Ut(Di,.16):ss,e,H),g.unlocked&&I.atStart===u.hingeAtStart&&me(n,$,Y-.022,Y+.004,k-.006,D+.006,S+.02,P-.02,Ut(Pu,.85),Ut(Pu,1),e,H),pi(u.opening,u.exterior)==="bars"){let J=(S+P)/2,ot=(k+D)/2;me(n,$,R,Y-R,ot-.012,ot+.012,J-.012,J+.012,B,z,e,H),me(n,$,Y/2-.012,Y/2+.012,ot-.012,ot+.012,S+R,P-R,B,z,e,H)}}}if(g.cover!==null&&!(u.opening.type==="garage"&&pi(u.opening,u.exterior)==="up_and_over")){let _=-u.faceOut,E=x+.2;me(n,y,-.05,b+.05,_-.15,_,x,E,new K(LA),a,e,v);let R=Math.min(1,Math.max(0,g.cover));if(R>.01){let S=x-R*(x-m);Oi(o,y,0,b,_-.07,S,x,new K(16777215),e,v,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),h.push({id:u.opening.id,start:p,end:o.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:o.geometry(),frameTris:l,glassTris:c,blindTris:h}}var WA=.3,dx=2.6;function px(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),o=i.map(M=>M[1]),s=Math.min(...r),a=Math.max(...r),l=Math.min(...o),c=Math.max(...o),h=c-l>=a-s,u=e*.7071,f=M=>{let w=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],T=[...w,[M[0]+u,M[1]+u],[M[0]-u,M[1]+u],[M[0]+u,M[1]-u],[M[0]-u,M[1]-u]];return w.every(_=>jt(_,i))&&!n.some(_=>T.some(E=>jt(E,_)))},d=(M,w)=>f(h?[M,w]:[w,M]),p=(M,w)=>{let T=Math.ceil(Math.hypot(w[0]-M[0],w[1]-M[1])/.05);for(let _=1;_<T;_++)if(!f([M[0]+(w[0]-M[0])*_/T,M[1]+(w[1]-M[1])*_/T]))return!1;return!0},[g,b,m,x]=h?[s,a,l,c]:[l,c,s,a],v=[],y=!0;for(let M=g+e;M<=b-e+1e-6;M+=t){let w=null,T=null,_=.05;for(let P=m;P<=x+1e-6;P+=_)if(d(M,P)&&(T??=P),(!d(M,P)||P+_>x+1e-6)&&T!==null){let k=d(M,P)?P:P-_;(!w||k-T>w[1]-w[0])&&(w=[T,k]),T=null}if(!w||w[1]-w[0]<.2)continue;let E=P=>{let[k,D]=P?w:[w[1],w[0]];return[h?[M,k]:[k,M],h?[M,D]:[D,M]]},R=E(y),S=v[v.length-1];if(S&&n.length&&!p(S,R[0])){let P=E(!y);if(!p(S,P[0]))continue;R=P,y=!y}v.push(R[0],R[1]),y=!y}return v}function Td(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let o=r/e*Math.PI*2;return[i[0]+Math.cos(o)*t,i[1]+Math.sin(o)*t]})}var Sd=i=>Math.atan2(Math.sin(i),Math.cos(i));function mx(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],o=n[1]-i.pos[1],s=Math.hypot(r,o);if(s<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Sd(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),dx*e),!0)}let a=Math.atan2(r,o),l=Sd(a-i.heading);if(i.heading=Sd(i.heading+Math.sign(l)*Math.min(Math.abs(l),dx*e)),Math.abs(l)<.35){let c=Math.min(s,WA*e);i.pos=[i.pos[0]+r/s*c,i.pos[1]+o/s*c]}return!0}function gx(i,t,e,n=200){return t?e>=3e4?null:Math.max(i,n):i}var XA=66,$A=250;function bx(i,t){return i?t>=3e4?$A:XA:0}function xx(i,t,e){let n=t??8,r=e||8;return n<=3||r<=4||/\bSilk\b/.test(i)?!0:/Android/.test(i)&&/\bKF[A-Z]{2,5}\b/.test(i)}function Iu(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function yx(i,t){return!(t>0)||!(i>0)?.9:Math.min(3,Math.max(.9,40*i/t))}var YA=Math.PI/180;function Lu(i,t,e,n={x:0,y:0}){let r=Math.tan(t*YA/2),o=a=>Math.max(.1,1-2*a),s=Math.min(r*o(n.y),r*e*o(n.x));return i*Math.sqrt(1+s*s)/s}function Ad(i,t){if(!i)return!1;let e=(r,o,s)=>Math.abs(r-o)<=s,n=Math.max(1,i.radius)*.01;return e(t.radius,i.radius,n)&&e(t.theta,i.theta,.005)&&e(t.phi,i.phi,.005)&&e(t.target.x,i.target.x,n)&&e(t.target.y,i.target.y,n)&&e(t.target.z,i.target.z,n)}function vx(i,t,e,n){return Math.abs(Math.log(n/e))>=.02&&Ad(i,t)}function Ed(i,t,e){return i*Math.max(1,Lu(1,t,e)/Lu(1,t,16/9))}var Un=null,_x={value:Ru("day")},Mx=new Map;function Rd(i,t=0){let e=new Jt,n=new Le,r=ae(i.type);if(r?.light)cu(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Pd(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let o={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};lu(e,n,new Jt,o,0,!0)}return{buf:e,lines:n}}function qA(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,o=Mx.get(r);if(o)return o;e&&ia(e);let s=Sx(Rd(i),t,new X(.9,.75,1.3),n);return(!rr(i.type)||ae(i.type))&&Mx.set(r,s),s}function KA(i,t=320,e=35,n=25,r=!1){let[o,s,a]=i.size,l=m0(Af,i,()=>Rd({type:Af,w:o,d:s,h:a})),c=e*Math.PI/180,h=Math.max(-80,Math.min(80,n))*Math.PI/180;return Sx(l,t,new X(Math.sin(c)*Math.cos(h),Math.sin(h),Math.cos(c)*Math.cos(h)),1.3,r)}function Sx({buf:i,lines:t},e,n,r,o=!1){Un??=new Fr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Un.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Un.setSize(e,e,!1),Un.setClearColor(0,0);let s=new ci,a=new _t(i.geometry(),new Xt({vertexColors:!0,color:new K(r,r,r)})),l=new Ge(t.geometry(),new je({vertexColors:!0,color:new K(r*1.8,r*1.8,r*1.8)}));o&&(We(a.material,_x),We(l.material,_x,!0)),s.add(a,l);let c=new _n().setFromObject(a),h=c.isEmpty()?new X:c.getCenter(new X),u=new Rn(-1,1,1,-1,.01,100);u.position.copy(h).add(n.clone().normalize().multiplyScalar(20)),u.lookAt(h),u.updateMatrixWorld();let f=.05;if(!c.isEmpty())for(let g of[c.min.x,c.max.x])for(let b of[c.min.y,c.max.y])for(let m of[c.min.z,c.max.z]){let x=new X(g,b,m).applyMatrix4(u.matrixWorldInverse);f=Math.max(f,Math.abs(x.x),Math.abs(x.y))}let d=f*1.12;u.left=-d,u.right=d,u.top=d,u.bottom=-d,u.updateProjectionMatrix(),Un.render(s,u);let p=Un.domElement.toDataURL("image/png");return a.geometry.dispose(),a.material.dispose(),l.geometry.dispose(),l.material.dispose(),p}function ZA(i,t,e=160,n,r=1.25){let o=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,s=wx.get(o);if(s)return s;n&&ia(n);let{buf:a,lines:l}=Rd(i,t),c=new _t(a.geometry(),new Xt({vertexColors:!0,color:new K(r,r,r)})),h=new Ge(l.geometry(),new je({vertexColors:!0,color:new K(r*1.8,r*1.8,r*1.8)})),u=new _n().setFromObject(c);if(u.isEmpty())return null;let f=u.min.x,d=u.max.x,p=Math.max(0,u.min.y),g=u.max.y,b=Math.max(1,Math.min(1024,Math.round((d-f)*e))),m=Math.max(1,Math.min(1024,Math.round((g-p)*e)));Un??=new Fr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Un.setPixelRatio(1),Un.setSize(b,m,!1),Un.setClearColor(0,0);let x=new ci;x.add(c,h);let v=new Rn(f,d,g,p,.01,100);v.position.set(0,0,50),v.lookAt(0,0,0),v.updateProjectionMatrix(),Un.render(x,v);let y=Un.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose();let M={url:y,x0:f,x1:d,y0:p,y1:g};return(!rr(i.type)||ae(i.type))&&wx.set(o,M),M}var wx=new Map;var QL={Group:Te,Mesh:_t,MeshBasicMaterial:Xt,CanvasTexture:pn,Color:K,PlaneGeometry:Xn,BufferGeometry:Vt,Float32BufferAttribute:It,DoubleSide:re},Ax={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},JA=[.22,.88,1],Ux=2.4,Ex=Ux,QA=.22,Rx=.94,Px=140,Cx=1.5;function tE(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[o,s]=e[r],[a,l]=e[(r+1)%e.length],c=a-o,h=l-s,u=c*c+h*h||1,f=Math.max(0,Math.min(1,((i-o)*c+(t-s)*h)/u));n=Math.min(n,Math.hypot(i-(o+c*f),t-(s+h*f)))}return n}var Cd=32,eE=500,Ix=160,nE=33,Lx=.028,iE=.026,rE=.012,oE=.09,oe=2767456,sE=2240847,aE=3096944,lE=1911110,cE=1,Fx=new Set(["ceiling","downlight","spot","panel","pendant","fan","strip"]),Fu=450,kx=125,uE=200,hE=.08,Ca={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],fan:[1.3,1.3,.45],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},fE=new K(1,.84,.5),dE=new K(1714765);function pE(){let i=navigator;return xx(navigator.userAgent,i.deviceMemory,navigator.hardwareConcurrency)}var Id=class{host;options;renderer;scene=new ci;camera=new rn(38,1,.1,400);controls;labels;root=new Te;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];patches=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";roofGeos=[];sunFx=new wu;sunPath=null;shadowSig="";arcSig="";spillNight="";compassLetters=["N","E","S","W"];flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;personAt=new Map;personLook="figure";figures=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;lastWake=performance.now();highlighted=new WeakMap;decorWas=!1;decorTimer;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;fans=new Map;fanMat=null;fanLast=0;fanTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;fitMargin={x:0,y:0};fitted=null;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};realism=new Tu;tier=Xb(navigator.userAgent,Math.min(screen.width||0,screen.height||0),navigator.maxTouchPoints||0);sun=null;weather=null;rain=new Ge(new Vt,new je({color:10471679,transparent:!0,opacity:.4,blending:Ee,depthWrite:!1}));snow=new Ki(new Vt,new Pi({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new _t(new Tr(1,28),new Xt({color:16767370,transparent:!0,opacity:0,blending:Ee,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;roomGlow=new Set;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=gE(),this.blindTexture=xE(),this.haloTexture=_E(),this.ground=new _t(new Xn(1,1),new Xt({transparent:!1,blending:Ee,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc,this.sunFx.group),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility);for(let n of["pointerdown","pointerup","wheel","keydown"])t.addEventListener(n,this.onInput,{capture:!0,passive:!0});typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(o=>o.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}get resting(){return this.decor(0)===null}wake(){let t=this.resting;this.lastWake=performance.now(),t&&this.invalidate()}animate(){if(!this.lowQuality)return this.invalidate();if(this.decorTimer||this.frame)return;let t=bx(!0,performance.now()-this.lastWake);this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},t)}decor(t,e){return gx(t,this.lowQuality,performance.now()-this.lastWake,e)}onInput=()=>this.wake();setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setFitMargin(t){this.fitMargin.x===t.x&&this.fitMargin.y===t.y||(this.fitMargin=t,Ad(this.fitted,this.controls.goal)&&this.fit(0))}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n,this.applyRealism();let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t,e){ia(t),e&&Tf(e),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.lastWake=performance.now(),this.building=t,S0(t),Tf(t.recipes),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.lastWake=performance.now(),this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyHouseLines(),this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.lastWake=performance.now(),this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(h=>Yc(h.floor).some(u=>u.id===t)),n=e?Yc(e.floor).find(h=>h.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let h=e.floor.elevation+e.ty,[u,f]=or(n.points),d=r.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new X(d.x,d.y+h,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[o,s]=or(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new X(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new X(o,e.floor.elevation+e.ty+.3,s),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.syncFans(t),this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let o=r.el;r.icon!==n.icon&&(r.icon=n.icon,o.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,o.querySelector(".fp3d-dev-text").textContent=n.text);let s=n.caption??"";r.caption!==s&&(r.caption=s,o.querySelector(".fp3d-dev-name").textContent=s);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,o.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,o.title=n.name,o.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,o.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,o.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(h=>Math.round(h*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?o.style.setProperty("--fp3d-glow",c):o.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])Aa(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&Aa(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(tx(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=Qb(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Te;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let o=t.filter(c=>c.floorId===n.floor.id),s=.03;for(let c of o)if(c.playing)for(let h=0;h<3;h++){let u=new _t(new ks(.92,1,48),new Xt({color:3662079,transparent:!0,opacity:0,blending:Ee,depthWrite:!1,side:re}));u.rotation.x=-Math.PI/2,u.position.set(c.x,s+h*.002,c.z),u.userData={sound:!0,phase:h/3,level:c.level},u.frustumCulled=!1,r.add(u)}let a=[],l=new Set;for(let c of o)for(let h of c.members){let u=o.find(d=>d.id===h);if(!u||u===c)continue;let f=[c.id,u.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,s+.02,c.z,u.x,s+.02,u.z))}if(a.length){let c=new Vt;c.setAttribute("position",new It(a,3));let h=new Ge(c,new je({color:3662079,transparent:!0,opacity:.45,blending:Ee,depthWrite:!1}));h.userData={soundLine:!0},r.add(h)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let o=(e*.45+r.userData.phase)%1,s=r.userData.level,a=.25+o*(.9+1.6*s);r.scale.set(a,a,1),r.material.opacity=(1-o)*(.25+.45*s)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let o=Pa(r),s=Iu(r.power),a=this.flowPhase.get(o);n.set(o,{speed:s,offset:a?e*(a.speed-s)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}setPatches(t){this.patches=t;for(let e of this.floors)this.buildPatches(e);this.invalidate()}buildPatches(t){let e=this.patches.filter(r=>r.floorId===t.floor.id&&r.points.length>=3&&r.opacity>0),n=JSON.stringify(e);if(n!==t.patchSig){t.patchSig=n;for(let r of[!1,!0]){let o=[],s=[];for(let c of e){if(!!c.glow!==r)continue;let h=Math.min(1,c.opacity);for(let u of bn(c.points))for(let f of u)o.push(c.points[f][0],c.y,c.points[f][1]),s.push(c.color[0],c.color[1],c.color[2],h)}let a=r?t.patchGlowMesh:t.patchMesh,l=new Vt;l.setAttribute("position",new It(o,3)),l.setAttribute("color",new It(s,4)),a.geometry.dispose(),a.geometry=l,a.visible=o.length>0}}}buildPipes(t){let e=this.pipes.filter(o=>o.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new Jt;for(let o of e)Db(r,o);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersonLook(t){t!==this.personLook&&(this.personLook=t,this.setPersons(this.persons))}makeFigure(t){let e=s=>{let a=[],l=(f,d,p,g,b)=>{let m=Math.hypot(p-f,g-d)||1,x=-(g-d)/m*(b/2+s),v=(p-f)/m*(b/2+s);a.push(f+x,d+v,0,p+x,g+v,0,p-x,g-v,0,f+x,d+v,0,p-x,g-v,0,f-x,d-v,0)},h=.14+s;for(let f=0;f<18;f++){let d=f/18*Math.PI*2,p=(f+1)/18*Math.PI*2;a.push(0,1.47,0,Math.cos(d)*h,1.47+Math.sin(d)*h,0,Math.cos(p)*h,1.47+Math.sin(p)*h,0)}l(0,1.32,0,.8,.13),l(0,1.24,-.28,.9,.07),l(0,1.24,.28,.9,.07),l(-.02,.82,-.15,.02,.08),l(.02,.82,.15,.02,.08);let u=new Vt;return u.setAttribute("position",new It(a,3)),u},n=new _t(e(0),new Xt({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:re})),r=new _t(e(.05),new Xt({color:t,transparent:!0,opacity:.22,blending:Ee,depthWrite:!1,side:re}));n.renderOrder=6,r.renderOrder=5;let o=new Te;return o.add(r,n),o.visible=!1,o}dropFigure(t){let e=this.figures.get(t);if(e){this.scene.remove(e);for(let n of e.children)n.geometry.dispose(),n.material.dispose();this.figures.delete(t)}}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(!r){r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id;let a=n.id;r.addEventListener("pointerdown",l=>l.stopPropagation()),r.addEventListener("click",l=>{l.stopPropagation();let c=this.persons.find(f=>f.id===a);if(!c?.entity)return;let h=l.currentTarget.getBoundingClientRect(),u=this.host.getBoundingClientRect();this.options.onDeviceHold?.(c.entity,h.left+h.width/2-u.left,h.top+h.height/2-u.top)}),this.personPins.set(n.id,r),this.labels.append(r)}r.title=n.name,r.setAttribute("aria-label",n.name),r.style.setProperty("--fp3d-pc",n.color??"#ff5fd2");let o=this.personLook==="figure"&&!!n.entity&&!n.thing;r.classList.toggle("fp3d-person-figure",o);let s=this.figures.get(n.id);if(o&&(!s||s.userData.color!==(n.color??"#ff5fd2"))){this.dropFigure(n.id);let a=this.makeFigure(n.color??"#ff5fd2");a.userData.color=n.color??"#ff5fd2",this.figures.set(n.id,a),this.scene.add(a)}else!o&&s&&this.dropFigure(n.id);if(r.classList.toggle("fp3d-person-tap",!!n.entity),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials||r.dataset.tag!==(n.tag??"")){r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.dataset.tag=n.tag??"",r.replaceChildren();let a=document.createElement("span");if(a.className="fp3d-person-face",n.picture){let l=document.createElement("img");l.src=n.picture,l.alt="",l.addEventListener("error",()=>l.replaceWith(document.createTextNode(n.initials))),a.append(l)}else a.textContent=n.initials;if(r.append(a),n.tag){let l=document.createElement("span");l.className="fp3d-person-tag",l.textContent=n.tag,r.append(l)}}}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n),this.personAt.delete(n),this.dropFigure(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=nx(t),n=e?1:0;n===rs.value&&(!e||is.value.equals(new X(...e)))||(rs.value=n,e&&is.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=Ru(t),Ng(t!=="neon"),this.building?.floors.some(o=>o.furniture.some($g))&&this.rebuild();let n=Ea(t),r=[...this.floors.map(o=>o.materials.lines),...this.roof?[this.roof.lines]:[]];for(let o of r)o.blending=n,o.needsUpdate=!0;this.placeGround(),this.realism.enable(this.scene,t==="realistic"),this.applyRealism();for(let o of this.floors)o.sunSig="-",this.buildSun(o);this.buildSunFx(),this.invalidate()}realPlan(){return this.theme==="realistic"?$b(this.tier,this.lowQuality,this.building?.settings.sun_shadow!==!1):null}applyRealism(){this.realism.setPlan(this.renderer,this.realPlan()),this.updateRealism()}updateRealism(){if(!this.realism.active)return;let t=this.arcFrame(),e=this.building,n=e?Yr(e):null,r=n&&t?n.elevation+ir(n,{x:t.x-t.r,z:t.z})-.03:-.23;this.realism.update(this.sun,this.weather,e?.settings.north??0,t?{x:t.x,y:r,z:t.z,r:Math.max(12,t.r*1.8)}:{x:0,y:r,z:0,r:15})}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let n of this.floors)this.buildSun(n);let e=this.nightFactor().toFixed(2);if(e!==this.spillNight){this.spillNight=e;for(let n of this.floors)this.buildSpill(n,this.lightSources(n))}this.placeSky(),this.buildSunFx(),this.updateRealism(),this.invalidate()}setSunPath(t,e){this.sunPath=t,e&&(this.compassLetters=e),this.buildSunFx(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.buildSunFx(),this.updateRealism(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new K(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new Ss(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,o=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,o,!1),this.rain.visible=r>0,this.snow.visible=o>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let o=this.weatherBox,s=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let h=o.x0+Math.random()*(o.x1-o.x0),u=o.y0+Math.random()*(o.y1-o.y0),f=o.z0+Math.random()*(o.z1-o.z0);s.set([h,u,f],c*3),n&&s.set([h,u-.45,f],c*3+3)}t.geometry.dispose();let l=new Vt;l.setAttribute("position",new It(s,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,o=r.y1-r.y0,s=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let h=0;h<l.length;h+=6){let u=l[h+1]-c,f=l[h]+s*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u,l[h+3]=f-s*.05,l[h+4]=u-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let h=0;h<l.length;h+=3){let u=l[h+1]-(.9+.6*e.snow)*n,f=l[h]+(s+Math.sin(c+h)*.4)*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let o=(this.building?.settings.north??0)*Qt,s=(r?t.azimuth+180:t.azimuth)*Qt,a=Math.max(10,Math.abs(t.elevation))*Qt,{center:l,r:c}=this.skyFrame(),h=new X(Math.sin(o+s)*Math.cos(a),Math.sin(a),-Math.cos(o+s)*Math.cos(a));this.skyDisc.position.copy(l).addScaledVector(h,c),this.skyDisc.scale.setScalar(c*(r?.03:.04)),this.skyDisc.lookAt(l);let u=this.skyDisc.material;u.color.set(r?13621486:16767370),u.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}skyFrame(){let t=this.weatherBox;return{center:new X((t.x0+t.x1)/2,t.y0,(t.z0+t.z1)/2),r:Math.min(300,Math.max(80,this.houseRadius*5))}}buildSunFx(){let t=this.building,e=this.sun,n=!!t&&!!e&&t.settings.sun_shadow!==!1,r=(t?.settings.north??0)*Qt,o=this.weather?.cloud??0,s=n&&!this.lowQuality&&e.elevation>1&&o<.9&&!this.roomTint&&this.theme!=="realistic",a=s?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${r},${o.toFixed(1)},${this.theme},${this.roofGeos.length}`:"";a!==this.shadowSig&&(this.shadowSig=a,s?this.drawShadow(t,e,r,o):this.sunFx.hideShadow());let l=this.sunPath,c=n&&!!l&&l.points.length>1&&e.elevation>-3,h=c?this.arcFrame():null,u=c&&h?`${this.theme},${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${this.compassLetters.join("")},${l.points[0].t},${r},${h.x.toFixed(2)},${h.z.toFixed(2)},${h.y.toFixed(2)},${h.r.toFixed(2)},${o.toFixed(1)}`:"";if(u===this.arcSig)return;if(this.arcSig=u,!u||!h||!l||!e)return this.sunFx.hideArc();let f=(m,x,v=0)=>{let y=Math.max(0,x)*Qt,M=r+m*Qt;return[h.x+Math.sin(M)*Math.cos(y)*h.r,h.y+Math.sin(y)*h.r+v,h.z-Math.cos(M)*Math.cos(y)*h.r]},d=1-.7*o,p=Date.now(),g=m=>new Date(m).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),b=h.r*.03;this.sunFx.setArc({points:l.points.map(m=>({at:f(m.azimuth,m.elevation),t:m.t,elevation:m.elevation})),now:p,hours:l.points.filter(m=>m!==l.rise&&m!==l.set&&new Date(m.t).getMinutes()===0).map(m=>f(m.azimuth,m.elevation)),labels:[l.rise,l.set].flatMap(m=>m?[{text:g(m.t),at:f(m.azimuth,m.elevation,b*2.2),rising:m===l.rise}]:[]),sun:e.elevation>0?f(e.azimuth,e.elevation):null,ring:{center:[h.x,h.y,h.z],r:h.r,north:r,letters:this.compassLetters},size:b,fade:d,light:this.theme!=="neon"})}arcFrame(){let t=this.building,e=t?Yr(t):null,n=t?.floors.flatMap(h=>h.rooms.filter(u=>!u.outdoor).flatMap(u=>u.points))??[];if(!e||!n.length)return null;let r=n.map(h=>h[0]),o=n.map(h=>h[1]),[s,a,l,c]=[Math.min(...r),Math.max(...r),Math.min(...o),Math.max(...o)];return{x:(s+a)/2,z:(l+c)/2,y:e.elevation,r:Math.max(7,Math.hypot(a-s,c-l)*.62)}}nightFactor(){let t=this.sun;return t?Math.min(1,Math.max(0,-t.elevation/6)):0}buildSpill(t,e){let n=this.building,r=n?.settings.window_glow===!1?0:this.nightFactor(),o=n&&r>0?Yr(n):null,s=!!o&&Math.abs(t.floor.elevation-o.elevation)<.5,a=new Map;if(s)for(let u of e){let f=a.get(u.room)??[0,0,0,0];f[0]+=u.color[0]*u.level,f[1]+=u.color[1]*u.level,f[2]+=u.color[2]*u.level,f[3]+=u.level,a.set(u.room,f)}let l=[...t.openings.values()].map(u=>(u.cover??0).toFixed(1)).join(","),c=s&&a.size?`${r.toFixed(2)}|${[...a].map(([u,f])=>`${u}:${f.map(d=>d.toFixed(2)).join("/")}`).join(";")}|${l}`:"";if(c===t.spillSig)return;t.spillSig=c;let h=new Jt;if(c)for(let u of t.geo.openings){if(u.opening.type!=="window"||!u.exterior)continue;let f=t.floor.rooms.findIndex(P=>P.id===u.opening.room_id),d=f<0?void 0:a.get(os(t.lightZones,f));if(!d||d[3]<.02)continue;let g=1-(t.openings.get(u.opening.id)?.cover??0),b=u.top-u.sill;if(g<.05||b<.1)continue;let m=Math.max(d[0],d[1],d[2],1e-6),x=.3*r*Math.min(1,d[3])*g*Math.min(1,b/1.2),v=new K(d[0]/m*x,d[1]/m*x,d[2]/m*x),y=[-u.toRoom[0],-u.toRoom[1]],M=Math.min(3.5,.8+1.1*u.top),w=.35*M,T=[u.start[0]+u.axis[0]*(u.width/2)+y[0]*(u.faceOut+M/2),u.start[1]+u.axis[1]*(u.width/2)+y[1]*(u.faceOut+M/2)],_=ir(t.floor,{x:T[0],z:T[1]})+.014,E=(P,k)=>{let D=k/M,U=-w*D+P*(u.width+2*w*D);return[u.start[0]+u.axis[0]*U+y[0]*(u.faceOut+k),_,u.start[1]+u.axis[1]*U+y[1]*(u.faceOut+k)]},R=4,S=[[0,0],[.18,1],[.82,1],[1,0]];for(let P=0;P<R;P++){let k=M*P/R,D=M*(P+1)/R,U=(1-P/R)**2,A=(1-(P+1)/R)**2;for(let I=0;I+1<S.length;I++){let[O,C]=S[I],[B,z]=S[I+1],W=E(O,k),V=E(B,k),Y=E(B,D),et=E(O,D),nt=v.clone().multiplyScalar(U*C),$=v.clone().multiplyScalar(U*z),H=v.clone().multiplyScalar(A*z),J=v.clone().multiplyScalar(A*C);h.tri(W,V,Y,nt,$,H),h.tri(W,Y,et,nt,H,J)}}}t.spillMesh.geometry.dispose(),t.spillMesh.geometry=h.geometry(),t.spillMesh.visible=h.count>0}drawShadow(t,e,n,r){let o=Yr(t),s=o?.rooms.filter(b=>!b.outdoor&&b.points.length>=3)??[];if(!o||!s.length)return this.sunFx.hideShadow();let a=s.flatMap(b=>b.points.map(m=>m[0])),l=s.flatMap(b=>b.points.map(m=>m[1])),c=o.elevation+ir(o,{x:Math.min(...a)-1,z:(Math.min(...l)+Math.max(...l))/2}),h=e.azimuth*Qt,u=Kb(t,this.roofGeos,[Math.sin(n+h),-Math.cos(n+h)],e.elevation,c),f=Zb(u);if(!f)return this.sunFx.hideShadow();let d=o.elevation-c<=.35?o.elevation+.012:c+.012,p=t.floors.filter(b=>Math.abs(b.elevation-o.elevation)<.5).flatMap(b=>b.rooms.filter(m=>!m.outdoor&&m.points.length>=3).map(m=>m.points)),g=(this.theme==="neon"?.6:.34)*Math.min(1,e.elevation/8)*(1-.8*r);this.sunFx.setShadow(this.renderer,u,f,p,d,g,this.theme==="neon"?394264:1713203)}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e){for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n);this.buildSunFx()}}setRoomGlow(t){t.size===this.roomGlow.size&&[...t].every(e=>this.roomGlow.has(e))||(this.roomGlow=new Set(t),this.applyHighlight())}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,this.realism.touch(),e)for(let n of this.floors){let r=!1;for(let[o,s]of n.openings){let a=t.get(o)??Ra,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===s.open&&l.open2===(s.open2??0)&&l.tilt===s.tilt&&l.tilt2===(s.tilt2??0)&&l.cover===s.cover&&!!l.sensed==!!s.sensed&&!!l.unlocked==!!s.unlocked||(n.openings.set(o,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let o=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};o.tl=r.left?1:0,o.tr=r.right?1:0,this.fridges.set(n,o)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}setRackLeds(t){this.rackLeds=t;let e=!1;for(let n of this.floors)this.buildRackLeds(n)&&(e=!0);e&&this.invalidate()}rackLeds=new Map;buildRackLeds(t){let e=t.floor.furniture.filter(h=>h.rack?.slots?.length);if(!e.length&&!t.rackLedRanges.size)return!1;let n=e.map(h=>({f:h,ids:h.rack.slots.filter(u=>this.rackLeds.has(`${h.id}/${u.id}`)).map(u=>u.id)})).filter(h=>h.ids.length),r=n.map(({f:h,ids:u})=>`${h.id}:${h.type}:${h.x},${h.z},${h.rotation},${h.w},${h.d},${h.h},${h.mount_y??""},${h.mirror?1:0}:${u.join(",")}:${JSON.stringify(h.rack.slots)}`).join(";"),o=!1;if(r!==t.rackLedShape){o=!0,t.rackLedShape=r,t.rackLedColor="";let h=new Jt,u=new Map;for(let{f,ids:d}of n)for(let[p,g]of Xg(h,f,tn(t.floor,f),d))u.set(`${f.id}/${p}`,g);t.rackLedRanges=u,t.rackLedMesh.geometry.dispose(),t.rackLedMesh.geometry=h.geometry(),t.rackLedMesh.visible=h.count>0}if(!t.rackLedRanges.size)return o;let s=[...t.rackLedRanges.keys()],a=s.map(h=>this.rackLeds.get(h)??"").join(",");if(a===t.rackLedColor)return o;t.rackLedColor=a;let l=t.rackLedMesh.geometry.getAttribute("color"),c=l.array;for(let h of s){let u=this.rackLeds.get(h),f=new K(u?Fa[u]:"#808080"),d=t.rackLedRanges.get(h);for(let p=d.start*3;p<d.end*3;p++)c.set([f.r,f.g,f.b],p*3)}return l.needsUpdate=!0,!0}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let o=this.awnings.get(n)??{cur:r.out??0,to:r.out??0,speed:0};r.out===null?(o.to=r.moving>0?1:0,o.speed=1/Math.max(2,r.time)):(o.to=r.out,o.speed=0),this.awnings.set(n,o)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)e.floor.furniture.some(n=>t.has(n.id))&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,o]of this.awnings){let s=o.to-o.cur;if(Math.abs(s)<.002){s!==0&&(o.cur=o.to,e.add(r));continue}o.cur=o.speed>0?o.cur+Math.sign(s)*Math.min(Math.abs(s),o.speed*t/1e3):o.cur+s*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/Ix),n=new Set;for(let[r,o]of this.fridges)for(let[s,a]of[["l","tl"],["r","tr"]]){let l=o[a]-o[s];if(Math.abs(l)<.004){l!==0&&(o[s]=o[a],n.add(r));continue}o[s]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(o=>n.has(o.id))&&this.buildFridges(r);return!0}buildFridges(t){let e=new Jt;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Vg(e,n,tn(t.floor,n),r?.l??0,r?.r??0)}for(let n of t.floor.furniture)n.type==="awning"&&zg(e,n,tn(t.floor,n),this.awnings.get(n.id)?.cur??0);for(let n of t.floor.furniture){let r=Hc(n.type),o=r?ae(n.type):void 0;r&&o&&Kg(e,o,r,n,tn(t.floor,n),this.awnings.get(n.id)?.cur??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new vu(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*Qt,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.05,(e.tilt??(o?65:20))*Qt)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y);return{position:new X(e.x,a,e.z),direction:new X(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s)),fov:Math.min(e.fov??(o?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(o?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let o of[n.floorMesh,n.wallMesh])o.layers.enable(_u);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(_u),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){this.projections.dispose(),this.realism.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.fanTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.sunFx.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility);for(let t of["pointerdown","pointerup","wheel","keydown"])this.host.removeEventListener(t,this.onInput,{capture:!0});clearTimeout(this.decorTimer),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values()){t.led.dispose();for(let e of t.own)e.dispose()}this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose();for(let t of this.fans.values())t.mesh.geometry.dispose();this.fans.clear(),this.fanMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&pE();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new Fr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ie,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new xu(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=!!(this.floorId&&this.options.onRoomDoubleTap),r=n||this.options.onDeviceDoubleTap&&!this.furnish?this.pick(t,e):null;r&&"entity"in r&&!this.furnish&&this.options.onDeviceDoubleTap?.(r.entity,t,e)||(n&&r&&!("entity"in r)&&r.roomId?this.options.onRoomDoubleTap(r.floorId,r.roomId):this.options.onBack?.())}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1,n=this.camera.aspect;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),vx(this.fitted,this.controls.goal,n,this.camera.aspect)&&this.fit(0),this.invalidate()}retired=[];disposeRetired(){if(this.retired.length){for(let t of this.retired)t.dispose();this.retired=[]}}updateRackDetail(){let t=this.camera.position,e=new X;for(let n of this.floors)if(!(!n.racks.length||!n.group.visible))for(let r of n.racks){let o=wb(t.distanceTo(n.group.localToWorld(e.copy(r.centre))),r.near,this.lowQuality);if(o!==r.near){r.near=o,o&&!r.detail&&(r.detail=Ox(n.floor,r.at,!0,n.materials),n.group.add(...r.detail));for(let s of r.slab)s.visible=!o;for(let s of r.detail??[])s.visible=o}}}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.fans.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))this.retired.push(e);this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let o=document.createElement("span");o.className="fp3d-dev-watt";let s=document.createElement("span");s.className="fp3d-dev-name",e.append(n,r,o,s);let a,l=!1;e.addEventListener("pointerdown",h=>{if(this.furnish){this.pendingDevice=t;return}h.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)},eE)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",h=>h.preventDefault()),e.addEventListener("click",h=>{if(h.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}),e.addEventListener("keydown",h=>{if(h.key==="Enter"&&h.shiftKey||h.key==="ContextMenu"){h.preventDefault();let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=rx(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=Dx(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=os(r,a.ra),a.rb=os(r,a.rb)}t.lightSurface=n;let o=new Vt;o.setAttribute("position",new It(n.pos,3)),o.setAttribute("color",new It(new Float32Array(n.pos.length),3)),o.setAttribute("fold",new It(n.fold,1));let s=new wr(new Uint32Array(n.pos.length/3),1);s.setUsage(Kh),o.setIndex(s),o.setDrawRange(0,0),o.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=o,t.glowSig="",this.buildGlow(t)}packLightAt(t){if(t.lamp!=="wall"||!t.pack)return null;let e=ae(t.pack);if(!e)return null;let[n,r,o]=t.size??Ca.wall;return Zg(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:o,mirror:t.mirror},t.base??0)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let o=n.top??t.floor.height,s=Md(t.floor,n.x,n.z),a=os(t.lightZones,s),[l,,c]=n.size??(n.lamp?Ca[n.lamp]:[.3,.3,.3]),h=n.base??0,u={ceiling:[o-.12,"ceiling"],downlight:[o-.03,"spot"],spot:[o-c,"spot"],panel:[o-.05,"ceiling"],pendant:[Math.max(.5,o-c),"pendant"],fan:[Math.max(.5,o-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<cE?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,d]=n.lamp?u[n.lamp]:[n.y,"omni"],p=n.lightY??f,g=r.color;if(n.lamp==="strip"){let b=(n.rotation??0)*Qt,m=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:h+l*(.5+x),z:n.z,color:g,level:r.level*.55,kind:"omni",room:a});else{let v=(n.rise??0)*Qt;e.push({x:n.x+Math.cos(b)*l*x*Math.cos(v),y:p+Math.sin(v)*l*x,z:n.z+Math.sin(b)*l*x*Math.cos(v),color:g,level:r.level*.55,kind:m||v?"omni":d,room:a})}}else{let b=this.packLightAt(n);e.push({x:b?b[0]:n.x,y:b?b[1]:p,z:b?b[2]:n.z,color:g,level:r.level,kind:d,room:a})}}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(o=>o!==t&&Math.abs(o.floor.elevation-e)<.8&&o.geo.holes.length);if(!n)return[];let r=[];for(let o of n.geo.holes){if(o.length<3)continue;let s=0,a=[0,0,0];for(let h of this.devices){if(h.floorId!==n.floor.id)continue;let u=this.glowOf(h);if(!u)continue;let f=jt([h.x,h.z],o)?0:tE(h.x,h.z,o);if(f>Cx)continue;let d=u.level*(1-f/Cx);for(let p=0;p<3;p++)a[p]+=u.color[p]*d;s+=d}if(s<.02)continue;let[l,c]=or(o);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/s,a[1]/s,a[2]/s],level:Math.min(1,s)*.6,kind:"ceiling",room:os(t.lightZones,Md(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t);this.buildSpill(t,n);let r=e.doors.map(u=>{let f=t.geo.openings.find(p=>p.opening.id===u.id);if(f&&pi(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),o=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(o===t.glowSig)return;t.glowSig=o;let s=t.glowMesh.geometry,a=s.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,s.setDrawRange(0,0);return}let l=sx(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==u)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=s.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}s.index.needsUpdate=!0,s.setDrawRange(0,h),t.glowMesh.visible=h>0}makeMaterials(t){return{floor:We(new Xt({vertexColors:!0}),this.themeUniform),pattern:bE(this.patternTexture),wall:We(Nn(new Xt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:Nn(new Xt({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new Xt({vertexColors:!0,blending:Hs,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:re,polygonOffset:!0,polygonOffsetFactor:-1}),lines:We(Nn(new je({vertexColors:!0,transparent:!0,blending:Ea(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:Nn(new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:re,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:We(Nn(new Xt({vertexColors:!0,side:re}),t),this.themeUniform),glass:Nn(new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:re}),t),blinds:We(Nn(new Xt({map:this.blindTexture,vertexColors:!0,side:re}),t),this.themeUniform),water:We(new Xt({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:re}),this.themeUniform),flow:vE(this.flowTime),pipeLine:yE(this.flowTime),patch:new Xt({vertexColors:!0,transparent:!0,depthWrite:!1,side:re,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),patchGlow:new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:re,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),solarLive:vd(this.flowTime),lamps:We(new Xt({vertexColors:!0}),this.themeUniform),halos:new Pi({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1}),cones:new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:re}),screens:new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:re}),earth:We(new Xt({vertexColors:!0}),this.themeUniform),earthWell:We(new Xt({vertexColors:!0,side:re}),this.themeUniform),earthLines:We(new je({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(o=>[o.floor.id,{y:o.y,o:o.o}])),e=new Map(this.floors.map(o=>[o.floor.id,o.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((o,s)=>o.elevation-s.elevation);for(let o of n.floors){let s=n.settings.roof?.solar??[],a=Yr(n)?.id===o.id?s.filter(mt=>mt.face===ad).map(mt=>({field:mt,face:nb(n,mt)})):[],l=s.filter(mt=>mt.face.startsWith(`wall:${o.id}:`));if(l.length){let mt=new Map(eb(n,o.id).map($t=>[$t.key,$t]));for(let $t of l){let he=mt.get($t.face);he&&a.push({field:$t,face:he})}}let h=Nf(n).some(mt=>W0(mt,o.elevation+o.height)&&Bf(mt,o.elevation))?(mt,$t)=>{let he=X0(n,mt,$t,o.elevation);return he===null?null:he-o.elevation}:void 0,u=mb(bd(o,this.parked),n.settings.wall_exterior,n.settings.wall_interior,bb(n.floors,o),a,h),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),p=new Te,g=new _t(u.floor,d.floor),b=new _t(u.shadow,d.shadow);b.renderOrder=1;let m=new _t(u.floor,d.pattern);m.renderOrder=2;let x=new _t(new Vt,d.glow);x.renderOrder=3,x.visible=!1;let v=new _t(new Vt,d.frames),y=new _t(new Vt,d.blinds),M=new _t(new Vt,d.glass);M.renderOrder=4;let w=new _t(new Vt,d.lamps);w.visible=!1;let T=new _t(new Vt,d.cones);T.visible=!1,T.renderOrder=3;let _=new _t(new Vt,d.cones);_.visible=!1,_.renderOrder=3;let E=new Ki(new Vt,d.halos);E.visible=!1,E.renderOrder=7;let R=new _t(new Vt,d.cones);R.visible=!1,R.renderOrder=7;let S=new _t(new Vt,d.cones);S.visible=!1,S.renderOrder=7;let P=new _t(new Vt,d.lamps);P.visible=!1;let k=new _t(new Vt,d.lamps);k.visible=!1;let D=u.racks.map(mt=>({at:mt,centre:new X(mt.f.x,mt.base+mt.f.h/2,mt.f.z),slab:Ox(o,mt,!1,d),detail:null,near:!1})),U=new _t(new Vt,d.lamps);U.visible=!1;let A=new _t(new Vt,d.patch);A.visible=!1,A.renderOrder=3;let I=new _t(new Vt,d.patchGlow);I.visible=!1,I.renderOrder=3;let O=new _t(new Vt,d.screens);O.visible=!1,O.renderOrder=5;let C=new _t(new Vt,d.flow);C.renderOrder=5,C.frustumCulled=!1;let B=new _t(new Vt,d.pipeLine),z=new _t(new Vt,d.pipeLine),W=new _t(new Vt,d.pipeLine);for(let mt of[B,z,W])mt.renderOrder=4,mt.frustumCulled=!1,mt.visible=!1;let V=yd(a,o.elevation),Y=V?new _t(V.geometry,d.solarLive):null;Y&&(Y.renderOrder=6,Aa(V,this.solarLevels));for(let mt of[v,y,M])mt.frustumCulled=!1;let et=new _t(u.walls,d.glassWall),nt=new _t(u.walls,d.wall);et.renderOrder=6;let $=new _t(u.water,d.water);$.renderOrder=4;let H=Math.min(...n.floors.filter(mt=>mt.rooms.length).map(mt=>mt.elevation)),J=vb(n,o,u.openings,o.elevation===H),ot=J?[new _t(J.earth.geometry(),d.earth),new _t(J.wells.geometry(),d.earthWell),new Ge(J.lines.geometry(),d.earthLines)]:[];for(let mt of ot)mt.userData.earth=!0;p.add(g,b,m,x,nt,$,new Ge(u.lines,d.lines),v,y,M,C,B,z,W,w,T,_,E,R,S,P,k,...D.flatMap(mt=>mt.slab),U,A,I,O,et,...Y?[Y]:[],...ot),this.root.add(p);let Q=document.createElement("button");Q.className="fp3d-pin fp3d-pin-floor",Q.dataset.floor=o.id;let bt=document.createElement("b");bt.textContent=o.name||"\u2013";let gt=document.createElement("span");gt.textContent=this.floorInfo.get(o.id)??this.options.floorInfo?.(o)??"",Q.append(bt,gt),Q.addEventListener("click",()=>this.options.onFloorTap?.(o.id)),this.labels.append(Q);let ut=t.get(o.id),ft=[],Lt=null;for(let mt of Yc(o)){let $t=document.createElement("button");$t.className="fp3d-pin",$t.dataset.room=mt.id,$t.dataset.floor=o.id,this.fillRoomPin($t,mt.name,this.roomInfo.get(mt.id)),$t.addEventListener("click",()=>this.options.onRoomTap?.(o.id,mt.id)),this.labels.append($t);let[he,Re]=or(mt.points);if(ft.push({pin:$t,room:mt,cx:he,cz:Re}),!mt.outdoor)for(let[ie,xe]of mt.points)Lt??={x0:ie,x1:ie,z0:xe,z1:xe},Lt.x0=Math.min(Lt.x0,ie),Lt.x1=Math.max(Lt.x1,ie),Lt.z0=Math.min(Lt.z0,xe),Lt.z1=Math.max(Lt.z1,xe)}this.floors.push({floor:o,rank:r.indexOf(o),group:p,geo:u,floorMesh:g,shadowMesh:b,patternMesh:m,glowMesh:x,lightSurface:null,lightZones:null,framesMesh:v,glassMesh:M,blindsMesh:y,flowMesh:C,pipeLineMesh:B,pipeHouseMesh:z,pipeFloorMesh:W,pipeLineSig:"",solarMesh:Y,solarLive:V,lampMesh:w,sunMesh:T,sunSig:"",spillMesh:_,spillSig:"",haloMesh:E,coneMesh:R,trailMesh:S,fridgeMesh:P,rackLedMesh:k,racks:D,rackLedShape:"",rackLedColor:"",rackLedRanges:new Map,pipeMesh:U,pipeSig:"",patchMesh:A,patchGlowMesh:I,patchSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:nt,screenMesh:O,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:Lt,roomPins:ft,labelSize:null,materials:d,mask:f,openings:new Map,y:ut?.y??0,o:ut?.o??1,ty:0,to:1,appliedO:-1,lightAt:0,label:Q})}this.floorMap=new Map(this.floors.map(o=>[o.floor.id,o]));for(let o of this.floors)this.buildFridges(o),this.buildRackLeds(o),this.buildPipes(o),this.buildPatches(o);this.labelsDirty=!0,this.floorId&&!n.floors.some(o=>o.id===this.floorId)&&(this.floorId=null);for(let o of this.floors){this.buildLamps(o),this.buildScreens(o);let s=e.get(o.floor.id);for(let a of o.geo.openings)o.openings.set(a.opening.id,s?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Ra);this.buildOpenings(o),this.buildFlows(o),o.poolGroup=void 0,this.buildPoolWater(o),this.buildLightSurface(o),this.buildSun(o)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.buildSunFx(),this.applyRealism(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(m=>m.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(m=>m.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?hb(this.building,this.roofWindows):[];if(this.roofGeos=t,this.shadowSig="",!t.length)return;let e=new Map(qr(this.building).map(m=>[m.key,m])),n=this.building.settings.roof?.solar??[],r=vd(this.flowTime),o=[],s=new Te,a=We(new Xt({vertexColors:!0,transparent:!0,side:re}),this.themeUniform),l=We(new je({vertexColors:!0,transparent:!0,blending:Ea(this.theme),depthWrite:!1}),this.themeUniform,!0),c=We(new Xt({vertexColors:!0,transparent:!0,side:re,depthWrite:!1}),this.themeUniform),h=new Te,u=We(new Xt({vertexColors:!0,side:re}),this.themeUniform),f=We(new Xt({vertexColors:!0,transparent:!0,opacity:.35,side:re,depthWrite:!1}),this.themeUniform),d=We(new Xt({vertexColors:!0,transparent:!0,opacity:.35,side:re,depthWrite:!1}),this.themeUniform),p=We(new je({vertexColors:!0,transparent:!0,blending:Ea(this.theme),depthWrite:!1}),this.themeUniform,!0),g=[],b=t.map(m=>{let x=new Te;x.add(new _t(m.solid.geometry(),a),new Ge(m.lines.geometry(),l)),m.glass.count&&x.add(new _t(m.glass.geometry(),c));let v=n.flatMap(w=>{let T=e.get(w.face);return T&&(T.section?m.sections?.includes(T.section):m===t[0])?[{face:T,field:w}]:[]}),y=yd(v,m.floor.elevation+m.base);if(y){let w=new _t(y.geometry,r);w.renderOrder=9,x.add(w),o.push(y),Aa(y,this.solarLevels)}m.winRoof?.solid.count&&x.add(new _t(m.winRoof.solid.geometry(),u),new Ge(m.winRoof.lines.geometry(),p)),m.winRoof?.glass.count&&x.add(new _t(m.winRoof.glass.geometry(),d)),x.renderOrder=8,s.add(x);let M=null;(m.win?.solid.count||m.win?.glass.count)&&(M=new Te,M.add(new _t(m.win.solid.geometry(),u),new Ge(m.win.lines.geometry(),p)),m.win.glass.count&&M.add(new _t(m.win.glass.geometry(),f)),h.add(M));for(let[w,T]of m.winBelow??[]){if(!T.solid.count&&!T.glass.count)continue;let _=new Te;_.add(new _t(T.solid.geometry(),u),new Ge(T.lines.geometry(),p)),T.glass.count&&_.add(new _t(T.glass.geometry(),f)),h.add(_),g.push({floorId:w,win:_})}return{group:x,floorId:m.floor.id,rideId:j0(this.building,m.floor,m.sections??[]),base:m.base,lift:m.lift!==!1,win:M}});s.renderOrder=8,this.scene.add(s),this.scene.add(h),this.roof={group:s,parts:b,below:g,solid:a,lines:l,glass:c,live:r,lives:o,wins:h,winSolid:u,winLines:p,winGlass:f,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/Rx)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),o=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?Rx*n:0,s=1-Math.exp(-t/Px),a=this.roofO;this.roofO+=(o-this.roofO)*s,Math.abs(o-this.roofO)<.004&&(this.roofO=o),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let h=this.floorMap.get(l.rideId)??c,u=h.ty>0?Math.min(1,h.y/h.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+h.y+l.base+this.roofLift()+(l.lift?u*Ex:0),l.win&&(l.win.position.y=c.floor.elevation+h.y+l.base+(l.lift?u*Ex:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==o}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.theme!=="realistic"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,o=1;e?n.rank>e.rank?(r=5+n.rank,o=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,o=this.floorStack==="single"?0:QA)):r=this.explode?n.rank*Ux:0,n.ty=r,n.to=o;let a=e===n?an:hi;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=o),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let o=r.mesh.material;o.transparent=t.o<.999,o.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Px);for(let r of this.floors){let o=r.ty-r.y,s=r.to-r.o;if(Math.abs(o)<.004&&Math.abs(s)<.004){(o!==0||s!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=o*n,r.o+=s*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Ix);for(let r of this.floors){let o=!1,s=!1;for(let[a,l]of r.openings){let c=this.openingTargets.get(a)??Ra,h=(d,p)=>(d??null)===(p??null)||typeof d=="number"&&typeof p=="number"&&Math.abs(d-p)<.003;if(h(c.open,l.open)&&h(c.open2??0,l.open2??0)&&h(c.tilt,l.tilt)&&h(c.tilt2??0,l.tilt2??0)&&h(c.cover,l.cover)&&!!c.sensed==!!l.sensed&&!!c.unlocked==!!l.unlocked)continue;let u={...l,open2:l.open2??0,tilt2:l.tilt2??0,sensed:c.sensed,unlocked:c.unlocked},f=!1;for(let d of["open","open2","tilt","tilt2"]){let p=c[d]??0,g=l[d]??0,b=p-g;Math.abs(b)<.003?u[d]=p:(u[d]=g+b*n,f=!0)}if(c.cover===null||l.cover===null)u.cover=c.cover;else{let d=c.cover-l.cover;Math.abs(d)<.003?u.cover=c.cover:(u.cover=l.cover+d*n,f=!0)}(u.open!==l.open||u.open2!==(l.open2??0)||u.tilt!==l.tilt||u.tilt2!==(l.tilt2??0)||u.cover!==l.cover||!!u.sensed!=!!l.sensed||!!u.unlocked!=!!l.unlocked)&&(r.openings.set(a,u),o=!0),e||=f,s||=f}if(o){this.buildOpenings(r);let a=performance.now();(!this.lowQuality||!s||a-r.lightAt>=uE)&&(r.lightAt=a,this.buildGlow(r),this.buildSun(r))}}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new K(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*hE+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=e)return 0;let f=u-e,d=f>Fu?.5+.5*Math.sin(f/140):f/Fu;return Math.round(d*10)/10},r=this.devices.filter(h=>h.floorId===t.floor.id&&(h.lamp||h.model)),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(h=>`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${h.rise??0},${h.size?.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0}${h.colors?JSON.stringify(h.colors)+this.theme:""}${h.materials?JSON.stringify(h.materials):""}`).join(";"),s=r.map(h=>this.glowOf(h)),a=r.map((h,u)=>`${n(h.id)},${s[u]?`${s[u].level.toFixed(3)},${s[u].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=o,t.lampColorSig="";let h=new Jt,u=[],f=[],d=new Map,p=t.floor.height;for(let g of r){let b=g.lamp==="strip"?(g.base??p)>Math.min(t.floor.cut_height,p):g.lamp?Fx.has(g.lamp)&&(g.top??p)>Math.min(t.floor.cut_height,p):g.model==="camera_ceiling";if(!g.lamp&&!g.model||b&&this.wallMode==="cut")continue;let m=h.count,x=g.pack?ae(g.pack):void 0,[v,y,M]=g.size??[.3,.3,.3];g.model?g.ownLook||Yg(h,g.model,g.x,g.model==="camera_ceiling"?p:g.y,g.z,g.rotation??0):x?cu(h,x,{x:g.x,z:g.z,rotation:g.rotation??0,w:v,d:y,h:M,mirror:g.mirror,colors:g.colors,materials:g.materials},g.base??0,65280):Pd(h,{...g,lamp:g.lamp},g.top??p,65280,g.lamp!=="fan"),d.set(g.furnitureId??g.id,{start:m,end:h.count}),g.pickable!==!1&&u.push({id:g.id,start:m,end:h.count}),g.furnitureId&&f.push({id:g.furnitureId,start:m,end:h.count})}t.lampTris=u,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=a0(h.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=h.geometry(),t.lampMesh.visible=h.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((h,u)=>{let f=t.lampRanges.get(h.furnitureId??h.id);if(!f)return;let d=s[u],p=d?.55+.45*d.level:0,g=d?new K(...d.color.map(x=>Math.min(1,x*p))):new K(lE),b=n(h.id);b>0&&g.lerp(new K(1,1,1),.7*b);let m=new K(g.getHex());l0(c,t.lampShade,f,[m.r,m.g,m.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1||this.realPlan()?null:this.sun,n=(this.building?.settings.north??0)*Qt,r=this.weather?.cloud??0,o=Dx(t.floor,t.geo.openRooms),s=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${o.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(s===t.sunSig)return;t.sunSig=s;let a=new Jt;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*Qt,h=e.azimuth*Qt,u=[Math.sin(n+h),-Math.cos(n+h)],f=1/Math.tan(c);for(let d of t.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let p=[-d.toRoom[0],-d.toRoom[1]],g=p[0]*u[0]+p[1]*u[1];if(g<.05)continue;let b=t.openings.get(d.opening.id),m=d.top-(b?.cover??0)*(d.top-d.sill);if(m-d.sill<.05)continue;let x=(S,P)=>{let k=Math.min(7,P*f);return[d.start[0]+d.axis[0]*S+d.toRoom[0]*d.faceRoom-u[0]*k,.02,d.start[1]+d.axis[1]*S+d.toRoom[1]*d.faceRoom-u[1]*k]},v=.14*l*Math.min(1,g*1.5),y=new K(1*v,.82*v,.55*v),M=y.clone().multiplyScalar(.45),w=t.floor.rooms.findIndex(S=>S.id===d.opening.room_id);if(w<0||t.floor.rooms[w].points.length<3)continue;let T=o[w],_=t.floor.rooms.filter((S,P)=>o[P]===T&&S.points.length>=3).map(S=>S.points),E=Math.max(1,Math.ceil(Math.min(7,m*f)/.25)),R=Math.max(1,Math.ceil(d.width/.3));for(let S=0;S<E;S++){let P=d.sill+(m-d.sill)*S/E,k=d.sill+(m-d.sill)*(S+1)/E,D=S/E,U=(S+1)/E,A=y.clone().lerp(M,D),I=y.clone().lerp(M,U);for(let O=0;O<R;O++){let C=d.width*O/R,B=d.width*(O+1)/R,z=x((C+B)/2,(P+k)/2);if(!_.some(nt=>jt([z[0],z[2]],nt)))continue;let W=x(C,P),V=x(B,P),Y=x(B,k),et=x(C,k);a.tri(W,V,Y,A,A,I),a.tri(W,Y,et,A,I,I)}}}this.pushRoofSun(t,a,o,u,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,o,s){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(qr(a).map(u=>[u.key,u])),h=[r[0]*Math.cos(o),Math.sin(o),r[1]*Math.cos(o)];for(let u of l){let f=c.get(u.face),d=du(a,f,u);if(!f||!d||d.floor.id!==t.floor.id)continue;let p=f.n[0]*h[0]+f.n[1]*h[1]+f.n[2]*h[2],[g,b,m,x]=d.corners,v=Math.min(1,this.roofWindows.get(u.id)?.cover??0);if(v>.95)continue;let y=(D,U,A)=>[D[0]+(U[0]-D[0])*A,D[1]+(U[1]-D[1])*A,D[2]+(U[2]-D[2])*A],M=y(x,g,v),w=y(m,b,v),T=t.floor.rooms.findIndex(D=>D.id===d.roomId);if(T<0)continue;let _=t.floor.rooms.filter((D,U)=>n[U]===n[T]&&D.points.length>=3).map(D=>D.points),E=(D,U)=>{let A=(O,C)=>y(y(D[0],D[1],O),y(D[3],D[2],O),C);for(let O=0;O<6;O++)for(let C=0;C<6;C++){let B=A((O+.5)/6,(C+.5)/6);if(!_.some(et=>jt([B[0],B[2]],et)))continue;let z=A(O/6,C/6),W=A((O+1)/6,C/6),V=A((O+1)/6,(C+1)/6),Y=A(O/6,(C+1)/6);e.tri(z,W,V,U,U,U),e.tri(z,V,Y,U,U,U)}},R=D=>[D[0],.019,D[2]],S=.06*s;if(E([R(g),R(b),R(w),R(M)],new K(.75*S,.85*S,1*S)),p<.05)continue;let P=D=>{let U=Math.min(7,(D[1]-t.floor.elevation)/Math.tan(o));return[D[0]-r[0]*U,.02,D[2]-r[1]*U]},k=.16*s*Math.min(1,p*1.5);E([P(g),P(b),P(w),P(M)],new K(1*k,.84*k,.6*k))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],o=new Jt,s=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let x=(l.rotation??0)*Qt,v=[-Math.sin(x),Math.cos(x)],y=l.model==="camera_ceiling",M=l.reach??(y?3:4.5),w=(l.fov??(y?360:90))*Qt/2,T=l.motion?new K(.9,.12,.16):new K(.04,.22,.28),_=new K(0,0,0),E=Math.max(4,Math.round(w/.15)),R=.015,S=t.geo.walls2d,P=C=>{let B=C.b[0]-C.a[0],z=C.b[1]-C.a[1],W=B*B+z*z||1,V=Math.max(0,Math.min(1,((l.x-C.a[0])*B+(l.z-C.a[1])*z)/W));return Math.hypot(l.x-(C.a[0]+B*V),l.z-(C.a[1]+z*V))},k=null;for(let C of S)P(C)<.45&&(!k||P(C)<P(k))&&(k=C);let D=C=>{let B=v[0]*Math.cos(C)-v[1]*Math.sin(C),z=v[1]*Math.cos(C)+v[0]*Math.sin(C),W=M;for(let V of S){let Y=V.b[0]-V.a[0],et=V.b[1]-V.a[1],nt=B*et-z*Y;if(Math.abs(nt)<1e-9)continue;let $=((V.a[0]-l.x)*et-(V.a[1]-l.z)*Y)/nt,H=((V.a[0]-l.x)*z-(V.a[1]-l.z)*B)/nt;V===k&&$<=.45||$>.02&&$<W&&H>=0&&H<=1&&(W=$)}return W},U=(C,B)=>R+ir(t.floor,{x:C,z:B}),A=C=>{let B=D(C),z=l.x+(v[0]*Math.cos(C)-v[1]*Math.sin(C))*B,W=l.z+(v[1]*Math.cos(C)+v[0]*Math.sin(C))*B;return[z,U(z,W),W]},I=[l.x,Math.max(U(l.x,l.z),y?-1/0:U(l.x+v[0]*.3,l.z+v[1]*.3)),l.z],O=o.count;for(let C=0;C<E;C++)o.tri(I,A(-w+2*w*(C+1)/E),A(-w+2*w*C/E),T,_,_);s.push({id:l.id,start:O,end:o.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Fx.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let h=l.top??e,[u,f,d]=l.size??Ca[l.lamp],p=l.base??0,g=(l.rotation??0)*Qt,b={ceiling:h-.07,downlight:h-.03,spot:h-d,panel:h-.03,pendant:Math.max(.4,h-d)+.08,fan:Math.max(.5,h-Math.max(.25,d))+.02,floor:p+d-.15,uplight:p+d,table:p+d-.09,wall:p+d/2,strip:p+Math.max(.02,d)-.01,bollard:p+d-.08,garden:p+d-.03}[l.lamp],m=(x,v,y=1)=>{n.push(x,b,v),r.push(...c.color.map(M=>M*c.level*.7*y))};if(l.lamp==="strip")for(let x of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,p+u*(.5+x),l.z),r.push(...c.color.map(v=>v*c.level*.7*.6));else if(l.rise){let v=l.rise*Qt;n.push(l.x+Math.cos(g)*u*x*Math.cos(v),b+Math.sin(v)*u*x,l.z+Math.sin(g)*u*x*Math.cos(v)),r.push(...c.color.map(y=>y*c.level*.7*.6))}else m(l.x+Math.cos(g)*u*x,l.z+Math.sin(g)*u*x,.6);else if(l.lamp==="wall"){let x=this.packLightAt(l);x?(n.push(...x),r.push(...c.color.map(v=>v*c.level*.7))):m(l.x-Math.sin(g)*(f/2+.05),l.z+Math.cos(g)*(f/2+.05))}else m(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let x=new K(...c.color.map(T=>T*.09*c.level)),v=new K(0,0,0),y=Math.max(.03,u/2),M=.45+.35*c.level,w=16;for(let T=0;T<w;T++){let _=T/w*Math.PI*2,E=(T+1)/w*Math.PI*2,R=[l.x+Math.cos(_)*y,b,l.z+Math.sin(_)*y],S=[l.x+Math.cos(E)*y,b,l.z+Math.sin(E)*y],P=[l.x+Math.cos(_)*M,.02,l.z+Math.sin(_)*M],k=[l.x+Math.cos(E)*M,.02,l.z+Math.sin(E)*M];o.tri(R,P,k,x,v,v),o.tri(R,k,S,x,v,x)}}}let a=new Vt;a.setAttribute("position",new It(n,3)),a.setAttribute("color",new It(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=o.geometry(),t.coneMesh.visible=o.count>0,t.coneTris=s}buildScreens(t){let e=bd(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),r=(rs.value?is.value.toArray().map(s=>Math.round(s*255)).join(","):"")+"|"+e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(r===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=r;let o=new Jt;for(let s of e){let a=this.screens.get(s.id),l=Zc.has(s.type)?jc(t.geo.walls2d,s,t.floor.height,tn(t.floor,s)):null,c=l?{...s,x:l.x,z:l.z,mount_y:l.y}:s,h=c.rotation*Qt,u=Math.cos(h),f=Math.sin(h),d=(T,_,E)=>[c.x+T*u-E*f,_,c.z+T*f+E*u];if(a.faces){let T=Math.max(.05,c.w)*(c.mirror?-1:1),_=Math.max(.05,c.d),E=Math.max(.005,c.h),R=tn(t.floor,c);for(let S of a.faces){if(S.part==="lights"){let W=ae(c.type),V=Y=>["#e8f4ff","#ff3b4f"].includes(Y.color.toLowerCase());if(W&&W.parts.some(V)){let Y=new K(...S.color.map(et=>Math.min(1,et*(.4+.6*S.level))));Qo(o,W,c,R,Y.getHex(),V)}continue}if(S.part==="cabin"){let W=ae(c.type),V=Y=>Y.color.toLowerCase()==="#13283a"||Y.color==="glass";if(W&&W.parts.some(V)){let Y=new K(...S.color.map(et=>Math.min(1,et*(.3+.5*S.level))));Qo(o,W,c,R,Y.getHex(),V);continue}}if(S.part==="burners"&&ae(c.type)){let W=ae(c.type),V=new K(...S.color.map(Y=>Math.min(1,Y*(.25+.6*S.level))));Qo(o,W,c,R,V.getHex(),d0);continue}if(S.part==="burners"){let W=new K(...S.color.map(Y=>Math.min(1,Y*(.25+.6*S.level)))),V=R+E+.008;for(let[Y,et,nt]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let $=Y*Math.abs(T)/.6,H=et*_/.62,J=14;for(let ot=0;ot<J;ot++){let Q=ot/J*Math.PI*2,bt=(ot+1)/J*Math.PI*2;o.tri(d($,V,H),d($+Math.cos(Q)*nt,V,H+Math.sin(Q)*nt),d($+Math.cos(bt)*nt,V,H+Math.sin(bt)*nt),W)}}continue}if(S.part==="band"||S.part==="cabin"){let W=S.part==="cabin",V=R+E*(W?.6:.42),Y=W?R+E*.86:V+.07,et=new K(...S.color.map(J=>Math.min(1,J*(.3+.45*S.level)))),nt=Math.abs(T)/2+(W?.012:.02),$=_/2+(W?.012:.02),H=[[-nt,-$],[nt,-$],[nt,$],[-nt,$]];for(let J=0;J<4;J++){let ot=H[J],Q=H[(J+1)%4],bt=d(ot[0]*Math.sign(T),V,ot[1]),gt=d(Q[0]*Math.sign(T),V,Q[1]),ut=d(Q[0]*Math.sign(T),Y,Q[1]),ft=d(ot[0]*Math.sign(T),Y,ot[1]);o.tri(bt,gt,ut,et),o.tri(bt,ut,ft,et)}continue}if(S.part==="strata"){let W=S.top??S.color,V=.22+.4*S.level,Y=new K(...S.color.map(Q=>Math.min(1,Q*V))),et=new K(...W.map(Q=>Math.min(1,Q*V))),nt=R+E*.06,$=R+E*.94,H=Math.abs(T)/2+.012,J=_/2+.012,ot=20;for(let Q=0;Q<ot;Q++){let bt=Q/ot*Math.PI*2,gt=(Q+1)/ot*Math.PI*2,ut=[Math.cos(bt)*H,Math.sin(bt)*J],ft=[Math.cos(gt)*H,Math.sin(gt)*J];o.tri(d(ut[0],nt,ut[1]),d(ft[0],nt,ft[1]),d(ft[0],$,ft[1]),Y,Y,et),o.tri(d(ut[0],nt,ut[1]),d(ft[0],$,ft[1]),d(ut[0],$,ut[1]),Y,et,et)}continue}if(S.part==="chamber"){let W=ae(c.type),V=new K(...S.color.map(Y=>Math.min(1,Y*(.4+.6*S.level))));W&&Qo(o,W,c,R,V.getHex());continue}if(S.part==="progress"){let W=Math.min(Math.abs(T),_)*.42,V=R+E+.008,Y=new K(...S.color.map(J=>Math.min(1,J*(.4+.6*S.level)))),et=Y.clone().multiplyScalar(.15),nt=40,$=Math.round(Math.min(1,Math.max(0,S.fill??0))*nt),H=(J,ot)=>d(Math.sin(J)*ot,V,-Math.cos(J)*ot);for(let J=0;J<nt;J++){let ot=J/nt*Math.PI*2,Q=(J+1)/nt*Math.PI*2,bt=J<$?Y:et;o.tri(H(ot,W*.8),H(ot,W),H(Q,W),bt),o.tri(H(ot,W*.8),H(Q,W),H(Q,W*.8),bt)}continue}if(S.part==="apring"){let W=c.variant==="wall",V=Math.abs(T),Y=W?Math.min(V,E)*.3:Math.min(V,_)*.3,et=new K(...S.color.map(J=>Math.min(1,J*(.4+.6*S.level)))),nt=new K(0,0,0),$=24,H=(J,ot)=>W?d(Math.cos(J)*ot,R+E/2+Math.sin(J)*ot,_/2+.004):d(Math.cos(J)*ot,R-.003,Math.sin(J)*ot);for(let J=0;J<$;J++){let ot=J/$*Math.PI*2,Q=(J+1)/$*Math.PI*2;o.tri(H(ot,Y*.8),H(ot,Y),H(Q,Y),et),o.tri(H(ot,Y*.8),H(Q,Y),H(Q,Y*.8),et),o.tri(H(ot,Y),H(ot,Y*1.5),H(Q,Y*1.5),et,nt,nt),o.tri(H(ot,Y),H(Q,Y*1.5),H(Q,Y),et,nt,et)}continue}if(S.part==="drum"){let W=Math.abs(T),V=Math.min(W*.36,(E-.2)*.42),Y=R+(E-.14)/2+.04,et=_/2-.006,nt=new K(...S.color.map(Q=>Math.min(1,Q*(.35+.65*S.level)))),$=nt.clone().multiplyScalar(.12),H=new K(0,0,0),J=28,ot=(Q,bt)=>d(Math.cos(Q)*bt,Y+Math.sin(Q)*bt,et);for(let Q=0;Q<J;Q++){let bt=Q/J*Math.PI*2,gt=(Q+1)/J*Math.PI*2;o.tri(d(0,Y,et),ot(bt,V*.78),ot(gt,V*.78),$),o.tri(ot(bt,V*.78),ot(bt,V),ot(gt,V),nt),o.tri(ot(bt,V*.78),ot(gt,V),ot(gt,V*.78),nt),o.tri(ot(bt,V),ot(bt,V*1.18),ot(gt,V*1.18),nt,H,H),o.tri(ot(bt,V),ot(gt,V*1.18),ot(gt,V),nt,H,nt)}continue}if(S.part==="gang"){let W=Math.max(1,S.of??1),V=Math.abs(T),Y=V/W,et=(-V/2+Y*((S.index??0)+.5))*Math.sign(T),nt=_/2+(c.variant==="outdoor"?.02:.008),$=S.accent?rs.value?is.value.toArray():JA:S.color,H=new K(...$.map(mt=>Math.min(1,mt*(.35+.65*S.level)))),J=H.clone().multiplyScalar(.5),ot=new K(0,0,0),Q=Y*.34,bt=R+E*.16,gt=R+E*.84,ut=[d(et-Q,bt,nt),d(et+Q,bt,nt),d(et+Q,gt,nt),d(et-Q,gt,nt)];o.tri(ut[0],ut[1],ut[2],H),o.tri(ut[0],ut[2],ut[3],H);let ft=.012+.015*S.level,Lt=[d(et-Q-ft,bt-ft,nt-.001),d(et+Q+ft,bt-ft,nt-.001),d(et+Q+ft,gt+ft,nt-.001),d(et-Q-ft,gt+ft,nt-.001)];for(let mt=0;mt<4;mt++){let $t=(mt+1)%4;o.tri(ut[mt],Lt[$t],Lt[mt],J,ot,ot),o.tri(ut[mt],ut[$t],Lt[$t],J,J,ot)}continue}if(S.part==="beacon"){let W=new K(...S.color.map(gt=>Math.min(1,gt*(.25+.45*S.level)))),V=new K(0,0,0),Y=R+E+.01,et=.6+.6*S.level,nt=Math.min(Math.abs(T),_)*.38;for(let[gt,ut]of[[nt,0],[0,nt]]){let ft=d(-gt,Y,-ut),Lt=d(gt,Y,ut),mt=d(gt*.4,Y+et,ut*.4),$t=d(-gt*.4,Y+et,-ut*.4);o.tri(ft,Lt,mt,W,W,V),o.tri(ft,mt,$t,W,V,V)}let $=tn(t.floor,{...c,mount_y:0})+.012,H=Math.abs(T)/2+.03,J=_/2+.03,ot=.22+.18*S.level,Q=(gt,ut,ft)=>d(gt*(H+ft),$,ut*(J+ft)),bt=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let gt=0;gt<4;gt++){let[ut,ft]=bt[gt],[Lt,mt]=bt[(gt+1)%4];o.tri(Q(ut,ft,0),Q(Lt,mt,0),Q(Lt,mt,ot),W,W,V),o.tri(Q(ut,ft,0),Q(Lt,mt,ot),Q(ut,ft,ot),W,V,V)}continue}let P=S.part==="right"?.03:-Math.abs(T)/2+.03,k=S.part==="left"?-.03:Math.abs(T)/2-.03,D=R+(S.part==="bottom"?E*.45:E)+.006,U=new K(...S.color.map(W=>Math.min(1,W*(.35+.65*S.level)))),A=new K(0,0,0),I=(W,V,Y=D)=>d(W*Math.sign(T),Y,V),O=[I(P,-_/2+.03),I(k,-_/2+.03),I(k,_/2-.03),I(P,_/2-.03)];o.tri(O[0],O[2],O[1],U),o.tri(O[0],O[3],O[2],U);let C=S.part==="lid"?.025+.02*S.level:.12+.1*S.level,B=U.clone().multiplyScalar(S.part==="lid"?.7:.5),z=[I(P-C,-_/2-C,D+.004),I(k+C,-_/2-C,D+.004),I(k+C,_/2+C,D+.004),I(P-C,_/2+C,D+.004)];for(let W=0;W<4;W++){let V=(W+1)%4;o.tri(O[W],z[V],z[W],B,A,A),o.tri(O[W],O[V],z[V],B,B,A)}}continue}let p=ae(c.type);if(p&&!p.light&&a.ring&&p.parts.some(T=>T.glow)){let T=new K(...a.color.map(_=>Math.min(1,_*(.45+.55*a.level))));Qo(o,p,c,tn(t.floor,c),T.getHex())}let g=od(c,t.floor);if(!g)continue;let b=new K(...a.color.map(T=>Math.min(1,T*(.35+.65*a.level)))),m=new K(0,0,0),x=g.z+.004;if(o.tri(d(g.x0,g.y0,x),d(g.x1,g.y0,x),d(g.x1,g.y1,x),b),o.tri(d(g.x0,g.y0,x),d(g.x1,g.y1,x),d(g.x0,g.y1,x),b),a.plain)continue;let v=.18+.12*a.level,y=b.clone().multiplyScalar(.5),M=[d(g.x0,g.y0,x),d(g.x1,g.y0,x),d(g.x1,g.y1,x),d(g.x0,g.y1,x)],w=[d(g.x0-v,g.y0-v,x+.01),d(g.x1+v,g.y0-v,x+.01),d(g.x1+v,g.y1+v,x+.01),d(g.x0-v,g.y1+v,x+.01)];for(let T=0;T<4;T++){let _=(T+1)%4;o.tri(M[T],w[T],w[_],y,m,m),o.tri(M[T],w[_],M[_],y,m,y)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=o.geometry(),t.screenMesh.visible=o.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,o]of t.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(t.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),o.texture?.dispose(),t.screenPics.delete(r));for(let[r,o]of n){let s=this.screens.get(r),a=od(o,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new _t(new Xn(1,1),new Xt({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:s.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let h=l;new Er().load(s.picture,u=>{if(t.screenPics.get(r)!==h){u.dispose();return}u.colorSpace=Ie,h.texture=u;let f=h.mesh.material;f.map=u,f.needsUpdate=!0,this.placeScreenPicture(h.mesh,o,a,u),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*s.level),l.texture&&this.placeScreenPicture(l.mesh,o,a,l.texture)}}placeScreenPicture(t,e,n,r){let o=r.image,s=o?.width&&o?.height?o.width/o.height:16/9,{w:a,h:l}=Gg(n.x1-n.x0,n.y1-n.y0,s),c=e.rotation*Qt,h=(n.x0+n.x1)/2,u=n.z+.008;t.scale.set(a,l,1),t.rotation.set(0,-c,0),t.position.set(e.x+h*Math.cos(c)-u*Math.sin(c),(n.y0+n.y1)/2,e.z+h*Math.sin(c)+u*Math.cos(c))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){this.buildPipeLines(t);let e=this.flows.filter(d=>d.floorId===t.floor.id&&!d.pipe).map(Pa).join(";"),n=[],r=[],o=[],s=[],a=[],l=[],c=[],h=[];for(let d of this.flows){if(d.floorId!==t.floor.id||d.pipe)continue;let p=this.flowPhase.get(Pa(d))??{speed:Iu(d.power),offset:0},g=d.power>.5?Math.min(1,.5+d.power/2500):.22,b=d.color.map(E=>E*g),m=d.dots?.length?d.dots:[{color:d.color,share:1}],x=[0,1,2].map(E=>m[Math.min(E,m.length-1)].color.map(R=>R*g)),v=m.length>1?m[0].share:1,y=m.length>2?v+m[1].share:1,M=Math.hypot(d.b[0]-d.a[0],d.b[1]-d.a[1],d.b[2]-d.a[2]);if(M<1e-4)continue;let w=[(d.b[0]-d.a[0])/M,(d.b[1]-d.a[1])/M,(d.b[2]-d.a[2])/M],T=[];if(Math.abs(w[1])<.5){let E=Math.hypot(w[0],w[2])||1;T.push([-w[2]/E,0,w[0]/E])}else T.push([1,0,0],[0,0,1]);let _=this.lowQuality?[[Lx*1.4,1]]:[[oE,.25],[Lx,1]];for(let[E,R]of _)for(let S of T){let P=E*(d.width??1)*(d.thick??1)/2,k=(U,A)=>[U[0]+S[0]*P*A,U[1]+S[1]*P*A,U[2]+S[2]*P*A],D=[[k(d.a,-1),d.dist,0],[k(d.b,-1),d.dist+M,0],[k(d.b,1),d.dist+M,1],[k(d.a,1),d.dist,1]];for(let U of[0,1,2,0,2,3]){let[A,I,O]=D[U];n.push(A[0],A[1],A[2]),r.push(b[0]*R,b[1]*R,b[2]*R),o.push(I,O),s.push(p.speed),a.push(p.offset),l.push(x[0][0]*R,x[0][1]*R,x[0][2]*R,v),c.push(x[1][0]*R,x[1][1]*R,x[1][2]*R,y),h.push(x[2][0]*R,x[2][1]*R,x[2][2]*R)}}}let u=t.flowMesh.geometry;if(e===t.flowLayout&&u.getAttribute("position")?.count===n.length/3){for(let[d,p]of[["position",n],["color",r],["flowSpeed",s],["flowOffset",a],["flowDot1",l],["flowDot2",c],["flowDot3",h]]){let g=u.getAttribute(d);g.array.set(p),g.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let f=new Vt;f.setAttribute("position",new It(n,3)),f.setAttribute("color",new It(r,3)),f.setAttribute("uv",new It(o,2)),f.setAttribute("flowSpeed",new It(s,1)),f.setAttribute("flowOffset",new It(a,1)),f.setAttribute("flowDot1",new It(l,4)),f.setAttribute("flowDot2",new It(c,4)),f.setAttribute("flowDot3",new It(h,3)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=f,t.flowMesh.visible=n.length>0}buildPipeLines(t){let e=this.flows.filter(r=>r.floorId===t.floor.id&&r.pipe),n=JSON.stringify(e.map(r=>[r.a,r.b,r.dist,r.color,r.width,r.house,r.floor,Math.round(r.power/50),this.flowPhase.get(Pa(r))?.speed??0]));if(n!==t.pipeLineSig){t.pipeLineSig=n;for(let r of["all","house","floor"]){let o=[],s=[],a=[],l=[],c=[];for(let f of e){if((f.house?"house":f.floor?"floor":"all")!==r)continue;let d=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1],f.b[2]-f.a[2]);if(d<1e-4)continue;let p=this.flowPhase.get(Pa(f))??{speed:Iu(f.power),offset:0},g=[(f.b[0]-f.a[0])/d,(f.b[1]-f.a[1])/d,(f.b[2]-f.a[2])/d],b=[];if(Math.abs(g[1])<.5){let y=Math.hypot(g[0],g[2])||1;b.push([-g[2]/y,0,g[0]/y])}else b.push([1,0,0],[0,0,1]);let m=iE*(f.width??1),x=f.power>.5?1:.62,v=[[m+rE*2,[.02,.025,.05],.78,2],[m,f.color.map(y=>y*x),1,0]];for(let[y,M,w,T]of v)for(let _ of b){let E=y/2,R=T===0?.002:0,S=(k,D)=>[k[0]+_[0]*E*D,k[1]+_[1]*E*D+R,k[2]+_[2]*E*D],P=[[S(f.a,-1),f.dist,T],[S(f.b,-1),f.dist+d,T],[S(f.b,1),f.dist+d,T+1],[S(f.a,1),f.dist,T+1]];for(let k of[0,1,2,0,2,3]){let[D,U,A]=P[k];o.push(D[0],D[1],D[2]),s.push(M[0],M[1],M[2],w),a.push(U,A),l.push(p.speed),c.push(p.offset)}}}let h=r==="house"?t.pipeHouseMesh:r==="floor"?t.pipeFloorMesh:t.pipeLineMesh,u=new Vt;u.setAttribute("position",new It(o,3)),u.setAttribute("color",new It(s,4)),u.setAttribute("uv",new It(a,2)),u.setAttribute("flowSpeed",new It(l,1)),u.setAttribute("flowOffset",new It(c,1)),h.geometry.dispose(),h.geometry=u,h.userData.filled=o.length>0}this.applyHouseLines(t)}}applyHouseLines(t){for(let e of t?[t]:this.floors)e.pipeLineMesh.visible=!!e.pipeLineMesh.userData.filled,e.pipeHouseMesh.visible=!!e.pipeHouseMesh.userData.filled&&this.floorId===null,e.pipeFloorMesh.visible=!!e.pipeFloorMesh.userData.filled&&this.floorId!==null}buildOpenings(t){let e=fx(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color"),n=t.geo.roomTris.map(r=>`${this.roomTint?.get(r.roomId)?.join(",")??""}${r.roomId===this.roomId?"*":""}${this.roomGlow.has(r.roomId)?"+":""}`).join(";");if(this.highlighted.get(e)!==n){this.highlighted.set(e,n);for(let r of t.geo.roomTris){let o=new K(r.color),s=this.roomTint?.get(r.roomId);s?o.lerp(new K(...s).multiplyScalar(.6),.9):this.roomGlow.has(r.roomId)&&o.lerp(fE,.6),r.roomId===this.roomId&&o.lerp(dE,s?.3:.75);for(let a=r.start*3;a<r.end*3;a++)e.setXYZ(a,o.r,o.g,o.b)}e.needsUpdate=!0}}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new _n;for(let f of this.activeFloors()){let d=f.floor.elevation+f.ty;for(let p of f.floor.rooms)for(let[g,b]of p.points)e.expandByPoint(new X(g,d,b)),e.expandByPoint(new X(g,d+f.floor.height,b))}e.isEmpty()&&e.set(new X(-4,0,-4),new X(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new X),r=e.getSize(new X),o=Math.max(8,Lu(r.length()/2,this.camera.fov,this.camera.aspect,this.fitMargin)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,o*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=o);let s=this.floorId===null,a=s?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(s||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,Ed(l.radius,this.camera.fov,this.camera.aspect)*1.5));let h=c?l.target:null;if(h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.keepNext){this.keepNext=!1,this.fitted=null;let f=this.controls.view;this.controls.flyTo({target:new X(f.target.x,n.y,f.target.z),radius:f.radius,phi:f.phi,theta:f.theta},t);return}let u=c?Ed(l.radius,this.camera.fov,this.camera.aspect):o;this.controls.flyTo({target:n,radius:u,phi:l?l.phi:.85,theta:l?l.theta:-.6},t,!!l),this.fitted=this.controls.goal}placeGround(){let t=new _n,e=1/0;for(let s of this.floors){e=Math.min(e,s.floor.elevation+Math.min(0,s.ty));for(let a of s.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new X(l,0,c));for(let a of s.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new X(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day"&&this.theme!=="realistic",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=ME();let s=this.ground.material;s.map=this.groundTexture,s.needsUpdate=!0}let n=t.getCenter(new X),r=t.getSize(new X),o=Cd*Math.ceil((Math.max(r.x,r.z)+16)/Cd);this.ground.scale.set(o,o,1),this.ground.position.set(n.x,e-sn-.02,n.z)}distanceFor(t){let e=this.camera.fov*Qt,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new Gs;return r.setFromCamera(new Zt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),o=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh,...Nx(a)].filter(l=>l.visible)),s=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(h=>h.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let h=s(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(h)return{entity:h}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??te;if(f!==te&&Math.floor(f/16)===0)continue}let h=s(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),u=h?this.pickOpenings.get(h):void 0;if(u)return{entity:u}}else if(a.object===c.wallMesh||a.object.userData.rackId){let h=a.object.userData.rackId??s(c.geo.furnitureTris,l),u=h?this.rackHit(c,h,a.point):null;if(u?.slot)return{floorId:c.floor.id,roomId:null,rack:u};let f=h?this.pickFurniture.get(h):void 0;if(f)return{entity:f};if(u)return{floorId:c.floor.id,roomId:null,rack:u};if(!h&&a.face&&a.face.normal.y>.7){let d=Rf(c.floor).find(p=>jt([a.point.x,a.point.z],p.points));if(d)return{floorId:c.floor.id,roomId:d.id}}if(a.face&&!h){let d=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,p=Math.floor(d/16),g=d%16,b=this.wallMode==="cut"&&p===0,m=(c.mask.glass.value&1<<g)!==0;if(!b){let x=n.ray.direction,v=Math.hypot(x.x,x.z)||1,y=[a.point.x-x.x/v*.3,a.point.z-x.z/v*.3],M=c.floor.rooms.find(w=>w.points.length>=3&&jt(y,w.points))?.id??null;if(this.roomId!==null){if(M===this.roomId)return{floorId:c.floor.id,roomId:M}}else if(!m&&M)return{floorId:c.floor.id,roomId:M}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:s(c.geo.roomTris.map(h=>({id:h.roomId,start:h.start,end:h.end})),l)??null}}return null}rackHit(t,e,n){let r=t.floor.furniture.find(b=>b.id===e),o=r?.rack?.slots,s=o?.length?zi(ae(r.type)):null;if(!r||!o||!s)return null;let a=t.group.worldToLocal(n.clone()),l=r.rotation*Qt,c=Math.cos(l),h=Math.sin(l),u=a.x-r.x,f=a.z-r.z,d=[(r.mirror?-1:1)*(u*c+f*h),a.y-tn(t.floor,r),-u*h+f*c],p=Vi(s,Math.max(.05,r.w),Math.max(.05,r.d),Math.max(.005,r.h)),g=tp(gr(p,o,ae),d);return{id:e,slot:g?o.find(b=>b.id===g)??null:null,f:r}}onTap(t,e){let n=this.pick(t,e);if(n&&"rack"in n&&n.rack){if(this.furnish)return;let r=rp(n.rack.f,ae);r&&this.options.onRackTap?.(n.rack.id,r,n.rack.slot?.id??null);return}if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Fu),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),o=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],s=r.flatMap(a=>[a.lampMesh,a.wallMesh,...Nx(a),...o(a)].filter(l=>l.visible));for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=r.find(u=>u.group===a.object.parent||o(u).includes(a.object));if(!l)continue;if(a.object.userData.rackId)return{fv:l,id:a.object.userData.rackId,y:a.point.y};if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let u=this.furnitureNear(l,a.point.x,a.point.z);if(u)return{fv:l,id:u,y:a.point.y};continue}let h=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(u=>a.faceIndex>=u.start&&a.faceIndex<u.end)?.id;if(h)return{fv:l,id:h,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let o of t.floor.furniture){let s=o.rotation*Qt,a=e-o.x,l=n-o.z,c=Math.abs(a*Math.cos(s)+l*Math.sin(s))-o.w/2,h=Math.abs(-a*Math.sin(s)+l*Math.cos(s))-o.d/2,u=Math.max(c,h);u<.25&&(!r||u<r.d)&&(r={id:o.id,d:u})}return r?.id??null}floorPoint(t,e,n,r){let o=this.rayAt(e,n),s=r??t.floor.elevation+t.y,a=o.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(s-o.ray.origin.y)/a.y;return l<=0?null:[o.ray.origin.x+a.x*l,o.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let s=n?this.devices.find(u=>u.id===n)?.furnitureId:void 0,a=s?null:this.furnitureAt(t,e),l=s??a?.id,c=l?this.floors.find(u=>u.floor.furniture.some(f=>f.id===l)):void 0,h=c?.floor.furniture.find(u=>u.id===l)?.type;return!!(c&&l&&h&&r.has(h))&&this.grabItem(c,l,t,e)}if(n){let s=this.devices.find(l=>l.id===n)?.furnitureId,a=s?this.floors.find(l=>l.floor.furniture.some(c=>c.id===s)):void 0;return!s||!a?this.grabDevice(n,t,e):this.grabItem(a,s,t,e)}let o=this.furnitureAt(t,e);if(!o){let s=this.pick(t,e);return s&&"entity"in s?this.grabDevice(s.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(o.fv,o.id,t,e,o.y)}grabItem(t,e,n,r,o){let s=t.floor.furniture.find(u=>u.id===e),a=o===void 0?void 0:Math.min(o,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!s||!l)return!1;let c,h=this.rayAt(n,r).ray.direction;if(o!==void 0&&-h.y<.34){let u=this.camera.position,f=this.camera.getWorldDirection(new X),d=Math.hypot(f.x,f.z)||1,p=[f.x/d,f.z/d],g=Math.hypot(l[0]-u.x,l[1]-u.z,(a??0)-u.y),b=this.renderer.domElement.getBoundingClientRect().height||1,m=2*g*Math.tan(this.camera.fov*Math.PI/360)/b;c={x0:n,y0:r,fx:s.x,fz:s.z,right:[-p[1],p[0]],fwd:p,perPx:m,gain:Math.min(2,1/Math.max(.5,-h.y))}}return s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:t.floor.id,id:s.id,offset:[s.x-l[0],s.z-l[1]],x:s.x,z:s.z,moved:!1,plane:a,screen:c},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),o=r&&this.floorMap.get(r.floorId),s=o&&this.floorPoint(o,e,n);return!r||!o||!s?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:o.floor.id,offset:[r.x-s[0],r.z-s[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(b=>b.id===n.id),p=f&&this.floorPoint(f,t,e);if(!f||!d||!p)return;let g=this.building?.settings.grid??.05;n.x=d.x=Math.round((p[0]+n.offset[0])/g)*g,n.z=d.z=Math.round((p[1]+n.offset[1])/g)*g,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,o=r&&this.floorMap.get(r.floorId);if(!r||!o)return;let s=r.screen,a;if(s){let f=(t-s.x0)*s.perPx,d=(e-s.y0)*s.perPx*s.gain;a=[s.fx+s.right[0]*f-s.fwd[0]*d-r.offset[0],s.fz+s.right[1]*f-s.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(o,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=o.floor.furniture.find(f=>f.id===r.id),h=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?Mb(o.floor,c,h,u,this.building?.settings.wall_interior??0):[h,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Le,n;for(let r of t){let o=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),s=o?.floor.furniture.find(a=>a.id===r);!o||!s||(n??=o,this.ghostBox(e,o,s,r===this.selectedFurniture?new K(.25,.9,1):new K(1,.71,.28)))}n&&(this.ghost=new Ge(e.geometry(),new je({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let o=this.grab?.id===n.id?this.grab.x:n.x,s=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=ae(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?tn(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:tn(e.floor,n),u=n.rotation*Qt,f=Math.cos(u),d=Math.sin(u),p=(b,m,x)=>[o+b*f-m*d,x,s+b*d+m*f],g=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let b=0;b<4;b++){let[m,x]=g[b],[v,y]=g[(b+1)%4];t.seg(p(m,x,h+.01),p(v,y,h+.01),r),t.seg(p(m,x,h+c),p(v,y,h+c),r),t.seg(p(m,x,h+.01),p(m,x,h+c),r)}t.seg(p(-n.w/2,n.d/2+.03,h+.02),p(n.w/2,n.d/2+.03,h+.02),new K(1,1,1))}onHold(t,e){let n=this.pick(t,e);if(n&&"entity"in n)this.options.onDeviceHold?.(n.entity,t,e);else if(n&&"rack"in n&&n.rack&&!this.furnish){let r=n.rack.slot?Kd(n.rack.slot)[0]:void 0;r?this.options.onDeviceHold?.(r,t,e):this.onTap(t,e)}}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let o=this.pick(t,e);return!o||!("entity"in o)||this.options.onDeviceSwipe?.(o.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:o.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(m=>m.floor.rooms.some(x=>x.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),o=Math.round(t*r),s=Math.round(e*r),a=new qe(o,s);a.texture.colorSpace=Ie;let l=new Rn(-1,1,1,-1,.1,400),c=this.floors.map(m=>({fv:m,visible:m.group.visible,y:m.y,o:m.o,standing:m.mask.standing.value,glass:m.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(o*s*4),p=document.createElement("canvas");p.width=o,p.height=s;let g=p.getContext("2d"),b=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let m of n){for(let k of this.floors)k.group.visible=k===m;m.y=0,m.o=1,this.applyFloor(m),m.group.visible=!0,m.mask.standing.value=0,m.mask.glass.value=0;let x=m.floor.rooms.flatMap(k=>k.points),v=m.floor.elevation,y=new _n(new X(Math.min(...x.map(k=>k[0]))-.3,v,Math.min(...x.map(k=>k[1]))-.3),new X(Math.max(...x.map(k=>k[0]))+.3,v+Math.min(m.floor.cut_height,m.floor.height),Math.max(...x.map(k=>k[1]))+.3)),M=y.getCenter(new X),w=-.6,T=.8,_=new X(Math.sin(T)*Math.sin(w),Math.cos(T),Math.sin(T)*Math.cos(w));l.position.copy(M).addScaledVector(_,100),l.lookAt(M),l.updateMatrixWorld();let E=.5,R=.5;for(let k of[y.min.x,y.max.x])for(let D of[y.min.y,y.max.y])for(let U of[y.min.z,y.max.z]){let A=new X(k,D,U).applyMatrix4(l.matrixWorldInverse);E=Math.max(E,Math.abs(A.x)),R=Math.max(R,Math.abs(A.y))}let S=o/s;E/R>S?R=E/S:E=R*S,l.left=-E*1.05,l.right=E*1.05,l.top=R*1.05,l.bottom=-R*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,o,s,d);let P=g.createImageData(o,s);for(let k=0;k<s;k++)P.data.set(d.subarray((s-1-k)*o*4,(s-k)*o*4),k*o*4);g.putImageData(P,0,0),b.push({floorId:m.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let m of c)m.fv.y=m.y,m.fv.o=m.o,m.fv.mask.standing.value=m.standing,m.fv.mask.glass.value=m.glass,this.applyFloor(m.fv),m.fv.group.visible=m.visible;this.roof&&(this.roof.group.visible=h,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return b}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let o=r.info.mode,s=n.mode==="cleaning"&&o==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(o!=="cleaning"||s||!r.motion.path.length)){let a=n.room?px(n.room,void 0,void 0,n.obstacles):Td(n.rest),l=a.length?a:Td(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-r.motion.pos[0],h[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!jt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Ax[n.mode])}for(let[n,r]of this.robots)if(!e.has(n)){r.group.removeFromParent(),r.led.dispose();for(let o of r.own)o.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(t){let e=t.model;return e&&ae(e.type)?`${e.type}|${e.w}|${e.d}|${e.h}`:""}makeRobot(t){let e={pos:[...t.rest],heading:t.restHeading,path:[],next:0},n=new Xt({color:Ax[t.mode]}),r=this.robotModelKey(t),o=t.model?ae(t.model.type):void 0;if(t.model&&o&&r){let{w:a,d:l,h:c}=t.model,h=new Jt,{radius:u,top:f}=qg(h,o,a,l,c),d=new Jt,p=Math.min(.05,u*.3),g=Math.min(.1,u*.55);Fe(d,[[-p,g],[p,g],[p,g+p*.8],[-p,g+p*.8]],f,f+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new Xt({vertexColors:!0});let b=[h.geometry(),d.geometry()],m=new Te;return m.add(new _t(b[0],this.robotMat),new _t(b[1],n)),{info:t,motion:e,group:m,led:n,own:b,modelKey:r}}if(!this.robotGeo){let a=new Jt,l=(h,u,f,d,p)=>{let g=[];for(let b=0;b<20;b++)g.push([Math.cos(b/20*Math.PI*2)*h,Math.sin(b/20*Math.PI*2)*h]);Fe(a,g,u,f,d,p,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new Xt({vertexColors:!0});let c=new Jt;Fe(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let s=new Te;return s.add(new _t(this.robotGeo,this.robotMat),new _t(this.robotLedGeo,n)),{info:t,motion:e,group:s,led:n,own:[],modelKey:r}}syncFans(t){let e=new Set;for(let n of t){if(n.lamp!=="fan")continue;let r=n.furnitureId??n.id;e.add(r);let[o,,s]=n.size??Ca.fan,a=n.top??this.floorMap.get(n.floorId)?.floor.height??2.5,l=o/2,c=this.fans.get(r);if(c&&Math.abs(c.r-l)>.001&&(c.group.removeFromParent(),c.mesh.geometry.dispose(),this.fans.delete(r),c=void 0),!c){let h=new Jt;zx(h,0,0,0,l,0),this.fanMat??=new Xt({vertexColors:!0});let u=new _t(h.geometry(),this.fanMat),f=new Te;f.add(u),f.rotation.y=-((n.rotation??0)*Qt),c={group:f,mesh:u,r:l,speed:0,floorId:n.floorId,y:0},this.fans.set(r,c)}c.floorId=n.floorId,c.speed=n.fanSpeed??0,c.y=Bx(a,s),c.group.position.set(n.x,c.y,n.z)}for(let[n,r]of this.fans)e.has(n)||(r.group.removeFromParent(),r.mesh.geometry.dispose(),this.fans.delete(n));this.fanLast=0}stepFans(t){if(!this.fans.size)return!1;let e=this.fanLast?Math.min(.2,(t-this.fanLast)/1e3):0;this.fanLast=t;let n=!1;for(let r of this.fans.values()){let o=this.floorMap.get(r.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),r.group.visible=!(this.wallMode==="cut"&&r.y>Math.min(o.floor.cut_height,o.floor.height)),!(r.speed<=0)&&(n=!0,r.group.rotation.y-=r.speed*Math.PI*2*e))}return n||(this.fanLast=0),n}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let o=this.floorMap.get(r.info.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),e>0?n=mx(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new K(.25-.2*a,.95-.83*a,1-.7*a),r=new K(0,0,0),o=new K(.3,1,.6),s=.02;for(let a of this.floors){let l=new Jt;for(let h of e)h.floorId===a.floor.id&&h.points.forEach(([u,f],d)=>{let p=h.points[d-1];if(p){let g=Math.hypot(u-p[0],f-p[1])||1,b=-(f-p[1])/g*.1,m=(u-p[0])/g*.1;l.tri([p[0]+b,s,p[1]+m],[u+b,s,f+m],[u-b,s,f-m],o,o,o),l.tri([p[0]+b,s,p[1]+m],[u-b,s,f-m],[p[0]-b,s,p[1]-m],o,o,o)}for(let g=0;g<10;g++){let b=g/10*Math.PI*2,m=(g+1)/10*Math.PI*2;l.tri([u,s,f],[u+Math.cos(m)*.35,s,f+Math.sin(m)*.35],[u+Math.cos(b)*.35,s,f+Math.sin(b)*.35],o,r,r)}});let c=null;for(let h of t){if(h.floorId!==a.floor.id)continue;let u=n(h.age);if(c){let f=Math.hypot(h.x-c.x,h.z-c.z)||1,d=-(h.z-c.z)/f*.06,p=(h.x-c.x)/f*.06,g=n(c.age);l.tri([c.x+d,s,c.z+p],[h.x+d,s,h.z+p],[h.x-d,s,h.z-p],g,u,u),l.tri([c.x+d,s,c.z+p],[h.x-d,s,h.z-p],[c.x-d,s,c.z-p],g,u,g)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,p=(f+1)/12*Math.PI*2;l.tri([h.x,s,h.z],[h.x+Math.cos(p)*.22,s,h.z+Math.sin(p)*.22],[h.x+Math.cos(d)*.22,s,h.z+Math.sin(d)*.22],u,r,r)}c=h}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*Qt,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.22,(e.tilt??(o?65:20))*Qt)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y),l=new X(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s));return this.controls.flyTo({target:new X(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-s,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+Fu;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,o,s){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new X(e,a.floor.elevation+a.ty+r,n),radius:s?.radius??5.5,phi:s?.phi??.78,...s?.theta!==void 0?{theta:s.theta}:{}},900),o){this.flashes.set(o,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(o)}"]`);l?.classList.add("fp3d-dev-found"),setTimeout(()=>l?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),o=this.stepFloors(e),s=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let x=new Set;for(let[v,y]of this.flashes){let M=this.deviceFloor.get(v);M&&x.add(M),y<=t&&this.flashes.delete(v)}a=this.flashes.size>0;for(let v of this.floors)x.has(v.floor.id)&&this.buildLamps(v)}let l=this.placeRoof(e),c=this.stepRobots(t),h=this.stepFans(t),u=this.stepWeather(t),f=r||o||s||a||l,d=[];(r||this.controls.busy)&&d.push("camera"),o&&d.push("floors"),s&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.poolActive&&d.push("pool"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),c&&d.push("robot"),h&&d.push("fan"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.updateRackDetail(),this.projections.active&&this.updateProjections(),this.sunFx.showShadow(this.floorId===null&&this.shadowSig!==""),this.realism.active&&this.realism.realize(this.scene,!!this.realPlan(),this.renderer,o||s||l||c||h);let p=yx(this.controls.view.radius,this.size.h);for(let x of this.floors)x.materials.halos.size=p;this.renderer.render(this.scene,this.camera),this.disposeRetired(),(this.viewChanged()||o||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),f&&this.invalidate();let g=this.flowActive||this.solarActive||this.soundActive||this.poolActive||c||h||this.effectFloors.size>0;g&&!this.decorWas&&(this.lastWake=t),this.decorWas=g;let b=this.effectFloors.size?this.decor(this.lowQuality?2*kx:kx):null;if(b!==null&&!this.effectTimer&&!document.hidden){let x=b;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=x/1e3,this.effectTick=!0;for(let v of this.floors)v.o<.02||!this.effectFloors.has(v.floor.id)||(this.buildLamps(v),this.buildGlow(v));this.decorTimer||this.invalidate()},x)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33));let m=this.flowActive||this.solarActive||this.soundActive||this.poolActive;if(this.lowQuality){let x=c||m||h?this.decor(h?83:0,h?83:void 0):null;!f&&x!==null&&!this.decorTimer&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},x));return}!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},33)),!f&&h&&!this.fanTimer&&(this.fanTimer=setTimeout(()=>{this.fanTimer=void 0,this.invalidate()},50)),!f&&m&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},nE))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,o=Math.hypot(n,r)||1;for(let s of this.floors){let a=this.roomId!==null&&s.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;s.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/o+h[1]*r/o>=.25:a;!l&&f&&(c|=1<<u)}),s.mask.standing.value=l?0:65535,s.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new X,r=this.houseView,o=[];for(let s of this.floors){let a=s.bbox;if(!(r&&s.o>.5&&a)){this.place(s.label,null);continue}let l=null,c=null,h=s.floor.elevation+s.y+s.floor.cut_height*.5;for(let g of[a.x0,a.x1])for(let b of[a.z0,a.z1]){n.set(g,h,b).project(this.camera);let m=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||m<l.x)&&(l={x:m,y:x}),(!c||m>c.x)&&(c={x:m,y:x})}s.label.hidden&&(s.label.hidden=!1),s.labelSize??={w:s.label.offsetWidth,h:s.label.offsetHeight};let u=s.labelSize.w,f=8+this.labelInset,d=l.x-u-14,p=l.y;d<f&&this.labelInset&&(d=c.x+14,p=c.y),o.push({fv:s,left:Math.max(f,Math.min(t-u-8,d)),y:p,h:s.labelSize.h})}o.sort((s,a)=>a.fv.rank-s.fv.rank);for(let s=1;s<o.length;s++){let a=o[s-1];o[s].y=Math.max(o[s].y,a.y+(a.h+o[s].h)/2+8)}for(let s of o)this.place(s.fv.label,`translate(${s.left}px, ${s.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((s,a)=>{let l=this.floorMap.get(s.floorId);if(this.roomId!==null&&s.room!==this.roomId||s.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(s.views==="house"||s.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new X(s.p[0],s.p[1]+(l?.y??0)+(s.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),s.p[2]),h=this.camera.position.clone().sub(c),u=h.length();if(s.near!==void 0&&u>s.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=h.normalize().dot(new X(s.n[0],s.n[1],s.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*s.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,p,f)}),this.updateDevicePins(t,e);for(let s of this.floors){let a=s.to<.99||s.o<.9||r||this.roomId!==null||this.otherFloor(s),l=s.floor.elevation+s.y+.05;for(let c of s.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new X,r=this.houseView;for(let o of this.persons){let s=this.personPins.get(o.id),a=this.floorMap.get(o.floorId),l=this.figures.get(o.id);if(!s)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(s,null),l?.visible&&(l.visible=!1,this.invalidate());continue}let c=this.personAt.get(o.id);if(!c||c.floorId!==o.floorId)c={floorId:o.floorId,x:o.x,z:o.z};else{let f=o.x-c.x,d=o.z-c.z;Math.hypot(f,d)>.02?(c={floorId:o.floorId,x:c.x+f*.12,z:c.z+d*.12},this.labelsDirty=!0,this.invalidate()):c={floorId:o.floorId,x:o.x,z:o.z}}this.personAt.set(o.id,c);let h=a.floor.elevation+a.y;if(l){let f=Math.atan2(this.camera.position.x-c.x,this.camera.position.z-c.z);(!l.visible||l.position.x!==c.x||l.position.y!==h||l.position.z!==c.z||l.rotation.y!==f)&&(l.visible=!0,l.position.set(c.x,h,c.z),l.rotation.y=f,this.invalidate())}n.set(c.x,h+(l?1.85:.9),c.z).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(s,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let o of this.devices){let s=this.devicePins.get(o.id)?.el;if(!s)continue;let a=this.floorMap.get(o.floorId),l=o.id.startsWith("detect:")||o.id.startsWith("hh:")&&o.active;if(!a||r&&!l||a.to<.99||a.o<.9||o.pin===!1||this.otherFloor(a)){this.place(s,null);continue}if(n.set(o.x,a.floor.elevation+a.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(s,null);continue}let h=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(s)!==h&&(this.pinMode.set(s,h),s.classList.toggle("fp3d-dev-full",h==="full"),s.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(s,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let o=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:o.calls,triangles:o.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=mE(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function mE(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function gE(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(s,a,l,c,h)=>{e.strokeStyle=`rgba(55,224,255,${h})`,e.beginPath(),e.moveTo(s,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(s,a,l)=>{e.save(),e.beginPath(),e.rect(s*256,a*256,256,256),e.clip(),l(s*256,a*256),e.restore()};r(0,0,(s,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(s,c,s+256,c,.09);let h=s+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),r(1,0,(s,a)=>{for(let l=0;l<7;l++){let c=s+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),r(2,0,(s,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(s+c,a,s+c,a+256,.1),n(s,a+c,s+256,a+c,.1)}}),r(1,1,(s,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(s,c,s+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(s+u+.75,c,s+u+.75,c+256/2,.09)}}),r(2,1,(s,a)=>{n(s+.75,a,s+.75,a+256,.08),n(s,a+.75,s+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(s+l*97%256,a+(l*61+l*l%37)%256,2,2)});let o=new pn(t);return o.flipY=!1,o.wrapS=An,o.wrapT=An,o.anisotropy=4,o.colorSpace=Ie,o}function bE(i){let t=new Xt({map:i,transparent:!0,blending:Ee,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function xE(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new pn(i);return e.wrapS=Mr,e.wrapT=Mr,e.colorSpace=Ie,e}function Pa(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}${i.width?`~${i.width}`:""}`}function yE(i){let t=new Xt({vertexColors:!0,transparent:!0,depthWrite:!1,side:re,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dCore = step(vFlowUv.y, 1.5);
        float fp3dAcross = 1.0 - abs(fract(vFlowUv.y) * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // one soft swell of light every 0.8 m, rising slowly and falling fast: the way the water goes
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 1.25);
        float fp3dSwell = pow(fp3dPhase, 3.0) * fp3dMoving * fp3dCore;
        diffuseColor.rgb *= mix(1.0, 0.72 + 0.4 * fp3dAcross, fp3dCore);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`)},t.customProgramCacheKey=()=>"fp3d-pipe-line",t}function vE(i){let t=new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:re});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
attribute vec4 flowDot1;
attribute vec4 flowDot2;
attribute vec3 flowDot3;
varying vec4 vFlowDot1;
varying vec4 vFlowDot2;
varying vec3 vFlowDot3;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;
vFlowDot1 = flowDot1;
vFlowDot2 = flowDot2;
vFlowDot3 = flowDot3;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying vec4 vFlowDot1;
varying vec4 vFlowDot2;
varying vec3 vFlowDot3;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dAcross = 1.0 - abs(vFlowUv.y * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // light dots every third of a metre, each a comet: a bright head and a tail fading out behind it,
        // so the direction (from a to b) is plain even on a still picture
        float fp3dRun = (vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 3.0;
        float fp3dPhase = fract(fp3dRun);
        float fp3dDot = exp(-(1.0 - fp3dPhase) * 7.0) * fp3dMoving;
        float fp3dCore = fp3dAcross * fp3dAcross;
        // a blended cable: each dot keeps one source's colour all along its way, the sources in their shares (#28)
        float fp3dPick = fract(floor(fp3dRun) * 0.6180339887);
        vec3 fp3dDotColor = fp3dPick < vFlowDot1.w ? vFlowDot1.rgb : (fp3dPick < vFlowDot2.w ? vFlowDot2.rgb : vFlowDot3);
        diffuseColor.rgb = (diffuseColor.rgb * 0.3 + fp3dDotColor * 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function Dx(i,t){let e=i.rooms.map((r,o)=>o),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,o]of t){let s=i.rooms.findIndex(h=>h.id===r),a=i.rooms.findIndex(h=>h.id===o);if(s<0||a<0)continue;let l=n(s),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,o)=>n(o))}function _E(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new pn(t);return r.colorSpace=Ie,r}function ME(){let t=Cd,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let s=0;s<=t;s++){let a=Math.round(s/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let o=new pn(e);return o.anisotropy=4,o.colorSpace=Ie,o}function Ox(i,t,e,n){let r=gb(i,t,e),o=new _t(r.mesh,n.wall),s=new Ge(r.lines,n.lines);return o.userData.rackId=s.userData.rackId=t.f.id,[o,s]}function Nx(i){return i.racks.map(t=>t.near&&t.detail?t.detail[0]:t.slab[0])}function yF(i,t){return new Id(i,t)}function Bx(i,t){return Math.max(.5,i-Math.max(.25,t))+.11}function zx(i,t,e,n,r,o){let a=Math.max(.22,r);for(let l=0;l<4;l++){let c=o+l*Math.PI/2,h=Math.cos(c),u=Math.sin(c),d=[[.12,-.045],[a,-.065],[a,.065],[.12,.045]].map(([p,g])=>[t+p*h-g*u,n+p*u+g*h]);Fe(i,d,e-.006,e+.006,sE,aE,{aoFrom:0,bottom:!0})}}function Pd(i,t,e,n,r=!0){let[o,s,a]=t.size??Ca[t.lamp],l=t.base??0,c=(t.rotation??0)*Qt,h=Math.cos(c),u=Math.sin(c),f=(b,m)=>[t.x+b*h-m*u,t.z+b*u+m*h],d=(b,m,x,v,y,M=14)=>{let w=[];for(let T=0;T<M;T++){let _=T/M*Math.PI*2;w.push([t.x+Math.cos(_)*b,t.z+Math.sin(_)*b])}Fe(i,w,m,x,v,y,{aoFrom:0,bottom:!0})},p=(b,m,x,v,y,M,w,T=w)=>Fe(i,[f(b,x),f(m,x),f(m,v),f(b,v)],y,M,w,T,{aoFrom:0,bottom:!0}),g=Math.max(.05,Math.min(o,s)/2);switch(t.lamp){case"ceiling":d(g*.25,e-.04,e,oe,oe,8),d(g,e-Math.max(.04,a)-.035,e-.04,n,n);break;case"pendant":{let b=Math.max(.4,e-a);d(.06,e-.02,e,oe,oe,8);let m=t.variant==="globe"?b+2*g:t.variant==="drum"?b+.24:b+.2;if(d(.008,m,e-.02,oe,oe,5),t.variant==="globe")for(let v=0;v<7;v++){let y=Math.PI*(v/7),M=Math.PI*((v+1)/7);d(g*Math.max(.2,Math.sin((y+M)/2)),b+g-g*Math.cos(y),b+g-g*Math.cos(M),n,n,14)}else if(t.variant==="cone")for(let v=0;v<4;v++)d(g*(.25+.75*(4-v)/4),b+.06*v,b+.06*(v+1),n,n,16);else t.variant==="drum"?d(g,b,b+.24,n,n,18):(d(g*.35,b+.14,b+.2,n,n,12),d(g,b,b+.14,n,n,16));break}case"fan":{let b=Math.max(.5,e-Math.max(.25,a));d(.06,e-.03,e,oe,oe,10),d(.012,b+.16,e-.03,oe,oe,6),d(.13,b+.07,b+.16,oe,oe,16),d(.11,b,b+.07,n,n,16),r&&zx(i,t.x,Bx(e,a),t.z,o/2,c);break}case"downlight":d(g,e-.012,e,oe,oe,12),d(g*.7,e-.02,e-.012,n,n,12);break;case"spot":d(g*.6,e-.02,e,oe,oe,10),d(g,e-Math.max(.06,a),e-.02,oe,oe,12),d(g*.8,e-Math.max(.06,a)-.008,e-Math.max(.06,a),n,n,12);break;case"panel":p(-o/2,o/2,-s/2,s/2,e-Math.max(.015,a),e,oe,oe),p(-o/2+.02,o/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,a)-.004,e-Math.max(.015,a),n);break;case"uplight":d(Math.max(.1,g*.6),l,l+.03,oe,oe),d(.014,l+.03,l+a-.12,oe,oe,6),d(g,l+a-.14,l+a-.02,oe,oe),d(g*.92,l+a-.02,l+a,n,n);break;case"bollard":d(g,l,l+a-.14,oe,oe,10),d(g*.9,l+a-.14,l+a-.03,n,n,10),d(g*1.1,l+a-.03,l+a,oe,oe,10);break;case"garden":d(.012,l,l+a-.08,oe,oe,5),d(g,l+a-.08,l+a-.01,oe,oe,10),d(g*.8,l+a-.01,l+a,n,n,10);break;case"floor":d(Math.max(.1,g*.7),l,l+.03,oe,oe),d(.014,l+.03,l+a-.28,oe,oe,6),d(g,l+a-.3,l+a,n,n);break;case"table":d(Math.max(.05,g*.55),l,l+.03,oe,oe),d(.012,l+.03,l+a-.16,oe,oe,6),d(g,l+a-.18,l+a,n,n);break;case"wall":{let b=t.base??Xc;p(-o/2+.03,o/2-.03,-s/2,-s/2+.02,b,b+a,oe),p(-o/2,o/2,-s/2+.02,s/2,b+a*.15,b+a*.85,n);break}case"strip":{let b=Math.max(.02,a),m=t.base!=null?t.base+b:e-.04;if(!t.roll&&!t.upright&&!t.rise){p(-o/2,o/2,-s/2,s/2,m-b,m,n);break}let x=(t.roll??0)*Qt,v=Math.cos(x),y=Math.sin(x),M=t.upright?l+o/2:m-b/2,w=(t.upright?0:t.rise??0)*Qt,T=(P,k,D)=>{let U=P,A=k*v-D*y,I=k*y+D*v;return w&&([U,A]=[U*Math.cos(w)-A*Math.sin(w),U*Math.sin(w)+A*Math.cos(w)]),t.upright&&([U,A]=[-A,U]),[t.x+U*h-I*u,M+A,t.z+U*u+I*h]},_=[T(-o/2,-b/2,-s/2),T(o/2,-b/2,-s/2),T(o/2,-b/2,s/2),T(-o/2,-b/2,s/2),T(-o/2,b/2,-s/2),T(o/2,b/2,-s/2),T(o/2,b/2,s/2),T(-o/2,b/2,s/2)],E=new K(n),R=[t.x,M,t.z],S=(P,k,D,U)=>{let[A,I,O]=[_[P],_[k],_[D]],C=[(I[1]-A[1])*(O[2]-A[2])-(I[2]-A[2])*(O[1]-A[1]),(I[2]-A[2])*(O[0]-A[0])-(I[0]-A[0])*(O[2]-A[2]),(I[0]-A[0])*(O[1]-A[1])-(I[1]-A[1])*(O[0]-A[0])],B=[A[0]-R[0],A[1]-R[1],A[2]-R[2]],z=C[0]*B[0]+C[1]*B[1]+C[2]*B[2]<0,[W,V,Y,et]=z?[_[U],_[D],_[k],_[P]]:[_[P],_[k],_[D],_[U]];i.tri(W,V,Y,E,E,E),i.tri(W,Y,et,E,E,E)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{md as FloorMap,Id as FloorplanViewer,gd as WalkCamera,yF as createViewer,QL as funLib,ZA as furnitureFront,qA as furniturePreview,pE as isLowEnd,KA as itemPicture,zx as pushFanBlades,Pd as pushLampModel};
