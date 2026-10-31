var jd=["frame2","frame4","cabinet","wall_frame","wall_cabinet"],dy=["wall_frame","wall_cabinet"],tp=["cabinet","wall_cabinet"],Jd=["none","glass","mesh","solid"],Gu=[19,10],jr=.04445,Vu={19:.4826,10:.254},os=60,py=[1,100],my=[.05,1.5],gy=[0,2],Bu=.001,by=new Set(["u","form","width","door","start_u","desc","mount_depth","bottom"]),Qd=(i,[e,t])=>typeof i=="number"&&Number.isInteger(i)&&i>=e&&i<=t,ep=(i,[e,t])=>typeof i=="number"&&Number.isFinite(i)&&i>=e&&i<=t,xy=i=>dy.includes(i);function yy(i){let e=i.rack_frame;if(e===void 0)return[];if(!e||typeof e!="object"||Array.isArray(e))return[{field:"rack_frame",why:"a rack frame is an object"}];let t=e,n=[],r=(d,p)=>{n.push({field:d,why:p})};for(let d of Object.keys(t))by.has(d)||r(d,"not a rack frame field");if(Qd(t.u,[1,os])||r("u",`a whole number of U, 1 to ${os}`),jd.includes(t.form)||r("form",`one of ${jd.join(", ")}`),t.width!==void 0&&!Gu.includes(t.width)&&r("width","19 or 10 (inches)"),t.door!==void 0&&!Jd.includes(t.door)&&r("door",`one of ${Jd.join(", ")}`),t.start_u!==void 0&&!Qd(t.start_u,py)&&r("start_u","a whole number, 1 to 100"),t.desc!==void 0&&typeof t.desc!="boolean"&&r("desc","true or false"),t.mount_depth!==void 0&&!ep(t.mount_depth,my)&&r("mount_depth","0.05 to 1.5 metres"),t.bottom!==void 0&&!ep(t.bottom,gy)&&r("bottom","0 to 2 metres"),n.length)return n;let[o,s,a]=i.size,l=t.form,c=t.width??19;Vu[c]>o+Bu&&r("width","the rack's panels are wider than the item"),(t.mount_depth??0)>s+Bu&&r("mount_depth","deeper than the item");let h=t.u*jr;(t.bottom??Math.max(0,(a-h)/2))+h>a+Bu&&r("u",`${t.u}U do not fit in the item's height`);let f=i.mount??"floor";return(xy(l)!==(f==="wall")||f==="ceiling")&&r("mount",'a wall rack has "mount": "wall", any other stands on the floor or a desk'),(t.door??"none")!=="none"&&!tp.includes(l)&&r("door","only a cabinet has a door"),n}function Vi(i){let e=i?.rack_frame;return!e||yy(i).length?null:{u:e.u,form:e.form,width:e.width??19,door:e.door??"none",startU:e.start_u??1,desc:e.desc??!1,mountDepth:e.mount_depth??null,bottom:e.bottom??null}}var np={19:.45085,10:.22225},zu={frame2:0,frame4:0,cabinet:.08,wall_frame:.02,wall_cabinet:.06},vy={frame2:0,frame4:.02,cabinet:.05,wall_frame:.01,wall_cabinet:.04},_y=.075;function Gi(i,e,t,n){let r=i.u*jr,o=Math.min(Math.max(0,i.bottom??(n-r)/2),Math.max(0,n-r)),s=Math.min(jr,(n-o)/i.u),a=Array.from({length:i.u},(f,d)=>({index:d,label:i.desc?i.startU+i.u-1-d:i.startU+d,y0:o+d*s,y1:o+(d+1)*s})),l=i.form==="frame2",c=l?_y/2:t/2-zu[i.form],h=l?t:Math.max(.01,t-zu[i.form]-vy[i.form]),u=Math.min(i.mountDepth??h,l?t:t-zu[i.form]);return{unit:s,units:a,bottom:o,top:o+i.u*s,panel:Math.min(e,Vu[i.width]),opening:Math.min(e,np[i.width]),front:c,rear:l?null:c-u,mountDepth:u,lane:Math.max(0,(e-Math.min(e,Vu[i.width]))/2)}}var My=.02,ip=My;function rp(i){let e=i.opening/2,t=Math.max(.01,(i.panel-i.opening)/2),n=[];for(let r=0;r<=i.units.length;r++){let o=i.bottom+r*i.unit,s=r%5===0,a=Math.max(i.bottom,o-7e-4),l=Math.min(i.top,o+7e-4),c=e+t*.15,h=e+t*(s?.95:.6),u=i.front,f=i.front+.0015;n.push({x0:-h,x1:-c,y0:a,y1:l,z0:u,z1:f,major:s},{x0:c,x1:h,y0:a,y1:l,z0:u,z1:f,major:s})}return n}var Fa={online:"#2ecc71",warning:"#f5a623",offline:"#ff3b30"};function op(i){let e=[];for(let t of[i.entity,...i.links??[]])t&&!e.includes(t)&&e.push(t);return e}var sp=["full","half","third"],ap=["half","full"];var wy=new Set(["u","width","depth","inch","shelf"]);function Sy(i){let e=i.rack;if(e===void 0)return[];if(!e||typeof e!="object"||Array.isArray(e))return[{field:"rack",why:"rack gear is an object"}];let t=e,n=[];for(let r of Object.keys(t))wy.has(r)||n.push({field:r,why:"not a rack gear field"});return(typeof t.u!="number"||!Number.isInteger(t.u)||t.u<0||t.u>os)&&n.push({field:"u",why:`a whole number of U, 0 to ${os}`}),t.width!==void 0&&!sp.includes(t.width)&&n.push({field:"width",why:`one of ${sp.join(", ")}`}),t.depth!==void 0&&!ap.includes(t.depth)&&n.push({field:"depth",why:`one of ${ap.join(", ")}`}),t.inch!==void 0&&!Gu.includes(t.inch)&&n.push({field:"inch",why:"19 or 10 (inches)"}),t.shelf!==void 0&&typeof t.shelf!="boolean"?n.push({field:"shelf",why:"true or false"}):t.shelf&&t.u===0&&n.push({field:"shelf",why:"a shelf takes at least 1U"}),n}function ka(i){let e=i?.rack;return!e||Sy(i).length?null:{u:e.u,width:e.width??"full",depth:e.depth??"half",inch:e.inch??19,shelf:e.shelf??!1}}var Ty={full:1,half:2,third:3};var lp=.004;var Hu=.003;function gr(i,e,t){let n=[],r=new Map;for(let o of e){if(o.on)continue;let s=t(o.type),a=ka(s);if(!s||!a)continue;let l=o.face==="rear"&&a.depth!=="full";if(l&&i.rear===null)continue;let c=i.units[o.u-1];if(!c)continue;let h=o.col??0;if(a.u<1){if(h>1)continue;let y=Math.min(s.size[0],i.lane),v=Math.min(s.size[2],i.top-c.y0),x=Math.min(s.size[1],i.mountDepth),_=o.face==="rear"?(i.rear??i.front-i.mountDepth)+x/2:i.front-x/2;n.push({slot:o,item:s,x:(h===0?-1:1)*(i.panel/2+i.lane/2),z:_,y:c.y0,w:y,d:x,h:v,back:o.face==="rear"});continue}if(!i.units[o.u+a.u-2])continue;let u=Ty[a.width];if(h>=u)continue;let f=a.u*i.unit,d=Math.min(s.size[2],f),p=Math.min(s.size[1],i.mountDepth+Hu),g=l?i.rear-Hu+p/2:i.front+Hu-p/2,b=-i.panel/2+(h+.5)*i.panel/u,m={slot:o,item:s,x:b,z:g,y:a.shelf?c.y0:c.y0+(f-d)/2,w:Math.min(s.size[0],i.panel/u),d:p,h:d,back:l};if(n.push(m),a.shelf){let y=i.opening/u/2;r.set(o.id,{piece:m,x0:b-y,x1:b+y,top:c.y0+f})}}for(let o of e){let s=o.on?r.get(o.on):void 0,a=s&&t(o.type);if(!s||!a||a.rack_frame)continue;let l=s.piece,c=Math.min(a.size[0],s.x1-s.x0),h=Math.min(a.size[1],l.d),u=Math.min(a.size[2],Math.max(0,s.top-l.y-lp)),f=l.back?l.z-l.d/2+h/2:l.z+l.d/2-h/2;n.push({slot:o,item:a,x:s.x0+c/2,z:f,y:l.y+lp,w:c,d:h,h:u,back:l.back}),s.x0+=c}return n}function cp(i){let e=Math.min(.01,i.h/3,i.w/6),t=Math.min(.025,i.w/5)+e/2,n=i.y+i.h-Math.min(.012,i.h/4)-e/2,r=.0015+e/2;return i.back?{x:i.x+i.w/2-t,y:n,z:i.z-i.d/2-r,size:e}:{x:i.x-i.w/2+t,y:n,z:i.z+i.d/2+r,size:e}}function Ay(i,e){let[t,n,r]=e,o=.006,s=null;for(let a of i)Math.abs(t-a.x)>a.w/2+o||Math.abs(r-a.z)>a.d/2+o||n<a.y-o||n>a.y+a.h+o||(!s||a.w*a.h*a.d<s.w*s.h*s.d)&&(s=a);return s?.slot.id??null}function up(i,e,t,n,r,o,s){let a=Ay(r,o);if(a||i.door!=="glass"&&i.door!=="mesh")return a;let[l,c,h]=o;if(!(h>=t/2-ip-.005&&Math.abs(l)<=e/2+.005&&c>=-.005&&c<=n+.005))return null;let f=.006,d=null;for(let p of r){let g=[p.x-p.w/2-f,p.y-f,p.z-p.d/2-f],b=[p.x+p.w/2+f,p.y+p.h+f,p.z+p.d/2+f],m=0,y=1/0;for(let v=0;v<3&&m<=y;v++){if(Math.abs(s[v])<1e-12){(o[v]<g[v]||o[v]>b[v])&&(m=1/0);continue}let x=(g[v]-o[v])/s[v],_=(b[v]-o[v])/s[v];m=Math.max(m,Math.min(x,_)),y=Math.min(y,Math.max(x,_))}m<=y&&(!d||m<d.t)&&(d={t:m,id:p.slot.id})}return d?.id??null}function pp(i,e){let t=Vi(e(i.type));return t?(n,r,o)=>Ny({frame:t,size:[i.w,i.d,i.h],slots:i.rack?.slots??[],itemOf:e,nameOf:n,title:r,statusOf:o}):null}var Ey=24,Ry=220,Wu=8,Da=30,ss=14,Py=9,hp=7,Xu=13,mp=7.6,Cy="system-ui, -apple-system, Segoe UI, Roboto, sans-serif",Yu={body:"#3a4457",fabric:"#4a5468",cushion:"#56617a",wood:"#7a5a3c",white:"#e6e9ee",metal:"#9aa3b2",dark:"#2a303c",glass:"#5b7fa0",plant:"#3f7a4f",pot:"#6b5a4a",accent:"#2bb3e0",paint:"#4a6ea8"},$u="#0d1017",Iy="#161a22",Ly="#07090d",fp="#7d8696",Na="#3a4150",Fy="#f2f5fa",dp="#a7b2c5",as=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),zt=i=>Math.round(i*10)/10+0,ky=i=>i&&/^#[0-9a-f]{3,8}$/i.test(i)?i:Yu[i??"body"]??Yu.body,Dy=(i,e)=>{let t=Math.max(3,Math.floor(e/mp));return i.length<=t?i:`${i.slice(0,t-1).trimEnd()}\u2026`},Oy=(i,e)=>!i.slot.on&&ka(i.item)?.depth==="full"||i.back===(e==="rear");function Ny(i){let{frame:e,slots:t,itemOf:n,nameOf:r}=i,o=i.face??"front",s=Math.max(.05,i.size[0]),a=Math.max(.005,i.size[2]),l=Gi(e,s,Math.max(.05,i.size[1]),a),c=Math.max(Ey/jr,Ry/l.panel),h=Math.round(s*c+2*Da),u=Math.round(a*c+2*Wu),f=S=>zt(Da+(S+s/2)*c),d=S=>zt(Wu+(a-S)*c),p=(S,M,A,E,T,P,F="")=>`<rect class="${S}" x="${f(M)}" y="${d(T)}" width="${zt((E-M)*c)}" height="${zt((T-A)*c)}" fill="${P}"${F}/>`,g=[`<rect x="0" y="0" width="${h}" height="${u}" rx="8" fill="${$u}"/>`];g.push(p("fp3d-el-rack",-s/2,0,s/2,a,Iy,` stroke="${Na}"`));let b=l.opening/2,m=l.panel/2;g.push(p("fp3d-el-opening",-b,l.bottom,b,l.top,Ly)),g.push(p("fp3d-el-rail",-m,l.bottom,-b,l.top,fp),p("fp3d-el-rail",b,l.bottom,m,l.top,fp));for(let S of l.units){S.index>0&&g.push(`<line x1="${f(-b)}" y1="${d(S.y0)}" x2="${f(b)}" y2="${d(S.y0)}" stroke="${Na}"/>`);let M=zt(d((S.y0+S.y1)/2)+Xu*.35);g.push(`<text class="fp3d-el-u fp3d-el-u-l" x="${Da-6}" y="${M}" font-size="${Xu}" text-anchor="end" fill="${dp}">${S.label}</text>`),g.push(`<text class="fp3d-el-u fp3d-el-u-r" x="${h-Da+6}" y="${M}" font-size="${Xu}" fill="${dp}">${S.label}</text>`)}let y=gr(l,t,n).filter(S=>Oy(S,o)),v=0,x=[];for(let S of y){v+=ka(S.item)?.u??0;let M=S.x-S.w/2,A=S.w*c,E=S.h*c,P=[...S.item.parts].sort((H,B)=>o==="front"?Oa(H)-Oa(B):Oa(B)-Oa(H)).map(H=>Uy(H,S,f,d,c,o)).join(""),F=r(S.slot,S.item),L=i.statusOf?.(S.slot)??null,O=Math.min(Py,E-4,A/4),C=!!L&&O>=3,k=Dy(F,A-20-(C?hp+O+4:0)),N=zt(d(S.y+S.h/2)+ss*.36),U=E>=ss+4?`<rect class="fp3d-el-tag" x="${zt(f(M)+6)}" y="${zt(N-ss)}" width="${zt(Math.min(A-12,k.length*mp+8))}" height="${ss+5}" rx="3" fill="${$u}" fill-opacity="0.75"/><text x="${zt(f(M)+10)}" y="${N}" font-size="${ss}" fill="${Fy}">${as(k)}</text>`:"",V=L&&C?`<rect class="fp3d-el-led fp3d-el-led-${L}" data-slot="${as(S.slot.id)}" x="${zt(f(M)+A-hp-O)}" y="${zt(d(S.y+S.h/2)-O/2)}" width="${zt(O)}" height="${zt(O)}" rx="2" fill="${Fa[L]}" stroke="${$u}"/>`:"";x.push({slot:S.slot.id,title:F,x:f(M),y:d(S.y+S.h),w:zt(A),h:zt(E)}),g.push(`<g class="fp3d-el-gear" data-slot="${as(S.slot.id)}"><rect class="fp3d-el-face" x="${f(M)}" y="${d(S.y+S.h)}" width="${zt(A)}" height="${zt(E)}" fill="${Yu.dark}" stroke="${Na}"/>${P}${U}${V}<title>${as(F)}</title></g>`)}let _=i.title??"Rack";return{svg:`<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${as(_)}" class="fp3d-elevation" viewBox="0 0 ${h} ${u}" width="${h}" height="${u}" font-family="${Cy}">${g.join("")}</svg>`,width:h,height:u,scale:c,pad:Wu,label:_,gear:x,pieces:y.length,used:v,u:e.u}}var Oa=i=>i.z+i.d/2;function Uy(i,e,t,n,r,o){let s=e.x+(o==="front"?i.x:-i.x)*e.w,a=e.y+(i.y+i.h/2)*e.h,l=i.w*e.w/2,c=i.h*e.h/2,h=ky(i.color),u=i.edges==="faint"?` stroke="${Na}"`:"";return i.shape==="sphere"||i.shape==="cyl"&&i.axis==="z"?`<ellipse class="fp3d-el-part" cx="${t(s)}" cy="${n(a)}" rx="${zt(l*r)}" ry="${zt(c*r)}" fill="${h}"${u}/>`:`<rect class="fp3d-el-part" x="${t(s-l)}" y="${n(a+c)}" width="${zt(2*l*r)}" height="${zt(2*c*r)}" fill="${h}"${u}/>`}var jp=0,Ih=1,Jp=2;var Lh=0,Rr=1,Qp=2,Io=3,hi=0,an=1,st=2,kn=0,Mn=1,Rt=2,Fh=3,Vs=4,em=5;var Pr=100,tm=101,nm=102,im=103,rm=104,om=200,sm=201,am=202,lm=203,kh=204,Dh=205,cm=206,um=207,hm=208,fm=209,dm=210,pm=211,mm=212,gm=213,bm=214,ml=0,gl=1,bl=2,xo=3,xl=4,yl=5,vl=6,_l=7,Gs=0,xm=1,ym=2,$n=0,Oh=1,Nh=2,Uh=3,Bh=4,zh=5,Vh=6,Gh=7;var Hh=300,er=301,Cr=302,Zl=303,jl=304,Hs=306,Mr=1e3,An=1001,Ml=1002,on=1003,vm=1004;var Ws=1005;var qt=1006,Jl=1007;var tr=1008;var wn=1009,Wh=1010,Xh=1011,Lo=1012,Ql=1013,Yn=1014,qn=1015,Kn=1016,ec=1017,tc=1018,Fo=1020,$h=35902,Yh=35899,qh=1021,Kh=1022,Dn=1023,oi=1026,nr=1027,Zh=1028,nc=1029,ir=1030,ic=1031;var rc=1033,Xs=33776,$s=33777,Ys=33778,qs=33779,oc=35840,sc=35841,ac=35842,lc=35843,cc=36196,uc=37492,hc=37496,fc=37488,dc=37489,Ks=37490,pc=37491,mc=37808,gc=37809,bc=37810,xc=37811,yc=37812,vc=37813,_c=37814,Mc=37815,wc=37816,Sc=37817,Tc=37818,Ac=37819,Ec=37820,Rc=37821,Pc=36492,Cc=36494,Ic=36495,Lc=36283,Fc=36284,Zs=36285,kc=36286;var bs=2300,wl=2301,fl=2302,yh=2303,vh=2400,_h=2401,Mh=2402;var _m=3200;var js=0,Mm=1,Ci="",Lt="srgb",xs="srgb-linear",ys="linear",Mt="srgb";var dl=7680;var wm=519,Sm=512,Tm=513,Am=514,Dc=515,Em=516,Rm=517,Oc=518,Pm=519,jh=35044,Jh=35048;var Qh="300 es",Wn=2e3,yo=2001;function By(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cm(){let i=vo("canvas");return i.style.display="block",i}var gp={},_o=null;function vs(...i){let e="THREE."+i.shift();_o?_o("log",e,...i):console.log(e,...i)}function Im(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ke(...i){i=Im(i);let e="THREE."+i.shift();if(_o)_o("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=Im(i);let e="THREE."+i.shift();if(_o)_o("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function _r(...i){let e=i.join(" ");e in gp||(gp[e]=!0,Ke(...i))}function Lm(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}var Fm={[ml]:gl,[bl]:vl,[xl]:_l,[xo]:yl,[gl]:ml,[vl]:bl,[_l]:xl,[yl]:xo},si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qu=Math.PI/180,Sl=180/Math.PI;function qi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function Vy(i,e){return(i%e+e)%e}function Ku(i,e,t){return(1-t)*i+t*e}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var of=class of{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};of.prototype.isVector2=!0;var Je=of,ai=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=o[s+0],d=o[s+1],p=o[s+2],g=o[s+3];if(u!==g||l!==f||c!==d||h!==p){let b=l*f+c*d+h*p+u*g;b<0&&(f=-f,d=-d,p=-p,g=-g,b=-b);let m=1-a;if(b<.9995){let y=Math.acos(b),v=Math.sin(y);m=Math.sin(m*y)/v,a=Math.sin(a*y)/v,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+g*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+g*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=o[s],f=o[s+1],d=o[s+2],p=o[s+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(o/2),f=l(n/2),d=l(r/2),p=l(o/2);switch(s){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(s-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(o+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(o-c)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(s-r)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+s*a+r*c-o*l,this._y=r*h+s*l+o*a-n*c,this._z=o*h+s*c+n*l-r*a,this._w=s*h-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sf=class sf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),h=2*(a*t-o*r),u=2*(o*n-s*t);return this.x=t+l*c+s*u-a*h,this.y=n+l*h+a*c-o*u,this.z=r+l*u+o*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zu.copy(this).projectOnVector(e),this.sub(Zu)}reflect(e){return this.sub(Zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sf.prototype.isVector3=!0;var $=sf,Zu=new $,bp=new ai,af=class af{constructor(e,t,n,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=o,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],g=r[0],b=r[3],m=r[6],y=r[1],v=r[4],x=r[7],_=r[2],w=r[5],S=r[8];return o[0]=s*g+a*y+l*_,o[3]=s*b+a*v+l*w,o[6]=s*m+a*x+l*S,o[1]=c*g+h*y+u*_,o[4]=c*b+h*v+u*w,o[7]=c*m+h*x+u*S,o[2]=f*g+d*y+p*_,o[5]=f*b+d*v+p*w,o[8]=f*m+d*x+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*a*c-n*o*h+n*a*l+r*o*c-r*s*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*s-a*c,f=a*l-h*o,d=c*o-s*l,p=t*u+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=u*g,e[1]=(r*c-h*n)*g,e[2]=(a*n-r*s)*g,e[3]=f*g,e[4]=(h*t-r*l)*g,e[5]=(r*o-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*o)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return _r("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ju.makeScale(e,t)),this}rotate(e){return _r("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ju.makeRotation(-e)),this}translate(e,t){return _r("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ju.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};af.prototype.isMatrix3=!0;var ot=af,ju=new ot,xp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gy(){let i={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Mt&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Mt&&(r.r=bo(r.r),r.g=bo(r.g),r.b=bo(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ci?ys:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return _r("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return _r("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xs]:{primaries:e,whitePoint:n,transfer:ys,toXYZ:xp,fromXYZ:yp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:xp,fromXYZ:yp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}var mt=Gy();function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Jr,Tl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jr===void 0&&(Jr=vo("canvas")),Jr.width=e.width,Jr.height=e.height;let r=Jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Jr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ri(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hy=0,Mo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Ju(r[s].image)):o.push(Ju(r[s]))}else o=Ju(r);n.url=o}return t||(e.images[this.uuid]=n),n}};function Ju(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}var Wy=0,Qu=new $,dn=class i extends si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=An,r=An,o=qt,s=tr,a=Dn,l=wn,c=i.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=qi(),this.name="",this.source=new Mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qu).x}get height(){return this.source.getSize(Qu).y}get depth(){return this.source.getSize(Qu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Hh;dn.DEFAULT_ANISOTROPY=1;var lf=class lf{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],g=l[2],b=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(p-b)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(p+b)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,x=(d+1)/2,_=(m+1)/2,w=(h+f)/4,S=(u+g)/4,M=(p+b)/4;return v>x&&v>_?v<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(v),r=w/n,o=S/n):x>_?x<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),n=w/r,o=M/r):_<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(_),n=S/o,r=M/o),this.set(n,r,o,t),this}let y=Math.sqrt((b-p)*(b-p)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(b-p)/y,this.y=(u-g)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lf.prototype.isVector4=!0;var Nt=lf,Al=class extends si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},o=new dn(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Mo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kt=class extends Al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_s=class extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var El=class extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Kl=class Kl{constructor(e,t,n,r,o,s,a,l,c,h,u,f,d,p,g,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,h,u,f,d,p,g,b)}set(e,t,n,r,o,s,a,l,c,h,u,f,d,p,g,b){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=o,m[5]=s,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=g,m[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),o=1/Qr.setFromMatrixColumn(e,1).length(),s=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),u=Math.sin(o);if(e.order==="XYZ"){let f=s*h,d=s*u,p=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=p+d*c,t[10]=s*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,g=c*u;t[0]=f+g*a,t[4]=p*a-d,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-a,t[2]=d*a-p,t[6]=g+f*a,t[10]=s*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,g=c*u;t[0]=f-g*a,t[4]=-s*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=s*h,t[9]=g-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){let f=s*h,d=s*u,p=a*h,g=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+g,t[1]=l*u,t[5]=g*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){let f=s*l,d=s*c,p=a*l,g=a*c;t[0]=l*h,t[4]=g-f*u,t[8]=p*u+d,t[1]=u,t[5]=s*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-g*u}else if(e.order==="XZY"){let f=s*l,d=s*c,p=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+g,t[5]=s*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xy,e,$y)}lookAt(e,t,n){let r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Hi.crossVectors(n,Sn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Hi.crossVectors(n,Sn)),Hi.normalize(),Ua.crossVectors(Sn,Hi),r[0]=Hi.x,r[4]=Ua.x,r[8]=Sn.x,r[1]=Hi.y,r[5]=Ua.y,r[9]=Sn.y,r[2]=Hi.z,r[6]=Ua.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],g=n[6],b=n[10],m=n[14],y=n[3],v=n[7],x=n[11],_=n[15],w=r[0],S=r[4],M=r[8],A=r[12],E=r[1],T=r[5],P=r[9],F=r[13],L=r[2],O=r[6],C=r[10],k=r[14],N=r[3],U=r[7],V=r[11],H=r[15];return o[0]=s*w+a*E+l*L+c*N,o[4]=s*S+a*T+l*O+c*U,o[8]=s*M+a*P+l*C+c*V,o[12]=s*A+a*F+l*k+c*H,o[1]=h*w+u*E+f*L+d*N,o[5]=h*S+u*T+f*O+d*U,o[9]=h*M+u*P+f*C+d*V,o[13]=h*A+u*F+f*k+d*H,o[2]=p*w+g*E+b*L+m*N,o[6]=p*S+g*T+b*O+m*U,o[10]=p*M+g*P+b*C+m*V,o[14]=p*A+g*F+b*k+m*H,o[3]=y*w+v*E+x*L+_*N,o[7]=y*S+v*T+x*O+_*U,o[11]=y*M+v*P+x*C+_*V,o[15]=y*A+v*F+x*k+_*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],g=e[7],b=e[11],m=e[15],y=l*d-c*f,v=a*d-c*u,x=a*f-l*u,_=s*d-c*h,w=s*f-l*h,S=s*u-a*h;return t*(g*y-b*v+m*x)-n*(p*y-b*_+m*w)+r*(p*v-g*_+m*S)-o*(p*x-g*w+b*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[1],s=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(s*h-a*c)-n*(o*h-a*l)+r*(o*c-s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],g=e[13],b=e[14],m=e[15],y=t*a-n*s,v=t*l-r*s,x=t*c-o*s,_=n*l-r*a,w=n*c-o*a,S=r*c-o*l,M=h*g-u*p,A=h*b-f*p,E=h*m-d*p,T=u*b-f*g,P=u*m-d*g,F=f*m-d*b,L=y*F-v*P+x*T+_*E-w*A+S*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/L;return e[0]=(a*F-l*P+c*T)*O,e[1]=(r*P-n*F-o*T)*O,e[2]=(g*S-b*w+m*_)*O,e[3]=(f*w-u*S-d*_)*O,e[4]=(l*E-s*F-c*A)*O,e[5]=(t*F-r*E+o*A)*O,e[6]=(b*x-p*S-m*v)*O,e[7]=(h*S-f*x+d*v)*O,e[8]=(s*P-a*E+c*M)*O,e[9]=(n*E-t*P-o*M)*O,e[10]=(p*w-g*x+m*y)*O,e[11]=(u*x-h*w-d*y)*O,e[12]=(a*A-s*T-l*M)*O,e[13]=(t*T-n*A+r*M)*O,e[14]=(g*v-p*_-b*y)*O,e[15]=(h*_-u*v+f*y)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,h=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*s,0,c*l-r*a,h*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,h=s+s,u=a+a,f=o*c,d=o*h,p=o*u,g=s*h,b=s*u,m=a*u,y=l*c,v=l*h,x=l*u,_=n.x,w=n.y,S=n.z;return r[0]=(1-(g+m))*_,r[1]=(d+x)*_,r[2]=(p-v)*_,r[3]=0,r[4]=(d-x)*w,r[5]=(1-(f+m))*w,r[6]=(b+y)*w,r[7]=0,r[8]=(p+v)*S,r[9]=(b-y)*S,r[10]=(1-(f+g))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),t.identity(),this;let s=Qr.set(r[0],r[1],r[2]).length(),a=Qr.set(r[4],r[5],r[6]).length(),l=Qr.set(r[8],r[9],r[10]).length();o<0&&(s=-s),zn.copy(this);let c=1/s,h=1/a,u=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,t.setFromRotationMatrix(zn),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,r,o,s,a=Wn,l=!1){let c=this.elements,h=2*o/(t-e),u=2*o/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r),p,g;if(l)p=o/(s-o),g=s*o/(s-o);else if(a===Wn)p=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===yo)p=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=Wn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-r),f=-(t+e)/(t-e),d=-(n+r)/(n-r),p,g;if(l)p=1/(s-o),g=s/(s-o);else if(a===Wn)p=-2/(s-o),g=-(s+o)/(s-o);else if(a===yo)p=-1/(s-o),g=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Kl.prototype.isMatrix4=!0;var wt=Kl,Qr=new $,zn=new wt,Xy=new $(0,0,0),$y=new $(1,1,1),Hi=new $,Ua=new $,Sn=new $,vp=new wt,_p=new ai,li=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-bt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _p.setFromEuler(this),this.setFromQuaternion(_p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var wo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yy=0,Mp=new $,eo=new ai,Mi=new wt,Ba=new $,ls=new $,qy=new $,Ky=new ai,wp=new $(1,0,0),Sp=new $(0,1,0),Tp=new $(0,0,1),Ap={type:"added"},Zy={type:"removed"},to={type:"childadded",child:null},eh={type:"childremoved",child:null},jt=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new $,t=new li,n=new ai,r=new $(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new ot}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(wp,e)}rotateY(e){return this.rotateOnAxis(Sp,e)}rotateZ(e){return this.rotateOnAxis(Tp,e)}translateOnAxis(e,t){return Mp.copy(e).applyQuaternion(this.quaternion),this.position.add(Mp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wp,e)}translateY(e){return this.translateOnAxis(Sp,e)}translateZ(e){return this.translateOnAxis(Tp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ba.copy(e):Ba.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(ls,Ba,this.up):Mi.lookAt(Ba,ls,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),eo.setFromRotationMatrix(Mi),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ap),to.child=e,this.dispatchEvent(to),to.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zy),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ap),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,qy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Ky,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*r,o[13]+=n-o[1]*t-o[5]*n-o[9]*r,o[14]+=r-o[2]*t-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];o(e.shapes,u)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){let a=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),f=s(e.skeletons),d=s(e.animations),p=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function s(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};jt.DEFAULT_UP=new $(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var At=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jy={type:"move"},So=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let g of e.hand.values()){let b=t.getJointPose(g,n),m=this._getHandJoint(c,g);b!==null&&(m.matrix.fromArray(b.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=b.radius),m.visible=b!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new At;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},za={h:0,s:0,l:0};function th(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var j=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=mt.workingColorSpace){if(e=Vy(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=th(s,o,e+1/3),this.g=th(s,o,e),this.b=th(s,o,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,t=Lt){function n(o){o!==void 0&&parseFloat(o)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=km[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return mt.workingToColorSpace(fn.copy(this),e),Math.round(bt(fn.r*255,0,255))*65536+Math.round(bt(fn.g*255,0,255))*256+Math.round(bt(fn.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(fn.copy(this),t);let n=fn.r,r=fn.g,o=fn.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,h=(a+s)/2;if(a===s)l=0,c=0;else{let u=s-a;switch(c=h<=.5?u/(s+a):u/(2-s-a),s){case n:l=(r-o)/u+(r<o?6:0);break;case r:l=(o-n)/u+2;break;case o:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Lt){mt.workingToColorSpace(fn.copy(this),e);let t=fn.r,n=fn.g,r=fn.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(za);let n=Ku(Wi.h,za.h,t),r=Ku(Wi.s,za.s,t),o=Ku(Wi.l,za.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new j;j.NAMES=km;var Ms=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new j(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ci=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vn=new $,wi=new $,nh=new $,Si=new $,no=new $,io=new $,Ep=new $,ih=new $,rh=new $,oh=new $,sh=new Nt,ah=new Nt,lh=new Nt,Ei=class i{constructor(e=new $,t=new $,n=new $){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vn.subVectors(e,t),r.cross(Vn);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Vn.subVectors(r,t),wi.subVectors(n,t),nh.subVectors(e,t);let s=Vn.dot(Vn),a=Vn.dot(wi),l=Vn.dot(nh),c=wi.dot(wi),h=wi.dot(nh),u=s*c-a*a;if(u===0)return o.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(s*h-a*l)*f;return o.set(1-d-p,p,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Si.x),l.addScaledVector(s,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return sh.setScalar(0),ah.setScalar(0),lh.setScalar(0),sh.fromBufferAttribute(e,t),ah.fromBufferAttribute(e,n),lh.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(sh,o.x),s.addScaledVector(ah,o.y),s.addScaledVector(lh,o.z),s}static isFrontFacing(e,t,n,r){return Vn.subVectors(n,t),wi.subVectors(e,t),Vn.cross(wi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Vn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,o=this.c,s,a;no.subVectors(r,n),io.subVectors(o,n),ih.subVectors(e,n);let l=no.dot(ih),c=io.dot(ih);if(l<=0&&c<=0)return t.copy(n);rh.subVectors(e,r);let h=no.dot(rh),u=io.dot(rh);if(h>=0&&u<=h)return t.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(n).addScaledVector(no,s);oh.subVectors(e,o);let d=no.dot(oh),p=io.dot(oh);if(p>=0&&d<=p)return t.copy(o);let g=d*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(io,a);let b=h*p-d*u;if(b<=0&&u-h>=0&&d-p>=0)return Ep.subVectors(o,r),a=(u-h)/(u-h+(d-p)),t.copy(r).addScaledVector(Ep,a);let m=1/(b+g+f);return s=g*m,a=f*m,t.copy(n).addScaledVector(no,s).addScaledVector(io,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_n=class{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Gn):Gn.fromBufferAttribute(o,s),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Va.copy(n.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),Ga.subVectors(this.max,cs),ro.subVectors(e.a,cs),oo.subVectors(e.b,cs),so.subVectors(e.c,cs),Xi.subVectors(oo,ro),$i.subVectors(so,oo),br.subVectors(ro,so);let t=[0,-Xi.z,Xi.y,0,-$i.z,$i.y,0,-br.z,br.y,Xi.z,0,-Xi.x,$i.z,0,-$i.x,br.z,0,-br.x,-Xi.y,Xi.x,0,-$i.y,$i.x,0,-br.y,br.x,0];return!ch(t,ro,oo,so,Ga)||(t=[1,0,0,0,1,0,0,0,1],!ch(t,ro,oo,so,Ga))?!1:(Ha.crossVectors(Xi,$i),t=[Ha.x,Ha.y,Ha.z],ch(t,ro,oo,so,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ti=[new $,new $,new $,new $,new $,new $,new $,new $],Gn=new $,Va=new _n,ro=new $,oo=new $,so=new $,Xi=new $,$i=new $,br=new $,cs=new $,Ga=new $,Ha=new $,xr=new $;function ch(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){xr.fromArray(i,o);let a=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),l=e.dot(xr),c=t.dot(xr),h=n.dot(xr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Yt=new $,Wa=new Je,Jy=0,vn=class extends si{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jh,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wa.fromBufferAttribute(this,t),Wa.applyMatrix3(e),this.setXY(t,Wa.x,Wa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),o=Tt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ws=class extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var wr=class extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _e=class extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Qy=new _n,us=new $,uh=new $,Ki=class{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Qy.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);let t=us.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(us,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(uh)),this.expandByPoint(us.copy(e.center).sub(uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ev=0,Ln=new wt,hh=new jt,ao=new $,Tn=new _n,hs=new _n,nn=new $,Ve=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(By(e)?wr:ws)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new ot().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new _e(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let o=t[n];Tn.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Tn.min,hs.min),Tn.expandByPoint(nn),nn.addVectors(Tn.max,hs.max),Tn.expandByPoint(nn)):(Tn.expandByPoint(hs.min),Tn.expandByPoint(hs.max))}Tn.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)nn.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(nn));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(ao.fromBufferAttribute(e,c),nn.add(ao)),r=Math.max(r,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,o=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new $,l[M]=new $;let c=new $,h=new $,u=new $,f=new Je,d=new Je,p=new Je,g=new $,b=new $;function m(M,A,E){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,E),f.fromBufferAttribute(o,M),d.fromBufferAttribute(o,A),p.fromBufferAttribute(o,E),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let T=1/(d.x*p.y-p.x*d.y);isFinite(T)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(T),b.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(T),a[M].add(g),a[A].add(g),a[E].add(g),l[M].add(b),l[A].add(b),l[E].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let M=0,A=y.length;M<A;++M){let E=y[M],T=E.start,P=E.count;for(let F=T,L=T+P;F<L;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let v=new $,x=new $,_=new $,w=new $;function S(M){_.fromBufferAttribute(r,M),w.copy(_);let A=a[M];v.copy(A),v.sub(_.multiplyScalar(_.dot(A))).normalize(),x.crossVectors(w,A);let T=x.dot(l[M])<0?-1:1;s.setXYZW(M,v.x,v.y,v.z,T)}for(let M=0,A=y.length;M<A;++M){let E=y[M],T=E.start,P=E.count;for(let F=T,L=T+P;F<L;F+=3)S(e.getX(F+0)),S(e.getX(F+1)),S(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new $,o=new $,s=new $,a=new $,l=new $,c=new $,h=new $,u=new $;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),g=e.getX(f+1),b=e.getX(f+2);r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,b),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(b,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let g=0,b=l.length;g<b;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new vn(f,h,u)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(r[l]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let o=e.morphAttributes;for(let c in o){let h=[],u=o[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,h=s.length;c<h;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jh,this.updateRanges=[],this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},yn=new $,Ss=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),o=Tt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){vs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){vs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fh=new $,tv=new $,nv=new ot,Hn=class{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=fh.subVectors(n,t).cross(tv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(fh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nv.getNormalMatrix(e),r=this.coplanarPoint(fh).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},iv=0,Fn=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Mn,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kh,this.blendDst=Dh,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dl,this.stencilZFail=dl,this.stencilZPass=dl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new j().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},To=class extends Fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lo,fs=new $,co=new $,uo=new $,ho=new Je,ds=new Je,Dm=new wt,Xa=new $,ps=new $,$a=new $,Rp=new Je,dh=new Je,Pp=new Je,Ts=class extends jt{constructor(e=new To){if(super(),this.isSprite=!0,this.type="Sprite",lo===void 0){lo=new Ve;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rl(t,5);lo.setIndex([0,1,2,0,2,3]),lo.setAttribute("position",new Ss(n,3,0,!1)),lo.setAttribute("uv",new Ss(n,2,3,!1))}this.geometry=lo,this.material=e,this.center=new Je(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),co.setFromMatrixScale(this.matrixWorld),Dm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),uo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&co.multiplyScalar(-uo.z);let n=this.material.rotation,r,o;n!==0&&(o=Math.cos(n),r=Math.sin(n));let s=this.center;Ya(Xa.set(-.5,-.5,0),uo,s,co,r,o),Ya(ps.set(.5,-.5,0),uo,s,co,r,o),Ya($a.set(.5,.5,0),uo,s,co,r,o),Rp.set(0,0),dh.set(1,0),Pp.set(1,1);let a=e.ray.intersectTriangle(Xa,ps,$a,!1,fs);if(a===null&&(Ya(ps.set(-.5,.5,0),uo,s,co,r,o),dh.set(0,1),a=e.ray.intersectTriangle(Xa,$a,ps,!1,fs),a===null))return;let l=e.ray.origin.distanceTo(fs);l<e.near||l>e.far||t.push({distance:l,point:fs.clone(),uv:Ei.getInterpolation(fs,Xa,ps,$a,Rp,dh,Pp,new Je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ya(i,e,t,n,r,o){ho.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(ds.x=o*ho.x-r*ho.y,ds.y=r*ho.x+o*ho.y):ds.copy(ho),i.copy(e),i.x+=ds.x,i.y+=ds.y,i.applyMatrix4(Dm)}var Ai=new $,ph=new $,qa=new $,Ka=new $,Sr=class{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ph.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),Ka.copy(this.origin).sub(ph);let o=e.distanceTo(t)*.5,s=-this.direction.dot(qa),a=Ka.dot(this.direction),l=-Ka.dot(qa),c=Ka.lengthSq(),h=Math.abs(1-s*s),u,f,d,p;if(h>0)if(u=s*l-a,f=s*a-l,p=o*h,u>=0)if(f>=-p)if(f<=p){let g=1/h;u*=g,f*=g,d=u*(u+s*f+2*a)+f*(s*u+f+2*l)+c}else f=o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-s*o+a)),f=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+c):(u=Math.max(0,-(s*o+a)),f=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c);else f=s>0?-o:o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ph).addScaledVector(qa,f),d}intersectSphere(e,t){if(e.radius<0)return null;Ai.subVectors(e.center,this.origin);let n=Ai.dot(this.direction),r=Ai.dot(Ai)-n*n,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(o=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(o=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-s.x,f=e.y-s.y,d=e.z-s.z,p=t.x-s.x,g=t.y-s.y,b=t.z-s.z,m=n.x-s.x,y=n.y-s.y,v=n.z-s.z,x=Math.abs(l),_=Math.abs(c),w=Math.abs(h),S,M,A,E,T,P,F,L,O,C,k,N;if(x>=_&&x>=w?(A=l,P=u,O=p,N=m,l>=0?(S=c,M=h,E=f,T=d,F=g,L=b,C=y,k=v):(S=h,M=c,E=d,T=f,F=b,L=g,C=v,k=y)):_>=w?(A=c,P=f,O=g,N=y,c>=0?(S=h,M=l,E=d,T=u,F=b,L=p,C=v,k=m):(S=l,M=h,E=u,T=d,F=p,L=b,C=m,k=v)):(A=h,P=d,O=b,N=v,h>=0?(S=l,M=c,E=u,T=f,F=p,L=g,C=m,k=y):(S=c,M=l,E=f,T=u,F=g,L=p,C=y,k=m)),A===0)return null;let U=S/A,V=M/A,H=1/A,B=E-U*P,z=T-V*P,q=F-U*O,X=L-V*O,ee=C-U*N,W=k-V*N,Y=ee*X-W*q,ie=B*W-z*ee,re=q*z-X*B;if(r){if(Y<0||ie<0||re<0)return null}else if((Y<0||ie<0||re<0)&&(Y>0||ie>0||re>0))return null;let te=Y+ie+re;if(te===0)return null;let he=H*(Y*P+ie*O+re*N);return(te>0?he<0:he>0)?null:this.at(he/te,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Cp=new wt,yr=new Sr,Za=new Ki,Ip=new $,ja=new $,Ja=new $,Qa=new $,mh=new $,el=new $,Lp=new $,tl=new $,Me=class extends jt{constructor(e=new Ve,t=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){el.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],u=o[l];h!==0&&(mh.fromBufferAttribute(u,e),s?el.addScaledVector(mh,h):el.addScaledVector(mh.sub(t),h))}t.add(el)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(o),yr.copy(e.ray).recast(e.near),!(Za.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Za,Ip)===null||yr.origin.distanceToSquared(Ip)>(e.far-e.near)**2))&&(Cp.copy(o).invert(),yr.copy(e.ray).applyMatrix4(Cp),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,g=f.length;p<g;p++){let b=f[p],m=s[b.materialIndex],y=Math.max(b.start,d.start),v=Math.min(a.count,Math.min(b.start+b.count,d.start+d.count));for(let x=y,_=v;x<_;x+=3){let w=a.getX(x),S=a.getX(x+1),M=a.getX(x+2);r=nl(this,m,e,n,c,h,u,w,S,M),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=b.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let b=p,m=g;b<m;b+=3){let y=a.getX(b),v=a.getX(b+1),x=a.getX(b+2);r=nl(this,s,e,n,c,h,u,y,v,x),r&&(r.faceIndex=Math.floor(b/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,g=f.length;p<g;p++){let b=f[p],m=s[b.materialIndex],y=Math.max(b.start,d.start),v=Math.min(l.count,Math.min(b.start+b.count,d.start+d.count));for(let x=y,_=v;x<_;x+=3){let w=x,S=x+1,M=x+2;r=nl(this,m,e,n,c,h,u,w,S,M),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=b.materialIndex,t.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let b=p,m=g;b<m;b+=3){let y=b,v=b+1,x=b+2;r=nl(this,s,e,n,c,h,u,y,v,x),r&&(r.faceIndex=Math.floor(b/3),t.push(r))}}}};function rv(i,e,t,n,r,o,s,a){let l;if(e.side===an?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===hi,a),l===null)return null;tl.copy(a),tl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(tl);return c<t.near||c>t.far?null:{distance:c,point:tl.clone(),object:i}}function nl(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,ja),i.getVertexPosition(l,Ja),i.getVertexPosition(c,Qa);let h=rv(i,e,t,n,ja,Ja,Qa,Lp);if(h){let u=new $;Ei.getBarycoord(Lp,ja,Ja,Qa,u),r&&(h.uv=Ei.getInterpolatedAttribute(r,a,l,c,u,new Je)),o&&(h.uv1=Ei.getInterpolatedAttribute(o,a,l,c,u,new Je)),s&&(h.normal=Ei.getInterpolatedAttribute(s,a,l,c,u,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new $,materialIndex:0};Ei.getNormal(ja,Ja,Qa,f.normal),h.face=f,h.barycoord=u}return h}var Pl=class extends dn{constructor(e=null,t=1,n=1,r,o,s,a,l,c=on,h=on,u,f){super(null,s,a,l,c,h,r,o,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=new Ki,ov=new Je(.5,.5),il=new $,Ao=class{constructor(e=new Hn,t=new Hn,n=new Hn,r=new Hn,o=new Hn,s=new Hn){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn,n=!1){let r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],c=o[3],h=o[4],u=o[5],f=o[6],d=o[7],p=o[8],g=o[9],b=o[10],m=o[11],y=o[12],v=o[13],x=o[14],_=o[15];if(r[0].setComponents(c-s,d-h,m-p,_-y).normalize(),r[1].setComponents(c+s,d+h,m+p,_+y).normalize(),r[2].setComponents(c+a,d+u,m+g,_+v).normalize(),r[3].setComponents(c-a,d-u,m-g,_-v).normalize(),n)r[4].setComponents(l,f,b,x).normalize(),r[5].setComponents(c-l,d-f,m-b,_-x).normalize();else if(r[4].setComponents(c-l,d-f,m-b,_-x).normalize(),t===Wn)r[5].setComponents(c+l,d+f,m+b,_+x).normalize();else if(t===yo)r[5].setComponents(l,f,b,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);let t=ov.distanceTo(e.center);return vr.radius=.7071067811865476+t,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(il.x=r.normal.x>0?e.max.x:e.min.x,il.y=r.normal.y>0?e.max.y:e.min.y,il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Jt=class extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new j(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Cl=new $,Il=new $,Fp=new wt,ms=new Sr,rl=new Ki,gh=new $,kp=new $,Ll=class extends jt{constructor(e=new Ve,t=new Jt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)Cl.fromBufferAttribute(t,r-1),Il.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Cl.distanceTo(Il);e.setAttribute("lineDistance",new _e(n,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(r),rl.radius+=o,e.ray.intersectsSphere(rl)===!1)return;Fp.copy(r).invert(),ms.copy(e.ray).applyMatrix4(Fp);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let g=d,b=p-1;g<b;g+=c){let m=h.getX(g),y=h.getX(g+1),v=ol(this,e,ms,l,m,y,g);v&&t.push(v)}if(this.isLineLoop){let g=h.getX(p-1),b=h.getX(d),m=ol(this,e,ms,l,g,b,p-1);m&&t.push(m)}}else{let d=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let g=d,b=p-1;g<b;g+=c){let m=ol(this,e,ms,l,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){let g=ol(this,e,ms,l,p-1,d,p-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function ol(i,e,t,n,r,o,s){let a=i.geometry.attributes.position;if(Cl.fromBufferAttribute(a,r),Il.fromBufferAttribute(a,o),t.distanceSqToSegment(Cl,Il,gh,kp)>n)return;gh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(gh);if(!(c<e.near||c>e.far))return{distance:c,point:kp.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Dp=new $,Op=new $,Ht=class extends Ll{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)Dp.fromBufferAttribute(t,r),Op.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Dp.distanceTo(Op);e.setAttribute("lineDistance",new _e(n,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Pi=class extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Np=new wt,wh=new Sr,sl=new Ki,al=new $,Zi=class extends jt{constructor(e=new Ve,t=new Pi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(r),sl.radius+=o,e.ray.intersectsSphere(sl)===!1)return;Np.copy(r).invert(),wh.copy(e.ray).applyMatrix4(Np);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let p=f,g=d;p<g;p++){let b=c.getX(p);al.fromBufferAttribute(u,b),Up(al,b,l,r,e,t,this)}}else{let f=Math.max(0,s.start),d=Math.min(u.count,s.start+s.count);for(let p=f,g=d;p<g;p++)al.fromBufferAttribute(u,p),Up(al,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Up(i,e,t,n,r,o,s){let a=wh.distanceSqToPoint(i);if(a<t){let l=new $;wh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var As=class extends dn{constructor(e=[],t=er,n,r,o,s,a,l,c,h){super(e,t,n,r,o,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pn=class extends dn{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ui=class extends dn{constructor(e,t,n=Yn,r,o,s,a=on,l=on,c,h=oi,u=1){if(h!==oi&&h!==nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,r,o,s,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fl=class extends ui{constructor(e,t=Yn,n=er,r,o,s=on,a=on,l,c=oi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,r,o,s,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Es=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Eo=class i extends Ve{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,s,o,0),p("z","y","x",1,-1,n,t,-e,s,o,1),p("x","z","y",1,1,e,n,t,r,s,2),p("x","z","y",1,-1,e,n,-t,r,s,3),p("x","y","z",1,-1,e,t,n,r,o,4),p("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2));function p(g,b,m,y,v,x,_,w,S,M,A){let E=x/S,T=_/M,P=x/2,F=_/2,L=w/2,O=S+1,C=M+1,k=0,N=0,U=new $;for(let V=0;V<C;V++){let H=V*T-F;for(let B=0;B<O;B++){let z=B*E-P;U[g]=z*y,U[b]=H*v,U[m]=L,c.push(U.x,U.y,U.z),U[g]=0,U[b]=0,U[m]=w>0?1:-1,h.push(U.x,U.y,U.z),u.push(B/S),u.push(1-V/M),k+=1}}for(let V=0;V<M;V++)for(let H=0;H<S;H++){let B=f+H+O*V,z=f+H+O*(V+1),q=f+(H+1)+O*(V+1),X=f+(H+1)+O*V;l.push(B,z,X),l.push(z,q,X),N+=6}a.addGroup(d,N,A),d+=N,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Tr=class i extends Ve{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let o=[],s=[],a=[],l=[],c=new $,h=new Je;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),s.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(s[f]/e+1)/2,h.y=(s[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new _e(s,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}};function sv(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,o=Om(i,0,r,t,!0),s=[];if(!o||o.next===o.prev)return s;let a,l,c;if(n&&(o=hv(i,e,o,t)),i.length>80*t){a=i[0],l=i[1];let h=a,u=l;for(let f=t;f<r;f+=t){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Rs(o,s,t,a,l,c,0),s}function Om(i,e,t,n,r){let o;if(r===Mv(i,e,t,n)>0)for(let s=e;s<t;s+=n)o=Bp(s/n|0,i[s],i[s+1],o);else for(let s=t-n;s>=e;s-=n)o=Bp(s/n|0,i[s],i[s+1],o);return o&&Ro(o,o.next)&&(Cs(o),o=o.next),o}function Ar(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ro(t,t.next)||Bt(t.prev,t,t.next)===0)){if(Cs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Rs(i,e,t,n,r,o,s){if(!i)return;!s&&o&&gv(i,n,r,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?lv(i,n,r,o):av(i)){e.push(l.i,i.i,c.i),Cs(i),i=c.next,a=c.next;continue}if(i=c,i===a){s?s===1?(i=cv(Ar(i),e),Rs(i,e,t,n,r,o,2)):s===2&&uv(i,e,t,n,r,o):Rs(Ar(i),e,t,n,r,o,1);break}}}function av(i){let e=i.prev,t=i,n=i.next;if(Bt(e,t,n)>=0)return!1;let r=e.x,o=t.x,s=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(r,o,s),u=Math.min(a,l,c),f=Math.max(r,o,s),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&gs(r,a,o,l,s,c,p.x,p.y)&&Bt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function lv(i,e,t,n){let r=i.prev,o=i,s=i.next;if(Bt(r,o,s)>=0)return!1;let a=r.x,l=o.x,c=s.x,h=r.y,u=o.y,f=s.y,d=Math.min(a,l,c),p=Math.min(h,u,f),g=Math.max(a,l,c),b=Math.max(h,u,f),m=Sh(d,p,e,t,n),y=Sh(g,b,e,t,n),v=i.prevZ,x=i.nextZ;for(;v&&v.z>=m&&x&&x.z<=y;){if(v.x>=d&&v.x<=g&&v.y>=p&&v.y<=b&&v!==r&&v!==s&&gs(a,h,l,u,c,f,v.x,v.y)&&Bt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=g&&x.y>=p&&x.y<=b&&x!==r&&x!==s&&gs(a,h,l,u,c,f,x.x,x.y)&&Bt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=g&&v.y>=p&&v.y<=b&&v!==r&&v!==s&&gs(a,h,l,u,c,f,v.x,v.y)&&Bt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=g&&x.y>=p&&x.y<=b&&x!==r&&x!==s&&gs(a,h,l,u,c,f,x.x,x.y)&&Bt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function cv(i,e){let t=i;do{let n=t.prev,r=t.next.next;!Ro(n,r)&&Um(n,t,t.next,r)&&Ps(n,r)&&Ps(r,n)&&(e.push(n.i,t.i,r.i),Cs(t),Cs(t.next),t=i=r),t=t.next}while(t!==i);return Ar(t)}function uv(i,e,t,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&yv(s,a)){let l=Bm(s,a);s=Ar(s,s.next),l=Ar(l,l.next),Rs(s,e,t,n,r,o,0),Rs(l,e,t,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function hv(i,e,t,n){let r=[];for(let o=0,s=e.length;o<s;o++){let a=e[o]*n,l=o<s-1?e[o+1]*n:i.length,c=Om(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(xv(c))}r.sort(fv);for(let o=0;o<r.length;o++)t=dv(r[o],t);return t}function fv(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function dv(i,e){let t=pv(i,e);if(!t)return e;let n=Bm(t,i);return Ar(n,n.next),Ar(t,t.next)}function pv(i,e){let t=e,n=i.x,r=i.y,o=-1/0,s;if(Ro(i,t))return t;do{if(Ro(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>o&&(o=u,s=t.x<t.next.x?t:t.next,u===n))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0;t=s;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Nm(r<c?n:o,r,l,c,r<c?o:n,r,t.x,t.y)){let u=Math.abs(r-t.y)/(n-t.x);Ps(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&mv(s,t)))&&(s=t,h=u)}t=t.next}while(t!==a);return s}function mv(i,e){return Bt(i.prev,i,e.prev)<0&&Bt(e.next,i,i.next)<0}function gv(i,e,t,n){let r=i;do r.z===0&&(r.z=Sh(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,bv(r)}function bv(i){let e,t=1;do{let n=i,r;i=null;let o=null;for(e=0;n;){e++;let s=n,a=0;for(let c=0;c<t&&(a++,s=s.nextZ,!!s);c++);let l=t;for(;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,l--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,t*=2}while(e>1);return i}function Sh(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function xv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Nm(i,e,t,n,r,o,s,a){return(r-s)*(e-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(t-s)*(e-a)&&(t-s)*(o-a)>=(r-s)*(n-a)}function gs(i,e,t,n,r,o,s,a){return!(i===s&&e===a)&&Nm(i,e,t,n,r,o,s,a)}function yv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!vv(i,e)&&(Ps(i,e)&&Ps(e,i)&&_v(i,e)&&(Bt(i.prev,i,e.prev)||Bt(i,e.prev,e))||Ro(i,e)&&Bt(i.prev,i,i.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ro(i,e){return i.x===e.x&&i.y===e.y}function Um(i,e,t,n){let r=cl(Bt(i,e,t)),o=cl(Bt(i,e,n)),s=cl(Bt(t,n,i)),a=cl(Bt(t,n,e));return!!(r!==o&&s!==a||r===0&&ll(i,t,e)||o===0&&ll(i,n,e)||s===0&&ll(t,i,n)||a===0&&ll(t,e,n))}function ll(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function cl(i){return i>0?1:i<0?-1:0}function vv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Um(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ps(i,e){return Bt(i.prev,i,i.next)<0?Bt(i,e,i.next)>=0&&Bt(i,i.prev,e)>=0:Bt(i,e,i.prev)<0||Bt(i,i.next,e)<0}function _v(i,e){let t=i,n=!1,r=(i.x+e.x)/2,o=(i.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Bm(i,e){let t=Th(i.i,i.x,i.y),n=Th(e.i,e.x,e.y),r=i.next,o=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function Bp(i,e,t,n){let r=Th(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Cs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Th(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mv(i,e,t,n){let r=0;for(let o=e,s=t-n;o<t;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}var Ah=class{static triangulate(e,t,n=2){return sv(e,t,n)}},Is=class i{static area(e){let t=e.length,n=0;for(let r=t-1,o=0;o<t;r=o++)n+=e[r].x*e[o].y-e[o].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],o=[];zp(e),Vp(n,e);let s=e.length;t.forEach(zp);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,Vp(n,t[l]);let a=Ah.triangulate(n,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function zp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Vp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Xn=class i extends Ve{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],g=[],b=[];for(let m=0;m<h;m++){let y=m*f-s;for(let v=0;v<c;v++){let x=v*u-o;p.push(x,-y,0),g.push(0,0,1),b.push(v/a),b.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let v=y+c*m,x=y+c*(m+1),_=y+1+c*(m+1),w=y+1+c*m;d.push(v,x,w),d.push(x,_,w)}this.setIndex(d),this.setAttribute("position",new _e(p,3)),this.setAttribute("normal",new _e(g,3)),this.setAttribute("uv",new _e(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ls=class i extends Ve{constructor(e=.5,t=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/r,d=new $,p=new Je;for(let g=0;g<=r;g++){for(let b=0;b<=n;b++){let m=o+b/n*s;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let g=0;g<r;g++){let b=g*(n+1);for(let m=0;m<n;m++){let y=m+b,v=y,x=y+n+1,_=y+n+2,w=y+1;a.push(v,x,w),a.push(x,_,w)}}this.setIndex(a),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};function Ir(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Gp(r))r.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Gp(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();e[t][n]=o}else e[t][n]=r.slice();else e[t][n]=r}}return e}function gn(i){let e={};for(let t=0;t<i.length;t++){let n=Ir(i[t]);for(let r in n)e[r]=n[r]}return e}function Gp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wv(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ef(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var zm={clone:Ir,merge:gn},Sv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sv,this.fragmentShader=Tv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=wv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new j().setHex(r.value);break;case"v2":this.uniforms[n].value=new Je().fromArray(r.value);break;case"v3":this.uniforms[n].value=new $().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ot().fromArray(r.value);break;case"m4":this.uniforms[n].value=new wt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},kl=class extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Fs=class extends Fn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new j(16777215),this.specular=new j(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=js,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Gs,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ks=class extends Fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=js,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Gs,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Po=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Dl=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function bh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ji=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],o=t[n-1];n:{e:{let s;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=t[++n],e<r)break e}s=t.length;break t}if(!(e>=o)){let a=t[1];e<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=o,o=t[--n-1],e>=o)break e}s=n,n=0;break t}break n}for(;n<s;){let a=n+s>>>1;e<t[a]?s=a:n=a+1}if(r=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=n[o+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ol=class extends ji{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vh,endingEnd:vh}}intervalChanged_(e,t,n){let r=this.parameterPositions,o=e-2,s=e+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case _h:o=e,a=2*t-n;break;case Mh:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _h:s=e,l=2*n-t;break;case Mh:s=1,l=n+r[1]-r[0];break;default:s=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=s*h}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(r-t),g=p*p,b=g*p,m=-f*b+2*f*g-f*p,y=(1+f)*b+(-1.5-2*f)*g+(-.5+f)*p+1,v=(-1-d)*b+(1.5+d)*g+.5*p,x=d*b-d*g;for(let _=0;_!==a;++_)o[_]=m*s[h+_]+y*s[c+_]+v*s[l+_]+x*s[u+_];return o}},Nl=class extends ji{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(r-t),u=1-h;for(let f=0;f!==a;++f)o[f]=s[c+f]*u+s[l+f]*h;return o}},Ul=class extends ji{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Bl=class extends ji{interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(r-t),g=1-p;for(let b=0;b!==a;++b)o[b]=s[c+b]*g+s[l+b]*p;return o}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let g=s[c+p],b=s[l+p],m=d*f+p*2,y=u[m],v=u[m+1],x=e*f+p*2,_=h[x],w=h[x+1],S=Ev(n,t,y,_,r);o[p]=Vm(S,g,v,w,b)}return o}};function Vm(i,e,t,n,r){let o=1-i;return o*o*o*e+3*o*o*i*t+3*o*i*i*n+i*i*i*r}function Av(i,e,t,n,r){let o=1-i;return 3*o*o*(t-e)+6*o*i*(n-t)+3*i*i*(r-n)}function Ev(i,e,t,n,r){let o=(i-e)/(r-e);for(let s=0;s<8;s++){let a=Vm(o,e,t,n,r)-i;if(Math.abs(a)<1e-10)break;let l=Av(o,e,t,n,r);if(Math.abs(l)<1e-10)break;o=Math.max(0,Math.min(1,o-a/l))}return o}var En=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fo(t,this.TimeBufferType),this.values=fo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fo(e.times,Array),values:fo(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),bh(e.settings)&&(n.settings={inTangents:fo(e.settings.inTangents,Array),outTangents:fo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case wl:t=this.InterpolantFactoryMethodLinear;break;case fl:t=this.InterpolantFactoryMethodSmooth;break;case yh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return wl;case this.InterpolantFactoryMethodSmooth:return fl;case this.InterpolantFactoryMethodBezier:return yh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;bh(this.settings)&&(Hp(this.settings.inTangents,e),Hp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<e;)++o;for(;s!==-1&&n[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,o=n.length;o===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){je("KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(r!==void 0&&zy(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===fl,o=e.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let g=t[u+p];if(g!==t[f+p]||g!==t[d+p]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];let u=a*n,f=s*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++s}}if(o>0){e[s]=e[o];for(let a=o*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,bh(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Hp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=wl;var Ji=class extends En{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=bs;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends En{constructor(e,t,n,r){super(e,t,n,r)}};zl.prototype.ValueTypeName="color";var Vl=class extends En{constructor(e,t,n,r){super(e,t,n,r)}};Vl.prototype.ValueTypeName="number";var Gl=class extends ji{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let h=c+a;c!==h;c+=4)ai.slerpFlat(o,0,s,c-a,s,c,l);return o}},Ds=class extends En{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Gl(this.times,this.values,this.getValueSize(),e)}};Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends En{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=bs;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends En{constructor(e,t,n,r){super(e,t,n,r)}};Hl.prototype.ValueTypeName="vector";var pl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Wp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Wp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Wp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Wl=class{constructor(e,t,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&r.onStart!==void 0&&r.onStart(h,s,a),o=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gm=new Wl,Co=class{constructor(e){this.manager=e!==void 0?e:Gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Co.DEFAULT_MATERIAL_NAME="__DEFAULT";var po=new WeakMap,Xl=class extends Co{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,s=pl.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let u=po.get(s);u===void 0&&(u=[],po.set(s,u)),u.push({onLoad:t,onError:r})}return s}let a=vo("img");function l(){h(),t&&t(this);let u=po.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}po.delete(this),o.manager.itemEnd(e)}function c(u){h(),r&&r(u),pl.remove(`image:${e}`);let f=po.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}po.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),pl.add(`image:${e}`,a),o.manager.itemStart(e),a.src=e,a}};var Er=class extends Co{constructor(e){super(e)}load(e,t,n,r){let o=new dn,s=new Xl(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}},Os=class extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new j(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ns=class extends Os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new j(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},xh=new wt,Xp=new $,$p=new $,$l=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Xp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xp),$p.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($p),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){xh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xh,e.coordinateSystem,e.reversedDepth);let o=this._frameExtents,s=r?r.z/o.x:1,a=r?r.w/o.y:1,l=r?r.x/o.x:0,c=r?r.y/o.y:0;e.coordinateSystem===yo||e.reversedDepth?t.set(.5*s,0,0,.5*s+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ul=new $,hl=new ai,ii=new $,Us=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ul,hl,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ul,hl,ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ul,hl,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ul,hl,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yi=new $,Yp=new Je,qp=new Je,rn=class extends Us{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Sl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sl*2*Math.atan(Math.tan(qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Yp,qp),t.subVectors(qp,Yp)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qu*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Rn=class extends Us{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Eh=class extends $l{constructor(){super(new Rn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bs=class extends Os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new Eh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var mo=-90,go=1,Yl=class extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new rn(mo,go,e,t);r.layers=this.layers,this.add(r);let o=new rn(mo,go,e,t);o.layers=this.layers,this.add(o);let s=new rn(mo,go,e,t);s.layers=this.layers,this.add(s);let a=new rn(mo,go,e,t);a.layers=this.layers,this.add(a);let l=new rn(mo,go,e,t);l.layers=this.layers,this.add(l);let c=new rn(mo,go,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(let c of t)this.remove(c);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ql=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var tf="\\[\\]\\.:\\/",Rv=new RegExp("["+tf+"]","g"),nf="[^"+tf+"]",Pv="[^"+tf.replace("\\.","")+"]",Cv=/((?:WC+[\/:])*)/.source.replace("WC",nf),Iv=/(WCOD+)?/.source.replace("WCOD",Pv),Lv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nf),Fv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nf),kv=new RegExp("^"+Cv+Iv+Lv+Fv+"$"),Dv=["material","materials","bones","map"],Rh=class{constructor(e,t,n){let r=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rv,"")}static parseTrackName(e){let t=kv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);Dv.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,o=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[r];if(s===void 0){let c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=Rh;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tR=new Float32Array(1);var Kp=new wt,zs=class{constructor(e,t,n=0,r=1/0){this.ray=new Sr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kp),this}intersectObject(e,t=!0,n=[]){return Ph(e,this,n,t),n.sort(Zp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)Ph(e[r],this,n,t);return n.sort(Zp),n}};function Zp(i,e){return i.distance-e.distance}function Ph(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)Ph(o[s],e,t,!0)}}var cf=class cf{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let o=this.elements;return o[0]=e,o[2]=t,o[1]=n,o[3]=r,this}};cf.prototype.isMatrix2=!0;var Ch=cf;function rf(i,e,t,n){let r=Ov(n);switch(t){case qh:return i*e;case Zh:return i*e/r.components*r.byteLength;case nc:return i*e/r.components*r.byteLength;case ir:return i*e*2/r.components*r.byteLength;case ic:return i*e*2/r.components*r.byteLength;case Kh:return i*e*3/r.components*r.byteLength;case Dn:return i*e*4/r.components*r.byteLength;case rc:return i*e*4/r.components*r.byteLength;case Xs:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ys:case qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:case lc:return Math.max(i,16)*Math.max(e,8)/4;case oc:case ac:return Math.max(i,8)*Math.max(e,8)/2;case cc:case uc:case fc:case dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hc:case Ks:case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pc:case Cc:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lc:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zs:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ov(i){switch(i){case wn:case Wh:return{byteLength:1,components:1};case Lo:case Xh:case Kn:return{byteLength:2,components:1};case ec:case tc:return{byteLength:2,components:4};case Yn:case Ql:case qn:return{byteLength:4,components:1};case $h:case Yh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function u0(){let i=null,e=!1,t=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),t(o,s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Uv(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],g=u[d];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let g=u[d];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var Bv=`#ifdef USE_ALPHAHASH
if(diffuseColor.a < getAlphaHashThreshold(vPosition))discard;
#endif`,zv=`#ifdef USE_ALPHAHASH
const float ALPHA_HASH_SCALE = 0.05;
float hash2D(vec2 value){
return fract(1.0e4 * sin(17.0 * value.x + 0.1 * value.y)*(0.1 + abs(sin(13.0 * value.y + value.x))));
}
float hash3D(vec3 value){
return hash2D(vec2(hash2D(value.xy),value.z));
}
float getAlphaHashThreshold(vec3 position){
float maxDeriv = max(
length(dFdx(position.xyz)),
length(dFdy(position.xyz))
);
float pixScale = 1.0 /(ALPHA_HASH_SCALE * maxDeriv);
vec2 pixScales = vec2(
exp2(floor(log2(pixScale))),
exp2(ceil(log2(pixScale)))
);
vec2 alpha = vec2(
hash3D(floor(pixScales.x * position.xyz)),
hash3D(floor(pixScales.y * position.xyz))
);
float lerpFactor = fract(log2(pixScale));
float x =(1.0 - lerpFactor)* alpha.x + lerpFactor * alpha.y;
float a = min(lerpFactor,1.0 - lerpFactor);
vec3 cases = vec3(
x * x /(2.0 * a *(1.0 - a)),
(x - 0.5 * a)/(1.0 - a),
1.0 -((1.0 - x)*(1.0 - x)/(2.0 * a *(1.0 - a)))
);
float threshold =(x <(1.0 - a))
?((x < a)? cases.x : cases.y)
: cases.z;
return clamp(threshold,1.0e-6,1.0);
}
#endif`,Vv=`#ifdef USE_ALPHAMAP
diffuseColor.a *= texture2D(alphaMap,vAlphaMapUv).g;
#endif`,Gv=`#ifdef USE_ALPHAMAP
uniform sampler2D alphaMap;
#endif`,Hv=`#ifdef USE_ALPHATEST
#ifdef ALPHA_TO_COVERAGE
diffuseColor.a = smoothstep(alphaTest,alphaTest + fwidth(diffuseColor.a),diffuseColor.a);
if(diffuseColor.a == 0.0)discard;
#else
if(diffuseColor.a < alphaTest)discard;
#endif
#endif`,Wv=`#ifdef USE_ALPHATEST
uniform float alphaTest;
#endif`,Xv=`#ifdef USE_AOMAP
float ambientOcclusion =(texture2D(aoMap,vAoMapUv).r - 1.0)* aoMapIntensity + 1.0;
reflectedLight.indirectDiffuse *= ambientOcclusion;
#if defined( USE_CLEARCOAT )
clearcoatSpecularIndirect *= ambientOcclusion;
#endif
#if defined( USE_SHEEN )
sheenSpecularIndirect *= ambientOcclusion;
#endif
#if defined( USE_ENVMAP ) && defined( STANDARD )
float dotNV = saturate(dot(geometryNormal,geometryViewDir));
reflectedLight.indirectSpecular *= computeSpecularOcclusion(dotNV,ambientOcclusion,material.roughness);
#endif
#endif`,$v=`#ifdef USE_AOMAP
uniform sampler2D aoMap;
uniform float aoMapIntensity;
#endif`,Yv=`#ifdef USE_BATCHING
#if ! defined( GL_ANGLE_multi_draw )
#define gl_DrawID _gl_DrawID
uniform int _gl_DrawID;
#endif
uniform highp sampler2D batchingTexture;
uniform highp usampler2D batchingIdTexture;
mat4 getBatchingMatrix(const in float i){
int size = textureSize(batchingTexture,0).x;
int j = int(i)* 4;
int x = j % size;
int y = j / size;
vec4 v1 = texelFetch(batchingTexture,ivec2(x,y),0);
vec4 v2 = texelFetch(batchingTexture,ivec2(x + 1,y),0);
vec4 v3 = texelFetch(batchingTexture,ivec2(x + 2,y),0);
vec4 v4 = texelFetch(batchingTexture,ivec2(x + 3,y),0);
return mat4(v1,v2,v3,v4);
}
float getIndirectIndex(const in int i){
int size = textureSize(batchingIdTexture,0).x;
int x = i % size;
int y = i / size;
return float(texelFetch(batchingIdTexture,ivec2(x,y),0).r);
}
#endif
#ifdef USE_BATCHING_COLOR
uniform sampler2D batchingColorTexture;
vec4 getBatchingColor(const in float i){
int size = textureSize(batchingColorTexture,0).x;
int j = int(i);
int x = j % size;
int y = j / size;
return texelFetch(batchingColorTexture,ivec2(x,y),0);
}
#endif`,qv=`#ifdef USE_BATCHING
mat4 batchingMatrix = getBatchingMatrix(getIndirectIndex(gl_DrawID));
#endif`,Kv=`vec3 transformed = vec3(position);
#ifdef USE_ALPHAHASH
vPosition = vec3(position);
#endif`,Zv=`vec3 objectNormal = vec3(normal);
#ifdef USE_TANGENT
vec3 objectTangent = vec3(tangent.xyz);
#endif`,jv=`float G_BlinnPhong_Implicit(){
return 0.25;
}
float D_BlinnPhong(const in float shininess,const in float dotNH){
return RECIPROCAL_PI *(shininess * 0.5 + 1.0)* pow(dotNH,shininess);
}
vec3 BRDF_BlinnPhong(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in vec3 specularColor,const in float shininess){
vec3 halfDir = normalize(lightDir + viewDir);
float dotNH = saturate(dot(normal,halfDir));
float dotVH = saturate(dot(viewDir,halfDir));
vec3 F = F_Schlick(specularColor,1.0,dotVH);
float G = G_BlinnPhong_Implicit();
float D = D_BlinnPhong(shininess,dotNH);
return F *(G * D);
}`,Jv=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
3.2404542,-0.9692660,0.0556434,
-1.5371385,1.8760108,-0.2040259,
-0.4985314,0.0415560,1.0572252
);
vec3 Fresnel0ToIor(vec3 fresnel0){
vec3 sqrtF0 = sqrt(fresnel0);
return(vec3(1.0)+ sqrtF0)/(vec3(1.0)- sqrtF0);
}
vec3 IorToFresnel0(vec3 transmittedIor,float incidentIor){
return pow2((transmittedIor - vec3(incidentIor))/(transmittedIor + vec3(incidentIor)));
}
float IorToFresnel0(float transmittedIor,float incidentIor){
return pow2((transmittedIor - incidentIor)/(transmittedIor + incidentIor));
}
vec3 evalSensitivity(float OPD,vec3 shift){
float phase = 2.0 * PI * OPD * 1.0e-9;
vec3 val = vec3(5.4856e-13,4.4201e-13,5.2481e-13);
vec3 pos = vec3(1.6810e+06,1.7953e+06,2.2084e+06);
vec3 var = vec3(4.3278e+09,9.3046e+09,6.6121e+09);
vec3 xyz = val * sqrt(2.0 * PI * var)* cos(pos * phase + shift)* exp(- pow2(phase)* var);
xyz.x += 9.7470e-14 * sqrt(2.0 * PI * 4.5282e+09)* cos(2.2399e+06 * phase + shift[0])* exp(- 4.5282e+09 * pow2(phase));
xyz /= 1.0685e-7;
vec3 rgb = XYZ_TO_REC709 * xyz;
return rgb;
}
vec3 evalIridescence(float outsideIOR,float eta2,float cosTheta1,float thinFilmThickness,vec3 baseF0){
vec3 I;
float iridescenceIOR = mix(outsideIOR,eta2,smoothstep(0.0,0.03,thinFilmThickness));
float sinTheta2Sq = pow2(outsideIOR / iridescenceIOR)*(1.0 - pow2(cosTheta1));
float cosTheta2Sq = 1.0 - sinTheta2Sq;
if(cosTheta2Sq < 0.0){
return vec3(1.0);
}
float cosTheta2 = sqrt(cosTheta2Sq);
float R0 = IorToFresnel0(iridescenceIOR,outsideIOR);
float R12 = F_Schlick(R0,1.0,cosTheta1);
float T121 = 1.0 - R12;
float phi12 = 0.0;
if(iridescenceIOR < outsideIOR)phi12 = PI;
float phi21 = PI - phi12;
vec3 baseIOR = Fresnel0ToIor(clamp(baseF0,0.0,0.9999));vec3 R1 = IorToFresnel0(baseIOR,iridescenceIOR);
vec3 R23 = F_Schlick(R1,1.0,cosTheta2);
vec3 phi23 = vec3(0.0);
if(baseIOR[0]< iridescenceIOR)phi23[0]= PI;
if(baseIOR[1]< iridescenceIOR)phi23[1]= PI;
if(baseIOR[2]< iridescenceIOR)phi23[2]= PI;
float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
vec3 phi = vec3(phi21)+ phi23;
vec3 R123 = clamp(R12 * R23,1e-5,0.9999);
vec3 r123 = sqrt(R123);
vec3 Rs = pow2(T121)* R23 /(vec3(1.0)- R123);
vec3 C0 = R12 + Rs;
I = C0;
vec3 Cm = Rs - T121;
for(int m = 1;m <= 2;++ m){
Cm *= r123;
vec3 Sm = 2.0 * evalSensitivity(float(m)* OPD,float(m)* phi);
I += Cm * Sm;
}
return max(I,vec3(0.0));
}
#endif`,Qv=`#ifdef USE_BUMPMAP
uniform sampler2D bumpMap;
uniform float bumpScale;
vec2 dHdxy_fwd(){
vec2 dSTdx = dFdx(vBumpMapUv);
vec2 dSTdy = dFdy(vBumpMapUv);
float Hll = bumpScale * texture2D(bumpMap,vBumpMapUv).x;
float dBx = bumpScale * texture2D(bumpMap,vBumpMapUv + dSTdx).x - Hll;
float dBy = bumpScale * texture2D(bumpMap,vBumpMapUv + dSTdy).x - Hll;
return vec2(dBx,dBy);
}
vec3 perturbNormalArb(vec3 surf_pos,vec3 surf_norm,vec2 dHdxy,float faceDirection){
vec3 vSigmaX = normalize(dFdx(surf_pos.xyz));
vec3 vSigmaY = normalize(dFdy(surf_pos.xyz));
vec3 vN = surf_norm;
vec3 R1 = cross(vSigmaY,vN);
vec3 R2 = cross(vN,vSigmaX);
float fDet = dot(vSigmaX,R1)* faceDirection;
vec3 vGrad = sign(fDet)*(dHdxy.x * R1 + dHdxy.y * R2);
return normalize(abs(fDet)* surf_norm - vGrad);
}
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
vec4 plane;
#ifdef ALPHA_TO_COVERAGE
float distanceToPlane,distanceGradient;
float clipOpacity = 1.0;
#pragma unroll_loop_start
for(int i = 0;i < UNION_CLIPPING_PLANES;i ++){
plane = clippingPlanes[i];
distanceToPlane = - dot(vClipPosition,plane.xyz)+ plane.w;
distanceGradient = fwidth(distanceToPlane)/ 2.0;
clipOpacity *= smoothstep(- distanceGradient,distanceGradient,distanceToPlane);
if(clipOpacity == 0.0)discard;
}
#pragma unroll_loop_end
#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
float unionClipOpacity = 1.0;
#pragma unroll_loop_start
for(int i = UNION_CLIPPING_PLANES;i < NUM_CLIPPING_PLANES;i ++){
plane = clippingPlanes[i];
distanceToPlane = - dot(vClipPosition,plane.xyz)+ plane.w;
distanceGradient = fwidth(distanceToPlane)/ 2.0;
unionClipOpacity *= 1.0 - smoothstep(- distanceGradient,distanceGradient,distanceToPlane);
}
#pragma unroll_loop_end
clipOpacity *= 1.0 - unionClipOpacity;
#endif
diffuseColor.a *= clipOpacity;
if(diffuseColor.a == 0.0)discard;
#else
#pragma unroll_loop_start
for(int i = 0;i < UNION_CLIPPING_PLANES;i ++){
plane = clippingPlanes[i];
if(dot(vClipPosition,plane.xyz)> plane.w)discard;
}
#pragma unroll_loop_end
#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
bool clipped = true;
#pragma unroll_loop_start
for(int i = UNION_CLIPPING_PLANES;i < NUM_CLIPPING_PLANES;i ++){
plane = clippingPlanes[i];
clipped =(dot(vClipPosition,plane.xyz)> plane.w)&& clipped;
}
#pragma unroll_loop_end
if(clipped)discard;
#endif
#endif
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
varying vec3 vClipPosition;
uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
varying vec3 vClipPosition;
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
vClipPosition = - mvPosition.xyz;
#endif`,r1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
diffuseColor *= vColor;
#endif`,o1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
varying vec4 vColor;
#endif`,s1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
varying vec4 vColor;
#endif`,a1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
vColor = vec4(1.0);
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
vColor *= getBatchingColor(getIndirectIndex(gl_DrawID));
#endif`,l1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2(const in float x){return x*x;}
vec3 pow2(const in vec3 x){return x*x;}
float pow3(const in float x){return x*x*x;}
float pow4(const in float x){float x2 = x*x;return x2*x2;}
float max3(const in vec3 v){return max(max(v.x,v.y),v.z);}
float average(const in vec3 v){return dot(v,vec3(0.3333333));}
highp float rand(const in vec2 uv){
const highp float a = 12.9898,b = 78.233,c = 43758.5453;
highp float dt = dot(uv.xy,vec2(a,b)),sn = mod(dt,PI);
return fract(sin(sn)* c);
}
#ifdef HIGH_PRECISION
float precisionSafeLength(vec3 v){return length(v);}
#else
float precisionSafeLength(vec3 v){
float maxComponent = max3(abs(v));
return length(v / maxComponent)* maxComponent;
}
#endif
struct IncidentLight{
vec3 color;
vec3 direction;
bool visible;
};
struct ReflectedLight{
vec3 directDiffuse;
vec3 directSpecular;
vec3 indirectDiffuse;
vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
varying vec3 vPosition;
#endif
vec3 transformDirection(in vec3 dir,in mat4 matrix){
return normalize((matrix * vec4(dir,0.0)).xyz);
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix(in vec3 normal,in mat4 viewMatrix){
return normalize((vec4(normal,0.0)* viewMatrix).xyz);
}
vec3 transformDirectionByInverseViewMatrix(in vec3 dir,in mat4 viewMatrix){
return normalize((vec4(dir,0.0)* viewMatrix).xyz);
}
bool isPerspectiveMatrix(mat4 m){
return m[2][3]== - 1.0;
}
vec2 equirectUv(in vec3 dir){
float u = atan(dir.z,dir.x)* RECIPROCAL_PI2 + 0.5;
float v = asin(clamp(dir.y,- 1.0,1.0))* RECIPROCAL_PI + 0.5;
return vec2(u,v);
}
vec3 BRDF_Lambert(const in vec3 diffuseColor){
return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick(const in vec3 f0,const in float f90,const in float dotVH){
float fresnel = exp2((- 5.55473 * dotVH - 6.98316)* dotVH);
return f0 *(1.0 - fresnel)+(f90 * fresnel);
}
float F_Schlick(const in float f0,const in float f90,const in float dotVH){
float fresnel = exp2((- 5.55473 * dotVH - 6.98316)* dotVH);
return f0 *(1.0 - fresnel)+(f90 * fresnel);
}`,c1=`#ifdef ENVMAP_TYPE_CUBE_UV
#define cubeUV_minMipLevel 4.0
#define cubeUV_minTileSize 16.0
float getFace(vec3 direction){
vec3 absDirection = abs(direction);
float face = - 1.0;
if(absDirection.x > absDirection.z){
if(absDirection.x > absDirection.y)
face = direction.x > 0.0 ? 0.0 : 3.0;
else
face = direction.y > 0.0 ? 1.0 : 4.0;
}else{
if(absDirection.z > absDirection.y)
face = direction.z > 0.0 ? 2.0 : 5.0;
else
face = direction.y > 0.0 ? 1.0 : 4.0;
}
return face;
}
vec2 getUV(vec3 direction,float face){
vec2 uv;
if(face == 0.0){
uv = vec2(direction.z,direction.y)/ abs(direction.x);
}else if(face == 1.0){
uv = vec2(- direction.x,- direction.z)/ abs(direction.y);
}else if(face == 2.0){
uv = vec2(- direction.x,direction.y)/ abs(direction.z);
}else if(face == 3.0){
uv = vec2(- direction.z,direction.y)/ abs(direction.x);
}else if(face == 4.0){
uv = vec2(- direction.x,direction.z)/ abs(direction.y);
}else{
uv = vec2(direction.x,direction.y)/ abs(direction.z);
}
return 0.5 *(uv + 1.0);
}
vec3 bilinearCubeUV(sampler2D envMap,vec3 direction,float mipInt){
float face = getFace(direction);
float filterInt = max(cubeUV_minMipLevel - mipInt,0.0);
mipInt = max(mipInt,cubeUV_minMipLevel);
float faceSize = exp2(mipInt);
highp vec2 uv = getUV(direction,face)*(faceSize - 2.0)+ 1.0;
if(face > 2.0){
uv.y += faceSize;
face -= 3.0;
}
uv.x += face * faceSize;
uv.x += filterInt * 3.0 * cubeUV_minTileSize;
uv.y += 4.0 *(exp2(CUBEUV_MAX_MIP)- faceSize);
uv.x *= CUBEUV_TEXEL_WIDTH;
uv.y *= CUBEUV_TEXEL_HEIGHT;
#ifdef texture2DGradEXT
return texture2DGradEXT(envMap,uv,vec2(0.0),vec2(0.0)).rgb;
#else
return texture2D(envMap,uv).rgb;
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
float roughnessToMip(float roughness){
float mip = 0.0;
if(roughness >= cubeUV_r1){
mip =(cubeUV_r0 - roughness)*(cubeUV_m1 - cubeUV_m0)/(cubeUV_r0 - cubeUV_r1)+ cubeUV_m0;
}else if(roughness >= cubeUV_r4){
mip =(cubeUV_r1 - roughness)*(cubeUV_m4 - cubeUV_m1)/(cubeUV_r1 - cubeUV_r4)+ cubeUV_m1;
}else if(roughness >= cubeUV_r5){
mip =(cubeUV_r4 - roughness)*(cubeUV_m5 - cubeUV_m4)/(cubeUV_r4 - cubeUV_r5)+ cubeUV_m4;
}else if(roughness >= cubeUV_r6){
mip =(cubeUV_r5 - roughness)*(cubeUV_m6 - cubeUV_m5)/(cubeUV_r5 - cubeUV_r6)+ cubeUV_m5;
}else{
mip = - 2.0 * log2(1.16 * roughness);}
return mip;
}
vec4 textureCubeUV(sampler2D envMap,vec3 sampleDir,float roughness){
float mip = clamp(roughnessToMip(roughness),cubeUV_m0,CUBEUV_MAX_MIP);
float mipF = fract(mip);
float mipInt = floor(mip);
vec3 color0 = bilinearCubeUV(envMap,sampleDir,mipInt);
if(mipF == 0.0){
return vec4(color0,1.0);
}else{
vec3 color1 = bilinearCubeUV(envMap,sampleDir,mipInt + 1.0);
return vec4(mix(color0,color1,mipF),1.0);
}
}
#endif`,u1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
mat3 bm = mat3(batchingMatrix);
transformedNormal /= vec3(dot(bm[0],bm[0]),dot(bm[1],bm[1]),dot(bm[2],bm[2]));
transformedNormal = bm * transformedNormal;
#ifdef USE_TANGENT
transformedTangent = bm * transformedTangent;
#endif
#endif
#ifdef USE_INSTANCING
mat3 im = mat3(instanceMatrix);
transformedNormal /= vec3(dot(im[0],im[0]),dot(im[1],im[1]),dot(im[2],im[2]));
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
transformedTangent =(modelViewMatrix * vec4(transformedTangent,0.0)).xyz;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
uniform sampler2D displacementMap;
uniform float displacementScale;
uniform float displacementBias;
#endif`,f1=`#ifdef USE_DISPLACEMENTMAP
transformed += normalize(objectNormal)*(texture2D(displacementMap,vDisplacementMapUv).x * displacementScale + displacementBias);
#endif`,d1=`#ifdef USE_EMISSIVEMAP
vec4 emissiveColor = texture2D(emissiveMap,vEmissiveMapUv);
#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
emissiveColor = sRGBTransferEOTF(emissiveColor);
#endif
totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p1=`#ifdef USE_EMISSIVEMAP
uniform sampler2D emissiveMap;
#endif`,m1="gl_FragColor = linearToOutputTexel( gl_FragColor );",g1=`vec4 LinearTransferOETF(in vec4 value){
return value;
}
vec4 sRGBTransferEOTF(in vec4 value){
return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014),vec3(2.4)),value.rgb * 0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);
}
vec4 sRGBTransferOETF(in vec4 value){
return vec4(mix(pow(value.rgb,vec3(0.41666))* 1.055 - vec3(0.055),value.rgb * 12.92,vec3(lessThanEqual(value.rgb,vec3(0.0031308)))),value.a);
}`,b1=`#ifdef USE_ENVMAP
#ifdef ENV_WORLDPOS
vec3 cameraToFrag;
if(isOrthographic){
cameraToFrag = normalize(vec3(- viewMatrix[0][2],- viewMatrix[1][2],- viewMatrix[2][2]));
}else{
cameraToFrag = normalize(vWorldPosition - cameraPosition);
}
vec3 worldNormal = transformNormalByInverseViewMatrix(normal,viewMatrix);
#ifdef ENVMAP_MODE_REFLECTION
vec3 reflectVec = reflect(cameraToFrag,worldNormal);
#else
vec3 reflectVec = refract(cameraToFrag,worldNormal,refractionRatio);
#endif
#else
vec3 reflectVec = vReflect;
#endif
#ifdef ENVMAP_TYPE_CUBE
vec4 envColor = textureCube(envMap,envMapRotation * reflectVec);
#ifdef ENVMAP_BLENDING_MULTIPLY
outgoingLight = mix(outgoingLight,outgoingLight * envColor.xyz,specularStrength * reflectivity);
#elif defined( ENVMAP_BLENDING_MIX )
outgoingLight = mix(outgoingLight,envColor.xyz,specularStrength * reflectivity);
#elif defined( ENVMAP_BLENDING_ADD )
outgoingLight += envColor.xyz * specularStrength * reflectivity;
#endif
#endif
#endif`,x1=`#ifdef USE_ENVMAP
uniform float envMapIntensity;
uniform mat3 envMapRotation;
#ifdef ENVMAP_TYPE_CUBE
uniform samplerCube envMap;
#else
uniform sampler2D envMap;
#endif
#endif`,y1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_ENVMAP
#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
#define ENV_WORLDPOS
#endif
#ifdef ENV_WORLDPOS
varying vec3 vWorldPosition;
#else
varying vec3 vReflect;
uniform float refractionRatio;
#endif
#endif`,_1=`#ifdef USE_ENVMAP
#ifdef ENV_WORLDPOS
vWorldPosition = worldPosition.xyz;
#else
vec3 cameraToVertex;
if(isOrthographic){
cameraToVertex = normalize(vec3(- viewMatrix[0][2],- viewMatrix[1][2],- viewMatrix[2][2]));
}else{
cameraToVertex = normalize(worldPosition.xyz - cameraPosition);
}
vec3 worldNormal = transformNormalByInverseViewMatrix(transformedNormal,viewMatrix);
#ifdef ENVMAP_MODE_REFLECTION
vReflect = reflect(cameraToVertex,worldNormal);
#else
vReflect = refract(cameraToVertex,worldNormal,refractionRatio);
#endif
#endif
#endif`,M1=`#ifdef USE_FOG
vFogDepth = - mvPosition.z;
#endif`,w1=`#ifdef USE_FOG
varying float vFogDepth;
#endif`,S1=`#ifdef USE_FOG
#ifdef FOG_EXP2
float fogFactor = 1.0 - exp(- fogDensity * fogDensity * vFogDepth * vFogDepth);
#else
float fogFactor = smoothstep(fogNear,fogFar,vFogDepth);
#endif
gl_FragColor.rgb = mix(gl_FragColor.rgb,fogColor,fogFactor);
#endif`,T1=`#ifdef USE_FOG
uniform vec3 fogColor;
varying float vFogDepth;
#ifdef FOG_EXP2
uniform float fogDensity;
#else
uniform float fogNear;
uniform float fogFar;
#endif
#endif`,A1=`#ifdef USE_GRADIENTMAP
uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance(vec3 normal,vec3 lightDirection){
float dotNL = dot(normal,lightDirection);
vec2 coord = vec2(dotNL * 0.5 + 0.5,0.0);
#ifdef USE_GRADIENTMAP
return vec3(texture2D(gradientMap,coord).r);
#else
vec2 fw = fwidth(coord)* 0.5;
return mix(vec3(0.7),vec3(1.0),smoothstep(0.7 - fw.x,0.7 + fw.x,coord.x));
#endif
}`,E1=`#ifdef USE_LIGHTMAP
uniform sampler2D lightMap;
uniform float lightMapIntensity;
#endif`,R1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
struct LambertMaterial{
vec3 diffuseColor;
float specularStrength;
};
void RE_Direct_Lambert(const in IncidentLight directLight,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in LambertMaterial material,inout ReflectedLight reflectedLight){
float dotNL = saturate(dot(geometryNormal,directLight.direction));
vec3 irradiance = dotNL * directLight.color;
reflectedLight.directDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
}
void RE_IndirectDiffuse_Lambert(const in vec3 irradiance,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in LambertMaterial material,inout ReflectedLight reflectedLight){
reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
uniform vec3 lightProbe[9];
#endif
vec3 shGetIrradianceAt(in vec3 normal,in vec3 shCoefficients[9]){
float x = normal.x,y = normal.y,z = normal.z;
vec3 result = shCoefficients[0]* 0.886227;
result += shCoefficients[1]* 2.0 * 0.511664 * y;
result += shCoefficients[2]* 2.0 * 0.511664 * z;
result += shCoefficients[3]* 2.0 * 0.511664 * x;
result += shCoefficients[4]* 2.0 * 0.429043 * x * y;
result += shCoefficients[5]* 2.0 * 0.429043 * y * z;
result += shCoefficients[6]*(0.743125 * z * z - 0.247708);
result += shCoefficients[7]* 2.0 * 0.429043 * x * z;
result += shCoefficients[8]* 0.429043 *(x * x - y * y);
return result;
}
vec3 getLightProbeIrradiance(const in vec3 lightProbe[9],const in vec3 normal){
vec3 worldNormal = transformNormalByInverseViewMatrix(normal,viewMatrix);
vec3 irradiance = shGetIrradianceAt(worldNormal,lightProbe);
return irradiance;
}
vec3 getAmbientLightIrradiance(const in vec3 ambientLightColor){
vec3 irradiance = ambientLightColor;
return irradiance;
}
float getDistanceAttenuation(const in float lightDistance,const in float cutoffDistance,const in float decayExponent){
float distanceFalloff = 1.0 / max(pow(lightDistance,decayExponent),0.01);
if(cutoffDistance > 0.0){
distanceFalloff *= pow2(saturate(1.0 - pow4(lightDistance / cutoffDistance)));
}
return distanceFalloff;
}
float getSpotAttenuation(const in float coneCosine,const in float penumbraCosine,const in float angleCosine){
return smoothstep(coneCosine,penumbraCosine,angleCosine);
}
#if NUM_SUN_LIGHTS > 0
struct SunLight{
vec3 direction;
vec3 color;
};
uniform SunLight sunLights[NUM_SUN_LIGHTS];
void getSunLightInfo(const in SunLight sunLight,out IncidentLight light){
light.color = sunLight.color;
light.direction = sunLight.direction;
light.visible = true;
}
#endif
#if NUM_DIR_LIGHTS > 0
struct DirectionalLight{
vec3 direction;
vec3 color;
};
uniform DirectionalLight directionalLights[NUM_DIR_LIGHTS];
void getDirectionalLightInfo(const in DirectionalLight directionalLight,out IncidentLight light){
light.color = directionalLight.color;
light.direction = directionalLight.direction;
light.visible = true;
}
#endif
#if NUM_POINT_LIGHTS > 0
struct PointLight{
vec3 position;
vec3 color;
float distance;
float decay;
};
uniform PointLight pointLights[NUM_POINT_LIGHTS];
void getPointLightInfo(const in PointLight pointLight,const in vec3 geometryPosition,out IncidentLight light){
vec3 lVector = pointLight.position - geometryPosition;
light.direction = normalize(lVector);
float lightDistance = length(lVector);
light.color = pointLight.color;
light.color *= getDistanceAttenuation(lightDistance,pointLight.distance,pointLight.decay);
light.visible =(light.color != vec3(0.0));
}
#endif
#if NUM_SPOT_LIGHTS > 0
struct SpotLight{
vec3 position;
vec3 direction;
vec3 color;
float distance;
float decay;
float coneCos;
float penumbraCos;
};
uniform SpotLight spotLights[NUM_SPOT_LIGHTS];
void getSpotLightInfo(const in SpotLight spotLight,const in vec3 geometryPosition,out IncidentLight light){
vec3 lVector = spotLight.position - geometryPosition;
light.direction = normalize(lVector);
float angleCos = dot(light.direction,spotLight.direction);
float spotAttenuation = getSpotAttenuation(spotLight.coneCos,spotLight.penumbraCos,angleCos);
if(spotAttenuation > 0.0){
float lightDistance = length(lVector);
light.color = spotLight.color * spotAttenuation;
light.color *= getDistanceAttenuation(lightDistance,spotLight.distance,spotLight.decay);
light.visible =(light.color != vec3(0.0));
}else{
light.color = vec3(0.0);
light.visible = false;
}
}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
struct RectAreaLight{
vec3 color;
vec3 position;
vec3 halfWidth;
vec3 halfHeight;
};
uniform sampler2D ltc_1;uniform sampler2D ltc_2;
uniform RectAreaLight rectAreaLights[NUM_RECT_AREA_LIGHTS];
#endif
#if NUM_HEMI_LIGHTS > 0
struct HemisphereLight{
vec3 direction;
vec3 skyColor;
vec3 groundColor;
};
uniform HemisphereLight hemisphereLights[NUM_HEMI_LIGHTS];
vec3 getHemisphereLightIrradiance(const in HemisphereLight hemiLight,const in vec3 normal){
float dotNL = dot(normal,hemiLight.direction);
float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
vec3 irradiance = mix(hemiLight.groundColor,hemiLight.skyColor,hemiDiffuseWeight);
return irradiance;
}
#endif
#include <lightprobes_pars_fragment>`,I1=`#ifdef USE_ENVMAP
vec3 getIBLIrradiance(const in vec3 normal){
#ifdef ENVMAP_TYPE_CUBE_UV
vec3 worldNormal = transformNormalByInverseViewMatrix(normal,viewMatrix);
vec4 envMapColor = textureCubeUV(envMap,envMapRotation * worldNormal,1.0);
return PI * envMapColor.rgb * envMapIntensity;
#else
return vec3(0.0);
#endif
}
vec3 getIBLRadiance(const in vec3 viewDir,const in vec3 normal,const in float roughness){
#ifdef ENVMAP_TYPE_CUBE_UV
vec3 reflectVec = reflect(- viewDir,normal);
reflectVec = normalize(mix(reflectVec,normal,pow4(roughness)));
reflectVec = transformDirectionByInverseViewMatrix(reflectVec,viewMatrix);
vec4 envMapColor = textureCubeUV(envMap,envMapRotation * reflectVec,roughness);
return envMapColor.rgb * envMapIntensity;
#else
return vec3(0.0);
#endif
}
#ifdef USE_RETROREFLECTION
vec3 getIBLRetroRadiance(const in vec3 viewDir,const in vec3 normal,const in float roughness){
#ifdef ENVMAP_TYPE_CUBE_UV
vec3 retroVec = normalize(mix(viewDir,normal,pow4(roughness)));
retroVec = transformDirectionByInverseViewMatrix(retroVec,viewMatrix);
vec4 envMapColor = textureCubeUV(envMap,envMapRotation * retroVec,roughness);
return envMapColor.rgb * envMapIntensity;
#else
return vec3(0.0);
#endif
}
#endif
#ifdef USE_ANISOTROPY
vec3 getIBLAnisotropyRadiance(const in vec3 viewDir,const in vec3 normal,const in float roughness,const in vec3 bitangent,const in float anisotropy){
#ifdef ENVMAP_TYPE_CUBE_UV
vec3 bentNormal = cross(bitangent,viewDir);
bentNormal = normalize(cross(bentNormal,bitangent));
bentNormal = normalize(mix(bentNormal,normal,pow2(pow2(1.0 - anisotropy *(1.0 - roughness)))));
return getIBLRadiance(viewDir,bentNormal,roughness);
#else
return vec3(0.0);
#endif
}
#ifdef USE_RETROREFLECTION
vec3 getIBLAnisotropyRetroRadiance(const in vec3 viewDir,const in vec3 normal,const in float roughness,const in vec3 bitangent,const in float anisotropy){
#ifdef ENVMAP_TYPE_CUBE_UV
vec3 bentNormal = cross(bitangent,viewDir);
bentNormal = normalize(cross(bentNormal,bitangent));
bentNormal = normalize(mix(bentNormal,normal,pow2(pow2(1.0 - anisotropy *(1.0 - roughness)))));
return getIBLRetroRadiance(viewDir,bentNormal,roughness);
#else
return vec3(0.0);
#endif
}
#endif
#endif
#endif`,L1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F1=`varying vec3 vViewPosition;
struct ToonMaterial{
vec3 diffuseColor;
};
void RE_Direct_Toon(const in IncidentLight directLight,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in ToonMaterial material,inout ReflectedLight reflectedLight){
vec3 irradiance = getGradientIrradiance(geometryNormal,directLight.direction)* directLight.color;
reflectedLight.directDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
}
void RE_IndirectDiffuse_Toon(const in vec3 irradiance,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in ToonMaterial material,inout ReflectedLight reflectedLight){
reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial{
vec3 diffuseColor;
vec3 specularColor;
float specularShininess;
float specularStrength;
};
void RE_Direct_BlinnPhong(const in IncidentLight directLight,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in BlinnPhongMaterial material,inout ReflectedLight reflectedLight){
float dotNL = saturate(dot(geometryNormal,directLight.direction));
vec3 irradiance = dotNL * directLight.color;
reflectedLight.directDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong(directLight.direction,geometryViewDir,geometryNormal,material.specularColor,material.specularShininess)* material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong(const in vec3 irradiance,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in BlinnPhongMaterial material,inout ReflectedLight reflectedLight){
reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb *(1.0 - metalnessFactor);
material.metalness = metalnessFactor;
vec3 dxy = max(abs(dFdx(nonPerturbedNormal)),abs(dFdy(nonPerturbedNormal)));
float geometryRoughness = max(max(dxy.x,dxy.y),dxy.z);
material.roughness = max(roughnessFactor,0.0525);material.roughness += geometryRoughness;
material.roughness = min(material.roughness,1.0);
#ifdef IOR
material.ior = ior;
#ifdef USE_SPECULAR
float specularIntensityFactor = specularIntensity;
vec3 specularColorFactor = specularColor;
#ifdef USE_SPECULAR_COLORMAP
specularColorFactor *= texture2D(specularColorMap,vSpecularColorMapUv).rgb;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
specularIntensityFactor *= texture2D(specularIntensityMap,vSpecularIntensityMapUv).a;
#endif
material.specularF90 = mix(specularIntensityFactor,1.0,metalnessFactor);
#else
float specularIntensityFactor = 1.0;
vec3 specularColorFactor = vec3(1.0);
material.specularF90 = 1.0;
#endif
material.specularColor = min(pow2((material.ior - 1.0)/(material.ior + 1.0))* specularColorFactor,vec3(1.0))* specularIntensityFactor;
material.specularColorBlended = mix(material.specularColor,diffuseColor.rgb,metalnessFactor);
#else
material.specularColor = vec3(0.04);
material.specularColorBlended = mix(material.specularColor,diffuseColor.rgb,metalnessFactor);
material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
material.clearcoat = clearcoat;
material.clearcoatRoughness = clearcoatRoughness;
material.clearcoatF0 = vec3(0.04);
material.clearcoatF90 = 1.0;
#ifdef USE_CLEARCOATMAP
material.clearcoat *= texture2D(clearcoatMap,vClearcoatMapUv).x;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
material.clearcoatRoughness *= texture2D(clearcoatRoughnessMap,vClearcoatRoughnessMapUv).y;
#endif
material.clearcoat = saturate(material.clearcoat);material.clearcoatRoughness = max(material.clearcoatRoughness,0.0525);
material.clearcoatRoughness += geometryRoughness;
material.clearcoatRoughness = min(material.clearcoatRoughness,1.0);
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
material.iridescence *= texture2D(iridescenceMap,vIridescenceMapUv).r;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
material.iridescenceThickness =(iridescenceThicknessMaximum - iridescenceThicknessMinimum)* texture2D(iridescenceThicknessMap,vIridescenceThicknessMapUv).g + iridescenceThicknessMinimum;
#else
material.iridescenceThickness = iridescenceThicknessMaximum;
#endif
#endif
#ifdef USE_SHEEN
material.sheenColor = sheenColor;
#ifdef USE_SHEEN_COLORMAP
material.sheenColor *= texture2D(sheenColorMap,vSheenColorMapUv).rgb;
#endif
material.sheenRoughness = clamp(sheenRoughness,0.0001,1.0);
#ifdef USE_SHEEN_ROUGHNESSMAP
material.sheenRoughness *= texture2D(sheenRoughnessMap,vSheenRoughnessMapUv).a;
#endif
#endif
#ifdef USE_ANISOTROPY
#ifdef USE_ANISOTROPYMAP
mat2 anisotropyMat = mat2(anisotropyVector.x,anisotropyVector.y,- anisotropyVector.y,anisotropyVector.x);
vec3 anisotropyPolar = texture2D(anisotropyMap,vAnisotropyMapUv).rgb;
vec2 anisotropyV = anisotropyMat * normalize(2.0 * anisotropyPolar.rg - vec2(1.0))* anisotropyPolar.b;
#else
vec2 anisotropyV = anisotropyVector;
#endif
material.anisotropy = length(anisotropyV);
if(material.anisotropy == 0.0){
anisotropyV = vec2(1.0,0.0);
}else{
anisotropyV /= material.anisotropy;
material.anisotropy = saturate(material.anisotropy);
}
material.alphaT = mix(pow2(material.roughness),1.0,pow2(material.anisotropy));
material.anisotropyT = tbn[0]* anisotropyV.x + tbn[1]* anisotropyV.y;
material.anisotropyB = tbn[1]* anisotropyV.x - tbn[0]* anisotropyV.y;
#endif`,N1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial{
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
vec3 clearcoatSpecularDirect = vec3(0.0);
vec3 clearcoatSpecularIndirect = vec3(0.0);
vec3 sheenSpecularDirect = vec3(0.0);
vec3 sheenSpecularIndirect = vec3(0.0);
vec3 Schlick_to_F0(const in vec3 f,const in float f90,const in float dotVH){
float x = clamp(1.0 - dotVH,0.0,1.0);
float x2 = x * x;
float x5 = clamp(x * x2 * x2,0.0,0.9999);
return(f - vec3(f90)* x5)/(1.0 - x5);
}
float V_GGX_SmithCorrelated(const in float alpha,const in float dotNL,const in float dotNV){
float a2 = pow2(alpha);
float gv = dotNL * sqrt(a2 +(1.0 - a2)* pow2(dotNV));
float gl = dotNV * sqrt(a2 +(1.0 - a2)* pow2(dotNL));
return 0.5 / max(gv + gl,EPSILON);
}
float D_GGX(const in float alpha,const in float dotNH){
float a2 = pow2(alpha);
float denom = pow2(dotNH)*(a2 - 1.0)+ 1.0;
return RECIPROCAL_PI * a2 / pow2(denom);
}
#ifdef USE_ANISOTROPY
float V_GGX_SmithCorrelated_Anisotropic(const in float alphaT,const in float alphaB,const in float dotTV,const in float dotBV,const in float dotTL,const in float dotBL,const in float dotNV,const in float dotNL){
float gv = dotNL * length(vec3(alphaT * dotTV,alphaB * dotBV,dotNV));
float gl = dotNV * length(vec3(alphaT * dotTL,alphaB * dotBL,dotNL));
return 0.5 / max(gv + gl,EPSILON);
}
float D_GGX_Anisotropic(const in float alphaT,const in float alphaB,const in float dotNH,const in float dotTH,const in float dotBH){
float a2 = alphaT * alphaB;
highp vec3 v = vec3(alphaB * dotTH,alphaT * dotBH,a2 * dotNH);
highp float v2 = dot(v,v);
float w2 = a2 / v2;
return RECIPROCAL_PI * a2 * pow2(w2);
}
#endif
#ifdef USE_CLEARCOAT
vec3 BRDF_GGX_Clearcoat(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in PhysicalMaterial material){
vec3 f0 = material.clearcoatF0;
float f90 = material.clearcoatF90;
float roughness = material.clearcoatRoughness;
float alpha = pow2(roughness);
vec3 halfDir = normalize(lightDir + viewDir);
float dotNL = saturate(dot(normal,lightDir));
float dotNV = saturate(dot(normal,viewDir));
float dotNH = saturate(dot(normal,halfDir));
float dotVH = saturate(dot(viewDir,halfDir));
vec3 F = F_Schlick(f0,f90,dotVH);
float V = V_GGX_SmithCorrelated(alpha,dotNL,dotNV);
float D = D_GGX(alpha,dotNH);
return F *(V * D);
}
#endif
vec3 BRDF_GGX(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in PhysicalMaterial material){
vec3 f0 = material.specularColorBlended;
float f90 = material.specularF90;
float roughness = material.roughness;
float alpha = pow2(roughness);
vec3 halfDir = normalize(lightDir + viewDir);
float dotNL = saturate(dot(normal,lightDir));
float dotNV = saturate(dot(normal,viewDir));
float dotNH = saturate(dot(normal,halfDir));
float dotVH = saturate(dot(viewDir,halfDir));
vec3 F = F_Schlick(f0,f90,dotVH);
#ifdef USE_IRIDESCENCE
F = mix(F,material.iridescenceFresnel,material.iridescence);
#endif
#ifdef USE_ANISOTROPY
float dotTL = dot(material.anisotropyT,lightDir);
float dotTV = dot(material.anisotropyT,viewDir);
float dotTH = dot(material.anisotropyT,halfDir);
float dotBL = dot(material.anisotropyB,lightDir);
float dotBV = dot(material.anisotropyB,viewDir);
float dotBH = dot(material.anisotropyB,halfDir);
float V = V_GGX_SmithCorrelated_Anisotropic(material.alphaT,alpha,dotTV,dotBV,dotTL,dotBL,dotNV,dotNL);
float D = D_GGX_Anisotropic(material.alphaT,alpha,dotNH,dotTH,dotBH);
#else
float V = V_GGX_SmithCorrelated(alpha,dotNL,dotNV);
float D = D_GGX(alpha,dotNH);
#endif
return F *(V * D);
}
vec2 LTC_Uv(const in vec3 N,const in vec3 V,const in float roughness){
const float LUT_SIZE = 64.0;
const float LUT_SCALE =(LUT_SIZE - 1.0)/ LUT_SIZE;
const float LUT_BIAS = 0.5 / LUT_SIZE;
float dotNV = saturate(dot(N,V));
vec2 uv = vec2(roughness,sqrt(1.0 - dotNV));
uv = uv * LUT_SCALE + LUT_BIAS;
return uv;
}
float LTC_ClippedSphereFormFactor(const in vec3 f){
float l = length(f);
return max((l * l + f.z)/(l + 1.0),0.0);
}
vec3 LTC_EdgeVectorFormFactor(const in vec3 v1,const in vec3 v2){
float x = dot(v1,v2);
float y = abs(x);
float a = 0.8543985 +(0.4965155 + 0.0145206 * y)* y;
float b = 3.4175940 +(4.1616724 + y)* y;
float v = a / b;
float theta_sintheta =(x > 0.0)? v : 0.5 * inversesqrt(max(1.0 - x * x,1e-7))- v;
return cross(v1,v2)* theta_sintheta;
}
vec3 LTC_Evaluate(const in vec3 N,const in vec3 V,const in vec3 P,const in mat3 mInv,const in vec3 rectCoords[4]){
vec3 v1 = rectCoords[1]- rectCoords[0];
vec3 v2 = rectCoords[3]- rectCoords[0];
vec3 lightNormal = cross(v1,v2);
if(dot(lightNormal,P - rectCoords[0])< 0.0)return vec3(0.0);
vec3 T1,T2;
T1 = normalize(V - N * dot(V,N));
T2 = - cross(N,T1);
mat3 mat = mInv * transpose(mat3(T1,T2,N));
vec3 coords[4];
coords[0]= mat *(rectCoords[0]- P);
coords[1]= mat *(rectCoords[1]- P);
coords[2]= mat *(rectCoords[2]- P);
coords[3]= mat *(rectCoords[3]- P);
coords[0]= normalize(coords[0]);
coords[1]= normalize(coords[1]);
coords[2]= normalize(coords[2]);
coords[3]= normalize(coords[3]);
vec3 vectorFormFactor = vec3(0.0);
vectorFormFactor += LTC_EdgeVectorFormFactor(coords[0],coords[1]);
vectorFormFactor += LTC_EdgeVectorFormFactor(coords[1],coords[2]);
vectorFormFactor += LTC_EdgeVectorFormFactor(coords[2],coords[3]);
vectorFormFactor += LTC_EdgeVectorFormFactor(coords[3],coords[0]);
float result = LTC_ClippedSphereFormFactor(vectorFormFactor);
return vec3(result);
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness,float dotNH){
float alpha = pow2(roughness);
float invAlpha = 1.0 / alpha;
float cos2h = dotNH * dotNH;
float sin2h = max(1.0 - cos2h,0.0078125);
return(2.0 + invAlpha)* pow(sin2h,invAlpha * 0.5)/(2.0 * PI);
}
float V_Neubelt(float dotNV,float dotNL){
return saturate(1.0 /(4.0 *(dotNL + dotNV - dotNL * dotNV)));
}
vec3 BRDF_Sheen(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,vec3 sheenColor,const in float sheenRoughness){
vec3 halfDir = normalize(lightDir + viewDir);
float dotNL = saturate(dot(normal,lightDir));
float dotNV = saturate(dot(normal,viewDir));
float dotNH = saturate(dot(normal,halfDir));
float D = D_Charlie(sheenRoughness,dotNH);
float V = V_Neubelt(dotNV,dotNL);
return sheenColor *(D * V);
}
#endif
float IBLSheenBRDF(const in vec3 normal,const in vec3 viewDir,const in float roughness){
float dotNV = saturate(dot(normal,viewDir));
float r2 = roughness * roughness;
float rInv = 1.0 /(roughness + 0.1);
float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
float DG = exp(a * dotNV + b);
return saturate(DG);
}
vec3 EnvironmentBRDF(const in vec3 normal,const in vec3 viewDir,const in vec3 specularColor,const in float specularF90,const in float roughness){
float dotNV = saturate(dot(normal,viewDir));
vec2 fab = texture2D(dfgLUT,vec2(roughness,dotNV)).rg;
return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence(const in vec2 fab,const in vec3 specularColor,const in float specularF90,const in float iridescence,const in vec3 iridescenceF0,inout vec3 singleScatter,inout vec3 multiScatter){
#else
void computeMultiscattering(const in vec2 fab,const in vec3 specularColor,const in float specularF90,inout vec3 singleScatter,inout vec3 multiScatter){
#endif
#ifdef USE_IRIDESCENCE
vec3 Fr = mix(specularColor,iridescenceF0,iridescence);
#else
vec3 Fr = specularColor;
#endif
vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
float Ess = fab.x + fab.y;
float Ems = 1.0 - Ess;
vec3 Favg = Fr +(1.0 - Fr)* 0.047619;vec3 Fms = FssEss * Favg /(1.0 - Ems * Favg);
singleScatter += FssEss;
multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
void RE_Direct_RectArea_Physical(const in RectAreaLight rectAreaLight,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){
vec3 normal = geometryNormal;
vec3 viewDir = geometryViewDir;
vec3 position = geometryPosition;
vec3 lightPos = rectAreaLight.position;
vec3 halfWidth = rectAreaLight.halfWidth;
vec3 halfHeight = rectAreaLight.halfHeight;
vec3 lightColor = rectAreaLight.color;
float roughness = material.roughness;
vec3 rectCoords[4];
rectCoords[0]= lightPos + halfWidth - halfHeight;rectCoords[1]= lightPos - halfWidth - halfHeight;
rectCoords[2]= lightPos - halfWidth + halfHeight;
rectCoords[3]= lightPos + halfWidth + halfHeight;
vec2 uv = LTC_Uv(normal,viewDir,roughness);
vec4 t1 = texture2D(ltc_1,uv);
vec4 t2 = texture2D(ltc_2,uv);
mat3 mInv = mat3(
vec3(t1.x,0,t1.y),
vec3(0,1,0),
vec3(t1.z,0,t1.w)
);
vec3 fresnel =(material.specularColorBlended * t2.x +(material.specularF90 - material.specularColorBlended)* t2.y);
reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate(normal,viewDir,position,mInv,rectCoords);
reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate(normal,viewDir,position,mat3(1.0),rectCoords);
#ifdef USE_CLEARCOAT
vec3 Ncc = geometryClearcoatNormal;
vec2 uvClearcoat = LTC_Uv(Ncc,viewDir,material.clearcoatRoughness);
vec4 t1Clearcoat = texture2D(ltc_1,uvClearcoat);
vec4 t2Clearcoat = texture2D(ltc_2,uvClearcoat);
mat3 mInvClearcoat = mat3(
vec3(t1Clearcoat.x,0,t1Clearcoat.y),
vec3(0,1,0),
vec3(t1Clearcoat.z,0,t1Clearcoat.w)
);
vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x +(material.clearcoatF90 - material.clearcoatF0)* t2Clearcoat.y;
clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate(Ncc,viewDir,position,mInvClearcoat,rectCoords);
#endif
}
#endif
void RE_Direct_Physical(const in IncidentLight directLight,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){
float dotNL = saturate(dot(geometryNormal,directLight.direction));
vec3 irradiance = dotNL * directLight.color;
#ifdef USE_CLEARCOAT
float dotNLcc = saturate(dot(geometryClearcoatNormal,directLight.direction));
vec3 ccIrradiance = dotNLcc * directLight.color;
clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat(directLight.direction,geometryViewDir,geometryClearcoatNormal,material);
#endif
#ifdef USE_SHEEN
sheenSpecularDirect += irradiance * BRDF_Sheen(directLight.direction,geometryViewDir,geometryNormal,material.sheenColor,material.sheenRoughness);
float sheenAlbedoV = IBLSheenBRDF(geometryNormal,geometryViewDir,material.sheenRoughness);
float sheenAlbedoL = IBLSheenBRDF(geometryNormal,directLight.direction,material.sheenRoughness);
float sheenEnergyComp = 1.0 - max3(material.sheenColor)* max(sheenAlbedoV,sheenAlbedoL);
irradiance *= sheenEnergyComp;
#endif
vec3 specularBRDF = BRDF_GGX(directLight.direction,geometryViewDir,geometryNormal,material);
#ifdef USE_RETROREFLECTION
vec3 retroViewDir = reflect(- geometryViewDir,geometryNormal);
vec3 retroSpecularBRDF = BRDF_GGX(directLight.direction,retroViewDir,geometryNormal,material);
specularBRDF = mix(specularBRDF,retroSpecularBRDF,saturate(material.retroreflectivity));
#endif
reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
vec3 halfDir = normalize(directLight.direction + geometryViewDir);
float dotVH = saturate(dot(geometryViewDir,halfDir));
vec3 F = F_Schlick(material.specularColor,material.specularF90,dotVH);
#ifdef USE_RETROREFLECTION
vec3 retroHalfDir = normalize(directLight.direction + retroViewDir);
float dotRetroVH = saturate(dot(retroViewDir,retroHalfDir));
vec3 retroF = F_Schlick(material.specularColor,material.specularF90,dotRetroVH);
F = mix(F,retroF,saturate(material.retroreflectivity));
#endif
reflectedLight.directDiffuse += irradiance * BRDF_Lambert(material.diffuseContribution)*(1.0 - F);
}
void RE_IndirectDiffuse_Physical(const in vec3 irradiance,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){
vec3 singleScattering = vec3(0.0);
vec3 multiScattering = vec3(0.0);
#ifdef USE_IRIDESCENCE
computeMultiscatteringIridescence(material.dfg,material.specularColor,material.specularF90,material.iridescence,material.iridescenceF0Dielectric,singleScattering,multiScattering);
#else
computeMultiscattering(material.dfg,material.specularColor,material.specularF90,singleScattering,multiScattering);
#endif
vec3 diffuse = irradiance * BRDF_Lambert(material.diffuseContribution)*(1.0 - singleScattering - multiScattering);
#ifdef USE_SHEEN
float sheenAlbedo = IBLSheenBRDF(geometryNormal,geometryViewDir,material.sheenRoughness);
sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
float sheenEnergyComp = 1.0 - max3(material.sheenColor)* sheenAlbedo;
diffuse *= sheenEnergyComp;
#endif
reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical(const in vec3 radiance,const in vec3 irradiance,const in vec3 clearcoatRadiance,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){
#ifdef USE_CLEARCOAT
clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF(geometryClearcoatNormal,geometryViewDir,material.clearcoatF0,material.clearcoatF90,material.clearcoatRoughness);
#endif
#ifdef USE_SHEEN
sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF(geometryNormal,geometryViewDir,material.sheenRoughness)* RECIPROCAL_PI;
#endif
vec3 singleScatteringDielectric = vec3(0.0);
vec3 multiScatteringDielectric = vec3(0.0);
vec3 singleScatteringMetallic = vec3(0.0);
vec3 multiScatteringMetallic = vec3(0.0);
#ifdef USE_IRIDESCENCE
computeMultiscatteringIridescence(material.dfg,material.specularColor,material.specularF90,material.iridescence,material.iridescenceF0Dielectric,singleScatteringDielectric,multiScatteringDielectric);
computeMultiscatteringIridescence(material.dfg,material.diffuseColor,material.specularF90,material.iridescence,material.iridescenceF0Metallic,singleScatteringMetallic,multiScatteringMetallic);
#else
computeMultiscattering(material.dfg,material.specularColor,material.specularF90,singleScatteringDielectric,multiScatteringDielectric);
computeMultiscattering(material.dfg,material.diffuseColor,material.specularF90,singleScatteringMetallic,multiScatteringMetallic);
#endif
vec3 singleScattering = mix(singleScatteringDielectric,singleScatteringMetallic,material.metalness);
vec3 multiScattering = mix(multiScatteringDielectric,multiScatteringMetallic,material.metalness);
vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
vec3 diffuse = material.diffuseContribution *(1.0 - totalScatteringDielectric);
vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
vec3 indirectSpecular = radiance * singleScattering;
indirectSpecular += multiScattering * cosineWeightedIrradiance;
vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
#ifdef USE_SHEEN
float sheenAlbedo = IBLSheenBRDF(geometryNormal,geometryViewDir,material.sheenRoughness);
float sheenEnergyComp = 1.0 - max3(material.sheenColor)* sheenAlbedo;
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
float computeSpecularOcclusion(const in float dotNV,const in float ambientOcclusion,const in float roughness){
return saturate(pow(dotNV + ambientOcclusion,exp2(- 16.0 * roughness - 1.0))- 1.0 + ambientOcclusion);
}`,U1=`vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir =(isOrthographic)? vec3(0,0,1): normalize(vViewPosition);
vec3 geometryClearcoatNormal = vec3(0.0);
#ifdef USE_CLEARCOAT
geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate(dot(normal,geometryViewDir));
if(material.iridescenceThickness == 0.0){
material.iridescence = 0.0;
}else{
material.iridescence = saturate(material.iridescence);
}
if(material.iridescence > 0.0){
vec3 iridescenceFresnelDielectric = evalIridescence(1.0,material.iridescenceIOR,dotNVi,material.iridescenceThickness,material.specularColor);
vec3 iridescenceFresnelMetallic = evalIridescence(1.0,material.iridescenceIOR,dotNVi,material.iridescenceThickness,material.diffuseColor);
material.iridescenceFresnel = mix(iridescenceFresnelDielectric,iridescenceFresnelMetallic,material.metalness);
material.iridescenceF0Dielectric = Schlick_to_F0(iridescenceFresnelDielectric,1.0,dotNVi);
material.iridescenceF0Metallic = Schlick_to_F0(iridescenceFresnelMetallic,1.0,dotNVi);
}
#endif
#ifdef STANDARD
float dotNVms = saturate(dot(geometryNormal,geometryViewDir));
material.dfg = texture2D(dfgLUT,vec2(material.roughness,dotNVms)).rg;
#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
float EssMs = material.dfg.x + material.dfg.y;
material.multiScatteringCompensation = 1.0 + material.specularColorBlended *(1.0 / EssMs - 1.0);
#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
PointLight pointLight;
#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
PointLightShadow pointLightShadow;
#endif
#pragma unroll_loop_start
for(int i = 0;i < NUM_POINT_LIGHTS;i ++){
pointLight = pointLights[i];
getPointLightInfo(pointLight,geometryPosition,directLight);
#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
pointLightShadow = pointLightShadows[i];
directLight.color *=(directLight.visible && receiveShadow)? getPointShadow(pointShadowMap[i],pointLightShadow.shadowMapSize,pointLightShadow.shadowIntensity,pointLightShadow.shadowBias,pointLightShadow.shadowRadius,vPointShadowCoord[i],pointLightShadow.shadowCameraNear,pointLightShadow.shadowCameraFar): 1.0;
#endif
RE_Direct(directLight,geometryPosition,geometryNormal,geometryViewDir,geometryClearcoatNormal,material,reflectedLight);
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
for(int i = 0;i < NUM_SPOT_LIGHTS;i ++){
spotLight = spotLights[i];
getSpotLightInfo(spotLight,geometryPosition,directLight);
#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
#else
#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
#endif
#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
spotLightCoord = vSpotLightCoord[i].xyz / vSpotLightCoord[i].w;
inSpotLightMap = all(lessThan(abs(spotLightCoord * 2. - 1.),vec3(1.0)));
spotColor = texture2D(spotLightMap[SPOT_LIGHT_MAP_INDEX],spotLightCoord.xy);
directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
#endif
#undef SPOT_LIGHT_MAP_INDEX
#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
spotLightShadow = spotLightShadows[i];
directLight.color *=(directLight.visible && receiveShadow)? getShadow(spotShadowMap[i],spotLightShadow.shadowMapSize,spotLightShadow.shadowIntensity,spotLightShadow.shadowBias,spotLightShadow.shadowRadius,vSpotLightCoord[i]): 1.0;
#endif
RE_Direct(directLight,geometryPosition,geometryNormal,geometryViewDir,geometryClearcoatNormal,material,reflectedLight);
}
#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
SunLight sunLight;
#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
SunLightShadow sunLightShadow;
#endif
#pragma unroll_loop_start
for(int i = 0;i < NUM_SUN_LIGHTS;i ++){
sunLight = sunLights[i];
getSunLightInfo(sunLight,directLight);
#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
sunLightShadow = sunLightShadows[i];
directLight.color *=(directLight.visible && receiveShadow)? getSunShadow(sunShadowMap[i],sunLightShadow,UNROLLED_LOOP_INDEX): 1.0;
#endif
RE_Direct(directLight,geometryPosition,geometryNormal,geometryViewDir,geometryClearcoatNormal,material,reflectedLight);
}
#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
DirectionalLight directionalLight;
#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
DirectionalLightShadow directionalLightShadow;
#endif
#pragma unroll_loop_start
for(int i = 0;i < NUM_DIR_LIGHTS;i ++){
directionalLight = directionalLights[i];
getDirectionalLightInfo(directionalLight,directLight);
#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
directionalLightShadow = directionalLightShadows[i];
directLight.color *=(directLight.visible && receiveShadow)? getShadow(directionalShadowMap[i],directionalLightShadow.shadowMapSize,directionalLightShadow.shadowIntensity,directionalLightShadow.shadowBias,directionalLightShadow.shadowRadius,vDirectionalShadowCoord[i]): 1.0;
#endif
RE_Direct(directLight,geometryPosition,geometryNormal,geometryViewDir,geometryClearcoatNormal,material,reflectedLight);
}
#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
RectAreaLight rectAreaLight;
#pragma unroll_loop_start
for(int i = 0;i < NUM_RECT_AREA_LIGHTS;i ++){
rectAreaLight = rectAreaLights[i];
RE_Direct_RectArea(rectAreaLight,geometryPosition,geometryNormal,geometryViewDir,geometryClearcoatNormal,material,reflectedLight);
}
#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
vec3 iblIrradiance = vec3(0.0);
vec3 irradiance = getAmbientLightIrradiance(ambientLightColor);
#if defined( USE_LIGHT_PROBES )
irradiance += getLightProbeIrradiance(lightProbe,geometryNormal);
#endif
#if ( NUM_HEMI_LIGHTS > 0 )
#pragma unroll_loop_start
for(int i = 0;i < NUM_HEMI_LIGHTS;i ++){
irradiance += getHemisphereLightIrradiance(hemisphereLights[i],geometryNormal);
}
#pragma unroll_loop_end
#endif
#ifdef USE_LIGHT_PROBES_GRID
vec3 probeWorldPos =((vec4(geometryPosition,1.0)- viewMatrix[3])* viewMatrix).xyz;
vec3 probeWorldNormal = transformNormalByInverseViewMatrix(geometryNormal,viewMatrix);
irradiance += getLightProbeGridIrradiance(probeWorldPos,probeWorldNormal);
#endif
#endif
#if defined( RE_IndirectSpecular )
vec3 radiance = vec3(0.0);
vec3 clearcoatRadiance = vec3(0.0);
#endif`,B1=`#if defined( RE_IndirectDiffuse )
#ifdef USE_LIGHTMAP
vec4 lightMapTexel = texture2D(lightMap,vLightMapUv);
vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
irradiance += lightMapIrradiance;
#endif
#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
iblIrradiance += getIBLIrradiance(geometryNormal);
#endif
#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
#ifdef USE_ANISOTROPY
vec3 iblRadiance = getIBLAnisotropyRadiance(geometryViewDir,geometryNormal,material.roughness,material.anisotropyB,material.anisotropy);
#else
vec3 iblRadiance = getIBLRadiance(geometryViewDir,geometryNormal,material.roughness);
#endif
#ifdef USE_RETROREFLECTION
#ifdef USE_ANISOTROPY
vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance(geometryViewDir,geometryNormal,material.roughness,material.anisotropyB,material.anisotropy);
#else
vec3 retroIBLRadiance = getIBLRetroRadiance(geometryViewDir,geometryNormal,material.roughness);
#endif
iblRadiance = mix(iblRadiance,retroIBLRadiance,saturate(material.retroreflectivity));
#endif
radiance += iblRadiance;
#ifdef USE_CLEARCOAT
clearcoatRadiance += getIBLRadiance(geometryViewDir,geometryClearcoatNormal,material.clearcoatRoughness);
#endif
#endif`,z1=`#if defined( RE_IndirectDiffuse )
#if defined( LAMBERT ) || defined( PHONG )
irradiance += iblIrradiance;
#endif
RE_IndirectDiffuse(irradiance,geometryPosition,geometryNormal,geometryViewDir,geometryClearcoatNormal,material,reflectedLight);
#endif
#if defined( RE_IndirectSpecular )
RE_IndirectSpecular(radiance,iblIrradiance,clearcoatRadiance,geometryPosition,geometryNormal,geometryViewDir,geometryClearcoatNormal,material,reflectedLight);
#endif`,V1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance(vec3 worldPos,vec3 worldNormal){
vec3 res = probesResolution;
vec3 gridRange = probesMax - probesMin;
vec3 resMinusOne = res - 1.0;
vec3 probeSpacing = gridRange / resMinusOne;
vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
vec3 uvw = clamp((samplePos - probesMin)/ gridRange,0.0,1.0);
uvw = uvw * resMinusOne / res + 0.5 / res;
float nz = res.z;
float paddedSlices = nz + 2.0;
float atlasDepth = 7.0 * paddedSlices;
float uvZBase = uvw.z * nz + 1.0;
vec4 s0 = texture(probesSH,vec3(uvw.xy,(uvZBase)/ atlasDepth));
vec4 s1 = texture(probesSH,vec3(uvw.xy,(uvZBase + paddedSlices)/ atlasDepth));
vec4 s2 = texture(probesSH,vec3(uvw.xy,(uvZBase + 2.0 * paddedSlices)/ atlasDepth));
vec4 s3 = texture(probesSH,vec3(uvw.xy,(uvZBase + 3.0 * paddedSlices)/ atlasDepth));
vec4 s4 = texture(probesSH,vec3(uvw.xy,(uvZBase + 4.0 * paddedSlices)/ atlasDepth));
vec4 s5 = texture(probesSH,vec3(uvw.xy,(uvZBase + 5.0 * paddedSlices)/ atlasDepth));
vec4 s6 = texture(probesSH,vec3(uvw.xy,(uvZBase + 6.0 * paddedSlices)/ atlasDepth));
vec3 c0 = s0.xyz;
vec3 c1 = vec3(s0.w,s1.xy);
vec3 c2 = vec3(s1.zw,s2.x);
vec3 c3 = s2.yzw;
vec3 c4 = s3.xyz;
vec3 c5 = vec3(s3.w,s4.xy);
vec3 c6 = vec3(s4.zw,s5.x);
vec3 c7 = s5.yzw;
vec3 c8 = s6.xyz;
float x = worldNormal.x,y = worldNormal.y,z = worldNormal.z;
vec3 result = c0 * 0.886227;
result += c1 * 2.0 * 0.511664 * y;
result += c2 * 2.0 * 0.511664 * z;
result += c3 * 2.0 * 0.511664 * x;
result += c4 * 2.0 * 0.429043 * x * y;
result += c5 * 2.0 * 0.429043 * y * z;
result += c6 *(0.743125 * z * z - 0.247708);
result += c7 * 2.0 * 0.429043 * x * z;
result += c8 * 0.429043 *(x * x - y * y);
return max(result,vec3(0.0));
}
#endif`,G1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2(vFragDepth)* logDepthBufFC * 0.5;
#endif`,H1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
uniform float logDepthBufFC;
varying float vFragDepth;
varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
varying float vFragDepth;
varying float vIsPerspective;
#endif`,X1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
vFragDepth = 1.0 + gl_Position.w;
vIsPerspective = float(isPerspectiveMatrix(projectionMatrix));
#endif`,$1=`#ifdef USE_MAP
vec4 sampledDiffuseColor = texture2D(map,vMapUv);
#ifdef DECODE_VIDEO_TEXTURE
sampledDiffuseColor = sRGBTransferEOTF(sampledDiffuseColor);
#endif
diffuseColor *= sampledDiffuseColor;
#endif`,Y1=`#ifdef USE_MAP
uniform sampler2D map;
#endif`,q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
#if defined( USE_POINTS_UV )
vec2 uv = vUv;
#else
vec2 uv =(uvTransform * vec3(gl_PointCoord.x,1.0 - gl_PointCoord.y,1)).xy;
#endif
#endif
#ifdef USE_MAP
diffuseColor *= texture2D(map,uv);
#endif
#ifdef USE_ALPHAMAP
diffuseColor.a *= texture2D(alphaMap,uv).g;
#endif`,K1=`#if defined( USE_POINTS_UV )
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
#endif`,Z1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
vec4 texelMetalness = texture2D(metalnessMap,vMetalnessMapUv);
metalnessFactor *= texelMetalness.b;
#endif`,j1=`#ifdef USE_METALNESSMAP
uniform sampler2D metalnessMap;
#endif`,J1=`#ifdef USE_INSTANCING_MORPH
float morphTargetInfluences[MORPHTARGETS_COUNT];
float morphTargetBaseInfluence = texelFetch(morphTexture,ivec2(0,gl_InstanceID),0).r;
for(int i = 0;i < MORPHTARGETS_COUNT;i ++){
morphTargetInfluences[i]= texelFetch(morphTexture,ivec2(i + 1,gl_InstanceID),0).r;
}
#endif`,Q1=`#if defined( USE_MORPHCOLORS )
vColor *= morphTargetBaseInfluence;
for(int i = 0;i < MORPHTARGETS_COUNT;i ++){
#if defined( USE_COLOR_ALPHA )
if(morphTargetInfluences[i]!= 0.0)vColor += getMorph(gl_VertexID,i,2)* morphTargetInfluences[i];
#elif defined( USE_COLOR )
if(morphTargetInfluences[i]!= 0.0)vColor += getMorph(gl_VertexID,i,2).rgb * morphTargetInfluences[i];
#endif
}
#endif`,e_=`#ifdef USE_MORPHNORMALS
objectNormal *= morphTargetBaseInfluence;
for(int i = 0;i < MORPHTARGETS_COUNT;i ++){
if(morphTargetInfluences[i]!= 0.0)objectNormal += getMorph(gl_VertexID,i,1).xyz * morphTargetInfluences[i];
}
#endif`,t_=`#ifdef USE_MORPHTARGETS
#ifndef USE_INSTANCING_MORPH
uniform float morphTargetBaseInfluence;
uniform float morphTargetInfluences[MORPHTARGETS_COUNT];
#endif
uniform sampler2DArray morphTargetsTexture;
uniform ivec2 morphTargetsTextureSize;
vec4 getMorph(const in int vertexIndex,const in int morphTargetIndex,const in int offset){
int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
int y = texelIndex / morphTargetsTextureSize.x;
int x = texelIndex - y * morphTargetsTextureSize.x;
ivec3 morphUV = ivec3(x,y,morphTargetIndex);
return texelFetch(morphTargetsTexture,morphUV,0);
}
#endif`,n_=`#ifdef USE_MORPHTARGETS
transformed *= morphTargetBaseInfluence;
for(int i = 0;i < MORPHTARGETS_COUNT;i ++){
if(morphTargetInfluences[i]!= 0.0)transformed += getMorph(gl_VertexID,i,0).xyz * morphTargetInfluences[i];
}
#endif`,i_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
vec3 fdx = dFdx(vViewPosition);
vec3 fdy = dFdy(vViewPosition);
vec3 normal = normalize(cross(fdx,fdy));
#else
vec3 normal = normalize(vNormal);
#ifdef DOUBLE_SIDED
normal *= faceDirection;
#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
#ifdef USE_TANGENT
mat3 tbn = mat3(normalize(vTangent),normalize(vBitangent),normal);
#else
mat3 tbn = getTangentFrame(- vViewPosition,normal,
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
tbn[0]*= faceDirection;
tbn[1]*= faceDirection;
#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
#ifdef USE_TANGENT
mat3 tbn2 = mat3(normalize(vTangent),normalize(vBitangent),normal);
#else
mat3 tbn2 = getTangentFrame(- vViewPosition,normal,vClearcoatNormalMapUv);
#endif
#ifdef DOUBLE_SIDED
tbn2[0]*= faceDirection;
tbn2[1]*= faceDirection;
#endif
#endif
vec3 nonPerturbedNormal = normal;`,r_=`#ifdef USE_NORMALMAP_OBJECTSPACE
normal = texture2D(normalMap,vNormalMapUv).xyz * 2.0 - 1.0;
#ifdef FLIP_SIDED
normal = - normal;
#endif
#ifdef DOUBLE_SIDED
normal = normal * faceDirection;
#endif
normal = normalize(normalMatrix * normal);
#elif defined( USE_NORMALMAP_TANGENTSPACE )
vec3 mapN = texture2D(normalMap,vNormalMapUv).xyz * 2.0 - 1.0;
#if defined( USE_PACKED_NORMALMAP )
mapN = vec3(mapN.xy,sqrt(saturate(1.0 - dot(mapN.xy,mapN.xy))));
#endif
mapN.xy *= normalScale;
normal = normalize(tbn * mapN);
#elif defined( USE_BUMPMAP )
normal = perturbNormalArb(- vViewPosition,normal,dHdxy_fwd(),faceDirection);
#endif`,o_=`#ifndef FLAT_SHADED
varying vec3 vNormal;
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif`,s_=`#ifndef FLAT_SHADED
varying vec3 vNormal;
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif`,a_=`#ifndef FLAT_SHADED
vNormal = normalize(transformedNormal);
#ifdef USE_TANGENT
vTangent = normalize(transformedTangent);
vBitangent = normalize(cross(vNormal,vTangent)* tangent.w);
#ifdef FLIP_SIDED
vBitangent = - vBitangent;
#endif
#endif
#endif`,l_=`#ifdef USE_NORMALMAP
uniform sampler2D normalMap;
uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
mat3 getTangentFrame(vec3 eye_pos,vec3 surf_norm,vec2 uv){
vec3 q0 = dFdx(eye_pos.xyz);
vec3 q1 = dFdy(eye_pos.xyz);
vec2 st0 = dFdx(uv.st);
vec2 st1 = dFdy(uv.st);
vec3 N = surf_norm;
vec3 q1perp = cross(q1,N);
vec3 q0perp = cross(N,q0);
vec3 T = q1perp * st0.x + q0perp * st1.x;
vec3 B = q1perp * st0.y + q0perp * st1.y;
float det = max(dot(T,T),dot(B,B));
float scale =(det == 0.0)? 0.0 : inversesqrt(det);
return mat3(T * scale,B * scale,N);
}
#endif`,c_=`#ifdef USE_CLEARCOAT
vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u_=`#ifdef USE_CLEARCOAT_NORMALMAP
vec3 clearcoatMapN = texture2D(clearcoatNormalMap,vClearcoatNormalMapUv).xyz * 2.0 - 1.0;
clearcoatMapN.xy *= clearcoatNormalScale;
clearcoatNormal = normalize(tbn2 * clearcoatMapN);
#endif`,h_=`#ifdef USE_CLEARCOATMAP
uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
uniform sampler2D clearcoatNormalMap;
uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
uniform sampler2D clearcoatRoughnessMap;
#endif`,f_=`#ifdef USE_IRIDESCENCEMAP
uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
uniform sampler2D iridescenceThicknessMap;
#endif`,d_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4(outgoingLight,diffuseColor.a);`,p_=`vec3 packNormalToRGB(const in vec3 normal){
return normalize(normal)* 0.5 + 0.5;
}
vec3 unpackRGBToNormal(const in vec3 rgb){
return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4(1.0,256.0,256.0 * 256.0,256.0 * 256.0 * 256.0);
const vec2 UnpackFactors2 = vec2(UnpackDownscale,1.0 / PackFactors.g);
const vec3 UnpackFactors3 = vec3(UnpackDownscale / PackFactors.rg,1.0 / PackFactors.b);
const vec4 UnpackFactors4 = vec4(UnpackDownscale / PackFactors.rgb,1.0 / PackFactors.a);
vec4 packDepthToRGBA(const in float v){
if(v <= 0.0)
return vec4(0.,0.,0.,0.);
if(v >= 1.0)
return vec4(1.,1.,1.,1.);
float vuf;
float af = modf(v * PackFactors.a,vuf);
float bf = modf(vuf * ShiftRight8,vuf);
float gf = modf(vuf * ShiftRight8,vuf);
return vec4(vuf * Inv255,gf * PackUpscale,bf * PackUpscale,af);
}
vec3 packDepthToRGB(const in float v){
if(v <= 0.0)
return vec3(0.,0.,0.);
if(v >= 1.0)
return vec3(1.,1.,1.);
float vuf;
float bf = modf(v * PackFactors.b,vuf);
float gf = modf(vuf * ShiftRight8,vuf);
return vec3(vuf * Inv255,gf * PackUpscale,bf);
}
vec2 packDepthToRG(const in float v){
if(v <= 0.0)
return vec2(0.,0.);
if(v >= 1.0)
return vec2(1.,1.);
float vuf;
float gf = modf(v * 256.,vuf);
return vec2(vuf * Inv255,gf);
}
float unpackRGBAToDepth(const in vec4 v){
return dot(v,UnpackFactors4);
}
float unpackRGBToDepth(const in vec3 v){
return dot(v,UnpackFactors3);
}
float unpackRGToDepth(const in vec2 v){
return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA(const in vec2 v){
vec4 r = vec4(v.x,fract(v.x * 255.0),v.y,fract(v.y * 255.0));
return vec4(r.x - r.y / 255.0,r.y,r.z - r.w / 255.0,r.w);
}
vec2 unpackRGBATo2Half(const in vec4 v){
return vec2(v.x +(v.y / 255.0),v.z +(v.w / 255.0));
}
float viewZToOrthographicDepth(const in float viewZ,const in float near,const in float far){
return(viewZ + near)/(near - far);
}
float orthographicDepthToViewZ(const in float depth,const in float near,const in float far){
#ifdef USE_REVERSED_DEPTH_BUFFER
return depth *(far - near)- far;
#else
return depth *(near - far)- near;
#endif
}
float viewZToPerspectiveDepth(const in float viewZ,const in float near,const in float far){
return((near + viewZ)* far)/((far - near)* viewZ);
}
float perspectiveDepthToViewZ(const in float depth,const in float near,const in float far){
#ifdef USE_REVERSED_DEPTH_BUFFER
return(near * far)/((near - far)* depth - near);
#else
return(near * far)/((far - near)* depth - far);
#endif
}`,m_=`#ifdef PREMULTIPLIED_ALPHA
gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g_=`vec4 mvPosition = vec4(transformed,1.0);
#ifdef USE_BATCHING
mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b_=`#ifdef DITHERING
gl_FragColor.rgb = dithering(gl_FragColor.rgb);
#endif`,x_=`#ifdef DITHERING
vec3 dithering(vec3 color){
float grid_position = rand(gl_FragCoord.xy);
vec3 dither_shift_RGB = vec3(0.25 / 255.0,-0.25 / 255.0,0.25 / 255.0);
dither_shift_RGB = mix(2.0 * dither_shift_RGB,-2.0 * dither_shift_RGB,grid_position);
return color + dither_shift_RGB;
}
#endif`,y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
vec4 texelRoughness = texture2D(roughnessMap,vRoughnessMapUv);
roughnessFactor *= texelRoughness.g;
#endif`,v_=`#ifdef USE_ROUGHNESSMAP
uniform sampler2D roughnessMap;
#endif`,__=`#if NUM_SPOT_LIGHT_COORDS > 0
varying vec4 vSpotLightCoord[NUM_SPOT_LIGHT_COORDS];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
uniform sampler2D spotLightMap[NUM_SPOT_LIGHT_MAPS];
#endif
#ifdef USE_SHADOWMAP
#if NUM_SUN_LIGHT_SHADOWS > 0
#define SUN_LIGHT_CASCADES 2
#if defined( SHADOWMAP_TYPE_PCF )
uniform sampler2DShadow sunShadowMap[NUM_SUN_LIGHT_SHADOWS];
#else
uniform sampler2D sunShadowMap[NUM_SUN_LIGHT_SHADOWS];
#endif
uniform mat4 sunShadowMatrix[NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES];
uniform vec4 sunShadowCascade[NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES];
varying vec4 vSunShadowWorldPosition;
varying vec3 vSunShadowWorldNormal;
struct SunLightShadow{
float shadowIntensity;
float shadowBias;
float shadowNormalBias;
float shadowRadius;
vec2 shadowMapSize;
};
uniform SunLightShadow sunLightShadows[NUM_SUN_LIGHT_SHADOWS];
#endif
#if NUM_DIR_LIGHT_SHADOWS > 0
#if defined( SHADOWMAP_TYPE_PCF )
uniform sampler2DShadow directionalShadowMap[NUM_DIR_LIGHT_SHADOWS];
#else
uniform sampler2D directionalShadowMap[NUM_DIR_LIGHT_SHADOWS];
#endif
varying vec4 vDirectionalShadowCoord[NUM_DIR_LIGHT_SHADOWS];
struct DirectionalLightShadow{
float shadowIntensity;
float shadowBias;
float shadowNormalBias;
float shadowRadius;
vec2 shadowMapSize;
};
uniform DirectionalLightShadow directionalLightShadows[NUM_DIR_LIGHT_SHADOWS];
#endif
#if NUM_SPOT_LIGHT_SHADOWS > 0
#if defined( SHADOWMAP_TYPE_PCF )
uniform sampler2DShadow spotShadowMap[NUM_SPOT_LIGHT_SHADOWS];
#else
uniform sampler2D spotShadowMap[NUM_SPOT_LIGHT_SHADOWS];
#endif
struct SpotLightShadow{
float shadowIntensity;
float shadowBias;
float shadowNormalBias;
float shadowRadius;
vec2 shadowMapSize;
};
uniform SpotLightShadow spotLightShadows[NUM_SPOT_LIGHT_SHADOWS];
#endif
#if NUM_POINT_LIGHT_SHADOWS > 0
#if defined( SHADOWMAP_TYPE_PCF )
uniform samplerCubeShadow pointShadowMap[NUM_POINT_LIGHT_SHADOWS];
#elif defined( SHADOWMAP_TYPE_BASIC )
uniform samplerCube pointShadowMap[NUM_POINT_LIGHT_SHADOWS];
#endif
varying vec4 vPointShadowCoord[NUM_POINT_LIGHT_SHADOWS];
struct PointLightShadow{
float shadowIntensity;
float shadowBias;
float shadowNormalBias;
float shadowRadius;
vec2 shadowMapSize;
float shadowCameraNear;
float shadowCameraFar;
};
uniform PointLightShadow pointLightShadows[NUM_POINT_LIGHT_SHADOWS];
#endif
#if defined( SHADOWMAP_TYPE_PCF )
float interleavedGradientNoise(vec2 position){
return fract(52.9829189 * fract(dot(position,vec2(0.06711056,0.00583715))));
}
vec2 vogelDiskSample(int sampleIndex,int samplesCount,float phi){
const float goldenAngle = 2.399963229728653;
float r = sqrt((float(sampleIndex)+ 0.5)/ float(samplesCount));
float theta = float(sampleIndex)* goldenAngle + phi;
return vec2(cos(theta),sin(theta))* r;
}
#endif
#if defined( SHADOWMAP_TYPE_PCF )
float getShadow(sampler2DShadow shadowMap,vec2 shadowMapSize,float shadowIntensity,float shadowBias,float shadowRadius,vec4 shadowCoord){
float shadow = 1.0;
shadowCoord.xyz /= shadowCoord.w;
shadowCoord.z += shadowBias;
bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
if(frustumTest){
vec2 texelSize = vec2(1.0)/ shadowMapSize;
float radius = shadowRadius * texelSize.x;
float phi = interleavedGradientNoise(gl_FragCoord.xy)* PI2;
shadow =(
texture(shadowMap,vec3(shadowCoord.xy + vogelDiskSample(0,5,phi)* radius,shadowCoord.z))+
texture(shadowMap,vec3(shadowCoord.xy + vogelDiskSample(1,5,phi)* radius,shadowCoord.z))+
texture(shadowMap,vec3(shadowCoord.xy + vogelDiskSample(2,5,phi)* radius,shadowCoord.z))+
texture(shadowMap,vec3(shadowCoord.xy + vogelDiskSample(3,5,phi)* radius,shadowCoord.z))+
texture(shadowMap,vec3(shadowCoord.xy + vogelDiskSample(4,5,phi)* radius,shadowCoord.z))
)* 0.2;
}
return mix(1.0,shadow,shadowIntensity);
}
#elif defined( SHADOWMAP_TYPE_VSM )
float getShadow(sampler2D shadowMap,vec2 shadowMapSize,float shadowIntensity,float shadowBias,float shadowRadius,vec4 shadowCoord){
float shadow = 1.0;
shadowCoord.xyz /= shadowCoord.w;
#ifdef USE_REVERSED_DEPTH_BUFFER
shadowCoord.z -= shadowBias;
#else
shadowCoord.z += shadowBias;
#endif
bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
if(frustumTest){
vec2 distribution = texture2D(shadowMap,shadowCoord.xy).rg;
float mean = distribution.x;
float variance = distribution.y * distribution.y;
#ifdef USE_REVERSED_DEPTH_BUFFER
float hard_shadow = step(mean,shadowCoord.z);
#else
float hard_shadow = step(shadowCoord.z,mean);
#endif
if(hard_shadow == 1.0){
shadow = 1.0;
}else{
variance = max(variance,0.0000001);
float d = shadowCoord.z - mean;
float p_max = variance /(variance + d * d);
p_max = clamp((p_max - 0.3)/ 0.65,0.0,1.0);
shadow = max(hard_shadow,p_max);
}
}
return mix(1.0,shadow,shadowIntensity);
}
#else
float getShadow(sampler2D shadowMap,vec2 shadowMapSize,float shadowIntensity,float shadowBias,float shadowRadius,vec4 shadowCoord){
float shadow = 1.0;
shadowCoord.xyz /= shadowCoord.w;
#ifdef USE_REVERSED_DEPTH_BUFFER
shadowCoord.z -= shadowBias;
#else
shadowCoord.z += shadowBias;
#endif
bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
if(frustumTest){
float depth = texture2D(shadowMap,shadowCoord.xy).r;
#ifdef USE_REVERSED_DEPTH_BUFFER
shadow = step(depth,shadowCoord.z);
#else
shadow = step(shadowCoord.z,depth);
#endif
}
return mix(1.0,shadow,shadowIntensity);
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
){
vec4 shadowWorldPosition = vec4(vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias,1.0);
float viewDepth = vSunShadowWorldPosition.w;
int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
float shadow = 1.0;
for(int i = SUN_LIGHT_CASCADES - 1;i >= 0;i --){
vec4 cascade = sunShadowCascade[cascadeOffset + i];
if(viewDepth >= cascade.x && viewDepth < cascade.y){
float cascadeShadow = getShadow(
shadowMap,
sunLightShadow.shadowMapSize,
sunLightShadow.shadowIntensity,
sunLightShadow.shadowBias,
sunLightShadow.shadowRadius,
sunShadowMatrix[cascadeOffset + i]* shadowWorldPosition
);
shadow = mix(cascadeShadow,shadow,smoothstep(cascade.z,cascade.y,viewDepth));
}
}
return shadow;
}
#endif
#if NUM_POINT_LIGHT_SHADOWS > 0
#if defined( SHADOWMAP_TYPE_PCF )
float getPointShadow(samplerCubeShadow shadowMap,vec2 shadowMapSize,float shadowIntensity,float shadowBias,float shadowRadius,vec4 shadowCoord,float shadowCameraNear,float shadowCameraFar){
float shadow = 1.0;
vec3 lightToPosition = shadowCoord.xyz;
vec3 bd3D = normalize(lightToPosition);
vec3 absVec = abs(lightToPosition);
float viewSpaceZ = max(max(absVec.x,absVec.y),absVec.z);
if(viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0){
#ifdef USE_REVERSED_DEPTH_BUFFER
float dp =(shadowCameraNear *(shadowCameraFar - viewSpaceZ))/(viewSpaceZ *(shadowCameraFar - shadowCameraNear));
dp -= shadowBias;
#else
float dp =(shadowCameraFar *(viewSpaceZ - shadowCameraNear))/(viewSpaceZ *(shadowCameraFar - shadowCameraNear));
dp += shadowBias;
#endif
float texelSize = shadowRadius / shadowMapSize.x;
vec3 absDir = abs(bd3D);
vec3 tangent = absDir.x > absDir.z ? vec3(0.0,1.0,0.0): vec3(1.0,0.0,0.0);
tangent = normalize(cross(bd3D,tangent));
vec3 bitangent = cross(bd3D,tangent);
float phi = interleavedGradientNoise(gl_FragCoord.xy)* PI2;
vec2 sample0 = vogelDiskSample(0,5,phi);
vec2 sample1 = vogelDiskSample(1,5,phi);
vec2 sample2 = vogelDiskSample(2,5,phi);
vec2 sample3 = vogelDiskSample(3,5,phi);
vec2 sample4 = vogelDiskSample(4,5,phi);
shadow =(
texture(shadowMap,vec4(bd3D +(tangent * sample0.x + bitangent * sample0.y)* texelSize,dp))+
texture(shadowMap,vec4(bd3D +(tangent * sample1.x + bitangent * sample1.y)* texelSize,dp))+
texture(shadowMap,vec4(bd3D +(tangent * sample2.x + bitangent * sample2.y)* texelSize,dp))+
texture(shadowMap,vec4(bd3D +(tangent * sample3.x + bitangent * sample3.y)* texelSize,dp))+
texture(shadowMap,vec4(bd3D +(tangent * sample4.x + bitangent * sample4.y)* texelSize,dp))
)* 0.2;
}
return mix(1.0,shadow,shadowIntensity);
}
#elif defined( SHADOWMAP_TYPE_BASIC )
float getPointShadow(samplerCube shadowMap,vec2 shadowMapSize,float shadowIntensity,float shadowBias,float shadowRadius,vec4 shadowCoord,float shadowCameraNear,float shadowCameraFar){
float shadow = 1.0;
vec3 lightToPosition = shadowCoord.xyz;
vec3 absVec = abs(lightToPosition);
float viewSpaceZ = max(max(absVec.x,absVec.y),absVec.z);
if(viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0){
float dp =(shadowCameraFar *(viewSpaceZ - shadowCameraNear))/(viewSpaceZ *(shadowCameraFar - shadowCameraNear));
dp += shadowBias;
vec3 bd3D = normalize(lightToPosition);
float depth = textureCube(shadowMap,bd3D).r;
#ifdef USE_REVERSED_DEPTH_BUFFER
depth = 1.0 - depth;
#endif
shadow = step(dp,depth);
}
return mix(1.0,shadow,shadowIntensity);
}
#endif
#endif
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
uniform mat4 spotLightMatrix[NUM_SPOT_LIGHT_COORDS];
varying vec4 vSpotLightCoord[NUM_SPOT_LIGHT_COORDS];
#endif
#ifdef USE_SHADOWMAP
#if NUM_SUN_LIGHT_SHADOWS > 0
varying vec4 vSunShadowWorldPosition;
varying vec3 vSunShadowWorldNormal;
#endif
#if NUM_DIR_LIGHT_SHADOWS > 0
uniform mat4 directionalShadowMatrix[NUM_DIR_LIGHT_SHADOWS];
varying vec4 vDirectionalShadowCoord[NUM_DIR_LIGHT_SHADOWS];
struct DirectionalLightShadow{
float shadowIntensity;
float shadowBias;
float shadowNormalBias;
float shadowRadius;
vec2 shadowMapSize;
};
uniform DirectionalLightShadow directionalLightShadows[NUM_DIR_LIGHT_SHADOWS];
#endif
#if NUM_SPOT_LIGHT_SHADOWS > 0
struct SpotLightShadow{
float shadowIntensity;
float shadowBias;
float shadowNormalBias;
float shadowRadius;
vec2 shadowMapSize;
};
uniform SpotLightShadow spotLightShadows[NUM_SPOT_LIGHT_SHADOWS];
#endif
#if NUM_POINT_LIGHT_SHADOWS > 0
uniform mat4 pointShadowMatrix[NUM_POINT_LIGHT_SHADOWS];
varying vec4 vPointShadowCoord[NUM_POINT_LIGHT_SHADOWS];
struct PointLightShadow{
float shadowIntensity;
float shadowBias;
float shadowNormalBias;
float shadowRadius;
vec2 shadowMapSize;
float shadowCameraNear;
float shadowCameraFar;
};
uniform PointLightShadow pointLightShadows[NUM_POINT_LIGHT_SHADOWS];
#endif
#endif`,w_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
#ifdef HAS_NORMAL
vec3 shadowWorldNormal = transformNormalByInverseViewMatrix(transformedNormal,viewMatrix);
#else
vec3 shadowWorldNormal = vec3(0.0);
#endif
vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
#if NUM_SUN_LIGHT_SHADOWS > 0
vSunShadowWorldPosition = vec4(worldPosition.xyz,- mvPosition.z);
vSunShadowWorldNormal = shadowWorldNormal;
#endif
#if NUM_DIR_LIGHT_SHADOWS > 0
#pragma unroll_loop_start
for(int i = 0;i < NUM_DIR_LIGHT_SHADOWS;i ++){
shadowWorldPosition = worldPosition + vec4(shadowWorldNormal * directionalLightShadows[i].shadowNormalBias,0);
vDirectionalShadowCoord[i]= directionalShadowMatrix[i]* shadowWorldPosition;
}
#pragma unroll_loop_end
#endif
#if NUM_POINT_LIGHT_SHADOWS > 0
#pragma unroll_loop_start
for(int i = 0;i < NUM_POINT_LIGHT_SHADOWS;i ++){
shadowWorldPosition = worldPosition + vec4(shadowWorldNormal * pointLightShadows[i].shadowNormalBias,0);
vPointShadowCoord[i]= pointShadowMatrix[i]* shadowWorldPosition;
}
#pragma unroll_loop_end
#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
#pragma unroll_loop_start
for(int i = 0;i < NUM_SPOT_LIGHT_COORDS;i ++){
shadowWorldPosition = worldPosition;
#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[i].shadowNormalBias;
#endif
vSpotLightCoord[i]= spotLightMatrix[i]* shadowWorldPosition;
}
#pragma unroll_loop_end
#endif`,S_=`float getShadowMask(){
float shadow = 1.0;
#ifdef USE_SHADOWMAP
#if NUM_SUN_LIGHT_SHADOWS > 0
SunLightShadow sunLight;
#pragma unroll_loop_start
for(int i = 0;i < NUM_SUN_LIGHT_SHADOWS;i ++){
sunLight = sunLightShadows[i];
shadow *= receiveShadow ? getSunShadow(sunShadowMap[i],sunLight,UNROLLED_LOOP_INDEX): 1.0;
}
#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHT_SHADOWS > 0
DirectionalLightShadow directionalLight;
#pragma unroll_loop_start
for(int i = 0;i < NUM_DIR_LIGHT_SHADOWS;i ++){
directionalLight = directionalLightShadows[i];
shadow *= receiveShadow ? getShadow(directionalShadowMap[i],directionalLight.shadowMapSize,directionalLight.shadowIntensity,directionalLight.shadowBias,directionalLight.shadowRadius,vDirectionalShadowCoord[i]): 1.0;
}
#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHT_SHADOWS > 0
SpotLightShadow spotLight;
#pragma unroll_loop_start
for(int i = 0;i < NUM_SPOT_LIGHT_SHADOWS;i ++){
spotLight = spotLightShadows[i];
shadow *= receiveShadow ? getShadow(spotShadowMap[i],spotLight.shadowMapSize,spotLight.shadowIntensity,spotLight.shadowBias,spotLight.shadowRadius,vSpotLightCoord[i]): 1.0;
}
#pragma unroll_loop_end
#endif
#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
PointLightShadow pointLight;
#pragma unroll_loop_start
for(int i = 0;i < NUM_POINT_LIGHT_SHADOWS;i ++){
pointLight = pointLightShadows[i];
shadow *= receiveShadow ? getPointShadow(pointShadowMap[i],pointLight.shadowMapSize,pointLight.shadowIntensity,pointLight.shadowBias,pointLight.shadowRadius,vPointShadowCoord[i],pointLight.shadowCameraNear,pointLight.shadowCameraFar): 1.0;
}
#pragma unroll_loop_end
#endif
#endif
return shadow;
}`,T_=`#ifdef USE_SKINNING
mat4 boneMatX = getBoneMatrix(skinIndex.x);
mat4 boneMatY = getBoneMatrix(skinIndex.y);
mat4 boneMatZ = getBoneMatrix(skinIndex.z);
mat4 boneMatW = getBoneMatrix(skinIndex.w);
#endif`,A_=`#ifdef USE_SKINNING
uniform mat4 bindMatrix;
uniform mat4 bindMatrixInverse;
uniform highp sampler2D boneTexture;
mat4 getBoneMatrix(const in float i){
int size = textureSize(boneTexture,0).x;
int j = int(i)* 4;
int x = j % size;
int y = j / size;
vec4 v1 = texelFetch(boneTexture,ivec2(x,y),0);
vec4 v2 = texelFetch(boneTexture,ivec2(x + 1,y),0);
vec4 v3 = texelFetch(boneTexture,ivec2(x + 2,y),0);
vec4 v4 = texelFetch(boneTexture,ivec2(x + 3,y),0);
return mat4(v1,v2,v3,v4);
}
#endif`,E_=`#ifdef USE_SKINNING
vec4 skinVertex = bindMatrix * vec4(transformed,1.0);
vec4 skinned = vec4(0.0);
skinned += boneMatX * skinVertex * skinWeight.x;
skinned += boneMatY * skinVertex * skinWeight.y;
skinned += boneMatZ * skinVertex * skinWeight.z;
skinned += boneMatW * skinVertex * skinWeight.w;
transformed =(bindMatrixInverse * skinned).xyz;
#endif`,R_=`#ifdef USE_SKINNING
mat4 skinMatrix = mat4(0.0);
skinMatrix += skinWeight.x * boneMatX;
skinMatrix += skinWeight.y * boneMatY;
skinMatrix += skinWeight.z * boneMatZ;
skinMatrix += skinWeight.w * boneMatW;
skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
objectNormal = vec4(skinMatrix * vec4(objectNormal,0.0)).xyz;
#ifdef USE_TANGENT
objectTangent = vec4(skinMatrix * vec4(objectTangent,0.0)).xyz;
#endif
#endif`,P_=`float specularStrength;
#ifdef USE_SPECULARMAP
vec4 texelSpecular = texture2D(specularMap,vSpecularMapUv);
specularStrength = texelSpecular.r;
#else
specularStrength = 1.0;
#endif`,C_=`#ifdef USE_SPECULARMAP
uniform sampler2D specularMap;
#endif`,I_=`#if defined( TONE_MAPPING )
gl_FragColor.rgb = toneMapping(gl_FragColor.rgb);
#endif`,L_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping(vec3 color){
return saturate(toneMappingExposure * color);
}
vec3 ReinhardToneMapping(vec3 color){
color *= toneMappingExposure;
return saturate(color /(vec3(1.0)+ color));
}
vec3 CineonToneMapping(vec3 color){
color *= toneMappingExposure;
color = max(vec3(0.0),color - 0.004);
return pow((color *(6.2 * color + 0.5))/(color *(6.2 * color + 1.7)+ 0.06),vec3(2.2));
}
vec3 RRTAndODTFit(vec3 v){
vec3 a = v *(v + 0.0245786)- 0.000090537;
vec3 b = v *(0.983729 * v + 0.4329510)+ 0.238081;
return a / b;
}
vec3 ACESFilmicToneMapping(vec3 color){
const mat3 ACESInputMat = mat3(
vec3(0.59719,0.07600,0.02840),vec3(0.35458,0.90834,0.13383),
vec3(0.04823,0.01566,0.83777)
);
const mat3 ACESOutputMat = mat3(
vec3(1.60475,-0.10208,-0.00327),vec3(-0.53108,1.10813,-0.07276),
vec3(-0.07367,-0.00605,1.07602)
);
color *= toneMappingExposure / 0.6;
color = ACESInputMat * color;
color = RRTAndODTFit(color);
color = ACESOutputMat * color;
return saturate(color);
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
vec3(1.6605,- 0.1246,- 0.0182),
vec3(- 0.5876,1.1329,- 0.1006),
vec3(- 0.0728,- 0.0083,1.1187)
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
vec3(0.6274,0.0691,0.0164),
vec3(0.3293,0.9195,0.0880),
vec3(0.0433,0.0113,0.8956)
);
vec3 agxDefaultContrastApprox(vec3 x){
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
vec3 AgXToneMapping(vec3 color){
const mat3 AgXInsetMatrix = mat3(
vec3(0.856627153315983,0.137318972929847,0.11189821299995),
vec3(0.0951212405381588,0.761241990602591,0.0767994186031903),
vec3(0.0482516061458583,0.101439036467562,0.811302368396859)
);
const mat3 AgXOutsetMatrix = mat3(
vec3(1.1271005818144368,- 0.1413297634984383,- 0.14132976349843826),
vec3(- 0.11060664309660323,1.157823702216272,- 0.11060664309660294),
vec3(- 0.016493938717834573,- 0.016493938717834257,1.2519364065950405)
);
const float AgxMinEv = - 12.47393;const float AgxMaxEv = 4.026069;
color *= toneMappingExposure;
color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
color = AgXInsetMatrix * color;
color = max(color,1e-10);color = log2(color);
color =(color - AgxMinEv)/(AgxMaxEv - AgxMinEv);
color = clamp(color,0.0,1.0);
color = agxDefaultContrastApprox(color);
color = AgXOutsetMatrix * color;
color = pow(max(vec3(0.0),color),vec3(2.2));
color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
color = clamp(color,0.0,1.0);
return color;
}
vec3 NeutralToneMapping(vec3 color){
const float StartCompression = 0.8 - 0.04;
const float Desaturation = 0.15;
color *= toneMappingExposure;
float x = min(color.r,min(color.g,color.b));
float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
color -= offset;
float peak = max(color.r,max(color.g,color.b));
if(peak < StartCompression)return color;
float d = 1. - StartCompression;
float newPeak = 1. - d * d /(peak + d - StartCompression);
color *= newPeak / peak;
float g = 1. - 1. /(Desaturation *(peak - newPeak)+ 1.);
return mix(color,vec3(newPeak),g);
}
vec3 CustomToneMapping(vec3 color){return color;}`,F_=`#ifdef USE_TRANSMISSION
material.transmission = transmission;
material.transmissionAlpha = 1.0;
material.thickness = thickness;
material.attenuationDistance = attenuationDistance;
material.attenuationColor = attenuationColor;
#ifdef USE_TRANSMISSIONMAP
material.transmission *= texture2D(transmissionMap,vTransmissionMapUv).r;
#endif
#ifdef USE_THICKNESSMAP
material.thickness *= texture2D(thicknessMap,vThicknessMapUv).g;
#endif
vec3 pos = vWorldPosition;
vec3 v = normalize(cameraPosition - pos);
vec3 n = transformNormalByInverseViewMatrix(normal,viewMatrix);
vec4 transmitted = getIBLVolumeRefraction(
n,v,material.roughness,material.diffuseContribution,material.specularColorBlended,material.specularF90,
pos,modelMatrix,viewMatrix,projectionMatrix,material.dispersion,material.ior,material.thickness,
material.attenuationColor,material.attenuationDistance);
material.transmissionAlpha = mix(material.transmissionAlpha,transmitted.a,material.transmission);
totalDiffuse = mix(totalDiffuse,transmitted.rgb,material.transmission);
#endif`,k_=`#ifdef USE_TRANSMISSION
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
float w0(float a){
return(1.0 / 6.0)*(a *(a *(- a + 3.0)- 3.0)+ 1.0);
}
float w1(float a){
return(1.0 / 6.0)*(a * a *(3.0 * a - 6.0)+ 4.0);
}
float w2(float a){
return(1.0 / 6.0)*(a *(a *(- 3.0 * a + 3.0)+ 3.0)+ 1.0);
}
float w3(float a){
return(1.0 / 6.0)*(a * a * a);
}
float g0(float a){
return w0(a)+ w1(a);
}
float g1(float a){
return w2(a)+ w3(a);
}
float h0(float a){
return - 1.0 + w1(a)/(w0(a)+ w1(a));
}
float h1(float a){
return 1.0 + w3(a)/(w2(a)+ w3(a));
}
vec4 bicubic(sampler2D tex,vec2 uv,vec4 texelSize,float lod){
uv = uv * texelSize.zw + 0.5;
vec2 iuv = floor(uv);
vec2 fuv = fract(uv);
float g0x = g0(fuv.x);
float g1x = g1(fuv.x);
float h0x = h0(fuv.x);
float h1x = h1(fuv.x);
float h0y = h0(fuv.y);
float h1y = h1(fuv.y);
vec2 p0 =(vec2(iuv.x + h0x,iuv.y + h0y)- 0.5)* texelSize.xy;
vec2 p1 =(vec2(iuv.x + h1x,iuv.y + h0y)- 0.5)* texelSize.xy;
vec2 p2 =(vec2(iuv.x + h0x,iuv.y + h1y)- 0.5)* texelSize.xy;
vec2 p3 =(vec2(iuv.x + h1x,iuv.y + h1y)- 0.5)* texelSize.xy;
return g0(fuv.y)*(g0x * textureLod(tex,p0,lod)+ g1x * textureLod(tex,p1,lod))+
g1(fuv.y)*(g0x * textureLod(tex,p2,lod)+ g1x * textureLod(tex,p3,lod));
}
vec4 textureBicubic(sampler2D sampler,vec2 uv,float lod){
vec2 fLodSize = vec2(textureSize(sampler,int(lod)));
vec2 cLodSize = vec2(textureSize(sampler,int(lod + 1.0)));
vec2 fLodSizeInv = 1.0 / fLodSize;
vec2 cLodSizeInv = 1.0 / cLodSize;
vec4 fSample = bicubic(sampler,uv,vec4(fLodSizeInv,fLodSize),floor(lod));
vec4 cSample = bicubic(sampler,uv,vec4(cLodSizeInv,cLodSize),ceil(lod));
return mix(fSample,cSample,fract(lod));
}
vec3 getVolumeTransmissionRay(const in vec3 n,const in vec3 v,const in float thickness,const in float ior,const in mat4 modelMatrix){
vec3 refractionVector = refract(- v,normalize(n),1.0 / ior);
vec3 modelScale;
modelScale.x = length(vec3(modelMatrix[0].xyz));
modelScale.y = length(vec3(modelMatrix[1].xyz));
modelScale.z = length(vec3(modelMatrix[2].xyz));
return normalize(refractionVector)* thickness * modelScale;
}
float applyIorToRoughness(const in float roughness,const in float ior){
return roughness * clamp(ior * 2.0 - 2.0,0.0,1.0);
}
vec4 getTransmissionSample(const in vec2 fragCoord,const in float roughness,const in float ior){
float lod = log2(transmissionSamplerSize.x)* applyIorToRoughness(roughness,ior);
return textureBicubic(transmissionSamplerMap,fragCoord.xy,lod);
}
vec3 volumeAttenuation(const in float transmissionDistance,const in vec3 attenuationColor,const in float attenuationDistance){
if(isinf(attenuationDistance)){
return vec3(1.0);
}else{
vec3 attenuationCoefficient = -log(attenuationColor)/ attenuationDistance;
vec3 transmittance = exp(- attenuationCoefficient * transmissionDistance);return transmittance;
}
}
vec4 getIBLVolumeRefraction(const in vec3 n,const in vec3 v,const in float roughness,const in vec3 diffuseColor,
const in vec3 specularColor,const in float specularF90,const in vec3 position,const in mat4 modelMatrix,
const in mat4 viewMatrix,const in mat4 projMatrix,const in float dispersion,const in float ior,const in float thickness,
const in vec3 attenuationColor,const in float attenuationDistance){
vec4 transmittedLight;
vec3 transmittance;
#ifdef USE_DISPERSION
float halfSpread =(ior - 1.0)* 0.025 * dispersion;
vec3 iors = vec3(ior - halfSpread,ior,ior + halfSpread);
for(int i = 0;i < 3;i ++){
vec3 transmissionRay = getVolumeTransmissionRay(n,v,thickness,iors[i],modelMatrix);
vec3 refractedRayExit = position + transmissionRay;
vec4 ndcPos = projMatrix * viewMatrix * vec4(refractedRayExit,1.0);
vec2 refractionCoords = ndcPos.xy / ndcPos.w;
refractionCoords += 1.0;
refractionCoords /= 2.0;
vec4 transmissionSample = getTransmissionSample(refractionCoords,roughness,iors[i]);
transmittedLight[i]= transmissionSample[i];
transmittedLight.a += transmissionSample.a;
transmittance[i]= diffuseColor[i]* volumeAttenuation(length(transmissionRay),attenuationColor,attenuationDistance)[i];
}
transmittedLight.a /= 3.0;
#else
vec3 transmissionRay = getVolumeTransmissionRay(n,v,thickness,ior,modelMatrix);
vec3 refractedRayExit = position + transmissionRay;
vec4 ndcPos = projMatrix * viewMatrix * vec4(refractedRayExit,1.0);
vec2 refractionCoords = ndcPos.xy / ndcPos.w;
refractionCoords += 1.0;
refractionCoords /= 2.0;
transmittedLight = getTransmissionSample(refractionCoords,roughness,ior);
transmittance = diffuseColor * volumeAttenuation(length(transmissionRay),attenuationColor,attenuationDistance);
#endif
vec3 attenuatedColor = transmittance * transmittedLight.rgb;
vec3 F = EnvironmentBRDF(n,v,specularColor,specularF90,roughness);
float transmittanceFactor =(transmittance.r + transmittance.g + transmittance.b)/ 3.0;
return vec4((1.0 - F)* attenuatedColor,1.0 -(1.0 - transmittedLight.a)* transmittanceFactor);
}
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
vUv = vec3(uv,1).xy;
#endif
#ifdef USE_MAP
vMapUv =(mapTransform * vec3(MAP_UV,1)).xy;
#endif
#ifdef USE_ALPHAMAP
vAlphaMapUv =(alphaMapTransform * vec3(ALPHAMAP_UV,1)).xy;
#endif
#ifdef USE_LIGHTMAP
vLightMapUv =(lightMapTransform * vec3(LIGHTMAP_UV,1)).xy;
#endif
#ifdef USE_AOMAP
vAoMapUv =(aoMapTransform * vec3(AOMAP_UV,1)).xy;
#endif
#ifdef USE_BUMPMAP
vBumpMapUv =(bumpMapTransform * vec3(BUMPMAP_UV,1)).xy;
#endif
#ifdef USE_NORMALMAP
vNormalMapUv =(normalMapTransform * vec3(NORMALMAP_UV,1)).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
vDisplacementMapUv =(displacementMapTransform * vec3(DISPLACEMENTMAP_UV,1)).xy;
#endif
#ifdef USE_EMISSIVEMAP
vEmissiveMapUv =(emissiveMapTransform * vec3(EMISSIVEMAP_UV,1)).xy;
#endif
#ifdef USE_METALNESSMAP
vMetalnessMapUv =(metalnessMapTransform * vec3(METALNESSMAP_UV,1)).xy;
#endif
#ifdef USE_ROUGHNESSMAP
vRoughnessMapUv =(roughnessMapTransform * vec3(ROUGHNESSMAP_UV,1)).xy;
#endif
#ifdef USE_ANISOTROPYMAP
vAnisotropyMapUv =(anisotropyMapTransform * vec3(ANISOTROPYMAP_UV,1)).xy;
#endif
#ifdef USE_CLEARCOATMAP
vClearcoatMapUv =(clearcoatMapTransform * vec3(CLEARCOATMAP_UV,1)).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
vClearcoatNormalMapUv =(clearcoatNormalMapTransform * vec3(CLEARCOAT_NORMALMAP_UV,1)).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
vClearcoatRoughnessMapUv =(clearcoatRoughnessMapTransform * vec3(CLEARCOAT_ROUGHNESSMAP_UV,1)).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
vIridescenceMapUv =(iridescenceMapTransform * vec3(IRIDESCENCEMAP_UV,1)).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
vIridescenceThicknessMapUv =(iridescenceThicknessMapTransform * vec3(IRIDESCENCE_THICKNESSMAP_UV,1)).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
vSheenColorMapUv =(sheenColorMapTransform * vec3(SHEEN_COLORMAP_UV,1)).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
vSheenRoughnessMapUv =(sheenRoughnessMapTransform * vec3(SHEEN_ROUGHNESSMAP_UV,1)).xy;
#endif
#ifdef USE_SPECULARMAP
vSpecularMapUv =(specularMapTransform * vec3(SPECULARMAP_UV,1)).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
vSpecularColorMapUv =(specularColorMapTransform * vec3(SPECULAR_COLORMAP_UV,1)).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
vSpecularIntensityMapUv =(specularIntensityMapTransform * vec3(SPECULAR_INTENSITYMAP_UV,1)).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
vTransmissionMapUv =(transmissionMapTransform * vec3(TRANSMISSIONMAP_UV,1)).xy;
#endif
#ifdef USE_THICKNESSMAP
vThicknessMapUv =(thicknessMapTransform * vec3(THICKNESSMAP_UV,1)).xy;
#endif`,U_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
vec4 worldPosition = vec4(transformed,1.0);
#ifdef USE_BATCHING
worldPosition = batchingMatrix * worldPosition;
#endif
#ifdef USE_INSTANCING
worldPosition = instanceMatrix * worldPosition;
#endif
worldPosition = modelMatrix * worldPosition;
#endif`,B_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main(){
vUv =(uvTransform * vec3(uv,1)).xy;
gl_Position = vec4(position.xy,1.0,1.0);
}`,z_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main(){
vec4 texColor = texture2D(t2D,vUv);
#ifdef DECODE_VIDEO_TEXTURE
texColor = vec4(mix(pow(texColor.rgb * 0.9478672986 + vec3(0.0521327014),vec3(2.4)),texColor.rgb * 0.0773993808,vec3(lessThanEqual(texColor.rgb,vec3(0.04045)))),texColor.w);
#endif
texColor.rgb *= backgroundIntensity;
gl_FragColor = texColor;
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main(){
vWorldDirection = transformDirection(position,modelMatrix);
#include <begin_vertex>
#include <project_vertex>
gl_Position.z = gl_Position.w;
}`,G_=`#ifdef ENVMAP_TYPE_CUBE
uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main(){
#ifdef ENVMAP_TYPE_CUBE
vec4 texColor = textureCube(envMap,backgroundRotation * vWorldDirection);
#elif defined( ENVMAP_TYPE_CUBE_UV )
vec4 texColor = textureCubeUV(envMap,backgroundRotation * vWorldDirection,backgroundBlurriness);
#else
vec4 texColor = vec4(0.0,0.0,0.0,1.0);
#endif
texColor.rgb *= backgroundIntensity;
gl_FragColor = texColor;
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main(){
vWorldDirection = transformDirection(position,modelMatrix);
#include <begin_vertex>
#include <project_vertex>
gl_Position.z = gl_Position.w;
}`,W_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main(){
vec4 texColor = textureCube(tCube,vec3(tFlip * vWorldDirection.x,vWorldDirection.yz));
gl_FragColor = texColor;
gl_FragColor.a *= opacity;
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,X_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main(){
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
}`,$_=`#if DEPTH_PACKING == 3200
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
void main(){
vec4 diffuseColor = vec4(1.0);
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
float fragCoordZ = vHighPrecisionZW[0]/ vHighPrecisionZW[1];
#else
float fragCoordZ = 0.5 * vHighPrecisionZW[0]/ vHighPrecisionZW[1]+ 0.5;
#endif
#if DEPTH_PACKING == 3200
gl_FragColor = vec4(vec3(1.0 - fragCoordZ),opacity);
#elif DEPTH_PACKING == 3201
gl_FragColor = packDepthToRGBA(fragCoordZ);
#elif DEPTH_PACKING == 3202
gl_FragColor = vec4(packDepthToRGB(fragCoordZ),1.0);
#elif DEPTH_PACKING == 3203
gl_FragColor = vec4(packDepthToRG(fragCoordZ),0.0,1.0);
#endif
}`,Y_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main(){
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
}`,q_=`#define DISTANCE
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
void main(){
vec4 diffuseColor = vec4(1.0);
#include <clipping_planes_fragment>
#include <map_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <alphahash_fragment>
float dist = length(vWorldPosition - referencePosition);
dist =(dist - nearDistance)/(farDistance - nearDistance);
dist = saturate(dist);
gl_FragColor = vec4(dist,0.0,0.0,1.0);
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main(){
vWorldDirection = transformDirection(position,modelMatrix);
#include <begin_vertex>
#include <project_vertex>
}`,Z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main(){
vec3 direction = normalize(vWorldDirection);
vec2 sampleUV = equirectUv(direction);
gl_FragColor = texture2D(tEquirect,sampleUV);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,j_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main(){
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
}`,J_=`uniform vec3 diffuse;
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
void main(){
vec4 diffuseColor = vec4(diffuse,opacity);
#include <clipping_planes_fragment>
if(mod(vLineDistance,totalSize)> dashSize){
discard;
}
vec3 outgoingLight = vec3(0.0);
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
outgoingLight = diffuseColor.rgb;
#include <opaque_fragment>
#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
}`,Q_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main(){
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
}`,eM=`uniform vec3 diffuse;
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
void main(){
vec4 diffuseColor = vec4(diffuse,opacity);
#include <clipping_planes_fragment>
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <alphahash_fragment>
#include <specularmap_fragment>
ReflectedLight reflectedLight = ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));
#ifdef USE_LIGHTMAP
vec4 lightMapTexel = texture2D(lightMap,vLightMapUv);
reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
#else
reflectedLight.indirectDiffuse += vec3(1.0);
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
}`,tM=`#define LAMBERT
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
void main(){
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
}`,nM=`#define LAMBERT
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
void main(){
vec4 diffuseColor = vec4(diffuse,opacity);
#include <clipping_planes_fragment>
ReflectedLight reflectedLight = ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));
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
}`,iM=`#define MATCAP
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
void main(){
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
}`,rM=`#define MATCAP
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
void main(){
vec4 diffuseColor = vec4(diffuse,opacity);
#include <clipping_planes_fragment>
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <alphahash_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
vec3 viewDir = normalize(vViewPosition);
vec3 x = normalize(vec3(viewDir.z,0.0,- viewDir.x));
vec3 y = cross(viewDir,x);
vec2 uv = vec2(dot(x,normal),dot(y,normal))* 0.495 + 0.5;
#ifdef USE_MATCAP
vec4 matcapColor = texture2D(matcap,uv);
#else
vec4 matcapColor = vec4(vec3(mix(0.2,0.8,uv.y)),1.0);
#endif
vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
#include <opaque_fragment>
#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,oM=`#define NORMAL
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
void main(){
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
}`,sM=`#define NORMAL
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
void main(){
vec4 diffuseColor = vec4(0.0,0.0,0.0,opacity);
#include <clipping_planes_fragment>
#include <logdepthbuf_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
gl_FragColor = vec4(normalize(normal)* 0.5 + 0.5,diffuseColor.a);
#ifdef OPAQUE
gl_FragColor.a = 1.0;
#endif
}`,aM=`#define PHONG
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
void main(){
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
}`,lM=`#define PHONG
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
void main(){
vec4 diffuseColor = vec4(diffuse,opacity);
#include <clipping_planes_fragment>
ReflectedLight reflectedLight = ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));
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
}`,cM=`#define STANDARD
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
void main(){
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
}`,uM=`#define STANDARD
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
void main(){
vec4 diffuseColor = vec4(diffuse,opacity);
#include <clipping_planes_fragment>
ReflectedLight reflectedLight = ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));
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
float dotNVcc = saturate(dot(geometryClearcoatNormal,geometryViewDir));
vec3 Fcc = F_Schlick(material.clearcoatF0,material.clearcoatF90,dotNVcc);
outgoingLight = outgoingLight *(1.0 - material.clearcoat * Fcc)+(clearcoatSpecularDirect + clearcoatSpecularIndirect)* material.clearcoat;
#endif
#include <opaque_fragment>
#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,hM=`#define TOON
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
void main(){
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
}`,fM=`#define TOON
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
void main(){
vec4 diffuseColor = vec4(diffuse,opacity);
#include <clipping_planes_fragment>
ReflectedLight reflectedLight = ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));
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
}`,dM=`uniform float size;
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
void main(){
#ifdef USE_POINTS_UV
vUv =(uvTransform * vec3(uv,1)).xy;
#endif
#include <color_vertex>
#include <morphinstance_vertex>
#include <morphcolor_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
gl_PointSize = size;
#ifdef USE_SIZEATTENUATION
bool isPerspective = isPerspectiveMatrix(projectionMatrix);
if(isPerspective)gl_PointSize *=(scale / - mvPosition.z);
#endif
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#include <worldpos_vertex>
#include <fog_vertex>
}`,pM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main(){
vec4 diffuseColor = vec4(diffuse,opacity);
#include <clipping_planes_fragment>
vec3 outgoingLight = vec3(0.0);
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
}`,mM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main(){
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
}`,gM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main(){
#include <logdepthbuf_fragment>
gl_FragColor = vec4(color,opacity *(1.0 - getShadowMask()));
#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
}`,bM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main(){
#include <uv_vertex>
vec4 mvPosition = modelViewMatrix[3];
vec2 scale = vec2(length(modelMatrix[0].xyz),length(modelMatrix[1].xyz));
#ifndef USE_SIZEATTENUATION
bool isPerspective = isPerspectiveMatrix(projectionMatrix);
if(isPerspective)scale *= - mvPosition.z;
#endif
vec2 alignedPosition =(position.xy -(center - vec2(0.5)))* scale;
vec2 rotatedPosition;
rotatedPosition.x = cos(rotation)* alignedPosition.x - sin(rotation)* alignedPosition.y;
rotatedPosition.y = sin(rotation)* alignedPosition.x + cos(rotation)* alignedPosition.y;
mvPosition.xy += rotatedPosition;
gl_Position = projectionMatrix * mvPosition;
#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#include <fog_vertex>
}`,xM=`uniform vec3 diffuse;
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
void main(){
vec4 diffuseColor = vec4(diffuse,opacity);
#include <clipping_planes_fragment>
vec3 outgoingLight = vec3(0.0);
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
}`,ft={alphahash_fragment:Bv,alphahash_pars_fragment:zv,alphamap_fragment:Vv,alphamap_pars_fragment:Gv,alphatest_fragment:Hv,alphatest_pars_fragment:Wv,aomap_fragment:Xv,aomap_pars_fragment:$v,batching_pars_vertex:Yv,batching_vertex:qv,begin_vertex:Kv,beginnormal_vertex:Zv,bsdfs:jv,iridescence_fragment:Jv,bumpmap_pars_fragment:Qv,clipping_planes_fragment:e1,clipping_planes_pars_fragment:t1,clipping_planes_pars_vertex:n1,clipping_planes_vertex:i1,color_fragment:r1,color_pars_fragment:o1,color_pars_vertex:s1,color_vertex:a1,common:l1,cube_uv_reflection_fragment:c1,defaultnormal_vertex:u1,displacementmap_pars_vertex:h1,displacementmap_vertex:f1,emissivemap_fragment:d1,emissivemap_pars_fragment:p1,colorspace_fragment:m1,colorspace_pars_fragment:g1,envmap_fragment:b1,envmap_common_pars_fragment:x1,envmap_pars_fragment:y1,envmap_pars_vertex:v1,envmap_physical_pars_fragment:I1,envmap_vertex:_1,fog_vertex:M1,fog_pars_vertex:w1,fog_fragment:S1,fog_pars_fragment:T1,gradientmap_pars_fragment:A1,lightmap_pars_fragment:E1,lights_lambert_fragment:R1,lights_lambert_pars_fragment:P1,lights_pars_begin:C1,lights_toon_fragment:L1,lights_toon_pars_fragment:F1,lights_phong_fragment:k1,lights_phong_pars_fragment:D1,lights_physical_fragment:O1,lights_physical_pars_fragment:N1,lights_fragment_begin:U1,lights_fragment_maps:B1,lights_fragment_end:z1,lightprobes_pars_fragment:V1,logdepthbuf_fragment:G1,logdepthbuf_pars_fragment:H1,logdepthbuf_pars_vertex:W1,logdepthbuf_vertex:X1,map_fragment:$1,map_pars_fragment:Y1,map_particle_fragment:q1,map_particle_pars_fragment:K1,metalnessmap_fragment:Z1,metalnessmap_pars_fragment:j1,morphinstance_vertex:J1,morphcolor_vertex:Q1,morphnormal_vertex:e_,morphtarget_pars_vertex:t_,morphtarget_vertex:n_,normal_fragment_begin:i_,normal_fragment_maps:r_,normal_pars_fragment:o_,normal_pars_vertex:s_,normal_vertex:a_,normalmap_pars_fragment:l_,clearcoat_normal_fragment_begin:c_,clearcoat_normal_fragment_maps:u_,clearcoat_pars_fragment:h_,iridescence_pars_fragment:f_,opaque_fragment:d_,packing:p_,premultiplied_alpha_fragment:m_,project_vertex:g_,dithering_fragment:b_,dithering_pars_fragment:x_,roughnessmap_fragment:y_,roughnessmap_pars_fragment:v_,shadowmap_pars_fragment:__,shadowmap_pars_vertex:M_,shadowmap_vertex:w_,shadowmask_pars_fragment:S_,skinbase_vertex:T_,skinning_pars_vertex:A_,skinning_vertex:E_,skinnormal_vertex:R_,specularmap_fragment:P_,specularmap_pars_fragment:C_,tonemapping_fragment:I_,tonemapping_pars_fragment:L_,transmission_fragment:F_,transmission_pars_fragment:k_,uv_pars_fragment:D_,uv_pars_vertex:O_,uv_vertex:N_,worldpos_vertex:U_,background_vert:B_,background_frag:z_,backgroundCube_vert:V_,backgroundCube_frag:G_,cube_vert:H_,cube_frag:W_,depth_vert:X_,depth_frag:$_,distance_vert:Y_,distance_frag:q_,equirect_vert:K_,equirect_frag:Z_,linedashed_vert:j_,linedashed_frag:J_,meshbasic_vert:Q_,meshbasic_frag:eM,meshlambert_vert:tM,meshlambert_frag:nM,meshmatcap_vert:iM,meshmatcap_frag:rM,meshnormal_vert:oM,meshnormal_frag:sM,meshphong_vert:aM,meshphong_frag:lM,meshphysical_vert:cM,meshphysical_frag:uM,meshtoon_vert:hM,meshtoon_frag:fM,points_vert:dM,points_frag:pM,shadow_vert:mM,shadow_frag:gM,sprite_vert:bM,sprite_frag:xM},Re={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},di={basic:{uniforms:gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new j(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:gn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:gn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new j(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:gn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:gn([Re.points,Re.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:gn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:gn([Re.common,Re.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:gn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:gn([Re.sprite,Re.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:gn([Re.common,Re.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:gn([Re.lights,Re.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};di.physical={uniforms:gn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Nc={r:0,b:0,g:0},yM=new wt,h0=new ot;h0.set(-1,0,0,0,1,0,0,0,1);function vM(i,e,t,n,r,o){let s=new j(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function d(y){let v=y.isScene===!0?y.background:null;if(v&&v.isTexture){let x=y.backgroundBlurriness>0;v=e.get(v,x)}return v}function p(y){let v=!1,x=d(y);x===null?b(s,a):x&&x.isColor&&(b(x,1),v=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,v){let x=d(v);x&&(x.isCubeTexture||x.mapping===Hs)?(c===void 0&&(c=new Me(new Eo(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Ir(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yM.makeRotationFromEuler(v.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(h0),c.material.toneMapped=mt.getTransfer(x.colorSpace)!==Mt,(h!==x||u!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Me(new Xn(2,2),new mn({name:"BackgroundMaterial",uniforms:Ir(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=mt.getTransfer(x.colorSpace)!==Mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function b(y,v){y.getRGB(Nc,ef(i)),t.buffers.color.setClear(Nc.r,Nc.g,Nc.b,v,o)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(y,v=1){s.set(y),a=v,b(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,b(s,a)},render:p,addToRenderList:g,dispose:m}}function _M(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),o=r,s=!1;function a(T,P,F,L,O){let C=!1,k=u(T,L,F,P);o!==k&&(o=k,c(o.object)),C=d(T,L,F,O),C&&p(T,L,F,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(C||s)&&(s=!1,x(T,P,F,L),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function u(T,P,F,L){let O=L.wireframe===!0,C=n[P.id];C===void 0&&(C={},n[P.id]=C);let k=T.isInstancedMesh===!0?T.id:0,N=C[k];N===void 0&&(N={},C[k]=N);let U=N[F.id];U===void 0&&(U={},N[F.id]=U);let V=U[O];return V===void 0&&(V=f(l()),U[O]=V),V}function f(T){let P=[],F=[],L=[];for(let O=0;O<t;O++)P[O]=0,F[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:L,object:T,attributes:{},index:null}}function d(T,P,F,L){let O=o.attributes,C=P.attributes,k=0,N=F.getAttributes();for(let U in N)if(N[U].location>=0){let H=O[U],B=C[U];if(B===void 0&&(U==="instanceMatrix"&&T.instanceMatrix&&(B=T.instanceMatrix),U==="instanceColor"&&T.instanceColor&&(B=T.instanceColor)),H===void 0||H.attribute!==B||B&&H.data!==B.data)return!0;k++}return o.attributesNum!==k||o.index!==L}function p(T,P,F,L){let O={},C=P.attributes,k=0,N=F.getAttributes();for(let U in N)if(N[U].location>=0){let H=C[U];H===void 0&&(U==="instanceMatrix"&&T.instanceMatrix&&(H=T.instanceMatrix),U==="instanceColor"&&T.instanceColor&&(H=T.instanceColor));let B={};B.attribute=H,H&&H.data&&(B.data=H.data),O[U]=B,k++}o.attributes=O,o.attributesNum=k,o.index=L}function g(){let T=o.newAttributes;for(let P=0,F=T.length;P<F;P++)T[P]=0}function b(T){m(T,0)}function m(T,P){let F=o.newAttributes,L=o.enabledAttributes,O=o.attributeDivisors;F[T]=1,L[T]===0&&(i.enableVertexAttribArray(T),L[T]=1),O[T]!==P&&(i.vertexAttribDivisor(T,P),O[T]=P)}function y(){let T=o.newAttributes,P=o.enabledAttributes;for(let F=0,L=P.length;F<L;F++)P[F]!==T[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function v(T,P,F,L,O,C,k){k===!0?i.vertexAttribIPointer(T,P,F,O,C):i.vertexAttribPointer(T,P,F,L,O,C)}function x(T,P,F,L){g();let O=L.attributes,C=F.getAttributes(),k=P.defaultAttributeValues;for(let N in C){let U=C[N];if(U.location>=0){let V=O[N];if(V===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(V=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(V=T.instanceColor)),V!==void 0){let H=V.normalized,B=V.itemSize,z=e.get(V);if(z===void 0)continue;let q=z.buffer,X=z.type,ee=z.bytesPerElement,W=X===i.INT||X===i.UNSIGNED_INT||V.gpuType===Ql;if(V.isInterleavedBufferAttribute){let Y=V.data,ie=Y.stride,re=V.offset;if(Y.isInstancedInterleavedBuffer){for(let te=0;te<U.locationSize;te++)m(U.location+te,Y.meshPerAttribute);T.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let te=0;te<U.locationSize;te++)b(U.location+te);i.bindBuffer(i.ARRAY_BUFFER,q);for(let te=0;te<U.locationSize;te++)v(U.location+te,B/U.locationSize,X,H,ie*ee,(re+B/U.locationSize*te)*ee,W)}else{if(V.isInstancedBufferAttribute){for(let Y=0;Y<U.locationSize;Y++)m(U.location+Y,V.meshPerAttribute);T.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Y=0;Y<U.locationSize;Y++)b(U.location+Y);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Y=0;Y<U.locationSize;Y++)v(U.location+Y,B/U.locationSize,X,H,B*ee,B/U.locationSize*Y*ee,W)}}else if(k!==void 0){let H=k[N];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(U.location,H);break;case 3:i.vertexAttrib3fv(U.location,H);break;case 4:i.vertexAttrib4fv(U.location,H);break;default:i.vertexAttrib1fv(U.location,H)}}}}y()}function _(){A();for(let T in n){let P=n[T];for(let F in P){let L=P[F];for(let O in L){let C=L[O];for(let k in C)h(C[k].object),delete C[k];delete L[O]}}delete n[T]}}function w(T){if(n[T.id]===void 0)return;let P=n[T.id];for(let F in P){let L=P[F];for(let O in L){let C=L[O];for(let k in C)h(C[k].object),delete C[k];delete L[O]}}delete n[T.id]}function S(T){for(let P in n){let F=n[P];for(let L in F){let O=F[L];if(O[T.id]===void 0)continue;let C=O[T.id];for(let k in C)h(C[k].object),delete C[k];delete O[T.id]}}}function M(T){for(let P in n){let F=n[P],L=T.isInstancedMesh===!0?T.id:0,O=F[L];if(O!==void 0){for(let C in O){let k=O[C];for(let N in k)h(k[N].object),delete k[N];delete O[C]}delete F[L],Object.keys(F).length===0&&delete n[P]}}}function A(){E(),s=!0,o!==r&&(o=r,c(o.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:E,dispose:_,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:S,initAttributes:g,enableAttribute:b,disableUnusedAttributes:y}}function MM(i,e,t){let n;function r(l){n=l}function o(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function s(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function wM(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(S){return!(S!==Dn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let M=S===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==wn&&S!==qn&&!M&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:b,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,maxSamples:_,samples:w}}function SM(i){let e=this,t=null,n=0,r=!1,o=!1,s=new Hn,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,g=u.clipIntersection,b=u.clipShadows,m=i.get(u);if(!r||p===null||p.length===0||o&&!b)o?h(null):c();else{let y=o?0:n,v=y*4,x=m.clippingState||null;l.value=x,x=h(p,f,v,d);for(let _=0;_!==v;++_)x[_]=t[_];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let g=u!==null?u.length:0,b=null;if(g!==0){if(b=l.value,p!==!0||b===null){let m=d+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(b===null||b.length<m)&&(b=new Float32Array(m));for(let v=0,x=d;v!==g;++v,x+=4)s.copy(u[v]).applyMatrix4(y,a),s.normal.toArray(b,x),b[x+3]=s.constant}l.value=b,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,b}}var Do=4,TM=6,AM=20,EM=256,Js=new Rn,Hm=new j,uf=null,hf=0,ff=0,df=!1,RM=new $,Lr=new $,Bc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,o={}){let{size:s=256,position:a=RM}=o;uf=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uf,hf,ff),this._renderer.xr.enabled=df,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uf=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Kn,format:Dn,colorSpace:xs,depthBuffer:!1},r=Wm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wm(e,t,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=PM(o)),this._blurMaterial=IM(o,e,t),this._ggxMaterial=CM(o,e,t)}return r}_compileMaterial(e){let t=new Me(new Ve,e);this._renderer.compile(t,Js)}_sceneToCubeUV(e,t,n,r,o){let l=new rn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Hm),u.toneMapping=$n,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Me(new Eo,new Ye({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,b=g.material,m=!1,y=e.background;y?y.isColor&&(b.color.copy(y),e.background=null,m=!0):(b.color.copy(Hm),m=!0);for(let v=0;v<6;v++){let x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[v],o.y,o.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[v],o.z)):(l.up.set(0,c[v],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[v]));let _=this._cubeSize;ko(r,x*_,v>2?_:0,_,_),u.setRenderTarget(r),m&&u.render(g,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===er||e.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$m()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xm());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=e;let l=this._cubeSize;ko(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Js)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,g=this._sizeLods[n],b=3*g*(n>p-Do?n-p+Do:0),m=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,ko(o,b,m,3*g,2*g),r.setRenderTarget(o),r.render(a,Js),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,ko(e,b,m,3*g,2*g),r.setRenderTarget(e),r.render(a,Js)}_blur(e,t,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,n,s),this._blurPass(o,e,n,n,s)}_blurPass(e,t,n,r,o){let s=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-Do?r-this._lodMax+Do:0),f=4*(this._cubeSize-h);ko(t,u,f,3*h,2*h),s.setRenderTarget(t),s.render(l,Js)}};function PM(i){let e=[],t=[],n=i,r=i-Do+1+TM;for(let o=0;o<r;o++){let s=Math.pow(2,n);e.push(s);let a=1/(s-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),g=new Float32Array(d*f*u);for(let m=0;m<u;m++){let y=m%3*2/3-1,v=m>2?0:-1,x=[y,v,0,y+2/3,v,0,y+2/3,v+1,0,y,v,0,y+2/3,v+1,0,y,v+1,0];p.set(x,d*f*m);for(let _=0;_<f;_++){let w=h[_*2]*2-1,S=h[_*2+1]*2-1;m===0?Lr.set(1,S,w):m===1?Lr.set(-w,1,-S):m===2?Lr.set(-w,S,1):m===3?Lr.set(-1,S,-w):m===4?Lr.set(-w,-1,S):Lr.set(w,S,-1),Lr.toArray(g,(m*f+_)*d)}}let b=new Ve;b.setAttribute("position",new vn(p,d)),b.setAttribute("outputDirection",new vn(g,d)),t.push(new Me(b,null)),n>Do&&n--}return{lodMeshes:t,sizeLods:e}}function Wm(i,e,t){let n=new Kt(i,e,t);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ko(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function CM(i,e,t){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:EM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function IM(i,e,t){return new mn({name:"SphericalGaussianBlur",defines:{SAMPLES:AM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Xm(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function $m(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

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
	`}var zc=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new As(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Eo(5,5,5),o=new mn({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:kn});o.uniforms.tEquirect.value=t;let s=new Me(r,o),a=t.minFilter;return t.minFilter===tr&&(t.minFilter=qt),new Yl(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}};function LM(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?s(f):o(f)}function o(f){if(f&&f.isTexture){let d=f.mapping;if(d===Zl||d===jl)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let g=new zc(p.height);return g.fromEquirectangularTexture(i,f),e.set(f,g),f.addEventListener("dispose",c),a(g.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let d=f.mapping,p=d===Zl||d===jl,g=d===er||d===Cr;if(p||g){let b=t.get(f),m=b!==void 0?b.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Bc(i)),b=p?n.fromEquirectangular(f,b):n.fromCubemap(f,b),b.texture.pmremVersion=f.pmremVersion,t.set(f,b),b.texture;if(b!==void 0)return b.texture;{let y=f.image;return p&&y&&y.height>0||g&&y&&l(y)?(n===null&&(n=new Bc(i)),b=p?n.fromEquirectangular(f):n.fromCubemap(f),b.texture.pmremVersion=f.pmremVersion,t.set(f,b),f.addEventListener("dispose",h),b.texture):null}}}return f}function a(f,d){return d===Zl?f.mapping=er:d===jl&&(f.mapping=Cr),f}function l(f){let d=0,p=6;for(let g=0;g<p;g++)f[g]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function FM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&_r("WebGLRenderer: "+n+" extension not supported."),r}}}function kM(i,e,t,n){let r={},o=new WeakMap;function s(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",s),delete r[f.id];let d=o.get(f);d&&(e.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,g=0;if(p===void 0)return;if(d!==null){let y=d.array;g=d.version;for(let v=0,x=y.length;v<x;v+=3){let _=y[v+0],w=y[v+1],S=y[v+2];f.push(_,w,w,S,S,_)}}else{let y=p.array;g=p.version;for(let v=0,x=y.length/3-1;v<x;v+=3){let _=v+0,w=v+1,S=v+2;f.push(_,w,w,S,S,_)}}let b=new(p.count>=65535?wr:ws)(f,1);b.version=g;let m=o.get(u);m&&e.remove(m),o.set(u,b)}function h(u){let f=o.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function DM(i,e,t){let n;function r(u){n=u}let o,s;function a(u){o=u.type,s=u.bytesPerElement}function l(u,f){i.drawElements(n,f,o,u*s),t.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,o,u*s,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,d);let g=0;for(let b=0;b<d;b++)g+=f[b];t.update(g,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function OM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:je("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function NM(i,e,t){let n=new WeakMap,r=new Nt;function o(s,a,l){let c=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let A=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,b=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),g===!0&&(v=3);let x=a.attributes.position.count*v,_=1;x>e.maxTextureSize&&(_=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*_*4*u),S=new _s(w,x,_,u);S.type=qn,S.needsUpdate=!0;let M=v*4;for(let E=0;E<u;E++){let T=b[E],P=m[E],F=y[E],L=x*_*4*E;for(let O=0;O<T.count;O++){let C=O*M;d===!0&&(r.fromBufferAttribute(T,O),w[L+C+0]=r.x,w[L+C+1]=r.y,w[L+C+2]=r.z,w[L+C+3]=0),p===!0&&(r.fromBufferAttribute(P,O),w[L+C+4]=r.x,w[L+C+5]=r.y,w[L+C+6]=r.z,w[L+C+7]=0),g===!0&&(r.fromBufferAttribute(F,O),w[L+C+8]=r.x,w[L+C+9]=r.y,w[L+C+10]=r.z,w[L+C+11]=F.itemSize===4?r.w:1)}}f={count:u,texture:S,size:new Je(x,_)},n.set(a,f),a.addEventListener("dispose",A)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function UM(i,e,t,n,r){let o=new WeakMap;function s(c){let h=r.render.frame,u=c.geometry,f=e.get(c,u);if(o.get(f)!==h&&(e.update(f),o.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return f}function a(){o=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}var BM={[Oh]:"LINEAR_TONE_MAPPING",[Nh]:"REINHARD_TONE_MAPPING",[Uh]:"CINEON_TONE_MAPPING",[Bh]:"ACES_FILMIC_TONE_MAPPING",[Vh]:"AGX_TONE_MAPPING",[Gh]:"NEUTRAL_TONE_MAPPING",[zh]:"CUSTOM_TONE_MAPPING"};function zM(i,e,t,n,r,o){let s=new Kt(e,t,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ve;c.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new _e([0,2,0,0,2,0],2));let h=new kl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Me(c,h),f=new Rn(-1,1,1,-1,0,1),d=null,p=null,g=!1,b,m=null,y=[],v=!1;this.setSize=function(x,_){s.setSize(x,_),a!==null&&a.setSize(x,_),l!==null&&l.setSize(x,_);for(let w=0;w<y.length;w++){let S=y[w];S.setSize&&S.setSize(x,_)}},this.setEffects=function(x){y=x,v=y.length>0&&y[0].isRenderPass===!0;let _=s.width,w=s.height;y.length>0&&a===null&&(a=new Kt(_,w,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new Kt(_,w,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let S=0;S<y.length;S++){let M=y[S];M.setSize&&M.setSize(_,w)}},this.begin=function(x,_){if(g||x.toneMapping===$n&&y.length===0)return!1;if(m=_,_!==null){let w=_.width,S=_.height;(s.width!==w||s.height!==S)&&this.setSize(w,S)}return v===!1&&x.setRenderTarget(s),b=x.toneMapping,x.toneMapping=$n,!0},this.hasRenderPass=function(){return v},this.end=function(x,_){x.toneMapping=b,g=!0;let w=s,S=a;for(let M=0;M<y.length;M++){let A=y[M];A.enabled!==!1&&(A.render(x,S,w,_),A.needsSwap!==!1&&(w=S,S=S===a?l:a))}if(d!==x.outputColorSpace||p!==x.toneMapping){d=x.outputColorSpace,p=x.toneMapping,h.defines={},mt.getTransfer(d)===Mt&&(h.defines.SRGB_TRANSFER="");let M=BM[p];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,x.setRenderTarget(m),x.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var f0=new dn,gf=new ui(1,1),d0=new _s,p0=new El,m0=new As,Ym=[],qm=[],Km=new Float32Array(16),Zm=new Float32Array(9),jm=new Float32Array(4);function No(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,o=Ym[r];if(o===void 0&&(o=new Float32Array(r),Ym[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gc(i,e){let t=qm[e];t===void 0&&(t=new Int32Array(e),qm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function VM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function GM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function HM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function WM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function XM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;jm.set(n),i.uniformMatrix2fv(this.addr,!1,jm),en(t,n)}}function $M(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Zm.set(n),i.uniformMatrix3fv(this.addr,!1,Zm),en(t,n)}}function YM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Km.set(n),i.uniformMatrix4fv(this.addr,!1,Km),en(t,n)}}function qM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function KM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function ZM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function jM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function JM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function QM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function e2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function t2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function n2(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(gf.compareFunction=t.isReversedDepthBuffer()?Oc:Dc,o=gf):o=f0,t.setTexture2D(e||o,r)}function i2(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||p0,r)}function r2(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||m0,r)}function o2(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||d0,r)}function s2(i){switch(i){case 5126:return VM;case 35664:return GM;case 35665:return HM;case 35666:return WM;case 35674:return XM;case 35675:return $M;case 35676:return YM;case 5124:case 35670:return qM;case 35667:case 35671:return KM;case 35668:case 35672:return ZM;case 35669:case 35673:return jM;case 5125:return JM;case 36294:return QM;case 36295:return e2;case 36296:return t2;case 35678:case 36198:case 36298:case 36306:case 35682:return n2;case 35679:case 36299:case 36307:return i2;case 35680:case 36300:case 36308:case 36293:return r2;case 36289:case 36303:case 36311:case 36292:return o2}}function a2(i,e){i.uniform1fv(this.addr,e)}function l2(i,e){let t=No(e,this.size,2);i.uniform2fv(this.addr,t)}function c2(i,e){let t=No(e,this.size,3);i.uniform3fv(this.addr,t)}function u2(i,e){let t=No(e,this.size,4);i.uniform4fv(this.addr,t)}function h2(i,e){let t=No(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function f2(i,e){let t=No(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function d2(i,e){let t=No(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function p2(i,e){i.uniform1iv(this.addr,e)}function m2(i,e){i.uniform2iv(this.addr,e)}function g2(i,e){i.uniform3iv(this.addr,e)}function b2(i,e){i.uniform4iv(this.addr,e)}function x2(i,e){i.uniform1uiv(this.addr,e)}function y2(i,e){i.uniform2uiv(this.addr,e)}function v2(i,e){i.uniform3uiv(this.addr,e)}function _2(i,e){i.uniform4uiv(this.addr,e)}function M2(i,e,t){let n=this.cache,r=e.length,o=Gc(t,r);Qt(n,o)||(i.uniform1iv(this.addr,o),en(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=gf:s=f0;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||s,o[a])}function w2(i,e,t){let n=this.cache,r=e.length,o=Gc(t,r);Qt(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||p0,o[s])}function S2(i,e,t){let n=this.cache,r=e.length,o=Gc(t,r);Qt(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||m0,o[s])}function T2(i,e,t){let n=this.cache,r=e.length,o=Gc(t,r);Qt(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||d0,o[s])}function A2(i){switch(i){case 5126:return a2;case 35664:return l2;case 35665:return c2;case 35666:return u2;case 35674:return h2;case 35675:return f2;case 35676:return d2;case 5124:case 35670:return p2;case 35667:case 35671:return m2;case 35668:case 35672:return g2;case 35669:case 35673:return b2;case 5125:return x2;case 36294:return y2;case 36295:return v2;case 36296:return _2;case 35678:case 36198:case 36298:case 36306:case 35682:return M2;case 35679:case 36299:case 36307:return w2;case 35680:case 36300:case 36308:case 36293:return S2;case 36289:case 36303:case 36311:case 36292:return T2}}var bf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=s2(t.type)}},xf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A2(t.type)}},yf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],n)}}},pf=/(\w+)(\])?(\[|\.)?/g;function Jm(i,e){i.seq.push(e),i.map[e.id]=e}function E2(i,e,t){let n=i.name,r=n.length;for(pf.lastIndex=0;;){let o=pf.exec(n),s=pf.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Jm(t,c===void 0?new bf(a,i,e):new xf(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new yf(a),Jm(t,u)),t=u}}}var Oo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=e.getActiveUniform(t,s),l=e.getUniformLocation(t,a.name);E2(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,n,r){let o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&n.push(s)}return n}};function Qm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var R2=37297,P2=0;function C2(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}var e0=new ot;function I2(i){mt._getMatrix(e0,mt.workingColorSpace,i);let e=`mat3( ${e0.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case ys:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function t0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+C2(i.getShaderSource(e),a)}else return o}function L2(i,e){let t=I2(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var F2={[Oh]:"Linear",[Nh]:"Reinhard",[Uh]:"Cineon",[Bh]:"ACESFilmic",[Vh]:"AgX",[Gh]:"Neutral",[zh]:"Custom"};function k2(i,e){let t=F2[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Uc=new $;function D2(){mt.getLuminanceCoefficients(Uc);let i=Uc.x.toFixed(4),e=Uc.y.toFixed(4),t=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function N2(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function U2(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(e,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function ea(i){return i!==""}function n0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function i0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var B2=/^[ \t]*#include +<([\w\d./]+)>/gm;function vf(i){return i.replace(B2,V2)}var z2=new Map;function V2(i,e){let t=ft[e];if(t===void 0){let n=z2.get(e);if(n!==void 0)t=ft[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vf(t)}var G2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function r0(i){return i.replace(G2,H2)}function H2(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function o0(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var W2={[Rr]:"SHADOWMAP_TYPE_PCF",[Io]:"SHADOWMAP_TYPE_VSM"};function X2(i){return W2[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $2={[er]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE_UV"};function Y2(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":$2[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var q2={[Cr]:"ENVMAP_MODE_REFRACTION"};function K2(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":q2[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Z2={[Gs]:"ENVMAP_BLENDING_MULTIPLY",[xm]:"ENVMAP_BLENDING_MIX",[ym]:"ENVMAP_BLENDING_ADD"};function j2(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Z2[i.combine]||"ENVMAP_BLENDING_NONE"}function J2(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Q2(i,e,t,n){let r=i.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,l=X2(t),c=Y2(t),h=K2(t),u=j2(t),f=J2(t),d=O2(t),p=N2(o),g=r.createProgram(),b,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ea).join(`
`),b.length>0&&(b+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ea).join(`
`),m.length>0&&(m+=`
`)):(b=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),m=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?ft.tonemapping_pars_fragment:"",t.toneMapping!==$n?k2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,L2("linearToOutputTexel",t.outputColorSpace),D2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),s=vf(s),s=n0(s,t),s=i0(s,t),a=vf(a),a=n0(a,t),a=i0(a,t),s=r0(s),a=r0(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,m=["#define varying in",t.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=y+b+s,x=y+m+a,_=Qm(r,r.VERTEX_SHADER,v),w=Qm(r,r.FRAGMENT_SHADER,x);r.attachShader(g,_),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function S(T){if(i.debug.checkShaderErrors){let P=r.getProgramInfoLog(g)||"",F=r.getShaderInfoLog(_)||"",L=r.getShaderInfoLog(w)||"",O=P.trim(),C=F.trim(),k=L.trim(),N=!0,U=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,_,w);else{let V=t0(r,_,"vertex"),H=t0(r,w,"fragment");je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+V+`
`+H)}else O!==""?Ke("WebGLProgram: Program Info Log:",O):(C===""||k==="")&&(U=!1);U&&(T.diagnostics={runnable:N,programLog:O,vertexShader:{log:C,prefix:b},fragmentShader:{log:k,prefix:m}})}r.deleteShader(_),r.deleteShader(w),M=new Oo(r,g),A=U2(r,g)}let M;this.getUniforms=function(){return M===void 0&&S(this),M};let A;this.getAttributes=function(){return A===void 0&&S(this),A};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(g,R2)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P2++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=w,this}var ew=0,_f=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Mf(e),t.set(e,n)),n}},Mf=class{constructor(e){this.id=ew++,this.code=e,this.usedTimes=0}};function tw(i){return i===ir||i===Ks||i===Zs}function nw(i,e,t,n,r,o){let s=new wo,a=new _f,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,A,E,T,P,F){let L=T.fog,O=P.geometry,C=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?T.environment:null,k=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,N=e.get(M.envMap||C,k),U=N&&N.mapping===Hs?N.image.height:null,V=d[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&Ke("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let H=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,B=H!==void 0?H.length:0,z=0;O.morphAttributes.position!==void 0&&(z=1),O.morphAttributes.normal!==void 0&&(z=2),O.morphAttributes.color!==void 0&&(z=3);let q,X,ee,W;if(V){let Ct=di[V];q=Ct.vertexShader,X=Ct.fragmentShader}else{q=M.vertexShader,X=M.fragmentShader;let Ct=a.getVertexShaderStage(M),vt=a.getFragmentShaderStage(M);a.update(M,Ct,vt),ee=Ct.id,W=vt.id}let Y=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),re=P.isInstancedMesh===!0,te=P.isBatchedMesh===!0,he=!!M.map,be=!!M.matcap,ne=!!N,ce=!!M.aoMap,Pe=!!M.lightMap,ye=!!M.bumpMap&&M.wireframe===!1,Ze=!!M.normalMap,Ge=!!M.displacementMap,nt=!!M.emissiveMap,De=!!M.metalnessMap,pt=!!M.roughnessMap,K=M.anisotropy>0,Ot=M.clearcoat>0,lt=M.dispersion>0,G=M.retroreflectivity>0,R=M.iridescence>0,Q=M.sheen>0,oe=M.transmission>0,ue=K&&!!M.anisotropyMap,xe=Ot&&!!M.clearcoatMap,ve=Ot&&!!M.clearcoatNormalMap,fe=Ot&&!!M.clearcoatRoughnessMap,pe=R&&!!M.iridescenceMap,we=R&&!!M.iridescenceThicknessMap,We=Q&&!!M.sheenColorMap,Ee=Q&&!!M.sheenRoughnessMap,Se=!!M.specularMap,Xe=!!M.specularColorMap,qe=!!M.specularIntensityMap,ct=oe&&!!M.transmissionMap,J=oe&&!!M.thicknessMap,Te=!!M.gradientMap,de=!!M.alphaMap,Ae=M.alphaTest>0,Le=!!M.alphaHash,ge=!!M.extensions,$e=$n;M.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&($e=i.toneMapping);let ze={shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:X,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:W,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:te,batchingColor:te&&P._colorsTexture!==null,instancing:re,instancingColor:re&&P.instanceColor!==null,instancingMorph:re&&P.morphTexture!==null,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:he,matcap:be,envMap:ne,envMapMode:ne&&N.mapping,envMapCubeUVHeight:U,aoMap:ce,lightMap:Pe,bumpMap:ye,normalMap:Ze,displacementMap:Ge,emissiveMap:nt,normalMapObjectSpace:Ze&&M.normalMapType===Mm,normalMapTangentSpace:Ze&&M.normalMapType===js,packedNormalMap:Ze&&M.normalMapType===js&&tw(M.normalMap.format),metalnessMap:De,roughnessMap:pt,anisotropy:K,anisotropyMap:ue,clearcoat:Ot,clearcoatMap:xe,clearcoatNormalMap:ve,clearcoatRoughnessMap:fe,dispersion:lt,retroreflection:G,iridescence:R,iridescenceMap:pe,iridescenceThicknessMap:we,sheen:Q,sheenColorMap:We,sheenRoughnessMap:Ee,specularMap:Se,specularColorMap:Xe,specularIntensityMap:qe,transmission:oe,transmissionMap:ct,thicknessMap:J,gradientMap:Te,opaque:M.transparent===!1&&M.blending===Mn&&M.alphaToCoverage===!1,alphaMap:de,alphaTest:Ae,alphaHash:Le,combine:M.combine,mapUv:he&&p(M.map.channel),aoMapUv:ce&&p(M.aoMap.channel),lightMapUv:Pe&&p(M.lightMap.channel),bumpMapUv:ye&&p(M.bumpMap.channel),normalMapUv:Ze&&p(M.normalMap.channel),displacementMapUv:Ge&&p(M.displacementMap.channel),emissiveMapUv:nt&&p(M.emissiveMap.channel),metalnessMapUv:De&&p(M.metalnessMap.channel),roughnessMapUv:pt&&p(M.roughnessMap.channel),anisotropyMapUv:ue&&p(M.anisotropyMap.channel),clearcoatMapUv:xe&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:ve&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:we&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(M.sheenRoughnessMap.channel),specularMapUv:Se&&p(M.specularMap.channel),specularColorMapUv:Xe&&p(M.specularColorMap.channel),specularIntensityMapUv:qe&&p(M.specularIntensityMap.channel),transmissionMapUv:ct&&p(M.transmissionMap.channel),thicknessMapUv:J&&p(M.thicknessMap.channel),alphaMapUv:de&&p(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ze||K),vertexNormals:!!O.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!O.attributes.uv&&(he||de),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||O.attributes.normal===void 0&&Ze===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ie,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:z,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:he&&M.map.isVideoTexture===!0&&mt.getTransfer(M.map.colorSpace)===Mt,decodeVideoTextureEmissive:nt&&M.emissiveMap.isVideoTexture===!0&&mt.getTransfer(M.emissiveMap.colorSpace)===Mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===st,flipSided:M.side===an,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ge&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&M.extensions.multiDraw===!0||te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function b(M){let A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(let E in M.defines)A.push(E),A.push(M.defines[E]);return M.isRawShaderMaterial===!1&&(m(A,M),y(A,M),A.push(i.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function m(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numSunLights),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numSunLightShadows),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function y(M,A){s.disableAll(),A.instancing&&s.enable(0),A.instancingColor&&s.enable(1),A.instancingMorph&&s.enable(2),A.matcap&&s.enable(3),A.envMap&&s.enable(4),A.normalMapObjectSpace&&s.enable(5),A.normalMapTangentSpace&&s.enable(6),A.clearcoat&&s.enable(7),A.iridescence&&s.enable(8),A.alphaTest&&s.enable(9),A.vertexColors&&s.enable(10),A.vertexAlphas&&s.enable(11),A.vertexUv1s&&s.enable(12),A.vertexUv2s&&s.enable(13),A.vertexUv3s&&s.enable(14),A.vertexTangents&&s.enable(15),A.anisotropy&&s.enable(16),A.alphaHash&&s.enable(17),A.batching&&s.enable(18),A.dispersion&&s.enable(19),A.retroreflection&&s.enable(24),A.batchingColor&&s.enable(20),A.gradientMap&&s.enable(21),A.packedNormalMap&&s.enable(22),A.vertexNormals&&s.enable(23),M.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.reversedDepthBuffer&&s.enable(4),A.skinning&&s.enable(5),A.morphTargets&&s.enable(6),A.morphNormals&&s.enable(7),A.morphColors&&s.enable(8),A.premultipliedAlpha&&s.enable(9),A.shadowMapEnabled&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),A.decodeVideoTextureEmissive&&s.enable(20),A.alphaToCoverage&&s.enable(21),A.numLightProbeGrids>0&&s.enable(22),A.hasPositionAttribute&&s.enable(23),M.push(s.mask)}function v(M){let A=d[M.type],E;if(A){let T=di[A];E=zm.clone(T.uniforms)}else E=M.uniforms;return E}function x(M,A){let E=h.get(A);return E!==void 0?++E.usedTimes:(E=new Q2(i,A,M,r),c.push(E),h.set(A,E)),E}function _(M){if(--M.usedTimes===0){let A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function w(M){a.remove(M)}function S(){a.dispose()}return{getParameters:g,getProgramCacheKey:b,getUniforms:v,acquireProgram:x,releaseProgram:_,releaseShaderCache:w,programs:c,dispose:S}}function iw(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function rw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function s0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function a0(){let i=[],e=0,t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,g,b,m){let y=i[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:s(f),groupOrder:g,renderOrder:f.renderOrder,z:b,group:m},i[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=s(f),y.groupOrder=g,y.renderOrder=f.renderOrder,y.z=b,y.group=m),e++,y}function l(f,d,p,g,b,m,y){y.reversedDepth===!0&&(b=-b);let v=a(f,d,p,g,b,m);p.transmission>0?n.push(v):p.transparent===!0?r.push(v):t.push(v)}function c(f,d,p,g,b,m){let y=a(f,d,p,g,b,m);p.transmission>0?n.unshift(y):p.transparent===!0?r.unshift(y):t.unshift(y)}function h(f,d){t.length>1&&t.sort(f||rw),n.length>1&&n.sort(d||s0),r.length>1&&r.sort(d||s0)}function u(){for(let f=e,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:u,sort:h}}function ow(){let i=new WeakMap;function e(n,r){let o=i.get(n),s;return o===void 0?(s=new a0,i.set(n,[s])):r>=o.length?(s=new a0,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function sw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new $,color:new j};break;case"SpotLight":t={position:new $,direction:new $,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new j,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new j,groundColor:new j};break;case"RectAreaLight":t={color:new j,position:new $,halfWidth:new $,halfHeight:new $};break}return i[e.id]=t,t}}}function aw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var lw=0;function cw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function uw(i){let e=new sw,t=aw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);let r=new $,o=new wt,s=new wt;function a(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,p=0,g=0,b=0,m=0,y=0,v=0,x=0,_=0,w=0,S=0,M=0,A=0,E=0;c.sort(cw);for(let P=0,F=c.length;P<F;P++){let L=c[P],O=L.color,C=L.intensity,k=L.distance,N=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ir?N=L.shadow.map.texture:N=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*C,u+=O.g*C,f+=O.b*C;else if(L.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(L.sh.coefficients[U],C);E++}else if(L.isSunLight){let U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let V=L.shadow,H=t.get(L);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[p]=H,n.sunShadowMap[p]=N;let B=V.getViewportCount();for(let z=0;z<B;z++)n.sunShadowMatrix[g+z]=V.getMatrix(z),n.sunShadowCascade[g+z]=V._cascadeData[z];g+=B,p++}n.sun[d]=U,d++}else if(L.isDirectionalLight){let U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let V=L.shadow,H=t.get(L);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,n.directionalShadow[b]=H,n.directionalShadowMap[b]=N,n.directionalShadowMatrix[b]=L.shadow.matrix,_++}n.directional[b]=U,b++}else if(L.isSpotLight){let U=e.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(O).multiplyScalar(C),U.distance=k,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,n.spot[y]=U;let V=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,V.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[y]=V.matrix,L.castShadow){let H=t.get(L);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,n.spotShadow[y]=H,n.spotShadowMap[y]=N,S++}y++}else if(L.isRectAreaLight){let U=e.get(L);U.color.copy(O).multiplyScalar(C),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),n.rectArea[v]=U,v++}else if(L.isPointLight){let U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){let V=L.shadow,H=t.get(L);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=N,n.pointShadowMatrix[m]=L.shadow.matrix,w++}n.point[m]=U,m++}else if(L.isHemisphereLight){let U=e.get(L);U.skyColor.copy(L.color).multiplyScalar(C),U.groundColor.copy(L.groundColor).multiplyScalar(C),n.hemi[x]=U,x++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let T=n.hash;(T.sunLength!==d||T.directionalLength!==b||T.pointLength!==m||T.spotLength!==y||T.rectAreaLength!==v||T.hemiLength!==x||T.numSunShadows!==p||T.numDirectionalShadows!==_||T.numPointShadows!==w||T.numSpotShadows!==S||T.numSpotMaps!==M||T.numLightProbes!==E)&&(n.sun.length=d,n.directional.length=b,n.spot.length=y,n.rectArea.length=v,n.point.length=m,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.spotLightMatrix.length=S+M-A,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,T.sunLength=d,T.directionalLength=b,T.pointLength=m,T.spotLength=y,T.rectAreaLength=v,T.hemiLength=x,T.numSunShadows=p,T.numDirectionalShadows=_,T.numPointShadows=w,T.numSpotShadows=S,T.numSpotMaps=M,T.numLightProbes=E,n.version=lw++)}function l(c,h){let u=0,f=0,d=0,p=0,g=0,b=0,m=h.matrixWorldInverse;for(let y=0,v=c.length;y<v;y++){let x=c[y];if(x.isSunLight){let _=n.sun[u];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),u++}else if(x.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),f++}else if(x.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),s.identity(),o.copy(x.matrixWorld),o.premultiply(m),s.extractRotation(o),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(s),_.halfHeight.applyMatrix4(s),g++}else if(x.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let _=n.hemi[b];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),b++}}}return{setup:a,setupView:l,state:n}}function l0(i){let e=new uw(i),t=[],n=[],r=[];function o(f){u.camera=f,t.length=0,n.length=0,r.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:u,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:a,pushLightProbeGrid:l}}function hw(i){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new l0(i),e.set(r,[a])):o>=s.length?(a=new l0(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var fw=`void main(){
gl_Position = vec4(position,1.0);
}`,dw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main(){
const float samples = float(VSM_SAMPLES);
float mean = 0.0;
float squared_mean = 0.0;
float uvStride = samples <= 1.0 ? 0.0 : 2.0 /(samples - 1.0);
float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
for(float i = 0.0;i < samples;i ++){
float uvOffset = uvStart + i * uvStride;
#ifdef HORIZONTAL_PASS
vec2 distribution = texture2D(shadow_pass,(gl_FragCoord.xy + vec2(uvOffset,0.0)* radius)/ resolution).rg;
mean += distribution.x;
squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
#else
float depth = texture2D(shadow_pass,(gl_FragCoord.xy + vec2(0.0,uvOffset)* radius)/ resolution).r;
mean += depth;
squared_mean += depth * depth;
#endif
}
mean = mean / samples;
squared_mean = squared_mean / samples;
float std_dev = sqrt(max(0.0,squared_mean - mean * mean));
gl_FragColor = vec4(mean,std_dev,0.0,1.0);
}`,pw=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],mw=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],c0=new wt,Qs=new $,mf=new $;function gw(i,e,t){let n=new Ao,r=new Je,o=new Je,s=new Nt,a=new Po,l=new Dl,c={},h=t.maxTextureSize,u={[hi]:an,[an]:hi,[st]:st},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:fw,fragmentShader:dw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ve;p.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Me(p,f),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rr;let m=this.type;this.render=function(w,S,M){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||w.length===0)return;this.type===Qp&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rr);let A=i.getRenderTarget(),E=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),P=i.state;P.setBlending(kn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let F=m!==this.type;F&&S.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=w.length;L<O;L++){let C=w[L],k=C.shadow;if(k===void 0){Ke("WebGLShadowMap:",C,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let N=k.getFrameExtents();r.multiply(N),o.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/N.x),r.x=o.x*N.x,k.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/N.y),r.y=o.y*N.y,k.mapSize.y=o.y));let U=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=U,k.map===null||F===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Io){if(C.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Kt(r.x,r.y,{format:ir,type:Kn,minFilter:qt,magFilter:qt,generateMipmaps:!1}),k.map.texture.name=C.name+".shadowMap",k.map.depthTexture=new ui(r.x,r.y,qn),k.map.depthTexture.name=C.name+".shadowMapDepth",k.map.depthTexture.format=oi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=on,k.map.depthTexture.magFilter=on}else C.isPointLight?(k.map=new zc(r.x),k.map.depthTexture=new Fl(r.x,Yn)):(k.map=new Kt(r.x,r.y),k.map.depthTexture=new ui(r.x,r.y,Yn)),k.map.depthTexture.name=C.name+".shadowMap",k.map.depthTexture.format=oi,this.type===Rr?(k.map.depthTexture.compareFunction=U?Oc:Dc,k.map.depthTexture.minFilter=qt,k.map.depthTexture.magFilter=qt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=on,k.map.depthTexture.magFilter=on);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==r.x||k.map.height!==r.y)&&k.map.setSize(r.x,r.y);let V=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();C.isPointLight!==!0&&k.updateMatrices(C,M);for(let H=0;H<V;H++){let B=k.getCamera(H);if(C.isPointLight){let z=k.camera,q=k.matrix,X=C.distance||z.far;X!==z.far&&(z.far=X,z.updateProjectionMatrix()),Qs.setFromMatrixPosition(C.matrixWorld),z.position.copy(Qs),mf.copy(z.position),mf.add(pw[H]),z.up.copy(mw[H]),z.lookAt(mf),z.updateMatrixWorld(),q.makeTranslation(-Qs.x,-Qs.y,-Qs.z),c0.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),k._frustum.setFromProjectionMatrix(c0,z.coordinateSystem,z.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,H),i.clear();else{H===0&&(i.setRenderTarget(k.map),i.clear());let z=k.getViewport(H);s.set(o.x*z.x,o.y*z.y,o.x*z.z,o.y*z.w),P.viewport(s)}n=k.getFrustum(H),x(S,M,B,C,this.type)}k.isPointLightShadow!==!0&&this.type===Io&&y(k,M),k.needsUpdate=!1}m=this.type,b.needsUpdate=!1,i.setRenderTarget(A,E,T)};function y(w,S){let M=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Kt(r.x,r.y,{format:ir,type:Kn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(S,null,M,f,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(S,null,M,d,g,null)}function v(w,S,M,A){let E=null,T=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)E=T;else if(E=M.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let P=E.uuid,F=S.uuid,L=c[P];L===void 0&&(L={},c[P]=L);let O=L[F];O===void 0&&(O=E.clone(),L[F]=O,S.addEventListener("dispose",_)),E=O}if(E.visible=S.visible,E.wireframe=S.wireframe,A===Io?E.side=S.shadowSide!==null?S.shadowSide:S.side:E.side=S.shadowSide!==null?S.shadowSide:u[S.side],E.alphaMap=S.alphaMap,E.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,E.map=S.map,E.clipShadows=S.clipShadows,E.clippingPlanes=S.clippingPlanes,E.clipIntersection=S.clipIntersection,E.displacementMap=S.displacementMap,E.displacementScale=S.displacementScale,E.displacementBias=S.displacementBias,E.wireframeLinewidth=S.wireframeLinewidth,E.linewidth=S.linewidth,M.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let P=i.properties.get(E);P.light=M}return E}function x(w,S,M,A,E){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Io)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let F=e.update(w),L=w.material;if(Array.isArray(L)){let O=F.groups;for(let C=0,k=O.length;C<k;C++){let N=O[C],U=L[N.materialIndex];if(U&&U.visible){let V=v(w,U,A,E);w.onBeforeShadow(i,w,S,M,F,V,N),i.renderBufferDirect(M,null,F,V,w,N),w.onAfterShadow(i,w,S,M,F,V,N)}}}else if(L.visible){let O=v(w,L,A,E);w.onBeforeShadow(i,w,S,M,F,O,null),i.renderBufferDirect(M,null,F,O,w,null),w.onAfterShadow(i,w,S,M,F,O,null)}}let P=w.children;for(let F=0,L=P.length;F<L;F++)x(P[F],S,M,A,E)}function _(w){w.target.removeEventListener("dispose",_);for(let M in c){let A=c[M],E=w.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}function bw(i,e){function t(){let J=!1,Te=new Nt,de=null,Ae=new Nt(0,0,0,0);return{setMask:function(Le){de!==Le&&!J&&(i.colorMask(Le,Le,Le,Le),de=Le)},setLocked:function(Le){J=Le},setClear:function(Le,ge,$e,ze,Ct){Ct===!0&&(Le*=ze,ge*=ze,$e*=ze),Te.set(Le,ge,$e,ze),Ae.equals(Te)===!1&&(i.clearColor(Le,ge,$e,ze),Ae.copy(Te))},reset:function(){J=!1,de=null,Ae.set(-1,0,0,0)}}}function n(){let J=!1,Te=!1,de=null,Ae=null,Le=null;return{setReversed:function(ge){if(Te!==ge){let $e=e.get("EXT_clip_control");ge?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Te=ge;let ze=Le;Le=null,this.setClear(ze)}},getReversed:function(){return Te},setTest:function(ge){ge?Y(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(ge){de!==ge&&!J&&(i.depthMask(ge),de=ge)},setFunc:function(ge){if(Te&&(ge=Fm[ge]),Ae!==ge){switch(ge){case ml:i.depthFunc(i.NEVER);break;case gl:i.depthFunc(i.ALWAYS);break;case bl:i.depthFunc(i.LESS);break;case xo:i.depthFunc(i.LEQUAL);break;case xl:i.depthFunc(i.EQUAL);break;case yl:i.depthFunc(i.GEQUAL);break;case vl:i.depthFunc(i.GREATER);break;case _l:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=ge}},setLocked:function(ge){J=ge},setClear:function(ge){Le!==ge&&(Le=ge,Te&&(ge=1-ge),i.clearDepth(ge))},reset:function(){J=!1,de=null,Ae=null,Le=null,Te=!1}}}function r(){let J=!1,Te=null,de=null,Ae=null,Le=null,ge=null,$e=null,ze=null,Ct=null;return{setTest:function(vt){J||(vt?Y(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(vt){Te!==vt&&!J&&(i.stencilMask(vt),Te=vt)},setFunc:function(vt,Bn,ti){(de!==vt||Ae!==Bn||Le!==ti)&&(i.stencilFunc(vt,Bn,ti),de=vt,Ae=Bn,Le=ti)},setOp:function(vt,Bn,ti){(ge!==vt||$e!==Bn||ze!==ti)&&(i.stencilOp(vt,Bn,ti),ge=vt,$e=Bn,ze=ti)},setLocked:function(vt){J=vt},setClear:function(vt){Ct!==vt&&(i.clearStencil(vt),Ct=vt)},reset:function(){J=!1,Te=null,de=null,Ae=null,Le=null,ge=null,$e=null,ze=null,Ct=null}}}let o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],g=null,b=!1,m=null,y=null,v=null,x=null,_=null,w=null,S=null,M=new j(0,0,0),A=0,E=!1,T=null,P=null,F=null,L=null,O=null,C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,N=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(U)[1]),k=N>=1):U.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),k=N>=2);let V=null,H={},B=i.getParameter(i.SCISSOR_BOX),z=i.getParameter(i.VIEWPORT),q=new Nt().fromArray(B),X=new Nt().fromArray(z);function ee(J,Te,de,Ae){let Le=new Uint8Array(4),ge=i.createTexture();i.bindTexture(J,ge),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<de;$e++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(Te+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return ge}let W={};W[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),s.setFunc(xo),ye(!1),Ze(Ih),Y(i.CULL_FACE),ce(kn);function Y(J){h[J]!==!0&&(i.enable(J),h[J]=!0)}function ie(J){h[J]!==!1&&(i.disable(J),h[J]=!1)}function re(J,Te){return f[J]!==Te?(i.bindFramebuffer(J,Te),f[J]=Te,J===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Te),J===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function te(J,Te){let de=p,Ae=!1;if(J){de=d.get(Te),de===void 0&&(de=[],d.set(Te,de));let Le=J.textures;if(de.length!==Le.length||de[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,$e=Le.length;ge<$e;ge++)de[ge]=i.COLOR_ATTACHMENT0+ge;de.length=Le.length,Ae=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(de)}function he(J){return g!==J?(i.useProgram(J),g=J,!0):!1}let be={[Pr]:i.FUNC_ADD,[tm]:i.FUNC_SUBTRACT,[nm]:i.FUNC_REVERSE_SUBTRACT};be[im]=i.MIN,be[rm]=i.MAX;let ne={[om]:i.ZERO,[sm]:i.ONE,[am]:i.SRC_COLOR,[kh]:i.SRC_ALPHA,[dm]:i.SRC_ALPHA_SATURATE,[hm]:i.DST_COLOR,[cm]:i.DST_ALPHA,[lm]:i.ONE_MINUS_SRC_COLOR,[Dh]:i.ONE_MINUS_SRC_ALPHA,[fm]:i.ONE_MINUS_DST_COLOR,[um]:i.ONE_MINUS_DST_ALPHA,[pm]:i.CONSTANT_COLOR,[mm]:i.ONE_MINUS_CONSTANT_COLOR,[gm]:i.CONSTANT_ALPHA,[bm]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(J,Te,de,Ae,Le,ge,$e,ze,Ct,vt){if(J===kn){b===!0&&(ie(i.BLEND),b=!1);return}if(b===!1&&(Y(i.BLEND),b=!0),J!==em){if(J!==m||vt!==E){if((y!==Pr||_!==Pr)&&(i.blendEquation(i.FUNC_ADD),y=Pr,_=Pr),vt)switch(J){case Mn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rt:i.blendFunc(i.ONE,i.ONE);break;case Fh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",J);break}else switch(J){case Mn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fh:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vs:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",J);break}v=null,x=null,w=null,S=null,M.set(0,0,0),A=0,m=J,E=vt}return}Le=Le||Te,ge=ge||de,$e=$e||Ae,(Te!==y||Le!==_)&&(i.blendEquationSeparate(be[Te],be[Le]),y=Te,_=Le),(de!==v||Ae!==x||ge!==w||$e!==S)&&(i.blendFuncSeparate(ne[de],ne[Ae],ne[ge],ne[$e]),v=de,x=Ae,w=ge,S=$e),(ze.equals(M)===!1||Ct!==A)&&(i.blendColor(ze.r,ze.g,ze.b,Ct),M.copy(ze),A=Ct),m=J,E=!1}function Pe(J,Te){J.side===st?ie(i.CULL_FACE):Y(i.CULL_FACE);let de=J.side===an;Te&&(de=!de),ye(de),J.blending===Mn&&J.transparent===!1?ce(kn):ce(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),s.setFunc(J.depthFunc),s.setTest(J.depthTest),s.setMask(J.depthWrite),o.setMask(J.colorWrite);let Ae=J.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),nt(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function ye(J){T!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),T=J)}function Ze(J){J!==jp?(Y(i.CULL_FACE),J!==P&&(J===Ih?i.cullFace(i.BACK):J===Jp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),P=J}function Ge(J){J!==F&&(k&&i.lineWidth(J),F=J)}function nt(J,Te,de){J?(Y(i.POLYGON_OFFSET_FILL),(L!==Te||O!==de)&&(L=Te,O=de,s.getReversed()&&(Te=-Te),i.polygonOffset(Te,de))):ie(i.POLYGON_OFFSET_FILL)}function De(J){J?Y(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function pt(J){J===void 0&&(J=i.TEXTURE0+C-1),V!==J&&(i.activeTexture(J),V=J)}function K(J,Te,de){de===void 0&&(V===null?de=i.TEXTURE0+C-1:de=V);let Ae=H[de];Ae===void 0&&(Ae={type:void 0,texture:void 0},H[de]=Ae),(Ae.type!==J||Ae.texture!==Te)&&(V!==de&&(i.activeTexture(de),V=de),i.bindTexture(J,Te||W[J]),Ae.type=J,Ae.texture=Te)}function Ot(){let J=H[V];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function lt(){try{i.compressedTexImage2D(...arguments)}catch(J){je("WebGLState:",J)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(J){je("WebGLState:",J)}}function R(){try{i.texSubImage2D(...arguments)}catch(J){je("WebGLState:",J)}}function Q(){try{i.texSubImage3D(...arguments)}catch(J){je("WebGLState:",J)}}function oe(){try{i.compressedTexSubImage2D(...arguments)}catch(J){je("WebGLState:",J)}}function ue(){try{i.compressedTexSubImage3D(...arguments)}catch(J){je("WebGLState:",J)}}function xe(){try{i.texStorage2D(...arguments)}catch(J){je("WebGLState:",J)}}function ve(){try{i.texStorage3D(...arguments)}catch(J){je("WebGLState:",J)}}function fe(){try{i.texImage2D(...arguments)}catch(J){je("WebGLState:",J)}}function pe(){try{i.texImage3D(...arguments)}catch(J){je("WebGLState:",J)}}function we(J){return u[J]!==void 0?u[J]:i.getParameter(J)}function We(J,Te){u[J]!==Te&&(i.pixelStorei(J,Te),u[J]=Te)}function Ee(J){q.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),q.copy(J))}function Se(J){X.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),X.copy(J))}function Xe(J,Te){let de=c.get(Te);de===void 0&&(de=new WeakMap,c.set(Te,de));let Ae=de.get(J);Ae===void 0&&(Ae=i.getUniformBlockIndex(Te,J.name),de.set(J,Ae))}function qe(J,Te){let Ae=c.get(Te).get(J);l.get(Te)!==Ae&&(i.uniformBlockBinding(Te,Ae,J.__bindingPointIndex),l.set(Te,Ae))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},V=null,H={},f={},d=new WeakMap,p=[],g=null,b=!1,m=null,y=null,v=null,x=null,_=null,w=null,S=null,M=new j(0,0,0),A=0,E=!1,T=null,P=null,F=null,L=null,O=null,q.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:Y,disable:ie,bindFramebuffer:re,drawBuffers:te,useProgram:he,setBlending:ce,setMaterial:Pe,setFlipSided:ye,setCullFace:Ze,setLineWidth:Ge,setPolygonOffset:nt,setScissorTest:De,activeTexture:pt,bindTexture:K,unbindTexture:Ot,compressedTexImage2D:lt,compressedTexImage3D:G,texImage2D:fe,texImage3D:pe,pixelStorei:We,getParameter:we,updateUBOMapping:Xe,uniformBlockBinding:qe,texStorage2D:xe,texStorage3D:ve,texSubImage2D:R,texSubImage3D:Q,compressedTexSubImage2D:oe,compressedTexSubImage3D:ue,scissor:Ee,viewport:Se,reset:ct}}function xw(i,e,t,n,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(G,R){return p?new OffscreenCanvas(G,R):vo("canvas")}function b(G,R,Q){let oe=1,ue=lt(G);if((ue.width>Q||ue.height>Q)&&(oe=Q/Math.max(ue.width,ue.height)),oe<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){let xe=Math.floor(oe*ue.width),ve=Math.floor(oe*ue.height);f===void 0&&(f=g(xe,ve));let fe=R?g(xe,ve):f;return fe.width=xe,fe.height=ve,fe.getContext("2d").drawImage(G,0,0,xe,ve),Ke("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+xe+"x"+ve+")."),fe}else return"data"in G&&Ke("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),G;return G}function m(G){return G.generateMipmaps}function y(G){i.generateMipmap(G)}function v(G){return G.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?i.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(G,R,Q,oe,ue,xe=!1){if(G!==null){if(i[G]!==void 0)return i[G];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let ve;oe&&(ve=e.get("EXT_texture_norm16"),ve||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=R;if(R===i.RED&&(Q===i.FLOAT&&(fe=i.R32F),Q===i.HALF_FLOAT&&(fe=i.R16F),Q===i.UNSIGNED_BYTE&&(fe=i.R8),Q===i.UNSIGNED_SHORT&&ve&&(fe=ve.R16_EXT),Q===i.SHORT&&ve&&(fe=ve.R16_SNORM_EXT)),R===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(fe=i.R8UI),Q===i.UNSIGNED_SHORT&&(fe=i.R16UI),Q===i.UNSIGNED_INT&&(fe=i.R32UI),Q===i.BYTE&&(fe=i.R8I),Q===i.SHORT&&(fe=i.R16I),Q===i.INT&&(fe=i.R32I)),R===i.RG&&(Q===i.FLOAT&&(fe=i.RG32F),Q===i.HALF_FLOAT&&(fe=i.RG16F),Q===i.UNSIGNED_BYTE&&(fe=i.RG8),Q===i.UNSIGNED_SHORT&&ve&&(fe=ve.RG16_EXT),Q===i.SHORT&&ve&&(fe=ve.RG16_SNORM_EXT)),R===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(fe=i.RG8UI),Q===i.UNSIGNED_SHORT&&(fe=i.RG16UI),Q===i.UNSIGNED_INT&&(fe=i.RG32UI),Q===i.BYTE&&(fe=i.RG8I),Q===i.SHORT&&(fe=i.RG16I),Q===i.INT&&(fe=i.RG32I)),R===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(fe=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(fe=i.RGB16UI),Q===i.UNSIGNED_INT&&(fe=i.RGB32UI),Q===i.BYTE&&(fe=i.RGB8I),Q===i.SHORT&&(fe=i.RGB16I),Q===i.INT&&(fe=i.RGB32I)),R===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(fe=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(fe=i.RGBA16UI),Q===i.UNSIGNED_INT&&(fe=i.RGBA32UI),Q===i.BYTE&&(fe=i.RGBA8I),Q===i.SHORT&&(fe=i.RGBA16I),Q===i.INT&&(fe=i.RGBA32I)),R===i.RGB&&(Q===i.UNSIGNED_SHORT&&ve&&(fe=ve.RGB16_EXT),Q===i.SHORT&&ve&&(fe=ve.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(fe=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(fe=i.R11F_G11F_B10F)),R===i.RGBA){let pe=xe?ys:mt.getTransfer(ue);Q===i.FLOAT&&(fe=i.RGBA32F),Q===i.HALF_FLOAT&&(fe=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(fe=pe===Mt?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&ve&&(fe=ve.RGBA16_EXT),Q===i.SHORT&&ve&&(fe=ve.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)}return(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function _(G,R){let Q;return G?R===null||R===Yn||R===Fo?Q=i.DEPTH24_STENCIL8:R===qn?Q=i.DEPTH32F_STENCIL8:R===Lo&&(Q=i.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Yn||R===Fo?Q=i.DEPTH_COMPONENT24:R===qn?Q=i.DEPTH_COMPONENT32F:R===Lo&&(Q=i.DEPTH_COMPONENT16),Q}function w(G,R){return m(G)===!0||G.isFramebufferTexture&&G.minFilter!==on&&G.minFilter!==qt?Math.log2(Math.max(R.width,R.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?R.mipmaps.length:1}function S(G){let R=G.target;R.removeEventListener("dispose",S),A(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function M(G){let R=G.target;R.removeEventListener("dispose",M),T(R)}function A(G){let R=n.get(G);if(R.__webglInit===void 0)return;let Q=G.source,oe=d.get(Q);if(oe){let ue=oe[R.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&E(G),Object.keys(oe).length===0&&d.delete(Q)}n.remove(G)}function E(G){let R=n.get(G);i.deleteTexture(R.__webglTexture);let Q=G.source,oe=d.get(Q);delete oe[R.__cacheKey],s.memory.textures--}function T(G){let R=n.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),n.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(R.__webglFramebuffer[oe]))for(let ue=0;ue<R.__webglFramebuffer[oe].length;ue++)i.deleteFramebuffer(R.__webglFramebuffer[oe][ue]);else i.deleteFramebuffer(R.__webglFramebuffer[oe]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[oe])}else{if(Array.isArray(R.__webglFramebuffer))for(let oe=0;oe<R.__webglFramebuffer.length;oe++)i.deleteFramebuffer(R.__webglFramebuffer[oe]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let oe=0;oe<R.__webglColorRenderbuffer.length;oe++)R.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[oe]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let Q=G.textures;for(let oe=0,ue=Q.length;oe<ue;oe++){let xe=n.get(Q[oe]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),s.memory.textures--),n.remove(Q[oe])}n.remove(G)}let P=0;function F(){P=0}function L(){return P}function O(G){P=G}function C(){let G=P;return G>=r.maxTextures&&Ke("WebGLTextures: Trying to use "+(G+1)+" texture units while this GPU supports only "+r.maxTextures),P+=1,G}function k(G){let R=[];return R.push(G.wrapS),R.push(G.wrapT),R.push(G.wrapR||0),R.push(G.magFilter),R.push(G.minFilter),R.push(G.anisotropy),R.push(G.internalFormat),R.push(G.format),R.push(G.type),R.push(G.generateMipmaps),R.push(G.premultiplyAlpha),R.push(G.flipY),R.push(G.unpackAlignment),R.push(G.colorSpace),R.join()}function N(G,R){let Q=n.get(G);if(G.isVideoTexture&&K(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&Q.__version!==G.version){let oe=G.image;if(oe===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(Q,G,R);return}}else G.isExternalTexture&&(Q.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+R)}function U(G,R){let Q=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&Q.__version!==G.version){ie(Q,G,R);return}else G.isExternalTexture&&(Q.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+R)}function V(G,R){let Q=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&Q.__version!==G.version){ie(Q,G,R);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+R)}function H(G,R){let Q=n.get(G);if(G.isCubeDepthTexture!==!0&&G.version>0&&Q.__version!==G.version){re(Q,G,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+R)}let B={[Mr]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[Ml]:i.MIRRORED_REPEAT},z={[on]:i.NEAREST,[vm]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[Jl]:i.LINEAR_MIPMAP_NEAREST,[tr]:i.LINEAR_MIPMAP_LINEAR},q={[Sm]:i.NEVER,[Pm]:i.ALWAYS,[Tm]:i.LESS,[Dc]:i.LEQUAL,[Am]:i.EQUAL,[Oc]:i.GEQUAL,[Em]:i.GREATER,[Rm]:i.NOTEQUAL};function X(G,R){if(R.type===qn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===qt||R.magFilter===Jl||R.magFilter===Ws||R.magFilter===tr||R.minFilter===qt||R.minFilter===Jl||R.minFilter===Ws||R.minFilter===tr)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(G,i.TEXTURE_WRAP_S,B[R.wrapS]),i.texParameteri(G,i.TEXTURE_WRAP_T,B[R.wrapT]),(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)&&i.texParameteri(G,i.TEXTURE_WRAP_R,B[R.wrapR]),i.texParameteri(G,i.TEXTURE_MAG_FILTER,z[R.magFilter]),i.texParameteri(G,i.TEXTURE_MIN_FILTER,z[R.minFilter]),R.compareFunction&&(i.texParameteri(G,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(G,i.TEXTURE_COMPARE_FUNC,q[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===on||R.minFilter!==Ws&&R.minFilter!==tr||R.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let Q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(G,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ee(G,R){let Q=!1;G.__webglInit===void 0&&(G.__webglInit=!0,R.addEventListener("dispose",S));let oe=R.source,ue=d.get(oe);ue===void 0&&(ue={},d.set(oe,ue));let xe=k(R);if(xe!==G.__cacheKey){ue[xe]===void 0&&(ue[xe]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,Q=!0),ue[xe].usedTimes++;let ve=ue[G.__cacheKey];ve!==void 0&&(ue[G.__cacheKey].usedTimes--,ve.usedTimes===0&&E(R)),G.__cacheKey=xe,G.__webglTexture=ue[xe].texture}return Q}function W(G,R,Q){return Math.floor(Math.floor(G/Q)/R)}function Y(G,R,Q,oe){let xe=G.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,Q,oe,R.data);else{xe.sort((We,Ee)=>We.start-Ee.start);let ve=0;for(let We=1;We<xe.length;We++){let Ee=xe[ve],Se=xe[We],Xe=Ee.start+Ee.count,qe=W(Se.start,R.width,4),ct=W(Ee.start,R.width,4);Se.start<=Xe+1&&qe===ct&&W(Se.start+Se.count-1,R.width,4)===qe?Ee.count=Math.max(Ee.count,Se.start+Se.count-Ee.start):(++ve,xe[ve]=Se)}xe.length=ve+1;let fe=t.getParameter(i.UNPACK_ROW_LENGTH),pe=t.getParameter(i.UNPACK_SKIP_PIXELS),we=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let We=0,Ee=xe.length;We<Ee;We++){let Se=xe[We],Xe=Math.floor(Se.start/4),qe=Math.ceil(Se.count/4),ct=Xe%R.width,J=Math.floor(Xe/R.width),Te=qe,de=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(i.UNPACK_SKIP_ROWS,J),t.texSubImage2D(i.TEXTURE_2D,0,ct,J,Te,de,Q,oe,R.data)}G.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,fe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function ie(G,R,Q){let oe=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(oe=i.TEXTURE_3D);let ue=ee(G,R),xe=R.source;t.bindTexture(oe,G.__webglTexture,i.TEXTURE0+Q);let ve=n.get(xe);if(xe.version!==ve.__version||ue===!0){if(t.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let de=mt.getPrimaries(mt.workingColorSpace),Ae=R.colorSpace===Ci?null:mt.getPrimaries(R.colorSpace),Le=R.colorSpace===Ci||de===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment);let pe=b(R.image,!1,r.maxTextureSize);pe=Ot(R,pe);let we=o.convert(R.format,R.colorSpace),We=o.convert(R.type),Ee=x(R.internalFormat,we,We,R.normalized,R.colorSpace,R.isVideoTexture);X(oe,R);let Se,Xe=R.mipmaps,qe=R.isVideoTexture!==!0,ct=ve.__version===void 0||ue===!0,J=xe.dataReady,Te=w(R,pe);if(R.isDepthTexture)Ee=_(R.format===nr,R.type),ct&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Ee,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,Ee,pe.width,pe.height,0,we,We,null));else if(R.isDataTexture)if(Xe.length>0){qe&&ct&&t.texStorage2D(i.TEXTURE_2D,Te,Ee,Xe[0].width,Xe[0].height);for(let de=0,Ae=Xe.length;de<Ae;de++)Se=Xe[de],qe?J&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Se.width,Se.height,we,We,Se.data):t.texImage2D(i.TEXTURE_2D,de,Ee,Se.width,Se.height,0,we,We,Se.data);R.generateMipmaps=!1}else qe?(ct&&t.texStorage2D(i.TEXTURE_2D,Te,Ee,pe.width,pe.height),J&&Y(R,pe,we,We)):t.texImage2D(i.TEXTURE_2D,0,Ee,pe.width,pe.height,0,we,We,pe.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){qe&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ee,Xe[0].width,Xe[0].height,pe.depth);for(let de=0,Ae=Xe.length;de<Ae;de++)if(Se=Xe[de],R.format!==Dn)if(we!==null)if(qe){if(J)if(R.layerUpdates.size>0){let Le=rf(Se.width,Se.height,R.format,R.type);for(let ge of R.layerUpdates){let $e=Se.data.subarray(ge*Le/Se.data.BYTES_PER_ELEMENT,(ge+1)*Le/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,ge,Se.width,Se.height,1,we,$e)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Se.width,Se.height,pe.depth,we,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,Ee,Se.width,Se.height,pe.depth,0,Se.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?J&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Se.width,Se.height,pe.depth,we,We,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,Ee,Se.width,Se.height,pe.depth,0,we,We,Se.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{qe&&ct&&t.texStorage2D(i.TEXTURE_2D,Te,Ee,Xe[0].width,Xe[0].height);for(let de=0,Ae=Xe.length;de<Ae;de++)Se=Xe[de],R.format!==Dn?we!==null?qe?J&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,Se.width,Se.height,we,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,de,Ee,Se.width,Se.height,0,Se.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?J&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Se.width,Se.height,we,We,Se.data):t.texImage2D(i.TEXTURE_2D,de,Ee,Se.width,Se.height,0,we,We,Se.data)}else if(R.isDataArrayTexture)if(qe){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ee,pe.width,pe.height,pe.depth),J)if(R.layerUpdates.size>0){let de=rf(pe.width,pe.height,R.format,R.type);for(let Ae of R.layerUpdates){let Le=pe.data.subarray(Ae*de/pe.data.BYTES_PER_ELEMENT,(Ae+1)*de/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,pe.width,pe.height,1,we,We,Le)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,we,We,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,pe.width,pe.height,pe.depth,0,we,We,pe.data);else if(R.isData3DTexture)qe?(ct&&t.texStorage3D(i.TEXTURE_3D,Te,Ee,pe.width,pe.height,pe.depth),J&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,we,We,pe.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,pe.width,pe.height,pe.depth,0,we,We,pe.data);else if(R.isFramebufferTexture){if(ct)if(qe)t.texStorage2D(i.TEXTURE_2D,Te,Ee,pe.width,pe.height);else{let de=pe.width,Ae=pe.height;for(let Le=0;Le<Te;Le++)t.texImage2D(i.TEXTURE_2D,Le,Ee,de,Ae,0,we,We,null),de>>=1,Ae>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in i){let de=i.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),pe.parentNode!==de){de.appendChild(pe),u.add(R),de.onpaint=Ae=>{let Le=Ae.changedElements;for(let ge of u)Le.includes(ge.image)&&(ge.needsUpdate=!0)},de.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,pe);else{let Le=i.RGBA,ge=i.RGBA,$e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Le,ge,$e,pe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(qe&&ct){let de=lt(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Te,Ee,de.width,de.height)}for(let de=0,Ae=Xe.length;de<Ae;de++)Se=Xe[de],qe?J&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,we,We,Se):t.texImage2D(i.TEXTURE_2D,de,Ee,we,We,Se);R.generateMipmaps=!1}else if(qe){if(ct){let de=lt(pe);t.texStorage2D(i.TEXTURE_2D,Te,Ee,de.width,de.height)}J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,We,pe)}else t.texImage2D(i.TEXTURE_2D,0,Ee,we,We,pe);m(R)&&y(oe),ve.__version=xe.version,R.onUpdate&&R.onUpdate(R)}G.__version=R.version}function re(G,R,Q){if(R.image.length!==6)return;let oe=ee(G,R),ue=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+Q);let xe=n.get(ue);if(ue.version!==xe.__version||oe===!0){t.activeTexture(i.TEXTURE0+Q);let ve=mt.getPrimaries(mt.workingColorSpace),fe=R.colorSpace===Ci?null:mt.getPrimaries(R.colorSpace),pe=R.colorSpace===Ci||ve===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let we=R.isCompressedTexture||R.image[0].isCompressedTexture,We=R.image[0]&&R.image[0].isDataTexture,Ee=[];for(let ge=0;ge<6;ge++)!we&&!We?Ee[ge]=b(R.image[ge],!0,r.maxCubemapSize):Ee[ge]=We?R.image[ge].image:R.image[ge],Ee[ge]=Ot(R,Ee[ge]);let Se=Ee[0],Xe=o.convert(R.format,R.colorSpace),qe=o.convert(R.type),ct=x(R.internalFormat,Xe,qe,R.normalized,R.colorSpace),J=R.isVideoTexture!==!0,Te=xe.__version===void 0||oe===!0,de=ue.dataReady,Ae=w(R,Se);X(i.TEXTURE_CUBE_MAP,R);let Le;if(we){J&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ct,Se.width,Se.height);for(let ge=0;ge<6;ge++){Le=Ee[ge].mipmaps;for(let $e=0;$e<Le.length;$e++){let ze=Le[$e];R.format!==Dn?Xe!==null?J?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,$e,0,0,ze.width,ze.height,Xe,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,$e,ct,ze.width,ze.height,0,ze.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,$e,0,0,ze.width,ze.height,Xe,qe,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,$e,ct,ze.width,ze.height,0,Xe,qe,ze.data)}}}else{if(Le=R.mipmaps,J&&Te){Le.length>0&&Ae++;let ge=lt(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ct,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(We){J?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ee[ge].width,Ee[ge].height,Xe,qe,Ee[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ct,Ee[ge].width,Ee[ge].height,0,Xe,qe,Ee[ge].data);for(let $e=0;$e<Le.length;$e++){let Ct=Le[$e].image[ge].image;J?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,$e+1,0,0,Ct.width,Ct.height,Xe,qe,Ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,$e+1,ct,Ct.width,Ct.height,0,Xe,qe,Ct.data)}}else{J?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Xe,qe,Ee[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ct,Xe,qe,Ee[ge]);for(let $e=0;$e<Le.length;$e++){let ze=Le[$e];J?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,$e+1,0,0,Xe,qe,ze.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,$e+1,ct,Xe,qe,ze.image[ge])}}}m(R)&&y(i.TEXTURE_CUBE_MAP),xe.__version=ue.version,R.onUpdate&&R.onUpdate(R)}G.__version=R.version}function te(G,R,Q,oe,ue,xe){let ve=o.convert(Q.format,Q.colorSpace),fe=o.convert(Q.type),pe=x(Q.internalFormat,ve,fe,Q.normalized,Q.colorSpace),we=n.get(R),We=n.get(Q);if(We.__renderTarget=R,!we.__hasExternalTextures){let Ee=Math.max(1,R.width>>xe),Se=Math.max(1,R.height>>xe);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,xe,pe,Ee,Se,R.depth,0,ve,fe,null):t.texImage2D(ue,xe,pe,Ee,Se,0,ve,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,G),pt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ue,We.__webglTexture,0,De(R)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,ue,We.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(G,R,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,G),R.depthBuffer){let oe=R.depthTexture,ue=oe&&oe.isDepthTexture?oe.type:null,xe=_(R.stencilBuffer,ue),ve=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De(R),xe,R.width,R.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,De(R),xe,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,xe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,G)}else{let oe=R.textures;for(let ue=0;ue<oe.length;ue++){let xe=oe[ue],ve=o.convert(xe.format,xe.colorSpace),fe=o.convert(xe.type),pe=x(xe.internalFormat,ve,fe,xe.normalized,xe.colorSpace);pt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De(R),pe,R.width,R.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,De(R),pe,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,pe,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(G,R,Q){let oe=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,G),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ue=n.get(R.depthTexture);if(ue.__renderTarget=R,(!ue.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),oe){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,R.depthTexture.addEventListener("dispose",S)),ue.__webglTexture===void 0){ue.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),X(i.TEXTURE_CUBE_MAP,R.depthTexture);let we=o.convert(R.depthTexture.format),We=o.convert(R.depthTexture.type),Ee;R.depthTexture.format===oi?Ee=i.DEPTH_COMPONENT24:R.depthTexture.format===nr&&(Ee=i.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ee,R.width,R.height,0,we,We,null)}}else N(R.depthTexture,0);let xe=ue.__webglTexture,ve=De(R),fe=oe?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,pe=R.depthTexture.format===nr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(R.depthTexture.format===oi)pt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,fe,xe,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,pe,fe,xe,0);else if(R.depthTexture.format===nr)pt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,fe,xe,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,pe,fe,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(G){let R=n.get(G),Q=G.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==G.depthTexture){let oe=G.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),oe){let ue=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,oe.removeEventListener("dispose",ue)};oe.addEventListener("dispose",ue),R.__depthDisposeCallback=ue}R.__boundDepthTexture=oe}if(G.depthTexture&&!R.__autoAllocateDepthBuffer)if(Q)for(let oe=0;oe<6;oe++)be(R.__webglFramebuffer[oe],G,oe);else{let oe=G.texture.mipmaps;oe&&oe.length>0?be(R.__webglFramebuffer[0],G,0):be(R.__webglFramebuffer,G,0)}else if(Q){R.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[oe]),R.__webglDepthbuffer[oe]===void 0)R.__webglDepthbuffer[oe]=i.createRenderbuffer(),he(R.__webglDepthbuffer[oe],G,!1);else{let ue=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=R.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,xe)}}else{let oe=G.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),he(R.__webglDepthbuffer,G,!1);else{let ue=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,xe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(G,R,Q){let oe=n.get(G);R!==void 0&&te(oe.__webglFramebuffer,G,G.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&ne(G)}function Pe(G){let R=G.texture,Q=n.get(G),oe=n.get(R);G.addEventListener("dispose",M);let ue=G.textures,xe=G.isWebGLCubeRenderTarget===!0,ve=ue.length>1;if(ve||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=R.version,s.memory.textures++),xe){Q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(R.mipmaps&&R.mipmaps.length>0){Q.__webglFramebuffer[fe]=[];for(let pe=0;pe<R.mipmaps.length;pe++)Q.__webglFramebuffer[fe][pe]=i.createFramebuffer()}else Q.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Q.__webglFramebuffer=[];for(let fe=0;fe<R.mipmaps.length;fe++)Q.__webglFramebuffer[fe]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(ve)for(let fe=0,pe=ue.length;fe<pe;fe++){let we=n.get(ue[fe]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),s.memory.textures++)}if(G.samples>0&&pt(G)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let fe=0;fe<ue.length;fe++){let pe=ue[fe];Q.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[fe]);let we=o.convert(pe.format,pe.colorSpace),We=o.convert(pe.type),Ee=x(pe.internalFormat,we,We,pe.normalized,pe.colorSpace,G.isXRRenderTarget===!0),Se=De(G);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Ee,G.width,G.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,Q.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),G.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),he(Q.__webglDepthRenderbuffer,G,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),X(i.TEXTURE_CUBE_MAP,R);for(let fe=0;fe<6;fe++)if(R.mipmaps&&R.mipmaps.length>0)for(let pe=0;pe<R.mipmaps.length;pe++)te(Q.__webglFramebuffer[fe][pe],G,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else te(Q.__webglFramebuffer[fe],G,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(R)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let fe=0,pe=ue.length;fe<pe;fe++){let we=ue[fe],We=n.get(we),Ee=i.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Ee=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,We.__webglTexture),X(Ee,we),te(Q.__webglFramebuffer,G,we,i.COLOR_ATTACHMENT0+fe,Ee,0),m(we)&&y(Ee)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(fe=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,oe.__webglTexture),X(fe,R),R.mipmaps&&R.mipmaps.length>0)for(let pe=0;pe<R.mipmaps.length;pe++)te(Q.__webglFramebuffer[pe],G,R,i.COLOR_ATTACHMENT0,fe,pe);else te(Q.__webglFramebuffer,G,R,i.COLOR_ATTACHMENT0,fe,0);m(R)&&y(fe),t.unbindTexture()}G.depthBuffer&&ne(G)}function ye(G){let R=G.textures;for(let Q=0,oe=R.length;Q<oe;Q++){let ue=R[Q];if(m(ue)){let xe=v(G),ve=n.get(ue).__webglTexture;t.bindTexture(xe,ve),y(xe),t.unbindTexture()}}}let Ze=[],Ge=[];function nt(G){if(G.samples>0){if(pt(G)===!1){let R=G.textures,Q=G.width,oe=G.height,ue=i.COLOR_BUFFER_BIT,xe=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(G),fe=R.length>1;if(fe)for(let we=0;we<R.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let pe=G.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let we=0;we<R.length;we++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[we]);let We=n.get(R[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,Q,oe,0,0,Q,oe,ue,i.NEAREST),l===!0&&(Ze.length=0,Ge.length=0,Ze.push(i.COLOR_ATTACHMENT0+we),G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&(Ze.push(xe),Ge.push(xe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let we=0;we<R.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,ve.__webglColorRenderbuffer[we]);let We=n.get(R[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&l){let R=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function De(G){return Math.min(r.maxSamples,G.samples)}function pt(G){let R=n.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function K(G){let R=s.render.frame;h.get(G)!==R&&(h.set(G,R),G.update())}function Ot(G,R){let Q=G.colorSpace,oe=G.format,ue=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||Q!==xs&&Q!==Ci&&(mt.getTransfer(Q)===Mt?(oe!==Dn||ue!==wn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",Q)),R}function lt(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(c.width=G.naturalWidth||G.width,c.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(c.width=G.displayWidth,c.height=G.displayHeight):(c.width=G.width,c.height=G.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=F,this.getTextureUnits=L,this.setTextureUnits=O,this.setTexture2D=N,this.setTexture2DArray=U,this.setTexture3D=V,this.setTextureCube=H,this.rebindTextures=ce,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=te,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yw(i,e){function t(n,r=Ci){let o,s=mt.getTransfer(r);if(n===wn)return i.UNSIGNED_BYTE;if(n===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wh)return i.BYTE;if(n===Xh)return i.SHORT;if(n===Lo)return i.UNSIGNED_SHORT;if(n===Ql)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===qh)return i.ALPHA;if(n===Kh)return i.RGB;if(n===Dn)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===nr)return i.DEPTH_STENCIL;if(n===Zh)return i.RED;if(n===nc)return i.RED_INTEGER;if(n===ir)return i.RG;if(n===ic)return i.RG_INTEGER;if(n===rc)return i.RGBA_INTEGER;if(n===Xs||n===$s||n===Ys||n===qs)if(s===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Xs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Xs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oc||n===sc||n===ac||n===lc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===oc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ac)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cc||n===uc||n===hc||n===fc||n===dc||n===Ks||n===pc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===cc||n===uc)return s===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===hc)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===fc)return o.COMPRESSED_R11_EAC;if(n===dc)return o.COMPRESSED_SIGNED_R11_EAC;if(n===Ks)return o.COMPRESSED_RG11_EAC;if(n===pc)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===mc||n===gc||n===bc||n===xc||n===yc||n===vc||n===_c||n===Mc||n===wc||n===Sc||n===Tc||n===Ac||n===Ec||n===Rc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===mc)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bc)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xc)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yc)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vc)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_c)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wc)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sc)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ac)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ec)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rc)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pc||n===Cc||n===Ic)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Pc)return s===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ic)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lc||n===Fc||n===Zs||n===kc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Lc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Fc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zs)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var vw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_w=`
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

}`,wf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Es(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mn({vertexShader:vw,fragmentShader:_w,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Me(new Xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sf=class extends si{constructor(e,t){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,g=typeof XRWebGLBinding<"u",b=new wf,m={},y=t.getContextAttributes(),v=null,x=null,_=[],w=[],S=new Je,M=null,A=null,E=new rn;E.viewport=new Nt;let T=new rn;T.viewport=new Nt;let P=[E,T],F=new ql,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=_[W];return Y===void 0&&(Y=new So,_[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=_[W];return Y===void 0&&(Y=new So,_[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=_[W];return Y===void 0&&(Y=new So,_[W]=Y),Y.getHandSpace()};function C(W){let Y=w.indexOf(W.inputSource);if(Y===-1)return;let ie=_[Y];ie!==void 0&&(ie.update(W.inputSource,W.frame,c||s),ie.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",N);for(let W=0;W<_.length;W++){let Y=w[W];Y!==null&&(w[W]=null,_[W].disconnect(Y))}L=null,O=null,b.reset();for(let W in m)delete m[W];if(e.setRenderTarget(v),d=null,f=null,u=null,r=null,x=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(S.width,S.height,!1),A!==null){let W=A.camera;W.fov=A.fov,W.zoom=A.zoom,W.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){o=W,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",k),r.addEventListener("inputsourceschange",N),y.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(S),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,re=null,te=null;y.depth&&(te=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=y.stencil?nr:oi,re=y.stencil?Fo:Yn);let he={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:o};u=this.getBinding(),f=u.createProjectionLayer(he),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Kt(f.textureWidth,f.textureHeight,{format:Dn,type:wn,depthTexture:new ui(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ie={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Kt(d.framebufferWidth,d.framebufferHeight,{format:Dn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),ee.setContext(r),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function N(W){for(let Y=0;Y<W.removed.length;Y++){let ie=W.removed[Y],re=w.indexOf(ie);re>=0&&(w[re]=null,_[re].disconnect(ie))}for(let Y=0;Y<W.added.length;Y++){let ie=W.added[Y],re=w.indexOf(ie);if(re===-1){for(let he=0;he<_.length;he++)if(he>=w.length){w.push(ie),re=he;break}else if(w[he]===null){w[he]=ie,re=he;break}if(re===-1)break}let te=_[re];te&&te.connect(ie)}}let U=new $,V=new $;function H(W,Y,ie){U.setFromMatrixPosition(Y.matrixWorld),V.setFromMatrixPosition(ie.matrixWorld);let re=U.distanceTo(V),te=Y.projectionMatrix.elements,he=ie.projectionMatrix.elements,be=te[14]/(te[10]-1),ne=te[14]/(te[10]+1),ce=(te[9]+1)/te[5],Pe=(te[9]-1)/te[5],ye=(te[8]-1)/te[0],Ze=(he[8]+1)/he[0],Ge=be*ye,nt=be*Ze,De=re/(-ye+Ze),pt=De*-ye;if(Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(pt),W.translateZ(De),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),te[10]===-1)W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let K=be+De,Ot=ne+De,lt=Ge-pt,G=nt+(re-pt),R=ce*ne/Ot*K,Q=Pe*ne/Ot*K;W.projectionMatrix.makePerspective(lt,G,R,Q,K,Ot),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function B(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let Y=W.near,ie=W.far;b.texture!==null&&(b.depthNear>0&&(Y=b.depthNear),b.depthFar>0&&(ie=b.depthFar)),F.near=T.near=E.near=Y,F.far=T.far=E.far=ie,(L!==F.near||O!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,O=F.far),F.layers.mask=W.layers.mask|6,E.layers.mask=F.layers.mask&-5,T.layers.mask=F.layers.mask&-3;let re=W.parent,te=F.cameras;B(F,re);for(let he=0;he<te.length;he++)B(te[he],re);te.length===2?H(F,E,T):F.projectionMatrix.copy(E.projectionMatrix),A===null&&W.isPerspectiveCamera&&(A={camera:W,fov:W.fov,zoom:W.zoom}),z(W,F,re)};function z(W,Y,ie){ie===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(ie.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Sl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(F)},this.getCameraTexture=function(W){return m[W]};let q=null;function X(W,Y){if(h=Y.getViewerPose(c||s),p=Y,h!==null){let ie=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let re=!1;ie.length!==F.cameras.length&&(F.cameras.length=0,re=!0);for(let ne=0;ne<ie.length;ne++){let ce=ie[ne],Pe=null;if(d!==null)Pe=d.getViewport(ce);else{let Ze=u.getViewSubImage(f,ce);Pe=Ze.viewport,ne===0&&(e.setRenderTargetTextures(x,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(x))}let ye=P[ne];ye===void 0&&(ye=new rn,ye.layers.enable(ne),ye.viewport=new Nt,P[ne]=ye),ye.matrix.fromArray(ce.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(ce.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ne===0&&(F.matrix.copy(ye.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),re===!0&&F.cameras.push(ye)}let te=r.enabledFeatures;if(te&&te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let ne=u.getDepthInformation(ie[0]);ne&&ne.isValid&&ne.texture&&b.init(ne,r.renderState)}if(te&&te.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let ne=0;ne<ie.length;ne++){let ce=ie[ne].camera;if(ce){let Pe=m[ce];Pe||(Pe=new Es,m[ce]=Pe);let ye=u.getCameraImage(ce);Pe.sourceTexture=ye}}}}for(let ie=0;ie<_.length;ie++){let re=w[ie],te=_[ie];re!==null&&te!==void 0&&te.update(re,Y,c||s)}q&&q(W,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),p=null}let ee=new u0;ee.setAnimationLoop(X),this.setAnimationLoop=function(W){q=W},this.dispose=function(){}}},Mw=new wt,g0=new ot;g0.set(-1,0,0,0,1,0,0,0,1);function ww(i,e){function t(b,m){b.matrixAutoUpdate===!0&&b.updateMatrix(),m.value.copy(b.matrix)}function n(b,m){m.color.getRGB(b.fogColor.value,ef(i)),m.isFog?(b.fogNear.value=m.near,b.fogFar.value=m.far):m.isFogExp2&&(b.fogDensity.value=m.density)}function r(b,m,y,v,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(b,m):m.isMeshLambertMaterial?(o(b,m),m.envMap&&(b.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(b,m),u(b,m)):m.isMeshPhongMaterial?(o(b,m),h(b,m),m.envMap&&(b.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(b,m),f(b,m),m.isMeshPhysicalMaterial&&d(b,m,x)):m.isMeshMatcapMaterial?(o(b,m),p(b,m)):m.isMeshDepthMaterial?o(b,m):m.isMeshDistanceMaterial?(o(b,m),g(b,m)):m.isMeshNormalMaterial?o(b,m):m.isLineBasicMaterial?(s(b,m),m.isLineDashedMaterial&&a(b,m)):m.isPointsMaterial?l(b,m,y,v):m.isSpriteMaterial?c(b,m):m.isShadowMaterial?(b.color.value.copy(m.color),b.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(b,m){b.opacity.value=m.opacity,m.color&&b.diffuse.value.copy(m.color),m.emissive&&b.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(b.map.value=m.map,t(m.map,b.mapTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.bumpMap&&(b.bumpMap.value=m.bumpMap,t(m.bumpMap,b.bumpMapTransform),b.bumpScale.value=m.bumpScale,m.side===an&&(b.bumpScale.value*=-1)),m.normalMap&&(b.normalMap.value=m.normalMap,t(m.normalMap,b.normalMapTransform),b.normalScale.value.copy(m.normalScale),m.side===an&&b.normalScale.value.negate()),m.displacementMap&&(b.displacementMap.value=m.displacementMap,t(m.displacementMap,b.displacementMapTransform),b.displacementScale.value=m.displacementScale,b.displacementBias.value=m.displacementBias),m.emissiveMap&&(b.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,b.emissiveMapTransform)),m.specularMap&&(b.specularMap.value=m.specularMap,t(m.specularMap,b.specularMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest);let y=e.get(m),v=y.envMap,x=y.envMapRotation;v&&(b.envMap.value=v,b.envMapRotation.value.setFromMatrix4(Mw.makeRotationFromEuler(x)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(g0),b.reflectivity.value=m.reflectivity,b.ior.value=m.ior,b.refractionRatio.value=m.refractionRatio),m.lightMap&&(b.lightMap.value=m.lightMap,b.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,b.lightMapTransform)),m.aoMap&&(b.aoMap.value=m.aoMap,b.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,b.aoMapTransform))}function s(b,m){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,m.map&&(b.map.value=m.map,t(m.map,b.mapTransform))}function a(b,m){b.dashSize.value=m.dashSize,b.totalSize.value=m.dashSize+m.gapSize,b.scale.value=m.scale}function l(b,m,y,v){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,b.size.value=m.size*y,b.scale.value=v*.5,m.map&&(b.map.value=m.map,t(m.map,b.uvTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest)}function c(b,m){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,b.rotation.value=m.rotation,m.map&&(b.map.value=m.map,t(m.map,b.mapTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest)}function h(b,m){b.specular.value.copy(m.specular),b.shininess.value=Math.max(m.shininess,1e-4)}function u(b,m){m.gradientMap&&(b.gradientMap.value=m.gradientMap)}function f(b,m){b.metalness.value=m.metalness,m.metalnessMap&&(b.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,b.metalnessMapTransform)),b.roughness.value=m.roughness,m.roughnessMap&&(b.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,b.roughnessMapTransform)),m.envMap&&(b.envMapIntensity.value=m.envMapIntensity)}function d(b,m,y){b.ior.value=m.ior,m.sheen>0&&(b.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),b.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(b.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,b.sheenColorMapTransform)),m.sheenRoughnessMap&&(b.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,b.sheenRoughnessMapTransform))),m.clearcoat>0&&(b.clearcoat.value=m.clearcoat,b.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(b.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,b.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(b.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===an&&b.clearcoatNormalScale.value.negate())),m.dispersion>0&&(b.dispersion.value=m.dispersion),m.retroreflectivity>0&&(b.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(b.iridescence.value=m.iridescence,b.iridescenceIOR.value=m.iridescenceIOR,b.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(b.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,b.iridescenceMapTransform)),m.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),m.transmission>0&&(b.transmission.value=m.transmission,b.transmissionSamplerMap.value=y.texture,b.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(b.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,b.transmissionMapTransform)),b.thickness.value=m.thickness,m.thicknessMap&&(b.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=m.attenuationDistance,b.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(b.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(b.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=m.specularIntensity,b.specularColor.value.copy(m.specularColor),m.specularColorMap&&(b.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,b.specularColorMapTransform)),m.specularIntensityMap&&(b.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,b.specularIntensityMapTransform))}function p(b,m){m.matcap&&(b.matcap.value=m.matcap)}function g(b,m){let y=e.get(m).light;b.referencePosition.value.setFromMatrixPosition(y.matrixWorld),b.nearDistance.value=y.shadow.camera.near,b.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Sw(i,e,t,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){let w=_.program;n.uniformBlockBinding(x,w)}function c(x,_){let w=r[x.id];w===void 0&&(b(x),w=h(x),r[x.id]=w,x.addEventListener("dispose",y));let S=_.program;n.updateUBOMapping(x,S);let M=e.render.frame;o[x.id]!==M&&(f(x),o[x.id]=M)}function h(x){let _=u();x.__bindingPointIndex=_;let w=i.createBuffer(),S=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,S,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,w),w}function u(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let _=r[x.id],w=x.uniforms,S=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,A=w.length;M<A;M++){let E=w[M];if(Array.isArray(E))for(let T=0,P=E.length;T<P;T++)d(E[T],M,T,S);else d(E,M,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,_,w,S){if(g(x,_,w,S)===!0){let M=x.__offset,A=x.value;if(Array.isArray(A)){let E=0;for(let T=0;T<A.length;T++){let P=A[T],F=m(P);p(P,x.__data,E),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(E+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,x.__data)}}function p(x,_,w){typeof x=="number"||typeof x=="boolean"?_[0]=x:x.isMatrix3?(_[0]=x.elements[0],_[1]=x.elements[1],_[2]=x.elements[2],_[3]=0,_[4]=x.elements[3],_[5]=x.elements[4],_[6]=x.elements[5],_[7]=0,_[8]=x.elements[6],_[9]=x.elements[7],_[10]=x.elements[8],_[11]=0):ArrayBuffer.isView(x)?_.set(new x.constructor(x.buffer,x.byteOffset,_.length)):x.toArray(_,w)}function g(x,_,w,S){let M=x.value,A=_+"_"+w;if(S[A]===void 0)return typeof M=="number"||typeof M=="boolean"?S[A]=M:ArrayBuffer.isView(M)?S[A]=M.slice():S[A]=M.clone(),!0;{let E=S[A];if(typeof M=="number"||typeof M=="boolean"){if(E!==M)return S[A]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(E.equals(M)===!1)return E.copy(M),!0}}return!1}function b(x){let _=x.uniforms,w=0,S=16;for(let A=0,E=_.length;A<E;A++){let T=Array.isArray(_[A])?_[A]:[_[A]];for(let P=0,F=T.length;P<F;P++){let L=T[P],O=Array.isArray(L.value)?L.value:[L.value];for(let C=0,k=O.length;C<k;C++){let N=O[C],U=m(N),V=w%S,H=V%U.boundary,B=V+H;w+=H,B!==0&&S-B<U.storage&&(w+=S-B),L.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=U.storage}}}let M=w%S;return M>0&&(w+=S-M),x.__size=w,x.__cache={},this}function m(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(_.boundary=16,_.storage=x.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",x),_}function y(x){let _=x.target;_.removeEventListener("dispose",y);let w=s.indexOf(_.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete o[_.id]}function v(){for(let x in r)i.deleteBuffer(r[x]);s=[],r={},o={}}return{bind:l,update:c,dispose:v}}var Tw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function Aw(){return fi===null&&(fi=new Pl(Tw,16,16,ir,Kn),fi.name="DFG_LUT",fi.minFilter=qt,fi.magFilter=qt,fi.wrapS=An,fi.wrapT=An,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var Fr=class{constructor(e={}){let{canvas:t=Cm(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=wn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;let g=d,b=new Set([rc,ic,nc]),m=new Set([wn,Yn,Lo,Fo,ec,tc]),y=new Uint32Array(4),v=new Int32Array(4),x=new $,_=null,w=null,S=[],M=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,T=!1,P=null,F=null,L=null,O=null;this._outputColorSpace=Lt;let C=0,k=0,N=null,U=-1,V=null,H=new Nt,B=new Nt,z=null,q=new j(0),X=0,ee=t.width,W=t.height,Y=1,ie=null,re=null,te=new Nt(0,0,ee,W),he=new Nt(0,0,ee,W),be=!1,ne=new Ao,ce=!1,Pe=!1,ye=new wt,Ze=new $,Ge=new Nt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function pt(){return N===null?Y:1}let K=n;function Ot(D,Z){return t.getContext(D,Z)}let lt,G,R,Q,oe,ue,xe,ve,fe,pe,we,We,Ee,Se,Xe,qe,ct,J,Te,de,Ae,Le,ge;try{let D={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",Bn,!1),K===null){let Z="webgl2";if(K=Ot(Z,D),K===null)throw Ot(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(D){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Bn,!1),je("WebGLRenderer: "+D.message),D}function $e(){lt=new FM(K),lt.init(),Ae=new yw(K,lt),G=new wM(K,lt,e,Ae),R=new bw(K,lt),G.reversedDepthBuffer&&f&&R.buffers.depth.setReversed(!0),F=K.createFramebuffer(),L=K.createFramebuffer(),O=K.createFramebuffer(),Q=new OM(K),oe=new iw,ue=new xw(K,lt,R,oe,G,Ae,Q),xe=new LM(E),ve=new Uv(K),Le=new _M(K,ve),fe=new kM(K,ve,Q,Le),pe=new UM(K,fe,ve,Le,Q),J=new NM(K,G,ue),Xe=new SM(oe),we=new nw(E,xe,lt,G,Le,Xe),We=new ww(E,oe),Ee=new ow,Se=new hw(lt),ct=new vM(E,xe,R,pe,p,l),qe=new gw(E,pe,G),ge=new Sw(K,Q,G,R),Te=new MM(K,lt,Q),de=new DM(K,lt,Q),Q.programs=we.programs,E.capabilities=G,E.extensions=lt,E.properties=oe,E.renderLists=Ee,E.shadowMap=qe,E.state=R,E.info=Q}g!==wn&&(A=new zM(g,t.width,t.height,a,r,o));let ze=new Sf(E,K);this.xr=ze,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let D=lt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=lt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(D){D!==void 0&&(Y=D,this.setSize(ee,W,!1))},this.getSize=function(D){return D.set(ee,W)},this.setSize=function(D,Z,le=!0){if(ze.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=D,W=Z,t.width=Math.floor(D*Y),t.height=Math.floor(Z*Y),le===!0&&(t.style.width=D+"px",t.style.height=Z+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,D,Z)},this.getDrawingBufferSize=function(D){return D.set(ee*Y,W*Y).floor()},this.setDrawingBufferSize=function(D,Z,le){ee=D,W=Z,Y=le,t.width=Math.floor(D*le),t.height=Math.floor(Z*le),this.setViewport(0,0,D,Z)},this.setEffects=function(D){if(g===wn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let Z=0;Z<D.length;Z++)if(D[Z].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(H)},this.getViewport=function(D){return D.copy(te)},this.setViewport=function(D,Z,le,se){D.isVector4?te.set(D.x,D.y,D.z,D.w):te.set(D,Z,le,se),R.viewport(H.copy(te).multiplyScalar(Y).round())},this.getScissor=function(D){return D.copy(he)},this.setScissor=function(D,Z,le,se){D.isVector4?he.set(D.x,D.y,D.z,D.w):he.set(D,Z,le,se),R.scissor(B.copy(he).multiplyScalar(Y).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(D){R.setScissorTest(be=D)},this.setOpaqueSort=function(D){ie=D},this.setTransparentSort=function(D){re=D},this.getClearColor=function(D){return D.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(D=!0,Z=!0,le=!0){let se=0;if(D){let ae=!1;if(N!==null){let Ie=N.texture.format;ae=b.has(Ie)}if(ae){let Ie=N.texture.type,ke=m.has(Ie),Ce=ct.getClearColor(),Ne=ct.getClearAlpha(),He=Ce.r,ht=Ce.g,dt=Ce.b;ke?(y[0]=He,y[1]=ht,y[2]=dt,y[3]=Ne,K.clearBufferuiv(K.COLOR,0,y)):(v[0]=He,v[1]=ht,v[2]=dt,v[3]=Ne,K.clearBufferiv(K.COLOR,0,v))}else se|=K.COLOR_BUFFER_BIT}Z&&(se|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(se|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&K.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),P=D},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Bn,!1),ct.dispose(),Ee.dispose(),Se.dispose(),oe.dispose(),xe.dispose(),pe.dispose(),Le.dispose(),ge.dispose(),we.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Gd),ze.removeEventListener("sessionend",Hd),mr.stop()};function Ct(D){D.preventDefault(),vs("WebGLRenderer: Context Lost."),T=!0}function vt(){vs("WebGLRenderer: Context Restored."),T=!1;let D=Q.autoReset,Z=qe.enabled,le=qe.autoUpdate,se=qe.needsUpdate,ae=qe.type;$e(),Q.autoReset=D,qe.enabled=Z,qe.autoUpdate=le,qe.needsUpdate=se,qe.type=ae}function Bn(D){je("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ti(D){let Z=D.target;Z.removeEventListener("dispose",ti),sy(Z)}function sy(D){ay(D),oe.remove(D)}function ay(D){let Z=oe.get(D).programs;Z!==void 0&&(Z.forEach(function(le){we.releaseProgram(le)}),D.isShaderMaterial&&we.releaseShaderCache(D))}this.renderBufferDirect=function(D,Z,le,se,ae,Ie){Z===null&&(Z=nt);let ke=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Ce=uy(D,Z,le,se,ae);R.setMaterial(se,ke);let Ne=le.index,He=1;if(se.wireframe===!0){if(Ne=fe.getWireframeAttribute(le),Ne===void 0)return;He=2}let ht=le.drawRange,dt=le.attributes.position,Ue=ht.start*He,_t=(ht.start+ht.count)*He;Ie!==null&&(Ue=Math.max(Ue,Ie.start*He),_t=Math.min(_t,(Ie.start+Ie.count)*He)),Ne!==null?(Ue=Math.max(Ue,0),_t=Math.min(_t,Ne.count)):dt!=null&&(Ue=Math.max(Ue,0),_t=Math.min(_t,dt.count));let $t=_t-Ue;if($t<0||$t===1/0)return;Le.setup(ae,se,Ce,le,Ne);let kt,Et=Te;if(Ne!==null&&(kt=ve.get(Ne),Et=de,Et.setIndex(kt)),ae.isMesh)se.wireframe===!0?(R.setLineWidth(se.wireframeLinewidth*pt()),Et.setMode(K.LINES)):Et.setMode(K.TRIANGLES);else if(ae.isLine){let un=se.linewidth;un===void 0&&(un=1),R.setLineWidth(un*pt()),ae.isLineSegments?Et.setMode(K.LINES):ae.isLineLoop?Et.setMode(K.LINE_LOOP):Et.setMode(K.LINE_STRIP)}else ae.isPoints?Et.setMode(K.POINTS):ae.isSprite&&Et.setMode(K.TRIANGLES);if(ae.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))Et.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{let un=ae._multiDrawStarts,Fe=ae._multiDrawCounts,xn=ae._multiDrawCount,yt=Ne?ve.get(Ne).bytesPerElement:1,In=oe.get(se).currentProgram.getUniforms();for(let ni=0;ni<xn;ni++)In.setValue(K,"_gl_DrawID",ni),Et.render(un[ni]/yt,Fe[ni])}else if(ae.isInstancedMesh)Et.renderInstances(Ue,$t,ae.count);else if(le.isInstancedBufferGeometry){let un=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Fe=Math.min(le.instanceCount,un);Et.renderInstances(Ue,$t,Fe)}else Et.render(Ue,$t)};function Vd(D,Z,le,se){P!==null&&D.isNodeMaterial&&P.setObject(se,D),ce===!0&&Xe.setState(D,le,!1),D.transparent===!0&&D.side===st&&D.forceSinglePass===!1?(D.side=an,D.needsUpdate=!0,La(D,Z,se),D.side=hi,D.needsUpdate=!0,La(D,Z,se),D.side=st):La(D,Z,se)}this.compile=function(D,Z,le=null){le===null&&(le=D),P!==null&&P.renderStart(D,Z,le),w=Se.get(le),w.init(Z),M.push(w),le.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(w.pushLight(ae),ae.castShadow&&w.pushShadow(ae))}),D!==le&&D.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(w.pushLight(ae),ae.castShadow&&w.pushShadow(ae))}),w.setupLights(),P!==null&&P.updateLights(w.state.lightsArray),Pe=this.localClippingEnabled,ce=Xe.init(this.clippingPlanes,Pe),ce===!0&&Xe.setGlobalState(this.clippingPlanes,Z),P!==null&&qe.render(w.state.shadowsArray,le,Z);let se=new Set;return D.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;let Ie=ae.material;if(Ie)if(Array.isArray(Ie))for(let ke=0;ke<Ie.length;ke++){let Ce=Ie[ke];Vd(Ce,le,Z,ae),se.add(Ce)}else Vd(Ie,le,Z,ae),se.add(Ie)}),w=M.pop(),P!==null&&P.renderEnd(),se},this.compileAsync=function(D,Z,le=null){let se=this.compile(D,Z,le);return new Promise(ae=>{function Ie(){if(se.forEach(function(ke){let Ne=oe.get(ke).currentProgram;(Ne===void 0||Ne.isReady())&&se.delete(ke)}),se.size===0){ae(D);return}setTimeout(Ie,10)}lt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Nu=null;function ly(D){Nu&&Nu(D)}function Gd(){mr.stop()}function Hd(){mr.start()}let mr=new u0;mr.setAnimationLoop(ly),typeof self<"u"&&mr.setContext(self),this.setAnimationLoop=function(D){Nu=D,ze.setAnimationLoop(D),D===null?mr.stop():mr.start()},ze.addEventListener("sessionstart",Gd),ze.addEventListener("sessionend",Hd),this.render=function(D,Z){if(Z!==void 0&&Z.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;P!==null&&P.renderStart(D,Z);let le=ze.enabled===!0&&ze.isPresenting===!0,se=A!==null&&(N===null||le)&&A.begin(E,N);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(Z),Z=ze.getCamera()),D.isScene===!0&&D.onBeforeRender(E,D,Z,N),w=Se.get(D,M.length),w.init(Z),w.state.textureUnits=ue.getTextureUnits(),M.push(w),ye.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ne.setFromProjectionMatrix(ye,Wn,Z.reversedDepth),Pe=this.localClippingEnabled,ce=Xe.init(this.clippingPlanes,Pe),_=Ee.get(D,S.length),_.init(),S.push(_),ze.enabled===!0&&ze.isPresenting===!0){let ke=E.xr.getDepthSensingMesh();ke!==null&&Uu(ke,Z,-1/0,E.sortObjects)}Uu(D,Z,0,E.sortObjects),_.finish(),P!==null&&P.updateLights(w.state.lightsArray),E.sortObjects===!0&&_.sort(ie,re),De=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,De&&ct.addToRenderList(_,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&Xe.beginShadows();let ae=w.state.shadowsArray;if(qe.render(ae,D,Z),ce===!0&&Xe.endShadows(),(se&&A.hasRenderPass())===!1){let ke=_.opaque,Ce=_.transmissive;if(w.setupLights(),Z.isArrayCamera){let Ne=Z.cameras;if(Ce.length>0)for(let He=0,ht=Ne.length;He<ht;He++){let dt=Ne[He];Xd(ke,Ce,D,dt)}De&&ct.render(D);for(let He=0,ht=Ne.length;He<ht;He++){let dt=Ne[He];Wd(_,D,dt,dt.viewport)}}else Ce.length>0&&Xd(ke,Ce,D,Z),De&&ct.render(D),Wd(_,D,Z)}N!==null&&k===0&&(ue.updateMultisampleRenderTarget(N),ue.updateRenderTargetMipmap(N)),se&&A.end(E),D.isScene===!0&&D.onAfterRender(E,D,Z),Le.resetDefaultState(),U=-1,V=null,M.pop(),M.length>0?(w=M[M.length-1],ue.setTextureUnits(w.state.textureUnits),ce===!0&&Xe.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,S.pop(),S.length>0?_=S[S.length-1]:_=null,P!==null&&P.renderEnd()};function Uu(D,Z,le,se){if(D.visible===!1)return;if(D.layers.test(Z.layers)){if(D.isGroup)le=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Z);else if(D.isLightProbeGrid)w.pushLightProbeGrid(D);else if(D.isLight)w.pushLight(D),D.castShadow&&w.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(ne)){se&&Ge.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ye);let ke=pe.update(D),Ce=D.material;Ce.visible&&_.push(D,ke,Ce,le,Ge.z,null,Z)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(ne))){let ke=pe.update(D),Ce=D.material;if(se&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ge.copy(D.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Ge.copy(ke.boundingSphere.center)),Ge.applyMatrix4(D.matrixWorld).applyMatrix4(ye)),Array.isArray(Ce)){let Ne=ke.groups;for(let He=0,ht=Ne.length;He<ht;He++){let dt=Ne[He],Ue=Ce[dt.materialIndex];Ue&&Ue.visible&&_.push(D,ke,Ue,le,Ge.z,dt,Z)}}else Ce.visible&&_.push(D,ke,Ce,le,Ge.z,null,Z)}}let Ie=D.children;for(let ke=0,Ce=Ie.length;ke<Ce;ke++)Uu(Ie[ke],Z,le,se)}function Wd(D,Z,le,se){let{opaque:ae,transmissive:Ie,transparent:ke}=D;w.setupLightsView(le),ce===!0&&Xe.setGlobalState(E.clippingPlanes,le),se&&R.viewport(H.copy(se)),ae.length>0&&Ia(ae,Z,le),Ie.length>0&&Ia(Ie,Z,le),ke.length>0&&Ia(ke,Z,le),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function Xd(D,Z,le,se){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[se.id]===void 0){let Ue=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[se.id]=new Kt(1,1,{generateMipmaps:!0,type:Ue?Kn:wn,minFilter:tr,samples:Math.max(4,G.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:mt.workingColorSpace})}let Ie=w.state.transmissionRenderTarget[se.id],ke=se.viewport||H;Ie.setSize(ke.z*E.transmissionResolutionScale,ke.w*E.transmissionResolutionScale);let Ce=E.getRenderTarget(),Ne=E.getActiveCubeFace(),He=E.getActiveMipmapLevel();E.setRenderTarget(Ie),E.getClearColor(q),X=E.getClearAlpha(),X<1&&E.setClearColor(16777215,.5),E.clear(),De&&ct.render(le);let ht=E.toneMapping;E.toneMapping=$n;let dt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),w.setupLightsView(se),ce===!0&&Xe.setGlobalState(E.clippingPlanes,se),Ia(D,le,se),ue.updateMultisampleRenderTarget(Ie),ue.updateRenderTargetMipmap(Ie),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let _t=0,$t=Z.length;_t<$t;_t++){let kt=Z[_t],{object:Et,geometry:un,material:Fe,group:xn}=kt;if(Fe.side===st&&Et.layers.test(se.layers)){let yt=Fe.side;Fe.side=an,Fe.needsUpdate=!0,$d(Et,le,se,un,Fe,xn),Fe.side=yt,Fe.needsUpdate=!0,Ue=!0}}Ue===!0&&(ue.updateMultisampleRenderTarget(Ie),ue.updateRenderTargetMipmap(Ie))}E.setRenderTarget(Ce,Ne,He),E.setClearColor(q,X),dt!==void 0&&(se.viewport=dt),E.toneMapping=ht}function Ia(D,Z,le){let se=Z.isScene===!0?Z.overrideMaterial:null;for(let ae=0,Ie=D.length;ae<Ie;ae++){let ke=D[ae],{object:Ce,geometry:Ne,group:He}=ke,ht=ke.material;ht.allowOverride===!0&&se!==null&&(ht=se),Ce.layers.test(le.layers)&&$d(Ce,Z,le,Ne,ht,He)}}function $d(D,Z,le,se,ae,Ie){P!==null&&ae.isNodeMaterial&&P.setObject(D,ae),D.onBeforeRender(E,Z,le,se,ae,Ie),D.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ae.onBeforeRender(E,Z,le,se,D,Ie),ae.transparent===!0&&ae.side===st&&ae.forceSinglePass===!1?(ae.side=an,ae.needsUpdate=!0,E.renderBufferDirect(le,Z,se,ae,D,Ie),ae.side=hi,ae.needsUpdate=!0,E.renderBufferDirect(le,Z,se,ae,D,Ie),ae.side=st):E.renderBufferDirect(le,Z,se,ae,D,Ie),D.onAfterRender(E,Z,le,se,ae,Ie)}function La(D,Z,le){Z.isScene!==!0&&(Z=nt);let se=oe.get(D),ae=w.state.lights,Ie=w.state.shadowsArray,ke=ae.state.version,Ce=we.getParameters(D,ae.state,Ie,Z,le,w.state.lightProbeGridArray),Ne=we.getProgramCacheKey(Ce),He=se.programs;se.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?Z.environment:null,se.fog=Z.fog;let ht=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;se.envMap=xe.get(D.envMap||se.environment,ht),se.envMapRotation=se.environment!==null&&D.envMap===null?Z.environmentRotation:D.envMapRotation,He===void 0&&(D.addEventListener("dispose",ti),He=new Map,se.programs=He);let dt=He.get(Ne);if(dt!==void 0){if(se.currentProgram===dt&&se.lightsStateVersion===ke)return qd(D,Ce),dt}else Ce.uniforms=we.getUniforms(D),P!==null&&D.isNodeMaterial&&P.build(D,le,Ce),D.onBeforeCompile(Ce,E),dt=we.acquireProgram(Ce,Ne),He.set(Ne,dt),se.uniforms=Ce.uniforms;let Ue=se.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ue.clippingPlanes=Xe.uniform),qd(D,Ce),se.needsLights=fy(D),se.lightsStateVersion=ke,se.needsLights&&(Ue.ambientLightColor.value=ae.state.ambient,Ue.lightProbe.value=ae.state.probe,Ue.sunLights.value=ae.state.sun,Ue.sunLightShadows.value=ae.state.sunShadow,Ue.directionalLights.value=ae.state.directional,Ue.directionalLightShadows.value=ae.state.directionalShadow,Ue.spotLights.value=ae.state.spot,Ue.spotLightShadows.value=ae.state.spotShadow,Ue.rectAreaLights.value=ae.state.rectArea,Ue.ltc_1.value=ae.state.rectAreaLTC1,Ue.ltc_2.value=ae.state.rectAreaLTC2,Ue.pointLights.value=ae.state.point,Ue.pointLightShadows.value=ae.state.pointShadow,Ue.hemisphereLights.value=ae.state.hemi,Ue.sunShadowMatrix.value=ae.state.sunShadowMatrix,Ue.sunShadowCascade.value=ae.state.sunShadowCascade,Ue.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ue.spotLightMatrix.value=ae.state.spotLightMatrix,Ue.spotLightMap.value=ae.state.spotLightMap,Ue.pointShadowMatrix.value=ae.state.pointShadowMatrix),se.lightProbeGrid=w.state.lightProbeGridArray.length>0,se.currentProgram=dt,se.uniformsList=null,dt}function Yd(D){if(D.uniformsList===null){let Z=D.currentProgram.getUniforms();D.uniformsList=Oo.seqWithValue(Z.seq,D.uniforms)}return D.uniformsList}function qd(D,Z){let le=oe.get(D);le.outputColorSpace=Z.outputColorSpace,le.batching=Z.batching,le.batchingColor=Z.batchingColor,le.instancing=Z.instancing,le.instancingColor=Z.instancingColor,le.instancingMorph=Z.instancingMorph,le.skinning=Z.skinning,le.morphTargets=Z.morphTargets,le.morphNormals=Z.morphNormals,le.morphColors=Z.morphColors,le.morphTargetsCount=Z.morphTargetsCount,le.numClippingPlanes=Z.numClippingPlanes,le.numIntersection=Z.numClipIntersection,le.vertexAlphas=Z.vertexAlphas,le.vertexTangents=Z.vertexTangents,le.toneMapping=Z.toneMapping}function cy(D,Z){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;x.setFromMatrixPosition(Z.matrixWorld);for(let le=0,se=D.length;le<se;le++){let ae=D[le];if(ae.texture!==null&&ae.boundingBox.containsPoint(x))return ae}return null}function uy(D,Z,le,se,ae){Z.isScene!==!0&&(Z=nt),ue.resetTextureUnits();let Ie=Z.fog,ke=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?Z.environment:null,Ce=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:mt.workingColorSpace,Ne=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,He=xe.get(se.envMap||ke,Ne),ht=se.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,dt=!!le.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ue=!!le.morphAttributes.position,_t=!!le.morphAttributes.normal,$t=!!le.morphAttributes.color,kt=$n;se.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(kt=E.toneMapping);let Et=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,un=Et!==void 0?Et.length:0,Fe=oe.get(se),xn=w.state.lights;if(ce===!0&&(Pe===!0||D!==V)){let It=D===V&&se.id===U;Xe.setState(se,D,It)}let yt=!1;se.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==xn.state.version||Fe.outputColorSpace!==Ce||ae.isBatchedMesh&&Fe.batching===!1||!ae.isBatchedMesh&&Fe.batching===!0||ae.isBatchedMesh&&Fe.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&Fe.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&Fe.instancing===!1||!ae.isInstancedMesh&&Fe.instancing===!0||ae.isSkinnedMesh&&Fe.skinning===!1||!ae.isSkinnedMesh&&Fe.skinning===!0||ae.isInstancedMesh&&Fe.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Fe.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Fe.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Fe.instancingMorph===!1&&ae.morphTexture!==null||Fe.envMap!==He||se.fog===!0&&Fe.fog!==Ie||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Xe.numPlanes||Fe.numIntersection!==Xe.numIntersection)||Fe.vertexAlphas!==ht||Fe.vertexTangents!==dt||Fe.morphTargets!==Ue||Fe.morphNormals!==_t||Fe.morphColors!==$t||Fe.toneMapping!==kt||Fe.morphTargetsCount!==un||!!Fe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Fe.__version=se.version);let In=Fe.currentProgram;yt===!0&&(In=La(se,Z,ae),P&&se.isNodeMaterial&&P.onUpdateProgram(se,In,Fe));let ni=!1,Ui=!1,Kr=!1,St=In.getUniforms(),Gt=Fe.uniforms;if(R.useProgram(In.program)&&(ni=!0,Ui=!0,Kr=!0),se.id!==U&&(U=se.id,Ui=!0),Fe.needsLights){let It=cy(w.state.lightProbeGridArray,ae);Fe.lightProbeGrid!==It&&(Fe.lightProbeGrid=It,Ui=!0)}if(ni||V!==D){R.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),St.setValue(K,"projectionMatrix",D.projectionMatrix),St.setValue(K,"viewMatrix",D.matrixWorldInverse);let zi=St.map.cameraPosition;zi!==void 0&&zi.setValue(K,Ze.setFromMatrixPosition(D.matrixWorld)),G.logarithmicDepthBuffer&&St.setValue(K,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&St.setValue(K,"isOrthographic",D.isOrthographicCamera===!0),V!==D&&(V=D,Ui=!0,Kr=!0)}if(Fe.needsLights&&(xn.state.sunShadowMap.length>0&&St.setValue(K,"sunShadowMap",xn.state.sunShadowMap,ue),xn.state.directionalShadowMap.length>0&&St.setValue(K,"directionalShadowMap",xn.state.directionalShadowMap,ue),xn.state.spotShadowMap.length>0&&St.setValue(K,"spotShadowMap",xn.state.spotShadowMap,ue),xn.state.pointShadowMap.length>0&&St.setValue(K,"pointShadowMap",xn.state.pointShadowMap,ue)),ae.isSkinnedMesh){St.setOptional(K,ae,"bindMatrix"),St.setOptional(K,ae,"bindMatrixInverse");let It=ae.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),St.setValue(K,"boneTexture",It.boneTexture,ue))}ae.isBatchedMesh&&(St.setOptional(K,ae,"batchingTexture"),St.setValue(K,"batchingTexture",ae._matricesTexture,ue),St.setOptional(K,ae,"batchingIdTexture"),St.setValue(K,"batchingIdTexture",ae._indirectTexture,ue),St.setOptional(K,ae,"batchingColorTexture"),ae._colorsTexture!==null&&St.setValue(K,"batchingColorTexture",ae._colorsTexture,ue));let Bi=le.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&J.update(ae,le,In),(Ui||Fe.receiveShadow!==ae.receiveShadow)&&(Fe.receiveShadow=ae.receiveShadow,St.setValue(K,"receiveShadow",ae.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&Z.environment!==null&&(Gt.envMapIntensity.value=Z.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=Aw()),Ui){if(St.setValue(K,"toneMappingExposure",E.toneMappingExposure),Fe.needsLights&&hy(Gt,Kr),Ie&&se.fog===!0&&We.refreshFogUniforms(Gt,Ie),We.refreshMaterialUniforms(Gt,se,Y,W,w.state.transmissionRenderTarget[D.id]),Fe.needsLights&&Fe.lightProbeGrid){let It=Fe.lightProbeGrid;Gt.probesSH.value=It.texture,Gt.probesMin.value.copy(It.boundingBox.min),Gt.probesMax.value.copy(It.boundingBox.max),Gt.probesResolution.value.copy(It.resolution)}Oo.upload(K,Yd(Fe),Gt,ue)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Oo.upload(K,Yd(Fe),Gt,ue),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&St.setValue(K,"center",ae.center),St.setValue(K,"modelViewMatrix",ae.modelViewMatrix),St.setValue(K,"normalMatrix",ae.normalMatrix),St.setValue(K,"modelMatrix",ae.matrixWorld),se.uniformsGroups!==void 0){let It=se.uniformsGroups;for(let zi=0,Zr=It.length;zi<Zr;zi++){let Zd=It[zi];ge.update(Zd,In),ge.bind(Zd,In)}}return In}function hy(D,Z){D.ambientLightColor.needsUpdate=Z,D.lightProbe.needsUpdate=Z,D.sunLights.needsUpdate=Z,D.sunLightShadows.needsUpdate=Z,D.directionalLights.needsUpdate=Z,D.directionalLightShadows.needsUpdate=Z,D.pointLights.needsUpdate=Z,D.pointLightShadows.needsUpdate=Z,D.spotLights.needsUpdate=Z,D.spotLightShadows.needsUpdate=Z,D.rectAreaLights.needsUpdate=Z,D.hemisphereLights.needsUpdate=Z}function fy(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(D,Z,le){let se=oe.get(D);se.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),oe.get(D.texture).__webglTexture=Z,oe.get(D.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:le,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Z){let le=oe.get(D);le.__webglFramebuffer=Z,le.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(D,Z=0,le=0){N=D,C=Z,k=le;let se=null,ae=!1,Ie=!1;if(D){let Ce=oe.get(D);if(Ce.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(K.FRAMEBUFFER,Ce.__webglFramebuffer),H.copy(D.viewport),B.copy(D.scissor),z=D.scissorTest,R.viewport(H),R.scissor(B),R.setScissorTest(z),U=-1;return}else if(Ce.__webglFramebuffer===void 0)ue.setupRenderTarget(D);else if(Ce.__hasExternalTextures)ue.rebindTextures(D,oe.get(D.texture).__webglTexture,oe.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let ht=D.depthTexture;if(Ce.__boundDepthTexture!==ht){if(ht!==null&&oe.has(ht)&&(D.width!==ht.image.width||D.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(D)}}let Ne=D.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ie=!0);let He=oe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(He[Z])?se=He[Z][le]:se=He[Z],ae=!0):D.samples>0&&ue.useMultisampledRTT(D)===!1?se=oe.get(D).__webglMultisampledFramebuffer:Array.isArray(He)?se=He[le]:se=He,H.copy(D.viewport),B.copy(D.scissor),z=D.scissorTest}else H.copy(te).multiplyScalar(Y).floor(),B.copy(he).multiplyScalar(Y).floor(),z=be;if(le!==0&&(se=F),R.bindFramebuffer(K.FRAMEBUFFER,se)&&R.drawBuffers(D,se),R.viewport(H),R.scissor(B),R.setScissorTest(z),ae){let Ce=oe.get(D.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ce.__webglTexture,le)}else if(Ie){let Ce=Z;for(let Ne=0;Ne<D.textures.length;Ne++){let He=oe.get(D.textures[Ne]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Ne,He.__webglTexture,le,Ce)}}else if(D!==null&&le!==0){let Ce=oe.get(D.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Ce.__webglTexture,le)}U=-1};function Kd(D){let Z=oe.get(D);return(Z.__readFormat!==D.format||Z.__readType!==D.type)&&(Z.__readFormat=D.format,Z.__readType=D.type,Z.__formatReadable=G.textureFormatReadable(D.format),Z.__typeReadable=G.textureTypeReadable(D.type)),Z}this.readRenderTargetPixels=function(D,Z,le,se,ae,Ie,ke,Ce=0){if(!(D&&D.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=oe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ke!==void 0&&(Ne=Ne[ke]),Ne){R.bindFramebuffer(K.FRAMEBUFFER,Ne);try{let He=D.textures[Ce],ht=He.format,dt=He.type;D.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Ce);let Ue=Kd(He);if(Ue.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=D.width-se&&le>=0&&le<=D.height-ae&&K.readPixels(Z,le,se,ae,Ae.convert(ht),Ae.convert(dt),Ie)}finally{let He=N!==null?oe.get(N).__webglFramebuffer:null;R.bindFramebuffer(K.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(D,Z,le,se,ae,Ie,ke,Ce=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=oe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ke!==void 0&&(Ne=Ne[ke]),Ne)if(Z>=0&&Z<=D.width-se&&le>=0&&le<=D.height-ae){R.bindFramebuffer(K.FRAMEBUFFER,Ne);let He=D.textures[Ce],ht=He.format,dt=He.type;D.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Ce);let Ue=Kd(He);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,_t),K.bufferData(K.PIXEL_PACK_BUFFER,Ie.byteLength,K.STREAM_READ),K.readPixels(Z,le,se,ae,Ae.convert(ht),Ae.convert(dt),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);let $t=N!==null?oe.get(N).__webglFramebuffer:null;R.bindFramebuffer(K.FRAMEBUFFER,$t);let kt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await Lm(K,kt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,_t),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Ie),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(_t),K.deleteSync(kt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Z=null,le=0){let se=Math.pow(2,-le),ae=Math.floor(D.image.width*se),Ie=Math.floor(D.image.height*se),ke=Z!==null?Z.x:0,Ce=Z!==null?Z.y:0;ue.setTexture2D(D,0),K.copyTexSubImage2D(K.TEXTURE_2D,le,0,0,ke,Ce,ae,Ie),R.unbindTexture()},this.copyTextureToTexture=function(D,Z,le=null,se=null,ae=0,Ie=0){let ke,Ce,Ne,He,ht,dt,Ue,_t,$t,kt=D.isCompressedTexture?D.mipmaps[Ie]:D.image;if(le!==null)ke=le.max.x-le.min.x,Ce=le.max.y-le.min.y,Ne=le.isBox3?le.max.z-le.min.z:1,He=le.min.x,ht=le.min.y,dt=le.isBox3?le.min.z:0;else{let Gt=Math.pow(2,-ae);ke=Math.floor(kt.width*Gt),Ce=Math.floor(kt.height*Gt),D.isDataArrayTexture?Ne=kt.depth:D.isData3DTexture?Ne=Math.floor(kt.depth*Gt):Ne=1,He=0,ht=0,dt=0}se!==null?(Ue=se.x,_t=se.y,$t=se.z):(Ue=0,_t=0,$t=0);let Et=Ae.convert(Z.format),un=Ae.convert(Z.type),Fe;Z.isData3DTexture?(ue.setTexture3D(Z,0),Fe=K.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ue.setTexture2DArray(Z,0),Fe=K.TEXTURE_2D_ARRAY):(ue.setTexture2D(Z,0),Fe=K.TEXTURE_2D),R.activeTexture(K.TEXTURE0),R.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Z.flipY),R.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),R.pixelStorei(K.UNPACK_ALIGNMENT,Z.unpackAlignment);let xn=R.getParameter(K.UNPACK_ROW_LENGTH),yt=R.getParameter(K.UNPACK_IMAGE_HEIGHT),In=R.getParameter(K.UNPACK_SKIP_PIXELS),ni=R.getParameter(K.UNPACK_SKIP_ROWS),Ui=R.getParameter(K.UNPACK_SKIP_IMAGES);R.pixelStorei(K.UNPACK_ROW_LENGTH,kt.width),R.pixelStorei(K.UNPACK_IMAGE_HEIGHT,kt.height),R.pixelStorei(K.UNPACK_SKIP_PIXELS,He),R.pixelStorei(K.UNPACK_SKIP_ROWS,ht),R.pixelStorei(K.UNPACK_SKIP_IMAGES,dt);let Kr=D.isDataArrayTexture||D.isData3DTexture,St=Z.isDataArrayTexture||Z.isData3DTexture;if(D.isDepthTexture){let Gt=oe.get(D),Bi=oe.get(Z),It=oe.get(Gt.__renderTarget),zi=oe.get(Bi.__renderTarget);R.bindFramebuffer(K.READ_FRAMEBUFFER,It.__webglFramebuffer),R.bindFramebuffer(K.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Zr=0;Zr<Ne;Zr++)Kr&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,oe.get(D).__webglTexture,ae,dt+Zr),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,oe.get(Z).__webglTexture,Ie,$t+Zr)),K.blitFramebuffer(He,ht,ke,Ce,Ue,_t,ke,Ce,K.DEPTH_BUFFER_BIT,K.NEAREST);R.bindFramebuffer(K.READ_FRAMEBUFFER,null),R.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(ae!==0||D.isRenderTargetTexture||oe.has(D)){let Gt=oe.get(D),Bi=oe.get(Z);R.bindFramebuffer(K.READ_FRAMEBUFFER,L),R.bindFramebuffer(K.DRAW_FRAMEBUFFER,O);for(let It=0;It<Ne;It++)Kr?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Gt.__webglTexture,ae,dt+It):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Gt.__webglTexture,ae),St?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Bi.__webglTexture,Ie,$t+It):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Bi.__webglTexture,Ie),ae!==0?K.blitFramebuffer(He,ht,ke,Ce,Ue,_t,ke,Ce,K.COLOR_BUFFER_BIT,K.NEAREST):St?K.copyTexSubImage3D(Fe,Ie,Ue,_t,$t+It,He,ht,ke,Ce):K.copyTexSubImage2D(Fe,Ie,Ue,_t,He,ht,ke,Ce);R.bindFramebuffer(K.READ_FRAMEBUFFER,null),R.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else St?D.isDataTexture||D.isData3DTexture?K.texSubImage3D(Fe,Ie,Ue,_t,$t,ke,Ce,Ne,Et,un,kt.data):Z.isCompressedArrayTexture?K.compressedTexSubImage3D(Fe,Ie,Ue,_t,$t,ke,Ce,Ne,Et,kt.data):K.texSubImage3D(Fe,Ie,Ue,_t,$t,ke,Ce,Ne,Et,un,kt):D.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Ie,Ue,_t,ke,Ce,Et,un,kt.data):D.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Ie,Ue,_t,kt.width,kt.height,Et,kt.data):K.texSubImage2D(K.TEXTURE_2D,Ie,Ue,_t,ke,Ce,Et,un,kt);R.pixelStorei(K.UNPACK_ROW_LENGTH,xn),R.pixelStorei(K.UNPACK_IMAGE_HEIGHT,yt),R.pixelStorei(K.UNPACK_SKIP_PIXELS,In),R.pixelStorei(K.UNPACK_SKIP_ROWS,ni),R.pixelStorei(K.UNPACK_SKIP_IMAGES,Ui),Ie===0&&Z.generateMipmaps&&K.generateMipmap(Fe),R.unbindTexture()},this.initRenderTarget=function(D){oe.get(D).__webglFramebuffer===void 0&&ue.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ue.setTextureCube(D,0):D.isData3DTexture?ue.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ue.setTexture2DArray(D,0):ue.setTexture2D(D,0),R.unbindTexture()},this.resetState=function(){C=0,k=0,N=null,R.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};function b0(i){let e=i.length/3,t=new Float32Array(e);for(let n=0;n<e;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(t[n]=r)}return t}function x0(i,e,t,n){for(let r=t.start*3;r<t.end*3;r++){let o=e[r];o<=0||(i[r*3]=Math.min(1,n[0]*o),i[r*3+1]=Math.min(1,n[1]*o),i[r*3+2]=Math.min(1,n[2]*o))}}function M0(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var Af=[],Zn=new Map,y0=new Map,Rf=new Map,v0,_0="",Pf=0;function Cf(i){i!==Af&&If(i,!0)}function If(i,e=!1){for(let t of i){let n=t.hash?Af.find(r=>r.id===t.id&&r.hash===t.hash):void 0;if(!(!n||n===t))for(let r of t.items){let o=Ef(r)?void 0:Zn.get(Tf(t.id,r.id));o&&Ef(o)&&Ew(r,o)}}Af=i,Zn=new Map(i.flatMap(t=>t.items.map(n=>[Tf(t.id,n.id),n]))),y0=new Map(i.flatMap(t=>Object.entries(t.aliases??{}).map(([n,r])=>[n,Tf(t.id,r)])));for(let[t,n]of y0){let r=Zn.get(n);r&&!Zn.has(t)&&Zn.set(t,r)}e||Pf++}function Ef(i){return Array.isArray(i.parts)}function Ew(i,e){i.parts=e.parts,e.symbol&&(i.symbol=e.symbol)}function Lf(i){if(i===v0)return;v0=i;let e=Object.entries(i??{}),t=e.map(([n,r])=>`${n}=${r.hash}`).sort().join("|");t!==_0&&(_0=t,Rf=new Map(e.map(([n,r])=>[n,r.recipe])),Pf++)}function Hc(){return Pf}var Ff="pack:household.draft:item";function w0(i,e,t){let n=Zn.get(i);Zn.set(i,e);try{return t()}finally{n?Zn.set(i,n):Zn.delete(i)}}function Tf(i,e){return`pack:${i}:${e}`}function rr(i){return i.startsWith("pack:")}function Wc(i){return rr(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":/:roof_window[\w.-]*_blind$/.test(i)?"blind":null:null}function kf(i,e){return i==="curtain"?e.color==="fabric":i==="blind"?e.color==="fabric"&&e.shape!=="cyl":e.shape!=="cyl"}function S0(i){return i==="robot_vacuum"||rr(i)&&i.endsWith(":robot_vacuum")}function ta(i){return i.z>.05}function T0(i){let e=(i?.parts??[]).filter(t=>t.shape==="cyl"&&ta(t));return e.length?e.reduce((t,n)=>n.w*n.d>t.w*t.d?n:t).z:.227}function A0(i){return ut(i)?.parts.find(e=>e.screen)}function ut(i){if(!rr(i))return;let e=Zn.get(i);return Rf.get(i)??(e&&Ef(e)?e:void 0)}function Rw(i){if(rr(i))return Rf.get(i)??Zn.get(i)}function Zt(i,e){let t=Rw(e.type);if(e.mount_y!=null)return e.mount_y;let n=C0(e,i.height);if(n!==null)return n;if(e.type==="lamp_wall")return $c;if(E0.has(e.type))return Math.max(0,i.height-R0(e.type,e.h));if(e.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return kr(i,e)+P0(i,e.x,e.z,e.h);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,i.height-e.h);default:return t?kr(i,e):Dr(e)||kr(i,e)}}function kr(i,e){let t=i.rooms.filter(n=>n.points.length>=3);return!t.length||t.some(n=>et([e.x,e.z],n.points))?0:Xc(i,e.x,e.z)}var Uo={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function jn(i){return i==="hedge"||i==="fence"||i==="pergola"}function Df(i){return(i.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!jn(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function qc(i){return[...i.rooms,...Df(i)]}function Cw(i,e,t){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",o=(c,h)=>r==="x"?c:r==="-x"?-c:r==="z"?h:-h,s=1/0,a=-1/0;for(let[c,h]of i.points){let u=o(c,h);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(e,t)-s)/(a-s)));return n*l}function Iw(i,e,t,n){return Or(i,e)+Uo[e.type]-na(i,e,t,n)}var Of=-.2,Yc={set:!1,level:Of};function L0(i){let e=i?.settings.terrain??null;Yc={set:e?.level!=null,level:e?.level??Of}}function Bo(i,e){return Yc.level}function F0(i){return i.elevation>.3?0:Yc.set?Yc.level-i.elevation:Of}function Or(i,e){return F0(i)+(e.offset??0)}function na(i,e,t,n){return e.type==="pool"?0:Cw(e,t,n)}function Xc(i,e,t){let n=(i.outdoor??[]).filter(o=>!jn(o.type)&&o.type!=="pool"&&et([e,t],o.points)),r=[...n].reverse().find(o=>o.cut)??n[0];return r?Iw(i,r,e,t):F0(i)}function Kc(i,e){return Or(i,e)+(e.above?D0(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function Lw(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?D0(i):1.5}function Nf(i,e){return e.above?!1:(i.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!jn(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>et(n,t.points)))}function k0(i,e){return!e.above&&!Nf(i,e)?Zc(i,e)-.05:Kc(i,e)-Lw(e)}function Zc(i,e){return Kc(i,e)-.15}function D0(i){return i.height&&i.height>.3?i.height:1.2}var Fw={type:"none",pitch:35,overhang:.4},AC={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Fw}};var O0=.3;var N0=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),$c=1.75;var E0=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function R0(i,e){return i==="lamp_spot"?Math.max(.06,e)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,e)+.005:.02}var jc=new Set(["stairs","stairs_u"]),U0=3,kw=.18;function B0(i){let e=Math.max(3,Math.round(i.h/kw)),t=i.d>i.w+.3,n=t&&(i.stair_landing??0)>0?Math.min(i.stair_landing??0,e-1):0,r=!n&&i.stair_turn&&t?U0:0;return{n:e,fits:t,flat:n,winders:r,skip:n||r}}function z0(i,e,t){let n=Math.max(4,Math.round(t/.18)),r=Math.floor(n/2)+1,o=r-1,s=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,e*.45),h=(e-c)/o;return{n,k:r,steps1:o,steps2:s,gap:a,fw:l,landing:c,run:h,rise:t/n}}function V0(i){return N0.has(i)||!!ut(i)?.light}var Dw=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Dr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return i.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var I0=.04,Ow=1.2;function P0(i,e,t,n=0){let r=0;for(let o of i.furniture)!(Dw.has(o.type)||ut(o.type)?.surface)||!et([e,t],mi(o))||o.type==="worktop"&&n>0&&o.h-I0>=Ow&&n<=o.h-I0-.02||(r=Math.max(r,o.h));return r}var Jc=new Set(["wall_switch","wall_socket"]),Nw=4;function G0(i){let e=(i.gangs??[]).slice(0,Nw);return e.length?e:[{entity:null}]}function C0(i,e){return i.type==="wifi_ap"?i.variant==="wall"?2.1:Math.max(0,e-i.h):i.type==="water_heater"?i.variant==="wall"?1.1:0:null}var Pw=new Set([...N0,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var Uw=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Bw=["standard","bars","glass_wall"],zw=["sectional","up_and_over"];function pi(i,e){return i.type==="garage"?i.style&&zw.includes(i.style)?i.style:"sectional":i.type==="door"?i.style&&Uw.includes(i.style)?i.style:e?"front":"interior":i.style&&Bw.includes(i.style)?i.style:"standard"}function H0(i,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let r=e==="sidelights",o=i-.04,s=Math.min(1.05,Math.max(.6,o-(r?.6:.3))),a=(o-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let h=o-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function W0(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Pn(i){let e=0;for(let t=0;t<i.length;t++){let[n,r]=i[t],[o,s]=i[(t+1)%i.length];e+=n*s-o*r}return e/2}function Jn(i){return Math.abs(Pn(i))}function ia(i){let e=Pn(i);if(Math.abs(e)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let t=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;t+=(o+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function X0(i){if(i.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=i[e],[r,o]=i[(e+1)%4];if(Math.abs(t-r)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function $0(i){let e=1/0,t=1/0,n=-1/0,r=-1/0;for(let[o,s]of i)e=Math.min(e,o),t=Math.min(t,s),n=Math.max(n,o),r=Math.max(r,s);return{x0:e,z0:t,x1:n,z1:r}}function mi(i){let e=i.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*t-a*n,i.z+s*n+a*t])}function et(i,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[o,s]=e[n],[a,l]=e[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(t=!t)}return t}function Bf(i,e,t){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],o=n*n+r*r,s=o>0?Math.min(1,Math.max(0,((e-i.p[0])*n+(t-i.p[1])*r)/o)):0;return i.h0+(i.h1-i.h0)*s}var Vt=(i,e)=>[i[0]-e[0],i[1]-e[1]],gi=(i,e)=>[i[0]+e[0],i[1]+e[1]],On=(i,e)=>[i[0]*e,i[1]*e],Ur=(i,e)=>i[0]*e[0]+i[1]*e[1],Nr=(i,e)=>i[0]*e[1]-i[1]*e[0],ra=i=>Math.hypot(i[0],i[1]),Cn=i=>{let e=ra(i)||1;return[i[0]/e,i[1]/e]},Uf=i=>[-i[1],i[0]],Y0=i=>[i[1],-i[0]];function or(i,e,t=[]){let n=e.eps??.005,r=[],o=t.filter(T=>Math.hypot(T.b[0]-T.a[0],T.b[1]-T.a[1])>.05),s=[],a=T=>{for(let P=0;P<s.length;P++)if(Math.abs(s[P][0]-T[0])<=n&&Math.abs(s[P][1]-T[1])<=n)return P;return s.push([T[0],T[1]]),s.length-1},l=[];for(let T of i){let P=T.points;if(P.length<3||Math.abs(Pn(P))<1e-6)continue;let F=Pn(P)>0,L=P.map(a);for(let O=0;O<P.length;O++){let C=L[O],k=L[(O+1)%P.length];C!==k&&l.push(F?{u:C,v:k,room:T.id,edge:O,forward:!0}:{u:k,v:C,room:T.id,edge:O,forward:!1})}}let c=o.map(T=>[a(T.a),a(T.b)]),h=new Set;for(let T of i){let P=T.points;P.length<3||(T.wall_splits??[]).forEach((F,L)=>{if(!F||L>=P.length)return;let O=P[L],C=Vt(P[(L+1)%P.length],O),k=ra(C);for(let N of F)N>n&&N<k-n&&h.add(a(gi(O,On(C,N/k))))})}let u=[];for(let T of l){let P=s[T.u],F=s[T.v],L=Vt(F,P),O=ra(L),C=On(L,1/O),k=[];for(let U=0;U<s.length;U++){if(U===T.u||U===T.v)continue;let V=Vt(s[U],P),H=Ur(V,C);H<=n||H>=O-n||Math.abs(Nr(C,V))<=n&&k.push({t:H,id:U})}k.sort((U,V)=>U.t-V.t);let N=[{t:0,id:T.u},...k,{t:O,id:T.v}];for(let U=0;U+1<N.length;U++){let V=N[U],H=N[U+1],B=T.forward?V.t:O-H.t,z=T.forward?H.t:O-V.t;u.push({u:V.id,v:H.id,room:T.room,edge:T.edge,t0:B,t1:z})}}let f=new Map;for(let T of u){let P=T.u<T.v?`${T.u}-${T.v}`:`${T.v}-${T.u}`,F=f.get(P);F||f.set(P,F=[]),F.push(T)}let d=T=>({room_id:T.room,edge:T.edge,t0:T.t0,t1:T.t1}),p=new Map;for(let T of u){let P=`${T.room}:${T.edge}`;p.set(P,[...p.get(P)??[],T.t0].sort((F,L)=>F-L))}let g=T=>{let P=i.find(L=>L.id===T.room)?.wall_heights?.[T.edge];if(!Array.isArray(P))return P;let F=p.get(`${T.room}:${T.edge}`)??[];return P[F.indexOf(T.t0)]??null},b=T=>{let P=T.map(g).filter(L=>typeof L=="number"&&L>0);if(P.length)return Math.min(...P);let F=T.map(L=>i.find(O=>O.id===L.room)?.ceiling_height);return F.every(L=>typeof L=="number"&&L>0)?Math.max(...F):void 0},m=T=>{let P=T.map(F=>i.find(L=>L.id===F.room)?.wall_thickness?.[F.edge]).filter(F=>typeof F=="number"&&F>0);return P.length?Math.max(...P):void 0},y=T=>{for(let P of T){let F=i.find(k=>k.id===P.room),L=F?.wall_slopes?.[P.edge];if(!F||!L)continue;let O=F.points[P.edge],C=F.points[(P.edge+1)%F.points.length];return{p:[O[0],O[1]],q:[C[0],C[1]],h0:Math.max(.05,L[0]),h1:Math.max(.05,L[1])}}},v=T=>T.some(P=>g(P)===0),x=T=>{let P=y(T);return P?{height:Math.max(P.h0,P.h1),slope:P}:{height:b(T)}},_=[],w=[];for(let T of f.values()){let P=T[0],F=T.find(L=>L!==P&&L.u===P.v&&L.v===P.u&&L.room!==P.room);for(let L of T)L!==P&&L!==F&&L.room!==P.room&&r.push(`overlap:${P.room}:${L.room}`);if(v(F?[P,F]:[P])){F&&_.push([P.room,F.room]);continue}if(F){let L=m([P,F])??e.interior;w.push({a:P.u,b:P.v,left:L/2,right:L/2,exterior:!1,roomLeft:P.room,roomRight:F.room,sources:[d(P),d(F)],...x([P,F])})}else w.push({a:P.u,b:P.v,left:0,right:m([P])??e.exterior,exterior:!0,roomLeft:P.room,roomRight:null,sources:[d(P)],...x([P])})}let S=T=>Cn(Vt(s[T.b],s[T.a])),M=new Set;for(let T of w){if(T.exterior||T.free)continue;let P=new Set;for(let L of[T.a,T.b])for(let O of w)!O.exterior||O.free||O.a!==L&&O.b!==L||Math.abs(Nr(S(T),S(O)))>1e-6||(O.roomLeft===T.roomLeft?P.add("left"):O.roomLeft===T.roomRight&&P.add("right"));if(P.size!==1)continue;let F=T.left+T.right;P.has("left")?(T.left=0,T.right=F):(T.left=F,T.right=0),M.add(T)}for(let T of[...M]){let P=[T];for(;P.length;){let F=P.pop();for(let L of[F.a,F.b])for(let O of w){if(O===F||O.exterior||O.free||M.has(O)||O.a!==L&&O.b!==L||Math.abs(Nr(S(F),S(O)))>1e-6)continue;let C=O.left+O.right,k=F.right===0==Ur(S(F),S(O))>0;O.left=k?C:0,O.right=k?0:C,M.add(O),P.push(O)}}}o.forEach((T,P)=>{let[F,L]=c[P];if(F===L)return;let O=[(T.a[0]+T.b[0])/2,(T.a[1]+T.b[1])/2],C=i.find(U=>U.points.length>=3&&et(O,U.points))?.id??null,k=(T.thickness??e.interior)/2,N=typeof T.height=="number"&&T.height>0?T.height:void 0;w.push({free:T.id,a:F,b:L,left:k,right:k,exterior:!1,roomLeft:C,roomRight:C,sources:[],height:N})}),w=Gw(w,s,h);let A=Ww(w,s);return{walls:w.map((T,P)=>{let F=s[T.a],L=s[T.b],O=A.get(`${P}:a`),C=A.get(`${P}:b`),k=Xw([O.right,C.left,L,C.right,O.left,F],1e-6);return{id:Vw(F,L),a:[F[0],F[1]],b:[L[0],L[1]],left:T.left,right:T.right,exterior:T.exterior,roomLeft:T.roomLeft,roomRight:T.roomRight,sources:T.sources,footprint:k,...T.free?{free:T.free}:{},...T.height!==void 0?{height:T.height}:{},...T.slope?{slope:T.slope}:{}}}),warnings:[...new Set(r)],open:_,parts:p}}function Vw(i,e){let t=o=>Math.round(o*100),[n,r]=i[0]<e[0]||i[0]===e[0]&&i[1]<=e[1]?[i,e]:[e,i];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function q0(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function Gw(i,e,t=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[s,a]of o){if(a.length!==2||t.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=q0(l)),c.a!==s&&(c=q0(c)),l.a===c.b)continue;let h=Cn(Vt(e[l.b],e[l.a])),u=Cn(Vt(e[c.b],e[c.a]));if(Math.abs(Nr(h,u))>1e-6||Ur(h,u)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:Hw(l.sources,c.sources)},d=n.filter((p,g)=>g!==a[0]&&g!==a[1]);d.push(f),n.length=0,n.push(...d),r=!0;break}}return n}function Hw(i,e){let t=i.map(n=>({...n}));for(let n of e){let r=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function Ww(i,e){let t=new Map;i.forEach((r,o)=>{let s=Cn(Vt(e[r.b],e[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:On(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let h=t.get(l);h||t.set(l,h=[]),h.push(c)}});let n=new Map;for(let[r,o]of t){let s=e[r];o.sort((c,h)=>c.angle-h.angle);let a=c=>({left:gi(s,On(Uf(c.d),c.left)),right:gi(s,On(Y0(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let h=o[c],u=o[(c+1)%o.length],f=gi(s,On(Uf(h.d),h.left)),d=gi(s,On(Y0(u.d),u.right)),p=Nr(h.d,u.d);if(Math.abs(p)<1e-4)continue;let g=Nr(Vt(d,f),u.d)/p,b=gi(f,On(h.d,g));ra(Vt(b,s))>l||(n.get(h.key).left=b,n.get(u.key).right=b)}}return n}function Xw(i,e){let t=i.filter((r,o)=>ra(Vt(r,i[(o+1)%i.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let o=t[(r+t.length-1)%t.length],s=t[r],a=t[(r+1)%t.length],l=Vt(s,o),c=Vt(a,s);if(Math.abs(Nr(Cn(l),Cn(c)))<1e-7&&Ur(l,c)>0){t=t.filter((h,u)=>u!==r),n=!0;break}}}return t}function zf(i,e,t){let n=i.points[e],r=i.points[(e+1)%i.points.length],o=Cn(Vt(r,n));return gi(n,On(o,t))}function K0(i,e){let t=Vt(i.b,i.a),n=Uf(Cn(t)),r=a=>e.some(l=>l.points.length>=3&&et(a,l.points)),o=0,s=0;for(let a of[.2,.5,.8]){let l=gi(i.a,On(t,a));r(gi(l,On(n,i.left+.2)))&&o++,r(Vt(l,On(n,i.right+.2)))&&s++}return o>=2&&s===0?!0:s>=2&&o===0?!1:null}function Vf(i,e,t){if(i.wall){let r=t.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=Cn(Vt(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,gi(r.a,[-o[1],o[0]])]},edge:0}}let n=e.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Gf(i,e,t){if(!e.wall)return $w(i,t.room,t.edge,e.offset);let n=i.find(o=>o.free===e.wall);if(!n)return null;let r=zf(t.room,0,e.offset);return{wall:n,s:Ur(Vt(r,n.a),Cn(Vt(n.b,n.a)))}}function Hf(i,e,t){if(e.free)return null;let n=t?e.b:e.a,r=Cn(Vt(e.b,e.a)),o=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,s=null;for(let a of i)if(!(a===e||!(o(a.a)||o(a.b)))){if(s||a.exterior!==e.exterior||a.free||!o(t?a.a:a.b)||Ur(Cn(Vt(a.b,a.a)),r)<.9999||Math.abs(a.left-e.left)>.001||Math.abs(a.right-e.right)>.001)return null;s=a}return s}function $w(i,e,t,n){for(let r of i){if(!r.sources.find(a=>a.room_id===e.id&&a.edge===t&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=zf(e,t,n);return{wall:r,s:Ur(Vt(s,r.a),Cn(Vt(r.b,r.a)))}}return null}function Qc(i,e,t,n){let r=e.rotation*Math.PI/180,o=[-Math.sin(r),Math.cos(r)],s=Math.max(.005,e.d),a=null;for(let c of i){let h=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(h<.05)continue;let u=[(c.b[0]-c.a[0])/h,(c.b[1]-c.a[1])/h],f=(e.x-c.a[0])*u[0]+(e.z-c.a[1])*u[1];if(f<-.02||f>h+.02)continue;let d=[-u[1],u[0]],p=(e.x-c.a[0])*d[0]+(e.z-c.a[1])*d[1],g=o[0]*d[0]+o[1]*d[1]>=0?1:-1;if(Math.abs(o[0]*d[0]+o[1]*d[1])<.5)continue;let b=g>0?c.left:-c.right,m=p>-c.right-1e-4&&p<c.left+1e-4,y=Math.abs(p-(b+g*(s/2)));if(!m&&y>.03||a&&y>=a.off)continue;let v=c.a[0]+u[0]*f,x=c.a[1]+u[1]*f,_=m?b+g*(s/2):p,w=c.slope?Bf(c.slope,e.x,e.z):Math.min(t,c.height??t);a={x:v+d[0]*_,z:x+d[1]*_,top:w,off:y}}if(!a)return{x:e.x,z:e.z,y:n};let l=e.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-e.h-.02)):n;return{x:a.x,z:a.z,y:l}}var sr=Math.PI/180;function Br(i){let e=i.rotation??0;if(!e||i.points&&i.points.length>=3)return null;let t=e*sr;return{p:i.pivot??[(i.x0+i.x1)/2,(i.z0+i.z1)/2],c:Math.cos(t),s:Math.sin(t)}}function tu(i,e,t=!1){if(!i)return e;let n=e[0]-i.p[0],r=e[1]-i.p[1],o=t?-i.s:i.s;return[i.p[0]+n*i.c-r*o,i.p[1]+n*o+r*i.c]}function cn(i){let e=Math.min(i.x0,i.x1),t=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1),o=Br(i),s=i.axis==="x"?(l,c)=>[l,i.flip?r-c:n+c]:(l,c)=>[i.flip?t-c:e+c,l],a=o?(l,c)=>tu(o,s(l,c)):s;return i.axis==="x"?{u0:e,u1:t,w:r-n,at:a}:{u0:n,u1:r,w:t-e,at:a}}function Xf(i,e,t,n=1e-6){let[r,o]=xi(i,e,t),s=cn({...i,rotation:0});return r>=s.u0-n&&r<=s.u1+n&&o>=-n&&o<=s.w+n}function ln(i){let e=cn(i).w,t=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*sr),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*sr);if(i.shape==="flat"||i.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(i.shape==="pent")return{vr:e,rh:t+e*r,y:l=>t+l*r};if(i.shape==="mansard"){let l=tg(e,t,n,r,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+o>1e-6?Math.min(e,Math.max(0,(n-t+e*o)/(r+o))):e/2,a=t+s*r;return{vr:s,rh:a,y:l=>l<=s?t+l*r:n+(e-l)*o}}function $f(i){let e=i.settings.roof;return e.type===void 0||e.type==="custom"?e.sections??[]:[]}var Yf=.14;function j0(i,e){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<e-.05}function qf(i,e){return ln(i).rh-Yf>e+.01}function J0(i,e,t,n){let r=null,o=Math.max(0,i.settings.roof.overhang??0);for(let s of $f(i)){if(s.open||n!==void 0&&!qf(s,n)||!Xf(s,e,t)||s.points&&s.points.length>=3&&!et([e,t],s.points))continue;let[a,l]=xi(s,e,t),c=s.shape==="flat"||s.shape==="parapet",h=Math.max(0,s.overhang??o),f=((c?null:aa(Vr(s,{u0:h,u1:h,a:h,b:h}),a,l))??ln(s).y(l))-Yf;r=r===null?f:Math.max(r,f)}return r}function nu(i,e){let t=i.length;if(t<3||Math.abs(e)<1e-9)return i.map(o=>[o[0],o[1]]);let n=Jn(i)>=0?1:-1,r=[];for(let o=0;o<t;o++){let s=i[(o+t-1)%t],a=i[o],l=i[(o+1)%t],c=Z0([a[0]-s[0],a[1]-s[1]]),h=Z0([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],p=u[1]+f[1],g=Math.hypot(d,p);if(g<1e-6){r.push([a[0]+u[0]*e,a[1]+u[1]*e]);continue}let b=(d*u[0]+p*u[1])/g,m=Math.min(4,1/Math.max(.25,b));r.push([a[0]+d/g*e*m,a[1]+p/g*e*m])}return r}function Z0(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function Q0(i,e){if(i.points&&i.points.length>=3)return nu(i.points,e);let t=Math.min(i.x0,i.x1)-e,n=Math.max(i.x0,i.x1)+e,r=Math.min(i.z0,i.z1)-e,o=Math.max(i.z0,i.z1)+e,s=Br(i);return[[t,r],[n,r],[n,o],[t,o]].map(a=>tu(s,a))}function eg(i,e,t,n){let r=or(i,{exterior:t,interior:n},e).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let o=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,s=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let f of[u.a,u.b])s.set(o(f),[...s.get(o(f))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let f=[u.a,u.b],d=u.b;for(;;){let p=(s.get(o(d))??[]).find(g=>!l.has(g));if(!p||(l.add(p),d=o(p.a)===o(d)?p.b:p.a,o(d)===o(f[0])))break;f.push(d)}f.length>=3&&o(d)===o(f[0])&&(!c||Math.abs(Jn(f))>Math.abs(Jn(c)))&&(c=f)}if(!c)return null;let h=[];for(let u=0;u<c.length;u++){let f=c[(u+c.length-1)%c.length],d=c[u],p=c[(u+1)%c.length],g=(d[0]-f[0])*(p[1]-d[1])-(d[1]-f[1])*(p[0]-d[0]);Math.abs(g)>1e-6&&h.push(d)}return h.length>=3?nu(h,t):null}var oa=Math.tan(30*sr);function tg(i,e,t,n,r){let o=Math.min(i*.3,n>1e-6?2.4/n:i*.3),s=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=e+o*n,l=t+s*r,c=Math.min(i-s,Math.max(o,(l-a+oa*(i-s+o))/(2*oa))),h=a+(c-o)*oa;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=o?e+f*n:f<=c?a+(f-o)*oa:f<=i-s?l+(i-s-f)*oa:t+(i-f)*r}}function Vr(i,e){let t=cn(i),n=ln(i),r=t.w,o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(N,U)=>[N,U,n.y(U)],h=c(a,-o),u=c(l,-o),f=c(l,r+s),d=c(a,r+s),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*sr),g=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*sr);if(i.shape==="pent"){let N=[h,u,f,d],U=[[0,n.y(0)],[r,n.y(r)]];return{faces:[N],rim:N,ridges:[[f,d]],gable:U,gables:[U,U]}}if(i.shape==="pyramid"){let N=[(t.u0+t.u1)/2,n.vr,n.rh];return{faces:[[h,u,N],[u,f,N],[f,d,N],[d,h,N]],rim:[h,u,f,d],ridges:[[h,N],[d,N],[u,N],[f,N]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let N=tg(r,i.eave_a,i.eave_b,p,g),U=[[0,n.y(0)],[N.vla,N.yla],[N.vr,N.rh],[r-N.vlb,N.ylb],[r,n.y(r)]],V=[a,N.vla,N.yla],H=[l,N.vla,N.yla],B=[a,r-N.vlb,N.ylb],z=[l,r-N.vlb,N.ylb],q=[a,N.vr,N.rh],X=[l,N.vr,N.rh];return{faces:[[h,u,H,V],[V,H,X,q],[q,X,z,B],[B,z,f,d]],rim:[h,u,H,X,z,f,d,B,q,V],ridges:[[q,X],[V,H],[B,z]],gable:U,gables:[U,U]}}let[b,m]=iu(i)??["gable","gable"],y=Kf(i,[b,m]),v=b==="gable"?[a,n.vr,n.rh]:[t.u0+y.d0,n.vr,n.rh],x=m==="gable"?[l,n.vr,n.rh]:[t.u1-y.d1,n.vr,n.rh],_=[a,y.vah,y.yh],w=[a,y.vbh,y.yh],S=[l,y.vah,y.yh],M=[l,y.vbh,y.yh],A=b==="halfhip",E=m==="halfhip",T=[[h,u,...E?[S]:[],x,v,...A?[_]:[]],[v,x,...E?[M]:[],f,d,...A?[w]:[]]];b==="hip"&&T.push([d,h,v]),A&&T.push([w,_,v]),m==="hip"&&T.push([u,f,x]),E&&T.push([S,M,x]);let P=[h,u,...m==="gable"?[x]:E?[S,M]:[],f,d,...b==="gable"?[v]:A?[w,_]:[]],F=[[v,x]];b==="hip"&&F.push([h,v],[d,v]),A&&F.push([_,v],[w,v]),m==="hip"&&F.push([u,x],[f,x]),E&&F.push([S,x],[M,x]);let L=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],O=[[0,n.y(0)],[y.vah,y.yh],[y.vbh,y.yh],[r,n.y(r)]],C=N=>N==="gable"?L:N==="halfhip"?O:null,k=[C(b),C(m)];return{faces:T,rim:P,ridges:F,gable:k[0]??k[1],gables:k}}function iu(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let e=i.shape,t=n=>n==="gable"||n==="hip"||n==="halfhip"?n:e;return[t(i.end_u0),t(i.end_u1)]}function Kf(i,e){let t=cn(i),n=ln(i),r=t.w,o=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*sr),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*sr),a=t.u1-t.u0,l=e[0]!=="gable"&&e[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),h=c+(n.rh-c)*.55,u=o>1e-6?Math.min(n.vr,(h-i.eave_a)/o):n.vr,f=s>1e-6?Math.max(n.vr,r-(h-i.eave_b)/s):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),p=Math.min(l-.1,(n.rh-h)/Math.max(.2,o)),g=b=>b==="hip"?d:b==="halfhip"?p:0;return{d0:g(e[0]),d1:g(e[1]),yh:h,vah:u,vbh:f}}function aa(i,e,t){let n=null;for(let r of i.faces){if(!et([e,t],r.map(y=>[y[0],y[1]])))continue;let[o,s]=r,a=r.slice(2).find(y=>Math.abs((s[0]-o[0])*(y[1]-o[1])-(s[1]-o[1])*(y[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],c=s[2]-o[2],h=s[1]-o[1],u=a[0]-o[0],f=a[2]-o[2],d=a[1]-o[1],p=c*d-h*f,g=h*u-l*d,b=l*f-c*u;if(Math.abs(g)<1e-9)continue;let m=o[2]-(p*(e-o[0])+b*(t-o[1]))/g;n=n===null?m:Math.min(n,m)}return n}function xi(i,e,t){let[n,r]=tu(Br(i),[e,t],!0),o=Math.min(i.x0,i.x1),s=Math.max(i.x0,i.x1),a=Math.min(i.z0,i.z1),l=Math.max(i.z0,i.z1);return i.axis==="x"?[n,i.flip?l-r:r-a]:[r,i.flip?s-n:n-o]}function Wf(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function zr(i,e){let[t,n]=tu(Br(e),[(e.x0+e.x1)/2,(e.z0+e.z1)/2]),r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i)s===e||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(e)*1.5||Xf(s,t,n)&&(!o||r(s)<r(o))&&(o=s);return o}function Zf(i,e){if(e.shape==="flat"||e.shape==="parapet")return e;let t=cn(e),n=ln(e).rh,r=Vr(i,{u0:0,u1:0,a:0,b:0}),o=ln(i),s=g=>{let[b,m]=t.at(g,t.w/2),[y,v]=xi(i,b,m);return aa(r,y,v)??o.y(v)},a=s(t.u0)<=s(t.u1),l=a?t.u0:t.u1,c=a?t.u1:t.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let g=.5;g<u;g+=.05)if(s(l+h*g)>=n-.02){f=l+h*g;break}if(Math.abs(f-c)<.05)return e;let d=Br(e),p={...e,...d?{pivot:d.p}:{}};return e.axis==="x"?c===t.u1?p.x1=f:p.x0=f:c===t.u1?p.z1=f:p.z0=f,p}function ng(i,e){let t=Zf(i,e),n=cn(t),r=ln(t),o=Vr(i,{u0:0,u1:0,a:0,b:0}),s=ln(i),a=f=>{let[d,p]=n.at(f,n.w/2),[g,b]=xi(i,d,p);return aa(o,g,b)??s.y(b)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,p=c*(f+1)/u,g=l?n.u0+d:n.u1-d,b=l?n.u0+p:n.u1-p,m=a(b),y=1/0,v=-1/0;for(let M=0;M<=40;M++){let A=n.w*M/40;r.y(A)>m+.02&&(y=Math.min(y,A),v=Math.max(v,A))}if(!(v-y>.05))continue;let x=n.at(g,y),_=n.at(b,v),w=xi(i,x[0],x[1]),S=xi(i,_[0],_[1]);h.push({u0:Math.min(w[0],S[0]),u1:Math.max(w[0],S[0]),v0:Math.min(w[1],S[1]),v1:Math.max(w[1],S[1])})}return h}function bi(i,e,t,n){let r=s=>n?s[e]<=t+1e-9:s[e]>=t-1e-9,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c&&o.push(a),c!==h){let u=(t-a[e])/(l[e]-a[e]);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function jf(i,e){let t=bi(i,0,e.u0,!0),n=bi(i,0,e.u1,!1),r=bi(bi(i,0,e.u0,!1),0,e.u1,!0),o=bi(r,1,e.v0,!0),s=bi(r,1,e.v1,!1);return[t,n,o,s].filter(a=>a.length>=3&&Math.abs(Jn(a.map(l=>[l[0],l[1]])))>1e-6)}function ru(i,e,t){let n=cn(e),r=i.floors.flatMap(c=>c.rooms.filter(h=>h.points.length>=3&&c.elevation+c.height>e.base+.05)),o=c=>c.some(h=>r.some(u=>et(h,u.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(a.map(c=>n.at(c,-s)))?0:t,b:o(a.map(c=>n.at(c,n.w+s)))?0:t,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:t,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:t}}function ig(i,e){let t=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...t].reverse().find(n=>n.elevation<e.base-.05)??t[0]}function Yw(i){return ln(i).rh}function rg(i,e,t){let n=i.settings.roof.sections??[],r=n.filter(l=>t.includes(l.id)).map(l=>zr(n,l)??l);if(!r.length)return e.id;let o=Math.max(...r.map(l=>Yw(l))),s=l=>l.rooms.some(c=>c.points.length>=3&&r.some(h=>{let[u,f]=c.points.reduce((d,p)=>[d[0]+p[0]/c.points.length,d[1]+p[1]/c.points.length],[0,0]);return Xf(h,u,f)}));return i.floors.filter(l=>l.elevation>=e.elevation&&l.elevation<o-.3&&s(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??e.id}function eu(i,[e,t,n]){let r=s=>e*s[0]+t*s[1]+n,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c>=-1e-9&&o.push(a),c>=-1e-9!=h>=-1e-9){let u=c/(c-h);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function sa(i){let e=i[0];if(!e)return null;let t=e;for(let d of i)Math.hypot(d[0]-e[0],d[1]-e[1])>Math.hypot(t[0]-e[0],t[1]-e[1])&&(t=d);let n=t[0]-e[0],r=t[1]-e[1],o=e,s=0;for(let d of i){let p=n*(d[1]-e[1])-r*(d[0]-e[0]);Math.abs(p)>Math.abs(s)&&(s=p,o=d)}if(Math.abs(s)<1e-9)return null;let a=o[0]-e[0],l=o[1]-e[1],c=t[2]-e[2],h=o[2]-e[2],u=(c*l-h*r)/s,f=(n*h-a*c)/s;return[u,f,e[2]-u*e[0]-f*e[1]]}var zo=i=>Math.abs(Jn(i.map(e=>[e[0],e[1]])));function ou(i){let e=Pn(i.map(n=>[n[0],n[1]]))>=0?1:-1,t=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=Math.hypot(o[0]-r[0],o[1]-r[1]);if(s<1e-7)continue;let a=-(o[1]-r[1])*e/s,l=(o[0]-r[0])*e/s;t.push([a,l,-(a*r[0]+l*r[1])])}return t}function qw(i,e){let t=sa(i),n=sa(e.poly);if(!t||!n||zo(e.poly)<1e-6)return null;let r=[...ou(e.poly),[n[0]-t[0],n[1]-t[1],n[2]-t[2]-.01]];return Number.isFinite(e.depth)&&r.push([t[0]-n[0],t[1]-n[1],t[2]-n[2]+e.depth]),r}function og(i,e){let t=[i];for(let n of e){let r=[];for(let o of t){let s=qw(o,n),a=s?o:[];for(let c of s??[])a=eu(a,c);if(a.length<3||zo(a)<1e-6){r.push(o);continue}let l=o;for(let[c,h,u]of ou(a)){let f=eu(l,[-c,-h,-u]);if(f.length>=3&&zo(f)>1e-6&&r.push(f),l=eu(l,[c,h,u]),l.length<3)break}}t=r}return t}function Jf(i,e,t){let n=[[0,1]],r=o=>[i[0]+(e[0]-i[0])*o,i[1]+(e[1]-i[1])*o,i[2]+(e[2]-i[2])*o];for(let o of t){let s=sa(o.poly);if(!s||zo(o.poly)<1e-6)continue;let a=ou(o.poly).map(([d,p,g])=>[d*i[0]+p*i[1]+g,d*(e[0]-i[0])+p*(e[1]-i[1])]),l=d=>s[0]*d[0]+s[1]*d[1]+s[2]-d[2],c=l(i),h=l(e)-c;a.push([c-.01,h]),Number.isFinite(o.depth)&&a.push([o.depth-c,-h]);let u=0,f=1;for(let[d,p]of a){if(Math.abs(p)<1e-12){d<-1e-9&&(f=-1);continue}let g=-d/p;p>0?u=Math.max(u,g):f=Math.min(f,g)}f-u<1e-6||(n=n.flatMap(([d,p])=>[[d,Math.min(p,u)],[Math.max(d,f),p]]).filter(([d,p])=>p-d>1e-6))}return n.map(([o,s])=>[r(o),r(s)])}function sg(i,e){let t=sa(i),n=sa(e);if(!t||!n||zo(e)<1e-6)return null;let r=[...i];for(let c of ou(e))r=eu(r,c);if(r.length<3)return null;let o=c=>(n[0]-t[0])*c[0]+(n[1]-t[1])*c[1]+(n[2]-t[2]),s=[];for(let c=0;c<r.length;c++){let h=r[c],u=r[(c+1)%r.length],f=o(h),d=o(u);if(f<0!=d<0){let p=f/(f-d);s.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p,h[2]+(u[2]-h[2])*p])}}if(s.length<2)return null;let a=s[0],l=s[s.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function ag(i,e){let t=cn(i),n=o=>o.map(([s,a,l])=>{let[c,h]=t.at(s,a);return[c,h,l]}),r=[];for(let o of e){let s=bi(bi(bi(bi(o,0,t.u0,!1),0,t.u1,!0),1,0,!1),1,t.w,!0);s.length>=3&&zo(s)>1e-6&&r.push({poly:n(s),depth:1/0});for(let a of jf(o,{u0:t.u0,u1:t.u1,v0:0,v1:t.w}))r.push({poly:n(a),depth:Yf})}return r}function Qf(i,e){return e.map(t=>({poly:t.poly.map(([n,r,o])=>[...xi(i,n,r),o]),depth:t.depth}))}function lg(i,e,t){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return e===t||!n(e)||!n(t)?!1:zr(i,e)!==t&&zr(i,t)!==e}function cg(i,e){if(e.dormer||e.open||!iu(e)||Br(e)||zr(i,e))return null;let t=cn(e),n=ln(e).rh,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===e||s.dormer||s.open||Br(s)||s.axis===e.axis||s.shape==="flat"||s.shape==="parapet"||s.shape==="pent")continue;let a=ln(s).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(s)>r(e)||r(s)===r(e)&&i.indexOf(s)<i.indexOf(e))))continue;let c=Wf(s),[h,u]=e.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[f,d]=e.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],p=Wf(e),[g,b]=e.axis==="x"?[p.z0,p.z1]:[p.x0,p.x1];if(g<f-.05||b>d+.05)continue;let m=ug(e,s),y=null;t.u0<h-.05&&t.u1>=h-.05&&t.u1<=m+.05?y=1:t.u1>u+.05&&t.u0<=u+.05&&t.u0>=m-.05&&(y=0),y!==null&&(!o||r(s)>r(o.host))&&(o={host:s,end:y})}return o}function ug(i,e){let t=cn(e),n=t.at(t.u0,ln(e).vr);return i.axis==="x"?n[0]:n[1]}function hg(i,e){let t=ug(i,e.host),n={...i,...e.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=Wf(i);return i.axis==="x"?(n.x0=e.end===0?Math.min(r.x0,t):r.x0,n.x1=e.end===1?Math.max(r.x1,t):r.x1):(n.z0=e.end===0?Math.min(r.z0,t):r.z0,n.z1=e.end===1?Math.max(r.z1,t):r.z1),n}function ed(i,e){return e.rooms.some(t=>t.points.length>=3)?eg(e.rooms,e.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function td(i,e){if(i.settings.terrain?.earth===!1||e.elevation>.3)return!1;let t=ed(i,e);return!!t&&t.some(([n,r])=>Bo(n,r)-e.elevation>-.15)}function fg(i,e,t,n,r){return!t||!td(i,e)?!1:n<Math.min(e.height,Bo(r[0],r[1])-e.elevation)-.05}function Vo(i,e){let t=Pn(e)>0?1:-1,n=[...i];for(let r=0;r<e.length&&n.length;r++){let o=e[r],s=e[(r+1)%e.length],a=c=>t*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let h=l[c],u=l[(c+1)%l.length],f=a(h),d=a(u);if(f>=0&&n.push(h),f>=0!=d>=0){let p=f/(f-d);n.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p])}}}return n}function dg(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length],o=i[(t+2)%i.length],s=(r[0]-n[0])*(o[1]-r[1])-(r[1]-n[1])*(o[0]-r[0]);if(!(Math.abs(s)<1e-9)){if(e&&Math.sign(s)!==e)return!1;e=Math.sign(s)}}return!0}var Qn=1e-4;function nd(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e/2}function pg(i,e,t,n){let r=[e[0]-i[0],e[1]-i[1]],o=[n[0]-t[0],n[1]-t[1]],s=r[0]*o[1]-r[1]*o[0];if(Math.abs(s)<1e-12)return null;let a=((t[0]-i[0])*o[1]-(t[1]-i[1])*o[0])/s,l=((t[0]-i[0])*r[1]-(t[1]-i[1])*r[0])/s;return a>Qn&&a<1-Qn&&l>-Qn&&l<1+Qn?a:null}function id(i,e,t){let n=t[0]-e[0],r=t[1]-e[1],o=n*n+r*r;if(o<1e-12)return null;let s=((i[0]-e[0])*n+(i[1]-e[1])*r)/o;return s<=Qn||s>=1-Qn?null:Math.abs((i[0]-e[0])*r-(i[1]-e[1])*n)/Math.sqrt(o)<Qn?s:null}function Kw(i,e){for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];for(let o=0;o<e.length;o++){let s=e[o],a=e[(o+1)%e.length];if(pg(n,r,s,a)!==null||id(s,n,r)!==null||id(n,s,a)!==null||Math.hypot(n[0]-s[0],n[1]-s[1])<Qn)return!0}}return et(i[0],e)||et(e[0],i)}function Zw(i){let e=i.map(o=>nd(o)>=0?o:[...o].reverse()),t=[];e.forEach((o,s)=>{for(let a=0;a<o.length;a++){let l=o[a],c=o[(a+1)%o.length],h=[0,1];e.forEach((u,f)=>{if(f!==s)for(let d=0;d<u.length;d++){let p=u[d],g=u[(d+1)%u.length],b=pg(l,c,p,g)??id(p,l,c);b!==null&&h.push(b)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<Qn)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],p=Math.hypot(d[0]-f[0],d[1]-f[1]),g=[(f[0]+d[0])/2+(d[1]-f[1])/p*.001,(f[1]+d[1])/2-(d[0]-f[0])/p*.001];e.some((b,m)=>m!==s&&et(g,b))||t.some(([b,m])=>Math.hypot(b[0]-f[0],b[1]-f[1])<Qn&&Math.hypot(m[0]-d[0],m[1]-d[1])<Qn)||t.push([f,d])}}});let n=[],r=new Set;for(let o=0;o<t.length;o++){if(r.has(o))continue;r.add(o);let s=[t[o][0]],a=t[o][1];for(let l=0;l<t.length&&!(Math.hypot(a[0]-s[0][0],a[1]-s[0][1])<.001);l++){let c=t.findIndex(([h],u)=>!r.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;r.add(c),s.push(t[c][0]),a=t[c][1]}s.length>=3&&nd(s)>1e-6&&n.push(s)}return n}function mg(i){let e=i.filter(o=>o.length>=3),t=e.map((o,s)=>s),n=o=>t[o]===o?o:t[o]=n(t[o]);for(let o=0;o<e.length;o++)for(let s=o+1;s<e.length;s++)n(o)!==n(s)&&Kw(e[o],e[s])&&(t[n(s)]=n(o));let r=new Map;return e.forEach((o,s)=>r.set(n(s),[...r.get(n(s))??[],o])),[...r.values()].flatMap(o=>o.length===1?o:Zw(o))}function jw(i,e,t){let n=t[0]-e[0],r=t[1]-e[1],o=n*n+r*r,s=o?Math.max(0,Math.min(1,((i[0]-e[0])*n+(i[1]-e[1])*r)/o)):0;return Math.hypot(i[0]-e[0]-n*s,i[1]-e[1]-r*s)}function gg(i,e,t=.03){return i.every(n=>et(n,e)||e.some((r,o)=>jw(n,r,e[(o+1)%e.length])<=t))}function bg(i,e){let t=nd(i)>=0?i:[...i].reverse(),n=(r,o)=>{let s=Math.hypot(o[0]-r[0],o[1]-r[1])||1;return[-(o[1]-r[1])/s,(o[0]-r[0])/s]};return t.map((r,o)=>{let s=n(t[(o-1+t.length)%t.length],r),a=n(r,t[(o+1)%t.length]),l=1+s[0]*a[0]+s[1]*a[1];return l<.1?r:[r[0]+(s[0]+a[0])/l*e,r[1]+(s[1]+a[1])/l*e]})}function od(i,e,t){return e==="w"?[(i.x-i.w/2+.5)*t,(i.x+i.w/2+.5)*t]:e==="d"?[(i.z-i.d/2+.5)*t,(i.z+i.d/2+.5)*t]:[i.y*t,(i.y+i.h)*t]}var Go=(i,e)=>!!i.fix&&i.fix.includes(e);function rd(i,e,t,n){let r=new Map,o=i.filter(c=>Go(c,e)).map(c=>({p:c,e:od(c,e,t)})),s=Math.min(.05,.1*t);for(let{p:c,e:h}of o)e!=="h"&&Math.abs((h[0]+h[1])/2-t/2)<1e-6&&r.set(c,"mid");let a=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of o)r.has(h)||u[0]>a+(a===0?s:.001)||e==="h"&&u[1]>=t-.01&&u[0]>.01||(r.set(h,"lo"),a=Math.max(a,u[1]),c=!0)}let l=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of o)r.has(h)||t-u[1]>l+(l>0?.001:e==="h"?.01:s)||(r.set(h,"hi"),l=Math.max(l,t-u[0]),c=!0)}for(let{p:c}of o)r.has(c)||r.set(c,"free");return a+l>Math.min(t,n)-.01?{s0:t,s:n,lo:0,hi:0,side:r}:{s0:t,s:n,lo:a,hi:l,side:r}}function Gr(i,e){if(e.s===e.s0||i<=e.lo)return i;if(i>=e.s0-e.hi)return i+(e.s-e.s0);let t=e.s0-e.lo-e.hi;return t<=0?i*e.s/e.s0:e.lo+(i-e.lo)*(e.s-e.lo-e.hi)/t}function xg(i,e,t,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!su(n))return[Gr(e,n),Gr(t,n)];let r=n.side.get(i)??"lo",o=t-e;if(r==="mid")return[n.s/2-o/2,n.s/2+o/2];if(r==="free"){let s=Gr((e+t)/2,n);return[s-o/2,s+o/2]}return r==="lo"?[e,t]:[e+(n.s-n.s0),t+(n.s-n.s0)]}function su(i){return i.lo>0||i.hi>0}function la(i,e,t,n){let[r,o,s]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(e-r)<.001&&Math.abs(t-o)<.001&&Math.abs(n-s)<.001)return i.parts;let a={w:rd(i.parts,"w",r,e),d:rd(i.parts,"d",o,t),h:rd(i.parts,"h",s,n)},l={w:!su(a.w)&&i.parts.some(c=>Go(c,"w")),d:!su(a.d)&&i.parts.some(c=>Go(c,"d")),h:!su(a.h)&&i.parts.some(c=>Go(c,"h"))};return i.parts.map(c=>{let h=y=>{let v=a[y],[x,_]=od(c,y,v.s0);return Go(c,y)&&!l[y]?xg(c,x,_,v):[Gr(x,v),Gr(_,v)]},[u,f]=h("w"),[d,p]=h("d"),[g,b]=h("h"),m={...c,x:(u+f)/2/e-.5,w:(f-u)/e,z:(d+p)/2/t-.5,d:(p-d)/t,y:g/n,h:(b-g)/n};if(c.shape==="loft"){let y=(S,M,A,E,T)=>{let P=a[S],F=M??E,L=A??T,O=(F-L/2+.5)*P.s0,C=(F+L/2+.5)*P.s0;if(!Go(c,S)||l[S])return[Gr(O,P),Gr(C,P)];let[k,N]=od(c,S,P.s0),[U]=xg(c,k,N,P),V=U-k;return[O+V,C+V]},[v,x]=y("w",c.tx,c.tw,c.x,c.w),[_,w]=y("d",c.tz,c.td,c.z,c.d);m.tx=(v+x)/2/e-.5,m.tw=(x-v)/e,m.tz=(_+w)/2/t-.5,m.td=(w-_)/t}return m})}var ca=["body","fabric","cushion","wood","white","metal","dark","glass","plant","pot","accent","paint"];var Jw=/^#[0-9a-f]{6}$/i;function sd(i,e){let t=i?.[e];return typeof t=="string"&&Jw.test(t)?t:null}var yg=["matt","gloss","fabric","glass","metal","rattan"],Qw={fabric:"fabric",cushion:"fabric",metal:"metal",glass:"glass",white:"gloss",paint:"gloss"},eS=i=>typeof i=="string"&&yg.includes(i);function vg(i,e){let t=i?.[e];return eS(t)?t:tS(e)}function tS(i){return Qw[i]??"matt"}function _g(i){return yg.indexOf(i)}var nS=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var iS=["wall","pole","pillar","parcel","bank"];function wg(i){return nS.includes(i.variant??"")?i.variant:"bin240"}function Sg(i){return iS.includes(i.variant??"")?i.variant:"wall"}var Wt=["#3a3f47","#3a3f47"],Hr=["#23262b","#23262b"],ei=["#5a3b25","#5a3b25"],Ut=["#1f4fa8","#1f4fa8"],ar=["#e3b616","#e3b616"],gt=["#2f7d3b","#2f7d3b"],Mg={default:{rest:Wt,bio:ei,paper:Ut,plastic:ar,glass:gt,garden:gt,recycling:ar,other:Wt},DE:{rest:Hr,bio:ei,paper:Ut,plastic:ar,glass:gt,garden:gt,recycling:ar},AT:{rest:Wt,bio:ei,paper:[Wt[0],"#c0262d"],plastic:ar,glass:gt,garden:gt},CH:{rest:["#d8d8d8","#d8d8d8"],bio:gt,paper:Ut,plastic:Wt,glass:gt,garden:gt},NL:{rest:Wt,bio:gt,paper:Ut,plastic:["#3a3f47","#e57a1f"],glass:gt,garden:gt},BE:{rest:Wt,bio:gt,paper:Ut,plastic:Ut,glass:gt,garden:gt},GB:{rest:Hr,bio:["#3a3f47","#5a3b25"],paper:Ut,plastic:Ut,glass:Hr,garden:ei,recycling:Ut},US:{rest:Hr,bio:gt,paper:Ut,plastic:Ut,glass:Ut,garden:gt,recycling:Ut},CA:{rest:Hr,bio:gt,paper:Ut,plastic:Ut,glass:Ut,garden:gt,recycling:Ut},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Wt,bio:ei,paper:[Wt[0],"#e3b616"],plastic:[Wt[0],"#e3b616"],recycling:[Wt[0],"#e3b616"],glass:gt,garden:gt},IT:{rest:Wt,bio:ei,paper:Ut,plastic:ar,glass:gt,garden:gt},ES:{rest:Wt,bio:ei,paper:Ut,plastic:ar,glass:gt,garden:gt},PT:{rest:Wt,bio:ei,paper:Ut,plastic:ar,glass:gt,garden:gt},DK:{rest:Hr,bio:gt,paper:Ut,plastic:Wt,glass:gt,garden:gt},SE:{rest:Hr,bio:ei,paper:Ut,plastic:Wt,glass:gt,garden:gt},NO:{rest:Wt,bio:ei,paper:Ut,plastic:Wt,glass:gt,garden:gt},FI:{rest:Wt,bio:ei,paper:Ut,plastic:Wt,glass:gt,garden:gt}},Tg="DE";function ad(){return Tg}function rS(i,e){return Mg[e]?.[i]??Mg.default[i]??Wt}function Ag(i,e=Tg){let t=rS(i.bin_kind??"rest",e),n=i.bin_color||t[0];return[n,i.bin_lid||(i.bin_color?n:t[1])]}var lr=Be(3662079,.95),ld=Be(3662079,1),Ii=Be(5995775,.34),Eg=Be(5995775,.22),Ho=[-.55,.83],tt=-1,au=16,cr=32,Rg=48,Wo=64,Qe=class{p=[];c=[];f=[];uv;tile;m=null;materialOf=null;mat=0;constructor(e=!1,t=!1){this.uv=e?[]:null,this.tile=t?[]:null}useMaterials(e){let t=this.materialOf;return this.materialOf=e,this.mat=0,t}paint(e,t=e){let n=this.materialOf?this.materialOf(e)??this.materialOf(t)??0:0;this.mat=n,n&&!this.m&&(this.m=new Array(this.p.length/3).fill(0))}tri(e,t,n,r,o=r,s=r,a,l=tt,c=[0,1]){this.p.push(...e,...t,...n),this.c.push(r.r,r.g,r.b,o.r,o.g,o.b,s.r,s.g,s.b),this.f.push(l,l,l),this.m&&this.m.push(this.mat,this.mat,this.mat),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.sealedTris+this.p.length/9}slice(e){let t=e*3,n=(r,o)=>r?Float32Array.from(r.slice(t*o)):null;return{p:n(this.p,3),c:n(this.c,3),f:n(this.f,1),m:n(this.m,1),uv:n(this.uv,2),tile:n(this.tile,2)}}append(e){this.seal(),this.sealed.push(e),this.sealedTris+=e.p.length/9}sealed=[];sealedTris=0;seal(){if(!this.p.length)return;let e=this.slice(0);this.sealed.push(e),this.sealedTris+=this.p.length/9,this.p=[],this.c=[],this.f=[],this.m=null,this.uv&&(this.uv=[]),this.tile&&(this.tile=[])}joined(){this.seal();let e=this.sealed,t=(r,o,s)=>{let a=new Float32Array(this.sealedTris*3*o),l=0;for(let c of e){let h=r(c),u=c.p.length/3*o;h?a.set(h,l):s&&a.fill(s,l,l+u),l+=u}return a},n=new Ve;return n.setAttribute("position",new _e(t(r=>r.p,3,0),3)),n.setAttribute("color",new _e(t(r=>r.c,3,0),3)),n.setAttribute("fold",new _e(t(r=>r.f,1,0),1)),this.uv&&n.setAttribute("uv",new _e(t(r=>r.uv,2,.5),2)),this.tile&&n.setAttribute("tile",new _e(t(r=>r.tile,2,0),2)),e.some(r=>r.m)&&n.setAttribute("fp3dMat",new _e(t(r=>r.m,1,0),1)),n.computeBoundingSphere(),n}geometry(){if(this.sealed.length)return this.joined();let e=new Ve;return e.setAttribute("position",new _e(this.p,3)),e.setAttribute("color",new _e(this.c,3)),e.setAttribute("fold",new _e(this.f,1)),this.uv&&e.setAttribute("uv",new _e(this.uv,2)),this.tile&&e.setAttribute("tile",new _e(this.tile,2)),this.m&&e.setAttribute("fp3dMat",new _e(this.m,1)),e.computeBoundingSphere(),e}},Pt=class{p=[];c=[];f=[];slice(e){return{p:Float32Array.from(this.p.slice(e*3)),c:Float32Array.from(this.c.slice(e*3)),f:Float32Array.from(this.f.slice(e))}}append(e){this.p.length&&this.sealed.push(this.slice(0)),this.p=[],this.c=[],this.f=[],this.sealed.push(e)}sealed=[];seg(e,t,n=lr,r=tt){this.p.push(...e,...t),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(e,t,n,r,o){let[s,a]=e[1]<=t[1]?[e,t]:[t,e];if(a[1]<=r+1e-6||o<0)return this.seg(s,a,n,tt);if(s[1]>=r-1e-6)return this.seg(s,a,n,o);let l=(r-s[1])/(a[1]-s[1]),c=[s[0]+(a[0]-s[0])*l,r,s[2]+(a[2]-s[2])*l];this.seg(s,c,n,tt),this.seg(c,a,n,o)}geometry(){let e=new Ve;if(this.sealed.length){this.p.length&&this.append({p:new Float32Array(0),c:new Float32Array(0),f:new Float32Array(0)});let t=n=>{let r=new Float32Array(this.sealed.reduce((s,a)=>s+n(a).length,0)),o=0;for(let s of this.sealed)r.set(n(s),o),o+=n(s).length;return r};return e.setAttribute("position",new _e(t(n=>n.p),3)),e.setAttribute("color",new _e(t(n=>n.c),3)),e.setAttribute("fold",new _e(t(n=>n.f),1)),e}return e.setAttribute("position",new _e(this.p,3)),e.setAttribute("color",new _e(this.c,3)),e.setAttribute("fold",new _e(this.f,1)),e}};function cd(i,e,t,n){let o=i.uv?2:0,s=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null,m:i.m?i.m[d]:0}},a=(u,f,d)=>({p:u.p.map((p,g)=>p+(f.p[g]-p)*d),c:u.c.map((p,g)=>p+(f.c[g]-p)*d),uv:u.uv&&f.uv?u.uv.map((p,g)=>p+(f.uv[g]-p)*d):null,tile:u.tile,m:u.m}),l=(u,f,d)=>{for(let p=0;p<3;p++){let g=u*3+p;for(let b=0;b<3;b++)i.p[g*3+b]=f[p].p[b],i.c[g*3+b]=f[p].c[b];if(i.uv&&f[p].uv)for(let b=0;b<o;b++)i.uv[g*2+b]=f[p].uv[b];if(i.tile&&f[p].tile)for(let b=0;b<2;b++)i.tile[g*2+b]=f[p].tile[b];i.f[g]=d}},c=(u,f)=>{let d=i.p.length/9;for(let p of u)i.p.push(...p.p),i.c.push(...p.c),i.f.push(f),i.uv&&i.uv.push(...p.uv??[.5,.5]),i.tile&&i.tile.push(...p.tile??[0,1]),i.m&&i.m.push(p.m);return d},h=i.p.length/9;for(let u=e;u<h;u++){let f=[s(u,0),s(u,1),s(u,2)],d=f.map(M=>M.p[1]>t+1e-6),p=f.map(M=>M.p[1]<t-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let M=0;M<3;M++)i.f[u*3+M]=n;continue}let g=i.f[u*3],b=(M,A)=>a(M,A,(t-M.p[1])/(A.p[1]-M.p[1])),m=d.filter(Boolean).length,y=m===1?d.indexOf(!0):d.indexOf(!1),v=f[y],x=f[(y+1)%3],_=f[(y+2)%3],w=b(v,x),S=b(_,v);m===1?(l(u,[v,w,S],n),c([w,x,_],g),c([w,_,S],g)):(l(u,[v,w,S],g),c([w,x,_],n),c([w,_,S],n))}}function ud(i,e,t,n){let r=i.p.length/6;for(let o=e;o<r;o++){let s=i.p.slice(o*6,o*6+3),a=i.p.slice(o*6+3,o*6+6),[l,c]=s[1]<=a[1]?[s,a]:[a,s];if(c[1]<=t+1e-6)continue;if(l[1]>=t-1e-6){i.f[o*2]=n,i.f[o*2+1]=n;continue}let h=(t-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,t,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[o*6+d]=l[d],i.p[o*6+3+d]=u[d];let f=i.c.slice(o*6,o*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var it=Math.PI/180;function Be(i,e){let t=new j(i).multiplyScalar(e);return t.r=Math.min(1,t.r),t.g=Math.min(1,t.g),t.b=Math.min(1,t.b),t}function oS(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e}function bn(i,e=[]){let t=i.map(([n,r])=>new Je(n,r));return Is.triangulateShape(t,e.map(n=>n.map(([r,o])=>new Je(r,o))))}function Pg(i,e,t,n,r,o,s){let a=new j(s),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=e[d],g=e[(d+1)%4],b=t[d],m=t[(d+1)%4],y=g[0]-p[0],v=g[1]-p[1],x=Math.hypot(y,v);if(x<1e-6)continue;let w=.8+.28*((v/x*Ho[0]-y/x*Ho[1]+1)/2),S=(b[0]+m[0]-p[0]-g[0])/2*(-v/x)+(b[1]+m[1]-p[1]-g[1])/2*(y/x),M=Math.max(0,Math.min(1,S/Math.max(1e-6,Math.hypot(S,r-n)))),A=Be(o,l(n)*w).lerp(a,M),E=Be(o,l(r)*w).lerp(a,M);i.paint(M>.5?s:o,o),i.tri([p[0],n,p[1]],[b[0],r,b[1]],[m[0],r,m[1]],A,E,E),i.tri([p[0],n,p[1]],[m[0],r,m[1]],[g[0],n,g[1]],A,E,A)}let[c,h,u,f]=t;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.paint(s,o),i.tri([c[0],r,c[1]],[u[0],r,u[1]],[h[0],r,h[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a))}function Cg(i,e,t,n,r,o,s,a,l,c){let h=new j(l),u=[];for(let b=0;b<c;b++){let m=b/c*Math.PI*2;u.push({y:o+Math.cos(m)*s,s:r+Math.sin(m)*s})}let f=(b,m)=>{let y=e(b,u[m%c].s);return[y[0],u[m%c].y,y[1]]},d=e(t,r),p=e(n,r),g=(b,m,y,v,x)=>{let _=(m[1]-b[1])*(y[2]-b[2])-(m[2]-b[2])*(y[1]-b[1]),w=(m[2]-b[2])*(y[0]-b[0])-(m[0]-b[0])*(y[2]-b[2]),S=(m[0]-b[0])*(y[1]-b[1])-(m[1]-b[1])*(y[0]-b[0]);_*v[0]+w*v[1]+S*v[2]<0?i.tri(b,y,m,x):i.tri(b,m,y,x)};i.paint(a);for(let b=0;b<c;b++){let m=(b+.5)/c*Math.PI*2,y=Be(a,.62+.4*Math.max(0,Math.cos(m))),v=e((t+n)/2,r+Math.sin(m)*s),x=e((t+n)/2,r),_=[v[0]-x[0],Math.cos(m)*s,v[1]-x[1]];g(f(t,b),f(n,b+1),f(n,b),_,y),g(f(t,b),f(t,b+1),f(n,b+1),_,y)}for(let[b,m,y]of[[t,p,d],[n,d,p]]){i.paint(l,a);let v=e(b,r),x=[v[0],o,v[1]],_=[y[0]-m[0],0,y[1]-m[1]];for(let w=0;w<c;w++)g(x,f(b,w),f(b,w+1),_,h)}}function Ft(i,e,t,n,r,o,s={}){let a=typeof n=="number"?()=>n:p=>Math.max(t+.002,n(p[0],p[1])),l=s.aoFrom??t,c=s.fold??tt,h=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),u=(s.holes??[]).map(p=>oS(p)>0?[...p].reverse():p),f=u.length?[...e,...u.flat()]:e,d=s.topFace===!1&&!s.bottom?[]:bn(e,u);if(s.topFace!==!1){i.paint(o,r);let p=new j(o);for(let[g,b,m]of d){let y=f[g],v=f[b],x=f[m];i.tri([y[0],a(y),y[1]],[x[0],a(x),x[1]],[v[0],a(v),v[1]],p,p,p,void 0,s.topFold??c)}}if(i.paint(r),s.bottom){let p=Be(r,.55);for(let[g,b,m]of d){let y=f[g],v=f[b],x=f[m];i.tri([y[0],t,y[1]],[v[0],t,v[1]],[x[0],t,x[1]],p,p,p,void 0,c)}}for(let p of[e,...u])for(let g=0;g<p.length;g++){let b=p[g],m=p[(g+1)%p.length],y=m[0]-b[0],v=m[1]-b[1],x=Math.hypot(y,v);if(x<1e-6||s.skipSide?.(b,m))continue;let w=.8+.28*((v/x*Ho[0]-y/x*Ho[1]+1)/2),S=a(b),M=a(m),A=Be(r,h(t)*w),E=Be(r,h(S)*w),T=Be(r,h(M)*w);i.tri([b[0],t,b[1]],[b[0],S,b[1]],[m[0],M,m[1]],A,E,T,void 0,c),i.tri([b[0],t,b[1]],[m[0],M,m[1]],[m[0],t,m[1]],A,T,A,void 0,c)}}function Ig(i,e,t,n){if(e.length<2)return;let r=new j(n),o=c=>.5+.5*Math.min(1,Math.max(0,c/1.6)),s=(c,h,u)=>{let f=h[0]-c[0],d=h[1]-c[1],p=h[2]-c[2],g=u[0]-c[0],b=u[1]-c[1],m=u[2]-c[2],y=d*m-p*b,v=p*g-f*m,x=f*b-d*g,_=Math.hypot(y,v,x);if(_<1e-10)return;let w=Math.hypot(y,x),M=.8+.28*(w>1e-9?(y/w*Ho[0]+x/w*Ho[1]+1)/2:.5),A=v/_,E=T=>{let P=Be(t,o(T)*M*(A<0?1+.45*A:1));return A>0?P.lerp(r,A):P};i.paint(A>.5?n:t,t),i.tri(c,h,u,E(c[1]),E(h[1]),E(u[1]))},a=(c,h)=>{let u=c.pts[h%c.pts.length];return[u[0],c.y,u[1]]};for(let c=0;c+1<e.length;c++){let h=e[c],u=e[c+1];for(let f=0;f<h.pts.length;f++)s(a(h,f),a(u,f),a(u,f+1)),s(a(h,f),a(u,f+1),a(h,f+1))}let l=(c,h)=>{let u=c.pts.length,f=c.pts.reduce((g,b)=>g+b[0],0)/u,d=c.pts.reduce((g,b)=>g+b[1],0)/u;if(c.pts.every(g=>Math.hypot(g[0]-f,g[1]-d)<1e-6))return;let p=[f,c.y,d];for(let g=0;g<u;g++)h?s(p,a(c,g+1),a(c,g)):s(p,a(c,g),a(c,g+1))};l(e[0],!1),l(e[e.length-1],!0)}function Lg(i,e){return Math.max(i,e)<.05?8:12}function Fg(i,e,t,n,r,o){let s=[];for(let a=0;a<o;a++){let l=a/o*Math.PI*2;s.push([i+Math.cos(l)*t,e+Math.sin(l)*n])}return{pts:s,y:r}}function kg(i,e,t,n,r,o){let s=Lg(t,n),a=s===8?4:6,l=(r+o)/2,c=(o-r)/2,h=[];for(let u=0;u<=a;u++){let f=-Math.PI/2+u/a*Math.PI,d=u===0||u===a?0:Math.cos(f);h.push(Fg(i,e,t*d,n*d,l+Math.sin(f)*c,s))}return h}function Dg(i,e,t,n,r,o,s){let a=s.map(([u,f])=>[Math.min(1,Math.max(0,u)),Math.min(1,Math.max(0,f))]),l=0,c=[[0,a[0][1]],...a,[0,a[a.length-1][1]]];for(let u=0;u<c.length;u++){let f=c[u],d=c[(u+1)%c.length];l+=f[0]*d[1]-d[0]*f[1]}l<0&&a.reverse();let h=Lg(t,n);return a.map(([u,f])=>Fg(i,e,t*u,n*u,r+f*(o-r),h))}function Og(i,e,t,n,r,o,s){s=Math.max(0,Math.min(s,(e-i)/2,(n-t)/2,(o-r)/2));let a=i+s,l=e-s,c=t+s,h=n-s,u=(d,p)=>{let g=[],b=[[l,c,-90],[l,h,0],[a,h,90],[a,c,180]];for(let[m,y,v]of b)for(let x=0;x<=3;x++){let _=(v+x*30)*Math.PI/180;g.push([m+Math.cos(_)*d,y+Math.sin(_)*d])}return{pts:g,y:p}},f=[];for(let d of[0,45,90]){let p=d*Math.PI/180;f.push(u(s*Math.sin(p),r+s-s*Math.cos(p)))}for(let d of[90,45,0]){let p=d*Math.PI/180;f.push(u(s*Math.sin(p),o-s+s*Math.cos(p)))}return f}var ua={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835,paint:2771576},I=ua,me=Be(5995775,.3),Oe=Be(5995775,.17),rt=Be(3662079,.45),yi=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(e,t,n){this.buf=e,this.lines=t,this.tf=n,this.mirrored=hd(n)}rotated(e,t,n){let r=n*it,o=Math.cos(r),s=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(e+(l-e)*o-(c-t)*s,t+(l-e)*s+(c-t)*o))}moved(e,t){let n=this.tf;return new i(this.buf,this.lines,(r,o)=>n(r+e,o+t))}box(e,t,n,r,o,s,a,l=a,c=null){if(t-e<1e-4||s-o<1e-4||r-n<1e-4)return;let h=[this.tf(e,o),this.tf(e,s),this.tf(t,s),this.tf(t,o)];Ft(this.buf,lu(h),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,r,c)}prism(e,t,n,r,o=r,s=null){if(e.length<3||n-t<1e-4)return;let a=e.map(([l,c])=>this.tf(l,c));if(Ft(this.buf,lu(a),t,n,r,o,{aoFrom:0,bottom:t>.05}),s)for(let l=0;l<a.length;l++)this.line(a[l],a[(l+1)%a.length],n,n,s)}loft(e,t,n,r,o,s=o,a=null){if(r-n<1e-4)return;let l=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])],c=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])];if(l!==lu(l)&&(l.reverse(),c.reverse()),Pg(this.buf,l,c,n,r,o,s),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],r,r,a),this.line(l[h],c[h],n,r,a)}pad(e,t,n,r,o,s,a,l=a,c=.03,h=null){if(c=Math.min(c,(t-e)/2-.005,(s-o)/2-.005,(r-n)/2),c<.008)return this.box(e,t,n,r,o,s,a,l,h);this.loft([e+c,t-c,o+c,s-c],[e,t,o,s],n,n+c,a),r-n-2*c>.005&&this.box(e,t,n+c,r-c,o,s,a,a,h),this.loft([e,t,o,s],[e+c,t-c,o+c,s-c],r-c,r,a,l)}lyingCyl(e,t,n,r,o,s,a,l,c=l,h=12,u=null){let f=Math.min(a,o-r)/2;if(f<1e-4||s<1e-4)return;let d=(r+o)/2,p=e==="x"?t:n,g=e==="x"?n:t,b=(m,y)=>e==="x"?this.tf(m,y):this.tf(y,m);if(Cg(this.buf,b,p-s/2,p+s/2,g,d,f,l,c,h),u)for(let m of[p-s/2,p+s/2])for(let y=0;y<h;y++){let v=y/h*Math.PI*2,x=(y+1)/h*Math.PI*2;this.line(b(m,g+Math.sin(v)*f),b(m,g+Math.sin(x)*f),d+Math.cos(v)*f,d+Math.cos(x)*f,u)}}rings(e,t,n=t,r=null){let o=e.map(s=>{let a=s.pts.map(([l,c])=>this.tf(l,c));return{pts:this.mirrored?a.reverse():a,y:s.y}});if(Ig(this.buf,o,t,n),r){let s=l=>Math.max(...l.pts.map(([c,h])=>Math.hypot(c-l.pts[0][0],h-l.pts[0][1]))),a=o.reduce((l,c)=>s(c)>s(l)+1e-9?c:l,o[0]);for(let l=0;l<a.pts.length;l++)this.line(a.pts[l],a.pts[(l+1)%a.pts.length],a.y,a.y,r)}}cyl(e,t,n,r,o,s,a=s,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(e+Math.cos(f)*n,t+Math.sin(f)*n))}if(Ft(this.buf,lu(h),r,o,s,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],o,o,c)}seg(e,t,n,r,o,s,a=me){this.line(this.tf(e,n),this.tf(r,s),t,o,a)}line(e,t,n,r,o){this.lines.seg([e[0],n,e[1]],[t[0],r,t[1]],o,tt)}outline(e,t,n,r){for(let o=0;o<4;o++){let s=e[o],a=e[(o+1)%4];this.line(s,a,n,n,r),this.line(s,s,t,n,r)}}};function hd(i){let e=i(0,0),t=i(1,0),n=i(0,1);return(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0])<0}function lu(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e>=0?i:[...i].reverse()}function Wr(i,e,t,n,r,o,s=I.metal,a=!1){let l=e/2-o-r,c=t/2-o-r;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,s):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,s)}}function ha(i,e,t,n,r,o,s,a=null,l=!1){let c=(t-e)/s;for(let h=1;h<s;h++){let u=e+c*h;i.seg(u,n,o,u,r,o,Oe)}for(let h=0;h<s;h++){let u=e+c*(h+.5),f=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),f,o+.012,u+Math.min(.1,c/4),f,o+.012,rt);else{let d=s>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,o+.012,d,f+.08,o+.012,rt)}}}function Ng(i,e,t,n,r){let o=-e/2,s=e/2,a=-t/2,l=t/2,c=Math.min(.2,e*.12),h=n*.5,u=Math.min(.24,t*.28);Wr(i,e,t,.07,.05,.05,I.wood,!0),i.pad(o,s,.07,h-.08,a+.02,l,I.fabric,I.fabricTop,.04,me),i.loft([o,s,a,a+u],[o+.01,s-.01,a,a+u*.5],h-.08,n,I.fabric,I.fabricTop,me),i.pad(o,o+c,h-.08,n*.72,a+.02,l-.02,I.fabric,I.fabricTop,.04,me),i.pad(s-c,s,h-.08,n*.72,a+.02,l-.02,I.fabric,I.fabricTop,.04,me);let d=(s-c-(o+c))/r;for(let p=0;p<r;p++){let g=o+c+d*p+.02,b=g+d-.04;i.pad(g,b,h-.08,h+.05,a+u+.02,l-.06,I.cushion,I.cushion,.04),i.loft([g+.01,b-.01,a+u*.55,a+u+.14],[g+.03,b-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,I.cushion)}}function Ug(i,e,t,n,r){let o=-e/2,s=e/2,a=-t/2,l=t/2,c=Math.max(.3,Math.min(.95,t*.5,e*(r?.34:.45))),h=Math.min(.24,c*.28),u=Math.min(.2,c*.24),f=n*.5,d=n*.72,p=r?[-1,1]:[-1],g=(M,A)=>i.loft([M-.015,M+.015,A-.015,A+.015],[M-.025,M+.025,A-.025,A+.025],0,.07,I.wood);g(o+.06,a+.06),g(s-.06,a+.06),r||g(s-.06,a+c-.06);for(let M of p)g(M*(e/2-.06),l-.06),g(M*(e/2-c+.06),l-.06);i.pad(o,s,.07,f-.08,a+.02,a+c,I.fabric,I.fabricTop,.04,me);for(let M of p){let[A,E]=M<0?[o+.02,o+c]:[s-c,s-.02];i.pad(A,E,.07,f-.08,a+c-.02,l,I.fabric,I.fabricTop,.04,me)}i.loft([o,s,a,a+h],[o+.01,s-.01,a,a+h*.5],f-.08,n,I.fabric,I.fabricTop,me);for(let M of p)M<0?i.loft([o,o+h,a+h,l],[o,o+h*.5,a+h,l-.01],f-.08,n,I.fabric,I.fabricTop,me):i.loft([s-h,s,a+h,l],[s-h*.5,s,a+h,l-.01],f-.08,n,I.fabric,I.fabricTop,me);for(let M of p){let[A,E]=M<0?[o+h,o+c]:[s-c,s-h];i.pad(A,E,f-.08,d,l-u,l,I.fabric,I.fabricTop,.04,me)}r||i.pad(s-u,s,f-.08,d,a+.02,a+c-.02,I.fabric,I.fabricTop,.04,me);let b=o+h,m=r?s-h:s-u,y=Math.max(1,Math.round((m-b)/.62)),v=(m-b)/y;for(let M=0;M<y;M++){let A=b+v*M+.02,E=A+v-.04;i.pad(A,E,f-.08,f+.05,a+h+.02,a+c-.04,I.cushion,I.cushion,.04),i.loft([A+.01,E-.01,a+h*.55,a+h+.14],[A+.03,E-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,I.cushion)}let x=a+c,_=l-u;if(_-x<.2)return;let w=Math.max(1,Math.round((_-x)/.62)),S=(_-x)/w;for(let M of p)for(let A=0;A<w;A++){let E=x+S*A+.02,T=E+S-.04;M<0?(i.pad(o+h+.02,o+c-.04,f-.08,f+.05,E,T,I.cushion,I.cushion,.04),i.loft([o+h*.55,o+h+.14,E+.01,T-.01],[o+h*.4,o+h*.4+.06,E+.03,T-.03],f+.03,n*.93,I.cushion)):(i.pad(s-c+.04,s-h-.02,f-.08,f+.05,E,T,I.cushion,I.cushion,.04),i.loft([s-h-.14,s-h*.55,E+.01,T-.01],[s-h*.4-.06,s-h*.4,E+.03,T-.03],f+.03,n*.93,I.cushion))}}function sS(i,e,t,n){let r=-t/2,o=t/2,s=-e/2,a=e/2,l=Math.min(.32,n*.36);Wr(i,e,t,.08,.06,.03,I.wood,!0),i.box(s,a,.08,l,r+.06,o,I.wood,I.woodTop,me),i.pad(s+.03,a-.03,l,l+.2,r+.08,o-.03,I.white,I.whiteTop,.03),i.box(s,a,.08,n-.05,r,r+.07,I.wood,I.woodTop,me),i.box(s,a,n-.05,n,r,r+.09,I.wood,I.woodTop,Oe);let c=l+.2,h=r+(t-.1)*.36;i.pad(s+.01,a-.01,c-.1,c+.05,h,o-.01,I.cushion,I.fabricTop,.025,Oe),i.lyingCyl("x",0,h+.05,c-.02,c+.09,e-.02,.1,I.cushion,I.fabricTop,8);let u=e>1.2?2:1,f=(e-.2)/u;for(let d=0;d<u;d++){let p=s+.1+f*d,g=r+.12,b=Math.min(.42,t*.2),m=.1;i.loft([p+.03+m,p+f-.03-m,g+m*.5,g+b-m*.5],[p+.03,p+f-.03,g,g+b],c,c+.06,I.whiteTop),i.loft([p+.03,p+f-.03,g,g+b],[p+.03+m,p+f-.03-m,g+m*.5,g+b-m*.5],c+.06,c+.12,I.whiteTop,I.whiteTop,Oe)}}function aS(i,e,t,n){let r=Math.min(.46,n*.52);Wr(i,e,t,r-.04,.035,.02,I.wood,!0),i.box(-e/2,e/2,r-.04,r,-t/2,t/2,I.wood,I.woodTop,me),i.pad(-e/2+.02,e/2-.02,r,r+.04,-t/2+.05,t/2-.03,I.cushion,I.cushion,.015),i.loft([-e/2,e/2,-t/2+.02,-t/2+.07],[-e/2+.02,e/2-.02,-t/2,-t/2+.03],r,n,I.wood,I.woodTop,me)}function lS(i,e,t,n){Wr(i,e,t,n-.04,.06,.05,I.wood,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,I.wood,I.woodTop,rt),i.box(-e/2+.08,e/2-.08,n-.1,n-.04,-t/2+.08,t/2-.08,I.body)}function cS(i,e,t,n){let r=-e/2,o=e/2;i.box(r,o,n-.035,n,-t/2,t/2,I.wood,I.woodTop,me),i.box(r,r+.03,0,n-.035,-t/2+.03,t/2-.03,I.metal);let s=Math.min(.42,e*.32);i.box(o-s,o,0,n-.035,-t/2+.03,t/2-.02,I.body,I.bodyTop,me);let a=t/2-.02;for(let l of[n*.35,n*.66])i.seg(o-s,l,a,o,l,a,Oe);for(let l of[n*.2,n*.5,n*.82])i.seg(o-s/2-.07,l,a+.012,o-s/2+.07,l,a+.012,rt);i.box(-.3,.3,n+.08,n+.42,-t/2+.08,-t/2+.11,I.dark,I.dark,rt),i.box(-.03,.03,n,n+.1,-t/2+.09,-t/2+.13,I.metal)}function ur(i,e,t,n,r,o=null,s=!1){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,I.body,I.bodyTop,me),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,I.dark),ha(i,-e/2,e/2,.08,n,t/2-.02,r,o,s)}function uS(i,e,t,n){i.box(-e/2,-e/2+.025,0,n,-t/2,t/2,I.wood,I.woodTop,me),i.box(e/2-.025,e/2,0,n,-t/2,t/2,I.wood,I.woodTop,me),i.box(-e/2+.025,e/2-.025,0,n,-t/2,-t/2+.015,I.body);let o=Math.max(2,Math.round(n/.38));for(let s=0;s<=o;s++){let a=Math.min(n-.025,n/o*s);if(i.box(-e/2+.025,e/2-.025,a,a+.025,-t/2+.015,t/2,I.wood,I.woodTop,Oe),s<o){let l=-e/2+.025+.04,c=s*3;for(;l<e/2-.025-.12;){let h=.03+c*7%5*.008,u=n/o-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-t/2+.04,t/2-.05,c%3?I.fabric:I.cushion,I.fabricTop),l+=h+.006,c++}}}}function hS(i,e,t,n){let r=Math.max(1,Math.round(e/.6));ur(i,e,t-.02,n-.04,r,n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,I.whiteTop,I.whiteTop,me)}function fS(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,I.white,I.whiteTop,me);let r=n*.62;i.seg(-e/2,r,t/2,e/2,r,t/2,Oe);let o=e/2-.06;i.seg(o,r+.08,t/2+.015,o,r+.4,t/2+.015,rt),i.seg(o,r-.4,t/2+.015,o,r-.08,t/2+.015,rt)}var Xo=(i,e)=>Be(parseInt(i.slice(1),16),e).getHex();function cu(i){let e=Math.max(...new j(i).toArray());return Xo(i,e>.05?Math.max(1,.62/e):1)}var hr=!1;function Hg(i){hr=i}function fa(i=!1){return`${hr!==i?"light":"dark"}|${ad()}`}function dS(i){let e=null;for(let t of ca){let n=sd(i,t);if(!n)continue;e??={...ua},e[t]=hr?cu(n):Xo(n,.55);let r=`${t}Top`;r in e&&(e[r]=hr?cu(n):Xo(n,.75))}return e??ua}function qo(i,e,t){let n=I;I=dS(e.colors);let r=i.useMaterials(pS(I,e.materials));try{return t()}finally{I=n,i.useMaterials(r)}}function pS(i,e){let t=new Map,n=(r,o)=>{r!==void 0&&!t.has(r)&&t.set(r,o)};for(let r of ca){let o=_g(vg(e,r));n(i[r],o),n(i[`${r}Top`],o)}return r=>t.get(r)}function Wg(i,e){for(let t=e;t+2<i.length;t+=3){let n=Math.max(i[t],i[t+1],i[t+2]),r=Math.min(i[t],i[t+1],i[t+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let o=.62/n;i[t]*=o,i[t+1]*=o,i[t+2]*=o}}function mS(i,e,t,n,r,o){let s=hr?cu(o[0]):Xo(o[0],.55),a=hr?cu(o[1]):Xo(o[1],.8),l=Xo(o[1],1);if(r==="bag"){i.loft([-e*.42,e*.42,-t*.4,t*.4],[-e/2,e/2,-t/2,t/2],0,n*.55,s,s,Oe),i.loft([-e/2,e/2,-t/2,t/2],[-e*.12,e*.12,-t*.12,t*.12],n*.55,n*.9,a,a,Oe),i.cyl(0,0,Math.min(e,t)*.1,n*.9,n,l,l,8);return}if(r==="caddy"){i.loft([-e*.45,e*.45,-t*.45,t*.45],[-e/2,e/2,-t/2,t/2],0,n*.85,s,s,me),i.box(-e/2,e/2,n*.85,n*.95,-t/2,t/2,a,l,Oe),i.box(-e*.42,-e*.36,n*.95,n,-.01,.01,a),i.box(e*.36,e*.42,n*.95,n,-.01,.01,a),i.box(-e*.42,e*.42,n*.98,n,-.01,.01,a);return}if(r==="underground"){let u=Math.min(e,t)*.32;i.cyl(0,0,u,0,n*.9,s,s,16,me),i.cyl(0,0,u*1.08,n*.9,n,a,l,16,Oe),i.box(-u*.5,u*.5,n*.62,n*.8,u*.7,u*1.02,I.dark),i.box(-e/2,e/2,0,.02,-t/2,t/2,I.metal,I.metal,Oe);return}if(r==="bin1100"){for(let f of[-1,1])for(let d of[-1,1])i.cyl(f*(e/2-.12),d*(t/2-.12),.05,0,.14,I.dark,I.dark,8);i.loft([-e/2+.06,e/2-.06,-t/2+.06,t/2-.08],[-e/2,e/2,-t/2,t/2],.14,n-.1,s,s,me),i.loft([-e/2,e/2,-t/2,0],[-e/2,e/2,-t/2,0],n-.1,n,a,l,Oe),i.loft([-e/2,e/2,0,t/2],[-e/2,e/2,0,t/2-.05],n-.1,n-.03,a,l,Oe);return}let c=Math.min(.2,n*.19),h=-t/2;for(let u of[-1,1])i.lyingCyl("x",u*(e/2-.05),h+c/2+.01,0,c,.05,c,I.dark,I.metal,12);i.loft([-e*.42,e*.42,h+.07,t/2-.05],[-e/2+.01,e/2-.01,h+.05,t/2-.01],.03,n-.05,s,s,me),i.box(-e/2,e/2,n-.05,n,h+.03,t/2,a,l,Oe),i.box(-e*.42,e*.42,n-.1,n-.02,h,h+.04,a,l),r==="multi"&&(i.seg(-e/2,n+.002,(h+t/2)/2,e/2,n+.002,(h+t/2)/2,rt),i.seg(0,n*.25,t/2-.01,0,n-.06,t/2-.01,Oe))}function gS(i,e,t,n,r,o,s){let a=e/r;i.box(-e/2,e/2,0,n,-t/2,t/2,s?I.metal:I.white,s?I.metal:I.whiteTop,me);for(let l=0;l<r;l++){let c=-e/2+a*(l+.5);if(l&&i.seg(-e/2+a*l,n*.06,t/2+.001,-e/2+a*l,n*.94,t/2+.001,Oe),!o)i.box(c-a*.34,c+a*.34,n*.16,n*.84,t/2,t/2+.006,I.white,I.whiteTop,Oe),i.seg(c-a*.3,n*.5,t/2+.007,c+a*.3,n*.5,t/2+.007,Oe);else if(s)i.box(c-a*.4,c+a*.4,n*.12,n*.9,t/2,t/2+.018,I.metal,I.metal,Oe),i.seg(c-a*.36,n*.86,t/2+.019,c+a*.36,n*.86,t/2+.019,Oe);else{let h=Math.min(a,n)*.34;i.lyingCyl("z",c,t/2+.002,n/2-h,n/2+h,.004,h*2,I.dark,I.dark,14,Oe),i.seg(c-h*.45,n/2,t/2+.0045,c-h*.45+.004,n/2,t/2+.0045,me),i.seg(c+h*.45-.004,n/2,t/2+.0045,c+h*.45,n/2,t/2+.0045,me)}}}function bS(i,e,t,n,r){if(r){i.box(-e/2,e/2,0,n,-t/2,t/2,I.white,I.whiteTop,me);let s=Math.min(e,n)*.3;for(let a=0;a<20;a++){let l=a/20*Math.PI*2,c=(a+1)/20*Math.PI*2;i.seg(Math.cos(l)*s,n/2+Math.sin(l)*s,t/2+.002,Math.cos(c)*s,n/2+Math.sin(c)*s,t/2+.002,Oe)}return}let o=Math.min(e,t)/2;i.cyl(0,0,o,0,n,I.white,I.whiteTop,24,me),i.cyl(0,0,o*.5,n,n+.01,I.metal,I.metal,12)}function xS(i,e,t,n,r){if(r){i.pad(-e/2,e/2,0,n,-t/2,t/2,I.white,I.whiteTop,.05,me),i.box(-e*.18,e*.18,n*.8,n*.88,t/2,t/2+.006,I.dark);for(let s of[-e*.2,e*.2])i.cyl(s,0,.012,-.12,0,I.metal,I.metal,6);return}let o=Math.min(e,t)/2;i.cyl(0,0,o,.04,n-.05,I.white,I.whiteTop,20,me),i.cyl(0,0,o*.85,n-.05,n,I.white,I.whiteTop,20);for(let s=0;s<3;s++){let a=s/3*Math.PI*2;i.cyl(Math.cos(a)*o*.7,Math.sin(a)*o*.7,.03,0,.04,I.dark,I.dark,6)}i.box(-o*.3,o*.3,n*.55,n*.65,o-.01,o+.01,I.dark)}function yS(i,e,t,n,r){let o=I.metal,s=Be(I.metal,1.25).getHex(),a=Be(I.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,e*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,I.wood,I.woodTop,Oe),i.box(-e/2,e/2,n-c,n-c*.45,-t/2,t/2,o,s,me),i.lyingCyl("z",0,0,n-c*.9,n,t,e,o,s,14,me),i.box(e/2,e/2+.015,n-c*.4,n+.08,-t*.1,-t*.04,9051164),i.box(e/2,e/2+.015,n+.02,n+.08,-t*.04,t*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-e*.2,e*.2,0,n-l,-t*.2,t*.2,I.dark,I.dark,Oe),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,t*.9,.16,o,s,12,Oe),i.loft([-e/2,e/2,-t/2,t/2],[-e/2,e/2,-t/2,t/2-.05],n-l,n,o,s,me),i.box(-e*.32,e*.32,n-.1,n-.08,t/2-.05,t/2-.04,I.dark);return}if(r==="parcel"){i.box(-e/2,e/2,0,n,-t/2,t/2,o,s,me),i.box(-e/2+.04,e/2-.04,.08,n*.72,t/2,t/2+.012,a,s,Oe),i.box(-e*.3,e*.3,n*.82,n*.86,t/2,t/2+.01,I.dark);return}if(r==="bank"){i.box(-e/2,e/2,0,n,-t/2,t/2,o,s,me);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let h=-e/2+e/3*l+.015,u=n/2*c+.015;i.box(h,h+e/3-.03,u,u+n/2-.03,t/2,t/2+.01,a,s,Oe),i.box(h+.04,h+e/3-.07,u+n/2-.09,u+n/2-.07,t/2+.01,t/2+.014,I.dark)}return}i.box(-e/2,e/2,0,n*.8,-t/2,t/2,o,s,me),i.loft([-e/2,e/2,-t/2,t/2+.02],[-e/2,e/2,-t/2,-t/2+.02],n*.8,n,o,s,me),i.box(-e*.36,e*.36,n*.66,n*.7,t/2,t/2+.008,I.dark)}function vS(i,e,t,n){let r=t/2-Xg;i.box(-e/2,e/2,.02,n,-t/2,r,I.body,I.bodyTop,me),i.box(-e/2+.05,e/2-.05,0,.02,-t/2+.05,r-.05,I.dark);for(let o of[.35,.7,1.05,1.4])o>n-.15||(i.seg(-e/2+.03,o,r+.001,-.03,o,r+.001,Oe),i.seg(.03,o,r+.001,e/2-.03,o,r+.001,Oe))}var Xg=.06;function $g(i,e,t,n){qo(i,e,()=>_S(i,e,t,n))}function _S(i,e,t,n){let r=e.rotation*it,o=Math.cos(r),s=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(C,k,N)=>[e.x+C*o-N*s,k,e.z+C*s+N*o],c=(C,k,N,U,V)=>{i.paint(y.get(V)??-1),i.tri(C,k,N,V),i.tri(C,N,U,V),i.tri(C,N,k,V),i.tri(C,U,N,V)},h=(C,k,N,U)=>{let V=l(C[0],C[1],C[2]),H=l(k[0],k[1],k[2]),B=H[0]-V[0],z=H[1]-V[1],q=H[2]-V[2],X=Math.hypot(B,z,q)||1,ee=[B/X,z/X,q/X],W=Math.abs(ee[1])>.9?[1,0,0]:[0,1,0],Y=[ee[1]*W[2]-ee[2]*W[1],ee[2]*W[0]-ee[0]*W[2],ee[0]*W[1]-ee[1]*W[0]],ie=Math.hypot(Y[0],Y[1],Y[2])||1,re=[Y[0]/ie*N,Y[1]/ie*N,Y[2]/ie*N],te=[ee[1]*re[2]-ee[2]*re[1],ee[2]*re[0]-ee[0]*re[2],ee[0]*re[1]-ee[1]*re[0]],he=[[1,1],[-1,1],[-1,-1],[1,-1]];i.paint(y.get(U)??-1);let be=(ne,ce)=>[ne[0]+re[0]*he[ce][0]+te[0]*he[ce][1],ne[1]+re[1]*he[ce][0]+te[1]*he[ce][1],ne[2]+re[2]*he[ce][0]+te[2]*he[ce][1]];for(let ne=0;ne<4;ne++){let ce=(ne+1)%4;i.tri(be(V,ne),be(H,ne),be(H,ce),U),i.tri(be(V,ne),be(H,ce),be(V,ce),U)}},u=(C,k,N,U,V,H,B,z)=>{c(l(C,U,V),l(k,U,V),l(k,U,H),l(C,U,H),z),c(l(C,N,H),l(k,N,H),l(k,U,H),l(C,U,H),B),c(l(C,N,V),l(k,N,V),l(k,N,H),l(C,N,H),B),c(l(C,N,V),l(C,N,H),l(C,U,H),l(C,U,V),B),c(l(k,N,V),l(k,N,H),l(k,U,H),l(k,U,V),B)},f=new j(I.body),d=new j(I.bodyTop),p=new j(I.accent),g=I.fabric!==ua.fabric,b=new j(g?I.fabricTop:1929098),m=new j(g?I.fabric:995141),y=new Map([[f,I.body],[d,I.body],[p,I.accent],[b,I.fabric],[m,I.fabric]]),v=(C,k,N,U,V)=>{let H=(B,z,q)=>[B[0]+(z[0]-B[0])*q,B[1]+(z[1]-B[1])*q,B[2]+(z[2]-B[2])*q];for(let B=0;B<V;B++){let z=H(C,k,B/V),q=H(C,k,(B+1)/V),X=H(N,U,(B+1)/V),ee=H(N,U,B/V);c(l(z[0],z[1],z[2]),l(q[0],q[1],q[2]),l(X[0],X[1],X[2]),l(ee[0],ee[1],ee[2]),B%2?b:m)}},x=e.w/2,_=-e.d/2,w=Math.max(.12,Math.min(.3,e.h)),S=Math.max(4,Math.round(e.w/.3)),M=(e.awning_pitch??12)*Math.PI/180,A=(C,k)=>{e.awning_valance!==!1&&v([-x+.04,C,k+.01],[x-.04,C,k+.01],[-x+.04,C-.2,k+.01],[x-.04,C-.2,k+.01],S)},E=e.variant??"arm";if(E==="side"){let C=t,k=.05,N=0,U=-x+.08+a*(e.w-.16);u(-x,-x+.1,0,C+.05,N-.05,N+.05,f,d),u(x-.06,x,0,C+.05,N-.03,N+.03,f,d),a>.01&&v([-x+.1,C,N],[-x+.1,k,N],[U,C,N],[U,k,N],Math.max(4,Math.round((C-k)/.3))),h([U,k,N],[U,C,N],.02,p);return}if(E==="vertical"){let C=_,k=Math.min(e.d/2,_+w);u(-x,x,t,t+w,C,k,f,d);let N=(C+k)/2;for(let V of[-x+.02,x-.02])h([V,.02,N],[V,t,N],.02,p);let U=t-a*Math.max(0,t-.04);a>.01&&v([-x+.04,t,N],[x-.04,t,N],[-x+.04,U,N],[x-.04,U,N],S),h([-x+.03,U,N],[x-.03,U,N],.025,p);return}if(E==="pergola"){let C=e.d/2-.05,k=t+w,N=k-(C-_)*Math.tan(M);u(-x,x,t,k,_,_+w,f,d);for(let H of[-x+.05,x-.05])h([H,k,_+w],[H,N,C],.035,p),h([H,0,C],[H,N,C],.045,f);h([-x+.05,N,C],[x-.05,N,C],.035,p);let U=_+w+a*(C-_-w),V=k-(U-_)*Math.tan(M)+.04;a>.01&&v([-x+.08,k+.04,_+w],[x-.08,k+.04,_+w],[-x+.08,V,U],[x-.08,V,U],S),h([-x+.08,V,U],[x-.08,V,U],.025,p);return}let T=_,P=_+w;u(-x,x,t,t+w,T,P,f,d);let F=[P-.02,t+w*.35];if(E==="drop"){let C=Math.max(.3,e.d-w),k=[P,F[1]-C],N=a*(Math.PI/2+M),U=[k[0]+Math.sin(N)*C,k[1]+Math.cos(N)*C];for(let V of[-x+.08,x-.08])h([V,k[1],k[0]],[V,U[1],U[0]],.018,p);a>.01&&v([-x+.04,F[1],F[0]],[x-.04,F[1],F[0]],[-x+.04,U[1],U[0]],[x-.04,U[1],U[0]],S),h([-x+.02,U[1],U[0]],[x-.02,U[1],U[0]],.03,p),a>.05&&A(U[1],U[0]);return}let L=Math.max(0,e.d-w)*a,O=[F[0]+L,F[1]-L*Math.tan(M)];if(L>.01){v([-x+.04,F[1],F[0]],[x-.04,F[1],F[0]],[-x+.04,O[1],O[0]],[x-.04,O[1],O[0]],S);let C=Math.max(.3,(e.d-w)/2+.05);for(let k of[-1,1]){let N=k*(x-.12),U=[N,t+.02,P-.04],V=[N,O[1]-.02,O[0]],H=Math.hypot(V[2]-U[2],V[1]-U[1]),B=Math.sqrt(Math.max(0,C*C-(H/2)**2)),z=[N-k*Math.min(B,x-.15),(U[1]+V[1])/2,(U[2]+V[2])/2];h(U,z,.018,p),h(z,V,.018,p)}}h([-x+.02,O[1],O[0]],[x-.02,O[1],O[0]],.03,p),L>.05&&A(O[1],O[0])}function Yg(i,e,t,n,r){let o=i.p.length;qo(i,e,()=>MS(i,e,t,n,r)),e.mirror&&pd(i,o)}function MS(i,e,t,n,r){let o=e.rotation*it,s=Math.cos(o),a=Math.sin(o),l=e.mirror?-1:1,c=(x,_)=>[e.x+l*x*s-_*a,e.z+l*x*a+_*s],h=t+.05,u=t+e.h-.02,f=new j(.75,.1,.14),d=new j(I.dark),p=new j(I.accent),g=e.w/2-.006,b=(x,_,w)=>{i.paint(I.body);let S=w/m,M=new j(I.body!==ua.body?I.bodyTop:2043212).lerp(f,S),A=new j(I.body).lerp(f,S*.8),E=Math.cos(w),T=Math.sin(w),P=(O,C)=>c(x+_*(O*E-C*T),e.d/2+O*T+C*E),F=(O,C,k,N)=>{let[U,V,H,B]=O;i.tri([U[0],C,U[1]],[V[0],C,V[1]],[H[0],k,H[1]],N),i.tri([U[0],C,U[1]],[H[0],k,H[1]],[B[0],k,B[1]],N)},L=(O,C,k,N,U,V,H,B=H)=>{let z=[P(O,V),P(C,V),P(C,U),P(O,U)];F([z[0],z[1],z[1],z[0]],k,N,B),F([z[3],z[2],z[2],z[3]],k,N,H),F([z[0],z[3],z[3],z[0]],k,N,H),F([z[1],z[2],z[2],z[1]],k,N,H),F([z[0],z[1],z[2],z[3]],N,N,H),F([z[3],z[2],z[1],z[0]],k,k,H)};return L(0,g,h,u,-Xg,0,A,M),L(g-.05,g-.03,t+e.h*.45,t+e.h*.75,.005,.025,p),L},m=1.83;b(-e.w/2,1,n*m)(.12,.3,t+e.h*.5,t+e.h*.68,.001,.005,d),b(e.w/2,-1,r*m)(.06,g-.06,t+e.h*.52,t+e.h*.86,.001,.005,d)}function wS(i,e,t,n){ur(i,e,t-.02,n-.04,1,n-.24,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,I.dark,I.dark,me);for(let[r,o,s]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*e/.6,l=o*t/.62;i.cyl(a,l,s,n,n+.004,I.dark,1451583,12,rt)}}function SS(i,e,t,n){ur(i,e,t-.02,n-.04,Math.max(1,Math.round(e/.45)),n-.2);let r=Math.min(.5,e-.2);i.box(-e/2,-r/2,n-.04,n,-t/2,t/2,I.whiteTop,I.whiteTop,me),i.box(r/2,e/2,n-.04,n,-t/2,t/2,I.whiteTop,I.whiteTop,me),i.box(-r/2,r/2,n-.04,n,-t/2,-t/2+.1,I.whiteTop,I.whiteTop),i.box(-r/2,r/2,n-.04,n,t/2-.08,t/2,I.whiteTop,I.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-t/2+.1,t/2-.08,I.metal,I.metal,rt),i.cyl(0,-t/2+.05,.02,n,n+.28,I.metal,I.metal,8),i.box(-.015,.015,n+.24,n+.28,-t/2+.05,-t/2+.22,I.metal)}function TS(i,e,t,n){i.box(-e/2,e/2,0,n-.02,-t/2,t/2,I.white,I.whiteTop,me),i.box(-e/2,e/2,n-.02,n,-t/2,-t/2+.07,I.whiteTop),i.box(-e/2,e/2,n-.02,n,t/2-.07,t/2,I.whiteTop),i.box(-e/2,-e/2+.07,n-.02,n,-t/2+.07,t/2-.07,I.whiteTop),i.box(e/2-.07,e/2,n-.02,n,-t/2+.07,t/2-.07,I.whiteTop),i.box(-e/2+.07,e/2-.07,n-.03,n-.02,-t/2+.07,t/2-.07,I.glass,I.glass,rt),i.cyl(-e/2+.04,0,.02,n,n+.12,I.metal,I.metal,8)}function AS(i,e,t,n){i.box(-e/2,e/2,0,.05,-t/2,t/2,I.whiteTop,I.whiteTop,me),i.cyl(0,0,.04,.05,.052,I.metal,I.metal,8);for(let[r,o,s,a]of[[-e/2,t/2,e/2,t/2],[e/2,-t/2,e/2,t/2]])i.seg(r,.05,o,s,.05,a,rt),i.seg(r,n,o,s,n,a,rt),i.seg(s,.05,a,s,n,a,rt);i.cyl(-e/2+.06,-t/2+.06,.015,.05,n-.05,I.metal,I.metal,6),i.cyl(-e/2+.2,-t/2+.2,.1,n-.08,n-.06,I.metal,I.metal,12,rt)}function ES(i,e,t,n){let r=Math.min(.18,t*.3);i.box(-e/2,e/2,.45,n,-t/2,-t/2+r,I.white,I.whiteTop,me),i.box(-e*.3,e*.3,0,.36,-t/2+r-.02,t/2-.12,I.white,I.whiteTop),i.cyl(0,t/2-.26,Math.min(e/2,.19),.36,.41,I.white,I.whiteTop,12,me),i.box(-e/2+.02,e/2-.02,.41,.43,-t/2+r,-t/2+r+.05,I.whiteTop)}function RS(i,e,t,n){ur(i,e,t-.02,n-.12,e>.8?2:1,n-.3),i.box(-e/2,e/2,n-.12,n,-t/2,t/2,I.white,I.whiteTop,me),i.box(-e/2+.07,e/2-.07,n-.005,n,-t/2+.12,t/2-.06,I.glass,I.glass,rt),i.cyl(0,-t/2+.06,.018,n,n+.2,I.metal,I.metal,8),i.box(-e/2+.04,e/2-.04,n+.35,n+1,-t/2,-t/2+.02,I.glass,I.glass,rt)}function PS(i,e,t,n){ur(i,e,t,n,Math.max(2,Math.round(e/.6)),n*.55,!0);let r=Math.min(e*.8,1.45),o=r*.56;i.box(-.1,.1,n,n+.02,-t/2+.08,-t/2+.24,I.metal),i.box(-.02,.02,n+.02,n+.12,-t/2+.14,-t/2+.18,I.metal),i.box(-r/2,r/2,n+.1,n+.1+o,-t/2+.12,-t/2+.16,I.dark,I.dark,rt)}function CS(i,e,t,n){let r=Math.min(e,t)/2,o=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,o,I.pot,I.pot,10,me),i.cyl(0,0,r*.08,o,n*.55,I.wood,I.wood,6);let s=4;for(let a=0;a<s;a++){let l=a/(s-1),c=r*(.95-.55*l),h=o+(n-o)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-o)*.16,I.plant,I.plantTop,8,a===s-1?Oe:null)}}function IS(i,e,t){i.box(-e/2,e/2,0,.012,-t/2,t/2,I.fabric,I.fabricTop);let n=Math.min(.12,Math.min(e,t)*.08);for(let[r,o,s,a]of[[-e/2+n,-t/2+n,e/2-n,-t/2+n],[e/2-n,-t/2+n,e/2-n,t/2-n],[e/2-n,t/2-n,-e/2+n,t/2-n],[-e/2+n,t/2-n,-e/2+n,-t/2+n]])i.seg(r,.014,o,s,.014,a,me)}var Bg=.045;function LS(i,e,t,n,r=!1,o=null,s=0,a=0){let{n:l,flat:c,winders:h,skip:u}=B0({w:e,d:t,h:n,stair_turn:o,stair_landing:s}),f=n/l,d=t/2-(u?e:0),p=Math.max(0,Math.min(a,t-.2*(l-u))),g=(d+t/2-p)/(l-u),b=w=>r?Math.max(0,w-Bg):0;if(c){let w=f*c;i.box(-e/2,e/2,0,w,d,t/2,I.wood,I.woodTop,me)}if(h){let w=o==="right"?-1:1,S=[-w*(e/2),d],M=A=>A<=e?[-w*(e/2)+w*A,t/2]:[w*(e/2),t/2-(A-e)];for(let A=0;A<h;A++){let E=2*e*A/h,T=2*e*(A+1)/h,P=[S,M(E)];E<e&&T>e&&P.push(M(e)),P.push(M(T));let F=f*(A+1);i.prism(P,b(F),F,I.wood,I.woodTop,me)}}for(let w=u;w<l;w++){let S=d-g*(w-u),M=w===l-1&&p>0?-t/2:S-g,A=f*(w+1);i.box(-e/2,e/2,b(A),A,M,S,I.wood,I.woodTop),i.seg(-e/2,A,S,e/2,A,S,me)}u||i.seg(-e/2,0,t/2,-e/2,f,t/2,me);let m=f*(u+1);for(let w of[-e/2,e/2])i.seg(w,m,d,w,n,-t/2+g,Oe);if(r)for(let w=u;w<l;w++){let S=d-g*(w-u),M=f*(w+1);for(let A of[-e/2,e/2-.035])i.box(A,A+.035,Math.max(0,M-.28),M-Bg,S-g,S,I.wood,I.woodTop)}let y=.9,v=e/2-.03,x=Math.max(u+1,l-4),_=w=>d-g*(w-u+.5);i.seg(v,f*(u+1)+y,_(u),v,f*x+y,_(x-1),rt);for(let w=u;w<x;w+=3){let S=f*(w+1);i.seg(v,S,_(w),v,S+y,_(w),Oe)}}var FS=72;function kS(i,e,t,n){let r=-t/2,o=t/2,s=.05;i.box(-e/2,e/2,n-.03,n,r,r+s,I.white,I.whiteTop,me),i.box(-e/2,e/2,n-.03,n,o-s,o,I.white,I.whiteTop,me),i.box(-e/2,-e/2+s,n-.03,n,r+s,o-s,I.white,I.whiteTop,me),i.box(e/2-s,e/2,n-.03,n,r+s,o-s,I.white,I.whiteTop,me);let a=Math.min(t-2*s,n-.3);i.box(-e/2+s,e/2-s,n-a,n-.03,r,r+.035,I.white,I.whiteTop,me);let l=Math.max(.12,e/2-.1),c=r+.06,h=Math.min(o,c+n/Math.tan(FS*it)),u=.03;for(let d of[-l,l-.04])i.loft([d,d+.04,h-u,h],[d,d+.04,c,c+u],0,n-.03,I.metal,I.metal,me);let f=Math.max(2,Math.round(n/.25));for(let d=1;d<f;d++){let p=n*d/f,g=h+(c-h)*d/f;i.box(-l,l,p-.015,p+.015,g-.06,g+.02,I.metal,I.metal)}}function DS(i,e,t,n){let{k:r,steps1:o,steps2:s,fw:a,landing:l,run:c,rise:h}=z0(e,t,n),u=-e/2,f=-e/2+a,d=e/2-a,p=e/2,g=-t/2+l;for(let S=0;S<o;S++){let M=t/2-c*S,A=h*(S+1);i.box(u,f,0,A,M-c,M,I.wood,I.woodTop),i.seg(u,A,M,f,A,M,me)}i.seg(u,0,t/2,u,h,t/2,me);let b=h*r,m=.2;i.box(u,f,0,b,-t/2,g,I.wood,I.woodTop),i.box(f,p,Math.max(0,b-m),b,-t/2,g,I.wood,I.woodTop),i.seg(u,b,g,f,b,g,me);for(let S=0;S<s;S++){let M=g+c*S,A=h*(r+1+S);i.box(d,p,Math.max(0,A-h-m),A,M,M+c,I.wood,I.woodTop),i.seg(d,A,M,p,A,M,me)}i.seg(u,h,t/2,u,b,g,Oe),i.seg(p,b,g,p,n,g+c*(s-1),Oe);let y=.9,v=f-.03,x=d+.03,_=g-.03,w=Math.max(1,s-4);i.seg(v,h+y,t/2-c/2,v,b+y,_,rt),i.seg(v,b+y,_,x,b+y,_,rt),i.seg(x,b+y,_,x,h*(r+w)+y,g+c*(w-.5),rt);for(let S=0;S<o;S+=3){let M=t/2-c*(S+.5);i.seg(v,h*(S+1),M,v,h*(S+1)+y,M,Oe)}for(let S of[v,x])i.seg(S,b,_,S,b+y,_,Oe);for(let S=2;S<w;S+=3){let M=g+c*(S+.5);i.seg(x,h*(r+1+S),M,x,h*(r+1+S)+y,M,Oe)}}function OS(i,e,t,n){Wr(i,e,t,.12,.03,.04,I.metal),i.box(-e/2,e/2,.12,n,-t/2,t/2-.02,I.wood,I.woodTop,me),ha(i,-e/2,e/2,.12,n,t/2-.02,Math.max(2,Math.round(e/.45)),n-.1,!0)}function NS(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2-.02,I.wood,I.woodTop,me),i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.06,I.dark);let r=Math.max(3,Math.round((n-.06)/.22)),o=t/2-.02;for(let s=1;s<r;s++){let a=.06+(n-.06)/r*s;i.seg(-e/2,a,o,e/2,a,o,Oe)}for(let s=0;s<r;s++){let a=.06+(n-.06)/r*(s+.5);i.seg(-.08,a,o+.012,.08,a,o+.012,rt)}}function US(i,e,t,n){i.box(-e/2,e/2,0,.45,-t/2,t/2,I.wood,I.woodTop,me),ha(i,-e/2,e/2,.02,.45,t/2,Math.max(2,Math.round(e/.5)),.38,!0),i.box(-e/2,e/2,.45,n,-t/2,-t/2+.03,I.body,I.bodyTop,me),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,I.wood,I.woodTop,me);let r=Math.max(2,Math.round(e/.25));for(let o=0;o<r;o++){let s=-e/2+e/r*(o+.5);i.box(s-.015,s+.015,n-.32,n-.28,-t/2+.03,-t/2+.1,I.metal,I.metal)}}function zg(i,e,t,n,r){let s=Math.min(.5,r?t*.4:t),a=.08;i.box(-e/2,e/2,0,.45-.06,-t/2,-t/2+s,I.wood,I.woodTop,me),i.box(-e/2,e/2,0,n,-t/2,-t/2+a,I.wood,I.woodTop,me),i.box(-e/2+(r?s:.02),e/2-.02,.45-.06,.45+.02,-t/2+a,-t/2+s,I.cushion,I.cushion,Oe),r&&(i.box(-e/2,-e/2+s,0,.45-.06,-t/2+s,t/2,I.wood,I.woodTop,me),i.box(-e/2,-e/2+a,0,n,-t/2+a,t/2,I.wood,I.woodTop,me),i.box(-e/2+a,-e/2+s,.45-.06,.45+.02,-t/2+a,t/2-.02,I.cushion,I.cushion,Oe))}function BS(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.8,0,.02,I.metal,I.metal,12),i.cyl(0,0,.025,.02,n-.05,I.metal,I.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,I.metal,I.metal,12,Oe),i.cyl(0,0,r,n-.05,n,I.cushion,I.fabricTop,14,me)}function zS(i,e,t,n){let r=Math.min(e,t)/2;i.box(-r,r,.04,.08,-.03,.03,I.metal),i.box(-.03,.03,.04,.08,-r,r,I.metal),i.cyl(0,0,.06,.02,.1,I.dark,I.dark,8),i.cyl(0,0,.025,.1,.44,I.metal,I.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,I.fabric,I.cushion,me),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,I.fabric,I.fabricTop,me),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,I.metal)}function VS(i,e,t,n){Wr(i,e,t,.08,.04,.05,I.wood),i.box(-e/2,e/2,.08,n,-t/2,t/2,I.fabric,I.cushion,me)}function GS(i,e,t,n){i.box(-e/2,e/2,1.45,1.45+n,-t/2,t/2-.02,I.body,I.bodyTop,me),ha(i,-e/2,e/2,1.45,1.45+n,t/2-.02,Math.max(1,Math.round(e/.5)),1.45+.08)}function HS(i,e,t,n){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,I.body,I.bodyTop,me),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,I.dark);let r=t/2-.02;i.box(-e/2+.03,e/2-.03,.85,1.45,r,r+.01,I.dark,I.dark,rt),i.seg(-e/2+.08,1.4,r+.02,e/2-.08,1.4,r+.02,rt);for(let o of[.85,1.45])i.seg(-e/2,o,r,e/2,o,r,Oe);i.seg(e/2-.06,.5,r+.012,e/2-.06,.7,r+.012,rt),i.seg(e/2-.06,1.6,r+.012,e/2-.06,1.8,r+.012,rt)}function WS(i,e,t,n){let r=t-.3;i.box(-e/2+.05,e/2-.05,.08,n-.04,-t/2+.02,-t/2+r,I.body,I.bodyTop,me),i.box(-e/2+.07,e/2-.07,0,.08,-t/2+.04,-t/2+r-.04,I.dark),ha(i,-e/2+.05,e/2-.05,.08,n-.04,-t/2+r,Math.max(2,Math.round(e/.6)),n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,I.whiteTop,I.whiteTop,me)}function XS(i,e,t,n){i.box(-e/2,e/2,.02,n-.04,-t/2,t/2-.02,I.body,I.bodyTop,me),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,I.dark),i.seg(-e/2+.08,n-.12,t/2-.008,e/2-.08,n-.12,t/2-.008,rt),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,I.whiteTop,I.whiteTop,me)}function Vg(i,e,t,n,r){i.box(-e/2,e/2,0,n,-t/2,t/2-.02,I.white,I.whiteTop,me);let o=t/2-.012;i.seg(-e/2,n-.14,o,e/2,n-.14,o,Oe),i.seg(e/2-.16,n-.07,o,e/2-.08,n-.07,o,rt);let s=(n-.14)/2+.04,a=Math.min(e*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,s+Math.sin(h)*a,o,Math.cos(u)*a,s+Math.sin(u)*a,o,rt),r||i.seg(Math.cos(h)*a*.72,s+Math.sin(h)*a*.72,o,Math.cos(u)*a*.72,s+Math.sin(u)*a*.72,o,Oe)}}function $S(i,e,t,n){for(let s of[-1,1])for(let a of[-1,1])i.box(s*(e/2)-(s>0?.05:0),s*(e/2)+(s<0?.05:0),0,n,a*(t/2)-(a>0?.05:0),a*(t/2)+(a<0?.05:0),I.wood,I.woodTop);for(let s of[.25,n-.55])i.box(-e/2,e/2,s,s+.08,-t/2,t/2,I.wood,I.woodTop,me),i.box(-e/2+.04,e/2-.04,s+.08,s+.24,-t/2+.05,t/2-.05,I.white,I.whiteTop,Oe),i.box(-e/2+.05,e/2-.05,s+.24,s+.33,-t/2+.08,-t/2+.4,I.whiteTop,I.whiteTop);i.box(-e/2,e/2,n-.2,n-.15,t/2-.05,t/2,I.wood,I.woodTop);let o=e/2-.35;for(let s of[o-.18,o+.18])i.seg(s,0,t/2+.02,s,n-.15,t/2+.02,me);for(let s=.3;s<n-.2;s+=.28)i.seg(o-.18,s,t/2+.02,o+.18,s,t/2+.02,Oe)}function YS(i,e,t,n){let r=Math.min(e,t)/2;i.cyl(0,0,r*.4,0,.03,I.metal,I.metal,12),i.cyl(0,0,.05,.03,n-.04,I.wood,I.wood,8),i.cyl(0,0,r,n-.04,n,I.wood,I.woodTop,20,me)}function qS(i,e,t,n){Wr(i,e,t,n-.03,.04,.03,I.wood),i.box(-e/2,e/2,n-.03,n,-t/2,t/2,I.wood,I.woodTop,me),i.box(-e/2+.05,e/2-.05,.1,.13,-t/2+.05,t/2-.05,I.body,I.bodyTop,Oe)}function KS(i,e,t,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-t/2,-t/2+.03,I.metal),i.box(-e/2,e/2,r,r+n,-t/2+.03,t/2,I.dark,I.dark,rt)}function ZS(i,e,t,n){let r=fd;i.box(-e/2+.05,-e/2+.08,0,r,-t/2,-t/2+.03,I.metal),i.box(e/2-.08,e/2-.05,0,r,-t/2,-t/2+.03,I.metal),i.box(-e/2,e/2,r,r+n,-t/2+.02,t/2,I.white,I.whiteTop,me);let o=Math.max(3,Math.round(e/.1));for(let s=1;s<o;s++){let a=-e/2+e/o*s;i.seg(a,r+.03,t/2+.002,a,r+n-.03,t/2+.002,Oe)}}function jS(i,e,t,n){let r=dd;i.box(-e/2,e/2,r+.07,r+n,-t/2,t/2,I.white,I.whiteTop,me),i.box(-e/2,e/2,r,r+.07,-t/2,t/2-.05,I.white,I.white,me),i.box(-e/2+.04,e/2-.04,r+.012,r+.06,t/2-.05,t/2-.02,I.dark),i.seg(-e/2+.03,r+n*.55,t/2+.002,e/2-.03,r+n*.55,t/2+.002,Oe),i.seg(e/2-.14,r+n*.75,t/2+.002,e/2-.07,r+n*.75,t/2+.002,rt)}function Yo(i,e,t,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(e+Math.cos(a)*n,t+Math.sin(a)*n,r,e+Math.cos(l)*n,t+Math.sin(l)*n,r,rt)}}function JS(i,e,t,n,r){let s=t/2;if(r==="slim"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,I.dark,I.body,me),i.seg(-e*.25,1.1+n*.15,s+.004,-e*.25,1.1+n*.85,s+.004,rt),i.box(-e*.1,e*.3,1.1+n*.7,1.1+n*.85,s,s+.005,I.dark);return}if(r==="hybrid"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,I.white,I.whiteTop,me),Yo(i,0,1.1+n*.66,Math.min(e,n)*.22,s+.004),i.seg(-e*.08,1.1+n*.66,s+.005,e*.08,1.1+n*.66,s+.005,rt);for(let a of[-1,1])Yo(i,a*e*.22,1.1+n*.2,Math.min(e,n)*.1,-t/2-.002,12);return}i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,I.white,I.whiteTop,me),i.box(-e*.28,e*.28,1.1+n*.58,1.1+n*.82,t/2,t/2+.006,I.dark),i.seg(-e*.3,1.1+n*.45,t/2+.004,e*.3,1.1+n*.45,t/2+.004,rt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*e/2+a*.002,1.1+n*l/6,-t/2+.03,a*e/2+a*.002,1.1+n*l/6,t/2-.03,Oe)}function QS(i,e,t,n){let r=Math.min(t,n)*.32;i.box(-e/2,e/2,0,.03,-t/2,t/2,I.dark),i.box(-e/2,e*.1,.05,.05+r*2,-r,r,I.metal,I.metal,me);for(let s of[-e*.4,-e*.25,-e*.1])i.seg(s,.05+r*2+.003,-r,s,.05+r*2+.003,r,Oe);i.cyl(e*.28,0,Math.min(e*.2,t*.45),.03,n*.82,I.dark,I.body,14,me),i.cyl(e*.28,0,Math.min(e*.2,t*.45)*.9,n*.82,n,I.glass,I.glass,14);let o=Math.min(e*.2,t*.45)*.95;for(let s=0;s<16;s++){let a=s/16*Math.PI*2,l=(s+1)/16*Math.PI*2;i.seg(e*.28+Math.cos(a)*o,n*.83,Math.sin(a)*o,e*.28+Math.cos(l)*o,n*.83,Math.sin(l)*o,rt)}}function eT(i,e,t,n,r){let o=Math.min(e,t)/2;if(i.cyl(0,0,o*.95,0,n*.08,I.dark,I.dark,16),i.cyl(0,0,o,n*.08,n*.78,I.dark,I.body,18,me),i.cyl(0,0,o*.75,n*.78,n*.84,I.dark,I.body,16),r==="side6"){let a=o*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,I.dark,I.metal,me),Yo(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,I.dark,I.body);return}i.cyl(0,0,o*.45,n*.84,n*.95,I.dark,I.metal,16,me);let s=o*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*s,n*.955,Math.sin(l)*s,Math.cos(c)*s,n*.955,Math.sin(c)*s,rt)}i.box(-.02,.02,n*.95,n,-o*.35,o*.35,I.dark,I.body)}function tT(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2,I.white,I.whiteTop,me);for(let a of[-e*.4,e*.4])i.box(a-.03,a+.03,0,.06,-t/2+.02,t/2-.02,I.dark);let r=Math.min(n*.38,e*.3),o=-e*.15,s=n*.53;Yo(i,o,s,r,t/2+.004,24),Yo(i,o,s,r*.55,t/2+.004,16),i.seg(o-r,s,t/2+.005,o+r,s,t/2+.005,Oe),i.seg(o,s-r,t/2+.005,o,s+r,t/2+.005,Oe),i.box(e*.22,e*.42,n*.62,n*.8,t/2,t/2+.006,I.dark),i.seg(e*.25,n*.71,t/2+.008,e*.39,n*.71,t/2+.008,rt);for(let a=1;a<8;a++)i.seg(e/2+.002,n*(.1+a*.1),-t/2+.03,e/2+.002,n*(.1+a*.1),t/2-.03,Oe)}function nT(i,e,t,n){i.box(-e/2,e/2,.9,.9+n*.45,-t/2,t/2,I.white,I.whiteTop,me);for(let o of[-1,1])Yo(i,o*e*.22,.9+n*.22,Math.min(e,n)*.09,t/2+.004,12);i.seg(-e*.35,.9+n*.4,t/2+.004,e*.35,.9+n*.4,t/2+.004,rt);for(let o of[-1,1])i.box(o*e*.25-e*.18,o*e*.25+e*.18,0,n*.5,-t/2,t/2,I.white,I.glass,Oe)}function iT(i,e,t,n){let r=O0-n*.4;i.box(-e/2,e/2,r+n*.25,r+n*.6,-t*.25,t*.25,I.metal,I.metal,me),i.box(-e*.12,e*.12,r+n*.6,r+n*.8,-t*.12,t*.12,I.dark),i.box(-e*.1,e*.45,r+n*.8,r+n,-t*.15,t*.15,I.accent,I.accent)}function rT(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,I.dark,I.body,me),i.box(-e/2-.01,e/2+.01,n,n+.03,-t/2-.01,t/2+.01,I.dark,I.body),i.seg(-e/2,n+.032,t/2+.01,e/2,n+.032,t/2+.01,rt),i.seg(-e*.3,n*.55,t/2+.003,e*.3,n*.55,t/2+.003,Oe)}function oT(i,e,t,n){i.box(-e/2,e/2,1,1+n,-t/2,t/2,I.dark,I.body,me);let o=Math.min(e,n)*.28,s=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*o,s+Math.sin(c)*o,t/2+.003,Math.cos(h)*o,s+Math.sin(h)*o,t/2+.003,rt)}i.box(-.015,.015,1-.35,1,t/2-.03,t/2,I.dark),i.box(-.06,.06,1-.42,1-.35,t/2-.05,t/2,I.dark,I.body)}function sT(i,e,t,n){i.box(-e/2,e/2,.4,.4+n,-t/2,t/2,I.white,I.whiteTop,me),i.seg(-e/2+.025,.4+.025,t/2+.003,-e/2+.025,.4+n-.025,t/2+.003,Oe),i.seg(-e/2+.025,.4+n-.025,t/2+.003,e/2-.025,.4+n-.025,t/2+.003,Oe),i.box(e/2-.06,e/2-.035,.4+n*.5-.05,.4+n*.5+.05,t/2,t/2+.012,I.dark),i.box(-e*.3,e*.3,.4+n*.6,.4+n*.8,t/2,t/2+.005,I.dark),i.seg(-e*.22,.4+n*.7,t/2+.008,e*.22,.4+n*.7,t/2+.008,rt)}function aT(i,e,t,n,r){if(r==="wall"){i.box(-e/2,e/2,.5,.5+n,-t/2,t/2,I.white,I.whiteTop,me),i.seg(-e*.3,.5+n*.9,t/2+.004,e*.3,.5+n*.9,t/2+.004,rt),i.seg(-e*.3,.5+n*.08,t/2+.003,e*.3,.5+n*.08,t/2+.003,Oe);return}if(r==="cube"){i.box(-e/2+.01,e/2-.01,0,.03,-t/2+.01,t/2-.01,I.dark),i.box(-e/2,e/2,.03,n,-t/2,t/2,I.dark,I.body,me),i.seg(-e*.35,n*.85,t/2+.004,e*.35,n*.85,t/2+.004,rt),i.box(-e*.15,e*.15,n,n+.025,-.012,.012,I.dark);return}i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.02,I.dark);let o=Math.max(2,Math.round((n-.06)/.3)),s=(n-.06)/o;for(let a=0;a<o;a++)i.box(-e/2,e/2,.06+a*s+.004,.06+(a+1)*s,-t/2,t/2,I.white,I.whiteTop,me);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-e*.04,l,t/2+.003,e*.04,l,t/2+.003,rt)}}var fd=.12,dd=2.05;function qg(i,e,t){let n=Math.min(.04,.08*Math.min(i,e)),r=Math.min(i-n,(e-n)*t);return{w:r,h:r/t}}function md(i,e){let t=lT(i,e);return t&&i.mirror?{...t,x0:-t.x1,x1:-t.x0}:t}function lT(i,e){let t=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),o=A0(i.type);if(o){let l=e?Zt(e,i):0,c=(o.x-o.w/2)*t,h=(o.x+o.w/2)*t,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+o.y*r+u,y1:l+(o.y+o.h)*r-u,z:(o.z+o.d/2)*n}}let s=e&&i.type!=="fridge_smart"?Zt(e,i)-Dr(i):0,a=cT(i,t,n,r,e);return a?{...a,y0:a.y0+s,y1:a.y1+s}:null}function cT(i,e,t,n,r){if(i.type==="pool_pump"){let o=Math.min(t,n)*.32;return{x0:-e/2+.03,x1:e*.08,y0:.07,y1:.03+o*2,z:o+.004}}if(i.type==="pool_heat_pump")return{x0:-e/2+.05,x1:e*.15,y0:n*.15,y1:n*.9,z:t/2+.003};if(i.type==="pool_filter"){let o=Math.min(e,t)/2;return{x0:-o*.4,x1:o*.4,y0:n*.85,y1:n*.94,z:o*.45+.004}}if(i.type==="pool_dosing")return{x0:-e*.4,x1:e*.4,y0:.9+n*.05,y1:.9+n*.4,z:t/2+.003};if(i.type==="tv_board"){let o=Math.min(e*.8,1.45),s=o*.56;return{x0:-o/2+.02,x1:o/2-.02,y0:n+.12,y1:n+.08+s,z:-t/2+.165}}if(i.type==="tv_wall"){let o=1.3-n/2;return{x0:-e/2+.02,x1:e/2-.02,y0:o+.02,y1:o+n-.02,z:t/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-t/2+.115};if(i.type==="fridge_smart"){let o=r?Zt(r,i):0;return{x0:.06,x1:e/2-.06,y0:o+n*.52+.01,y1:o+n*.86-.01,z:t/2+.006}}if(i.type==="radiator")return{x0:-e/2+.02,x1:e/2-.02,y0:fd+.02,y1:fd+n-.02,z:t/2+.004};if(i.type==="ac_unit")return{x0:-e/2+.05,x1:e/2-.05,y0:dd+.015,y1:dd+.06,z:t/2-.015};if(i.type==="washer"||i.type==="dryer"){let o=(n-.14)/2+.04,s=Math.min(e*.36,(n-.2)*.42)*.8;return{x0:-s,x1:s,y0:o-s,y1:o+s,z:t/2-.004}}return i.type==="dishwasher"?{x0:-e/2+.06,x1:e/2-.06,y0:n-.16,y1:n-.08,z:t/2-.004}:null}function uT(i){if(i.type==="table_round"||i.type==="plant")return!0;let e=ut(i.type);if(!e?.parts.length)return!1;let t=e.parts.reduce((r,o)=>o.w*o.d>r.w*r.d?o:r,e.parts[0]);return(t.shape==="cyl"&&(t.axis??"y")==="y"||t.shape==="sphere"||t.shape==="lathe")&&t.w>=.85&&t.d>=.85}function hT(i,e,t,n,r,o=!1,s=0){let a=Math.min(.14,Math.max(.06,Math.min(t,n)*.15)),l=new j(1-r,1-r,1-r),c=new j(1,1,1),h=s+.003;if(o){let g=x=>[x[0],h,x[1]],m=(x,_,w)=>e(Math.cos(x/24*2*Math.PI)*_,Math.sin(x/24*2*Math.PI)*w),y=i.p.length,v=g(e(0,0));for(let x=0;x<24;x++){let _=g(m(x,t/2,n/2)),w=g(m(x+1,t/2,n/2)),S=g(m(x,t/2+a,n/2+a)),M=g(m(x+1,t/2+a,n/2+a));i.tri(v,_,w,l),i.tri(_,S,M,l,c,c),i.tri(_,M,w,l,c,l)}hd(e)&&pd(i,y);return}let u=[e(-t/2,-n/2),e(t/2,-n/2),e(t/2,n/2),e(-t/2,n/2)],f=[e(-t/2-a,-n/2-a),e(t/2+a,-n/2-a),e(t/2+a,n/2+a),e(-t/2-a,n/2+a)],d=g=>[g[0],h,g[1]],p=i.p.length;i.tri(d(u[0]),d(u[1]),d(u[2]),l),i.tri(d(u[0]),d(u[2]),d(u[3]),l);for(let g=0;g<4;g++){let b=(g+1)%4;i.tri(d(u[g]),d(f[g]),d(f[b]),l,c,c),i.tri(d(u[g]),d(f[b]),d(u[b]),l,c,l)}hd(e)&&pd(i,p)}function Ko(i,e,t,n,r=0,o=!1,s=!0){qo(i,n,()=>fT(i,e,t,n,r,o,s))}function pd(i,e){let t=(n,r,o)=>{if(n)for(let s=0;s<o;s++){let a=r+o+s,l=r+2*o+s,c=n[a];n[a]=n[l],n[l]=c}};for(let n=e;n<i.p.length;n+=9){let r=n/9;t(i.p,n,3),t(i.c,n,3),t(i.f,r*3,1),t(i.uv,r*6,2),t(i.tile,r*6,2)}}function fT(i,e,t,n,r,o=!1,s=!0){let a=ut(n.type)?0:r-Dr(n);if(ut(n.type)||Math.abs(a)<.001)return Gg(i,e,t,n,r,o,s);let l=i.p.length,c=e.p.length,h=t.p.length;Gg(i,e,r<.05?t:new Qe,n,0);for(let u=l+1;u<i.p.length;u+=3)i.p[u]+=a;for(let u=c+1;u<e.p.length;u+=3)e.p[u]+=a;if(r<0)for(let u=h+1;u<t.p.length;u+=3)t.p[u]+=a}function Gg(i,e,t,n,r,o=!1,s=!0){let a=n.rotation*it,l=Math.cos(a),c=Math.sin(a),h=n.mirror?-1:1,u=(b,m)=>[n.x+h*b*l-m*c,n.z+h*b*c+m*l],f=new yi(i,e,u),d=Math.max(.05,n.w),p=Math.max(.05,n.d),g=Math.max(.005,n.h);switch(n.type){case"sofa":Ng(f,d,p,g,Math.max(1,Math.round((d-.4)/.62)));break;case"armchair":Ng(f,d,p,g,1);break;case"sofa_l":Ug(f,d,p,g,!1);break;case"sofa_u":Ug(f,d,p,g,!0);break;case"bed":sS(f,d,p,g);break;case"chair":aS(f,d,p,g);break;case"table":lS(f,d,p,g);break;case"desk":cS(f,d,p,g);break;case"nightstand":ur(f,d,p,g,1,g*.72,!0),f.seg(-d/2,g*.5,p/2-.02,d/2,g*.5,p/2-.02,Oe);break;case"wardrobe":ur(f,d,p,g,Math.max(2,Math.round(d/.5)),g*.5);break;case"shelf":uS(f,d,p,g);break;case"kitchen":hS(f,d,p,g);break;case"fridge":fS(f,d,p,g);break;case"fridge_smart":vS(f,d,p,g);break;case"waste_bin":{let b=i.c.length;mS(f,d,p,g,wg(n),Ag(n,ad())),hr&&Wg(i.c,b);break}case"mailbox":{let b=i.p.length,m=e.p.length;yS(f,d,p,g,Sg(n));let y=Dr(n);for(let v=b+1;v<i.p.length;v+=3)i.p[v]+=y;for(let v=m+1;v<e.p.length;v+=3)e.p[v]+=y;if(y>0)return;break}case"wifi_ap":bS(f,d,p,g,n.variant==="wall");return;case"water_heater":if(xS(f,d,p,g,n.variant==="wall"),n.variant==="wall")return;break;case"wall_switch":case"wall_socket":{let b=i.p.length,m=e.p.length;gS(f,d,p,g,G0(n).length,n.type==="wall_socket",n.variant==="outdoor");let y=Dr(n);for(let v=b+1;v<i.p.length;v+=3)i.p[v]+=y;for(let v=m+1;v<e.p.length;v+=3)e.p[v]+=y;return}case"awning":return;case"stove":wS(f,d,p,g);break;case"sink":SS(f,d,p,g);break;case"bathtub":TS(f,d,p,g);break;case"shower":AS(f,d,p,g);break;case"wc":ES(f,d,p,g);break;case"washbasin":RS(f,d,p,g);break;case"tv_board":PS(f,d,p,g);break;case"plant":CS(f,d,p,g);break;case"rug":IS(f,d,p);return;case"stairs":LS(f,d,p,g,!!n.stair_open,n.stair_turn??null,n.stair_landing??0,n.stair_top??0);break;case"stairs_u":DS(f,d,p,g);break;case"stairwell":return;case"loft_ladder":kS(f,d,p,g);break;case"sideboard":OS(f,d,p,g);break;case"dresser":NS(f,d,p,g);break;case"tall_cabinet":ur(f,d,p,g,1,g*.5);break;case"coat_rack":US(f,d,p,g);break;case"bench":zg(f,d,p,g,!1);break;case"corner_bench":zg(f,d,p,g,!0);break;case"bar_stool":BS(f,d,p,g);break;case"office_chair":zS(f,d,p,g);break;case"stool":VS(f,d,p,g);break;case"kitchen_wall":GS(f,d,p,g);return;case"kitchen_tall":HS(f,d,p,g);break;case"island":WS(f,d,p,g);break;case"worktop":f.box(-d/2,d/2,Math.max(0,g-.04),g,-p/2,p/2,I.whiteTop,I.whiteTop,me);return;case"dishwasher":XS(f,d,p,g);break;case"washer":Vg(f,d,p,g,!1);break;case"dryer":Vg(f,d,p,g,!0);break;case"bunk_bed":$S(f,d,p,g);break;case"table_round":YS(f,d,p,g);break;case"coffee_table":qS(f,d,p,g);break;case"tv_wall":KS(f,d,p,g);return;case"parking":{let m=[[-d/2,-p/2],[d/2,-p/2],[d/2,p/2],[-d/2,p/2]];for(let y=0;y<4;y++)f.seg(m[y][0],.012,m[y][1],m[(y+1)%4][0],.012,m[(y+1)%4][1],Oe);f.seg(-d*.15,.012,p/2-.45,0,.012,p/2-.2,me),f.seg(0,.012,p/2-.2,d*.15,.012,p/2-.45,me);return}case"robot_vacuum":f.box(-d*.45,d*.45,0,g,-p/2,-p/2+p*.3,I.white,I.whiteTop,me),f.box(-d*.2,d*.2,g*.5,g*.62,-p/2+p*.3,-p/2+p*.31,I.accent);return;case"radiator":ZS(f,d,p,g);return;case"ac_unit":jS(f,d,p,g);return;case"inverter":JS(f,d,p,g,n.variant??null);return;case"grid_point":rT(f,d,p,g);break;case"wallbox":oT(f,d,p,g);return;case"pool_pump":QS(f,d,p,g);break;case"pool_filter":eT(f,d,p,g,n.variant??null);break;case"pool_heat_pump":tT(f,d,p,g);break;case"pool_dosing":nT(f,d,p,g);break;case"pool_valve":iT(f,d,p,g);return;case"meter":sT(f,d,p,g);return;case"home_battery":if(aT(f,d,p,g,n.variant??null),n.variant==="wall")return;break;default:{let b=ut(n.type);if(b){let m=Wc(n.type),y=m?v=>kf(m,v):S0(n.type)&&!o?ta:null;if(Zo(f,b,d,p,g,r,null,null,y),b.rack_frame&&dT(f,b,n,d,p,g,r,s),r>.05)return}else f.box(-d/2,d/2,0,g,-p/2,p/2,I.body,I.bodyTop,me)}}hT(t,u,d,p,n.type==="plant"?.35:.5,uT(n),Math.min(0,r))}function dT(i,e,t,n,r,o,s,a=!0){let l=Vi(e);if(!l)return;let c=Gi(l,n,r,o);for(let h of rp(c))i.box(h.x0,h.x1,s+h.y0,s+h.y1,h.z0,h.z1,I.accent,I.accent);a&&Kg(i,t,c,s,!0)}function Kg(i,e,t,n,r){let o=e.rack?.slots;if(o?.length)for(let s of gr(t,o,ut)){let a=s.back?i.moved(s.x,s.z).rotated(0,0,180):i.moved(s.x,s.z);r?Zo(a,s.item,s.w,s.d,s.h,n+s.y,null):pT(a,s.item,s.w,s.d,s.h,n+s.y)}}function pT(i,e,t,n,r,o){let s=la(e,t,n,r);if(!s.length)return;let a=[1/0,-1/0,1/0,-1/0,1/0,-1/0],l=(f,...d)=>{a[f]=Math.min(a[f],...d),a[f+1]=Math.max(a[f+1],...d)},c=s[0];for(let f of s){let d=f.shape==="loft";f.rot?l(0,-.5,.5):l(0,f.x-f.w/2,f.x+f.w/2,...d?[(f.tx??f.x)-(f.tw??f.w)/2,(f.tx??f.x)+(f.tw??f.w)/2]:[]),f.rot?l(2,-.5,.5):l(2,f.z-f.d/2,f.z+f.d/2,...d?[(f.tz??f.z)-(f.td??f.d)/2,(f.tz??f.z)+(f.td??f.d)/2]:[]),l(4,f.y,f.y+f.h),f.w*f.h>c.w*c.h&&(c=f)}let h=$o(c.color,!1)??I.body,u=$o(c.top,!1)??$o(c.color,!0)??Be(h,1.25).getHex();i.box(a[0]*t,a[1]*t,o+a[4]*r,o+Math.min(r,a[5]*r),a[2]*n,a[3]*n,h,u,Oe)}function Zg(i,e,t,n,r){let o=ut(t.type),s=o?Vi(o):null;if(!s||!t.rack?.slots?.length)return;let a=t.rotation*it,l=Math.cos(a),c=Math.sin(a),h=t.mirror?-1:1,u=new yi(i,e,(d,p)=>[t.x+h*d*l-p*c,t.z+h*d*c+p*l]),f=Gi(s,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h));qo(i,t,()=>Kg(u,t,f,n,r))}function jg(i,e,t,n){let r=new Map,o=ut(e.type),s=o?Vi(o):null,a=e.rack?.slots;if(!s||!a?.length||!n.length)return r;let l=new Set(n),c=e.rotation*it,h=Math.cos(c),u=Math.sin(c),f=e.mirror?-1:1,d=new yi(i,new Pt,(g,b)=>[e.x+f*g*h-b*u,e.z+f*g*u+b*h]),p=Gi(s,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h));for(let g of gr(p,a,ut)){if(!l.has(g.slot.id)||r.has(g.slot.id))continue;let b=cp(g),m=b.size/2,y=i.count;d.box(b.x-m,b.x+m,t+b.y-m,t+b.y+m,b.z-m,b.z+m,16777215,16777215),r.set(g.slot.id,{start:y,end:i.count})}return r}function mT(i){return!!ut(i)?.parts.some(e=>e.color?.startsWith("#")||e.top?.startsWith("#"))}function da(i){return i.type==="waste_bin"||mT(i.type)||ca.some(e=>sd(i.colors,e))}function $o(i,e){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let t=I;return(e?t[`${i}Top`]:void 0)??t[i]??null}function Zo(i,e,t,n,r,o,s,a=null,l=null){let c=!!a;for(let h of la(e,t,n,r)){if(l?.(h)||a&&!a(h))continue;let u=c?{...h,glow:!0,w:h.w+.006/t,d:h.d+.006/n,y:Math.max(0,h.y-.002/r),h:h.h+.004/r}:h,f=u.glow&&s!==null,d=f?s:$o(u.color,!1)??I.body,p=f?s:$o(u.top,!1)??$o(u.color,!0)??Be(d,1.25).getHex(),g=o+u.y*r,b=o+Math.min(r,(u.y+u.h)*r),m=i.colors.length,y=u.edges==="glow"?lr:u.edges==="faint"?Oe:u.edges?me:null,v=u.rot?i.rotated(u.x*t,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))v.lyingCyl(u.axis,u.x*t,u.z*n,g,b,u.axis==="x"?u.w*t:u.d*n,u.axis==="x"?u.d*n:u.w*t,d,p,14,y);else if(u.shape==="cyl")v.cyl(u.x*t,u.z*n,Math.min(u.w*t,u.d*n)/2,g,b,d,p,14,y);else if(u.shape==="sphere")v.rings(kg(u.x*t,u.z*n,u.w*t/2,u.d*n/2,g,b),d,p,y);else if(u.shape==="lathe")v.rings(Dg(u.x*t,u.z*n,u.w*t/2,u.d*n/2,g,b,u.profile??[[1,0],[1,1]]),d,p,y);else if(u.shape==="rbox"){let x=(u.round??.2)*Math.min(u.w*t,u.d*n,b-g);v.rings(Og((u.x-u.w/2)*t,(u.x+u.w/2)*t,(u.z-u.d/2)*n,(u.z+u.d/2)*n,g,b,x),d,p,y)}else if(u.shape==="loft"){let x=u.tx??u.x,_=u.tz??u.z,w=u.tw??u.w,S=u.td??u.d;v.loft([(u.x-u.w/2)*t,(u.x+u.w/2)*t,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(x-w/2)*t,(x+w/2)*t,(_-S/2)*n,(_+S/2)*n],g,b,d,p,y)}else v.box((u.x-u.w/2)*t,(u.x+u.w/2)*t,g,b,(u.z-u.d/2)*n,(u.z+u.d/2)*n,d,p,y);hr&&!f&&!c&&(u.color?.startsWith("#")||u.top?.startsWith("#"))&&Wg(i.colors,m)}}function Jg(i,e,t,n,r,o,s=!1){let a=o*it,l=Math.cos(a),c=Math.sin(a),h=(g,b)=>[t+g*l-b*c,r+g*c+b*l],u=new yi(i,new Pt,h),f=s?12065836:1713728,d=s?15740991:2373216,p=725279;if(e==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,f,d,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,p,f),u.cyl(0,0,.012,n-.075,n-.06,I.accent,I.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,f,d),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,f,d),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,f,d),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,p,I.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Qg(i,e,t,n,r){let o=T0(e)*n,s=new yi(i,new Pt,(c,h)=>[c,h-o]);Zo(s,e,Math.max(.05,t),Math.max(.05,n),Math.max(.005,r),0,null,ta);let a=0,l=0;for(let c of la(e,t,n,r)){if(!ta(c))continue;let h=Math.min(c.w*t,c.d*n)/2;c.shape==="cyl"&&h>a&&(a=h),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function jo(i,e,t,n,r,o=s=>!!s.glow){let s=t.rotation*it,a=Math.cos(s),l=Math.sin(s),c=t.mirror?-1:1,h=(u,f)=>[t.x+c*u*a-f*l,t.z+c*u*l+f*a];Zo(new yi(i,new Pt,h),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,r,o)}function eb(i,e,t,n,r,o){let s=gT(e,t,o,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*it,l=Math.cos(a),c=Math.sin(a),h=n.mirror?-1:1,u=(f,d)=>[n.x+h*f*l-d*c,n.z+h*f*c+d*l];qo(i,n,()=>Zo(new yi(i,new Pt,u),{...e,parts:s},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null))}function gT(i,e,t,n="both"){let r=Math.min(1,Math.max(0,t)),o=i.parts.filter(a=>kf(e,a)),s;if(e==="curtain")s=o.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else if(e==="blind"){let a=Math.max(.02,1-r),l=1-a;s=o.map(c=>{let h=(u,f)=>u+((f??u)-u)*l;return{...c,y:c.y+c.h*l,h:c.h*a,x:h(c.x,c.tx),z:h(c.z,c.tz),w:h(c.w,c.tw),d:h(c.d,c.td)}})}else{let a=Math.max(...o.map(c=>c.y+c.h)),l=Math.max(.02,1-r);s=o.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return s}function tb(i,e,t){let n=Math.max(.05,e.w),r=Math.max(.05,e.d),o=Math.max(.005,e.h),s=0,a=0,l=0,c=0;for(let b of la(i,n,r,o)){if(!b.glow)continue;let m=(b.x+(b.shape==="loft"?b.tx??b.x:b.x))/2*n,y=(b.z+(b.shape==="loft"?b.tz??b.z:b.z))/2*r,v=b.y*o,x=Math.min(o,(b.y+b.h)*o),_=Math.max(1e-6,b.w*n*b.d*r*Math.max(0,x-v));s+=_,a+=m*_,l+=(v+x)/2*_,c+=y*_}if(!s)return null;let h=a/s,u=c/s,f=e.rotation*it,d=Math.cos(f),p=Math.sin(f),g=e.mirror?-1:1;return[e.x+g*h*d-u*p,t+l/s,e.z+g*h*p+u*d]}function uu(i,e,t,n,r){let o=t.rotation*it,s=Math.cos(o),a=Math.sin(o),l=t.mirror?-1:1,c=(h,u)=>[t.x+l*h*s-u*a,t.z+l*h*a+u*s];qo(i,t,()=>Zo(new yi(i,new Pt,c),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,r))}var bT={lawn:{color:1854e3,side:1391142,edge:4055200,edgeAlpha:.28},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:2310186,side:1716256,edge:10146383,edgeAlpha:.22},hedge:{color:2252863,side:1591856,edge:4055200,edgeAlpha:.4},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function xT(i,e,t){let n=[(e[0]+t[0])/2,(e[1]+t[1])/2],r=t[0]-e[0],o=t[1]-e[1],s=Math.hypot(r,o)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let h=a.points[(c+1)%a.points.length],u=h[0]-l[0],f=h[1]-l[1],d=Math.hypot(u,f)||1;if(Math.abs((r*f-o*u)/(s*d))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+u*p-n[0],l[1]+f*p-n[1])<.4}))}function ib(i,e){return e.type==="pool"?Zc(i,e):Or(i,e)+(jn(e.type)?.01:Uo[e.type])}function pa(i){return Pn(i)>=0?i:[...i].reverse()}function yT(i,e){let t=i[e];if(jn(t.type)||t.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let o=i[r];r===e||!(o.cut&&r>e||o.type==="pool")||o.points.length<3||o.points.every(s=>et(s,t.points))&&n.push(pa(o.points))}return n}function nb(i,e,t,n,r,o,s,a,l=0){let c=t[0]-e[0],h=t[1]-e[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Ft(i,pa([[e[0]+f,e[1]+d],[t[0]+f,t[1]+d],[t[0]-f,t[1]-d],[e[0]-f,e[1]-d]]),r,o,s,a,{aoFrom:r-1});return}let p=(x,_)=>[e[0]+f*_,x,e[1]+d*_],g=(x,_)=>[t[0]+f*_,x+l,t[1]+d*_],b=(x,_)=>{i.tri(x[0],x[1],x[2],_,_,_,void 0,tt),i.tri(x[0],x[2],x[3],_,_,_,void 0,tt),i.tri(x[0],x[2],x[1],_,_,_,void 0,tt),i.tri(x[0],x[3],x[2],_,_,_,void 0,tt)},m=new j(a),y=new j(Be(s,.9)),v=new j(Be(s,.6));b([p(o,1),g(o,1),g(o,-1),p(o,-1)],m),b([p(r,1),g(r,1),g(r,-1),p(r,-1)],v),b([p(r,1),g(r,1),g(o,1),p(o,1)],y),b([p(r,-1),g(r,-1),g(o,-1),p(o,-1)],y),b([p(r,1),p(r,-1),p(o,-1),p(o,1)],y),b([g(r,1),g(r,-1),g(o,-1),g(o,1)],y)}function rb(i,e,t,n){let r=t.outdoor??[];r.forEach((o,s)=>{if(o.points.length<3)return;let a=Or(t,o),l=(y,v)=>a-na(t,o,y,v),c=a-(o.type==="pool"?0:o.slope??0),h=jn(o.type)&&o.height?o.height:Uo[o.type],u={...bT[o.type],top:h},f=pa(o.points),d=Be(u.edge,u.edgeAlpha),p=o.open&&(o.type==="fence"||o.type==="pergola")?f.length-1:-1,g=y=>{if(o.outline!==!1)for(let v=0;v<f.length;v++){if(v===p)continue;let x=f[v],_=f[(v+1)%f.length];e.seg([x[0],y(x[0],x[1]),x[1]],[_[0],y(_[0],_[1]),_[1]],d,tt)}},b=n??i,m=new j(n?1734832:u.color);switch(o.type){case"pool":{let y=new j(u.side),v=new j(Be(u.side,.55)),x=new j(932440),_=Zc(t,o),w=Kc(t,o),S=k0(t,o);for(let[M,A,E]of bn(f)){let T=f[M],P=f[A],F=f[E];(n?b:i).tri([T[0],_,T[1]],[F[0],_,F[1]],[P[0],_,P[1]],m,m,m,void 0,tt),i.tri([T[0],S,T[1]],[F[0],S,F[1]],[P[0],S,P[1]],x,x,x,void 0,tt)}for(let M=0;M<f.length;M++){let A=f[M],E=f[(M+1)%f.length];i.tri([E[0],S,E[1]],[E[0],w,E[1]],[A[0],w,A[1]],v,y,y,void 0,tt),i.tri([E[0],S,E[1]],[A[0],w,A[1]],[A[0],S,A[1]],v,y,v,void 0,tt)}if(!o.above&&Nf(t,o)){let M=new j(660258),A=new j(396054),E=S-.2,T=Math.min(a,w);for(let P=0;P<f.length;P++){let F=f[P],L=f[(P+1)%f.length];i.tri([F[0],E,F[1]],[F[0],T,F[1]],[L[0],T,L[1]],A,M,M,void 0,tt),i.tri([F[0],E,F[1]],[L[0],T,L[1]],[L[0],E,L[1]],A,M,A,void 0,tt)}for(let[P,F,L]of bn(f)){let O=f[P],C=f[F],k=f[L];i.tri([O[0],E,O[1]],[C[0],E,C[1]],[k[0],E,k[1]],A,A,A,void 0,tt)}if(o.outline!==!1)for(let P=0;P<f.length;P++){let F=f[P],L=f[(P+1)%f.length];e.seg([F[0],E,F[1]],[L[0],E,L[1]],Be(u.edge,u.edgeAlpha*.35),tt),e.seg([F[0],E,F[1]],[F[0],T,F[1]],Be(u.edge,u.edgeAlpha*.25),tt)}}if(w>a+.02){let M=new j(2044240),A=new j(1187123);for(let E=0;E<f.length;E++){let T=f[E],P=f[(E+1)%f.length];i.tri([T[0],a,T[1]],[T[0],w,T[1]],[P[0],w,P[1]],A,M,M,void 0,tt),i.tri([T[0],a,T[1]],[P[0],w,P[1]],[P[0],a,P[1]],A,M,A,void 0,tt)}g(()=>a+.005)}if(g(()=>w),g(()=>_+.005),o.outline!==!1)for(let M=0;M<f.length;M++){let A=f[M],E=f[(M+1)%f.length];e.seg([A[0],S+.005,A[1]],[E[0],S+.005,E[1]],Be(u.edge,u.edgeAlpha*.4),tt)}break}case"fence":{for(let y=0;y<f.length;y++){if(y===p)continue;let v=f[y],x=f[(y+1)%f.length],_=Math.hypot(x[0]-v[0],x[1]-v[1]),w=Math.max(1,Math.round(_/2)),S=p>=0&&y===p-1?w:w-1;for(let M=0;M<=S;M++){let A=M/w,E=v[0]+(x[0]-v[0])*A,T=v[1]+(x[1]-v[1])*A,P=l(E,T);Ft(i,pa([[E-.04,T-.04],[E+.04,T-.04],[E+.04,T+.04],[E-.04,T+.04]]),P,P+u.top,u.side,u.color)}for(let M of[.35,.85])e.seg([v[0],l(v[0],v[1])+M*u.top,v[1]],[x[0],l(x[0],x[1])+M*u.top,x[1]],d,tt)}break}case"pergola":{let y=u.top;for(let[v,x]of f){let _=l(v,x);Ft(i,pa([[v-.06,x-.06],[v+.06,x-.06],[v+.06,x+.06],[v-.06,x+.06]]),_,_+y,u.side,u.color)}for(let v=0;v<f.length;v++){if(v===p)continue;let x=f[v],_=f[(v+1)%f.length],w=l(x[0],x[1])+y;if(nb(i,x,_,.12,w-.16,w,u.side,u.color,l(_[0],_[1])-l(x[0],x[1])),o.bracing){let S=l(x[0],x[1]),M=l(_[0],_[1]);e.seg([x[0],S+.25,x[1]],[_[0],M+y-.25,_[1]],d,tt),e.seg([_[0],M+.25,_[1]],[x[0],S+y-.25,x[1]],d,tt)}}if(X0(f)){let v=$0(f),x=v.x1-v.x0,_=v.z1-v.z0,w=x>=_,S=w?x:_,M=Math.max(1,Math.round(S/.6));for(let A=1;A<M;A++){let E=(w?v.x0:v.z0)+S*A/M,T=w?[E,v.z0+.06]:[v.x0+.06,E],P=w?[E,v.z1-.06]:[v.x1-.06,E],F=l(T[0],T[1])+y;nb(i,T,P,.06,F-.04,F+.08,u.side,u.color,l(P[0],P[1])-l(T[0],T[1]))}}g((v,x)=>l(v,x)+y+.004);break}case"balcony":{Ft(i,f,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),g(()=>a+u.top+.004);let v=o.height&&o.height>.3?o.height:1,x=Be(9417983,.42),_=Be(3662079,.55);for(let w=0;w<f.length;w++){let S=f[w],M=f[(w+1)%f.length];if(xT(t,S,M))continue;let A=Math.hypot(M[0]-S[0],M[1]-S[1]),E=a+u.top;e.seg([S[0],E+v,S[1]],[M[0],E+v,M[1]],_,tt),e.seg([S[0],E+.1,S[1]],[M[0],E+.1,M[1]],x,tt);let T=Math.max(1,Math.round(A/.12));for(let P=0;P<=T;P++){let F=P/T,L=S[0]+(M[0]-S[0])*F,O=S[1]+(M[1]-S[1])*F;e.seg([L,E,O],[L,E+v,O],P===0||P===T?_:x,tt)}}break}default:{let y=(x,_)=>l(x,_)+u.top,v=yT(r,s);if(Ft(i,f,c,o.slope?y:a+u.top,u.side,u.color,{aoFrom:c,holes:v}),g((x,_)=>y(x,_)+.004),o.type==="hedge"&&g((x,_)=>l(x,_)+.004),o.outline!==!1)for(let x of v)for(let _=0;_<x.length;_++){let w=x[_],S=x[(_+1)%x.length];e.seg([w[0],y(w[0],w[1])+.004,w[1]],[S[0],y(S[0],S[1])+.004,S[1]],d,tt)}}}})}var fu=Math.PI/180,vT=1.13,_T=1.72,gd=.025,Xr=.07,ob=.25;function sb(i,e){let t=[];for(let n of i.floors){if(e&&n.id!==e)continue;let{walls:r}=or(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,h=-s/l,u=Math.min(n.height,o.height??n.height),f=o.sources.find(g=>g.room_id===o.roomLeft)?.edge??null,d={floorId:n.id,room:o.roomLeft,edge:f,free:!!o.free},p=(g,b,m,y)=>t.push({key:g,section:null,side:"top",flat:!1,o:b,eu:m,es:[0,1,0],n:y,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[y[0],y[2]],wall:d});p(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+h*o.right],[s/l,0,a/l],[c,0,h]),o.free&&p(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-h*o.left],[-s/l,0,-a/l],[-c,0,-h])}}return t}var bd="ground";function Li(i){let e=[...i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??i.floors[0]??null}function ab(i,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],r=[-Math.sin(t),0,Math.cos(t)],o=Li(i),s=n[0]*e.u+r[0]*e.v,a=n[2]*e.u+r[2]*e.v,l=o?o.elevation+(e.base!=null?e.base:Xc(o,s,a)):e.base??0;return{key:bd,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function MT(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function Yr(i){let e=i.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(y=>wT(y,ru(i,y,y.overhang??e.overhang)));let t=MT(i);if(!t)return[];let n=t.rooms.flatMap(y=>y.points.map(v=>v[0])),r=t.rooms.flatMap(y=>y.points.map(v=>v[1])),o=i.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,h=t.elevation+t.height;if(e.type==="flat")return[lb("main",null,s,l,a,c,h+ob)];let u=a-s>=c-l,f=e.ridge==="short"?!u:u,d=(f?c-l:a-s)/2,p=d*Math.tan(e.pitch*fu),g=(y,v,x)=>f?[y,h+x,(l+c)/2+v]:[(s+a)/2+v,h+x,y],[b,m]=f?[s,a]:[l,c];return[-1,1].map(y=>hu(`main:${y<0?"a":"b"}`,null,y<0?"a":"b",g(b,y*d,0),g(m,y*d,0),g(b,0,p),e.pitch,()=>[0,m-b]))}function wT(i,e){let t=cn(i),n=ln(i),r=(v,x,_)=>{let[w,S]=t.at(v,x);return[w,_,S]},o=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let v=t.at(a,-o),x=t.at(l,t.w+s);return[lb(i.id,i.id,Math.min(v[0],x[0]),Math.min(v[1],x[1]),Math.max(v[0],x[0]),Math.max(v[1],x[1]),i.eave_a+ob)]}if(i.shape==="pent")return[hu(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,t.w+s,n.y(t.w+s)),i.pitch_a,()=>[0,c])];let h=iu(i),u=h?Kf(i,h):null,f=i.shape==="pyramid"||h?.[0]==="hip",d=i.shape==="pyramid"||h?.[1]==="hip",p=i.shape==="pyramid"?(t.u1-t.u0)/2:f?u.d0:0,g=i.shape==="pyramid"?(t.u1-t.u0)/2:d?u.d1:0,b=f?t.u0+p-a:0,m=d?l-(t.u1-g):0,y=[];if(n.vr>.3){let v=Math.hypot(n.vr+o,n.rh-n.y(-o));y.push(hu(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,n.vr,n.rh),i.pitch_a,x=>[b*(x/v),c-m*(x/v)]))}if(t.w-n.vr>.3){let v=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));y.push(hu(`${i.id}:b`,i.id,"b",r(l,t.w+s,n.y(t.w+s)),r(a,t.w+s,n.y(t.w+s)),r(l,n.vr,n.rh),i.pitch_b,x=>[m*(x/v),c-b*(x/v)]))}if(f||d){let v=n.y(-o),x=n.y(t.w+s),_=[];f&&_.push([`${i.id}:c`,"c",r(a,t.w+s,x),r(a,-o,v),r(t.u0+p,n.vr,n.rh)]),d&&_.push([`${i.id}:d`,"d",r(l,-o,v),r(l,t.w+s,x),r(t.u1-g,n.vr,n.rh)]);for(let[w,S,M,A,E]of _){let T=ST(w,i.id,S,M,A,E);T&&y.push(T)}}return y}function ST(i,e,t,n,r,o){let s=ma($r(r,n));if(s<.3)return null;let a=fr($r(r,n)),l=$r(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=ma(h);if(u<.3)return null;let f=fr(h),d=fr(hb(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=fr([-f[0],0,-f[2]]),g=Math.atan2(f[1],Math.hypot(f[0],f[2]))/fu;return{key:i,section:e,side:t,flat:!1,o:n,eu:a,es:f,n:d,lu:s,ls:u,pitch:g,span:m=>{let y=Math.min(1,Math.max(0,m/u));return[c*y,s-(s-c)*y]},facing:[p[0],p[2]]}}function hu(i,e,t,n,r,o,s,a){let l=fr($r(r,n)),c=fr($r(o,n)),h=fr(hb(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=fr([-c[0],0,-c[2]]);return{key:i,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:h,lu:ma($r(r,n)),ls:ma($r(o,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function lb(i,e,t,n,r,o,s){let a=r-t>=o-n,l=a?r-t:o-n,c=a?o-n:r-t;return{key:`${i}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function cb(i){let e=i.module_w||vT,t=i.module_h||_T;return i.portrait===!1?[t,e]:[e,t]}function TT(i){return i.layout?.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function ub(i,e){return i.flat?Math.min(45,Math.max(0,e.tilt??15))*fu:i.wall?Math.min(90,Math.max(0,e.tilt??0))*fu:0}function AT(i,e){let[,t]=cb(e),n=ub(i,e);return i.wall?t*Math.cos(n)+gd:i.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+gd}function ga(i,e,t=!1){let[n,r]=cb(e),o=[],s=ub(i,e),a=r*Math.cos(s),l=AT(i,e),c=TT(e),h=Math.max(1,...c),u=new Set(e.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(g,b,m)=>[i.o[0]+i.eu[0]*g+i.es[0]*b+i.n[0]*m,i.o[1]+i.eu[1]*g+i.es[1]*b+i.n[1]*m,i.o[2]+i.eu[2]*g+i.es[2]*b+i.n[2]*m],p=(g,b)=>{if(i.unbounded)return!0;if(b<-1e-6||b>i.ls+1e-6)return!1;let[m,y]=i.span(b);return g>=m-1e-6&&g<=y+1e-6};return c.forEach((g,b)=>{let m=e.align==="right"?h-g:e.align==="center"?(h-g)/2:0;for(let y=0;y<g;y++){let v=`${b}:${y}`,x=u.has(v);if(x&&!t)continue;let _=e.u+(y+m)*(n+gd),w=e.v+b*l,S=_+n,M=w+(i.flat||i.wall?a:r);if(f){if(!(p((_+S)/2,w)&&p((_+S)/2,M)))continue}else if(![[_,w],[S,w],[S,M],[_,M]].every(([L,O])=>p(L,O)))continue;if(i.wall&&s>.001){let L=Xr+r*Math.sin(s),[O,C]=e.flip?[L,Xr]:[Xr,L],k=[d(_,w,O),d(S,w,O),d(S,M,C),d(_,M,C)],N=e.flip?w:M,U=[_+.05,S-.05].map(V=>[d(V,N,0),d(V,N,L)]);o.push({corners:k,posts:U,cell:v,skipped:x});continue}if(!i.flat){o.push({corners:[d(_,w,Xr),d(S,w,Xr),d(S,M,Xr),d(_,M,Xr)],posts:[],cell:v,skipped:x});continue}let A=.15,E=A+r*Math.sin(s),[T,P]=e.flip?[M,w]:[w,M],F=[d(_,T,A),d(S,T,A),d(S,P,E),d(_,P,E)];o.push({corners:F,posts:[_+.05,S-.05].flatMap(L=>[[d(L,T,0),d(L,T,A)],[d(L,P,0),d(L,P,E)]]),cell:v,skipped:x})}}),o}function $r(i,e){return[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}function ma(i){return Math.hypot(i[0],i[1],i[2])}function fr(i){let e=ma(i)||1;return[i[0]/e,i[1]/e,i[2]/e]}function hb(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}var ET=.78,RT=1.18;function PT(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||ET,module_h:i.h||RT}}function du(i,e){let t=ga(i,PT(e))[0];if(!t)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function pu(i,e,t){let n=e?du(e,t):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,o=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>o)continue;let l=a.rooms.find(c=>et([r,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var ba=1712952,xa=2239816,mb=1318193,dr=Be(3662079,.9),Jo=Be(5995775,.45),tn=.14,CT=9427199,IT=13226982,LT=14936565,FT={black:{glass:new j(329483),edge:Be(9082544,.32),cells:Be(2766160,.22)},blue:{glass:new j(1386842),edge:Be(10467583,.55),cells:Be(4025599,.35)}},kT=Be(13226982,.5),DT=Be(13226982,.85),OT=Be(16757575,.95),fb=new j(2845583),db=new j(1713986),NT=new j(3662079).multiplyScalar(.35),pb=new j(4871791);function UT(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function gb(i,e=new Map){let t=i.settings.roof,n=t?.type==="custom"?null:VT(i),r=t?.type==="custom"?GT(i,t.sections??[],t.overhang):n?[n]:[];return zT(i,r),BT(i,r,e),r}function BT(i,e,t){let n=i.settings.roof?.windows??[];if(!n.length||!e.length)return;let r=new Map(Yr(i).map(o=>[o.key,o]));for(let o of n){let s=r.get(o.face),a=s?du(s,o):null;if(!s||!a)continue;let l=s.section?e.find(C=>C.sections?.includes(s.section)):e[0];if(!l)continue;let c=o.float?pu(i,s,o):null,h=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,u=h?h.elevation:l.floor.elevation+l.base,f=C=>[C[0],C[1]-u,C[2]],[d,p,g,b]=a.map(f),m=t.get(o.id)??{open:0,tilt:0,cover:0},y=!!c&&(h!==null||c.floor.id===l.floor.id),v=h?(l.winBelow??=new Map).get(h.id)??l.winBelow.set(h.id,{floor:h,solid:new Qe,lines:new Pt,glass:new Qe}).get(h.id):y?l.win??={solid:new Qe,lines:new Pt,glass:new Qe}:l.winRoof??={solid:new Qe,lines:new Pt,glass:new Qe},x=(C,k)=>[C[0]+s.n[0]*k,C[1]+s.n[1]*k,C[2]+s.n[2]*k],_=(C,k,N)=>[C[0]+(k[0]-C[0])*N,C[1]+(k[1]-C[1])*N,C[2]+(k[2]-C[2])*N],w=m.open>.02||m.tilt>.02?OT:DT,S=[d,p,g,b].map(C=>x(C,.06)),M=[d,p,g,b].map(C=>x(C,-.02));for(let C=0;C<4;C++){v.lines.seg(S[C],S[(C+1)%4],w);let k=(C+1)%4;v.solid.tri(M[C],M[k],S[k],pb),v.solid.tri(M[C],S[k],S[C],pb)}let A=(m.open>.02?30*Math.min(1,m.open):m.tilt>.5?12:0)*it,E=Math.hypot(g[0]-p[0],g[1]-p[1],g[2]-p[2]),T=C=>{let k=s.es;return[C[0]-k[0]*E*Math.cos(A)+s.n[0]*E*Math.sin(A),C[1]-k[1]*E*Math.cos(A)+s.n[1]*E*Math.sin(A),C[2]-k[2]*E*Math.cos(A)+s.n[2]*E*Math.sin(A)]},P=x(b,.065),F=x(g,.065),L=T(P),O=T(F);v.glass.tri(L,O,F,fb),v.glass.tri(L,F,P,fb);for(let[C,k]of[[L,O],[O,F],[F,P],[P,L]])v.lines.seg(C,k,w);if(m.cover>.02){let C=Math.min(1,m.cover),k=x(_(P,L,C),.01),N=x(_(F,O,C),.01),U=x(P,.01),V=x(F,.01);v.solid.tri(k,N,V,db),v.solid.tri(k,V,U,db);let H=Math.max(1,Math.round(E*C/.05));for(let B=1;B<=H;B++){let z=B/H;v.lines.seg(x(_(U,k,z),.004),x(_(V,N,z),.004),NT)}}}}function zT(i,e){let t=i.settings.roof?.solar??[];if(!t.length||!e.length)return;let n=new Map(Yr(i).map(r=>[r.key,r]));for(let r of t){let o=n.get(r.face);if(!o)continue;let s=o.section?e.find(a=>a.sections?.includes(o.section)):e[0];s&&xd(s.solid,s.lines,o,r,s.floor.elevation+s.base)}}function xd(i,e,t,n,r){let o=c=>[c[0],c[1]-r,c[2]],s=FT[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of ga(t,n)){let[h,u,f,d]=c.corners.map(o);i.tri(h,u,f,s.glass),i.tri(h,f,d,s.glass),i.tri(h,f,u,s.glass),i.tri(h,d,f,s.glass);let p=(m,y=.004)=>[m[0]+t.n[0]*y,m[1]+t.n[1]*y,m[2]+t.n[2]*y],g=(m,y,v)=>[m[0]+(y[0]-m[0])*v,m[1]+(y[1]-m[1])*v,m[2]+(y[2]-m[2])*v],b=[h,u,f,d].map(m=>p(m));for(let m=0;m<4;m++)e.seg(b[m],b[(m+1)%4],s.edge);for(let m=1;m<a;m++)e.seg(p(g(h,u,m/a)),p(g(d,f,m/a)),s.cells);for(let m=1;m<l;m++)e.seg(p(g(h,d,m/l)),p(g(u,f,m/l)),s.cells);for(let[m,y]of c.posts)e.seg(o(m),o(y),kT)}}function VT(i){let e=i.settings.roof,t=UT(i);if(!t||!e||e.type==="none"||e.type==="custom")return null;let n=t.rooms.flatMap(E=>E.points.map(T=>T[0])),r=t.rooms.flatMap(E=>E.points.map(T=>T[1])),o=i.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,h=new Qe,u=new Pt;if(e.type==="flat"){Ft(h,[[s,l],[a,l],[a,c],[s,c]],0,.25,ba,xa,{bottom:!0});let E=.252;for(let[T,P]of[[[s,l],[a,l]],[[a,l],[a,c]],[[a,c],[s,c]],[[s,c],[s,l]]])u.seg([T[0],E,T[1]],[P[0],E,P[1]],dr),u.seg([T[0],0,T[1]],[P[0],0,P[1]],Jo);return{floor:t,base:t.height,solid:h,lines:u,glass:new Qe}}let f=a-s>=c-l,d=e.ridge==="short"?!f:f,p=(d?c-l:a-s)/2,g=p*Math.tan(e.pitch*it),b=(E,T,P)=>d?[E,P,(l+c)/2+T]:[(s+a)/2+T,P,E],[m,y]=d?[s,a]:[l,c],v=new j(xa),x=new j(ba),_=(E,T,P,F,L)=>{h.tri(E,T,P,L),h.tri(E,P,F,L)};for(let E of[-1,1]){_(b(m,E*p,0),b(y,E*p,0),b(y,0,g),b(m,0,g),v),_(b(m,E*p,-tn),b(m,0,g-tn),b(y,0,g-tn),b(y,E*p,-tn),x),_(b(m,E*p,-tn),b(y,E*p,-tn),b(y,E*p,0),b(m,E*p,0),x);for(let T of[m,y])_(b(T,E*p,-tn),b(T,E*p,0),b(T,0,g),b(T,0,g-tn),x);u.seg(b(m,E*p,0),b(y,E*p,0),Jo);for(let T of[m,y])u.seg(b(T,E*p,0),b(T,0,g),Jo)}let w=e.overhang,S=new j(mb),M=p-w,A=M*Math.tan(e.pitch*it);for(let E of[m+w,y-w])h.tri(b(E,-M,-tn),b(E,M,-tn),b(E,0,A-tn),S),h.tri(b(E,M,-tn),b(E,-M,-tn),b(E,0,A-tn),S);return u.seg(b(m,0,g+.004),b(y,0,g+.004),dr),{floor:t,base:t.height,solid:h,lines:u,glass:new Qe}}function GT(i,e,t){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,o=new Map(Yr(i).map(l=>[l.key,l])),s=e.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(s.map(l=>{let c=zr(e,l),h=c?null:cg(e,l),u=c?Zf(c,l):h?hg(l,h):l,f=ru(i,c?u:l,u.overhang??t),d=h?{...f,[h.end===0?"u0":"u1"]:0}:f,p=!u.open&&u.shape!=="flat"&&u.shape!=="parapet";return[l,{parent:c,junction:h,drawn:u,ov:d,covers:p?ag(u,Vr(u,d).faces):[]}]}));for(let l of s){let c=a.get(l),h=ig(i,l)??n[0],u=l.open?`${h.id}:open`:h.id,f=r.get(u);f||r.set(u,f={floor:h,base:0,solid:new Qe,lines:new Pt,glass:new Qe,sections:[],lift:!l.open}),f.sections.push(l.id);let d=c.parent,p=[(l.x0+l.x1)/2,(l.z0+l.z1)/2],g=n.some(w=>w.elevation>h.elevation&&w.elevation<=l.base+.5&&w.elevation+w.height>l.base&&w.rooms.some(S=>et(p,S.points))),b=h.elevation+h.height>l.base+.05&&!l.dormer&&!d||g,m=e.filter(w=>w!==l&&zr(e,w)===l).flatMap(w=>ng(l,w));for(let w of i.settings.roof.windows??[]){let S=o.get(w.face),M=S&&S.section===l.id?du(S,w):null;if(!M)continue;let A=M.map(E=>xi(l,E[0],E[2]));m.push({u0:Math.min(...A.map(E=>E[0])),u1:Math.max(...A.map(E=>E[0])),v0:Math.min(...A.map(E=>E[1])),v1:Math.max(...A.map(E=>E[1]))})}let y=c.drawn,v=c.junction?1-c.junction.end:null;if(d){let w=cn(y),S=Vr(d,{u0:0,u1:0,a:0,b:0}),M=A=>{let[E,T]=w.at(A,w.w/2),[P,F]=xi(d,E,T);return aa(S,P,F)??ln(d).y(F)};v=M(w.u0)<=M(w.u1)?0:1}let x=s.filter(w=>lg(e,l,w)),_=x.length?{covers:Qf(y,x.flatMap(w=>a.get(w).covers)),lines:Qf(y,x.filter(w=>s.indexOf(w)>s.indexOf(l)).flatMap(w=>a.get(w).covers)),wallU:c.junction?[cn(l).u0,cn(l).u1]:null}:null;HT(f.solid,f.lines,y,c.ov,h.elevation,f.glass,b,m,v,_)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function HT(i,e,t,n,r,o=i,s=!1,a=[],l=null,c=null){let h=cn(t),u=ln(t),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,f.a),p=Math.max(0,f.b),g=h.w,b=h.u0-Math.max(0,f.u0),m=h.u1+Math.max(0,f.u1),y=(C,k,N)=>{let[U,V]=h.at(C,k);return[U,N-r,V]},v=new j(xa),x=new j(ba),_=new j(mb),w=(C,k)=>{for(let N=1;N+1<C.length;N++)i.tri(C[0],C[N],C[N+1],k)},S=[],M=[],A=[],E=[null,null],T=[];if(t.shape==="flat"||t.shape==="parapet"){let C=t.eave_a,k=t.shape==="parapet",N=t.points&&t.points.length>=3?Q0(t,k?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):k?[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,g),h.at(h.u0,g)]:[h.at(b,-d),h.at(m,-d),h.at(m,g+p),h.at(b,g+p)];Ft(i,N,C-r,C-r+.25,ba,xa,{bottom:!0});for(let U=0;U<N.length;U++){let V=N[U],H=N[(U+1)%N.length];e.seg([V[0],C-r+.252,V[1]],[H[0],C-r+.252,H[1]],dr),e.seg([V[0],C-r,V[1]],[H[0],C-r,H[1]],Jo)}if(k){let U=z=>Jn(z)>=0?z:[...z].reverse(),V=U(N),H=nu(V,-.2),B=V.length;for(let z=0;z<B;z++){let q=U([V[z],V[(z+1)%B],H[(z+1)%B],H[z]]);Ft(i,q,C-r+.25,C-r+.65,ba,xa),e.seg([V[z][0],C-r+.652,V[z][1]],[V[(z+1)%B][0],C-r+.652,V[(z+1)%B][1]],dr),e.seg([H[z][0],C-r+.652,H[z][1]],[H[(z+1)%B][0],C-r+.652,H[(z+1)%B][1]],dr)}}}else{let C=Vr(t,f);S=C.faces;for(let k of a)S=S.flatMap(N=>jf(N,k));if(M=C.rim,A=C.ridges,E=C.gables,c){for(let k of S)for(let N of c.lines){let U=sg(k,N.poly);if(U)for(let[V,H]of Jf(U[0],U[1],c.covers.filter(B=>B!==N)))T.push([V,H])}S=S.flatMap(k=>og(k,c.covers))}}let P=!!t.open,F=new j(CT);for(let C of S){if(P){for(let k=1;k+1<C.length;k++)o.tri(y(C[0][0],C[0][1],C[0][2]),y(C[k][0],C[k][1],C[k][2]),y(C[k+1][0],C[k+1][1],C[k+1][2]),F);continue}w(C.map(([k,N,U])=>y(k,N,U)),v),w(C.map(([k,N,U])=>y(k,N,U-tn)),x)}let L=(C,k)=>c?Jf(C,k,c.covers):[[C,k]];for(let C=0;C<M.length;C++)for(let[[k,N,U],[V,H,B]]of L(M[C],M[(C+1)%M.length]))P||w([y(k,N,U),y(V,H,B),y(V,H,B-tn),y(k,N,U-tn)],x),e.seg(y(k,N,U),y(V,H,B),P?dr:Jo);if(P){WT(i,e,h,u,f,y,r);return}for(let[C,k]of A)for(let[[N,U,V],[H,B,z]]of L(C,k))e.seg(y(N,U,V+.004),y(H,B,z+.004),dr);for(let[[C,k,N],[U,V,H]]of T)e.seg(y(C,k,N+.004),y(U,V,H+.004),dr);let O=t.base;if(!s){for(let C of[0,1]){let k=E[C];if(!k||l!==null&&l!==C)continue;let N=XT(k,O-tn),U=C===0?h.u0:h.u1;N.length>=3&&w(N.map(([V,H])=>y(U,V,H)),_)}if(t.shape!=="flat"&&t.shape!=="parapet"){let[C,k]=c?.wallU??[h.u0,h.u1];for(let N of[0,g]){let U=u.y(N)-tn;U>O+.02&&w([y(C,N,O),y(k,N,O),y(k,N,U),y(C,N,U)],_)}}else if(t.eave_a>O+.02)for(let[C,k,N,U]of[[h.u0,0,h.u1,0],[h.u1,0,h.u1,g],[h.u1,g,h.u0,g],[h.u0,g,h.u0,0]])w([y(C,k,O),y(N,U,O),y(N,U,t.eave_a),y(C,k,t.eave_a)],_)}}function WT(i,e,t,n,r,o,s){let a=t.w,l=.12,c=.16,h=r.a>0,u=r.b>0,f=r.u0>0,d=r.u1>0,p=(m,y,v,x,_,w)=>{let S=[t.at(m,v),t.at(y,v),t.at(y,x),t.at(m,x)],M=(S[1][0]-S[0][0])*(S[2][1]-S[0][1])-(S[2][0]-S[0][0])*(S[1][1]-S[0][1]);Ft(i,M<0?[...S].reverse():S,_-s,w-s,IT,LT,{bottom:!0})},g=s;for(let[m,y]of[[0,h],[a,u]]){if(!y)continue;let v=n.y(m)-.03,x=m===0?0:a-l;p(t.u0,t.u1,x,x+l,v-c,v),e.seg(o(t.u0,m,v-c),o(t.u1,m,v-c),Jo)}for(let[m,y]of[[t.u0,f],[t.u1-l,d]])if(y)for(let v=0;v<6;v++){let x=a*v/6,_=a*(v+1)/6,w=Math.min(n.y(x),n.y(_))-.03;p(m,m+l,x,_,w-c,w)}let b=[];for(let[m,y]of[[0,h],[a-l,u]]){if(!y)continue;let v=t.u1-t.u0-l,x=Math.max(1,Math.ceil(v/3.5));for(let _=0;_<=x;_++){let w=t.u0+v*_/x;_===0&&!f||_===x&&!d||b.push([w,m])}}if(!h&&!u)for(let m of[t.u0,t.u1-l])(m===t.u0&&f||m!==t.u0&&d)&&b.push([m,a/2-l/2]);for(let[m,y]of b){let v=n.y(y+l/2)-.03-c;p(m,m+l,y,y+l,g,v)}}function XT(i,e){let t=[];for(let o=0;o<i.length;o++){let[s,a]=i[o];a>=e&&t.push([s,a]);let l=i[o+1];if(l&&(a-e)*(l[1]-e)<0){let c=(e-a)/(l[1]-a);t.push([s+(l[0]-s)*c,e])}}if(t.length<2)return[];let n=t[0],r=t[t.length-1];return r[1]>e&&t.push([r[0],e]),n[1]>e&&t.unshift([n[0],e]),t}var ya={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},pr={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},wa={wood:9067062,oak:12886644,tiles:13619146,carpet:11445651,stone:11117724,concrete:10329498},sn=.2,$T=-.06,YT=.01,va=8,mu=.42,yd=.42;function _b(i,e,t,n=[],r=[],o){let{walls:s,open:a}=or(i.rooms,{exterior:e,interior:t},i.walls??[]),l=(B,z,q,X)=>{let ee=X?.slope?Math.min(q,Bf(X.slope,B,z)):q,W=o?o(B,z):null;return W===null?ee:Math.max(.05,Math.min(ee,W))},c=(B,z)=>{let q=o?o(B,z):null;return q!==null&&q<$T},h=(B,z,q,X,ee,W)=>{if(!o&&!W?.slope)return ee;let Y=ee,ie=Math.max(2,Math.ceil((X-q)/.25)+1);for(let re=0;re<ie;re++){let te=q+(X-q)*re/(ie-1);Y=Math.min(Y,l(B[0]+z[0]*te,B[1]+z[1]*te,ee,W))}return Y},u=new Qe(!0,!0),f=[],d=new Pt,p=[];for(let B of i.rooms){if(B.points.length<3)continue;let z=gu(B.points),q=pr[B.floor_material]??pr.wood,X=new j(q.color),ee=n.flatMap(he=>{if(gg(he,z))return[he];if(!dg(he))return[];let be=Vo(z,he);return be.length>=3&&Math.abs(Jn(be))>.01?[gu(be)]:[]}),W=mg(ee).map(he=>bg(gu(he),.003));p.push(...W);let Y=[...z,...W.flat()],ie=u.count;for(let[he,be,ne]of bn(z,W)){let ce=Y[he],Pe=Y[be],ye=Y[ne];u.tri([ce[0],0,ce[1]],[ye[0],0,ye[1]],[Pe[0],0,Pe[1]],X,X,X,[ce[0],ce[1],ye[0],ye[1],Pe[0],Pe[1]],tt,q.tile)}f.push({roomId:B.id,start:ie,end:u.count,color:q.color});let re=new j(ya.slab),te=he=>{for(let be=0;be<he.length;be++){let ne=he[be],ce=he[(be+1)%he.length];u.tri([ne[0],-sn,ne[1]],[ne[0],0,ne[1]],[ce[0],0,ce[1]],re),u.tri([ne[0],-sn,ne[1]],[ce[0],0,ce[1]],[ce[0],-sn,ce[1]],re)}};te(z);for(let he of W){te([...gu(he)].reverse());for(let be=0;be<he.length;be++){let ne=he[be],ce=he[(be+1)%he.length];d.seg([ne[0],.006,ne[1]],[ce[0],.006,ce[1]],lr),d.seg([ne[0],-sn,ne[1]],[ce[0],-sn,ce[1]],Ii)}}}let g=new Map,b=[],m=new Map,y=new Map;for(let B of s){if(!B.free)continue;let z=K0(B,i.rooms);z!==null&&y.set(B,z)}for(let B of s){let z="interior",q=null,X=y.get(B);if(B.exterior||X!==void 0){let W=B.b[0]-B.a[0],Y=B.b[1]-B.a[1],ie=Math.hypot(W,Y)||1,re=X===!1?-1:1,te=[re*Y/ie,-re*W/ie],he=(Math.round(Math.atan2(te[1],te[0])/(2*Math.PI)*va)%va+va)%va;z=`s${he}`;let be=he/va*2*Math.PI;q=[Math.cos(be),Math.sin(be)]}let ee=g.get(z);ee===void 0&&(ee=b.length,g.set(z,ee),b.push(q)),m.set(B,ee)}let v=new Map,x=[];for(let B of i.openings){let z=Vf(B,i.rooms,i.walls??[]);if(!z)continue;let q=Gf(s,B,z);if(!q)continue;let{wall:X,s:ee}=q,W=yu([X.b[0]-X.a[0],X.b[1]-X.a[1]]),Y=Math.hypot(X.b[0]-X.a[0],X.b[1]-X.a[1]),ie=ee-B.width/2<-1e-6?Hf(s,X,!1):null,re=ee+B.width/2>Y+1e-6?Hf(s,X,!0):null,te=R=>R?Math.hypot(R.b[0]-R.a[0],R.b[1]-R.a[1]):0,he=-te(ie),be=Y+te(re),ne=Math.min(B.width,be-he),ce=Math.max(he,Math.min(be-ne,ee-ne/2)),Pe=z.room.points,ye=y.get(X),Ze=X.free?ye??W[0]*(Pe[1][0]-Pe[0][0])+W[1]*(Pe[1][1]-Pe[0][1])>0:X.exterior||X.roomLeft===B.room_id,Ge=[-W[1],W[0]],nt=Ze?Ge:[-Ge[0],-Ge[1]],De=Math.min(h(X.a,W,ce,ce+ne,_a(X,i.height),X)-.02,B.sill+B.height),pt=Math.max(0,Math.min(B.sill,De-.1)),K=[nt[1],-nt[0]],Ot=W[0]*K[0]+W[1]*K[1]>0,lt={opening:B,bucket:m.get(X),start:[X.a[0]+W[0]*ce,X.a[1]+W[1]*ce],axis:W,width:ne,toRoom:nt,faceRoom:Ze?X.left:X.right,faceOut:Ze?X.right:X.left,sill:pt,top:De,hingeAtStart:B.hinge==="left"===Ot,exterior:X.exterior||ye!==void 0};x.push(lt);let G=v.get(X);G||v.set(X,G=[]),G.push({s0:ce,s1:ce+ne,sill:pt,top:De,info:lt});for(let R of[ie,re]){if(!R)continue;let Q=ve=>(X.a[0]+W[0]*ve-R.a[0])*W[0]+(X.a[1]+W[1]*ve-R.a[1])*W[1],oe=Math.max(0,Q(ce)),ue=Math.min(te(R),Q(ce+ne));if(ue-oe<1e-4)continue;let xe=v.get(R);xe||v.set(R,xe=[]),xe.push({s0:oe,s1:ue,sill:pt,top:De,info:lt,cont:!0})}}let _=Math.min(i.cut_height,i.height),w=new Qe;for(let B of s){let z=m.get(B),q=yu([B.b[0]-B.a[0],B.b[1]-B.a[1]]),X=(v.get(B)??[]).sort((ne,ce)=>ne.s0-ce.s0),ee=_a(B,i.height),W=[],Y=[-1/0,...new Set(X.flatMap(ne=>[ne.s0,ne.s1])).values(),1/0].sort((ne,ce)=>ne-ce);for(let ne=0;ne+1<Y.length;ne++){let ce=Y[ne],Pe=Y[ne+1];if(Pe-ce<1e-6)continue;let ye=Number.isFinite(ce)&&Number.isFinite(Pe)?(ce+Pe)/2:Number.isFinite(ce)?ce+1:Pe-1,Ze=X.filter(De=>De.s0<ye&&De.s1>ye).map(De=>[De.sill,De.top]).sort((De,pt)=>De[0]-pt[0]),Ge=[],nt=-sn;for(let[De,pt]of Ze)De>nt+1e-4&&Ge.push([nt,De<1e-4?-YT:De]),nt=Math.max(nt,pt);ee>nt+1e-4&&Ge.push([nt,ee]),W.push({t0:ce,t1:Pe,ranges:Ge})}let ie=Math.hypot(B.b[0]-B.a[0],B.b[1]-B.a[1]),re=(o||B.slope)&&h(B.a,q,0,ie,ee,B)<ee-.001,te=re?W.flatMap(ne=>{let ce=Math.max(ne.t0,-.5),Pe=Math.min(ne.t1,ie+.5),ye=Math.max(1,Math.ceil((Pe-ce)/.3));return Array.from({length:ye},(Ze,Ge)=>({t0:Ge===0?ne.t0:ce+(Pe-ce)*Ge/ye,t1:Ge===ye-1?ne.t1:ce+(Pe-ce)*(Ge+1)/ye,ranges:ne.ranges,inner0:Ge>0,inner1:Ge<ye-1}))}):W.map(ne=>({...ne,inner0:!1,inner1:!1})),he=ne=>(ne[0]-B.a[0])*q[0]+(ne[1]-B.a[1])*q[1],be=ne=>{if(!o)return[ne];let ce=vd(B.footprint,B.a,q,ne.t0,ne.t1),Pe=ce.filter(([nt,De])=>c(nt,De)).length;if(Pe===0)return[ne];if(Pe===ce.length)return[];let ye=Math.max(ne.t0,-.5),Ze=Math.min(ne.t1,ie+.5),Ge=Math.max(1,Math.ceil((Ze-ye)/.05));return Array.from({length:Ge},(nt,De)=>({t0:De===0?ne.t0:ye+(Ze-ye)*De/Ge,t1:De===Ge-1?ne.t1:ye+(Ze-ye)*(De+1)/Ge,ranges:ne.ranges,inner0:De>0||ne.inner0,inner1:De<Ge-1||ne.inner1})).filter(nt=>!vd(B.footprint,B.a,q,nt.t0,nt.t1).every(([De,pt])=>c(De,pt)))};for(let ne of re?te.flatMap(be):te){let ce=vd(B.footprint,B.a,q,ne.t0,ne.t1);if(ce.length<3)continue;let Pe=(Ge,nt)=>Math.abs(he(Ge)-nt)<1e-4,ye=(Ge,nt)=>ne.inner0&&Pe(Ge,ne.t0)&&Pe(nt,ne.t0)||ne.inner1&&Pe(Ge,ne.t1)&&Pe(nt,ne.t1),Ze=re?Math.min(...ce.map(([Ge,nt])=>l(Ge,nt,ee,B))):ee;for(let[Ge,nt]of ne.ranges){let De=Math.min(nt,re?Math.max(...ce.map(([lt,G])=>l(lt,G,ee,B))):nt);if(De-Ge<1e-4||Ze-Ge<.01)continue;let pt=Ge>.01,K=re&&nt>Ze,Ot=(lt,G)=>Math.min(nt,l(lt,G,ee,B));if(Ge<_-1e-6){let lt=De>_+1e-6?Rg+z:cr+z,G=K&&Ze<_?(R,Q)=>Math.min(_,Ot(R,Q)):Math.min(De,_);Ft(w,ce,Ge,G,ya.wall,ya.wallTop,{aoFrom:0,bottom:pt,fold:cr+z,topFold:lt,skipSide:ye})}De>_+1e-6&&Ze>_+1e-6&&Ft(w,ce,Math.max(Ge,_),K?Ot:De,ya.wall,ya.wallTop,{aoFrom:0,fold:z,bottom:pt&&Ge>=_,skipSide:ye})}}}let S=s.flatMap(B=>B.footprint),M=ZT(s,S),A=new Pt;A.p.push(...d.p),A.c.push(...d.c),A.f.push(...d.f);let E=(B,z)=>(v.get(B)??[]).filter(z);for(let B of M.edges){let z=m.get(B.wall);for(let[X,ee]of bu(B,E(B.wall,W=>W.sill<=.005)))A.seg([X[0],.004,X[1]],[ee[0],.004,ee[1]],Eg);for(let[X,ee]of bu(B,E(B.wall,W=>W.sill<_&&W.top>_)))A.seg([X[0],_,X[1]],[ee[0],_,ee[1]],ld,au+z);let q=_a(B.wall,i.height);for(let[X,ee]of bu(B,E(B.wall,W=>W.top>=q-.021))){if(!o&&!B.wall.slope){A.seg([X[0],q,X[1]],[ee[0],q,ee[1]],lr,q<=_+1e-6?cr+z:z);continue}let W=Math.max(1,Math.ceil(Math.hypot(ee[0]-X[0],ee[1]-X[1])/.3));for(let Y=0;Y<W;Y++){let ie=[X[0]+(ee[0]-X[0])*Y/W,X[1]+(ee[1]-X[1])*Y/W],re=[X[0]+(ee[0]-X[0])*(Y+1)/W,X[1]+(ee[1]-X[1])*(Y+1)/W];if(c(ie[0],ie[1])&&c(re[0],re[1]))continue;let te=l(ie[0],ie[1],q,B.wall),he=l(re[0],re[1],q,B.wall);A.seg([ie[0],te,ie[1]],[re[0],he,re[1]],lr,Math.max(te,he)<=_+1e-6?cr+z:z)}}}let T=(B,z)=>l(z[0],z[1],_a(B,i.height),B);for(let B of M.corners){if(c(B.p[0],B.p[1]))continue;let z=B.walls.reduce((X,ee)=>T(ee,B.p)>T(X,B.p)+1e-6?ee:X,B.wall),q=l(B.p[0],B.p[1],_a(z,i.height),z);A.segSplit([B.p[0],.004,B.p[1]],[B.p[0],q,B.p[1]],Ii,Math.min(_,q),m.get(z))}for(let B of M.joints){let[z,q]=B.walls,X=[T(z,B.a),T(q,B.a)],ee=[T(z,B.b),T(q,B.b)];if(Math.abs(X[0]-X[1])<.01&&Math.abs(ee[0]-ee[1])<.01)continue;let W=X[1]+ee[1]>=X[0]+ee[0]?q:z,Y=m.get(W),ie=Math.max(...X),re=Math.max(...ee);A.seg([B.a[0],ie,B.a[1]],[B.b[0],re,B.b[1]],lr,Math.max(ie,re)<=_+1e-6?cr+Y:Y);for(let[te,he]of[[B.a,X],[B.b,ee]]){let be=Math.min(...he),ne=Math.max(...he);ne-be>.01&&A.segSplit([te[0],be,te[1]],[te[0],ne,te[1]],Ii,_,Y)}}for(let B of v.values())for(let z of B)z.cont||qT(A,z,_);let P=jT(M.edges,i.rooms,v),F=new Qe;rb(w,A,i,F);for(let B of r)xd(w,A,B.face,B.field,i.elevation);let L=[],O=[],C=`${Hc()}|${_}`,k=xu.get(i.id),N=k?.look===C?k.pieces:null,U=new Map;xu.set(i.id,{look:C,pieces:U});let V=fa(),H=fa(!0);for(let B of i.furniture){if(V0(B.type))continue;let z=w.count,q=w.p.length/9,X=A.p.length/6,ee=B,W=Zt(i,ee);if(Jc.has(ee.type)){let ne=Qc(s,ee,i.height,W);ee={...ee,x:ne.x,z:ne.z},W=ne.y}let Y=!!ee.rack?.slots?.length&&!!ut(ee.type)?.rack_frame,ie=da(ee),re=`|${W}|${JSON.stringify(ee)}`,te=`${ie?V:""}${re}`,he=N?.get(te);if(he)w.append(he.solid),A.append(he.lines),P.append(he.shadow),bb.hits++;else{let ne=P.p.length/9;Ko(w,A,P,ee,W,!1,!Y),W+ee.h>_+.05&&(cd(w,q,_,Wo),ud(A,X,_,Wo)),bb.misses++,U.set(te,{solid:w.slice(q),lines:A.slice(X*2),shadow:P.slice(ne)})}he&&U.set(te,he);let be=ie?N?.get(`${H}${re}`):void 0;be&&U.set(`${H}${re}`,be),Y&&O.push({f:ee,base:W}),L.push({id:ee.id,start:z,end:w.count})}return{floor:u.geometry(),roomTris:f,holes:p,walls:w.geometry(),water:F.geometry(),lines:A.geometry(),shadow:P.geometry(),buckets:b,openings:x,walls2d:s,openRooms:a,wallBuckets:s.map(B=>m.get(B)),furnitureTris:L,racks:O,roofUnder:o}}var xu=new Map,bb={hits:0,misses:0};function Mb(i){let e=new Set(i);for(let t of xu.keys())e.has(t)||xu.delete(t)}function wb(i,e,t){let n=new Qe,r=new Pt;Zg(n,r,e.f,e.base,t);let o=Math.min(i.cut_height,i.height);return e.base+e.f.h>o+.05&&(cd(n,0,o,Wo),ud(r,0,o,Wo)),{mesh:n.geometry(),lines:r.geometry()}}function qT(i,e,t){let{info:n}=e,r=n.bucket,o=(l,c,h)=>[n.start[0]+n.axis[0]*(l-e.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-e.s0)+n.toRoom[1]*c],s=l=>l>t+1e-6?r:tt,a=Math.max(e.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[e.s0,e.s1])i.segSplit(o(c,l,a),o(c,l,e.top),Ii,t,r);i.seg(o(e.s0,l,e.top),o(e.s1,l,e.top),Ii,s(e.top)),e.sill>.01&&i.seg(o(e.s0,l,e.sill),o(e.s1,l,e.sill),Ii,s(e.sill))}for(let l of[e.s0,e.s1])i.seg(o(l,n.faceRoom,e.top),o(l,-n.faceOut,e.top),Ii,s(e.top)),e.sill>.01&&i.seg(o(l,n.faceRoom,e.sill),o(l,-n.faceOut,e.sill),Ii,s(e.sill)),e.sill<t&&e.top>t&&i.seg(o(l,n.faceRoom,t),o(l,-n.faceOut,t),ld,au+r)}function vd(i,e,t,n,r){let o=a=>(a[0]-e[0])*t[0]+(a[1]-e[1])*t[1],s=i;return Number.isFinite(n)&&(s=xb(s,a=>o(a)-n)),Number.isFinite(r)&&(s=xb(s,a=>r-o(a))),s}function xb(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=e(r),a=e(o);if(s>=0&&t.push(r),s>=0!=a>=0){let l=s/(s-a);t.push([r[0]+(o[0]-r[0])*l,r[1]+(o[1]-r[1])*l])}}return t}var yb=i=>Math.round(i*1e3),Ma=i=>`${yb(i[0])},${yb(i[1])}`,vb=(i,e)=>{let t=Ma(i),n=Ma(e);return t<n?`${t}|${n}`:`${n}|${t}`};function KT(i,e){let t=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=o[0]-r[0],a=o[1]-r[1],l=s*s+a*a;if(l<1e-8)continue;let c=[];for(let u of e){let f=((u[0]-r[0])*s+(u[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*s)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=r;for(let u of c){let f=[r[0]+s*u,r[1]+a*u];Ma(f)!==Ma(h)&&t.push([h,f]),h=f}t.push([h,o])}return t}function ZT(i,e){let t=i.map(h=>({wall:h,edges:KT(h.footprint,e)})),n=new Map,r=new Map;for(let{wall:h,edges:u}of t)for(let[f,d]of u){let p=vb(f,d);n.set(p,(n.get(p)??0)+1);let g=r.get(p);g?g.walls.push(h):r.set(p,{a:f,b:d,walls:[h]})}let o=[];for(let h of r.values())h.walls.length===2&&h.walls[0]!==h.walls[1]&&o.push({a:h.a,b:h.b,walls:[h.walls[0],h.walls[1]]});let s=[],a=new Map,l=(h,u,f)=>{let d=Ma(h),p=a.get(d);p||a.set(d,p={p:h,wall:u,walls:[],d:[]}),p.d.push(f),p.walls.includes(u)||p.walls.push(u)};for(let{wall:h,edges:u}of t)for(let[f,d]of u){if(n.get(vb(f,d))!==1)continue;let p=Math.hypot(d[0]-f[0],d[1]-f[1]);if(p<1e-4)continue;s.push({a:f,b:d,wall:h});let g=[(d[0]-f[0])/p,(d[1]-f[1])/p];l(f,h,g),l(d,h,g)}let c=[];for(let{p:h,wall:u,walls:f,d}of a.values())d.some(p=>d.some(g=>Math.abs(p[0]*g[1]-p[1]*g[0])>.05))&&c.push({p:h,wall:u,walls:f});return{edges:s,corners:c,joints:o}}function bu(i,e){if(!e.length)return[[i.a,i.b]];let t=yu([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=yu([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(t[0]*n[0]+t[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*t[0]+(u[1]-i.wall.a[1])*t[1],o=r(i.a),s=r(i.b),a=Math.min(o,s),l=Math.max(o,s),c=[[a,l]];for(let u of e)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let p=[];return u.s0>f&&p.push([f,u.s0]),u.s1<d&&p.push([u.s1,d]),p});let h=u=>{let f=(u-o)/(s-o||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>o<=s?[h(u),h(f)]:[h(f),h(u)])}function jT(i,e,t){let n=new Qe,r=new j(yd,yd,yd),o=new j(1,1,1),s=.002;for(let a of i)for(let[l,c]of bu(a,(t.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let d=[u/f,-h/f],p=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!e.some(m=>m.points.length>=3&&et(p,m.points)))continue;let g=[l[0]+d[0]*mu,l[1]+d[1]*mu],b=[c[0]+d[0]*mu,c[1]+d[1]*mu];n.tri([l[0],s,l[1]],[g[0],s,g[1]],[b[0],s,b[1]],r,o,o),n.tri([l[0],s,l[1]],[b[0],s,b[1]],[c[0],s,c[1]],r,o,r)}return n}function Sb(i,e){let t=e.furniture.filter(o=>o.type==="stairwell").map(mi),n=i.filter(o=>o.elevation<e.elevation).sort((o,s)=>s.elevation-o.elevation)[0];if(!n)return t;let r=n.furniture.filter(o=>(jc.has(o.type)||o.type==="loft_ladder"||ut(o.type)?.hole)&&n.elevation+(o.mount_y??0)+o.h>=e.elevation-.3).map(mi);return[...t,...r]}function _a(i,e){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(e,i.height??e)}function yu(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function gu(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],r=i[(t+1)%i.length];e+=n[0]*r[1]-r[0]*n[1]}return e>=0?i:[...i].reverse()}var JT=new j(1516340),QT=new j(527897),_d=new j(1779256),Sa=new j(1120808),eA=new j(4163256),Tb=new j(5995161),tA=new j(2240842),nA=new j(1318704),iA=.35,Qo=.8,rA=.2,Ab=.1;function oA(i,e,t,n){let r=-1/0;for(let o of i.floors)if(!(o.elevation>.3))for(let s of o.outdoor??[])s.points.length<3||s.type==="pool"||s.type==="balcony"||jn(s.type)||!et(t,s.points)||(r=Math.max(r,o.elevation+Or(o,s)+Uo[s.type]-e.elevation));return r>n?r-n:0}function Eb(i,e,t,n=!1){if(i.settings.terrain?.earth===!1||e.elevation>.3)return null;let r=ed(i,e);if(!r)return null;let o=(p,g)=>Bo(p,g)-e.elevation,s=n&&r.some(([p,g])=>o(p,g)<-sn-.03);if(!s&&!td(i,e))return null;let a=e.height,l=-iA,c=(p,g)=>Math.min(a,Bo(p,g)-e.elevation),h=new Qe,u=new Qe,f=new Pt,d=(p,g,b,m,y,v,x,_)=>{let w=[g[0]-p[0],g[2]-p[2]];-w[1]*y[0]+w[0]*y[1]>0?(_.tri(p,g,b,v,v,x),_.tri(p,b,m,v,x,x)):(_.tri(p,b,g,v,x,v),_.tri(p,m,b,v,x,x))};for(let p=0;p<r.length;p++){let g=r[p],b=r[(p+1)%r.length],m=Math.hypot(b[0]-g[0],b[1]-g[1]);if(m<1e-4)continue;let y=[(b[0]-g[0])/m,(b[1]-g[1])/m],v=[y[1],-y[0]],x=[(g[0]+b[0])/2+v[0]*.05,(g[1]+b[1])/2+v[1]*.05];et(x,r)&&(v=[-v[0],-v[1]]);let _=(E,T=.012)=>[g[0]+y[0]*E+v[0]*T,g[1]+y[1]*E+v[1]*T],w=[];for(let E of t){if(E.opening.type!=="window"||!E.exterior||E.opening.well===!1)continue;let T=E.start[0]+E.axis[0]*(E.width/2)-E.toRoom[0]*E.faceOut,P=E.start[1]+E.axis[1]*(E.width/2)-E.toRoom[1]*E.faceOut,F=(T-g[0])*y[0]+(P-g[1])*y[1];Math.abs((T-g[0])*v[0]+(P-g[1])*v[1])>.08||F<-.05||F>m+.05||fg(i,e,E.exterior,E.sill,[T,P])&&w.push({s0:Math.max(0,F-E.width/2-Ab),s1:Math.min(m,F+E.width/2+Ab),bottom:Math.max(l+.05,E.sill-rA),rim:E.opening.well_rim??0})}let S=new Set([0,m]);for(let E of w)S.add(E.s0),S.add(E.s1);let M=[...S].sort((E,T)=>E-T),A=[];for(let E=0;E<M.length-1;E++){let T=Math.max(1,Math.ceil((M[E+1]-M[E])/.5));for(let P=0;P<T;P++)A.push(M[E]+(M[E+1]-M[E])*P/T)}A.push(m);for(let E=0;E<A.length-1;E++){let T=A[E],P=A[E+1],F=w.find(B=>T>=B.s0-1e-6&&P<=B.s1+1e-6),L=_(T),O=_(P),C=c(L[0],L[1]),k=c(O[0],O[1]),N=F?Math.min(C,F.bottom):C,U=F?Math.min(k,F.bottom):k;if(N>l+.01||U>l+.01){let B=Math.min(N,l),z=Math.min(U,l);d([L[0],B,L[1]],[O[0],z,O[1]],[O[0],Math.max(U,l),O[1]],[L[0],Math.max(N,l),L[1]],v,QT,JT,h)}let V=o(L[0],L[1]),H=o(O[0],O[1]);if(s&&(V<-sn-.01||H<-sn-.01)&&d([L[0],Math.min(V,-sn),L[1]],[O[0],Math.min(H,-sn),O[1]],[O[0],-sn,O[1]],[L[0],-sn,L[1]],v,nA,tA,h),C>l||k>l||s&&(V<-sn||H<-sn)){let B=s?Math.min(V,Math.max(C,l)):Math.max(C,l),z=s?Math.min(H,Math.max(k,l)):Math.max(k,l);f.seg([L[0],B+.004,L[1]],[O[0],z+.004,O[1]],eA)}}for(let E of w){let T=_(E.s0,0),P=_(E.s1,0),F=[T[0]+v[0]*Qo,T[1]+v[1]*Qo],L=[P[0]+v[0]*Qo,P[1]+v[1]*Qo],O=[(T[0]+P[0]+F[0]+L[0])/4,(T[1]+P[1]+F[1]+L[1])/4],C=oA(i,e,O,c(O[0],O[1])),k=Math.max(E.rim,C>0?C+.02:0),N=q=>c(q[0],q[1])+k,U=E.bottom,V=(q,X)=>[q[0],X,q[1]];u.tri(V(T,U),V(P,U),V(L,U),Sa),u.tri(V(T,U),V(L,U),V(F,U),Sa);let H=(q,X)=>{u.tri(V(q,U),V(X,U),V(X,N(X)),Sa,Sa,_d),u.tri(V(q,U),V(X,N(X)),V(q,N(q)),Sa,_d,_d)};H(T,F),H(P,L),H(F,L);let B=q=>[q[0],N(q)+.01,q[1]];for(let[q,X]of[[T,P],[P,L],[L,F],[F,T]])f.seg(B(q),B(X),Tb);let z=Math.max(3,Math.round((E.s1-E.s0)/.12));for(let q=1;q<z;q++){let X=q/z,ee=[T[0]+(P[0]-T[0])*X,T[1]+(P[1]-T[1])*X];f.seg(B(ee),B([ee[0]+v[0]*Qo,ee[1]+v[1]*Qo]),Tb)}}}return h.count||u.count?{earth:h,wells:u,lines:f}:null}var Rb=i=>Math.round(i*1e3)/1e3;function sA(i,e,t,n){let r=Math.hypot(n[0]-t[0],n[1]-t[1]);if(r<.01)return!1;let o=[(n[0]-t[0])/r,(n[1]-t[1])/r],s=l=>Math.abs(-(l[0]-t[0])*o[1]+(l[1]-t[1])*o[0]),a=l=>(l[0]-t[0])*o[0]+(l[1]-t[1])*o[1];return i.rooms.some(l=>l.id!==e&&l.points.some((c,h)=>{let u=l.points[(h+1)%l.points.length];return s(c)>.02||s(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function Pb(i,e,t,n,r,o=.05){let s=i.rooms.find(f=>f.points.length>=3&&et([e.x,e.z],f.points));if(!s)return[t,n];let a=s.points,l=Pn(a)>=0?1:-1,c=mi({...e}),h=t,u=n;for(let f=0;f<2;f++){let d=mi({...e,x:h,z:u});for(let p=0;p<a.length;p++){let g=a[p],b=a[(p+1)%a.length],m=Math.hypot(b[0]-g[0],b[1]-g[1]);if(m<.05)continue;let y=[(b[0]-g[0])/m,(b[1]-g[1])/m],v=[-y[1]*l,y[0]*l],x=sA(i,s.id,g,b)?r/2:0,_=0;d.forEach((w,S)=>{let M=(w[0]-g[0])*y[0]+(w[1]-g[1])*y[1];if(M<-.01||M>m+.01)return;let A=(w[0]-g[0])*v[0]+(w[1]-g[1])*v[1]-x,E=c[S];(E[0]-g[0])*v[0]+(E[1]-g[1])*v[1]-x<-o||A<_&&(_=A)}),_<-1e-4&&(h-=v[0]*_,u-=v[1]*_)}}return[Rb(h),Rb(u)]}var Ib=8;var Lb=4;function Md(i){let e=mi(i),t=1/0,n=-1/0,r=1/0,o=-1/0;for(let[s,a]of e)s<t&&(t=s),s>n&&(n=s),a<r&&(r=a),a>o&&(o=a);return{x0:t,x1:n,z0:r,z1:o}}function Fb(i){let e=Md(i);return[(e.x1-e.x0)/2,(e.z1-e.z0)/2]}function kb(i,e){let t=[],n=[];for(let r of i){let o=(r.x0+r.x1)/2,s=(r.z0+r.z1)/2;t.push({v:o,kind:"centre",from:r.z0,to:r.z1},{v:r.x0,kind:"edge",from:r.z0,to:r.z1},{v:r.x1,kind:"edge",from:r.z0,to:r.z1}),n.push({v:s,kind:"centre",from:r.x0,to:r.x1},{v:r.z0,kind:"edge",from:r.x0,to:r.x1},{v:r.z1,kind:"edge",from:r.x0,to:r.x1})}for(let r of e){if(r.points.length<3)continue;let o=1/0,s=-1/0,a=1/0,l=-1/0;for(let[c,h]of r.points)c<o&&(o=c),c>s&&(s=c),h<a&&(a=h),h>l&&(l=h);t.push({v:(o+s)/2,kind:"room",from:a,to:l}),n.push({v:(a+l)/2,kind:"room",from:o,to:s})}return{xs:t,zs:n}}function Cb(i,e,t,n,r,o,s=Lb){let a=null,l=0,c=o,h=2;for(let u=0;u<r.length;u++){let f=r[u];if(f.from-n>s||t-f.to>s)continue;let d=f.kind==="room"?0:1;if(d>h||d===0&&((t+n)/2<f.from||(t+n)/2>f.to))continue;let p,g;if(f.kind==="edge"){let b=Math.abs(i-e-f.v),m=Math.abs(i+e-f.v);p=b<=m?f.v+e:f.v-e,g=Math.min(b,m)}else p=f.v,g=Math.abs(i-f.v);g>o||d===h&&g>=c||(a=f,l=p,c=g,h=d)}return a?{v:l,line:a}:null}var aA=[];function Db(i,e,t,n,r=Lb){let[o,s]=e,a=Cb(i[0],o,i[1]-s,i[1]+s,t.xs,n,r),l=Cb(i[1],s,i[0]-o,i[0]+o,t.zs,n,r);if(!a&&!l)return{p:i,x:!1,z:!1,guides:aA};let c=a?a.v:i[0],h=l?l.v:i[1],u=[];if(a){let f=a.line.kind==="edge"?a.line.v:c;u.push({a:[f,Math.min(a.line.from,h-s)],b:[f,Math.max(a.line.to,h+s)],kind:a.line.kind,axis:"x"})}if(l){let f=l.line.kind==="edge"?l.line.v:h;u.push({a:[Math.min(l.line.from,c-o),f],b:[Math.max(l.line.to,c+o),f],kind:l.line.kind,axis:"z"})}return{p:[c,h],x:!!a,z:!!l,guides:u}}function Ob(i,e,t){return i<(e?7:6)*(t?.6:1)}var lA=500,cA=1e3;function Nb(i,e){let t=e-i.timeStamp;return t>cA&&t<6e4}var Ub=.12,Bb=1.35,uA=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,vu=class{view={target:new $,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;grabId=null;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(e,t,n){this.el=e,this.camera=t,this.events=n;let r=(o,s,a)=>{e.addEventListener(o,s,a),this.listeners.push([o,s])};r("pointerdown",o=>this.onDown(o)),r("pointermove",o=>this.onMove(o)),r("pointerup",o=>this.onUp(o)),r("pointercancel",o=>this.onUp(o)),r("wheel",o=>this.onWheel(o),{passive:!1}),r("contextmenu",o=>o.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[e,t]of this.listeners)this.el.removeEventListener(e,t)}get active(){return this.pointers.size>0||this.flight!==null}update(e){let t=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(e-c)/h),f=uA(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),t=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=wd(this.view.phi+this.velocity.phi,Ub,Bb),this.velocity.theta*=.9,this.velocity.phi*=.9,t=!0);let{target:n,radius:r,theta:o,phi:s}=this.view;return this.camera.position.set(n.x+r*Math.sin(s)*Math.sin(o),n.y+r*Math.cos(s),n.z+r*Math.sin(s)*Math.cos(o)),this.camera.lookAt(n),t}flyTo(e,t=700,n=!1){let r={...this.view,target:this.view.target.clone()},o=e.theta??r.theta;for(;o-r.theta>Math.PI;)o-=2*Math.PI;for(;o-r.theta<-Math.PI;)o+=2*Math.PI;let s=this.angleLock&&!n?{target:(e.target??r.target).clone(),radius:e.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(e.target??r.target).clone(),radius:e.radius??r.radius,theta:o,phi:e.phi??r.phi};this.velocity={theta:0,phi:0},t<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:r,to:s,start:performance.now(),duration:t},this.events.change()}get goal(){let e=this.flight?.to??this.view;return{...e,target:e.target.clone()}}get busy(){return this.flight!==null||this.pointers.size>0}local(e){let t=this.el.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}onDown(e){if(!this.grabbing){if(this.el.setPointerCapture(e.pointerId),this.pointers.size===0&&e.button===0&&this.events.grab&&this.events.grab(...this.local(e))){this.grabbing=!0,this.grabId=e.pointerId,this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:e.clientX,y:e.clientY,time:performance.now(),moved:!1};let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},lA)}else this.down=null,this.pinch=this.pinchState()}}onMove(e){let t=this.pointers.get(e.pointerId);if(!t)return;if(this.grabbing){if(e.pointerId!==this.grabId)return;this.events.drag&&this.events.drag(...this.local(e),e.altKey);return}if(Nb(e,performance.now())&&!this.swiping){t.x=e.clientX,t.y=e.clientY,this.pointers.size>1&&(this.pinch=this.pinchState());return}let n=e.clientX-t.x,r=e.clientY-t.y;if(this.swiping){this.events.swipeMove?.(e.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let o=this.el.getBoundingClientRect();if(this.pointers.size===1&&t.button===0&&!e.shiftKey&&this.events.swipeStart?.(this.down.x-o.left,this.down.y-o.top,e.clientX-this.down.x,e.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(e.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){t.x=e.clientX,t.y=e.clientY;return}let o=t.type==="mouse";if(o&&!this.leftDragTurns&&t.button===0){t.x=e.clientX,t.y=e.clientY;return}if(this.angleLock||(t.button===1||t.button===2||e.shiftKey)&&(this.leftDragTurns||!o))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=wd(this.view.phi+c,Ub,Bb),this.velocity={theta:l,phi:c}}t.x=e.clientX,t.y=e.clientY}else{t.x=e.clientX,t.y=e.clientY;let o=this.pinchState();this.pinch&&o&&(this.zoom(this.pinch.dist/Math.max(1,o.dist)),this.pan(o.mid[0]-this.pinch.mid[0],o.mid[1]-this.pinch.mid[1])),this.pinch=o}this.events.change()}onUp(e){if(this.pointers.has(e.pointerId)){if(this.grabbing){if(e.pointerId!==this.grabId)return;this.grabbing=!1,this.grabId=null,this.pointers.delete(e.pointerId),this.events.drop?.();return}if(this.pointers.delete(e.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&e.type==="pointerup"&&performance.now()-this.down.time<400){let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,o=performance.now();o-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=o,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(e){e.preventDefault(),!Nb(e,performance.now())&&(this.flight=null,this.zoom(Math.exp(e.deltaY*(e.deltaMode===1?.05:.0015))),this.events.change())}zoom(e){this.view.radius=wd(this.view.radius*e,this.minRadius,this.maxRadius)}pan(e,t){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,o=new $(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),s=new $(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(o,-e*r),this.view.target.addScaledVector(s,t*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t.x-n.x,t.y-n.y),mid:[(t.x+n.x)/2,(t.y+n.y)/2]}}};function wd(i,e,t){return Math.min(t,Math.max(e,i))}function Nn(i,e,t="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=e.standing,n.uniforms.uGlass=e.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${t==="glass"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${t==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${t==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),t==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${t}`,i.userData.fp3dFold={masks:e,role:t},i}var wu=5,_u=512,zb=.7,Mu=class{projectors=new Map;loader=new Er;loggedIds="";depthMaterial=new Ye({colorWrite:!1,side:st});onChange;constructor(e){this.onChange=e}get active(){return this.projectors.size>0}resetPoses(){for(let e of this.projectors.values())e.poseKey=""}set(e){let t=new Map(e.map(r=>[r.id,r.url]));for(let[r,o]of this.projectors)t.has(r)||this.drop(o);for(let[r,o]of t){let s=this.projectors.get(r);if(!s){let a=new Kt(_u,_u);a.depthTexture=new ui(_u,_u),s={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new rn(60,16/9,zb,40),target:a,matrix:new wt,uniforms:{uProjMat:{value:new wt},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},s.camera.layers.set(wu),this.projectors.set(r,s)}s.url=o,this.fetch(s)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`Home 3D lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(e){if(e.loading||e.url===e.shown||!e.url)return;let t=e.url;e.loading=!0,this.loader.load(t,n=>{if(e.loading=!1,e.shown=t,this.projectors.get(e.id)!==e){n.dispose();return}n.colorSpace=Lt;let r=n.image;r?.width&&r.height&&(e.aspect=r.width/r.height),e.texture||console.info(`Home 3D lab: first picture of ${e.id}`,r?.width,"x",r?.height),e.texture?.dispose(),e.texture=n,e.uniforms.uProjTex.value=n,e.poseKey="",this.onChange(),this.fetch(e)},void 0,()=>{e.loading=!1,e.shown=t,console.warn(`Home 3D lab: the picture of ${e.id} could not be loaded`)})}update(e,t,n,r,o){for(let s of this.projectors.values()){let a=s.texture?r(s.id):null;if(s.texture&&!a&&!s.noPoseLogged&&(s.noPoseLogged=!0,console.warn(`Home 3D lab: ${s.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!a){for(let g of s.overlays.values())g.visible=!1;continue}let l=new Set(n.map(g=>g.key));for(let[g,b]of s.overlays)l.has(g)||(b.parent?.remove(b),b.material.dispose(),s.overlays.delete(g));for(let g of n){let b=s.overlays.get(g.key);(!b||b.parent!==g.parent)&&(b&&(b.parent?.remove(b),b.material.dispose()),b=new Me(g.geometry,this.material(s,g.masks)),b.renderOrder=2.5,b.frustumCulled=!1,g.parent.add(b),s.overlays.set(g.key,b)),b.geometry!==g.geometry&&(b.geometry=g.geometry),b.visible=g.visible}let c=`${a.position.toArray().map(g=>g.toFixed(3))},${a.direction.toArray().map(g=>g.toFixed(3))},${a.fov},${a.reach},${s.aspect.toFixed(3)},${o}`;if(c===s.poseKey)continue;s.poseKey=c;let h=s.camera,u=Math.min(150,Math.max(20,a.fov))*(Math.PI/180);h.fov=2*Math.atan(Math.tan(u/2)/s.aspect)*180/Math.PI,h.aspect=s.aspect,h.far=a.reach,h.near=zb,h.position.copy(a.position),h.lookAt(a.position.clone().add(a.direction)),h.updateProjectionMatrix(),s.uniforms.uNearFar.value=[h.near,h.far],h.updateMatrixWorld(),s.uniforms.uProjMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);let f=[];for(let g of this.projectors.values())for(let b of g.overlays.values())b.visible&&f.push(b);for(let g of f)g.visible=!1;let d=e.getRenderTarget(),p=t.overrideMaterial;t.overrideMaterial=this.depthMaterial,e.setRenderTarget(s.target),e.clear(),e.render(t,h),e.setRenderTarget(d),t.overrideMaterial=p;for(let g of f)g.visible=!0}}dispose(){for(let e of[...this.projectors.values()])this.drop(e);this.depthMaterial.dispose()}drop(e){for(let t of e.overlays.values())t.parent?.remove(t),t.material.dispose();e.texture?.dispose(),e.target.dispose(),this.projectors.delete(e.id),this.onChange()}material(e,t){let n=new Ye({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=t?Nn(n,t,"solid").onBeforeCompile:null;return n.onBeforeCompile=(o,s)=>{r?.(o,s),Object.assign(o.uniforms,e.uniforms),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${t?"fold":"plain"}`,n}};function Vb(i,e){return Math.hypot(e[0]-i[0],e[1]-i[1],e[2]-i[2])}function Gb(i,e,t=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[o,s,a]=[i[r-1],i[r],i[r+1]],l=Vb(o,s),c=Vb(s,a),h=Math.min(e,l*.45,c*.45),u=[(o[0]-s[0])/l,(o[1]-s[1])/l,(o[2]-s[2])/l],f=[(a[0]-s[0])/c,(a[1]-s[1])/c,(a[2]-s[2])/c];if(h<.005||u[0]*f[0]+u[1]*f[1]+u[2]*f[2]<-.999){n.push(s);continue}let d=[s[0]+u[0]*h,s[1]+u[1]*h,s[2]+u[2]*h],p=[s[0]+f[0]*h,s[1]+f[1]*h,s[2]+f[2]*h];for(let g=0;g<=t;g++){let b=g/t,m=(1-b)*(1-b),y=2*(1-b)*b,v=b*b;n.push([m*d[0]+y*s[0]+v*p[0],m*d[1]+y*s[1]+v*p[1],m*d[2]+y*s[2]+v*p[2]])}}return n.push(i[i.length-1]),n}var Hb=new j(7568261),Wb=new j(4869974),hA=new j(3116287),Xb=new j(3948872),Sd=qr([.35,.85,.4]),$b=10;function qr(i){let e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]}function Ta(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function Yb(i){let e=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],t=qr(Ta(i,e));return[t,qr(Ta(i,t))]}function Fi(i,e){let t=.5+.5*Math.max(0,e[0]*Sd[0]+e[1]*Sd[1]+e[2]*Sd[2]);return i.clone().multiplyScalar(t)}function es(i,e,t,n,r,o=!1){let s=qr([t[0]-e[0],t[1]-e[1],t[2]-e[2]]),[a,l]=Yb(s),c=(h,u)=>{let f=u/$b*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[h[0]+d[0]*n,h[1]+d[1]*n,h[2]+d[2]*n],n:d}};for(let h=0;h<$b;h++){let u=c(e,h),f=c(e,h+1),d=c(t,h),p=c(t,h+1);i.tri(u.p,p.p,d.p,Fi(r,u.n),Fi(r,p.n),Fi(r,d.n)),i.tri(u.p,f.p,p.p,Fi(r,u.n),Fi(r,f.n),Fi(r,p.n)),o&&(i.tri([...e],f.p,u.p,Fi(r,[-s[0],-s[1],-s[2]])),i.tri([...t],d.p,p.p,Fi(r,s)))}}function fA(i,e,t,n,r,o,s,a){let l=qr(Ta(t,n)),c=(u,f,d)=>[e[0]+t[0]*u*r+n[0]*f*o+l[0]*d*s,e[1]+t[1]*u*r+n[1]*f*o+l[1]*d*s,e[2]+t[2]*u*r+n[2]*f*o+l[2]*d*s],h=[];for(let[u,f]of[[t,.5],[[-t[0],-t[1],-t[2]],-.5]])h.push([u,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[u,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])h.push([u,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[u,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])h.push([u,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[u,f]of h){let d=Fi(a,u);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function qb(i,e){if(e.points.length<2)return;let t=e.radius,n=Gb(e.points,t*2.2,4);for(let r=1;r<n.length;r++){let[o,s]=[n[r-1],n[r]];if(Math.hypot(s[0]-o[0],s[1]-o[1],s[2]-o[2])<1e-4)continue;let a=o[1]<-.02&&s[1]<-.02?Hb.clone().multiplyScalar(.55):Hb;es(i,o,s,t,a,r===1||r===n.length-1)}for(let r of e.fittings){let o=s=>[[r.p[0]-r.dir[0]*s,r.p[1]-r.dir[1]*s,r.p[2]-r.dir[2]*s],[r.p[0]+r.dir[0]*s,r.p[1]+r.dir[1]*s,r.p[2]+r.dir[2]*s]];if(r.kind==="sleeve"){let[s,a]=o(.03);es(i,s,a,t*1.22,Wb,!0)}else if(r.kind==="sight"){let[s,a]=o(.08);es(i,s,a,t*1.08,e.water?new j(...e.water).multiplyScalar(.9):new j(10475240),!0);for(let l of o(.08)){let[c,h]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];es(i,c,h,t*1.3,Wb,!0)}}else{let[s,a]=o(.055);es(i,s,a,t*1.4,Xb,!0);let[l]=Yb(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],h=[r.p[0]+c[0]*t*2,r.p[1]+c[1]*t*2,r.p[2]+c[2]*t*2];es(i,[r.p[0]+c[0]*t*1.3,r.p[1]+c[1]*t*1.3,r.p[2]+c[2]*t*1.3],h,t*.35,Xb,!0);let u=r.open===!1?qr(Ta(r.dir,c)):r.dir,f=qr(Ta(u,c)),d=[h[0]+u[0]*.045,h[1]+u[1]*.045,h[2]+u[2]*.045];fA(i,d,u,f,.1,.028,.012,hA)}}}function dA(i,e){let t=ut(e);if(!t)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:e,x:i.x,z:i.z,rotation:i.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}function Td(i,e){if(!i.furniture.some(n=>n.type==="parking"&&e.has(n.id)))return i;let t=i.furniture.flatMap(n=>{let r=n.type==="parking"?e.get(n.id):void 0,o=r?dA(n,r):null;return o?[n,o]:[n]});return{...i,furniture:t}}function Ad(i){let e=Math.max(0,Math.min(1,i.t)),t=e*e*(3-2*e);return[i.from[0]+(i.to[0]-i.from[0])*t,i.from[1]+(i.to[1]-i.from[1])*t]}var Kb=(i,e)=>Math.abs(i[0]-e[0])<.001&&Math.abs(i[1]-e[1])<.001;function Zb(i,e,t,n,r){let o=new Map;if(!r)return o;for(let s of new Set([...i.keys(),...e.keys(),...n.keys()])){let a=t.get(s);if(!a)continue;let l=e.get(s)??a,c=n.get(s);if(c&&c.t<1&&Kb(c.to,l)){o.set(s,c);continue}let h=c&&c.t<1?Ad(c):i.get(s)??a;Kb(h,l)||o.set(s,{from:h,to:l,t:0})}return o}function jb(i,e,t=0,n=.3,r=.3,o=.2){let s=e[0]-i[0],a=e[1]-i[1],l=Math.hypot(s,a),c=l-n;if(c<=t)return[];let h=f=>[i[0]+s*f/l,i[1]+a*f/l],u=[];for(let f=t;f<c;f+=r+o)u.push([h(f),h(Math.min(c,f+r))]);return u}var pA=new Set([...jc,"stairwell"]);function Jb(i,e,t=()=>""){let n=JSON.stringify({extra:e,settings:i.settings,floors:i.floors.map(r=>({...r,furniture:r.furniture.filter(o=>pA.has(o.type)),placements:void 0}))});return new Map(i.floors.map(r=>[r.id,`${n}
${t(r)}
${JSON.stringify(r)}`]))}var Su=class{depth=0;wanted=null;rebuild;constructor(e){this.rebuild=e}request(e){if(!this.depth)return this.rebuild(e);this.wanted=this.wanted!==!1&&e}run(e){this.depth++;try{e()}finally{if(this.depth--,!this.depth&&this.wanted!==null){let t=this.wanted;this.wanted=null,this.rebuild(t)}}}};function Qb(i,e){let t=i.floors.find(r=>r.id===e)??Li(i),n=t?.elevation??0;return[...i.floors].sort((r,o)=>r===t?-1:o===t?1:Math.abs(r.elevation-n)-Math.abs(o.elevation-n)||o.elevation-r.elevation).map(r=>r.id)}var ex=8,tx=1024,ki=6,Tu=class{group=new At;shadow;target=null;arc=new At;glow=bA();textures=[];constructor(){this.shadow=new Me(new Xn(1,1),new Ye({color:0,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,this.arc.visible=!1,this.group.add(this.shadow,this.arc)}setShadow(e,t,n,r,o,s,a=0){let[l,c,h,u]=[n[0]-.5,n[1]-.5,n[2]+.5,n[3]+.5],f=Math.min(tx,Math.max(32,Math.ceil((h-l)*ex))),d=Math.min(tx,Math.max(32,Math.ceil((u-c)*ex)));if(!this.target||this.target.width!==f||this.target.height!==d){this.target?.dispose(),this.target=new Kt(f,d,{minFilter:qt,magFilter:qt,depthBuffer:!1});let w=this.shadow.material;w.map=this.target.texture,w.needsUpdate=!0}let p=new ci,g=w=>{let S=new Float32Array(w.length/2*3);for(let A=0,E=0;A<w.length;A+=2,E+=3)S.set([w[A],-w[A+1],0],E);let M=new Ve;return M.setAttribute("position",new _e(S,3)),M},b=new Me(g(t),new Ye({color:16777215,side:st})),m=[];for(let w of r)for(let S of bn(w))for(let M of S)m.push(w[M][0],w[M][1]);let y=new Me(g(m),new Ye({color:0,transparent:!0,opacity:0,blending:kn,side:st}));y.renderOrder=1,p.add(b,y);let v=new Rn(l,h,-c,-u,.1,10);v.position.z=1;let x=e.getRenderTarget();e.setRenderTarget(this.target),e.clear(),e.render(p,v),e.setRenderTarget(x);for(let w of[b,y])w.geometry.dispose(),w.material.dispose();this.shadow.scale.set(h-l,u-c,1),this.shadow.position.set((l+h)/2,o,(c+u)/2);let _=this.shadow.material;_.opacity=s,_.color.set(a),this.shadow.visible=s>.01}hideShadow(){this.shadow.visible=!1}showShadow(e){let t=this.shadow.material;this.shadow.visible=e&&!!t.map&&t.opacity>.01}setArc(e){if(this.clearArc(),e.fade<=.01||e.points.length<2)return;let t=e.light?Mn:Rt,n=(o,s)=>{let a=gA(e.points.map(c=>c.at),o,e.points.map(c=>mA(c.elevation,e.light).multiplyScalar(c.t<=e.now?1:e.light?.75:.5))),l=new Me(a,new Ye({vertexColors:!0,transparent:!0,opacity:s*e.fade,blending:t,depthWrite:!1}));return l.renderOrder=6,l};this.arc.add(n(e.size*.09,e.light?.95:1)),e.light||this.arc.add(n(e.size*.3,.22));let r=new Zi(nx(e.hours.flat()),new Pi({color:e.light?13658624:16767370,map:this.glow,size:e.size*.55,transparent:!0,opacity:e.fade,blending:t,depthWrite:!1}));if(r.renderOrder=6,this.arc.add(r),e.sun){let o=this.sprite(xA(e.light),e.size*5,e.size*5,e.fade,t);o.position.set(...e.sun),this.arc.add(o)}for(let o of e.labels){let s=this.sprite(yA(`${o.rising?"\u2191":"\u2193"} ${o.text}`,e.light),e.size*5.2,e.size*1.7,e.fade,Mn,!0);s.position.set(...o.at),this.arc.add(s)}this.buildRing(e),this.arc.visible=!0}buildRing(e){let{center:t,r:n,north:r,letters:o}=e.ring,s=t[1]+.03,a=(h,u)=>{let f=r+h*Math.PI/180;return[t[0]+Math.sin(f)*u,s,t[2]-Math.cos(f)*u]},l=[];for(let h=0;h<360;h+=3)l.push(...a(h,n),...a(h+3,n));for(let h=0;h<360;h+=15)l.push(...a(h,n),...a(h,n*(h%90===0?.93:.97)));let c=new Ht(nx(l),new Jt({color:e.light?9071162:16761963,transparent:!0,opacity:(e.light?.45:.32)*e.fade,blending:e.light?Mn:Rt,depthWrite:!1}));c.renderOrder=6,this.arc.add(c),o.forEach((h,u)=>{let f=this.sprite(vA(h,u===0,e.light),e.size*1.6,e.size*1.6,e.fade,Mn,!0);f.position.set(...a(u*90,n*1.07)),f.position.y+=e.size*.6,this.arc.add(f)})}sprite(e,t,n,r,o,s=!1){this.textures.push(e);let a=new Ts(new To({map:e,transparent:!0,opacity:r,blending:o,depthWrite:!1,depthTest:!s}));return a.scale.set(t,n,1),a.renderOrder=6,a}hideArc(){this.clearArc()}clearArc(){for(let e of[...this.arc.children]){this.arc.remove(e);let t=e;t.geometry?.dispose(),t.material.dispose()}for(let e of this.textures)e.dispose();this.textures=[],this.arc.visible=!1}dispose(){this.clearArc(),this.target?.dispose(),this.glow.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}};function nx(i){let e=new Ve;return e.setAttribute("position",new _e(i,3)),e}function mA(i,e){let t=Math.min(1,Math.max(0,i/35)),n=new j(e?13778970:16730666),r=new j(e?14711552:16753978),o=new j(e?15769600:16773832);return t<.4?n.lerp(r,t/.4):r.lerp(o,(t-.4)/.6)}function gA(i,e,t){let n=[],r=[],o=[],s=new $(0,1,0);for(let l=0;l<i.length;l++){let c=new $(...i[l]),h=new $(...i[Math.max(0,l-1)]),f=new $(...i[Math.min(i.length-1,l+1)]).sub(h).normalize(),d=new $().crossVectors(f,s);d.lengthSq()<1e-6&&d.set(1,0,0),d.normalize();let p=new $().crossVectors(d,f).normalize();for(let g=0;g<ki;g++){let b=g/ki*Math.PI*2,m=c.clone().addScaledVector(d,Math.cos(b)*e).addScaledVector(p,Math.sin(b)*e);n.push(m.x,m.y,m.z),r.push(t[l].r,t[l].g,t[l].b)}if(l!==0)for(let g=0;g<ki;g++){let b=(l-1)*ki+g,m=(l-1)*ki+(g+1)%ki,y=l*ki+g,v=l*ki+(g+1)%ki;o.push(b,y,v,b,v,m)}}let a=new Ve;return a.setAttribute("position",new _e(n,3)),a.setAttribute("color",new _e(r,3)),a.setIndex(o),a}function Au(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function bA(){let[i,e]=Au(64,64),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.8)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new pn(i)}function xA(i){let[e,t]=Au(256,256);t.translate(128,128);for(let r=0;r<12;r++){t.save(),t.rotate(r/12*Math.PI*2);let o=r%2===0?124:92,s=t.createLinearGradient(0,0,0,-o);s.addColorStop(0,i?"rgba(240,140,0,0.75)":"rgba(255,214,140,0.7)"),s.addColorStop(1,"rgba(255,170,60,0)"),t.fillStyle=s,t.beginPath(),t.moveTo(-7,0),t.lineTo(0,-o),t.lineTo(7,0),t.fill(),t.restore()}let n=t.createRadialGradient(0,0,0,0,0,80);return n.addColorStop(0,i?"rgba(255,190,60,0.95)":"rgba(255,236,190,1)"),n.addColorStop(.3,i?"rgba(245,150,20,0.8)":"rgba(255,190,90,0.75)"),n.addColorStop(1,"rgba(255,140,40,0)"),t.fillStyle=n,t.beginPath(),t.arc(0,0,80,0,Math.PI*2),t.fill(),t.fillStyle=i?"#fff3cf":"#fffaf0",t.beginPath(),t.arc(0,0,22,0,Math.PI*2),t.fill(),new pn(e)}function yA(i,e){let[t,n]=Au(320,104);n.font="600 52px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let r=Math.min(304,n.measureText(i).width+56),o=(320-r)/2;return n.beginPath(),typeof n.roundRect=="function"?n.roundRect(o,10,r,84,42):n.rect(o,10,r,84),n.fillStyle=e?"rgba(255,248,236,0.92)":"rgba(20,12,4,0.72)",n.fill(),n.lineWidth=4,n.strokeStyle=e?"rgba(224,123,0,0.9)":"rgba(255,196,107,0.85)",n.stroke(),n.fillStyle=e?"#a34f00":"#ffe2a8",n.fillText(i,160,54),new pn(t)}function vA(i,e,t){let[n,r]=Au(96,96);return r.font=`${e?800:600} 64px system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=t?"rgba(255,255,255,0.9)":e?"rgba(255,90,60,0.9)":"rgba(255,196,107,0.8)",r.shadowBlur=12,r.fillStyle=e?t?"#c0301a":"#ff6a4a":t?"#7a5a2a":"#ffd9a0",r.fillText(i,48,52),new pn(n)}function lx(i,e,t){return/\b(iPhone|iPod)\b/.test(i)||/Android/.test(i)&&/\bMobile\b/.test(i)||t>0&&e>0&&e<600?"phone":/\biPad\b/.test(i)||/Android|\bSilk\b/.test(i)||/Macintosh/.test(i)&&t>1?"tablet":"desktop"}function cx(i,e,t){return i==="phone"||!t?null:e?{size:1024,soft:!1,live:!1}:{size:2048,soft:!0,live:!0}}var ix=Math.PI/180,_i=i=>Math.min(1,Math.max(0,i)),vi=(i,e,t)=>i.map((n,r)=>n+(e[r]-n)*t);function ux(i,e,t){if(!i)return{dir:[0,1,0],sun:0,color:[1,1,1],sky:1.6,shadow:0};let n=_i(e),r=(t+i.azimuth)*ix,o=Math.max(0,i.elevation)*ix,s=[Math.sin(r)*Math.cos(o),Math.sin(o),-Math.cos(r)*Math.cos(o)],l=2.6*_i(i.elevation/10)*(1-.75*n),c=_i((i.elevation+6)/12);return{dir:s,sun:l,color:vi([1,.62,.38],[1,.96,.9],_i(i.elevation/20)),sky:.35+c*(.75+.4*n),shadow:l>0?1-.8*n:0}}var rx={top:[74,140,214],horizon:[178,208,234]},ox={top:[148,155,164],horizon:[192,197,203]},sx={top:[8,12,26],horizon:[24,32,54]},_A=[244,156,104],ax=[186,190,195],MA=[88,112,70],wA=[226,231,238];function Ed(i,e){let t=e??{cloud:0,rain:0,snow:0,fog:0},n=i??90,r=_i(t.cloud),o=_i((n+6)/12),s=1-.32*_i(t.rain),a=vi(rx.top,ox.top,r).map(p=>p*s),l=vi(rx.horizon,ox.horizon,r).map(p=>p*s),c=_i(1-Math.abs(n-1)/7)*(1-r);l=vi(l,_A,c*.85),a=vi(a,[92,112,168],c*.4);let h=_i(t.fog);a=vi(a,ax,h),l=vi(l,ax,h),a=vi(sx.top,a,o),l=vi(sx.horizon,l,o);let f=vi(MA,wA,_i(t.snow*1.25)).map(p=>p*(.15+.85*o)),d=p=>p.map(g=>Math.round(g));return{top:d(a),horizon:d(l),ground:d(f)}}function SA(i){return i instanceof Ye&&i.userData.fp3dThemed==="surface"&&i.blending===Mn}var Eu=class{group=new At;sunLight=new Bs(16777215,0);skyLight=new Ns(12900590,5791818,1);lawn;twins=new Map;depths=new WeakMap;meshes=new Set;on=!1;plan=null;smooth=!1;dirty=!0;constructor(){let e=new ks({color:5795914,flatShading:!0,transparent:!0,depthWrite:!1});e.alphaMap=TA(),this.lawn=new Me(new Tr(1,48),e),this.lawn.rotation.x=-Math.PI/2,this.lawn.receiveShadow=!0,this.lawn.renderOrder=-2,this.group.add(this.sunLight,this.sunLight.target,this.skyLight,this.lawn)}get active(){return this.on}enable(e,t){if(t!==this.on){if(this.on=t,this.dirty=!0,t){e.add(this.group);return}e.remove(this.group);for(let n of this.meshes){let r=n.material.userData.fp3dBasic;r&&(n.material=r),n.castShadow=!1,n.receiveShadow=!1,n.customDepthMaterial=void 0}this.meshes.clear()}}setPlan(e,t){let n=this.plan;this.plan=t,this.smooth=!!e.getContextAttributes?.()?.antialias;let r=this.on&&!!t,o=t?.size??0;if(e.shadowMap.enabled!==r){e.shadowMap.enabled=r;for(let s of this.twins.values())s.needsUpdate=!0;this.lawn.material.needsUpdate=!0}e.shadowMap.type=t?.soft?Rr:Lh,e.shadowMap.autoUpdate=!!t?.live,this.sunLight.castShadow=r,o&&(!n||n.size!==o)&&(this.sunLight.shadow.map?.dispose(),this.sunLight.shadow.map=null,this.sunLight.shadow.mapSize.set(o,o)),this.sunLight.shadow.radius=t?.soft?3:1,this.sunLight.shadow.bias=t?.soft?-6e-4:-.002,this.dirty=!0}touch(){this.dirty=!0}update(e,t,n,r){let o=ux(e,t?.cloud??0,n),s=Ed(e?e.elevation:null,t),a=h=>new j().setRGB(h[0]/255,h[1]/255,h[2]/255,Lt);this.sunLight.intensity=o.sun,this.sunLight.color.setRGB(o.color[0],o.color[1],o.color[2],Lt),this.sunLight.shadow.intensity=o.shadow;let l=r.r*2;this.sunLight.position.set(r.x+o.dir[0]*l,r.y+o.dir[1]*l,r.z+o.dir[2]*l),this.sunLight.target.position.set(r.x,r.y,r.z),this.sunLight.target.updateMatrixWorld();let c=this.sunLight.shadow.camera;c.left=c.bottom=-r.r,c.right=c.top=r.r,c.near=.5,c.far=l*2,c.updateProjectionMatrix(),this.skyLight.intensity=o.sky,this.skyLight.color.copy(a(s.horizon).lerp(a(s.top),.4).lerp(new j(1,1,1),.6)),this.skyLight.groundColor.copy(a(s.ground)),this.lawn.material.color.copy(a(Ed(null,t).ground)),this.lawn.position.set(r.x,r.y,r.z),this.lawn.scale.setScalar(r.r*1.6),this.dirty=!0}realize(e,t,n,r=!1){if(!this.on)return;let o=new Set;e.traverse(s=>{let a=s;if(!a.isMesh)return;let l=a.material,c=Array.isArray(l)?null:l.userData.fp3dBasic??(SA(l)?l:null);if(!c)return;o.add(a),a.material=this.twin(c),AA(a.geometry);let h=c.visible&&c.depthWrite&&(!c.transparent||c.opacity>.85);a.castShadow=t&&h,a.receiveShadow=t;let u=c.userData.fp3dFold;a.customDepthMaterial=u&&u.role!=="glass"?this.depth(u.masks,u.role):void 0}),this.meshes=o;for(let[s,a]of this.twins)hx(s,a,this.smooth);n&&this.plan&&!this.plan.live&&(this.dirty||r)&&(n.shadowMap.needsUpdate=!0),this.dirty=!1}dispose(){for(let e of this.twins.values())e.dispose();this.twins.clear(),this.lawn.geometry.dispose(),this.lawn.material.alphaMap?.dispose(),this.lawn.material.dispose(),this.sunLight.shadow.map?.dispose(),this.sunLight.dispose()}twin(e){let t=this.twins.get(e);if(t)return t;t=new Fs({vertexColors:e.vertexColors,map:e.map,flatShading:!0,specular:0}),t.userData.fp3dBasic=e,t.userData.fp3dVersion=e.version,hx(e,t,this.smooth),t.onBeforeCompile=(r,o)=>{e.onBeforeCompile(r,o),r.fragmentShader=r.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * fp3dGlow;`),EA(r)},t.customProgramCacheKey=()=>`${e.customProgramCacheKey()}-lit`;let n=t;return e.addEventListener("dispose",()=>{n.dispose(),this.twins.delete(e)}),this.twins.set(e,t),t}depth(e,t){let n=this.depths.get(e);n||this.depths.set(e,n=new Map);let r=n.get(t);return r||n.set(t,r=Nn(new Po,e,t)),r}};function TA(){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d");if(!e)return null;let t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"#fff"),t.addColorStop(.55,"#fff"),t.addColorStop(1,"#000"),e.fillStyle=t,e.fillRect(0,0,64,64),new pn(i)}function hx(i,e,t){e.opacity=i.opacity,e.transparent=i.transparent,e.visible=i.visible,e.side=i.side,e.depthWrite=i.depthWrite,e.depthTest=i.depthTest,e.alphaTest=i.alphaTest,e.polygonOffset=i.polygonOffset,e.polygonOffsetFactor=i.polygonOffsetFactor,e.polygonOffsetUnits=i.polygonOffsetUnits,e.color.copy(i.color);let n=t&&!i.transparent;e.alphaToCoverage!==n&&(e.alphaToCoverage=n,e.needsUpdate=!0),e.map!==i.map&&(e.map=i.map,e.needsUpdate=!0),e.userData.fp3dVersion!==i.version&&(e.userData.fp3dVersion=i.version,e.needsUpdate=!0)}function AA(i){let e=i.getAttribute("position");if(!e)return;let t=i.getAttribute("fp3dMat");if(t&&(t.count===e.count||!("name"in t)||t.name!=="fp3dMatt"))return;let n=new vn(new Float32Array(e.count),1);n.name="fp3dMatt",i.setAttribute("fp3dMat",n)}function EA(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float fp3dMat;
flat varying int vFp3dMat;
varying vec3 vFp3dWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
  vFp3dMat = int(fp3dMat + 0.5);
  vFp3dWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
${RA}`).replace("#include <specularmap_fragment>",`#include <specularmap_fragment>
${PA}`).replace("#include <lights_phong_fragment>",`#include <lights_phong_fragment>
${CA}`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
${IA}`)}var RA=`
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
`,PA=`
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
`,CA=`
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
`,IA=`
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
`;function fx(i,e){let t=r=>{r.preventDefault(),e.lost()},n=()=>e.restored();return i.addEventListener("webglcontextlost",t),i.addEventListener("webglcontextrestored",n),()=>{i.removeEventListener("webglcontextlost",t),i.removeEventListener("webglcontextrestored",n)}}var LA=40;function dx(i,e,t,n,r){let o=[];if(n<=0)return o;let s=1/Math.tan(n*Math.PI/180),a=(c,h,u)=>{let f=Math.min(LA,Math.max(0,h-r)*s);return[c-t[0]*f,u-t[1]*f]},l=(c,h,u)=>o.push(c[0],c[1],h[0],h[1],u[0],u[1]);for(let c of i.floors)for(let h of c.rooms){if(h.outdoor||h.points.length<3)continue;let u=c.elevation+(h.ceiling_height??c.height);if(u<=r)continue;let f=Math.max(r,c.elevation),d=h.points.map(([g,b])=>a(g,f,b)),p=h.points.map(([g,b])=>a(g,u,b));for(let[g,b,m]of bn(h.points))l(d[g],d[b],d[m]),l(p[g],p[b],p[m]);for(let g=0;g<h.points.length;g++){let b=(g+1)%h.points.length;l(d[g],d[b],p[b]),l(d[g],p[b],p[g])}}for(let c of e){let h=c.floor.elevation+c.base,u=c.solid.p;for(let f=0;f+8<u.length;f+=9)l(a(u[f],h+u[f+1],u[f+2]),a(u[f+3],h+u[f+4],u[f+5]),a(u[f+6],h+u[f+7],u[f+8]))}return o}function px(i){if(!i.length)return null;let e=1/0,t=1/0,n=-1/0,r=-1/0;for(let o=0;o<i.length;o+=2)e=Math.min(e,i[o]),n=Math.max(n,i[o]),t=Math.min(t,i[o+1]),r=Math.max(r,i[o+1]);return[e,t,n,r]}function Rd(i,e){let t=[],n=[],r=[],o=[],s=[];for(let{face:l,field:c}of i){let h=t.length/3,u=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=FA(c.id)%1e3/1e3;for(let g of ga(l,c)){let[b,m,y,v]=g.corners.map(_=>[_[0]+l.n[0]*.006,_[1]+l.n[1]*.006-e,_[2]+l.n[2]*.006]),x=[[b,0,0],[m,1,0],[y,1,1],[v,0,1]];for(let _ of[0,1,2,0,2,3]){let[w,S,M]=x[_];t.push(w[0],w[1],w[2]),n.push(S,M),r.push(u,f),o.push(d)}}let p=t.length/3-h;p&&s.push({id:c.id,start:h,count:p})}if(!t.length)return null;let a=new Ve;return a.setAttribute("position",new _e(t,3)),a.setAttribute("uv",new _e(n,2)),a.setAttribute("aCells",new _e(r,2)),a.setAttribute("aPhase",new _e(o,1)),a.setAttribute("aLevel",new _e(new Float32Array(t.length/3),1)),{geometry:a,ranges:s}}function Aa(i,e){let t=i.geometry.getAttribute("aLevel"),n=t.array,r=!1;for(let o of i.ranges){let s=Math.min(1,Math.max(0,e.get(o.id)??0));n.fill(s,o.start,o.start+o.count),s>.02&&(r=!0)}return t.needsUpdate=!0,r}function Pd(i){let e=new Ye({transparent:!0,blending:Rt,depthWrite:!1,side:st});return e.onBeforeCompile=t=>{t.uniforms.uFlowTime=i,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
vLiveUv = uv;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},e.customProgramCacheKey=()=>"fp3d-solar-live",e}function FA(i){let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619)>>>0;return e}var gx=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,kA=`
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
`,DA=gx,OA=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function mx(i,e){let t=[];for(let[r,o,s]of bn(i))for(let a of[r,s,o])t.push(i[a][0],e,i[a][1]);let n=new Ve;return n.setAttribute("position",new _e(t,3)),n}function bx(i,e){let t=new At;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,o=(s,a)=>{let l=new Me(mx(n.points,s),new mn({uniforms:{uTime:e,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:gx,fragmentShader:kA,transparent:!0,blending:Rt,depthWrite:!1,side:st}));l.renderOrder=5,l.frustumCulled=!1,t.add(l)};if(r?(o(n.floorY+.01,0),o(n.y+.004,1)):o(n.y+.004,0),n.cover>.02){let s=n.points.map(b=>b[0]),a=n.points.map(b=>b[1]),[l,c,h,u]=[Math.min(...s),Math.max(...s),Math.min(...a),Math.max(...a)],f=c-l>=u-h,d=Math.min(1,n.cover),p=f?[[l-.1,h-.1],[l+(c-l)*d,h-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,h-.1],[c+.1,h-.1],[c+.1,h+(u-h)*d],[l-.1,h+(u-h)*d]],g=Vo(n.points,p);if(g.length>=3){let b=new Me(mx(g,n.y+.03),new mn({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:DA,fragmentShader:OA,transparent:!0,side:st}));b.renderOrder=6,t.add(b);let m=[];for(let v=0;v<g.length;v++){let x=g[v],_=g[(v+1)%g.length];m.push(x[0],n.y+.032,x[1],_[0],n.y+.032,_[1])}let y=new Ve;y.setAttribute("position",new _e(m,3)),t.add(new Ht(y,new Jt({color:5995775,transparent:!0,opacity:.6})))}}}return t}function xx(i){for(let e of i.children)e.geometry?.dispose(),e.material?.dispose?.();i.clear()}var yx=["neon","blueprint","day","realistic"];function Cu(i){return yx.indexOf(i)}var ts={value:new $(.22,.88,1)},ns={value:0};function vx(i){let e=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!e)return null;let t=parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var Pu=i=>{let e=new j(i);return`vec3(${e.r.toFixed(6)}, ${e.g.toFixed(6)}, ${e.b.toFixed(6)})`},NA=`vec3 fp3dFloor(vec3 c) {
${Object.entries(wa).map(([i,e])=>`  if (distance(c, ${Pu(pr[i].color)}) < 0.0002) return ${Pu(e)};`).join(`
`)}
  return vec3(-1.0);
}`,UA=[.04,.09,.22],Ru={base:.22,gain:5.8,max:.97,hue:.12},BA=11056326,zA=.25,VA=(i,e,t)=>[16,8,0].reduce((n,r)=>n|Math.round((i>>r&255)*(1-t)+(e>>r&255)*t)<<r,0);function GA(i){let e=Object.keys(pr).find(t=>pr[t].color===i);return e&&wa[e]!==void 0?VA(wa[e],BA,zA):null}var Cd={from:.105,gain:54,max:.4};var HA=`vec3 fp3dDayFloor(vec3 c) {
${Object.keys(wa).map(i=>`  if (distance(c, ${Pu(pr[i].color)}) < 0.0002) return ${Pu(GA(pr[i].color))};`).join(`
`)}
  return vec3(-1.0);
}`,WA=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
// the realistic look: how much a signal colour lights itself (lit lamps, open windows, screens glow in the light)
float fp3dGlow = 0.0;
${NA}
${HA}
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
    return c * (1.0 + clamp((lift - ${Cd.from}) * ${Cd.gain.toFixed(1)}, 0.0, ${Cd.max}));
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
  if (line) return vec3(${UA.join(", ")}) * clamp(mx * 1.6, 0.75, 1.0);
  vec3 dayFloor = fp3dDayFloor(c);
  if (dayFloor.r >= 0.0) return dayFloor;
  vec3 g = vec3(clamp(${Ru.base.toFixed(3)} + l * ${Ru.gain.toFixed(3)}, 0.0, ${Ru.max.toFixed(3)}));
  return mix(g, g * (c / max(mx, 0.001)), ${Ru.hue.toFixed(3)});
}
`;function Xt(i,e,t=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,s)=>{n(o,s),o.uniforms.uTheme=e,o.uniforms.uAccent=ts,o.uniforms.uAccentOn=ns,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${WA}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${t?"true":"false"});${t?`
  if (uTheme == 3) diffuseColor.a *= 0.22;`:""}`)},i.customProgramCacheKey=()=>`${r()}-themed-${t?"l":"s"}`,i.userData.fp3dThemed=t?"line":"surface",i}function Ea(i){return i==="day"||i==="realistic"?Mn:Rt}var Di=.012,XA=.012;function Mx(i,e,t,n,r,o=[],s){let a=[],l=[],c=[],h=[],u=(m,y,v,x,_,w,S)=>{for(let M of[m,y,v,m,v,x])a.push(M[0],M[1],M[2]),l.push(_[0],_[1],_[2]),c.push(w),h.push(S)};i.rooms.forEach((m,y)=>{if(m.points.length<3)return;let v=m.points.map(T=>T[0]),x=m.points.map(T=>T[1]),_=Math.min(...v),w=Math.min(...x),S=Math.max(...v),M=Math.max(...x),A=Math.max(1,Math.ceil((S-_)/r)),E=Math.max(1,Math.ceil((M-w)/r));for(let T=0;T<A;T++)for(let P=0;P<E;P++){let F=_+T*r,L=w+P*r,O=Math.min(F+r,S),C=Math.min(L+r,M),k=Vo(m.points,[[F,L],[O,L],[O,C],[F,C]]),N=k.length>=3?Math.abs(jA(k)):0;if(N<1e-4)continue;let U=JA(k);if(!o.some(V=>et(U,V))){if(N>(O-F)*(C-L)-1e-6){u([F,Di,L],[F,Di,C],[O,Di,C],[O,Di,L],[0,1,0],y,-1);continue}for(let[V,H,B]of bn(k)){let z=k[V],q=k[B],X=k[H];(X[1]-z[1])*(q[0]-z[0])-(X[0]-z[0])*(q[1]-z[1])<0&&([z,q]=[q,z]),u([z[0],Di,z[1]],[X[0],Di,X[1]],[q[0],Di,q[1]],[q[0],Di,q[1]],[0,1,0],y,-1)}}}});let f=i.rooms.length,d=(i.outdoor??[]).filter(m=>m.points.length>=3&&!jn(m.type));if(d.length){let m=d.flatMap(M=>M.points.map(A=>A[0])),y=d.flatMap(M=>M.points.map(A=>A[1])),v=Math.floor(Math.min(...m)/r)*r,x=Math.floor(Math.min(...y)/r)*r,_=Math.max(1,Math.ceil((Math.max(...m)-v)/r)),w=Math.max(1,Math.ceil((Math.max(...y)-x)/r)),S=(M,A,E)=>ib(i,M)-na(i,M,A,E)+Di;for(let M=0;M<_;M++)for(let A=0;A<w;A++){let E=v+M*r,T=x+A*r,P,F=[E+r/2,T+r/2];P=d.find(O=>O.type==="pool"&&et(F,O.points));for(let O=d.length-1;O>=0&&!P;O--)et(F,d[O].points)&&(P=d[O]);if(!P)continue;let L=(O,C)=>[O,S(P,O,C),C];u(L(E,T),L(E,T+r),L(E+r,T+r),L(E+r,T),[0,1,0],f,-1)}}let p=Math.min(i.cut_height,i.height),g=[];e.forEach((m,y)=>{let v=Math.min(i.height,m.height??i.height),x=Math.min(p,v-.02),_=m.b[0]-m.a[0],w=m.b[1]-m.a[1],S=Math.hypot(_,w);if(S<.05)return;let M=[_/S,w/S],A=[-M[1],M[0]],E=t[y],T=YA(m,M,S,n),P=(C,k)=>C?i.rooms.findIndex(N=>N.id===C):k?f:-1;g.push({a:m.a,b:m.b,h:v,ra:P(m.roomLeft,!1),rb:P(m.roomRight,m.exterior),gaps:T});let F=(C,k,N)=>[k,N,...C.filter(U=>U>k+.005&&U<N-.005)].sort((U,V)=>U-V).filter((U,V,H)=>V===0||U>H[V-1]+.005),L=F([x,(x+v)/2,...T.flatMap(C=>[C.y0+.01,C.y1-.01])],.02,v-.02),O=F(T.flatMap(C=>[C.s0,C.s1]),0,S);for(let C of[1,-1]){let k=C>0?m.roomLeft:m.roomRight,N=k?i.rooms.findIndex(z=>z.id===k):m.exterior?f:-1;if(N<0)continue;let U=(C>0?m.left:m.right)+XA,V=[A[0]*C,A[1]*C],H=(z,q)=>[m.a[0]+M[0]*z+V[0]*U,q,m.a[1]+M[1]*z+V[1]*U],B=z=>{let q=H(z,0),X=s?.(q[0],q[2]);return X==null?1/0:X-.02};for(let z=0;z<O.length-1;z++){let q=O[z+1]-O[z],X=Math.max(1,Math.ceil(q/r));for(let ee=0;ee<X;ee++){let W=O[z]+q/X*ee,Y=O[z]+q/X*(ee+1),ie=(W+Y)/2;for(let re=0;re<L.length-1;re++){let te=L[re],he=L[re+1];if(he-te<.01)continue;let be=(te+he)/2;if(T.some(ye=>ie>ye.s0&&ie<ye.s1&&be>ye.y0&&be<ye.y1))continue;let ne=te>=p-1e-6?E:cr+E,ce=Math.min(he,B(W)),Pe=Math.min(he,B(Y));ce<=te+.005&&Pe<=te+.005||u(H(W,te),H(Y,te),H(Y,Math.max(te,Pe)),H(W,Math.max(te,ce)),[V[0],0,V[1]],N,ne)}}}}});let b=[];for(let m of n){if(m.opening.type!=="door")continue;let y=e.find(_=>wx(_,m)&&$A(_,m));if(!y||!y.roomLeft||!y.roomRight)continue;let v=i.rooms.findIndex(_=>_.id===y.roomLeft),x=i.rooms.findIndex(_=>_.id===y.roomRight);v<0||x<0||b.push({id:m.opening.id,a:v,b:x,x:m.start[0]+m.axis[0]*(m.width/2),y:Math.min(1.1,m.top*.55),z:m.start[1]+m.axis[1]*(m.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:b,blockers:g}}function wx(i,e){let t=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(t,n)||1;return Math.abs((e.start[0]-i.a[0])*n-(e.start[1]-i.a[1])*t)/r<.02&&Math.abs((e.axis[0]*t+e.axis[1]*n)/r)>.99}function $A(i,e){let t=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(t,n)||1,o=e.start[0]+e.axis[0]*(e.width/2),s=e.start[1]+e.axis[1]*(e.width/2),a=((o-i.a[0])*t+(s-i.a[1])*n)/r;return a>-.05&&a<r+.05}function YA(i,e,t,n){let r=[];for(let o of n){if(!wx(i,o))continue;let s=(o.start[0]-i.a[0])*e[0]+(o.start[1]-i.a[1])*e[1],l=o.axis[0]*e[0]+o.axis[1]*e[1]>0?s:s-o.width;l>t||l+o.width<0||r.push({s0:l,s1:l+o.width,y0:o.sill-.01,y1:o.top+.01})}return r}function qA(i,e){let t=Math.max(0,-e),n=Math.max(0,e);switch(i){case"ceiling":return .3+.7*t;case"spot":return .06+.94*t**5;case"pendant":return .25+.85*t**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(e);default:return 1}}function KA(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function _x(i,e,t,n,r,o,s){let a=e-i.x,l=t-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=KA(i),d=1/(1+h/(f*f)),p=d*Math.sqrt(d),g=Math.max(0,-(a*r+l*o+c*s)/u);return i.level*p*(.2+.8*g)*qA(i.kind,l/u)}function Sx(i,e,t=.7,n=[]){let r=[...e];i.doors.forEach((h,u)=>{let f=n[u]??.5;if(!(f<=.01))for(let[d,p]of[[h.a,h.b],[h.b,h.a]]){let g=[0,0,0];for(let m of e){if(m.room!==d)continue;let y=m.x-h.x,v=m.y-h.y,x=m.z-h.z,_=Math.hypot(y,v,x)||1,w=_x(m,h.x,h.y,h.z,y/_,v/_,x/_);g[0]+=m.color[0]*w,g[1]+=m.color[1]*w,g[2]+=m.color[2]*w}let b=Math.max(g[0],g[1],g[2]);b<.01||r.push({x:h.x,y:h.y,z:h.z,color:[g[0]/b,g[1]/b,g[2]/b],level:Math.min(1,b*.9*(.35+.65*f)),kind:"wall",room:p})}});let o=new Map;for(let h of r){let u=i.blockers.filter(d=>d.ra===h.room||d.rb===h.room),f={...h,color:h.color.map(d=>Math.pow(d,1.5)),walls:u};o.set(h.room,[...o.get(h.room)??[],f])}let{pos:s,normal:a,room:l}=i,c=new Float32Array(s.length);for(let h=0;h<l.length;h++){let u=o.get(l[h]);if(!u)continue;let f=h*3,d=0,p=0,g=0;for(let b of u){if(b.walls.length&&ZA(b,b.walls,s[f],s[f+1],s[f+2]))continue;let m=_x(b,s[f],s[f+1],s[f+2],a[f],a[f+1],a[f+2]);d+=b.color[0]*m,p+=b.color[1]*m,g+=b.color[2]*m}c[f]=1-Math.exp(-d*t*1.6),c[f+1]=1-Math.exp(-p*t*1.6),c[f+2]=1-Math.exp(-g*t*1.6)}return c}function ZA(i,e,t,n,r){let o=t-i.x,s=r-i.z;for(let a of e){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=o*c-s*l;if(Math.abs(h)<1e-9)continue;let u=a.a[0]-i.x,f=a.a[1]-i.z,d=(u*c-f*l)/h;if(d<=1e-6||d>=1-1e-6)continue;let p=(u*s-f*o)/h;if(p<0||p>1)continue;let g=i.y+(n-i.y)*d;if(g>=a.h)continue;let b=p*Math.hypot(l,c);if(!a.gaps.some(m=>b>m.s0&&b<m.s1&&g>m.y0&&g<m.y1))return!0}return!1}function Id(i,e,t){let n=i.rooms.findIndex(r=>r.points.length>=3&&et([e,t],r.points));return n<0?i.rooms.length:n}function is(i,e){return i&&e>=0&&e<i.length?i[e]:e}function jA(i){let e=0;for(let t=0;t<i.length;t++){let n=i[(t+1)%i.length];e+=i[t][0]*n[1]-n[0]*i[t][1]}return e/2}function JA(i){let e=0,t=0;for(let[n,r]of i)e+=n,t+=r;return[e/i.length,t/i.length]}var Ra={open:0,open2:0,tilt:0,tilt2:0,cover:null},Tx=2043986,Ax=2769520,QA=2242399,Ld=1845831,eE=1450554,Oi=16758087,Iu=3662079,tE=1.2,nE=1.5,iE=.5,rE=1846349,oE=2572395,sE=1120816,aE=1845831,Ex=5995775,Rx=9085695,rs=Be(3662079,.08),lE=.2;function Lu(i,e,t,n,r,o,s,a,l,c,h){let u=(d,p,g)=>e(d,p,g),f=[[u(t,r,a),u(n,r,a),u(n,o,a),u(t,o,a),c],[u(t,r,s),u(n,r,s),u(n,o,s),u(t,o,s),Be(l.getHex(),.6)],[u(t,o,s),u(n,o,s),u(n,o,a),u(t,o,a),l],[u(t,r,s),u(n,r,s),u(n,r,a),u(t,r,a),Be(l.getHex(),.85)],[u(t,r,s),u(t,o,s),u(t,o,a),u(t,r,a),Be(l.getHex(),.92)],[u(n,r,s),u(n,o,s),u(n,o,a),u(n,r,a),Be(l.getHex(),.92)]];for(let[d,p,g,b,m]of f)i.tri(d,p,g,m,m,m,void 0,h),i.tri(d,g,b,m,m,m,void 0,h)}function xt(i,e,t,n,r,o,s,a,l,c,h,u){if(a<=h+1e-6)return Lu(i,e,t,n,r,o,s,a,l,c,tt);if(s>=h-1e-6)return Lu(i,e,t,n,r,o,s,a,l,c,u);Lu(i,e,t,n,r,o,s,h,l,c,tt),Lu(i,e,t,n,r,o,h,a,l,c,u)}function Ni(i,e,t,n,r,o,s,a,l,c,h=0){let u=(f,d,p)=>{let g=x=>h?(s-x)/h:.5,b=e(t,r,f),m=e(n,r,f),y=e(n,r,d),v=e(t,r,d);i.tri(b,m,y,a,a,a,[0,g(f),1,g(f),1,g(d)],p),i.tri(b,y,v,a,a,a,[0,g(f),1,g(d),0,g(d)],p)};s<=l+1e-6?u(o,s,tt):o>=l-1e-6?u(o,s,c):(u(o,l,tt),u(l,s,c))}function cE(i,e,t,n,r,o,s,a,l,c){let h=e(t,r,s),u=e(n,r,s),f=e(n,o,s),d=e(t,o,s),p=0,g=(o-r)/c;i.tri(h,u,f,a,a,a,[0,p,1,p,1,g],l),i.tri(h,f,d,a,a,a,[0,p,1,g,0,g],l)}function uE(i,e){let[t,n]=i.axis;for(let r of e){if(r===i||r.opening.id===i.opening.id)continue;let o=t*r.axis[0]+n*r.axis[1];if(Math.abs(o)<.999)continue;let s=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(s*n-a*t)>.03)continue;let l=s*t+a*n,c=o>0?l:l-r.width,h=c+r.width;if(Math.min(i.width,h)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let f=i.sill-r.top;if(f>=-.05&&f<=.3)return!0}return!1}function hE(i,e){let t=i.opening.sill_board??"auto";if(t==="none")return{inside:!1,outside:!1};if(t==="inside"||t==="outside")return{inside:t==="inside",outside:t==="outside"};let n=i.sill>.3&&!uE(i,e)&&pi(i.opening,i.exterior)!=="glass_wall";return{inside:n,outside:n&&i.exterior}}function Px(i,e,t,n,r,o,s,a,l){let c=hE(i,e),h=i.width,u=Math.max(i.sill,.03);c.inside&&xt(t,n,-.04,h+.04,r+o,i.faceRoom+.07,u-.03,u,new j(Ld),s,a,l),c.outside&&xt(t,n,-.03,h+.03,-i.faceOut-.06,r-o,u-.04,u-.02,new j(Ld),s,a,l)}function Cx(i,e,t){let n=new Qe,r=new Qe,o=new Qe(!0),s=new j(Tx),a=new j(Ax),l=[],c=[],h=[];for(let u of i){let f=n.count,d=r.count,p=o.count,g=e.get(u.opening.id)??Ra,b=u.width,{sill:m,top:y,bucket:v}=u,x=(M,A,E)=>[u.start[0]+u.axis[0]*M+u.toRoom[0]*A,E,u.start[1]+u.axis[1]*M+u.toRoom[1]*A],_=(u.faceRoom-u.faceOut)/2,w=u.opening.mark==="closed",S=u.opening.type==="door"&&pi(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!S||u.opening.type==="garage"){let M=-u.faceOut-.012,A=u.faceRoom+.012,E=u.opening.type==="garage"&&(w?!!g.sensed&&(g.cover??1)>=.95:(g.cover??1)<.95),T=E?Be(Oi,.8):new j(Tx),P=E?Be(Oi,1):new j(Ax);xt(n,x,-.045,.02,M,A,m,y+.045,T,P,t,v),xt(n,x,b-.02,b+.045,M,A,m,y+.045,T,P,t,v),xt(n,x,.02,b-.02,M,A,y-.02,y+.045,T,P,t,v)}if(u.opening.type==="door"){let M=pi(u.opening,u.exterior),A=W0(M),E=u.opening.swing==="out"?-1:1,T=E>0?u.faceRoom:-u.faceOut,P=u.opening.leaves===2,F=.02,L=b-.02,O=H0(b,M,u.hingeAtStart,u.opening);if(O){let V=-u.faceOut-.012,H=u.faceRoom+.012,B=T-E*(A?.06:.04)/2,z=.06;for(let[q,X]of O.panels)xt(n,x,q,q+z,V,H,m+.02,y-.02,s,a,t,v),xt(n,x,X-z,X,V,H,m+.02,y-.02,s,a,t,v),xt(n,x,q+z,X-z,V,H,m+.02,m+.12,s,a,t,v),Ni(r,x,q+z,X-z,B,m+.12,y-.02,rs,t,v);F=O.x0,L=O.x1}let C=P?(L-F)/2-.004:L-F,k=A?.06:.04;u.exterior&&(A||M==="glass")&&xt(n,x,b/2-.08,b/2+.08,-u.faceOut-.1,-u.faceOut,y+.1,y+.17,Be(Oi,.55),Be(Oi,.85),t,tt),A&&xt(n,x,.02,b-.02,-u.faceOut-.02,u.faceRoom,m,m+.02,new j(Ld),a,t,v);let N=S?[]:[[u.hingeAtStart,g.open]];P&&!S&&N.push([!u.hingeAtStart,g.open2??0]);let U=u.opening.open_angle;for(let[V,H]of N){let B=Math.min(1,Math.max(0,H)),z=M==="sliding"?0:U!=null&&U>0?(g.sensed?B:Math.min(1,B/iE))*Math.min(170,U)*(Math.PI/180):B*nE,q=M==="sliding"?B*C:0,X=(ne,ce,Pe)=>{let ye=ne*Math.cos(z)-ce*Math.sin(z)-q,Ze=T+E*(ce*Math.cos(z)+ne*Math.sin(z)+(q?.05:0));return x(V?F+ye:L-ye,Ze,Pe)},ee=B>.05?tt:v,W=w?!!g.sensed&&B<.05:B>.9,Y=W?Be(Oi,.7):new j(A?sE:rE),ie=W?Be(Oi,.9):new j(A?aE:oE);M==="glass"?(xt(n,X,0,.05,-k,0,m+.01,y-.01,Y,ie,t,ee),xt(n,X,C-.05,C,-k,0,m+.01,y-.01,Y,ie,t,ee),xt(n,X,.05,C-.05,-k,0,m+.01,m+.12,Y,ie,t,ee),xt(n,X,.05,C-.05,-k,0,y-.08,y-.01,Y,ie,t,ee),Ni(r,X,.05,C-.05,-k/2,m+.12,y-.08,rs,t,ee)):xt(n,X,0,C,-k,0,m+.01,y-.01,Y,ie,t,ee);for(let ne of[.001,-k-.001])M==="front_glass"?Ni(r,X,.12,C-.12,ne,m+(y-m)*.55,y-.18,rs,t,ee):A&&Ni(r,X,.1,.18,ne,m+.3,y-.3,rs,t,ee);let re=m+Math.min(1.05,(y-m)*.5),te=A?.3:.012,he=A?C-.11:C-.16,be=A?C-.08:C-.05;xt(n,X,he,be,.004,.05,re-te,re+te,new j(Ex),new j(Rx),t,ee),xt(n,X,he,be,-k-.05,-k-.004,re-te,re+te,new j(Ex),new j(Rx),t,ee),g.unlocked&&V===u.hingeAtStart&&xt(n,X,C-.022,C+.004,-k-.006,.006,m+.03,y-.03,Be(Iu,.85),Be(Iu,1),t,ee)}}else if(u.opening.type==="garage"&&pi(u.opening,u.exterior)==="up_and_over"){let M=Math.min(1,Math.max(0,g.cover??1)),A=u.faceRoom-.03,E=y-m,T=E/3,P=(1-M)*(Math.PI/2),F=m+T+(y-.03-m-T)*(1-M),L=(C,k,N)=>x(C,A+N*Math.sin(P)+k*Math.cos(P),F+N*Math.cos(P)-k*Math.sin(P)),O=Math.cos(P)>.01?(t-F)/Math.cos(P):F>t?-1/0:1/0;Ni(o,L,.02,b-.02,0,-T,E-T,new j(13951231),O,v,.5)}else if(u.opening.type==="garage"){let M=Math.min(1,Math.max(0,g.cover??1)),A=new j(13951231),E=u.faceRoom-.03,T=y*(1-M);M>.01&&Ni(o,x,.02,b-.02,E,T,y,A,t,v,.5);let P=(1-M)*y;P>.01&&cE(o,x,.02,b-.02,E,E+P,y+.03,A,v,.5)}else if(pi(u.opening,u.exterior)==="glass_wall"){xt(n,x,0,.04,_-.025,_+.025,m,y,s,a,t,v),xt(n,x,b-.04,b,_-.025,_+.025,m,y,s,a,t,v),xt(n,x,.04,b-.04,_-.025,_+.025,m,m+.03,s,a,t,v),xt(n,x,.04,b-.04,_-.025,_+.025,y-.04,y,s,a,t,v),Px(u,i,n,x,_,.025,a,t,v);let E=Math.max(1,Math.round((b-2*.04)/.9)),T=(b-2*.04)/E;for(let P=1;P<E;P++){let F=.04+P*T;xt(n,x,F-.02,F+.02,_-.025,_+.025,m+.03,y-.04,s,a,t,v)}for(let P=0;P<E;P++){let F=.04+P*T+(P?.02:0),L=.04+(P+1)*T-(P<E-1?.02:0);Ni(r,x,F,L,_,m+.03,y-.04,rs,t,v)}}else{xt(n,x,0,.06,_-.035,_+.035,m,y,s,a,t,v),xt(n,x,b-.06,b,_-.035,_+.035,m,y,s,a,t,v),xt(n,x,.06,b-.06,_-.035,_+.035,m,m+(m>.05?.06:.03),s,a,t,v),xt(n,x,.06,b-.06,_-.035,_+.035,y-.06,y,s,a,t,v),Px(u,i,n,x,_,.035,a,t,v);let E=.055,T=m+(m>.05?.06:.03),P=y-.06,F=_+.035,L=_+.035+.06,C=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:b/2,x1:u.hingeAtStart?b/2:b-.06,open:g.open,tilt:g.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?b/2:.06,x1:u.hingeAtStart?b-.06:b/2,open:g.open2??0,tilt:g.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:b-.06,open:g.open,tilt:g.tilt}];for(let k of C){let N=k.open>.02||k.tilt>.02,U=w?!!g.sensed&&!N:N,V=U?Be(Oi,.75):new j(QA),H=U?Be(Oi,.95):a,B=k.x0,z=k.x1,q=z-B,X=k.open*tE*(u.opening.swing==="out"?-1:1),ee=k.tilt*lE,W=(ie,re,te)=>{let he=te-T,be=re+he*Math.sin(ee),ne=T+he*Math.cos(ee),ce=ie*Math.cos(X)-(be-F)*Math.sin(X);be=F+(be-F)*Math.cos(X)+ie*Math.sin(X);let Pe=k.atStart?B+ce:z-ce;return x(Pe,be,ne)},Y=Math.abs(X)>.05?tt:v;if(xt(n,W,0,E,F,L,T,P,V,H,t,Y),xt(n,W,q-E,q,F,L,T,P,V,H,t,Y),xt(n,W,E,q-E,F,L,T,T+E,V,H,t,Y),xt(n,W,E,q-E,F,L,P-E,P,V,H,t,Y),Ni(r,W,E,q-E,(F+L)/2,T+E,P-E,U?Be(Oi,.16):rs,t,Y),g.unlocked&&k.atStart===u.hingeAtStart&&xt(n,W,q-.022,q+.004,F-.006,L+.006,T+.02,P-.02,Be(Iu,.85),Be(Iu,1),t,Y),pi(u.opening,u.exterior)==="bars"){let ie=(T+P)/2,re=(F+L)/2;xt(n,W,E,q-E,re-.012,re+.012,ie-.012,ie+.012,V,H,t,Y),xt(n,W,q/2-.012,q/2+.012,re-.012,re+.012,T+E,P-E,V,H,t,Y)}}}if(g.cover!==null&&!(u.opening.type==="garage"&&pi(u.opening,u.exterior)==="up_and_over")){let M=-u.faceOut,A=y+.2;xt(n,x,-.05,b+.05,M-.15,M,y,A,new j(eE),a,t,v);let E=Math.min(1,Math.max(0,g.cover));if(E>.01){let T=y-E*(y-m);Ni(o,x,0,b,M-.07,T,y,new j(16777215),t,v,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),h.push({id:u.opening.id,start:p,end:o.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:o.geometry(),frameTris:l,glassTris:c,blindTris:h}}var fE=.3,Ix=2.6;function Lx(i,e=.32,t=.22,n=[]){let r=i.map(_=>_[0]),o=i.map(_=>_[1]),s=Math.min(...r),a=Math.max(...r),l=Math.min(...o),c=Math.max(...o),h=c-l>=a-s,u=t*.7071,f=_=>{let w=[_,[_[0]+t,_[1]],[_[0]-t,_[1]],[_[0],_[1]+t],[_[0],_[1]-t]],S=[...w,[_[0]+u,_[1]+u],[_[0]-u,_[1]+u],[_[0]+u,_[1]-u],[_[0]-u,_[1]-u]];return w.every(M=>et(M,i))&&!n.some(M=>S.some(A=>et(A,M)))},d=(_,w)=>f(h?[_,w]:[w,_]),p=(_,w)=>{let S=Math.ceil(Math.hypot(w[0]-_[0],w[1]-_[1])/.05);for(let M=1;M<S;M++)if(!f([_[0]+(w[0]-_[0])*M/S,_[1]+(w[1]-_[1])*M/S]))return!1;return!0},[g,b,m,y]=h?[s,a,l,c]:[l,c,s,a],v=[],x=!0;for(let _=g+t;_<=b-t+1e-6;_+=e){let w=null,S=null,M=.05;for(let P=m;P<=y+1e-6;P+=M)if(d(_,P)&&(S??=P),(!d(_,P)||P+M>y+1e-6)&&S!==null){let F=d(_,P)?P:P-M;(!w||F-S>w[1]-w[0])&&(w=[S,F]),S=null}if(!w||w[1]-w[0]<.2)continue;let A=P=>{let[F,L]=P?w:[w[1],w[0]];return[h?[_,F]:[F,_],h?[_,L]:[L,_]]},E=A(x),T=v[v.length-1];if(T&&n.length&&!p(T,E[0])){let P=A(!x);if(!p(T,P[0]))continue;E=P,x=!x}v.push(E[0],E[1]),x=!x}return v}function kd(i,e=.7,t=12){return Array.from({length:t},(n,r)=>{let o=r/t*Math.PI*2;return[i[0]+Math.cos(o)*e,i[1]+Math.sin(o)*e]})}var Fd=i=>Math.atan2(Math.sin(i),Math.cos(i));function Fx(i,e,t){let n=null;if(e.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(e.mode==="returning"||e.mode==="docked")n=e.rest;else return!1;let r=n[0]-i.pos[0],o=n[1]-i.pos[1],s=Math.hypot(r,o);if(s<.02){if(e.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Fd(e.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),Ix*t),!0)}let a=Math.atan2(r,o),l=Fd(a-i.heading);if(i.heading=Fd(i.heading+Math.sign(l)*Math.min(Math.abs(l),Ix*t)),Math.abs(l)<.35){let c=Math.min(s,fE*t);i.pos=[i.pos[0]+r/s*c,i.pos[1]+o/s*c]}return!0}function kx(i,e,t,n=200){return e?t>=3e4?null:Math.max(i,n):i}var dE=66,pE=250;function Dx(i,e){return i?e>=3e4?pE:dE:0}function Ox(i,e,t){let n=e??8,r=t||8;return n<=3||r<=4||/\bSilk\b/.test(i)?!0:/Android/.test(i)&&/\bKF[A-Z]{2,5}\b/.test(i)}function Fu(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function Nx(i,e){return!(e>0)||!(i>0)?.9:Math.min(3,Math.max(.9,40*i/e))}var mE=Math.PI/180;function ku(i,e,t,n={x:0,y:0}){let r=Math.tan(e*mE/2),o=a=>Math.max(.1,1-2*a),s=Math.min(r*o(n.y),r*t*o(n.x));return i*Math.sqrt(1+s*s)/s}function Du(i,e){if(!i)return!1;let t=(r,o,s)=>Math.abs(r-o)<=s,n=Math.max(1,i.radius)*.01;return t(e.radius,i.radius,n)&&t(e.theta,i.theta,.005)&&t(e.phi,i.phi,.005)&&t(e.target.x,i.target.x,n)&&t(e.target.y,i.target.y,n)&&t(e.target.z,i.target.z,n)}function Ux(i,e,t,n){return Math.abs(Math.log(n/t))>=.02&&Du(i,e)}function Dd(i,e,t){return i*Math.max(1,ku(1,e,t)/ku(1,e,16/9))}var Un=null,Bx={value:Cu("day")},zx=new Map;function Od(i,e=0){let t=new Qe,n=new Pt,r=ut(i.type);if(r?.light)uu(t,r,{x:0,z:0,rotation:e,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Nd(t,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:e,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let o={id:"preview",type:i.type,x:0,z:0,rotation:e,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Ko(t,n,new Qe,o,0,!0)}return{buf:t,lines:n}}function gE(i,e=180,t,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${e}|${n}`,o=zx.get(r);if(o)return o;t&&Cf(t);let s=Gx(Od(i),e,new $(.9,.75,1.3),n);return(!rr(i.type)||ut(i.type))&&zx.set(r,s),s}function bE(i,e=320,t=35,n=25,r=!1){let[o,s,a]=i.size,l=w0(Ff,i,()=>Od({type:Ff,w:o,d:s,h:a})),c=t*Math.PI/180,h=Math.max(-80,Math.min(80,n))*Math.PI/180;return Gx(l,e,new $(Math.sin(c)*Math.cos(h),Math.sin(h),Math.cos(c)*Math.cos(h)),1.3,r)}function Gx({buf:i,lines:e},t,n,r,o=!1){Un??=new Fr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Un.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Un.setSize(t,t,!1),Un.setClearColor(0,0);let s=new ci,a=new Me(i.geometry(),new Ye({vertexColors:!0,color:new j(r,r,r)})),l=new Ht(e.geometry(),new Jt({vertexColors:!0,color:new j(r*1.8,r*1.8,r*1.8)}));o&&(Xt(a.material,Bx),Xt(l.material,Bx,!0)),s.add(a,l);let c=new _n().setFromObject(a),h=c.isEmpty()?new $:c.getCenter(new $),u=new Rn(-1,1,1,-1,.01,100);u.position.copy(h).add(n.clone().normalize().multiplyScalar(20)),u.lookAt(h),u.updateMatrixWorld();let f=.05;if(!c.isEmpty())for(let g of[c.min.x,c.max.x])for(let b of[c.min.y,c.max.y])for(let m of[c.min.z,c.max.z]){let y=new $(g,b,m).applyMatrix4(u.matrixWorldInverse);f=Math.max(f,Math.abs(y.x),Math.abs(y.y))}let d=f*1.12;u.left=-d,u.right=d,u.top=d,u.bottom=-d,u.updateProjectionMatrix(),Un.render(s,u);let p=Un.domElement.toDataURL("image/png");return a.geometry.dispose(),a.material.dispose(),l.geometry.dispose(),l.material.dispose(),p}function xE(i,e,t=160,n,r=1.25){let o=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(e)}|${t}|${r}`,s=Vx.get(o);if(s)return s;n&&Cf(n);let{buf:a,lines:l}=Od(i,e),c=new Me(a.geometry(),new Ye({vertexColors:!0,color:new j(r,r,r)})),h=new Ht(l.geometry(),new Jt({vertexColors:!0,color:new j(r*1.8,r*1.8,r*1.8)})),u=new _n().setFromObject(c);if(u.isEmpty())return null;let f=u.min.x,d=u.max.x,p=Math.max(0,u.min.y),g=u.max.y,b=Math.max(1,Math.min(1024,Math.round((d-f)*t))),m=Math.max(1,Math.min(1024,Math.round((g-p)*t)));Un??=new Fr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Un.setPixelRatio(1),Un.setSize(b,m,!1),Un.setClearColor(0,0);let y=new ci;y.add(c,h);let v=new Rn(f,d,g,p,.01,100);v.position.set(0,0,50),v.lookAt(0,0,0),v.updateProjectionMatrix(),Un.render(y,v);let x=Un.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose();let _={url:x,x0:f,x1:d,y0:p,y1:g};return(!rr(i.type)||ut(i.type))&&Vx.set(o,_),_}var Vx=new Map;var CF={Group:At,Mesh:Me,MeshBasicMaterial:Ye,CanvasTexture:pn,Color:j,PlaneGeometry:Xn,BufferGeometry:Ve,Float32BufferAttribute:_e,DoubleSide:st},Wx={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},_E=[.22,.88,1],iy=2.4,Xx=iy,ME=.22,$x=.94,Yx=140,qx=1.5;function wE(i,e,t){let n=1/0;for(let r=0;r<t.length;r++){let[o,s]=t[r],[a,l]=t[(r+1)%t.length],c=a-o,h=l-s,u=c*c+h*h||1,f=Math.max(0,Math.min(1,((i-o)*c+(e-s)*h)/u));n=Math.min(n,Math.hypot(i-(o+c*f),e-(s+h*f)))}return n}var Bd=32,SE=500,Kx=160,TE=33,Zx=.028,AE=.026,EE=.012,RE=.09,at=2767456,PE=2240847,CE=3096944,IE=1911110,LE=1,jx=new Set(["ceiling","downlight","spot","panel","pendant","fan","strip"]),Ou=450,Jx=125,FE=200,kE=.08,Ca={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],fan:[1.3,1.3,.45],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},DE=new j(1,.84,.5),Ud=new j(.95,.16,.2),OE=new j(1714765);function NE(){let i=navigator;return Ox(navigator.userAgent,i.deviceMemory,navigator.hardwareConcurrency)}var zd=class{host;options;renderer;scene=new ci;camera=new rn(38,1,.1,400);controls;labels;root=new At;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];patches=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";roofGeos=[];sunFx=new Tu;sunPath=null;shadowSig="";contextLost=!1;contextNote=null;unwatchContext=null;arcSig="";spillNight="";compassLetters=["N","E","S","W"];flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;personAt=new Map;personLook="figure";figures=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;lastWake=performance.now();highlighted=new WeakMap;rebuilds=new Su(e=>{this.rebuild(e),this.drawTrail(),this.fitBuilt&&(this.fit(0),this.fitAll=this.pendingFloors.size>0),this.fitBuilt=!1,this.invalidate()});pendingFloors=new Set;floorFrame=0;warming=null;nextRenderer=null;lightLook=!1;fitAll=!1;fitBuilt=!1;lightSurfaces=new Map;decorWas=!1;decorTimer;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;fans=new Map;fanMat=null;fanLast=0;fanTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;fitMargin={x:0,y:0};fitted=null;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";binSpots=new Map;binSig="";binSeen=!1;binGlide=new Map;binSettle;binCues=[];binCueSig="";trailArgs={spots:[],paths:[]};orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};realism=new Eu;tier=lx(navigator.userAgent,Math.min(screen.width||0,screen.height||0),navigator.maxTouchPoints||0);sun=null;weather=null;rain=new Ht(new Ve,new Jt({color:10471679,transparent:!0,opacity:.4,blending:Rt,depthWrite:!1}));snow=new Zi(new Ve,new Pi({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Me(new Tr(1,28),new Ye({color:16767370,transparent:!0,opacity:0,blending:Rt,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;roomGlow=new Set;cameraPaint=new WeakMap;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(e,t={}){this.host=e,this.options=t,this.explode=t.explode??!0,this.renderer=this.makeRenderer(t.quality??"auto"),this.watchRenderer(this.renderer),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",e.append(this.labels),this.patternTexture=BE(),this.blindTexture=VE(),this.haloTexture=WE(),this.ground=new Me(new Xn(1,1),new Ye({transparent:!1,blending:Rt,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc,this.sunFx.group),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),document.addEventListener("visibilitychange",this.onVisibility);for(let n of["pointerdown","pointerup","wheel","keydown"])e.addEventListener(n,this.onInput,{capture:!0,passive:!0});typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(o=>o.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(e)),this.resize()}get low(){return this.lowQuality}get resting(){return this.decor(0)===null}wake(){let e=this.resting;this.lastWake=performance.now(),e&&this.invalidate()}animate(){if(!this.lowQuality)return this.invalidate();if(this.decorTimer||this.frame)return;let e=Dx(!0,performance.now()-this.lastWake);this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},e)}decor(e,t){return kx(e,this.lowQuality,performance.now()-this.lastWake,t)}onInput=()=>this.wake();setParked(e){let t=[...e].map(([n,r])=>`${n}=${r}`).sort().join("|");t!==this.parkedSig&&(this.parkedSig=t,this.parked=e,this.building&&this.rebuilds.request(!1))}setBinSpots(e){let t=[...e].map(([s,[a,l]])=>`${s}=${a.toFixed(3)},${l.toFixed(3)}`).sort().join("|"),n=!this.binSeen;if(this.building&&(this.binSeen=!0),t===this.binSig.split("#")[0])return;let r=new Map(this.building?this.building.floors.flatMap(s=>s.furniture.filter(a=>a.type==="waste_bin").map(a=>[a.id,[a.x,a.z]])):[]),o=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;this.binGlide=Zb(this.binSpots,e,r,this.binGlide,!n&&!o&&!this.lowQuality&&!!this.building),this.binSpots=e,this.binSig=`${t}#${[...this.binGlide.keys()].join(",")}`,this.building&&this.rebuilds.request(!1)}placeBins(e){if(!this.binSpots.size&&!this.binGlide.size||!e.furniture.some(n=>this.binSpots.has(n.id)||this.binGlide.has(n.id)))return e;let t=e.furniture.flatMap(n=>{if(this.binGlide.has(n.id))return[];let r=this.binSpots.get(n.id);return r?[{...n,x:r[0],z:r[1]}]:[n]});return{...e,furniture:t}}setBinCues(e){let t=JSON.stringify(e);t!==this.binCueSig&&(this.binCueSig=t,this.binCues=e,this.drawTrail())}batch(e){this.rebuilds.run(e)}setStats(e){this.statsOn=e}setFitMargin(e){this.fitMargin.x===e.x&&this.fitMargin.y===e.y||(this.fitMargin=e,Du(this.fitted,this.controls.goal)&&this.fit(0))}setLabelInset(e){this.labelInset!==e&&(this.labelInset=e,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(e){this.orbitSpeed=e,this.orbitLast=0,this.invalidate()}setQuality(e){let t=this.makeRenderer(e);this.rebuildTier(),this.applyTierFlags(),this.nextRenderer?.dispose(),this.nextRenderer?.forceContextLoss(),this.nextRenderer?.domElement.remove(),this.nextRenderer=t,this.realism.active&&this.realism.setPlan(t,this.realPlan()),ny(t,this.scene,this.camera).then(()=>{this.nextRenderer!==t||this.disposed||(this.nextRenderer=null,this.useRenderer(t))})}busy(){return!!this.warming||!!this.nextRenderer||this.pendingFloors.size>0}warm(){this.realism.active&&this.realism.realize(this.scene,!!this.realPlan(),this.renderer);let e=ny(this.renderer,this.scene,this.camera).then(()=>{this.warming===e&&(this.warming=null,this.invalidate())});this.warming=e}useRenderer(e){this.renderer.domElement.replaceWith(e.domElement),this.unwatchContext?.(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=e,this.watchRenderer(e),this.redrawOnce(),this.applyRealism();let t=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=t,this.resize()}setPacks(e,t){If(e),t&&Lf(t),this.building&&this.rebuilds.request(!1)}setBuilding(e){let t=this.building===null;this.lastWake=performance.now(),this.building=e,L0(e),Lf(e.recipes),t&&(this.fitBuilt=!0),this.rebuilds.request(!0)}setKeepView(e){this.keepView=e}setAngleLock(e){this.controls.angleLock=e}setFloor(e,t=!0){this.lastWake=performance.now(),this.keepNext=this.keepView&&e!==null&&this.floorId!==null&&e!==this.floorId,this.floorId=e,this.roomId=null,this.labelsDirty=!0,this.applyHouseLines(),this.applyTargets(!t),this.applyHighlight(),this.fit(t?700:0)}setFloorStack(e){e!==this.floorStack&&(this.floorStack=e,this.applyTargets(!1))}setHideRoof(e){e!==this.hideRoof&&(this.hideRoof=e,this.invalidate())}setKeepRoof(e){e!==this.keepRoof&&(this.keepRoof=e,this.invalidate())}setExplode(e){e!==this.explode&&(this.explode=e,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(e){if(this.lastWake=performance.now(),this.roomId=e,this.labelsDirty=!0,this.applyHighlight(),!e){this.fit(700);return}let t=this.floors.find(h=>qc(h.floor).some(u=>u.id===e)),n=t?qc(t.floor).find(h=>h.id===e):void 0;if(!t||!n)return;let r=n.start_view;if(r){let h=t.floor.elevation+t.ty,[u,f]=ia(n.points),d=r.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new $(d.x,d.y+h,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[o,s]=ia(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new $(Math.max(...a)-Math.min(...a),t.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new $(o,t.floor.elevation+t.ty+.3,s),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(e){this.wallMode=e;for(let t of this.floors)this.buildLamps(t);this.invalidate()}setDevices(e){this.devices=e,this.syncFans(e),this.labelsDirty=!0,this.effectFloors=new Set(e.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(e.map(n=>[n.id,n.floorId]));let t=new Set;for(let n of e){t.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let o=r.el;r.icon!==n.icon&&(r.icon=n.icon,o.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,o.querySelector(".fp3d-dev-text").textContent=n.text);let s=n.caption??"";r.caption!==s&&(r.caption=s,o.querySelector(".fp3d-dev-name").textContent=s);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,o.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,o.title=n.name,o.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,o.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,o.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(h=>Math.round(h*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?o.style.setProperty("--fp3d-glow",c):o.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)t.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(e){let t=JSON.stringify([...e]);if(t!==this.roofWindowsKey){this.roofWindowsKey=t,this.roofWindows=e,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(e){this.anchorCb=e,this.labelsDirty=!0,this.invalidate()}setAnchors(e){this.anchors=e,this.labelsDirty=!0,this.invalidate()}setSolarLevels(e){this.solarLevels=e;let t=!1;for(let n of this.roof?.lives??[])Aa(n,e)&&(t=!0);for(let n of this.floors)n.solarLive&&Aa(n.solarLive,e)&&(t=!0);this.solarActive=t,this.invalidate()}setPools(e){let t=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(t(e)!==t(this.pools)){this.pools=e,this.poolActive=e.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(e){e.poolGroup&&(xx(e.poolGroup),e.group.remove(e.poolGroup),e.poolGroup=void 0);let t=this.pools.filter(n=>n.floorId===e.floor.id);t.length&&(e.poolGroup=bx(t,this.flowTime),e.group.add(e.poolGroup))}setSound(e){let t=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(t(e)!==t(this.sound)){this.sound=e,this.soundActive=e.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new At;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let o=e.filter(c=>c.floorId===n.floor.id),s=.03;for(let c of o)if(c.playing)for(let h=0;h<3;h++){let u=new Me(new Ls(.92,1,48),new Ye({color:3662079,transparent:!0,opacity:0,blending:Rt,depthWrite:!1,side:st}));u.rotation.x=-Math.PI/2,u.position.set(c.x,s+h*.002,c.z),u.userData={sound:!0,phase:h/3,level:c.level},u.frustumCulled=!1,r.add(u)}let a=[],l=new Set;for(let c of o)for(let h of c.members){let u=o.find(d=>d.id===h);if(!u||u===c)continue;let f=[c.id,u.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,s+.02,c.z,u.x,s+.02,u.z))}if(a.length){let c=new Ve;c.setAttribute("position",new _e(a,3));let h=new Ht(c,new Jt({color:3662079,transparent:!0,opacity:.45,blending:Rt,depthWrite:!1}));h.userData={soundLine:!0},r.add(h)}}this.invalidate()}}animateSound(e){let t=e/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let o=(t*.45+r.userData.phase)%1,s=r.userData.level,a=.25+o*(.9+1.6*s);r.scale.set(a,a,1),r.material.opacity=(1-o)*(.25+.45*s)}}setFlows(e){this.flows=e;let t=this.flowSeconds(),n=new Map;for(let r of e){let o=Pa(r),s=Fu(r.power),a=this.flowPhase.get(o);n.set(o,{speed:s,offset:a?t*(a.speed-s)+a.offset:0})}this.flowPhase=n,this.flowActive=e.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(e){this.pipes=e;for(let t of this.floors)this.buildPipes(t);this.invalidate()}setPatches(e){this.patches=e;for(let t of this.floors)this.buildPatches(t);this.invalidate()}buildPatches(e){let t=this.patches.filter(r=>r.floorId===e.floor.id&&r.points.length>=3&&r.opacity>0),n=JSON.stringify(t);if(n!==e.patchSig){e.patchSig=n;for(let r of[!1,!0]){let o=[],s=[];for(let c of t){if(!!c.glow!==r)continue;let h=Math.min(1,c.opacity);for(let u of bn(c.points))for(let f of u)o.push(c.points[f][0],c.y,c.points[f][1]),s.push(c.color[0],c.color[1],c.color[2],h)}let a=r?e.patchGlowMesh:e.patchMesh,l=new Ve;l.setAttribute("position",new _e(o,3)),l.setAttribute("color",new _e(s,4)),a.geometry.dispose(),a.geometry=l,a.visible=o.length>0}}}buildPipes(e){let t=this.pipes.filter(o=>o.floorId===e.floor.id),n=JSON.stringify(t);if(n===e.pipeSig)return;e.pipeSig=n;let r=new Qe;for(let o of t)qb(r,o);e.pipeMesh.geometry.dispose(),e.pipeMesh.geometry=r.geometry(),e.pipeMesh.visible=r.count>0}setPersonLook(e){e!==this.personLook&&(this.personLook=e,this.setPersons(this.persons))}makeFigure(e){let t=s=>{let a=[],l=(f,d,p,g,b)=>{let m=Math.hypot(p-f,g-d)||1,y=-(g-d)/m*(b/2+s),v=(p-f)/m*(b/2+s);a.push(f+y,d+v,0,p+y,g+v,0,p-y,g-v,0,f+y,d+v,0,p-y,g-v,0,f-y,d-v,0)},h=.14+s;for(let f=0;f<18;f++){let d=f/18*Math.PI*2,p=(f+1)/18*Math.PI*2;a.push(0,1.47,0,Math.cos(d)*h,1.47+Math.sin(d)*h,0,Math.cos(p)*h,1.47+Math.sin(p)*h,0)}l(0,1.32,0,.8,.13),l(0,1.24,-.28,.9,.07),l(0,1.24,.28,.9,.07),l(-.02,.82,-.15,.02,.08),l(.02,.82,.15,.02,.08);let u=new Ve;return u.setAttribute("position",new _e(a,3)),u},n=new Me(t(0),new Ye({color:e,transparent:!0,opacity:.9,depthWrite:!1,side:st})),r=new Me(t(.05),new Ye({color:e,transparent:!0,opacity:.22,blending:Rt,depthWrite:!1,side:st}));n.renderOrder=6,r.renderOrder=5;let o=new At;return o.add(r,n),o.visible=!1,o}dropFigure(e){let t=this.figures.get(e);if(t){this.scene.remove(t);for(let n of t.children)n.geometry.dispose(),n.material.dispose();this.figures.delete(e)}}setPersons(e){this.labelsDirty=!0,this.persons=e;let t=new Set;for(let n of e){t.add(n.id);let r=this.personPins.get(n.id);if(!r){r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id;let a=n.id;r.addEventListener("pointerdown",l=>l.stopPropagation()),r.addEventListener("click",l=>{l.stopPropagation();let c=this.persons.find(f=>f.id===a);if(!c?.entity)return;let h=l.currentTarget.getBoundingClientRect(),u=this.host.getBoundingClientRect();this.options.onDeviceHold?.(c.entity,h.left+h.width/2-u.left,h.top+h.height/2-u.top)}),this.personPins.set(n.id,r),this.labels.append(r)}r.title=n.name,r.setAttribute("aria-label",n.name),r.style.setProperty("--fp3d-pc",n.color??"#ff5fd2");let o=this.personLook==="figure"&&!!n.entity&&!n.thing;r.classList.toggle("fp3d-person-figure",o);let s=this.figures.get(n.id);if(o&&(!s||s.userData.color!==(n.color??"#ff5fd2"))){this.dropFigure(n.id);let a=this.makeFigure(n.color??"#ff5fd2");a.userData.color=n.color??"#ff5fd2",this.figures.set(n.id,a),this.scene.add(a)}else!o&&s&&this.dropFigure(n.id);if(r.classList.toggle("fp3d-person-tap",!!n.entity),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials||r.dataset.tag!==(n.tag??"")){r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.dataset.tag=n.tag??"",r.replaceChildren();let a=document.createElement("span");if(a.className="fp3d-person-face",n.picture){let l=document.createElement("img");l.src=n.picture,l.alt="",l.addEventListener("error",()=>l.replaceWith(document.createTextNode(n.initials))),a.append(l)}else a.textContent=n.initials;if(r.append(a),n.tag){let l=document.createElement("span");l.className="fp3d-person-tag",l.textContent=n.tag,r.append(l)}}}for(let[n,r]of this.personPins)t.has(n)||(r.remove(),this.personPins.delete(n),this.personAt.delete(n),this.dropFigure(n));this.invalidate()}setPickTargets(e,t){this.pickFurniture=e,this.pickOpenings=t}setAccent(e){let t=vx(e),n=t?1:0;n===ns.value&&(!t||ts.value.equals(new $(...t)))||(ns.value=n,t&&ts.value.set(...t),this.invalidate())}setTheme(e){if(e===this.theme)return;this.theme=e,this.themeUniform.value=Cu(e);let t=e!=="neon";Hg(t),t!==this.lightLook&&this.building?.floors.some(o=>o.furniture.some(da))&&this.rebuilds.request(!0),this.lightLook=t;let n=Ea(e),r=[...this.floors.map(o=>o.materials.lines),...this.roof?[this.roof.lines]:[]];for(let o of r)o.blending=n,o.needsUpdate=!0;this.placeGround(),this.realism.enable(this.scene,e==="realistic"),this.applyRealism(),this.warming=null,this.realism.active&&this.warm();for(let o of this.floors)o.sunSig="-",this.buildSun(o);this.buildSunFx(),this.invalidate()}realPlan(){return this.theme==="realistic"?cx(this.tier,this.lowQuality,this.building?.settings.sun_shadow!==!1):null}applyRealism(){this.realism.setPlan(this.renderer,this.realPlan()),this.updateRealism()}updateRealism(){if(!this.realism.active)return;let e=this.arcFrame(),t=this.building,n=t?Li(t):null,r=n&&e?n.elevation+kr(n,{x:e.x-e.r,z:e.z})-.03:-.23;this.realism.update(this.sun,this.weather,t?.settings.north??0,e?{x:e.x,y:r,z:e.z,r:Math.max(12,e.r*1.8)}:{x:0,y:r,z:0,r:15})}setFurnishMode(e){this.furnish=e,e||this.selectFurniture(null),this.invalidate()}selectFurniture(e){e&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=e,this.updateGhost(),this.invalidate()}selectFurnitureSet(e){this.selectedSet=[...e],this.updateGhost(),this.invalidate()}setSun(e){this.sun=e;for(let n of this.floors)this.buildSun(n);let t=this.nightFactor().toFixed(2);if(t!==this.spillNight){this.spillNight=t;for(let n of this.floors)this.buildSpill(n,this.lightSources(n))}this.placeSky(),this.buildSunFx(),this.updateRealism(),this.invalidate()}setSunPath(e,t){this.sunPath=e,t&&(this.compassLetters=t),this.buildSunFx(),this.invalidate()}setWeather(e){this.weather=e;for(let t of this.floors)this.buildSun(t);this.applyWeather(),this.placeSky(),this.buildSunFx(),this.updateRealism(),this.invalidate()}applyWeather(){let e=this.weather,t=!!e&&!this.lowQuality,n=e?new j(e.sky[0]/255,e.sky[1]/255,e.sky[2]/255):null;this.scene.fog=t&&e.fog>0&&n?new Ms(n,.01+.035*e.fog):null;let r=t?Math.round(700*e.rain):0,o=t?Math.round(450*e.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,o,!1),this.rain.visible=r>0,this.snow.visible=o>0}seedParticles(e,t,n){if((e.geometry.getAttribute("position")?.count??0)===t)return;let o=this.weatherBox,s=new Float32Array(t*3),a=n?2:1;for(let c=0;c<t;c+=a){let h=o.x0+Math.random()*(o.x1-o.x0),u=o.y0+Math.random()*(o.y1-o.y0),f=o.z0+Math.random()*(o.z1-o.z0);s.set([h,u,f],c*3),n&&s.set([h,u-.45,f],c*3+3)}e.geometry.dispose();let l=new Ve;l.setAttribute("position",new _e(s,3)),e.geometry=l}stepWeather(e){let t=this.weather;if(!t||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(e-this.weatherLast)/1e3):0;if(this.weatherLast=e,!n)return!0;let r=this.weatherBox,o=r.y1-r.y0,s=t.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*t.rain)*n;for(let h=0;h<l.length;h+=6){let u=l[h+1]-c,f=l[h]+s*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u,l[h+3]=f-s*.05,l[h+4]=u-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=e/1e3;for(let h=0;h<l.length;h+=3){let u=l[h+1]-(.9+.6*t.snow)*n,f=l[h]+(s+Math.sin(c+h)*.4)*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u}a.needsUpdate=!0}return!0}placeSky(){let e=this.sun,t=this.weather,n=t?.cloud??0,r=!e||e.elevation<-3;if(!e||!t||t.disc===!1||n>.85||!r&&e.elevation<1){this.skyDisc.visible=!1;return}let o=(this.building?.settings.north??0)*it,s=(r?e.azimuth+180:e.azimuth)*it,a=Math.max(10,Math.abs(e.elevation))*it,{center:l,r:c}=this.skyFrame(),h=new $(Math.sin(o+s)*Math.cos(a),Math.sin(a),-Math.cos(o+s)*Math.cos(a));this.skyDisc.position.copy(l).addScaledVector(h,c),this.skyDisc.scale.setScalar(c*(r?.03:.04)),this.skyDisc.lookAt(l);let u=this.skyDisc.material;u.color.set(r?13621486:16767370),u.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}skyFrame(){let e=this.weatherBox;return{center:new $((e.x0+e.x1)/2,e.y0,(e.z0+e.z1)/2),r:Math.min(300,Math.max(80,this.houseRadius*5))}}buildSunFx(){let e=this.building,t=this.sun,n=!!e&&!!t&&e.settings.sun_shadow!==!1,r=(e?.settings.north??0)*it,o=this.weather?.cloud??0,s=n&&!this.lowQuality&&t.elevation>1&&o<.9&&!this.roomTint&&this.theme!=="realistic",a=s?`${t.elevation.toFixed(1)},${t.azimuth.toFixed(1)},${r},${o.toFixed(1)},${this.theme},${this.roofGeos.length}`:"";a!==this.shadowSig&&(this.shadowSig=a,s?this.drawShadow(e,t,r,o):this.sunFx.hideShadow());let l=this.sunPath,c=n&&!!l&&l.points.length>1&&t.elevation>-3,h=c?this.arcFrame():null,u=c&&h?`${this.theme},${t.elevation.toFixed(1)},${t.azimuth.toFixed(1)},${this.compassLetters.join("")},${l.points[0].t},${r},${h.x.toFixed(2)},${h.z.toFixed(2)},${h.y.toFixed(2)},${h.r.toFixed(2)},${o.toFixed(1)}`:"";if(u===this.arcSig)return;if(this.arcSig=u,!u||!h||!l||!t)return this.sunFx.hideArc();let f=(m,y,v=0)=>{let x=Math.max(0,y)*it,_=r+m*it;return[h.x+Math.sin(_)*Math.cos(x)*h.r,h.y+Math.sin(x)*h.r+v,h.z-Math.cos(_)*Math.cos(x)*h.r]},d=1-.7*o,p=Date.now(),g=m=>new Date(m).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),b=h.r*.03;this.sunFx.setArc({points:l.points.map(m=>({at:f(m.azimuth,m.elevation),t:m.t,elevation:m.elevation})),now:p,hours:l.points.filter(m=>m!==l.rise&&m!==l.set&&new Date(m.t).getMinutes()===0).map(m=>f(m.azimuth,m.elevation)),labels:[l.rise,l.set].flatMap(m=>m?[{text:g(m.t),at:f(m.azimuth,m.elevation,b*2.2),rising:m===l.rise}]:[]),sun:t.elevation>0?f(t.azimuth,t.elevation):null,ring:{center:[h.x,h.y,h.z],r:h.r,north:r,letters:this.compassLetters},size:b,fade:d,light:this.theme!=="neon"})}arcFrame(){let e=this.building,t=e?Li(e):null,n=e?.floors.flatMap(h=>h.rooms.filter(u=>!u.outdoor).flatMap(u=>u.points))??[];if(!t||!n.length)return null;let r=n.map(h=>h[0]),o=n.map(h=>h[1]),[s,a,l,c]=[Math.min(...r),Math.max(...r),Math.min(...o),Math.max(...o)];return{x:(s+a)/2,z:(l+c)/2,y:t.elevation,r:Math.max(7,Math.hypot(a-s,c-l)*.62)}}nightFactor(){let e=this.sun;return e?Math.min(1,Math.max(0,-e.elevation/6)):0}buildSpill(e,t){let n=this.building,r=n?.settings.window_glow===!1?0:this.nightFactor(),o=n&&r>0?Li(n):null,s=!!o&&Math.abs(e.floor.elevation-o.elevation)<.5,a=new Map;if(s)for(let u of t){let f=a.get(u.room)??[0,0,0,0];f[0]+=u.color[0]*u.level,f[1]+=u.color[1]*u.level,f[2]+=u.color[2]*u.level,f[3]+=u.level,a.set(u.room,f)}let l=[...e.openings.values()].map(u=>(u.cover??0).toFixed(1)).join(","),c=s&&a.size?`${r.toFixed(2)}|${[...a].map(([u,f])=>`${u}:${f.map(d=>d.toFixed(2)).join("/")}`).join(";")}|${l}`:"";if(c===e.spillSig)return;e.spillSig=c;let h=new Qe;if(c)for(let u of e.geo.openings){if(u.opening.type!=="window"||!u.exterior)continue;let f=e.floor.rooms.findIndex(P=>P.id===u.opening.room_id),d=f<0?void 0:a.get(is(e.lightZones,f));if(!d||d[3]<.02)continue;let g=1-(e.openings.get(u.opening.id)?.cover??0),b=u.top-u.sill;if(g<.05||b<.1)continue;let m=Math.max(d[0],d[1],d[2],1e-6),y=.3*r*Math.min(1,d[3])*g*Math.min(1,b/1.2),v=new j(d[0]/m*y,d[1]/m*y,d[2]/m*y),x=[-u.toRoom[0],-u.toRoom[1]],_=Math.min(3.5,.8+1.1*u.top),w=.35*_,S=[u.start[0]+u.axis[0]*(u.width/2)+x[0]*(u.faceOut+_/2),u.start[1]+u.axis[1]*(u.width/2)+x[1]*(u.faceOut+_/2)],M=kr(e.floor,{x:S[0],z:S[1]})+.014,A=(P,F)=>{let L=F/_,O=-w*L+P*(u.width+2*w*L);return[u.start[0]+u.axis[0]*O+x[0]*(u.faceOut+F),M,u.start[1]+u.axis[1]*O+x[1]*(u.faceOut+F)]},E=4,T=[[0,0],[.18,1],[.82,1],[1,0]];for(let P=0;P<E;P++){let F=_*P/E,L=_*(P+1)/E,O=(1-P/E)**2,C=(1-(P+1)/E)**2;for(let k=0;k+1<T.length;k++){let[N,U]=T[k],[V,H]=T[k+1],B=A(N,F),z=A(V,F),q=A(V,L),X=A(N,L),ee=v.clone().multiplyScalar(O*U),W=v.clone().multiplyScalar(O*H),Y=v.clone().multiplyScalar(C*H),ie=v.clone().multiplyScalar(C*U);h.tri(B,z,q,ee,W,Y),h.tri(B,q,X,ee,Y,ie)}}}e.spillMesh.geometry.dispose(),e.spillMesh.geometry=h.geometry(),e.spillMesh.visible=h.count>0}drawShadow(e,t,n,r){let o=Li(e),s=o?.rooms.filter(b=>!b.outdoor&&b.points.length>=3)??[];if(!o||!s.length)return this.sunFx.hideShadow();let a=s.flatMap(b=>b.points.map(m=>m[0])),l=s.flatMap(b=>b.points.map(m=>m[1])),c=o.elevation+kr(o,{x:Math.min(...a)-1,z:(Math.min(...l)+Math.max(...l))/2}),h=t.azimuth*it,u=dx(e,this.roofGeos,[Math.sin(n+h),-Math.cos(n+h)],t.elevation,c),f=px(u);if(!f)return this.sunFx.hideShadow();let d=o.elevation-c<=.35?o.elevation+.012:c+.012,p=e.floors.filter(b=>Math.abs(b.elevation-o.elevation)<.5).flatMap(b=>b.rooms.filter(m=>!m.outdoor&&m.points.length>=3).map(m=>m.points)),g=(this.theme==="neon"?.6:.34)*Math.min(1,t.elevation/8)*(1-.8*r);this.sunFx.setShadow(this.renderer,u,f,p,d,g,this.theme==="neon"?394264:1713203)}setRoomTint(e){let t=!!e!=!!this.roomTint;if(this.roomTint=e,this.tintTick=!0,this.applyHighlight(),t){for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n);this.buildSunFx()}}setRoomGlow(e){e.size===this.roomGlow.size&&[...e].every(t=>this.roomGlow.has(t))||(this.roomGlow=new Set(e),this.applyHighlight())}setScreens(e){this.screens=e;for(let t of this.floors)this.buildScreens(t);this.invalidate()}fillRoomPin(e,t,n){if(e.textContent=t||"\u2013",n){let r=document.createElement("small");r.textContent=n,e.append(r),e.classList.add("fp3d-pin-info")}else e.classList.remove("fp3d-pin-info")}setRoomInfo(e){if(!(e.size===this.roomInfo.size&&[...e].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=e;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,e.get(r.room.id))}}setFloorInfo(e){this.floorInfo=e;for(let t of this.floors){let n=t.label.querySelector("span"),r=e.get(t.floor.id)??this.options.floorInfo?.(t.floor)??"";n&&n.textContent!==r&&(n.textContent=r,t.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(e,t=!1){if(this.openingTargets=e,this.realism.touch(),t)for(let n of this.floors){let r=!1;for(let[o,s]of n.openings){let a=e.get(o)??Ra,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===s.open&&l.open2===(s.open2??0)&&l.tilt===s.tilt&&l.tilt2===(s.tilt2??0)&&l.cover===s.cover&&!!l.sensed==!!s.sensed&&!!l.unlocked==!!s.unlocked||(n.openings.set(o,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(e){let t=new Set;for(let[n,r]of e){this.fridges.has(n)||t.add(n);let o=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};o.tl=r.left?1:0,o.tr=r.right?1:0,this.fridges.set(n,o)}for(let n of[...this.fridges.keys()])e.has(n)||this.fridges.delete(n);this.showFresh(t),this.invalidate()}setRackLeds(e){this.rackLeds=e;let t=!1;for(let n of this.floors)this.buildRackLeds(n)&&(t=!0);t&&this.invalidate()}rackLeds=new Map;buildRackLeds(e){let t=e.floor.furniture.filter(h=>h.rack?.slots?.length);if(!t.length&&!e.rackLedRanges.size)return!1;let n=t.map(h=>({f:h,ids:h.rack.slots.filter(u=>this.rackLeds.has(`${h.id}/${u.id}`)).map(u=>u.id)})).filter(h=>h.ids.length),r=n.map(({f:h,ids:u})=>`${h.id}:${h.type}:${h.x},${h.z},${h.rotation},${h.w},${h.d},${h.h},${h.mount_y??""},${h.mirror?1:0}:${u.join(",")}:${JSON.stringify(h.rack.slots)}`).join(";"),o=!1;if(r!==e.rackLedShape){o=!0,e.rackLedShape=r,e.rackLedColor="";let h=new Qe,u=new Map;for(let{f,ids:d}of n)for(let[p,g]of jg(h,f,Zt(e.floor,f),d))u.set(`${f.id}/${p}`,g);e.rackLedRanges=u,e.rackLedMesh.geometry.dispose(),e.rackLedMesh.geometry=h.geometry(),e.rackLedMesh.visible=h.count>0}if(!e.rackLedRanges.size)return o;let s=[...e.rackLedRanges.keys()],a=s.map(h=>this.rackLeds.get(h)??"").join(",");if(a===e.rackLedColor)return o;e.rackLedColor=a;let l=e.rackLedMesh.geometry.getAttribute("color"),c=l.array;for(let h of s){let u=this.rackLeds.get(h),f=new j(u?Fa[u]:"#808080"),d=e.rackLedRanges.get(h);for(let p=d.start*3;p<d.end*3;p++)c.set([f.r,f.g,f.b],p*3)}return l.needsUpdate=!0,!0}awnings=new Map;setAwnings(e){let t=new Set;for(let[n,r]of e){this.awnings.has(n)||t.add(n);let o=this.awnings.get(n)??{cur:r.out??0,to:r.out??0,speed:0};r.out===null?(o.to=r.moving>0?1:0,o.speed=1/Math.max(2,r.time)):(o.to=r.out,o.speed=0),this.awnings.set(n,o)}for(let n of[...this.awnings.keys()])e.has(n)||this.awnings.delete(n);this.showFresh(t),this.invalidate()}showFresh(e){if(e.size)for(let t of this.floors)t.floor.furniture.some(n=>e.has(n.id))&&this.buildFridges(t)}stepAwnings(e){let t=new Set,n=1-Math.exp(-e/450);for(let[r,o]of this.awnings){let s=o.to-o.cur;if(Math.abs(s)<.002){s!==0&&(o.cur=o.to,t.add(r));continue}o.cur=o.speed>0?o.cur+Math.sign(s)*Math.min(Math.abs(s),o.speed*e/1e3):o.cur+s*n,t.add(r)}return t}stepFridges(e){let t=1-Math.exp(-e/Kx),n=new Set;for(let[r,o]of this.fridges)for(let[s,a]of[["l","tl"],["r","tr"]]){let l=o[a]-o[s];if(Math.abs(l)<.004){l!==0&&(o[s]=o[a],n.add(r));continue}o[s]+=l*t,n.add(r)}for(let r of this.stepAwnings(e))n.add(r);for(let r of this.stepBins(e))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(o=>n.has(o.id))&&this.buildFridges(r);return!0}stepBins(e){let t=[],n=!1;for(let[r,o]of this.binGlide)o.t>=1||(o.t=Math.min(1,o.t+e/1100),t.push(r),o.t>=1&&(n=!0));return n&&this.binSettle===void 0&&(this.binSettle=setTimeout(()=>{if(this.binSettle=void 0,!this.disposed){for(let[r,o]of this.binGlide)o.t>=1&&this.binGlide.delete(r);this.binSig=`${this.binSig.split("#")[0]}#${[...this.binGlide.keys()].join(",")}`,this.rebuilds.request(!1)}},0)),t}buildFridges(e){let t=new Qe;for(let n of e.floor.furniture){let r=this.binGlide.get(n.id);if(!r)continue;let[o,s]=Ad(r);Ko(t,new Pt,new Qe,{...n,x:o,z:s},Zt(e.floor,n))}for(let n of e.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Yg(t,n,Zt(e.floor,n),r?.l??0,r?.r??0)}for(let n of e.floor.furniture)n.type==="awning"&&$g(t,n,Zt(e.floor,n),this.awnings.get(n.id)?.cur??0);for(let n of e.floor.furniture){let r=Wc(n.type),o=r?ut(n.type):void 0;r&&o&&eb(t,o,r,n,Zt(e.floor,n),this.awnings.get(n.id)?.cur??0)}e.fridgeMesh.geometry.dispose(),e.fridgeMesh.geometry=t.geometry(),e.fridgeMesh.visible=t.count>0}resetView(){this.fit(700)}setStartView(e){this.startView=e}currentView(){let e=this.controls.view,t=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(e.theta),Math.cos(e.theta)),phi:e.phi,radius:e.radius,target:{x:e.target.x,y:e.target.y-t,z:e.target.z}}}floorBase(e){let t=e===null?void 0:this.floorMap.get(e);return t?t.floor.elevation+t.ty:0}projections=new Mu(()=>this.invalidate());setProjections(e){this.projections.set(e),this.invalidate()}projectorPose(e){let t=this.devices.find(l=>l.id===e&&l.model),n=t&&this.floorMap.get(t.floorId);if(!t||!n||!n.group.visible)return null;let r=(t.rotation??0)*it,o=t.model==="camera_ceiling",s=Math.min(1.45,Math.max(.05,(t.tilt??(o?65:20))*it)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:t.y);return{position:new $(t.x,a,t.z),direction:new $(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s)),fov:Math.min(t.fov??(o?120:90),140),reach:Math.min(30,Math.max(8,(t.reach??(o?3:4.5))*2.5))}}updateProjections(){let e=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let o of[n.floorMesh,n.wallMesh])o.layers.enable(wu);e.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),e.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(wu),e.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let t=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,e,n=>this.projectorPose(n),t)}dispose(){this.projections.dispose(),this.realism.dispose(),this.disposed=!0,cancelAnimationFrame(this.floorFrame),this.nextRenderer?.dispose(),this.nextRenderer?.forceContextLoss(),this.nextRenderer=null,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.binSettle),clearTimeout(this.fanTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let e of[this.rain,this.snow,this.skyDisc])e.geometry.dispose(),e.material.dispose();this.sunFx.dispose(),this.unwatchContext?.(),this.showContextNote(!1),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility);for(let e of["pointerdown","pointerup","wheel","keydown"])this.host.removeEventListener(e,this.onInput,{capture:!0});clearTimeout(this.decorTimer),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let e of this.robots.values()){e.led.dispose();for(let t of e.own)t.dispose()}this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose();for(let e of this.fans.values())e.mesh.geometry.dispose();this.fans.clear(),this.fanMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(e=>this.render(e)))}makeRenderer(e){let t=e==="low"||e==="auto"&&NE();this.lowQuality=t,this.applyWeather(),this.highQuality=e==="high";let n=new Fr({antialias:!t,alpha:!0,powerPreference:t?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:e==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Lt,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}watchRenderer(e){this.unwatchContext?.(),this.unwatchContext=fx(e.domElement,{lost:()=>{this.disposed||this.renderer!==e||(this.contextLost=!0,this.frame&&cancelAnimationFrame(this.frame),this.frame=0,this.showContextNote(!0))},restored:()=>{this.disposed||this.renderer!==e||(this.contextLost=!1,this.showContextNote(!1),this.redrawOnce(),this.invalidate())}})}redrawOnce(){this.shadowSig="",this.projections.resetPoses(),this.realism.touch()}showContextNote(e){if(!e){this.contextNote?.remove(),this.contextNote=null;return}if(this.contextNote)return;let t=document.createElement("div");t.className="fp3d-context-note",t.setAttribute("role","status"),t.textContent="The 3D view lost its graphics and is restarting\u2026",t.style.cssText="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);padding:10px 16px;border-radius:8px;background:rgba(0,0,0,.65);color:#fff;font:14px sans-serif;text-align:center;pointer-events:none",this.host.append(t),this.contextNote=t}makeControls(){return new vu(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(e,t)=>this.onTap(e,t),hold:(e,t)=>this.onHold(e,t),swipeStart:(e,t,n,r)=>this.swipeStart(e,t,n,r),swipeMove:e=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",e,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(e,t)=>this.grabFurniture(e,t),drag:(e,t,n)=>this.dragFurniture(e,t,n),drop:()=>this.dropFurniture(),doubleTap:(e,t)=>{let n=!!(this.floorId&&this.options.onRoomDoubleTap),r=n||this.options.onDeviceDoubleTap&&!this.furnish?this.pick(e,t):null;r&&"entity"in r&&!this.furnish&&this.options.onDeviceDoubleTap?.(r.entity,e,t)||(n&&r&&!("entity"in r)&&r.roomId?this.options.onRoomDoubleTap(r.floorId,r.roomId):this.options.onBack?.())}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1,n=this.camera.aspect;this.size={w:e,h:t},this.labelsDirty=!0,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),Ux(this.fitted,this.controls.goal,n,this.camera.aspect)&&this.fit(0),this.invalidate()}retired=[];disposeRetired(){if(this.retired.length){for(let e of this.retired)e.dispose();this.retired=[]}}updateRackDetail(){let e=this.camera.position,t=new $;for(let n of this.floors)if(!(!n.racks.length||!n.group.visible))for(let r of n.racks){let o=Ob(e.distanceTo(n.group.localToWorld(t.copy(r.centre))),r.near,this.lowQuality);if(o!==r.near){r.near=o,o&&!r.detail&&(r.detail=ey(n.floor,r.at,!0,n.materials),n.group.add(...r.detail));for(let s of r.slab)s.visible=!o;for(let s of r.detail??[])s.visible=o}}}clear(e=new Map){for(let t of this.robots.values())e.has(t.info.floorId)||t.group.removeFromParent();for(let t of this.fans.values())e.has(t.floorId)||t.group.removeFromParent();for(let t of this.floors)if(e.get(t.floor.id)!==t){for(let n of t.screenPics.values())n.mesh.material.dispose(),n.texture?.dispose();t.group.traverse(n=>{n.geometry?.dispose()});for(let n of Object.values(t.materials))this.retired.push(n);this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children]){let n=t.dataset;!n.entity&&!(n.floor&&e.has(n.floor))&&t.remove()}}makeDevicePin(e){let t=document.createElement("button");t.className="fp3d-dev",t.dataset.entity=e;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let o=document.createElement("span");o.className="fp3d-dev-watt";let s=document.createElement("span");s.className="fp3d-dev-name",t.append(n,r,o,s);let a,l=!1;t.addEventListener("pointerdown",h=>{if(this.furnish){this.pendingDevice=e;return}h.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let u=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,u.left+u.width/2-f.left,u.top+u.height/2-f.top)},SE)});let c=()=>clearTimeout(a);return t.addEventListener("pointerleave",c),t.addEventListener("pointercancel",c),t.addEventListener("pointerup",c),t.addEventListener("contextmenu",h=>h.preventDefault()),t.addEventListener("click",h=>{if(h.stopPropagation(),this.furnish){this.selectDevice(e),this.options.onDeviceSelect?.(e);return}if(l)return;let u=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(e,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}),t.addEventListener("keydown",h=>{if(h.key==="Enter"&&h.shiftKey||h.key==="ContextMenu"){h.preventDefault();let u=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}}),t}buildLightSurface(e){let t=this.lowQuality?.5:.25,n=e.floor,r=JSON.stringify([t,n.elevation,n.height,n.cut_height,n.rooms,n.walls,n.openings,e.geo.holes,this.building?.settings.roof??null,this.building?.settings.wall_exterior,this.building?.settings.wall_interior]),o=this.lightSurfaces.get(n.id),s=o?.key===r?o.surface:Mx(e.floor,e.geo.walls2d,e.geo.wallBuckets,e.geo.openings,t,e.geo.holes,e.geo.roofUnder);this.lightSurfaces.set(n.id,{key:r,surface:s});let a=Qx(e.floor,e.geo.openRooms);e.lightZones=a.some((u,f)=>u!==f)?a:null;let l=e.lightZones?{...s,room:s.room.slice(),doors:s.doors.map(u=>({...u})),blockers:s.blockers.map(u=>({...u}))}:s;if(e.lightZones){for(let u=0;u<l.room.length;u++){let f=l.room[u];f>=0&&f<a.length&&(l.room[u]=a[f])}for(let u of l.doors)u.a>=0&&u.a<a.length&&(u.a=a[u.a]),u.b>=0&&u.b<a.length&&(u.b=a[u.b]);for(let u of l.blockers)u.ra=is(a,u.ra),u.rb=is(a,u.rb)}e.lightSurface=l;let c=new Ve;c.setAttribute("position",new _e(l.pos,3)),c.setAttribute("color",new _e(new Float32Array(l.pos.length),3)),c.setAttribute("fold",new _e(l.fold,1));let h=new wr(new Uint32Array(l.pos.length/3),1);h.setUsage(Jh),c.setIndex(h),c.setDrawRange(0,0),c.computeBoundingSphere(),e.glowMesh.geometry.dispose(),e.glowMesh.geometry=c,e.glowSig="",this.buildGlow(e)}packLightAt(e){if(e.lamp!=="wall"||!e.pack)return null;let t=ut(e.pack);if(!t)return null;let[n,r,o]=e.size??Ca.wall;return tb(t,{x:e.x,z:e.z,rotation:e.rotation??0,w:n,d:r,h:o,mirror:e.mirror},e.base??0)}lightSources(e){let t=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==e.floor.id||!r)continue;let o=n.top??e.floor.height,s=Id(e.floor,n.x,n.z),a=is(e.lightZones,s),[l,,c]=n.size??(n.lamp?Ca[n.lamp]:[.3,.3,.3]),h=n.base??0,u={ceiling:[o-.12,"ceiling"],downlight:[o-.03,"spot"],spot:[o-c,"spot"],panel:[o-.05,"ceiling"],pendant:[Math.max(.5,o-c),"pendant"],fan:[Math.max(.5,o-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<LE?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,d]=n.lamp?u[n.lamp]:[n.y,"omni"],p=n.lightY??f,g=r.color;if(n.lamp==="strip"){let b=(n.rotation??0)*it,m=!!n.upright||Math.abs(n.roll??0)>45;for(let y of[-1/3,0,1/3])if(n.upright)t.push({x:n.x,y:h+l*(.5+y),z:n.z,color:g,level:r.level*.55,kind:"omni",room:a});else{let v=(n.rise??0)*it;t.push({x:n.x+Math.cos(b)*l*y*Math.cos(v),y:p+Math.sin(v)*l*y,z:n.z+Math.sin(b)*l*y*Math.cos(v),color:g,level:r.level*.55,kind:m||v?"omni":d,room:a})}}else{let b=this.packLightAt(n);t.push({x:b?b[0]:n.x,y:b?b[1]:p,z:b?b[2]:n.z,color:g,level:r.level,kind:d,room:a})}}return t.push(...this.lightFromAbove(e)),t}lightFromAbove(e){let t=e.floor.elevation+e.floor.height,n=this.floors.find(o=>o!==e&&Math.abs(o.floor.elevation-t)<.8&&o.geo.holes.length);if(!n)return[];let r=[];for(let o of n.geo.holes){if(o.length<3)continue;let s=0,a=[0,0,0];for(let h of this.devices){if(h.floorId!==n.floor.id)continue;let u=this.glowOf(h);if(!u)continue;let f=et([h.x,h.z],o)?0:wE(h.x,h.z,o);if(f>qx)continue;let d=u.level*(1-f/qx);for(let p=0;p<3;p++)a[p]+=u.color[p]*d;s+=d}if(s<.02)continue;let[l,c]=ia(o);r.push({x:l,y:e.floor.height-.05,z:c,color:[a[0]/s,a[1]/s,a[2]/s],level:Math.min(1,s)*.6,kind:"ceiling",room:is(e.lightZones,Id(e.floor,l,c))})}return r}buildGlow(e){let t=e.lightSurface;if(!t)return;let n=this.lightSources(e);this.buildSpill(e,n);let r=t.doors.map(u=>{let f=e.geo.openings.find(p=>p.opening.id===u.id);if(f&&pi(f.opening,f.exterior)==="passage")return 1;let d=e.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),o=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(o===e.glowSig)return;e.glowSig=o;let s=e.glowMesh.geometry,a=s.getAttribute("color");if(!n.length){e.glowMesh.visible=!1,s.setDrawRange(0,0);return}let l=Sx(t,n,.42,r);if(this.roomTint){let u=e.floor.rooms.length;for(let f=0;f<t.room.length;f++)if(t.room[f]!==u)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=s.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}s.index.needsUpdate=!0,s.setDrawRange(0,h),e.glowMesh.visible=h>0}makeMaterials(e){return{floor:Xt(new Ye({vertexColors:!0}),this.themeUniform),pattern:zE(this.patternTexture),wall:Xt(Nn(new Ye({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),e,"solid"),this.themeUniform),glassWall:Nn(new Ye({vertexColors:!0,transparent:!0,depthWrite:!1}),e,"glass"),shadow:new Ye({vertexColors:!0,blending:Vs,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:st,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Xt(Nn(new Jt({vertexColors:!0,transparent:!0,blending:Ea(this.theme),depthWrite:!1}),e),this.themeUniform,!0),glow:Nn(new Ye({vertexColors:!0,transparent:!0,blending:Rt,depthWrite:!1,side:st,polygonOffset:!0,polygonOffsetFactor:-3}),e,"solid"),frames:Xt(Nn(new Ye({vertexColors:!0,side:st}),e),this.themeUniform),glass:Nn(new Ye({vertexColors:!0,transparent:!0,blending:Rt,depthWrite:!1,side:st}),e),blinds:Xt(Nn(new Ye({map:this.blindTexture,vertexColors:!0,side:st}),e),this.themeUniform),water:Xt(new Ye({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:st}),this.themeUniform),flow:HE(this.flowTime),pipeLine:GE(this.flowTime),patch:new Ye({vertexColors:!0,transparent:!0,depthWrite:!1,side:st,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),patchGlow:new Ye({vertexColors:!0,transparent:!0,blending:Rt,depthWrite:!1,side:st,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),solarLive:Pd(this.flowTime),lamps:Xt(new Ye({vertexColors:!0}),this.themeUniform),halos:new Pi({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Rt,depthWrite:!1}),cones:new Ye({vertexColors:!0,transparent:!0,blending:Rt,depthWrite:!1,side:st}),screens:new Ye({vertexColors:!0,transparent:!0,blending:Rt,depthWrite:!1,side:st}),earth:Xt(new Ye({vertexColors:!0}),this.themeUniform),earthWell:Xt(new Ye({vertexColors:!0,side:st}),this.themeUniform),earthLines:Xt(new Jt({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(e=!1){let t=new Map(this.floors.map(p=>[p.floor.id,{y:p.y,o:p.o}])),n=new Map(this.floors.map(p=>[p.floor.id,p.openings])),r=this.building,o=fa(),s=r?Jb(r,`${Hc()}|${this.parkedSig}|${this.binSig}|${this.lowQuality}`,p=>p.furniture.some(da)?o:""):new Map,a=new Map;if(e)for(let p of this.floors)s.get(p.floor.id)===p.key&&a.set(p.floor.id,p);let l=!!r&&r.floors.length>1&&!this.floors.some(p=>s.has(p.floor.id)),c=l||this.pendingFloors.size>0,h=c&&r?Qb(r,this.floorId).find(p=>!a.has(p)):void 0,u=new Set;if(this.clear(a),!r)return;let f=[...r.floors].sort((p,g)=>p.elevation-g.elevation);for(let p of r.floors){let g=a.get(p.id);if(g){g.floor=p,g.rank=f.indexOf(p),this.floors.push(g);continue}if(c&&p.id!==h){u.add(p.id);continue}let b=r.settings.roof?.solar??[],m=Li(r)?.id===p.id?b.filter(R=>R.face===bd).map(R=>({field:R,face:ab(r,R)})):[],y=b.filter(R=>R.face.startsWith(`wall:${p.id}:`));if(y.length){let R=new Map(sb(r,p.id).map(Q=>[Q.key,Q]));for(let Q of y){let oe=R.get(Q.face);oe&&m.push({field:Q,face:oe})}}let x=$f(r).some(R=>j0(R,p.elevation+p.height)&&qf(R,p.elevation))?(R,Q)=>{let oe=J0(r,R,Q,p.elevation);return oe===null?null:oe-p.elevation}:void 0,_=_b(Td(this.placeBins(p),this.parked),r.settings.wall_exterior,r.settings.wall_interior,Sb(r.floors,p),m,x),w={standing:{value:65535},glass:{value:0}},S=this.makeMaterials(w),M=new At,A=new Me(_.floor,S.floor),E=new Me(_.shadow,S.shadow);E.renderOrder=1;let T=new Me(_.floor,S.pattern);T.renderOrder=2;let P=new Me(new Ve,S.glow);P.renderOrder=3,P.visible=!1;let F=new Me(new Ve,S.frames),L=new Me(new Ve,S.blinds),O=new Me(new Ve,S.glass);O.renderOrder=4;let C=new Me(new Ve,S.lamps);C.visible=!1;let k=new Me(new Ve,S.cones);k.visible=!1,k.renderOrder=3;let N=new Me(new Ve,S.cones);N.visible=!1,N.renderOrder=3;let U=new Zi(new Ve,S.halos);U.visible=!1,U.renderOrder=7;let V=new Me(new Ve,S.cones);V.visible=!1,V.renderOrder=7;let H=new Me(new Ve,S.cones);H.visible=!1,H.renderOrder=7;let B=new Me(new Ve,S.lamps);B.visible=!1;let z=new Me(new Ve,S.lamps);z.visible=!1;let q=_.racks.map(R=>({at:R,centre:new $(R.f.x,R.base+R.f.h/2,R.f.z),slab:ey(p,R,!1,S),detail:null,near:!1})),X=new Me(new Ve,S.lamps);X.visible=!1;let ee=new Me(new Ve,S.patch);ee.visible=!1,ee.renderOrder=3;let W=new Me(new Ve,S.patchGlow);W.visible=!1,W.renderOrder=3;let Y=new Me(new Ve,S.screens);Y.visible=!1,Y.renderOrder=5;let ie=new Me(new Ve,S.flow);ie.renderOrder=5,ie.frustumCulled=!1;let re=new Me(new Ve,S.pipeLine),te=new Me(new Ve,S.pipeLine),he=new Me(new Ve,S.pipeLine);for(let R of[re,te,he])R.renderOrder=4,R.frustumCulled=!1,R.visible=!1;let be=Rd(m,p.elevation),ne=be?new Me(be.geometry,S.solarLive):null;ne&&(ne.renderOrder=6,Aa(be,this.solarLevels));for(let R of[F,L,O])R.frustumCulled=!1;let ce=new Me(_.walls,S.glassWall),Pe=new Me(_.walls,S.wall);ce.renderOrder=6;let ye=new Me(_.water,S.water);ye.renderOrder=4;let Ze=Math.min(...r.floors.filter(R=>R.rooms.length).map(R=>R.elevation)),Ge=Eb(r,p,_.openings,p.elevation===Ze),nt=Ge?[new Me(Ge.earth.geometry(),S.earth),new Me(Ge.wells.geometry(),S.earthWell),new Ht(Ge.lines.geometry(),S.earthLines)]:[];for(let R of nt)R.userData.earth=!0;M.add(A,E,T,P,Pe,ye,new Ht(_.lines,S.lines),F,L,O,ie,re,te,he,C,k,N,U,V,H,B,z,...q.flatMap(R=>R.slab),X,ee,W,Y,ce,...ne?[ne]:[],...nt),this.root.add(M);let De=document.createElement("button");De.className="fp3d-pin fp3d-pin-floor",De.dataset.floor=p.id;let pt=document.createElement("b");pt.textContent=p.name||"\u2013";let K=document.createElement("span");K.textContent=this.floorInfo.get(p.id)??this.options.floorInfo?.(p)??"",De.append(pt,K),De.addEventListener("click",()=>this.options.onFloorTap?.(p.id)),this.labels.append(De);let Ot=t.get(p.id),lt=[],G=null;for(let R of qc(p)){let Q=document.createElement("button");Q.className="fp3d-pin",Q.dataset.room=R.id,Q.dataset.floor=p.id,this.fillRoomPin(Q,R.name,this.roomInfo.get(R.id)),Q.addEventListener("click",()=>this.options.onRoomTap?.(p.id,R.id)),this.labels.append(Q);let[oe,ue]=ia(R.points);if(lt.push({pin:Q,room:R,cx:oe,cz:ue}),!R.outdoor)for(let[xe,ve]of R.points)G??={x0:xe,x1:xe,z0:ve,z1:ve},G.x0=Math.min(G.x0,xe),G.x1=Math.max(G.x1,xe),G.z0=Math.min(G.z0,ve),G.z1=Math.max(G.z1,ve)}this.floors.push({floor:p,key:s.get(p.id)??"",rank:f.indexOf(p),group:M,geo:_,floorMesh:A,shadowMesh:E,patternMesh:T,glowMesh:P,lightSurface:null,lightZones:null,framesMesh:F,glassMesh:O,blindsMesh:L,flowMesh:ie,pipeLineMesh:re,pipeHouseMesh:te,pipeFloorMesh:he,pipeLineSig:"",solarMesh:ne,solarLive:be,lampMesh:C,sunMesh:k,sunSig:"",spillMesh:N,spillSig:"",haloMesh:U,coneMesh:V,trailMesh:H,fridgeMesh:B,rackLedMesh:z,racks:q,rackLedShape:"",rackLedColor:"",rackLedRanges:new Map,pipeMesh:X,pipeSig:"",patchMesh:ee,patchGlowMesh:W,patchSig:"",lampTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:Pe,screenMesh:Y,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:G,roomPins:lt,labelSize:null,materials:S,mask:w,openings:new Map,y:Ot?.y??0,o:Ot?.o??1,ty:0,to:1,appliedO:-1,lightAt:0,label:De})}this.floorMap=new Map(this.floors.map(p=>[p.floor.id,p]));for(let p of this.lightSurfaces.keys())this.floorMap.has(p)||this.lightSurfaces.delete(p);Mb(this.floorMap.keys());let d=this.floors.filter(p=>a.get(p.floor.id)!==p);for(let p of d)this.buildFridges(p),this.buildRackLeds(p),this.buildPipes(p),this.buildPatches(p);this.labelsDirty=!0,this.floorId&&!r.floors.some(p=>p.id===this.floorId)&&(this.floorId=null);for(let p of d){this.buildLamps(p),this.buildScreens(p);let g=n.get(p.floor.id);for(let b of p.geo.openings)p.openings.set(b.opening.id,g?.get(b.opening.id)??this.openingTargets.get(b.opening.id)??Ra);this.buildOpenings(p),this.buildFlows(p),p.poolGroup=void 0,this.buildPoolWater(p),this.buildLightSurface(p),this.buildSun(p)}this.applyTargets(t.size===0||c),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.buildSunFx(),this.applyRealism(),this.updateGhost(),this.pendingFloors=u,(l||t.size===0)&&this.warm(),u.size?(cancelAnimationFrame(this.floorFrame),this.floorFrame=requestAnimationFrame(()=>{this.floorFrame=0,setTimeout(()=>!this.disposed&&this.pendingFloors.size&&this.rebuilds.request(!0),0)})):c&&!l&&this.fitAll&&(Du(this.fitted,this.controls.goal)&&this.fit(0),this.fitAll=!1)}buildRoofMesh(){this.roof&&(this.roof.group.traverse(m=>m.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(m=>m.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let e=this.building?gb(this.building,this.roofWindows):[];if(this.roofGeos=e,this.shadowSig="",!e.length)return;let t=new Map(Yr(this.building).map(m=>[m.key,m])),n=this.building.settings.roof?.solar??[],r=Pd(this.flowTime),o=[],s=new At,a=Xt(new Ye({vertexColors:!0,transparent:!0,side:st}),this.themeUniform),l=Xt(new Jt({vertexColors:!0,transparent:!0,blending:Ea(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Xt(new Ye({vertexColors:!0,transparent:!0,side:st,depthWrite:!1}),this.themeUniform),h=new At,u=Xt(new Ye({vertexColors:!0,side:st}),this.themeUniform),f=Xt(new Ye({vertexColors:!0,transparent:!0,opacity:.35,side:st,depthWrite:!1}),this.themeUniform),d=Xt(new Ye({vertexColors:!0,transparent:!0,opacity:.35,side:st,depthWrite:!1}),this.themeUniform),p=Xt(new Jt({vertexColors:!0,transparent:!0,blending:Ea(this.theme),depthWrite:!1}),this.themeUniform,!0),g=[],b=e.map(m=>{let y=new At;y.add(new Me(m.solid.geometry(),a),new Ht(m.lines.geometry(),l)),m.glass.count&&y.add(new Me(m.glass.geometry(),c));let v=n.flatMap(w=>{let S=t.get(w.face);return S&&(S.section?m.sections?.includes(S.section):m===e[0])?[{face:S,field:w}]:[]}),x=Rd(v,m.floor.elevation+m.base);if(x){let w=new Me(x.geometry,r);w.renderOrder=9,y.add(w),o.push(x),Aa(x,this.solarLevels)}m.winRoof?.solid.count&&y.add(new Me(m.winRoof.solid.geometry(),u),new Ht(m.winRoof.lines.geometry(),p)),m.winRoof?.glass.count&&y.add(new Me(m.winRoof.glass.geometry(),d)),y.renderOrder=8,s.add(y);let _=null;(m.win?.solid.count||m.win?.glass.count)&&(_=new At,_.add(new Me(m.win.solid.geometry(),u),new Ht(m.win.lines.geometry(),p)),m.win.glass.count&&_.add(new Me(m.win.glass.geometry(),f)),h.add(_));for(let[w,S]of m.winBelow??[]){if(!S.solid.count&&!S.glass.count)continue;let M=new At;M.add(new Me(S.solid.geometry(),u),new Ht(S.lines.geometry(),p)),S.glass.count&&M.add(new Me(S.glass.geometry(),f)),h.add(M),g.push({floorId:w,win:M})}return{group:y,floorId:m.floor.id,rideId:rg(this.building,m.floor,m.sections??[]),base:m.base,lift:m.lift!==!1,win:_}});s.renderOrder=8,this.scene.add(s),this.scene.add(h),this.roof={group:s,parts:b,below:g,solid:a,lines:l,glass:c,live:r,lives:o,wins:h,winSolid:u,winLines:p,winGlass:f,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/$x)*2.2}placeRoof(e=1e3){let t=this.roof;if(!t)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),o=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?$x*n:0,s=1-Math.exp(-e/Yx),a=this.roofO;this.roofO+=(o-this.roofO)*s,Math.abs(o-this.roofO)<.004&&(this.roofO=o),t.group.visible=this.roofO>.02;for(let l of t.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let h=this.floorMap.get(l.rideId)??c,u=h.ty>0?Math.min(1,h.y/h.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+h.y+l.base+this.roofLift()+(l.lift?u*Xx:0),l.win&&(l.win.position.y=c.floor.elevation+h.y+l.base+(l.lift?u*Xx:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of t.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return t.solid.opacity=this.roofO,t.solid.depthWrite=this.roofO>.9,t.lines.opacity=this.roofO,t.glass.opacity=this.roofO*.28,t.roofWinGlass.opacity=this.roofO*.35,t.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==o}applyTierFlags(){let e=this.lowQuality;this.ground.visible=!e&&this.theme!=="day"&&this.theme!=="realistic"&&this.floors.some(t=>t.floor.rooms.length>0);for(let t of this.floors)t.patternMesh.visible=!e,t.shadowMesh.visible=!e&&t.o>.98;this.invalidate()}rebuildTier(){for(let e of this.floors)e.flowLayout="",this.buildFlows(e),this.buildLightSurface(e),e.lampShapeSig="",this.buildLamps(e)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(e){let t=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,o=1;t?n.rank>t.rank?(r=5+n.rank,o=0):n.rank<t.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,o=this.floorStack==="single"?0:ME)):r=this.explode?n.rank*iy:0,n.ty=r,n.to=o;let a=t===n?an:hi;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),e&&(n.y=r,n.o=o),this.applyFloor(n)}this.invalidate()}applyFloor(e){if(e.group.position.y=e.floor.elevation+e.y,e.group.visible=e.o>.02,e.shadowMesh.visible=e.o>.98&&!this.lowQuality,Math.abs(e.appliedO-e.o)<.001)return;e.appliedO=e.o;let t=e.materials,n=e.o>.999;for(let r of[t.floor,t.wall,t.frames,t.blinds,t.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=e.o;t.pattern.opacity=e.o,t.glow.opacity=e.o,t.lines.opacity=e.o,t.glass.opacity=e.o,t.glassWall.opacity=e.o,t.flow.opacity=e.o,t.solarLive.opacity=e.o,t.lamps.opacity=e.o,t.halos.opacity=e.o,t.cones.opacity=e.o,t.screens.opacity=e.o;for(let r of[t.earth,t.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=e.o;t.earthLines.opacity=e.o;for(let r of e.screenPics.values()){let o=r.mesh.material;o.transparent=e.o<.999,o.opacity=e.o}}stepFloors(e){let t=!1,n=1-Math.exp(-e/Yx);for(let r of this.floors){let o=r.ty-r.y,s=r.to-r.o;if(Math.abs(o)<.004&&Math.abs(s)<.004){(o!==0||s!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=o*n,r.o+=s*n,t=!0,this.applyFloor(r)}return t}stepOpenings(e){let t=!1,n=1-Math.exp(-e/Kx);for(let r of this.floors){let o=!1,s=!1;for(let[a,l]of r.openings){let c=this.openingTargets.get(a)??Ra,h=(d,p)=>(d??null)===(p??null)||typeof d=="number"&&typeof p=="number"&&Math.abs(d-p)<.003;if(h(c.open,l.open)&&h(c.open2??0,l.open2??0)&&h(c.tilt,l.tilt)&&h(c.tilt2??0,l.tilt2??0)&&h(c.cover,l.cover)&&!!c.sensed==!!l.sensed&&!!c.unlocked==!!l.unlocked)continue;let u={...l,open2:l.open2??0,tilt2:l.tilt2??0,sensed:c.sensed,unlocked:c.unlocked},f=!1;for(let d of["open","open2","tilt","tilt2"]){let p=c[d]??0,g=l[d]??0,b=p-g;Math.abs(b)<.003?u[d]=p:(u[d]=g+b*n,f=!0)}if(c.cover===null||l.cover===null)u.cover=c.cover;else{let d=c.cover-l.cover;Math.abs(d)<.003?u.cover=c.cover:(u.cover=l.cover+d*n,f=!0)}(u.open!==l.open||u.open2!==(l.open2??0)||u.tilt!==l.tilt||u.tilt2!==(l.tilt2??0)||u.cover!==l.cover||!!u.sensed!=!!l.sensed||!!u.unlocked!=!!l.unlocked)&&(r.openings.set(a,u),o=!0),t||=f,s||=f}if(o){this.buildOpenings(r);let a=performance.now();(!this.lowQuality||!s||a-r.lightAt>=FE)&&(r.lightAt=a,this.buildGlow(r),this.buildSun(r))}}return t}glowOf(e){if(!e.glow||!e.effect)return e.glow;let t=new j(...e.glow.color),n={h:0,s:0,l:0};t.getHSL(n);let r=(e.x*.37+e.z*.61)%1;return t.setHSL((n.h+this.effectTime*kE+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[t.r,t.g,t.b],level:e.glow.level}}buildLamps(e){this.paintCameraLooks(e);let t=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=t)return 0;let f=u-t,d=f>Ou?.5+.5*Math.sin(f/140):f/Ou;return Math.round(d*10)/10},r=this.devices.filter(h=>h.floorId===e.floor.id&&(h.lamp||h.model)),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(h=>`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${h.rise??0},${h.size?.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0},${h.motion?1:0}${h.colors?JSON.stringify(h.colors)+this.theme:""}${h.materials?JSON.stringify(h.materials):""}`).join(";"),s=r.map(h=>this.glowOf(h)),a=r.map((h,u)=>`${n(h.id)},${s[u]?`${s[u].level.toFixed(3)},${s[u].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==e.lampShapeSig||!e.lampMesh.geometry.getAttribute("position")){e.lampShapeSig=o,e.lampColorSig="";let h=new Qe,u=[],f=[],d=new Map,p=e.floor.height;for(let g of r){let b=g.lamp==="strip"?(g.base??p)>Math.min(e.floor.cut_height,p):g.lamp?jx.has(g.lamp)&&(g.top??p)>Math.min(e.floor.cut_height,p):g.model==="camera_ceiling";if(!g.lamp&&!g.model||b&&this.wallMode==="cut")continue;let m=h.count,y=g.pack?ut(g.pack):void 0,[v,x,_]=g.size??[.3,.3,.3];g.model?g.ownLook||Jg(h,g.model,g.x,g.model==="camera_ceiling"?p:g.y,g.z,g.rotation??0,!!g.motion):y?uu(h,y,{x:g.x,z:g.z,rotation:g.rotation??0,w:v,d:x,h:_,mirror:g.mirror,colors:g.colors,materials:g.materials},g.base??0,65280):Nd(h,{...g,lamp:g.lamp},g.top??p,65280,g.lamp!=="fan"),d.set(g.furnitureId??g.id,{start:m,end:h.count}),g.pickable!==!1&&u.push({id:g.id,start:m,end:h.count}),g.furnitureId&&f.push({id:g.furnitureId,start:m,end:h.count})}e.lampTris=u,e.lampFurnTris=f,e.lampRanges=d,e.lampShade=b0(h.c),e.lampMesh.geometry.dispose(),e.lampMesh.geometry=h.geometry(),e.lampMesh.visible=h.count>0}if(a===e.lampColorSig)return;e.lampColorSig=a;let l=e.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((h,u)=>{let f=e.lampRanges.get(h.furnitureId??h.id);if(!f)return;let d=s[u],p=d?.55+.45*d.level:0,g=d?new j(...d.color.map(y=>Math.min(1,y*p))):new j(IE),b=n(h.id);b>0&&g.lerp(new j(1,1,1),.7*b);let m=new j(g.getHex());x0(c,e.lampShade,f,[m.r,m.g,m.b])}),l.needsUpdate=!0,this.buildHalos(e)}buildSun(e){let t=this.building?.settings.sun_patches===!1||this.realPlan()?null:this.sun,n=(this.building?.settings.north??0)*it,r=this.weather?.cloud??0,o=Qx(e.floor,e.geo.openRooms),s=t?`${t.elevation.toFixed(1)},${t.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...e.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${o.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(s===e.sunSig)return;e.sunSig=s;let a=new Qe;if(t&&t.elevation>2&&r<.97){let l=Math.min(1,t.elevation/12)*(1-.8*r),c=t.elevation*it,h=t.azimuth*it,u=[Math.sin(n+h),-Math.cos(n+h)],f=1/Math.tan(c);for(let d of e.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let p=[-d.toRoom[0],-d.toRoom[1]],g=p[0]*u[0]+p[1]*u[1];if(g<.05)continue;let b=e.openings.get(d.opening.id),m=d.top-(b?.cover??0)*(d.top-d.sill);if(m-d.sill<.05)continue;let y=(T,P)=>{let F=Math.min(7,P*f);return[d.start[0]+d.axis[0]*T+d.toRoom[0]*d.faceRoom-u[0]*F,.02,d.start[1]+d.axis[1]*T+d.toRoom[1]*d.faceRoom-u[1]*F]},v=.14*l*Math.min(1,g*1.5),x=new j(1*v,.82*v,.55*v),_=x.clone().multiplyScalar(.45),w=e.floor.rooms.findIndex(T=>T.id===d.opening.room_id);if(w<0||e.floor.rooms[w].points.length<3)continue;let S=o[w],M=e.floor.rooms.filter((T,P)=>o[P]===S&&T.points.length>=3).map(T=>T.points),A=Math.max(1,Math.ceil(Math.min(7,m*f)/.25)),E=Math.max(1,Math.ceil(d.width/.3));for(let T=0;T<A;T++){let P=d.sill+(m-d.sill)*T/A,F=d.sill+(m-d.sill)*(T+1)/A,L=T/A,O=(T+1)/A,C=x.clone().lerp(_,L),k=x.clone().lerp(_,O);for(let N=0;N<E;N++){let U=d.width*N/E,V=d.width*(N+1)/E,H=y((U+V)/2,(P+F)/2);if(!M.some(ee=>et([H[0],H[2]],ee)))continue;let B=y(U,P),z=y(V,P),q=y(V,F),X=y(U,F);a.tri(B,z,q,C,C,k),a.tri(B,q,X,C,k,k)}}}this.pushRoofSun(e,a,o,u,c,l)}e.sunMesh.geometry.dispose(),e.sunMesh.geometry=a.geometry(),e.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(e,t,n,r,o,s){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(Yr(a).map(u=>[u.key,u])),h=[r[0]*Math.cos(o),Math.sin(o),r[1]*Math.cos(o)];for(let u of l){let f=c.get(u.face),d=pu(a,f,u);if(!f||!d||d.floor.id!==e.floor.id)continue;let p=f.n[0]*h[0]+f.n[1]*h[1]+f.n[2]*h[2],[g,b,m,y]=d.corners,v=Math.min(1,this.roofWindows.get(u.id)?.cover??0);if(v>.95)continue;let x=(L,O,C)=>[L[0]+(O[0]-L[0])*C,L[1]+(O[1]-L[1])*C,L[2]+(O[2]-L[2])*C],_=x(y,g,v),w=x(m,b,v),S=e.floor.rooms.findIndex(L=>L.id===d.roomId);if(S<0)continue;let M=e.floor.rooms.filter((L,O)=>n[O]===n[S]&&L.points.length>=3).map(L=>L.points),A=(L,O)=>{let C=(N,U)=>x(x(L[0],L[1],N),x(L[3],L[2],N),U);for(let N=0;N<6;N++)for(let U=0;U<6;U++){let V=C((N+.5)/6,(U+.5)/6);if(!M.some(X=>et([V[0],V[2]],X)))continue;let H=C(N/6,U/6),B=C((N+1)/6,U/6),z=C((N+1)/6,(U+1)/6),q=C(N/6,(U+1)/6);t.tri(H,B,z,O,O,O),t.tri(H,z,q,O,O,O)}},E=L=>[L[0],.019,L[2]],T=.06*s;if(A([E(g),E(b),E(w),E(_)],new j(.75*T,.85*T,1*T)),p<.05)continue;let P=L=>{let O=Math.min(7,(L[1]-e.floor.elevation)/Math.tan(o));return[L[0]-r[0]*O,.02,L[2]-r[1]*O]},F=.16*s*Math.min(1,p*1.5);A([P(g),P(b),P(w),P(_)],new j(1*F,.84*F,.6*F))}}paintCameraLooks(e){let t=e.wallMesh.geometry,n=t.getAttribute("color");if(!n)return;let r=new Set(this.devices.filter(h=>h.model&&h.motion&&h.floorId===e.floor.id).map(h=>h.id)),o=new Set(e.floor.furniture.filter(h=>h.look_of&&r.has(h.look_of)).map(h=>h.id)),s=[...o].sort().join(","),a=this.cameraPaint.get(t);if((a?.sig??"")===s)return;let l=n.array;for(let[h,u]of a?.ranges??[])l.set(u,h);let c=new Map;for(let h of e.geo.furnitureTris){if(!o.has(h.id))continue;let u=h.start*9,f=h.end*9;c.set(u,l.slice(u,f));for(let d=u;d<f;d+=3){let p=(l[d]+l[d+1]+l[d+2])/3,g=.45+.55*Math.min(1,p*2);l[d]=Ud.r*g,l[d+1]=Ud.g*g,l[d+2]=Ud.b*g}}this.cameraPaint.set(t,{sig:s,ranges:c}),n.needsUpdate=!0}buildHalos(e){if(this.lowQuality){e.haloMesh.visible=!1,e.coneMesh.visible=!1;return}let t=e.floor.height,n=[],r=[],o=new Qe;for(let a of this.devices){if(a.model)continue;let l=this.glowOf(a);if(a.floorId!==e.floor.id||!a.lamp||!l||jx.has(a.lamp)&&this.wallMode==="cut"&&(a.top??t)>Math.min(e.floor.cut_height,t))continue;let c=a.top??t,[h,u,f]=a.size??Ca[a.lamp],d=a.base??0,p=(a.rotation??0)*it,g={ceiling:c-.07,downlight:c-.03,spot:c-f,panel:c-.03,pendant:Math.max(.4,c-f)+.08,fan:Math.max(.5,c-Math.max(.25,f))+.02,floor:d+f-.15,uplight:d+f,table:d+f-.09,wall:d+f/2,strip:d+Math.max(.02,f)-.01,bollard:d+f-.08,garden:d+f-.03}[a.lamp],b=(m,y,v=1)=>{n.push(m,g,y),r.push(...l.color.map(x=>x*l.level*.7*v))};if(a.lamp==="strip")for(let m of[-.4,-.13,.13,.4])if(a.upright)n.push(a.x,d+h*(.5+m),a.z),r.push(...l.color.map(y=>y*l.level*.7*.6));else if(a.rise){let y=a.rise*it;n.push(a.x+Math.cos(p)*h*m*Math.cos(y),g+Math.sin(y)*h*m,a.z+Math.sin(p)*h*m*Math.cos(y)),r.push(...l.color.map(v=>v*l.level*.7*.6))}else b(a.x+Math.cos(p)*h*m,a.z+Math.sin(p)*h*m,.6);else if(a.lamp==="wall"){let m=this.packLightAt(a);m?(n.push(...m),r.push(...l.color.map(y=>y*l.level*.7))):b(a.x-Math.sin(p)*(u/2+.05),a.z+Math.cos(p)*(u/2+.05))}else b(a.x,a.z);if(this.highQuality&&(a.lamp==="downlight"||a.lamp==="spot")){let m=new j(...l.color.map(w=>w*.09*l.level)),y=new j(0,0,0),v=Math.max(.03,h/2),x=.45+.35*l.level,_=16;for(let w=0;w<_;w++){let S=w/_*Math.PI*2,M=(w+1)/_*Math.PI*2,A=[a.x+Math.cos(S)*v,g,a.z+Math.sin(S)*v],E=[a.x+Math.cos(M)*v,g,a.z+Math.sin(M)*v],T=[a.x+Math.cos(S)*x,.02,a.z+Math.sin(S)*x],P=[a.x+Math.cos(M)*x,.02,a.z+Math.sin(M)*x];o.tri(A,T,P,m,y,y),o.tri(A,P,E,m,y,m)}}}let s=new Ve;s.setAttribute("position",new _e(n,3)),s.setAttribute("color",new _e(r,3)),e.haloMesh.geometry.dispose(),e.haloMesh.geometry=s,e.haloMesh.visible=n.length>0,e.coneMesh.geometry.dispose(),e.coneMesh.geometry=o.geometry(),e.coneMesh.visible=o.count>0}buildScreens(e){let t=Td(this.placeBins(e.floor),this.parked).furniture.filter(s=>this.screens.has(s.id)),r=(ns.value?ts.value.toArray().map(s=>Math.round(s*255)).join(","):"")+"|"+t.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(r===e.screenSig&&e.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(e,t);e.screenSig=r;let o=new Qe;for(let s of t){let a=this.screens.get(s.id),l=Jc.has(s.type)?Qc(e.geo.walls2d,s,e.floor.height,Zt(e.floor,s)):null,c=l?{...s,x:l.x,z:l.z,mount_y:l.y}:s,h=c.rotation*it,u=Math.cos(h),f=Math.sin(h),d=(S,M,A)=>[c.x+S*u-A*f,M,c.z+S*f+A*u];if(a.faces){let S=Math.max(.05,c.w)*(c.mirror?-1:1),M=Math.max(.05,c.d),A=Math.max(.005,c.h),E=Zt(e.floor,c);for(let T of a.faces){if(T.part==="lights"){let B=ut(c.type),z=q=>["#e8f4ff","#ff3b4f"].includes(q.color.toLowerCase());if(B&&B.parts.some(z)){let q=new j(...T.color.map(X=>Math.min(1,X*(.4+.6*T.level))));jo(o,B,c,E,q.getHex(),z)}continue}if(T.part==="cabin"){let B=ut(c.type),z=q=>q.color.toLowerCase()==="#13283a"||q.color==="glass";if(B&&B.parts.some(z)){let q=new j(...T.color.map(X=>Math.min(1,X*(.3+.5*T.level))));jo(o,B,c,E,q.getHex(),z);continue}}if(T.part==="burners"&&ut(c.type)){let B=ut(c.type),z=new j(...T.color.map(q=>Math.min(1,q*(.25+.6*T.level))));jo(o,B,c,E,z.getHex(),M0);continue}if(T.part==="burners"){let B=new j(...T.color.map(q=>Math.min(1,q*(.25+.6*T.level)))),z=E+A+.008;for(let[q,X,ee]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let W=q*Math.abs(S)/.6,Y=X*M/.62,ie=14;for(let re=0;re<ie;re++){let te=re/ie*Math.PI*2,he=(re+1)/ie*Math.PI*2;o.tri(d(W,z,Y),d(W+Math.cos(te)*ee,z,Y+Math.sin(te)*ee),d(W+Math.cos(he)*ee,z,Y+Math.sin(he)*ee),B)}}continue}if(T.part==="band"||T.part==="cabin"){let B=T.part==="cabin",z=E+A*(B?.6:.42),q=B?E+A*.86:z+.07,X=new j(...T.color.map(ie=>Math.min(1,ie*(.3+.45*T.level)))),ee=Math.abs(S)/2+(B?.012:.02),W=M/2+(B?.012:.02),Y=[[-ee,-W],[ee,-W],[ee,W],[-ee,W]];for(let ie=0;ie<4;ie++){let re=Y[ie],te=Y[(ie+1)%4],he=d(re[0]*Math.sign(S),z,re[1]),be=d(te[0]*Math.sign(S),z,te[1]),ne=d(te[0]*Math.sign(S),q,te[1]),ce=d(re[0]*Math.sign(S),q,re[1]);o.tri(he,be,ne,X),o.tri(he,ne,ce,X)}continue}if(T.part==="strata"){let B=T.top??T.color,z=.22+.4*T.level,q=new j(...T.color.map(te=>Math.min(1,te*z))),X=new j(...B.map(te=>Math.min(1,te*z))),ee=E+A*.06,W=E+A*.94,Y=Math.abs(S)/2+.012,ie=M/2+.012,re=20;for(let te=0;te<re;te++){let he=te/re*Math.PI*2,be=(te+1)/re*Math.PI*2,ne=[Math.cos(he)*Y,Math.sin(he)*ie],ce=[Math.cos(be)*Y,Math.sin(be)*ie];o.tri(d(ne[0],ee,ne[1]),d(ce[0],ee,ce[1]),d(ce[0],W,ce[1]),q,q,X),o.tri(d(ne[0],ee,ne[1]),d(ce[0],W,ce[1]),d(ne[0],W,ne[1]),q,X,X)}continue}if(T.part==="chamber"){let B=ut(c.type),z=new j(...T.color.map(q=>Math.min(1,q*(.4+.6*T.level))));B&&jo(o,B,c,E,z.getHex());continue}if(T.part==="progress"){let B=Math.min(Math.abs(S),M)*.42,z=E+A+.008,q=new j(...T.color.map(ie=>Math.min(1,ie*(.4+.6*T.level)))),X=q.clone().multiplyScalar(.15),ee=40,W=Math.round(Math.min(1,Math.max(0,T.fill??0))*ee),Y=(ie,re)=>d(Math.sin(ie)*re,z,-Math.cos(ie)*re);for(let ie=0;ie<ee;ie++){let re=ie/ee*Math.PI*2,te=(ie+1)/ee*Math.PI*2,he=ie<W?q:X;o.tri(Y(re,B*.8),Y(re,B),Y(te,B),he),o.tri(Y(re,B*.8),Y(te,B),Y(te,B*.8),he)}continue}if(T.part==="apring"){let B=c.variant==="wall",z=Math.abs(S),q=B?Math.min(z,A)*.3:Math.min(z,M)*.3,X=new j(...T.color.map(ie=>Math.min(1,ie*(.4+.6*T.level)))),ee=new j(0,0,0),W=24,Y=(ie,re)=>B?d(Math.cos(ie)*re,E+A/2+Math.sin(ie)*re,M/2+.004):d(Math.cos(ie)*re,E-.003,Math.sin(ie)*re);for(let ie=0;ie<W;ie++){let re=ie/W*Math.PI*2,te=(ie+1)/W*Math.PI*2;o.tri(Y(re,q*.8),Y(re,q),Y(te,q),X),o.tri(Y(re,q*.8),Y(te,q),Y(te,q*.8),X),o.tri(Y(re,q),Y(re,q*1.5),Y(te,q*1.5),X,ee,ee),o.tri(Y(re,q),Y(te,q*1.5),Y(te,q),X,ee,X)}continue}if(T.part==="drum"){let B=Math.abs(S),z=Math.min(B*.36,(A-.2)*.42),q=E+(A-.14)/2+.04,X=M/2-.006,ee=new j(...T.color.map(te=>Math.min(1,te*(.35+.65*T.level)))),W=ee.clone().multiplyScalar(.12),Y=new j(0,0,0),ie=28,re=(te,he)=>d(Math.cos(te)*he,q+Math.sin(te)*he,X);for(let te=0;te<ie;te++){let he=te/ie*Math.PI*2,be=(te+1)/ie*Math.PI*2;o.tri(d(0,q,X),re(he,z*.78),re(be,z*.78),W),o.tri(re(he,z*.78),re(he,z),re(be,z),ee),o.tri(re(he,z*.78),re(be,z),re(be,z*.78),ee),o.tri(re(he,z),re(he,z*1.18),re(be,z*1.18),ee,Y,Y),o.tri(re(he,z),re(be,z*1.18),re(be,z),ee,Y,ee)}continue}if(T.part==="gang"){let B=Math.max(1,T.of??1),z=Math.abs(S),q=z/B,X=(-z/2+q*((T.index??0)+.5))*Math.sign(S),ee=M/2+(c.variant==="outdoor"?.02:.008),W=T.accent?ns.value?ts.value.toArray():_E:T.color,Y=new j(...W.map(ye=>Math.min(1,ye*(.35+.65*T.level)))),ie=Y.clone().multiplyScalar(.5),re=new j(0,0,0),te=q*.34,he=E+A*.16,be=E+A*.84,ne=[d(X-te,he,ee),d(X+te,he,ee),d(X+te,be,ee),d(X-te,be,ee)];o.tri(ne[0],ne[1],ne[2],Y),o.tri(ne[0],ne[2],ne[3],Y);let ce=.012+.015*T.level,Pe=[d(X-te-ce,he-ce,ee-.001),d(X+te+ce,he-ce,ee-.001),d(X+te+ce,be+ce,ee-.001),d(X-te-ce,be+ce,ee-.001)];for(let ye=0;ye<4;ye++){let Ze=(ye+1)%4;o.tri(ne[ye],Pe[Ze],Pe[ye],ie,re,re),o.tri(ne[ye],ne[Ze],Pe[Ze],ie,ie,re)}continue}if(T.part==="beacon"){let B=new j(...T.color.map(be=>Math.min(1,be*(.25+.45*T.level)))),z=new j(0,0,0),q=E+A+.01,X=.6+.6*T.level,ee=Math.min(Math.abs(S),M)*.38;for(let[be,ne]of[[ee,0],[0,ee]]){let ce=d(-be,q,-ne),Pe=d(be,q,ne),ye=d(be*.4,q+X,ne*.4),Ze=d(-be*.4,q+X,-ne*.4);o.tri(ce,Pe,ye,B,B,z),o.tri(ce,ye,Ze,B,z,z)}let W=Zt(e.floor,{...c,mount_y:0})+.012,Y=Math.abs(S)/2+.03,ie=M/2+.03,re=.22+.18*T.level,te=(be,ne,ce)=>d(be*(Y+ce),W,ne*(ie+ce)),he=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let be=0;be<4;be++){let[ne,ce]=he[be],[Pe,ye]=he[(be+1)%4];o.tri(te(ne,ce,0),te(Pe,ye,0),te(Pe,ye,re),B,B,z),o.tri(te(ne,ce,0),te(Pe,ye,re),te(ne,ce,re),B,z,z)}continue}let P=T.part==="right"?.03:-Math.abs(S)/2+.03,F=T.part==="left"?-.03:Math.abs(S)/2-.03,L=E+(T.part==="bottom"?A*.45:A)+.006,O=new j(...T.color.map(B=>Math.min(1,B*(.35+.65*T.level)))),C=new j(0,0,0),k=(B,z,q=L)=>d(B*Math.sign(S),q,z),N=[k(P,-M/2+.03),k(F,-M/2+.03),k(F,M/2-.03),k(P,M/2-.03)];o.tri(N[0],N[2],N[1],O),o.tri(N[0],N[3],N[2],O);let U=T.part==="lid"?.025+.02*T.level:.12+.1*T.level,V=O.clone().multiplyScalar(T.part==="lid"?.7:.5),H=[k(P-U,-M/2-U,L+.004),k(F+U,-M/2-U,L+.004),k(F+U,M/2+U,L+.004),k(P-U,M/2+U,L+.004)];for(let B=0;B<4;B++){let z=(B+1)%4;o.tri(N[B],H[z],H[B],V,C,C),o.tri(N[B],N[z],H[z],V,V,C)}}continue}let p=ut(c.type);if(p&&!p.light&&a.ring&&p.parts.some(S=>S.glow)){let S=new j(...a.color.map(M=>Math.min(1,M*(.45+.55*a.level))));jo(o,p,c,Zt(e.floor,c),S.getHex())}let g=md(c,e.floor);if(!g)continue;let b=new j(...a.color.map(S=>Math.min(1,S*(.35+.65*a.level)))),m=new j(0,0,0),y=g.z+.004;if(o.tri(d(g.x0,g.y0,y),d(g.x1,g.y0,y),d(g.x1,g.y1,y),b),o.tri(d(g.x0,g.y0,y),d(g.x1,g.y1,y),d(g.x0,g.y1,y),b),a.plain)continue;let v=.18+.12*a.level,x=b.clone().multiplyScalar(.5),_=[d(g.x0,g.y0,y),d(g.x1,g.y0,y),d(g.x1,g.y1,y),d(g.x0,g.y1,y)],w=[d(g.x0-v,g.y0-v,y+.01),d(g.x1+v,g.y0-v,y+.01),d(g.x1+v,g.y1+v,y+.01),d(g.x0-v,g.y1+v,y+.01)];for(let S=0;S<4;S++){let M=(S+1)%4;o.tri(_[S],w[S],w[M],x,m,m),o.tri(_[S],w[M],_[M],x,m,x)}}e.screenMesh.geometry.dispose(),e.screenMesh.geometry=o.geometry(),e.screenMesh.visible=o.count>0,this.updateScreenPictures(e,t)}updateScreenPictures(e,t){let n=new Map(t.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,o]of e.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(e.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),o.texture?.dispose(),e.screenPics.delete(r));for(let[r,o]of n){let s=this.screens.get(r),a=md(o,e.floor);if(!a)continue;let l=e.screenPics.get(r);if(!l){let c=new Me(new Xn(1,1),new Ye({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:s.picture,mesh:c,texture:null},e.screenPics.set(r,l),e.group.add(c);let h=l;new Er().load(s.picture,u=>{if(e.screenPics.get(r)!==h){u.dispose();return}u.colorSpace=Lt,h.texture=u;let f=h.mesh.material;f.map=u,f.needsUpdate=!0,this.placeScreenPicture(h.mesh,o,a,u),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*s.level),l.texture&&this.placeScreenPicture(l.mesh,o,a,l.texture)}}placeScreenPicture(e,t,n,r){let o=r.image,s=o?.width&&o?.height?o.width/o.height:16/9,{w:a,h:l}=qg(n.x1-n.x0,n.y1-n.y0,s),c=t.rotation*it,h=(n.x0+n.x1)/2,u=n.z+.008;e.scale.set(a,l,1),e.rotation.set(0,-c,0),e.position.set(t.x+h*Math.cos(c)-u*Math.sin(c),(n.y0+n.y1)/2,t.z+h*Math.sin(c)+u*Math.cos(c))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(e){this.buildPipeLines(e);let t=this.flows.filter(d=>d.floorId===e.floor.id&&!d.pipe).map(Pa).join(";"),n=[],r=[],o=[],s=[],a=[],l=[],c=[],h=[];for(let d of this.flows){if(d.floorId!==e.floor.id||d.pipe)continue;let p=this.flowPhase.get(Pa(d))??{speed:Fu(d.power),offset:0},g=d.power>.5?Math.min(1,.5+d.power/2500):.22,b=d.color.map(A=>A*g),m=d.dots?.length?d.dots:[{color:d.color,share:1}],y=[0,1,2].map(A=>m[Math.min(A,m.length-1)].color.map(E=>E*g)),v=m.length>1?m[0].share:1,x=m.length>2?v+m[1].share:1,_=Math.hypot(d.b[0]-d.a[0],d.b[1]-d.a[1],d.b[2]-d.a[2]);if(_<1e-4)continue;let w=[(d.b[0]-d.a[0])/_,(d.b[1]-d.a[1])/_,(d.b[2]-d.a[2])/_],S=[];if(Math.abs(w[1])<.5){let A=Math.hypot(w[0],w[2])||1;S.push([-w[2]/A,0,w[0]/A])}else S.push([1,0,0],[0,0,1]);let M=this.lowQuality?[[Zx*1.4,1]]:[[RE,.25],[Zx,1]];for(let[A,E]of M)for(let T of S){let P=A*(d.width??1)*(d.thick??1)/2,F=(O,C)=>[O[0]+T[0]*P*C,O[1]+T[1]*P*C,O[2]+T[2]*P*C],L=[[F(d.a,-1),d.dist,0],[F(d.b,-1),d.dist+_,0],[F(d.b,1),d.dist+_,1],[F(d.a,1),d.dist,1]];for(let O of[0,1,2,0,2,3]){let[C,k,N]=L[O];n.push(C[0],C[1],C[2]),r.push(b[0]*E,b[1]*E,b[2]*E),o.push(k,N),s.push(p.speed),a.push(p.offset),l.push(y[0][0]*E,y[0][1]*E,y[0][2]*E,v),c.push(y[1][0]*E,y[1][1]*E,y[1][2]*E,x),h.push(y[2][0]*E,y[2][1]*E,y[2][2]*E)}}}let u=e.flowMesh.geometry;if(t===e.flowLayout&&u.getAttribute("position")?.count===n.length/3){for(let[d,p]of[["position",n],["color",r],["flowSpeed",s],["flowOffset",a],["flowDot1",l],["flowDot2",c],["flowDot3",h]]){let g=u.getAttribute(d);g.array.set(p),g.needsUpdate=!0}e.flowMesh.visible=n.length>0;return}e.flowLayout=t;let f=new Ve;f.setAttribute("position",new _e(n,3)),f.setAttribute("color",new _e(r,3)),f.setAttribute("uv",new _e(o,2)),f.setAttribute("flowSpeed",new _e(s,1)),f.setAttribute("flowOffset",new _e(a,1)),f.setAttribute("flowDot1",new _e(l,4)),f.setAttribute("flowDot2",new _e(c,4)),f.setAttribute("flowDot3",new _e(h,3)),e.flowMesh.geometry.dispose(),e.flowMesh.geometry=f,e.flowMesh.visible=n.length>0}buildPipeLines(e){let t=this.flows.filter(r=>r.floorId===e.floor.id&&r.pipe),n=JSON.stringify(t.map(r=>[r.a,r.b,r.dist,r.color,r.width,r.house,r.floor,Math.round(r.power/50),this.flowPhase.get(Pa(r))?.speed??0]));if(n!==e.pipeLineSig){e.pipeLineSig=n;for(let r of["all","house","floor"]){let o=[],s=[],a=[],l=[],c=[];for(let f of t){if((f.house?"house":f.floor?"floor":"all")!==r)continue;let d=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1],f.b[2]-f.a[2]);if(d<1e-4)continue;let p=this.flowPhase.get(Pa(f))??{speed:Fu(f.power),offset:0},g=[(f.b[0]-f.a[0])/d,(f.b[1]-f.a[1])/d,(f.b[2]-f.a[2])/d],b=[];if(Math.abs(g[1])<.5){let x=Math.hypot(g[0],g[2])||1;b.push([-g[2]/x,0,g[0]/x])}else b.push([1,0,0],[0,0,1]);let m=AE*(f.width??1),y=f.power>.5?1:.62,v=[[m+EE*2,[.02,.025,.05],.78,2],[m,f.color.map(x=>x*y),1,0]];for(let[x,_,w,S]of v)for(let M of b){let A=x/2,E=S===0?.002:0,T=(F,L)=>[F[0]+M[0]*A*L,F[1]+M[1]*A*L+E,F[2]+M[2]*A*L],P=[[T(f.a,-1),f.dist,S],[T(f.b,-1),f.dist+d,S],[T(f.b,1),f.dist+d,S+1],[T(f.a,1),f.dist,S+1]];for(let F of[0,1,2,0,2,3]){let[L,O,C]=P[F];o.push(L[0],L[1],L[2]),s.push(_[0],_[1],_[2],w),a.push(O,C),l.push(p.speed),c.push(p.offset)}}}let h=r==="house"?e.pipeHouseMesh:r==="floor"?e.pipeFloorMesh:e.pipeLineMesh,u=new Ve;u.setAttribute("position",new _e(o,3)),u.setAttribute("color",new _e(s,4)),u.setAttribute("uv",new _e(a,2)),u.setAttribute("flowSpeed",new _e(l,1)),u.setAttribute("flowOffset",new _e(c,1)),h.geometry.dispose(),h.geometry=u,h.userData.filled=o.length>0}this.applyHouseLines(e)}}applyHouseLines(e){for(let t of e?[e]:this.floors)t.pipeLineMesh.visible=!!t.pipeLineMesh.userData.filled,t.pipeHouseMesh.visible=!!t.pipeHouseMesh.userData.filled&&this.floorId===null,t.pipeFloorMesh.visible=!!t.pipeFloorMesh.userData.filled&&this.floorId!==null}buildOpenings(e){let t=Cx(e.geo.openings,e.openings,Math.min(e.floor.cut_height,e.floor.height));e.frameTris=t.frameTris,e.glassTris=t.glassTris,e.blindTris=t.blindTris;for(let[n,r]of[[e.framesMesh,t.frames],[e.glassMesh,t.glass],[e.blindsMesh,t.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(e=>e.to>.99)}applyHighlight(){for(let e of this.floors){let t=e.geo.floor.getAttribute("color"),n=e.geo.roomTris.map(r=>`${this.roomTint?.get(r.roomId)?.join(",")??""}${r.roomId===this.roomId?"*":""}${this.roomGlow.has(r.roomId)?"+":""}`).join(";");if(this.highlighted.get(t)!==n){this.highlighted.set(t,n);for(let r of e.geo.roomTris){let o=new j(r.color),s=this.roomTint?.get(r.roomId);s?o.lerp(new j(...s).multiplyScalar(.6),.9):this.roomGlow.has(r.roomId)&&o.lerp(DE,.6),r.roomId===this.roomId&&o.lerp(OE,s?.3:.75);for(let a=r.start*3;a<r.end*3;a++)t.setXYZ(a,o.r,o.g,o.b)}t.needsUpdate=!0}}for(let e of this.labels.querySelectorAll(".fp3d-pin"))e.classList.toggle("fp3d-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(e){let t=new _n;for(let f of this.activeFloors()){let d=f.floor.elevation+f.ty;for(let p of f.floor.rooms)for(let[g,b]of p.points)t.expandByPoint(new $(g,d,b)),t.expandByPoint(new $(g,d+f.floor.height,b))}t.isEmpty()&&t.set(new $(-4,0,-4),new $(4,2.5,4)),this.placeGround(),this.weatherBox={x0:t.min.x-6,x1:t.max.x+6,z0:t.min.z-6,z1:t.max.z+6,y0:t.min.y,y1:t.max.y+6},this.applyWeather(),this.placeSky();let n=t.getCenter(new $),r=t.getSize(new $),o=Math.max(8,ku(r.length()/2,this.camera.fov,this.camera.aspect,this.fitMargin)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,o*3),n.y=t.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=o);let s=this.floorId===null,a=s?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(s||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,Dd(l.radius,this.camera.fov,this.camera.aspect)*1.5));let h=c?l.target:null;if(h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.keepNext){this.keepNext=!1,this.fitted=null;let f=this.controls.view;this.controls.flyTo({target:new $(f.target.x,n.y,f.target.z),radius:f.radius,phi:f.phi,theta:f.theta},e);return}let u=c?Dd(l.radius,this.camera.fov,this.camera.aspect):o;this.controls.flyTo({target:n,radius:u,phi:l?l.phi:.85,theta:l?l.theta:-.6},e,!!l),this.fitted=this.controls.goal}placeGround(){let e=new _n,t=1/0;for(let s of this.floors){t=Math.min(t,s.floor.elevation+Math.min(0,s.ty));for(let a of s.floor.rooms)for(let[l,c]of a.points)e.expandByPoint(new $(l,0,c));for(let a of s.floor.outdoor??[])for(let[l,c]of a.points)e.expandByPoint(new $(l,0,c))}if(this.ground.visible=!e.isEmpty()&&!this.lowQuality&&this.theme!=="day"&&this.theme!=="realistic",e.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=XE();let s=this.ground.material;s.map=this.groundTexture,s.needsUpdate=!0}let n=e.getCenter(new $),r=e.getSize(new $),o=Bd*Math.ceil((Math.max(r.x,r.z)+16)/Bd);this.ground.scale.set(o,o,1),this.ground.position.set(n.x,t-sn-.02,n.z)}distanceFor(e){let t=this.camera.fov*it,n=2*Math.atan(Math.tan(t/2)*this.camera.aspect);return e.length()/2/Math.sin(Math.min(t,n)/2)}rayAt(e,t){let n=this.renderer.domElement.getBoundingClientRect(),r=new zs;return r.setFromCamera(new Je(e/n.width*2-1,-(t/n.height)*2+1),this.camera),r}pick(e,t){let n=this.rayAt(e,t),r=this.activeFloors(),o=r.flatMap(a=>[a.lampMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh,...ty(a)].filter(l=>l.visible)),s=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(h=>h.group===a.object.parent);if(a.object===c.lampMesh){let h=s(c.lampTris,l);if(h)return{entity:h}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??tt;if(f!==tt&&Math.floor(f/16)===0)continue}let h=s(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),u=h?this.pickOpenings.get(h):void 0;if(u)return{entity:u}}else if(a.object===c.wallMesh||a.object.userData.rackId){let h=a.object.userData.rackId??s(c.geo.furnitureTris,l),u=h?this.rackHit(c,h,a.point,n.ray.direction):null;if(u?.slot)return{floorId:c.floor.id,roomId:null,rack:u};let f=h?this.pickFurniture.get(h):void 0;if(f)return{entity:f};if(u)return{floorId:c.floor.id,roomId:null,rack:u};if(!h&&a.face&&a.face.normal.y>.7){let d=Df(c.floor).find(p=>et([a.point.x,a.point.z],p.points));if(d)return{floorId:c.floor.id,roomId:d.id}}if(a.face&&!h){let d=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,p=Math.floor(d/16),g=d%16,b=this.wallMode==="cut"&&p===0,m=(c.mask.glass.value&1<<g)!==0;if(!b){let y=n.ray.direction,v=Math.hypot(y.x,y.z)||1,x=[a.point.x-y.x/v*.3,a.point.z-y.z/v*.3],_=c.floor.rooms.find(w=>w.points.length>=3&&et(x,w.points))?.id??null;if(this.roomId!==null){if(_===this.roomId)return{floorId:c.floor.id,roomId:_}}else if(!m&&_)return{floorId:c.floor.id,roomId:_}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:s(c.geo.roomTris.map(h=>({id:h.roomId,start:h.start,end:h.end})),l)??null}}return null}rackHit(e,t,n,r){let o=e.floor.furniture.find(_=>_.id===t),s=o?.rack?.slots,a=s?.length?Vi(ut(o.type)):null;if(!o||!s||!a)return null;let l=e.group.worldToLocal(n.clone()),c=o.rotation*it,h=Math.cos(c),u=Math.sin(c),f=l.x-o.x,d=l.z-o.z,p=[(o.mirror?-1:1)*(f*h+d*u),l.y-Zt(e.floor,o),-f*u+d*h],g=e.group.worldToLocal(n.clone().add(r)).sub(l),b=[(o.mirror?-1:1)*(g.x*h+g.z*u),g.y,-g.x*u+g.z*h],[m,y,v]=[Math.max(.05,o.w),Math.max(.05,o.d),Math.max(.005,o.h)],x=up(a,m,y,v,gr(Gi(a,m,y,v),s,ut),p,b);return{id:t,slot:x?s.find(_=>_.id===x)??null:null,f:o}}onTap(e,t){let n=this.pick(e,t);if(n&&"rack"in n&&n.rack){if(this.furnish)return;let r=pp(n.rack.f,ut);r&&this.options.onRackTap?.(n.rack.id,r,n.rack.slot?.id??null);return}if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Ou),this.invalidate(),this.options.onDeviceTap?.(n.entity,e,t);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(e,t){let n=this.rayAt(e,t),r=this.activeFloors(),o=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],s=r.flatMap(a=>[a.lampMesh,a.wallMesh,...ty(a),...o(a)].filter(l=>l.visible));for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=r.find(u=>u.group===a.object.parent||o(u).includes(a.object));if(!l)continue;if(a.object.userData.rackId)return{fv:l,id:a.object.userData.rackId,y:a.point.y};if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let u=this.furnitureNear(l,a.point.x,a.point.z);if(u)return{fv:l,id:u,y:a.point.y};continue}let h=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(u=>a.faceIndex>=u.start&&a.faceIndex<u.end)?.id;if(h)return{fv:l,id:h,y:a.point.y}}return null}furnitureNear(e,t,n){let r=null;for(let o of e.floor.furniture){let s=o.rotation*it,a=t-o.x,l=n-o.z,c=Math.abs(a*Math.cos(s)+l*Math.sin(s))-o.w/2,h=Math.abs(-a*Math.sin(s)+l*Math.cos(s))-o.d/2,u=Math.max(c,h);u<.25&&(!r||u<r.d)&&(r={id:o.id,d:u})}return r?.id??null}floorPoint(e,t,n,r){let o=this.rayAt(t,n),s=r??e.floor.elevation+e.y,a=o.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(s-o.ray.origin.y)/a.y;return l<=0?null:[o.ray.origin.x+a.x*l,o.ray.origin.z+a.z*l]}setFurnishTypes(e){this.furnishTypes=e?new Set(e):null}setSurfaceGrab(e){this.surfaceGrab=e}pointerRay(e,t){return this.surfaceRay(e,t)}furnitureIdAt(e,t){return this.furnitureAt(e,t)?.id??null}surfaceRay(e,t){let n=this.rayAt(e,t).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(e,t){if(this.surfaceGrab?.start(this.surfaceRay(e,t)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let s=n?this.devices.find(u=>u.id===n)?.furnitureId:void 0,a=s?null:this.furnitureAt(e,t),l=s??a?.id,c=l?this.floors.find(u=>u.floor.furniture.some(f=>f.id===l)):void 0,h=c?.floor.furniture.find(u=>u.id===l)?.type;return!!(c&&l&&h&&r.has(h))&&this.grabItem(c,l,e,t)}if(n){let s=this.devices.find(l=>l.id===n)?.furnitureId,a=s?this.floors.find(l=>l.floor.furniture.some(c=>c.id===s)):void 0;return!s||!a?this.grabDevice(n,e,t):this.grabItem(a,s,e,t)}let o=this.furnitureAt(e,t);if(!o){let s=this.pick(e,t);return s&&"entity"in s?this.grabDevice(s.entity,e,t):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(o.fv,o.id,e,t,o.y)}grabItem(e,t,n,r,o){let s=e.floor.furniture.find(u=>u.id===t),a=o===void 0?void 0:Math.min(o,this.camera.position.y-.3),l=this.floorPoint(e,n,r,a);if(!s||!l)return!1;let c,h=this.rayAt(n,r).ray.direction;if(o!==void 0&&-h.y<.34){let u=this.camera.position,f=this.camera.getWorldDirection(new $),d=Math.hypot(f.x,f.z)||1,p=[f.x/d,f.z/d],g=Math.hypot(l[0]-u.x,l[1]-u.z,(a??0)-u.y),b=this.renderer.domElement.getBoundingClientRect().height||1,m=2*g*Math.tan(this.camera.fov*Math.PI/360)/b;c={x0:n,y0:r,fx:s.x,fz:s.z,right:[-p[1],p[0]],fwd:p,perPx:m,gain:Math.min(2,1/Math.max(.5,-h.y))}}return s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:e.floor.id,id:s.id,offset:[s.x-l[0],s.z-l[1]],x:s.x,z:s.z,moved:!1,plane:a,screen:c},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(e,t,n){let r=this.devices.find(a=>a.id===e),o=r&&this.floorMap.get(r.floorId),s=o&&this.floorPoint(o,t,n);return!r||!o||!s?!1:r.fixed?(this.selectDevice(e),this.options.onDeviceSelect?.(e),!1):(this.deviceGrab={id:e,floorId:o.floor.id,offset:[r.x-s[0],r.z-s[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(e),this.options.onDeviceSelect?.(e),!0)}setSelectedDevice(e){e!==this.selectedDevice&&this.selectDevice(e)}selectDevice(e){e&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=e;for(let[t,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",t===e)}dragFurniture(e,t,n=!1){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(e,t));return}let r=this.deviceGrab;if(r){let b=this.floorMap.get(r.floorId),m=this.devices.find(x=>x.id===r.id),y=b&&this.floorPoint(b,e,t);if(!b||!m||!y)return;let v=this.building?.settings.grid??.05;r.x=m.x=Math.round((y[0]+r.offset[0])/v)*v,r.z=m.z=Math.round((y[1]+r.offset[1])/v)*v,r.moved=!0,this.labelsDirty=!0,this.invalidate();return}let o=this.grab,s=o&&this.floorMap.get(o.floorId);if(!o||!s)return;let a=o.screen,l;if(a){let b=(e-a.x0)*a.perPx,m=(t-a.y0)*a.perPx*a.gain;l=[a.fx+a.right[0]*b-a.fwd[0]*m-o.offset[0],a.fz+a.right[1]*b-a.fwd[1]*m-o.offset[1]]}else l=this.floorPoint(s,e,t,o.plane);if(!l)return;let c=this.building?.settings.grid??.05,h=s.floor.furniture.find(b=>b.id===o.id),u=l[0]+o.offset[0],f=l[1]+o.offset[1],d=h&&!n?Db([u,f],Fb(h),o.lines??=this.alignLinesOf(s.floor,h.id),a?a.perPx*Ib:.08):null,p=d?.x?d.p[0]:n?Math.round(u*100)/100:Math.round(u/c)*c,g=d?.z?d.p[1]:n?Math.round(f*100)/100:Math.round(f/c)*c;[o.x,o.z]=h?Pb(s.floor,h,p,g,this.building?.settings.wall_interior??0):[p,g],o.moved=!0,this.updateGhost(),this.invalidate()}alignLinesOf(e,t){let n=[];for(let r of e.furniture)r.id!==t&&n.push(Md(r));return kb(n,e.rooms)}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let e=this.deviceGrab;this.deviceGrab=null,e?.moved&&this.options.onDeviceMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3);let t=this.grab;this.grab=null,t?.moved&&this.options.onFurnitureMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let e=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],t=new Pt,n;for(let r of e){let o=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),s=o?.floor.furniture.find(a=>a.id===r);!o||!s||(n??=o,this.ghostBox(t,o,s,r===this.selectedFurniture?new j(.25,.9,1):new j(1,.71,.28)))}n&&(this.ghost=new Ht(t.geometry(),new Jt({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(e,t,n,r){let o=this.grab?.id===n.id?this.grab.x:n.x,s=this.grab?.id===n.id?this.grab.z:n.z,a=t.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=ut(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Zt(t.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:Zt(t.floor,n),u=n.rotation*it,f=Math.cos(u),d=Math.sin(u),p=(b,m,y)=>[o+b*f-m*d,y,s+b*d+m*f],g=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let b=0;b<4;b++){let[m,y]=g[b],[v,x]=g[(b+1)%4];e.seg(p(m,y,h+.01),p(v,x,h+.01),r),e.seg(p(m,y,h+c),p(v,x,h+c),r),e.seg(p(m,y,h+.01),p(m,y,h+c),r)}e.seg(p(-n.w/2,n.d/2+.03,h+.02),p(n.w/2,n.d/2+.03,h+.02),new j(1,1,1))}onHold(e,t){let n=this.pick(e,t);if(n&&"entity"in n)this.options.onDeviceHold?.(n.entity,e,t);else if(n&&"rack"in n&&n.rack&&!this.furnish){let r=n.rack.slot?op(n.rack.slot)[0]:void 0;r?this.options.onDeviceHold?.(r,e,t):this.onTap(e,t)}}swipeStart(e,t,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let o=this.pick(e,t);return!o||!("entity"in o)||this.options.onDeviceSwipe?.(o.entity,"start",0,e,t)!==!0?!1:(this.swipe={entity:o.entity,x:e,y:t},!0)}floorThumbnails(e=200,t=150){let n=this.floors.filter(m=>m.floor.rooms.some(y=>y.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),o=Math.round(e*r),s=Math.round(t*r),a=new Kt(o,s);a.texture.colorSpace=Lt;let l=new Rn(-1,1,1,-1,.1,400),c=this.floors.map(m=>({fv:m,visible:m.group.visible,y:m.y,o:m.o,standing:m.mask.standing.value,glass:m.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(o*s*4),p=document.createElement("canvas");p.width=o,p.height=s;let g=p.getContext("2d"),b=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let m of n){for(let F of this.floors)F.group.visible=F===m;m.y=0,m.o=1,this.applyFloor(m),m.group.visible=!0,m.mask.standing.value=0,m.mask.glass.value=0;let y=m.floor.rooms.flatMap(F=>F.points),v=m.floor.elevation,x=new _n(new $(Math.min(...y.map(F=>F[0]))-.3,v,Math.min(...y.map(F=>F[1]))-.3),new $(Math.max(...y.map(F=>F[0]))+.3,v+Math.min(m.floor.cut_height,m.floor.height),Math.max(...y.map(F=>F[1]))+.3)),_=x.getCenter(new $),w=-.6,S=.8,M=new $(Math.sin(S)*Math.sin(w),Math.cos(S),Math.sin(S)*Math.cos(w));l.position.copy(_).addScaledVector(M,100),l.lookAt(_),l.updateMatrixWorld();let A=.5,E=.5;for(let F of[x.min.x,x.max.x])for(let L of[x.min.y,x.max.y])for(let O of[x.min.z,x.max.z]){let C=new $(F,L,O).applyMatrix4(l.matrixWorldInverse);A=Math.max(A,Math.abs(C.x)),E=Math.max(E,Math.abs(C.y))}let T=o/s;A/E>T?E=A/T:A=E*T,l.left=-A*1.05,l.right=A*1.05,l.top=E*1.05,l.bottom=-E*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,o,s,d);let P=g.createImageData(o,s);for(let F=0;F<s;F++)P.data.set(d.subarray((s-1-F)*o*4,(s-F)*o*4),F*o*4);g.putImageData(P,0,0),b.push({floorId:m.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let m of c)m.fv.y=m.y,m.fv.o=m.o,m.fv.mask.standing.value=m.standing,m.fv.mask.glass.value=m.glass,this.applyFloor(m.fv),m.fv.group.visible=m.visible;this.roof&&(this.roof.group.visible=h,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return b}setRobots(e){let t=new Set;for(let n of e){t.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let o=r.info.mode,s=n.mode==="cleaning"&&o==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(o!=="cleaning"||s||!r.motion.path.length)){let a=n.room?Lx(n.room,void 0,void 0,n.obstacles):kd(n.rest),l=a.length?a:kd(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-r.motion.pos[0],h[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!et(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Wx[n.mode])}for(let[n,r]of this.robots)if(!t.has(n)){r.group.removeFromParent(),r.led.dispose();for(let o of r.own)o.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(e){let t=e.model;return t&&ut(t.type)?`${t.type}|${t.w}|${t.d}|${t.h}`:""}makeRobot(e){let t={pos:[...e.rest],heading:e.restHeading,path:[],next:0},n=new Ye({color:Wx[e.mode]}),r=this.robotModelKey(e),o=e.model?ut(e.model.type):void 0;if(e.model&&o&&r){let{w:a,d:l,h:c}=e.model,h=new Qe,{radius:u,top:f}=Qg(h,o,a,l,c),d=new Qe,p=Math.min(.05,u*.3),g=Math.min(.1,u*.55);Ft(d,[[-p,g],[p,g],[p,g+p*.8],[-p,g+p*.8]],f,f+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new Ye({vertexColors:!0});let b=[h.geometry(),d.geometry()],m=new At;return m.add(new Me(b[0],this.robotMat),new Me(b[1],n)),{info:e,motion:t,group:m,led:n,own:b,modelKey:r}}if(!this.robotGeo){let a=new Qe,l=(h,u,f,d,p)=>{let g=[];for(let b=0;b<20;b++)g.push([Math.cos(b/20*Math.PI*2)*h,Math.sin(b/20*Math.PI*2)*h]);Ft(a,g,u,f,d,p,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new Ye({vertexColors:!0});let c=new Qe;Ft(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let s=new At;return s.add(new Me(this.robotGeo,this.robotMat),new Me(this.robotLedGeo,n)),{info:e,motion:t,group:s,led:n,own:[],modelKey:r}}syncFans(e){let t=new Set;for(let n of e){if(n.lamp!=="fan")continue;let r=n.furnitureId??n.id;t.add(r);let[o,,s]=n.size??Ca.fan,a=n.top??this.floorMap.get(n.floorId)?.floor.height??2.5,l=o/2,c=this.fans.get(r);if(c&&Math.abs(c.r-l)>.001&&(c.group.removeFromParent(),c.mesh.geometry.dispose(),this.fans.delete(r),c=void 0),!c){let h=new Qe;oy(h,0,0,0,l,0),this.fanMat??=new Ye({vertexColors:!0});let u=new Me(h.geometry(),this.fanMat),f=new At;f.add(u),f.rotation.y=-((n.rotation??0)*it),c={group:f,mesh:u,r:l,speed:0,floorId:n.floorId,y:0},this.fans.set(r,c)}c.floorId=n.floorId,c.speed=n.fanSpeed??0,c.y=ry(a,s),c.group.position.set(n.x,c.y,n.z)}for(let[n,r]of this.fans)t.has(n)||(r.group.removeFromParent(),r.mesh.geometry.dispose(),this.fans.delete(n));this.fanLast=0}stepFans(e){if(!this.fans.size)return!1;let t=this.fanLast?Math.min(.2,(e-this.fanLast)/1e3):0;this.fanLast=e;let n=!1;for(let r of this.fans.values()){let o=this.floorMap.get(r.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),r.group.visible=!(this.wallMode==="cut"&&r.y>Math.min(o.floor.cut_height,o.floor.height)),!(r.speed<=0)&&(n=!0,r.group.rotation.y-=r.speed*Math.PI*2*t))}return n||(this.fanLast=0),n}stepRobots(e){if(!this.robots.size)return!1;let t=this.robotLast?Math.min(.2,(e-this.robotLast)/1e3):0;this.robotLast=e;let n=!1;for(let r of this.robots.values()){let o=this.floorMap.get(r.info.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),t>0?n=Fx(r.motion,r.info,t)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(e,t=[]){this.trailArgs={spots:e,paths:t},this.drawTrail()}drawTrail(){let{spots:e,paths:t}=this.trailArgs,n=a=>new j(.25-.2*a,.95-.83*a,1-.7*a),r=new j(0,0,0),o=new j(.3,1,.6),s=.02;for(let a of this.floors){let l=new Qe;for(let h of t)h.floorId===a.floor.id&&h.points.forEach(([u,f],d)=>{let p=h.points[d-1];if(p){let g=Math.hypot(u-p[0],f-p[1])||1,b=-(f-p[1])/g*.1,m=(u-p[0])/g*.1;l.tri([p[0]+b,s,p[1]+m],[u+b,s,f+m],[u-b,s,f-m],o,o,o),l.tri([p[0]+b,s,p[1]+m],[u-b,s,f-m],[p[0]-b,s,p[1]-m],o,o,o)}for(let g=0;g<10;g++){let b=g/10*Math.PI*2,m=(g+1)/10*Math.PI*2;l.tri([u,s,f],[u+Math.cos(m)*.35,s,f+Math.sin(m)*.35],[u+Math.cos(b)*.35,s,f+Math.sin(b)*.35],o,r,r)}});let c=null;for(let h of e){if(h.floorId!==a.floor.id)continue;let u=n(h.age);if(c){let f=Math.hypot(h.x-c.x,h.z-c.z)||1,d=-(h.z-c.z)/f*.06,p=(h.x-c.x)/f*.06,g=n(c.age);l.tri([c.x+d,s,c.z+p],[h.x+d,s,h.z+p],[h.x-d,s,h.z-p],g,u,u),l.tri([c.x+d,s,c.z+p],[h.x-d,s,h.z-p],[c.x-d,s,c.z-p],g,u,g)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,p=(f+1)/12*Math.PI*2;l.tri([h.x,s,h.z],[h.x+Math.cos(p)*.22,s,h.z+Math.sin(p)*.22],[h.x+Math.cos(d)*.22,s,h.z+Math.sin(d)*.22],u,r,r)}c=h}for(let h of this.binCues){if(h.floorId!==a.floor.id)continue;let u=new j(h.color),[f,d]=h.from,[p,g]=h.to,b=Math.hypot(p-f,g-d)||1,m=(p-f)/b,y=(g-d)/b,v=.05;for(let[x,_]of jb(h.from,h.to,h.skip,.32))l.tri([x[0]-y*v,s,x[1]+m*v],[_[0]-y*v,s,_[1]+m*v],[_[0]+y*v,s,_[1]-m*v],u,u,u),l.tri([x[0]-y*v,s,x[1]+m*v],[_[0]+y*v,s,_[1]-m*v],[x[0]+y*v,s,x[1]-m*v],u,u,u);if(b>h.skip+.32){let x=p-m*.32,_=g-y*.32;l.tri([x-y*.16,s,_+m*.16],[p-m*.02,s,g-y*.02],[x+y*.16,s,_-m*.16],u,u,u)}for(let x=0;x<16;x++){let _=x/16*Math.PI*2,w=(x+1)/16*Math.PI*2,S=.3,M=.36,A=[p+Math.cos(_)*S,s,g+Math.sin(_)*S],E=[p+Math.cos(w)*S,s,g+Math.sin(w)*S],T=[p+Math.cos(_)*M,s,g+Math.sin(_)*M],P=[p+Math.cos(w)*M,s,g+Math.sin(w)*M];l.tri(A,P,T,u,u,u),l.tri(A,E,P,u,u,u)}}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(e,t=900){this.controls.flyTo(e,t)}lookThrough(e){let t=this.devices.find(c=>c.id===e&&c.model),n=t&&this.floorMap.get(t.floorId);if(!t||!n)return!1;let r=(t.rotation??0)*it,o=t.model==="camera_ceiling",s=Math.min(1.45,Math.max(.22,(t.tilt??(o?65:20))*it)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:t.y),l=new $(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s));return this.controls.flyTo({target:new $(t.x,a,t.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-s,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(e){let t=performance.now()+Ou;for(let n of e)this.flashes.set(n,t);e.length&&this.invalidate()}focus(e,t,n,r,o,s){let a=this.floorMap.get(e);if(a){if(this.controls.flyTo({target:new $(t,a.floor.elevation+a.ty+r,n),radius:s?.radius??5.5,phi:s?.phi??.78,...s?.theta!==void 0?{theta:s.theta}:{}},900),o){this.flashes.set(o,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(o)}"]`);l?.classList.add("fp3d-dev-found"),setTimeout(()=>l?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(e){if(this.frame=0,this.disposed||this.contextLost||this.warming)return;let t=this.lastFrame?Math.min(100,e-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,e-this.orbitLast)/1e3),this.orbitLast=e,n=!0):this.orbitLast=0;let r=this.controls.update(e),o=this.stepFloors(t),s=this.stepOpenings(t)||this.stepFridges(t),a=!1;if(this.flashes.size){let y=new Set;for(let[v,x]of this.flashes){let _=this.deviceFloor.get(v);_&&y.add(_),x<=e&&this.flashes.delete(v)}a=this.flashes.size>0;for(let v of this.floors)y.has(v.floor.id)&&this.buildLamps(v)}let l=this.placeRoof(t),c=this.stepRobots(e),h=this.stepFans(e),u=this.stepWeather(e),f=r||o||s||a||l,d=[];(r||this.controls.busy)&&d.push("camera"),o&&d.push("floors"),s&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.poolActive&&d.push("pool"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),c&&d.push("robot"),h&&d.push("fan"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?e:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(e),this.updateWalls(),this.updateRackDetail(),this.projections.active&&this.updateProjections(),this.sunFx.showShadow(this.floorId===null&&this.shadowSig!==""),this.realism.active&&this.realism.realize(this.scene,!!this.realPlan(),this.renderer,o||s||l||c||h);let p=Nx(this.controls.view.radius,this.size.h);for(let y of this.floors)y.materials.halos.size=p;this.renderer.render(this.scene,this.camera),this.disposeRetired(),(this.viewChanged()||o||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(e,d),f&&this.invalidate();let g=this.flowActive||this.solarActive||this.soundActive||this.poolActive||c||h||this.effectFloors.size>0;g&&!this.decorWas&&(this.lastWake=e),this.decorWas=g;let b=this.effectFloors.size?this.decor(this.lowQuality?2*Jx:Jx):null;if(b!==null&&!this.effectTimer&&!document.hidden){let y=b;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=y/1e3,this.effectTick=!0;for(let v of this.floors)v.o<.02||!this.effectFloors.has(v.floor.id)||(this.buildLamps(v),this.buildGlow(v));this.decorTimer||this.invalidate()},y)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33));let m=this.flowActive||this.solarActive||this.soundActive||this.poolActive;if(this.lowQuality){let y=c||m||h?this.decor(h?83:0,h?83:void 0):null;!f&&y!==null&&!this.decorTimer&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},y));return}!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},33)),!f&&h&&!this.fanTimer&&(this.fanTimer=setTimeout(()=>{this.fanTimer=void 0,this.invalidate()},50)),!f&&m&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},TE))}updateWalls(){let e=this.camera.position,t=this.controls.view.target,n=e.x-t.x,r=e.z-t.z,o=Math.hypot(n,r)||1;for(let s of this.floors){let a=this.roomId!==null&&s.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;s.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/o+h[1]*r/o>=.25:a;!l&&f&&(c|=1<<u)}),s.mask.standing.value=l?0:65535,s.mask.glass.value=c}}viewChanged(){let e=this.controls.view,t=this.viewKey;return t[0]===e.target.x&&t[1]===e.target.y&&t[2]===e.target.z&&t[3]===e.radius&&t[4]===e.theta&&t[5]===e.phi?!1:(t[0]=e.target.x,t[1]=e.target.y,t[2]=e.target.z,t[3]=e.radius,t[4]=e.theta,t[5]=e.phi,!0)}place(e,t){let n=t===null;e.hidden!==n&&(e.hidden=n),t!==null&&this.placed.get(e)!==t&&(this.placed.set(e,t),e.style.transform=t)}updateLabels(){let{w:e,h:t}=this.size,n=new $,r=this.houseView,o=[];for(let s of this.floors){let a=s.bbox;if(!(r&&s.o>.5&&a)){this.place(s.label,null);continue}let l=null,c=null,h=s.floor.elevation+s.y+s.floor.cut_height*.5;for(let g of[a.x0,a.x1])for(let b of[a.z0,a.z1]){n.set(g,h,b).project(this.camera);let m=(n.x+1)/2*e,y=(1-n.y)/2*t;(!l||m<l.x)&&(l={x:m,y}),(!c||m>c.x)&&(c={x:m,y})}s.label.hidden&&(s.label.hidden=!1),s.labelSize??={w:s.label.offsetWidth,h:s.label.offsetHeight};let u=s.labelSize.w,f=8+this.labelInset,d=l.x-u-14,p=l.y;d<f&&this.labelInset&&(d=c.x+14,p=c.y),o.push({fv:s,left:Math.max(f,Math.min(e-u-8,d)),y:p,h:s.labelSize.h})}o.sort((s,a)=>a.fv.rank-s.fv.rank);for(let s=1;s<o.length;s++){let a=o[s-1];o[s].y=Math.max(o[s].y,a.y+(a.h+o[s].h)/2+8)}for(let s of o)this.place(s.fv.label,`translate(${s.left}px, ${s.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((s,a)=>{let l=this.floorMap.get(s.floorId);if(this.roomId!==null&&s.room!==this.roomId||s.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(s.views==="house"||s.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new $(s.p[0],s.p[1]+(l?.y??0)+(s.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),s.p[2]),h=this.camera.position.clone().sub(c),u=h.length();if(s.near!==void 0&&u>s.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=h.normalize().dot(new $(s.n[0],s.n[1],s.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*s.size;this.anchorCb(a,(n.x+1)/2*e,(1-n.y)/2*t,!d,p,f)}),this.updateDevicePins(e,t);for(let s of this.floors){let a=s.to<.99||s.o<.9||r||this.roomId!==null||this.otherFloor(s),l=s.floor.elevation+s.y+.05;for(let c of s.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}}otherFloor(e){return this.floorId!==null&&e.floor.id!==this.floorId}updateDevicePins(e,t){let n=new $,r=this.houseView;for(let o of this.persons){let s=this.personPins.get(o.id),a=this.floorMap.get(o.floorId),l=this.figures.get(o.id);if(!s)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(s,null),l?.visible&&(l.visible=!1,this.invalidate());continue}let c=this.personAt.get(o.id);if(!c||c.floorId!==o.floorId)c={floorId:o.floorId,x:o.x,z:o.z};else{let f=o.x-c.x,d=o.z-c.z;Math.hypot(f,d)>.02?(c={floorId:o.floorId,x:c.x+f*.12,z:c.z+d*.12},this.labelsDirty=!0,this.invalidate()):c={floorId:o.floorId,x:o.x,z:o.z}}this.personAt.set(o.id,c);let h=a.floor.elevation+a.y;if(l){let f=Math.atan2(this.camera.position.x-c.x,this.camera.position.z-c.z);(!l.visible||l.position.x!==c.x||l.position.y!==h||l.position.z!==c.z||l.rotation.y!==f)&&(l.visible=!0,l.position.set(c.x,h,c.z),l.rotation.y=f,this.invalidate())}n.set(c.x,h+(l?1.85:.9),c.z).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(s,u?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}for(let o of this.devices){let s=this.devicePins.get(o.id)?.el;if(!s)continue;let a=this.floorMap.get(o.floorId),l=o.id.startsWith("detect:")||o.id.startsWith("hh:")&&o.active;if(!a||r&&!l||a.to<.99||a.o<.9||o.pin===!1||this.otherFloor(a)){this.place(s,null);continue}if(n.set(o.x,a.floor.elevation+a.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(s,null);continue}let h=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(s)!==h&&(this.pinMode.set(s,h),s.classList.toggle("fp3d-dev-full",h==="full"),s.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(s,`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}reportStats(e,t){if(!this.statsOn||!this.options.onStats)return;let n=t.length>0;this.fpsStart||(this.fpsStart=e),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,e-this.lastStatsFrame)),this.lastStatsFrame=n?e:0,this.fpsFrames++;let r=e-this.fpsStart;if(r>500||!n){let o=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:t,worstMs:Math.round(this.worstFrame),calls:o.calls,triangles:o.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=UE(this.renderer)}),this.fpsFrames=0,this.fpsStart=e,this.worstFrame=0}}};function UE(i){try{let e=i.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),n=t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER);return typeof n=="string"?n:null}catch{return null}}function BE(){let e=document.createElement("canvas");e.width=256*3,e.height=256*2;let t=e.getContext("2d"),n=(s,a,l,c,h)=>{t.strokeStyle=`rgba(55,224,255,${h})`,t.beginPath(),t.moveTo(s,a),t.lineTo(l,c),t.stroke()};t.lineWidth=1.5;let r=(s,a,l)=>{t.save(),t.beginPath(),t.rect(s*256,a*256,256,256),t.clip(),l(s*256,a*256),t.restore()};r(0,0,(s,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(s,c,s+256,c,.09);let h=s+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),r(1,0,(s,a)=>{for(let l=0;l<7;l++){let c=s+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),r(2,0,(s,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(s+c,a,s+c,a+256,.1),n(s,a+c,s+256,a+c,.1)}}),r(1,1,(s,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(s,c,s+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(s+u+.75,c,s+u+.75,c+256/2,.09)}}),r(2,1,(s,a)=>{n(s+.75,a,s+.75,a+256,.08),n(s,a+.75,s+256,a+.75,.08),t.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)t.fillRect(s+l*97%256,a+(l*61+l*l%37)%256,2,2)});let o=new pn(e);return o.flipY=!1,o.wrapS=An,o.wrapT=An,o.anisotropy=4,o.colorSpace=Lt,o}function zE(i){let e=new Ye({map:i,transparent:!0,blending:Rt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},e.customProgramCacheKey=()=>"fp3d-pattern",e}function VE(){let i=document.createElement("canvas");i.width=8,i.height=32;let e=i.getContext("2d");e.fillStyle="#1a2742",e.fillRect(0,0,8,32),e.fillStyle="#223556",e.fillRect(0,4,8,14),e.fillStyle="rgba(55,224,255,0.45)",e.fillRect(0,29,8,2);let t=new pn(i);return t.wrapS=Mr,t.wrapT=Mr,t.colorSpace=Lt,t}function Pa(i){let e=t=>Math.round(t*100);return`${i.floorId}:${i.a.map(e).join(",")}>${i.b.map(e).join(",")}${i.width?`~${i.width}`:""}`}function GE(i){let e=new Ye({vertexColors:!0,transparent:!0,depthWrite:!1,side:st,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return e.onBeforeCompile=t=>{t.uniforms.uFlowTime=i,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`)},e.customProgramCacheKey=()=>"fp3d-pipe-line",e}function HE(i){let e=new Ye({vertexColors:!0,transparent:!0,blending:Rt,depthWrite:!1,side:st});return e.onBeforeCompile=t=>{t.uniforms.uFlowTime=i,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
vFlowDot3 = flowDot3;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = (diffuseColor.rgb * 0.3 + fp3dDotColor * 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},e.customProgramCacheKey=()=>"fp3d-flow",e}function Qx(i,e){let t=i.rooms.map((r,o)=>o),n=r=>t[r]===r?r:t[r]=n(t[r]);for(let[r,o]of e){let s=i.rooms.findIndex(h=>h.id===r),a=i.rooms.findIndex(h=>h.id===o);if(s<0||a<0)continue;let l=n(s),c=n(a);l!==c&&(t[Math.max(l,c)]=Math.min(l,c))}return t.map((r,o)=>n(o))}function WE(){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new pn(e);return r.colorSpace=Lt,r}function XE(){let e=Bd,t=document.createElement("canvas");t.width=1024,t.height=1024;let n=t.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let s=0;s<=e;s++){let a=Math.round(s/e*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let o=new pn(t);return o.anisotropy=4,o.colorSpace=Lt,o}function ey(i,e,t,n){let r=wb(i,e,t),o=new Me(r.mesh,n.wall),s=new Ht(r.lines,n.lines);return o.userData.rackId=s.userData.rackId=e.f.id,[o,s]}function ty(i){return i.racks.map(e=>e.near&&e.detail?e.detail[0]:e.slab[0])}function tk(i,e){return new zd(i,e)}function ry(i,e){return Math.max(.5,i-Math.max(.25,e))+.11}function oy(i,e,t,n,r,o){let a=Math.max(.22,r);for(let l=0;l<4;l++){let c=o+l*Math.PI/2,h=Math.cos(c),u=Math.sin(c),d=[[.12,-.045],[a,-.065],[a,.065],[.12,.045]].map(([p,g])=>[e+p*h-g*u,n+p*u+g*h]);Ft(i,d,t-.006,t+.006,PE,CE,{aoFrom:0,bottom:!0})}}function Nd(i,e,t,n,r=!0){let[o,s,a]=e.size??Ca[e.lamp],l=e.base??0,c=(e.rotation??0)*it,h=Math.cos(c),u=Math.sin(c),f=(b,m)=>[e.x+b*h-m*u,e.z+b*u+m*h],d=(b,m,y,v,x,_=14)=>{let w=[];for(let S=0;S<_;S++){let M=S/_*Math.PI*2;w.push([e.x+Math.cos(M)*b,e.z+Math.sin(M)*b])}Ft(i,w,m,y,v,x,{aoFrom:0,bottom:!0})},p=(b,m,y,v,x,_,w,S=w)=>Ft(i,[f(b,y),f(m,y),f(m,v),f(b,v)],x,_,w,S,{aoFrom:0,bottom:!0}),g=Math.max(.05,Math.min(o,s)/2);switch(e.lamp){case"ceiling":d(g*.25,t-.04,t,at,at,8),d(g,t-Math.max(.04,a)-.035,t-.04,n,n);break;case"pendant":{let b=Math.max(.4,t-a);d(.06,t-.02,t,at,at,8);let m=e.variant==="globe"?b+2*g:e.variant==="drum"?b+.24:b+.2;if(d(.008,m,t-.02,at,at,5),e.variant==="globe")for(let v=0;v<7;v++){let x=Math.PI*(v/7),_=Math.PI*((v+1)/7);d(g*Math.max(.2,Math.sin((x+_)/2)),b+g-g*Math.cos(x),b+g-g*Math.cos(_),n,n,14)}else if(e.variant==="cone")for(let v=0;v<4;v++)d(g*(.25+.75*(4-v)/4),b+.06*v,b+.06*(v+1),n,n,16);else e.variant==="drum"?d(g,b,b+.24,n,n,18):(d(g*.35,b+.14,b+.2,n,n,12),d(g,b,b+.14,n,n,16));break}case"fan":{let b=Math.max(.5,t-Math.max(.25,a));d(.06,t-.03,t,at,at,10),d(.012,b+.16,t-.03,at,at,6),d(.13,b+.07,b+.16,at,at,16),d(.11,b,b+.07,n,n,16),r&&oy(i,e.x,ry(t,a),e.z,o/2,c);break}case"downlight":d(g,t-.012,t,at,at,12),d(g*.7,t-.02,t-.012,n,n,12);break;case"spot":d(g*.6,t-.02,t,at,at,10),d(g,t-Math.max(.06,a),t-.02,at,at,12),d(g*.8,t-Math.max(.06,a)-.008,t-Math.max(.06,a),n,n,12);break;case"panel":p(-o/2,o/2,-s/2,s/2,t-Math.max(.015,a),t,at,at),p(-o/2+.02,o/2-.02,-s/2+.02,s/2-.02,t-Math.max(.015,a)-.004,t-Math.max(.015,a),n);break;case"uplight":d(Math.max(.1,g*.6),l,l+.03,at,at),d(.014,l+.03,l+a-.12,at,at,6),d(g,l+a-.14,l+a-.02,at,at),d(g*.92,l+a-.02,l+a,n,n);break;case"bollard":d(g,l,l+a-.14,at,at,10),d(g*.9,l+a-.14,l+a-.03,n,n,10),d(g*1.1,l+a-.03,l+a,at,at,10);break;case"garden":d(.012,l,l+a-.08,at,at,5),d(g,l+a-.08,l+a-.01,at,at,10),d(g*.8,l+a-.01,l+a,n,n,10);break;case"floor":d(Math.max(.1,g*.7),l,l+.03,at,at),d(.014,l+.03,l+a-.28,at,at,6),d(g,l+a-.3,l+a,n,n);break;case"table":d(Math.max(.05,g*.55),l,l+.03,at,at),d(.012,l+.03,l+a-.16,at,at,6),d(g,l+a-.18,l+a,n,n);break;case"wall":{let b=e.base??$c;p(-o/2+.03,o/2-.03,-s/2,-s/2+.02,b,b+a,at),p(-o/2,o/2,-s/2+.02,s/2,b+a*.15,b+a*.85,n);break}case"strip":{let b=Math.max(.02,a),m=e.base!=null?e.base+b:t-.04;if(!e.roll&&!e.upright&&!e.rise){p(-o/2,o/2,-s/2,s/2,m-b,m,n);break}let y=(e.roll??0)*it,v=Math.cos(y),x=Math.sin(y),_=e.upright?l+o/2:m-b/2,w=(e.upright?0:e.rise??0)*it,S=(P,F,L)=>{let O=P,C=F*v-L*x,k=F*x+L*v;return w&&([O,C]=[O*Math.cos(w)-C*Math.sin(w),O*Math.sin(w)+C*Math.cos(w)]),e.upright&&([O,C]=[-C,O]),[e.x+O*h-k*u,_+C,e.z+O*u+k*h]},M=[S(-o/2,-b/2,-s/2),S(o/2,-b/2,-s/2),S(o/2,-b/2,s/2),S(-o/2,-b/2,s/2),S(-o/2,b/2,-s/2),S(o/2,b/2,-s/2),S(o/2,b/2,s/2),S(-o/2,b/2,s/2)],A=new j(n),E=[e.x,_,e.z],T=(P,F,L,O)=>{let[C,k,N]=[M[P],M[F],M[L]],U=[(k[1]-C[1])*(N[2]-C[2])-(k[2]-C[2])*(N[1]-C[1]),(k[2]-C[2])*(N[0]-C[0])-(k[0]-C[0])*(N[2]-C[2]),(k[0]-C[0])*(N[1]-C[1])-(k[1]-C[1])*(N[0]-C[0])],V=[C[0]-E[0],C[1]-E[1],C[2]-E[2]],H=U[0]*V[0]+U[1]*V[1]+U[2]*V[2]<0,[B,z,q,X]=H?[M[O],M[L],M[F],M[P]]:[M[P],M[F],M[L],M[O]];i.tri(B,z,q,A,A,A),i.tri(B,q,X,A,A,A)};T(0,1,2,3),T(4,5,6,7),T(0,1,5,4),T(1,2,6,5),T(2,3,7,6),T(3,0,4,7);break}}}var $E=4e3;function ny(i,e,t){let n;return Promise.race([i.compileAsync(e,t).then(()=>{},()=>{}),new Promise(r=>n=setTimeout(r,$E))]).finally(()=>clearTimeout(n))}export{zd as FloorplanViewer,tk as createViewer,CF as funLib,xE as furnitureFront,gE as furniturePreview,NE as isLowEnd,bE as itemPicture,oy as pushFanBlades,Nd as pushLampModel};
