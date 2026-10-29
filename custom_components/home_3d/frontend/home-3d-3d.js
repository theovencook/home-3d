var Vd=0,ju=1,Gd=2;var Qu=0,_r=1,Hd=2,To=3,li=0,on=1,ie=2,Ln=0,yn=1,Ae=2,th=3,Rs=4,Wd=5;var Mr=100,Xd=101,Yd=102,qd=103,$d=104,Zd=200,Kd=201,Jd=202,jd=203,eh=204,nh=205,Qd=206,tp=207,ep=208,np=209,ip=210,rp=211,op=212,sp=213,ap=214,Ya=0,qa=1,$a=2,uo=3,Za=4,Ka=5,Ja=6,ja=7,Al=0,lp=1,cp=2,Xn=0,ih=1,rh=2,oh=3,sh=4,ah=5,lh=6,ch=7;var uh=300,$i=301,wr=302,Rl=303,Pl=304,Ps=306,mr=1e3,Sn=1001,Qa=1002,en=1003,up=1004;var Cs=1005;var Xe=1006,Cl=1007;var Zi=1008;var _n=1009,hh=1010,fh=1011,Eo=1012,Il=1013,Yn=1014,qn=1015,$n=1016,Ll=1017,Fl=1018,Ao=1020,dh=35902,ph=35899,mh=1021,gh=1022,Fn=1023,ii=1026,Ki=1027,bh=1028,Dl=1029,Ji=1030,Ol=1031;var Nl=1033,Is=33776,Ls=33777,Fs=33778,Ds=33779,Ul=35840,Bl=35841,kl=35842,zl=35843,Vl=36196,Gl=37492,Hl=37496,Wl=37488,Xl=37489,Os=37490,Yl=37491,ql=37808,$l=37809,Zl=37810,Kl=37811,Jl=37812,jl=37813,Ql=37814,tc=37815,ec=37816,nc=37817,ic=37818,rc=37819,oc=37820,sc=37821,ac=36492,lc=36494,cc=36495,uc=36283,hc=36284,Ns=36285,fc=36286;var ss=2300,tl=2301,Ha=2302,zu=2303,Vu=2400,Gu=2401,Hu=2402;var hp=3200;var dc=0,fp=1,Ai="",Ce="srgb",as="srgb-linear",ls="linear",ye="srgb";var Wa=7680;var dp=519,pp=512,mp=513,gp=514,pc=515,bp=516,xp=517,mc=518,vp=519,xh=35044,vh=35048;var yh="300 es",Gn=2e3,ho=2001;function Ub(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Bb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yp(){let i=fo("canvas");return i.style.display="block",i}var sd={},po=null;function cs(...i){let t="THREE."+i.shift();po?po("log",t,...i):console.log(t,...i)}function _p(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qt(...i){i=_p(i);let t="THREE."+i.shift();if(po)po("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function $t(...i){i=_p(i);let t="THREE."+i.shift();if(po)po("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function pr(...i){let t=i.join(" ");t in sd||(sd[t]=!0,qt(...i))}function Mp(i,t,e){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}var wp={[Ya]:qa,[$a]:Ja,[Za]:ja,[uo]:Ka,[qa]:Ya,[Ja]:$a,[ja]:Za,[Ka]:uo},ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,t);t.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var mu=Math.PI/180,el=180/Math.PI;function Gi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function kb(i,t){return(i%t+t)%t}function gu(i,t,e){return(1-e)*i+e*t}function ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Th=class Th{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,s=this.y-t.y;return this.x=o*n-s*r+t.x,this.y=o*r+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Th.prototype.isVector2=!0;var Kt=Th,oi=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,s,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=o[s+0],d=o[s+1],p=o[s+2],b=o[s+3];if(u!==b||l!==f||c!==d||h!==p){let g=l*f+c*d+h*p+u*b;g<0&&(f=-f,d=-d,p=-p,b=-b,g=-g);let m=1-a;if(g<.9995){let x=Math.acos(g),y=Math.sin(x);m=Math.sin(m*x)/y,a=Math.sin(a*x)/y,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+b*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+b*a;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=o[s],f=o[s+1],d=o[s+2],p=o[s+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,o=t._z,s=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(o/2),f=l(n/2),d=l(r/2),p=l(o/2);switch(s){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],o=e[8],s=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(s-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(o+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(o-c)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(s-r)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+s*a+r*c-o*l,this._y=r*h+s*l+o*a-n*c,this._z=o*h+s*c+n*l-r*a,this._w=s*h-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Eh=class Eh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ad.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ad.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=t.elements,s=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,o=t.x,s=t.y,a=t.z,l=t.w,c=2*(s*r-a*n),h=2*(a*e-o*r),u=2*(o*n-s*e);return this.x=e+l*c+s*u-a*h,this.y=n+l*h+a*c-o*u,this.z=r+l*u+o*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,o=t.z,s=e.x,a=e.y,l=e.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bu.copy(this).projectOnVector(t),this.sub(bu)}reflect(t){return this.sub(bu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Eh.prototype.isVector3=!0;var Y=Eh,bu=new Y,ad=new oi,Ah=class Ah{constructor(t,e,n,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c)}set(t,e,n,r,o,s,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],b=r[0],g=r[3],m=r[6],x=r[1],y=r[4],v=r[7],M=r[2],S=r[5],E=r[8];return o[0]=s*b+a*x+l*M,o[3]=s*g+a*y+l*S,o[6]=s*m+a*v+l*E,o[1]=c*b+h*x+u*M,o[4]=c*g+h*y+u*S,o[7]=c*m+h*v+u*E,o[2]=f*b+d*x+p*M,o[5]=f*g+d*y+p*S,o[8]=f*m+d*v+p*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*s*h-e*a*c-n*o*h+n*a*l+r*o*c-r*s*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*s-a*c,f=a*l-h*o,d=c*o-s*l,p=e*u+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return t[0]=u*b,t[1]=(r*c-h*n)*b,t[2]=(a*n-r*s)*b,t[3]=f*b,t[4]=(h*e-r*l)*b,t[5]=(r*o-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(s*e-n*o)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+t,-r*c,r*l,-r*(-c*s+l*a)+a+e,0,0,1),this}scale(t,e){return pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xu.makeScale(t,e)),this}rotate(t){return pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xu.makeRotation(-t)),this}translate(t,e){return pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ah.prototype.isMatrix3=!0;var te=Ah,xu=new te,ld=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cd=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zb(){let i={enabled:!0,workingColorSpace:as,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===ye&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ye&&(r.r=co(r.r),r.g=co(r.g),r.b=co(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ai?ls:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[as]:{primaries:t,whitePoint:n,transfer:ls,toXYZ:ld,fromXYZ:cd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:ld,fromXYZ:cd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var ce=zb();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function co(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xr,nl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Xr===void 0&&(Xr=fo("canvas")),Xr.width=t.width,Xr.height=t.height;let r=Xr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Xr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Si(o[s]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vb=0,mo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(vu(r[s].image)):o.push(vu(r[s]))}else o=vu(r);n.url=o}return e||(t.images[this.uuid]=n),n}};function vu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var Gb=0,yu=new Y,fn=class i extends ri{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Sn,r=Sn,o=Xe,s=Zi,a=Fn,l=_n,c=i.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=Gi(),this.name="",this.source=new mo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yu).x}get height(){return this.source.getSize(yu).y}get depth(){return this.source.getSize(yu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mr:t.x=t.x-Math.floor(t.x);break;case Sn:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mr:t.y=t.y-Math.floor(t.y);break;case Sn:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=uh;fn.DEFAULT_ANISOTROPY=1;var Rh=class Rh{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*e+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*e+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*e+s[7]*n+s[11]*r+s[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],b=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(d+1)/2,M=(m+1)/2,S=(h+f)/4,E=(u+b)/4,_=(p+g)/4;return y>v&&y>M?y<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(y),r=S/n,o=E/n):v>M?v<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(v),n=S/r,o=_/r):M<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),n=E/o,r=_/o),this.set(n,r,o,e),this}let x=Math.sqrt((g-p)*(g-p)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-b)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rh.prototype.isVector4=!0;var De=Rh,il=class extends ri{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},o=new fn(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new mo(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends il{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},us=class extends fn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var rl=class extends fn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var El=class El{constructor(t,e,n,r,o,s,a,l,c,h,u,f,d,p,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c,h,u,f,d,p,b,g)}set(t,e,n,r,o,s,a,l,c,h,u,f,d,p,b,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=o,m[5]=s,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new El().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Yr.setFromMatrixColumn(t,0).length(),o=1/Yr.setFromMatrixColumn(t,1).length(),s=1/Yr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,o=t.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){let f=s*h,d=s*u,p=a*h,b=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-b*c,e[9]=-a*l,e[2]=b-f*c,e[6]=p+d*c,e[10]=s*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,b=c*u;e[0]=f+b*a,e[4]=p*a-d,e[8]=s*c,e[1]=s*u,e[5]=s*h,e[9]=-a,e[2]=d*a-p,e[6]=b+f*a,e[10]=s*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,b=c*u;e[0]=f-b*a,e[4]=-s*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=s*h,e[9]=b-f*a,e[2]=-s*c,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){let f=s*h,d=s*u,p=a*h,b=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+b,e[1]=l*u,e[5]=b*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){let f=s*l,d=s*c,p=a*l,b=a*c;e[0]=l*h,e[4]=b-f*u,e[8]=p*u+d,e[1]=u,e[5]=s*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-b*u}else if(t.order==="XZY"){let f=s*l,d=s*c,p=a*l,b=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+b,e[5]=s*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=b*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hb,t,Wb)}lookAt(t,e,n){let r=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ui.crossVectors(n,Mn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ui.crossVectors(n,Mn)),Ui.normalize(),ma.crossVectors(Mn,Ui),r[0]=Ui.x,r[4]=ma.x,r[8]=Mn.x,r[1]=Ui.y,r[5]=ma.y,r[9]=Mn.y,r[2]=Ui.z,r[6]=ma.z,r[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],b=n[6],g=n[10],m=n[14],x=n[3],y=n[7],v=n[11],M=n[15],S=r[0],E=r[4],_=r[8],A=r[12],T=r[1],w=r[5],C=r[9],N=r[13],L=r[2],R=r[6],P=r[10],F=r[14],D=r[3],U=r[7],k=r[11],V=r[15];return o[0]=s*S+a*T+l*L+c*D,o[4]=s*E+a*w+l*R+c*U,o[8]=s*_+a*C+l*P+c*k,o[12]=s*A+a*N+l*F+c*V,o[1]=h*S+u*T+f*L+d*D,o[5]=h*E+u*w+f*R+d*U,o[9]=h*_+u*C+f*P+d*k,o[13]=h*A+u*N+f*F+d*V,o[2]=p*S+b*T+g*L+m*D,o[6]=p*E+b*w+g*R+m*U,o[10]=p*_+b*C+g*P+m*k,o[14]=p*A+b*N+g*F+m*V,o[3]=x*S+y*T+v*L+M*D,o[7]=x*E+y*w+v*R+M*U,o[11]=x*_+y*C+v*P+M*k,o[15]=x*A+y*N+v*F+M*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],s=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],b=t[7],g=t[11],m=t[15],x=l*d-c*f,y=a*d-c*u,v=a*f-l*u,M=s*d-c*h,S=s*f-l*h,E=s*u-a*h;return e*(b*x-g*y+m*v)-n*(p*x-g*M+m*S)+r*(p*y-b*M+m*E)-o*(p*v-b*S+g*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[1],s=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(s*h-a*c)-n*(o*h-a*l)+r*(o*c-s*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],b=t[13],g=t[14],m=t[15],x=e*a-n*s,y=e*l-r*s,v=e*c-o*s,M=n*l-r*a,S=n*c-o*a,E=r*c-o*l,_=h*b-u*p,A=h*g-f*p,T=h*m-d*p,w=u*g-f*b,C=u*m-d*b,N=f*m-d*g,L=x*N-y*C+v*w+M*T-S*A+E*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/L;return t[0]=(a*N-l*C+c*w)*R,t[1]=(r*C-n*N-o*w)*R,t[2]=(b*E-g*S+m*M)*R,t[3]=(f*S-u*E-d*M)*R,t[4]=(l*T-s*N-c*A)*R,t[5]=(e*N-r*T+o*A)*R,t[6]=(g*v-p*E-m*y)*R,t[7]=(h*E-f*v+d*y)*R,t[8]=(s*C-a*T+c*_)*R,t[9]=(n*T-e*C-o*_)*R,t[10]=(p*S-b*v+m*x)*R,t[11]=(u*v-h*S-d*x)*R,t[12]=(a*A-s*w-l*_)*R,t[13]=(e*w-n*A+r*_)*R,t[14]=(b*y-p*M-g*x)*R,t[15]=(h*M-u*y+f*x)*R,this}scale(t){let e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),o=1-n,s=t.x,a=t.y,l=t.z,c=o*s,h=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*s,0,c*l-r*a,h*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,s){return this.set(1,n,o,0,t,1,s,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,o=e._x,s=e._y,a=e._z,l=e._w,c=o+o,h=s+s,u=a+a,f=o*c,d=o*h,p=o*u,b=s*h,g=s*u,m=a*u,x=l*c,y=l*h,v=l*u,M=n.x,S=n.y,E=n.z;return r[0]=(1-(b+m))*M,r[1]=(d+v)*M,r[2]=(p-y)*M,r[3]=0,r[4]=(d-v)*S,r[5]=(1-(f+m))*S,r[6]=(g+x)*S,r[7]=0,r[8]=(p+y)*E,r[9]=(g-x)*E,r[10]=(1-(f+b))*E,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let s=Yr.set(r[0],r[1],r[2]).length(),a=Yr.set(r[4],r[5],r[6]).length(),l=Yr.set(r[8],r[9],r[10]).length();o<0&&(s=-s),Bn.copy(this);let c=1/s,h=1/a,u=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=s,n.y=a,n.z=l,this}makePerspective(t,e,n,r,o,s,a=Gn,l=!1){let c=this.elements,h=2*o/(e-t),u=2*o/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),p,b;if(l)p=o/(s-o),b=s*o/(s-o);else if(a===Gn)p=-(s+o)/(s-o),b=-2*s*o/(s-o);else if(a===ho)p=-s/(s-o),b=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,o,s,a=Gn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),p,b;if(l)p=1/(s-o),b=s/(s-o);else if(a===Gn)p=-2/(s-o),b=-(s+o)/(s-o);else if(a===ho)p=-1/(s-o),b=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};El.prototype.isMatrix4=!0;var _e=El,Yr=new Y,Bn=new _e,Hb=new Y(0,0,0),Wb=new Y(1,1,1),Ui=new Y,ma=new Y,Mn=new Y,ud=new _e,hd=new oi,Ti=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(he(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-he(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ud.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ud,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hd.setFromEuler(this),this.setFromQuaternion(hd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ti.DEFAULT_ORDER="XYZ";var go=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xb=0,fd=new Y,qr=new oi,xi=new _e,ga=new Y,Jo=new Y,Yb=new Y,qb=new oi,dd=new Y(1,0,0),pd=new Y(0,1,0),md=new Y(0,0,1),gd={type:"added"},$b={type:"removed"},$r={type:"childadded",child:null},_u={type:"childremoved",child:null},$e=class i extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Y,e=new Ti,n=new oi,r=new Y(1,1,1);function o(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _e},normalMatrix:{value:new te}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.multiply(qr),this}rotateOnWorldAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.premultiply(qr),this}rotateX(t){return this.rotateOnAxis(dd,t)}rotateY(t){return this.rotateOnAxis(pd,t)}rotateZ(t){return this.rotateOnAxis(md,t)}translateOnAxis(t,e){return fd.copy(t).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dd,t)}translateY(t){return this.translateOnAxis(pd,t)}translateZ(t){return this.translateOnAxis(md,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ga.copy(t):ga.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Jo,ga,this.up):xi.lookAt(ga,Jo,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(xi),this.quaternion.premultiply(qr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gd),$r.child=t,this.dispatchEvent($r),$r.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($b),_u.child=t,this.dispatchEvent(_u),_u.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gd),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,t,Yb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,qb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*r,o[13]+=n-o[1]*e-o[5]*n-o[9]*r,o[14]+=r-o[2]*e-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));r.material=a}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(t.animations,l))}}if(e){let a=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),u=s(t.shapes),f=s(t.skeletons),d=s(t.animations),p=s(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function s(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$e.DEFAULT_UP=new Y(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Te=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zb={type:"move"},bo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(let b of t.hand.values()){let g=e.getJointPose(b,n),m=this._getHandJoint(c,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},ba={h:0,s:0,l:0};function Mu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var J=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ce.workingColorSpace){if(t=kb(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,s=2*n-o;this.r=Mu(s,o,t+1/3),this.g=Mu(s,o,t),this.b=Mu(s,o,t-1/3)}return ce.colorSpaceToWorking(this,r),this}setStyle(t,e=Ce){function n(o){o!==void 0&&parseFloat(o)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(o,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=Sp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=co(t.r),this.g=co(t.g),this.b=co(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ce.workingToColorSpace(hn.copy(this),t),Math.round(he(hn.r*255,0,255))*65536+Math.round(he(hn.g*255,0,255))*256+Math.round(he(hn.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(hn.copy(this),e);let n=hn.r,r=hn.g,o=hn.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,h=(a+s)/2;if(a===s)l=0,c=0;else{let u=s-a;switch(c=h<=.5?u/(s+a):u/(2-s-a),s){case n:l=(r-o)/u+(r<o?6:0);break;case r:l=(o-n)/u+2;break;case o:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Ce){ce.workingToColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,r=hn.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(ba);let n=gu(Bi.h,ba.h,e),r=gu(Bi.s,ba.s,e),o=gu(Bi.l,ba.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new J;J.NAMES=Sp;var hs=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new J(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var si=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},kn=new Y,vi=new Y,wu=new Y,yi=new Y,Zr=new Y,Kr=new Y,bd=new Y,Su=new Y,Tu=new Y,Eu=new Y,Au=new De,Ru=new De,Pu=new De,wi=class i{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),kn.subVectors(t,e),r.cross(kn);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){kn.subVectors(r,e),vi.subVectors(n,e),wu.subVectors(t,e);let s=kn.dot(kn),a=kn.dot(vi),l=kn.dot(wu),c=vi.dot(vi),h=vi.dot(wu),u=s*c-a*a;if(u===0)return o.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(s*h-a*l)*f;return o.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,n,r,o,s,a,l){return this.getBarycoord(t,e,n,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,yi.x),l.addScaledVector(s,yi.y),l.addScaledVector(a,yi.z),l)}static getInterpolatedAttribute(t,e,n,r,o,s){return Au.setScalar(0),Ru.setScalar(0),Pu.setScalar(0),Au.fromBufferAttribute(t,e),Ru.fromBufferAttribute(t,n),Pu.fromBufferAttribute(t,r),s.setScalar(0),s.addScaledVector(Au,o.x),s.addScaledVector(Ru,o.y),s.addScaledVector(Pu,o.z),s}static isFrontFacing(t,e,n,r){return kn.subVectors(n,e),vi.subVectors(t,e),kn.cross(vi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),kn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,o){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,o=this.c,s,a;Zr.subVectors(r,n),Kr.subVectors(o,n),Su.subVectors(t,n);let l=Zr.dot(Su),c=Kr.dot(Su);if(l<=0&&c<=0)return e.copy(n);Tu.subVectors(t,r);let h=Zr.dot(Tu),u=Kr.dot(Tu);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),e.copy(n).addScaledVector(Zr,s);Eu.subVectors(t,o);let d=Zr.dot(Eu),p=Kr.dot(Eu);if(p>=0&&d<=p)return e.copy(o);let b=d*c-l*p;if(b<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Kr,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return bd.subVectors(o,r),a=(u-h)/(u-h+(d-p)),e.copy(r).addScaledVector(bd,a);let m=1/(g+b+f);return s=b*m,a=f*m,e.copy(n).addScaledVector(Zr,s).addScaledVector(Kr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vn=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,zn):zn.fromBufferAttribute(o,s),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(t.matrixWorld),this.union(xa)}let r=t.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jo),va.subVectors(this.max,jo),Jr.subVectors(t.a,jo),jr.subVectors(t.b,jo),Qr.subVectors(t.c,jo),ki.subVectors(jr,Jr),zi.subVectors(Qr,jr),ur.subVectors(Jr,Qr);let e=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-ur.z,ur.y,ki.z,0,-ki.x,zi.z,0,-zi.x,ur.z,0,-ur.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-ur.y,ur.x,0];return!Cu(e,Jr,jr,Qr,va)||(e=[1,0,0,0,1,0,0,0,1],!Cu(e,Jr,jr,Qr,va))?!1:(ya.crossVectors(ki,zi),e=[ya.x,ya.y,ya.z],Cu(e,Jr,jr,Qr,va))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_i=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],zn=new Y,xa=new vn,Jr=new Y,jr=new Y,Qr=new Y,ki=new Y,zi=new Y,ur=new Y,jo=new Y,va=new Y,ya=new Y,hr=new Y;function Cu(i,t,e,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){hr.fromArray(i,o);let a=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=t.dot(hr),c=e.dot(hr),h=n.dot(hr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var We=new Y,_a=new Kt,Kb=0,Tn=class extends ri{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xh,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_a.fromBufferAttribute(this,e),_a.applyMatrix3(t),this.setXY(e,_a.x,_a.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array),o=Se(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var fs=class extends Tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var gr=class extends Tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var It=class extends Tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Jb=new vn,Qo=new Y,Iu=new Y,Hi=class{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Jb.setFromPoints(t).getCenter(n);let r=0;for(let o=0,s=t.length;o<s;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qo.subVectors(t,this.center);let e=Qo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Qo,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Iu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qo.copy(t.center).add(Iu)),this.expandByPoint(Qo.copy(t.center).sub(Iu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},jb=0,In=new _e,Lu=new $e,to=new Y,wn=new vn,ts=new vn,Qe=new Y,Vt=class i extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ub(t)?gr:fs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new te().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,n){return In.makeTranslation(t,e,n),this.applyMatrix4(In),this}scale(t,e,n){return In.makeScale(t,e,n),this.applyMatrix4(In),this}lookAt(t){return Lu.lookAt(t),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,o=t.length;r<o;r++){let s=t[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let o=e[n];wn.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let o=0,s=e.length;o<s;o++){let a=e[o];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(wn.min,ts.min),wn.expandByPoint(Qe),Qe.addVectors(wn.max,ts.max),wn.expandByPoint(Qe)):(wn.expandByPoint(ts.min),wn.expandByPoint(ts.max))}wn.getCenter(n);let r=0;for(let o=0,s=t.count;o<s;o++)Qe.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(Qe));if(e)for(let o=0,s=e.length;o<s;o++){let a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(to.fromBufferAttribute(t,c),Qe.add(to)),r=Math.max(r,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,o=e.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new Tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new Y,l[_]=new Y;let c=new Y,h=new Y,u=new Y,f=new Kt,d=new Kt,p=new Kt,b=new Y,g=new Y;function m(_,A,T){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,T),f.fromBufferAttribute(o,_),d.fromBufferAttribute(o,A),p.fromBufferAttribute(o,T),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let w=1/(d.x*p.y-p.x*d.y);isFinite(w)&&(b.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(w),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(w),a[_].add(b),a[A].add(b),a[T].add(b),l[_].add(g),l[A].add(g),l[T].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let _=0,A=x.length;_<A;++_){let T=x[_],w=T.start,C=T.count;for(let N=w,L=w+C;N<L;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let y=new Y,v=new Y,M=new Y,S=new Y;function E(_){M.fromBufferAttribute(r,_),S.copy(M);let A=a[_];y.copy(A),y.sub(M.multiplyScalar(M.dot(A))).normalize(),v.crossVectors(S,A);let w=v.dot(l[_])<0?-1:1;s.setXYZW(_,y.x,y.y,y.z,w)}for(let _=0,A=x.length;_<A;++_){let T=x[_],w=T.start,C=T.count;for(let N=w,L=w+C;N<L;N+=3)E(t.getX(N+0)),E(t.getX(N+1)),E(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new Y,o=new Y,s=new Y,a=new Y,l=new Y,c=new Y,h=new Y,u=new Y;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),b=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,b),s.fromBufferAttribute(e,g),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),s.fromBufferAttribute(e,f+2),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let b=0,g=l.length;b<g;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new Tn(f,h,u)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let o=t.morphAttributes;for(let c in o){let h=[],u=o[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ol=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xh,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},xn=new Y,ds=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ni(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ni(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ni(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ni(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array),o=Se(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){cs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new Tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){cs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fu=new Y,Qb=new Y,tx=new te,Vn=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Fu.subVectors(n,e).cross(Qb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Fu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(r,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||tx.getNormalMatrix(t),r=this.coplanarPoint(Fu).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ex=0,Hn=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=yn,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=nh,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new J(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(e){let o=r(t.textures),s=r(t.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new J().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Vn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Kt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xo=class extends Hn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new J(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},eo,es=new Y,no=new Y,io=new Y,ro=new Kt,ns=new Kt,Tp=new _e,Ma=new Y,is=new Y,wa=new Y,xd=new Kt,Du=new Kt,vd=new Kt,ps=class extends $e{constructor(t=new xo){if(super(),this.isSprite=!0,this.type="Sprite",eo===void 0){eo=new Vt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ol(e,5);eo.setIndex([0,1,2,0,2,3]),eo.setAttribute("position",new ds(n,3,0,!1)),eo.setAttribute("uv",new ds(n,2,3,!1))}this.geometry=eo,this.material=t,this.center=new Kt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&$t('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),no.setFromMatrixScale(this.matrixWorld),Tp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),io.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&no.multiplyScalar(-io.z);let n=this.material.rotation,r,o;n!==0&&(o=Math.cos(n),r=Math.sin(n));let s=this.center;Sa(Ma.set(-.5,-.5,0),io,s,no,r,o),Sa(is.set(.5,-.5,0),io,s,no,r,o),Sa(wa.set(.5,.5,0),io,s,no,r,o),xd.set(0,0),Du.set(1,0),vd.set(1,1);let a=t.ray.intersectTriangle(Ma,is,wa,!1,es);if(a===null&&(Sa(is.set(-.5,.5,0),io,s,no,r,o),Du.set(0,1),a=t.ray.intersectTriangle(Ma,wa,is,!1,es),a===null))return;let l=t.ray.origin.distanceTo(es);l<t.near||l>t.far||e.push({distance:l,point:es.clone(),uv:wi.getInterpolation(es,Ma,is,wa,xd,Du,vd,new Kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Sa(i,t,e,n,r,o){ro.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(ns.x=o*ro.x-r*ro.y,ns.y=r*ro.x+o*ro.y):ns.copy(ro),i.copy(t),i.x+=ns.x,i.y+=ns.y,i.applyMatrix4(Tp)}var Mi=new Y,Ou=new Y,Ta=new Y,Ea=new Y,br=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ou.copy(t).add(e).multiplyScalar(.5),Ta.copy(e).sub(t).normalize(),Ea.copy(this.origin).sub(Ou);let o=t.distanceTo(e)*.5,s=-this.direction.dot(Ta),a=Ea.dot(this.direction),l=-Ea.dot(Ta),c=Ea.lengthSq(),h=Math.abs(1-s*s),u,f,d,p;if(h>0)if(u=s*l-a,f=s*a-l,p=o*h,u>=0)if(f>=-p)if(f<=p){let b=1/h;u*=b,f*=b,d=u*(u+s*f+2*a)+f*(s*u+f+2*l)+c}else f=o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-s*o+a)),f=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+c):(u=Math.max(0,-(s*o+a)),f=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c);else f=s>0?-o:o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ou).addScaledVector(Ta,f),d}intersectSphere(t,e){if(t.radius<0)return null;Mi.subVectors(t.center,this.origin);let n=Mi.dot(this.direction),r=Mi.dot(Mi)-n*n,o=t.radius*t.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,s,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(o=(t.min.y-f.y)*h,s=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,s=(t.min.y-f.y)*h),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-s.x,f=t.y-s.y,d=t.z-s.z,p=e.x-s.x,b=e.y-s.y,g=e.z-s.z,m=n.x-s.x,x=n.y-s.y,y=n.z-s.z,v=Math.abs(l),M=Math.abs(c),S=Math.abs(h),E,_,A,T,w,C,N,L,R,P,F,D;if(v>=M&&v>=S?(A=l,C=u,R=p,D=m,l>=0?(E=c,_=h,T=f,w=d,N=b,L=g,P=x,F=y):(E=h,_=c,T=d,w=f,N=g,L=b,P=y,F=x)):M>=S?(A=c,C=f,R=b,D=x,c>=0?(E=h,_=l,T=d,w=u,N=g,L=p,P=y,F=m):(E=l,_=h,T=u,w=d,N=p,L=g,P=m,F=y)):(A=h,C=d,R=g,D=y,h>=0?(E=l,_=c,T=u,w=f,N=p,L=b,P=m,F=x):(E=c,_=l,T=f,w=u,N=b,L=p,P=x,F=m)),A===0)return null;let U=E/A,k=_/A,V=1/A,X=T-U*C,z=w-k*C,$=N-U*R,j=L-k*R,at=P-U*D,H=F-k*D,W=at*j-H*$,Q=X*H-z*at,ot=$*z-j*X;if(r){if(W<0||Q<0||ot<0)return null}else if((W<0||Q<0||ot<0)&&(W>0||Q>0||ot>0))return null;let et=W+Q+ot;if(et===0)return null;let ht=V*(W*C+Q*R+ot*D);return(et>0?ht<0:ht>0)?null:this.at(ht/et,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class extends Hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},yd=new _e,fr=new br,Aa=new Hi,_d=new Y,Ra=new Y,Pa=new Y,Ca=new Y,Nu=new Y,Ia=new Y,Md=new Y,La=new Y,St=class extends $e{constructor(t=new Vt,e=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(o&&a){Ia.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],u=o[l];h!==0&&(Nu.fromBufferAttribute(u,t),s?Ia.addScaledVector(Nu,h):Ia.addScaledVector(Nu.sub(e),h))}e.add(Ia)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(o),fr.copy(t.ray).recast(t.near),!(Aa.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Aa,_d)===null||fr.origin.distanceToSquared(_d)>(t.far-t.near)**2))&&(yd.copy(o).invert(),fr.copy(t.ray).applyMatrix4(yd),!(n.boundingBox!==null&&fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fr)))}_computeIntersections(t,e,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,b=f.length;p<b;p++){let g=f[p],m=s[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=y;v<M;v+=3){let S=a.getX(v),E=a.getX(v+1),_=a.getX(v+2);r=Fa(this,m,t,n,c,h,u,S,E,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){let x=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);r=Fa(this,s,t,n,c,h,u,x,y,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,b=f.length;p<b;p++){let g=f[p],m=s[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=y;v<M;v+=3){let S=v,E=v+1,_=v+2;r=Fa(this,m,t,n,c,h,u,S,E,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){let x=g,y=g+1,v=g+2;r=Fa(this,s,t,n,c,h,u,x,y,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function nx(i,t,e,n,r,o,s,a){let l;if(t.side===on?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,t.side===li,a),l===null)return null;La.copy(a),La.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(La);return c<e.near||c>e.far?null:{distance:c,point:La.clone(),object:i}}function Fa(i,t,e,n,r,o,s,a,l,c){i.getVertexPosition(a,Ra),i.getVertexPosition(l,Pa),i.getVertexPosition(c,Ca);let h=nx(i,t,e,n,Ra,Pa,Ca,Md);if(h){let u=new Y;wi.getBarycoord(Md,Ra,Pa,Ca,u),r&&(h.uv=wi.getInterpolatedAttribute(r,a,l,c,u,new Kt)),o&&(h.uv1=wi.getInterpolatedAttribute(o,a,l,c,u,new Kt)),s&&(h.normal=wi.getInterpolatedAttribute(s,a,l,c,u,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new Y,materialIndex:0};wi.getNormal(Ra,Pa,Ca,f.normal),h.face=f,h.barycoord=u}return h}var sl=class extends fn{constructor(t=null,e=1,n=1,r,o,s,a,l,c=en,h=en,u,f){super(null,s,a,l,c,h,r,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dr=new Hi,ix=new Kt(.5,.5),Da=new Y,vo=class{constructor(t=new Vn,e=new Vn,n=new Vn,r=new Vn,o=new Vn,s=new Vn){this.planes=[t,e,n,r,o,s]}set(t,e,n,r,o,s){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn,n=!1){let r=this.planes,o=t.elements,s=o[0],a=o[1],l=o[2],c=o[3],h=o[4],u=o[5],f=o[6],d=o[7],p=o[8],b=o[9],g=o[10],m=o[11],x=o[12],y=o[13],v=o[14],M=o[15];if(r[0].setComponents(c-s,d-h,m-p,M-x).normalize(),r[1].setComponents(c+s,d+h,m+p,M+x).normalize(),r[2].setComponents(c+a,d+u,m+b,M+y).normalize(),r[3].setComponents(c-a,d-u,m-b,M-y).normalize(),n)r[4].setComponents(l,f,g,v).normalize(),r[5].setComponents(c-l,d-f,m-g,M-v).normalize();else if(r[4].setComponents(c-l,d-f,m-g,M-v).normalize(),e===Gn)r[5].setComponents(c+l,d+f,m+g,M+v).normalize();else if(e===ho)r[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(t){dr.center.set(0,0,0);let e=ix.distanceTo(t.center);return dr.radius=.7071067811865476+e,dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Da.x=r.normal.x>0?t.max.x:t.min.x,Da.y=r.normal.y>0?t.max.y:t.min.y,Da.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ze=class extends Hn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new J(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},al=new Y,ll=new Y,wd=new _e,rs=new br,Oa=new Hi,Uu=new Y,Sd=new Y,cl=class extends $e{constructor(t=new Vt,e=new Ze){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,o=e.count;r<o;r++)al.fromBufferAttribute(e,r-1),ll.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=al.distanceTo(ll);t.setAttribute("lineDistance",new It(n,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(r),Oa.radius+=o,t.ray.intersectsSphere(Oa)===!1)return;wd.copy(r).invert(),rs.copy(t.ray).applyMatrix4(wd);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let b=d,g=p-1;b<g;b+=c){let m=h.getX(b),x=h.getX(b+1),y=Na(this,t,rs,l,m,x,b);y&&e.push(y)}if(this.isLineLoop){let b=h.getX(p-1),g=h.getX(d),m=Na(this,t,rs,l,b,g,p-1);m&&e.push(m)}}else{let d=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let b=d,g=p-1;b<g;b+=c){let m=Na(this,t,rs,l,b,b+1,b);m&&e.push(m)}if(this.isLineLoop){let b=Na(this,t,rs,l,p-1,d,p-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Na(i,t,e,n,r,o,s){let a=i.geometry.attributes.position;if(al.fromBufferAttribute(a,r),ll.fromBufferAttribute(a,o),e.distanceSqToSegment(al,ll,Uu,Sd)>n)return;Uu.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Uu);if(!(c<t.near||c>t.far))return{distance:c,point:Sd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Td=new Y,Ed=new Y,qe=class extends cl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,o=e.count;r<o;r+=2)Td.fromBufferAttribute(e,r),Ed.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Td.distanceTo(Ed);t.setAttribute("lineDistance",new It(n,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ei=class extends Hn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new J(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ad=new _e,Wu=new br,Ua=new Hi,Ba=new Y,Wi=class extends $e{constructor(t=new Vt,e=new Ei){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(r),Ua.radius+=o,t.ray.intersectsSphere(Ua)===!1)return;Ad.copy(r).invert(),Wu.copy(t.ray).applyMatrix4(Ad);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let p=f,b=d;p<b;p++){let g=c.getX(p);Ba.fromBufferAttribute(u,g),Rd(Ba,g,l,r,t,e,this)}}else{let f=Math.max(0,s.start),d=Math.min(u.count,s.start+s.count);for(let p=f,b=d;p<b;p++)Ba.fromBufferAttribute(u,p),Rd(Ba,p,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Rd(i,t,e,n,r,o,s){let a=Wu.distanceSqToPoint(i);if(a<e){let l=new Y;Wu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var ms=class extends fn{constructor(t=[],e=$i,n,r,o,s,a,l,c,h){super(t,e,n,r,o,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},dn=class extends fn{constructor(t,e,n,r,o,s,a,l,c){super(t,e,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ai=class extends fn{constructor(t,e,n=Yn,r,o,s,a=en,l=en,c,h=ii,u=1){if(h!==ii&&h!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,o,s,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ul=class extends ai{constructor(t,e=Yn,n=$i,r,o,s=en,a=en,l,c=ii){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,r,o,s,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},gs=class extends fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},yo=class i extends Vt{constructor(t=1,e=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,s,o,0),p("z","y","x",1,-1,n,e,-t,s,o,1),p("x","z","y",1,1,t,n,e,r,s,2),p("x","z","y",1,-1,t,n,-e,r,s,3),p("x","y","z",1,-1,t,e,n,r,o,4),p("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function p(b,g,m,x,y,v,M,S,E,_,A){let T=v/E,w=M/_,C=v/2,N=M/2,L=S/2,R=E+1,P=_+1,F=0,D=0,U=new Y;for(let k=0;k<P;k++){let V=k*w-N;for(let X=0;X<R;X++){let z=X*T-C;U[b]=z*x,U[g]=V*y,U[m]=L,c.push(U.x,U.y,U.z),U[b]=0,U[g]=0,U[m]=S>0?1:-1,h.push(U.x,U.y,U.z),u.push(X/E),u.push(1-k/_),F+=1}}for(let k=0;k<_;k++)for(let V=0;V<E;V++){let X=f+V+R*k,z=f+V+R*(k+1),$=f+(V+1)+R*(k+1),j=f+(V+1)+R*k;l.push(X,z,j),l.push(z,$,j),D+=6}a.addGroup(d,D,A),d+=D,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var xr=class i extends Vt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let o=[],s=[],a=[],l=[],c=new Y,h=new Kt;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),s.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(s[f]/t+1)/2,h.y=(s[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new It(s,3)),this.setAttribute("normal",new It(a,3)),this.setAttribute("uv",new It(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function rx(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,o=Ep(i,0,r,e,!0),s=[];if(!o||o.next===o.prev)return s;let a,l,c;if(n&&(o=cx(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<r;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return bs(o,s,e,a,l,c,0),s}function Ep(i,t,e,n,r){let o;if(r===yx(i,t,e,n)>0)for(let s=t;s<e;s+=n)o=Pd(s/n|0,i[s],i[s+1],o);else for(let s=e-n;s>=t;s-=n)o=Pd(s/n|0,i[s],i[s+1],o);return o&&_o(o,o.next)&&(vs(o),o=o.next),o}function vr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(_o(e,e.next)||Be(e.prev,e,e.next)===0)){if(vs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function bs(i,t,e,n,r,o,s){if(!i)return;!s&&o&&px(i,n,r,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?sx(i,n,r,o):ox(i)){t.push(l.i,i.i,c.i),vs(i),i=c.next,a=c.next;continue}if(i=c,i===a){s?s===1?(i=ax(vr(i),t),bs(i,t,e,n,r,o,2)):s===2&&lx(i,t,e,n,r,o):bs(vr(i),t,e,n,r,o,1);break}}}function ox(i){let t=i.prev,e=i,n=i.next;if(Be(t,e,n)>=0)return!1;let r=t.x,o=e.x,s=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,o,s),u=Math.min(a,l,c),f=Math.max(r,o,s),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&os(r,a,o,l,s,c,p.x,p.y)&&Be(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function sx(i,t,e,n){let r=i.prev,o=i,s=i.next;if(Be(r,o,s)>=0)return!1;let a=r.x,l=o.x,c=s.x,h=r.y,u=o.y,f=s.y,d=Math.min(a,l,c),p=Math.min(h,u,f),b=Math.max(a,l,c),g=Math.max(h,u,f),m=Xu(d,p,t,e,n),x=Xu(b,g,t,e,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=m&&v&&v.z<=x;){if(y.x>=d&&y.x<=b&&y.y>=p&&y.y<=g&&y!==r&&y!==s&&os(a,h,l,u,c,f,y.x,y.y)&&Be(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=b&&v.y>=p&&v.y<=g&&v!==r&&v!==s&&os(a,h,l,u,c,f,v.x,v.y)&&Be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=b&&y.y>=p&&y.y<=g&&y!==r&&y!==s&&os(a,h,l,u,c,f,y.x,y.y)&&Be(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=b&&v.y>=p&&v.y<=g&&v!==r&&v!==s&&os(a,h,l,u,c,f,v.x,v.y)&&Be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ax(i,t){let e=i;do{let n=e.prev,r=e.next.next;!_o(n,r)&&Rp(n,e,e.next,r)&&xs(n,r)&&xs(r,n)&&(t.push(n.i,e.i,r.i),vs(e),vs(e.next),e=i=r),e=e.next}while(e!==i);return vr(e)}function lx(i,t,e,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&bx(s,a)){let l=Pp(s,a);s=vr(s,s.next),l=vr(l,l.next),bs(s,t,e,n,r,o,0),bs(l,t,e,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function cx(i,t,e,n){let r=[];for(let o=0,s=t.length;o<s;o++){let a=t[o]*n,l=o<s-1?t[o+1]*n:i.length,c=Ep(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(gx(c))}r.sort(ux);for(let o=0;o<r.length;o++)e=hx(r[o],e);return e}function ux(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function hx(i,t){let e=fx(i,t);if(!e)return t;let n=Pp(e,i);return vr(n,n.next),vr(e,e.next)}function fx(i,t){let e=t,n=i.x,r=i.y,o=-1/0,s;if(_o(i,e))return e;do{if(_o(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>o&&(o=u,s=e.x<e.next.x?e:e.next,u===n))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0;e=s;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ap(r<c?n:o,r,l,c,r<c?o:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);xs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&dx(s,e)))&&(s=e,h=u)}e=e.next}while(e!==a);return s}function dx(i,t){return Be(i.prev,i,t.prev)<0&&Be(t.next,i,i.next)<0}function px(i,t,e,n){let r=i;do r.z===0&&(r.z=Xu(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,mx(r)}function mx(i){let t,e=1;do{let n=i,r;i=null;let o=null;for(t=0;n;){t++;let s=n,a=0;for(let c=0;c<e&&(a++,s=s.nextZ,!!s);c++);let l=e;for(;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,l--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,e*=2}while(t>1);return i}function Xu(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function gx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ap(i,t,e,n,r,o,s,a){return(r-s)*(t-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(e-s)*(t-a)&&(e-s)*(o-a)>=(r-s)*(n-a)}function os(i,t,e,n,r,o,s,a){return!(i===s&&t===a)&&Ap(i,t,e,n,r,o,s,a)}function bx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!xx(i,t)&&(xs(i,t)&&xs(t,i)&&vx(i,t)&&(Be(i.prev,i,t.prev)||Be(i,t.prev,t))||_o(i,t)&&Be(i.prev,i,i.next)>0&&Be(t.prev,t,t.next)>0)}function Be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function _o(i,t){return i.x===t.x&&i.y===t.y}function Rp(i,t,e,n){let r=za(Be(i,t,e)),o=za(Be(i,t,n)),s=za(Be(e,n,i)),a=za(Be(e,n,t));return!!(r!==o&&s!==a||r===0&&ka(i,e,t)||o===0&&ka(i,n,t)||s===0&&ka(e,i,n)||a===0&&ka(e,t,n))}function ka(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function za(i){return i>0?1:i<0?-1:0}function xx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Rp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function xs(i,t){return Be(i.prev,i,i.next)<0?Be(i,t,i.next)>=0&&Be(i,i.prev,t)>=0:Be(i,t,i.prev)<0||Be(i,i.next,t)<0}function vx(i,t){let e=i,n=!1,r=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&r<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Pp(i,t){let e=Yu(i.i,i.x,i.y),n=Yu(t.i,t.x,t.y),r=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Pd(i,t,e,n){let r=Yu(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yx(i,t,e,n){let r=0;for(let o=t,s=e-n;o<e;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}var qu=class{static triangulate(t,e,n=2){return rx(t,e,n)}},ys=class i{static area(t){let e=t.length,n=0;for(let r=e-1,o=0;o<e;r=o++)n+=t[r].x*t[o].y-t[o].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],o=[];Cd(t),Id(n,t);let s=t.length;e.forEach(Cd);for(let l=0;l<e.length;l++)r.push(s),s+=e[l].length,Id(n,e[l]);let a=qu.triangulate(n,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function Cd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Id(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Wn=class i extends Vt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let o=t/2,s=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],b=[],g=[];for(let m=0;m<h;m++){let x=m*f-s;for(let y=0;y<c;y++){let v=y*u-o;p.push(v,-x,0),b.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let y=x+c*m,v=x+c*(m+1),M=x+1+c*(m+1),S=x+1+c*m;d.push(y,v,S),d.push(v,M,S)}this.setIndex(d),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(b,3)),this.setAttribute("uv",new It(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},_s=class i extends Vt{constructor(t=.5,e=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/r,d=new Y,p=new Kt;for(let b=0;b<=r;b++){for(let g=0;g<=n;g++){let m=o+g/n*s;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let b=0;b<r;b++){let g=b*(n+1);for(let m=0;m<n;m++){let x=m+g,y=x,v=x+n+1,M=x+n+2,S=x+1;a.push(y,v,S),a.push(v,M,S)}}this.setIndex(a),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Sr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Ld(r))r.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Ld(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();t[e][n]=o}else t[e][n]=r.slice();else t[e][n]=r}}return t}function mn(i){let t={};for(let e=0;e<i.length;e++){let n=Sr(i[e]);for(let r in n)t[r]=n[r]}return t}function Ld(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _x(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _h(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var Cp={clone:Sr,merge:mn},Mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends Hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mx,this.fragmentShader=wx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sr(t.uniforms),this.uniformsGroups=_x(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?e.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[r]={type:"m4",value:s.toArray()}:e.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new J().setHex(r.value);break;case"v2":this.uniforms[n].value=new Kt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(r.value);break;case"v4":this.uniforms[n].value=new De().fromArray(r.value);break;case"m3":this.uniforms[n].value=new te().fromArray(r.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},hl=class extends pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Mo=class extends Hn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dc,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Al,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wo=class extends Hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fl=class extends Hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function oo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Bu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Xi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],o=e[n-1];n:{t:{let s;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=e[++n],t<r)break t}s=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=o,o=e[--n-1],t>=o)break t}s=n,n=0;break e}break n}for(;n<s;){let a=n+s>>>1;t<e[a]?s=a:n=a+1}if(r=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=t*r;for(let s=0;s!==r;++s)e[s]=n[o+s];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dl=class extends Xi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vu,endingEnd:Vu}}intervalChanged_(t,e,n){let r=this.parameterPositions,o=t-2,s=t+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Gu:o=t,a=2*e-n;break;case Hu:o=r.length-2,a=e+r[o]-r[o+1];break;default:o=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gu:s=t,l=2*n-e;break;case Hu:s=1,l=n+r[1]-r[0];break;default:s=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=s*h}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(r-e),b=p*p,g=b*p,m=-f*g+2*f*b-f*p,x=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*p+1,y=(-1-d)*g+(1.5+d)*b+.5*p,v=d*g-d*b;for(let M=0;M!==a;++M)o[M]=m*s[h+M]+x*s[c+M]+y*s[l+M]+v*s[u+M];return o}},pl=class extends Xi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)o[f]=s[c+f]*u+s[l+f]*h;return o}},ml=class extends Xi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},gl=class extends Xi{interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(r-e),b=1-p;for(let g=0;g!==a;++g)o[g]=s[c+g]*b+s[l+g]*p;return o}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let b=s[c+p],g=s[l+p],m=d*f+p*2,x=u[m],y=u[m+1],v=t*f+p*2,M=h[v],S=h[v+1],E=Tx(n,e,x,M,r);o[p]=Ip(E,b,y,S,g)}return o}};function Ip(i,t,e,n,r){let o=1-i;return o*o*o*t+3*o*o*i*e+3*o*i*i*n+i*i*i*r}function Sx(i,t,e,n,r){let o=1-i;return 3*o*o*(e-t)+6*o*i*(n-e)+3*i*i*(r-n)}function Tx(i,t,e,n,r){let o=(i-t)/(r-t);for(let s=0;s<8;s++){let a=Ip(o,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=Sx(o,t,e,n,r);if(Math.abs(l)<1e-10)break;o=Math.max(0,Math.min(1,o-a/l))}return o}var En=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=oo(e,this.TimeBufferType),this.values=oo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:oo(t.times,Array),values:oo(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Bu(t.settings)&&(n.settings={inTangents:oo(t.settings.inTangents,Array),outTangents:oo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new gl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ss:e=this.InterpolantFactoryMethodDiscrete;break;case tl:e=this.InterpolantFactoryMethodLinear;break;case Ha:e=this.InterpolantFactoryMethodSmooth;break;case zu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ss;case this.InterpolantFactoryMethodLinear:return tl;case this.InterpolantFactoryMethodSmooth:return Ha;case this.InterpolantFactoryMethodBezier:return zu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Bu(this.settings)&&(Fd(this.settings.inTangents,t),Fd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<t;)++o;for(;s!==-1&&n[s]>e;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,o=n.length;o===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(s!==null&&s>l){$t("KeyframeTrack: Out of order keys.",this,a,l,s),t=!1;break}s=l}if(r!==void 0&&Bb(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ha,o=t.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let b=e[u+p];if(b!==e[f+p]||b!==e[d+p]){l=!0;break}}}if(l){if(a!==s){t[s]=t[a];let u=a*n,f=s*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++s}}if(o>0){t[s]=t[o];for(let a=o*n,l=s*n,c=0;c!==n;++c)e[l+c]=e[a+c];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Bu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Fd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=tl;var Yi=class extends En{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=ss;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends En{constructor(t,e,n,r){super(t,e,n,r)}};bl.prototype.ValueTypeName="color";var xl=class extends En{constructor(t,e,n,r){super(t,e,n,r)}};xl.prototype.ValueTypeName="number";var vl=class extends Xi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)oi.slerpFlat(o,0,s,c-a,s,c,l);return o}},Ms=class extends En{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new vl(this.times,this.values,this.getValueSize(),t)}};Ms.prototype.ValueTypeName="quaternion";Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends En{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=ss;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends En{constructor(t,e,n,r){super(t,e,n,r)}};yl.prototype.ValueTypeName="vector";var Xa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Dd(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Dd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Dd(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var _l=class{constructor(t,e,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&r.onStart!==void 0&&r.onStart(h,s,a),o=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lp=new _l,So=class{constructor(t){this.manager=t!==void 0?t:Lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,o){n.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};So.DEFAULT_MATERIAL_NAME="__DEFAULT";var so=new WeakMap,Ml=class extends So{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let o=this,s=Xa.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(s),o.manager.itemEnd(t)},0);else{let u=so.get(s);u===void 0&&(u=[],so.set(s,u)),u.push({onLoad:e,onError:r})}return s}let a=fo("img");function l(){h(),e&&e(this);let u=so.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}so.delete(this),o.manager.itemEnd(t)}function c(u){h(),r&&r(u),Xa.remove(`image:${t}`);let f=so.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}so.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Xa.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}};var yr=class extends So{constructor(t){super(t)}load(t,e,n,r){let o=new fn,s=new Ml(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,r),o}},ws=class extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new J(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ss=class extends ws{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new J(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ku=new _e,Od=new Y,Nd=new Y,wl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Od.setFromMatrixPosition(t.matrixWorld),e.position.copy(Od),Nd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,r){ku.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ku,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,s=r?r.z/o.x:1,a=r?r.w/o.y:1,l=r?r.x/o.x:0,c=r?r.y/o.y:0;t.coordinateSystem===ho||t.reversedDepth?e.set(.5*s,0,0,.5*s+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*s,0,0,.5*s+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ku)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Va=new Y,Ga=new oi,ei=new Y,Ts=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Va,Ga,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ga,ei.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Va,Ga,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ga,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new Y,Ud=new Kt,Bd=new Kt,tn=class extends Ts{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=el*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(mu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return el*2*Math.atan(Math.tan(mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,Ud,Bd),e.subVectors(Bd,Ud)}setViewOffset(t,e,n,r,o,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(mu*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,e-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var An=class extends Ts{constructor(t=-1,e=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-t,s=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$u=class extends wl{constructor(){super(new An(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Es=class extends ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new $u}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ao=-90,lo=1,Sl=class extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new tn(ao,lo,t,e);r.layers=this.layers,this.add(r);let o=new tn(ao,lo,t,e);o.layers=this.layers,this.add(o);let s=new tn(ao,lo,t,e);s.layers=this.layers,this.add(s);let a=new tn(ao,lo,t,e);a.layers=this.layers,this.add(a);let l=new tn(ao,lo,t,e);l.layers=this.layers,this.add(l);let c=new tn(ao,lo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,o,s,a,l]=e;for(let c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Tl=class extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Mh="\\[\\]\\.:\\/",Ex=new RegExp("["+Mh+"]","g"),wh="[^"+Mh+"]",Ax="[^"+Mh.replace("\\.","")+"]",Rx=/((?:WC+[\/:])*)/.source.replace("WC",wh),Px=/(WCOD+)?/.source.replace("WCOD",Ax),Cx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),Ix=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),Lx=new RegExp("^"+Rx+Px+Cx+Ix+"$"),Fx=["material","materials","bones","map"],Zu=class{constructor(t,e,n){let r=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ex,"")}static parseTrackName(t){let e=Lx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);Fx.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[r];if(s===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=Zu;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _T=new Float32Array(1);var kd=new _e,As=class{constructor(t,e,n=0,r=1/0){this.ray=new br(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):$t("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return kd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kd),this}intersectObject(t,e=!0,n=[]){return Ku(t,this,n,e),n.sort(zd),n}intersectObjects(t,e=!0,n=[]){for(let r=0,o=t.length;r<o;r++)Ku(t[r],this,n,e);return n.sort(zd),n}};function zd(i,t){return i.distance-t.distance}function Ku(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)Ku(o[s],t,e,!0)}}var Ph=class Ph{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=r,this}};Ph.prototype.isMatrix2=!0;var Ju=Ph;function Sh(i,t,e,n){let r=Dx(n);switch(e){case mh:return i*t;case bh:return i*t/r.components*r.byteLength;case Dl:return i*t/r.components*r.byteLength;case Ji:return i*t*2/r.components*r.byteLength;case Ol:return i*t*2/r.components*r.byteLength;case gh:return i*t*3/r.components*r.byteLength;case Fn:return i*t*4/r.components*r.byteLength;case Nl:return i*t*4/r.components*r.byteLength;case Is:case Ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fs:case Ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:case zl:return Math.max(i,16)*Math.max(t,8)/4;case Ul:case kl:return Math.max(i,8)*Math.max(t,8)/2;case Vl:case Gl:case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hl:case Os:case Yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ac:case lc:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case uc:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ns:case fc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dx(i){switch(i){case _n:case hh:return{byteLength:1,components:1};case Eo:case fh:case $n:return{byteLength:2,components:1};case Ll:case Fl:return{byteLength:2,components:4};case Yn:case Il:case qn:return{byteLength:4,components:1};case dh:case ph:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function tm(){let i=null,t=!1,e=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),e(o,s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Nx(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],b=u[d];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++f,u[f]=b)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let b=u[d];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var Ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bx=`#ifdef USE_ALPHAHASH
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
#endif`,kx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hx=`#ifdef USE_AOMAP
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
#endif`,Wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xx=`#ifdef USE_BATCHING
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
#endif`,Yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kx=`#ifdef USE_IRIDESCENCE
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
#endif`,Jx=`#ifdef USE_BUMPMAP
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
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,iv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,sv=`#define PI 3.141592653589793
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
} // validated`,av=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lv=`vec3 transformedNormal = objectNormal;
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
#endif`,cv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dv="gl_FragColor = linearToOutputTexel( gl_FragColor );",pv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mv=`#ifdef USE_ENVMAP
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
#endif`,gv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bv=`#ifdef USE_ENVMAP
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
#endif`,xv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vv=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_v=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sv=`#ifdef USE_GRADIENTMAP
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
}`,Tv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ev=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Pv=`#ifdef USE_ENVMAP
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
#endif`,Cv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dv=`PhysicalMaterial material;
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
#endif`,Ov=`uniform sampler2D dfgLUT;
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
}`,Nv=`
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
#endif`,Uv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,zv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qv=`#if defined( USE_POINTS_UV )
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
#endif`,$v=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qv=`#ifdef USE_MORPHTARGETS
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
#endif`,ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ny=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sy=`#ifdef USE_NORMALMAP
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
#endif`,ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,my=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,by=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_y=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,My=`float getShadowMask() {
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
}`,wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sy=`#ifdef USE_SKINNING
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
#endif`,Ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ey=`#ifdef USE_SKINNING
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
#endif`,Ay=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Iy=`#ifdef USE_TRANSMISSION
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
#endif`,Ly=`#ifdef USE_TRANSMISSION
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ny=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Uy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,By=`uniform sampler2D t2D;
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
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`#include <common>
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
}`,Wy=`#if DEPTH_PACKING == 3200
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
}`,Xy=`#define DISTANCE
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
}`,Yy=`#define DISTANCE
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
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$y=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`uniform float scale;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,Jy=`#include <common>
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
}`,jy=`uniform vec3 diffuse;
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
}`,Qy=`#define LAMBERT
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
}`,t1=`#define LAMBERT
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
}`,e1=`#define MATCAP
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
}`,n1=`#define MATCAP
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
}`,i1=`#define NORMAL
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
}`,r1=`#define NORMAL
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
}`,o1=`#define PHONG
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
}`,s1=`#define PHONG
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
}`,a1=`#define STANDARD
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
}`,l1=`#define STANDARD
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
}`,c1=`#define TOON
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
}`,u1=`#define TOON
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
}`,h1=`uniform float size;
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
}`,f1=`uniform vec3 diffuse;
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
}`,d1=`#include <common>
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
}`,p1=`uniform vec3 color;
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
}`,m1=`uniform float rotation;
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
}`,g1=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:Ux,alphahash_pars_fragment:Bx,alphamap_fragment:kx,alphamap_pars_fragment:zx,alphatest_fragment:Vx,alphatest_pars_fragment:Gx,aomap_fragment:Hx,aomap_pars_fragment:Wx,batching_pars_vertex:Xx,batching_vertex:Yx,begin_vertex:qx,beginnormal_vertex:$x,bsdfs:Zx,iridescence_fragment:Kx,bumpmap_pars_fragment:Jx,clipping_planes_fragment:jx,clipping_planes_pars_fragment:Qx,clipping_planes_pars_vertex:tv,clipping_planes_vertex:ev,color_fragment:nv,color_pars_fragment:iv,color_pars_vertex:rv,color_vertex:ov,common:sv,cube_uv_reflection_fragment:av,defaultnormal_vertex:lv,displacementmap_pars_vertex:cv,displacementmap_vertex:uv,emissivemap_fragment:hv,emissivemap_pars_fragment:fv,colorspace_fragment:dv,colorspace_pars_fragment:pv,envmap_fragment:mv,envmap_common_pars_fragment:gv,envmap_pars_fragment:bv,envmap_pars_vertex:xv,envmap_physical_pars_fragment:Pv,envmap_vertex:vv,fog_vertex:yv,fog_pars_vertex:_v,fog_fragment:Mv,fog_pars_fragment:wv,gradientmap_pars_fragment:Sv,lightmap_pars_fragment:Tv,lights_lambert_fragment:Ev,lights_lambert_pars_fragment:Av,lights_pars_begin:Rv,lights_toon_fragment:Cv,lights_toon_pars_fragment:Iv,lights_phong_fragment:Lv,lights_phong_pars_fragment:Fv,lights_physical_fragment:Dv,lights_physical_pars_fragment:Ov,lights_fragment_begin:Nv,lights_fragment_maps:Uv,lights_fragment_end:Bv,lightprobes_pars_fragment:kv,logdepthbuf_fragment:zv,logdepthbuf_pars_fragment:Vv,logdepthbuf_pars_vertex:Gv,logdepthbuf_vertex:Hv,map_fragment:Wv,map_pars_fragment:Xv,map_particle_fragment:Yv,map_particle_pars_fragment:qv,metalnessmap_fragment:$v,metalnessmap_pars_fragment:Zv,morphinstance_vertex:Kv,morphcolor_vertex:Jv,morphnormal_vertex:jv,morphtarget_pars_vertex:Qv,morphtarget_vertex:ty,normal_fragment_begin:ey,normal_fragment_maps:ny,normal_pars_fragment:iy,normal_pars_vertex:ry,normal_vertex:oy,normalmap_pars_fragment:sy,clearcoat_normal_fragment_begin:ay,clearcoat_normal_fragment_maps:ly,clearcoat_pars_fragment:cy,iridescence_pars_fragment:uy,opaque_fragment:hy,packing:fy,premultiplied_alpha_fragment:dy,project_vertex:py,dithering_fragment:my,dithering_pars_fragment:gy,roughnessmap_fragment:by,roughnessmap_pars_fragment:xy,shadowmap_pars_fragment:vy,shadowmap_pars_vertex:yy,shadowmap_vertex:_y,shadowmask_pars_fragment:My,skinbase_vertex:wy,skinning_pars_vertex:Sy,skinning_vertex:Ty,skinnormal_vertex:Ey,specularmap_fragment:Ay,specularmap_pars_fragment:Ry,tonemapping_fragment:Py,tonemapping_pars_fragment:Cy,transmission_fragment:Iy,transmission_pars_fragment:Ly,uv_pars_fragment:Fy,uv_pars_vertex:Dy,uv_vertex:Oy,worldpos_vertex:Ny,background_vert:Uy,background_frag:By,backgroundCube_vert:ky,backgroundCube_frag:zy,cube_vert:Vy,cube_frag:Gy,depth_vert:Hy,depth_frag:Wy,distance_vert:Xy,distance_frag:Yy,equirect_vert:qy,equirect_frag:$y,linedashed_vert:Zy,linedashed_frag:Ky,meshbasic_vert:Jy,meshbasic_frag:jy,meshlambert_vert:Qy,meshlambert_frag:t1,meshmatcap_vert:e1,meshmatcap_frag:n1,meshnormal_vert:i1,meshnormal_frag:r1,meshphong_vert:o1,meshphong_frag:s1,meshphysical_vert:a1,meshphysical_frag:l1,meshtoon_vert:c1,meshtoon_frag:u1,points_vert:h1,points_frag:f1,shadow_vert:d1,shadow_frag:p1,sprite_vert:m1,sprite_frag:g1},Et={common:{diffuse:{value:new J(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new J(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new J(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},ui={basic:{uniforms:mn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:mn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new J(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:mn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:mn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new J(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:mn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new J(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:mn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:mn([Et.points,Et.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:mn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:mn([Et.common,Et.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:mn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:mn([Et.sprite,Et.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:mn([Et.common,Et.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:mn([Et.lights,Et.fog,{color:{value:new J(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};ui.physical={uniforms:mn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new J(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new J(0)},specularColor:{value:new J(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var gc={r:0,b:0,g:0},b1=new _e,em=new te;em.set(-1,0,0,0,1,0,0,0,1);function x1(i,t,e,n,r,o){let s=new J(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function d(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){let v=x.backgroundBlurriness>0;y=t.get(y,v)}return y}function p(x){let y=!1,v=d(x);v===null?g(s,a):v&&v.isColor&&(g(v,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,y){let v=d(y);v&&(v.isCubeTexture||v.mapping===Ps)?(c===void 0&&(c=new St(new yo(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Sr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(b1.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(em),c.material.toneMapped=ce.getTransfer(v.colorSpace)!==ye,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new St(new Wn(2,2),new pn({name:"BackgroundMaterial",uniforms:Sr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ce.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,y){x.getRGB(gc,_h(i)),e.buffers.color.setClear(gc.r,gc.g,gc.b,y,o)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,y=1){s.set(x),a=y,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(s,a)},render:p,addToRenderList:b,dispose:m}}function v1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),o=r,s=!1;function a(w,C,N,L,R){let P=!1,F=u(w,L,N,C);o!==F&&(o=F,c(o.object)),P=d(w,L,N,R),P&&p(w,L,N,R),R!==null&&t.update(R,i.ELEMENT_ARRAY_BUFFER),(P||s)&&(s=!1,v(w,C,N,L),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(R).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,C,N,L){let R=L.wireframe===!0,P=n[C.id];P===void 0&&(P={},n[C.id]=P);let F=w.isInstancedMesh===!0?w.id:0,D=P[F];D===void 0&&(D={},P[F]=D);let U=D[N.id];U===void 0&&(U={},D[N.id]=U);let k=U[R];return k===void 0&&(k=f(l()),U[R]=k),k}function f(w){let C=[],N=[],L=[];for(let R=0;R<e;R++)C[R]=0,N[R]=0,L[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:L,object:w,attributes:{},index:null}}function d(w,C,N,L){let R=o.attributes,P=C.attributes,F=0,D=N.getAttributes();for(let U in D)if(D[U].location>=0){let V=R[U],X=P[U];if(X===void 0&&(U==="instanceMatrix"&&w.instanceMatrix&&(X=w.instanceMatrix),U==="instanceColor"&&w.instanceColor&&(X=w.instanceColor)),V===void 0||V.attribute!==X||X&&V.data!==X.data)return!0;F++}return o.attributesNum!==F||o.index!==L}function p(w,C,N,L){let R={},P=C.attributes,F=0,D=N.getAttributes();for(let U in D)if(D[U].location>=0){let V=P[U];V===void 0&&(U==="instanceMatrix"&&w.instanceMatrix&&(V=w.instanceMatrix),U==="instanceColor"&&w.instanceColor&&(V=w.instanceColor));let X={};X.attribute=V,V&&V.data&&(X.data=V.data),R[U]=X,F++}o.attributes=R,o.attributesNum=F,o.index=L}function b(){let w=o.newAttributes;for(let C=0,N=w.length;C<N;C++)w[C]=0}function g(w){m(w,0)}function m(w,C){let N=o.newAttributes,L=o.enabledAttributes,R=o.attributeDivisors;N[w]=1,L[w]===0&&(i.enableVertexAttribArray(w),L[w]=1),R[w]!==C&&(i.vertexAttribDivisor(w,C),R[w]=C)}function x(){let w=o.newAttributes,C=o.enabledAttributes;for(let N=0,L=C.length;N<L;N++)C[N]!==w[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function y(w,C,N,L,R,P,F){F===!0?i.vertexAttribIPointer(w,C,N,R,P):i.vertexAttribPointer(w,C,N,L,R,P)}function v(w,C,N,L){b();let R=L.attributes,P=N.getAttributes(),F=C.defaultAttributeValues;for(let D in P){let U=P[D];if(U.location>=0){let k=R[D];if(k===void 0&&(D==="instanceMatrix"&&w.instanceMatrix&&(k=w.instanceMatrix),D==="instanceColor"&&w.instanceColor&&(k=w.instanceColor)),k!==void 0){let V=k.normalized,X=k.itemSize,z=t.get(k);if(z===void 0)continue;let $=z.buffer,j=z.type,at=z.bytesPerElement,H=j===i.INT||j===i.UNSIGNED_INT||k.gpuType===Il;if(k.isInterleavedBufferAttribute){let W=k.data,Q=W.stride,ot=k.offset;if(W.isInstancedInterleavedBuffer){for(let et=0;et<U.locationSize;et++)m(U.location+et,W.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let et=0;et<U.locationSize;et++)g(U.location+et);i.bindBuffer(i.ARRAY_BUFFER,$);for(let et=0;et<U.locationSize;et++)y(U.location+et,X/U.locationSize,j,V,Q*at,(ot+X/U.locationSize*et)*at,H)}else{if(k.isInstancedBufferAttribute){for(let W=0;W<U.locationSize;W++)m(U.location+W,k.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let W=0;W<U.locationSize;W++)g(U.location+W);i.bindBuffer(i.ARRAY_BUFFER,$);for(let W=0;W<U.locationSize;W++)y(U.location+W,X/U.locationSize,j,V,X*at,X/U.locationSize*W*at,H)}}else if(F!==void 0){let V=F[D];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(U.location,V);break;case 3:i.vertexAttrib3fv(U.location,V);break;case 4:i.vertexAttrib4fv(U.location,V);break;default:i.vertexAttrib1fv(U.location,V)}}}}x()}function M(){A();for(let w in n){let C=n[w];for(let N in C){let L=C[N];for(let R in L){let P=L[R];for(let F in P)h(P[F].object),delete P[F];delete L[R]}}delete n[w]}}function S(w){if(n[w.id]===void 0)return;let C=n[w.id];for(let N in C){let L=C[N];for(let R in L){let P=L[R];for(let F in P)h(P[F].object),delete P[F];delete L[R]}}delete n[w.id]}function E(w){for(let C in n){let N=n[C];for(let L in N){let R=N[L];if(R[w.id]===void 0)continue;let P=R[w.id];for(let F in P)h(P[F].object),delete P[F];delete R[w.id]}}}function _(w){for(let C in n){let N=n[C],L=w.isInstancedMesh===!0?w.id:0,R=N[L];if(R!==void 0){for(let P in R){let F=R[P];for(let D in F)h(F[D].object),delete F[D];delete R[P]}delete N[L],Object.keys(N).length===0&&delete n[C]}}}function A(){T(),s=!0,o!==r&&(o=r,c(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:T,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:E,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function y1(i,t,e){let n;function r(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function s(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function _1(i,t,e,n){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(E){return!(E!==Fn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let _=E===$n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==_n&&E!==qn&&!_&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,maxSamples:M,samples:S}}function M1(i){let t=this,e=null,n=0,r=!1,o=!1,s=new Vn,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!r||p===null||p.length===0||o&&!g)o?h(null):c();else{let x=o?0:n,y=x*4,v=m.clippingState||null;l.value=v,v=h(p,f,y,d);for(let M=0;M!==y;++M)v[M]=e[M];m.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=l.value,p!==!0||g===null){let m=d+b*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,v=d;y!==b;++y,v+=4)s.copy(u[y]).applyMatrix4(x,a),s.normal.toArray(g,v),g[v+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var Po=4,w1=6,S1=20,T1=256,Us=new An,Fp=new J,Ch=null,Ih=0,Lh=0,Fh=!1,E1=new Y,Tr=new Y,xc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,o={}){let{size:s=256,position:a=E1}=o;Ch=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ch,Ih,Lh),this._renderer.xr.enabled=Fh,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ch=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:$n,format:Fn,colorSpace:as,depthBuffer:!1},r=Dp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dp(t,e,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=A1(o)),this._blurMaterial=P1(o,t,e),this._ggxMaterial=R1(o,t,e)}return r}_compileMaterial(t){let e=new St(new Vt,t);this._renderer.compile(e,Us)}_sceneToCubeUV(t,e,n,r,o){let l=new tn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Fp),u.toneMapping=Xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new yo,new Xt({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,m=!1,x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,m=!0):(g.color.copy(Fp),m=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[y],o.y,o.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[y],o.z)):(l.up.set(0,c[y],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[y]));let M=this._cubeSize;Ro(r,v*M,y>2?M:0,M,M),u.setRenderTarget(r),m&&u.render(b,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===$i||t.mapping===wr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Np()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Op());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=t;let l=this._cubeSize;Ro(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(s,Us)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,b=this._sizeLods[n],g=3*b*(n>p-Po?n-p+Po:0),m=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Ro(o,g,m,3*b,2*b),r.setRenderTarget(o),r.render(a,Us),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,Ro(t,g,m,3*b,2*b),r.setRenderTarget(t),r.render(a,Us)}_blur(t,e,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,s),this._blurPass(o,t,n,n,s)}_blurPass(t,e,n,r,o){let s=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-Po?r-this._lodMax+Po:0),f=4*(this._cubeSize-h);Ro(e,u,f,3*h,2*h),s.setRenderTarget(e),s.render(l,Us)}};function A1(i){let t=[],e=[],n=i,r=i-Po+1+w1;for(let o=0;o<r;o++){let s=Math.pow(2,n);t.push(s);let a=1/(s-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),b=new Float32Array(d*f*u);for(let m=0;m<u;m++){let x=m%3*2/3-1,y=m>2?0:-1,v=[x,y,0,x+2/3,y,0,x+2/3,y+1,0,x,y,0,x+2/3,y+1,0,x,y+1,0];p.set(v,d*f*m);for(let M=0;M<f;M++){let S=h[M*2]*2-1,E=h[M*2+1]*2-1;m===0?Tr.set(1,E,S):m===1?Tr.set(-S,1,-E):m===2?Tr.set(-S,E,1):m===3?Tr.set(-1,E,-S):m===4?Tr.set(-S,-1,E):Tr.set(S,E,-1),Tr.toArray(b,(m*f+M)*d)}}let g=new Vt;g.setAttribute("position",new Tn(p,d)),g.setAttribute("outputDirection",new Tn(b,d)),e.push(new St(g,null)),n>Po&&n--}return{lodMeshes:e,sizeLods:t}}function Dp(i,t,e){let n=new Ye(i,t,e);return n.texture.mapping=Ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function R1(i,t,e){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function P1(i,t,e){return new pn({name:"SphericalGaussianBlur",defines:{SAMPLES:S1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Op(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Np(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var vc=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ms(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yo(5,5,5),o=new pn({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Ln});o.uniforms.tEquirect.value=e;let s=new St(r,o),a=e.minFilter;return e.minFilter===Zi&&(e.minFilter=Xe),new Sl(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let o=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,r);t.setRenderTarget(o)}};function C1(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?s(f):o(f)}function o(f){if(f&&f.isTexture){let d=f.mapping;if(d===Rl||d===Pl)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let b=new vc(p.height);return b.fromEquirectangularTexture(i,f),t.set(f,b),f.addEventListener("dispose",c),a(b.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let d=f.mapping,p=d===Rl||d===Pl,b=d===$i||d===wr;if(p||b){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new xc(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return p&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new xc(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===Rl?f.mapping=$i:d===Pl&&(f.mapping=wr),f}function l(f){let d=0,p=6;for(let b=0;b<p;b++)f[b]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function I1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&pr("WebGLRenderer: "+n+" extension not supported."),r}}}function L1(i,t,e,n){let r={},o=new WeakMap;function s(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",s),delete r[f.id];let d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,b=0;if(p===void 0)return;if(d!==null){let x=d.array;b=d.version;for(let y=0,v=x.length;y<v;y+=3){let M=x[y+0],S=x[y+1],E=x[y+2];f.push(M,S,S,E,E,M)}}else{let x=p.array;b=p.version;for(let y=0,v=x.length/3-1;y<v;y+=3){let M=y+0,S=y+1,E=y+2;f.push(M,S,S,E,E,M)}}let g=new(p.count>=65535?gr:fs)(f,1);g.version=b;let m=o.get(u);m&&t.remove(m),o.set(u,g)}function h(u){let f=o.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function F1(i,t,e){let n;function r(u){n=u}let o,s;function a(u){o=u.type,s=u.bytesPerElement}function l(u,f){i.drawElements(n,f,o,u*s),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,o,u*s,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,d);let b=0;for(let g=0;g<d;g++)b+=f[g];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function D1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:$t("WebGLInfo: Unknown draw mode:",s);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function O1(i,t,e){let n=new WeakMap,r=new De;function o(s,a,l){let c=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let A=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),b===!0&&(y=3);let v=a.attributes.position.count*y,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*M*4*u),E=new us(S,v,M,u);E.type=qn,E.needsUpdate=!0;let _=y*4;for(let T=0;T<u;T++){let w=g[T],C=m[T],N=x[T],L=v*M*4*T;for(let R=0;R<w.count;R++){let P=R*_;d===!0&&(r.fromBufferAttribute(w,R),S[L+P+0]=r.x,S[L+P+1]=r.y,S[L+P+2]=r.z,S[L+P+3]=0),p===!0&&(r.fromBufferAttribute(C,R),S[L+P+4]=r.x,S[L+P+5]=r.y,S[L+P+6]=r.z,S[L+P+7]=0),b===!0&&(r.fromBufferAttribute(N,R),S[L+P+8]=r.x,S[L+P+9]=r.y,S[L+P+10]=r.z,S[L+P+11]=N.itemSize===4?r.w:1)}}f={count:u,texture:E,size:new Kt(v,M)},n.set(a,f),a.addEventListener("dispose",A)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function N1(i,t,e,n,r){let o=new WeakMap;function s(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(o.get(f)!==h&&(t.update(f),o.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return f}function a(){o=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:a}}var U1={[ih]:"LINEAR_TONE_MAPPING",[rh]:"REINHARD_TONE_MAPPING",[oh]:"CINEON_TONE_MAPPING",[sh]:"ACES_FILMIC_TONE_MAPPING",[lh]:"AGX_TONE_MAPPING",[ch]:"NEUTRAL_TONE_MAPPING",[ah]:"CUSTOM_TONE_MAPPING"};function B1(i,t,e,n,r,o){let s=new Ye(t,e,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Vt;c.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new It([0,2,0,0,2,0],2));let h=new hl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new St(c,h),f=new An(-1,1,1,-1,0,1),d=null,p=null,b=!1,g,m=null,x=[],y=!1;this.setSize=function(v,M){s.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let S=0;S<x.length;S++){let E=x[S];E.setSize&&E.setSize(v,M)}},this.setEffects=function(v){x=v,y=x.length>0&&x[0].isRenderPass===!0;let M=s.width,S=s.height;x.length>0&&a===null&&(a=new Ye(M,S,{type:$n,depthBuffer:!1,stencilBuffer:!1}),l=new Ye(M,S,{type:$n,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<x.length;E++){let _=x[E];_.setSize&&_.setSize(M,S)}},this.begin=function(v,M){if(b||v.toneMapping===Xn&&x.length===0)return!1;if(m=M,M!==null){let S=M.width,E=M.height;(s.width!==S||s.height!==E)&&this.setSize(S,E)}return y===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=Xn,!0},this.hasRenderPass=function(){return y},this.end=function(v,M){v.toneMapping=g,b=!0;let S=s,E=a;for(let _=0;_<x.length;_++){let A=x[_];A.enabled!==!1&&(A.render(v,E,S,M),A.needsSwap!==!1&&(S=E,E=E===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},ce.getTransfer(d)===ye&&(h.defines.SRGB_TRANSFER="");let _=U1[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(m),v.render(u,f),m=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var nm=new fn,Nh=new ai(1,1),im=new us,rm=new rl,om=new ms,Up=[],Bp=[],kp=new Float32Array(16),zp=new Float32Array(9),Vp=new Float32Array(4);function Io(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,o=Up[r];if(o===void 0&&(o=new Float32Array(r),Up[r]=o),t!==0){n.toArray(o,0);for(let s=1,a=0;s!==t;++s)a+=e,i[s].toArray(o,a)}return o}function Ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _c(i,t){let e=Bp[t];e===void 0&&(e=new Int32Array(t),Bp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function k1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function z1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function V1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function G1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function H1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;Vp.set(n),i.uniformMatrix2fv(this.addr,!1,Vp),Je(e,n)}}function W1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;zp.set(n),i.uniformMatrix3fv(this.addr,!1,zp),Je(e,n)}}function X1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;kp.set(n),i.uniformMatrix4fv(this.addr,!1,kp),Je(e,n)}}function Y1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function q1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function $1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function Z1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function K1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function J1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function j1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function Q1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function t_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Nh.compareFunction=e.isReversedDepthBuffer()?mc:pc,o=Nh):o=nm,e.setTexture2D(t||o,r)}function e_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||rm,r)}function n_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||om,r)}function i_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||im,r)}function r_(i){switch(i){case 5126:return k1;case 35664:return z1;case 35665:return V1;case 35666:return G1;case 35674:return H1;case 35675:return W1;case 35676:return X1;case 5124:case 35670:return Y1;case 35667:case 35671:return q1;case 35668:case 35672:return $1;case 35669:case 35673:return Z1;case 5125:return K1;case 36294:return J1;case 36295:return j1;case 36296:return Q1;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}function o_(i,t){i.uniform1fv(this.addr,t)}function s_(i,t){let e=Io(t,this.size,2);i.uniform2fv(this.addr,e)}function a_(i,t){let e=Io(t,this.size,3);i.uniform3fv(this.addr,e)}function l_(i,t){let e=Io(t,this.size,4);i.uniform4fv(this.addr,e)}function c_(i,t){let e=Io(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function u_(i,t){let e=Io(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function h_(i,t){let e=Io(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function f_(i,t){i.uniform1iv(this.addr,t)}function d_(i,t){i.uniform2iv(this.addr,t)}function p_(i,t){i.uniform3iv(this.addr,t)}function m_(i,t){i.uniform4iv(this.addr,t)}function g_(i,t){i.uniform1uiv(this.addr,t)}function b_(i,t){i.uniform2uiv(this.addr,t)}function x_(i,t){i.uniform3uiv(this.addr,t)}function v_(i,t){i.uniform4uiv(this.addr,t)}function y_(i,t,e){let n=this.cache,r=t.length,o=_c(e,r);Ke(n,o)||(i.uniform1iv(this.addr,o),Je(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=Nh:s=nm;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||s,o[a])}function __(i,t,e){let n=this.cache,r=t.length,o=_c(e,r);Ke(n,o)||(i.uniform1iv(this.addr,o),Je(n,o));for(let s=0;s!==r;++s)e.setTexture3D(t[s]||rm,o[s])}function M_(i,t,e){let n=this.cache,r=t.length,o=_c(e,r);Ke(n,o)||(i.uniform1iv(this.addr,o),Je(n,o));for(let s=0;s!==r;++s)e.setTextureCube(t[s]||om,o[s])}function w_(i,t,e){let n=this.cache,r=t.length,o=_c(e,r);Ke(n,o)||(i.uniform1iv(this.addr,o),Je(n,o));for(let s=0;s!==r;++s)e.setTexture2DArray(t[s]||im,o[s])}function S_(i){switch(i){case 5126:return o_;case 35664:return s_;case 35665:return a_;case 35666:return l_;case 35674:return c_;case 35675:return u_;case 35676:return h_;case 5124:case 35670:return f_;case 35667:case 35671:return d_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return b_;case 36295:return x_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return w_}}var Uh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=r_(e.type)}},Bh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=S_(e.type)}},kh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(t,e[a.id],n)}}},Dh=/(\w+)(\])?(\[|\.)?/g;function Gp(i,t){i.seq.push(t),i.map[t.id]=t}function T_(i,t,e){let n=i.name,r=n.length;for(Dh.lastIndex=0;;){let o=Dh.exec(n),s=Dh.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Gp(e,c===void 0?new Uh(a,i,t):new Bh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new kh(a),Gp(e,u)),e=u}}}var Co=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=t.getActiveUniform(e,s),l=t.getUniformLocation(e,a.name);T_(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,n,r){let o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,s=e.length;o!==s;++o){let a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,o=t.length;r!==o;++r){let s=t[r];s.id in e&&n.push(s)}return n}};function Hp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var E_=37297,A_=0;function R_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return n.join(`
`)}var Wp=new te;function P_(i){ce._getMatrix(Wp,ce.workingColorSpace,i);let t=`mat3( ${Wp.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case ls:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+o+`

`+R_(i.getShaderSource(t),a)}else return o}function C_(i,t){let e=P_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var I_={[ih]:"Linear",[rh]:"Reinhard",[oh]:"Cineon",[sh]:"ACESFilmic",[lh]:"AgX",[ch]:"Neutral",[ah]:"Custom"};function L_(i,t){let e=I_[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var bc=new Y;function F_(){ce.getLuminanceCoefficients(bc);let i=bc.x.toFixed(4),t=bc.y.toFixed(4),e=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function O_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function N_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(t,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[s]={type:o.type,location:i.getAttribLocation(t,s),locationSize:a}}return e}function ks(i){return i!==""}function Yp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var U_=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(i){return i.replace(U_,k_)}var B_=new Map;function k_(i,t){let e=ae[t];if(e===void 0){let n=B_.get(t);if(n!==void 0)e=ae[n],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return zh(e)}var z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(i){return i.replace(z_,V_)}function V_(i,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Zp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var G_={[_r]:"SHADOWMAP_TYPE_PCF",[To]:"SHADOWMAP_TYPE_VSM"};function H_(i){return G_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var W_={[$i]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE_UV"};function X_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":W_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Y_={[wr]:"ENVMAP_MODE_REFRACTION"};function q_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Y_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $_={[Al]:"ENVMAP_BLENDING_MULTIPLY",[lp]:"ENVMAP_BLENDING_MIX",[cp]:"ENVMAP_BLENDING_ADD"};function Z_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$_[i.combine]||"ENVMAP_BLENDING_NONE"}function K_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function J_(i,t,e,n){let r=i.getContext(),o=e.defines,s=e.vertexShader,a=e.fragmentShader,l=H_(e),c=X_(e),h=q_(e),u=Z_(e),f=K_(e),d=D_(e),p=O_(o),b=r.createProgram(),g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ks).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ks).join(`
`),m.length>0&&(m+=`
`)):(g=[Zp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),m=[Zp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?ae.tonemapping_pars_fragment:"",e.toneMapping!==Xn?L_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,C_("linearToOutputTexel",e.outputColorSpace),F_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ks).join(`
`)),s=zh(s),s=Yp(s,e),s=qp(s,e),a=zh(a),a=Yp(a,e),a=qp(a,e),s=$p(s),a=$p(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=x+g+s,v=x+m+a,M=Hp(r,r.VERTEX_SHADER,y),S=Hp(r,r.FRAGMENT_SHADER,v);r.attachShader(b,M),r.attachShader(b,S),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function E(w){if(i.debug.checkShaderErrors){let C=r.getProgramInfoLog(b)||"",N=r.getShaderInfoLog(M)||"",L=r.getShaderInfoLog(S)||"",R=C.trim(),P=N.trim(),F=L.trim(),D=!0,U=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,M,S);else{let k=Xp(r,M,"vertex"),V=Xp(r,S,"fragment");$t("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+R+`
`+k+`
`+V)}else R!==""?qt("WebGLProgram: Program Info Log:",R):(P===""||F==="")&&(U=!1);U&&(w.diagnostics={runnable:D,programLog:R,vertexShader:{log:P,prefix:g},fragmentShader:{log:F,prefix:m}})}r.deleteShader(M),r.deleteShader(S),_=new Co(r,b),A=N_(r,b)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(b,E_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=A_++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=S,this}var j_=0,Vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Gh(t),e.set(t,n)),n}},Gh=class{constructor(t){this.id=j_++,this.code=t,this.usedTimes=0}};function Q_(i){return i===Ji||i===Os||i===Ns}function tM(i,t,e,n,r,o){let s=new go,a=new Vh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,A,T,w,C,N){let L=w.fog,R=C.geometry,P=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?w.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,D=t.get(_.envMap||P,F),U=D&&D.mapping===Ps?D.image.height:null,k=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&qt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let V=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,X=V!==void 0?V.length:0,z=0;R.morphAttributes.position!==void 0&&(z=1),R.morphAttributes.normal!==void 0&&(z=2),R.morphAttributes.color!==void 0&&(z=3);let $,j,at,H;if(k){let Re=ui[k];$=Re.vertexShader,j=Re.fragmentShader}else{$=_.vertexShader,j=_.fragmentShader;let Re=a.getVertexShaderStage(_),xe=a.getFragmentShaderStage(_);a.update(_,Re,xe),at=Re.id,H=xe.id}let W=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),ot=C.isInstancedMesh===!0,et=C.isBatchedMesh===!0,ht=!!_.map,gt=!!_.matcap,lt=!!D,dt=!!_.aoMap,Dt=!!_.lightMap,Rt=!!_.bumpMap&&_.wireframe===!1,ne=!!_.normalMap,pe=!!_.displacementMap,de=!!_.emissiveMap,Me=!!_.metalnessMap,Ue=!!_.roughnessMap,Z=_.anisotropy>0,Ge=_.clearcoat>0,ge=_.dispersion>0,G=_.retroreflectivity>0,I=_.iridescence>0,tt=_.sheen>0,rt=_.transmission>0,ct=Z&&!!_.anisotropyMap,xt=Ge&&!!_.clearcoatMap,vt=Ge&&!!_.clearcoatNormalMap,ut=Ge&&!!_.clearcoatRoughnessMap,pt=I&&!!_.iridescenceMap,yt=I&&!!_.iridescenceThicknessMap,Gt=tt&&!!_.sheenColorMap,Tt=tt&&!!_.sheenRoughnessMap,_t=!!_.specularMap,Ht=!!_.specularColorMap,Yt=!!_.specularIntensityMap,oe=rt&&!!_.transmissionMap,K=rt&&!!_.thicknessMap,Mt=!!_.gradientMap,ft=!!_.alphaMap,wt=_.alphaTest>0,Ct=!!_.alphaHash,bt=!!_.extensions,Wt=Xn;_.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Wt=i.toneMapping);let Bt={shaderID:k,shaderType:_.type,shaderName:_.name,vertexShader:$,fragmentShader:j,defines:_.defines,customVertexShaderID:at,customFragmentShaderID:H,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:et,batchingColor:et&&C._colorsTexture!==null,instancing:ot,instancingColor:ot&&C.instanceColor!==null,instancingMorph:ot&&C.morphTexture!==null,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ht,matcap:gt,envMap:lt,envMapMode:lt&&D.mapping,envMapCubeUVHeight:U,aoMap:dt,lightMap:Dt,bumpMap:Rt,normalMap:ne,displacementMap:pe,emissiveMap:de,normalMapObjectSpace:ne&&_.normalMapType===fp,normalMapTangentSpace:ne&&_.normalMapType===dc,packedNormalMap:ne&&_.normalMapType===dc&&Q_(_.normalMap.format),metalnessMap:Me,roughnessMap:Ue,anisotropy:Z,anisotropyMap:ct,clearcoat:Ge,clearcoatMap:xt,clearcoatNormalMap:vt,clearcoatRoughnessMap:ut,dispersion:ge,retroreflection:G,iridescence:I,iridescenceMap:pt,iridescenceThicknessMap:yt,sheen:tt,sheenColorMap:Gt,sheenRoughnessMap:Tt,specularMap:_t,specularColorMap:Ht,specularIntensityMap:Yt,transmission:rt,transmissionMap:oe,thicknessMap:K,gradientMap:Mt,opaque:_.transparent===!1&&_.blending===yn&&_.alphaToCoverage===!1,alphaMap:ft,alphaTest:wt,alphaHash:Ct,combine:_.combine,mapUv:ht&&p(_.map.channel),aoMapUv:dt&&p(_.aoMap.channel),lightMapUv:Dt&&p(_.lightMap.channel),bumpMapUv:Rt&&p(_.bumpMap.channel),normalMapUv:ne&&p(_.normalMap.channel),displacementMapUv:pe&&p(_.displacementMap.channel),emissiveMapUv:de&&p(_.emissiveMap.channel),metalnessMapUv:Me&&p(_.metalnessMap.channel),roughnessMapUv:Ue&&p(_.roughnessMap.channel),anisotropyMapUv:ct&&p(_.anisotropyMap.channel),clearcoatMapUv:xt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:vt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&p(_.sheenRoughnessMap.channel),specularMapUv:_t&&p(_.specularMap.channel),specularColorMapUv:Ht&&p(_.specularColorMap.channel),specularIntensityMapUv:Yt&&p(_.specularIntensityMap.channel),transmissionMapUv:oe&&p(_.transmissionMap.channel),thicknessMapUv:K&&p(_.thicknessMap.channel),alphaMapUv:ft&&p(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(ne||Z),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!R.attributes.uv&&(ht||ft),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&ne===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Q,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:z,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:ht&&_.map.isVideoTexture===!0&&ce.getTransfer(_.map.colorSpace)===ye,decodeVideoTextureEmissive:de&&_.emissiveMap.isVideoTexture===!0&&ce.getTransfer(_.emissiveMap.colorSpace)===ye,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ie,flipSided:_.side===on,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:bt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&_.extensions.multiDraw===!0||et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function g(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let T in _.defines)A.push(T),A.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(m(A,_),x(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function m(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function x(_,A){s.disableAll(),A.instancing&&s.enable(0),A.instancingColor&&s.enable(1),A.instancingMorph&&s.enable(2),A.matcap&&s.enable(3),A.envMap&&s.enable(4),A.normalMapObjectSpace&&s.enable(5),A.normalMapTangentSpace&&s.enable(6),A.clearcoat&&s.enable(7),A.iridescence&&s.enable(8),A.alphaTest&&s.enable(9),A.vertexColors&&s.enable(10),A.vertexAlphas&&s.enable(11),A.vertexUv1s&&s.enable(12),A.vertexUv2s&&s.enable(13),A.vertexUv3s&&s.enable(14),A.vertexTangents&&s.enable(15),A.anisotropy&&s.enable(16),A.alphaHash&&s.enable(17),A.batching&&s.enable(18),A.dispersion&&s.enable(19),A.retroreflection&&s.enable(24),A.batchingColor&&s.enable(20),A.gradientMap&&s.enable(21),A.packedNormalMap&&s.enable(22),A.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.reversedDepthBuffer&&s.enable(4),A.skinning&&s.enable(5),A.morphTargets&&s.enable(6),A.morphNormals&&s.enable(7),A.morphColors&&s.enable(8),A.premultipliedAlpha&&s.enable(9),A.shadowMapEnabled&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),A.decodeVideoTextureEmissive&&s.enable(20),A.alphaToCoverage&&s.enable(21),A.numLightProbeGrids>0&&s.enable(22),A.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function y(_){let A=d[_.type],T;if(A){let w=ui[A];T=Cp.clone(w.uniforms)}else T=_.uniforms;return T}function v(_,A){let T=h.get(A);return T!==void 0?++T.usedTimes:(T=new J_(i,A,_,r),c.push(T),h.set(A,T)),T}function M(_){if(--_.usedTimes===0){let A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function E(){a.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:y,acquireProgram:v,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:E}}function eM(){let i=new WeakMap;function t(s){return i.has(s)}function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:o}}function nM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Kp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Jp(){let i=[],t=0,e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function s(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,b,g,m){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:s(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:m},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=s(f),x.groupOrder=b,x.renderOrder=f.renderOrder,x.z=g,x.group=m),t++,x}function l(f,d,p,b,g,m,x){x.reversedDepth===!0&&(g=-g);let y=a(f,d,p,b,g,m);p.transmission>0?n.push(y):p.transparent===!0?r.push(y):e.push(y)}function c(f,d,p,b,g,m){let x=a(f,d,p,b,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?r.unshift(x):e.unshift(x)}function h(f,d){e.length>1&&e.sort(f||nM),n.length>1&&n.sort(d||Kp),r.length>1&&r.sort(d||Kp)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:u,sort:h}}function iM(){let i=new WeakMap;function t(n,r){let o=i.get(n),s;return o===void 0?(s=new Jp,i.set(n,[s])):r>=o.length?(s=new Jp,o.push(s)):s=o[r],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function rM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Y,color:new J};break;case"SpotLight":e={position:new Y,direction:new Y,color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new J,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new J,groundColor:new J};break;case"RectAreaLight":e={color:new J,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[t.id]=e,e}}}function oM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var sM=0;function aM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function lM(i){let t=new rM,e=oM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);let r=new Y,o=new _e,s=new _e;function a(c){let h=0,u=0,f=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let d=0,p=0,b=0,g=0,m=0,x=0,y=0,v=0,M=0,S=0,E=0,_=0,A=0,T=0;c.sort(aM);for(let C=0,N=c.length;C<N;C++){let L=c[C],R=L.color,P=L.intensity,F=L.distance,D=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ji?D=L.shadow.map.texture:D=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=R.r*P,u+=R.g*P,f+=R.b*P;else if(L.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(L.sh.coefficients[U],P);T++}else if(L.isSunLight){let U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let k=L.shadow,V=e.get(L);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[p]=V,n.sunShadowMap[p]=D;let X=k.getViewportCount();for(let z=0;z<X;z++)n.sunShadowMatrix[b+z]=k.getMatrix(z),n.sunShadowCascade[b+z]=k._cascadeData[z];b+=X,p++}n.sun[d]=U,d++}else if(L.isDirectionalLight){let U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let k=L.shadow,V=e.get(L);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.directionalShadow[g]=V,n.directionalShadowMap[g]=D,n.directionalShadowMatrix[g]=L.shadow.matrix,M++}n.directional[g]=U,g++}else if(L.isSpotLight){let U=t.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(R).multiplyScalar(P),U.distance=F,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,n.spot[x]=U;let k=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,k.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[x]=k.matrix,L.castShadow){let V=e.get(L);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=D,E++}x++}else if(L.isRectAreaLight){let U=t.get(L);U.color.copy(R).multiplyScalar(P),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),n.rectArea[y]=U,y++}else if(L.isPointLight){let U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){let k=L.shadow,V=e.get(L);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,V.shadowCameraNear=k.camera.near,V.shadowCameraFar=k.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=D,n.pointShadowMatrix[m]=L.shadow.matrix,S++}n.point[m]=U,m++}else if(L.isHemisphereLight){let U=t.get(L);U.skyColor.copy(L.color).multiplyScalar(P),U.groundColor.copy(L.groundColor).multiplyScalar(P),n.hemi[v]=U,v++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let w=n.hash;(w.sunLength!==d||w.directionalLength!==g||w.pointLength!==m||w.spotLength!==x||w.rectAreaLength!==y||w.hemiLength!==v||w.numSunShadows!==p||w.numDirectionalShadows!==M||w.numPointShadows!==S||w.numSpotShadows!==E||w.numSpotMaps!==_||w.numLightProbes!==T)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=y,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,w.sunLength=d,w.directionalLength=g,w.pointLength=m,w.spotLength=x,w.rectAreaLength=y,w.hemiLength=v,w.numSunShadows=p,w.numDirectionalShadows=M,w.numPointShadows=S,w.numSpotShadows=E,w.numSpotMaps=_,w.numLightProbes=T,n.version=sM++)}function l(c,h){let u=0,f=0,d=0,p=0,b=0,g=0,m=h.matrixWorldInverse;for(let x=0,y=c.length;x<y;x++){let v=c[x];if(v.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(v.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),s.identity(),o.copy(v.matrixWorld),o.premultiply(m),s.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),b++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function jp(i){let t=new lM(i),e=[],n=[],r=[];function o(f){u.camera=f,e.length=0,n.length=0,r.length=0}function s(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:u,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:a,pushLightProbeGrid:l}}function cM(i){let t=new WeakMap;function e(r,o=0){let s=t.get(r),a;return s===void 0?(a=new jp(i),t.set(r,[a])):o>=s.length?(a=new jp(i),s.push(a)):a=s[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var uM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hM=`uniform sampler2D shadow_pass;
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
}`,fM=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],dM=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Qp=new _e,Bs=new Y,Oh=new Y;function pM(i,t,e){let n=new vo,r=new Kt,o=new Kt,s=new De,a=new wo,l=new fl,c={},h=e.maxTextureSize,u={[li]:on,[on]:li,[ie]:ie},f=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:uM,fragmentShader:hM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Vt;p.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new St(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_r;let m=this.type;this.render=function(S,E,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Hd&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_r);let A=i.getRenderTarget(),T=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Ln),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let N=m!==this.type;N&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(R=>R.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,R=S.length;L<R;L++){let P=S[L],F=P.shadow;if(F===void 0){qt("WebGLShadowMap:",P,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let D=F.getFrameExtents();r.multiply(D),o.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/D.x),r.x=o.x*D.x,F.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/D.y),r.y=o.y*D.y,F.mapSize.y=o.y));let U=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=U,F.map===null||N===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===To){if(P.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ye(r.x,r.y,{format:Ji,type:$n,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),F.map.texture.name=P.name+".shadowMap",F.map.depthTexture=new ai(r.x,r.y,qn),F.map.depthTexture.name=P.name+".shadowMapDepth",F.map.depthTexture.format=ii,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=en,F.map.depthTexture.magFilter=en}else P.isPointLight?(F.map=new vc(r.x),F.map.depthTexture=new ul(r.x,Yn)):(F.map=new Ye(r.x,r.y),F.map.depthTexture=new ai(r.x,r.y,Yn)),F.map.depthTexture.name=P.name+".shadowMap",F.map.depthTexture.format=ii,this.type===_r?(F.map.depthTexture.compareFunction=U?mc:pc,F.map.depthTexture.minFilter=Xe,F.map.depthTexture.magFilter=Xe):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=en,F.map.depthTexture.magFilter=en);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==r.x||F.map.height!==r.y)&&F.map.setSize(r.x,r.y);let k=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();P.isPointLight!==!0&&F.updateMatrices(P,_);for(let V=0;V<k;V++){let X=F.getCamera(V);if(P.isPointLight){let z=F.camera,$=F.matrix,j=P.distance||z.far;j!==z.far&&(z.far=j,z.updateProjectionMatrix()),Bs.setFromMatrixPosition(P.matrixWorld),z.position.copy(Bs),Oh.copy(z.position),Oh.add(fM[V]),z.up.copy(dM[V]),z.lookAt(Oh),z.updateMatrixWorld(),$.makeTranslation(-Bs.x,-Bs.y,-Bs.z),Qp.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Qp,z.coordinateSystem,z.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,V),i.clear();else{V===0&&(i.setRenderTarget(F.map),i.clear());let z=F.getViewport(V);s.set(o.x*z.x,o.y*z.y,o.x*z.z,o.y*z.w),C.viewport(s)}n=F.getFrustum(V),v(E,_,X,P,this.type)}F.isPointLightShadow!==!0&&this.type===To&&x(F,_),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(A,T,w)};function x(S,E){let _=t.update(b);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ye(r.x,r.y,{format:Ji,type:$n}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,_,f,b,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,_,d,b,null)}function y(S,E,_,A){let T=null,w=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)T=w;else if(T=_.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let C=T.uuid,N=E.uuid,L=c[C];L===void 0&&(L={},c[C]=L);let R=L[N];R===void 0&&(R=T.clone(),L[N]=R,E.addEventListener("dispose",M)),T=R}if(T.visible=E.visible,T.wireframe=E.wireframe,A===To?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:u[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,_.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let C=i.properties.get(T);C.light=_}return T}function v(S,E,_,A,T){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===To)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let N=t.update(S),L=S.material;if(Array.isArray(L)){let R=N.groups;for(let P=0,F=R.length;P<F;P++){let D=R[P],U=L[D.materialIndex];if(U&&U.visible){let k=y(S,U,A,T);S.onBeforeShadow(i,S,E,_,N,k,D),i.renderBufferDirect(_,null,N,k,S,D),S.onAfterShadow(i,S,E,_,N,k,D)}}}else if(L.visible){let R=y(S,L,A,T);S.onBeforeShadow(i,S,E,_,N,R,null),i.renderBufferDirect(_,null,N,R,S,null),S.onAfterShadow(i,S,E,_,N,R,null)}}let C=S.children;for(let N=0,L=C.length;N<L;N++)v(C[N],E,_,A,T)}function M(S){S.target.removeEventListener("dispose",M);for(let _ in c){let A=c[_],T=S.target.uuid;T in A&&(A[T].dispose(),delete A[T])}}}function mM(i,t){function e(){let K=!1,Mt=new De,ft=null,wt=new De(0,0,0,0);return{setMask:function(Ct){ft!==Ct&&!K&&(i.colorMask(Ct,Ct,Ct,Ct),ft=Ct)},setLocked:function(Ct){K=Ct},setClear:function(Ct,bt,Wt,Bt,Re){Re===!0&&(Ct*=Bt,bt*=Bt,Wt*=Bt),Mt.set(Ct,bt,Wt,Bt),wt.equals(Mt)===!1&&(i.clearColor(Ct,bt,Wt,Bt),wt.copy(Mt))},reset:function(){K=!1,ft=null,wt.set(-1,0,0,0)}}}function n(){let K=!1,Mt=!1,ft=null,wt=null,Ct=null;return{setReversed:function(bt){if(Mt!==bt){let Wt=t.get("EXT_clip_control");bt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Mt=bt;let Bt=Ct;Ct=null,this.setClear(Bt)}},getReversed:function(){return Mt},setTest:function(bt){bt?W(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(bt){ft!==bt&&!K&&(i.depthMask(bt),ft=bt)},setFunc:function(bt){if(Mt&&(bt=wp[bt]),wt!==bt){switch(bt){case Ya:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case $a:i.depthFunc(i.LESS);break;case uo:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case Ka:i.depthFunc(i.GEQUAL);break;case Ja:i.depthFunc(i.GREATER);break;case ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=bt}},setLocked:function(bt){K=bt},setClear:function(bt){Ct!==bt&&(Ct=bt,Mt&&(bt=1-bt),i.clearDepth(bt))},reset:function(){K=!1,ft=null,wt=null,Ct=null,Mt=!1}}}function r(){let K=!1,Mt=null,ft=null,wt=null,Ct=null,bt=null,Wt=null,Bt=null,Re=null;return{setTest:function(xe){K||(xe?W(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(xe){Mt!==xe&&!K&&(i.stencilMask(xe),Mt=xe)},setFunc:function(xe,Un,Qn){(ft!==xe||wt!==Un||Ct!==Qn)&&(i.stencilFunc(xe,Un,Qn),ft=xe,wt=Un,Ct=Qn)},setOp:function(xe,Un,Qn){(bt!==xe||Wt!==Un||Bt!==Qn)&&(i.stencilOp(xe,Un,Qn),bt=xe,Wt=Un,Bt=Qn)},setLocked:function(xe){K=xe},setClear:function(xe){Re!==xe&&(i.clearStencil(xe),Re=xe)},reset:function(){K=!1,Mt=null,ft=null,wt=null,Ct=null,bt=null,Wt=null,Bt=null,Re=null}}}let o=new e,s=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],b=null,g=!1,m=null,x=null,y=null,v=null,M=null,S=null,E=null,_=new J(0,0,0),A=0,T=!1,w=null,C=null,N=null,L=null,R=null,P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,D=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(U)[1]),F=D>=1):U.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),F=D>=2);let k=null,V={},X=i.getParameter(i.SCISSOR_BOX),z=i.getParameter(i.VIEWPORT),$=new De().fromArray(X),j=new De().fromArray(z);function at(K,Mt,ft,wt){let Ct=new Uint8Array(4),bt=i.createTexture();i.bindTexture(K,bt),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<ft;Wt++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(Mt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return bt}let H={};H[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),W(i.DEPTH_TEST),s.setFunc(uo),Rt(!1),ne(ju),W(i.CULL_FACE),dt(Ln);function W(K){h[K]!==!0&&(i.enable(K),h[K]=!0)}function Q(K){h[K]!==!1&&(i.disable(K),h[K]=!1)}function ot(K,Mt){return f[K]!==Mt?(i.bindFramebuffer(K,Mt),f[K]=Mt,K===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Mt),K===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function et(K,Mt){let ft=p,wt=!1;if(K){ft=d.get(Mt),ft===void 0&&(ft=[],d.set(Mt,ft));let Ct=K.textures;if(ft.length!==Ct.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Wt=Ct.length;bt<Wt;bt++)ft[bt]=i.COLOR_ATTACHMENT0+bt;ft.length=Ct.length,wt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,wt=!0);wt&&i.drawBuffers(ft)}function ht(K){return b!==K?(i.useProgram(K),b=K,!0):!1}let gt={[Mr]:i.FUNC_ADD,[Xd]:i.FUNC_SUBTRACT,[Yd]:i.FUNC_REVERSE_SUBTRACT};gt[qd]=i.MIN,gt[$d]=i.MAX;let lt={[Zd]:i.ZERO,[Kd]:i.ONE,[Jd]:i.SRC_COLOR,[eh]:i.SRC_ALPHA,[ip]:i.SRC_ALPHA_SATURATE,[ep]:i.DST_COLOR,[Qd]:i.DST_ALPHA,[jd]:i.ONE_MINUS_SRC_COLOR,[nh]:i.ONE_MINUS_SRC_ALPHA,[np]:i.ONE_MINUS_DST_COLOR,[tp]:i.ONE_MINUS_DST_ALPHA,[rp]:i.CONSTANT_COLOR,[op]:i.ONE_MINUS_CONSTANT_COLOR,[sp]:i.CONSTANT_ALPHA,[ap]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(K,Mt,ft,wt,Ct,bt,Wt,Bt,Re,xe){if(K===Ln){g===!0&&(Q(i.BLEND),g=!1);return}if(g===!1&&(W(i.BLEND),g=!0),K!==Wd){if(K!==m||xe!==T){if((x!==Mr||M!==Mr)&&(i.blendEquation(i.FUNC_ADD),x=Mr,M=Mr),xe)switch(K){case yn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ae:i.blendFunc(i.ONE,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$t("WebGLState: Invalid blending: ",K);break}else switch(K){case yn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ae:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case th:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rs:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",K);break}y=null,v=null,S=null,E=null,_.set(0,0,0),A=0,m=K,T=xe}return}Ct=Ct||Mt,bt=bt||ft,Wt=Wt||wt,(Mt!==x||Ct!==M)&&(i.blendEquationSeparate(gt[Mt],gt[Ct]),x=Mt,M=Ct),(ft!==y||wt!==v||bt!==S||Wt!==E)&&(i.blendFuncSeparate(lt[ft],lt[wt],lt[bt],lt[Wt]),y=ft,v=wt,S=bt,E=Wt),(Bt.equals(_)===!1||Re!==A)&&(i.blendColor(Bt.r,Bt.g,Bt.b,Re),_.copy(Bt),A=Re),m=K,T=!1}function Dt(K,Mt){K.side===ie?Q(i.CULL_FACE):W(i.CULL_FACE);let ft=K.side===on;Mt&&(ft=!ft),Rt(ft),K.blending===yn&&K.transparent===!1?dt(Ln):dt(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),s.setFunc(K.depthFunc),s.setTest(K.depthTest),s.setMask(K.depthWrite),o.setMask(K.colorWrite);let wt=K.stencilWrite;a.setTest(wt),wt&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),de(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(K){w!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),w=K)}function ne(K){K!==Vd?(W(i.CULL_FACE),K!==C&&(K===ju?i.cullFace(i.BACK):K===Gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),C=K}function pe(K){K!==N&&(F&&i.lineWidth(K),N=K)}function de(K,Mt,ft){K?(W(i.POLYGON_OFFSET_FILL),(L!==Mt||R!==ft)&&(L=Mt,R=ft,s.getReversed()&&(Mt=-Mt),i.polygonOffset(Mt,ft))):Q(i.POLYGON_OFFSET_FILL)}function Me(K){K?W(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function Ue(K){K===void 0&&(K=i.TEXTURE0+P-1),k!==K&&(i.activeTexture(K),k=K)}function Z(K,Mt,ft){ft===void 0&&(k===null?ft=i.TEXTURE0+P-1:ft=k);let wt=V[ft];wt===void 0&&(wt={type:void 0,texture:void 0},V[ft]=wt),(wt.type!==K||wt.texture!==Mt)&&(k!==ft&&(i.activeTexture(ft),k=ft),i.bindTexture(K,Mt||H[K]),wt.type=K,wt.texture=Mt)}function Ge(){let K=V[k];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(K){$t("WebGLState:",K)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(K){$t("WebGLState:",K)}}function I(){try{i.texSubImage2D(...arguments)}catch(K){$t("WebGLState:",K)}}function tt(){try{i.texSubImage3D(...arguments)}catch(K){$t("WebGLState:",K)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(K){$t("WebGLState:",K)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(K){$t("WebGLState:",K)}}function xt(){try{i.texStorage2D(...arguments)}catch(K){$t("WebGLState:",K)}}function vt(){try{i.texStorage3D(...arguments)}catch(K){$t("WebGLState:",K)}}function ut(){try{i.texImage2D(...arguments)}catch(K){$t("WebGLState:",K)}}function pt(){try{i.texImage3D(...arguments)}catch(K){$t("WebGLState:",K)}}function yt(K){return u[K]!==void 0?u[K]:i.getParameter(K)}function Gt(K,Mt){u[K]!==Mt&&(i.pixelStorei(K,Mt),u[K]=Mt)}function Tt(K){$.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),$.copy(K))}function _t(K){j.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),j.copy(K))}function Ht(K,Mt){let ft=c.get(Mt);ft===void 0&&(ft=new WeakMap,c.set(Mt,ft));let wt=ft.get(K);wt===void 0&&(wt=i.getUniformBlockIndex(Mt,K.name),ft.set(K,wt))}function Yt(K,Mt){let wt=c.get(Mt).get(K);l.get(Mt)!==wt&&(i.uniformBlockBinding(Mt,wt,K.__bindingPointIndex),l.set(Mt,wt))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},k=null,V={},f={},d=new WeakMap,p=[],b=null,g=!1,m=null,x=null,y=null,v=null,M=null,S=null,E=null,_=new J(0,0,0),A=0,T=!1,w=null,C=null,N=null,L=null,R=null,$.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:W,disable:Q,bindFramebuffer:ot,drawBuffers:et,useProgram:ht,setBlending:dt,setMaterial:Dt,setFlipSided:Rt,setCullFace:ne,setLineWidth:pe,setPolygonOffset:de,setScissorTest:Me,activeTexture:Ue,bindTexture:Z,unbindTexture:Ge,compressedTexImage2D:ge,compressedTexImage3D:G,texImage2D:ut,texImage3D:pt,pixelStorei:Gt,getParameter:yt,updateUBOMapping:Ht,uniformBlockBinding:Yt,texStorage2D:xt,texStorage3D:vt,texSubImage2D:I,texSubImage3D:tt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ct,scissor:Tt,viewport:_t,reset:oe}}function gM(i,t,e,n,r,o,s){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(G,I){return p?new OffscreenCanvas(G,I):fo("canvas")}function g(G,I,tt){let rt=1,ct=ge(G);if((ct.width>tt||ct.height>tt)&&(rt=tt/Math.max(ct.width,ct.height)),rt<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){let xt=Math.floor(rt*ct.width),vt=Math.floor(rt*ct.height);f===void 0&&(f=b(xt,vt));let ut=I?b(xt,vt):f;return ut.width=xt,ut.height=vt,ut.getContext("2d").drawImage(G,0,0,xt,vt),qt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+xt+"x"+vt+")."),ut}else return"data"in G&&qt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),G;return G}function m(G){return G.generateMipmaps}function x(G){i.generateMipmap(G)}function y(G){return G.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?i.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(G,I,tt,rt,ct,xt=!1){if(G!==null){if(i[G]!==void 0)return i[G];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let vt;rt&&(vt=t.get("EXT_texture_norm16"),vt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=I;if(I===i.RED&&(tt===i.FLOAT&&(ut=i.R32F),tt===i.HALF_FLOAT&&(ut=i.R16F),tt===i.UNSIGNED_BYTE&&(ut=i.R8),tt===i.UNSIGNED_SHORT&&vt&&(ut=vt.R16_EXT),tt===i.SHORT&&vt&&(ut=vt.R16_SNORM_EXT)),I===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ut=i.R8UI),tt===i.UNSIGNED_SHORT&&(ut=i.R16UI),tt===i.UNSIGNED_INT&&(ut=i.R32UI),tt===i.BYTE&&(ut=i.R8I),tt===i.SHORT&&(ut=i.R16I),tt===i.INT&&(ut=i.R32I)),I===i.RG&&(tt===i.FLOAT&&(ut=i.RG32F),tt===i.HALF_FLOAT&&(ut=i.RG16F),tt===i.UNSIGNED_BYTE&&(ut=i.RG8),tt===i.UNSIGNED_SHORT&&vt&&(ut=vt.RG16_EXT),tt===i.SHORT&&vt&&(ut=vt.RG16_SNORM_EXT)),I===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ut=i.RG8UI),tt===i.UNSIGNED_SHORT&&(ut=i.RG16UI),tt===i.UNSIGNED_INT&&(ut=i.RG32UI),tt===i.BYTE&&(ut=i.RG8I),tt===i.SHORT&&(ut=i.RG16I),tt===i.INT&&(ut=i.RG32I)),I===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),tt===i.UNSIGNED_INT&&(ut=i.RGB32UI),tt===i.BYTE&&(ut=i.RGB8I),tt===i.SHORT&&(ut=i.RGB16I),tt===i.INT&&(ut=i.RGB32I)),I===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),tt===i.UNSIGNED_INT&&(ut=i.RGBA32UI),tt===i.BYTE&&(ut=i.RGBA8I),tt===i.SHORT&&(ut=i.RGBA16I),tt===i.INT&&(ut=i.RGBA32I)),I===i.RGB&&(tt===i.UNSIGNED_SHORT&&vt&&(ut=vt.RGB16_EXT),tt===i.SHORT&&vt&&(ut=vt.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(ut=i.R11F_G11F_B10F)),I===i.RGBA){let pt=xt?ls:ce.getTransfer(ct);tt===i.FLOAT&&(ut=i.RGBA32F),tt===i.HALF_FLOAT&&(ut=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(ut=pt===ye?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&vt&&(ut=vt.RGBA16_EXT),tt===i.SHORT&&vt&&(ut=vt.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function M(G,I){let tt;return G?I===null||I===Yn||I===Ao?tt=i.DEPTH24_STENCIL8:I===qn?tt=i.DEPTH32F_STENCIL8:I===Eo&&(tt=i.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===Yn||I===Ao?tt=i.DEPTH_COMPONENT24:I===qn?tt=i.DEPTH_COMPONENT32F:I===Eo&&(tt=i.DEPTH_COMPONENT16),tt}function S(G,I){return m(G)===!0||G.isFramebufferTexture&&G.minFilter!==en&&G.minFilter!==Xe?Math.log2(Math.max(I.width,I.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?I.mipmaps.length:1}function E(G){let I=G.target;I.removeEventListener("dispose",E),A(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function _(G){let I=G.target;I.removeEventListener("dispose",_),w(I)}function A(G){let I=n.get(G);if(I.__webglInit===void 0)return;let tt=G.source,rt=d.get(tt);if(rt){let ct=rt[I.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&T(G),Object.keys(rt).length===0&&d.delete(tt)}n.remove(G)}function T(G){let I=n.get(G);i.deleteTexture(I.__webglTexture);let tt=G.source,rt=d.get(tt);delete rt[I.__cacheKey],s.memory.textures--}function w(G){let I=n.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),n.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(I.__webglFramebuffer[rt]))for(let ct=0;ct<I.__webglFramebuffer[rt].length;ct++)i.deleteFramebuffer(I.__webglFramebuffer[rt][ct]);else i.deleteFramebuffer(I.__webglFramebuffer[rt]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[rt])}else{if(Array.isArray(I.__webglFramebuffer))for(let rt=0;rt<I.__webglFramebuffer.length;rt++)i.deleteFramebuffer(I.__webglFramebuffer[rt]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let rt=0;rt<I.__webglColorRenderbuffer.length;rt++)I.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[rt]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let tt=G.textures;for(let rt=0,ct=tt.length;rt<ct;rt++){let xt=n.get(tt[rt]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),s.memory.textures--),n.remove(tt[rt])}n.remove(G)}let C=0;function N(){C=0}function L(){return C}function R(G){C=G}function P(){let G=C;return G>=r.maxTextures&&qt("WebGLTextures: Trying to use "+(G+1)+" texture units while this GPU supports only "+r.maxTextures),C+=1,G}function F(G){let I=[];return I.push(G.wrapS),I.push(G.wrapT),I.push(G.wrapR||0),I.push(G.magFilter),I.push(G.minFilter),I.push(G.anisotropy),I.push(G.internalFormat),I.push(G.format),I.push(G.type),I.push(G.generateMipmaps),I.push(G.premultiplyAlpha),I.push(G.flipY),I.push(G.unpackAlignment),I.push(G.colorSpace),I.join()}function D(G,I){let tt=n.get(G);if(G.isVideoTexture&&Z(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&tt.__version!==G.version){let rt=G.image;if(rt===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(tt,G,I);return}}else G.isExternalTexture&&(tt.__webglTexture=G.sourceTexture?G.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+I)}function U(G,I){let tt=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&tt.__version!==G.version){Q(tt,G,I);return}else G.isExternalTexture&&(tt.__webglTexture=G.sourceTexture?G.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+I)}function k(G,I){let tt=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&tt.__version!==G.version){Q(tt,G,I);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+I)}function V(G,I){let tt=n.get(G);if(G.isCubeDepthTexture!==!0&&G.version>0&&tt.__version!==G.version){ot(tt,G,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+I)}let X={[mr]:i.REPEAT,[Sn]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},z={[en]:i.NEAREST,[up]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Cl]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},$={[pp]:i.NEVER,[vp]:i.ALWAYS,[mp]:i.LESS,[pc]:i.LEQUAL,[gp]:i.EQUAL,[mc]:i.GEQUAL,[bp]:i.GREATER,[xp]:i.NOTEQUAL};function j(G,I){if(I.type===qn&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===Xe||I.magFilter===Cl||I.magFilter===Cs||I.magFilter===Zi||I.minFilter===Xe||I.minFilter===Cl||I.minFilter===Cs||I.minFilter===Zi)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(G,i.TEXTURE_WRAP_S,X[I.wrapS]),i.texParameteri(G,i.TEXTURE_WRAP_T,X[I.wrapT]),(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)&&i.texParameteri(G,i.TEXTURE_WRAP_R,X[I.wrapR]),i.texParameteri(G,i.TEXTURE_MAG_FILTER,z[I.magFilter]),i.texParameteri(G,i.TEXTURE_MIN_FILTER,z[I.minFilter]),I.compareFunction&&(i.texParameteri(G,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(G,i.TEXTURE_COMPARE_FUNC,$[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===en||I.minFilter!==Cs&&I.minFilter!==Zi||I.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(G,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function at(G,I){let tt=!1;G.__webglInit===void 0&&(G.__webglInit=!0,I.addEventListener("dispose",E));let rt=I.source,ct=d.get(rt);ct===void 0&&(ct={},d.set(rt,ct));let xt=F(I);if(xt!==G.__cacheKey){ct[xt]===void 0&&(ct[xt]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,tt=!0),ct[xt].usedTimes++;let vt=ct[G.__cacheKey];vt!==void 0&&(ct[G.__cacheKey].usedTimes--,vt.usedTimes===0&&T(I)),G.__cacheKey=xt,G.__webglTexture=ct[xt].texture}return tt}function H(G,I,tt){return Math.floor(Math.floor(G/tt)/I)}function W(G,I,tt,rt){let xt=G.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,I.width,I.height,tt,rt,I.data);else{xt.sort((Gt,Tt)=>Gt.start-Tt.start);let vt=0;for(let Gt=1;Gt<xt.length;Gt++){let Tt=xt[vt],_t=xt[Gt],Ht=Tt.start+Tt.count,Yt=H(_t.start,I.width,4),oe=H(Tt.start,I.width,4);_t.start<=Ht+1&&Yt===oe&&H(_t.start+_t.count-1,I.width,4)===Yt?Tt.count=Math.max(Tt.count,_t.start+_t.count-Tt.start):(++vt,xt[vt]=_t)}xt.length=vt+1;let ut=e.getParameter(i.UNPACK_ROW_LENGTH),pt=e.getParameter(i.UNPACK_SKIP_PIXELS),yt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,I.width);for(let Gt=0,Tt=xt.length;Gt<Tt;Gt++){let _t=xt[Gt],Ht=Math.floor(_t.start/4),Yt=Math.ceil(_t.count/4),oe=Ht%I.width,K=Math.floor(Ht/I.width),Mt=Yt,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),e.pixelStorei(i.UNPACK_SKIP_ROWS,K),e.texSubImage2D(i.TEXTURE_2D,0,oe,K,Mt,ft,tt,rt,I.data)}G.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ut),e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function Q(G,I,tt){let rt=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(rt=i.TEXTURE_3D);let ct=at(G,I),xt=I.source;e.bindTexture(rt,G.__webglTexture,i.TEXTURE0+tt);let vt=n.get(xt);if(xt.version!==vt.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let ft=ce.getPrimaries(ce.workingColorSpace),wt=I.colorSpace===Ai?null:ce.getPrimaries(I.colorSpace),Ct=I.colorSpace===Ai||ft===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment);let pt=g(I.image,!1,r.maxTextureSize);pt=Ge(I,pt);let yt=o.convert(I.format,I.colorSpace),Gt=o.convert(I.type),Tt=v(I.internalFormat,yt,Gt,I.normalized,I.colorSpace,I.isVideoTexture);j(rt,I);let _t,Ht=I.mipmaps,Yt=I.isVideoTexture!==!0,oe=vt.__version===void 0||ct===!0,K=xt.dataReady,Mt=S(I,pt);if(I.isDepthTexture)Tt=M(I.format===Ki,I.type),oe&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Tt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Tt,pt.width,pt.height,0,yt,Gt,null));else if(I.isDataTexture)if(Ht.length>0){Yt&&oe&&e.texStorage2D(i.TEXTURE_2D,Mt,Tt,Ht[0].width,Ht[0].height);for(let ft=0,wt=Ht.length;ft<wt;ft++)_t=Ht[ft],Yt?K&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,_t.width,_t.height,yt,Gt,_t.data):e.texImage2D(i.TEXTURE_2D,ft,Tt,_t.width,_t.height,0,yt,Gt,_t.data);I.generateMipmaps=!1}else Yt?(oe&&e.texStorage2D(i.TEXTURE_2D,Mt,Tt,pt.width,pt.height),K&&W(I,pt,yt,Gt)):e.texImage2D(i.TEXTURE_2D,0,Tt,pt.width,pt.height,0,yt,Gt,pt.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Yt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Tt,Ht[0].width,Ht[0].height,pt.depth);for(let ft=0,wt=Ht.length;ft<wt;ft++)if(_t=Ht[ft],I.format!==Fn)if(yt!==null)if(Yt){if(K)if(I.layerUpdates.size>0){let Ct=Sh(_t.width,_t.height,I.format,I.type);for(let bt of I.layerUpdates){let Wt=_t.data.subarray(bt*Ct/_t.data.BYTES_PER_ELEMENT,(bt+1)*Ct/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,bt,_t.width,_t.height,1,yt,Wt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,_t.width,_t.height,pt.depth,yt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Tt,_t.width,_t.height,pt.depth,0,_t.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?K&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,_t.width,_t.height,pt.depth,yt,Gt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Tt,_t.width,_t.height,pt.depth,0,yt,Gt,_t.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{Yt&&oe&&e.texStorage2D(i.TEXTURE_2D,Mt,Tt,Ht[0].width,Ht[0].height);for(let ft=0,wt=Ht.length;ft<wt;ft++)_t=Ht[ft],I.format!==Fn?yt!==null?Yt?K&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,_t.width,_t.height,yt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Tt,_t.width,_t.height,0,_t.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?K&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,_t.width,_t.height,yt,Gt,_t.data):e.texImage2D(i.TEXTURE_2D,ft,Tt,_t.width,_t.height,0,yt,Gt,_t.data)}else if(I.isDataArrayTexture)if(Yt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Tt,pt.width,pt.height,pt.depth),K)if(I.layerUpdates.size>0){let ft=Sh(pt.width,pt.height,I.format,I.type);for(let wt of I.layerUpdates){let Ct=pt.data.subarray(wt*ft/pt.data.BYTES_PER_ELEMENT,(wt+1)*ft/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,pt.width,pt.height,1,yt,Gt,Ct)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,yt,Gt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,pt.width,pt.height,pt.depth,0,yt,Gt,pt.data);else if(I.isData3DTexture)Yt?(oe&&e.texStorage3D(i.TEXTURE_3D,Mt,Tt,pt.width,pt.height,pt.depth),K&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,yt,Gt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,pt.width,pt.height,pt.depth,0,yt,Gt,pt.data);else if(I.isFramebufferTexture){if(oe)if(Yt)e.texStorage2D(i.TEXTURE_2D,Mt,Tt,pt.width,pt.height);else{let ft=pt.width,wt=pt.height;for(let Ct=0;Ct<Mt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,Tt,ft,wt,0,yt,Gt,null),ft>>=1,wt>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in i){let ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),pt.parentNode!==ft){ft.appendChild(pt),u.add(I),ft.onpaint=wt=>{let Ct=wt.changedElements;for(let bt of u)Ct.includes(bt.image)&&(bt.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,pt);else{let Ct=i.RGBA,bt=i.RGBA,Wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ct,bt,Wt,pt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(Yt&&oe){let ft=ge(Ht[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Tt,ft.width,ft.height)}for(let ft=0,wt=Ht.length;ft<wt;ft++)_t=Ht[ft],Yt?K&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,yt,Gt,_t):e.texImage2D(i.TEXTURE_2D,ft,Tt,yt,Gt,_t);I.generateMipmaps=!1}else if(Yt){if(oe){let ft=ge(pt);e.texStorage2D(i.TEXTURE_2D,Mt,Tt,ft.width,ft.height)}K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Gt,pt)}else e.texImage2D(i.TEXTURE_2D,0,Tt,yt,Gt,pt);m(I)&&x(rt),vt.__version=xt.version,I.onUpdate&&I.onUpdate(I)}G.__version=I.version}function ot(G,I,tt){if(I.image.length!==6)return;let rt=at(G,I),ct=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+tt);let xt=n.get(ct);if(ct.version!==xt.__version||rt===!0){e.activeTexture(i.TEXTURE0+tt);let vt=ce.getPrimaries(ce.workingColorSpace),ut=I.colorSpace===Ai?null:ce.getPrimaries(I.colorSpace),pt=I.colorSpace===Ai||vt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let yt=I.isCompressedTexture||I.image[0].isCompressedTexture,Gt=I.image[0]&&I.image[0].isDataTexture,Tt=[];for(let bt=0;bt<6;bt++)!yt&&!Gt?Tt[bt]=g(I.image[bt],!0,r.maxCubemapSize):Tt[bt]=Gt?I.image[bt].image:I.image[bt],Tt[bt]=Ge(I,Tt[bt]);let _t=Tt[0],Ht=o.convert(I.format,I.colorSpace),Yt=o.convert(I.type),oe=v(I.internalFormat,Ht,Yt,I.normalized,I.colorSpace),K=I.isVideoTexture!==!0,Mt=xt.__version===void 0||rt===!0,ft=ct.dataReady,wt=S(I,_t);j(i.TEXTURE_CUBE_MAP,I);let Ct;if(yt){K&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,oe,_t.width,_t.height);for(let bt=0;bt<6;bt++){Ct=Tt[bt].mipmaps;for(let Wt=0;Wt<Ct.length;Wt++){let Bt=Ct[Wt];I.format!==Fn?Ht!==null?K?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt,0,0,Bt.width,Bt.height,Ht,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt,oe,Bt.width,Bt.height,0,Bt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt,0,0,Bt.width,Bt.height,Ht,Yt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt,oe,Bt.width,Bt.height,0,Ht,Yt,Bt.data)}}}else{if(Ct=I.mipmaps,K&&Mt){Ct.length>0&&wt++;let bt=ge(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,oe,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Gt){K?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Tt[bt].width,Tt[bt].height,Ht,Yt,Tt[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,oe,Tt[bt].width,Tt[bt].height,0,Ht,Yt,Tt[bt].data);for(let Wt=0;Wt<Ct.length;Wt++){let Re=Ct[Wt].image[bt].image;K?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt+1,0,0,Re.width,Re.height,Ht,Yt,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt+1,oe,Re.width,Re.height,0,Ht,Yt,Re.data)}}else{K?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Ht,Yt,Tt[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,oe,Ht,Yt,Tt[bt]);for(let Wt=0;Wt<Ct.length;Wt++){let Bt=Ct[Wt];K?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt+1,0,0,Ht,Yt,Bt.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt+1,oe,Ht,Yt,Bt.image[bt])}}}m(I)&&x(i.TEXTURE_CUBE_MAP),xt.__version=ct.version,I.onUpdate&&I.onUpdate(I)}G.__version=I.version}function et(G,I,tt,rt,ct,xt){let vt=o.convert(tt.format,tt.colorSpace),ut=o.convert(tt.type),pt=v(tt.internalFormat,vt,ut,tt.normalized,tt.colorSpace),yt=n.get(I),Gt=n.get(tt);if(Gt.__renderTarget=I,!yt.__hasExternalTextures){let Tt=Math.max(1,I.width>>xt),_t=Math.max(1,I.height>>xt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,xt,pt,Tt,_t,I.depth,0,vt,ut,null):e.texImage2D(ct,xt,pt,Tt,_t,0,vt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,G),Ue(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,ct,Gt.__webglTexture,0,Me(I)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,ct,Gt.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(G,I,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,G),I.depthBuffer){let rt=I.depthTexture,ct=rt&&rt.isDepthTexture?rt.type:null,xt=M(I.stencilBuffer,ct),vt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ue(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(I),xt,I.width,I.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(I),xt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,xt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,G)}else{let rt=I.textures;for(let ct=0;ct<rt.length;ct++){let xt=rt[ct],vt=o.convert(xt.format,xt.colorSpace),ut=o.convert(xt.type),pt=v(xt.internalFormat,vt,ut,xt.normalized,xt.colorSpace);Ue(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(I),pt,I.width,I.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(I),pt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,pt,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(G,I,tt){let rt=I.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,G),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(I.depthTexture);if(ct.__renderTarget=I,(!ct.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),rt){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,I.depthTexture.addEventListener("dispose",E)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),j(i.TEXTURE_CUBE_MAP,I.depthTexture);let yt=o.convert(I.depthTexture.format),Gt=o.convert(I.depthTexture.type),Tt;I.depthTexture.format===ii?Tt=i.DEPTH_COMPONENT24:I.depthTexture.format===Ki&&(Tt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Tt,I.width,I.height,0,yt,Gt,null)}}else D(I.depthTexture,0);let xt=ct.__webglTexture,vt=Me(I),ut=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,pt=I.depthTexture.format===Ki?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(I.depthTexture.format===ii)Ue(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ut,xt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,pt,ut,xt,0);else if(I.depthTexture.format===Ki)Ue(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ut,xt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,pt,ut,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(G){let I=n.get(G),tt=G.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==G.depthTexture){let rt=G.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),rt){let ct=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,rt.removeEventListener("dispose",ct)};rt.addEventListener("dispose",ct),I.__depthDisposeCallback=ct}I.__boundDepthTexture=rt}if(G.depthTexture&&!I.__autoAllocateDepthBuffer)if(tt)for(let rt=0;rt<6;rt++)gt(I.__webglFramebuffer[rt],G,rt);else{let rt=G.texture.mipmaps;rt&&rt.length>0?gt(I.__webglFramebuffer[0],G,0):gt(I.__webglFramebuffer,G,0)}else if(tt){I.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[rt]),I.__webglDepthbuffer[rt]===void 0)I.__webglDepthbuffer[rt]=i.createRenderbuffer(),ht(I.__webglDepthbuffer[rt],G,!1);else{let ct=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=I.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,xt)}}else{let rt=G.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),ht(I.__webglDepthbuffer,G,!1);else{let ct=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,xt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(G,I,tt){let rt=n.get(G);I!==void 0&&et(rt.__webglFramebuffer,G,G.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&lt(G)}function Dt(G){let I=G.texture,tt=n.get(G),rt=n.get(I);G.addEventListener("dispose",_);let ct=G.textures,xt=G.isWebGLCubeRenderTarget===!0,vt=ct.length>1;if(vt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=I.version,s.memory.textures++),xt){tt.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(I.mipmaps&&I.mipmaps.length>0){tt.__webglFramebuffer[ut]=[];for(let pt=0;pt<I.mipmaps.length;pt++)tt.__webglFramebuffer[ut][pt]=i.createFramebuffer()}else tt.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){tt.__webglFramebuffer=[];for(let ut=0;ut<I.mipmaps.length;ut++)tt.__webglFramebuffer[ut]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(vt)for(let ut=0,pt=ct.length;ut<pt;ut++){let yt=n.get(ct[ut]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),s.memory.textures++)}if(G.samples>0&&Ue(G)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let ut=0;ut<ct.length;ut++){let pt=ct[ut];tt.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[ut]);let yt=o.convert(pt.format,pt.colorSpace),Gt=o.convert(pt.type),Tt=v(pt.internalFormat,yt,Gt,pt.normalized,pt.colorSpace,G.isXRRenderTarget===!0),_t=Me(G);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,Tt,G.width,G.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,tt.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),G.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(tt.__webglDepthRenderbuffer,G,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),j(i.TEXTURE_CUBE_MAP,I);for(let ut=0;ut<6;ut++)if(I.mipmaps&&I.mipmaps.length>0)for(let pt=0;pt<I.mipmaps.length;pt++)et(tt.__webglFramebuffer[ut][pt],G,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,pt);else et(tt.__webglFramebuffer[ut],G,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(I)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ut=0,pt=ct.length;ut<pt;ut++){let yt=ct[ut],Gt=n.get(yt),Tt=i.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Tt=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,Gt.__webglTexture),j(Tt,yt),et(tt.__webglFramebuffer,G,yt,i.COLOR_ATTACHMENT0+ut,Tt,0),m(yt)&&x(Tt)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(ut=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,rt.__webglTexture),j(ut,I),I.mipmaps&&I.mipmaps.length>0)for(let pt=0;pt<I.mipmaps.length;pt++)et(tt.__webglFramebuffer[pt],G,I,i.COLOR_ATTACHMENT0,ut,pt);else et(tt.__webglFramebuffer,G,I,i.COLOR_ATTACHMENT0,ut,0);m(I)&&x(ut),e.unbindTexture()}G.depthBuffer&&lt(G)}function Rt(G){let I=G.textures;for(let tt=0,rt=I.length;tt<rt;tt++){let ct=I[tt];if(m(ct)){let xt=y(G),vt=n.get(ct).__webglTexture;e.bindTexture(xt,vt),x(xt),e.unbindTexture()}}}let ne=[],pe=[];function de(G){if(G.samples>0){if(Ue(G)===!1){let I=G.textures,tt=G.width,rt=G.height,ct=i.COLOR_BUFFER_BIT,xt=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(G),ut=I.length>1;if(ut)for(let yt=0;yt<I.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);let pt=G.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let yt=0;yt<I.length;yt++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[yt]);let Gt=n.get(I[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,tt,rt,0,0,tt,rt,ct,i.NEAREST),l===!0&&(ne.length=0,pe.length=0,ne.push(i.COLOR_ATTACHMENT0+yt),G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&(ne.push(xt),pe.push(xt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let yt=0;yt<I.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[yt]);let Gt=n.get(I[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&l){let I=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function Me(G){return Math.min(r.maxSamples,G.samples)}function Ue(G){let I=n.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Z(G){let I=s.render.frame;h.get(G)!==I&&(h.set(G,I),G.update())}function Ge(G,I){let tt=G.colorSpace,rt=G.format,ct=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||tt!==as&&tt!==Ai&&(ce.getTransfer(tt)===ye?(rt!==Fn||ct!==_n)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",tt)),I}function ge(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(c.width=G.naturalWidth||G.width,c.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(c.width=G.displayWidth,c.height=G.displayHeight):(c.width=G.width,c.height=G.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=N,this.getTextureUnits=L,this.setTextureUnits=R,this.setTexture2D=D,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=V,this.rebindTextures=dt,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function bM(i,t){function e(n,r=Ai){let o,s=ce.getTransfer(r);if(n===_n)return i.UNSIGNED_BYTE;if(n===Ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ph)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hh)return i.BYTE;if(n===fh)return i.SHORT;if(n===Eo)return i.UNSIGNED_SHORT;if(n===Il)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===$n)return i.HALF_FLOAT;if(n===mh)return i.ALPHA;if(n===gh)return i.RGB;if(n===Fn)return i.RGBA;if(n===ii)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===bh)return i.RED;if(n===Dl)return i.RED_INTEGER;if(n===Ji)return i.RG;if(n===Ol)return i.RG_INTEGER;if(n===Nl)return i.RGBA_INTEGER;if(n===Is||n===Ls||n===Fs||n===Ds)if(s===ye)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Is)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Is)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ul||n===Bl||n===kl||n===zl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ul)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===Os||n===Yl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Vl||n===Gl)return s===ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Hl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wl)return o.COMPRESSED_R11_EAC;if(n===Xl)return o.COMPRESSED_SIGNED_R11_EAC;if(n===Os)return o.COMPRESSED_RG11_EAC;if(n===Yl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ql||n===$l||n===Zl||n===Kl||n===Jl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===rc||n===oc||n===sc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ql)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rc)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oc)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sc)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ac||n===lc||n===cc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ac)return s===ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uc||n===hc||n===Ns||n===fc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===uc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ns)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ao?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var xM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vM=`
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

}`,Hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new gs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new pn({vertexShader:xM,fragmentShader:vM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wh=class extends ri{constructor(t,e){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,b=typeof XRWebGLBinding<"u",g=new Hh,m={},x=e.getContextAttributes(),y=null,v=null,M=[],S=[],E=new Kt,_=null,A=null,T=new tn;T.viewport=new De;let w=new tn;w.viewport=new De;let C=[T,w],N=new Tl,L=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let W=M[H];return W===void 0&&(W=new bo,M[H]=W),W.getTargetRaySpace()},this.getControllerGrip=function(H){let W=M[H];return W===void 0&&(W=new bo,M[H]=W),W.getGripSpace()},this.getHand=function(H){let W=M[H];return W===void 0&&(W=new bo,M[H]=W),W.getHandSpace()};function P(H){let W=S.indexOf(H.inputSource);if(W===-1)return;let Q=M[W];Q!==void 0&&(Q.update(H.inputSource,H.frame,c||s),Q.dispatchEvent({type:H.type,data:H.inputSource}))}function F(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",D);for(let H=0;H<M.length;H++){let W=S[H];W!==null&&(S[H]=null,M[H].disconnect(W))}L=null,R=null,g.reset();for(let H in m)delete m[H];if(t.setRenderTarget(y),d=null,f=null,u=null,r=null,v=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(E.width,E.height,!1),A!==null){let H=A.camera;H.fov=A.fov,H.zoom=A.zoom,H.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",F),r.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(E),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,ot=null,et=null;x.depth&&(et=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=x.stencil?Ki:ii,ot=x.stencil?Ao:Yn);let ht={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:o};u=this.getBinding(),f=u.createProjectionLayer(ht),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ye(f.textureWidth,f.textureHeight,{format:Fn,type:_n,depthTexture:new ai(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Q={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ye(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),at.setContext(r),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function D(H){for(let W=0;W<H.removed.length;W++){let Q=H.removed[W],ot=S.indexOf(Q);ot>=0&&(S[ot]=null,M[ot].disconnect(Q))}for(let W=0;W<H.added.length;W++){let Q=H.added[W],ot=S.indexOf(Q);if(ot===-1){for(let ht=0;ht<M.length;ht++)if(ht>=S.length){S.push(Q),ot=ht;break}else if(S[ht]===null){S[ht]=Q,ot=ht;break}if(ot===-1)break}let et=M[ot];et&&et.connect(Q)}}let U=new Y,k=new Y;function V(H,W,Q){U.setFromMatrixPosition(W.matrixWorld),k.setFromMatrixPosition(Q.matrixWorld);let ot=U.distanceTo(k),et=W.projectionMatrix.elements,ht=Q.projectionMatrix.elements,gt=et[14]/(et[10]-1),lt=et[14]/(et[10]+1),dt=(et[9]+1)/et[5],Dt=(et[9]-1)/et[5],Rt=(et[8]-1)/et[0],ne=(ht[8]+1)/ht[0],pe=gt*Rt,de=gt*ne,Me=ot/(-Rt+ne),Ue=Me*-Rt;if(W.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ue),H.translateZ(Me),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),et[10]===-1)H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let Z=gt+Me,Ge=lt+Me,ge=pe-Ue,G=de+(ot-Ue),I=dt*lt/Ge*Z,tt=Dt*lt/Ge*Z;H.projectionMatrix.makePerspective(ge,G,I,tt,Z,Ge),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function X(H,W){W===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(W.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let W=H.near,Q=H.far;g.texture!==null&&(g.depthNear>0&&(W=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),N.near=w.near=T.near=W,N.far=w.far=T.far=Q,(L!==N.near||R!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),L=N.near,R=N.far),N.layers.mask=H.layers.mask|6,T.layers.mask=N.layers.mask&-5,w.layers.mask=N.layers.mask&-3;let ot=H.parent,et=N.cameras;X(N,ot);for(let ht=0;ht<et.length;ht++)X(et[ht],ot);et.length===2?V(N,T,w):N.projectionMatrix.copy(T.projectionMatrix),A===null&&H.isPerspectiveCamera&&(A={camera:H,fov:H.fov,zoom:H.zoom}),z(H,N,ot)};function z(H,W,Q){Q===null?H.matrix.copy(W.matrixWorld):(H.matrix.copy(Q.matrixWorld),H.matrix.invert(),H.matrix.multiply(W.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=el*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(H){return m[H]};let $=null;function j(H,W){if(h=W.getViewerPose(c||s),p=W,h!==null){let Q=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let ot=!1;Q.length!==N.cameras.length&&(N.cameras.length=0,ot=!0);for(let lt=0;lt<Q.length;lt++){let dt=Q[lt],Dt=null;if(d!==null)Dt=d.getViewport(dt);else{let ne=u.getViewSubImage(f,dt);Dt=ne.viewport,lt===0&&(t.setRenderTargetTextures(v,ne.colorTexture,ne.depthStencilTexture),t.setRenderTarget(v))}let Rt=C[lt];Rt===void 0&&(Rt=new tn,Rt.layers.enable(lt),Rt.viewport=new De,C[lt]=Rt),Rt.matrix.fromArray(dt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(dt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),lt===0&&(N.matrix.copy(Rt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ot===!0&&N.cameras.push(Rt)}let et=r.enabledFeatures;if(et&&et.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let lt=u.getDepthInformation(Q[0]);lt&&lt.isValid&&lt.texture&&g.init(lt,r.renderState)}if(et&&et.includes("camera-access")&&b){t.state.unbindTexture(),u=n.getBinding();for(let lt=0;lt<Q.length;lt++){let dt=Q[lt].camera;if(dt){let Dt=m[dt];Dt||(Dt=new gs,m[dt]=Dt);let Rt=u.getCameraImage(dt);Dt.sourceTexture=Rt}}}}for(let Q=0;Q<M.length;Q++){let ot=S[Q],et=M[Q];ot!==null&&et!==void 0&&et.update(ot,W,c||s)}$&&$(H,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),p=null}let at=new tm;at.setAnimationLoop(j),this.setAnimationLoop=function(H){$=H},this.dispose=function(){}}},yM=new _e,sm=new te;sm.set(-1,0,0,0,1,0,0,0,1);function _M(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,_h(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,x,y,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(g,m):m.isMeshLambertMaterial?(o(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(g,m),u(g,m)):m.isMeshPhongMaterial?(o(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),b(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(s(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===on&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===on&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(yM.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(sm),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function s(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function MM(i,t,e,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let S=M.program;n.uniformBlockBinding(v,S)}function c(v,M){let S=r[v.id];S===void 0&&(g(v),S=h(v),r[v.id]=S,v.addEventListener("dispose",x));let E=M.program;n.updateUBOMapping(v,E);let _=t.render.frame;o[v.id]!==_&&(f(v),o[v.id]=_)}function h(v){let M=u();v.__bindingPointIndex=M;let S=i.createBuffer(),E=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,E,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function u(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=r[v.id],S=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,A=S.length;_<A;_++){let T=S[_];if(Array.isArray(T))for(let w=0,C=T.length;w<C;w++)d(T[w],_,w,E);else d(T,_,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,S,E){if(b(v,M,S,E)===!0){let _=v.__offset,A=v.value;if(Array.isArray(A)){let T=0;for(let w=0;w<A.length;w++){let C=A[w],N=m(C);p(C,v.__data,T),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(T+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function p(v,M,S){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,S)}function b(v,M,S,E){let _=v.value,A=M+"_"+S;if(E[A]===void 0)return typeof _=="number"||typeof _=="boolean"?E[A]=_:ArrayBuffer.isView(_)?E[A]=_.slice():E[A]=_.clone(),!0;{let T=E[A];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return E[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function g(v){let M=v.uniforms,S=0,E=16;for(let A=0,T=M.length;A<T;A++){let w=Array.isArray(M[A])?M[A]:[M[A]];for(let C=0,N=w.length;C<N;C++){let L=w[C],R=Array.isArray(L.value)?L.value:[L.value];for(let P=0,F=R.length;P<F;P++){let D=R[P],U=m(D),k=S%E,V=k%U.boundary,X=k+V;S+=V,X!==0&&E-X<U.storage&&(S+=E-X),L.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=U.storage}}}let _=S%E;return _>0&&(S+=E-_),v.__size=S,v.__cache={},this}function m(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",v),M}function x(v){let M=v.target;M.removeEventListener("dispose",x);let S=s.indexOf(M.__bindingPointIndex);s.splice(S,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function y(){for(let v in r)i.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:c,dispose:y}}var wM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;function SM(){return ci===null&&(ci=new sl(wM,16,16,Ji,$n),ci.name="DFG_LUT",ci.minFilter=Xe,ci.magFilter=Xe,ci.wrapS=Sn,ci.wrapT=Sn,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var Er=class{constructor(t={}){let{canvas:e=yp(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=_n}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;let b=d,g=new Set([Nl,Ol,Dl]),m=new Set([_n,Yn,Eo,Ao,Ll,Fl]),x=new Uint32Array(4),y=new Int32Array(4),v=new Y,M=null,S=null,E=[],_=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,w=!1,C=null,N=null,L=null,R=null;this._outputColorSpace=Ce;let P=0,F=0,D=null,U=-1,k=null,V=new De,X=new De,z=null,$=new J(0),j=0,at=e.width,H=e.height,W=1,Q=null,ot=null,et=new De(0,0,at,H),ht=new De(0,0,at,H),gt=!1,lt=new vo,dt=!1,Dt=!1,Rt=new _e,ne=new Y,pe=new De,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ue(){return D===null?W:1}let Z=n;function Ge(B,q){return e.getContext(B,q)}let ge,G,I,tt,rt,ct,xt,vt,ut,pt,yt,Gt,Tt,_t,Ht,Yt,oe,K,Mt,ft,wt,Ct,bt;try{let B={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Un,!1),Z===null){let q="webgl2";if(Z=Ge(q,B),Z===null)throw Ge(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(B){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),$t("WebGLRenderer: "+B.message),B}function Wt(){ge=new I1(Z),ge.init(),wt=new bM(Z,ge),G=new _1(Z,ge,t,wt),I=new mM(Z,ge),G.reversedDepthBuffer&&f&&I.buffers.depth.setReversed(!0),N=Z.createFramebuffer(),L=Z.createFramebuffer(),R=Z.createFramebuffer(),tt=new D1(Z),rt=new eM,ct=new gM(Z,ge,I,rt,G,wt,tt),xt=new C1(T),vt=new Nx(Z),Ct=new v1(Z,vt),ut=new L1(Z,vt,tt,Ct),pt=new N1(Z,ut,vt,Ct,tt),K=new O1(Z,G,ct),Ht=new M1(rt),yt=new tM(T,xt,ge,G,Ct,Ht),Gt=new _M(T,rt),Tt=new iM,_t=new cM(ge),oe=new x1(T,xt,I,pt,p,l),Yt=new pM(T,pt,G),bt=new MM(Z,tt,G,I),Mt=new y1(Z,ge,tt),ft=new F1(Z,ge,tt),tt.programs=yt.programs,T.capabilities=G,T.extensions=ge,T.properties=rt,T.renderLists=Tt,T.shadowMap=Yt,T.state=I,T.info=tt}b!==_n&&(A=new B1(b,e.width,e.height,a,r,o));let Bt=new Wh(T,Z);this.xr=Bt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let B=ge.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){let B=ge.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(B){B!==void 0&&(W=B,this.setSize(at,H,!1))},this.getSize=function(B){return B.set(at,H)},this.setSize=function(B,q,st=!0){if(Bt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}at=B,H=q,e.width=Math.floor(B*W),e.height=Math.floor(q*W),st===!0&&(e.style.width=B+"px",e.style.height=q+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,B,q)},this.getDrawingBufferSize=function(B){return B.set(at*W,H*W).floor()},this.setDrawingBufferSize=function(B,q,st){at=B,H=q,W=st,e.width=Math.floor(B*st),e.height=Math.floor(q*st),this.setViewport(0,0,B,q)},this.setEffects=function(B){if(b===_n){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let q=0;q<B.length;q++)if(B[q].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(V)},this.getViewport=function(B){return B.copy(et)},this.setViewport=function(B,q,st,nt){B.isVector4?et.set(B.x,B.y,B.z,B.w):et.set(B,q,st,nt),I.viewport(V.copy(et).multiplyScalar(W).round())},this.getScissor=function(B){return B.copy(ht)},this.setScissor=function(B,q,st,nt){B.isVector4?ht.set(B.x,B.y,B.z,B.w):ht.set(B,q,st,nt),I.scissor(X.copy(ht).multiplyScalar(W).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(B){I.setScissorTest(gt=B)},this.setOpaqueSort=function(B){Q=B},this.setTransparentSort=function(B){ot=B},this.getClearColor=function(B){return B.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(B=!0,q=!0,st=!0){let nt=0;if(B){let it=!1;if(D!==null){let Pt=D.texture.format;it=g.has(Pt)}if(it){let Pt=D.texture.type,Ft=m.has(Pt),At=oe.getClearColor(),Nt=oe.getClearAlpha(),zt=At.r,se=At.g,le=At.b;Ft?(x[0]=zt,x[1]=se,x[2]=le,x[3]=Nt,Z.clearBufferuiv(Z.COLOR,0,x)):(y[0]=zt,y[1]=se,y[2]=le,y[3]=Nt,Z.clearBufferiv(Z.COLOR,0,y))}else nt|=Z.COLOR_BUFFER_BIT}q&&(nt|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(nt|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&Z.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),C=B},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),oe.dispose(),Tt.dispose(),_t.dispose(),rt.dispose(),xt.dispose(),pt.dispose(),Ct.dispose(),bt.dispose(),yt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Jf),Bt.removeEventListener("sessionend",jf),cr.stop()};function Re(B){B.preventDefault(),cs("WebGLRenderer: Context Lost."),w=!0}function xe(){cs("WebGLRenderer: Context Restored."),w=!1;let B=tt.autoReset,q=Yt.enabled,st=Yt.autoUpdate,nt=Yt.needsUpdate,it=Yt.type;Wt(),tt.autoReset=B,Yt.enabled=q,Yt.autoUpdate=st,Yt.needsUpdate=nt,Yt.type=it}function Un(B){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function Qn(B){let q=B.target;q.removeEventListener("dispose",Qn),Cb(q)}function Cb(B){Ib(B),rt.remove(B)}function Ib(B){let q=rt.get(B).programs;q!==void 0&&(q.forEach(function(st){yt.releaseProgram(st)}),B.isShaderMaterial&&yt.releaseShaderCache(B))}this.renderBufferDirect=function(B,q,st,nt,it,Pt){q===null&&(q=de);let Ft=it.isMesh&&it.matrixWorld.determinantAffine()<0,At=Db(B,q,st,nt,it);I.setMaterial(nt,Ft);let Nt=st.index,zt=1;if(nt.wireframe===!0){if(Nt=ut.getWireframeAttribute(st),Nt===void 0)return;zt=2}let se=st.drawRange,le=st.attributes.position,Ut=se.start*zt,ve=(se.start+se.count)*zt;Pt!==null&&(Ut=Math.max(Ut,Pt.start*zt),ve=Math.min(ve,(Pt.start+Pt.count)*zt)),Nt!==null?(Ut=Math.max(Ut,0),ve=Math.min(ve,Nt.count)):le!=null&&(Ut=Math.max(Ut,0),ve=Math.min(ve,le.count));let He=ve-Ut;if(He<0||He===1/0)return;Ct.setup(it,nt,At,st,Nt);let Le,Ee=Mt;if(Nt!==null&&(Le=vt.get(Nt),Ee=ft,Ee.setIndex(Le)),it.isMesh)nt.wireframe===!0?(I.setLineWidth(nt.wireframeLinewidth*Ue()),Ee.setMode(Z.LINES)):Ee.setMode(Z.TRIANGLES);else if(it.isLine){let cn=nt.linewidth;cn===void 0&&(cn=1),I.setLineWidth(cn*Ue()),it.isLineSegments?Ee.setMode(Z.LINES):it.isLineLoop?Ee.setMode(Z.LINE_LOOP):Ee.setMode(Z.LINE_STRIP)}else it.isPoints?Ee.setMode(Z.POINTS):it.isSprite&&Ee.setMode(Z.TRIANGLES);if(it.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))Ee.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{let cn=it._multiDrawStarts,Lt=it._multiDrawCounts,bn=it._multiDrawCount,me=Nt?vt.get(Nt).bytesPerElement:1,Cn=rt.get(nt).currentProgram.getUniforms();for(let ti=0;ti<bn;ti++)Cn.setValue(Z,"_gl_DrawID",ti),Ee.render(cn[ti]/me,Lt[ti])}else if(it.isInstancedMesh)Ee.renderInstances(Ut,He,it.count);else if(st.isInstancedBufferGeometry){let cn=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Lt=Math.min(st.instanceCount,cn);Ee.renderInstances(Ut,He,Lt)}else Ee.render(Ut,He)};function Kf(B,q,st,nt){C!==null&&B.isNodeMaterial&&C.setObject(nt,B),dt===!0&&Ht.setState(B,st,!1),B.transparent===!0&&B.side===ie&&B.forceSinglePass===!1?(B.side=on,B.needsUpdate=!0,pa(B,q,nt),B.side=li,B.needsUpdate=!0,pa(B,q,nt),B.side=ie):pa(B,q,nt)}this.compile=function(B,q,st=null){st===null&&(st=B),C!==null&&C.renderStart(B,q,st),S=_t.get(st),S.init(q),_.push(S),st.traverseVisible(function(it){it.isLight&&it.layers.test(q.layers)&&(S.pushLight(it),it.castShadow&&S.pushShadow(it))}),B!==st&&B.traverseVisible(function(it){it.isLight&&it.layers.test(q.layers)&&(S.pushLight(it),it.castShadow&&S.pushShadow(it))}),S.setupLights(),C!==null&&C.updateLights(S.state.lightsArray),Dt=this.localClippingEnabled,dt=Ht.init(this.clippingPlanes,Dt),dt===!0&&Ht.setGlobalState(this.clippingPlanes,q),C!==null&&Yt.render(S.state.shadowsArray,st,q);let nt=new Set;return B.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;let Pt=it.material;if(Pt)if(Array.isArray(Pt))for(let Ft=0;Ft<Pt.length;Ft++){let At=Pt[Ft];Kf(At,st,q,it),nt.add(At)}else Kf(Pt,st,q,it),nt.add(Pt)}),S=_.pop(),C!==null&&C.renderEnd(),nt},this.compileAsync=function(B,q,st=null){let nt=this.compile(B,q,st);return new Promise(it=>{function Pt(){if(nt.forEach(function(Ft){let Nt=rt.get(Ft).currentProgram;(Nt===void 0||Nt.isReady())&&nt.delete(Ft)}),nt.size===0){it(B);return}setTimeout(Pt,10)}ge.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let du=null;function Lb(B){du&&du(B)}function Jf(){cr.stop()}function jf(){cr.start()}let cr=new tm;cr.setAnimationLoop(Lb),typeof self<"u"&&cr.setContext(self),this.setAnimationLoop=function(B){du=B,Bt.setAnimationLoop(B),B===null?cr.stop():cr.start()},Bt.addEventListener("sessionstart",Jf),Bt.addEventListener("sessionend",jf),this.render=function(B,q){if(q!==void 0&&q.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;C!==null&&C.renderStart(B,q);let st=Bt.enabled===!0&&Bt.isPresenting===!0,nt=A!==null&&(D===null||st)&&A.begin(T,D);if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(q),q=Bt.getCamera()),B.isScene===!0&&B.onBeforeRender(T,B,q,D),S=_t.get(B,_.length),S.init(q),S.state.textureUnits=ct.getTextureUnits(),_.push(S),Rt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),lt.setFromProjectionMatrix(Rt,Gn,q.reversedDepth),Dt=this.localClippingEnabled,dt=Ht.init(this.clippingPlanes,Dt),M=Tt.get(B,E.length),M.init(),E.push(M),Bt.enabled===!0&&Bt.isPresenting===!0){let Ft=T.xr.getDepthSensingMesh();Ft!==null&&pu(Ft,q,-1/0,T.sortObjects)}pu(B,q,0,T.sortObjects),M.finish(),C!==null&&C.updateLights(S.state.lightsArray),T.sortObjects===!0&&M.sort(Q,ot),Me=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,Me&&oe.addToRenderList(M,B),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&Ht.beginShadows();let it=S.state.shadowsArray;if(Yt.render(it,B,q),dt===!0&&Ht.endShadows(),(nt&&A.hasRenderPass())===!1){let Ft=M.opaque,At=M.transmissive;if(S.setupLights(),q.isArrayCamera){let Nt=q.cameras;if(At.length>0)for(let zt=0,se=Nt.length;zt<se;zt++){let le=Nt[zt];td(Ft,At,B,le)}Me&&oe.render(B);for(let zt=0,se=Nt.length;zt<se;zt++){let le=Nt[zt];Qf(M,B,le,le.viewport)}}else At.length>0&&td(Ft,At,B,q),Me&&oe.render(B),Qf(M,B,q)}D!==null&&F===0&&(ct.updateMultisampleRenderTarget(D),ct.updateRenderTargetMipmap(D)),nt&&A.end(T),B.isScene===!0&&B.onAfterRender(T,B,q),Ct.resetDefaultState(),U=-1,k=null,_.pop(),_.length>0?(S=_[_.length-1],ct.setTextureUnits(S.state.textureUnits),dt===!0&&Ht.setGlobalState(T.clippingPlanes,S.state.camera)):S=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,C!==null&&C.renderEnd()};function pu(B,q,st,nt){if(B.visible===!1)return;if(B.layers.test(q.layers)){if(B.isGroup)st=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(q);else if(B.isLightProbeGrid)S.pushLightProbeGrid(B);else if(B.isLight)S.pushLight(B),B.castShadow&&S.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||B.intersectsFrustum(lt)){nt&&pe.setFromMatrixPosition(B.matrixWorld).applyMatrix4(Rt);let Ft=pt.update(B),At=B.material;At.visible&&M.push(B,Ft,At,st,pe.z,null,q)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||B.intersectsFrustum(lt))){let Ft=pt.update(B),At=B.material;if(nt&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),pe.copy(B.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),pe.copy(Ft.boundingSphere.center)),pe.applyMatrix4(B.matrixWorld).applyMatrix4(Rt)),Array.isArray(At)){let Nt=Ft.groups;for(let zt=0,se=Nt.length;zt<se;zt++){let le=Nt[zt],Ut=At[le.materialIndex];Ut&&Ut.visible&&M.push(B,Ft,Ut,st,pe.z,le,q)}}else At.visible&&M.push(B,Ft,At,st,pe.z,null,q)}}let Pt=B.children;for(let Ft=0,At=Pt.length;Ft<At;Ft++)pu(Pt[Ft],q,st,nt)}function Qf(B,q,st,nt){let{opaque:it,transmissive:Pt,transparent:Ft}=B;S.setupLightsView(st),dt===!0&&Ht.setGlobalState(T.clippingPlanes,st),nt&&I.viewport(V.copy(nt)),it.length>0&&da(it,q,st),Pt.length>0&&da(Pt,q,st),Ft.length>0&&da(Ft,q,st),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function td(B,q,st,nt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[nt.id]===void 0){let Ut=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[nt.id]=new Ye(1,1,{generateMipmaps:!0,type:Ut?$n:_n,minFilter:Zi,samples:Math.max(4,G.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let Pt=S.state.transmissionRenderTarget[nt.id],Ft=nt.viewport||V;Pt.setSize(Ft.z*T.transmissionResolutionScale,Ft.w*T.transmissionResolutionScale);let At=T.getRenderTarget(),Nt=T.getActiveCubeFace(),zt=T.getActiveMipmapLevel();T.setRenderTarget(Pt),T.getClearColor($),j=T.getClearAlpha(),j<1&&T.setClearColor(16777215,.5),T.clear(),Me&&oe.render(st);let se=T.toneMapping;T.toneMapping=Xn;let le=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),S.setupLightsView(nt),dt===!0&&Ht.setGlobalState(T.clippingPlanes,nt),da(B,st,nt),ct.updateMultisampleRenderTarget(Pt),ct.updateRenderTargetMipmap(Pt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let ve=0,He=q.length;ve<He;ve++){let Le=q[ve],{object:Ee,geometry:cn,material:Lt,group:bn}=Le;if(Lt.side===ie&&Ee.layers.test(nt.layers)){let me=Lt.side;Lt.side=on,Lt.needsUpdate=!0,ed(Ee,st,nt,cn,Lt,bn),Lt.side=me,Lt.needsUpdate=!0,Ut=!0}}Ut===!0&&(ct.updateMultisampleRenderTarget(Pt),ct.updateRenderTargetMipmap(Pt))}T.setRenderTarget(At,Nt,zt),T.setClearColor($,j),le!==void 0&&(nt.viewport=le),T.toneMapping=se}function da(B,q,st){let nt=q.isScene===!0?q.overrideMaterial:null;for(let it=0,Pt=B.length;it<Pt;it++){let Ft=B[it],{object:At,geometry:Nt,group:zt}=Ft,se=Ft.material;se.allowOverride===!0&&nt!==null&&(se=nt),At.layers.test(st.layers)&&ed(At,q,st,Nt,se,zt)}}function ed(B,q,st,nt,it,Pt){C!==null&&it.isNodeMaterial&&C.setObject(B,it),B.onBeforeRender(T,q,st,nt,it,Pt),B.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),it.onBeforeRender(T,q,st,nt,B,Pt),it.transparent===!0&&it.side===ie&&it.forceSinglePass===!1?(it.side=on,it.needsUpdate=!0,T.renderBufferDirect(st,q,nt,it,B,Pt),it.side=li,it.needsUpdate=!0,T.renderBufferDirect(st,q,nt,it,B,Pt),it.side=ie):T.renderBufferDirect(st,q,nt,it,B,Pt),B.onAfterRender(T,q,st,nt,it,Pt)}function pa(B,q,st){q.isScene!==!0&&(q=de);let nt=rt.get(B),it=S.state.lights,Pt=S.state.shadowsArray,Ft=it.state.version,At=yt.getParameters(B,it.state,Pt,q,st,S.state.lightProbeGridArray),Nt=yt.getProgramCacheKey(At),zt=nt.programs;nt.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?q.environment:null,nt.fog=q.fog;let se=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;nt.envMap=xt.get(B.envMap||nt.environment,se),nt.envMapRotation=nt.environment!==null&&B.envMap===null?q.environmentRotation:B.envMapRotation,zt===void 0&&(B.addEventListener("dispose",Qn),zt=new Map,nt.programs=zt);let le=zt.get(Nt);if(le!==void 0){if(nt.currentProgram===le&&nt.lightsStateVersion===Ft)return id(B,At),le}else At.uniforms=yt.getUniforms(B),C!==null&&B.isNodeMaterial&&C.build(B,st,At),B.onBeforeCompile(At,T),le=yt.acquireProgram(At,Nt),zt.set(Nt,le),nt.uniforms=At.uniforms;let Ut=nt.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(Ut.clippingPlanes=Ht.uniform),id(B,At),nt.needsLights=Nb(B),nt.lightsStateVersion=Ft,nt.needsLights&&(Ut.ambientLightColor.value=it.state.ambient,Ut.lightProbe.value=it.state.probe,Ut.sunLights.value=it.state.sun,Ut.sunLightShadows.value=it.state.sunShadow,Ut.directionalLights.value=it.state.directional,Ut.directionalLightShadows.value=it.state.directionalShadow,Ut.spotLights.value=it.state.spot,Ut.spotLightShadows.value=it.state.spotShadow,Ut.rectAreaLights.value=it.state.rectArea,Ut.ltc_1.value=it.state.rectAreaLTC1,Ut.ltc_2.value=it.state.rectAreaLTC2,Ut.pointLights.value=it.state.point,Ut.pointLightShadows.value=it.state.pointShadow,Ut.hemisphereLights.value=it.state.hemi,Ut.sunShadowMatrix.value=it.state.sunShadowMatrix,Ut.sunShadowCascade.value=it.state.sunShadowCascade,Ut.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Ut.spotLightMatrix.value=it.state.spotLightMatrix,Ut.spotLightMap.value=it.state.spotLightMap,Ut.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=S.state.lightProbeGridArray.length>0,nt.currentProgram=le,nt.uniformsList=null,le}function nd(B){if(B.uniformsList===null){let q=B.currentProgram.getUniforms();B.uniformsList=Co.seqWithValue(q.seq,B.uniforms)}return B.uniformsList}function id(B,q){let st=rt.get(B);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function Fb(B,q){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;v.setFromMatrixPosition(q.matrixWorld);for(let st=0,nt=B.length;st<nt;st++){let it=B[st];if(it.texture!==null&&it.boundingBox.containsPoint(v))return it}return null}function Db(B,q,st,nt,it){q.isScene!==!0&&(q=de),ct.resetTextureUnits();let Pt=q.fog,Ft=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?q.environment:null,At=D===null?T.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ce.workingColorSpace,Nt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,zt=xt.get(nt.envMap||Ft,Nt),se=nt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,le=!!st.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Ut=!!st.morphAttributes.position,ve=!!st.morphAttributes.normal,He=!!st.morphAttributes.color,Le=Xn;nt.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Le=T.toneMapping);let Ee=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,cn=Ee!==void 0?Ee.length:0,Lt=rt.get(nt),bn=S.state.lights;if(dt===!0&&(Dt===!0||B!==k)){let Pe=B===k&&nt.id===U;Ht.setState(nt,B,Pe)}let me=!1;nt.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==bn.state.version||Lt.outputColorSpace!==At||it.isBatchedMesh&&Lt.batching===!1||!it.isBatchedMesh&&Lt.batching===!0||it.isBatchedMesh&&Lt.batchingColor===!0&&it._colorsTexture===null||it.isBatchedMesh&&Lt.batchingColor===!1&&it._colorsTexture!==null||it.isInstancedMesh&&Lt.instancing===!1||!it.isInstancedMesh&&Lt.instancing===!0||it.isSkinnedMesh&&Lt.skinning===!1||!it.isSkinnedMesh&&Lt.skinning===!0||it.isInstancedMesh&&Lt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Lt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Lt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Lt.instancingMorph===!1&&it.morphTexture!==null||Lt.envMap!==zt||nt.fog===!0&&Lt.fog!==Pt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Ht.numPlanes||Lt.numIntersection!==Ht.numIntersection)||Lt.vertexAlphas!==se||Lt.vertexTangents!==le||Lt.morphTargets!==Ut||Lt.morphNormals!==ve||Lt.morphColors!==He||Lt.toneMapping!==Le||Lt.morphTargetsCount!==cn||!!Lt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Lt.__version=nt.version);let Cn=Lt.currentProgram;me===!0&&(Cn=pa(nt,q,it),C&&nt.isNodeMaterial&&C.onUpdateProgram(nt,Cn,Lt));let ti=!1,Di=!1,Hr=!1,we=Cn.getUniforms(),ze=Lt.uniforms;if(I.useProgram(Cn.program)&&(ti=!0,Di=!0,Hr=!0),nt.id!==U&&(U=nt.id,Di=!0),Lt.needsLights){let Pe=Fb(S.state.lightProbeGridArray,it);Lt.lightProbeGrid!==Pe&&(Lt.lightProbeGrid=Pe,Di=!0)}if(ti||k!==B){I.buffers.depth.getReversed()&&B.reversedDepth!==!0&&(B._reversedDepth=!0,B.updateProjectionMatrix()),we.setValue(Z,"projectionMatrix",B.projectionMatrix),we.setValue(Z,"viewMatrix",B.matrixWorldInverse);let Ni=we.map.cameraPosition;Ni!==void 0&&Ni.setValue(Z,ne.setFromMatrixPosition(B.matrixWorld)),G.logarithmicDepthBuffer&&we.setValue(Z,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&we.setValue(Z,"isOrthographic",B.isOrthographicCamera===!0),k!==B&&(k=B,Di=!0,Hr=!0)}if(Lt.needsLights&&(bn.state.sunShadowMap.length>0&&we.setValue(Z,"sunShadowMap",bn.state.sunShadowMap,ct),bn.state.directionalShadowMap.length>0&&we.setValue(Z,"directionalShadowMap",bn.state.directionalShadowMap,ct),bn.state.spotShadowMap.length>0&&we.setValue(Z,"spotShadowMap",bn.state.spotShadowMap,ct),bn.state.pointShadowMap.length>0&&we.setValue(Z,"pointShadowMap",bn.state.pointShadowMap,ct)),it.isSkinnedMesh){we.setOptional(Z,it,"bindMatrix"),we.setOptional(Z,it,"bindMatrixInverse");let Pe=it.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),we.setValue(Z,"boneTexture",Pe.boneTexture,ct))}it.isBatchedMesh&&(we.setOptional(Z,it,"batchingTexture"),we.setValue(Z,"batchingTexture",it._matricesTexture,ct),we.setOptional(Z,it,"batchingIdTexture"),we.setValue(Z,"batchingIdTexture",it._indirectTexture,ct),we.setOptional(Z,it,"batchingColorTexture"),it._colorsTexture!==null&&we.setValue(Z,"batchingColorTexture",it._colorsTexture,ct));let Oi=st.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&K.update(it,st,Cn),(Di||Lt.receiveShadow!==it.receiveShadow)&&(Lt.receiveShadow=it.receiveShadow,we.setValue(Z,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&q.environment!==null&&(ze.envMapIntensity.value=q.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=SM()),Di){if(we.setValue(Z,"toneMappingExposure",T.toneMappingExposure),Lt.needsLights&&Ob(ze,Hr),Pt&&nt.fog===!0&&Gt.refreshFogUniforms(ze,Pt),Gt.refreshMaterialUniforms(ze,nt,W,H,S.state.transmissionRenderTarget[B.id]),Lt.needsLights&&Lt.lightProbeGrid){let Pe=Lt.lightProbeGrid;ze.probesSH.value=Pe.texture,ze.probesMin.value.copy(Pe.boundingBox.min),ze.probesMax.value.copy(Pe.boundingBox.max),ze.probesResolution.value.copy(Pe.resolution)}Co.upload(Z,nd(Lt),ze,ct)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Co.upload(Z,nd(Lt),ze,ct),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&we.setValue(Z,"center",it.center),we.setValue(Z,"modelViewMatrix",it.modelViewMatrix),we.setValue(Z,"normalMatrix",it.normalMatrix),we.setValue(Z,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){let Pe=nt.uniformsGroups;for(let Ni=0,Wr=Pe.length;Ni<Wr;Ni++){let od=Pe[Ni];bt.update(od,Cn),bt.bind(od,Cn)}}return Cn}function Ob(B,q){B.ambientLightColor.needsUpdate=q,B.lightProbe.needsUpdate=q,B.sunLights.needsUpdate=q,B.sunLightShadows.needsUpdate=q,B.directionalLights.needsUpdate=q,B.directionalLightShadows.needsUpdate=q,B.pointLights.needsUpdate=q,B.pointLightShadows.needsUpdate=q,B.spotLights.needsUpdate=q,B.spotLightShadows.needsUpdate=q,B.rectAreaLights.needsUpdate=q,B.hemisphereLights.needsUpdate=q}function Nb(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(B,q,st){let nt=rt.get(B);nt.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),rt.get(B.texture).__webglTexture=q,rt.get(B.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:st,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,q){let st=rt.get(B);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(B,q=0,st=0){D=B,P=q,F=st;let nt=null,it=!1,Pt=!1;if(B){let At=rt.get(B);if(At.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(Z.FRAMEBUFFER,At.__webglFramebuffer),V.copy(B.viewport),X.copy(B.scissor),z=B.scissorTest,I.viewport(V),I.scissor(X),I.setScissorTest(z),U=-1;return}else if(At.__webglFramebuffer===void 0)ct.setupRenderTarget(B);else if(At.__hasExternalTextures)ct.rebindTextures(B,rt.get(B.texture).__webglTexture,rt.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let se=B.depthTexture;if(At.__boundDepthTexture!==se){if(se!==null&&rt.has(se)&&(B.width!==se.image.width||B.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(B)}}let Nt=B.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Pt=!0);let zt=rt.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(zt[q])?nt=zt[q][st]:nt=zt[q],it=!0):B.samples>0&&ct.useMultisampledRTT(B)===!1?nt=rt.get(B).__webglMultisampledFramebuffer:Array.isArray(zt)?nt=zt[st]:nt=zt,V.copy(B.viewport),X.copy(B.scissor),z=B.scissorTest}else V.copy(et).multiplyScalar(W).floor(),X.copy(ht).multiplyScalar(W).floor(),z=gt;if(st!==0&&(nt=N),I.bindFramebuffer(Z.FRAMEBUFFER,nt)&&I.drawBuffers(B,nt),I.viewport(V),I.scissor(X),I.setScissorTest(z),it){let At=rt.get(B.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+q,At.__webglTexture,st)}else if(Pt){let At=q;for(let Nt=0;Nt<B.textures.length;Nt++){let zt=rt.get(B.textures[Nt]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Nt,zt.__webglTexture,st,At)}}else if(B!==null&&st!==0){let At=rt.get(B.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,At.__webglTexture,st)}U=-1};function rd(B){let q=rt.get(B);return(q.__readFormat!==B.format||q.__readType!==B.type)&&(q.__readFormat=B.format,q.__readType=B.type,q.__formatReadable=G.textureFormatReadable(B.format),q.__typeReadable=G.textureTypeReadable(B.type)),q}this.readRenderTargetPixels=function(B,q,st,nt,it,Pt,Ft,At=0){if(!(B&&B.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=rt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft]),Nt){I.bindFramebuffer(Z.FRAMEBUFFER,Nt);try{let zt=B.textures[At],se=zt.format,le=zt.type;B.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+At);let Ut=rd(zt);if(Ut.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=B.width-nt&&st>=0&&st<=B.height-it&&Z.readPixels(q,st,nt,it,wt.convert(se),wt.convert(le),Pt)}finally{let zt=D!==null?rt.get(D).__webglFramebuffer:null;I.bindFramebuffer(Z.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(B,q,st,nt,it,Pt,Ft,At=0){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=rt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft]),Nt)if(q>=0&&q<=B.width-nt&&st>=0&&st<=B.height-it){I.bindFramebuffer(Z.FRAMEBUFFER,Nt);let zt=B.textures[At],se=zt.format,le=zt.type;B.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+At);let Ut=rd(zt);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ve),Z.bufferData(Z.PIXEL_PACK_BUFFER,Pt.byteLength,Z.STREAM_READ),Z.readPixels(q,st,nt,it,wt.convert(se),wt.convert(le),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);let He=D!==null?rt.get(D).__webglFramebuffer:null;I.bindFramebuffer(Z.FRAMEBUFFER,He);let Le=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await Mp(Z,Le,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ve),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Pt),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(ve),Z.deleteSync(Le),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,q=null,st=0){let nt=Math.pow(2,-st),it=Math.floor(B.image.width*nt),Pt=Math.floor(B.image.height*nt),Ft=q!==null?q.x:0,At=q!==null?q.y:0;ct.setTexture2D(B,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,st,0,0,Ft,At,it,Pt),I.unbindTexture()},this.copyTextureToTexture=function(B,q,st=null,nt=null,it=0,Pt=0){let Ft,At,Nt,zt,se,le,Ut,ve,He,Le=B.isCompressedTexture?B.mipmaps[Pt]:B.image;if(st!==null)Ft=st.max.x-st.min.x,At=st.max.y-st.min.y,Nt=st.isBox3?st.max.z-st.min.z:1,zt=st.min.x,se=st.min.y,le=st.isBox3?st.min.z:0;else{let ze=Math.pow(2,-it);Ft=Math.floor(Le.width*ze),At=Math.floor(Le.height*ze),B.isDataArrayTexture?Nt=Le.depth:B.isData3DTexture?Nt=Math.floor(Le.depth*ze):Nt=1,zt=0,se=0,le=0}nt!==null?(Ut=nt.x,ve=nt.y,He=nt.z):(Ut=0,ve=0,He=0);let Ee=wt.convert(q.format),cn=wt.convert(q.type),Lt;q.isData3DTexture?(ct.setTexture3D(q,0),Lt=Z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ct.setTexture2DArray(q,0),Lt=Z.TEXTURE_2D_ARRAY):(ct.setTexture2D(q,0),Lt=Z.TEXTURE_2D),I.activeTexture(Z.TEXTURE0),I.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(Z.UNPACK_ALIGNMENT,q.unpackAlignment);let bn=I.getParameter(Z.UNPACK_ROW_LENGTH),me=I.getParameter(Z.UNPACK_IMAGE_HEIGHT),Cn=I.getParameter(Z.UNPACK_SKIP_PIXELS),ti=I.getParameter(Z.UNPACK_SKIP_ROWS),Di=I.getParameter(Z.UNPACK_SKIP_IMAGES);I.pixelStorei(Z.UNPACK_ROW_LENGTH,Le.width),I.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Le.height),I.pixelStorei(Z.UNPACK_SKIP_PIXELS,zt),I.pixelStorei(Z.UNPACK_SKIP_ROWS,se),I.pixelStorei(Z.UNPACK_SKIP_IMAGES,le);let Hr=B.isDataArrayTexture||B.isData3DTexture,we=q.isDataArrayTexture||q.isData3DTexture;if(B.isDepthTexture){let ze=rt.get(B),Oi=rt.get(q),Pe=rt.get(ze.__renderTarget),Ni=rt.get(Oi.__renderTarget);I.bindFramebuffer(Z.READ_FRAMEBUFFER,Pe.__webglFramebuffer),I.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Wr=0;Wr<Nt;Wr++)Hr&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,rt.get(B).__webglTexture,it,le+Wr),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,rt.get(q).__webglTexture,Pt,He+Wr)),Z.blitFramebuffer(zt,se,Ft,At,Ut,ve,Ft,At,Z.DEPTH_BUFFER_BIT,Z.NEAREST);I.bindFramebuffer(Z.READ_FRAMEBUFFER,null),I.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(it!==0||B.isRenderTargetTexture||rt.has(B)){let ze=rt.get(B),Oi=rt.get(q);I.bindFramebuffer(Z.READ_FRAMEBUFFER,L),I.bindFramebuffer(Z.DRAW_FRAMEBUFFER,R);for(let Pe=0;Pe<Nt;Pe++)Hr?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ze.__webglTexture,it,le+Pe):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,ze.__webglTexture,it),we?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Oi.__webglTexture,Pt,He+Pe):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Oi.__webglTexture,Pt),it!==0?Z.blitFramebuffer(zt,se,Ft,At,Ut,ve,Ft,At,Z.COLOR_BUFFER_BIT,Z.NEAREST):we?Z.copyTexSubImage3D(Lt,Pt,Ut,ve,He+Pe,zt,se,Ft,At):Z.copyTexSubImage2D(Lt,Pt,Ut,ve,zt,se,Ft,At);I.bindFramebuffer(Z.READ_FRAMEBUFFER,null),I.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else we?B.isDataTexture||B.isData3DTexture?Z.texSubImage3D(Lt,Pt,Ut,ve,He,Ft,At,Nt,Ee,cn,Le.data):q.isCompressedArrayTexture?Z.compressedTexSubImage3D(Lt,Pt,Ut,ve,He,Ft,At,Nt,Ee,Le.data):Z.texSubImage3D(Lt,Pt,Ut,ve,He,Ft,At,Nt,Ee,cn,Le):B.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Pt,Ut,ve,Ft,At,Ee,cn,Le.data):B.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Pt,Ut,ve,Le.width,Le.height,Ee,Le.data):Z.texSubImage2D(Z.TEXTURE_2D,Pt,Ut,ve,Ft,At,Ee,cn,Le);I.pixelStorei(Z.UNPACK_ROW_LENGTH,bn),I.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,me),I.pixelStorei(Z.UNPACK_SKIP_PIXELS,Cn),I.pixelStorei(Z.UNPACK_SKIP_ROWS,ti),I.pixelStorei(Z.UNPACK_SKIP_IMAGES,Di),Pt===0&&q.generateMipmaps&&Z.generateMipmap(Lt),I.unbindTexture()},this.initRenderTarget=function(B){rt.get(B).__webglFramebuffer===void 0&&ct.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?ct.setTextureCube(B,0):B.isData3DTexture?ct.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?ct.setTexture2DArray(B,0):ct.setTexture2D(B,0),I.unbindTexture()},this.resetState=function(){P=0,F=0,D=null,I.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};function am(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function lm(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let o=t[r];o<=0||(i[r*3]=Math.min(1,n[0]*o),i[r*3+1]=Math.min(1,n[1]*o),i[r*3+2]=Math.min(1,n[2]*o))}}function hm(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var TM=[],Lo=new Map,fm=new Map,cm,um="",dm=0;function zs(i){TM=i,Lo=new Map(i.flatMap(t=>t.items.map(e=>[EM(t.id,e.id),e]))),dm++}function Xh(i){if(i===cm)return;cm=i;let t=Object.entries(i??{}),e=t.map(([n,r])=>`${n}=${r.hash}`).sort().join("|");e!==um&&(um=e,fm=new Map(t.map(([n,r])=>[n,r.recipe])),dm++)}var Yh="pack:household.draft:item";function pm(i,t,e){let n=Lo.get(i);Lo.set(i,t);try{return e()}finally{n?Lo.set(i,n):Lo.delete(i)}}function EM(i,t){return`pack:${i}:${t}`}function Mc(i){return i.startsWith("pack:")}function wc(i){return Mc(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":/:roof_window[\w.-]*_blind$/.test(i)?"blind":null:null}function qh(i,t){return i==="curtain"?t.color==="fabric":i==="blind"?t.color==="fabric"&&t.shape!=="cyl":t.shape!=="cyl"}function mm(i){return i==="robot_vacuum"||Mc(i)&&i.endsWith(":robot_vacuum")}function Vs(i){return i.z>.05}function gm(i){let t=(i?.parts??[]).filter(e=>e.shape==="cyl"&&Vs(e));return t.length?t.reduce((e,n)=>n.w*n.d>e.w*e.d?n:e).z:.227}function bm(i){return be(i)?.parts.find(t=>t.screen)}function be(i){if(Mc(i))return fm.get(i)??Lo.get(i)}function sn(i,t){let e=be(t.type);if(t.mount_y!=null)return t.mount_y;let n=_m(t,i.height);if(n!==null)return n;if(t.type==="lamp_wall")return Tc;if(xm.has(t.type))return Math.max(0,i.height-vm(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return ji(i,t)+ym(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?ji(i,t):Ar(t)||ji(i,t)}}function ji(i,t){let e=i.rooms.filter(n=>n.points.length>=3);return!e.length||e.some(n=>Zt([t.x,t.z],n.points))?0:Sc(i,t.x,t.z)}var Fo={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Zn(i){return i==="hedge"||i==="fence"||i==="pergola"}function $h(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!Zn(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function Ac(i){return[...i.rooms,...$h(i)]}function RM(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",o=(c,h)=>r==="x"?c:r==="-x"?-c:r==="z"?h:-h,s=1/0,a=-1/0;for(let[c,h]of i.points){let u=o(c,h);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(t,e)-s)/(a-s)));return n*l}function PM(i,t,e,n){return Rr(i,t)+Fo[t.type]-Gs(i,t,e,n)}var Zh=-.2,Ec={set:!1,level:Zh};function wm(i){let t=i?.settings.terrain??null;Ec={set:t?.level!=null,level:t?.level??Zh}}function Do(i,t){return Ec.level}function Sm(i){return i.elevation>.3?0:Ec.set?Ec.level-i.elevation:Zh}function Rr(i,t){return Sm(i)+(t.offset??0)}function Gs(i,t,e,n){return t.type==="pool"?0:RM(t,e,n)}function Sc(i,t,e){let n=(i.outdoor??[]).filter(o=>!Zn(o.type)&&o.type!=="pool"&&Zt([t,e],o.points)),r=[...n].reverse().find(o=>o.cut)??n[0];return r?PM(i,r,t,e):Sm(i)}function Rc(i,t){return Rr(i,t)+(t.above?Em(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function CM(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?Em(i):1.5}function Kh(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!Zn(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>Zt(n,e.points)))}function Tm(i,t){return!t.above&&!Kh(i,t)?Pc(i,t)-.05:Rc(i,t)-CM(t)}function Pc(i,t){return Rc(i,t)-.15}function Em(i){return i.height&&i.height>.3?i.height:1.2}var IM={type:"none",pitch:35,overhang:.4},q3={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...IM}};var Am=.3;var Rm=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Tc=1.75;var xm=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function vm(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var Pm=new Set(["stairs","stairs_u"]);function Cm(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,o=r-1,s=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),h=(t-c)/o;return{n,k:r,steps1:o,steps2:s,gap:a,fw:l,landing:c,run:h,rise:e/n}}function Im(i){return Rm.has(i)||!!be(i)?.light}var LM=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Ar(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return i.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Mm=.04,FM=1.2;function ym(i,t,e,n=0){let r=0;for(let o of i.furniture)!(LM.has(o.type)||be(o.type)?.surface)||!Zt([t,e],tr(o))||o.type==="worktop"&&n>0&&o.h-Mm>=FM&&n<=o.h-Mm-.02||(r=Math.max(r,o.h));return r}var Cc=new Set(["wall_switch","wall_socket"]),DM=4;function Lm(i){let t=(i.gangs??[]).slice(0,DM);return t.length?t:[{entity:null}]}function _m(i,t){return i.type==="wifi_ap"?i.variant==="wall"?2.1:Math.max(0,t-i.h):i.type==="water_heater"?i.variant==="wall"?1.1:0:null}var AM=new Set([...Rm,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var OM=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],NM=["standard","bars","glass_wall"],UM=["sectional","up_and_over"];function hi(i,t){return i.type==="garage"?i.style&&UM.includes(i.style)?i.style:"sectional":i.type==="door"?i.style&&OM.includes(i.style)?i.style:t?"front":"interior":i.style&&NM.includes(i.style)?i.style:"standard"}function Fm(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",o=i-.04,s=Math.min(1.05,Math.max(.6,o-(r?.6:.3))),a=(o-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let h=o-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function Dm(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Rn(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[o,s]=i[(e+1)%i.length];t+=n*s-o*r}return t/2}function Kn(i){return Math.abs(Rn(i))}function Qi(i){let t=Rn(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;e+=(o+a)*c,n+=(s+l)*c}return[e/(6*t),n/(6*t)]}function Om(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,o]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function Nm(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[o,s]of i)t=Math.min(t,o),e=Math.min(e,s),n=Math.max(n,o),r=Math.max(r,s);return{x0:t,z0:e,x1:n,z1:r}}function tr(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*e-a*n,i.z+s*n+a*e])}function Zt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[o,s]=t[n],[a,l]=t[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(e=!e)}return e}function jh(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],o=n*n+r*r,s=o>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/o)):0;return i.h0+(i.h1-i.h0)*s}var ke=(i,t)=>[i[0]-t[0],i[1]-t[1]],fi=(i,t)=>[i[0]+t[0],i[1]+t[1]],Dn=(i,t)=>[i[0]*t,i[1]*t],Cr=(i,t)=>i[0]*t[0]+i[1]*t[1],Pr=(i,t)=>i[0]*t[1]-i[1]*t[0],Hs=i=>Math.hypot(i[0],i[1]),Pn=i=>{let t=Hs(i)||1;return[i[0]/t,i[1]/t]},Jh=i=>[-i[1],i[0]],Um=i=>[i[1],-i[0]];function di(i,t,e=[]){let n=t.eps??.005,r=[],o=e.filter(w=>Math.hypot(w.b[0]-w.a[0],w.b[1]-w.a[1])>.05),s=[],a=w=>{for(let C=0;C<s.length;C++)if(Math.abs(s[C][0]-w[0])<=n&&Math.abs(s[C][1]-w[1])<=n)return C;return s.push([w[0],w[1]]),s.length-1},l=[];for(let w of i){let C=w.points;if(C.length<3||Math.abs(Rn(C))<1e-6)continue;let N=Rn(C)>0,L=C.map(a);for(let R=0;R<C.length;R++){let P=L[R],F=L[(R+1)%C.length];P!==F&&l.push(N?{u:P,v:F,room:w.id,edge:R,forward:!0}:{u:F,v:P,room:w.id,edge:R,forward:!1})}}let c=o.map(w=>[a(w.a),a(w.b)]),h=new Set;for(let w of i){let C=w.points;C.length<3||(w.wall_splits??[]).forEach((N,L)=>{if(!N||L>=C.length)return;let R=C[L],P=ke(C[(L+1)%C.length],R),F=Hs(P);for(let D of N)D>n&&D<F-n&&h.add(a(fi(R,Dn(P,D/F))))})}let u=[];for(let w of l){let C=s[w.u],N=s[w.v],L=ke(N,C),R=Hs(L),P=Dn(L,1/R),F=[];for(let U=0;U<s.length;U++){if(U===w.u||U===w.v)continue;let k=ke(s[U],C),V=Cr(k,P);V<=n||V>=R-n||Math.abs(Pr(P,k))<=n&&F.push({t:V,id:U})}F.sort((U,k)=>U.t-k.t);let D=[{t:0,id:w.u},...F,{t:R,id:w.v}];for(let U=0;U+1<D.length;U++){let k=D[U],V=D[U+1],X=w.forward?k.t:R-V.t,z=w.forward?V.t:R-k.t;u.push({u:k.id,v:V.id,room:w.room,edge:w.edge,t0:X,t1:z})}}let f=new Map;for(let w of u){let C=w.u<w.v?`${w.u}-${w.v}`:`${w.v}-${w.u}`,N=f.get(C);N||f.set(C,N=[]),N.push(w)}let d=w=>({room_id:w.room,edge:w.edge,t0:w.t0,t1:w.t1}),p=new Map;for(let w of u){let C=`${w.room}:${w.edge}`;p.set(C,[...p.get(C)??[],w.t0].sort((N,L)=>N-L))}let b=w=>{let C=i.find(L=>L.id===w.room)?.wall_heights?.[w.edge];if(!Array.isArray(C))return C;let N=p.get(`${w.room}:${w.edge}`)??[];return C[N.indexOf(w.t0)]??null},g=w=>{let C=w.map(b).filter(L=>typeof L=="number"&&L>0);if(C.length)return Math.min(...C);let N=w.map(L=>i.find(R=>R.id===L.room)?.ceiling_height);return N.every(L=>typeof L=="number"&&L>0)?Math.max(...N):void 0},m=w=>{let C=w.map(N=>i.find(L=>L.id===N.room)?.wall_thickness?.[N.edge]).filter(N=>typeof N=="number"&&N>0);return C.length?Math.max(...C):void 0},x=w=>{for(let C of w){let N=i.find(F=>F.id===C.room),L=N?.wall_slopes?.[C.edge];if(!N||!L)continue;let R=N.points[C.edge],P=N.points[(C.edge+1)%N.points.length];return{p:[R[0],R[1]],q:[P[0],P[1]],h0:Math.max(.05,L[0]),h1:Math.max(.05,L[1])}}},y=w=>w.some(C=>b(C)===0),v=w=>{let C=x(w);return C?{height:Math.max(C.h0,C.h1),slope:C}:{height:g(w)}},M=[],S=[];for(let w of f.values()){let C=w[0],N=w.find(L=>L!==C&&L.u===C.v&&L.v===C.u&&L.room!==C.room);for(let L of w)L!==C&&L!==N&&L.room!==C.room&&r.push(`overlap:${C.room}:${L.room}`);if(y(N?[C,N]:[C])){N&&M.push([C.room,N.room]);continue}if(N){let L=m([C,N])??t.interior;S.push({a:C.u,b:C.v,left:L/2,right:L/2,exterior:!1,roomLeft:C.room,roomRight:N.room,sources:[d(C),d(N)],...v([C,N])})}else S.push({a:C.u,b:C.v,left:0,right:m([C])??t.exterior,exterior:!0,roomLeft:C.room,roomRight:null,sources:[d(C)],...v([C])})}let E=w=>Pn(ke(s[w.b],s[w.a])),_=new Set;for(let w of S){if(w.exterior||w.free)continue;let C=new Set;for(let L of[w.a,w.b])for(let R of S)!R.exterior||R.free||R.a!==L&&R.b!==L||Math.abs(Pr(E(w),E(R)))>1e-6||(R.roomLeft===w.roomLeft?C.add("left"):R.roomLeft===w.roomRight&&C.add("right"));if(C.size!==1)continue;let N=w.left+w.right;C.has("left")?(w.left=0,w.right=N):(w.left=N,w.right=0),_.add(w)}for(let w of[..._]){let C=[w];for(;C.length;){let N=C.pop();for(let L of[N.a,N.b])for(let R of S){if(R===N||R.exterior||R.free||_.has(R)||R.a!==L&&R.b!==L||Math.abs(Pr(E(N),E(R)))>1e-6)continue;let P=R.left+R.right,F=N.right===0==Cr(E(N),E(R))>0;R.left=F?P:0,R.right=F?0:P,_.add(R),C.push(R)}}}o.forEach((w,C)=>{let[N,L]=c[C];if(N===L)return;let R=[(w.a[0]+w.b[0])/2,(w.a[1]+w.b[1])/2],P=i.find(U=>U.points.length>=3&&Zt(R,U.points))?.id??null,F=(w.thickness??t.interior)/2,D=typeof w.height=="number"&&w.height>0?w.height:void 0;S.push({free:w.id,a:N,b:L,left:F,right:F,exterior:!1,roomLeft:P,roomRight:P,sources:[],height:D})}),S=kM(S,s,h);let A=VM(S,s);return{walls:S.map((w,C)=>{let N=s[w.a],L=s[w.b],R=A.get(`${C}:a`),P=A.get(`${C}:b`),F=GM([R.right,P.left,L,P.right,R.left,N],1e-6);return{id:BM(N,L),a:[N[0],N[1]],b:[L[0],L[1]],left:w.left,right:w.right,exterior:w.exterior,roomLeft:w.roomLeft,roomRight:w.roomRight,sources:w.sources,footprint:F,...w.free?{free:w.free}:{},...w.height!==void 0?{height:w.height}:{},...w.slope?{slope:w.slope}:{}}}),warnings:[...new Set(r)],open:M}}function BM(i,t){let e=o=>Math.round(o*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function Bm(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function kM(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[s,a]of o){if(a.length!==2||e.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=Bm(l)),c.a!==s&&(c=Bm(c)),l.a===c.b)continue;let h=Pn(ke(t[l.b],t[l.a])),u=Pn(ke(t[c.b],t[c.a]));if(Math.abs(Pr(h,u))>1e-6||Cr(h,u)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:zM(l.sources,c.sources)},d=n.filter((p,b)=>b!==a[0]&&b!==a[1]);d.push(f),n.length=0,n.push(...d),r=!0;break}}return n}function zM(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function VM(i,t){let e=new Map;i.forEach((r,o)=>{let s=Pn(ke(t[r.b],t[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:Dn(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(c)}});let n=new Map;for(let[r,o]of e){let s=t[r];o.sort((c,h)=>c.angle-h.angle);let a=c=>({left:fi(s,Dn(Jh(c.d),c.left)),right:fi(s,Dn(Um(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let h=o[c],u=o[(c+1)%o.length],f=fi(s,Dn(Jh(h.d),h.left)),d=fi(s,Dn(Um(u.d),u.right)),p=Pr(h.d,u.d);if(Math.abs(p)<1e-4)continue;let b=Pr(ke(d,f),u.d)/p,g=fi(f,Dn(h.d,b));Hs(ke(g,s))>l||(n.get(h.key).left=g,n.get(u.key).right=g)}}return n}function GM(i,t){let e=i.filter((r,o)=>Hs(ke(r,i[(o+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let o=e[(r+e.length-1)%e.length],s=e[r],a=e[(r+1)%e.length],l=ke(s,o),c=ke(a,s);if(Math.abs(Pr(Pn(l),Pn(c)))<1e-7&&Cr(l,c)>0){e=e.filter((h,u)=>u!==r),n=!0;break}}}return e}function Qh(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],o=Pn(ke(r,n));return fi(n,Dn(o,e))}function km(i,t){let e=ke(i.b,i.a),n=Jh(Pn(e)),r=a=>t.some(l=>l.points.length>=3&&Zt(a,l.points)),o=0,s=0;for(let a of[.2,.5,.8]){let l=fi(i.a,Dn(e,a));r(fi(l,Dn(n,i.left+.2)))&&o++,r(ke(l,Dn(n,i.right+.2)))&&s++}return o>=2&&s===0?!0:s>=2&&o===0?!1:null}function Oo(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=Pn(ke(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,fi(r.a,[-o[1],o[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function No(i,t,e){if(!t.wall)return HM(i,e.room,e.edge,t.offset);let n=i.find(o=>o.free===t.wall);if(!n)return null;let r=Qh(e.room,0,t.offset);return{wall:n,s:Cr(ke(r,n.a),Pn(ke(n.b,n.a)))}}function tf(i,t,e){if(t.free)return null;let n=e?t.b:t.a,r=Pn(ke(t.b,t.a)),o=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,s=null;for(let a of i)if(!(a===t||!(o(a.a)||o(a.b)))){if(s||a.exterior!==t.exterior||a.free||!o(e?a.a:a.b)||Cr(Pn(ke(a.b,a.a)),r)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;s=a}return s}function HM(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=Qh(t,e,n);return{wall:r,s:Cr(ke(s,r.a),Pn(ke(r.b,r.a)))}}return null}function Ic(i,t,e,n){let r=t.rotation*Math.PI/180,o=[-Math.sin(r),Math.cos(r)],s=Math.max(.005,t.d),a=null;for(let c of i){let h=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(h<.05)continue;let u=[(c.b[0]-c.a[0])/h,(c.b[1]-c.a[1])/h],f=(t.x-c.a[0])*u[0]+(t.z-c.a[1])*u[1];if(f<-.02||f>h+.02)continue;let d=[-u[1],u[0]],p=(t.x-c.a[0])*d[0]+(t.z-c.a[1])*d[1],b=o[0]*d[0]+o[1]*d[1]>=0?1:-1;if(Math.abs(o[0]*d[0]+o[1]*d[1])<.5)continue;let g=b>0?c.left:-c.right,m=p>-c.right-1e-4&&p<c.left+1e-4,x=Math.abs(p-(g+b*(s/2)));if(!m&&x>.03||a&&x>=a.off)continue;let y=c.a[0]+u[0]*f,v=c.a[1]+u[1]*f,M=m?g+b*(s/2):p,S=c.slope?jh(c.slope,t.x,t.z):Math.min(e,c.height??e);a={x:y+d[0]*M,z:v+d[1]*M,top:S,off:x}}if(!a)return{x:t.x,z:t.z,y:n};let l=t.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-t.h-.02)):n;return{x:a.x,z:a.z,y:l}}var er=Math.PI/180;function Ir(i){let t=i.rotation??0;if(!t||i.points&&i.points.length>=3)return null;let e=t*er;return{p:i.pivot??[(i.x0+i.x1)/2,(i.z0+i.z1)/2],c:Math.cos(e),s:Math.sin(e)}}function Fc(i,t,e=!1){if(!i)return t;let n=t[0]-i.p[0],r=t[1]-i.p[1],o=e?-i.s:i.s;return[i.p[0]+n*i.c-r*o,i.p[1]+n*o+r*i.c]}function ln(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1),o=Ir(i),s=i.axis==="x"?(l,c)=>[l,i.flip?r-c:n+c]:(l,c)=>[i.flip?e-c:t+c,l],a=o?(l,c)=>Fc(o,s(l,c)):s;return i.axis==="x"?{u0:t,u1:e,w:r-n,at:a}:{u0:n,u1:r,w:e-t,at:a}}function nf(i,t,e,n=1e-6){let[r,o]=mi(i,t,e),s=ln({...i,rotation:0});return r>=s.u0-n&&r<=s.u1+n&&o>=-n&&o<=s.w+n}function an(i){let t=ln(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*er),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*er);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=Xm(t,e,n,r,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+o>1e-6?Math.min(t,Math.max(0,(n-e+t*o)/(r+o))):t/2,a=e+s*r;return{vr:s,rh:a,y:l=>l<=s?e+l*r:n+(t-l)*o}}function rf(i){let t=i.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var of=.14;function Vm(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function sf(i,t){return an(i).rh-of>t+.01}function Gm(i,t,e,n){let r=null,o=Math.max(0,i.settings.roof.overhang??0);for(let s of rf(i)){if(s.open||n!==void 0&&!sf(s,n)||!nf(s,t,e)||s.points&&s.points.length>=3&&!Zt([t,e],s.points))continue;let[a,l]=mi(s,t,e),c=s.shape==="flat"||s.shape==="parapet",h=Math.max(0,s.overhang??o),f=((c?null:Ys(Fr(s,{u0:h,u1:h,a:h,b:h}),a,l))??an(s).y(l))-of;r=r===null?f:Math.max(r,f)}return r}function Dc(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(o=>[o[0],o[1]]);let n=Kn(i)>=0?1:-1,r=[];for(let o=0;o<e;o++){let s=i[(o+e-1)%e],a=i[o],l=i[(o+1)%e],c=zm([a[0]-s[0],a[1]-s[1]]),h=zm([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],p=u[1]+f[1],b=Math.hypot(d,p);if(b<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let g=(d*u[0]+p*u[1])/b,m=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/b*t*m,a[1]+p/b*t*m])}return r}function zm(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Hm(i,t){if(i.points&&i.points.length>=3)return Dc(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,o=Math.max(i.z0,i.z1)+t,s=Ir(i);return[[e,r],[n,r],[n,o],[e,o]].map(a=>Fc(s,a))}function Wm(i,t,e,n){let r=di(i,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let o=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,s=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let f of[u.a,u.b])s.set(o(f),[...s.get(o(f))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let f=[u.a,u.b],d=u.b;for(;;){let p=(s.get(o(d))??[]).find(b=>!l.has(b));if(!p||(l.add(p),d=o(p.a)===o(d)?p.b:p.a,o(d)===o(f[0])))break;f.push(d)}f.length>=3&&o(d)===o(f[0])&&(!c||Math.abs(Kn(f))>Math.abs(Kn(c)))&&(c=f)}if(!c)return null;let h=[];for(let u=0;u<c.length;u++){let f=c[(u+c.length-1)%c.length],d=c[u],p=c[(u+1)%c.length],b=(d[0]-f[0])*(p[1]-d[1])-(d[1]-f[1])*(p[0]-d[0]);Math.abs(b)>1e-6&&h.push(d)}return h.length>=3?Dc(h,e):null}var Ws=Math.tan(30*er);function Xm(i,t,e,n,r){let o=Math.min(i*.3,n>1e-6?2.4/n:i*.3),s=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+o*n,l=e+s*r,c=Math.min(i-s,Math.max(o,(l-a+Ws*(i-s+o))/(2*Ws))),h=a+(c-o)*Ws;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=o?t+f*n:f<=c?a+(f-o)*Ws:f<=i-s?l+(i-s-f)*Ws:e+(i-f)*r}}function Fr(i,t){let e=ln(i),n=an(i),r=e.w,o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(D,U)=>[D,U,n.y(U)],h=c(a,-o),u=c(l,-o),f=c(l,r+s),d=c(a,r+s),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*er),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*er);if(i.shape==="pent"){let D=[h,u,f,d],U=[[0,n.y(0)],[r,n.y(r)]];return{faces:[D],rim:D,ridges:[[f,d]],gable:U,gables:[U,U]}}if(i.shape==="pyramid"){let D=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[h,u,D],[u,f,D],[f,d,D],[d,h,D]],rim:[h,u,f,d],ridges:[[h,D],[d,D],[u,D],[f,D]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let D=Xm(r,i.eave_a,i.eave_b,p,b),U=[[0,n.y(0)],[D.vla,D.yla],[D.vr,D.rh],[r-D.vlb,D.ylb],[r,n.y(r)]],k=[a,D.vla,D.yla],V=[l,D.vla,D.yla],X=[a,r-D.vlb,D.ylb],z=[l,r-D.vlb,D.ylb],$=[a,D.vr,D.rh],j=[l,D.vr,D.rh];return{faces:[[h,u,V,k],[k,V,j,$],[$,j,z,X],[X,z,f,d]],rim:[h,u,V,j,z,f,d,X,$,k],ridges:[[$,j],[k,V],[X,z]],gable:U,gables:[U,U]}}let[g,m]=Oc(i)??["gable","gable"],x=af(i,[g,m]),y=g==="gable"?[a,n.vr,n.rh]:[e.u0+x.d0,n.vr,n.rh],v=m==="gable"?[l,n.vr,n.rh]:[e.u1-x.d1,n.vr,n.rh],M=[a,x.vah,x.yh],S=[a,x.vbh,x.yh],E=[l,x.vah,x.yh],_=[l,x.vbh,x.yh],A=g==="halfhip",T=m==="halfhip",w=[[h,u,...T?[E]:[],v,y,...A?[M]:[]],[y,v,...T?[_]:[],f,d,...A?[S]:[]]];g==="hip"&&w.push([d,h,y]),A&&w.push([S,M,y]),m==="hip"&&w.push([u,f,v]),T&&w.push([E,_,v]);let C=[h,u,...m==="gable"?[v]:T?[E,_]:[],f,d,...g==="gable"?[y]:A?[S,M]:[]],N=[[y,v]];g==="hip"&&N.push([h,y],[d,y]),A&&N.push([M,y],[S,y]),m==="hip"&&N.push([u,v],[f,v]),T&&N.push([E,v],[_,v]);let L=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],R=[[0,n.y(0)],[x.vah,x.yh],[x.vbh,x.yh],[r,n.y(r)]],P=D=>D==="gable"?L:D==="halfhip"?R:null,F=[P(g),P(m)];return{faces:w,rim:C,ridges:N,gable:F[0]??F[1],gables:F}}function Oc(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let t=i.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(i.end_u0),e(i.end_u1)]}function af(i,t){let e=ln(i),n=an(i),r=e.w,o=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*er),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*er),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),h=c+(n.rh-c)*.55,u=o>1e-6?Math.min(n.vr,(h-i.eave_a)/o):n.vr,f=s>1e-6?Math.max(n.vr,r-(h-i.eave_b)/s):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),p=Math.min(l-.1,(n.rh-h)/Math.max(.2,o)),b=g=>g==="hip"?d:g==="halfhip"?p:0;return{d0:b(t[0]),d1:b(t[1]),yh:h,vah:u,vbh:f}}function Ys(i,t,e){let n=null;for(let r of i.faces){if(!Zt([t,e],r.map(x=>[x[0],x[1]])))continue;let[o,s]=r,a=r.slice(2).find(x=>Math.abs((s[0]-o[0])*(x[1]-o[1])-(s[1]-o[1])*(x[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],c=s[2]-o[2],h=s[1]-o[1],u=a[0]-o[0],f=a[2]-o[2],d=a[1]-o[1],p=c*d-h*f,b=h*u-l*d,g=l*f-c*u;if(Math.abs(b)<1e-9)continue;let m=o[2]-(p*(t-o[0])+g*(e-o[1]))/b;n=n===null?m:Math.min(n,m)}return n}function mi(i,t,e){let[n,r]=Fc(Ir(i),[t,e],!0),o=Math.min(i.x0,i.x1),s=Math.max(i.x0,i.x1),a=Math.min(i.z0,i.z1),l=Math.max(i.z0,i.z1);return i.axis==="x"?[n,i.flip?l-r:r-a]:[r,i.flip?s-n:n-o]}function ef(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Lr(i,t){let[e,n]=Fc(Ir(t),[(t.x0+t.x1)/2,(t.z0+t.z1)/2]),r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i)s===t||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(t)*1.5||nf(s,e,n)&&(!o||r(s)<r(o))&&(o=s);return o}function lf(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=ln(t),n=an(t).rh,r=Fr(i,{u0:0,u1:0,a:0,b:0}),o=an(i),s=b=>{let[g,m]=e.at(b,e.w/2),[x,y]=mi(i,g,m);return Ys(r,x,y)??o.y(y)},a=s(e.u0)<=s(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let b=.5;b<u;b+=.05)if(s(l+h*b)>=n-.02){f=l+h*b;break}if(Math.abs(f-c)<.05)return t;let d=Ir(t),p={...t,...d?{pivot:d.p}:{}};return t.axis==="x"?c===e.u1?p.x1=f:p.x0=f:c===e.u1?p.z1=f:p.z0=f,p}function Ym(i,t){let e=lf(i,t),n=ln(e),r=an(e),o=Fr(i,{u0:0,u1:0,a:0,b:0}),s=an(i),a=f=>{let[d,p]=n.at(f,n.w/2),[b,g]=mi(i,d,p);return Ys(o,b,g)??s.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,p=c*(f+1)/u,b=l?n.u0+d:n.u1-d,g=l?n.u0+p:n.u1-p,m=a(g),x=1/0,y=-1/0;for(let _=0;_<=40;_++){let A=n.w*_/40;r.y(A)>m+.02&&(x=Math.min(x,A),y=Math.max(y,A))}if(!(y-x>.05))continue;let v=n.at(b,x),M=n.at(g,y),S=mi(i,v[0],v[1]),E=mi(i,M[0],M[1]);h.push({u0:Math.min(S[0],E[0]),u1:Math.max(S[0],E[0]),v0:Math.min(S[1],E[1]),v1:Math.max(S[1],E[1])})}return h}function pi(i,t,e,n){let r=s=>n?s[t]<=e+1e-9:s[t]>=e-1e-9,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c&&o.push(a),c!==h){let u=(e-a[t])/(l[t]-a[t]);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function cf(i,t){let e=pi(i,0,t.u0,!0),n=pi(i,0,t.u1,!1),r=pi(pi(i,0,t.u0,!1),0,t.u1,!0),o=pi(r,1,t.v0,!0),s=pi(r,1,t.v1,!1);return[e,n,o,s].filter(a=>a.length>=3&&Math.abs(Kn(a.map(l=>[l[0],l[1]])))>1e-6)}function Nc(i,t,e){let n=ln(t),r=i.floors.flatMap(c=>c.rooms.filter(h=>h.points.length>=3&&c.elevation+c.height>t.base+.05)),o=c=>c.some(h=>r.some(u=>Zt(h,u.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(a.map(c=>n.at(c,-s)))?0:e,b:o(a.map(c=>n.at(c,n.w+s)))?0:e,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:e,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:e}}function qm(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function WM(i){return an(i).rh}function $m(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>Lr(n,l)??l);if(!r.length)return t.id;let o=Math.max(...r.map(l=>WM(l))),s=l=>l.rooms.some(c=>c.points.length>=3&&r.some(h=>{let[u,f]=c.points.reduce((d,p)=>[d[0]+p[0]/c.points.length,d[1]+p[1]/c.points.length],[0,0]);return nf(h,u,f)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<o-.3&&s(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function Lc(i,[t,e,n]){let r=s=>t*s[0]+e*s[1]+n,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c>=-1e-9&&o.push(a),c>=-1e-9!=h>=-1e-9){let u=c/(c-h);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function Xs(i){let t=i[0];if(!t)return null;let e=t;for(let d of i)Math.hypot(d[0]-t[0],d[1]-t[1])>Math.hypot(e[0]-t[0],e[1]-t[1])&&(e=d);let n=e[0]-t[0],r=e[1]-t[1],o=t,s=0;for(let d of i){let p=n*(d[1]-t[1])-r*(d[0]-t[0]);Math.abs(p)>Math.abs(s)&&(s=p,o=d)}if(Math.abs(s)<1e-9)return null;let a=o[0]-t[0],l=o[1]-t[1],c=e[2]-t[2],h=o[2]-t[2],u=(c*l-h*r)/s,f=(n*h-a*c)/s;return[u,f,t[2]-u*t[0]-f*t[1]]}var Uo=i=>Math.abs(Kn(i.map(t=>[t[0],t[1]])));function Uc(i){let t=Rn(i.map(n=>[n[0],n[1]]))>=0?1:-1,e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=Math.hypot(o[0]-r[0],o[1]-r[1]);if(s<1e-7)continue;let a=-(o[1]-r[1])*t/s,l=(o[0]-r[0])*t/s;e.push([a,l,-(a*r[0]+l*r[1])])}return e}function XM(i,t){let e=Xs(i),n=Xs(t.poly);if(!e||!n||Uo(t.poly)<1e-6)return null;let r=[...Uc(t.poly),[n[0]-e[0],n[1]-e[1],n[2]-e[2]-.01]];return Number.isFinite(t.depth)&&r.push([e[0]-n[0],e[1]-n[1],e[2]-n[2]+t.depth]),r}function Zm(i,t){let e=[i];for(let n of t){let r=[];for(let o of e){let s=XM(o,n),a=s?o:[];for(let c of s??[])a=Lc(a,c);if(a.length<3||Uo(a)<1e-6){r.push(o);continue}let l=o;for(let[c,h,u]of Uc(a)){let f=Lc(l,[-c,-h,-u]);if(f.length>=3&&Uo(f)>1e-6&&r.push(f),l=Lc(l,[c,h,u]),l.length<3)break}}e=r}return e}function uf(i,t,e){let n=[[0,1]],r=o=>[i[0]+(t[0]-i[0])*o,i[1]+(t[1]-i[1])*o,i[2]+(t[2]-i[2])*o];for(let o of e){let s=Xs(o.poly);if(!s||Uo(o.poly)<1e-6)continue;let a=Uc(o.poly).map(([d,p,b])=>[d*i[0]+p*i[1]+b,d*(t[0]-i[0])+p*(t[1]-i[1])]),l=d=>s[0]*d[0]+s[1]*d[1]+s[2]-d[2],c=l(i),h=l(t)-c;a.push([c-.01,h]),Number.isFinite(o.depth)&&a.push([o.depth-c,-h]);let u=0,f=1;for(let[d,p]of a){if(Math.abs(p)<1e-12){d<-1e-9&&(f=-1);continue}let b=-d/p;p>0?u=Math.max(u,b):f=Math.min(f,b)}f-u<1e-6||(n=n.flatMap(([d,p])=>[[d,Math.min(p,u)],[Math.max(d,f),p]]).filter(([d,p])=>p-d>1e-6))}return n.map(([o,s])=>[r(o),r(s)])}function Km(i,t){let e=Xs(i),n=Xs(t);if(!e||!n||Uo(t)<1e-6)return null;let r=[...i];for(let c of Uc(t))r=Lc(r,c);if(r.length<3)return null;let o=c=>(n[0]-e[0])*c[0]+(n[1]-e[1])*c[1]+(n[2]-e[2]),s=[];for(let c=0;c<r.length;c++){let h=r[c],u=r[(c+1)%r.length],f=o(h),d=o(u);if(f<0!=d<0){let p=f/(f-d);s.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p,h[2]+(u[2]-h[2])*p])}}if(s.length<2)return null;let a=s[0],l=s[s.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function Jm(i,t){let e=ln(i),n=o=>o.map(([s,a,l])=>{let[c,h]=e.at(s,a);return[c,h,l]}),r=[];for(let o of t){let s=pi(pi(pi(pi(o,0,e.u0,!1),0,e.u1,!0),1,0,!1),1,e.w,!0);s.length>=3&&Uo(s)>1e-6&&r.push({poly:n(s),depth:1/0});for(let a of cf(o,{u0:e.u0,u1:e.u1,v0:0,v1:e.w}))r.push({poly:n(a),depth:of})}return r}function hf(i,t){return t.map(e=>({poly:e.poly.map(([n,r,o])=>[...mi(i,n,r),o]),depth:e.depth}))}function jm(i,t,e){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return t===e||!n(t)||!n(e)?!1:Lr(i,t)!==e&&Lr(i,e)!==t}function Qm(i,t){if(t.dormer||t.open||!Oc(t)||Ir(t)||Lr(i,t))return null;let e=ln(t),n=an(t).rh,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===t||s.dormer||s.open||Ir(s)||s.axis===t.axis||s.shape==="flat"||s.shape==="parapet"||s.shape==="pent")continue;let a=an(s).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(s)>r(t)||r(s)===r(t)&&i.indexOf(s)<i.indexOf(t))))continue;let c=ef(s),[h,u]=t.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[f,d]=t.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],p=ef(t),[b,g]=t.axis==="x"?[p.z0,p.z1]:[p.x0,p.x1];if(b<f-.05||g>d+.05)continue;let m=t0(t,s),x=null;e.u0<h-.05&&e.u1>=h-.05&&e.u1<=m+.05?x=1:e.u1>u+.05&&e.u0<=u+.05&&e.u0>=m-.05&&(x=0),x!==null&&(!o||r(s)>r(o.host))&&(o={host:s,end:x})}return o}function t0(i,t){let e=ln(t),n=e.at(e.u0,an(t).vr);return i.axis==="x"?n[0]:n[1]}function e0(i,t){let e=t0(i,t.host),n={...i,...t.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=ef(i);return i.axis==="x"?(n.x0=t.end===0?Math.min(r.x0,e):r.x0,n.x1=t.end===1?Math.max(r.x1,e):r.x1):(n.z0=t.end===0?Math.min(r.z0,e):r.z0,n.z1=t.end===1?Math.max(r.z1,e):r.z1),n}function ff(i,t){return t.rooms.some(e=>e.points.length>=3)?Wm(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function df(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=ff(i,t);return!!e&&e.some(([n,r])=>Do(n,r)-t.elevation>-.15)}function n0(i,t,e,n,r){return!e||!df(i,t)?!1:n<Math.min(t.height,Do(r[0],r[1])-t.elevation)-.05}function Bo(i,t){let e=Rn(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let o=t[r],s=t[(r+1)%t.length],a=c=>e*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let h=l[c],u=l[(c+1)%l.length],f=a(h),d=a(u);if(f>=0&&n.push(h),f>=0!=d>=0){let p=f/(f-d);n.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p])}}}return n}function i0(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],o=i[(e+2)%i.length],s=(r[0]-n[0])*(o[1]-r[1])-(r[1]-n[1])*(o[0]-r[0]);if(!(Math.abs(s)<1e-9)){if(t&&Math.sign(s)!==t)return!1;t=Math.sign(s)}}return!0}var Jn=1e-4;function pf(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function r0(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],o=[n[0]-e[0],n[1]-e[1]],s=r[0]*o[1]-r[1]*o[0];if(Math.abs(s)<1e-12)return null;let a=((e[0]-i[0])*o[1]-(e[1]-i[1])*o[0])/s,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/s;return a>Jn&&a<1-Jn&&l>-Jn&&l<1+Jn?a:null}function mf(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r;if(o<1e-12)return null;let s=((i[0]-t[0])*n+(i[1]-t[1])*r)/o;return s<=Jn||s>=1-Jn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(o)<Jn?s:null}function YM(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let o=0;o<t.length;o++){let s=t[o],a=t[(o+1)%t.length];if(r0(n,r,s,a)!==null||mf(s,n,r)!==null||mf(n,s,a)!==null||Math.hypot(n[0]-s[0],n[1]-s[1])<Jn)return!0}}return Zt(i[0],t)||Zt(t[0],i)}function qM(i){let t=i.map(o=>pf(o)>=0?o:[...o].reverse()),e=[];t.forEach((o,s)=>{for(let a=0;a<o.length;a++){let l=o[a],c=o[(a+1)%o.length],h=[0,1];t.forEach((u,f)=>{if(f!==s)for(let d=0;d<u.length;d++){let p=u[d],b=u[(d+1)%u.length],g=r0(l,c,p,b)??mf(p,l,c);g!==null&&h.push(g)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<Jn)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],p=Math.hypot(d[0]-f[0],d[1]-f[1]),b=[(f[0]+d[0])/2+(d[1]-f[1])/p*.001,(f[1]+d[1])/2-(d[0]-f[0])/p*.001];t.some((g,m)=>m!==s&&Zt(b,g))||e.some(([g,m])=>Math.hypot(g[0]-f[0],g[1]-f[1])<Jn&&Math.hypot(m[0]-d[0],m[1]-d[1])<Jn)||e.push([f,d])}}});let n=[],r=new Set;for(let o=0;o<e.length;o++){if(r.has(o))continue;r.add(o);let s=[e[o][0]],a=e[o][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-s[0][0],a[1]-s[0][1])<.001);l++){let c=e.findIndex(([h],u)=>!r.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;r.add(c),s.push(e[c][0]),a=e[c][1]}s.length>=3&&pf(s)>1e-6&&n.push(s)}return n}function o0(i){let t=i.filter(o=>o.length>=3),e=t.map((o,s)=>s),n=o=>e[o]===o?o:e[o]=n(e[o]);for(let o=0;o<t.length;o++)for(let s=o+1;s<t.length;s++)n(o)!==n(s)&&YM(t[o],t[s])&&(e[n(s)]=n(o));let r=new Map;return t.forEach((o,s)=>r.set(n(s),[...r.get(n(s))??[],o])),[...r.values()].flatMap(o=>o.length===1?o:qM(o))}function $M(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r,s=o?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o)):0;return Math.hypot(i[0]-t[0]-n*s,i[1]-t[1]-r*s)}function s0(i,t,e=.03){return i.every(n=>Zt(n,t)||t.some((r,o)=>$M(n,r,t[(o+1)%t.length])<=e))}function a0(i,t){let e=pf(i)>=0?i:[...i].reverse(),n=(r,o)=>{let s=Math.hypot(o[0]-r[0],o[1]-r[1])||1;return[-(o[1]-r[1])/s,(o[0]-r[0])/s]};return e.map((r,o)=>{let s=n(e[(o-1+e.length)%e.length],r),a=n(r,e[(o+1)%e.length]),l=1+s[0]*a[0]+s[1]*a[1];return l<.1?r:[r[0]+(s[0]+a[0])/l*t,r[1]+(s[1]+a[1])/l*t]})}function bf(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var ko=(i,t)=>!!i.fix&&i.fix.includes(t);function gf(i,t,e,n){let r=new Map,o=i.filter(c=>ko(c,t)).map(c=>({p:c,e:bf(c,t,e)})),s=Math.min(.05,.1*e);for(let{p:c,e:h}of o)t!=="h"&&Math.abs((h[0]+h[1])/2-e/2)<1e-6&&r.set(c,"mid");let a=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of o)r.has(h)||u[0]>a+(a===0?s:.001)||t==="h"&&u[1]>=e-.01&&u[0]>.01||(r.set(h,"lo"),a=Math.max(a,u[1]),c=!0)}let l=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of o)r.has(h)||e-u[1]>l+(l>0?.001:t==="h"?.01:s)||(r.set(h,"hi"),l=Math.max(l,e-u[0]),c=!0)}for(let{p:c}of o)r.has(c)||r.set(c,"free");return a+l>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0,side:r}:{s0:e,s:n,lo:a,hi:l,side:r}}function Dr(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function l0(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!Bc(n))return[Dr(t,n),Dr(e,n)];let r=n.side.get(i)??"lo",o=e-t;if(r==="mid")return[n.s/2-o/2,n.s/2+o/2];if(r==="free"){let s=Dr((t+e)/2,n);return[s-o/2,s+o/2]}return r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function Bc(i){return i.lo>0||i.hi>0}function kc(i,t,e,n){let[r,o,s]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-o)<.001&&Math.abs(n-s)<.001)return i.parts;let a={w:gf(i.parts,"w",r,t),d:gf(i.parts,"d",o,e),h:gf(i.parts,"h",s,n)},l={w:!Bc(a.w)&&i.parts.some(c=>ko(c,"w")),d:!Bc(a.d)&&i.parts.some(c=>ko(c,"d")),h:!Bc(a.h)&&i.parts.some(c=>ko(c,"h"))};return i.parts.map(c=>{let h=x=>{let y=a[x],[v,M]=bf(c,x,y.s0);return ko(c,x)&&!l[x]?l0(c,v,M,y):[Dr(v,y),Dr(M,y)]},[u,f]=h("w"),[d,p]=h("d"),[b,g]=h("h"),m={...c,x:(u+f)/2/t-.5,w:(f-u)/t,z:(d+p)/2/e-.5,d:(p-d)/e,y:b/n,h:(g-b)/n};if(c.shape==="loft"){let x=(E,_,A,T,w)=>{let C=a[E],N=_??T,L=A??w,R=(N-L/2+.5)*C.s0,P=(N+L/2+.5)*C.s0;if(!ko(c,E)||l[E])return[Dr(R,C),Dr(P,C)];let[F,D]=bf(c,E,C.s0),[U]=l0(c,F,D,C),k=U-F;return[R+k,P+k]},[y,v]=x("w",c.tx,c.tw,c.x,c.w),[M,S]=x("d",c.tz,c.td,c.z,c.d);m.tx=(y+v)/2/t-.5,m.tw=(v-y)/t,m.tz=(M+S)/2/e-.5,m.td=(S-M)/e}return m})}var zc=["body","fabric","cushion","wood","white","metal","dark","glass","plant","pot","accent"];var ZM=/^#[0-9a-f]{6}$/i;function xf(i,t){let e=i?.[t];return typeof e=="string"&&ZM.test(e)?e:null}var KM=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var JM=["wall","pole","pillar","parcel","bank"];function u0(i){return KM.includes(i.variant??"")?i.variant:"bin240"}function h0(i){return JM.includes(i.variant??"")?i.variant:"wall"}var Ve=["#3a3f47","#3a3f47"],Or=["#23262b","#23262b"],jn=["#5a3b25","#5a3b25"],Oe=["#1f4fa8","#1f4fa8"],nr=["#e3b616","#e3b616"],ue=["#2f7d3b","#2f7d3b"],c0={default:{rest:Ve,bio:jn,paper:Oe,plastic:nr,glass:ue,garden:ue,recycling:nr,other:Ve},DE:{rest:Or,bio:jn,paper:Oe,plastic:nr,glass:ue,garden:ue,recycling:nr},AT:{rest:Ve,bio:jn,paper:[Ve[0],"#c0262d"],plastic:nr,glass:ue,garden:ue},CH:{rest:["#d8d8d8","#d8d8d8"],bio:ue,paper:Oe,plastic:Ve,glass:ue,garden:ue},NL:{rest:Ve,bio:ue,paper:Oe,plastic:["#3a3f47","#e57a1f"],glass:ue,garden:ue},BE:{rest:Ve,bio:ue,paper:Oe,plastic:Oe,glass:ue,garden:ue},GB:{rest:Or,bio:["#3a3f47","#5a3b25"],paper:Oe,plastic:Oe,glass:Or,garden:jn,recycling:Oe},US:{rest:Or,bio:ue,paper:Oe,plastic:Oe,glass:Oe,garden:ue,recycling:Oe},CA:{rest:Or,bio:ue,paper:Oe,plastic:Oe,glass:Oe,garden:ue,recycling:Oe},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Ve,bio:jn,paper:[Ve[0],"#e3b616"],plastic:[Ve[0],"#e3b616"],recycling:[Ve[0],"#e3b616"],glass:ue,garden:ue},IT:{rest:Ve,bio:jn,paper:Oe,plastic:nr,glass:ue,garden:ue},ES:{rest:Ve,bio:jn,paper:Oe,plastic:nr,glass:ue,garden:ue},PT:{rest:Ve,bio:jn,paper:Oe,plastic:nr,glass:ue,garden:ue},DK:{rest:Or,bio:ue,paper:Oe,plastic:Ve,glass:ue,garden:ue},SE:{rest:Or,bio:jn,paper:Oe,plastic:Ve,glass:ue,garden:ue},NO:{rest:Ve,bio:jn,paper:Oe,plastic:Ve,glass:ue,garden:ue},FI:{rest:Ve,bio:jn,paper:Oe,plastic:Ve,glass:ue,garden:ue}},f0="DE";function d0(){return f0}function jM(i,t){return c0[t]?.[i]??c0.default[i]??Ve}function p0(i,t=f0){let e=jM(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var ir=kt(3662079,.95),vf=kt(3662079,1),Ri=kt(5995775,.34),m0=kt(5995775,.22),zo=[-.55,.83],Jt=-1,Vc=16,rr=32,g0=48,yf=64,jt=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,o=r,s=r,a,l=Jt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,o.r,o.g,o.b,s.r,s.g,s.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Vt;return t.setAttribute("position",new It(this.p,3)),t.setAttribute("color",new It(this.c,3)),t.setAttribute("fold",new It(this.f,1)),this.uv&&t.setAttribute("uv",new It(this.uv,2)),this.tile&&t.setAttribute("tile",new It(this.tile,2)),t.computeBoundingSphere(),t}},Ne=class{p=[];c=[];f=[];seg(t,e,n=ir,r=Jt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,o){let[s,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||o<0)return this.seg(s,a,n,Jt);if(s[1]>=r-1e-6)return this.seg(s,a,n,o);let l=(r-s[1])/(a[1]-s[1]),c=[s[0]+(a[0]-s[0])*l,r,s[2]+(a[2]-s[2])*l];this.seg(s,c,n,Jt),this.seg(c,a,n,o)}geometry(){let t=new Vt;return t.setAttribute("position",new It(this.p,3)),t.setAttribute("color",new It(this.c,3)),t.setAttribute("fold",new It(this.f,1)),t}};function b0(i,t,e,n){let o=i.uv?2:0,s=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,f,d)=>({p:u.p.map((p,b)=>p+(f.p[b]-p)*d),c:u.c.map((p,b)=>p+(f.c[b]-p)*d),uv:u.uv&&f.uv?u.uv.map((p,b)=>p+(f.uv[b]-p)*d):null,tile:u.tile}),l=(u,f,d)=>{for(let p=0;p<3;p++){let b=u*3+p;for(let g=0;g<3;g++)i.p[b*3+g]=f[p].p[g],i.c[b*3+g]=f[p].c[g];if(i.uv&&f[p].uv)for(let g=0;g<o;g++)i.uv[b*2+g]=f[p].uv[g];if(i.tile&&f[p].tile)for(let g=0;g<2;g++)i.tile[b*2+g]=f[p].tile[g];i.f[b]=d}},c=(u,f)=>{let d=i.p.length/9;for(let p of u)i.p.push(...p.p),i.c.push(...p.c),i.f.push(f),i.uv&&i.uv.push(...p.uv??[.5,.5]),i.tile&&i.tile.push(...p.tile??[0,1]);return d},h=i.p.length/9;for(let u=t;u<h;u++){let f=[s(u,0),s(u,1),s(u,2)],d=f.map(_=>_.p[1]>e+1e-6),p=f.map(_=>_.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let _=0;_<3;_++)i.f[u*3+_]=n;continue}let b=i.f[u*3],g=(_,A)=>a(_,A,(e-_.p[1])/(A.p[1]-_.p[1])),m=d.filter(Boolean).length,x=m===1?d.indexOf(!0):d.indexOf(!1),y=f[x],v=f[(x+1)%3],M=f[(x+2)%3],S=g(y,v),E=g(M,y);m===1?(l(u,[y,S,E],n),c([S,v,M],b),c([S,M,E],b)):(l(u,[y,S,E],b),c([S,v,M],n),c([S,M,E],n))}}function x0(i,t,e,n){let r=i.p.length/6;for(let o=t;o<r;o++){let s=i.p.slice(o*6,o*6+3),a=i.p.slice(o*6+3,o*6+6),[l,c]=s[1]<=a[1]?[s,a]:[a,s];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[o*2]=n,i.f[o*2+1]=n;continue}let h=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,e,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[o*6+d]=l[d],i.p[o*6+3+d]=u[d];let f=i.c.slice(o*6,o*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var ee=Math.PI/180;function kt(i,t){let e=new J(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function QM(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function gn(i,t=[]){let e=i.map(([n,r])=>new Kt(n,r));return ys.triangulateShape(e,t.map(n=>n.map(([r,o])=>new Kt(r,o))))}function v0(i,t,e,n,r,o,s){let a=new J(s),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=t[d],b=t[(d+1)%4],g=e[d],m=e[(d+1)%4],x=b[0]-p[0],y=b[1]-p[1],v=Math.hypot(x,y);if(v<1e-6)continue;let S=.8+.28*((y/v*zo[0]-x/v*zo[1]+1)/2),E=(g[0]+m[0]-p[0]-b[0])/2*(-y/v)+(g[1]+m[1]-p[1]-b[1])/2*(x/v),_=Math.max(0,Math.min(1,E/Math.max(1e-6,Math.hypot(E,r-n)))),A=kt(o,l(n)*S).lerp(a,_),T=kt(o,l(r)*S).lerp(a,_);i.tri([p[0],n,p[1]],[g[0],r,g[1]],[m[0],r,m[1]],A,T,T),i.tri([p[0],n,p[1]],[m[0],r,m[1]],[b[0],n,b[1]],A,T,A)}let[c,h,u,f]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[u[0],r,u[1]],[h[0],r,h[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a))}function y0(i,t,e,n,r,o,s,a,l,c){let h=new J(l),u=[];for(let g=0;g<c;g++){let m=g/c*Math.PI*2;u.push({y:o+Math.cos(m)*s,s:r+Math.sin(m)*s})}let f=(g,m)=>{let x=t(g,u[m%c].s);return[x[0],u[m%c].y,x[1]]},d=t(e,r),p=t(n,r),b=(g,m,x,y,v)=>{let M=(m[1]-g[1])*(x[2]-g[2])-(m[2]-g[2])*(x[1]-g[1]),S=(m[2]-g[2])*(x[0]-g[0])-(m[0]-g[0])*(x[2]-g[2]),E=(m[0]-g[0])*(x[1]-g[1])-(m[1]-g[1])*(x[0]-g[0]);M*y[0]+S*y[1]+E*y[2]<0?i.tri(g,x,m,v):i.tri(g,m,x,v)};for(let g=0;g<c;g++){let m=(g+.5)/c*Math.PI*2,x=kt(a,.62+.4*Math.max(0,Math.cos(m))),y=t((e+n)/2,r+Math.sin(m)*s),v=t((e+n)/2,r),M=[y[0]-v[0],Math.cos(m)*s,y[1]-v[1]];b(f(e,g),f(n,g+1),f(n,g),M,x),b(f(e,g),f(e,g+1),f(n,g+1),M,x)}for(let[g,m,x]of[[e,p,d],[n,d,p]]){let y=t(g,r),v=[y[0],o,y[1]],M=[x[0]-m[0],0,x[1]-m[1]];for(let S=0;S<c;S++)b(v,f(g,S),f(g,S+1),M,h)}}function Ie(i,t,e,n,r,o,s={}){let a=typeof n=="number"?()=>n:p=>Math.max(e+.002,n(p[0],p[1])),l=s.aoFrom??e,c=s.fold??Jt,h=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),u=(s.holes??[]).map(p=>QM(p)>0?[...p].reverse():p),f=u.length?[...t,...u.flat()]:t,d=s.topFace===!1&&!s.bottom?[]:gn(t,u);if(s.topFace!==!1){let p=new J(o);for(let[b,g,m]of d){let x=f[b],y=f[g],v=f[m];i.tri([x[0],a(x),x[1]],[v[0],a(v),v[1]],[y[0],a(y),y[1]],p,p,p,void 0,s.topFold??c)}}if(s.bottom){let p=kt(r,.55);for(let[b,g,m]of d){let x=f[b],y=f[g],v=f[m];i.tri([x[0],e,x[1]],[y[0],e,y[1]],[v[0],e,v[1]],p,p,p,void 0,c)}}for(let p of[t,...u])for(let b=0;b<p.length;b++){let g=p[b],m=p[(b+1)%p.length],x=m[0]-g[0],y=m[1]-g[1],v=Math.hypot(x,y);if(v<1e-6||s.skipSide?.(g,m))continue;let S=.8+.28*((y/v*zo[0]-x/v*zo[1]+1)/2),E=a(g),_=a(m),A=kt(r,h(e)*S),T=kt(r,h(E)*S),w=kt(r,h(_)*S);i.tri([g[0],e,g[1]],[g[0],E,g[1]],[m[0],_,m[1]],A,T,w,void 0,c),i.tri([g[0],e,g[1]],[m[0],_,m[1]],[m[0],e,m[1]],A,w,A,void 0,c)}}function _0(i,t,e,n){if(t.length<2)return;let r=new J(n),o=c=>.5+.5*Math.min(1,Math.max(0,c/1.6)),s=(c,h,u)=>{let f=h[0]-c[0],d=h[1]-c[1],p=h[2]-c[2],b=u[0]-c[0],g=u[1]-c[1],m=u[2]-c[2],x=d*m-p*g,y=p*b-f*m,v=f*g-d*b,M=Math.hypot(x,y,v);if(M<1e-10)return;let S=Math.hypot(x,v),_=.8+.28*(S>1e-9?(x/S*zo[0]+v/S*zo[1]+1)/2:.5),A=y/M,T=w=>{let C=kt(e,o(w)*_*(A<0?1+.45*A:1));return A>0?C.lerp(r,A):C};i.tri(c,h,u,T(c[1]),T(h[1]),T(u[1]))},a=(c,h)=>{let u=c.pts[h%c.pts.length];return[u[0],c.y,u[1]]};for(let c=0;c+1<t.length;c++){let h=t[c],u=t[c+1];for(let f=0;f<h.pts.length;f++)s(a(h,f),a(u,f),a(u,f+1)),s(a(h,f),a(u,f+1),a(h,f+1))}let l=(c,h)=>{let u=c.pts.length,f=c.pts.reduce((b,g)=>b+g[0],0)/u,d=c.pts.reduce((b,g)=>b+g[1],0)/u;if(c.pts.every(b=>Math.hypot(b[0]-f,b[1]-d)<1e-6))return;let p=[f,c.y,d];for(let b=0;b<u;b++)h?s(p,a(c,b+1),a(c,b)):s(p,a(c,b),a(c,b+1))};l(t[0],!1),l(t[t.length-1],!0)}function M0(i,t){return Math.max(i,t)<.05?8:12}function w0(i,t,e,n,r,o){let s=[];for(let a=0;a<o;a++){let l=a/o*Math.PI*2;s.push([i+Math.cos(l)*e,t+Math.sin(l)*n])}return{pts:s,y:r}}function S0(i,t,e,n,r,o){let s=M0(e,n),a=s===8?4:6,l=(r+o)/2,c=(o-r)/2,h=[];for(let u=0;u<=a;u++){let f=-Math.PI/2+u/a*Math.PI,d=u===0||u===a?0:Math.cos(f);h.push(w0(i,t,e*d,n*d,l+Math.sin(f)*c,s))}return h}function T0(i,t,e,n,r,o,s){let a=s.map(([u,f])=>[Math.min(1,Math.max(0,u)),Math.min(1,Math.max(0,f))]),l=0,c=[[0,a[0][1]],...a,[0,a[a.length-1][1]]];for(let u=0;u<c.length;u++){let f=c[u],d=c[(u+1)%c.length];l+=f[0]*d[1]-d[0]*f[1]}l<0&&a.reverse();let h=M0(e,n);return a.map(([u,f])=>w0(i,t,e*u,n*u,r+f*(o-r),h))}function E0(i,t,e,n,r,o,s){s=Math.max(0,Math.min(s,(t-i)/2,(n-e)/2,(o-r)/2));let a=i+s,l=t-s,c=e+s,h=n-s,u=(d,p)=>{let b=[],g=[[l,c,-90],[l,h,0],[a,h,90],[a,c,180]];for(let[m,x,y]of g)for(let v=0;v<=3;v++){let M=(y+v*30)*Math.PI/180;b.push([m+Math.cos(M)*d,x+Math.sin(M)*d])}return{pts:b,y:p}},f=[];for(let d of[0,45,90]){let p=d*Math.PI/180;f.push(u(s*Math.sin(p),r+s-s*Math.cos(p)))}for(let d of[90,45,0]){let p=d*Math.PI/180;f.push(u(s*Math.sin(p),o-s+s*Math.cos(p)))}return f}var qs={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},O=qs,mt=kt(5995775,.3),Ot=kt(5995775,.17),Qt=kt(3662079,.45),sr=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Mf(n)}rotated(t,e,n){let r=n*ee,o=Math.cos(r),s=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*o-(c-e)*s,e+(l-t)*s+(c-e)*o))}box(t,e,n,r,o,s,a,l=a,c=null){if(e-t<1e-4||s-o<1e-4||r-n<1e-4)return;let h=[this.tf(t,o),this.tf(t,s),this.tf(e,s),this.tf(e,o)];Ie(this.buf,Gc(h),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,r,c)}prism(t,e,n,r,o=r,s=null){if(t.length<3||n-e<1e-4)return;let a=t.map(([l,c])=>this.tf(l,c));if(Ie(this.buf,Gc(a),e,n,r,o,{aoFrom:0,bottom:e>.05}),s)for(let l=0;l<a.length;l++)this.line(a[l],a[(l+1)%a.length],n,n,s)}loft(t,e,n,r,o,s=o,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Gc(l)&&(l.reverse(),c.reverse()),v0(this.buf,l,c,n,r,o,s),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],r,r,a),this.line(l[h],c[h],n,r,a)}pad(t,e,n,r,o,s,a,l=a,c=.03,h=null){if(c=Math.min(c,(e-t)/2-.005,(s-o)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,o,s,a,l,h);this.loft([t+c,e-c,o+c,s-c],[t,e,o,s],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,o,s,a,a,h),this.loft([t,e,o,s],[t+c,e-c,o+c,s-c],r-c,r,a,l)}lyingCyl(t,e,n,r,o,s,a,l,c=l,h=12,u=null){let f=Math.min(a,o-r)/2;if(f<1e-4||s<1e-4)return;let d=(r+o)/2,p=t==="x"?e:n,b=t==="x"?n:e,g=(m,x)=>t==="x"?this.tf(m,x):this.tf(x,m);if(y0(this.buf,g,p-s/2,p+s/2,b,d,f,l,c,h),u)for(let m of[p-s/2,p+s/2])for(let x=0;x<h;x++){let y=x/h*Math.PI*2,v=(x+1)/h*Math.PI*2;this.line(g(m,b+Math.sin(y)*f),g(m,b+Math.sin(v)*f),d+Math.cos(y)*f,d+Math.cos(v)*f,u)}}rings(t,e,n=e,r=null){let o=t.map(s=>{let a=s.pts.map(([l,c])=>this.tf(l,c));return{pts:this.mirrored?a.reverse():a,y:s.y}});if(_0(this.buf,o,e,n),r){let s=l=>Math.max(...l.pts.map(([c,h])=>Math.hypot(c-l.pts[0][0],h-l.pts[0][1]))),a=o.reduce((l,c)=>s(c)>s(l)+1e-9?c:l,o[0]);for(let l=0;l<a.pts.length;l++)this.line(a.pts[l],a.pts[(l+1)%a.pts.length],a.y,a.y,r)}}cyl(t,e,n,r,o,s,a=s,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Ie(this.buf,Gc(h),r,o,s,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],o,o,c)}seg(t,e,n,r,o,s,a=mt){this.line(this.tf(t,n),this.tf(r,s),e,o,a)}line(t,e,n,r,o){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],o,Jt)}outline(t,e,n,r){for(let o=0;o<4;o++){let s=t[o],a=t[(o+1)%4];this.line(s,a,n,n,r),this.line(s,s,e,n,r)}}};function Mf(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Gc(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function Ur(i,t,e,n,r,o,s=O.metal,a=!1){let l=t/2-o-r,c=e/2-o-r;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,s):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,s)}}function $s(i,t,e,n,r,o,s,a=null,l=!1){let c=(e-t)/s;for(let h=1;h<s;h++){let u=t+c*h;i.seg(u,n,o,u,r,o,Ot)}for(let h=0;h<s;h++){let u=t+c*(h+.5),f=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),f,o+.012,u+Math.min(.1,c/4),f,o+.012,Qt);else{let d=s>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,o+.012,d,f+.08,o+.012,Qt)}}}function A0(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),h=n*.5,u=Math.min(.24,e*.28);Ur(i,t,e,.07,.05,.05,O.wood,!0),i.pad(o,s,.07,h-.08,a+.02,l,O.fabric,O.fabricTop,.04,mt),i.loft([o,s,a,a+u],[o+.01,s-.01,a,a+u*.5],h-.08,n,O.fabric,O.fabricTop,mt),i.pad(o,o+c,h-.08,n*.72,a+.02,l-.02,O.fabric,O.fabricTop,.04,mt),i.pad(s-c,s,h-.08,n*.72,a+.02,l-.02,O.fabric,O.fabricTop,.04,mt);let d=(s-c-(o+c))/r;for(let p=0;p<r;p++){let b=o+c+d*p+.02,g=b+d-.04;i.pad(b,g,h-.08,h+.05,a+u+.02,l-.06,O.cushion,O.cushion,.04),i.loft([b+.01,g-.01,a+u*.55,a+u+.14],[b+.03,g-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,O.cushion)}}function R0(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),h=Math.min(.24,c*.28),u=Math.min(.2,c*.24),f=n*.5,d=n*.72,p=r?[-1,1]:[-1],b=(_,A)=>i.loft([_-.015,_+.015,A-.015,A+.015],[_-.025,_+.025,A-.025,A+.025],0,.07,O.wood);b(o+.06,a+.06),b(s-.06,a+.06),r||b(s-.06,a+c-.06);for(let _ of p)b(_*(t/2-.06),l-.06),b(_*(t/2-c+.06),l-.06);i.pad(o,s,.07,f-.08,a+.02,a+c,O.fabric,O.fabricTop,.04,mt);for(let _ of p){let[A,T]=_<0?[o+.02,o+c]:[s-c,s-.02];i.pad(A,T,.07,f-.08,a+c-.02,l,O.fabric,O.fabricTop,.04,mt)}i.loft([o,s,a,a+h],[o+.01,s-.01,a,a+h*.5],f-.08,n,O.fabric,O.fabricTop,mt);for(let _ of p)_<0?i.loft([o,o+h,a+h,l],[o,o+h*.5,a+h,l-.01],f-.08,n,O.fabric,O.fabricTop,mt):i.loft([s-h,s,a+h,l],[s-h*.5,s,a+h,l-.01],f-.08,n,O.fabric,O.fabricTop,mt);for(let _ of p){let[A,T]=_<0?[o+h,o+c]:[s-c,s-h];i.pad(A,T,f-.08,d,l-u,l,O.fabric,O.fabricTop,.04,mt)}r||i.pad(s-u,s,f-.08,d,a+.02,a+c-.02,O.fabric,O.fabricTop,.04,mt);let g=o+h,m=r?s-h:s-u,x=Math.max(1,Math.round((m-g)/.62)),y=(m-g)/x;for(let _=0;_<x;_++){let A=g+y*_+.02,T=A+y-.04;i.pad(A,T,f-.08,f+.05,a+h+.02,a+c-.04,O.cushion,O.cushion,.04),i.loft([A+.01,T-.01,a+h*.55,a+h+.14],[A+.03,T-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,O.cushion)}let v=a+c,M=l-u;if(M-v<.2)return;let S=Math.max(1,Math.round((M-v)/.62)),E=(M-v)/S;for(let _ of p)for(let A=0;A<S;A++){let T=v+E*A+.02,w=T+E-.04;_<0?(i.pad(o+h+.02,o+c-.04,f-.08,f+.05,T,w,O.cushion,O.cushion,.04),i.loft([o+h*.55,o+h+.14,T+.01,w-.01],[o+h*.4,o+h*.4+.06,T+.03,w-.03],f+.03,n*.93,O.cushion)):(i.pad(s-c+.04,s-h-.02,f-.08,f+.05,T,w,O.cushion,O.cushion,.04),i.loft([s-h-.14,s-h*.55,T+.01,w-.01],[s-h*.4-.06,s-h*.4,T+.03,w-.03],f+.03,n*.93,O.cushion))}}function t2(i,t,e,n){let r=-e/2,o=e/2,s=-t/2,a=t/2,l=Math.min(.32,n*.36);Ur(i,t,e,.08,.06,.03,O.wood,!0),i.box(s,a,.08,l,r+.06,o,O.wood,O.woodTop,mt),i.pad(s+.03,a-.03,l,l+.2,r+.08,o-.03,O.white,O.whiteTop,.03),i.box(s,a,.08,n-.05,r,r+.07,O.wood,O.woodTop,mt),i.box(s,a,n-.05,n,r,r+.09,O.wood,O.woodTop,Ot);let c=l+.2,h=r+(e-.1)*.36;i.pad(s+.01,a-.01,c-.1,c+.05,h,o-.01,O.cushion,O.fabricTop,.025,Ot),i.lyingCyl("x",0,h+.05,c-.02,c+.09,t-.02,.1,O.cushion,O.fabricTop,8);let u=t>1.2?2:1,f=(t-.2)/u;for(let d=0;d<u;d++){let p=s+.1+f*d,b=r+.12,g=Math.min(.42,e*.2),m=.1;i.loft([p+.03+m,p+f-.03-m,b+m*.5,b+g-m*.5],[p+.03,p+f-.03,b,b+g],c,c+.06,O.whiteTop),i.loft([p+.03,p+f-.03,b,b+g],[p+.03+m,p+f-.03-m,b+m*.5,b+g-m*.5],c+.06,c+.12,O.whiteTop,O.whiteTop,Ot)}}function e2(i,t,e,n){let r=Math.min(.46,n*.52);Ur(i,t,e,r-.04,.035,.02,O.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,O.wood,O.woodTop,mt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,O.cushion,O.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,O.wood,O.woodTop,mt)}function n2(i,t,e,n){Ur(i,t,e,n-.04,.06,.05,O.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.wood,O.woodTop,Qt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,O.body)}function i2(i,t,e,n){let r=-t/2,o=t/2;i.box(r,o,n-.035,n,-e/2,e/2,O.wood,O.woodTop,mt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,O.metal);let s=Math.min(.42,t*.32);i.box(o-s,o,0,n-.035,-e/2+.03,e/2-.02,O.body,O.bodyTop,mt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(o-s,l,a,o,l,a,Ot);for(let l of[n*.2,n*.5,n*.82])i.seg(o-s/2-.07,l,a+.012,o-s/2+.07,l,a+.012,Qt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,O.dark,O.dark,Qt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,O.metal)}function or(i,t,e,n,r,o=null,s=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,O.body,O.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,O.dark),$s(i,-t/2,t/2,.08,n,e/2-.02,r,o,s)}function r2(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,O.wood,O.woodTop,mt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,O.wood,O.woodTop,mt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,O.body);let o=Math.max(2,Math.round(n/.38));for(let s=0;s<=o;s++){let a=Math.min(n-.025,n/o*s);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,O.wood,O.woodTop,Ot),s<o){let l=-t/2+.025+.04,c=s*3;for(;l<t/2-.025-.12;){let h=.03+c*7%5*.008,u=n/o-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?O.fabric:O.cushion,O.fabricTop),l+=h+.006,c++}}}}function o2(i,t,e,n){let r=Math.max(1,Math.round(t/.6));or(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,mt)}function s2(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,O.white,O.whiteTop,mt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Ot);let o=t/2-.06;i.seg(o,r+.08,e/2+.015,o,r+.4,e/2+.015,Qt),i.seg(o,r-.4,e/2+.015,o,r-.08,e/2+.015,Qt)}var Vo=(i,t)=>kt(parseInt(i.slice(1),16),t).getHex();function Hc(i){let t=Math.max(...new J(i).toArray());return Vo(i,t>.05?Math.max(1,.62/t):1)}var Nr=!1;function F0(i){Nr=i}function a2(i){let t=null;for(let e of zc){let n=xf(i,e);if(!n)continue;t??={...qs},t[e]=Nr?Hc(n):Vo(n,.55);let r=`${e}Top`;r in t&&(t[r]=Nr?Hc(n):Vo(n,.75))}return t??qs}function Zs(i,t){let e=O;O=a2(i);try{return t()}finally{O=e}}function D0(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let o=.62/n;i[e]*=o,i[e+1]*=o,i[e+2]*=o}}function l2(i,t,e,n,r,o){let s=Nr?Hc(o[0]):Vo(o[0],.55),a=Nr?Hc(o[1]):Vo(o[1],.8),l=Vo(o[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,s,s,Ot),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,a,a,Ot),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,l,l,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,s,s,mt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,a,l,Ot),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,a),i.box(t*.36,t*.42,n*.95,n,-.01,.01,a),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,a);return}if(r==="underground"){let u=Math.min(t,e)*.32;i.cyl(0,0,u,0,n*.9,s,s,16,mt),i.cyl(0,0,u*1.08,n*.9,n,a,l,16,Ot),i.box(-u*.5,u*.5,n*.62,n*.8,u*.7,u*1.02,O.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,O.metal,O.metal,Ot);return}if(r==="bin1100"){for(let f of[-1,1])for(let d of[-1,1])i.cyl(f*(t/2-.12),d*(e/2-.12),.05,0,.14,O.dark,O.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,s,s,mt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,a,l,Ot),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,a,l,Ot);return}let c=Math.min(.2,n*.19),h=-e/2;for(let u of[-1,1])i.lyingCyl("x",u*(t/2-.05),h+c/2+.01,0,c,.05,c,O.dark,O.metal,12);i.loft([-t*.42,t*.42,h+.07,e/2-.05],[-t/2+.01,t/2-.01,h+.05,e/2-.01],.03,n-.05,s,s,mt),i.box(-t/2,t/2,n-.05,n,h+.03,e/2,a,l,Ot),i.box(-t*.42,t*.42,n-.1,n-.02,h,h+.04,a,l),r==="multi"&&(i.seg(-t/2,n+.002,(h+e/2)/2,t/2,n+.002,(h+e/2)/2,Qt),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Ot))}function c2(i,t,e,n,r,o,s){let a=t/r;i.box(-t/2,t/2,0,n,-e/2,e/2,s?O.metal:O.white,s?O.metal:O.whiteTop,mt);for(let l=0;l<r;l++){let c=-t/2+a*(l+.5);if(l&&i.seg(-t/2+a*l,n*.06,e/2+.001,-t/2+a*l,n*.94,e/2+.001,Ot),!o)i.box(c-a*.34,c+a*.34,n*.16,n*.84,e/2,e/2+.006,O.white,O.whiteTop,Ot),i.seg(c-a*.3,n*.5,e/2+.007,c+a*.3,n*.5,e/2+.007,Ot);else if(s)i.box(c-a*.4,c+a*.4,n*.12,n*.9,e/2,e/2+.018,O.metal,O.metal,Ot),i.seg(c-a*.36,n*.86,e/2+.019,c+a*.36,n*.86,e/2+.019,Ot);else{let h=Math.min(a,n)*.34;i.lyingCyl("z",c,e/2+.002,n/2-h,n/2+h,.004,h*2,O.dark,O.dark,14,Ot),i.seg(c-h*.45,n/2,e/2+.0045,c-h*.45+.004,n/2,e/2+.0045,mt),i.seg(c+h*.45-.004,n/2,e/2+.0045,c+h*.45,n/2,e/2+.0045,mt)}}}function u2(i,t,e,n,r){if(r){i.box(-t/2,t/2,0,n,-e/2,e/2,O.white,O.whiteTop,mt);let s=Math.min(t,n)*.3;for(let a=0;a<20;a++){let l=a/20*Math.PI*2,c=(a+1)/20*Math.PI*2;i.seg(Math.cos(l)*s,n/2+Math.sin(l)*s,e/2+.002,Math.cos(c)*s,n/2+Math.sin(c)*s,e/2+.002,Ot)}return}let o=Math.min(t,e)/2;i.cyl(0,0,o,0,n,O.white,O.whiteTop,24,mt),i.cyl(0,0,o*.5,n,n+.01,O.metal,O.metal,12)}function h2(i,t,e,n,r){if(r){i.pad(-t/2,t/2,0,n,-e/2,e/2,O.white,O.whiteTop,.05,mt),i.box(-t*.18,t*.18,n*.8,n*.88,e/2,e/2+.006,O.dark);for(let s of[-t*.2,t*.2])i.cyl(s,0,.012,-.12,0,O.metal,O.metal,6);return}let o=Math.min(t,e)/2;i.cyl(0,0,o,.04,n-.05,O.white,O.whiteTop,20,mt),i.cyl(0,0,o*.85,n-.05,n,O.white,O.whiteTop,20);for(let s=0;s<3;s++){let a=s/3*Math.PI*2;i.cyl(Math.cos(a)*o*.7,Math.sin(a)*o*.7,.03,0,.04,O.dark,O.dark,6)}i.box(-o*.3,o*.3,n*.55,n*.65,o-.01,o+.01,O.dark)}function f2(i,t,e,n,r){let o=O.metal,s=kt(O.metal,1.25).getHex(),a=kt(O.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,O.wood,O.woodTop,Ot),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,o,s,mt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,o,s,14,mt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,O.dark,O.dark,Ot),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,o,s,12,Ot),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,o,s,mt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,O.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,mt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,s,Ot),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,O.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,mt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let h=-t/2+t/3*l+.015,u=n/2*c+.015;i.box(h,h+t/3-.03,u,u+n/2-.03,e/2,e/2+.01,a,s,Ot),i.box(h+.04,h+t/3-.07,u+n/2-.09,u+n/2-.07,e/2+.01,e/2+.014,O.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,o,s,mt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,o,s,mt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,O.dark)}function d2(i,t,e,n){let r=e/2-O0;i.box(-t/2,t/2,.02,n,-e/2,r,O.body,O.bodyTop,mt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,O.dark);for(let o of[.35,.7,1.05,1.4])o>n-.15||(i.seg(-t/2+.03,o,r+.001,-.03,o,r+.001,Ot),i.seg(.03,o,r+.001,t/2-.03,o,r+.001,Ot))}var O0=.06;function N0(i,t,e,n){Zs(t.colors,()=>p2(i,t,e,n))}function p2(i,t,e,n){let r=t.rotation*ee,o=Math.cos(r),s=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(R,P,F)=>[t.x+R*o-F*s,P,t.z+R*s+F*o],c=(R,P,F,D,U)=>{i.tri(R,P,F,U),i.tri(R,F,D,U),i.tri(R,F,P,U),i.tri(R,D,F,U)},h=(R,P,F,D)=>{let U=l(R[0],R[1],R[2]),k=l(P[0],P[1],P[2]),V=k[0]-U[0],X=k[1]-U[1],z=k[2]-U[2],$=Math.hypot(V,X,z)||1,j=[V/$,X/$,z/$],at=Math.abs(j[1])>.9?[1,0,0]:[0,1,0],H=[j[1]*at[2]-j[2]*at[1],j[2]*at[0]-j[0]*at[2],j[0]*at[1]-j[1]*at[0]],W=Math.hypot(H[0],H[1],H[2])||1,Q=[H[0]/W*F,H[1]/W*F,H[2]/W*F],ot=[j[1]*Q[2]-j[2]*Q[1],j[2]*Q[0]-j[0]*Q[2],j[0]*Q[1]-j[1]*Q[0]],et=[[1,1],[-1,1],[-1,-1],[1,-1]],ht=(gt,lt)=>[gt[0]+Q[0]*et[lt][0]+ot[0]*et[lt][1],gt[1]+Q[1]*et[lt][0]+ot[1]*et[lt][1],gt[2]+Q[2]*et[lt][0]+ot[2]*et[lt][1]];for(let gt=0;gt<4;gt++){let lt=(gt+1)%4;i.tri(ht(U,gt),ht(k,gt),ht(k,lt),D),i.tri(ht(U,gt),ht(k,lt),ht(U,lt),D)}},u=(R,P,F,D,U,k,V,X)=>{c(l(R,D,U),l(P,D,U),l(P,D,k),l(R,D,k),X),c(l(R,F,k),l(P,F,k),l(P,D,k),l(R,D,k),V),c(l(R,F,U),l(P,F,U),l(P,F,k),l(R,F,k),V),c(l(R,F,U),l(R,F,k),l(R,D,k),l(R,D,U),V),c(l(P,F,U),l(P,F,k),l(P,D,k),l(P,D,U),V)},f=new J(O.body),d=new J(O.bodyTop),p=new J(O.accent),b=O.fabric!==qs.fabric,g=new J(b?O.fabricTop:1929098),m=new J(b?O.fabric:995141),x=(R,P,F,D,U)=>{let k=(V,X,z)=>[V[0]+(X[0]-V[0])*z,V[1]+(X[1]-V[1])*z,V[2]+(X[2]-V[2])*z];for(let V=0;V<U;V++){let X=k(R,P,V/U),z=k(R,P,(V+1)/U),$=k(F,D,(V+1)/U),j=k(F,D,V/U);c(l(X[0],X[1],X[2]),l(z[0],z[1],z[2]),l($[0],$[1],$[2]),l(j[0],j[1],j[2]),V%2?g:m)}},y=t.w/2,v=-t.d/2,M=Math.max(.12,Math.min(.3,t.h)),S=Math.max(4,Math.round(t.w/.3)),E=(t.awning_pitch??12)*Math.PI/180,_=(R,P)=>{t.awning_valance!==!1&&x([-y+.04,R,P+.01],[y-.04,R,P+.01],[-y+.04,R-.2,P+.01],[y-.04,R-.2,P+.01],S)},A=t.variant??"arm";if(A==="side"){let R=e,P=.05,F=0,D=-y+.08+a*(t.w-.16);u(-y,-y+.1,0,R+.05,F-.05,F+.05,f,d),u(y-.06,y,0,R+.05,F-.03,F+.03,f,d),a>.01&&x([-y+.1,R,F],[-y+.1,P,F],[D,R,F],[D,P,F],Math.max(4,Math.round((R-P)/.3))),h([D,P,F],[D,R,F],.02,p);return}if(A==="vertical"){let R=v,P=Math.min(t.d/2,v+M);u(-y,y,e,e+M,R,P,f,d);let F=(R+P)/2;for(let U of[-y+.02,y-.02])h([U,.02,F],[U,e,F],.02,p);let D=e-a*Math.max(0,e-.04);a>.01&&x([-y+.04,e,F],[y-.04,e,F],[-y+.04,D,F],[y-.04,D,F],S),h([-y+.03,D,F],[y-.03,D,F],.025,p);return}if(A==="pergola"){let R=t.d/2-.05,P=e+M,F=P-(R-v)*Math.tan(E);u(-y,y,e,P,v,v+M,f,d);for(let k of[-y+.05,y-.05])h([k,P,v+M],[k,F,R],.035,p),h([k,0,R],[k,F,R],.045,f);h([-y+.05,F,R],[y-.05,F,R],.035,p);let D=v+M+a*(R-v-M),U=P-(D-v)*Math.tan(E)+.04;a>.01&&x([-y+.08,P+.04,v+M],[y-.08,P+.04,v+M],[-y+.08,U,D],[y-.08,U,D],S),h([-y+.08,U,D],[y-.08,U,D],.025,p);return}let T=v,w=v+M;u(-y,y,e,e+M,T,w,f,d);let C=[w-.02,e+M*.35];if(A==="drop"){let R=Math.max(.3,t.d-M),P=[w,C[1]-R],F=a*(Math.PI/2+E),D=[P[0]+Math.sin(F)*R,P[1]+Math.cos(F)*R];for(let U of[-y+.08,y-.08])h([U,P[1],P[0]],[U,D[1],D[0]],.018,p);a>.01&&x([-y+.04,C[1],C[0]],[y-.04,C[1],C[0]],[-y+.04,D[1],D[0]],[y-.04,D[1],D[0]],S),h([-y+.02,D[1],D[0]],[y-.02,D[1],D[0]],.03,p),a>.05&&_(D[1],D[0]);return}let N=Math.max(0,t.d-M)*a,L=[C[0]+N,C[1]-N*Math.tan(E)];if(N>.01){x([-y+.04,C[1],C[0]],[y-.04,C[1],C[0]],[-y+.04,L[1],L[0]],[y-.04,L[1],L[0]],S);let R=Math.max(.3,(t.d-M)/2+.05);for(let P of[-1,1]){let F=P*(y-.12),D=[F,e+.02,w-.04],U=[F,L[1]-.02,L[0]],k=Math.hypot(U[2]-D[2],U[1]-D[1]),V=Math.sqrt(Math.max(0,R*R-(k/2)**2)),X=[F-P*Math.min(V,y-.15),(D[1]+U[1])/2,(D[2]+U[2])/2];h(D,X,.018,p),h(X,U,.018,p)}}h([-y+.02,L[1],L[0]],[y-.02,L[1],L[0]],.03,p),N>.05&&_(L[1],L[0])}function U0(i,t,e,n,r){let o=i.p.length;Zs(t.colors,()=>m2(i,t,e,n,r)),t.mirror&&Tf(i,o)}function m2(i,t,e,n,r){let o=t.rotation*ee,s=Math.cos(o),a=Math.sin(o),l=t.mirror?-1:1,c=(v,M)=>[t.x+l*v*s-M*a,t.z+l*v*a+M*s],h=e+.05,u=e+t.h-.02,f=new J(.75,.1,.14),d=new J(O.dark),p=new J(O.accent),b=t.w/2-.006,g=(v,M,S)=>{let E=S/m,_=new J(O.body!==qs.body?O.bodyTop:2043212).lerp(f,E),A=new J(O.body).lerp(f,E*.8),T=Math.cos(S),w=Math.sin(S),C=(R,P)=>c(v+M*(R*T-P*w),t.d/2+R*w+P*T),N=(R,P,F,D)=>{let[U,k,V,X]=R;i.tri([U[0],P,U[1]],[k[0],P,k[1]],[V[0],F,V[1]],D),i.tri([U[0],P,U[1]],[V[0],F,V[1]],[X[0],F,X[1]],D)},L=(R,P,F,D,U,k,V,X=V)=>{let z=[C(R,k),C(P,k),C(P,U),C(R,U)];N([z[0],z[1],z[1],z[0]],F,D,X),N([z[3],z[2],z[2],z[3]],F,D,V),N([z[0],z[3],z[3],z[0]],F,D,V),N([z[1],z[2],z[2],z[1]],F,D,V),N([z[0],z[1],z[2],z[3]],D,D,V),N([z[3],z[2],z[1],z[0]],F,F,V)};return L(0,b,h,u,-O0,0,A,_),L(b-.05,b-.03,e+t.h*.45,e+t.h*.75,.005,.025,p),L},m=1.83;g(-t.w/2,1,n*m)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,r*m)(.06,b-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function g2(i,t,e,n){or(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.dark,O.dark,mt);for(let[r,o,s]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=o*e/.62;i.cyl(a,l,s,n,n+.004,O.dark,1451583,12,Qt)}}function b2(i,t,e,n){or(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,mt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,mt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,O.whiteTop,O.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,O.whiteTop,O.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,O.metal,O.metal,Qt),i.cyl(0,-e/2+.05,.02,n,n+.28,O.metal,O.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,O.metal)}function x2(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,O.white,O.whiteTop,mt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,O.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,O.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,O.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,O.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,O.glass,O.glass,Qt),i.cyl(-t/2+.04,0,.02,n,n+.12,O.metal,O.metal,8)}function v2(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,O.whiteTop,O.whiteTop,mt),i.cyl(0,0,.04,.05,.052,O.metal,O.metal,8);for(let[r,o,s,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,o,s,.05,a,Qt),i.seg(r,n,o,s,n,a,Qt),i.seg(s,.05,a,s,n,a,Qt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,O.metal,O.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,O.metal,O.metal,12,Qt)}function y2(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,O.white,O.whiteTop,mt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,O.white,O.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,O.white,O.whiteTop,12,mt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,O.whiteTop)}function _2(i,t,e,n){or(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,O.white,O.whiteTop,mt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,O.glass,O.glass,Qt),i.cyl(0,-e/2+.06,.018,n,n+.2,O.metal,O.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,O.glass,O.glass,Qt)}function M2(i,t,e,n){or(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),o=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,O.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,O.metal),i.box(-r/2,r/2,n+.1,n+.1+o,-e/2+.12,-e/2+.16,O.dark,O.dark,Qt)}function w2(i,t,e,n){let r=Math.min(t,e)/2,o=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,o,O.pot,O.pot,10,mt),i.cyl(0,0,r*.08,o,n*.55,O.wood,O.wood,6);let s=4;for(let a=0;a<s;a++){let l=a/(s-1),c=r*(.95-.55*l),h=o+(n-o)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-o)*.16,O.plant,O.plantTop,8,a===s-1?Ot:null)}}function S2(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,O.fabric,O.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,o,s,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,o,s,.014,a,mt)}var T2=3,P0=.045;function E2(i,t,e,n,r=!1,o=null,s=0,a=0){let l=Math.max(3,Math.round(n/.18)),c=n/l,h=e>t+.3,u=h&&s>0?Math.min(s,l-1):0,f=!u&&o&&h?T2:0,d=u||f,p=e/2-(d?t:0),b=Math.max(0,Math.min(a,e-.2*(l-d))),g=(p+e/2-b)/(l-d),m=E=>r?Math.max(0,E-P0):0;if(u){let E=c*u;i.box(-t/2,t/2,0,E,p,e/2,O.wood,O.woodTop,mt)}if(f){let E=o==="right"?-1:1,_=[-E*(t/2),p],A=T=>T<=t?[-E*(t/2)+E*T,e/2]:[E*(t/2),e/2-(T-t)];for(let T=0;T<f;T++){let w=2*t*T/f,C=2*t*(T+1)/f,N=[_,A(w)];w<t&&C>t&&N.push(A(t)),N.push(A(C));let L=c*(T+1);i.prism(N,m(L),L,O.wood,O.woodTop,mt)}}for(let E=d;E<l;E++){let _=p-g*(E-d),A=E===l-1&&b>0?-e/2:_-g,T=c*(E+1);i.box(-t/2,t/2,m(T),T,A,_,O.wood,O.woodTop),i.seg(-t/2,T,_,t/2,T,_,mt)}d||i.seg(-t/2,0,e/2,-t/2,c,e/2,mt);let x=c*(d+1);for(let E of[-t/2,t/2])i.seg(E,x,p,E,n,-e/2+g,Ot);if(r)for(let E=d;E<l;E++){let _=p-g*(E-d),A=c*(E+1);for(let T of[-t/2,t/2-.035])i.box(T,T+.035,Math.max(0,A-.28),A-P0,_-g,_,O.wood,O.woodTop)}let y=.9,v=t/2-.03,M=Math.max(d+1,l-4),S=E=>p-g*(E-d+.5);i.seg(v,c*(d+1)+y,S(d),v,c*M+y,S(M-1),Qt);for(let E=d;E<M;E+=3){let _=c*(E+1);i.seg(v,_,S(E),v,_+y,S(E),Ot)}}var A2=72;function R2(i,t,e,n){let r=-e/2,o=e/2,s=.05;i.box(-t/2,t/2,n-.03,n,r,r+s,O.white,O.whiteTop,mt),i.box(-t/2,t/2,n-.03,n,o-s,o,O.white,O.whiteTop,mt),i.box(-t/2,-t/2+s,n-.03,n,r+s,o-s,O.white,O.whiteTop,mt),i.box(t/2-s,t/2,n-.03,n,r+s,o-s,O.white,O.whiteTop,mt);let a=Math.min(e-2*s,n-.3);i.box(-t/2+s,t/2-s,n-a,n-.03,r,r+.035,O.white,O.whiteTop,mt);let l=Math.max(.12,t/2-.1),c=r+.06,h=Math.min(o,c+n/Math.tan(A2*ee)),u=.03;for(let d of[-l,l-.04])i.loft([d,d+.04,h-u,h],[d,d+.04,c,c+u],0,n-.03,O.metal,O.metal,mt);let f=Math.max(2,Math.round(n/.25));for(let d=1;d<f;d++){let p=n*d/f,b=h+(c-h)*d/f;i.box(-l,l,p-.015,p+.015,b-.06,b+.02,O.metal,O.metal)}}function P2(i,t,e,n){let{k:r,steps1:o,steps2:s,fw:a,landing:l,run:c,rise:h}=Cm(t,e,n),u=-t/2,f=-t/2+a,d=t/2-a,p=t/2,b=-e/2+l;for(let E=0;E<o;E++){let _=e/2-c*E,A=h*(E+1);i.box(u,f,0,A,_-c,_,O.wood,O.woodTop),i.seg(u,A,_,f,A,_,mt)}i.seg(u,0,e/2,u,h,e/2,mt);let g=h*r,m=.2;i.box(u,f,0,g,-e/2,b,O.wood,O.woodTop),i.box(f,p,Math.max(0,g-m),g,-e/2,b,O.wood,O.woodTop),i.seg(u,g,b,f,g,b,mt);for(let E=0;E<s;E++){let _=b+c*E,A=h*(r+1+E);i.box(d,p,Math.max(0,A-h-m),A,_,_+c,O.wood,O.woodTop),i.seg(d,A,_,p,A,_,mt)}i.seg(u,h,e/2,u,g,b,Ot),i.seg(p,g,b,p,n,b+c*(s-1),Ot);let x=.9,y=f-.03,v=d+.03,M=b-.03,S=Math.max(1,s-4);i.seg(y,h+x,e/2-c/2,y,g+x,M,Qt),i.seg(y,g+x,M,v,g+x,M,Qt),i.seg(v,g+x,M,v,h*(r+S)+x,b+c*(S-.5),Qt);for(let E=0;E<o;E+=3){let _=e/2-c*(E+.5);i.seg(y,h*(E+1),_,y,h*(E+1)+x,_,Ot)}for(let E of[y,v])i.seg(E,g,M,E,g+x,M,Ot);for(let E=2;E<S;E+=3){let _=b+c*(E+.5);i.seg(v,h*(r+1+E),_,v,h*(r+1+E)+x,_,Ot)}}function C2(i,t,e,n){Ur(i,t,e,.12,.03,.04,O.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,O.wood,O.woodTop,mt),$s(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function I2(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,O.wood,O.woodTop,mt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,O.dark);let r=Math.max(3,Math.round((n-.06)/.22)),o=e/2-.02;for(let s=1;s<r;s++){let a=.06+(n-.06)/r*s;i.seg(-t/2,a,o,t/2,a,o,Ot)}for(let s=0;s<r;s++){let a=.06+(n-.06)/r*(s+.5);i.seg(-.08,a,o+.012,.08,a,o+.012,Qt)}}function L2(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,O.wood,O.woodTop,mt),$s(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,O.body,O.bodyTop,mt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.wood,O.woodTop,mt);let r=Math.max(2,Math.round(t/.25));for(let o=0;o<r;o++){let s=-t/2+t/r*(o+.5);i.box(s-.015,s+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,O.metal,O.metal)}}function C0(i,t,e,n,r){let s=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+s,O.wood,O.woodTop,mt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,O.wood,O.woodTop,mt),i.box(-t/2+(r?s:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+s,O.cushion,O.cushion,Ot),r&&(i.box(-t/2,-t/2+s,0,.45-.06,-e/2+s,e/2,O.wood,O.woodTop,mt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,O.wood,O.woodTop,mt),i.box(-t/2+a,-t/2+s,.45-.06,.45+.02,-e/2+a,e/2-.02,O.cushion,O.cushion,Ot))}function F2(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,O.metal,O.metal,12),i.cyl(0,0,.025,.02,n-.05,O.metal,O.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,O.metal,O.metal,12,Ot),i.cyl(0,0,r,n-.05,n,O.cushion,O.fabricTop,14,mt)}function D2(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,O.metal),i.box(-.03,.03,.04,.08,-r,r,O.metal),i.cyl(0,0,.06,.02,.1,O.dark,O.dark,8),i.cyl(0,0,.025,.1,.44,O.metal,O.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,O.fabric,O.cushion,mt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,O.fabric,O.fabricTop,mt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,O.metal)}function O2(i,t,e,n){Ur(i,t,e,.08,.04,.05,O.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,O.fabric,O.cushion,mt)}function N2(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,O.body,O.bodyTop,mt),$s(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function U2(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,O.body,O.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,O.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,O.dark,O.dark,Qt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,Qt);for(let o of[.85,1.45])i.seg(-t/2,o,r,t/2,o,r,Ot);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,Qt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,Qt)}function B2(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,O.body,O.bodyTop,mt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,O.dark),$s(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,mt)}function k2(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,O.body,O.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,O.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,Qt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,mt)}function I0(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,O.white,O.whiteTop,mt);let o=e/2-.012;i.seg(-t/2,n-.14,o,t/2,n-.14,o,Ot),i.seg(t/2-.16,n-.07,o,t/2-.08,n-.07,o,Qt);let s=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,s+Math.sin(h)*a,o,Math.cos(u)*a,s+Math.sin(u)*a,o,Qt),r||i.seg(Math.cos(h)*a*.72,s+Math.sin(h)*a*.72,o,Math.cos(u)*a*.72,s+Math.sin(u)*a*.72,o,Ot)}}function z2(i,t,e,n){for(let s of[-1,1])for(let a of[-1,1])i.box(s*(t/2)-(s>0?.05:0),s*(t/2)+(s<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),O.wood,O.woodTop);for(let s of[.25,n-.55])i.box(-t/2,t/2,s,s+.08,-e/2,e/2,O.wood,O.woodTop,mt),i.box(-t/2+.04,t/2-.04,s+.08,s+.24,-e/2+.05,e/2-.05,O.white,O.whiteTop,Ot),i.box(-t/2+.05,t/2-.05,s+.24,s+.33,-e/2+.08,-e/2+.4,O.whiteTop,O.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,O.wood,O.woodTop);let o=t/2-.35;for(let s of[o-.18,o+.18])i.seg(s,0,e/2+.02,s,n-.15,e/2+.02,mt);for(let s=.3;s<n-.2;s+=.28)i.seg(o-.18,s,e/2+.02,o+.18,s,e/2+.02,Ot)}function V2(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,O.metal,O.metal,12),i.cyl(0,0,.05,.03,n-.04,O.wood,O.wood,8),i.cyl(0,0,r,n-.04,n,O.wood,O.woodTop,20,mt)}function G2(i,t,e,n){Ur(i,t,e,n-.03,.04,.03,O.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,O.wood,O.woodTop,mt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,O.body,O.bodyTop,Ot)}function H2(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,O.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,O.dark,O.dark,Qt)}function W2(i,t,e,n){let r=wf;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,O.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,O.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,O.white,O.whiteTop,mt);let o=Math.max(3,Math.round(t/.1));for(let s=1;s<o;s++){let a=-t/2+t/o*s;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Ot)}}function X2(i,t,e,n){let r=Sf;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,O.white,O.whiteTop,mt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,O.white,O.white,mt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,O.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Ot),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,Qt)}function Go(i,t,e,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,Qt)}}function Y2(i,t,e,n,r){let s=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,O.dark,O.body,mt),i.seg(-t*.25,1.1+n*.15,s+.004,-t*.25,1.1+n*.85,s+.004,Qt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,s,s+.005,O.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,O.white,O.whiteTop,mt),Go(i,0,1.1+n*.66,Math.min(t,n)*.22,s+.004),i.seg(-t*.08,1.1+n*.66,s+.005,t*.08,1.1+n*.66,s+.005,Qt);for(let a of[-1,1])Go(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,O.white,O.whiteTop,mt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,O.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,Qt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Ot)}function q2(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,O.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,O.metal,O.metal,mt);for(let s of[-t*.4,-t*.25,-t*.1])i.seg(s,.05+r*2+.003,-r,s,.05+r*2+.003,r,Ot);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,O.dark,O.body,14,mt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,O.glass,O.glass,14);let o=Math.min(t*.2,e*.45)*.95;for(let s=0;s<16;s++){let a=s/16*Math.PI*2,l=(s+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*o,n*.83,Math.sin(a)*o,t*.28+Math.cos(l)*o,n*.83,Math.sin(l)*o,Qt)}}function $2(i,t,e,n,r){let o=Math.min(t,e)/2;if(i.cyl(0,0,o*.95,0,n*.08,O.dark,O.dark,16),i.cyl(0,0,o,n*.08,n*.78,O.dark,O.body,18,mt),i.cyl(0,0,o*.75,n*.78,n*.84,O.dark,O.body,16),r==="side6"){let a=o*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,O.dark,O.metal,mt),Go(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,O.dark,O.body);return}i.cyl(0,0,o*.45,n*.84,n*.95,O.dark,O.metal,16,mt);let s=o*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*s,n*.955,Math.sin(l)*s,Math.cos(c)*s,n*.955,Math.sin(c)*s,Qt)}i.box(-.02,.02,n*.95,n,-o*.35,o*.35,O.dark,O.body)}function Z2(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,O.white,O.whiteTop,mt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,O.dark);let r=Math.min(n*.38,t*.3),o=-t*.15,s=n*.53;Go(i,o,s,r,e/2+.004,24),Go(i,o,s,r*.55,e/2+.004,16),i.seg(o-r,s,e/2+.005,o+r,s,e/2+.005,Ot),i.seg(o,s-r,e/2+.005,o,s+r,e/2+.005,Ot),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,O.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,Qt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Ot)}function K2(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,O.white,O.whiteTop,mt);for(let o of[-1,1])Go(i,o*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,Qt);for(let o of[-1,1])i.box(o*t*.25-t*.18,o*t*.25+t*.18,0,n*.5,-e/2,e/2,O.white,O.glass,Ot)}function J2(i,t,e,n){let r=Am-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,O.metal,O.metal,mt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,O.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,O.accent,O.accent)}function j2(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,O.dark,O.body,mt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,O.dark,O.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,Qt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Ot)}function Q2(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,O.dark,O.body,mt);let o=Math.min(t,n)*.28,s=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*o,s+Math.sin(c)*o,e/2+.003,Math.cos(h)*o,s+Math.sin(h)*o,e/2+.003,Qt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,O.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,O.dark,O.body)}function tw(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,O.white,O.whiteTop,mt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Ot),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Ot),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,O.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,O.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,Qt)}function ew(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,O.white,O.whiteTop,mt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,Qt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Ot);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,O.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,O.dark,O.body,mt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,Qt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,O.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,O.dark);let o=Math.max(2,Math.round((n-.06)/.3)),s=(n-.06)/o;for(let a=0;a<o;a++)i.box(-t/2,t/2,.06+a*s+.004,.06+(a+1)*s,-e/2,e/2,O.white,O.whiteTop,mt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,Qt)}}var wf=.12,Sf=2.05;function B0(i,t,e){let n=Math.min(.04,.08*Math.min(i,t)),r=Math.min(i-n,(t-n)*e);return{w:r,h:r/e}}function Ef(i,t){let e=nw(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function nw(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),o=bm(i.type);if(o){let l=t?sn(t,i):0,c=(o.x-o.w/2)*e,h=(o.x+o.w/2)*e,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+o.y*r+u,y1:l+(o.y+o.h)*r-u,z:(o.z+o.d/2)*n}}let s=t&&i.type!=="fridge_smart"?sn(t,i)-Ar(i):0,a=iw(i,e,n,r,t);return a?{...a,y0:a.y0+s,y1:a.y1+s}:null}function iw(i,t,e,n,r){if(i.type==="pool_pump"){let o=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+o*2,z:o+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let o=Math.min(t,e)/2;return{x0:-o*.4,x1:o*.4,y0:n*.85,y1:n*.94,z:o*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let o=Math.min(t*.8,1.45),s=o*.56;return{x0:-o/2+.02,x1:o/2-.02,y0:n+.12,y1:n+.08+s,z:-e/2+.165}}if(i.type==="tv_wall"){let o=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:o+.02,y1:o+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let o=r?sn(r,i):0;return{x0:.06,x1:t/2-.06,y0:o+n*.52+.01,y1:o+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:wf+.02,y1:wf+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:Sf+.015,y1:Sf+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let o=(n-.14)/2+.04,s=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-s,x1:s,y0:o-s,y1:o+s,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function rw(i){if(i.type==="table_round"||i.type==="plant")return!0;let t=be(i.type);if(!t?.parts.length)return!1;let e=t.parts.reduce((r,o)=>o.w*o.d>r.w*r.d?o:r,t.parts[0]);return(e.shape==="cyl"&&(e.axis??"y")==="y"||e.shape==="sphere"||e.shape==="lathe")&&e.w>=.85&&e.d>=.85}function ow(i,t,e,n,r,o=!1,s=0){let a=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),l=new J(1-r,1-r,1-r),c=new J(1,1,1),h=s+.003;if(o){let b=v=>[v[0],h,v[1]],m=(v,M,S)=>t(Math.cos(v/24*2*Math.PI)*M,Math.sin(v/24*2*Math.PI)*S),x=i.p.length,y=b(t(0,0));for(let v=0;v<24;v++){let M=b(m(v,e/2,n/2)),S=b(m(v+1,e/2,n/2)),E=b(m(v,e/2+a,n/2+a)),_=b(m(v+1,e/2+a,n/2+a));i.tri(y,M,S,l),i.tri(M,E,_,l,c,c),i.tri(M,_,S,l,c,l)}Mf(t)&&Tf(i,x);return}let u=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-a,-n/2-a),t(e/2+a,-n/2-a),t(e/2+a,n/2+a),t(-e/2-a,n/2+a)],d=b=>[b[0],h,b[1]],p=i.p.length;i.tri(d(u[0]),d(u[1]),d(u[2]),l),i.tri(d(u[0]),d(u[2]),d(u[3]),l);for(let b=0;b<4;b++){let g=(b+1)%4;i.tri(d(u[b]),d(f[b]),d(f[g]),l,c,c),i.tri(d(u[b]),d(f[g]),d(u[g]),l,c,l)}Mf(t)&&Tf(i,p)}function Wc(i,t,e,n,r=0,o=!1){Zs(n.colors,()=>sw(i,t,e,n,r,o))}function Tf(i,t){let e=(n,r,o)=>{if(n)for(let s=0;s<o;s++){let a=r+o+s,l=r+2*o+s,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function sw(i,t,e,n,r,o=!1){let s=be(n.type)?0:r-Ar(n);if(be(n.type)||Math.abs(s)<.001)return L0(i,t,e,n,r,o);let a=i.p.length,l=t.p.length,c=e.p.length;L0(i,t,r<.05?e:new jt,n,0);for(let h=a+1;h<i.p.length;h+=3)i.p[h]+=s;for(let h=l+1;h<t.p.length;h+=3)t.p[h]+=s;if(r<0)for(let h=c+1;h<e.p.length;h+=3)e.p[h]+=s}function L0(i,t,e,n,r,o=!1){let s=n.rotation*ee,a=Math.cos(s),l=Math.sin(s),c=n.mirror?-1:1,h=(b,g)=>[n.x+c*b*a-g*l,n.z+c*b*l+g*a],u=new sr(i,t,h),f=Math.max(.05,n.w),d=Math.max(.05,n.d),p=Math.max(.005,n.h);switch(n.type){case"sofa":A0(u,f,d,p,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":A0(u,f,d,p,1);break;case"sofa_l":R0(u,f,d,p,!1);break;case"sofa_u":R0(u,f,d,p,!0);break;case"bed":t2(u,f,d,p);break;case"chair":e2(u,f,d,p);break;case"table":n2(u,f,d,p);break;case"desk":i2(u,f,d,p);break;case"nightstand":or(u,f,d,p,1,p*.72,!0),u.seg(-f/2,p*.5,d/2-.02,f/2,p*.5,d/2-.02,Ot);break;case"wardrobe":or(u,f,d,p,Math.max(2,Math.round(f/.5)),p*.5);break;case"shelf":r2(u,f,d,p);break;case"kitchen":o2(u,f,d,p);break;case"fridge":s2(u,f,d,p);break;case"fridge_smart":d2(u,f,d,p);break;case"waste_bin":{let b=i.c.length;l2(u,f,d,p,u0(n),p0(n,d0())),Nr&&D0(i.c,b);break}case"mailbox":{let b=i.p.length,g=t.p.length;f2(u,f,d,p,h0(n));let m=Ar(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=m;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=m;if(m>0)return;break}case"wifi_ap":u2(u,f,d,p,n.variant==="wall");return;case"water_heater":if(h2(u,f,d,p,n.variant==="wall"),n.variant==="wall")return;break;case"wall_switch":case"wall_socket":{let b=i.p.length,g=t.p.length;c2(u,f,d,p,Lm(n).length,n.type==="wall_socket",n.variant==="outdoor");let m=Ar(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=m;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=m;return}case"awning":return;case"stove":g2(u,f,d,p);break;case"sink":b2(u,f,d,p);break;case"bathtub":x2(u,f,d,p);break;case"shower":v2(u,f,d,p);break;case"wc":y2(u,f,d,p);break;case"washbasin":_2(u,f,d,p);break;case"tv_board":M2(u,f,d,p);break;case"plant":w2(u,f,d,p);break;case"rug":S2(u,f,d);return;case"stairs":E2(u,f,d,p,!!n.stair_open,n.stair_turn??null,n.stair_landing??0,n.stair_top??0);break;case"stairs_u":P2(u,f,d,p);break;case"stairwell":return;case"loft_ladder":R2(u,f,d,p);break;case"sideboard":C2(u,f,d,p);break;case"dresser":I2(u,f,d,p);break;case"tall_cabinet":or(u,f,d,p,1,p*.5);break;case"coat_rack":L2(u,f,d,p);break;case"bench":C0(u,f,d,p,!1);break;case"corner_bench":C0(u,f,d,p,!0);break;case"bar_stool":F2(u,f,d,p);break;case"office_chair":D2(u,f,d,p);break;case"stool":O2(u,f,d,p);break;case"kitchen_wall":N2(u,f,d,p);return;case"kitchen_tall":U2(u,f,d,p);break;case"island":B2(u,f,d,p);break;case"worktop":u.box(-f/2,f/2,Math.max(0,p-.04),p,-d/2,d/2,O.whiteTop,O.whiteTop,mt);return;case"dishwasher":k2(u,f,d,p);break;case"washer":I0(u,f,d,p,!1);break;case"dryer":I0(u,f,d,p,!0);break;case"bunk_bed":z2(u,f,d,p);break;case"table_round":V2(u,f,d,p);break;case"coffee_table":G2(u,f,d,p);break;case"tv_wall":H2(u,f,d,p);return;case"parking":{let g=[[-f/2,-d/2],[f/2,-d/2],[f/2,d/2],[-f/2,d/2]];for(let m=0;m<4;m++)u.seg(g[m][0],.012,g[m][1],g[(m+1)%4][0],.012,g[(m+1)%4][1],Ot);u.seg(-f*.15,.012,d/2-.45,0,.012,d/2-.2,mt),u.seg(0,.012,d/2-.2,f*.15,.012,d/2-.45,mt);return}case"robot_vacuum":u.box(-f*.45,f*.45,0,p,-d/2,-d/2+d*.3,O.white,O.whiteTop,mt),u.box(-f*.2,f*.2,p*.5,p*.62,-d/2+d*.3,-d/2+d*.31,O.accent);return;case"radiator":W2(u,f,d,p);return;case"ac_unit":X2(u,f,d,p);return;case"inverter":Y2(u,f,d,p,n.variant??null);return;case"grid_point":j2(u,f,d,p);break;case"wallbox":Q2(u,f,d,p);return;case"pool_pump":q2(u,f,d,p);break;case"pool_filter":$2(u,f,d,p,n.variant??null);break;case"pool_heat_pump":Z2(u,f,d,p);break;case"pool_dosing":K2(u,f,d,p);break;case"pool_valve":J2(u,f,d,p);return;case"meter":tw(u,f,d,p);return;case"home_battery":if(ew(u,f,d,p,n.variant??null),n.variant==="wall")return;break;default:{let b=be(n.type);if(b){let g=wc(n.type),m=g?x=>qh(g,x):mm(n.type)&&!o?Vs:null;if(Ks(u,b,f,d,p,r,null,null,m),r>.05)return}else u.box(-f/2,f/2,0,p,-d/2,d/2,O.body,O.bodyTop,mt)}}ow(e,h,f,d,n.type==="plant"?.35:.5,rw(n),Math.min(0,r))}function aw(i){return!!be(i)?.parts.some(t=>t.color?.startsWith("#")||t.top?.startsWith("#"))}function k0(i){return i.type==="waste_bin"||aw(i.type)||zc.some(t=>xf(i.colors,t))}function _f(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=O;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Ks(i,t,e,n,r,o,s,a=null,l=null){let c=!!a;for(let h of kc(t,e,n,r)){if(l?.(h)||a&&!a(h))continue;let u=c?{...h,glow:!0,w:h.w+.006/e,d:h.d+.006/n,y:Math.max(0,h.y-.002/r),h:h.h+.004/r}:h,f=u.glow&&s!==null,d=f?s:_f(u.color,!1)??O.body,p=f?s:_f(u.top,!1)??_f(u.color,!0)??kt(d,1.25).getHex(),b=o+u.y*r,g=o+Math.min(r,(u.y+u.h)*r),m=i.colors.length,x=u.edges==="glow"?ir:u.edges==="faint"?Ot:u.edges?mt:null,y=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))y.lyingCyl(u.axis,u.x*e,u.z*n,b,g,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,d,p,14,x);else if(u.shape==="cyl")y.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,b,g,d,p,14,x);else if(u.shape==="sphere")y.rings(S0(u.x*e,u.z*n,u.w*e/2,u.d*n/2,b,g),d,p,x);else if(u.shape==="lathe")y.rings(T0(u.x*e,u.z*n,u.w*e/2,u.d*n/2,b,g,u.profile??[[1,0],[1,1]]),d,p,x);else if(u.shape==="rbox"){let v=(u.round??.2)*Math.min(u.w*e,u.d*n,g-b);y.rings(E0((u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n,b,g,v),d,p,x)}else if(u.shape==="loft"){let v=u.tx??u.x,M=u.tz??u.z,S=u.tw??u.w,E=u.td??u.d;y.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(v-S/2)*e,(v+S/2)*e,(M-E/2)*n,(M+E/2)*n],b,g,d,p,x)}else y.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,b,g,(u.z-u.d/2)*n,(u.z+u.d/2)*n,d,p,x);Nr&&!f&&!c&&(u.color?.startsWith("#")||u.top?.startsWith("#"))&&D0(i.colors,m)}}function z0(i,t,e,n,r,o){let s=o*ee,a=Math.cos(s),l=Math.sin(s),c=(p,b)=>[e+p*a-b*l,r+p*l+b*a],h=new sr(i,new Ne,c),u=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),h.cyl(0,0,.012,n-.075,n-.06,O.accent,O.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,O.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function V0(i,t,e,n,r){let o=gm(t)*n,s=new sr(i,new Ne,(c,h)=>[c,h-o]);Ks(s,t,Math.max(.05,e),Math.max(.05,n),Math.max(.005,r),0,null,Vs);let a=0,l=0;for(let c of kc(t,e,n,r)){if(!Vs(c))continue;let h=Math.min(c.w*e,c.d*n)/2;c.shape==="cyl"&&h>a&&(a=h),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function Ho(i,t,e,n,r,o=s=>!!s.glow){let s=e.rotation*ee,a=Math.cos(s),l=Math.sin(s),c=e.mirror?-1:1,h=(u,f)=>[e.x+c*u*a-f*l,e.z+c*u*l+f*a];Ks(new sr(i,new Ne,h),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,o)}function G0(i,t,e,n,r,o){let s=lw(t,e,o,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*ee,l=Math.cos(a),c=Math.sin(a),h=n.mirror?-1:1,u=(f,d)=>[n.x+h*f*l-d*c,n.z+h*f*c+d*l];Zs(n.colors,()=>Ks(new sr(i,new Ne,u),{...t,parts:s},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null))}function lw(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),o=i.parts.filter(a=>qh(t,a)),s;if(t==="curtain")s=o.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else if(t==="blind"){let a=Math.max(.02,1-r),l=1-a;s=o.map(c=>{let h=(u,f)=>u+((f??u)-u)*l;return{...c,y:c.y+c.h*l,h:c.h*a,x:h(c.x,c.tx),z:h(c.z,c.tz),w:h(c.w,c.tw),d:h(c.d,c.td)}})}else{let a=Math.max(...o.map(c=>c.y+c.h)),l=Math.max(.02,1-r);s=o.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return s}function H0(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),o=Math.max(.005,t.h),s=0,a=0,l=0,c=0;for(let g of kc(i,n,r,o)){if(!g.glow)continue;let m=(g.x+(g.shape==="loft"?g.tx??g.x:g.x))/2*n,x=(g.z+(g.shape==="loft"?g.tz??g.z:g.z))/2*r,y=g.y*o,v=Math.min(o,(g.y+g.h)*o),M=Math.max(1e-6,g.w*n*g.d*r*Math.max(0,v-y));s+=M,a+=m*M,l+=(y+v)/2*M,c+=x*M}if(!s)return null;let h=a/s,u=c/s,f=t.rotation*ee,d=Math.cos(f),p=Math.sin(f),b=t.mirror?-1:1;return[t.x+b*h*d-u*p,e+l/s,t.z+b*h*p+u*d]}function Xc(i,t,e,n,r){let o=e.rotation*ee,s=Math.cos(o),a=Math.sin(o),l=e.mirror?-1:1,c=(h,u)=>[e.x+l*h*s-u*a,e.z+l*h*a+u*s];Zs(e.colors,()=>Ks(new sr(i,new Ne,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r))}var cw={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function uw(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],o=e[1]-t[1],s=Math.hypot(r,o)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let h=a.points[(c+1)%a.points.length],u=h[0]-l[0],f=h[1]-l[1],d=Math.hypot(u,f)||1;if(Math.abs((r*f-o*u)/(s*d))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+u*p-n[0],l[1]+f*p-n[1])<.4}))}function X0(i,t){return t.type==="pool"?Pc(i,t):Rr(i,t)+(Zn(t.type)?.01:Fo[t.type])}function Js(i){return Rn(i)>=0?i:[...i].reverse()}function hw(i,t){let e=i[t];if(Zn(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let o=i[r];r===t||!(o.cut&&r>t||o.type==="pool")||o.points.length<3||o.points.every(s=>Zt(s,e.points))&&n.push(Js(o.points))}return n}function W0(i,t,e,n,r,o,s,a,l=0){let c=e[0]-t[0],h=e[1]-t[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Ie(i,Js([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,o,s,a,{aoFrom:r-1});return}let p=(v,M)=>[t[0]+f*M,v,t[1]+d*M],b=(v,M)=>[e[0]+f*M,v+l,e[1]+d*M],g=(v,M)=>{i.tri(v[0],v[1],v[2],M,M,M,void 0,Jt),i.tri(v[0],v[2],v[3],M,M,M,void 0,Jt),i.tri(v[0],v[2],v[1],M,M,M,void 0,Jt),i.tri(v[0],v[3],v[2],M,M,M,void 0,Jt)},m=new J(a),x=new J(kt(s,.9)),y=new J(kt(s,.6));g([p(o,1),b(o,1),b(o,-1),p(o,-1)],m),g([p(r,1),b(r,1),b(r,-1),p(r,-1)],y),g([p(r,1),b(r,1),b(o,1),p(o,1)],x),g([p(r,-1),b(r,-1),b(o,-1),p(o,-1)],x),g([p(r,1),p(r,-1),p(o,-1),p(o,1)],x),g([b(r,1),b(r,-1),b(o,-1),b(o,1)],x)}function Y0(i,t,e,n){let r=e.outdoor??[];r.forEach((o,s)=>{if(o.points.length<3)return;let a=Rr(e,o),l=(x,y)=>a-Gs(e,o,x,y),c=a-(o.type==="pool"?0:o.slope??0),h=Zn(o.type)&&o.height?o.height:Fo[o.type],u={...cw[o.type],top:h},f=Js(o.points),d=kt(u.edge,u.edgeAlpha),p=o.open&&(o.type==="fence"||o.type==="pergola")?f.length-1:-1,b=x=>{if(o.outline!==!1)for(let y=0;y<f.length;y++){if(y===p)continue;let v=f[y],M=f[(y+1)%f.length];t.seg([v[0],x(v[0],v[1]),v[1]],[M[0],x(M[0],M[1]),M[1]],d,Jt)}},g=n??i,m=new J(n?1734832:u.color);switch(o.type){case"pool":{let x=new J(u.side),y=new J(kt(u.side,.55)),v=new J(932440),M=Pc(e,o),S=Rc(e,o),E=Tm(e,o);for(let[_,A,T]of gn(f)){let w=f[_],C=f[A],N=f[T];(n?g:i).tri([w[0],M,w[1]],[N[0],M,N[1]],[C[0],M,C[1]],m,m,m,void 0,Jt),i.tri([w[0],E,w[1]],[N[0],E,N[1]],[C[0],E,C[1]],v,v,v,void 0,Jt)}for(let _=0;_<f.length;_++){let A=f[_],T=f[(_+1)%f.length];i.tri([T[0],E,T[1]],[T[0],S,T[1]],[A[0],S,A[1]],y,x,x,void 0,Jt),i.tri([T[0],E,T[1]],[A[0],S,A[1]],[A[0],E,A[1]],y,x,y,void 0,Jt)}if(!o.above&&Kh(e,o)){let _=new J(660258),A=new J(396054),T=E-.2,w=Math.min(a,S);for(let C=0;C<f.length;C++){let N=f[C],L=f[(C+1)%f.length];i.tri([N[0],T,N[1]],[N[0],w,N[1]],[L[0],w,L[1]],A,_,_,void 0,Jt),i.tri([N[0],T,N[1]],[L[0],w,L[1]],[L[0],T,L[1]],A,_,A,void 0,Jt)}for(let[C,N,L]of gn(f)){let R=f[C],P=f[N],F=f[L];i.tri([R[0],T,R[1]],[P[0],T,P[1]],[F[0],T,F[1]],A,A,A,void 0,Jt)}if(o.outline!==!1)for(let C=0;C<f.length;C++){let N=f[C],L=f[(C+1)%f.length];t.seg([N[0],T,N[1]],[L[0],T,L[1]],kt(u.edge,u.edgeAlpha*.35),Jt),t.seg([N[0],T,N[1]],[N[0],w,N[1]],kt(u.edge,u.edgeAlpha*.25),Jt)}}if(S>a+.02){let _=new J(2044240),A=new J(1187123);for(let T=0;T<f.length;T++){let w=f[T],C=f[(T+1)%f.length];i.tri([w[0],a,w[1]],[w[0],S,w[1]],[C[0],S,C[1]],A,_,_,void 0,Jt),i.tri([w[0],a,w[1]],[C[0],S,C[1]],[C[0],a,C[1]],A,_,A,void 0,Jt)}b(()=>a+.005)}if(b(()=>S),b(()=>M+.005),o.outline!==!1)for(let _=0;_<f.length;_++){let A=f[_],T=f[(_+1)%f.length];t.seg([A[0],E+.005,A[1]],[T[0],E+.005,T[1]],kt(u.edge,u.edgeAlpha*.4),Jt)}break}case"fence":{for(let x=0;x<f.length;x++){if(x===p)continue;let y=f[x],v=f[(x+1)%f.length],M=Math.hypot(v[0]-y[0],v[1]-y[1]),S=Math.max(1,Math.round(M/2)),E=p>=0&&x===p-1?S:S-1;for(let _=0;_<=E;_++){let A=_/S,T=y[0]+(v[0]-y[0])*A,w=y[1]+(v[1]-y[1])*A,C=l(T,w);Ie(i,Js([[T-.04,w-.04],[T+.04,w-.04],[T+.04,w+.04],[T-.04,w+.04]]),C,C+u.top,u.side,u.color)}for(let _ of[.35,.85])t.seg([y[0],l(y[0],y[1])+_*u.top,y[1]],[v[0],l(v[0],v[1])+_*u.top,v[1]],d,Jt)}break}case"pergola":{let x=u.top;for(let[y,v]of f){let M=l(y,v);Ie(i,Js([[y-.06,v-.06],[y+.06,v-.06],[y+.06,v+.06],[y-.06,v+.06]]),M,M+x,u.side,u.color)}for(let y=0;y<f.length;y++){if(y===p)continue;let v=f[y],M=f[(y+1)%f.length],S=l(v[0],v[1])+x;if(W0(i,v,M,.12,S-.16,S,u.side,u.color,l(M[0],M[1])-l(v[0],v[1])),o.bracing){let E=l(v[0],v[1]),_=l(M[0],M[1]);t.seg([v[0],E+.25,v[1]],[M[0],_+x-.25,M[1]],d,Jt),t.seg([M[0],_+.25,M[1]],[v[0],E+x-.25,v[1]],d,Jt)}}if(Om(f)){let y=Nm(f),v=y.x1-y.x0,M=y.z1-y.z0,S=v>=M,E=S?v:M,_=Math.max(1,Math.round(E/.6));for(let A=1;A<_;A++){let T=(S?y.x0:y.z0)+E*A/_,w=S?[T,y.z0+.06]:[y.x0+.06,T],C=S?[T,y.z1-.06]:[y.x1-.06,T],N=l(w[0],w[1])+x;W0(i,w,C,.06,N-.04,N+.08,u.side,u.color,l(C[0],C[1])-l(w[0],w[1]))}}b((y,v)=>l(y,v)+x+.004);break}case"balcony":{Ie(i,f,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),b(()=>a+u.top+.004);let y=o.height&&o.height>.3?o.height:1,v=kt(9417983,.42),M=kt(3662079,.55);for(let S=0;S<f.length;S++){let E=f[S],_=f[(S+1)%f.length];if(uw(e,E,_))continue;let A=Math.hypot(_[0]-E[0],_[1]-E[1]),T=a+u.top;t.seg([E[0],T+y,E[1]],[_[0],T+y,_[1]],M,Jt),t.seg([E[0],T+.1,E[1]],[_[0],T+.1,_[1]],v,Jt);let w=Math.max(1,Math.round(A/.12));for(let C=0;C<=w;C++){let N=C/w,L=E[0]+(_[0]-E[0])*N,R=E[1]+(_[1]-E[1])*N;t.seg([L,T,R],[L,T+y,R],C===0||C===w?M:v,Jt)}}break}default:{let x=(v,M)=>l(v,M)+u.top,y=hw(r,s);if(Ie(i,f,c,o.slope?x:a+u.top,u.side,u.color,{aoFrom:c,holes:y}),b((v,M)=>x(v,M)+.004),o.type==="hedge"&&b((v,M)=>l(v,M)+.004),o.outline!==!1)for(let v of y)for(let M=0;M<v.length;M++){let S=v[M],E=v[(M+1)%v.length];t.seg([S[0],x(S[0],S[1])+.004,S[1]],[E[0],x(E[0],E[1])+.004,E[1]],d,Jt)}}}})}var qc=Math.PI/180,fw=1.13,dw=1.72,Af=.025,Br=.07,q0=.25;function $0(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=di(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,h=-s/l,u=Math.min(n.height,o.height??n.height),f=o.sources.find(b=>b.room_id===o.roomLeft)?.edge??null,d={floorId:n.id,room:o.roomLeft,edge:f,free:!!o.free},p=(b,g,m,x)=>e.push({key:b,section:null,side:"top",flat:!1,o:g,eu:m,es:[0,1,0],n:x,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:d});p(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+h*o.right],[s/l,0,a/l],[c,0,h]),o.free&&p(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-h*o.left],[-s/l,0,-a/l],[-c,0,-h])}}return e}var Rf="ground";function zr(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function Z0(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],o=zr(i),s=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=o?o.elevation+(t.base!=null?t.base:Sc(o,s,a)):t.base??0;return{key:Rf,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function pw(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Vr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(x=>mw(x,Nc(i,x,x.overhang??t.overhang)));let e=pw(i);if(!e)return[];let n=e.rooms.flatMap(x=>x.points.map(y=>y[0])),r=e.rooms.flatMap(x=>x.points.map(y=>y[1])),o=i.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,h=e.elevation+e.height;if(t.type==="flat")return[K0("main",null,s,l,a,c,h+q0)];let u=a-s>=c-l,f=t.ridge==="short"?!u:u,d=(f?c-l:a-s)/2,p=d*Math.tan(t.pitch*qc),b=(x,y,v)=>f?[x,h+v,(l+c)/2+y]:[(s+a)/2+y,h+v,x],[g,m]=f?[s,a]:[l,c];return[-1,1].map(x=>Yc(`main:${x<0?"a":"b"}`,null,x<0?"a":"b",b(g,x*d,0),b(m,x*d,0),b(g,0,p),t.pitch,()=>[0,m-g]))}function mw(i,t){let e=ln(i),n=an(i),r=(y,v,M)=>{let[S,E]=e.at(y,v);return[S,M,E]},o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let y=e.at(a,-o),v=e.at(l,e.w+s);return[K0(i.id,i.id,Math.min(y[0],v[0]),Math.min(y[1],v[1]),Math.max(y[0],v[0]),Math.max(y[1],v[1]),i.eave_a+q0)]}if(i.shape==="pent")return[Yc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,e.w+s,n.y(e.w+s)),i.pitch_a,()=>[0,c])];let h=Oc(i),u=h?af(i,h):null,f=i.shape==="pyramid"||h?.[0]==="hip",d=i.shape==="pyramid"||h?.[1]==="hip",p=i.shape==="pyramid"?(e.u1-e.u0)/2:f?u.d0:0,b=i.shape==="pyramid"?(e.u1-e.u0)/2:d?u.d1:0,g=f?e.u0+p-a:0,m=d?l-(e.u1-b):0,x=[];if(n.vr>.3){let y=Math.hypot(n.vr+o,n.rh-n.y(-o));x.push(Yc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,n.vr,n.rh),i.pitch_a,v=>[g*(v/y),c-m*(v/y)]))}if(e.w-n.vr>.3){let y=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));x.push(Yc(`${i.id}:b`,i.id,"b",r(l,e.w+s,n.y(e.w+s)),r(a,e.w+s,n.y(e.w+s)),r(l,n.vr,n.rh),i.pitch_b,v=>[m*(v/y),c-g*(v/y)]))}if(f||d){let y=n.y(-o),v=n.y(e.w+s),M=[];f&&M.push([`${i.id}:c`,"c",r(a,e.w+s,v),r(a,-o,y),r(e.u0+p,n.vr,n.rh)]),d&&M.push([`${i.id}:d`,"d",r(l,-o,y),r(l,e.w+s,v),r(e.u1-b,n.vr,n.rh)]);for(let[S,E,_,A,T]of M){let w=gw(S,i.id,E,_,A,T);w&&x.push(w)}}return x}function gw(i,t,e,n,r,o){let s=js(kr(r,n));if(s<.3)return null;let a=ar(kr(r,n)),l=kr(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=js(h);if(u<.3)return null;let f=ar(h),d=ar(Q0(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=ar([-f[0],0,-f[2]]),b=Math.atan2(f[1],Math.hypot(f[0],f[2]))/qc;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:s,ls:u,pitch:b,span:m=>{let x=Math.min(1,Math.max(0,m/u));return[c*x,s-(s-c)*x]},facing:[p[0],p[2]]}}function Yc(i,t,e,n,r,o,s,a){let l=ar(kr(r,n)),c=ar(kr(o,n)),h=ar(Q0(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=ar([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:h,lu:js(kr(r,n)),ls:js(kr(o,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function K0(i,t,e,n,r,o,s){let a=r-e>=o-n,l=a?r-e:o-n,c=a?o-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function J0(i){let t=i.module_w||fw,e=i.module_h||dw;return i.portrait===!1?[e,t]:[t,e]}function bw(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function j0(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*qc:i.wall?Math.min(90,Math.max(0,t.tilt??0))*qc:0}function xw(i,t){let[,e]=J0(t),n=j0(i,t);return i.wall?e*Math.cos(n)+Af:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Af}function Qs(i,t,e=!1){let[n,r]=J0(t),o=[],s=j0(i,t),a=r*Math.cos(s),l=xw(i,t),c=bw(t),h=Math.max(1,...c),u=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(b,g,m)=>[i.o[0]+i.eu[0]*b+i.es[0]*g+i.n[0]*m,i.o[1]+i.eu[1]*b+i.es[1]*g+i.n[1]*m,i.o[2]+i.eu[2]*b+i.es[2]*g+i.n[2]*m],p=(b,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[m,x]=i.span(g);return b>=m-1e-6&&b<=x+1e-6};return c.forEach((b,g)=>{let m=t.align==="right"?h-b:t.align==="center"?(h-b)/2:0;for(let x=0;x<b;x++){let y=`${g}:${x}`,v=u.has(y);if(v&&!e)continue;let M=t.u+(x+m)*(n+Af),S=t.v+g*l,E=M+n,_=S+(i.flat||i.wall?a:r);if(f){if(!(p((M+E)/2,S)&&p((M+E)/2,_)))continue}else if(![[M,S],[E,S],[E,_],[M,_]].every(([L,R])=>p(L,R)))continue;if(i.wall&&s>.001){let L=Br+r*Math.sin(s),[R,P]=t.flip?[L,Br]:[Br,L],F=[d(M,S,R),d(E,S,R),d(E,_,P),d(M,_,P)],D=t.flip?S:_,U=[M+.05,E-.05].map(k=>[d(k,D,0),d(k,D,L)]);o.push({corners:F,posts:U,cell:y,skipped:v});continue}if(!i.flat){o.push({corners:[d(M,S,Br),d(E,S,Br),d(E,_,Br),d(M,_,Br)],posts:[],cell:y,skipped:v});continue}let A=.15,T=A+r*Math.sin(s),[w,C]=t.flip?[_,S]:[S,_],N=[d(M,w,A),d(E,w,A),d(E,C,T),d(M,C,T)];o.push({corners:N,posts:[M+.05,E-.05].flatMap(L=>[[d(L,w,0),d(L,w,A)],[d(L,C,0),d(L,C,T)]]),cell:y,skipped:v})}}),o}function kr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function js(i){return Math.hypot(i[0],i[1],i[2])}function ar(i){let t=js(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function Q0(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var vw=.78,yw=1.18;function _w(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||vw,module_h:i.h||yw}}function $c(i,t){let e=Qs(i,_w(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Zc(i,t,e){let n=t?$c(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,o=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>o)continue;let l=a.rooms.find(c=>Zt([r,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var ta=1712952,ea=2239816,ig=1318193,lr=kt(3662079,.9),Wo=kt(5995775,.45),je=.14,Mw=9427199,ww=13226982,Sw=14936565,Tw={black:{glass:new J(329483),edge:kt(9082544,.32),cells:kt(2766160,.22)},blue:{glass:new J(1386842),edge:kt(10467583,.55),cells:kt(4025599,.35)}},Ew=kt(13226982,.5),Aw=kt(13226982,.85),Rw=kt(16757575,.95),tg=new J(2845583),eg=new J(1713986),Pw=new J(3662079).multiplyScalar(.35),ng=new J(4871791);function Cw(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function rg(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:Fw(i),r=e?.type==="custom"?Dw(i,e.sections??[],e.overhang):n?[n]:[];return Lw(i,r),Iw(i,r,t),r}function Iw(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(Vr(i).map(o=>[o.key,o]));for(let o of n){let s=r.get(o.face),a=s?$c(s,o):null;if(!s||!a)continue;let l=s.section?t.find(P=>P.sections?.includes(s.section)):t[0];if(!l)continue;let c=o.float?Zc(i,s,o):null,h=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,u=h?h.elevation:l.floor.elevation+l.base,f=P=>[P[0],P[1]-u,P[2]],[d,p,b,g]=a.map(f),m=e.get(o.id)??{open:0,tilt:0,cover:0},x=!!c&&(h!==null||c.floor.id===l.floor.id),y=h?(l.winBelow??=new Map).get(h.id)??l.winBelow.set(h.id,{floor:h,solid:new jt,lines:new Ne,glass:new jt}).get(h.id):x?l.win??={solid:new jt,lines:new Ne,glass:new jt}:l.winRoof??={solid:new jt,lines:new Ne,glass:new jt},v=(P,F)=>[P[0]+s.n[0]*F,P[1]+s.n[1]*F,P[2]+s.n[2]*F],M=(P,F,D)=>[P[0]+(F[0]-P[0])*D,P[1]+(F[1]-P[1])*D,P[2]+(F[2]-P[2])*D],S=m.open>.02||m.tilt>.02?Rw:Aw,E=[d,p,b,g].map(P=>v(P,.06)),_=[d,p,b,g].map(P=>v(P,-.02));for(let P=0;P<4;P++){y.lines.seg(E[P],E[(P+1)%4],S);let F=(P+1)%4;y.solid.tri(_[P],_[F],E[F],ng),y.solid.tri(_[P],E[F],E[P],ng)}let A=(m.open>.02?30*Math.min(1,m.open):m.tilt>.5?12:0)*ee,T=Math.hypot(b[0]-p[0],b[1]-p[1],b[2]-p[2]),w=P=>{let F=s.es;return[P[0]-F[0]*T*Math.cos(A)+s.n[0]*T*Math.sin(A),P[1]-F[1]*T*Math.cos(A)+s.n[1]*T*Math.sin(A),P[2]-F[2]*T*Math.cos(A)+s.n[2]*T*Math.sin(A)]},C=v(g,.065),N=v(b,.065),L=w(C),R=w(N);y.glass.tri(L,R,N,tg),y.glass.tri(L,N,C,tg);for(let[P,F]of[[L,R],[R,N],[N,C],[C,L]])y.lines.seg(P,F,S);if(m.cover>.02){let P=Math.min(1,m.cover),F=v(M(C,L,P),.01),D=v(M(N,R,P),.01),U=v(C,.01),k=v(N,.01);y.solid.tri(F,D,k,eg),y.solid.tri(F,k,U,eg);let V=Math.max(1,Math.round(T*P/.05));for(let X=1;X<=V;X++){let z=X/V;y.lines.seg(v(M(U,F,z),.004),v(M(k,D,z),.004),Pw)}}}}function Lw(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(Vr(i).map(r=>[r.key,r]));for(let r of e){let o=n.get(r.face);if(!o)continue;let s=o.section?t.find(a=>a.sections?.includes(o.section)):t[0];s&&Pf(s.solid,s.lines,o,r,s.floor.elevation+s.base)}}function Pf(i,t,e,n,r){let o=c=>[c[0],c[1]-r,c[2]],s=Tw[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of Qs(e,n)){let[h,u,f,d]=c.corners.map(o);i.tri(h,u,f,s.glass),i.tri(h,f,d,s.glass),i.tri(h,f,u,s.glass),i.tri(h,d,f,s.glass);let p=(m,x=.004)=>[m[0]+e.n[0]*x,m[1]+e.n[1]*x,m[2]+e.n[2]*x],b=(m,x,y)=>[m[0]+(x[0]-m[0])*y,m[1]+(x[1]-m[1])*y,m[2]+(x[2]-m[2])*y],g=[h,u,f,d].map(m=>p(m));for(let m=0;m<4;m++)t.seg(g[m],g[(m+1)%4],s.edge);for(let m=1;m<a;m++)t.seg(p(b(h,u,m/a)),p(b(d,f,m/a)),s.cells);for(let m=1;m<l;m++)t.seg(p(b(h,d,m/l)),p(b(u,f,m/l)),s.cells);for(let[m,x]of c.posts)t.seg(o(m),o(x),Ew)}}function Fw(i){let t=i.settings.roof,e=Cw(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(T=>T.points.map(w=>w[0])),r=e.rooms.flatMap(T=>T.points.map(w=>w[1])),o=i.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,h=new jt,u=new Ne;if(t.type==="flat"){Ie(h,[[s,l],[a,l],[a,c],[s,c]],0,.25,ta,ea,{bottom:!0});let T=.252;for(let[w,C]of[[[s,l],[a,l]],[[a,l],[a,c]],[[a,c],[s,c]],[[s,c],[s,l]]])u.seg([w[0],T,w[1]],[C[0],T,C[1]],lr),u.seg([w[0],0,w[1]],[C[0],0,C[1]],Wo);return{floor:e,base:e.height,solid:h,lines:u,glass:new jt}}let f=a-s>=c-l,d=t.ridge==="short"?!f:f,p=(d?c-l:a-s)/2,b=p*Math.tan(t.pitch*ee),g=(T,w,C)=>d?[T,C,(l+c)/2+w]:[(s+a)/2+w,C,T],[m,x]=d?[s,a]:[l,c],y=new J(ea),v=new J(ta),M=(T,w,C,N,L)=>{h.tri(T,w,C,L),h.tri(T,C,N,L)};for(let T of[-1,1]){M(g(m,T*p,0),g(x,T*p,0),g(x,0,b),g(m,0,b),y),M(g(m,T*p,-je),g(m,0,b-je),g(x,0,b-je),g(x,T*p,-je),v),M(g(m,T*p,-je),g(x,T*p,-je),g(x,T*p,0),g(m,T*p,0),v);for(let w of[m,x])M(g(w,T*p,-je),g(w,T*p,0),g(w,0,b),g(w,0,b-je),v);u.seg(g(m,T*p,0),g(x,T*p,0),Wo);for(let w of[m,x])u.seg(g(w,T*p,0),g(w,0,b),Wo)}let S=t.overhang,E=new J(ig),_=p-S,A=_*Math.tan(t.pitch*ee);for(let T of[m+S,x-S])h.tri(g(T,-_,-je),g(T,_,-je),g(T,0,A-je),E),h.tri(g(T,_,-je),g(T,-_,-je),g(T,0,A-je),E);return u.seg(g(m,0,b+.004),g(x,0,b+.004),lr),{floor:e,base:e.height,solid:h,lines:u,glass:new jt}}function Dw(i,t,e){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,o=new Map(Vr(i).map(l=>[l.key,l])),s=t.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(s.map(l=>{let c=Lr(t,l),h=c?null:Qm(t,l),u=c?lf(c,l):h?e0(l,h):l,f=Nc(i,c?u:l,u.overhang??e),d=h?{...f,[h.end===0?"u0":"u1"]:0}:f,p=!u.open&&u.shape!=="flat"&&u.shape!=="parapet";return[l,{parent:c,junction:h,drawn:u,ov:d,covers:p?Jm(u,Fr(u,d).faces):[]}]}));for(let l of s){let c=a.get(l),h=qm(i,l)??n[0],u=l.open?`${h.id}:open`:h.id,f=r.get(u);f||r.set(u,f={floor:h,base:0,solid:new jt,lines:new Ne,glass:new jt,sections:[],lift:!l.open}),f.sections.push(l.id);let d=c.parent,p=[(l.x0+l.x1)/2,(l.z0+l.z1)/2],b=n.some(S=>S.elevation>h.elevation&&S.elevation<=l.base+.5&&S.elevation+S.height>l.base&&S.rooms.some(E=>Zt(p,E.points))),g=h.elevation+h.height>l.base+.05&&!l.dormer&&!d||b,m=t.filter(S=>S!==l&&Lr(t,S)===l).flatMap(S=>Ym(l,S));for(let S of i.settings.roof.windows??[]){let E=o.get(S.face),_=E&&E.section===l.id?$c(E,S):null;if(!_)continue;let A=_.map(T=>mi(l,T[0],T[2]));m.push({u0:Math.min(...A.map(T=>T[0])),u1:Math.max(...A.map(T=>T[0])),v0:Math.min(...A.map(T=>T[1])),v1:Math.max(...A.map(T=>T[1]))})}let x=c.drawn,y=c.junction?1-c.junction.end:null;if(d){let S=ln(x),E=Fr(d,{u0:0,u1:0,a:0,b:0}),_=A=>{let[T,w]=S.at(A,S.w/2),[C,N]=mi(d,T,w);return Ys(E,C,N)??an(d).y(N)};y=_(S.u0)<=_(S.u1)?0:1}let v=s.filter(S=>jm(t,l,S)),M=v.length?{covers:hf(x,v.flatMap(S=>a.get(S).covers)),lines:hf(x,v.filter(S=>s.indexOf(S)>s.indexOf(l)).flatMap(S=>a.get(S).covers)),wallU:c.junction?[ln(l).u0,ln(l).u1]:null}:null;Ow(f.solid,f.lines,x,c.ov,h.elevation,f.glass,g,m,y,M)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function Ow(i,t,e,n,r,o=i,s=!1,a=[],l=null,c=null){let h=ln(e),u=an(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,f.a),p=Math.max(0,f.b),b=h.w,g=h.u0-Math.max(0,f.u0),m=h.u1+Math.max(0,f.u1),x=(P,F,D)=>{let[U,k]=h.at(P,F);return[U,D-r,k]},y=new J(ea),v=new J(ta),M=new J(ig),S=(P,F)=>{for(let D=1;D+1<P.length;D++)i.tri(P[0],P[D],P[D+1],F)},E=[],_=[],A=[],T=[null,null],w=[];if(e.shape==="flat"||e.shape==="parapet"){let P=e.eave_a,F=e.shape==="parapet",D=e.points&&e.points.length>=3?Hm(e,F?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):F?[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,b),h.at(h.u0,b)]:[h.at(g,-d),h.at(m,-d),h.at(m,b+p),h.at(g,b+p)];Ie(i,D,P-r,P-r+.25,ta,ea,{bottom:!0});for(let U=0;U<D.length;U++){let k=D[U],V=D[(U+1)%D.length];t.seg([k[0],P-r+.252,k[1]],[V[0],P-r+.252,V[1]],lr),t.seg([k[0],P-r,k[1]],[V[0],P-r,V[1]],Wo)}if(F){let U=z=>Kn(z)>=0?z:[...z].reverse(),k=U(D),V=Dc(k,-.2),X=k.length;for(let z=0;z<X;z++){let $=U([k[z],k[(z+1)%X],V[(z+1)%X],V[z]]);Ie(i,$,P-r+.25,P-r+.65,ta,ea),t.seg([k[z][0],P-r+.652,k[z][1]],[k[(z+1)%X][0],P-r+.652,k[(z+1)%X][1]],lr),t.seg([V[z][0],P-r+.652,V[z][1]],[V[(z+1)%X][0],P-r+.652,V[(z+1)%X][1]],lr)}}}else{let P=Fr(e,f);E=P.faces;for(let F of a)E=E.flatMap(D=>cf(D,F));if(_=P.rim,A=P.ridges,T=P.gables,c){for(let F of E)for(let D of c.lines){let U=Km(F,D.poly);if(U)for(let[k,V]of uf(U[0],U[1],c.covers.filter(X=>X!==D)))w.push([k,V])}E=E.flatMap(F=>Zm(F,c.covers))}}let C=!!e.open,N=new J(Mw);for(let P of E){if(C){for(let F=1;F+1<P.length;F++)o.tri(x(P[0][0],P[0][1],P[0][2]),x(P[F][0],P[F][1],P[F][2]),x(P[F+1][0],P[F+1][1],P[F+1][2]),N);continue}S(P.map(([F,D,U])=>x(F,D,U)),y),S(P.map(([F,D,U])=>x(F,D,U-je)),v)}let L=(P,F)=>c?uf(P,F,c.covers):[[P,F]];for(let P=0;P<_.length;P++)for(let[[F,D,U],[k,V,X]]of L(_[P],_[(P+1)%_.length]))C||S([x(F,D,U),x(k,V,X),x(k,V,X-je),x(F,D,U-je)],v),t.seg(x(F,D,U),x(k,V,X),C?lr:Wo);if(C){Nw(i,t,h,u,f,x,r);return}for(let[P,F]of A)for(let[[D,U,k],[V,X,z]]of L(P,F))t.seg(x(D,U,k+.004),x(V,X,z+.004),lr);for(let[[P,F,D],[U,k,V]]of w)t.seg(x(P,F,D+.004),x(U,k,V+.004),lr);let R=e.base;if(!s){for(let P of[0,1]){let F=T[P];if(!F||l!==null&&l!==P)continue;let D=Uw(F,R-je),U=P===0?h.u0:h.u1;D.length>=3&&S(D.map(([k,V])=>x(U,k,V)),M)}if(e.shape!=="flat"&&e.shape!=="parapet"){let[P,F]=c?.wallU??[h.u0,h.u1];for(let D of[0,b]){let U=u.y(D)-je;U>R+.02&&S([x(P,D,R),x(F,D,R),x(F,D,U),x(P,D,U)],M)}}else if(e.eave_a>R+.02)for(let[P,F,D,U]of[[h.u0,0,h.u1,0],[h.u1,0,h.u1,b],[h.u1,b,h.u0,b],[h.u0,b,h.u0,0]])S([x(P,F,R),x(D,U,R),x(D,U,e.eave_a),x(P,F,e.eave_a)],M)}}function Nw(i,t,e,n,r,o,s){let a=e.w,l=.12,c=.16,h=r.a>0,u=r.b>0,f=r.u0>0,d=r.u1>0,p=(m,x,y,v,M,S)=>{let E=[e.at(m,y),e.at(x,y),e.at(x,v),e.at(m,v)],_=(E[1][0]-E[0][0])*(E[2][1]-E[0][1])-(E[2][0]-E[0][0])*(E[1][1]-E[0][1]);Ie(i,_<0?[...E].reverse():E,M-s,S-s,ww,Sw,{bottom:!0})},b=s;for(let[m,x]of[[0,h],[a,u]]){if(!x)continue;let y=n.y(m)-.03,v=m===0?0:a-l;p(e.u0,e.u1,v,v+l,y-c,y),t.seg(o(e.u0,m,y-c),o(e.u1,m,y-c),Wo)}for(let[m,x]of[[e.u0,f],[e.u1-l,d]])if(x)for(let y=0;y<6;y++){let v=a*y/6,M=a*(y+1)/6,S=Math.min(n.y(v),n.y(M))-.03;p(m,m+l,v,M,S-c,S)}let g=[];for(let[m,x]of[[0,h],[a-l,u]]){if(!x)continue;let y=e.u1-e.u0-l,v=Math.max(1,Math.ceil(y/3.5));for(let M=0;M<=v;M++){let S=e.u0+y*M/v;M===0&&!f||M===v&&!d||g.push([S,m])}}if(!h&&!u)for(let m of[e.u0,e.u1-l])(m===e.u0&&f||m!==e.u0&&d)&&g.push([m,a/2-l/2]);for(let[m,x]of g){let y=n.y(x+l/2)-.03-c;p(m,m+l,x,x+l,b,y)}}function Uw(i,t){let e=[];for(let o=0;o<i.length;o++){let[s,a]=i[o];a>=t&&e.push([s,a]);let l=i[o+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([s+(l[0]-s)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var na={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Qc={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},lg={wood:9067062,oak:12886644,tiles:13619146,carpet:11445651,stone:11117724,concrete:10329498},nn=.2,Bw=-.06,kw=.01,ia=8,Kc=.42,Cf=.42;function cg(i,t,e,n=[],r=[],o){let{walls:s,open:a}=di(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(R,P,F,D)=>{let U=D?.slope?Math.min(F,jh(D.slope,R,P)):F,k=o?o(R,P):null;return k===null?U:Math.max(.05,Math.min(U,k))},c=(R,P)=>{let F=o?o(R,P):null;return F!==null&&F<Bw},h=(R,P,F,D,U,k)=>{if(!o&&!k?.slope)return U;let V=U,X=Math.max(2,Math.ceil((D-F)/.25)+1);for(let z=0;z<X;z++){let $=F+(D-F)*z/(X-1);V=Math.min(V,l(R[0]+P[0]*$,R[1]+P[1]*$,U,k))}return V},u=new jt(!0,!0),f=[],d=new Ne,p=[];for(let R of i.rooms){if(R.points.length<3)continue;let P=Jc(R.points),F=Qc[R.floor_material]??Qc.wood,D=new J(F.color),U=n.flatMap(j=>{if(s0(j,P))return[j];if(!i0(j))return[];let at=Bo(P,j);return at.length>=3&&Math.abs(Kn(at))>.01?[Jc(at)]:[]}),k=o0(U).map(j=>a0(Jc(j),.003));p.push(...k);let V=[...P,...k.flat()],X=u.count;for(let[j,at,H]of gn(P,k)){let W=V[j],Q=V[at],ot=V[H];u.tri([W[0],0,W[1]],[ot[0],0,ot[1]],[Q[0],0,Q[1]],D,D,D,[W[0],W[1],ot[0],ot[1],Q[0],Q[1]],Jt,F.tile)}f.push({roomId:R.id,start:X,end:u.count,color:F.color});let z=new J(na.slab),$=j=>{for(let at=0;at<j.length;at++){let H=j[at],W=j[(at+1)%j.length];u.tri([H[0],-nn,H[1]],[H[0],0,H[1]],[W[0],0,W[1]],z),u.tri([H[0],-nn,H[1]],[W[0],0,W[1]],[W[0],-nn,W[1]],z)}};$(P);for(let j of k){$([...Jc(j)].reverse());for(let at=0;at<j.length;at++){let H=j[at],W=j[(at+1)%j.length];d.seg([H[0],.006,H[1]],[W[0],.006,W[1]],ir),d.seg([H[0],-nn,H[1]],[W[0],-nn,W[1]],Ri)}}}let b=new Map,g=[],m=new Map,x=new Map;for(let R of s){if(!R.free)continue;let P=km(R,i.rooms);P!==null&&x.set(R,P)}for(let R of s){let P="interior",F=null,D=x.get(R);if(R.exterior||D!==void 0){let k=R.b[0]-R.a[0],V=R.b[1]-R.a[1],X=Math.hypot(k,V)||1,z=D===!1?-1:1,$=[z*V/X,-z*k/X],j=(Math.round(Math.atan2($[1],$[0])/(2*Math.PI)*ia)%ia+ia)%ia;P=`s${j}`;let at=j/ia*2*Math.PI;F=[Math.cos(at),Math.sin(at)]}let U=b.get(P);U===void 0&&(U=g.length,b.set(P,U),g.push(F)),m.set(R,U)}let y=new Map,v=[];for(let R of i.openings){let P=Oo(R,i.rooms,i.walls??[]);if(!P)continue;let F=No(s,R,P);if(!F)continue;let{wall:D,s:U}=F,k=tu([D.b[0]-D.a[0],D.b[1]-D.a[1]]),V=Math.hypot(D.b[0]-D.a[0],D.b[1]-D.a[1]),X=U-R.width/2<-1e-6?tf(s,D,!1):null,z=U+R.width/2>V+1e-6?tf(s,D,!0):null,$=de=>de?Math.hypot(de.b[0]-de.a[0],de.b[1]-de.a[1]):0,j=-$(X),at=V+$(z),H=Math.min(R.width,at-j),W=Math.max(j,Math.min(at-H,U-H/2)),Q=P.room.points,ot=x.get(D),et=D.free?ot??k[0]*(Q[1][0]-Q[0][0])+k[1]*(Q[1][1]-Q[0][1])>0:D.exterior||D.roomLeft===R.room_id,ht=[-k[1],k[0]],gt=et?ht:[-ht[0],-ht[1]],lt=Math.min(h(D.a,k,W,W+H,ra(D,i.height),D)-.02,R.sill+R.height),dt=Math.max(0,Math.min(R.sill,lt-.1)),Dt=[gt[1],-gt[0]],Rt=k[0]*Dt[0]+k[1]*Dt[1]>0,ne={opening:R,bucket:m.get(D),start:[D.a[0]+k[0]*W,D.a[1]+k[1]*W],axis:k,width:H,toRoom:gt,faceRoom:et?D.left:D.right,faceOut:et?D.right:D.left,sill:dt,top:lt,hingeAtStart:R.hinge==="left"===Rt,exterior:D.exterior||ot!==void 0};v.push(ne);let pe=y.get(D);pe||y.set(D,pe=[]),pe.push({s0:W,s1:W+H,sill:dt,top:lt,info:ne});for(let de of[X,z]){if(!de)continue;let Me=ge=>(D.a[0]+k[0]*ge-de.a[0])*k[0]+(D.a[1]+k[1]*ge-de.a[1])*k[1],Ue=Math.max(0,Me(W)),Z=Math.min($(de),Me(W+H));if(Z-Ue<1e-4)continue;let Ge=y.get(de);Ge||y.set(de,Ge=[]),Ge.push({s0:Ue,s1:Z,sill:dt,top:lt,info:ne,cont:!0})}}let M=Math.min(i.cut_height,i.height),S=new jt;for(let R of s){let P=m.get(R),F=tu([R.b[0]-R.a[0],R.b[1]-R.a[1]]),D=(y.get(R)??[]).sort((H,W)=>H.s0-W.s0),U=ra(R,i.height),k=[],V=[-1/0,...new Set(D.flatMap(H=>[H.s0,H.s1])).values(),1/0].sort((H,W)=>H-W);for(let H=0;H+1<V.length;H++){let W=V[H],Q=V[H+1];if(Q-W<1e-6)continue;let ot=Number.isFinite(W)&&Number.isFinite(Q)?(W+Q)/2:Number.isFinite(W)?W+1:Q-1,et=D.filter(lt=>lt.s0<ot&&lt.s1>ot).map(lt=>[lt.sill,lt.top]).sort((lt,dt)=>lt[0]-dt[0]),ht=[],gt=-nn;for(let[lt,dt]of et)lt>gt+1e-4&&ht.push([gt,lt<1e-4?-kw:lt]),gt=Math.max(gt,dt);U>gt+1e-4&&ht.push([gt,U]),k.push({t0:W,t1:Q,ranges:ht})}let X=Math.hypot(R.b[0]-R.a[0],R.b[1]-R.a[1]),z=(o||R.slope)&&h(R.a,F,0,X,U,R)<U-.001,$=z?k.flatMap(H=>{let W=Math.max(H.t0,-.5),Q=Math.min(H.t1,X+.5),ot=Math.max(1,Math.ceil((Q-W)/.3));return Array.from({length:ot},(et,ht)=>({t0:ht===0?H.t0:W+(Q-W)*ht/ot,t1:ht===ot-1?H.t1:W+(Q-W)*(ht+1)/ot,ranges:H.ranges,inner0:ht>0,inner1:ht<ot-1}))}):k.map(H=>({...H,inner0:!1,inner1:!1})),j=H=>(H[0]-R.a[0])*F[0]+(H[1]-R.a[1])*F[1],at=H=>{if(!o)return[H];let W=If(R.footprint,R.a,F,H.t0,H.t1),Q=W.filter(([gt,lt])=>c(gt,lt)).length;if(Q===0)return[H];if(Q===W.length)return[];let ot=Math.max(H.t0,-.5),et=Math.min(H.t1,X+.5),ht=Math.max(1,Math.ceil((et-ot)/.05));return Array.from({length:ht},(gt,lt)=>({t0:lt===0?H.t0:ot+(et-ot)*lt/ht,t1:lt===ht-1?H.t1:ot+(et-ot)*(lt+1)/ht,ranges:H.ranges,inner0:lt>0||H.inner0,inner1:lt<ht-1||H.inner1})).filter(gt=>!If(R.footprint,R.a,F,gt.t0,gt.t1).every(([lt,dt])=>c(lt,dt)))};for(let H of z?$.flatMap(at):$){let W=If(R.footprint,R.a,F,H.t0,H.t1);if(W.length<3)continue;let Q=(ht,gt)=>Math.abs(j(ht)-gt)<1e-4,ot=(ht,gt)=>H.inner0&&Q(ht,H.t0)&&Q(gt,H.t0)||H.inner1&&Q(ht,H.t1)&&Q(gt,H.t1),et=z?Math.min(...W.map(([ht,gt])=>l(ht,gt,U,R))):U;for(let[ht,gt]of H.ranges){let lt=Math.min(gt,z?Math.max(...W.map(([ne,pe])=>l(ne,pe,U,R))):gt);if(lt-ht<1e-4||et-ht<.01)continue;let dt=ht>.01,Dt=z&&gt>et,Rt=(ne,pe)=>Math.min(gt,l(ne,pe,U,R));if(ht<M-1e-6){let ne=lt>M+1e-6?g0+P:rr+P,pe=Dt&&et<M?(de,Me)=>Math.min(M,Rt(de,Me)):Math.min(lt,M);Ie(S,W,ht,pe,na.wall,na.wallTop,{aoFrom:0,bottom:dt,fold:rr+P,topFold:ne,skipSide:ot})}lt>M+1e-6&&et>M+1e-6&&Ie(S,W,Math.max(ht,M),Dt?Rt:lt,na.wall,na.wallTop,{aoFrom:0,fold:P,bottom:dt&&ht>=M,skipSide:ot})}}}let E=s.flatMap(R=>R.footprint),_=Gw(s,E),A=new Ne;A.p.push(...d.p),A.c.push(...d.c),A.f.push(...d.f);let T=(R,P)=>(y.get(R)??[]).filter(P);for(let R of _.edges){let P=m.get(R.wall);for(let[D,U]of jc(R,T(R.wall,k=>k.sill<=.005)))A.seg([D[0],.004,D[1]],[U[0],.004,U[1]],m0);for(let[D,U]of jc(R,T(R.wall,k=>k.sill<M&&k.top>M)))A.seg([D[0],M,D[1]],[U[0],M,U[1]],vf,Vc+P);let F=ra(R.wall,i.height);for(let[D,U]of jc(R,T(R.wall,k=>k.top>=F-.021))){if(!o&&!R.wall.slope){A.seg([D[0],F,D[1]],[U[0],F,U[1]],ir,F<=M+1e-6?rr+P:P);continue}let k=Math.max(1,Math.ceil(Math.hypot(U[0]-D[0],U[1]-D[1])/.3));for(let V=0;V<k;V++){let X=[D[0]+(U[0]-D[0])*V/k,D[1]+(U[1]-D[1])*V/k],z=[D[0]+(U[0]-D[0])*(V+1)/k,D[1]+(U[1]-D[1])*(V+1)/k];if(c(X[0],X[1])&&c(z[0],z[1]))continue;let $=l(X[0],X[1],F,R.wall),j=l(z[0],z[1],F,R.wall);A.seg([X[0],$,X[1]],[z[0],j,z[1]],ir,Math.max($,j)<=M+1e-6?rr+P:P)}}}let w=(R,P)=>l(P[0],P[1],ra(R,i.height),R);for(let R of _.corners){if(c(R.p[0],R.p[1]))continue;let P=R.walls.reduce((D,U)=>w(U,R.p)>w(D,R.p)+1e-6?U:D,R.wall),F=l(R.p[0],R.p[1],ra(P,i.height),P);A.segSplit([R.p[0],.004,R.p[1]],[R.p[0],F,R.p[1]],Ri,Math.min(M,F),m.get(P))}for(let R of _.joints){let[P,F]=R.walls,D=[w(P,R.a),w(F,R.a)],U=[w(P,R.b),w(F,R.b)];if(Math.abs(D[0]-D[1])<.01&&Math.abs(U[0]-U[1])<.01)continue;let k=D[1]+U[1]>=D[0]+U[0]?F:P,V=m.get(k),X=Math.max(...D),z=Math.max(...U);A.seg([R.a[0],X,R.a[1]],[R.b[0],z,R.b[1]],ir,Math.max(X,z)<=M+1e-6?rr+V:V);for(let[$,j]of[[R.a,D],[R.b,U]]){let at=Math.min(...j),H=Math.max(...j);H-at>.01&&A.segSplit([$[0],at,$[1]],[$[0],H,$[1]],Ri,M,V)}}for(let R of y.values())for(let P of R)P.cont||zw(A,P,M);let C=Hw(_.edges,i.rooms,y),N=new jt;Y0(S,A,i,N);for(let R of r)Pf(S,A,R.face,R.field,i.elevation);let L=[];for(let R of i.furniture){if(Im(R.type))continue;let P=S.count,F=A.p.length/6,D=R,U=sn(i,D);if(Cc.has(D.type)){let k=Ic(s,D,i.height,U);D={...D,x:k.x,z:k.z},U=k.y}Wc(S,A,C,D,U),U+D.h>M+.05&&(b0(S,P,M,yf),x0(A,F,M,yf)),L.push({id:D.id,start:P,end:S.count})}return{floor:u.geometry(),roomTris:f,holes:p,walls:S.geometry(),water:N.geometry(),lines:A.geometry(),shadow:C.geometry(),buckets:g,openings:v,walls2d:s,openRooms:a,wallBuckets:s.map(R=>m.get(R)),furnitureTris:L,roofUnder:o}}function zw(i,t,e){let{info:n}=t,r=n.bucket,o=(l,c,h)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],s=l=>l>e+1e-6?r:Jt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(o(c,l,a),o(c,l,t.top),Ri,e,r);i.seg(o(t.s0,l,t.top),o(t.s1,l,t.top),Ri,s(t.top)),t.sill>.01&&i.seg(o(t.s0,l,t.sill),o(t.s1,l,t.sill),Ri,s(t.sill))}for(let l of[t.s0,t.s1])i.seg(o(l,n.faceRoom,t.top),o(l,-n.faceOut,t.top),Ri,s(t.top)),t.sill>.01&&i.seg(o(l,n.faceRoom,t.sill),o(l,-n.faceOut,t.sill),Ri,s(t.sill)),t.sill<e&&t.top>e&&i.seg(o(l,n.faceRoom,e),o(l,-n.faceOut,e),vf,Vc+r)}function If(i,t,e,n,r){let o=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],s=i;return Number.isFinite(n)&&(s=og(s,a=>o(a)-n)),Number.isFinite(r)&&(s=og(s,a=>r-o(a))),s}function og(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=t(r),a=t(o);if(s>=0&&e.push(r),s>=0!=a>=0){let l=s/(s-a);e.push([r[0]+(o[0]-r[0])*l,r[1]+(o[1]-r[1])*l])}}return e}var sg=i=>Math.round(i*1e3),oa=i=>`${sg(i[0])},${sg(i[1])}`,ag=(i,t)=>{let e=oa(i),n=oa(t);return e<n?`${e}|${n}`:`${n}|${e}`};function Vw(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=o[0]-r[0],a=o[1]-r[1],l=s*s+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let f=((u[0]-r[0])*s+(u[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*s)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=r;for(let u of c){let f=[r[0]+s*u,r[1]+a*u];oa(f)!==oa(h)&&e.push([h,f]),h=f}e.push([h,o])}return e}function Gw(i,t){let e=i.map(h=>({wall:h,edges:Vw(h.footprint,t)})),n=new Map,r=new Map;for(let{wall:h,edges:u}of e)for(let[f,d]of u){let p=ag(f,d);n.set(p,(n.get(p)??0)+1);let b=r.get(p);b?b.walls.push(h):r.set(p,{a:f,b:d,walls:[h]})}let o=[];for(let h of r.values())h.walls.length===2&&h.walls[0]!==h.walls[1]&&o.push({a:h.a,b:h.b,walls:[h.walls[0],h.walls[1]]});let s=[],a=new Map,l=(h,u,f)=>{let d=oa(h),p=a.get(d);p||a.set(d,p={p:h,wall:u,walls:[],d:[]}),p.d.push(f),p.walls.includes(u)||p.walls.push(u)};for(let{wall:h,edges:u}of e)for(let[f,d]of u){if(n.get(ag(f,d))!==1)continue;let p=Math.hypot(d[0]-f[0],d[1]-f[1]);if(p<1e-4)continue;s.push({a:f,b:d,wall:h});let b=[(d[0]-f[0])/p,(d[1]-f[1])/p];l(f,h,b),l(d,h,b)}let c=[];for(let{p:h,wall:u,walls:f,d}of a.values())d.some(p=>d.some(b=>Math.abs(p[0]*b[1]-p[1]*b[0])>.05))&&c.push({p:h,wall:u,walls:f});return{edges:s,corners:c,joints:o}}function jc(i,t){if(!t.length)return[[i.a,i.b]];let e=tu([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=tu([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],o=r(i.a),s=r(i.b),a=Math.min(o,s),l=Math.max(o,s),c=[[a,l]];for(let u of t)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let p=[];return u.s0>f&&p.push([f,u.s0]),u.s1<d&&p.push([u.s1,d]),p});let h=u=>{let f=(u-o)/(s-o||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>o<=s?[h(u),h(f)]:[h(f),h(u)])}function Hw(i,t,e){let n=new jt,r=new J(Cf,Cf,Cf),o=new J(1,1,1),s=.002;for(let a of i)for(let[l,c]of jc(a,(e.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let d=[u/f,-h/f],p=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(m=>m.points.length>=3&&Zt(p,m.points)))continue;let b=[l[0]+d[0]*Kc,l[1]+d[1]*Kc],g=[c[0]+d[0]*Kc,c[1]+d[1]*Kc];n.tri([l[0],s,l[1]],[b[0],s,b[1]],[g[0],s,g[1]],r,o,o),n.tri([l[0],s,l[1]],[g[0],s,g[1]],[c[0],s,c[1]],r,o,r)}return n}function ug(i,t){let e=t.furniture.filter(o=>o.type==="stairwell").map(tr),n=i.filter(o=>o.elevation<t.elevation).sort((o,s)=>s.elevation-o.elevation)[0];if(!n)return e;let r=n.furniture.filter(o=>(Pm.has(o.type)||o.type==="loft_ladder"||be(o.type)?.hole)&&n.elevation+(o.mount_y??0)+o.h>=t.elevation-.3).map(tr);return[...e,...r]}function ra(i,t){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(t,i.height??t)}function tu(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Jc(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var Ww=new J(1516340),Xw=new J(527897),Lf=new J(1779256),sa=new J(1120808),Yw=new J(4163256),hg=new J(5995161),qw=new J(2240842),$w=new J(1318704),Zw=.35,Xo=.8,Kw=.2,fg=.1;function Jw(i,t,e,n){let r=-1/0;for(let o of i.floors)if(!(o.elevation>.3))for(let s of o.outdoor??[])s.points.length<3||s.type==="pool"||s.type==="balcony"||Zn(s.type)||!Zt(e,s.points)||(r=Math.max(r,o.elevation+Rr(o,s)+Fo[s.type]-t.elevation));return r>n?r-n:0}function dg(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let r=ff(i,t);if(!r)return null;let o=(p,b)=>Do(p,b)-t.elevation,s=n&&r.some(([p,b])=>o(p,b)<-nn-.03);if(!s&&!df(i,t))return null;let a=t.height,l=-Zw,c=(p,b)=>Math.min(a,Do(p,b)-t.elevation),h=new jt,u=new jt,f=new Ne,d=(p,b,g,m,x,y,v,M)=>{let S=[b[0]-p[0],b[2]-p[2]];-S[1]*x[0]+S[0]*x[1]>0?(M.tri(p,b,g,y,y,v),M.tri(p,g,m,y,v,v)):(M.tri(p,g,b,y,v,y),M.tri(p,m,g,y,v,v))};for(let p=0;p<r.length;p++){let b=r[p],g=r[(p+1)%r.length],m=Math.hypot(g[0]-b[0],g[1]-b[1]);if(m<1e-4)continue;let x=[(g[0]-b[0])/m,(g[1]-b[1])/m],y=[x[1],-x[0]],v=[(b[0]+g[0])/2+y[0]*.05,(b[1]+g[1])/2+y[1]*.05];Zt(v,r)&&(y=[-y[0],-y[1]]);let M=(T,w=.012)=>[b[0]+x[0]*T+y[0]*w,b[1]+x[1]*T+y[1]*w],S=[];for(let T of e){if(T.opening.type!=="window"||!T.exterior||T.opening.well===!1)continue;let w=T.start[0]+T.axis[0]*(T.width/2)-T.toRoom[0]*T.faceOut,C=T.start[1]+T.axis[1]*(T.width/2)-T.toRoom[1]*T.faceOut,N=(w-b[0])*x[0]+(C-b[1])*x[1];Math.abs((w-b[0])*y[0]+(C-b[1])*y[1])>.08||N<-.05||N>m+.05||n0(i,t,T.exterior,T.sill,[w,C])&&S.push({s0:Math.max(0,N-T.width/2-fg),s1:Math.min(m,N+T.width/2+fg),bottom:Math.max(l+.05,T.sill-Kw),rim:T.opening.well_rim??0})}let E=new Set([0,m]);for(let T of S)E.add(T.s0),E.add(T.s1);let _=[...E].sort((T,w)=>T-w),A=[];for(let T=0;T<_.length-1;T++){let w=Math.max(1,Math.ceil((_[T+1]-_[T])/.5));for(let C=0;C<w;C++)A.push(_[T]+(_[T+1]-_[T])*C/w)}A.push(m);for(let T=0;T<A.length-1;T++){let w=A[T],C=A[T+1],N=S.find(X=>w>=X.s0-1e-6&&C<=X.s1+1e-6),L=M(w),R=M(C),P=c(L[0],L[1]),F=c(R[0],R[1]),D=N?Math.min(P,N.bottom):P,U=N?Math.min(F,N.bottom):F;if(D>l+.01||U>l+.01){let X=Math.min(D,l),z=Math.min(U,l);d([L[0],X,L[1]],[R[0],z,R[1]],[R[0],Math.max(U,l),R[1]],[L[0],Math.max(D,l),L[1]],y,Xw,Ww,h)}let k=o(L[0],L[1]),V=o(R[0],R[1]);if(s&&(k<-nn-.01||V<-nn-.01)&&d([L[0],Math.min(k,-nn),L[1]],[R[0],Math.min(V,-nn),R[1]],[R[0],-nn,R[1]],[L[0],-nn,L[1]],y,$w,qw,h),P>l||F>l||s&&(k<-nn||V<-nn)){let X=s?Math.min(k,Math.max(P,l)):Math.max(P,l),z=s?Math.min(V,Math.max(F,l)):Math.max(F,l);f.seg([L[0],X+.004,L[1]],[R[0],z+.004,R[1]],Yw)}}for(let T of S){let w=M(T.s0,0),C=M(T.s1,0),N=[w[0]+y[0]*Xo,w[1]+y[1]*Xo],L=[C[0]+y[0]*Xo,C[1]+y[1]*Xo],R=[(w[0]+C[0]+N[0]+L[0])/4,(w[1]+C[1]+N[1]+L[1])/4],P=Jw(i,t,R,c(R[0],R[1])),F=Math.max(T.rim,P>0?P+.02:0),D=$=>c($[0],$[1])+F,U=T.bottom,k=($,j)=>[$[0],j,$[1]];u.tri(k(w,U),k(C,U),k(L,U),sa),u.tri(k(w,U),k(L,U),k(N,U),sa);let V=($,j)=>{u.tri(k($,U),k(j,U),k(j,D(j)),sa,sa,Lf),u.tri(k($,U),k(j,D(j)),k($,D($)),sa,Lf,Lf)};V(w,N),V(C,L),V(N,L);let X=$=>[$[0],D($)+.01,$[1]];for(let[$,j]of[[w,C],[C,L],[L,N],[N,w]])f.seg(X($),X(j),hg);let z=Math.max(3,Math.round((T.s1-T.s0)/.12));for(let $=1;$<z;$++){let j=$/z,at=[w[0]+(C[0]-w[0])*j,w[1]+(C[1]-w[1])*j];f.seg(X(at),X([at[0]+y[0]*Xo,at[1]+y[1]*Xo]),hg)}}}return h.count||u.count?{earth:h,wells:u,lines:f}:null}var pg=i=>Math.round(i*1e3)/1e3;function jw(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let o=[(n[0]-e[0])/r,(n[1]-e[1])/r],s=l=>Math.abs(-(l[0]-e[0])*o[1]+(l[1]-e[1])*o[0]),a=l=>(l[0]-e[0])*o[0]+(l[1]-e[1])*o[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,h)=>{let u=l.points[(h+1)%l.points.length];return s(c)>.02||s(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function mg(i,t,e,n,r,o=.05){let s=i.rooms.find(f=>f.points.length>=3&&Zt([t.x,t.z],f.points));if(!s)return[e,n];let a=s.points,l=Rn(a)>=0?1:-1,c=tr({...t}),h=e,u=n;for(let f=0;f<2;f++){let d=tr({...t,x:h,z:u});for(let p=0;p<a.length;p++){let b=a[p],g=a[(p+1)%a.length],m=Math.hypot(g[0]-b[0],g[1]-b[1]);if(m<.05)continue;let x=[(g[0]-b[0])/m,(g[1]-b[1])/m],y=[-x[1]*l,x[0]*l],v=jw(i,s.id,b,g)?r/2:0,M=0;d.forEach((S,E)=>{let _=(S[0]-b[0])*x[0]+(S[1]-b[1])*x[1];if(_<-.01||_>m+.01)return;let A=(S[0]-b[0])*y[0]+(S[1]-b[1])*y[1]-v,T=c[E];(T[0]-b[0])*y[0]+(T[1]-b[1])*y[1]-v<-o||A<M&&(M=A)}),M<-1e-4&&(h-=y[0]*M,u-=y[1]*M)}}return[pg(h),pg(u)]}var Qw=500,tS=1e3;function gg(i,t){let e=t-i.timeStamp;return e>tS&&e<6e4}var bg=.12,xg=1.35,eS=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,eu=class{view={target:new Y,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(o,s,a)=>{t.addEventListener(o,s,a),this.listeners.push([o,s])};r("pointerdown",o=>this.onDown(o)),r("pointermove",o=>this.onMove(o)),r("pointerup",o=>this.onUp(o)),r("pointercancel",o=>this.onUp(o)),r("wheel",o=>this.onWheel(o),{passive:!1}),r("contextmenu",o=>o.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(t-c)/h),f=eS(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Ff(this.view.phi+this.velocity.phi,bg,xg),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:o,phi:s}=this.view;return this.camera.position.set(n.x+r*Math.sin(s)*Math.sin(o),n.y+r*Math.cos(s),n.z+r*Math.sin(s)*Math.cos(o)),this.camera.lookAt(n),e}flyTo(t,e=700,n=!1){let r={...this.view,target:this.view.target.clone()},o=t.theta??r.theta;for(;o-r.theta>Math.PI;)o-=2*Math.PI;for(;o-r.theta<-Math.PI;)o+=2*Math.PI;let s=this.angleLock&&!n?{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:o,phi:t.phi??r.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:r,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},Qw)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}if(gg(t,performance.now())&&!this.swiping){e.x=t.clientX,e.y=t.clientY,this.pointers.size>1&&(this.pinch=this.pinchState());return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let o=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-o.left,this.down.y-o.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let o=e.type==="mouse";if(o&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!o))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=Ff(this.view.phi+c,bg,xg),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let o=this.pinchState();this.pinch&&o&&(this.zoom(this.pinch.dist/Math.max(1,o.dist)),this.pan(o.mid[0]-this.pinch.mid[0],o.mid[1]-this.pinch.mid[1])),this.pinch=o}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,o=performance.now();o-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=o,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),!gg(t,performance.now())&&(this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change())}zoom(t){this.view.radius=Ff(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,o=new Y(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),s=new Y(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(o,-t*r),this.view.target.addScaledVector(s,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Ff(i,t,e){return Math.min(e,Math.max(t,i))}function On(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i.userData.fp3dFold={masks:t,role:e},i}var ru=5,nu=512,vg=.7,iu=class{projectors=new Map;loader=new yr;loggedIds="";depthMaterial=new Xt({colorWrite:!1,side:ie});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,o]of this.projectors)e.has(r)||this.drop(o);for(let[r,o]of e){let s=this.projectors.get(r);if(!s){let a=new Ye(nu,nu);a.depthTexture=new ai(nu,nu),s={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new tn(60,16/9,vg,40),target:a,matrix:new _e,uniforms:{uProjMat:{value:new _e},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},s.camera.layers.set(ru),this.projectors.set(r,s)}s.url=o,this.fetch(s)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`Home 3D lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=Ce;let r=n.image;r?.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`Home 3D lab: first picture of ${t.id}`,r?.width,"x",r?.height),t.texture?.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`Home 3D lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,o){for(let s of this.projectors.values()){let a=s.texture?r(s.id):null;if(s.texture&&!a&&!s.noPoseLogged&&(s.noPoseLogged=!0,console.warn(`Home 3D lab: ${s.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!a){for(let b of s.overlays.values())b.visible=!1;continue}let l=new Set(n.map(b=>b.key));for(let[b,g]of s.overlays)l.has(b)||(g.parent?.remove(g),g.material.dispose(),s.overlays.delete(b));for(let b of n){let g=s.overlays.get(b.key);(!g||g.parent!==b.parent)&&(g&&(g.parent?.remove(g),g.material.dispose()),g=new St(b.geometry,this.material(s,b.masks)),g.renderOrder=2.5,g.frustumCulled=!1,b.parent.add(g),s.overlays.set(b.key,g)),g.geometry!==b.geometry&&(g.geometry=b.geometry),g.visible=b.visible}let c=`${a.position.toArray().map(b=>b.toFixed(3))},${a.direction.toArray().map(b=>b.toFixed(3))},${a.fov},${a.reach},${s.aspect.toFixed(3)},${o}`;if(c===s.poseKey)continue;s.poseKey=c;let h=s.camera,u=Math.min(150,Math.max(20,a.fov))*(Math.PI/180);h.fov=2*Math.atan(Math.tan(u/2)/s.aspect)*180/Math.PI,h.aspect=s.aspect,h.far=a.reach,h.near=vg,h.position.copy(a.position),h.lookAt(a.position.clone().add(a.direction)),h.updateProjectionMatrix(),s.uniforms.uNearFar.value=[h.near,h.far],h.updateMatrixWorld(),s.uniforms.uProjMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);let f=[];for(let b of this.projectors.values())for(let g of b.overlays.values())g.visible&&f.push(g);for(let b of f)b.visible=!1;let d=t.getRenderTarget(),p=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(s.target),t.clear(),t.render(e,h),t.setRenderTarget(d),e.overrideMaterial=p;for(let b of f)b.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){for(let e of t.overlays.values())e.parent?.remove(e),e.material.dispose();t.texture?.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new Xt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?On(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(o,s)=>{r?.(o,s),Object.assign(o.uniforms,t.uniforms),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function yg(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function _g(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[o,s,a]=[i[r-1],i[r],i[r+1]],l=yg(o,s),c=yg(s,a),h=Math.min(t,l*.45,c*.45),u=[(o[0]-s[0])/l,(o[1]-s[1])/l,(o[2]-s[2])/l],f=[(a[0]-s[0])/c,(a[1]-s[1])/c,(a[2]-s[2])/c];if(h<.005||u[0]*f[0]+u[1]*f[1]+u[2]*f[2]<-.999){n.push(s);continue}let d=[s[0]+u[0]*h,s[1]+u[1]*h,s[2]+u[2]*h],p=[s[0]+f[0]*h,s[1]+f[1]*h,s[2]+f[2]*h];for(let b=0;b<=e;b++){let g=b/e,m=(1-g)*(1-g),x=2*(1-g)*g,y=g*g;n.push([m*d[0]+x*s[0]+y*p[0],m*d[1]+x*s[1]+y*p[1],m*d[2]+x*s[2]+y*p[2]])}}return n.push(i[i.length-1]),n}var Mg=new J(7568261),wg=new J(4869974),nS=new J(3116287),Sg=new J(3948872),Df=Gr([.35,.85,.4]),Tg=10;function Gr(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function aa(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function Eg(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Gr(aa(i,t));return[e,Gr(aa(i,e))]}function Pi(i,t){let e=.5+.5*Math.max(0,t[0]*Df[0]+t[1]*Df[1]+t[2]*Df[2]);return i.clone().multiplyScalar(e)}function Yo(i,t,e,n,r,o=!1){let s=Gr([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=Eg(s),c=(h,u)=>{let f=u/Tg*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[h[0]+d[0]*n,h[1]+d[1]*n,h[2]+d[2]*n],n:d}};for(let h=0;h<Tg;h++){let u=c(t,h),f=c(t,h+1),d=c(e,h),p=c(e,h+1);i.tri(u.p,p.p,d.p,Pi(r,u.n),Pi(r,p.n),Pi(r,d.n)),i.tri(u.p,f.p,p.p,Pi(r,u.n),Pi(r,f.n),Pi(r,p.n)),o&&(i.tri([...t],f.p,u.p,Pi(r,[-s[0],-s[1],-s[2]])),i.tri([...e],d.p,p.p,Pi(r,s)))}}function iS(i,t,e,n,r,o,s,a){let l=Gr(aa(e,n)),c=(u,f,d)=>[t[0]+e[0]*u*r+n[0]*f*o+l[0]*d*s,t[1]+e[1]*u*r+n[1]*f*o+l[1]*d*s,t[2]+e[2]*u*r+n[2]*f*o+l[2]*d*s],h=[];for(let[u,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])h.push([u,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[u,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])h.push([u,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[u,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])h.push([u,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[u,f]of h){let d=Pi(a,u);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function Ag(i,t){if(t.points.length<2)return;let e=t.radius,n=_g(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[o,s]=[n[r-1],n[r]];if(Math.hypot(s[0]-o[0],s[1]-o[1],s[2]-o[2])<1e-4)continue;let a=o[1]<-.02&&s[1]<-.02?Mg.clone().multiplyScalar(.55):Mg;Yo(i,o,s,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let o=s=>[[r.p[0]-r.dir[0]*s,r.p[1]-r.dir[1]*s,r.p[2]-r.dir[2]*s],[r.p[0]+r.dir[0]*s,r.p[1]+r.dir[1]*s,r.p[2]+r.dir[2]*s]];if(r.kind==="sleeve"){let[s,a]=o(.03);Yo(i,s,a,e*1.22,wg,!0)}else if(r.kind==="sight"){let[s,a]=o(.08);Yo(i,s,a,e*1.08,t.water?new J(...t.water).multiplyScalar(.9):new J(10475240),!0);for(let l of o(.08)){let[c,h]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];Yo(i,c,h,e*1.3,wg,!0)}}else{let[s,a]=o(.055);Yo(i,s,a,e*1.4,Sg,!0);let[l]=Eg(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],h=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];Yo(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],h,e*.35,Sg,!0);let u=r.open===!1?Gr(aa(r.dir,c)):r.dir,f=Gr(aa(u,c)),d=[h[0]+u[0]*.045,h[1]+u[1]*.045,h[2]+u[2]*.045];iS(i,d,u,f,.1,.028,.012,nS)}}}var Of=1.62,ou=.2,Nf=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let o=di(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=o.walls;let s=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=Oo(a,e.rooms,e.walls??[]);if(!c)continue;let h=No(this.walls,a,c);if(!h)continue;let u=h.wall,f=u.b[0]-u.a[0],d=u.b[1]-u.a[1],p=Math.hypot(f,d)||1,b=f/p,g=d/p,m=[u.a[0]+b*h.s,u.a[1]+g*h.s],x=u.left+.45,y=u.right+.45,v=[[m[0]-g*x,m[1]+b*x],[m[0]+g*y,m[1]-b*y]];if(u.exterior&&e.elevation>.3&&!(e.outdoor??[]).some(S=>S.points.length>=3&&Zt(v[1],S.points)))continue;let M=s.get(u)??[];M.push([h.s-a.width/2+.05,h.s+a.width/2-.05]),s.set(u,M),this.doors.push({centre:m,p:v})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c);h<1e-6||this.solids.push({a:a.a,u:[l/h,c/h],len:h,left:a.left,right:a.right,gaps:s.get(a)??[]})}}blocked(t,e=ou){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=ou){for(let n of this.obstacles){let r=t[0]-n.c[0],o=t[1]-n.c[1];if(Math.abs(r*n.u[0]+o*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+o*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=ou){for(let n of this.solids){let r=t[0]-n.a[0],o=t[1]-n.a[1],s=r*n.u[0]+o*n.u[1];if(s<-e||s>n.len+e)continue;let a=-r*n.u[1]+o*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>s>l+e*.6&&s<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let o=1;o<=r;o++){let s=o/r;if(this.blocked([t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]))return!1}return!0}roomAt(t){return this.rooms.find(e=>Zt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let p=this.path(d,e);return p?[d,...p]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let p=this.path(t,d);return p?[...p,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>rS(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let p=ou+.12,b=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,m])=>[d.c[0]+d.u[0]*g*(d.hw+p)+b[0]*m*(d.hd+p),d.c[1]+d.u[1]*g*(d.hw+p)+b[1]*m*(d.hd+p)])}).filter(d=>!this.blocked(d)),o=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],s=o.length,a=new Array(s).fill(1/0),l=new Array(s).fill(-1),c=new Array(s).fill(!1);a[0]=0;let h=new Map,u=(d,p)=>{let b=d<p?`${d}:${p}`:`${p}:${d}`,g=h.get(b);return g===void 0&&(g=this.clear(o[d],o[p]),h.set(b,g)),g};for(;;){let d=-1;for(let p=0;p<s;p++)!c[p]&&a[p]<1/0&&(d<0||a[p]<a[d])&&(d=p);if(d<0)return null;if(d===1)break;c[d]=!0;for(let p=0;p<s;p++){if(c[p]||p===d)continue;let b=Math.hypot(o[d][0]-o[p][0],o[d][1]-o[p][1]);a[d]+b>=a[p]||u(d,p)&&(a[p]=a[d]+b,l[p]=d)}}let f=[];for(let d=1;d>0;d=l[d])f.unshift(o[d]);return f}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let o=Oo(r,this.floor.rooms,this.floor.walls??[]);if(!o)continue;let s=No(this.walls,r,o);if(!s||!s.wall.exterior)continue;let a=s.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c)||1,u=l/h,f=c/h,d=[a.a[0]+u*s.s,a.a[1]+f*s.s],p=[d[0]-f*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(u,-f))}}let e=[...this.rooms].sort((r,o)=>Rg(o)-Rg(r))[0],n=e?this.freeNear(Qi(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),o=Math.sin(e);for(let s=.2;s<n;s+=.15)if(this.blocked([t[0]+r*s,t[1]+o*s],.05))return s;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let o=0;o<24;o++){let s=o/24*Math.PI*2,a=this.sight(t,s);if(e!==null){let l=Math.abs(s-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=s)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function rS(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r||1,s=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o));return Math.hypot(i[0]-(t[0]+n*s),i[1]-(t[1]+r*s))}function Rg(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,o]=e[n],[s,a]=e[(n+1)%e.length];t+=r*a-s*o}return Math.abs(t/2)}var Uf=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let o=r.start??(()=>{let s=e.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...o},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let s of t.floors)s.mask.standing.value=65535,s.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+Of}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,o=this.floorY(),s=Math.cos(r);return this.v.camera.position.set(t,o,e),this.v.camera.lookAt(t+Math.cos(n)*s,o+Math.sin(r),e+Math.sin(n)*s),this.v.controls.view.target.set(t,o-Of,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(Qi(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,o=0,s=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(o+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(o-=1),this.keys.has("a")&&(s-=1),this.keys.has("d")&&(s+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(o+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),o||s){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*o-Math.sin(r.yaw)*s)*l,h=(Math.sin(r.yaw)*o+Math.cos(r.yaw)*s)*l;this.move(c,h),n=!0}else if(this.path.length){let[l,c]=this.path[0],h=l-r.x,u=c-r.z,f=Math.hypot(h,u),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=h/f*d,r.z+=u/f*d,this.turnTo=Math.atan2(u,h)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,o=1-(e-n.top)/n.height*2,{yaw:s,pitch:a,x:l,z:c}=this.state,h=this.v.camera.fov*Math.PI/180,u=Math.tan(h/2),f=n.width/n.height,d=Math.cos(a),p=[Math.cos(s)*d,Math.sin(a),Math.sin(s)*d],b=[-Math.sin(s),0,Math.cos(s)],g=[p[1]*b[2]-p[2]*b[1],p[2]*b[0]-p[0]*b[2],p[0]*b[1]-p[1]*b[0]],m=[-g[0],-g[1],-g[2]],x=[p[0]+b[0]*r*u*f+m[0]*o*u,p[1]+b[1]*r*u*f+m[1]*o*u,p[2]+b[2]*r*u*f+m[2]*o*u];if(x[1]>=-.02)return null;let y=Of/-x[1];return[l+x[0]*y,c+x[2]*y]}bind(){let t=(s,a,l,c)=>{s.addEventListener(a,l,c),this.listeners.push([s,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",s=>{e||(e={x:s.clientX,y:s.clientY,moved:!1,id:s.pointerId},this.surface.setPointerCapture?.(s.pointerId))}),t(this.surface,"pointermove",s=>{if(!e||s.pointerId!==e.id)return;let a=s.clientX-e.x,l=s.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=s.clientX,e.y=s.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=s=>{if(!e||s.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(s.clientX,s.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",s=>{s.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-s.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=s=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(s.key.toLowerCase()),o=s=>!!s.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",s=>{!r(s)||o(s)||s.ctrlKey||s.metaKey||s.altKey||(s.preventDefault(),s.stopImmediatePropagation(),this.keys.add(s.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",s=>{r(s)&&(this.keys.delete(s.key.toLowerCase()),s.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function oS(i,t){let e=be(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function Bf(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,o=r?oS(n,r):null;return o?[n,o]:[n]});return{...i,furniture:e}}var Pg=8,Cg=1024,Ci=6,su=class{group=new Te;shadow;target=null;arc=new Te;glow=lS();textures=[];constructor(){this.shadow=new St(new Wn(1,1),new Xt({color:0,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,this.arc.visible=!1,this.group.add(this.shadow,this.arc)}setShadow(t,e,n,r,o,s,a=0){let[l,c,h,u]=[n[0]-.5,n[1]-.5,n[2]+.5,n[3]+.5],f=Math.min(Cg,Math.max(32,Math.ceil((h-l)*Pg))),d=Math.min(Cg,Math.max(32,Math.ceil((u-c)*Pg)));if(!this.target||this.target.width!==f||this.target.height!==d){this.target?.dispose(),this.target=new Ye(f,d,{minFilter:Xe,magFilter:Xe,depthBuffer:!1});let S=this.shadow.material;S.map=this.target.texture,S.needsUpdate=!0}let p=new si,b=S=>{let E=new Float32Array(S.length/2*3);for(let A=0,T=0;A<S.length;A+=2,T+=3)E.set([S[A],-S[A+1],0],T);let _=new Vt;return _.setAttribute("position",new It(E,3)),_},g=new St(b(e),new Xt({color:16777215,side:ie})),m=[];for(let S of r)for(let E of gn(S))for(let _ of E)m.push(S[_][0],S[_][1]);let x=new St(b(m),new Xt({color:0,transparent:!0,opacity:0,blending:Ln,side:ie}));x.renderOrder=1,p.add(g,x);let y=new An(l,h,-c,-u,.1,10);y.position.z=1;let v=t.getRenderTarget();t.setRenderTarget(this.target),t.clear(),t.render(p,y),t.setRenderTarget(v);for(let S of[g,x])S.geometry.dispose(),S.material.dispose();this.shadow.scale.set(h-l,u-c,1),this.shadow.position.set((l+h)/2,o,(c+u)/2);let M=this.shadow.material;M.opacity=s,M.color.set(a),this.shadow.visible=s>.01}hideShadow(){this.shadow.visible=!1}showShadow(t){let e=this.shadow.material;this.shadow.visible=t&&!!e.map&&e.opacity>.01}setArc(t){if(this.clearArc(),t.fade<=.01||t.points.length<2)return;let e=t.light?yn:Ae,n=(o,s)=>{let a=aS(t.points.map(c=>c.at),o,t.points.map(c=>sS(c.elevation,t.light).multiplyScalar(c.t<=t.now?1:t.light?.75:.5))),l=new St(a,new Xt({vertexColors:!0,transparent:!0,opacity:s*t.fade,blending:e,depthWrite:!1}));return l.renderOrder=6,l};this.arc.add(n(t.size*.09,t.light?.95:1)),t.light||this.arc.add(n(t.size*.3,.22));let r=new Wi(Ig(t.hours.flat()),new Ei({color:t.light?13658624:16767370,map:this.glow,size:t.size*.55,transparent:!0,opacity:t.fade,blending:e,depthWrite:!1}));if(r.renderOrder=6,this.arc.add(r),t.sun){let o=this.sprite(cS(t.light),t.size*5,t.size*5,t.fade,e);o.position.set(...t.sun),this.arc.add(o)}for(let o of t.labels){let s=this.sprite(uS(`${o.rising?"\u2191":"\u2193"} ${o.text}`,t.light),t.size*5.2,t.size*1.7,t.fade,yn,!0);s.position.set(...o.at),this.arc.add(s)}this.buildRing(t),this.arc.visible=!0}buildRing(t){let{center:e,r:n,north:r,letters:o}=t.ring,s=e[1]+.03,a=(h,u)=>{let f=r+h*Math.PI/180;return[e[0]+Math.sin(f)*u,s,e[2]-Math.cos(f)*u]},l=[];for(let h=0;h<360;h+=3)l.push(...a(h,n),...a(h+3,n));for(let h=0;h<360;h+=15)l.push(...a(h,n),...a(h,n*(h%90===0?.93:.97)));let c=new qe(Ig(l),new Ze({color:t.light?9071162:16761963,transparent:!0,opacity:(t.light?.45:.32)*t.fade,blending:t.light?yn:Ae,depthWrite:!1}));c.renderOrder=6,this.arc.add(c),o.forEach((h,u)=>{let f=this.sprite(hS(h,u===0,t.light),t.size*1.6,t.size*1.6,t.fade,yn,!0);f.position.set(...a(u*90,n*1.07)),f.position.y+=t.size*.6,this.arc.add(f)})}sprite(t,e,n,r,o,s=!1){this.textures.push(t);let a=new ps(new xo({map:t,transparent:!0,opacity:r,blending:o,depthWrite:!1,depthTest:!s}));return a.scale.set(e,n,1),a.renderOrder=6,a}hideArc(){this.clearArc()}clearArc(){for(let t of[...this.arc.children]){this.arc.remove(t);let e=t;e.geometry?.dispose(),e.material.dispose()}for(let t of this.textures)t.dispose();this.textures=[],this.arc.visible=!1}dispose(){this.clearArc(),this.target?.dispose(),this.glow.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}};function Ig(i){let t=new Vt;return t.setAttribute("position",new It(i,3)),t}function sS(i,t){let e=Math.min(1,Math.max(0,i/35)),n=new J(t?13778970:16730666),r=new J(t?14711552:16753978),o=new J(t?15769600:16773832);return e<.4?n.lerp(r,e/.4):r.lerp(o,(e-.4)/.6)}function aS(i,t,e){let n=[],r=[],o=[],s=new Y(0,1,0);for(let l=0;l<i.length;l++){let c=new Y(...i[l]),h=new Y(...i[Math.max(0,l-1)]),f=new Y(...i[Math.min(i.length-1,l+1)]).sub(h).normalize(),d=new Y().crossVectors(f,s);d.lengthSq()<1e-6&&d.set(1,0,0),d.normalize();let p=new Y().crossVectors(d,f).normalize();for(let b=0;b<Ci;b++){let g=b/Ci*Math.PI*2,m=c.clone().addScaledVector(d,Math.cos(g)*t).addScaledVector(p,Math.sin(g)*t);n.push(m.x,m.y,m.z),r.push(e[l].r,e[l].g,e[l].b)}if(l!==0)for(let b=0;b<Ci;b++){let g=(l-1)*Ci+b,m=(l-1)*Ci+(b+1)%Ci,x=l*Ci+b,y=l*Ci+(b+1)%Ci;o.push(g,x,y,g,y,m)}}let a=new Vt;return a.setAttribute("position",new It(n,3)),a.setAttribute("color",new It(r,3)),a.setIndex(o),a}function au(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function lS(){let[i,t]=au(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new dn(i)}function cS(i){let[t,e]=au(256,256);e.translate(128,128);for(let r=0;r<12;r++){e.save(),e.rotate(r/12*Math.PI*2);let o=r%2===0?124:92,s=e.createLinearGradient(0,0,0,-o);s.addColorStop(0,i?"rgba(240,140,0,0.75)":"rgba(255,214,140,0.7)"),s.addColorStop(1,"rgba(255,170,60,0)"),e.fillStyle=s,e.beginPath(),e.moveTo(-7,0),e.lineTo(0,-o),e.lineTo(7,0),e.fill(),e.restore()}let n=e.createRadialGradient(0,0,0,0,0,80);return n.addColorStop(0,i?"rgba(255,190,60,0.95)":"rgba(255,236,190,1)"),n.addColorStop(.3,i?"rgba(245,150,20,0.8)":"rgba(255,190,90,0.75)"),n.addColorStop(1,"rgba(255,140,40,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,80,0,Math.PI*2),e.fill(),e.fillStyle=i?"#fff3cf":"#fffaf0",e.beginPath(),e.arc(0,0,22,0,Math.PI*2),e.fill(),new dn(t)}function uS(i,t){let[e,n]=au(320,104);n.font="600 52px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let r=Math.min(304,n.measureText(i).width+56),o=(320-r)/2;return n.beginPath(),typeof n.roundRect=="function"?n.roundRect(o,10,r,84,42):n.rect(o,10,r,84),n.fillStyle=t?"rgba(255,248,236,0.92)":"rgba(20,12,4,0.72)",n.fill(),n.lineWidth=4,n.strokeStyle=t?"rgba(224,123,0,0.9)":"rgba(255,196,107,0.85)",n.stroke(),n.fillStyle=t?"#a34f00":"#ffe2a8",n.fillText(i,160,54),new dn(e)}function hS(i,t,e){let[n,r]=au(96,96);return r.font=`${t?800:600} 64px system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=e?"rgba(255,255,255,0.9)":t?"rgba(255,90,60,0.9)":"rgba(255,196,107,0.8)",r.shadowBlur=12,r.fillStyle=t?e?"#c0301a":"#ff6a4a":e?"#7a5a2a":"#ffd9a0",r.fillText(i,48,52),new dn(n)}function Ug(i,t,e){return/\b(iPhone|iPod)\b/.test(i)||/Android/.test(i)&&/\bMobile\b/.test(i)||e>0&&t>0&&t<600?"phone":/\biPad\b/.test(i)||/Android|\bSilk\b/.test(i)||/Macintosh/.test(i)&&e>1?"tablet":"desktop"}function Bg(i,t,e){return i==="phone"||!e?null:t?{size:1024,soft:!1,live:!1}:{size:2048,soft:!0,live:!0}}var Lg=Math.PI/180,bi=i=>Math.min(1,Math.max(0,i)),gi=(i,t,e)=>i.map((n,r)=>n+(t[r]-n)*e);function kg(i,t,e){if(!i)return{dir:[0,1,0],sun:0,color:[1,1,1],sky:1.6,shadow:0};let n=bi(t),r=(e+i.azimuth)*Lg,o=Math.max(0,i.elevation)*Lg,s=[Math.sin(r)*Math.cos(o),Math.sin(o),-Math.cos(r)*Math.cos(o)],l=2.6*bi(i.elevation/10)*(1-.75*n),c=bi((i.elevation+6)/12);return{dir:s,sun:l,color:gi([1,.62,.38],[1,.96,.9],bi(i.elevation/20)),sky:.35+c*(.75+.4*n),shadow:l>0?1-.8*n:0}}var Fg={top:[74,140,214],horizon:[178,208,234]},Dg={top:[148,155,164],horizon:[192,197,203]},Og={top:[8,12,26],horizon:[24,32,54]},fS=[244,156,104],Ng=[186,190,195],dS=[88,112,70],pS=[226,231,238];function kf(i,t){let e=t??{cloud:0,rain:0,snow:0,fog:0},n=i??90,r=bi(e.cloud),o=bi((n+6)/12),s=1-.32*bi(e.rain),a=gi(Fg.top,Dg.top,r).map(p=>p*s),l=gi(Fg.horizon,Dg.horizon,r).map(p=>p*s),c=bi(1-Math.abs(n-1)/7)*(1-r);l=gi(l,fS,c*.85),a=gi(a,[92,112,168],c*.4);let h=bi(e.fog);a=gi(a,Ng,h),l=gi(l,Ng,h),a=gi(Og.top,a,o),l=gi(Og.horizon,l,o);let f=gi(dS,pS,bi(e.snow*1.25)).map(p=>p*(.15+.85*o)),d=p=>p.map(b=>Math.round(b));return{top:d(a),horizon:d(l),ground:d(f)}}function mS(i){return i instanceof Xt&&i.userData.fp3dThemed==="surface"&&i.blending===yn}var lu=class{group=new Te;sunLight=new Es(16777215,0);skyLight=new Ss(12900590,5791818,1);lawn;twins=new Map;depths=new WeakMap;meshes=new Set;on=!1;plan=null;dirty=!0;constructor(){let t=new Mo({color:5795914,flatShading:!0,transparent:!0,depthWrite:!1});t.alphaMap=gS(),this.lawn=new St(new xr(1,48),t),this.lawn.rotation.x=-Math.PI/2,this.lawn.receiveShadow=!0,this.lawn.renderOrder=-2,this.group.add(this.sunLight,this.sunLight.target,this.skyLight,this.lawn)}get active(){return this.on}enable(t,e){if(e!==this.on){if(this.on=e,this.dirty=!0,e){t.add(this.group);return}t.remove(this.group);for(let n of this.meshes){let r=n.material.userData.fp3dBasic;r&&(n.material=r),n.castShadow=!1,n.receiveShadow=!1,n.customDepthMaterial=void 0}this.meshes.clear()}}setPlan(t,e){let n=this.plan;this.plan=e;let r=this.on&&!!e,o=e?.size??0;if(t.shadowMap.enabled!==r){t.shadowMap.enabled=r;for(let s of this.twins.values())s.needsUpdate=!0;this.lawn.material.needsUpdate=!0}t.shadowMap.type=e?.soft?_r:Qu,t.shadowMap.autoUpdate=!!e?.live,this.sunLight.castShadow=r,o&&(!n||n.size!==o)&&(this.sunLight.shadow.map?.dispose(),this.sunLight.shadow.map=null,this.sunLight.shadow.mapSize.set(o,o)),this.sunLight.shadow.radius=e?.soft?3:1,this.sunLight.shadow.bias=e?.soft?-6e-4:-.002,this.dirty=!0}touch(){this.dirty=!0}update(t,e,n,r){let o=kg(t,e?.cloud??0,n),s=kf(t?t.elevation:null,e),a=h=>new J().setRGB(h[0]/255,h[1]/255,h[2]/255,Ce);this.sunLight.intensity=o.sun,this.sunLight.color.setRGB(o.color[0],o.color[1],o.color[2],Ce),this.sunLight.shadow.intensity=o.shadow;let l=r.r*2;this.sunLight.position.set(r.x+o.dir[0]*l,r.y+o.dir[1]*l,r.z+o.dir[2]*l),this.sunLight.target.position.set(r.x,r.y,r.z),this.sunLight.target.updateMatrixWorld();let c=this.sunLight.shadow.camera;c.left=c.bottom=-r.r,c.right=c.top=r.r,c.near=.5,c.far=l*2,c.updateProjectionMatrix(),this.skyLight.intensity=o.sky,this.skyLight.color.copy(a(s.horizon).lerp(a(s.top),.4).lerp(new J(1,1,1),.6)),this.skyLight.groundColor.copy(a(s.ground)),this.lawn.material.color.copy(a(kf(null,e).ground)),this.lawn.position.set(r.x,r.y,r.z),this.lawn.scale.setScalar(r.r*1.6),this.dirty=!0}realize(t,e,n,r=!1){if(!this.on)return;let o=new Set;t.traverse(s=>{let a=s;if(!a.isMesh)return;let l=a.material,c=Array.isArray(l)?null:l.userData.fp3dBasic??(mS(l)?l:null);if(!c)return;o.add(a),a.material=this.twin(c);let h=c.visible&&c.depthWrite&&(!c.transparent||c.opacity>.85);a.castShadow=e&&h,a.receiveShadow=e;let u=c.userData.fp3dFold;a.customDepthMaterial=u&&u.role!=="glass"?this.depth(u.masks,u.role):void 0}),this.meshes=o;for(let[s,a]of this.twins)zg(s,a);n&&this.plan&&!this.plan.live&&(this.dirty||r)&&(n.shadowMap.needsUpdate=!0),this.dirty=!1}dispose(){for(let t of this.twins.values())t.dispose();this.twins.clear(),this.lawn.geometry.dispose(),this.lawn.material.alphaMap?.dispose(),this.lawn.material.dispose(),this.sunLight.shadow.map?.dispose(),this.sunLight.dispose()}twin(t){let e=this.twins.get(t);if(e)return e;e=new Mo({vertexColors:t.vertexColors,map:t.map,flatShading:!0}),e.userData.fp3dBasic=t,e.userData.fp3dVersion=t.version,zg(t,e),e.onBeforeCompile=(r,o)=>{t.onBeforeCompile(r,o),r.fragmentShader=r.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * fp3dGlow;`)},e.customProgramCacheKey=()=>`${t.customProgramCacheKey()}-lit`;let n=e;return t.addEventListener("dispose",()=>{n.dispose(),this.twins.delete(t)}),this.twins.set(t,e),e}depth(t,e){let n=this.depths.get(t);n||this.depths.set(t,n=new Map);let r=n.get(e);return r||n.set(e,r=On(new wo,t,e)),r}};function gS(){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");if(!t)return null;let e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"#fff"),e.addColorStop(.55,"#fff"),e.addColorStop(1,"#000"),t.fillStyle=e,t.fillRect(0,0,64,64),new dn(i)}function zg(i,t){t.opacity=i.opacity,t.transparent=i.transparent,t.visible=i.visible,t.side=i.side,t.depthWrite=i.depthWrite,t.depthTest=i.depthTest,t.alphaTest=i.alphaTest,t.polygonOffset=i.polygonOffset,t.polygonOffsetFactor=i.polygonOffsetFactor,t.polygonOffsetUnits=i.polygonOffsetUnits,t.color.copy(i.color),t.map!==i.map&&(t.map=i.map,t.needsUpdate=!0),t.userData.fp3dVersion!==i.version&&(t.userData.fp3dVersion=i.version,t.needsUpdate=!0)}var bS=40;function Vg(i,t,e,n,r){let o=[];if(n<=0)return o;let s=1/Math.tan(n*Math.PI/180),a=(c,h,u)=>{let f=Math.min(bS,Math.max(0,h-r)*s);return[c-e[0]*f,u-e[1]*f]},l=(c,h,u)=>o.push(c[0],c[1],h[0],h[1],u[0],u[1]);for(let c of i.floors)for(let h of c.rooms){if(h.outdoor||h.points.length<3)continue;let u=c.elevation+(h.ceiling_height??c.height);if(u<=r)continue;let f=Math.max(r,c.elevation),d=h.points.map(([b,g])=>a(b,f,g)),p=h.points.map(([b,g])=>a(b,u,g));for(let[b,g,m]of gn(h.points))l(d[b],d[g],d[m]),l(p[b],p[g],p[m]);for(let b=0;b<h.points.length;b++){let g=(b+1)%h.points.length;l(d[b],d[g],p[g]),l(d[b],p[g],p[b])}}for(let c of t){let h=c.floor.elevation+c.base,u=c.solid.p;for(let f=0;f+8<u.length;f+=9)l(a(u[f],h+u[f+1],u[f+2]),a(u[f+3],h+u[f+4],u[f+5]),a(u[f+6],h+u[f+7],u[f+8]))}return o}function Gg(i){if(!i.length)return null;let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let o=0;o<i.length;o+=2)t=Math.min(t,i[o]),n=Math.max(n,i[o]),e=Math.min(e,i[o+1]),r=Math.max(r,i[o+1]);return[t,e,n,r]}function zf(i,t){let e=[],n=[],r=[],o=[],s=[];for(let{face:l,field:c}of i){let h=e.length/3,u=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=xS(c.id)%1e3/1e3;for(let b of Qs(l,c)){let[g,m,x,y]=b.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),v=[[g,0,0],[m,1,0],[x,1,1],[y,0,1]];for(let M of[0,1,2,0,2,3]){let[S,E,_]=v[M];e.push(S[0],S[1],S[2]),n.push(E,_),r.push(u,f),o.push(d)}}let p=e.length/3-h;p&&s.push({id:c.id,start:h,count:p})}if(!e.length)return null;let a=new Vt;return a.setAttribute("position",new It(e,3)),a.setAttribute("uv",new It(n,2)),a.setAttribute("aCells",new It(r,2)),a.setAttribute("aPhase",new It(o,1)),a.setAttribute("aLevel",new It(new Float32Array(e.length/3),1)),{geometry:a,ranges:s}}function la(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let o of i.ranges){let s=Math.min(1,Math.max(0,t.get(o.id)??0));n.fill(s,o.start,o.start+o.count),s>.02&&(r=!0)}return e.needsUpdate=!0,r}function Vf(i){let t=new Xt({transparent:!0,blending:Ae,depthWrite:!1,side:ie});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function xS(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var Wg=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,vS=`
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
`,yS=Wg,_S=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function Hg(i,t){let e=[];for(let[r,o,s]of gn(i))for(let a of[r,s,o])e.push(i[a][0],t,i[a][1]);let n=new Vt;return n.setAttribute("position",new It(e,3)),n}function Xg(i,t){let e=new Te;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,o=(s,a)=>{let l=new St(Hg(n.points,s),new pn({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:Wg,fragmentShader:vS,transparent:!0,blending:Ae,depthWrite:!1,side:ie}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(o(n.floorY+.01,0),o(n.y+.004,1)):o(n.y+.004,0),n.cover>.02){let s=n.points.map(g=>g[0]),a=n.points.map(g=>g[1]),[l,c,h,u]=[Math.min(...s),Math.max(...s),Math.min(...a),Math.max(...a)],f=c-l>=u-h,d=Math.min(1,n.cover),p=f?[[l-.1,h-.1],[l+(c-l)*d,h-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,h-.1],[c+.1,h-.1],[c+.1,h+(u-h)*d],[l-.1,h+(u-h)*d]],b=Bo(n.points,p);if(b.length>=3){let g=new St(Hg(b,n.y+.03),new pn({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:yS,fragmentShader:_S,transparent:!0,side:ie}));g.renderOrder=6,e.add(g);let m=[];for(let y=0;y<b.length;y++){let v=b[y],M=b[(y+1)%b.length];m.push(v[0],n.y+.032,v[1],M[0],n.y+.032,M[1])}let x=new Vt;x.setAttribute("position",new It(m,3)),e.add(new qe(x,new Ze({color:5995775,transparent:!0,opacity:.6})))}}}return e}function Yg(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var qg=["neon","blueprint","day","realistic"];function Zg(i){return qg.indexOf(i)}var qo={value:new Y(.22,.88,1)},$o={value:0};function Kg(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var $g=i=>{let t=new J(i);return`vec3(${t.r.toFixed(6)}, ${t.g.toFixed(6)}, ${t.b.toFixed(6)})`},MS=`vec3 fp3dFloor(vec3 c) {
${Object.entries(lg).map(([i,t])=>`  if (distance(c, ${$g(Qc[i].color)}) < 0.0002) return ${$g(t)};`).join(`
`)}
  return vec3(-1.0);
}`,wS=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
// the realistic look: how much a signal colour lights itself (lit lamps, open windows, screens glow in the light)
float fp3dGlow = 0.0;
${MS}
vec3 fp3dThemed(vec3 c, bool line) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
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
  // day: light surfaces that keep their shading and some of their hue, dark blue lines (#645: too bright, too flat \u2013
  // the neon surfaces' dark tones are spread wider, so walls, floors and furniture stand apart)
  if (line) return vec3(0.05, 0.11, 0.27) * clamp(mx * 1.6, 0.6, 1.0);
  vec3 g = vec3(clamp(0.28 + l * 3.6, 0.0, 0.92));
  return mix(g, g * (c / max(mx, 0.001)), 0.3);
}
`;function rn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,s)=>{n(o,s),o.uniforms.uTheme=t,o.uniforms.uAccent=qo,o.uniforms.uAccentOn=$o,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${wS}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});${e?`
  if (uTheme == 3) diffuseColor.a *= 0.22;`:""}`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i.userData.fp3dThemed=e?"line":"surface",i}function ca(i){return i==="day"||i==="realistic"?yn:Ae}var Ii=.012,SS=.012;function jg(i,t,e,n,r,o=[],s){let a=[],l=[],c=[],h=[],u=(m,x,y,v,M,S,E)=>{for(let _ of[m,x,y,m,y,v])a.push(_[0],_[1],_[2]),l.push(M[0],M[1],M[2]),c.push(S),h.push(E)};i.rooms.forEach((m,x)=>{if(m.points.length<3)return;let y=m.points.map(w=>w[0]),v=m.points.map(w=>w[1]),M=Math.min(...y),S=Math.min(...v),E=Math.max(...y),_=Math.max(...v),A=Math.max(1,Math.ceil((E-M)/r)),T=Math.max(1,Math.ceil((_-S)/r));for(let w=0;w<A;w++)for(let C=0;C<T;C++){let N=M+w*r,L=S+C*r,R=Math.min(N+r,E),P=Math.min(L+r,_),F=Bo(m.points,[[N,L],[R,L],[R,P],[N,P]]),D=F.length>=3?Math.abs(CS(F)):0;if(D<1e-4)continue;let U=IS(F);if(!o.some(k=>Zt(U,k))){if(D>(R-N)*(P-L)-1e-6){u([N,Ii,L],[N,Ii,P],[R,Ii,P],[R,Ii,L],[0,1,0],x,-1);continue}for(let[k,V,X]of gn(F)){let z=F[k],$=F[X],j=F[V];(j[1]-z[1])*($[0]-z[0])-(j[0]-z[0])*($[1]-z[1])<0&&([z,$]=[$,z]),u([z[0],Ii,z[1]],[j[0],Ii,j[1]],[$[0],Ii,$[1]],[$[0],Ii,$[1]],[0,1,0],x,-1)}}}});let f=i.rooms.length,d=(i.outdoor??[]).filter(m=>m.points.length>=3&&!Zn(m.type));if(d.length){let m=d.flatMap(_=>_.points.map(A=>A[0])),x=d.flatMap(_=>_.points.map(A=>A[1])),y=Math.floor(Math.min(...m)/r)*r,v=Math.floor(Math.min(...x)/r)*r,M=Math.max(1,Math.ceil((Math.max(...m)-y)/r)),S=Math.max(1,Math.ceil((Math.max(...x)-v)/r)),E=(_,A,T)=>X0(i,_)-Gs(i,_,A,T)+Ii;for(let _=0;_<M;_++)for(let A=0;A<S;A++){let T=y+_*r,w=v+A*r,C,N=[T+r/2,w+r/2];C=d.find(R=>R.type==="pool"&&Zt(N,R.points));for(let R=d.length-1;R>=0&&!C;R--)Zt(N,d[R].points)&&(C=d[R]);if(!C)continue;let L=(R,P)=>[R,E(C,R,P),P];u(L(T,w),L(T,w+r),L(T+r,w+r),L(T+r,w),[0,1,0],f,-1)}}let p=Math.min(i.cut_height,i.height),b=[];t.forEach((m,x)=>{let y=Math.min(i.height,m.height??i.height),v=Math.min(p,y-.02),M=m.b[0]-m.a[0],S=m.b[1]-m.a[1],E=Math.hypot(M,S);if(E<.05)return;let _=[M/E,S/E],A=[-_[1],_[0]],T=e[x],w=ES(m,_,E,n),C=(P,F)=>P?i.rooms.findIndex(D=>D.id===P):F?f:-1;b.push({a:m.a,b:m.b,h:y,ra:C(m.roomLeft,!1),rb:C(m.roomRight,m.exterior),gaps:w});let N=(P,F,D)=>[F,D,...P.filter(U=>U>F+.005&&U<D-.005)].sort((U,k)=>U-k).filter((U,k,V)=>k===0||U>V[k-1]+.005),L=N([v,(v+y)/2,...w.flatMap(P=>[P.y0+.01,P.y1-.01])],.02,y-.02),R=N(w.flatMap(P=>[P.s0,P.s1]),0,E);for(let P of[1,-1]){let F=P>0?m.roomLeft:m.roomRight,D=F?i.rooms.findIndex(z=>z.id===F):m.exterior?f:-1;if(D<0)continue;let U=(P>0?m.left:m.right)+SS,k=[A[0]*P,A[1]*P],V=(z,$)=>[m.a[0]+_[0]*z+k[0]*U,$,m.a[1]+_[1]*z+k[1]*U],X=z=>{let $=V(z,0),j=s?.($[0],$[2]);return j==null?1/0:j-.02};for(let z=0;z<R.length-1;z++){let $=R[z+1]-R[z],j=Math.max(1,Math.ceil($/r));for(let at=0;at<j;at++){let H=R[z]+$/j*at,W=R[z]+$/j*(at+1),Q=(H+W)/2;for(let ot=0;ot<L.length-1;ot++){let et=L[ot],ht=L[ot+1];if(ht-et<.01)continue;let gt=(et+ht)/2;if(w.some(Rt=>Q>Rt.s0&&Q<Rt.s1&&gt>Rt.y0&&gt<Rt.y1))continue;let lt=et>=p-1e-6?T:rr+T,dt=Math.min(ht,X(H)),Dt=Math.min(ht,X(W));dt<=et+.005&&Dt<=et+.005||u(V(H,et),V(W,et),V(W,Math.max(et,Dt)),V(H,Math.max(et,dt)),[k[0],0,k[1]],D,lt)}}}}});let g=[];for(let m of n){if(m.opening.type!=="door")continue;let x=t.find(M=>Qg(M,m)&&TS(M,m));if(!x||!x.roomLeft||!x.roomRight)continue;let y=i.rooms.findIndex(M=>M.id===x.roomLeft),v=i.rooms.findIndex(M=>M.id===x.roomRight);y<0||v<0||g.push({id:m.opening.id,a:y,b:v,x:m.start[0]+m.axis[0]*(m.width/2),y:Math.min(1.1,m.top*.55),z:m.start[1]+m.axis[1]*(m.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:g,blockers:b}}function Qg(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function TS(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,o=t.start[0]+t.axis[0]*(t.width/2),s=t.start[1]+t.axis[1]*(t.width/2),a=((o-i.a[0])*e+(s-i.a[1])*n)/r;return a>-.05&&a<r+.05}function ES(i,t,e,n){let r=[];for(let o of n){if(!Qg(i,o))continue;let s=(o.start[0]-i.a[0])*t[0]+(o.start[1]-i.a[1])*t[1],l=o.axis[0]*t[0]+o.axis[1]*t[1]>0?s:s-o.width;l>e||l+o.width<0||r.push({s0:l,s1:l+o.width,y0:o.sill-.01,y1:o.top+.01})}return r}function AS(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function RS(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Jg(i,t,e,n,r,o,s){let a=t-i.x,l=e-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=RS(i),d=1/(1+h/(f*f)),p=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*o+c*s)/u);return i.level*p*(.2+.8*b)*AS(i.kind,l/u)}function tb(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((h,u)=>{let f=n[u]??.5;if(!(f<=.01))for(let[d,p]of[[h.a,h.b],[h.b,h.a]]){let b=[0,0,0];for(let m of t){if(m.room!==d)continue;let x=m.x-h.x,y=m.y-h.y,v=m.z-h.z,M=Math.hypot(x,y,v)||1,S=Jg(m,h.x,h.y,h.z,x/M,y/M,v/M);b[0]+=m.color[0]*S,b[1]+=m.color[1]*S,b[2]+=m.color[2]*S}let g=Math.max(b[0],b[1],b[2]);g<.01||r.push({x:h.x,y:h.y,z:h.z,color:[b[0]/g,b[1]/g,b[2]/g],level:Math.min(1,g*.9*(.35+.65*f)),kind:"wall",room:p})}});let o=new Map;for(let h of r){let u=i.blockers.filter(d=>d.ra===h.room||d.rb===h.room),f={...h,color:h.color.map(d=>Math.pow(d,1.5)),walls:u};o.set(h.room,[...o.get(h.room)??[],f])}let{pos:s,normal:a,room:l}=i,c=new Float32Array(s.length);for(let h=0;h<l.length;h++){let u=o.get(l[h]);if(!u)continue;let f=h*3,d=0,p=0,b=0;for(let g of u){if(g.walls.length&&PS(g,g.walls,s[f],s[f+1],s[f+2]))continue;let m=Jg(g,s[f],s[f+1],s[f+2],a[f],a[f+1],a[f+2]);d+=g.color[0]*m,p+=g.color[1]*m,b+=g.color[2]*m}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-p*e*1.6),c[f+2]=1-Math.exp(-b*e*1.6)}return c}function PS(i,t,e,n,r){let o=e-i.x,s=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=o*c-s*l;if(Math.abs(h)<1e-9)continue;let u=a.a[0]-i.x,f=a.a[1]-i.z,d=(u*c-f*l)/h;if(d<=1e-6||d>=1-1e-6)continue;let p=(u*s-f*o)/h;if(p<0||p>1)continue;let b=i.y+(n-i.y)*d;if(b>=a.h)continue;let g=p*Math.hypot(l,c);if(!a.gaps.some(m=>g>m.s0&&g<m.s1&&b>m.y0&&b<m.y1))return!0}return!1}function Gf(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&Zt([t,e],r.points));return n<0?i.rooms.length:n}function Zo(i,t){return i&&t>=0&&t<i.length?i[t]:t}function CS(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function IS(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}var ua={open:0,open2:0,tilt:0,tilt2:0,cover:null},eb=2043986,nb=2769520,LS=2242399,Hf=1845831,FS=1450554,Li=16758087,cu=3662079,DS=1.2,OS=1.5,NS=.5,US=1846349,BS=2572395,kS=1120816,zS=1845831,ib=5995775,rb=9085695,Ko=kt(3662079,.08),VS=.2;function uu(i,t,e,n,r,o,s,a,l,c,h){let u=(d,p,b)=>t(d,p,b),f=[[u(e,r,a),u(n,r,a),u(n,o,a),u(e,o,a),c],[u(e,r,s),u(n,r,s),u(n,o,s),u(e,o,s),kt(l.getHex(),.6)],[u(e,o,s),u(n,o,s),u(n,o,a),u(e,o,a),l],[u(e,r,s),u(n,r,s),u(n,r,a),u(e,r,a),kt(l.getHex(),.85)],[u(e,r,s),u(e,o,s),u(e,o,a),u(e,r,a),kt(l.getHex(),.92)],[u(n,r,s),u(n,o,s),u(n,o,a),u(n,r,a),kt(l.getHex(),.92)]];for(let[d,p,b,g,m]of f)i.tri(d,p,b,m,m,m,void 0,h),i.tri(d,b,g,m,m,m,void 0,h)}function fe(i,t,e,n,r,o,s,a,l,c,h,u){if(a<=h+1e-6)return uu(i,t,e,n,r,o,s,a,l,c,Jt);if(s>=h-1e-6)return uu(i,t,e,n,r,o,s,a,l,c,u);uu(i,t,e,n,r,o,s,h,l,c,Jt),uu(i,t,e,n,r,o,h,a,l,c,u)}function Fi(i,t,e,n,r,o,s,a,l,c,h=0){let u=(f,d,p)=>{let b=v=>h?(s-v)/h:.5,g=t(e,r,f),m=t(n,r,f),x=t(n,r,d),y=t(e,r,d);i.tri(g,m,x,a,a,a,[0,b(f),1,b(f),1,b(d)],p),i.tri(g,x,y,a,a,a,[0,b(f),1,b(d),0,b(d)],p)};s<=l+1e-6?u(o,s,Jt):o>=l-1e-6?u(o,s,c):(u(o,l,Jt),u(l,s,c))}function GS(i,t,e,n,r,o,s,a,l,c){let h=t(e,r,s),u=t(n,r,s),f=t(n,o,s),d=t(e,o,s),p=0,b=(o-r)/c;i.tri(h,u,f,a,a,a,[0,p,1,p,1,b],l),i.tri(h,f,d,a,a,a,[0,p,1,b,0,b],l)}function HS(i,t){let[e,n]=i.axis;for(let r of t){if(r===i||r.opening.id===i.opening.id)continue;let o=e*r.axis[0]+n*r.axis[1];if(Math.abs(o)<.999)continue;let s=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(s*n-a*e)>.03)continue;let l=s*e+a*n,c=o>0?l:l-r.width,h=c+r.width;if(Math.min(i.width,h)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let f=i.sill-r.top;if(f>=-.05&&f<=.3)return!0}return!1}function WS(i,t){let e=i.opening.sill_board??"auto";if(e==="none")return{inside:!1,outside:!1};if(e==="inside"||e==="outside")return{inside:e==="inside",outside:e==="outside"};let n=i.sill>.3&&!HS(i,t)&&hi(i.opening,i.exterior)!=="glass_wall";return{inside:n,outside:n&&i.exterior}}function ob(i,t,e,n,r,o,s,a,l){let c=WS(i,t),h=i.width,u=Math.max(i.sill,.03);c.inside&&fe(e,n,-.04,h+.04,r+o,i.faceRoom+.07,u-.03,u,new J(Hf),s,a,l),c.outside&&fe(e,n,-.03,h+.03,-i.faceOut-.06,r-o,u-.04,u-.02,new J(Hf),s,a,l)}function sb(i,t,e){let n=new jt,r=new jt,o=new jt(!0),s=new J(eb),a=new J(nb),l=[],c=[],h=[];for(let u of i){let f=n.count,d=r.count,p=o.count,b=t.get(u.opening.id)??ua,g=u.width,{sill:m,top:x,bucket:y}=u,v=(_,A,T)=>[u.start[0]+u.axis[0]*_+u.toRoom[0]*A,T,u.start[1]+u.axis[1]*_+u.toRoom[1]*A],M=(u.faceRoom-u.faceOut)/2,S=u.opening.mark==="closed",E=u.opening.type==="door"&&hi(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!E||u.opening.type==="garage"){let _=-u.faceOut-.012,A=u.faceRoom+.012,T=u.opening.type==="garage"&&(S?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),w=T?kt(Li,.8):new J(eb),C=T?kt(Li,1):new J(nb);fe(n,v,-.045,.02,_,A,m,x+.045,w,C,e,y),fe(n,v,g-.02,g+.045,_,A,m,x+.045,w,C,e,y),fe(n,v,.02,g-.02,_,A,x-.02,x+.045,w,C,e,y)}if(u.opening.type==="door"){let _=hi(u.opening,u.exterior),A=Dm(_),T=u.opening.swing==="out"?-1:1,w=T>0?u.faceRoom:-u.faceOut,C=u.opening.leaves===2,N=.02,L=g-.02,R=Fm(g,_,u.hingeAtStart,u.opening);if(R){let k=-u.faceOut-.012,V=u.faceRoom+.012,X=w-T*(A?.06:.04)/2,z=.06;for(let[$,j]of R.panels)fe(n,v,$,$+z,k,V,m+.02,x-.02,s,a,e,y),fe(n,v,j-z,j,k,V,m+.02,x-.02,s,a,e,y),fe(n,v,$+z,j-z,k,V,m+.02,m+.12,s,a,e,y),Fi(r,v,$+z,j-z,X,m+.12,x-.02,Ko,e,y);N=R.x0,L=R.x1}let P=C?(L-N)/2-.004:L-N,F=A?.06:.04;u.exterior&&(A||_==="glass")&&fe(n,v,g/2-.08,g/2+.08,-u.faceOut-.1,-u.faceOut,x+.1,x+.17,kt(Li,.55),kt(Li,.85),e,Jt),A&&fe(n,v,.02,g-.02,-u.faceOut-.02,u.faceRoom,m,m+.02,new J(Hf),a,e,y);let D=E?[]:[[u.hingeAtStart,b.open]];C&&!E&&D.push([!u.hingeAtStart,b.open2??0]);let U=u.opening.open_angle;for(let[k,V]of D){let X=Math.min(1,Math.max(0,V)),z=_==="sliding"?0:U!=null&&U>0?(b.sensed?X:Math.min(1,X/NS))*Math.min(170,U)*(Math.PI/180):X*OS,$=_==="sliding"?X*P:0,j=(lt,dt,Dt)=>{let Rt=lt*Math.cos(z)-dt*Math.sin(z)-$,ne=w+T*(dt*Math.cos(z)+lt*Math.sin(z)+($?.05:0));return v(k?N+Rt:L-Rt,ne,Dt)},at=X>.05?Jt:y,H=S?!!b.sensed&&X<.05:X>.9,W=H?kt(Li,.7):new J(A?kS:US),Q=H?kt(Li,.9):new J(A?zS:BS);_==="glass"?(fe(n,j,0,.05,-F,0,m+.01,x-.01,W,Q,e,at),fe(n,j,P-.05,P,-F,0,m+.01,x-.01,W,Q,e,at),fe(n,j,.05,P-.05,-F,0,m+.01,m+.12,W,Q,e,at),fe(n,j,.05,P-.05,-F,0,x-.08,x-.01,W,Q,e,at),Fi(r,j,.05,P-.05,-F/2,m+.12,x-.08,Ko,e,at)):fe(n,j,0,P,-F,0,m+.01,x-.01,W,Q,e,at);for(let lt of[.001,-F-.001])_==="front_glass"?Fi(r,j,.12,P-.12,lt,m+(x-m)*.55,x-.18,Ko,e,at):A&&Fi(r,j,.1,.18,lt,m+.3,x-.3,Ko,e,at);let ot=m+Math.min(1.05,(x-m)*.5),et=A?.3:.012,ht=A?P-.11:P-.16,gt=A?P-.08:P-.05;fe(n,j,ht,gt,.004,.05,ot-et,ot+et,new J(ib),new J(rb),e,at),fe(n,j,ht,gt,-F-.05,-F-.004,ot-et,ot+et,new J(ib),new J(rb),e,at),b.unlocked&&k===u.hingeAtStart&&fe(n,j,P-.022,P+.004,-F-.006,.006,m+.03,x-.03,kt(cu,.85),kt(cu,1),e,at)}}else if(u.opening.type==="garage"&&hi(u.opening,u.exterior)==="up_and_over"){let _=Math.min(1,Math.max(0,b.cover??1)),A=u.faceRoom-.03,T=x-m,w=T/3,C=(1-_)*(Math.PI/2),N=m+w+(x-.03-m-w)*(1-_),L=(P,F,D)=>v(P,A+D*Math.sin(C)+F*Math.cos(C),N+D*Math.cos(C)-F*Math.sin(C)),R=Math.cos(C)>.01?(e-N)/Math.cos(C):N>e?-1/0:1/0;Fi(o,L,.02,g-.02,0,-w,T-w,new J(13951231),R,y,.5)}else if(u.opening.type==="garage"){let _=Math.min(1,Math.max(0,b.cover??1)),A=new J(13951231),T=u.faceRoom-.03,w=x*(1-_);_>.01&&Fi(o,v,.02,g-.02,T,w,x,A,e,y,.5);let C=(1-_)*x;C>.01&&GS(o,v,.02,g-.02,T,T+C,x+.03,A,y,.5)}else if(hi(u.opening,u.exterior)==="glass_wall"){fe(n,v,0,.04,M-.025,M+.025,m,x,s,a,e,y),fe(n,v,g-.04,g,M-.025,M+.025,m,x,s,a,e,y),fe(n,v,.04,g-.04,M-.025,M+.025,m,m+.03,s,a,e,y),fe(n,v,.04,g-.04,M-.025,M+.025,x-.04,x,s,a,e,y),ob(u,i,n,v,M,.025,a,e,y);let T=Math.max(1,Math.round((g-2*.04)/.9)),w=(g-2*.04)/T;for(let C=1;C<T;C++){let N=.04+C*w;fe(n,v,N-.02,N+.02,M-.025,M+.025,m+.03,x-.04,s,a,e,y)}for(let C=0;C<T;C++){let N=.04+C*w+(C?.02:0),L=.04+(C+1)*w-(C<T-1?.02:0);Fi(r,v,N,L,M,m+.03,x-.04,Ko,e,y)}}else{fe(n,v,0,.06,M-.035,M+.035,m,x,s,a,e,y),fe(n,v,g-.06,g,M-.035,M+.035,m,x,s,a,e,y),fe(n,v,.06,g-.06,M-.035,M+.035,m,m+(m>.05?.06:.03),s,a,e,y),fe(n,v,.06,g-.06,M-.035,M+.035,x-.06,x,s,a,e,y),ob(u,i,n,v,M,.035,a,e,y);let T=.055,w=m+(m>.05?.06:.03),C=x-.06,N=M+.035,L=M+.035+.06,P=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:g/2,x1:u.hingeAtStart?g/2:g-.06,open:b.open,tilt:b.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?g/2:.06,x1:u.hingeAtStart?g-.06:g/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:g-.06,open:b.open,tilt:b.tilt}];for(let F of P){let D=F.open>.02||F.tilt>.02,U=S?!!b.sensed&&!D:D,k=U?kt(Li,.75):new J(LS),V=U?kt(Li,.95):a,X=F.x0,z=F.x1,$=z-X,j=F.open*DS*(u.opening.swing==="out"?-1:1),at=F.tilt*VS,H=(Q,ot,et)=>{let ht=et-w,gt=ot+ht*Math.sin(at),lt=w+ht*Math.cos(at),dt=Q*Math.cos(j)-(gt-N)*Math.sin(j);gt=N+(gt-N)*Math.cos(j)+Q*Math.sin(j);let Dt=F.atStart?X+dt:z-dt;return v(Dt,gt,lt)},W=Math.abs(j)>.05?Jt:y;if(fe(n,H,0,T,N,L,w,C,k,V,e,W),fe(n,H,$-T,$,N,L,w,C,k,V,e,W),fe(n,H,T,$-T,N,L,w,w+T,k,V,e,W),fe(n,H,T,$-T,N,L,C-T,C,k,V,e,W),Fi(r,H,T,$-T,(N+L)/2,w+T,C-T,U?kt(Li,.16):Ko,e,W),b.unlocked&&F.atStart===u.hingeAtStart&&fe(n,H,$-.022,$+.004,N-.006,L+.006,w+.02,C-.02,kt(cu,.85),kt(cu,1),e,W),hi(u.opening,u.exterior)==="bars"){let Q=(w+C)/2,ot=(N+L)/2;fe(n,H,T,$-T,ot-.012,ot+.012,Q-.012,Q+.012,k,V,e,W),fe(n,H,$/2-.012,$/2+.012,ot-.012,ot+.012,w+T,C-T,k,V,e,W)}}}if(b.cover!==null&&!(u.opening.type==="garage"&&hi(u.opening,u.exterior)==="up_and_over")){let _=-u.faceOut,A=x+.2;fe(n,v,-.05,g+.05,_-.15,_,x,A,new J(FS),a,e,y);let T=Math.min(1,Math.max(0,b.cover));if(T>.01){let w=x-T*(x-m);Fi(o,v,0,g,_-.07,w,x,new J(16777215),e,y,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),h.push({id:u.opening.id,start:p,end:o.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:o.geometry(),frameTris:l,glassTris:c,blindTris:h}}var XS=.3,ab=2.6;function lb(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),o=i.map(M=>M[1]),s=Math.min(...r),a=Math.max(...r),l=Math.min(...o),c=Math.max(...o),h=c-l>=a-s,u=e*.7071,f=M=>{let S=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],E=[...S,[M[0]+u,M[1]+u],[M[0]-u,M[1]+u],[M[0]+u,M[1]-u],[M[0]-u,M[1]-u]];return S.every(_=>Zt(_,i))&&!n.some(_=>E.some(A=>Zt(A,_)))},d=(M,S)=>f(h?[M,S]:[S,M]),p=(M,S)=>{let E=Math.ceil(Math.hypot(S[0]-M[0],S[1]-M[1])/.05);for(let _=1;_<E;_++)if(!f([M[0]+(S[0]-M[0])*_/E,M[1]+(S[1]-M[1])*_/E]))return!1;return!0},[b,g,m,x]=h?[s,a,l,c]:[l,c,s,a],y=[],v=!0;for(let M=b+e;M<=g-e+1e-6;M+=t){let S=null,E=null,_=.05;for(let C=m;C<=x+1e-6;C+=_)if(d(M,C)&&(E??=C),(!d(M,C)||C+_>x+1e-6)&&E!==null){let N=d(M,C)?C:C-_;(!S||N-E>S[1]-S[0])&&(S=[E,N]),E=null}if(!S||S[1]-S[0]<.2)continue;let A=C=>{let[N,L]=C?S:[S[1],S[0]];return[h?[M,N]:[N,M],h?[M,L]:[L,M]]},T=A(v),w=y[y.length-1];if(w&&n.length&&!p(w,T[0])){let C=A(!v);if(!p(w,C[0]))continue;T=C,v=!v}y.push(T[0],T[1]),v=!v}return y}function Xf(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let o=r/e*Math.PI*2;return[i[0]+Math.cos(o)*t,i[1]+Math.sin(o)*t]})}var Wf=i=>Math.atan2(Math.sin(i),Math.cos(i));function cb(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],o=n[1]-i.pos[1],s=Math.hypot(r,o);if(s<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Wf(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),ab*e),!0)}let a=Math.atan2(r,o),l=Wf(a-i.heading);if(i.heading=Wf(i.heading+Math.sign(l)*Math.min(Math.abs(l),ab*e)),Math.abs(l)<.35){let c=Math.min(s,XS*e);i.pos=[i.pos[0]+r/s*c,i.pos[1]+o/s*c]}return!0}function ub(i,t,e,n=200){return t?e>=3e4?null:Math.max(i,n):i}var YS=66,qS=250;function hb(i,t){return i?t>=3e4?qS:YS:0}function fb(i,t,e){let n=t??8,r=e||8;return n<=3||r<=4||/\bSilk\b/.test(i)?!0:/Android/.test(i)&&/\bKF[A-Z]{2,5}\b/.test(i)}function hu(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}var Nn=null,db=new Map;function Yf(i,t=0){let e=new jt,n=new Ne,r=be(i.type);if(r?.light)Xc(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)qf(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let o={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Wc(e,n,new jt,o,0,!0)}return{buf:e,lines:n}}function $S(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,o=db.get(r);if(o)return o;e&&zs(e);let s=mb(Yf(i),t,new Y(.9,.75,1.3),n);return db.set(r,s),s}function ZS(i,t=320,e=35,n=25,r=1.3){let[o,s,a]=i.size,l=pm(Yh,i,()=>Yf({type:Yh,w:o,d:s,h:a})),c=e*Math.PI/180,h=Math.max(-80,Math.min(80,n))*Math.PI/180;return mb(l,t,new Y(Math.sin(c)*Math.cos(h),Math.sin(h),Math.cos(c)*Math.cos(h)),r)}function mb({buf:i,lines:t},e,n,r){Nn??=new Er({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Nn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Nn.setSize(e,e,!1),Nn.setClearColor(0,0);let o=new si,s=new St(i.geometry(),new Xt({vertexColors:!0,color:new J(r,r,r)})),a=new qe(t.geometry(),new Ze({vertexColors:!0,color:new J(r*1.8,r*1.8,r*1.8)}));o.add(s,a);let l=new vn().setFromObject(s),c=l.isEmpty()?new Y:l.getCenter(new Y),h=new An(-1,1,1,-1,.01,100);h.position.copy(c).add(n.clone().normalize().multiplyScalar(20)),h.lookAt(c),h.updateMatrixWorld();let u=.05;if(!l.isEmpty())for(let p of[l.min.x,l.max.x])for(let b of[l.min.y,l.max.y])for(let g of[l.min.z,l.max.z]){let m=new Y(p,b,g).applyMatrix4(h.matrixWorldInverse);u=Math.max(u,Math.abs(m.x),Math.abs(m.y))}let f=u*1.12;h.left=-f,h.right=f,h.top=f,h.bottom=-f,h.updateProjectionMatrix(),Nn.render(o,h);let d=Nn.domElement.toDataURL("image/png");return s.geometry.dispose(),s.material.dispose(),a.geometry.dispose(),a.material.dispose(),d}function KS(i,t,e=160,n,r=1.25){let o=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,s=pb.get(o);if(s)return s;n&&zs(n);let{buf:a,lines:l}=Yf(i,t),c=new St(a.geometry(),new Xt({vertexColors:!0,color:new J(r,r,r)})),h=new qe(l.geometry(),new Ze({vertexColors:!0,color:new J(r*1.8,r*1.8,r*1.8)})),u=new vn().setFromObject(c);if(u.isEmpty())return null;let f=u.min.x,d=u.max.x,p=Math.max(0,u.min.y),b=u.max.y,g=Math.max(1,Math.min(1024,Math.round((d-f)*e))),m=Math.max(1,Math.min(1024,Math.round((b-p)*e)));Nn??=new Er({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Nn.setPixelRatio(1),Nn.setSize(g,m,!1),Nn.setClearColor(0,0);let x=new si;x.add(c,h);let y=new An(f,d,b,p,.01,100);y.position.set(0,0,50),y.lookAt(0,0,0),y.updateProjectionMatrix(),Nn.render(x,y);let v=Nn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose();let M={url:v,x0:f,x1:d,y0:p,y1:b};return pb.set(o,M),M}var pb=new Map;var IC={Group:Te,Mesh:St,MeshBasicMaterial:Xt,CanvasTexture:dn,Color:J,PlaneGeometry:Wn,BufferGeometry:Vt,Float32BufferAttribute:It,DoubleSide:ie},bb={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},JS=[.22,.88,1],Ab=2.4,xb=Ab,jS=.22,vb=.94,yb=140,_b=1.5;function QS(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[o,s]=e[r],[a,l]=e[(r+1)%e.length],c=a-o,h=l-s,u=c*c+h*h||1,f=Math.max(0,Math.min(1,((i-o)*c+(t-s)*h)/u));n=Math.min(n,Math.hypot(i-(o+c*f),t-(s+h*f)))}return n}var $f=32,tT=500,Mb=160,eT=33,wb=.028,nT=.026,iT=.012,rT=.09,re=2767456,oT=2240847,sT=3096944,aT=1911110,lT=1,Sb=new Set(["ceiling","downlight","spot","panel","pendant","fan","strip"]),fu=450,Tb=125,cT=200,uT=.08,fa={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],fan:[1.3,1.3,.45],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},hT=new J(1714765);function fT(){let i=navigator;return fb(navigator.userAgent,i.deviceMemory,navigator.hardwareConcurrency)}var Zf=class{host;options;renderer;scene=new si;camera=new tn(38,1,.1,400);controls;labels;root=new Te;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];patches=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";roofGeos=[];sunFx=new su;sunPath=null;shadowSig="";arcSig="";spillNight="";compassLetters=["N","E","S","W"];flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;personAt=new Map;personLook="figure";figures=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;lastWake=performance.now();highlighted=new WeakMap;decorWas=!1;decorTimer;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;fans=new Map;fanMat=null;fanLast=0;fanTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};realism=new lu;tier=Ug(navigator.userAgent,Math.min(screen.width||0,screen.height||0),navigator.maxTouchPoints||0);sun=null;weather=null;rain=new qe(new Vt,new Ze({color:10471679,transparent:!0,opacity:.4,blending:Ae,depthWrite:!1}));snow=new Wi(new Vt,new Ei({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new St(new xr(1,28),new Xt({color:16767370,transparent:!0,opacity:0,blending:Ae,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=pT(),this.blindTexture=gT(),this.haloTexture=vT(),this.ground=new St(new Wn(1,1),new Xt({transparent:!1,blending:Ae,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc,this.sunFx.group),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility);for(let n of["pointerdown","pointerup","wheel","keydown"])t.addEventListener(n,this.onInput,{capture:!0,passive:!0});typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(o=>o.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}get resting(){return this.decor(0)===null}wake(){let t=this.resting;this.lastWake=performance.now(),t&&this.invalidate()}animate(){if(!this.lowQuality)return this.invalidate();if(this.decorTimer||this.frame)return;let t=hb(!0,performance.now()-this.lastWake);this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},t)}decor(t,e){return ub(t,this.lowQuality,performance.now()-this.lastWake,e)}onInput=()=>this.wake();setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n,this.applyRealism();let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t,e){zs(t),e&&Xh(e),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.lastWake=performance.now(),this.building=t,wm(t),Xh(t.recipes),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.lastWake=performance.now(),this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyHouseLines(),this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.lastWake=performance.now(),this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(h=>Ac(h.floor).some(u=>u.id===t)),n=e?Ac(e.floor).find(h=>h.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let h=e.floor.elevation+e.ty,[u,f]=Qi(n.points),d=r.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new Y(d.x,d.y+h,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[o,s]=Qi(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new Y(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new Y(o,e.floor.elevation+e.ty+.3,s),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.syncFans(t),this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let o=r.el;r.icon!==n.icon&&(r.icon=n.icon,o.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,o.querySelector(".fp3d-dev-text").textContent=n.text);let s=n.caption??"";r.caption!==s&&(r.caption=s,o.querySelector(".fp3d-dev-name").textContent=s);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,o.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,o.title=n.name,o.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,o.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,o.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(h=>Math.round(h*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?o.style.setProperty("--fp3d-glow",c):o.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])la(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&la(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(Yg(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=Xg(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Te;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let o=t.filter(c=>c.floorId===n.floor.id),s=.03;for(let c of o)if(c.playing)for(let h=0;h<3;h++){let u=new St(new _s(.92,1,48),new Xt({color:3662079,transparent:!0,opacity:0,blending:Ae,depthWrite:!1,side:ie}));u.rotation.x=-Math.PI/2,u.position.set(c.x,s+h*.002,c.z),u.userData={sound:!0,phase:h/3,level:c.level},u.frustumCulled=!1,r.add(u)}let a=[],l=new Set;for(let c of o)for(let h of c.members){let u=o.find(d=>d.id===h);if(!u||u===c)continue;let f=[c.id,u.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,s+.02,c.z,u.x,s+.02,u.z))}if(a.length){let c=new Vt;c.setAttribute("position",new It(a,3));let h=new qe(c,new Ze({color:3662079,transparent:!0,opacity:.45,blending:Ae,depthWrite:!1}));h.userData={soundLine:!0},r.add(h)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let o=(e*.45+r.userData.phase)%1,s=r.userData.level,a=.25+o*(.9+1.6*s);r.scale.set(a,a,1),r.material.opacity=(1-o)*(.25+.45*s)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let o=ha(r),s=hu(r.power),a=this.flowPhase.get(o);n.set(o,{speed:s,offset:a?e*(a.speed-s)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}setPatches(t){this.patches=t;for(let e of this.floors)this.buildPatches(e);this.invalidate()}buildPatches(t){let e=this.patches.filter(r=>r.floorId===t.floor.id&&r.points.length>=3&&r.opacity>0),n=JSON.stringify(e);if(n!==t.patchSig){t.patchSig=n;for(let r of[!1,!0]){let o=[],s=[];for(let c of e){if(!!c.glow!==r)continue;let h=Math.min(1,c.opacity);for(let u of gn(c.points))for(let f of u)o.push(c.points[f][0],c.y,c.points[f][1]),s.push(c.color[0],c.color[1],c.color[2],h)}let a=r?t.patchGlowMesh:t.patchMesh,l=new Vt;l.setAttribute("position",new It(o,3)),l.setAttribute("color",new It(s,4)),a.geometry.dispose(),a.geometry=l,a.visible=o.length>0}}}buildPipes(t){let e=this.pipes.filter(o=>o.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new jt;for(let o of e)Ag(r,o);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersonLook(t){t!==this.personLook&&(this.personLook=t,this.setPersons(this.persons))}makeFigure(t){let e=s=>{let a=[],l=(f,d,p,b,g)=>{let m=Math.hypot(p-f,b-d)||1,x=-(b-d)/m*(g/2+s),y=(p-f)/m*(g/2+s);a.push(f+x,d+y,0,p+x,b+y,0,p-x,b-y,0,f+x,d+y,0,p-x,b-y,0,f-x,d-y,0)},h=.14+s;for(let f=0;f<18;f++){let d=f/18*Math.PI*2,p=(f+1)/18*Math.PI*2;a.push(0,1.47,0,Math.cos(d)*h,1.47+Math.sin(d)*h,0,Math.cos(p)*h,1.47+Math.sin(p)*h,0)}l(0,1.32,0,.8,.13),l(0,1.24,-.28,.9,.07),l(0,1.24,.28,.9,.07),l(-.02,.82,-.15,.02,.08),l(.02,.82,.15,.02,.08);let u=new Vt;return u.setAttribute("position",new It(a,3)),u},n=new St(e(0),new Xt({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:ie})),r=new St(e(.05),new Xt({color:t,transparent:!0,opacity:.22,blending:Ae,depthWrite:!1,side:ie}));n.renderOrder=6,r.renderOrder=5;let o=new Te;return o.add(r,n),o.visible=!1,o}dropFigure(t){let e=this.figures.get(t);if(e){this.scene.remove(e);for(let n of e.children)n.geometry.dispose(),n.material.dispose();this.figures.delete(t)}}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(!r){r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id;let a=n.id;r.addEventListener("pointerdown",l=>l.stopPropagation()),r.addEventListener("click",l=>{l.stopPropagation();let c=this.persons.find(f=>f.id===a);if(!c?.entity)return;let h=l.currentTarget.getBoundingClientRect(),u=this.host.getBoundingClientRect();this.options.onDeviceHold?.(c.entity,h.left+h.width/2-u.left,h.top+h.height/2-u.top)}),this.personPins.set(n.id,r),this.labels.append(r)}r.title=n.name,r.setAttribute("aria-label",n.name),r.style.setProperty("--fp3d-pc",n.color??"#ff5fd2");let o=this.personLook==="figure"&&!!n.entity&&!n.thing;r.classList.toggle("fp3d-person-figure",o);let s=this.figures.get(n.id);if(o&&(!s||s.userData.color!==(n.color??"#ff5fd2"))){this.dropFigure(n.id);let a=this.makeFigure(n.color??"#ff5fd2");a.userData.color=n.color??"#ff5fd2",this.figures.set(n.id,a),this.scene.add(a)}else!o&&s&&this.dropFigure(n.id);if(r.classList.toggle("fp3d-person-tap",!!n.entity),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials||r.dataset.tag!==(n.tag??"")){r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.dataset.tag=n.tag??"",r.replaceChildren();let a=document.createElement("span");if(a.className="fp3d-person-face",n.picture){let l=document.createElement("img");l.src=n.picture,l.alt="",l.addEventListener("error",()=>l.replaceWith(document.createTextNode(n.initials))),a.append(l)}else a.textContent=n.initials;if(r.append(a),n.tag){let l=document.createElement("span");l.className="fp3d-person-tag",l.textContent=n.tag,r.append(l)}}}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n),this.personAt.delete(n),this.dropFigure(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=Kg(t),n=e?1:0;n===$o.value&&(!e||qo.value.equals(new Y(...e)))||($o.value=n,e&&qo.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=Zg(t),F0(t!=="neon"),this.building?.floors.some(o=>o.furniture.some(k0))&&this.rebuild();let n=ca(t),r=[...this.floors.map(o=>o.materials.lines),...this.roof?[this.roof.lines]:[]];for(let o of r)o.blending=n,o.needsUpdate=!0;this.placeGround(),this.realism.enable(this.scene,t==="realistic"),this.applyRealism();for(let o of this.floors)o.sunSig="-",this.buildSun(o);this.buildSunFx(),this.invalidate()}realPlan(){return this.theme==="realistic"?Bg(this.tier,this.lowQuality,this.building?.settings.sun_shadow!==!1):null}applyRealism(){this.realism.setPlan(this.renderer,this.realPlan()),this.updateRealism()}updateRealism(){if(!this.realism.active)return;let t=this.arcFrame(),e=this.building,n=e?zr(e):null,r=n&&t?n.elevation+ji(n,{x:t.x-t.r,z:t.z})-.03:-.23;this.realism.update(this.sun,this.weather,e?.settings.north??0,t?{x:t.x,y:r,z:t.z,r:Math.max(12,t.r*1.8)}:{x:0,y:r,z:0,r:15})}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let n of this.floors)this.buildSun(n);let e=this.nightFactor().toFixed(2);if(e!==this.spillNight){this.spillNight=e;for(let n of this.floors)this.buildSpill(n,this.lightSources(n))}this.placeSky(),this.buildSunFx(),this.updateRealism(),this.invalidate()}setSunPath(t,e){this.sunPath=t,e&&(this.compassLetters=e),this.buildSunFx(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.buildSunFx(),this.updateRealism(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new J(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new hs(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,o=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,o,!1),this.rain.visible=r>0,this.snow.visible=o>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let o=this.weatherBox,s=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let h=o.x0+Math.random()*(o.x1-o.x0),u=o.y0+Math.random()*(o.y1-o.y0),f=o.z0+Math.random()*(o.z1-o.z0);s.set([h,u,f],c*3),n&&s.set([h,u-.45,f],c*3+3)}t.geometry.dispose();let l=new Vt;l.setAttribute("position",new It(s,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,o=r.y1-r.y0,s=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let h=0;h<l.length;h+=6){let u=l[h+1]-c,f=l[h]+s*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u,l[h+3]=f-s*.05,l[h+4]=u-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let h=0;h<l.length;h+=3){let u=l[h+1]-(.9+.6*e.snow)*n,f=l[h]+(s+Math.sin(c+h)*.4)*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let o=(this.building?.settings.north??0)*ee,s=(r?t.azimuth+180:t.azimuth)*ee,a=Math.max(10,Math.abs(t.elevation))*ee,{center:l,r:c}=this.skyFrame(),h=new Y(Math.sin(o+s)*Math.cos(a),Math.sin(a),-Math.cos(o+s)*Math.cos(a));this.skyDisc.position.copy(l).addScaledVector(h,c),this.skyDisc.scale.setScalar(c*(r?.03:.04)),this.skyDisc.lookAt(l);let u=this.skyDisc.material;u.color.set(r?13621486:16767370),u.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}skyFrame(){let t=this.weatherBox;return{center:new Y((t.x0+t.x1)/2,t.y0,(t.z0+t.z1)/2),r:Math.min(300,Math.max(80,this.houseRadius*5))}}buildSunFx(){let t=this.building,e=this.sun,n=!!t&&!!e&&t.settings.sun_shadow!==!1,r=(t?.settings.north??0)*ee,o=this.weather?.cloud??0,s=n&&!this.lowQuality&&e.elevation>1&&o<.9&&!this.roomTint&&this.theme!=="realistic",a=s?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${r},${o.toFixed(1)},${this.theme},${this.roofGeos.length}`:"";a!==this.shadowSig&&(this.shadowSig=a,s?this.drawShadow(t,e,r,o):this.sunFx.hideShadow());let l=this.sunPath,c=n&&!!l&&l.points.length>1&&e.elevation>-3,h=c?this.arcFrame():null,u=c&&h?`${this.theme},${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${this.compassLetters.join("")},${l.points[0].t},${r},${h.x.toFixed(2)},${h.z.toFixed(2)},${h.y.toFixed(2)},${h.r.toFixed(2)},${o.toFixed(1)}`:"";if(u===this.arcSig)return;if(this.arcSig=u,!u||!h||!l||!e)return this.sunFx.hideArc();let f=(m,x,y=0)=>{let v=Math.max(0,x)*ee,M=r+m*ee;return[h.x+Math.sin(M)*Math.cos(v)*h.r,h.y+Math.sin(v)*h.r+y,h.z-Math.cos(M)*Math.cos(v)*h.r]},d=1-.7*o,p=Date.now(),b=m=>new Date(m).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),g=h.r*.03;this.sunFx.setArc({points:l.points.map(m=>({at:f(m.azimuth,m.elevation),t:m.t,elevation:m.elevation})),now:p,hours:l.points.filter(m=>m!==l.rise&&m!==l.set&&new Date(m.t).getMinutes()===0).map(m=>f(m.azimuth,m.elevation)),labels:[l.rise,l.set].flatMap(m=>m?[{text:b(m.t),at:f(m.azimuth,m.elevation,g*2.2),rising:m===l.rise}]:[]),sun:e.elevation>0?f(e.azimuth,e.elevation):null,ring:{center:[h.x,h.y,h.z],r:h.r,north:r,letters:this.compassLetters},size:g,fade:d,light:this.theme!=="neon"})}arcFrame(){let t=this.building,e=t?zr(t):null,n=t?.floors.flatMap(h=>h.rooms.filter(u=>!u.outdoor).flatMap(u=>u.points))??[];if(!e||!n.length)return null;let r=n.map(h=>h[0]),o=n.map(h=>h[1]),[s,a,l,c]=[Math.min(...r),Math.max(...r),Math.min(...o),Math.max(...o)];return{x:(s+a)/2,z:(l+c)/2,y:e.elevation,r:Math.max(7,Math.hypot(a-s,c-l)*.62)}}nightFactor(){let t=this.sun;return t?Math.min(1,Math.max(0,-t.elevation/6)):0}buildSpill(t,e){let n=this.building,r=n?.settings.window_glow===!1?0:this.nightFactor(),o=n&&r>0?zr(n):null,s=!!o&&Math.abs(t.floor.elevation-o.elevation)<.5,a=new Map;if(s)for(let u of e){let f=a.get(u.room)??[0,0,0,0];f[0]+=u.color[0]*u.level,f[1]+=u.color[1]*u.level,f[2]+=u.color[2]*u.level,f[3]+=u.level,a.set(u.room,f)}let l=[...t.openings.values()].map(u=>(u.cover??0).toFixed(1)).join(","),c=s&&a.size?`${r.toFixed(2)}|${[...a].map(([u,f])=>`${u}:${f.map(d=>d.toFixed(2)).join("/")}`).join(";")}|${l}`:"";if(c===t.spillSig)return;t.spillSig=c;let h=new jt;if(c)for(let u of t.geo.openings){if(u.opening.type!=="window"||!u.exterior)continue;let f=t.floor.rooms.findIndex(C=>C.id===u.opening.room_id),d=f<0?void 0:a.get(Zo(t.lightZones,f));if(!d||d[3]<.02)continue;let b=1-(t.openings.get(u.opening.id)?.cover??0),g=u.top-u.sill;if(b<.05||g<.1)continue;let m=Math.max(d[0],d[1],d[2],1e-6),x=.3*r*Math.min(1,d[3])*b*Math.min(1,g/1.2),y=new J(d[0]/m*x,d[1]/m*x,d[2]/m*x),v=[-u.toRoom[0],-u.toRoom[1]],M=Math.min(3.5,.8+1.1*u.top),S=.35*M,E=[u.start[0]+u.axis[0]*(u.width/2)+v[0]*(u.faceOut+M/2),u.start[1]+u.axis[1]*(u.width/2)+v[1]*(u.faceOut+M/2)],_=ji(t.floor,{x:E[0],z:E[1]})+.014,A=(C,N)=>{let L=N/M,R=-S*L+C*(u.width+2*S*L);return[u.start[0]+u.axis[0]*R+v[0]*(u.faceOut+N),_,u.start[1]+u.axis[1]*R+v[1]*(u.faceOut+N)]},T=4,w=[[0,0],[.18,1],[.82,1],[1,0]];for(let C=0;C<T;C++){let N=M*C/T,L=M*(C+1)/T,R=(1-C/T)**2,P=(1-(C+1)/T)**2;for(let F=0;F+1<w.length;F++){let[D,U]=w[F],[k,V]=w[F+1],X=A(D,N),z=A(k,N),$=A(k,L),j=A(D,L),at=y.clone().multiplyScalar(R*U),H=y.clone().multiplyScalar(R*V),W=y.clone().multiplyScalar(P*V),Q=y.clone().multiplyScalar(P*U);h.tri(X,z,$,at,H,W),h.tri(X,$,j,at,W,Q)}}}t.spillMesh.geometry.dispose(),t.spillMesh.geometry=h.geometry(),t.spillMesh.visible=h.count>0}drawShadow(t,e,n,r){let o=zr(t),s=o?.rooms.filter(g=>!g.outdoor&&g.points.length>=3)??[];if(!o||!s.length)return this.sunFx.hideShadow();let a=s.flatMap(g=>g.points.map(m=>m[0])),l=s.flatMap(g=>g.points.map(m=>m[1])),c=o.elevation+ji(o,{x:Math.min(...a)-1,z:(Math.min(...l)+Math.max(...l))/2}),h=e.azimuth*ee,u=Vg(t,this.roofGeos,[Math.sin(n+h),-Math.cos(n+h)],e.elevation,c),f=Gg(u);if(!f)return this.sunFx.hideShadow();let d=o.elevation-c<=.35?o.elevation+.012:c+.012,p=t.floors.filter(g=>Math.abs(g.elevation-o.elevation)<.5).flatMap(g=>g.rooms.filter(m=>!m.outdoor&&m.points.length>=3).map(m=>m.points)),b=(this.theme==="neon"?.6:.34)*Math.min(1,e.elevation/8)*(1-.8*r);this.sunFx.setShadow(this.renderer,u,f,p,d,b,this.theme==="neon"?394264:1713203)}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e){for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n);this.buildSunFx()}}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,this.realism.touch(),e)for(let n of this.floors){let r=!1;for(let[o,s]of n.openings){let a=t.get(o)??ua,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===s.open&&l.open2===(s.open2??0)&&l.tilt===s.tilt&&l.tilt2===(s.tilt2??0)&&l.cover===s.cover&&!!l.sensed==!!s.sensed&&!!l.unlocked==!!s.unlocked||(n.openings.set(o,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let o=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};o.tl=r.left?1:0,o.tr=r.right?1:0,this.fridges.set(n,o)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let o=this.awnings.get(n)??{cur:r.out??0,to:r.out??0,speed:0};r.out===null?(o.to=r.moving>0?1:0,o.speed=1/Math.max(2,r.time)):(o.to=r.out,o.speed=0),this.awnings.set(n,o)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)e.floor.furniture.some(n=>t.has(n.id))&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,o]of this.awnings){let s=o.to-o.cur;if(Math.abs(s)<.002){s!==0&&(o.cur=o.to,e.add(r));continue}o.cur=o.speed>0?o.cur+Math.sign(s)*Math.min(Math.abs(s),o.speed*t/1e3):o.cur+s*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/Mb),n=new Set;for(let[r,o]of this.fridges)for(let[s,a]of[["l","tl"],["r","tr"]]){let l=o[a]-o[s];if(Math.abs(l)<.004){l!==0&&(o[s]=o[a],n.add(r));continue}o[s]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(o=>n.has(o.id))&&this.buildFridges(r);return!0}buildFridges(t){let e=new jt;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);U0(e,n,sn(t.floor,n),r?.l??0,r?.r??0)}for(let n of t.floor.furniture)n.type==="awning"&&N0(e,n,sn(t.floor,n),this.awnings.get(n.id)?.cur??0);for(let n of t.floor.furniture){let r=wc(n.type),o=r?be(n.type):void 0;r&&o&&G0(e,o,r,n,sn(t.floor,n),this.awnings.get(n.id)?.cur??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new iu(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*ee,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.05,(e.tilt??(o?65:20))*ee)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y);return{position:new Y(e.x,a,e.z),direction:new Y(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s)),fov:Math.min(e.fov??(o?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(o?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let o of[n.floorMesh,n.wallMesh])o.layers.enable(ru);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(ru),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){this.projections.dispose(),this.realism.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.fanTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.sunFx.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility);for(let t of["pointerdown","pointerup","wheel","keydown"])this.host.removeEventListener(t,this.onInput,{capture:!0});clearTimeout(this.decorTimer),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values()){t.led.dispose();for(let e of t.own)e.dispose()}this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose();for(let t of this.fans.values())t.mesh.geometry.dispose();this.fans.clear(),this.fanMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&fT();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new Er({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ce,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new eu(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=!!(this.floorId&&this.options.onRoomDoubleTap),r=n||this.options.onDeviceDoubleTap&&!this.furnish?this.pick(t,e):null;r&&"entity"in r&&!this.furnish&&this.options.onDeviceDoubleTap?.(r.entity,t,e)||(n&&r&&!("entity"in r)&&r.roomId?this.options.onRoomDoubleTap(r.floorId,r.roomId):this.options.onBack?.())}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}retired=[];disposeRetired(){if(this.retired.length){for(let t of this.retired)t.dispose();this.retired=[]}}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.fans.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))this.retired.push(e);this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let o=document.createElement("span");o.className="fp3d-dev-watt";let s=document.createElement("span");s.className="fp3d-dev-name",e.append(n,r,o,s);let a,l=!1;e.addEventListener("pointerdown",h=>{if(this.furnish){this.pendingDevice=t;return}h.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)},tT)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",h=>h.preventDefault()),e.addEventListener("click",h=>{if(h.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}),e.addEventListener("keydown",h=>{if(h.key==="Enter"&&h.shiftKey||h.key==="ContextMenu"){h.preventDefault();let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=jg(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=Eb(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=Zo(r,a.ra),a.rb=Zo(r,a.rb)}t.lightSurface=n;let o=new Vt;o.setAttribute("position",new It(n.pos,3)),o.setAttribute("color",new It(new Float32Array(n.pos.length),3)),o.setAttribute("fold",new It(n.fold,1));let s=new gr(new Uint32Array(n.pos.length/3),1);s.setUsage(vh),o.setIndex(s),o.setDrawRange(0,0),o.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=o,t.glowSig="",this.buildGlow(t)}packLightAt(t){if(t.lamp!=="wall"||!t.pack)return null;let e=be(t.pack);if(!e)return null;let[n,r,o]=t.size??fa.wall;return H0(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:o,mirror:t.mirror},t.base??0)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let o=n.top??t.floor.height,s=Gf(t.floor,n.x,n.z),a=Zo(t.lightZones,s),[l,,c]=n.size??(n.lamp?fa[n.lamp]:[.3,.3,.3]),h=n.base??0,u={ceiling:[o-.12,"ceiling"],downlight:[o-.03,"spot"],spot:[o-c,"spot"],panel:[o-.05,"ceiling"],pendant:[Math.max(.5,o-c),"pendant"],fan:[Math.max(.5,o-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<lT?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,d]=n.lamp?u[n.lamp]:[n.y,"omni"],p=n.lightY??f,b=r.color;if(n.lamp==="strip"){let g=(n.rotation??0)*ee,m=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:h+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a});else{let y=(n.rise??0)*ee;e.push({x:n.x+Math.cos(g)*l*x*Math.cos(y),y:p+Math.sin(y)*l*x,z:n.z+Math.sin(g)*l*x*Math.cos(y),color:b,level:r.level*.55,kind:m||y?"omni":d,room:a})}}else{let g=this.packLightAt(n);e.push({x:g?g[0]:n.x,y:g?g[1]:p,z:g?g[2]:n.z,color:b,level:r.level,kind:d,room:a})}}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(o=>o!==t&&Math.abs(o.floor.elevation-e)<.8&&o.geo.holes.length);if(!n)return[];let r=[];for(let o of n.geo.holes){if(o.length<3)continue;let s=0,a=[0,0,0];for(let h of this.devices){if(h.floorId!==n.floor.id)continue;let u=this.glowOf(h);if(!u)continue;let f=Zt([h.x,h.z],o)?0:QS(h.x,h.z,o);if(f>_b)continue;let d=u.level*(1-f/_b);for(let p=0;p<3;p++)a[p]+=u.color[p]*d;s+=d}if(s<.02)continue;let[l,c]=Qi(o);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/s,a[1]/s,a[2]/s],level:Math.min(1,s)*.6,kind:"ceiling",room:Zo(t.lightZones,Gf(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t);this.buildSpill(t,n);let r=e.doors.map(u=>{let f=t.geo.openings.find(p=>p.opening.id===u.id);if(f&&hi(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),o=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(o===t.glowSig)return;t.glowSig=o;let s=t.glowMesh.geometry,a=s.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,s.setDrawRange(0,0);return}let l=tb(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==u)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=s.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}s.index.needsUpdate=!0,s.setDrawRange(0,h),t.glowMesh.visible=h>0}makeMaterials(t){return{floor:rn(new Xt({vertexColors:!0}),this.themeUniform),pattern:mT(this.patternTexture),wall:rn(On(new Xt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:On(new Xt({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new Xt({vertexColors:!0,blending:Rs,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-1}),lines:rn(On(new Ze({vertexColors:!0,transparent:!0,blending:ca(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:On(new Xt({vertexColors:!0,transparent:!0,blending:Ae,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:rn(On(new Xt({vertexColors:!0,side:ie}),t),this.themeUniform),glass:On(new Xt({vertexColors:!0,transparent:!0,blending:Ae,depthWrite:!1,side:ie}),t),blinds:rn(On(new Xt({map:this.blindTexture,vertexColors:!0,side:ie}),t),this.themeUniform),water:rn(new Xt({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:ie}),this.themeUniform),flow:xT(this.flowTime),pipeLine:bT(this.flowTime),patch:new Xt({vertexColors:!0,transparent:!0,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),patchGlow:new Xt({vertexColors:!0,transparent:!0,blending:Ae,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),solarLive:Vf(this.flowTime),lamps:rn(new Xt({vertexColors:!0}),this.themeUniform),halos:new Ei({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Ae,depthWrite:!1}),cones:new Xt({vertexColors:!0,transparent:!0,blending:Ae,depthWrite:!1,side:ie}),screens:new Xt({vertexColors:!0,transparent:!0,blending:Ae,depthWrite:!1,side:ie}),earth:rn(new Xt({vertexColors:!0}),this.themeUniform),earthWell:rn(new Xt({vertexColors:!0,side:ie}),this.themeUniform),earthLines:rn(new Ze({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(o=>[o.floor.id,{y:o.y,o:o.o}])),e=new Map(this.floors.map(o=>[o.floor.id,o.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((o,s)=>o.elevation-s.elevation);for(let o of n.floors){let s=n.settings.roof?.solar??[],a=zr(n)?.id===o.id?s.filter(dt=>dt.face===Rf).map(dt=>({field:dt,face:Z0(n,dt)})):[],l=s.filter(dt=>dt.face.startsWith(`wall:${o.id}:`));if(l.length){let dt=new Map($0(n,o.id).map(Dt=>[Dt.key,Dt]));for(let Dt of l){let Rt=dt.get(Dt.face);Rt&&a.push({field:Dt,face:Rt})}}let h=rf(n).some(dt=>Vm(dt,o.elevation+o.height)&&sf(dt,o.elevation))?(dt,Dt)=>{let Rt=Gm(n,dt,Dt,o.elevation);return Rt===null?null:Rt-o.elevation}:void 0,u=cg(Bf(o,this.parked),n.settings.wall_exterior,n.settings.wall_interior,ug(n.floors,o),a,h),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),p=new Te,b=new St(u.floor,d.floor),g=new St(u.shadow,d.shadow);g.renderOrder=1;let m=new St(u.floor,d.pattern);m.renderOrder=2;let x=new St(new Vt,d.glow);x.renderOrder=3,x.visible=!1;let y=new St(new Vt,d.frames),v=new St(new Vt,d.blinds),M=new St(new Vt,d.glass);M.renderOrder=4;let S=new St(new Vt,d.lamps);S.visible=!1;let E=new St(new Vt,d.cones);E.visible=!1,E.renderOrder=3;let _=new St(new Vt,d.cones);_.visible=!1,_.renderOrder=3;let A=new Wi(new Vt,d.halos);A.visible=!1,A.renderOrder=7;let T=new St(new Vt,d.cones);T.visible=!1,T.renderOrder=7;let w=new St(new Vt,d.cones);w.visible=!1,w.renderOrder=7;let C=new St(new Vt,d.lamps);C.visible=!1;let N=new St(new Vt,d.lamps);N.visible=!1;let L=new St(new Vt,d.patch);L.visible=!1,L.renderOrder=3;let R=new St(new Vt,d.patchGlow);R.visible=!1,R.renderOrder=3;let P=new St(new Vt,d.screens);P.visible=!1,P.renderOrder=5;let F=new St(new Vt,d.flow);F.renderOrder=5,F.frustumCulled=!1;let D=new St(new Vt,d.pipeLine),U=new St(new Vt,d.pipeLine),k=new St(new Vt,d.pipeLine);for(let dt of[D,U,k])dt.renderOrder=4,dt.frustumCulled=!1,dt.visible=!1;let V=zf(a,o.elevation),X=V?new St(V.geometry,d.solarLive):null;X&&(X.renderOrder=6,la(V,this.solarLevels));for(let dt of[y,v,M])dt.frustumCulled=!1;let z=new St(u.walls,d.glassWall),$=new St(u.walls,d.wall);z.renderOrder=6;let j=new St(u.water,d.water);j.renderOrder=4;let at=Math.min(...n.floors.filter(dt=>dt.rooms.length).map(dt=>dt.elevation)),H=dg(n,o,u.openings,o.elevation===at),W=H?[new St(H.earth.geometry(),d.earth),new St(H.wells.geometry(),d.earthWell),new qe(H.lines.geometry(),d.earthLines)]:[];for(let dt of W)dt.userData.earth=!0;p.add(b,g,m,x,$,j,new qe(u.lines,d.lines),y,v,M,F,D,U,k,S,E,_,A,T,w,C,N,L,R,P,z,...X?[X]:[],...W),this.root.add(p);let Q=document.createElement("button");Q.className="fp3d-pin fp3d-pin-floor",Q.dataset.floor=o.id;let ot=document.createElement("b");ot.textContent=o.name||"\u2013";let et=document.createElement("span");et.textContent=this.floorInfo.get(o.id)??this.options.floorInfo?.(o)??"",Q.append(ot,et),Q.addEventListener("click",()=>this.options.onFloorTap?.(o.id)),this.labels.append(Q);let ht=t.get(o.id),gt=[],lt=null;for(let dt of Ac(o)){let Dt=document.createElement("button");Dt.className="fp3d-pin",Dt.dataset.room=dt.id,Dt.dataset.floor=o.id,this.fillRoomPin(Dt,dt.name,this.roomInfo.get(dt.id)),Dt.addEventListener("click",()=>this.options.onRoomTap?.(o.id,dt.id)),this.labels.append(Dt);let[Rt,ne]=Qi(dt.points);if(gt.push({pin:Dt,room:dt,cx:Rt,cz:ne}),!dt.outdoor)for(let[pe,de]of dt.points)lt??={x0:pe,x1:pe,z0:de,z1:de},lt.x0=Math.min(lt.x0,pe),lt.x1=Math.max(lt.x1,pe),lt.z0=Math.min(lt.z0,de),lt.z1=Math.max(lt.z1,de)}this.floors.push({floor:o,rank:r.indexOf(o),group:p,geo:u,floorMesh:b,shadowMesh:g,patternMesh:m,glowMesh:x,lightSurface:null,lightZones:null,framesMesh:y,glassMesh:M,blindsMesh:v,flowMesh:F,pipeLineMesh:D,pipeHouseMesh:U,pipeFloorMesh:k,pipeLineSig:"",solarMesh:X,solarLive:V,lampMesh:S,sunMesh:E,sunSig:"",spillMesh:_,spillSig:"",haloMesh:A,coneMesh:T,trailMesh:w,fridgeMesh:C,pipeMesh:N,pipeSig:"",patchMesh:L,patchGlowMesh:R,patchSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:$,screenMesh:P,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:lt,roomPins:gt,labelSize:null,materials:d,mask:f,openings:new Map,y:ht?.y??0,o:ht?.o??1,ty:0,to:1,appliedO:-1,lightAt:0,label:Q})}this.floorMap=new Map(this.floors.map(o=>[o.floor.id,o]));for(let o of this.floors)this.buildFridges(o),this.buildPipes(o),this.buildPatches(o);this.labelsDirty=!0,this.floorId&&!n.floors.some(o=>o.id===this.floorId)&&(this.floorId=null);for(let o of this.floors){this.buildLamps(o),this.buildScreens(o);let s=e.get(o.floor.id);for(let a of o.geo.openings)o.openings.set(a.opening.id,s?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??ua);this.buildOpenings(o),this.buildFlows(o),o.poolGroup=void 0,this.buildPoolWater(o),this.buildLightSurface(o),this.buildSun(o)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.buildSunFx(),this.applyRealism(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(m=>m.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(m=>m.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?rg(this.building,this.roofWindows):[];if(this.roofGeos=t,this.shadowSig="",!t.length)return;let e=new Map(Vr(this.building).map(m=>[m.key,m])),n=this.building.settings.roof?.solar??[],r=Vf(this.flowTime),o=[],s=new Te,a=rn(new Xt({vertexColors:!0,transparent:!0,side:ie}),this.themeUniform),l=rn(new Ze({vertexColors:!0,transparent:!0,blending:ca(this.theme),depthWrite:!1}),this.themeUniform,!0),c=rn(new Xt({vertexColors:!0,transparent:!0,side:ie,depthWrite:!1}),this.themeUniform),h=new Te,u=rn(new Xt({vertexColors:!0,side:ie}),this.themeUniform),f=rn(new Xt({vertexColors:!0,transparent:!0,opacity:.35,side:ie,depthWrite:!1}),this.themeUniform),d=rn(new Xt({vertexColors:!0,transparent:!0,opacity:.35,side:ie,depthWrite:!1}),this.themeUniform),p=rn(new Ze({vertexColors:!0,transparent:!0,blending:ca(this.theme),depthWrite:!1}),this.themeUniform,!0),b=[],g=t.map(m=>{let x=new Te;x.add(new St(m.solid.geometry(),a),new qe(m.lines.geometry(),l)),m.glass.count&&x.add(new St(m.glass.geometry(),c));let y=n.flatMap(S=>{let E=e.get(S.face);return E&&(E.section?m.sections?.includes(E.section):m===t[0])?[{face:E,field:S}]:[]}),v=zf(y,m.floor.elevation+m.base);if(v){let S=new St(v.geometry,r);S.renderOrder=9,x.add(S),o.push(v),la(v,this.solarLevels)}m.winRoof?.solid.count&&x.add(new St(m.winRoof.solid.geometry(),u),new qe(m.winRoof.lines.geometry(),p)),m.winRoof?.glass.count&&x.add(new St(m.winRoof.glass.geometry(),d)),x.renderOrder=8,s.add(x);let M=null;(m.win?.solid.count||m.win?.glass.count)&&(M=new Te,M.add(new St(m.win.solid.geometry(),u),new qe(m.win.lines.geometry(),p)),m.win.glass.count&&M.add(new St(m.win.glass.geometry(),f)),h.add(M));for(let[S,E]of m.winBelow??[]){if(!E.solid.count&&!E.glass.count)continue;let _=new Te;_.add(new St(E.solid.geometry(),u),new qe(E.lines.geometry(),p)),E.glass.count&&_.add(new St(E.glass.geometry(),f)),h.add(_),b.push({floorId:S,win:_})}return{group:x,floorId:m.floor.id,rideId:$m(this.building,m.floor,m.sections??[]),base:m.base,lift:m.lift!==!1,win:M}});s.renderOrder=8,this.scene.add(s),this.scene.add(h),this.roof={group:s,parts:g,below:b,solid:a,lines:l,glass:c,live:r,lives:o,wins:h,winSolid:u,winLines:p,winGlass:f,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/vb)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),o=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?vb*n:0,s=1-Math.exp(-t/yb),a=this.roofO;this.roofO+=(o-this.roofO)*s,Math.abs(o-this.roofO)<.004&&(this.roofO=o),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let h=this.floorMap.get(l.rideId)??c,u=h.ty>0?Math.min(1,h.y/h.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+h.y+l.base+this.roofLift()+(l.lift?u*xb:0),l.win&&(l.win.position.y=c.floor.elevation+h.y+l.base+(l.lift?u*xb:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==o}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.theme!=="realistic"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,o=1;e?n.rank>e.rank?(r=5+n.rank,o=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,o=this.floorStack==="single"?0:jS)):r=this.explode?n.rank*Ab:0,n.ty=r,n.to=o;let a=e===n?on:li;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=o),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let o=r.mesh.material;o.transparent=t.o<.999,o.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/yb);for(let r of this.floors){let o=r.ty-r.y,s=r.to-r.o;if(Math.abs(o)<.004&&Math.abs(s)<.004){(o!==0||s!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=o*n,r.o+=s*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Mb);for(let r of this.floors){let o=!1,s=!1;for(let[a,l]of r.openings){let c=this.openingTargets.get(a)??ua,h=(d,p)=>(d??null)===(p??null)||typeof d=="number"&&typeof p=="number"&&Math.abs(d-p)<.003;if(h(c.open,l.open)&&h(c.open2??0,l.open2??0)&&h(c.tilt,l.tilt)&&h(c.tilt2??0,l.tilt2??0)&&h(c.cover,l.cover)&&!!c.sensed==!!l.sensed&&!!c.unlocked==!!l.unlocked)continue;let u={...l,open2:l.open2??0,tilt2:l.tilt2??0,sensed:c.sensed,unlocked:c.unlocked},f=!1;for(let d of["open","open2","tilt","tilt2"]){let p=c[d]??0,b=l[d]??0,g=p-b;Math.abs(g)<.003?u[d]=p:(u[d]=b+g*n,f=!0)}if(c.cover===null||l.cover===null)u.cover=c.cover;else{let d=c.cover-l.cover;Math.abs(d)<.003?u.cover=c.cover:(u.cover=l.cover+d*n,f=!0)}(u.open!==l.open||u.open2!==(l.open2??0)||u.tilt!==l.tilt||u.tilt2!==(l.tilt2??0)||u.cover!==l.cover||!!u.sensed!=!!l.sensed||!!u.unlocked!=!!l.unlocked)&&(r.openings.set(a,u),o=!0),e||=f,s||=f}if(o){this.buildOpenings(r);let a=performance.now();(!this.lowQuality||!s||a-r.lightAt>=cT)&&(r.lightAt=a,this.buildGlow(r),this.buildSun(r))}}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new J(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*uT+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=e)return 0;let f=u-e,d=f>fu?.5+.5*Math.sin(f/140):f/fu;return Math.round(d*10)/10},r=this.devices.filter(h=>h.floorId===t.floor.id&&(h.lamp||h.model)),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(h=>`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${h.rise??0},${h.size?.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0}${h.colors?JSON.stringify(h.colors)+this.theme:""}`).join(";"),s=r.map(h=>this.glowOf(h)),a=r.map((h,u)=>`${n(h.id)},${s[u]?`${s[u].level.toFixed(3)},${s[u].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=o,t.lampColorSig="";let h=new jt,u=[],f=[],d=new Map,p=t.floor.height;for(let b of r){let g=b.lamp==="strip"?(b.base??p)>Math.min(t.floor.cut_height,p):b.lamp?Sb.has(b.lamp)&&(b.top??p)>Math.min(t.floor.cut_height,p):b.model==="camera_ceiling";if(!b.lamp&&!b.model||g&&this.wallMode==="cut")continue;let m=h.count,x=b.pack?be(b.pack):void 0,[y,v,M]=b.size??[.3,.3,.3];b.model?b.ownLook||z0(h,b.model,b.x,b.model==="camera_ceiling"?p:b.y,b.z,b.rotation??0):x?Xc(h,x,{x:b.x,z:b.z,rotation:b.rotation??0,w:y,d:v,h:M,mirror:b.mirror,colors:b.colors},b.base??0,65280):qf(h,{...b,lamp:b.lamp},b.top??p,65280,b.lamp!=="fan"),d.set(b.furnitureId??b.id,{start:m,end:h.count}),b.pickable!==!1&&u.push({id:b.id,start:m,end:h.count}),b.furnitureId&&f.push({id:b.furnitureId,start:m,end:h.count})}t.lampTris=u,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=am(h.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=h.geometry(),t.lampMesh.visible=h.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((h,u)=>{let f=t.lampRanges.get(h.furnitureId??h.id);if(!f)return;let d=s[u],p=d?.55+.45*d.level:0,b=d?new J(...d.color.map(x=>Math.min(1,x*p))):new J(aT),g=n(h.id);g>0&&b.lerp(new J(1,1,1),.7*g);let m=new J(b.getHex());lm(c,t.lampShade,f,[m.r,m.g,m.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1||this.realPlan()?null:this.sun,n=(this.building?.settings.north??0)*ee,r=this.weather?.cloud??0,o=Eb(t.floor,t.geo.openRooms),s=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${o.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(s===t.sunSig)return;t.sunSig=s;let a=new jt;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*ee,h=e.azimuth*ee,u=[Math.sin(n+h),-Math.cos(n+h)],f=1/Math.tan(c);for(let d of t.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let p=[-d.toRoom[0],-d.toRoom[1]],b=p[0]*u[0]+p[1]*u[1];if(b<.05)continue;let g=t.openings.get(d.opening.id),m=d.top-(g?.cover??0)*(d.top-d.sill);if(m-d.sill<.05)continue;let x=(w,C)=>{let N=Math.min(7,C*f);return[d.start[0]+d.axis[0]*w+d.toRoom[0]*d.faceRoom-u[0]*N,.02,d.start[1]+d.axis[1]*w+d.toRoom[1]*d.faceRoom-u[1]*N]},y=.14*l*Math.min(1,b*1.5),v=new J(1*y,.82*y,.55*y),M=v.clone().multiplyScalar(.45),S=t.floor.rooms.findIndex(w=>w.id===d.opening.room_id);if(S<0||t.floor.rooms[S].points.length<3)continue;let E=o[S],_=t.floor.rooms.filter((w,C)=>o[C]===E&&w.points.length>=3).map(w=>w.points),A=Math.max(1,Math.ceil(Math.min(7,m*f)/.25)),T=Math.max(1,Math.ceil(d.width/.3));for(let w=0;w<A;w++){let C=d.sill+(m-d.sill)*w/A,N=d.sill+(m-d.sill)*(w+1)/A,L=w/A,R=(w+1)/A,P=v.clone().lerp(M,L),F=v.clone().lerp(M,R);for(let D=0;D<T;D++){let U=d.width*D/T,k=d.width*(D+1)/T,V=x((U+k)/2,(C+N)/2);if(!_.some(at=>Zt([V[0],V[2]],at)))continue;let X=x(U,C),z=x(k,C),$=x(k,N),j=x(U,N);a.tri(X,z,$,P,P,F),a.tri(X,$,j,P,F,F)}}}this.pushRoofSun(t,a,o,u,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,o,s){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(Vr(a).map(u=>[u.key,u])),h=[r[0]*Math.cos(o),Math.sin(o),r[1]*Math.cos(o)];for(let u of l){let f=c.get(u.face),d=Zc(a,f,u);if(!f||!d||d.floor.id!==t.floor.id)continue;let p=f.n[0]*h[0]+f.n[1]*h[1]+f.n[2]*h[2],[b,g,m,x]=d.corners,y=Math.min(1,this.roofWindows.get(u.id)?.cover??0);if(y>.95)continue;let v=(L,R,P)=>[L[0]+(R[0]-L[0])*P,L[1]+(R[1]-L[1])*P,L[2]+(R[2]-L[2])*P],M=v(x,b,y),S=v(m,g,y),E=t.floor.rooms.findIndex(L=>L.id===d.roomId);if(E<0)continue;let _=t.floor.rooms.filter((L,R)=>n[R]===n[E]&&L.points.length>=3).map(L=>L.points),A=(L,R)=>{let P=(D,U)=>v(v(L[0],L[1],D),v(L[3],L[2],D),U);for(let D=0;D<6;D++)for(let U=0;U<6;U++){let k=P((D+.5)/6,(U+.5)/6);if(!_.some(j=>Zt([k[0],k[2]],j)))continue;let V=P(D/6,U/6),X=P((D+1)/6,U/6),z=P((D+1)/6,(U+1)/6),$=P(D/6,(U+1)/6);e.tri(V,X,z,R,R,R),e.tri(V,z,$,R,R,R)}},T=L=>[L[0],.019,L[2]],w=.06*s;if(A([T(b),T(g),T(S),T(M)],new J(.75*w,.85*w,1*w)),p<.05)continue;let C=L=>{let R=Math.min(7,(L[1]-t.floor.elevation)/Math.tan(o));return[L[0]-r[0]*R,.02,L[2]-r[1]*R]},N=.16*s*Math.min(1,p*1.5);A([C(b),C(g),C(S),C(M)],new J(1*N,.84*N,.6*N))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],o=new jt,s=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let x=(l.rotation??0)*ee,y=[-Math.sin(x),Math.cos(x)],v=l.model==="camera_ceiling",M=l.reach??(v?3:4.5),S=(l.fov??(v?360:90))*ee/2,E=l.motion?new J(.9,.12,.16):new J(.04,.22,.28),_=new J(0,0,0),A=Math.max(4,Math.round(S/.15)),T=.015,w=t.geo.walls2d,C=U=>{let k=U.b[0]-U.a[0],V=U.b[1]-U.a[1],X=k*k+V*V||1,z=Math.max(0,Math.min(1,((l.x-U.a[0])*k+(l.z-U.a[1])*V)/X));return Math.hypot(l.x-(U.a[0]+k*z),l.z-(U.a[1]+V*z))},N=null;for(let U of w)C(U)<.45&&(!N||C(U)<C(N))&&(N=U);let L=U=>{let k=y[0]*Math.cos(U)-y[1]*Math.sin(U),V=y[1]*Math.cos(U)+y[0]*Math.sin(U),X=M;for(let z of w){let $=z.b[0]-z.a[0],j=z.b[1]-z.a[1],at=k*j-V*$;if(Math.abs(at)<1e-9)continue;let H=((z.a[0]-l.x)*j-(z.a[1]-l.z)*$)/at,W=((z.a[0]-l.x)*V-(z.a[1]-l.z)*k)/at;z===N&&H<=.45||H>.02&&H<X&&W>=0&&W<=1&&(X=H)}return X},R=(U,k)=>T+ji(t.floor,{x:U,z:k}),P=U=>{let k=L(U),V=l.x+(y[0]*Math.cos(U)-y[1]*Math.sin(U))*k,X=l.z+(y[1]*Math.cos(U)+y[0]*Math.sin(U))*k;return[V,R(V,X),X]},F=[l.x,Math.max(R(l.x,l.z),v?-1/0:R(l.x+y[0]*.3,l.z+y[1]*.3)),l.z],D=o.count;for(let U=0;U<A;U++)o.tri(F,P(-S+2*S*(U+1)/A),P(-S+2*S*U/A),E,_,_);s.push({id:l.id,start:D,end:o.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Sb.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let h=l.top??e,[u,f,d]=l.size??fa[l.lamp],p=l.base??0,b=(l.rotation??0)*ee,g={ceiling:h-.07,downlight:h-.03,spot:h-d,panel:h-.03,pendant:Math.max(.4,h-d)+.08,fan:Math.max(.5,h-Math.max(.25,d))+.02,floor:p+d-.15,uplight:p+d,table:p+d-.09,wall:p+d/2,strip:p+Math.max(.02,d)-.01,bollard:p+d-.08,garden:p+d-.03}[l.lamp],m=(x,y,v=1)=>{n.push(x,g,y),r.push(...c.color.map(M=>M*c.level*.7*v))};if(l.lamp==="strip")for(let x of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,p+u*(.5+x),l.z),r.push(...c.color.map(y=>y*c.level*.7*.6));else if(l.rise){let y=l.rise*ee;n.push(l.x+Math.cos(b)*u*x*Math.cos(y),g+Math.sin(y)*u*x,l.z+Math.sin(b)*u*x*Math.cos(y)),r.push(...c.color.map(v=>v*c.level*.7*.6))}else m(l.x+Math.cos(b)*u*x,l.z+Math.sin(b)*u*x,.6);else if(l.lamp==="wall"){let x=this.packLightAt(l);x?(n.push(...x),r.push(...c.color.map(y=>y*c.level*.7))):m(l.x-Math.sin(b)*(f/2+.05),l.z+Math.cos(b)*(f/2+.05))}else m(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let x=new J(...c.color.map(E=>E*.09*c.level)),y=new J(0,0,0),v=Math.max(.03,u/2),M=.45+.35*c.level,S=16;for(let E=0;E<S;E++){let _=E/S*Math.PI*2,A=(E+1)/S*Math.PI*2,T=[l.x+Math.cos(_)*v,g,l.z+Math.sin(_)*v],w=[l.x+Math.cos(A)*v,g,l.z+Math.sin(A)*v],C=[l.x+Math.cos(_)*M,.02,l.z+Math.sin(_)*M],N=[l.x+Math.cos(A)*M,.02,l.z+Math.sin(A)*M];o.tri(T,C,N,x,y,y),o.tri(T,N,w,x,y,x)}}}let a=new Vt;a.setAttribute("position",new It(n,3)),a.setAttribute("color",new It(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=o.geometry(),t.coneMesh.visible=o.count>0,t.coneTris=s}buildScreens(t){let e=Bf(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),r=($o.value?qo.value.toArray().map(s=>Math.round(s*255)).join(","):"")+"|"+e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(r===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=r;let o=new jt;for(let s of e){let a=this.screens.get(s.id),l=Cc.has(s.type)?Ic(t.geo.walls2d,s,t.floor.height,sn(t.floor,s)):null,c=l?{...s,x:l.x,z:l.z,mount_y:l.y}:s,h=c.rotation*ee,u=Math.cos(h),f=Math.sin(h),d=(E,_,A)=>[c.x+E*u-A*f,_,c.z+E*f+A*u];if(a.faces){let E=Math.max(.05,c.w)*(c.mirror?-1:1),_=Math.max(.05,c.d),A=Math.max(.005,c.h),T=sn(t.floor,c);for(let w of a.faces){if(w.part==="lights"){let X=be(c.type),z=$=>["#e8f4ff","#ff3b4f"].includes($.color.toLowerCase());if(X&&X.parts.some(z)){let $=new J(...w.color.map(j=>Math.min(1,j*(.4+.6*w.level))));Ho(o,X,c,T,$.getHex(),z)}continue}if(w.part==="cabin"){let X=be(c.type),z=$=>$.color.toLowerCase()==="#13283a"||$.color==="glass";if(X&&X.parts.some(z)){let $=new J(...w.color.map(j=>Math.min(1,j*(.3+.5*w.level))));Ho(o,X,c,T,$.getHex(),z);continue}}if(w.part==="burners"&&be(c.type)){let X=be(c.type),z=new J(...w.color.map($=>Math.min(1,$*(.25+.6*w.level))));Ho(o,X,c,T,z.getHex(),hm);continue}if(w.part==="burners"){let X=new J(...w.color.map($=>Math.min(1,$*(.25+.6*w.level)))),z=T+A+.008;for(let[$,j,at]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let H=$*Math.abs(E)/.6,W=j*_/.62,Q=14;for(let ot=0;ot<Q;ot++){let et=ot/Q*Math.PI*2,ht=(ot+1)/Q*Math.PI*2;o.tri(d(H,z,W),d(H+Math.cos(et)*at,z,W+Math.sin(et)*at),d(H+Math.cos(ht)*at,z,W+Math.sin(ht)*at),X)}}continue}if(w.part==="band"||w.part==="cabin"){let X=w.part==="cabin",z=T+A*(X?.6:.42),$=X?T+A*.86:z+.07,j=new J(...w.color.map(Q=>Math.min(1,Q*(.3+.45*w.level)))),at=Math.abs(E)/2+(X?.012:.02),H=_/2+(X?.012:.02),W=[[-at,-H],[at,-H],[at,H],[-at,H]];for(let Q=0;Q<4;Q++){let ot=W[Q],et=W[(Q+1)%4],ht=d(ot[0]*Math.sign(E),z,ot[1]),gt=d(et[0]*Math.sign(E),z,et[1]),lt=d(et[0]*Math.sign(E),$,et[1]),dt=d(ot[0]*Math.sign(E),$,ot[1]);o.tri(ht,gt,lt,j),o.tri(ht,lt,dt,j)}continue}if(w.part==="strata"){let X=w.top??w.color,z=.22+.4*w.level,$=new J(...w.color.map(et=>Math.min(1,et*z))),j=new J(...X.map(et=>Math.min(1,et*z))),at=T+A*.06,H=T+A*.94,W=Math.abs(E)/2+.012,Q=_/2+.012,ot=20;for(let et=0;et<ot;et++){let ht=et/ot*Math.PI*2,gt=(et+1)/ot*Math.PI*2,lt=[Math.cos(ht)*W,Math.sin(ht)*Q],dt=[Math.cos(gt)*W,Math.sin(gt)*Q];o.tri(d(lt[0],at,lt[1]),d(dt[0],at,dt[1]),d(dt[0],H,dt[1]),$,$,j),o.tri(d(lt[0],at,lt[1]),d(dt[0],H,dt[1]),d(lt[0],H,lt[1]),$,j,j)}continue}if(w.part==="chamber"){let X=be(c.type),z=new J(...w.color.map($=>Math.min(1,$*(.4+.6*w.level))));X&&Ho(o,X,c,T,z.getHex());continue}if(w.part==="progress"){let X=Math.min(Math.abs(E),_)*.42,z=T+A+.008,$=new J(...w.color.map(Q=>Math.min(1,Q*(.4+.6*w.level)))),j=$.clone().multiplyScalar(.15),at=40,H=Math.round(Math.min(1,Math.max(0,w.fill??0))*at),W=(Q,ot)=>d(Math.sin(Q)*ot,z,-Math.cos(Q)*ot);for(let Q=0;Q<at;Q++){let ot=Q/at*Math.PI*2,et=(Q+1)/at*Math.PI*2,ht=Q<H?$:j;o.tri(W(ot,X*.8),W(ot,X),W(et,X),ht),o.tri(W(ot,X*.8),W(et,X),W(et,X*.8),ht)}continue}if(w.part==="apring"){let X=c.variant==="wall",z=Math.abs(E),$=X?Math.min(z,A)*.3:Math.min(z,_)*.3,j=new J(...w.color.map(Q=>Math.min(1,Q*(.4+.6*w.level)))),at=new J(0,0,0),H=24,W=(Q,ot)=>X?d(Math.cos(Q)*ot,T+A/2+Math.sin(Q)*ot,_/2+.004):d(Math.cos(Q)*ot,T-.003,Math.sin(Q)*ot);for(let Q=0;Q<H;Q++){let ot=Q/H*Math.PI*2,et=(Q+1)/H*Math.PI*2;o.tri(W(ot,$*.8),W(ot,$),W(et,$),j),o.tri(W(ot,$*.8),W(et,$),W(et,$*.8),j),o.tri(W(ot,$),W(ot,$*1.5),W(et,$*1.5),j,at,at),o.tri(W(ot,$),W(et,$*1.5),W(et,$),j,at,j)}continue}if(w.part==="drum"){let X=Math.abs(E),z=Math.min(X*.36,(A-.2)*.42),$=T+(A-.14)/2+.04,j=_/2-.006,at=new J(...w.color.map(et=>Math.min(1,et*(.35+.65*w.level)))),H=at.clone().multiplyScalar(.12),W=new J(0,0,0),Q=28,ot=(et,ht)=>d(Math.cos(et)*ht,$+Math.sin(et)*ht,j);for(let et=0;et<Q;et++){let ht=et/Q*Math.PI*2,gt=(et+1)/Q*Math.PI*2;o.tri(d(0,$,j),ot(ht,z*.78),ot(gt,z*.78),H),o.tri(ot(ht,z*.78),ot(ht,z),ot(gt,z),at),o.tri(ot(ht,z*.78),ot(gt,z),ot(gt,z*.78),at),o.tri(ot(ht,z),ot(ht,z*1.18),ot(gt,z*1.18),at,W,W),o.tri(ot(ht,z),ot(gt,z*1.18),ot(gt,z),at,W,at)}continue}if(w.part==="gang"){let X=Math.max(1,w.of??1),z=Math.abs(E),$=z/X,j=(-z/2+$*((w.index??0)+.5))*Math.sign(E),at=_/2+(c.variant==="outdoor"?.02:.008),H=w.accent?$o.value?qo.value.toArray():JS:w.color,W=new J(...H.map(Rt=>Math.min(1,Rt*(.35+.65*w.level)))),Q=W.clone().multiplyScalar(.5),ot=new J(0,0,0),et=$*.34,ht=T+A*.16,gt=T+A*.84,lt=[d(j-et,ht,at),d(j+et,ht,at),d(j+et,gt,at),d(j-et,gt,at)];o.tri(lt[0],lt[1],lt[2],W),o.tri(lt[0],lt[2],lt[3],W);let dt=.012+.015*w.level,Dt=[d(j-et-dt,ht-dt,at-.001),d(j+et+dt,ht-dt,at-.001),d(j+et+dt,gt+dt,at-.001),d(j-et-dt,gt+dt,at-.001)];for(let Rt=0;Rt<4;Rt++){let ne=(Rt+1)%4;o.tri(lt[Rt],Dt[ne],Dt[Rt],Q,ot,ot),o.tri(lt[Rt],lt[ne],Dt[ne],Q,Q,ot)}continue}if(w.part==="beacon"){let X=new J(...w.color.map(gt=>Math.min(1,gt*(.25+.45*w.level)))),z=new J(0,0,0),$=T+A+.01,j=.6+.6*w.level,at=Math.min(Math.abs(E),_)*.38;for(let[gt,lt]of[[at,0],[0,at]]){let dt=d(-gt,$,-lt),Dt=d(gt,$,lt),Rt=d(gt*.4,$+j,lt*.4),ne=d(-gt*.4,$+j,-lt*.4);o.tri(dt,Dt,Rt,X,X,z),o.tri(dt,Rt,ne,X,z,z)}let H=sn(t.floor,{...c,mount_y:0})+.012,W=Math.abs(E)/2+.03,Q=_/2+.03,ot=.22+.18*w.level,et=(gt,lt,dt)=>d(gt*(W+dt),H,lt*(Q+dt)),ht=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let gt=0;gt<4;gt++){let[lt,dt]=ht[gt],[Dt,Rt]=ht[(gt+1)%4];o.tri(et(lt,dt,0),et(Dt,Rt,0),et(Dt,Rt,ot),X,X,z),o.tri(et(lt,dt,0),et(Dt,Rt,ot),et(lt,dt,ot),X,z,z)}continue}let C=w.part==="right"?.03:-Math.abs(E)/2+.03,N=w.part==="left"?-.03:Math.abs(E)/2-.03,L=T+(w.part==="bottom"?A*.45:A)+.006,R=new J(...w.color.map(X=>Math.min(1,X*(.35+.65*w.level)))),P=new J(0,0,0),F=(X,z,$=L)=>d(X*Math.sign(E),$,z),D=[F(C,-_/2+.03),F(N,-_/2+.03),F(N,_/2-.03),F(C,_/2-.03)];o.tri(D[0],D[2],D[1],R),o.tri(D[0],D[3],D[2],R);let U=w.part==="lid"?.025+.02*w.level:.12+.1*w.level,k=R.clone().multiplyScalar(w.part==="lid"?.7:.5),V=[F(C-U,-_/2-U,L+.004),F(N+U,-_/2-U,L+.004),F(N+U,_/2+U,L+.004),F(C-U,_/2+U,L+.004)];for(let X=0;X<4;X++){let z=(X+1)%4;o.tri(D[X],V[z],V[X],k,P,P),o.tri(D[X],D[z],V[z],k,k,P)}}continue}let p=be(c.type);if(p&&!p.light&&a.ring&&p.parts.some(E=>E.glow)){let E=new J(...a.color.map(_=>Math.min(1,_*(.45+.55*a.level))));Ho(o,p,c,sn(t.floor,c),E.getHex())}let b=Ef(c,t.floor);if(!b)continue;let g=new J(...a.color.map(E=>Math.min(1,E*(.35+.65*a.level)))),m=new J(0,0,0),x=b.z+.004;if(o.tri(d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),g),o.tri(d(b.x0,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x),g),a.plain)continue;let y=.18+.12*a.level,v=g.clone().multiplyScalar(.5),M=[d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x)],S=[d(b.x0-y,b.y0-y,x+.01),d(b.x1+y,b.y0-y,x+.01),d(b.x1+y,b.y1+y,x+.01),d(b.x0-y,b.y1+y,x+.01)];for(let E=0;E<4;E++){let _=(E+1)%4;o.tri(M[E],S[E],S[_],v,m,m),o.tri(M[E],S[_],M[_],v,m,v)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=o.geometry(),t.screenMesh.visible=o.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,o]of t.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(t.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),o.texture?.dispose(),t.screenPics.delete(r));for(let[r,o]of n){let s=this.screens.get(r),a=Ef(o,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new St(new Wn(1,1),new Xt({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:s.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let h=l;new yr().load(s.picture,u=>{if(t.screenPics.get(r)!==h){u.dispose();return}u.colorSpace=Ce,h.texture=u;let f=h.mesh.material;f.map=u,f.needsUpdate=!0,this.placeScreenPicture(h.mesh,o,a,u),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*s.level),l.texture&&this.placeScreenPicture(l.mesh,o,a,l.texture)}}placeScreenPicture(t,e,n,r){let o=r.image,s=o?.width&&o?.height?o.width/o.height:16/9,{w:a,h:l}=B0(n.x1-n.x0,n.y1-n.y0,s),c=e.rotation*ee,h=(n.x0+n.x1)/2,u=n.z+.008;t.scale.set(a,l,1),t.rotation.set(0,-c,0),t.position.set(e.x+h*Math.cos(c)-u*Math.sin(c),(n.y0+n.y1)/2,e.z+h*Math.sin(c)+u*Math.cos(c))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){this.buildPipeLines(t);let e=this.flows.filter(d=>d.floorId===t.floor.id&&!d.pipe).map(ha).join(";"),n=[],r=[],o=[],s=[],a=[],l=[],c=[],h=[];for(let d of this.flows){if(d.floorId!==t.floor.id||d.pipe)continue;let p=this.flowPhase.get(ha(d))??{speed:hu(d.power),offset:0},b=d.power>.5?Math.min(1,.5+d.power/2500):.22,g=d.color.map(A=>A*b),m=d.dots?.length?d.dots:[{color:d.color,share:1}],x=[0,1,2].map(A=>m[Math.min(A,m.length-1)].color.map(T=>T*b)),y=m.length>1?m[0].share:1,v=m.length>2?y+m[1].share:1,M=Math.hypot(d.b[0]-d.a[0],d.b[1]-d.a[1],d.b[2]-d.a[2]);if(M<1e-4)continue;let S=[(d.b[0]-d.a[0])/M,(d.b[1]-d.a[1])/M,(d.b[2]-d.a[2])/M],E=[];if(Math.abs(S[1])<.5){let A=Math.hypot(S[0],S[2])||1;E.push([-S[2]/A,0,S[0]/A])}else E.push([1,0,0],[0,0,1]);let _=this.lowQuality?[[wb*1.4,1]]:[[rT,.25],[wb,1]];for(let[A,T]of _)for(let w of E){let C=A*(d.width??1)*(d.thick??1)/2,N=(R,P)=>[R[0]+w[0]*C*P,R[1]+w[1]*C*P,R[2]+w[2]*C*P],L=[[N(d.a,-1),d.dist,0],[N(d.b,-1),d.dist+M,0],[N(d.b,1),d.dist+M,1],[N(d.a,1),d.dist,1]];for(let R of[0,1,2,0,2,3]){let[P,F,D]=L[R];n.push(P[0],P[1],P[2]),r.push(g[0]*T,g[1]*T,g[2]*T),o.push(F,D),s.push(p.speed),a.push(p.offset),l.push(x[0][0]*T,x[0][1]*T,x[0][2]*T,y),c.push(x[1][0]*T,x[1][1]*T,x[1][2]*T,v),h.push(x[2][0]*T,x[2][1]*T,x[2][2]*T)}}}let u=t.flowMesh.geometry;if(e===t.flowLayout&&u.getAttribute("position")?.count===n.length/3){for(let[d,p]of[["position",n],["color",r],["flowSpeed",s],["flowOffset",a],["flowDot1",l],["flowDot2",c],["flowDot3",h]]){let b=u.getAttribute(d);b.array.set(p),b.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let f=new Vt;f.setAttribute("position",new It(n,3)),f.setAttribute("color",new It(r,3)),f.setAttribute("uv",new It(o,2)),f.setAttribute("flowSpeed",new It(s,1)),f.setAttribute("flowOffset",new It(a,1)),f.setAttribute("flowDot1",new It(l,4)),f.setAttribute("flowDot2",new It(c,4)),f.setAttribute("flowDot3",new It(h,3)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=f,t.flowMesh.visible=n.length>0}buildPipeLines(t){let e=this.flows.filter(r=>r.floorId===t.floor.id&&r.pipe),n=JSON.stringify(e.map(r=>[r.a,r.b,r.dist,r.color,r.width,r.house,r.floor,Math.round(r.power/50),this.flowPhase.get(ha(r))?.speed??0]));if(n!==t.pipeLineSig){t.pipeLineSig=n;for(let r of["all","house","floor"]){let o=[],s=[],a=[],l=[],c=[];for(let f of e){if((f.house?"house":f.floor?"floor":"all")!==r)continue;let d=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1],f.b[2]-f.a[2]);if(d<1e-4)continue;let p=this.flowPhase.get(ha(f))??{speed:hu(f.power),offset:0},b=[(f.b[0]-f.a[0])/d,(f.b[1]-f.a[1])/d,(f.b[2]-f.a[2])/d],g=[];if(Math.abs(b[1])<.5){let v=Math.hypot(b[0],b[2])||1;g.push([-b[2]/v,0,b[0]/v])}else g.push([1,0,0],[0,0,1]);let m=nT*(f.width??1),x=f.power>.5?1:.62,y=[[m+iT*2,[.02,.025,.05],.78,2],[m,f.color.map(v=>v*x),1,0]];for(let[v,M,S,E]of y)for(let _ of g){let A=v/2,T=E===0?.002:0,w=(N,L)=>[N[0]+_[0]*A*L,N[1]+_[1]*A*L+T,N[2]+_[2]*A*L],C=[[w(f.a,-1),f.dist,E],[w(f.b,-1),f.dist+d,E],[w(f.b,1),f.dist+d,E+1],[w(f.a,1),f.dist,E+1]];for(let N of[0,1,2,0,2,3]){let[L,R,P]=C[N];o.push(L[0],L[1],L[2]),s.push(M[0],M[1],M[2],S),a.push(R,P),l.push(p.speed),c.push(p.offset)}}}let h=r==="house"?t.pipeHouseMesh:r==="floor"?t.pipeFloorMesh:t.pipeLineMesh,u=new Vt;u.setAttribute("position",new It(o,3)),u.setAttribute("color",new It(s,4)),u.setAttribute("uv",new It(a,2)),u.setAttribute("flowSpeed",new It(l,1)),u.setAttribute("flowOffset",new It(c,1)),h.geometry.dispose(),h.geometry=u,h.userData.filled=o.length>0}this.applyHouseLines(t)}}applyHouseLines(t){for(let e of t?[t]:this.floors)e.pipeLineMesh.visible=!!e.pipeLineMesh.userData.filled,e.pipeHouseMesh.visible=!!e.pipeHouseMesh.userData.filled&&this.floorId===null,e.pipeFloorMesh.visible=!!e.pipeFloorMesh.userData.filled&&this.floorId!==null}buildOpenings(t){let e=sb(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color"),n=t.geo.roomTris.map(r=>`${this.roomTint?.get(r.roomId)?.join(",")??""}${r.roomId===this.roomId?"*":""}`).join(";");if(this.highlighted.get(e)!==n){this.highlighted.set(e,n);for(let r of t.geo.roomTris){let o=new J(r.color),s=this.roomTint?.get(r.roomId);s&&o.lerp(new J(...s).multiplyScalar(.6),.9),r.roomId===this.roomId&&o.lerp(hT,s?.3:.75);for(let a=r.start*3;a<r.end*3;a++)e.setXYZ(a,o.r,o.g,o.b)}e.needsUpdate=!0}}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new vn;for(let u of this.activeFloors()){let f=u.floor.elevation+u.ty;for(let d of u.floor.rooms)for(let[p,b]of d.points)e.expandByPoint(new Y(p,f,b)),e.expandByPoint(new Y(p,f+u.floor.height,b))}e.isEmpty()&&e.set(new Y(-4,0,-4),new Y(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new Y),r=e.getSize(new Y),o=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,o*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=o);let s=this.floorId===null,a=s?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(s||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let h=c?l.target:null;if(h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.keepNext){this.keepNext=!1;let u=this.controls.view;this.controls.flyTo({target:new Y(u.target.x,n.y,u.target.z),radius:u.radius,phi:u.phi,theta:u.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:o,phi:l?l.phi:.85,theta:l?l.theta:-.6},t,!!l)}placeGround(){let t=new vn,e=1/0;for(let s of this.floors){e=Math.min(e,s.floor.elevation+Math.min(0,s.ty));for(let a of s.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new Y(l,0,c));for(let a of s.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new Y(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day"&&this.theme!=="realistic",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=yT();let s=this.ground.material;s.map=this.groundTexture,s.needsUpdate=!0}let n=t.getCenter(new Y),r=t.getSize(new Y),o=$f*Math.ceil((Math.max(r.x,r.z)+16)/$f);this.ground.scale.set(o,o,1),this.ground.position.set(n.x,e-nn-.02,n.z)}distanceFor(t){let e=this.camera.fov*ee,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new As;return r.setFromCamera(new Kt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),o=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),s=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(h=>h.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let h=s(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(h)return{entity:h}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??Jt;if(f!==Jt&&Math.floor(f/16)===0)continue}let h=s(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),u=h?this.pickOpenings.get(h):void 0;if(u)return{entity:u}}else if(a.object===c.wallMesh){let h=s(c.geo.furnitureTris,l),u=h?this.pickFurniture.get(h):void 0;if(u)return{entity:u};if(!h&&a.face&&a.face.normal.y>.7){let f=$h(c.floor).find(d=>Zt([a.point.x,a.point.z],d.points));if(f)return{floorId:c.floor.id,roomId:f.id}}if(a.face&&!h){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),p=f%16,b=this.wallMode==="cut"&&d===0,g=(c.mask.glass.value&1<<p)!==0;if(!b){let m=n.ray.direction,x=Math.hypot(m.x,m.z)||1,y=[a.point.x-m.x/x*.3,a.point.z-m.z/x*.3],v=c.floor.rooms.find(M=>M.points.length>=3&&Zt(y,M.points))?.id??null;if(this.roomId!==null){if(v===this.roomId)return{floorId:c.floor.id,roomId:v}}else if(!g&&v)return{floorId:c.floor.id,roomId:v}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:s(c.geo.roomTris.map(h=>({id:h.roomId,start:h.start,end:h.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+fu),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),o=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],s=r.flatMap(a=>[a.lampMesh,a.wallMesh,...o(a)].filter(l=>l.visible));for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=r.find(u=>u.group===a.object.parent||o(u).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let u=this.furnitureNear(l,a.point.x,a.point.z);if(u)return{fv:l,id:u,y:a.point.y};continue}let h=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(u=>a.faceIndex>=u.start&&a.faceIndex<u.end)?.id;if(h)return{fv:l,id:h,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let o of t.floor.furniture){let s=o.rotation*ee,a=e-o.x,l=n-o.z,c=Math.abs(a*Math.cos(s)+l*Math.sin(s))-o.w/2,h=Math.abs(-a*Math.sin(s)+l*Math.cos(s))-o.d/2,u=Math.max(c,h);u<.25&&(!r||u<r.d)&&(r={id:o.id,d:u})}return r?.id??null}floorPoint(t,e,n,r){let o=this.rayAt(e,n),s=r??t.floor.elevation+t.y,a=o.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(s-o.ray.origin.y)/a.y;return l<=0?null:[o.ray.origin.x+a.x*l,o.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let s=n?this.devices.find(u=>u.id===n)?.furnitureId:void 0,a=s?null:this.furnitureAt(t,e),l=s??a?.id,c=l?this.floors.find(u=>u.floor.furniture.some(f=>f.id===l)):void 0,h=c?.floor.furniture.find(u=>u.id===l)?.type;return!!(c&&l&&h&&r.has(h))&&this.grabItem(c,l,t,e)}if(n){let s=this.devices.find(l=>l.id===n)?.furnitureId,a=s?this.floors.find(l=>l.floor.furniture.some(c=>c.id===s)):void 0;return!s||!a?this.grabDevice(n,t,e):this.grabItem(a,s,t,e)}let o=this.furnitureAt(t,e);if(!o){let s=this.pick(t,e);return s&&"entity"in s?this.grabDevice(s.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(o.fv,o.id,t,e,o.y)}grabItem(t,e,n,r,o){let s=t.floor.furniture.find(u=>u.id===e),a=o===void 0?void 0:Math.min(o,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!s||!l)return!1;let c,h=this.rayAt(n,r).ray.direction;if(o!==void 0&&-h.y<.34){let u=this.camera.position,f=this.camera.getWorldDirection(new Y),d=Math.hypot(f.x,f.z)||1,p=[f.x/d,f.z/d],b=Math.hypot(l[0]-u.x,l[1]-u.z,(a??0)-u.y),g=this.renderer.domElement.getBoundingClientRect().height||1,m=2*b*Math.tan(this.camera.fov*Math.PI/360)/g;c={x0:n,y0:r,fx:s.x,fz:s.z,right:[-p[1],p[0]],fwd:p,perPx:m,gain:Math.min(2,1/Math.max(.5,-h.y))}}return s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:t.floor.id,id:s.id,offset:[s.x-l[0],s.z-l[1]],x:s.x,z:s.z,moved:!1,plane:a,screen:c},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),o=r&&this.floorMap.get(r.floorId),s=o&&this.floorPoint(o,e,n);return!r||!o||!s?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:o.floor.id,offset:[r.x-s[0],r.z-s[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(g=>g.id===n.id),p=f&&this.floorPoint(f,t,e);if(!f||!d||!p)return;let b=this.building?.settings.grid??.05;n.x=d.x=Math.round((p[0]+n.offset[0])/b)*b,n.z=d.z=Math.round((p[1]+n.offset[1])/b)*b,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,o=r&&this.floorMap.get(r.floorId);if(!r||!o)return;let s=r.screen,a;if(s){let f=(t-s.x0)*s.perPx,d=(e-s.y0)*s.perPx*s.gain;a=[s.fx+s.right[0]*f-s.fwd[0]*d-r.offset[0],s.fz+s.right[1]*f-s.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(o,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=o.floor.furniture.find(f=>f.id===r.id),h=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?mg(o.floor,c,h,u,this.building?.settings.wall_interior??0):[h,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Ne,n;for(let r of t){let o=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),s=o?.floor.furniture.find(a=>a.id===r);!o||!s||(n??=o,this.ghostBox(e,o,s,r===this.selectedFurniture?new J(.25,.9,1):new J(1,.71,.28)))}n&&(this.ghost=new qe(e.geometry(),new Ze({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let o=this.grab?.id===n.id?this.grab.x:n.x,s=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=be(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?sn(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:sn(e.floor,n),u=n.rotation*ee,f=Math.cos(u),d=Math.sin(u),p=(g,m,x)=>[o+g*f-m*d,x,s+g*d+m*f],b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let g=0;g<4;g++){let[m,x]=b[g],[y,v]=b[(g+1)%4];t.seg(p(m,x,h+.01),p(y,v,h+.01),r),t.seg(p(m,x,h+c),p(y,v,h+c),r),t.seg(p(m,x,h+.01),p(m,x,h+c),r)}t.seg(p(-n.w/2,n.d/2+.03,h+.02),p(n.w/2,n.d/2+.03,h+.02),new J(1,1,1))}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let o=this.pick(t,e);return!o||!("entity"in o)||this.options.onDeviceSwipe?.(o.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:o.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(m=>m.floor.rooms.some(x=>x.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),o=Math.round(t*r),s=Math.round(e*r),a=new Ye(o,s);a.texture.colorSpace=Ce;let l=new An(-1,1,1,-1,.1,400),c=this.floors.map(m=>({fv:m,visible:m.group.visible,y:m.y,o:m.o,standing:m.mask.standing.value,glass:m.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(o*s*4),p=document.createElement("canvas");p.width=o,p.height=s;let b=p.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let m of n){for(let N of this.floors)N.group.visible=N===m;m.y=0,m.o=1,this.applyFloor(m),m.group.visible=!0,m.mask.standing.value=0,m.mask.glass.value=0;let x=m.floor.rooms.flatMap(N=>N.points),y=m.floor.elevation,v=new vn(new Y(Math.min(...x.map(N=>N[0]))-.3,y,Math.min(...x.map(N=>N[1]))-.3),new Y(Math.max(...x.map(N=>N[0]))+.3,y+Math.min(m.floor.cut_height,m.floor.height),Math.max(...x.map(N=>N[1]))+.3)),M=v.getCenter(new Y),S=-.6,E=.8,_=new Y(Math.sin(E)*Math.sin(S),Math.cos(E),Math.sin(E)*Math.cos(S));l.position.copy(M).addScaledVector(_,100),l.lookAt(M),l.updateMatrixWorld();let A=.5,T=.5;for(let N of[v.min.x,v.max.x])for(let L of[v.min.y,v.max.y])for(let R of[v.min.z,v.max.z]){let P=new Y(N,L,R).applyMatrix4(l.matrixWorldInverse);A=Math.max(A,Math.abs(P.x)),T=Math.max(T,Math.abs(P.y))}let w=o/s;A/T>w?T=A/w:A=T*w,l.left=-A*1.05,l.right=A*1.05,l.top=T*1.05,l.bottom=-T*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,o,s,d);let C=b.createImageData(o,s);for(let N=0;N<s;N++)C.data.set(d.subarray((s-1-N)*o*4,(s-N)*o*4),N*o*4);b.putImageData(C,0,0),g.push({floorId:m.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let m of c)m.fv.y=m.y,m.fv.o=m.o,m.fv.mask.standing.value=m.standing,m.fv.mask.glass.value=m.glass,this.applyFloor(m.fv),m.fv.group.visible=m.visible;this.roof&&(this.roof.group.visible=h,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let o=r.info.mode,s=n.mode==="cleaning"&&o==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(o!=="cleaning"||s||!r.motion.path.length)){let a=n.room?lb(n.room,void 0,void 0,n.obstacles):Xf(n.rest),l=a.length?a:Xf(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-r.motion.pos[0],h[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!Zt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(bb[n.mode])}for(let[n,r]of this.robots)if(!e.has(n)){r.group.removeFromParent(),r.led.dispose();for(let o of r.own)o.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(t){let e=t.model;return e&&be(e.type)?`${e.type}|${e.w}|${e.d}|${e.h}`:""}makeRobot(t){let e={pos:[...t.rest],heading:t.restHeading,path:[],next:0},n=new Xt({color:bb[t.mode]}),r=this.robotModelKey(t),o=t.model?be(t.model.type):void 0;if(t.model&&o&&r){let{w:a,d:l,h:c}=t.model,h=new jt,{radius:u,top:f}=V0(h,o,a,l,c),d=new jt,p=Math.min(.05,u*.3),b=Math.min(.1,u*.55);Ie(d,[[-p,b],[p,b],[p,b+p*.8],[-p,b+p*.8]],f,f+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new Xt({vertexColors:!0});let g=[h.geometry(),d.geometry()],m=new Te;return m.add(new St(g[0],this.robotMat),new St(g[1],n)),{info:t,motion:e,group:m,led:n,own:g,modelKey:r}}if(!this.robotGeo){let a=new jt,l=(h,u,f,d,p)=>{let b=[];for(let g=0;g<20;g++)b.push([Math.cos(g/20*Math.PI*2)*h,Math.sin(g/20*Math.PI*2)*h]);Ie(a,b,u,f,d,p,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new Xt({vertexColors:!0});let c=new jt;Ie(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let s=new Te;return s.add(new St(this.robotGeo,this.robotMat),new St(this.robotLedGeo,n)),{info:t,motion:e,group:s,led:n,own:[],modelKey:r}}syncFans(t){let e=new Set;for(let n of t){if(n.lamp!=="fan")continue;let r=n.furnitureId??n.id;e.add(r);let[o,,s]=n.size??fa.fan,a=n.top??this.floorMap.get(n.floorId)?.floor.height??2.5,l=o/2,c=this.fans.get(r);if(c&&Math.abs(c.r-l)>.001&&(c.group.removeFromParent(),c.mesh.geometry.dispose(),this.fans.delete(r),c=void 0),!c){let h=new jt;Pb(h,0,0,0,l,0),this.fanMat??=new Xt({vertexColors:!0});let u=new St(h.geometry(),this.fanMat),f=new Te;f.add(u),f.rotation.y=-((n.rotation??0)*ee),c={group:f,mesh:u,r:l,speed:0,floorId:n.floorId,y:0},this.fans.set(r,c)}c.floorId=n.floorId,c.speed=n.fanSpeed??0,c.y=Rb(a,s),c.group.position.set(n.x,c.y,n.z)}for(let[n,r]of this.fans)e.has(n)||(r.group.removeFromParent(),r.mesh.geometry.dispose(),this.fans.delete(n));this.fanLast=0}stepFans(t){if(!this.fans.size)return!1;let e=this.fanLast?Math.min(.2,(t-this.fanLast)/1e3):0;this.fanLast=t;let n=!1;for(let r of this.fans.values()){let o=this.floorMap.get(r.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),r.group.visible=!(this.wallMode==="cut"&&r.y>Math.min(o.floor.cut_height,o.floor.height)),!(r.speed<=0)&&(n=!0,r.group.rotation.y-=r.speed*Math.PI*2*e))}return n||(this.fanLast=0),n}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let o=this.floorMap.get(r.info.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),e>0?n=cb(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new J(.25-.2*a,.95-.83*a,1-.7*a),r=new J(0,0,0),o=new J(.3,1,.6),s=.02;for(let a of this.floors){let l=new jt;for(let h of e)h.floorId===a.floor.id&&h.points.forEach(([u,f],d)=>{let p=h.points[d-1];if(p){let b=Math.hypot(u-p[0],f-p[1])||1,g=-(f-p[1])/b*.1,m=(u-p[0])/b*.1;l.tri([p[0]+g,s,p[1]+m],[u+g,s,f+m],[u-g,s,f-m],o,o,o),l.tri([p[0]+g,s,p[1]+m],[u-g,s,f-m],[p[0]-g,s,p[1]-m],o,o,o)}for(let b=0;b<10;b++){let g=b/10*Math.PI*2,m=(b+1)/10*Math.PI*2;l.tri([u,s,f],[u+Math.cos(m)*.35,s,f+Math.sin(m)*.35],[u+Math.cos(g)*.35,s,f+Math.sin(g)*.35],o,r,r)}});let c=null;for(let h of t){if(h.floorId!==a.floor.id)continue;let u=n(h.age);if(c){let f=Math.hypot(h.x-c.x,h.z-c.z)||1,d=-(h.z-c.z)/f*.06,p=(h.x-c.x)/f*.06,b=n(c.age);l.tri([c.x+d,s,c.z+p],[h.x+d,s,h.z+p],[h.x-d,s,h.z-p],b,u,u),l.tri([c.x+d,s,c.z+p],[h.x-d,s,h.z-p],[c.x-d,s,c.z-p],b,u,b)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,p=(f+1)/12*Math.PI*2;l.tri([h.x,s,h.z],[h.x+Math.cos(p)*.22,s,h.z+Math.sin(p)*.22],[h.x+Math.cos(d)*.22,s,h.z+Math.sin(d)*.22],u,r,r)}c=h}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*ee,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.22,(e.tilt??(o?65:20))*ee)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y),l=new Y(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s));return this.controls.flyTo({target:new Y(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-s,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+fu;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,o,s){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new Y(e,a.floor.elevation+a.ty+r,n),radius:s?.radius??5.5,phi:s?.phi??.78,...s?.theta!==void 0?{theta:s.theta}:{}},900),o){this.flashes.set(o,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(o)}"]`);l?.classList.add("fp3d-dev-found"),setTimeout(()=>l?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),o=this.stepFloors(e),s=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let m=new Set;for(let[x,y]of this.flashes){let v=this.deviceFloor.get(x);v&&m.add(v),y<=t&&this.flashes.delete(x)}a=this.flashes.size>0;for(let x of this.floors)m.has(x.floor.id)&&this.buildLamps(x)}let l=this.placeRoof(e),c=this.stepRobots(t),h=this.stepFans(t),u=this.stepWeather(t),f=r||o||s||a||l,d=[];(r||this.controls.busy)&&d.push("camera"),o&&d.push("floors"),s&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.poolActive&&d.push("pool"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),c&&d.push("robot"),h&&d.push("fan"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.projections.active&&this.updateProjections(),this.sunFx.showShadow(this.floorId===null&&this.shadowSig!==""),this.realism.active&&this.realism.realize(this.scene,!!this.realPlan(),this.renderer,o||s||l||c||h),this.renderer.render(this.scene,this.camera),this.disposeRetired(),(this.viewChanged()||o||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),f&&this.invalidate();let p=this.flowActive||this.solarActive||this.soundActive||this.poolActive||c||h||this.effectFloors.size>0;p&&!this.decorWas&&(this.lastWake=t),this.decorWas=p;let b=this.effectFloors.size?this.decor(this.lowQuality?2*Tb:Tb):null;if(b!==null&&!this.effectTimer&&!document.hidden){let m=b;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=m/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.decorTimer||this.invalidate()},m)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33));let g=this.flowActive||this.solarActive||this.soundActive||this.poolActive;if(this.lowQuality){let m=c||g||h?this.decor(h?83:0,h?83:void 0):null;!f&&m!==null&&!this.decorTimer&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},m));return}!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},33)),!f&&h&&!this.fanTimer&&(this.fanTimer=setTimeout(()=>{this.fanTimer=void 0,this.invalidate()},50)),!f&&g&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},eT))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,o=Math.hypot(n,r)||1;for(let s of this.floors){let a=this.roomId!==null&&s.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;s.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/o+h[1]*r/o>=.25:a;!l&&f&&(c|=1<<u)}),s.mask.standing.value=l?0:65535,s.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new Y,r=this.houseView,o=[];for(let s of this.floors){let a=s.bbox;if(!(r&&s.o>.5&&a)){this.place(s.label,null);continue}let l=null,c=null,h=s.floor.elevation+s.y+s.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(b,h,g).project(this.camera);let m=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||m<l.x)&&(l={x:m,y:x}),(!c||m>c.x)&&(c={x:m,y:x})}s.label.hidden&&(s.label.hidden=!1),s.labelSize??={w:s.label.offsetWidth,h:s.label.offsetHeight};let u=s.labelSize.w,f=8+this.labelInset,d=l.x-u-14,p=l.y;d<f&&this.labelInset&&(d=c.x+14,p=c.y),o.push({fv:s,left:Math.max(f,Math.min(t-u-8,d)),y:p,h:s.labelSize.h})}o.sort((s,a)=>a.fv.rank-s.fv.rank);for(let s=1;s<o.length;s++){let a=o[s-1];o[s].y=Math.max(o[s].y,a.y+(a.h+o[s].h)/2+8)}for(let s of o)this.place(s.fv.label,`translate(${s.left}px, ${s.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((s,a)=>{let l=this.floorMap.get(s.floorId);if(this.roomId!==null&&s.room!==this.roomId||s.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(s.views==="house"||s.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new Y(s.p[0],s.p[1]+(l?.y??0)+(s.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),s.p[2]),h=this.camera.position.clone().sub(c),u=h.length();if(s.near!==void 0&&u>s.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=h.normalize().dot(new Y(s.n[0],s.n[1],s.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*s.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,p,f)}),this.updateDevicePins(t,e);for(let s of this.floors){let a=s.to<.99||s.o<.9||r||this.roomId!==null||this.otherFloor(s),l=s.floor.elevation+s.y+.05;for(let c of s.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new Y,r=this.houseView;for(let o of this.persons){let s=this.personPins.get(o.id),a=this.floorMap.get(o.floorId),l=this.figures.get(o.id);if(!s)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(s,null),l?.visible&&(l.visible=!1,this.invalidate());continue}let c=this.personAt.get(o.id);if(!c||c.floorId!==o.floorId)c={floorId:o.floorId,x:o.x,z:o.z};else{let f=o.x-c.x,d=o.z-c.z;Math.hypot(f,d)>.02?(c={floorId:o.floorId,x:c.x+f*.12,z:c.z+d*.12},this.labelsDirty=!0,this.invalidate()):c={floorId:o.floorId,x:o.x,z:o.z}}this.personAt.set(o.id,c);let h=a.floor.elevation+a.y;if(l){let f=Math.atan2(this.camera.position.x-c.x,this.camera.position.z-c.z);(!l.visible||l.position.x!==c.x||l.position.y!==h||l.position.z!==c.z||l.rotation.y!==f)&&(l.visible=!0,l.position.set(c.x,h,c.z),l.rotation.y=f,this.invalidate())}n.set(c.x,h+(l?1.85:.9),c.z).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(s,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let o of this.devices){let s=this.devicePins.get(o.id)?.el;if(!s)continue;let a=this.floorMap.get(o.floorId),l=o.id.startsWith("detect:")||o.id.startsWith("hh:")&&o.active;if(!a||r&&!l||a.to<.99||a.o<.9||o.pin===!1||this.otherFloor(a)){this.place(s,null);continue}if(n.set(o.x,a.floor.elevation+a.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(s,null);continue}let h=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(s)!==h&&(this.pinMode.set(s,h),s.classList.toggle("fp3d-dev-full",h==="full"),s.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(s,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let o=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:o.calls,triangles:o.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=dT(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function dT(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function pT(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(s,a,l,c,h)=>{e.strokeStyle=`rgba(55,224,255,${h})`,e.beginPath(),e.moveTo(s,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(s,a,l)=>{e.save(),e.beginPath(),e.rect(s*256,a*256,256,256),e.clip(),l(s*256,a*256),e.restore()};r(0,0,(s,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(s,c,s+256,c,.09);let h=s+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),r(1,0,(s,a)=>{for(let l=0;l<7;l++){let c=s+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),r(2,0,(s,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(s+c,a,s+c,a+256,.1),n(s,a+c,s+256,a+c,.1)}}),r(1,1,(s,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(s,c,s+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(s+u+.75,c,s+u+.75,c+256/2,.09)}}),r(2,1,(s,a)=>{n(s+.75,a,s+.75,a+256,.08),n(s,a+.75,s+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(s+l*97%256,a+(l*61+l*l%37)%256,2,2)});let o=new dn(t);return o.flipY=!1,o.wrapS=Sn,o.wrapT=Sn,o.anisotropy=4,o.colorSpace=Ce,o}function mT(i){let t=new Xt({map:i,transparent:!0,blending:Ae,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function gT(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new dn(i);return e.wrapS=mr,e.wrapT=mr,e.colorSpace=Ce,e}function ha(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}${i.width?`~${i.width}`:""}`}function bT(i){let t=new Xt({vertexColors:!0,transparent:!0,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`)},t.customProgramCacheKey=()=>"fp3d-pipe-line",t}function xT(i){let t=new Xt({vertexColors:!0,transparent:!0,blending:Ae,depthWrite:!1,side:ie});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = (diffuseColor.rgb * 0.3 + fp3dDotColor * 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function Eb(i,t){let e=i.rooms.map((r,o)=>o),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,o]of t){let s=i.rooms.findIndex(h=>h.id===r),a=i.rooms.findIndex(h=>h.id===o);if(s<0||a<0)continue;let l=n(s),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,o)=>n(o))}function vT(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new dn(t);return r.colorSpace=Ce,r}function yT(){let t=$f,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let s=0;s<=t;s++){let a=Math.round(s/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let o=new dn(e);return o.anisotropy=4,o.colorSpace=Ce,o}function ZC(i,t){return new Zf(i,t)}function Rb(i,t){return Math.max(.5,i-Math.max(.25,t))+.11}function Pb(i,t,e,n,r,o){let a=Math.max(.22,r);for(let l=0;l<4;l++){let c=o+l*Math.PI/2,h=Math.cos(c),u=Math.sin(c),d=[[.12,-.045],[a,-.065],[a,.065],[.12,.045]].map(([p,b])=>[t+p*h-b*u,n+p*u+b*h]);Ie(i,d,e-.006,e+.006,oT,sT,{aoFrom:0,bottom:!0})}}function qf(i,t,e,n,r=!0){let[o,s,a]=t.size??fa[t.lamp],l=t.base??0,c=(t.rotation??0)*ee,h=Math.cos(c),u=Math.sin(c),f=(g,m)=>[t.x+g*h-m*u,t.z+g*u+m*h],d=(g,m,x,y,v,M=14)=>{let S=[];for(let E=0;E<M;E++){let _=E/M*Math.PI*2;S.push([t.x+Math.cos(_)*g,t.z+Math.sin(_)*g])}Ie(i,S,m,x,y,v,{aoFrom:0,bottom:!0})},p=(g,m,x,y,v,M,S,E=S)=>Ie(i,[f(g,x),f(m,x),f(m,y),f(g,y)],v,M,S,E,{aoFrom:0,bottom:!0}),b=Math.max(.05,Math.min(o,s)/2);switch(t.lamp){case"ceiling":d(b*.25,e-.04,e,re,re,8),d(b,e-Math.max(.04,a)-.035,e-.04,n,n);break;case"pendant":{let g=Math.max(.4,e-a);d(.06,e-.02,e,re,re,8);let m=t.variant==="globe"?g+2*b:t.variant==="drum"?g+.24:g+.2;if(d(.008,m,e-.02,re,re,5),t.variant==="globe")for(let y=0;y<7;y++){let v=Math.PI*(y/7),M=Math.PI*((y+1)/7);d(b*Math.max(.2,Math.sin((v+M)/2)),g+b-b*Math.cos(v),g+b-b*Math.cos(M),n,n,14)}else if(t.variant==="cone")for(let y=0;y<4;y++)d(b*(.25+.75*(4-y)/4),g+.06*y,g+.06*(y+1),n,n,16);else t.variant==="drum"?d(b,g,g+.24,n,n,18):(d(b*.35,g+.14,g+.2,n,n,12),d(b,g,g+.14,n,n,16));break}case"fan":{let g=Math.max(.5,e-Math.max(.25,a));d(.06,e-.03,e,re,re,10),d(.012,g+.16,e-.03,re,re,6),d(.13,g+.07,g+.16,re,re,16),d(.11,g,g+.07,n,n,16),r&&Pb(i,t.x,Rb(e,a),t.z,o/2,c);break}case"downlight":d(b,e-.012,e,re,re,12),d(b*.7,e-.02,e-.012,n,n,12);break;case"spot":d(b*.6,e-.02,e,re,re,10),d(b,e-Math.max(.06,a),e-.02,re,re,12),d(b*.8,e-Math.max(.06,a)-.008,e-Math.max(.06,a),n,n,12);break;case"panel":p(-o/2,o/2,-s/2,s/2,e-Math.max(.015,a),e,re,re),p(-o/2+.02,o/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,a)-.004,e-Math.max(.015,a),n);break;case"uplight":d(Math.max(.1,b*.6),l,l+.03,re,re),d(.014,l+.03,l+a-.12,re,re,6),d(b,l+a-.14,l+a-.02,re,re),d(b*.92,l+a-.02,l+a,n,n);break;case"bollard":d(b,l,l+a-.14,re,re,10),d(b*.9,l+a-.14,l+a-.03,n,n,10),d(b*1.1,l+a-.03,l+a,re,re,10);break;case"garden":d(.012,l,l+a-.08,re,re,5),d(b,l+a-.08,l+a-.01,re,re,10),d(b*.8,l+a-.01,l+a,n,n,10);break;case"floor":d(Math.max(.1,b*.7),l,l+.03,re,re),d(.014,l+.03,l+a-.28,re,re,6),d(b,l+a-.3,l+a,n,n);break;case"table":d(Math.max(.05,b*.55),l,l+.03,re,re),d(.012,l+.03,l+a-.16,re,re,6),d(b,l+a-.18,l+a,n,n);break;case"wall":{let g=t.base??Tc;p(-o/2+.03,o/2-.03,-s/2,-s/2+.02,g,g+a,re),p(-o/2,o/2,-s/2+.02,s/2,g+a*.15,g+a*.85,n);break}case"strip":{let g=Math.max(.02,a),m=t.base!=null?t.base+g:e-.04;if(!t.roll&&!t.upright&&!t.rise){p(-o/2,o/2,-s/2,s/2,m-g,m,n);break}let x=(t.roll??0)*ee,y=Math.cos(x),v=Math.sin(x),M=t.upright?l+o/2:m-g/2,S=(t.upright?0:t.rise??0)*ee,E=(C,N,L)=>{let R=C,P=N*y-L*v,F=N*v+L*y;return S&&([R,P]=[R*Math.cos(S)-P*Math.sin(S),R*Math.sin(S)+P*Math.cos(S)]),t.upright&&([R,P]=[-P,R]),[t.x+R*h-F*u,M+P,t.z+R*u+F*h]},_=[E(-o/2,-g/2,-s/2),E(o/2,-g/2,-s/2),E(o/2,-g/2,s/2),E(-o/2,-g/2,s/2),E(-o/2,g/2,-s/2),E(o/2,g/2,-s/2),E(o/2,g/2,s/2),E(-o/2,g/2,s/2)],A=new J(n),T=[t.x,M,t.z],w=(C,N,L,R)=>{let[P,F,D]=[_[C],_[N],_[L]],U=[(F[1]-P[1])*(D[2]-P[2])-(F[2]-P[2])*(D[1]-P[1]),(F[2]-P[2])*(D[0]-P[0])-(F[0]-P[0])*(D[2]-P[2]),(F[0]-P[0])*(D[1]-P[1])-(F[1]-P[1])*(D[0]-P[0])],k=[P[0]-T[0],P[1]-T[1],P[2]-T[2]],V=U[0]*k[0]+U[1]*k[1]+U[2]*k[2]<0,[X,z,$,j]=V?[_[R],_[L],_[N],_[C]]:[_[C],_[N],_[L],_[R]];i.tri(X,z,$,A,A,A),i.tri(X,$,j,A,A,A)};w(0,1,2,3),w(4,5,6,7),w(0,1,5,4),w(1,2,6,5),w(2,3,7,6),w(3,0,4,7);break}}}export{Nf as FloorMap,Zf as FloorplanViewer,Uf as WalkCamera,ZC as createViewer,IC as funLib,KS as furnitureFront,$S as furniturePreview,fT as isLowEnd,ZS as itemPicture,Pb as pushFanBlades,qf as pushLampModel};
