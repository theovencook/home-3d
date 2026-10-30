var zd=["frame2","frame4","cabinet","wall_frame","wall_cabinet"],Gx=["wall_frame","wall_cabinet"],Wd=["cabinet","wall_cabinet"],Vd=["none","glass","mesh","solid"],Nu=[19,10],jr=.04445,Ou={19:.4826,10:.254},rs=60,Hx=[1,100],Wx=[.05,1.5],Xx=[0,2],Du=.001,$x=new Set(["u","form","width","door","start_u","desc","mount_depth","bottom"]),Gd=(i,[t,e])=>typeof i=="number"&&Number.isInteger(i)&&i>=t&&i<=e,Hd=(i,[t,e])=>typeof i=="number"&&Number.isFinite(i)&&i>=t&&i<=e,Yx=i=>Gx.includes(i);function qx(i){let t=i.rack_frame;if(t===void 0)return[];if(!t||typeof t!="object"||Array.isArray(t))return[{field:"rack_frame",why:"a rack frame is an object"}];let e=t,n=[],r=(d,p)=>{n.push({field:d,why:p})};for(let d of Object.keys(e))$x.has(d)||r(d,"not a rack frame field");if(Gd(e.u,[1,rs])||r("u",`a whole number of U, 1 to ${rs}`),zd.includes(e.form)||r("form",`one of ${zd.join(", ")}`),e.width!==void 0&&!Nu.includes(e.width)&&r("width","19 or 10 (inches)"),e.door!==void 0&&!Vd.includes(e.door)&&r("door",`one of ${Vd.join(", ")}`),e.start_u!==void 0&&!Gd(e.start_u,Hx)&&r("start_u","a whole number, 1 to 100"),e.desc!==void 0&&typeof e.desc!="boolean"&&r("desc","true or false"),e.mount_depth!==void 0&&!Hd(e.mount_depth,Wx)&&r("mount_depth","0.05 to 1.5 metres"),e.bottom!==void 0&&!Hd(e.bottom,Xx)&&r("bottom","0 to 2 metres"),n.length)return n;let[o,s,a]=i.size,l=e.form,c=e.width??19;Ou[c]>o+Du&&r("width","the rack's panels are wider than the item"),(e.mount_depth??0)>s+Du&&r("mount_depth","deeper than the item");let h=e.u*jr;(e.bottom??Math.max(0,(a-h)/2))+h>a+Du&&r("u",`${e.u}U do not fit in the item's height`);let f=i.mount??"floor";return(Yx(l)!==(f==="wall")||f==="ceiling")&&r("mount",'a wall rack has "mount": "wall", any other stands on the floor or a desk'),(e.door??"none")!=="none"&&!Wd.includes(l)&&r("door","only a cabinet has a door"),n}function pr(i){let t=i?.rack_frame;return!t||qx(i).length?null:{u:t.u,form:t.form,width:t.width??19,door:t.door??"none",startU:t.start_u??1,desc:t.desc??!1,mountDepth:t.mount_depth??null,bottom:t.bottom??null}}var Xd={19:.45085,10:.22225},ku={frame2:0,frame4:0,cabinet:.08,wall_frame:.02,wall_cabinet:.06},Kx={frame2:0,frame4:.02,cabinet:.05,wall_frame:.01,wall_cabinet:.04},Zx=.075;function mr(i,t,e,n){let r=i.u*jr,o=Math.min(Math.max(0,i.bottom??(n-r)/2),Math.max(0,n-r)),s=Math.min(jr,(n-o)/i.u),a=Array.from({length:i.u},(f,d)=>({index:d,label:i.desc?i.startU+i.u-1-d:i.startU+d,y0:o+d*s,y1:o+(d+1)*s})),l=i.form==="frame2",c=l?Zx/2:e/2-ku[i.form],h=l?e:Math.max(.01,e-ku[i.form]-Kx[i.form]),u=Math.min(i.mountDepth??h,l?e:e-ku[i.form]);return{unit:s,units:a,bottom:o,top:o+i.u*s,panel:Math.min(t,Ou[i.width]),opening:Math.min(t,Xd[i.width]),front:c,rear:l?null:c-u,mountDepth:u,lane:Math.max(0,(t-Math.min(t,Ou[i.width]))/2)}}function $d(i){let t=i.opening/2,e=Math.max(.01,(i.panel-i.opening)/2),n=[];for(let r=0;r<=i.units.length;r++){let o=i.bottom+r*i.unit,s=r%5===0,a=Math.max(i.bottom,o-7e-4),l=Math.min(i.top,o+7e-4),c=t+e*.15,h=t+e*(s?.95:.6),u=i.front,f=i.front+.0015;n.push({x0:-h,x1:-c,y0:a,y1:l,z0:u,z1:f,major:s},{x0:c,x1:h,y0:a,y1:l,z0:u,z1:f,major:s})}return n}var Ca={online:"#2ecc71",warning:"#f5a623",offline:"#ff3b30"};function Yd(i){let t=[];for(let e of[i.entity,...i.links??[]])e&&!t.includes(e)&&t.push(e);return t}var qd=["full","half","third"],Kd=["half","full"];var Jx=new Set(["u","width","depth","inch","shelf"]);function jx(i){let t=i.rack;if(t===void 0)return[];if(!t||typeof t!="object"||Array.isArray(t))return[{field:"rack",why:"rack gear is an object"}];let e=t,n=[];for(let r of Object.keys(e))Jx.has(r)||n.push({field:r,why:"not a rack gear field"});return(typeof e.u!="number"||!Number.isInteger(e.u)||e.u<0||e.u>rs)&&n.push({field:"u",why:`a whole number of U, 0 to ${rs}`}),e.width!==void 0&&!qd.includes(e.width)&&n.push({field:"width",why:`one of ${qd.join(", ")}`}),e.depth!==void 0&&!Kd.includes(e.depth)&&n.push({field:"depth",why:`one of ${Kd.join(", ")}`}),e.inch!==void 0&&!Nu.includes(e.inch)&&n.push({field:"inch",why:"19 or 10 (inches)"}),e.shelf!==void 0&&typeof e.shelf!="boolean"?n.push({field:"shelf",why:"true or false"}):e.shelf&&e.u===0&&n.push({field:"shelf",why:"a shelf takes at least 1U"}),n}function Ia(i){let t=i?.rack;return!t||jx(i).length?null:{u:t.u,width:t.width??"full",depth:t.depth??"half",inch:t.inch??19,shelf:t.shelf??!1}}var Qx={full:1,half:2,third:3};var Zd=.004;var Uu=.003;function gr(i,t,e){let n=[],r=new Map;for(let o of t){if(o.on)continue;let s=e(o.type),a=Ia(s);if(!s||!a)continue;let l=o.face==="rear"&&a.depth!=="full";if(l&&i.rear===null)continue;let c=i.units[o.u-1];if(!c)continue;let h=o.col??0;if(a.u<1){if(h>1)continue;let x=Math.min(s.size[0],i.lane),_=Math.min(s.size[2],i.top-c.y0),y=Math.min(s.size[1],i.mountDepth),M=o.face==="rear"?(i.rear??i.front-i.mountDepth)+y/2:i.front-y/2;n.push({slot:o,item:s,x:(h===0?-1:1)*(i.panel/2+i.lane/2),z:M,y:c.y0,w:x,d:y,h:_,back:o.face==="rear"});continue}if(!i.units[o.u+a.u-2])continue;let u=Qx[a.width];if(h>=u)continue;let f=a.u*i.unit,d=Math.min(s.size[2],f),p=Math.min(s.size[1],i.mountDepth+Uu),b=l?i.rear-Uu+p/2:i.front+Uu-p/2,g=-i.panel/2+(h+.5)*i.panel/u,m={slot:o,item:s,x:g,z:b,y:a.shelf?c.y0:c.y0+(f-d)/2,w:Math.min(s.size[0],i.panel/u),d:p,h:d,back:l};if(n.push(m),a.shelf){let x=i.opening/u/2;r.set(o.id,{piece:m,x0:g-x,x1:g+x,top:c.y0+f})}}for(let o of t){let s=o.on?r.get(o.on):void 0,a=s&&e(o.type);if(!s||!a||a.rack_frame)continue;let l=s.piece,c=Math.min(a.size[0],s.x1-s.x0),h=Math.min(a.size[1],l.d),u=Math.min(a.size[2],Math.max(0,s.top-l.y-Zd)),f=l.back?l.z-l.d/2+h/2:l.z+l.d/2-h/2;n.push({slot:o,item:a,x:s.x0+c/2,z:f,y:l.y+Zd,w:c,d:h,h:u,back:l.back}),s.x0+=c}return n}function Jd(i){let t=Math.min(.01,i.h/3,i.w/6),e=Math.min(.025,i.w/5)+t/2,n=i.y+i.h-Math.min(.012,i.h/4)-t/2,r=.0015+t/2;return i.back?{x:i.x+i.w/2-e,y:n,z:i.z-i.d/2-r,size:t}:{x:i.x-i.w/2+e,y:n,z:i.z+i.d/2+r,size:t}}function jd(i,t){let[e,n,r]=t,o=.006,s=null;for(let a of i)Math.abs(e-a.x)>a.w/2+o||Math.abs(r-a.z)>a.d/2+o||n<a.y-o||n>a.y+a.h+o||(!s||a.w*a.h*a.d<s.w*s.h*s.d)&&(s=a);return s?.slot.id??null}function np(i,t){let e=pr(t(i.type));return e?(n,r,o)=>uy({frame:e,size:[i.w,i.d,i.h],slots:i.rack?.slots??[],itemOf:t,nameOf:n,title:r,statusOf:o}):null}var ty=24,ey=220,Bu=8,La=30,os=14,ny=9,Qd=7,zu=13,ip=7.6,iy="system-ui, -apple-system, Segoe UI, Roboto, sans-serif",Gu={body:"#3a4457",fabric:"#4a5468",cushion:"#56617a",wood:"#7a5a3c",white:"#e6e9ee",metal:"#9aa3b2",dark:"#2a303c",glass:"#5b7fa0",plant:"#3f7a4f",pot:"#6b5a4a",accent:"#2bb3e0"},Vu="#0d1017",ry="#161a22",oy="#07090d",tp="#7d8696",Da="#3a4150",sy="#f2f5fa",ep="#a7b2c5",ss=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Xe=i=>Math.round(i*10)/10+0,ay=i=>i&&/^#[0-9a-f]{3,8}$/i.test(i)?i:Gu[i??"body"]??Gu.body,ly=(i,t)=>{let e=Math.max(3,Math.floor(t/ip));return i.length<=e?i:`${i.slice(0,e-1).trimEnd()}\u2026`},cy=(i,t)=>!i.slot.on&&Ia(i.item)?.depth==="full"||i.back===(t==="rear");function uy(i){let{frame:t,slots:e,itemOf:n,nameOf:r}=i,o=i.face??"front",s=Math.max(.05,i.size[0]),a=Math.max(.005,i.size[2]),l=mr(t,s,Math.max(.05,i.size[1]),a),c=Math.max(ty/jr,ey/l.panel),h=Math.round(s*c+2*La),u=Math.round(a*c+2*Bu),f=w=>Xe(La+(w+s/2)*c),d=w=>Xe(Bu+(a-w)*c),p=(w,A,v,T,E,S,P="")=>`<rect class="${w}" x="${f(A)}" y="${d(E)}" width="${Xe((T-A)*c)}" height="${Xe((E-v)*c)}" fill="${S}"${P}/>`,b=[`<rect x="0" y="0" width="${h}" height="${u}" rx="8" fill="${Vu}"/>`];b.push(p("fp3d-el-rack",-s/2,0,s/2,a,ry,` stroke="${Da}"`));let g=l.opening/2,m=l.panel/2;b.push(p("fp3d-el-opening",-g,l.bottom,g,l.top,oy)),b.push(p("fp3d-el-rail",-m,l.bottom,-g,l.top,tp),p("fp3d-el-rail",g,l.bottom,m,l.top,tp));for(let w of l.units){w.index>0&&b.push(`<line x1="${f(-g)}" y1="${d(w.y0)}" x2="${f(g)}" y2="${d(w.y0)}" stroke="${Da}"/>`);let A=Xe(d((w.y0+w.y1)/2)+zu*.35);b.push(`<text class="fp3d-el-u fp3d-el-u-l" x="${La-6}" y="${A}" font-size="${zu}" text-anchor="end" fill="${ep}">${w.label}</text>`),b.push(`<text class="fp3d-el-u fp3d-el-u-r" x="${h-La+6}" y="${A}" font-size="${zu}" fill="${ep}">${w.label}</text>`)}let x=gr(l,e,n).filter(w=>cy(w,o)),_=0;for(let w of x){_+=Ia(w.item)?.u??0;let A=w.x-w.w/2,v=w.w*c,T=w.h*c,S=[...w.item.parts].sort((B,V)=>o==="front"?Fa(B)-Fa(V):Fa(V)-Fa(B)).map(B=>hy(B,w,f,d,c,o)).join(""),P=r(w.slot,w.item),N=i.statusOf?.(w.slot)??null,D=Math.min(ny,T-4,v/4),C=!!N&&D>=3,R=ly(P,v-20-(C?Qd+D+4:0)),k=Xe(d(w.y+w.h/2)+os*.36),L=T>=os+4?`<rect class="fp3d-el-tag" x="${Xe(f(A)+6)}" y="${Xe(k-os)}" width="${Xe(Math.min(v-12,R.length*ip+8))}" height="${os+5}" rx="3" fill="${Vu}" fill-opacity="0.75"/><text x="${Xe(f(A)+10)}" y="${k}" font-size="${os}" fill="${sy}">${ss(R)}</text>`:"",O=N&&C?`<rect class="fp3d-el-led fp3d-el-led-${N}" data-slot="${ss(w.slot.id)}" x="${Xe(f(A)+v-Qd-D)}" y="${Xe(d(w.y+w.h/2)-D/2)}" width="${Xe(D)}" height="${Xe(D)}" rx="2" fill="${Ca[N]}" stroke="${Vu}"/>`:"";b.push(`<g class="fp3d-el-gear" data-slot="${ss(w.slot.id)}"><rect class="fp3d-el-face" x="${f(A)}" y="${d(w.y+w.h)}" width="${Xe(v)}" height="${Xe(T)}" fill="${Gu.dark}" stroke="${Da}"/>${S}${L}${O}<title>${ss(P)}</title></g>`)}return{svg:`<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${ss(i.title??"Rack")}" class="fp3d-elevation" viewBox="0 0 ${h} ${u}" width="${h}" height="${u}" font-family="${iy}">${b.join("")}</svg>`,width:h,height:u,scale:c,pad:Bu,pieces:x.length,used:_,u:t.u}}var Fa=i=>i.z+i.d/2;function hy(i,t,e,n,r,o){let s=t.x+(o==="front"?i.x:-i.x)*t.w,a=t.y+(i.y+i.h/2)*t.h,l=i.w*t.w/2,c=i.h*t.h/2,h=ay(i.color),u=i.edges==="faint"?` stroke="${Da}"`:"";return i.shape==="sphere"||i.shape==="cyl"&&i.axis==="z"?`<ellipse class="fp3d-el-part" cx="${e(s)}" cy="${n(a)}" rx="${Xe(l*r)}" ry="${Xe(c*r)}" fill="${h}"${u}/>`:`<rect class="fp3d-el-part" x="${e(s-l)}" y="${n(a+c)}" width="${Xe(2*l*r)}" height="${Xe(2*c*r)}" fill="${h}"${u}/>`}var Bp=0,Ah=1,zp=2;var Eh=0,Rr=1,Vp=2,Lo=3,hi=0,an=1,ie=2,Dn=0,Mn=1,Ee=2,Rh=3,zs=4,Gp=5;var Pr=100,Hp=101,Wp=102,Xp=103,$p=104,Yp=200,qp=201,Kp=202,Zp=203,Ph=204,Ch=205,Jp=206,jp=207,Qp=208,tm=209,em=210,nm=211,im=212,rm=213,om=214,fl=0,dl=1,pl=2,yo=3,ml=4,gl=5,bl=6,xl=7,Vs=0,sm=1,am=2,$n=0,Ih=1,Lh=2,Fh=3,Dh=4,kh=5,Oh=6,Nh=7;var Uh=300,Ji=301,Cr=302,Yl=303,ql=304,Gs=306,Mr=1e3,An=1001,yl=1002,on=1003,lm=1004;var Hs=1005;var Ye=1006,Kl=1007;var ji=1008;var wn=1009,Bh=1010,zh=1011,Fo=1012,Zl=1013,Yn=1014,qn=1015,Kn=1016,Jl=1017,jl=1018,Do=1020,Vh=35902,Gh=35899,Hh=1021,Wh=1022,kn=1023,oi=1026,Qi=1027,Xh=1028,Ql=1029,tr=1030,tc=1031;var ec=1033,Ws=33776,Xs=33777,$s=33778,Ys=33779,nc=35840,ic=35841,rc=35842,oc=35843,sc=36196,ac=37492,lc=37496,cc=37488,uc=37489,qs=37490,hc=37491,fc=37808,dc=37809,pc=37810,mc=37811,gc=37812,bc=37813,xc=37814,yc=37815,vc=37816,_c=37817,Mc=37818,wc=37819,Sc=37820,Tc=37821,Ac=36492,Ec=36494,Rc=36495,Pc=36283,Cc=36284,Ks=36285,Ic=36286;var gs=2300,vl=2301,cl=2302,ph=2303,mh=2400,gh=2401,bh=2402;var cm=3200;var Zs=0,um=1,Pi="",Ce="srgb",bs="srgb-linear",xs="linear",_e="srgb";var ul=7680;var hm=519,fm=512,dm=513,pm=514,Lc=515,mm=516,gm=517,Fc=518,bm=519,$h=35044,Yh=35048;var qh="300 es",Wn=2e3,vo=2001;function fy(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function dy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _o(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xm(){let i=_o("canvas");return i.style.display="block",i}var rp={},Mo=null;function ys(...i){let t="THREE."+i.shift();Mo?Mo("log",t,...i):console.log(t,...i)}function ym(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Yt(...i){i=ym(i);let t="THREE."+i.shift();if(Mo)Mo("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=ym(i);let t="THREE."+i.shift();if(Mo)Mo("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function _r(...i){let t=i.join(" ");t in rp||(rp[t]=!0,Yt(...i))}function vm(i,t,e){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}var _m={[fl]:dl,[pl]:bl,[ml]:xl,[yo]:gl,[dl]:fl,[bl]:pl,[xl]:ml,[gl]:yo},si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hu=Math.PI/180,_l=180/Math.PI;function Xi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function py(i,t){return(i%t+t)%t}function Wu(i,t,e){return(1-e)*i+e*t}function ri(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qh=class Qh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,s=this.y-t.y;return this.x=o*n-s*r+t.x,this.y=o*r+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qh.prototype.isVector2=!0;var Zt=Qh,ai=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,s,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=o[s+0],d=o[s+1],p=o[s+2],b=o[s+3];if(u!==b||l!==f||c!==d||h!==p){let g=l*f+c*d+h*p+u*b;g<0&&(f=-f,d=-d,p=-p,b=-b,g=-g);let m=1-a;if(g<.9995){let x=Math.acos(g),_=Math.sin(x);m=Math.sin(m*x)/_,a=Math.sin(a*x)/_,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+b*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+b*a;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=o[s],f=o[s+1],d=o[s+2],p=o[s+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,o=t._z,s=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(o/2),f=l(n/2),d=l(r/2),p=l(o/2);switch(s){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],o=e[8],s=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(s-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(o+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(o-c)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(s-r)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+s*a+r*c-o*l,this._y=r*h+s*l+o*a-n*c,this._z=o*h+s*c+n*l-r*a,this._w=s*h-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},tf=class tf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(op.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(op.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=t.elements,s=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,o=t.x,s=t.y,a=t.z,l=t.w,c=2*(s*r-a*n),h=2*(a*e-o*r),u=2*(o*n-s*e);return this.x=e+l*c+s*u-a*h,this.y=n+l*h+a*c-o*u,this.z=r+l*u+o*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,o=t.z,s=e.x,a=e.y,l=e.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xu.copy(this).projectOnVector(t),this.sub(Xu)}reflect(t){return this.sub(Xu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tf.prototype.isVector3=!0;var $=tf,Xu=new $,op=new ai,ef=class ef{constructor(t,e,n,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c)}set(t,e,n,r,o,s,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],b=r[0],g=r[3],m=r[6],x=r[1],_=r[4],y=r[7],M=r[2],w=r[5],A=r[8];return o[0]=s*b+a*x+l*M,o[3]=s*g+a*_+l*w,o[6]=s*m+a*y+l*A,o[1]=c*b+h*x+u*M,o[4]=c*g+h*_+u*w,o[7]=c*m+h*y+u*A,o[2]=f*b+d*x+p*M,o[5]=f*g+d*_+p*w,o[8]=f*m+d*y+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*s*h-e*a*c-n*o*h+n*a*l+r*o*c-r*s*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*s-a*c,f=a*l-h*o,d=c*o-s*l,p=e*u+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return t[0]=u*b,t[1]=(r*c-h*n)*b,t[2]=(a*n-r*s)*b,t[3]=f*b,t[4]=(h*e-r*l)*b,t[5]=(r*o-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(s*e-n*o)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+t,-r*c,r*l,-r*(-c*s+l*a)+a+e,0,0,1),this}scale(t,e){return _r("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($u.makeScale(t,e)),this}rotate(t){return _r("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($u.makeRotation(-t)),this}translate(t,e){return _r("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($u.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ef.prototype.isMatrix3=!0;var ne=ef,$u=new ne,sp=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ap=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function my(){let i={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===_e&&(r.r=Ei(r.r),r.g=Ei(r.g),r.b=Ei(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===_e&&(r.r=xo(r.r),r.g=xo(r.g),r.b=xo(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pi?xs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return _r("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return _r("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bs]:{primaries:t,whitePoint:n,transfer:xs,toXYZ:sp,fromXYZ:ap,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:sp,fromXYZ:ap,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var ue=my();function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qr,Ml=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Qr===void 0&&(Qr=_o("canvas")),Qr.width=t.width,Qr.height=t.height;let r=Qr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Qr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_o("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ei(o[s]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ei(e[n]/255)*255):e[n]=Ei(e[n]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gy=0,wo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Yu(r[s].image)):o.push(Yu(r[s]))}else o=Yu(r);n.url=o}return e||(t.images[this.uuid]=n),n}};function Yu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}var by=0,qu=new $,dn=class i extends si{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=An,r=An,o=Ye,s=ji,a=kn,l=wn,c=i.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Xi(),this.name="",this.source=new wo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qu).x}get height(){return this.source.getSize(qu).y}get depth(){return this.source.getSize(qu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mr:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mr:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Uh;dn.DEFAULT_ANISOTROPY=1;var nf=class nf{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*e+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*e+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*e+s[7]*n+s[11]*r+s[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],b=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,y=(d+1)/2,M=(m+1)/2,w=(h+f)/4,A=(u+b)/4,v=(p+g)/4;return _>y&&_>M?_<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(_),r=w/n,o=A/n):y>M?y<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),n=w/r,o=v/r):M<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),n=A/o,r=v/o),this.set(n,r,o,e),this}let x=Math.sqrt((g-p)*(g-p)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-b)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nf.prototype.isVector4=!0;var ke=nf,wl=class extends si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},o=new dn(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new wo(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qe=class extends wl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},vs=class extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sl=class extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var $l=class $l{constructor(t,e,n,r,o,s,a,l,c,h,u,f,d,p,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c,h,u,f,d,p,b,g)}set(t,e,n,r,o,s,a,l,c,h,u,f,d,p,b,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=o,m[5]=s,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $l().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/to.setFromMatrixColumn(t,0).length(),o=1/to.setFromMatrixColumn(t,1).length(),s=1/to.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,o=t.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){let f=s*h,d=s*u,p=a*h,b=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-b*c,e[9]=-a*l,e[2]=b-f*c,e[6]=p+d*c,e[10]=s*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,b=c*u;e[0]=f+b*a,e[4]=p*a-d,e[8]=s*c,e[1]=s*u,e[5]=s*h,e[9]=-a,e[2]=d*a-p,e[6]=b+f*a,e[10]=s*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,b=c*u;e[0]=f-b*a,e[4]=-s*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=s*h,e[9]=b-f*a,e[2]=-s*c,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){let f=s*h,d=s*u,p=a*h,b=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+b,e[1]=l*u,e[5]=b*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){let f=s*l,d=s*c,p=a*l,b=a*c;e[0]=l*h,e[4]=b-f*u,e[8]=p*u+d,e[1]=u,e[5]=s*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-b*u}else if(t.order==="XZY"){let f=s*l,d=s*c,p=a*l,b=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+b,e[5]=s*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=b*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xy,t,yy)}lookAt(t,e,n){let r=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),zi.crossVectors(n,Sn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),zi.crossVectors(n,Sn)),zi.normalize(),ka.crossVectors(Sn,zi),r[0]=zi.x,r[4]=ka.x,r[8]=Sn.x,r[1]=zi.y,r[5]=ka.y,r[9]=Sn.y,r[2]=zi.z,r[6]=ka.z,r[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],b=n[6],g=n[10],m=n[14],x=n[3],_=n[7],y=n[11],M=n[15],w=r[0],A=r[4],v=r[8],T=r[12],E=r[1],S=r[5],P=r[9],N=r[13],D=r[2],C=r[6],R=r[10],k=r[14],L=r[3],O=r[7],B=r[11],V=r[15];return o[0]=s*w+a*E+l*D+c*L,o[4]=s*A+a*S+l*C+c*O,o[8]=s*v+a*P+l*R+c*B,o[12]=s*T+a*N+l*k+c*V,o[1]=h*w+u*E+f*D+d*L,o[5]=h*A+u*S+f*C+d*O,o[9]=h*v+u*P+f*R+d*B,o[13]=h*T+u*N+f*k+d*V,o[2]=p*w+b*E+g*D+m*L,o[6]=p*A+b*S+g*C+m*O,o[10]=p*v+b*P+g*R+m*B,o[14]=p*T+b*N+g*k+m*V,o[3]=x*w+_*E+y*D+M*L,o[7]=x*A+_*S+y*C+M*O,o[11]=x*v+_*P+y*R+M*B,o[15]=x*T+_*N+y*k+M*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],s=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],b=t[7],g=t[11],m=t[15],x=l*d-c*f,_=a*d-c*u,y=a*f-l*u,M=s*d-c*h,w=s*f-l*h,A=s*u-a*h;return e*(b*x-g*_+m*y)-n*(p*x-g*M+m*w)+r*(p*_-b*M+m*A)-o*(p*y-b*w+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[1],s=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(s*h-a*c)-n*(o*h-a*l)+r*(o*c-s*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],b=t[13],g=t[14],m=t[15],x=e*a-n*s,_=e*l-r*s,y=e*c-o*s,M=n*l-r*a,w=n*c-o*a,A=r*c-o*l,v=h*b-u*p,T=h*g-f*p,E=h*m-d*p,S=u*g-f*b,P=u*m-d*b,N=f*m-d*g,D=x*N-_*P+y*S+M*E-w*T+A*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/D;return t[0]=(a*N-l*P+c*S)*C,t[1]=(r*P-n*N-o*S)*C,t[2]=(b*A-g*w+m*M)*C,t[3]=(f*w-u*A-d*M)*C,t[4]=(l*E-s*N-c*T)*C,t[5]=(e*N-r*E+o*T)*C,t[6]=(g*y-p*A-m*_)*C,t[7]=(h*A-f*y+d*_)*C,t[8]=(s*P-a*E+c*v)*C,t[9]=(n*E-e*P-o*v)*C,t[10]=(p*w-b*y+m*x)*C,t[11]=(u*y-h*w-d*x)*C,t[12]=(a*T-s*S-l*v)*C,t[13]=(e*S-n*T+r*v)*C,t[14]=(b*_-p*M-g*x)*C,t[15]=(h*M-u*_+f*x)*C,this}scale(t){let e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),o=1-n,s=t.x,a=t.y,l=t.z,c=o*s,h=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*s,0,c*l-r*a,h*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,s){return this.set(1,n,o,0,t,1,s,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,o=e._x,s=e._y,a=e._z,l=e._w,c=o+o,h=s+s,u=a+a,f=o*c,d=o*h,p=o*u,b=s*h,g=s*u,m=a*u,x=l*c,_=l*h,y=l*u,M=n.x,w=n.y,A=n.z;return r[0]=(1-(b+m))*M,r[1]=(d+y)*M,r[2]=(p-_)*M,r[3]=0,r[4]=(d-y)*w,r[5]=(1-(f+m))*w,r[6]=(g+x)*w,r[7]=0,r[8]=(p+_)*A,r[9]=(g-x)*A,r[10]=(1-(f+b))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let s=to.set(r[0],r[1],r[2]).length(),a=to.set(r[4],r[5],r[6]).length(),l=to.set(r[8],r[9],r[10]).length();o<0&&(s=-s),zn.copy(this);let c=1/s,h=1/a,u=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,e.setFromRotationMatrix(zn),n.x=s,n.y=a,n.z=l,this}makePerspective(t,e,n,r,o,s,a=Wn,l=!1){let c=this.elements,h=2*o/(e-t),u=2*o/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),p,b;if(l)p=o/(s-o),b=s*o/(s-o);else if(a===Wn)p=-(s+o)/(s-o),b=-2*s*o/(s-o);else if(a===vo)p=-s/(s-o),b=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,o,s,a=Wn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),p,b;if(l)p=1/(s-o),b=s/(s-o);else if(a===Wn)p=-2/(s-o),b=-(s+o)/(s-o);else if(a===vo)p=-1/(s-o),b=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};$l.prototype.isMatrix4=!0;var Me=$l,to=new $,zn=new Me,xy=new $(0,0,0),yy=new $(1,1,1),zi=new $,ka=new $,Sn=new $,lp=new Me,cp=new ai,li=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-fe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cp.setFromEuler(this),this.setFromQuaternion(cp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var So=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vy=0,up=new $,eo=new ai,_i=new Me,Oa=new $,as=new $,_y=new $,My=new ai,hp=new $(1,0,0),fp=new $(0,1,0),dp=new $(0,0,1),pp={type:"added"},wy={type:"removed"},no={type:"childadded",child:null},Ku={type:"childremoved",child:null},Ze=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new $,e=new li,n=new ai,r=new $(1,1,1);function o(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Me},normalMatrix:{value:new ne}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return eo.setFromAxisAngle(t,e),this.quaternion.multiply(eo),this}rotateOnWorldAxis(t,e){return eo.setFromAxisAngle(t,e),this.quaternion.premultiply(eo),this}rotateX(t){return this.rotateOnAxis(hp,t)}rotateY(t){return this.rotateOnAxis(fp,t)}rotateZ(t){return this.rotateOnAxis(dp,t)}translateOnAxis(t,e){return up.copy(t).applyQuaternion(this.quaternion),this.position.add(up.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hp,t)}translateY(t){return this.translateOnAxis(fp,t)}translateZ(t){return this.translateOnAxis(dp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Oa.copy(t):Oa.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(as,Oa,this.up):_i.lookAt(Oa,as,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),eo.setFromRotationMatrix(_i),this.quaternion.premultiply(eo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pp),no.child=t,this.dispatchEvent(no),no.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wy),Ku.child=t,this.dispatchEvent(Ku),Ku.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pp),no.child=t,this.dispatchEvent(no),no.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,_y),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,My,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*r,o[13]+=n-o[1]*e-o[5]*n-o[9]*r,o[14]+=r-o[2]*e-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));r.material=a}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(t.animations,l))}}if(e){let a=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),u=s(t.shapes),f=s(t.skeletons),d=s(t.animations),p=s(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function s(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ze.DEFAULT_UP=new $(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Te=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sy={type:"move"},To=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(let b of t.hand.values()){let g=e.getJointPose(b,n),m=this._getHandJoint(c,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Na={h:0,s:0,l:0};function Zu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var K=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ue.workingColorSpace){if(t=py(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,s=2*n-o;this.r=Zu(s,o,t+1/3),this.g=Zu(s,o,t),this.b=Zu(s,o,t-1/3)}return ue.colorSpaceToWorking(this,r),this}setStyle(t,e=Ce){function n(o){o!==void 0&&parseFloat(o)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(o,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=Mm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=xo(t.r),this.g=xo(t.g),this.b=xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ue.workingToColorSpace(fn.copy(this),t),Math.round(fe(fn.r*255,0,255))*65536+Math.round(fe(fn.g*255,0,255))*256+Math.round(fe(fn.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(fn.copy(this),e);let n=fn.r,r=fn.g,o=fn.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,h=(a+s)/2;if(a===s)l=0,c=0;else{let u=s-a;switch(c=h<=.5?u/(s+a):u/(2-s-a),s){case n:l=(r-o)/u+(r<o?6:0);break;case r:l=(o-n)/u+2;break;case o:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Ce){ue.workingToColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,r=fn.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Na);let n=Wu(Vi.h,Na.h,e),r=Wu(Vi.s,Na.s,e),o=Wu(Vi.l,Na.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new K;K.NAMES=Mm;var _s=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new K(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ci=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vn=new $,Mi=new $,Ju=new $,wi=new $,io=new $,ro=new $,mp=new $,ju=new $,Qu=new $,th=new $,eh=new ke,nh=new ke,ih=new ke,Ai=class i{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Vn.subVectors(t,e),r.cross(Vn);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){Vn.subVectors(r,e),Mi.subVectors(n,e),Ju.subVectors(t,e);let s=Vn.dot(Vn),a=Vn.dot(Mi),l=Vn.dot(Ju),c=Mi.dot(Mi),h=Mi.dot(Ju),u=s*c-a*a;if(u===0)return o.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(s*h-a*l)*f;return o.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,n,r,o,s,a,l){return this.getBarycoord(t,e,n,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,wi.x),l.addScaledVector(s,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(t,e,n,r,o,s){return eh.setScalar(0),nh.setScalar(0),ih.setScalar(0),eh.fromBufferAttribute(t,e),nh.fromBufferAttribute(t,n),ih.fromBufferAttribute(t,r),s.setScalar(0),s.addScaledVector(eh,o.x),s.addScaledVector(nh,o.y),s.addScaledVector(ih,o.z),s}static isFrontFacing(t,e,n,r){return Vn.subVectors(n,e),Mi.subVectors(t,e),Vn.cross(Mi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Vn.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,o){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,o=this.c,s,a;io.subVectors(r,n),ro.subVectors(o,n),ju.subVectors(t,n);let l=io.dot(ju),c=ro.dot(ju);if(l<=0&&c<=0)return e.copy(n);Qu.subVectors(t,r);let h=io.dot(Qu),u=ro.dot(Qu);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),e.copy(n).addScaledVector(io,s);th.subVectors(t,o);let d=io.dot(th),p=ro.dot(th);if(p>=0&&d<=p)return e.copy(o);let b=d*c-l*p;if(b<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(ro,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return mp.subVectors(o,r),a=(u-h)/(u-h+(d-p)),e.copy(r).addScaledVector(mp,a);let m=1/(g+b+f);return s=b*m,a=f*m,e.copy(n).addScaledVector(io,s).addScaledVector(ro,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_n=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,Gn):Gn.fromBufferAttribute(o,s),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ua.copy(n.boundingBox)),Ua.applyMatrix4(t.matrixWorld),this.union(Ua)}let r=t.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),Ba.subVectors(this.max,ls),oo.subVectors(t.a,ls),so.subVectors(t.b,ls),ao.subVectors(t.c,ls),Gi.subVectors(so,oo),Hi.subVectors(ao,so),br.subVectors(oo,ao);let e=[0,-Gi.z,Gi.y,0,-Hi.z,Hi.y,0,-br.z,br.y,Gi.z,0,-Gi.x,Hi.z,0,-Hi.x,br.z,0,-br.x,-Gi.y,Gi.x,0,-Hi.y,Hi.x,0,-br.y,br.x,0];return!rh(e,oo,so,ao,Ba)||(e=[1,0,0,0,1,0,0,0,1],!rh(e,oo,so,ao,Ba))?!1:(za.crossVectors(Gi,Hi),e=[za.x,za.y,za.z],rh(e,oo,so,ao,Ba))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Si=[new $,new $,new $,new $,new $,new $,new $,new $],Gn=new $,Ua=new _n,oo=new $,so=new $,ao=new $,Gi=new $,Hi=new $,br=new $,ls=new $,Ba=new $,za=new $,xr=new $;function rh(i,t,e,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){xr.fromArray(i,o);let a=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),l=t.dot(xr),c=e.dot(xr),h=n.dot(xr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $e=new $,Va=new Zt,Ty=0,vn=class extends si{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ty++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$h,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Va.fromBufferAttribute(this,e),Va.applyMatrix3(t),this.setXY(e,Va.x,Va.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array),o=Se(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ms=class extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var wr=class extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Lt=class extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ay=new _n,cs=new $,oh=new $,$i=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ay.setFromPoints(t).getCenter(n);let r=0;for(let o=0,s=t.length;o<s;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);let e=cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(cs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(oh)),this.expandByPoint(cs.copy(t.center).sub(oh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ey=0,Ln=new Me,sh=new Ze,lo=new $,Tn=new _n,us=new _n,nn=new $,Vt=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fy(t)?wr:Ms)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new ne().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return sh.lookAt(t),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,o=t.length;r<o;r++){let s=t[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Lt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let o=e[n];Tn.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let o=0,s=e.length;o<s;o++){let a=e[o];us.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Tn.min,us.min),Tn.expandByPoint(nn),nn.addVectors(Tn.max,us.max),Tn.expandByPoint(nn)):(Tn.expandByPoint(us.min),Tn.expandByPoint(us.max))}Tn.getCenter(n);let r=0;for(let o=0,s=t.count;o<s;o++)nn.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(nn));if(e)for(let o=0,s=e.length;o<s;o++){let a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(lo.fromBufferAttribute(t,c),nn.add(lo)),r=Math.max(r,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,o=e.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new $,l[v]=new $;let c=new $,h=new $,u=new $,f=new Zt,d=new Zt,p=new Zt,b=new $,g=new $;function m(v,T,E){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,E),f.fromBufferAttribute(o,v),d.fromBufferAttribute(o,T),p.fromBufferAttribute(o,E),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let S=1/(d.x*p.y-p.x*d.y);isFinite(S)&&(b.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(S),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(S),a[v].add(b),a[T].add(b),a[E].add(b),l[v].add(g),l[T].add(g),l[E].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let v=0,T=x.length;v<T;++v){let E=x[v],S=E.start,P=E.count;for(let N=S,D=S+P;N<D;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let _=new $,y=new $,M=new $,w=new $;function A(v){M.fromBufferAttribute(r,v),w.copy(M);let T=a[v];_.copy(T),_.sub(M.multiplyScalar(M.dot(T))).normalize(),y.crossVectors(w,T);let S=y.dot(l[v])<0?-1:1;s.setXYZW(v,_.x,_.y,_.z,S)}for(let v=0,T=x.length;v<T;++v){let E=x[v],S=E.start,P=E.count;for(let N=S,D=S+P;N<D;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new $,o=new $,s=new $,a=new $,l=new $,c=new $,h=new $,u=new $;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),b=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,b),s.fromBufferAttribute(e,g),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),s.fromBufferAttribute(e,f+2),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let b=0,g=l.length;b<g;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new vn(f,h,u)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let o=t.morphAttributes;for(let c in o){let h=[],u=o[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$h,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},yn=new $,ws=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ri(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ri(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ri(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ri(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array),o=Se(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){ys("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ys("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ah=new $,Ry=new $,Py=new ne,Hn=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=ah.subVectors(n,e).cross(Ry.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(ah),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(r,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Py.getNormalMatrix(t),r=this.coplanarPoint(ah).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Cy=0,Fn=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Mn,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Ch,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ul,this.stencilZFail=ul,this.stencilZPass=ul,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(e){let o=r(t.textures),s=r(t.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new K().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ao=class extends Fn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new K(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},co,hs=new $,uo=new $,ho=new $,fo=new Zt,fs=new Zt,wm=new Me,Ga=new $,ds=new $,Ha=new $,gp=new Zt,lh=new Zt,bp=new Zt,Ss=class extends Ze{constructor(t=new Ao){if(super(),this.isSprite=!0,this.type="Sprite",co===void 0){co=new Vt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Tl(e,5);co.setIndex([0,1,2,0,2,3]),co.setAttribute("position",new ws(n,3,0,!1)),co.setAttribute("uv",new ws(n,2,3,!1))}this.geometry=co,this.material=t,this.center=new Zt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),uo.setFromMatrixScale(this.matrixWorld),wm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ho.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&uo.multiplyScalar(-ho.z);let n=this.material.rotation,r,o;n!==0&&(o=Math.cos(n),r=Math.sin(n));let s=this.center;Wa(Ga.set(-.5,-.5,0),ho,s,uo,r,o),Wa(ds.set(.5,-.5,0),ho,s,uo,r,o),Wa(Ha.set(.5,.5,0),ho,s,uo,r,o),gp.set(0,0),lh.set(1,0),bp.set(1,1);let a=t.ray.intersectTriangle(Ga,ds,Ha,!1,hs);if(a===null&&(Wa(ds.set(-.5,.5,0),ho,s,uo,r,o),lh.set(0,1),a=t.ray.intersectTriangle(Ga,Ha,ds,!1,hs),a===null))return;let l=t.ray.origin.distanceTo(hs);l<t.near||l>t.far||e.push({distance:l,point:hs.clone(),uv:Ai.getInterpolation(hs,Ga,ds,Ha,gp,lh,bp,new Zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Wa(i,t,e,n,r,o){fo.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(fs.x=o*fo.x-r*fo.y,fs.y=r*fo.x+o*fo.y):fs.copy(fo),i.copy(t),i.x+=fs.x,i.y+=fs.y,i.applyMatrix4(wm)}var Ti=new $,ch=new $,Xa=new $,$a=new $,Sr=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ch.copy(t).add(e).multiplyScalar(.5),Xa.copy(e).sub(t).normalize(),$a.copy(this.origin).sub(ch);let o=t.distanceTo(e)*.5,s=-this.direction.dot(Xa),a=$a.dot(this.direction),l=-$a.dot(Xa),c=$a.lengthSq(),h=Math.abs(1-s*s),u,f,d,p;if(h>0)if(u=s*l-a,f=s*a-l,p=o*h,u>=0)if(f>=-p)if(f<=p){let b=1/h;u*=b,f*=b,d=u*(u+s*f+2*a)+f*(s*u+f+2*l)+c}else f=o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-s*o+a)),f=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+c):(u=Math.max(0,-(s*o+a)),f=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c);else f=s>0?-o:o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ch).addScaledVector(Xa,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ti.subVectors(t.center,this.origin);let n=Ti.dot(this.direction),r=Ti.dot(Ti)-n*n,o=t.radius*t.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,s,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(o=(t.min.y-f.y)*h,s=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,s=(t.min.y-f.y)*h),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,n,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-s.x,f=t.y-s.y,d=t.z-s.z,p=e.x-s.x,b=e.y-s.y,g=e.z-s.z,m=n.x-s.x,x=n.y-s.y,_=n.z-s.z,y=Math.abs(l),M=Math.abs(c),w=Math.abs(h),A,v,T,E,S,P,N,D,C,R,k,L;if(y>=M&&y>=w?(T=l,P=u,C=p,L=m,l>=0?(A=c,v=h,E=f,S=d,N=b,D=g,R=x,k=_):(A=h,v=c,E=d,S=f,N=g,D=b,R=_,k=x)):M>=w?(T=c,P=f,C=b,L=x,c>=0?(A=h,v=l,E=d,S=u,N=g,D=p,R=_,k=m):(A=l,v=h,E=u,S=d,N=p,D=g,R=m,k=_)):(T=h,P=d,C=g,L=_,h>=0?(A=l,v=c,E=u,S=f,N=p,D=b,R=m,k=x):(A=c,v=l,E=f,S=u,N=b,D=p,R=x,k=m)),T===0)return null;let O=A/T,B=v/T,V=1/T,W=E-O*P,z=S-B*P,q=N-O*C,j=D-B*C,ot=R-O*L,H=k-B*L,X=ot*j-H*q,tt=W*H-z*ot,et=q*z-j*W;if(r){if(X<0||tt<0||et<0)return null}else if((X<0||tt<0||et<0)&&(X>0||tt>0||et>0))return null;let nt=X+tt+et;if(nt===0)return null;let ut=V*(X*P+tt*C+et*L);return(nt>0?ut<0:ut>0)?null:this.at(ut/nt,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class extends Fn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Vs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},xp=new Me,yr=new Sr,Ya=new $i,yp=new $,qa=new $,Ka=new $,Za=new $,uh=new $,Ja=new $,vp=new $,ja=new $,At=class extends Ze{constructor(t=new Vt,e=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(o&&a){Ja.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],u=o[l];h!==0&&(uh.fromBufferAttribute(u,t),s?Ja.addScaledVector(uh,h):Ja.addScaledVector(uh.sub(e),h))}e.add(Ja)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(o),yr.copy(t.ray).recast(t.near),!(Ya.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Ya,yp)===null||yr.origin.distanceToSquared(yp)>(t.far-t.near)**2))&&(xp.copy(o).invert(),yr.copy(t.ray).applyMatrix4(xp),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yr)))}_computeIntersections(t,e,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,b=f.length;p<b;p++){let g=f[p],m=s[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,M=_;y<M;y+=3){let w=a.getX(y),A=a.getX(y+1),v=a.getX(y+2);r=Qa(this,m,t,n,c,h,u,w,A,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){let x=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);r=Qa(this,s,t,n,c,h,u,x,_,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,b=f.length;p<b;p++){let g=f[p],m=s[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,M=_;y<M;y+=3){let w=y,A=y+1,v=y+2;r=Qa(this,m,t,n,c,h,u,w,A,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){let x=g,_=g+1,y=g+2;r=Qa(this,s,t,n,c,h,u,x,_,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function Iy(i,t,e,n,r,o,s,a){let l;if(t.side===an?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,t.side===hi,a),l===null)return null;ja.copy(a),ja.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ja);return c<e.near||c>e.far?null:{distance:c,point:ja.clone(),object:i}}function Qa(i,t,e,n,r,o,s,a,l,c){i.getVertexPosition(a,qa),i.getVertexPosition(l,Ka),i.getVertexPosition(c,Za);let h=Iy(i,t,e,n,qa,Ka,Za,vp);if(h){let u=new $;Ai.getBarycoord(vp,qa,Ka,Za,u),r&&(h.uv=Ai.getInterpolatedAttribute(r,a,l,c,u,new Zt)),o&&(h.uv1=Ai.getInterpolatedAttribute(o,a,l,c,u,new Zt)),s&&(h.normal=Ai.getInterpolatedAttribute(s,a,l,c,u,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new $,materialIndex:0};Ai.getNormal(qa,Ka,Za,f.normal),h.face=f,h.barycoord=u}return h}var Al=class extends dn{constructor(t=null,e=1,n=1,r,o,s,a,l,c=on,h=on,u,f){super(null,s,a,l,c,h,r,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=new $i,Ly=new Zt(.5,.5),tl=new $,Eo=class{constructor(t=new Hn,e=new Hn,n=new Hn,r=new Hn,o=new Hn,s=new Hn){this.planes=[t,e,n,r,o,s]}set(t,e,n,r,o,s){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){let r=this.planes,o=t.elements,s=o[0],a=o[1],l=o[2],c=o[3],h=o[4],u=o[5],f=o[6],d=o[7],p=o[8],b=o[9],g=o[10],m=o[11],x=o[12],_=o[13],y=o[14],M=o[15];if(r[0].setComponents(c-s,d-h,m-p,M-x).normalize(),r[1].setComponents(c+s,d+h,m+p,M+x).normalize(),r[2].setComponents(c+a,d+u,m+b,M+_).normalize(),r[3].setComponents(c-a,d-u,m-b,M-_).normalize(),n)r[4].setComponents(l,f,g,y).normalize(),r[5].setComponents(c-l,d-f,m-g,M-y).normalize();else if(r[4].setComponents(c-l,d-f,m-g,M-y).normalize(),e===Wn)r[5].setComponents(c+l,d+f,m+g,M+y).normalize();else if(e===vo)r[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(t){vr.center.set(0,0,0);let e=Ly.distanceTo(t.center);return vr.radius=.7071067811865476+e,vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(tl.x=r.normal.x>0?t.max.x:t.min.x,tl.y=r.normal.y>0?t.max.y:t.min.y,tl.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(tl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Je=class extends Fn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new K(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},El=new $,Rl=new $,_p=new Me,ps=new Sr,el=new $i,hh=new $,Mp=new $,Pl=class extends Ze{constructor(t=new Vt,e=new Je){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,o=e.count;r<o;r++)El.fromBufferAttribute(e,r-1),Rl.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=El.distanceTo(Rl);t.setAttribute("lineDistance",new Lt(n,1))}else Yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(r),el.radius+=o,t.ray.intersectsSphere(el)===!1)return;_p.copy(r).invert(),ps.copy(t.ray).applyMatrix4(_p);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let b=d,g=p-1;b<g;b+=c){let m=h.getX(b),x=h.getX(b+1),_=nl(this,t,ps,l,m,x,b);_&&e.push(_)}if(this.isLineLoop){let b=h.getX(p-1),g=h.getX(d),m=nl(this,t,ps,l,b,g,p-1);m&&e.push(m)}}else{let d=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let b=d,g=p-1;b<g;b+=c){let m=nl(this,t,ps,l,b,b+1,b);m&&e.push(m)}if(this.isLineLoop){let b=nl(this,t,ps,l,p-1,d,p-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function nl(i,t,e,n,r,o,s){let a=i.geometry.attributes.position;if(El.fromBufferAttribute(a,r),Rl.fromBufferAttribute(a,o),e.distanceSqToSegment(El,Rl,hh,Mp)>n)return;hh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(hh);if(!(c<t.near||c>t.far))return{distance:c,point:Mp.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var wp=new $,Sp=new $,Ke=class extends Pl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,o=e.count;r<o;r+=2)wp.fromBufferAttribute(e,r),Sp.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+wp.distanceTo(Sp);t.setAttribute("lineDistance",new Lt(n,1))}else Yt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ri=class extends Fn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Tp=new Me,xh=new Sr,il=new $i,rl=new $,Yi=class extends Ze{constructor(t=new Vt,e=new Ri){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),il.copy(n.boundingSphere),il.applyMatrix4(r),il.radius+=o,t.ray.intersectsSphere(il)===!1)return;Tp.copy(r).invert(),xh.copy(t.ray).applyMatrix4(Tp);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let p=f,b=d;p<b;p++){let g=c.getX(p);rl.fromBufferAttribute(u,g),Ap(rl,g,l,r,t,e,this)}}else{let f=Math.max(0,s.start),d=Math.min(u.count,s.start+s.count);for(let p=f,b=d;p<b;p++)rl.fromBufferAttribute(u,p),Ap(rl,p,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Ap(i,t,e,n,r,o,s){let a=xh.distanceSqToPoint(i);if(a<e){let l=new $;xh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var Ts=class extends dn{constructor(t=[],e=Ji,n,r,o,s,a,l,c,h){super(t,e,n,r,o,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pn=class extends dn{constructor(t,e,n,r,o,s,a,l,c){super(t,e,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ui=class extends dn{constructor(t,e,n=Yn,r,o,s,a=on,l=on,c,h=oi,u=1){if(h!==oi&&h!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,o,s,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Cl=class extends ui{constructor(t,e=Yn,n=Ji,r,o,s=on,a=on,l,c=oi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,r,o,s,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},As=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ro=class i extends Vt{constructor(t=1,e=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,s,o,0),p("z","y","x",1,-1,n,e,-t,s,o,1),p("x","z","y",1,1,t,n,e,r,s,2),p("x","z","y",1,-1,t,n,-e,r,s,3),p("x","y","z",1,-1,t,e,n,r,o,4),p("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function p(b,g,m,x,_,y,M,w,A,v,T){let E=y/A,S=M/v,P=y/2,N=M/2,D=w/2,C=A+1,R=v+1,k=0,L=0,O=new $;for(let B=0;B<R;B++){let V=B*S-N;for(let W=0;W<C;W++){let z=W*E-P;O[b]=z*x,O[g]=V*_,O[m]=D,c.push(O.x,O.y,O.z),O[b]=0,O[g]=0,O[m]=w>0?1:-1,h.push(O.x,O.y,O.z),u.push(W/A),u.push(1-B/v),k+=1}}for(let B=0;B<v;B++)for(let V=0;V<A;V++){let W=f+V+C*B,z=f+V+C*(B+1),q=f+(V+1)+C*(B+1),j=f+(V+1)+C*B;l.push(W,z,j),l.push(z,q,j),L+=6}a.addGroup(d,L,T),d+=L,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Tr=class i extends Vt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let o=[],s=[],a=[],l=[],c=new $,h=new Zt;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),s.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(s[f]/t+1)/2,h.y=(s[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Lt(s,3)),this.setAttribute("normal",new Lt(a,3)),this.setAttribute("uv",new Lt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function Fy(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,o=Sm(i,0,r,e,!0),s=[];if(!o||o.next===o.prev)return s;let a,l,c;if(n&&(o=Uy(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<r;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Es(o,s,e,a,l,c,0),s}function Sm(i,t,e,n,r){let o;if(r===Ky(i,t,e,n)>0)for(let s=t;s<e;s+=n)o=Ep(s/n|0,i[s],i[s+1],o);else for(let s=e-n;s>=t;s-=n)o=Ep(s/n|0,i[s],i[s+1],o);return o&&Po(o,o.next)&&(Ps(o),o=o.next),o}function Ar(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Po(e,e.next)||Ue(e.prev,e,e.next)===0)){if(Ps(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Es(i,t,e,n,r,o,s){if(!i)return;!s&&o&&Hy(i,n,r,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?ky(i,n,r,o):Dy(i)){t.push(l.i,i.i,c.i),Ps(i),i=c.next,a=c.next;continue}if(i=c,i===a){s?s===1?(i=Oy(Ar(i),t),Es(i,t,e,n,r,o,2)):s===2&&Ny(i,t,e,n,r,o):Es(Ar(i),t,e,n,r,o,1);break}}}function Dy(i){let t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;let r=t.x,o=e.x,s=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,o,s),u=Math.min(a,l,c),f=Math.max(r,o,s),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&ms(r,a,o,l,s,c,p.x,p.y)&&Ue(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ky(i,t,e,n){let r=i.prev,o=i,s=i.next;if(Ue(r,o,s)>=0)return!1;let a=r.x,l=o.x,c=s.x,h=r.y,u=o.y,f=s.y,d=Math.min(a,l,c),p=Math.min(h,u,f),b=Math.max(a,l,c),g=Math.max(h,u,f),m=yh(d,p,t,e,n),x=yh(b,g,t,e,n),_=i.prevZ,y=i.nextZ;for(;_&&_.z>=m&&y&&y.z<=x;){if(_.x>=d&&_.x<=b&&_.y>=p&&_.y<=g&&_!==r&&_!==s&&ms(a,h,l,u,c,f,_.x,_.y)&&Ue(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=b&&y.y>=p&&y.y<=g&&y!==r&&y!==s&&ms(a,h,l,u,c,f,y.x,y.y)&&Ue(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=b&&_.y>=p&&_.y<=g&&_!==r&&_!==s&&ms(a,h,l,u,c,f,_.x,_.y)&&Ue(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=b&&y.y>=p&&y.y<=g&&y!==r&&y!==s&&ms(a,h,l,u,c,f,y.x,y.y)&&Ue(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Oy(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Po(n,r)&&Am(n,e,e.next,r)&&Rs(n,r)&&Rs(r,n)&&(t.push(n.i,e.i,r.i),Ps(e),Ps(e.next),e=i=r),e=e.next}while(e!==i);return Ar(e)}function Ny(i,t,e,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&$y(s,a)){let l=Em(s,a);s=Ar(s,s.next),l=Ar(l,l.next),Es(s,t,e,n,r,o,0),Es(l,t,e,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function Uy(i,t,e,n){let r=[];for(let o=0,s=t.length;o<s;o++){let a=t[o]*n,l=o<s-1?t[o+1]*n:i.length,c=Sm(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Xy(c))}r.sort(By);for(let o=0;o<r.length;o++)e=zy(r[o],e);return e}function By(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function zy(i,t){let e=Vy(i,t);if(!e)return t;let n=Em(e,i);return Ar(n,n.next),Ar(e,e.next)}function Vy(i,t){let e=t,n=i.x,r=i.y,o=-1/0,s;if(Po(i,e))return e;do{if(Po(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>o&&(o=u,s=e.x<e.next.x?e:e.next,u===n))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0;e=s;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Tm(r<c?n:o,r,l,c,r<c?o:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);Rs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Gy(s,e)))&&(s=e,h=u)}e=e.next}while(e!==a);return s}function Gy(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function Hy(i,t,e,n){let r=i;do r.z===0&&(r.z=yh(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Wy(r)}function Wy(i){let t,e=1;do{let n=i,r;i=null;let o=null;for(t=0;n;){t++;let s=n,a=0;for(let c=0;c<e&&(a++,s=s.nextZ,!!s);c++);let l=e;for(;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,l--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,e*=2}while(t>1);return i}function yh(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Xy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Tm(i,t,e,n,r,o,s,a){return(r-s)*(t-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(e-s)*(t-a)&&(e-s)*(o-a)>=(r-s)*(n-a)}function ms(i,t,e,n,r,o,s,a){return!(i===s&&t===a)&&Tm(i,t,e,n,r,o,s,a)}function $y(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Yy(i,t)&&(Rs(i,t)&&Rs(t,i)&&qy(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||Po(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Po(i,t){return i.x===t.x&&i.y===t.y}function Am(i,t,e,n){let r=sl(Ue(i,t,e)),o=sl(Ue(i,t,n)),s=sl(Ue(e,n,i)),a=sl(Ue(e,n,t));return!!(r!==o&&s!==a||r===0&&ol(i,e,t)||o===0&&ol(i,n,t)||s===0&&ol(e,i,n)||a===0&&ol(e,t,n))}function ol(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function sl(i){return i>0?1:i<0?-1:0}function Yy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Am(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Rs(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function qy(i,t){let e=i,n=!1,r=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&r<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Em(i,t){let e=vh(i.i,i.x,i.y),n=vh(t.i,t.x,t.y),r=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Ep(i,t,e,n){let r=vh(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ps(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ky(i,t,e,n){let r=0;for(let o=t,s=e-n;o<e;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}var _h=class{static triangulate(t,e,n=2){return Fy(t,e,n)}},Cs=class i{static area(t){let e=t.length,n=0;for(let r=e-1,o=0;o<e;r=o++)n+=t[r].x*t[o].y-t[o].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],o=[];Rp(t),Pp(n,t);let s=t.length;e.forEach(Rp);for(let l=0;l<e.length;l++)r.push(s),s+=e[l].length,Pp(n,e[l]);let a=_h.triangulate(n,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function Rp(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Pp(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Xn=class i extends Vt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let o=t/2,s=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],b=[],g=[];for(let m=0;m<h;m++){let x=m*f-s;for(let _=0;_<c;_++){let y=_*u-o;p.push(y,-x,0),b.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let _=x+c*m,y=x+c*(m+1),M=x+1+c*(m+1),w=x+1+c*m;d.push(_,y,w),d.push(y,M,w)}this.setIndex(d),this.setAttribute("position",new Lt(p,3)),this.setAttribute("normal",new Lt(b,3)),this.setAttribute("uv",new Lt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Is=class i extends Vt{constructor(t=.5,e=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/r,d=new $,p=new Zt;for(let b=0;b<=r;b++){for(let g=0;g<=n;g++){let m=o+g/n*s;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let b=0;b<r;b++){let g=b*(n+1);for(let m=0;m<n;m++){let x=m+g,_=x,y=x+n+1,M=x+n+2,w=x+1;a.push(_,y,w),a.push(y,M,w)}}this.setIndex(a),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Ir(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Cp(r))r.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Cp(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();t[e][n]=o}else t[e][n]=r.slice();else t[e][n]=r}}return t}function gn(i){let t={};for(let e=0;e<i.length;e++){let n=Ir(i[e]);for(let r in n)t[r]=n[r]}return t}function Cp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Zy(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Rm={clone:Ir,merge:gn},Jy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Fn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jy,this.fragmentShader=jy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ir(t.uniforms),this.uniformsGroups=Zy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?e.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[r]={type:"m4",value:s.toArray()}:e.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new K().setHex(r.value);break;case"v2":this.uniforms[n].value=new Zt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new $().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ke().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Il=class extends mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ls=class extends Fn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new K(16777215),this.specular=new K(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zs,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Vs,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Fs=class extends Fn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zs,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Vs,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Co=class extends Fn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ll=class extends Fn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function po(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function fh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var qi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],o=e[n-1];n:{t:{let s;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=e[++n],t<r)break t}s=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=o,o=e[--n-1],t>=o)break t}s=n,n=0;break e}break n}for(;n<s;){let a=n+s>>>1;t<e[a]?s=a:n=a+1}if(r=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=t*r;for(let s=0;s!==r;++s)e[s]=n[o+s];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fl=class extends qi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mh,endingEnd:mh}}intervalChanged_(t,e,n){let r=this.parameterPositions,o=t-2,s=t+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case gh:o=t,a=2*e-n;break;case bh:o=r.length-2,a=e+r[o]-r[o+1];break;default:o=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gh:s=t,l=2*n-e;break;case bh:s=1,l=n+r[1]-r[0];break;default:s=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=s*h}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(r-e),b=p*p,g=b*p,m=-f*g+2*f*b-f*p,x=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*p+1,_=(-1-d)*g+(1.5+d)*b+.5*p,y=d*g-d*b;for(let M=0;M!==a;++M)o[M]=m*s[h+M]+x*s[c+M]+_*s[l+M]+y*s[u+M];return o}},Dl=class extends qi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)o[f]=s[c+f]*u+s[l+f]*h;return o}},kl=class extends qi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Ol=class extends qi{interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(r-e),b=1-p;for(let g=0;g!==a;++g)o[g]=s[c+g]*b+s[l+g]*p;return o}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let b=s[c+p],g=s[l+p],m=d*f+p*2,x=u[m],_=u[m+1],y=t*f+p*2,M=h[y],w=h[y+1],A=tv(n,e,x,M,r);o[p]=Pm(A,b,_,w,g)}return o}};function Pm(i,t,e,n,r){let o=1-i;return o*o*o*t+3*o*o*i*e+3*o*i*i*n+i*i*i*r}function Qy(i,t,e,n,r){let o=1-i;return 3*o*o*(e-t)+6*o*i*(n-e)+3*i*i*(r-n)}function tv(i,t,e,n,r){let o=(i-t)/(r-t);for(let s=0;s<8;s++){let a=Pm(o,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=Qy(o,t,e,n,r);if(Math.abs(l)<1e-10)break;o=Math.max(0,Math.min(1,o-a/l))}return o}var En=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=po(e,this.TimeBufferType),this.values=po(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:po(t.times,Array),values:po(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),fh(t.settings)&&(n.settings={inTangents:po(t.settings.inTangents,Array),outTangents:po(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ol(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case gs:e=this.InterpolantFactoryMethodDiscrete;break;case vl:e=this.InterpolantFactoryMethodLinear;break;case cl:e=this.InterpolantFactoryMethodSmooth;break;case ph:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Yt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return vl;case this.InterpolantFactoryMethodSmooth:return cl;case this.InterpolantFactoryMethodBezier:return ph}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;fh(this.settings)&&(Ip(this.settings.inTangents,t),Ip(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<t;)++o;for(;s!==-1&&n[s]>e;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,o=n.length;o===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(s!==null&&s>l){Kt("KeyframeTrack: Out of order keys.",this,a,l,s),t=!1;break}s=l}if(r!==void 0&&dy(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===cl,o=t.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let b=e[u+p];if(b!==e[f+p]||b!==e[d+p]){l=!0;break}}}if(l){if(a!==s){t[s]=t[a];let u=a*n,f=s*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++s}}if(o>0){t[s]=t[o];for(let a=o*n,l=s*n,c=0;c!==n;++c)e[l+c]=e[a+c];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,fh(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ip(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=vl;var Ki=class extends En{constructor(t,e,n){super(t,e,n)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=gs;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends En{constructor(t,e,n,r){super(t,e,n,r)}};Nl.prototype.ValueTypeName="color";var Ul=class extends En{constructor(t,e,n,r){super(t,e,n,r)}};Ul.prototype.ValueTypeName="number";var Bl=class extends qi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)ai.slerpFlat(o,0,s,c-a,s,c,l);return o}},Ds=class extends En{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Bl(this.times,this.values,this.getValueSize(),t)}};Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends En{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=gs;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends En{constructor(t,e,n,r){super(t,e,n,r)}};zl.prototype.ValueTypeName="vector";var hl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Lp(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Lp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Lp(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Vl=class{constructor(t,e,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&r.onStart!==void 0&&r.onStart(h,s,a),o=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cm=new Vl,Io=class{constructor(t){this.manager=t!==void 0?t:Cm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,o){n.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Io.DEFAULT_MATERIAL_NAME="__DEFAULT";var mo=new WeakMap,Gl=class extends Io{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let o=this,s=hl.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(s),o.manager.itemEnd(t)},0);else{let u=mo.get(s);u===void 0&&(u=[],mo.set(s,u)),u.push({onLoad:e,onError:r})}return s}let a=_o("img");function l(){h(),e&&e(this);let u=mo.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}mo.delete(this),o.manager.itemEnd(t)}function c(u){h(),r&&r(u),hl.remove(`image:${t}`);let f=mo.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}mo.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),hl.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}};var Er=class extends Io{constructor(t){super(t)}load(t,e,n,r){let o=new dn,s=new Gl(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,r),o}},ks=class extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new K(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Os=class extends ks{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},dh=new Me,Fp=new $,Dp=new $,Hl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Fp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fp),Dp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,r){dh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(dh,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,s=r?r.z/o.x:1,a=r?r.w/o.y:1,l=r?r.x/o.x:0,c=r?r.y/o.y:0;t.coordinateSystem===vo||t.reversedDepth?e.set(.5*s,0,0,.5*s+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*s,0,0,.5*s+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(dh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},al=new $,ll=new ai,ii=new $,Ns=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(al,ll,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ll,ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(al,ll,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ll,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new $,kp=new Zt,Op=new Zt,rn=class extends Ns{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_l*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _l*2*Math.atan(Math.tan(Hu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,kp,Op),e.subVectors(Op,kp)}setViewOffset(t,e,n,r,o,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hu*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,e-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Rn=class extends Ns{constructor(t=-1,e=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-t,s=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Mh=class extends Hl{constructor(){super(new Rn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Us=class extends ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new Mh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var go=-90,bo=1,Wl=class extends Ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new rn(go,bo,t,e);r.layers=this.layers,this.add(r);let o=new rn(go,bo,t,e);o.layers=this.layers,this.add(o);let s=new rn(go,bo,t,e);s.layers=this.layers,this.add(s);let a=new rn(go,bo,t,e);a.layers=this.layers,this.add(a);let l=new rn(go,bo,t,e);l.layers=this.layers,this.add(l);let c=new rn(go,bo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,o,s,a,l]=e;for(let c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Xl=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Zh="\\[\\]\\.:\\/",ev=new RegExp("["+Zh+"]","g"),Jh="[^"+Zh+"]",nv="[^"+Zh.replace("\\.","")+"]",iv=/((?:WC+[\/:])*)/.source.replace("WC",Jh),rv=/(WCOD+)?/.source.replace("WCOD",nv),ov=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jh),sv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jh),av=new RegExp("^"+iv+rv+ov+sv+"$"),lv=["material","materials","bones","map"],wh=class{constructor(t,e,n){let r=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ev,"")}static parseTrackName(t){let e=av.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);lv.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[r];if(s===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=wh;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var SE=new Float32Array(1);var Np=new Me,Bs=class{constructor(t,e,n=0,r=1/0){this.ray=new Sr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new So,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Np.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Np),this}intersectObject(t,e=!0,n=[]){return Sh(t,this,n,e),n.sort(Up),n}intersectObjects(t,e=!0,n=[]){for(let r=0,o=t.length;r<o;r++)Sh(t[r],this,n,e);return n.sort(Up),n}};function Up(i,t){return i.distance-t.distance}function Sh(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)Sh(o[s],t,e,!0)}}var rf=class rf{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=r,this}};rf.prototype.isMatrix2=!0;var Th=rf;function jh(i,t,e,n){let r=cv(n);switch(e){case Hh:return i*t;case Xh:return i*t/r.components*r.byteLength;case Ql:return i*t/r.components*r.byteLength;case tr:return i*t*2/r.components*r.byteLength;case tc:return i*t*2/r.components*r.byteLength;case Wh:return i*t*3/r.components*r.byteLength;case kn:return i*t*4/r.components*r.byteLength;case ec:return i*t*4/r.components*r.byteLength;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $s:case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:case oc:return Math.max(i,16)*Math.max(t,8)/4;case nc:case rc:return Math.max(i,8)*Math.max(t,8)/2;case sc:case ac:case cc:case uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lc:case qs:case hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case yc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case vc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ac:case Ec:case Rc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Pc:case Cc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ks:case Ic:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cv(i){switch(i){case wn:case Bh:return{byteLength:1,components:1};case Fo:case zh:case Kn:return{byteLength:2,components:1};case Jl:case jl:return{byteLength:2,components:4};case Yn:case Zl:case qn:return{byteLength:4,components:1};case Vh:case Gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function jm(){let i=null,t=!1,e=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),e(o,s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function hv(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],b=u[d];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++f,u[f]=b)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let b=u[d];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var fv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dv=`#ifdef USE_ALPHAHASH
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
#endif`,pv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xv=`#ifdef USE_AOMAP
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
#endif`,yv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vv=`#ifdef USE_BATCHING
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
#endif`,_v=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tv=`#ifdef USE_IRIDESCENCE
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
#endif`,Av=`#ifdef USE_BUMPMAP
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
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Dv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kv=`#define PI 3.141592653589793
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
} // validated`,Ov=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nv=`vec3 transformedNormal = objectNormal;
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
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wv=`#ifdef USE_ENVMAP
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
#endif`,Xv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$v=`#ifdef USE_ENVMAP
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
#endif`,Yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qv=`#ifdef USE_ENVMAP
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
#endif`,Kv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qv=`#ifdef USE_GRADIENTMAP
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
}`,t1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,r1=`#ifdef USE_ENVMAP
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
#endif`,o1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c1=`PhysicalMaterial material;
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
#endif`,u1=`uniform sampler2D dfgLUT;
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
}`,h1=`
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
#endif`,f1=`#if defined( RE_IndirectDiffuse )
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
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,m1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M1=`#if defined( USE_POINTS_UV )
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
#endif`,w1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`#ifdef USE_MORPHTARGETS
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
#endif`,P1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,I1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,k1=`#ifdef USE_NORMALMAP
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
#endif`,O1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,J1=`float getShadowMask() {
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
}`,j1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q1=`#ifdef USE_SKINNING
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
#endif`,t_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e_=`#ifdef USE_SKINNING
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
#endif`,n_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s_=`#ifdef USE_TRANSMISSION
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
#endif`,a_=`#ifdef USE_TRANSMISSION
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
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,f_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d_=`uniform sampler2D t2D;
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
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`#include <common>
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
}`,y_=`#if DEPTH_PACKING == 3200
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
}`,v_=`#define DISTANCE
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
}`,__=`#define DISTANCE
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`uniform float scale;
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
}`,T_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,E_=`uniform vec3 diffuse;
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
}`,R_=`#define LAMBERT
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
}`,P_=`#define LAMBERT
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
}`,C_=`#define MATCAP
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
}`,I_=`#define MATCAP
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
}`,L_=`#define NORMAL
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
}`,F_=`#define NORMAL
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
}`,D_=`#define PHONG
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
}`,k_=`#define PHONG
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
}`,O_=`#define STANDARD
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
}`,N_=`#define STANDARD
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
}`,U_=`#define TOON
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
}`,B_=`#define TOON
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
}`,z_=`uniform float size;
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
}`,V_=`uniform vec3 diffuse;
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
}`,G_=`#include <common>
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
}`,H_=`uniform vec3 color;
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
}`,W_=`uniform float rotation;
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
}`,X_=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:fv,alphahash_pars_fragment:dv,alphamap_fragment:pv,alphamap_pars_fragment:mv,alphatest_fragment:gv,alphatest_pars_fragment:bv,aomap_fragment:xv,aomap_pars_fragment:yv,batching_pars_vertex:vv,batching_vertex:_v,begin_vertex:Mv,beginnormal_vertex:wv,bsdfs:Sv,iridescence_fragment:Tv,bumpmap_pars_fragment:Av,clipping_planes_fragment:Ev,clipping_planes_pars_fragment:Rv,clipping_planes_pars_vertex:Pv,clipping_planes_vertex:Cv,color_fragment:Iv,color_pars_fragment:Lv,color_pars_vertex:Fv,color_vertex:Dv,common:kv,cube_uv_reflection_fragment:Ov,defaultnormal_vertex:Nv,displacementmap_pars_vertex:Uv,displacementmap_vertex:Bv,emissivemap_fragment:zv,emissivemap_pars_fragment:Vv,colorspace_fragment:Gv,colorspace_pars_fragment:Hv,envmap_fragment:Wv,envmap_common_pars_fragment:Xv,envmap_pars_fragment:$v,envmap_pars_vertex:Yv,envmap_physical_pars_fragment:r1,envmap_vertex:qv,fog_vertex:Kv,fog_pars_vertex:Zv,fog_fragment:Jv,fog_pars_fragment:jv,gradientmap_pars_fragment:Qv,lightmap_pars_fragment:t1,lights_lambert_fragment:e1,lights_lambert_pars_fragment:n1,lights_pars_begin:i1,lights_toon_fragment:o1,lights_toon_pars_fragment:s1,lights_phong_fragment:a1,lights_phong_pars_fragment:l1,lights_physical_fragment:c1,lights_physical_pars_fragment:u1,lights_fragment_begin:h1,lights_fragment_maps:f1,lights_fragment_end:d1,lightprobes_pars_fragment:p1,logdepthbuf_fragment:m1,logdepthbuf_pars_fragment:g1,logdepthbuf_pars_vertex:b1,logdepthbuf_vertex:x1,map_fragment:y1,map_pars_fragment:v1,map_particle_fragment:_1,map_particle_pars_fragment:M1,metalnessmap_fragment:w1,metalnessmap_pars_fragment:S1,morphinstance_vertex:T1,morphcolor_vertex:A1,morphnormal_vertex:E1,morphtarget_pars_vertex:R1,morphtarget_vertex:P1,normal_fragment_begin:C1,normal_fragment_maps:I1,normal_pars_fragment:L1,normal_pars_vertex:F1,normal_vertex:D1,normalmap_pars_fragment:k1,clearcoat_normal_fragment_begin:O1,clearcoat_normal_fragment_maps:N1,clearcoat_pars_fragment:U1,iridescence_pars_fragment:B1,opaque_fragment:z1,packing:V1,premultiplied_alpha_fragment:G1,project_vertex:H1,dithering_fragment:W1,dithering_pars_fragment:X1,roughnessmap_fragment:$1,roughnessmap_pars_fragment:Y1,shadowmap_pars_fragment:q1,shadowmap_pars_vertex:K1,shadowmap_vertex:Z1,shadowmask_pars_fragment:J1,skinbase_vertex:j1,skinning_pars_vertex:Q1,skinning_vertex:t_,skinnormal_vertex:e_,specularmap_fragment:n_,specularmap_pars_fragment:i_,tonemapping_fragment:r_,tonemapping_pars_fragment:o_,transmission_fragment:s_,transmission_pars_fragment:a_,uv_pars_fragment:l_,uv_pars_vertex:c_,uv_vertex:u_,worldpos_vertex:h_,background_vert:f_,background_frag:d_,backgroundCube_vert:p_,backgroundCube_frag:m_,cube_vert:g_,cube_frag:b_,depth_vert:x_,depth_frag:y_,distance_vert:v_,distance_frag:__,equirect_vert:M_,equirect_frag:w_,linedashed_vert:S_,linedashed_frag:T_,meshbasic_vert:A_,meshbasic_frag:E_,meshlambert_vert:R_,meshlambert_frag:P_,meshmatcap_vert:C_,meshmatcap_frag:I_,meshnormal_vert:L_,meshnormal_frag:F_,meshphong_vert:D_,meshphong_frag:k_,meshphysical_vert:O_,meshphysical_frag:N_,meshtoon_vert:U_,meshtoon_frag:B_,points_vert:z_,points_frag:V_,shadow_vert:G_,shadow_frag:H_,sprite_vert:W_,sprite_frag:X_},Rt={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},di={basic:{uniforms:gn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:gn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:gn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:gn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:gn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new K(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:gn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:gn([Rt.points,Rt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:gn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:gn([Rt.common,Rt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:gn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:gn([Rt.sprite,Rt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:gn([Rt.common,Rt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:gn([Rt.lights,Rt.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};di.physical={uniforms:gn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var Dc={r:0,b:0,g:0},$_=new Me,Qm=new ne;Qm.set(-1,0,0,0,1,0,0,0,1);function Y_(i,t,e,n,r,o){let s=new K(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function d(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){let y=x.backgroundBlurriness>0;_=t.get(_,y)}return _}function p(x){let _=!1,y=d(x);y===null?g(s,a):y&&y.isColor&&(g(y,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,_){let y=d(_);y&&(y.isCubeTexture||y.mapping===Gs)?(c===void 0&&(c=new At(new Ro(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Ir(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($_.makeRotationFromEuler(_.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qm),c.material.toneMapped=ue.getTransfer(y.colorSpace)!==_e,(h!==y||u!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new At(new Xn(2,2),new mn({name:"BackgroundMaterial",uniforms:Ir(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ue.getTransfer(y.colorSpace)!==_e,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,_){x.getRGB(Dc,Kh(i)),e.buffers.color.setClear(Dc.r,Dc.g,Dc.b,_,o)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,_=1){s.set(x),a=_,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(s,a)},render:p,addToRenderList:b,dispose:m}}function q_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),o=r,s=!1;function a(S,P,N,D,C){let R=!1,k=u(S,D,N,P);o!==k&&(o=k,c(o.object)),R=d(S,D,N,C),R&&p(S,D,N,C),C!==null&&t.update(C,i.ELEMENT_ARRAY_BUFFER),(R||s)&&(s=!1,y(S,P,N,D),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,P,N,D){let C=D.wireframe===!0,R=n[P.id];R===void 0&&(R={},n[P.id]=R);let k=S.isInstancedMesh===!0?S.id:0,L=R[k];L===void 0&&(L={},R[k]=L);let O=L[N.id];O===void 0&&(O={},L[N.id]=O);let B=O[C];return B===void 0&&(B=f(l()),O[C]=B),B}function f(S){let P=[],N=[],D=[];for(let C=0;C<e;C++)P[C]=0,N[C]=0,D[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:D,object:S,attributes:{},index:null}}function d(S,P,N,D){let C=o.attributes,R=P.attributes,k=0,L=N.getAttributes();for(let O in L)if(L[O].location>=0){let V=C[O],W=R[O];if(W===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),V===void 0||V.attribute!==W||W&&V.data!==W.data)return!0;k++}return o.attributesNum!==k||o.index!==D}function p(S,P,N,D){let C={},R=P.attributes,k=0,L=N.getAttributes();for(let O in L)if(L[O].location>=0){let V=R[O];V===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(V=S.instanceColor));let W={};W.attribute=V,V&&V.data&&(W.data=V.data),C[O]=W,k++}o.attributes=C,o.attributesNum=k,o.index=D}function b(){let S=o.newAttributes;for(let P=0,N=S.length;P<N;P++)S[P]=0}function g(S){m(S,0)}function m(S,P){let N=o.newAttributes,D=o.enabledAttributes,C=o.attributeDivisors;N[S]=1,D[S]===0&&(i.enableVertexAttribArray(S),D[S]=1),C[S]!==P&&(i.vertexAttribDivisor(S,P),C[S]=P)}function x(){let S=o.newAttributes,P=o.enabledAttributes;for(let N=0,D=P.length;N<D;N++)P[N]!==S[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function _(S,P,N,D,C,R,k){k===!0?i.vertexAttribIPointer(S,P,N,C,R):i.vertexAttribPointer(S,P,N,D,C,R)}function y(S,P,N,D){b();let C=D.attributes,R=N.getAttributes(),k=P.defaultAttributeValues;for(let L in R){let O=R[L];if(O.location>=0){let B=C[L];if(B===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(B=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(B=S.instanceColor)),B!==void 0){let V=B.normalized,W=B.itemSize,z=t.get(B);if(z===void 0)continue;let q=z.buffer,j=z.type,ot=z.bytesPerElement,H=j===i.INT||j===i.UNSIGNED_INT||B.gpuType===Zl;if(B.isInterleavedBufferAttribute){let X=B.data,tt=X.stride,et=B.offset;if(X.isInstancedInterleavedBuffer){for(let nt=0;nt<O.locationSize;nt++)m(O.location+nt,X.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let nt=0;nt<O.locationSize;nt++)g(O.location+nt);i.bindBuffer(i.ARRAY_BUFFER,q);for(let nt=0;nt<O.locationSize;nt++)_(O.location+nt,W/O.locationSize,j,V,tt*ot,(et+W/O.locationSize*nt)*ot,H)}else{if(B.isInstancedBufferAttribute){for(let X=0;X<O.locationSize;X++)m(O.location+X,B.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let X=0;X<O.locationSize;X++)g(O.location+X);i.bindBuffer(i.ARRAY_BUFFER,q);for(let X=0;X<O.locationSize;X++)_(O.location+X,W/O.locationSize,j,V,W*ot,W/O.locationSize*X*ot,H)}}else if(k!==void 0){let V=k[L];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(O.location,V);break;case 3:i.vertexAttrib3fv(O.location,V);break;case 4:i.vertexAttrib4fv(O.location,V);break;default:i.vertexAttrib1fv(O.location,V)}}}}x()}function M(){T();for(let S in n){let P=n[S];for(let N in P){let D=P[N];for(let C in D){let R=D[C];for(let k in R)h(R[k].object),delete R[k];delete D[C]}}delete n[S]}}function w(S){if(n[S.id]===void 0)return;let P=n[S.id];for(let N in P){let D=P[N];for(let C in D){let R=D[C];for(let k in R)h(R[k].object),delete R[k];delete D[C]}}delete n[S.id]}function A(S){for(let P in n){let N=n[P];for(let D in N){let C=N[D];if(C[S.id]===void 0)continue;let R=C[S.id];for(let k in R)h(R[k].object),delete R[k];delete C[S.id]}}}function v(S){for(let P in n){let N=n[P],D=S.isInstancedMesh===!0?S.id:0,C=N[D];if(C!==void 0){for(let R in C){let k=C[R];for(let L in k)h(k[L].object),delete k[L];delete C[R]}delete N[D],Object.keys(N).length===0&&delete n[P]}}}function T(){E(),s=!0,o!==r&&(o=r,c(o.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:E,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function K_(i,t,e){let n;function r(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function s(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function Z_(i,t,e,n){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let v=A===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==wn&&A!==qn&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Yt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:y,maxSamples:M,samples:w}}function J_(i){let t=this,e=null,n=0,r=!1,o=!1,s=new Hn,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!r||p===null||p.length===0||o&&!g)o?h(null):c();else{let x=o?0:n,_=x*4,y=m.clippingState||null;l.value=y,y=h(p,f,_,d);for(let M=0;M!==_;++M)y[M]=e[M];m.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=l.value,p!==!0||g===null){let m=d+b*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,y=d;_!==b;++_,y+=4)s.copy(u[_]).applyMatrix4(x,a),s.normal.toArray(g,y),g[y+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var Oo=4,j_=6,Q_=20,tM=256,Js=new Rn,Im=new K,of=null,sf=0,af=0,lf=!1,eM=new $,Lr=new $,Oc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,o={}){let{size:s=256,position:a=eM}=o;of=this._renderer.getRenderTarget(),sf=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(of,sf,af),this._renderer.xr.enabled=lf,t.scissorTest=!1,ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),of=this._renderer.getRenderTarget(),sf=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Kn,format:kn,colorSpace:bs,depthBuffer:!1},r=Lm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(t,e,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=nM(o)),this._blurMaterial=rM(o,t,e),this._ggxMaterial=iM(o,t,e)}return r}_compileMaterial(t){let e=new At(new Vt,t);this._renderer.compile(e,Js)}_sceneToCubeUV(t,e,n,r,o){let l=new rn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Im),u.toneMapping=$n,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new Ro,new Xt({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,m=!1,x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,m=!0):(g.color.copy(Im),m=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[_],o.y,o.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[_],o.z)):(l.up.set(0,c[_],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[_]));let M=this._cubeSize;ko(r,y*M,_>2?M:0,M,M),u.setRenderTarget(r),m&&u.render(b,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Ji||t.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=t;let l=this._cubeSize;ko(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(s,Js)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,b=this._sizeLods[n],g=3*b*(n>p-Oo?n-p+Oo:0),m=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,ko(o,g,m,3*b,2*b),r.setRenderTarget(o),r.render(a,Js),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,ko(t,g,m,3*b,2*b),r.setRenderTarget(t),r.render(a,Js)}_blur(t,e,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,s),this._blurPass(o,t,n,n,s)}_blurPass(t,e,n,r,o){let s=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-Oo?r-this._lodMax+Oo:0),f=4*(this._cubeSize-h);ko(e,u,f,3*h,2*h),s.setRenderTarget(e),s.render(l,Js)}};function nM(i){let t=[],e=[],n=i,r=i-Oo+1+j_;for(let o=0;o<r;o++){let s=Math.pow(2,n);t.push(s);let a=1/(s-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),b=new Float32Array(d*f*u);for(let m=0;m<u;m++){let x=m%3*2/3-1,_=m>2?0:-1,y=[x,_,0,x+2/3,_,0,x+2/3,_+1,0,x,_,0,x+2/3,_+1,0,x,_+1,0];p.set(y,d*f*m);for(let M=0;M<f;M++){let w=h[M*2]*2-1,A=h[M*2+1]*2-1;m===0?Lr.set(1,A,w):m===1?Lr.set(-w,1,-A):m===2?Lr.set(-w,A,1):m===3?Lr.set(-1,A,-w):m===4?Lr.set(-w,-1,A):Lr.set(w,A,-1),Lr.toArray(b,(m*f+M)*d)}}let g=new Vt;g.setAttribute("position",new vn(p,d)),g.setAttribute("outputDirection",new vn(b,d)),e.push(new At(g,null)),n>Oo&&n--}return{lodMeshes:e,sizeLods:t}}function Lm(i,t,e){let n=new qe(i,t,e);return n.texture.mapping=Gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ko(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function iM(i,t,e){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function rM(i,t,e){return new mn({name:"SphericalGaussianBlur",defines:{SAMPLES:Q_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Fm(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Dm(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Uc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nc=class extends qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ts(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ro(5,5,5),o=new mn({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Dn});o.uniforms.tEquirect.value=e;let s=new At(r,o),a=e.minFilter;return e.minFilter===ji&&(e.minFilter=Ye),new Wl(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let o=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,r);t.setRenderTarget(o)}};function oM(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?s(f):o(f)}function o(f){if(f&&f.isTexture){let d=f.mapping;if(d===Yl||d===ql)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let b=new Nc(p.height);return b.fromEquirectangularTexture(i,f),t.set(f,b),f.addEventListener("dispose",c),a(b.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let d=f.mapping,p=d===Yl||d===ql,b=d===Ji||d===Cr;if(p||b){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Oc(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return p&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new Oc(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===Yl?f.mapping=Ji:d===ql&&(f.mapping=Cr),f}function l(f){let d=0,p=6;for(let b=0;b<p;b++)f[b]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function sM(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&_r("WebGLRenderer: "+n+" extension not supported."),r}}}function aM(i,t,e,n){let r={},o=new WeakMap;function s(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",s),delete r[f.id];let d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,b=0;if(p===void 0)return;if(d!==null){let x=d.array;b=d.version;for(let _=0,y=x.length;_<y;_+=3){let M=x[_+0],w=x[_+1],A=x[_+2];f.push(M,w,w,A,A,M)}}else{let x=p.array;b=p.version;for(let _=0,y=x.length/3-1;_<y;_+=3){let M=_+0,w=_+1,A=_+2;f.push(M,w,w,A,A,M)}}let g=new(p.count>=65535?wr:Ms)(f,1);g.version=b;let m=o.get(u);m&&t.remove(m),o.set(u,g)}function h(u){let f=o.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function lM(i,t,e){let n;function r(u){n=u}let o,s;function a(u){o=u.type,s=u.bytesPerElement}function l(u,f){i.drawElements(n,f,o,u*s),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,o,u*s,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,d);let b=0;for(let g=0;g<d;g++)b+=f[g];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function cM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:Kt("WebGLInfo: Unknown draw mode:",s);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function uM(i,t,e){let n=new WeakMap,r=new ke;function o(s,a,l){let c=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),b===!0&&(_=3);let y=a.attributes.position.count*_,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*M*4*u),A=new vs(w,y,M,u);A.type=qn,A.needsUpdate=!0;let v=_*4;for(let E=0;E<u;E++){let S=g[E],P=m[E],N=x[E],D=y*M*4*E;for(let C=0;C<S.count;C++){let R=C*v;d===!0&&(r.fromBufferAttribute(S,C),w[D+R+0]=r.x,w[D+R+1]=r.y,w[D+R+2]=r.z,w[D+R+3]=0),p===!0&&(r.fromBufferAttribute(P,C),w[D+R+4]=r.x,w[D+R+5]=r.y,w[D+R+6]=r.z,w[D+R+7]=0),b===!0&&(r.fromBufferAttribute(N,C),w[D+R+8]=r.x,w[D+R+9]=r.y,w[D+R+10]=r.z,w[D+R+11]=N.itemSize===4?r.w:1)}}f={count:u,texture:A,size:new Zt(y,M)},n.set(a,f),a.addEventListener("dispose",T)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function hM(i,t,e,n,r){let o=new WeakMap;function s(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(o.get(f)!==h&&(t.update(f),o.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return f}function a(){o=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:a}}var fM={[Ih]:"LINEAR_TONE_MAPPING",[Lh]:"REINHARD_TONE_MAPPING",[Fh]:"CINEON_TONE_MAPPING",[Dh]:"ACES_FILMIC_TONE_MAPPING",[Oh]:"AGX_TONE_MAPPING",[Nh]:"NEUTRAL_TONE_MAPPING",[kh]:"CUSTOM_TONE_MAPPING"};function dM(i,t,e,n,r,o){let s=new qe(t,e,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Vt;c.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Lt([0,2,0,0,2,0],2));let h=new Il({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new At(c,h),f=new Rn(-1,1,1,-1,0,1),d=null,p=null,b=!1,g,m=null,x=[],_=!1;this.setSize=function(y,M){s.setSize(y,M),a!==null&&a.setSize(y,M),l!==null&&l.setSize(y,M);for(let w=0;w<x.length;w++){let A=x[w];A.setSize&&A.setSize(y,M)}},this.setEffects=function(y){x=y,_=x.length>0&&x[0].isRenderPass===!0;let M=s.width,w=s.height;x.length>0&&a===null&&(a=new qe(M,w,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new qe(M,w,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){let v=x[A];v.setSize&&v.setSize(M,w)}},this.begin=function(y,M){if(b||y.toneMapping===$n&&x.length===0)return!1;if(m=M,M!==null){let w=M.width,A=M.height;(s.width!==w||s.height!==A)&&this.setSize(w,A)}return _===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=$n,!0},this.hasRenderPass=function(){return _},this.end=function(y,M){y.toneMapping=g,b=!0;let w=s,A=a;for(let v=0;v<x.length;v++){let T=x[v];T.enabled!==!1&&(T.render(y,A,w,M),T.needsSwap!==!1&&(w=A,A=A===a?l:a))}if(d!==y.outputColorSpace||p!==y.toneMapping){d=y.outputColorSpace,p=y.toneMapping,h.defines={},ue.getTransfer(d)===_e&&(h.defines.SRGB_TRANSFER="");let v=fM[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(m),y.render(u,f),m=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var t0=new dn,hf=new ui(1,1),e0=new vs,n0=new Sl,i0=new Ts,km=[],Om=[],Nm=new Float32Array(16),Um=new Float32Array(9),Bm=new Float32Array(4);function Uo(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,o=km[r];if(o===void 0&&(o=new Float32Array(r),km[r]=o),t!==0){n.toArray(o,0);for(let s=1,a=0;s!==t;++s)a+=e,i[s].toArray(o,a)}return o}function je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Bc(i,t){let e=Om[t];e===void 0&&(e=new Int32Array(t),Om[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function pM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function mM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function gM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function bM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function xM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;Bm.set(n),i.uniformMatrix2fv(this.addr,!1,Bm),Qe(e,n)}}function yM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;Um.set(n),i.uniformMatrix3fv(this.addr,!1,Um),Qe(e,n)}}function vM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;Nm.set(n),i.uniformMatrix4fv(this.addr,!1,Nm),Qe(e,n)}}function _M(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function MM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function wM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function SM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function TM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function AM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function EM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function RM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function PM(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(hf.compareFunction=e.isReversedDepthBuffer()?Fc:Lc,o=hf):o=t0,e.setTexture2D(t||o,r)}function CM(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||n0,r)}function IM(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||i0,r)}function LM(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||e0,r)}function FM(i){switch(i){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return bM;case 35674:return xM;case 35675:return yM;case 35676:return vM;case 5124:case 35670:return _M;case 35667:case 35671:return MM;case 35668:case 35672:return wM;case 35669:case 35673:return SM;case 5125:return TM;case 36294:return AM;case 36295:return EM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return LM}}function DM(i,t){i.uniform1fv(this.addr,t)}function kM(i,t){let e=Uo(t,this.size,2);i.uniform2fv(this.addr,e)}function OM(i,t){let e=Uo(t,this.size,3);i.uniform3fv(this.addr,e)}function NM(i,t){let e=Uo(t,this.size,4);i.uniform4fv(this.addr,e)}function UM(i,t){let e=Uo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function BM(i,t){let e=Uo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zM(i,t){let e=Uo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function VM(i,t){i.uniform1iv(this.addr,t)}function GM(i,t){i.uniform2iv(this.addr,t)}function HM(i,t){i.uniform3iv(this.addr,t)}function WM(i,t){i.uniform4iv(this.addr,t)}function XM(i,t){i.uniform1uiv(this.addr,t)}function $M(i,t){i.uniform2uiv(this.addr,t)}function YM(i,t){i.uniform3uiv(this.addr,t)}function qM(i,t){i.uniform4uiv(this.addr,t)}function KM(i,t,e){let n=this.cache,r=t.length,o=Bc(e,r);je(n,o)||(i.uniform1iv(this.addr,o),Qe(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=hf:s=t0;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||s,o[a])}function ZM(i,t,e){let n=this.cache,r=t.length,o=Bc(e,r);je(n,o)||(i.uniform1iv(this.addr,o),Qe(n,o));for(let s=0;s!==r;++s)e.setTexture3D(t[s]||n0,o[s])}function JM(i,t,e){let n=this.cache,r=t.length,o=Bc(e,r);je(n,o)||(i.uniform1iv(this.addr,o),Qe(n,o));for(let s=0;s!==r;++s)e.setTextureCube(t[s]||i0,o[s])}function jM(i,t,e){let n=this.cache,r=t.length,o=Bc(e,r);je(n,o)||(i.uniform1iv(this.addr,o),Qe(n,o));for(let s=0;s!==r;++s)e.setTexture2DArray(t[s]||e0,o[s])}function QM(i){switch(i){case 5126:return DM;case 35664:return kM;case 35665:return OM;case 35666:return NM;case 35674:return UM;case 35675:return BM;case 35676:return zM;case 5124:case 35670:return VM;case 35667:case 35671:return GM;case 35668:case 35672:return HM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return $M;case 36295:return YM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return ZM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return jM}}var ff=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=FM(e.type)}},df=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=QM(e.type)}},pf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(t,e[a.id],n)}}},cf=/(\w+)(\])?(\[|\.)?/g;function zm(i,t){i.seq.push(t),i.map[t.id]=t}function t2(i,t,e){let n=i.name,r=n.length;for(cf.lastIndex=0;;){let o=cf.exec(n),s=cf.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){zm(e,c===void 0?new ff(a,i,t):new df(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new pf(a),zm(e,u)),e=u}}}var No=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=t.getActiveUniform(e,s),l=t.getUniformLocation(e,a.name);t2(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,n,r){let o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,s=e.length;o!==s;++o){let a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,o=t.length;r!==o;++r){let s=t[r];s.id in e&&n.push(s)}return n}};function Vm(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var e2=37297,n2=0;function i2(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return n.join(`
`)}var Gm=new ne;function r2(i){ue._getMatrix(Gm,ue.workingColorSpace,i);let t=`mat3( ${Gm.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case xs:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Hm(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+o+`

`+i2(i.getShaderSource(t),a)}else return o}function o2(i,t){let e=r2(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var s2={[Ih]:"Linear",[Lh]:"Reinhard",[Fh]:"Cineon",[Dh]:"ACESFilmic",[Oh]:"AgX",[Nh]:"Neutral",[kh]:"Custom"};function a2(i,t){let e=s2[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var kc=new $;function l2(){ue.getLuminanceCoefficients(kc);let i=kc.x.toFixed(4),t=kc.y.toFixed(4),e=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function u2(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function h2(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(t,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[s]={type:o.type,location:i.getAttribLocation(t,s),locationSize:a}}return e}function Qs(i){return i!==""}function Wm(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xm(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var f2=/^[ \t]*#include +<([\w\d./]+)>/gm;function mf(i){return i.replace(f2,p2)}var d2=new Map;function p2(i,t){let e=ae[t];if(e===void 0){let n=d2.get(t);if(n!==void 0)e=ae[n],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return mf(e)}var m2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(i){return i.replace(m2,g2)}function g2(i,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Ym(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var b2={[Rr]:"SHADOWMAP_TYPE_PCF",[Lo]:"SHADOWMAP_TYPE_VSM"};function x2(i){return b2[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var y2={[Ji]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE_UV"};function v2(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":y2[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var _2={[Cr]:"ENVMAP_MODE_REFRACTION"};function M2(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":_2[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var w2={[Vs]:"ENVMAP_BLENDING_MULTIPLY",[sm]:"ENVMAP_BLENDING_MIX",[am]:"ENVMAP_BLENDING_ADD"};function S2(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":w2[i.combine]||"ENVMAP_BLENDING_NONE"}function T2(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function A2(i,t,e,n){let r=i.getContext(),o=e.defines,s=e.vertexShader,a=e.fragmentShader,l=x2(e),c=v2(e),h=M2(e),u=S2(e),f=T2(e),d=c2(e),p=u2(o),b=r.createProgram(),g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Qs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Qs).join(`
`),m.length>0&&(m+=`
`)):(g=[Ym(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),m=[Ym(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?ae.tonemapping_pars_fragment:"",e.toneMapping!==$n?a2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,o2("linearToOutputTexel",e.outputColorSpace),l2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),s=mf(s),s=Wm(s,e),s=Xm(s,e),a=mf(a),a=Wm(a,e),a=Xm(a,e),s=$m(s),a=$m(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=x+g+s,y=x+m+a,M=Vm(r,r.VERTEX_SHADER,_),w=Vm(r,r.FRAGMENT_SHADER,y);r.attachShader(b,M),r.attachShader(b,w),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function A(S){if(i.debug.checkShaderErrors){let P=r.getProgramInfoLog(b)||"",N=r.getShaderInfoLog(M)||"",D=r.getShaderInfoLog(w)||"",C=P.trim(),R=N.trim(),k=D.trim(),L=!0,O=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(L=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,M,w);else{let B=Hm(r,M,"vertex"),V=Hm(r,w,"fragment");Kt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+C+`
`+B+`
`+V)}else C!==""?Yt("WebGLProgram: Program Info Log:",C):(R===""||k==="")&&(O=!1);O&&(S.diagnostics={runnable:L,programLog:C,vertexShader:{log:R,prefix:g},fragmentShader:{log:k,prefix:m}})}r.deleteShader(M),r.deleteShader(w),v=new No(r,b),T=h2(r,b)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(b,e2)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=n2++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=w,this}var E2=0,gf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bf(t),e.set(t,n)),n}},bf=class{constructor(t){this.id=E2++,this.code=t,this.usedTimes=0}};function R2(i){return i===tr||i===qs||i===Ks}function P2(i,t,e,n,r,o){let s=new So,a=new gf,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function b(v,T,E,S,P,N){let D=S.fog,C=P.geometry,R=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?S.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,L=t.get(v.envMap||R,k),O=L&&L.mapping===Gs?L.image.height:null,B=d[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&Yt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let V=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,W=V!==void 0?V.length:0,z=0;C.morphAttributes.position!==void 0&&(z=1),C.morphAttributes.normal!==void 0&&(z=2),C.morphAttributes.color!==void 0&&(z=3);let q,j,ot,H;if(B){let Re=di[B];q=Re.vertexShader,j=Re.fragmentShader}else{q=v.vertexShader,j=v.fragmentShader;let Re=a.getVertexShaderStage(v),ye=a.getFragmentShaderStage(v);a.update(v,Re,ye),ot=Re.id,H=ye.id}let X=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),et=P.isInstancedMesh===!0,nt=P.isBatchedMesh===!0,ut=!!v.map,bt=!!v.matcap,ht=!!L,gt=!!v.aoMap,yt=!!v.lightMap,vt=!!v.bumpMap&&v.wireframe===!1,qt=!!v.normalMap,xe=!!v.displacementMap,pe=!!v.emissiveMap,me=!!v.metalnessMap,Ne=!!v.roughnessMap,Z=v.anisotropy>0,He=v.clearcoat>0,be=v.dispersion>0,G=v.retroreflectivity>0,I=v.iridescence>0,Q=v.sheen>0,st=v.transmission>0,lt=Z&&!!v.anisotropyMap,xt=He&&!!v.clearcoatMap,_t=He&&!!v.clearcoatNormalMap,ct=He&&!!v.clearcoatRoughnessMap,dt=I&&!!v.iridescenceMap,Mt=I&&!!v.iridescenceThicknessMap,Gt=Q&&!!v.sheenColorMap,Et=Q&&!!v.sheenRoughnessMap,wt=!!v.specularMap,Ht=!!v.specularColorMap,$t=!!v.specularIntensityMap,oe=st&&!!v.transmissionMap,J=st&&!!v.thicknessMap,St=!!v.gradientMap,ft=!!v.alphaMap,Tt=v.alphaTest>0,It=!!v.alphaHash,mt=!!v.extensions,Wt=$n;v.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Wt=i.toneMapping);let Ut={shaderID:B,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:j,defines:v.defines,customVertexShaderID:ot,customFragmentShaderID:H,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:nt,batchingColor:nt&&P._colorsTexture!==null,instancing:et,instancingColor:et&&P.instanceColor!==null,instancingMorph:et&&P.morphTexture!==null,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ut,matcap:bt,envMap:ht,envMapMode:ht&&L.mapping,envMapCubeUVHeight:O,aoMap:gt,lightMap:yt,bumpMap:vt,normalMap:qt,displacementMap:xe,emissiveMap:pe,normalMapObjectSpace:qt&&v.normalMapType===um,normalMapTangentSpace:qt&&v.normalMapType===Zs,packedNormalMap:qt&&v.normalMapType===Zs&&R2(v.normalMap.format),metalnessMap:me,roughnessMap:Ne,anisotropy:Z,anisotropyMap:lt,clearcoat:He,clearcoatMap:xt,clearcoatNormalMap:_t,clearcoatRoughnessMap:ct,dispersion:be,retroreflection:G,iridescence:I,iridescenceMap:dt,iridescenceThicknessMap:Mt,sheen:Q,sheenColorMap:Gt,sheenRoughnessMap:Et,specularMap:wt,specularColorMap:Ht,specularIntensityMap:$t,transmission:st,transmissionMap:oe,thicknessMap:J,gradientMap:St,opaque:v.transparent===!1&&v.blending===Mn&&v.alphaToCoverage===!1,alphaMap:ft,alphaTest:Tt,alphaHash:It,combine:v.combine,mapUv:ut&&p(v.map.channel),aoMapUv:gt&&p(v.aoMap.channel),lightMapUv:yt&&p(v.lightMap.channel),bumpMapUv:vt&&p(v.bumpMap.channel),normalMapUv:qt&&p(v.normalMap.channel),displacementMapUv:xe&&p(v.displacementMap.channel),emissiveMapUv:pe&&p(v.emissiveMap.channel),metalnessMapUv:me&&p(v.metalnessMap.channel),roughnessMapUv:Ne&&p(v.roughnessMap.channel),anisotropyMapUv:lt&&p(v.anisotropyMap.channel),clearcoatMapUv:xt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:_t&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Et&&p(v.sheenRoughnessMap.channel),specularMapUv:wt&&p(v.specularMap.channel),specularColorMapUv:Ht&&p(v.specularColorMap.channel),specularIntensityMapUv:$t&&p(v.specularIntensityMap.channel),transmissionMapUv:oe&&p(v.transmissionMap.channel),thicknessMapUv:J&&p(v.thicknessMap.channel),alphaMapUv:ft&&p(v.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(qt||Z),vertexNormals:!!C.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!C.attributes.uv&&(ut||ft),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||C.attributes.normal===void 0&&qt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:tt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:z,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:ut&&v.map.isVideoTexture===!0&&ue.getTransfer(v.map.colorSpace)===_e,decodeVideoTextureEmissive:pe&&v.emissiveMap.isVideoTexture===!0&&ue.getTransfer(v.emissiveMap.colorSpace)===_e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ie,flipSided:v.side===an,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:mt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&v.extensions.multiDraw===!0||nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function g(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let E in v.defines)T.push(E),T.push(v.defines[E]);return v.isRawShaderMaterial===!1&&(m(T,v),x(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function x(v,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.retroreflection&&s.enable(24),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),T.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function _(v){let T=d[v.type],E;if(T){let S=di[T];E=Rm.clone(S.uniforms)}else E=v.uniforms;return E}function y(v,T){let E=h.get(T);return E!==void 0?++E.usedTimes:(E=new A2(i,T,v,r),c.push(E),h.set(T,E)),E}function M(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function A(){a.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:_,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:A}}function C2(){let i=new WeakMap;function t(s){return i.has(s)}function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:o}}function I2(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function qm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Km(){let i=[],t=0,e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function s(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,b,g,m){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:s(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:m},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=s(f),x.groupOrder=b,x.renderOrder=f.renderOrder,x.z=g,x.group=m),t++,x}function l(f,d,p,b,g,m,x){x.reversedDepth===!0&&(g=-g);let _=a(f,d,p,b,g,m);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):e.push(_)}function c(f,d,p,b,g,m){let x=a(f,d,p,b,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?r.unshift(x):e.unshift(x)}function h(f,d){e.length>1&&e.sort(f||I2),n.length>1&&n.sort(d||qm),r.length>1&&r.sort(d||qm)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:u,sort:h}}function L2(){let i=new WeakMap;function t(n,r){let o=i.get(n),s;return o===void 0?(s=new Km,i.set(n,[s])):r>=o.length?(s=new Km,o.push(s)):s=o[r],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function F2(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new K};break;case"SpotLight":e={position:new $,direction:new $,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new K,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new K,groundColor:new K};break;case"RectAreaLight":e={color:new K,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function D2(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var k2=0;function O2(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function N2(i){let t=new F2,e=D2(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);let r=new $,o=new Me,s=new Me;function a(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,p=0,b=0,g=0,m=0,x=0,_=0,y=0,M=0,w=0,A=0,v=0,T=0,E=0;c.sort(O2);for(let P=0,N=c.length;P<N;P++){let D=c[P],C=D.color,R=D.intensity,k=D.distance,L=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===tr?L=D.shadow.map.texture:L=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=C.r*R,u+=C.g*R,f+=C.b*R;else if(D.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(D.sh.coefficients[O],R);E++}else if(D.isSunLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let B=D.shadow,V=e.get(D);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[p]=V,n.sunShadowMap[p]=L;let W=B.getViewportCount();for(let z=0;z<W;z++)n.sunShadowMatrix[b+z]=B.getMatrix(z),n.sunShadowCascade[b+z]=B._cascadeData[z];b+=W,p++}n.sun[d]=O,d++}else if(D.isDirectionalLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let B=D.shadow,V=e.get(D);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,n.directionalShadow[g]=V,n.directionalShadowMap[g]=L,n.directionalShadowMatrix[g]=D.shadow.matrix,M++}n.directional[g]=O,g++}else if(D.isSpotLight){let O=t.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(C).multiplyScalar(R),O.distance=k,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,n.spot[x]=O;let B=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,B.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[x]=B.matrix,D.castShadow){let V=e.get(D);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=L,A++}x++}else if(D.isRectAreaLight){let O=t.get(D);O.color.copy(C).multiplyScalar(R),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),n.rectArea[_]=O,_++}else if(D.isPointLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){let B=D.shadow,V=e.get(D);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,V.shadowCameraNear=B.camera.near,V.shadowCameraFar=B.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=L,n.pointShadowMatrix[m]=D.shadow.matrix,w++}n.point[m]=O,m++}else if(D.isHemisphereLight){let O=t.get(D);O.skyColor.copy(D.color).multiplyScalar(R),O.groundColor.copy(D.groundColor).multiplyScalar(R),n.hemi[y]=O,y++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let S=n.hash;(S.sunLength!==d||S.directionalLength!==g||S.pointLength!==m||S.spotLength!==x||S.rectAreaLength!==_||S.hemiLength!==y||S.numSunShadows!==p||S.numDirectionalShadows!==M||S.numPointShadows!==w||S.numSpotShadows!==A||S.numSpotMaps!==v||S.numLightProbes!==E)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=_,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,S.sunLength=d,S.directionalLength=g,S.pointLength=m,S.spotLength=x,S.rectAreaLength=_,S.hemiLength=y,S.numSunShadows=p,S.numDirectionalShadows=M,S.numPointShadows=w,S.numSpotShadows=A,S.numSpotMaps=v,S.numLightProbes=E,n.version=k2++)}function l(c,h){let u=0,f=0,d=0,p=0,b=0,g=0,m=h.matrixWorldInverse;for(let x=0,_=c.length;x<_;x++){let y=c[x];if(y.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),u++}else if(y.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(y.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),s.identity(),o.copy(y.matrixWorld),o.premultiply(m),s.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),b++}else if(y.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Zm(i){let t=new N2(i),e=[],n=[],r=[];function o(f){u.camera=f,e.length=0,n.length=0,r.length=0}function s(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:u,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:a,pushLightProbeGrid:l}}function U2(i){let t=new WeakMap;function e(r,o=0){let s=t.get(r),a;return s===void 0?(a=new Zm(i),t.set(r,[a])):o>=s.length?(a=new Zm(i),s.push(a)):a=s[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var B2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z2=`uniform sampler2D shadow_pass;
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
}`,V2=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],G2=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Jm=new Me,js=new $,uf=new $;function H2(i,t,e){let n=new Eo,r=new Zt,o=new Zt,s=new ke,a=new Co,l=new Ll,c={},h=e.maxTextureSize,u={[hi]:an,[an]:hi,[ie]:ie},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:B2,fragmentShader:z2}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Vt;p.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new At(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rr;let m=this.type;this.render=function(w,A,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Vp&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rr);let T=i.getRenderTarget(),E=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Dn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let N=m!==this.type;N&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(C=>C.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,C=w.length;D<C;D++){let R=w[D],k=R.shadow;if(k===void 0){Yt("WebGLShadowMap:",R,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let L=k.getFrameExtents();r.multiply(L),o.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/L.x),r.x=o.x*L.x,k.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/L.y),r.y=o.y*L.y,k.mapSize.y=o.y));let O=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=O,k.map===null||N===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Lo){if(R.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new qe(r.x,r.y,{format:tr,type:Kn,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),k.map.texture.name=R.name+".shadowMap",k.map.depthTexture=new ui(r.x,r.y,qn),k.map.depthTexture.name=R.name+".shadowMapDepth",k.map.depthTexture.format=oi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=on,k.map.depthTexture.magFilter=on}else R.isPointLight?(k.map=new Nc(r.x),k.map.depthTexture=new Cl(r.x,Yn)):(k.map=new qe(r.x,r.y),k.map.depthTexture=new ui(r.x,r.y,Yn)),k.map.depthTexture.name=R.name+".shadowMap",k.map.depthTexture.format=oi,this.type===Rr?(k.map.depthTexture.compareFunction=O?Fc:Lc,k.map.depthTexture.minFilter=Ye,k.map.depthTexture.magFilter=Ye):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=on,k.map.depthTexture.magFilter=on);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==r.x||k.map.height!==r.y)&&k.map.setSize(r.x,r.y);let B=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();R.isPointLight!==!0&&k.updateMatrices(R,v);for(let V=0;V<B;V++){let W=k.getCamera(V);if(R.isPointLight){let z=k.camera,q=k.matrix,j=R.distance||z.far;j!==z.far&&(z.far=j,z.updateProjectionMatrix()),js.setFromMatrixPosition(R.matrixWorld),z.position.copy(js),uf.copy(z.position),uf.add(V2[V]),z.up.copy(G2[V]),z.lookAt(uf),z.updateMatrixWorld(),q.makeTranslation(-js.x,-js.y,-js.z),Jm.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Jm,z.coordinateSystem,z.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,V),i.clear();else{V===0&&(i.setRenderTarget(k.map),i.clear());let z=k.getViewport(V);s.set(o.x*z.x,o.y*z.y,o.x*z.z,o.y*z.w),P.viewport(s)}n=k.getFrustum(V),y(A,v,W,R,this.type)}k.isPointLightShadow!==!0&&this.type===Lo&&x(k,v),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,E,S)};function x(w,A){let v=t.update(b);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new qe(r.x,r.y,{format:tr,type:Kn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,v,f,b,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,v,d,b,null)}function _(w,A,v,T){let E=null,S=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)E=S;else if(E=v.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let P=E.uuid,N=A.uuid,D=c[P];D===void 0&&(D={},c[P]=D);let C=D[N];C===void 0&&(C=E.clone(),D[N]=C,A.addEventListener("dispose",M)),E=C}if(E.visible=A.visible,E.wireframe=A.wireframe,T===Lo?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:u[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,v.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let P=i.properties.get(E);P.light=v}return E}function y(w,A,v,T,E){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Lo)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let N=t.update(w),D=w.material;if(Array.isArray(D)){let C=N.groups;for(let R=0,k=C.length;R<k;R++){let L=C[R],O=D[L.materialIndex];if(O&&O.visible){let B=_(w,O,T,E);w.onBeforeShadow(i,w,A,v,N,B,L),i.renderBufferDirect(v,null,N,B,w,L),w.onAfterShadow(i,w,A,v,N,B,L)}}}else if(D.visible){let C=_(w,D,T,E);w.onBeforeShadow(i,w,A,v,N,C,null),i.renderBufferDirect(v,null,N,C,w,null),w.onAfterShadow(i,w,A,v,N,C,null)}}let P=w.children;for(let N=0,D=P.length;N<D;N++)y(P[N],A,v,T,E)}function M(w){w.target.removeEventListener("dispose",M);for(let v in c){let T=c[v],E=w.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}function W2(i,t){function e(){let J=!1,St=new ke,ft=null,Tt=new ke(0,0,0,0);return{setMask:function(It){ft!==It&&!J&&(i.colorMask(It,It,It,It),ft=It)},setLocked:function(It){J=It},setClear:function(It,mt,Wt,Ut,Re){Re===!0&&(It*=Ut,mt*=Ut,Wt*=Ut),St.set(It,mt,Wt,Ut),Tt.equals(St)===!1&&(i.clearColor(It,mt,Wt,Ut),Tt.copy(St))},reset:function(){J=!1,ft=null,Tt.set(-1,0,0,0)}}}function n(){let J=!1,St=!1,ft=null,Tt=null,It=null;return{setReversed:function(mt){if(St!==mt){let Wt=t.get("EXT_clip_control");mt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),St=mt;let Ut=It;It=null,this.setClear(Ut)}},getReversed:function(){return St},setTest:function(mt){mt?X(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(mt){ft!==mt&&!J&&(i.depthMask(mt),ft=mt)},setFunc:function(mt){if(St&&(mt=_m[mt]),Tt!==mt){switch(mt){case fl:i.depthFunc(i.NEVER);break;case dl:i.depthFunc(i.ALWAYS);break;case pl:i.depthFunc(i.LESS);break;case yo:i.depthFunc(i.LEQUAL);break;case ml:i.depthFunc(i.EQUAL);break;case gl:i.depthFunc(i.GEQUAL);break;case bl:i.depthFunc(i.GREATER);break;case xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=mt}},setLocked:function(mt){J=mt},setClear:function(mt){It!==mt&&(It=mt,St&&(mt=1-mt),i.clearDepth(mt))},reset:function(){J=!1,ft=null,Tt=null,It=null,St=!1}}}function r(){let J=!1,St=null,ft=null,Tt=null,It=null,mt=null,Wt=null,Ut=null,Re=null;return{setTest:function(ye){J||(ye?X(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(ye){St!==ye&&!J&&(i.stencilMask(ye),St=ye)},setFunc:function(ye,Bn,ei){(ft!==ye||Tt!==Bn||It!==ei)&&(i.stencilFunc(ye,Bn,ei),ft=ye,Tt=Bn,It=ei)},setOp:function(ye,Bn,ei){(mt!==ye||Wt!==Bn||Ut!==ei)&&(i.stencilOp(ye,Bn,ei),mt=ye,Wt=Bn,Ut=ei)},setLocked:function(ye){J=ye},setClear:function(ye){Re!==ye&&(i.clearStencil(ye),Re=ye)},reset:function(){J=!1,St=null,ft=null,Tt=null,It=null,mt=null,Wt=null,Ut=null,Re=null}}}let o=new e,s=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],b=null,g=!1,m=null,x=null,_=null,y=null,M=null,w=null,A=null,v=new K(0,0,0),T=0,E=!1,S=null,P=null,N=null,D=null,C=null,R=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,L=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(O)[1]),k=L>=1):O.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),k=L>=2);let B=null,V={},W=i.getParameter(i.SCISSOR_BOX),z=i.getParameter(i.VIEWPORT),q=new ke().fromArray(W),j=new ke().fromArray(z);function ot(J,St,ft,Tt){let It=new Uint8Array(4),mt=i.createTexture();i.bindTexture(J,mt),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<ft;Wt++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(St+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return mt}let H={};H[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),X(i.DEPTH_TEST),s.setFunc(yo),vt(!1),qt(Ah),X(i.CULL_FACE),gt(Dn);function X(J){h[J]!==!0&&(i.enable(J),h[J]=!0)}function tt(J){h[J]!==!1&&(i.disable(J),h[J]=!1)}function et(J,St){return f[J]!==St?(i.bindFramebuffer(J,St),f[J]=St,J===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=St),J===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=St),!0):!1}function nt(J,St){let ft=p,Tt=!1;if(J){ft=d.get(St),ft===void 0&&(ft=[],d.set(St,ft));let It=J.textures;if(ft.length!==It.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Wt=It.length;mt<Wt;mt++)ft[mt]=i.COLOR_ATTACHMENT0+mt;ft.length=It.length,Tt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(ft)}function ut(J){return b!==J?(i.useProgram(J),b=J,!0):!1}let bt={[Pr]:i.FUNC_ADD,[Hp]:i.FUNC_SUBTRACT,[Wp]:i.FUNC_REVERSE_SUBTRACT};bt[Xp]=i.MIN,bt[$p]=i.MAX;let ht={[Yp]:i.ZERO,[qp]:i.ONE,[Kp]:i.SRC_COLOR,[Ph]:i.SRC_ALPHA,[em]:i.SRC_ALPHA_SATURATE,[Qp]:i.DST_COLOR,[Jp]:i.DST_ALPHA,[Zp]:i.ONE_MINUS_SRC_COLOR,[Ch]:i.ONE_MINUS_SRC_ALPHA,[tm]:i.ONE_MINUS_DST_COLOR,[jp]:i.ONE_MINUS_DST_ALPHA,[nm]:i.CONSTANT_COLOR,[im]:i.ONE_MINUS_CONSTANT_COLOR,[rm]:i.CONSTANT_ALPHA,[om]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(J,St,ft,Tt,It,mt,Wt,Ut,Re,ye){if(J===Dn){g===!0&&(tt(i.BLEND),g=!1);return}if(g===!1&&(X(i.BLEND),g=!0),J!==Gp){if(J!==m||ye!==E){if((x!==Pr||M!==Pr)&&(i.blendEquation(i.FUNC_ADD),x=Pr,M=Pr),ye)switch(J){case Mn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ee:i.blendFunc(i.ONE,i.ONE);break;case Rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",J);break}else switch(J){case Mn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ee:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rh:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zs:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",J);break}_=null,y=null,w=null,A=null,v.set(0,0,0),T=0,m=J,E=ye}return}It=It||St,mt=mt||ft,Wt=Wt||Tt,(St!==x||It!==M)&&(i.blendEquationSeparate(bt[St],bt[It]),x=St,M=It),(ft!==_||Tt!==y||mt!==w||Wt!==A)&&(i.blendFuncSeparate(ht[ft],ht[Tt],ht[mt],ht[Wt]),_=ft,y=Tt,w=mt,A=Wt),(Ut.equals(v)===!1||Re!==T)&&(i.blendColor(Ut.r,Ut.g,Ut.b,Re),v.copy(Ut),T=Re),m=J,E=!1}function yt(J,St){J.side===ie?tt(i.CULL_FACE):X(i.CULL_FACE);let ft=J.side===an;St&&(ft=!ft),vt(ft),J.blending===Mn&&J.transparent===!1?gt(Dn):gt(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),s.setFunc(J.depthFunc),s.setTest(J.depthTest),s.setMask(J.depthWrite),o.setMask(J.colorWrite);let Tt=J.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),pe(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(J){S!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),S=J)}function qt(J){J!==Bp?(X(i.CULL_FACE),J!==P&&(J===Ah?i.cullFace(i.BACK):J===zp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),P=J}function xe(J){J!==N&&(k&&i.lineWidth(J),N=J)}function pe(J,St,ft){J?(X(i.POLYGON_OFFSET_FILL),(D!==St||C!==ft)&&(D=St,C=ft,s.getReversed()&&(St=-St),i.polygonOffset(St,ft))):tt(i.POLYGON_OFFSET_FILL)}function me(J){J?X(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function Ne(J){J===void 0&&(J=i.TEXTURE0+R-1),B!==J&&(i.activeTexture(J),B=J)}function Z(J,St,ft){ft===void 0&&(B===null?ft=i.TEXTURE0+R-1:ft=B);let Tt=V[ft];Tt===void 0&&(Tt={type:void 0,texture:void 0},V[ft]=Tt),(Tt.type!==J||Tt.texture!==St)&&(B!==ft&&(i.activeTexture(ft),B=ft),i.bindTexture(J,St||H[J]),Tt.type=J,Tt.texture=St)}function He(){let J=V[B];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function be(){try{i.compressedTexImage2D(...arguments)}catch(J){Kt("WebGLState:",J)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(J){Kt("WebGLState:",J)}}function I(){try{i.texSubImage2D(...arguments)}catch(J){Kt("WebGLState:",J)}}function Q(){try{i.texSubImage3D(...arguments)}catch(J){Kt("WebGLState:",J)}}function st(){try{i.compressedTexSubImage2D(...arguments)}catch(J){Kt("WebGLState:",J)}}function lt(){try{i.compressedTexSubImage3D(...arguments)}catch(J){Kt("WebGLState:",J)}}function xt(){try{i.texStorage2D(...arguments)}catch(J){Kt("WebGLState:",J)}}function _t(){try{i.texStorage3D(...arguments)}catch(J){Kt("WebGLState:",J)}}function ct(){try{i.texImage2D(...arguments)}catch(J){Kt("WebGLState:",J)}}function dt(){try{i.texImage3D(...arguments)}catch(J){Kt("WebGLState:",J)}}function Mt(J){return u[J]!==void 0?u[J]:i.getParameter(J)}function Gt(J,St){u[J]!==St&&(i.pixelStorei(J,St),u[J]=St)}function Et(J){q.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),q.copy(J))}function wt(J){j.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),j.copy(J))}function Ht(J,St){let ft=c.get(St);ft===void 0&&(ft=new WeakMap,c.set(St,ft));let Tt=ft.get(J);Tt===void 0&&(Tt=i.getUniformBlockIndex(St,J.name),ft.set(J,Tt))}function $t(J,St){let Tt=c.get(St).get(J);l.get(St)!==Tt&&(i.uniformBlockBinding(St,Tt,J.__bindingPointIndex),l.set(St,Tt))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},B=null,V={},f={},d=new WeakMap,p=[],b=null,g=!1,m=null,x=null,_=null,y=null,M=null,w=null,A=null,v=new K(0,0,0),T=0,E=!1,S=null,P=null,N=null,D=null,C=null,q.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:X,disable:tt,bindFramebuffer:et,drawBuffers:nt,useProgram:ut,setBlending:gt,setMaterial:yt,setFlipSided:vt,setCullFace:qt,setLineWidth:xe,setPolygonOffset:pe,setScissorTest:me,activeTexture:Ne,bindTexture:Z,unbindTexture:He,compressedTexImage2D:be,compressedTexImage3D:G,texImage2D:ct,texImage3D:dt,pixelStorei:Gt,getParameter:Mt,updateUBOMapping:Ht,uniformBlockBinding:$t,texStorage2D:xt,texStorage3D:_t,texSubImage2D:I,texSubImage3D:Q,compressedTexSubImage2D:st,compressedTexSubImage3D:lt,scissor:Et,viewport:wt,reset:oe}}function X2(i,t,e,n,r,o,s){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Zt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(G,I){return p?new OffscreenCanvas(G,I):_o("canvas")}function g(G,I,Q){let st=1,lt=be(G);if((lt.width>Q||lt.height>Q)&&(st=Q/Math.max(lt.width,lt.height)),st<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){let xt=Math.floor(st*lt.width),_t=Math.floor(st*lt.height);f===void 0&&(f=b(xt,_t));let ct=I?b(xt,_t):f;return ct.width=xt,ct.height=_t,ct.getContext("2d").drawImage(G,0,0,xt,_t),Yt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+xt+"x"+_t+")."),ct}else return"data"in G&&Yt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),G;return G}function m(G){return G.generateMipmaps}function x(G){i.generateMipmap(G)}function _(G){return G.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?i.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(G,I,Q,st,lt,xt=!1){if(G!==null){if(i[G]!==void 0)return i[G];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let _t;st&&(_t=t.get("EXT_texture_norm16"),_t||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=I;if(I===i.RED&&(Q===i.FLOAT&&(ct=i.R32F),Q===i.HALF_FLOAT&&(ct=i.R16F),Q===i.UNSIGNED_BYTE&&(ct=i.R8),Q===i.UNSIGNED_SHORT&&_t&&(ct=_t.R16_EXT),Q===i.SHORT&&_t&&(ct=_t.R16_SNORM_EXT)),I===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ct=i.R8UI),Q===i.UNSIGNED_SHORT&&(ct=i.R16UI),Q===i.UNSIGNED_INT&&(ct=i.R32UI),Q===i.BYTE&&(ct=i.R8I),Q===i.SHORT&&(ct=i.R16I),Q===i.INT&&(ct=i.R32I)),I===i.RG&&(Q===i.FLOAT&&(ct=i.RG32F),Q===i.HALF_FLOAT&&(ct=i.RG16F),Q===i.UNSIGNED_BYTE&&(ct=i.RG8),Q===i.UNSIGNED_SHORT&&_t&&(ct=_t.RG16_EXT),Q===i.SHORT&&_t&&(ct=_t.RG16_SNORM_EXT)),I===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ct=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ct=i.RG16UI),Q===i.UNSIGNED_INT&&(ct=i.RG32UI),Q===i.BYTE&&(ct=i.RG8I),Q===i.SHORT&&(ct=i.RG16I),Q===i.INT&&(ct=i.RG32I)),I===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),Q===i.UNSIGNED_INT&&(ct=i.RGB32UI),Q===i.BYTE&&(ct=i.RGB8I),Q===i.SHORT&&(ct=i.RGB16I),Q===i.INT&&(ct=i.RGB32I)),I===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),Q===i.UNSIGNED_INT&&(ct=i.RGBA32UI),Q===i.BYTE&&(ct=i.RGBA8I),Q===i.SHORT&&(ct=i.RGBA16I),Q===i.INT&&(ct=i.RGBA32I)),I===i.RGB&&(Q===i.UNSIGNED_SHORT&&_t&&(ct=_t.RGB16_EXT),Q===i.SHORT&&_t&&(ct=_t.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ct=i.R11F_G11F_B10F)),I===i.RGBA){let dt=xt?xs:ue.getTransfer(lt);Q===i.FLOAT&&(ct=i.RGBA32F),Q===i.HALF_FLOAT&&(ct=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ct=dt===_e?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&_t&&(ct=_t.RGBA16_EXT),Q===i.SHORT&&_t&&(ct=_t.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function M(G,I){let Q;return G?I===null||I===Yn||I===Do?Q=i.DEPTH24_STENCIL8:I===qn?Q=i.DEPTH32F_STENCIL8:I===Fo&&(Q=i.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===Yn||I===Do?Q=i.DEPTH_COMPONENT24:I===qn?Q=i.DEPTH_COMPONENT32F:I===Fo&&(Q=i.DEPTH_COMPONENT16),Q}function w(G,I){return m(G)===!0||G.isFramebufferTexture&&G.minFilter!==on&&G.minFilter!==Ye?Math.log2(Math.max(I.width,I.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?I.mipmaps.length:1}function A(G){let I=G.target;I.removeEventListener("dispose",A),T(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function v(G){let I=G.target;I.removeEventListener("dispose",v),S(I)}function T(G){let I=n.get(G);if(I.__webglInit===void 0)return;let Q=G.source,st=d.get(Q);if(st){let lt=st[I.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&E(G),Object.keys(st).length===0&&d.delete(Q)}n.remove(G)}function E(G){let I=n.get(G);i.deleteTexture(I.__webglTexture);let Q=G.source,st=d.get(Q);delete st[I.__cacheKey],s.memory.textures--}function S(G){let I=n.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),n.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(I.__webglFramebuffer[st]))for(let lt=0;lt<I.__webglFramebuffer[st].length;lt++)i.deleteFramebuffer(I.__webglFramebuffer[st][lt]);else i.deleteFramebuffer(I.__webglFramebuffer[st]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[st])}else{if(Array.isArray(I.__webglFramebuffer))for(let st=0;st<I.__webglFramebuffer.length;st++)i.deleteFramebuffer(I.__webglFramebuffer[st]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let st=0;st<I.__webglColorRenderbuffer.length;st++)I.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[st]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let Q=G.textures;for(let st=0,lt=Q.length;st<lt;st++){let xt=n.get(Q[st]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),s.memory.textures--),n.remove(Q[st])}n.remove(G)}let P=0;function N(){P=0}function D(){return P}function C(G){P=G}function R(){let G=P;return G>=r.maxTextures&&Yt("WebGLTextures: Trying to use "+(G+1)+" texture units while this GPU supports only "+r.maxTextures),P+=1,G}function k(G){let I=[];return I.push(G.wrapS),I.push(G.wrapT),I.push(G.wrapR||0),I.push(G.magFilter),I.push(G.minFilter),I.push(G.anisotropy),I.push(G.internalFormat),I.push(G.format),I.push(G.type),I.push(G.generateMipmaps),I.push(G.premultiplyAlpha),I.push(G.flipY),I.push(G.unpackAlignment),I.push(G.colorSpace),I.join()}function L(G,I){let Q=n.get(G);if(G.isVideoTexture&&Z(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&Q.__version!==G.version){let st=G.image;if(st===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(Q,G,I);return}}else G.isExternalTexture&&(Q.__webglTexture=G.sourceTexture?G.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+I)}function O(G,I){let Q=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&Q.__version!==G.version){tt(Q,G,I);return}else G.isExternalTexture&&(Q.__webglTexture=G.sourceTexture?G.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+I)}function B(G,I){let Q=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&Q.__version!==G.version){tt(Q,G,I);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+I)}function V(G,I){let Q=n.get(G);if(G.isCubeDepthTexture!==!0&&G.version>0&&Q.__version!==G.version){et(Q,G,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+I)}let W={[Mr]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[yl]:i.MIRRORED_REPEAT},z={[on]:i.NEAREST,[lm]:i.NEAREST_MIPMAP_NEAREST,[Hs]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[Kl]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},q={[fm]:i.NEVER,[bm]:i.ALWAYS,[dm]:i.LESS,[Lc]:i.LEQUAL,[pm]:i.EQUAL,[Fc]:i.GEQUAL,[mm]:i.GREATER,[gm]:i.NOTEQUAL};function j(G,I){if(I.type===qn&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===Ye||I.magFilter===Kl||I.magFilter===Hs||I.magFilter===ji||I.minFilter===Ye||I.minFilter===Kl||I.minFilter===Hs||I.minFilter===ji)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(G,i.TEXTURE_WRAP_S,W[I.wrapS]),i.texParameteri(G,i.TEXTURE_WRAP_T,W[I.wrapT]),(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)&&i.texParameteri(G,i.TEXTURE_WRAP_R,W[I.wrapR]),i.texParameteri(G,i.TEXTURE_MAG_FILTER,z[I.magFilter]),i.texParameteri(G,i.TEXTURE_MIN_FILTER,z[I.minFilter]),I.compareFunction&&(i.texParameteri(G,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(G,i.TEXTURE_COMPARE_FUNC,q[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===on||I.minFilter!==Hs&&I.minFilter!==ji||I.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(G,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function ot(G,I){let Q=!1;G.__webglInit===void 0&&(G.__webglInit=!0,I.addEventListener("dispose",A));let st=I.source,lt=d.get(st);lt===void 0&&(lt={},d.set(st,lt));let xt=k(I);if(xt!==G.__cacheKey){lt[xt]===void 0&&(lt[xt]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,Q=!0),lt[xt].usedTimes++;let _t=lt[G.__cacheKey];_t!==void 0&&(lt[G.__cacheKey].usedTimes--,_t.usedTimes===0&&E(I)),G.__cacheKey=xt,G.__webglTexture=lt[xt].texture}return Q}function H(G,I,Q){return Math.floor(Math.floor(G/Q)/I)}function X(G,I,Q,st){let xt=G.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,I.width,I.height,Q,st,I.data);else{xt.sort((Gt,Et)=>Gt.start-Et.start);let _t=0;for(let Gt=1;Gt<xt.length;Gt++){let Et=xt[_t],wt=xt[Gt],Ht=Et.start+Et.count,$t=H(wt.start,I.width,4),oe=H(Et.start,I.width,4);wt.start<=Ht+1&&$t===oe&&H(wt.start+wt.count-1,I.width,4)===$t?Et.count=Math.max(Et.count,wt.start+wt.count-Et.start):(++_t,xt[_t]=wt)}xt.length=_t+1;let ct=e.getParameter(i.UNPACK_ROW_LENGTH),dt=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,I.width);for(let Gt=0,Et=xt.length;Gt<Et;Gt++){let wt=xt[Gt],Ht=Math.floor(wt.start/4),$t=Math.ceil(wt.count/4),oe=Ht%I.width,J=Math.floor(Ht/I.width),St=$t,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),e.pixelStorei(i.UNPACK_SKIP_ROWS,J),e.texSubImage2D(i.TEXTURE_2D,0,oe,J,St,ft,Q,st,I.data)}G.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ct),e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function tt(G,I,Q){let st=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(st=i.TEXTURE_3D);let lt=ot(G,I),xt=I.source;e.bindTexture(st,G.__webglTexture,i.TEXTURE0+Q);let _t=n.get(xt);if(xt.version!==_t.__version||lt===!0){if(e.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let ft=ue.getPrimaries(ue.workingColorSpace),Tt=I.colorSpace===Pi?null:ue.getPrimaries(I.colorSpace),It=I.colorSpace===Pi||ft===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment);let dt=g(I.image,!1,r.maxTextureSize);dt=He(I,dt);let Mt=o.convert(I.format,I.colorSpace),Gt=o.convert(I.type),Et=y(I.internalFormat,Mt,Gt,I.normalized,I.colorSpace,I.isVideoTexture);j(st,I);let wt,Ht=I.mipmaps,$t=I.isVideoTexture!==!0,oe=_t.__version===void 0||lt===!0,J=xt.dataReady,St=w(I,dt);if(I.isDepthTexture)Et=M(I.format===Qi,I.type),oe&&($t?e.texStorage2D(i.TEXTURE_2D,1,Et,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Et,dt.width,dt.height,0,Mt,Gt,null));else if(I.isDataTexture)if(Ht.length>0){$t&&oe&&e.texStorage2D(i.TEXTURE_2D,St,Et,Ht[0].width,Ht[0].height);for(let ft=0,Tt=Ht.length;ft<Tt;ft++)wt=Ht[ft],$t?J&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,wt.width,wt.height,Mt,Gt,wt.data):e.texImage2D(i.TEXTURE_2D,ft,Et,wt.width,wt.height,0,Mt,Gt,wt.data);I.generateMipmaps=!1}else $t?(oe&&e.texStorage2D(i.TEXTURE_2D,St,Et,dt.width,dt.height),J&&X(I,dt,Mt,Gt)):e.texImage2D(i.TEXTURE_2D,0,Et,dt.width,dt.height,0,Mt,Gt,dt.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){$t&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Et,Ht[0].width,Ht[0].height,dt.depth);for(let ft=0,Tt=Ht.length;ft<Tt;ft++)if(wt=Ht[ft],I.format!==kn)if(Mt!==null)if($t){if(J)if(I.layerUpdates.size>0){let It=jh(wt.width,wt.height,I.format,I.type);for(let mt of I.layerUpdates){let Wt=wt.data.subarray(mt*It/wt.data.BYTES_PER_ELEMENT,(mt+1)*It/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,mt,wt.width,wt.height,1,Mt,Wt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,wt.width,wt.height,dt.depth,Mt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Et,wt.width,wt.height,dt.depth,0,wt.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?J&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,wt.width,wt.height,dt.depth,Mt,Gt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Et,wt.width,wt.height,dt.depth,0,Mt,Gt,wt.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{$t&&oe&&e.texStorage2D(i.TEXTURE_2D,St,Et,Ht[0].width,Ht[0].height);for(let ft=0,Tt=Ht.length;ft<Tt;ft++)wt=Ht[ft],I.format!==kn?Mt!==null?$t?J&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,wt.width,wt.height,Mt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Et,wt.width,wt.height,0,wt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?J&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,wt.width,wt.height,Mt,Gt,wt.data):e.texImage2D(i.TEXTURE_2D,ft,Et,wt.width,wt.height,0,Mt,Gt,wt.data)}else if(I.isDataArrayTexture)if($t){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Et,dt.width,dt.height,dt.depth),J)if(I.layerUpdates.size>0){let ft=jh(dt.width,dt.height,I.format,I.type);for(let Tt of I.layerUpdates){let It=dt.data.subarray(Tt*ft/dt.data.BYTES_PER_ELEMENT,(Tt+1)*ft/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,dt.width,dt.height,1,Mt,Gt,It)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Mt,Gt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,dt.width,dt.height,dt.depth,0,Mt,Gt,dt.data);else if(I.isData3DTexture)$t?(oe&&e.texStorage3D(i.TEXTURE_3D,St,Et,dt.width,dt.height,dt.depth),J&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Mt,Gt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Et,dt.width,dt.height,dt.depth,0,Mt,Gt,dt.data);else if(I.isFramebufferTexture){if(oe)if($t)e.texStorage2D(i.TEXTURE_2D,St,Et,dt.width,dt.height);else{let ft=dt.width,Tt=dt.height;for(let It=0;It<St;It++)e.texImage2D(i.TEXTURE_2D,It,Et,ft,Tt,0,Mt,Gt,null),ft>>=1,Tt>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in i){let ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),dt.parentNode!==ft){ft.appendChild(dt),u.add(I),ft.onpaint=Tt=>{let It=Tt.changedElements;for(let mt of u)It.includes(mt.image)&&(mt.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,dt);else{let It=i.RGBA,mt=i.RGBA,Wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,It,mt,Wt,dt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ht.length>0){if($t&&oe){let ft=be(Ht[0]);e.texStorage2D(i.TEXTURE_2D,St,Et,ft.width,ft.height)}for(let ft=0,Tt=Ht.length;ft<Tt;ft++)wt=Ht[ft],$t?J&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Mt,Gt,wt):e.texImage2D(i.TEXTURE_2D,ft,Et,Mt,Gt,wt);I.generateMipmaps=!1}else if($t){if(oe){let ft=be(dt);e.texStorage2D(i.TEXTURE_2D,St,Et,ft.width,ft.height)}J&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Gt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Et,Mt,Gt,dt);m(I)&&x(st),_t.__version=xt.version,I.onUpdate&&I.onUpdate(I)}G.__version=I.version}function et(G,I,Q){if(I.image.length!==6)return;let st=ot(G,I),lt=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+Q);let xt=n.get(lt);if(lt.version!==xt.__version||st===!0){e.activeTexture(i.TEXTURE0+Q);let _t=ue.getPrimaries(ue.workingColorSpace),ct=I.colorSpace===Pi?null:ue.getPrimaries(I.colorSpace),dt=I.colorSpace===Pi||_t===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Mt=I.isCompressedTexture||I.image[0].isCompressedTexture,Gt=I.image[0]&&I.image[0].isDataTexture,Et=[];for(let mt=0;mt<6;mt++)!Mt&&!Gt?Et[mt]=g(I.image[mt],!0,r.maxCubemapSize):Et[mt]=Gt?I.image[mt].image:I.image[mt],Et[mt]=He(I,Et[mt]);let wt=Et[0],Ht=o.convert(I.format,I.colorSpace),$t=o.convert(I.type),oe=y(I.internalFormat,Ht,$t,I.normalized,I.colorSpace),J=I.isVideoTexture!==!0,St=xt.__version===void 0||st===!0,ft=lt.dataReady,Tt=w(I,wt);j(i.TEXTURE_CUBE_MAP,I);let It;if(Mt){J&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,oe,wt.width,wt.height);for(let mt=0;mt<6;mt++){It=Et[mt].mipmaps;for(let Wt=0;Wt<It.length;Wt++){let Ut=It[Wt];I.format!==kn?Ht!==null?J?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,0,0,Ut.width,Ut.height,Ht,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,oe,Ut.width,Ut.height,0,Ut.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,0,0,Ut.width,Ut.height,Ht,$t,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,oe,Ut.width,Ut.height,0,Ht,$t,Ut.data)}}}else{if(It=I.mipmaps,J&&St){It.length>0&&Tt++;let mt=be(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,oe,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Gt){J?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Et[mt].width,Et[mt].height,Ht,$t,Et[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,oe,Et[mt].width,Et[mt].height,0,Ht,$t,Et[mt].data);for(let Wt=0;Wt<It.length;Wt++){let Re=It[Wt].image[mt].image;J?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,0,0,Re.width,Re.height,Ht,$t,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,oe,Re.width,Re.height,0,Ht,$t,Re.data)}}else{J?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Ht,$t,Et[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,oe,Ht,$t,Et[mt]);for(let Wt=0;Wt<It.length;Wt++){let Ut=It[Wt];J?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,0,0,Ht,$t,Ut.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,oe,Ht,$t,Ut.image[mt])}}}m(I)&&x(i.TEXTURE_CUBE_MAP),xt.__version=lt.version,I.onUpdate&&I.onUpdate(I)}G.__version=I.version}function nt(G,I,Q,st,lt,xt){let _t=o.convert(Q.format,Q.colorSpace),ct=o.convert(Q.type),dt=y(Q.internalFormat,_t,ct,Q.normalized,Q.colorSpace),Mt=n.get(I),Gt=n.get(Q);if(Gt.__renderTarget=I,!Mt.__hasExternalTextures){let Et=Math.max(1,I.width>>xt),wt=Math.max(1,I.height>>xt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,xt,dt,Et,wt,I.depth,0,_t,ct,null):e.texImage2D(lt,xt,dt,Et,wt,0,_t,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,G),Ne(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,lt,Gt.__webglTexture,0,me(I)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,lt,Gt.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(G,I,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,G),I.depthBuffer){let st=I.depthTexture,lt=st&&st.isDepthTexture?st.type:null,xt=M(I.stencilBuffer,lt),_t=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ne(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(I),xt,I.width,I.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(I),xt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,xt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,G)}else{let st=I.textures;for(let lt=0;lt<st.length;lt++){let xt=st[lt],_t=o.convert(xt.format,xt.colorSpace),ct=o.convert(xt.type),dt=y(xt.internalFormat,_t,ct,xt.normalized,xt.colorSpace);Ne(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(I),dt,I.width,I.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(I),dt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,dt,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(G,I,Q){let st=I.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,G),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let lt=n.get(I.depthTexture);if(lt.__renderTarget=I,(!lt.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),st){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,I.depthTexture.addEventListener("dispose",A)),lt.__webglTexture===void 0){lt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),j(i.TEXTURE_CUBE_MAP,I.depthTexture);let Mt=o.convert(I.depthTexture.format),Gt=o.convert(I.depthTexture.type),Et;I.depthTexture.format===oi?Et=i.DEPTH_COMPONENT24:I.depthTexture.format===Qi&&(Et=i.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Et,I.width,I.height,0,Mt,Gt,null)}}else L(I.depthTexture,0);let xt=lt.__webglTexture,_t=me(I),ct=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,dt=I.depthTexture.format===Qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(I.depthTexture.format===oi)Ne(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,ct,xt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,dt,ct,xt,0);else if(I.depthTexture.format===Qi)Ne(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,ct,xt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,dt,ct,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(G){let I=n.get(G),Q=G.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==G.depthTexture){let st=G.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),st){let lt=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,st.removeEventListener("dispose",lt)};st.addEventListener("dispose",lt),I.__depthDisposeCallback=lt}I.__boundDepthTexture=st}if(G.depthTexture&&!I.__autoAllocateDepthBuffer)if(Q)for(let st=0;st<6;st++)bt(I.__webglFramebuffer[st],G,st);else{let st=G.texture.mipmaps;st&&st.length>0?bt(I.__webglFramebuffer[0],G,0):bt(I.__webglFramebuffer,G,0)}else if(Q){I.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[st]),I.__webglDepthbuffer[st]===void 0)I.__webglDepthbuffer[st]=i.createRenderbuffer(),ut(I.__webglDepthbuffer[st],G,!1);else{let lt=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=I.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,xt)}}else{let st=G.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),ut(I.__webglDepthbuffer,G,!1);else{let lt=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,xt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(G,I,Q){let st=n.get(G);I!==void 0&&nt(st.__webglFramebuffer,G,G.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&ht(G)}function yt(G){let I=G.texture,Q=n.get(G),st=n.get(I);G.addEventListener("dispose",v);let lt=G.textures,xt=G.isWebGLCubeRenderTarget===!0,_t=lt.length>1;if(_t||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=I.version,s.memory.textures++),xt){Q.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(I.mipmaps&&I.mipmaps.length>0){Q.__webglFramebuffer[ct]=[];for(let dt=0;dt<I.mipmaps.length;dt++)Q.__webglFramebuffer[ct][dt]=i.createFramebuffer()}else Q.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ct=0;ct<I.mipmaps.length;ct++)Q.__webglFramebuffer[ct]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(_t)for(let ct=0,dt=lt.length;ct<dt;ct++){let Mt=n.get(lt[ct]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),s.memory.textures++)}if(G.samples>0&&Ne(G)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ct=0;ct<lt.length;ct++){let dt=lt[ct];Q.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ct]);let Mt=o.convert(dt.format,dt.colorSpace),Gt=o.convert(dt.type),Et=y(dt.internalFormat,Mt,Gt,dt.normalized,dt.colorSpace,G.isXRRenderTarget===!0),wt=me(G);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,Et,G.width,G.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),G.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(Q.__webglDepthRenderbuffer,G,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),j(i.TEXTURE_CUBE_MAP,I);for(let ct=0;ct<6;ct++)if(I.mipmaps&&I.mipmaps.length>0)for(let dt=0;dt<I.mipmaps.length;dt++)nt(Q.__webglFramebuffer[ct][dt],G,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,dt);else nt(Q.__webglFramebuffer[ct],G,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(I)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ct=0,dt=lt.length;ct<dt;ct++){let Mt=lt[ct],Gt=n.get(Mt),Et=i.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Et=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,Gt.__webglTexture),j(Et,Mt),nt(Q.__webglFramebuffer,G,Mt,i.COLOR_ATTACHMENT0+ct,Et,0),m(Mt)&&x(Et)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(ct=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,st.__webglTexture),j(ct,I),I.mipmaps&&I.mipmaps.length>0)for(let dt=0;dt<I.mipmaps.length;dt++)nt(Q.__webglFramebuffer[dt],G,I,i.COLOR_ATTACHMENT0,ct,dt);else nt(Q.__webglFramebuffer,G,I,i.COLOR_ATTACHMENT0,ct,0);m(I)&&x(ct),e.unbindTexture()}G.depthBuffer&&ht(G)}function vt(G){let I=G.textures;for(let Q=0,st=I.length;Q<st;Q++){let lt=I[Q];if(m(lt)){let xt=_(G),_t=n.get(lt).__webglTexture;e.bindTexture(xt,_t),x(xt),e.unbindTexture()}}}let qt=[],xe=[];function pe(G){if(G.samples>0){if(Ne(G)===!1){let I=G.textures,Q=G.width,st=G.height,lt=i.COLOR_BUFFER_BIT,xt=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(G),ct=I.length>1;if(ct)for(let Mt=0;Mt<I.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let dt=G.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Mt=0;Mt<I.length;Mt++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Gt=n.get(I[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,Q,st,0,0,Q,st,lt,i.NEAREST),l===!0&&(qt.length=0,xe.length=0,qt.push(i.COLOR_ATTACHMENT0+Mt),G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&(qt.push(xt),xe.push(xt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let Mt=0;Mt<I.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Gt=n.get(I[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&l){let I=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function me(G){return Math.min(r.maxSamples,G.samples)}function Ne(G){let I=n.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Z(G){let I=s.render.frame;h.get(G)!==I&&(h.set(G,I),G.update())}function He(G,I){let Q=G.colorSpace,st=G.format,lt=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||Q!==bs&&Q!==Pi&&(ue.getTransfer(Q)===_e?(st!==kn||lt!==wn)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",Q)),I}function be(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(c.width=G.naturalWidth||G.width,c.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(c.width=G.displayWidth,c.height=G.displayHeight):(c.width=G.width,c.height=G.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=N,this.getTextureUnits=D,this.setTextureUnits=C,this.setTexture2D=L,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=V,this.rebindTextures=gt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function $2(i,t){function e(n,r=Pi){let o,s=ue.getTransfer(r);if(n===wn)return i.UNSIGNED_BYTE;if(n===Jl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bh)return i.BYTE;if(n===zh)return i.SHORT;if(n===Fo)return i.UNSIGNED_SHORT;if(n===Zl)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===Hh)return i.ALPHA;if(n===Wh)return i.RGB;if(n===kn)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===Xh)return i.RED;if(n===Ql)return i.RED_INTEGER;if(n===tr)return i.RG;if(n===tc)return i.RG_INTEGER;if(n===ec)return i.RGBA_INTEGER;if(n===Ws||n===Xs||n===$s||n===Ys)if(s===_e)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ws)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ws)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===rc||n===oc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===nc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===ac||n===lc||n===cc||n===uc||n===qs||n===hc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===sc||n===ac)return s===_e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===lc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===cc)return o.COMPRESSED_R11_EAC;if(n===uc)return o.COMPRESSED_SIGNED_R11_EAC;if(n===qs)return o.COMPRESSED_RG11_EAC;if(n===hc)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fc||n===dc||n===pc||n===mc||n===gc||n===bc||n===xc||n===yc||n===vc||n===_c||n===Mc||n===wc||n===Sc||n===Tc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===fc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ac||n===Ec||n===Rc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Ac)return s===_e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pc||n===Cc||n===Ks||n===Ic)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Pc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Cc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ks)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ic)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Do?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Y2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q2=`
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

}`,xf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new As(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mn({vertexShader:Y2,fragmentShader:q2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new Xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yf=class extends si{constructor(t,e){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,b=typeof XRWebGLBinding<"u",g=new xf,m={},x=e.getContextAttributes(),_=null,y=null,M=[],w=[],A=new Zt,v=null,T=null,E=new rn;E.viewport=new ke;let S=new rn;S.viewport=new ke;let P=[E,S],N=new Xl,D=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let X=M[H];return X===void 0&&(X=new To,M[H]=X),X.getTargetRaySpace()},this.getControllerGrip=function(H){let X=M[H];return X===void 0&&(X=new To,M[H]=X),X.getGripSpace()},this.getHand=function(H){let X=M[H];return X===void 0&&(X=new To,M[H]=X),X.getHandSpace()};function R(H){let X=w.indexOf(H.inputSource);if(X===-1)return;let tt=M[X];tt!==void 0&&(tt.update(H.inputSource,H.frame,c||s),tt.dispatchEvent({type:H.type,data:H.inputSource}))}function k(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",L);for(let H=0;H<M.length;H++){let X=w[H];X!==null&&(w[H]=null,M[H].disconnect(X))}D=null,C=null,g.reset();for(let H in m)delete m[H];if(t.setRenderTarget(_),d=null,f=null,u=null,r=null,y=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),T!==null){let H=T.camera;H.fov=T.fov,H.zoom=T.zoom,H.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,n.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",k),r.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,et=null,nt=null;x.depth&&(nt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=x.stencil?Qi:oi,et=x.stencil?Do:Yn);let ut={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:o};u=this.getBinding(),f=u.createProjectionLayer(ut),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new qe(f.textureWidth,f.textureHeight,{format:kn,type:wn,depthTexture:new ui(f.textureWidth,f.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let tt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new qe(d.framebufferWidth,d.framebufferHeight,{format:kn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),ot.setContext(r),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function L(H){for(let X=0;X<H.removed.length;X++){let tt=H.removed[X],et=w.indexOf(tt);et>=0&&(w[et]=null,M[et].disconnect(tt))}for(let X=0;X<H.added.length;X++){let tt=H.added[X],et=w.indexOf(tt);if(et===-1){for(let ut=0;ut<M.length;ut++)if(ut>=w.length){w.push(tt),et=ut;break}else if(w[ut]===null){w[ut]=tt,et=ut;break}if(et===-1)break}let nt=M[et];nt&&nt.connect(tt)}}let O=new $,B=new $;function V(H,X,tt){O.setFromMatrixPosition(X.matrixWorld),B.setFromMatrixPosition(tt.matrixWorld);let et=O.distanceTo(B),nt=X.projectionMatrix.elements,ut=tt.projectionMatrix.elements,bt=nt[14]/(nt[10]-1),ht=nt[14]/(nt[10]+1),gt=(nt[9]+1)/nt[5],yt=(nt[9]-1)/nt[5],vt=(nt[8]-1)/nt[0],qt=(ut[8]+1)/ut[0],xe=bt*vt,pe=bt*qt,me=et/(-vt+qt),Ne=me*-vt;if(X.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ne),H.translateZ(me),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),nt[10]===-1)H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let Z=bt+me,He=ht+me,be=xe-Ne,G=pe+(et-Ne),I=gt*ht/He*Z,Q=yt*ht/He*Z;H.projectionMatrix.makePerspective(be,G,I,Q,Z,He),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function W(H,X){X===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(X.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let X=H.near,tt=H.far;g.texture!==null&&(g.depthNear>0&&(X=g.depthNear),g.depthFar>0&&(tt=g.depthFar)),N.near=S.near=E.near=X,N.far=S.far=E.far=tt,(D!==N.near||C!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),D=N.near,C=N.far),N.layers.mask=H.layers.mask|6,E.layers.mask=N.layers.mask&-5,S.layers.mask=N.layers.mask&-3;let et=H.parent,nt=N.cameras;W(N,et);for(let ut=0;ut<nt.length;ut++)W(nt[ut],et);nt.length===2?V(N,E,S):N.projectionMatrix.copy(E.projectionMatrix),T===null&&H.isPerspectiveCamera&&(T={camera:H,fov:H.fov,zoom:H.zoom}),z(H,N,et)};function z(H,X,tt){tt===null?H.matrix.copy(X.matrixWorld):(H.matrix.copy(tt.matrixWorld),H.matrix.invert(),H.matrix.multiply(X.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=_l*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(H){return m[H]};let q=null;function j(H,X){if(h=X.getViewerPose(c||s),p=X,h!==null){let tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let et=!1;tt.length!==N.cameras.length&&(N.cameras.length=0,et=!0);for(let ht=0;ht<tt.length;ht++){let gt=tt[ht],yt=null;if(d!==null)yt=d.getViewport(gt);else{let qt=u.getViewSubImage(f,gt);yt=qt.viewport,ht===0&&(t.setRenderTargetTextures(y,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(y))}let vt=P[ht];vt===void 0&&(vt=new rn,vt.layers.enable(ht),vt.viewport=new ke,P[ht]=vt),vt.matrix.fromArray(gt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(gt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(yt.x,yt.y,yt.width,yt.height),ht===0&&(N.matrix.copy(vt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),et===!0&&N.cameras.push(vt)}let nt=r.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let ht=u.getDepthInformation(tt[0]);ht&&ht.isValid&&ht.texture&&g.init(ht,r.renderState)}if(nt&&nt.includes("camera-access")&&b){t.state.unbindTexture(),u=n.getBinding();for(let ht=0;ht<tt.length;ht++){let gt=tt[ht].camera;if(gt){let yt=m[gt];yt||(yt=new As,m[gt]=yt);let vt=u.getCameraImage(gt);yt.sourceTexture=vt}}}}for(let tt=0;tt<M.length;tt++){let et=w[tt],nt=M[tt];et!==null&&nt!==void 0&&nt.update(et,X,c||s)}q&&q(H,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),p=null}let ot=new jm;ot.setAnimationLoop(j),this.setAnimationLoop=function(H){q=H},this.dispose=function(){}}},K2=new Me,r0=new ne;r0.set(-1,0,0,0,1,0,0,0,1);function Z2(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Kh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,x,_,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(g,m):m.isMeshLambertMaterial?(o(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(g,m),u(g,m)):m.isMeshPhongMaterial?(o(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),b(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(s(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===an&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===an&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),_=x.envMap,y=x.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(K2.makeRotationFromEuler(y)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(r0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function s(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===an&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function J2(i,t,e,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let w=M.program;n.uniformBlockBinding(y,w)}function c(y,M){let w=r[y.id];w===void 0&&(g(y),w=h(y),r[y.id]=w,y.addEventListener("dispose",x));let A=M.program;n.updateUBOMapping(y,A);let v=t.render.frame;o[y.id]!==v&&(f(y),o[y.id]=v)}function h(y){let M=u();y.__bindingPointIndex=M;let w=i.createBuffer(),A=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function u(){for(let y=0;y<a;y++)if(s.indexOf(y)===-1)return s.push(y),y;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let M=r[y.id],w=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,T=w.length;v<T;v++){let E=w[v];if(Array.isArray(E))for(let S=0,P=E.length;S<P;S++)d(E[S],v,S,A);else d(E,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,M,w,A){if(b(y,M,w,A)===!0){let v=y.__offset,T=y.value;if(Array.isArray(T)){let E=0;for(let S=0;S<T.length;S++){let P=T[S],N=m(P);p(P,y.__data,E),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(E+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function p(y,M,w){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,w)}function b(y,M,w,A){let v=y.value,T=M+"_"+w;if(A[T]===void 0)return typeof v=="number"||typeof v=="boolean"?A[T]=v:ArrayBuffer.isView(v)?A[T]=v.slice():A[T]=v.clone(),!0;{let E=A[T];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return A[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function g(y){let M=y.uniforms,w=0,A=16;for(let T=0,E=M.length;T<E;T++){let S=Array.isArray(M[T])?M[T]:[M[T]];for(let P=0,N=S.length;P<N;P++){let D=S[P],C=Array.isArray(D.value)?D.value:[D.value];for(let R=0,k=C.length;R<k;R++){let L=C[R],O=m(L),B=w%A,V=B%O.boundary,W=B+V;w+=V,W!==0&&A-W<O.storage&&(w+=A-W),D.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=O.storage}}}let v=w%A;return v>0&&(w+=A-v),y.__size=w,y.__cache={},this}function m(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",y),M}function x(y){let M=y.target;M.removeEventListener("dispose",x);let w=s.indexOf(M.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function _(){for(let y in r)i.deleteBuffer(r[y]);s=[],r={},o={}}return{bind:l,update:c,dispose:_}}var j2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function Q2(){return fi===null&&(fi=new Al(j2,16,16,tr,Kn),fi.name="DFG_LUT",fi.minFilter=Ye,fi.magFilter=Ye,fi.wrapS=An,fi.wrapT=An,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var Fr=class{constructor(t={}){let{canvas:e=xm(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=wn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;let b=d,g=new Set([ec,tc,Ql]),m=new Set([wn,Yn,Fo,Do,Jl,jl]),x=new Uint32Array(4),_=new Int32Array(4),y=new $,M=null,w=null,A=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,S=!1,P=null,N=null,D=null,C=null;this._outputColorSpace=Ce;let R=0,k=0,L=null,O=-1,B=null,V=new ke,W=new ke,z=null,q=new K(0),j=0,ot=e.width,H=e.height,X=1,tt=null,et=null,nt=new ke(0,0,ot,H),ut=new ke(0,0,ot,H),bt=!1,ht=new Eo,gt=!1,yt=!1,vt=new Me,qt=new $,xe=new ke,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function Ne(){return L===null?X:1}let Z=n;function He(U,Y){return e.getContext(U,Y)}let be,G,I,Q,st,lt,xt,_t,ct,dt,Mt,Gt,Et,wt,Ht,$t,oe,J,St,ft,Tt,It,mt;try{let U={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",Bn,!1),Z===null){let Y="webgl2";if(Z=He(Y,U),Z===null)throw He(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(U){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",Bn,!1),Kt("WebGLRenderer: "+U.message),U}function Wt(){be=new sM(Z),be.init(),Tt=new $2(Z,be),G=new Z_(Z,be,t,Tt),I=new W2(Z,be),G.reversedDepthBuffer&&f&&I.buffers.depth.setReversed(!0),N=Z.createFramebuffer(),D=Z.createFramebuffer(),C=Z.createFramebuffer(),Q=new cM(Z),st=new C2,lt=new X2(Z,be,I,st,G,Tt,Q),xt=new oM(E),_t=new hv(Z),It=new q_(Z,_t),ct=new aM(Z,_t,Q,It),dt=new hM(Z,ct,_t,It,Q),J=new uM(Z,G,lt),Ht=new J_(st),Mt=new P2(E,xt,be,G,It,Ht),Gt=new Z2(E,st),Et=new L2,wt=new U2(be),oe=new Y_(E,xt,I,dt,p,l),$t=new H2(E,dt,G),mt=new J2(Z,Q,G,I),St=new K_(Z,be,Q),ft=new lM(Z,be,Q),Q.programs=Mt.programs,E.capabilities=G,E.extensions=be,E.properties=st,E.renderLists=Et,E.shadowMap=$t,E.state=I,E.info=Q}b!==wn&&(T=new dM(b,e.width,e.height,a,r,o));let Ut=new yf(E,Z);this.xr=Ut,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let U=be.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=be.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(U){U!==void 0&&(X=U,this.setSize(ot,H,!1))},this.getSize=function(U){return U.set(ot,H)},this.setSize=function(U,Y,at=!0){if(Ut.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=U,H=Y,e.width=Math.floor(U*X),e.height=Math.floor(Y*X),at===!0&&(e.style.width=U+"px",e.style.height=Y+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,U,Y)},this.getDrawingBufferSize=function(U){return U.set(ot*X,H*X).floor()},this.setDrawingBufferSize=function(U,Y,at){ot=U,H=Y,X=at,e.width=Math.floor(U*at),e.height=Math.floor(Y*at),this.setViewport(0,0,U,Y)},this.setEffects=function(U){if(b===wn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let Y=0;Y<U.length;Y++)if(U[Y].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(V)},this.getViewport=function(U){return U.copy(nt)},this.setViewport=function(U,Y,at,it){U.isVector4?nt.set(U.x,U.y,U.z,U.w):nt.set(U,Y,at,it),I.viewport(V.copy(nt).multiplyScalar(X).round())},this.getScissor=function(U){return U.copy(ut)},this.setScissor=function(U,Y,at,it){U.isVector4?ut.set(U.x,U.y,U.z,U.w):ut.set(U,Y,at,it),I.scissor(W.copy(ut).multiplyScalar(X).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(U){I.setScissorTest(bt=U)},this.setOpaqueSort=function(U){tt=U},this.setTransparentSort=function(U){et=U},this.getClearColor=function(U){return U.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(U=!0,Y=!0,at=!0){let it=0;if(U){let rt=!1;if(L!==null){let Ct=L.texture.format;rt=g.has(Ct)}if(rt){let Ct=L.texture.type,Dt=m.has(Ct),Pt=oe.getClearColor(),Ot=oe.getClearAlpha(),zt=Pt.r,se=Pt.g,ce=Pt.b;Dt?(x[0]=zt,x[1]=se,x[2]=ce,x[3]=Ot,Z.clearBufferuiv(Z.COLOR,0,x)):(_[0]=zt,_[1]=se,_[2]=ce,_[3]=Ot,Z.clearBufferiv(Z.COLOR,0,_))}else it|=Z.COLOR_BUFFER_BIT}Y&&(it|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(it|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&Z.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),P=U},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",Bn,!1),oe.dispose(),Et.dispose(),wt.dispose(),st.dispose(),xt.dispose(),dt.dispose(),It.dispose(),mt.dispose(),Mt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",Id),Ut.removeEventListener("sessionend",Ld),dr.stop()};function Re(U){U.preventDefault(),ys("WebGLRenderer: Context Lost."),S=!0}function ye(){ys("WebGLRenderer: Context Restored."),S=!1;let U=Q.autoReset,Y=$t.enabled,at=$t.autoUpdate,it=$t.needsUpdate,rt=$t.type;Wt(),Q.autoReset=U,$t.enabled=Y,$t.autoUpdate=at,$t.needsUpdate=it,$t.type=rt}function Bn(U){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function ei(U){let Y=U.target;Y.removeEventListener("dispose",ei),kx(Y)}function kx(U){Ox(U),st.remove(U)}function Ox(U){let Y=st.get(U).programs;Y!==void 0&&(Y.forEach(function(at){Mt.releaseProgram(at)}),U.isShaderMaterial&&Mt.releaseShaderCache(U))}this.renderBufferDirect=function(U,Y,at,it,rt,Ct){Y===null&&(Y=pe);let Dt=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Pt=Bx(U,Y,at,it,rt);I.setMaterial(it,Dt);let Ot=at.index,zt=1;if(it.wireframe===!0){if(Ot=ct.getWireframeAttribute(at),Ot===void 0)return;zt=2}let se=at.drawRange,ce=at.attributes.position,Nt=se.start*zt,ve=(se.start+se.count)*zt;Ct!==null&&(Nt=Math.max(Nt,Ct.start*zt),ve=Math.min(ve,(Ct.start+Ct.count)*zt)),Ot!==null?(Nt=Math.max(Nt,0),ve=Math.min(ve,Ot.count)):ce!=null&&(Nt=Math.max(Nt,0),ve=Math.min(ve,ce.count));let We=ve-Nt;if(We<0||We===1/0)return;It.setup(rt,it,Pt,at,Ot);let Le,Ae=St;if(Ot!==null&&(Le=_t.get(Ot),Ae=ft,Ae.setIndex(Le)),rt.isMesh)it.wireframe===!0?(I.setLineWidth(it.wireframeLinewidth*Ne()),Ae.setMode(Z.LINES)):Ae.setMode(Z.TRIANGLES);else if(rt.isLine){let un=it.linewidth;un===void 0&&(un=1),I.setLineWidth(un*Ne()),rt.isLineSegments?Ae.setMode(Z.LINES):rt.isLineLoop?Ae.setMode(Z.LINE_LOOP):Ae.setMode(Z.LINE_STRIP)}else rt.isPoints?Ae.setMode(Z.POINTS):rt.isSprite&&Ae.setMode(Z.TRIANGLES);if(rt.isBatchedMesh)if(be.get("WEBGL_multi_draw"))Ae.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{let un=rt._multiDrawStarts,Ft=rt._multiDrawCounts,xn=rt._multiDrawCount,ge=Ot?_t.get(Ot).bytesPerElement:1,In=st.get(it).currentProgram.getUniforms();for(let ni=0;ni<xn;ni++)In.setValue(Z,"_gl_DrawID",ni),Ae.render(un[ni]/ge,Ft[ni])}else if(rt.isInstancedMesh)Ae.renderInstances(Nt,We,rt.count);else if(at.isInstancedBufferGeometry){let un=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ft=Math.min(at.instanceCount,un);Ae.renderInstances(Nt,We,Ft)}else Ae.render(Nt,We)};function Cd(U,Y,at,it){P!==null&&U.isNodeMaterial&&P.setObject(it,U),gt===!0&&Ht.setState(U,at,!1),U.transparent===!0&&U.side===ie&&U.forceSinglePass===!1?(U.side=an,U.needsUpdate=!0,Pa(U,Y,it),U.side=hi,U.needsUpdate=!0,Pa(U,Y,it),U.side=ie):Pa(U,Y,it)}this.compile=function(U,Y,at=null){at===null&&(at=U),P!==null&&P.renderStart(U,Y,at),w=wt.get(at),w.init(Y),v.push(w),at.traverseVisible(function(rt){rt.isLight&&rt.layers.test(Y.layers)&&(w.pushLight(rt),rt.castShadow&&w.pushShadow(rt))}),U!==at&&U.traverseVisible(function(rt){rt.isLight&&rt.layers.test(Y.layers)&&(w.pushLight(rt),rt.castShadow&&w.pushShadow(rt))}),w.setupLights(),P!==null&&P.updateLights(w.state.lightsArray),yt=this.localClippingEnabled,gt=Ht.init(this.clippingPlanes,yt),gt===!0&&Ht.setGlobalState(this.clippingPlanes,Y),P!==null&&$t.render(w.state.shadowsArray,at,Y);let it=new Set;return U.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;let Ct=rt.material;if(Ct)if(Array.isArray(Ct))for(let Dt=0;Dt<Ct.length;Dt++){let Pt=Ct[Dt];Cd(Pt,at,Y,rt),it.add(Pt)}else Cd(Ct,at,Y,rt),it.add(Ct)}),w=v.pop(),P!==null&&P.renderEnd(),it},this.compileAsync=function(U,Y,at=null){let it=this.compile(U,Y,at);return new Promise(rt=>{function Ct(){if(it.forEach(function(Dt){let Ot=st.get(Dt).currentProgram;(Ot===void 0||Ot.isReady())&&it.delete(Dt)}),it.size===0){rt(U);return}setTimeout(Ct,10)}be.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Lu=null;function Nx(U){Lu&&Lu(U)}function Id(){dr.stop()}function Ld(){dr.start()}let dr=new jm;dr.setAnimationLoop(Nx),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(U){Lu=U,Ut.setAnimationLoop(U),U===null?dr.stop():dr.start()},Ut.addEventListener("sessionstart",Id),Ut.addEventListener("sessionend",Ld),this.render=function(U,Y){if(Y!==void 0&&Y.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;P!==null&&P.renderStart(U,Y);let at=Ut.enabled===!0&&Ut.isPresenting===!0,it=T!==null&&(L===null||at)&&T.begin(E,L);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(Y),Y=Ut.getCamera()),U.isScene===!0&&U.onBeforeRender(E,U,Y,L),w=wt.get(U,v.length),w.init(Y),w.state.textureUnits=lt.getTextureUnits(),v.push(w),vt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ht.setFromProjectionMatrix(vt,Wn,Y.reversedDepth),yt=this.localClippingEnabled,gt=Ht.init(this.clippingPlanes,yt),M=Et.get(U,A.length),M.init(),A.push(M),Ut.enabled===!0&&Ut.isPresenting===!0){let Dt=E.xr.getDepthSensingMesh();Dt!==null&&Fu(Dt,Y,-1/0,E.sortObjects)}Fu(U,Y,0,E.sortObjects),M.finish(),P!==null&&P.updateLights(w.state.lightsArray),E.sortObjects===!0&&M.sort(tt,et),me=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,me&&oe.addToRenderList(M,U),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),gt===!0&&Ht.beginShadows();let rt=w.state.shadowsArray;if($t.render(rt,U,Y),gt===!0&&Ht.endShadows(),(it&&T.hasRenderPass())===!1){let Dt=M.opaque,Pt=M.transmissive;if(w.setupLights(),Y.isArrayCamera){let Ot=Y.cameras;if(Pt.length>0)for(let zt=0,se=Ot.length;zt<se;zt++){let ce=Ot[zt];Dd(Dt,Pt,U,ce)}me&&oe.render(U);for(let zt=0,se=Ot.length;zt<se;zt++){let ce=Ot[zt];Fd(M,U,ce,ce.viewport)}}else Pt.length>0&&Dd(Dt,Pt,U,Y),me&&oe.render(U),Fd(M,U,Y)}L!==null&&k===0&&(lt.updateMultisampleRenderTarget(L),lt.updateRenderTargetMipmap(L)),it&&T.end(E),U.isScene===!0&&U.onAfterRender(E,U,Y),It.resetDefaultState(),O=-1,B=null,v.pop(),v.length>0?(w=v[v.length-1],lt.setTextureUnits(w.state.textureUnits),gt===!0&&Ht.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,P!==null&&P.renderEnd()};function Fu(U,Y,at,it){if(U.visible===!1)return;if(U.layers.test(Y.layers)){if(U.isGroup)at=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(Y);else if(U.isLightProbeGrid)w.pushLightProbeGrid(U);else if(U.isLight)w.pushLight(U),U.castShadow&&w.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||U.intersectsFrustum(ht)){it&&xe.setFromMatrixPosition(U.matrixWorld).applyMatrix4(vt);let Dt=dt.update(U),Pt=U.material;Pt.visible&&M.push(U,Dt,Pt,at,xe.z,null,Y)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||U.intersectsFrustum(ht))){let Dt=dt.update(U),Pt=U.material;if(it&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),xe.copy(U.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),xe.copy(Dt.boundingSphere.center)),xe.applyMatrix4(U.matrixWorld).applyMatrix4(vt)),Array.isArray(Pt)){let Ot=Dt.groups;for(let zt=0,se=Ot.length;zt<se;zt++){let ce=Ot[zt],Nt=Pt[ce.materialIndex];Nt&&Nt.visible&&M.push(U,Dt,Nt,at,xe.z,ce,Y)}}else Pt.visible&&M.push(U,Dt,Pt,at,xe.z,null,Y)}}let Ct=U.children;for(let Dt=0,Pt=Ct.length;Dt<Pt;Dt++)Fu(Ct[Dt],Y,at,it)}function Fd(U,Y,at,it){let{opaque:rt,transmissive:Ct,transparent:Dt}=U;w.setupLightsView(at),gt===!0&&Ht.setGlobalState(E.clippingPlanes,at),it&&I.viewport(V.copy(it)),rt.length>0&&Ra(rt,Y,at),Ct.length>0&&Ra(Ct,Y,at),Dt.length>0&&Ra(Dt,Y,at),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Dd(U,Y,at,it){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[it.id]===void 0){let Nt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[it.id]=new qe(1,1,{generateMipmaps:!0,type:Nt?Kn:wn,minFilter:ji,samples:Math.max(4,G.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let Ct=w.state.transmissionRenderTarget[it.id],Dt=it.viewport||V;Ct.setSize(Dt.z*E.transmissionResolutionScale,Dt.w*E.transmissionResolutionScale);let Pt=E.getRenderTarget(),Ot=E.getActiveCubeFace(),zt=E.getActiveMipmapLevel();E.setRenderTarget(Ct),E.getClearColor(q),j=E.getClearAlpha(),j<1&&E.setClearColor(16777215,.5),E.clear(),me&&oe.render(at);let se=E.toneMapping;E.toneMapping=$n;let ce=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),w.setupLightsView(it),gt===!0&&Ht.setGlobalState(E.clippingPlanes,it),Ra(U,at,it),lt.updateMultisampleRenderTarget(Ct),lt.updateRenderTargetMipmap(Ct),be.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let ve=0,We=Y.length;ve<We;ve++){let Le=Y[ve],{object:Ae,geometry:un,material:Ft,group:xn}=Le;if(Ft.side===ie&&Ae.layers.test(it.layers)){let ge=Ft.side;Ft.side=an,Ft.needsUpdate=!0,kd(Ae,at,it,un,Ft,xn),Ft.side=ge,Ft.needsUpdate=!0,Nt=!0}}Nt===!0&&(lt.updateMultisampleRenderTarget(Ct),lt.updateRenderTargetMipmap(Ct))}E.setRenderTarget(Pt,Ot,zt),E.setClearColor(q,j),ce!==void 0&&(it.viewport=ce),E.toneMapping=se}function Ra(U,Y,at){let it=Y.isScene===!0?Y.overrideMaterial:null;for(let rt=0,Ct=U.length;rt<Ct;rt++){let Dt=U[rt],{object:Pt,geometry:Ot,group:zt}=Dt,se=Dt.material;se.allowOverride===!0&&it!==null&&(se=it),Pt.layers.test(at.layers)&&kd(Pt,Y,at,Ot,se,zt)}}function kd(U,Y,at,it,rt,Ct){P!==null&&rt.isNodeMaterial&&P.setObject(U,rt),U.onBeforeRender(E,Y,at,it,rt,Ct),U.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),rt.onBeforeRender(E,Y,at,it,U,Ct),rt.transparent===!0&&rt.side===ie&&rt.forceSinglePass===!1?(rt.side=an,rt.needsUpdate=!0,E.renderBufferDirect(at,Y,it,rt,U,Ct),rt.side=hi,rt.needsUpdate=!0,E.renderBufferDirect(at,Y,it,rt,U,Ct),rt.side=ie):E.renderBufferDirect(at,Y,it,rt,U,Ct),U.onAfterRender(E,Y,at,it,rt,Ct)}function Pa(U,Y,at){Y.isScene!==!0&&(Y=pe);let it=st.get(U),rt=w.state.lights,Ct=w.state.shadowsArray,Dt=rt.state.version,Pt=Mt.getParameters(U,rt.state,Ct,Y,at,w.state.lightProbeGridArray),Ot=Mt.getProgramCacheKey(Pt),zt=it.programs;it.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?Y.environment:null,it.fog=Y.fog;let se=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;it.envMap=xt.get(U.envMap||it.environment,se),it.envMapRotation=it.environment!==null&&U.envMap===null?Y.environmentRotation:U.envMapRotation,zt===void 0&&(U.addEventListener("dispose",ei),zt=new Map,it.programs=zt);let ce=zt.get(Ot);if(ce!==void 0){if(it.currentProgram===ce&&it.lightsStateVersion===Dt)return Nd(U,Pt),ce}else Pt.uniforms=Mt.getUniforms(U),P!==null&&U.isNodeMaterial&&P.build(U,at,Pt),U.onBeforeCompile(Pt,E),ce=Mt.acquireProgram(Pt,Ot),zt.set(Ot,ce),it.uniforms=Pt.uniforms;let Nt=it.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Nt.clippingPlanes=Ht.uniform),Nd(U,Pt),it.needsLights=Vx(U),it.lightsStateVersion=Dt,it.needsLights&&(Nt.ambientLightColor.value=rt.state.ambient,Nt.lightProbe.value=rt.state.probe,Nt.sunLights.value=rt.state.sun,Nt.sunLightShadows.value=rt.state.sunShadow,Nt.directionalLights.value=rt.state.directional,Nt.directionalLightShadows.value=rt.state.directionalShadow,Nt.spotLights.value=rt.state.spot,Nt.spotLightShadows.value=rt.state.spotShadow,Nt.rectAreaLights.value=rt.state.rectArea,Nt.ltc_1.value=rt.state.rectAreaLTC1,Nt.ltc_2.value=rt.state.rectAreaLTC2,Nt.pointLights.value=rt.state.point,Nt.pointLightShadows.value=rt.state.pointShadow,Nt.hemisphereLights.value=rt.state.hemi,Nt.sunShadowMatrix.value=rt.state.sunShadowMatrix,Nt.sunShadowCascade.value=rt.state.sunShadowCascade,Nt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,Nt.spotLightMatrix.value=rt.state.spotLightMatrix,Nt.spotLightMap.value=rt.state.spotLightMap,Nt.pointShadowMatrix.value=rt.state.pointShadowMatrix),it.lightProbeGrid=w.state.lightProbeGridArray.length>0,it.currentProgram=ce,it.uniformsList=null,ce}function Od(U){if(U.uniformsList===null){let Y=U.currentProgram.getUniforms();U.uniformsList=No.seqWithValue(Y.seq,U.uniforms)}return U.uniformsList}function Nd(U,Y){let at=st.get(U);at.outputColorSpace=Y.outputColorSpace,at.batching=Y.batching,at.batchingColor=Y.batchingColor,at.instancing=Y.instancing,at.instancingColor=Y.instancingColor,at.instancingMorph=Y.instancingMorph,at.skinning=Y.skinning,at.morphTargets=Y.morphTargets,at.morphNormals=Y.morphNormals,at.morphColors=Y.morphColors,at.morphTargetsCount=Y.morphTargetsCount,at.numClippingPlanes=Y.numClippingPlanes,at.numIntersection=Y.numClipIntersection,at.vertexAlphas=Y.vertexAlphas,at.vertexTangents=Y.vertexTangents,at.toneMapping=Y.toneMapping}function Ux(U,Y){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;y.setFromMatrixPosition(Y.matrixWorld);for(let at=0,it=U.length;at<it;at++){let rt=U[at];if(rt.texture!==null&&rt.boundingBox.containsPoint(y))return rt}return null}function Bx(U,Y,at,it,rt){Y.isScene!==!0&&(Y=pe),lt.resetTextureUnits();let Ct=Y.fog,Dt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?Y.environment:null,Pt=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ue.workingColorSpace,Ot=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,zt=xt.get(it.envMap||Dt,Ot),se=it.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ce=!!at.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Nt=!!at.morphAttributes.position,ve=!!at.morphAttributes.normal,We=!!at.morphAttributes.color,Le=$n;it.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Le=E.toneMapping);let Ae=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,un=Ae!==void 0?Ae.length:0,Ft=st.get(it),xn=w.state.lights;if(gt===!0&&(yt===!0||U!==B)){let Pe=U===B&&it.id===O;Ht.setState(it,U,Pe)}let ge=!1;it.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==xn.state.version||Ft.outputColorSpace!==Pt||rt.isBatchedMesh&&Ft.batching===!1||!rt.isBatchedMesh&&Ft.batching===!0||rt.isBatchedMesh&&Ft.batchingColor===!0&&rt._colorsTexture===null||rt.isBatchedMesh&&Ft.batchingColor===!1&&rt._colorsTexture!==null||rt.isInstancedMesh&&Ft.instancing===!1||!rt.isInstancedMesh&&Ft.instancing===!0||rt.isSkinnedMesh&&Ft.skinning===!1||!rt.isSkinnedMesh&&Ft.skinning===!0||rt.isInstancedMesh&&Ft.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&Ft.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&Ft.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&Ft.instancingMorph===!1&&rt.morphTexture!==null||Ft.envMap!==zt||it.fog===!0&&Ft.fog!==Ct||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Ht.numPlanes||Ft.numIntersection!==Ht.numIntersection)||Ft.vertexAlphas!==se||Ft.vertexTangents!==ce||Ft.morphTargets!==Nt||Ft.morphNormals!==ve||Ft.morphColors!==We||Ft.toneMapping!==Le||Ft.morphTargetsCount!==un||!!Ft.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Ft.__version=it.version);let In=Ft.currentProgram;ge===!0&&(In=Pa(it,Y,rt),P&&it.isNodeMaterial&&P.onUpdateProgram(it,In,Ft));let ni=!1,Ni=!1,Zr=!1,we=In.getUniforms(),ze=Ft.uniforms;if(I.useProgram(In.program)&&(ni=!0,Ni=!0,Zr=!0),it.id!==O&&(O=it.id,Ni=!0),Ft.needsLights){let Pe=Ux(w.state.lightProbeGridArray,rt);Ft.lightProbeGrid!==Pe&&(Ft.lightProbeGrid=Pe,Ni=!0)}if(ni||B!==U){I.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),we.setValue(Z,"projectionMatrix",U.projectionMatrix),we.setValue(Z,"viewMatrix",U.matrixWorldInverse);let Bi=we.map.cameraPosition;Bi!==void 0&&Bi.setValue(Z,qt.setFromMatrixPosition(U.matrixWorld)),G.logarithmicDepthBuffer&&we.setValue(Z,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&we.setValue(Z,"isOrthographic",U.isOrthographicCamera===!0),B!==U&&(B=U,Ni=!0,Zr=!0)}if(Ft.needsLights&&(xn.state.sunShadowMap.length>0&&we.setValue(Z,"sunShadowMap",xn.state.sunShadowMap,lt),xn.state.directionalShadowMap.length>0&&we.setValue(Z,"directionalShadowMap",xn.state.directionalShadowMap,lt),xn.state.spotShadowMap.length>0&&we.setValue(Z,"spotShadowMap",xn.state.spotShadowMap,lt),xn.state.pointShadowMap.length>0&&we.setValue(Z,"pointShadowMap",xn.state.pointShadowMap,lt)),rt.isSkinnedMesh){we.setOptional(Z,rt,"bindMatrix"),we.setOptional(Z,rt,"bindMatrixInverse");let Pe=rt.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),we.setValue(Z,"boneTexture",Pe.boneTexture,lt))}rt.isBatchedMesh&&(we.setOptional(Z,rt,"batchingTexture"),we.setValue(Z,"batchingTexture",rt._matricesTexture,lt),we.setOptional(Z,rt,"batchingIdTexture"),we.setValue(Z,"batchingIdTexture",rt._indirectTexture,lt),we.setOptional(Z,rt,"batchingColorTexture"),rt._colorsTexture!==null&&we.setValue(Z,"batchingColorTexture",rt._colorsTexture,lt));let Ui=at.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&J.update(rt,at,In),(Ni||Ft.receiveShadow!==rt.receiveShadow)&&(Ft.receiveShadow=rt.receiveShadow,we.setValue(Z,"receiveShadow",rt.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&Y.environment!==null&&(ze.envMapIntensity.value=Y.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=Q2()),Ni){if(we.setValue(Z,"toneMappingExposure",E.toneMappingExposure),Ft.needsLights&&zx(ze,Zr),Ct&&it.fog===!0&&Gt.refreshFogUniforms(ze,Ct),Gt.refreshMaterialUniforms(ze,it,X,H,w.state.transmissionRenderTarget[U.id]),Ft.needsLights&&Ft.lightProbeGrid){let Pe=Ft.lightProbeGrid;ze.probesSH.value=Pe.texture,ze.probesMin.value.copy(Pe.boundingBox.min),ze.probesMax.value.copy(Pe.boundingBox.max),ze.probesResolution.value.copy(Pe.resolution)}No.upload(Z,Od(Ft),ze,lt)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(No.upload(Z,Od(Ft),ze,lt),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&we.setValue(Z,"center",rt.center),we.setValue(Z,"modelViewMatrix",rt.modelViewMatrix),we.setValue(Z,"normalMatrix",rt.normalMatrix),we.setValue(Z,"modelMatrix",rt.matrixWorld),it.uniformsGroups!==void 0){let Pe=it.uniformsGroups;for(let Bi=0,Jr=Pe.length;Bi<Jr;Bi++){let Bd=Pe[Bi];mt.update(Bd,In),mt.bind(Bd,In)}}return In}function zx(U,Y){U.ambientLightColor.needsUpdate=Y,U.lightProbe.needsUpdate=Y,U.sunLights.needsUpdate=Y,U.sunLightShadows.needsUpdate=Y,U.directionalLights.needsUpdate=Y,U.directionalLightShadows.needsUpdate=Y,U.pointLights.needsUpdate=Y,U.pointLightShadows.needsUpdate=Y,U.spotLights.needsUpdate=Y,U.spotLightShadows.needsUpdate=Y,U.rectAreaLights.needsUpdate=Y,U.hemisphereLights.needsUpdate=Y}function Vx(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(U,Y,at){let it=st.get(U);it.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),st.get(U.texture).__webglTexture=Y,st.get(U.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:at,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,Y){let at=st.get(U);at.__webglFramebuffer=Y,at.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(U,Y=0,at=0){L=U,R=Y,k=at;let it=null,rt=!1,Ct=!1;if(U){let Pt=st.get(U);if(Pt.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(Z.FRAMEBUFFER,Pt.__webglFramebuffer),V.copy(U.viewport),W.copy(U.scissor),z=U.scissorTest,I.viewport(V),I.scissor(W),I.setScissorTest(z),O=-1;return}else if(Pt.__webglFramebuffer===void 0)lt.setupRenderTarget(U);else if(Pt.__hasExternalTextures)lt.rebindTextures(U,st.get(U.texture).__webglTexture,st.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let se=U.depthTexture;if(Pt.__boundDepthTexture!==se){if(se!==null&&st.has(se)&&(U.width!==se.image.width||U.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(U)}}let Ot=U.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Ct=!0);let zt=st.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(zt[Y])?it=zt[Y][at]:it=zt[Y],rt=!0):U.samples>0&&lt.useMultisampledRTT(U)===!1?it=st.get(U).__webglMultisampledFramebuffer:Array.isArray(zt)?it=zt[at]:it=zt,V.copy(U.viewport),W.copy(U.scissor),z=U.scissorTest}else V.copy(nt).multiplyScalar(X).floor(),W.copy(ut).multiplyScalar(X).floor(),z=bt;if(at!==0&&(it=N),I.bindFramebuffer(Z.FRAMEBUFFER,it)&&I.drawBuffers(U,it),I.viewport(V),I.scissor(W),I.setScissorTest(z),rt){let Pt=st.get(U.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pt.__webglTexture,at)}else if(Ct){let Pt=Y;for(let Ot=0;Ot<U.textures.length;Ot++){let zt=st.get(U.textures[Ot]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Ot,zt.__webglTexture,at,Pt)}}else if(U!==null&&at!==0){let Pt=st.get(U.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Pt.__webglTexture,at)}O=-1};function Ud(U){let Y=st.get(U);return(Y.__readFormat!==U.format||Y.__readType!==U.type)&&(Y.__readFormat=U.format,Y.__readType=U.type,Y.__formatReadable=G.textureFormatReadable(U.format),Y.__typeReadable=G.textureTypeReadable(U.type)),Y}this.readRenderTargetPixels=function(U,Y,at,it,rt,Ct,Dt,Pt=0){if(!(U&&U.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=st.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ot=Ot[Dt]),Ot){I.bindFramebuffer(Z.FRAMEBUFFER,Ot);try{let zt=U.textures[Pt],se=zt.format,ce=zt.type;U.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Pt);let Nt=Ud(zt);if(Nt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=U.width-it&&at>=0&&at<=U.height-rt&&Z.readPixels(Y,at,it,rt,Tt.convert(se),Tt.convert(ce),Ct)}finally{let zt=L!==null?st.get(L).__webglFramebuffer:null;I.bindFramebuffer(Z.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(U,Y,at,it,rt,Ct,Dt,Pt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=st.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ot=Ot[Dt]),Ot)if(Y>=0&&Y<=U.width-it&&at>=0&&at<=U.height-rt){I.bindFramebuffer(Z.FRAMEBUFFER,Ot);let zt=U.textures[Pt],se=zt.format,ce=zt.type;U.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Pt);let Nt=Ud(zt);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ve),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ct.byteLength,Z.STREAM_READ),Z.readPixels(Y,at,it,rt,Tt.convert(se),Tt.convert(ce),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);let We=L!==null?st.get(L).__webglFramebuffer:null;I.bindFramebuffer(Z.FRAMEBUFFER,We);let Le=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await vm(Z,Le,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ve),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ct),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(ve),Z.deleteSync(Le),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,Y=null,at=0){let it=Math.pow(2,-at),rt=Math.floor(U.image.width*it),Ct=Math.floor(U.image.height*it),Dt=Y!==null?Y.x:0,Pt=Y!==null?Y.y:0;lt.setTexture2D(U,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,at,0,0,Dt,Pt,rt,Ct),I.unbindTexture()},this.copyTextureToTexture=function(U,Y,at=null,it=null,rt=0,Ct=0){let Dt,Pt,Ot,zt,se,ce,Nt,ve,We,Le=U.isCompressedTexture?U.mipmaps[Ct]:U.image;if(at!==null)Dt=at.max.x-at.min.x,Pt=at.max.y-at.min.y,Ot=at.isBox3?at.max.z-at.min.z:1,zt=at.min.x,se=at.min.y,ce=at.isBox3?at.min.z:0;else{let ze=Math.pow(2,-rt);Dt=Math.floor(Le.width*ze),Pt=Math.floor(Le.height*ze),U.isDataArrayTexture?Ot=Le.depth:U.isData3DTexture?Ot=Math.floor(Le.depth*ze):Ot=1,zt=0,se=0,ce=0}it!==null?(Nt=it.x,ve=it.y,We=it.z):(Nt=0,ve=0,We=0);let Ae=Tt.convert(Y.format),un=Tt.convert(Y.type),Ft;Y.isData3DTexture?(lt.setTexture3D(Y,0),Ft=Z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(lt.setTexture2DArray(Y,0),Ft=Z.TEXTURE_2D_ARRAY):(lt.setTexture2D(Y,0),Ft=Z.TEXTURE_2D),I.activeTexture(Z.TEXTURE0),I.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Y.flipY),I.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),I.pixelStorei(Z.UNPACK_ALIGNMENT,Y.unpackAlignment);let xn=I.getParameter(Z.UNPACK_ROW_LENGTH),ge=I.getParameter(Z.UNPACK_IMAGE_HEIGHT),In=I.getParameter(Z.UNPACK_SKIP_PIXELS),ni=I.getParameter(Z.UNPACK_SKIP_ROWS),Ni=I.getParameter(Z.UNPACK_SKIP_IMAGES);I.pixelStorei(Z.UNPACK_ROW_LENGTH,Le.width),I.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Le.height),I.pixelStorei(Z.UNPACK_SKIP_PIXELS,zt),I.pixelStorei(Z.UNPACK_SKIP_ROWS,se),I.pixelStorei(Z.UNPACK_SKIP_IMAGES,ce);let Zr=U.isDataArrayTexture||U.isData3DTexture,we=Y.isDataArrayTexture||Y.isData3DTexture;if(U.isDepthTexture){let ze=st.get(U),Ui=st.get(Y),Pe=st.get(ze.__renderTarget),Bi=st.get(Ui.__renderTarget);I.bindFramebuffer(Z.READ_FRAMEBUFFER,Pe.__webglFramebuffer),I.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Jr=0;Jr<Ot;Jr++)Zr&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,st.get(U).__webglTexture,rt,ce+Jr),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,st.get(Y).__webglTexture,Ct,We+Jr)),Z.blitFramebuffer(zt,se,Dt,Pt,Nt,ve,Dt,Pt,Z.DEPTH_BUFFER_BIT,Z.NEAREST);I.bindFramebuffer(Z.READ_FRAMEBUFFER,null),I.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(rt!==0||U.isRenderTargetTexture||st.has(U)){let ze=st.get(U),Ui=st.get(Y);I.bindFramebuffer(Z.READ_FRAMEBUFFER,D),I.bindFramebuffer(Z.DRAW_FRAMEBUFFER,C);for(let Pe=0;Pe<Ot;Pe++)Zr?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ze.__webglTexture,rt,ce+Pe):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,ze.__webglTexture,rt),we?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ui.__webglTexture,Ct,We+Pe):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ui.__webglTexture,Ct),rt!==0?Z.blitFramebuffer(zt,se,Dt,Pt,Nt,ve,Dt,Pt,Z.COLOR_BUFFER_BIT,Z.NEAREST):we?Z.copyTexSubImage3D(Ft,Ct,Nt,ve,We+Pe,zt,se,Dt,Pt):Z.copyTexSubImage2D(Ft,Ct,Nt,ve,zt,se,Dt,Pt);I.bindFramebuffer(Z.READ_FRAMEBUFFER,null),I.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else we?U.isDataTexture||U.isData3DTexture?Z.texSubImage3D(Ft,Ct,Nt,ve,We,Dt,Pt,Ot,Ae,un,Le.data):Y.isCompressedArrayTexture?Z.compressedTexSubImage3D(Ft,Ct,Nt,ve,We,Dt,Pt,Ot,Ae,Le.data):Z.texSubImage3D(Ft,Ct,Nt,ve,We,Dt,Pt,Ot,Ae,un,Le):U.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Ct,Nt,ve,Dt,Pt,Ae,un,Le.data):U.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Ct,Nt,ve,Le.width,Le.height,Ae,Le.data):Z.texSubImage2D(Z.TEXTURE_2D,Ct,Nt,ve,Dt,Pt,Ae,un,Le);I.pixelStorei(Z.UNPACK_ROW_LENGTH,xn),I.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ge),I.pixelStorei(Z.UNPACK_SKIP_PIXELS,In),I.pixelStorei(Z.UNPACK_SKIP_ROWS,ni),I.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ni),Ct===0&&Y.generateMipmaps&&Z.generateMipmap(Ft),I.unbindTexture()},this.initRenderTarget=function(U){st.get(U).__webglFramebuffer===void 0&&lt.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?lt.setTextureCube(U,0):U.isData3DTexture?lt.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?lt.setTexture2DArray(U,0):lt.setTexture2D(U,0),I.unbindTexture()},this.resetState=function(){R=0,k=0,L=null,I.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};function o0(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function s0(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let o=t[r];o<=0||(i[r*3]=Math.min(1,n[0]*o),i[r*3+1]=Math.min(1,n[1]*o),i[r*3+2]=Math.min(1,n[2]*o))}}function h0(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var a0=[],Zn=new Map,l0=new Map,Mf=new Map,c0,u0="",f0=0;function ta(i){for(let t of i){let e=t.hash?a0.find(n=>n.id===t.id&&n.hash===t.hash):void 0;if(!(!e||e===t))for(let n of t.items){let r=_f(n)?void 0:Zn.get(vf(t.id,n.id));r&&_f(r)&&tw(n,r)}}a0=i,Zn=new Map(i.flatMap(t=>t.items.map(e=>[vf(t.id,e.id),e]))),l0=new Map(i.flatMap(t=>Object.entries(t.aliases??{}).map(([e,n])=>[e,vf(t.id,n)])));for(let[t,e]of l0){let n=Zn.get(e);n&&!Zn.has(t)&&Zn.set(t,n)}f0++}function _f(i){return Array.isArray(i.parts)}function tw(i,t){i.parts=t.parts,t.symbol&&(i.symbol=t.symbol)}function wf(i){if(i===c0)return;c0=i;let t=Object.entries(i??{}),e=t.map(([n,r])=>`${n}=${r.hash}`).sort().join("|");e!==u0&&(u0=e,Mf=new Map(t.map(([n,r])=>[n,r.recipe])),f0++)}var Sf="pack:household.draft:item";function d0(i,t,e){let n=Zn.get(i);Zn.set(i,t);try{return e()}finally{n?Zn.set(i,n):Zn.delete(i)}}function vf(i,t){return`pack:${i}:${t}`}function nr(i){return i.startsWith("pack:")}function zc(i){return nr(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":/:roof_window[\w.-]*_blind$/.test(i)?"blind":null:null}function Tf(i,t){return i==="curtain"?t.color==="fabric":i==="blind"?t.color==="fabric"&&t.shape!=="cyl":t.shape!=="cyl"}function p0(i){return i==="robot_vacuum"||nr(i)&&i.endsWith(":robot_vacuum")}function ea(i){return i.z>.05}function m0(i){let t=(i?.parts??[]).filter(e=>e.shape==="cyl"&&ea(e));return t.length?t.reduce((e,n)=>n.w*n.d>e.w*e.d?n:e).z:.227}function g0(i){return le(i)?.parts.find(t=>t.screen)}function le(i){if(!nr(i))return;let t=Zn.get(i);return Mf.get(i)??(t&&_f(t)?t:void 0)}function ew(i){if(nr(i))return Mf.get(i)??Zn.get(i)}function tn(i,t){let e=ew(t.type);if(t.mount_y!=null)return t.mount_y;let n=v0(t,i.height);if(n!==null)return n;if(t.type==="lamp_wall")return Gc;if(b0.has(t.type))return Math.max(0,i.height-x0(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return er(i,t)+y0(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?er(i,t):Dr(t)||er(i,t)}}function er(i,t){let e=i.rooms.filter(n=>n.points.length>=3);return!e.length||e.some(n=>Jt([t.x,t.z],n.points))?0:Vc(i,t.x,t.z)}var Bo={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Jn(i){return i==="hedge"||i==="fence"||i==="pergola"}function Af(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!Jn(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function Wc(i){return[...i.rooms,...Af(i)]}function iw(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",o=(c,h)=>r==="x"?c:r==="-x"?-c:r==="z"?h:-h,s=1/0,a=-1/0;for(let[c,h]of i.points){let u=o(c,h);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(t,e)-s)/(a-s)));return n*l}function rw(i,t,e,n){return kr(i,t)+Bo[t.type]-na(i,t,e,n)}var Ef=-.2,Hc={set:!1,level:Ef};function M0(i){let t=i?.settings.terrain??null;Hc={set:t?.level!=null,level:t?.level??Ef}}function zo(i,t){return Hc.level}function w0(i){return i.elevation>.3?0:Hc.set?Hc.level-i.elevation:Ef}function kr(i,t){return w0(i)+(t.offset??0)}function na(i,t,e,n){return t.type==="pool"?0:iw(t,e,n)}function Vc(i,t,e){let n=(i.outdoor??[]).filter(o=>!Jn(o.type)&&o.type!=="pool"&&Jt([t,e],o.points)),r=[...n].reverse().find(o=>o.cut)??n[0];return r?rw(i,r,t,e):w0(i)}function Xc(i,t){return kr(i,t)+(t.above?T0(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function ow(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?T0(i):1.5}function Rf(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!Jn(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>Jt(n,e.points)))}function S0(i,t){return!t.above&&!Rf(i,t)?$c(i,t)-.05:Xc(i,t)-ow(t)}function $c(i,t){return Xc(i,t)-.15}function T0(i){return i.height&&i.height>.3?i.height:1.2}var sw={type:"none",pitch:35,overhang:.4},KP={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...sw}};var A0=.3;var E0=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Gc=1.75;var b0=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function x0(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var R0=new Set(["stairs","stairs_u"]),P0=3,aw=.18;function C0(i){let t=Math.max(3,Math.round(i.h/aw)),e=i.d>i.w+.3,n=e&&(i.stair_landing??0)>0?Math.min(i.stair_landing??0,t-1):0,r=!n&&i.stair_turn&&e?P0:0;return{n:t,fits:e,flat:n,winders:r,skip:n||r}}function I0(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,o=r-1,s=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),h=(t-c)/o;return{n,k:r,steps1:o,steps2:s,gap:a,fw:l,landing:c,run:h,rise:e/n}}function L0(i){return E0.has(i)||!!le(i)?.light}var lw=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Dr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return i.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var _0=.04,cw=1.2;function y0(i,t,e,n=0){let r=0;for(let o of i.furniture)!(lw.has(o.type)||le(o.type)?.surface)||!Jt([t,e],rr(o))||o.type==="worktop"&&n>0&&o.h-_0>=cw&&n<=o.h-_0-.02||(r=Math.max(r,o.h));return r}var Yc=new Set(["wall_switch","wall_socket"]),uw=4;function F0(i){let t=(i.gangs??[]).slice(0,uw);return t.length?t:[{entity:null}]}function v0(i,t){return i.type==="wifi_ap"?i.variant==="wall"?2.1:Math.max(0,t-i.h):i.type==="water_heater"?i.variant==="wall"?1.1:0:null}var nw=new Set([...E0,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var hw=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],fw=["standard","bars","glass_wall"],dw=["sectional","up_and_over"];function pi(i,t){return i.type==="garage"?i.style&&dw.includes(i.style)?i.style:"sectional":i.type==="door"?i.style&&hw.includes(i.style)?i.style:t?"front":"interior":i.style&&fw.includes(i.style)?i.style:"standard"}function D0(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",o=i-.04,s=Math.min(1.05,Math.max(.6,o-(r?.6:.3))),a=(o-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let h=o-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function k0(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Pn(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[o,s]=i[(e+1)%i.length];t+=n*s-o*r}return t/2}function jn(i){return Math.abs(Pn(i))}function ir(i){let t=Pn(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;e+=(o+a)*c,n+=(s+l)*c}return[e/(6*t),n/(6*t)]}function O0(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,o]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function N0(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[o,s]of i)t=Math.min(t,o),e=Math.min(e,s),n=Math.max(n,o),r=Math.max(r,s);return{x0:t,z0:e,x1:n,z1:r}}function rr(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*e-a*n,i.z+s*n+a*e])}function Jt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[o,s]=t[n],[a,l]=t[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(e=!e)}return e}function Cf(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],o=n*n+r*r,s=o>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/o)):0;return i.h0+(i.h1-i.h0)*s}var Be=(i,t)=>[i[0]-t[0],i[1]-t[1]],mi=(i,t)=>[i[0]+t[0],i[1]+t[1]],On=(i,t)=>[i[0]*t,i[1]*t],Nr=(i,t)=>i[0]*t[0]+i[1]*t[1],Or=(i,t)=>i[0]*t[1]-i[1]*t[0],ia=i=>Math.hypot(i[0],i[1]),Cn=i=>{let t=ia(i)||1;return[i[0]/t,i[1]/t]},Pf=i=>[-i[1],i[0]],U0=i=>[i[1],-i[0]];function gi(i,t,e=[]){let n=t.eps??.005,r=[],o=e.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),s=[],a=S=>{for(let P=0;P<s.length;P++)if(Math.abs(s[P][0]-S[0])<=n&&Math.abs(s[P][1]-S[1])<=n)return P;return s.push([S[0],S[1]]),s.length-1},l=[];for(let S of i){let P=S.points;if(P.length<3||Math.abs(Pn(P))<1e-6)continue;let N=Pn(P)>0,D=P.map(a);for(let C=0;C<P.length;C++){let R=D[C],k=D[(C+1)%P.length];R!==k&&l.push(N?{u:R,v:k,room:S.id,edge:C,forward:!0}:{u:k,v:R,room:S.id,edge:C,forward:!1})}}let c=o.map(S=>[a(S.a),a(S.b)]),h=new Set;for(let S of i){let P=S.points;P.length<3||(S.wall_splits??[]).forEach((N,D)=>{if(!N||D>=P.length)return;let C=P[D],R=Be(P[(D+1)%P.length],C),k=ia(R);for(let L of N)L>n&&L<k-n&&h.add(a(mi(C,On(R,L/k))))})}let u=[];for(let S of l){let P=s[S.u],N=s[S.v],D=Be(N,P),C=ia(D),R=On(D,1/C),k=[];for(let O=0;O<s.length;O++){if(O===S.u||O===S.v)continue;let B=Be(s[O],P),V=Nr(B,R);V<=n||V>=C-n||Math.abs(Or(R,B))<=n&&k.push({t:V,id:O})}k.sort((O,B)=>O.t-B.t);let L=[{t:0,id:S.u},...k,{t:C,id:S.v}];for(let O=0;O+1<L.length;O++){let B=L[O],V=L[O+1],W=S.forward?B.t:C-V.t,z=S.forward?V.t:C-B.t;u.push({u:B.id,v:V.id,room:S.room,edge:S.edge,t0:W,t1:z})}}let f=new Map;for(let S of u){let P=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,N=f.get(P);N||f.set(P,N=[]),N.push(S)}let d=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),p=new Map;for(let S of u){let P=`${S.room}:${S.edge}`;p.set(P,[...p.get(P)??[],S.t0].sort((N,D)=>N-D))}let b=S=>{let P=i.find(D=>D.id===S.room)?.wall_heights?.[S.edge];if(!Array.isArray(P))return P;let N=p.get(`${S.room}:${S.edge}`)??[];return P[N.indexOf(S.t0)]??null},g=S=>{let P=S.map(b).filter(D=>typeof D=="number"&&D>0);if(P.length)return Math.min(...P);let N=S.map(D=>i.find(C=>C.id===D.room)?.ceiling_height);return N.every(D=>typeof D=="number"&&D>0)?Math.max(...N):void 0},m=S=>{let P=S.map(N=>i.find(D=>D.id===N.room)?.wall_thickness?.[N.edge]).filter(N=>typeof N=="number"&&N>0);return P.length?Math.max(...P):void 0},x=S=>{for(let P of S){let N=i.find(k=>k.id===P.room),D=N?.wall_slopes?.[P.edge];if(!N||!D)continue;let C=N.points[P.edge],R=N.points[(P.edge+1)%N.points.length];return{p:[C[0],C[1]],q:[R[0],R[1]],h0:Math.max(.05,D[0]),h1:Math.max(.05,D[1])}}},_=S=>S.some(P=>b(P)===0),y=S=>{let P=x(S);return P?{height:Math.max(P.h0,P.h1),slope:P}:{height:g(S)}},M=[],w=[];for(let S of f.values()){let P=S[0],N=S.find(D=>D!==P&&D.u===P.v&&D.v===P.u&&D.room!==P.room);for(let D of S)D!==P&&D!==N&&D.room!==P.room&&r.push(`overlap:${P.room}:${D.room}`);if(_(N?[P,N]:[P])){N&&M.push([P.room,N.room]);continue}if(N){let D=m([P,N])??t.interior;w.push({a:P.u,b:P.v,left:D/2,right:D/2,exterior:!1,roomLeft:P.room,roomRight:N.room,sources:[d(P),d(N)],...y([P,N])})}else w.push({a:P.u,b:P.v,left:0,right:m([P])??t.exterior,exterior:!0,roomLeft:P.room,roomRight:null,sources:[d(P)],...y([P])})}let A=S=>Cn(Be(s[S.b],s[S.a])),v=new Set;for(let S of w){if(S.exterior||S.free)continue;let P=new Set;for(let D of[S.a,S.b])for(let C of w)!C.exterior||C.free||C.a!==D&&C.b!==D||Math.abs(Or(A(S),A(C)))>1e-6||(C.roomLeft===S.roomLeft?P.add("left"):C.roomLeft===S.roomRight&&P.add("right"));if(P.size!==1)continue;let N=S.left+S.right;P.has("left")?(S.left=0,S.right=N):(S.left=N,S.right=0),v.add(S)}for(let S of[...v]){let P=[S];for(;P.length;){let N=P.pop();for(let D of[N.a,N.b])for(let C of w){if(C===N||C.exterior||C.free||v.has(C)||C.a!==D&&C.b!==D||Math.abs(Or(A(N),A(C)))>1e-6)continue;let R=C.left+C.right,k=N.right===0==Nr(A(N),A(C))>0;C.left=k?R:0,C.right=k?0:R,v.add(C),P.push(C)}}}o.forEach((S,P)=>{let[N,D]=c[P];if(N===D)return;let C=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],R=i.find(O=>O.points.length>=3&&Jt(C,O.points))?.id??null,k=(S.thickness??t.interior)/2,L=typeof S.height=="number"&&S.height>0?S.height:void 0;w.push({free:S.id,a:N,b:D,left:k,right:k,exterior:!1,roomLeft:R,roomRight:R,sources:[],height:L})}),w=mw(w,s,h);let T=bw(w,s);return{walls:w.map((S,P)=>{let N=s[S.a],D=s[S.b],C=T.get(`${P}:a`),R=T.get(`${P}:b`),k=xw([C.right,R.left,D,R.right,C.left,N],1e-6);return{id:pw(N,D),a:[N[0],N[1]],b:[D[0],D[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:k,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{},...S.slope?{slope:S.slope}:{}}}),warnings:[...new Set(r)],open:M}}function pw(i,t){let e=o=>Math.round(o*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function B0(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function mw(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[s,a]of o){if(a.length!==2||e.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=B0(l)),c.a!==s&&(c=B0(c)),l.a===c.b)continue;let h=Cn(Be(t[l.b],t[l.a])),u=Cn(Be(t[c.b],t[c.a]));if(Math.abs(Or(h,u))>1e-6||Nr(h,u)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:gw(l.sources,c.sources)},d=n.filter((p,b)=>b!==a[0]&&b!==a[1]);d.push(f),n.length=0,n.push(...d),r=!0;break}}return n}function gw(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function bw(i,t){let e=new Map;i.forEach((r,o)=>{let s=Cn(Be(t[r.b],t[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:On(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(c)}});let n=new Map;for(let[r,o]of e){let s=t[r];o.sort((c,h)=>c.angle-h.angle);let a=c=>({left:mi(s,On(Pf(c.d),c.left)),right:mi(s,On(U0(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let h=o[c],u=o[(c+1)%o.length],f=mi(s,On(Pf(h.d),h.left)),d=mi(s,On(U0(u.d),u.right)),p=Or(h.d,u.d);if(Math.abs(p)<1e-4)continue;let b=Or(Be(d,f),u.d)/p,g=mi(f,On(h.d,b));ia(Be(g,s))>l||(n.get(h.key).left=g,n.get(u.key).right=g)}}return n}function xw(i,t){let e=i.filter((r,o)=>ia(Be(r,i[(o+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let o=e[(r+e.length-1)%e.length],s=e[r],a=e[(r+1)%e.length],l=Be(s,o),c=Be(a,s);if(Math.abs(Or(Cn(l),Cn(c)))<1e-7&&Nr(l,c)>0){e=e.filter((h,u)=>u!==r),n=!0;break}}}return e}function If(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],o=Cn(Be(r,n));return mi(n,On(o,e))}function z0(i,t){let e=Be(i.b,i.a),n=Pf(Cn(e)),r=a=>t.some(l=>l.points.length>=3&&Jt(a,l.points)),o=0,s=0;for(let a of[.2,.5,.8]){let l=mi(i.a,On(e,a));r(mi(l,On(n,i.left+.2)))&&o++,r(Be(l,On(n,i.right+.2)))&&s++}return o>=2&&s===0?!0:s>=2&&o===0?!1:null}function Vo(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=Cn(Be(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,mi(r.a,[-o[1],o[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Go(i,t,e){if(!t.wall)return yw(i,e.room,e.edge,t.offset);let n=i.find(o=>o.free===t.wall);if(!n)return null;let r=If(e.room,0,t.offset);return{wall:n,s:Nr(Be(r,n.a),Cn(Be(n.b,n.a)))}}function Lf(i,t,e){if(t.free)return null;let n=e?t.b:t.a,r=Cn(Be(t.b,t.a)),o=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,s=null;for(let a of i)if(!(a===t||!(o(a.a)||o(a.b)))){if(s||a.exterior!==t.exterior||a.free||!o(e?a.a:a.b)||Nr(Cn(Be(a.b,a.a)),r)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;s=a}return s}function yw(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=If(t,e,n);return{wall:r,s:Nr(Be(s,r.a),Cn(Be(r.b,r.a)))}}return null}function qc(i,t,e,n){let r=t.rotation*Math.PI/180,o=[-Math.sin(r),Math.cos(r)],s=Math.max(.005,t.d),a=null;for(let c of i){let h=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(h<.05)continue;let u=[(c.b[0]-c.a[0])/h,(c.b[1]-c.a[1])/h],f=(t.x-c.a[0])*u[0]+(t.z-c.a[1])*u[1];if(f<-.02||f>h+.02)continue;let d=[-u[1],u[0]],p=(t.x-c.a[0])*d[0]+(t.z-c.a[1])*d[1],b=o[0]*d[0]+o[1]*d[1]>=0?1:-1;if(Math.abs(o[0]*d[0]+o[1]*d[1])<.5)continue;let g=b>0?c.left:-c.right,m=p>-c.right-1e-4&&p<c.left+1e-4,x=Math.abs(p-(g+b*(s/2)));if(!m&&x>.03||a&&x>=a.off)continue;let _=c.a[0]+u[0]*f,y=c.a[1]+u[1]*f,M=m?g+b*(s/2):p,w=c.slope?Cf(c.slope,t.x,t.z):Math.min(e,c.height??e);a={x:_+d[0]*M,z:y+d[1]*M,top:w,off:x}}if(!a)return{x:t.x,z:t.z,y:n};let l=t.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-t.h-.02)):n;return{x:a.x,z:a.z,y:l}}var or=Math.PI/180;function Ur(i){let t=i.rotation??0;if(!t||i.points&&i.points.length>=3)return null;let e=t*or;return{p:i.pivot??[(i.x0+i.x1)/2,(i.z0+i.z1)/2],c:Math.cos(e),s:Math.sin(e)}}function Zc(i,t,e=!1){if(!i)return t;let n=t[0]-i.p[0],r=t[1]-i.p[1],o=e?-i.s:i.s;return[i.p[0]+n*i.c-r*o,i.p[1]+n*o+r*i.c]}function cn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1),o=Ur(i),s=i.axis==="x"?(l,c)=>[l,i.flip?r-c:n+c]:(l,c)=>[i.flip?e-c:t+c,l],a=o?(l,c)=>Zc(o,s(l,c)):s;return i.axis==="x"?{u0:t,u1:e,w:r-n,at:a}:{u0:n,u1:r,w:e-t,at:a}}function Df(i,t,e,n=1e-6){let[r,o]=xi(i,t,e),s=cn({...i,rotation:0});return r>=s.u0-n&&r<=s.u1+n&&o>=-n&&o<=s.w+n}function ln(i){let t=cn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*or),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*or);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=$0(t,e,n,r,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+o>1e-6?Math.min(t,Math.max(0,(n-e+t*o)/(r+o))):t/2,a=e+s*r;return{vr:s,rh:a,y:l=>l<=s?e+l*r:n+(t-l)*o}}function kf(i){let t=i.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var Of=.14;function G0(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function Nf(i,t){return ln(i).rh-Of>t+.01}function H0(i,t,e,n){let r=null,o=Math.max(0,i.settings.roof.overhang??0);for(let s of kf(i)){if(s.open||n!==void 0&&!Nf(s,n)||!Df(s,t,e)||s.points&&s.points.length>=3&&!Jt([t,e],s.points))continue;let[a,l]=xi(s,t,e),c=s.shape==="flat"||s.shape==="parapet",h=Math.max(0,s.overhang??o),f=((c?null:sa(zr(s,{u0:h,u1:h,a:h,b:h}),a,l))??ln(s).y(l))-Of;r=r===null?f:Math.max(r,f)}return r}function Jc(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(o=>[o[0],o[1]]);let n=jn(i)>=0?1:-1,r=[];for(let o=0;o<e;o++){let s=i[(o+e-1)%e],a=i[o],l=i[(o+1)%e],c=V0([a[0]-s[0],a[1]-s[1]]),h=V0([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],p=u[1]+f[1],b=Math.hypot(d,p);if(b<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let g=(d*u[0]+p*u[1])/b,m=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/b*t*m,a[1]+p/b*t*m])}return r}function V0(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function W0(i,t){if(i.points&&i.points.length>=3)return Jc(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,o=Math.max(i.z0,i.z1)+t,s=Ur(i);return[[e,r],[n,r],[n,o],[e,o]].map(a=>Zc(s,a))}function X0(i,t,e,n){let r=gi(i,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let o=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,s=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let f of[u.a,u.b])s.set(o(f),[...s.get(o(f))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let f=[u.a,u.b],d=u.b;for(;;){let p=(s.get(o(d))??[]).find(b=>!l.has(b));if(!p||(l.add(p),d=o(p.a)===o(d)?p.b:p.a,o(d)===o(f[0])))break;f.push(d)}f.length>=3&&o(d)===o(f[0])&&(!c||Math.abs(jn(f))>Math.abs(jn(c)))&&(c=f)}if(!c)return null;let h=[];for(let u=0;u<c.length;u++){let f=c[(u+c.length-1)%c.length],d=c[u],p=c[(u+1)%c.length],b=(d[0]-f[0])*(p[1]-d[1])-(d[1]-f[1])*(p[0]-d[0]);Math.abs(b)>1e-6&&h.push(d)}return h.length>=3?Jc(h,e):null}var ra=Math.tan(30*or);function $0(i,t,e,n,r){let o=Math.min(i*.3,n>1e-6?2.4/n:i*.3),s=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+o*n,l=e+s*r,c=Math.min(i-s,Math.max(o,(l-a+ra*(i-s+o))/(2*ra))),h=a+(c-o)*ra;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=o?t+f*n:f<=c?a+(f-o)*ra:f<=i-s?l+(i-s-f)*ra:e+(i-f)*r}}function zr(i,t){let e=cn(i),n=ln(i),r=e.w,o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(L,O)=>[L,O,n.y(O)],h=c(a,-o),u=c(l,-o),f=c(l,r+s),d=c(a,r+s),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*or),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*or);if(i.shape==="pent"){let L=[h,u,f,d],O=[[0,n.y(0)],[r,n.y(r)]];return{faces:[L],rim:L,ridges:[[f,d]],gable:O,gables:[O,O]}}if(i.shape==="pyramid"){let L=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[h,u,L],[u,f,L],[f,d,L],[d,h,L]],rim:[h,u,f,d],ridges:[[h,L],[d,L],[u,L],[f,L]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let L=$0(r,i.eave_a,i.eave_b,p,b),O=[[0,n.y(0)],[L.vla,L.yla],[L.vr,L.rh],[r-L.vlb,L.ylb],[r,n.y(r)]],B=[a,L.vla,L.yla],V=[l,L.vla,L.yla],W=[a,r-L.vlb,L.ylb],z=[l,r-L.vlb,L.ylb],q=[a,L.vr,L.rh],j=[l,L.vr,L.rh];return{faces:[[h,u,V,B],[B,V,j,q],[q,j,z,W],[W,z,f,d]],rim:[h,u,V,j,z,f,d,W,q,B],ridges:[[q,j],[B,V],[W,z]],gable:O,gables:[O,O]}}let[g,m]=jc(i)??["gable","gable"],x=Uf(i,[g,m]),_=g==="gable"?[a,n.vr,n.rh]:[e.u0+x.d0,n.vr,n.rh],y=m==="gable"?[l,n.vr,n.rh]:[e.u1-x.d1,n.vr,n.rh],M=[a,x.vah,x.yh],w=[a,x.vbh,x.yh],A=[l,x.vah,x.yh],v=[l,x.vbh,x.yh],T=g==="halfhip",E=m==="halfhip",S=[[h,u,...E?[A]:[],y,_,...T?[M]:[]],[_,y,...E?[v]:[],f,d,...T?[w]:[]]];g==="hip"&&S.push([d,h,_]),T&&S.push([w,M,_]),m==="hip"&&S.push([u,f,y]),E&&S.push([A,v,y]);let P=[h,u,...m==="gable"?[y]:E?[A,v]:[],f,d,...g==="gable"?[_]:T?[w,M]:[]],N=[[_,y]];g==="hip"&&N.push([h,_],[d,_]),T&&N.push([M,_],[w,_]),m==="hip"&&N.push([u,y],[f,y]),E&&N.push([A,y],[v,y]);let D=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],C=[[0,n.y(0)],[x.vah,x.yh],[x.vbh,x.yh],[r,n.y(r)]],R=L=>L==="gable"?D:L==="halfhip"?C:null,k=[R(g),R(m)];return{faces:S,rim:P,ridges:N,gable:k[0]??k[1],gables:k}}function jc(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let t=i.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(i.end_u0),e(i.end_u1)]}function Uf(i,t){let e=cn(i),n=ln(i),r=e.w,o=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*or),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*or),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),h=c+(n.rh-c)*.55,u=o>1e-6?Math.min(n.vr,(h-i.eave_a)/o):n.vr,f=s>1e-6?Math.max(n.vr,r-(h-i.eave_b)/s):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),p=Math.min(l-.1,(n.rh-h)/Math.max(.2,o)),b=g=>g==="hip"?d:g==="halfhip"?p:0;return{d0:b(t[0]),d1:b(t[1]),yh:h,vah:u,vbh:f}}function sa(i,t,e){let n=null;for(let r of i.faces){if(!Jt([t,e],r.map(x=>[x[0],x[1]])))continue;let[o,s]=r,a=r.slice(2).find(x=>Math.abs((s[0]-o[0])*(x[1]-o[1])-(s[1]-o[1])*(x[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],c=s[2]-o[2],h=s[1]-o[1],u=a[0]-o[0],f=a[2]-o[2],d=a[1]-o[1],p=c*d-h*f,b=h*u-l*d,g=l*f-c*u;if(Math.abs(b)<1e-9)continue;let m=o[2]-(p*(t-o[0])+g*(e-o[1]))/b;n=n===null?m:Math.min(n,m)}return n}function xi(i,t,e){let[n,r]=Zc(Ur(i),[t,e],!0),o=Math.min(i.x0,i.x1),s=Math.max(i.x0,i.x1),a=Math.min(i.z0,i.z1),l=Math.max(i.z0,i.z1);return i.axis==="x"?[n,i.flip?l-r:r-a]:[r,i.flip?s-n:n-o]}function Ff(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Br(i,t){let[e,n]=Zc(Ur(t),[(t.x0+t.x1)/2,(t.z0+t.z1)/2]),r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i)s===t||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(t)*1.5||Df(s,e,n)&&(!o||r(s)<r(o))&&(o=s);return o}function Bf(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=cn(t),n=ln(t).rh,r=zr(i,{u0:0,u1:0,a:0,b:0}),o=ln(i),s=b=>{let[g,m]=e.at(b,e.w/2),[x,_]=xi(i,g,m);return sa(r,x,_)??o.y(_)},a=s(e.u0)<=s(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let b=.5;b<u;b+=.05)if(s(l+h*b)>=n-.02){f=l+h*b;break}if(Math.abs(f-c)<.05)return t;let d=Ur(t),p={...t,...d?{pivot:d.p}:{}};return t.axis==="x"?c===e.u1?p.x1=f:p.x0=f:c===e.u1?p.z1=f:p.z0=f,p}function Y0(i,t){let e=Bf(i,t),n=cn(e),r=ln(e),o=zr(i,{u0:0,u1:0,a:0,b:0}),s=ln(i),a=f=>{let[d,p]=n.at(f,n.w/2),[b,g]=xi(i,d,p);return sa(o,b,g)??s.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,p=c*(f+1)/u,b=l?n.u0+d:n.u1-d,g=l?n.u0+p:n.u1-p,m=a(g),x=1/0,_=-1/0;for(let v=0;v<=40;v++){let T=n.w*v/40;r.y(T)>m+.02&&(x=Math.min(x,T),_=Math.max(_,T))}if(!(_-x>.05))continue;let y=n.at(b,x),M=n.at(g,_),w=xi(i,y[0],y[1]),A=xi(i,M[0],M[1]);h.push({u0:Math.min(w[0],A[0]),u1:Math.max(w[0],A[0]),v0:Math.min(w[1],A[1]),v1:Math.max(w[1],A[1])})}return h}function bi(i,t,e,n){let r=s=>n?s[t]<=e+1e-9:s[t]>=e-1e-9,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c&&o.push(a),c!==h){let u=(e-a[t])/(l[t]-a[t]);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function zf(i,t){let e=bi(i,0,t.u0,!0),n=bi(i,0,t.u1,!1),r=bi(bi(i,0,t.u0,!1),0,t.u1,!0),o=bi(r,1,t.v0,!0),s=bi(r,1,t.v1,!1);return[e,n,o,s].filter(a=>a.length>=3&&Math.abs(jn(a.map(l=>[l[0],l[1]])))>1e-6)}function Qc(i,t,e){let n=cn(t),r=i.floors.flatMap(c=>c.rooms.filter(h=>h.points.length>=3&&c.elevation+c.height>t.base+.05)),o=c=>c.some(h=>r.some(u=>Jt(h,u.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(a.map(c=>n.at(c,-s)))?0:e,b:o(a.map(c=>n.at(c,n.w+s)))?0:e,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:e,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:e}}function q0(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function vw(i){return ln(i).rh}function K0(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>Br(n,l)??l);if(!r.length)return t.id;let o=Math.max(...r.map(l=>vw(l))),s=l=>l.rooms.some(c=>c.points.length>=3&&r.some(h=>{let[u,f]=c.points.reduce((d,p)=>[d[0]+p[0]/c.points.length,d[1]+p[1]/c.points.length],[0,0]);return Df(h,u,f)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<o-.3&&s(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function Kc(i,[t,e,n]){let r=s=>t*s[0]+e*s[1]+n,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c>=-1e-9&&o.push(a),c>=-1e-9!=h>=-1e-9){let u=c/(c-h);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function oa(i){let t=i[0];if(!t)return null;let e=t;for(let d of i)Math.hypot(d[0]-t[0],d[1]-t[1])>Math.hypot(e[0]-t[0],e[1]-t[1])&&(e=d);let n=e[0]-t[0],r=e[1]-t[1],o=t,s=0;for(let d of i){let p=n*(d[1]-t[1])-r*(d[0]-t[0]);Math.abs(p)>Math.abs(s)&&(s=p,o=d)}if(Math.abs(s)<1e-9)return null;let a=o[0]-t[0],l=o[1]-t[1],c=e[2]-t[2],h=o[2]-t[2],u=(c*l-h*r)/s,f=(n*h-a*c)/s;return[u,f,t[2]-u*t[0]-f*t[1]]}var Ho=i=>Math.abs(jn(i.map(t=>[t[0],t[1]])));function tu(i){let t=Pn(i.map(n=>[n[0],n[1]]))>=0?1:-1,e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=Math.hypot(o[0]-r[0],o[1]-r[1]);if(s<1e-7)continue;let a=-(o[1]-r[1])*t/s,l=(o[0]-r[0])*t/s;e.push([a,l,-(a*r[0]+l*r[1])])}return e}function _w(i,t){let e=oa(i),n=oa(t.poly);if(!e||!n||Ho(t.poly)<1e-6)return null;let r=[...tu(t.poly),[n[0]-e[0],n[1]-e[1],n[2]-e[2]-.01]];return Number.isFinite(t.depth)&&r.push([e[0]-n[0],e[1]-n[1],e[2]-n[2]+t.depth]),r}function Z0(i,t){let e=[i];for(let n of t){let r=[];for(let o of e){let s=_w(o,n),a=s?o:[];for(let c of s??[])a=Kc(a,c);if(a.length<3||Ho(a)<1e-6){r.push(o);continue}let l=o;for(let[c,h,u]of tu(a)){let f=Kc(l,[-c,-h,-u]);if(f.length>=3&&Ho(f)>1e-6&&r.push(f),l=Kc(l,[c,h,u]),l.length<3)break}}e=r}return e}function Vf(i,t,e){let n=[[0,1]],r=o=>[i[0]+(t[0]-i[0])*o,i[1]+(t[1]-i[1])*o,i[2]+(t[2]-i[2])*o];for(let o of e){let s=oa(o.poly);if(!s||Ho(o.poly)<1e-6)continue;let a=tu(o.poly).map(([d,p,b])=>[d*i[0]+p*i[1]+b,d*(t[0]-i[0])+p*(t[1]-i[1])]),l=d=>s[0]*d[0]+s[1]*d[1]+s[2]-d[2],c=l(i),h=l(t)-c;a.push([c-.01,h]),Number.isFinite(o.depth)&&a.push([o.depth-c,-h]);let u=0,f=1;for(let[d,p]of a){if(Math.abs(p)<1e-12){d<-1e-9&&(f=-1);continue}let b=-d/p;p>0?u=Math.max(u,b):f=Math.min(f,b)}f-u<1e-6||(n=n.flatMap(([d,p])=>[[d,Math.min(p,u)],[Math.max(d,f),p]]).filter(([d,p])=>p-d>1e-6))}return n.map(([o,s])=>[r(o),r(s)])}function J0(i,t){let e=oa(i),n=oa(t);if(!e||!n||Ho(t)<1e-6)return null;let r=[...i];for(let c of tu(t))r=Kc(r,c);if(r.length<3)return null;let o=c=>(n[0]-e[0])*c[0]+(n[1]-e[1])*c[1]+(n[2]-e[2]),s=[];for(let c=0;c<r.length;c++){let h=r[c],u=r[(c+1)%r.length],f=o(h),d=o(u);if(f<0!=d<0){let p=f/(f-d);s.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p,h[2]+(u[2]-h[2])*p])}}if(s.length<2)return null;let a=s[0],l=s[s.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function j0(i,t){let e=cn(i),n=o=>o.map(([s,a,l])=>{let[c,h]=e.at(s,a);return[c,h,l]}),r=[];for(let o of t){let s=bi(bi(bi(bi(o,0,e.u0,!1),0,e.u1,!0),1,0,!1),1,e.w,!0);s.length>=3&&Ho(s)>1e-6&&r.push({poly:n(s),depth:1/0});for(let a of zf(o,{u0:e.u0,u1:e.u1,v0:0,v1:e.w}))r.push({poly:n(a),depth:Of})}return r}function Gf(i,t){return t.map(e=>({poly:e.poly.map(([n,r,o])=>[...xi(i,n,r),o]),depth:e.depth}))}function Q0(i,t,e){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return t===e||!n(t)||!n(e)?!1:Br(i,t)!==e&&Br(i,e)!==t}function tg(i,t){if(t.dormer||t.open||!jc(t)||Ur(t)||Br(i,t))return null;let e=cn(t),n=ln(t).rh,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===t||s.dormer||s.open||Ur(s)||s.axis===t.axis||s.shape==="flat"||s.shape==="parapet"||s.shape==="pent")continue;let a=ln(s).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(s)>r(t)||r(s)===r(t)&&i.indexOf(s)<i.indexOf(t))))continue;let c=Ff(s),[h,u]=t.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[f,d]=t.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],p=Ff(t),[b,g]=t.axis==="x"?[p.z0,p.z1]:[p.x0,p.x1];if(b<f-.05||g>d+.05)continue;let m=eg(t,s),x=null;e.u0<h-.05&&e.u1>=h-.05&&e.u1<=m+.05?x=1:e.u1>u+.05&&e.u0<=u+.05&&e.u0>=m-.05&&(x=0),x!==null&&(!o||r(s)>r(o.host))&&(o={host:s,end:x})}return o}function eg(i,t){let e=cn(t),n=e.at(e.u0,ln(t).vr);return i.axis==="x"?n[0]:n[1]}function ng(i,t){let e=eg(i,t.host),n={...i,...t.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=Ff(i);return i.axis==="x"?(n.x0=t.end===0?Math.min(r.x0,e):r.x0,n.x1=t.end===1?Math.max(r.x1,e):r.x1):(n.z0=t.end===0?Math.min(r.z0,e):r.z0,n.z1=t.end===1?Math.max(r.z1,e):r.z1),n}function Hf(i,t){return t.rooms.some(e=>e.points.length>=3)?X0(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function Wf(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=Hf(i,t);return!!e&&e.some(([n,r])=>zo(n,r)-t.elevation>-.15)}function ig(i,t,e,n,r){return!e||!Wf(i,t)?!1:n<Math.min(t.height,zo(r[0],r[1])-t.elevation)-.05}function Wo(i,t){let e=Pn(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let o=t[r],s=t[(r+1)%t.length],a=c=>e*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let h=l[c],u=l[(c+1)%l.length],f=a(h),d=a(u);if(f>=0&&n.push(h),f>=0!=d>=0){let p=f/(f-d);n.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p])}}}return n}function rg(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],o=i[(e+2)%i.length],s=(r[0]-n[0])*(o[1]-r[1])-(r[1]-n[1])*(o[0]-r[0]);if(!(Math.abs(s)<1e-9)){if(t&&Math.sign(s)!==t)return!1;t=Math.sign(s)}}return!0}var Qn=1e-4;function Xf(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function og(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],o=[n[0]-e[0],n[1]-e[1]],s=r[0]*o[1]-r[1]*o[0];if(Math.abs(s)<1e-12)return null;let a=((e[0]-i[0])*o[1]-(e[1]-i[1])*o[0])/s,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/s;return a>Qn&&a<1-Qn&&l>-Qn&&l<1+Qn?a:null}function $f(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r;if(o<1e-12)return null;let s=((i[0]-t[0])*n+(i[1]-t[1])*r)/o;return s<=Qn||s>=1-Qn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(o)<Qn?s:null}function Mw(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let o=0;o<t.length;o++){let s=t[o],a=t[(o+1)%t.length];if(og(n,r,s,a)!==null||$f(s,n,r)!==null||$f(n,s,a)!==null||Math.hypot(n[0]-s[0],n[1]-s[1])<Qn)return!0}}return Jt(i[0],t)||Jt(t[0],i)}function ww(i){let t=i.map(o=>Xf(o)>=0?o:[...o].reverse()),e=[];t.forEach((o,s)=>{for(let a=0;a<o.length;a++){let l=o[a],c=o[(a+1)%o.length],h=[0,1];t.forEach((u,f)=>{if(f!==s)for(let d=0;d<u.length;d++){let p=u[d],b=u[(d+1)%u.length],g=og(l,c,p,b)??$f(p,l,c);g!==null&&h.push(g)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<Qn)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],p=Math.hypot(d[0]-f[0],d[1]-f[1]),b=[(f[0]+d[0])/2+(d[1]-f[1])/p*.001,(f[1]+d[1])/2-(d[0]-f[0])/p*.001];t.some((g,m)=>m!==s&&Jt(b,g))||e.some(([g,m])=>Math.hypot(g[0]-f[0],g[1]-f[1])<Qn&&Math.hypot(m[0]-d[0],m[1]-d[1])<Qn)||e.push([f,d])}}});let n=[],r=new Set;for(let o=0;o<e.length;o++){if(r.has(o))continue;r.add(o);let s=[e[o][0]],a=e[o][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-s[0][0],a[1]-s[0][1])<.001);l++){let c=e.findIndex(([h],u)=>!r.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;r.add(c),s.push(e[c][0]),a=e[c][1]}s.length>=3&&Xf(s)>1e-6&&n.push(s)}return n}function sg(i){let t=i.filter(o=>o.length>=3),e=t.map((o,s)=>s),n=o=>e[o]===o?o:e[o]=n(e[o]);for(let o=0;o<t.length;o++)for(let s=o+1;s<t.length;s++)n(o)!==n(s)&&Mw(t[o],t[s])&&(e[n(s)]=n(o));let r=new Map;return t.forEach((o,s)=>r.set(n(s),[...r.get(n(s))??[],o])),[...r.values()].flatMap(o=>o.length===1?o:ww(o))}function Sw(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r,s=o?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o)):0;return Math.hypot(i[0]-t[0]-n*s,i[1]-t[1]-r*s)}function ag(i,t,e=.03){return i.every(n=>Jt(n,t)||t.some((r,o)=>Sw(n,r,t[(o+1)%t.length])<=e))}function lg(i,t){let e=Xf(i)>=0?i:[...i].reverse(),n=(r,o)=>{let s=Math.hypot(o[0]-r[0],o[1]-r[1])||1;return[-(o[1]-r[1])/s,(o[0]-r[0])/s]};return e.map((r,o)=>{let s=n(e[(o-1+e.length)%e.length],r),a=n(r,e[(o+1)%e.length]),l=1+s[0]*a[0]+s[1]*a[1];return l<.1?r:[r[0]+(s[0]+a[0])/l*t,r[1]+(s[1]+a[1])/l*t]})}function qf(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var Xo=(i,t)=>!!i.fix&&i.fix.includes(t);function Yf(i,t,e,n){let r=new Map,o=i.filter(c=>Xo(c,t)).map(c=>({p:c,e:qf(c,t,e)})),s=Math.min(.05,.1*e);for(let{p:c,e:h}of o)t!=="h"&&Math.abs((h[0]+h[1])/2-e/2)<1e-6&&r.set(c,"mid");let a=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of o)r.has(h)||u[0]>a+(a===0?s:.001)||t==="h"&&u[1]>=e-.01&&u[0]>.01||(r.set(h,"lo"),a=Math.max(a,u[1]),c=!0)}let l=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of o)r.has(h)||e-u[1]>l+(l>0?.001:t==="h"?.01:s)||(r.set(h,"hi"),l=Math.max(l,e-u[0]),c=!0)}for(let{p:c}of o)r.has(c)||r.set(c,"free");return a+l>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0,side:r}:{s0:e,s:n,lo:a,hi:l,side:r}}function Vr(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function cg(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!eu(n))return[Vr(t,n),Vr(e,n)];let r=n.side.get(i)??"lo",o=e-t;if(r==="mid")return[n.s/2-o/2,n.s/2+o/2];if(r==="free"){let s=Vr((t+e)/2,n);return[s-o/2,s+o/2]}return r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function eu(i){return i.lo>0||i.hi>0}function nu(i,t,e,n){let[r,o,s]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-o)<.001&&Math.abs(n-s)<.001)return i.parts;let a={w:Yf(i.parts,"w",r,t),d:Yf(i.parts,"d",o,e),h:Yf(i.parts,"h",s,n)},l={w:!eu(a.w)&&i.parts.some(c=>Xo(c,"w")),d:!eu(a.d)&&i.parts.some(c=>Xo(c,"d")),h:!eu(a.h)&&i.parts.some(c=>Xo(c,"h"))};return i.parts.map(c=>{let h=x=>{let _=a[x],[y,M]=qf(c,x,_.s0);return Xo(c,x)&&!l[x]?cg(c,y,M,_):[Vr(y,_),Vr(M,_)]},[u,f]=h("w"),[d,p]=h("d"),[b,g]=h("h"),m={...c,x:(u+f)/2/t-.5,w:(f-u)/t,z:(d+p)/2/e-.5,d:(p-d)/e,y:b/n,h:(g-b)/n};if(c.shape==="loft"){let x=(A,v,T,E,S)=>{let P=a[A],N=v??E,D=T??S,C=(N-D/2+.5)*P.s0,R=(N+D/2+.5)*P.s0;if(!Xo(c,A)||l[A])return[Vr(C,P),Vr(R,P)];let[k,L]=qf(c,A,P.s0),[O]=cg(c,k,L,P),B=O-k;return[C+B,R+B]},[_,y]=x("w",c.tx,c.tw,c.x,c.w),[M,w]=x("d",c.tz,c.td,c.z,c.d);m.tx=(_+y)/2/t-.5,m.tw=(y-_)/t,m.tz=(M+w)/2/e-.5,m.td=(w-M)/e}return m})}var aa=["body","fabric","cushion","wood","white","metal","dark","glass","plant","pot","accent"];var Tw=/^#[0-9a-f]{6}$/i;function Kf(i,t){let e=i?.[t];return typeof e=="string"&&Tw.test(e)?e:null}var ug=["matt","gloss","fabric","glass","metal","rattan"],Aw={fabric:"fabric",cushion:"fabric",metal:"metal",glass:"glass",white:"gloss"},Ew=i=>typeof i=="string"&&ug.includes(i);function hg(i,t){let e=i?.[t];return Ew(e)?e:Rw(t)}function Rw(i){return Aw[i]??"matt"}function fg(i){return ug.indexOf(i)}var Pw=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var Cw=["wall","pole","pillar","parcel","bank"];function pg(i){return Pw.includes(i.variant??"")?i.variant:"bin240"}function mg(i){return Cw.includes(i.variant??"")?i.variant:"wall"}var Ve=["#3a3f47","#3a3f47"],Gr=["#23262b","#23262b"],ti=["#5a3b25","#5a3b25"],Oe=["#1f4fa8","#1f4fa8"],sr=["#e3b616","#e3b616"],he=["#2f7d3b","#2f7d3b"],dg={default:{rest:Ve,bio:ti,paper:Oe,plastic:sr,glass:he,garden:he,recycling:sr,other:Ve},DE:{rest:Gr,bio:ti,paper:Oe,plastic:sr,glass:he,garden:he,recycling:sr},AT:{rest:Ve,bio:ti,paper:[Ve[0],"#c0262d"],plastic:sr,glass:he,garden:he},CH:{rest:["#d8d8d8","#d8d8d8"],bio:he,paper:Oe,plastic:Ve,glass:he,garden:he},NL:{rest:Ve,bio:he,paper:Oe,plastic:["#3a3f47","#e57a1f"],glass:he,garden:he},BE:{rest:Ve,bio:he,paper:Oe,plastic:Oe,glass:he,garden:he},GB:{rest:Gr,bio:["#3a3f47","#5a3b25"],paper:Oe,plastic:Oe,glass:Gr,garden:ti,recycling:Oe},US:{rest:Gr,bio:he,paper:Oe,plastic:Oe,glass:Oe,garden:he,recycling:Oe},CA:{rest:Gr,bio:he,paper:Oe,plastic:Oe,glass:Oe,garden:he,recycling:Oe},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Ve,bio:ti,paper:[Ve[0],"#e3b616"],plastic:[Ve[0],"#e3b616"],recycling:[Ve[0],"#e3b616"],glass:he,garden:he},IT:{rest:Ve,bio:ti,paper:Oe,plastic:sr,glass:he,garden:he},ES:{rest:Ve,bio:ti,paper:Oe,plastic:sr,glass:he,garden:he},PT:{rest:Ve,bio:ti,paper:Oe,plastic:sr,glass:he,garden:he},DK:{rest:Gr,bio:he,paper:Oe,plastic:Ve,glass:he,garden:he},SE:{rest:Gr,bio:ti,paper:Oe,plastic:Ve,glass:he,garden:he},NO:{rest:Ve,bio:ti,paper:Oe,plastic:Ve,glass:he,garden:he},FI:{rest:Ve,bio:ti,paper:Oe,plastic:Ve,glass:he,garden:he}},gg="DE";function bg(){return gg}function Iw(i,t){return dg[t]?.[i]??dg.default[i]??Ve}function xg(i,t=gg){let e=Iw(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var ar=Bt(3662079,.95),Zf=Bt(3662079,1),Ci=Bt(5995775,.34),yg=Bt(5995775,.22),$o=[-.55,.83],jt=-1,iu=16,lr=32,vg=48,Jf=64,Qt=class{p=[];c=[];f=[];uv;tile;m=null;materialOf=null;mat=0;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}useMaterials(t){let e=this.materialOf;return this.materialOf=t,this.mat=0,e}paint(t,e=t){let n=this.materialOf?this.materialOf(t)??this.materialOf(e)??0:0;this.mat=n,n&&!this.m&&(this.m=new Array(this.p.length/3).fill(0))}tri(t,e,n,r,o=r,s=r,a,l=jt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,o.r,o.g,o.b,s.r,s.g,s.b),this.f.push(l,l,l),this.m&&this.m.push(this.mat,this.mat,this.mat),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Vt;return t.setAttribute("position",new Lt(this.p,3)),t.setAttribute("color",new Lt(this.c,3)),t.setAttribute("fold",new Lt(this.f,1)),this.uv&&t.setAttribute("uv",new Lt(this.uv,2)),this.tile&&t.setAttribute("tile",new Lt(this.tile,2)),this.m&&t.setAttribute("fp3dMat",new Lt(this.m,1)),t.computeBoundingSphere(),t}},De=class{p=[];c=[];f=[];seg(t,e,n=ar,r=jt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,o){let[s,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||o<0)return this.seg(s,a,n,jt);if(s[1]>=r-1e-6)return this.seg(s,a,n,o);let l=(r-s[1])/(a[1]-s[1]),c=[s[0]+(a[0]-s[0])*l,r,s[2]+(a[2]-s[2])*l];this.seg(s,c,n,jt),this.seg(c,a,n,o)}geometry(){let t=new Vt;return t.setAttribute("position",new Lt(this.p,3)),t.setAttribute("color",new Lt(this.c,3)),t.setAttribute("fold",new Lt(this.f,1)),t}};function _g(i,t,e,n){let o=i.uv?2:0,s=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null,m:i.m?i.m[d]:0}},a=(u,f,d)=>({p:u.p.map((p,b)=>p+(f.p[b]-p)*d),c:u.c.map((p,b)=>p+(f.c[b]-p)*d),uv:u.uv&&f.uv?u.uv.map((p,b)=>p+(f.uv[b]-p)*d):null,tile:u.tile,m:u.m}),l=(u,f,d)=>{for(let p=0;p<3;p++){let b=u*3+p;for(let g=0;g<3;g++)i.p[b*3+g]=f[p].p[g],i.c[b*3+g]=f[p].c[g];if(i.uv&&f[p].uv)for(let g=0;g<o;g++)i.uv[b*2+g]=f[p].uv[g];if(i.tile&&f[p].tile)for(let g=0;g<2;g++)i.tile[b*2+g]=f[p].tile[g];i.f[b]=d}},c=(u,f)=>{let d=i.p.length/9;for(let p of u)i.p.push(...p.p),i.c.push(...p.c),i.f.push(f),i.uv&&i.uv.push(...p.uv??[.5,.5]),i.tile&&i.tile.push(...p.tile??[0,1]),i.m&&i.m.push(p.m);return d},h=i.p.length/9;for(let u=t;u<h;u++){let f=[s(u,0),s(u,1),s(u,2)],d=f.map(v=>v.p[1]>e+1e-6),p=f.map(v=>v.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let v=0;v<3;v++)i.f[u*3+v]=n;continue}let b=i.f[u*3],g=(v,T)=>a(v,T,(e-v.p[1])/(T.p[1]-v.p[1])),m=d.filter(Boolean).length,x=m===1?d.indexOf(!0):d.indexOf(!1),_=f[x],y=f[(x+1)%3],M=f[(x+2)%3],w=g(_,y),A=g(M,_);m===1?(l(u,[_,w,A],n),c([w,y,M],b),c([w,M,A],b)):(l(u,[_,w,A],b),c([w,y,M],n),c([w,M,A],n))}}function Mg(i,t,e,n){let r=i.p.length/6;for(let o=t;o<r;o++){let s=i.p.slice(o*6,o*6+3),a=i.p.slice(o*6+3,o*6+6),[l,c]=s[1]<=a[1]?[s,a]:[a,s];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[o*2]=n,i.f[o*2+1]=n;continue}let h=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,e,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[o*6+d]=l[d],i.p[o*6+3+d]=u[d];let f=i.c.slice(o*6,o*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var te=Math.PI/180;function Bt(i,t){let e=new K(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function Lw(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function bn(i,t=[]){let e=i.map(([n,r])=>new Zt(n,r));return Cs.triangulateShape(e,t.map(n=>n.map(([r,o])=>new Zt(r,o))))}function wg(i,t,e,n,r,o,s){let a=new K(s),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=t[d],b=t[(d+1)%4],g=e[d],m=e[(d+1)%4],x=b[0]-p[0],_=b[1]-p[1],y=Math.hypot(x,_);if(y<1e-6)continue;let w=.8+.28*((_/y*$o[0]-x/y*$o[1]+1)/2),A=(g[0]+m[0]-p[0]-b[0])/2*(-_/y)+(g[1]+m[1]-p[1]-b[1])/2*(x/y),v=Math.max(0,Math.min(1,A/Math.max(1e-6,Math.hypot(A,r-n)))),T=Bt(o,l(n)*w).lerp(a,v),E=Bt(o,l(r)*w).lerp(a,v);i.paint(v>.5?s:o,o),i.tri([p[0],n,p[1]],[g[0],r,g[1]],[m[0],r,m[1]],T,E,E),i.tri([p[0],n,p[1]],[m[0],r,m[1]],[b[0],n,b[1]],T,E,T)}let[c,h,u,f]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.paint(s,o),i.tri([c[0],r,c[1]],[u[0],r,u[1]],[h[0],r,h[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a))}function Sg(i,t,e,n,r,o,s,a,l,c){let h=new K(l),u=[];for(let g=0;g<c;g++){let m=g/c*Math.PI*2;u.push({y:o+Math.cos(m)*s,s:r+Math.sin(m)*s})}let f=(g,m)=>{let x=t(g,u[m%c].s);return[x[0],u[m%c].y,x[1]]},d=t(e,r),p=t(n,r),b=(g,m,x,_,y)=>{let M=(m[1]-g[1])*(x[2]-g[2])-(m[2]-g[2])*(x[1]-g[1]),w=(m[2]-g[2])*(x[0]-g[0])-(m[0]-g[0])*(x[2]-g[2]),A=(m[0]-g[0])*(x[1]-g[1])-(m[1]-g[1])*(x[0]-g[0]);M*_[0]+w*_[1]+A*_[2]<0?i.tri(g,x,m,y):i.tri(g,m,x,y)};i.paint(a);for(let g=0;g<c;g++){let m=(g+.5)/c*Math.PI*2,x=Bt(a,.62+.4*Math.max(0,Math.cos(m))),_=t((e+n)/2,r+Math.sin(m)*s),y=t((e+n)/2,r),M=[_[0]-y[0],Math.cos(m)*s,_[1]-y[1]];b(f(e,g),f(n,g+1),f(n,g),M,x),b(f(e,g),f(e,g+1),f(n,g+1),M,x)}for(let[g,m,x]of[[e,p,d],[n,d,p]]){i.paint(l,a);let _=t(g,r),y=[_[0],o,_[1]],M=[x[0]-m[0],0,x[1]-m[1]];for(let w=0;w<c;w++)b(y,f(g,w),f(g,w+1),M,h)}}function Ie(i,t,e,n,r,o,s={}){let a=typeof n=="number"?()=>n:p=>Math.max(e+.002,n(p[0],p[1])),l=s.aoFrom??e,c=s.fold??jt,h=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),u=(s.holes??[]).map(p=>Lw(p)>0?[...p].reverse():p),f=u.length?[...t,...u.flat()]:t,d=s.topFace===!1&&!s.bottom?[]:bn(t,u);if(s.topFace!==!1){i.paint(o,r);let p=new K(o);for(let[b,g,m]of d){let x=f[b],_=f[g],y=f[m];i.tri([x[0],a(x),x[1]],[y[0],a(y),y[1]],[_[0],a(_),_[1]],p,p,p,void 0,s.topFold??c)}}if(i.paint(r),s.bottom){let p=Bt(r,.55);for(let[b,g,m]of d){let x=f[b],_=f[g],y=f[m];i.tri([x[0],e,x[1]],[_[0],e,_[1]],[y[0],e,y[1]],p,p,p,void 0,c)}}for(let p of[t,...u])for(let b=0;b<p.length;b++){let g=p[b],m=p[(b+1)%p.length],x=m[0]-g[0],_=m[1]-g[1],y=Math.hypot(x,_);if(y<1e-6||s.skipSide?.(g,m))continue;let w=.8+.28*((_/y*$o[0]-x/y*$o[1]+1)/2),A=a(g),v=a(m),T=Bt(r,h(e)*w),E=Bt(r,h(A)*w),S=Bt(r,h(v)*w);i.tri([g[0],e,g[1]],[g[0],A,g[1]],[m[0],v,m[1]],T,E,S,void 0,c),i.tri([g[0],e,g[1]],[m[0],v,m[1]],[m[0],e,m[1]],T,S,T,void 0,c)}}function Tg(i,t,e,n){if(t.length<2)return;let r=new K(n),o=c=>.5+.5*Math.min(1,Math.max(0,c/1.6)),s=(c,h,u)=>{let f=h[0]-c[0],d=h[1]-c[1],p=h[2]-c[2],b=u[0]-c[0],g=u[1]-c[1],m=u[2]-c[2],x=d*m-p*g,_=p*b-f*m,y=f*g-d*b,M=Math.hypot(x,_,y);if(M<1e-10)return;let w=Math.hypot(x,y),v=.8+.28*(w>1e-9?(x/w*$o[0]+y/w*$o[1]+1)/2:.5),T=_/M,E=S=>{let P=Bt(e,o(S)*v*(T<0?1+.45*T:1));return T>0?P.lerp(r,T):P};i.paint(T>.5?n:e,e),i.tri(c,h,u,E(c[1]),E(h[1]),E(u[1]))},a=(c,h)=>{let u=c.pts[h%c.pts.length];return[u[0],c.y,u[1]]};for(let c=0;c+1<t.length;c++){let h=t[c],u=t[c+1];for(let f=0;f<h.pts.length;f++)s(a(h,f),a(u,f),a(u,f+1)),s(a(h,f),a(u,f+1),a(h,f+1))}let l=(c,h)=>{let u=c.pts.length,f=c.pts.reduce((b,g)=>b+g[0],0)/u,d=c.pts.reduce((b,g)=>b+g[1],0)/u;if(c.pts.every(b=>Math.hypot(b[0]-f,b[1]-d)<1e-6))return;let p=[f,c.y,d];for(let b=0;b<u;b++)h?s(p,a(c,b+1),a(c,b)):s(p,a(c,b),a(c,b+1))};l(t[0],!1),l(t[t.length-1],!0)}function Ag(i,t){return Math.max(i,t)<.05?8:12}function Eg(i,t,e,n,r,o){let s=[];for(let a=0;a<o;a++){let l=a/o*Math.PI*2;s.push([i+Math.cos(l)*e,t+Math.sin(l)*n])}return{pts:s,y:r}}function Rg(i,t,e,n,r,o){let s=Ag(e,n),a=s===8?4:6,l=(r+o)/2,c=(o-r)/2,h=[];for(let u=0;u<=a;u++){let f=-Math.PI/2+u/a*Math.PI,d=u===0||u===a?0:Math.cos(f);h.push(Eg(i,t,e*d,n*d,l+Math.sin(f)*c,s))}return h}function Pg(i,t,e,n,r,o,s){let a=s.map(([u,f])=>[Math.min(1,Math.max(0,u)),Math.min(1,Math.max(0,f))]),l=0,c=[[0,a[0][1]],...a,[0,a[a.length-1][1]]];for(let u=0;u<c.length;u++){let f=c[u],d=c[(u+1)%c.length];l+=f[0]*d[1]-d[0]*f[1]}l<0&&a.reverse();let h=Ag(e,n);return a.map(([u,f])=>Eg(i,t,e*u,n*u,r+f*(o-r),h))}function Cg(i,t,e,n,r,o,s){s=Math.max(0,Math.min(s,(t-i)/2,(n-e)/2,(o-r)/2));let a=i+s,l=t-s,c=e+s,h=n-s,u=(d,p)=>{let b=[],g=[[l,c,-90],[l,h,0],[a,h,90],[a,c,180]];for(let[m,x,_]of g)for(let y=0;y<=3;y++){let M=(_+y*30)*Math.PI/180;b.push([m+Math.cos(M)*d,x+Math.sin(M)*d])}return{pts:b,y:p}},f=[];for(let d of[0,45,90]){let p=d*Math.PI/180;f.push(u(s*Math.sin(p),r+s-s*Math.cos(p)))}for(let d of[90,45,0]){let p=d*Math.PI/180;f.push(u(s*Math.sin(p),o-s+s*Math.cos(p)))}return f}var la={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},F=la,pt=Bt(5995775,.3),kt=Bt(5995775,.17),ee=Bt(3662079,.45),Ii=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Qf(n)}rotated(t,e,n){let r=n*te,o=Math.cos(r),s=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*o-(c-e)*s,e+(l-t)*s+(c-e)*o))}moved(t,e){let n=this.tf;return new i(this.buf,this.lines,(r,o)=>n(r+t,o+e))}box(t,e,n,r,o,s,a,l=a,c=null){if(e-t<1e-4||s-o<1e-4||r-n<1e-4)return;let h=[this.tf(t,o),this.tf(t,s),this.tf(e,s),this.tf(e,o)];Ie(this.buf,ru(h),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,r,c)}prism(t,e,n,r,o=r,s=null){if(t.length<3||n-e<1e-4)return;let a=t.map(([l,c])=>this.tf(l,c));if(Ie(this.buf,ru(a),e,n,r,o,{aoFrom:0,bottom:e>.05}),s)for(let l=0;l<a.length;l++)this.line(a[l],a[(l+1)%a.length],n,n,s)}loft(t,e,n,r,o,s=o,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==ru(l)&&(l.reverse(),c.reverse()),wg(this.buf,l,c,n,r,o,s),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],r,r,a),this.line(l[h],c[h],n,r,a)}pad(t,e,n,r,o,s,a,l=a,c=.03,h=null){if(c=Math.min(c,(e-t)/2-.005,(s-o)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,o,s,a,l,h);this.loft([t+c,e-c,o+c,s-c],[t,e,o,s],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,o,s,a,a,h),this.loft([t,e,o,s],[t+c,e-c,o+c,s-c],r-c,r,a,l)}lyingCyl(t,e,n,r,o,s,a,l,c=l,h=12,u=null){let f=Math.min(a,o-r)/2;if(f<1e-4||s<1e-4)return;let d=(r+o)/2,p=t==="x"?e:n,b=t==="x"?n:e,g=(m,x)=>t==="x"?this.tf(m,x):this.tf(x,m);if(Sg(this.buf,g,p-s/2,p+s/2,b,d,f,l,c,h),u)for(let m of[p-s/2,p+s/2])for(let x=0;x<h;x++){let _=x/h*Math.PI*2,y=(x+1)/h*Math.PI*2;this.line(g(m,b+Math.sin(_)*f),g(m,b+Math.sin(y)*f),d+Math.cos(_)*f,d+Math.cos(y)*f,u)}}rings(t,e,n=e,r=null){let o=t.map(s=>{let a=s.pts.map(([l,c])=>this.tf(l,c));return{pts:this.mirrored?a.reverse():a,y:s.y}});if(Tg(this.buf,o,e,n),r){let s=l=>Math.max(...l.pts.map(([c,h])=>Math.hypot(c-l.pts[0][0],h-l.pts[0][1]))),a=o.reduce((l,c)=>s(c)>s(l)+1e-9?c:l,o[0]);for(let l=0;l<a.pts.length;l++)this.line(a.pts[l],a.pts[(l+1)%a.pts.length],a.y,a.y,r)}}cyl(t,e,n,r,o,s,a=s,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Ie(this.buf,ru(h),r,o,s,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],o,o,c)}seg(t,e,n,r,o,s,a=pt){this.line(this.tf(t,n),this.tf(r,s),e,o,a)}line(t,e,n,r,o){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],o,jt)}outline(t,e,n,r){for(let o=0;o<4;o++){let s=t[o],a=t[(o+1)%4];this.line(s,a,n,n,r),this.line(s,s,e,n,r)}}};function Qf(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function ru(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function Wr(i,t,e,n,r,o,s=F.metal,a=!1){let l=t/2-o-r,c=e/2-o-r;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,s):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,s)}}function ca(i,t,e,n,r,o,s,a=null,l=!1){let c=(e-t)/s;for(let h=1;h<s;h++){let u=t+c*h;i.seg(u,n,o,u,r,o,kt)}for(let h=0;h<s;h++){let u=t+c*(h+.5),f=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),f,o+.012,u+Math.min(.1,c/4),f,o+.012,ee);else{let d=s>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,o+.012,d,f+.08,o+.012,ee)}}}function Ig(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),h=n*.5,u=Math.min(.24,e*.28);Wr(i,t,e,.07,.05,.05,F.wood,!0),i.pad(o,s,.07,h-.08,a+.02,l,F.fabric,F.fabricTop,.04,pt),i.loft([o,s,a,a+u],[o+.01,s-.01,a,a+u*.5],h-.08,n,F.fabric,F.fabricTop,pt),i.pad(o,o+c,h-.08,n*.72,a+.02,l-.02,F.fabric,F.fabricTop,.04,pt),i.pad(s-c,s,h-.08,n*.72,a+.02,l-.02,F.fabric,F.fabricTop,.04,pt);let d=(s-c-(o+c))/r;for(let p=0;p<r;p++){let b=o+c+d*p+.02,g=b+d-.04;i.pad(b,g,h-.08,h+.05,a+u+.02,l-.06,F.cushion,F.cushion,.04),i.loft([b+.01,g-.01,a+u*.55,a+u+.14],[b+.03,g-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,F.cushion)}}function Lg(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),h=Math.min(.24,c*.28),u=Math.min(.2,c*.24),f=n*.5,d=n*.72,p=r?[-1,1]:[-1],b=(v,T)=>i.loft([v-.015,v+.015,T-.015,T+.015],[v-.025,v+.025,T-.025,T+.025],0,.07,F.wood);b(o+.06,a+.06),b(s-.06,a+.06),r||b(s-.06,a+c-.06);for(let v of p)b(v*(t/2-.06),l-.06),b(v*(t/2-c+.06),l-.06);i.pad(o,s,.07,f-.08,a+.02,a+c,F.fabric,F.fabricTop,.04,pt);for(let v of p){let[T,E]=v<0?[o+.02,o+c]:[s-c,s-.02];i.pad(T,E,.07,f-.08,a+c-.02,l,F.fabric,F.fabricTop,.04,pt)}i.loft([o,s,a,a+h],[o+.01,s-.01,a,a+h*.5],f-.08,n,F.fabric,F.fabricTop,pt);for(let v of p)v<0?i.loft([o,o+h,a+h,l],[o,o+h*.5,a+h,l-.01],f-.08,n,F.fabric,F.fabricTop,pt):i.loft([s-h,s,a+h,l],[s-h*.5,s,a+h,l-.01],f-.08,n,F.fabric,F.fabricTop,pt);for(let v of p){let[T,E]=v<0?[o+h,o+c]:[s-c,s-h];i.pad(T,E,f-.08,d,l-u,l,F.fabric,F.fabricTop,.04,pt)}r||i.pad(s-u,s,f-.08,d,a+.02,a+c-.02,F.fabric,F.fabricTop,.04,pt);let g=o+h,m=r?s-h:s-u,x=Math.max(1,Math.round((m-g)/.62)),_=(m-g)/x;for(let v=0;v<x;v++){let T=g+_*v+.02,E=T+_-.04;i.pad(T,E,f-.08,f+.05,a+h+.02,a+c-.04,F.cushion,F.cushion,.04),i.loft([T+.01,E-.01,a+h*.55,a+h+.14],[T+.03,E-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,F.cushion)}let y=a+c,M=l-u;if(M-y<.2)return;let w=Math.max(1,Math.round((M-y)/.62)),A=(M-y)/w;for(let v of p)for(let T=0;T<w;T++){let E=y+A*T+.02,S=E+A-.04;v<0?(i.pad(o+h+.02,o+c-.04,f-.08,f+.05,E,S,F.cushion,F.cushion,.04),i.loft([o+h*.55,o+h+.14,E+.01,S-.01],[o+h*.4,o+h*.4+.06,E+.03,S-.03],f+.03,n*.93,F.cushion)):(i.pad(s-c+.04,s-h-.02,f-.08,f+.05,E,S,F.cushion,F.cushion,.04),i.loft([s-h-.14,s-h*.55,E+.01,S-.01],[s-h*.4-.06,s-h*.4,E+.03,S-.03],f+.03,n*.93,F.cushion))}}function Fw(i,t,e,n){let r=-e/2,o=e/2,s=-t/2,a=t/2,l=Math.min(.32,n*.36);Wr(i,t,e,.08,.06,.03,F.wood,!0),i.box(s,a,.08,l,r+.06,o,F.wood,F.woodTop,pt),i.pad(s+.03,a-.03,l,l+.2,r+.08,o-.03,F.white,F.whiteTop,.03),i.box(s,a,.08,n-.05,r,r+.07,F.wood,F.woodTop,pt),i.box(s,a,n-.05,n,r,r+.09,F.wood,F.woodTop,kt);let c=l+.2,h=r+(e-.1)*.36;i.pad(s+.01,a-.01,c-.1,c+.05,h,o-.01,F.cushion,F.fabricTop,.025,kt),i.lyingCyl("x",0,h+.05,c-.02,c+.09,t-.02,.1,F.cushion,F.fabricTop,8);let u=t>1.2?2:1,f=(t-.2)/u;for(let d=0;d<u;d++){let p=s+.1+f*d,b=r+.12,g=Math.min(.42,e*.2),m=.1;i.loft([p+.03+m,p+f-.03-m,b+m*.5,b+g-m*.5],[p+.03,p+f-.03,b,b+g],c,c+.06,F.whiteTop),i.loft([p+.03,p+f-.03,b,b+g],[p+.03+m,p+f-.03-m,b+m*.5,b+g-m*.5],c+.06,c+.12,F.whiteTop,F.whiteTop,kt)}}function Dw(i,t,e,n){let r=Math.min(.46,n*.52);Wr(i,t,e,r-.04,.035,.02,F.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,F.wood,F.woodTop,pt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,F.cushion,F.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,F.wood,F.woodTop,pt)}function kw(i,t,e,n){Wr(i,t,e,n-.04,.06,.05,F.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.wood,F.woodTop,ee),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,F.body)}function Ow(i,t,e,n){let r=-t/2,o=t/2;i.box(r,o,n-.035,n,-e/2,e/2,F.wood,F.woodTop,pt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,F.metal);let s=Math.min(.42,t*.32);i.box(o-s,o,0,n-.035,-e/2+.03,e/2-.02,F.body,F.bodyTop,pt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(o-s,l,a,o,l,a,kt);for(let l of[n*.2,n*.5,n*.82])i.seg(o-s/2-.07,l,a+.012,o-s/2+.07,l,a+.012,ee);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,F.dark,F.dark,ee),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,F.metal)}function cr(i,t,e,n,r,o=null,s=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,F.body,F.bodyTop,pt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,F.dark),ca(i,-t/2,t/2,.08,n,e/2-.02,r,o,s)}function Nw(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,F.wood,F.woodTop,pt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,F.wood,F.woodTop,pt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,F.body);let o=Math.max(2,Math.round(n/.38));for(let s=0;s<=o;s++){let a=Math.min(n-.025,n/o*s);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,F.wood,F.woodTop,kt),s<o){let l=-t/2+.025+.04,c=s*3;for(;l<t/2-.025-.12;){let h=.03+c*7%5*.008,u=n/o-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?F.fabric:F.cushion,F.fabricTop),l+=h+.006,c++}}}}function Uw(i,t,e,n){let r=Math.max(1,Math.round(t/.6));cr(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.whiteTop,F.whiteTop,pt)}function Bw(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,F.white,F.whiteTop,pt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,kt);let o=t/2-.06;i.seg(o,r+.08,e/2+.015,o,r+.4,e/2+.015,ee),i.seg(o,r-.4,e/2+.015,o,r-.08,e/2+.015,ee)}var Yo=(i,t)=>Bt(parseInt(i.slice(1),16),t).getHex();function ou(i){let t=Math.max(...new K(i).toArray());return Yo(i,t>.05?Math.max(1,.62/t):1)}var Hr=!1;function Ng(i){Hr=i}function zw(i){let t=null;for(let e of aa){let n=Kf(i,e);if(!n)continue;t??={...la},t[e]=Hr?ou(n):Yo(n,.55);let r=`${e}Top`;r in t&&(t[r]=Hr?ou(n):Yo(n,.75))}return t??la}function ua(i,t,e){let n=F;F=zw(t.colors);let r=i.useMaterials(Vw(F,t.materials));try{return e()}finally{F=n,i.useMaterials(r)}}function Vw(i,t){let e=new Map,n=(r,o)=>{r!==void 0&&!e.has(r)&&e.set(r,o)};for(let r of aa){let o=fg(hg(t,r));n(i[r],o),n(i[`${r}Top`],o)}return r=>e.get(r)}function Ug(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let o=.62/n;i[e]*=o,i[e+1]*=o,i[e+2]*=o}}function Gw(i,t,e,n,r,o){let s=Hr?ou(o[0]):Yo(o[0],.55),a=Hr?ou(o[1]):Yo(o[1],.8),l=Yo(o[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,s,s,kt),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,a,a,kt),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,l,l,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,s,s,pt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,a,l,kt),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,a),i.box(t*.36,t*.42,n*.95,n,-.01,.01,a),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,a);return}if(r==="underground"){let u=Math.min(t,e)*.32;i.cyl(0,0,u,0,n*.9,s,s,16,pt),i.cyl(0,0,u*1.08,n*.9,n,a,l,16,kt),i.box(-u*.5,u*.5,n*.62,n*.8,u*.7,u*1.02,F.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,F.metal,F.metal,kt);return}if(r==="bin1100"){for(let f of[-1,1])for(let d of[-1,1])i.cyl(f*(t/2-.12),d*(e/2-.12),.05,0,.14,F.dark,F.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,s,s,pt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,a,l,kt),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,a,l,kt);return}let c=Math.min(.2,n*.19),h=-e/2;for(let u of[-1,1])i.lyingCyl("x",u*(t/2-.05),h+c/2+.01,0,c,.05,c,F.dark,F.metal,12);i.loft([-t*.42,t*.42,h+.07,e/2-.05],[-t/2+.01,t/2-.01,h+.05,e/2-.01],.03,n-.05,s,s,pt),i.box(-t/2,t/2,n-.05,n,h+.03,e/2,a,l,kt),i.box(-t*.42,t*.42,n-.1,n-.02,h,h+.04,a,l),r==="multi"&&(i.seg(-t/2,n+.002,(h+e/2)/2,t/2,n+.002,(h+e/2)/2,ee),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,kt))}function Hw(i,t,e,n,r,o,s){let a=t/r;i.box(-t/2,t/2,0,n,-e/2,e/2,s?F.metal:F.white,s?F.metal:F.whiteTop,pt);for(let l=0;l<r;l++){let c=-t/2+a*(l+.5);if(l&&i.seg(-t/2+a*l,n*.06,e/2+.001,-t/2+a*l,n*.94,e/2+.001,kt),!o)i.box(c-a*.34,c+a*.34,n*.16,n*.84,e/2,e/2+.006,F.white,F.whiteTop,kt),i.seg(c-a*.3,n*.5,e/2+.007,c+a*.3,n*.5,e/2+.007,kt);else if(s)i.box(c-a*.4,c+a*.4,n*.12,n*.9,e/2,e/2+.018,F.metal,F.metal,kt),i.seg(c-a*.36,n*.86,e/2+.019,c+a*.36,n*.86,e/2+.019,kt);else{let h=Math.min(a,n)*.34;i.lyingCyl("z",c,e/2+.002,n/2-h,n/2+h,.004,h*2,F.dark,F.dark,14,kt),i.seg(c-h*.45,n/2,e/2+.0045,c-h*.45+.004,n/2,e/2+.0045,pt),i.seg(c+h*.45-.004,n/2,e/2+.0045,c+h*.45,n/2,e/2+.0045,pt)}}}function Ww(i,t,e,n,r){if(r){i.box(-t/2,t/2,0,n,-e/2,e/2,F.white,F.whiteTop,pt);let s=Math.min(t,n)*.3;for(let a=0;a<20;a++){let l=a/20*Math.PI*2,c=(a+1)/20*Math.PI*2;i.seg(Math.cos(l)*s,n/2+Math.sin(l)*s,e/2+.002,Math.cos(c)*s,n/2+Math.sin(c)*s,e/2+.002,kt)}return}let o=Math.min(t,e)/2;i.cyl(0,0,o,0,n,F.white,F.whiteTop,24,pt),i.cyl(0,0,o*.5,n,n+.01,F.metal,F.metal,12)}function Xw(i,t,e,n,r){if(r){i.pad(-t/2,t/2,0,n,-e/2,e/2,F.white,F.whiteTop,.05,pt),i.box(-t*.18,t*.18,n*.8,n*.88,e/2,e/2+.006,F.dark);for(let s of[-t*.2,t*.2])i.cyl(s,0,.012,-.12,0,F.metal,F.metal,6);return}let o=Math.min(t,e)/2;i.cyl(0,0,o,.04,n-.05,F.white,F.whiteTop,20,pt),i.cyl(0,0,o*.85,n-.05,n,F.white,F.whiteTop,20);for(let s=0;s<3;s++){let a=s/3*Math.PI*2;i.cyl(Math.cos(a)*o*.7,Math.sin(a)*o*.7,.03,0,.04,F.dark,F.dark,6)}i.box(-o*.3,o*.3,n*.55,n*.65,o-.01,o+.01,F.dark)}function $w(i,t,e,n,r){let o=F.metal,s=Bt(F.metal,1.25).getHex(),a=Bt(F.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,F.wood,F.woodTop,kt),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,o,s,pt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,o,s,14,pt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,F.dark,F.dark,kt),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,o,s,12,kt),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,o,s,pt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,F.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,pt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,s,kt),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,F.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,pt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let h=-t/2+t/3*l+.015,u=n/2*c+.015;i.box(h,h+t/3-.03,u,u+n/2-.03,e/2,e/2+.01,a,s,kt),i.box(h+.04,h+t/3-.07,u+n/2-.09,u+n/2-.07,e/2+.01,e/2+.014,F.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,o,s,pt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,o,s,pt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,F.dark)}function Yw(i,t,e,n){let r=e/2-Bg;i.box(-t/2,t/2,.02,n,-e/2,r,F.body,F.bodyTop,pt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,F.dark);for(let o of[.35,.7,1.05,1.4])o>n-.15||(i.seg(-t/2+.03,o,r+.001,-.03,o,r+.001,kt),i.seg(.03,o,r+.001,t/2-.03,o,r+.001,kt))}var Bg=.06;function zg(i,t,e,n){ua(i,t,()=>qw(i,t,e,n))}function qw(i,t,e,n){let r=t.rotation*te,o=Math.cos(r),s=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(R,k,L)=>[t.x+R*o-L*s,k,t.z+R*s+L*o],c=(R,k,L,O,B)=>{i.paint(x.get(B)??-1),i.tri(R,k,L,B),i.tri(R,L,O,B),i.tri(R,L,k,B),i.tri(R,O,L,B)},h=(R,k,L,O)=>{let B=l(R[0],R[1],R[2]),V=l(k[0],k[1],k[2]),W=V[0]-B[0],z=V[1]-B[1],q=V[2]-B[2],j=Math.hypot(W,z,q)||1,ot=[W/j,z/j,q/j],H=Math.abs(ot[1])>.9?[1,0,0]:[0,1,0],X=[ot[1]*H[2]-ot[2]*H[1],ot[2]*H[0]-ot[0]*H[2],ot[0]*H[1]-ot[1]*H[0]],tt=Math.hypot(X[0],X[1],X[2])||1,et=[X[0]/tt*L,X[1]/tt*L,X[2]/tt*L],nt=[ot[1]*et[2]-ot[2]*et[1],ot[2]*et[0]-ot[0]*et[2],ot[0]*et[1]-ot[1]*et[0]],ut=[[1,1],[-1,1],[-1,-1],[1,-1]];i.paint(x.get(O)??-1);let bt=(ht,gt)=>[ht[0]+et[0]*ut[gt][0]+nt[0]*ut[gt][1],ht[1]+et[1]*ut[gt][0]+nt[1]*ut[gt][1],ht[2]+et[2]*ut[gt][0]+nt[2]*ut[gt][1]];for(let ht=0;ht<4;ht++){let gt=(ht+1)%4;i.tri(bt(B,ht),bt(V,ht),bt(V,gt),O),i.tri(bt(B,ht),bt(V,gt),bt(B,gt),O)}},u=(R,k,L,O,B,V,W,z)=>{c(l(R,O,B),l(k,O,B),l(k,O,V),l(R,O,V),z),c(l(R,L,V),l(k,L,V),l(k,O,V),l(R,O,V),W),c(l(R,L,B),l(k,L,B),l(k,L,V),l(R,L,V),W),c(l(R,L,B),l(R,L,V),l(R,O,V),l(R,O,B),W),c(l(k,L,B),l(k,L,V),l(k,O,V),l(k,O,B),W)},f=new K(F.body),d=new K(F.bodyTop),p=new K(F.accent),b=F.fabric!==la.fabric,g=new K(b?F.fabricTop:1929098),m=new K(b?F.fabric:995141),x=new Map([[f,F.body],[d,F.body],[p,F.accent],[g,F.fabric],[m,F.fabric]]),_=(R,k,L,O,B)=>{let V=(W,z,q)=>[W[0]+(z[0]-W[0])*q,W[1]+(z[1]-W[1])*q,W[2]+(z[2]-W[2])*q];for(let W=0;W<B;W++){let z=V(R,k,W/B),q=V(R,k,(W+1)/B),j=V(L,O,(W+1)/B),ot=V(L,O,W/B);c(l(z[0],z[1],z[2]),l(q[0],q[1],q[2]),l(j[0],j[1],j[2]),l(ot[0],ot[1],ot[2]),W%2?g:m)}},y=t.w/2,M=-t.d/2,w=Math.max(.12,Math.min(.3,t.h)),A=Math.max(4,Math.round(t.w/.3)),v=(t.awning_pitch??12)*Math.PI/180,T=(R,k)=>{t.awning_valance!==!1&&_([-y+.04,R,k+.01],[y-.04,R,k+.01],[-y+.04,R-.2,k+.01],[y-.04,R-.2,k+.01],A)},E=t.variant??"arm";if(E==="side"){let R=e,k=.05,L=0,O=-y+.08+a*(t.w-.16);u(-y,-y+.1,0,R+.05,L-.05,L+.05,f,d),u(y-.06,y,0,R+.05,L-.03,L+.03,f,d),a>.01&&_([-y+.1,R,L],[-y+.1,k,L],[O,R,L],[O,k,L],Math.max(4,Math.round((R-k)/.3))),h([O,k,L],[O,R,L],.02,p);return}if(E==="vertical"){let R=M,k=Math.min(t.d/2,M+w);u(-y,y,e,e+w,R,k,f,d);let L=(R+k)/2;for(let B of[-y+.02,y-.02])h([B,.02,L],[B,e,L],.02,p);let O=e-a*Math.max(0,e-.04);a>.01&&_([-y+.04,e,L],[y-.04,e,L],[-y+.04,O,L],[y-.04,O,L],A),h([-y+.03,O,L],[y-.03,O,L],.025,p);return}if(E==="pergola"){let R=t.d/2-.05,k=e+w,L=k-(R-M)*Math.tan(v);u(-y,y,e,k,M,M+w,f,d);for(let V of[-y+.05,y-.05])h([V,k,M+w],[V,L,R],.035,p),h([V,0,R],[V,L,R],.045,f);h([-y+.05,L,R],[y-.05,L,R],.035,p);let O=M+w+a*(R-M-w),B=k-(O-M)*Math.tan(v)+.04;a>.01&&_([-y+.08,k+.04,M+w],[y-.08,k+.04,M+w],[-y+.08,B,O],[y-.08,B,O],A),h([-y+.08,B,O],[y-.08,B,O],.025,p);return}let S=M,P=M+w;u(-y,y,e,e+w,S,P,f,d);let N=[P-.02,e+w*.35];if(E==="drop"){let R=Math.max(.3,t.d-w),k=[P,N[1]-R],L=a*(Math.PI/2+v),O=[k[0]+Math.sin(L)*R,k[1]+Math.cos(L)*R];for(let B of[-y+.08,y-.08])h([B,k[1],k[0]],[B,O[1],O[0]],.018,p);a>.01&&_([-y+.04,N[1],N[0]],[y-.04,N[1],N[0]],[-y+.04,O[1],O[0]],[y-.04,O[1],O[0]],A),h([-y+.02,O[1],O[0]],[y-.02,O[1],O[0]],.03,p),a>.05&&T(O[1],O[0]);return}let D=Math.max(0,t.d-w)*a,C=[N[0]+D,N[1]-D*Math.tan(v)];if(D>.01){_([-y+.04,N[1],N[0]],[y-.04,N[1],N[0]],[-y+.04,C[1],C[0]],[y-.04,C[1],C[0]],A);let R=Math.max(.3,(t.d-w)/2+.05);for(let k of[-1,1]){let L=k*(y-.12),O=[L,e+.02,P-.04],B=[L,C[1]-.02,C[0]],V=Math.hypot(B[2]-O[2],B[1]-O[1]),W=Math.sqrt(Math.max(0,R*R-(V/2)**2)),z=[L-k*Math.min(W,y-.15),(O[1]+B[1])/2,(O[2]+B[2])/2];h(O,z,.018,p),h(z,B,.018,p)}}h([-y+.02,C[1],C[0]],[y-.02,C[1],C[0]],.03,p),D>.05&&T(C[1],C[0])}function Vg(i,t,e,n,r){let o=i.p.length;ua(i,t,()=>Kw(i,t,e,n,r)),t.mirror&&nd(i,o)}function Kw(i,t,e,n,r){let o=t.rotation*te,s=Math.cos(o),a=Math.sin(o),l=t.mirror?-1:1,c=(y,M)=>[t.x+l*y*s-M*a,t.z+l*y*a+M*s],h=e+.05,u=e+t.h-.02,f=new K(.75,.1,.14),d=new K(F.dark),p=new K(F.accent),b=t.w/2-.006,g=(y,M,w)=>{i.paint(F.body);let A=w/m,v=new K(F.body!==la.body?F.bodyTop:2043212).lerp(f,A),T=new K(F.body).lerp(f,A*.8),E=Math.cos(w),S=Math.sin(w),P=(C,R)=>c(y+M*(C*E-R*S),t.d/2+C*S+R*E),N=(C,R,k,L)=>{let[O,B,V,W]=C;i.tri([O[0],R,O[1]],[B[0],R,B[1]],[V[0],k,V[1]],L),i.tri([O[0],R,O[1]],[V[0],k,V[1]],[W[0],k,W[1]],L)},D=(C,R,k,L,O,B,V,W=V)=>{let z=[P(C,B),P(R,B),P(R,O),P(C,O)];N([z[0],z[1],z[1],z[0]],k,L,W),N([z[3],z[2],z[2],z[3]],k,L,V),N([z[0],z[3],z[3],z[0]],k,L,V),N([z[1],z[2],z[2],z[1]],k,L,V),N([z[0],z[1],z[2],z[3]],L,L,V),N([z[3],z[2],z[1],z[0]],k,k,V)};return D(0,b,h,u,-Bg,0,T,v),D(b-.05,b-.03,e+t.h*.45,e+t.h*.75,.005,.025,p),D},m=1.83;g(-t.w/2,1,n*m)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,r*m)(.06,b-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function Zw(i,t,e,n){cr(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.dark,F.dark,pt);for(let[r,o,s]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=o*e/.62;i.cyl(a,l,s,n,n+.004,F.dark,1451583,12,ee)}}function Jw(i,t,e,n){cr(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,F.whiteTop,F.whiteTop,pt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,F.whiteTop,F.whiteTop,pt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,F.whiteTop,F.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,F.whiteTop,F.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,F.metal,F.metal,ee),i.cyl(0,-e/2+.05,.02,n,n+.28,F.metal,F.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,F.metal)}function jw(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,F.white,F.whiteTop,pt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,F.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,F.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,F.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,F.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,F.glass,F.glass,ee),i.cyl(-t/2+.04,0,.02,n,n+.12,F.metal,F.metal,8)}function Qw(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,F.whiteTop,F.whiteTop,pt),i.cyl(0,0,.04,.05,.052,F.metal,F.metal,8);for(let[r,o,s,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,o,s,.05,a,ee),i.seg(r,n,o,s,n,a,ee),i.seg(s,.05,a,s,n,a,ee);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,F.metal,F.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,F.metal,F.metal,12,ee)}function tS(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,F.white,F.whiteTop,pt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,F.white,F.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,F.white,F.whiteTop,12,pt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,F.whiteTop)}function eS(i,t,e,n){cr(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,F.white,F.whiteTop,pt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,F.glass,F.glass,ee),i.cyl(0,-e/2+.06,.018,n,n+.2,F.metal,F.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,F.glass,F.glass,ee)}function nS(i,t,e,n){cr(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),o=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,F.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,F.metal),i.box(-r/2,r/2,n+.1,n+.1+o,-e/2+.12,-e/2+.16,F.dark,F.dark,ee)}function iS(i,t,e,n){let r=Math.min(t,e)/2,o=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,o,F.pot,F.pot,10,pt),i.cyl(0,0,r*.08,o,n*.55,F.wood,F.wood,6);let s=4;for(let a=0;a<s;a++){let l=a/(s-1),c=r*(.95-.55*l),h=o+(n-o)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-o)*.16,F.plant,F.plantTop,8,a===s-1?kt:null)}}function rS(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,F.fabric,F.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,o,s,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,o,s,.014,a,pt)}var Fg=.045;function oS(i,t,e,n,r=!1,o=null,s=0,a=0){let{n:l,flat:c,winders:h,skip:u}=C0({w:t,d:e,h:n,stair_turn:o,stair_landing:s}),f=n/l,d=e/2-(u?t:0),p=Math.max(0,Math.min(a,e-.2*(l-u))),b=(d+e/2-p)/(l-u),g=w=>r?Math.max(0,w-Fg):0;if(c){let w=f*c;i.box(-t/2,t/2,0,w,d,e/2,F.wood,F.woodTop,pt)}if(h){let w=o==="right"?-1:1,A=[-w*(t/2),d],v=T=>T<=t?[-w*(t/2)+w*T,e/2]:[w*(t/2),e/2-(T-t)];for(let T=0;T<h;T++){let E=2*t*T/h,S=2*t*(T+1)/h,P=[A,v(E)];E<t&&S>t&&P.push(v(t)),P.push(v(S));let N=f*(T+1);i.prism(P,g(N),N,F.wood,F.woodTop,pt)}}for(let w=u;w<l;w++){let A=d-b*(w-u),v=w===l-1&&p>0?-e/2:A-b,T=f*(w+1);i.box(-t/2,t/2,g(T),T,v,A,F.wood,F.woodTop),i.seg(-t/2,T,A,t/2,T,A,pt)}u||i.seg(-t/2,0,e/2,-t/2,f,e/2,pt);let m=f*(u+1);for(let w of[-t/2,t/2])i.seg(w,m,d,w,n,-e/2+b,kt);if(r)for(let w=u;w<l;w++){let A=d-b*(w-u),v=f*(w+1);for(let T of[-t/2,t/2-.035])i.box(T,T+.035,Math.max(0,v-.28),v-Fg,A-b,A,F.wood,F.woodTop)}let x=.9,_=t/2-.03,y=Math.max(u+1,l-4),M=w=>d-b*(w-u+.5);i.seg(_,f*(u+1)+x,M(u),_,f*y+x,M(y-1),ee);for(let w=u;w<y;w+=3){let A=f*(w+1);i.seg(_,A,M(w),_,A+x,M(w),kt)}}var sS=72;function aS(i,t,e,n){let r=-e/2,o=e/2,s=.05;i.box(-t/2,t/2,n-.03,n,r,r+s,F.white,F.whiteTop,pt),i.box(-t/2,t/2,n-.03,n,o-s,o,F.white,F.whiteTop,pt),i.box(-t/2,-t/2+s,n-.03,n,r+s,o-s,F.white,F.whiteTop,pt),i.box(t/2-s,t/2,n-.03,n,r+s,o-s,F.white,F.whiteTop,pt);let a=Math.min(e-2*s,n-.3);i.box(-t/2+s,t/2-s,n-a,n-.03,r,r+.035,F.white,F.whiteTop,pt);let l=Math.max(.12,t/2-.1),c=r+.06,h=Math.min(o,c+n/Math.tan(sS*te)),u=.03;for(let d of[-l,l-.04])i.loft([d,d+.04,h-u,h],[d,d+.04,c,c+u],0,n-.03,F.metal,F.metal,pt);let f=Math.max(2,Math.round(n/.25));for(let d=1;d<f;d++){let p=n*d/f,b=h+(c-h)*d/f;i.box(-l,l,p-.015,p+.015,b-.06,b+.02,F.metal,F.metal)}}function lS(i,t,e,n){let{k:r,steps1:o,steps2:s,fw:a,landing:l,run:c,rise:h}=I0(t,e,n),u=-t/2,f=-t/2+a,d=t/2-a,p=t/2,b=-e/2+l;for(let A=0;A<o;A++){let v=e/2-c*A,T=h*(A+1);i.box(u,f,0,T,v-c,v,F.wood,F.woodTop),i.seg(u,T,v,f,T,v,pt)}i.seg(u,0,e/2,u,h,e/2,pt);let g=h*r,m=.2;i.box(u,f,0,g,-e/2,b,F.wood,F.woodTop),i.box(f,p,Math.max(0,g-m),g,-e/2,b,F.wood,F.woodTop),i.seg(u,g,b,f,g,b,pt);for(let A=0;A<s;A++){let v=b+c*A,T=h*(r+1+A);i.box(d,p,Math.max(0,T-h-m),T,v,v+c,F.wood,F.woodTop),i.seg(d,T,v,p,T,v,pt)}i.seg(u,h,e/2,u,g,b,kt),i.seg(p,g,b,p,n,b+c*(s-1),kt);let x=.9,_=f-.03,y=d+.03,M=b-.03,w=Math.max(1,s-4);i.seg(_,h+x,e/2-c/2,_,g+x,M,ee),i.seg(_,g+x,M,y,g+x,M,ee),i.seg(y,g+x,M,y,h*(r+w)+x,b+c*(w-.5),ee);for(let A=0;A<o;A+=3){let v=e/2-c*(A+.5);i.seg(_,h*(A+1),v,_,h*(A+1)+x,v,kt)}for(let A of[_,y])i.seg(A,g,M,A,g+x,M,kt);for(let A=2;A<w;A+=3){let v=b+c*(A+.5);i.seg(y,h*(r+1+A),v,y,h*(r+1+A)+x,v,kt)}}function cS(i,t,e,n){Wr(i,t,e,.12,.03,.04,F.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,F.wood,F.woodTop,pt),ca(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function uS(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,F.wood,F.woodTop,pt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,F.dark);let r=Math.max(3,Math.round((n-.06)/.22)),o=e/2-.02;for(let s=1;s<r;s++){let a=.06+(n-.06)/r*s;i.seg(-t/2,a,o,t/2,a,o,kt)}for(let s=0;s<r;s++){let a=.06+(n-.06)/r*(s+.5);i.seg(-.08,a,o+.012,.08,a,o+.012,ee)}}function hS(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,F.wood,F.woodTop,pt),ca(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,F.body,F.bodyTop,pt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.wood,F.woodTop,pt);let r=Math.max(2,Math.round(t/.25));for(let o=0;o<r;o++){let s=-t/2+t/r*(o+.5);i.box(s-.015,s+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,F.metal,F.metal)}}function Dg(i,t,e,n,r){let s=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+s,F.wood,F.woodTop,pt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,F.wood,F.woodTop,pt),i.box(-t/2+(r?s:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+s,F.cushion,F.cushion,kt),r&&(i.box(-t/2,-t/2+s,0,.45-.06,-e/2+s,e/2,F.wood,F.woodTop,pt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,F.wood,F.woodTop,pt),i.box(-t/2+a,-t/2+s,.45-.06,.45+.02,-e/2+a,e/2-.02,F.cushion,F.cushion,kt))}function fS(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,F.metal,F.metal,12),i.cyl(0,0,.025,.02,n-.05,F.metal,F.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,F.metal,F.metal,12,kt),i.cyl(0,0,r,n-.05,n,F.cushion,F.fabricTop,14,pt)}function dS(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,F.metal),i.box(-.03,.03,.04,.08,-r,r,F.metal),i.cyl(0,0,.06,.02,.1,F.dark,F.dark,8),i.cyl(0,0,.025,.1,.44,F.metal,F.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,F.fabric,F.cushion,pt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,F.fabric,F.fabricTop,pt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,F.metal)}function pS(i,t,e,n){Wr(i,t,e,.08,.04,.05,F.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,F.fabric,F.cushion,pt)}function mS(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,F.body,F.bodyTop,pt),ca(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function gS(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,F.body,F.bodyTop,pt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,F.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,F.dark,F.dark,ee),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,ee);for(let o of[.85,1.45])i.seg(-t/2,o,r,t/2,o,r,kt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,ee),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,ee)}function bS(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,F.body,F.bodyTop,pt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,F.dark),ca(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.whiteTop,F.whiteTop,pt)}function xS(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,F.body,F.bodyTop,pt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,F.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,ee),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.whiteTop,F.whiteTop,pt)}function kg(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,F.white,F.whiteTop,pt);let o=e/2-.012;i.seg(-t/2,n-.14,o,t/2,n-.14,o,kt),i.seg(t/2-.16,n-.07,o,t/2-.08,n-.07,o,ee);let s=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,s+Math.sin(h)*a,o,Math.cos(u)*a,s+Math.sin(u)*a,o,ee),r||i.seg(Math.cos(h)*a*.72,s+Math.sin(h)*a*.72,o,Math.cos(u)*a*.72,s+Math.sin(u)*a*.72,o,kt)}}function yS(i,t,e,n){for(let s of[-1,1])for(let a of[-1,1])i.box(s*(t/2)-(s>0?.05:0),s*(t/2)+(s<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),F.wood,F.woodTop);for(let s of[.25,n-.55])i.box(-t/2,t/2,s,s+.08,-e/2,e/2,F.wood,F.woodTop,pt),i.box(-t/2+.04,t/2-.04,s+.08,s+.24,-e/2+.05,e/2-.05,F.white,F.whiteTop,kt),i.box(-t/2+.05,t/2-.05,s+.24,s+.33,-e/2+.08,-e/2+.4,F.whiteTop,F.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,F.wood,F.woodTop);let o=t/2-.35;for(let s of[o-.18,o+.18])i.seg(s,0,e/2+.02,s,n-.15,e/2+.02,pt);for(let s=.3;s<n-.2;s+=.28)i.seg(o-.18,s,e/2+.02,o+.18,s,e/2+.02,kt)}function vS(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,F.metal,F.metal,12),i.cyl(0,0,.05,.03,n-.04,F.wood,F.wood,8),i.cyl(0,0,r,n-.04,n,F.wood,F.woodTop,20,pt)}function _S(i,t,e,n){Wr(i,t,e,n-.03,.04,.03,F.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,F.wood,F.woodTop,pt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,F.body,F.bodyTop,kt)}function MS(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,F.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,F.dark,F.dark,ee)}function wS(i,t,e,n){let r=td;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,F.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,F.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,F.white,F.whiteTop,pt);let o=Math.max(3,Math.round(t/.1));for(let s=1;s<o;s++){let a=-t/2+t/o*s;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,kt)}}function SS(i,t,e,n){let r=ed;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,F.white,F.whiteTop,pt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,F.white,F.white,pt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,F.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,kt),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,ee)}function qo(i,t,e,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,ee)}}function TS(i,t,e,n,r){let s=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,F.dark,F.body,pt),i.seg(-t*.25,1.1+n*.15,s+.004,-t*.25,1.1+n*.85,s+.004,ee),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,s,s+.005,F.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,F.white,F.whiteTop,pt),qo(i,0,1.1+n*.66,Math.min(t,n)*.22,s+.004),i.seg(-t*.08,1.1+n*.66,s+.005,t*.08,1.1+n*.66,s+.005,ee);for(let a of[-1,1])qo(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,F.white,F.whiteTop,pt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,F.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,ee);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,kt)}function AS(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,F.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,F.metal,F.metal,pt);for(let s of[-t*.4,-t*.25,-t*.1])i.seg(s,.05+r*2+.003,-r,s,.05+r*2+.003,r,kt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,F.dark,F.body,14,pt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,F.glass,F.glass,14);let o=Math.min(t*.2,e*.45)*.95;for(let s=0;s<16;s++){let a=s/16*Math.PI*2,l=(s+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*o,n*.83,Math.sin(a)*o,t*.28+Math.cos(l)*o,n*.83,Math.sin(l)*o,ee)}}function ES(i,t,e,n,r){let o=Math.min(t,e)/2;if(i.cyl(0,0,o*.95,0,n*.08,F.dark,F.dark,16),i.cyl(0,0,o,n*.08,n*.78,F.dark,F.body,18,pt),i.cyl(0,0,o*.75,n*.78,n*.84,F.dark,F.body,16),r==="side6"){let a=o*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,F.dark,F.metal,pt),qo(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,F.dark,F.body);return}i.cyl(0,0,o*.45,n*.84,n*.95,F.dark,F.metal,16,pt);let s=o*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*s,n*.955,Math.sin(l)*s,Math.cos(c)*s,n*.955,Math.sin(c)*s,ee)}i.box(-.02,.02,n*.95,n,-o*.35,o*.35,F.dark,F.body)}function RS(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,F.white,F.whiteTop,pt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,F.dark);let r=Math.min(n*.38,t*.3),o=-t*.15,s=n*.53;qo(i,o,s,r,e/2+.004,24),qo(i,o,s,r*.55,e/2+.004,16),i.seg(o-r,s,e/2+.005,o+r,s,e/2+.005,kt),i.seg(o,s-r,e/2+.005,o,s+r,e/2+.005,kt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,F.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,ee);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,kt)}function PS(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,F.white,F.whiteTop,pt);for(let o of[-1,1])qo(i,o*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,ee);for(let o of[-1,1])i.box(o*t*.25-t*.18,o*t*.25+t*.18,0,n*.5,-e/2,e/2,F.white,F.glass,kt)}function CS(i,t,e,n){let r=A0-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,F.metal,F.metal,pt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,F.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,F.accent,F.accent)}function IS(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,F.dark,F.body,pt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,F.dark,F.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,ee),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,kt)}function LS(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,F.dark,F.body,pt);let o=Math.min(t,n)*.28,s=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*o,s+Math.sin(c)*o,e/2+.003,Math.cos(h)*o,s+Math.sin(h)*o,e/2+.003,ee)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,F.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,F.dark,F.body)}function FS(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,F.white,F.whiteTop,pt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,kt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,kt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,F.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,F.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,ee)}function DS(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,F.white,F.whiteTop,pt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,ee),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,kt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,F.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,F.dark,F.body,pt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,ee),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,F.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,F.dark);let o=Math.max(2,Math.round((n-.06)/.3)),s=(n-.06)/o;for(let a=0;a<o;a++)i.box(-t/2,t/2,.06+a*s+.004,.06+(a+1)*s,-e/2,e/2,F.white,F.whiteTop,pt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,ee)}}var td=.12,ed=2.05;function Gg(i,t,e){let n=Math.min(.04,.08*Math.min(i,t)),r=Math.min(i-n,(t-n)*e);return{w:r,h:r/e}}function id(i,t){let e=kS(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function kS(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),o=g0(i.type);if(o){let l=t?tn(t,i):0,c=(o.x-o.w/2)*e,h=(o.x+o.w/2)*e,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+o.y*r+u,y1:l+(o.y+o.h)*r-u,z:(o.z+o.d/2)*n}}let s=t&&i.type!=="fridge_smart"?tn(t,i)-Dr(i):0,a=OS(i,e,n,r,t);return a?{...a,y0:a.y0+s,y1:a.y1+s}:null}function OS(i,t,e,n,r){if(i.type==="pool_pump"){let o=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+o*2,z:o+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let o=Math.min(t,e)/2;return{x0:-o*.4,x1:o*.4,y0:n*.85,y1:n*.94,z:o*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let o=Math.min(t*.8,1.45),s=o*.56;return{x0:-o/2+.02,x1:o/2-.02,y0:n+.12,y1:n+.08+s,z:-e/2+.165}}if(i.type==="tv_wall"){let o=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:o+.02,y1:o+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let o=r?tn(r,i):0;return{x0:.06,x1:t/2-.06,y0:o+n*.52+.01,y1:o+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:td+.02,y1:td+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:ed+.015,y1:ed+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let o=(n-.14)/2+.04,s=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-s,x1:s,y0:o-s,y1:o+s,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function NS(i){if(i.type==="table_round"||i.type==="plant")return!0;let t=le(i.type);if(!t?.parts.length)return!1;let e=t.parts.reduce((r,o)=>o.w*o.d>r.w*r.d?o:r,t.parts[0]);return(e.shape==="cyl"&&(e.axis??"y")==="y"||e.shape==="sphere"||e.shape==="lathe")&&e.w>=.85&&e.d>=.85}function US(i,t,e,n,r,o=!1,s=0){let a=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),l=new K(1-r,1-r,1-r),c=new K(1,1,1),h=s+.003;if(o){let b=y=>[y[0],h,y[1]],m=(y,M,w)=>t(Math.cos(y/24*2*Math.PI)*M,Math.sin(y/24*2*Math.PI)*w),x=i.p.length,_=b(t(0,0));for(let y=0;y<24;y++){let M=b(m(y,e/2,n/2)),w=b(m(y+1,e/2,n/2)),A=b(m(y,e/2+a,n/2+a)),v=b(m(y+1,e/2+a,n/2+a));i.tri(_,M,w,l),i.tri(M,A,v,l,c,c),i.tri(M,v,w,l,c,l)}Qf(t)&&nd(i,x);return}let u=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-a,-n/2-a),t(e/2+a,-n/2-a),t(e/2+a,n/2+a),t(-e/2-a,n/2+a)],d=b=>[b[0],h,b[1]],p=i.p.length;i.tri(d(u[0]),d(u[1]),d(u[2]),l),i.tri(d(u[0]),d(u[2]),d(u[3]),l);for(let b=0;b<4;b++){let g=(b+1)%4;i.tri(d(u[b]),d(f[b]),d(f[g]),l,c,c),i.tri(d(u[b]),d(f[g]),d(u[g]),l,c,l)}Qf(t)&&nd(i,p)}function su(i,t,e,n,r=0,o=!1){ua(i,n,()=>BS(i,t,e,n,r,o))}function nd(i,t){let e=(n,r,o)=>{if(n)for(let s=0;s<o;s++){let a=r+o+s,l=r+2*o+s,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function BS(i,t,e,n,r,o=!1){let s=le(n.type)?0:r-Dr(n);if(le(n.type)||Math.abs(s)<.001)return Og(i,t,e,n,r,o);let a=i.p.length,l=t.p.length,c=e.p.length;Og(i,t,r<.05?e:new Qt,n,0);for(let h=a+1;h<i.p.length;h+=3)i.p[h]+=s;for(let h=l+1;h<t.p.length;h+=3)t.p[h]+=s;if(r<0)for(let h=c+1;h<e.p.length;h+=3)e.p[h]+=s}function Og(i,t,e,n,r,o=!1){let s=n.rotation*te,a=Math.cos(s),l=Math.sin(s),c=n.mirror?-1:1,h=(b,g)=>[n.x+c*b*a-g*l,n.z+c*b*l+g*a],u=new Ii(i,t,h),f=Math.max(.05,n.w),d=Math.max(.05,n.d),p=Math.max(.005,n.h);switch(n.type){case"sofa":Ig(u,f,d,p,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":Ig(u,f,d,p,1);break;case"sofa_l":Lg(u,f,d,p,!1);break;case"sofa_u":Lg(u,f,d,p,!0);break;case"bed":Fw(u,f,d,p);break;case"chair":Dw(u,f,d,p);break;case"table":kw(u,f,d,p);break;case"desk":Ow(u,f,d,p);break;case"nightstand":cr(u,f,d,p,1,p*.72,!0),u.seg(-f/2,p*.5,d/2-.02,f/2,p*.5,d/2-.02,kt);break;case"wardrobe":cr(u,f,d,p,Math.max(2,Math.round(f/.5)),p*.5);break;case"shelf":Nw(u,f,d,p);break;case"kitchen":Uw(u,f,d,p);break;case"fridge":Bw(u,f,d,p);break;case"fridge_smart":Yw(u,f,d,p);break;case"waste_bin":{let b=i.c.length;Gw(u,f,d,p,pg(n),xg(n,bg())),Hr&&Ug(i.c,b);break}case"mailbox":{let b=i.p.length,g=t.p.length;$w(u,f,d,p,mg(n));let m=Dr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=m;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=m;if(m>0)return;break}case"wifi_ap":Ww(u,f,d,p,n.variant==="wall");return;case"water_heater":if(Xw(u,f,d,p,n.variant==="wall"),n.variant==="wall")return;break;case"wall_switch":case"wall_socket":{let b=i.p.length,g=t.p.length;Hw(u,f,d,p,F0(n).length,n.type==="wall_socket",n.variant==="outdoor");let m=Dr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=m;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=m;return}case"awning":return;case"stove":Zw(u,f,d,p);break;case"sink":Jw(u,f,d,p);break;case"bathtub":jw(u,f,d,p);break;case"shower":Qw(u,f,d,p);break;case"wc":tS(u,f,d,p);break;case"washbasin":eS(u,f,d,p);break;case"tv_board":nS(u,f,d,p);break;case"plant":iS(u,f,d,p);break;case"rug":rS(u,f,d);return;case"stairs":oS(u,f,d,p,!!n.stair_open,n.stair_turn??null,n.stair_landing??0,n.stair_top??0);break;case"stairs_u":lS(u,f,d,p);break;case"stairwell":return;case"loft_ladder":aS(u,f,d,p);break;case"sideboard":cS(u,f,d,p);break;case"dresser":uS(u,f,d,p);break;case"tall_cabinet":cr(u,f,d,p,1,p*.5);break;case"coat_rack":hS(u,f,d,p);break;case"bench":Dg(u,f,d,p,!1);break;case"corner_bench":Dg(u,f,d,p,!0);break;case"bar_stool":fS(u,f,d,p);break;case"office_chair":dS(u,f,d,p);break;case"stool":pS(u,f,d,p);break;case"kitchen_wall":mS(u,f,d,p);return;case"kitchen_tall":gS(u,f,d,p);break;case"island":bS(u,f,d,p);break;case"worktop":u.box(-f/2,f/2,Math.max(0,p-.04),p,-d/2,d/2,F.whiteTop,F.whiteTop,pt);return;case"dishwasher":xS(u,f,d,p);break;case"washer":kg(u,f,d,p,!1);break;case"dryer":kg(u,f,d,p,!0);break;case"bunk_bed":yS(u,f,d,p);break;case"table_round":vS(u,f,d,p);break;case"coffee_table":_S(u,f,d,p);break;case"tv_wall":MS(u,f,d,p);return;case"parking":{let g=[[-f/2,-d/2],[f/2,-d/2],[f/2,d/2],[-f/2,d/2]];for(let m=0;m<4;m++)u.seg(g[m][0],.012,g[m][1],g[(m+1)%4][0],.012,g[(m+1)%4][1],kt);u.seg(-f*.15,.012,d/2-.45,0,.012,d/2-.2,pt),u.seg(0,.012,d/2-.2,f*.15,.012,d/2-.45,pt);return}case"robot_vacuum":u.box(-f*.45,f*.45,0,p,-d/2,-d/2+d*.3,F.white,F.whiteTop,pt),u.box(-f*.2,f*.2,p*.5,p*.62,-d/2+d*.3,-d/2+d*.31,F.accent);return;case"radiator":wS(u,f,d,p);return;case"ac_unit":SS(u,f,d,p);return;case"inverter":TS(u,f,d,p,n.variant??null);return;case"grid_point":IS(u,f,d,p);break;case"wallbox":LS(u,f,d,p);return;case"pool_pump":AS(u,f,d,p);break;case"pool_filter":ES(u,f,d,p,n.variant??null);break;case"pool_heat_pump":RS(u,f,d,p);break;case"pool_dosing":PS(u,f,d,p);break;case"pool_valve":CS(u,f,d,p);return;case"meter":FS(u,f,d,p);return;case"home_battery":if(DS(u,f,d,p,n.variant??null),n.variant==="wall")return;break;default:{let b=le(n.type);if(b){let g=zc(n.type),m=g?x=>Tf(g,x):p0(n.type)&&!o?ea:null;if(Ko(u,b,f,d,p,r,null,null,m),b.rack_frame&&zS(u,b,n,f,d,p,r),r>.05)return}else u.box(-f/2,f/2,0,p,-d/2,d/2,F.body,F.bodyTop,pt)}}US(e,h,f,d,n.type==="plant"?.35:.5,NS(n),Math.min(0,r))}function zS(i,t,e,n,r,o,s){let a=pr(t);if(!a)return;let l=mr(a,n,r,o);for(let h of $d(l))i.box(h.x0,h.x1,s+h.y0,s+h.y1,h.z0,h.z1,F.accent,F.accent);let c=e.rack?.slots;if(c?.length)for(let h of gr(l,c,le))Ko(h.back?i.moved(h.x,h.z).rotated(0,0,180):i.moved(h.x,h.z),h.item,h.w,h.d,h.h,s+h.y,null)}function Hg(i,t,e,n){let r=new Map,o=le(t.type),s=o?pr(o):null,a=t.rack?.slots;if(!s||!a?.length||!n.length)return r;let l=new Set(n),c=t.rotation*te,h=Math.cos(c),u=Math.sin(c),f=t.mirror?-1:1,d=new Ii(i,new De,(b,g)=>[t.x+f*b*h-g*u,t.z+f*b*u+g*h]),p=mr(s,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h));for(let b of gr(p,a,le)){if(!l.has(b.slot.id)||r.has(b.slot.id))continue;let g=Jd(b),m=g.size/2,x=i.count;d.box(g.x-m,g.x+m,e+g.y-m,e+g.y+m,g.z-m,g.z+m,16777215,16777215),r.set(b.slot.id,{start:x,end:i.count})}return r}function VS(i){return!!le(i)?.parts.some(t=>t.color?.startsWith("#")||t.top?.startsWith("#"))}function Wg(i){return i.type==="waste_bin"||VS(i.type)||aa.some(t=>Kf(i.colors,t))}function jf(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=F;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Ko(i,t,e,n,r,o,s,a=null,l=null){let c=!!a;for(let h of nu(t,e,n,r)){if(l?.(h)||a&&!a(h))continue;let u=c?{...h,glow:!0,w:h.w+.006/e,d:h.d+.006/n,y:Math.max(0,h.y-.002/r),h:h.h+.004/r}:h,f=u.glow&&s!==null,d=f?s:jf(u.color,!1)??F.body,p=f?s:jf(u.top,!1)??jf(u.color,!0)??Bt(d,1.25).getHex(),b=o+u.y*r,g=o+Math.min(r,(u.y+u.h)*r),m=i.colors.length,x=u.edges==="glow"?ar:u.edges==="faint"?kt:u.edges?pt:null,_=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))_.lyingCyl(u.axis,u.x*e,u.z*n,b,g,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,d,p,14,x);else if(u.shape==="cyl")_.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,b,g,d,p,14,x);else if(u.shape==="sphere")_.rings(Rg(u.x*e,u.z*n,u.w*e/2,u.d*n/2,b,g),d,p,x);else if(u.shape==="lathe")_.rings(Pg(u.x*e,u.z*n,u.w*e/2,u.d*n/2,b,g,u.profile??[[1,0],[1,1]]),d,p,x);else if(u.shape==="rbox"){let y=(u.round??.2)*Math.min(u.w*e,u.d*n,g-b);_.rings(Cg((u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n,b,g,y),d,p,x)}else if(u.shape==="loft"){let y=u.tx??u.x,M=u.tz??u.z,w=u.tw??u.w,A=u.td??u.d;_.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(y-w/2)*e,(y+w/2)*e,(M-A/2)*n,(M+A/2)*n],b,g,d,p,x)}else _.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,b,g,(u.z-u.d/2)*n,(u.z+u.d/2)*n,d,p,x);Hr&&!f&&!c&&(u.color?.startsWith("#")||u.top?.startsWith("#"))&&Ug(i.colors,m)}}function Xg(i,t,e,n,r,o){let s=o*te,a=Math.cos(s),l=Math.sin(s),c=(p,b)=>[e+p*a-b*l,r+p*l+b*a],h=new Ii(i,new De,c),u=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),h.cyl(0,0,.012,n-.075,n-.06,F.accent,F.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,F.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function $g(i,t,e,n,r){let o=m0(t)*n,s=new Ii(i,new De,(c,h)=>[c,h-o]);Ko(s,t,Math.max(.05,e),Math.max(.05,n),Math.max(.005,r),0,null,ea);let a=0,l=0;for(let c of nu(t,e,n,r)){if(!ea(c))continue;let h=Math.min(c.w*e,c.d*n)/2;c.shape==="cyl"&&h>a&&(a=h),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function Zo(i,t,e,n,r,o=s=>!!s.glow){let s=e.rotation*te,a=Math.cos(s),l=Math.sin(s),c=e.mirror?-1:1,h=(u,f)=>[e.x+c*u*a-f*l,e.z+c*u*l+f*a];Ko(new Ii(i,new De,h),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,o)}function Yg(i,t,e,n,r,o){let s=GS(t,e,o,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*te,l=Math.cos(a),c=Math.sin(a),h=n.mirror?-1:1,u=(f,d)=>[n.x+h*f*l-d*c,n.z+h*f*c+d*l];ua(i,n,()=>Ko(new Ii(i,new De,u),{...t,parts:s},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null))}function GS(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),o=i.parts.filter(a=>Tf(t,a)),s;if(t==="curtain")s=o.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else if(t==="blind"){let a=Math.max(.02,1-r),l=1-a;s=o.map(c=>{let h=(u,f)=>u+((f??u)-u)*l;return{...c,y:c.y+c.h*l,h:c.h*a,x:h(c.x,c.tx),z:h(c.z,c.tz),w:h(c.w,c.tw),d:h(c.d,c.td)}})}else{let a=Math.max(...o.map(c=>c.y+c.h)),l=Math.max(.02,1-r);s=o.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return s}function qg(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),o=Math.max(.005,t.h),s=0,a=0,l=0,c=0;for(let g of nu(i,n,r,o)){if(!g.glow)continue;let m=(g.x+(g.shape==="loft"?g.tx??g.x:g.x))/2*n,x=(g.z+(g.shape==="loft"?g.tz??g.z:g.z))/2*r,_=g.y*o,y=Math.min(o,(g.y+g.h)*o),M=Math.max(1e-6,g.w*n*g.d*r*Math.max(0,y-_));s+=M,a+=m*M,l+=(_+y)/2*M,c+=x*M}if(!s)return null;let h=a/s,u=c/s,f=t.rotation*te,d=Math.cos(f),p=Math.sin(f),b=t.mirror?-1:1;return[t.x+b*h*d-u*p,e+l/s,t.z+b*h*p+u*d]}function au(i,t,e,n,r){let o=e.rotation*te,s=Math.cos(o),a=Math.sin(o),l=e.mirror?-1:1,c=(h,u)=>[e.x+l*h*s-u*a,e.z+l*h*a+u*s];ua(i,e,()=>Ko(new Ii(i,new De,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r))}var HS={lawn:{color:1854e3,side:1391142,edge:4055200,edgeAlpha:.28},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:2310186,side:1716256,edge:10146383,edgeAlpha:.22},hedge:{color:2252863,side:1591856,edge:4055200,edgeAlpha:.4},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function WS(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],o=e[1]-t[1],s=Math.hypot(r,o)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let h=a.points[(c+1)%a.points.length],u=h[0]-l[0],f=h[1]-l[1],d=Math.hypot(u,f)||1;if(Math.abs((r*f-o*u)/(s*d))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+u*p-n[0],l[1]+f*p-n[1])<.4}))}function Zg(i,t){return t.type==="pool"?$c(i,t):kr(i,t)+(Jn(t.type)?.01:Bo[t.type])}function ha(i){return Pn(i)>=0?i:[...i].reverse()}function XS(i,t){let e=i[t];if(Jn(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let o=i[r];r===t||!(o.cut&&r>t||o.type==="pool")||o.points.length<3||o.points.every(s=>Jt(s,e.points))&&n.push(ha(o.points))}return n}function Kg(i,t,e,n,r,o,s,a,l=0){let c=e[0]-t[0],h=e[1]-t[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Ie(i,ha([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,o,s,a,{aoFrom:r-1});return}let p=(y,M)=>[t[0]+f*M,y,t[1]+d*M],b=(y,M)=>[e[0]+f*M,y+l,e[1]+d*M],g=(y,M)=>{i.tri(y[0],y[1],y[2],M,M,M,void 0,jt),i.tri(y[0],y[2],y[3],M,M,M,void 0,jt),i.tri(y[0],y[2],y[1],M,M,M,void 0,jt),i.tri(y[0],y[3],y[2],M,M,M,void 0,jt)},m=new K(a),x=new K(Bt(s,.9)),_=new K(Bt(s,.6));g([p(o,1),b(o,1),b(o,-1),p(o,-1)],m),g([p(r,1),b(r,1),b(r,-1),p(r,-1)],_),g([p(r,1),b(r,1),b(o,1),p(o,1)],x),g([p(r,-1),b(r,-1),b(o,-1),p(o,-1)],x),g([p(r,1),p(r,-1),p(o,-1),p(o,1)],x),g([b(r,1),b(r,-1),b(o,-1),b(o,1)],x)}function Jg(i,t,e,n){let r=e.outdoor??[];r.forEach((o,s)=>{if(o.points.length<3)return;let a=kr(e,o),l=(x,_)=>a-na(e,o,x,_),c=a-(o.type==="pool"?0:o.slope??0),h=Jn(o.type)&&o.height?o.height:Bo[o.type],u={...HS[o.type],top:h},f=ha(o.points),d=Bt(u.edge,u.edgeAlpha),p=o.open&&(o.type==="fence"||o.type==="pergola")?f.length-1:-1,b=x=>{if(o.outline!==!1)for(let _=0;_<f.length;_++){if(_===p)continue;let y=f[_],M=f[(_+1)%f.length];t.seg([y[0],x(y[0],y[1]),y[1]],[M[0],x(M[0],M[1]),M[1]],d,jt)}},g=n??i,m=new K(n?1734832:u.color);switch(o.type){case"pool":{let x=new K(u.side),_=new K(Bt(u.side,.55)),y=new K(932440),M=$c(e,o),w=Xc(e,o),A=S0(e,o);for(let[v,T,E]of bn(f)){let S=f[v],P=f[T],N=f[E];(n?g:i).tri([S[0],M,S[1]],[N[0],M,N[1]],[P[0],M,P[1]],m,m,m,void 0,jt),i.tri([S[0],A,S[1]],[N[0],A,N[1]],[P[0],A,P[1]],y,y,y,void 0,jt)}for(let v=0;v<f.length;v++){let T=f[v],E=f[(v+1)%f.length];i.tri([E[0],A,E[1]],[E[0],w,E[1]],[T[0],w,T[1]],_,x,x,void 0,jt),i.tri([E[0],A,E[1]],[T[0],w,T[1]],[T[0],A,T[1]],_,x,_,void 0,jt)}if(!o.above&&Rf(e,o)){let v=new K(660258),T=new K(396054),E=A-.2,S=Math.min(a,w);for(let P=0;P<f.length;P++){let N=f[P],D=f[(P+1)%f.length];i.tri([N[0],E,N[1]],[N[0],S,N[1]],[D[0],S,D[1]],T,v,v,void 0,jt),i.tri([N[0],E,N[1]],[D[0],S,D[1]],[D[0],E,D[1]],T,v,T,void 0,jt)}for(let[P,N,D]of bn(f)){let C=f[P],R=f[N],k=f[D];i.tri([C[0],E,C[1]],[R[0],E,R[1]],[k[0],E,k[1]],T,T,T,void 0,jt)}if(o.outline!==!1)for(let P=0;P<f.length;P++){let N=f[P],D=f[(P+1)%f.length];t.seg([N[0],E,N[1]],[D[0],E,D[1]],Bt(u.edge,u.edgeAlpha*.35),jt),t.seg([N[0],E,N[1]],[N[0],S,N[1]],Bt(u.edge,u.edgeAlpha*.25),jt)}}if(w>a+.02){let v=new K(2044240),T=new K(1187123);for(let E=0;E<f.length;E++){let S=f[E],P=f[(E+1)%f.length];i.tri([S[0],a,S[1]],[S[0],w,S[1]],[P[0],w,P[1]],T,v,v,void 0,jt),i.tri([S[0],a,S[1]],[P[0],w,P[1]],[P[0],a,P[1]],T,v,T,void 0,jt)}b(()=>a+.005)}if(b(()=>w),b(()=>M+.005),o.outline!==!1)for(let v=0;v<f.length;v++){let T=f[v],E=f[(v+1)%f.length];t.seg([T[0],A+.005,T[1]],[E[0],A+.005,E[1]],Bt(u.edge,u.edgeAlpha*.4),jt)}break}case"fence":{for(let x=0;x<f.length;x++){if(x===p)continue;let _=f[x],y=f[(x+1)%f.length],M=Math.hypot(y[0]-_[0],y[1]-_[1]),w=Math.max(1,Math.round(M/2)),A=p>=0&&x===p-1?w:w-1;for(let v=0;v<=A;v++){let T=v/w,E=_[0]+(y[0]-_[0])*T,S=_[1]+(y[1]-_[1])*T,P=l(E,S);Ie(i,ha([[E-.04,S-.04],[E+.04,S-.04],[E+.04,S+.04],[E-.04,S+.04]]),P,P+u.top,u.side,u.color)}for(let v of[.35,.85])t.seg([_[0],l(_[0],_[1])+v*u.top,_[1]],[y[0],l(y[0],y[1])+v*u.top,y[1]],d,jt)}break}case"pergola":{let x=u.top;for(let[_,y]of f){let M=l(_,y);Ie(i,ha([[_-.06,y-.06],[_+.06,y-.06],[_+.06,y+.06],[_-.06,y+.06]]),M,M+x,u.side,u.color)}for(let _=0;_<f.length;_++){if(_===p)continue;let y=f[_],M=f[(_+1)%f.length],w=l(y[0],y[1])+x;if(Kg(i,y,M,.12,w-.16,w,u.side,u.color,l(M[0],M[1])-l(y[0],y[1])),o.bracing){let A=l(y[0],y[1]),v=l(M[0],M[1]);t.seg([y[0],A+.25,y[1]],[M[0],v+x-.25,M[1]],d,jt),t.seg([M[0],v+.25,M[1]],[y[0],A+x-.25,y[1]],d,jt)}}if(O0(f)){let _=N0(f),y=_.x1-_.x0,M=_.z1-_.z0,w=y>=M,A=w?y:M,v=Math.max(1,Math.round(A/.6));for(let T=1;T<v;T++){let E=(w?_.x0:_.z0)+A*T/v,S=w?[E,_.z0+.06]:[_.x0+.06,E],P=w?[E,_.z1-.06]:[_.x1-.06,E],N=l(S[0],S[1])+x;Kg(i,S,P,.06,N-.04,N+.08,u.side,u.color,l(P[0],P[1])-l(S[0],S[1]))}}b((_,y)=>l(_,y)+x+.004);break}case"balcony":{Ie(i,f,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),b(()=>a+u.top+.004);let _=o.height&&o.height>.3?o.height:1,y=Bt(9417983,.42),M=Bt(3662079,.55);for(let w=0;w<f.length;w++){let A=f[w],v=f[(w+1)%f.length];if(WS(e,A,v))continue;let T=Math.hypot(v[0]-A[0],v[1]-A[1]),E=a+u.top;t.seg([A[0],E+_,A[1]],[v[0],E+_,v[1]],M,jt),t.seg([A[0],E+.1,A[1]],[v[0],E+.1,v[1]],y,jt);let S=Math.max(1,Math.round(T/.12));for(let P=0;P<=S;P++){let N=P/S,D=A[0]+(v[0]-A[0])*N,C=A[1]+(v[1]-A[1])*N;t.seg([D,E,C],[D,E+_,C],P===0||P===S?M:y,jt)}}break}default:{let x=(y,M)=>l(y,M)+u.top,_=XS(r,s);if(Ie(i,f,c,o.slope?x:a+u.top,u.side,u.color,{aoFrom:c,holes:_}),b((y,M)=>x(y,M)+.004),o.type==="hedge"&&b((y,M)=>l(y,M)+.004),o.outline!==!1)for(let y of _)for(let M=0;M<y.length;M++){let w=y[M],A=y[(M+1)%y.length];t.seg([w[0],x(w[0],w[1])+.004,w[1]],[A[0],x(A[0],A[1])+.004,A[1]],d,jt)}}}})}var cu=Math.PI/180,$S=1.13,YS=1.72,rd=.025,Xr=.07,jg=.25;function Qg(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=gi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,h=-s/l,u=Math.min(n.height,o.height??n.height),f=o.sources.find(b=>b.room_id===o.roomLeft)?.edge??null,d={floorId:n.id,room:o.roomLeft,edge:f,free:!!o.free},p=(b,g,m,x)=>e.push({key:b,section:null,side:"top",flat:!1,o:g,eu:m,es:[0,1,0],n:x,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:d});p(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+h*o.right],[s/l,0,a/l],[c,0,h]),o.free&&p(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-h*o.left],[-s/l,0,-a/l],[-c,0,-h])}}return e}var od="ground";function Yr(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function tb(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],o=Yr(i),s=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=o?o.elevation+(t.base!=null?t.base:Vc(o,s,a)):t.base??0;return{key:od,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function qS(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function qr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(x=>KS(x,Qc(i,x,x.overhang??t.overhang)));let e=qS(i);if(!e)return[];let n=e.rooms.flatMap(x=>x.points.map(_=>_[0])),r=e.rooms.flatMap(x=>x.points.map(_=>_[1])),o=i.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,h=e.elevation+e.height;if(t.type==="flat")return[eb("main",null,s,l,a,c,h+jg)];let u=a-s>=c-l,f=t.ridge==="short"?!u:u,d=(f?c-l:a-s)/2,p=d*Math.tan(t.pitch*cu),b=(x,_,y)=>f?[x,h+y,(l+c)/2+_]:[(s+a)/2+_,h+y,x],[g,m]=f?[s,a]:[l,c];return[-1,1].map(x=>lu(`main:${x<0?"a":"b"}`,null,x<0?"a":"b",b(g,x*d,0),b(m,x*d,0),b(g,0,p),t.pitch,()=>[0,m-g]))}function KS(i,t){let e=cn(i),n=ln(i),r=(_,y,M)=>{let[w,A]=e.at(_,y);return[w,M,A]},o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let _=e.at(a,-o),y=e.at(l,e.w+s);return[eb(i.id,i.id,Math.min(_[0],y[0]),Math.min(_[1],y[1]),Math.max(_[0],y[0]),Math.max(_[1],y[1]),i.eave_a+jg)]}if(i.shape==="pent")return[lu(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,e.w+s,n.y(e.w+s)),i.pitch_a,()=>[0,c])];let h=jc(i),u=h?Uf(i,h):null,f=i.shape==="pyramid"||h?.[0]==="hip",d=i.shape==="pyramid"||h?.[1]==="hip",p=i.shape==="pyramid"?(e.u1-e.u0)/2:f?u.d0:0,b=i.shape==="pyramid"?(e.u1-e.u0)/2:d?u.d1:0,g=f?e.u0+p-a:0,m=d?l-(e.u1-b):0,x=[];if(n.vr>.3){let _=Math.hypot(n.vr+o,n.rh-n.y(-o));x.push(lu(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,n.vr,n.rh),i.pitch_a,y=>[g*(y/_),c-m*(y/_)]))}if(e.w-n.vr>.3){let _=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));x.push(lu(`${i.id}:b`,i.id,"b",r(l,e.w+s,n.y(e.w+s)),r(a,e.w+s,n.y(e.w+s)),r(l,n.vr,n.rh),i.pitch_b,y=>[m*(y/_),c-g*(y/_)]))}if(f||d){let _=n.y(-o),y=n.y(e.w+s),M=[];f&&M.push([`${i.id}:c`,"c",r(a,e.w+s,y),r(a,-o,_),r(e.u0+p,n.vr,n.rh)]),d&&M.push([`${i.id}:d`,"d",r(l,-o,_),r(l,e.w+s,y),r(e.u1-b,n.vr,n.rh)]);for(let[w,A,v,T,E]of M){let S=ZS(w,i.id,A,v,T,E);S&&x.push(S)}}return x}function ZS(i,t,e,n,r,o){let s=fa($r(r,n));if(s<.3)return null;let a=ur($r(r,n)),l=$r(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=fa(h);if(u<.3)return null;let f=ur(h),d=ur(rb(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=ur([-f[0],0,-f[2]]),b=Math.atan2(f[1],Math.hypot(f[0],f[2]))/cu;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:s,ls:u,pitch:b,span:m=>{let x=Math.min(1,Math.max(0,m/u));return[c*x,s-(s-c)*x]},facing:[p[0],p[2]]}}function lu(i,t,e,n,r,o,s,a){let l=ur($r(r,n)),c=ur($r(o,n)),h=ur(rb(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=ur([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:h,lu:fa($r(r,n)),ls:fa($r(o,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function eb(i,t,e,n,r,o,s){let a=r-e>=o-n,l=a?r-e:o-n,c=a?o-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function nb(i){let t=i.module_w||$S,e=i.module_h||YS;return i.portrait===!1?[e,t]:[t,e]}function JS(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function ib(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*cu:i.wall?Math.min(90,Math.max(0,t.tilt??0))*cu:0}function jS(i,t){let[,e]=nb(t),n=ib(i,t);return i.wall?e*Math.cos(n)+rd:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+rd}function da(i,t,e=!1){let[n,r]=nb(t),o=[],s=ib(i,t),a=r*Math.cos(s),l=jS(i,t),c=JS(t),h=Math.max(1,...c),u=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(b,g,m)=>[i.o[0]+i.eu[0]*b+i.es[0]*g+i.n[0]*m,i.o[1]+i.eu[1]*b+i.es[1]*g+i.n[1]*m,i.o[2]+i.eu[2]*b+i.es[2]*g+i.n[2]*m],p=(b,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[m,x]=i.span(g);return b>=m-1e-6&&b<=x+1e-6};return c.forEach((b,g)=>{let m=t.align==="right"?h-b:t.align==="center"?(h-b)/2:0;for(let x=0;x<b;x++){let _=`${g}:${x}`,y=u.has(_);if(y&&!e)continue;let M=t.u+(x+m)*(n+rd),w=t.v+g*l,A=M+n,v=w+(i.flat||i.wall?a:r);if(f){if(!(p((M+A)/2,w)&&p((M+A)/2,v)))continue}else if(![[M,w],[A,w],[A,v],[M,v]].every(([D,C])=>p(D,C)))continue;if(i.wall&&s>.001){let D=Xr+r*Math.sin(s),[C,R]=t.flip?[D,Xr]:[Xr,D],k=[d(M,w,C),d(A,w,C),d(A,v,R),d(M,v,R)],L=t.flip?w:v,O=[M+.05,A-.05].map(B=>[d(B,L,0),d(B,L,D)]);o.push({corners:k,posts:O,cell:_,skipped:y});continue}if(!i.flat){o.push({corners:[d(M,w,Xr),d(A,w,Xr),d(A,v,Xr),d(M,v,Xr)],posts:[],cell:_,skipped:y});continue}let T=.15,E=T+r*Math.sin(s),[S,P]=t.flip?[v,w]:[w,v],N=[d(M,S,T),d(A,S,T),d(A,P,E),d(M,P,E)];o.push({corners:N,posts:[M+.05,A-.05].flatMap(D=>[[d(D,S,0),d(D,S,T)],[d(D,P,0),d(D,P,E)]]),cell:_,skipped:y})}}),o}function $r(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function fa(i){return Math.hypot(i[0],i[1],i[2])}function ur(i){let t=fa(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function rb(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var QS=.78,tT=1.18;function eT(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||QS,module_h:i.h||tT}}function uu(i,t){let e=da(i,eT(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function hu(i,t,e){let n=t?uu(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,o=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>o)continue;let l=a.rooms.find(c=>Jt([r,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var pa=1712952,ma=2239816,lb=1318193,hr=Bt(3662079,.9),Jo=Bt(5995775,.45),en=.14,nT=9427199,iT=13226982,rT=14936565,oT={black:{glass:new K(329483),edge:Bt(9082544,.32),cells:Bt(2766160,.22)},blue:{glass:new K(1386842),edge:Bt(10467583,.55),cells:Bt(4025599,.35)}},sT=Bt(13226982,.5),aT=Bt(13226982,.85),lT=Bt(16757575,.95),ob=new K(2845583),sb=new K(1713986),cT=new K(3662079).multiplyScalar(.35),ab=new K(4871791);function uT(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function cb(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:dT(i),r=e?.type==="custom"?pT(i,e.sections??[],e.overhang):n?[n]:[];return fT(i,r),hT(i,r,t),r}function hT(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(qr(i).map(o=>[o.key,o]));for(let o of n){let s=r.get(o.face),a=s?uu(s,o):null;if(!s||!a)continue;let l=s.section?t.find(R=>R.sections?.includes(s.section)):t[0];if(!l)continue;let c=o.float?hu(i,s,o):null,h=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,u=h?h.elevation:l.floor.elevation+l.base,f=R=>[R[0],R[1]-u,R[2]],[d,p,b,g]=a.map(f),m=e.get(o.id)??{open:0,tilt:0,cover:0},x=!!c&&(h!==null||c.floor.id===l.floor.id),_=h?(l.winBelow??=new Map).get(h.id)??l.winBelow.set(h.id,{floor:h,solid:new Qt,lines:new De,glass:new Qt}).get(h.id):x?l.win??={solid:new Qt,lines:new De,glass:new Qt}:l.winRoof??={solid:new Qt,lines:new De,glass:new Qt},y=(R,k)=>[R[0]+s.n[0]*k,R[1]+s.n[1]*k,R[2]+s.n[2]*k],M=(R,k,L)=>[R[0]+(k[0]-R[0])*L,R[1]+(k[1]-R[1])*L,R[2]+(k[2]-R[2])*L],w=m.open>.02||m.tilt>.02?lT:aT,A=[d,p,b,g].map(R=>y(R,.06)),v=[d,p,b,g].map(R=>y(R,-.02));for(let R=0;R<4;R++){_.lines.seg(A[R],A[(R+1)%4],w);let k=(R+1)%4;_.solid.tri(v[R],v[k],A[k],ab),_.solid.tri(v[R],A[k],A[R],ab)}let T=(m.open>.02?30*Math.min(1,m.open):m.tilt>.5?12:0)*te,E=Math.hypot(b[0]-p[0],b[1]-p[1],b[2]-p[2]),S=R=>{let k=s.es;return[R[0]-k[0]*E*Math.cos(T)+s.n[0]*E*Math.sin(T),R[1]-k[1]*E*Math.cos(T)+s.n[1]*E*Math.sin(T),R[2]-k[2]*E*Math.cos(T)+s.n[2]*E*Math.sin(T)]},P=y(g,.065),N=y(b,.065),D=S(P),C=S(N);_.glass.tri(D,C,N,ob),_.glass.tri(D,N,P,ob);for(let[R,k]of[[D,C],[C,N],[N,P],[P,D]])_.lines.seg(R,k,w);if(m.cover>.02){let R=Math.min(1,m.cover),k=y(M(P,D,R),.01),L=y(M(N,C,R),.01),O=y(P,.01),B=y(N,.01);_.solid.tri(k,L,B,sb),_.solid.tri(k,B,O,sb);let V=Math.max(1,Math.round(E*R/.05));for(let W=1;W<=V;W++){let z=W/V;_.lines.seg(y(M(O,k,z),.004),y(M(B,L,z),.004),cT)}}}}function fT(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(qr(i).map(r=>[r.key,r]));for(let r of e){let o=n.get(r.face);if(!o)continue;let s=o.section?t.find(a=>a.sections?.includes(o.section)):t[0];s&&sd(s.solid,s.lines,o,r,s.floor.elevation+s.base)}}function sd(i,t,e,n,r){let o=c=>[c[0],c[1]-r,c[2]],s=oT[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of da(e,n)){let[h,u,f,d]=c.corners.map(o);i.tri(h,u,f,s.glass),i.tri(h,f,d,s.glass),i.tri(h,f,u,s.glass),i.tri(h,d,f,s.glass);let p=(m,x=.004)=>[m[0]+e.n[0]*x,m[1]+e.n[1]*x,m[2]+e.n[2]*x],b=(m,x,_)=>[m[0]+(x[0]-m[0])*_,m[1]+(x[1]-m[1])*_,m[2]+(x[2]-m[2])*_],g=[h,u,f,d].map(m=>p(m));for(let m=0;m<4;m++)t.seg(g[m],g[(m+1)%4],s.edge);for(let m=1;m<a;m++)t.seg(p(b(h,u,m/a)),p(b(d,f,m/a)),s.cells);for(let m=1;m<l;m++)t.seg(p(b(h,d,m/l)),p(b(u,f,m/l)),s.cells);for(let[m,x]of c.posts)t.seg(o(m),o(x),sT)}}function dT(i){let t=i.settings.roof,e=uT(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(E=>E.points.map(S=>S[0])),r=e.rooms.flatMap(E=>E.points.map(S=>S[1])),o=i.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,h=new Qt,u=new De;if(t.type==="flat"){Ie(h,[[s,l],[a,l],[a,c],[s,c]],0,.25,pa,ma,{bottom:!0});let E=.252;for(let[S,P]of[[[s,l],[a,l]],[[a,l],[a,c]],[[a,c],[s,c]],[[s,c],[s,l]]])u.seg([S[0],E,S[1]],[P[0],E,P[1]],hr),u.seg([S[0],0,S[1]],[P[0],0,P[1]],Jo);return{floor:e,base:e.height,solid:h,lines:u,glass:new Qt}}let f=a-s>=c-l,d=t.ridge==="short"?!f:f,p=(d?c-l:a-s)/2,b=p*Math.tan(t.pitch*te),g=(E,S,P)=>d?[E,P,(l+c)/2+S]:[(s+a)/2+S,P,E],[m,x]=d?[s,a]:[l,c],_=new K(ma),y=new K(pa),M=(E,S,P,N,D)=>{h.tri(E,S,P,D),h.tri(E,P,N,D)};for(let E of[-1,1]){M(g(m,E*p,0),g(x,E*p,0),g(x,0,b),g(m,0,b),_),M(g(m,E*p,-en),g(m,0,b-en),g(x,0,b-en),g(x,E*p,-en),y),M(g(m,E*p,-en),g(x,E*p,-en),g(x,E*p,0),g(m,E*p,0),y);for(let S of[m,x])M(g(S,E*p,-en),g(S,E*p,0),g(S,0,b),g(S,0,b-en),y);u.seg(g(m,E*p,0),g(x,E*p,0),Jo);for(let S of[m,x])u.seg(g(S,E*p,0),g(S,0,b),Jo)}let w=t.overhang,A=new K(lb),v=p-w,T=v*Math.tan(t.pitch*te);for(let E of[m+w,x-w])h.tri(g(E,-v,-en),g(E,v,-en),g(E,0,T-en),A),h.tri(g(E,v,-en),g(E,-v,-en),g(E,0,T-en),A);return u.seg(g(m,0,b+.004),g(x,0,b+.004),hr),{floor:e,base:e.height,solid:h,lines:u,glass:new Qt}}function pT(i,t,e){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,o=new Map(qr(i).map(l=>[l.key,l])),s=t.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(s.map(l=>{let c=Br(t,l),h=c?null:tg(t,l),u=c?Bf(c,l):h?ng(l,h):l,f=Qc(i,c?u:l,u.overhang??e),d=h?{...f,[h.end===0?"u0":"u1"]:0}:f,p=!u.open&&u.shape!=="flat"&&u.shape!=="parapet";return[l,{parent:c,junction:h,drawn:u,ov:d,covers:p?j0(u,zr(u,d).faces):[]}]}));for(let l of s){let c=a.get(l),h=q0(i,l)??n[0],u=l.open?`${h.id}:open`:h.id,f=r.get(u);f||r.set(u,f={floor:h,base:0,solid:new Qt,lines:new De,glass:new Qt,sections:[],lift:!l.open}),f.sections.push(l.id);let d=c.parent,p=[(l.x0+l.x1)/2,(l.z0+l.z1)/2],b=n.some(w=>w.elevation>h.elevation&&w.elevation<=l.base+.5&&w.elevation+w.height>l.base&&w.rooms.some(A=>Jt(p,A.points))),g=h.elevation+h.height>l.base+.05&&!l.dormer&&!d||b,m=t.filter(w=>w!==l&&Br(t,w)===l).flatMap(w=>Y0(l,w));for(let w of i.settings.roof.windows??[]){let A=o.get(w.face),v=A&&A.section===l.id?uu(A,w):null;if(!v)continue;let T=v.map(E=>xi(l,E[0],E[2]));m.push({u0:Math.min(...T.map(E=>E[0])),u1:Math.max(...T.map(E=>E[0])),v0:Math.min(...T.map(E=>E[1])),v1:Math.max(...T.map(E=>E[1]))})}let x=c.drawn,_=c.junction?1-c.junction.end:null;if(d){let w=cn(x),A=zr(d,{u0:0,u1:0,a:0,b:0}),v=T=>{let[E,S]=w.at(T,w.w/2),[P,N]=xi(d,E,S);return sa(A,P,N)??ln(d).y(N)};_=v(w.u0)<=v(w.u1)?0:1}let y=s.filter(w=>Q0(t,l,w)),M=y.length?{covers:Gf(x,y.flatMap(w=>a.get(w).covers)),lines:Gf(x,y.filter(w=>s.indexOf(w)>s.indexOf(l)).flatMap(w=>a.get(w).covers)),wallU:c.junction?[cn(l).u0,cn(l).u1]:null}:null;mT(f.solid,f.lines,x,c.ov,h.elevation,f.glass,g,m,_,M)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function mT(i,t,e,n,r,o=i,s=!1,a=[],l=null,c=null){let h=cn(e),u=ln(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,f.a),p=Math.max(0,f.b),b=h.w,g=h.u0-Math.max(0,f.u0),m=h.u1+Math.max(0,f.u1),x=(R,k,L)=>{let[O,B]=h.at(R,k);return[O,L-r,B]},_=new K(ma),y=new K(pa),M=new K(lb),w=(R,k)=>{for(let L=1;L+1<R.length;L++)i.tri(R[0],R[L],R[L+1],k)},A=[],v=[],T=[],E=[null,null],S=[];if(e.shape==="flat"||e.shape==="parapet"){let R=e.eave_a,k=e.shape==="parapet",L=e.points&&e.points.length>=3?W0(e,k?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):k?[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,b),h.at(h.u0,b)]:[h.at(g,-d),h.at(m,-d),h.at(m,b+p),h.at(g,b+p)];Ie(i,L,R-r,R-r+.25,pa,ma,{bottom:!0});for(let O=0;O<L.length;O++){let B=L[O],V=L[(O+1)%L.length];t.seg([B[0],R-r+.252,B[1]],[V[0],R-r+.252,V[1]],hr),t.seg([B[0],R-r,B[1]],[V[0],R-r,V[1]],Jo)}if(k){let O=z=>jn(z)>=0?z:[...z].reverse(),B=O(L),V=Jc(B,-.2),W=B.length;for(let z=0;z<W;z++){let q=O([B[z],B[(z+1)%W],V[(z+1)%W],V[z]]);Ie(i,q,R-r+.25,R-r+.65,pa,ma),t.seg([B[z][0],R-r+.652,B[z][1]],[B[(z+1)%W][0],R-r+.652,B[(z+1)%W][1]],hr),t.seg([V[z][0],R-r+.652,V[z][1]],[V[(z+1)%W][0],R-r+.652,V[(z+1)%W][1]],hr)}}}else{let R=zr(e,f);A=R.faces;for(let k of a)A=A.flatMap(L=>zf(L,k));if(v=R.rim,T=R.ridges,E=R.gables,c){for(let k of A)for(let L of c.lines){let O=J0(k,L.poly);if(O)for(let[B,V]of Vf(O[0],O[1],c.covers.filter(W=>W!==L)))S.push([B,V])}A=A.flatMap(k=>Z0(k,c.covers))}}let P=!!e.open,N=new K(nT);for(let R of A){if(P){for(let k=1;k+1<R.length;k++)o.tri(x(R[0][0],R[0][1],R[0][2]),x(R[k][0],R[k][1],R[k][2]),x(R[k+1][0],R[k+1][1],R[k+1][2]),N);continue}w(R.map(([k,L,O])=>x(k,L,O)),_),w(R.map(([k,L,O])=>x(k,L,O-en)),y)}let D=(R,k)=>c?Vf(R,k,c.covers):[[R,k]];for(let R=0;R<v.length;R++)for(let[[k,L,O],[B,V,W]]of D(v[R],v[(R+1)%v.length]))P||w([x(k,L,O),x(B,V,W),x(B,V,W-en),x(k,L,O-en)],y),t.seg(x(k,L,O),x(B,V,W),P?hr:Jo);if(P){gT(i,t,h,u,f,x,r);return}for(let[R,k]of T)for(let[[L,O,B],[V,W,z]]of D(R,k))t.seg(x(L,O,B+.004),x(V,W,z+.004),hr);for(let[[R,k,L],[O,B,V]]of S)t.seg(x(R,k,L+.004),x(O,B,V+.004),hr);let C=e.base;if(!s){for(let R of[0,1]){let k=E[R];if(!k||l!==null&&l!==R)continue;let L=bT(k,C-en),O=R===0?h.u0:h.u1;L.length>=3&&w(L.map(([B,V])=>x(O,B,V)),M)}if(e.shape!=="flat"&&e.shape!=="parapet"){let[R,k]=c?.wallU??[h.u0,h.u1];for(let L of[0,b]){let O=u.y(L)-en;O>C+.02&&w([x(R,L,C),x(k,L,C),x(k,L,O),x(R,L,O)],M)}}else if(e.eave_a>C+.02)for(let[R,k,L,O]of[[h.u0,0,h.u1,0],[h.u1,0,h.u1,b],[h.u1,b,h.u0,b],[h.u0,b,h.u0,0]])w([x(R,k,C),x(L,O,C),x(L,O,e.eave_a),x(R,k,e.eave_a)],M)}}function gT(i,t,e,n,r,o,s){let a=e.w,l=.12,c=.16,h=r.a>0,u=r.b>0,f=r.u0>0,d=r.u1>0,p=(m,x,_,y,M,w)=>{let A=[e.at(m,_),e.at(x,_),e.at(x,y),e.at(m,y)],v=(A[1][0]-A[0][0])*(A[2][1]-A[0][1])-(A[2][0]-A[0][0])*(A[1][1]-A[0][1]);Ie(i,v<0?[...A].reverse():A,M-s,w-s,iT,rT,{bottom:!0})},b=s;for(let[m,x]of[[0,h],[a,u]]){if(!x)continue;let _=n.y(m)-.03,y=m===0?0:a-l;p(e.u0,e.u1,y,y+l,_-c,_),t.seg(o(e.u0,m,_-c),o(e.u1,m,_-c),Jo)}for(let[m,x]of[[e.u0,f],[e.u1-l,d]])if(x)for(let _=0;_<6;_++){let y=a*_/6,M=a*(_+1)/6,w=Math.min(n.y(y),n.y(M))-.03;p(m,m+l,y,M,w-c,w)}let g=[];for(let[m,x]of[[0,h],[a-l,u]]){if(!x)continue;let _=e.u1-e.u0-l,y=Math.max(1,Math.ceil(_/3.5));for(let M=0;M<=y;M++){let w=e.u0+_*M/y;M===0&&!f||M===y&&!d||g.push([w,m])}}if(!h&&!u)for(let m of[e.u0,e.u1-l])(m===e.u0&&f||m!==e.u0&&d)&&g.push([m,a/2-l/2]);for(let[m,x]of g){let _=n.y(x+l/2)-.03-c;p(m,m+l,x,x+l,b,_)}}function bT(i,t){let e=[];for(let o=0;o<i.length;o++){let[s,a]=i[o];a>=t&&e.push([s,a]);let l=i[o+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([s+(l[0]-s)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var ga={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},fr={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},va={wood:9067062,oak:12886644,tiles:13619146,carpet:11445651,stone:11117724,concrete:10329498},sn=.2,xT=-.06,yT=.01,ba=8,fu=.42,ad=.42;function db(i,t,e,n=[],r=[],o){let{walls:s,open:a}=gi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(C,R,k,L)=>{let O=L?.slope?Math.min(k,Cf(L.slope,C,R)):k,B=o?o(C,R):null;return B===null?O:Math.max(.05,Math.min(O,B))},c=(C,R)=>{let k=o?o(C,R):null;return k!==null&&k<xT},h=(C,R,k,L,O,B)=>{if(!o&&!B?.slope)return O;let V=O,W=Math.max(2,Math.ceil((L-k)/.25)+1);for(let z=0;z<W;z++){let q=k+(L-k)*z/(W-1);V=Math.min(V,l(C[0]+R[0]*q,C[1]+R[1]*q,O,B))}return V},u=new Qt(!0,!0),f=[],d=new De,p=[];for(let C of i.rooms){if(C.points.length<3)continue;let R=du(C.points),k=fr[C.floor_material]??fr.wood,L=new K(k.color),O=n.flatMap(j=>{if(ag(j,R))return[j];if(!rg(j))return[];let ot=Wo(R,j);return ot.length>=3&&Math.abs(jn(ot))>.01?[du(ot)]:[]}),B=sg(O).map(j=>lg(du(j),.003));p.push(...B);let V=[...R,...B.flat()],W=u.count;for(let[j,ot,H]of bn(R,B)){let X=V[j],tt=V[ot],et=V[H];u.tri([X[0],0,X[1]],[et[0],0,et[1]],[tt[0],0,tt[1]],L,L,L,[X[0],X[1],et[0],et[1],tt[0],tt[1]],jt,k.tile)}f.push({roomId:C.id,start:W,end:u.count,color:k.color});let z=new K(ga.slab),q=j=>{for(let ot=0;ot<j.length;ot++){let H=j[ot],X=j[(ot+1)%j.length];u.tri([H[0],-sn,H[1]],[H[0],0,H[1]],[X[0],0,X[1]],z),u.tri([H[0],-sn,H[1]],[X[0],0,X[1]],[X[0],-sn,X[1]],z)}};q(R);for(let j of B){q([...du(j)].reverse());for(let ot=0;ot<j.length;ot++){let H=j[ot],X=j[(ot+1)%j.length];d.seg([H[0],.006,H[1]],[X[0],.006,X[1]],ar),d.seg([H[0],-sn,H[1]],[X[0],-sn,X[1]],Ci)}}}let b=new Map,g=[],m=new Map,x=new Map;for(let C of s){if(!C.free)continue;let R=z0(C,i.rooms);R!==null&&x.set(C,R)}for(let C of s){let R="interior",k=null,L=x.get(C);if(C.exterior||L!==void 0){let B=C.b[0]-C.a[0],V=C.b[1]-C.a[1],W=Math.hypot(B,V)||1,z=L===!1?-1:1,q=[z*V/W,-z*B/W],j=(Math.round(Math.atan2(q[1],q[0])/(2*Math.PI)*ba)%ba+ba)%ba;R=`s${j}`;let ot=j/ba*2*Math.PI;k=[Math.cos(ot),Math.sin(ot)]}let O=b.get(R);O===void 0&&(O=g.length,b.set(R,O),g.push(k)),m.set(C,O)}let _=new Map,y=[];for(let C of i.openings){let R=Vo(C,i.rooms,i.walls??[]);if(!R)continue;let k=Go(s,C,R);if(!k)continue;let{wall:L,s:O}=k,B=mu([L.b[0]-L.a[0],L.b[1]-L.a[1]]),V=Math.hypot(L.b[0]-L.a[0],L.b[1]-L.a[1]),W=O-C.width/2<-1e-6?Lf(s,L,!1):null,z=O+C.width/2>V+1e-6?Lf(s,L,!0):null,q=pe=>pe?Math.hypot(pe.b[0]-pe.a[0],pe.b[1]-pe.a[1]):0,j=-q(W),ot=V+q(z),H=Math.min(C.width,ot-j),X=Math.max(j,Math.min(ot-H,O-H/2)),tt=R.room.points,et=x.get(L),nt=L.free?et??B[0]*(tt[1][0]-tt[0][0])+B[1]*(tt[1][1]-tt[0][1])>0:L.exterior||L.roomLeft===C.room_id,ut=[-B[1],B[0]],bt=nt?ut:[-ut[0],-ut[1]],ht=Math.min(h(L.a,B,X,X+H,xa(L,i.height),L)-.02,C.sill+C.height),gt=Math.max(0,Math.min(C.sill,ht-.1)),yt=[bt[1],-bt[0]],vt=B[0]*yt[0]+B[1]*yt[1]>0,qt={opening:C,bucket:m.get(L),start:[L.a[0]+B[0]*X,L.a[1]+B[1]*X],axis:B,width:H,toRoom:bt,faceRoom:nt?L.left:L.right,faceOut:nt?L.right:L.left,sill:gt,top:ht,hingeAtStart:C.hinge==="left"===vt,exterior:L.exterior||et!==void 0};y.push(qt);let xe=_.get(L);xe||_.set(L,xe=[]),xe.push({s0:X,s1:X+H,sill:gt,top:ht,info:qt});for(let pe of[W,z]){if(!pe)continue;let me=be=>(L.a[0]+B[0]*be-pe.a[0])*B[0]+(L.a[1]+B[1]*be-pe.a[1])*B[1],Ne=Math.max(0,me(X)),Z=Math.min(q(pe),me(X+H));if(Z-Ne<1e-4)continue;let He=_.get(pe);He||_.set(pe,He=[]),He.push({s0:Ne,s1:Z,sill:gt,top:ht,info:qt,cont:!0})}}let M=Math.min(i.cut_height,i.height),w=new Qt;for(let C of s){let R=m.get(C),k=mu([C.b[0]-C.a[0],C.b[1]-C.a[1]]),L=(_.get(C)??[]).sort((H,X)=>H.s0-X.s0),O=xa(C,i.height),B=[],V=[-1/0,...new Set(L.flatMap(H=>[H.s0,H.s1])).values(),1/0].sort((H,X)=>H-X);for(let H=0;H+1<V.length;H++){let X=V[H],tt=V[H+1];if(tt-X<1e-6)continue;let et=Number.isFinite(X)&&Number.isFinite(tt)?(X+tt)/2:Number.isFinite(X)?X+1:tt-1,nt=L.filter(ht=>ht.s0<et&&ht.s1>et).map(ht=>[ht.sill,ht.top]).sort((ht,gt)=>ht[0]-gt[0]),ut=[],bt=-sn;for(let[ht,gt]of nt)ht>bt+1e-4&&ut.push([bt,ht<1e-4?-yT:ht]),bt=Math.max(bt,gt);O>bt+1e-4&&ut.push([bt,O]),B.push({t0:X,t1:tt,ranges:ut})}let W=Math.hypot(C.b[0]-C.a[0],C.b[1]-C.a[1]),z=(o||C.slope)&&h(C.a,k,0,W,O,C)<O-.001,q=z?B.flatMap(H=>{let X=Math.max(H.t0,-.5),tt=Math.min(H.t1,W+.5),et=Math.max(1,Math.ceil((tt-X)/.3));return Array.from({length:et},(nt,ut)=>({t0:ut===0?H.t0:X+(tt-X)*ut/et,t1:ut===et-1?H.t1:X+(tt-X)*(ut+1)/et,ranges:H.ranges,inner0:ut>0,inner1:ut<et-1}))}):B.map(H=>({...H,inner0:!1,inner1:!1})),j=H=>(H[0]-C.a[0])*k[0]+(H[1]-C.a[1])*k[1],ot=H=>{if(!o)return[H];let X=ld(C.footprint,C.a,k,H.t0,H.t1),tt=X.filter(([bt,ht])=>c(bt,ht)).length;if(tt===0)return[H];if(tt===X.length)return[];let et=Math.max(H.t0,-.5),nt=Math.min(H.t1,W+.5),ut=Math.max(1,Math.ceil((nt-et)/.05));return Array.from({length:ut},(bt,ht)=>({t0:ht===0?H.t0:et+(nt-et)*ht/ut,t1:ht===ut-1?H.t1:et+(nt-et)*(ht+1)/ut,ranges:H.ranges,inner0:ht>0||H.inner0,inner1:ht<ut-1||H.inner1})).filter(bt=>!ld(C.footprint,C.a,k,bt.t0,bt.t1).every(([ht,gt])=>c(ht,gt)))};for(let H of z?q.flatMap(ot):q){let X=ld(C.footprint,C.a,k,H.t0,H.t1);if(X.length<3)continue;let tt=(ut,bt)=>Math.abs(j(ut)-bt)<1e-4,et=(ut,bt)=>H.inner0&&tt(ut,H.t0)&&tt(bt,H.t0)||H.inner1&&tt(ut,H.t1)&&tt(bt,H.t1),nt=z?Math.min(...X.map(([ut,bt])=>l(ut,bt,O,C))):O;for(let[ut,bt]of H.ranges){let ht=Math.min(bt,z?Math.max(...X.map(([qt,xe])=>l(qt,xe,O,C))):bt);if(ht-ut<1e-4||nt-ut<.01)continue;let gt=ut>.01,yt=z&&bt>nt,vt=(qt,xe)=>Math.min(bt,l(qt,xe,O,C));if(ut<M-1e-6){let qt=ht>M+1e-6?vg+R:lr+R,xe=yt&&nt<M?(pe,me)=>Math.min(M,vt(pe,me)):Math.min(ht,M);Ie(w,X,ut,xe,ga.wall,ga.wallTop,{aoFrom:0,bottom:gt,fold:lr+R,topFold:qt,skipSide:et})}ht>M+1e-6&&nt>M+1e-6&&Ie(w,X,Math.max(ut,M),yt?vt:ht,ga.wall,ga.wallTop,{aoFrom:0,fold:R,bottom:gt&&ut>=M,skipSide:et})}}}let A=s.flatMap(C=>C.footprint),v=MT(s,A),T=new De;T.p.push(...d.p),T.c.push(...d.c),T.f.push(...d.f);let E=(C,R)=>(_.get(C)??[]).filter(R);for(let C of v.edges){let R=m.get(C.wall);for(let[L,O]of pu(C,E(C.wall,B=>B.sill<=.005)))T.seg([L[0],.004,L[1]],[O[0],.004,O[1]],yg);for(let[L,O]of pu(C,E(C.wall,B=>B.sill<M&&B.top>M)))T.seg([L[0],M,L[1]],[O[0],M,O[1]],Zf,iu+R);let k=xa(C.wall,i.height);for(let[L,O]of pu(C,E(C.wall,B=>B.top>=k-.021))){if(!o&&!C.wall.slope){T.seg([L[0],k,L[1]],[O[0],k,O[1]],ar,k<=M+1e-6?lr+R:R);continue}let B=Math.max(1,Math.ceil(Math.hypot(O[0]-L[0],O[1]-L[1])/.3));for(let V=0;V<B;V++){let W=[L[0]+(O[0]-L[0])*V/B,L[1]+(O[1]-L[1])*V/B],z=[L[0]+(O[0]-L[0])*(V+1)/B,L[1]+(O[1]-L[1])*(V+1)/B];if(c(W[0],W[1])&&c(z[0],z[1]))continue;let q=l(W[0],W[1],k,C.wall),j=l(z[0],z[1],k,C.wall);T.seg([W[0],q,W[1]],[z[0],j,z[1]],ar,Math.max(q,j)<=M+1e-6?lr+R:R)}}}let S=(C,R)=>l(R[0],R[1],xa(C,i.height),C);for(let C of v.corners){if(c(C.p[0],C.p[1]))continue;let R=C.walls.reduce((L,O)=>S(O,C.p)>S(L,C.p)+1e-6?O:L,C.wall),k=l(C.p[0],C.p[1],xa(R,i.height),R);T.segSplit([C.p[0],.004,C.p[1]],[C.p[0],k,C.p[1]],Ci,Math.min(M,k),m.get(R))}for(let C of v.joints){let[R,k]=C.walls,L=[S(R,C.a),S(k,C.a)],O=[S(R,C.b),S(k,C.b)];if(Math.abs(L[0]-L[1])<.01&&Math.abs(O[0]-O[1])<.01)continue;let B=L[1]+O[1]>=L[0]+O[0]?k:R,V=m.get(B),W=Math.max(...L),z=Math.max(...O);T.seg([C.a[0],W,C.a[1]],[C.b[0],z,C.b[1]],ar,Math.max(W,z)<=M+1e-6?lr+V:V);for(let[q,j]of[[C.a,L],[C.b,O]]){let ot=Math.min(...j),H=Math.max(...j);H-ot>.01&&T.segSplit([q[0],ot,q[1]],[q[0],H,q[1]],Ci,M,V)}}for(let C of _.values())for(let R of C)R.cont||vT(T,R,M);let P=wT(v.edges,i.rooms,_),N=new Qt;Jg(w,T,i,N);for(let C of r)sd(w,T,C.face,C.field,i.elevation);let D=[];for(let C of i.furniture){if(L0(C.type))continue;let R=w.count,k=T.p.length/6,L=C,O=tn(i,L);if(Yc.has(L.type)){let B=qc(s,L,i.height,O);L={...L,x:B.x,z:B.z},O=B.y}su(w,T,P,L,O),O+L.h>M+.05&&(_g(w,R,M,Jf),Mg(T,k,M,Jf)),D.push({id:L.id,start:R,end:w.count})}return{floor:u.geometry(),roomTris:f,holes:p,walls:w.geometry(),water:N.geometry(),lines:T.geometry(),shadow:P.geometry(),buckets:g,openings:y,walls2d:s,openRooms:a,wallBuckets:s.map(C=>m.get(C)),furnitureTris:D,roofUnder:o}}function vT(i,t,e){let{info:n}=t,r=n.bucket,o=(l,c,h)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],s=l=>l>e+1e-6?r:jt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(o(c,l,a),o(c,l,t.top),Ci,e,r);i.seg(o(t.s0,l,t.top),o(t.s1,l,t.top),Ci,s(t.top)),t.sill>.01&&i.seg(o(t.s0,l,t.sill),o(t.s1,l,t.sill),Ci,s(t.sill))}for(let l of[t.s0,t.s1])i.seg(o(l,n.faceRoom,t.top),o(l,-n.faceOut,t.top),Ci,s(t.top)),t.sill>.01&&i.seg(o(l,n.faceRoom,t.sill),o(l,-n.faceOut,t.sill),Ci,s(t.sill)),t.sill<e&&t.top>e&&i.seg(o(l,n.faceRoom,e),o(l,-n.faceOut,e),Zf,iu+r)}function ld(i,t,e,n,r){let o=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],s=i;return Number.isFinite(n)&&(s=ub(s,a=>o(a)-n)),Number.isFinite(r)&&(s=ub(s,a=>r-o(a))),s}function ub(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=t(r),a=t(o);if(s>=0&&e.push(r),s>=0!=a>=0){let l=s/(s-a);e.push([r[0]+(o[0]-r[0])*l,r[1]+(o[1]-r[1])*l])}}return e}var hb=i=>Math.round(i*1e3),ya=i=>`${hb(i[0])},${hb(i[1])}`,fb=(i,t)=>{let e=ya(i),n=ya(t);return e<n?`${e}|${n}`:`${n}|${e}`};function _T(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=o[0]-r[0],a=o[1]-r[1],l=s*s+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let f=((u[0]-r[0])*s+(u[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*s)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=r;for(let u of c){let f=[r[0]+s*u,r[1]+a*u];ya(f)!==ya(h)&&e.push([h,f]),h=f}e.push([h,o])}return e}function MT(i,t){let e=i.map(h=>({wall:h,edges:_T(h.footprint,t)})),n=new Map,r=new Map;for(let{wall:h,edges:u}of e)for(let[f,d]of u){let p=fb(f,d);n.set(p,(n.get(p)??0)+1);let b=r.get(p);b?b.walls.push(h):r.set(p,{a:f,b:d,walls:[h]})}let o=[];for(let h of r.values())h.walls.length===2&&h.walls[0]!==h.walls[1]&&o.push({a:h.a,b:h.b,walls:[h.walls[0],h.walls[1]]});let s=[],a=new Map,l=(h,u,f)=>{let d=ya(h),p=a.get(d);p||a.set(d,p={p:h,wall:u,walls:[],d:[]}),p.d.push(f),p.walls.includes(u)||p.walls.push(u)};for(let{wall:h,edges:u}of e)for(let[f,d]of u){if(n.get(fb(f,d))!==1)continue;let p=Math.hypot(d[0]-f[0],d[1]-f[1]);if(p<1e-4)continue;s.push({a:f,b:d,wall:h});let b=[(d[0]-f[0])/p,(d[1]-f[1])/p];l(f,h,b),l(d,h,b)}let c=[];for(let{p:h,wall:u,walls:f,d}of a.values())d.some(p=>d.some(b=>Math.abs(p[0]*b[1]-p[1]*b[0])>.05))&&c.push({p:h,wall:u,walls:f});return{edges:s,corners:c,joints:o}}function pu(i,t){if(!t.length)return[[i.a,i.b]];let e=mu([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=mu([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],o=r(i.a),s=r(i.b),a=Math.min(o,s),l=Math.max(o,s),c=[[a,l]];for(let u of t)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let p=[];return u.s0>f&&p.push([f,u.s0]),u.s1<d&&p.push([u.s1,d]),p});let h=u=>{let f=(u-o)/(s-o||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>o<=s?[h(u),h(f)]:[h(f),h(u)])}function wT(i,t,e){let n=new Qt,r=new K(ad,ad,ad),o=new K(1,1,1),s=.002;for(let a of i)for(let[l,c]of pu(a,(e.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let d=[u/f,-h/f],p=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(m=>m.points.length>=3&&Jt(p,m.points)))continue;let b=[l[0]+d[0]*fu,l[1]+d[1]*fu],g=[c[0]+d[0]*fu,c[1]+d[1]*fu];n.tri([l[0],s,l[1]],[b[0],s,b[1]],[g[0],s,g[1]],r,o,o),n.tri([l[0],s,l[1]],[g[0],s,g[1]],[c[0],s,c[1]],r,o,r)}return n}function pb(i,t){let e=t.furniture.filter(o=>o.type==="stairwell").map(rr),n=i.filter(o=>o.elevation<t.elevation).sort((o,s)=>s.elevation-o.elevation)[0];if(!n)return e;let r=n.furniture.filter(o=>(R0.has(o.type)||o.type==="loft_ladder"||le(o.type)?.hole)&&n.elevation+(o.mount_y??0)+o.h>=t.elevation-.3).map(rr);return[...e,...r]}function xa(i,t){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(t,i.height??t)}function mu(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function du(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var ST=new K(1516340),TT=new K(527897),cd=new K(1779256),_a=new K(1120808),AT=new K(4163256),mb=new K(5995161),ET=new K(2240842),RT=new K(1318704),PT=.35,jo=.8,CT=.2,gb=.1;function IT(i,t,e,n){let r=-1/0;for(let o of i.floors)if(!(o.elevation>.3))for(let s of o.outdoor??[])s.points.length<3||s.type==="pool"||s.type==="balcony"||Jn(s.type)||!Jt(e,s.points)||(r=Math.max(r,o.elevation+kr(o,s)+Bo[s.type]-t.elevation));return r>n?r-n:0}function bb(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let r=Hf(i,t);if(!r)return null;let o=(p,b)=>zo(p,b)-t.elevation,s=n&&r.some(([p,b])=>o(p,b)<-sn-.03);if(!s&&!Wf(i,t))return null;let a=t.height,l=-PT,c=(p,b)=>Math.min(a,zo(p,b)-t.elevation),h=new Qt,u=new Qt,f=new De,d=(p,b,g,m,x,_,y,M)=>{let w=[b[0]-p[0],b[2]-p[2]];-w[1]*x[0]+w[0]*x[1]>0?(M.tri(p,b,g,_,_,y),M.tri(p,g,m,_,y,y)):(M.tri(p,g,b,_,y,_),M.tri(p,m,g,_,y,y))};for(let p=0;p<r.length;p++){let b=r[p],g=r[(p+1)%r.length],m=Math.hypot(g[0]-b[0],g[1]-b[1]);if(m<1e-4)continue;let x=[(g[0]-b[0])/m,(g[1]-b[1])/m],_=[x[1],-x[0]],y=[(b[0]+g[0])/2+_[0]*.05,(b[1]+g[1])/2+_[1]*.05];Jt(y,r)&&(_=[-_[0],-_[1]]);let M=(E,S=.012)=>[b[0]+x[0]*E+_[0]*S,b[1]+x[1]*E+_[1]*S],w=[];for(let E of e){if(E.opening.type!=="window"||!E.exterior||E.opening.well===!1)continue;let S=E.start[0]+E.axis[0]*(E.width/2)-E.toRoom[0]*E.faceOut,P=E.start[1]+E.axis[1]*(E.width/2)-E.toRoom[1]*E.faceOut,N=(S-b[0])*x[0]+(P-b[1])*x[1];Math.abs((S-b[0])*_[0]+(P-b[1])*_[1])>.08||N<-.05||N>m+.05||ig(i,t,E.exterior,E.sill,[S,P])&&w.push({s0:Math.max(0,N-E.width/2-gb),s1:Math.min(m,N+E.width/2+gb),bottom:Math.max(l+.05,E.sill-CT),rim:E.opening.well_rim??0})}let A=new Set([0,m]);for(let E of w)A.add(E.s0),A.add(E.s1);let v=[...A].sort((E,S)=>E-S),T=[];for(let E=0;E<v.length-1;E++){let S=Math.max(1,Math.ceil((v[E+1]-v[E])/.5));for(let P=0;P<S;P++)T.push(v[E]+(v[E+1]-v[E])*P/S)}T.push(m);for(let E=0;E<T.length-1;E++){let S=T[E],P=T[E+1],N=w.find(W=>S>=W.s0-1e-6&&P<=W.s1+1e-6),D=M(S),C=M(P),R=c(D[0],D[1]),k=c(C[0],C[1]),L=N?Math.min(R,N.bottom):R,O=N?Math.min(k,N.bottom):k;if(L>l+.01||O>l+.01){let W=Math.min(L,l),z=Math.min(O,l);d([D[0],W,D[1]],[C[0],z,C[1]],[C[0],Math.max(O,l),C[1]],[D[0],Math.max(L,l),D[1]],_,TT,ST,h)}let B=o(D[0],D[1]),V=o(C[0],C[1]);if(s&&(B<-sn-.01||V<-sn-.01)&&d([D[0],Math.min(B,-sn),D[1]],[C[0],Math.min(V,-sn),C[1]],[C[0],-sn,C[1]],[D[0],-sn,D[1]],_,RT,ET,h),R>l||k>l||s&&(B<-sn||V<-sn)){let W=s?Math.min(B,Math.max(R,l)):Math.max(R,l),z=s?Math.min(V,Math.max(k,l)):Math.max(k,l);f.seg([D[0],W+.004,D[1]],[C[0],z+.004,C[1]],AT)}}for(let E of w){let S=M(E.s0,0),P=M(E.s1,0),N=[S[0]+_[0]*jo,S[1]+_[1]*jo],D=[P[0]+_[0]*jo,P[1]+_[1]*jo],C=[(S[0]+P[0]+N[0]+D[0])/4,(S[1]+P[1]+N[1]+D[1])/4],R=IT(i,t,C,c(C[0],C[1])),k=Math.max(E.rim,R>0?R+.02:0),L=q=>c(q[0],q[1])+k,O=E.bottom,B=(q,j)=>[q[0],j,q[1]];u.tri(B(S,O),B(P,O),B(D,O),_a),u.tri(B(S,O),B(D,O),B(N,O),_a);let V=(q,j)=>{u.tri(B(q,O),B(j,O),B(j,L(j)),_a,_a,cd),u.tri(B(q,O),B(j,L(j)),B(q,L(q)),_a,cd,cd)};V(S,N),V(P,D),V(N,D);let W=q=>[q[0],L(q)+.01,q[1]];for(let[q,j]of[[S,P],[P,D],[D,N],[N,S]])f.seg(W(q),W(j),mb);let z=Math.max(3,Math.round((E.s1-E.s0)/.12));for(let q=1;q<z;q++){let j=q/z,ot=[S[0]+(P[0]-S[0])*j,S[1]+(P[1]-S[1])*j];f.seg(W(ot),W([ot[0]+_[0]*jo,ot[1]+_[1]*jo]),mb)}}}return h.count||u.count?{earth:h,wells:u,lines:f}:null}var xb=i=>Math.round(i*1e3)/1e3;function LT(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let o=[(n[0]-e[0])/r,(n[1]-e[1])/r],s=l=>Math.abs(-(l[0]-e[0])*o[1]+(l[1]-e[1])*o[0]),a=l=>(l[0]-e[0])*o[0]+(l[1]-e[1])*o[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,h)=>{let u=l.points[(h+1)%l.points.length];return s(c)>.02||s(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function yb(i,t,e,n,r,o=.05){let s=i.rooms.find(f=>f.points.length>=3&&Jt([t.x,t.z],f.points));if(!s)return[e,n];let a=s.points,l=Pn(a)>=0?1:-1,c=rr({...t}),h=e,u=n;for(let f=0;f<2;f++){let d=rr({...t,x:h,z:u});for(let p=0;p<a.length;p++){let b=a[p],g=a[(p+1)%a.length],m=Math.hypot(g[0]-b[0],g[1]-b[1]);if(m<.05)continue;let x=[(g[0]-b[0])/m,(g[1]-b[1])/m],_=[-x[1]*l,x[0]*l],y=LT(i,s.id,b,g)?r/2:0,M=0;d.forEach((w,A)=>{let v=(w[0]-b[0])*x[0]+(w[1]-b[1])*x[1];if(v<-.01||v>m+.01)return;let T=(w[0]-b[0])*_[0]+(w[1]-b[1])*_[1]-y,E=c[A];(E[0]-b[0])*_[0]+(E[1]-b[1])*_[1]-y<-o||T<M&&(M=T)}),M<-1e-4&&(h-=_[0]*M,u-=_[1]*M)}}return[xb(h),xb(u)]}var FT=500,DT=1e3;function vb(i,t){let e=t-i.timeStamp;return e>DT&&e<6e4}var _b=.12,Mb=1.35,kT=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,gu=class{view={target:new $,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(o,s,a)=>{t.addEventListener(o,s,a),this.listeners.push([o,s])};r("pointerdown",o=>this.onDown(o)),r("pointermove",o=>this.onMove(o)),r("pointerup",o=>this.onUp(o)),r("pointercancel",o=>this.onUp(o)),r("wheel",o=>this.onWheel(o),{passive:!1}),r("contextmenu",o=>o.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(t-c)/h),f=kT(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=ud(this.view.phi+this.velocity.phi,_b,Mb),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:o,phi:s}=this.view;return this.camera.position.set(n.x+r*Math.sin(s)*Math.sin(o),n.y+r*Math.cos(s),n.z+r*Math.sin(s)*Math.cos(o)),this.camera.lookAt(n),e}flyTo(t,e=700,n=!1){let r={...this.view,target:this.view.target.clone()},o=t.theta??r.theta;for(;o-r.theta>Math.PI;)o-=2*Math.PI;for(;o-r.theta<-Math.PI;)o+=2*Math.PI;let s=this.angleLock&&!n?{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:o,phi:t.phi??r.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:r,to:s,start:performance.now(),duration:e},this.events.change()}get goal(){let t=this.flight?.to??this.view;return{...t,target:t.target.clone()}}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},FT)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}if(vb(t,performance.now())&&!this.swiping){e.x=t.clientX,e.y=t.clientY,this.pointers.size>1&&(this.pinch=this.pinchState());return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let o=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-o.left,this.down.y-o.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let o=e.type==="mouse";if(o&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!o))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=ud(this.view.phi+c,_b,Mb),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let o=this.pinchState();this.pinch&&o&&(this.zoom(this.pinch.dist/Math.max(1,o.dist)),this.pan(o.mid[0]-this.pinch.mid[0],o.mid[1]-this.pinch.mid[1])),this.pinch=o}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,o=performance.now();o-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=o,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),!vb(t,performance.now())&&(this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change())}zoom(t){this.view.radius=ud(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,o=new $(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),s=new $(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(o,-t*r),this.view.target.addScaledVector(s,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function ud(i,t,e){return Math.min(e,Math.max(t,i))}function Nn(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i.userData.fp3dFold={masks:t,role:e},i}var yu=5,bu=512,wb=.7,xu=class{projectors=new Map;loader=new Er;loggedIds="";depthMaterial=new Xt({colorWrite:!1,side:ie});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,o]of this.projectors)e.has(r)||this.drop(o);for(let[r,o]of e){let s=this.projectors.get(r);if(!s){let a=new qe(bu,bu);a.depthTexture=new ui(bu,bu),s={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new rn(60,16/9,wb,40),target:a,matrix:new Me,uniforms:{uProjMat:{value:new Me},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},s.camera.layers.set(yu),this.projectors.set(r,s)}s.url=o,this.fetch(s)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`Home 3D lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=Ce;let r=n.image;r?.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`Home 3D lab: first picture of ${t.id}`,r?.width,"x",r?.height),t.texture?.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`Home 3D lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,o){for(let s of this.projectors.values()){let a=s.texture?r(s.id):null;if(s.texture&&!a&&!s.noPoseLogged&&(s.noPoseLogged=!0,console.warn(`Home 3D lab: ${s.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!a){for(let b of s.overlays.values())b.visible=!1;continue}let l=new Set(n.map(b=>b.key));for(let[b,g]of s.overlays)l.has(b)||(g.parent?.remove(g),g.material.dispose(),s.overlays.delete(b));for(let b of n){let g=s.overlays.get(b.key);(!g||g.parent!==b.parent)&&(g&&(g.parent?.remove(g),g.material.dispose()),g=new At(b.geometry,this.material(s,b.masks)),g.renderOrder=2.5,g.frustumCulled=!1,b.parent.add(g),s.overlays.set(b.key,g)),g.geometry!==b.geometry&&(g.geometry=b.geometry),g.visible=b.visible}let c=`${a.position.toArray().map(b=>b.toFixed(3))},${a.direction.toArray().map(b=>b.toFixed(3))},${a.fov},${a.reach},${s.aspect.toFixed(3)},${o}`;if(c===s.poseKey)continue;s.poseKey=c;let h=s.camera,u=Math.min(150,Math.max(20,a.fov))*(Math.PI/180);h.fov=2*Math.atan(Math.tan(u/2)/s.aspect)*180/Math.PI,h.aspect=s.aspect,h.far=a.reach,h.near=wb,h.position.copy(a.position),h.lookAt(a.position.clone().add(a.direction)),h.updateProjectionMatrix(),s.uniforms.uNearFar.value=[h.near,h.far],h.updateMatrixWorld(),s.uniforms.uProjMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);let f=[];for(let b of this.projectors.values())for(let g of b.overlays.values())g.visible&&f.push(g);for(let b of f)b.visible=!1;let d=t.getRenderTarget(),p=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(s.target),t.clear(),t.render(e,h),t.setRenderTarget(d),e.overrideMaterial=p;for(let b of f)b.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){for(let e of t.overlays.values())e.parent?.remove(e),e.material.dispose();t.texture?.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new Xt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?Nn(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(o,s)=>{r?.(o,s),Object.assign(o.uniforms,t.uniforms),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function Sb(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function Tb(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[o,s,a]=[i[r-1],i[r],i[r+1]],l=Sb(o,s),c=Sb(s,a),h=Math.min(t,l*.45,c*.45),u=[(o[0]-s[0])/l,(o[1]-s[1])/l,(o[2]-s[2])/l],f=[(a[0]-s[0])/c,(a[1]-s[1])/c,(a[2]-s[2])/c];if(h<.005||u[0]*f[0]+u[1]*f[1]+u[2]*f[2]<-.999){n.push(s);continue}let d=[s[0]+u[0]*h,s[1]+u[1]*h,s[2]+u[2]*h],p=[s[0]+f[0]*h,s[1]+f[1]*h,s[2]+f[2]*h];for(let b=0;b<=e;b++){let g=b/e,m=(1-g)*(1-g),x=2*(1-g)*g,_=g*g;n.push([m*d[0]+x*s[0]+_*p[0],m*d[1]+x*s[1]+_*p[1],m*d[2]+x*s[2]+_*p[2]])}}return n.push(i[i.length-1]),n}var Ab=new K(7568261),Eb=new K(4869974),OT=new K(3116287),Rb=new K(3948872),hd=Kr([.35,.85,.4]),Pb=10;function Kr(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function Ma(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function Cb(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Kr(Ma(i,t));return[e,Kr(Ma(i,e))]}function Li(i,t){let e=.5+.5*Math.max(0,t[0]*hd[0]+t[1]*hd[1]+t[2]*hd[2]);return i.clone().multiplyScalar(e)}function Qo(i,t,e,n,r,o=!1){let s=Kr([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=Cb(s),c=(h,u)=>{let f=u/Pb*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[h[0]+d[0]*n,h[1]+d[1]*n,h[2]+d[2]*n],n:d}};for(let h=0;h<Pb;h++){let u=c(t,h),f=c(t,h+1),d=c(e,h),p=c(e,h+1);i.tri(u.p,p.p,d.p,Li(r,u.n),Li(r,p.n),Li(r,d.n)),i.tri(u.p,f.p,p.p,Li(r,u.n),Li(r,f.n),Li(r,p.n)),o&&(i.tri([...t],f.p,u.p,Li(r,[-s[0],-s[1],-s[2]])),i.tri([...e],d.p,p.p,Li(r,s)))}}function NT(i,t,e,n,r,o,s,a){let l=Kr(Ma(e,n)),c=(u,f,d)=>[t[0]+e[0]*u*r+n[0]*f*o+l[0]*d*s,t[1]+e[1]*u*r+n[1]*f*o+l[1]*d*s,t[2]+e[2]*u*r+n[2]*f*o+l[2]*d*s],h=[];for(let[u,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])h.push([u,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[u,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])h.push([u,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[u,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])h.push([u,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[u,f]of h){let d=Li(a,u);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function Ib(i,t){if(t.points.length<2)return;let e=t.radius,n=Tb(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[o,s]=[n[r-1],n[r]];if(Math.hypot(s[0]-o[0],s[1]-o[1],s[2]-o[2])<1e-4)continue;let a=o[1]<-.02&&s[1]<-.02?Ab.clone().multiplyScalar(.55):Ab;Qo(i,o,s,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let o=s=>[[r.p[0]-r.dir[0]*s,r.p[1]-r.dir[1]*s,r.p[2]-r.dir[2]*s],[r.p[0]+r.dir[0]*s,r.p[1]+r.dir[1]*s,r.p[2]+r.dir[2]*s]];if(r.kind==="sleeve"){let[s,a]=o(.03);Qo(i,s,a,e*1.22,Eb,!0)}else if(r.kind==="sight"){let[s,a]=o(.08);Qo(i,s,a,e*1.08,t.water?new K(...t.water).multiplyScalar(.9):new K(10475240),!0);for(let l of o(.08)){let[c,h]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];Qo(i,c,h,e*1.3,Eb,!0)}}else{let[s,a]=o(.055);Qo(i,s,a,e*1.4,Rb,!0);let[l]=Cb(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],h=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];Qo(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],h,e*.35,Rb,!0);let u=r.open===!1?Kr(Ma(r.dir,c)):r.dir,f=Kr(Ma(u,c)),d=[h[0]+u[0]*.045,h[1]+u[1]*.045,h[2]+u[2]*.045];NT(i,d,u,f,.1,.028,.012,OT)}}}var fd=1.62,vu=.2,dd=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let o=gi(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=o.walls;let s=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=Vo(a,e.rooms,e.walls??[]);if(!c)continue;let h=Go(this.walls,a,c);if(!h)continue;let u=h.wall,f=u.b[0]-u.a[0],d=u.b[1]-u.a[1],p=Math.hypot(f,d)||1,b=f/p,g=d/p,m=[u.a[0]+b*h.s,u.a[1]+g*h.s],x=u.left+.45,_=u.right+.45,y=[[m[0]-g*x,m[1]+b*x],[m[0]+g*_,m[1]-b*_]];if(u.exterior&&e.elevation>.3&&!(e.outdoor??[]).some(w=>w.points.length>=3&&Jt(y[1],w.points)))continue;let M=s.get(u)??[];M.push([h.s-a.width/2+.05,h.s+a.width/2-.05]),s.set(u,M),this.doors.push({centre:m,p:y})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c);h<1e-6||this.solids.push({a:a.a,u:[l/h,c/h],len:h,left:a.left,right:a.right,gaps:s.get(a)??[]})}}blocked(t,e=vu){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=vu){for(let n of this.obstacles){let r=t[0]-n.c[0],o=t[1]-n.c[1];if(Math.abs(r*n.u[0]+o*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+o*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=vu){for(let n of this.solids){let r=t[0]-n.a[0],o=t[1]-n.a[1],s=r*n.u[0]+o*n.u[1];if(s<-e||s>n.len+e)continue;let a=-r*n.u[1]+o*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>s>l+e*.6&&s<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let o=1;o<=r;o++){let s=o/r;if(this.blocked([t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]))return!1}return!0}roomAt(t){return this.rooms.find(e=>Jt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let p=this.path(d,e);return p?[d,...p]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let p=this.path(t,d);return p?[...p,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>UT(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let p=vu+.12,b=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,m])=>[d.c[0]+d.u[0]*g*(d.hw+p)+b[0]*m*(d.hd+p),d.c[1]+d.u[1]*g*(d.hw+p)+b[1]*m*(d.hd+p)])}).filter(d=>!this.blocked(d)),o=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],s=o.length,a=new Array(s).fill(1/0),l=new Array(s).fill(-1),c=new Array(s).fill(!1);a[0]=0;let h=new Map,u=(d,p)=>{let b=d<p?`${d}:${p}`:`${p}:${d}`,g=h.get(b);return g===void 0&&(g=this.clear(o[d],o[p]),h.set(b,g)),g};for(;;){let d=-1;for(let p=0;p<s;p++)!c[p]&&a[p]<1/0&&(d<0||a[p]<a[d])&&(d=p);if(d<0)return null;if(d===1)break;c[d]=!0;for(let p=0;p<s;p++){if(c[p]||p===d)continue;let b=Math.hypot(o[d][0]-o[p][0],o[d][1]-o[p][1]);a[d]+b>=a[p]||u(d,p)&&(a[p]=a[d]+b,l[p]=d)}}let f=[];for(let d=1;d>0;d=l[d])f.unshift(o[d]);return f}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let o=Vo(r,this.floor.rooms,this.floor.walls??[]);if(!o)continue;let s=Go(this.walls,r,o);if(!s||!s.wall.exterior)continue;let a=s.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c)||1,u=l/h,f=c/h,d=[a.a[0]+u*s.s,a.a[1]+f*s.s],p=[d[0]-f*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(u,-f))}}let e=[...this.rooms].sort((r,o)=>Lb(o)-Lb(r))[0],n=e?this.freeNear(ir(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),o=Math.sin(e);for(let s=.2;s<n;s+=.15)if(this.blocked([t[0]+r*s,t[1]+o*s],.05))return s;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let o=0;o<24;o++){let s=o/24*Math.PI*2,a=this.sight(t,s);if(e!==null){let l=Math.abs(s-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=s)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function UT(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r||1,s=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o));return Math.hypot(i[0]-(t[0]+n*s),i[1]-(t[1]+r*s))}function Lb(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,o]=e[n],[s,a]=e[(n+1)%e.length];t+=r*a-s*o}return Math.abs(t/2)}var pd=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let o=r.start??(()=>{let s=e.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...o},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let s of t.floors)s.mask.standing.value=65535,s.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+fd}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,o=this.floorY(),s=Math.cos(r);return this.v.camera.position.set(t,o,e),this.v.camera.lookAt(t+Math.cos(n)*s,o+Math.sin(r),e+Math.sin(n)*s),this.v.controls.view.target.set(t,o-fd,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(ir(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,o=0,s=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(o+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(o-=1),this.keys.has("a")&&(s-=1),this.keys.has("d")&&(s+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(o+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),o||s){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*o-Math.sin(r.yaw)*s)*l,h=(Math.sin(r.yaw)*o+Math.cos(r.yaw)*s)*l;this.move(c,h),n=!0}else if(this.path.length){let[l,c]=this.path[0],h=l-r.x,u=c-r.z,f=Math.hypot(h,u),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=h/f*d,r.z+=u/f*d,this.turnTo=Math.atan2(u,h)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,o=1-(e-n.top)/n.height*2,{yaw:s,pitch:a,x:l,z:c}=this.state,h=this.v.camera.fov*Math.PI/180,u=Math.tan(h/2),f=n.width/n.height,d=Math.cos(a),p=[Math.cos(s)*d,Math.sin(a),Math.sin(s)*d],b=[-Math.sin(s),0,Math.cos(s)],g=[p[1]*b[2]-p[2]*b[1],p[2]*b[0]-p[0]*b[2],p[0]*b[1]-p[1]*b[0]],m=[-g[0],-g[1],-g[2]],x=[p[0]+b[0]*r*u*f+m[0]*o*u,p[1]+b[1]*r*u*f+m[1]*o*u,p[2]+b[2]*r*u*f+m[2]*o*u];if(x[1]>=-.02)return null;let _=fd/-x[1];return[l+x[0]*_,c+x[2]*_]}bind(){let t=(s,a,l,c)=>{s.addEventListener(a,l,c),this.listeners.push([s,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",s=>{e||(e={x:s.clientX,y:s.clientY,moved:!1,id:s.pointerId},this.surface.setPointerCapture?.(s.pointerId))}),t(this.surface,"pointermove",s=>{if(!e||s.pointerId!==e.id)return;let a=s.clientX-e.x,l=s.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=s.clientX,e.y=s.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=s=>{if(!e||s.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(s.clientX,s.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",s=>{s.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-s.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=s=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(s.key.toLowerCase()),o=s=>!!s.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",s=>{!r(s)||o(s)||s.ctrlKey||s.metaKey||s.altKey||(s.preventDefault(),s.stopImmediatePropagation(),this.keys.add(s.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",s=>{r(s)&&(this.keys.delete(s.key.toLowerCase()),s.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function BT(i,t){let e=le(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function md(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,o=r?BT(n,r):null;return o?[n,o]:[n]});return{...i,furniture:e}}var Fb=8,Db=1024,Fi=6,_u=class{group=new Te;shadow;target=null;arc=new Te;glow=GT();textures=[];constructor(){this.shadow=new At(new Xn(1,1),new Xt({color:0,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,this.arc.visible=!1,this.group.add(this.shadow,this.arc)}setShadow(t,e,n,r,o,s,a=0){let[l,c,h,u]=[n[0]-.5,n[1]-.5,n[2]+.5,n[3]+.5],f=Math.min(Db,Math.max(32,Math.ceil((h-l)*Fb))),d=Math.min(Db,Math.max(32,Math.ceil((u-c)*Fb)));if(!this.target||this.target.width!==f||this.target.height!==d){this.target?.dispose(),this.target=new qe(f,d,{minFilter:Ye,magFilter:Ye,depthBuffer:!1});let w=this.shadow.material;w.map=this.target.texture,w.needsUpdate=!0}let p=new ci,b=w=>{let A=new Float32Array(w.length/2*3);for(let T=0,E=0;T<w.length;T+=2,E+=3)A.set([w[T],-w[T+1],0],E);let v=new Vt;return v.setAttribute("position",new Lt(A,3)),v},g=new At(b(e),new Xt({color:16777215,side:ie})),m=[];for(let w of r)for(let A of bn(w))for(let v of A)m.push(w[v][0],w[v][1]);let x=new At(b(m),new Xt({color:0,transparent:!0,opacity:0,blending:Dn,side:ie}));x.renderOrder=1,p.add(g,x);let _=new Rn(l,h,-c,-u,.1,10);_.position.z=1;let y=t.getRenderTarget();t.setRenderTarget(this.target),t.clear(),t.render(p,_),t.setRenderTarget(y);for(let w of[g,x])w.geometry.dispose(),w.material.dispose();this.shadow.scale.set(h-l,u-c,1),this.shadow.position.set((l+h)/2,o,(c+u)/2);let M=this.shadow.material;M.opacity=s,M.color.set(a),this.shadow.visible=s>.01}hideShadow(){this.shadow.visible=!1}showShadow(t){let e=this.shadow.material;this.shadow.visible=t&&!!e.map&&e.opacity>.01}setArc(t){if(this.clearArc(),t.fade<=.01||t.points.length<2)return;let e=t.light?Mn:Ee,n=(o,s)=>{let a=VT(t.points.map(c=>c.at),o,t.points.map(c=>zT(c.elevation,t.light).multiplyScalar(c.t<=t.now?1:t.light?.75:.5))),l=new At(a,new Xt({vertexColors:!0,transparent:!0,opacity:s*t.fade,blending:e,depthWrite:!1}));return l.renderOrder=6,l};this.arc.add(n(t.size*.09,t.light?.95:1)),t.light||this.arc.add(n(t.size*.3,.22));let r=new Yi(kb(t.hours.flat()),new Ri({color:t.light?13658624:16767370,map:this.glow,size:t.size*.55,transparent:!0,opacity:t.fade,blending:e,depthWrite:!1}));if(r.renderOrder=6,this.arc.add(r),t.sun){let o=this.sprite(HT(t.light),t.size*5,t.size*5,t.fade,e);o.position.set(...t.sun),this.arc.add(o)}for(let o of t.labels){let s=this.sprite(WT(`${o.rising?"\u2191":"\u2193"} ${o.text}`,t.light),t.size*5.2,t.size*1.7,t.fade,Mn,!0);s.position.set(...o.at),this.arc.add(s)}this.buildRing(t),this.arc.visible=!0}buildRing(t){let{center:e,r:n,north:r,letters:o}=t.ring,s=e[1]+.03,a=(h,u)=>{let f=r+h*Math.PI/180;return[e[0]+Math.sin(f)*u,s,e[2]-Math.cos(f)*u]},l=[];for(let h=0;h<360;h+=3)l.push(...a(h,n),...a(h+3,n));for(let h=0;h<360;h+=15)l.push(...a(h,n),...a(h,n*(h%90===0?.93:.97)));let c=new Ke(kb(l),new Je({color:t.light?9071162:16761963,transparent:!0,opacity:(t.light?.45:.32)*t.fade,blending:t.light?Mn:Ee,depthWrite:!1}));c.renderOrder=6,this.arc.add(c),o.forEach((h,u)=>{let f=this.sprite(XT(h,u===0,t.light),t.size*1.6,t.size*1.6,t.fade,Mn,!0);f.position.set(...a(u*90,n*1.07)),f.position.y+=t.size*.6,this.arc.add(f)})}sprite(t,e,n,r,o,s=!1){this.textures.push(t);let a=new Ss(new Ao({map:t,transparent:!0,opacity:r,blending:o,depthWrite:!1,depthTest:!s}));return a.scale.set(e,n,1),a.renderOrder=6,a}hideArc(){this.clearArc()}clearArc(){for(let t of[...this.arc.children]){this.arc.remove(t);let e=t;e.geometry?.dispose(),e.material.dispose()}for(let t of this.textures)t.dispose();this.textures=[],this.arc.visible=!1}dispose(){this.clearArc(),this.target?.dispose(),this.glow.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}};function kb(i){let t=new Vt;return t.setAttribute("position",new Lt(i,3)),t}function zT(i,t){let e=Math.min(1,Math.max(0,i/35)),n=new K(t?13778970:16730666),r=new K(t?14711552:16753978),o=new K(t?15769600:16773832);return e<.4?n.lerp(r,e/.4):r.lerp(o,(e-.4)/.6)}function VT(i,t,e){let n=[],r=[],o=[],s=new $(0,1,0);for(let l=0;l<i.length;l++){let c=new $(...i[l]),h=new $(...i[Math.max(0,l-1)]),f=new $(...i[Math.min(i.length-1,l+1)]).sub(h).normalize(),d=new $().crossVectors(f,s);d.lengthSq()<1e-6&&d.set(1,0,0),d.normalize();let p=new $().crossVectors(d,f).normalize();for(let b=0;b<Fi;b++){let g=b/Fi*Math.PI*2,m=c.clone().addScaledVector(d,Math.cos(g)*t).addScaledVector(p,Math.sin(g)*t);n.push(m.x,m.y,m.z),r.push(e[l].r,e[l].g,e[l].b)}if(l!==0)for(let b=0;b<Fi;b++){let g=(l-1)*Fi+b,m=(l-1)*Fi+(b+1)%Fi,x=l*Fi+b,_=l*Fi+(b+1)%Fi;o.push(g,x,_,g,_,m)}}let a=new Vt;return a.setAttribute("position",new Lt(n,3)),a.setAttribute("color",new Lt(r,3)),a.setIndex(o),a}function Mu(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function GT(){let[i,t]=Mu(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new pn(i)}function HT(i){let[t,e]=Mu(256,256);e.translate(128,128);for(let r=0;r<12;r++){e.save(),e.rotate(r/12*Math.PI*2);let o=r%2===0?124:92,s=e.createLinearGradient(0,0,0,-o);s.addColorStop(0,i?"rgba(240,140,0,0.75)":"rgba(255,214,140,0.7)"),s.addColorStop(1,"rgba(255,170,60,0)"),e.fillStyle=s,e.beginPath(),e.moveTo(-7,0),e.lineTo(0,-o),e.lineTo(7,0),e.fill(),e.restore()}let n=e.createRadialGradient(0,0,0,0,0,80);return n.addColorStop(0,i?"rgba(255,190,60,0.95)":"rgba(255,236,190,1)"),n.addColorStop(.3,i?"rgba(245,150,20,0.8)":"rgba(255,190,90,0.75)"),n.addColorStop(1,"rgba(255,140,40,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,80,0,Math.PI*2),e.fill(),e.fillStyle=i?"#fff3cf":"#fffaf0",e.beginPath(),e.arc(0,0,22,0,Math.PI*2),e.fill(),new pn(t)}function WT(i,t){let[e,n]=Mu(320,104);n.font="600 52px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let r=Math.min(304,n.measureText(i).width+56),o=(320-r)/2;return n.beginPath(),typeof n.roundRect=="function"?n.roundRect(o,10,r,84,42):n.rect(o,10,r,84),n.fillStyle=t?"rgba(255,248,236,0.92)":"rgba(20,12,4,0.72)",n.fill(),n.lineWidth=4,n.strokeStyle=t?"rgba(224,123,0,0.9)":"rgba(255,196,107,0.85)",n.stroke(),n.fillStyle=t?"#a34f00":"#ffe2a8",n.fillText(i,160,54),new pn(e)}function XT(i,t,e){let[n,r]=Mu(96,96);return r.font=`${t?800:600} 64px system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=e?"rgba(255,255,255,0.9)":t?"rgba(255,90,60,0.9)":"rgba(255,196,107,0.8)",r.shadowBlur=12,r.fillStyle=t?e?"#c0301a":"#ff6a4a":e?"#7a5a2a":"#ffd9a0",r.fillText(i,48,52),new pn(n)}function Vb(i,t,e){return/\b(iPhone|iPod)\b/.test(i)||/Android/.test(i)&&/\bMobile\b/.test(i)||e>0&&t>0&&t<600?"phone":/\biPad\b/.test(i)||/Android|\bSilk\b/.test(i)||/Macintosh/.test(i)&&e>1?"tablet":"desktop"}function Gb(i,t,e){return i==="phone"||!e?null:t?{size:1024,soft:!1,live:!1}:{size:2048,soft:!0,live:!0}}var Ob=Math.PI/180,vi=i=>Math.min(1,Math.max(0,i)),yi=(i,t,e)=>i.map((n,r)=>n+(t[r]-n)*e);function Hb(i,t,e){if(!i)return{dir:[0,1,0],sun:0,color:[1,1,1],sky:1.6,shadow:0};let n=vi(t),r=(e+i.azimuth)*Ob,o=Math.max(0,i.elevation)*Ob,s=[Math.sin(r)*Math.cos(o),Math.sin(o),-Math.cos(r)*Math.cos(o)],l=2.6*vi(i.elevation/10)*(1-.75*n),c=vi((i.elevation+6)/12);return{dir:s,sun:l,color:yi([1,.62,.38],[1,.96,.9],vi(i.elevation/20)),sky:.35+c*(.75+.4*n),shadow:l>0?1-.8*n:0}}var Nb={top:[74,140,214],horizon:[178,208,234]},Ub={top:[148,155,164],horizon:[192,197,203]},Bb={top:[8,12,26],horizon:[24,32,54]},$T=[244,156,104],zb=[186,190,195],YT=[88,112,70],qT=[226,231,238];function gd(i,t){let e=t??{cloud:0,rain:0,snow:0,fog:0},n=i??90,r=vi(e.cloud),o=vi((n+6)/12),s=1-.32*vi(e.rain),a=yi(Nb.top,Ub.top,r).map(p=>p*s),l=yi(Nb.horizon,Ub.horizon,r).map(p=>p*s),c=vi(1-Math.abs(n-1)/7)*(1-r);l=yi(l,$T,c*.85),a=yi(a,[92,112,168],c*.4);let h=vi(e.fog);a=yi(a,zb,h),l=yi(l,zb,h),a=yi(Bb.top,a,o),l=yi(Bb.horizon,l,o);let f=yi(YT,qT,vi(e.snow*1.25)).map(p=>p*(.15+.85*o)),d=p=>p.map(b=>Math.round(b));return{top:d(a),horizon:d(l),ground:d(f)}}function KT(i){return i instanceof Xt&&i.userData.fp3dThemed==="surface"&&i.blending===Mn}var wu=class{group=new Te;sunLight=new Us(16777215,0);skyLight=new Os(12900590,5791818,1);lawn;twins=new Map;depths=new WeakMap;meshes=new Set;on=!1;plan=null;smooth=!1;dirty=!0;constructor(){let t=new Fs({color:5795914,flatShading:!0,transparent:!0,depthWrite:!1});t.alphaMap=ZT(),this.lawn=new At(new Tr(1,48),t),this.lawn.rotation.x=-Math.PI/2,this.lawn.receiveShadow=!0,this.lawn.renderOrder=-2,this.group.add(this.sunLight,this.sunLight.target,this.skyLight,this.lawn)}get active(){return this.on}enable(t,e){if(e!==this.on){if(this.on=e,this.dirty=!0,e){t.add(this.group);return}t.remove(this.group);for(let n of this.meshes){let r=n.material.userData.fp3dBasic;r&&(n.material=r),n.castShadow=!1,n.receiveShadow=!1,n.customDepthMaterial=void 0}this.meshes.clear()}}setPlan(t,e){let n=this.plan;this.plan=e,this.smooth=!!t.getContextAttributes?.()?.antialias;let r=this.on&&!!e,o=e?.size??0;if(t.shadowMap.enabled!==r){t.shadowMap.enabled=r;for(let s of this.twins.values())s.needsUpdate=!0;this.lawn.material.needsUpdate=!0}t.shadowMap.type=e?.soft?Rr:Eh,t.shadowMap.autoUpdate=!!e?.live,this.sunLight.castShadow=r,o&&(!n||n.size!==o)&&(this.sunLight.shadow.map?.dispose(),this.sunLight.shadow.map=null,this.sunLight.shadow.mapSize.set(o,o)),this.sunLight.shadow.radius=e?.soft?3:1,this.sunLight.shadow.bias=e?.soft?-6e-4:-.002,this.dirty=!0}touch(){this.dirty=!0}update(t,e,n,r){let o=Hb(t,e?.cloud??0,n),s=gd(t?t.elevation:null,e),a=h=>new K().setRGB(h[0]/255,h[1]/255,h[2]/255,Ce);this.sunLight.intensity=o.sun,this.sunLight.color.setRGB(o.color[0],o.color[1],o.color[2],Ce),this.sunLight.shadow.intensity=o.shadow;let l=r.r*2;this.sunLight.position.set(r.x+o.dir[0]*l,r.y+o.dir[1]*l,r.z+o.dir[2]*l),this.sunLight.target.position.set(r.x,r.y,r.z),this.sunLight.target.updateMatrixWorld();let c=this.sunLight.shadow.camera;c.left=c.bottom=-r.r,c.right=c.top=r.r,c.near=.5,c.far=l*2,c.updateProjectionMatrix(),this.skyLight.intensity=o.sky,this.skyLight.color.copy(a(s.horizon).lerp(a(s.top),.4).lerp(new K(1,1,1),.6)),this.skyLight.groundColor.copy(a(s.ground)),this.lawn.material.color.copy(a(gd(null,e).ground)),this.lawn.position.set(r.x,r.y,r.z),this.lawn.scale.setScalar(r.r*1.6),this.dirty=!0}realize(t,e,n,r=!1){if(!this.on)return;let o=new Set;t.traverse(s=>{let a=s;if(!a.isMesh)return;let l=a.material,c=Array.isArray(l)?null:l.userData.fp3dBasic??(KT(l)?l:null);if(!c)return;o.add(a),a.material=this.twin(c),JT(a.geometry);let h=c.visible&&c.depthWrite&&(!c.transparent||c.opacity>.85);a.castShadow=e&&h,a.receiveShadow=e;let u=c.userData.fp3dFold;a.customDepthMaterial=u&&u.role!=="glass"?this.depth(u.masks,u.role):void 0}),this.meshes=o;for(let[s,a]of this.twins)Wb(s,a,this.smooth);n&&this.plan&&!this.plan.live&&(this.dirty||r)&&(n.shadowMap.needsUpdate=!0),this.dirty=!1}dispose(){for(let t of this.twins.values())t.dispose();this.twins.clear(),this.lawn.geometry.dispose(),this.lawn.material.alphaMap?.dispose(),this.lawn.material.dispose(),this.sunLight.shadow.map?.dispose(),this.sunLight.dispose()}twin(t){let e=this.twins.get(t);if(e)return e;e=new Ls({vertexColors:t.vertexColors,map:t.map,flatShading:!0,specular:0}),e.userData.fp3dBasic=t,e.userData.fp3dVersion=t.version,Wb(t,e,this.smooth),e.onBeforeCompile=(r,o)=>{t.onBeforeCompile(r,o),r.fragmentShader=r.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * fp3dGlow;`),jT(r)},e.customProgramCacheKey=()=>`${t.customProgramCacheKey()}-lit`;let n=e;return t.addEventListener("dispose",()=>{n.dispose(),this.twins.delete(t)}),this.twins.set(t,e),e}depth(t,e){let n=this.depths.get(t);n||this.depths.set(t,n=new Map);let r=n.get(e);return r||n.set(e,r=Nn(new Co,t,e)),r}};function ZT(){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");if(!t)return null;let e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"#fff"),e.addColorStop(.55,"#fff"),e.addColorStop(1,"#000"),t.fillStyle=e,t.fillRect(0,0,64,64),new pn(i)}function Wb(i,t,e){t.opacity=i.opacity,t.transparent=i.transparent,t.visible=i.visible,t.side=i.side,t.depthWrite=i.depthWrite,t.depthTest=i.depthTest,t.alphaTest=i.alphaTest,t.polygonOffset=i.polygonOffset,t.polygonOffsetFactor=i.polygonOffsetFactor,t.polygonOffsetUnits=i.polygonOffsetUnits,t.color.copy(i.color);let n=e&&!i.transparent;t.alphaToCoverage!==n&&(t.alphaToCoverage=n,t.needsUpdate=!0),t.map!==i.map&&(t.map=i.map,t.needsUpdate=!0),t.userData.fp3dVersion!==i.version&&(t.userData.fp3dVersion=i.version,t.needsUpdate=!0)}function JT(i){let t=i.getAttribute("position");if(!t)return;let e=i.getAttribute("fp3dMat");if(e&&(e.count===t.count||!("name"in e)||e.name!=="fp3dMatt"))return;let n=new vn(new Float32Array(t.count),1);n.name="fp3dMatt",i.setAttribute("fp3dMat",n)}function jT(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float fp3dMat;
flat varying int vFp3dMat;
varying vec3 vFp3dWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
  vFp3dMat = int(fp3dMat + 0.5);
  vFp3dWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
${QT}`).replace("#include <specularmap_fragment>",`#include <specularmap_fragment>
${tA}`).replace("#include <lights_phong_fragment>",`#include <lights_phong_fragment>
${eA}`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
${nA}`)}var QT=`
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
`,tA=`
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
`,eA=`
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
`,nA=`
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
`;var iA=40;function Xb(i,t,e,n,r){let o=[];if(n<=0)return o;let s=1/Math.tan(n*Math.PI/180),a=(c,h,u)=>{let f=Math.min(iA,Math.max(0,h-r)*s);return[c-e[0]*f,u-e[1]*f]},l=(c,h,u)=>o.push(c[0],c[1],h[0],h[1],u[0],u[1]);for(let c of i.floors)for(let h of c.rooms){if(h.outdoor||h.points.length<3)continue;let u=c.elevation+(h.ceiling_height??c.height);if(u<=r)continue;let f=Math.max(r,c.elevation),d=h.points.map(([b,g])=>a(b,f,g)),p=h.points.map(([b,g])=>a(b,u,g));for(let[b,g,m]of bn(h.points))l(d[b],d[g],d[m]),l(p[b],p[g],p[m]);for(let b=0;b<h.points.length;b++){let g=(b+1)%h.points.length;l(d[b],d[g],p[g]),l(d[b],p[g],p[b])}}for(let c of t){let h=c.floor.elevation+c.base,u=c.solid.p;for(let f=0;f+8<u.length;f+=9)l(a(u[f],h+u[f+1],u[f+2]),a(u[f+3],h+u[f+4],u[f+5]),a(u[f+6],h+u[f+7],u[f+8]))}return o}function $b(i){if(!i.length)return null;let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let o=0;o<i.length;o+=2)t=Math.min(t,i[o]),n=Math.max(n,i[o]),e=Math.min(e,i[o+1]),r=Math.max(r,i[o+1]);return[t,e,n,r]}function bd(i,t){let e=[],n=[],r=[],o=[],s=[];for(let{face:l,field:c}of i){let h=e.length/3,u=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=rA(c.id)%1e3/1e3;for(let b of da(l,c)){let[g,m,x,_]=b.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),y=[[g,0,0],[m,1,0],[x,1,1],[_,0,1]];for(let M of[0,1,2,0,2,3]){let[w,A,v]=y[M];e.push(w[0],w[1],w[2]),n.push(A,v),r.push(u,f),o.push(d)}}let p=e.length/3-h;p&&s.push({id:c.id,start:h,count:p})}if(!e.length)return null;let a=new Vt;return a.setAttribute("position",new Lt(e,3)),a.setAttribute("uv",new Lt(n,2)),a.setAttribute("aCells",new Lt(r,2)),a.setAttribute("aPhase",new Lt(o,1)),a.setAttribute("aLevel",new Lt(new Float32Array(e.length/3),1)),{geometry:a,ranges:s}}function wa(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let o of i.ranges){let s=Math.min(1,Math.max(0,t.get(o.id)??0));n.fill(s,o.start,o.start+o.count),s>.02&&(r=!0)}return e.needsUpdate=!0,r}function xd(i){let t=new Xt({transparent:!0,blending:Ee,depthWrite:!1,side:ie});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function rA(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var qb=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,oA=`
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
`,sA=qb,aA=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function Yb(i,t){let e=[];for(let[r,o,s]of bn(i))for(let a of[r,s,o])e.push(i[a][0],t,i[a][1]);let n=new Vt;return n.setAttribute("position",new Lt(e,3)),n}function Kb(i,t){let e=new Te;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,o=(s,a)=>{let l=new At(Yb(n.points,s),new mn({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:qb,fragmentShader:oA,transparent:!0,blending:Ee,depthWrite:!1,side:ie}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(o(n.floorY+.01,0),o(n.y+.004,1)):o(n.y+.004,0),n.cover>.02){let s=n.points.map(g=>g[0]),a=n.points.map(g=>g[1]),[l,c,h,u]=[Math.min(...s),Math.max(...s),Math.min(...a),Math.max(...a)],f=c-l>=u-h,d=Math.min(1,n.cover),p=f?[[l-.1,h-.1],[l+(c-l)*d,h-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,h-.1],[c+.1,h-.1],[c+.1,h+(u-h)*d],[l-.1,h+(u-h)*d]],b=Wo(n.points,p);if(b.length>=3){let g=new At(Yb(b,n.y+.03),new mn({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:sA,fragmentShader:aA,transparent:!0,side:ie}));g.renderOrder=6,e.add(g);let m=[];for(let _=0;_<b.length;_++){let y=b[_],M=b[(_+1)%b.length];m.push(y[0],n.y+.032,y[1],M[0],n.y+.032,M[1])}let x=new Vt;x.setAttribute("position",new Lt(m,3)),e.add(new Ke(x,new Je({color:5995775,transparent:!0,opacity:.6})))}}}return e}function Zb(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var Jb=["neon","blueprint","day","realistic"];function Au(i){return Jb.indexOf(i)}var ts={value:new $(.22,.88,1)},es={value:0};function jb(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var Tu=i=>{let t=new K(i);return`vec3(${t.r.toFixed(6)}, ${t.g.toFixed(6)}, ${t.b.toFixed(6)})`},lA=`vec3 fp3dFloor(vec3 c) {
${Object.entries(va).map(([i,t])=>`  if (distance(c, ${Tu(fr[i].color)}) < 0.0002) return ${Tu(t)};`).join(`
`)}
  return vec3(-1.0);
}`,cA=[.04,.09,.22],Su={base:.22,gain:5.8,max:.97,hue:.12},uA=11056326,hA=.25,fA=(i,t,e)=>[16,8,0].reduce((n,r)=>n|Math.round((i>>r&255)*(1-e)+(t>>r&255)*e)<<r,0);function dA(i){let t=Object.keys(fr).find(e=>fr[e].color===i);return t&&va[t]!==void 0?fA(va[t],uA,hA):null}var yd={from:.105,gain:54,max:.4};var pA=`vec3 fp3dDayFloor(vec3 c) {
${Object.keys(va).map(i=>`  if (distance(c, ${Tu(fr[i].color)}) < 0.0002) return ${Tu(dA(fr[i].color))};`).join(`
`)}
  return vec3(-1.0);
}`,mA=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
// the realistic look: how much a signal colour lights itself (lit lamps, open windows, screens glow in the light)
float fp3dGlow = 0.0;
${lA}
${pA}
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
    return c * (1.0 + clamp((lift - ${yd.from}) * ${yd.gain.toFixed(1)}, 0.0, ${yd.max}));
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
  if (line) return vec3(${cA.join(", ")}) * clamp(mx * 1.6, 0.75, 1.0);
  vec3 dayFloor = fp3dDayFloor(c);
  if (dayFloor.r >= 0.0) return dayFloor;
  vec3 g = vec3(clamp(${Su.base.toFixed(3)} + l * ${Su.gain.toFixed(3)}, 0.0, ${Su.max.toFixed(3)}));
  return mix(g, g * (c / max(mx, 0.001)), ${Su.hue.toFixed(3)});
}
`;function Ge(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,s)=>{n(o,s),o.uniforms.uTheme=t,o.uniforms.uAccent=ts,o.uniforms.uAccentOn=es,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${mA}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});${e?`
  if (uTheme == 3) diffuseColor.a *= 0.22;`:""}`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i.userData.fp3dThemed=e?"line":"surface",i}function Sa(i){return i==="day"||i==="realistic"?Mn:Ee}var Di=.012,gA=.012;function tx(i,t,e,n,r,o=[],s){let a=[],l=[],c=[],h=[],u=(m,x,_,y,M,w,A)=>{for(let v of[m,x,_,m,_,y])a.push(v[0],v[1],v[2]),l.push(M[0],M[1],M[2]),c.push(w),h.push(A)};i.rooms.forEach((m,x)=>{if(m.points.length<3)return;let _=m.points.map(S=>S[0]),y=m.points.map(S=>S[1]),M=Math.min(..._),w=Math.min(...y),A=Math.max(..._),v=Math.max(...y),T=Math.max(1,Math.ceil((A-M)/r)),E=Math.max(1,Math.ceil((v-w)/r));for(let S=0;S<T;S++)for(let P=0;P<E;P++){let N=M+S*r,D=w+P*r,C=Math.min(N+r,A),R=Math.min(D+r,v),k=Wo(m.points,[[N,D],[C,D],[C,R],[N,R]]),L=k.length>=3?Math.abs(MA(k)):0;if(L<1e-4)continue;let O=wA(k);if(!o.some(B=>Jt(O,B))){if(L>(C-N)*(R-D)-1e-6){u([N,Di,D],[N,Di,R],[C,Di,R],[C,Di,D],[0,1,0],x,-1);continue}for(let[B,V,W]of bn(k)){let z=k[B],q=k[W],j=k[V];(j[1]-z[1])*(q[0]-z[0])-(j[0]-z[0])*(q[1]-z[1])<0&&([z,q]=[q,z]),u([z[0],Di,z[1]],[j[0],Di,j[1]],[q[0],Di,q[1]],[q[0],Di,q[1]],[0,1,0],x,-1)}}}});let f=i.rooms.length,d=(i.outdoor??[]).filter(m=>m.points.length>=3&&!Jn(m.type));if(d.length){let m=d.flatMap(v=>v.points.map(T=>T[0])),x=d.flatMap(v=>v.points.map(T=>T[1])),_=Math.floor(Math.min(...m)/r)*r,y=Math.floor(Math.min(...x)/r)*r,M=Math.max(1,Math.ceil((Math.max(...m)-_)/r)),w=Math.max(1,Math.ceil((Math.max(...x)-y)/r)),A=(v,T,E)=>Zg(i,v)-na(i,v,T,E)+Di;for(let v=0;v<M;v++)for(let T=0;T<w;T++){let E=_+v*r,S=y+T*r,P,N=[E+r/2,S+r/2];P=d.find(C=>C.type==="pool"&&Jt(N,C.points));for(let C=d.length-1;C>=0&&!P;C--)Jt(N,d[C].points)&&(P=d[C]);if(!P)continue;let D=(C,R)=>[C,A(P,C,R),R];u(D(E,S),D(E,S+r),D(E+r,S+r),D(E+r,S),[0,1,0],f,-1)}}let p=Math.min(i.cut_height,i.height),b=[];t.forEach((m,x)=>{let _=Math.min(i.height,m.height??i.height),y=Math.min(p,_-.02),M=m.b[0]-m.a[0],w=m.b[1]-m.a[1],A=Math.hypot(M,w);if(A<.05)return;let v=[M/A,w/A],T=[-v[1],v[0]],E=e[x],S=xA(m,v,A,n),P=(R,k)=>R?i.rooms.findIndex(L=>L.id===R):k?f:-1;b.push({a:m.a,b:m.b,h:_,ra:P(m.roomLeft,!1),rb:P(m.roomRight,m.exterior),gaps:S});let N=(R,k,L)=>[k,L,...R.filter(O=>O>k+.005&&O<L-.005)].sort((O,B)=>O-B).filter((O,B,V)=>B===0||O>V[B-1]+.005),D=N([y,(y+_)/2,...S.flatMap(R=>[R.y0+.01,R.y1-.01])],.02,_-.02),C=N(S.flatMap(R=>[R.s0,R.s1]),0,A);for(let R of[1,-1]){let k=R>0?m.roomLeft:m.roomRight,L=k?i.rooms.findIndex(z=>z.id===k):m.exterior?f:-1;if(L<0)continue;let O=(R>0?m.left:m.right)+gA,B=[T[0]*R,T[1]*R],V=(z,q)=>[m.a[0]+v[0]*z+B[0]*O,q,m.a[1]+v[1]*z+B[1]*O],W=z=>{let q=V(z,0),j=s?.(q[0],q[2]);return j==null?1/0:j-.02};for(let z=0;z<C.length-1;z++){let q=C[z+1]-C[z],j=Math.max(1,Math.ceil(q/r));for(let ot=0;ot<j;ot++){let H=C[z]+q/j*ot,X=C[z]+q/j*(ot+1),tt=(H+X)/2;for(let et=0;et<D.length-1;et++){let nt=D[et],ut=D[et+1];if(ut-nt<.01)continue;let bt=(nt+ut)/2;if(S.some(vt=>tt>vt.s0&&tt<vt.s1&&bt>vt.y0&&bt<vt.y1))continue;let ht=nt>=p-1e-6?E:lr+E,gt=Math.min(ut,W(H)),yt=Math.min(ut,W(X));gt<=nt+.005&&yt<=nt+.005||u(V(H,nt),V(X,nt),V(X,Math.max(nt,yt)),V(H,Math.max(nt,gt)),[B[0],0,B[1]],L,ht)}}}}});let g=[];for(let m of n){if(m.opening.type!=="door")continue;let x=t.find(M=>ex(M,m)&&bA(M,m));if(!x||!x.roomLeft||!x.roomRight)continue;let _=i.rooms.findIndex(M=>M.id===x.roomLeft),y=i.rooms.findIndex(M=>M.id===x.roomRight);_<0||y<0||g.push({id:m.opening.id,a:_,b:y,x:m.start[0]+m.axis[0]*(m.width/2),y:Math.min(1.1,m.top*.55),z:m.start[1]+m.axis[1]*(m.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:g,blockers:b}}function ex(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function bA(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,o=t.start[0]+t.axis[0]*(t.width/2),s=t.start[1]+t.axis[1]*(t.width/2),a=((o-i.a[0])*e+(s-i.a[1])*n)/r;return a>-.05&&a<r+.05}function xA(i,t,e,n){let r=[];for(let o of n){if(!ex(i,o))continue;let s=(o.start[0]-i.a[0])*t[0]+(o.start[1]-i.a[1])*t[1],l=o.axis[0]*t[0]+o.axis[1]*t[1]>0?s:s-o.width;l>e||l+o.width<0||r.push({s0:l,s1:l+o.width,y0:o.sill-.01,y1:o.top+.01})}return r}function yA(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function vA(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Qb(i,t,e,n,r,o,s){let a=t-i.x,l=e-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=vA(i),d=1/(1+h/(f*f)),p=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*o+c*s)/u);return i.level*p*(.2+.8*b)*yA(i.kind,l/u)}function nx(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((h,u)=>{let f=n[u]??.5;if(!(f<=.01))for(let[d,p]of[[h.a,h.b],[h.b,h.a]]){let b=[0,0,0];for(let m of t){if(m.room!==d)continue;let x=m.x-h.x,_=m.y-h.y,y=m.z-h.z,M=Math.hypot(x,_,y)||1,w=Qb(m,h.x,h.y,h.z,x/M,_/M,y/M);b[0]+=m.color[0]*w,b[1]+=m.color[1]*w,b[2]+=m.color[2]*w}let g=Math.max(b[0],b[1],b[2]);g<.01||r.push({x:h.x,y:h.y,z:h.z,color:[b[0]/g,b[1]/g,b[2]/g],level:Math.min(1,g*.9*(.35+.65*f)),kind:"wall",room:p})}});let o=new Map;for(let h of r){let u=i.blockers.filter(d=>d.ra===h.room||d.rb===h.room),f={...h,color:h.color.map(d=>Math.pow(d,1.5)),walls:u};o.set(h.room,[...o.get(h.room)??[],f])}let{pos:s,normal:a,room:l}=i,c=new Float32Array(s.length);for(let h=0;h<l.length;h++){let u=o.get(l[h]);if(!u)continue;let f=h*3,d=0,p=0,b=0;for(let g of u){if(g.walls.length&&_A(g,g.walls,s[f],s[f+1],s[f+2]))continue;let m=Qb(g,s[f],s[f+1],s[f+2],a[f],a[f+1],a[f+2]);d+=g.color[0]*m,p+=g.color[1]*m,b+=g.color[2]*m}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-p*e*1.6),c[f+2]=1-Math.exp(-b*e*1.6)}return c}function _A(i,t,e,n,r){let o=e-i.x,s=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=o*c-s*l;if(Math.abs(h)<1e-9)continue;let u=a.a[0]-i.x,f=a.a[1]-i.z,d=(u*c-f*l)/h;if(d<=1e-6||d>=1-1e-6)continue;let p=(u*s-f*o)/h;if(p<0||p>1)continue;let b=i.y+(n-i.y)*d;if(b>=a.h)continue;let g=p*Math.hypot(l,c);if(!a.gaps.some(m=>g>m.s0&&g<m.s1&&b>m.y0&&b<m.y1))return!0}return!1}function vd(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&Jt([t,e],r.points));return n<0?i.rooms.length:n}function ns(i,t){return i&&t>=0&&t<i.length?i[t]:t}function MA(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function wA(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}var Ta={open:0,open2:0,tilt:0,tilt2:0,cover:null},ix=2043986,rx=2769520,SA=2242399,_d=1845831,TA=1450554,ki=16758087,Eu=3662079,AA=1.2,EA=1.5,RA=.5,PA=1846349,CA=2572395,IA=1120816,LA=1845831,ox=5995775,sx=9085695,is=Bt(3662079,.08),FA=.2;function Ru(i,t,e,n,r,o,s,a,l,c,h){let u=(d,p,b)=>t(d,p,b),f=[[u(e,r,a),u(n,r,a),u(n,o,a),u(e,o,a),c],[u(e,r,s),u(n,r,s),u(n,o,s),u(e,o,s),Bt(l.getHex(),.6)],[u(e,o,s),u(n,o,s),u(n,o,a),u(e,o,a),l],[u(e,r,s),u(n,r,s),u(n,r,a),u(e,r,a),Bt(l.getHex(),.85)],[u(e,r,s),u(e,o,s),u(e,o,a),u(e,r,a),Bt(l.getHex(),.92)],[u(n,r,s),u(n,o,s),u(n,o,a),u(n,r,a),Bt(l.getHex(),.92)]];for(let[d,p,b,g,m]of f)i.tri(d,p,b,m,m,m,void 0,h),i.tri(d,b,g,m,m,m,void 0,h)}function de(i,t,e,n,r,o,s,a,l,c,h,u){if(a<=h+1e-6)return Ru(i,t,e,n,r,o,s,a,l,c,jt);if(s>=h-1e-6)return Ru(i,t,e,n,r,o,s,a,l,c,u);Ru(i,t,e,n,r,o,s,h,l,c,jt),Ru(i,t,e,n,r,o,h,a,l,c,u)}function Oi(i,t,e,n,r,o,s,a,l,c,h=0){let u=(f,d,p)=>{let b=y=>h?(s-y)/h:.5,g=t(e,r,f),m=t(n,r,f),x=t(n,r,d),_=t(e,r,d);i.tri(g,m,x,a,a,a,[0,b(f),1,b(f),1,b(d)],p),i.tri(g,x,_,a,a,a,[0,b(f),1,b(d),0,b(d)],p)};s<=l+1e-6?u(o,s,jt):o>=l-1e-6?u(o,s,c):(u(o,l,jt),u(l,s,c))}function DA(i,t,e,n,r,o,s,a,l,c){let h=t(e,r,s),u=t(n,r,s),f=t(n,o,s),d=t(e,o,s),p=0,b=(o-r)/c;i.tri(h,u,f,a,a,a,[0,p,1,p,1,b],l),i.tri(h,f,d,a,a,a,[0,p,1,b,0,b],l)}function kA(i,t){let[e,n]=i.axis;for(let r of t){if(r===i||r.opening.id===i.opening.id)continue;let o=e*r.axis[0]+n*r.axis[1];if(Math.abs(o)<.999)continue;let s=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(s*n-a*e)>.03)continue;let l=s*e+a*n,c=o>0?l:l-r.width,h=c+r.width;if(Math.min(i.width,h)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let f=i.sill-r.top;if(f>=-.05&&f<=.3)return!0}return!1}function OA(i,t){let e=i.opening.sill_board??"auto";if(e==="none")return{inside:!1,outside:!1};if(e==="inside"||e==="outside")return{inside:e==="inside",outside:e==="outside"};let n=i.sill>.3&&!kA(i,t)&&pi(i.opening,i.exterior)!=="glass_wall";return{inside:n,outside:n&&i.exterior}}function ax(i,t,e,n,r,o,s,a,l){let c=OA(i,t),h=i.width,u=Math.max(i.sill,.03);c.inside&&de(e,n,-.04,h+.04,r+o,i.faceRoom+.07,u-.03,u,new K(_d),s,a,l),c.outside&&de(e,n,-.03,h+.03,-i.faceOut-.06,r-o,u-.04,u-.02,new K(_d),s,a,l)}function lx(i,t,e){let n=new Qt,r=new Qt,o=new Qt(!0),s=new K(ix),a=new K(rx),l=[],c=[],h=[];for(let u of i){let f=n.count,d=r.count,p=o.count,b=t.get(u.opening.id)??Ta,g=u.width,{sill:m,top:x,bucket:_}=u,y=(v,T,E)=>[u.start[0]+u.axis[0]*v+u.toRoom[0]*T,E,u.start[1]+u.axis[1]*v+u.toRoom[1]*T],M=(u.faceRoom-u.faceOut)/2,w=u.opening.mark==="closed",A=u.opening.type==="door"&&pi(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!A||u.opening.type==="garage"){let v=-u.faceOut-.012,T=u.faceRoom+.012,E=u.opening.type==="garage"&&(w?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),S=E?Bt(ki,.8):new K(ix),P=E?Bt(ki,1):new K(rx);de(n,y,-.045,.02,v,T,m,x+.045,S,P,e,_),de(n,y,g-.02,g+.045,v,T,m,x+.045,S,P,e,_),de(n,y,.02,g-.02,v,T,x-.02,x+.045,S,P,e,_)}if(u.opening.type==="door"){let v=pi(u.opening,u.exterior),T=k0(v),E=u.opening.swing==="out"?-1:1,S=E>0?u.faceRoom:-u.faceOut,P=u.opening.leaves===2,N=.02,D=g-.02,C=D0(g,v,u.hingeAtStart,u.opening);if(C){let B=-u.faceOut-.012,V=u.faceRoom+.012,W=S-E*(T?.06:.04)/2,z=.06;for(let[q,j]of C.panels)de(n,y,q,q+z,B,V,m+.02,x-.02,s,a,e,_),de(n,y,j-z,j,B,V,m+.02,x-.02,s,a,e,_),de(n,y,q+z,j-z,B,V,m+.02,m+.12,s,a,e,_),Oi(r,y,q+z,j-z,W,m+.12,x-.02,is,e,_);N=C.x0,D=C.x1}let R=P?(D-N)/2-.004:D-N,k=T?.06:.04;u.exterior&&(T||v==="glass")&&de(n,y,g/2-.08,g/2+.08,-u.faceOut-.1,-u.faceOut,x+.1,x+.17,Bt(ki,.55),Bt(ki,.85),e,jt),T&&de(n,y,.02,g-.02,-u.faceOut-.02,u.faceRoom,m,m+.02,new K(_d),a,e,_);let L=A?[]:[[u.hingeAtStart,b.open]];P&&!A&&L.push([!u.hingeAtStart,b.open2??0]);let O=u.opening.open_angle;for(let[B,V]of L){let W=Math.min(1,Math.max(0,V)),z=v==="sliding"?0:O!=null&&O>0?(b.sensed?W:Math.min(1,W/RA))*Math.min(170,O)*(Math.PI/180):W*EA,q=v==="sliding"?W*R:0,j=(ht,gt,yt)=>{let vt=ht*Math.cos(z)-gt*Math.sin(z)-q,qt=S+E*(gt*Math.cos(z)+ht*Math.sin(z)+(q?.05:0));return y(B?N+vt:D-vt,qt,yt)},ot=W>.05?jt:_,H=w?!!b.sensed&&W<.05:W>.9,X=H?Bt(ki,.7):new K(T?IA:PA),tt=H?Bt(ki,.9):new K(T?LA:CA);v==="glass"?(de(n,j,0,.05,-k,0,m+.01,x-.01,X,tt,e,ot),de(n,j,R-.05,R,-k,0,m+.01,x-.01,X,tt,e,ot),de(n,j,.05,R-.05,-k,0,m+.01,m+.12,X,tt,e,ot),de(n,j,.05,R-.05,-k,0,x-.08,x-.01,X,tt,e,ot),Oi(r,j,.05,R-.05,-k/2,m+.12,x-.08,is,e,ot)):de(n,j,0,R,-k,0,m+.01,x-.01,X,tt,e,ot);for(let ht of[.001,-k-.001])v==="front_glass"?Oi(r,j,.12,R-.12,ht,m+(x-m)*.55,x-.18,is,e,ot):T&&Oi(r,j,.1,.18,ht,m+.3,x-.3,is,e,ot);let et=m+Math.min(1.05,(x-m)*.5),nt=T?.3:.012,ut=T?R-.11:R-.16,bt=T?R-.08:R-.05;de(n,j,ut,bt,.004,.05,et-nt,et+nt,new K(ox),new K(sx),e,ot),de(n,j,ut,bt,-k-.05,-k-.004,et-nt,et+nt,new K(ox),new K(sx),e,ot),b.unlocked&&B===u.hingeAtStart&&de(n,j,R-.022,R+.004,-k-.006,.006,m+.03,x-.03,Bt(Eu,.85),Bt(Eu,1),e,ot)}}else if(u.opening.type==="garage"&&pi(u.opening,u.exterior)==="up_and_over"){let v=Math.min(1,Math.max(0,b.cover??1)),T=u.faceRoom-.03,E=x-m,S=E/3,P=(1-v)*(Math.PI/2),N=m+S+(x-.03-m-S)*(1-v),D=(R,k,L)=>y(R,T+L*Math.sin(P)+k*Math.cos(P),N+L*Math.cos(P)-k*Math.sin(P)),C=Math.cos(P)>.01?(e-N)/Math.cos(P):N>e?-1/0:1/0;Oi(o,D,.02,g-.02,0,-S,E-S,new K(13951231),C,_,.5)}else if(u.opening.type==="garage"){let v=Math.min(1,Math.max(0,b.cover??1)),T=new K(13951231),E=u.faceRoom-.03,S=x*(1-v);v>.01&&Oi(o,y,.02,g-.02,E,S,x,T,e,_,.5);let P=(1-v)*x;P>.01&&DA(o,y,.02,g-.02,E,E+P,x+.03,T,_,.5)}else if(pi(u.opening,u.exterior)==="glass_wall"){de(n,y,0,.04,M-.025,M+.025,m,x,s,a,e,_),de(n,y,g-.04,g,M-.025,M+.025,m,x,s,a,e,_),de(n,y,.04,g-.04,M-.025,M+.025,m,m+.03,s,a,e,_),de(n,y,.04,g-.04,M-.025,M+.025,x-.04,x,s,a,e,_),ax(u,i,n,y,M,.025,a,e,_);let E=Math.max(1,Math.round((g-2*.04)/.9)),S=(g-2*.04)/E;for(let P=1;P<E;P++){let N=.04+P*S;de(n,y,N-.02,N+.02,M-.025,M+.025,m+.03,x-.04,s,a,e,_)}for(let P=0;P<E;P++){let N=.04+P*S+(P?.02:0),D=.04+(P+1)*S-(P<E-1?.02:0);Oi(r,y,N,D,M,m+.03,x-.04,is,e,_)}}else{de(n,y,0,.06,M-.035,M+.035,m,x,s,a,e,_),de(n,y,g-.06,g,M-.035,M+.035,m,x,s,a,e,_),de(n,y,.06,g-.06,M-.035,M+.035,m,m+(m>.05?.06:.03),s,a,e,_),de(n,y,.06,g-.06,M-.035,M+.035,x-.06,x,s,a,e,_),ax(u,i,n,y,M,.035,a,e,_);let E=.055,S=m+(m>.05?.06:.03),P=x-.06,N=M+.035,D=M+.035+.06,R=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:g/2,x1:u.hingeAtStart?g/2:g-.06,open:b.open,tilt:b.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?g/2:.06,x1:u.hingeAtStart?g-.06:g/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:g-.06,open:b.open,tilt:b.tilt}];for(let k of R){let L=k.open>.02||k.tilt>.02,O=w?!!b.sensed&&!L:L,B=O?Bt(ki,.75):new K(SA),V=O?Bt(ki,.95):a,W=k.x0,z=k.x1,q=z-W,j=k.open*AA*(u.opening.swing==="out"?-1:1),ot=k.tilt*FA,H=(tt,et,nt)=>{let ut=nt-S,bt=et+ut*Math.sin(ot),ht=S+ut*Math.cos(ot),gt=tt*Math.cos(j)-(bt-N)*Math.sin(j);bt=N+(bt-N)*Math.cos(j)+tt*Math.sin(j);let yt=k.atStart?W+gt:z-gt;return y(yt,bt,ht)},X=Math.abs(j)>.05?jt:_;if(de(n,H,0,E,N,D,S,P,B,V,e,X),de(n,H,q-E,q,N,D,S,P,B,V,e,X),de(n,H,E,q-E,N,D,S,S+E,B,V,e,X),de(n,H,E,q-E,N,D,P-E,P,B,V,e,X),Oi(r,H,E,q-E,(N+D)/2,S+E,P-E,O?Bt(ki,.16):is,e,X),b.unlocked&&k.atStart===u.hingeAtStart&&de(n,H,q-.022,q+.004,N-.006,D+.006,S+.02,P-.02,Bt(Eu,.85),Bt(Eu,1),e,X),pi(u.opening,u.exterior)==="bars"){let tt=(S+P)/2,et=(N+D)/2;de(n,H,E,q-E,et-.012,et+.012,tt-.012,tt+.012,B,V,e,X),de(n,H,q/2-.012,q/2+.012,et-.012,et+.012,S+E,P-E,B,V,e,X)}}}if(b.cover!==null&&!(u.opening.type==="garage"&&pi(u.opening,u.exterior)==="up_and_over")){let v=-u.faceOut,T=x+.2;de(n,y,-.05,g+.05,v-.15,v,x,T,new K(TA),a,e,_);let E=Math.min(1,Math.max(0,b.cover));if(E>.01){let S=x-E*(x-m);Oi(o,y,0,g,v-.07,S,x,new K(16777215),e,_,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),h.push({id:u.opening.id,start:p,end:o.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:o.geometry(),frameTris:l,glassTris:c,blindTris:h}}var NA=.3,cx=2.6;function ux(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),o=i.map(M=>M[1]),s=Math.min(...r),a=Math.max(...r),l=Math.min(...o),c=Math.max(...o),h=c-l>=a-s,u=e*.7071,f=M=>{let w=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],A=[...w,[M[0]+u,M[1]+u],[M[0]-u,M[1]+u],[M[0]+u,M[1]-u],[M[0]-u,M[1]-u]];return w.every(v=>Jt(v,i))&&!n.some(v=>A.some(T=>Jt(T,v)))},d=(M,w)=>f(h?[M,w]:[w,M]),p=(M,w)=>{let A=Math.ceil(Math.hypot(w[0]-M[0],w[1]-M[1])/.05);for(let v=1;v<A;v++)if(!f([M[0]+(w[0]-M[0])*v/A,M[1]+(w[1]-M[1])*v/A]))return!1;return!0},[b,g,m,x]=h?[s,a,l,c]:[l,c,s,a],_=[],y=!0;for(let M=b+e;M<=g-e+1e-6;M+=t){let w=null,A=null,v=.05;for(let P=m;P<=x+1e-6;P+=v)if(d(M,P)&&(A??=P),(!d(M,P)||P+v>x+1e-6)&&A!==null){let N=d(M,P)?P:P-v;(!w||N-A>w[1]-w[0])&&(w=[A,N]),A=null}if(!w||w[1]-w[0]<.2)continue;let T=P=>{let[N,D]=P?w:[w[1],w[0]];return[h?[M,N]:[N,M],h?[M,D]:[D,M]]},E=T(y),S=_[_.length-1];if(S&&n.length&&!p(S,E[0])){let P=T(!y);if(!p(S,P[0]))continue;E=P,y=!y}_.push(E[0],E[1]),y=!y}return _}function wd(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let o=r/e*Math.PI*2;return[i[0]+Math.cos(o)*t,i[1]+Math.sin(o)*t]})}var Md=i=>Math.atan2(Math.sin(i),Math.cos(i));function hx(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],o=n[1]-i.pos[1],s=Math.hypot(r,o);if(s<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Md(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),cx*e),!0)}let a=Math.atan2(r,o),l=Md(a-i.heading);if(i.heading=Md(i.heading+Math.sign(l)*Math.min(Math.abs(l),cx*e)),Math.abs(l)<.35){let c=Math.min(s,NA*e);i.pos=[i.pos[0]+r/s*c,i.pos[1]+o/s*c]}return!0}function fx(i,t,e,n=200){return t?e>=3e4?null:Math.max(i,n):i}var UA=66,BA=250;function dx(i,t){return i?t>=3e4?BA:UA:0}function px(i,t,e){let n=t??8,r=e||8;return n<=3||r<=4||/\bSilk\b/.test(i)?!0:/Android/.test(i)&&/\bKF[A-Z]{2,5}\b/.test(i)}function Pu(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function mx(i,t){return!(t>0)||!(i>0)?.9:Math.min(3,Math.max(.9,40*i/t))}var zA=Math.PI/180;function Cu(i,t,e,n={x:0,y:0}){let r=Math.tan(t*zA/2),o=a=>Math.max(.1,1-2*a),s=Math.min(r*o(n.y),r*e*o(n.x));return i*Math.sqrt(1+s*s)/s}function Sd(i,t){if(!i)return!1;let e=(r,o,s)=>Math.abs(r-o)<=s,n=Math.max(1,i.radius)*.01;return e(t.radius,i.radius,n)&&e(t.theta,i.theta,.005)&&e(t.phi,i.phi,.005)&&e(t.target.x,i.target.x,n)&&e(t.target.y,i.target.y,n)&&e(t.target.z,i.target.z,n)}function gx(i,t,e,n){return Math.abs(Math.log(n/e))>=.02&&Sd(i,t)}function Td(i,t,e){return i*Math.max(1,Cu(1,t,e)/Cu(1,t,16/9))}var Un=null,bx={value:Au("day")},xx=new Map;function Ad(i,t=0){let e=new Qt,n=new De,r=le(i.type);if(r?.light)au(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Ed(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let o={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};su(e,n,new Qt,o,0,!0)}return{buf:e,lines:n}}function VA(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,o=xx.get(r);if(o)return o;e&&ta(e);let s=vx(Ad(i),t,new $(.9,.75,1.3),n);return(!nr(i.type)||le(i.type))&&xx.set(r,s),s}function GA(i,t=320,e=35,n=25,r=!1){let[o,s,a]=i.size,l=d0(Sf,i,()=>Ad({type:Sf,w:o,d:s,h:a})),c=e*Math.PI/180,h=Math.max(-80,Math.min(80,n))*Math.PI/180;return vx(l,t,new $(Math.sin(c)*Math.cos(h),Math.sin(h),Math.cos(c)*Math.cos(h)),1.3,r)}function vx({buf:i,lines:t},e,n,r,o=!1){Un??=new Fr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Un.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Un.setSize(e,e,!1),Un.setClearColor(0,0);let s=new ci,a=new At(i.geometry(),new Xt({vertexColors:!0,color:new K(r,r,r)})),l=new Ke(t.geometry(),new Je({vertexColors:!0,color:new K(r*1.8,r*1.8,r*1.8)}));o&&(Ge(a.material,bx),Ge(l.material,bx,!0)),s.add(a,l);let c=new _n().setFromObject(a),h=c.isEmpty()?new $:c.getCenter(new $),u=new Rn(-1,1,1,-1,.01,100);u.position.copy(h).add(n.clone().normalize().multiplyScalar(20)),u.lookAt(h),u.updateMatrixWorld();let f=.05;if(!c.isEmpty())for(let b of[c.min.x,c.max.x])for(let g of[c.min.y,c.max.y])for(let m of[c.min.z,c.max.z]){let x=new $(b,g,m).applyMatrix4(u.matrixWorldInverse);f=Math.max(f,Math.abs(x.x),Math.abs(x.y))}let d=f*1.12;u.left=-d,u.right=d,u.top=d,u.bottom=-d,u.updateProjectionMatrix(),Un.render(s,u);let p=Un.domElement.toDataURL("image/png");return a.geometry.dispose(),a.material.dispose(),l.geometry.dispose(),l.material.dispose(),p}function HA(i,t,e=160,n,r=1.25){let o=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,s=yx.get(o);if(s)return s;n&&ta(n);let{buf:a,lines:l}=Ad(i,t),c=new At(a.geometry(),new Xt({vertexColors:!0,color:new K(r,r,r)})),h=new Ke(l.geometry(),new Je({vertexColors:!0,color:new K(r*1.8,r*1.8,r*1.8)})),u=new _n().setFromObject(c);if(u.isEmpty())return null;let f=u.min.x,d=u.max.x,p=Math.max(0,u.min.y),b=u.max.y,g=Math.max(1,Math.min(1024,Math.round((d-f)*e))),m=Math.max(1,Math.min(1024,Math.round((b-p)*e)));Un??=new Fr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Un.setPixelRatio(1),Un.setSize(g,m,!1),Un.setClearColor(0,0);let x=new ci;x.add(c,h);let _=new Rn(f,d,b,p,.01,100);_.position.set(0,0,50),_.lookAt(0,0,0),_.updateProjectionMatrix(),Un.render(x,_);let y=Un.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose();let M={url:y,x0:f,x1:d,y0:p,y1:b};return(!nr(i.type)||le(i.type))&&yx.set(o,M),M}var yx=new Map;var WL={Group:Te,Mesh:At,MeshBasicMaterial:Xt,CanvasTexture:pn,Color:K,PlaneGeometry:Xn,BufferGeometry:Vt,Float32BufferAttribute:Lt,DoubleSide:ie},Mx={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},XA=[.22,.88,1],Lx=2.4,wx=Lx,$A=.22,Sx=.94,Tx=140,Ax=1.5;function YA(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[o,s]=e[r],[a,l]=e[(r+1)%e.length],c=a-o,h=l-s,u=c*c+h*h||1,f=Math.max(0,Math.min(1,((i-o)*c+(t-s)*h)/u));n=Math.min(n,Math.hypot(i-(o+c*f),t-(s+h*f)))}return n}var Rd=32,qA=500,Ex=160,KA=33,Rx=.028,ZA=.026,JA=.012,jA=.09,re=2767456,QA=2240847,tE=3096944,eE=1911110,nE=1,Px=new Set(["ceiling","downlight","spot","panel","pendant","fan","strip"]),Iu=450,Cx=125,iE=200,rE=.08,Ea={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],fan:[1.3,1.3,.45],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},oE=new K(1,.84,.5),sE=new K(1714765);function aE(){let i=navigator;return px(navigator.userAgent,i.deviceMemory,navigator.hardwareConcurrency)}var Pd=class{host;options;renderer;scene=new ci;camera=new rn(38,1,.1,400);controls;labels;root=new Te;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];patches=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";roofGeos=[];sunFx=new _u;sunPath=null;shadowSig="";arcSig="";spillNight="";compassLetters=["N","E","S","W"];flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;personAt=new Map;personLook="figure";figures=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;lastWake=performance.now();highlighted=new WeakMap;decorWas=!1;decorTimer;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;fans=new Map;fanMat=null;fanLast=0;fanTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;fitMargin={x:0,y:0};fitted=null;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};realism=new wu;tier=Vb(navigator.userAgent,Math.min(screen.width||0,screen.height||0),navigator.maxTouchPoints||0);sun=null;weather=null;rain=new Ke(new Vt,new Je({color:10471679,transparent:!0,opacity:.4,blending:Ee,depthWrite:!1}));snow=new Yi(new Vt,new Ri({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new At(new Tr(1,28),new Xt({color:16767370,transparent:!0,opacity:0,blending:Ee,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;roomGlow=new Set;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=cE(),this.blindTexture=hE(),this.haloTexture=pE(),this.ground=new At(new Xn(1,1),new Xt({transparent:!1,blending:Ee,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc,this.sunFx.group),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility);for(let n of["pointerdown","pointerup","wheel","keydown"])t.addEventListener(n,this.onInput,{capture:!0,passive:!0});typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(o=>o.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}get resting(){return this.decor(0)===null}wake(){let t=this.resting;this.lastWake=performance.now(),t&&this.invalidate()}animate(){if(!this.lowQuality)return this.invalidate();if(this.decorTimer||this.frame)return;let t=dx(!0,performance.now()-this.lastWake);this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},t)}decor(t,e){return fx(t,this.lowQuality,performance.now()-this.lastWake,e)}onInput=()=>this.wake();setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setFitMargin(t){this.fitMargin.x===t.x&&this.fitMargin.y===t.y||(this.fitMargin=t,Sd(this.fitted,this.controls.goal)&&this.fit(0))}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n,this.applyRealism();let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t,e){ta(t),e&&wf(e),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.lastWake=performance.now(),this.building=t,M0(t),wf(t.recipes),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.lastWake=performance.now(),this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyHouseLines(),this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.lastWake=performance.now(),this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(h=>Wc(h.floor).some(u=>u.id===t)),n=e?Wc(e.floor).find(h=>h.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let h=e.floor.elevation+e.ty,[u,f]=ir(n.points),d=r.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new $(d.x,d.y+h,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[o,s]=ir(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new $(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new $(o,e.floor.elevation+e.ty+.3,s),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.syncFans(t),this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let o=r.el;r.icon!==n.icon&&(r.icon=n.icon,o.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,o.querySelector(".fp3d-dev-text").textContent=n.text);let s=n.caption??"";r.caption!==s&&(r.caption=s,o.querySelector(".fp3d-dev-name").textContent=s);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,o.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,o.title=n.name,o.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,o.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,o.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(h=>Math.round(h*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?o.style.setProperty("--fp3d-glow",c):o.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])wa(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&wa(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(Zb(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=Kb(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Te;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let o=t.filter(c=>c.floorId===n.floor.id),s=.03;for(let c of o)if(c.playing)for(let h=0;h<3;h++){let u=new At(new Is(.92,1,48),new Xt({color:3662079,transparent:!0,opacity:0,blending:Ee,depthWrite:!1,side:ie}));u.rotation.x=-Math.PI/2,u.position.set(c.x,s+h*.002,c.z),u.userData={sound:!0,phase:h/3,level:c.level},u.frustumCulled=!1,r.add(u)}let a=[],l=new Set;for(let c of o)for(let h of c.members){let u=o.find(d=>d.id===h);if(!u||u===c)continue;let f=[c.id,u.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,s+.02,c.z,u.x,s+.02,u.z))}if(a.length){let c=new Vt;c.setAttribute("position",new Lt(a,3));let h=new Ke(c,new Je({color:3662079,transparent:!0,opacity:.45,blending:Ee,depthWrite:!1}));h.userData={soundLine:!0},r.add(h)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let o=(e*.45+r.userData.phase)%1,s=r.userData.level,a=.25+o*(.9+1.6*s);r.scale.set(a,a,1),r.material.opacity=(1-o)*(.25+.45*s)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let o=Aa(r),s=Pu(r.power),a=this.flowPhase.get(o);n.set(o,{speed:s,offset:a?e*(a.speed-s)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}setPatches(t){this.patches=t;for(let e of this.floors)this.buildPatches(e);this.invalidate()}buildPatches(t){let e=this.patches.filter(r=>r.floorId===t.floor.id&&r.points.length>=3&&r.opacity>0),n=JSON.stringify(e);if(n!==t.patchSig){t.patchSig=n;for(let r of[!1,!0]){let o=[],s=[];for(let c of e){if(!!c.glow!==r)continue;let h=Math.min(1,c.opacity);for(let u of bn(c.points))for(let f of u)o.push(c.points[f][0],c.y,c.points[f][1]),s.push(c.color[0],c.color[1],c.color[2],h)}let a=r?t.patchGlowMesh:t.patchMesh,l=new Vt;l.setAttribute("position",new Lt(o,3)),l.setAttribute("color",new Lt(s,4)),a.geometry.dispose(),a.geometry=l,a.visible=o.length>0}}}buildPipes(t){let e=this.pipes.filter(o=>o.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new Qt;for(let o of e)Ib(r,o);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersonLook(t){t!==this.personLook&&(this.personLook=t,this.setPersons(this.persons))}makeFigure(t){let e=s=>{let a=[],l=(f,d,p,b,g)=>{let m=Math.hypot(p-f,b-d)||1,x=-(b-d)/m*(g/2+s),_=(p-f)/m*(g/2+s);a.push(f+x,d+_,0,p+x,b+_,0,p-x,b-_,0,f+x,d+_,0,p-x,b-_,0,f-x,d-_,0)},h=.14+s;for(let f=0;f<18;f++){let d=f/18*Math.PI*2,p=(f+1)/18*Math.PI*2;a.push(0,1.47,0,Math.cos(d)*h,1.47+Math.sin(d)*h,0,Math.cos(p)*h,1.47+Math.sin(p)*h,0)}l(0,1.32,0,.8,.13),l(0,1.24,-.28,.9,.07),l(0,1.24,.28,.9,.07),l(-.02,.82,-.15,.02,.08),l(.02,.82,.15,.02,.08);let u=new Vt;return u.setAttribute("position",new Lt(a,3)),u},n=new At(e(0),new Xt({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:ie})),r=new At(e(.05),new Xt({color:t,transparent:!0,opacity:.22,blending:Ee,depthWrite:!1,side:ie}));n.renderOrder=6,r.renderOrder=5;let o=new Te;return o.add(r,n),o.visible=!1,o}dropFigure(t){let e=this.figures.get(t);if(e){this.scene.remove(e);for(let n of e.children)n.geometry.dispose(),n.material.dispose();this.figures.delete(t)}}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(!r){r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id;let a=n.id;r.addEventListener("pointerdown",l=>l.stopPropagation()),r.addEventListener("click",l=>{l.stopPropagation();let c=this.persons.find(f=>f.id===a);if(!c?.entity)return;let h=l.currentTarget.getBoundingClientRect(),u=this.host.getBoundingClientRect();this.options.onDeviceHold?.(c.entity,h.left+h.width/2-u.left,h.top+h.height/2-u.top)}),this.personPins.set(n.id,r),this.labels.append(r)}r.title=n.name,r.setAttribute("aria-label",n.name),r.style.setProperty("--fp3d-pc",n.color??"#ff5fd2");let o=this.personLook==="figure"&&!!n.entity&&!n.thing;r.classList.toggle("fp3d-person-figure",o);let s=this.figures.get(n.id);if(o&&(!s||s.userData.color!==(n.color??"#ff5fd2"))){this.dropFigure(n.id);let a=this.makeFigure(n.color??"#ff5fd2");a.userData.color=n.color??"#ff5fd2",this.figures.set(n.id,a),this.scene.add(a)}else!o&&s&&this.dropFigure(n.id);if(r.classList.toggle("fp3d-person-tap",!!n.entity),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials||r.dataset.tag!==(n.tag??"")){r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.dataset.tag=n.tag??"",r.replaceChildren();let a=document.createElement("span");if(a.className="fp3d-person-face",n.picture){let l=document.createElement("img");l.src=n.picture,l.alt="",l.addEventListener("error",()=>l.replaceWith(document.createTextNode(n.initials))),a.append(l)}else a.textContent=n.initials;if(r.append(a),n.tag){let l=document.createElement("span");l.className="fp3d-person-tag",l.textContent=n.tag,r.append(l)}}}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n),this.personAt.delete(n),this.dropFigure(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=jb(t),n=e?1:0;n===es.value&&(!e||ts.value.equals(new $(...e)))||(es.value=n,e&&ts.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=Au(t),Ng(t!=="neon"),this.building?.floors.some(o=>o.furniture.some(Wg))&&this.rebuild();let n=Sa(t),r=[...this.floors.map(o=>o.materials.lines),...this.roof?[this.roof.lines]:[]];for(let o of r)o.blending=n,o.needsUpdate=!0;this.placeGround(),this.realism.enable(this.scene,t==="realistic"),this.applyRealism();for(let o of this.floors)o.sunSig="-",this.buildSun(o);this.buildSunFx(),this.invalidate()}realPlan(){return this.theme==="realistic"?Gb(this.tier,this.lowQuality,this.building?.settings.sun_shadow!==!1):null}applyRealism(){this.realism.setPlan(this.renderer,this.realPlan()),this.updateRealism()}updateRealism(){if(!this.realism.active)return;let t=this.arcFrame(),e=this.building,n=e?Yr(e):null,r=n&&t?n.elevation+er(n,{x:t.x-t.r,z:t.z})-.03:-.23;this.realism.update(this.sun,this.weather,e?.settings.north??0,t?{x:t.x,y:r,z:t.z,r:Math.max(12,t.r*1.8)}:{x:0,y:r,z:0,r:15})}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let n of this.floors)this.buildSun(n);let e=this.nightFactor().toFixed(2);if(e!==this.spillNight){this.spillNight=e;for(let n of this.floors)this.buildSpill(n,this.lightSources(n))}this.placeSky(),this.buildSunFx(),this.updateRealism(),this.invalidate()}setSunPath(t,e){this.sunPath=t,e&&(this.compassLetters=e),this.buildSunFx(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.buildSunFx(),this.updateRealism(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new K(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new _s(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,o=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,o,!1),this.rain.visible=r>0,this.snow.visible=o>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let o=this.weatherBox,s=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let h=o.x0+Math.random()*(o.x1-o.x0),u=o.y0+Math.random()*(o.y1-o.y0),f=o.z0+Math.random()*(o.z1-o.z0);s.set([h,u,f],c*3),n&&s.set([h,u-.45,f],c*3+3)}t.geometry.dispose();let l=new Vt;l.setAttribute("position",new Lt(s,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,o=r.y1-r.y0,s=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let h=0;h<l.length;h+=6){let u=l[h+1]-c,f=l[h]+s*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u,l[h+3]=f-s*.05,l[h+4]=u-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let h=0;h<l.length;h+=3){let u=l[h+1]-(.9+.6*e.snow)*n,f=l[h]+(s+Math.sin(c+h)*.4)*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let o=(this.building?.settings.north??0)*te,s=(r?t.azimuth+180:t.azimuth)*te,a=Math.max(10,Math.abs(t.elevation))*te,{center:l,r:c}=this.skyFrame(),h=new $(Math.sin(o+s)*Math.cos(a),Math.sin(a),-Math.cos(o+s)*Math.cos(a));this.skyDisc.position.copy(l).addScaledVector(h,c),this.skyDisc.scale.setScalar(c*(r?.03:.04)),this.skyDisc.lookAt(l);let u=this.skyDisc.material;u.color.set(r?13621486:16767370),u.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}skyFrame(){let t=this.weatherBox;return{center:new $((t.x0+t.x1)/2,t.y0,(t.z0+t.z1)/2),r:Math.min(300,Math.max(80,this.houseRadius*5))}}buildSunFx(){let t=this.building,e=this.sun,n=!!t&&!!e&&t.settings.sun_shadow!==!1,r=(t?.settings.north??0)*te,o=this.weather?.cloud??0,s=n&&!this.lowQuality&&e.elevation>1&&o<.9&&!this.roomTint&&this.theme!=="realistic",a=s?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${r},${o.toFixed(1)},${this.theme},${this.roofGeos.length}`:"";a!==this.shadowSig&&(this.shadowSig=a,s?this.drawShadow(t,e,r,o):this.sunFx.hideShadow());let l=this.sunPath,c=n&&!!l&&l.points.length>1&&e.elevation>-3,h=c?this.arcFrame():null,u=c&&h?`${this.theme},${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${this.compassLetters.join("")},${l.points[0].t},${r},${h.x.toFixed(2)},${h.z.toFixed(2)},${h.y.toFixed(2)},${h.r.toFixed(2)},${o.toFixed(1)}`:"";if(u===this.arcSig)return;if(this.arcSig=u,!u||!h||!l||!e)return this.sunFx.hideArc();let f=(m,x,_=0)=>{let y=Math.max(0,x)*te,M=r+m*te;return[h.x+Math.sin(M)*Math.cos(y)*h.r,h.y+Math.sin(y)*h.r+_,h.z-Math.cos(M)*Math.cos(y)*h.r]},d=1-.7*o,p=Date.now(),b=m=>new Date(m).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),g=h.r*.03;this.sunFx.setArc({points:l.points.map(m=>({at:f(m.azimuth,m.elevation),t:m.t,elevation:m.elevation})),now:p,hours:l.points.filter(m=>m!==l.rise&&m!==l.set&&new Date(m.t).getMinutes()===0).map(m=>f(m.azimuth,m.elevation)),labels:[l.rise,l.set].flatMap(m=>m?[{text:b(m.t),at:f(m.azimuth,m.elevation,g*2.2),rising:m===l.rise}]:[]),sun:e.elevation>0?f(e.azimuth,e.elevation):null,ring:{center:[h.x,h.y,h.z],r:h.r,north:r,letters:this.compassLetters},size:g,fade:d,light:this.theme!=="neon"})}arcFrame(){let t=this.building,e=t?Yr(t):null,n=t?.floors.flatMap(h=>h.rooms.filter(u=>!u.outdoor).flatMap(u=>u.points))??[];if(!e||!n.length)return null;let r=n.map(h=>h[0]),o=n.map(h=>h[1]),[s,a,l,c]=[Math.min(...r),Math.max(...r),Math.min(...o),Math.max(...o)];return{x:(s+a)/2,z:(l+c)/2,y:e.elevation,r:Math.max(7,Math.hypot(a-s,c-l)*.62)}}nightFactor(){let t=this.sun;return t?Math.min(1,Math.max(0,-t.elevation/6)):0}buildSpill(t,e){let n=this.building,r=n?.settings.window_glow===!1?0:this.nightFactor(),o=n&&r>0?Yr(n):null,s=!!o&&Math.abs(t.floor.elevation-o.elevation)<.5,a=new Map;if(s)for(let u of e){let f=a.get(u.room)??[0,0,0,0];f[0]+=u.color[0]*u.level,f[1]+=u.color[1]*u.level,f[2]+=u.color[2]*u.level,f[3]+=u.level,a.set(u.room,f)}let l=[...t.openings.values()].map(u=>(u.cover??0).toFixed(1)).join(","),c=s&&a.size?`${r.toFixed(2)}|${[...a].map(([u,f])=>`${u}:${f.map(d=>d.toFixed(2)).join("/")}`).join(";")}|${l}`:"";if(c===t.spillSig)return;t.spillSig=c;let h=new Qt;if(c)for(let u of t.geo.openings){if(u.opening.type!=="window"||!u.exterior)continue;let f=t.floor.rooms.findIndex(P=>P.id===u.opening.room_id),d=f<0?void 0:a.get(ns(t.lightZones,f));if(!d||d[3]<.02)continue;let b=1-(t.openings.get(u.opening.id)?.cover??0),g=u.top-u.sill;if(b<.05||g<.1)continue;let m=Math.max(d[0],d[1],d[2],1e-6),x=.3*r*Math.min(1,d[3])*b*Math.min(1,g/1.2),_=new K(d[0]/m*x,d[1]/m*x,d[2]/m*x),y=[-u.toRoom[0],-u.toRoom[1]],M=Math.min(3.5,.8+1.1*u.top),w=.35*M,A=[u.start[0]+u.axis[0]*(u.width/2)+y[0]*(u.faceOut+M/2),u.start[1]+u.axis[1]*(u.width/2)+y[1]*(u.faceOut+M/2)],v=er(t.floor,{x:A[0],z:A[1]})+.014,T=(P,N)=>{let D=N/M,C=-w*D+P*(u.width+2*w*D);return[u.start[0]+u.axis[0]*C+y[0]*(u.faceOut+N),v,u.start[1]+u.axis[1]*C+y[1]*(u.faceOut+N)]},E=4,S=[[0,0],[.18,1],[.82,1],[1,0]];for(let P=0;P<E;P++){let N=M*P/E,D=M*(P+1)/E,C=(1-P/E)**2,R=(1-(P+1)/E)**2;for(let k=0;k+1<S.length;k++){let[L,O]=S[k],[B,V]=S[k+1],W=T(L,N),z=T(B,N),q=T(B,D),j=T(L,D),ot=_.clone().multiplyScalar(C*O),H=_.clone().multiplyScalar(C*V),X=_.clone().multiplyScalar(R*V),tt=_.clone().multiplyScalar(R*O);h.tri(W,z,q,ot,H,X),h.tri(W,q,j,ot,X,tt)}}}t.spillMesh.geometry.dispose(),t.spillMesh.geometry=h.geometry(),t.spillMesh.visible=h.count>0}drawShadow(t,e,n,r){let o=Yr(t),s=o?.rooms.filter(g=>!g.outdoor&&g.points.length>=3)??[];if(!o||!s.length)return this.sunFx.hideShadow();let a=s.flatMap(g=>g.points.map(m=>m[0])),l=s.flatMap(g=>g.points.map(m=>m[1])),c=o.elevation+er(o,{x:Math.min(...a)-1,z:(Math.min(...l)+Math.max(...l))/2}),h=e.azimuth*te,u=Xb(t,this.roofGeos,[Math.sin(n+h),-Math.cos(n+h)],e.elevation,c),f=$b(u);if(!f)return this.sunFx.hideShadow();let d=o.elevation-c<=.35?o.elevation+.012:c+.012,p=t.floors.filter(g=>Math.abs(g.elevation-o.elevation)<.5).flatMap(g=>g.rooms.filter(m=>!m.outdoor&&m.points.length>=3).map(m=>m.points)),b=(this.theme==="neon"?.6:.34)*Math.min(1,e.elevation/8)*(1-.8*r);this.sunFx.setShadow(this.renderer,u,f,p,d,b,this.theme==="neon"?394264:1713203)}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e){for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n);this.buildSunFx()}}setRoomGlow(t){t.size===this.roomGlow.size&&[...t].every(e=>this.roomGlow.has(e))||(this.roomGlow=new Set(t),this.applyHighlight())}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,this.realism.touch(),e)for(let n of this.floors){let r=!1;for(let[o,s]of n.openings){let a=t.get(o)??Ta,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===s.open&&l.open2===(s.open2??0)&&l.tilt===s.tilt&&l.tilt2===(s.tilt2??0)&&l.cover===s.cover&&!!l.sensed==!!s.sensed&&!!l.unlocked==!!s.unlocked||(n.openings.set(o,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let o=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};o.tl=r.left?1:0,o.tr=r.right?1:0,this.fridges.set(n,o)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}setRackLeds(t){this.rackLeds=t;let e=!1;for(let n of this.floors)this.buildRackLeds(n)&&(e=!0);e&&this.invalidate()}rackLeds=new Map;buildRackLeds(t){let e=t.floor.furniture.filter(h=>h.rack?.slots?.length);if(!e.length&&!t.rackLedRanges.size)return!1;let n=e.map(h=>({f:h,ids:h.rack.slots.filter(u=>this.rackLeds.has(`${h.id}/${u.id}`)).map(u=>u.id)})).filter(h=>h.ids.length),r=n.map(({f:h,ids:u})=>`${h.id}:${h.type}:${h.x},${h.z},${h.rotation},${h.w},${h.d},${h.h},${h.mount_y??""},${h.mirror?1:0}:${u.join(",")}:${JSON.stringify(h.rack.slots)}`).join(";"),o=!1;if(r!==t.rackLedShape){o=!0,t.rackLedShape=r,t.rackLedColor="";let h=new Qt,u=new Map;for(let{f,ids:d}of n)for(let[p,b]of Hg(h,f,tn(t.floor,f),d))u.set(`${f.id}/${p}`,b);t.rackLedRanges=u,t.rackLedMesh.geometry.dispose(),t.rackLedMesh.geometry=h.geometry(),t.rackLedMesh.visible=h.count>0}if(!t.rackLedRanges.size)return o;let s=[...t.rackLedRanges.keys()],a=s.map(h=>this.rackLeds.get(h)??"").join(",");if(a===t.rackLedColor)return o;t.rackLedColor=a;let l=t.rackLedMesh.geometry.getAttribute("color"),c=l.array;for(let h of s){let u=this.rackLeds.get(h),f=new K(u?Ca[u]:"#808080"),d=t.rackLedRanges.get(h);for(let p=d.start*3;p<d.end*3;p++)c.set([f.r,f.g,f.b],p*3)}return l.needsUpdate=!0,!0}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let o=this.awnings.get(n)??{cur:r.out??0,to:r.out??0,speed:0};r.out===null?(o.to=r.moving>0?1:0,o.speed=1/Math.max(2,r.time)):(o.to=r.out,o.speed=0),this.awnings.set(n,o)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)e.floor.furniture.some(n=>t.has(n.id))&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,o]of this.awnings){let s=o.to-o.cur;if(Math.abs(s)<.002){s!==0&&(o.cur=o.to,e.add(r));continue}o.cur=o.speed>0?o.cur+Math.sign(s)*Math.min(Math.abs(s),o.speed*t/1e3):o.cur+s*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/Ex),n=new Set;for(let[r,o]of this.fridges)for(let[s,a]of[["l","tl"],["r","tr"]]){let l=o[a]-o[s];if(Math.abs(l)<.004){l!==0&&(o[s]=o[a],n.add(r));continue}o[s]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(o=>n.has(o.id))&&this.buildFridges(r);return!0}buildFridges(t){let e=new Qt;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Vg(e,n,tn(t.floor,n),r?.l??0,r?.r??0)}for(let n of t.floor.furniture)n.type==="awning"&&zg(e,n,tn(t.floor,n),this.awnings.get(n.id)?.cur??0);for(let n of t.floor.furniture){let r=zc(n.type),o=r?le(n.type):void 0;r&&o&&Yg(e,o,r,n,tn(t.floor,n),this.awnings.get(n.id)?.cur??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new xu(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*te,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.05,(e.tilt??(o?65:20))*te)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y);return{position:new $(e.x,a,e.z),direction:new $(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s)),fov:Math.min(e.fov??(o?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(o?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let o of[n.floorMesh,n.wallMesh])o.layers.enable(yu);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(yu),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){this.projections.dispose(),this.realism.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.fanTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.sunFx.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility);for(let t of["pointerdown","pointerup","wheel","keydown"])this.host.removeEventListener(t,this.onInput,{capture:!0});clearTimeout(this.decorTimer),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values()){t.led.dispose();for(let e of t.own)e.dispose()}this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose();for(let t of this.fans.values())t.mesh.geometry.dispose();this.fans.clear(),this.fanMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&aE();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new Fr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ce,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new gu(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=!!(this.floorId&&this.options.onRoomDoubleTap),r=n||this.options.onDeviceDoubleTap&&!this.furnish?this.pick(t,e):null;r&&"entity"in r&&!this.furnish&&this.options.onDeviceDoubleTap?.(r.entity,t,e)||(n&&r&&!("entity"in r)&&r.roomId?this.options.onRoomDoubleTap(r.floorId,r.roomId):this.options.onBack?.())}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1,n=this.camera.aspect;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),gx(this.fitted,this.controls.goal,n,this.camera.aspect)&&this.fit(0),this.invalidate()}retired=[];disposeRetired(){if(this.retired.length){for(let t of this.retired)t.dispose();this.retired=[]}}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.fans.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))this.retired.push(e);this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let o=document.createElement("span");o.className="fp3d-dev-watt";let s=document.createElement("span");s.className="fp3d-dev-name",e.append(n,r,o,s);let a,l=!1;e.addEventListener("pointerdown",h=>{if(this.furnish){this.pendingDevice=t;return}h.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)},qA)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",h=>h.preventDefault()),e.addEventListener("click",h=>{if(h.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}),e.addEventListener("keydown",h=>{if(h.key==="Enter"&&h.shiftKey||h.key==="ContextMenu"){h.preventDefault();let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=tx(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=Ix(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=ns(r,a.ra),a.rb=ns(r,a.rb)}t.lightSurface=n;let o=new Vt;o.setAttribute("position",new Lt(n.pos,3)),o.setAttribute("color",new Lt(new Float32Array(n.pos.length),3)),o.setAttribute("fold",new Lt(n.fold,1));let s=new wr(new Uint32Array(n.pos.length/3),1);s.setUsage(Yh),o.setIndex(s),o.setDrawRange(0,0),o.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=o,t.glowSig="",this.buildGlow(t)}packLightAt(t){if(t.lamp!=="wall"||!t.pack)return null;let e=le(t.pack);if(!e)return null;let[n,r,o]=t.size??Ea.wall;return qg(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:o,mirror:t.mirror},t.base??0)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let o=n.top??t.floor.height,s=vd(t.floor,n.x,n.z),a=ns(t.lightZones,s),[l,,c]=n.size??(n.lamp?Ea[n.lamp]:[.3,.3,.3]),h=n.base??0,u={ceiling:[o-.12,"ceiling"],downlight:[o-.03,"spot"],spot:[o-c,"spot"],panel:[o-.05,"ceiling"],pendant:[Math.max(.5,o-c),"pendant"],fan:[Math.max(.5,o-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<nE?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,d]=n.lamp?u[n.lamp]:[n.y,"omni"],p=n.lightY??f,b=r.color;if(n.lamp==="strip"){let g=(n.rotation??0)*te,m=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:h+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a});else{let _=(n.rise??0)*te;e.push({x:n.x+Math.cos(g)*l*x*Math.cos(_),y:p+Math.sin(_)*l*x,z:n.z+Math.sin(g)*l*x*Math.cos(_),color:b,level:r.level*.55,kind:m||_?"omni":d,room:a})}}else{let g=this.packLightAt(n);e.push({x:g?g[0]:n.x,y:g?g[1]:p,z:g?g[2]:n.z,color:b,level:r.level,kind:d,room:a})}}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(o=>o!==t&&Math.abs(o.floor.elevation-e)<.8&&o.geo.holes.length);if(!n)return[];let r=[];for(let o of n.geo.holes){if(o.length<3)continue;let s=0,a=[0,0,0];for(let h of this.devices){if(h.floorId!==n.floor.id)continue;let u=this.glowOf(h);if(!u)continue;let f=Jt([h.x,h.z],o)?0:YA(h.x,h.z,o);if(f>Ax)continue;let d=u.level*(1-f/Ax);for(let p=0;p<3;p++)a[p]+=u.color[p]*d;s+=d}if(s<.02)continue;let[l,c]=ir(o);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/s,a[1]/s,a[2]/s],level:Math.min(1,s)*.6,kind:"ceiling",room:ns(t.lightZones,vd(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t);this.buildSpill(t,n);let r=e.doors.map(u=>{let f=t.geo.openings.find(p=>p.opening.id===u.id);if(f&&pi(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),o=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(o===t.glowSig)return;t.glowSig=o;let s=t.glowMesh.geometry,a=s.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,s.setDrawRange(0,0);return}let l=nx(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==u)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=s.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}s.index.needsUpdate=!0,s.setDrawRange(0,h),t.glowMesh.visible=h>0}makeMaterials(t){return{floor:Ge(new Xt({vertexColors:!0}),this.themeUniform),pattern:uE(this.patternTexture),wall:Ge(Nn(new Xt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:Nn(new Xt({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new Xt({vertexColors:!0,blending:zs,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Ge(Nn(new Je({vertexColors:!0,transparent:!0,blending:Sa(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:Nn(new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:Ge(Nn(new Xt({vertexColors:!0,side:ie}),t),this.themeUniform),glass:Nn(new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:ie}),t),blinds:Ge(Nn(new Xt({map:this.blindTexture,vertexColors:!0,side:ie}),t),this.themeUniform),water:Ge(new Xt({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:ie}),this.themeUniform),flow:dE(this.flowTime),pipeLine:fE(this.flowTime),patch:new Xt({vertexColors:!0,transparent:!0,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),patchGlow:new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),solarLive:xd(this.flowTime),lamps:Ge(new Xt({vertexColors:!0}),this.themeUniform),halos:new Ri({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1}),cones:new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:ie}),screens:new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:ie}),earth:Ge(new Xt({vertexColors:!0}),this.themeUniform),earthWell:Ge(new Xt({vertexColors:!0,side:ie}),this.themeUniform),earthLines:Ge(new Je({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(o=>[o.floor.id,{y:o.y,o:o.o}])),e=new Map(this.floors.map(o=>[o.floor.id,o.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((o,s)=>o.elevation-s.elevation);for(let o of n.floors){let s=n.settings.roof?.solar??[],a=Yr(n)?.id===o.id?s.filter(yt=>yt.face===od).map(yt=>({field:yt,face:tb(n,yt)})):[],l=s.filter(yt=>yt.face.startsWith(`wall:${o.id}:`));if(l.length){let yt=new Map(Qg(n,o.id).map(vt=>[vt.key,vt]));for(let vt of l){let qt=yt.get(vt.face);qt&&a.push({field:vt,face:qt})}}let h=kf(n).some(yt=>G0(yt,o.elevation+o.height)&&Nf(yt,o.elevation))?(yt,vt)=>{let qt=H0(n,yt,vt,o.elevation);return qt===null?null:qt-o.elevation}:void 0,u=db(md(o,this.parked),n.settings.wall_exterior,n.settings.wall_interior,pb(n.floors,o),a,h),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),p=new Te,b=new At(u.floor,d.floor),g=new At(u.shadow,d.shadow);g.renderOrder=1;let m=new At(u.floor,d.pattern);m.renderOrder=2;let x=new At(new Vt,d.glow);x.renderOrder=3,x.visible=!1;let _=new At(new Vt,d.frames),y=new At(new Vt,d.blinds),M=new At(new Vt,d.glass);M.renderOrder=4;let w=new At(new Vt,d.lamps);w.visible=!1;let A=new At(new Vt,d.cones);A.visible=!1,A.renderOrder=3;let v=new At(new Vt,d.cones);v.visible=!1,v.renderOrder=3;let T=new Yi(new Vt,d.halos);T.visible=!1,T.renderOrder=7;let E=new At(new Vt,d.cones);E.visible=!1,E.renderOrder=7;let S=new At(new Vt,d.cones);S.visible=!1,S.renderOrder=7;let P=new At(new Vt,d.lamps);P.visible=!1;let N=new At(new Vt,d.lamps);N.visible=!1;let D=new At(new Vt,d.lamps);D.visible=!1;let C=new At(new Vt,d.patch);C.visible=!1,C.renderOrder=3;let R=new At(new Vt,d.patchGlow);R.visible=!1,R.renderOrder=3;let k=new At(new Vt,d.screens);k.visible=!1,k.renderOrder=5;let L=new At(new Vt,d.flow);L.renderOrder=5,L.frustumCulled=!1;let O=new At(new Vt,d.pipeLine),B=new At(new Vt,d.pipeLine),V=new At(new Vt,d.pipeLine);for(let yt of[O,B,V])yt.renderOrder=4,yt.frustumCulled=!1,yt.visible=!1;let W=bd(a,o.elevation),z=W?new At(W.geometry,d.solarLive):null;z&&(z.renderOrder=6,wa(W,this.solarLevels));for(let yt of[_,y,M])yt.frustumCulled=!1;let q=new At(u.walls,d.glassWall),j=new At(u.walls,d.wall);q.renderOrder=6;let ot=new At(u.water,d.water);ot.renderOrder=4;let H=Math.min(...n.floors.filter(yt=>yt.rooms.length).map(yt=>yt.elevation)),X=bb(n,o,u.openings,o.elevation===H),tt=X?[new At(X.earth.geometry(),d.earth),new At(X.wells.geometry(),d.earthWell),new Ke(X.lines.geometry(),d.earthLines)]:[];for(let yt of tt)yt.userData.earth=!0;p.add(b,g,m,x,j,ot,new Ke(u.lines,d.lines),_,y,M,L,O,B,V,w,A,v,T,E,S,P,N,D,C,R,k,q,...z?[z]:[],...tt),this.root.add(p);let et=document.createElement("button");et.className="fp3d-pin fp3d-pin-floor",et.dataset.floor=o.id;let nt=document.createElement("b");nt.textContent=o.name||"\u2013";let ut=document.createElement("span");ut.textContent=this.floorInfo.get(o.id)??this.options.floorInfo?.(o)??"",et.append(nt,ut),et.addEventListener("click",()=>this.options.onFloorTap?.(o.id)),this.labels.append(et);let bt=t.get(o.id),ht=[],gt=null;for(let yt of Wc(o)){let vt=document.createElement("button");vt.className="fp3d-pin",vt.dataset.room=yt.id,vt.dataset.floor=o.id,this.fillRoomPin(vt,yt.name,this.roomInfo.get(yt.id)),vt.addEventListener("click",()=>this.options.onRoomTap?.(o.id,yt.id)),this.labels.append(vt);let[qt,xe]=ir(yt.points);if(ht.push({pin:vt,room:yt,cx:qt,cz:xe}),!yt.outdoor)for(let[pe,me]of yt.points)gt??={x0:pe,x1:pe,z0:me,z1:me},gt.x0=Math.min(gt.x0,pe),gt.x1=Math.max(gt.x1,pe),gt.z0=Math.min(gt.z0,me),gt.z1=Math.max(gt.z1,me)}this.floors.push({floor:o,rank:r.indexOf(o),group:p,geo:u,floorMesh:b,shadowMesh:g,patternMesh:m,glowMesh:x,lightSurface:null,lightZones:null,framesMesh:_,glassMesh:M,blindsMesh:y,flowMesh:L,pipeLineMesh:O,pipeHouseMesh:B,pipeFloorMesh:V,pipeLineSig:"",solarMesh:z,solarLive:W,lampMesh:w,sunMesh:A,sunSig:"",spillMesh:v,spillSig:"",haloMesh:T,coneMesh:E,trailMesh:S,fridgeMesh:P,rackLedMesh:N,rackLedShape:"",rackLedColor:"",rackLedRanges:new Map,pipeMesh:D,pipeSig:"",patchMesh:C,patchGlowMesh:R,patchSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:j,screenMesh:k,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:gt,roomPins:ht,labelSize:null,materials:d,mask:f,openings:new Map,y:bt?.y??0,o:bt?.o??1,ty:0,to:1,appliedO:-1,lightAt:0,label:et})}this.floorMap=new Map(this.floors.map(o=>[o.floor.id,o]));for(let o of this.floors)this.buildFridges(o),this.buildRackLeds(o),this.buildPipes(o),this.buildPatches(o);this.labelsDirty=!0,this.floorId&&!n.floors.some(o=>o.id===this.floorId)&&(this.floorId=null);for(let o of this.floors){this.buildLamps(o),this.buildScreens(o);let s=e.get(o.floor.id);for(let a of o.geo.openings)o.openings.set(a.opening.id,s?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Ta);this.buildOpenings(o),this.buildFlows(o),o.poolGroup=void 0,this.buildPoolWater(o),this.buildLightSurface(o),this.buildSun(o)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.buildSunFx(),this.applyRealism(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(m=>m.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(m=>m.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?cb(this.building,this.roofWindows):[];if(this.roofGeos=t,this.shadowSig="",!t.length)return;let e=new Map(qr(this.building).map(m=>[m.key,m])),n=this.building.settings.roof?.solar??[],r=xd(this.flowTime),o=[],s=new Te,a=Ge(new Xt({vertexColors:!0,transparent:!0,side:ie}),this.themeUniform),l=Ge(new Je({vertexColors:!0,transparent:!0,blending:Sa(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Ge(new Xt({vertexColors:!0,transparent:!0,side:ie,depthWrite:!1}),this.themeUniform),h=new Te,u=Ge(new Xt({vertexColors:!0,side:ie}),this.themeUniform),f=Ge(new Xt({vertexColors:!0,transparent:!0,opacity:.35,side:ie,depthWrite:!1}),this.themeUniform),d=Ge(new Xt({vertexColors:!0,transparent:!0,opacity:.35,side:ie,depthWrite:!1}),this.themeUniform),p=Ge(new Je({vertexColors:!0,transparent:!0,blending:Sa(this.theme),depthWrite:!1}),this.themeUniform,!0),b=[],g=t.map(m=>{let x=new Te;x.add(new At(m.solid.geometry(),a),new Ke(m.lines.geometry(),l)),m.glass.count&&x.add(new At(m.glass.geometry(),c));let _=n.flatMap(w=>{let A=e.get(w.face);return A&&(A.section?m.sections?.includes(A.section):m===t[0])?[{face:A,field:w}]:[]}),y=bd(_,m.floor.elevation+m.base);if(y){let w=new At(y.geometry,r);w.renderOrder=9,x.add(w),o.push(y),wa(y,this.solarLevels)}m.winRoof?.solid.count&&x.add(new At(m.winRoof.solid.geometry(),u),new Ke(m.winRoof.lines.geometry(),p)),m.winRoof?.glass.count&&x.add(new At(m.winRoof.glass.geometry(),d)),x.renderOrder=8,s.add(x);let M=null;(m.win?.solid.count||m.win?.glass.count)&&(M=new Te,M.add(new At(m.win.solid.geometry(),u),new Ke(m.win.lines.geometry(),p)),m.win.glass.count&&M.add(new At(m.win.glass.geometry(),f)),h.add(M));for(let[w,A]of m.winBelow??[]){if(!A.solid.count&&!A.glass.count)continue;let v=new Te;v.add(new At(A.solid.geometry(),u),new Ke(A.lines.geometry(),p)),A.glass.count&&v.add(new At(A.glass.geometry(),f)),h.add(v),b.push({floorId:w,win:v})}return{group:x,floorId:m.floor.id,rideId:K0(this.building,m.floor,m.sections??[]),base:m.base,lift:m.lift!==!1,win:M}});s.renderOrder=8,this.scene.add(s),this.scene.add(h),this.roof={group:s,parts:g,below:b,solid:a,lines:l,glass:c,live:r,lives:o,wins:h,winSolid:u,winLines:p,winGlass:f,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/Sx)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),o=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?Sx*n:0,s=1-Math.exp(-t/Tx),a=this.roofO;this.roofO+=(o-this.roofO)*s,Math.abs(o-this.roofO)<.004&&(this.roofO=o),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let h=this.floorMap.get(l.rideId)??c,u=h.ty>0?Math.min(1,h.y/h.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+h.y+l.base+this.roofLift()+(l.lift?u*wx:0),l.win&&(l.win.position.y=c.floor.elevation+h.y+l.base+(l.lift?u*wx:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==o}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.theme!=="realistic"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,o=1;e?n.rank>e.rank?(r=5+n.rank,o=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,o=this.floorStack==="single"?0:$A)):r=this.explode?n.rank*Lx:0,n.ty=r,n.to=o;let a=e===n?an:hi;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=o),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let o=r.mesh.material;o.transparent=t.o<.999,o.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Tx);for(let r of this.floors){let o=r.ty-r.y,s=r.to-r.o;if(Math.abs(o)<.004&&Math.abs(s)<.004){(o!==0||s!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=o*n,r.o+=s*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Ex);for(let r of this.floors){let o=!1,s=!1;for(let[a,l]of r.openings){let c=this.openingTargets.get(a)??Ta,h=(d,p)=>(d??null)===(p??null)||typeof d=="number"&&typeof p=="number"&&Math.abs(d-p)<.003;if(h(c.open,l.open)&&h(c.open2??0,l.open2??0)&&h(c.tilt,l.tilt)&&h(c.tilt2??0,l.tilt2??0)&&h(c.cover,l.cover)&&!!c.sensed==!!l.sensed&&!!c.unlocked==!!l.unlocked)continue;let u={...l,open2:l.open2??0,tilt2:l.tilt2??0,sensed:c.sensed,unlocked:c.unlocked},f=!1;for(let d of["open","open2","tilt","tilt2"]){let p=c[d]??0,b=l[d]??0,g=p-b;Math.abs(g)<.003?u[d]=p:(u[d]=b+g*n,f=!0)}if(c.cover===null||l.cover===null)u.cover=c.cover;else{let d=c.cover-l.cover;Math.abs(d)<.003?u.cover=c.cover:(u.cover=l.cover+d*n,f=!0)}(u.open!==l.open||u.open2!==(l.open2??0)||u.tilt!==l.tilt||u.tilt2!==(l.tilt2??0)||u.cover!==l.cover||!!u.sensed!=!!l.sensed||!!u.unlocked!=!!l.unlocked)&&(r.openings.set(a,u),o=!0),e||=f,s||=f}if(o){this.buildOpenings(r);let a=performance.now();(!this.lowQuality||!s||a-r.lightAt>=iE)&&(r.lightAt=a,this.buildGlow(r),this.buildSun(r))}}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new K(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*rE+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=e)return 0;let f=u-e,d=f>Iu?.5+.5*Math.sin(f/140):f/Iu;return Math.round(d*10)/10},r=this.devices.filter(h=>h.floorId===t.floor.id&&(h.lamp||h.model)),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(h=>`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${h.rise??0},${h.size?.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0}${h.colors?JSON.stringify(h.colors)+this.theme:""}${h.materials?JSON.stringify(h.materials):""}`).join(";"),s=r.map(h=>this.glowOf(h)),a=r.map((h,u)=>`${n(h.id)},${s[u]?`${s[u].level.toFixed(3)},${s[u].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=o,t.lampColorSig="";let h=new Qt,u=[],f=[],d=new Map,p=t.floor.height;for(let b of r){let g=b.lamp==="strip"?(b.base??p)>Math.min(t.floor.cut_height,p):b.lamp?Px.has(b.lamp)&&(b.top??p)>Math.min(t.floor.cut_height,p):b.model==="camera_ceiling";if(!b.lamp&&!b.model||g&&this.wallMode==="cut")continue;let m=h.count,x=b.pack?le(b.pack):void 0,[_,y,M]=b.size??[.3,.3,.3];b.model?b.ownLook||Xg(h,b.model,b.x,b.model==="camera_ceiling"?p:b.y,b.z,b.rotation??0):x?au(h,x,{x:b.x,z:b.z,rotation:b.rotation??0,w:_,d:y,h:M,mirror:b.mirror,colors:b.colors,materials:b.materials},b.base??0,65280):Ed(h,{...b,lamp:b.lamp},b.top??p,65280,b.lamp!=="fan"),d.set(b.furnitureId??b.id,{start:m,end:h.count}),b.pickable!==!1&&u.push({id:b.id,start:m,end:h.count}),b.furnitureId&&f.push({id:b.furnitureId,start:m,end:h.count})}t.lampTris=u,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=o0(h.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=h.geometry(),t.lampMesh.visible=h.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((h,u)=>{let f=t.lampRanges.get(h.furnitureId??h.id);if(!f)return;let d=s[u],p=d?.55+.45*d.level:0,b=d?new K(...d.color.map(x=>Math.min(1,x*p))):new K(eE),g=n(h.id);g>0&&b.lerp(new K(1,1,1),.7*g);let m=new K(b.getHex());s0(c,t.lampShade,f,[m.r,m.g,m.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1||this.realPlan()?null:this.sun,n=(this.building?.settings.north??0)*te,r=this.weather?.cloud??0,o=Ix(t.floor,t.geo.openRooms),s=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${o.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(s===t.sunSig)return;t.sunSig=s;let a=new Qt;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*te,h=e.azimuth*te,u=[Math.sin(n+h),-Math.cos(n+h)],f=1/Math.tan(c);for(let d of t.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let p=[-d.toRoom[0],-d.toRoom[1]],b=p[0]*u[0]+p[1]*u[1];if(b<.05)continue;let g=t.openings.get(d.opening.id),m=d.top-(g?.cover??0)*(d.top-d.sill);if(m-d.sill<.05)continue;let x=(S,P)=>{let N=Math.min(7,P*f);return[d.start[0]+d.axis[0]*S+d.toRoom[0]*d.faceRoom-u[0]*N,.02,d.start[1]+d.axis[1]*S+d.toRoom[1]*d.faceRoom-u[1]*N]},_=.14*l*Math.min(1,b*1.5),y=new K(1*_,.82*_,.55*_),M=y.clone().multiplyScalar(.45),w=t.floor.rooms.findIndex(S=>S.id===d.opening.room_id);if(w<0||t.floor.rooms[w].points.length<3)continue;let A=o[w],v=t.floor.rooms.filter((S,P)=>o[P]===A&&S.points.length>=3).map(S=>S.points),T=Math.max(1,Math.ceil(Math.min(7,m*f)/.25)),E=Math.max(1,Math.ceil(d.width/.3));for(let S=0;S<T;S++){let P=d.sill+(m-d.sill)*S/T,N=d.sill+(m-d.sill)*(S+1)/T,D=S/T,C=(S+1)/T,R=y.clone().lerp(M,D),k=y.clone().lerp(M,C);for(let L=0;L<E;L++){let O=d.width*L/E,B=d.width*(L+1)/E,V=x((O+B)/2,(P+N)/2);if(!v.some(ot=>Jt([V[0],V[2]],ot)))continue;let W=x(O,P),z=x(B,P),q=x(B,N),j=x(O,N);a.tri(W,z,q,R,R,k),a.tri(W,q,j,R,k,k)}}}this.pushRoofSun(t,a,o,u,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,o,s){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(qr(a).map(u=>[u.key,u])),h=[r[0]*Math.cos(o),Math.sin(o),r[1]*Math.cos(o)];for(let u of l){let f=c.get(u.face),d=hu(a,f,u);if(!f||!d||d.floor.id!==t.floor.id)continue;let p=f.n[0]*h[0]+f.n[1]*h[1]+f.n[2]*h[2],[b,g,m,x]=d.corners,_=Math.min(1,this.roofWindows.get(u.id)?.cover??0);if(_>.95)continue;let y=(D,C,R)=>[D[0]+(C[0]-D[0])*R,D[1]+(C[1]-D[1])*R,D[2]+(C[2]-D[2])*R],M=y(x,b,_),w=y(m,g,_),A=t.floor.rooms.findIndex(D=>D.id===d.roomId);if(A<0)continue;let v=t.floor.rooms.filter((D,C)=>n[C]===n[A]&&D.points.length>=3).map(D=>D.points),T=(D,C)=>{let R=(L,O)=>y(y(D[0],D[1],L),y(D[3],D[2],L),O);for(let L=0;L<6;L++)for(let O=0;O<6;O++){let B=R((L+.5)/6,(O+.5)/6);if(!v.some(j=>Jt([B[0],B[2]],j)))continue;let V=R(L/6,O/6),W=R((L+1)/6,O/6),z=R((L+1)/6,(O+1)/6),q=R(L/6,(O+1)/6);e.tri(V,W,z,C,C,C),e.tri(V,z,q,C,C,C)}},E=D=>[D[0],.019,D[2]],S=.06*s;if(T([E(b),E(g),E(w),E(M)],new K(.75*S,.85*S,1*S)),p<.05)continue;let P=D=>{let C=Math.min(7,(D[1]-t.floor.elevation)/Math.tan(o));return[D[0]-r[0]*C,.02,D[2]-r[1]*C]},N=.16*s*Math.min(1,p*1.5);T([P(b),P(g),P(w),P(M)],new K(1*N,.84*N,.6*N))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],o=new Qt,s=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let x=(l.rotation??0)*te,_=[-Math.sin(x),Math.cos(x)],y=l.model==="camera_ceiling",M=l.reach??(y?3:4.5),w=(l.fov??(y?360:90))*te/2,A=l.motion?new K(.9,.12,.16):new K(.04,.22,.28),v=new K(0,0,0),T=Math.max(4,Math.round(w/.15)),E=.015,S=t.geo.walls2d,P=O=>{let B=O.b[0]-O.a[0],V=O.b[1]-O.a[1],W=B*B+V*V||1,z=Math.max(0,Math.min(1,((l.x-O.a[0])*B+(l.z-O.a[1])*V)/W));return Math.hypot(l.x-(O.a[0]+B*z),l.z-(O.a[1]+V*z))},N=null;for(let O of S)P(O)<.45&&(!N||P(O)<P(N))&&(N=O);let D=O=>{let B=_[0]*Math.cos(O)-_[1]*Math.sin(O),V=_[1]*Math.cos(O)+_[0]*Math.sin(O),W=M;for(let z of S){let q=z.b[0]-z.a[0],j=z.b[1]-z.a[1],ot=B*j-V*q;if(Math.abs(ot)<1e-9)continue;let H=((z.a[0]-l.x)*j-(z.a[1]-l.z)*q)/ot,X=((z.a[0]-l.x)*V-(z.a[1]-l.z)*B)/ot;z===N&&H<=.45||H>.02&&H<W&&X>=0&&X<=1&&(W=H)}return W},C=(O,B)=>E+er(t.floor,{x:O,z:B}),R=O=>{let B=D(O),V=l.x+(_[0]*Math.cos(O)-_[1]*Math.sin(O))*B,W=l.z+(_[1]*Math.cos(O)+_[0]*Math.sin(O))*B;return[V,C(V,W),W]},k=[l.x,Math.max(C(l.x,l.z),y?-1/0:C(l.x+_[0]*.3,l.z+_[1]*.3)),l.z],L=o.count;for(let O=0;O<T;O++)o.tri(k,R(-w+2*w*(O+1)/T),R(-w+2*w*O/T),A,v,v);s.push({id:l.id,start:L,end:o.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Px.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let h=l.top??e,[u,f,d]=l.size??Ea[l.lamp],p=l.base??0,b=(l.rotation??0)*te,g={ceiling:h-.07,downlight:h-.03,spot:h-d,panel:h-.03,pendant:Math.max(.4,h-d)+.08,fan:Math.max(.5,h-Math.max(.25,d))+.02,floor:p+d-.15,uplight:p+d,table:p+d-.09,wall:p+d/2,strip:p+Math.max(.02,d)-.01,bollard:p+d-.08,garden:p+d-.03}[l.lamp],m=(x,_,y=1)=>{n.push(x,g,_),r.push(...c.color.map(M=>M*c.level*.7*y))};if(l.lamp==="strip")for(let x of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,p+u*(.5+x),l.z),r.push(...c.color.map(_=>_*c.level*.7*.6));else if(l.rise){let _=l.rise*te;n.push(l.x+Math.cos(b)*u*x*Math.cos(_),g+Math.sin(_)*u*x,l.z+Math.sin(b)*u*x*Math.cos(_)),r.push(...c.color.map(y=>y*c.level*.7*.6))}else m(l.x+Math.cos(b)*u*x,l.z+Math.sin(b)*u*x,.6);else if(l.lamp==="wall"){let x=this.packLightAt(l);x?(n.push(...x),r.push(...c.color.map(_=>_*c.level*.7))):m(l.x-Math.sin(b)*(f/2+.05),l.z+Math.cos(b)*(f/2+.05))}else m(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let x=new K(...c.color.map(A=>A*.09*c.level)),_=new K(0,0,0),y=Math.max(.03,u/2),M=.45+.35*c.level,w=16;for(let A=0;A<w;A++){let v=A/w*Math.PI*2,T=(A+1)/w*Math.PI*2,E=[l.x+Math.cos(v)*y,g,l.z+Math.sin(v)*y],S=[l.x+Math.cos(T)*y,g,l.z+Math.sin(T)*y],P=[l.x+Math.cos(v)*M,.02,l.z+Math.sin(v)*M],N=[l.x+Math.cos(T)*M,.02,l.z+Math.sin(T)*M];o.tri(E,P,N,x,_,_),o.tri(E,N,S,x,_,x)}}}let a=new Vt;a.setAttribute("position",new Lt(n,3)),a.setAttribute("color",new Lt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=o.geometry(),t.coneMesh.visible=o.count>0,t.coneTris=s}buildScreens(t){let e=md(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),r=(es.value?ts.value.toArray().map(s=>Math.round(s*255)).join(","):"")+"|"+e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(r===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=r;let o=new Qt;for(let s of e){let a=this.screens.get(s.id),l=Yc.has(s.type)?qc(t.geo.walls2d,s,t.floor.height,tn(t.floor,s)):null,c=l?{...s,x:l.x,z:l.z,mount_y:l.y}:s,h=c.rotation*te,u=Math.cos(h),f=Math.sin(h),d=(A,v,T)=>[c.x+A*u-T*f,v,c.z+A*f+T*u];if(a.faces){let A=Math.max(.05,c.w)*(c.mirror?-1:1),v=Math.max(.05,c.d),T=Math.max(.005,c.h),E=tn(t.floor,c);for(let S of a.faces){if(S.part==="lights"){let W=le(c.type),z=q=>["#e8f4ff","#ff3b4f"].includes(q.color.toLowerCase());if(W&&W.parts.some(z)){let q=new K(...S.color.map(j=>Math.min(1,j*(.4+.6*S.level))));Zo(o,W,c,E,q.getHex(),z)}continue}if(S.part==="cabin"){let W=le(c.type),z=q=>q.color.toLowerCase()==="#13283a"||q.color==="glass";if(W&&W.parts.some(z)){let q=new K(...S.color.map(j=>Math.min(1,j*(.3+.5*S.level))));Zo(o,W,c,E,q.getHex(),z);continue}}if(S.part==="burners"&&le(c.type)){let W=le(c.type),z=new K(...S.color.map(q=>Math.min(1,q*(.25+.6*S.level))));Zo(o,W,c,E,z.getHex(),h0);continue}if(S.part==="burners"){let W=new K(...S.color.map(q=>Math.min(1,q*(.25+.6*S.level)))),z=E+T+.008;for(let[q,j,ot]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let H=q*Math.abs(A)/.6,X=j*v/.62,tt=14;for(let et=0;et<tt;et++){let nt=et/tt*Math.PI*2,ut=(et+1)/tt*Math.PI*2;o.tri(d(H,z,X),d(H+Math.cos(nt)*ot,z,X+Math.sin(nt)*ot),d(H+Math.cos(ut)*ot,z,X+Math.sin(ut)*ot),W)}}continue}if(S.part==="band"||S.part==="cabin"){let W=S.part==="cabin",z=E+T*(W?.6:.42),q=W?E+T*.86:z+.07,j=new K(...S.color.map(tt=>Math.min(1,tt*(.3+.45*S.level)))),ot=Math.abs(A)/2+(W?.012:.02),H=v/2+(W?.012:.02),X=[[-ot,-H],[ot,-H],[ot,H],[-ot,H]];for(let tt=0;tt<4;tt++){let et=X[tt],nt=X[(tt+1)%4],ut=d(et[0]*Math.sign(A),z,et[1]),bt=d(nt[0]*Math.sign(A),z,nt[1]),ht=d(nt[0]*Math.sign(A),q,nt[1]),gt=d(et[0]*Math.sign(A),q,et[1]);o.tri(ut,bt,ht,j),o.tri(ut,ht,gt,j)}continue}if(S.part==="strata"){let W=S.top??S.color,z=.22+.4*S.level,q=new K(...S.color.map(nt=>Math.min(1,nt*z))),j=new K(...W.map(nt=>Math.min(1,nt*z))),ot=E+T*.06,H=E+T*.94,X=Math.abs(A)/2+.012,tt=v/2+.012,et=20;for(let nt=0;nt<et;nt++){let ut=nt/et*Math.PI*2,bt=(nt+1)/et*Math.PI*2,ht=[Math.cos(ut)*X,Math.sin(ut)*tt],gt=[Math.cos(bt)*X,Math.sin(bt)*tt];o.tri(d(ht[0],ot,ht[1]),d(gt[0],ot,gt[1]),d(gt[0],H,gt[1]),q,q,j),o.tri(d(ht[0],ot,ht[1]),d(gt[0],H,gt[1]),d(ht[0],H,ht[1]),q,j,j)}continue}if(S.part==="chamber"){let W=le(c.type),z=new K(...S.color.map(q=>Math.min(1,q*(.4+.6*S.level))));W&&Zo(o,W,c,E,z.getHex());continue}if(S.part==="progress"){let W=Math.min(Math.abs(A),v)*.42,z=E+T+.008,q=new K(...S.color.map(tt=>Math.min(1,tt*(.4+.6*S.level)))),j=q.clone().multiplyScalar(.15),ot=40,H=Math.round(Math.min(1,Math.max(0,S.fill??0))*ot),X=(tt,et)=>d(Math.sin(tt)*et,z,-Math.cos(tt)*et);for(let tt=0;tt<ot;tt++){let et=tt/ot*Math.PI*2,nt=(tt+1)/ot*Math.PI*2,ut=tt<H?q:j;o.tri(X(et,W*.8),X(et,W),X(nt,W),ut),o.tri(X(et,W*.8),X(nt,W),X(nt,W*.8),ut)}continue}if(S.part==="apring"){let W=c.variant==="wall",z=Math.abs(A),q=W?Math.min(z,T)*.3:Math.min(z,v)*.3,j=new K(...S.color.map(tt=>Math.min(1,tt*(.4+.6*S.level)))),ot=new K(0,0,0),H=24,X=(tt,et)=>W?d(Math.cos(tt)*et,E+T/2+Math.sin(tt)*et,v/2+.004):d(Math.cos(tt)*et,E-.003,Math.sin(tt)*et);for(let tt=0;tt<H;tt++){let et=tt/H*Math.PI*2,nt=(tt+1)/H*Math.PI*2;o.tri(X(et,q*.8),X(et,q),X(nt,q),j),o.tri(X(et,q*.8),X(nt,q),X(nt,q*.8),j),o.tri(X(et,q),X(et,q*1.5),X(nt,q*1.5),j,ot,ot),o.tri(X(et,q),X(nt,q*1.5),X(nt,q),j,ot,j)}continue}if(S.part==="drum"){let W=Math.abs(A),z=Math.min(W*.36,(T-.2)*.42),q=E+(T-.14)/2+.04,j=v/2-.006,ot=new K(...S.color.map(nt=>Math.min(1,nt*(.35+.65*S.level)))),H=ot.clone().multiplyScalar(.12),X=new K(0,0,0),tt=28,et=(nt,ut)=>d(Math.cos(nt)*ut,q+Math.sin(nt)*ut,j);for(let nt=0;nt<tt;nt++){let ut=nt/tt*Math.PI*2,bt=(nt+1)/tt*Math.PI*2;o.tri(d(0,q,j),et(ut,z*.78),et(bt,z*.78),H),o.tri(et(ut,z*.78),et(ut,z),et(bt,z),ot),o.tri(et(ut,z*.78),et(bt,z),et(bt,z*.78),ot),o.tri(et(ut,z),et(ut,z*1.18),et(bt,z*1.18),ot,X,X),o.tri(et(ut,z),et(bt,z*1.18),et(bt,z),ot,X,ot)}continue}if(S.part==="gang"){let W=Math.max(1,S.of??1),z=Math.abs(A),q=z/W,j=(-z/2+q*((S.index??0)+.5))*Math.sign(A),ot=v/2+(c.variant==="outdoor"?.02:.008),H=S.accent?es.value?ts.value.toArray():XA:S.color,X=new K(...H.map(vt=>Math.min(1,vt*(.35+.65*S.level)))),tt=X.clone().multiplyScalar(.5),et=new K(0,0,0),nt=q*.34,ut=E+T*.16,bt=E+T*.84,ht=[d(j-nt,ut,ot),d(j+nt,ut,ot),d(j+nt,bt,ot),d(j-nt,bt,ot)];o.tri(ht[0],ht[1],ht[2],X),o.tri(ht[0],ht[2],ht[3],X);let gt=.012+.015*S.level,yt=[d(j-nt-gt,ut-gt,ot-.001),d(j+nt+gt,ut-gt,ot-.001),d(j+nt+gt,bt+gt,ot-.001),d(j-nt-gt,bt+gt,ot-.001)];for(let vt=0;vt<4;vt++){let qt=(vt+1)%4;o.tri(ht[vt],yt[qt],yt[vt],tt,et,et),o.tri(ht[vt],ht[qt],yt[qt],tt,tt,et)}continue}if(S.part==="beacon"){let W=new K(...S.color.map(bt=>Math.min(1,bt*(.25+.45*S.level)))),z=new K(0,0,0),q=E+T+.01,j=.6+.6*S.level,ot=Math.min(Math.abs(A),v)*.38;for(let[bt,ht]of[[ot,0],[0,ot]]){let gt=d(-bt,q,-ht),yt=d(bt,q,ht),vt=d(bt*.4,q+j,ht*.4),qt=d(-bt*.4,q+j,-ht*.4);o.tri(gt,yt,vt,W,W,z),o.tri(gt,vt,qt,W,z,z)}let H=tn(t.floor,{...c,mount_y:0})+.012,X=Math.abs(A)/2+.03,tt=v/2+.03,et=.22+.18*S.level,nt=(bt,ht,gt)=>d(bt*(X+gt),H,ht*(tt+gt)),ut=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let bt=0;bt<4;bt++){let[ht,gt]=ut[bt],[yt,vt]=ut[(bt+1)%4];o.tri(nt(ht,gt,0),nt(yt,vt,0),nt(yt,vt,et),W,W,z),o.tri(nt(ht,gt,0),nt(yt,vt,et),nt(ht,gt,et),W,z,z)}continue}let P=S.part==="right"?.03:-Math.abs(A)/2+.03,N=S.part==="left"?-.03:Math.abs(A)/2-.03,D=E+(S.part==="bottom"?T*.45:T)+.006,C=new K(...S.color.map(W=>Math.min(1,W*(.35+.65*S.level)))),R=new K(0,0,0),k=(W,z,q=D)=>d(W*Math.sign(A),q,z),L=[k(P,-v/2+.03),k(N,-v/2+.03),k(N,v/2-.03),k(P,v/2-.03)];o.tri(L[0],L[2],L[1],C),o.tri(L[0],L[3],L[2],C);let O=S.part==="lid"?.025+.02*S.level:.12+.1*S.level,B=C.clone().multiplyScalar(S.part==="lid"?.7:.5),V=[k(P-O,-v/2-O,D+.004),k(N+O,-v/2-O,D+.004),k(N+O,v/2+O,D+.004),k(P-O,v/2+O,D+.004)];for(let W=0;W<4;W++){let z=(W+1)%4;o.tri(L[W],V[z],V[W],B,R,R),o.tri(L[W],L[z],V[z],B,B,R)}}continue}let p=le(c.type);if(p&&!p.light&&a.ring&&p.parts.some(A=>A.glow)){let A=new K(...a.color.map(v=>Math.min(1,v*(.45+.55*a.level))));Zo(o,p,c,tn(t.floor,c),A.getHex())}let b=id(c,t.floor);if(!b)continue;let g=new K(...a.color.map(A=>Math.min(1,A*(.35+.65*a.level)))),m=new K(0,0,0),x=b.z+.004;if(o.tri(d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),g),o.tri(d(b.x0,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x),g),a.plain)continue;let _=.18+.12*a.level,y=g.clone().multiplyScalar(.5),M=[d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x)],w=[d(b.x0-_,b.y0-_,x+.01),d(b.x1+_,b.y0-_,x+.01),d(b.x1+_,b.y1+_,x+.01),d(b.x0-_,b.y1+_,x+.01)];for(let A=0;A<4;A++){let v=(A+1)%4;o.tri(M[A],w[A],w[v],y,m,m),o.tri(M[A],w[v],M[v],y,m,y)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=o.geometry(),t.screenMesh.visible=o.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,o]of t.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(t.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),o.texture?.dispose(),t.screenPics.delete(r));for(let[r,o]of n){let s=this.screens.get(r),a=id(o,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new At(new Xn(1,1),new Xt({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:s.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let h=l;new Er().load(s.picture,u=>{if(t.screenPics.get(r)!==h){u.dispose();return}u.colorSpace=Ce,h.texture=u;let f=h.mesh.material;f.map=u,f.needsUpdate=!0,this.placeScreenPicture(h.mesh,o,a,u),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*s.level),l.texture&&this.placeScreenPicture(l.mesh,o,a,l.texture)}}placeScreenPicture(t,e,n,r){let o=r.image,s=o?.width&&o?.height?o.width/o.height:16/9,{w:a,h:l}=Gg(n.x1-n.x0,n.y1-n.y0,s),c=e.rotation*te,h=(n.x0+n.x1)/2,u=n.z+.008;t.scale.set(a,l,1),t.rotation.set(0,-c,0),t.position.set(e.x+h*Math.cos(c)-u*Math.sin(c),(n.y0+n.y1)/2,e.z+h*Math.sin(c)+u*Math.cos(c))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){this.buildPipeLines(t);let e=this.flows.filter(d=>d.floorId===t.floor.id&&!d.pipe).map(Aa).join(";"),n=[],r=[],o=[],s=[],a=[],l=[],c=[],h=[];for(let d of this.flows){if(d.floorId!==t.floor.id||d.pipe)continue;let p=this.flowPhase.get(Aa(d))??{speed:Pu(d.power),offset:0},b=d.power>.5?Math.min(1,.5+d.power/2500):.22,g=d.color.map(T=>T*b),m=d.dots?.length?d.dots:[{color:d.color,share:1}],x=[0,1,2].map(T=>m[Math.min(T,m.length-1)].color.map(E=>E*b)),_=m.length>1?m[0].share:1,y=m.length>2?_+m[1].share:1,M=Math.hypot(d.b[0]-d.a[0],d.b[1]-d.a[1],d.b[2]-d.a[2]);if(M<1e-4)continue;let w=[(d.b[0]-d.a[0])/M,(d.b[1]-d.a[1])/M,(d.b[2]-d.a[2])/M],A=[];if(Math.abs(w[1])<.5){let T=Math.hypot(w[0],w[2])||1;A.push([-w[2]/T,0,w[0]/T])}else A.push([1,0,0],[0,0,1]);let v=this.lowQuality?[[Rx*1.4,1]]:[[jA,.25],[Rx,1]];for(let[T,E]of v)for(let S of A){let P=T*(d.width??1)*(d.thick??1)/2,N=(C,R)=>[C[0]+S[0]*P*R,C[1]+S[1]*P*R,C[2]+S[2]*P*R],D=[[N(d.a,-1),d.dist,0],[N(d.b,-1),d.dist+M,0],[N(d.b,1),d.dist+M,1],[N(d.a,1),d.dist,1]];for(let C of[0,1,2,0,2,3]){let[R,k,L]=D[C];n.push(R[0],R[1],R[2]),r.push(g[0]*E,g[1]*E,g[2]*E),o.push(k,L),s.push(p.speed),a.push(p.offset),l.push(x[0][0]*E,x[0][1]*E,x[0][2]*E,_),c.push(x[1][0]*E,x[1][1]*E,x[1][2]*E,y),h.push(x[2][0]*E,x[2][1]*E,x[2][2]*E)}}}let u=t.flowMesh.geometry;if(e===t.flowLayout&&u.getAttribute("position")?.count===n.length/3){for(let[d,p]of[["position",n],["color",r],["flowSpeed",s],["flowOffset",a],["flowDot1",l],["flowDot2",c],["flowDot3",h]]){let b=u.getAttribute(d);b.array.set(p),b.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let f=new Vt;f.setAttribute("position",new Lt(n,3)),f.setAttribute("color",new Lt(r,3)),f.setAttribute("uv",new Lt(o,2)),f.setAttribute("flowSpeed",new Lt(s,1)),f.setAttribute("flowOffset",new Lt(a,1)),f.setAttribute("flowDot1",new Lt(l,4)),f.setAttribute("flowDot2",new Lt(c,4)),f.setAttribute("flowDot3",new Lt(h,3)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=f,t.flowMesh.visible=n.length>0}buildPipeLines(t){let e=this.flows.filter(r=>r.floorId===t.floor.id&&r.pipe),n=JSON.stringify(e.map(r=>[r.a,r.b,r.dist,r.color,r.width,r.house,r.floor,Math.round(r.power/50),this.flowPhase.get(Aa(r))?.speed??0]));if(n!==t.pipeLineSig){t.pipeLineSig=n;for(let r of["all","house","floor"]){let o=[],s=[],a=[],l=[],c=[];for(let f of e){if((f.house?"house":f.floor?"floor":"all")!==r)continue;let d=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1],f.b[2]-f.a[2]);if(d<1e-4)continue;let p=this.flowPhase.get(Aa(f))??{speed:Pu(f.power),offset:0},b=[(f.b[0]-f.a[0])/d,(f.b[1]-f.a[1])/d,(f.b[2]-f.a[2])/d],g=[];if(Math.abs(b[1])<.5){let y=Math.hypot(b[0],b[2])||1;g.push([-b[2]/y,0,b[0]/y])}else g.push([1,0,0],[0,0,1]);let m=ZA*(f.width??1),x=f.power>.5?1:.62,_=[[m+JA*2,[.02,.025,.05],.78,2],[m,f.color.map(y=>y*x),1,0]];for(let[y,M,w,A]of _)for(let v of g){let T=y/2,E=A===0?.002:0,S=(N,D)=>[N[0]+v[0]*T*D,N[1]+v[1]*T*D+E,N[2]+v[2]*T*D],P=[[S(f.a,-1),f.dist,A],[S(f.b,-1),f.dist+d,A],[S(f.b,1),f.dist+d,A+1],[S(f.a,1),f.dist,A+1]];for(let N of[0,1,2,0,2,3]){let[D,C,R]=P[N];o.push(D[0],D[1],D[2]),s.push(M[0],M[1],M[2],w),a.push(C,R),l.push(p.speed),c.push(p.offset)}}}let h=r==="house"?t.pipeHouseMesh:r==="floor"?t.pipeFloorMesh:t.pipeLineMesh,u=new Vt;u.setAttribute("position",new Lt(o,3)),u.setAttribute("color",new Lt(s,4)),u.setAttribute("uv",new Lt(a,2)),u.setAttribute("flowSpeed",new Lt(l,1)),u.setAttribute("flowOffset",new Lt(c,1)),h.geometry.dispose(),h.geometry=u,h.userData.filled=o.length>0}this.applyHouseLines(t)}}applyHouseLines(t){for(let e of t?[t]:this.floors)e.pipeLineMesh.visible=!!e.pipeLineMesh.userData.filled,e.pipeHouseMesh.visible=!!e.pipeHouseMesh.userData.filled&&this.floorId===null,e.pipeFloorMesh.visible=!!e.pipeFloorMesh.userData.filled&&this.floorId!==null}buildOpenings(t){let e=lx(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color"),n=t.geo.roomTris.map(r=>`${this.roomTint?.get(r.roomId)?.join(",")??""}${r.roomId===this.roomId?"*":""}${this.roomGlow.has(r.roomId)?"+":""}`).join(";");if(this.highlighted.get(e)!==n){this.highlighted.set(e,n);for(let r of t.geo.roomTris){let o=new K(r.color),s=this.roomTint?.get(r.roomId);s?o.lerp(new K(...s).multiplyScalar(.6),.9):this.roomGlow.has(r.roomId)&&o.lerp(oE,.6),r.roomId===this.roomId&&o.lerp(sE,s?.3:.75);for(let a=r.start*3;a<r.end*3;a++)e.setXYZ(a,o.r,o.g,o.b)}e.needsUpdate=!0}}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new _n;for(let f of this.activeFloors()){let d=f.floor.elevation+f.ty;for(let p of f.floor.rooms)for(let[b,g]of p.points)e.expandByPoint(new $(b,d,g)),e.expandByPoint(new $(b,d+f.floor.height,g))}e.isEmpty()&&e.set(new $(-4,0,-4),new $(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new $),r=e.getSize(new $),o=Math.max(8,Cu(r.length()/2,this.camera.fov,this.camera.aspect,this.fitMargin)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,o*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=o);let s=this.floorId===null,a=s?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(s||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,Td(l.radius,this.camera.fov,this.camera.aspect)*1.5));let h=c?l.target:null;if(h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.keepNext){this.keepNext=!1,this.fitted=null;let f=this.controls.view;this.controls.flyTo({target:new $(f.target.x,n.y,f.target.z),radius:f.radius,phi:f.phi,theta:f.theta},t);return}let u=c?Td(l.radius,this.camera.fov,this.camera.aspect):o;this.controls.flyTo({target:n,radius:u,phi:l?l.phi:.85,theta:l?l.theta:-.6},t,!!l),this.fitted=this.controls.goal}placeGround(){let t=new _n,e=1/0;for(let s of this.floors){e=Math.min(e,s.floor.elevation+Math.min(0,s.ty));for(let a of s.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new $(l,0,c));for(let a of s.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new $(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day"&&this.theme!=="realistic",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=mE();let s=this.ground.material;s.map=this.groundTexture,s.needsUpdate=!0}let n=t.getCenter(new $),r=t.getSize(new $),o=Rd*Math.ceil((Math.max(r.x,r.z)+16)/Rd);this.ground.scale.set(o,o,1),this.ground.position.set(n.x,e-sn-.02,n.z)}distanceFor(t){let e=this.camera.fov*te,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new Bs;return r.setFromCamera(new Zt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),o=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),s=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(h=>h.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let h=s(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(h)return{entity:h}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??jt;if(f!==jt&&Math.floor(f/16)===0)continue}let h=s(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),u=h?this.pickOpenings.get(h):void 0;if(u)return{entity:u}}else if(a.object===c.wallMesh){let h=s(c.geo.furnitureTris,l),u=h?this.rackHit(c,h,a.point):null;if(u?.slot)return{floorId:c.floor.id,roomId:null,rack:u};let f=h?this.pickFurniture.get(h):void 0;if(f)return{entity:f};if(u)return{floorId:c.floor.id,roomId:null,rack:u};if(!h&&a.face&&a.face.normal.y>.7){let d=Af(c.floor).find(p=>Jt([a.point.x,a.point.z],p.points));if(d)return{floorId:c.floor.id,roomId:d.id}}if(a.face&&!h){let d=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,p=Math.floor(d/16),b=d%16,g=this.wallMode==="cut"&&p===0,m=(c.mask.glass.value&1<<b)!==0;if(!g){let x=n.ray.direction,_=Math.hypot(x.x,x.z)||1,y=[a.point.x-x.x/_*.3,a.point.z-x.z/_*.3],M=c.floor.rooms.find(w=>w.points.length>=3&&Jt(y,w.points))?.id??null;if(this.roomId!==null){if(M===this.roomId)return{floorId:c.floor.id,roomId:M}}else if(!m&&M)return{floorId:c.floor.id,roomId:M}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:s(c.geo.roomTris.map(h=>({id:h.roomId,start:h.start,end:h.end})),l)??null}}return null}rackHit(t,e,n){let r=t.floor.furniture.find(g=>g.id===e),o=r?.rack?.slots,s=o?.length?pr(le(r.type)):null;if(!r||!o||!s)return null;let a=t.group.worldToLocal(n.clone()),l=r.rotation*te,c=Math.cos(l),h=Math.sin(l),u=a.x-r.x,f=a.z-r.z,d=[(r.mirror?-1:1)*(u*c+f*h),a.y-tn(t.floor,r),-u*h+f*c],p=mr(s,Math.max(.05,r.w),Math.max(.05,r.d),Math.max(.005,r.h)),b=jd(gr(p,o,le),d);return{id:e,slot:b?o.find(g=>g.id===b)??null:null,f:r}}onTap(t,e){let n=this.pick(t,e);if(n&&"rack"in n&&n.rack){if(this.furnish)return;let r=np(n.rack.f,le);r&&this.options.onRackTap?.(n.rack.id,r,n.rack.slot?.id??null);return}if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Iu),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),o=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],s=r.flatMap(a=>[a.lampMesh,a.wallMesh,...o(a)].filter(l=>l.visible));for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=r.find(u=>u.group===a.object.parent||o(u).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let u=this.furnitureNear(l,a.point.x,a.point.z);if(u)return{fv:l,id:u,y:a.point.y};continue}let h=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(u=>a.faceIndex>=u.start&&a.faceIndex<u.end)?.id;if(h)return{fv:l,id:h,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let o of t.floor.furniture){let s=o.rotation*te,a=e-o.x,l=n-o.z,c=Math.abs(a*Math.cos(s)+l*Math.sin(s))-o.w/2,h=Math.abs(-a*Math.sin(s)+l*Math.cos(s))-o.d/2,u=Math.max(c,h);u<.25&&(!r||u<r.d)&&(r={id:o.id,d:u})}return r?.id??null}floorPoint(t,e,n,r){let o=this.rayAt(e,n),s=r??t.floor.elevation+t.y,a=o.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(s-o.ray.origin.y)/a.y;return l<=0?null:[o.ray.origin.x+a.x*l,o.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let s=n?this.devices.find(u=>u.id===n)?.furnitureId:void 0,a=s?null:this.furnitureAt(t,e),l=s??a?.id,c=l?this.floors.find(u=>u.floor.furniture.some(f=>f.id===l)):void 0,h=c?.floor.furniture.find(u=>u.id===l)?.type;return!!(c&&l&&h&&r.has(h))&&this.grabItem(c,l,t,e)}if(n){let s=this.devices.find(l=>l.id===n)?.furnitureId,a=s?this.floors.find(l=>l.floor.furniture.some(c=>c.id===s)):void 0;return!s||!a?this.grabDevice(n,t,e):this.grabItem(a,s,t,e)}let o=this.furnitureAt(t,e);if(!o){let s=this.pick(t,e);return s&&"entity"in s?this.grabDevice(s.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(o.fv,o.id,t,e,o.y)}grabItem(t,e,n,r,o){let s=t.floor.furniture.find(u=>u.id===e),a=o===void 0?void 0:Math.min(o,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!s||!l)return!1;let c,h=this.rayAt(n,r).ray.direction;if(o!==void 0&&-h.y<.34){let u=this.camera.position,f=this.camera.getWorldDirection(new $),d=Math.hypot(f.x,f.z)||1,p=[f.x/d,f.z/d],b=Math.hypot(l[0]-u.x,l[1]-u.z,(a??0)-u.y),g=this.renderer.domElement.getBoundingClientRect().height||1,m=2*b*Math.tan(this.camera.fov*Math.PI/360)/g;c={x0:n,y0:r,fx:s.x,fz:s.z,right:[-p[1],p[0]],fwd:p,perPx:m,gain:Math.min(2,1/Math.max(.5,-h.y))}}return s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:t.floor.id,id:s.id,offset:[s.x-l[0],s.z-l[1]],x:s.x,z:s.z,moved:!1,plane:a,screen:c},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),o=r&&this.floorMap.get(r.floorId),s=o&&this.floorPoint(o,e,n);return!r||!o||!s?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:o.floor.id,offset:[r.x-s[0],r.z-s[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(g=>g.id===n.id),p=f&&this.floorPoint(f,t,e);if(!f||!d||!p)return;let b=this.building?.settings.grid??.05;n.x=d.x=Math.round((p[0]+n.offset[0])/b)*b,n.z=d.z=Math.round((p[1]+n.offset[1])/b)*b,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,o=r&&this.floorMap.get(r.floorId);if(!r||!o)return;let s=r.screen,a;if(s){let f=(t-s.x0)*s.perPx,d=(e-s.y0)*s.perPx*s.gain;a=[s.fx+s.right[0]*f-s.fwd[0]*d-r.offset[0],s.fz+s.right[1]*f-s.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(o,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=o.floor.furniture.find(f=>f.id===r.id),h=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?yb(o.floor,c,h,u,this.building?.settings.wall_interior??0):[h,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new De,n;for(let r of t){let o=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),s=o?.floor.furniture.find(a=>a.id===r);!o||!s||(n??=o,this.ghostBox(e,o,s,r===this.selectedFurniture?new K(.25,.9,1):new K(1,.71,.28)))}n&&(this.ghost=new Ke(e.geometry(),new Je({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let o=this.grab?.id===n.id?this.grab.x:n.x,s=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=le(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?tn(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:tn(e.floor,n),u=n.rotation*te,f=Math.cos(u),d=Math.sin(u),p=(g,m,x)=>[o+g*f-m*d,x,s+g*d+m*f],b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let g=0;g<4;g++){let[m,x]=b[g],[_,y]=b[(g+1)%4];t.seg(p(m,x,h+.01),p(_,y,h+.01),r),t.seg(p(m,x,h+c),p(_,y,h+c),r),t.seg(p(m,x,h+.01),p(m,x,h+c),r)}t.seg(p(-n.w/2,n.d/2+.03,h+.02),p(n.w/2,n.d/2+.03,h+.02),new K(1,1,1))}onHold(t,e){let n=this.pick(t,e);if(n&&"entity"in n)this.options.onDeviceHold?.(n.entity,t,e);else if(n&&"rack"in n&&n.rack&&!this.furnish){let r=n.rack.slot?Yd(n.rack.slot)[0]:void 0;r?this.options.onDeviceHold?.(r,t,e):this.onTap(t,e)}}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let o=this.pick(t,e);return!o||!("entity"in o)||this.options.onDeviceSwipe?.(o.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:o.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(m=>m.floor.rooms.some(x=>x.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),o=Math.round(t*r),s=Math.round(e*r),a=new qe(o,s);a.texture.colorSpace=Ce;let l=new Rn(-1,1,1,-1,.1,400),c=this.floors.map(m=>({fv:m,visible:m.group.visible,y:m.y,o:m.o,standing:m.mask.standing.value,glass:m.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(o*s*4),p=document.createElement("canvas");p.width=o,p.height=s;let b=p.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let m of n){for(let N of this.floors)N.group.visible=N===m;m.y=0,m.o=1,this.applyFloor(m),m.group.visible=!0,m.mask.standing.value=0,m.mask.glass.value=0;let x=m.floor.rooms.flatMap(N=>N.points),_=m.floor.elevation,y=new _n(new $(Math.min(...x.map(N=>N[0]))-.3,_,Math.min(...x.map(N=>N[1]))-.3),new $(Math.max(...x.map(N=>N[0]))+.3,_+Math.min(m.floor.cut_height,m.floor.height),Math.max(...x.map(N=>N[1]))+.3)),M=y.getCenter(new $),w=-.6,A=.8,v=new $(Math.sin(A)*Math.sin(w),Math.cos(A),Math.sin(A)*Math.cos(w));l.position.copy(M).addScaledVector(v,100),l.lookAt(M),l.updateMatrixWorld();let T=.5,E=.5;for(let N of[y.min.x,y.max.x])for(let D of[y.min.y,y.max.y])for(let C of[y.min.z,y.max.z]){let R=new $(N,D,C).applyMatrix4(l.matrixWorldInverse);T=Math.max(T,Math.abs(R.x)),E=Math.max(E,Math.abs(R.y))}let S=o/s;T/E>S?E=T/S:T=E*S,l.left=-T*1.05,l.right=T*1.05,l.top=E*1.05,l.bottom=-E*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,o,s,d);let P=b.createImageData(o,s);for(let N=0;N<s;N++)P.data.set(d.subarray((s-1-N)*o*4,(s-N)*o*4),N*o*4);b.putImageData(P,0,0),g.push({floorId:m.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let m of c)m.fv.y=m.y,m.fv.o=m.o,m.fv.mask.standing.value=m.standing,m.fv.mask.glass.value=m.glass,this.applyFloor(m.fv),m.fv.group.visible=m.visible;this.roof&&(this.roof.group.visible=h,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let o=r.info.mode,s=n.mode==="cleaning"&&o==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(o!=="cleaning"||s||!r.motion.path.length)){let a=n.room?ux(n.room,void 0,void 0,n.obstacles):wd(n.rest),l=a.length?a:wd(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-r.motion.pos[0],h[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!Jt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Mx[n.mode])}for(let[n,r]of this.robots)if(!e.has(n)){r.group.removeFromParent(),r.led.dispose();for(let o of r.own)o.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(t){let e=t.model;return e&&le(e.type)?`${e.type}|${e.w}|${e.d}|${e.h}`:""}makeRobot(t){let e={pos:[...t.rest],heading:t.restHeading,path:[],next:0},n=new Xt({color:Mx[t.mode]}),r=this.robotModelKey(t),o=t.model?le(t.model.type):void 0;if(t.model&&o&&r){let{w:a,d:l,h:c}=t.model,h=new Qt,{radius:u,top:f}=$g(h,o,a,l,c),d=new Qt,p=Math.min(.05,u*.3),b=Math.min(.1,u*.55);Ie(d,[[-p,b],[p,b],[p,b+p*.8],[-p,b+p*.8]],f,f+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new Xt({vertexColors:!0});let g=[h.geometry(),d.geometry()],m=new Te;return m.add(new At(g[0],this.robotMat),new At(g[1],n)),{info:t,motion:e,group:m,led:n,own:g,modelKey:r}}if(!this.robotGeo){let a=new Qt,l=(h,u,f,d,p)=>{let b=[];for(let g=0;g<20;g++)b.push([Math.cos(g/20*Math.PI*2)*h,Math.sin(g/20*Math.PI*2)*h]);Ie(a,b,u,f,d,p,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new Xt({vertexColors:!0});let c=new Qt;Ie(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let s=new Te;return s.add(new At(this.robotGeo,this.robotMat),new At(this.robotLedGeo,n)),{info:t,motion:e,group:s,led:n,own:[],modelKey:r}}syncFans(t){let e=new Set;for(let n of t){if(n.lamp!=="fan")continue;let r=n.furnitureId??n.id;e.add(r);let[o,,s]=n.size??Ea.fan,a=n.top??this.floorMap.get(n.floorId)?.floor.height??2.5,l=o/2,c=this.fans.get(r);if(c&&Math.abs(c.r-l)>.001&&(c.group.removeFromParent(),c.mesh.geometry.dispose(),this.fans.delete(r),c=void 0),!c){let h=new Qt;Dx(h,0,0,0,l,0),this.fanMat??=new Xt({vertexColors:!0});let u=new At(h.geometry(),this.fanMat),f=new Te;f.add(u),f.rotation.y=-((n.rotation??0)*te),c={group:f,mesh:u,r:l,speed:0,floorId:n.floorId,y:0},this.fans.set(r,c)}c.floorId=n.floorId,c.speed=n.fanSpeed??0,c.y=Fx(a,s),c.group.position.set(n.x,c.y,n.z)}for(let[n,r]of this.fans)e.has(n)||(r.group.removeFromParent(),r.mesh.geometry.dispose(),this.fans.delete(n));this.fanLast=0}stepFans(t){if(!this.fans.size)return!1;let e=this.fanLast?Math.min(.2,(t-this.fanLast)/1e3):0;this.fanLast=t;let n=!1;for(let r of this.fans.values()){let o=this.floorMap.get(r.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),r.group.visible=!(this.wallMode==="cut"&&r.y>Math.min(o.floor.cut_height,o.floor.height)),!(r.speed<=0)&&(n=!0,r.group.rotation.y-=r.speed*Math.PI*2*e))}return n||(this.fanLast=0),n}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let o=this.floorMap.get(r.info.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),e>0?n=hx(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new K(.25-.2*a,.95-.83*a,1-.7*a),r=new K(0,0,0),o=new K(.3,1,.6),s=.02;for(let a of this.floors){let l=new Qt;for(let h of e)h.floorId===a.floor.id&&h.points.forEach(([u,f],d)=>{let p=h.points[d-1];if(p){let b=Math.hypot(u-p[0],f-p[1])||1,g=-(f-p[1])/b*.1,m=(u-p[0])/b*.1;l.tri([p[0]+g,s,p[1]+m],[u+g,s,f+m],[u-g,s,f-m],o,o,o),l.tri([p[0]+g,s,p[1]+m],[u-g,s,f-m],[p[0]-g,s,p[1]-m],o,o,o)}for(let b=0;b<10;b++){let g=b/10*Math.PI*2,m=(b+1)/10*Math.PI*2;l.tri([u,s,f],[u+Math.cos(m)*.35,s,f+Math.sin(m)*.35],[u+Math.cos(g)*.35,s,f+Math.sin(g)*.35],o,r,r)}});let c=null;for(let h of t){if(h.floorId!==a.floor.id)continue;let u=n(h.age);if(c){let f=Math.hypot(h.x-c.x,h.z-c.z)||1,d=-(h.z-c.z)/f*.06,p=(h.x-c.x)/f*.06,b=n(c.age);l.tri([c.x+d,s,c.z+p],[h.x+d,s,h.z+p],[h.x-d,s,h.z-p],b,u,u),l.tri([c.x+d,s,c.z+p],[h.x-d,s,h.z-p],[c.x-d,s,c.z-p],b,u,b)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,p=(f+1)/12*Math.PI*2;l.tri([h.x,s,h.z],[h.x+Math.cos(p)*.22,s,h.z+Math.sin(p)*.22],[h.x+Math.cos(d)*.22,s,h.z+Math.sin(d)*.22],u,r,r)}c=h}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*te,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.22,(e.tilt??(o?65:20))*te)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y),l=new $(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s));return this.controls.flyTo({target:new $(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-s,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+Iu;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,o,s){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new $(e,a.floor.elevation+a.ty+r,n),radius:s?.radius??5.5,phi:s?.phi??.78,...s?.theta!==void 0?{theta:s.theta}:{}},900),o){this.flashes.set(o,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(o)}"]`);l?.classList.add("fp3d-dev-found"),setTimeout(()=>l?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),o=this.stepFloors(e),s=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let x=new Set;for(let[_,y]of this.flashes){let M=this.deviceFloor.get(_);M&&x.add(M),y<=t&&this.flashes.delete(_)}a=this.flashes.size>0;for(let _ of this.floors)x.has(_.floor.id)&&this.buildLamps(_)}let l=this.placeRoof(e),c=this.stepRobots(t),h=this.stepFans(t),u=this.stepWeather(t),f=r||o||s||a||l,d=[];(r||this.controls.busy)&&d.push("camera"),o&&d.push("floors"),s&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.poolActive&&d.push("pool"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),c&&d.push("robot"),h&&d.push("fan"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.projections.active&&this.updateProjections(),this.sunFx.showShadow(this.floorId===null&&this.shadowSig!==""),this.realism.active&&this.realism.realize(this.scene,!!this.realPlan(),this.renderer,o||s||l||c||h);let p=mx(this.controls.view.radius,this.size.h);for(let x of this.floors)x.materials.halos.size=p;this.renderer.render(this.scene,this.camera),this.disposeRetired(),(this.viewChanged()||o||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),f&&this.invalidate();let b=this.flowActive||this.solarActive||this.soundActive||this.poolActive||c||h||this.effectFloors.size>0;b&&!this.decorWas&&(this.lastWake=t),this.decorWas=b;let g=this.effectFloors.size?this.decor(this.lowQuality?2*Cx:Cx):null;if(g!==null&&!this.effectTimer&&!document.hidden){let x=g;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=x/1e3,this.effectTick=!0;for(let _ of this.floors)_.o<.02||!this.effectFloors.has(_.floor.id)||(this.buildLamps(_),this.buildGlow(_));this.decorTimer||this.invalidate()},x)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33));let m=this.flowActive||this.solarActive||this.soundActive||this.poolActive;if(this.lowQuality){let x=c||m||h?this.decor(h?83:0,h?83:void 0):null;!f&&x!==null&&!this.decorTimer&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},x));return}!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},33)),!f&&h&&!this.fanTimer&&(this.fanTimer=setTimeout(()=>{this.fanTimer=void 0,this.invalidate()},50)),!f&&m&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},KA))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,o=Math.hypot(n,r)||1;for(let s of this.floors){let a=this.roomId!==null&&s.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;s.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/o+h[1]*r/o>=.25:a;!l&&f&&(c|=1<<u)}),s.mask.standing.value=l?0:65535,s.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new $,r=this.houseView,o=[];for(let s of this.floors){let a=s.bbox;if(!(r&&s.o>.5&&a)){this.place(s.label,null);continue}let l=null,c=null,h=s.floor.elevation+s.y+s.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(b,h,g).project(this.camera);let m=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||m<l.x)&&(l={x:m,y:x}),(!c||m>c.x)&&(c={x:m,y:x})}s.label.hidden&&(s.label.hidden=!1),s.labelSize??={w:s.label.offsetWidth,h:s.label.offsetHeight};let u=s.labelSize.w,f=8+this.labelInset,d=l.x-u-14,p=l.y;d<f&&this.labelInset&&(d=c.x+14,p=c.y),o.push({fv:s,left:Math.max(f,Math.min(t-u-8,d)),y:p,h:s.labelSize.h})}o.sort((s,a)=>a.fv.rank-s.fv.rank);for(let s=1;s<o.length;s++){let a=o[s-1];o[s].y=Math.max(o[s].y,a.y+(a.h+o[s].h)/2+8)}for(let s of o)this.place(s.fv.label,`translate(${s.left}px, ${s.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((s,a)=>{let l=this.floorMap.get(s.floorId);if(this.roomId!==null&&s.room!==this.roomId||s.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(s.views==="house"||s.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new $(s.p[0],s.p[1]+(l?.y??0)+(s.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),s.p[2]),h=this.camera.position.clone().sub(c),u=h.length();if(s.near!==void 0&&u>s.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=h.normalize().dot(new $(s.n[0],s.n[1],s.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*s.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,p,f)}),this.updateDevicePins(t,e);for(let s of this.floors){let a=s.to<.99||s.o<.9||r||this.roomId!==null||this.otherFloor(s),l=s.floor.elevation+s.y+.05;for(let c of s.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new $,r=this.houseView;for(let o of this.persons){let s=this.personPins.get(o.id),a=this.floorMap.get(o.floorId),l=this.figures.get(o.id);if(!s)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(s,null),l?.visible&&(l.visible=!1,this.invalidate());continue}let c=this.personAt.get(o.id);if(!c||c.floorId!==o.floorId)c={floorId:o.floorId,x:o.x,z:o.z};else{let f=o.x-c.x,d=o.z-c.z;Math.hypot(f,d)>.02?(c={floorId:o.floorId,x:c.x+f*.12,z:c.z+d*.12},this.labelsDirty=!0,this.invalidate()):c={floorId:o.floorId,x:o.x,z:o.z}}this.personAt.set(o.id,c);let h=a.floor.elevation+a.y;if(l){let f=Math.atan2(this.camera.position.x-c.x,this.camera.position.z-c.z);(!l.visible||l.position.x!==c.x||l.position.y!==h||l.position.z!==c.z||l.rotation.y!==f)&&(l.visible=!0,l.position.set(c.x,h,c.z),l.rotation.y=f,this.invalidate())}n.set(c.x,h+(l?1.85:.9),c.z).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(s,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let o of this.devices){let s=this.devicePins.get(o.id)?.el;if(!s)continue;let a=this.floorMap.get(o.floorId),l=o.id.startsWith("detect:")||o.id.startsWith("hh:")&&o.active;if(!a||r&&!l||a.to<.99||a.o<.9||o.pin===!1||this.otherFloor(a)){this.place(s,null);continue}if(n.set(o.x,a.floor.elevation+a.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(s,null);continue}let h=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(s)!==h&&(this.pinMode.set(s,h),s.classList.toggle("fp3d-dev-full",h==="full"),s.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(s,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let o=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:o.calls,triangles:o.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=lE(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function lE(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function cE(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(s,a,l,c,h)=>{e.strokeStyle=`rgba(55,224,255,${h})`,e.beginPath(),e.moveTo(s,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(s,a,l)=>{e.save(),e.beginPath(),e.rect(s*256,a*256,256,256),e.clip(),l(s*256,a*256),e.restore()};r(0,0,(s,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(s,c,s+256,c,.09);let h=s+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),r(1,0,(s,a)=>{for(let l=0;l<7;l++){let c=s+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),r(2,0,(s,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(s+c,a,s+c,a+256,.1),n(s,a+c,s+256,a+c,.1)}}),r(1,1,(s,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(s,c,s+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(s+u+.75,c,s+u+.75,c+256/2,.09)}}),r(2,1,(s,a)=>{n(s+.75,a,s+.75,a+256,.08),n(s,a+.75,s+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(s+l*97%256,a+(l*61+l*l%37)%256,2,2)});let o=new pn(t);return o.flipY=!1,o.wrapS=An,o.wrapT=An,o.anisotropy=4,o.colorSpace=Ce,o}function uE(i){let t=new Xt({map:i,transparent:!0,blending:Ee,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function hE(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new pn(i);return e.wrapS=Mr,e.wrapT=Mr,e.colorSpace=Ce,e}function Aa(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}${i.width?`~${i.width}`:""}`}function fE(i){let t=new Xt({vertexColors:!0,transparent:!0,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`)},t.customProgramCacheKey=()=>"fp3d-pipe-line",t}function dE(i){let t=new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:ie});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = (diffuseColor.rgb * 0.3 + fp3dDotColor * 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function Ix(i,t){let e=i.rooms.map((r,o)=>o),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,o]of t){let s=i.rooms.findIndex(h=>h.id===r),a=i.rooms.findIndex(h=>h.id===o);if(s<0||a<0)continue;let l=n(s),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,o)=>n(o))}function pE(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new pn(t);return r.colorSpace=Ce,r}function mE(){let t=Rd,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let s=0;s<=t;s++){let a=Math.round(s/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let o=new pn(e);return o.anisotropy=4,o.colorSpace=Ce,o}function uF(i,t){return new Pd(i,t)}function Fx(i,t){return Math.max(.5,i-Math.max(.25,t))+.11}function Dx(i,t,e,n,r,o){let a=Math.max(.22,r);for(let l=0;l<4;l++){let c=o+l*Math.PI/2,h=Math.cos(c),u=Math.sin(c),d=[[.12,-.045],[a,-.065],[a,.065],[.12,.045]].map(([p,b])=>[t+p*h-b*u,n+p*u+b*h]);Ie(i,d,e-.006,e+.006,QA,tE,{aoFrom:0,bottom:!0})}}function Ed(i,t,e,n,r=!0){let[o,s,a]=t.size??Ea[t.lamp],l=t.base??0,c=(t.rotation??0)*te,h=Math.cos(c),u=Math.sin(c),f=(g,m)=>[t.x+g*h-m*u,t.z+g*u+m*h],d=(g,m,x,_,y,M=14)=>{let w=[];for(let A=0;A<M;A++){let v=A/M*Math.PI*2;w.push([t.x+Math.cos(v)*g,t.z+Math.sin(v)*g])}Ie(i,w,m,x,_,y,{aoFrom:0,bottom:!0})},p=(g,m,x,_,y,M,w,A=w)=>Ie(i,[f(g,x),f(m,x),f(m,_),f(g,_)],y,M,w,A,{aoFrom:0,bottom:!0}),b=Math.max(.05,Math.min(o,s)/2);switch(t.lamp){case"ceiling":d(b*.25,e-.04,e,re,re,8),d(b,e-Math.max(.04,a)-.035,e-.04,n,n);break;case"pendant":{let g=Math.max(.4,e-a);d(.06,e-.02,e,re,re,8);let m=t.variant==="globe"?g+2*b:t.variant==="drum"?g+.24:g+.2;if(d(.008,m,e-.02,re,re,5),t.variant==="globe")for(let _=0;_<7;_++){let y=Math.PI*(_/7),M=Math.PI*((_+1)/7);d(b*Math.max(.2,Math.sin((y+M)/2)),g+b-b*Math.cos(y),g+b-b*Math.cos(M),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)d(b*(.25+.75*(4-_)/4),g+.06*_,g+.06*(_+1),n,n,16);else t.variant==="drum"?d(b,g,g+.24,n,n,18):(d(b*.35,g+.14,g+.2,n,n,12),d(b,g,g+.14,n,n,16));break}case"fan":{let g=Math.max(.5,e-Math.max(.25,a));d(.06,e-.03,e,re,re,10),d(.012,g+.16,e-.03,re,re,6),d(.13,g+.07,g+.16,re,re,16),d(.11,g,g+.07,n,n,16),r&&Dx(i,t.x,Fx(e,a),t.z,o/2,c);break}case"downlight":d(b,e-.012,e,re,re,12),d(b*.7,e-.02,e-.012,n,n,12);break;case"spot":d(b*.6,e-.02,e,re,re,10),d(b,e-Math.max(.06,a),e-.02,re,re,12),d(b*.8,e-Math.max(.06,a)-.008,e-Math.max(.06,a),n,n,12);break;case"panel":p(-o/2,o/2,-s/2,s/2,e-Math.max(.015,a),e,re,re),p(-o/2+.02,o/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,a)-.004,e-Math.max(.015,a),n);break;case"uplight":d(Math.max(.1,b*.6),l,l+.03,re,re),d(.014,l+.03,l+a-.12,re,re,6),d(b,l+a-.14,l+a-.02,re,re),d(b*.92,l+a-.02,l+a,n,n);break;case"bollard":d(b,l,l+a-.14,re,re,10),d(b*.9,l+a-.14,l+a-.03,n,n,10),d(b*1.1,l+a-.03,l+a,re,re,10);break;case"garden":d(.012,l,l+a-.08,re,re,5),d(b,l+a-.08,l+a-.01,re,re,10),d(b*.8,l+a-.01,l+a,n,n,10);break;case"floor":d(Math.max(.1,b*.7),l,l+.03,re,re),d(.014,l+.03,l+a-.28,re,re,6),d(b,l+a-.3,l+a,n,n);break;case"table":d(Math.max(.05,b*.55),l,l+.03,re,re),d(.012,l+.03,l+a-.16,re,re,6),d(b,l+a-.18,l+a,n,n);break;case"wall":{let g=t.base??Gc;p(-o/2+.03,o/2-.03,-s/2,-s/2+.02,g,g+a,re),p(-o/2,o/2,-s/2+.02,s/2,g+a*.15,g+a*.85,n);break}case"strip":{let g=Math.max(.02,a),m=t.base!=null?t.base+g:e-.04;if(!t.roll&&!t.upright&&!t.rise){p(-o/2,o/2,-s/2,s/2,m-g,m,n);break}let x=(t.roll??0)*te,_=Math.cos(x),y=Math.sin(x),M=t.upright?l+o/2:m-g/2,w=(t.upright?0:t.rise??0)*te,A=(P,N,D)=>{let C=P,R=N*_-D*y,k=N*y+D*_;return w&&([C,R]=[C*Math.cos(w)-R*Math.sin(w),C*Math.sin(w)+R*Math.cos(w)]),t.upright&&([C,R]=[-R,C]),[t.x+C*h-k*u,M+R,t.z+C*u+k*h]},v=[A(-o/2,-g/2,-s/2),A(o/2,-g/2,-s/2),A(o/2,-g/2,s/2),A(-o/2,-g/2,s/2),A(-o/2,g/2,-s/2),A(o/2,g/2,-s/2),A(o/2,g/2,s/2),A(-o/2,g/2,s/2)],T=new K(n),E=[t.x,M,t.z],S=(P,N,D,C)=>{let[R,k,L]=[v[P],v[N],v[D]],O=[(k[1]-R[1])*(L[2]-R[2])-(k[2]-R[2])*(L[1]-R[1]),(k[2]-R[2])*(L[0]-R[0])-(k[0]-R[0])*(L[2]-R[2]),(k[0]-R[0])*(L[1]-R[1])-(k[1]-R[1])*(L[0]-R[0])],B=[R[0]-E[0],R[1]-E[1],R[2]-E[2]],V=O[0]*B[0]+O[1]*B[1]+O[2]*B[2]<0,[W,z,q,j]=V?[v[C],v[D],v[N],v[P]]:[v[P],v[N],v[D],v[C]];i.tri(W,z,q,T,T,T),i.tri(W,q,j,T,T,T)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{dd as FloorMap,Pd as FloorplanViewer,pd as WalkCamera,uF as createViewer,WL as funLib,HA as furnitureFront,VA as furniturePreview,aE as isLowEnd,GA as itemPicture,Dx as pushFanBlades,Ed as pushLampModel};
