var Md=0,Uu=1,wd=2;var bs=1,Sd=2,go=3,ai=0,rn=1,ie=2,Ln=0,Tn=1,Ee=2,Bu=3,xs=4,Td=5;var br=100,Ed=101,Ad=102,Rd=103,Cd=104,Pd=200,Id=201,Ld=202,Fd=203,ku=204,zu=205,Dd=206,Od=207,Nd=208,Ud=209,Bd=210,kd=211,zd=212,Vd=213,Gd=214,Ua=0,Ba=1,ka=2,oo=3,za=4,Va=5,Ga=6,Ha=7,Vu=0,Hd=1,Wd=2,Hn=0,Gu=1,Hu=2,Wu=3,Xu=4,Yu=5,qu=6,$u=7;var Zu=300,Wi=301,xr=302,xl=303,vl=304,vs=306,fr=1e3,Mn=1001,Wa=1002,tn=1003,Xd=1004;var ys=1005;var Xe=1006,yl=1007;var Xi=1008;var En=1009,Ku=1010,Ju=1011,bo=1012,_l=1013,Wn=1014,Xn=1015,Yn=1016,Ml=1017,wl=1018,xo=1020,ju=35902,Qu=35899,th=1021,eh=1022,Fn=1023,ei=1026,Yi=1027,nh=1028,Sl=1029,qi=1030,Tl=1031;var El=1033,_s=33776,Ms=33777,ws=33778,Ss=33779,Al=35840,Rl=35841,Cl=35842,Pl=35843,Il=36196,Ll=37492,Fl=37496,Dl=37488,Ol=37489,Ts=37490,Nl=37491,Ul=37808,Bl=37809,kl=37810,zl=37811,Vl=37812,Gl=37813,Hl=37814,Wl=37815,Xl=37816,Yl=37817,ql=37818,$l=37819,Zl=37820,Kl=37821,Jl=36492,jl=36494,Ql=36495,tc=36283,ec=36284,Es=36285,nc=36286;var Zo=2300,Xa=2301,Da=2302,Eu=2303,Au=2400,Ru=2401,Cu=2402;var Yd=3200;var ih=0,qd=1,wi="",Ne="srgb",Ko="srgb-linear",Jo="linear",ye="srgb";var Oa=7680;var $d=519,Zd=512,Kd=513,Jd=514,ic=515,jd=516,Qd=517,rc=518,tp=519,rh=35044,oh=35048;var sh="300 es",Vn=2e3,jo=2001;function jg(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function so(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ep(){let i=so("canvas");return i.style.display="block",i}var Hf={},ao=null;function Qo(...i){let t="THREE."+i.shift();ao?ao("log",t,...i):console.log(t,...i)}function np(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qt(...i){i=np(i);let t="THREE."+i.shift();if(ao)ao("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function $t(...i){i=np(i);let t="THREE."+i.shift();if(ao)ao("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function hr(...i){let t=i.join(" ");t in Hf||(Hf[t]=!0,qt(...i))}function ip(i,t,e){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}var rp={[Ua]:Ba,[ka]:Ga,[za]:Ha,[oo]:Va,[Ba]:Ua,[Ga]:ka,[Ha]:za,[Va]:oo},ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nu=Math.PI/180,Ya=180/Math.PI;function Ui(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function tb(i,t){return(i%t+t)%t}function iu(i,t,e){return(1-e)*i+e*t}function ti(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var hh=class hh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,s=this.y-t.y;return this.x=o*n-s*r+t.x,this.y=o*r+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;var Jt=hh,ii=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,s,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=o[s+0],d=o[s+1],m=o[s+2],b=o[s+3];if(u!==b||l!==f||c!==d||h!==m){let g=l*f+c*d+h*m+u*b;g<0&&(f=-f,d=-d,m=-m,b=-b,g=-g);let p=1-a;if(g<.9995){let x=Math.acos(g),y=Math.sin(x);p=Math.sin(p*x)/y,a=Math.sin(a*x)/y,l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+b*a}else{l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+b*a;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=o[s],f=o[s+1],d=o[s+2],m=o[s+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,o=t._z,s=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(o/2),f=l(n/2),d=l(r/2),m=l(o/2);switch(s){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],o=e[8],s=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(s-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(o+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(o-c)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(s-r)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+s*a+r*c-o*l,this._y=r*h+s*l+o*a-n*c,this._z=o*h+s*c+n*l-r*a,this._w=s*h-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},fh=class fh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=t.elements,s=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,o=t.x,s=t.y,a=t.z,l=t.w,c=2*(s*r-a*n),h=2*(a*e-o*r),u=2*(o*n-s*e);return this.x=e+l*c+s*u-a*h,this.y=n+l*h+a*c-o*u,this.z=r+l*u+o*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,o=t.z,s=e.x,a=e.y,l=e.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ru.copy(this).projectOnVector(t),this.sub(ru)}reflect(t){return this.sub(ru.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fh.prototype.isVector3=!0;var Y=fh,ru=new Y,Wf=new ii,dh=class dh{constructor(t,e,n,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c)}set(t,e,n,r,o,s,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],b=r[0],g=r[3],p=r[6],x=r[1],y=r[4],v=r[7],M=r[2],w=r[5],T=r[8];return o[0]=s*b+a*x+l*M,o[3]=s*g+a*y+l*w,o[6]=s*p+a*v+l*T,o[1]=c*b+h*x+u*M,o[4]=c*g+h*y+u*w,o[7]=c*p+h*v+u*T,o[2]=f*b+d*x+m*M,o[5]=f*g+d*y+m*w,o[8]=f*p+d*v+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*s*h-e*a*c-n*o*h+n*a*l+r*o*c-r*s*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*s-a*c,f=a*l-h*o,d=c*o-s*l,m=e*u+n*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return t[0]=u*b,t[1]=(r*c-h*n)*b,t[2]=(a*n-r*s)*b,t[3]=f*b,t[4]=(h*e-r*l)*b,t[5]=(r*o-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(s*e-n*o)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+t,-r*c,r*l,-r*(-c*s+l*a)+a+e,0,0,1),this}scale(t,e){return hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ou.makeScale(t,e)),this}rotate(t){return hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ou.makeRotation(-t)),this}translate(t,e){return hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ou.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dh.prototype.isMatrix3=!0;var te=dh,ou=new te,Xf=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yf=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eb(){let i={enabled:!0,workingColorSpace:Ko,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===ye&&(r.r=_i(r.r),r.g=_i(r.g),r.b=_i(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ye&&(r.r=ro(r.r),r.g=ro(r.g),r.b=ro(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?Jo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ko]:{primaries:t,whitePoint:n,transfer:Jo,toXYZ:Xf,fromXYZ:Yf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:Xf,fromXYZ:Yf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}var ce=eb();function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ro(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zr,qa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zr===void 0&&(zr=so("canvas")),zr.width=t.width,zr.height=t.height;let r=zr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=zr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=so("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=_i(o[s]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_i(e[n]/255)*255):e[n]=_i(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nb=0,lo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=Ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(su(r[s].image)):o.push(su(r[s]))}else o=su(r);n.url=o}return e||(t.images[this.uuid]=n),n}};function su(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var ib=0,au=new Y,hn=class i extends ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Mn,r=Mn,o=Xe,s=Xi,a=Fn,l=En,c=i.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=Ui(),this.name="",this.source=new lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(au).x}get height(){return this.source.getSize(au).y}get depth(){return this.source.getSize(au).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fr:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case Wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fr:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case Wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Zu;hn.DEFAULT_ANISOTROPY=1;var ph=class ph{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*e+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*e+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*e+s[7]*n+s[11]*r+s[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(d+1)/2,M=(p+1)/2,w=(h+f)/4,T=(u+b)/4,_=(m+g)/4;return y>v&&y>M?y<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(y),r=w/n,o=T/n):v>M?v<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(v),n=w/r,o=_/r):M<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),n=T/o,r=_/o),this.set(n,r,o,e),this}let x=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-b)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ph.prototype.isVector4=!0;var Be=ph,$a=class extends ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},o=new hn(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new lo(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends $a{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ts=class extends hn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Za=class extends hn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var bl=class bl{constructor(t,e,n,r,o,s,a,l,c,h,u,f,d,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c,h,u,f,d,m,b,g)}set(t,e,n,r,o,s,a,l,c,h,u,f,d,m,b,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Vr.setFromMatrixColumn(t,0).length(),o=1/Vr.setFromMatrixColumn(t,1).length(),s=1/Vr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,o=t.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){let f=s*h,d=s*u,m=a*h,b=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-b*c,e[9]=-a*l,e[2]=b-f*c,e[6]=m+d*c,e[10]=s*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,b=c*u;e[0]=f+b*a,e[4]=m*a-d,e[8]=s*c,e[1]=s*u,e[5]=s*h,e[9]=-a,e[2]=d*a-m,e[6]=b+f*a,e[10]=s*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,b=c*u;e[0]=f-b*a,e[4]=-s*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=s*h,e[9]=b-f*a,e[2]=-s*c,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){let f=s*h,d=s*u,m=a*h,b=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+b,e[1]=l*u,e[5]=b*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){let f=s*l,d=s*c,m=a*l,b=a*c;e[0]=l*h,e[4]=b-f*u,e[8]=m*u+d,e[1]=u,e[5]=s*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-b*u}else if(t.order==="XZY"){let f=s*l,d=s*c,m=a*l,b=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+b,e[5]=s*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=b*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rb,t,ob)}lookAt(t,e,n){let r=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Li.crossVectors(n,yn),Li.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Li.crossVectors(n,yn)),Li.normalize(),sa.crossVectors(yn,Li),r[0]=Li.x,r[4]=sa.x,r[8]=yn.x,r[1]=Li.y,r[5]=sa.y,r[9]=yn.y,r[2]=Li.z,r[6]=sa.z,r[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],b=n[6],g=n[10],p=n[14],x=n[3],y=n[7],v=n[11],M=n[15],w=r[0],T=r[4],_=r[8],A=r[12],E=r[1],S=r[5],P=r[9],U=r[13],L=r[2],R=r[6],C=r[10],F=r[14],D=r[3],N=r[7],k=r[11],V=r[15];return o[0]=s*w+a*E+l*L+c*D,o[4]=s*T+a*S+l*R+c*N,o[8]=s*_+a*P+l*C+c*k,o[12]=s*A+a*U+l*F+c*V,o[1]=h*w+u*E+f*L+d*D,o[5]=h*T+u*S+f*R+d*N,o[9]=h*_+u*P+f*C+d*k,o[13]=h*A+u*U+f*F+d*V,o[2]=m*w+b*E+g*L+p*D,o[6]=m*T+b*S+g*R+p*N,o[10]=m*_+b*P+g*C+p*k,o[14]=m*A+b*U+g*F+p*V,o[3]=x*w+y*E+v*L+M*D,o[7]=x*T+y*S+v*R+M*N,o[11]=x*_+y*P+v*C+M*k,o[15]=x*A+y*U+v*F+M*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],s=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],b=t[7],g=t[11],p=t[15],x=l*d-c*f,y=a*d-c*u,v=a*f-l*u,M=s*d-c*h,w=s*f-l*h,T=s*u-a*h;return e*(b*x-g*y+p*v)-n*(m*x-g*M+p*w)+r*(m*y-b*M+p*T)-o*(m*v-b*w+g*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[1],s=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(s*h-a*c)-n*(o*h-a*l)+r*(o*c-s*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],b=t[13],g=t[14],p=t[15],x=e*a-n*s,y=e*l-r*s,v=e*c-o*s,M=n*l-r*a,w=n*c-o*a,T=r*c-o*l,_=h*b-u*m,A=h*g-f*m,E=h*p-d*m,S=u*g-f*b,P=u*p-d*b,U=f*p-d*g,L=x*U-y*P+v*S+M*E-w*A+T*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/L;return t[0]=(a*U-l*P+c*S)*R,t[1]=(r*P-n*U-o*S)*R,t[2]=(b*T-g*w+p*M)*R,t[3]=(f*w-u*T-d*M)*R,t[4]=(l*E-s*U-c*A)*R,t[5]=(e*U-r*E+o*A)*R,t[6]=(g*v-m*T-p*y)*R,t[7]=(h*T-f*v+d*y)*R,t[8]=(s*P-a*E+c*_)*R,t[9]=(n*E-e*P-o*_)*R,t[10]=(m*w-b*v+p*x)*R,t[11]=(u*v-h*w-d*x)*R,t[12]=(a*A-s*S-l*_)*R,t[13]=(e*S-n*A+r*_)*R,t[14]=(b*y-m*M-g*x)*R,t[15]=(h*M-u*y+f*x)*R,this}scale(t){let e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),o=1-n,s=t.x,a=t.y,l=t.z,c=o*s,h=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*s,0,c*l-r*a,h*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,s){return this.set(1,n,o,0,t,1,s,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,o=e._x,s=e._y,a=e._z,l=e._w,c=o+o,h=s+s,u=a+a,f=o*c,d=o*h,m=o*u,b=s*h,g=s*u,p=a*u,x=l*c,y=l*h,v=l*u,M=n.x,w=n.y,T=n.z;return r[0]=(1-(b+p))*M,r[1]=(d+v)*M,r[2]=(m-y)*M,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(f+p))*w,r[6]=(g+x)*w,r[7]=0,r[8]=(m+y)*T,r[9]=(g-x)*T,r[10]=(1-(f+b))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let s=Vr.set(r[0],r[1],r[2]).length(),a=Vr.set(r[4],r[5],r[6]).length(),l=Vr.set(r[8],r[9],r[10]).length();o<0&&(s=-s),Un.copy(this);let c=1/s,h=1/a,u=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,e.setFromRotationMatrix(Un),n.x=s,n.y=a,n.z=l,this}makePerspective(t,e,n,r,o,s,a=Vn,l=!1){let c=this.elements,h=2*o/(e-t),u=2*o/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),m,b;if(l)m=o/(s-o),b=s*o/(s-o);else if(a===Vn)m=-(s+o)/(s-o),b=-2*s*o/(s-o);else if(a===jo)m=-s/(s-o),b=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,o,s,a=Vn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),m,b;if(l)m=1/(s-o),b=s/(s-o);else if(a===Vn)m=-2/(s-o),b=-(s+o)/(s-o);else if(a===jo)m=-1/(s-o),b=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};bl.prototype.isMatrix4=!0;var Se=bl,Vr=new Y,Un=new Se,rb=new Y(0,0,0),ob=new Y(1,1,1),Li=new Y,sa=new Y,yn=new Y,qf=new Se,$f=new ii,Bi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(he(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-he(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $f.setFromEuler(this),this.setFromQuaternion($f,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var co=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sb=0,Zf=new Y,Gr=new ii,mi=new Se,aa=new Y,zo=new Y,ab=new Y,lb=new ii,Kf=new Y(1,0,0),Jf=new Y(0,1,0),jf=new Y(0,0,1),Qf={type:"added"},cb={type:"removed"},Hr={type:"childadded",child:null},lu={type:"childremoved",child:null},bn=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Y,e=new Bi,n=new ii,r=new Y(1,1,1);function o(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Se},normalMatrix:{value:new te}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gr.setFromAxisAngle(t,e),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(t,e){return Gr.setFromAxisAngle(t,e),this.quaternion.premultiply(Gr),this}rotateX(t){return this.rotateOnAxis(Kf,t)}rotateY(t){return this.rotateOnAxis(Jf,t)}rotateZ(t){return this.rotateOnAxis(jf,t)}translateOnAxis(t,e){return Zf.copy(t).applyQuaternion(this.quaternion),this.position.add(Zf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kf,t)}translateY(t){return this.translateOnAxis(Jf,t)}translateZ(t){return this.translateOnAxis(jf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?aa.copy(t):aa.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(zo,aa,this.up):mi.lookAt(aa,zo,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(mi),this.quaternion.premultiply(Gr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qf),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cb),lu.child=t,this.dispatchEvent(lu),lu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qf),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,t,ab),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,lb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*r,o[13]+=n-o[1]*e-o[5]*n-o[9]*r,o[14]+=r-o[2]*e-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));r.material=a}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(t.animations,l))}}if(e){let a=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),u=s(t.shapes),f=s(t.skeletons),d=s(t.animations),m=s(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function s(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bn.DEFAULT_UP=new Y(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ce=class extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ub={type:"move"},uo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(let b of t.hand.values()){let g=e.getJointPose(b,n),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ub)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},la={h:0,s:0,l:0};function cu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var j=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ce.workingColorSpace){if(t=tb(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,s=2*n-o;this.r=cu(s,o,t+1/3),this.g=cu(s,o,t),this.b=cu(s,o,t-1/3)}return ce.colorSpaceToWorking(this,r),this}setStyle(t,e=Ne){function n(o){o!==void 0&&parseFloat(o)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(o,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=op[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=ro(t.r),this.g=ro(t.g),this.b=ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ce.workingToColorSpace(un.copy(this),t),Math.round(he(un.r*255,0,255))*65536+Math.round(he(un.g*255,0,255))*256+Math.round(he(un.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(un.copy(this),e);let n=un.r,r=un.g,o=un.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,h=(a+s)/2;if(a===s)l=0,c=0;else{let u=s-a;switch(c=h<=.5?u/(s+a):u/(2-s-a),s){case n:l=(r-o)/u+(r<o?6:0);break;case r:l=(o-n)/u+2;break;case o:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=Ne){ce.workingToColorSpace(un.copy(this),t);let e=un.r,n=un.g,r=un.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(la);let n=iu(Fi.h,la.h,e),r=iu(Fi.s,la.s,e),o=iu(Fi.l,la.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new j;j.NAMES=op;var es=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new j(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ri=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bn=new Y,gi=new Y,uu=new Y,bi=new Y,Wr=new Y,Xr=new Y,td=new Y,hu=new Y,fu=new Y,du=new Y,pu=new Be,mu=new Be,gu=new Be,yi=class i{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Bn.subVectors(t,e),r.cross(Bn);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){Bn.subVectors(r,e),gi.subVectors(n,e),uu.subVectors(t,e);let s=Bn.dot(Bn),a=Bn.dot(gi),l=Bn.dot(uu),c=gi.dot(gi),h=gi.dot(uu),u=s*c-a*a;if(u===0)return o.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(s*h-a*l)*f;return o.set(1-d-m,m,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(t,e,n,r,o,s,a,l){return this.getBarycoord(t,e,n,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,bi.x),l.addScaledVector(s,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(t,e,n,r,o,s){return pu.setScalar(0),mu.setScalar(0),gu.setScalar(0),pu.fromBufferAttribute(t,e),mu.fromBufferAttribute(t,n),gu.fromBufferAttribute(t,r),s.setScalar(0),s.addScaledVector(pu,o.x),s.addScaledVector(mu,o.y),s.addScaledVector(gu,o.z),s}static isFrontFacing(t,e,n,r){return Bn.subVectors(n,e),gi.subVectors(t,e),Bn.cross(gi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Bn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,o){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,o=this.c,s,a;Wr.subVectors(r,n),Xr.subVectors(o,n),hu.subVectors(t,n);let l=Wr.dot(hu),c=Xr.dot(hu);if(l<=0&&c<=0)return e.copy(n);fu.subVectors(t,r);let h=Wr.dot(fu),u=Xr.dot(fu);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),e.copy(n).addScaledVector(Wr,s);du.subVectors(t,o);let d=Wr.dot(du),m=Xr.dot(du);if(m>=0&&d<=m)return e.copy(o);let b=d*c-l*m;if(b<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Xr,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return td.subVectors(o,r),a=(u-h)/(u-h+(d-m)),e.copy(r).addScaledVector(td,a);let p=1/(g+b+f);return s=b*p,a=f*p,e.copy(n).addScaledVector(Wr,s).addScaledVector(Xr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xn=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,kn):kn.fromBufferAttribute(o,s),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ca.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(t.matrixWorld),this.union(ca)}let r=t.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vo),ua.subVectors(this.max,Vo),Yr.subVectors(t.a,Vo),qr.subVectors(t.b,Vo),$r.subVectors(t.c,Vo),Di.subVectors(qr,Yr),Oi.subVectors($r,qr),ar.subVectors(Yr,$r);let e=[0,-Di.z,Di.y,0,-Oi.z,Oi.y,0,-ar.z,ar.y,Di.z,0,-Di.x,Oi.z,0,-Oi.x,ar.z,0,-ar.x,-Di.y,Di.x,0,-Oi.y,Oi.x,0,-ar.y,ar.x,0];return!bu(e,Yr,qr,$r,ua)||(e=[1,0,0,0,1,0,0,0,1],!bu(e,Yr,qr,$r,ua))?!1:(ha.crossVectors(Di,Oi),e=[ha.x,ha.y,ha.z],bu(e,Yr,qr,$r,ua))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],kn=new Y,ca=new xn,Yr=new Y,qr=new Y,$r=new Y,Di=new Y,Oi=new Y,ar=new Y,Vo=new Y,ua=new Y,ha=new Y,lr=new Y;function bu(i,t,e,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){lr.fromArray(i,o);let a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=t.dot(lr),c=e.dot(lr),h=n.dot(lr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var We=new Y,fa=new Jt,hb=0,wn=class extends ni{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rh,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fa.fromBufferAttribute(this,e),fa.applyMatrix3(t),this.setXY(e,fa.x,fa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array),o=we(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ns=class extends wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var dr=class extends wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var It=class extends wn{constructor(t,e,n){super(new Float32Array(t),e,n)}},fb=new xn,Go=new Y,xu=new Y,ki=class{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):fb.setFromPoints(t).getCenter(n);let r=0;for(let o=0,s=t.length;o<s;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Go.subVectors(t,this.center);let e=Go.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Go,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Go.copy(t.center).add(xu)),this.expandByPoint(Go.copy(t.center).sub(xu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},db=0,Pn=new Se,vu=new bn,Zr=new Y,_n=new xn,Ho=new xn,je=new Y,Vt=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jg(t)?dr:ns)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new te().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return vu.lookAt(t),vu.updateMatrix(),this.applyMatrix4(vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,o=t.length;r<o;r++){let s=t[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let o=e[n];_n.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let o=0,s=e.length;o<s;o++){let a=e[o];Ho.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(_n.min,Ho.min),_n.expandByPoint(je),je.addVectors(_n.max,Ho.max),_n.expandByPoint(je)):(_n.expandByPoint(Ho.min),_n.expandByPoint(Ho.max))}_n.getCenter(n);let r=0;for(let o=0,s=t.count;o<s;o++)je.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(je));if(e)for(let o=0,s=e.length;o<s;o++){let a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(Zr.fromBufferAttribute(t,c),je.add(Zr)),r=Math.max(r,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,o=e.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new wn(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new Y,l[_]=new Y;let c=new Y,h=new Y,u=new Y,f=new Jt,d=new Jt,m=new Jt,b=new Y,g=new Y;function p(_,A,E){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,E),f.fromBufferAttribute(o,_),d.fromBufferAttribute(o,A),m.fromBufferAttribute(o,E),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let S=1/(d.x*m.y-m.x*d.y);isFinite(S)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(S),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(S),a[_].add(b),a[A].add(b),a[E].add(b),l[_].add(g),l[A].add(g),l[E].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let _=0,A=x.length;_<A;++_){let E=x[_],S=E.start,P=E.count;for(let U=S,L=S+P;U<L;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let y=new Y,v=new Y,M=new Y,w=new Y;function T(_){M.fromBufferAttribute(r,_),w.copy(M);let A=a[_];y.copy(A),y.sub(M.multiplyScalar(M.dot(A))).normalize(),v.crossVectors(w,A);let S=v.dot(l[_])<0?-1:1;s.setXYZW(_,y.x,y.y,y.z,S)}for(let _=0,A=x.length;_<A;++_){let E=x[_],S=E.start,P=E.count;for(let U=S,L=S+P;U<L;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new Y,o=new Y,s=new Y,a=new Y,l=new Y,c=new Y,h=new Y,u=new Y;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),b=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,m),o.fromBufferAttribute(e,b),s.fromBufferAttribute(e,g),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),s.fromBufferAttribute(e,f+2),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let b=0,g=l.length;b<g;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new wn(f,h,u)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let o=t.morphAttributes;for(let c in o){let h=[],u=o[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ka=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rh,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},gn=new Y,is=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ti(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array),o=we(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){Qo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new wn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Qo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yu=new Y,pb=new Y,mb=new te,zn=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=yu.subVectors(n,e).cross(pb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(yu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(r,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||mb.getNormalMatrix(t),r=this.coplanarPoint(yu).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},gb=0,oi=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Tn,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ku,this.blendDst=zu,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(e){let o=r(t.textures),s=r(t.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new j().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Jt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ho=class extends oi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Kr,Wo=new Y,Jr=new Y,jr=new Y,Qr=new Jt,Xo=new Jt,sp=new Se,da=new Y,Yo=new Y,pa=new Y,ed=new Jt,_u=new Jt,nd=new Jt,rs=class extends bn{constructor(t=new ho){if(super(),this.isSprite=!0,this.type="Sprite",Kr===void 0){Kr=new Vt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ka(e,5);Kr.setIndex([0,1,2,0,2,3]),Kr.setAttribute("position",new is(n,3,0,!1)),Kr.setAttribute("uv",new is(n,2,3,!1))}this.geometry=Kr,this.material=t,this.center=new Jt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&$t('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Jr.setFromMatrixScale(this.matrixWorld),sp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),jr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jr.multiplyScalar(-jr.z);let n=this.material.rotation,r,o;n!==0&&(o=Math.cos(n),r=Math.sin(n));let s=this.center;ma(da.set(-.5,-.5,0),jr,s,Jr,r,o),ma(Yo.set(.5,-.5,0),jr,s,Jr,r,o),ma(pa.set(.5,.5,0),jr,s,Jr,r,o),ed.set(0,0),_u.set(1,0),nd.set(1,1);let a=t.ray.intersectTriangle(da,Yo,pa,!1,Wo);if(a===null&&(ma(Yo.set(-.5,.5,0),jr,s,Jr,r,o),_u.set(0,1),a=t.ray.intersectTriangle(da,pa,Yo,!1,Wo),a===null))return;let l=t.ray.origin.distanceTo(Wo);l<t.near||l>t.far||e.push({distance:l,point:Wo.clone(),uv:yi.getInterpolation(Wo,da,Yo,pa,ed,_u,nd,new Jt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ma(i,t,e,n,r,o){Qr.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Xo.x=o*Qr.x-r*Qr.y,Xo.y=r*Qr.x+o*Qr.y):Xo.copy(Qr),i.copy(t),i.x+=Xo.x,i.y+=Xo.y,i.applyMatrix4(sp)}var vi=new Y,Mu=new Y,ga=new Y,ba=new Y,pr=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Mu.copy(t).add(e).multiplyScalar(.5),ga.copy(e).sub(t).normalize(),ba.copy(this.origin).sub(Mu);let o=t.distanceTo(e)*.5,s=-this.direction.dot(ga),a=ba.dot(this.direction),l=-ba.dot(ga),c=ba.lengthSq(),h=Math.abs(1-s*s),u,f,d,m;if(h>0)if(u=s*l-a,f=s*a-l,m=o*h,u>=0)if(f>=-m)if(f<=m){let b=1/h;u*=b,f*=b,d=u*(u+s*f+2*a)+f*(s*u+f+2*l)+c}else f=o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-s*o+a)),f=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+c):(u=Math.max(0,-(s*o+a)),f=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c);else f=s>0?-o:o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Mu).addScaledVector(ga,f),d}intersectSphere(t,e){if(t.radius<0)return null;vi.subVectors(t.center,this.origin);let n=vi.dot(this.direction),r=vi.dot(vi)-n*n,o=t.radius*t.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,s,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(o=(t.min.y-f.y)*h,s=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,s=(t.min.y-f.y)*h),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-s.x,f=t.y-s.y,d=t.z-s.z,m=e.x-s.x,b=e.y-s.y,g=e.z-s.z,p=n.x-s.x,x=n.y-s.y,y=n.z-s.z,v=Math.abs(l),M=Math.abs(c),w=Math.abs(h),T,_,A,E,S,P,U,L,R,C,F,D;if(v>=M&&v>=w?(A=l,P=u,R=m,D=p,l>=0?(T=c,_=h,E=f,S=d,U=b,L=g,C=x,F=y):(T=h,_=c,E=d,S=f,U=g,L=b,C=y,F=x)):M>=w?(A=c,P=f,R=b,D=x,c>=0?(T=h,_=l,E=d,S=u,U=g,L=m,C=y,F=p):(T=l,_=h,E=u,S=d,U=m,L=g,C=p,F=y)):(A=h,P=d,R=g,D=y,h>=0?(T=l,_=c,E=u,S=f,U=m,L=b,C=p,F=x):(T=c,_=l,E=f,S=u,U=b,L=m,C=x,F=p)),A===0)return null;let N=T/A,k=_/A,V=1/A,X=E-N*P,z=S-k*P,K=U-N*R,J=L-k*R,at=C-N*D,H=F-k*D,W=at*J-H*K,tt=X*H-z*at,st=K*z-J*X;if(r){if(W<0||tt<0||st<0)return null}else if((W<0||tt<0||st<0)&&(W>0||tt>0||st>0))return null;let it=W+tt+st;if(it===0)return null;let ht=V*(W*P+tt*R+st*D);return(it>0?ht<0:ht>0)?null:this.at(ht/it,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},id=new Se,cr=new pr,xa=new ki,rd=new Y,va=new Y,ya=new Y,_a=new Y,wu=new Y,Ma=new Y,od=new Y,wa=new Y,At=class extends bn{constructor(t=new Vt,e=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(o&&a){Ma.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],u=o[l];h!==0&&(wu.fromBufferAttribute(u,t),s?Ma.addScaledVector(wu,h):Ma.addScaledVector(wu.sub(e),h))}e.add(Ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(o),cr.copy(t.ray).recast(t.near),!(xa.containsPoint(cr.origin)===!1&&(cr.intersectSphere(xa,rd)===null||cr.origin.distanceToSquared(rd)>(t.far-t.near)**2))&&(id.copy(o).invert(),cr.copy(t.ray).applyMatrix4(id),!(n.boundingBox!==null&&cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cr)))}_computeIntersections(t,e,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,b=f.length;m<b;m++){let g=f[m],p=s[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=y;v<M;v+=3){let w=a.getX(v),T=a.getX(v+1),_=a.getX(v+2);r=Sa(this,p,t,n,c,h,u,w,T,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let g=m,p=b;g<p;g+=3){let x=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);r=Sa(this,s,t,n,c,h,u,x,y,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,b=f.length;m<b;m++){let g=f[m],p=s[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=y;v<M;v+=3){let w=v,T=v+1,_=v+2;r=Sa(this,p,t,n,c,h,u,w,T,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let g=m,p=b;g<p;g+=3){let x=g,y=g+1,v=g+2;r=Sa(this,s,t,n,c,h,u,x,y,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function bb(i,t,e,n,r,o,s,a){let l;if(t.side===rn?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,t.side===ai,a),l===null)return null;wa.copy(a),wa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wa);return c<e.near||c>e.far?null:{distance:c,point:wa.clone(),object:i}}function Sa(i,t,e,n,r,o,s,a,l,c){i.getVertexPosition(a,va),i.getVertexPosition(l,ya),i.getVertexPosition(c,_a);let h=bb(i,t,e,n,va,ya,_a,od);if(h){let u=new Y;yi.getBarycoord(od,va,ya,_a,u),r&&(h.uv=yi.getInterpolatedAttribute(r,a,l,c,u,new Jt)),o&&(h.uv1=yi.getInterpolatedAttribute(o,a,l,c,u,new Jt)),s&&(h.normal=yi.getInterpolatedAttribute(s,a,l,c,u,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new Y,materialIndex:0};yi.getNormal(va,ya,_a,f.normal),h.face=f,h.barycoord=u}return h}var Ja=class extends hn{constructor(t=null,e=1,n=1,r,o,s,a,l,c=tn,h=tn,u,f){super(null,s,a,l,c,h,r,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ur=new ki,xb=new Jt(.5,.5),Ta=new Y,os=class{constructor(t=new zn,e=new zn,n=new zn,r=new zn,o=new zn,s=new zn){this.planes=[t,e,n,r,o,s]}set(t,e,n,r,o,s){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn,n=!1){let r=this.planes,o=t.elements,s=o[0],a=o[1],l=o[2],c=o[3],h=o[4],u=o[5],f=o[6],d=o[7],m=o[8],b=o[9],g=o[10],p=o[11],x=o[12],y=o[13],v=o[14],M=o[15];if(r[0].setComponents(c-s,d-h,p-m,M-x).normalize(),r[1].setComponents(c+s,d+h,p+m,M+x).normalize(),r[2].setComponents(c+a,d+u,p+b,M+y).normalize(),r[3].setComponents(c-a,d-u,p-b,M-y).normalize(),n)r[4].setComponents(l,f,g,v).normalize(),r[5].setComponents(c-l,d-f,p-g,M-v).normalize();else if(r[4].setComponents(c-l,d-f,p-g,M-v).normalize(),e===Vn)r[5].setComponents(c+l,d+f,p+g,M+v).normalize();else if(e===jo)r[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(t){ur.center.set(0,0,0);let e=xb.distanceTo(t.center);return ur.radius=.7071067811865476+e,ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Ta.x=r.normal.x>0?t.max.x:t.min.x,Ta.y=r.normal.y>0?t.max.y:t.min.y,Ta.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $e=class extends oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new j(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ja=new Y,Qa=new Y,sd=new Se,qo=new pr,Ea=new ki,Su=new Y,ad=new Y,tl=class extends bn{constructor(t=new Vt,e=new $e){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,o=e.count;r<o;r++)ja.fromBufferAttribute(e,r-1),Qa.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ja.distanceTo(Qa);t.setAttribute("lineDistance",new It(n,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),Ea.radius+=o,t.ray.intersectsSphere(Ea)===!1)return;sd.copy(r).invert(),qo.copy(t.ray).applyMatrix4(sd);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,s.start),m=Math.min(h.count,s.start+s.count);for(let b=d,g=m-1;b<g;b+=c){let p=h.getX(b),x=h.getX(b+1),y=Aa(this,t,qo,l,p,x,b);y&&e.push(y)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(d),p=Aa(this,t,qo,l,b,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,s.start),m=Math.min(f.count,s.start+s.count);for(let b=d,g=m-1;b<g;b+=c){let p=Aa(this,t,qo,l,b,b+1,b);p&&e.push(p)}if(this.isLineLoop){let b=Aa(this,t,qo,l,m-1,d,m-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Aa(i,t,e,n,r,o,s){let a=i.geometry.attributes.position;if(ja.fromBufferAttribute(a,r),Qa.fromBufferAttribute(a,o),e.distanceSqToSegment(ja,Qa,Su,ad)>n)return;Su.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Su);if(!(c<t.near||c>t.far))return{distance:c,point:ad.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var ld=new Y,cd=new Y,qe=class extends tl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,o=e.count;r<o;r+=2)ld.fromBufferAttribute(e,r),cd.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ld.distanceTo(cd);t.setAttribute("lineDistance",new It(n,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Mi=class extends oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ud=new Se,Pu=new pr,Ra=new ki,Ca=new Y,zi=class extends bn{constructor(t=new Vt,e=new Mi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(r),Ra.radius+=o,t.ray.intersectsSphere(Ra)===!1)return;ud.copy(r).invert(),Pu.copy(t.ray).applyMatrix4(ud);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let m=f,b=d;m<b;m++){let g=c.getX(m);Ca.fromBufferAttribute(u,g),hd(Ca,g,l,r,t,e,this)}}else{let f=Math.max(0,s.start),d=Math.min(u.count,s.start+s.count);for(let m=f,b=d;m<b;m++)Ca.fromBufferAttribute(u,m),hd(Ca,m,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function hd(i,t,e,n,r,o,s){let a=Pu.distanceSqToPoint(i);if(a<e){let l=new Y;Pu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var ss=class extends hn{constructor(t=[],e=Wi,n,r,o,s,a,l,c,h){super(t,e,n,r,o,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vn=class extends hn{constructor(t,e,n,r,o,s,a,l,c){super(t,e,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var si=class extends hn{constructor(t,e,n=Wn,r,o,s,a=tn,l=tn,c,h=ei,u=1){if(h!==ei&&h!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,o,s,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},el=class extends si{constructor(t,e=Wn,n=Wi,r,o,s=tn,a=tn,l,c=ei){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,r,o,s,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},as=class extends hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},fo=class i extends Vt{constructor(t=1,e=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,s,o,0),m("z","y","x",1,-1,n,e,-t,s,o,1),m("x","z","y",1,1,t,n,e,r,s,2),m("x","z","y",1,-1,t,n,-e,r,s,3),m("x","y","z",1,-1,t,e,n,r,o,4),m("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function m(b,g,p,x,y,v,M,w,T,_,A){let E=v/T,S=M/_,P=v/2,U=M/2,L=w/2,R=T+1,C=_+1,F=0,D=0,N=new Y;for(let k=0;k<C;k++){let V=k*S-U;for(let X=0;X<R;X++){let z=X*E-P;N[b]=z*x,N[g]=V*y,N[p]=L,c.push(N.x,N.y,N.z),N[b]=0,N[g]=0,N[p]=w>0?1:-1,h.push(N.x,N.y,N.z),u.push(X/T),u.push(1-k/_),F+=1}}for(let k=0;k<_;k++)for(let V=0;V<T;V++){let X=f+V+R*k,z=f+V+R*(k+1),K=f+(V+1)+R*(k+1),J=f+(V+1)+R*k;l.push(X,z,J),l.push(z,K,J),D+=6}a.addGroup(d,D,A),d+=D,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ls=class i extends Vt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let o=[],s=[],a=[],l=[],c=new Y,h=new Jt;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),s.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(s[f]/t+1)/2,h.y=(s[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new It(s,3)),this.setAttribute("normal",new It(a,3)),this.setAttribute("uv",new It(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function vb(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,o=ap(i,0,r,e,!0),s=[];if(!o||o.next===o.prev)return s;let a,l,c;if(n&&(o=Sb(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<r;f+=e){let d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return cs(o,s,e,a,l,c,0),s}function ap(i,t,e,n,r){let o;if(r===Ob(i,t,e,n)>0)for(let s=t;s<e;s+=n)o=fd(s/n|0,i[s],i[s+1],o);else for(let s=e-n;s>=t;s-=n)o=fd(s/n|0,i[s],i[s+1],o);return o&&po(o,o.next)&&(hs(o),o=o.next),o}function mr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(po(e,e.next)||Ue(e.prev,e,e.next)===0)){if(hs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function cs(i,t,e,n,r,o,s){if(!i)return;!s&&o&&Cb(i,n,r,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?_b(i,n,r,o):yb(i)){t.push(l.i,i.i,c.i),hs(i),i=c.next,a=c.next;continue}if(i=c,i===a){s?s===1?(i=Mb(mr(i),t),cs(i,t,e,n,r,o,2)):s===2&&wb(i,t,e,n,r,o):cs(mr(i),t,e,n,r,o,1);break}}}function yb(i){let t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;let r=t.x,o=e.x,s=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,o,s),u=Math.min(a,l,c),f=Math.max(r,o,s),d=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&$o(r,a,o,l,s,c,m.x,m.y)&&Ue(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function _b(i,t,e,n){let r=i.prev,o=i,s=i.next;if(Ue(r,o,s)>=0)return!1;let a=r.x,l=o.x,c=s.x,h=r.y,u=o.y,f=s.y,d=Math.min(a,l,c),m=Math.min(h,u,f),b=Math.max(a,l,c),g=Math.max(h,u,f),p=Iu(d,m,t,e,n),x=Iu(b,g,t,e,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=x;){if(y.x>=d&&y.x<=b&&y.y>=m&&y.y<=g&&y!==r&&y!==s&&$o(a,h,l,u,c,f,y.x,y.y)&&Ue(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=b&&v.y>=m&&v.y<=g&&v!==r&&v!==s&&$o(a,h,l,u,c,f,v.x,v.y)&&Ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=b&&y.y>=m&&y.y<=g&&y!==r&&y!==s&&$o(a,h,l,u,c,f,y.x,y.y)&&Ue(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=b&&v.y>=m&&v.y<=g&&v!==r&&v!==s&&$o(a,h,l,u,c,f,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Mb(i,t){let e=i;do{let n=e.prev,r=e.next.next;!po(n,r)&&cp(n,e,e.next,r)&&us(n,r)&&us(r,n)&&(t.push(n.i,e.i,r.i),hs(e),hs(e.next),e=i=r),e=e.next}while(e!==i);return mr(e)}function wb(i,t,e,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&Lb(s,a)){let l=up(s,a);s=mr(s,s.next),l=mr(l,l.next),cs(s,t,e,n,r,o,0),cs(l,t,e,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function Sb(i,t,e,n){let r=[];for(let o=0,s=t.length;o<s;o++){let a=t[o]*n,l=o<s-1?t[o+1]*n:i.length,c=ap(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Ib(c))}r.sort(Tb);for(let o=0;o<r.length;o++)e=Eb(r[o],e);return e}function Tb(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Eb(i,t){let e=Ab(i,t);if(!e)return t;let n=up(e,i);return mr(n,n.next),mr(e,e.next)}function Ab(i,t){let e=t,n=i.x,r=i.y,o=-1/0,s;if(po(i,e))return e;do{if(po(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>o&&(o=u,s=e.x<e.next.x?e:e.next,u===n))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0;e=s;do{if(n>=e.x&&e.x>=l&&n!==e.x&&lp(r<c?n:o,r,l,c,r<c?o:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);us(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Rb(s,e)))&&(s=e,h=u)}e=e.next}while(e!==a);return s}function Rb(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function Cb(i,t,e,n){let r=i;do r.z===0&&(r.z=Iu(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Pb(r)}function Pb(i){let t,e=1;do{let n=i,r;i=null;let o=null;for(t=0;n;){t++;let s=n,a=0;for(let c=0;c<e&&(a++,s=s.nextZ,!!s);c++);let l=e;for(;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,l--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,e*=2}while(t>1);return i}function Iu(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ib(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function lp(i,t,e,n,r,o,s,a){return(r-s)*(t-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(e-s)*(t-a)&&(e-s)*(o-a)>=(r-s)*(n-a)}function $o(i,t,e,n,r,o,s,a){return!(i===s&&t===a)&&lp(i,t,e,n,r,o,s,a)}function Lb(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Fb(i,t)&&(us(i,t)&&us(t,i)&&Db(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||po(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function po(i,t){return i.x===t.x&&i.y===t.y}function cp(i,t,e,n){let r=Ia(Ue(i,t,e)),o=Ia(Ue(i,t,n)),s=Ia(Ue(e,n,i)),a=Ia(Ue(e,n,t));return!!(r!==o&&s!==a||r===0&&Pa(i,e,t)||o===0&&Pa(i,n,t)||s===0&&Pa(e,i,n)||a===0&&Pa(e,t,n))}function Pa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ia(i){return i>0?1:i<0?-1:0}function Fb(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&cp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function us(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function Db(i,t){let e=i,n=!1,r=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&r<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function up(i,t){let e=Lu(i.i,i.x,i.y),n=Lu(t.i,t.x,t.y),r=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function fd(i,t,e,n){let r=Lu(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function hs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Lu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ob(i,t,e,n){let r=0;for(let o=t,s=e-n;o<e;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}var Fu=class{static triangulate(t,e,n=2){return vb(t,e,n)}},fs=class i{static area(t){let e=t.length,n=0;for(let r=e-1,o=0;o<e;r=o++)n+=t[r].x*t[o].y-t[o].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],o=[];dd(t),pd(n,t);let s=t.length;e.forEach(dd);for(let l=0;l<e.length;l++)r.push(s),s+=e[l].length,pd(n,e[l]);let a=Fu.triangulate(n,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function dd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function pd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Gn=class i extends Vt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let o=t/2,s=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let x=p*f-s;for(let y=0;y<c;y++){let v=y*u-o;m.push(v,-x,0),b.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){let y=x+c*p,v=x+c*(p+1),M=x+1+c*(p+1),w=x+1+c*p;d.push(y,v,w),d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new It(m,3)),this.setAttribute("normal",new It(b,3)),this.setAttribute("uv",new It(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ds=class i extends Vt{constructor(t=.5,e=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/r,d=new Y,m=new Jt;for(let b=0;b<=r;b++){for(let g=0;g<=n;g++){let p=o+g/n*s;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let b=0;b<r;b++){let g=b*(n+1);for(let p=0;p<n;p++){let x=p+g,y=x,v=x+n+1,M=x+n+2,w=x+1;a.push(y,v,w),a.push(v,M,w)}}this.setIndex(a),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function vr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(md(r))r.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(md(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();t[e][n]=o}else t[e][n]=r.slice();else t[e][n]=r}}return t}function dn(i){let t={};for(let e=0;e<i.length;e++){let n=vr(i[e]);for(let r in n)t[r]=n[r]}return t}function md(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Nb(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ah(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var hp={clone:vr,merge:dn},Ub=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ub,this.fragmentShader=Bb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vr(t.uniforms),this.uniformsGroups=Nb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?e.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[r]={type:"m4",value:s.toArray()}:e.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new j().setHex(r.value);break;case"v2":this.uniforms[n].value=new Jt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Be().fromArray(r.value);break;case"m3":this.uniforms[n].value=new te().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},nl=class extends fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var il=class extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rl=class extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function to(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Tu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Vi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],o=e[n-1];n:{t:{let s;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=e[++n],t<r)break t}s=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=o,o=e[--n-1],t>=o)break t}s=n,n=0;break e}break n}for(;n<s;){let a=n+s>>>1;t<e[a]?s=a:n=a+1}if(r=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=t*r;for(let s=0;s!==r;++s)e[s]=n[o+s];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ol=class extends Vi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Au,endingEnd:Au}}intervalChanged_(t,e,n){let r=this.parameterPositions,o=t-2,s=t+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Ru:o=t,a=2*e-n;break;case Cu:o=r.length-2,a=e+r[o]-r[o+1];break;default:o=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ru:s=t,l=2*n-e;break;case Cu:s=1,l=n+r[1]-r[0];break;default:s=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=s*h}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(r-e),b=m*m,g=b*m,p=-f*g+2*f*b-f*m,x=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*m+1,y=(-1-d)*g+(1.5+d)*b+.5*m,v=d*g-d*b;for(let M=0;M!==a;++M)o[M]=p*s[h+M]+x*s[c+M]+y*s[l+M]+v*s[u+M];return o}},sl=class extends Vi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)o[f]=s[c+f]*u+s[l+f]*h;return o}},al=class extends Vi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},ll=class extends Vi{interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(r-e),b=1-m;for(let g=0;g!==a;++g)o[g]=s[c+g]*b+s[l+g]*m;return o}let f=a*2,d=t-1;for(let m=0;m!==a;++m){let b=s[c+m],g=s[l+m],p=d*f+m*2,x=u[p],y=u[p+1],v=t*f+m*2,M=h[v],w=h[v+1],T=zb(n,e,x,M,r);o[m]=fp(T,b,y,w,g)}return o}};function fp(i,t,e,n,r){let o=1-i;return o*o*o*t+3*o*o*i*e+3*o*i*i*n+i*i*i*r}function kb(i,t,e,n,r){let o=1-i;return 3*o*o*(e-t)+6*o*i*(n-e)+3*i*i*(r-n)}function zb(i,t,e,n,r){let o=(i-t)/(r-t);for(let s=0;s<8;s++){let a=fp(o,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=kb(o,t,e,n,r);if(Math.abs(l)<1e-10)break;o=Math.max(0,Math.min(1,o-a/l))}return o}var Sn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=to(e,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:to(t.times,Array),values:to(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Tu(t.settings)&&(n.settings={inTangents:to(t.settings.inTangents,Array),outTangents:to(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ll(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zo:e=this.InterpolantFactoryMethodDiscrete;break;case Xa:e=this.InterpolantFactoryMethodLinear;break;case Da:e=this.InterpolantFactoryMethodSmooth;break;case Eu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zo;case this.InterpolantFactoryMethodLinear:return Xa;case this.InterpolantFactoryMethodSmooth:return Da;case this.InterpolantFactoryMethodBezier:return Eu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Tu(this.settings)&&(gd(this.settings.inTangents,t),gd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<t;)++o;for(;s!==-1&&n[s]>e;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,o=n.length;o===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(s!==null&&s>l){$t("KeyframeTrack: Out of order keys.",this,a,l,s),t=!1;break}s=l}if(r!==void 0&&Qg(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Da,o=t.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let b=e[u+m];if(b!==e[f+m]||b!==e[d+m]){l=!0;break}}}if(l){if(a!==s){t[s]=t[a];let u=a*n,f=s*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++s}}if(o>0){t[s]=t[o];for(let a=o*n,l=s*n,c=0;c!==n;++c)e[l+c]=e[a+c];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Tu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function gd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Xa;var Gi=class extends Sn{constructor(t,e,n){super(t,e,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Zo;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends Sn{constructor(t,e,n,r){super(t,e,n,r)}};cl.prototype.ValueTypeName="color";var ul=class extends Sn{constructor(t,e,n,r){super(t,e,n,r)}};ul.prototype.ValueTypeName="number";var hl=class extends Vi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)ii.slerpFlat(o,0,s,c-a,s,c,l);return o}},ps=class extends Sn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new hl(this.times,this.values,this.getValueSize(),t)}};ps.prototype.ValueTypeName="quaternion";ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Sn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Zo;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends Sn{constructor(t,e,n,r){super(t,e,n,r)}};fl.prototype.ValueTypeName="vector";var Na={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(bd(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!bd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function bd(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var dl=class{constructor(t,e,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&r.onStart!==void 0&&r.onStart(h,s,a),o=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},dp=new dl,mo=class{constructor(t){this.manager=t!==void 0?t:dp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,o){n.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};mo.DEFAULT_MATERIAL_NAME="__DEFAULT";var eo=new WeakMap,pl=class extends mo{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let o=this,s=Na.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(s),o.manager.itemEnd(t)},0);else{let u=eo.get(s);u===void 0&&(u=[],eo.set(s,u)),u.push({onLoad:e,onError:r})}return s}let a=so("img");function l(){h(),e&&e(this);let u=eo.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}eo.delete(this),o.manager.itemEnd(t)}function c(u){h(),r&&r(u),Na.remove(`image:${t}`);let f=eo.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}eo.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Na.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}};var gr=class extends mo{constructor(t){super(t)}load(t,e,n,r){let o=new hn,s=new pl(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,r),o}};var La=new Y,Fa=new ii,Qn=new Y,ms=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(La,Fa,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Fa,Qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(La,Fa,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Fa,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ni=new Y,xd=new Jt,vd=new Jt,Qe=class extends ms{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(nu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ya*2*Math.atan(Math.tan(nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,xd,vd),e.subVectors(vd,xd)}setViewOffset(t,e,n,r,o,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(nu*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,e-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var In=class extends ms{constructor(t=-1,e=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-t,s=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var no=-90,io=1,ml=class extends bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qe(no,io,t,e);r.layers=this.layers,this.add(r);let o=new Qe(no,io,t,e);o.layers=this.layers,this.add(o);let s=new Qe(no,io,t,e);s.layers=this.layers,this.add(s);let a=new Qe(no,io,t,e);a.layers=this.layers,this.add(a);let l=new Qe(no,io,t,e);l.layers=this.layers,this.add(l);let c=new Qe(no,io,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,o,s,a,l]=e;for(let c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},gl=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var lh="\\[\\]\\.:\\/",Vb=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",Gb="[^"+lh.replace("\\.","")+"]",Hb=/((?:WC+[\/:])*)/.source.replace("WC",ch),Wb=/(WCOD+)?/.source.replace("WCOD",Gb),Xb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),Yb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),qb=new RegExp("^"+Hb+Wb+Xb+Yb+"$"),$b=["material","materials","bones","map"],Du=class{constructor(t,e,n){let r=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vb,"")}static parseTrackName(t){let e=qb.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);$b.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[r];if(s===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=Du;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var CS=new Float32Array(1);var yd=new Se,gs=class{constructor(t,e,n=0,r=1/0){this.ray=new pr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):$t("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yd),this}intersectObject(t,e=!0,n=[]){return Ou(t,this,n,e),n.sort(_d),n}intersectObjects(t,e=!0,n=[]){for(let r=0,o=t.length;r<o;r++)Ou(t[r],this,n,e);return n.sort(_d),n}};function _d(i,t){return i.distance-t.distance}function Ou(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)Ou(o[s],t,e,!0)}}var mh=class mh{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=r,this}};mh.prototype.isMatrix2=!0;var Nu=mh;function uh(i,t,e,n){let r=Zb(n);switch(e){case th:return i*t;case nh:return i*t/r.components*r.byteLength;case Sl:return i*t/r.components*r.byteLength;case qi:return i*t*2/r.components*r.byteLength;case Tl:return i*t*2/r.components*r.byteLength;case eh:return i*t*3/r.components*r.byteLength;case Fn:return i*t*4/r.components*r.byteLength;case El:return i*t*4/r.components*r.byteLength;case _s:case Ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ws:case Ss:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:case Pl:return Math.max(i,16)*Math.max(t,8)/4;case Al:case Cl:return Math.max(i,8)*Math.max(t,8)/2;case Il:case Ll:case Dl:case Ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fl:case Ts:case Nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ql:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jl:case jl:case Ql:return Math.ceil(i/4)*Math.ceil(t/4)*16;case tc:case ec:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Es:case nc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zb(i){switch(i){case En:case Ku:return{byteLength:1,components:1};case bo:case Ju:case Yn:return{byteLength:2,components:1};case Ml:case wl:return{byteLength:2,components:4};case Wn:case _l:case Xn:return{byteLength:4,components:1};case ju:case Qu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Op(){let i=null,t=!1,e=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),e(o,s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Jb(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],b=u[d];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++f,u[f]=b)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let b=u[d];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var jb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qb=`#ifdef USE_ALPHAHASH
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
#endif`,tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
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
#endif`,ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sx=`#ifdef USE_BATCHING
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
#endif`,ax=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ux=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hx=`#ifdef USE_IRIDESCENCE
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
#endif`,fx=`#ifdef USE_BUMPMAP
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
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_x=`#define PI 3.141592653589793
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
} // validated`,Mx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wx=`vec3 transformedNormal = objectNormal;
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
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Px=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Fx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kx=`#ifdef USE_GRADIENTMAP
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
}`,zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zx=`PhysicalMaterial material;
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
#endif`,Kx=`uniform sampler2D dfgLUT;
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
}`,Jx=`
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
#endif`,jx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ev=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ov=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lv=`#if defined( USE_POINTS_UV )
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
#endif`,cv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pv=`#ifdef USE_MORPHTARGETS
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
#endif`,mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_v=`#ifdef USE_NORMALMAP
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
#endif`,Mv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Av=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ov=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uv=`float getShadowMask() {
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
}`,Bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kv=`#ifdef USE_SKINNING
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
#endif`,zv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vv=`#ifdef USE_SKINNING
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
#endif`,Gv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yv=`#ifdef USE_TRANSMISSION
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
#endif`,qv=`#ifdef USE_TRANSMISSION
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qv=`uniform sampler2D t2D;
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
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ey=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`#include <common>
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
}`,oy=`#if DEPTH_PACKING == 3200
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
}`,sy=`#define DISTANCE
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
}`,ay=`#define DISTANCE
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
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`uniform float scale;
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
}`,hy=`uniform vec3 diffuse;
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
}`,fy=`#include <common>
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
}`,dy=`uniform vec3 diffuse;
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
}`,py=`#define LAMBERT
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
}`,my=`#define LAMBERT
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
}`,gy=`#define MATCAP
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
}`,by=`#define MATCAP
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
}`,xy=`#define NORMAL
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
}`,vy=`#define NORMAL
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
}`,yy=`#define PHONG
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
}`,_y=`#define PHONG
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
}`,My=`#define STANDARD
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
}`,wy=`#define STANDARD
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
}`,Sy=`#define TOON
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
}`,Ty=`#define TOON
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
}`,Ey=`uniform float size;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Ry=`#include <common>
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
}`,Cy=`uniform vec3 color;
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
}`,Py=`uniform float rotation;
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
}`,Iy=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:jb,alphahash_pars_fragment:Qb,alphamap_fragment:tx,alphamap_pars_fragment:ex,alphatest_fragment:nx,alphatest_pars_fragment:ix,aomap_fragment:rx,aomap_pars_fragment:ox,batching_pars_vertex:sx,batching_vertex:ax,begin_vertex:lx,beginnormal_vertex:cx,bsdfs:ux,iridescence_fragment:hx,bumpmap_pars_fragment:fx,clipping_planes_fragment:dx,clipping_planes_pars_fragment:px,clipping_planes_pars_vertex:mx,clipping_planes_vertex:gx,color_fragment:bx,color_pars_fragment:xx,color_pars_vertex:vx,color_vertex:yx,common:_x,cube_uv_reflection_fragment:Mx,defaultnormal_vertex:wx,displacementmap_pars_vertex:Sx,displacementmap_vertex:Tx,emissivemap_fragment:Ex,emissivemap_pars_fragment:Ax,colorspace_fragment:Rx,colorspace_pars_fragment:Cx,envmap_fragment:Px,envmap_common_pars_fragment:Ix,envmap_pars_fragment:Lx,envmap_pars_vertex:Fx,envmap_physical_pars_fragment:Wx,envmap_vertex:Dx,fog_vertex:Ox,fog_pars_vertex:Nx,fog_fragment:Ux,fog_pars_fragment:Bx,gradientmap_pars_fragment:kx,lightmap_pars_fragment:zx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Hx,lights_toon_fragment:Xx,lights_toon_pars_fragment:Yx,lights_phong_fragment:qx,lights_phong_pars_fragment:$x,lights_physical_fragment:Zx,lights_physical_pars_fragment:Kx,lights_fragment_begin:Jx,lights_fragment_maps:jx,lights_fragment_end:Qx,lightprobes_pars_fragment:tv,logdepthbuf_fragment:ev,logdepthbuf_pars_fragment:nv,logdepthbuf_pars_vertex:iv,logdepthbuf_vertex:rv,map_fragment:ov,map_pars_fragment:sv,map_particle_fragment:av,map_particle_pars_fragment:lv,metalnessmap_fragment:cv,metalnessmap_pars_fragment:uv,morphinstance_vertex:hv,morphcolor_vertex:fv,morphnormal_vertex:dv,morphtarget_pars_vertex:pv,morphtarget_vertex:mv,normal_fragment_begin:gv,normal_fragment_maps:bv,normal_pars_fragment:xv,normal_pars_vertex:vv,normal_vertex:yv,normalmap_pars_fragment:_v,clearcoat_normal_fragment_begin:Mv,clearcoat_normal_fragment_maps:wv,clearcoat_pars_fragment:Sv,iridescence_pars_fragment:Tv,opaque_fragment:Ev,packing:Av,premultiplied_alpha_fragment:Rv,project_vertex:Cv,dithering_fragment:Pv,dithering_pars_fragment:Iv,roughnessmap_fragment:Lv,roughnessmap_pars_fragment:Fv,shadowmap_pars_fragment:Dv,shadowmap_pars_vertex:Ov,shadowmap_vertex:Nv,shadowmask_pars_fragment:Uv,skinbase_vertex:Bv,skinning_pars_vertex:kv,skinning_vertex:zv,skinnormal_vertex:Vv,specularmap_fragment:Gv,specularmap_pars_fragment:Hv,tonemapping_fragment:Wv,tonemapping_pars_fragment:Xv,transmission_fragment:Yv,transmission_pars_fragment:qv,uv_pars_fragment:$v,uv_pars_vertex:Zv,uv_vertex:Kv,worldpos_vertex:Jv,background_vert:jv,background_frag:Qv,backgroundCube_vert:ty,backgroundCube_frag:ey,cube_vert:ny,cube_frag:iy,depth_vert:ry,depth_frag:oy,distance_vert:sy,distance_frag:ay,equirect_vert:ly,equirect_frag:cy,linedashed_vert:uy,linedashed_frag:hy,meshbasic_vert:fy,meshbasic_frag:dy,meshlambert_vert:py,meshlambert_frag:my,meshmatcap_vert:gy,meshmatcap_frag:by,meshnormal_vert:xy,meshnormal_frag:vy,meshphong_vert:yy,meshphong_frag:_y,meshphysical_vert:My,meshphysical_frag:wy,meshtoon_vert:Sy,meshtoon_frag:Ty,points_vert:Ey,points_frag:Ay,shadow_vert:Ry,shadow_frag:Cy,sprite_vert:Py,sprite_frag:Iy},Tt={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},ci={basic:{uniforms:dn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:dn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new j(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:dn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:dn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:dn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new j(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:dn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:dn([Tt.points,Tt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:dn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:dn([Tt.common,Tt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:dn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:dn([Tt.sprite,Tt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:dn([Tt.common,Tt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:dn([Tt.lights,Tt.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};ci.physical={uniforms:dn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var oc={r:0,b:0,g:0},Ly=new Se,Np=new te;Np.set(-1,0,0,0,1,0,0,0,1);function Fy(i,t,e,n,r,o){let s=new j(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function d(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){let v=x.backgroundBlurriness>0;y=t.get(y,v)}return y}function m(x){let y=!1,v=d(x);v===null?g(s,a):v&&v.isColor&&(g(v,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,y){let v=d(y);v&&(v.isCubeTexture||v.mapping===vs)?(c===void 0&&(c=new At(new fo(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:vr(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ly.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Np),c.material.toneMapped=ce.getTransfer(v.colorSpace)!==ye,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new At(new Gn(2,2),new fn({name:"BackgroundMaterial",uniforms:vr(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ce.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,y){x.getRGB(oc,ah(i)),e.buffers.color.setClear(oc.r,oc.g,oc.b,y,o)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,y=1){s.set(x),a=y,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(s,a)},render:m,addToRenderList:b,dispose:p}}function Dy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),o=r,s=!1;function a(S,P,U,L,R){let C=!1,F=u(S,L,U,P);o!==F&&(o=F,c(o.object)),C=d(S,L,U,R),C&&m(S,L,U,R),R!==null&&t.update(R,i.ELEMENT_ARRAY_BUFFER),(C||s)&&(s=!1,v(S,P,U,L),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(R).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,P,U,L){let R=L.wireframe===!0,C=n[P.id];C===void 0&&(C={},n[P.id]=C);let F=S.isInstancedMesh===!0?S.id:0,D=C[F];D===void 0&&(D={},C[F]=D);let N=D[U.id];N===void 0&&(N={},D[U.id]=N);let k=N[R];return k===void 0&&(k=f(l()),N[R]=k),k}function f(S){let P=[],U=[],L=[];for(let R=0;R<e;R++)P[R]=0,U[R]=0,L[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:L,object:S,attributes:{},index:null}}function d(S,P,U,L){let R=o.attributes,C=P.attributes,F=0,D=U.getAttributes();for(let N in D)if(D[N].location>=0){let V=R[N],X=C[N];if(X===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(X=S.instanceColor)),V===void 0||V.attribute!==X||X&&V.data!==X.data)return!0;F++}return o.attributesNum!==F||o.index!==L}function m(S,P,U,L){let R={},C=P.attributes,F=0,D=U.getAttributes();for(let N in D)if(D[N].location>=0){let V=C[N];V===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(V=S.instanceColor));let X={};X.attribute=V,V&&V.data&&(X.data=V.data),R[N]=X,F++}o.attributes=R,o.attributesNum=F,o.index=L}function b(){let S=o.newAttributes;for(let P=0,U=S.length;P<U;P++)S[P]=0}function g(S){p(S,0)}function p(S,P){let U=o.newAttributes,L=o.enabledAttributes,R=o.attributeDivisors;U[S]=1,L[S]===0&&(i.enableVertexAttribArray(S),L[S]=1),R[S]!==P&&(i.vertexAttribDivisor(S,P),R[S]=P)}function x(){let S=o.newAttributes,P=o.enabledAttributes;for(let U=0,L=P.length;U<L;U++)P[U]!==S[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function y(S,P,U,L,R,C,F){F===!0?i.vertexAttribIPointer(S,P,U,R,C):i.vertexAttribPointer(S,P,U,L,R,C)}function v(S,P,U,L){b();let R=L.attributes,C=U.getAttributes(),F=P.defaultAttributeValues;for(let D in C){let N=C[D];if(N.location>=0){let k=R[D];if(k===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(k=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(k=S.instanceColor)),k!==void 0){let V=k.normalized,X=k.itemSize,z=t.get(k);if(z===void 0)continue;let K=z.buffer,J=z.type,at=z.bytesPerElement,H=J===i.INT||J===i.UNSIGNED_INT||k.gpuType===_l;if(k.isInterleavedBufferAttribute){let W=k.data,tt=W.stride,st=k.offset;if(W.isInstancedInterleavedBuffer){for(let it=0;it<N.locationSize;it++)p(N.location+it,W.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let it=0;it<N.locationSize;it++)g(N.location+it);i.bindBuffer(i.ARRAY_BUFFER,K);for(let it=0;it<N.locationSize;it++)y(N.location+it,X/N.locationSize,J,V,tt*at,(st+X/N.locationSize*it)*at,H)}else{if(k.isInstancedBufferAttribute){for(let W=0;W<N.locationSize;W++)p(N.location+W,k.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let W=0;W<N.locationSize;W++)g(N.location+W);i.bindBuffer(i.ARRAY_BUFFER,K);for(let W=0;W<N.locationSize;W++)y(N.location+W,X/N.locationSize,J,V,X*at,X/N.locationSize*W*at,H)}}else if(F!==void 0){let V=F[D];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(N.location,V);break;case 3:i.vertexAttrib3fv(N.location,V);break;case 4:i.vertexAttrib4fv(N.location,V);break;default:i.vertexAttrib1fv(N.location,V)}}}}x()}function M(){A();for(let S in n){let P=n[S];for(let U in P){let L=P[U];for(let R in L){let C=L[R];for(let F in C)h(C[F].object),delete C[F];delete L[R]}}delete n[S]}}function w(S){if(n[S.id]===void 0)return;let P=n[S.id];for(let U in P){let L=P[U];for(let R in L){let C=L[R];for(let F in C)h(C[F].object),delete C[F];delete L[R]}}delete n[S.id]}function T(S){for(let P in n){let U=n[P];for(let L in U){let R=U[L];if(R[S.id]===void 0)continue;let C=R[S.id];for(let F in C)h(C[F].object),delete C[F];delete R[S.id]}}}function _(S){for(let P in n){let U=n[P],L=S.isInstancedMesh===!0?S.id:0,R=U[L];if(R!==void 0){for(let C in R){let F=R[C];for(let D in F)h(F[D].object),delete F[D];delete R[C]}delete U[L],Object.keys(U).length===0&&delete n[P]}}}function A(){E(),s=!0,o!==r&&(o=r,c(o.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:E,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function Oy(i,t,e){let n;function r(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function s(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function Ny(i,t,e,n){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(T){return!(T!==Fn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let _=T===Yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==En&&T!==Xn&&!_&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,maxSamples:M,samples:w}}function Uy(i){let t=this,e=null,n=0,r=!1,o=!1,s=new zn,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!r||m===null||m.length===0||o&&!g)o?h(null):c();else{let x=o?0:n,y=x*4,v=p.clippingState||null;l.value=v,v=h(m,f,y,d);for(let M=0;M!==y;++M)v[M]=e[M];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=l.value,m!==!0||g===null){let p=d+b*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=d;y!==b;++y,v+=4)s.copy(u[y]).applyMatrix4(x,a),s.normal.toArray(g,v),g[v+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var yo=4,By=6,ky=20,zy=256,As=new In,pp=new j,gh=null,bh=0,xh=0,vh=!1,Vy=new Y,yr=new Y,ac=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,o={}){let{size:s=256,position:a=Vy}=o;gh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(gh,bh,xh),this._renderer.xr.enabled=vh,t.scissorTest=!1,vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Yn,format:Fn,colorSpace:Ko,depthBuffer:!1},r=mp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mp(t,e,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gy(o)),this._blurMaterial=Wy(o,t,e),this._ggxMaterial=Hy(o,t,e)}return r}_compileMaterial(t){let e=new At(new Vt,t);this._renderer.compile(e,As)}_sceneToCubeUV(t,e,n,r,o){let l=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(pp),u.toneMapping=Hn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new fo,new Xt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,p=!1,x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,p=!0):(g.color.copy(pp),p=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[y],o.y,o.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[y],o.z)):(l.up.set(0,c[y],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[y]));let M=this._cubeSize;vo(r,v*M,y>2?M:0,M,M),u.setRenderTarget(r),p&&u.render(b,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Wi||t.mapping===xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gp());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=t;let l=this._cubeSize;vo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(s,As)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:m}=this,b=this._sizeLods[n],g=3*b*(n>m-yo?n-m+yo:0),p=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,vo(o,g,p,3*b,2*b),r.setRenderTarget(o),r.render(a,As),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=m-n,vo(t,g,p,3*b,2*b),r.setRenderTarget(t),r.render(a,As)}_blur(t,e,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,s),this._blurPass(o,t,n,n,s)}_blurPass(t,e,n,r,o){let s=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-yo?r-this._lodMax+yo:0),f=4*(this._cubeSize-h);vo(e,u,f,3*h,2*h),s.setRenderTarget(e),s.render(l,As)}};function Gy(i){let t=[],e=[],n=i,r=i-yo+1+By;for(let o=0;o<r;o++){let s=Math.pow(2,n);t.push(s);let a=1/(s-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,m=new Float32Array(d*f*u),b=new Float32Array(d*f*u);for(let p=0;p<u;p++){let x=p%3*2/3-1,y=p>2?0:-1,v=[x,y,0,x+2/3,y,0,x+2/3,y+1,0,x,y,0,x+2/3,y+1,0,x,y+1,0];m.set(v,d*f*p);for(let M=0;M<f;M++){let w=h[M*2]*2-1,T=h[M*2+1]*2-1;p===0?yr.set(1,T,w):p===1?yr.set(-w,1,-T):p===2?yr.set(-w,T,1):p===3?yr.set(-1,T,-w):p===4?yr.set(-w,-1,T):yr.set(w,T,-1),yr.toArray(b,(p*f+M)*d)}}let g=new Vt;g.setAttribute("position",new wn(m,d)),g.setAttribute("outputDirection",new wn(b,d)),e.push(new At(g,null)),n>yo&&n--}return{lodMeshes:e,sizeLods:t}}function mp(i,t,e){let n=new Ye(i,t,e);return n.texture.mapping=vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Hy(i,t,e){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Wy(i,t,e){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:ky,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function gp(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function bp(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function cc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var lc=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ss(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fo(5,5,5),o=new fn({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Ln});o.uniforms.tEquirect.value=e;let s=new At(r,o),a=e.minFilter;return e.minFilter===Xi&&(e.minFilter=Xe),new ml(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let o=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,r);t.setRenderTarget(o)}};function Xy(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?s(f):o(f)}function o(f){if(f&&f.isTexture){let d=f.mapping;if(d===xl||d===vl)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let b=new lc(m.height);return b.fromEquirectangularTexture(i,f),t.set(f,b),f.addEventListener("dispose",c),a(b.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let d=f.mapping,m=d===xl||d===vl,b=d===Wi||d===xr;if(m||b){let g=e.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new ac(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return m&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new ac(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===xl?f.mapping=Wi:d===vl&&(f.mapping=xr),f}function l(f){let d=0,m=6;for(let b=0;b<m;b++)f[b]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Yy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&hr("WebGLRenderer: "+n+" extension not supported."),r}}}function qy(i,t,e,n){let r={},o=new WeakMap;function s(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",s),delete r[f.id];let d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,m=u.attributes.position,b=0;if(m===void 0)return;if(d!==null){let x=d.array;b=d.version;for(let y=0,v=x.length;y<v;y+=3){let M=x[y+0],w=x[y+1],T=x[y+2];f.push(M,w,w,T,T,M)}}else{let x=m.array;b=m.version;for(let y=0,v=x.length/3-1;y<v;y+=3){let M=y+0,w=y+1,T=y+2;f.push(M,w,w,T,T,M)}}let g=new(m.count>=65535?dr:ns)(f,1);g.version=b;let p=o.get(u);p&&t.remove(p),o.set(u,g)}function h(u){let f=o.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function $y(i,t,e){let n;function r(u){n=u}let o,s;function a(u){o=u.type,s=u.bytesPerElement}function l(u,f){i.drawElements(n,f,o,u*s),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,o,u*s,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,d);let b=0;for(let g=0;g<d;g++)b+=f[g];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Zy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:$t("WebGLInfo: Unknown draw mode:",s);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Ky(i,t,e){let n=new WeakMap,r=new Be;function o(s,a,l){let c=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let A=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],y=0;d===!0&&(y=1),m===!0&&(y=2),b===!0&&(y=3);let v=a.attributes.position.count*y,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*M*4*u),T=new ts(w,v,M,u);T.type=Xn,T.needsUpdate=!0;let _=y*4;for(let E=0;E<u;E++){let S=g[E],P=p[E],U=x[E],L=v*M*4*E;for(let R=0;R<S.count;R++){let C=R*_;d===!0&&(r.fromBufferAttribute(S,R),w[L+C+0]=r.x,w[L+C+1]=r.y,w[L+C+2]=r.z,w[L+C+3]=0),m===!0&&(r.fromBufferAttribute(P,R),w[L+C+4]=r.x,w[L+C+5]=r.y,w[L+C+6]=r.z,w[L+C+7]=0),b===!0&&(r.fromBufferAttribute(U,R),w[L+C+8]=r.x,w[L+C+9]=r.y,w[L+C+10]=r.z,w[L+C+11]=U.itemSize===4?r.w:1)}}f={count:u,texture:T,size:new Jt(v,M)},n.set(a,f),a.addEventListener("dispose",A)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function Jy(i,t,e,n,r){let o=new WeakMap;function s(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(o.get(f)!==h&&(t.update(f),o.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return f}function a(){o=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:a}}var jy={[Gu]:"LINEAR_TONE_MAPPING",[Hu]:"REINHARD_TONE_MAPPING",[Wu]:"CINEON_TONE_MAPPING",[Xu]:"ACES_FILMIC_TONE_MAPPING",[qu]:"AGX_TONE_MAPPING",[$u]:"NEUTRAL_TONE_MAPPING",[Yu]:"CUSTOM_TONE_MAPPING"};function Qy(i,t,e,n,r,o){let s=new Ye(t,e,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Vt;c.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new It([0,2,0,0,2,0],2));let h=new nl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new At(c,h),f=new In(-1,1,1,-1,0,1),d=null,m=null,b=!1,g,p=null,x=[],y=!1;this.setSize=function(v,M){s.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let w=0;w<x.length;w++){let T=x[w];T.setSize&&T.setSize(v,M)}},this.setEffects=function(v){x=v,y=x.length>0&&x[0].isRenderPass===!0;let M=s.width,w=s.height;x.length>0&&a===null&&(a=new Ye(M,w,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new Ye(M,w,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<x.length;T++){let _=x[T];_.setSize&&_.setSize(M,w)}},this.begin=function(v,M){if(b||v.toneMapping===Hn&&x.length===0)return!1;if(p=M,M!==null){let w=M.width,T=M.height;(s.width!==w||s.height!==T)&&this.setSize(w,T)}return y===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=Hn,!0},this.hasRenderPass=function(){return y},this.end=function(v,M){v.toneMapping=g,b=!0;let w=s,T=a;for(let _=0;_<x.length;_++){let A=x[_];A.enabled!==!1&&(A.render(v,T,w,M),A.needsSwap!==!1&&(w=T,T=T===a?l:a))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,h.defines={},ce.getTransfer(d)===ye&&(h.defines.SRGB_TRANSFER="");let _=jy[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(p),v.render(u,f),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Up=new hn,Mh=new si(1,1),Bp=new ts,kp=new Za,zp=new ss,xp=[],vp=[],yp=new Float32Array(16),_p=new Float32Array(9),Mp=new Float32Array(4);function Mo(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,o=xp[r];if(o===void 0&&(o=new Float32Array(r),xp[r]=o),t!==0){n.toArray(o,0);for(let s=1,a=0;s!==t;++s)a+=e,i[s].toArray(o,a)}return o}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function uc(i,t){let e=vp[t];e===void 0&&(e=new Int32Array(t),vp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function t1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function e1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function n1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function i1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function r1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;Mp.set(n),i.uniformMatrix2fv(this.addr,!1,Mp),Ke(e,n)}}function o1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;_p.set(n),i.uniformMatrix3fv(this.addr,!1,_p),Ke(e,n)}}function s1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;yp.set(n),i.uniformMatrix4fv(this.addr,!1,yp),Ke(e,n)}}function a1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function l1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function c1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function u1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function h1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function f1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function d1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function p1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function m1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Mh.compareFunction=e.isReversedDepthBuffer()?rc:ic,o=Mh):o=Up,e.setTexture2D(t||o,r)}function g1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||kp,r)}function b1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||zp,r)}function x1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Bp,r)}function v1(i){switch(i){case 5126:return t1;case 35664:return e1;case 35665:return n1;case 35666:return i1;case 35674:return r1;case 35675:return o1;case 35676:return s1;case 5124:case 35670:return a1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return u1;case 5125:return h1;case 36294:return f1;case 36295:return d1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return x1}}function y1(i,t){i.uniform1fv(this.addr,t)}function _1(i,t){let e=Mo(t,this.size,2);i.uniform2fv(this.addr,e)}function M1(i,t){let e=Mo(t,this.size,3);i.uniform3fv(this.addr,e)}function w1(i,t){let e=Mo(t,this.size,4);i.uniform4fv(this.addr,e)}function S1(i,t){let e=Mo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function T1(i,t){let e=Mo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function E1(i,t){let e=Mo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function A1(i,t){i.uniform1iv(this.addr,t)}function R1(i,t){i.uniform2iv(this.addr,t)}function C1(i,t){i.uniform3iv(this.addr,t)}function P1(i,t){i.uniform4iv(this.addr,t)}function I1(i,t){i.uniform1uiv(this.addr,t)}function L1(i,t){i.uniform2uiv(this.addr,t)}function F1(i,t){i.uniform3uiv(this.addr,t)}function D1(i,t){i.uniform4uiv(this.addr,t)}function O1(i,t,e){let n=this.cache,r=t.length,o=uc(e,r);Ze(n,o)||(i.uniform1iv(this.addr,o),Ke(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=Mh:s=Up;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||s,o[a])}function N1(i,t,e){let n=this.cache,r=t.length,o=uc(e,r);Ze(n,o)||(i.uniform1iv(this.addr,o),Ke(n,o));for(let s=0;s!==r;++s)e.setTexture3D(t[s]||kp,o[s])}function U1(i,t,e){let n=this.cache,r=t.length,o=uc(e,r);Ze(n,o)||(i.uniform1iv(this.addr,o),Ke(n,o));for(let s=0;s!==r;++s)e.setTextureCube(t[s]||zp,o[s])}function B1(i,t,e){let n=this.cache,r=t.length,o=uc(e,r);Ze(n,o)||(i.uniform1iv(this.addr,o),Ke(n,o));for(let s=0;s!==r;++s)e.setTexture2DArray(t[s]||Bp,o[s])}function k1(i){switch(i){case 5126:return y1;case 35664:return _1;case 35665:return M1;case 35666:return w1;case 35674:return S1;case 35675:return T1;case 35676:return E1;case 5124:case 35670:return A1;case 35667:case 35671:return R1;case 35668:case 35672:return C1;case 35669:case 35673:return P1;case 5125:return I1;case 36294:return L1;case 36295:return F1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return O1;case 35679:case 36299:case 36307:return N1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return B1}}var wh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=v1(e.type)}},Sh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k1(e.type)}},Th=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(t,e[a.id],n)}}},yh=/(\w+)(\])?(\[|\.)?/g;function wp(i,t){i.seq.push(t),i.map[t.id]=t}function z1(i,t,e){let n=i.name,r=n.length;for(yh.lastIndex=0;;){let o=yh.exec(n),s=yh.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){wp(e,c===void 0?new wh(a,i,t):new Sh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Th(a),wp(e,u)),e=u}}}var _o=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=t.getActiveUniform(e,s),l=t.getUniformLocation(e,a.name);z1(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,n,r){let o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,s=e.length;o!==s;++o){let a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,o=t.length;r!==o;++r){let s=t[r];s.id in e&&n.push(s)}return n}};function Sp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var V1=37297,G1=0;function H1(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return n.join(`
`)}var Tp=new te;function W1(i){ce._getMatrix(Tp,ce.workingColorSpace,i);let t=`mat3( ${Tp.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case Jo:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ep(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+o+`

`+H1(i.getShaderSource(t),a)}else return o}function X1(i,t){let e=W1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Y1={[Gu]:"Linear",[Hu]:"Reinhard",[Wu]:"Cineon",[Xu]:"ACESFilmic",[qu]:"AgX",[$u]:"Neutral",[Yu]:"Custom"};function q1(i,t){let e=Y1[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sc=new Y;function $1(){ce.getLuminanceCoefficients(sc);let i=sc.x.toFixed(4),t=sc.y.toFixed(4),e=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function K1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function J1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(t,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[s]={type:o.type,location:i.getAttribLocation(t,s),locationSize:a}}return e}function Cs(i){return i!==""}function Ap(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var j1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(i){return i.replace(j1,t_)}var Q1=new Map;function t_(i,t){let e=ae[t];if(e===void 0){let n=Q1.get(t);if(n!==void 0)e=ae[n],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Eh(e)}var e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cp(i){return i.replace(e_,n_)}function n_(i,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Pp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var i_={[bs]:"SHADOWMAP_TYPE_PCF",[go]:"SHADOWMAP_TYPE_VSM"};function r_(i){return i_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var o_={[Wi]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE_UV"};function s_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":o_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var a_={[xr]:"ENVMAP_MODE_REFRACTION"};function l_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":a_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var c_={[Vu]:"ENVMAP_BLENDING_MULTIPLY",[Hd]:"ENVMAP_BLENDING_MIX",[Wd]:"ENVMAP_BLENDING_ADD"};function u_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":c_[i.combine]||"ENVMAP_BLENDING_NONE"}function h_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function f_(i,t,e,n){let r=i.getContext(),o=e.defines,s=e.vertexShader,a=e.fragmentShader,l=r_(e),c=s_(e),h=l_(e),u=u_(e),f=h_(e),d=Z1(e),m=K1(o),b=r.createProgram(),g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Cs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Cs).join(`
`),p.length>0&&(p+=`
`)):(g=[Pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),p=[Pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?ae.tonemapping_pars_fragment:"",e.toneMapping!==Hn?q1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,X1("linearToOutputTexel",e.outputColorSpace),$1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),s=Eh(s),s=Ap(s,e),s=Rp(s,e),a=Eh(a),a=Ap(a,e),a=Rp(a,e),s=Cp(s),a=Cp(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=x+g+s,v=x+p+a,M=Sp(r,r.VERTEX_SHADER,y),w=Sp(r,r.FRAGMENT_SHADER,v);r.attachShader(b,M),r.attachShader(b,w),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function T(S){if(i.debug.checkShaderErrors){let P=r.getProgramInfoLog(b)||"",U=r.getShaderInfoLog(M)||"",L=r.getShaderInfoLog(w)||"",R=P.trim(),C=U.trim(),F=L.trim(),D=!0,N=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,M,w);else{let k=Ep(r,M,"vertex"),V=Ep(r,w,"fragment");$t("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+R+`
`+k+`
`+V)}else R!==""?qt("WebGLProgram: Program Info Log:",R):(C===""||F==="")&&(N=!1);N&&(S.diagnostics={runnable:D,programLog:R,vertexShader:{log:C,prefix:g},fragmentShader:{log:F,prefix:p}})}r.deleteShader(M),r.deleteShader(w),_=new _o(r,b),A=J1(r,b)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(b,V1)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=G1++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=w,this}var d_=0,Ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Rh(t),e.set(t,n)),n}},Rh=class{constructor(t){this.id=d_++,this.code=t,this.usedTimes=0}};function p_(i){return i===qi||i===Ts||i===Es}function m_(i,t,e,n,r,o){let s=new co,a=new Ah,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,A,E,S,P,U){let L=S.fog,R=P.geometry,C=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?S.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,D=t.get(_.envMap||C,F),N=D&&D.mapping===vs?D.image.height:null,k=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&qt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let V=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,X=V!==void 0?V.length:0,z=0;R.morphAttributes.position!==void 0&&(z=1),R.morphAttributes.normal!==void 0&&(z=2),R.morphAttributes.color!==void 0&&(z=3);let K,J,at,H;if(k){let Ae=ci[k];K=Ae.vertexShader,J=Ae.fragmentShader}else{K=_.vertexShader,J=_.fragmentShader;let Ae=a.getVertexShaderStage(_),xe=a.getFragmentShaderStage(_);a.update(_,Ae,xe),at=Ae.id,H=xe.id}let W=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),st=P.isInstancedMesh===!0,it=P.isBatchedMesh===!0,ht=!!_.map,gt=!!_.matcap,lt=!!D,dt=!!_.aoMap,Dt=!!_.lightMap,Rt=!!_.bumpMap&&_.wireframe===!1,ne=!!_.normalMap,pe=!!_.displacementMap,de=!!_.emissiveMap,_e=!!_.metalnessMap,Oe=!!_.roughnessMap,$=_.anisotropy>0,Ge=_.clearcoat>0,ge=_.dispersion>0,G=_.retroreflectivity>0,I=_.iridescence>0,Q=_.sheen>0,rt=_.transmission>0,ct=$&&!!_.anisotropyMap,xt=Ge&&!!_.clearcoatMap,vt=Ge&&!!_.clearcoatNormalMap,ut=Ge&&!!_.clearcoatRoughnessMap,pt=I&&!!_.iridescenceMap,yt=I&&!!_.iridescenceThicknessMap,Gt=Q&&!!_.sheenColorMap,St=Q&&!!_.sheenRoughnessMap,_t=!!_.specularMap,Ht=!!_.specularColorMap,Yt=!!_.specularIntensityMap,oe=rt&&!!_.transmissionMap,Z=rt&&!!_.thicknessMap,Mt=!!_.gradientMap,ft=!!_.alphaMap,wt=_.alphaTest>0,Pt=!!_.alphaHash,bt=!!_.extensions,Wt=Hn;_.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Wt=i.toneMapping);let Bt={shaderID:k,shaderType:_.type,shaderName:_.name,vertexShader:K,fragmentShader:J,defines:_.defines,customVertexShaderID:at,customFragmentShaderID:H,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:it,batchingColor:it&&P._colorsTexture!==null,instancing:st,instancingColor:st&&P.instanceColor!==null,instancingMorph:st&&P.morphTexture!==null,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ht,matcap:gt,envMap:lt,envMapMode:lt&&D.mapping,envMapCubeUVHeight:N,aoMap:dt,lightMap:Dt,bumpMap:Rt,normalMap:ne,displacementMap:pe,emissiveMap:de,normalMapObjectSpace:ne&&_.normalMapType===qd,normalMapTangentSpace:ne&&_.normalMapType===ih,packedNormalMap:ne&&_.normalMapType===ih&&p_(_.normalMap.format),metalnessMap:_e,roughnessMap:Oe,anisotropy:$,anisotropyMap:ct,clearcoat:Ge,clearcoatMap:xt,clearcoatNormalMap:vt,clearcoatRoughnessMap:ut,dispersion:ge,retroreflection:G,iridescence:I,iridescenceMap:pt,iridescenceThicknessMap:yt,sheen:Q,sheenColorMap:Gt,sheenRoughnessMap:St,specularMap:_t,specularColorMap:Ht,specularIntensityMap:Yt,transmission:rt,transmissionMap:oe,thicknessMap:Z,gradientMap:Mt,opaque:_.transparent===!1&&_.blending===Tn&&_.alphaToCoverage===!1,alphaMap:ft,alphaTest:wt,alphaHash:Pt,combine:_.combine,mapUv:ht&&m(_.map.channel),aoMapUv:dt&&m(_.aoMap.channel),lightMapUv:Dt&&m(_.lightMap.channel),bumpMapUv:Rt&&m(_.bumpMap.channel),normalMapUv:ne&&m(_.normalMap.channel),displacementMapUv:pe&&m(_.displacementMap.channel),emissiveMapUv:de&&m(_.emissiveMap.channel),metalnessMapUv:_e&&m(_.metalnessMap.channel),roughnessMapUv:Oe&&m(_.roughnessMap.channel),anisotropyMapUv:ct&&m(_.anisotropyMap.channel),clearcoatMapUv:xt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:vt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:St&&m(_.sheenRoughnessMap.channel),specularMapUv:_t&&m(_.specularMap.channel),specularColorMapUv:Ht&&m(_.specularColorMap.channel),specularIntensityMapUv:Yt&&m(_.specularIntensityMap.channel),transmissionMapUv:oe&&m(_.transmissionMap.channel),thicknessMapUv:Z&&m(_.thicknessMap.channel),alphaMapUv:ft&&m(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(ne||$),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!R.attributes.uv&&(ht||ft),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&ne===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:tt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:z,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:ht&&_.map.isVideoTexture===!0&&ce.getTransfer(_.map.colorSpace)===ye,decodeVideoTextureEmissive:de&&_.emissiveMap.isVideoTexture===!0&&ce.getTransfer(_.emissiveMap.colorSpace)===ye,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ie,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:bt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&_.extensions.multiDraw===!0||it)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function g(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let E in _.defines)A.push(E),A.push(_.defines[E]);return _.isRawShaderMaterial===!1&&(p(A,_),x(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function x(_,A){s.disableAll(),A.instancing&&s.enable(0),A.instancingColor&&s.enable(1),A.instancingMorph&&s.enable(2),A.matcap&&s.enable(3),A.envMap&&s.enable(4),A.normalMapObjectSpace&&s.enable(5),A.normalMapTangentSpace&&s.enable(6),A.clearcoat&&s.enable(7),A.iridescence&&s.enable(8),A.alphaTest&&s.enable(9),A.vertexColors&&s.enable(10),A.vertexAlphas&&s.enable(11),A.vertexUv1s&&s.enable(12),A.vertexUv2s&&s.enable(13),A.vertexUv3s&&s.enable(14),A.vertexTangents&&s.enable(15),A.anisotropy&&s.enable(16),A.alphaHash&&s.enable(17),A.batching&&s.enable(18),A.dispersion&&s.enable(19),A.retroreflection&&s.enable(24),A.batchingColor&&s.enable(20),A.gradientMap&&s.enable(21),A.packedNormalMap&&s.enable(22),A.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.reversedDepthBuffer&&s.enable(4),A.skinning&&s.enable(5),A.morphTargets&&s.enable(6),A.morphNormals&&s.enable(7),A.morphColors&&s.enable(8),A.premultipliedAlpha&&s.enable(9),A.shadowMapEnabled&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),A.decodeVideoTextureEmissive&&s.enable(20),A.alphaToCoverage&&s.enable(21),A.numLightProbeGrids>0&&s.enable(22),A.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function y(_){let A=d[_.type],E;if(A){let S=ci[A];E=hp.clone(S.uniforms)}else E=_.uniforms;return E}function v(_,A){let E=h.get(A);return E!==void 0?++E.usedTimes:(E=new f_(i,A,_,r),c.push(E),h.set(A,E)),E}function M(_){if(--_.usedTimes===0){let A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function T(){a.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:y,acquireProgram:v,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:T}}function g_(){let i=new WeakMap;function t(s){return i.has(s)}function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:o}}function b_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ip(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lp(){let i=[],t=0,e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function s(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,b,g,p){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:m,materialVariant:s(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:p},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=m,x.materialVariant=s(f),x.groupOrder=b,x.renderOrder=f.renderOrder,x.z=g,x.group=p),t++,x}function l(f,d,m,b,g,p,x){x.reversedDepth===!0&&(g=-g);let y=a(f,d,m,b,g,p);m.transmission>0?n.push(y):m.transparent===!0?r.push(y):e.push(y)}function c(f,d,m,b,g,p){let x=a(f,d,m,b,g,p);m.transmission>0?n.unshift(x):m.transparent===!0?r.unshift(x):e.unshift(x)}function h(f,d){e.length>1&&e.sort(f||b_),n.length>1&&n.sort(d||Ip),r.length>1&&r.sort(d||Ip)}function u(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:u,sort:h}}function x_(){let i=new WeakMap;function t(n,r){let o=i.get(n),s;return o===void 0?(s=new Lp,i.set(n,[s])):r>=o.length?(s=new Lp,o.push(s)):s=o[r],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function v_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Y,color:new j};break;case"SpotLight":e={position:new Y,direction:new Y,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new j,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new j,groundColor:new j};break;case"RectAreaLight":e={color:new j,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[t.id]=e,e}}}function y_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var __=0;function M_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function w_(i){let t=new v_,e=y_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);let r=new Y,o=new Se,s=new Se;function a(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,m=0,b=0,g=0,p=0,x=0,y=0,v=0,M=0,w=0,T=0,_=0,A=0,E=0;c.sort(M_);for(let P=0,U=c.length;P<U;P++){let L=c[P],R=L.color,C=L.intensity,F=L.distance,D=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===qi?D=L.shadow.map.texture:D=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=R.r*C,u+=R.g*C,f+=R.b*C;else if(L.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(L.sh.coefficients[N],C);E++}else if(L.isSunLight){let N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let k=L.shadow,V=e.get(L);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[m]=V,n.sunShadowMap[m]=D;let X=k.getViewportCount();for(let z=0;z<X;z++)n.sunShadowMatrix[b+z]=k.getMatrix(z),n.sunShadowCascade[b+z]=k._cascadeData[z];b+=X,m++}n.sun[d]=N,d++}else if(L.isDirectionalLight){let N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let k=L.shadow,V=e.get(L);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.directionalShadow[g]=V,n.directionalShadowMap[g]=D,n.directionalShadowMatrix[g]=L.shadow.matrix,M++}n.directional[g]=N,g++}else if(L.isSpotLight){let N=t.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(R).multiplyScalar(C),N.distance=F,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,n.spot[x]=N;let k=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,k.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[x]=k.matrix,L.castShadow){let V=e.get(L);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=D,T++}x++}else if(L.isRectAreaLight){let N=t.get(L);N.color.copy(R).multiplyScalar(C),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),n.rectArea[y]=N,y++}else if(L.isPointLight){let N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){let k=L.shadow,V=e.get(L);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,V.shadowCameraNear=k.camera.near,V.shadowCameraFar=k.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=D,n.pointShadowMatrix[p]=L.shadow.matrix,w++}n.point[p]=N,p++}else if(L.isHemisphereLight){let N=t.get(L);N.skyColor.copy(L.color).multiplyScalar(C),N.groundColor.copy(L.groundColor).multiplyScalar(C),n.hemi[v]=N,v++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let S=n.hash;(S.sunLength!==d||S.directionalLength!==g||S.pointLength!==p||S.spotLength!==x||S.rectAreaLength!==y||S.hemiLength!==v||S.numSunShadows!==m||S.numDirectionalShadows!==M||S.numPointShadows!==w||S.numSpotShadows!==T||S.numSpotMaps!==_||S.numLightProbes!==E)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=y,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,S.sunLength=d,S.directionalLength=g,S.pointLength=p,S.spotLength=x,S.rectAreaLength=y,S.hemiLength=v,S.numSunShadows=m,S.numDirectionalShadows=M,S.numPointShadows=w,S.numSpotShadows=T,S.numSpotMaps=_,S.numLightProbes=E,n.version=__++)}function l(c,h){let u=0,f=0,d=0,m=0,b=0,g=0,p=h.matrixWorldInverse;for(let x=0,y=c.length;x<y;x++){let v=c[x];if(v.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(v.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),s.identity(),o.copy(v.matrixWorld),o.premultiply(p),s.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),b++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Fp(i){let t=new w_(i),e=[],n=[],r=[];function o(f){u.camera=f,e.length=0,n.length=0,r.length=0}function s(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:u,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:a,pushLightProbeGrid:l}}function S_(i){let t=new WeakMap;function e(r,o=0){let s=t.get(r),a;return s===void 0?(a=new Fp(i),t.set(r,[a])):o>=s.length?(a=new Fp(i),s.push(a)):a=s[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E_=`uniform sampler2D shadow_pass;
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
}`,A_=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],R_=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Dp=new Se,Rs=new Y,_h=new Y;function C_(i,t,e){let n=new os,r=new Jt,o=new Jt,s=new Be,a=new il,l=new rl,c={},h=e.maxTextureSize,u={[ai]:rn,[rn]:ai,[ie]:ie},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:T_,fragmentShader:E_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Vt;m.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new At(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bs;let p=this.type;this.render=function(w,T,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Sd&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bs);let A=i.getRenderTarget(),E=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Ln),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let U=p!==this.type;U&&T.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(R=>R.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,R=w.length;L<R;L++){let C=w[L],F=C.shadow;if(F===void 0){qt("WebGLShadowMap:",C,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let D=F.getFrameExtents();r.multiply(D),o.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/D.x),r.x=o.x*D.x,F.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/D.y),r.y=o.y*D.y,F.mapSize.y=o.y));let N=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=N,F.map===null||U===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===go){if(C.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ye(r.x,r.y,{format:qi,type:Yn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),F.map.texture.name=C.name+".shadowMap",F.map.depthTexture=new si(r.x,r.y,Xn),F.map.depthTexture.name=C.name+".shadowMapDepth",F.map.depthTexture.format=ei,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=tn,F.map.depthTexture.magFilter=tn}else C.isPointLight?(F.map=new lc(r.x),F.map.depthTexture=new el(r.x,Wn)):(F.map=new Ye(r.x,r.y),F.map.depthTexture=new si(r.x,r.y,Wn)),F.map.depthTexture.name=C.name+".shadowMap",F.map.depthTexture.format=ei,this.type===bs?(F.map.depthTexture.compareFunction=N?rc:ic,F.map.depthTexture.minFilter=Xe,F.map.depthTexture.magFilter=Xe):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=tn,F.map.depthTexture.magFilter=tn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==r.x||F.map.height!==r.y)&&F.map.setSize(r.x,r.y);let k=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();C.isPointLight!==!0&&F.updateMatrices(C,_);for(let V=0;V<k;V++){let X=F.getCamera(V);if(C.isPointLight){let z=F.camera,K=F.matrix,J=C.distance||z.far;J!==z.far&&(z.far=J,z.updateProjectionMatrix()),Rs.setFromMatrixPosition(C.matrixWorld),z.position.copy(Rs),_h.copy(z.position),_h.add(A_[V]),z.up.copy(R_[V]),z.lookAt(_h),z.updateMatrixWorld(),K.makeTranslation(-Rs.x,-Rs.y,-Rs.z),Dp.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Dp,z.coordinateSystem,z.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,V),i.clear();else{V===0&&(i.setRenderTarget(F.map),i.clear());let z=F.getViewport(V);s.set(o.x*z.x,o.y*z.y,o.x*z.z,o.y*z.w),P.viewport(s)}n=F.getFrustum(V),v(T,_,X,C,this.type)}F.isPointLightShadow!==!0&&this.type===go&&x(F,_),F.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(A,E,S)};function x(w,T){let _=t.update(b);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ye(r.x,r.y,{format:qi,type:Yn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,_,f,b,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,_,d,b,null)}function y(w,T,_,A){let E=null,S=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)E=S;else if(E=_.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let P=E.uuid,U=T.uuid,L=c[P];L===void 0&&(L={},c[P]=L);let R=L[U];R===void 0&&(R=E.clone(),L[U]=R,T.addEventListener("dispose",M)),E=R}if(E.visible=T.visible,E.wireframe=T.wireframe,A===go?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:u[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,_.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let P=i.properties.get(E);P.light=_}return E}function v(w,T,_,A,E){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===go)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let U=t.update(w),L=w.material;if(Array.isArray(L)){let R=U.groups;for(let C=0,F=R.length;C<F;C++){let D=R[C],N=L[D.materialIndex];if(N&&N.visible){let k=y(w,N,A,E);w.onBeforeShadow(i,w,T,_,U,k,D),i.renderBufferDirect(_,null,U,k,w,D),w.onAfterShadow(i,w,T,_,U,k,D)}}}else if(L.visible){let R=y(w,L,A,E);w.onBeforeShadow(i,w,T,_,U,R,null),i.renderBufferDirect(_,null,U,R,w,null),w.onAfterShadow(i,w,T,_,U,R,null)}}let P=w.children;for(let U=0,L=P.length;U<L;U++)v(P[U],T,_,A,E)}function M(w){w.target.removeEventListener("dispose",M);for(let _ in c){let A=c[_],E=w.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}function P_(i,t){function e(){let Z=!1,Mt=new Be,ft=null,wt=new Be(0,0,0,0);return{setMask:function(Pt){ft!==Pt&&!Z&&(i.colorMask(Pt,Pt,Pt,Pt),ft=Pt)},setLocked:function(Pt){Z=Pt},setClear:function(Pt,bt,Wt,Bt,Ae){Ae===!0&&(Pt*=Bt,bt*=Bt,Wt*=Bt),Mt.set(Pt,bt,Wt,Bt),wt.equals(Mt)===!1&&(i.clearColor(Pt,bt,Wt,Bt),wt.copy(Mt))},reset:function(){Z=!1,ft=null,wt.set(-1,0,0,0)}}}function n(){let Z=!1,Mt=!1,ft=null,wt=null,Pt=null;return{setReversed:function(bt){if(Mt!==bt){let Wt=t.get("EXT_clip_control");bt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Mt=bt;let Bt=Pt;Pt=null,this.setClear(Bt)}},getReversed:function(){return Mt},setTest:function(bt){bt?W(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(bt){ft!==bt&&!Z&&(i.depthMask(bt),ft=bt)},setFunc:function(bt){if(Mt&&(bt=rp[bt]),wt!==bt){switch(bt){case Ua:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case ka:i.depthFunc(i.LESS);break;case oo:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case Va:i.depthFunc(i.GEQUAL);break;case Ga:i.depthFunc(i.GREATER);break;case Ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=bt}},setLocked:function(bt){Z=bt},setClear:function(bt){Pt!==bt&&(Pt=bt,Mt&&(bt=1-bt),i.clearDepth(bt))},reset:function(){Z=!1,ft=null,wt=null,Pt=null,Mt=!1}}}function r(){let Z=!1,Mt=null,ft=null,wt=null,Pt=null,bt=null,Wt=null,Bt=null,Ae=null;return{setTest:function(xe){Z||(xe?W(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(xe){Mt!==xe&&!Z&&(i.stencilMask(xe),Mt=xe)},setFunc:function(xe,Nn,Jn){(ft!==xe||wt!==Nn||Pt!==Jn)&&(i.stencilFunc(xe,Nn,Jn),ft=xe,wt=Nn,Pt=Jn)},setOp:function(xe,Nn,Jn){(bt!==xe||Wt!==Nn||Bt!==Jn)&&(i.stencilOp(xe,Nn,Jn),bt=xe,Wt=Nn,Bt=Jn)},setLocked:function(xe){Z=xe},setClear:function(xe){Ae!==xe&&(i.clearStencil(xe),Ae=xe)},reset:function(){Z=!1,Mt=null,ft=null,wt=null,Pt=null,bt=null,Wt=null,Bt=null,Ae=null}}}let o=new e,s=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],b=null,g=!1,p=null,x=null,y=null,v=null,M=null,w=null,T=null,_=new j(0,0,0),A=0,E=!1,S=null,P=null,U=null,L=null,R=null,C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,D=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(N)[1]),F=D>=1):N.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),F=D>=2);let k=null,V={},X=i.getParameter(i.SCISSOR_BOX),z=i.getParameter(i.VIEWPORT),K=new Be().fromArray(X),J=new Be().fromArray(z);function at(Z,Mt,ft,wt){let Pt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(Z,bt),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<ft;Wt++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(Mt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return bt}let H={};H[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),W(i.DEPTH_TEST),s.setFunc(oo),Rt(!1),ne(Uu),W(i.CULL_FACE),dt(Ln);function W(Z){h[Z]!==!0&&(i.enable(Z),h[Z]=!0)}function tt(Z){h[Z]!==!1&&(i.disable(Z),h[Z]=!1)}function st(Z,Mt){return f[Z]!==Mt?(i.bindFramebuffer(Z,Mt),f[Z]=Mt,Z===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Mt),Z===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function it(Z,Mt){let ft=m,wt=!1;if(Z){ft=d.get(Mt),ft===void 0&&(ft=[],d.set(Mt,ft));let Pt=Z.textures;if(ft.length!==Pt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Wt=Pt.length;bt<Wt;bt++)ft[bt]=i.COLOR_ATTACHMENT0+bt;ft.length=Pt.length,wt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,wt=!0);wt&&i.drawBuffers(ft)}function ht(Z){return b!==Z?(i.useProgram(Z),b=Z,!0):!1}let gt={[br]:i.FUNC_ADD,[Ed]:i.FUNC_SUBTRACT,[Ad]:i.FUNC_REVERSE_SUBTRACT};gt[Rd]=i.MIN,gt[Cd]=i.MAX;let lt={[Pd]:i.ZERO,[Id]:i.ONE,[Ld]:i.SRC_COLOR,[ku]:i.SRC_ALPHA,[Bd]:i.SRC_ALPHA_SATURATE,[Nd]:i.DST_COLOR,[Dd]:i.DST_ALPHA,[Fd]:i.ONE_MINUS_SRC_COLOR,[zu]:i.ONE_MINUS_SRC_ALPHA,[Ud]:i.ONE_MINUS_DST_COLOR,[Od]:i.ONE_MINUS_DST_ALPHA,[kd]:i.CONSTANT_COLOR,[zd]:i.ONE_MINUS_CONSTANT_COLOR,[Vd]:i.CONSTANT_ALPHA,[Gd]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(Z,Mt,ft,wt,Pt,bt,Wt,Bt,Ae,xe){if(Z===Ln){g===!0&&(tt(i.BLEND),g=!1);return}if(g===!1&&(W(i.BLEND),g=!0),Z!==Td){if(Z!==p||xe!==E){if((x!==br||M!==br)&&(i.blendEquation(i.FUNC_ADD),x=br,M=br),xe)switch(Z){case Tn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ee:i.blendFunc(i.ONE,i.ONE);break;case Bu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$t("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Tn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ee:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bu:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xs:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",Z);break}y=null,v=null,w=null,T=null,_.set(0,0,0),A=0,p=Z,E=xe}return}Pt=Pt||Mt,bt=bt||ft,Wt=Wt||wt,(Mt!==x||Pt!==M)&&(i.blendEquationSeparate(gt[Mt],gt[Pt]),x=Mt,M=Pt),(ft!==y||wt!==v||bt!==w||Wt!==T)&&(i.blendFuncSeparate(lt[ft],lt[wt],lt[bt],lt[Wt]),y=ft,v=wt,w=bt,T=Wt),(Bt.equals(_)===!1||Ae!==A)&&(i.blendColor(Bt.r,Bt.g,Bt.b,Ae),_.copy(Bt),A=Ae),p=Z,E=!1}function Dt(Z,Mt){Z.side===ie?tt(i.CULL_FACE):W(i.CULL_FACE);let ft=Z.side===rn;Mt&&(ft=!ft),Rt(ft),Z.blending===Tn&&Z.transparent===!1?dt(Ln):dt(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),s.setFunc(Z.depthFunc),s.setTest(Z.depthTest),s.setMask(Z.depthWrite),o.setMask(Z.colorWrite);let wt=Z.stencilWrite;a.setTest(wt),wt&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),de(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(Z){S!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),S=Z)}function ne(Z){Z!==Md?(W(i.CULL_FACE),Z!==P&&(Z===Uu?i.cullFace(i.BACK):Z===wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),P=Z}function pe(Z){Z!==U&&(F&&i.lineWidth(Z),U=Z)}function de(Z,Mt,ft){Z?(W(i.POLYGON_OFFSET_FILL),(L!==Mt||R!==ft)&&(L=Mt,R=ft,s.getReversed()&&(Mt=-Mt),i.polygonOffset(Mt,ft))):tt(i.POLYGON_OFFSET_FILL)}function _e(Z){Z?W(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function Oe(Z){Z===void 0&&(Z=i.TEXTURE0+C-1),k!==Z&&(i.activeTexture(Z),k=Z)}function $(Z,Mt,ft){ft===void 0&&(k===null?ft=i.TEXTURE0+C-1:ft=k);let wt=V[ft];wt===void 0&&(wt={type:void 0,texture:void 0},V[ft]=wt),(wt.type!==Z||wt.texture!==Mt)&&(k!==ft&&(i.activeTexture(ft),k=ft),i.bindTexture(Z,Mt||H[Z]),wt.type=Z,wt.texture=Mt)}function Ge(){let Z=V[k];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function I(){try{i.texSubImage2D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function Q(){try{i.texSubImage3D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function xt(){try{i.texStorage2D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function vt(){try{i.texStorage3D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function ut(){try{i.texImage2D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function pt(){try{i.texImage3D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function yt(Z){return u[Z]!==void 0?u[Z]:i.getParameter(Z)}function Gt(Z,Mt){u[Z]!==Mt&&(i.pixelStorei(Z,Mt),u[Z]=Mt)}function St(Z){K.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),K.copy(Z))}function _t(Z){J.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),J.copy(Z))}function Ht(Z,Mt){let ft=c.get(Mt);ft===void 0&&(ft=new WeakMap,c.set(Mt,ft));let wt=ft.get(Z);wt===void 0&&(wt=i.getUniformBlockIndex(Mt,Z.name),ft.set(Z,wt))}function Yt(Z,Mt){let wt=c.get(Mt).get(Z);l.get(Mt)!==wt&&(i.uniformBlockBinding(Mt,wt,Z.__bindingPointIndex),l.set(Mt,wt))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},k=null,V={},f={},d=new WeakMap,m=[],b=null,g=!1,p=null,x=null,y=null,v=null,M=null,w=null,T=null,_=new j(0,0,0),A=0,E=!1,S=null,P=null,U=null,L=null,R=null,K.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:W,disable:tt,bindFramebuffer:st,drawBuffers:it,useProgram:ht,setBlending:dt,setMaterial:Dt,setFlipSided:Rt,setCullFace:ne,setLineWidth:pe,setPolygonOffset:de,setScissorTest:_e,activeTexture:Oe,bindTexture:$,unbindTexture:Ge,compressedTexImage2D:ge,compressedTexImage3D:G,texImage2D:ut,texImage3D:pt,pixelStorei:Gt,getParameter:yt,updateUBOMapping:Ht,uniformBlockBinding:Yt,texStorage2D:xt,texStorage3D:vt,texSubImage2D:I,texSubImage3D:Q,compressedTexSubImage2D:rt,compressedTexSubImage3D:ct,scissor:St,viewport:_t,reset:oe}}function I_(i,t,e,n,r,o,s){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Jt,h=new WeakMap,u=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(G,I){return m?new OffscreenCanvas(G,I):so("canvas")}function g(G,I,Q){let rt=1,ct=ge(G);if((ct.width>Q||ct.height>Q)&&(rt=Q/Math.max(ct.width,ct.height)),rt<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){let xt=Math.floor(rt*ct.width),vt=Math.floor(rt*ct.height);f===void 0&&(f=b(xt,vt));let ut=I?b(xt,vt):f;return ut.width=xt,ut.height=vt,ut.getContext("2d").drawImage(G,0,0,xt,vt),qt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+xt+"x"+vt+")."),ut}else return"data"in G&&qt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),G;return G}function p(G){return G.generateMipmaps}function x(G){i.generateMipmap(G)}function y(G){return G.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?i.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(G,I,Q,rt,ct,xt=!1){if(G!==null){if(i[G]!==void 0)return i[G];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let vt;rt&&(vt=t.get("EXT_texture_norm16"),vt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=I;if(I===i.RED&&(Q===i.FLOAT&&(ut=i.R32F),Q===i.HALF_FLOAT&&(ut=i.R16F),Q===i.UNSIGNED_BYTE&&(ut=i.R8),Q===i.UNSIGNED_SHORT&&vt&&(ut=vt.R16_EXT),Q===i.SHORT&&vt&&(ut=vt.R16_SNORM_EXT)),I===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.R8UI),Q===i.UNSIGNED_SHORT&&(ut=i.R16UI),Q===i.UNSIGNED_INT&&(ut=i.R32UI),Q===i.BYTE&&(ut=i.R8I),Q===i.SHORT&&(ut=i.R16I),Q===i.INT&&(ut=i.R32I)),I===i.RG&&(Q===i.FLOAT&&(ut=i.RG32F),Q===i.HALF_FLOAT&&(ut=i.RG16F),Q===i.UNSIGNED_BYTE&&(ut=i.RG8),Q===i.UNSIGNED_SHORT&&vt&&(ut=vt.RG16_EXT),Q===i.SHORT&&vt&&(ut=vt.RG16_SNORM_EXT)),I===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ut=i.RG16UI),Q===i.UNSIGNED_INT&&(ut=i.RG32UI),Q===i.BYTE&&(ut=i.RG8I),Q===i.SHORT&&(ut=i.RG16I),Q===i.INT&&(ut=i.RG32I)),I===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),Q===i.UNSIGNED_INT&&(ut=i.RGB32UI),Q===i.BYTE&&(ut=i.RGB8I),Q===i.SHORT&&(ut=i.RGB16I),Q===i.INT&&(ut=i.RGB32I)),I===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),Q===i.UNSIGNED_INT&&(ut=i.RGBA32UI),Q===i.BYTE&&(ut=i.RGBA8I),Q===i.SHORT&&(ut=i.RGBA16I),Q===i.INT&&(ut=i.RGBA32I)),I===i.RGB&&(Q===i.UNSIGNED_SHORT&&vt&&(ut=vt.RGB16_EXT),Q===i.SHORT&&vt&&(ut=vt.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ut=i.R11F_G11F_B10F)),I===i.RGBA){let pt=xt?Jo:ce.getTransfer(ct);Q===i.FLOAT&&(ut=i.RGBA32F),Q===i.HALF_FLOAT&&(ut=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ut=pt===ye?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&vt&&(ut=vt.RGBA16_EXT),Q===i.SHORT&&vt&&(ut=vt.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function M(G,I){let Q;return G?I===null||I===Wn||I===xo?Q=i.DEPTH24_STENCIL8:I===Xn?Q=i.DEPTH32F_STENCIL8:I===bo&&(Q=i.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===Wn||I===xo?Q=i.DEPTH_COMPONENT24:I===Xn?Q=i.DEPTH_COMPONENT32F:I===bo&&(Q=i.DEPTH_COMPONENT16),Q}function w(G,I){return p(G)===!0||G.isFramebufferTexture&&G.minFilter!==tn&&G.minFilter!==Xe?Math.log2(Math.max(I.width,I.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?I.mipmaps.length:1}function T(G){let I=G.target;I.removeEventListener("dispose",T),A(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function _(G){let I=G.target;I.removeEventListener("dispose",_),S(I)}function A(G){let I=n.get(G);if(I.__webglInit===void 0)return;let Q=G.source,rt=d.get(Q);if(rt){let ct=rt[I.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&E(G),Object.keys(rt).length===0&&d.delete(Q)}n.remove(G)}function E(G){let I=n.get(G);i.deleteTexture(I.__webglTexture);let Q=G.source,rt=d.get(Q);delete rt[I.__cacheKey],s.memory.textures--}function S(G){let I=n.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),n.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(I.__webglFramebuffer[rt]))for(let ct=0;ct<I.__webglFramebuffer[rt].length;ct++)i.deleteFramebuffer(I.__webglFramebuffer[rt][ct]);else i.deleteFramebuffer(I.__webglFramebuffer[rt]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[rt])}else{if(Array.isArray(I.__webglFramebuffer))for(let rt=0;rt<I.__webglFramebuffer.length;rt++)i.deleteFramebuffer(I.__webglFramebuffer[rt]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let rt=0;rt<I.__webglColorRenderbuffer.length;rt++)I.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[rt]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let Q=G.textures;for(let rt=0,ct=Q.length;rt<ct;rt++){let xt=n.get(Q[rt]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),s.memory.textures--),n.remove(Q[rt])}n.remove(G)}let P=0;function U(){P=0}function L(){return P}function R(G){P=G}function C(){let G=P;return G>=r.maxTextures&&qt("WebGLTextures: Trying to use "+(G+1)+" texture units while this GPU supports only "+r.maxTextures),P+=1,G}function F(G){let I=[];return I.push(G.wrapS),I.push(G.wrapT),I.push(G.wrapR||0),I.push(G.magFilter),I.push(G.minFilter),I.push(G.anisotropy),I.push(G.internalFormat),I.push(G.format),I.push(G.type),I.push(G.generateMipmaps),I.push(G.premultiplyAlpha),I.push(G.flipY),I.push(G.unpackAlignment),I.push(G.colorSpace),I.join()}function D(G,I){let Q=n.get(G);if(G.isVideoTexture&&$(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&Q.__version!==G.version){let rt=G.image;if(rt===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(Q,G,I);return}}else G.isExternalTexture&&(Q.__webglTexture=G.sourceTexture?G.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+I)}function N(G,I){let Q=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&Q.__version!==G.version){tt(Q,G,I);return}else G.isExternalTexture&&(Q.__webglTexture=G.sourceTexture?G.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+I)}function k(G,I){let Q=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&Q.__version!==G.version){tt(Q,G,I);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+I)}function V(G,I){let Q=n.get(G);if(G.isCubeDepthTexture!==!0&&G.version>0&&Q.__version!==G.version){st(Q,G,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+I)}let X={[fr]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[Wa]:i.MIRRORED_REPEAT},z={[tn]:i.NEAREST,[Xd]:i.NEAREST_MIPMAP_NEAREST,[ys]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[yl]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},K={[Zd]:i.NEVER,[tp]:i.ALWAYS,[Kd]:i.LESS,[ic]:i.LEQUAL,[Jd]:i.EQUAL,[rc]:i.GEQUAL,[jd]:i.GREATER,[Qd]:i.NOTEQUAL};function J(G,I){if(I.type===Xn&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===Xe||I.magFilter===yl||I.magFilter===ys||I.magFilter===Xi||I.minFilter===Xe||I.minFilter===yl||I.minFilter===ys||I.minFilter===Xi)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(G,i.TEXTURE_WRAP_S,X[I.wrapS]),i.texParameteri(G,i.TEXTURE_WRAP_T,X[I.wrapT]),(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)&&i.texParameteri(G,i.TEXTURE_WRAP_R,X[I.wrapR]),i.texParameteri(G,i.TEXTURE_MAG_FILTER,z[I.magFilter]),i.texParameteri(G,i.TEXTURE_MIN_FILTER,z[I.minFilter]),I.compareFunction&&(i.texParameteri(G,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(G,i.TEXTURE_COMPARE_FUNC,K[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===tn||I.minFilter!==ys&&I.minFilter!==Xi||I.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(G,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function at(G,I){let Q=!1;G.__webglInit===void 0&&(G.__webglInit=!0,I.addEventListener("dispose",T));let rt=I.source,ct=d.get(rt);ct===void 0&&(ct={},d.set(rt,ct));let xt=F(I);if(xt!==G.__cacheKey){ct[xt]===void 0&&(ct[xt]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,Q=!0),ct[xt].usedTimes++;let vt=ct[G.__cacheKey];vt!==void 0&&(ct[G.__cacheKey].usedTimes--,vt.usedTimes===0&&E(I)),G.__cacheKey=xt,G.__webglTexture=ct[xt].texture}return Q}function H(G,I,Q){return Math.floor(Math.floor(G/Q)/I)}function W(G,I,Q,rt){let xt=G.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,I.width,I.height,Q,rt,I.data);else{xt.sort((Gt,St)=>Gt.start-St.start);let vt=0;for(let Gt=1;Gt<xt.length;Gt++){let St=xt[vt],_t=xt[Gt],Ht=St.start+St.count,Yt=H(_t.start,I.width,4),oe=H(St.start,I.width,4);_t.start<=Ht+1&&Yt===oe&&H(_t.start+_t.count-1,I.width,4)===Yt?St.count=Math.max(St.count,_t.start+_t.count-St.start):(++vt,xt[vt]=_t)}xt.length=vt+1;let ut=e.getParameter(i.UNPACK_ROW_LENGTH),pt=e.getParameter(i.UNPACK_SKIP_PIXELS),yt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,I.width);for(let Gt=0,St=xt.length;Gt<St;Gt++){let _t=xt[Gt],Ht=Math.floor(_t.start/4),Yt=Math.ceil(_t.count/4),oe=Ht%I.width,Z=Math.floor(Ht/I.width),Mt=Yt,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),e.pixelStorei(i.UNPACK_SKIP_ROWS,Z),e.texSubImage2D(i.TEXTURE_2D,0,oe,Z,Mt,ft,Q,rt,I.data)}G.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ut),e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function tt(G,I,Q){let rt=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(rt=i.TEXTURE_3D);let ct=at(G,I),xt=I.source;e.bindTexture(rt,G.__webglTexture,i.TEXTURE0+Q);let vt=n.get(xt);if(xt.version!==vt.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let ft=ce.getPrimaries(ce.workingColorSpace),wt=I.colorSpace===wi?null:ce.getPrimaries(I.colorSpace),Pt=I.colorSpace===wi||ft===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment);let pt=g(I.image,!1,r.maxTextureSize);pt=Ge(I,pt);let yt=o.convert(I.format,I.colorSpace),Gt=o.convert(I.type),St=v(I.internalFormat,yt,Gt,I.normalized,I.colorSpace,I.isVideoTexture);J(rt,I);let _t,Ht=I.mipmaps,Yt=I.isVideoTexture!==!0,oe=vt.__version===void 0||ct===!0,Z=xt.dataReady,Mt=w(I,pt);if(I.isDepthTexture)St=M(I.format===Yi,I.type),oe&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,St,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,St,pt.width,pt.height,0,yt,Gt,null));else if(I.isDataTexture)if(Ht.length>0){Yt&&oe&&e.texStorage2D(i.TEXTURE_2D,Mt,St,Ht[0].width,Ht[0].height);for(let ft=0,wt=Ht.length;ft<wt;ft++)_t=Ht[ft],Yt?Z&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,_t.width,_t.height,yt,Gt,_t.data):e.texImage2D(i.TEXTURE_2D,ft,St,_t.width,_t.height,0,yt,Gt,_t.data);I.generateMipmaps=!1}else Yt?(oe&&e.texStorage2D(i.TEXTURE_2D,Mt,St,pt.width,pt.height),Z&&W(I,pt,yt,Gt)):e.texImage2D(i.TEXTURE_2D,0,St,pt.width,pt.height,0,yt,Gt,pt.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Yt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,St,Ht[0].width,Ht[0].height,pt.depth);for(let ft=0,wt=Ht.length;ft<wt;ft++)if(_t=Ht[ft],I.format!==Fn)if(yt!==null)if(Yt){if(Z)if(I.layerUpdates.size>0){let Pt=uh(_t.width,_t.height,I.format,I.type);for(let bt of I.layerUpdates){let Wt=_t.data.subarray(bt*Pt/_t.data.BYTES_PER_ELEMENT,(bt+1)*Pt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,bt,_t.width,_t.height,1,yt,Wt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,_t.width,_t.height,pt.depth,yt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,St,_t.width,_t.height,pt.depth,0,_t.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?Z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,_t.width,_t.height,pt.depth,yt,Gt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,St,_t.width,_t.height,pt.depth,0,yt,Gt,_t.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{Yt&&oe&&e.texStorage2D(i.TEXTURE_2D,Mt,St,Ht[0].width,Ht[0].height);for(let ft=0,wt=Ht.length;ft<wt;ft++)_t=Ht[ft],I.format!==Fn?yt!==null?Yt?Z&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,_t.width,_t.height,yt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,St,_t.width,_t.height,0,_t.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?Z&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,_t.width,_t.height,yt,Gt,_t.data):e.texImage2D(i.TEXTURE_2D,ft,St,_t.width,_t.height,0,yt,Gt,_t.data)}else if(I.isDataArrayTexture)if(Yt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,St,pt.width,pt.height,pt.depth),Z)if(I.layerUpdates.size>0){let ft=uh(pt.width,pt.height,I.format,I.type);for(let wt of I.layerUpdates){let Pt=pt.data.subarray(wt*ft/pt.data.BYTES_PER_ELEMENT,(wt+1)*ft/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,pt.width,pt.height,1,yt,Gt,Pt)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,yt,Gt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,pt.width,pt.height,pt.depth,0,yt,Gt,pt.data);else if(I.isData3DTexture)Yt?(oe&&e.texStorage3D(i.TEXTURE_3D,Mt,St,pt.width,pt.height,pt.depth),Z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,yt,Gt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,St,pt.width,pt.height,pt.depth,0,yt,Gt,pt.data);else if(I.isFramebufferTexture){if(oe)if(Yt)e.texStorage2D(i.TEXTURE_2D,Mt,St,pt.width,pt.height);else{let ft=pt.width,wt=pt.height;for(let Pt=0;Pt<Mt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,St,ft,wt,0,yt,Gt,null),ft>>=1,wt>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in i){let ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),pt.parentNode!==ft){ft.appendChild(pt),u.add(I),ft.onpaint=wt=>{let Pt=wt.changedElements;for(let bt of u)Pt.includes(bt.image)&&(bt.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,pt);else{let Pt=i.RGBA,bt=i.RGBA,Wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pt,bt,Wt,pt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(Yt&&oe){let ft=ge(Ht[0]);e.texStorage2D(i.TEXTURE_2D,Mt,St,ft.width,ft.height)}for(let ft=0,wt=Ht.length;ft<wt;ft++)_t=Ht[ft],Yt?Z&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,yt,Gt,_t):e.texImage2D(i.TEXTURE_2D,ft,St,yt,Gt,_t);I.generateMipmaps=!1}else if(Yt){if(oe){let ft=ge(pt);e.texStorage2D(i.TEXTURE_2D,Mt,St,ft.width,ft.height)}Z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Gt,pt)}else e.texImage2D(i.TEXTURE_2D,0,St,yt,Gt,pt);p(I)&&x(rt),vt.__version=xt.version,I.onUpdate&&I.onUpdate(I)}G.__version=I.version}function st(G,I,Q){if(I.image.length!==6)return;let rt=at(G,I),ct=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+Q);let xt=n.get(ct);if(ct.version!==xt.__version||rt===!0){e.activeTexture(i.TEXTURE0+Q);let vt=ce.getPrimaries(ce.workingColorSpace),ut=I.colorSpace===wi?null:ce.getPrimaries(I.colorSpace),pt=I.colorSpace===wi||vt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let yt=I.isCompressedTexture||I.image[0].isCompressedTexture,Gt=I.image[0]&&I.image[0].isDataTexture,St=[];for(let bt=0;bt<6;bt++)!yt&&!Gt?St[bt]=g(I.image[bt],!0,r.maxCubemapSize):St[bt]=Gt?I.image[bt].image:I.image[bt],St[bt]=Ge(I,St[bt]);let _t=St[0],Ht=o.convert(I.format,I.colorSpace),Yt=o.convert(I.type),oe=v(I.internalFormat,Ht,Yt,I.normalized,I.colorSpace),Z=I.isVideoTexture!==!0,Mt=xt.__version===void 0||rt===!0,ft=ct.dataReady,wt=w(I,_t);J(i.TEXTURE_CUBE_MAP,I);let Pt;if(yt){Z&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,oe,_t.width,_t.height);for(let bt=0;bt<6;bt++){Pt=St[bt].mipmaps;for(let Wt=0;Wt<Pt.length;Wt++){let Bt=Pt[Wt];I.format!==Fn?Ht!==null?Z?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt,0,0,Bt.width,Bt.height,Ht,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt,oe,Bt.width,Bt.height,0,Bt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt,0,0,Bt.width,Bt.height,Ht,Yt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt,oe,Bt.width,Bt.height,0,Ht,Yt,Bt.data)}}}else{if(Pt=I.mipmaps,Z&&Mt){Pt.length>0&&wt++;let bt=ge(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,oe,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Gt){Z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,St[bt].width,St[bt].height,Ht,Yt,St[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,oe,St[bt].width,St[bt].height,0,Ht,Yt,St[bt].data);for(let Wt=0;Wt<Pt.length;Wt++){let Ae=Pt[Wt].image[bt].image;Z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt+1,0,0,Ae.width,Ae.height,Ht,Yt,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt+1,oe,Ae.width,Ae.height,0,Ht,Yt,Ae.data)}}else{Z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Ht,Yt,St[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,oe,Ht,Yt,St[bt]);for(let Wt=0;Wt<Pt.length;Wt++){let Bt=Pt[Wt];Z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt+1,0,0,Ht,Yt,Bt.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Wt+1,oe,Ht,Yt,Bt.image[bt])}}}p(I)&&x(i.TEXTURE_CUBE_MAP),xt.__version=ct.version,I.onUpdate&&I.onUpdate(I)}G.__version=I.version}function it(G,I,Q,rt,ct,xt){let vt=o.convert(Q.format,Q.colorSpace),ut=o.convert(Q.type),pt=v(Q.internalFormat,vt,ut,Q.normalized,Q.colorSpace),yt=n.get(I),Gt=n.get(Q);if(Gt.__renderTarget=I,!yt.__hasExternalTextures){let St=Math.max(1,I.width>>xt),_t=Math.max(1,I.height>>xt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,xt,pt,St,_t,I.depth,0,vt,ut,null):e.texImage2D(ct,xt,pt,St,_t,0,vt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,G),Oe(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,ct,Gt.__webglTexture,0,_e(I)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,ct,Gt.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(G,I,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,G),I.depthBuffer){let rt=I.depthTexture,ct=rt&&rt.isDepthTexture?rt.type:null,xt=M(I.stencilBuffer,ct),vt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Oe(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e(I),xt,I.width,I.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e(I),xt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,xt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,G)}else{let rt=I.textures;for(let ct=0;ct<rt.length;ct++){let xt=rt[ct],vt=o.convert(xt.format,xt.colorSpace),ut=o.convert(xt.type),pt=v(xt.internalFormat,vt,ut,xt.normalized,xt.colorSpace);Oe(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e(I),pt,I.width,I.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e(I),pt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,pt,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(G,I,Q){let rt=I.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,G),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(I.depthTexture);if(ct.__renderTarget=I,(!ct.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),rt){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,I.depthTexture.addEventListener("dispose",T)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),J(i.TEXTURE_CUBE_MAP,I.depthTexture);let yt=o.convert(I.depthTexture.format),Gt=o.convert(I.depthTexture.type),St;I.depthTexture.format===ei?St=i.DEPTH_COMPONENT24:I.depthTexture.format===Yi&&(St=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,St,I.width,I.height,0,yt,Gt,null)}}else D(I.depthTexture,0);let xt=ct.__webglTexture,vt=_e(I),ut=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,pt=I.depthTexture.format===Yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(I.depthTexture.format===ei)Oe(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ut,xt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,pt,ut,xt,0);else if(I.depthTexture.format===Yi)Oe(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ut,xt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,pt,ut,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(G){let I=n.get(G),Q=G.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==G.depthTexture){let rt=G.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),rt){let ct=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,rt.removeEventListener("dispose",ct)};rt.addEventListener("dispose",ct),I.__depthDisposeCallback=ct}I.__boundDepthTexture=rt}if(G.depthTexture&&!I.__autoAllocateDepthBuffer)if(Q)for(let rt=0;rt<6;rt++)gt(I.__webglFramebuffer[rt],G,rt);else{let rt=G.texture.mipmaps;rt&&rt.length>0?gt(I.__webglFramebuffer[0],G,0):gt(I.__webglFramebuffer,G,0)}else if(Q){I.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[rt]),I.__webglDepthbuffer[rt]===void 0)I.__webglDepthbuffer[rt]=i.createRenderbuffer(),ht(I.__webglDepthbuffer[rt],G,!1);else{let ct=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=I.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,xt)}}else{let rt=G.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),ht(I.__webglDepthbuffer,G,!1);else{let ct=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,xt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(G,I,Q){let rt=n.get(G);I!==void 0&&it(rt.__webglFramebuffer,G,G.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&lt(G)}function Dt(G){let I=G.texture,Q=n.get(G),rt=n.get(I);G.addEventListener("dispose",_);let ct=G.textures,xt=G.isWebGLCubeRenderTarget===!0,vt=ct.length>1;if(vt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=I.version,s.memory.textures++),xt){Q.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(I.mipmaps&&I.mipmaps.length>0){Q.__webglFramebuffer[ut]=[];for(let pt=0;pt<I.mipmaps.length;pt++)Q.__webglFramebuffer[ut][pt]=i.createFramebuffer()}else Q.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ut=0;ut<I.mipmaps.length;ut++)Q.__webglFramebuffer[ut]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(vt)for(let ut=0,pt=ct.length;ut<pt;ut++){let yt=n.get(ct[ut]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),s.memory.textures++)}if(G.samples>0&&Oe(G)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ut=0;ut<ct.length;ut++){let pt=ct[ut];Q.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ut]);let yt=o.convert(pt.format,pt.colorSpace),Gt=o.convert(pt.type),St=v(pt.internalFormat,yt,Gt,pt.normalized,pt.colorSpace,G.isXRRenderTarget===!0),_t=_e(G);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,St,G.width,G.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),G.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(Q.__webglDepthRenderbuffer,G,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),J(i.TEXTURE_CUBE_MAP,I);for(let ut=0;ut<6;ut++)if(I.mipmaps&&I.mipmaps.length>0)for(let pt=0;pt<I.mipmaps.length;pt++)it(Q.__webglFramebuffer[ut][pt],G,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,pt);else it(Q.__webglFramebuffer[ut],G,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);p(I)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ut=0,pt=ct.length;ut<pt;ut++){let yt=ct[ut],Gt=n.get(yt),St=i.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(St=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,Gt.__webglTexture),J(St,yt),it(Q.__webglFramebuffer,G,yt,i.COLOR_ATTACHMENT0+ut,St,0),p(yt)&&x(St)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(ut=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,rt.__webglTexture),J(ut,I),I.mipmaps&&I.mipmaps.length>0)for(let pt=0;pt<I.mipmaps.length;pt++)it(Q.__webglFramebuffer[pt],G,I,i.COLOR_ATTACHMENT0,ut,pt);else it(Q.__webglFramebuffer,G,I,i.COLOR_ATTACHMENT0,ut,0);p(I)&&x(ut),e.unbindTexture()}G.depthBuffer&&lt(G)}function Rt(G){let I=G.textures;for(let Q=0,rt=I.length;Q<rt;Q++){let ct=I[Q];if(p(ct)){let xt=y(G),vt=n.get(ct).__webglTexture;e.bindTexture(xt,vt),x(xt),e.unbindTexture()}}}let ne=[],pe=[];function de(G){if(G.samples>0){if(Oe(G)===!1){let I=G.textures,Q=G.width,rt=G.height,ct=i.COLOR_BUFFER_BIT,xt=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(G),ut=I.length>1;if(ut)for(let yt=0;yt<I.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);let pt=G.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let yt=0;yt<I.length;yt++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[yt]);let Gt=n.get(I[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,Q,rt,0,0,Q,rt,ct,i.NEAREST),l===!0&&(ne.length=0,pe.length=0,ne.push(i.COLOR_ATTACHMENT0+yt),G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&(ne.push(xt),pe.push(xt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let yt=0;yt<I.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[yt]);let Gt=n.get(I[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&l){let I=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function _e(G){return Math.min(r.maxSamples,G.samples)}function Oe(G){let I=n.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function $(G){let I=s.render.frame;h.get(G)!==I&&(h.set(G,I),G.update())}function Ge(G,I){let Q=G.colorSpace,rt=G.format,ct=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||Q!==Ko&&Q!==wi&&(ce.getTransfer(Q)===ye?(rt!==Fn||ct!==En)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",Q)),I}function ge(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(c.width=G.naturalWidth||G.width,c.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(c.width=G.displayWidth,c.height=G.displayHeight):(c.width=G.width,c.height=G.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=U,this.getTextureUnits=L,this.setTextureUnits=R,this.setTexture2D=D,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=V,this.rebindTextures=dt,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function L_(i,t){function e(n,r=wi){let o,s=ce.getTransfer(r);if(n===En)return i.UNSIGNED_BYTE;if(n===Ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ju)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ku)return i.BYTE;if(n===Ju)return i.SHORT;if(n===bo)return i.UNSIGNED_SHORT;if(n===_l)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Yn)return i.HALF_FLOAT;if(n===th)return i.ALPHA;if(n===eh)return i.RGB;if(n===Fn)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===nh)return i.RED;if(n===Sl)return i.RED_INTEGER;if(n===qi)return i.RG;if(n===Tl)return i.RG_INTEGER;if(n===El)return i.RGBA_INTEGER;if(n===_s||n===Ms||n===ws||n===Ss)if(s===ye)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===_s)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ws)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ss)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===_s)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ms)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ws)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ss)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Al||n===Rl||n===Cl||n===Pl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Al)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Il||n===Ll||n===Fl||n===Dl||n===Ol||n===Ts||n===Nl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Il||n===Ll)return s===ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Fl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Dl)return o.COMPRESSED_R11_EAC;if(n===Ol)return o.COMPRESSED_SIGNED_R11_EAC;if(n===Ts)return o.COMPRESSED_RG11_EAC;if(n===Nl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ul||n===Bl||n===kl||n===zl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===Yl||n===ql||n===$l||n===Zl||n===Kl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ul)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ql)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$l)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jl||n===jl||n===Ql)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Jl)return s===ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ql)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tc||n===ec||n===Es||n===nc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===tc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ec)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Es)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D_=`
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

}`,Ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new as(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new fn({vertexShader:F_,fragmentShader:D_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ph=class extends ni{constructor(t,e){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,b=typeof XRWebGLBinding<"u",g=new Ch,p={},x=e.getContextAttributes(),y=null,v=null,M=[],w=[],T=new Jt,_=null,A=null,E=new Qe;E.viewport=new Be;let S=new Qe;S.viewport=new Be;let P=[E,S],U=new gl,L=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let W=M[H];return W===void 0&&(W=new uo,M[H]=W),W.getTargetRaySpace()},this.getControllerGrip=function(H){let W=M[H];return W===void 0&&(W=new uo,M[H]=W),W.getGripSpace()},this.getHand=function(H){let W=M[H];return W===void 0&&(W=new uo,M[H]=W),W.getHandSpace()};function C(H){let W=w.indexOf(H.inputSource);if(W===-1)return;let tt=M[W];tt!==void 0&&(tt.update(H.inputSource,H.frame,c||s),tt.dispatchEvent({type:H.type,data:H.inputSource}))}function F(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",D);for(let H=0;H<M.length;H++){let W=w[H];W!==null&&(w[H]=null,M[H].disconnect(W))}L=null,R=null,g.reset();for(let H in p)delete p[H];if(t.setRenderTarget(y),d=null,f=null,u=null,r=null,v=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(T.width,T.height,!1),A!==null){let H=A.camera;H.fov=A.fov,H.zoom=A.zoom,H.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",F),r.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(T),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,st=null,it=null;x.depth&&(it=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=x.stencil?Yi:ei,st=x.stencil?xo:Wn);let ht={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:o};u=this.getBinding(),f=u.createProjectionLayer(ht),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ye(f.textureWidth,f.textureHeight,{format:Fn,type:En,depthTexture:new si(f.textureWidth,f.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let tt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ye(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),at.setContext(r),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function D(H){for(let W=0;W<H.removed.length;W++){let tt=H.removed[W],st=w.indexOf(tt);st>=0&&(w[st]=null,M[st].disconnect(tt))}for(let W=0;W<H.added.length;W++){let tt=H.added[W],st=w.indexOf(tt);if(st===-1){for(let ht=0;ht<M.length;ht++)if(ht>=w.length){w.push(tt),st=ht;break}else if(w[ht]===null){w[ht]=tt,st=ht;break}if(st===-1)break}let it=M[st];it&&it.connect(tt)}}let N=new Y,k=new Y;function V(H,W,tt){N.setFromMatrixPosition(W.matrixWorld),k.setFromMatrixPosition(tt.matrixWorld);let st=N.distanceTo(k),it=W.projectionMatrix.elements,ht=tt.projectionMatrix.elements,gt=it[14]/(it[10]-1),lt=it[14]/(it[10]+1),dt=(it[9]+1)/it[5],Dt=(it[9]-1)/it[5],Rt=(it[8]-1)/it[0],ne=(ht[8]+1)/ht[0],pe=gt*Rt,de=gt*ne,_e=st/(-Rt+ne),Oe=_e*-Rt;if(W.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Oe),H.translateZ(_e),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),it[10]===-1)H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let $=gt+_e,Ge=lt+_e,ge=pe-Oe,G=de+(st-Oe),I=dt*lt/Ge*$,Q=Dt*lt/Ge*$;H.projectionMatrix.makePerspective(ge,G,I,Q,$,Ge),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function X(H,W){W===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(W.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let W=H.near,tt=H.far;g.texture!==null&&(g.depthNear>0&&(W=g.depthNear),g.depthFar>0&&(tt=g.depthFar)),U.near=S.near=E.near=W,U.far=S.far=E.far=tt,(L!==U.near||R!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),L=U.near,R=U.far),U.layers.mask=H.layers.mask|6,E.layers.mask=U.layers.mask&-5,S.layers.mask=U.layers.mask&-3;let st=H.parent,it=U.cameras;X(U,st);for(let ht=0;ht<it.length;ht++)X(it[ht],st);it.length===2?V(U,E,S):U.projectionMatrix.copy(E.projectionMatrix),A===null&&H.isPerspectiveCamera&&(A={camera:H,fov:H.fov,zoom:H.zoom}),z(H,U,st)};function z(H,W,tt){tt===null?H.matrix.copy(W.matrixWorld):(H.matrix.copy(tt.matrixWorld),H.matrix.invert(),H.matrix.multiply(W.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ya*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(H){return p[H]};let K=null;function J(H,W){if(h=W.getViewerPose(c||s),m=W,h!==null){let tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let st=!1;tt.length!==U.cameras.length&&(U.cameras.length=0,st=!0);for(let lt=0;lt<tt.length;lt++){let dt=tt[lt],Dt=null;if(d!==null)Dt=d.getViewport(dt);else{let ne=u.getViewSubImage(f,dt);Dt=ne.viewport,lt===0&&(t.setRenderTargetTextures(v,ne.colorTexture,ne.depthStencilTexture),t.setRenderTarget(v))}let Rt=P[lt];Rt===void 0&&(Rt=new Qe,Rt.layers.enable(lt),Rt.viewport=new Be,P[lt]=Rt),Rt.matrix.fromArray(dt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(dt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),lt===0&&(U.matrix.copy(Rt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),st===!0&&U.cameras.push(Rt)}let it=r.enabledFeatures;if(it&&it.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let lt=u.getDepthInformation(tt[0]);lt&&lt.isValid&&lt.texture&&g.init(lt,r.renderState)}if(it&&it.includes("camera-access")&&b){t.state.unbindTexture(),u=n.getBinding();for(let lt=0;lt<tt.length;lt++){let dt=tt[lt].camera;if(dt){let Dt=p[dt];Dt||(Dt=new as,p[dt]=Dt);let Rt=u.getCameraImage(dt);Dt.sourceTexture=Rt}}}}for(let tt=0;tt<M.length;tt++){let st=w[tt],it=M[tt];st!==null&&it!==void 0&&it.update(st,W,c||s)}K&&K(H,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),m=null}let at=new Op;at.setAnimationLoop(J),this.setAnimationLoop=function(H){K=H},this.dispose=function(){}}},O_=new Se,Vp=new te;Vp.set(-1,0,0,0,1,0,0,0,1);function N_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ah(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,x,y,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?o(g,p):p.isMeshLambertMaterial?(o(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(o(g,p),u(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(o(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),b(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=t.get(p),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Vp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function U_(i,t,e,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let w=M.program;n.uniformBlockBinding(v,w)}function c(v,M){let w=r[v.id];w===void 0&&(g(v),w=h(v),r[v.id]=w,v.addEventListener("dispose",x));let T=M.program;n.updateUBOMapping(v,T);let _=t.render.frame;o[v.id]!==_&&(f(v),o[v.id]=_)}function h(v){let M=u();v.__bindingPointIndex=M;let w=i.createBuffer(),T=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,T,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function u(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=r[v.id],w=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,A=w.length;_<A;_++){let E=w[_];if(Array.isArray(E))for(let S=0,P=E.length;S<P;S++)d(E[S],_,S,T);else d(E,_,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,w,T){if(b(v,M,w,T)===!0){let _=v.__offset,A=v.value;if(Array.isArray(A)){let E=0;for(let S=0;S<A.length;S++){let P=A[S],U=p(P);m(P,v.__data,E),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(E+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function m(v,M,w){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,w)}function b(v,M,w,T){let _=v.value,A=M+"_"+w;if(T[A]===void 0)return typeof _=="number"||typeof _=="boolean"?T[A]=_:ArrayBuffer.isView(_)?T[A]=_.slice():T[A]=_.clone(),!0;{let E=T[A];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return T[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function g(v){let M=v.uniforms,w=0,T=16;for(let A=0,E=M.length;A<E;A++){let S=Array.isArray(M[A])?M[A]:[M[A]];for(let P=0,U=S.length;P<U;P++){let L=S[P],R=Array.isArray(L.value)?L.value:[L.value];for(let C=0,F=R.length;C<F;C++){let D=R[C],N=p(D),k=w%T,V=k%N.boundary,X=k+V;w+=V,X!==0&&T-X<N.storage&&(w+=T-X),L.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=N.storage}}}let _=w%T;return _>0&&(w+=T-_),v.__size=w,v.__cache={},this}function p(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",v),M}function x(v){let M=v.target;M.removeEventListener("dispose",x);let w=s.indexOf(M.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function y(){for(let v in r)i.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:c,dispose:y}}var B_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;function k_(){return li===null&&(li=new Ja(B_,16,16,qi,Yn),li.name="DFG_LUT",li.minFilter=Xe,li.magFilter=Xe,li.wrapS=Mn,li.wrapT=Mn,li.generateMipmaps=!1,li.needsUpdate=!0),li}var _r=class{constructor(t={}){let{canvas:e=ep(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=En}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;let b=d,g=new Set([El,Tl,Sl]),p=new Set([En,Wn,bo,xo,Ml,wl]),x=new Uint32Array(4),y=new Int32Array(4),v=new Y,M=null,w=null,T=[],_=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,S=!1,P=null,U=null,L=null,R=null;this._outputColorSpace=Ne;let C=0,F=0,D=null,N=-1,k=null,V=new Be,X=new Be,z=null,K=new j(0),J=0,at=e.width,H=e.height,W=1,tt=null,st=null,it=new Be(0,0,at,H),ht=new Be(0,0,at,H),gt=!1,lt=new os,dt=!1,Dt=!1,Rt=new Se,ne=new Y,pe=new Be,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_e=!1;function Oe(){return D===null?W:1}let $=n;function Ge(B,q){return e.getContext(B,q)}let ge,G,I,Q,rt,ct,xt,vt,ut,pt,yt,Gt,St,_t,Ht,Yt,oe,Z,Mt,ft,wt,Pt,bt;try{let B={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Nn,!1),$===null){let q="webgl2";if($=Ge(q,B),$===null)throw Ge(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(B){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),$t("WebGLRenderer: "+B.message),B}function Wt(){ge=new Yy($),ge.init(),wt=new L_($,ge),G=new Ny($,ge,t,wt),I=new P_($,ge),G.reversedDepthBuffer&&f&&I.buffers.depth.setReversed(!0),U=$.createFramebuffer(),L=$.createFramebuffer(),R=$.createFramebuffer(),Q=new Zy($),rt=new g_,ct=new I_($,ge,I,rt,G,wt,Q),xt=new Xy(E),vt=new Jb($),Pt=new Dy($,vt),ut=new qy($,vt,Q,Pt),pt=new Jy($,ut,vt,Pt,Q),Z=new Ky($,G,ct),Ht=new Uy(rt),yt=new m_(E,xt,ge,G,Pt,Ht),Gt=new N_(E,rt),St=new x_,_t=new S_(ge),oe=new Fy(E,xt,I,pt,m,l),Yt=new C_(E,pt,G),bt=new U_($,Q,G,I),Mt=new Oy($,ge,Q),ft=new $y($,ge,Q),Q.programs=yt.programs,E.capabilities=G,E.extensions=ge,E.properties=rt,E.renderLists=St,E.shadowMap=Yt,E.state=I,E.info=Q}b!==En&&(A=new Qy(b,e.width,e.height,a,r,o));let Bt=new Ph(E,$);this.xr=Bt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let B=ge.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){let B=ge.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(B){B!==void 0&&(W=B,this.setSize(at,H,!1))},this.getSize=function(B){return B.set(at,H)},this.setSize=function(B,q,ot=!0){if(Bt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}at=B,H=q,e.width=Math.floor(B*W),e.height=Math.floor(q*W),ot===!0&&(e.style.width=B+"px",e.style.height=q+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,B,q)},this.getDrawingBufferSize=function(B){return B.set(at*W,H*W).floor()},this.setDrawingBufferSize=function(B,q,ot){at=B,H=q,W=ot,e.width=Math.floor(B*ot),e.height=Math.floor(q*ot),this.setViewport(0,0,B,q)},this.setEffects=function(B){if(b===En){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let q=0;q<B.length;q++)if(B[q].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(V)},this.getViewport=function(B){return B.copy(it)},this.setViewport=function(B,q,ot,et){B.isVector4?it.set(B.x,B.y,B.z,B.w):it.set(B,q,ot,et),I.viewport(V.copy(it).multiplyScalar(W).round())},this.getScissor=function(B){return B.copy(ht)},this.setScissor=function(B,q,ot,et){B.isVector4?ht.set(B.x,B.y,B.z,B.w):ht.set(B,q,ot,et),I.scissor(X.copy(ht).multiplyScalar(W).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(B){I.setScissorTest(gt=B)},this.setOpaqueSort=function(B){tt=B},this.setTransparentSort=function(B){st=B},this.getClearColor=function(B){return B.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(B=!0,q=!0,ot=!0){let et=0;if(B){let nt=!1;if(D!==null){let Ct=D.texture.format;nt=g.has(Ct)}if(nt){let Ct=D.texture.type,Ft=p.has(Ct),Et=oe.getClearColor(),Nt=oe.getClearAlpha(),kt=Et.r,se=Et.g,le=Et.b;Ft?(x[0]=kt,x[1]=se,x[2]=le,x[3]=Nt,$.clearBufferuiv($.COLOR,0,x)):(y[0]=kt,y[1]=se,y[2]=le,y[3]=Nt,$.clearBufferiv($.COLOR,0,y))}else et|=$.COLOR_BUFFER_BIT}q&&(et|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(et|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&$.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),P=B},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),oe.dispose(),St.dispose(),_t.dispose(),rt.dispose(),xt.dispose(),pt.dispose(),Pt.dispose(),bt.dispose(),yt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Df),Bt.removeEventListener("sessionend",Of),sr.stop()};function Ae(B){B.preventDefault(),Qo("WebGLRenderer: Context Lost."),S=!0}function xe(){Qo("WebGLRenderer: Context Restored."),S=!1;let B=Q.autoReset,q=Yt.enabled,ot=Yt.autoUpdate,et=Yt.needsUpdate,nt=Yt.type;Wt(),Q.autoReset=B,Yt.enabled=q,Yt.autoUpdate=ot,Yt.needsUpdate=et,Yt.type=nt}function Nn(B){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function Jn(B){let q=B.target;q.removeEventListener("dispose",Jn),Xg(q)}function Xg(B){Yg(B),rt.remove(B)}function Yg(B){let q=rt.get(B).programs;q!==void 0&&(q.forEach(function(ot){yt.releaseProgram(ot)}),B.isShaderMaterial&&yt.releaseShaderCache(B))}this.renderBufferDirect=function(B,q,ot,et,nt,Ct){q===null&&(q=de);let Ft=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,Et=Zg(B,q,ot,et,nt);I.setMaterial(et,Ft);let Nt=ot.index,kt=1;if(et.wireframe===!0){if(Nt=ut.getWireframeAttribute(ot),Nt===void 0)return;kt=2}let se=ot.drawRange,le=ot.attributes.position,Ut=se.start*kt,ve=(se.start+se.count)*kt;Ct!==null&&(Ut=Math.max(Ut,Ct.start*kt),ve=Math.min(ve,(Ct.start+Ct.count)*kt)),Nt!==null?(Ut=Math.max(Ut,0),ve=Math.min(ve,Nt.count)):le!=null&&(Ut=Math.max(Ut,0),ve=Math.min(ve,le.count));let He=ve-Ut;if(He<0||He===1/0)return;Pt.setup(nt,et,Et,ot,Nt);let Ie,Te=Mt;if(Nt!==null&&(Ie=vt.get(Nt),Te=ft,Te.setIndex(Ie)),nt.isMesh)et.wireframe===!0?(I.setLineWidth(et.wireframeLinewidth*Oe()),Te.setMode($.LINES)):Te.setMode($.TRIANGLES);else if(nt.isLine){let ln=et.linewidth;ln===void 0&&(ln=1),I.setLineWidth(ln*Oe()),nt.isLineSegments?Te.setMode($.LINES):nt.isLineLoop?Te.setMode($.LINE_LOOP):Te.setMode($.LINE_STRIP)}else nt.isPoints?Te.setMode($.POINTS):nt.isSprite&&Te.setMode($.TRIANGLES);if(nt.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))Te.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let ln=nt._multiDrawStarts,Lt=nt._multiDrawCounts,mn=nt._multiDrawCount,me=Nt?vt.get(Nt).bytesPerElement:1,Cn=rt.get(et).currentProgram.getUniforms();for(let jn=0;jn<mn;jn++)Cn.setValue($,"_gl_DrawID",jn),Te.render(ln[jn]/me,Lt[jn])}else if(nt.isInstancedMesh)Te.renderInstances(Ut,He,nt.count);else if(ot.isInstancedBufferGeometry){let ln=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Lt=Math.min(ot.instanceCount,ln);Te.renderInstances(Ut,He,Lt)}else Te.render(Ut,He)};function Ff(B,q,ot,et){P!==null&&B.isNodeMaterial&&P.setObject(et,B),dt===!0&&Ht.setState(B,ot,!1),B.transparent===!0&&B.side===ie&&B.forceSinglePass===!1?(B.side=rn,B.needsUpdate=!0,oa(B,q,et),B.side=ai,B.needsUpdate=!0,oa(B,q,et),B.side=ie):oa(B,q,et)}this.compile=function(B,q,ot=null){ot===null&&(ot=B),P!==null&&P.renderStart(B,q,ot),w=_t.get(ot),w.init(q),_.push(w),ot.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),B!==ot&&B.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),w.setupLights(),P!==null&&P.updateLights(w.state.lightsArray),Dt=this.localClippingEnabled,dt=Ht.init(this.clippingPlanes,Dt),dt===!0&&Ht.setGlobalState(this.clippingPlanes,q),P!==null&&Yt.render(w.state.shadowsArray,ot,q);let et=new Set;return B.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Ct=nt.material;if(Ct)if(Array.isArray(Ct))for(let Ft=0;Ft<Ct.length;Ft++){let Et=Ct[Ft];Ff(Et,ot,q,nt),et.add(Et)}else Ff(Ct,ot,q,nt),et.add(Ct)}),w=_.pop(),P!==null&&P.renderEnd(),et},this.compileAsync=function(B,q,ot=null){let et=this.compile(B,q,ot);return new Promise(nt=>{function Ct(){if(et.forEach(function(Ft){let Nt=rt.get(Ft).currentProgram;(Nt===void 0||Nt.isReady())&&et.delete(Ft)}),et.size===0){nt(B);return}setTimeout(Ct,10)}ge.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let tu=null;function qg(B){tu&&tu(B)}function Df(){sr.stop()}function Of(){sr.start()}let sr=new Op;sr.setAnimationLoop(qg),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(B){tu=B,Bt.setAnimationLoop(B),B===null?sr.stop():sr.start()},Bt.addEventListener("sessionstart",Df),Bt.addEventListener("sessionend",Of),this.render=function(B,q){if(q!==void 0&&q.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;P!==null&&P.renderStart(B,q);let ot=Bt.enabled===!0&&Bt.isPresenting===!0,et=A!==null&&(D===null||ot)&&A.begin(E,D);if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(q),q=Bt.getCamera()),B.isScene===!0&&B.onBeforeRender(E,B,q,D),w=_t.get(B,_.length),w.init(q),w.state.textureUnits=ct.getTextureUnits(),_.push(w),Rt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),lt.setFromProjectionMatrix(Rt,Vn,q.reversedDepth),Dt=this.localClippingEnabled,dt=Ht.init(this.clippingPlanes,Dt),M=St.get(B,T.length),M.init(),T.push(M),Bt.enabled===!0&&Bt.isPresenting===!0){let Ft=E.xr.getDepthSensingMesh();Ft!==null&&eu(Ft,q,-1/0,E.sortObjects)}eu(B,q,0,E.sortObjects),M.finish(),P!==null&&P.updateLights(w.state.lightsArray),E.sortObjects===!0&&M.sort(tt,st),_e=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,_e&&oe.addToRenderList(M,B),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&Ht.beginShadows();let nt=w.state.shadowsArray;if(Yt.render(nt,B,q),dt===!0&&Ht.endShadows(),(et&&A.hasRenderPass())===!1){let Ft=M.opaque,Et=M.transmissive;if(w.setupLights(),q.isArrayCamera){let Nt=q.cameras;if(Et.length>0)for(let kt=0,se=Nt.length;kt<se;kt++){let le=Nt[kt];Uf(Ft,Et,B,le)}_e&&oe.render(B);for(let kt=0,se=Nt.length;kt<se;kt++){let le=Nt[kt];Nf(M,B,le,le.viewport)}}else Et.length>0&&Uf(Ft,Et,B,q),_e&&oe.render(B),Nf(M,B,q)}D!==null&&F===0&&(ct.updateMultisampleRenderTarget(D),ct.updateRenderTargetMipmap(D)),et&&A.end(E),B.isScene===!0&&B.onAfterRender(E,B,q),Pt.resetDefaultState(),N=-1,k=null,_.pop(),_.length>0?(w=_[_.length-1],ct.setTextureUnits(w.state.textureUnits),dt===!0&&Ht.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?M=T[T.length-1]:M=null,P!==null&&P.renderEnd()};function eu(B,q,ot,et){if(B.visible===!1)return;if(B.layers.test(q.layers)){if(B.isGroup)ot=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(q);else if(B.isLightProbeGrid)w.pushLightProbeGrid(B);else if(B.isLight)w.pushLight(B),B.castShadow&&w.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||B.intersectsFrustum(lt)){et&&pe.setFromMatrixPosition(B.matrixWorld).applyMatrix4(Rt);let Ft=pt.update(B),Et=B.material;Et.visible&&M.push(B,Ft,Et,ot,pe.z,null,q)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||B.intersectsFrustum(lt))){let Ft=pt.update(B),Et=B.material;if(et&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),pe.copy(B.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),pe.copy(Ft.boundingSphere.center)),pe.applyMatrix4(B.matrixWorld).applyMatrix4(Rt)),Array.isArray(Et)){let Nt=Ft.groups;for(let kt=0,se=Nt.length;kt<se;kt++){let le=Nt[kt],Ut=Et[le.materialIndex];Ut&&Ut.visible&&M.push(B,Ft,Ut,ot,pe.z,le,q)}}else Et.visible&&M.push(B,Ft,Et,ot,pe.z,null,q)}}let Ct=B.children;for(let Ft=0,Et=Ct.length;Ft<Et;Ft++)eu(Ct[Ft],q,ot,et)}function Nf(B,q,ot,et){let{opaque:nt,transmissive:Ct,transparent:Ft}=B;w.setupLightsView(ot),dt===!0&&Ht.setGlobalState(E.clippingPlanes,ot),et&&I.viewport(V.copy(et)),nt.length>0&&ra(nt,q,ot),Ct.length>0&&ra(Ct,q,ot),Ft.length>0&&ra(Ft,q,ot),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Uf(B,q,ot,et){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[et.id]===void 0){let Ut=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[et.id]=new Ye(1,1,{generateMipmaps:!0,type:Ut?Yn:En,minFilter:Xi,samples:Math.max(4,G.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let Ct=w.state.transmissionRenderTarget[et.id],Ft=et.viewport||V;Ct.setSize(Ft.z*E.transmissionResolutionScale,Ft.w*E.transmissionResolutionScale);let Et=E.getRenderTarget(),Nt=E.getActiveCubeFace(),kt=E.getActiveMipmapLevel();E.setRenderTarget(Ct),E.getClearColor(K),J=E.getClearAlpha(),J<1&&E.setClearColor(16777215,.5),E.clear(),_e&&oe.render(ot);let se=E.toneMapping;E.toneMapping=Hn;let le=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),w.setupLightsView(et),dt===!0&&Ht.setGlobalState(E.clippingPlanes,et),ra(B,ot,et),ct.updateMultisampleRenderTarget(Ct),ct.updateRenderTargetMipmap(Ct),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let ve=0,He=q.length;ve<He;ve++){let Ie=q[ve],{object:Te,geometry:ln,material:Lt,group:mn}=Ie;if(Lt.side===ie&&Te.layers.test(et.layers)){let me=Lt.side;Lt.side=rn,Lt.needsUpdate=!0,Bf(Te,ot,et,ln,Lt,mn),Lt.side=me,Lt.needsUpdate=!0,Ut=!0}}Ut===!0&&(ct.updateMultisampleRenderTarget(Ct),ct.updateRenderTargetMipmap(Ct))}E.setRenderTarget(Et,Nt,kt),E.setClearColor(K,J),le!==void 0&&(et.viewport=le),E.toneMapping=se}function ra(B,q,ot){let et=q.isScene===!0?q.overrideMaterial:null;for(let nt=0,Ct=B.length;nt<Ct;nt++){let Ft=B[nt],{object:Et,geometry:Nt,group:kt}=Ft,se=Ft.material;se.allowOverride===!0&&et!==null&&(se=et),Et.layers.test(ot.layers)&&Bf(Et,q,ot,Nt,se,kt)}}function Bf(B,q,ot,et,nt,Ct){P!==null&&nt.isNodeMaterial&&P.setObject(B,nt),B.onBeforeRender(E,q,ot,et,nt,Ct),B.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),nt.onBeforeRender(E,q,ot,et,B,Ct),nt.transparent===!0&&nt.side===ie&&nt.forceSinglePass===!1?(nt.side=rn,nt.needsUpdate=!0,E.renderBufferDirect(ot,q,et,nt,B,Ct),nt.side=ai,nt.needsUpdate=!0,E.renderBufferDirect(ot,q,et,nt,B,Ct),nt.side=ie):E.renderBufferDirect(ot,q,et,nt,B,Ct),B.onAfterRender(E,q,ot,et,nt,Ct)}function oa(B,q,ot){q.isScene!==!0&&(q=de);let et=rt.get(B),nt=w.state.lights,Ct=w.state.shadowsArray,Ft=nt.state.version,Et=yt.getParameters(B,nt.state,Ct,q,ot,w.state.lightProbeGridArray),Nt=yt.getProgramCacheKey(Et),kt=et.programs;et.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?q.environment:null,et.fog=q.fog;let se=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;et.envMap=xt.get(B.envMap||et.environment,se),et.envMapRotation=et.environment!==null&&B.envMap===null?q.environmentRotation:B.envMapRotation,kt===void 0&&(B.addEventListener("dispose",Jn),kt=new Map,et.programs=kt);let le=kt.get(Nt);if(le!==void 0){if(et.currentProgram===le&&et.lightsStateVersion===Ft)return zf(B,Et),le}else Et.uniforms=yt.getUniforms(B),P!==null&&B.isNodeMaterial&&P.build(B,ot,Et),B.onBeforeCompile(Et,E),le=yt.acquireProgram(Et,Nt),kt.set(Nt,le),et.uniforms=Et.uniforms;let Ut=et.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(Ut.clippingPlanes=Ht.uniform),zf(B,Et),et.needsLights=Jg(B),et.lightsStateVersion=Ft,et.needsLights&&(Ut.ambientLightColor.value=nt.state.ambient,Ut.lightProbe.value=nt.state.probe,Ut.sunLights.value=nt.state.sun,Ut.sunLightShadows.value=nt.state.sunShadow,Ut.directionalLights.value=nt.state.directional,Ut.directionalLightShadows.value=nt.state.directionalShadow,Ut.spotLights.value=nt.state.spot,Ut.spotLightShadows.value=nt.state.spotShadow,Ut.rectAreaLights.value=nt.state.rectArea,Ut.ltc_1.value=nt.state.rectAreaLTC1,Ut.ltc_2.value=nt.state.rectAreaLTC2,Ut.pointLights.value=nt.state.point,Ut.pointLightShadows.value=nt.state.pointShadow,Ut.hemisphereLights.value=nt.state.hemi,Ut.sunShadowMatrix.value=nt.state.sunShadowMatrix,Ut.sunShadowCascade.value=nt.state.sunShadowCascade,Ut.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Ut.spotLightMatrix.value=nt.state.spotLightMatrix,Ut.spotLightMap.value=nt.state.spotLightMap,Ut.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=w.state.lightProbeGridArray.length>0,et.currentProgram=le,et.uniformsList=null,le}function kf(B){if(B.uniformsList===null){let q=B.currentProgram.getUniforms();B.uniformsList=_o.seqWithValue(q.seq,B.uniforms)}return B.uniformsList}function zf(B,q){let ot=rt.get(B);ot.outputColorSpace=q.outputColorSpace,ot.batching=q.batching,ot.batchingColor=q.batchingColor,ot.instancing=q.instancing,ot.instancingColor=q.instancingColor,ot.instancingMorph=q.instancingMorph,ot.skinning=q.skinning,ot.morphTargets=q.morphTargets,ot.morphNormals=q.morphNormals,ot.morphColors=q.morphColors,ot.morphTargetsCount=q.morphTargetsCount,ot.numClippingPlanes=q.numClippingPlanes,ot.numIntersection=q.numClipIntersection,ot.vertexAlphas=q.vertexAlphas,ot.vertexTangents=q.vertexTangents,ot.toneMapping=q.toneMapping}function $g(B,q){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;v.setFromMatrixPosition(q.matrixWorld);for(let ot=0,et=B.length;ot<et;ot++){let nt=B[ot];if(nt.texture!==null&&nt.boundingBox.containsPoint(v))return nt}return null}function Zg(B,q,ot,et,nt){q.isScene!==!0&&(q=de),ct.resetTextureUnits();let Ct=q.fog,Ft=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?q.environment:null,Et=D===null?E.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ce.workingColorSpace,Nt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,kt=xt.get(et.envMap||Ft,Nt),se=et.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,le=!!ot.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Ut=!!ot.morphAttributes.position,ve=!!ot.morphAttributes.normal,He=!!ot.morphAttributes.color,Ie=Hn;et.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ie=E.toneMapping);let Te=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ln=Te!==void 0?Te.length:0,Lt=rt.get(et),mn=w.state.lights;if(dt===!0&&(Dt===!0||B!==k)){let Re=B===k&&et.id===N;Ht.setState(et,B,Re)}let me=!1;et.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==mn.state.version||Lt.outputColorSpace!==Et||nt.isBatchedMesh&&Lt.batching===!1||!nt.isBatchedMesh&&Lt.batching===!0||nt.isBatchedMesh&&Lt.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&Lt.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&Lt.instancing===!1||!nt.isInstancedMesh&&Lt.instancing===!0||nt.isSkinnedMesh&&Lt.skinning===!1||!nt.isSkinnedMesh&&Lt.skinning===!0||nt.isInstancedMesh&&Lt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Lt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Lt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Lt.instancingMorph===!1&&nt.morphTexture!==null||Lt.envMap!==kt||et.fog===!0&&Lt.fog!==Ct||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Ht.numPlanes||Lt.numIntersection!==Ht.numIntersection)||Lt.vertexAlphas!==se||Lt.vertexTangents!==le||Lt.morphTargets!==Ut||Lt.morphNormals!==ve||Lt.morphColors!==He||Lt.toneMapping!==Ie||Lt.morphTargetsCount!==ln||!!Lt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Lt.__version=et.version);let Cn=Lt.currentProgram;me===!0&&(Cn=oa(et,q,nt),P&&et.isNodeMaterial&&P.onUpdateProgram(et,Cn,Lt));let jn=!1,Ci=!1,Br=!1,Me=Cn.getUniforms(),ze=Lt.uniforms;if(I.useProgram(Cn.program)&&(jn=!0,Ci=!0,Br=!0),et.id!==N&&(N=et.id,Ci=!0),Lt.needsLights){let Re=$g(w.state.lightProbeGridArray,nt);Lt.lightProbeGrid!==Re&&(Lt.lightProbeGrid=Re,Ci=!0)}if(jn||k!==B){I.buffers.depth.getReversed()&&B.reversedDepth!==!0&&(B._reversedDepth=!0,B.updateProjectionMatrix()),Me.setValue($,"projectionMatrix",B.projectionMatrix),Me.setValue($,"viewMatrix",B.matrixWorldInverse);let Ii=Me.map.cameraPosition;Ii!==void 0&&Ii.setValue($,ne.setFromMatrixPosition(B.matrixWorld)),G.logarithmicDepthBuffer&&Me.setValue($,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Me.setValue($,"isOrthographic",B.isOrthographicCamera===!0),k!==B&&(k=B,Ci=!0,Br=!0)}if(Lt.needsLights&&(mn.state.sunShadowMap.length>0&&Me.setValue($,"sunShadowMap",mn.state.sunShadowMap,ct),mn.state.directionalShadowMap.length>0&&Me.setValue($,"directionalShadowMap",mn.state.directionalShadowMap,ct),mn.state.spotShadowMap.length>0&&Me.setValue($,"spotShadowMap",mn.state.spotShadowMap,ct),mn.state.pointShadowMap.length>0&&Me.setValue($,"pointShadowMap",mn.state.pointShadowMap,ct)),nt.isSkinnedMesh){Me.setOptional($,nt,"bindMatrix"),Me.setOptional($,nt,"bindMatrixInverse");let Re=nt.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Me.setValue($,"boneTexture",Re.boneTexture,ct))}nt.isBatchedMesh&&(Me.setOptional($,nt,"batchingTexture"),Me.setValue($,"batchingTexture",nt._matricesTexture,ct),Me.setOptional($,nt,"batchingIdTexture"),Me.setValue($,"batchingIdTexture",nt._indirectTexture,ct),Me.setOptional($,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Me.setValue($,"batchingColorTexture",nt._colorsTexture,ct));let Pi=ot.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&Z.update(nt,ot,Cn),(Ci||Lt.receiveShadow!==nt.receiveShadow)&&(Lt.receiveShadow=nt.receiveShadow,Me.setValue($,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&q.environment!==null&&(ze.envMapIntensity.value=q.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=k_()),Ci){if(Me.setValue($,"toneMappingExposure",E.toneMappingExposure),Lt.needsLights&&Kg(ze,Br),Ct&&et.fog===!0&&Gt.refreshFogUniforms(ze,Ct),Gt.refreshMaterialUniforms(ze,et,W,H,w.state.transmissionRenderTarget[B.id]),Lt.needsLights&&Lt.lightProbeGrid){let Re=Lt.lightProbeGrid;ze.probesSH.value=Re.texture,ze.probesMin.value.copy(Re.boundingBox.min),ze.probesMax.value.copy(Re.boundingBox.max),ze.probesResolution.value.copy(Re.resolution)}_o.upload($,kf(Lt),ze,ct)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(_o.upload($,kf(Lt),ze,ct),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Me.setValue($,"center",nt.center),Me.setValue($,"modelViewMatrix",nt.modelViewMatrix),Me.setValue($,"normalMatrix",nt.normalMatrix),Me.setValue($,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){let Re=et.uniformsGroups;for(let Ii=0,kr=Re.length;Ii<kr;Ii++){let Gf=Re[Ii];bt.update(Gf,Cn),bt.bind(Gf,Cn)}}return Cn}function Kg(B,q){B.ambientLightColor.needsUpdate=q,B.lightProbe.needsUpdate=q,B.sunLights.needsUpdate=q,B.sunLightShadows.needsUpdate=q,B.directionalLights.needsUpdate=q,B.directionalLightShadows.needsUpdate=q,B.pointLights.needsUpdate=q,B.pointLightShadows.needsUpdate=q,B.spotLights.needsUpdate=q,B.spotLightShadows.needsUpdate=q,B.rectAreaLights.needsUpdate=q,B.hemisphereLights.needsUpdate=q}function Jg(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(B,q,ot){let et=rt.get(B);et.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),rt.get(B.texture).__webglTexture=q,rt.get(B.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:ot,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,q){let ot=rt.get(B);ot.__webglFramebuffer=q,ot.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(B,q=0,ot=0){D=B,C=q,F=ot;let et=null,nt=!1,Ct=!1;if(B){let Et=rt.get(B);if(Et.__useDefaultFramebuffer!==void 0){I.bindFramebuffer($.FRAMEBUFFER,Et.__webglFramebuffer),V.copy(B.viewport),X.copy(B.scissor),z=B.scissorTest,I.viewport(V),I.scissor(X),I.setScissorTest(z),N=-1;return}else if(Et.__webglFramebuffer===void 0)ct.setupRenderTarget(B);else if(Et.__hasExternalTextures)ct.rebindTextures(B,rt.get(B.texture).__webglTexture,rt.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let se=B.depthTexture;if(Et.__boundDepthTexture!==se){if(se!==null&&rt.has(se)&&(B.width!==se.image.width||B.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(B)}}let Nt=B.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Ct=!0);let kt=rt.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(kt[q])?et=kt[q][ot]:et=kt[q],nt=!0):B.samples>0&&ct.useMultisampledRTT(B)===!1?et=rt.get(B).__webglMultisampledFramebuffer:Array.isArray(kt)?et=kt[ot]:et=kt,V.copy(B.viewport),X.copy(B.scissor),z=B.scissorTest}else V.copy(it).multiplyScalar(W).floor(),X.copy(ht).multiplyScalar(W).floor(),z=gt;if(ot!==0&&(et=U),I.bindFramebuffer($.FRAMEBUFFER,et)&&I.drawBuffers(B,et),I.viewport(V),I.scissor(X),I.setScissorTest(z),nt){let Et=rt.get(B.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+q,Et.__webglTexture,ot)}else if(Ct){let Et=q;for(let Nt=0;Nt<B.textures.length;Nt++){let kt=rt.get(B.textures[Nt]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Nt,kt.__webglTexture,ot,Et)}}else if(B!==null&&ot!==0){let Et=rt.get(B.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Et.__webglTexture,ot)}N=-1};function Vf(B){let q=rt.get(B);return(q.__readFormat!==B.format||q.__readType!==B.type)&&(q.__readFormat=B.format,q.__readType=B.type,q.__formatReadable=G.textureFormatReadable(B.format),q.__typeReadable=G.textureTypeReadable(B.type)),q}this.readRenderTargetPixels=function(B,q,ot,et,nt,Ct,Ft,Et=0){if(!(B&&B.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=rt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft]),Nt){I.bindFramebuffer($.FRAMEBUFFER,Nt);try{let kt=B.textures[Et],se=kt.format,le=kt.type;B.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Et);let Ut=Vf(kt);if(Ut.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=B.width-et&&ot>=0&&ot<=B.height-nt&&$.readPixels(q,ot,et,nt,wt.convert(se),wt.convert(le),Ct)}finally{let kt=D!==null?rt.get(D).__webglFramebuffer:null;I.bindFramebuffer($.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(B,q,ot,et,nt,Ct,Ft,Et=0){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=rt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft]),Nt)if(q>=0&&q<=B.width-et&&ot>=0&&ot<=B.height-nt){I.bindFramebuffer($.FRAMEBUFFER,Nt);let kt=B.textures[Et],se=kt.format,le=kt.type;B.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Et);let Ut=Vf(kt);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,ve),$.bufferData($.PIXEL_PACK_BUFFER,Ct.byteLength,$.STREAM_READ),$.readPixels(q,ot,et,nt,wt.convert(se),wt.convert(le),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);let He=D!==null?rt.get(D).__webglFramebuffer:null;I.bindFramebuffer($.FRAMEBUFFER,He);let Ie=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await ip($,Ie,4),$.bindBuffer($.PIXEL_PACK_BUFFER,ve),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Ct),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(ve),$.deleteSync(Ie),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,q=null,ot=0){let et=Math.pow(2,-ot),nt=Math.floor(B.image.width*et),Ct=Math.floor(B.image.height*et),Ft=q!==null?q.x:0,Et=q!==null?q.y:0;ct.setTexture2D(B,0),$.copyTexSubImage2D($.TEXTURE_2D,ot,0,0,Ft,Et,nt,Ct),I.unbindTexture()},this.copyTextureToTexture=function(B,q,ot=null,et=null,nt=0,Ct=0){let Ft,Et,Nt,kt,se,le,Ut,ve,He,Ie=B.isCompressedTexture?B.mipmaps[Ct]:B.image;if(ot!==null)Ft=ot.max.x-ot.min.x,Et=ot.max.y-ot.min.y,Nt=ot.isBox3?ot.max.z-ot.min.z:1,kt=ot.min.x,se=ot.min.y,le=ot.isBox3?ot.min.z:0;else{let ze=Math.pow(2,-nt);Ft=Math.floor(Ie.width*ze),Et=Math.floor(Ie.height*ze),B.isDataArrayTexture?Nt=Ie.depth:B.isData3DTexture?Nt=Math.floor(Ie.depth*ze):Nt=1,kt=0,se=0,le=0}et!==null?(Ut=et.x,ve=et.y,He=et.z):(Ut=0,ve=0,He=0);let Te=wt.convert(q.format),ln=wt.convert(q.type),Lt;q.isData3DTexture?(ct.setTexture3D(q,0),Lt=$.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ct.setTexture2DArray(q,0),Lt=$.TEXTURE_2D_ARRAY):(ct.setTexture2D(q,0),Lt=$.TEXTURE_2D),I.activeTexture($.TEXTURE0),I.pixelStorei($.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei($.UNPACK_ALIGNMENT,q.unpackAlignment);let mn=I.getParameter($.UNPACK_ROW_LENGTH),me=I.getParameter($.UNPACK_IMAGE_HEIGHT),Cn=I.getParameter($.UNPACK_SKIP_PIXELS),jn=I.getParameter($.UNPACK_SKIP_ROWS),Ci=I.getParameter($.UNPACK_SKIP_IMAGES);I.pixelStorei($.UNPACK_ROW_LENGTH,Ie.width),I.pixelStorei($.UNPACK_IMAGE_HEIGHT,Ie.height),I.pixelStorei($.UNPACK_SKIP_PIXELS,kt),I.pixelStorei($.UNPACK_SKIP_ROWS,se),I.pixelStorei($.UNPACK_SKIP_IMAGES,le);let Br=B.isDataArrayTexture||B.isData3DTexture,Me=q.isDataArrayTexture||q.isData3DTexture;if(B.isDepthTexture){let ze=rt.get(B),Pi=rt.get(q),Re=rt.get(ze.__renderTarget),Ii=rt.get(Pi.__renderTarget);I.bindFramebuffer($.READ_FRAMEBUFFER,Re.__webglFramebuffer),I.bindFramebuffer($.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let kr=0;kr<Nt;kr++)Br&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,rt.get(B).__webglTexture,nt,le+kr),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,rt.get(q).__webglTexture,Ct,He+kr)),$.blitFramebuffer(kt,se,Ft,Et,Ut,ve,Ft,Et,$.DEPTH_BUFFER_BIT,$.NEAREST);I.bindFramebuffer($.READ_FRAMEBUFFER,null),I.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(nt!==0||B.isRenderTargetTexture||rt.has(B)){let ze=rt.get(B),Pi=rt.get(q);I.bindFramebuffer($.READ_FRAMEBUFFER,L),I.bindFramebuffer($.DRAW_FRAMEBUFFER,R);for(let Re=0;Re<Nt;Re++)Br?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ze.__webglTexture,nt,le+Re):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,ze.__webglTexture,nt),Me?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Pi.__webglTexture,Ct,He+Re):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Pi.__webglTexture,Ct),nt!==0?$.blitFramebuffer(kt,se,Ft,Et,Ut,ve,Ft,Et,$.COLOR_BUFFER_BIT,$.NEAREST):Me?$.copyTexSubImage3D(Lt,Ct,Ut,ve,He+Re,kt,se,Ft,Et):$.copyTexSubImage2D(Lt,Ct,Ut,ve,kt,se,Ft,Et);I.bindFramebuffer($.READ_FRAMEBUFFER,null),I.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Me?B.isDataTexture||B.isData3DTexture?$.texSubImage3D(Lt,Ct,Ut,ve,He,Ft,Et,Nt,Te,ln,Ie.data):q.isCompressedArrayTexture?$.compressedTexSubImage3D(Lt,Ct,Ut,ve,He,Ft,Et,Nt,Te,Ie.data):$.texSubImage3D(Lt,Ct,Ut,ve,He,Ft,Et,Nt,Te,ln,Ie):B.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Ct,Ut,ve,Ft,Et,Te,ln,Ie.data):B.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Ct,Ut,ve,Ie.width,Ie.height,Te,Ie.data):$.texSubImage2D($.TEXTURE_2D,Ct,Ut,ve,Ft,Et,Te,ln,Ie);I.pixelStorei($.UNPACK_ROW_LENGTH,mn),I.pixelStorei($.UNPACK_IMAGE_HEIGHT,me),I.pixelStorei($.UNPACK_SKIP_PIXELS,Cn),I.pixelStorei($.UNPACK_SKIP_ROWS,jn),I.pixelStorei($.UNPACK_SKIP_IMAGES,Ci),Ct===0&&q.generateMipmaps&&$.generateMipmap(Lt),I.unbindTexture()},this.initRenderTarget=function(B){rt.get(B).__webglFramebuffer===void 0&&ct.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?ct.setTextureCube(B,0):B.isData3DTexture?ct.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?ct.setTexture2DArray(B,0):ct.setTexture2D(B,0),I.unbindTexture()},this.resetState=function(){C=0,F=0,D=null,I.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};function Gp(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function Hp(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let o=t[r];o<=0||(i[r*3]=Math.min(1,n[0]*o),i[r*3+1]=Math.min(1,n[1]*o),i[r*3+2]=Math.min(1,n[2]*o))}}function Wp(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var z_=[],Xp=new Map,V_=0;function Ps(i){z_=i,Xp=new Map(i.flatMap(t=>t.items.map(e=>[G_(t.id,e.id),e]))),V_++}function G_(i,t){return`pack:${i}:${t}`}function hc(i){return i.startsWith("pack:")}function fc(i){return hc(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function Ih(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}function Yp(i){return i==="robot_vacuum"||hc(i)&&i.endsWith(":robot_vacuum")}function Is(i){return i.z>.05}function qp(i){let t=(i?.parts??[]).filter(e=>e.shape==="cyl"&&Is(e));return t.length?t.reduce((e,n)=>n.w*n.d>e.w*e.d?n:e).z:.227}function $p(i){return be(i)?.parts.find(t=>t.screen)}function be(i){if(hc(i))return Xp.get(i)}function on(i,t){let e=be(t.type);if(t.mount_y!=null)return t.mount_y;let n=jp(t,i.height);if(n!==null)return n;if(t.type==="lamp_wall")return pc;if(Zp.has(t.type))return Math.max(0,i.height-Kp(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return Mr(i,t)+Jp(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?Mr(i,t):wr(t)||Mr(i,t)}}function Mr(i,t){let e=i.rooms.filter(n=>n.points.length>=3);return!e.length||e.some(n=>Zt([t.x,t.z],n.points))?0:dc(i,t.x,t.z)}var wo={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function qn(i){return i==="hedge"||i==="fence"||i==="pergola"}function Lh(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!qn(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function gc(i){return[...i.rooms,...Lh(i)]}function W_(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",o=(c,h)=>r==="x"?c:r==="-x"?-c:r==="z"?h:-h,s=1/0,a=-1/0;for(let[c,h]of i.points){let u=o(c,h);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(t,e)-s)/(a-s)));return n*l}function X_(i,t,e,n){return Sr(i,t)+wo[t.type]-Ls(i,t,e,n)}var Fh=-.2,mc={set:!1,level:Fh};function t0(i){let t=i?.settings.terrain??null;mc={set:t?.level!=null,level:t?.level??Fh}}function So(i,t){return mc.level}function e0(i){return i.elevation>.3?0:mc.set?mc.level-i.elevation:Fh}function Sr(i,t){return e0(i)+(t.offset??0)}function Ls(i,t,e,n){return t.type==="pool"?0:W_(t,e,n)}function dc(i,t,e){let n=(i.outdoor??[]).filter(o=>!qn(o.type)&&o.type!=="pool"&&Zt([t,e],o.points)),r=[...n].reverse().find(o=>o.cut)??n[0];return r?X_(i,r,t,e):e0(i)}function bc(i,t){return Sr(i,t)+(t.above?i0(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function Y_(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?i0(i):1.5}function Dh(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!qn(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>Zt(n,e.points)))}function n0(i,t){return!t.above&&!Dh(i,t)?xc(i,t)-.05:bc(i,t)-Y_(t)}function xc(i,t){return bc(i,t)-.15}function i0(i){return i.height&&i.height>.3?i.height:1.2}var q_={type:"none",pitch:35,overhang:.4},a3={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...q_}};var r0=.3;var o0=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),pc=1.75;var Zp=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function Kp(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var s0=new Set(["stairs","stairs_u"]);function a0(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,o=r-1,s=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),h=(t-c)/o;return{n,k:r,steps1:o,steps2:s,gap:a,fw:l,landing:c,run:h,rise:e/n}}function l0(i){return o0.has(i)||!!be(i)?.light}var $_=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function wr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return i.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Qp=.04,Z_=1.2;function Jp(i,t,e,n=0){let r=0;for(let o of i.furniture)!($_.has(o.type)||be(o.type)?.surface)||!Zt([t,e],Ki(o))||o.type==="worktop"&&n>0&&o.h-Qp>=Z_&&n<=o.h-Qp-.02||(r=Math.max(r,o.h));return r}var vc=new Set(["wall_switch","wall_socket"]),K_=4;function c0(i){let t=(i.gangs??[]).slice(0,K_);return t.length?t:[{entity:null}]}function jp(i,t){return i.type==="wifi_ap"?i.variant==="wall"?2.1:Math.max(0,t-i.h):i.type==="water_heater"?i.variant==="wall"?1.1:0:null}var H_=new Set([...o0,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var J_=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],j_=["standard","bars","glass_wall"];function $i(i,t){return i.type==="door"?i.style&&J_.includes(i.style)?i.style:t?"front":"interior":i.style&&j_.includes(i.style)?i.style:"standard"}function u0(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",o=i-.04,s=Math.min(1.05,Math.max(.6,o-(r?.6:.3))),a=(o-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let h=o-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function h0(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function An(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[o,s]=i[(e+1)%i.length];t+=n*s-o*r}return t/2}function $n(i){return Math.abs(An(i))}function Zi(i){let t=An(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;e+=(o+a)*c,n+=(s+l)*c}return[e/(6*t),n/(6*t)]}function f0(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,o]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function d0(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[o,s]of i)t=Math.min(t,o),e=Math.min(e,s),n=Math.max(n,o),r=Math.max(r,s);return{x0:t,z0:e,x1:n,z1:r}}function Ki(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*e-a*n,i.z+s*n+a*e])}function Zt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[o,s]=t[n],[a,l]=t[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(e=!e)}return e}function Nh(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],o=n*n+r*r,s=o>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/o)):0;return i.h0+(i.h1-i.h0)*s}var ke=(i,t)=>[i[0]-t[0],i[1]-t[1]],ui=(i,t)=>[i[0]+t[0],i[1]+t[1]],Dn=(i,t)=>[i[0]*t,i[1]*t],Er=(i,t)=>i[0]*t[0]+i[1]*t[1],Tr=(i,t)=>i[0]*t[1]-i[1]*t[0],Fs=i=>Math.hypot(i[0],i[1]),Rn=i=>{let t=Fs(i)||1;return[i[0]/t,i[1]/t]},Oh=i=>[-i[1],i[0]],p0=i=>[i[1],-i[0]];function hi(i,t,e=[]){let n=t.eps??.005,r=[],o=e.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),s=[],a=S=>{for(let P=0;P<s.length;P++)if(Math.abs(s[P][0]-S[0])<=n&&Math.abs(s[P][1]-S[1])<=n)return P;return s.push([S[0],S[1]]),s.length-1},l=[];for(let S of i){let P=S.points;if(P.length<3||Math.abs(An(P))<1e-6)continue;let U=An(P)>0,L=P.map(a);for(let R=0;R<P.length;R++){let C=L[R],F=L[(R+1)%P.length];C!==F&&l.push(U?{u:C,v:F,room:S.id,edge:R,forward:!0}:{u:F,v:C,room:S.id,edge:R,forward:!1})}}let c=o.map(S=>[a(S.a),a(S.b)]),h=new Set;for(let S of i){let P=S.points;P.length<3||(S.wall_splits??[]).forEach((U,L)=>{if(!U||L>=P.length)return;let R=P[L],C=ke(P[(L+1)%P.length],R),F=Fs(C);for(let D of U)D>n&&D<F-n&&h.add(a(ui(R,Dn(C,D/F))))})}let u=[];for(let S of l){let P=s[S.u],U=s[S.v],L=ke(U,P),R=Fs(L),C=Dn(L,1/R),F=[];for(let N=0;N<s.length;N++){if(N===S.u||N===S.v)continue;let k=ke(s[N],P),V=Er(k,C);V<=n||V>=R-n||Math.abs(Tr(C,k))<=n&&F.push({t:V,id:N})}F.sort((N,k)=>N.t-k.t);let D=[{t:0,id:S.u},...F,{t:R,id:S.v}];for(let N=0;N+1<D.length;N++){let k=D[N],V=D[N+1],X=S.forward?k.t:R-V.t,z=S.forward?V.t:R-k.t;u.push({u:k.id,v:V.id,room:S.room,edge:S.edge,t0:X,t1:z})}}let f=new Map;for(let S of u){let P=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,U=f.get(P);U||f.set(P,U=[]),U.push(S)}let d=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),m=new Map;for(let S of u){let P=`${S.room}:${S.edge}`;m.set(P,[...m.get(P)??[],S.t0].sort((U,L)=>U-L))}let b=S=>{let P=i.find(L=>L.id===S.room)?.wall_heights?.[S.edge];if(!Array.isArray(P))return P;let U=m.get(`${S.room}:${S.edge}`)??[];return P[U.indexOf(S.t0)]??null},g=S=>{let P=S.map(b).filter(L=>typeof L=="number"&&L>0);if(P.length)return Math.min(...P);let U=S.map(L=>i.find(R=>R.id===L.room)?.ceiling_height);return U.every(L=>typeof L=="number"&&L>0)?Math.max(...U):void 0},p=S=>{let P=S.map(U=>i.find(L=>L.id===U.room)?.wall_thickness?.[U.edge]).filter(U=>typeof U=="number"&&U>0);return P.length?Math.max(...P):void 0},x=S=>{for(let P of S){let U=i.find(F=>F.id===P.room),L=U?.wall_slopes?.[P.edge];if(!U||!L)continue;let R=U.points[P.edge],C=U.points[(P.edge+1)%U.points.length];return{p:[R[0],R[1]],q:[C[0],C[1]],h0:Math.max(.05,L[0]),h1:Math.max(.05,L[1])}}},y=S=>S.some(P=>b(P)===0),v=S=>{let P=x(S);return P?{height:Math.max(P.h0,P.h1),slope:P}:{height:g(S)}},M=[],w=[];for(let S of f.values()){let P=S[0],U=S.find(L=>L!==P&&L.u===P.v&&L.v===P.u&&L.room!==P.room);for(let L of S)L!==P&&L!==U&&L.room!==P.room&&r.push(`overlap:${P.room}:${L.room}`);if(y(U?[P,U]:[P])){U&&M.push([P.room,U.room]);continue}if(U){let L=p([P,U])??t.interior;w.push({a:P.u,b:P.v,left:L/2,right:L/2,exterior:!1,roomLeft:P.room,roomRight:U.room,sources:[d(P),d(U)],...v([P,U])})}else w.push({a:P.u,b:P.v,left:0,right:p([P])??t.exterior,exterior:!0,roomLeft:P.room,roomRight:null,sources:[d(P)],...v([P])})}let T=S=>Rn(ke(s[S.b],s[S.a])),_=new Set;for(let S of w){if(S.exterior||S.free)continue;let P=new Set;for(let L of[S.a,S.b])for(let R of w)!R.exterior||R.free||R.a!==L&&R.b!==L||Math.abs(Tr(T(S),T(R)))>1e-6||(R.roomLeft===S.roomLeft?P.add("left"):R.roomLeft===S.roomRight&&P.add("right"));if(P.size!==1)continue;let U=S.left+S.right;P.has("left")?(S.left=0,S.right=U):(S.left=U,S.right=0),_.add(S)}for(let S of[..._]){let P=[S];for(;P.length;){let U=P.pop();for(let L of[U.a,U.b])for(let R of w){if(R===U||R.exterior||R.free||_.has(R)||R.a!==L&&R.b!==L||Math.abs(Tr(T(U),T(R)))>1e-6)continue;let C=R.left+R.right,F=U.right===0==Er(T(U),T(R))>0;R.left=F?C:0,R.right=F?0:C,_.add(R),P.push(R)}}}o.forEach((S,P)=>{let[U,L]=c[P];if(U===L)return;let R=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],C=i.find(N=>N.points.length>=3&&Zt(R,N.points))?.id??null,F=(S.thickness??t.interior)/2,D=typeof S.height=="number"&&S.height>0?S.height:void 0;w.push({free:S.id,a:U,b:L,left:F,right:F,exterior:!1,roomLeft:C,roomRight:C,sources:[],height:D})}),w=tM(w,s,h);let A=nM(w,s);return{walls:w.map((S,P)=>{let U=s[S.a],L=s[S.b],R=A.get(`${P}:a`),C=A.get(`${P}:b`),F=iM([R.right,C.left,L,C.right,R.left,U],1e-6);return{id:Q_(U,L),a:[U[0],U[1]],b:[L[0],L[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:F,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{},...S.slope?{slope:S.slope}:{}}}),warnings:[...new Set(r)],open:M}}function Q_(i,t){let e=o=>Math.round(o*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function m0(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function tM(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[s,a]of o){if(a.length!==2||e.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=m0(l)),c.a!==s&&(c=m0(c)),l.a===c.b)continue;let h=Rn(ke(t[l.b],t[l.a])),u=Rn(ke(t[c.b],t[c.a]));if(Math.abs(Tr(h,u))>1e-6||Er(h,u)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:eM(l.sources,c.sources)},d=n.filter((m,b)=>b!==a[0]&&b!==a[1]);d.push(f),n.length=0,n.push(...d),r=!0;break}}return n}function eM(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function nM(i,t){let e=new Map;i.forEach((r,o)=>{let s=Rn(ke(t[r.b],t[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:Dn(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(c)}});let n=new Map;for(let[r,o]of e){let s=t[r];o.sort((c,h)=>c.angle-h.angle);let a=c=>({left:ui(s,Dn(Oh(c.d),c.left)),right:ui(s,Dn(p0(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let h=o[c],u=o[(c+1)%o.length],f=ui(s,Dn(Oh(h.d),h.left)),d=ui(s,Dn(p0(u.d),u.right)),m=Tr(h.d,u.d);if(Math.abs(m)<1e-4)continue;let b=Tr(ke(d,f),u.d)/m,g=ui(f,Dn(h.d,b));Fs(ke(g,s))>l||(n.get(h.key).left=g,n.get(u.key).right=g)}}return n}function iM(i,t){let e=i.filter((r,o)=>Fs(ke(r,i[(o+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let o=e[(r+e.length-1)%e.length],s=e[r],a=e[(r+1)%e.length],l=ke(s,o),c=ke(a,s);if(Math.abs(Tr(Rn(l),Rn(c)))<1e-7&&Er(l,c)>0){e=e.filter((h,u)=>u!==r),n=!0;break}}}return e}function Uh(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],o=Rn(ke(r,n));return ui(n,Dn(o,e))}function g0(i,t){let e=ke(i.b,i.a),n=Oh(Rn(e)),r=a=>t.some(l=>l.points.length>=3&&Zt(a,l.points)),o=0,s=0;for(let a of[.2,.5,.8]){let l=ui(i.a,Dn(e,a));r(ui(l,Dn(n,i.left+.2)))&&o++,r(ke(l,Dn(n,i.right+.2)))&&s++}return o>=2&&s===0?!0:s>=2&&o===0?!1:null}function To(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=Rn(ke(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,ui(r.a,[-o[1],o[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Eo(i,t,e){if(!t.wall)return rM(i,e.room,e.edge,t.offset);let n=i.find(o=>o.free===t.wall);if(!n)return null;let r=Uh(e.room,0,t.offset);return{wall:n,s:Er(ke(r,n.a),Rn(ke(n.b,n.a)))}}function Bh(i,t,e){if(t.free)return null;let n=e?t.b:t.a,r=Rn(ke(t.b,t.a)),o=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,s=null;for(let a of i)if(!(a===t||!(o(a.a)||o(a.b)))){if(s||a.exterior!==t.exterior||a.free||!o(e?a.a:a.b)||Er(Rn(ke(a.b,a.a)),r)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;s=a}return s}function rM(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=Uh(t,e,n);return{wall:r,s:Er(ke(s,r.a),Rn(ke(r.b,r.a)))}}return null}function yc(i,t,e,n){let r=t.rotation*Math.PI/180,o=[-Math.sin(r),Math.cos(r)],s=Math.max(.005,t.d),a=null;for(let c of i){let h=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(h<.05)continue;let u=[(c.b[0]-c.a[0])/h,(c.b[1]-c.a[1])/h],f=(t.x-c.a[0])*u[0]+(t.z-c.a[1])*u[1];if(f<-.02||f>h+.02)continue;let d=[-u[1],u[0]],m=(t.x-c.a[0])*d[0]+(t.z-c.a[1])*d[1],b=o[0]*d[0]+o[1]*d[1]>=0?1:-1;if(Math.abs(o[0]*d[0]+o[1]*d[1])<.5)continue;let g=b>0?c.left:-c.right,p=m>-c.right-1e-4&&m<c.left+1e-4,x=Math.abs(m-(g+b*(s/2)));if(!p&&x>.03||a&&x>=a.off)continue;let y=c.a[0]+u[0]*f,v=c.a[1]+u[1]*f,M=p?g+b*(s/2):m,w=c.slope?Nh(c.slope,t.x,t.z):Math.min(e,c.height??e);a={x:y+d[0]*M,z:v+d[1]*M,top:w,off:x}}if(!a)return{x:t.x,z:t.z,y:n};let l=t.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-t.h-.02)):n;return{x:a.x,z:a.z,y:l}}var Ji=Math.PI/180;function Ar(i){let t=i.rotation??0;if(!t||i.points&&i.points.length>=3)return null;let e=t*Ji;return{p:i.pivot??[(i.x0+i.x1)/2,(i.z0+i.z1)/2],c:Math.cos(e),s:Math.sin(e)}}function Mc(i,t,e=!1){if(!i)return t;let n=t[0]-i.p[0],r=t[1]-i.p[1],o=e?-i.s:i.s;return[i.p[0]+n*i.c-r*o,i.p[1]+n*o+r*i.c]}function an(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1),o=Ar(i),s=i.axis==="x"?(l,c)=>[l,i.flip?r-c:n+c]:(l,c)=>[i.flip?e-c:t+c,l],a=o?(l,c)=>Mc(o,s(l,c)):s;return i.axis==="x"?{u0:t,u1:e,w:r-n,at:a}:{u0:n,u1:r,w:e-t,at:a}}function zh(i,t,e,n=1e-6){let[r,o]=di(i,t,e),s=an({...i,rotation:0});return r>=s.u0-n&&r<=s.u1+n&&o>=-n&&o<=s.w+n}function sn(i){let t=an(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Ji),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Ji);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=M0(t,e,n,r,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+o>1e-6?Math.min(t,Math.max(0,(n-e+t*o)/(r+o))):t/2,a=e+s*r;return{vr:s,rh:a,y:l=>l<=s?e+l*r:n+(t-l)*o}}function Vh(i){let t=i.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var Gh=.14;function x0(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function Hh(i,t){return sn(i).rh-Gh>t+.01}function v0(i,t,e,n){let r=null,o=Math.max(0,i.settings.roof.overhang??0);for(let s of Vh(i)){if(s.open||n!==void 0&&!Hh(s,n)||!zh(s,t,e)||s.points&&s.points.length>=3&&!Zt([t,e],s.points))continue;let[a,l]=di(s,t,e),c=s.shape==="flat"||s.shape==="parapet",h=Math.max(0,s.overhang??o),f=((c?null:Ns(Cr(s,{u0:h,u1:h,a:h,b:h}),a,l))??sn(s).y(l))-Gh;r=r===null?f:Math.max(r,f)}return r}function wc(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(o=>[o[0],o[1]]);let n=$n(i)>=0?1:-1,r=[];for(let o=0;o<e;o++){let s=i[(o+e-1)%e],a=i[o],l=i[(o+1)%e],c=b0([a[0]-s[0],a[1]-s[1]]),h=b0([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],m=u[1]+f[1],b=Math.hypot(d,m);if(b<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let g=(d*u[0]+m*u[1])/b,p=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/b*t*p,a[1]+m/b*t*p])}return r}function b0(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function y0(i,t){if(i.points&&i.points.length>=3)return wc(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,o=Math.max(i.z0,i.z1)+t,s=Ar(i);return[[e,r],[n,r],[n,o],[e,o]].map(a=>Mc(s,a))}function _0(i,t,e,n){let r=hi(i,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let o=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,s=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let f of[u.a,u.b])s.set(o(f),[...s.get(o(f))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let f=[u.a,u.b],d=u.b;for(;;){let m=(s.get(o(d))??[]).find(b=>!l.has(b));if(!m||(l.add(m),d=o(m.a)===o(d)?m.b:m.a,o(d)===o(f[0])))break;f.push(d)}f.length>=3&&o(d)===o(f[0])&&(!c||Math.abs($n(f))>Math.abs($n(c)))&&(c=f)}if(!c)return null;let h=[];for(let u=0;u<c.length;u++){let f=c[(u+c.length-1)%c.length],d=c[u],m=c[(u+1)%c.length],b=(d[0]-f[0])*(m[1]-d[1])-(d[1]-f[1])*(m[0]-d[0]);Math.abs(b)>1e-6&&h.push(d)}return h.length>=3?wc(h,e):null}var Ds=Math.tan(30*Ji);function M0(i,t,e,n,r){let o=Math.min(i*.3,n>1e-6?2.4/n:i*.3),s=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+o*n,l=e+s*r,c=Math.min(i-s,Math.max(o,(l-a+Ds*(i-s+o))/(2*Ds))),h=a+(c-o)*Ds;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=o?t+f*n:f<=c?a+(f-o)*Ds:f<=i-s?l+(i-s-f)*Ds:e+(i-f)*r}}function Cr(i,t){let e=an(i),n=sn(i),r=e.w,o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(D,N)=>[D,N,n.y(N)],h=c(a,-o),u=c(l,-o),f=c(l,r+s),d=c(a,r+s),m=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Ji),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Ji);if(i.shape==="pent"){let D=[h,u,f,d],N=[[0,n.y(0)],[r,n.y(r)]];return{faces:[D],rim:D,ridges:[[f,d]],gable:N,gables:[N,N]}}if(i.shape==="pyramid"){let D=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[h,u,D],[u,f,D],[f,d,D],[d,h,D]],rim:[h,u,f,d],ridges:[[h,D],[d,D],[u,D],[f,D]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let D=M0(r,i.eave_a,i.eave_b,m,b),N=[[0,n.y(0)],[D.vla,D.yla],[D.vr,D.rh],[r-D.vlb,D.ylb],[r,n.y(r)]],k=[a,D.vla,D.yla],V=[l,D.vla,D.yla],X=[a,r-D.vlb,D.ylb],z=[l,r-D.vlb,D.ylb],K=[a,D.vr,D.rh],J=[l,D.vr,D.rh];return{faces:[[h,u,V,k],[k,V,J,K],[K,J,z,X],[X,z,f,d]],rim:[h,u,V,J,z,f,d,X,K,k],ridges:[[K,J],[k,V],[X,z]],gable:N,gables:[N,N]}}let[g,p]=Sc(i)??["gable","gable"],x=Wh(i,[g,p]),y=g==="gable"?[a,n.vr,n.rh]:[e.u0+x.d0,n.vr,n.rh],v=p==="gable"?[l,n.vr,n.rh]:[e.u1-x.d1,n.vr,n.rh],M=[a,x.vah,x.yh],w=[a,x.vbh,x.yh],T=[l,x.vah,x.yh],_=[l,x.vbh,x.yh],A=g==="halfhip",E=p==="halfhip",S=[[h,u,...E?[T]:[],v,y,...A?[M]:[]],[y,v,...E?[_]:[],f,d,...A?[w]:[]]];g==="hip"&&S.push([d,h,y]),A&&S.push([w,M,y]),p==="hip"&&S.push([u,f,v]),E&&S.push([T,_,v]);let P=[h,u,...p==="gable"?[v]:E?[T,_]:[],f,d,...g==="gable"?[y]:A?[w,M]:[]],U=[[y,v]];g==="hip"&&U.push([h,y],[d,y]),A&&U.push([M,y],[w,y]),p==="hip"&&U.push([u,v],[f,v]),E&&U.push([T,v],[_,v]);let L=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],R=[[0,n.y(0)],[x.vah,x.yh],[x.vbh,x.yh],[r,n.y(r)]],C=D=>D==="gable"?L:D==="halfhip"?R:null,F=[C(g),C(p)];return{faces:S,rim:P,ridges:U,gable:F[0]??F[1],gables:F}}function Sc(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let t=i.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(i.end_u0),e(i.end_u1)]}function Wh(i,t){let e=an(i),n=sn(i),r=e.w,o=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Ji),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Ji),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),h=c+(n.rh-c)*.55,u=o>1e-6?Math.min(n.vr,(h-i.eave_a)/o):n.vr,f=s>1e-6?Math.max(n.vr,r-(h-i.eave_b)/s):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),m=Math.min(l-.1,(n.rh-h)/Math.max(.2,o)),b=g=>g==="hip"?d:g==="halfhip"?m:0;return{d0:b(t[0]),d1:b(t[1]),yh:h,vah:u,vbh:f}}function Ns(i,t,e){let n=null;for(let r of i.faces){if(!Zt([t,e],r.map(x=>[x[0],x[1]])))continue;let[o,s]=r,a=r.slice(2).find(x=>Math.abs((s[0]-o[0])*(x[1]-o[1])-(s[1]-o[1])*(x[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],c=s[2]-o[2],h=s[1]-o[1],u=a[0]-o[0],f=a[2]-o[2],d=a[1]-o[1],m=c*d-h*f,b=h*u-l*d,g=l*f-c*u;if(Math.abs(b)<1e-9)continue;let p=o[2]-(m*(t-o[0])+g*(e-o[1]))/b;n=n===null?p:Math.min(n,p)}return n}function di(i,t,e){let[n,r]=Mc(Ar(i),[t,e],!0),o=Math.min(i.x0,i.x1),s=Math.max(i.x0,i.x1),a=Math.min(i.z0,i.z1),l=Math.max(i.z0,i.z1);return i.axis==="x"?[n,i.flip?l-r:r-a]:[r,i.flip?s-n:n-o]}function kh(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Rr(i,t){let[e,n]=Mc(Ar(t),[(t.x0+t.x1)/2,(t.z0+t.z1)/2]),r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i)s===t||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(t)*1.5||zh(s,e,n)&&(!o||r(s)<r(o))&&(o=s);return o}function Xh(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=an(t),n=sn(t).rh,r=Cr(i,{u0:0,u1:0,a:0,b:0}),o=sn(i),s=b=>{let[g,p]=e.at(b,e.w/2),[x,y]=di(i,g,p);return Ns(r,x,y)??o.y(y)},a=s(e.u0)<=s(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let b=.5;b<u;b+=.05)if(s(l+h*b)>=n-.02){f=l+h*b;break}if(Math.abs(f-c)<.05)return t;let d=Ar(t),m={...t,...d?{pivot:d.p}:{}};return t.axis==="x"?c===e.u1?m.x1=f:m.x0=f:c===e.u1?m.z1=f:m.z0=f,m}function w0(i,t){let e=Xh(i,t),n=an(e),r=sn(e),o=Cr(i,{u0:0,u1:0,a:0,b:0}),s=sn(i),a=f=>{let[d,m]=n.at(f,n.w/2),[b,g]=di(i,d,m);return Ns(o,b,g)??s.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,m=c*(f+1)/u,b=l?n.u0+d:n.u1-d,g=l?n.u0+m:n.u1-m,p=a(g),x=1/0,y=-1/0;for(let _=0;_<=40;_++){let A=n.w*_/40;r.y(A)>p+.02&&(x=Math.min(x,A),y=Math.max(y,A))}if(!(y-x>.05))continue;let v=n.at(b,x),M=n.at(g,y),w=di(i,v[0],v[1]),T=di(i,M[0],M[1]);h.push({u0:Math.min(w[0],T[0]),u1:Math.max(w[0],T[0]),v0:Math.min(w[1],T[1]),v1:Math.max(w[1],T[1])})}return h}function fi(i,t,e,n){let r=s=>n?s[t]<=e+1e-9:s[t]>=e-1e-9,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c&&o.push(a),c!==h){let u=(e-a[t])/(l[t]-a[t]);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function Yh(i,t){let e=fi(i,0,t.u0,!0),n=fi(i,0,t.u1,!1),r=fi(fi(i,0,t.u0,!1),0,t.u1,!0),o=fi(r,1,t.v0,!0),s=fi(r,1,t.v1,!1);return[e,n,o,s].filter(a=>a.length>=3&&Math.abs($n(a.map(l=>[l[0],l[1]])))>1e-6)}function Tc(i,t,e){let n=an(t),r=i.floors.flatMap(c=>c.rooms.filter(h=>h.points.length>=3&&c.elevation+c.height>t.base+.05)),o=c=>c.some(h=>r.some(u=>Zt(h,u.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(a.map(c=>n.at(c,-s)))?0:e,b:o(a.map(c=>n.at(c,n.w+s)))?0:e,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:e,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:e}}function S0(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function oM(i){return sn(i).rh}function T0(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>Rr(n,l)??l);if(!r.length)return t.id;let o=Math.max(...r.map(l=>oM(l))),s=l=>l.rooms.some(c=>c.points.length>=3&&r.some(h=>{let[u,f]=c.points.reduce((d,m)=>[d[0]+m[0]/c.points.length,d[1]+m[1]/c.points.length],[0,0]);return zh(h,u,f)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<o-.3&&s(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function _c(i,[t,e,n]){let r=s=>t*s[0]+e*s[1]+n,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c>=-1e-9&&o.push(a),c>=-1e-9!=h>=-1e-9){let u=c/(c-h);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function Os(i){let t=i[0];if(!t)return null;let e=t;for(let d of i)Math.hypot(d[0]-t[0],d[1]-t[1])>Math.hypot(e[0]-t[0],e[1]-t[1])&&(e=d);let n=e[0]-t[0],r=e[1]-t[1],o=t,s=0;for(let d of i){let m=n*(d[1]-t[1])-r*(d[0]-t[0]);Math.abs(m)>Math.abs(s)&&(s=m,o=d)}if(Math.abs(s)<1e-9)return null;let a=o[0]-t[0],l=o[1]-t[1],c=e[2]-t[2],h=o[2]-t[2],u=(c*l-h*r)/s,f=(n*h-a*c)/s;return[u,f,t[2]-u*t[0]-f*t[1]]}var Ao=i=>Math.abs($n(i.map(t=>[t[0],t[1]])));function Ec(i){let t=An(i.map(n=>[n[0],n[1]]))>=0?1:-1,e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=Math.hypot(o[0]-r[0],o[1]-r[1]);if(s<1e-7)continue;let a=-(o[1]-r[1])*t/s,l=(o[0]-r[0])*t/s;e.push([a,l,-(a*r[0]+l*r[1])])}return e}function sM(i,t){let e=Os(i),n=Os(t.poly);if(!e||!n||Ao(t.poly)<1e-6)return null;let r=[...Ec(t.poly),[n[0]-e[0],n[1]-e[1],n[2]-e[2]-.01]];return Number.isFinite(t.depth)&&r.push([e[0]-n[0],e[1]-n[1],e[2]-n[2]+t.depth]),r}function E0(i,t){let e=[i];for(let n of t){let r=[];for(let o of e){let s=sM(o,n),a=s?o:[];for(let c of s??[])a=_c(a,c);if(a.length<3||Ao(a)<1e-6){r.push(o);continue}let l=o;for(let[c,h,u]of Ec(a)){let f=_c(l,[-c,-h,-u]);if(f.length>=3&&Ao(f)>1e-6&&r.push(f),l=_c(l,[c,h,u]),l.length<3)break}}e=r}return e}function qh(i,t,e){let n=[[0,1]],r=o=>[i[0]+(t[0]-i[0])*o,i[1]+(t[1]-i[1])*o,i[2]+(t[2]-i[2])*o];for(let o of e){let s=Os(o.poly);if(!s||Ao(o.poly)<1e-6)continue;let a=Ec(o.poly).map(([d,m,b])=>[d*i[0]+m*i[1]+b,d*(t[0]-i[0])+m*(t[1]-i[1])]),l=d=>s[0]*d[0]+s[1]*d[1]+s[2]-d[2],c=l(i),h=l(t)-c;a.push([c-.01,h]),Number.isFinite(o.depth)&&a.push([o.depth-c,-h]);let u=0,f=1;for(let[d,m]of a){if(Math.abs(m)<1e-12){d<-1e-9&&(f=-1);continue}let b=-d/m;m>0?u=Math.max(u,b):f=Math.min(f,b)}f-u<1e-6||(n=n.flatMap(([d,m])=>[[d,Math.min(m,u)],[Math.max(d,f),m]]).filter(([d,m])=>m-d>1e-6))}return n.map(([o,s])=>[r(o),r(s)])}function A0(i,t){let e=Os(i),n=Os(t);if(!e||!n||Ao(t)<1e-6)return null;let r=[...i];for(let c of Ec(t))r=_c(r,c);if(r.length<3)return null;let o=c=>(n[0]-e[0])*c[0]+(n[1]-e[1])*c[1]+(n[2]-e[2]),s=[];for(let c=0;c<r.length;c++){let h=r[c],u=r[(c+1)%r.length],f=o(h),d=o(u);if(f<0!=d<0){let m=f/(f-d);s.push([h[0]+(u[0]-h[0])*m,h[1]+(u[1]-h[1])*m,h[2]+(u[2]-h[2])*m])}}if(s.length<2)return null;let a=s[0],l=s[s.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function R0(i,t){let e=an(i),n=o=>o.map(([s,a,l])=>{let[c,h]=e.at(s,a);return[c,h,l]}),r=[];for(let o of t){let s=fi(fi(fi(fi(o,0,e.u0,!1),0,e.u1,!0),1,0,!1),1,e.w,!0);s.length>=3&&Ao(s)>1e-6&&r.push({poly:n(s),depth:1/0});for(let a of Yh(o,{u0:e.u0,u1:e.u1,v0:0,v1:e.w}))r.push({poly:n(a),depth:Gh})}return r}function $h(i,t){return t.map(e=>({poly:e.poly.map(([n,r,o])=>[...di(i,n,r),o]),depth:e.depth}))}function C0(i,t,e){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return t===e||!n(t)||!n(e)?!1:Rr(i,t)!==e&&Rr(i,e)!==t}function P0(i,t){if(t.dormer||t.open||!Sc(t)||Ar(t)||Rr(i,t))return null;let e=an(t),n=sn(t).rh,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===t||s.dormer||s.open||Ar(s)||s.axis===t.axis||s.shape==="flat"||s.shape==="parapet"||s.shape==="pent")continue;let a=sn(s).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(s)>r(t)||r(s)===r(t)&&i.indexOf(s)<i.indexOf(t))))continue;let c=kh(s),[h,u]=t.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[f,d]=t.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],m=kh(t),[b,g]=t.axis==="x"?[m.z0,m.z1]:[m.x0,m.x1];if(b<f-.05||g>d+.05)continue;let p=I0(t,s),x=null;e.u0<h-.05&&e.u1>=h-.05&&e.u1<=p+.05?x=1:e.u1>u+.05&&e.u0<=u+.05&&e.u0>=p-.05&&(x=0),x!==null&&(!o||r(s)>r(o.host))&&(o={host:s,end:x})}return o}function I0(i,t){let e=an(t),n=e.at(e.u0,sn(t).vr);return i.axis==="x"?n[0]:n[1]}function L0(i,t){let e=I0(i,t.host),n={...i,...t.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=kh(i);return i.axis==="x"?(n.x0=t.end===0?Math.min(r.x0,e):r.x0,n.x1=t.end===1?Math.max(r.x1,e):r.x1):(n.z0=t.end===0?Math.min(r.z0,e):r.z0,n.z1=t.end===1?Math.max(r.z1,e):r.z1),n}function Zh(i,t){return t.rooms.some(e=>e.points.length>=3)?_0(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function Kh(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=Zh(i,t);return!!e&&e.some(([n,r])=>So(n,r)-t.elevation>-.15)}function F0(i,t,e,n,r){return!e||!Kh(i,t)?!1:n<Math.min(t.height,So(r[0],r[1])-t.elevation)-.05}function Ro(i,t){let e=An(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let o=t[r],s=t[(r+1)%t.length],a=c=>e*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let h=l[c],u=l[(c+1)%l.length],f=a(h),d=a(u);if(f>=0&&n.push(h),f>=0!=d>=0){let m=f/(f-d);n.push([h[0]+(u[0]-h[0])*m,h[1]+(u[1]-h[1])*m])}}}return n}function D0(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],o=i[(e+2)%i.length],s=(r[0]-n[0])*(o[1]-r[1])-(r[1]-n[1])*(o[0]-r[0]);if(!(Math.abs(s)<1e-9)){if(t&&Math.sign(s)!==t)return!1;t=Math.sign(s)}}return!0}var Zn=1e-4;function Jh(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function O0(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],o=[n[0]-e[0],n[1]-e[1]],s=r[0]*o[1]-r[1]*o[0];if(Math.abs(s)<1e-12)return null;let a=((e[0]-i[0])*o[1]-(e[1]-i[1])*o[0])/s,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/s;return a>Zn&&a<1-Zn&&l>-Zn&&l<1+Zn?a:null}function jh(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r;if(o<1e-12)return null;let s=((i[0]-t[0])*n+(i[1]-t[1])*r)/o;return s<=Zn||s>=1-Zn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(o)<Zn?s:null}function aM(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let o=0;o<t.length;o++){let s=t[o],a=t[(o+1)%t.length];if(O0(n,r,s,a)!==null||jh(s,n,r)!==null||jh(n,s,a)!==null||Math.hypot(n[0]-s[0],n[1]-s[1])<Zn)return!0}}return Zt(i[0],t)||Zt(t[0],i)}function lM(i){let t=i.map(o=>Jh(o)>=0?o:[...o].reverse()),e=[];t.forEach((o,s)=>{for(let a=0;a<o.length;a++){let l=o[a],c=o[(a+1)%o.length],h=[0,1];t.forEach((u,f)=>{if(f!==s)for(let d=0;d<u.length;d++){let m=u[d],b=u[(d+1)%u.length],g=O0(l,c,m,b)??jh(m,l,c);g!==null&&h.push(g)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<Zn)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],m=Math.hypot(d[0]-f[0],d[1]-f[1]),b=[(f[0]+d[0])/2+(d[1]-f[1])/m*.001,(f[1]+d[1])/2-(d[0]-f[0])/m*.001];t.some((g,p)=>p!==s&&Zt(b,g))||e.some(([g,p])=>Math.hypot(g[0]-f[0],g[1]-f[1])<Zn&&Math.hypot(p[0]-d[0],p[1]-d[1])<Zn)||e.push([f,d])}}});let n=[],r=new Set;for(let o=0;o<e.length;o++){if(r.has(o))continue;r.add(o);let s=[e[o][0]],a=e[o][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-s[0][0],a[1]-s[0][1])<.001);l++){let c=e.findIndex(([h],u)=>!r.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;r.add(c),s.push(e[c][0]),a=e[c][1]}s.length>=3&&Jh(s)>1e-6&&n.push(s)}return n}function N0(i){let t=i.filter(o=>o.length>=3),e=t.map((o,s)=>s),n=o=>e[o]===o?o:e[o]=n(e[o]);for(let o=0;o<t.length;o++)for(let s=o+1;s<t.length;s++)n(o)!==n(s)&&aM(t[o],t[s])&&(e[n(s)]=n(o));let r=new Map;return t.forEach((o,s)=>r.set(n(s),[...r.get(n(s))??[],o])),[...r.values()].flatMap(o=>o.length===1?o:lM(o))}function cM(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r,s=o?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o)):0;return Math.hypot(i[0]-t[0]-n*s,i[1]-t[1]-r*s)}function U0(i,t,e=.03){return i.every(n=>Zt(n,t)||t.some((r,o)=>cM(n,r,t[(o+1)%t.length])<=e))}function B0(i,t){let e=Jh(i)>=0?i:[...i].reverse(),n=(r,o)=>{let s=Math.hypot(o[0]-r[0],o[1]-r[1])||1;return[-(o[1]-r[1])/s,(o[0]-r[0])/s]};return e.map((r,o)=>{let s=n(e[(o-1+e.length)%e.length],r),a=n(r,e[(o+1)%e.length]),l=1+s[0]*a[0]+s[1]*a[1];return l<.1?r:[r[0]+(s[0]+a[0])/l*t,r[1]+(s[1]+a[1])/l*t]})}function tf(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var Co=(i,t)=>!!i.fix&&i.fix.includes(t);function Qh(i,t,e,n){let r=new Map,o=i.filter(c=>Co(c,t)).map(c=>({p:c,e:tf(c,t,e)})),s=Math.min(.05,.1*e);for(let{p:c,e:h}of o)t!=="h"&&Math.abs((h[0]+h[1])/2-e/2)<1e-6&&r.set(c,"mid");let a=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of o)r.has(h)||u[0]>a+(a===0?s:.001)||t==="h"&&u[1]>=e-.01&&u[0]>.01||(r.set(h,"lo"),a=Math.max(a,u[1]),c=!0)}let l=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of o)r.has(h)||e-u[1]>l+(l>0?.001:t==="h"?.01:s)||(r.set(h,"hi"),l=Math.max(l,e-u[0]),c=!0)}for(let{p:c}of o)r.has(c)||r.set(c,"free");return a+l>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0,side:r}:{s0:e,s:n,lo:a,hi:l,side:r}}function Pr(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function k0(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!Ac(n))return[Pr(t,n),Pr(e,n)];let r=n.side.get(i)??"lo",o=e-t;if(r==="mid")return[n.s/2-o/2,n.s/2+o/2];if(r==="free"){let s=Pr((t+e)/2,n);return[s-o/2,s+o/2]}return r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function Ac(i){return i.lo>0||i.hi>0}function Rc(i,t,e,n){let[r,o,s]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-o)<.001&&Math.abs(n-s)<.001)return i.parts;let a={w:Qh(i.parts,"w",r,t),d:Qh(i.parts,"d",o,e),h:Qh(i.parts,"h",s,n)},l={w:!Ac(a.w)&&i.parts.some(c=>Co(c,"w")),d:!Ac(a.d)&&i.parts.some(c=>Co(c,"d")),h:!Ac(a.h)&&i.parts.some(c=>Co(c,"h"))};return i.parts.map(c=>{let h=x=>{let y=a[x],[v,M]=tf(c,x,y.s0);return Co(c,x)&&!l[x]?k0(c,v,M,y):[Pr(v,y),Pr(M,y)]},[u,f]=h("w"),[d,m]=h("d"),[b,g]=h("h"),p={...c,x:(u+f)/2/t-.5,w:(f-u)/t,z:(d+m)/2/e-.5,d:(m-d)/e,y:b/n,h:(g-b)/n};if(c.shape==="loft"){let x=(T,_,A,E,S)=>{let P=a[T],U=_??E,L=A??S,R=(U-L/2+.5)*P.s0,C=(U+L/2+.5)*P.s0;if(!Co(c,T)||l[T])return[Pr(R,P),Pr(C,P)];let[F,D]=tf(c,T,P.s0),[N]=k0(c,F,D,P),k=N-F;return[R+k,C+k]},[y,v]=x("w",c.tx,c.tw,c.x,c.w),[M,w]=x("d",c.tz,c.td,c.z,c.d);p.tx=(y+v)/2/t-.5,p.tw=(v-y)/t,p.tz=(M+w)/2/e-.5,p.td=(w-M)/e}return p})}var ef=["body","fabric","cushion","wood","white","metal","dark","glass","plant","pot","accent"],uM=/^#[0-9a-f]{6}$/i;function nf(i,t){let e=i?.[t];return typeof e=="string"&&uM.test(e)?e:null}var hM=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var fM=["wall","pole","pillar","parcel","bank"];function V0(i){return hM.includes(i.variant??"")?i.variant:"bin240"}function G0(i){return fM.includes(i.variant??"")?i.variant:"wall"}var Ve=["#3a3f47","#3a3f47"],Ir=["#23262b","#23262b"],Kn=["#5a3b25","#5a3b25"],Fe=["#1f4fa8","#1f4fa8"],ji=["#e3b616","#e3b616"],ue=["#2f7d3b","#2f7d3b"],z0={default:{rest:Ve,bio:Kn,paper:Fe,plastic:ji,glass:ue,garden:ue,recycling:ji,other:Ve},DE:{rest:Ir,bio:Kn,paper:Fe,plastic:ji,glass:ue,garden:ue,recycling:ji},AT:{rest:Ve,bio:Kn,paper:[Ve[0],"#c0262d"],plastic:ji,glass:ue,garden:ue},CH:{rest:["#d8d8d8","#d8d8d8"],bio:ue,paper:Fe,plastic:Ve,glass:ue,garden:ue},NL:{rest:Ve,bio:ue,paper:Fe,plastic:["#3a3f47","#e57a1f"],glass:ue,garden:ue},BE:{rest:Ve,bio:ue,paper:Fe,plastic:Fe,glass:ue,garden:ue},GB:{rest:Ir,bio:["#3a3f47","#5a3b25"],paper:Fe,plastic:Fe,glass:Ir,garden:Kn,recycling:Fe},US:{rest:Ir,bio:ue,paper:Fe,plastic:Fe,glass:Fe,garden:ue,recycling:Fe},CA:{rest:Ir,bio:ue,paper:Fe,plastic:Fe,glass:Fe,garden:ue,recycling:Fe},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Ve,bio:Kn,paper:[Ve[0],"#e3b616"],plastic:[Ve[0],"#e3b616"],recycling:[Ve[0],"#e3b616"],glass:ue,garden:ue},IT:{rest:Ve,bio:Kn,paper:Fe,plastic:ji,glass:ue,garden:ue},ES:{rest:Ve,bio:Kn,paper:Fe,plastic:ji,glass:ue,garden:ue},PT:{rest:Ve,bio:Kn,paper:Fe,plastic:ji,glass:ue,garden:ue},DK:{rest:Ir,bio:ue,paper:Fe,plastic:Ve,glass:ue,garden:ue},SE:{rest:Ir,bio:Kn,paper:Fe,plastic:Ve,glass:ue,garden:ue},NO:{rest:Ve,bio:Kn,paper:Fe,plastic:Ve,glass:ue,garden:ue},FI:{rest:Ve,bio:Kn,paper:Fe,plastic:Ve,glass:ue,garden:ue}},H0="DE";function W0(){return H0}function dM(i,t){return z0[t]?.[i]??z0.default[i]??Ve}function X0(i,t=H0){let e=dM(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var Qi=zt(3662079,.95),rf=zt(3662079,1),Si=zt(5995775,.34),Y0=zt(5995775,.22),Cc=[-.55,.83],Kt=-1,Pc=16,tr=32,q0=48,of=64,jt=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,o=r,s=r,a,l=Kt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,o.r,o.g,o.b,s.r,s.g,s.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Vt;return t.setAttribute("position",new It(this.p,3)),t.setAttribute("color",new It(this.c,3)),t.setAttribute("fold",new It(this.f,1)),this.uv&&t.setAttribute("uv",new It(this.uv,2)),this.tile&&t.setAttribute("tile",new It(this.tile,2)),t.computeBoundingSphere(),t}},De=class{p=[];c=[];f=[];seg(t,e,n=Qi,r=Kt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,o){let[s,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||o<0)return this.seg(s,a,n,Kt);if(s[1]>=r-1e-6)return this.seg(s,a,n,o);let l=(r-s[1])/(a[1]-s[1]),c=[s[0]+(a[0]-s[0])*l,r,s[2]+(a[2]-s[2])*l];this.seg(s,c,n,Kt),this.seg(c,a,n,o)}geometry(){let t=new Vt;return t.setAttribute("position",new It(this.p,3)),t.setAttribute("color",new It(this.c,3)),t.setAttribute("fold",new It(this.f,1)),t}};function $0(i,t,e,n){let o=i.uv?2:0,s=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,f,d)=>({p:u.p.map((m,b)=>m+(f.p[b]-m)*d),c:u.c.map((m,b)=>m+(f.c[b]-m)*d),uv:u.uv&&f.uv?u.uv.map((m,b)=>m+(f.uv[b]-m)*d):null,tile:u.tile}),l=(u,f,d)=>{for(let m=0;m<3;m++){let b=u*3+m;for(let g=0;g<3;g++)i.p[b*3+g]=f[m].p[g],i.c[b*3+g]=f[m].c[g];if(i.uv&&f[m].uv)for(let g=0;g<o;g++)i.uv[b*2+g]=f[m].uv[g];if(i.tile&&f[m].tile)for(let g=0;g<2;g++)i.tile[b*2+g]=f[m].tile[g];i.f[b]=d}},c=(u,f)=>{let d=i.p.length/9;for(let m of u)i.p.push(...m.p),i.c.push(...m.c),i.f.push(f),i.uv&&i.uv.push(...m.uv??[.5,.5]),i.tile&&i.tile.push(...m.tile??[0,1]);return d},h=i.p.length/9;for(let u=t;u<h;u++){let f=[s(u,0),s(u,1),s(u,2)],d=f.map(_=>_.p[1]>e+1e-6),m=f.map(_=>_.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!m.some(Boolean)){for(let _=0;_<3;_++)i.f[u*3+_]=n;continue}let b=i.f[u*3],g=(_,A)=>a(_,A,(e-_.p[1])/(A.p[1]-_.p[1])),p=d.filter(Boolean).length,x=p===1?d.indexOf(!0):d.indexOf(!1),y=f[x],v=f[(x+1)%3],M=f[(x+2)%3],w=g(y,v),T=g(M,y);p===1?(l(u,[y,w,T],n),c([w,v,M],b),c([w,M,T],b)):(l(u,[y,w,T],b),c([w,v,M],n),c([w,M,T],n))}}function Z0(i,t,e,n){let r=i.p.length/6;for(let o=t;o<r;o++){let s=i.p.slice(o*6,o*6+3),a=i.p.slice(o*6+3,o*6+6),[l,c]=s[1]<=a[1]?[s,a]:[a,s];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[o*2]=n,i.f[o*2+1]=n;continue}let h=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,e,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[o*6+d]=l[d],i.p[o*6+3+d]=u[d];let f=i.c.slice(o*6,o*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var ee=Math.PI/180;function zt(i,t){let e=new j(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function pM(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function pn(i,t=[]){let e=i.map(([n,r])=>new Jt(n,r));return fs.triangulateShape(e,t.map(n=>n.map(([r,o])=>new Jt(r,o))))}function K0(i,t,e,n,r,o,s){let a=new j(s),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let m=t[d],b=t[(d+1)%4],g=e[d],p=e[(d+1)%4],x=b[0]-m[0],y=b[1]-m[1],v=Math.hypot(x,y);if(v<1e-6)continue;let w=.8+.28*((y/v*Cc[0]-x/v*Cc[1]+1)/2),T=(g[0]+p[0]-m[0]-b[0])/2*(-y/v)+(g[1]+p[1]-m[1]-b[1])/2*(x/v),_=Math.max(0,Math.min(1,T/Math.max(1e-6,Math.hypot(T,r-n)))),A=zt(o,l(n)*w).lerp(a,_),E=zt(o,l(r)*w).lerp(a,_);i.tri([m[0],n,m[1]],[g[0],r,g[1]],[p[0],r,p[1]],A,E,E),i.tri([m[0],n,m[1]],[p[0],r,p[1]],[b[0],n,b[1]],A,E,A)}let[c,h,u,f]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[u[0],r,u[1]],[h[0],r,h[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a))}function J0(i,t,e,n,r,o,s,a,l,c){let h=new j(l),u=[];for(let g=0;g<c;g++){let p=g/c*Math.PI*2;u.push({y:o+Math.cos(p)*s,s:r+Math.sin(p)*s})}let f=(g,p)=>{let x=t(g,u[p%c].s);return[x[0],u[p%c].y,x[1]]},d=t(e,r),m=t(n,r),b=(g,p,x,y,v)=>{let M=(p[1]-g[1])*(x[2]-g[2])-(p[2]-g[2])*(x[1]-g[1]),w=(p[2]-g[2])*(x[0]-g[0])-(p[0]-g[0])*(x[2]-g[2]),T=(p[0]-g[0])*(x[1]-g[1])-(p[1]-g[1])*(x[0]-g[0]);M*y[0]+w*y[1]+T*y[2]<0?i.tri(g,x,p,v):i.tri(g,p,x,v)};for(let g=0;g<c;g++){let p=(g+.5)/c*Math.PI*2,x=zt(a,.62+.4*Math.max(0,Math.cos(p))),y=t((e+n)/2,r+Math.sin(p)*s),v=t((e+n)/2,r),M=[y[0]-v[0],Math.cos(p)*s,y[1]-v[1]];b(f(e,g),f(n,g+1),f(n,g),M,x),b(f(e,g),f(e,g+1),f(n,g+1),M,x)}for(let[g,p,x]of[[e,m,d],[n,d,m]]){let y=t(g,r),v=[y[0],o,y[1]],M=[x[0]-p[0],0,x[1]-p[1]];for(let w=0;w<c;w++)b(v,f(g,w),f(g,w+1),M,h)}}function Pe(i,t,e,n,r,o,s={}){let a=typeof n=="number"?()=>n:m=>Math.max(e+.002,n(m[0],m[1])),l=s.aoFrom??e,c=s.fold??Kt,h=m=>.5+.5*Math.min(1,Math.max(0,(m-l)/1.6)),u=(s.holes??[]).map(m=>pM(m)>0?[...m].reverse():m),f=u.length?[...t,...u.flat()]:t,d=s.topFace===!1&&!s.bottom?[]:pn(t,u);if(s.topFace!==!1){let m=new j(o);for(let[b,g,p]of d){let x=f[b],y=f[g],v=f[p];i.tri([x[0],a(x),x[1]],[v[0],a(v),v[1]],[y[0],a(y),y[1]],m,m,m,void 0,s.topFold??c)}}if(s.bottom){let m=zt(r,.55);for(let[b,g,p]of d){let x=f[b],y=f[g],v=f[p];i.tri([x[0],e,x[1]],[y[0],e,y[1]],[v[0],e,v[1]],m,m,m,void 0,c)}}for(let m of[t,...u])for(let b=0;b<m.length;b++){let g=m[b],p=m[(b+1)%m.length],x=p[0]-g[0],y=p[1]-g[1],v=Math.hypot(x,y);if(v<1e-6||s.skipSide?.(g,p))continue;let w=.8+.28*((y/v*Cc[0]-x/v*Cc[1]+1)/2),T=a(g),_=a(p),A=zt(r,h(e)*w),E=zt(r,h(T)*w),S=zt(r,h(_)*w);i.tri([g[0],e,g[1]],[g[0],T,g[1]],[p[0],_,p[1]],A,E,S,void 0,c),i.tri([g[0],e,g[1]],[p[0],_,p[1]],[p[0],e,p[1]],A,S,A,void 0,c)}}var Us={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},O=Us,mt=zt(5995775,.3),Ot=zt(5995775,.17),Qt=zt(3662079,.45),nr=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=af(n)}rotated(t,e,n){let r=n*ee,o=Math.cos(r),s=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*o-(c-e)*s,e+(l-t)*s+(c-e)*o))}box(t,e,n,r,o,s,a,l=a,c=null){if(e-t<1e-4||s-o<1e-4||r-n<1e-4)return;let h=[this.tf(t,o),this.tf(t,s),this.tf(e,s),this.tf(e,o)];Pe(this.buf,Ic(h),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,r,c)}prism(t,e,n,r,o=r,s=null){if(t.length<3||n-e<1e-4)return;let a=t.map(([l,c])=>this.tf(l,c));if(Pe(this.buf,Ic(a),e,n,r,o,{aoFrom:0,bottom:e>.05}),s)for(let l=0;l<a.length;l++)this.line(a[l],a[(l+1)%a.length],n,n,s)}loft(t,e,n,r,o,s=o,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Ic(l)&&(l.reverse(),c.reverse()),K0(this.buf,l,c,n,r,o,s),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],r,r,a),this.line(l[h],c[h],n,r,a)}pad(t,e,n,r,o,s,a,l=a,c=.03,h=null){if(c=Math.min(c,(e-t)/2-.005,(s-o)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,o,s,a,l,h);this.loft([t+c,e-c,o+c,s-c],[t,e,o,s],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,o,s,a,a,h),this.loft([t,e,o,s],[t+c,e-c,o+c,s-c],r-c,r,a,l)}lyingCyl(t,e,n,r,o,s,a,l,c=l,h=12,u=null){let f=Math.min(a,o-r)/2;if(f<1e-4||s<1e-4)return;let d=(r+o)/2,m=t==="x"?e:n,b=t==="x"?n:e,g=(p,x)=>t==="x"?this.tf(p,x):this.tf(x,p);if(J0(this.buf,g,m-s/2,m+s/2,b,d,f,l,c,h),u)for(let p of[m-s/2,m+s/2])for(let x=0;x<h;x++){let y=x/h*Math.PI*2,v=(x+1)/h*Math.PI*2;this.line(g(p,b+Math.sin(y)*f),g(p,b+Math.sin(v)*f),d+Math.cos(y)*f,d+Math.cos(v)*f,u)}}cyl(t,e,n,r,o,s,a=s,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Pe(this.buf,Ic(h),r,o,s,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],o,o,c)}seg(t,e,n,r,o,s,a=mt){this.line(this.tf(t,n),this.tf(r,s),e,o,a)}line(t,e,n,r,o){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],o,Kt)}outline(t,e,n,r){for(let o=0;o<4;o++){let s=t[o],a=t[(o+1)%4];this.line(s,a,n,n,r),this.line(s,s,e,n,r)}}};function af(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Ic(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function Fr(i,t,e,n,r,o,s=O.metal,a=!1){let l=t/2-o-r,c=e/2-o-r;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,s):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,s)}}function Bs(i,t,e,n,r,o,s,a=null,l=!1){let c=(e-t)/s;for(let h=1;h<s;h++){let u=t+c*h;i.seg(u,n,o,u,r,o,Ot)}for(let h=0;h<s;h++){let u=t+c*(h+.5),f=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),f,o+.012,u+Math.min(.1,c/4),f,o+.012,Qt);else{let d=s>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,o+.012,d,f+.08,o+.012,Qt)}}}function j0(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),h=n*.5,u=Math.min(.24,e*.28);Fr(i,t,e,.07,.05,.05,O.wood,!0),i.pad(o,s,.07,h-.08,a+.02,l,O.fabric,O.fabricTop,.04,mt),i.loft([o,s,a,a+u],[o+.01,s-.01,a,a+u*.5],h-.08,n,O.fabric,O.fabricTop,mt),i.pad(o,o+c,h-.08,n*.72,a+.02,l-.02,O.fabric,O.fabricTop,.04,mt),i.pad(s-c,s,h-.08,n*.72,a+.02,l-.02,O.fabric,O.fabricTop,.04,mt);let d=(s-c-(o+c))/r;for(let m=0;m<r;m++){let b=o+c+d*m+.02,g=b+d-.04;i.pad(b,g,h-.08,h+.05,a+u+.02,l-.06,O.cushion,O.cushion,.04),i.loft([b+.01,g-.01,a+u*.55,a+u+.14],[b+.03,g-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,O.cushion)}}function Q0(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),h=Math.min(.24,c*.28),u=Math.min(.2,c*.24),f=n*.5,d=n*.72,m=r?[-1,1]:[-1],b=(_,A)=>i.loft([_-.015,_+.015,A-.015,A+.015],[_-.025,_+.025,A-.025,A+.025],0,.07,O.wood);b(o+.06,a+.06),b(s-.06,a+.06),r||b(s-.06,a+c-.06);for(let _ of m)b(_*(t/2-.06),l-.06),b(_*(t/2-c+.06),l-.06);i.pad(o,s,.07,f-.08,a+.02,a+c,O.fabric,O.fabricTop,.04,mt);for(let _ of m){let[A,E]=_<0?[o+.02,o+c]:[s-c,s-.02];i.pad(A,E,.07,f-.08,a+c-.02,l,O.fabric,O.fabricTop,.04,mt)}i.loft([o,s,a,a+h],[o+.01,s-.01,a,a+h*.5],f-.08,n,O.fabric,O.fabricTop,mt);for(let _ of m)_<0?i.loft([o,o+h,a+h,l],[o,o+h*.5,a+h,l-.01],f-.08,n,O.fabric,O.fabricTop,mt):i.loft([s-h,s,a+h,l],[s-h*.5,s,a+h,l-.01],f-.08,n,O.fabric,O.fabricTop,mt);for(let _ of m){let[A,E]=_<0?[o+h,o+c]:[s-c,s-h];i.pad(A,E,f-.08,d,l-u,l,O.fabric,O.fabricTop,.04,mt)}r||i.pad(s-u,s,f-.08,d,a+.02,a+c-.02,O.fabric,O.fabricTop,.04,mt);let g=o+h,p=r?s-h:s-u,x=Math.max(1,Math.round((p-g)/.62)),y=(p-g)/x;for(let _=0;_<x;_++){let A=g+y*_+.02,E=A+y-.04;i.pad(A,E,f-.08,f+.05,a+h+.02,a+c-.04,O.cushion,O.cushion,.04),i.loft([A+.01,E-.01,a+h*.55,a+h+.14],[A+.03,E-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,O.cushion)}let v=a+c,M=l-u;if(M-v<.2)return;let w=Math.max(1,Math.round((M-v)/.62)),T=(M-v)/w;for(let _ of m)for(let A=0;A<w;A++){let E=v+T*A+.02,S=E+T-.04;_<0?(i.pad(o+h+.02,o+c-.04,f-.08,f+.05,E,S,O.cushion,O.cushion,.04),i.loft([o+h*.55,o+h+.14,E+.01,S-.01],[o+h*.4,o+h*.4+.06,E+.03,S-.03],f+.03,n*.93,O.cushion)):(i.pad(s-c+.04,s-h-.02,f-.08,f+.05,E,S,O.cushion,O.cushion,.04),i.loft([s-h-.14,s-h*.55,E+.01,S-.01],[s-h*.4-.06,s-h*.4,E+.03,S-.03],f+.03,n*.93,O.cushion))}}function mM(i,t,e,n){let r=-e/2,o=e/2,s=-t/2,a=t/2,l=Math.min(.32,n*.36);Fr(i,t,e,.08,.06,.03,O.wood,!0),i.box(s,a,.08,l,r+.06,o,O.wood,O.woodTop,mt),i.pad(s+.03,a-.03,l,l+.2,r+.08,o-.03,O.white,O.whiteTop,.03),i.box(s,a,.08,n-.05,r,r+.07,O.wood,O.woodTop,mt),i.box(s,a,n-.05,n,r,r+.09,O.wood,O.woodTop,Ot);let c=l+.2,h=r+(e-.1)*.36;i.pad(s+.01,a-.01,c-.1,c+.05,h,o-.01,O.cushion,O.fabricTop,.025,Ot),i.lyingCyl("x",0,h+.05,c-.02,c+.09,t-.02,.1,O.cushion,O.fabricTop,8);let u=t>1.2?2:1,f=(t-.2)/u;for(let d=0;d<u;d++){let m=s+.1+f*d,b=r+.12,g=Math.min(.42,e*.2),p=.1;i.loft([m+.03+p,m+f-.03-p,b+p*.5,b+g-p*.5],[m+.03,m+f-.03,b,b+g],c,c+.06,O.whiteTop),i.loft([m+.03,m+f-.03,b,b+g],[m+.03+p,m+f-.03-p,b+p*.5,b+g-p*.5],c+.06,c+.12,O.whiteTop,O.whiteTop,Ot)}}function gM(i,t,e,n){let r=Math.min(.46,n*.52);Fr(i,t,e,r-.04,.035,.02,O.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,O.wood,O.woodTop,mt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,O.cushion,O.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,O.wood,O.woodTop,mt)}function bM(i,t,e,n){Fr(i,t,e,n-.04,.06,.05,O.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.wood,O.woodTop,Qt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,O.body)}function xM(i,t,e,n){let r=-t/2,o=t/2;i.box(r,o,n-.035,n,-e/2,e/2,O.wood,O.woodTop,mt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,O.metal);let s=Math.min(.42,t*.32);i.box(o-s,o,0,n-.035,-e/2+.03,e/2-.02,O.body,O.bodyTop,mt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(o-s,l,a,o,l,a,Ot);for(let l of[n*.2,n*.5,n*.82])i.seg(o-s/2-.07,l,a+.012,o-s/2+.07,l,a+.012,Qt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,O.dark,O.dark,Qt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,O.metal)}function er(i,t,e,n,r,o=null,s=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,O.body,O.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,O.dark),Bs(i,-t/2,t/2,.08,n,e/2-.02,r,o,s)}function vM(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,O.wood,O.woodTop,mt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,O.wood,O.woodTop,mt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,O.body);let o=Math.max(2,Math.round(n/.38));for(let s=0;s<=o;s++){let a=Math.min(n-.025,n/o*s);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,O.wood,O.woodTop,Ot),s<o){let l=-t/2+.025+.04,c=s*3;for(;l<t/2-.025-.12;){let h=.03+c*7%5*.008,u=n/o-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?O.fabric:O.cushion,O.fabricTop),l+=h+.006,c++}}}}function yM(i,t,e,n){let r=Math.max(1,Math.round(t/.6));er(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,mt)}function _M(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,O.white,O.whiteTop,mt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Ot);let o=t/2-.06;i.seg(o,r+.08,e/2+.015,o,r+.4,e/2+.015,Qt),i.seg(o,r-.4,e/2+.015,o,r-.08,e/2+.015,Qt)}var Po=(i,t)=>zt(parseInt(i.slice(1),16),t).getHex();function Lc(i){let t=Math.max(...new j(i).toArray());return Po(i,t>.05?Math.max(1,.62/t):1)}var Lr=!1;function rm(i){Lr=i}function MM(i){let t=null;for(let e of ef){let n=nf(i,e);if(!n)continue;t??={...Us},t[e]=Lr?Lc(n):Po(n,.55);let r=`${e}Top`;r in t&&(t[r]=Lr?Lc(n):Po(n,.75))}return t??Us}function ks(i,t){let e=O;O=MM(i);try{return t()}finally{O=e}}function om(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let o=.62/n;i[e]*=o,i[e+1]*=o,i[e+2]*=o}}function wM(i,t,e,n,r,o){let s=Lr?Lc(o[0]):Po(o[0],.55),a=Lr?Lc(o[1]):Po(o[1],.8),l=Po(o[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,s,s,Ot),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,a,a,Ot),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,l,l,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,s,s,mt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,a,l,Ot),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,a),i.box(t*.36,t*.42,n*.95,n,-.01,.01,a),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,a);return}if(r==="underground"){let u=Math.min(t,e)*.32;i.cyl(0,0,u,0,n*.9,s,s,16,mt),i.cyl(0,0,u*1.08,n*.9,n,a,l,16,Ot),i.box(-u*.5,u*.5,n*.62,n*.8,u*.7,u*1.02,O.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,O.metal,O.metal,Ot);return}if(r==="bin1100"){for(let f of[-1,1])for(let d of[-1,1])i.cyl(f*(t/2-.12),d*(e/2-.12),.05,0,.14,O.dark,O.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,s,s,mt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,a,l,Ot),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,a,l,Ot);return}let c=Math.min(.2,n*.19),h=-e/2;for(let u of[-1,1])i.lyingCyl("x",u*(t/2-.05),h+c/2+.01,0,c,.05,c,O.dark,O.metal,12);i.loft([-t*.42,t*.42,h+.07,e/2-.05],[-t/2+.01,t/2-.01,h+.05,e/2-.01],.03,n-.05,s,s,mt),i.box(-t/2,t/2,n-.05,n,h+.03,e/2,a,l,Ot),i.box(-t*.42,t*.42,n-.1,n-.02,h,h+.04,a,l),r==="multi"&&(i.seg(-t/2,n+.002,(h+e/2)/2,t/2,n+.002,(h+e/2)/2,Qt),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Ot))}function SM(i,t,e,n,r,o,s){let a=t/r;i.box(-t/2,t/2,0,n,-e/2,e/2,s?O.metal:O.white,s?O.metal:O.whiteTop,mt);for(let l=0;l<r;l++){let c=-t/2+a*(l+.5);if(l&&i.seg(-t/2+a*l,n*.06,e/2+.001,-t/2+a*l,n*.94,e/2+.001,Ot),!o)i.box(c-a*.34,c+a*.34,n*.16,n*.84,e/2,e/2+.006,O.white,O.whiteTop,Ot),i.seg(c-a*.3,n*.5,e/2+.007,c+a*.3,n*.5,e/2+.007,Ot);else if(s)i.box(c-a*.4,c+a*.4,n*.12,n*.9,e/2,e/2+.018,O.metal,O.metal,Ot),i.seg(c-a*.36,n*.86,e/2+.019,c+a*.36,n*.86,e/2+.019,Ot);else{let h=Math.min(a,n)*.34;i.lyingCyl("z",c,e/2+.002,n/2-h,n/2+h,.004,h*2,O.dark,O.dark,14,Ot),i.seg(c-h*.45,n/2,e/2+.0045,c-h*.45+.004,n/2,e/2+.0045,mt),i.seg(c+h*.45-.004,n/2,e/2+.0045,c+h*.45,n/2,e/2+.0045,mt)}}}function TM(i,t,e,n,r){if(r){i.box(-t/2,t/2,0,n,-e/2,e/2,O.white,O.whiteTop,mt);let s=Math.min(t,n)*.3;for(let a=0;a<20;a++){let l=a/20*Math.PI*2,c=(a+1)/20*Math.PI*2;i.seg(Math.cos(l)*s,n/2+Math.sin(l)*s,e/2+.002,Math.cos(c)*s,n/2+Math.sin(c)*s,e/2+.002,Ot)}return}let o=Math.min(t,e)/2;i.cyl(0,0,o,0,n,O.white,O.whiteTop,24,mt),i.cyl(0,0,o*.5,n,n+.01,O.metal,O.metal,12)}function EM(i,t,e,n,r){if(r){i.pad(-t/2,t/2,0,n,-e/2,e/2,O.white,O.whiteTop,.05,mt),i.box(-t*.18,t*.18,n*.8,n*.88,e/2,e/2+.006,O.dark);for(let s of[-t*.2,t*.2])i.cyl(s,0,.012,-.12,0,O.metal,O.metal,6);return}let o=Math.min(t,e)/2;i.cyl(0,0,o,.04,n-.05,O.white,O.whiteTop,20,mt),i.cyl(0,0,o*.85,n-.05,n,O.white,O.whiteTop,20);for(let s=0;s<3;s++){let a=s/3*Math.PI*2;i.cyl(Math.cos(a)*o*.7,Math.sin(a)*o*.7,.03,0,.04,O.dark,O.dark,6)}i.box(-o*.3,o*.3,n*.55,n*.65,o-.01,o+.01,O.dark)}function AM(i,t,e,n,r){let o=O.metal,s=zt(O.metal,1.25).getHex(),a=zt(O.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,O.wood,O.woodTop,Ot),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,o,s,mt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,o,s,14,mt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,O.dark,O.dark,Ot),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,o,s,12,Ot),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,o,s,mt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,O.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,mt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,s,Ot),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,O.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,mt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let h=-t/2+t/3*l+.015,u=n/2*c+.015;i.box(h,h+t/3-.03,u,u+n/2-.03,e/2,e/2+.01,a,s,Ot),i.box(h+.04,h+t/3-.07,u+n/2-.09,u+n/2-.07,e/2+.01,e/2+.014,O.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,o,s,mt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,o,s,mt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,O.dark)}function RM(i,t,e,n){let r=e/2-sm;i.box(-t/2,t/2,.02,n,-e/2,r,O.body,O.bodyTop,mt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,O.dark);for(let o of[.35,.7,1.05,1.4])o>n-.15||(i.seg(-t/2+.03,o,r+.001,-.03,o,r+.001,Ot),i.seg(.03,o,r+.001,t/2-.03,o,r+.001,Ot))}var sm=.06;function am(i,t,e,n){ks(t.colors,()=>CM(i,t,e,n))}function CM(i,t,e,n){let r=t.rotation*ee,o=Math.cos(r),s=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(R,C,F)=>[t.x+R*o-F*s,C,t.z+R*s+F*o],c=(R,C,F,D,N)=>{i.tri(R,C,F,N),i.tri(R,F,D,N),i.tri(R,F,C,N),i.tri(R,D,F,N)},h=(R,C,F,D)=>{let N=l(R[0],R[1],R[2]),k=l(C[0],C[1],C[2]),V=k[0]-N[0],X=k[1]-N[1],z=k[2]-N[2],K=Math.hypot(V,X,z)||1,J=[V/K,X/K,z/K],at=Math.abs(J[1])>.9?[1,0,0]:[0,1,0],H=[J[1]*at[2]-J[2]*at[1],J[2]*at[0]-J[0]*at[2],J[0]*at[1]-J[1]*at[0]],W=Math.hypot(H[0],H[1],H[2])||1,tt=[H[0]/W*F,H[1]/W*F,H[2]/W*F],st=[J[1]*tt[2]-J[2]*tt[1],J[2]*tt[0]-J[0]*tt[2],J[0]*tt[1]-J[1]*tt[0]],it=[[1,1],[-1,1],[-1,-1],[1,-1]],ht=(gt,lt)=>[gt[0]+tt[0]*it[lt][0]+st[0]*it[lt][1],gt[1]+tt[1]*it[lt][0]+st[1]*it[lt][1],gt[2]+tt[2]*it[lt][0]+st[2]*it[lt][1]];for(let gt=0;gt<4;gt++){let lt=(gt+1)%4;i.tri(ht(N,gt),ht(k,gt),ht(k,lt),D),i.tri(ht(N,gt),ht(k,lt),ht(N,lt),D)}},u=(R,C,F,D,N,k,V,X)=>{c(l(R,D,N),l(C,D,N),l(C,D,k),l(R,D,k),X),c(l(R,F,k),l(C,F,k),l(C,D,k),l(R,D,k),V),c(l(R,F,N),l(C,F,N),l(C,F,k),l(R,F,k),V),c(l(R,F,N),l(R,F,k),l(R,D,k),l(R,D,N),V),c(l(C,F,N),l(C,F,k),l(C,D,k),l(C,D,N),V)},f=new j(O.body),d=new j(O.bodyTop),m=new j(O.accent),b=O.fabric!==Us.fabric,g=new j(b?O.fabricTop:1929098),p=new j(b?O.fabric:995141),x=(R,C,F,D,N)=>{let k=(V,X,z)=>[V[0]+(X[0]-V[0])*z,V[1]+(X[1]-V[1])*z,V[2]+(X[2]-V[2])*z];for(let V=0;V<N;V++){let X=k(R,C,V/N),z=k(R,C,(V+1)/N),K=k(F,D,(V+1)/N),J=k(F,D,V/N);c(l(X[0],X[1],X[2]),l(z[0],z[1],z[2]),l(K[0],K[1],K[2]),l(J[0],J[1],J[2]),V%2?g:p)}},y=t.w/2,v=-t.d/2,M=Math.max(.12,Math.min(.3,t.h)),w=Math.max(4,Math.round(t.w/.3)),T=(t.awning_pitch??12)*Math.PI/180,_=(R,C)=>{t.awning_valance!==!1&&x([-y+.04,R,C+.01],[y-.04,R,C+.01],[-y+.04,R-.2,C+.01],[y-.04,R-.2,C+.01],w)},A=t.variant??"arm";if(A==="side"){let R=e,C=.05,F=0,D=-y+.08+a*(t.w-.16);u(-y,-y+.1,0,R+.05,F-.05,F+.05,f,d),u(y-.06,y,0,R+.05,F-.03,F+.03,f,d),a>.01&&x([-y+.1,R,F],[-y+.1,C,F],[D,R,F],[D,C,F],Math.max(4,Math.round((R-C)/.3))),h([D,C,F],[D,R,F],.02,m);return}if(A==="vertical"){let R=v,C=Math.min(t.d/2,v+M);u(-y,y,e,e+M,R,C,f,d);let F=(R+C)/2;for(let N of[-y+.02,y-.02])h([N,.02,F],[N,e,F],.02,m);let D=e-a*Math.max(0,e-.04);a>.01&&x([-y+.04,e,F],[y-.04,e,F],[-y+.04,D,F],[y-.04,D,F],w),h([-y+.03,D,F],[y-.03,D,F],.025,m);return}if(A==="pergola"){let R=t.d/2-.05,C=e+M,F=C-(R-v)*Math.tan(T);u(-y,y,e,C,v,v+M,f,d);for(let k of[-y+.05,y-.05])h([k,C,v+M],[k,F,R],.035,m),h([k,0,R],[k,F,R],.045,f);h([-y+.05,F,R],[y-.05,F,R],.035,m);let D=v+M+a*(R-v-M),N=C-(D-v)*Math.tan(T)+.04;a>.01&&x([-y+.08,C+.04,v+M],[y-.08,C+.04,v+M],[-y+.08,N,D],[y-.08,N,D],w),h([-y+.08,N,D],[y-.08,N,D],.025,m);return}let E=v,S=v+M;u(-y,y,e,e+M,E,S,f,d);let P=[S-.02,e+M*.35];if(A==="drop"){let R=Math.max(.3,t.d-M),C=[S,P[1]-R],F=a*(Math.PI/2+T),D=[C[0]+Math.sin(F)*R,C[1]+Math.cos(F)*R];for(let N of[-y+.08,y-.08])h([N,C[1],C[0]],[N,D[1],D[0]],.018,m);a>.01&&x([-y+.04,P[1],P[0]],[y-.04,P[1],P[0]],[-y+.04,D[1],D[0]],[y-.04,D[1],D[0]],w),h([-y+.02,D[1],D[0]],[y-.02,D[1],D[0]],.03,m),a>.05&&_(D[1],D[0]);return}let U=Math.max(0,t.d-M)*a,L=[P[0]+U,P[1]-U*Math.tan(T)];if(U>.01){x([-y+.04,P[1],P[0]],[y-.04,P[1],P[0]],[-y+.04,L[1],L[0]],[y-.04,L[1],L[0]],w);let R=Math.max(.3,(t.d-M)/2+.05);for(let C of[-1,1]){let F=C*(y-.12),D=[F,e+.02,S-.04],N=[F,L[1]-.02,L[0]],k=Math.hypot(N[2]-D[2],N[1]-D[1]),V=Math.sqrt(Math.max(0,R*R-(k/2)**2)),X=[F-C*Math.min(V,y-.15),(D[1]+N[1])/2,(D[2]+N[2])/2];h(D,X,.018,m),h(X,N,.018,m)}}h([-y+.02,L[1],L[0]],[y-.02,L[1],L[0]],.03,m),U>.05&&_(L[1],L[0])}function lm(i,t,e,n,r){let o=i.p.length;ks(t.colors,()=>PM(i,t,e,n,r)),t.mirror&&uf(i,o)}function PM(i,t,e,n,r){let o=t.rotation*ee,s=Math.cos(o),a=Math.sin(o),l=t.mirror?-1:1,c=(v,M)=>[t.x+l*v*s-M*a,t.z+l*v*a+M*s],h=e+.05,u=e+t.h-.02,f=new j(.75,.1,.14),d=new j(O.dark),m=new j(O.accent),b=t.w/2-.006,g=(v,M,w)=>{let T=w/p,_=new j(O.body!==Us.body?O.bodyTop:2043212).lerp(f,T),A=new j(O.body).lerp(f,T*.8),E=Math.cos(w),S=Math.sin(w),P=(R,C)=>c(v+M*(R*E-C*S),t.d/2+R*S+C*E),U=(R,C,F,D)=>{let[N,k,V,X]=R;i.tri([N[0],C,N[1]],[k[0],C,k[1]],[V[0],F,V[1]],D),i.tri([N[0],C,N[1]],[V[0],F,V[1]],[X[0],F,X[1]],D)},L=(R,C,F,D,N,k,V,X=V)=>{let z=[P(R,k),P(C,k),P(C,N),P(R,N)];U([z[0],z[1],z[1],z[0]],F,D,X),U([z[3],z[2],z[2],z[3]],F,D,V),U([z[0],z[3],z[3],z[0]],F,D,V),U([z[1],z[2],z[2],z[1]],F,D,V),U([z[0],z[1],z[2],z[3]],D,D,V),U([z[3],z[2],z[1],z[0]],F,F,V)};return L(0,b,h,u,-sm,0,A,_),L(b-.05,b-.03,e+t.h*.45,e+t.h*.75,.005,.025,m),L},p=1.83;g(-t.w/2,1,n*p)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,r*p)(.06,b-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function IM(i,t,e,n){er(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.dark,O.dark,mt);for(let[r,o,s]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=o*e/.62;i.cyl(a,l,s,n,n+.004,O.dark,1451583,12,Qt)}}function LM(i,t,e,n){er(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,mt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,mt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,O.whiteTop,O.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,O.whiteTop,O.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,O.metal,O.metal,Qt),i.cyl(0,-e/2+.05,.02,n,n+.28,O.metal,O.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,O.metal)}function FM(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,O.white,O.whiteTop,mt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,O.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,O.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,O.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,O.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,O.glass,O.glass,Qt),i.cyl(-t/2+.04,0,.02,n,n+.12,O.metal,O.metal,8)}function DM(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,O.whiteTop,O.whiteTop,mt),i.cyl(0,0,.04,.05,.052,O.metal,O.metal,8);for(let[r,o,s,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,o,s,.05,a,Qt),i.seg(r,n,o,s,n,a,Qt),i.seg(s,.05,a,s,n,a,Qt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,O.metal,O.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,O.metal,O.metal,12,Qt)}function OM(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,O.white,O.whiteTop,mt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,O.white,O.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,O.white,O.whiteTop,12,mt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,O.whiteTop)}function NM(i,t,e,n){er(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,O.white,O.whiteTop,mt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,O.glass,O.glass,Qt),i.cyl(0,-e/2+.06,.018,n,n+.2,O.metal,O.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,O.glass,O.glass,Qt)}function UM(i,t,e,n){er(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),o=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,O.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,O.metal),i.box(-r/2,r/2,n+.1,n+.1+o,-e/2+.12,-e/2+.16,O.dark,O.dark,Qt)}function BM(i,t,e,n){let r=Math.min(t,e)/2,o=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,o,O.pot,O.pot,10,mt),i.cyl(0,0,r*.08,o,n*.55,O.wood,O.wood,6);let s=4;for(let a=0;a<s;a++){let l=a/(s-1),c=r*(.95-.55*l),h=o+(n-o)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-o)*.16,O.plant,O.plantTop,8,a===s-1?Ot:null)}}function kM(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,O.fabric,O.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,o,s,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,o,s,.014,a,mt)}var zM=3,tm=.045;function VM(i,t,e,n,r=!1,o=null,s=0,a=0){let l=Math.max(3,Math.round(n/.18)),c=n/l,h=e>t+.3,u=h&&s>0?Math.min(s,l-1):0,f=!u&&o&&h?zM:0,d=u||f,m=e/2-(d?t:0),b=Math.max(0,Math.min(a,e-.2*(l-d))),g=(m+e/2-b)/(l-d),p=T=>r?Math.max(0,T-tm):0;if(u){let T=c*u;i.box(-t/2,t/2,0,T,m,e/2,O.wood,O.woodTop,mt)}if(f){let T=o==="right"?-1:1,_=[-T*(t/2),m],A=E=>E<=t?[-T*(t/2)+T*E,e/2]:[T*(t/2),e/2-(E-t)];for(let E=0;E<f;E++){let S=2*t*E/f,P=2*t*(E+1)/f,U=[_,A(S)];S<t&&P>t&&U.push(A(t)),U.push(A(P));let L=c*(E+1);i.prism(U,p(L),L,O.wood,O.woodTop,mt)}}for(let T=d;T<l;T++){let _=m-g*(T-d),A=T===l-1&&b>0?-e/2:_-g,E=c*(T+1);i.box(-t/2,t/2,p(E),E,A,_,O.wood,O.woodTop),i.seg(-t/2,E,_,t/2,E,_,mt)}d||i.seg(-t/2,0,e/2,-t/2,c,e/2,mt);let x=c*(d+1);for(let T of[-t/2,t/2])i.seg(T,x,m,T,n,-e/2+g,Ot);if(r)for(let T=d;T<l;T++){let _=m-g*(T-d),A=c*(T+1);for(let E of[-t/2,t/2-.035])i.box(E,E+.035,Math.max(0,A-.28),A-tm,_-g,_,O.wood,O.woodTop)}let y=.9,v=t/2-.03,M=Math.max(d+1,l-4),w=T=>m-g*(T-d+.5);i.seg(v,c*(d+1)+y,w(d),v,c*M+y,w(M-1),Qt);for(let T=d;T<M;T+=3){let _=c*(T+1);i.seg(v,_,w(T),v,_+y,w(T),Ot)}}var GM=72;function HM(i,t,e,n){let r=-e/2,o=e/2,s=.05;i.box(-t/2,t/2,n-.03,n,r,r+s,O.white,O.whiteTop,mt),i.box(-t/2,t/2,n-.03,n,o-s,o,O.white,O.whiteTop,mt),i.box(-t/2,-t/2+s,n-.03,n,r+s,o-s,O.white,O.whiteTop,mt),i.box(t/2-s,t/2,n-.03,n,r+s,o-s,O.white,O.whiteTop,mt);let a=Math.min(e-2*s,n-.3);i.box(-t/2+s,t/2-s,n-a,n-.03,r,r+.035,O.white,O.whiteTop,mt);let l=Math.max(.12,t/2-.1),c=r+.06,h=Math.min(o,c+n/Math.tan(GM*ee)),u=.03;for(let d of[-l,l-.04])i.loft([d,d+.04,h-u,h],[d,d+.04,c,c+u],0,n-.03,O.metal,O.metal,mt);let f=Math.max(2,Math.round(n/.25));for(let d=1;d<f;d++){let m=n*d/f,b=h+(c-h)*d/f;i.box(-l,l,m-.015,m+.015,b-.06,b+.02,O.metal,O.metal)}}function WM(i,t,e,n){let{k:r,steps1:o,steps2:s,fw:a,landing:l,run:c,rise:h}=a0(t,e,n),u=-t/2,f=-t/2+a,d=t/2-a,m=t/2,b=-e/2+l;for(let T=0;T<o;T++){let _=e/2-c*T,A=h*(T+1);i.box(u,f,0,A,_-c,_,O.wood,O.woodTop),i.seg(u,A,_,f,A,_,mt)}i.seg(u,0,e/2,u,h,e/2,mt);let g=h*r,p=.2;i.box(u,f,0,g,-e/2,b,O.wood,O.woodTop),i.box(f,m,Math.max(0,g-p),g,-e/2,b,O.wood,O.woodTop),i.seg(u,g,b,f,g,b,mt);for(let T=0;T<s;T++){let _=b+c*T,A=h*(r+1+T);i.box(d,m,Math.max(0,A-h-p),A,_,_+c,O.wood,O.woodTop),i.seg(d,A,_,m,A,_,mt)}i.seg(u,h,e/2,u,g,b,Ot),i.seg(m,g,b,m,n,b+c*(s-1),Ot);let x=.9,y=f-.03,v=d+.03,M=b-.03,w=Math.max(1,s-4);i.seg(y,h+x,e/2-c/2,y,g+x,M,Qt),i.seg(y,g+x,M,v,g+x,M,Qt),i.seg(v,g+x,M,v,h*(r+w)+x,b+c*(w-.5),Qt);for(let T=0;T<o;T+=3){let _=e/2-c*(T+.5);i.seg(y,h*(T+1),_,y,h*(T+1)+x,_,Ot)}for(let T of[y,v])i.seg(T,g,M,T,g+x,M,Ot);for(let T=2;T<w;T+=3){let _=b+c*(T+.5);i.seg(v,h*(r+1+T),_,v,h*(r+1+T)+x,_,Ot)}}function XM(i,t,e,n){Fr(i,t,e,.12,.03,.04,O.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,O.wood,O.woodTop,mt),Bs(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function YM(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,O.wood,O.woodTop,mt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,O.dark);let r=Math.max(3,Math.round((n-.06)/.22)),o=e/2-.02;for(let s=1;s<r;s++){let a=.06+(n-.06)/r*s;i.seg(-t/2,a,o,t/2,a,o,Ot)}for(let s=0;s<r;s++){let a=.06+(n-.06)/r*(s+.5);i.seg(-.08,a,o+.012,.08,a,o+.012,Qt)}}function qM(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,O.wood,O.woodTop,mt),Bs(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,O.body,O.bodyTop,mt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.wood,O.woodTop,mt);let r=Math.max(2,Math.round(t/.25));for(let o=0;o<r;o++){let s=-t/2+t/r*(o+.5);i.box(s-.015,s+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,O.metal,O.metal)}}function em(i,t,e,n,r){let s=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+s,O.wood,O.woodTop,mt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,O.wood,O.woodTop,mt),i.box(-t/2+(r?s:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+s,O.cushion,O.cushion,Ot),r&&(i.box(-t/2,-t/2+s,0,.45-.06,-e/2+s,e/2,O.wood,O.woodTop,mt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,O.wood,O.woodTop,mt),i.box(-t/2+a,-t/2+s,.45-.06,.45+.02,-e/2+a,e/2-.02,O.cushion,O.cushion,Ot))}function $M(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,O.metal,O.metal,12),i.cyl(0,0,.025,.02,n-.05,O.metal,O.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,O.metal,O.metal,12,Ot),i.cyl(0,0,r,n-.05,n,O.cushion,O.fabricTop,14,mt)}function ZM(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,O.metal),i.box(-.03,.03,.04,.08,-r,r,O.metal),i.cyl(0,0,.06,.02,.1,O.dark,O.dark,8),i.cyl(0,0,.025,.1,.44,O.metal,O.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,O.fabric,O.cushion,mt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,O.fabric,O.fabricTop,mt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,O.metal)}function KM(i,t,e,n){Fr(i,t,e,.08,.04,.05,O.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,O.fabric,O.cushion,mt)}function JM(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,O.body,O.bodyTop,mt),Bs(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function jM(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,O.body,O.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,O.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,O.dark,O.dark,Qt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,Qt);for(let o of[.85,1.45])i.seg(-t/2,o,r,t/2,o,r,Ot);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,Qt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,Qt)}function QM(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,O.body,O.bodyTop,mt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,O.dark),Bs(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,mt)}function t2(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,O.body,O.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,O.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,Qt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,mt)}function nm(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,O.white,O.whiteTop,mt);let o=e/2-.012;i.seg(-t/2,n-.14,o,t/2,n-.14,o,Ot),i.seg(t/2-.16,n-.07,o,t/2-.08,n-.07,o,Qt);let s=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,s+Math.sin(h)*a,o,Math.cos(u)*a,s+Math.sin(u)*a,o,Qt),r||i.seg(Math.cos(h)*a*.72,s+Math.sin(h)*a*.72,o,Math.cos(u)*a*.72,s+Math.sin(u)*a*.72,o,Ot)}}function e2(i,t,e,n){for(let s of[-1,1])for(let a of[-1,1])i.box(s*(t/2)-(s>0?.05:0),s*(t/2)+(s<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),O.wood,O.woodTop);for(let s of[.25,n-.55])i.box(-t/2,t/2,s,s+.08,-e/2,e/2,O.wood,O.woodTop,mt),i.box(-t/2+.04,t/2-.04,s+.08,s+.24,-e/2+.05,e/2-.05,O.white,O.whiteTop,Ot),i.box(-t/2+.05,t/2-.05,s+.24,s+.33,-e/2+.08,-e/2+.4,O.whiteTop,O.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,O.wood,O.woodTop);let o=t/2-.35;for(let s of[o-.18,o+.18])i.seg(s,0,e/2+.02,s,n-.15,e/2+.02,mt);for(let s=.3;s<n-.2;s+=.28)i.seg(o-.18,s,e/2+.02,o+.18,s,e/2+.02,Ot)}function n2(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,O.metal,O.metal,12),i.cyl(0,0,.05,.03,n-.04,O.wood,O.wood,8),i.cyl(0,0,r,n-.04,n,O.wood,O.woodTop,20,mt)}function i2(i,t,e,n){Fr(i,t,e,n-.03,.04,.03,O.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,O.wood,O.woodTop,mt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,O.body,O.bodyTop,Ot)}function r2(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,O.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,O.dark,O.dark,Qt)}function o2(i,t,e,n){let r=lf;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,O.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,O.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,O.white,O.whiteTop,mt);let o=Math.max(3,Math.round(t/.1));for(let s=1;s<o;s++){let a=-t/2+t/o*s;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Ot)}}function s2(i,t,e,n){let r=cf;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,O.white,O.whiteTop,mt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,O.white,O.white,mt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,O.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Ot),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,Qt)}function Io(i,t,e,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,Qt)}}function a2(i,t,e,n,r){let s=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,O.dark,O.body,mt),i.seg(-t*.25,1.1+n*.15,s+.004,-t*.25,1.1+n*.85,s+.004,Qt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,s,s+.005,O.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,O.white,O.whiteTop,mt),Io(i,0,1.1+n*.66,Math.min(t,n)*.22,s+.004),i.seg(-t*.08,1.1+n*.66,s+.005,t*.08,1.1+n*.66,s+.005,Qt);for(let a of[-1,1])Io(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,O.white,O.whiteTop,mt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,O.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,Qt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Ot)}function l2(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,O.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,O.metal,O.metal,mt);for(let s of[-t*.4,-t*.25,-t*.1])i.seg(s,.05+r*2+.003,-r,s,.05+r*2+.003,r,Ot);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,O.dark,O.body,14,mt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,O.glass,O.glass,14);let o=Math.min(t*.2,e*.45)*.95;for(let s=0;s<16;s++){let a=s/16*Math.PI*2,l=(s+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*o,n*.83,Math.sin(a)*o,t*.28+Math.cos(l)*o,n*.83,Math.sin(l)*o,Qt)}}function c2(i,t,e,n,r){let o=Math.min(t,e)/2;if(i.cyl(0,0,o*.95,0,n*.08,O.dark,O.dark,16),i.cyl(0,0,o,n*.08,n*.78,O.dark,O.body,18,mt),i.cyl(0,0,o*.75,n*.78,n*.84,O.dark,O.body,16),r==="side6"){let a=o*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,O.dark,O.metal,mt),Io(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,O.dark,O.body);return}i.cyl(0,0,o*.45,n*.84,n*.95,O.dark,O.metal,16,mt);let s=o*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*s,n*.955,Math.sin(l)*s,Math.cos(c)*s,n*.955,Math.sin(c)*s,Qt)}i.box(-.02,.02,n*.95,n,-o*.35,o*.35,O.dark,O.body)}function u2(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,O.white,O.whiteTop,mt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,O.dark);let r=Math.min(n*.38,t*.3),o=-t*.15,s=n*.53;Io(i,o,s,r,e/2+.004,24),Io(i,o,s,r*.55,e/2+.004,16),i.seg(o-r,s,e/2+.005,o+r,s,e/2+.005,Ot),i.seg(o,s-r,e/2+.005,o,s+r,e/2+.005,Ot),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,O.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,Qt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Ot)}function h2(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,O.white,O.whiteTop,mt);for(let o of[-1,1])Io(i,o*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,Qt);for(let o of[-1,1])i.box(o*t*.25-t*.18,o*t*.25+t*.18,0,n*.5,-e/2,e/2,O.white,O.glass,Ot)}function f2(i,t,e,n){let r=r0-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,O.metal,O.metal,mt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,O.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,O.accent,O.accent)}function d2(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,O.dark,O.body,mt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,O.dark,O.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,Qt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Ot)}function p2(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,O.dark,O.body,mt);let o=Math.min(t,n)*.28,s=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*o,s+Math.sin(c)*o,e/2+.003,Math.cos(h)*o,s+Math.sin(h)*o,e/2+.003,Qt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,O.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,O.dark,O.body)}function m2(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,O.white,O.whiteTop,mt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Ot),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Ot),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,O.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,O.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,Qt)}function g2(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,O.white,O.whiteTop,mt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,Qt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Ot);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,O.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,O.dark,O.body,mt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,Qt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,O.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,O.dark);let o=Math.max(2,Math.round((n-.06)/.3)),s=(n-.06)/o;for(let a=0;a<o;a++)i.box(-t/2,t/2,.06+a*s+.004,.06+(a+1)*s,-e/2,e/2,O.white,O.whiteTop,mt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,Qt)}}var lf=.12,cf=2.05;function cm(i,t,e){let n=Math.min(.04,.08*Math.min(i,t)),r=Math.min(i-n,(t-n)*e);return{w:r,h:r/e}}function hf(i,t){let e=b2(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function b2(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),o=$p(i.type);if(o){let l=t?on(t,i):0,c=(o.x-o.w/2)*e,h=(o.x+o.w/2)*e,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+o.y*r+u,y1:l+(o.y+o.h)*r-u,z:(o.z+o.d/2)*n}}let s=t&&i.type!=="fridge_smart"?on(t,i)-wr(i):0,a=x2(i,e,n,r,t);return a?{...a,y0:a.y0+s,y1:a.y1+s}:null}function x2(i,t,e,n,r){if(i.type==="pool_pump"){let o=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+o*2,z:o+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let o=Math.min(t,e)/2;return{x0:-o*.4,x1:o*.4,y0:n*.85,y1:n*.94,z:o*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let o=Math.min(t*.8,1.45),s=o*.56;return{x0:-o/2+.02,x1:o/2-.02,y0:n+.12,y1:n+.08+s,z:-e/2+.165}}if(i.type==="tv_wall"){let o=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:o+.02,y1:o+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let o=r?on(r,i):0;return{x0:.06,x1:t/2-.06,y0:o+n*.52+.01,y1:o+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:lf+.02,y1:lf+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:cf+.015,y1:cf+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let o=(n-.14)/2+.04,s=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-s,x1:s,y0:o-s,y1:o+s,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function v2(i){if(i.type==="table_round"||i.type==="plant")return!0;let t=be(i.type);if(!t?.parts.length)return!1;let e=t.parts.reduce((n,r)=>r.w*r.d>n.w*n.d?r:n,t.parts[0]);return e.shape==="cyl"&&(e.axis??"y")==="y"&&e.w>=.85&&e.d>=.85}function y2(i,t,e,n,r,o=!1,s=0){let a=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),l=new j(1-r,1-r,1-r),c=new j(1,1,1),h=s+.003;if(o){let b=v=>[v[0],h,v[1]],p=(v,M,w)=>t(Math.cos(v/24*2*Math.PI)*M,Math.sin(v/24*2*Math.PI)*w),x=i.p.length,y=b(t(0,0));for(let v=0;v<24;v++){let M=b(p(v,e/2,n/2)),w=b(p(v+1,e/2,n/2)),T=b(p(v,e/2+a,n/2+a)),_=b(p(v+1,e/2+a,n/2+a));i.tri(y,M,w,l),i.tri(M,T,_,l,c,c),i.tri(M,_,w,l,c,l)}af(t)&&uf(i,x);return}let u=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-a,-n/2-a),t(e/2+a,-n/2-a),t(e/2+a,n/2+a),t(-e/2-a,n/2+a)],d=b=>[b[0],h,b[1]],m=i.p.length;i.tri(d(u[0]),d(u[1]),d(u[2]),l),i.tri(d(u[0]),d(u[2]),d(u[3]),l);for(let b=0;b<4;b++){let g=(b+1)%4;i.tri(d(u[b]),d(f[b]),d(f[g]),l,c,c),i.tri(d(u[b]),d(f[g]),d(u[g]),l,c,l)}af(t)&&uf(i,m)}function Fc(i,t,e,n,r=0,o=!1){ks(n.colors,()=>_2(i,t,e,n,r,o))}function uf(i,t){let e=(n,r,o)=>{if(n)for(let s=0;s<o;s++){let a=r+o+s,l=r+2*o+s,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function _2(i,t,e,n,r,o=!1){let s=be(n.type)?0:r-wr(n);if(be(n.type)||Math.abs(s)<.001)return im(i,t,e,n,r,o);let a=i.p.length,l=t.p.length,c=e.p.length;im(i,t,r<.05?e:new jt,n,0);for(let h=a+1;h<i.p.length;h+=3)i.p[h]+=s;for(let h=l+1;h<t.p.length;h+=3)t.p[h]+=s;if(r<0)for(let h=c+1;h<e.p.length;h+=3)e.p[h]+=s}function im(i,t,e,n,r,o=!1){let s=n.rotation*ee,a=Math.cos(s),l=Math.sin(s),c=n.mirror?-1:1,h=(b,g)=>[n.x+c*b*a-g*l,n.z+c*b*l+g*a],u=new nr(i,t,h),f=Math.max(.05,n.w),d=Math.max(.05,n.d),m=Math.max(.005,n.h);switch(n.type){case"sofa":j0(u,f,d,m,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":j0(u,f,d,m,1);break;case"sofa_l":Q0(u,f,d,m,!1);break;case"sofa_u":Q0(u,f,d,m,!0);break;case"bed":mM(u,f,d,m);break;case"chair":gM(u,f,d,m);break;case"table":bM(u,f,d,m);break;case"desk":xM(u,f,d,m);break;case"nightstand":er(u,f,d,m,1,m*.72,!0),u.seg(-f/2,m*.5,d/2-.02,f/2,m*.5,d/2-.02,Ot);break;case"wardrobe":er(u,f,d,m,Math.max(2,Math.round(f/.5)),m*.5);break;case"shelf":vM(u,f,d,m);break;case"kitchen":yM(u,f,d,m);break;case"fridge":_M(u,f,d,m);break;case"fridge_smart":RM(u,f,d,m);break;case"waste_bin":{let b=i.c.length;wM(u,f,d,m,V0(n),X0(n,W0())),Lr&&om(i.c,b);break}case"mailbox":{let b=i.p.length,g=t.p.length;AM(u,f,d,m,G0(n));let p=wr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=p;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=p;if(p>0)return;break}case"wifi_ap":TM(u,f,d,m,n.variant==="wall");return;case"water_heater":if(EM(u,f,d,m,n.variant==="wall"),n.variant==="wall")return;break;case"wall_switch":case"wall_socket":{let b=i.p.length,g=t.p.length;SM(u,f,d,m,c0(n).length,n.type==="wall_socket",n.variant==="outdoor");let p=wr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=p;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=p;return}case"awning":return;case"stove":IM(u,f,d,m);break;case"sink":LM(u,f,d,m);break;case"bathtub":FM(u,f,d,m);break;case"shower":DM(u,f,d,m);break;case"wc":OM(u,f,d,m);break;case"washbasin":NM(u,f,d,m);break;case"tv_board":UM(u,f,d,m);break;case"plant":BM(u,f,d,m);break;case"rug":kM(u,f,d);return;case"stairs":VM(u,f,d,m,!!n.stair_open,n.stair_turn??null,n.stair_landing??0,n.stair_top??0);break;case"stairs_u":WM(u,f,d,m);break;case"stairwell":return;case"loft_ladder":HM(u,f,d,m);break;case"sideboard":XM(u,f,d,m);break;case"dresser":YM(u,f,d,m);break;case"tall_cabinet":er(u,f,d,m,1,m*.5);break;case"coat_rack":qM(u,f,d,m);break;case"bench":em(u,f,d,m,!1);break;case"corner_bench":em(u,f,d,m,!0);break;case"bar_stool":$M(u,f,d,m);break;case"office_chair":ZM(u,f,d,m);break;case"stool":KM(u,f,d,m);break;case"kitchen_wall":JM(u,f,d,m);return;case"kitchen_tall":jM(u,f,d,m);break;case"island":QM(u,f,d,m);break;case"worktop":u.box(-f/2,f/2,Math.max(0,m-.04),m,-d/2,d/2,O.whiteTop,O.whiteTop,mt);return;case"dishwasher":t2(u,f,d,m);break;case"washer":nm(u,f,d,m,!1);break;case"dryer":nm(u,f,d,m,!0);break;case"bunk_bed":e2(u,f,d,m);break;case"table_round":n2(u,f,d,m);break;case"coffee_table":i2(u,f,d,m);break;case"tv_wall":r2(u,f,d,m);return;case"parking":{let g=[[-f/2,-d/2],[f/2,-d/2],[f/2,d/2],[-f/2,d/2]];for(let p=0;p<4;p++)u.seg(g[p][0],.012,g[p][1],g[(p+1)%4][0],.012,g[(p+1)%4][1],Ot);u.seg(-f*.15,.012,d/2-.45,0,.012,d/2-.2,mt),u.seg(0,.012,d/2-.2,f*.15,.012,d/2-.45,mt);return}case"robot_vacuum":u.box(-f*.45,f*.45,0,m,-d/2,-d/2+d*.3,O.white,O.whiteTop,mt),u.box(-f*.2,f*.2,m*.5,m*.62,-d/2+d*.3,-d/2+d*.31,O.accent);return;case"radiator":o2(u,f,d,m);return;case"ac_unit":s2(u,f,d,m);return;case"inverter":a2(u,f,d,m,n.variant??null);return;case"grid_point":d2(u,f,d,m);break;case"wallbox":p2(u,f,d,m);return;case"pool_pump":l2(u,f,d,m);break;case"pool_filter":c2(u,f,d,m,n.variant??null);break;case"pool_heat_pump":u2(u,f,d,m);break;case"pool_dosing":h2(u,f,d,m);break;case"pool_valve":f2(u,f,d,m);return;case"meter":m2(u,f,d,m);return;case"home_battery":if(g2(u,f,d,m,n.variant??null),n.variant==="wall")return;break;default:{let b=be(n.type);if(b){let g=fc(n.type),p=g?x=>Ih(g,x):Yp(n.type)&&!o?Is:null;if(zs(u,b,f,d,m,r,null,null,p),r>.05)return}else u.box(-f/2,f/2,0,m,-d/2,d/2,O.body,O.bodyTop,mt)}}y2(e,h,f,d,n.type==="plant"?.35:.5,v2(n),Math.min(0,r))}function M2(i){return!!be(i)?.parts.some(t=>t.color?.startsWith("#")||t.top?.startsWith("#"))}function um(i){return i.type==="waste_bin"||M2(i.type)||ef.some(t=>nf(i.colors,t))}function sf(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=O;return(t?e[`${i}Top`]:void 0)??e[i]??null}function zs(i,t,e,n,r,o,s,a=null,l=null){let c=!!a;for(let h of Rc(t,e,n,r)){if(l?.(h)||a&&!a(h))continue;let u=c?{...h,glow:!0,w:h.w+.006/e,d:h.d+.006/n,y:Math.max(0,h.y-.002/r),h:h.h+.004/r}:h,f=u.glow&&s!==null,d=f?s:sf(u.color,!1)??O.body,m=f?s:sf(u.top,!1)??sf(u.color,!0)??zt(d,1.25).getHex(),b=o+u.y*r,g=o+Math.min(r,(u.y+u.h)*r),p=i.colors.length,x=u.edges==="glow"?Qi:u.edges==="faint"?Ot:u.edges?mt:null,y=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))y.lyingCyl(u.axis,u.x*e,u.z*n,b,g,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,d,m,14,x);else if(u.shape==="cyl")y.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,b,g,d,m,14,x);else if(u.shape==="loft"){let v=u.tx??u.x,M=u.tz??u.z,w=u.tw??u.w,T=u.td??u.d;y.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(v-w/2)*e,(v+w/2)*e,(M-T/2)*n,(M+T/2)*n],b,g,d,m,x)}else y.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,b,g,(u.z-u.d/2)*n,(u.z+u.d/2)*n,d,m,x);Lr&&!f&&!c&&(u.color?.startsWith("#")||u.top?.startsWith("#"))&&om(i.colors,p)}}function hm(i,t,e,n,r,o){let s=o*ee,a=Math.cos(s),l=Math.sin(s),c=(m,b)=>[e+m*a-b*l,r+m*l+b*a],h=new nr(i,new De,c),u=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),h.cyl(0,0,.012,n-.075,n-.06,O.accent,O.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,O.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function fm(i,t,e,n,r){let o=qp(t)*n,s=new nr(i,new De,(c,h)=>[c,h-o]);zs(s,t,Math.max(.05,e),Math.max(.05,n),Math.max(.005,r),0,null,Is);let a=0,l=0;for(let c of Rc(t,e,n,r)){if(!Is(c))continue;let h=Math.min(c.w*e,c.d*n)/2;c.shape==="cyl"&&h>a&&(a=h),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function Vs(i,t,e,n,r,o=s=>!!s.glow){let s=e.rotation*ee,a=Math.cos(s),l=Math.sin(s),c=e.mirror?-1:1,h=(u,f)=>[e.x+c*u*a-f*l,e.z+c*u*l+f*a];zs(new nr(i,new De,h),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,o)}function dm(i,t,e,n,r,o){let s=w2(t,e,o,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*ee,l=Math.cos(a),c=Math.sin(a),h=n.mirror?-1:1,u=(f,d)=>[n.x+h*f*l-d*c,n.z+h*f*c+d*l];ks(n.colors,()=>zs(new nr(i,new De,u),{...t,parts:s},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null))}function w2(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),o=i.parts.filter(a=>Ih(t,a)),s;if(t==="curtain")s=o.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...o.map(c=>c.y+c.h)),l=Math.max(.02,1-r);s=o.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return s}function pm(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),o=Math.max(.005,t.h),s=0,a=0,l=0,c=0;for(let g of Rc(i,n,r,o)){if(!g.glow)continue;let p=(g.x+(g.shape==="loft"?g.tx??g.x:g.x))/2*n,x=(g.z+(g.shape==="loft"?g.tz??g.z:g.z))/2*r,y=g.y*o,v=Math.min(o,(g.y+g.h)*o),M=Math.max(1e-6,g.w*n*g.d*r*Math.max(0,v-y));s+=M,a+=p*M,l+=(y+v)/2*M,c+=x*M}if(!s)return null;let h=a/s,u=c/s,f=t.rotation*ee,d=Math.cos(f),m=Math.sin(f),b=t.mirror?-1:1;return[t.x+b*h*d-u*m,e+l/s,t.z+b*h*m+u*d]}function Dc(i,t,e,n,r){let o=e.rotation*ee,s=Math.cos(o),a=Math.sin(o),l=e.mirror?-1:1,c=(h,u)=>[e.x+l*h*s-u*a,e.z+l*h*a+u*s];ks(e.colors,()=>zs(new nr(i,new De,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r))}var S2={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function T2(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],o=e[1]-t[1],s=Math.hypot(r,o)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let h=a.points[(c+1)%a.points.length],u=h[0]-l[0],f=h[1]-l[1],d=Math.hypot(u,f)||1;if(Math.abs((r*f-o*u)/(s*d))>.05)return!1;let m=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+u*m-n[0],l[1]+f*m-n[1])<.4}))}function gm(i,t){return t.type==="pool"?xc(i,t):Sr(i,t)+(qn(t.type)?.01:wo[t.type])}function Gs(i){return An(i)>=0?i:[...i].reverse()}function E2(i,t){let e=i[t];if(qn(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let o=i[r];r===t||!(o.cut&&r>t||o.type==="pool")||o.points.length<3||o.points.every(s=>Zt(s,e.points))&&n.push(Gs(o.points))}return n}function mm(i,t,e,n,r,o,s,a,l=0){let c=e[0]-t[0],h=e[1]-t[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Pe(i,Gs([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,o,s,a,{aoFrom:r-1});return}let m=(v,M)=>[t[0]+f*M,v,t[1]+d*M],b=(v,M)=>[e[0]+f*M,v+l,e[1]+d*M],g=(v,M)=>{i.tri(v[0],v[1],v[2],M,M,M,void 0,Kt),i.tri(v[0],v[2],v[3],M,M,M,void 0,Kt),i.tri(v[0],v[2],v[1],M,M,M,void 0,Kt),i.tri(v[0],v[3],v[2],M,M,M,void 0,Kt)},p=new j(a),x=new j(zt(s,.9)),y=new j(zt(s,.6));g([m(o,1),b(o,1),b(o,-1),m(o,-1)],p),g([m(r,1),b(r,1),b(r,-1),m(r,-1)],y),g([m(r,1),b(r,1),b(o,1),m(o,1)],x),g([m(r,-1),b(r,-1),b(o,-1),m(o,-1)],x),g([m(r,1),m(r,-1),m(o,-1),m(o,1)],x),g([b(r,1),b(r,-1),b(o,-1),b(o,1)],x)}function bm(i,t,e,n){let r=e.outdoor??[];r.forEach((o,s)=>{if(o.points.length<3)return;let a=Sr(e,o),l=(x,y)=>a-Ls(e,o,x,y),c=a-(o.type==="pool"?0:o.slope??0),h=qn(o.type)&&o.height?o.height:wo[o.type],u={...S2[o.type],top:h},f=Gs(o.points),d=zt(u.edge,u.edgeAlpha),m=o.open&&(o.type==="fence"||o.type==="pergola")?f.length-1:-1,b=x=>{if(o.outline!==!1)for(let y=0;y<f.length;y++){if(y===m)continue;let v=f[y],M=f[(y+1)%f.length];t.seg([v[0],x(v[0],v[1]),v[1]],[M[0],x(M[0],M[1]),M[1]],d,Kt)}},g=n??i,p=new j(n?1734832:u.color);switch(o.type){case"pool":{let x=new j(u.side),y=new j(zt(u.side,.55)),v=new j(932440),M=xc(e,o),w=bc(e,o),T=n0(e,o);for(let[_,A,E]of pn(f)){let S=f[_],P=f[A],U=f[E];(n?g:i).tri([S[0],M,S[1]],[U[0],M,U[1]],[P[0],M,P[1]],p,p,p,void 0,Kt),i.tri([S[0],T,S[1]],[U[0],T,U[1]],[P[0],T,P[1]],v,v,v,void 0,Kt)}for(let _=0;_<f.length;_++){let A=f[_],E=f[(_+1)%f.length];i.tri([E[0],T,E[1]],[E[0],w,E[1]],[A[0],w,A[1]],y,x,x,void 0,Kt),i.tri([E[0],T,E[1]],[A[0],w,A[1]],[A[0],T,A[1]],y,x,y,void 0,Kt)}if(!o.above&&Dh(e,o)){let _=new j(660258),A=new j(396054),E=T-.2,S=Math.min(a,w);for(let P=0;P<f.length;P++){let U=f[P],L=f[(P+1)%f.length];i.tri([U[0],E,U[1]],[U[0],S,U[1]],[L[0],S,L[1]],A,_,_,void 0,Kt),i.tri([U[0],E,U[1]],[L[0],S,L[1]],[L[0],E,L[1]],A,_,A,void 0,Kt)}for(let[P,U,L]of pn(f)){let R=f[P],C=f[U],F=f[L];i.tri([R[0],E,R[1]],[C[0],E,C[1]],[F[0],E,F[1]],A,A,A,void 0,Kt)}if(o.outline!==!1)for(let P=0;P<f.length;P++){let U=f[P],L=f[(P+1)%f.length];t.seg([U[0],E,U[1]],[L[0],E,L[1]],zt(u.edge,u.edgeAlpha*.35),Kt),t.seg([U[0],E,U[1]],[U[0],S,U[1]],zt(u.edge,u.edgeAlpha*.25),Kt)}}if(w>a+.02){let _=new j(2044240),A=new j(1187123);for(let E=0;E<f.length;E++){let S=f[E],P=f[(E+1)%f.length];i.tri([S[0],a,S[1]],[S[0],w,S[1]],[P[0],w,P[1]],A,_,_,void 0,Kt),i.tri([S[0],a,S[1]],[P[0],w,P[1]],[P[0],a,P[1]],A,_,A,void 0,Kt)}b(()=>a+.005)}if(b(()=>w),b(()=>M+.005),o.outline!==!1)for(let _=0;_<f.length;_++){let A=f[_],E=f[(_+1)%f.length];t.seg([A[0],T+.005,A[1]],[E[0],T+.005,E[1]],zt(u.edge,u.edgeAlpha*.4),Kt)}break}case"fence":{for(let x=0;x<f.length;x++){if(x===m)continue;let y=f[x],v=f[(x+1)%f.length],M=Math.hypot(v[0]-y[0],v[1]-y[1]),w=Math.max(1,Math.round(M/2)),T=m>=0&&x===m-1?w:w-1;for(let _=0;_<=T;_++){let A=_/w,E=y[0]+(v[0]-y[0])*A,S=y[1]+(v[1]-y[1])*A,P=l(E,S);Pe(i,Gs([[E-.04,S-.04],[E+.04,S-.04],[E+.04,S+.04],[E-.04,S+.04]]),P,P+u.top,u.side,u.color)}for(let _ of[.35,.85])t.seg([y[0],l(y[0],y[1])+_*u.top,y[1]],[v[0],l(v[0],v[1])+_*u.top,v[1]],d,Kt)}break}case"pergola":{let x=u.top;for(let[y,v]of f){let M=l(y,v);Pe(i,Gs([[y-.06,v-.06],[y+.06,v-.06],[y+.06,v+.06],[y-.06,v+.06]]),M,M+x,u.side,u.color)}for(let y=0;y<f.length;y++){if(y===m)continue;let v=f[y],M=f[(y+1)%f.length],w=l(v[0],v[1])+x;if(mm(i,v,M,.12,w-.16,w,u.side,u.color,l(M[0],M[1])-l(v[0],v[1])),o.bracing){let T=l(v[0],v[1]),_=l(M[0],M[1]);t.seg([v[0],T+.25,v[1]],[M[0],_+x-.25,M[1]],d,Kt),t.seg([M[0],_+.25,M[1]],[v[0],T+x-.25,v[1]],d,Kt)}}if(f0(f)){let y=d0(f),v=y.x1-y.x0,M=y.z1-y.z0,w=v>=M,T=w?v:M,_=Math.max(1,Math.round(T/.6));for(let A=1;A<_;A++){let E=(w?y.x0:y.z0)+T*A/_,S=w?[E,y.z0+.06]:[y.x0+.06,E],P=w?[E,y.z1-.06]:[y.x1-.06,E],U=l(S[0],S[1])+x;mm(i,S,P,.06,U-.04,U+.08,u.side,u.color,l(P[0],P[1])-l(S[0],S[1]))}}b((y,v)=>l(y,v)+x+.004);break}case"balcony":{Pe(i,f,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),b(()=>a+u.top+.004);let y=o.height&&o.height>.3?o.height:1,v=zt(9417983,.42),M=zt(3662079,.55);for(let w=0;w<f.length;w++){let T=f[w],_=f[(w+1)%f.length];if(T2(e,T,_))continue;let A=Math.hypot(_[0]-T[0],_[1]-T[1]),E=a+u.top;t.seg([T[0],E+y,T[1]],[_[0],E+y,_[1]],M,Kt),t.seg([T[0],E+.1,T[1]],[_[0],E+.1,_[1]],v,Kt);let S=Math.max(1,Math.round(A/.12));for(let P=0;P<=S;P++){let U=P/S,L=T[0]+(_[0]-T[0])*U,R=T[1]+(_[1]-T[1])*U;t.seg([L,E,R],[L,E+y,R],P===0||P===S?M:v,Kt)}}break}default:{let x=(v,M)=>l(v,M)+u.top,y=E2(r,s);if(Pe(i,f,c,o.slope?x:a+u.top,u.side,u.color,{aoFrom:c,holes:y}),b((v,M)=>x(v,M)+.004),o.type==="hedge"&&b((v,M)=>l(v,M)+.004),o.outline!==!1)for(let v of y)for(let M=0;M<v.length;M++){let w=v[M],T=v[(M+1)%v.length];t.seg([w[0],x(w[0],w[1])+.004,w[1]],[T[0],x(T[0],T[1])+.004,T[1]],d,Kt)}}}})}var Nc=Math.PI/180,A2=1.13,R2=1.72,ff=.025,Dr=.07,xm=.25;function vm(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=hi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,h=-s/l,u=Math.min(n.height,o.height??n.height),f=o.sources.find(b=>b.room_id===o.roomLeft)?.edge??null,d={floorId:n.id,room:o.roomLeft,edge:f,free:!!o.free},m=(b,g,p,x)=>e.push({key:b,section:null,side:"top",flat:!1,o:g,eu:p,es:[0,1,0],n:x,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:d});m(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+h*o.right],[s/l,0,a/l],[c,0,h]),o.free&&m(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-h*o.left],[-s/l,0,-a/l],[-c,0,-h])}}return e}var df="ground";function Lo(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function ym(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],o=Lo(i),s=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=o?o.elevation+(t.base!=null?t.base:dc(o,s,a)):t.base??0;return{key:df,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function C2(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Nr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(x=>P2(x,Tc(i,x,x.overhang??t.overhang)));let e=C2(i);if(!e)return[];let n=e.rooms.flatMap(x=>x.points.map(y=>y[0])),r=e.rooms.flatMap(x=>x.points.map(y=>y[1])),o=i.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,h=e.elevation+e.height;if(t.type==="flat")return[_m("main",null,s,l,a,c,h+xm)];let u=a-s>=c-l,f=t.ridge==="short"?!u:u,d=(f?c-l:a-s)/2,m=d*Math.tan(t.pitch*Nc),b=(x,y,v)=>f?[x,h+v,(l+c)/2+y]:[(s+a)/2+y,h+v,x],[g,p]=f?[s,a]:[l,c];return[-1,1].map(x=>Oc(`main:${x<0?"a":"b"}`,null,x<0?"a":"b",b(g,x*d,0),b(p,x*d,0),b(g,0,m),t.pitch,()=>[0,p-g]))}function P2(i,t){let e=an(i),n=sn(i),r=(y,v,M)=>{let[w,T]=e.at(y,v);return[w,M,T]},o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let y=e.at(a,-o),v=e.at(l,e.w+s);return[_m(i.id,i.id,Math.min(y[0],v[0]),Math.min(y[1],v[1]),Math.max(y[0],v[0]),Math.max(y[1],v[1]),i.eave_a+xm)]}if(i.shape==="pent")return[Oc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,e.w+s,n.y(e.w+s)),i.pitch_a,()=>[0,c])];let h=Sc(i),u=h?Wh(i,h):null,f=i.shape==="pyramid"||h?.[0]==="hip",d=i.shape==="pyramid"||h?.[1]==="hip",m=i.shape==="pyramid"?(e.u1-e.u0)/2:f?u.d0:0,b=i.shape==="pyramid"?(e.u1-e.u0)/2:d?u.d1:0,g=f?e.u0+m-a:0,p=d?l-(e.u1-b):0,x=[];if(n.vr>.3){let y=Math.hypot(n.vr+o,n.rh-n.y(-o));x.push(Oc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,n.vr,n.rh),i.pitch_a,v=>[g*(v/y),c-p*(v/y)]))}if(e.w-n.vr>.3){let y=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));x.push(Oc(`${i.id}:b`,i.id,"b",r(l,e.w+s,n.y(e.w+s)),r(a,e.w+s,n.y(e.w+s)),r(l,n.vr,n.rh),i.pitch_b,v=>[p*(v/y),c-g*(v/y)]))}if(f||d){let y=n.y(-o),v=n.y(e.w+s),M=[];f&&M.push([`${i.id}:c`,"c",r(a,e.w+s,v),r(a,-o,y),r(e.u0+m,n.vr,n.rh)]),d&&M.push([`${i.id}:d`,"d",r(l,-o,y),r(l,e.w+s,v),r(e.u1-b,n.vr,n.rh)]);for(let[w,T,_,A,E]of M){let S=I2(w,i.id,T,_,A,E);S&&x.push(S)}}return x}function I2(i,t,e,n,r,o){let s=Hs(Or(r,n));if(s<.3)return null;let a=ir(Or(r,n)),l=Or(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=Hs(h);if(u<.3)return null;let f=ir(h),d=ir(Sm(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let m=ir([-f[0],0,-f[2]]),b=Math.atan2(f[1],Math.hypot(f[0],f[2]))/Nc;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:s,ls:u,pitch:b,span:p=>{let x=Math.min(1,Math.max(0,p/u));return[c*x,s-(s-c)*x]},facing:[m[0],m[2]]}}function Oc(i,t,e,n,r,o,s,a){let l=ir(Or(r,n)),c=ir(Or(o,n)),h=ir(Sm(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=ir([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:h,lu:Hs(Or(r,n)),ls:Hs(Or(o,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function _m(i,t,e,n,r,o,s){let a=r-e>=o-n,l=a?r-e:o-n,c=a?o-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Mm(i){let t=i.module_w||A2,e=i.module_h||R2;return i.portrait===!1?[e,t]:[t,e]}function L2(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function wm(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Nc:i.wall?Math.min(90,Math.max(0,t.tilt??0))*Nc:0}function F2(i,t){let[,e]=Mm(t),n=wm(i,t);return i.wall?e*Math.cos(n)+ff:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+ff}function Ws(i,t,e=!1){let[n,r]=Mm(t),o=[],s=wm(i,t),a=r*Math.cos(s),l=F2(i,t),c=L2(t),h=Math.max(1,...c),u=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(b,g,p)=>[i.o[0]+i.eu[0]*b+i.es[0]*g+i.n[0]*p,i.o[1]+i.eu[1]*b+i.es[1]*g+i.n[1]*p,i.o[2]+i.eu[2]*b+i.es[2]*g+i.n[2]*p],m=(b,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[p,x]=i.span(g);return b>=p-1e-6&&b<=x+1e-6};return c.forEach((b,g)=>{let p=t.align==="right"?h-b:t.align==="center"?(h-b)/2:0;for(let x=0;x<b;x++){let y=`${g}:${x}`,v=u.has(y);if(v&&!e)continue;let M=t.u+(x+p)*(n+ff),w=t.v+g*l,T=M+n,_=w+(i.flat||i.wall?a:r);if(f){if(!(m((M+T)/2,w)&&m((M+T)/2,_)))continue}else if(![[M,w],[T,w],[T,_],[M,_]].every(([L,R])=>m(L,R)))continue;if(i.wall&&s>.001){let L=Dr+r*Math.sin(s),[R,C]=t.flip?[L,Dr]:[Dr,L],F=[d(M,w,R),d(T,w,R),d(T,_,C),d(M,_,C)],D=t.flip?w:_,N=[M+.05,T-.05].map(k=>[d(k,D,0),d(k,D,L)]);o.push({corners:F,posts:N,cell:y,skipped:v});continue}if(!i.flat){o.push({corners:[d(M,w,Dr),d(T,w,Dr),d(T,_,Dr),d(M,_,Dr)],posts:[],cell:y,skipped:v});continue}let A=.15,E=A+r*Math.sin(s),[S,P]=t.flip?[_,w]:[w,_],U=[d(M,S,A),d(T,S,A),d(T,P,E),d(M,P,E)];o.push({corners:U,posts:[M+.05,T-.05].flatMap(L=>[[d(L,S,0),d(L,S,A)],[d(L,P,0),d(L,P,E)]]),cell:y,skipped:v})}}),o}function Or(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function Hs(i){return Math.hypot(i[0],i[1],i[2])}function ir(i){let t=Hs(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function Sm(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var D2=.78,O2=1.18;function N2(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||D2,module_h:i.h||O2}}function Uc(i,t){let e=Ws(i,N2(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Bc(i,t,e){let n=t?Uc(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,o=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>o)continue;let l=a.rooms.find(c=>Zt([r,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var Xs=1712952,Ys=2239816,Rm=1318193,rr=zt(3662079,.9),Fo=zt(5995775,.45),Je=.14,U2=9427199,B2=13226982,k2=14936565,z2={black:{glass:new j(329483),edge:zt(9082544,.32),cells:zt(2766160,.22)},blue:{glass:new j(1386842),edge:zt(10467583,.55),cells:zt(4025599,.35)}},V2=zt(13226982,.5),G2=zt(13226982,.85),H2=zt(16757575,.95),Tm=new j(2845583),Em=new j(1713986),W2=new j(3662079).multiplyScalar(.35),Am=new j(4871791);function X2(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Cm(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:$2(i),r=e?.type==="custom"?Z2(i,e.sections??[],e.overhang):n?[n]:[];return q2(i,r),Y2(i,r,t),r}function Y2(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(Nr(i).map(o=>[o.key,o]));for(let o of n){let s=r.get(o.face),a=s?Uc(s,o):null;if(!s||!a)continue;let l=s.section?t.find(C=>C.sections?.includes(s.section)):t[0];if(!l)continue;let c=o.float?Bc(i,s,o):null,h=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,u=h?h.elevation:l.floor.elevation+l.base,f=C=>[C[0],C[1]-u,C[2]],[d,m,b,g]=a.map(f),p=e.get(o.id)??{open:0,tilt:0,cover:0},x=!!c&&(h!==null||c.floor.id===l.floor.id),y=h?(l.winBelow??=new Map).get(h.id)??l.winBelow.set(h.id,{floor:h,solid:new jt,lines:new De,glass:new jt}).get(h.id):x?l.win??={solid:new jt,lines:new De,glass:new jt}:l.winRoof??={solid:new jt,lines:new De,glass:new jt},v=(C,F)=>[C[0]+s.n[0]*F,C[1]+s.n[1]*F,C[2]+s.n[2]*F],M=(C,F,D)=>[C[0]+(F[0]-C[0])*D,C[1]+(F[1]-C[1])*D,C[2]+(F[2]-C[2])*D],w=p.open>.02||p.tilt>.02?H2:G2,T=[d,m,b,g].map(C=>v(C,.06)),_=[d,m,b,g].map(C=>v(C,-.02));for(let C=0;C<4;C++){y.lines.seg(T[C],T[(C+1)%4],w);let F=(C+1)%4;y.solid.tri(_[C],_[F],T[F],Am),y.solid.tri(_[C],T[F],T[C],Am)}let A=(p.open>.02?30*Math.min(1,p.open):p.tilt>.5?12:0)*ee,E=Math.hypot(b[0]-m[0],b[1]-m[1],b[2]-m[2]),S=C=>{let F=s.es;return[C[0]-F[0]*E*Math.cos(A)+s.n[0]*E*Math.sin(A),C[1]-F[1]*E*Math.cos(A)+s.n[1]*E*Math.sin(A),C[2]-F[2]*E*Math.cos(A)+s.n[2]*E*Math.sin(A)]},P=v(g,.065),U=v(b,.065),L=S(P),R=S(U);y.glass.tri(L,R,U,Tm),y.glass.tri(L,U,P,Tm);for(let[C,F]of[[L,R],[R,U],[U,P],[P,L]])y.lines.seg(C,F,w);if(p.cover>.02){let C=Math.min(1,p.cover),F=v(M(P,L,C),.01),D=v(M(U,R,C),.01),N=v(P,.01),k=v(U,.01);y.solid.tri(F,D,k,Em),y.solid.tri(F,k,N,Em);let V=Math.max(1,Math.round(E*C/.05));for(let X=1;X<=V;X++){let z=X/V;y.lines.seg(v(M(N,F,z),.004),v(M(k,D,z),.004),W2)}}}}function q2(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(Nr(i).map(r=>[r.key,r]));for(let r of e){let o=n.get(r.face);if(!o)continue;let s=o.section?t.find(a=>a.sections?.includes(o.section)):t[0];s&&pf(s.solid,s.lines,o,r,s.floor.elevation+s.base)}}function pf(i,t,e,n,r){let o=c=>[c[0],c[1]-r,c[2]],s=z2[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of Ws(e,n)){let[h,u,f,d]=c.corners.map(o);i.tri(h,u,f,s.glass),i.tri(h,f,d,s.glass),i.tri(h,f,u,s.glass),i.tri(h,d,f,s.glass);let m=(p,x=.004)=>[p[0]+e.n[0]*x,p[1]+e.n[1]*x,p[2]+e.n[2]*x],b=(p,x,y)=>[p[0]+(x[0]-p[0])*y,p[1]+(x[1]-p[1])*y,p[2]+(x[2]-p[2])*y],g=[h,u,f,d].map(p=>m(p));for(let p=0;p<4;p++)t.seg(g[p],g[(p+1)%4],s.edge);for(let p=1;p<a;p++)t.seg(m(b(h,u,p/a)),m(b(d,f,p/a)),s.cells);for(let p=1;p<l;p++)t.seg(m(b(h,d,p/l)),m(b(u,f,p/l)),s.cells);for(let[p,x]of c.posts)t.seg(o(p),o(x),V2)}}function $2(i){let t=i.settings.roof,e=X2(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(E=>E.points.map(S=>S[0])),r=e.rooms.flatMap(E=>E.points.map(S=>S[1])),o=i.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,h=new jt,u=new De;if(t.type==="flat"){Pe(h,[[s,l],[a,l],[a,c],[s,c]],0,.25,Xs,Ys,{bottom:!0});let E=.252;for(let[S,P]of[[[s,l],[a,l]],[[a,l],[a,c]],[[a,c],[s,c]],[[s,c],[s,l]]])u.seg([S[0],E,S[1]],[P[0],E,P[1]],rr),u.seg([S[0],0,S[1]],[P[0],0,P[1]],Fo);return{floor:e,base:e.height,solid:h,lines:u,glass:new jt}}let f=a-s>=c-l,d=t.ridge==="short"?!f:f,m=(d?c-l:a-s)/2,b=m*Math.tan(t.pitch*ee),g=(E,S,P)=>d?[E,P,(l+c)/2+S]:[(s+a)/2+S,P,E],[p,x]=d?[s,a]:[l,c],y=new j(Ys),v=new j(Xs),M=(E,S,P,U,L)=>{h.tri(E,S,P,L),h.tri(E,P,U,L)};for(let E of[-1,1]){M(g(p,E*m,0),g(x,E*m,0),g(x,0,b),g(p,0,b),y),M(g(p,E*m,-Je),g(p,0,b-Je),g(x,0,b-Je),g(x,E*m,-Je),v),M(g(p,E*m,-Je),g(x,E*m,-Je),g(x,E*m,0),g(p,E*m,0),v);for(let S of[p,x])M(g(S,E*m,-Je),g(S,E*m,0),g(S,0,b),g(S,0,b-Je),v);u.seg(g(p,E*m,0),g(x,E*m,0),Fo);for(let S of[p,x])u.seg(g(S,E*m,0),g(S,0,b),Fo)}let w=t.overhang,T=new j(Rm),_=m-w,A=_*Math.tan(t.pitch*ee);for(let E of[p+w,x-w])h.tri(g(E,-_,-Je),g(E,_,-Je),g(E,0,A-Je),T),h.tri(g(E,_,-Je),g(E,-_,-Je),g(E,0,A-Je),T);return u.seg(g(p,0,b+.004),g(x,0,b+.004),rr),{floor:e,base:e.height,solid:h,lines:u,glass:new jt}}function Z2(i,t,e){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,o=new Map(Nr(i).map(l=>[l.key,l])),s=t.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(s.map(l=>{let c=Rr(t,l),h=c?null:P0(t,l),u=c?Xh(c,l):h?L0(l,h):l,f=Tc(i,c?u:l,u.overhang??e),d=h?{...f,[h.end===0?"u0":"u1"]:0}:f,m=!u.open&&u.shape!=="flat"&&u.shape!=="parapet";return[l,{parent:c,junction:h,drawn:u,ov:d,covers:m?R0(u,Cr(u,d).faces):[]}]}));for(let l of s){let c=a.get(l),h=S0(i,l)??n[0],u=l.open?`${h.id}:open`:h.id,f=r.get(u);f||r.set(u,f={floor:h,base:0,solid:new jt,lines:new De,glass:new jt,sections:[],lift:!l.open}),f.sections.push(l.id);let d=c.parent,m=[(l.x0+l.x1)/2,(l.z0+l.z1)/2],b=n.some(w=>w.elevation>h.elevation&&w.elevation<=l.base+.5&&w.elevation+w.height>l.base&&w.rooms.some(T=>Zt(m,T.points))),g=h.elevation+h.height>l.base+.05&&!l.dormer&&!d||b,p=t.filter(w=>w!==l&&Rr(t,w)===l).flatMap(w=>w0(l,w));for(let w of i.settings.roof.windows??[]){let T=o.get(w.face),_=T&&T.section===l.id?Uc(T,w):null;if(!_)continue;let A=_.map(E=>di(l,E[0],E[2]));p.push({u0:Math.min(...A.map(E=>E[0])),u1:Math.max(...A.map(E=>E[0])),v0:Math.min(...A.map(E=>E[1])),v1:Math.max(...A.map(E=>E[1]))})}let x=c.drawn,y=c.junction?1-c.junction.end:null;if(d){let w=an(x),T=Cr(d,{u0:0,u1:0,a:0,b:0}),_=A=>{let[E,S]=w.at(A,w.w/2),[P,U]=di(d,E,S);return Ns(T,P,U)??sn(d).y(U)};y=_(w.u0)<=_(w.u1)?0:1}let v=s.filter(w=>C0(t,l,w)),M=v.length?{covers:$h(x,v.flatMap(w=>a.get(w).covers)),lines:$h(x,v.filter(w=>s.indexOf(w)>s.indexOf(l)).flatMap(w=>a.get(w).covers)),wallU:c.junction?[an(l).u0,an(l).u1]:null}:null;K2(f.solid,f.lines,x,c.ov,h.elevation,f.glass,g,p,y,M)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function K2(i,t,e,n,r,o=i,s=!1,a=[],l=null,c=null){let h=an(e),u=sn(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,f.a),m=Math.max(0,f.b),b=h.w,g=h.u0-Math.max(0,f.u0),p=h.u1+Math.max(0,f.u1),x=(C,F,D)=>{let[N,k]=h.at(C,F);return[N,D-r,k]},y=new j(Ys),v=new j(Xs),M=new j(Rm),w=(C,F)=>{for(let D=1;D+1<C.length;D++)i.tri(C[0],C[D],C[D+1],F)},T=[],_=[],A=[],E=[null,null],S=[];if(e.shape==="flat"||e.shape==="parapet"){let C=e.eave_a,F=e.shape==="parapet",D=e.points&&e.points.length>=3?y0(e,F?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):F?[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,b),h.at(h.u0,b)]:[h.at(g,-d),h.at(p,-d),h.at(p,b+m),h.at(g,b+m)];Pe(i,D,C-r,C-r+.25,Xs,Ys,{bottom:!0});for(let N=0;N<D.length;N++){let k=D[N],V=D[(N+1)%D.length];t.seg([k[0],C-r+.252,k[1]],[V[0],C-r+.252,V[1]],rr),t.seg([k[0],C-r,k[1]],[V[0],C-r,V[1]],Fo)}if(F){let N=z=>$n(z)>=0?z:[...z].reverse(),k=N(D),V=wc(k,-.2),X=k.length;for(let z=0;z<X;z++){let K=N([k[z],k[(z+1)%X],V[(z+1)%X],V[z]]);Pe(i,K,C-r+.25,C-r+.65,Xs,Ys),t.seg([k[z][0],C-r+.652,k[z][1]],[k[(z+1)%X][0],C-r+.652,k[(z+1)%X][1]],rr),t.seg([V[z][0],C-r+.652,V[z][1]],[V[(z+1)%X][0],C-r+.652,V[(z+1)%X][1]],rr)}}}else{let C=Cr(e,f);T=C.faces;for(let F of a)T=T.flatMap(D=>Yh(D,F));if(_=C.rim,A=C.ridges,E=C.gables,c){for(let F of T)for(let D of c.lines){let N=A0(F,D.poly);if(N)for(let[k,V]of qh(N[0],N[1],c.covers.filter(X=>X!==D)))S.push([k,V])}T=T.flatMap(F=>E0(F,c.covers))}}let P=!!e.open,U=new j(U2);for(let C of T){if(P){for(let F=1;F+1<C.length;F++)o.tri(x(C[0][0],C[0][1],C[0][2]),x(C[F][0],C[F][1],C[F][2]),x(C[F+1][0],C[F+1][1],C[F+1][2]),U);continue}w(C.map(([F,D,N])=>x(F,D,N)),y),w(C.map(([F,D,N])=>x(F,D,N-Je)),v)}let L=(C,F)=>c?qh(C,F,c.covers):[[C,F]];for(let C=0;C<_.length;C++)for(let[[F,D,N],[k,V,X]]of L(_[C],_[(C+1)%_.length]))P||w([x(F,D,N),x(k,V,X),x(k,V,X-Je),x(F,D,N-Je)],v),t.seg(x(F,D,N),x(k,V,X),P?rr:Fo);if(P){J2(i,t,h,u,f,x,r);return}for(let[C,F]of A)for(let[[D,N,k],[V,X,z]]of L(C,F))t.seg(x(D,N,k+.004),x(V,X,z+.004),rr);for(let[[C,F,D],[N,k,V]]of S)t.seg(x(C,F,D+.004),x(N,k,V+.004),rr);let R=e.base;if(!s){for(let C of[0,1]){let F=E[C];if(!F||l!==null&&l!==C)continue;let D=j2(F,R-Je),N=C===0?h.u0:h.u1;D.length>=3&&w(D.map(([k,V])=>x(N,k,V)),M)}if(e.shape!=="flat"&&e.shape!=="parapet"){let[C,F]=c?.wallU??[h.u0,h.u1];for(let D of[0,b]){let N=u.y(D)-Je;N>R+.02&&w([x(C,D,R),x(F,D,R),x(F,D,N),x(C,D,N)],M)}}else if(e.eave_a>R+.02)for(let[C,F,D,N]of[[h.u0,0,h.u1,0],[h.u1,0,h.u1,b],[h.u1,b,h.u0,b],[h.u0,b,h.u0,0]])w([x(C,F,R),x(D,N,R),x(D,N,e.eave_a),x(C,F,e.eave_a)],M)}}function J2(i,t,e,n,r,o,s){let a=e.w,l=.12,c=.16,h=r.a>0,u=r.b>0,f=r.u0>0,d=r.u1>0,m=(p,x,y,v,M,w)=>{let T=[e.at(p,y),e.at(x,y),e.at(x,v),e.at(p,v)],_=(T[1][0]-T[0][0])*(T[2][1]-T[0][1])-(T[2][0]-T[0][0])*(T[1][1]-T[0][1]);Pe(i,_<0?[...T].reverse():T,M-s,w-s,B2,k2,{bottom:!0})},b=s;for(let[p,x]of[[0,h],[a,u]]){if(!x)continue;let y=n.y(p)-.03,v=p===0?0:a-l;m(e.u0,e.u1,v,v+l,y-c,y),t.seg(o(e.u0,p,y-c),o(e.u1,p,y-c),Fo)}for(let[p,x]of[[e.u0,f],[e.u1-l,d]])if(x)for(let y=0;y<6;y++){let v=a*y/6,M=a*(y+1)/6,w=Math.min(n.y(v),n.y(M))-.03;m(p,p+l,v,M,w-c,w)}let g=[];for(let[p,x]of[[0,h],[a-l,u]]){if(!x)continue;let y=e.u1-e.u0-l,v=Math.max(1,Math.ceil(y/3.5));for(let M=0;M<=v;M++){let w=e.u0+y*M/v;M===0&&!f||M===v&&!d||g.push([w,p])}}if(!h&&!u)for(let p of[e.u0,e.u1-l])(p===e.u0&&f||p!==e.u0&&d)&&g.push([p,a/2-l/2]);for(let[p,x]of g){let y=n.y(x+l/2)-.03-c;m(p,p+l,x,x+l,b,y)}}function j2(i,t){let e=[];for(let o=0;o<i.length;o++){let[s,a]=i[o];a>=t&&e.push([s,a]);let l=i[o+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([s+(l[0]-s)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var qs={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Pm={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},en=.2,Q2=-.06,tw=.01,$s=8,kc=.42,mf=.42;function Dm(i,t,e,n=[],r=[],o){let{walls:s,open:a}=hi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(R,C,F,D)=>{let N=D?.slope?Math.min(F,Nh(D.slope,R,C)):F,k=o?o(R,C):null;return k===null?N:Math.max(.05,Math.min(N,k))},c=(R,C)=>{let F=o?o(R,C):null;return F!==null&&F<Q2},h=(R,C,F,D,N,k)=>{if(!o&&!k?.slope)return N;let V=N,X=Math.max(2,Math.ceil((D-F)/.25)+1);for(let z=0;z<X;z++){let K=F+(D-F)*z/(X-1);V=Math.min(V,l(R[0]+C[0]*K,R[1]+C[1]*K,N,k))}return V},u=new jt(!0,!0),f=[],d=new De,m=[];for(let R of i.rooms){if(R.points.length<3)continue;let C=zc(R.points),F=Pm[R.floor_material]??Pm.wood,D=new j(F.color),N=n.flatMap(J=>{if(U0(J,C))return[J];if(!D0(J))return[];let at=Ro(C,J);return at.length>=3&&Math.abs($n(at))>.01?[zc(at)]:[]}),k=N0(N).map(J=>B0(zc(J),.003));m.push(...k);let V=[...C,...k.flat()],X=u.count;for(let[J,at,H]of pn(C,k)){let W=V[J],tt=V[at],st=V[H];u.tri([W[0],0,W[1]],[st[0],0,st[1]],[tt[0],0,tt[1]],D,D,D,[W[0],W[1],st[0],st[1],tt[0],tt[1]],Kt,F.tile)}f.push({roomId:R.id,start:X,end:u.count,color:F.color});let z=new j(qs.slab),K=J=>{for(let at=0;at<J.length;at++){let H=J[at],W=J[(at+1)%J.length];u.tri([H[0],-en,H[1]],[H[0],0,H[1]],[W[0],0,W[1]],z),u.tri([H[0],-en,H[1]],[W[0],0,W[1]],[W[0],-en,W[1]],z)}};K(C);for(let J of k){K([...zc(J)].reverse());for(let at=0;at<J.length;at++){let H=J[at],W=J[(at+1)%J.length];d.seg([H[0],.006,H[1]],[W[0],.006,W[1]],Qi),d.seg([H[0],-en,H[1]],[W[0],-en,W[1]],Si)}}}let b=new Map,g=[],p=new Map,x=new Map;for(let R of s){if(!R.free)continue;let C=g0(R,i.rooms);C!==null&&x.set(R,C)}for(let R of s){let C="interior",F=null,D=x.get(R);if(R.exterior||D!==void 0){let k=R.b[0]-R.a[0],V=R.b[1]-R.a[1],X=Math.hypot(k,V)||1,z=D===!1?-1:1,K=[z*V/X,-z*k/X],J=(Math.round(Math.atan2(K[1],K[0])/(2*Math.PI)*$s)%$s+$s)%$s;C=`s${J}`;let at=J/$s*2*Math.PI;F=[Math.cos(at),Math.sin(at)]}let N=b.get(C);N===void 0&&(N=g.length,b.set(C,N),g.push(F)),p.set(R,N)}let y=new Map,v=[];for(let R of i.openings){let C=To(R,i.rooms,i.walls??[]);if(!C)continue;let F=Eo(s,R,C);if(!F)continue;let{wall:D,s:N}=F,k=Gc([D.b[0]-D.a[0],D.b[1]-D.a[1]]),V=Math.hypot(D.b[0]-D.a[0],D.b[1]-D.a[1]),X=N-R.width/2<-1e-6?Bh(s,D,!1):null,z=N+R.width/2>V+1e-6?Bh(s,D,!0):null,K=de=>de?Math.hypot(de.b[0]-de.a[0],de.b[1]-de.a[1]):0,J=-K(X),at=V+K(z),H=Math.min(R.width,at-J),W=Math.max(J,Math.min(at-H,N-H/2)),tt=C.room.points,st=x.get(D),it=D.free?st??k[0]*(tt[1][0]-tt[0][0])+k[1]*(tt[1][1]-tt[0][1])>0:D.exterior||D.roomLeft===R.room_id,ht=[-k[1],k[0]],gt=it?ht:[-ht[0],-ht[1]],lt=Math.min(h(D.a,k,W,W+H,Zs(D,i.height),D)-.02,R.sill+R.height),dt=Math.max(0,Math.min(R.sill,lt-.1)),Dt=[gt[1],-gt[0]],Rt=k[0]*Dt[0]+k[1]*Dt[1]>0,ne={opening:R,bucket:p.get(D),start:[D.a[0]+k[0]*W,D.a[1]+k[1]*W],axis:k,width:H,toRoom:gt,faceRoom:it?D.left:D.right,faceOut:it?D.right:D.left,sill:dt,top:lt,hingeAtStart:R.hinge==="left"===Rt,exterior:D.exterior||st!==void 0};v.push(ne);let pe=y.get(D);pe||y.set(D,pe=[]),pe.push({s0:W,s1:W+H,sill:dt,top:lt,info:ne});for(let de of[X,z]){if(!de)continue;let _e=ge=>(D.a[0]+k[0]*ge-de.a[0])*k[0]+(D.a[1]+k[1]*ge-de.a[1])*k[1],Oe=Math.max(0,_e(W)),$=Math.min(K(de),_e(W+H));if($-Oe<1e-4)continue;let Ge=y.get(de);Ge||y.set(de,Ge=[]),Ge.push({s0:Oe,s1:$,sill:dt,top:lt,info:ne,cont:!0})}}let M=Math.min(i.cut_height,i.height),w=new jt;for(let R of s){let C=p.get(R),F=Gc([R.b[0]-R.a[0],R.b[1]-R.a[1]]),D=(y.get(R)??[]).sort((H,W)=>H.s0-W.s0),N=Zs(R,i.height),k=[],V=[-1/0,...new Set(D.flatMap(H=>[H.s0,H.s1])).values(),1/0].sort((H,W)=>H-W);for(let H=0;H+1<V.length;H++){let W=V[H],tt=V[H+1];if(tt-W<1e-6)continue;let st=Number.isFinite(W)&&Number.isFinite(tt)?(W+tt)/2:Number.isFinite(W)?W+1:tt-1,it=D.filter(lt=>lt.s0<st&&lt.s1>st).map(lt=>[lt.sill,lt.top]).sort((lt,dt)=>lt[0]-dt[0]),ht=[],gt=-en;for(let[lt,dt]of it)lt>gt+1e-4&&ht.push([gt,lt<1e-4?-tw:lt]),gt=Math.max(gt,dt);N>gt+1e-4&&ht.push([gt,N]),k.push({t0:W,t1:tt,ranges:ht})}let X=Math.hypot(R.b[0]-R.a[0],R.b[1]-R.a[1]),z=(o||R.slope)&&h(R.a,F,0,X,N,R)<N-.001,K=z?k.flatMap(H=>{let W=Math.max(H.t0,-.5),tt=Math.min(H.t1,X+.5),st=Math.max(1,Math.ceil((tt-W)/.3));return Array.from({length:st},(it,ht)=>({t0:ht===0?H.t0:W+(tt-W)*ht/st,t1:ht===st-1?H.t1:W+(tt-W)*(ht+1)/st,ranges:H.ranges,inner0:ht>0,inner1:ht<st-1}))}):k.map(H=>({...H,inner0:!1,inner1:!1})),J=H=>(H[0]-R.a[0])*F[0]+(H[1]-R.a[1])*F[1],at=H=>{if(!o)return[H];let W=gf(R.footprint,R.a,F,H.t0,H.t1),tt=W.filter(([gt,lt])=>c(gt,lt)).length;if(tt===0)return[H];if(tt===W.length)return[];let st=Math.max(H.t0,-.5),it=Math.min(H.t1,X+.5),ht=Math.max(1,Math.ceil((it-st)/.05));return Array.from({length:ht},(gt,lt)=>({t0:lt===0?H.t0:st+(it-st)*lt/ht,t1:lt===ht-1?H.t1:st+(it-st)*(lt+1)/ht,ranges:H.ranges,inner0:lt>0||H.inner0,inner1:lt<ht-1||H.inner1})).filter(gt=>!gf(R.footprint,R.a,F,gt.t0,gt.t1).every(([lt,dt])=>c(lt,dt)))};for(let H of z?K.flatMap(at):K){let W=gf(R.footprint,R.a,F,H.t0,H.t1);if(W.length<3)continue;let tt=(ht,gt)=>Math.abs(J(ht)-gt)<1e-4,st=(ht,gt)=>H.inner0&&tt(ht,H.t0)&&tt(gt,H.t0)||H.inner1&&tt(ht,H.t1)&&tt(gt,H.t1),it=z?Math.min(...W.map(([ht,gt])=>l(ht,gt,N,R))):N;for(let[ht,gt]of H.ranges){let lt=Math.min(gt,z?Math.max(...W.map(([ne,pe])=>l(ne,pe,N,R))):gt);if(lt-ht<1e-4||it-ht<.01)continue;let dt=ht>.01,Dt=z&&gt>it,Rt=(ne,pe)=>Math.min(gt,l(ne,pe,N,R));if(ht<M-1e-6){let ne=lt>M+1e-6?q0+C:tr+C,pe=Dt&&it<M?(de,_e)=>Math.min(M,Rt(de,_e)):Math.min(lt,M);Pe(w,W,ht,pe,qs.wall,qs.wallTop,{aoFrom:0,bottom:dt,fold:tr+C,topFold:ne,skipSide:st})}lt>M+1e-6&&it>M+1e-6&&Pe(w,W,Math.max(ht,M),Dt?Rt:lt,qs.wall,qs.wallTop,{aoFrom:0,fold:C,bottom:dt&&ht>=M,skipSide:st})}}}let T=s.flatMap(R=>R.footprint),_=iw(s,T),A=new De;A.p.push(...d.p),A.c.push(...d.c),A.f.push(...d.f);let E=(R,C)=>(y.get(R)??[]).filter(C);for(let R of _.edges){let C=p.get(R.wall);for(let[D,N]of Vc(R,E(R.wall,k=>k.sill<=.005)))A.seg([D[0],.004,D[1]],[N[0],.004,N[1]],Y0);for(let[D,N]of Vc(R,E(R.wall,k=>k.sill<M&&k.top>M)))A.seg([D[0],M,D[1]],[N[0],M,N[1]],rf,Pc+C);let F=Zs(R.wall,i.height);for(let[D,N]of Vc(R,E(R.wall,k=>k.top>=F-.021))){if(!o&&!R.wall.slope){A.seg([D[0],F,D[1]],[N[0],F,N[1]],Qi,F<=M+1e-6?tr+C:C);continue}let k=Math.max(1,Math.ceil(Math.hypot(N[0]-D[0],N[1]-D[1])/.3));for(let V=0;V<k;V++){let X=[D[0]+(N[0]-D[0])*V/k,D[1]+(N[1]-D[1])*V/k],z=[D[0]+(N[0]-D[0])*(V+1)/k,D[1]+(N[1]-D[1])*(V+1)/k];if(c(X[0],X[1])&&c(z[0],z[1]))continue;let K=l(X[0],X[1],F,R.wall),J=l(z[0],z[1],F,R.wall);A.seg([X[0],K,X[1]],[z[0],J,z[1]],Qi,Math.max(K,J)<=M+1e-6?tr+C:C)}}}let S=(R,C)=>l(C[0],C[1],Zs(R,i.height),R);for(let R of _.corners){if(c(R.p[0],R.p[1]))continue;let C=R.walls.reduce((D,N)=>S(N,R.p)>S(D,R.p)+1e-6?N:D,R.wall),F=l(R.p[0],R.p[1],Zs(C,i.height),C);A.segSplit([R.p[0],.004,R.p[1]],[R.p[0],F,R.p[1]],Si,Math.min(M,F),p.get(C))}for(let R of _.joints){let[C,F]=R.walls,D=[S(C,R.a),S(F,R.a)],N=[S(C,R.b),S(F,R.b)];if(Math.abs(D[0]-D[1])<.01&&Math.abs(N[0]-N[1])<.01)continue;let k=D[1]+N[1]>=D[0]+N[0]?F:C,V=p.get(k),X=Math.max(...D),z=Math.max(...N);A.seg([R.a[0],X,R.a[1]],[R.b[0],z,R.b[1]],Qi,Math.max(X,z)<=M+1e-6?tr+V:V);for(let[K,J]of[[R.a,D],[R.b,N]]){let at=Math.min(...J),H=Math.max(...J);H-at>.01&&A.segSplit([K[0],at,K[1]],[K[0],H,K[1]],Si,M,V)}}for(let R of y.values())for(let C of R)C.cont||ew(A,C,M);let P=rw(_.edges,i.rooms,y),U=new jt;bm(w,A,i,U);for(let R of r)pf(w,A,R.face,R.field,i.elevation);let L=[];for(let R of i.furniture){if(l0(R.type))continue;let C=w.count,F=A.p.length/6,D=R,N=on(i,D);if(vc.has(D.type)){let k=yc(s,D,i.height,N);D={...D,x:k.x,z:k.z},N=k.y}Fc(w,A,P,D,N),N+D.h>M+.05&&($0(w,C,M,of),Z0(A,F,M,of)),L.push({id:D.id,start:C,end:w.count})}return{floor:u.geometry(),roomTris:f,holes:m,walls:w.geometry(),water:U.geometry(),lines:A.geometry(),shadow:P.geometry(),buckets:g,openings:v,walls2d:s,openRooms:a,wallBuckets:s.map(R=>p.get(R)),furnitureTris:L,roofUnder:o}}function ew(i,t,e){let{info:n}=t,r=n.bucket,o=(l,c,h)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],s=l=>l>e+1e-6?r:Kt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(o(c,l,a),o(c,l,t.top),Si,e,r);i.seg(o(t.s0,l,t.top),o(t.s1,l,t.top),Si,s(t.top)),t.sill>.01&&i.seg(o(t.s0,l,t.sill),o(t.s1,l,t.sill),Si,s(t.sill))}for(let l of[t.s0,t.s1])i.seg(o(l,n.faceRoom,t.top),o(l,-n.faceOut,t.top),Si,s(t.top)),t.sill>.01&&i.seg(o(l,n.faceRoom,t.sill),o(l,-n.faceOut,t.sill),Si,s(t.sill)),t.sill<e&&t.top>e&&i.seg(o(l,n.faceRoom,e),o(l,-n.faceOut,e),rf,Pc+r)}function gf(i,t,e,n,r){let o=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],s=i;return Number.isFinite(n)&&(s=Im(s,a=>o(a)-n)),Number.isFinite(r)&&(s=Im(s,a=>r-o(a))),s}function Im(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=t(r),a=t(o);if(s>=0&&e.push(r),s>=0!=a>=0){let l=s/(s-a);e.push([r[0]+(o[0]-r[0])*l,r[1]+(o[1]-r[1])*l])}}return e}var Lm=i=>Math.round(i*1e3),Ks=i=>`${Lm(i[0])},${Lm(i[1])}`,Fm=(i,t)=>{let e=Ks(i),n=Ks(t);return e<n?`${e}|${n}`:`${n}|${e}`};function nw(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=o[0]-r[0],a=o[1]-r[1],l=s*s+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let f=((u[0]-r[0])*s+(u[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*s)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=r;for(let u of c){let f=[r[0]+s*u,r[1]+a*u];Ks(f)!==Ks(h)&&e.push([h,f]),h=f}e.push([h,o])}return e}function iw(i,t){let e=i.map(h=>({wall:h,edges:nw(h.footprint,t)})),n=new Map,r=new Map;for(let{wall:h,edges:u}of e)for(let[f,d]of u){let m=Fm(f,d);n.set(m,(n.get(m)??0)+1);let b=r.get(m);b?b.walls.push(h):r.set(m,{a:f,b:d,walls:[h]})}let o=[];for(let h of r.values())h.walls.length===2&&h.walls[0]!==h.walls[1]&&o.push({a:h.a,b:h.b,walls:[h.walls[0],h.walls[1]]});let s=[],a=new Map,l=(h,u,f)=>{let d=Ks(h),m=a.get(d);m||a.set(d,m={p:h,wall:u,walls:[],d:[]}),m.d.push(f),m.walls.includes(u)||m.walls.push(u)};for(let{wall:h,edges:u}of e)for(let[f,d]of u){if(n.get(Fm(f,d))!==1)continue;let m=Math.hypot(d[0]-f[0],d[1]-f[1]);if(m<1e-4)continue;s.push({a:f,b:d,wall:h});let b=[(d[0]-f[0])/m,(d[1]-f[1])/m];l(f,h,b),l(d,h,b)}let c=[];for(let{p:h,wall:u,walls:f,d}of a.values())d.some(m=>d.some(b=>Math.abs(m[0]*b[1]-m[1]*b[0])>.05))&&c.push({p:h,wall:u,walls:f});return{edges:s,corners:c,joints:o}}function Vc(i,t){if(!t.length)return[[i.a,i.b]];let e=Gc([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Gc([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],o=r(i.a),s=r(i.b),a=Math.min(o,s),l=Math.max(o,s),c=[[a,l]];for(let u of t)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let m=[];return u.s0>f&&m.push([f,u.s0]),u.s1<d&&m.push([u.s1,d]),m});let h=u=>{let f=(u-o)/(s-o||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>o<=s?[h(u),h(f)]:[h(f),h(u)])}function rw(i,t,e){let n=new jt,r=new j(mf,mf,mf),o=new j(1,1,1),s=.002;for(let a of i)for(let[l,c]of Vc(a,(e.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let d=[u/f,-h/f],m=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(p=>p.points.length>=3&&Zt(m,p.points)))continue;let b=[l[0]+d[0]*kc,l[1]+d[1]*kc],g=[c[0]+d[0]*kc,c[1]+d[1]*kc];n.tri([l[0],s,l[1]],[b[0],s,b[1]],[g[0],s,g[1]],r,o,o),n.tri([l[0],s,l[1]],[g[0],s,g[1]],[c[0],s,c[1]],r,o,r)}return n}function Om(i,t){let e=t.furniture.filter(o=>o.type==="stairwell").map(Ki),n=i.filter(o=>o.elevation<t.elevation).sort((o,s)=>s.elevation-o.elevation)[0];if(!n)return e;let r=n.furniture.filter(o=>(s0.has(o.type)||o.type==="loft_ladder"||be(o.type)?.hole)&&n.elevation+(o.mount_y??0)+o.h>=t.elevation-.3).map(Ki);return[...e,...r]}function Zs(i,t){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(t,i.height??t)}function Gc(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function zc(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var ow=new j(1516340),sw=new j(527897),bf=new j(1779256),Js=new j(1120808),aw=new j(4163256),Nm=new j(5995161),lw=new j(2240842),cw=new j(1318704),uw=.35,Do=.8,hw=.2,Um=.1;function fw(i,t,e,n){let r=-1/0;for(let o of i.floors)if(!(o.elevation>.3))for(let s of o.outdoor??[])s.points.length<3||s.type==="pool"||s.type==="balcony"||qn(s.type)||!Zt(e,s.points)||(r=Math.max(r,o.elevation+Sr(o,s)+wo[s.type]-t.elevation));return r>n?r-n:0}function Bm(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let r=Zh(i,t);if(!r)return null;let o=(m,b)=>So(m,b)-t.elevation,s=n&&r.some(([m,b])=>o(m,b)<-en-.03);if(!s&&!Kh(i,t))return null;let a=t.height,l=-uw,c=(m,b)=>Math.min(a,So(m,b)-t.elevation),h=new jt,u=new jt,f=new De,d=(m,b,g,p,x,y,v,M)=>{let w=[b[0]-m[0],b[2]-m[2]];-w[1]*x[0]+w[0]*x[1]>0?(M.tri(m,b,g,y,y,v),M.tri(m,g,p,y,v,v)):(M.tri(m,g,b,y,v,y),M.tri(m,p,g,y,v,v))};for(let m=0;m<r.length;m++){let b=r[m],g=r[(m+1)%r.length],p=Math.hypot(g[0]-b[0],g[1]-b[1]);if(p<1e-4)continue;let x=[(g[0]-b[0])/p,(g[1]-b[1])/p],y=[x[1],-x[0]],v=[(b[0]+g[0])/2+y[0]*.05,(b[1]+g[1])/2+y[1]*.05];Zt(v,r)&&(y=[-y[0],-y[1]]);let M=(E,S=.012)=>[b[0]+x[0]*E+y[0]*S,b[1]+x[1]*E+y[1]*S],w=[];for(let E of e){if(E.opening.type!=="window"||!E.exterior||E.opening.well===!1)continue;let S=E.start[0]+E.axis[0]*(E.width/2)-E.toRoom[0]*E.faceOut,P=E.start[1]+E.axis[1]*(E.width/2)-E.toRoom[1]*E.faceOut,U=(S-b[0])*x[0]+(P-b[1])*x[1];Math.abs((S-b[0])*y[0]+(P-b[1])*y[1])>.08||U<-.05||U>p+.05||F0(i,t,E.exterior,E.sill,[S,P])&&w.push({s0:Math.max(0,U-E.width/2-Um),s1:Math.min(p,U+E.width/2+Um),bottom:Math.max(l+.05,E.sill-hw),rim:E.opening.well_rim??0})}let T=new Set([0,p]);for(let E of w)T.add(E.s0),T.add(E.s1);let _=[...T].sort((E,S)=>E-S),A=[];for(let E=0;E<_.length-1;E++){let S=Math.max(1,Math.ceil((_[E+1]-_[E])/.5));for(let P=0;P<S;P++)A.push(_[E]+(_[E+1]-_[E])*P/S)}A.push(p);for(let E=0;E<A.length-1;E++){let S=A[E],P=A[E+1],U=w.find(X=>S>=X.s0-1e-6&&P<=X.s1+1e-6),L=M(S),R=M(P),C=c(L[0],L[1]),F=c(R[0],R[1]),D=U?Math.min(C,U.bottom):C,N=U?Math.min(F,U.bottom):F;if(D>l+.01||N>l+.01){let X=Math.min(D,l),z=Math.min(N,l);d([L[0],X,L[1]],[R[0],z,R[1]],[R[0],Math.max(N,l),R[1]],[L[0],Math.max(D,l),L[1]],y,sw,ow,h)}let k=o(L[0],L[1]),V=o(R[0],R[1]);if(s&&(k<-en-.01||V<-en-.01)&&d([L[0],Math.min(k,-en),L[1]],[R[0],Math.min(V,-en),R[1]],[R[0],-en,R[1]],[L[0],-en,L[1]],y,cw,lw,h),C>l||F>l||s&&(k<-en||V<-en)){let X=s?Math.min(k,Math.max(C,l)):Math.max(C,l),z=s?Math.min(V,Math.max(F,l)):Math.max(F,l);f.seg([L[0],X+.004,L[1]],[R[0],z+.004,R[1]],aw)}}for(let E of w){let S=M(E.s0,0),P=M(E.s1,0),U=[S[0]+y[0]*Do,S[1]+y[1]*Do],L=[P[0]+y[0]*Do,P[1]+y[1]*Do],R=[(S[0]+P[0]+U[0]+L[0])/4,(S[1]+P[1]+U[1]+L[1])/4],C=fw(i,t,R,c(R[0],R[1])),F=Math.max(E.rim,C>0?C+.02:0),D=K=>c(K[0],K[1])+F,N=E.bottom,k=(K,J)=>[K[0],J,K[1]];u.tri(k(S,N),k(P,N),k(L,N),Js),u.tri(k(S,N),k(L,N),k(U,N),Js);let V=(K,J)=>{u.tri(k(K,N),k(J,N),k(J,D(J)),Js,Js,bf),u.tri(k(K,N),k(J,D(J)),k(K,D(K)),Js,bf,bf)};V(S,U),V(P,L),V(U,L);let X=K=>[K[0],D(K)+.01,K[1]];for(let[K,J]of[[S,P],[P,L],[L,U],[U,S]])f.seg(X(K),X(J),Nm);let z=Math.max(3,Math.round((E.s1-E.s0)/.12));for(let K=1;K<z;K++){let J=K/z,at=[S[0]+(P[0]-S[0])*J,S[1]+(P[1]-S[1])*J];f.seg(X(at),X([at[0]+y[0]*Do,at[1]+y[1]*Do]),Nm)}}}return h.count||u.count?{earth:h,wells:u,lines:f}:null}var km=i=>Math.round(i*1e3)/1e3;function dw(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let o=[(n[0]-e[0])/r,(n[1]-e[1])/r],s=l=>Math.abs(-(l[0]-e[0])*o[1]+(l[1]-e[1])*o[0]),a=l=>(l[0]-e[0])*o[0]+(l[1]-e[1])*o[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,h)=>{let u=l.points[(h+1)%l.points.length];return s(c)>.02||s(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function zm(i,t,e,n,r,o=.05){let s=i.rooms.find(f=>f.points.length>=3&&Zt([t.x,t.z],f.points));if(!s)return[e,n];let a=s.points,l=An(a)>=0?1:-1,c=Ki({...t}),h=e,u=n;for(let f=0;f<2;f++){let d=Ki({...t,x:h,z:u});for(let m=0;m<a.length;m++){let b=a[m],g=a[(m+1)%a.length],p=Math.hypot(g[0]-b[0],g[1]-b[1]);if(p<.05)continue;let x=[(g[0]-b[0])/p,(g[1]-b[1])/p],y=[-x[1]*l,x[0]*l],v=dw(i,s.id,b,g)?r/2:0,M=0;d.forEach((w,T)=>{let _=(w[0]-b[0])*x[0]+(w[1]-b[1])*x[1];if(_<-.01||_>p+.01)return;let A=(w[0]-b[0])*y[0]+(w[1]-b[1])*y[1]-v,E=c[T];(E[0]-b[0])*y[0]+(E[1]-b[1])*y[1]-v<-o||A<M&&(M=A)}),M<-1e-4&&(h-=y[0]*M,u-=y[1]*M)}}return[km(h),km(u)]}var pw=500,mw=1e3;function Vm(i,t){let e=t-i.timeStamp;return e>mw&&e<6e4}var Gm=.12,Hm=1.35,gw=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Hc=class{view={target:new Y,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(o,s,a)=>{t.addEventListener(o,s,a),this.listeners.push([o,s])};r("pointerdown",o=>this.onDown(o)),r("pointermove",o=>this.onMove(o)),r("pointerup",o=>this.onUp(o)),r("pointercancel",o=>this.onUp(o)),r("wheel",o=>this.onWheel(o),{passive:!1}),r("contextmenu",o=>o.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(t-c)/h),f=gw(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=xf(this.view.phi+this.velocity.phi,Gm,Hm),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:o,phi:s}=this.view;return this.camera.position.set(n.x+r*Math.sin(s)*Math.sin(o),n.y+r*Math.cos(s),n.z+r*Math.sin(s)*Math.cos(o)),this.camera.lookAt(n),e}flyTo(t,e=700,n=!1){let r={...this.view,target:this.view.target.clone()},o=t.theta??r.theta;for(;o-r.theta>Math.PI;)o-=2*Math.PI;for(;o-r.theta<-Math.PI;)o+=2*Math.PI;let s=this.angleLock&&!n?{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:o,phi:t.phi??r.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:r,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},pw)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}if(Vm(t,performance.now())&&!this.swiping){e.x=t.clientX,e.y=t.clientY,this.pointers.size>1&&(this.pinch=this.pinchState());return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let o=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-o.left,this.down.y-o.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let o=e.type==="mouse";if(o&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!o))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=xf(this.view.phi+c,Gm,Hm),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let o=this.pinchState();this.pinch&&o&&(this.zoom(this.pinch.dist/Math.max(1,o.dist)),this.pan(o.mid[0]-this.pinch.mid[0],o.mid[1]-this.pinch.mid[1])),this.pinch=o}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,o=performance.now();o-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=o,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),!Vm(t,performance.now())&&(this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change())}zoom(t){this.view.radius=xf(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,o=new Y(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),s=new Y(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(o,-t*r),this.view.target.addScaledVector(s,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function xf(i,t,e){return Math.min(e,Math.max(t,i))}function pi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var Yc=5,Wc=512,Wm=.7,Xc=class{projectors=new Map;loader=new gr;loggedIds="";depthMaterial=new Xt({colorWrite:!1,side:ie});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,o]of this.projectors)e.has(r)||this.drop(o);for(let[r,o]of e){let s=this.projectors.get(r);if(!s){let a=new Ye(Wc,Wc);a.depthTexture=new si(Wc,Wc),s={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new Qe(60,16/9,Wm,40),target:a,matrix:new Se,uniforms:{uProjMat:{value:new Se},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},s.camera.layers.set(Yc),this.projectors.set(r,s)}s.url=o,this.fetch(s)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`Home 3D lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=Ne;let r=n.image;r?.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`Home 3D lab: first picture of ${t.id}`,r?.width,"x",r?.height),t.texture?.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`Home 3D lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,o){for(let s of this.projectors.values()){let a=s.texture?r(s.id):null;if(s.texture&&!a&&!s.noPoseLogged&&(s.noPoseLogged=!0,console.warn(`Home 3D lab: ${s.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!a){for(let b of s.overlays.values())b.visible=!1;continue}let l=new Set(n.map(b=>b.key));for(let[b,g]of s.overlays)l.has(b)||(g.parent?.remove(g),g.material.dispose(),s.overlays.delete(b));for(let b of n){let g=s.overlays.get(b.key);(!g||g.parent!==b.parent)&&(g&&(g.parent?.remove(g),g.material.dispose()),g=new At(b.geometry,this.material(s,b.masks)),g.renderOrder=2.5,g.frustumCulled=!1,b.parent.add(g),s.overlays.set(b.key,g)),g.geometry!==b.geometry&&(g.geometry=b.geometry),g.visible=b.visible}let c=`${a.position.toArray().map(b=>b.toFixed(3))},${a.direction.toArray().map(b=>b.toFixed(3))},${a.fov},${a.reach},${s.aspect.toFixed(3)},${o}`;if(c===s.poseKey)continue;s.poseKey=c;let h=s.camera,u=Math.min(150,Math.max(20,a.fov))*(Math.PI/180);h.fov=2*Math.atan(Math.tan(u/2)/s.aspect)*180/Math.PI,h.aspect=s.aspect,h.far=a.reach,h.near=Wm,h.position.copy(a.position),h.lookAt(a.position.clone().add(a.direction)),h.updateProjectionMatrix(),s.uniforms.uNearFar.value=[h.near,h.far],h.updateMatrixWorld(),s.uniforms.uProjMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);let f=[];for(let b of this.projectors.values())for(let g of b.overlays.values())g.visible&&f.push(g);for(let b of f)b.visible=!1;let d=t.getRenderTarget(),m=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(s.target),t.clear(),t.render(e,h),t.setRenderTarget(d),e.overrideMaterial=m;for(let b of f)b.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){for(let e of t.overlays.values())e.parent?.remove(e),e.material.dispose();t.texture?.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new Xt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?pi(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(o,s)=>{r?.(o,s),Object.assign(o.uniforms,t.uniforms),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function Xm(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function Ym(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[o,s,a]=[i[r-1],i[r],i[r+1]],l=Xm(o,s),c=Xm(s,a),h=Math.min(t,l*.45,c*.45),u=[(o[0]-s[0])/l,(o[1]-s[1])/l,(o[2]-s[2])/l],f=[(a[0]-s[0])/c,(a[1]-s[1])/c,(a[2]-s[2])/c];if(h<.005||u[0]*f[0]+u[1]*f[1]+u[2]*f[2]<-.999){n.push(s);continue}let d=[s[0]+u[0]*h,s[1]+u[1]*h,s[2]+u[2]*h],m=[s[0]+f[0]*h,s[1]+f[1]*h,s[2]+f[2]*h];for(let b=0;b<=e;b++){let g=b/e,p=(1-g)*(1-g),x=2*(1-g)*g,y=g*g;n.push([p*d[0]+x*s[0]+y*m[0],p*d[1]+x*s[1]+y*m[1],p*d[2]+x*s[2]+y*m[2]])}}return n.push(i[i.length-1]),n}var qm=new j(7568261),$m=new j(4869974),bw=new j(3116287),Zm=new j(3948872),vf=Ur([.35,.85,.4]),Km=10;function Ur(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function js(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function Jm(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Ur(js(i,t));return[e,Ur(js(i,e))]}function Ti(i,t){let e=.5+.5*Math.max(0,t[0]*vf[0]+t[1]*vf[1]+t[2]*vf[2]);return i.clone().multiplyScalar(e)}function Oo(i,t,e,n,r,o=!1){let s=Ur([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=Jm(s),c=(h,u)=>{let f=u/Km*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[h[0]+d[0]*n,h[1]+d[1]*n,h[2]+d[2]*n],n:d}};for(let h=0;h<Km;h++){let u=c(t,h),f=c(t,h+1),d=c(e,h),m=c(e,h+1);i.tri(u.p,m.p,d.p,Ti(r,u.n),Ti(r,m.n),Ti(r,d.n)),i.tri(u.p,f.p,m.p,Ti(r,u.n),Ti(r,f.n),Ti(r,m.n)),o&&(i.tri([...t],f.p,u.p,Ti(r,[-s[0],-s[1],-s[2]])),i.tri([...e],d.p,m.p,Ti(r,s)))}}function xw(i,t,e,n,r,o,s,a){let l=Ur(js(e,n)),c=(u,f,d)=>[t[0]+e[0]*u*r+n[0]*f*o+l[0]*d*s,t[1]+e[1]*u*r+n[1]*f*o+l[1]*d*s,t[2]+e[2]*u*r+n[2]*f*o+l[2]*d*s],h=[];for(let[u,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])h.push([u,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[u,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])h.push([u,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[u,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])h.push([u,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[u,f]of h){let d=Ti(a,u);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function jm(i,t){if(t.points.length<2)return;let e=t.radius,n=Ym(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[o,s]=[n[r-1],n[r]];if(Math.hypot(s[0]-o[0],s[1]-o[1],s[2]-o[2])<1e-4)continue;let a=o[1]<-.02&&s[1]<-.02?qm.clone().multiplyScalar(.55):qm;Oo(i,o,s,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let o=s=>[[r.p[0]-r.dir[0]*s,r.p[1]-r.dir[1]*s,r.p[2]-r.dir[2]*s],[r.p[0]+r.dir[0]*s,r.p[1]+r.dir[1]*s,r.p[2]+r.dir[2]*s]];if(r.kind==="sleeve"){let[s,a]=o(.03);Oo(i,s,a,e*1.22,$m,!0)}else if(r.kind==="sight"){let[s,a]=o(.08);Oo(i,s,a,e*1.08,t.water?new j(...t.water).multiplyScalar(.9):new j(10475240),!0);for(let l of o(.08)){let[c,h]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];Oo(i,c,h,e*1.3,$m,!0)}}else{let[s,a]=o(.055);Oo(i,s,a,e*1.4,Zm,!0);let[l]=Jm(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],h=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];Oo(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],h,e*.35,Zm,!0);let u=r.open===!1?Ur(js(r.dir,c)):r.dir,f=Ur(js(u,c)),d=[h[0]+u[0]*.045,h[1]+u[1]*.045,h[2]+u[2]*.045];xw(i,d,u,f,.1,.028,.012,bw)}}}var yf=1.62,qc=.2,_f=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let o=hi(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=o.walls;let s=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=To(a,e.rooms,e.walls??[]);if(!c)continue;let h=Eo(this.walls,a,c);if(!h)continue;let u=h.wall,f=u.b[0]-u.a[0],d=u.b[1]-u.a[1],m=Math.hypot(f,d)||1,b=f/m,g=d/m,p=[u.a[0]+b*h.s,u.a[1]+g*h.s],x=u.left+.45,y=u.right+.45,v=[[p[0]-g*x,p[1]+b*x],[p[0]+g*y,p[1]-b*y]];if(u.exterior&&e.elevation>.3&&!(e.outdoor??[]).some(w=>w.points.length>=3&&Zt(v[1],w.points)))continue;let M=s.get(u)??[];M.push([h.s-a.width/2+.05,h.s+a.width/2-.05]),s.set(u,M),this.doors.push({centre:p,p:v})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c);h<1e-6||this.solids.push({a:a.a,u:[l/h,c/h],len:h,left:a.left,right:a.right,gaps:s.get(a)??[]})}}blocked(t,e=qc){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=qc){for(let n of this.obstacles){let r=t[0]-n.c[0],o=t[1]-n.c[1];if(Math.abs(r*n.u[0]+o*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+o*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=qc){for(let n of this.solids){let r=t[0]-n.a[0],o=t[1]-n.a[1],s=r*n.u[0]+o*n.u[1];if(s<-e||s>n.len+e)continue;let a=-r*n.u[1]+o*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>s>l+e*.6&&s<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let o=1;o<=r;o++){let s=o/r;if(this.blocked([t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]))return!1}return!0}roomAt(t){return this.rooms.find(e=>Zt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let m=this.path(d,e);return m?[d,...m]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let m=this.path(t,d);return m?[...m,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>vw(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let m=qc+.12,b=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,p])=>[d.c[0]+d.u[0]*g*(d.hw+m)+b[0]*p*(d.hd+m),d.c[1]+d.u[1]*g*(d.hw+m)+b[1]*p*(d.hd+m)])}).filter(d=>!this.blocked(d)),o=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],s=o.length,a=new Array(s).fill(1/0),l=new Array(s).fill(-1),c=new Array(s).fill(!1);a[0]=0;let h=new Map,u=(d,m)=>{let b=d<m?`${d}:${m}`:`${m}:${d}`,g=h.get(b);return g===void 0&&(g=this.clear(o[d],o[m]),h.set(b,g)),g};for(;;){let d=-1;for(let m=0;m<s;m++)!c[m]&&a[m]<1/0&&(d<0||a[m]<a[d])&&(d=m);if(d<0)return null;if(d===1)break;c[d]=!0;for(let m=0;m<s;m++){if(c[m]||m===d)continue;let b=Math.hypot(o[d][0]-o[m][0],o[d][1]-o[m][1]);a[d]+b>=a[m]||u(d,m)&&(a[m]=a[d]+b,l[m]=d)}}let f=[];for(let d=1;d>0;d=l[d])f.unshift(o[d]);return f}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let o=To(r,this.floor.rooms,this.floor.walls??[]);if(!o)continue;let s=Eo(this.walls,r,o);if(!s||!s.wall.exterior)continue;let a=s.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c)||1,u=l/h,f=c/h,d=[a.a[0]+u*s.s,a.a[1]+f*s.s],m=[d[0]-f*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(m))return{p:m,yaw:this.openYaw(m,Math.atan2(u,-f))}}let e=[...this.rooms].sort((r,o)=>Qm(o)-Qm(r))[0],n=e?this.freeNear(Zi(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),o=Math.sin(e);for(let s=.2;s<n;s+=.15)if(this.blocked([t[0]+r*s,t[1]+o*s],.05))return s;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let o=0;o<24;o++){let s=o/24*Math.PI*2,a=this.sight(t,s);if(e!==null){let l=Math.abs(s-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=s)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function vw(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r||1,s=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o));return Math.hypot(i[0]-(t[0]+n*s),i[1]-(t[1]+r*s))}function Qm(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,o]=e[n],[s,a]=e[(n+1)%e.length];t+=r*a-s*o}return Math.abs(t/2)}var Mf=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let o=r.start??(()=>{let s=e.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...o},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let s of t.floors)s.mask.standing.value=65535,s.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+yf}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,o=this.floorY(),s=Math.cos(r);return this.v.camera.position.set(t,o,e),this.v.camera.lookAt(t+Math.cos(n)*s,o+Math.sin(r),e+Math.sin(n)*s),this.v.controls.view.target.set(t,o-yf,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(Zi(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,o=0,s=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(o+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(o-=1),this.keys.has("a")&&(s-=1),this.keys.has("d")&&(s+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(o+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),o||s){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*o-Math.sin(r.yaw)*s)*l,h=(Math.sin(r.yaw)*o+Math.cos(r.yaw)*s)*l;this.move(c,h),n=!0}else if(this.path.length){let[l,c]=this.path[0],h=l-r.x,u=c-r.z,f=Math.hypot(h,u),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=h/f*d,r.z+=u/f*d,this.turnTo=Math.atan2(u,h)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,o=1-(e-n.top)/n.height*2,{yaw:s,pitch:a,x:l,z:c}=this.state,h=this.v.camera.fov*Math.PI/180,u=Math.tan(h/2),f=n.width/n.height,d=Math.cos(a),m=[Math.cos(s)*d,Math.sin(a),Math.sin(s)*d],b=[-Math.sin(s),0,Math.cos(s)],g=[m[1]*b[2]-m[2]*b[1],m[2]*b[0]-m[0]*b[2],m[0]*b[1]-m[1]*b[0]],p=[-g[0],-g[1],-g[2]],x=[m[0]+b[0]*r*u*f+p[0]*o*u,m[1]+b[1]*r*u*f+p[1]*o*u,m[2]+b[2]*r*u*f+p[2]*o*u];if(x[1]>=-.02)return null;let y=yf/-x[1];return[l+x[0]*y,c+x[2]*y]}bind(){let t=(s,a,l,c)=>{s.addEventListener(a,l,c),this.listeners.push([s,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",s=>{e||(e={x:s.clientX,y:s.clientY,moved:!1,id:s.pointerId},this.surface.setPointerCapture?.(s.pointerId))}),t(this.surface,"pointermove",s=>{if(!e||s.pointerId!==e.id)return;let a=s.clientX-e.x,l=s.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=s.clientX,e.y=s.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=s=>{if(!e||s.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(s.clientX,s.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",s=>{s.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-s.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=s=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(s.key.toLowerCase()),o=s=>!!s.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",s=>{!r(s)||o(s)||s.ctrlKey||s.metaKey||s.altKey||(s.preventDefault(),s.stopImmediatePropagation(),this.keys.add(s.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",s=>{r(s)&&(this.keys.delete(s.key.toLowerCase()),s.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function yw(i,t){let e=be(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function wf(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,o=r?yw(n,r):null;return o?[n,o]:[n]});return{...i,furniture:e}}var tg=8,eg=1024,Ei=6,$c=class{group=new Ce;shadow;target=null;arc=new Ce;glow=ww();textures=[];constructor(){this.shadow=new At(new Gn(1,1),new Xt({color:0,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,this.arc.visible=!1,this.group.add(this.shadow,this.arc)}setShadow(t,e,n,r,o,s,a=0){let[l,c,h,u]=[n[0]-.5,n[1]-.5,n[2]+.5,n[3]+.5],f=Math.min(eg,Math.max(32,Math.ceil((h-l)*tg))),d=Math.min(eg,Math.max(32,Math.ceil((u-c)*tg)));if(!this.target||this.target.width!==f||this.target.height!==d){this.target?.dispose(),this.target=new Ye(f,d,{minFilter:Xe,magFilter:Xe,depthBuffer:!1});let w=this.shadow.material;w.map=this.target.texture,w.needsUpdate=!0}let m=new ri,b=w=>{let T=new Float32Array(w.length/2*3);for(let A=0,E=0;A<w.length;A+=2,E+=3)T.set([w[A],-w[A+1],0],E);let _=new Vt;return _.setAttribute("position",new It(T,3)),_},g=new At(b(e),new Xt({color:16777215,side:ie})),p=[];for(let w of r)for(let T of pn(w))for(let _ of T)p.push(w[_][0],w[_][1]);let x=new At(b(p),new Xt({color:0,transparent:!0,opacity:0,blending:Ln,side:ie}));x.renderOrder=1,m.add(g,x);let y=new In(l,h,-c,-u,.1,10);y.position.z=1;let v=t.getRenderTarget();t.setRenderTarget(this.target),t.clear(),t.render(m,y),t.setRenderTarget(v);for(let w of[g,x])w.geometry.dispose(),w.material.dispose();this.shadow.scale.set(h-l,u-c,1),this.shadow.position.set((l+h)/2,o,(c+u)/2);let M=this.shadow.material;M.opacity=s,M.color.set(a),this.shadow.visible=s>.01}hideShadow(){this.shadow.visible=!1}showShadow(t){let e=this.shadow.material;this.shadow.visible=t&&!!e.map&&e.opacity>.01}setArc(t){if(this.clearArc(),t.fade<=.01||t.points.length<2)return;let e=t.light?Tn:Ee,n=(o,s)=>{let a=Mw(t.points.map(c=>c.at),o,t.points.map(c=>_w(c.elevation,t.light).multiplyScalar(c.t<=t.now?1:t.light?.75:.5))),l=new At(a,new Xt({vertexColors:!0,transparent:!0,opacity:s*t.fade,blending:e,depthWrite:!1}));return l.renderOrder=6,l};this.arc.add(n(t.size*.09,t.light?.95:1)),t.light||this.arc.add(n(t.size*.3,.22));let r=new zi(ng(t.hours.flat()),new Mi({color:t.light?13658624:16767370,map:this.glow,size:t.size*.55,transparent:!0,opacity:t.fade,blending:e,depthWrite:!1}));if(r.renderOrder=6,this.arc.add(r),t.sun){let o=this.sprite(Sw(t.light),t.size*5,t.size*5,t.fade,e);o.position.set(...t.sun),this.arc.add(o)}for(let o of t.labels){let s=this.sprite(Tw(`${o.rising?"\u2191":"\u2193"} ${o.text}`,t.light),t.size*5.2,t.size*1.7,t.fade,Tn,!0);s.position.set(...o.at),this.arc.add(s)}this.buildRing(t),this.arc.visible=!0}buildRing(t){let{center:e,r:n,north:r,letters:o}=t.ring,s=e[1]+.03,a=(h,u)=>{let f=r+h*Math.PI/180;return[e[0]+Math.sin(f)*u,s,e[2]-Math.cos(f)*u]},l=[];for(let h=0;h<360;h+=3)l.push(...a(h,n),...a(h+3,n));for(let h=0;h<360;h+=15)l.push(...a(h,n),...a(h,n*(h%90===0?.93:.97)));let c=new qe(ng(l),new $e({color:t.light?9071162:16761963,transparent:!0,opacity:(t.light?.45:.32)*t.fade,blending:t.light?Tn:Ee,depthWrite:!1}));c.renderOrder=6,this.arc.add(c),o.forEach((h,u)=>{let f=this.sprite(Ew(h,u===0,t.light),t.size*1.6,t.size*1.6,t.fade,Tn,!0);f.position.set(...a(u*90,n*1.07)),f.position.y+=t.size*.6,this.arc.add(f)})}sprite(t,e,n,r,o,s=!1){this.textures.push(t);let a=new rs(new ho({map:t,transparent:!0,opacity:r,blending:o,depthWrite:!1,depthTest:!s}));return a.scale.set(e,n,1),a.renderOrder=6,a}hideArc(){this.clearArc()}clearArc(){for(let t of[...this.arc.children]){this.arc.remove(t);let e=t;e.geometry?.dispose(),e.material.dispose()}for(let t of this.textures)t.dispose();this.textures=[],this.arc.visible=!1}dispose(){this.clearArc(),this.target?.dispose(),this.glow.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}};function ng(i){let t=new Vt;return t.setAttribute("position",new It(i,3)),t}function _w(i,t){let e=Math.min(1,Math.max(0,i/35)),n=new j(t?13778970:16730666),r=new j(t?14711552:16753978),o=new j(t?15769600:16773832);return e<.4?n.lerp(r,e/.4):r.lerp(o,(e-.4)/.6)}function Mw(i,t,e){let n=[],r=[],o=[],s=new Y(0,1,0);for(let l=0;l<i.length;l++){let c=new Y(...i[l]),h=new Y(...i[Math.max(0,l-1)]),f=new Y(...i[Math.min(i.length-1,l+1)]).sub(h).normalize(),d=new Y().crossVectors(f,s);d.lengthSq()<1e-6&&d.set(1,0,0),d.normalize();let m=new Y().crossVectors(d,f).normalize();for(let b=0;b<Ei;b++){let g=b/Ei*Math.PI*2,p=c.clone().addScaledVector(d,Math.cos(g)*t).addScaledVector(m,Math.sin(g)*t);n.push(p.x,p.y,p.z),r.push(e[l].r,e[l].g,e[l].b)}if(l!==0)for(let b=0;b<Ei;b++){let g=(l-1)*Ei+b,p=(l-1)*Ei+(b+1)%Ei,x=l*Ei+b,y=l*Ei+(b+1)%Ei;o.push(g,x,y,g,y,p)}}let a=new Vt;return a.setAttribute("position",new It(n,3)),a.setAttribute("color",new It(r,3)),a.setIndex(o),a}function Zc(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function ww(){let[i,t]=Zc(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new vn(i)}function Sw(i){let[t,e]=Zc(256,256);e.translate(128,128);for(let r=0;r<12;r++){e.save(),e.rotate(r/12*Math.PI*2);let o=r%2===0?124:92,s=e.createLinearGradient(0,0,0,-o);s.addColorStop(0,i?"rgba(240,140,0,0.75)":"rgba(255,214,140,0.7)"),s.addColorStop(1,"rgba(255,170,60,0)"),e.fillStyle=s,e.beginPath(),e.moveTo(-7,0),e.lineTo(0,-o),e.lineTo(7,0),e.fill(),e.restore()}let n=e.createRadialGradient(0,0,0,0,0,80);return n.addColorStop(0,i?"rgba(255,190,60,0.95)":"rgba(255,236,190,1)"),n.addColorStop(.3,i?"rgba(245,150,20,0.8)":"rgba(255,190,90,0.75)"),n.addColorStop(1,"rgba(255,140,40,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,80,0,Math.PI*2),e.fill(),e.fillStyle=i?"#fff3cf":"#fffaf0",e.beginPath(),e.arc(0,0,22,0,Math.PI*2),e.fill(),new vn(t)}function Tw(i,t){let[e,n]=Zc(320,104);n.font="600 52px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let r=Math.min(304,n.measureText(i).width+56),o=(320-r)/2;return n.beginPath(),typeof n.roundRect=="function"?n.roundRect(o,10,r,84,42):n.rect(o,10,r,84),n.fillStyle=t?"rgba(255,248,236,0.92)":"rgba(20,12,4,0.72)",n.fill(),n.lineWidth=4,n.strokeStyle=t?"rgba(224,123,0,0.9)":"rgba(255,196,107,0.85)",n.stroke(),n.fillStyle=t?"#a34f00":"#ffe2a8",n.fillText(i,160,54),new vn(e)}function Ew(i,t,e){let[n,r]=Zc(96,96);return r.font=`${t?800:600} 64px system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=e?"rgba(255,255,255,0.9)":t?"rgba(255,90,60,0.9)":"rgba(255,196,107,0.8)",r.shadowBlur=12,r.fillStyle=t?e?"#c0301a":"#ff6a4a":e?"#7a5a2a":"#ffd9a0",r.fillText(i,48,52),new vn(n)}var Aw=40;function ig(i,t,e,n,r){let o=[];if(n<=0)return o;let s=1/Math.tan(n*Math.PI/180),a=(c,h,u)=>{let f=Math.min(Aw,Math.max(0,h-r)*s);return[c-e[0]*f,u-e[1]*f]},l=(c,h,u)=>o.push(c[0],c[1],h[0],h[1],u[0],u[1]);for(let c of i.floors)for(let h of c.rooms){if(h.outdoor||h.points.length<3)continue;let u=c.elevation+(h.ceiling_height??c.height);if(u<=r)continue;let f=Math.max(r,c.elevation),d=h.points.map(([b,g])=>a(b,f,g)),m=h.points.map(([b,g])=>a(b,u,g));for(let[b,g,p]of pn(h.points))l(d[b],d[g],d[p]),l(m[b],m[g],m[p]);for(let b=0;b<h.points.length;b++){let g=(b+1)%h.points.length;l(d[b],d[g],m[g]),l(d[b],m[g],m[b])}}for(let c of t){let h=c.floor.elevation+c.base,u=c.solid.p;for(let f=0;f+8<u.length;f+=9)l(a(u[f],h+u[f+1],u[f+2]),a(u[f+3],h+u[f+4],u[f+5]),a(u[f+6],h+u[f+7],u[f+8]))}return o}function rg(i){if(!i.length)return null;let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let o=0;o<i.length;o+=2)t=Math.min(t,i[o]),n=Math.max(n,i[o]),e=Math.min(e,i[o+1]),r=Math.max(r,i[o+1]);return[t,e,n,r]}function Sf(i,t){let e=[],n=[],r=[],o=[],s=[];for(let{face:l,field:c}of i){let h=e.length/3,u=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=Rw(c.id)%1e3/1e3;for(let b of Ws(l,c)){let[g,p,x,y]=b.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),v=[[g,0,0],[p,1,0],[x,1,1],[y,0,1]];for(let M of[0,1,2,0,2,3]){let[w,T,_]=v[M];e.push(w[0],w[1],w[2]),n.push(T,_),r.push(u,f),o.push(d)}}let m=e.length/3-h;m&&s.push({id:c.id,start:h,count:m})}if(!e.length)return null;let a=new Vt;return a.setAttribute("position",new It(e,3)),a.setAttribute("uv",new It(n,2)),a.setAttribute("aCells",new It(r,2)),a.setAttribute("aPhase",new It(o,1)),a.setAttribute("aLevel",new It(new Float32Array(e.length/3),1)),{geometry:a,ranges:s}}function Qs(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let o of i.ranges){let s=Math.min(1,Math.max(0,t.get(o.id)??0));n.fill(s,o.start,o.start+o.count),s>.02&&(r=!0)}return e.needsUpdate=!0,r}function Tf(i){let t=new Xt({transparent:!0,blending:Ee,depthWrite:!1,side:ie});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function Rw(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var sg=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Cw=`
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
`,Pw=sg,Iw=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function og(i,t){let e=[];for(let[r,o,s]of pn(i))for(let a of[r,s,o])e.push(i[a][0],t,i[a][1]);let n=new Vt;return n.setAttribute("position",new It(e,3)),n}function ag(i,t){let e=new Ce;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,o=(s,a)=>{let l=new At(og(n.points,s),new fn({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:sg,fragmentShader:Cw,transparent:!0,blending:Ee,depthWrite:!1,side:ie}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(o(n.floorY+.01,0),o(n.y+.004,1)):o(n.y+.004,0),n.cover>.02){let s=n.points.map(g=>g[0]),a=n.points.map(g=>g[1]),[l,c,h,u]=[Math.min(...s),Math.max(...s),Math.min(...a),Math.max(...a)],f=c-l>=u-h,d=Math.min(1,n.cover),m=f?[[l-.1,h-.1],[l+(c-l)*d,h-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,h-.1],[c+.1,h-.1],[c+.1,h+(u-h)*d],[l-.1,h+(u-h)*d]],b=Ro(n.points,m);if(b.length>=3){let g=new At(og(b,n.y+.03),new fn({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:Pw,fragmentShader:Iw,transparent:!0,side:ie}));g.renderOrder=6,e.add(g);let p=[];for(let y=0;y<b.length;y++){let v=b[y],M=b[(y+1)%b.length];p.push(v[0],n.y+.032,v[1],M[0],n.y+.032,M[1])}let x=new Vt;x.setAttribute("position",new It(p,3)),e.add(new qe(x,new $e({color:5995775,transparent:!0,opacity:.6})))}}}return e}function lg(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var cg=["neon","blueprint","day"];function ug(i){return cg.indexOf(i)}var No={value:new Y(.22,.88,1)},Uo={value:0};function hg(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var Lw=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
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
`;function nn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,s)=>{n(o,s),o.uniforms.uTheme=t,o.uniforms.uAccent=No,o.uniforms.uAccentOn=Uo,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${Lw}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function ta(i){return i==="day"?Tn:Ee}var Ai=.012,Fw=.012;function dg(i,t,e,n,r,o=[],s){let a=[],l=[],c=[],h=[],u=(p,x,y,v,M,w,T)=>{for(let _ of[p,x,y,p,y,v])a.push(_[0],_[1],_[2]),l.push(M[0],M[1],M[2]),c.push(w),h.push(T)};i.rooms.forEach((p,x)=>{if(p.points.length<3)return;let y=p.points.map(S=>S[0]),v=p.points.map(S=>S[1]),M=Math.min(...y),w=Math.min(...v),T=Math.max(...y),_=Math.max(...v),A=Math.max(1,Math.ceil((T-M)/r)),E=Math.max(1,Math.ceil((_-w)/r));for(let S=0;S<A;S++)for(let P=0;P<E;P++){let U=M+S*r,L=w+P*r,R=Math.min(U+r,T),C=Math.min(L+r,_),F=Ro(p.points,[[U,L],[R,L],[R,C],[U,C]]),D=F.length>=3?Math.abs(kw(F)):0;if(D<1e-4)continue;let N=zw(F);if(!o.some(k=>Zt(N,k))){if(D>(R-U)*(C-L)-1e-6){u([U,Ai,L],[U,Ai,C],[R,Ai,C],[R,Ai,L],[0,1,0],x,-1);continue}for(let[k,V,X]of pn(F)){let z=F[k],K=F[X],J=F[V];(J[1]-z[1])*(K[0]-z[0])-(J[0]-z[0])*(K[1]-z[1])<0&&([z,K]=[K,z]),u([z[0],Ai,z[1]],[J[0],Ai,J[1]],[K[0],Ai,K[1]],[K[0],Ai,K[1]],[0,1,0],x,-1)}}}});let f=i.rooms.length,d=(i.outdoor??[]).filter(p=>p.points.length>=3&&!qn(p.type));if(d.length){let p=d.flatMap(_=>_.points.map(A=>A[0])),x=d.flatMap(_=>_.points.map(A=>A[1])),y=Math.floor(Math.min(...p)/r)*r,v=Math.floor(Math.min(...x)/r)*r,M=Math.max(1,Math.ceil((Math.max(...p)-y)/r)),w=Math.max(1,Math.ceil((Math.max(...x)-v)/r)),T=(_,A,E)=>gm(i,_)-Ls(i,_,A,E)+Ai;for(let _=0;_<M;_++)for(let A=0;A<w;A++){let E=y+_*r,S=v+A*r,P,U=[E+r/2,S+r/2];P=d.find(R=>R.type==="pool"&&Zt(U,R.points));for(let R=d.length-1;R>=0&&!P;R--)Zt(U,d[R].points)&&(P=d[R]);if(!P)continue;let L=(R,C)=>[R,T(P,R,C),C];u(L(E,S),L(E,S+r),L(E+r,S+r),L(E+r,S),[0,1,0],f,-1)}}let m=Math.min(i.cut_height,i.height),b=[];t.forEach((p,x)=>{let y=Math.min(i.height,p.height??i.height),v=Math.min(m,y-.02),M=p.b[0]-p.a[0],w=p.b[1]-p.a[1],T=Math.hypot(M,w);if(T<.05)return;let _=[M/T,w/T],A=[-_[1],_[0]],E=e[x],S=Ow(p,_,T,n),P=(C,F)=>C?i.rooms.findIndex(D=>D.id===C):F?f:-1;b.push({a:p.a,b:p.b,h:y,ra:P(p.roomLeft,!1),rb:P(p.roomRight,p.exterior),gaps:S});let U=(C,F,D)=>[F,D,...C.filter(N=>N>F+.005&&N<D-.005)].sort((N,k)=>N-k).filter((N,k,V)=>k===0||N>V[k-1]+.005),L=U([v,(v+y)/2,...S.flatMap(C=>[C.y0+.01,C.y1-.01])],.02,y-.02),R=U(S.flatMap(C=>[C.s0,C.s1]),0,T);for(let C of[1,-1]){let F=C>0?p.roomLeft:p.roomRight,D=F?i.rooms.findIndex(z=>z.id===F):p.exterior?f:-1;if(D<0)continue;let N=(C>0?p.left:p.right)+Fw,k=[A[0]*C,A[1]*C],V=(z,K)=>[p.a[0]+_[0]*z+k[0]*N,K,p.a[1]+_[1]*z+k[1]*N],X=z=>{let K=V(z,0),J=s?.(K[0],K[2]);return J==null?1/0:J-.02};for(let z=0;z<R.length-1;z++){let K=R[z+1]-R[z],J=Math.max(1,Math.ceil(K/r));for(let at=0;at<J;at++){let H=R[z]+K/J*at,W=R[z]+K/J*(at+1),tt=(H+W)/2;for(let st=0;st<L.length-1;st++){let it=L[st],ht=L[st+1];if(ht-it<.01)continue;let gt=(it+ht)/2;if(S.some(Rt=>tt>Rt.s0&&tt<Rt.s1&&gt>Rt.y0&&gt<Rt.y1))continue;let lt=it>=m-1e-6?E:tr+E,dt=Math.min(ht,X(H)),Dt=Math.min(ht,X(W));dt<=it+.005&&Dt<=it+.005||u(V(H,it),V(W,it),V(W,Math.max(it,Dt)),V(H,Math.max(it,dt)),[k[0],0,k[1]],D,lt)}}}}});let g=[];for(let p of n){if(p.opening.type!=="door")continue;let x=t.find(M=>pg(M,p)&&Dw(M,p));if(!x||!x.roomLeft||!x.roomRight)continue;let y=i.rooms.findIndex(M=>M.id===x.roomLeft),v=i.rooms.findIndex(M=>M.id===x.roomRight);y<0||v<0||g.push({id:p.opening.id,a:y,b:v,x:p.start[0]+p.axis[0]*(p.width/2),y:Math.min(1.1,p.top*.55),z:p.start[1]+p.axis[1]*(p.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:g,blockers:b}}function pg(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function Dw(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,o=t.start[0]+t.axis[0]*(t.width/2),s=t.start[1]+t.axis[1]*(t.width/2),a=((o-i.a[0])*e+(s-i.a[1])*n)/r;return a>-.05&&a<r+.05}function Ow(i,t,e,n){let r=[];for(let o of n){if(!pg(i,o))continue;let s=(o.start[0]-i.a[0])*t[0]+(o.start[1]-i.a[1])*t[1],l=o.axis[0]*t[0]+o.axis[1]*t[1]>0?s:s-o.width;l>e||l+o.width<0||r.push({s0:l,s1:l+o.width,y0:o.sill-.01,y1:o.top+.01})}return r}function Nw(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function Uw(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function fg(i,t,e,n,r,o,s){let a=t-i.x,l=e-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=Uw(i),d=1/(1+h/(f*f)),m=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*o+c*s)/u);return i.level*m*(.2+.8*b)*Nw(i.kind,l/u)}function mg(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((h,u)=>{let f=n[u]??.5;if(!(f<=.01))for(let[d,m]of[[h.a,h.b],[h.b,h.a]]){let b=[0,0,0];for(let p of t){if(p.room!==d)continue;let x=p.x-h.x,y=p.y-h.y,v=p.z-h.z,M=Math.hypot(x,y,v)||1,w=fg(p,h.x,h.y,h.z,x/M,y/M,v/M);b[0]+=p.color[0]*w,b[1]+=p.color[1]*w,b[2]+=p.color[2]*w}let g=Math.max(b[0],b[1],b[2]);g<.01||r.push({x:h.x,y:h.y,z:h.z,color:[b[0]/g,b[1]/g,b[2]/g],level:Math.min(1,g*.9*(.35+.65*f)),kind:"wall",room:m})}});let o=new Map;for(let h of r){let u=i.blockers.filter(d=>d.ra===h.room||d.rb===h.room),f={...h,color:h.color.map(d=>Math.pow(d,1.5)),walls:u};o.set(h.room,[...o.get(h.room)??[],f])}let{pos:s,normal:a,room:l}=i,c=new Float32Array(s.length);for(let h=0;h<l.length;h++){let u=o.get(l[h]);if(!u)continue;let f=h*3,d=0,m=0,b=0;for(let g of u){if(g.walls.length&&Bw(g,g.walls,s[f],s[f+1],s[f+2]))continue;let p=fg(g,s[f],s[f+1],s[f+2],a[f],a[f+1],a[f+2]);d+=g.color[0]*p,m+=g.color[1]*p,b+=g.color[2]*p}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-m*e*1.6),c[f+2]=1-Math.exp(-b*e*1.6)}return c}function Bw(i,t,e,n,r){let o=e-i.x,s=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=o*c-s*l;if(Math.abs(h)<1e-9)continue;let u=a.a[0]-i.x,f=a.a[1]-i.z,d=(u*c-f*l)/h;if(d<=1e-6||d>=1-1e-6)continue;let m=(u*s-f*o)/h;if(m<0||m>1)continue;let b=i.y+(n-i.y)*d;if(b>=a.h)continue;let g=m*Math.hypot(l,c);if(!a.gaps.some(p=>g>p.s0&&g<p.s1&&b>p.y0&&b<p.y1))return!0}return!1}function Ef(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&Zt([t,e],r.points));return n<0?i.rooms.length:n}function Bo(i,t){return i&&t>=0&&t<i.length?i[t]:t}function kw(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function zw(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}var ea={open:0,open2:0,tilt:0,tilt2:0,cover:null},gg=2043986,bg=2769520,Vw=2242399,Af=1845831,Gw=1450554,Ri=16758087,Kc=3662079,Hw=1.2,Ww=1.5,Xw=.5,Yw=1846349,qw=2572395,$w=1120816,Zw=1845831,xg=5995775,vg=9085695,ko=zt(3662079,.08),Kw=.2;function Jc(i,t,e,n,r,o,s,a,l,c,h){let u=(d,m,b)=>t(d,m,b),f=[[u(e,r,a),u(n,r,a),u(n,o,a),u(e,o,a),c],[u(e,r,s),u(n,r,s),u(n,o,s),u(e,o,s),zt(l.getHex(),.6)],[u(e,o,s),u(n,o,s),u(n,o,a),u(e,o,a),l],[u(e,r,s),u(n,r,s),u(n,r,a),u(e,r,a),zt(l.getHex(),.85)],[u(e,r,s),u(e,o,s),u(e,o,a),u(e,r,a),zt(l.getHex(),.92)],[u(n,r,s),u(n,o,s),u(n,o,a),u(n,r,a),zt(l.getHex(),.92)]];for(let[d,m,b,g,p]of f)i.tri(d,m,b,p,p,p,void 0,h),i.tri(d,b,g,p,p,p,void 0,h)}function fe(i,t,e,n,r,o,s,a,l,c,h,u){if(a<=h+1e-6)return Jc(i,t,e,n,r,o,s,a,l,c,Kt);if(s>=h-1e-6)return Jc(i,t,e,n,r,o,s,a,l,c,u);Jc(i,t,e,n,r,o,s,h,l,c,Kt),Jc(i,t,e,n,r,o,h,a,l,c,u)}function or(i,t,e,n,r,o,s,a,l,c,h=0){let u=(f,d,m)=>{let b=v=>h?(s-v)/h:.5,g=t(e,r,f),p=t(n,r,f),x=t(n,r,d),y=t(e,r,d);i.tri(g,p,x,a,a,a,[0,b(f),1,b(f),1,b(d)],m),i.tri(g,x,y,a,a,a,[0,b(f),1,b(d),0,b(d)],m)};s<=l+1e-6?u(o,s,Kt):o>=l-1e-6?u(o,s,c):(u(o,l,Kt),u(l,s,c))}function Jw(i,t,e,n,r,o,s,a,l,c){let h=t(e,r,s),u=t(n,r,s),f=t(n,o,s),d=t(e,o,s),m=0,b=(o-r)/c;i.tri(h,u,f,a,a,a,[0,m,1,m,1,b],l),i.tri(h,f,d,a,a,a,[0,m,1,b,0,b],l)}function jw(i,t){let[e,n]=i.axis;for(let r of t){if(r===i||r.opening.id===i.opening.id)continue;let o=e*r.axis[0]+n*r.axis[1];if(Math.abs(o)<.999)continue;let s=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(s*n-a*e)>.03)continue;let l=s*e+a*n,c=o>0?l:l-r.width,h=c+r.width;if(Math.min(i.width,h)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let f=i.sill-r.top;if(f>=-.05&&f<=.3)return!0}return!1}function Qw(i,t){let e=i.opening.sill_board??"auto";if(e==="none")return{inside:!1,outside:!1};if(e==="inside"||e==="outside")return{inside:e==="inside",outside:e==="outside"};let n=i.sill>.3&&!jw(i,t)&&$i(i.opening,i.exterior)!=="glass_wall";return{inside:n,outside:n&&i.exterior}}function yg(i,t,e,n,r,o,s,a,l){let c=Qw(i,t),h=i.width,u=Math.max(i.sill,.03);c.inside&&fe(e,n,-.04,h+.04,r+o,i.faceRoom+.07,u-.03,u,new j(Af),s,a,l),c.outside&&fe(e,n,-.03,h+.03,-i.faceOut-.06,r-o,u-.04,u-.02,new j(Af),s,a,l)}function _g(i,t,e){let n=new jt,r=new jt,o=new jt(!0),s=new j(gg),a=new j(bg),l=[],c=[],h=[];for(let u of i){let f=n.count,d=r.count,m=o.count,b=t.get(u.opening.id)??ea,g=u.width,{sill:p,top:x,bucket:y}=u,v=(_,A,E)=>[u.start[0]+u.axis[0]*_+u.toRoom[0]*A,E,u.start[1]+u.axis[1]*_+u.toRoom[1]*A],M=(u.faceRoom-u.faceOut)/2,w=u.opening.mark==="closed",T=u.opening.type==="door"&&$i(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!T||u.opening.type==="garage"){let _=-u.faceOut-.012,A=u.faceRoom+.012,E=u.opening.type==="garage"&&(w?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),S=E?zt(Ri,.8):new j(gg),P=E?zt(Ri,1):new j(bg);fe(n,v,-.045,.02,_,A,p,x+.045,S,P,e,y),fe(n,v,g-.02,g+.045,_,A,p,x+.045,S,P,e,y),fe(n,v,.02,g-.02,_,A,x-.02,x+.045,S,P,e,y)}if(u.opening.type==="door"){let _=$i(u.opening,u.exterior),A=h0(_),E=u.opening.swing==="out"?-1:1,S=E>0?u.faceRoom:-u.faceOut,P=u.opening.leaves===2,U=.02,L=g-.02,R=u0(g,_,u.hingeAtStart,u.opening);if(R){let k=-u.faceOut-.012,V=u.faceRoom+.012,X=S-E*(A?.06:.04)/2,z=.06;for(let[K,J]of R.panels)fe(n,v,K,K+z,k,V,p+.02,x-.02,s,a,e,y),fe(n,v,J-z,J,k,V,p+.02,x-.02,s,a,e,y),fe(n,v,K+z,J-z,k,V,p+.02,p+.12,s,a,e,y),or(r,v,K+z,J-z,X,p+.12,x-.02,ko,e,y);U=R.x0,L=R.x1}let C=P?(L-U)/2-.004:L-U,F=A?.06:.04;u.exterior&&(A||_==="glass")&&fe(n,v,g/2-.08,g/2+.08,-u.faceOut-.1,-u.faceOut,x+.1,x+.17,zt(Ri,.55),zt(Ri,.85),e,Kt),A&&fe(n,v,.02,g-.02,-u.faceOut-.02,u.faceRoom,p,p+.02,new j(Af),a,e,y);let D=T?[]:[[u.hingeAtStart,b.open]];P&&!T&&D.push([!u.hingeAtStart,b.open2??0]);let N=u.opening.open_angle;for(let[k,V]of D){let X=Math.min(1,Math.max(0,V)),z=_==="sliding"?0:N!=null&&N>0?(b.sensed?X:Math.min(1,X/Xw))*Math.min(170,N)*(Math.PI/180):X*Ww,K=_==="sliding"?X*C:0,J=(lt,dt,Dt)=>{let Rt=lt*Math.cos(z)-dt*Math.sin(z)-K,ne=S+E*(dt*Math.cos(z)+lt*Math.sin(z)+(K?.05:0));return v(k?U+Rt:L-Rt,ne,Dt)},at=X>.05?Kt:y,H=w?!!b.sensed&&X<.05:X>.9,W=H?zt(Ri,.7):new j(A?$w:Yw),tt=H?zt(Ri,.9):new j(A?Zw:qw);_==="glass"?(fe(n,J,0,.05,-F,0,p+.01,x-.01,W,tt,e,at),fe(n,J,C-.05,C,-F,0,p+.01,x-.01,W,tt,e,at),fe(n,J,.05,C-.05,-F,0,p+.01,p+.12,W,tt,e,at),fe(n,J,.05,C-.05,-F,0,x-.08,x-.01,W,tt,e,at),or(r,J,.05,C-.05,-F/2,p+.12,x-.08,ko,e,at)):fe(n,J,0,C,-F,0,p+.01,x-.01,W,tt,e,at);for(let lt of[.001,-F-.001])_==="front_glass"?or(r,J,.12,C-.12,lt,p+(x-p)*.55,x-.18,ko,e,at):A&&or(r,J,.1,.18,lt,p+.3,x-.3,ko,e,at);let st=p+Math.min(1.05,(x-p)*.5),it=A?.3:.012,ht=A?C-.11:C-.16,gt=A?C-.08:C-.05;fe(n,J,ht,gt,.004,.05,st-it,st+it,new j(xg),new j(vg),e,at),fe(n,J,ht,gt,-F-.05,-F-.004,st-it,st+it,new j(xg),new j(vg),e,at),b.unlocked&&k===u.hingeAtStart&&fe(n,J,C-.022,C+.004,-F-.006,.006,p+.03,x-.03,zt(Kc,.85),zt(Kc,1),e,at)}}else if(u.opening.type==="garage"){let _=Math.min(1,Math.max(0,b.cover??1)),A=new j(13951231),E=u.faceRoom-.03,S=x*(1-_);_>.01&&or(o,v,.02,g-.02,E,S,x,A,e,y,.5);let P=(1-_)*x;P>.01&&Jw(o,v,.02,g-.02,E,E+P,x+.03,A,y,.5)}else if($i(u.opening,u.exterior)==="glass_wall"){fe(n,v,0,.04,M-.025,M+.025,p,x,s,a,e,y),fe(n,v,g-.04,g,M-.025,M+.025,p,x,s,a,e,y),fe(n,v,.04,g-.04,M-.025,M+.025,p,p+.03,s,a,e,y),fe(n,v,.04,g-.04,M-.025,M+.025,x-.04,x,s,a,e,y),yg(u,i,n,v,M,.025,a,e,y);let E=Math.max(1,Math.round((g-2*.04)/.9)),S=(g-2*.04)/E;for(let P=1;P<E;P++){let U=.04+P*S;fe(n,v,U-.02,U+.02,M-.025,M+.025,p+.03,x-.04,s,a,e,y)}for(let P=0;P<E;P++){let U=.04+P*S+(P?.02:0),L=.04+(P+1)*S-(P<E-1?.02:0);or(r,v,U,L,M,p+.03,x-.04,ko,e,y)}}else{fe(n,v,0,.06,M-.035,M+.035,p,x,s,a,e,y),fe(n,v,g-.06,g,M-.035,M+.035,p,x,s,a,e,y),fe(n,v,.06,g-.06,M-.035,M+.035,p,p+(p>.05?.06:.03),s,a,e,y),fe(n,v,.06,g-.06,M-.035,M+.035,x-.06,x,s,a,e,y),yg(u,i,n,v,M,.035,a,e,y);let E=.055,S=p+(p>.05?.06:.03),P=x-.06,U=M+.035,L=M+.035+.06,C=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:g/2,x1:u.hingeAtStart?g/2:g-.06,open:b.open,tilt:b.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?g/2:.06,x1:u.hingeAtStart?g-.06:g/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:g-.06,open:b.open,tilt:b.tilt}];for(let F of C){let D=F.open>.02||F.tilt>.02,N=w?!!b.sensed&&!D:D,k=N?zt(Ri,.75):new j(Vw),V=N?zt(Ri,.95):a,X=F.x0,z=F.x1,K=z-X,J=F.open*Hw*(u.opening.swing==="out"?-1:1),at=F.tilt*Kw,H=(tt,st,it)=>{let ht=it-S,gt=st+ht*Math.sin(at),lt=S+ht*Math.cos(at),dt=tt*Math.cos(J)-(gt-U)*Math.sin(J);gt=U+(gt-U)*Math.cos(J)+tt*Math.sin(J);let Dt=F.atStart?X+dt:z-dt;return v(Dt,gt,lt)},W=Math.abs(J)>.05?Kt:y;if(fe(n,H,0,E,U,L,S,P,k,V,e,W),fe(n,H,K-E,K,U,L,S,P,k,V,e,W),fe(n,H,E,K-E,U,L,S,S+E,k,V,e,W),fe(n,H,E,K-E,U,L,P-E,P,k,V,e,W),or(r,H,E,K-E,(U+L)/2,S+E,P-E,N?zt(Ri,.16):ko,e,W),b.unlocked&&F.atStart===u.hingeAtStart&&fe(n,H,K-.022,K+.004,U-.006,L+.006,S+.02,P-.02,zt(Kc,.85),zt(Kc,1),e,W),$i(u.opening,u.exterior)==="bars"){let tt=(S+P)/2,st=(U+L)/2;fe(n,H,E,K-E,st-.012,st+.012,tt-.012,tt+.012,k,V,e,W),fe(n,H,K/2-.012,K/2+.012,st-.012,st+.012,S+E,P-E,k,V,e,W)}}}if(b.cover!==null){let _=-u.faceOut,A=x+.2;fe(n,v,-.05,g+.05,_-.15,_,x,A,new j(Gw),a,e,y);let E=Math.min(1,Math.max(0,b.cover));if(E>.01){let S=x-E*(x-p);or(o,v,0,g,_-.07,S,x,new j(16777215),e,y,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),h.push({id:u.opening.id,start:m,end:o.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:o.geometry(),frameTris:l,glassTris:c,blindTris:h}}var tS=.3,Mg=2.6;function wg(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),o=i.map(M=>M[1]),s=Math.min(...r),a=Math.max(...r),l=Math.min(...o),c=Math.max(...o),h=c-l>=a-s,u=e*.7071,f=M=>{let w=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],T=[...w,[M[0]+u,M[1]+u],[M[0]-u,M[1]+u],[M[0]+u,M[1]-u],[M[0]-u,M[1]-u]];return w.every(_=>Zt(_,i))&&!n.some(_=>T.some(A=>Zt(A,_)))},d=(M,w)=>f(h?[M,w]:[w,M]),m=(M,w)=>{let T=Math.ceil(Math.hypot(w[0]-M[0],w[1]-M[1])/.05);for(let _=1;_<T;_++)if(!f([M[0]+(w[0]-M[0])*_/T,M[1]+(w[1]-M[1])*_/T]))return!1;return!0},[b,g,p,x]=h?[s,a,l,c]:[l,c,s,a],y=[],v=!0;for(let M=b+e;M<=g-e+1e-6;M+=t){let w=null,T=null,_=.05;for(let P=p;P<=x+1e-6;P+=_)if(d(M,P)&&(T??=P),(!d(M,P)||P+_>x+1e-6)&&T!==null){let U=d(M,P)?P:P-_;(!w||U-T>w[1]-w[0])&&(w=[T,U]),T=null}if(!w||w[1]-w[0]<.2)continue;let A=P=>{let[U,L]=P?w:[w[1],w[0]];return[h?[M,U]:[U,M],h?[M,L]:[L,M]]},E=A(v),S=y[y.length-1];if(S&&n.length&&!m(S,E[0])){let P=A(!v);if(!m(S,P[0]))continue;E=P,v=!v}y.push(E[0],E[1]),v=!v}return y}function Cf(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let o=r/e*Math.PI*2;return[i[0]+Math.cos(o)*t,i[1]+Math.sin(o)*t]})}var Rf=i=>Math.atan2(Math.sin(i),Math.cos(i));function Sg(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],o=n[1]-i.pos[1],s=Math.hypot(r,o);if(s<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Rf(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),Mg*e),!0)}let a=Math.atan2(r,o),l=Rf(a-i.heading);if(i.heading=Rf(i.heading+Math.sign(l)*Math.min(Math.abs(l),Mg*e)),Math.abs(l)<.35){let c=Math.min(s,tS*e);i.pos=[i.pos[0]+r/s*c,i.pos[1]+o/s*c]}return!0}function Tg(i,t,e,n=200){return t?e>=3e4?null:Math.max(i,n):i}var eS=66,nS=250;function Eg(i,t){return i?t>=3e4?nS:eS:0}function Ag(i,t,e){let n=t??8,r=e||8;return n<=3||r<=4||/\bSilk\b/.test(i)?!0:/Android/.test(i)&&/\bKF[A-Z]{2,5}\b/.test(i)}function jc(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}var On=null,Rg=new Map;function Pg(i,t=0){let e=new jt,n=new De,r=be(i.type);if(r?.light)Dc(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Pf(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let o={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Fc(e,n,new jt,o,0,!0)}return{buf:e,lines:n}}function iS(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,o=Rg.get(r);if(o)return o;e&&Ps(e),On??=new _r({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),On.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),On.setSize(t,t,!1),On.setClearColor(0,0);let{buf:s,lines:a}=Pg(i),l=new ri,c=new At(s.geometry(),new Xt({vertexColors:!0,color:new j(n,n,n)})),h=new qe(a.geometry(),new $e({vertexColors:!0,color:new j(n*1.8,n*1.8,n*1.8)}));l.add(c,h);let u=new xn().setFromObject(c),f=u.getCenter(new Y),d=new In(-1,1,1,-1,.01,100);d.position.copy(f).add(new Y(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let m=.05;for(let p of[u.min.x,u.max.x])for(let x of[u.min.y,u.max.y])for(let y of[u.min.z,u.max.z]){let v=new Y(p,x,y).applyMatrix4(d.matrixWorldInverse);m=Math.max(m,Math.abs(v.x),Math.abs(v.y))}let b=m*1.12;d.left=-b,d.right=b,d.top=b,d.bottom=-b,d.updateProjectionMatrix(),On.render(l,d);let g=On.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose(),Rg.set(r,g),g}function rS(i,t,e=160,n,r=1.25){let o=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,s=Cg.get(o);if(s)return s;n&&Ps(n);let{buf:a,lines:l}=Pg(i,t),c=new At(a.geometry(),new Xt({vertexColors:!0,color:new j(r,r,r)})),h=new qe(l.geometry(),new $e({vertexColors:!0,color:new j(r*1.8,r*1.8,r*1.8)})),u=new xn().setFromObject(c);if(u.isEmpty())return null;let f=u.min.x,d=u.max.x,m=Math.max(0,u.min.y),b=u.max.y,g=Math.max(1,Math.min(1024,Math.round((d-f)*e))),p=Math.max(1,Math.min(1024,Math.round((b-m)*e)));On??=new _r({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),On.setPixelRatio(1),On.setSize(g,p,!1),On.setClearColor(0,0);let x=new ri;x.add(c,h);let y=new In(f,d,b,m,.01,100);y.position.set(0,0,50),y.lookAt(0,0,0),y.updateProjectionMatrix(),On.render(x,y);let v=On.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose();let M={url:v,x0:f,x1:d,y0:m,y1:b};return Cg.set(o,M),M}var Cg=new Map;var OC={Group:Ce,Mesh:At,MeshBasicMaterial:Xt,CanvasTexture:vn,Color:j,PlaneGeometry:Gn,BufferGeometry:Vt,Float32BufferAttribute:It,DoubleSide:ie},Lg={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},oS=[.22,.88,1],Gg=2.4,Fg=Gg,sS=.22,Dg=.94,Og=140,Ng=1.5;function aS(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[o,s]=e[r],[a,l]=e[(r+1)%e.length],c=a-o,h=l-s,u=c*c+h*h||1,f=Math.max(0,Math.min(1,((i-o)*c+(t-s)*h)/u));n=Math.min(n,Math.hypot(i-(o+c*f),t-(s+h*f)))}return n}var If=32,lS=500,Ug=160,cS=33,Bg=.028,uS=.026,hS=.012,fS=.09,re=2767456,dS=2240847,pS=3096944,mS=1911110,gS=1,kg=new Set(["ceiling","downlight","spot","panel","pendant","fan","strip"]),Qc=450,zg=125,bS=200,xS=.08,ia={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],fan:[1.3,1.3,.45],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},vS=new j(1714765);function yS(){let i=navigator;return Ag(navigator.userAgent,i.deviceMemory,navigator.hardwareConcurrency)}var Lf=class{host;options;renderer;scene=new ri;camera=new Qe(38,1,.1,400);controls;labels;root=new Ce;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];patches=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";roofGeos=[];sunFx=new $c;sunPath=null;shadowSig="";arcSig="";spillNight="";compassLetters=["N","E","S","W"];flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;personAt=new Map;personLook="figure";figures=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;lastWake=performance.now();highlighted=new WeakMap;decorWas=!1;decorTimer;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;fans=new Map;fanMat=null;fanLast=0;fanTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new qe(new Vt,new $e({color:10471679,transparent:!0,opacity:.4,blending:Ee,depthWrite:!1}));snow=new zi(new Vt,new Mi({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new At(new ls(1,28),new Xt({color:16767370,transparent:!0,opacity:0,blending:Ee,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=MS(),this.blindTexture=SS(),this.haloTexture=AS(),this.ground=new At(new Gn(1,1),new Xt({transparent:!1,blending:Ee,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc,this.sunFx.group),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility);for(let n of["pointerdown","pointerup","wheel","keydown"])t.addEventListener(n,this.onInput,{capture:!0,passive:!0});typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(o=>o.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}get resting(){return this.decor(0)===null}wake(){let t=this.resting;this.lastWake=performance.now(),t&&this.invalidate()}animate(){if(!this.lowQuality)return this.invalidate();if(this.decorTimer||this.frame)return;let t=Eg(!0,performance.now()-this.lastWake);this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},t)}decor(t,e){return Tg(t,this.lowQuality,performance.now()-this.lastWake,e)}onInput=()=>this.wake();setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){Ps(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.lastWake=performance.now(),this.building=t,t0(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.lastWake=performance.now(),this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyHouseLines(),this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.lastWake=performance.now(),this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(h=>gc(h.floor).some(u=>u.id===t)),n=e?gc(e.floor).find(h=>h.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let h=e.floor.elevation+e.ty,[u,f]=Zi(n.points),d=r.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new Y(d.x,d.y+h,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[o,s]=Zi(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new Y(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new Y(o,e.floor.elevation+e.ty+.3,s),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.syncFans(t),this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let o=r.el;r.icon!==n.icon&&(r.icon=n.icon,o.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,o.querySelector(".fp3d-dev-text").textContent=n.text);let s=n.caption??"";r.caption!==s&&(r.caption=s,o.querySelector(".fp3d-dev-name").textContent=s);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,o.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,o.title=n.name,o.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,o.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,o.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(h=>Math.round(h*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?o.style.setProperty("--fp3d-glow",c):o.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])Qs(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&Qs(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(lg(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=ag(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Ce;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let o=t.filter(c=>c.floorId===n.floor.id),s=.03;for(let c of o)if(c.playing)for(let h=0;h<3;h++){let u=new At(new ds(.92,1,48),new Xt({color:3662079,transparent:!0,opacity:0,blending:Ee,depthWrite:!1,side:ie}));u.rotation.x=-Math.PI/2,u.position.set(c.x,s+h*.002,c.z),u.userData={sound:!0,phase:h/3,level:c.level},u.frustumCulled=!1,r.add(u)}let a=[],l=new Set;for(let c of o)for(let h of c.members){let u=o.find(d=>d.id===h);if(!u||u===c)continue;let f=[c.id,u.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,s+.02,c.z,u.x,s+.02,u.z))}if(a.length){let c=new Vt;c.setAttribute("position",new It(a,3));let h=new qe(c,new $e({color:3662079,transparent:!0,opacity:.45,blending:Ee,depthWrite:!1}));h.userData={soundLine:!0},r.add(h)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let o=(e*.45+r.userData.phase)%1,s=r.userData.level,a=.25+o*(.9+1.6*s);r.scale.set(a,a,1),r.material.opacity=(1-o)*(.25+.45*s)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let o=na(r),s=jc(r.power),a=this.flowPhase.get(o);n.set(o,{speed:s,offset:a?e*(a.speed-s)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}setPatches(t){this.patches=t;for(let e of this.floors)this.buildPatches(e);this.invalidate()}buildPatches(t){let e=this.patches.filter(r=>r.floorId===t.floor.id&&r.points.length>=3&&r.opacity>0),n=JSON.stringify(e);if(n!==t.patchSig){t.patchSig=n;for(let r of[!1,!0]){let o=[],s=[];for(let c of e){if(!!c.glow!==r)continue;let h=Math.min(1,c.opacity);for(let u of pn(c.points))for(let f of u)o.push(c.points[f][0],c.y,c.points[f][1]),s.push(c.color[0],c.color[1],c.color[2],h)}let a=r?t.patchGlowMesh:t.patchMesh,l=new Vt;l.setAttribute("position",new It(o,3)),l.setAttribute("color",new It(s,4)),a.geometry.dispose(),a.geometry=l,a.visible=o.length>0}}}buildPipes(t){let e=this.pipes.filter(o=>o.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new jt;for(let o of e)jm(r,o);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersonLook(t){t!==this.personLook&&(this.personLook=t,this.setPersons(this.persons))}makeFigure(t){let e=s=>{let a=[],l=(f,d,m,b,g)=>{let p=Math.hypot(m-f,b-d)||1,x=-(b-d)/p*(g/2+s),y=(m-f)/p*(g/2+s);a.push(f+x,d+y,0,m+x,b+y,0,m-x,b-y,0,f+x,d+y,0,m-x,b-y,0,f-x,d-y,0)},h=.14+s;for(let f=0;f<18;f++){let d=f/18*Math.PI*2,m=(f+1)/18*Math.PI*2;a.push(0,1.47,0,Math.cos(d)*h,1.47+Math.sin(d)*h,0,Math.cos(m)*h,1.47+Math.sin(m)*h,0)}l(0,1.32,0,.8,.13),l(0,1.24,-.28,.9,.07),l(0,1.24,.28,.9,.07),l(-.02,.82,-.15,.02,.08),l(.02,.82,.15,.02,.08);let u=new Vt;return u.setAttribute("position",new It(a,3)),u},n=new At(e(0),new Xt({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:ie})),r=new At(e(.05),new Xt({color:t,transparent:!0,opacity:.22,blending:Ee,depthWrite:!1,side:ie}));n.renderOrder=6,r.renderOrder=5;let o=new Ce;return o.add(r,n),o.visible=!1,o}dropFigure(t){let e=this.figures.get(t);if(e){this.scene.remove(e);for(let n of e.children)n.geometry.dispose(),n.material.dispose();this.figures.delete(t)}}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(!r){r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id;let a=n.id;r.addEventListener("pointerdown",l=>l.stopPropagation()),r.addEventListener("click",l=>{l.stopPropagation();let c=this.persons.find(f=>f.id===a);if(!c?.entity)return;let h=l.currentTarget.getBoundingClientRect(),u=this.host.getBoundingClientRect();this.options.onDeviceHold?.(c.entity,h.left+h.width/2-u.left,h.top+h.height/2-u.top)}),this.personPins.set(n.id,r),this.labels.append(r)}r.title=n.name,r.setAttribute("aria-label",n.name),r.style.setProperty("--fp3d-pc",n.color??"#ff5fd2");let o=this.personLook==="figure"&&!!n.entity&&!n.thing;r.classList.toggle("fp3d-person-figure",o);let s=this.figures.get(n.id);if(o&&(!s||s.userData.color!==(n.color??"#ff5fd2"))){this.dropFigure(n.id);let a=this.makeFigure(n.color??"#ff5fd2");a.userData.color=n.color??"#ff5fd2",this.figures.set(n.id,a),this.scene.add(a)}else!o&&s&&this.dropFigure(n.id);if(r.classList.toggle("fp3d-person-tap",!!n.entity),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials||r.dataset.tag!==(n.tag??"")){r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.dataset.tag=n.tag??"",r.replaceChildren();let a=document.createElement("span");if(a.className="fp3d-person-face",n.picture){let l=document.createElement("img");l.src=n.picture,l.alt="",l.addEventListener("error",()=>l.replaceWith(document.createTextNode(n.initials))),a.append(l)}else a.textContent=n.initials;if(r.append(a),n.tag){let l=document.createElement("span");l.className="fp3d-person-tag",l.textContent=n.tag,r.append(l)}}}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n),this.personAt.delete(n),this.dropFigure(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=hg(t),n=e?1:0;n===Uo.value&&(!e||No.value.equals(new Y(...e)))||(Uo.value=n,e&&No.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=ug(t),rm(t!=="neon"),this.building?.floors.some(o=>o.furniture.some(um))&&this.rebuild();let n=ta(t),r=[...this.floors.map(o=>o.materials.lines),...this.roof?[this.roof.lines]:[]];for(let o of r)o.blending=n,o.needsUpdate=!0;this.placeGround(),this.buildSunFx(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let n of this.floors)this.buildSun(n);let e=this.nightFactor().toFixed(2);if(e!==this.spillNight){this.spillNight=e;for(let n of this.floors)this.buildSpill(n,this.lightSources(n))}this.placeSky(),this.buildSunFx(),this.invalidate()}setSunPath(t,e){this.sunPath=t,e&&(this.compassLetters=e),this.buildSunFx(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.buildSunFx(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new j(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new es(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,o=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,o,!1),this.rain.visible=r>0,this.snow.visible=o>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let o=this.weatherBox,s=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let h=o.x0+Math.random()*(o.x1-o.x0),u=o.y0+Math.random()*(o.y1-o.y0),f=o.z0+Math.random()*(o.z1-o.z0);s.set([h,u,f],c*3),n&&s.set([h,u-.45,f],c*3+3)}t.geometry.dispose();let l=new Vt;l.setAttribute("position",new It(s,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,o=r.y1-r.y0,s=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let h=0;h<l.length;h+=6){let u=l[h+1]-c,f=l[h]+s*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u,l[h+3]=f-s*.05,l[h+4]=u-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let h=0;h<l.length;h+=3){let u=l[h+1]-(.9+.6*e.snow)*n,f=l[h]+(s+Math.sin(c+h)*.4)*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let o=(this.building?.settings.north??0)*ee,s=(r?t.azimuth+180:t.azimuth)*ee,a=Math.max(10,Math.abs(t.elevation))*ee,{center:l,r:c}=this.skyFrame(),h=new Y(Math.sin(o+s)*Math.cos(a),Math.sin(a),-Math.cos(o+s)*Math.cos(a));this.skyDisc.position.copy(l).addScaledVector(h,c),this.skyDisc.scale.setScalar(c*(r?.03:.04)),this.skyDisc.lookAt(l);let u=this.skyDisc.material;u.color.set(r?13621486:16767370),u.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}skyFrame(){let t=this.weatherBox;return{center:new Y((t.x0+t.x1)/2,t.y0,(t.z0+t.z1)/2),r:Math.min(300,Math.max(80,this.houseRadius*5))}}buildSunFx(){let t=this.building,e=this.sun,n=!!t&&!!e&&t.settings.sun_shadow!==!1,r=(t?.settings.north??0)*ee,o=this.weather?.cloud??0,s=n&&!this.lowQuality&&e.elevation>1&&o<.9&&!this.roomTint,a=s?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${r},${o.toFixed(1)},${this.theme},${this.roofGeos.length}`:"";a!==this.shadowSig&&(this.shadowSig=a,s?this.drawShadow(t,e,r,o):this.sunFx.hideShadow());let l=this.sunPath,c=n&&!!l&&l.points.length>1&&e.elevation>-3,h=c?this.arcFrame():null,u=c&&h?`${this.theme},${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${this.compassLetters.join("")},${l.points[0].t},${r},${h.x.toFixed(2)},${h.z.toFixed(2)},${h.y.toFixed(2)},${h.r.toFixed(2)},${o.toFixed(1)}`:"";if(u===this.arcSig)return;if(this.arcSig=u,!u||!h||!l||!e)return this.sunFx.hideArc();let f=(p,x,y=0)=>{let v=Math.max(0,x)*ee,M=r+p*ee;return[h.x+Math.sin(M)*Math.cos(v)*h.r,h.y+Math.sin(v)*h.r+y,h.z-Math.cos(M)*Math.cos(v)*h.r]},d=1-.7*o,m=Date.now(),b=p=>new Date(p).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),g=h.r*.03;this.sunFx.setArc({points:l.points.map(p=>({at:f(p.azimuth,p.elevation),t:p.t,elevation:p.elevation})),now:m,hours:l.points.filter(p=>p!==l.rise&&p!==l.set&&new Date(p.t).getMinutes()===0).map(p=>f(p.azimuth,p.elevation)),labels:[l.rise,l.set].flatMap(p=>p?[{text:b(p.t),at:f(p.azimuth,p.elevation,g*2.2),rising:p===l.rise}]:[]),sun:e.elevation>0?f(e.azimuth,e.elevation):null,ring:{center:[h.x,h.y,h.z],r:h.r,north:r,letters:this.compassLetters},size:g,fade:d,light:this.theme!=="neon"})}arcFrame(){let t=this.building,e=t?Lo(t):null,n=t?.floors.flatMap(h=>h.rooms.filter(u=>!u.outdoor).flatMap(u=>u.points))??[];if(!e||!n.length)return null;let r=n.map(h=>h[0]),o=n.map(h=>h[1]),[s,a,l,c]=[Math.min(...r),Math.max(...r),Math.min(...o),Math.max(...o)];return{x:(s+a)/2,z:(l+c)/2,y:e.elevation,r:Math.max(7,Math.hypot(a-s,c-l)*.62)}}nightFactor(){let t=this.sun;return t?Math.min(1,Math.max(0,-t.elevation/6)):0}buildSpill(t,e){let n=this.building,r=n?.settings.window_glow===!1?0:this.nightFactor(),o=n&&r>0?Lo(n):null,s=!!o&&Math.abs(t.floor.elevation-o.elevation)<.5,a=new Map;if(s)for(let u of e){let f=a.get(u.room)??[0,0,0,0];f[0]+=u.color[0]*u.level,f[1]+=u.color[1]*u.level,f[2]+=u.color[2]*u.level,f[3]+=u.level,a.set(u.room,f)}let l=[...t.openings.values()].map(u=>(u.cover??0).toFixed(1)).join(","),c=s&&a.size?`${r.toFixed(2)}|${[...a].map(([u,f])=>`${u}:${f.map(d=>d.toFixed(2)).join("/")}`).join(";")}|${l}`:"";if(c===t.spillSig)return;t.spillSig=c;let h=new jt;if(c)for(let u of t.geo.openings){if(u.opening.type!=="window"||!u.exterior)continue;let f=t.floor.rooms.findIndex(P=>P.id===u.opening.room_id),d=f<0?void 0:a.get(Bo(t.lightZones,f));if(!d||d[3]<.02)continue;let b=1-(t.openings.get(u.opening.id)?.cover??0),g=u.top-u.sill;if(b<.05||g<.1)continue;let p=Math.max(d[0],d[1],d[2],1e-6),x=.3*r*Math.min(1,d[3])*b*Math.min(1,g/1.2),y=new j(d[0]/p*x,d[1]/p*x,d[2]/p*x),v=[-u.toRoom[0],-u.toRoom[1]],M=Math.min(3.5,.8+1.1*u.top),w=.35*M,T=[u.start[0]+u.axis[0]*(u.width/2)+v[0]*(u.faceOut+M/2),u.start[1]+u.axis[1]*(u.width/2)+v[1]*(u.faceOut+M/2)],_=Mr(t.floor,{x:T[0],z:T[1]})+.014,A=(P,U)=>{let L=U/M,R=-w*L+P*(u.width+2*w*L);return[u.start[0]+u.axis[0]*R+v[0]*(u.faceOut+U),_,u.start[1]+u.axis[1]*R+v[1]*(u.faceOut+U)]},E=4,S=[[0,0],[.18,1],[.82,1],[1,0]];for(let P=0;P<E;P++){let U=M*P/E,L=M*(P+1)/E,R=(1-P/E)**2,C=(1-(P+1)/E)**2;for(let F=0;F+1<S.length;F++){let[D,N]=S[F],[k,V]=S[F+1],X=A(D,U),z=A(k,U),K=A(k,L),J=A(D,L),at=y.clone().multiplyScalar(R*N),H=y.clone().multiplyScalar(R*V),W=y.clone().multiplyScalar(C*V),tt=y.clone().multiplyScalar(C*N);h.tri(X,z,K,at,H,W),h.tri(X,K,J,at,W,tt)}}}t.spillMesh.geometry.dispose(),t.spillMesh.geometry=h.geometry(),t.spillMesh.visible=h.count>0}drawShadow(t,e,n,r){let o=Lo(t),s=o?.rooms.filter(g=>!g.outdoor&&g.points.length>=3)??[];if(!o||!s.length)return this.sunFx.hideShadow();let a=s.flatMap(g=>g.points.map(p=>p[0])),l=s.flatMap(g=>g.points.map(p=>p[1])),c=o.elevation+Mr(o,{x:Math.min(...a)-1,z:(Math.min(...l)+Math.max(...l))/2}),h=e.azimuth*ee,u=ig(t,this.roofGeos,[Math.sin(n+h),-Math.cos(n+h)],e.elevation,c),f=rg(u);if(!f)return this.sunFx.hideShadow();let d=o.elevation-c<=.35?o.elevation+.012:c+.012,m=t.floors.filter(g=>Math.abs(g.elevation-o.elevation)<.5).flatMap(g=>g.rooms.filter(p=>!p.outdoor&&p.points.length>=3).map(p=>p.points)),b=(this.theme==="neon"?.6:.34)*Math.min(1,e.elevation/8)*(1-.8*r);this.sunFx.setShadow(this.renderer,u,f,m,d,b,this.theme==="neon"?394264:1713203)}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e){for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n);this.buildSunFx()}}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[o,s]of n.openings){let a=t.get(o)??ea,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===s.open&&l.open2===(s.open2??0)&&l.tilt===s.tilt&&l.tilt2===(s.tilt2??0)&&l.cover===s.cover&&!!l.sensed==!!s.sensed&&!!l.unlocked==!!s.unlocked||(n.openings.set(o,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let o=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};o.tl=r.left?1:0,o.tr=r.right?1:0,this.fridges.set(n,o)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let o=this.awnings.get(n)??{cur:r.out??0,to:r.out??0,speed:0};r.out===null?(o.to=r.moving>0?1:0,o.speed=1/Math.max(2,r.time)):(o.to=r.out,o.speed=0),this.awnings.set(n,o)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)e.floor.furniture.some(n=>t.has(n.id))&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,o]of this.awnings){let s=o.to-o.cur;if(Math.abs(s)<.002){s!==0&&(o.cur=o.to,e.add(r));continue}o.cur=o.speed>0?o.cur+Math.sign(s)*Math.min(Math.abs(s),o.speed*t/1e3):o.cur+s*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/Ug),n=new Set;for(let[r,o]of this.fridges)for(let[s,a]of[["l","tl"],["r","tr"]]){let l=o[a]-o[s];if(Math.abs(l)<.004){l!==0&&(o[s]=o[a],n.add(r));continue}o[s]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(o=>n.has(o.id))&&this.buildFridges(r);return!0}buildFridges(t){let e=new jt;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);lm(e,n,on(t.floor,n),r?.l??0,r?.r??0)}for(let n of t.floor.furniture)n.type==="awning"&&am(e,n,on(t.floor,n),this.awnings.get(n.id)?.cur??0);for(let n of t.floor.furniture){let r=fc(n.type),o=r?be(n.type):void 0;r&&o&&dm(e,o,r,n,on(t.floor,n),this.awnings.get(n.id)?.cur??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new Xc(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*ee,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.05,(e.tilt??(o?65:20))*ee)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y);return{position:new Y(e.x,a,e.z),direction:new Y(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s)),fov:Math.min(e.fov??(o?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(o?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let o of[n.floorMesh,n.wallMesh])o.layers.enable(Yc);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(Yc),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){this.projections.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.fanTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.sunFx.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility);for(let t of["pointerdown","pointerup","wheel","keydown"])this.host.removeEventListener(t,this.onInput,{capture:!0});clearTimeout(this.decorTimer),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values()){t.led.dispose();for(let e of t.own)e.dispose()}this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose();for(let t of this.fans.values())t.mesh.geometry.dispose();this.fans.clear(),this.fanMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&yS();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new _r({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ne,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Hc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=!!(this.floorId&&this.options.onRoomDoubleTap),r=n||this.options.onDeviceDoubleTap&&!this.furnish?this.pick(t,e):null;r&&"entity"in r&&!this.furnish&&this.options.onDeviceDoubleTap?.(r.entity,t,e)||(n&&r&&!("entity"in r)&&r.roomId?this.options.onRoomDoubleTap(r.floorId,r.roomId):this.options.onBack?.())}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}retired=[];disposeRetired(){if(this.retired.length){for(let t of this.retired)t.dispose();this.retired=[]}}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.fans.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))this.retired.push(e);this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let o=document.createElement("span");o.className="fp3d-dev-watt";let s=document.createElement("span");s.className="fp3d-dev-name",e.append(n,r,o,s);let a,l=!1;e.addEventListener("pointerdown",h=>{if(this.furnish){this.pendingDevice=t;return}h.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)},lS)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",h=>h.preventDefault()),e.addEventListener("click",h=>{if(h.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}),e.addEventListener("keydown",h=>{if(h.key==="Enter"&&h.shiftKey||h.key==="ContextMenu"){h.preventDefault();let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=dg(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=Vg(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=Bo(r,a.ra),a.rb=Bo(r,a.rb)}t.lightSurface=n;let o=new Vt;o.setAttribute("position",new It(n.pos,3)),o.setAttribute("color",new It(new Float32Array(n.pos.length),3)),o.setAttribute("fold",new It(n.fold,1));let s=new dr(new Uint32Array(n.pos.length/3),1);s.setUsage(oh),o.setIndex(s),o.setDrawRange(0,0),o.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=o,t.glowSig="",this.buildGlow(t)}packLightAt(t){if(t.lamp!=="wall"||!t.pack)return null;let e=be(t.pack);if(!e)return null;let[n,r,o]=t.size??ia.wall;return pm(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:o,mirror:t.mirror},t.base??0)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let o=n.top??t.floor.height,s=Ef(t.floor,n.x,n.z),a=Bo(t.lightZones,s),[l,,c]=n.size??(n.lamp?ia[n.lamp]:[.3,.3,.3]),h=n.base??0,u={ceiling:[o-.12,"ceiling"],downlight:[o-.03,"spot"],spot:[o-c,"spot"],panel:[o-.05,"ceiling"],pendant:[Math.max(.5,o-c),"pendant"],fan:[Math.max(.5,o-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<gS?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,d]=n.lamp?u[n.lamp]:[n.y,"omni"],m=n.lightY??f,b=r.color;if(n.lamp==="strip"){let g=(n.rotation??0)*ee,p=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:h+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a});else{let y=(n.rise??0)*ee;e.push({x:n.x+Math.cos(g)*l*x*Math.cos(y),y:m+Math.sin(y)*l*x,z:n.z+Math.sin(g)*l*x*Math.cos(y),color:b,level:r.level*.55,kind:p||y?"omni":d,room:a})}}else{let g=this.packLightAt(n);e.push({x:g?g[0]:n.x,y:g?g[1]:m,z:g?g[2]:n.z,color:b,level:r.level,kind:d,room:a})}}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(o=>o!==t&&Math.abs(o.floor.elevation-e)<.8&&o.geo.holes.length);if(!n)return[];let r=[];for(let o of n.geo.holes){if(o.length<3)continue;let s=0,a=[0,0,0];for(let h of this.devices){if(h.floorId!==n.floor.id)continue;let u=this.glowOf(h);if(!u)continue;let f=Zt([h.x,h.z],o)?0:aS(h.x,h.z,o);if(f>Ng)continue;let d=u.level*(1-f/Ng);for(let m=0;m<3;m++)a[m]+=u.color[m]*d;s+=d}if(s<.02)continue;let[l,c]=Zi(o);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/s,a[1]/s,a[2]/s],level:Math.min(1,s)*.6,kind:"ceiling",room:Bo(t.lightZones,Ef(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t);this.buildSpill(t,n);let r=e.doors.map(u=>{let f=t.geo.openings.find(m=>m.opening.id===u.id);if(f&&$i(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),o=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(o===t.glowSig)return;t.glowSig=o;let s=t.glowMesh.geometry,a=s.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,s.setDrawRange(0,0);return}let l=mg(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==u)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=s.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}s.index.needsUpdate=!0,s.setDrawRange(0,h),t.glowMesh.visible=h>0}makeMaterials(t){return{floor:nn(new Xt({vertexColors:!0}),this.themeUniform),pattern:wS(this.patternTexture),wall:nn(pi(new Xt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:pi(new Xt({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new Xt({vertexColors:!0,blending:xs,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-1}),lines:nn(pi(new $e({vertexColors:!0,transparent:!0,blending:ta(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:pi(new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:nn(pi(new Xt({vertexColors:!0,side:ie}),t),this.themeUniform),glass:pi(new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:ie}),t),blinds:nn(pi(new Xt({map:this.blindTexture,vertexColors:!0,side:ie}),t),this.themeUniform),water:nn(new Xt({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:ie}),this.themeUniform),flow:ES(this.flowTime),pipeLine:TS(this.flowTime),patch:new Xt({vertexColors:!0,transparent:!0,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),patchGlow:new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),solarLive:Tf(this.flowTime),lamps:nn(new Xt({vertexColors:!0}),this.themeUniform),halos:new Mi({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1}),cones:new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:ie}),screens:new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:ie}),earth:nn(new Xt({vertexColors:!0}),this.themeUniform),earthWell:nn(new Xt({vertexColors:!0,side:ie}),this.themeUniform),earthLines:nn(new $e({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(o=>[o.floor.id,{y:o.y,o:o.o}])),e=new Map(this.floors.map(o=>[o.floor.id,o.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((o,s)=>o.elevation-s.elevation);for(let o of n.floors){let s=n.settings.roof?.solar??[],a=Lo(n)?.id===o.id?s.filter(dt=>dt.face===df).map(dt=>({field:dt,face:ym(n,dt)})):[],l=s.filter(dt=>dt.face.startsWith(`wall:${o.id}:`));if(l.length){let dt=new Map(vm(n,o.id).map(Dt=>[Dt.key,Dt]));for(let Dt of l){let Rt=dt.get(Dt.face);Rt&&a.push({field:Dt,face:Rt})}}let h=Vh(n).some(dt=>x0(dt,o.elevation+o.height)&&Hh(dt,o.elevation))?(dt,Dt)=>{let Rt=v0(n,dt,Dt,o.elevation);return Rt===null?null:Rt-o.elevation}:void 0,u=Dm(wf(o,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Om(n.floors,o),a,h),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),m=new Ce,b=new At(u.floor,d.floor),g=new At(u.shadow,d.shadow);g.renderOrder=1;let p=new At(u.floor,d.pattern);p.renderOrder=2;let x=new At(new Vt,d.glow);x.renderOrder=3,x.visible=!1;let y=new At(new Vt,d.frames),v=new At(new Vt,d.blinds),M=new At(new Vt,d.glass);M.renderOrder=4;let w=new At(new Vt,d.lamps);w.visible=!1;let T=new At(new Vt,d.cones);T.visible=!1,T.renderOrder=3;let _=new At(new Vt,d.cones);_.visible=!1,_.renderOrder=3;let A=new zi(new Vt,d.halos);A.visible=!1,A.renderOrder=7;let E=new At(new Vt,d.cones);E.visible=!1,E.renderOrder=7;let S=new At(new Vt,d.cones);S.visible=!1,S.renderOrder=7;let P=new At(new Vt,d.lamps);P.visible=!1;let U=new At(new Vt,d.lamps);U.visible=!1;let L=new At(new Vt,d.patch);L.visible=!1,L.renderOrder=3;let R=new At(new Vt,d.patchGlow);R.visible=!1,R.renderOrder=3;let C=new At(new Vt,d.screens);C.visible=!1,C.renderOrder=5;let F=new At(new Vt,d.flow);F.renderOrder=5,F.frustumCulled=!1;let D=new At(new Vt,d.pipeLine),N=new At(new Vt,d.pipeLine),k=new At(new Vt,d.pipeLine);for(let dt of[D,N,k])dt.renderOrder=4,dt.frustumCulled=!1,dt.visible=!1;let V=Sf(a,o.elevation),X=V?new At(V.geometry,d.solarLive):null;X&&(X.renderOrder=6,Qs(V,this.solarLevels));for(let dt of[y,v,M])dt.frustumCulled=!1;let z=new At(u.walls,d.glassWall),K=new At(u.walls,d.wall);z.renderOrder=6;let J=new At(u.water,d.water);J.renderOrder=4;let at=Math.min(...n.floors.filter(dt=>dt.rooms.length).map(dt=>dt.elevation)),H=Bm(n,o,u.openings,o.elevation===at),W=H?[new At(H.earth.geometry(),d.earth),new At(H.wells.geometry(),d.earthWell),new qe(H.lines.geometry(),d.earthLines)]:[];for(let dt of W)dt.userData.earth=!0;m.add(b,g,p,x,K,J,new qe(u.lines,d.lines),y,v,M,F,D,N,k,w,T,_,A,E,S,P,U,L,R,C,z,...X?[X]:[],...W),this.root.add(m);let tt=document.createElement("button");tt.className="fp3d-pin fp3d-pin-floor",tt.dataset.floor=o.id;let st=document.createElement("b");st.textContent=o.name||"\u2013";let it=document.createElement("span");it.textContent=this.floorInfo.get(o.id)??this.options.floorInfo?.(o)??"",tt.append(st,it),tt.addEventListener("click",()=>this.options.onFloorTap?.(o.id)),this.labels.append(tt);let ht=t.get(o.id),gt=[],lt=null;for(let dt of gc(o)){let Dt=document.createElement("button");Dt.className="fp3d-pin",Dt.dataset.room=dt.id,Dt.dataset.floor=o.id,this.fillRoomPin(Dt,dt.name,this.roomInfo.get(dt.id)),Dt.addEventListener("click",()=>this.options.onRoomTap?.(o.id,dt.id)),this.labels.append(Dt);let[Rt,ne]=Zi(dt.points);if(gt.push({pin:Dt,room:dt,cx:Rt,cz:ne}),!dt.outdoor)for(let[pe,de]of dt.points)lt??={x0:pe,x1:pe,z0:de,z1:de},lt.x0=Math.min(lt.x0,pe),lt.x1=Math.max(lt.x1,pe),lt.z0=Math.min(lt.z0,de),lt.z1=Math.max(lt.z1,de)}this.floors.push({floor:o,rank:r.indexOf(o),group:m,geo:u,floorMesh:b,shadowMesh:g,patternMesh:p,glowMesh:x,lightSurface:null,lightZones:null,framesMesh:y,glassMesh:M,blindsMesh:v,flowMesh:F,pipeLineMesh:D,pipeHouseMesh:N,pipeFloorMesh:k,pipeLineSig:"",solarMesh:X,solarLive:V,lampMesh:w,sunMesh:T,sunSig:"",spillMesh:_,spillSig:"",haloMesh:A,coneMesh:E,trailMesh:S,fridgeMesh:P,pipeMesh:U,pipeSig:"",patchMesh:L,patchGlowMesh:R,patchSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:K,screenMesh:C,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:lt,roomPins:gt,labelSize:null,materials:d,mask:f,openings:new Map,y:ht?.y??0,o:ht?.o??1,ty:0,to:1,appliedO:-1,lightAt:0,label:tt})}this.floorMap=new Map(this.floors.map(o=>[o.floor.id,o]));for(let o of this.floors)this.buildFridges(o),this.buildPipes(o),this.buildPatches(o);this.labelsDirty=!0,this.floorId&&!n.floors.some(o=>o.id===this.floorId)&&(this.floorId=null);for(let o of this.floors){this.buildLamps(o),this.buildScreens(o);let s=e.get(o.floor.id);for(let a of o.geo.openings)o.openings.set(a.opening.id,s?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??ea);this.buildOpenings(o),this.buildFlows(o),o.poolGroup=void 0,this.buildPoolWater(o),this.buildLightSurface(o),this.buildSun(o)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.buildSunFx(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(p=>p.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(p=>p.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?Cm(this.building,this.roofWindows):[];if(this.roofGeos=t,this.shadowSig="",!t.length)return;let e=new Map(Nr(this.building).map(p=>[p.key,p])),n=this.building.settings.roof?.solar??[],r=Tf(this.flowTime),o=[],s=new Ce,a=nn(new Xt({vertexColors:!0,transparent:!0,side:ie}),this.themeUniform),l=nn(new $e({vertexColors:!0,transparent:!0,blending:ta(this.theme),depthWrite:!1}),this.themeUniform,!0),c=nn(new Xt({vertexColors:!0,transparent:!0,side:ie,depthWrite:!1}),this.themeUniform),h=new Ce,u=nn(new Xt({vertexColors:!0,side:ie}),this.themeUniform),f=nn(new Xt({vertexColors:!0,transparent:!0,opacity:.35,side:ie,depthWrite:!1}),this.themeUniform),d=nn(new Xt({vertexColors:!0,transparent:!0,opacity:.35,side:ie,depthWrite:!1}),this.themeUniform),m=nn(new $e({vertexColors:!0,transparent:!0,blending:ta(this.theme),depthWrite:!1}),this.themeUniform,!0),b=[],g=t.map(p=>{let x=new Ce;x.add(new At(p.solid.geometry(),a),new qe(p.lines.geometry(),l)),p.glass.count&&x.add(new At(p.glass.geometry(),c));let y=n.flatMap(w=>{let T=e.get(w.face);return T&&(T.section?p.sections?.includes(T.section):p===t[0])?[{face:T,field:w}]:[]}),v=Sf(y,p.floor.elevation+p.base);if(v){let w=new At(v.geometry,r);w.renderOrder=9,x.add(w),o.push(v),Qs(v,this.solarLevels)}p.winRoof?.solid.count&&x.add(new At(p.winRoof.solid.geometry(),u),new qe(p.winRoof.lines.geometry(),m)),p.winRoof?.glass.count&&x.add(new At(p.winRoof.glass.geometry(),d)),x.renderOrder=8,s.add(x);let M=null;(p.win?.solid.count||p.win?.glass.count)&&(M=new Ce,M.add(new At(p.win.solid.geometry(),u),new qe(p.win.lines.geometry(),m)),p.win.glass.count&&M.add(new At(p.win.glass.geometry(),f)),h.add(M));for(let[w,T]of p.winBelow??[]){if(!T.solid.count&&!T.glass.count)continue;let _=new Ce;_.add(new At(T.solid.geometry(),u),new qe(T.lines.geometry(),m)),T.glass.count&&_.add(new At(T.glass.geometry(),f)),h.add(_),b.push({floorId:w,win:_})}return{group:x,floorId:p.floor.id,rideId:T0(this.building,p.floor,p.sections??[]),base:p.base,lift:p.lift!==!1,win:M}});s.renderOrder=8,this.scene.add(s),this.scene.add(h),this.roof={group:s,parts:g,below:b,solid:a,lines:l,glass:c,live:r,lives:o,wins:h,winSolid:u,winLines:m,winGlass:f,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/Dg)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),o=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?Dg*n:0,s=1-Math.exp(-t/Og),a=this.roofO;this.roofO+=(o-this.roofO)*s,Math.abs(o-this.roofO)<.004&&(this.roofO=o),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let h=this.floorMap.get(l.rideId)??c,u=h.ty>0?Math.min(1,h.y/h.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+h.y+l.base+this.roofLift()+(l.lift?u*Fg:0),l.win&&(l.win.position.y=c.floor.elevation+h.y+l.base+(l.lift?u*Fg:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==o}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,o=1;e?n.rank>e.rank?(r=5+n.rank,o=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,o=this.floorStack==="single"?0:sS)):r=this.explode?n.rank*Gg:0,n.ty=r,n.to=o;let a=e===n?rn:ai;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=o),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let o=r.mesh.material;o.transparent=t.o<.999,o.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Og);for(let r of this.floors){let o=r.ty-r.y,s=r.to-r.o;if(Math.abs(o)<.004&&Math.abs(s)<.004){(o!==0||s!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=o*n,r.o+=s*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Ug);for(let r of this.floors){let o=!1,s=!1;for(let[a,l]of r.openings){let c=this.openingTargets.get(a)??ea,h=(d,m)=>(d??null)===(m??null)||typeof d=="number"&&typeof m=="number"&&Math.abs(d-m)<.003;if(h(c.open,l.open)&&h(c.open2??0,l.open2??0)&&h(c.tilt,l.tilt)&&h(c.tilt2??0,l.tilt2??0)&&h(c.cover,l.cover)&&!!c.sensed==!!l.sensed&&!!c.unlocked==!!l.unlocked)continue;let u={...l,open2:l.open2??0,tilt2:l.tilt2??0,sensed:c.sensed,unlocked:c.unlocked},f=!1;for(let d of["open","open2","tilt","tilt2"]){let m=c[d]??0,b=l[d]??0,g=m-b;Math.abs(g)<.003?u[d]=m:(u[d]=b+g*n,f=!0)}if(c.cover===null||l.cover===null)u.cover=c.cover;else{let d=c.cover-l.cover;Math.abs(d)<.003?u.cover=c.cover:(u.cover=l.cover+d*n,f=!0)}(u.open!==l.open||u.open2!==(l.open2??0)||u.tilt!==l.tilt||u.tilt2!==(l.tilt2??0)||u.cover!==l.cover||!!u.sensed!=!!l.sensed||!!u.unlocked!=!!l.unlocked)&&(r.openings.set(a,u),o=!0),e||=f,s||=f}if(o){this.buildOpenings(r);let a=performance.now();(!this.lowQuality||!s||a-r.lightAt>=bS)&&(r.lightAt=a,this.buildGlow(r),this.buildSun(r))}}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new j(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*xS+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=e)return 0;let f=u-e,d=f>Qc?.5+.5*Math.sin(f/140):f/Qc;return Math.round(d*10)/10},r=this.devices.filter(h=>h.floorId===t.floor.id&&(h.lamp||h.model)),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(h=>`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${h.rise??0},${h.size?.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0}${h.colors?JSON.stringify(h.colors)+this.theme:""}`).join(";"),s=r.map(h=>this.glowOf(h)),a=r.map((h,u)=>`${n(h.id)},${s[u]?`${s[u].level.toFixed(3)},${s[u].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=o,t.lampColorSig="";let h=new jt,u=[],f=[],d=new Map,m=t.floor.height;for(let b of r){let g=b.lamp==="strip"?(b.base??m)>Math.min(t.floor.cut_height,m):b.lamp?kg.has(b.lamp)&&(b.top??m)>Math.min(t.floor.cut_height,m):b.model==="camera_ceiling";if(!b.lamp&&!b.model||g&&this.wallMode==="cut")continue;let p=h.count,x=b.pack?be(b.pack):void 0,[y,v,M]=b.size??[.3,.3,.3];b.model?b.ownLook||hm(h,b.model,b.x,b.model==="camera_ceiling"?m:b.y,b.z,b.rotation??0):x?Dc(h,x,{x:b.x,z:b.z,rotation:b.rotation??0,w:y,d:v,h:M,mirror:b.mirror,colors:b.colors},b.base??0,65280):Pf(h,{...b,lamp:b.lamp},b.top??m,65280,b.lamp!=="fan"),d.set(b.furnitureId??b.id,{start:p,end:h.count}),b.pickable!==!1&&u.push({id:b.id,start:p,end:h.count}),b.furnitureId&&f.push({id:b.furnitureId,start:p,end:h.count})}t.lampTris=u,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=Gp(h.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=h.geometry(),t.lampMesh.visible=h.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((h,u)=>{let f=t.lampRanges.get(h.furnitureId??h.id);if(!f)return;let d=s[u],m=d?.55+.45*d.level:0,b=d?new j(...d.color.map(x=>Math.min(1,x*m))):new j(mS),g=n(h.id);g>0&&b.lerp(new j(1,1,1),.7*g);let p=new j(b.getHex());Hp(c,t.lampShade,f,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*ee,r=this.weather?.cloud??0,o=Vg(t.floor,t.geo.openRooms),s=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${o.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(s===t.sunSig)return;t.sunSig=s;let a=new jt;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*ee,h=e.azimuth*ee,u=[Math.sin(n+h),-Math.cos(n+h)],f=1/Math.tan(c);for(let d of t.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let m=[-d.toRoom[0],-d.toRoom[1]],b=m[0]*u[0]+m[1]*u[1];if(b<.05)continue;let g=t.openings.get(d.opening.id),p=d.top-(g?.cover??0)*(d.top-d.sill);if(p-d.sill<.05)continue;let x=(S,P)=>{let U=Math.min(7,P*f);return[d.start[0]+d.axis[0]*S+d.toRoom[0]*d.faceRoom-u[0]*U,.02,d.start[1]+d.axis[1]*S+d.toRoom[1]*d.faceRoom-u[1]*U]},y=.14*l*Math.min(1,b*1.5),v=new j(1*y,.82*y,.55*y),M=v.clone().multiplyScalar(.45),w=t.floor.rooms.findIndex(S=>S.id===d.opening.room_id);if(w<0||t.floor.rooms[w].points.length<3)continue;let T=o[w],_=t.floor.rooms.filter((S,P)=>o[P]===T&&S.points.length>=3).map(S=>S.points),A=Math.max(1,Math.ceil(Math.min(7,p*f)/.25)),E=Math.max(1,Math.ceil(d.width/.3));for(let S=0;S<A;S++){let P=d.sill+(p-d.sill)*S/A,U=d.sill+(p-d.sill)*(S+1)/A,L=S/A,R=(S+1)/A,C=v.clone().lerp(M,L),F=v.clone().lerp(M,R);for(let D=0;D<E;D++){let N=d.width*D/E,k=d.width*(D+1)/E,V=x((N+k)/2,(P+U)/2);if(!_.some(at=>Zt([V[0],V[2]],at)))continue;let X=x(N,P),z=x(k,P),K=x(k,U),J=x(N,U);a.tri(X,z,K,C,C,F),a.tri(X,K,J,C,F,F)}}}this.pushRoofSun(t,a,o,u,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,o,s){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(Nr(a).map(u=>[u.key,u])),h=[r[0]*Math.cos(o),Math.sin(o),r[1]*Math.cos(o)];for(let u of l){let f=c.get(u.face),d=Bc(a,f,u);if(!f||!d||d.floor.id!==t.floor.id)continue;let m=f.n[0]*h[0]+f.n[1]*h[1]+f.n[2]*h[2],[b,g,p,x]=d.corners,y=Math.min(1,this.roofWindows.get(u.id)?.cover??0);if(y>.95)continue;let v=(L,R,C)=>[L[0]+(R[0]-L[0])*C,L[1]+(R[1]-L[1])*C,L[2]+(R[2]-L[2])*C],M=v(x,b,y),w=v(p,g,y),T=t.floor.rooms.findIndex(L=>L.id===d.roomId);if(T<0)continue;let _=t.floor.rooms.filter((L,R)=>n[R]===n[T]&&L.points.length>=3).map(L=>L.points),A=(L,R)=>{let C=(D,N)=>v(v(L[0],L[1],D),v(L[3],L[2],D),N);for(let D=0;D<6;D++)for(let N=0;N<6;N++){let k=C((D+.5)/6,(N+.5)/6);if(!_.some(J=>Zt([k[0],k[2]],J)))continue;let V=C(D/6,N/6),X=C((D+1)/6,N/6),z=C((D+1)/6,(N+1)/6),K=C(D/6,(N+1)/6);e.tri(V,X,z,R,R,R),e.tri(V,z,K,R,R,R)}},E=L=>[L[0],.019,L[2]],S=.06*s;if(A([E(b),E(g),E(w),E(M)],new j(.75*S,.85*S,1*S)),m<.05)continue;let P=L=>{let R=Math.min(7,(L[1]-t.floor.elevation)/Math.tan(o));return[L[0]-r[0]*R,.02,L[2]-r[1]*R]},U=.16*s*Math.min(1,m*1.5);A([P(b),P(g),P(w),P(M)],new j(1*U,.84*U,.6*U))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],o=new jt,s=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let x=(l.rotation??0)*ee,y=[-Math.sin(x),Math.cos(x)],v=l.model==="camera_ceiling",M=l.reach??(v?3:4.5),w=(l.fov??(v?360:90))*ee/2,T=l.motion?new j(.9,.12,.16):new j(.04,.22,.28),_=new j(0,0,0),A=Math.max(4,Math.round(w/.15)),E=.015,S=t.geo.walls2d,P=N=>{let k=N.b[0]-N.a[0],V=N.b[1]-N.a[1],X=k*k+V*V||1,z=Math.max(0,Math.min(1,((l.x-N.a[0])*k+(l.z-N.a[1])*V)/X));return Math.hypot(l.x-(N.a[0]+k*z),l.z-(N.a[1]+V*z))},U=null;for(let N of S)P(N)<.45&&(!U||P(N)<P(U))&&(U=N);let L=N=>{let k=y[0]*Math.cos(N)-y[1]*Math.sin(N),V=y[1]*Math.cos(N)+y[0]*Math.sin(N),X=M;for(let z of S){let K=z.b[0]-z.a[0],J=z.b[1]-z.a[1],at=k*J-V*K;if(Math.abs(at)<1e-9)continue;let H=((z.a[0]-l.x)*J-(z.a[1]-l.z)*K)/at,W=((z.a[0]-l.x)*V-(z.a[1]-l.z)*k)/at;z===U&&H<=.45||H>.02&&H<X&&W>=0&&W<=1&&(X=H)}return X},R=(N,k)=>E+Mr(t.floor,{x:N,z:k}),C=N=>{let k=L(N),V=l.x+(y[0]*Math.cos(N)-y[1]*Math.sin(N))*k,X=l.z+(y[1]*Math.cos(N)+y[0]*Math.sin(N))*k;return[V,R(V,X),X]},F=[l.x,Math.max(R(l.x,l.z),v?-1/0:R(l.x+y[0]*.3,l.z+y[1]*.3)),l.z],D=o.count;for(let N=0;N<A;N++)o.tri(F,C(-w+2*w*(N+1)/A),C(-w+2*w*N/A),T,_,_);s.push({id:l.id,start:D,end:o.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||kg.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let h=l.top??e,[u,f,d]=l.size??ia[l.lamp],m=l.base??0,b=(l.rotation??0)*ee,g={ceiling:h-.07,downlight:h-.03,spot:h-d,panel:h-.03,pendant:Math.max(.4,h-d)+.08,fan:Math.max(.5,h-Math.max(.25,d))+.02,floor:m+d-.15,uplight:m+d,table:m+d-.09,wall:m+d/2,strip:m+Math.max(.02,d)-.01,bollard:m+d-.08,garden:m+d-.03}[l.lamp],p=(x,y,v=1)=>{n.push(x,g,y),r.push(...c.color.map(M=>M*c.level*.7*v))};if(l.lamp==="strip")for(let x of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,m+u*(.5+x),l.z),r.push(...c.color.map(y=>y*c.level*.7*.6));else if(l.rise){let y=l.rise*ee;n.push(l.x+Math.cos(b)*u*x*Math.cos(y),g+Math.sin(y)*u*x,l.z+Math.sin(b)*u*x*Math.cos(y)),r.push(...c.color.map(v=>v*c.level*.7*.6))}else p(l.x+Math.cos(b)*u*x,l.z+Math.sin(b)*u*x,.6);else if(l.lamp==="wall"){let x=this.packLightAt(l);x?(n.push(...x),r.push(...c.color.map(y=>y*c.level*.7))):p(l.x-Math.sin(b)*(f/2+.05),l.z+Math.cos(b)*(f/2+.05))}else p(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let x=new j(...c.color.map(T=>T*.09*c.level)),y=new j(0,0,0),v=Math.max(.03,u/2),M=.45+.35*c.level,w=16;for(let T=0;T<w;T++){let _=T/w*Math.PI*2,A=(T+1)/w*Math.PI*2,E=[l.x+Math.cos(_)*v,g,l.z+Math.sin(_)*v],S=[l.x+Math.cos(A)*v,g,l.z+Math.sin(A)*v],P=[l.x+Math.cos(_)*M,.02,l.z+Math.sin(_)*M],U=[l.x+Math.cos(A)*M,.02,l.z+Math.sin(A)*M];o.tri(E,P,U,x,y,y),o.tri(E,U,S,x,y,x)}}}let a=new Vt;a.setAttribute("position",new It(n,3)),a.setAttribute("color",new It(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=o.geometry(),t.coneMesh.visible=o.count>0,t.coneTris=s}buildScreens(t){let e=wf(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),r=(Uo.value?No.value.toArray().map(s=>Math.round(s*255)).join(","):"")+"|"+e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(r===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=r;let o=new jt;for(let s of e){let a=this.screens.get(s.id),l=vc.has(s.type)?yc(t.geo.walls2d,s,t.floor.height,on(t.floor,s)):null,c=l?{...s,x:l.x,z:l.z,mount_y:l.y}:s,h=c.rotation*ee,u=Math.cos(h),f=Math.sin(h),d=(T,_,A)=>[c.x+T*u-A*f,_,c.z+T*f+A*u];if(a.faces){let T=Math.max(.05,c.w)*(c.mirror?-1:1),_=Math.max(.05,c.d),A=Math.max(.005,c.h),E=on(t.floor,c);for(let S of a.faces){if(S.part==="lights"){let X=be(c.type),z=K=>["#e8f4ff","#ff3b4f"].includes(K.color.toLowerCase());if(X&&X.parts.some(z)){let K=new j(...S.color.map(J=>Math.min(1,J*(.4+.6*S.level))));Vs(o,X,c,E,K.getHex(),z)}continue}if(S.part==="cabin"){let X=be(c.type),z=K=>K.color.toLowerCase()==="#13283a"||K.color==="glass";if(X&&X.parts.some(z)){let K=new j(...S.color.map(J=>Math.min(1,J*(.3+.5*S.level))));Vs(o,X,c,E,K.getHex(),z);continue}}if(S.part==="burners"&&be(c.type)){let X=be(c.type),z=new j(...S.color.map(K=>Math.min(1,K*(.25+.6*S.level))));Vs(o,X,c,E,z.getHex(),Wp);continue}if(S.part==="burners"){let X=new j(...S.color.map(K=>Math.min(1,K*(.25+.6*S.level)))),z=E+A+.008;for(let[K,J,at]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let H=K*Math.abs(T)/.6,W=J*_/.62,tt=14;for(let st=0;st<tt;st++){let it=st/tt*Math.PI*2,ht=(st+1)/tt*Math.PI*2;o.tri(d(H,z,W),d(H+Math.cos(it)*at,z,W+Math.sin(it)*at),d(H+Math.cos(ht)*at,z,W+Math.sin(ht)*at),X)}}continue}if(S.part==="band"||S.part==="cabin"){let X=S.part==="cabin",z=E+A*(X?.6:.42),K=X?E+A*.86:z+.07,J=new j(...S.color.map(tt=>Math.min(1,tt*(.3+.45*S.level)))),at=Math.abs(T)/2+(X?.012:.02),H=_/2+(X?.012:.02),W=[[-at,-H],[at,-H],[at,H],[-at,H]];for(let tt=0;tt<4;tt++){let st=W[tt],it=W[(tt+1)%4],ht=d(st[0]*Math.sign(T),z,st[1]),gt=d(it[0]*Math.sign(T),z,it[1]),lt=d(it[0]*Math.sign(T),K,it[1]),dt=d(st[0]*Math.sign(T),K,st[1]);o.tri(ht,gt,lt,J),o.tri(ht,lt,dt,J)}continue}if(S.part==="strata"){let X=S.top??S.color,z=.22+.4*S.level,K=new j(...S.color.map(it=>Math.min(1,it*z))),J=new j(...X.map(it=>Math.min(1,it*z))),at=E+A*.06,H=E+A*.94,W=Math.abs(T)/2+.012,tt=_/2+.012,st=20;for(let it=0;it<st;it++){let ht=it/st*Math.PI*2,gt=(it+1)/st*Math.PI*2,lt=[Math.cos(ht)*W,Math.sin(ht)*tt],dt=[Math.cos(gt)*W,Math.sin(gt)*tt];o.tri(d(lt[0],at,lt[1]),d(dt[0],at,dt[1]),d(dt[0],H,dt[1]),K,K,J),o.tri(d(lt[0],at,lt[1]),d(dt[0],H,dt[1]),d(lt[0],H,lt[1]),K,J,J)}continue}if(S.part==="apring"){let X=c.variant==="wall",z=Math.abs(T),K=X?Math.min(z,A)*.3:Math.min(z,_)*.3,J=new j(...S.color.map(tt=>Math.min(1,tt*(.4+.6*S.level)))),at=new j(0,0,0),H=24,W=(tt,st)=>X?d(Math.cos(tt)*st,E+A/2+Math.sin(tt)*st,_/2+.004):d(Math.cos(tt)*st,E-.003,Math.sin(tt)*st);for(let tt=0;tt<H;tt++){let st=tt/H*Math.PI*2,it=(tt+1)/H*Math.PI*2;o.tri(W(st,K*.8),W(st,K),W(it,K),J),o.tri(W(st,K*.8),W(it,K),W(it,K*.8),J),o.tri(W(st,K),W(st,K*1.5),W(it,K*1.5),J,at,at),o.tri(W(st,K),W(it,K*1.5),W(it,K),J,at,J)}continue}if(S.part==="drum"){let X=Math.abs(T),z=Math.min(X*.36,(A-.2)*.42),K=E+(A-.14)/2+.04,J=_/2-.006,at=new j(...S.color.map(it=>Math.min(1,it*(.35+.65*S.level)))),H=at.clone().multiplyScalar(.12),W=new j(0,0,0),tt=28,st=(it,ht)=>d(Math.cos(it)*ht,K+Math.sin(it)*ht,J);for(let it=0;it<tt;it++){let ht=it/tt*Math.PI*2,gt=(it+1)/tt*Math.PI*2;o.tri(d(0,K,J),st(ht,z*.78),st(gt,z*.78),H),o.tri(st(ht,z*.78),st(ht,z),st(gt,z),at),o.tri(st(ht,z*.78),st(gt,z),st(gt,z*.78),at),o.tri(st(ht,z),st(ht,z*1.18),st(gt,z*1.18),at,W,W),o.tri(st(ht,z),st(gt,z*1.18),st(gt,z),at,W,at)}continue}if(S.part==="gang"){let X=Math.max(1,S.of??1),z=Math.abs(T),K=z/X,J=(-z/2+K*((S.index??0)+.5))*Math.sign(T),at=_/2+(c.variant==="outdoor"?.02:.008),H=S.accent?Uo.value?No.value.toArray():oS:S.color,W=new j(...H.map(Rt=>Math.min(1,Rt*(.35+.65*S.level)))),tt=W.clone().multiplyScalar(.5),st=new j(0,0,0),it=K*.34,ht=E+A*.16,gt=E+A*.84,lt=[d(J-it,ht,at),d(J+it,ht,at),d(J+it,gt,at),d(J-it,gt,at)];o.tri(lt[0],lt[1],lt[2],W),o.tri(lt[0],lt[2],lt[3],W);let dt=.012+.015*S.level,Dt=[d(J-it-dt,ht-dt,at-.001),d(J+it+dt,ht-dt,at-.001),d(J+it+dt,gt+dt,at-.001),d(J-it-dt,gt+dt,at-.001)];for(let Rt=0;Rt<4;Rt++){let ne=(Rt+1)%4;o.tri(lt[Rt],Dt[ne],Dt[Rt],tt,st,st),o.tri(lt[Rt],lt[ne],Dt[ne],tt,tt,st)}continue}if(S.part==="beacon"){let X=new j(...S.color.map(gt=>Math.min(1,gt*(.25+.45*S.level)))),z=new j(0,0,0),K=E+A+.01,J=.6+.6*S.level,at=Math.min(Math.abs(T),_)*.38;for(let[gt,lt]of[[at,0],[0,at]]){let dt=d(-gt,K,-lt),Dt=d(gt,K,lt),Rt=d(gt*.4,K+J,lt*.4),ne=d(-gt*.4,K+J,-lt*.4);o.tri(dt,Dt,Rt,X,X,z),o.tri(dt,Rt,ne,X,z,z)}let H=on(t.floor,{...c,mount_y:0})+.012,W=Math.abs(T)/2+.03,tt=_/2+.03,st=.22+.18*S.level,it=(gt,lt,dt)=>d(gt*(W+dt),H,lt*(tt+dt)),ht=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let gt=0;gt<4;gt++){let[lt,dt]=ht[gt],[Dt,Rt]=ht[(gt+1)%4];o.tri(it(lt,dt,0),it(Dt,Rt,0),it(Dt,Rt,st),X,X,z),o.tri(it(lt,dt,0),it(Dt,Rt,st),it(lt,dt,st),X,z,z)}continue}let P=S.part==="right"?.03:-Math.abs(T)/2+.03,U=S.part==="left"?-.03:Math.abs(T)/2-.03,L=E+(S.part==="bottom"?A*.45:A)+.006,R=new j(...S.color.map(X=>Math.min(1,X*(.35+.65*S.level)))),C=new j(0,0,0),F=(X,z,K=L)=>d(X*Math.sign(T),K,z),D=[F(P,-_/2+.03),F(U,-_/2+.03),F(U,_/2-.03),F(P,_/2-.03)];o.tri(D[0],D[2],D[1],R),o.tri(D[0],D[3],D[2],R);let N=S.part==="lid"?.025+.02*S.level:.12+.1*S.level,k=R.clone().multiplyScalar(S.part==="lid"?.7:.5),V=[F(P-N,-_/2-N,L+.004),F(U+N,-_/2-N,L+.004),F(U+N,_/2+N,L+.004),F(P-N,_/2+N,L+.004)];for(let X=0;X<4;X++){let z=(X+1)%4;o.tri(D[X],V[z],V[X],k,C,C),o.tri(D[X],D[z],V[z],k,k,C)}}continue}let m=be(c.type);if(m&&!m.light&&a.ring&&m.parts.some(T=>T.glow)){let T=new j(...a.color.map(_=>Math.min(1,_*(.45+.55*a.level))));Vs(o,m,c,on(t.floor,c),T.getHex())}let b=hf(c,t.floor);if(!b)continue;let g=new j(...a.color.map(T=>Math.min(1,T*(.35+.65*a.level)))),p=new j(0,0,0),x=b.z+.004;if(o.tri(d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),g),o.tri(d(b.x0,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x),g),a.plain)continue;let y=.18+.12*a.level,v=g.clone().multiplyScalar(.5),M=[d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x)],w=[d(b.x0-y,b.y0-y,x+.01),d(b.x1+y,b.y0-y,x+.01),d(b.x1+y,b.y1+y,x+.01),d(b.x0-y,b.y1+y,x+.01)];for(let T=0;T<4;T++){let _=(T+1)%4;o.tri(M[T],w[T],w[_],v,p,p),o.tri(M[T],w[_],M[_],v,p,v)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=o.geometry(),t.screenMesh.visible=o.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,o]of t.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(t.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),o.texture?.dispose(),t.screenPics.delete(r));for(let[r,o]of n){let s=this.screens.get(r),a=hf(o,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new At(new Gn(1,1),new Xt({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:s.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let h=l;new gr().load(s.picture,u=>{if(t.screenPics.get(r)!==h){u.dispose();return}u.colorSpace=Ne,h.texture=u;let f=h.mesh.material;f.map=u,f.needsUpdate=!0,this.placeScreenPicture(h.mesh,o,a,u),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*s.level),l.texture&&this.placeScreenPicture(l.mesh,o,a,l.texture)}}placeScreenPicture(t,e,n,r){let o=r.image,s=o?.width&&o?.height?o.width/o.height:16/9,{w:a,h:l}=cm(n.x1-n.x0,n.y1-n.y0,s),c=e.rotation*ee,h=(n.x0+n.x1)/2,u=n.z+.008;t.scale.set(a,l,1),t.rotation.set(0,-c,0),t.position.set(e.x+h*Math.cos(c)-u*Math.sin(c),(n.y0+n.y1)/2,e.z+h*Math.sin(c)+u*Math.cos(c))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){this.buildPipeLines(t);let e=this.flows.filter(d=>d.floorId===t.floor.id&&!d.pipe).map(na).join(";"),n=[],r=[],o=[],s=[],a=[],l=[],c=[],h=[];for(let d of this.flows){if(d.floorId!==t.floor.id||d.pipe)continue;let m=this.flowPhase.get(na(d))??{speed:jc(d.power),offset:0},b=d.power>.5?Math.min(1,.5+d.power/2500):.22,g=d.color.map(A=>A*b),p=d.dots?.length?d.dots:[{color:d.color,share:1}],x=[0,1,2].map(A=>p[Math.min(A,p.length-1)].color.map(E=>E*b)),y=p.length>1?p[0].share:1,v=p.length>2?y+p[1].share:1,M=Math.hypot(d.b[0]-d.a[0],d.b[1]-d.a[1],d.b[2]-d.a[2]);if(M<1e-4)continue;let w=[(d.b[0]-d.a[0])/M,(d.b[1]-d.a[1])/M,(d.b[2]-d.a[2])/M],T=[];if(Math.abs(w[1])<.5){let A=Math.hypot(w[0],w[2])||1;T.push([-w[2]/A,0,w[0]/A])}else T.push([1,0,0],[0,0,1]);let _=this.lowQuality?[[Bg*1.4,1]]:[[fS,.25],[Bg,1]];for(let[A,E]of _)for(let S of T){let P=A*(d.width??1)*(d.thick??1)/2,U=(R,C)=>[R[0]+S[0]*P*C,R[1]+S[1]*P*C,R[2]+S[2]*P*C],L=[[U(d.a,-1),d.dist,0],[U(d.b,-1),d.dist+M,0],[U(d.b,1),d.dist+M,1],[U(d.a,1),d.dist,1]];for(let R of[0,1,2,0,2,3]){let[C,F,D]=L[R];n.push(C[0],C[1],C[2]),r.push(g[0]*E,g[1]*E,g[2]*E),o.push(F,D),s.push(m.speed),a.push(m.offset),l.push(x[0][0]*E,x[0][1]*E,x[0][2]*E,y),c.push(x[1][0]*E,x[1][1]*E,x[1][2]*E,v),h.push(x[2][0]*E,x[2][1]*E,x[2][2]*E)}}}let u=t.flowMesh.geometry;if(e===t.flowLayout&&u.getAttribute("position")?.count===n.length/3){for(let[d,m]of[["position",n],["color",r],["flowSpeed",s],["flowOffset",a],["flowDot1",l],["flowDot2",c],["flowDot3",h]]){let b=u.getAttribute(d);b.array.set(m),b.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let f=new Vt;f.setAttribute("position",new It(n,3)),f.setAttribute("color",new It(r,3)),f.setAttribute("uv",new It(o,2)),f.setAttribute("flowSpeed",new It(s,1)),f.setAttribute("flowOffset",new It(a,1)),f.setAttribute("flowDot1",new It(l,4)),f.setAttribute("flowDot2",new It(c,4)),f.setAttribute("flowDot3",new It(h,3)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=f,t.flowMesh.visible=n.length>0}buildPipeLines(t){let e=this.flows.filter(r=>r.floorId===t.floor.id&&r.pipe),n=JSON.stringify(e.map(r=>[r.a,r.b,r.dist,r.color,r.width,r.house,r.floor,Math.round(r.power/50),this.flowPhase.get(na(r))?.speed??0]));if(n!==t.pipeLineSig){t.pipeLineSig=n;for(let r of["all","house","floor"]){let o=[],s=[],a=[],l=[],c=[];for(let f of e){if((f.house?"house":f.floor?"floor":"all")!==r)continue;let d=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1],f.b[2]-f.a[2]);if(d<1e-4)continue;let m=this.flowPhase.get(na(f))??{speed:jc(f.power),offset:0},b=[(f.b[0]-f.a[0])/d,(f.b[1]-f.a[1])/d,(f.b[2]-f.a[2])/d],g=[];if(Math.abs(b[1])<.5){let v=Math.hypot(b[0],b[2])||1;g.push([-b[2]/v,0,b[0]/v])}else g.push([1,0,0],[0,0,1]);let p=uS*(f.width??1),x=f.power>.5?1:.62,y=[[p+hS*2,[.02,.025,.05],.78,2],[p,f.color.map(v=>v*x),1,0]];for(let[v,M,w,T]of y)for(let _ of g){let A=v/2,E=T===0?.002:0,S=(U,L)=>[U[0]+_[0]*A*L,U[1]+_[1]*A*L+E,U[2]+_[2]*A*L],P=[[S(f.a,-1),f.dist,T],[S(f.b,-1),f.dist+d,T],[S(f.b,1),f.dist+d,T+1],[S(f.a,1),f.dist,T+1]];for(let U of[0,1,2,0,2,3]){let[L,R,C]=P[U];o.push(L[0],L[1],L[2]),s.push(M[0],M[1],M[2],w),a.push(R,C),l.push(m.speed),c.push(m.offset)}}}let h=r==="house"?t.pipeHouseMesh:r==="floor"?t.pipeFloorMesh:t.pipeLineMesh,u=new Vt;u.setAttribute("position",new It(o,3)),u.setAttribute("color",new It(s,4)),u.setAttribute("uv",new It(a,2)),u.setAttribute("flowSpeed",new It(l,1)),u.setAttribute("flowOffset",new It(c,1)),h.geometry.dispose(),h.geometry=u,h.userData.filled=o.length>0}this.applyHouseLines(t)}}applyHouseLines(t){for(let e of t?[t]:this.floors)e.pipeLineMesh.visible=!!e.pipeLineMesh.userData.filled,e.pipeHouseMesh.visible=!!e.pipeHouseMesh.userData.filled&&this.floorId===null,e.pipeFloorMesh.visible=!!e.pipeFloorMesh.userData.filled&&this.floorId!==null}buildOpenings(t){let e=_g(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color"),n=t.geo.roomTris.map(r=>`${this.roomTint?.get(r.roomId)?.join(",")??""}${r.roomId===this.roomId?"*":""}`).join(";");if(this.highlighted.get(e)!==n){this.highlighted.set(e,n);for(let r of t.geo.roomTris){let o=new j(r.color),s=this.roomTint?.get(r.roomId);s&&o.lerp(new j(...s).multiplyScalar(.6),.9),r.roomId===this.roomId&&o.lerp(vS,s?.3:.75);for(let a=r.start*3;a<r.end*3;a++)e.setXYZ(a,o.r,o.g,o.b)}e.needsUpdate=!0}}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new xn;for(let u of this.activeFloors()){let f=u.floor.elevation+u.ty;for(let d of u.floor.rooms)for(let[m,b]of d.points)e.expandByPoint(new Y(m,f,b)),e.expandByPoint(new Y(m,f+u.floor.height,b))}e.isEmpty()&&e.set(new Y(-4,0,-4),new Y(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new Y),r=e.getSize(new Y),o=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,o*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=o);let s=this.floorId===null,a=s?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(s||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let h=c?l.target:null;if(h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.keepNext){this.keepNext=!1;let u=this.controls.view;this.controls.flyTo({target:new Y(u.target.x,n.y,u.target.z),radius:u.radius,phi:u.phi,theta:u.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:o,phi:l?l.phi:.85,theta:l?l.theta:-.6},t,!!l)}placeGround(){let t=new xn,e=1/0;for(let s of this.floors){e=Math.min(e,s.floor.elevation+Math.min(0,s.ty));for(let a of s.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new Y(l,0,c));for(let a of s.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new Y(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=RS();let s=this.ground.material;s.map=this.groundTexture,s.needsUpdate=!0}let n=t.getCenter(new Y),r=t.getSize(new Y),o=If*Math.ceil((Math.max(r.x,r.z)+16)/If);this.ground.scale.set(o,o,1),this.ground.position.set(n.x,e-en-.02,n.z)}distanceFor(t){let e=this.camera.fov*ee,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new gs;return r.setFromCamera(new Jt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),o=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),s=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(h=>h.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let h=s(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(h)return{entity:h}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??Kt;if(f!==Kt&&Math.floor(f/16)===0)continue}let h=s(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),u=h?this.pickOpenings.get(h):void 0;if(u)return{entity:u}}else if(a.object===c.wallMesh){let h=s(c.geo.furnitureTris,l),u=h?this.pickFurniture.get(h):void 0;if(u)return{entity:u};if(!h&&a.face&&a.face.normal.y>.7){let f=Lh(c.floor).find(d=>Zt([a.point.x,a.point.z],d.points));if(f)return{floorId:c.floor.id,roomId:f.id}}if(a.face&&!h){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),m=f%16,b=this.wallMode==="cut"&&d===0,g=(c.mask.glass.value&1<<m)!==0;if(!b){let p=n.ray.direction,x=Math.hypot(p.x,p.z)||1,y=[a.point.x-p.x/x*.3,a.point.z-p.z/x*.3],v=c.floor.rooms.find(M=>M.points.length>=3&&Zt(y,M.points))?.id??null;if(this.roomId!==null){if(v===this.roomId)return{floorId:c.floor.id,roomId:v}}else if(!g&&v)return{floorId:c.floor.id,roomId:v}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:s(c.geo.roomTris.map(h=>({id:h.roomId,start:h.start,end:h.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Qc),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),o=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],s=r.flatMap(a=>[a.lampMesh,a.wallMesh,...o(a)].filter(l=>l.visible));for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=r.find(u=>u.group===a.object.parent||o(u).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let u=this.furnitureNear(l,a.point.x,a.point.z);if(u)return{fv:l,id:u,y:a.point.y};continue}let h=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(u=>a.faceIndex>=u.start&&a.faceIndex<u.end)?.id;if(h)return{fv:l,id:h,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let o of t.floor.furniture){let s=o.rotation*ee,a=e-o.x,l=n-o.z,c=Math.abs(a*Math.cos(s)+l*Math.sin(s))-o.w/2,h=Math.abs(-a*Math.sin(s)+l*Math.cos(s))-o.d/2,u=Math.max(c,h);u<.25&&(!r||u<r.d)&&(r={id:o.id,d:u})}return r?.id??null}floorPoint(t,e,n,r){let o=this.rayAt(e,n),s=r??t.floor.elevation+t.y,a=o.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(s-o.ray.origin.y)/a.y;return l<=0?null:[o.ray.origin.x+a.x*l,o.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let s=n?this.devices.find(u=>u.id===n)?.furnitureId:void 0,a=s?null:this.furnitureAt(t,e),l=s??a?.id,c=l?this.floors.find(u=>u.floor.furniture.some(f=>f.id===l)):void 0,h=c?.floor.furniture.find(u=>u.id===l)?.type;return!!(c&&l&&h&&r.has(h))&&this.grabItem(c,l,t,e)}if(n){let s=this.devices.find(l=>l.id===n)?.furnitureId,a=s?this.floors.find(l=>l.floor.furniture.some(c=>c.id===s)):void 0;return!s||!a?this.grabDevice(n,t,e):this.grabItem(a,s,t,e)}let o=this.furnitureAt(t,e);if(!o){let s=this.pick(t,e);return s&&"entity"in s?this.grabDevice(s.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(o.fv,o.id,t,e,o.y)}grabItem(t,e,n,r,o){let s=t.floor.furniture.find(u=>u.id===e),a=o===void 0?void 0:Math.min(o,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!s||!l)return!1;let c,h=this.rayAt(n,r).ray.direction;if(o!==void 0&&-h.y<.34){let u=this.camera.position,f=this.camera.getWorldDirection(new Y),d=Math.hypot(f.x,f.z)||1,m=[f.x/d,f.z/d],b=Math.hypot(l[0]-u.x,l[1]-u.z,(a??0)-u.y),g=this.renderer.domElement.getBoundingClientRect().height||1,p=2*b*Math.tan(this.camera.fov*Math.PI/360)/g;c={x0:n,y0:r,fx:s.x,fz:s.z,right:[-m[1],m[0]],fwd:m,perPx:p,gain:Math.min(2,1/Math.max(.5,-h.y))}}return s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:t.floor.id,id:s.id,offset:[s.x-l[0],s.z-l[1]],x:s.x,z:s.z,moved:!1,plane:a,screen:c},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),o=r&&this.floorMap.get(r.floorId),s=o&&this.floorPoint(o,e,n);return!r||!o||!s?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:o.floor.id,offset:[r.x-s[0],r.z-s[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(g=>g.id===n.id),m=f&&this.floorPoint(f,t,e);if(!f||!d||!m)return;let b=this.building?.settings.grid??.05;n.x=d.x=Math.round((m[0]+n.offset[0])/b)*b,n.z=d.z=Math.round((m[1]+n.offset[1])/b)*b,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,o=r&&this.floorMap.get(r.floorId);if(!r||!o)return;let s=r.screen,a;if(s){let f=(t-s.x0)*s.perPx,d=(e-s.y0)*s.perPx*s.gain;a=[s.fx+s.right[0]*f-s.fwd[0]*d-r.offset[0],s.fz+s.right[1]*f-s.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(o,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=o.floor.furniture.find(f=>f.id===r.id),h=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?zm(o.floor,c,h,u,this.building?.settings.wall_interior??0):[h,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new De,n;for(let r of t){let o=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),s=o?.floor.furniture.find(a=>a.id===r);!o||!s||(n??=o,this.ghostBox(e,o,s,r===this.selectedFurniture?new j(.25,.9,1):new j(1,.71,.28)))}n&&(this.ghost=new qe(e.geometry(),new $e({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let o=this.grab?.id===n.id?this.grab.x:n.x,s=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=be(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?on(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:on(e.floor,n),u=n.rotation*ee,f=Math.cos(u),d=Math.sin(u),m=(g,p,x)=>[o+g*f-p*d,x,s+g*d+p*f],b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let g=0;g<4;g++){let[p,x]=b[g],[y,v]=b[(g+1)%4];t.seg(m(p,x,h+.01),m(y,v,h+.01),r),t.seg(m(p,x,h+c),m(y,v,h+c),r),t.seg(m(p,x,h+.01),m(p,x,h+c),r)}t.seg(m(-n.w/2,n.d/2+.03,h+.02),m(n.w/2,n.d/2+.03,h+.02),new j(1,1,1))}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let o=this.pick(t,e);return!o||!("entity"in o)||this.options.onDeviceSwipe?.(o.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:o.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(p=>p.floor.rooms.some(x=>x.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),o=Math.round(t*r),s=Math.round(e*r),a=new Ye(o,s);a.texture.colorSpace=Ne;let l=new In(-1,1,1,-1,.1,400),c=this.floors.map(p=>({fv:p,visible:p.group.visible,y:p.y,o:p.o,standing:p.mask.standing.value,glass:p.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(o*s*4),m=document.createElement("canvas");m.width=o,m.height=s;let b=m.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let p of n){for(let U of this.floors)U.group.visible=U===p;p.y=0,p.o=1,this.applyFloor(p),p.group.visible=!0,p.mask.standing.value=0,p.mask.glass.value=0;let x=p.floor.rooms.flatMap(U=>U.points),y=p.floor.elevation,v=new xn(new Y(Math.min(...x.map(U=>U[0]))-.3,y,Math.min(...x.map(U=>U[1]))-.3),new Y(Math.max(...x.map(U=>U[0]))+.3,y+Math.min(p.floor.cut_height,p.floor.height),Math.max(...x.map(U=>U[1]))+.3)),M=v.getCenter(new Y),w=-.6,T=.8,_=new Y(Math.sin(T)*Math.sin(w),Math.cos(T),Math.sin(T)*Math.cos(w));l.position.copy(M).addScaledVector(_,100),l.lookAt(M),l.updateMatrixWorld();let A=.5,E=.5;for(let U of[v.min.x,v.max.x])for(let L of[v.min.y,v.max.y])for(let R of[v.min.z,v.max.z]){let C=new Y(U,L,R).applyMatrix4(l.matrixWorldInverse);A=Math.max(A,Math.abs(C.x)),E=Math.max(E,Math.abs(C.y))}let S=o/s;A/E>S?E=A/S:A=E*S,l.left=-A*1.05,l.right=A*1.05,l.top=E*1.05,l.bottom=-E*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,o,s,d);let P=b.createImageData(o,s);for(let U=0;U<s;U++)P.data.set(d.subarray((s-1-U)*o*4,(s-U)*o*4),U*o*4);b.putImageData(P,0,0),g.push({floorId:p.floor.id,url:m.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let p of c)p.fv.y=p.y,p.fv.o=p.o,p.fv.mask.standing.value=p.standing,p.fv.mask.glass.value=p.glass,this.applyFloor(p.fv),p.fv.group.visible=p.visible;this.roof&&(this.roof.group.visible=h,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let o=r.info.mode,s=n.mode==="cleaning"&&o==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(o!=="cleaning"||s||!r.motion.path.length)){let a=n.room?wg(n.room,void 0,void 0,n.obstacles):Cf(n.rest),l=a.length?a:Cf(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-r.motion.pos[0],h[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!Zt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Lg[n.mode])}for(let[n,r]of this.robots)if(!e.has(n)){r.group.removeFromParent(),r.led.dispose();for(let o of r.own)o.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(t){let e=t.model;return e&&be(e.type)?`${e.type}|${e.w}|${e.d}|${e.h}`:""}makeRobot(t){let e={pos:[...t.rest],heading:t.restHeading,path:[],next:0},n=new Xt({color:Lg[t.mode]}),r=this.robotModelKey(t),o=t.model?be(t.model.type):void 0;if(t.model&&o&&r){let{w:a,d:l,h:c}=t.model,h=new jt,{radius:u,top:f}=fm(h,o,a,l,c),d=new jt,m=Math.min(.05,u*.3),b=Math.min(.1,u*.55);Pe(d,[[-m,b],[m,b],[m,b+m*.8],[-m,b+m*.8]],f,f+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new Xt({vertexColors:!0});let g=[h.geometry(),d.geometry()],p=new Ce;return p.add(new At(g[0],this.robotMat),new At(g[1],n)),{info:t,motion:e,group:p,led:n,own:g,modelKey:r}}if(!this.robotGeo){let a=new jt,l=(h,u,f,d,m)=>{let b=[];for(let g=0;g<20;g++)b.push([Math.cos(g/20*Math.PI*2)*h,Math.sin(g/20*Math.PI*2)*h]);Pe(a,b,u,f,d,m,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new Xt({vertexColors:!0});let c=new jt;Pe(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let s=new Ce;return s.add(new At(this.robotGeo,this.robotMat),new At(this.robotLedGeo,n)),{info:t,motion:e,group:s,led:n,own:[],modelKey:r}}syncFans(t){let e=new Set;for(let n of t){if(n.lamp!=="fan")continue;let r=n.furnitureId??n.id;e.add(r);let[o,,s]=n.size??ia.fan,a=n.top??this.floorMap.get(n.floorId)?.floor.height??2.5,l=o/2,c=this.fans.get(r);if(c&&Math.abs(c.r-l)>.001&&(c.group.removeFromParent(),c.mesh.geometry.dispose(),this.fans.delete(r),c=void 0),!c){let h=new jt;Wg(h,0,0,0,l,0),this.fanMat??=new Xt({vertexColors:!0});let u=new At(h.geometry(),this.fanMat),f=new Ce;f.add(u),f.rotation.y=-((n.rotation??0)*ee),c={group:f,mesh:u,r:l,speed:0,floorId:n.floorId,y:0},this.fans.set(r,c)}c.floorId=n.floorId,c.speed=n.fanSpeed??0,c.y=Hg(a,s),c.group.position.set(n.x,c.y,n.z)}for(let[n,r]of this.fans)e.has(n)||(r.group.removeFromParent(),r.mesh.geometry.dispose(),this.fans.delete(n));this.fanLast=0}stepFans(t){if(!this.fans.size)return!1;let e=this.fanLast?Math.min(.2,(t-this.fanLast)/1e3):0;this.fanLast=t;let n=!1;for(let r of this.fans.values()){let o=this.floorMap.get(r.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),r.group.visible=!(this.wallMode==="cut"&&r.y>Math.min(o.floor.cut_height,o.floor.height)),!(r.speed<=0)&&(n=!0,r.group.rotation.y-=r.speed*Math.PI*2*e))}return n||(this.fanLast=0),n}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let o=this.floorMap.get(r.info.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),e>0?n=Sg(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new j(.25-.2*a,.95-.83*a,1-.7*a),r=new j(0,0,0),o=new j(.3,1,.6),s=.02;for(let a of this.floors){let l=new jt;for(let h of e)h.floorId===a.floor.id&&h.points.forEach(([u,f],d)=>{let m=h.points[d-1];if(m){let b=Math.hypot(u-m[0],f-m[1])||1,g=-(f-m[1])/b*.1,p=(u-m[0])/b*.1;l.tri([m[0]+g,s,m[1]+p],[u+g,s,f+p],[u-g,s,f-p],o,o,o),l.tri([m[0]+g,s,m[1]+p],[u-g,s,f-p],[m[0]-g,s,m[1]-p],o,o,o)}for(let b=0;b<10;b++){let g=b/10*Math.PI*2,p=(b+1)/10*Math.PI*2;l.tri([u,s,f],[u+Math.cos(p)*.35,s,f+Math.sin(p)*.35],[u+Math.cos(g)*.35,s,f+Math.sin(g)*.35],o,r,r)}});let c=null;for(let h of t){if(h.floorId!==a.floor.id)continue;let u=n(h.age);if(c){let f=Math.hypot(h.x-c.x,h.z-c.z)||1,d=-(h.z-c.z)/f*.06,m=(h.x-c.x)/f*.06,b=n(c.age);l.tri([c.x+d,s,c.z+m],[h.x+d,s,h.z+m],[h.x-d,s,h.z-m],b,u,u),l.tri([c.x+d,s,c.z+m],[h.x-d,s,h.z-m],[c.x-d,s,c.z-m],b,u,b)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,m=(f+1)/12*Math.PI*2;l.tri([h.x,s,h.z],[h.x+Math.cos(m)*.22,s,h.z+Math.sin(m)*.22],[h.x+Math.cos(d)*.22,s,h.z+Math.sin(d)*.22],u,r,r)}c=h}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*ee,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.22,(e.tilt??(o?65:20))*ee)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y),l=new Y(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s));return this.controls.flyTo({target:new Y(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-s,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+Qc;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,o,s){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new Y(e,a.floor.elevation+a.ty+r,n),radius:s?.radius??5.5,phi:s?.phi??.78,...s?.theta!==void 0?{theta:s.theta}:{}},900),o){this.flashes.set(o,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(o)}"]`);l?.classList.add("fp3d-dev-found"),setTimeout(()=>l?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),o=this.stepFloors(e),s=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let p=new Set;for(let[x,y]of this.flashes){let v=this.deviceFloor.get(x);v&&p.add(v),y<=t&&this.flashes.delete(x)}a=this.flashes.size>0;for(let x of this.floors)p.has(x.floor.id)&&this.buildLamps(x)}let l=this.placeRoof(e),c=this.stepRobots(t),h=this.stepFans(t),u=this.stepWeather(t),f=r||o||s||a||l,d=[];(r||this.controls.busy)&&d.push("camera"),o&&d.push("floors"),s&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.poolActive&&d.push("pool"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),c&&d.push("robot"),h&&d.push("fan"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.projections.active&&this.updateProjections(),this.sunFx.showShadow(this.floorId===null&&this.shadowSig!==""),this.renderer.render(this.scene,this.camera),this.disposeRetired(),(this.viewChanged()||o||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),f&&this.invalidate();let m=this.flowActive||this.solarActive||this.soundActive||this.poolActive||c||h||this.effectFloors.size>0;m&&!this.decorWas&&(this.lastWake=t),this.decorWas=m;let b=this.effectFloors.size?this.decor(this.lowQuality?2*zg:zg):null;if(b!==null&&!this.effectTimer&&!document.hidden){let p=b;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=p/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.decorTimer||this.invalidate()},p)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33));let g=this.flowActive||this.solarActive||this.soundActive||this.poolActive;if(this.lowQuality){let p=c||g||h?this.decor(h?83:0,h?83:void 0):null;!f&&p!==null&&!this.decorTimer&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},p));return}!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},33)),!f&&h&&!this.fanTimer&&(this.fanTimer=setTimeout(()=>{this.fanTimer=void 0,this.invalidate()},50)),!f&&g&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},cS))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,o=Math.hypot(n,r)||1;for(let s of this.floors){let a=this.roomId!==null&&s.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;s.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/o+h[1]*r/o>=.25:a;!l&&f&&(c|=1<<u)}),s.mask.standing.value=l?0:65535,s.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new Y,r=this.houseView,o=[];for(let s of this.floors){let a=s.bbox;if(!(r&&s.o>.5&&a)){this.place(s.label,null);continue}let l=null,c=null,h=s.floor.elevation+s.y+s.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(b,h,g).project(this.camera);let p=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||p<l.x)&&(l={x:p,y:x}),(!c||p>c.x)&&(c={x:p,y:x})}s.label.hidden&&(s.label.hidden=!1),s.labelSize??={w:s.label.offsetWidth,h:s.label.offsetHeight};let u=s.labelSize.w,f=8+this.labelInset,d=l.x-u-14,m=l.y;d<f&&this.labelInset&&(d=c.x+14,m=c.y),o.push({fv:s,left:Math.max(f,Math.min(t-u-8,d)),y:m,h:s.labelSize.h})}o.sort((s,a)=>a.fv.rank-s.fv.rank);for(let s=1;s<o.length;s++){let a=o[s-1];o[s].y=Math.max(o[s].y,a.y+(a.h+o[s].h)/2+8)}for(let s of o)this.place(s.fv.label,`translate(${s.left}px, ${s.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((s,a)=>{let l=this.floorMap.get(s.floorId);if(this.roomId!==null&&s.room!==this.roomId||s.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(s.views==="house"||s.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new Y(s.p[0],s.p[1]+(l?.y??0)+(s.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),s.p[2]),h=this.camera.position.clone().sub(c),u=h.length();if(s.near!==void 0&&u>s.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=h.normalize().dot(new Y(s.n[0],s.n[1],s.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,m=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*s.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,m,f)}),this.updateDevicePins(t,e);for(let s of this.floors){let a=s.to<.99||s.o<.9||r||this.roomId!==null||this.otherFloor(s),l=s.floor.elevation+s.y+.05;for(let c of s.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new Y,r=this.houseView;for(let o of this.persons){let s=this.personPins.get(o.id),a=this.floorMap.get(o.floorId),l=this.figures.get(o.id);if(!s)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(s,null),l?.visible&&(l.visible=!1,this.invalidate());continue}let c=this.personAt.get(o.id);if(!c||c.floorId!==o.floorId)c={floorId:o.floorId,x:o.x,z:o.z};else{let f=o.x-c.x,d=o.z-c.z;Math.hypot(f,d)>.02?(c={floorId:o.floorId,x:c.x+f*.12,z:c.z+d*.12},this.labelsDirty=!0,this.invalidate()):c={floorId:o.floorId,x:o.x,z:o.z}}this.personAt.set(o.id,c);let h=a.floor.elevation+a.y;if(l){let f=Math.atan2(this.camera.position.x-c.x,this.camera.position.z-c.z);(!l.visible||l.position.x!==c.x||l.position.y!==h||l.position.z!==c.z||l.rotation.y!==f)&&(l.visible=!0,l.position.set(c.x,h,c.z),l.rotation.y=f,this.invalidate())}n.set(c.x,h+(l?1.85:.9),c.z).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(s,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let o of this.devices){let s=this.devicePins.get(o.id)?.el;if(!s)continue;let a=this.floorMap.get(o.floorId),l=o.id.startsWith("detect:")||o.id.startsWith("hh:")&&o.active;if(!a||r&&!l||a.to<.99||a.o<.9||o.pin===!1||this.otherFloor(a)){this.place(s,null);continue}if(n.set(o.x,a.floor.elevation+a.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(s,null);continue}let h=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(s)!==h&&(this.pinMode.set(s,h),s.classList.toggle("fp3d-dev-full",h==="full"),s.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(s,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let o=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:o.calls,triangles:o.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=_S(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function _S(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function MS(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(s,a,l,c,h)=>{e.strokeStyle=`rgba(55,224,255,${h})`,e.beginPath(),e.moveTo(s,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(s,a,l)=>{e.save(),e.beginPath(),e.rect(s*256,a*256,256,256),e.clip(),l(s*256,a*256),e.restore()};r(0,0,(s,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(s,c,s+256,c,.09);let h=s+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),r(1,0,(s,a)=>{for(let l=0;l<7;l++){let c=s+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),r(2,0,(s,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(s+c,a,s+c,a+256,.1),n(s,a+c,s+256,a+c,.1)}}),r(1,1,(s,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(s,c,s+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(s+u+.75,c,s+u+.75,c+256/2,.09)}}),r(2,1,(s,a)=>{n(s+.75,a,s+.75,a+256,.08),n(s,a+.75,s+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(s+l*97%256,a+(l*61+l*l%37)%256,2,2)});let o=new vn(t);return o.flipY=!1,o.wrapS=Mn,o.wrapT=Mn,o.anisotropy=4,o.colorSpace=Ne,o}function wS(i){let t=new Xt({map:i,transparent:!0,blending:Ee,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function SS(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new vn(i);return e.wrapS=fr,e.wrapT=fr,e.colorSpace=Ne,e}function na(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}${i.width?`~${i.width}`:""}`}function TS(i){let t=new Xt({vertexColors:!0,transparent:!0,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`)},t.customProgramCacheKey=()=>"fp3d-pipe-line",t}function ES(i){let t=new Xt({vertexColors:!0,transparent:!0,blending:Ee,depthWrite:!1,side:ie});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = (diffuseColor.rgb * 0.3 + fp3dDotColor * 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function Vg(i,t){let e=i.rooms.map((r,o)=>o),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,o]of t){let s=i.rooms.findIndex(h=>h.id===r),a=i.rooms.findIndex(h=>h.id===o);if(s<0||a<0)continue;let l=n(s),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,o)=>n(o))}function AS(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new vn(t);return r.colorSpace=Ne,r}function RS(){let t=If,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let s=0;s<=t;s++){let a=Math.round(s/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let o=new vn(e);return o.anisotropy=4,o.colorSpace=Ne,o}function JC(i,t){return new Lf(i,t)}function Hg(i,t){return Math.max(.5,i-Math.max(.25,t))+.11}function Wg(i,t,e,n,r,o){let a=Math.max(.22,r);for(let l=0;l<4;l++){let c=o+l*Math.PI/2,h=Math.cos(c),u=Math.sin(c),d=[[.12,-.045],[a,-.065],[a,.065],[.12,.045]].map(([m,b])=>[t+m*h-b*u,n+m*u+b*h]);Pe(i,d,e-.006,e+.006,dS,pS,{aoFrom:0,bottom:!0})}}function Pf(i,t,e,n,r=!0){let[o,s,a]=t.size??ia[t.lamp],l=t.base??0,c=(t.rotation??0)*ee,h=Math.cos(c),u=Math.sin(c),f=(g,p)=>[t.x+g*h-p*u,t.z+g*u+p*h],d=(g,p,x,y,v,M=14)=>{let w=[];for(let T=0;T<M;T++){let _=T/M*Math.PI*2;w.push([t.x+Math.cos(_)*g,t.z+Math.sin(_)*g])}Pe(i,w,p,x,y,v,{aoFrom:0,bottom:!0})},m=(g,p,x,y,v,M,w,T=w)=>Pe(i,[f(g,x),f(p,x),f(p,y),f(g,y)],v,M,w,T,{aoFrom:0,bottom:!0}),b=Math.max(.05,Math.min(o,s)/2);switch(t.lamp){case"ceiling":d(b*.25,e-.04,e,re,re,8),d(b,e-Math.max(.04,a)-.035,e-.04,n,n);break;case"pendant":{let g=Math.max(.4,e-a);d(.06,e-.02,e,re,re,8);let p=t.variant==="globe"?g+2*b:t.variant==="drum"?g+.24:g+.2;if(d(.008,p,e-.02,re,re,5),t.variant==="globe")for(let y=0;y<7;y++){let v=Math.PI*(y/7),M=Math.PI*((y+1)/7);d(b*Math.max(.2,Math.sin((v+M)/2)),g+b-b*Math.cos(v),g+b-b*Math.cos(M),n,n,14)}else if(t.variant==="cone")for(let y=0;y<4;y++)d(b*(.25+.75*(4-y)/4),g+.06*y,g+.06*(y+1),n,n,16);else t.variant==="drum"?d(b,g,g+.24,n,n,18):(d(b*.35,g+.14,g+.2,n,n,12),d(b,g,g+.14,n,n,16));break}case"fan":{let g=Math.max(.5,e-Math.max(.25,a));d(.06,e-.03,e,re,re,10),d(.012,g+.16,e-.03,re,re,6),d(.13,g+.07,g+.16,re,re,16),d(.11,g,g+.07,n,n,16),r&&Wg(i,t.x,Hg(e,a),t.z,o/2,c);break}case"downlight":d(b,e-.012,e,re,re,12),d(b*.7,e-.02,e-.012,n,n,12);break;case"spot":d(b*.6,e-.02,e,re,re,10),d(b,e-Math.max(.06,a),e-.02,re,re,12),d(b*.8,e-Math.max(.06,a)-.008,e-Math.max(.06,a),n,n,12);break;case"panel":m(-o/2,o/2,-s/2,s/2,e-Math.max(.015,a),e,re,re),m(-o/2+.02,o/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,a)-.004,e-Math.max(.015,a),n);break;case"uplight":d(Math.max(.1,b*.6),l,l+.03,re,re),d(.014,l+.03,l+a-.12,re,re,6),d(b,l+a-.14,l+a-.02,re,re),d(b*.92,l+a-.02,l+a,n,n);break;case"bollard":d(b,l,l+a-.14,re,re,10),d(b*.9,l+a-.14,l+a-.03,n,n,10),d(b*1.1,l+a-.03,l+a,re,re,10);break;case"garden":d(.012,l,l+a-.08,re,re,5),d(b,l+a-.08,l+a-.01,re,re,10),d(b*.8,l+a-.01,l+a,n,n,10);break;case"floor":d(Math.max(.1,b*.7),l,l+.03,re,re),d(.014,l+.03,l+a-.28,re,re,6),d(b,l+a-.3,l+a,n,n);break;case"table":d(Math.max(.05,b*.55),l,l+.03,re,re),d(.012,l+.03,l+a-.16,re,re,6),d(b,l+a-.18,l+a,n,n);break;case"wall":{let g=t.base??pc;m(-o/2+.03,o/2-.03,-s/2,-s/2+.02,g,g+a,re),m(-o/2,o/2,-s/2+.02,s/2,g+a*.15,g+a*.85,n);break}case"strip":{let g=Math.max(.02,a),p=t.base!=null?t.base+g:e-.04;if(!t.roll&&!t.upright&&!t.rise){m(-o/2,o/2,-s/2,s/2,p-g,p,n);break}let x=(t.roll??0)*ee,y=Math.cos(x),v=Math.sin(x),M=t.upright?l+o/2:p-g/2,w=(t.upright?0:t.rise??0)*ee,T=(P,U,L)=>{let R=P,C=U*y-L*v,F=U*v+L*y;return w&&([R,C]=[R*Math.cos(w)-C*Math.sin(w),R*Math.sin(w)+C*Math.cos(w)]),t.upright&&([R,C]=[-C,R]),[t.x+R*h-F*u,M+C,t.z+R*u+F*h]},_=[T(-o/2,-g/2,-s/2),T(o/2,-g/2,-s/2),T(o/2,-g/2,s/2),T(-o/2,-g/2,s/2),T(-o/2,g/2,-s/2),T(o/2,g/2,-s/2),T(o/2,g/2,s/2),T(-o/2,g/2,s/2)],A=new j(n),E=[t.x,M,t.z],S=(P,U,L,R)=>{let[C,F,D]=[_[P],_[U],_[L]],N=[(F[1]-C[1])*(D[2]-C[2])-(F[2]-C[2])*(D[1]-C[1]),(F[2]-C[2])*(D[0]-C[0])-(F[0]-C[0])*(D[2]-C[2]),(F[0]-C[0])*(D[1]-C[1])-(F[1]-C[1])*(D[0]-C[0])],k=[C[0]-E[0],C[1]-E[1],C[2]-E[2]],V=N[0]*k[0]+N[1]*k[1]+N[2]*k[2]<0,[X,z,K,J]=V?[_[R],_[L],_[U],_[P]]:[_[P],_[U],_[L],_[R]];i.tri(X,z,K,A,A,A),i.tri(X,K,J,A,A,A)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{_f as FloorMap,Lf as FloorplanViewer,Mf as WalkCamera,JC as createViewer,OC as funLib,rS as furnitureFront,iS as furniturePreview,yS as isLowEnd,Wg as pushFanBlades,Pf as pushLampModel};
