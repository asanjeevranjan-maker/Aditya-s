(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const js="160",So=0,hr=1,Eo=2,Fa=1,Oa=2,Ze=3,dn=0,Te=1,$e=2,cn=0,$n=1,ur=2,dr=3,fr=4,yo=5,yn=100,To=101,bo=102,pr=103,mr=104,Ao=200,wo=201,Ro=202,Co=203,Gs=204,Hs=205,Lo=206,Po=207,Do=208,Uo=209,Io=210,No=211,Fo=212,Oo=213,Bo=214,zo=0,Go=1,Ho=2,Yi=3,Vo=4,ko=5,Wo=6,Xo=7,Zs=0,qo=1,Yo=2,hn=0,Ko=1,jo=2,Zo=3,$o=4,Jo=5,Qo=6,Ba=300,Qn=301,ti=302,Vs=303,ks=304,Qi=306,mi=1e3,ze=1001,Ws=1002,_e=1003,gr=1004,os=1005,De=1006,tl=1007,gi=1008,el=1008,un=1009,nl=1010,il=1011,$s=1012,za=1013,on=1014,ln=1015,_i=1016,Ga=1017,Ha=1018,bn=1020,sl=1021,Ge=1023,rl=1024,al=1025,An=1026,ei=1027,ol=1028,Va=1029,ll=1030,ka=1031,Wa=1033,ls=33776,cs=33777,hs=33778,us=33779,_r=35840,vr=35841,xr=35842,Mr=35843,Xa=36196,Sr=37492,Er=37496,yr=37808,Tr=37809,br=37810,Ar=37811,wr=37812,Rr=37813,Cr=37814,Lr=37815,Pr=37816,Dr=37817,Ur=37818,Ir=37819,Nr=37820,Fr=37821,ds=36492,Or=36494,Br=36495,cl=36283,zr=36284,Gr=36285,Hr=36286,qa=3e3,wn=3001,hl=3200,ul=3201,Js=0,dl=1,Ie="",fe="srgb",tn="srgb-linear",Qs="display-p3",ts="display-p3-linear",Ki="linear",Zt="srgb",ji="rec709",Zi="p3",Dn=7680,Vr=519,fl=512,pl=513,ml=514,Ya=515,gl=516,_l=517,vl=518,xl=519,kr=35044,Wr="300 es",Xs=1035,Je=2e3,$i=2001;class ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fs=Math.PI/180,qs=180/Math.PI;function vi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(me[i&255]+me[i>>8&255]+me[i>>16&255]+me[i>>24&255]+"-"+me[t&255]+me[t>>8&255]+"-"+me[t>>16&15|64]+me[t>>24&255]+"-"+me[e&63|128]+me[e>>8&255]+"-"+me[e>>16&255]+me[e>>24&255]+me[n&255]+me[n>>8&255]+me[n>>16&255]+me[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function Ml(i,t){return(i%t+t)%t}function ps(i,t,e){return(1-e)*i+e*t}function Xr(i){return(i&i-1)===0&&i!==0}function Ys(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function oi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,s,r,o,a,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],p=n[2],m=n[5],M=n[8],x=s[0],f=s[3],h=s[6],A=s[1],T=s[4],w=s[7],D=s[2],v=s[5],b=s[8];return r[0]=o*x+a*A+l*D,r[3]=o*f+a*T+l*v,r[6]=o*h+a*w+l*b,r[1]=c*x+u*A+d*D,r[4]=c*f+u*T+d*v,r[7]=c*h+u*w+d*b,r[2]=p*x+m*A+M*D,r[5]=p*f+m*T+M*v,r[8]=p*h+m*w+M*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,p=a*l-u*r,m=c*r-o*l,M=e*d+n*p+s*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/M;return t[0]=d*x,t[1]=(s*c-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=p*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=m*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ms.makeScale(t,e)),this}rotate(t){return this.premultiply(ms.makeRotation(-t)),this}translate(t,e){return this.premultiply(ms.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ms=new Bt;function Ka(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ji(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sl(){const i=Ji("canvas");return i.style.display="block",i}const qr={};function pi(i){i in qr||(qr[i]=!0,console.warn(i))}const Yr=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kr=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yi={[tn]:{transfer:Ki,primaries:ji,toReference:i=>i,fromReference:i=>i},[fe]:{transfer:Zt,primaries:ji,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ts]:{transfer:Ki,primaries:Zi,toReference:i=>i.applyMatrix3(Kr),fromReference:i=>i.applyMatrix3(Yr)},[Qs]:{transfer:Zt,primaries:Zi,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Kr),fromReference:i=>i.applyMatrix3(Yr).convertLinearToSRGB()}},El=new Set([tn,ts]),qt={enabled:!0,_workingColorSpace:tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!El.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=yi[t].toReference,s=yi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return yi[i].primaries},getTransfer:function(i){return i===Ie?Ki:yi[i].transfer}};function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Un;class ja{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Un===void 0&&(Un=Ji("canvas")),Un.width=t.width,Un.height=t.height;const n=Un.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Un}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ji("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Jn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yl=0;class Za{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yl++}),this.uuid=vi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_s(s[o].image)):r.push(_s(s[o]))}else r=_s(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function _s(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tl=0;class be extends ii{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=ze,s=ze,r=De,o=gi,a=Ge,l=un,c=be.DEFAULT_ANISOTROPY,u=Ie){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tl++}),this.uuid=vi(),this.name="",this.source=new Za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===wn?fe:Ie),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ba)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mi:t.x=t.x-Math.floor(t.x);break;case ze:t.x=t.x<0?0:1;break;case Ws:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mi:t.y=t.y-Math.floor(t.y);break;case ze:t.y=t.y<0?0:1;break;case Ws:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fe?wn:qa}set encoding(t){pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===wn?fe:Ie}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=Ba;be.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],p=l[1],m=l[5],M=l[9],x=l[2],f=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-x)<.01&&Math.abs(M-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+x)<.1&&Math.abs(M+f)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,w=(m+1)/2,D=(h+1)/2,v=(u+p)/4,b=(d+x)/4,P=(M+f)/4;return T>w&&T>D?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=v/n,r=b/n):w>D?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=v/s,r=P/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=b/r,s=P/r),this.set(n,s,r,e),this}let A=Math.sqrt((f-M)*(f-M)+(d-x)*(d-x)+(p-u)*(p-u));return Math.abs(A)<.001&&(A=1),this.x=(f-M)/A,this.y=(d-x)/A,this.z=(p-u)/A,this.w=Math.acos((c+m+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bl extends ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(pi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===wn?fe:Ie),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Za(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends bl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class $a extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_e,this.minFilter=_e,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Al extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_e,this.minFilter=_e,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const p=r[o+0],m=r[o+1],M=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=M,t[e+3]=x;return}if(d!==x||l!==p||c!==m||u!==M){let f=1-a;const h=l*p+c*m+u*M+d*x,A=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const D=Math.sqrt(T),v=Math.atan2(D,h*A);f=Math.sin(f*v)/D,a=Math.sin(a*v)/D}const w=a*A;if(l=l*f+p*w,c=c*f+m*w,u=u*f+M*w,d=d*f+x*w,f===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=D,c*=D,u*=D,d*=D}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],p=r[o+1],m=r[o+2],M=r[o+3];return t[e]=a*M+u*d+l*m-c*p,t[e+1]=l*M+u*p+c*d-a*m,t[e+2]=c*M+u*m+a*p-l*d,t[e+3]=u*M-a*d-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),p=l(n/2),m=l(s/2),M=l(r/2);switch(o){case"XYZ":this._x=p*u*d+c*m*M,this._y=c*m*d-p*u*M,this._z=c*u*M+p*m*d,this._w=c*u*d-p*m*M;break;case"YXZ":this._x=p*u*d+c*m*M,this._y=c*m*d-p*u*M,this._z=c*u*M-p*m*d,this._w=c*u*d+p*m*M;break;case"ZXY":this._x=p*u*d-c*m*M,this._y=c*m*d+p*u*M,this._z=c*u*M+p*m*d,this._w=c*u*d-p*m*M;break;case"ZYX":this._x=p*u*d-c*m*M,this._y=c*m*d+p*u*M,this._z=c*u*M-p*m*d,this._w=c*u*d+p*m*M;break;case"YZX":this._x=p*u*d+c*m*M,this._y=c*m*d+p*u*M,this._z=c*u*M-p*m*d,this._w=c*u*d-p*m*M;break;case"XZY":this._x=p*u*d-c*m*M,this._y=c*m*d-p*u*M,this._z=c*u*M+p*m*d,this._w=c*u*d+p*m*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],p=n+a+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=o*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vs.copy(this).projectOnVector(t),this.sub(vs)}reflect(t){return this.sub(vs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vs=new N,jr=new xi;class fn{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ne.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ne.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ne.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ne):Ne.fromBufferAttribute(r,o),Ne.applyMatrix4(t.matrixWorld),this.expandByPoint(Ne);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ti.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ti.copy(n.boundingBox)),Ti.applyMatrix4(t.matrixWorld),this.union(Ti)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ne),Ne.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(li),bi.subVectors(this.max,li),In.subVectors(t.a,li),Nn.subVectors(t.b,li),Fn.subVectors(t.c,li),en.subVectors(Nn,In),nn.subVectors(Fn,Nn),gn.subVectors(In,Fn);let e=[0,-en.z,en.y,0,-nn.z,nn.y,0,-gn.z,gn.y,en.z,0,-en.x,nn.z,0,-nn.x,gn.z,0,-gn.x,-en.y,en.x,0,-nn.y,nn.x,0,-gn.y,gn.x,0];return!xs(e,In,Nn,Fn,bi)||(e=[1,0,0,0,1,0,0,0,1],!xs(e,In,Nn,Fn,bi))?!1:(Ai.crossVectors(en,nn),e=[Ai.x,Ai.y,Ai.z],xs(e,In,Nn,Fn,bi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ne).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ne).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xe=[new N,new N,new N,new N,new N,new N,new N,new N],Ne=new N,Ti=new fn,In=new N,Nn=new N,Fn=new N,en=new N,nn=new N,gn=new N,li=new N,bi=new N,Ai=new N,_n=new N;function xs(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_n.fromArray(i,r);const a=s.x*Math.abs(_n.x)+s.y*Math.abs(_n.y)+s.z*Math.abs(_n.z),l=t.dot(_n),c=e.dot(_n),u=n.dot(_n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const wl=new fn,ci=new N,Ms=new N;class Mi{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ci.subVectors(t,this.center);const e=ci.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ci,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ms.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ci.copy(t.center).add(Ms)),this.expandByPoint(ci.copy(t.center).sub(Ms))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qe=new N,Ss=new N,wi=new N,sn=new N,Es=new N,Ri=new N,ys=new N;class Rl{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qe.copy(this.origin).addScaledVector(this.direction,e),qe.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ss.copy(t).add(e).multiplyScalar(.5),wi.copy(e).sub(t).normalize(),sn.copy(this.origin).sub(Ss);const r=t.distanceTo(e)*.5,o=-this.direction.dot(wi),a=sn.dot(this.direction),l=-sn.dot(wi),c=sn.lengthSq(),u=Math.abs(1-o*o);let d,p,m,M;if(u>0)if(d=o*l-a,p=o*a-l,M=r*u,d>=0)if(p>=-M)if(p<=M){const x=1/u;d*=x,p*=x,m=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p<=-M?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c):p<=M?(d=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ss).addScaledVector(wi,p),m}intersectSphere(t,e){qe.subVectors(t.center,this.origin);const n=qe.dot(this.direction),s=qe.dot(qe)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),u>=0?(r=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qe)!==null}intersectTriangle(t,e,n,s,r){Es.subVectors(e,t),Ri.subVectors(n,t),ys.crossVectors(Es,Ri);let o=this.direction.dot(ys),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sn.subVectors(this.origin,t);const l=a*this.direction.dot(Ri.crossVectors(sn,Ri));if(l<0)return null;const c=a*this.direction.dot(Es.cross(sn));if(c<0||l+c>o)return null;const u=-a*sn.dot(ys);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,s,r,o,a,l,c,u,d,p,m,M,x,f){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,d,p,m,M,x,f)}set(t,e,n,s,r,o,a,l,c,u,d,p,m,M,x,f){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=p,h[3]=m,h[7]=M,h[11]=x,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/On.setFromMatrixColumn(t,0).length(),r=1/On.setFromMatrixColumn(t,1).length(),o=1/On.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const p=o*u,m=o*d,M=a*u,x=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+M*c,e[5]=p-x*c,e[9]=-a*l,e[2]=x-p*c,e[6]=M+m*c,e[10]=o*l}else if(t.order==="YXZ"){const p=l*u,m=l*d,M=c*u,x=c*d;e[0]=p+x*a,e[4]=M*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=m*a-M,e[6]=x+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*u,m=l*d,M=c*u,x=c*d;e[0]=p-x*a,e[4]=-o*d,e[8]=M+m*a,e[1]=m+M*a,e[5]=o*u,e[9]=x-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*u,m=o*d,M=a*u,x=a*d;e[0]=l*u,e[4]=M*c-m,e[8]=p*c+x,e[1]=l*d,e[5]=x*c+p,e[9]=m*c-M,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,m=o*c,M=a*l,x=a*c;e[0]=l*u,e[4]=x-p*d,e[8]=M*d+m,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*d+M,e[10]=p-x*d}else if(t.order==="XZY"){const p=o*l,m=o*c,M=a*l,x=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=p*d+x,e[5]=o*u,e[9]=m*d-M,e[2]=M*d-m,e[6]=a*u,e[10]=x*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cl,t,Ll)}lookAt(t,e,n){const s=this.elements;return we.subVectors(t,e),we.lengthSq()===0&&(we.z=1),we.normalize(),rn.crossVectors(n,we),rn.lengthSq()===0&&(Math.abs(n.z)===1?we.x+=1e-4:we.z+=1e-4,we.normalize(),rn.crossVectors(n,we)),rn.normalize(),Ci.crossVectors(we,rn),s[0]=rn.x,s[4]=Ci.x,s[8]=we.x,s[1]=rn.y,s[5]=Ci.y,s[9]=we.y,s[2]=rn.z,s[6]=Ci.z,s[10]=we.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],p=n[9],m=n[13],M=n[2],x=n[6],f=n[10],h=n[14],A=n[3],T=n[7],w=n[11],D=n[15],v=s[0],b=s[4],P=s[8],g=s[12],E=s[1],V=s[5],W=s[9],it=s[13],C=s[2],z=s[6],H=s[10],q=s[14],k=s[3],X=s[7],Y=s[11],Q=s[15];return r[0]=o*v+a*E+l*C+c*k,r[4]=o*b+a*V+l*z+c*X,r[8]=o*P+a*W+l*H+c*Y,r[12]=o*g+a*it+l*q+c*Q,r[1]=u*v+d*E+p*C+m*k,r[5]=u*b+d*V+p*z+m*X,r[9]=u*P+d*W+p*H+m*Y,r[13]=u*g+d*it+p*q+m*Q,r[2]=M*v+x*E+f*C+h*k,r[6]=M*b+x*V+f*z+h*X,r[10]=M*P+x*W+f*H+h*Y,r[14]=M*g+x*it+f*q+h*Q,r[3]=A*v+T*E+w*C+D*k,r[7]=A*b+T*V+w*z+D*X,r[11]=A*P+T*W+w*H+D*Y,r[15]=A*g+T*it+w*q+D*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],p=t[10],m=t[14],M=t[3],x=t[7],f=t[11],h=t[15];return M*(+r*l*d-s*c*d-r*a*p+n*c*p+s*a*m-n*l*m)+x*(+e*l*m-e*c*p+r*o*p-s*o*m+s*c*u-r*l*u)+f*(+e*c*d-e*a*m-r*o*d+n*o*m+r*a*u-n*c*u)+h*(-s*a*u-e*l*d+e*a*p+s*o*d-n*o*p+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],p=t[10],m=t[11],M=t[12],x=t[13],f=t[14],h=t[15],A=d*f*c-x*p*c+x*l*m-a*f*m-d*l*h+a*p*h,T=M*p*c-u*f*c-M*l*m+o*f*m+u*l*h-o*p*h,w=u*x*c-M*d*c+M*a*m-o*x*m-u*a*h+o*d*h,D=M*d*l-u*x*l-M*a*p+o*x*p+u*a*f-o*d*f,v=e*A+n*T+s*w+r*D;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/v;return t[0]=A*b,t[1]=(x*p*r-d*f*r-x*s*m+n*f*m+d*s*h-n*p*h)*b,t[2]=(a*f*r-x*l*r+x*s*c-n*f*c-a*s*h+n*l*h)*b,t[3]=(d*l*r-a*p*r-d*s*c+n*p*c+a*s*m-n*l*m)*b,t[4]=T*b,t[5]=(u*f*r-M*p*r+M*s*m-e*f*m-u*s*h+e*p*h)*b,t[6]=(M*l*r-o*f*r-M*s*c+e*f*c+o*s*h-e*l*h)*b,t[7]=(o*p*r-u*l*r+u*s*c-e*p*c-o*s*m+e*l*m)*b,t[8]=w*b,t[9]=(M*d*r-u*x*r-M*n*m+e*x*m+u*n*h-e*d*h)*b,t[10]=(o*x*r-M*a*r+M*n*c-e*x*c-o*n*h+e*a*h)*b,t[11]=(u*a*r-o*d*r-u*n*c+e*d*c+o*n*m-e*a*m)*b,t[12]=D*b,t[13]=(u*x*s-M*d*s+M*n*p-e*x*p-u*n*f+e*d*f)*b,t[14]=(M*a*s-o*x*s-M*n*l+e*x*l+o*n*f-e*a*f)*b,t[15]=(o*d*s-u*a*s+u*n*l-e*d*l-o*n*p+e*a*p)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,p=r*c,m=r*u,M=r*d,x=o*u,f=o*d,h=a*d,A=l*c,T=l*u,w=l*d,D=n.x,v=n.y,b=n.z;return s[0]=(1-(x+h))*D,s[1]=(m+w)*D,s[2]=(M-T)*D,s[3]=0,s[4]=(m-w)*v,s[5]=(1-(p+h))*v,s[6]=(f+A)*v,s[7]=0,s[8]=(M+T)*b,s[9]=(f-A)*b,s[10]=(1-(p+x))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=On.set(s[0],s[1],s[2]).length();const o=On.set(s[4],s[5],s[6]).length(),a=On.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Fe.copy(this);const c=1/r,u=1/o,d=1/a;return Fe.elements[0]*=c,Fe.elements[1]*=c,Fe.elements[2]*=c,Fe.elements[4]*=u,Fe.elements[5]*=u,Fe.elements[6]*=u,Fe.elements[8]*=d,Fe.elements[9]*=d,Fe.elements[10]*=d,e.setFromRotationMatrix(Fe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Je){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let m,M;if(a===Je)m=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===$i)m=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Je){const l=this.elements,c=1/(e-t),u=1/(n-s),d=1/(o-r),p=(e+t)*c,m=(n+s)*u;let M,x;if(a===Je)M=(o+r)*d,x=-2*d;else if(a===$i)M=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const On=new N,Fe=new ne,Cl=new N(0,0,0),Ll=new N(1,1,1),rn=new N,Ci=new N,we=new N,Zr=new ne,$r=new xi;class es{constructor(t=0,e=0,n=0,s=es.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $r.setFromEuler(this),this.setFromQuaternion($r,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}es.DEFAULT_ORDER="XYZ";class Ja{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pl=0;const Jr=new N,Bn=new xi,Ye=new ne,Li=new N,hi=new N,Dl=new N,Ul=new xi,Qr=new N(1,0,0),ta=new N(0,1,0),ea=new N(0,0,1),Il={type:"added"},Nl={type:"removed"};class de extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pl++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new N,e=new es,n=new xi,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Bt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bn.setFromAxisAngle(t,e),this.quaternion.multiply(Bn),this}rotateOnWorldAxis(t,e){return Bn.setFromAxisAngle(t,e),this.quaternion.premultiply(Bn),this}rotateX(t){return this.rotateOnAxis(Qr,t)}rotateY(t){return this.rotateOnAxis(ta,t)}rotateZ(t){return this.rotateOnAxis(ea,t)}translateOnAxis(t,e){return Jr.copy(t).applyQuaternion(this.quaternion),this.position.add(Jr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qr,t)}translateY(t){return this.translateOnAxis(ta,t)}translateZ(t){return this.translateOnAxis(ea,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ye.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Li.copy(t):Li.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ye.lookAt(hi,Li,this.up):Ye.lookAt(Li,hi,this.up),this.quaternion.setFromRotationMatrix(Ye),s&&(Ye.extractRotation(s.matrixWorld),Bn.setFromRotationMatrix(Ye),this.quaternion.premultiply(Bn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Il)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ye.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ye.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ye),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,t,Dl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,Ul,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),p=o(t.skeletons),m=o(t.animations),M=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),M.length>0&&(n.nodes=M)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}de.DEFAULT_UP=new N(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oe=new N,Ke=new N,Ts=new N,je=new N,zn=new N,Gn=new N,na=new N,bs=new N,As=new N,ws=new N;let Pi=!1;class Be{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Oe.subVectors(t,e),s.cross(Oe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Oe.subVectors(s,e),Ke.subVectors(n,e),Ts.subVectors(t,e);const o=Oe.dot(Oe),a=Oe.dot(Ke),l=Oe.dot(Ts),c=Ke.dot(Ke),u=Ke.dot(Ts),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const p=1/d,m=(c*l-a*u)*p,M=(o*u-a*l)*p;return r.set(1-m-M,M,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,je)===null?!1:je.x>=0&&je.y>=0&&je.x+je.y<=1}static getUV(t,e,n,s,r,o,a,l){return Pi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pi=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,je)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,je.x),l.addScaledVector(o,je.y),l.addScaledVector(a,je.z),l)}static isFrontFacing(t,e,n,s){return Oe.subVectors(n,e),Ke.subVectors(t,e),Oe.cross(Ke).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oe.subVectors(this.c,this.b),Ke.subVectors(this.a,this.b),Oe.cross(Ke).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Be.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Be.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Pi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pi=!0),Be.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return Be.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Be.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Be.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;zn.subVectors(s,n),Gn.subVectors(r,n),bs.subVectors(t,n);const l=zn.dot(bs),c=Gn.dot(bs);if(l<=0&&c<=0)return e.copy(n);As.subVectors(t,s);const u=zn.dot(As),d=Gn.dot(As);if(u>=0&&d<=u)return e.copy(s);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(zn,o);ws.subVectors(t,r);const m=zn.dot(ws),M=Gn.dot(ws);if(M>=0&&m<=M)return e.copy(r);const x=m*c-l*M;if(x<=0&&c>=0&&M<=0)return a=c/(c-M),e.copy(n).addScaledVector(Gn,a);const f=u*M-m*d;if(f<=0&&d-u>=0&&m-M>=0)return na.subVectors(r,s),a=(d-u)/(d-u+(m-M)),e.copy(s).addScaledVector(na,a);const h=1/(f+x+p);return o=x*h,a=p*h,e.copy(n).addScaledVector(zn,o).addScaledVector(Gn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},Di={h:0,s:0,l:0};function Rs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Ml(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Rs(o,r,t+1/3),this.g=Rs(o,r,t),this.b=Rs(o,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){const n=Qa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return qt.fromWorkingColorSpace(ge.copy(this),t),Math.round(ye(ge.r*255,0,255))*65536+Math.round(ye(ge.g*255,0,255))*256+Math.round(ye(ge.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(ge.copy(this),e);const n=ge.r,s=ge.g,r=ge.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(ge.copy(this),e),t.r=ge.r,t.g=ge.g,t.b=ge.b,t}getStyle(t=fe){qt.fromWorkingColorSpace(ge.copy(this),t);const e=ge.r,n=ge.g,s=ge.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(an),this.setHSL(an.h+t,an.s+e,an.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(an),t.getHSL(Di);const n=ps(an.h,Di.h,e),s=ps(an.s,Di.s,e),r=ps(an.l,Di.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ge=new zt;zt.NAMES=Qa;let Fl=0;class si extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=$n,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gs,this.blendDst=Hs,this.blendEquation=yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dn,this.stencilZFail=Dn,this.stencilZPass=Dn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$n&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gs&&(n.blendSrc=this.blendSrc),this.blendDst!==Hs&&(n.blendDst=this.blendDst),this.blendEquation!==yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Dn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Dn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qe extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new N,Ui=new kt;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ui.fromBufferAttribute(this,e),Ui.applyMatrix3(t),this.setXY(e,Ui.x,Ui.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kr&&(t.usage=this.usage),t}}class to extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class eo extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Rn extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ol=0;const Pe=new ne,Cs=new de,Hn=new N,Re=new fn,ui=new fn,he=new N;class Pn extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ka(t)?eo:to)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pe.makeRotationFromQuaternion(t),this.applyMatrix4(Pe),this}rotateX(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this}rotateY(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this}rotateZ(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this}translate(t,e,n){return Pe.makeTranslation(t,e,n),this.applyMatrix4(Pe),this}scale(t,e,n){return Pe.makeScale(t,e,n),this.applyMatrix4(Pe),this}lookAt(t){return Cs.lookAt(t),Cs.updateMatrix(),this.applyMatrix4(Cs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hn).negate(),this.translate(Hn.x,Hn.y,Hn.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Rn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Re.setFromBufferAttribute(r),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ui.setFromBufferAttribute(a),this.morphTargetsRelative?(he.addVectors(Re.min,ui.min),Re.expandByPoint(he),he.addVectors(Re.max,ui.max),Re.expandByPoint(he)):(Re.expandByPoint(ui.min),Re.expandByPoint(ui.max))}Re.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)he.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(he));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)he.fromBufferAttribute(a,c),l&&(Hn.fromBufferAttribute(t,c),he.add(Hn)),s=Math.max(s,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<a;E++)c[E]=new N,u[E]=new N;const d=new N,p=new N,m=new N,M=new kt,x=new kt,f=new kt,h=new N,A=new N;function T(E,V,W){d.fromArray(s,E*3),p.fromArray(s,V*3),m.fromArray(s,W*3),M.fromArray(o,E*2),x.fromArray(o,V*2),f.fromArray(o,W*2),p.sub(d),m.sub(d),x.sub(M),f.sub(M);const it=1/(x.x*f.y-f.x*x.y);isFinite(it)&&(h.copy(p).multiplyScalar(f.y).addScaledVector(m,-x.y).multiplyScalar(it),A.copy(m).multiplyScalar(x.x).addScaledVector(p,-f.x).multiplyScalar(it),c[E].add(h),c[V].add(h),c[W].add(h),u[E].add(A),u[V].add(A),u[W].add(A))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let E=0,V=w.length;E<V;++E){const W=w[E],it=W.start,C=W.count;for(let z=it,H=it+C;z<H;z+=3)T(n[z+0],n[z+1],n[z+2])}const D=new N,v=new N,b=new N,P=new N;function g(E){b.fromArray(r,E*3),P.copy(b);const V=c[E];D.copy(V),D.sub(b.multiplyScalar(b.dot(V))).normalize(),v.crossVectors(P,V);const it=v.dot(u[E])<0?-1:1;l[E*4]=D.x,l[E*4+1]=D.y,l[E*4+2]=D.z,l[E*4+3]=it}for(let E=0,V=w.length;E<V;++E){const W=w[E],it=W.start,C=W.count;for(let z=it,H=it+C;z<H;z+=3)g(n[z+0]),g(n[z+1]),g(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,d=new N;if(t)for(let p=0,m=t.count;p<m;p+=3){const M=t.getX(p+0),x=t.getX(p+1),f=t.getX(p+2);s.fromBufferAttribute(e,M),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,f),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,M),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(M,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,p=new c.constructor(l.length*u);let m=0,M=0;for(let x=0,f=l.length;x<f;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let h=0;h<u;h++)p[M++]=c[m++]}return new He(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const p=c[u],m=t(p,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ia=new ne,vn=new Rl,Ii=new Mi,sa=new N,Vn=new N,kn=new N,Wn=new N,Ls=new N,Ni=new N,Fi=new kt,Oi=new kt,Bi=new kt,ra=new N,aa=new N,oa=new N,zi=new N,Gi=new N;class bt extends de{constructor(t=new Pn,e=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ni.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Ls.fromBufferAttribute(d,t),o?Ni.addScaledVector(Ls,u):Ni.addScaledVector(Ls.sub(e),u))}e.add(Ni)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ii.copy(n.boundingSphere),Ii.applyMatrix4(r),vn.copy(t.ray).recast(t.near),!(Ii.containsPoint(vn.origin)===!1&&(vn.intersectSphere(Ii,sa)===null||vn.origin.distanceToSquared(sa)>(t.far-t.near)**2))&&(ia.copy(r).invert(),vn.copy(t.ray).applyMatrix4(ia),!(n.boundingBox!==null&&vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,x=p.length;M<x;M++){const f=p[M],h=o[f.materialIndex],A=Math.max(f.start,m.start),T=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let w=A,D=T;w<D;w+=3){const v=a.getX(w),b=a.getX(w+1),P=a.getX(w+2);s=Hi(this,h,t,n,c,u,d,v,b,P),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const M=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=M,h=x;f<h;f+=3){const A=a.getX(f),T=a.getX(f+1),w=a.getX(f+2);s=Hi(this,o,t,n,c,u,d,A,T,w),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let M=0,x=p.length;M<x;M++){const f=p[M],h=o[f.materialIndex],A=Math.max(f.start,m.start),T=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let w=A,D=T;w<D;w+=3){const v=w,b=w+1,P=w+2;s=Hi(this,h,t,n,c,u,d,v,b,P),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const M=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=M,h=x;f<h;f+=3){const A=f,T=f+1,w=f+2;s=Hi(this,o,t,n,c,u,d,A,T,w),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function Bl(i,t,e,n,s,r,o,a){let l;if(t.side===Te?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===dn,a),l===null)return null;Gi.copy(a),Gi.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Gi);return c<e.near||c>e.far?null:{distance:c,point:Gi.clone(),object:i}}function Hi(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Vn),i.getVertexPosition(l,kn),i.getVertexPosition(c,Wn);const u=Bl(i,t,e,n,Vn,kn,Wn,zi);if(u){s&&(Fi.fromBufferAttribute(s,a),Oi.fromBufferAttribute(s,l),Bi.fromBufferAttribute(s,c),u.uv=Be.getInterpolation(zi,Vn,kn,Wn,Fi,Oi,Bi,new kt)),r&&(Fi.fromBufferAttribute(r,a),Oi.fromBufferAttribute(r,l),Bi.fromBufferAttribute(r,c),u.uv1=Be.getInterpolation(zi,Vn,kn,Wn,Fi,Oi,Bi,new kt),u.uv2=u.uv1),o&&(ra.fromBufferAttribute(o,a),aa.fromBufferAttribute(o,l),oa.fromBufferAttribute(o,c),u.normal=Be.getInterpolation(zi,Vn,kn,Wn,ra,aa,oa,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};Be.getNormal(Vn,kn,Wn,d.normal),u.face=d}return u}class Ht extends Pn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let p=0,m=0;M("z","y","x",-1,-1,n,e,t,o,r,0),M("z","y","x",1,-1,n,e,-t,o,r,1),M("x","z","y",1,1,t,n,e,s,o,2),M("x","z","y",1,-1,t,n,-e,s,o,3),M("x","y","z",1,-1,t,e,n,s,r,4),M("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(u,3)),this.setAttribute("uv",new Rn(d,2));function M(x,f,h,A,T,w,D,v,b,P,g){const E=w/b,V=D/P,W=w/2,it=D/2,C=v/2,z=b+1,H=P+1;let q=0,k=0;const X=new N;for(let Y=0;Y<H;Y++){const Q=Y*V-it;for(let tt=0;tt<z;tt++){const G=tt*E-W;X[x]=G*A,X[f]=Q*T,X[h]=C,c.push(X.x,X.y,X.z),X[x]=0,X[f]=0,X[h]=v>0?1:-1,u.push(X.x,X.y,X.z),d.push(tt/b),d.push(1-Y/P),q+=1}}for(let Y=0;Y<P;Y++)for(let Q=0;Q<b;Q++){const tt=p+Q+z*Y,G=p+Q+z*(Y+1),K=p+(Q+1)+z*(Y+1),ot=p+(Q+1)+z*Y;l.push(tt,G,ot),l.push(G,K,ot),k+=6}a.addGroup(m,k,g),m+=k,p+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ht(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ni(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Se(i){const t={};for(let e=0;e<i.length;e++){const n=ni(i[e]);for(const s in n)t[s]=n[s]}return t}function zl(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function no(i){return i.getRenderTarget()===null?i.outputColorSpace:qt.workingColorSpace}const Gl={clone:ni,merge:Se};var Hl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hl,this.fragmentShader=Vl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ni(t.uniforms),this.uniformsGroups=zl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class io extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Je}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ue extends io{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xn=-90,qn=1;class kl extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ue(Xn,qn,t,e);s.layers=this.layers,this.add(s);const r=new Ue(Xn,qn,t,e);r.layers=this.layers,this.add(r);const o=new Ue(Xn,qn,t,e);o.layers=this.layers,this.add(o);const a=new Ue(Xn,qn,t,e);a.layers=this.layers,this.add(a);const l=new Ue(Xn,qn,t,e);l.layers=this.layers,this.add(l);const c=new Ue(Xn,qn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Je)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$i)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,p,m),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class so extends be{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Qn,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wl extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(pi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===wn?fe:Ie),this.texture=new so(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:De}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ht(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:cn});r.uniforms.tEquirect.value=e;const o=new bt(s,r),a=e.minFilter;return e.minFilter===gi&&(e.minFilter=De),new kl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Ps=new N,Xl=new N,ql=new Bt;class Sn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ps.subVectors(n,e).cross(Xl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ps),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ql.getNormalMatrix(t),s=this.coplanarPoint(Ps).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xn=new Mi,Vi=new N;class tr{constructor(t=new Sn,e=new Sn,n=new Sn,s=new Sn,r=new Sn,o=new Sn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Je){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],p=s[7],m=s[8],M=s[9],x=s[10],f=s[11],h=s[12],A=s[13],T=s[14],w=s[15];if(n[0].setComponents(l-r,p-c,f-m,w-h).normalize(),n[1].setComponents(l+r,p+c,f+m,w+h).normalize(),n[2].setComponents(l+o,p+u,f+M,w+A).normalize(),n[3].setComponents(l-o,p-u,f-M,w-A).normalize(),n[4].setComponents(l-a,p-d,f-x,w-T).normalize(),e===Je)n[5].setComponents(l+a,p+d,f+x,w+T).normalize();else if(e===$i)n[5].setComponents(a,d,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xn)}intersectsSprite(t){return xn.center.set(0,0,0),xn.radius=.7071067811865476,xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(xn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Vi.x=s.normal.x>0?t.max.x:t.min.x,Vi.y=s.normal.y>0?t.max.y:t.min.y,Vi.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ro(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yl(i,t){const e=t.isWebGL2,n=new WeakMap;function s(c,u){const d=c.array,p=c.usage,m=d.byteLength,M=i.createBuffer();i.bindBuffer(u,M),i.bufferData(u,d,p),c.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:M,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,d){const p=u.array,m=u._updateRange,M=u.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&M.length===0&&i.bufferSubData(d,0,p),M.length!==0){for(let x=0,f=M.length;x<f;x++){const h=M[x];e?i.bufferSubData(d,h.start*p.BYTES_PER_ELEMENT,p,h.start,h.count):i.bufferSubData(d,h.start*p.BYTES_PER_ELEMENT,p.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(d,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(d,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,s(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class er extends Pn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=t/a,p=e/l,m=[],M=[],x=[],f=[];for(let h=0;h<u;h++){const A=h*p-o;for(let T=0;T<c;T++){const w=T*d-r;M.push(w,-A,0),x.push(0,0,1),f.push(T/a),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<a;A++){const T=A+c*h,w=A+c*(h+1),D=A+1+c*(h+1),v=A+1+c*h;m.push(T,w,v),m.push(w,D,v)}this.setIndex(m),this.setAttribute("position",new Rn(M,3)),this.setAttribute("normal",new Rn(x,3)),this.setAttribute("uv",new Rn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jl=`#ifdef USE_ALPHAHASH
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
#endif`,Zl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$l=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ql=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tc=`#ifdef USE_AOMAP
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
#endif`,ec=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,ic=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ac=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oc=`#ifdef USE_IRIDESCENCE
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
#endif`,lc=`#ifdef USE_BUMPMAP
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
#endif`,cc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,hc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_c=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,vc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xc=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ec=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tc="gl_FragColor = linearToOutputTexel( gl_FragColor );",bc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ac=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rc=`#ifdef USE_ENVMAP
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
#endif`,Cc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ic=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nc=`#ifdef USE_GRADIENTMAP
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
}`,Fc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Oc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gc=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,Hc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Vc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Yc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kc=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$c=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,th=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,eh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ih=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sh=`#if defined( USE_POINTS_UV )
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
#endif`,rh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ah=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ch=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,uh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ph=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gh=`#ifdef USE_NORMALMAP
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
#endif`,_h=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Th=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ah=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ch=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Lh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ph=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Dh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ih=`#ifdef USE_SKINNING
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
#endif`,Nh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fh=`#ifdef USE_SKINNING
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
#endif`,Oh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gh=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hh=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vh=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kh=`uniform sampler2D t2D;
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
}`,jh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qh=`#include <common>
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
}`,tu=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,eu=`#define DISTANCE
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
}`,nu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,su=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ru=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,au=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ou=`#include <common>
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
}`,lu=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,cu=`#define LAMBERT
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
}`,hu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,uu=`#define MATCAP
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
}`,du=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,fu=`#define NORMAL
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
}`,pu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mu=`#define PHONG
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
}`,gu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_u=`#define STANDARD
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
}`,vu=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,xu=`#define TOON
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
}`,Mu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Su=`uniform float size;
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
}`,Eu=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,yu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Tu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,bu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Au=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Dt={alphahash_fragment:Kl,alphahash_pars_fragment:jl,alphamap_fragment:Zl,alphamap_pars_fragment:$l,alphatest_fragment:Jl,alphatest_pars_fragment:Ql,aomap_fragment:tc,aomap_pars_fragment:ec,batching_pars_vertex:nc,batching_vertex:ic,begin_vertex:sc,beginnormal_vertex:rc,bsdfs:ac,iridescence_fragment:oc,bumpmap_pars_fragment:lc,clipping_planes_fragment:cc,clipping_planes_pars_fragment:hc,clipping_planes_pars_vertex:uc,clipping_planes_vertex:dc,color_fragment:fc,color_pars_fragment:pc,color_pars_vertex:mc,color_vertex:gc,common:_c,cube_uv_reflection_fragment:vc,defaultnormal_vertex:xc,displacementmap_pars_vertex:Mc,displacementmap_vertex:Sc,emissivemap_fragment:Ec,emissivemap_pars_fragment:yc,colorspace_fragment:Tc,colorspace_pars_fragment:bc,envmap_fragment:Ac,envmap_common_pars_fragment:wc,envmap_pars_fragment:Rc,envmap_pars_vertex:Cc,envmap_physical_pars_fragment:Hc,envmap_vertex:Lc,fog_vertex:Pc,fog_pars_vertex:Dc,fog_fragment:Uc,fog_pars_fragment:Ic,gradientmap_pars_fragment:Nc,lightmap_fragment:Fc,lightmap_pars_fragment:Oc,lights_lambert_fragment:Bc,lights_lambert_pars_fragment:zc,lights_pars_begin:Gc,lights_toon_fragment:Vc,lights_toon_pars_fragment:kc,lights_phong_fragment:Wc,lights_phong_pars_fragment:Xc,lights_physical_fragment:qc,lights_physical_pars_fragment:Yc,lights_fragment_begin:Kc,lights_fragment_maps:jc,lights_fragment_end:Zc,logdepthbuf_fragment:$c,logdepthbuf_pars_fragment:Jc,logdepthbuf_pars_vertex:Qc,logdepthbuf_vertex:th,map_fragment:eh,map_pars_fragment:nh,map_particle_fragment:ih,map_particle_pars_fragment:sh,metalnessmap_fragment:rh,metalnessmap_pars_fragment:ah,morphcolor_vertex:oh,morphnormal_vertex:lh,morphtarget_pars_vertex:ch,morphtarget_vertex:hh,normal_fragment_begin:uh,normal_fragment_maps:dh,normal_pars_fragment:fh,normal_pars_vertex:ph,normal_vertex:mh,normalmap_pars_fragment:gh,clearcoat_normal_fragment_begin:_h,clearcoat_normal_fragment_maps:vh,clearcoat_pars_fragment:xh,iridescence_pars_fragment:Mh,opaque_fragment:Sh,packing:Eh,premultiplied_alpha_fragment:yh,project_vertex:Th,dithering_fragment:bh,dithering_pars_fragment:Ah,roughnessmap_fragment:wh,roughnessmap_pars_fragment:Rh,shadowmap_pars_fragment:Ch,shadowmap_pars_vertex:Lh,shadowmap_vertex:Ph,shadowmask_pars_fragment:Dh,skinbase_vertex:Uh,skinning_pars_vertex:Ih,skinning_vertex:Nh,skinnormal_vertex:Fh,specularmap_fragment:Oh,specularmap_pars_fragment:Bh,tonemapping_fragment:zh,tonemapping_pars_fragment:Gh,transmission_fragment:Hh,transmission_pars_fragment:Vh,uv_pars_fragment:kh,uv_pars_vertex:Wh,uv_vertex:Xh,worldpos_vertex:qh,background_vert:Yh,background_frag:Kh,backgroundCube_vert:jh,backgroundCube_frag:Zh,cube_vert:$h,cube_frag:Jh,depth_vert:Qh,depth_frag:tu,distanceRGBA_vert:eu,distanceRGBA_frag:nu,equirect_vert:iu,equirect_frag:su,linedashed_vert:ru,linedashed_frag:au,meshbasic_vert:ou,meshbasic_frag:lu,meshlambert_vert:cu,meshlambert_frag:hu,meshmatcap_vert:uu,meshmatcap_frag:du,meshnormal_vert:fu,meshnormal_frag:pu,meshphong_vert:mu,meshphong_frag:gu,meshphysical_vert:_u,meshphysical_frag:vu,meshtoon_vert:xu,meshtoon_frag:Mu,points_vert:Su,points_frag:Eu,shadow_vert:yu,shadow_frag:Tu,sprite_vert:bu,sprite_frag:Au},nt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},ke={basic:{uniforms:Se([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Se([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Se([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Se([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Se([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Se([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Se([nt.points,nt.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Se([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Se([nt.common,nt.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Se([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Se([nt.sprite,nt.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Se([nt.common,nt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Se([nt.lights,nt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};ke.physical={uniforms:Se([ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const ki={r:0,b:0,g:0};function wu(i,t,e,n,s,r,o){const a=new zt(0);let l=r===!0?0:1,c,u,d=null,p=0,m=null;function M(f,h){let A=!1,T=h.isScene===!0?h.background:null;T&&T.isTexture&&(T=(h.backgroundBlurriness>0?e:t).get(T)),T===null?x(a,l):T&&T.isColor&&(x(T,1),A=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),T&&(T.isCubeTexture||T.mapping===Qi)?(u===void 0&&(u=new bt(new Ht(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:ni(ke.backgroundCube.uniforms),vertexShader:ke.backgroundCube.vertexShader,fragmentShader:ke.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,v,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=qt.getTransfer(T.colorSpace)!==Zt,(d!==T||p!==T.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=T,p=T.version,m=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new bt(new er(2,2),new Ln({name:"BackgroundMaterial",uniforms:ni(ke.background.uniforms),vertexShader:ke.background.vertexShader,fragmentShader:ke.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=qt.getTransfer(T.colorSpace)!==Zt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||p!==T.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=T,p=T.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function x(f,h){f.getRGB(ki,no(i)),n.buffers.color.setClear(ki.r,ki.g,ki.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(f,h=1){a.set(f),l=h,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,x(a,l)},render:M}}function Ru(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=f(null);let c=l,u=!1;function d(C,z,H,q,k){let X=!1;if(o){const Y=x(q,H,z);c!==Y&&(c=Y,m(c.object)),X=h(C,q,H,k),X&&A(C,q,H,k)}else{const Y=z.wireframe===!0;(c.geometry!==q.id||c.program!==H.id||c.wireframe!==Y)&&(c.geometry=q.id,c.program=H.id,c.wireframe=Y,X=!0)}k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,P(C,z,H,q),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(C){return n.isWebGL2?i.bindVertexArray(C):r.bindVertexArrayOES(C)}function M(C){return n.isWebGL2?i.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function x(C,z,H){const q=H.wireframe===!0;let k=a[C.id];k===void 0&&(k={},a[C.id]=k);let X=k[z.id];X===void 0&&(X={},k[z.id]=X);let Y=X[q];return Y===void 0&&(Y=f(p()),X[q]=Y),Y}function f(C){const z=[],H=[],q=[];for(let k=0;k<s;k++)z[k]=0,H[k]=0,q[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:q,object:C,attributes:{},index:null}}function h(C,z,H,q){const k=c.attributes,X=z.attributes;let Y=0;const Q=H.getAttributes();for(const tt in Q)if(Q[tt].location>=0){const K=k[tt];let ot=X[tt];if(ot===void 0&&(tt==="instanceMatrix"&&C.instanceMatrix&&(ot=C.instanceMatrix),tt==="instanceColor"&&C.instanceColor&&(ot=C.instanceColor)),K===void 0||K.attribute!==ot||ot&&K.data!==ot.data)return!0;Y++}return c.attributesNum!==Y||c.index!==q}function A(C,z,H,q){const k={},X=z.attributes;let Y=0;const Q=H.getAttributes();for(const tt in Q)if(Q[tt].location>=0){let K=X[tt];K===void 0&&(tt==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),tt==="instanceColor"&&C.instanceColor&&(K=C.instanceColor));const ot={};ot.attribute=K,K&&K.data&&(ot.data=K.data),k[tt]=ot,Y++}c.attributes=k,c.attributesNum=Y,c.index=q}function T(){const C=c.newAttributes;for(let z=0,H=C.length;z<H;z++)C[z]=0}function w(C){D(C,0)}function D(C,z){const H=c.newAttributes,q=c.enabledAttributes,k=c.attributeDivisors;H[C]=1,q[C]===0&&(i.enableVertexAttribArray(C),q[C]=1),k[C]!==z&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,z),k[C]=z)}function v(){const C=c.newAttributes,z=c.enabledAttributes;for(let H=0,q=z.length;H<q;H++)z[H]!==C[H]&&(i.disableVertexAttribArray(H),z[H]=0)}function b(C,z,H,q,k,X,Y){Y===!0?i.vertexAttribIPointer(C,z,H,k,X):i.vertexAttribPointer(C,z,H,q,k,X)}function P(C,z,H,q){if(n.isWebGL2===!1&&(C.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;T();const k=q.attributes,X=H.getAttributes(),Y=z.defaultAttributeValues;for(const Q in X){const tt=X[Q];if(tt.location>=0){let G=k[Q];if(G===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(G=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(G=C.instanceColor)),G!==void 0){const K=G.normalized,ot=G.itemSize,mt=e.get(G);if(mt===void 0)continue;const pt=mt.buffer,Rt=mt.type,Lt=mt.bytesPerElement,St=n.isWebGL2===!0&&(Rt===i.INT||Rt===i.UNSIGNED_INT||G.gpuType===za);if(G.isInterleavedBufferAttribute){const Vt=G.data,U=Vt.stride,ve=G.offset;if(Vt.isInstancedInterleavedBuffer){for(let _t=0;_t<tt.locationSize;_t++)D(tt.location+_t,Vt.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Vt.meshPerAttribute*Vt.count)}else for(let _t=0;_t<tt.locationSize;_t++)w(tt.location+_t);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let _t=0;_t<tt.locationSize;_t++)b(tt.location+_t,ot/tt.locationSize,Rt,K,U*Lt,(ve+ot/tt.locationSize*_t)*Lt,St)}else{if(G.isInstancedBufferAttribute){for(let Vt=0;Vt<tt.locationSize;Vt++)D(tt.location+Vt,G.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Vt=0;Vt<tt.locationSize;Vt++)w(tt.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Vt=0;Vt<tt.locationSize;Vt++)b(tt.location+Vt,ot/tt.locationSize,Rt,K,ot*Lt,ot/tt.locationSize*Vt*Lt,St)}}else if(Y!==void 0){const K=Y[Q];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(tt.location,K);break;case 3:i.vertexAttrib3fv(tt.location,K);break;case 4:i.vertexAttrib4fv(tt.location,K);break;default:i.vertexAttrib1fv(tt.location,K)}}}}v()}function g(){W();for(const C in a){const z=a[C];for(const H in z){const q=z[H];for(const k in q)M(q[k].object),delete q[k];delete z[H]}delete a[C]}}function E(C){if(a[C.id]===void 0)return;const z=a[C.id];for(const H in z){const q=z[H];for(const k in q)M(q[k].object),delete q[k];delete z[H]}delete a[C.id]}function V(C){for(const z in a){const H=a[z];if(H[C.id]===void 0)continue;const q=H[C.id];for(const k in q)M(q[k].object),delete q[k];delete H[C.id]}}function W(){it(),u=!0,c!==l&&(c=l,m(c.object))}function it(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:it,dispose:g,releaseStatesOfGeometry:E,releaseStatesOfProgram:V,initAttributes:T,enableAttribute:w,disableUnusedAttributes:v}}function Cu(i,t,e,n){const s=n.isWebGL2;let r;function o(u){r=u}function a(u,d){i.drawArrays(r,u,d),e.update(d,r,1)}function l(u,d,p){if(p===0)return;let m,M;if(s)m=i,M="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[M](r,u,d,p),e.update(d,r,p)}function c(u,d,p){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let M=0;M<p;M++)this.render(u[M],d[M]);else{m.multiDrawArraysWEBGL(r,u,0,d,0,p);let M=0;for(let x=0;x<p;x++)M+=d[x];e.update(M,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Lu(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,w=o||t.has("OES_texture_float"),D=T&&w,v=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:f,maxVaryings:h,maxFragmentUniforms:A,vertexTextures:T,floatFragmentTextures:w,floatVertexTextures:D,maxSamples:v}}function Pu(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Sn,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||n!==0||s;return s=p,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=u(d,p,0)},this.setState=function(d,p,m){const M=d.clippingPlanes,x=d.clipIntersection,f=d.clipShadows,h=i.get(d);if(!s||M===null||M.length===0||r&&!f)r?u(null):c();else{const A=r?0:n,T=A*4;let w=h.clippingState||null;l.value=w,w=u(M,p,T,m);for(let D=0;D!==T;++D)w[D]=e[D];h.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,p,m,M){const x=d!==null?d.length:0;let f=null;if(x!==0){if(f=l.value,M!==!0||f===null){const h=m+x*4,A=p.matrixWorldInverse;a.getNormalMatrix(A),(f===null||f.length<h)&&(f=new Float32Array(h));for(let T=0,w=m;T!==x;++T,w+=4)o.copy(d[T]).applyMatrix4(A,a),o.normal.toArray(f,w),f[w+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function Du(i){let t=new WeakMap;function e(o,a){return a===Vs?o.mapping=Qn:a===ks&&(o.mapping=ti),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vs||a===ks)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Wl(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ao extends io{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const jn=4,la=[.125,.215,.35,.446,.526,.582],Tn=20,Ds=new ao,ca=new zt;let Us=null,Is=0,Ns=0;const En=(1+Math.sqrt(5))/2,Yn=1/En,ha=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,En,Yn),new N(0,En,-Yn),new N(Yn,0,En),new N(-Yn,0,En),new N(En,Yn,0),new N(-En,Yn,0)];class ua{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Us=this._renderer.getRenderTarget(),Is=this._renderer.getActiveCubeFace(),Ns=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Us,Is,Ns),t.scissorTest=!1,Wi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qn||t.mapping===ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Us=this._renderer.getRenderTarget(),Is=this._renderer.getActiveCubeFace(),Ns=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:_i,format:Ge,colorSpace:tn,depthBuffer:!1},s=da(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=da(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uu(r)),this._blurMaterial=Iu(r,t,e)}return s}_compileMaterial(t){const e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,Ds)}_sceneToCubeUV(t,e,n,s){const a=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(ca),u.toneMapping=hn,u.autoClear=!1;const m=new Qe({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),M=new bt(new Ht,m);let x=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,x=!0):(m.color.copy(ca),x=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):A===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const T=this._cubeSize;Wi(s,A*T,h>2?T:0,T,T),u.setRenderTarget(s),x&&u.render(M,a),u.render(t,a)}M.geometry.dispose(),M.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Qn||t.mapping===ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Wi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ds)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ha[(s-1)%ha.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new bt(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,M=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Tn-1),x=r/M,f=isFinite(r)?1+Math.floor(u*x):Tn;f>Tn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Tn}`);const h=[];let A=0;for(let b=0;b<Tn;++b){const P=b/x,g=Math.exp(-P*P/2);h.push(g),b===0?A+=g:b<f&&(A+=2*g)}for(let b=0;b<h.length;b++)h[b]=h[b]/A;p.envMap.value=t.texture,p.samples.value=f,p.weights.value=h,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:T}=this;p.dTheta.value=M,p.mipInt.value=T-n;const w=this._sizeLods[s],D=3*w*(s>T-jn?s-T+jn:0),v=4*(this._cubeSize-w);Wi(e,D,v,3*w,2*w),l.setRenderTarget(e),l.render(d,Ds)}}function Uu(i){const t=[],e=[],n=[];let s=i;const r=i-jn+1+la.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-jn?l=la[o-i+jn-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,M=6,x=3,f=2,h=1,A=new Float32Array(x*M*m),T=new Float32Array(f*M*m),w=new Float32Array(h*M*m);for(let v=0;v<m;v++){const b=v%3*2/3-1,P=v>2?0:-1,g=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];A.set(g,x*M*v),T.set(p,f*M*v);const E=[v,v,v,v,v,v];w.set(E,h*M*v)}const D=new Pn;D.setAttribute("position",new He(A,x)),D.setAttribute("uv",new He(T,f)),D.setAttribute("faceIndex",new He(w,h)),t.push(D),s>jn&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function da(i,t,e){const n=new Cn(i,t,e);return n.texture.mapping=Qi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Iu(i,t,e){const n=new Float32Array(Tn),s=new N(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Tn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function fa(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nr(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function pa(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function nr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nu(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vs||l===ks,u=l===Qn||l===ti;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new ua(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&s(d)){e===null&&(e=new ua(i));const p=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Fu(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ou(i,t,e,n){const s={},r=new WeakMap;function o(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const M in p.attributes)t.remove(p.attributes[M]);for(const M in p.morphAttributes){const x=p.morphAttributes[M];for(let f=0,h=x.length;f<h;f++)t.remove(x[f])}p.removeEventListener("dispose",o),delete s[p.id];const m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(d){const p=d.attributes;for(const M in p)t.update(p[M],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const M in m){const x=m[M];for(let f=0,h=x.length;f<h;f++)t.update(x[f],i.ARRAY_BUFFER)}}function c(d){const p=[],m=d.index,M=d.attributes.position;let x=0;if(m!==null){const A=m.array;x=m.version;for(let T=0,w=A.length;T<w;T+=3){const D=A[T+0],v=A[T+1],b=A[T+2];p.push(D,v,v,b,b,D)}}else if(M!==void 0){const A=M.array;x=M.version;for(let T=0,w=A.length/3-1;T<w;T+=3){const D=T+0,v=T+1,b=T+2;p.push(D,v,v,b,b,D)}}else return;const f=new(Ka(p)?eo:to)(p,1);f.version=x;const h=r.get(d);h&&t.remove(h),r.set(d,f)}function u(d){const p=r.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Bu(i,t,e,n){const s=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,M){i.drawElements(r,M,a,m*l),e.update(M,r,1)}function d(m,M,x){if(x===0)return;let f,h;if(s)f=i,h="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[h](r,M,a,m*l,x),e.update(M,r,x)}function p(m,M,x){if(x===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<x;h++)this.render(m[h]/l,M[h]);else{f.multiDrawElementsWEBGL(r,M,0,a,m,0,x);let h=0;for(let A=0;A<x;A++)h+=M[A];e.update(h,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function zu(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gu(i,t){return i[0]-t[0]}function Hu(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Vu(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,o=new ue,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const p=c.morphTargetInfluences;if(t.isWebGL2===!0){const M=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=M!==void 0?M.length:0;let f=r.get(u);if(f===void 0||f.count!==x){let z=function(){it.dispose(),r.delete(u),u.removeEventListener("dispose",z)};var m=z;f!==void 0&&f.texture.dispose();const T=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,D=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let g=0;T===!0&&(g=1),w===!0&&(g=2),D===!0&&(g=3);let E=u.attributes.position.count*g,V=1;E>t.maxTextureSize&&(V=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const W=new Float32Array(E*V*4*x),it=new $a(W,E,V,x);it.type=ln,it.needsUpdate=!0;const C=g*4;for(let H=0;H<x;H++){const q=v[H],k=b[H],X=P[H],Y=E*V*4*H;for(let Q=0;Q<q.count;Q++){const tt=Q*C;T===!0&&(o.fromBufferAttribute(q,Q),W[Y+tt+0]=o.x,W[Y+tt+1]=o.y,W[Y+tt+2]=o.z,W[Y+tt+3]=0),w===!0&&(o.fromBufferAttribute(k,Q),W[Y+tt+4]=o.x,W[Y+tt+5]=o.y,W[Y+tt+6]=o.z,W[Y+tt+7]=0),D===!0&&(o.fromBufferAttribute(X,Q),W[Y+tt+8]=o.x,W[Y+tt+9]=o.y,W[Y+tt+10]=o.z,W[Y+tt+11]=X.itemSize===4?o.w:1)}}f={count:x,texture:it,size:new kt(E,V)},r.set(u,f),u.addEventListener("dispose",z)}let h=0;for(let T=0;T<p.length;T++)h+=p[T];const A=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(i,"morphTargetBaseInfluence",A),d.getUniforms().setValue(i,"morphTargetInfluences",p),d.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const M=p===void 0?0:p.length;let x=n[u.id];if(x===void 0||x.length!==M){x=[];for(let w=0;w<M;w++)x[w]=[w,0];n[u.id]=x}for(let w=0;w<M;w++){const D=x[w];D[0]=w,D[1]=p[w]}x.sort(Hu);for(let w=0;w<8;w++)w<M&&x[w][1]?(a[w][0]=x[w][0],a[w][1]=x[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(Gu);const f=u.morphAttributes.position,h=u.morphAttributes.normal;let A=0;for(let w=0;w<8;w++){const D=a[w],v=D[0],b=D[1];v!==Number.MAX_SAFE_INTEGER&&b?(f&&u.getAttribute("morphTarget"+w)!==f[v]&&u.setAttribute("morphTarget"+w,f[v]),h&&u.getAttribute("morphNormal"+w)!==h[v]&&u.setAttribute("morphNormal"+w,h[v]),s[w]=b,A+=b):(f&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),h&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),s[w]=0)}const T=u.morphTargetsRelative?1:1-A;d.getUniforms().setValue(i,"morphTargetBaseInfluence",T),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function ku(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class oo extends be{constructor(t,e,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:An,u!==An&&u!==ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===An&&(n=on),n===void 0&&u===ei&&(n=bn),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:_e,this.minFilter=l!==void 0?l:_e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const lo=new be,co=new oo(1,1);co.compareFunction=Ya;const ho=new $a,uo=new Al,fo=new so,ma=[],ga=[],_a=new Float32Array(16),va=new Float32Array(9),xa=new Float32Array(4);function ri(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ma[s];if(r===void 0&&(r=new Float32Array(s),ma[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ns(i,t){let e=ga[t];e===void 0&&(e=new Int32Array(t),ga[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2fv(this.addr,t),oe(e,t)}}function qu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ae(e,t))return;i.uniform3fv(this.addr,t),oe(e,t)}}function Yu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4fv(this.addr,t),oe(e,t)}}function Ku(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;xa.set(n),i.uniformMatrix2fv(this.addr,!1,xa),oe(e,n)}}function ju(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;va.set(n),i.uniformMatrix3fv(this.addr,!1,va),oe(e,n)}}function Zu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;_a.set(n),i.uniformMatrix4fv(this.addr,!1,_a),oe(e,n)}}function $u(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ju(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2iv(this.addr,t),oe(e,t)}}function Qu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;i.uniform3iv(this.addr,t),oe(e,t)}}function td(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4iv(this.addr,t),oe(e,t)}}function ed(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2uiv(this.addr,t),oe(e,t)}}function id(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;i.uniform3uiv(this.addr,t),oe(e,t)}}function sd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4uiv(this.addr,t),oe(e,t)}}function rd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?co:lo;e.setTexture2D(t||r,s)}function ad(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||uo,s)}function od(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fo,s)}function ld(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ho,s)}function cd(i){switch(i){case 5126:return Wu;case 35664:return Xu;case 35665:return qu;case 35666:return Yu;case 35674:return Ku;case 35675:return ju;case 35676:return Zu;case 5124:case 35670:return $u;case 35667:case 35671:return Ju;case 35668:case 35672:return Qu;case 35669:case 35673:return td;case 5125:return ed;case 36294:return nd;case 36295:return id;case 36296:return sd;case 35678:case 36198:case 36298:case 36306:case 35682:return rd;case 35679:case 36299:case 36307:return ad;case 35680:case 36300:case 36308:case 36293:return od;case 36289:case 36303:case 36311:case 36292:return ld}}function hd(i,t){i.uniform1fv(this.addr,t)}function ud(i,t){const e=ri(t,this.size,2);i.uniform2fv(this.addr,e)}function dd(i,t){const e=ri(t,this.size,3);i.uniform3fv(this.addr,e)}function fd(i,t){const e=ri(t,this.size,4);i.uniform4fv(this.addr,e)}function pd(i,t){const e=ri(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function md(i,t){const e=ri(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gd(i,t){const e=ri(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _d(i,t){i.uniform1iv(this.addr,t)}function vd(i,t){i.uniform2iv(this.addr,t)}function xd(i,t){i.uniform3iv(this.addr,t)}function Md(i,t){i.uniform4iv(this.addr,t)}function Sd(i,t){i.uniform1uiv(this.addr,t)}function Ed(i,t){i.uniform2uiv(this.addr,t)}function yd(i,t){i.uniform3uiv(this.addr,t)}function Td(i,t){i.uniform4uiv(this.addr,t)}function bd(i,t,e){const n=this.cache,s=t.length,r=ns(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||lo,r[o])}function Ad(i,t,e){const n=this.cache,s=t.length,r=ns(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||uo,r[o])}function wd(i,t,e){const n=this.cache,s=t.length,r=ns(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||fo,r[o])}function Rd(i,t,e){const n=this.cache,s=t.length,r=ns(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ho,r[o])}function Cd(i){switch(i){case 5126:return hd;case 35664:return ud;case 35665:return dd;case 35666:return fd;case 35674:return pd;case 35675:return md;case 35676:return gd;case 5124:case 35670:return _d;case 35667:case 35671:return vd;case 35668:case 35672:return xd;case 35669:case 35673:return Md;case 5125:return Sd;case 36294:return Ed;case 36295:return yd;case 36296:return Td;case 35678:case 36198:case 36298:case 36306:case 35682:return bd;case 35679:case 36299:case 36307:return Ad;case 35680:case 36300:case 36308:case 36293:return wd;case 36289:case 36303:case 36311:case 36292:return Rd}}class Ld{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cd(e.type)}}class Pd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cd(e.type)}}class Dd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Fs=/(\w+)(\])?(\[|\.)?/g;function Ma(i,t){i.seq.push(t),i.map[t.id]=t}function Ud(i,t,e){const n=i.name,s=n.length;for(Fs.lastIndex=0;;){const r=Fs.exec(n),o=Fs.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ma(e,c===void 0?new Ld(a,i,t):new Pd(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Dd(a),Ma(e,d)),e=d}}}class qi{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ud(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Sa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Id=37297;let Nd=0;function Fd(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Od(i){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(i);let n;switch(t===e?n="":t===Zi&&e===ji?n="LinearDisplayP3ToLinearSRGB":t===ji&&e===Zi&&(n="LinearSRGBToLinearDisplayP3"),i){case tn:case ts:return[n,"LinearTransferOETF"];case fe:case Qs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ea(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Fd(i.getShaderSource(t),o)}else return s}function Bd(i,t){const e=Od(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function zd(i,t){let e;switch(t){case Ko:e="Linear";break;case jo:e="Reinhard";break;case Zo:e="OptimizedCineon";break;case $o:e="ACESFilmic";break;case Qo:e="AgX";break;case Jo:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Gd(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zn).join(`
`)}function Hd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zn).join(`
`)}function Vd(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kd(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Zn(i){return i!==""}function ya(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ta(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ks(i){return i.replace(Wd,qd)}const Xd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qd(i,t){let e=Dt[t];if(e===void 0){const n=Xd.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ks(e)}const Yd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ba(i){return i.replace(Yd,Kd)}function Kd(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Aa(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jd(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Oa?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ze&&(t="SHADOWMAP_TYPE_VSM"),t}function Zd(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qn:case ti:t="ENVMAP_TYPE_CUBE";break;case Qi:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $d(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ti:t="ENVMAP_MODE_REFRACTION";break}return t}function Jd(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zs:t="ENVMAP_BLENDING_MULTIPLY";break;case qo:t="ENVMAP_BLENDING_MIX";break;case Yo:t="ENVMAP_BLENDING_ADD";break}return t}function Qd(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function tf(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=jd(e),c=Zd(e),u=$d(e),d=Jd(e),p=Qd(e),m=e.isWebGL2?"":Gd(e),M=Hd(e),x=Vd(r),f=s.createProgram();let h,A,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Zn).join(`
`),h.length>0&&(h+=`
`),A=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Zn).join(`
`),A.length>0&&(A+=`
`)):(h=[Aa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zn).join(`
`),A=[m,Aa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hn?"#define TONE_MAPPING":"",e.toneMapping!==hn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==hn?zd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,Bd("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zn).join(`
`)),o=Ks(o),o=ya(o,e),o=Ta(o,e),a=Ks(a),a=ya(a,e),a=Ta(a,e),o=ba(o),a=ba(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,h=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,A=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Wr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const w=T+h+o,D=T+A+a,v=Sa(s,s.VERTEX_SHADER,w),b=Sa(s,s.FRAGMENT_SHADER,D);s.attachShader(f,v),s.attachShader(f,b),e.index0AttributeName!==void 0?s.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function P(W){if(i.debug.checkShaderErrors){const it=s.getProgramInfoLog(f).trim(),C=s.getShaderInfoLog(v).trim(),z=s.getShaderInfoLog(b).trim();let H=!0,q=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,f,v,b);else{const k=Ea(s,v,"vertex"),X=Ea(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+it+`
`+k+`
`+X)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(C===""||z==="")&&(q=!1);q&&(W.diagnostics={runnable:H,programLog:it,vertexShader:{log:C,prefix:h},fragmentShader:{log:z,prefix:A}})}s.deleteShader(v),s.deleteShader(b),g=new qi(s,f),E=kd(s,f)}let g;this.getUniforms=function(){return g===void 0&&P(this),g};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(f,Id)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nd++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=v,this.fragmentShader=b,this}let ef=0;class nf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new sf(t),e.set(t,n)),n}}class sf{constructor(t){this.id=ef++,this.code=t,this.usedTimes=0}}function rf(i,t,e,n,s,r,o){const a=new Ja,l=new nf,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return g===0?"uv":`uv${g}`}function f(g,E,V,W,it){const C=W.fog,z=it.geometry,H=g.isMeshStandardMaterial?W.environment:null,q=(g.isMeshStandardMaterial?e:t).get(g.envMap||H),k=q&&q.mapping===Qi?q.image.height:null,X=M[g.type];g.precision!==null&&(m=s.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const Y=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Q=Y!==void 0?Y.length:0;let tt=0;z.morphAttributes.position!==void 0&&(tt=1),z.morphAttributes.normal!==void 0&&(tt=2),z.morphAttributes.color!==void 0&&(tt=3);let G,K,ot,mt;if(X){const xe=ke[X];G=xe.vertexShader,K=xe.fragmentShader}else G=g.vertexShader,K=g.fragmentShader,l.update(g),ot=l.getVertexShaderID(g),mt=l.getFragmentShaderID(g);const pt=i.getRenderTarget(),Rt=it.isInstancedMesh===!0,Lt=it.isBatchedMesh===!0,St=!!g.map,Vt=!!g.matcap,U=!!q,ve=!!g.aoMap,_t=!!g.lightMap,At=!!g.bumpMap,ut=!!g.normalMap,$t=!!g.displacementMap,Ut=!!g.emissiveMap,y=!!g.metalnessMap,_=!!g.roughnessMap,F=g.anisotropy>0,$=g.clearcoat>0,Z=g.iridescence>0,J=g.sheen>0,dt=g.transmission>0,at=F&&!!g.anisotropyMap,ct=$&&!!g.clearcoatMap,Mt=$&&!!g.clearcoatNormalMap,It=$&&!!g.clearcoatRoughnessMap,j=Z&&!!g.iridescenceMap,Xt=Z&&!!g.iridescenceThicknessMap,Gt=J&&!!g.sheenColorMap,Tt=J&&!!g.sheenRoughnessMap,gt=!!g.specularMap,ht=!!g.specularColorMap,Pt=!!g.specularIntensityMap,Wt=dt&&!!g.transmissionMap,Qt=dt&&!!g.thicknessMap,Ft=!!g.gradientMap,et=!!g.alphaMap,R=g.alphaTest>0,st=!!g.alphaHash,rt=!!g.extensions,Et=!!z.attributes.uv1,vt=!!z.attributes.uv2,Yt=!!z.attributes.uv3;let Kt=hn;return g.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Kt=i.toneMapping),{isWebGL2:u,shaderID:X,shaderType:g.type,shaderName:g.name,vertexShader:G,fragmentShader:K,defines:g.defines,customVertexShaderID:ot,customFragmentShaderID:mt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,batching:Lt,instancing:Rt,instancingColor:Rt&&it.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:tn,map:St,matcap:Vt,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:k,aoMap:ve,lightMap:_t,bumpMap:At,normalMap:ut,displacementMap:p&&$t,emissiveMap:Ut,normalMapObjectSpace:ut&&g.normalMapType===dl,normalMapTangentSpace:ut&&g.normalMapType===Js,metalnessMap:y,roughnessMap:_,anisotropy:F,anisotropyMap:at,clearcoat:$,clearcoatMap:ct,clearcoatNormalMap:Mt,clearcoatRoughnessMap:It,iridescence:Z,iridescenceMap:j,iridescenceThicknessMap:Xt,sheen:J,sheenColorMap:Gt,sheenRoughnessMap:Tt,specularMap:gt,specularColorMap:ht,specularIntensityMap:Pt,transmission:dt,transmissionMap:Wt,thicknessMap:Qt,gradientMap:Ft,opaque:g.transparent===!1&&g.blending===$n,alphaMap:et,alphaTest:R,alphaHash:st,combine:g.combine,mapUv:St&&x(g.map.channel),aoMapUv:ve&&x(g.aoMap.channel),lightMapUv:_t&&x(g.lightMap.channel),bumpMapUv:At&&x(g.bumpMap.channel),normalMapUv:ut&&x(g.normalMap.channel),displacementMapUv:$t&&x(g.displacementMap.channel),emissiveMapUv:Ut&&x(g.emissiveMap.channel),metalnessMapUv:y&&x(g.metalnessMap.channel),roughnessMapUv:_&&x(g.roughnessMap.channel),anisotropyMapUv:at&&x(g.anisotropyMap.channel),clearcoatMapUv:ct&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&x(g.sheenRoughnessMap.channel),specularMapUv:gt&&x(g.specularMap.channel),specularColorMapUv:ht&&x(g.specularColorMap.channel),specularIntensityMapUv:Pt&&x(g.specularIntensityMap.channel),transmissionMapUv:Wt&&x(g.transmissionMap.channel),thicknessMapUv:Qt&&x(g.thicknessMap.channel),alphaMapUv:et&&x(g.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ut||F),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Et,vertexUv2s:vt,vertexUv3s:Yt,pointsUvs:it.isPoints===!0&&!!z.attributes.uv&&(St||et),fog:!!C,useFog:g.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:it.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:tt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Kt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:St&&g.map.isVideoTexture===!0&&qt.getTransfer(g.map.colorSpace)===Zt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===$e,flipSided:g.side===Te,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:rt&&g.extensions.derivatives===!0,extensionFragDepth:rt&&g.extensions.fragDepth===!0,extensionDrawBuffers:rt&&g.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&g.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&g.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()}}function h(g){const E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(const V in g.defines)E.push(V),E.push(g.defines[V]);return g.isRawShaderMaterial===!1&&(A(E,g),T(E,g),E.push(i.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function A(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapCubeUVHeight),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.morphAttributeCount),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function T(g,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),g.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),g.push(a.mask)}function w(g){const E=M[g.type];let V;if(E){const W=ke[E];V=Gl.clone(W.uniforms)}else V=g.uniforms;return V}function D(g,E){let V;for(let W=0,it=c.length;W<it;W++){const C=c[W];if(C.cacheKey===E){V=C,++V.usedTimes;break}}return V===void 0&&(V=new tf(i,E,g,r),c.push(V)),V}function v(g){if(--g.usedTimes===0){const E=c.indexOf(g);c[E]=c[c.length-1],c.pop(),g.destroy()}}function b(g){l.remove(g)}function P(){l.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:w,acquireProgram:D,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:P}}function af(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function of(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function wa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ra(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,p,m,M,x,f){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:p,material:m,groupOrder:M,renderOrder:d.renderOrder,z:x,group:f},i[t]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=m,h.groupOrder=M,h.renderOrder=d.renderOrder,h.z=x,h.group=f),t++,h}function a(d,p,m,M,x,f){const h=o(d,p,m,M,x,f);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):e.push(h)}function l(d,p,m,M,x,f){const h=o(d,p,m,M,x,f);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,p){e.length>1&&e.sort(d||of),n.length>1&&n.sort(p||wa),s.length>1&&s.sort(p||wa)}function u(){for(let d=t,p=i.length;d<p;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function lf(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ra,i.set(n,[o])):s>=r.length?(o=new Ra,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function cf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new zt};break;case"SpotLight":e={position:new N,direction:new N,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function hf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let uf=0;function df(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ff(i,t){const e=new cf,n=hf(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new N);const r=new N,o=new ne,a=new ne;function l(u,d){let p=0,m=0,M=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let x=0,f=0,h=0,A=0,T=0,w=0,D=0,v=0,b=0,P=0,g=0;u.sort(df);const E=d===!0?Math.PI:1;for(let W=0,it=u.length;W<it;W++){const C=u[W],z=C.color,H=C.intensity,q=C.distance,k=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)p+=z.r*H*E,m+=z.g*H*E,M+=z.b*H*E;else if(C.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(C.sh.coefficients[X],H);g++}else if(C.isDirectionalLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity*E),C.castShadow){const Y=C.shadow,Q=n.get(C);Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,s.directionalShadow[x]=Q,s.directionalShadowMap[x]=k,s.directionalShadowMatrix[x]=C.shadow.matrix,w++}s.directional[x]=X,x++}else if(C.isSpotLight){const X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(z).multiplyScalar(H*E),X.distance=q,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,s.spot[h]=X;const Y=C.shadow;if(C.map&&(s.spotLightMap[b]=C.map,b++,Y.updateMatrices(C),C.castShadow&&P++),s.spotLightMatrix[h]=Y.matrix,C.castShadow){const Q=n.get(C);Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,s.spotShadow[h]=Q,s.spotShadowMap[h]=k,v++}h++}else if(C.isRectAreaLight){const X=e.get(C);X.color.copy(z).multiplyScalar(H),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),s.rectArea[A]=X,A++}else if(C.isPointLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity*E),X.distance=C.distance,X.decay=C.decay,C.castShadow){const Y=C.shadow,Q=n.get(C);Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,Q.shadowCameraNear=Y.camera.near,Q.shadowCameraFar=Y.camera.far,s.pointShadow[f]=Q,s.pointShadowMap[f]=k,s.pointShadowMatrix[f]=C.shadow.matrix,D++}s.point[f]=X,f++}else if(C.isHemisphereLight){const X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(H*E),X.groundColor.copy(C.groundColor).multiplyScalar(H*E),s.hemi[T]=X,T++}}A>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_FLOAT_1,s.rectAreaLTC2=nt.LTC_FLOAT_2):(s.rectAreaLTC1=nt.LTC_HALF_1,s.rectAreaLTC2=nt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_FLOAT_1,s.rectAreaLTC2=nt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_HALF_1,s.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=M;const V=s.hash;(V.directionalLength!==x||V.pointLength!==f||V.spotLength!==h||V.rectAreaLength!==A||V.hemiLength!==T||V.numDirectionalShadows!==w||V.numPointShadows!==D||V.numSpotShadows!==v||V.numSpotMaps!==b||V.numLightProbes!==g)&&(s.directional.length=x,s.spot.length=h,s.rectArea.length=A,s.point.length=f,s.hemi.length=T,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=v,s.spotShadowMap.length=v,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=v+b-P,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=g,V.directionalLength=x,V.pointLength=f,V.spotLength=h,V.rectAreaLength=A,V.hemiLength=T,V.numDirectionalShadows=w,V.numPointShadows=D,V.numSpotShadows=v,V.numSpotMaps=b,V.numLightProbes=g,s.version=uf++)}function c(u,d){let p=0,m=0,M=0,x=0,f=0;const h=d.matrixWorldInverse;for(let A=0,T=u.length;A<T;A++){const w=u[A];if(w.isDirectionalLight){const D=s.directional[p];D.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(h),p++}else if(w.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(h),D.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(h),M++}else if(w.isRectAreaLight){const D=s.rectArea[x];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(h),a.identity(),o.copy(w.matrixWorld),o.premultiply(h),a.extractRotation(o),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){const D=s.point[m];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(h),m++}else if(w.isHemisphereLight){const D=s.hemi[f];D.direction.setFromMatrixPosition(w.matrixWorld),D.direction.transformDirection(h),f++}}}return{setup:l,setupView:c,state:s}}function Ca(i,t){const e=new ff(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function pf(i,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Ca(i,t),e.set(r,[l])):o>=a.length?(l=new Ca(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}class mf extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gf extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _f=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xf(i,t,e){let n=new tr;const s=new kt,r=new kt,o=new ue,a=new mf({depthPacking:ul}),l=new gf,c={},u=e.maxTextureSize,d={[dn]:Te,[Te]:dn,[$e]:$e},p=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:_f,fragmentShader:vf}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const M=new Pn;M.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new bt(M,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fa;let h=this.type;this.render=function(v,b,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||v.length===0)return;const g=i.getRenderTarget(),E=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),W=i.state;W.setBlending(cn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const it=h!==Ze&&this.type===Ze,C=h===Ze&&this.type!==Ze;for(let z=0,H=v.length;z<H;z++){const q=v[z],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const X=k.getFrameExtents();if(s.multiply(X),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,k.mapSize.y=r.y)),k.map===null||it===!0||C===!0){const Q=this.type!==Ze?{minFilter:_e,magFilter:_e}:{};k.map!==null&&k.map.dispose(),k.map=new Cn(s.x,s.y,Q),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const Y=k.getViewportCount();for(let Q=0;Q<Y;Q++){const tt=k.getViewport(Q);o.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),W.viewport(o),k.updateMatrices(q,Q),n=k.getFrustum(),w(b,P,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===Ze&&A(k,P),k.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(g,E,V)};function A(v,b){const P=t.update(x);p.defines.VSM_SAMPLES!==v.blurSamples&&(p.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Cn(s.x,s.y)),p.uniforms.shadow_pass.value=v.map.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(b,null,P,p,x,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(b,null,P,m,x,null)}function T(v,b,P,g){let E=null;const V=P.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(V!==void 0)E=V;else if(E=P.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const W=E.uuid,it=b.uuid;let C=c[W];C===void 0&&(C={},c[W]=C);let z=C[it];z===void 0&&(z=E.clone(),C[it]=z,b.addEventListener("dispose",D)),E=z}if(E.visible=b.visible,E.wireframe=b.wireframe,g===Ze?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:d[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const W=i.properties.get(E);W.light=P}return E}function w(v,b,P,g,E){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&E===Ze)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,v.matrixWorld);const it=t.update(v),C=v.material;if(Array.isArray(C)){const z=it.groups;for(let H=0,q=z.length;H<q;H++){const k=z[H],X=C[k.materialIndex];if(X&&X.visible){const Y=T(v,X,g,E);v.onBeforeShadow(i,v,b,P,it,Y,k),i.renderBufferDirect(P,null,it,Y,v,k),v.onAfterShadow(i,v,b,P,it,Y,k)}}}else if(C.visible){const z=T(v,C,g,E);v.onBeforeShadow(i,v,b,P,it,z,null),i.renderBufferDirect(P,null,it,z,v,null),v.onAfterShadow(i,v,b,P,it,z,null)}}const W=v.children;for(let it=0,C=W.length;it<C;it++)w(W[it],b,P,g,E)}function D(v){v.target.removeEventListener("dispose",D);for(const P in c){const g=c[P],E=v.target.uuid;E in g&&(g[E].dispose(),delete g[E])}}}function Mf(i,t,e){const n=e.isWebGL2;function s(){let R=!1;const st=new ue;let rt=null;const Et=new ue(0,0,0,0);return{setMask:function(vt){rt!==vt&&!R&&(i.colorMask(vt,vt,vt,vt),rt=vt)},setLocked:function(vt){R=vt},setClear:function(vt,Yt,Kt,le,xe){xe===!0&&(vt*=le,Yt*=le,Kt*=le),st.set(vt,Yt,Kt,le),Et.equals(st)===!1&&(i.clearColor(vt,Yt,Kt,le),Et.copy(st))},reset:function(){R=!1,rt=null,Et.set(-1,0,0,0)}}}function r(){let R=!1,st=null,rt=null,Et=null;return{setTest:function(vt){vt?Lt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(vt){st!==vt&&!R&&(i.depthMask(vt),st=vt)},setFunc:function(vt){if(rt!==vt){switch(vt){case zo:i.depthFunc(i.NEVER);break;case Go:i.depthFunc(i.ALWAYS);break;case Ho:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case ko:i.depthFunc(i.GEQUAL);break;case Wo:i.depthFunc(i.GREATER);break;case Xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=vt}},setLocked:function(vt){R=vt},setClear:function(vt){Et!==vt&&(i.clearDepth(vt),Et=vt)},reset:function(){R=!1,st=null,rt=null,Et=null}}}function o(){let R=!1,st=null,rt=null,Et=null,vt=null,Yt=null,Kt=null,le=null,xe=null;return{setTest:function(jt){R||(jt?Lt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(jt){st!==jt&&!R&&(i.stencilMask(jt),st=jt)},setFunc:function(jt,Me,Ve){(rt!==jt||Et!==Me||vt!==Ve)&&(i.stencilFunc(jt,Me,Ve),rt=jt,Et=Me,vt=Ve)},setOp:function(jt,Me,Ve){(Yt!==jt||Kt!==Me||le!==Ve)&&(i.stencilOp(jt,Me,Ve),Yt=jt,Kt=Me,le=Ve)},setLocked:function(jt){R=jt},setClear:function(jt){xe!==jt&&(i.clearStencil(jt),xe=jt)},reset:function(){R=!1,st=null,rt=null,Et=null,vt=null,Yt=null,Kt=null,le=null,xe=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,d=new WeakMap;let p={},m={},M=new WeakMap,x=[],f=null,h=!1,A=null,T=null,w=null,D=null,v=null,b=null,P=null,g=new zt(0,0,0),E=0,V=!1,W=null,it=null,C=null,z=null,H=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=X>=2);let Q=null,tt={};const G=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),ot=new ue().fromArray(G),mt=new ue().fromArray(K);function pt(R,st,rt,Et){const vt=new Uint8Array(4),Yt=i.createTexture();i.bindTexture(R,Yt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<rt;Kt++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(st,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(st+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return Yt}const Rt={};Rt[i.TEXTURE_2D]=pt(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Rt[i.TEXTURE_2D_ARRAY]=pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Lt(i.DEPTH_TEST),l.setFunc(Yi),Ut(!1),y(hr),Lt(i.CULL_FACE),ut(cn);function Lt(R){p[R]!==!0&&(i.enable(R),p[R]=!0)}function St(R){p[R]!==!1&&(i.disable(R),p[R]=!1)}function Vt(R,st){return m[R]!==st?(i.bindFramebuffer(R,st),m[R]=st,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=st),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=st)),!0):!1}function U(R,st){let rt=x,Et=!1;if(R)if(rt=M.get(st),rt===void 0&&(rt=[],M.set(st,rt)),R.isWebGLMultipleRenderTargets){const vt=R.texture;if(rt.length!==vt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Yt=0,Kt=vt.length;Yt<Kt;Yt++)rt[Yt]=i.COLOR_ATTACHMENT0+Yt;rt.length=vt.length,Et=!0}}else rt[0]!==i.COLOR_ATTACHMENT0&&(rt[0]=i.COLOR_ATTACHMENT0,Et=!0);else rt[0]!==i.BACK&&(rt[0]=i.BACK,Et=!0);Et&&(e.isWebGL2?i.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function ve(R){return f!==R?(i.useProgram(R),f=R,!0):!1}const _t={[yn]:i.FUNC_ADD,[To]:i.FUNC_SUBTRACT,[bo]:i.FUNC_REVERSE_SUBTRACT};if(n)_t[pr]=i.MIN,_t[mr]=i.MAX;else{const R=t.get("EXT_blend_minmax");R!==null&&(_t[pr]=R.MIN_EXT,_t[mr]=R.MAX_EXT)}const At={[Ao]:i.ZERO,[wo]:i.ONE,[Ro]:i.SRC_COLOR,[Gs]:i.SRC_ALPHA,[Io]:i.SRC_ALPHA_SATURATE,[Do]:i.DST_COLOR,[Lo]:i.DST_ALPHA,[Co]:i.ONE_MINUS_SRC_COLOR,[Hs]:i.ONE_MINUS_SRC_ALPHA,[Uo]:i.ONE_MINUS_DST_COLOR,[Po]:i.ONE_MINUS_DST_ALPHA,[No]:i.CONSTANT_COLOR,[Fo]:i.ONE_MINUS_CONSTANT_COLOR,[Oo]:i.CONSTANT_ALPHA,[Bo]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(R,st,rt,Et,vt,Yt,Kt,le,xe,jt){if(R===cn){h===!0&&(St(i.BLEND),h=!1);return}if(h===!1&&(Lt(i.BLEND),h=!0),R!==yo){if(R!==A||jt!==V){if((T!==yn||v!==yn)&&(i.blendEquation(i.FUNC_ADD),T=yn,v=yn),jt)switch(R){case $n:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ur:i.blendFunc(i.ONE,i.ONE);break;case dr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case $n:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ur:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,D=null,b=null,P=null,g.set(0,0,0),E=0,A=R,V=jt}return}vt=vt||st,Yt=Yt||rt,Kt=Kt||Et,(st!==T||vt!==v)&&(i.blendEquationSeparate(_t[st],_t[vt]),T=st,v=vt),(rt!==w||Et!==D||Yt!==b||Kt!==P)&&(i.blendFuncSeparate(At[rt],At[Et],At[Yt],At[Kt]),w=rt,D=Et,b=Yt,P=Kt),(le.equals(g)===!1||xe!==E)&&(i.blendColor(le.r,le.g,le.b,xe),g.copy(le),E=xe),A=R,V=!1}function $t(R,st){R.side===$e?St(i.CULL_FACE):Lt(i.CULL_FACE);let rt=R.side===Te;st&&(rt=!rt),Ut(rt),R.blending===$n&&R.transparent===!1?ut(cn):ut(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const Et=R.stencilWrite;c.setTest(Et),Et&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),F(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Lt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(R){W!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),W=R)}function y(R){R!==So?(Lt(i.CULL_FACE),R!==it&&(R===hr?i.cullFace(i.BACK):R===Eo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),it=R}function _(R){R!==C&&(k&&i.lineWidth(R),C=R)}function F(R,st,rt){R?(Lt(i.POLYGON_OFFSET_FILL),(z!==st||H!==rt)&&(i.polygonOffset(st,rt),z=st,H=rt)):St(i.POLYGON_OFFSET_FILL)}function $(R){R?Lt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function Z(R){R===void 0&&(R=i.TEXTURE0+q-1),Q!==R&&(i.activeTexture(R),Q=R)}function J(R,st,rt){rt===void 0&&(Q===null?rt=i.TEXTURE0+q-1:rt=Q);let Et=tt[rt];Et===void 0&&(Et={type:void 0,texture:void 0},tt[rt]=Et),(Et.type!==R||Et.texture!==st)&&(Q!==rt&&(i.activeTexture(rt),Q=rt),i.bindTexture(R,st||Rt[R]),Et.type=R,Et.texture=st)}function dt(){const R=tt[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ct(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Mt(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Tt(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ht(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pt(R){ot.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),ot.copy(R))}function Wt(R){mt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),mt.copy(R))}function Qt(R,st){let rt=d.get(st);rt===void 0&&(rt=new WeakMap,d.set(st,rt));let Et=rt.get(R);Et===void 0&&(Et=i.getUniformBlockIndex(st,R.name),rt.set(R,Et))}function Ft(R,st){const Et=d.get(st).get(R);u.get(st)!==Et&&(i.uniformBlockBinding(st,Et,R.__bindingPointIndex),u.set(st,Et))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},Q=null,tt={},m={},M=new WeakMap,x=[],f=null,h=!1,A=null,T=null,w=null,D=null,v=null,b=null,P=null,g=new zt(0,0,0),E=0,V=!1,W=null,it=null,C=null,z=null,H=null,ot.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Lt,disable:St,bindFramebuffer:Vt,drawBuffers:U,useProgram:ve,setBlending:ut,setMaterial:$t,setFlipSided:Ut,setCullFace:y,setLineWidth:_,setPolygonOffset:F,setScissorTest:$,activeTexture:Z,bindTexture:J,unbindTexture:dt,compressedTexImage2D:at,compressedTexImage3D:ct,texImage2D:gt,texImage3D:ht,updateUBOMapping:Qt,uniformBlockBinding:Ft,texStorage2D:Gt,texStorage3D:Tt,texSubImage2D:Mt,texSubImage3D:It,compressedTexSubImage2D:j,compressedTexSubImage3D:Xt,scissor:Pt,viewport:Wt,reset:et}}function Sf(i,t,e,n,s,r,o){const a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(y,_){return m?new OffscreenCanvas(y,_):Ji("canvas")}function x(y,_,F,$){let Z=1;if((y.width>$||y.height>$)&&(Z=$/Math.max(y.width,y.height)),Z<1||_===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const J=_?Ys:Math.floor,dt=J(Z*y.width),at=J(Z*y.height);d===void 0&&(d=M(dt,at));const ct=F?M(dt,at):d;return ct.width=dt,ct.height=at,ct.getContext("2d").drawImage(y,0,0,dt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+dt+"x"+at+")."),ct}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function f(y){return Xr(y.width)&&Xr(y.height)}function h(y){return a?!1:y.wrapS!==ze||y.wrapT!==ze||y.minFilter!==_e&&y.minFilter!==De}function A(y,_){return y.generateMipmaps&&_&&y.minFilter!==_e&&y.minFilter!==De}function T(y){i.generateMipmap(y)}function w(y,_,F,$,Z=!1){if(a===!1)return _;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let J=_;if(_===i.RED&&(F===i.FLOAT&&(J=i.R32F),F===i.HALF_FLOAT&&(J=i.R16F),F===i.UNSIGNED_BYTE&&(J=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.R8UI),F===i.UNSIGNED_SHORT&&(J=i.R16UI),F===i.UNSIGNED_INT&&(J=i.R32UI),F===i.BYTE&&(J=i.R8I),F===i.SHORT&&(J=i.R16I),F===i.INT&&(J=i.R32I)),_===i.RG&&(F===i.FLOAT&&(J=i.RG32F),F===i.HALF_FLOAT&&(J=i.RG16F),F===i.UNSIGNED_BYTE&&(J=i.RG8)),_===i.RGBA){const dt=Z?Ki:qt.getTransfer($);F===i.FLOAT&&(J=i.RGBA32F),F===i.HALF_FLOAT&&(J=i.RGBA16F),F===i.UNSIGNED_BYTE&&(J=dt===Zt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function D(y,_,F){return A(y,F)===!0||y.isFramebufferTexture&&y.minFilter!==_e&&y.minFilter!==De?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function v(y){return y===_e||y===gr||y===os?i.NEAREST:i.LINEAR}function b(y){const _=y.target;_.removeEventListener("dispose",b),g(_),_.isVideoTexture&&u.delete(_)}function P(y){const _=y.target;_.removeEventListener("dispose",P),V(_)}function g(y){const _=n.get(y);if(_.__webglInit===void 0)return;const F=y.source,$=p.get(F);if($){const Z=$[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(y),Object.keys($).length===0&&p.delete(F)}n.remove(y)}function E(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const F=y.source,$=p.get(F);delete $[_.__cacheKey],o.memory.textures--}function V(y){const _=y.texture,F=n.get(y),$=n.get(_);if($.__webglTexture!==void 0&&(i.deleteTexture($.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(F.__webglFramebuffer[Z]))for(let J=0;J<F.__webglFramebuffer[Z].length;J++)i.deleteFramebuffer(F.__webglFramebuffer[Z][J]);else i.deleteFramebuffer(F.__webglFramebuffer[Z]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[Z])}else{if(Array.isArray(F.__webglFramebuffer))for(let Z=0;Z<F.__webglFramebuffer.length;Z++)i.deleteFramebuffer(F.__webglFramebuffer[Z]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Z=0;Z<F.__webglColorRenderbuffer.length;Z++)F.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let Z=0,J=_.length;Z<J;Z++){const dt=n.get(_[Z]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(_[Z])}n.remove(_),n.remove(y)}let W=0;function it(){W=0}function C(){const y=W;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),W+=1,y}function z(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function H(y,_){const F=n.get(y);if(y.isVideoTexture&&$t(y),y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){const $=y.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(F,y,_);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function q(y,_){const F=n.get(y);if(y.version>0&&F.__version!==y.version){ot(F,y,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function k(y,_){const F=n.get(y);if(y.version>0&&F.__version!==y.version){ot(F,y,_);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function X(y,_){const F=n.get(y);if(y.version>0&&F.__version!==y.version){mt(F,y,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const Y={[mi]:i.REPEAT,[ze]:i.CLAMP_TO_EDGE,[Ws]:i.MIRRORED_REPEAT},Q={[_e]:i.NEAREST,[gr]:i.NEAREST_MIPMAP_NEAREST,[os]:i.NEAREST_MIPMAP_LINEAR,[De]:i.LINEAR,[tl]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},tt={[fl]:i.NEVER,[xl]:i.ALWAYS,[pl]:i.LESS,[Ya]:i.LEQUAL,[ml]:i.EQUAL,[vl]:i.GEQUAL,[gl]:i.GREATER,[_l]:i.NOTEQUAL};function G(y,_,F){if(F?(i.texParameteri(y,i.TEXTURE_WRAP_S,Y[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,Y[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,Y[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,Q[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,Q[_.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==ze||_.wrapT!==ze)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,v(_.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,v(_.minFilter)),_.minFilter!==_e&&_.minFilter!==De&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,tt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const $=t.get("EXT_texture_filter_anisotropic");if(_.magFilter===_e||_.minFilter!==os&&_.minFilter!==gi||_.type===ln&&t.has("OES_texture_float_linear")===!1||a===!1&&_.type===_i&&t.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(y,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function K(y,_){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",b));const $=_.source;let Z=p.get($);Z===void 0&&(Z={},p.set($,Z));const J=z(_);if(J!==y.__cacheKey){Z[J]===void 0&&(Z[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[J].usedTimes++;const dt=Z[y.__cacheKey];dt!==void 0&&(Z[y.__cacheKey].usedTimes--,dt.usedTimes===0&&E(_)),y.__cacheKey=J,y.__webglTexture=Z[J].texture}return F}function ot(y,_,F){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);const Z=K(y,_),J=_.source;e.bindTexture($,y.__webglTexture,i.TEXTURE0+F);const dt=n.get(J);if(J.version!==dt.__version||Z===!0){e.activeTexture(i.TEXTURE0+F);const at=qt.getPrimaries(qt.workingColorSpace),ct=_.colorSpace===Ie?null:qt.getPrimaries(_.colorSpace),Mt=_.colorSpace===Ie||at===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const It=h(_)&&f(_.image)===!1;let j=x(_.image,It,!1,s.maxTextureSize);j=Ut(_,j);const Xt=f(j)||a,Gt=r.convert(_.format,_.colorSpace);let Tt=r.convert(_.type),gt=w(_.internalFormat,Gt,Tt,_.colorSpace,_.isVideoTexture);G($,_,Xt);let ht;const Pt=_.mipmaps,Wt=a&&_.isVideoTexture!==!0&&gt!==Xa,Qt=dt.__version===void 0||Z===!0,Ft=D(_,j,Xt);if(_.isDepthTexture)gt=i.DEPTH_COMPONENT,a?_.type===ln?gt=i.DEPTH_COMPONENT32F:_.type===on?gt=i.DEPTH_COMPONENT24:_.type===bn?gt=i.DEPTH24_STENCIL8:gt=i.DEPTH_COMPONENT16:_.type===ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===An&&gt===i.DEPTH_COMPONENT&&_.type!==$s&&_.type!==on&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=on,Tt=r.convert(_.type)),_.format===ei&&gt===i.DEPTH_COMPONENT&&(gt=i.DEPTH_STENCIL,_.type!==bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=bn,Tt=r.convert(_.type))),Qt&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,gt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,gt,j.width,j.height,0,Gt,Tt,null));else if(_.isDataTexture)if(Pt.length>0&&Xt){Wt&&Qt&&e.texStorage2D(i.TEXTURE_2D,Ft,gt,Pt[0].width,Pt[0].height);for(let et=0,R=Pt.length;et<R;et++)ht=Pt[et],Wt?e.texSubImage2D(i.TEXTURE_2D,et,0,0,ht.width,ht.height,Gt,Tt,ht.data):e.texImage2D(i.TEXTURE_2D,et,gt,ht.width,ht.height,0,Gt,Tt,ht.data);_.generateMipmaps=!1}else Wt?(Qt&&e.texStorage2D(i.TEXTURE_2D,Ft,gt,j.width,j.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,Gt,Tt,j.data)):e.texImage2D(i.TEXTURE_2D,0,gt,j.width,j.height,0,Gt,Tt,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Wt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,gt,Pt[0].width,Pt[0].height,j.depth);for(let et=0,R=Pt.length;et<R;et++)ht=Pt[et],_.format!==Ge?Gt!==null?Wt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,j.depth,Gt,ht.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,gt,ht.width,ht.height,j.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,j.depth,Gt,Tt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,gt,ht.width,ht.height,j.depth,0,Gt,Tt,ht.data)}else{Wt&&Qt&&e.texStorage2D(i.TEXTURE_2D,Ft,gt,Pt[0].width,Pt[0].height);for(let et=0,R=Pt.length;et<R;et++)ht=Pt[et],_.format!==Ge?Gt!==null?Wt?e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,ht.width,ht.height,Gt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,et,gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage2D(i.TEXTURE_2D,et,0,0,ht.width,ht.height,Gt,Tt,ht.data):e.texImage2D(i.TEXTURE_2D,et,gt,ht.width,ht.height,0,Gt,Tt,ht.data)}else if(_.isDataArrayTexture)Wt?(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,gt,j.width,j.height,j.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Gt,Tt,j.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,j.width,j.height,j.depth,0,Gt,Tt,j.data);else if(_.isData3DTexture)Wt?(Qt&&e.texStorage3D(i.TEXTURE_3D,Ft,gt,j.width,j.height,j.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Gt,Tt,j.data)):e.texImage3D(i.TEXTURE_3D,0,gt,j.width,j.height,j.depth,0,Gt,Tt,j.data);else if(_.isFramebufferTexture){if(Qt)if(Wt)e.texStorage2D(i.TEXTURE_2D,Ft,gt,j.width,j.height);else{let et=j.width,R=j.height;for(let st=0;st<Ft;st++)e.texImage2D(i.TEXTURE_2D,st,gt,et,R,0,Gt,Tt,null),et>>=1,R>>=1}}else if(Pt.length>0&&Xt){Wt&&Qt&&e.texStorage2D(i.TEXTURE_2D,Ft,gt,Pt[0].width,Pt[0].height);for(let et=0,R=Pt.length;et<R;et++)ht=Pt[et],Wt?e.texSubImage2D(i.TEXTURE_2D,et,0,0,Gt,Tt,ht):e.texImage2D(i.TEXTURE_2D,et,gt,Gt,Tt,ht);_.generateMipmaps=!1}else Wt?(Qt&&e.texStorage2D(i.TEXTURE_2D,Ft,gt,j.width,j.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Gt,Tt,j)):e.texImage2D(i.TEXTURE_2D,0,gt,Gt,Tt,j);A(_,Xt)&&T($),dt.__version=J.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function mt(y,_,F){if(_.image.length!==6)return;const $=K(y,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+F);const J=n.get(Z);if(Z.version!==J.__version||$===!0){e.activeTexture(i.TEXTURE0+F);const dt=qt.getPrimaries(qt.workingColorSpace),at=_.colorSpace===Ie?null:qt.getPrimaries(_.colorSpace),ct=_.colorSpace===Ie||dt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Mt=_.isCompressedTexture||_.image[0].isCompressedTexture,It=_.image[0]&&_.image[0].isDataTexture,j=[];for(let et=0;et<6;et++)!Mt&&!It?j[et]=x(_.image[et],!1,!0,s.maxCubemapSize):j[et]=It?_.image[et].image:_.image[et],j[et]=Ut(_,j[et]);const Xt=j[0],Gt=f(Xt)||a,Tt=r.convert(_.format,_.colorSpace),gt=r.convert(_.type),ht=w(_.internalFormat,Tt,gt,_.colorSpace),Pt=a&&_.isVideoTexture!==!0,Wt=J.__version===void 0||$===!0;let Qt=D(_,Xt,Gt);G(i.TEXTURE_CUBE_MAP,_,Gt);let Ft;if(Mt){Pt&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Qt,ht,Xt.width,Xt.height);for(let et=0;et<6;et++){Ft=j[et].mipmaps;for(let R=0;R<Ft.length;R++){const st=Ft[R];_.format!==Ge?Tt!==null?Pt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,R,0,0,st.width,st.height,Tt,st.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,R,ht,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,R,0,0,st.width,st.height,Tt,gt,st.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,R,ht,st.width,st.height,0,Tt,gt,st.data)}}}else{Ft=_.mipmaps,Pt&&Wt&&(Ft.length>0&&Qt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Qt,ht,j[0].width,j[0].height));for(let et=0;et<6;et++)if(It){Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,j[et].width,j[et].height,Tt,gt,j[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ht,j[et].width,j[et].height,0,Tt,gt,j[et].data);for(let R=0;R<Ft.length;R++){const rt=Ft[R].image[et].image;Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,R+1,0,0,rt.width,rt.height,Tt,gt,rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,R+1,ht,rt.width,rt.height,0,Tt,gt,rt.data)}}else{Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Tt,gt,j[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ht,Tt,gt,j[et]);for(let R=0;R<Ft.length;R++){const st=Ft[R];Pt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,R+1,0,0,Tt,gt,st.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,R+1,ht,Tt,gt,st.image[et])}}}A(_,Gt)&&T(i.TEXTURE_CUBE_MAP),J.__version=Z.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function pt(y,_,F,$,Z,J){const dt=r.convert(F.format,F.colorSpace),at=r.convert(F.type),ct=w(F.internalFormat,dt,at,F.colorSpace);if(!n.get(_).__hasExternalTextures){const It=Math.max(1,_.width>>J),j=Math.max(1,_.height>>J);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,J,ct,It,j,_.depth,0,dt,at,null):e.texImage2D(Z,J,ct,It,j,0,dt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),ut(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,n.get(F).__webglTexture,0,At(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,n.get(F).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(y,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer&&!_.stencilBuffer){let $=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||ut(_)){const Z=_.depthTexture;Z&&Z.isDepthTexture&&(Z.type===ln?$=i.DEPTH_COMPONENT32F:Z.type===on&&($=i.DEPTH_COMPONENT24));const J=At(_);ut(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,$,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,$,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(_.depthBuffer&&_.stencilBuffer){const $=At(_);F&&ut(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,_.width,_.height):ut(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{const $=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Z=0;Z<$.length;Z++){const J=$[Z],dt=r.convert(J.format,J.colorSpace),at=r.convert(J.type),ct=w(J.internalFormat,dt,at,J.colorSpace),Mt=At(_);F&&ut(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,ct,_.width,_.height):ut(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,ct,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ct,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H(_.depthTexture,0);const $=n.get(_.depthTexture).__webglTexture,Z=At(_);if(_.depthTexture.format===An)ut(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(_.depthTexture.format===ei)ut(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function St(y){const _=n.get(y),F=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Lt(_.__webglFramebuffer,y)}else if(F){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]=i.createRenderbuffer(),Rt(_.__webglDepthbuffer[$],y,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),Rt(_.__webglDepthbuffer,y,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(y,_,F){const $=n.get(y);_!==void 0&&pt($.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&St(y)}function U(y){const _=y.texture,F=n.get(y),$=n.get(_);y.addEventListener("dispose",P),y.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,o.memory.textures++);const Z=y.isWebGLCubeRenderTarget===!0,J=y.isWebGLMultipleRenderTargets===!0,dt=f(y)||a;if(Z){F.__webglFramebuffer=[];for(let at=0;at<6;at++)if(a&&_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[at]=[];for(let ct=0;ct<_.mipmaps.length;ct++)F.__webglFramebuffer[at][ct]=i.createFramebuffer()}else F.__webglFramebuffer[at]=i.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)F.__webglFramebuffer[at]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(J)if(s.drawBuffers){const at=y.texture;for(let ct=0,Mt=at.length;ct<Mt;ct++){const It=n.get(at[ct]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&ut(y)===!1){const at=J?_:[_];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ct=0;ct<at.length;ct++){const Mt=at[ct];F.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ct]);const It=r.convert(Mt.format,Mt.colorSpace),j=r.convert(Mt.type),Xt=w(Mt.internalFormat,It,j,Mt.colorSpace,y.isXRRenderTarget===!0),Gt=At(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Xt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,F.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Rt(F.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),G(i.TEXTURE_CUBE_MAP,_,dt);for(let at=0;at<6;at++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let ct=0;ct<_.mipmaps.length;ct++)pt(F.__webglFramebuffer[at][ct],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct);else pt(F.__webglFramebuffer[at],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);A(_,dt)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(J){const at=y.texture;for(let ct=0,Mt=at.length;ct<Mt;ct++){const It=at[ct],j=n.get(It);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),G(i.TEXTURE_2D,It,dt),pt(F.__webglFramebuffer,y,It,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),A(It,dt)&&T(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?at=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,$.__webglTexture),G(at,_,dt),a&&_.mipmaps&&_.mipmaps.length>0)for(let ct=0;ct<_.mipmaps.length;ct++)pt(F.__webglFramebuffer[ct],y,_,i.COLOR_ATTACHMENT0,at,ct);else pt(F.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,at,0);A(_,dt)&&T(at),e.unbindTexture()}y.depthBuffer&&St(y)}function ve(y){const _=f(y)||a,F=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let $=0,Z=F.length;$<Z;$++){const J=F[$];if(A(J,_)){const dt=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,at=n.get(J).__webglTexture;e.bindTexture(dt,at),T(dt),e.unbindTexture()}}}function _t(y){if(a&&y.samples>0&&ut(y)===!1){const _=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],F=y.width,$=y.height;let Z=i.COLOR_BUFFER_BIT;const J=[],dt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(y),ct=y.isWebGLMultipleRenderTargets===!0;if(ct)for(let Mt=0;Mt<_.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let Mt=0;Mt<_.length;Mt++){J.push(i.COLOR_ATTACHMENT0+Mt),y.depthBuffer&&J.push(dt);const It=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(It===!1&&(y.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ct&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[Mt]),It===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[dt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[dt])),ct){const j=n.get(_[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,F,$,0,0,F,$,Z,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let Mt=0;Mt<_.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,at.__webglColorRenderbuffer[Mt]);const It=n.get(_[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function At(y){return Math.min(s.maxSamples,y.samples)}function ut(y){const _=n.get(y);return a&&y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function $t(y){const _=o.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function Ut(y,_){const F=y.colorSpace,$=y.format,Z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Xs||F!==tn&&F!==Ie&&(qt.getTransfer(F)===Zt?a===!1?t.has("EXT_sRGB")===!0&&$===Ge?(y.format=Xs,y.minFilter=De,y.generateMipmaps=!1):_=ja.sRGBToLinear(_):($!==Ge||Z!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}this.allocateTextureUnit=C,this.resetTextureUnits=it,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=k,this.setTextureCube=X,this.rebindTextures=Vt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ut}function Ef(i,t,e){const n=e.isWebGL2;function s(r,o=Ie){let a;const l=qt.getTransfer(o);if(r===un)return i.UNSIGNED_BYTE;if(r===Ga)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ha)return i.UNSIGNED_SHORT_5_5_5_1;if(r===nl)return i.BYTE;if(r===il)return i.SHORT;if(r===$s)return i.UNSIGNED_SHORT;if(r===za)return i.INT;if(r===on)return i.UNSIGNED_INT;if(r===ln)return i.FLOAT;if(r===_i)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===sl)return i.ALPHA;if(r===Ge)return i.RGBA;if(r===rl)return i.LUMINANCE;if(r===al)return i.LUMINANCE_ALPHA;if(r===An)return i.DEPTH_COMPONENT;if(r===ei)return i.DEPTH_STENCIL;if(r===Xs)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ol)return i.RED;if(r===Va)return i.RED_INTEGER;if(r===ll)return i.RG;if(r===ka)return i.RG_INTEGER;if(r===Wa)return i.RGBA_INTEGER;if(r===ls||r===cs||r===hs||r===us)if(l===Zt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ls)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ls)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===cs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===us)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_r||r===vr||r===xr||r===Mr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===_r)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xa)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Sr||r===Er)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Sr)return l===Zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Er)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yr||r===Tr||r===br||r===Ar||r===wr||r===Rr||r===Cr||r===Lr||r===Pr||r===Dr||r===Ur||r===Ir||r===Nr||r===Fr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===yr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Tr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===br)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ar)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Cr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Lr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Dr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ur)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ir)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Fr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ds||r===Or||r===Br)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===ds)return l===Zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Or)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Br)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cl||r===zr||r===Gr||r===Hr)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===ds)return a.COMPRESSED_RED_RGTC1_EXT;if(r===zr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bn?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class yf extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class re extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tf={type:"move"};class Os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const f=e.getJointPose(x,n),h=this._getHandJoint(c,x);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,M=.005;c.inputState.pinching&&p>m+M?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-M&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class bf extends ii{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,p=null,m=null,M=null;const x=e.getContextAttributes();let f=null,h=null;const A=[],T=[],w=new kt;let D=null;const v=new Ue;v.layers.enable(1),v.viewport=new ue;const b=new Ue;b.layers.enable(2),b.viewport=new ue;const P=[v,b],g=new yf;g.layers.enable(1),g.layers.enable(2);let E=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=A[G];return K===void 0&&(K=new Os,A[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=A[G];return K===void 0&&(K=new Os,A[G]=K),K.getGripSpace()},this.getHand=function(G){let K=A[G];return K===void 0&&(K=new Os,A[G]=K),K.getHandSpace()};function W(G){const K=T.indexOf(G.inputSource);if(K===-1)return;const ot=A[K];ot!==void 0&&(ot.update(G.inputSource,G.frame,c||o),ot.dispatchEvent({type:G.type,data:G.inputSource}))}function it(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",it),s.removeEventListener("inputsourceschange",C);for(let G=0;G<A.length;G++){const K=T[G];K!==null&&(T[G]=null,A[G].disconnect(K))}E=null,V=null,t.setRenderTarget(f),m=null,p=null,d=null,s=null,h=null,tt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",it),s.addEventListener("inputsourceschange",C),x.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new Cn(m.framebufferWidth,m.framebufferHeight,{format:Ge,type:un,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,ot=null,mt=null;x.depth&&(mt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=x.stencil?ei:An,ot=x.stencil?bn:on);const pt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=new XRWebGLBinding(s,e),p=d.createProjectionLayer(pt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),h=new Cn(p.textureWidth,p.textureHeight,{format:Ge,type:un,depthTexture:new oo(p.textureWidth,p.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const Rt=t.properties.get(h);Rt.__ignoreDepthValues=p.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function C(G){for(let K=0;K<G.removed.length;K++){const ot=G.removed[K],mt=T.indexOf(ot);mt>=0&&(T[mt]=null,A[mt].disconnect(ot))}for(let K=0;K<G.added.length;K++){const ot=G.added[K];let mt=T.indexOf(ot);if(mt===-1){for(let Rt=0;Rt<A.length;Rt++)if(Rt>=T.length){T.push(ot),mt=Rt;break}else if(T[Rt]===null){T[Rt]=ot,mt=Rt;break}if(mt===-1)break}const pt=A[mt];pt&&pt.connect(ot)}}const z=new N,H=new N;function q(G,K,ot){z.setFromMatrixPosition(K.matrixWorld),H.setFromMatrixPosition(ot.matrixWorld);const mt=z.distanceTo(H),pt=K.projectionMatrix.elements,Rt=ot.projectionMatrix.elements,Lt=pt[14]/(pt[10]-1),St=pt[14]/(pt[10]+1),Vt=(pt[9]+1)/pt[5],U=(pt[9]-1)/pt[5],ve=(pt[8]-1)/pt[0],_t=(Rt[8]+1)/Rt[0],At=Lt*ve,ut=Lt*_t,$t=mt/(-ve+_t),Ut=$t*-ve;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ut),G.translateZ($t),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const y=Lt+$t,_=St+$t,F=At-Ut,$=ut+(mt-Ut),Z=Vt*St/_*y,J=U*St/_*y;G.projectionMatrix.makePerspective(F,$,Z,J,y,_),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function k(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;g.near=b.near=v.near=G.near,g.far=b.far=v.far=G.far,(E!==g.near||V!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),E=g.near,V=g.far);const K=G.parent,ot=g.cameras;k(g,K);for(let mt=0;mt<ot.length;mt++)k(ot[mt],K);ot.length===2?q(g,v,b):g.projectionMatrix.copy(v.projectionMatrix),X(G,g,K)};function X(G,K,ot){ot===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(ot.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=qs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(G){l=G,p!==null&&(p.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let Y=null;function Q(G,K){if(u=K.getViewerPose(c||o),M=K,u!==null){const ot=u.views;m!==null&&(t.setRenderTargetFramebuffer(h,m.framebuffer),t.setRenderTarget(h));let mt=!1;ot.length!==g.cameras.length&&(g.cameras.length=0,mt=!0);for(let pt=0;pt<ot.length;pt++){const Rt=ot[pt];let Lt=null;if(m!==null)Lt=m.getViewport(Rt);else{const Vt=d.getViewSubImage(p,Rt);Lt=Vt.viewport,pt===0&&(t.setRenderTargetTextures(h,Vt.colorTexture,p.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(h))}let St=P[pt];St===void 0&&(St=new Ue,St.layers.enable(pt),St.viewport=new ue,P[pt]=St),St.matrix.fromArray(Rt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Rt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),pt===0&&(g.matrix.copy(St.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),mt===!0&&g.cameras.push(St)}}for(let ot=0;ot<A.length;ot++){const mt=T[ot],pt=A[ot];mt!==null&&pt!==void 0&&pt.update(mt,K,c||o)}Y&&Y(G,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),M=null}const tt=new ro;tt.setAnimationLoop(Q),this.setAnimationLoop=function(G){Y=G},this.dispose=function(){}}}function Af(i,t){function e(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,no(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function s(f,h,A,T,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(f,h):h.isMeshToonMaterial?(r(f,h),d(f,h)):h.isMeshPhongMaterial?(r(f,h),u(f,h)):h.isMeshStandardMaterial?(r(f,h),p(f,h),h.isMeshPhysicalMaterial&&m(f,h,w)):h.isMeshMatcapMaterial?(r(f,h),M(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),x(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(o(f,h),h.isLineDashedMaterial&&a(f,h)):h.isPointsMaterial?l(f,h,A,T):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,e(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Te&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,e(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Te&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,e(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,e(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const A=t.get(h).envMap;if(A&&(f.envMap.value=A,f.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap){f.lightMap.value=h.lightMap;const T=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=h.lightMapIntensity*T,e(h.lightMap,f.lightMapTransform)}h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,f.aoMapTransform))}function o(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform))}function a(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,A,T){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*A,f.scale.value=T*.5,h.map&&(f.map.value=h.map,e(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function d(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function p(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,f.roughnessMapTransform)),t.get(h).envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,A){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Te&&f.clearcoatNormalScale.value.negate())),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=A.texture,f.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,f.specularIntensityMapTransform))}function M(f,h){h.matcap&&(f.matcap.value=h.matcap)}function x(f,h){const A=t.get(h).light;f.referencePosition.value.setFromMatrixPosition(A.matrixWorld),f.nearDistance.value=A.shadow.camera.near,f.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wf(i,t,e,n){let s={},r={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,T){const w=T.program;n.uniformBlockBinding(A,w)}function c(A,T){let w=s[A.id];w===void 0&&(M(A),w=u(A),s[A.id]=w,A.addEventListener("dispose",f));const D=T.program;n.updateUBOMapping(A,D);const v=t.render.frame;r[A.id]!==v&&(p(A),r[A.id]=v)}function u(A){const T=d();A.__bindingPointIndex=T;const w=i.createBuffer(),D=A.__size,v=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,D,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,w),w}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(A){const T=s[A.id],w=A.uniforms,D=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let v=0,b=w.length;v<b;v++){const P=Array.isArray(w[v])?w[v]:[w[v]];for(let g=0,E=P.length;g<E;g++){const V=P[g];if(m(V,v,g,D)===!0){const W=V.__offset,it=Array.isArray(V.value)?V.value:[V.value];let C=0;for(let z=0;z<it.length;z++){const H=it[z],q=x(H);typeof H=="number"||typeof H=="boolean"?(V.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,W+C,V.__data)):H.isMatrix3?(V.__data[0]=H.elements[0],V.__data[1]=H.elements[1],V.__data[2]=H.elements[2],V.__data[3]=0,V.__data[4]=H.elements[3],V.__data[5]=H.elements[4],V.__data[6]=H.elements[5],V.__data[7]=0,V.__data[8]=H.elements[6],V.__data[9]=H.elements[7],V.__data[10]=H.elements[8],V.__data[11]=0):(H.toArray(V.__data,C),C+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,T,w,D){const v=A.value,b=T+"_"+w;if(D[b]===void 0)return typeof v=="number"||typeof v=="boolean"?D[b]=v:D[b]=v.clone(),!0;{const P=D[b];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return D[b]=v,!0}else if(P.equals(v)===!1)return P.copy(v),!0}return!1}function M(A){const T=A.uniforms;let w=0;const D=16;for(let b=0,P=T.length;b<P;b++){const g=Array.isArray(T[b])?T[b]:[T[b]];for(let E=0,V=g.length;E<V;E++){const W=g[E],it=Array.isArray(W.value)?W.value:[W.value];for(let C=0,z=it.length;C<z;C++){const H=it[C],q=x(H),k=w%D;k!==0&&D-k<q.boundary&&(w+=D-k),W.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=q.storage}}}const v=w%D;return v>0&&(w+=D-v),A.__size=w,A.__cache={},this}function x(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function f(A){const T=A.target;T.removeEventListener("dispose",f);const w=o.indexOf(T.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function h(){for(const A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class po{constructor(t={}){const{canvas:e=Sl(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),M=new Int32Array(4);let x=null,f=null;const h=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this._useLegacyLights=!1,this.toneMapping=hn,this.toneMappingExposure=1;const T=this;let w=!1,D=0,v=0,b=null,P=-1,g=null;const E=new ue,V=new ue;let W=null;const it=new zt(0);let C=0,z=e.width,H=e.height,q=1,k=null,X=null;const Y=new ue(0,0,z,H),Q=new ue(0,0,z,H);let tt=!1;const G=new tr;let K=!1,ot=!1,mt=null;const pt=new ne,Rt=new kt,Lt=new N,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Vt(){return b===null?q:1}let U=n;function ve(S,L){for(let O=0;O<S.length;O++){const B=S[O],I=e.getContext(B,L);if(I!==null)return I}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${js}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",R,!1),e.addEventListener("webglcontextcreationerror",st,!1),U===null){const L=["webgl2","webgl","experimental-webgl"];if(T.isWebGL1Renderer===!0&&L.shift(),U=ve(L,S),U===null)throw ve(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let _t,At,ut,$t,Ut,y,_,F,$,Z,J,dt,at,ct,Mt,It,j,Xt,Gt,Tt,gt,ht,Pt,Wt;function Qt(){_t=new Fu(U),At=new Lu(U,_t,t),_t.init(At),ht=new Ef(U,_t,At),ut=new Mf(U,_t,At),$t=new zu(U),Ut=new af,y=new Sf(U,_t,ut,Ut,At,ht,$t),_=new Du(T),F=new Nu(T),$=new Yl(U,At),Pt=new Ru(U,_t,$,At),Z=new Ou(U,$,$t,Pt),J=new ku(U,Z,$,$t),Gt=new Vu(U,At,y),It=new Pu(Ut),dt=new rf(T,_,F,_t,At,Pt,It),at=new Af(T,Ut),ct=new lf,Mt=new pf(_t,At),Xt=new wu(T,_,F,ut,J,p,l),j=new xf(T,J,At),Wt=new wf(U,$t,At,ut),Tt=new Cu(U,_t,$t,At),gt=new Bu(U,_t,$t,At),$t.programs=dt.programs,T.capabilities=At,T.extensions=_t,T.properties=Ut,T.renderLists=ct,T.shadowMap=j,T.state=ut,T.info=$t}Qt();const Ft=new bf(T,U);this.xr=Ft,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=_t.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=_t.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(z,H,!1))},this.getSize=function(S){return S.set(z,H)},this.setSize=function(S,L,O=!0){if(Ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=S,H=L,e.width=Math.floor(S*q),e.height=Math.floor(L*q),O===!0&&(e.style.width=S+"px",e.style.height=L+"px"),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(z*q,H*q).floor()},this.setDrawingBufferSize=function(S,L,O){z=S,H=L,q=O,e.width=Math.floor(S*O),e.height=Math.floor(L*O),this.setViewport(0,0,S,L)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,L,O,B){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,L,O,B),ut.viewport(E.copy(Y).multiplyScalar(q).floor())},this.getScissor=function(S){return S.copy(Q)},this.setScissor=function(S,L,O,B){S.isVector4?Q.set(S.x,S.y,S.z,S.w):Q.set(S,L,O,B),ut.scissor(V.copy(Q).multiplyScalar(q).floor())},this.getScissorTest=function(){return tt},this.setScissorTest=function(S){ut.setScissorTest(tt=S)},this.setOpaqueSort=function(S){k=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(S=!0,L=!0,O=!0){let B=0;if(S){let I=!1;if(b!==null){const lt=b.texture.format;I=lt===Wa||lt===ka||lt===Va}if(I){const lt=b.texture.type,ft=lt===un||lt===on||lt===$s||lt===bn||lt===Ga||lt===Ha,xt=Xt.getClearColor(),yt=Xt.getClearAlpha(),Nt=xt.r,wt=xt.g,Ct=xt.b;ft?(m[0]=Nt,m[1]=wt,m[2]=Ct,m[3]=yt,U.clearBufferuiv(U.COLOR,0,m)):(M[0]=Nt,M[1]=wt,M[2]=Ct,M[3]=yt,U.clearBufferiv(U.COLOR,0,M))}else B|=U.COLOR_BUFFER_BIT}L&&(B|=U.DEPTH_BUFFER_BIT),O&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",R,!1),e.removeEventListener("webglcontextcreationerror",st,!1),ct.dispose(),Mt.dispose(),Ut.dispose(),_.dispose(),F.dispose(),J.dispose(),Pt.dispose(),Wt.dispose(),dt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",xe),Ft.removeEventListener("sessionend",jt),mt&&(mt.dispose(),mt=null),Me.stop()};function et(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const S=$t.autoReset,L=j.enabled,O=j.autoUpdate,B=j.needsUpdate,I=j.type;Qt(),$t.autoReset=S,j.enabled=L,j.autoUpdate=O,j.needsUpdate=B,j.type=I}function st(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function rt(S){const L=S.target;L.removeEventListener("dispose",rt),Et(L)}function Et(S){vt(S),Ut.remove(S)}function vt(S){const L=Ut.get(S).programs;L!==void 0&&(L.forEach(function(O){dt.releaseProgram(O)}),S.isShaderMaterial&&dt.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,O,B,I,lt){L===null&&(L=St);const ft=I.isMesh&&I.matrixWorld.determinant()<0,xt=_o(S,L,O,B,I);ut.setMaterial(B,ft);let yt=O.index,Nt=1;if(B.wireframe===!0){if(yt=Z.getWireframeAttribute(O),yt===void 0)return;Nt=2}const wt=O.drawRange,Ct=O.attributes.position;let ie=wt.start*Nt,Ae=(wt.start+wt.count)*Nt;lt!==null&&(ie=Math.max(ie,lt.start*Nt),Ae=Math.min(Ae,(lt.start+lt.count)*Nt)),yt!==null?(ie=Math.max(ie,0),Ae=Math.min(Ae,yt.count)):Ct!=null&&(ie=Math.max(ie,0),Ae=Math.min(Ae,Ct.count));const ce=Ae-ie;if(ce<0||ce===1/0)return;Pt.setup(I,B,xt,O,yt);let We,Jt=Tt;if(yt!==null&&(We=$.get(yt),Jt=gt,Jt.setIndex(We)),I.isMesh)B.wireframe===!0?(ut.setLineWidth(B.wireframeLinewidth*Vt()),Jt.setMode(U.LINES)):Jt.setMode(U.TRIANGLES);else if(I.isLine){let Ot=B.linewidth;Ot===void 0&&(Ot=1),ut.setLineWidth(Ot*Vt()),I.isLineSegments?Jt.setMode(U.LINES):I.isLineLoop?Jt.setMode(U.LINE_LOOP):Jt.setMode(U.LINE_STRIP)}else I.isPoints?Jt.setMode(U.POINTS):I.isSprite&&Jt.setMode(U.TRIANGLES);if(I.isBatchedMesh)Jt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)Jt.renderInstances(ie,ce,I.count);else if(O.isInstancedBufferGeometry){const Ot=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,is=Math.min(O.instanceCount,Ot);Jt.renderInstances(ie,ce,is)}else Jt.render(ie,ce)};function Yt(S,L,O){S.transparent===!0&&S.side===$e&&S.forceSinglePass===!1?(S.side=Te,S.needsUpdate=!0,Ei(S,L,O),S.side=dn,S.needsUpdate=!0,Ei(S,L,O),S.side=$e):Ei(S,L,O)}this.compile=function(S,L,O=null){O===null&&(O=S),f=Mt.get(O),f.init(),A.push(f),O.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),S!==O&&S.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights(T._useLegacyLights);const B=new Set;return S.traverse(function(I){const lt=I.material;if(lt)if(Array.isArray(lt))for(let ft=0;ft<lt.length;ft++){const xt=lt[ft];Yt(xt,O,I),B.add(xt)}else Yt(lt,O,I),B.add(lt)}),A.pop(),f=null,B},this.compileAsync=function(S,L,O=null){const B=this.compile(S,L,O);return new Promise(I=>{function lt(){if(B.forEach(function(ft){Ut.get(ft).currentProgram.isReady()&&B.delete(ft)}),B.size===0){I(S);return}setTimeout(lt,10)}_t.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Kt=null;function le(S){Kt&&Kt(S)}function xe(){Me.stop()}function jt(){Me.start()}const Me=new ro;Me.setAnimationLoop(le),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(S){Kt=S,Ft.setAnimationLoop(S),S===null?Me.stop():Me.start()},Ft.addEventListener("sessionstart",xe),Ft.addEventListener("sessionend",jt),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(L),L=Ft.getCamera()),S.isScene===!0&&S.onBeforeRender(T,S,L,b),f=Mt.get(S,A.length),f.init(),A.push(f),pt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),G.setFromProjectionMatrix(pt),ot=this.localClippingEnabled,K=It.init(this.clippingPlanes,ot),x=ct.get(S,h.length),x.init(),h.push(x),Ve(S,L,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(k,X),this.info.render.frame++,K===!0&&It.beginShadows();const O=f.state.shadowsArray;if(j.render(O,S,L),K===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xt.render(x,S),f.setupLights(T._useLegacyLights),L.isArrayCamera){const B=L.cameras;for(let I=0,lt=B.length;I<lt;I++){const ft=B[I];sr(x,S,ft,ft.viewport)}}else sr(x,S,L);b!==null&&(y.updateMultisampleRenderTarget(b),y.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(T,S,L),Pt.resetDefaultState(),P=-1,g=null,A.pop(),A.length>0?f=A[A.length-1]:f=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function Ve(S,L,O,B){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||G.intersectsSprite(S)){B&&Lt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pt);const ft=J.update(S),xt=S.material;xt.visible&&x.push(S,ft,xt,O,Lt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||G.intersectsObject(S))){const ft=J.update(S),xt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Lt.copy(S.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Lt.copy(ft.boundingSphere.center)),Lt.applyMatrix4(S.matrixWorld).applyMatrix4(pt)),Array.isArray(xt)){const yt=ft.groups;for(let Nt=0,wt=yt.length;Nt<wt;Nt++){const Ct=yt[Nt],ie=xt[Ct.materialIndex];ie&&ie.visible&&x.push(S,ft,ie,O,Lt.z,Ct)}}else xt.visible&&x.push(S,ft,xt,O,Lt.z,null)}}const lt=S.children;for(let ft=0,xt=lt.length;ft<xt;ft++)Ve(lt[ft],L,O,B)}function sr(S,L,O,B){const I=S.opaque,lt=S.transmissive,ft=S.transparent;f.setupLightsView(O),K===!0&&It.setGlobalState(T.clippingPlanes,O),lt.length>0&&go(I,lt,L,O),B&&ut.viewport(E.copy(B)),I.length>0&&Si(I,L,O),lt.length>0&&Si(lt,L,O),ft.length>0&&Si(ft,L,O),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function go(S,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const lt=At.isWebGL2;mt===null&&(mt=new Cn(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?_i:un,minFilter:gi,samples:lt?4:0})),T.getDrawingBufferSize(Rt),lt?mt.setSize(Rt.x,Rt.y):mt.setSize(Ys(Rt.x),Ys(Rt.y));const ft=T.getRenderTarget();T.setRenderTarget(mt),T.getClearColor(it),C=T.getClearAlpha(),C<1&&T.setClearColor(16777215,.5),T.clear();const xt=T.toneMapping;T.toneMapping=hn,Si(S,O,B),y.updateMultisampleRenderTarget(mt),y.updateRenderTargetMipmap(mt);let yt=!1;for(let Nt=0,wt=L.length;Nt<wt;Nt++){const Ct=L[Nt],ie=Ct.object,Ae=Ct.geometry,ce=Ct.material,We=Ct.group;if(ce.side===$e&&ie.layers.test(B.layers)){const Jt=ce.side;ce.side=Te,ce.needsUpdate=!0,rr(ie,O,B,Ae,ce,We),ce.side=Jt,ce.needsUpdate=!0,yt=!0}}yt===!0&&(y.updateMultisampleRenderTarget(mt),y.updateRenderTargetMipmap(mt)),T.setRenderTarget(ft),T.setClearColor(it,C),T.toneMapping=xt}function Si(S,L,O){const B=L.isScene===!0?L.overrideMaterial:null;for(let I=0,lt=S.length;I<lt;I++){const ft=S[I],xt=ft.object,yt=ft.geometry,Nt=B===null?ft.material:B,wt=ft.group;xt.layers.test(O.layers)&&rr(xt,L,O,yt,Nt,wt)}}function rr(S,L,O,B,I,lt){S.onBeforeRender(T,L,O,B,I,lt),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),I.onBeforeRender(T,L,O,B,S,lt),I.transparent===!0&&I.side===$e&&I.forceSinglePass===!1?(I.side=Te,I.needsUpdate=!0,T.renderBufferDirect(O,L,B,I,S,lt),I.side=dn,I.needsUpdate=!0,T.renderBufferDirect(O,L,B,I,S,lt),I.side=$e):T.renderBufferDirect(O,L,B,I,S,lt),S.onAfterRender(T,L,O,B,I,lt)}function Ei(S,L,O){L.isScene!==!0&&(L=St);const B=Ut.get(S),I=f.state.lights,lt=f.state.shadowsArray,ft=I.state.version,xt=dt.getParameters(S,I.state,lt,L,O),yt=dt.getProgramCacheKey(xt);let Nt=B.programs;B.environment=S.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(S.isMeshStandardMaterial?F:_).get(S.envMap||B.environment),Nt===void 0&&(S.addEventListener("dispose",rt),Nt=new Map,B.programs=Nt);let wt=Nt.get(yt);if(wt!==void 0){if(B.currentProgram===wt&&B.lightsStateVersion===ft)return or(S,xt),wt}else xt.uniforms=dt.getUniforms(S),S.onBuild(O,xt,T),S.onBeforeCompile(xt,T),wt=dt.acquireProgram(xt,yt),Nt.set(yt,wt),B.uniforms=xt.uniforms;const Ct=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ct.clippingPlanes=It.uniform),or(S,xt),B.needsLights=xo(S),B.lightsStateVersion=ft,B.needsLights&&(Ct.ambientLightColor.value=I.state.ambient,Ct.lightProbe.value=I.state.probe,Ct.directionalLights.value=I.state.directional,Ct.directionalLightShadows.value=I.state.directionalShadow,Ct.spotLights.value=I.state.spot,Ct.spotLightShadows.value=I.state.spotShadow,Ct.rectAreaLights.value=I.state.rectArea,Ct.ltc_1.value=I.state.rectAreaLTC1,Ct.ltc_2.value=I.state.rectAreaLTC2,Ct.pointLights.value=I.state.point,Ct.pointLightShadows.value=I.state.pointShadow,Ct.hemisphereLights.value=I.state.hemi,Ct.directionalShadowMap.value=I.state.directionalShadowMap,Ct.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ct.spotShadowMap.value=I.state.spotShadowMap,Ct.spotLightMatrix.value=I.state.spotLightMatrix,Ct.spotLightMap.value=I.state.spotLightMap,Ct.pointShadowMap.value=I.state.pointShadowMap,Ct.pointShadowMatrix.value=I.state.pointShadowMatrix),B.currentProgram=wt,B.uniformsList=null,wt}function ar(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=qi.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function or(S,L){const O=Ut.get(S);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function _o(S,L,O,B,I){L.isScene!==!0&&(L=St),y.resetTextureUnits();const lt=L.fog,ft=B.isMeshStandardMaterial?L.environment:null,xt=b===null?T.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:tn,yt=(B.isMeshStandardMaterial?F:_).get(B.envMap||ft),Nt=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,wt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ct=!!O.morphAttributes.position,ie=!!O.morphAttributes.normal,Ae=!!O.morphAttributes.color;let ce=hn;B.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ce=T.toneMapping);const We=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Jt=We!==void 0?We.length:0,Ot=Ut.get(B),is=f.state.lights;if(K===!0&&(ot===!0||S!==g)){const Le=S===g&&B.id===P;It.setState(B,S,Le)}let te=!1;B.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==is.state.version||Ot.outputColorSpace!==xt||I.isBatchedMesh&&Ot.batching===!1||!I.isBatchedMesh&&Ot.batching===!0||I.isInstancedMesh&&Ot.instancing===!1||!I.isInstancedMesh&&Ot.instancing===!0||I.isSkinnedMesh&&Ot.skinning===!1||!I.isSkinnedMesh&&Ot.skinning===!0||I.isInstancedMesh&&Ot.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ot.instancingColor===!1&&I.instanceColor!==null||Ot.envMap!==yt||B.fog===!0&&Ot.fog!==lt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==It.numPlanes||Ot.numIntersection!==It.numIntersection)||Ot.vertexAlphas!==Nt||Ot.vertexTangents!==wt||Ot.morphTargets!==Ct||Ot.morphNormals!==ie||Ot.morphColors!==Ae||Ot.toneMapping!==ce||At.isWebGL2===!0&&Ot.morphTargetsCount!==Jt)&&(te=!0):(te=!0,Ot.__version=B.version);let pn=Ot.currentProgram;te===!0&&(pn=Ei(B,L,I));let lr=!1,ai=!1,ss=!1;const pe=pn.getUniforms(),mn=Ot.uniforms;if(ut.useProgram(pn.program)&&(lr=!0,ai=!0,ss=!0),B.id!==P&&(P=B.id,ai=!0),lr||g!==S){pe.setValue(U,"projectionMatrix",S.projectionMatrix),pe.setValue(U,"viewMatrix",S.matrixWorldInverse);const Le=pe.map.cameraPosition;Le!==void 0&&Le.setValue(U,Lt.setFromMatrixPosition(S.matrixWorld)),At.logarithmicDepthBuffer&&pe.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pe.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),g!==S&&(g=S,ai=!0,ss=!0)}if(I.isSkinnedMesh){pe.setOptional(U,I,"bindMatrix"),pe.setOptional(U,I,"bindMatrixInverse");const Le=I.skeleton;Le&&(At.floatVertexTextures?(Le.boneTexture===null&&Le.computeBoneTexture(),pe.setValue(U,"boneTexture",Le.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}I.isBatchedMesh&&(pe.setOptional(U,I,"batchingTexture"),pe.setValue(U,"batchingTexture",I._matricesTexture,y));const rs=O.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0&&At.isWebGL2===!0)&&Gt.update(I,O,pn),(ai||Ot.receiveShadow!==I.receiveShadow)&&(Ot.receiveShadow=I.receiveShadow,pe.setValue(U,"receiveShadow",I.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(mn.envMap.value=yt,mn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),ai&&(pe.setValue(U,"toneMappingExposure",T.toneMappingExposure),Ot.needsLights&&vo(mn,ss),lt&&B.fog===!0&&at.refreshFogUniforms(mn,lt),at.refreshMaterialUniforms(mn,B,q,H,mt),qi.upload(U,ar(Ot),mn,y)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(qi.upload(U,ar(Ot),mn,y),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pe.setValue(U,"center",I.center),pe.setValue(U,"modelViewMatrix",I.modelViewMatrix),pe.setValue(U,"normalMatrix",I.normalMatrix),pe.setValue(U,"modelMatrix",I.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Le=B.uniformsGroups;for(let as=0,Mo=Le.length;as<Mo;as++)if(At.isWebGL2){const cr=Le[as];Wt.update(cr,pn),Wt.bind(cr,pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pn}function vo(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function xo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,L,O){Ut.get(S.texture).__webglTexture=L,Ut.get(S.depthTexture).__webglTexture=O;const B=Ut.get(S);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,L){const O=Ut.get(S);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,O=0){b=S,D=L,v=O;let B=!0,I=null,lt=!1,ft=!1;if(S){const yt=Ut.get(S);yt.__useDefaultFramebuffer!==void 0?(ut.bindFramebuffer(U.FRAMEBUFFER,null),B=!1):yt.__webglFramebuffer===void 0?y.setupRenderTarget(S):yt.__hasExternalTextures&&y.rebindTextures(S,Ut.get(S.texture).__webglTexture,Ut.get(S.depthTexture).__webglTexture);const Nt=S.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ft=!0);const wt=Ut.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(wt[L])?I=wt[L][O]:I=wt[L],lt=!0):At.isWebGL2&&S.samples>0&&y.useMultisampledRTT(S)===!1?I=Ut.get(S).__webglMultisampledFramebuffer:Array.isArray(wt)?I=wt[O]:I=wt,E.copy(S.viewport),V.copy(S.scissor),W=S.scissorTest}else E.copy(Y).multiplyScalar(q).floor(),V.copy(Q).multiplyScalar(q).floor(),W=tt;if(ut.bindFramebuffer(U.FRAMEBUFFER,I)&&At.drawBuffers&&B&&ut.drawBuffers(S,I),ut.viewport(E),ut.scissor(V),ut.setScissorTest(W),lt){const yt=Ut.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,yt.__webglTexture,O)}else if(ft){const yt=Ut.get(S.texture),Nt=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.__webglTexture,O||0,Nt)}P=-1},this.readRenderTargetPixels=function(S,L,O,B,I,lt,ft){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Ut.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){ut.bindFramebuffer(U.FRAMEBUFFER,xt);try{const yt=S.texture,Nt=yt.format,wt=yt.type;if(Nt!==Ge&&ht.convert(Nt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ct=wt===_i&&(_t.has("EXT_color_buffer_half_float")||At.isWebGL2&&_t.has("EXT_color_buffer_float"));if(wt!==un&&ht.convert(wt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(wt===ln&&(At.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!Ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-B&&O>=0&&O<=S.height-I&&U.readPixels(L,O,B,I,ht.convert(Nt),ht.convert(wt),lt)}finally{const yt=b!==null?Ut.get(b).__webglFramebuffer:null;ut.bindFramebuffer(U.FRAMEBUFFER,yt)}}},this.copyFramebufferToTexture=function(S,L,O=0){const B=Math.pow(2,-O),I=Math.floor(L.image.width*B),lt=Math.floor(L.image.height*B);y.setTexture2D(L,0),U.copyTexSubImage2D(U.TEXTURE_2D,O,0,0,S.x,S.y,I,lt),ut.unbindTexture()},this.copyTextureToTexture=function(S,L,O,B=0){const I=L.image.width,lt=L.image.height,ft=ht.convert(O.format),xt=ht.convert(O.type);y.setTexture2D(O,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment),L.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,S.x,S.y,I,lt,ft,xt,L.image.data):L.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,S.x,S.y,L.mipmaps[0].width,L.mipmaps[0].height,ft,L.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,B,S.x,S.y,ft,xt,L.image),B===0&&O.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(S,L,O,B,I=0){if(T.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const lt=S.max.x-S.min.x+1,ft=S.max.y-S.min.y+1,xt=S.max.z-S.min.z+1,yt=ht.convert(B.format),Nt=ht.convert(B.type);let wt;if(B.isData3DTexture)y.setTexture3D(B,0),wt=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)y.setTexture2DArray(B,0),wt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const Ct=U.getParameter(U.UNPACK_ROW_LENGTH),ie=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ae=U.getParameter(U.UNPACK_SKIP_PIXELS),ce=U.getParameter(U.UNPACK_SKIP_ROWS),We=U.getParameter(U.UNPACK_SKIP_IMAGES),Jt=O.isCompressedTexture?O.mipmaps[I]:O.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Jt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),O.isDataTexture||O.isData3DTexture?U.texSubImage3D(wt,I,L.x,L.y,L.z,lt,ft,xt,yt,Nt,Jt.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(wt,I,L.x,L.y,L.z,lt,ft,xt,yt,Jt.data)):U.texSubImage3D(wt,I,L.x,L.y,L.z,lt,ft,xt,yt,Nt,Jt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ct),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ie),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ae),U.pixelStorei(U.UNPACK_SKIP_ROWS,ce),U.pixelStorei(U.UNPACK_SKIP_IMAGES,We),I===0&&B.generateMipmaps&&U.generateMipmap(wt),ut.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?y.setTextureCube(S,0):S.isData3DTexture?y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?y.setTexture2DArray(S,0):y.setTexture2D(S,0),ut.unbindTexture()},this.resetState=function(){D=0,v=0,b=null,ut.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Qs?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===ts?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fe?wn:qa}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===wn?fe:tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Rf extends po{}Rf.prototype.isWebGL1Renderer=!0;class ir{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new ir(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Cf extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class La extends He{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Kn=new ne,Pa=new ne,Xi=[],Da=new fn,Lf=new ne,di=new bt,fi=new Mi;class Bs extends bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new La(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Kn),Da.copy(t.boundingBox).applyMatrix4(Kn),this.boundingBox.union(Da)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Kn),fi.copy(t.boundingSphere).applyMatrix4(Kn),this.boundingSphere.union(fi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,s=this.count;if(di.geometry=this.geometry,di.material=this.material,di.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fi.copy(this.boundingSphere),fi.applyMatrix4(n),t.ray.intersectsSphere(fi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Kn),Pa.multiplyMatrices(n,Kn),di.matrixWorld=Pa,di.raycast(t,Xi);for(let o=0,a=Xi.length;o<a;o++){const l=Xi[o];l.instanceId=r,l.object=this,e.push(l)}Xi.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new La(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Pf extends be{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ce extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Js,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mn extends si{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Js,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mo extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Df extends mo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const zs=new ne,Ua=new N,Ia=new N;class Uf{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ua.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ua),Ia.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ia),e.updateMatrixWorld(),zs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class If extends Uf{constructor(){super(new ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nf extends mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new If}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ff{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Na(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Na();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Na(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:js}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=js);function ee(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t;const s=n.getContext("2d");e(s,i,t);const r=new Pf(n);return r.magFilter=_e,r.minFilter=el,r.generateMipmaps=!0,r.wrapS=mi,r.wrapT=mi,r}function Of(){const i=ee(64,64,(v,b,P)=>{v.fillStyle="#4ea42a",v.fillRect(0,0,b,P),v.fillStyle="#429023";for(let g=0;g<b;g+=8)for(let E=0;E<P;E+=8)(g+E)%16===0&&v.fillRect(g,E,8,8)}),t=ee(64,64,(v,b,P)=>{v.fillStyle="#866043",v.fillRect(0,0,b,P),v.fillStyle="#735137";for(let g=0;g<b;g+=8)for(let E=12;E<P;E+=8)(g+E)%16===0&&v.fillRect(g,E,8,8);v.fillStyle="#4ea42a",v.fillRect(0,0,b,12)}),e=ee(64,64,(v,b,P)=>{v.fillStyle="#866043",v.fillRect(0,0,b,P),v.fillStyle="#735137";for(let g=0;g<b;g+=8)for(let E=0;E<P;E+=8)(g+E)%16===0&&v.fillRect(g,E,8,8)}),n=ee(64,64,(v,b,P)=>{v.fillStyle="#777777",v.fillRect(0,0,b,P),v.fillStyle="#555555",v.fillRect(0,0,b,4),v.fillRect(0,0,4,P),v.fillStyle="#999999",v.fillRect(0,P-4,b,4),v.fillRect(b-4,0,4,P)}),s=ee(64,64,(v,b,P)=>{v.fillStyle="#674d31",v.fillRect(0,0,b,P),v.fillStyle="#523c24",v.fillRect(0,0,8,P),v.fillRect(24,0,8,P),v.fillRect(48,0,8,P)}),r=ee(64,64,(v,b,P)=>{v.fillStyle="#2d8527",v.fillRect(0,0,b,P),v.fillStyle="#22661d";for(let g=0;g<b;g+=16)for(let E=0;E<P;E+=16)(g+E)%32===0&&v.fillRect(g,E,16,16)}),o=ee(64,64,(v,b,P)=>{v.fillStyle="#dbd3a0",v.fillRect(0,0,b,P),v.fillStyle="#c2ba86";for(let g=0;g<b;g+=8)for(let E=0;E<P;E+=8)(g+E)%16===0&&v.fillRect(g,E,8,8)}),a=ee(64,64,(v,b,P)=>{v.fillStyle="#d6ca98",v.fillRect(0,0,b,P),v.fillStyle="#b8aa76",v.fillRect(0,28,b,8)}),l=ee(64,64,(v,b,P)=>{v.fillStyle="#176b1d",v.fillRect(0,0,b,P),v.fillStyle="#0f4f13",v.fillRect(0,0,8,P),v.fillRect(24,0,8,P),v.fillRect(48,0,8,P)}),c=ee(64,64,(v,b,P)=>{v.fillStyle="#f0f5fb",v.fillRect(0,0,b,P),v.fillStyle="#d8e5f2";for(let g=0;g<b;g+=8)for(let E=0;E<P;E+=8)(g+E)%16===0&&v.fillRect(g,E,8,8)}),u=ee(64,64,(v,b,P)=>{v.fillStyle="#866043",v.fillRect(0,0,b,P),v.fillStyle="#f0f5fb",v.fillRect(0,0,b,16)}),d=ee(64,64,(v,b,P)=>{v.fillStyle="#3b291a",v.fillRect(0,0,b,P),v.fillStyle="#26190e",v.fillRect(0,0,8,P),v.fillRect(24,0,8,P),v.fillRect(48,0,8,P)}),p=ee(64,64,(v,b,P)=>{v.fillStyle="#225533",v.fillRect(0,0,b,P),v.fillStyle="#f0f5fb",v.fillRect(0,0,b,12)}),m=ee(64,64,(v,b,P)=>{v.fillStyle="#e88bad",v.fillRect(0,0,b,P),v.fillStyle="#d66e93";for(let g=0;g<b;g+=8)for(let E=0;E<P;E+=8)(g+E)%16===0&&v.fillRect(g,E,8,8)}),M=ee(64,64,(v,b,P)=>{v.fillStyle="#4a2c1d",v.fillRect(0,0,b,P),v.fillStyle="#e88bad",v.fillRect(0,0,b,12)}),x=ee(64,64,(v,b,P)=>{v.fillStyle="#4a2c1d",v.fillRect(0,0,b,P),v.fillStyle="#331c11",v.fillRect(0,0,8,P),v.fillRect(24,0,8,P)}),f=ee(64,64,(v,b,P)=>{v.fillStyle="#ffb7d5",v.fillRect(0,0,b,P),v.fillStyle="#f28eb9";for(let g=0;g<b;g+=16)for(let E=0;E<P;E+=16)(g+E)%32===0&&v.fillRect(g,E,16,16)}),h=ee(64,64,(v,b,P)=>{v.fillStyle="#9e9738",v.fillRect(0,0,b,P),v.fillStyle="#87802b";for(let g=0;g<b;g+=8)for(let E=0;E<P;E+=8)(g+E)%16===0&&v.fillRect(g,E,8,8)}),A=ee(64,64,(v,b,P)=>{v.fillStyle="#615b53",v.fillRect(0,0,b,P),v.fillStyle="#47423c",v.fillRect(0,0,8,P),v.fillRect(24,0,8,P)}),T=ee(64,64,(v,b,P)=>{v.fillStyle="#7a8c24",v.fillRect(0,0,b,P),v.fillStyle="#5f6e19";for(let g=0;g<b;g+=16)for(let E=0;E<P;E+=16)(g+E)%32===0&&v.fillRect(g,E,16,16)}),w=ee(64,64,(v,b,P)=>{v.fillStyle="#b04030",v.fillRect(0,0,b,P),v.fillStyle="#e8e0d8",v.fillRect(0,30,b,4),v.fillRect(16,0,4,30),v.fillRect(32,32,4,30)}),D=ee(64,64,(v,b,P)=>{v.fillStyle="#ffaa00",v.fillRect(8,8,48,48),v.fillStyle="#ffdd44",v.fillRect(12,12,40,40),v.fillStyle="#ffffff",v.fillRect(16,16,12,12)});return{plains:{top:i,side:t,dirt:e,border:n,wood:s,leaves:r,sky:8900331},desert:{top:o,side:o,dirt:a,border:a,wood:l,leaves:l,sky:15586954},snow:{top:c,side:u,dirt:e,border:n,wood:d,leaves:p,sky:11522795},blossom:{top:m,side:M,dirt:e,border:a,wood:x,leaves:f,sky:16573676},savanna:{top:h,side:h,dirt:e,border:n,wood:A,leaves:T,sky:16103746},brick:w,coin:D}}class Bf{constructor(){this.group=new re;const t=new Ce({color:14857360,roughness:.5}),e=new Ce({color:4336153,roughness:.6}),n=new Ce({color:1924184,roughness:.4}),s=new Ce({color:2837630,roughness:.5}),r=new Ce({color:1579032,roughness:.3}),o=new Qe({color:1710618}),a=new Qe({color:16777215});this.torso=new bt(new Ht(.62,.78,.36),n),this.torso.position.y=.9,this.torso.castShadow=!0,this.group.add(this.torso),this.headGroup=new re,this.headGroup.position.set(0,.52,0);const l=new bt(new Ht(.42,.42,.42),t);l.castShadow=!0,this.headGroup.add(l);const c=new bt(new Ht(.45,.16,.45),e);c.position.set(0,.16,0),this.headGroup.add(c);const u=new bt(new Ht(.42,.1,.1),e);u.position.set(0,.14,.2),this.headGroup.add(u);const d=new bt(new Ht(.08,.08,.02),a);d.position.set(-.1,.03,.215);const p=new bt(new Ht(.05,.05,.02),o);p.position.set(-.1,.03,.216);const m=d.clone();m.position.x=.1;const M=p.clone();M.position.x=.1,this.headGroup.add(d),this.headGroup.add(p),this.headGroup.add(m),this.headGroup.add(M),this.torso.add(this.headGroup),this.leftArm=this.createArm(t,n),this.leftArm.position.set(-.41,.3,0),this.torso.add(this.leftArm),this.rightArm=this.createArm(t,n),this.rightArm.position.set(.41,.3,0),this.torso.add(this.rightArm),this.leftLeg=this.createLeg(s,r),this.leftLeg.position.set(-.17,.5,0),this.group.add(this.leftLeg),this.rightLeg=this.createLeg(s,r),this.rightLeg.position.set(.17,.5,0),this.group.add(this.rightLeg)}createArm(t,e){const n=new re,s=new bt(new Ht(.22,.26,.22),e);s.position.y=-.13,s.castShadow=!0,n.add(s);const r=new bt(new Ht(.18,.36,.18),t);return r.position.y=-.42,r.castShadow=!0,n.add(r),n}createLeg(t,e){const n=new re,s=new bt(new Ht(.22,.44,.22),t);s.position.y=-.22,s.castShadow=!0,n.add(s);const r=new bt(new Ht(.24,.15,.28),e);return r.position.set(0,-.46,.03),r.castShadow=!0,n.add(r),n}animate(t,e,n,s=!1){if(e==="SLIDING"){this.group.rotation.x=-Math.PI*.4,this.group.position.y=.3,this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0,this.leftArm.rotation.x=Math.PI*.3,this.rightArm.rotation.x=Math.PI*.3;return}if(this.group.rotation.x=0,this.group.rotation.z=0,e==="JUMPING")this.leftLeg.rotation.x=-Math.PI*.3,this.rightLeg.rotation.x=Math.PI*.2,this.leftArm.rotation.x=-Math.PI*.6,this.rightArm.rotation.x=-Math.PI*.6;else if(e==="STUMBLE"){const r=Math.sin(n*30)*.4;this.group.rotation.z=r,this.leftArm.rotation.z=1.2,this.rightArm.rotation.z=-1.2}else if(e==="DEFEAT")this.group.rotation.x=Math.PI*.5,this.group.position.y=.2;else{const r=Math.sin(n*14);s?(this.group.rotation.z=-.15,this.leftLeg.rotation.x=r*.4,this.rightLeg.rotation.x=-r*.9,this.leftArm.rotation.x=-r*.3,this.rightArm.rotation.x=r*.3,this.headGroup.position.y=.52+Math.abs(Math.sin(n*14))*.06):(this.leftLeg.rotation.x=r*.7,this.rightLeg.rotation.x=-r*.7,this.leftArm.rotation.x=-r*.7,this.rightArm.rotation.x=r*.7,this.headGroup.position.y=.52+Math.abs(Math.sin(n*14))*.03)}}}class zf{constructor(t){this.parentGroup=t,this.particles=[],this.bloodMat=new Qe({color:11141120}),this.bloodGeo=new Ht(.06,.06,.06),this.spawnTimer=0}reset(){this.particles.forEach(t=>this.parentGroup.remove(t.mesh)),this.particles=[],this.spawnTimer=0}update(t,e,n){if(e>.05){const s=Math.max(.03,.25-e*.2);this.spawnTimer+=t,this.spawnTimer>=s&&(this.spawnTimer=0,this.spawnBloodDrip(n))}for(let s=this.particles.length-1;s>=0;s--){const r=this.particles[s];r.life-=t,r.mesh.position.y-=t*3,r.mesh.scale.multiplyScalar(.95),(r.life<=0||r.mesh.position.y<=0)&&(this.parentGroup.remove(r.mesh),this.particles.splice(s,1))}}spawnBloodDrip(t){const e=new bt(this.bloodGeo,this.bloodMat),n=(Math.random()-.5)*.4,s=.5+(Math.random()-.5)*.4,r=(Math.random()-.5)*.3;e.position.set(t.x+n,t.y+s,t.z+r),this.parentGroup.add(e),this.particles.push({mesh:e,life:.6+Math.random()*.4})}}class Gf{constructor(t){this.scene=t,this.model=new Bf,this.scene.add(this.model.group),this.bloodSystem=new zf(t),this.lanes=[-2.5,0,2.5],this.currentLane=1,this.position=new N(0,0,0),this.targetX=0,this.vy=0,this.gravity=-34,this.state="RUNNING",this.slideTimer=0,this.stumbleTimer=0,this.animTime=0,this.bbox=new fn}reset(){this.currentLane=1,this.position.set(0,0,0),this.targetX=0,this.vy=0,this.state="RUNNING",this.slideTimer=0,this.stumbleTimer=0,this.animTime=0,this.bloodSystem.reset(),this.model.group.position.set(0,0,0),this.model.group.rotation.set(0,0,0)}moveLeft(){this.state==="DEFEAT"||this.state==="STUMBLE"||this.currentLane>0&&(this.currentLane--,this.targetX=this.lanes[this.currentLane])}moveRight(){this.state==="DEFEAT"||this.state==="STUMBLE"||this.currentLane<this.lanes.length-1&&(this.currentLane++,this.targetX=this.lanes[this.currentLane])}jump(){(this.state==="RUNNING"||this.state==="SLIDING")&&(this.vy=12.5,this.state="JUMPING",this.slideTimer=0)}slide(){this.state==="RUNNING"&&(this.state="SLIDING",this.slideTimer=.8)}triggerStumble(){this.state!=="DEFEAT"&&(this.state="STUMBLE",this.stumbleTimer=.4)}update(t,e,n){this.animTime+=t,this.position.z-=e*t,this.position.x+=(this.targetX-this.position.x)*Math.min(t*22,1),(this.state==="JUMPING"||this.position.y>0)&&(this.vy+=this.gravity*t,this.position.y+=this.vy*t,this.position.y<=0&&(this.position.y=0,this.vy=0,this.state==="JUMPING"&&(this.state="RUNNING"))),this.state==="SLIDING"&&(this.slideTimer-=t,this.slideTimer<=0&&(this.state="RUNNING")),this.state==="STUMBLE"&&(this.stumbleTimer-=t,this.stumbleTimer<=0&&(this.state="RUNNING")),this.model.group.position.copy(this.position),this.model.animate(t,this.state,this.animTime),this.bloodSystem.update(t,n,this.position),this.updateBoundingBox()}updateBoundingBox(){const t=this.position,e=this.state==="SLIDING"?.5:1.6,n=t.y;this.bbox.min.set(t.x-.35,n,t.z-.4),this.bbox.max.set(t.x+.35,n+e,t.z+.4)}}class Hf{constructor(){this.group=new re;const t=new Ce({color:15658734,roughness:.7}),e=new Ce({color:12431524,roughness:.6}),n=new Ce({color:13421772,roughness:.9}),s=new Ce({color:7226653,roughness:.4}),r=new Qe({color:11141120}),o=new Qe({color:16777215}),a=new Qe({color:1575175}),l=new Ht(.78,1.25,.52);this.gown=new bt(l,t),this.gown.position.y=.95,this.gown.castShadow=!0,this.group.add(this.gown),this.headGroup=new re,this.headGroup.position.set(0,.72,0);const c=new bt(new Ht(.48,.48,.48),e);c.castShadow=!0,this.headGroup.add(c);const u=new bt(new Ht(.3,.3,.22),n);u.position.set(0,.16,-.28),this.headGroup.add(u);const d=new bt(new Ht(.24,.1,.04),a);d.position.set(0,-.12,.23),this.headGroup.add(d);const p=new bt(new Ht(.08,.08,.02),o);p.position.set(-.11,.06,.245);const m=p.clone();m.position.x=.11,this.headGroup.add(p),this.headGroup.add(m),this.gown.add(this.headGroup),this.leftArm=new bt(new Ht(.2,.68,.2),t),this.leftArm.position.set(-.48,.2,.1),this.leftArm.castShadow=!0,this.gown.add(this.leftArm),this.rightArmGroup=new re,this.rightArmGroup.position.set(.48,.3,0);const M=new bt(new Ht(.2,.68,.2),t);M.position.y=-.25,M.castShadow=!0,this.rightArmGroup.add(M),this.batGroup=new re,this.batGroup.position.set(0,-.55,.1);const x=new bt(new Ht(.09,.72,.09),s);x.position.y=-.2,x.castShadow=!0,this.batGroup.add(x);const f=new bt(new Ht(.13,.38,.13),r);f.position.y=-.48,f.castShadow=!0,this.batGroup.add(f),this.rightArmGroup.add(this.batGroup),this.gown.add(this.rightArmGroup)}animate(t,e,n){if(n){this.rightArmGroup.rotation.x=-Math.PI*.85,this.rightArmGroup.rotation.y=-Math.PI*.35,this.headGroup.rotation.x=.2;return}const s=Math.sin(e*12);this.leftArm.rotation.x=s*.8,this.rightArmGroup.rotation.x=-s*.8-.2,this.rightArmGroup.rotation.z=-.2,this.headGroup.rotation.y=Math.sin(e*3)*.15,this.gown.rotation.z=Math.sin(e*12)*.05}}class Vf{constructor(t){this.scene=t,this.model=new Hf,this.scene.add(this.model.group),this.position=new N(0,0,12),this.animTime=0,this.isAttacking=!1,this.model.group.visible=!1}reset(){this.position.set(0,0,12),this.animTime=0,this.isAttacking=!1,this.model.group.visible=!1,this.model.group.position.set(0,0,12)}update(t,e,n,s){if(this.animTime+=t,s)this.isAttacking=!0,this.model.group.visible=!0,this.position.x=e.x,this.position.y=e.y,this.position.z+=(e.z+.8-this.position.z)*Math.min(t*14,1);else if(this.isAttacking=!1,n>=.25){this.model.group.visible=!0;const o=5.5-(n-.25)/.75*4.5,a=e.z+o,l=e.x;this.position.z+=(a-this.position.z)*Math.min(t*10,1),this.position.x+=(l-this.position.x)*Math.min(t*12,1),this.position.y=e.y}else this.model.group.visible=!1,this.position.set(e.x,e.y,e.z+18);this.model.group.position.copy(this.position),this.model.animate(t,this.animTime,this.isAttacking)}}class kf{constructor(t,e){this.scene=t,this.textures=e,this.biomeMaterials={},["plains","desert","snow","blossom","savanna"].forEach(s=>{const r=e[s],o=new Mn({map:r.side}),a=new Mn({map:r.top}),l=new Mn({map:r.dirt}),c=[o,o,a,l,o,o];this.biomeMaterials[s]={blockMats:c,borderMat:new Mn({map:r.border}),dirtMat:l,woodMat:new Mn({map:r.wood}),leafMat:new Mn({map:r.leaves,transparent:!0,alphaTest:.2}),skyColor:r.sky}}),this.brickMat=new Mn({map:e.brick}),this.coinMat=new Ce({map:e.coin,metalness:.8,roughness:.2,emissive:16755200,emissiveIntensity:.4}),this.setupLighting()}setupLighting(){const t=new Df(16777215,5611566,.85);this.scene.add(t);const e=new Nf(16777215,.9);e.position.set(30,45,30),e.castShadow=!0,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,e.shadow.camera.near=.5,e.shadow.camera.far=120,e.shadow.camera.left=-40,e.shadow.camera.right=40,e.shadow.camera.top=40,e.shadow.camera.bottom=-40,this.scene.add(e),this.scene.background=new zt(8900331),this.scene.fog=new ir(8900331,.008)}getBiomeKey(t){const e=Math.abs(t);return e<150?"plains":e<300?"desert":e<450?"snow":e<600?"blossom":"savanna"}createChunk(t){const e=new re;e.position.z=t;const n=this.getBiomeKey(t),s=this.biomeMaterials[n],r=new Ht(1,1,1),o=30;let a=0,l=0,c=0;for(let h=0;h<o;h++)for(let A=-30;A<=30;A++){const T=Math.abs(A);if(T<=3)a++;else if(T===4)l++;else{const w=T-4,D=Math.min(10,Math.floor(Math.sin(A*.4+h*.2)*2+w*.35+1));a++,c+=Math.max(0,D)}}const u=new Bs(r,s.blockMats,a);u.receiveShadow=!0,u.castShadow=!0;const d=new Bs(r,s.borderMat,l);d.receiveShadow=!0;const p=new Bs(r,s.dirtMat,c);p.receiveShadow=!0;const m=new de;let M=0,x=0,f=0;for(let h=0;h<o;h++){for(let A=-30;A<=30;A++){const T=Math.abs(A);if(T<=3)m.position.set(A,-.5,-h),m.updateMatrix(),u.setMatrixAt(M++,m.matrix);else if(T===4)m.position.set(A,-.5,-h),m.updateMatrix(),d.setMatrixAt(x++,m.matrix);else{const w=T-4,D=Math.min(10,Math.floor(Math.sin(A*.4+h*.2)*2+w*.35+1));m.position.set(A,-.5+D,-h),m.updateMatrix(),u.setMatrixAt(M++,m.matrix);for(let v=0;v<D;v++)m.position.set(A,-.5+v,-h),m.updateMatrix(),p.setMatrixAt(f++,m.matrix)}}if(h%8===0){const A=-7-Math.floor(Math.random()*6),T=7+Math.floor(Math.random()*6),w=Math.min(10,Math.floor(Math.sin(A*.4+h*.2)*2+(Math.abs(A)-4)*.35+1)),D=Math.min(10,Math.floor(Math.sin(T*.4+h*.2)*2+(Math.abs(T)-4)*.35+1));this.addTree(e,A,-h,-.5+w,s),this.addTree(e,T,-h,-.5+D,s)}}return u.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0,p.instanceMatrix.needsUpdate=!0,e.add(u),e.add(d),e.add(p),e.userData={biomeKey:n},e}addTree(t,e,n,s,r){const o=new Ht(1,1,1);for(let a=1;a<=3;a++){const l=new bt(o,r.woodMat);l.position.set(e,s+a,n),l.castShadow=!0,t.add(l)}for(let a=-1;a<=1;a++)for(let l=3;l<=4;l++)for(let c=-1;c<=1;c++){if(a===0&&c===0&&l===3)continue;const u=new bt(o,r.leafMat);u.position.set(e+a,s+l,n+c),u.castShadow=!0,t.add(u)}}createLowObstacle(t,e){const n=new re;n.position.set(t,.4,e);const s=new Ht(1.9,.8,.4),r=new bt(s,this.brickMat);return r.castShadow=!0,r.receiveShadow=!0,n.add(r),n.userData={type:"LOW",bboxHeight:.8,bboxWidth:1.9},n}createHighObstacle(t,e){const n=new re;n.position.set(t,0,e);const s=new Ht(.3,3,.3),r=new Ht(2,.7,.4),o=new bt(s,this.brickMat);o.position.set(-.95,1.5,0);const a=new bt(s,this.brickMat);a.position.set(.95,1.5,0);const l=new bt(r,this.brickMat);return l.position.set(0,2.2,0),o.castShadow=!0,a.castShadow=!0,l.castShadow=!0,n.add(o),n.add(a),n.add(l),n.userData={type:"HIGH",minHeight:1.5,bboxWidth:1.9},n}createWallBlockade(t,e){const n=new re;n.position.set(t,1.25,e);const s=new Ht(1.95,2.5,.5),r=new bt(s,this.brickMat);return r.castShadow=!0,r.receiveShadow=!0,n.add(r),n.userData={type:"WALL",bboxHeight:2.5,bboxWidth:1.95},n}createCoin(t,e){const n=new re;n.position.set(t,.8,e);const s=new Ht(.4,.4,.1),r=new bt(s,this.coinMat);return r.castShadow=!0,n.add(r),n.userData={type:"COIN",radius:.5,mesh:r},n}}class Wf{constructor(){this.group=new re;const t=new Ce({color:4421180,roughness:.5}),e=new Ce({color:2261120,roughness:.4}),n=new Ce({color:1914460,roughness:.5}),s=new Qe({color:660490});this.torso=new bt(new Ht(.6,.75,.35),e),this.torso.position.y=.85,this.torso.castShadow=!0,this.group.add(this.torso),this.headGroup=new re,this.headGroup.position.set(0,.45,0);const r=new bt(new Ht(.42,.42,.42),t);r.castShadow=!0,this.headGroup.add(r);const o=new bt(new Ht(.08,.08,.02),s);o.position.set(-.1,.04,.22);const a=o.clone();a.position.x=.1,this.headGroup.add(o),this.headGroup.add(a),this.torso.add(this.headGroup);const l=new bt(new Ht(.18,.65,.18),t);l.position.set(-.4,.2,.25),l.rotation.x=-Math.PI*.48,l.castShadow=!0,this.torso.add(l);const c=l.clone();c.position.x=.4,this.torso.add(c);const u=new bt(new Ht(.22,.55,.22),n);u.position.set(-.16,.28,0),u.castShadow=!0,this.group.add(u);const d=u.clone();d.position.x=.16,this.group.add(d)}animate(t){this.group.rotation.z=Math.sin(t*6)*.05,this.headGroup.rotation.y=Math.sin(t*3)*.1}}class Xf{constructor(t,e){this.scene=t,this.env=new kf(t,e),this.chunks=[],this.obstacles=[],this.coins=[],this.zombies=[],this.chunkLength=30,this.nextChunkZ=60,this.lanes=[-2.5,0,2.5]}reset(){this.chunks.forEach(t=>this.scene.remove(t)),this.chunks=[],this.obstacles.forEach(t=>this.scene.remove(t)),this.obstacles=[],this.coins.forEach(t=>this.scene.remove(t)),this.coins=[],this.zombies.forEach(t=>this.scene.remove(t.group)),this.zombies=[],this.nextChunkZ=60;for(let t=0;t<10;t++)this.spawnChunk(t>=4)}spawnChunk(t=!0){const e=this.env.createChunk(this.nextChunkZ);this.scene.add(e),this.chunks.push(e),t&&this.populateChunk(this.nextChunkZ),this.nextChunkZ-=this.chunkLength}populateChunk(t){const e=2+Math.floor(Math.random()*2);for(let s=0;s<e;s++){const r=t-(6+s*10+Math.random()*3),o=Math.floor(Math.random()*3),a=this.lanes[o],l=Math.random();let c;l<.4?c=this.env.createLowObstacle(a,r):l<.75?c=this.env.createHighObstacle(a,r):c=this.env.createWallBlockade(a,r),this.scene.add(c),this.obstacles.push(c)}if(Math.random()>.25){const s=this.lanes[Math.floor(Math.random()*3)],r=t-(10+Math.random()*15),o=new Wf;o.group.position.set(s,0,r),o.speed=3.5+Math.random()*2,this.scene.add(o.group),this.zombies.push(o)}const n=1+Math.floor(Math.random()*2);for(let s=0;s<n;s++){const r=this.lanes[Math.floor(Math.random()*3)],o=t-(4+Math.random()*15),a=3+Math.floor(Math.random()*4);for(let l=0;l<a;l++){const c=this.env.createCoin(r,o-l*1.8);this.scene.add(c),this.coins.push(c)}}}update(t,e,n=1){if(this.chunks.length>0){const s=this.chunks[0];s.position.z>t.z+80&&(this.scene.remove(s),this.chunks.shift(),this.spawnChunk(!0))}for(let s=this.zombies.length-1;s>=0;s--){const r=this.zombies[s];if(r.group.position.z+=(r.speed+(n-1)*1)*e,r.group.position.z<t.z){const o=1.8+n*.4;r.group.position.x+=(t.x-r.group.position.x)*Math.min(e*o,1)}r.animate(t.z*.05),r.group.position.z>t.z+30&&(this.scene.remove(r.group),this.zombies.splice(s,1))}for(let s=this.coins.length-1;s>=0;s--){const r=this.coins[s];r.userData.mesh&&(r.userData.mesh.rotation.y+=e*4),r.position.z>t.z+30&&(this.scene.remove(r),this.coins.splice(s,1))}for(let s=this.obstacles.length-1;s>=0;s--){const r=this.obstacles[s];r.position.z>t.z+30&&(this.scene.remove(r),this.obstacles.splice(s,1))}}checkObstacleCollisions(t){for(let e=0;e<this.obstacles.length;e++){const n=this.obstacles[e],s=n.userData.type,r=n.position,o=t.position,a=Math.abs(r.z-o.z),l=Math.abs(r.x-o.x);if(a<.8&&l<.9){if(s==="LOW"){if(o.y<.6)return this.scene.remove(n),this.obstacles.splice(e,1),{type:"COLLISION_LOW",penalty:.35}}else if(s==="HIGH"){if(t.state!=="SLIDING")return this.scene.remove(n),this.obstacles.splice(e,1),{type:"COLLISION_HIGH",penalty:.35}}else if(s==="WALL")return this.scene.remove(n),this.obstacles.splice(e,1),{type:"COLLISION_WALL",penalty:.35}}}for(let e=0;e<this.zombies.length;e++){const n=this.zombies[e],s=n.group.position,r=t.position,o=Math.abs(s.z-r.z),a=Math.abs(s.x-r.x);if(o<.8&&a<.9&&r.y<.8)return this.scene.remove(n.group),this.zombies.splice(e,1),{type:"COLLISION_ZOMBIE",penalty:.15}}return null}checkCoinPickups(t){let e=0;for(let n=this.coins.length-1;n>=0;n--){const s=this.coins[n];s.position.distanceTo(t)<1.2&&(this.scene.remove(s),this.coins.splice(n,1),e++)}return e}}class qf{constructor(){this.value=0,this.fillElem=document.getElementById("danger-bar-inner")}reset(){this.value=0,this.updateHUD()}addDanger(t){this.value=Math.min(1,this.value+t),this.updateHUD()}update(t){this.value>0&&(this.value=Math.max(0,this.value-.04*t),this.updateHUD())}updateHUD(){if(this.fillElem){const t=Math.floor(this.value*100);this.fillElem.style.width=`${t}%`}}isMax(){return this.value>=.99}}class Yf{constructor(){this.actionQueue=[],this.touchStartX=0,this.touchStartY=0,this.bindEvents()}bindEvents(){window.addEventListener("keydown",t=>{if(t.repeat)return;const e=t.code;e==="KeyA"||e==="ArrowLeft"?this.actionQueue.push("LEFT"):e==="KeyD"||e==="ArrowRight"?this.actionQueue.push("RIGHT"):e==="KeyW"||e==="ArrowUp"||e==="Space"?this.actionQueue.push("JUMP"):(e==="KeyS"||e==="ArrowDown")&&this.actionQueue.push("SLIDE")}),window.addEventListener("touchstart",t=>{t.touches.length>0&&(this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY)},{passive:!0}),window.addEventListener("touchend",t=>{if(t.changedTouches.length>0){const e=t.changedTouches[0].clientX-this.touchStartX,n=t.changedTouches[0].clientY-this.touchStartY,s=Math.abs(e),r=Math.abs(n);Math.max(s,r)>30&&(s>r?e<0?this.actionQueue.push("LEFT"):this.actionQueue.push("RIGHT"):n<0?this.actionQueue.push("JUMP"):this.actionQueue.push("SLIDE"))}},{passive:!0})}consumeAction(){return this.actionQueue.shift()||null}clear(){this.actionQueue=[]}}class Kf{constructor(){this.ctx=null,this.muted=!1;const t=document.getElementById("sound-btn");t&&t.addEventListener("click",()=>{this.muted=!this.muted,t.innerText=this.muted?"🔇":"🔊"})}initContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playStep(){if(this.muted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.sampleRate*.04,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0);for(let l=0;l<e;l++)s[l]=Math.random()*2-1;const r=this.ctx.createBufferSource();r.buffer=n;const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(400,t);const a=this.ctx.createGain();a.gain.setValueAtTime(.15,t),a.gain.exponentialRampToValueAtTime(.01,t+.04),r.connect(o),o.connect(a),a.connect(this.ctx.destination),r.start(t)}playCoin(){if(this.muted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(987.77,t),e.frequency.setValueAtTime(1318.51,t+.06),n.gain.setValueAtTime(.2,t),n.gain.exponentialRampToValueAtTime(.01,t+.25),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.25)}playStumble(){if(this.muted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(160,t),e.frequency.exponentialRampToValueAtTime(40,t+.3),n.gain.setValueAtTime(.4,t),n.gain.exponentialRampToValueAtTime(.01,t+.3),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.3)}playJumpscare(){if(this.muted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(300,t),e.frequency.linearRampToValueAtTime(800,t+.15),e.frequency.linearRampToValueAtTime(200,t+.5),n.gain.setValueAtTime(.6,t),n.gain.exponentialRampToValueAtTime(.01,t+.6),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.6)}}class jf{constructor(){this.gameState="START",this.container=document.getElementById("game-container"),this.hudElem=document.getElementById("hud"),this.startScreen=document.getElementById("start-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.gameOverScreen=document.getElementById("game-over-screen"),this.levelToast=document.getElementById("level-toast"),this.hudCoins=document.getElementById("hud-coins"),this.hudScore=document.getElementById("hud-score"),this.hudHighScore=document.getElementById("hud-highscore"),this.hudLevel=document.getElementById("hud-level"),this.goDistance=document.getElementById("go-distance"),this.goCoins=document.getElementById("go-coins"),this.goScore=document.getElementById("go-score"),this.goHighScore=document.getElementById("go-highscore"),this.highScore=parseInt(localStorage.getItem("blockrun_highscore")||"0",10),this.hudHighScore.innerText=this.highScore,this.scene=new Cf,this.camera=new Ue(65,window.innerWidth/window.innerHeight,.1,200),this.renderer=new po({antialias:!0,alpha:!1,powerPreference:"high-performance",precision:"highp"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Oa,this.container.appendChild(this.renderer.domElement),this.textures=Of(),this.player=new Gf(this.scene),this.granny=new Vf(this.scene),this.world=new Xf(this.scene,this.textures),this.dangerMeter=new qf,this.input=new Yf,this.sound=new Kf,this.coinsCollected=0,this.baseSpeed=14,this.forwardSpeed=14,this.maxSpeed=32,this.cameraShake=0,this.stepTimer=0,this.playTime=0,this.hardnessLevel=1,this.bindEvents(),this.clock=new Ff,this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}bindEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),document.getElementById("start-btn").addEventListener("click",()=>{this.startGame()}),document.getElementById("resume-btn").addEventListener("click",()=>{this.resumeGame()}),document.getElementById("restart-pause-btn").addEventListener("click",()=>{this.startGame()}),document.getElementById("restart-btn").addEventListener("click",()=>{this.startGame()}),window.addEventListener("keydown",t=>{(t.code==="Escape"||t.code==="KeyP")&&(this.gameState==="PLAYING"?this.pauseGame():this.gameState==="PAUSED"&&this.resumeGame())})}startGame(){this.gameState="PLAYING",this.coinsCollected=0,this.baseSpeed=14,this.forwardSpeed=14,this.cameraShake=0,this.playTime=0,this.hardnessLevel=1,this.player.reset(),this.granny.reset(),this.world.reset(),this.dangerMeter.reset(),this.input.clear(),this.startScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.hudElem.classList.remove("hidden"),this.hudLevel.innerText="1",this.updateHUD(0,0)}pauseGame(){this.gameState==="PLAYING"&&(this.gameState="PAUSED",this.pauseScreen.classList.remove("hidden"))}resumeGame(){this.gameState==="PAUSED"&&(this.gameState="PLAYING",this.pauseScreen.classList.add("hidden"))}triggerGameOver(){this.gameState="GAME_OVER",this.sound.playJumpscare(),this.player.state="DEFEAT";const t=Math.floor(Math.abs(this.player.position.z)),e=t*10+this.coinsCollected*100;e>this.highScore&&(this.highScore=e,localStorage.setItem("blockrun_highscore",this.highScore.toString()),this.hudHighScore.innerText=this.highScore),this.goDistance.innerText=t.toString(),this.goCoins.innerText=this.coinsCollected.toString(),this.goScore.innerText=e.toString(),this.goHighScore.innerText=this.highScore.toString(),setTimeout(()=>{this.gameOverScreen.classList.remove("hidden"),this.hudElem.classList.add("hidden")},1200)}updateHUD(t,e){this.hudCoins.innerText=this.coinsCollected.toString(),this.hudScore.innerText=e.toString(),this.hudLevel.innerText=this.hardnessLevel.toString()}animate(){requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.05);if(this.gameState==="PLAYING"){this.playTime+=t;const e=1+Math.floor(this.playTime/60);e>this.hardnessLevel&&(this.hardnessLevel=e,this.baseSpeed+=3,this.levelToast&&(this.levelToast.innerText=`HARDNESS INCREASED: LEVEL ${this.hardnessLevel}!`,this.levelToast.classList.remove("hidden"),this.levelToast.style.animation="none",this.levelToast.offsetHeight,this.levelToast.style.animation="level-toast-pop 2.5s ease-out forwards"));let n=this.input.consumeAction();for(;n;)n==="LEFT"?this.player.moveLeft():n==="RIGHT"?this.player.moveRight():n==="JUMP"?this.player.jump():n==="SLIDE"&&this.player.slide(),n=this.input.consumeAction();this.forwardSpeed=Math.min(this.maxSpeed,this.baseSpeed+this.playTime*.08),this.player.update(t,this.forwardSpeed,this.dangerMeter.value),this.player.position.y===0&&this.player.state==="RUNNING"&&(this.stepTimer+=t,this.stepTimer>.28&&(this.sound.playStep(),this.stepTimer=0)),this.dangerMeter.update(t),this.world.update(this.player.position,t,this.hardnessLevel);const s=this.world.checkObstacleCollisions(this.player);s&&(this.player.triggerStumble(),this.dangerMeter.addDanger(s.penalty),this.cameraShake=.4,this.sound.playStumble(),this.dangerMeter.isMax()&&this.triggerGameOver());const r=this.world.checkCoinPickups(this.player.position);r>0&&(this.coinsCollected+=r,this.sound.playCoin()),this.granny.update(t,this.player.position,this.dangerMeter.value,!1);const o=this.world.env.getBiomeKey(this.player.position.z),a=this.world.env.biomeMaterials[o].skyColor;this.scene.background.lerp(new zt(a),t*1.5),this.scene.fog.color.lerp(new zt(a),t*1.5);const l=this.player.position;let c=(Math.random()-.5)*this.cameraShake,u=(Math.random()-.5)*this.cameraShake;this.cameraShake>0&&(this.cameraShake=Math.max(0,this.cameraShake-t*2)),this.camera.position.set(l.x*.4+c,Math.max(1.8,l.y*.35+3.2)+u,l.z+5.8),this.camera.lookAt(l.x*.2,l.y*.3+1.2,l.z-4);const d=Math.floor(Math.abs(l.z)),p=d*10+this.coinsCollected*100;this.updateHUD(d,p)}else if(this.gameState==="GAME_OVER"){this.granny.update(t,this.player.position,1,!0);const e=this.player.position;this.camera.position.set(e.x+.5,e.y+1.6,e.z+2.5),this.camera.lookAt(e.x,e.y+1.2,e.z)}else if(this.gameState==="START"){const e=this.clock.getElapsedTime()*.2;this.camera.position.x=Math.sin(e)*12,this.camera.position.z=Math.cos(e)*12,this.camera.position.y=6,this.camera.lookAt(0,0,0)}this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new jf});
