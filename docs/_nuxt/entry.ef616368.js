function Rf(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const De={},Vs=[],cn=()=>{},R0=()=>!1,C0=/^on[^a-z]/,Wo=t=>C0.test(t),Cf=t=>t.startsWith("onUpdate:"),Ze=Object.assign,Sf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},S0=Object.prototype.hasOwnProperty,me=(t,e)=>S0.call(t,e),Z=Array.isArray,Fs=t=>qo(t)==="[object Map]",vy=t=>qo(t)==="[object Set]",P0=t=>qo(t)==="[object RegExp]",ne=t=>typeof t=="function",$e=t=>typeof t=="string",Pf=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",Ey=t=>Ne(t)&&ne(t.then)&&ne(t.catch),Ty=Object.prototype.toString,qo=t=>Ty.call(t),k0=t=>qo(t).slice(8,-1),wy=t=>qo(t)==="[object Object]",kf=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xi=Rf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ic=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},N0=/-(\w)/g,Nn=ic(t=>t.replace(N0,(e,n)=>n?n.toUpperCase():"")),O0=/\B([A-Z])/g,ls=ic(t=>t.replace(O0,"-$1").toLowerCase()),oc=ic(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xa=ic(t=>t?`on${oc(t)}`:""),mo=(t,e)=>!Object.is(t,e),Us=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ol=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Yu=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Iy=t=>{const e=$e(t)?Number(t):NaN;return isNaN(e)?t:e};let Up;const Qu=()=>Up||(Up=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ac(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?L0(r):ac(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if($e(t))return t;if(Ne(t))return t}}const D0=/;(?![^(]*\))/g,x0=/:([^]+)/,M0=/\/\*[^]*?\*\//g;function L0(t){const e={};return t.replace(M0,"").split(D0).forEach(n=>{if(n){const r=n.split(x0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ko(t){let e="";if($e(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const r=Ko(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Ay(t){if(!t)return null;let{class:e,style:n}=t;return e&&!$e(e)&&(t.class=Ko(e)),n&&(t.style=ac(n)),t}const V0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",F0=Rf(V0);function by(t){return!!t||t===""}const i2=t=>$e(t)?t:t==null?"":Z(t)||Ne(t)&&(t.toString===Ty||!ne(t.toString))?JSON.stringify(t,Ry,2):String(t),Ry=(t,e)=>e&&e.__v_isRef?Ry(t,e.value):Fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:vy(e)?{[`Set(${e.size})`]:[...e.values()]}:Ne(e)&&!Z(e)&&!wy(e)?String(e):e;let Ut;class U0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ut,!e&&Ut&&(this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ut;try{return Ut=this,e()}finally{Ut=n}}}on(){Ut=this}off(){Ut=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function B0(t,e=Ut){e&&e.active&&e.effects.push(t)}function Cy(){return Ut}function $0(t){Ut&&Ut.cleanups.push(t)}const Nf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Sy=t=>(t.w&Ar)>0,Py=t=>(t.n&Ar)>0,H0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ar},j0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Sy(s)&&!Py(s)?s.delete(t):e[n++]=s,s.w&=~Ar,s.n&=~Ar}e.length=n}},al=new WeakMap;let Hi=0,Ar=1;const Xu=30;let tn;const zr=Symbol(""),Ju=Symbol("");class Of{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,B0(this,r)}run(){if(!this.active)return this.fn();let e=tn,n=mr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=tn,tn=this,mr=!0,Ar=1<<++Hi,Hi<=Xu?H0(this):Bp(this),this.fn()}finally{Hi<=Xu&&j0(this),Ar=1<<--Hi,tn=this.parent,mr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){tn===this?this.deferStop=!0:this.active&&(Bp(this),this.onStop&&this.onStop(),this.active=!1)}}function Bp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let mr=!0;const ky=[];function mi(){ky.push(mr),mr=!1}function _i(){const t=ky.pop();mr=t===void 0?!0:t}function Vt(t,e,n){if(mr&&tn){let r=al.get(t);r||al.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Nf()),Ny(s)}}function Ny(t,e){let n=!1;Hi<=Xu?Py(t)||(t.n|=Ar,n=!Sy(t)):n=!t.has(tn),n&&(t.add(tn),tn.deps.push(t))}function Gn(t,e,n,r,s,i){const o=al.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?kf(n)&&a.push(o.get("length")):(a.push(o.get(zr)),Fs(t)&&a.push(o.get(Ju)));break;case"delete":Z(t)||(a.push(o.get(zr)),Fs(t)&&a.push(o.get(Ju)));break;case"set":Fs(t)&&a.push(o.get(zr));break}if(a.length===1)a[0]&&Zu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Zu(Nf(l))}}function Zu(t,e){const n=Z(t)?t:[...t];for(const r of n)r.computed&&$p(r);for(const r of n)r.computed||$p(r)}function $p(t,e){(t!==tn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function W0(t,e){var n;return(n=al.get(t))==null?void 0:n.get(e)}const q0=Rf("__proto__,__v_isRef,__isVue"),Oy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pf)),K0=Df(),z0=Df(!1,!0),G0=Df(!0),Hp=Y0();function Y0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=_e(this);for(let i=0,o=this.length;i<o;i++)Vt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(_e)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){mi();const r=_e(this)[e].apply(this,n);return _i(),r}}),t}function Q0(t){const e=_e(this);return Vt(e,"has",t),e.hasOwnProperty(t)}function Df(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?fA:Vy:e?Ly:My).get(r))return r;const o=Z(r);if(!t){if(o&&me(Hp,s))return Reflect.get(Hp,s,i);if(s==="hasOwnProperty")return Q0}const a=Reflect.get(r,s,i);return(Pf(s)?Oy.has(s):q0(s))||(t||Vt(r,"get",s),e)?a:Xe(a)?o&&kf(s)?a:a.value:Ne(a)?t?Fy(a):Yn(a):a}}const X0=Dy(),J0=Dy(!0);function Dy(t=!1){return function(n,r,s,i){let o=n[r];if(Zr(o)&&Xe(o)&&!Xe(s))return!1;if(!t&&(!ll(s)&&!Zr(s)&&(o=_e(o),s=_e(s)),!Z(n)&&Xe(o)&&!Xe(s)))return o.value=s,!0;const a=Z(n)&&kf(r)?Number(r)<n.length:me(n,r),l=Reflect.set(n,r,s,i);return n===_e(i)&&(a?mo(s,o)&&Gn(n,"set",r,s):Gn(n,"add",r,s)),l}}function Z0(t,e){const n=me(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Gn(t,"delete",e,void 0),r}function eA(t,e){const n=Reflect.has(t,e);return(!Pf(e)||!Oy.has(e))&&Vt(t,"has",e),n}function tA(t){return Vt(t,"iterate",Z(t)?"length":zr),Reflect.ownKeys(t)}const xy={get:K0,set:X0,deleteProperty:Z0,has:eA,ownKeys:tA},nA={get:G0,set(t,e){return!0},deleteProperty(t,e){return!0}},rA=Ze({},xy,{get:z0,set:J0}),xf=t=>t,lc=t=>Reflect.getPrototypeOf(t);function Ra(t,e,n=!1,r=!1){t=t.__v_raw;const s=_e(t),i=_e(e);n||(e!==i&&Vt(s,"get",e),Vt(s,"get",i));const{has:o}=lc(s),a=r?xf:n?Vf:_o;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ca(t,e=!1){const n=this.__v_raw,r=_e(n),s=_e(t);return e||(t!==s&&Vt(r,"has",t),Vt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Sa(t,e=!1){return t=t.__v_raw,!e&&Vt(_e(t),"iterate",zr),Reflect.get(t,"size",t)}function jp(t){t=_e(t);const e=_e(this);return lc(e).has.call(e,t)||(e.add(t),Gn(e,"add",t,t)),this}function Wp(t,e){e=_e(e);const n=_e(this),{has:r,get:s}=lc(n);let i=r.call(n,t);i||(t=_e(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?mo(e,o)&&Gn(n,"set",t,e):Gn(n,"add",t,e),this}function qp(t){const e=_e(this),{has:n,get:r}=lc(e);let s=n.call(e,t);s||(t=_e(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Gn(e,"delete",t,void 0),i}function Kp(){const t=_e(this),e=t.size!==0,n=t.clear();return e&&Gn(t,"clear",void 0,void 0),n}function Pa(t,e){return function(r,s){const i=this,o=i.__v_raw,a=_e(o),l=e?xf:t?Vf:_o;return!t&&Vt(a,"iterate",zr),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function ka(t,e,n){return function(...r){const s=this.__v_raw,i=_e(s),o=Fs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?xf:e?Vf:_o;return!e&&Vt(i,"iterate",l?Ju:zr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ir(t){return function(...e){return t==="delete"?!1:this}}function sA(){const t={get(i){return Ra(this,i)},get size(){return Sa(this)},has:Ca,add:jp,set:Wp,delete:qp,clear:Kp,forEach:Pa(!1,!1)},e={get(i){return Ra(this,i,!1,!0)},get size(){return Sa(this)},has:Ca,add:jp,set:Wp,delete:qp,clear:Kp,forEach:Pa(!1,!0)},n={get(i){return Ra(this,i,!0)},get size(){return Sa(this,!0)},has(i){return Ca.call(this,i,!0)},add:ir("add"),set:ir("set"),delete:ir("delete"),clear:ir("clear"),forEach:Pa(!0,!1)},r={get(i){return Ra(this,i,!0,!0)},get size(){return Sa(this,!0)},has(i){return Ca.call(this,i,!0)},add:ir("add"),set:ir("set"),delete:ir("delete"),clear:ir("clear"),forEach:Pa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ka(i,!1,!1),n[i]=ka(i,!0,!1),e[i]=ka(i,!1,!0),r[i]=ka(i,!0,!0)}),[t,n,e,r]}const[iA,oA,aA,lA]=sA();function Mf(t,e){const n=e?t?lA:aA:t?oA:iA;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(me(n,s)&&s in r?n:r,s,i)}const cA={get:Mf(!1,!1)},uA={get:Mf(!1,!0)},hA={get:Mf(!0,!1)},My=new WeakMap,Ly=new WeakMap,Vy=new WeakMap,fA=new WeakMap;function dA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pA(t){return t.__v_skip||!Object.isExtensible(t)?0:dA(k0(t))}function Yn(t){return Zr(t)?t:Lf(t,!1,xy,cA,My)}function zo(t){return Lf(t,!1,rA,uA,Ly)}function Fy(t){return Lf(t,!0,nA,hA,Vy)}function Lf(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=pA(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Bs(t){return Zr(t)?Bs(t.__v_raw):!!(t&&t.__v_isReactive)}function Zr(t){return!!(t&&t.__v_isReadonly)}function ll(t){return!!(t&&t.__v_isShallow)}function Uy(t){return Bs(t)||Zr(t)}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function cl(t){return ol(t,"__v_skip",!0),t}const _o=t=>Ne(t)?Yn(t):t,Vf=t=>Ne(t)?Fy(t):t;function By(t){mr&&tn&&(t=_e(t),Ny(t.dep||(t.dep=Nf())))}function $y(t,e){t=_e(t);const n=t.dep;n&&Zu(n)}function Xe(t){return!!(t&&t.__v_isRef===!0)}function Je(t){return Hy(t,!1)}function Qs(t){return Hy(t,!0)}function Hy(t,e){return Xe(t)?t:new gA(t,e)}class gA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:_e(e),this._value=n?e:_o(e)}get value(){return By(this),this._value}set value(e){const n=this.__v_isShallow||ll(e)||Zr(e);e=n?e:_e(e),mo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:_o(e),$y(this))}}function Ce(t){return Xe(t)?t.value:t}function $n(t){return ne(t)?t():Ce(t)}const mA={get:(t,e,n)=>Ce(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Xe(s)&&!Xe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function jy(t){return Bs(t)?t:new Proxy(t,mA)}function _A(t){const e=Z(t)?new Array(t.length):{};for(const n in t)e[n]=Wy(t,n);return e}class yA{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return W0(_e(this._object),this._key)}}class vA{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Ff(t,e,n){return Xe(t)?t:ne(t)?new vA(t):Ne(t)&&arguments.length>1?Wy(t,e,n):Je(t)}function Wy(t,e,n){const r=t[e];return Xe(r)?r:new yA(t,e,n)}class EA{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Of(e,()=>{this._dirty||(this._dirty=!0,$y(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=_e(this);return By(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function TA(t,e,n=!1){let r,s;const i=ne(t);return i?(r=t,s=cn):(r=t.get,s=t.set),new EA(r,s,i||!s,n)}function _r(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){yi(i,e,n)}return s}function Xt(t,e,n,r){if(ne(t)){const i=_r(t,e,n,r);return i&&Ey(i)&&i.catch(o=>{yi(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Xt(t[i],e,n,r));return s}function yi(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){_r(l,null,10,[t,o,a]);return}}wA(t,n,s,r)}function wA(t,e,n,r=!0){console.error(t)}let yo=!1,eh=!1;const vt=[];let Tn=0;const $s=[];let Hn=null,Fr=0;const qy=Promise.resolve();let Uf=null;function cs(t){const e=Uf||qy;return t?e.then(this?t.bind(this):t):e}function IA(t){let e=Tn+1,n=vt.length;for(;e<n;){const r=e+n>>>1;vo(vt[r])<t?e=r+1:n=r}return e}function cc(t){(!vt.length||!vt.includes(t,yo&&t.allowRecurse?Tn+1:Tn))&&(t.id==null?vt.push(t):vt.splice(IA(t.id),0,t),Ky())}function Ky(){!yo&&!eh&&(eh=!0,Uf=qy.then(Gy))}function AA(t){const e=vt.indexOf(t);e>Tn&&vt.splice(e,1)}function zy(t){Z(t)?$s.push(...t):(!Hn||!Hn.includes(t,t.allowRecurse?Fr+1:Fr))&&$s.push(t),Ky()}function zp(t,e=yo?Tn+1:0){for(;e<vt.length;e++){const n=vt[e];n&&n.pre&&(vt.splice(e,1),e--,n())}}function ul(t){if($s.length){const e=[...new Set($s)];if($s.length=0,Hn){Hn.push(...e);return}for(Hn=e,Hn.sort((n,r)=>vo(n)-vo(r)),Fr=0;Fr<Hn.length;Fr++)Hn[Fr]();Hn=null,Fr=0}}const vo=t=>t.id==null?1/0:t.id,bA=(t,e)=>{const n=vo(t)-vo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Gy(t){eh=!1,yo=!0,vt.sort(bA);const e=cn;try{for(Tn=0;Tn<vt.length;Tn++){const n=vt[Tn];n&&n.active!==!1&&_r(n,null,14)}}finally{Tn=0,vt.length=0,ul(),yo=!1,Uf=null,(vt.length||$s.length)&&Gy()}}function RA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||De;f&&(s=n.map(d=>$e(d)?d.trim():d)),h&&(s=n.map(Yu))}let a,l=r[a=Xa(e)]||r[a=Xa(Nn(e))];!l&&i&&(l=r[a=Xa(ls(e))]),l&&Xt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xt(c,t,6,s)}}function Yy(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ne(t)){const l=c=>{const u=Yy(c,e,!0);u&&(a=!0,Ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Ne(t)&&r.set(t,null),null):(Z(i)?i.forEach(l=>o[l]=null):Ze(o,i),Ne(t)&&r.set(t,o),o)}function uc(t,e){return!t||!Wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,ls(e))||me(t,e))}let it=null,hc=null;function hl(t){const e=it;return it=t,hc=t&&t.type.__scopeId||null,e}function o2(t){hc=t}function a2(){hc=null}function dr(t,e=it,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ag(-1);const i=hl(e);let o;try{o=t(...s)}finally{hl(i),r._d&&ag(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function iu(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:y}=t;let T,m;const g=hl(t);try{if(n.shapeFlag&4){const E=s||r;T=Wt(u.call(E,E,h,i,d,f,p)),m=l}else{const E=e;T=Wt(E.length>1?E(i,{attrs:l,slots:a,emit:c}):E(i,null)),m=e.props?l:SA(l)}}catch(E){Zi.length=0,yi(E,t,1),T=Ue(St)}let w=T;if(m&&y!==!1){const E=Object.keys(m),{shapeFlag:A}=w;E.length&&A&7&&(o&&E.some(Cf)&&(m=PA(m,o)),w=Qn(w,m))}return n.dirs&&(w=Qn(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),T=w,hl(g),T}function CA(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Zs(r)){if(r.type!==St||r.children==="v-if"){if(e)return;e=r}}else return}return e}const SA=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wo(n))&&((e||(e={}))[n]=t[n]);return e},PA=(t,e)=>{const n={};for(const r in t)(!Cf(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function kA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Gp(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!uc(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Gp(r,o,c):!0:!!o;return!1}function Gp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!uc(n,i))return!0}return!1}function Bf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Qy=t=>t.__isSuspense,NA={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,c){t==null?OA(e,n,r,s,i,o,a,l,c):DA(t,e,n,r,s,o,a,l,c)},hydrate:xA,create:Hf,normalize:MA},$f=NA;function Eo(t,e){const n=t.props&&t.props[e];ne(n)&&n()}function OA(t,e,n,r,s,i,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=Hf(t,s,r,e,h,n,i,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,r,f,i,o),f.deps>0?(Eo(t,"onPending"),Eo(t,"onFallback"),c(null,t.ssFallback,e,n,r,null,i,o),Hs(f,t.ssFallback)):f.resolve(!1,!0)}function DA(t,e,n,r,s,i,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:y,isInFallback:T,isHydrating:m}=h;if(y)h.pendingBranch=f,rn(f,y)?(l(y,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():T&&(l(p,d,n,r,s,null,i,o,a),Hs(h,d))):(h.pendingId++,m?(h.isHydrating=!1,h.activeBranch=y):c(y,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),T?(l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(l(p,d,n,r,s,null,i,o,a),Hs(h,d))):p&&rn(f,p)?(l(p,f,n,r,s,h,i,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(p&&rn(f,p))l(p,f,n,r,s,h,i,o,a),Hs(h,f);else if(Eo(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:g,pendingId:w}=h;g>0?setTimeout(()=>{h.pendingId===w&&h.fallback(d)},g):g===0&&h.fallback(d)}}function Hf(t,e,n,r,s,i,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:p,o:{parentNode:y,remove:T}}=c;let m;const g=LA(t);g&&e!=null&&e.pendingBranch&&(m=e.pendingId,e.deps++);const w=t.props?Iy(t.props.timeout):void 0,E={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(A=!1,O=!1){const{vnode:x,activeBranch:R,pendingBranch:q,pendingId:j,effects:te,parentComponent:$,container:ee}=E;if(E.isHydrating)E.isHydrating=!1;else if(!A){const fe=R&&q.transition&&q.transition.mode==="out-in";fe&&(R.transition.afterLeave=()=>{j===E.pendingId&&f(q,ee,ye,0)});let{anchor:ye}=E;R&&(ye=p(R),d(R,$,E,!0)),fe||f(q,ee,ye,0)}Hs(E,q),E.pendingBranch=null,E.isInFallback=!1;let K=E.parent,We=!1;for(;K;){if(K.pendingBranch){K.effects.push(...te),We=!0;break}K=K.parent}We||zy(te),E.effects=[],g&&e&&e.pendingBranch&&m===e.pendingId&&(e.deps--,e.deps===0&&!O&&e.resolve()),Eo(x,"onResolve")},fallback(A){if(!E.pendingBranch)return;const{vnode:O,activeBranch:x,parentComponent:R,container:q,isSVG:j}=E;Eo(O,"onFallback");const te=p(x),$=()=>{E.isInFallback&&(h(null,A,q,te,R,null,j,a,l),Hs(E,A))},ee=A.transition&&A.transition.mode==="out-in";ee&&(x.transition.afterLeave=$),E.isInFallback=!0,d(x,R,null,!0),ee||$()},move(A,O,x){E.activeBranch&&f(E.activeBranch,A,O,x),E.container=A},next(){return E.activeBranch&&p(E.activeBranch)},registerDep(A,O){const x=!!E.pendingBranch;x&&E.deps++;const R=A.vnode.el;A.asyncDep.catch(q=>{yi(q,A,0)}).then(q=>{if(A.isUnmounted||E.isUnmounted||E.pendingId!==A.suspenseId)return;A.asyncResolved=!0;const{vnode:j}=A;ah(A,q,!1),R&&(j.el=R);const te=!R&&A.subTree.el;O(A,j,y(R||A.subTree.el),R?null:p(A.subTree),E,o,l),te&&T(te),Bf(A,j.el),x&&--E.deps===0&&E.resolve()})},unmount(A,O){E.isUnmounted=!0,E.activeBranch&&d(E.activeBranch,n,A,O),E.pendingBranch&&d(E.pendingBranch,n,A,O)}};return E}function xA(t,e,n,r,s,i,o,a,l){const c=e.suspense=Hf(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,i,o);return c.deps===0&&c.resolve(!1,!0),u}function MA(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Yp(r?n.default:n),t.ssFallback=r?Yp(n.fallback):Ue(St)}function Yp(t){let e;if(ne(t)){const n=Js&&t._c;n&&(t._d=!1,qt()),t=t(),n&&(t._d=!0,e=Yt,wv())}return Z(t)&&(t=CA(t)),t=Wt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Xy(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):zy(t)}function Hs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,Bf(r,s))}function LA(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function VA(t,e){return jf(t,null,e)}const Na={};function yr(t,e,n){return jf(t,e,n)}function jf(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=De){var a;const l=Cy()===((a=Ye)==null?void 0:a.scope)?Ye:null;let c,u=!1,h=!1;if(Xe(t)?(c=()=>t.value,u=ll(t)):Bs(t)?(c=()=>t,r=!0):Z(t)?(h=!0,u=t.some(E=>Bs(E)||ll(E)),c=()=>t.map(E=>{if(Xe(E))return E.value;if(Bs(E))return Br(E);if(ne(E))return _r(E,l,2)})):ne(t)?e?c=()=>_r(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),Xt(t,l,3,[d])}:c=cn,e&&r){const E=c;c=()=>Br(E())}let f,d=E=>{f=g.onStop=()=>{_r(E,l,4)}},p;if(ti)if(d=cn,e?n&&Xt(e,l,3,[c(),h?[]:void 0,d]):c(),s==="sync"){const E=Rb();p=E.__watcherHandles||(E.__watcherHandles=[])}else return cn;let y=h?new Array(t.length).fill(Na):Na;const T=()=>{if(g.active)if(e){const E=g.run();(r||u||(h?E.some((A,O)=>mo(A,y[O])):mo(E,y)))&&(f&&f(),Xt(e,l,3,[E,y===Na?void 0:h&&y[0]===Na?[]:y,d]),y=E)}else g.run()};T.allowRecurse=!!e;let m;s==="sync"?m=T:s==="post"?m=()=>lt(T,l&&l.suspense):(T.pre=!0,l&&(T.id=l.uid),m=()=>cc(T));const g=new Of(c,m);e?n?T():y=g.run():s==="post"?lt(g.run.bind(g),l&&l.suspense):g.run();const w=()=>{g.stop(),l&&l.scope&&Sf(l.scope.effects,g)};return p&&p.push(w),w}function FA(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?Jy(r,t):()=>r[t]:t.bind(r,r);let i;ne(e)?i=e:(i=e.handler,n=e);const o=Ye;ei(this);const a=jf(s,i.bind(r),n);return o?ei(o):Qr(),a}function Jy(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Br(t,e){if(!Ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Xe(t))Br(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)Br(t[n],e);else if(vy(t)||Fs(t))t.forEach(n=>{Br(n,e)});else if(wy(t))for(const n in t)Br(t[n],e);return t}function l2(t,e){const n=it;if(n===null)return t;const r=gc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=De]=e[i];o&&(ne(o)&&(o={mounted:o,updated:o}),o.deep&&Br(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function En(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(mi(),Xt(l,n,8,[t.el,a,t,e]),_i())}}function UA(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yo(()=>{t.isMounted=!0}),dc(()=>{t.isUnmounting=!0}),t}const jt=[Function,Array],Zy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:jt,onEnter:jt,onAfterEnter:jt,onEnterCancelled:jt,onBeforeLeave:jt,onLeave:jt,onAfterLeave:jt,onLeaveCancelled:jt,onBeforeAppear:jt,onAppear:jt,onAfterAppear:jt,onAppearCancelled:jt},BA={name:"BaseTransition",props:Zy,setup(t,{slots:e}){const n=us(),r=UA();let s;return()=>{const i=e.default&&tv(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==St){o=y;break}}const a=_e(t),{mode:l}=a;if(r.isLeaving)return ou(o);const c=Qp(o);if(!c)return ou(o);const u=th(c,a,r,n);fl(c,u);const h=n.subTree,f=h&&Qp(h);let d=!1;const{getTransitionKey:p}=c.type;if(p){const y=p();s===void 0?s=y:y!==s&&(s=y,d=!0)}if(f&&f.type!==St&&(!rn(c,f)||d)){const y=th(f,a,r,n);if(fl(f,y),l==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},ou(o);l==="in-out"&&c.type!==St&&(y.delayLeave=(T,m,g)=>{const w=ev(r,f);w[String(f.key)]=f,T._leaveCb=()=>{m(),T._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return o}}},$A=BA;function ev(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function th(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:y,onAppear:T,onAfterAppear:m,onAppearCancelled:g}=e,w=String(t.key),E=ev(n,t),A=(R,q)=>{R&&Xt(R,r,9,q)},O=(R,q)=>{const j=q[1];A(R,q),Z(R)?R.every(te=>te.length<=1)&&j():R.length<=1&&j()},x={mode:i,persisted:o,beforeEnter(R){let q=a;if(!n.isMounted)if(s)q=y||a;else return;R._leaveCb&&R._leaveCb(!0);const j=E[w];j&&rn(t,j)&&j.el._leaveCb&&j.el._leaveCb(),A(q,[R])},enter(R){let q=l,j=c,te=u;if(!n.isMounted)if(s)q=T||l,j=m||c,te=g||u;else return;let $=!1;const ee=R._enterCb=K=>{$||($=!0,K?A(te,[R]):A(j,[R]),x.delayedLeave&&x.delayedLeave(),R._enterCb=void 0)};q?O(q,[R,ee]):ee()},leave(R,q){const j=String(t.key);if(R._enterCb&&R._enterCb(!0),n.isUnmounting)return q();A(h,[R]);let te=!1;const $=R._leaveCb=ee=>{te||(te=!0,q(),ee?A(p,[R]):A(d,[R]),R._leaveCb=void 0,E[j]===t&&delete E[j])};E[j]=t,f?O(f,[R,$]):$()},clone(R){return th(R,e,n,r)}};return x}function ou(t){if(Go(t))return t=Qn(t),t.children=null,t}function Qp(t){return Go(t)?t.children?t.children[0]:void 0:t}function fl(t,e){t.shapeFlag&6&&t.component?fl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function tv(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Dt?(o.patchFlag&128&&s++,r=r.concat(tv(o.children,e,a))):(e||o.type!==St)&&r.push(a!=null?Qn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ln(t,e){return ne(t)?(()=>Ze({name:t.name},e,{setup:t}))():t}const Gr=t=>!!t.type.__asyncLoader;function nh(t){ne(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,f()),f=()=>{let d;return l||(d=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((y,T)=>{a(p,()=>y(h()),()=>T(p),u+1)});throw p}).then(p=>d!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return Ln({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const d=Ye;if(c)return()=>au(c,d);const p=g=>{l=null,yi(g,d,13,!r)};if(o&&d.suspense||ti)return f().then(g=>()=>au(g,d)).catch(g=>(p(g),()=>r?Ue(r,{error:g}):null));const y=Je(!1),T=Je(),m=Je(!!s);return s&&setTimeout(()=>{m.value=!1},s),i!=null&&setTimeout(()=>{if(!y.value&&!T.value){const g=new Error(`Async component timed out after ${i}ms.`);p(g),T.value=g}},i),f().then(()=>{y.value=!0,d.parent&&Go(d.parent.vnode)&&cc(d.parent.update)}).catch(g=>{p(g),T.value=g}),()=>{if(y.value&&c)return au(c,d);if(T.value&&r)return Ue(r,{error:T.value});if(n&&!m.value)return Ue(n)}}})}function au(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Ue(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Go=t=>t.type.__isKeepAlive,HA={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=us(),r=n.ctx;if(!r.renderer)return()=>{const g=e.default&&e.default();return g&&g.length===1?g[0]:g};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=r,f=h("div");r.activate=(g,w,E,A,O)=>{const x=g.component;c(g,w,E,0,a),l(x.vnode,g,w,E,x,a,A,g.slotScopeIds,O),lt(()=>{x.isDeactivated=!1,x.a&&Us(x.a);const R=g.props&&g.props.onVnodeMounted;R&&Ot(R,x.parent,g)},a)},r.deactivate=g=>{const w=g.component;c(g,f,null,1,a),lt(()=>{w.da&&Us(w.da);const E=g.props&&g.props.onVnodeUnmounted;E&&Ot(E,w.parent,g),w.isDeactivated=!0},a)};function d(g){lu(g),u(g,n,a,!0)}function p(g){s.forEach((w,E)=>{const A=lh(w.type);A&&(!g||!g(A))&&y(E)})}function y(g){const w=s.get(g);!o||!rn(w,o)?d(w):o&&lu(o),s.delete(g),i.delete(g)}yr(()=>[t.include,t.exclude],([g,w])=>{g&&p(E=>ji(g,E)),w&&p(E=>!ji(w,E))},{flush:"post",deep:!0});let T=null;const m=()=>{T!=null&&s.set(T,cu(n.subTree))};return Yo(m),ov(m),dc(()=>{s.forEach(g=>{const{subTree:w,suspense:E}=n,A=cu(w);if(g.type===A.type&&g.key===A.key){lu(A);const O=A.component.da;O&&lt(O,E);return}d(g)})}),()=>{if(T=null,!e.default)return null;const g=e.default(),w=g[0];if(g.length>1)return o=null,g;if(!Zs(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return o=null,w;let E=cu(w);const A=E.type,O=lh(Gr(E)?E.type.__asyncResolved||{}:A),{include:x,exclude:R,max:q}=t;if(x&&(!O||!ji(x,O))||R&&O&&ji(R,O))return o=E,w;const j=E.key==null?A:E.key,te=s.get(j);return E.el&&(E=Qn(E),w.shapeFlag&128&&(w.ssContent=E)),T=j,te?(E.el=te.el,E.component=te.component,E.transition&&fl(E,E.transition),E.shapeFlag|=512,i.delete(j),i.add(j)):(i.add(j),q&&i.size>parseInt(q,10)&&y(i.values().next().value)),E.shapeFlag|=256,o=E,Qy(w.type)?w:E}}},jA=HA;function ji(t,e){return Z(t)?t.some(n=>ji(n,e)):$e(t)?t.split(",").includes(e):P0(t)?t.test(e):!1}function nv(t,e){sv(t,"a",e)}function rv(t,e){sv(t,"da",e)}function sv(t,e,n=Ye){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Go(s.parent.vnode)&&WA(r,e,n,s),s=s.parent}}function WA(t,e,n,r){const s=fc(e,t,r,!0);dl(()=>{Sf(r[e],s)},n)}function lu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function cu(t){return t.shapeFlag&128?t.ssContent:t}function fc(t,e,n=Ye,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;mi(),ei(n);const a=Xt(e,n,t,o);return Qr(),_i(),a});return r?s.unshift(i):s.push(i),i}}const tr=t=>(e,n=Ye)=>(!ti||t==="sp")&&fc(t,(...r)=>e(...r),n),iv=tr("bm"),Yo=tr("m"),qA=tr("bu"),ov=tr("u"),dc=tr("bum"),dl=tr("um"),KA=tr("sp"),zA=tr("rtg"),GA=tr("rtc");function av(t,e=Ye){fc("ec",t,e)}const Wf="components";function YA(t,e){return uv(Wf,t,!0,e)||t}const lv=Symbol.for("v-ndc");function cv(t){return $e(t)?uv(Wf,t,!1)||t:t||lv}function uv(t,e,n=!0,r=!1){const s=it||Ye;if(s){const i=s.type;if(t===Wf){const a=lh(i,!1);if(a&&(a===e||a===Nn(e)||a===oc(Nn(e))))return i}const o=Xp(s[t]||i[t],e)||Xp(s.appContext[t],e);return!o&&r?i:o}}function Xp(t,e){return t&&(t[e]||t[Nn(e)]||t[oc(Nn(e))])}function c2(t,e,n,r){let s;const i=n&&n[r];if(Z(t)||$e(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Jp(t,e,n={},r,s){if(it.isCE||it.parent&&Gr(it.parent)&&it.parent.isCE)return e!=="default"&&(n.name=e),Ue("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),qt();const o=i&&hv(i(n)),a=nn(Dt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function hv(t){return t.some(e=>Zs(e)?!(e.type===St||e.type===Dt&&!hv(e.children)):!0)?t:null}function QA(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:Xa(r)]=t[r];return n}const rh=t=>t?Cv(t)?gc(t)||t.proxy:rh(t.parent):null,Ji=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>rh(t.parent),$root:t=>rh(t.root),$emit:t=>t.emit,$options:t=>qf(t),$forceUpdate:t=>t.f||(t.f=()=>cc(t.update)),$nextTick:t=>t.n||(t.n=cs.bind(t.proxy)),$watch:t=>FA.bind(t)}),uu=(t,e)=>t!==De&&!t.__isScriptSetup&&me(t,e),XA={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(uu(r,e))return o[e]=1,r[e];if(s!==De&&me(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&me(c,e))return o[e]=3,i[e];if(n!==De&&me(n,e))return o[e]=4,n[e];sh&&(o[e]=0)}}const u=Ji[e];let h,f;if(u)return e==="$attrs"&&Vt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==De&&me(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,me(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return uu(s,e)?(s[e]=n,!0):r!==De&&me(r,e)?(r[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==De&&me(t,o)||uu(e,o)||(a=i[0])&&me(a,o)||me(r,o)||me(Ji,o)||me(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zp(t){return Z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let sh=!0;function JA(t){const e=qf(t),n=t.proxy,r=t.ctx;sh=!1,e.beforeCreate&&eg(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:y,deactivated:T,beforeDestroy:m,beforeUnmount:g,destroyed:w,unmounted:E,render:A,renderTracked:O,renderTriggered:x,errorCaptured:R,serverPrefetch:q,expose:j,inheritAttrs:te,components:$,directives:ee,filters:K}=e;if(c&&ZA(c,r,null),o)for(const ye in o){const Ee=o[ye];ne(Ee)&&(r[ye]=Ee.bind(n))}if(s){const ye=s.call(n,n);Ne(ye)&&(t.data=Yn(ye))}if(sh=!0,i)for(const ye in i){const Ee=i[ye],Fn=ne(Ee)?Ee.bind(n,n):ne(Ee.get)?Ee.get.bind(n,n):cn,sr=!ne(Ee)&&ne(Ee.set)?Ee.set.bind(n):cn,_n=Kt({get:Fn,set:sr});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>_n.value,set:kt=>_n.value=kt})}if(a)for(const ye in a)fv(a[ye],r,n,ye);if(l){const ye=ne(l)?l.call(n):l;Reflect.ownKeys(ye).forEach(Ee=>{Yr(Ee,ye[Ee])})}u&&eg(u,t,"c");function fe(ye,Ee){Z(Ee)?Ee.forEach(Fn=>ye(Fn.bind(n))):Ee&&ye(Ee.bind(n))}if(fe(iv,h),fe(Yo,f),fe(qA,d),fe(ov,p),fe(nv,y),fe(rv,T),fe(av,R),fe(GA,O),fe(zA,x),fe(dc,g),fe(dl,E),fe(KA,q),Z(j))if(j.length){const ye=t.exposed||(t.exposed={});j.forEach(Ee=>{Object.defineProperty(ye,Ee,{get:()=>n[Ee],set:Fn=>n[Ee]=Fn})})}else t.exposed||(t.exposed={});A&&t.render===cn&&(t.render=A),te!=null&&(t.inheritAttrs=te),$&&(t.components=$),ee&&(t.directives=ee)}function ZA(t,e,n=cn){Z(t)&&(t=ih(t));for(const r in t){const s=t[r];let i;Ne(s)?"default"in s?i=ht(s.from||r,s.default,!0):i=ht(s.from||r):i=ht(s),Xe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function eg(t,e,n){Xt(Z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function fv(t,e,n,r){const s=r.includes(".")?Jy(n,r):()=>n[r];if($e(t)){const i=e[t];ne(i)&&yr(s,i)}else if(ne(t))yr(s,t.bind(n));else if(Ne(t))if(Z(t))t.forEach(i=>fv(i,e,n,r));else{const i=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(i)&&yr(s,i,t)}}function qf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>pl(l,c,o,!0)),pl(l,e,o)),Ne(e)&&i.set(e,l),l}function pl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&pl(t,i,n,!0),s&&s.forEach(o=>pl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=eb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const eb={data:tg,props:ng,emits:ng,methods:Wi,computed:Wi,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Wi,directives:Wi,watch:nb,provide:tg,inject:tb};function tg(t,e){return e?t?function(){return Ze(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function tb(t,e){return Wi(ih(t),ih(e))}function ih(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Wi(t,e){return t?Ze(Object.create(null),t,e):e}function ng(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:Ze(Object.create(null),Zp(t),Zp(e??{})):e}function nb(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const r in e)n[r]=Rt(t[r],e[r]);return n}function dv(){return{app:null,config:{isNativeTag:R0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rb=0;function sb(t,e){return function(r,s=null){ne(r)||(r=Ze({},r)),s!=null&&!Ne(s)&&(s=null);const i=dv(),o=new Set;let a=!1;const l=i.app={_uid:rb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Pv,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&ne(c.install)?(o.add(c),c.install(l,...u)):ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=Ue(r,s);return f.appContext=i,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,gc(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){To=l;try{return c()}finally{To=null}}};return l}}let To=null;function Yr(t,e){if(Ye){let n=Ye.provides;const r=Ye.parent&&Ye.parent.provides;r===n&&(n=Ye.provides=Object.create(r)),n[t]=e}}function ht(t,e,n=!1){const r=Ye||it;if(r||To){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:To._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ne(e)?e.call(r&&r.proxy):e}}function pv(){return!!(Ye||it||To)}function ib(t,e,n,r=!1){const s={},i={};ol(i,pc,1),t.propsDefaults=Object.create(null),gv(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:zo(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ob(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=_e(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(uc(t.emitsOptions,f))continue;const d=e[f];if(l)if(me(i,f))d!==i[f]&&(i[f]=d,c=!0);else{const p=Nn(f);s[p]=oh(l,a,p,d,t,!1)}else d!==i[f]&&(i[f]=d,c=!0)}}}else{gv(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!me(e,h)&&((u=ls(h))===h||!me(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=oh(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!me(e,h))&&(delete i[h],c=!0)}c&&Gn(t,"set","$attrs")}function gv(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xi(l))continue;const c=e[l];let u;s&&me(s,u=Nn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:uc(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=_e(n),c=a||De;for(let u=0;u<i.length;u++){const h=i[u];n[h]=oh(s,l,h,c[h],t,!me(c,h))}}return o}function oh(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=me(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ne(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(ei(s),r=c[n]=l.call(null,e),Qr())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ls(n))&&(r=!0))}return r}function mv(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!ne(t)){const u=h=>{l=!0;const[f,d]=mv(h,e,!0);Ze(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Ne(t)&&r.set(t,Vs),Vs;if(Z(i))for(let u=0;u<i.length;u++){const h=Nn(i[u]);rg(h)&&(o[h]=De)}else if(i)for(const u in i){const h=Nn(u);if(rg(h)){const f=i[u],d=o[h]=Z(f)||ne(f)?{type:f}:Ze({},f);if(d){const p=og(Boolean,d.type),y=og(String,d.type);d[0]=p>-1,d[1]=y<0||p<y,(p>-1||me(d,"default"))&&a.push(h)}}}const c=[o,a];return Ne(t)&&r.set(t,c),c}function rg(t){return t[0]!=="$"}function sg(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ig(t,e){return sg(t)===sg(e)}function og(t,e){return Z(e)?e.findIndex(n=>ig(n,t)):ne(e)&&ig(e,t)?0:-1}const _v=t=>t[0]==="_"||t==="$stable",Kf=t=>Z(t)?t.map(Wt):[Wt(t)],ab=(t,e,n)=>{if(e._n)return e;const r=dr((...s)=>Kf(e(...s)),n);return r._c=!1,r},yv=(t,e,n)=>{const r=t._ctx;for(const s in t){if(_v(s))continue;const i=t[s];if(ne(i))e[s]=ab(s,i,r);else if(i!=null){const o=Kf(i);e[s]=()=>o}}},vv=(t,e)=>{const n=Kf(e);t.slots.default=()=>n},lb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=_e(e),ol(e,"_",n)):yv(e,t.slots={})}else t.slots={},e&&vv(t,e);ol(t.slots,pc,1)},cb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=De;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ze(s,e),!n&&a===1&&delete s._):(i=!e.$stable,yv(e,s)),o=e}else e&&(vv(t,e),o={default:1});if(i)for(const a in s)!_v(a)&&!(a in o)&&delete s[a]};function gl(t,e,n,r,s=!1){if(Z(t)){t.forEach((f,d)=>gl(f,e&&(Z(e)?e[d]:e),n,r,s));return}if(Gr(r)&&!s)return;const i=r.shapeFlag&4?gc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===De?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&($e(c)?(u[c]=null,me(h,c)&&(h[c]=null)):Xe(c)&&(c.value=null)),ne(l))_r(l,a,12,[o,u]);else{const f=$e(l),d=Xe(l);if(f||d){const p=()=>{if(t.f){const y=f?me(h,l)?h[l]:u[l]:l.value;s?Z(y)&&Sf(y,i):Z(y)?y.includes(i)||y.push(i):f?(u[l]=[i],me(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,me(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,lt(p,n)):p()}}}let or=!1;const Oa=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Da=t=>t.nodeType===8;function ub(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(m,g)=>{if(!g.hasChildNodes()){n(null,m,g),ul(),g._vnode=m;return}or=!1,h(g.firstChild,m,null,null,null),ul(),g._vnode=m,or&&console.error("Hydration completed but contains mismatches.")},h=(m,g,w,E,A,O=!1)=>{const x=Da(m)&&m.data==="[",R=()=>y(m,g,w,E,A,x),{type:q,ref:j,shapeFlag:te,patchFlag:$}=g;let ee=m.nodeType;g.el=m,$===-2&&(O=!1,g.dynamicChildren=null);let K=null;switch(q){case Xs:ee!==3?g.children===""?(l(g.el=s(""),o(m),m),K=m):K=R():(m.data!==g.children&&(or=!0,m.data=g.children),K=i(m));break;case St:ee!==8||x?K=R():K=i(m);break;case Ja:if(x&&(m=i(m),ee=m.nodeType),ee===1||ee===3){K=m;const We=!g.children.length;for(let fe=0;fe<g.staticCount;fe++)We&&(g.children+=K.nodeType===1?K.outerHTML:K.data),fe===g.staticCount-1&&(g.anchor=K),K=i(K);return x?i(K):K}else R();break;case Dt:x?K=p(m,g,w,E,A,O):K=R();break;default:if(te&1)ee!==1||g.type.toLowerCase()!==m.tagName.toLowerCase()?K=R():K=f(m,g,w,E,A,O);else if(te&6){g.slotScopeIds=A;const We=o(m);if(e(g,We,null,w,E,Oa(We),O),K=x?T(m):i(m),K&&Da(K)&&K.data==="teleport end"&&(K=i(K)),Gr(g)){let fe;x?(fe=Ue(Dt),fe.anchor=K?K.previousSibling:We.lastChild):fe=m.nodeType===3?Rv(""):Ue("div"),fe.el=m,g.component.subTree=fe}}else te&64?ee!==8?K=R():K=g.type.hydrate(m,g,w,E,A,O,t,d):te&128&&(K=g.type.hydrate(m,g,w,E,Oa(o(m)),A,O,t,h))}return j!=null&&gl(j,null,E,g),K},f=(m,g,w,E,A,O)=>{O=O||!!g.dynamicChildren;const{type:x,props:R,patchFlag:q,shapeFlag:j,dirs:te}=g,$=x==="input"&&te||x==="option";if($||q!==-1){if(te&&En(g,null,w,"created"),R)if($||!O||q&48)for(const K in R)($&&K.endsWith("value")||Wo(K)&&!Xi(K))&&r(m,K,null,R[K],!1,void 0,w);else R.onClick&&r(m,"onClick",null,R.onClick,!1,void 0,w);let ee;if((ee=R&&R.onVnodeBeforeMount)&&Ot(ee,w,g),te&&En(g,null,w,"beforeMount"),((ee=R&&R.onVnodeMounted)||te)&&Xy(()=>{ee&&Ot(ee,w,g),te&&En(g,null,w,"mounted")},E),j&16&&!(R&&(R.innerHTML||R.textContent))){let K=d(m.firstChild,g,m,w,E,A,O);for(;K;){or=!0;const We=K;K=K.nextSibling,a(We)}}else j&8&&m.textContent!==g.children&&(or=!0,m.textContent=g.children)}return m.nextSibling},d=(m,g,w,E,A,O,x)=>{x=x||!!g.dynamicChildren;const R=g.children,q=R.length;for(let j=0;j<q;j++){const te=x?R[j]:R[j]=Wt(R[j]);if(m)m=h(m,te,E,A,O,x);else{if(te.type===Xs&&!te.children)continue;or=!0,n(null,te,w,null,E,A,Oa(w),O)}}return m},p=(m,g,w,E,A,O)=>{const{slotScopeIds:x}=g;x&&(A=A?A.concat(x):x);const R=o(m),q=d(i(m),g,R,w,E,A,O);return q&&Da(q)&&q.data==="]"?i(g.anchor=q):(or=!0,l(g.anchor=c("]"),R,q),q)},y=(m,g,w,E,A,O)=>{if(or=!0,g.el=null,O){const q=T(m);for(;;){const j=i(m);if(j&&j!==q)a(j);else break}}const x=i(m),R=o(m);return a(m),n(null,g,R,x,w,E,Oa(R),A),x},T=m=>{let g=0;for(;m;)if(m=i(m),m&&Da(m)&&(m.data==="["&&g++,m.data==="]")){if(g===0)return i(m);g--}return m};return[u,h]}const lt=Xy;function hb(t){return Ev(t)}function fb(t){return Ev(t,ub)}function Ev(t,e){const n=Qu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=cn,insertStaticContent:p}=t,y=(_,v,I,b=null,P=null,k=null,B=!1,M=null,L=!!v.dynamicChildren)=>{if(_===v)return;_&&!rn(_,v)&&(b=C(_),kt(_,P,k,!0),_=null),v.patchFlag===-2&&(L=!1,v.dynamicChildren=null);const{type:D,ref:X,shapeFlag:G}=v;switch(D){case Xs:T(_,v,I,b);break;case St:m(_,v,I,b);break;case Ja:_==null&&g(v,I,b,B);break;case Dt:$(_,v,I,b,P,k,B,M,L);break;default:G&1?A(_,v,I,b,P,k,B,M,L):G&6?ee(_,v,I,b,P,k,B,M,L):(G&64||G&128)&&D.process(_,v,I,b,P,k,B,M,L,V)}X!=null&&P&&gl(X,_&&_.ref,k,v||_,!v)},T=(_,v,I,b)=>{if(_==null)r(v.el=a(v.children),I,b);else{const P=v.el=_.el;v.children!==_.children&&c(P,v.children)}},m=(_,v,I,b)=>{_==null?r(v.el=l(v.children||""),I,b):v.el=_.el},g=(_,v,I,b)=>{[_.el,_.anchor]=p(_.children,v,I,b,_.el,_.anchor)},w=({el:_,anchor:v},I,b)=>{let P;for(;_&&_!==v;)P=f(_),r(_,I,b),_=P;r(v,I,b)},E=({el:_,anchor:v})=>{let I;for(;_&&_!==v;)I=f(_),s(_),_=I;s(v)},A=(_,v,I,b,P,k,B,M,L)=>{B=B||v.type==="svg",_==null?O(v,I,b,P,k,B,M,L):q(_,v,P,k,B,M,L)},O=(_,v,I,b,P,k,B,M)=>{let L,D;const{type:X,props:G,shapeFlag:J,transition:ie,dirs:le}=_;if(L=_.el=o(_.type,k,G&&G.is,G),J&8?u(L,_.children):J&16&&R(_.children,L,null,b,P,k&&X!=="foreignObject",B,M),le&&En(_,null,b,"created"),x(L,_,_.scopeId,B,b),G){for(const Re in G)Re!=="value"&&!Xi(Re)&&i(L,Re,null,G[Re],k,_.children,b,P,dt);"value"in G&&i(L,"value",null,G.value),(D=G.onVnodeBeforeMount)&&Ot(D,b,_)}le&&En(_,null,b,"beforeMount");const ke=(!P||P&&!P.pendingBranch)&&ie&&!ie.persisted;ke&&ie.beforeEnter(L),r(L,v,I),((D=G&&G.onVnodeMounted)||ke||le)&&lt(()=>{D&&Ot(D,b,_),ke&&ie.enter(L),le&&En(_,null,b,"mounted")},P)},x=(_,v,I,b,P)=>{if(I&&d(_,I),b)for(let k=0;k<b.length;k++)d(_,b[k]);if(P){let k=P.subTree;if(v===k){const B=P.vnode;x(_,B,B.scopeId,B.slotScopeIds,P.parent)}}},R=(_,v,I,b,P,k,B,M,L=0)=>{for(let D=L;D<_.length;D++){const X=_[D]=M?hr(_[D]):Wt(_[D]);y(null,X,v,I,b,P,k,B,M)}},q=(_,v,I,b,P,k,B)=>{const M=v.el=_.el;let{patchFlag:L,dynamicChildren:D,dirs:X}=v;L|=_.patchFlag&16;const G=_.props||De,J=v.props||De;let ie;I&&Nr(I,!1),(ie=J.onVnodeBeforeUpdate)&&Ot(ie,I,v,_),X&&En(v,_,I,"beforeUpdate"),I&&Nr(I,!0);const le=P&&v.type!=="foreignObject";if(D?j(_.dynamicChildren,D,M,I,b,le,k):B||Ee(_,v,M,null,I,b,le,k,!1),L>0){if(L&16)te(M,v,G,J,I,b,P);else if(L&2&&G.class!==J.class&&i(M,"class",null,J.class,P),L&4&&i(M,"style",G.style,J.style,P),L&8){const ke=v.dynamicProps;for(let Re=0;Re<ke.length;Re++){const qe=ke[Re],en=G[qe],Ts=J[qe];(Ts!==en||qe==="value")&&i(M,qe,en,Ts,P,_.children,I,b,dt)}}L&1&&_.children!==v.children&&u(M,v.children)}else!B&&D==null&&te(M,v,G,J,I,b,P);((ie=J.onVnodeUpdated)||X)&&lt(()=>{ie&&Ot(ie,I,v,_),X&&En(v,_,I,"updated")},b)},j=(_,v,I,b,P,k,B)=>{for(let M=0;M<v.length;M++){const L=_[M],D=v[M],X=L.el&&(L.type===Dt||!rn(L,D)||L.shapeFlag&70)?h(L.el):I;y(L,D,X,null,b,P,k,B,!0)}},te=(_,v,I,b,P,k,B)=>{if(I!==b){if(I!==De)for(const M in I)!Xi(M)&&!(M in b)&&i(_,M,I[M],null,B,v.children,P,k,dt);for(const M in b){if(Xi(M))continue;const L=b[M],D=I[M];L!==D&&M!=="value"&&i(_,M,D,L,B,v.children,P,k,dt)}"value"in b&&i(_,"value",I.value,b.value)}},$=(_,v,I,b,P,k,B,M,L)=>{const D=v.el=_?_.el:a(""),X=v.anchor=_?_.anchor:a("");let{patchFlag:G,dynamicChildren:J,slotScopeIds:ie}=v;ie&&(M=M?M.concat(ie):ie),_==null?(r(D,I,b),r(X,I,b),R(v.children,I,X,P,k,B,M,L)):G>0&&G&64&&J&&_.dynamicChildren?(j(_.dynamicChildren,J,I,P,k,B,M),(v.key!=null||P&&v===P.subTree)&&Tv(_,v,!0)):Ee(_,v,I,X,P,k,B,M,L)},ee=(_,v,I,b,P,k,B,M,L)=>{v.slotScopeIds=M,_==null?v.shapeFlag&512?P.ctx.activate(v,I,b,B,L):K(v,I,b,P,k,B,L):We(_,v,L)},K=(_,v,I,b,P,k,B)=>{const M=_.component=vb(_,b,P);if(Go(_)&&(M.ctx.renderer=V),Eb(M),M.asyncDep){if(P&&P.registerDep(M,fe),!_.el){const L=M.subTree=Ue(St);m(null,L,v,I)}return}fe(M,_,v,I,P,k,B)},We=(_,v,I)=>{const b=v.component=_.component;if(kA(_,v,I))if(b.asyncDep&&!b.asyncResolved){ye(b,v,I);return}else b.next=v,AA(b.update),b.update();else v.el=_.el,b.vnode=v},fe=(_,v,I,b,P,k,B)=>{const M=()=>{if(_.isMounted){let{next:X,bu:G,u:J,parent:ie,vnode:le}=_,ke=X,Re;Nr(_,!1),X?(X.el=le.el,ye(_,X,B)):X=le,G&&Us(G),(Re=X.props&&X.props.onVnodeBeforeUpdate)&&Ot(Re,ie,X,le),Nr(_,!0);const qe=iu(_),en=_.subTree;_.subTree=qe,y(en,qe,h(en.el),C(en),_,P,k),X.el=qe.el,ke===null&&Bf(_,qe.el),J&&lt(J,P),(Re=X.props&&X.props.onVnodeUpdated)&&lt(()=>Ot(Re,ie,X,le),P)}else{let X;const{el:G,props:J}=v,{bm:ie,m:le,parent:ke}=_,Re=Gr(v);if(Nr(_,!1),ie&&Us(ie),!Re&&(X=J&&J.onVnodeBeforeMount)&&Ot(X,ke,v),Nr(_,!0),G&&Te){const qe=()=>{_.subTree=iu(_),Te(G,_.subTree,_,P,null)};Re?v.type.__asyncLoader().then(()=>!_.isUnmounted&&qe()):qe()}else{const qe=_.subTree=iu(_);y(null,qe,I,b,_,P,k),v.el=qe.el}if(le&&lt(le,P),!Re&&(X=J&&J.onVnodeMounted)){const qe=v;lt(()=>Ot(X,ke,qe),P)}(v.shapeFlag&256||ke&&Gr(ke.vnode)&&ke.vnode.shapeFlag&256)&&_.a&&lt(_.a,P),_.isMounted=!0,v=I=b=null}},L=_.effect=new Of(M,()=>cc(D),_.scope),D=_.update=()=>L.run();D.id=_.uid,Nr(_,!0),D()},ye=(_,v,I)=>{v.component=_;const b=_.vnode.props;_.vnode=v,_.next=null,ob(_,v.props,b,I),cb(_,v.children,I),mi(),zp(),_i()},Ee=(_,v,I,b,P,k,B,M,L=!1)=>{const D=_&&_.children,X=_?_.shapeFlag:0,G=v.children,{patchFlag:J,shapeFlag:ie}=v;if(J>0){if(J&128){sr(D,G,I,b,P,k,B,M,L);return}else if(J&256){Fn(D,G,I,b,P,k,B,M,L);return}}ie&8?(X&16&&dt(D,P,k),G!==D&&u(I,G)):X&16?ie&16?sr(D,G,I,b,P,k,B,M,L):dt(D,P,k,!0):(X&8&&u(I,""),ie&16&&R(G,I,b,P,k,B,M,L))},Fn=(_,v,I,b,P,k,B,M,L)=>{_=_||Vs,v=v||Vs;const D=_.length,X=v.length,G=Math.min(D,X);let J;for(J=0;J<G;J++){const ie=v[J]=L?hr(v[J]):Wt(v[J]);y(_[J],ie,I,null,P,k,B,M,L)}D>X?dt(_,P,k,!0,!1,G):R(v,I,b,P,k,B,M,L,G)},sr=(_,v,I,b,P,k,B,M,L)=>{let D=0;const X=v.length;let G=_.length-1,J=X-1;for(;D<=G&&D<=J;){const ie=_[D],le=v[D]=L?hr(v[D]):Wt(v[D]);if(rn(ie,le))y(ie,le,I,null,P,k,B,M,L);else break;D++}for(;D<=G&&D<=J;){const ie=_[G],le=v[J]=L?hr(v[J]):Wt(v[J]);if(rn(ie,le))y(ie,le,I,null,P,k,B,M,L);else break;G--,J--}if(D>G){if(D<=J){const ie=J+1,le=ie<X?v[ie].el:b;for(;D<=J;)y(null,v[D]=L?hr(v[D]):Wt(v[D]),I,le,P,k,B,M,L),D++}}else if(D>J)for(;D<=G;)kt(_[D],P,k,!0),D++;else{const ie=D,le=D,ke=new Map;for(D=le;D<=J;D++){const Ft=v[D]=L?hr(v[D]):Wt(v[D]);Ft.key!=null&&ke.set(Ft.key,D)}let Re,qe=0;const en=J-le+1;let Ts=!1,Lp=0;const Oi=new Array(en);for(D=0;D<en;D++)Oi[D]=0;for(D=ie;D<=G;D++){const Ft=_[D];if(qe>=en){kt(Ft,P,k,!0);continue}let yn;if(Ft.key!=null)yn=ke.get(Ft.key);else for(Re=le;Re<=J;Re++)if(Oi[Re-le]===0&&rn(Ft,v[Re])){yn=Re;break}yn===void 0?kt(Ft,P,k,!0):(Oi[yn-le]=D+1,yn>=Lp?Lp=yn:Ts=!0,y(Ft,v[yn],I,null,P,k,B,M,L),qe++)}const Vp=Ts?db(Oi):Vs;for(Re=Vp.length-1,D=en-1;D>=0;D--){const Ft=le+D,yn=v[Ft],Fp=Ft+1<X?v[Ft+1].el:b;Oi[D]===0?y(null,yn,I,Fp,P,k,B,M,L):Ts&&(Re<0||D!==Vp[Re]?_n(yn,I,Fp,2):Re--)}}},_n=(_,v,I,b,P=null)=>{const{el:k,type:B,transition:M,children:L,shapeFlag:D}=_;if(D&6){_n(_.component.subTree,v,I,b);return}if(D&128){_.suspense.move(v,I,b);return}if(D&64){B.move(_,v,I,V);return}if(B===Dt){r(k,v,I);for(let G=0;G<L.length;G++)_n(L[G],v,I,b);r(_.anchor,v,I);return}if(B===Ja){w(_,v,I);return}if(b!==2&&D&1&&M)if(b===0)M.beforeEnter(k),r(k,v,I),lt(()=>M.enter(k),P);else{const{leave:G,delayLeave:J,afterLeave:ie}=M,le=()=>r(k,v,I),ke=()=>{G(k,()=>{le(),ie&&ie()})};J?J(k,le,ke):ke()}else r(k,v,I)},kt=(_,v,I,b=!1,P=!1)=>{const{type:k,props:B,ref:M,children:L,dynamicChildren:D,shapeFlag:X,patchFlag:G,dirs:J}=_;if(M!=null&&gl(M,null,I,_,!0),X&256){v.ctx.deactivate(_);return}const ie=X&1&&J,le=!Gr(_);let ke;if(le&&(ke=B&&B.onVnodeBeforeUnmount)&&Ot(ke,v,_),X&6)ba(_.component,I,b);else{if(X&128){_.suspense.unmount(I,b);return}ie&&En(_,null,v,"beforeUnmount"),X&64?_.type.remove(_,v,I,P,V,b):D&&(k!==Dt||G>0&&G&64)?dt(D,v,I,!1,!0):(k===Dt&&G&384||!P&&X&16)&&dt(L,v,I),b&&vs(_)}(le&&(ke=B&&B.onVnodeUnmounted)||ie)&&lt(()=>{ke&&Ot(ke,v,_),ie&&En(_,null,v,"unmounted")},I)},vs=_=>{const{type:v,el:I,anchor:b,transition:P}=_;if(v===Dt){Es(I,b);return}if(v===Ja){E(_);return}const k=()=>{s(I),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(_.shapeFlag&1&&P&&!P.persisted){const{leave:B,delayLeave:M}=P,L=()=>B(I,k);M?M(_.el,k,L):L()}else k()},Es=(_,v)=>{let I;for(;_!==v;)I=f(_),s(_),_=I;s(v)},ba=(_,v,I)=>{const{bum:b,scope:P,update:k,subTree:B,um:M}=_;b&&Us(b),P.stop(),k&&(k.active=!1,kt(B,_,v,I)),M&&lt(M,v),lt(()=>{_.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},dt=(_,v,I,b=!1,P=!1,k=0)=>{for(let B=k;B<_.length;B++)kt(_[B],v,I,b,P)},C=_=>_.shapeFlag&6?C(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el),W=(_,v,I)=>{_==null?v._vnode&&kt(v._vnode,null,null,!0):y(v._vnode||null,_,v,null,null,null,I),zp(),ul(),v._vnode=_},V={p:y,um:kt,m:_n,r:vs,mt:K,mc:R,pc:Ee,pbc:j,n:C,o:t};let Y,Te;return e&&([Y,Te]=e(V)),{render:W,hydrate:Y,createApp:sb(W,Y)}}function Nr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Tv(t,e,n=!1){const r=t.children,s=e.children;if(Z(r)&&Z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=hr(s[i]),a.el=o.el),n||Tv(o,a)),a.type===Xs&&(a.el=o.el)}}function db(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const pb=t=>t.__isTeleport,Dt=Symbol.for("v-fgt"),Xs=Symbol.for("v-txt"),St=Symbol.for("v-cmt"),Ja=Symbol.for("v-stc"),Zi=[];let Yt=null;function qt(t=!1){Zi.push(Yt=t?null:[])}function wv(){Zi.pop(),Yt=Zi[Zi.length-1]||null}let Js=1;function ag(t){Js+=t}function Iv(t){return t.dynamicChildren=Js>0?Yt||Vs:null,wv(),Js>0&&Yt&&Yt.push(t),t}function gb(t,e,n,r,s,i){return Iv(bv(t,e,n,r,s,i,!0))}function nn(t,e,n,r,s){return Iv(Ue(t,e,n,r,s,!0))}function Zs(t){return t?t.__v_isVNode===!0:!1}function rn(t,e){return t.type===e.type&&t.key===e.key}const pc="__vInternal",Av=({key:t})=>t??null,Za=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||Xe(t)||ne(t)?{i:it,r:t,k:e,f:!!n}:t:null);function bv(t,e=null,n=null,r=0,s=null,i=t===Dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Av(e),ref:e&&Za(e),scopeId:hc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:it};return a?(Gf(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),Js>0&&!o&&Yt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Yt.push(l),l}const Ue=mb;function mb(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===lv)&&(t=St),Zs(t)){const a=Qn(t,e,!0);return n&&Gf(a,n),Js>0&&!i&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(t)]=a:Yt.push(a)),a.patchFlag|=-2,a}if(Ab(t)&&(t=t.__vccOpts),e){e=zf(e);let{class:a,style:l}=e;a&&!$e(a)&&(e.class=Ko(a)),Ne(l)&&(Uy(l)&&!Z(l)&&(l=Ze({},l)),e.style=ac(l))}const o=$e(t)?1:Qy(t)?128:pb(t)?64:Ne(t)?4:ne(t)?2:0;return bv(t,e,n,r,s,o,i,!0)}function zf(t){return t?Uy(t)||pc in t?Ze({},t):t:null}function Qn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Yf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Av(a),ref:e&&e.ref?n&&s?Z(s)?s.concat(Za(e)):[s,Za(e)]:Za(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Dt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qn(t.ssContent),ssFallback:t.ssFallback&&Qn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Rv(t=" ",e=0){return Ue(Xs,null,t,e)}function u2(t="",e=!1){return e?(qt(),nn(St,null,t)):Ue(St,null,t)}function Wt(t){return t==null||typeof t=="boolean"?Ue(St):Z(t)?Ue(Dt,null,t.slice()):typeof t=="object"?hr(t):Ue(Xs,null,String(t))}function hr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qn(t)}function Gf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Gf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(pc in e)?e._ctx=it:s===3&&it&&(it.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:it},n=32):(e=String(e),r&64?(n=16,e=[Rv(e)]):n=8);t.children=e,t.shapeFlag|=n}function Yf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ko([e.class,r.class]));else if(s==="style")e.style=ac([e.style,r.style]);else if(Wo(s)){const i=e[s],o=r[s];o&&i!==o&&!(Z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ot(t,e,n,r=null){Xt(t,e,7,[n,r])}const _b=dv();let yb=0;function vb(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||_b,i={uid:yb++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new U0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mv(r,s),emitsOptions:Yy(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=RA.bind(null,i),t.ce&&t.ce(i),i}let Ye=null;const us=()=>Ye||it;let Qf,ws,lg="__VUE_INSTANCE_SETTERS__";(ws=Qu()[lg])||(ws=Qu()[lg]=[]),ws.push(t=>Ye=t),Qf=t=>{ws.length>1?ws.forEach(e=>e(t)):ws[0](t)};const ei=t=>{Qf(t),t.scope.on()},Qr=()=>{Ye&&Ye.scope.off(),Qf(null)};function Cv(t){return t.vnode.shapeFlag&4}let ti=!1;function Eb(t,e=!1){ti=e;const{props:n,children:r}=t.vnode,s=Cv(t);ib(t,n,s,e),lb(t,r);const i=s?Tb(t,e):void 0;return ti=!1,i}function Tb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=cl(new Proxy(t.ctx,XA));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Ib(t):null;ei(t),mi();const i=_r(r,t,0,[t.props,s]);if(_i(),Qr(),Ey(i)){if(i.then(Qr,Qr),e)return i.then(o=>{ah(t,o,e)}).catch(o=>{yi(o,t,0)});t.asyncDep=i}else ah(t,i,e)}else Sv(t,e)}function ah(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=jy(e)),Sv(t,n)}let cg;function Sv(t,e,n){const r=t.type;if(!t.render){if(!e&&cg&&!r.render){const s=r.template||qf(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Ze(Ze({isCustomElement:i,delimiters:a},o),l);r.render=cg(s,c)}}t.render=r.render||cn}ei(t),mi(),JA(t),_i(),Qr()}function wb(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Vt(t,"get","$attrs"),e[n]}}))}function Ib(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return wb(t)},slots:t.slots,emit:t.emit,expose:e}}function gc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(jy(cl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ji)return Ji[n](t)},has(e,n){return n in e||n in Ji}}))}function lh(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function Ab(t){return ne(t)&&"__vccOpts"in t}const Kt=(t,e)=>TA(t,e,ti);function Lt(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!Z(e)?Zs(e)?Ue(t,null,[e]):Ue(t,e):Ue(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Zs(n)&&(n=[n]),Ue(t,e,n))}const bb=Symbol.for("v-scx"),Rb=()=>ht(bb),Pv="3.3.4",Cb="http://www.w3.org/2000/svg",Ur=typeof document<"u"?document:null,ug=Ur&&Ur.createElement("template"),Sb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ur.createElementNS(Cb,t):Ur.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ur.createTextNode(t),createComment:t=>Ur.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ur.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ug.innerHTML=r?`<svg>${t}</svg>`:t;const a=ug.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Pb(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function kb(t,e,n){const r=t.style,s=$e(n);if(n&&!s){if(e&&!$e(e))for(const i in e)n[i]==null&&ch(r,i,"");for(const i in n)ch(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const hg=/\s*!important$/;function ch(t,e,n){if(Z(n))n.forEach(r=>ch(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Nb(t,e);hg.test(n)?t.setProperty(ls(r),n.replace(hg,""),"important"):t[r]=n}}const fg=["Webkit","Moz","ms"],hu={};function Nb(t,e){const n=hu[e];if(n)return n;let r=Nn(e);if(r!=="filter"&&r in t)return hu[e]=r;r=oc(r);for(let s=0;s<fg.length;s++){const i=fg[s]+r;if(i in t)return hu[e]=i}return e}const dg="http://www.w3.org/1999/xlink";function Ob(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(dg,e.slice(6,e.length)):t.setAttributeNS(dg,e,n);else{const i=F0(e);n==null||i&&!by(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Db(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=by(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Rs(t,e,n,r){t.addEventListener(e,n,r)}function xb(t,e,n,r){t.removeEventListener(e,n,r)}function Mb(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Lb(e);if(r){const c=i[e]=Ub(r,s);Rs(t,a,c,l)}else o&&(xb(t,a,o,l),i[e]=void 0)}}const pg=/(?:Once|Passive|Capture)$/;function Lb(t){let e;if(pg.test(t)){e={};let r;for(;r=t.match(pg);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ls(t.slice(2)),e]}let fu=0;const Vb=Promise.resolve(),Fb=()=>fu||(Vb.then(()=>fu=0),fu=Date.now());function Ub(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Xt(Bb(r,n.value),e,5,[r])};return n.value=t,n.attached=Fb(),n}function Bb(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const gg=/^on[a-z]/,$b=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?Pb(t,r,s):e==="style"?kb(t,n,r):Wo(e)?Cf(e)||Mb(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hb(t,e,r,s))?Db(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ob(t,e,r,s))};function Hb(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&gg.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||gg.test(e)&&$e(n)?!1:e in t}const ar="transition",Di="animation",mc=(t,{slots:e})=>Lt($A,jb(t),e);mc.displayName="Transition";const kv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};mc.props=Ze({},Zy,kv);const Or=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},mg=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function jb(t){const e={};for(const $ in t)$ in kv||(e[$]=t[$]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=Wb(s),y=p&&p[0],T=p&&p[1],{onBeforeEnter:m,onEnter:g,onEnterCancelled:w,onLeave:E,onLeaveCancelled:A,onBeforeAppear:O=m,onAppear:x=g,onAppearCancelled:R=w}=e,q=($,ee,K)=>{Dr($,ee?u:a),Dr($,ee?c:o),K&&K()},j=($,ee)=>{$._isLeaving=!1,Dr($,h),Dr($,d),Dr($,f),ee&&ee()},te=$=>(ee,K)=>{const We=$?x:g,fe=()=>q(ee,$,K);Or(We,[ee,fe]),_g(()=>{Dr(ee,$?l:i),lr(ee,$?u:a),mg(We)||yg(ee,r,y,fe)})};return Ze(e,{onBeforeEnter($){Or(m,[$]),lr($,i),lr($,o)},onBeforeAppear($){Or(O,[$]),lr($,l),lr($,c)},onEnter:te(!1),onAppear:te(!0),onLeave($,ee){$._isLeaving=!0;const K=()=>j($,ee);lr($,h),zb(),lr($,f),_g(()=>{$._isLeaving&&(Dr($,h),lr($,d),mg(E)||yg($,r,T,K))}),Or(E,[$,K])},onEnterCancelled($){q($,!1),Or(w,[$])},onAppearCancelled($){q($,!0),Or(R,[$])},onLeaveCancelled($){j($),Or(A,[$])}})}function Wb(t){if(t==null)return null;if(Ne(t))return[du(t.enter),du(t.leave)];{const e=du(t);return[e,e]}}function du(t){return Iy(t)}function lr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Dr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function _g(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let qb=0;function yg(t,e,n,r){const s=t._endId=++qb,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=Kb(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),i()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function Kb(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),s=r(`${ar}Delay`),i=r(`${ar}Duration`),o=vg(s,i),a=r(`${Di}Delay`),l=r(`${Di}Duration`),c=vg(a,l);let u=null,h=0,f=0;e===ar?o>0&&(u=ar,h=o,f=i.length):e===Di?c>0&&(u=Di,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?ar:Di:null,f=u?u===ar?i.length:l.length:0);const d=u===ar&&/\b(transform|all)(,|$)/.test(r(`${ar}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function vg(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Eg(n)+Eg(t[r])))}function Eg(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function zb(){return document.body.offsetHeight}const Tg=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?n=>Us(e,n):e};function Gb(t){t.target.composing=!0}function wg(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const h2={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Tg(s);const i=r||s.props&&s.props.type==="number";Rs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Yu(a)),t._assign(a)}),n&&Rs(t,"change",()=>{t.value=t.value.trim()}),e||(Rs(t,"compositionstart",Gb),Rs(t,"compositionend",wg),Rs(t,"change",wg))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Tg(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Yu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Yb=["ctrl","shift","alt","meta"],Qb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Yb.some(n=>t[`${n}Key`]&&!e.includes(n))},f2=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Qb[e[s]];if(i&&i(n,e))return}return t(n,...r)},Xb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},d2=(t,e)=>n=>{if(!("key"in n))return;const r=ls(n.key);if(e.some(s=>s===r||Xb[s]===r))return t(n)},Nv=Ze({patchProp:$b},Sb);let eo,Ig=!1;function Jb(){return eo||(eo=hb(Nv))}function Zb(){return eo=Ig?eo:fb(Nv),Ig=!0,eo}const eR=(...t)=>{const e=Jb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ov(r);if(!s)return;const i=e._component;!ne(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},tR=(...t)=>{const e=Zb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ov(r);if(s)return n(s,!0,s instanceof SVGElement)},e};function Ov(t){return $e(t)?document.querySelector(t):t}const nR=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,rR=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,sR=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function iR(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){oR(t);return}return e}function oR(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function ml(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t[t.length-1]==='"')return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!sR.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(nR.test(t)||rR.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,iR)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const aR=/#/g,lR=/&/g,cR=/=/g,Xf=/\+/g,uR=/%5e/gi,hR=/%60/gi,fR=/%7c/gi,dR=/%20/gi;function pR(t){return encodeURI(""+t).replace(fR,"|")}function uh(t){return pR(typeof t=="string"?t:JSON.stringify(t)).replace(Xf,"%2B").replace(dR,"+").replace(aR,"%23").replace(lR,"%26").replace(hR,"`").replace(uR,"^")}function pu(t){return uh(t).replace(cR,"%3D")}function _l(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function gR(t){return _l(t.replace(Xf," "))}function mR(t){return _l(t.replace(Xf," "))}function _R(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=gR(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=mR(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function yR(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${pu(t)}=${uh(n)}`).join("&"):`${pu(t)}=${uh(e)}`:pu(t)}function vR(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>yR(e,t[e])).filter(Boolean).join("&")}const ER=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,TR=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,wR=/^([/\\]\s*){2,}[^/\\]/;function Qo(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?ER.test(t):TR.test(t)||(e.acceptRelative?wR.test(t):!1)}const IR=/^[\s\0]*(blob|data|javascript|vbscript):$/i;function AR(t){return!!t&&IR.test(t)}const bR=/\/$|\/\?/;function hh(t="",e=!1){return e?bR.test(t):t.endsWith("/")}function Dv(t="",e=!1){if(!e)return(hh(t)?t.slice(0,-1):t)||"/";if(!hh(t,!0))return t||"/";const[n,...r]=t.split("?");return(n.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function fh(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(hh(t,!0))return t||"/";const[n,...r]=t.split("?");return n+"/"+(r.length>0?`?${r.join("?")}`:"")}function RR(t=""){return t.startsWith("/")}function Ag(t=""){return RR(t)?t:"/"+t}function CR(t,e){if(Mv(e)||Qo(t))return t;const n=Dv(e);return t.startsWith(n)?t:Xo(n,t)}function bg(t,e){if(Mv(e))return t;const n=Dv(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function xv(t,e){const n=_c(t),r={..._R(n.search),...e};return n.search=vR(r),NR(n)}function Mv(t){return!t||t==="/"}function SR(t){return t&&t!=="/"}const PR=/^\.?\//;function Xo(t,...e){let n=t||"";for(const r of e.filter(s=>SR(s)))if(n){const s=r.replace(PR,"");n=fh(n)+s}else n=r;return n}function kR(t,e,n={}){return n.trailingSlash||(t=fh(t),e=fh(e)),n.leadingSlash||(t=Ag(t),e=Ag(e)),n.encoding||(t=_l(t),e=_l(e)),t===e}function _c(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/);if(n){const[,h,f=""]=n;return{protocol:h,pathname:f,href:h+f,auth:"",host:"",search:"",hash:""}}if(!Qo(t,{acceptRelative:!0}))return e?_c(e+t):Rg(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[],{pathname:l,search:c,hash:u}=Rg(a.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:r,auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:c,hash:u}}function Rg(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function NR(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol?t.protocol+"//":"")+s+i+e+n+r}class OR extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function DR(t){var l,c,u,h,f;const e=((l=t.error)==null?void 0:l.message)||((c=t.error)==null?void 0:c.toString())||"",n=((u=t.request)==null?void 0:u.method)||((h=t.options)==null?void 0:h.method)||"GET",r=((f=t.request)==null?void 0:f.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new OR(o,t.error?{cause:t.error}:void 0);for(const d of["request","options","response"])Object.defineProperty(a,d,{get(){return t[d]}});for(const[d,p]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,d,{get(){return t.response&&t.response[p]}});return a}const xR=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Cg(t="GET"){return xR.has(t.toUpperCase())}function MR(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const LR=new Set(["image/svg","application/xml","application/xhtml","application/html"]),VR=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function FR(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return VR.test(e)?"json":LR.has(e)||e.startsWith("text/")?"text":"blob"}function UR(t,e,n=globalThis.Headers){const r={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(r.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(r.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){r.headers=new n((e==null?void 0:e.headers)||{});for(const[s,i]of new n((t==null?void 0:t.headers)||{}))r.headers.set(s,i)}return r}const BR=new Set([408,409,425,429,500,502,503,504]),$R=new Set([101,204,205,304]);function Lv(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let u;typeof a.options.retry=="number"?u=a.options.retry:u=Cg(a.options.method)?0:1;const h=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(h):BR.has(h))){const f=a.options.retryDelay||0;return f>0&&await new Promise(d=>setTimeout(d,f)),i(a.request,{...a.options,retry:u-1,timeout:a.options.timeout})}}const c=DR(a);throw Error.captureStackTrace&&Error.captureStackTrace(c,i),c}const i=async function(l,c={}){var f;const u={request:l,options:UR(c,t.defaults,n),response:void 0,error:void 0};if(u.options.method=(f=u.options.method)==null?void 0:f.toUpperCase(),u.options.onRequest&&await u.options.onRequest(u),typeof u.request=="string"&&(u.options.baseURL&&(u.request=CR(u.request,u.options.baseURL)),(u.options.query||u.options.params)&&(u.request=xv(u.request,{...u.options.params,...u.options.query}))),u.options.body&&Cg(u.options.method)&&(MR(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new n(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half"))),!u.options.signal&&u.options.timeout){const d=new r;setTimeout(()=>d.abort(),u.options.timeout),u.options.signal=d.signal}try{u.response=await e(u.request,u.options)}catch(d){return u.error=d,u.options.onRequestError&&await u.options.onRequestError(u),await s(u)}if(u.response.body&&!$R.has(u.response.status)&&u.options.method!=="HEAD"){const d=(u.options.parseResponse?"json":u.options.responseType)||FR(u.response.headers.get("content-type")||"");switch(d){case"json":{const p=await u.response.text(),y=u.options.parseResponse||ml;u.response._data=y(p);break}case"stream":{u.response._data=u.response.body;break}default:u.response._data=await u.response[d]()}}return u.options.onResponse&&await u.options.onResponse(u),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await u.options.onResponseError(u),await s(u)):u.response},o=async function(l,c){return(await i(l,c))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={})=>Lv({...t,defaults:{...t.defaults,...a}}),o}const Jf=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),HR=Jf.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),jR=Jf.Headers,WR=Jf.AbortController,qR=Lv({fetch:HR,Headers:jR,AbortController:WR}),KR=qR,zR=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},yl=zR().app,GR=()=>yl.baseURL,YR=()=>yl.buildAssetsDir,QR=(...t)=>Xo(Vv(),YR(),...t),Vv=(...t)=>{const e=yl.cdnURL||yl.baseURL;return t.length?Xo(e,...t):e};globalThis.__buildAssetsURL=QR,globalThis.__publicAssetsURL=Vv;function dh(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?dh(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const XR={run:t=>t()},JR=()=>XR,Fv=typeof console.createTask<"u"?console.createTask:JR;function ZR(t,e){const n=e.shift(),r=Fv(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function eC(t,e){const n=e.shift(),r=Fv(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function gu(t,e){for(const n of[...t])n(e)}class tC{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=dh(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=dh(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(ZR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(eC,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&gu(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&gu(this._after,s)}):(this._after&&s&&gu(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Uv(){return new tC}function nC(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},c=()=>e===o?l:void 0;ph.add(c);try{const u=s?s.run(o,a):a();return n||(e=void 0),await u}finally{ph.delete(c)}}}}function rC(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=nC({...t,...r})),e[n],e[n]}}}const vl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Sg="__unctx__",sC=vl[Sg]||(vl[Sg]=rC()),iC=(t,e={})=>sC.get(t,e),Pg="__unctx_async_handlers__",ph=vl[Pg]||(vl[Pg]=new Set);function El(t){const e=[];for(const s of ph){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Bv=iC("nuxt-app",{asyncContext:!1}),oC="__nuxt_plugin";function aC(t){let e=0;const n={provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.7.4"},get vue(){return n.vueApp.version}},payload:Yn({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:s=>hC(n,s),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...t};n.hooks=Uv(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;xa(n,o,i),xa(n.vueApp.config.globalProperties,o,i)},xa(n.vueApp,"$nuxt",n),xa(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",i=>{n.callHook("app:chunkError",{error:i.payload})}),window.useNuxtApp=window.useNuxtApp||Pe;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=Yn(n.payload.config);return n.provide("config",r),n}async function lC(t,e){if(e.hooks&&t.hooks.addHooks(e.hooks),typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function cC(t,e){const n=[],r=[];for(const s of e){const i=lC(t,s);s.parallel?n.push(i.catch(o=>r.push(o))):await i}if(await Promise.all(n),r.length)throw r[0]}/*! @__NO_SIDE_EFFECTS__ */function mn(t){return typeof t=="function"?t:(delete t.name,Object.assign(t.setup||(()=>{}),t,{[oC]:!0}))}const uC=mn;function hC(t,e,n){const r=()=>n?e(...n):e();return Bv.set(t),t.vueApp.runWithContext(r)}/*! @__NO_SIDE_EFFECTS__ */function Pe(){var e;let t;if(pv()&&(t=(e=us())==null?void 0:e.appContext.app.$nuxt),t=t||Bv.tryUse(),!t)throw new Error("[nuxt] instance unavailable");return t}/*! @__NO_SIDE_EFFECTS__ */function yc(){return Pe().$config}function xa(t,e,n){Object.defineProperty(t,e,{get:()=>n})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=function(t,e){if(!t)throw vi(e)},vi=function(t){return new Error("Firebase Database ("+$v.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},vc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new dC;const f=i<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jv=function(t){const e=Hv(t);return vc.encodeByteArray(e,!0)},Tl=function(t){return jv(t).replace(/\./g,"")},wl=function(t){try{return vc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t){return Wv(void 0,t)}function Wv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!gC(n)||(t[n]=Wv(t[n],e[n]));return t}function gC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=()=>mC().__FIREBASE_DEFAULTS__,yC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wl(t[1]);return e&&JSON.parse(e)},Zf=()=>{try{return _C()||yC()||vC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},EC=t=>{var e,n;return(n=(e=Zf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},TC=t=>{const e=EC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qv=()=>{var t;return(t=Zf())===null||t===void 0?void 0:t.config},wC=t=>{var e;return(e=Zf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Tl(JSON.stringify(n)),Tl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ed(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(On())}function AC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zv(){return $v.NODE_ADMIN===!0}function Gv(){try{return typeof indexedDB=="object"}catch{return!1}}function bC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="FirebaseError";class nr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=RC,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?CC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new nr(s,a,r)}}function CC(t,e){return t.replace(SC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const SC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t){return JSON.parse(t)}function ut(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Io(wl(i[0])||""),n=Io(wl(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},PC=function(t){const e=Yv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kC=function(t){const e=Yv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ni(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function kg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Il(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function gh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ng(i)&&Ng(o)){if(!gh(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ng(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function OC(t,e){const n=new DC(t,e);return n.subscribe.bind(n)}class DC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=mu),s.error===void 0&&(s.error=mu),s.complete===void 0&&(s.complete=mu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mu(){}function MC(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,F(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ec=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UC(e))try{this.getOrInitializeService({instanceIdentifier:xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xr){return this.instances.has(e)}getOptions(e=xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xr){return this.component?this.component.multipleInstances?e:xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FC(t){return t===xr?void 0:t}function UC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const $C={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},HC=ce.INFO,jC={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},WC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=jC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jo{constructor(e){this.name=e,this._logLevel=HC,this._logHandler=WC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$C[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const qC=(t,e)=>e.some(n=>t instanceof n);let Og,Dg;function KC(){return Og||(Og=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zC(){return Dg||(Dg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qv=new WeakMap,mh=new WeakMap,Xv=new WeakMap,_u=new WeakMap,nd=new WeakMap;function GC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qv.set(n,t)}).catch(()=>{}),nd.set(e,t),e}function YC(t){if(mh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});mh.set(t,e)}let _h={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QC(t){_h=t(_h)}function XC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yu(this),e,...n);return Xv.set(r,e.sort?e.sort():[e]),vr(r)}:zC().includes(t)?function(...e){return t.apply(yu(this),e),vr(Qv.get(this))}:function(...e){return vr(t.apply(yu(this),e))}}function JC(t){return typeof t=="function"?XC(t):(t instanceof IDBTransaction&&YC(t),qC(t,KC())?new Proxy(t,_h):t)}function vr(t){if(t instanceof IDBRequest)return GC(t);if(_u.has(t))return _u.get(t);const e=JC(t);return e!==t&&(_u.set(t,e),nd.set(e,t)),e}const yu=t=>nd.get(t);function ZC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=vr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(vr(o.result),l.oldVersion,l.newVersion,vr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const eS=["get","getKey","getAll","getAllKeys","count"],tS=["put","add","delete","clear"],vu=new Map;function xg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vu.get(e))return vu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=tS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||eS.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return vu.set(e,i),i}QC(t=>({...t,get:(e,n,r)=>xg(e,n)||t.get(e,n,r),has:(e,n)=>!!xg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yh="@firebase/app",Mg="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Jo("@firebase/app"),sS="@firebase/app-compat",iS="@firebase/analytics-compat",oS="@firebase/analytics",aS="@firebase/app-check-compat",lS="@firebase/app-check",cS="@firebase/auth",uS="@firebase/auth-compat",hS="@firebase/database",fS="@firebase/database-compat",dS="@firebase/functions",pS="@firebase/functions-compat",gS="@firebase/installations",mS="@firebase/installations-compat",_S="@firebase/messaging",yS="@firebase/messaging-compat",vS="@firebase/performance",ES="@firebase/performance-compat",TS="@firebase/remote-config",wS="@firebase/remote-config-compat",IS="@firebase/storage",AS="@firebase/storage-compat",bS="@firebase/firestore",RS="@firebase/firestore-compat",CS="firebase",SS="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="[DEFAULT]",PS={[yh]:"fire-core",[sS]:"fire-core-compat",[oS]:"fire-analytics",[iS]:"fire-analytics-compat",[lS]:"fire-app-check",[aS]:"fire-app-check-compat",[cS]:"fire-auth",[uS]:"fire-auth-compat",[hS]:"fire-rtdb",[fS]:"fire-rtdb-compat",[dS]:"fire-fn",[pS]:"fire-fn-compat",[gS]:"fire-iid",[mS]:"fire-iid-compat",[_S]:"fire-fcm",[yS]:"fire-fcm-compat",[vS]:"fire-perf",[ES]:"fire-perf-compat",[TS]:"fire-rc",[wS]:"fire-rc-compat",[IS]:"fire-gcs",[AS]:"fire-gcs-compat",[bS]:"fire-fst",[RS]:"fire-fst-compat","fire-js":"fire-js",[CS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Map,Eh=new Map;function kS(t,e){try{t.container.addComponent(e)}catch(n){es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(Eh.has(e))return es.debug(`There were multiple attempts to register component ${e}.`),!1;Eh.set(e,t);for(const n of Al.values())kS(n,t);return!0}function NS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Er=new Ei("app","Firebase",OS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=SS;function Jv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Er.create("bad-app-name",{appName:String(s)});if(n||(n=qv()),!n)throw Er.create("no-options");const i=Al.get(s);if(i){if(gh(n,i.options)&&gh(r,i.config))return i;throw Er.create("duplicate-app",{appName:s})}const o=new BC(s);for(const l of Eh.values())o.addComponent(l);const a=new DS(n,r,o);return Al.set(s,a),a}function Zv(t=vh){const e=Al.get(t);if(!e&&t===vh&&qv())return Jv();if(!e)throw Er.create("no-app",{appName:t});return e}function Bt(t,e,n){var r;let s=(r=PS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),es.warn(a.join(" "));return}Dn(new hn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS="firebase-heartbeat-database",MS=1,Ao="firebase-heartbeat-store";let Eu=null;function eE(){return Eu||(Eu=ZC(xS,MS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ao)}}}).catch(t=>{throw Er.create("idb-open",{originalErrorMessage:t.message})})),Eu}async function LS(t){try{return await(await eE()).transaction(Ao).objectStore(Ao).get(tE(t))}catch(e){if(e instanceof nr)es.warn(e.message);else{const n=Er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});es.warn(n.message)}}}async function Lg(t,e){try{const r=(await eE()).transaction(Ao,"readwrite");await r.objectStore(Ao).put(e,tE(t)),await r.done}catch(n){if(n instanceof nr)es.warn(n.message);else{const r=Er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});es.warn(r.message)}}}function tE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=1024,FS=30*24*60*60*1e3;class US{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $S(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=FS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vg(),{heartbeatsToSend:n,unsentEntries:r}=BS(this._heartbeatsCache.heartbeats),s=Tl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Vg(){return new Date().toISOString().substring(0,10)}function BS(t,e=VS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Fg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Fg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $S{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gv()?bC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await LS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Fg(t){return Tl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t){Dn(new hn("platform-logger",e=>new nS(e),"PRIVATE")),Dn(new hn("heartbeat",e=>new US(e),"PRIVATE")),Bt(yh,Mg,t),Bt(yh,Mg,"esm2017"),Bt("fire-js","")}HS("");var jS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,rd=rd||{},se=jS||self;function Tc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Zo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function WS(t){return Object.prototype.hasOwnProperty.call(t,Tu)&&t[Tu]||(t[Tu]=++qS)}var Tu="closure_uid_"+(1e9*Math.random()>>>0),qS=0;function KS(t,e,n){return t.call.apply(t.bind,arguments)}function zS(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function wt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?wt=KS:wt=zS,wt.apply(null,arguments)}function Ma(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function at(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Pr(){this.s=this.s,this.o=this.o}var GS=0;Pr.prototype.s=!1;Pr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),GS!=0)&&WS(this)};Pr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const nE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function sd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ug(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Tc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function It(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var YS=function(){if(!se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{se.addEventListener("test",()=>{},e),se.removeEventListener("test",()=>{},e)}catch{}return t}();function bo(t){return/^[\s\xa0]*$/.test(t)}function wc(){var t=se.navigator;return t&&(t=t.userAgent)?t:""}function wn(t){return wc().indexOf(t)!=-1}function id(t){return id[" "](t),t}id[" "]=function(){};function QS(t,e){var n=HP;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var XS=wn("Opera"),ri=wn("Trident")||wn("MSIE"),rE=wn("Edge"),Th=rE||ri,sE=wn("Gecko")&&!(wc().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge"))&&!(wn("Trident")||wn("MSIE"))&&!wn("Edge"),JS=wc().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge");function iE(){var t=se.document;return t?t.documentMode:void 0}var wh;e:{var wu="",Iu=function(){var t=wc();if(sE)return/rv:([^\);]+)(\)|;)/.exec(t);if(rE)return/Edge\/([\d\.]+)/.exec(t);if(ri)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(JS)return/WebKit\/(\S+)/.exec(t);if(XS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Iu&&(wu=Iu?Iu[1]:""),ri){var Au=iE();if(Au!=null&&Au>parseFloat(wu)){wh=String(Au);break e}}wh=wu}var Ih;if(se.document&&ri){var Bg=iE();Ih=Bg||parseInt(wh,10)||void 0}else Ih=void 0;var ZS=Ih;function Ro(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(sE){e:{try{id(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:eP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ro.$.h.call(this)}}at(Ro,It);var eP={2:"touch",3:"pen",4:"mouse"};Ro.prototype.h=function(){Ro.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ea="closure_listenable_"+(1e6*Math.random()|0),tP=0;function nP(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++tP,this.fa=this.ia=!1}function Ic(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function od(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function rP(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function oE(t){const e={};for(const n in t)e[n]=t[n];return e}const $g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function aE(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<$g.length;i++)n=$g[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ac(t){this.src=t,this.g={},this.h=0}Ac.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=bh(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new nP(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Ah(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=nE(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ic(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function bh(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var ad="closure_lm_"+(1e6*Math.random()|0),bu={};function lE(t,e,n,r,s){if(r&&r.once)return uE(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)lE(t,e[i],n,r,s);return null}return n=ud(n),t&&t[ea]?t.O(e,n,Zo(r)?!!r.capture:!!r,s):cE(t,e,n,!1,r,s)}function cE(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Zo(s)?!!s.capture:!!s,a=cd(t);if(a||(t[ad]=a=new Ac(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=sP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)YS||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(fE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sP(){function t(n){return e.call(t.src,t.listener,n)}const e=iP;return t}function uE(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)uE(t,e[i],n,r,s);return null}return n=ud(n),t&&t[ea]?t.P(e,n,Zo(r)?!!r.capture:!!r,s):cE(t,e,n,!0,r,s)}function hE(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)hE(t,e[i],n,r,s);else r=Zo(r)?!!r.capture:!!r,n=ud(n),t&&t[ea]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=bh(i,n,r,s),-1<n&&(Ic(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=cd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=bh(e,n,r,s)),(n=-1<t?e[t]:null)&&ld(n))}function ld(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ea])Ah(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(fE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=cd(e))?(Ah(n,t),n.h==0&&(n.src=null,e[ad]=null)):Ic(t)}}}function fE(t){return t in bu?bu[t]:bu[t]="on"+t}function iP(t,e){if(t.fa)t=!0;else{e=new Ro(e,this);var n=t.listener,r=t.la||t.src;t.ia&&ld(t),t=n.call(r,e)}return t}function cd(t){return t=t[ad],t instanceof Ac?t:null}var Ru="__closure_events_fn_"+(1e9*Math.random()>>>0);function ud(t){return typeof t=="function"?t:(t[Ru]||(t[Ru]=function(e){return t.handleEvent(e)}),t[Ru])}function ot(){Pr.call(this),this.i=new Ac(this),this.S=this,this.J=null}at(ot,Pr);ot.prototype[ea]=!0;ot.prototype.removeEventListener=function(t,e,n,r){hE(this,t,e,n,r)};function ft(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new It(e,t);else if(e instanceof It)e.target=e.target||t;else{var s=e;e=new It(r,t),aE(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=La(o,r,!0,e)&&s}if(o=e.g=t,s=La(o,r,!0,e)&&s,s=La(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=La(o,r,!1,e)&&s}ot.prototype.N=function(){if(ot.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ic(n[r]);delete t.g[e],t.h--}}this.J=null};ot.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ot.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function La(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ah(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var hd=se.JSON.stringify;class oP{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function aP(){var t=fd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class lP{constructor(){this.h=this.g=null}add(e,n){const r=dE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var dE=new oP(()=>new cP,t=>t.reset());class cP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function uP(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function hP(t){se.setTimeout(()=>{throw t},0)}let Co,So=!1,fd=new lP,pE=()=>{const t=se.Promise.resolve(void 0);Co=()=>{t.then(fP)}};var fP=()=>{for(var t;t=aP();){try{t.h.call(t.g)}catch(n){hP(n)}var e=dE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}So=!1};function bc(t,e){ot.call(this),this.h=t||1,this.g=e||se,this.j=wt(this.qb,this),this.l=Date.now()}at(bc,ot);U=bc.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ft(this,"tick"),this.ga&&(dd(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function dd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){bc.$.N.call(this),dd(this),delete this.g};function pd(t,e,n){if(typeof t=="function")n&&(t=wt(t,n));else if(t&&typeof t.handleEvent=="function")t=wt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:se.setTimeout(t,e||0)}function gE(t){t.g=pd(()=>{t.g=null,t.i&&(t.i=!1,gE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class dP extends Pr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gE(this)}N(){super.N(),this.g&&(se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Po(t){Pr.call(this),this.h=t,this.g={}}at(Po,Pr);var Hg=[];function mE(t,e,n,r){Array.isArray(n)||(n&&(Hg[0]=n.toString()),n=Hg);for(var s=0;s<n.length;s++){var i=lE(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function _E(t){od(t.g,function(e,n){this.g.hasOwnProperty(n)&&ld(e)},t),t.g={}}Po.prototype.N=function(){Po.$.N.call(this),_E(this)};Po.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Rc(){this.g=!0}Rc.prototype.Ea=function(){this.g=!1};function pP(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function gP(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Os(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_P(t,n)+(r?" "+r:"")})}function mP(t,e){t.info(function(){return"TIMEOUT: "+e})}Rc.prototype.info=function(){};function _P(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return hd(n)}catch{return e}}var hs={},jg=null;function Cc(){return jg=jg||new ot}hs.Ta="serverreachability";function yE(t){It.call(this,hs.Ta,t)}at(yE,It);function ko(t){const e=Cc();ft(e,new yE(e))}hs.STAT_EVENT="statevent";function vE(t,e){It.call(this,hs.STAT_EVENT,t),this.stat=e}at(vE,It);function Ct(t){const e=Cc();ft(e,new vE(e,t))}hs.Ua="timingevent";function EE(t,e){It.call(this,hs.Ua,t),this.size=e}at(EE,It);function ta(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return se.setTimeout(function(){t()},e)}var Sc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},TE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function gd(){}gd.prototype.h=null;function Wg(t){return t.h||(t.h=t.i())}function wE(){}var na={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function md(){It.call(this,"d")}at(md,It);function _d(){It.call(this,"c")}at(_d,It);var Rh;function Pc(){}at(Pc,gd);Pc.prototype.g=function(){return new XMLHttpRequest};Pc.prototype.i=function(){return{}};Rh=new Pc;function ra(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Po(this),this.P=yP,t=Th?125:void 0,this.V=new bc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new IE}function IE(){this.i=null,this.g="",this.h=!1}var yP=45e3,Ch={},bl={};U=ra.prototype;U.setTimeout=function(t){this.P=t};function Sh(t,e,n){t.L=1,t.v=Nc(Xn(e)),t.s=n,t.S=!0,AE(t,null)}function AE(t,e){t.G=Date.now(),sa(t),t.A=Xn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),OE(n.i,"t",r),t.C=0,n=t.l.J,t.h=new IE,t.g=ZE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new dP(wt(t.Pa,t,t.g),t.O)),mE(t.U,t.g,"readystatechange",t.nb),e=t.I?oE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ko(),pP(t.j,t.u,t.A,t.m,t.W,t.s)}U.nb=function(t){t=t.target;const e=this.M;e&&In(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const u=In(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Th||this.g&&(this.h.h||this.g.ja()||Gg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ko(3):ko(2)),kc(this);var n=this.g.da();this.ca=n;t:if(bE(this)){var r=Gg(this.g);t="";var s=r.length,i=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$r(this),to(this);var o="";break t}this.h.i=new se.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,gP(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!bo(a)){var c=a;break t}}c=null}if(n=c)Os(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ph(this,n);else{this.i=!1,this.o=3,Ct(12),$r(this),to(this);break e}}this.S?(RE(this,u,o),Th&&this.i&&u==3&&(mE(this.U,this.V,"tick",this.mb),this.V.start())):(Os(this.j,this.m,o,null),Ph(this,o)),u==4&&$r(this),this.i&&!this.J&&(u==4?YE(this.l,this):(this.i=!1,sa(this)))}else UP(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ct(12)):(this.o=0,Ct(13)),$r(this),to(this)}}}catch{}finally{}};function bE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function RE(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=vP(t,n),s==bl){e==4&&(t.o=4,Ct(14),r=!1),Os(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ch){t.o=4,Ct(15),Os(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Os(t.j,t.m,s,null),Ph(t,s);bE(t)&&s!=bl&&s!=Ch&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ct(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Id(e),e.M=!0,Ct(11))):(Os(t.j,t.m,n,"[Invalid Chunked Response]"),$r(t),to(t))}U.mb=function(){if(this.g){var t=In(this.g),e=this.g.ja();this.C<e.length&&(kc(this),RE(this,t,e),this.i&&t!=4&&sa(this))}};function vP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?bl:(n=Number(e.substring(n,r)),isNaN(n)?Ch:(r+=1,r+n>e.length?bl:(e=e.slice(r,r+n),t.C=r+n,e)))}U.cancel=function(){this.J=!0,$r(this)};function sa(t){t.Y=Date.now()+t.P,CE(t,t.P)}function CE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ta(wt(t.lb,t),e)}function kc(t){t.B&&(se.clearTimeout(t.B),t.B=null)}U.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(mP(this.j,this.A),this.L!=2&&(ko(),Ct(17)),$r(this),this.o=2,to(this)):CE(this,this.Y-t)};function to(t){t.l.H==0||t.J||YE(t.l,t)}function $r(t){kc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,dd(t.V),_E(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ph(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||kh(n.i,t))){if(!t.K&&kh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Sl(n),Mc(n);else break e;wd(n),Ct(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ta(wt(n.ib,n),6e3));if(1>=ME(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Hr(n,11)}else if((t.K||n.g==t)&&Sl(n),!bo(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.i;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(yd(i,i.h),i.h=null))}if(r.F){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Me(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=JE(r,r.J?r.pa:null,r.Y),o.K){LE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(kc(a),sa(a)),r.g=o}else zE(r);0<n.j.length&&Lc(n)}else c[0]!="stop"&&c[0]!="close"||Hr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Hr(n,7):Td(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}ko(4)}catch{}}function EP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Tc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function TP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Tc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function SE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Tc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=TP(t),r=EP(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var PE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Xr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Xr){this.h=t.h,Rl(this,t.j),this.s=t.s,this.g=t.g,Cl(this,t.m),this.l=t.l;var e=t.i,n=new No;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),qg(this,n),this.o=t.o}else t&&(e=String(t).match(PE))?(this.h=!1,Rl(this,e[1]||"",!0),this.s=qi(e[2]||""),this.g=qi(e[3]||"",!0),Cl(this,e[4]),this.l=qi(e[5]||"",!0),qg(this,e[6]||"",!0),this.o=qi(e[7]||"")):(this.h=!1,this.i=new No(null,this.h))}Xr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ki(e,Kg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ki(e,Kg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ki(n,n.charAt(0)=="/"?bP:AP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ki(n,CP)),t.join("")};function Xn(t){return new Xr(t)}function Rl(t,e,n){t.j=n?qi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Cl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qg(t,e,n){e instanceof No?(t.i=e,SP(t.i,t.h)):(n||(e=Ki(e,RP)),t.i=new No(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function Nc(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ki(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,IP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function IP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Kg=/[#\/\?@]/g,AP=/[#\?:]/g,bP=/[#\?]/g,RP=/[#\?@]/g,CP=/#/g;function No(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function kr(t){t.g||(t.g=new Map,t.h=0,t.i&&wP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=No.prototype;U.add=function(t,e){kr(this),this.i=null,t=wi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function kE(t,e){kr(t),e=wi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function NE(t,e){return kr(t),e=wi(t,e),t.g.has(e)}U.forEach=function(t,e){kr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};U.ta=function(){kr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};U.Z=function(t){kr(this);let e=[];if(typeof t=="string")NE(this,t)&&(e=e.concat(this.g.get(wi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return kr(this),this.i=null,t=wi(this,t),NE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function OE(t,e,n){kE(t,e),0<n.length&&(t.i=null,t.g.set(wi(t,e),sd(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function wi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function SP(t,e){e&&!t.j&&(kr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(kE(this,r),OE(this,s,n))},t)),t.j=e}var PP=class{constructor(t,e){this.g=t,this.map=e}};function DE(t){this.l=t||kP,se.PerformanceNavigationTiming?(t=se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(se.g&&se.g.Ka&&se.g.Ka()&&se.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kP=10;function xE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ME(t){return t.h?1:t.g?t.g.size:0}function kh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function yd(t,e){t.g?t.g.add(e):t.h=e}function LE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}DE.prototype.cancel=function(){if(this.i=VE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function VE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return sd(t.i)}var NP=class{stringify(t){return se.JSON.stringify(t,void 0)}parse(t){return se.JSON.parse(t,void 0)}};function OP(){this.g=new NP}function DP(t,e,n){const r=n||"";try{SE(t,function(s,i){let o=s;Zo(s)&&(o=hd(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function xP(t,e){const n=new Rc;if(se.Image){const r=new Image;r.onload=Ma(Va,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ma(Va,n,r,"TestLoadImage: error",!1,e),r.onabort=Ma(Va,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ma(Va,n,r,"TestLoadImage: timeout",!1,e),se.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Va(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Oc(t){this.l=t.ec||null,this.j=t.ob||!1}at(Oc,gd);Oc.prototype.g=function(){return new Dc(this.l,this.j)};Oc.prototype.i=function(t){return function(){return t}}({});function Dc(t,e){ot.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=vd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}at(Dc,ot);var vd=0;U=Dc.prototype;U.open=function(t,e){if(this.readyState!=vd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Oo(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||se).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ia(this)),this.readyState=vd};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Oo(this)),this.g&&(this.readyState=3,Oo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof se.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;FE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function FE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ia(this):Oo(this),this.readyState==3&&FE(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,ia(this))};U.Ya=function(t){this.g&&(this.response=t,ia(this))};U.ka=function(){this.g&&ia(this)};function ia(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Oo(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Oo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Dc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var MP=se.JSON.parse;function He(t){ot.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=UE,this.L=this.M=!1}at(He,ot);var UE="",LP=/^https?$/i,VP=["POST","PUT"];U=He.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Rh.g(),this.C=this.u?Wg(this.u):Wg(Rh),this.g.onreadystatechange=wt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){zg(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=se.FormData&&t instanceof se.FormData,!(0<=nE(VP,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{HE(this),0<this.B&&((this.L=FP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=wt(this.ua,this)):this.A=pd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){zg(this,i)}};function FP(t){return ri&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof rd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function zg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,BE(t),xc(t)}function BE(t){t.F||(t.F=!0,ft(t,"complete"),ft(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),xc(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xc(this,!0)),He.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?$E(this):this.kb())};U.kb=function(){$E(this)};function $E(t){if(t.h&&typeof rd<"u"&&(!t.C[1]||In(t)!=4||t.da()!=2)){if(t.v&&In(t)==4)pd(t.La,0,t);else if(ft(t,"readystatechange"),In(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(PE)[1]||null;!s&&se.self&&se.self.location&&(s=se.self.location.protocol.slice(0,-1)),r=!LP.test(s?s.toLowerCase():"")}n=r}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var i=2<In(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",BE(t)}}finally{xc(t)}}}}function xc(t,e){if(t.g){HE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ft(t,"ready");try{n.onreadystatechange=r}catch{}}}function HE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(se.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function In(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),MP(e)}};function Gg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case UE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function UP(t){const e={};t=(t.g&&2<=In(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(bo(t[r]))continue;var n=uP(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}rP(e,function(r){return r.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jE(t){let e="";return od(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ed(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=jE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function xi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function WE(t){this.Ga=0,this.j=[],this.l=new Rc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=xi("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=xi("baseRetryDelayMs",5e3,t),this.hb=xi("retryDelaySeedMs",1e4,t),this.eb=xi("forwardChannelMaxRetries",2,t),this.xa=xi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new DE(t&&t.concurrentRequestLimit),this.Ja=new OP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=WE.prototype;U.ra=8;U.H=1;function Td(t){if(qE(t),t.H==3){var e=t.W++,n=Xn(t.I);if(Me(n,"SID",t.K),Me(n,"RID",e),Me(n,"TYPE","terminate"),oa(t,n),e=new ra(t,t.l,e),e.L=2,e.v=Nc(Xn(n)),n=!1,se.navigator&&se.navigator.sendBeacon)try{n=se.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&se.Image&&(new Image().src=e.v,n=!0),n||(e.g=ZE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),sa(e)}XE(t)}function Mc(t){t.g&&(Id(t),t.g.cancel(),t.g=null)}function qE(t){Mc(t),t.u&&(se.clearTimeout(t.u),t.u=null),Sl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&se.clearTimeout(t.m),t.m=null)}function Lc(t){if(!xE(t.i)&&!t.m){t.m=!0;var e=t.Na;Co||pE(),So||(Co(),So=!0),fd.add(e,t),t.C=0}}function BP(t,e){return ME(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ta(wt(t.Na,t,e),QE(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ra(this,this.l,t);let i=this.s;if(this.U&&(i?(i=oE(i),aE(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=KE(this,s,e),n=Xn(this.I),Me(n,"RID",t),Me(n,"CVER",22),this.F&&Me(n,"X-HTTP-Session-Id",this.F),oa(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(jE(i)))+"&"+e:this.o&&Ed(n,this.o,i)),yd(this.i,s),this.bb&&Me(n,"TYPE","init"),this.P?(Me(n,"$req",e),Me(n,"SID","null"),s.aa=!0,Sh(s,n,null)):Sh(s,n,e),this.H=2}}else this.H==3&&(t?Yg(this,t):this.j.length==0||xE(this.i)||Yg(this))};function Yg(t,e){var n;e?n=e.m:n=t.W++;const r=Xn(t.I);Me(r,"SID",t.K),Me(r,"RID",n),Me(r,"AID",t.V),oa(t,r),t.o&&t.s&&Ed(r,t.o,t.s),n=new ra(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=KE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),yd(t.i,n),Sh(n,r,e)}function oa(t,e){t.na&&od(t.na,function(n,r){Me(e,r,n)}),t.h&&SE({},function(n,r){Me(e,r,n)})}function KE(t,e,n){n=Math.min(t.j.length,n);var r=t.h?wt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{DP(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function zE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Co||pE(),So||(Co(),So=!0),fd.add(e,t),t.A=0}}function wd(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ta(wt(t.Ma,t),QE(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,GE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ta(wt(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ct(10),Mc(this),GE(this))};function Id(t){t.B!=null&&(se.clearTimeout(t.B),t.B=null)}function GE(t){t.g=new ra(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Xn(t.wa);Me(e,"RID","rpc"),Me(e,"SID",t.K),Me(e,"AID",t.V),Me(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Me(e,"TO",t.qa),Me(e,"TYPE","xmlhttp"),oa(t,e),t.o&&t.s&&Ed(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Nc(Xn(e)),n.s=null,n.S=!0,AE(n,t)}U.ib=function(){this.v!=null&&(this.v=null,Mc(this),wd(this),Ct(19))};function Sl(t){t.v!=null&&(se.clearTimeout(t.v),t.v=null)}function YE(t,e){var n=null;if(t.g==e){Sl(t),Id(t),t.g=null;var r=2}else if(kh(t.i,e))n=e.F,LE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Cc(),ft(r,new EE(r,n)),Lc(t)}else zE(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&BP(t,e)||r==2&&wd(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Hr(t,5);break;case 4:Hr(t,10);break;case 3:Hr(t,6);break;default:Hr(t,2)}}}function QE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Hr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=wt(t.pb,t);n||(n=new Xr("//www.google.com/images/cleardot.gif"),se.location&&se.location.protocol=="http"||Rl(n,"https"),Nc(n)),xP(n.toString(),r)}else Ct(2);t.H=0,t.h&&t.h.za(e),XE(t),qE(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ct(2)):(this.l.info("Failed to ping google.com"),Ct(1))};function XE(t){if(t.H=0,t.ma=[],t.h){const e=VE(t.i);(e.length!=0||t.j.length!=0)&&(Ug(t.ma,e),Ug(t.ma,t.j),t.i.i.length=0,sd(t.j),t.j.length=0),t.h.ya()}}function JE(t,e,n){var r=n instanceof Xr?Xn(n):new Xr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Cl(r,r.m);else{var s=se.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Xr(null);r&&Rl(i,r),e&&(i.g=e),s&&Cl(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Me(r,n,e),Me(r,"VER",t.ra),oa(t,r),r}function ZE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new He(new Oc({ob:!0})):new He(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function eT(){}U=eT.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function Pl(){if(ri&&!(10<=Number(ZS)))throw Error("Environmental error: no available transport.")}Pl.prototype.g=function(t,e){return new Ht(t,e)};function Ht(t,e){ot.call(this),this.g=new WE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!bo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!bo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ii(this)}at(Ht,ot);Ht.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ct(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=JE(t,null,t.Y),Lc(t)};Ht.prototype.close=function(){Td(this.g)};Ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=hd(t),t=n);e.j.push(new PP(e.fb++,t)),e.H==3&&Lc(e)};Ht.prototype.N=function(){this.g.h=null,delete this.j,Td(this.g),delete this.g,Ht.$.N.call(this)};function tT(t){md.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}at(tT,md);function nT(){_d.call(this),this.status=1}at(nT,_d);function Ii(t){this.g=t}at(Ii,eT);Ii.prototype.Ba=function(){ft(this.g,"a")};Ii.prototype.Aa=function(t){ft(this.g,new tT(t))};Ii.prototype.za=function(t){ft(this.g,new nT)};Ii.prototype.ya=function(){ft(this.g,"b")};function $P(){this.blockSize=-1}function fn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}at(fn,$P);fn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Cu(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}fn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Cu(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Cu(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Cu(this,r),s=0;break}}this.h=s,this.i+=e};fn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function be(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var HP={};function Ad(t){return-128<=t&&128>t?QS(t,function(e){return new be([e|0],0>e?-1:0)}):new be([t|0],0>t?-1:0)}function An(t){if(isNaN(t)||!isFinite(t))return js;if(0>t)return ct(An(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Nh;return new be(e,0)}function rT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ct(rT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=An(Math.pow(e,8)),r=js,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=An(Math.pow(e,i)),r=r.R(i).add(An(o))):(r=r.R(n),r=r.add(An(o)))}return r}var Nh=4294967296,js=Ad(0),Oh=Ad(1),Qg=Ad(16777216);U=be.prototype;U.ea=function(){if(zt(this))return-ct(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Nh+r)*e,e*=Nh}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(jn(this))return"0";if(zt(this))return"-"+ct(this).toString(t);for(var e=An(Math.pow(t,6)),n=this,r="";;){var s=Nl(n,e).g;n=kl(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,jn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function jn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function zt(t){return t.h==-1}U.X=function(t){return t=kl(this,t),zt(t)?-1:jn(t)?0:1};function ct(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new be(n,~t.h).add(Oh)}U.abs=function(){return zt(this)?ct(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new be(n,n[n.length-1]&-2147483648?-1:0)};function kl(t,e){return t.add(ct(e))}U.R=function(t){if(jn(this)||jn(t))return js;if(zt(this))return zt(t)?ct(this).R(ct(t)):ct(ct(this).R(t));if(zt(t))return ct(this.R(ct(t)));if(0>this.X(Qg)&&0>t.X(Qg))return An(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Fa(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Fa(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Fa(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Fa(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new be(n,0)};function Fa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Mi(t,e){this.g=t,this.h=e}function Nl(t,e){if(jn(e))throw Error("division by zero");if(jn(t))return new Mi(js,js);if(zt(t))return e=Nl(ct(t),e),new Mi(ct(e.g),ct(e.h));if(zt(e))return e=Nl(t,ct(e)),new Mi(ct(e.g),e.h);if(30<t.g.length){if(zt(t)||zt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Oh,r=e;0>=r.X(t);)n=Xg(n),r=Xg(r);var s=Is(n,1),i=Is(r,1);for(r=Is(r,2),n=Is(n,2);!jn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Is(r,1),n=Is(n,1)}return e=kl(t,s.R(e)),new Mi(s,e)}for(s=js;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=An(n),o=i.R(e);zt(o)||0<o.X(t);)n-=r,i=An(n),o=i.R(e);jn(i)&&(i=Oh),s=s.add(i),t=kl(t,o)}return new Mi(s,t)}U.gb=function(t){return Nl(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new be(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new be(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new be(n,this.h^t.h)};function Xg(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new be(n,t.h)}function Is(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new be(s,t.h)}Pl.prototype.createWebChannel=Pl.prototype.g;Ht.prototype.send=Ht.prototype.u;Ht.prototype.open=Ht.prototype.m;Ht.prototype.close=Ht.prototype.close;Sc.NO_ERROR=0;Sc.TIMEOUT=8;Sc.HTTP_ERROR=6;TE.COMPLETE="complete";wE.EventType=na;na.OPEN="a";na.CLOSE="b";na.ERROR="c";na.MESSAGE="d";ot.prototype.listen=ot.prototype.O;He.prototype.listenOnce=He.prototype.P;He.prototype.getLastError=He.prototype.Sa;He.prototype.getLastErrorCode=He.prototype.Ia;He.prototype.getStatus=He.prototype.da;He.prototype.getResponseJson=He.prototype.Wa;He.prototype.getResponseText=He.prototype.ja;He.prototype.send=He.prototype.ha;He.prototype.setWithCredentials=He.prototype.Oa;fn.prototype.digest=fn.prototype.l;fn.prototype.reset=fn.prototype.reset;fn.prototype.update=fn.prototype.j;be.prototype.add=be.prototype.add;be.prototype.multiply=be.prototype.R;be.prototype.modulo=be.prototype.gb;be.prototype.compare=be.prototype.X;be.prototype.toNumber=be.prototype.ea;be.prototype.toString=be.prototype.toString;be.prototype.getBits=be.prototype.D;be.fromNumber=An;be.fromString=rT;var jP=function(){return new Pl},WP=function(){return Cc()},Su=Sc,qP=TE,KP=hs,Jg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ua=wE,zP=He,GP=fn,Ws=be;const Zg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new Jo("@firebase/firestore");function Li(){return ts.logLevel}function z(t,...e){if(ts.logLevel<=ce.DEBUG){const n=e.map(bd);ts.debug(`Firestore (${Ai}): ${t}`,...n)}}function Jn(t,...e){if(ts.logLevel<=ce.ERROR){const n=e.map(bd);ts.error(`Firestore (${Ai}): ${t}`,...n)}}function si(t,...e){if(ts.logLevel<=ce.WARN){const n=e.map(bd);ts.warn(`Firestore (${Ai}): ${t}`,...n)}}function bd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: `+t;throw Jn(e),new Error(e)}function Ve(t,e){t||re()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends nr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class QP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XP{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new sT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new gt(e)}}class JP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ZP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new JP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ek{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new ek(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=nk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function ii(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new je(0,0))}static max(){return new oe(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Do.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Do?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends Do{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const rk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Do{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return rk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new H(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new H(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Le.fromString(e))}static fromName(e){return new Q(Le.fromString(e).popFirst(5))}static empty(){return new Q(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Le(e.slice()))}}function sk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new br(s,Q.empty(),e)}function ik(t){return new br(t.readTime,t.key,-1)}class br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new br(oe.min(),Q.empty(),-1)}static max(){return new br(oe.max(),Q.empty(),-1)}}function ok(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==ak)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(s=>s?N.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new N((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new N((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function la(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Rd.ae=-1;function Vc(t){return t==null}function Ol(t){return t===0&&1/t==-1/0}function ck(t){return typeof t=="number"&&Number.isInteger(t)&&!Ol(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function oT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et=class Dh{constructor(e,n){this.comparator=e,this.root=n||Tr.EMPTY}insert(e,n){return new Dh(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Tr.BLACK,null,null))}remove(e){return new Dh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ba(this.root,e,this.comparator,!0)}},Ba=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Tr=class Bn{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Bn.RED,this.left=s??Bn.EMPTY,this.right=i??Bn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Bn(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Bn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Bn.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}};Tr.EMPTY=null,Tr.RED=!0,Tr.BLACK=!1;Tr.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Tr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tm(this.data.getIterator())}getIteratorFrom(e){return new tm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new At(this.comparator);return n.data=e,n}}class tm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new on([])}unionWith(e){let n=new At(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new on(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ii(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new aT("Invalid base64 string: "+i):i}}(e);return new bt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const uk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=uk.exec(t);if(Ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ns(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sd(t){const e=t.mapValue.fields.__previous_value__;return Cd(e)?Sd(e):e}function xo(t){const e=Rr(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Mo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cd(t)?4:fk(t)?9007199254740991:10:re()}function xn(t,e){if(t===e)return!0;const n=rs(t);if(n!==rs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xo(t).isEqual(xo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Rr(s.timestampValue),a=Rr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ns(s.bytesValue).isEqual(ns(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),a=ze(i.doubleValue);return o===a?Ol(o)===Ol(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ii(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(em(o)!==em(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!xn(o[l],a[l])))return!1;return!0}(t,e);default:return re()}}function Lo(t,e){return(t.values||[]).find(n=>xn(n,e))!==void 0}function oi(t,e){if(t===e)return 0;const n=rs(t),r=rs(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ze(i.integerValue||i.doubleValue),l=ze(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return nm(t.timestampValue,e.timestampValue);case 4:return nm(xo(t),xo(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ns(i),l=ns(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ve(a[c],l[c]);if(u!==0)return u}return ve(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ve(ze(i.latitude),ze(o.latitude));return a!==0?a:ve(ze(i.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=oi(a[c],l[c]);if(u)return u}return ve(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===$a.mapValue&&o===$a.mapValue)return 0;if(i===$a.mapValue)return 1;if(o===$a.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=ve(l[h],u[h]);if(f!==0)return f;const d=oi(a[l[h]],c[u[h]]);if(d!==0)return d}return ve(l.length,u.length)}(t.mapValue,e.mapValue);default:throw re()}}function nm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Rr(t),r=Rr(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function ai(t){return xh(t)}function xh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ns(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=xh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${xh(n.fields[o])}`;return s+"}"}(t.mapValue):re()}function rm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Mh(t){return!!t&&"integerValue"in t}function Pd(t){return!!t&&"arrayValue"in t}function sm(t){return!!t&&"nullValue"in t}function im(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function el(t){return!!t&&"mapValue"in t}function no(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=no(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=no(t.arrayValue.values[n]);return e}return Object.assign({},t)}function fk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!el(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=no(n)}setAll(e){let n=Et.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=no(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());el(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];el(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){bi(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Gt(no(this.value))}}function lT(t){const e=[];return bi(t.fields,(n,r)=>{const s=new Et([n]);if(el(r)){const i=lT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new on(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new mt(e,0,oe.min(),oe.min(),oe.min(),Gt.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,oe.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,oe.min(),oe.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,oe.min(),oe.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n){this.position=e,this.inclusive=n}}function om(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=oi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function am(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n="asc"){this.field=e,this.dir=n}}function dk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{}class Qe extends cT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new gk(e,n,r):n==="array-contains"?new yk(e,r):n==="in"?new vk(e,r):n==="not-in"?new Ek(e,r):n==="array-contains-any"?new Tk(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mk(e,r):new _k(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(oi(n,this.value)):n!==null&&rs(this.value)===rs(n)&&this.matchesComparison(oi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class dn extends cT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new dn(e,n)}matches(e){return uT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function uT(t){return t.op==="and"}function hT(t){return pk(t)&&uT(t)}function pk(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function Lh(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+ai(t.value);if(hT(t))return t.filters.map(e=>Lh(e)).join(",");{const e=t.filters.map(n=>Lh(n)).join(",");return`${t.op}(${e})`}}function fT(t,e){return t instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&xn(r.value,s.value)}(t,e):t instanceof dn?function(r,s){return s instanceof dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&fT(o,s.filters[a]),!0):!1}(t,e):void re()}function dT(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${ai(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(dT).join(" ,")+"}"}(t):"Filter"}class gk extends Qe{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class mk extends Qe{constructor(e,n){super(e,"in",n),this.keys=pT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _k extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=pT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class yk extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pd(n)&&Lo(n.arrayValue,this.value)}}class vk extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lo(this.value.arrayValue,n)}}class Ek extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Lo(this.value.arrayValue,n)}}class Tk extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Lo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function lm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new wk(t,e,n,r,s,i,o)}function kd(t){const e=ae(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Lh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Vc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ai(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ai(r)).join(",")),e.he=n}return e.he}function Nd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!am(t.startAt,e.startAt)&&am(t.endAt,e.endAt)}function Vh(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Ik(t,e,n,r,s,i,o,a){return new ca(t,e,n,r,s,i,o,a)}function Fc(t){return new ca(t)}function cm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Od(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function mT(t){return t.collectionGroup!==null}function so(t){const e=ae(t);if(e.Pe===null){e.Pe=[];const n=Od(e),r=gT(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new ro(n)),e.Pe.push(new ro(Et.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new ro(Et.keyField(),i))}}}return e.Pe}function Sn(t){const e=ae(t);return e.Ie||(e.Ie=Ak(e,so(t))),e.Ie}function Ak(t,e){if(t.limitType==="F")return lm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ro(s.field,i)});const n=t.endAt?new Dl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Dl(t.startAt.position,t.startAt.inclusive):null;return lm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Fh(t,e){e.getFirstInequalityField(),Od(t);const n=t.filters.concat([e]);return new ca(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Uh(t,e,n){return new ca(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uc(t,e){return Nd(Sn(t),Sn(e))&&t.limitType===e.limitType}function _T(t){return`${kd(Sn(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>dT(s)).join(", ")}]`),Vc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ai(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ai(s)).join(",")),`Target(${r})`}(Sn(t))}; limitType=${t.limitType})`}function Bc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of so(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=om(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,so(r),s)||r.endAt&&!function(o,a,l){const c=om(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,so(r),s))}(t,e)}function bk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yT(t){return(e,n)=>{let r=!1;for(const s of so(t)){const i=Rk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Rk(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?oi(l,c):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){bi(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return oT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=new et(Q.comparator);function Zn(){return Ck}const vT=new et(Q.comparator);function zi(...t){let e=vT;for(const n of t)e=e.insert(n.key,n);return e}function ET(t){let e=vT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jr(){return io()}function TT(){return io()}function io(){return new Ri(t=>t.toString(),(t,e)=>t.isEqual(e))}const Sk=new et(Q.comparator),Pk=new At(Q.comparator);function ue(...t){let e=Pk;for(const n of t)e=e.add(n);return e}const kk=new At(ve);function Nk(){return kk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ol(e)?"-0":e}}function IT(t){return{integerValue:""+t}}function Ok(t,e){return ck(e)?IT(e):wT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this._=void 0}}function Dk(t,e,n){return t instanceof xl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Cd(i)&&(i=Sd(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Vo?bT(t,e):t instanceof Fo?RT(t,e):function(s,i){const o=AT(s,i),a=um(o)+um(s.Te);return Mh(o)&&Mh(s.Te)?IT(a):wT(s.serializer,a)}(t,e)}function xk(t,e,n){return t instanceof Vo?bT(t,e):t instanceof Fo?RT(t,e):n}function AT(t,e){return t instanceof Ml?function(r){return Mh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class xl extends $c{}class Vo extends $c{constructor(e){super(),this.elements=e}}function bT(t,e){const n=CT(e);for(const r of t.elements)n.some(s=>xn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Fo extends $c{constructor(e){super(),this.elements=e}}function RT(t,e){let n=CT(e);for(const r of t.elements)n=n.filter(s=>!xn(s,r));return{arrayValue:{values:n}}}class Ml extends $c{constructor(e,n){super(),this.serializer=e,this.Te=n}}function um(t){return ze(t.integerValue||t.doubleValue)}function CT(t){return Pd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Mk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Vo&&s instanceof Vo||r instanceof Fo&&s instanceof Fo?ii(r.elements,s.elements,xn):r instanceof Ml&&s instanceof Ml?xn(r.Te,s.Te):r instanceof xl&&s instanceof xl}(t.transform,e.transform)}class Lk{constructor(e,n){this.version=e,this.transformResults=n}}class Kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Hc{}function ST(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kT(t.key,Kn.none()):new ua(t.key,t.data,Kn.none());{const n=t.data,r=Gt.empty();let s=new At(Et.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new fs(t.key,r,new on(s.toArray()),Kn.none())}}function Vk(t,e,n){t instanceof ua?function(s,i,o){const a=s.value.clone(),l=fm(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof fs?function(s,i,o){if(!tl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=fm(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(PT(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function oo(t,e,n,r){return t instanceof ua?function(i,o,a,l){if(!tl(i.precondition,o))return a;const c=i.value.clone(),u=dm(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof fs?function(i,o,a,l){if(!tl(i.precondition,o))return a;const c=dm(i.fieldTransforms,l,o),u=o.data;return u.setAll(PT(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return tl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Fk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=AT(r.transform,s||null);i!=null&&(n===null&&(n=Gt.empty()),n.set(r.field,i))}return n||null}function hm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ii(r,s,(i,o)=>Mk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ua extends Hc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class fs extends Hc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function PT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function fm(t,e,n){const r=new Map;Ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,xk(o,a,n[s]))}return r}function dm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Dk(i,o,e))}return r}class kT extends Hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Uk extends Hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Vk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=TT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=ST(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&ii(this.mutations,e.mutations,(n,r)=>hm(n,r))&&ii(this.baseMutations,e.baseMutations,(n,r)=>hm(n,r))}}class Dd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length);let s=function(){return Sk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Dd(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,de;function jk(t){switch(t){default:return re();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function NT(t){if(t===void 0)return Jn("GRPC error has no .code"),S.UNKNOWN;switch(t){case Ke.OK:return S.OK;case Ke.CANCELLED:return S.CANCELLED;case Ke.UNKNOWN:return S.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return S.INTERNAL;case Ke.UNAVAILABLE:return S.UNAVAILABLE;case Ke.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ke.NOT_FOUND:return S.NOT_FOUND;case Ke.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ke.ABORTED:return S.ABORTED;case Ke.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ke.DATA_LOSS:return S.DATA_LOSS;default:return re()}}(de=Ke||(Ke={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=new Ws([4294967295,4294967295],0);function pm(t){const e=Wk().encode(t),n=new GP;return n.update(e),new Uint8Array(n.digest())}function gm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ws([n,r],0),new Ws([s,i],0)]}class xd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Gi(`Invalid padding: ${n}`);if(r<0)throw new Gi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Gi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Gi(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Ws.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(Ws.fromNumber(r)));return s.compare(qk)===1&&(s=new Ws([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=pm(e),[r,s]=gm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new xd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=pm(e),[r,s]=gm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Gi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ha.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new jc(oe.min(),s,new et(ve),Zn(),ue())}}class ha{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ha(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class OT{constructor(e,n){this.targetId=e,this.ye=n}}class DT{constructor(e,n,r=bt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class mm{constructor(){this.we=0,this.Se=ym(),this.be=bt.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=ue(),n=ue(),r=ue();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:re()}}),new ha(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=ym()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class Kk{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Zn(),this.Ue=_m(),this.We=new et(ve)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(Vh(i))if(r===0){const o=new Q(i.path);this.je(n,o,mt.newNoDocument(o,oe.min()))}else Ve(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,c)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ns(r).toUint8Array()}catch(l){if(l instanceof aT)return si("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new xd(o,s,i)}catch(l){return si(l instanceof Gi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Vh(a.target)){const l=new Q(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,mt.newNoDocument(l,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=ue();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.et(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new jc(e,n,this.We,this.$e,r);return this.$e=Zn(),this.Ue=_m(),this.We=new et(ve),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new mm,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new At(ve),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new mm),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function _m(){return new et(Q.comparator)}function ym(){return new et(Q.comparator)}const zk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Gk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Yk=(()=>({and:"AND",or:"OR"}))();class Qk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bh(t,e){return t.useProto3Json||Vc(e)?e:{value:e}}function Ll(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Xk(t,e){return Ll(t,e.toTimestamp())}function Pn(t){return Ve(!!t),oe.fromTimestamp(function(n){const r=Rr(n);return new je(r.seconds,r.nanos)}(t))}function Md(t,e){return function(r){return new Le(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function MT(t){const e=Le.fromString(t);return Ve(UT(e)),e}function $h(t,e){return Md(t.databaseId,e.path)}function Pu(t,e){const n=MT(e);if(n.get(1)!==t.databaseId.projectId)throw new H(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(LT(n))}function Hh(t,e){return Md(t.databaseId,e)}function Jk(t){const e=MT(t);return e.length===4?Le.emptyPath():LT(e)}function jh(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function LT(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function vm(t,e,n){return{name:$h(t,e),fields:n.value.mapValue.fields}}function Zk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Ve(u===void 0||typeof u=="string"),bt.fromBase64String(u||"")):(Ve(u===void 0||u instanceof Uint8Array),bt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?S.UNKNOWN:NT(c.code);return new H(u,c.message||"")}(o);n=new DT(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Pu(t,r.document.name),i=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):oe.min(),a=new Gt({mapValue:{fields:r.document.fields}}),l=mt.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new nl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Pu(t,r.document),i=r.readTime?Pn(r.readTime):oe.min(),o=mt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new nl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Pu(t,r.document),i=r.removedTargetIds||[];n=new nl([],i,s,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Hk(s,i),a=r.targetId;n=new OT(a,o)}}return n}function eN(t,e){let n;if(e instanceof ua)n={update:vm(t,e.key,e.value)};else if(e instanceof kT)n={delete:$h(t,e.key)};else if(e instanceof fs)n={update:vm(t,e.key,e.data),updateMask:cN(e.fieldMask)};else{if(!(e instanceof Uk))return re();n={verify:$h(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof xl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Vo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Fo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ml)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Xk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(t,e.precondition)),n}function tN(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Pn(s.updateTime):Pn(i);return o.isEqual(oe.min())&&(o=Pn(i)),new Lk(o,s.transformResults||[])}(n,e))):[]}function nN(t,e){return{documents:[Hh(t,e.path)]}}function rN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Hh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Hh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return FT(dn.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Ss(h.field),direction:oN(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Bh(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function sN(t){let e=Jk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=VT(h);return f instanceof dn&&hT(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(p){return new ro(Ps(p.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Vc(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Dl(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new Dl(d,f)}(n.endAt)),Ik(e,s,o,i,a,"F",l,c)}function iN(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function VT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ps(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ps(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ps(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ps(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(Ps(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>VT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function oN(t){return zk[t]}function aN(t){return Gk[t]}function lN(t){return Yk[t]}function Ss(t){return{fieldPath:t.canonicalString()}}function Ps(t){return Et.fromServerFormat(t.fieldPath)}function FT(t){return t instanceof Qe?function(n){if(n.op==="=="){if(im(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NAN"}};if(sm(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(im(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NAN"}};if(sm(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ss(n.field),op:aN(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(s=>FT(s));return r.length===1?r[0]:{compositeFilter:{op:lN(n.op),filters:r}}}(t):re()}function cN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function UT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,r,s,i=oe.min(),o=oe.min(),a=bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.ht=e}}function hN(t){const e=sN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Uh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(){this.an=new dN}addToCollectionParentIndex(e,n){return this.an.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(br.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(br.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class dN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new At(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new At(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new li(0)}static Ln(){return new li(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(){this.changes=new Ri(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&oo(r.mutation,s,on.empty(),je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const s=jr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=zi();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Zn();const o=io(),a=function(){return io()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof fs)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),oo(u.mutation,c,u.mutation.getFieldMask(),je.now())):o.set(c.key,on.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new gN(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=io();let s=new et((o,a)=>o-a),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||on.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||ue()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=TT();u.forEach(f=>{if(!i.has(f)){const d=ST(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):N.resolve(jr());let a=-1,l=i;return o.next(c=>N.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?N.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,ue())).next(u=>({batchId:a,changes:ET(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=zi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=zi();return this.indexManager.getCollectionParents(e,i).next(a=>N.forEach(a,l=>{const c=function(h,f){return new ca(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,mt.newInvalidDocument(u)))});let a=zi();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&oo(u.mutation,c,on.empty(),je.now()),Bc(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return N.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Pn(s.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:hN(s.bundledQuery),readTime:Pn(s.readTime)}}(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(){this.overlays=new et(Q.comparator),this.Pr=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jr();return N.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const s=jr(),i=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new et((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=jr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=jr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return N.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $k(n,r));let i=this.Pr.get(n);i===void 0&&(i=ue(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.Ir=new At(nt.dr),this.Tr=new At(nt.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new nt(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new Q(new Le([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new Q(new Le([])),r=new nt(n,e),s=new nt(n,e+1);let i=ue();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new nt(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return Q.comparator(e.key,n.key)||ve(e.yr,n.yr)}static Er(e,n){return ve(e.yr,n.yr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new At(nt.dr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bk(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new nt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new At(ve);return n.forEach(s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new nt(new Q(i),0);let a=new At(ve);return this.Sr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.yr)),!0)},o),N.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return N.forEach(n.mutations,s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new nt(n,0),s=this.Sr.firstAfterOrEqual(r);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e){this.Fr=e,this.docs=function(){return new et(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=Zn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Zn();const o=n.path,a=new Q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||ok(ik(u),r)<=0||(s.has(u.key)||Bc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,n,r,s){re()}Mr(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TN(this)}getSize(e){return N.resolve(this.size)}}class TN extends pN{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e){this.persistence=e,this.Or=new Ri(n=>kd(n),Nd),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Nr=0,this.Br=new Ld,this.targetCount=0,this.Lr=li.Bn()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),N.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new li(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Qn(n),N.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n){this.kr={},this.overlays={},this.qr=new Rd(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new wN(this),this.indexManager=new fN,this.remoteDocumentCache=function(s){return new EN(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new uN(n),this.Ur=new _N(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new vN(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const s=new AN(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(e,n){return N.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class AN extends lk{constructor(e){super(),this.currentSequenceNumber=e}}class Vd{constructor(e){this.persistence=e,this.jr=new Ld,this.Hr=null}static Jr(e){return new Vd(e)}get Yr(){if(this.Hr)return this.Hr;throw re()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),N.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Yr,r=>{const s=Q.fromPath(r);return this.Zr(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return N.or([()=>N.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=s}static $i(e,n){let r=ue(),s=ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Fd(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new bN;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,r,s){return r.documentReadCount<this.Gi?(Li()<=ce.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),N.resolve()):(Li()<=ce.DEBUG&&z("QueryEngine","Query:",Cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(Li()<=ce.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sn(n))):N.resolve())}Hi(e,n){if(cm(n))return N.resolve(null);let r=Sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Uh(n,null,"F"),r=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ue(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Xi(n,a);return this.es(n,c,o,l.readTime)?this.Hi(e,Uh(n,null,"F")):this.ts(e,c,n,l)}))})))}Ji(e,n,r,s){return cm(n)||s.isEqual(oe.min())?N.resolve(null):this.ji.getDocuments(e,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?N.resolve(null):(Li()<=ce.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cs(n)),this.ts(e,o,n,sk(s,-1)).next(a=>a))})}Xi(e,n){let r=new At(yT(e));return n.forEach((s,i)=>{Bc(e,i)&&(r=r.add(i))}),r}es(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(e,n,r){return Li()<=ce.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.ji.getDocumentsMatchingQuery(e,n,br.min(),r)}ts(e,n,r,s){return this.ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e,n,r,s){this.persistence=e,this.ns=n,this.serializer=s,this.rs=new et(ve),this.ss=new Ri(i=>kd(i),Nd),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mN(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function SN(t,e,n,r){return new CN(t,e,n,r)}async function BT(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=ue();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({cs:c,removedBatchIds:o,addedBatchIds:a}))})})}function PN(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let d=N.resolve();return f.forEach(p=>{d=d.next(()=>u.getEntry(l,p)).next(y=>{const T=c.docVersions.get(p);Ve(T!==null),y.version.compareTo(T)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ue();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function $T(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function kN(t,e){const n=ae(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(bt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(y,T,m){return y.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,d,u)&&a.push(n.Kr.updateTargetData(i,d))});let l=Zn(),c=ue();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(NN(i,o,e.documentUpdates).next(u=>{l=u.ls,c=u.hs})),!r.isEqual(oe.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return N.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.rs=s,i))}function NN(t,e,n){let r=ue(),s=ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Zn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ls:o,hs:s}})}function ON(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function DN(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Wh(t,e,n){const r=ae(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!la(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function Em(t,e,n){const r=ae(t);let s=oe.min(),i=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=ae(l),f=h.ss.get(u);return f!==void 0?N.resolve(h.rs.get(f)):h.Kr.getTargetData(c,u)}(r,o,Sn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:ue())).next(a=>(xN(r,bk(e),a),{documents:a,Ps:i})))}function xN(t,e,n){let r=t.os.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.os.set(e,r)}class Tm{constructor(){this.activeTargetIds=Nk()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MN{constructor(){this.ro=new Tm,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new Tm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{so(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ha=null;function ku(){return Ha===null?Ha=function(){return 268435456+Math.round(2147483648*Math.random())}():Ha++,"0x"+Ha.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class UN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=ku(),l=this.Do(n,r);z("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(c,i,o),this.vo(n,l,c,s).then(u=>(z("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw si("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ai}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=VN[n];return`${this.po}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=ku();return new Promise((o,a)=>{const l=new zP;l.setWithCredentials(!0),l.listenOnce(qP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Su.NO_ERROR:const u=l.getResponseJson();z(pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Su.TIMEOUT:z(pt,`RPC '${e}' ${i} timed out`),a(new H(S.DEADLINE_EXCEEDED,"Request time out"));break;case Su.HTTP_ERROR:const h=l.getStatus();if(z(pt,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(T){const m=T.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(m)>=0?m:S.UNKNOWN}(d.status);a(new H(p,d.message))}else a(new H(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new H(S.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{z(pt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);z(pt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Mo(e,n,r){const s=ku(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=jP(),a=WP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");z(pt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const p=new FN({ho:T=>{d?z(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(f||(z(pt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),z(pt,`RPC '${e}' stream ${s} sending:`,T),h.send(T))},Po:()=>h.close()}),y=(T,m,g)=>{T.listen(m,w=>{try{g(w)}catch(E){setTimeout(()=>{throw E},0)}})};return y(h,Ua.EventType.OPEN,()=>{d||z(pt,`RPC '${e}' stream ${s} transport opened.`)}),y(h,Ua.EventType.CLOSE,()=>{d||(d=!0,z(pt,`RPC '${e}' stream ${s} transport closed`),p.mo())}),y(h,Ua.EventType.ERROR,T=>{d||(d=!0,si(pt,`RPC '${e}' stream ${s} transport errored:`,T),p.mo(new H(S.UNAVAILABLE,"The operation could not be completed")))}),y(h,Ua.EventType.MESSAGE,T=>{var m;if(!d){const g=T.data[0];Ve(!!g);const w=g,E=w.error||((m=w[0])===null||m===void 0?void 0:m.error);if(E){z(pt,`RPC '${e}' stream ${s} received error:`,E);const A=E.status;let O=function(q){const j=Ke[q];if(j!==void 0)return NT(j)}(A),x=E.message;O===void 0&&(O=S.INTERNAL,x="Unknown error status: "+A+" with message "+E.message),d=!0,p.mo(new H(O,x)),h.close()}else z(pt,`RPC '${e}' stream ${s} received:`,g),p.fo(g)}}),y(a,KP.STAT_EVENT,T=>{T.stat===Jg.PROXY?z(pt,`RPC '${e}' stream ${s} detected buffering proxy`):T.stat===Jg.NOPROXY&&z(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.Vo()},0),p}}function Nu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t){return new Qk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n,r=1e3,s=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n,r,s,i,o,a,l){this._i=e,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new HT(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Jn(n.toString()),Jn("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{e(()=>{const s=new H(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BN extends jT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=Zk(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?Pn(o.readTime):oe.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=jh(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Vh(l)?{documents:nN(i,l)}:{query:rN(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=xT(i,o.resumeToken);const c=Bh(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=Ll(i,o.snapshotVersion.toTimestamp());const c=Bh(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=iN(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=jh(this.serializer),n.removeTarget=e,this.n_(n)}}class $N extends jT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=tN(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.T_(r,n)}return Ve(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=jh(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>eN(this.serializer,r))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new H(S.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(S.UNKNOWN,s.toString())})}Fo(e,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(S.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class jN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Jn(n),this.p_=!1):z("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{ds(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ae(l);c.F_.add(4),await fa(c),c.O_.set("Unknown"),c.F_.delete(4),await qc(c)}(this))})}),this.O_=new jN(r,s)}}async function qc(t){if(ds(t))for(const e of t.M_)await e(!0)}async function fa(t){for(const e of t.M_)await e(!1)}function WT(t,e){const n=ae(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),$d(n)?Bd(n):Ci(n).Yo()&&Ud(n,e))}function qT(t,e){const n=ae(t),r=Ci(n);n.v_.delete(e),r.Yo()&&KT(n,e),n.v_.size===0&&(r.Yo()?r.e_():ds(n)&&n.O_.set("Unknown"))}function Ud(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ci(t).l_(e)}function KT(t,e){t.N_.Le(e),Ci(t).h_(e)}function Bd(t){t.N_=new Kk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Ci(t).start(),t.O_.y_()}function $d(t){return ds(t)&&!Ci(t).Jo()&&t.v_.size>0}function ds(t){return ae(t).F_.size===0}function zT(t){t.N_=void 0}async function qN(t){t.v_.forEach((e,n)=>{Ud(t,e)})}async function KN(t,e){zT(t),$d(t)?(t.O_.b_(e),Bd(t)):t.O_.set("Unknown")}async function zN(t,e,n){if(t.O_.set("Online"),e instanceof DT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(t,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vl(t,r)}else if(e instanceof nl?t.N_.Ge(e):e instanceof OT?t.N_.Xe(e):t.N_.He(e),!n.isEqual(oe.min()))try{const r=await $T(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.v_.get(c);u&&i.v_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.v_.get(l);if(!u)return;i.v_.set(l,u.withResumeToken(bt.EMPTY_BYTE_STRING,u.snapshotVersion)),KT(i,l);const h=new pr(u.target,l,c,u.sequenceNumber);Ud(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await Vl(t,r)}}async function Vl(t,e,n){if(!la(e))throw e;t.F_.add(1),await fa(t),t.O_.set("Offline"),n||(n=()=>$T(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await qc(t)})}function GT(t,e){return e().catch(n=>Vl(t,n,e))}async function Kc(t){const e=ae(t),n=Cr(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;GN(e);)try{const s=await ON(e.localStore,r);if(s===null){e.C_.length===0&&n.e_();break}r=s.batchId,YN(e,s)}catch(s){await Vl(e,s)}YT(e)&&QT(e)}function GN(t){return ds(t)&&t.C_.length<10}function YN(t,e){t.C_.push(e);const n=Cr(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function YT(t){return ds(t)&&!Cr(t).Jo()&&t.C_.length>0}function QT(t){Cr(t).start()}async function QN(t){Cr(t).A_()}async function XN(t){const e=Cr(t);for(const n of t.C_)e.d_(n.mutations)}async function JN(t,e,n){const r=t.C_.shift(),s=Dd.from(r,e,n);await GT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Kc(t)}async function ZN(t,e){e&&Cr(t).I_&&await async function(r,s){if(function(o){return jk(o)&&o!==S.ABORTED}(s.code)){const i=r.C_.shift();Cr(r).Xo(),await GT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Kc(r)}}(t,e),YT(t)&&QT(t)}async function Im(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=ds(n);n.F_.add(3),await fa(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await qc(n)}async function eO(t,e){const n=ae(t);e?(n.F_.delete(2),await qc(n)):e||(n.F_.add(2),await fa(n),n.O_.set("Unknown"))}function Ci(t){return t.B_||(t.B_=function(n,r,s){const i=ae(n);return i.V_(),new BN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:qN.bind(null,t),Eo:KN.bind(null,t),c_:zN.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),$d(t)?Bd(t):t.O_.set("Unknown")):(await t.B_.stop(),zT(t))})),t.B_}function Cr(t){return t.L_||(t.L_=function(n,r,s){const i=ae(n);return i.V_(),new $N(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:QN.bind(null,t),Eo:ZN.bind(null,t),E_:XN.bind(null,t),T_:JN.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Kc(t)):(await t.L_.stop(),t.C_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Hd(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jd(t,e){if(Jn("AsyncQueue",`${e}: ${t}`),la(t))return new H(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=zi(),this.sortedSet=new et(this.comparator)}static emptySet(e){return new qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.k_=new et(Q.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):re():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ci{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ci(e,n,qs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(){this.Q_=void 0,this.listeners=[]}}class nO{constructor(){this.queries=new Ri(e=>_T(e),Uc),this.onlineState="Unknown",this.K_=new Set}}async function Wd(t,e){const n=ae(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new tO),s)try{i.Q_=await n.onListen(r)}catch(o){const a=jd(o,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&Kd(n)}async function qd(t,e){const n=ae(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function rO(t,e){const n=ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&Kd(n)}function sO(t,e,n){const r=ae(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Kd(t){t.K_.forEach(e=>{e.next()})}class zd{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ci(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=ci.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.key=e}}class JT{constructor(e){this.key=e}}class iO{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=ue(),this.mutatedKeys=ue(),this.ua=yT(e),this.ca=new qs(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Am,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=Bc(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let T=!1;f&&d?f.data.isEqual(d.data)?p!==y&&(r.track({type:3,doc:d}),T=!0):this.Ia(f,d)||(r.track({type:2,doc:d}),T=!0,(l&&this.ua(d,l)>0||c&&this.ua(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),T=!0):f&&!d&&(r.track({type:1,doc:f}),T=!0,(l||c)&&(a=!0)),T&&(d?(o=o.add(d),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((c,u)=>function(f,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return p(f)-p(d)}(c.type,u.type)||this.ua(c.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,i.length!==0||l?{snapshot:new ci(this.query,e.ca,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Am,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=ue(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new JT(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new XT(r))}),n}Ra(e){this.oa=e.Ps,this.aa=ue();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return ci.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class oO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class aO{constructor(e){this.key=e,this.ma=!1}}class lO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Ri(a=>_T(a),Uc),this.pa=new Map,this.ya=new Set,this.wa=new et(Q.comparator),this.Sa=new Map,this.ba=new Ld,this.Da={},this.Ca=new Map,this.va=li.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function cO(t,e){const n=vO(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await DN(n.localStore,Sn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await uO(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&WT(n.remoteStore,o)}return s}async function uO(t,e,n,r,s){t.Ma=(h,f,d)=>async function(y,T,m,g){let w=T.view.ha(m);w.es&&(w=await Em(y.localStore,T.query,!1).then(({documents:O})=>T.view.ha(O,w)));const E=g&&g.targetChanges.get(T.targetId),A=T.view.applyChanges(w,y.isPrimaryClient,E);return Rm(y,T.targetId,A.Ea),A.snapshot}(t,h,f,d);const i=await Em(t.localStore,e,!0),o=new iO(e,i.Ps),a=o.ha(i.documents),l=ha.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Rm(t,n,c.Ea);const u=new oO(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),c.snapshot}async function hO(t,e){const n=ae(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Uc(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Wh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),qT(n.remoteStore,r.targetId),qh(n,r.targetId)}).catch(aa)):(qh(n,r.targetId),await Wh(n.localStore,r.targetId,!0))}async function fO(t,e,n){const r=EO(t);try{const s=await function(o,a){const l=ae(o),c=je.now(),u=a.reduce((d,p)=>d.add(p.key),ue());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Zn(),y=ue();return l._s.getEntries(d,u).next(T=>{p=T,p.forEach((m,g)=>{g.isValidDocument()||(y=y.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,p)).next(T=>{h=T;const m=[];for(const g of a){const w=Fk(g,h.get(g.key).overlayedDocument);w!=null&&m.push(new fs(g.key,w,lT(w.value.mapValue),Kn.exists(!0)))}return l.mutationQueue.addMutationBatch(d,c,m,a)}).next(T=>{f=T;const m=T.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(d,T.batchId,m)})}).then(()=>({batchId:f.batchId,changes:ET(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Da[o.currentUser.toKey()];c||(c=new et(ve)),c=c.insert(a,l),o.Da[o.currentUser.toKey()]=c}(r,s.batchId,n),await da(r,s.changes),await Kc(r.remoteStore)}catch(s){const i=jd(s,"Failed to persist write");n.reject(i)}}async function ZT(t,e){const n=ae(t);try{const r=await kN(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?Ve(o.ma):s.removedDocuments.size>0&&(Ve(o.ma),o.ma=!1))}),await da(n,r,e)}catch(r){await aa(r)}}function bm(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ae(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.U_(a)&&(c=!0)}),c&&Kd(l)}(r.eventManager,e),s.length&&r.fa.c_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dO(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new et(Q.comparator);o=o.insert(i,mt.newNoDocument(i,oe.min()));const a=ue().add(i),l=new jc(oe.min(),new Map,new et(ve),o,a);await ZT(r,l),r.wa=r.wa.remove(i),r.Sa.delete(e),Gd(r)}else await Wh(r.localStore,e,!1).then(()=>qh(r,e,n)).catch(aa)}async function pO(t,e){const n=ae(t),r=e.batch.batchId;try{const s=await PN(n.localStore,e);tw(n,r,null),ew(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await da(n,s)}catch(s){await aa(s)}}async function gO(t,e,n){const r=ae(t);try{const s=await function(o,a){const l=ae(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Ve(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);tw(r,e,n),ew(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await da(r,s)}catch(s){await aa(s)}}function ew(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function tw(t,e,n){const r=ae(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function qh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||nw(t,r)})}function nw(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(qT(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Gd(t))}function Rm(t,e,n){for(const r of n)r instanceof XT?(t.ba.addReference(r.key,e),mO(t,r)):r instanceof JT?(z("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||nw(t,r.key)):re()}function mO(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(z("SyncEngine","New document in limbo: "+n),t.ya.add(r),Gd(t))}function Gd(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new Q(Le.fromString(e)),r=t.va.next();t.Sa.set(r,new aO(n)),t.wa=t.wa.insert(n,r),WT(t.remoteStore,new pr(Sn(Fc(n.path)),r,"TargetPurposeLimboResolution",Rd.ae))}}async function da(t,e,n){const r=ae(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Fd.$i(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.fa.c_(s),await async function(l,c){const u=ae(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>N.forEach(c,f=>N.forEach(f.Qi,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>N.forEach(f.Ki,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!la(h))throw h;z("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=u.rs.get(f),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);u.rs=u.rs.insert(f,y)}}}(r.localStore,i))}async function _O(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await BT(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(l=>{l.reject(new H(S.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await da(n,r.cs)}}function yO(t,e){const n=ae(t),r=n.Sa.get(e);if(r&&r.ma)return ue().add(r.key);{let s=ue();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function vO(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ZT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dO.bind(null,e),e.fa.c_=rO.bind(null,e.eventManager),e.fa.xa=sO.bind(null,e.eventManager),e}function EO(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gO.bind(null,e),e}class Cm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Wc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return SN(this.persistence,new RN,e.initialUser,this.serializer)}createPersistence(e){return new IN(Vd.Jr,this.serializer)}createSharedClientState(e){return new MN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class TO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_O.bind(null,this.syncEngine),await eO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nO}()}createDatastore(e){const n=Wc(e.databaseInfo.databaseId),r=function(i){return new UN(i)}(e.databaseInfo);return function(i,o,a,l){return new HN(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new WN(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>bm(this.syncEngine,n,0),function(){return wm.C()?new wm:new LN}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new lO(s,i,o,a,l,c);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ae(n);z("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await fa(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Jn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=iT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ou(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await BT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AO(t);z("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Im(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Im(e.remoteStore,i)),t._onlineComponents=e}function IO(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function AO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ou(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!IO(n))throw n;si("Error using user provided cache. Falling back to memory cache: "+n),await Ou(t,new Cm)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Ou(t,new Cm);return t._offlineComponents}async function rw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Sm(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Sm(t,new TO))),t._onlineComponents}function bO(t){return rw(t).then(e=>e.syncEngine)}async function Fl(t){const e=await rw(t),n=e.eventManager;return n.onListen=cO.bind(null,e.syncEngine),n.onUnlisten=hO.bind(null,e.syncEngine),n}function RO(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new Yd({next:f=>{o.enqueueAndForget(()=>qd(i,h));const d=f.docs.has(a);!d&&f.fromCache?c.reject(new H(S.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&l&&l.source==="server"?c.reject(new H(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new zd(Fc(a.path),u,{includeMetadataChanges:!0,Z_:!0});return Wd(i,h)}(await Fl(t),t.asyncQueue,e,n,r)),r.promise}function CO(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new Yd({next:f=>{o.enqueueAndForget(()=>qd(i,h)),f.fromCache&&l.source==="server"?c.reject(new H(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new zd(a,u,{includeMetadataChanges:!0,Z_:!0});return Wd(i,h)}(await Fl(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(t,e,n){if(!n)throw new H(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SO(t,e,n,r){if(e===!0&&r===!0)throw new H(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function km(t){if(!Q.isDocumentKey(t))throw new H(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nm(t){if(Q.isDocumentKey(t))throw new H(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function kn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zc(t);throw new H(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Om({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Om(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new YP;switch(r.type){case"firstParty":return new ZP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Pm.get(n);r&&(z("ComponentProvider","Removing Datastore"),Pm.delete(n),r.terminate())}(this),Promise.resolve()}}function PO(t,e,n,r={}){var s;const i=(t=kn(t,Gc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&si("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=gt.MOCK_USER;else{a=IC(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new gt(c)}t._authCredentials=new QP(new sT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ps(this.firestore,e,this._query)}}class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class wr extends ps{constructor(e,n,r){super(e,n,Fc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new Q(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function y2(t,e,...n){if(t=Jt(t),iw("collection","path",e),t instanceof Gc){const r=Le.fromString(e,...n);return Nm(r),new wr(t,null,r)}{if(!(t instanceof Pt||t instanceof wr))throw new H(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Nm(r),new wr(t.firestore,null,r)}}function kO(t,e,...n){if(t=Jt(t),arguments.length===1&&(e=iT.V()),iw("doc","path",e),t instanceof Gc){const r=Le.fromString(e,...n);return km(r),new Pt(t,null,new Q(r))}{if(!(t instanceof Pt||t instanceof wr))throw new H(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return km(r),new Pt(t.firestore,t instanceof wr?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new HT(this,"async_queue_retry"),this.ou=()=>{const n=Nu();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Nu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Nu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new qn;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!la(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Jn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=Hd.createAndSchedule(this,e,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&re()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}function Dm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ui extends Gc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new NO}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ow(this),this._firestoreClient.terminate()}}function OO(t,e){const n=typeof t=="object"?t:Zv(),r=typeof t=="string"?t:e||"(default)",s=NS(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=TC("firestore");i&&PO(s,...i)}return s}function Yc(t){return t._firestoreClient||ow(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ow(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new hk(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,sw(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new wO(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hi(bt.fromBase64String(e))}catch(n){throw new H(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hi(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO=/^__.*__$/;class xO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fs(e,this.data,this.fieldMask,n,this.fieldTransforms):new ua(e,this.data,n,this.fieldTransforms)}}function lw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Xd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Xd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.Vu(e),s}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.du(),s}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Ul(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(lw(this.Tu)&&DO.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class MO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Wc(e)}wu(e,n,r,s=!1){return new Xd({Tu:e,methodName:n,yu:r,path:Et.emptyPath(),Ru:!1,pu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cw(t){const e=t._freezeSettings(),n=Wc(t._databaseId);return new MO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function LO(t,e,n,r,s,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,s);fw("Data must be an object, but it was:",o,r);const a=uw(r,o);let l,c;if(i.merge)l=new on(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=FO(e,h,n);if(!o.contains(f))throw new H(S.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);BO(u,f)||u.push(f)}l=new on(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new xO(new Gt(a),l,c)}function VO(t,e,n,r=!1){return Jd(n,t.wu(r?4:3,e))}function Jd(t,e){if(hw(t=Jt(t)))return fw("Unsupported field value:",e,t),uw(t,e);if(t instanceof aw)return function(r,s){if(!lw(s.Tu))throw s.gu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Jd(a,s.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Jt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ok(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=je.fromDate(r);return{timestampValue:Ll(s.serializer,i)}}if(r instanceof je){const i=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ll(s.serializer,i)}}if(r instanceof pa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hi)return{bytesValue:xT(s.serializer,r._byteString)};if(r instanceof Pt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Md(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.gu(`Unsupported field value: ${zc(r)}`)}(t,e)}function uw(t,e){const n={};return oT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bi(t,(r,s)=>{const i=Jd(s,e.Au(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function hw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof pa||t instanceof hi||t instanceof Pt||t instanceof aw)}function fw(t,e,n){if(!hw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=zc(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function FO(t,e,n){if((e=Jt(e))instanceof Qd)return e._internalPath;if(typeof e=="string")return dw(t,e);throw Ul("Field path arguments must be of type string or ",t,!1,void 0,n)}const UO=new RegExp("[~\\*/\\[\\]]");function dw(t,e,n){if(e.search(UO)>=0)throw Ul(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qd(...e.split("."))._internalPath}catch{throw Ul(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ul(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new H(S.INVALID_ARGUMENT,a+t+l)}function BO(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $O(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $O extends pw{data(){return super.data()}}function Zd(t,e){return typeof e=="string"?dw(t,e):e instanceof Qd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ep{}class HO extends ep{}function v2(t,e,...n){let r=[];e instanceof ep&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof tp).length,a=i.filter(l=>l instanceof Qc).length;if(o>1||o>0&&a>0)throw new H(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Qc extends HO{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Qc(e,n,r)}_apply(e){const n=this._parse(e);return mw(e._query,n),new ps(e.firestore,e.converter,Fh(e._query,n))}_parse(e){const n=cw(e.firestore);return function(i,o,a,l,c,u,h){let f;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new H(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Mm(h,u);const d=[];for(const p of h)d.push(xm(l,i,p));f={arrayValue:{values:d}}}else f=xm(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Mm(h,u),f=VO(a,o,h,u==="in"||u==="not-in");return Qe.create(c,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function E2(t,e,n){const r=e,s=Zd("where",t);return Qc._create(s,r,n)}class tp extends ep{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new tp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)mw(o,l),o=Fh(o,l)}(e._query,n),new ps(e.firestore,e.converter,Fh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function xm(t,e,n){if(typeof(n=Jt(n))=="string"){if(n==="")throw new H(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mT(e)&&n.indexOf("/")!==-1)throw new H(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Le.fromString(n));if(!Q.isDocumentKey(r))throw new H(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rm(t,new Q(r))}if(n instanceof Pt)return rm(t,n._key);throw new H(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zc(n)}.`)}function Mm(t,e){if(!Array.isArray(t)||t.length===0)throw new H(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function mw(t,e){if(e.isInequality()){const r=Od(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new H(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=gT(t);i!==null&&jO(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function jO(t,e,n){if(!n.isEqual(e))throw new H(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class WO{convertValue(e,n="none"){switch(rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return bi(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new pa(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Sd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xo(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Ve(UT(r));const s=new Mo(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||Jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _w extends pw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Zd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class rl extends _w{data(e={}){return super.data(e)}}class yw{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Yi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new rl(this._firestore,this._userDataWriter,r.key,r,new Yi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new rl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Yi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new rl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Yi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:KO(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function KO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(t){t=kn(t,Pt);const e=kn(t.firestore,ui);return RO(Yc(e),t._key).then(n=>Ew(e,t,n))}class np extends WO{constructor(e){super(),this.firestore=e}convertBytes(e){return new hi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function zO(t){t=kn(t,ps);const e=kn(t.firestore,ui),n=Yc(e),r=new np(e);return gw(t._query),CO(n,t._query).then(s=>new yw(e,r,t,s))}function T2(t,e,n){t=kn(t,Pt);const r=kn(t.firestore,ui),s=qO(t.converter,e,n);return GO(r,[LO(cw(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Kn.none())])}function rp(t,...e){var n,r,s;t=Jt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Dm(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Dm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof Pt)c=kn(t.firestore,ui),u=Fc(t._key.path),l={next:h=>{e[o]&&e[o](Ew(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=kn(t,ps);c=kn(h.firestore,ui),u=h._query;const f=new np(c);l={next:d=>{e[o]&&e[o](new yw(c,f,h,d))},error:e[o+1],complete:e[o+2]},gw(t._query)}return function(f,d,p,y){const T=new Yd(y),m=new zd(d,T,p);return f.asyncQueue.enqueueAndForget(async()=>Wd(await Fl(f),m)),()=>{T.La(),f.asyncQueue.enqueueAndForget(async()=>qd(await Fl(f),m))}}(Yc(c),u,a,l)}function GO(t,e){return function(r,s){const i=new qn;return r.asyncQueue.enqueueAndForget(async()=>fO(await bO(r),s,i)),i.promise}(Yc(t),e)}function Ew(t,e,n){const r=n.docs.get(e._key),s=new np(t);return new _w(t,s,e._key,r,new Yi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ai=s})(Ti),Dn(new hn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ui(new XP(r.getProvider("auth-internal")),new tk(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mo(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Bt(Zg,"4.2.0",e),Bt(Zg,"4.2.0","esm2017")})();function YO(t){return Array.isArray(t)?t:[t]}const QO=["title","titleTemplate","script","style","noscript"],sl=["base","meta","link","style","script","noscript"],XO=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],JO=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Tw=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"],ZO=typeof window<"u";function ww(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Lm(t){return t._h||ww(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function Iw(t,e){const{props:n,tag:r}=t;if(JO.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${r}:${i}:${o}`}return!1}function Vm(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function e1(t,e,n){const r={tag:t,props:await Aw(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(t)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(t))};return Tw.forEach(s=>{const i=typeof r.props[s]<"u"?r.props[s]:n[s];typeof i<"u"&&((!["innerHTML","textContent"].includes(s)||QO.includes(r.tag))&&(r[s]=i),delete r.props[s])}),r.props.body&&(r.tagPosition="bodyClose",delete r.props.body),r.props.children&&(r.innerHTML=r.props.children,delete r.props.children),r.tag==="script"&&(typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),r.innerHTML&&["application/ld+json","application/json"].includes(r.props.type)&&(r.innerHTML=r.innerHTML.replace(/</g,"\\u003C"))),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function t1(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function Aw(t,e){for(const n of Object.keys(t)){if(n==="class"){t[n]=t1(t[n]);continue}if(t[n]instanceof Promise&&(t[n]=await t[n]),!e&&!Tw.includes(n)){const r=String(t[n]),s=n.startsWith("data-");r==="true"||r===""?t[n]=s?"true":!0:t[n]||(s&&r==="false"?t[n]="false":delete t[n])}}return t}const n1=10;async function r1(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,r])=>typeof r<"u"&&XO.includes(n)).forEach(([n,r])=>{const s=YO(r);e.push(...s.map(i=>e1(n,i,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,r)=>(n._e=t._i,t.mode&&(n._m=t.mode),n._p=(t._i<<n1)+r,n))}const Fm={base:-10,title:10},Um={critical:-80,high:-10,low:20};function Bl(t){let e=100;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props["http-equiv"]==="content-security-policy"&&(e=-30),t.props.charset&&(e=-20),t.props.name==="viewport"&&(e=-15)):t.tag==="link"&&t.props.rel==="preconnect"?e=20:t.tag in Fm&&(e=Fm[t.tag]),typeof n=="string"&&n in Um?e+Um[n]:e)}const s1=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],cr="%separator";function Mr(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;function r(o){let a;return["s","pageTitle"].includes(o)?a=e.pageTitle:o.includes(".")?a=o.split(".").reduce((l,c)=>l&&l[c]||void 0,e):a=e[o],typeof a<"u"?(a||"").replace(/"/g,'\\"'):!1}let s=t;try{s=decodeURI(t)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=r(o.slice(1));typeof a=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(l,c)=>`${a}${c}`).trim())}),t.includes(cr)&&(t.endsWith(cr)&&(t=t.slice(0,-cr.length).trim()),t.startsWith(cr)&&(t=t.slice(cr.length).trim()),t=t.replace(new RegExp(`\\${cr}\\s*\\${cr}`,"g"),cr),t=Mr(t,{separator:n},n)),t}async function i1(t){const e={tag:t.tagName.toLowerCase(),props:await Aw(t.getAttributeNames().reduce((n,r)=>({...n,[r]:t.getAttribute(r)}),{})),innerHTML:t.innerHTML};return e._d=Iw(e),e}async function bw(t,e={}){var u;const n=e.document||t.resolvedOptions.document;if(!n)return;const r={shouldRender:t.dirty,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const s=(await t.resolveTags()).map(h=>({tag:h,id:sl.includes(h.tag)?Lm(h):h.tag,shouldRender:!0}));let i=t._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const h of["body","head"]){const f=(u=n==null?void 0:n[h])==null?void 0:u.children;for(const d of[...f].filter(p=>sl.includes(p.tagName.toLowerCase())))i.elMap[d.getAttribute("data-hid")||Lm(await i1(d))]=d}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function o(h,f,d){const p=`${h}:${f}`;i.sideEffects[p]=d,delete i.pendingSideEffects[p]}function a({id:h,$el:f,tag:d}){const p=d.tag.endsWith("Attrs");i.elMap[h]=f,p||(["textContent","innerHTML"].forEach(y=>{d[y]&&d[y]!==f[y]&&(f[y]=d[y])}),o(h,"el",()=>{i.elMap[h].remove(),delete i.elMap[h]})),Object.entries(d.props).forEach(([y,T])=>{const m=`attr:${y}`;if(y==="class")for(const g of(T||"").split(" ").filter(Boolean))p&&o(h,`${m}:${g}`,()=>f.classList.remove(g)),!f.classList.contains(g)&&f.classList.add(g);else f.getAttribute(y)!==T&&f.setAttribute(y,T===!0?"":String(T)),p&&o(h,m,()=>f.removeAttribute(y))})}const l=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const h of s){const{tag:f,shouldRender:d,id:p}=h;if(d){if(f.tag==="title"){n.title=f.textContent;continue}h.$el=h.$el||i.elMap[p],h.$el?a(h):sl.includes(f.tag)&&l.push(h)}}for(const h of l){const f=h.tag.tagPosition||"head";h.$el=n.createElement(h.tag.tag),a(h),c[f]=c[f]||n.createDocumentFragment(),c[f].appendChild(h.$el)}for(const h of s)await t.hooks.callHook("dom:renderTag",h,n,o);c.head&&n.head.appendChild(c.head),c.bodyOpen&&n.body.insertBefore(c.bodyOpen,n.body.firstChild),c.bodyClose&&n.body.appendChild(c.bodyClose),Object.values(i.pendingSideEffects).forEach(h=>h()),t._dom=i,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:s})}async function o1(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(r=>n(async()=>{await bw(t,e),delete t._domUpdatePromise,r()}))}function a1(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(i){o1(i,t)}}}}}const l1=["templateParams","htmlAttrs","bodyAttrs"],c1={hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(r=>{t.props[r]&&(t.key=t.props[r],delete t.props[r])});const n=Iw(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&l1.includes(r.tag)&&(a="merge"),a==="merge"){const l=i.props;["class","style"].forEach(c=>{r.props[c]&&l[c]&&(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),r.props[c]=`${l[c]} ${r.props[c]}`)}),e[s].props={...l,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}else if(Bl(r)>Bl(i))return}const o=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(sl.includes(r.tag)&&o===0){delete e[s];return}e[s]=r});const n=[];Object.values(e).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},u1={mode:"server",hooks:{"tags:resolve":function(t){const e={};t.tags.filter(n=>["titleTemplate","templateParams","title"].includes(n.tag)&&n._m==="server").forEach(n=>{e[n.tag]=n.tag.startsWith("title")?n.textContent:n.props}),Object.keys(e).length&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},Bm=["script","link","bodyAttrs"];function $m(t){const e={},n={};return Object.entries(t.props).forEach(([r,s])=>{r.startsWith("on")&&typeof s=="function"?n[r]=s:e[r]=s}),{props:e,eventHandlers:n}}const h1={hooks:{"ssr:render":function(t){t.tags=t.tags.map(e=>(!Bm.includes(e.tag)||!Object.entries(e.props).find(([n,r])=>n.startsWith("on")&&typeof r=="function")||(e.props=$m(e).props),e))},"tags:resolve":function(t){t.tags=t.tags.map(e=>{if(!Bm.includes(e.tag))return e;const{props:n,eventHandlers:r}=$m(e);return Object.keys(r).length&&(e.props=n,e._eventHandlers=r),e})},"dom:renderTag":function(t,e,n){if(!t.tag._eventHandlers)return;const r=t.tag.tag==="bodyAttrs"?e.defaultView:t.$el;Object.entries(t.tag._eventHandlers).forEach(([s,i])=>{const o=`${t.tag._d||t.tag._p}:${s}`,a=s.slice(2).toLowerCase(),l=`data-h-${a}`;if(n(t.id,o,()=>{}),t.$el.hasAttribute(l))return;const c=i;t.$el.setAttribute(l,""),r.addEventListener(a,c),t.entry&&n(t.id,o,()=>{r.removeEventListener(a,c),t.$el.removeAttribute(l)})})}}},f1=["link","style","script","noscript"],d1={hooks:{"tag:normalise":({tag:t})=>{t.key&&f1.includes(t.tag)&&(t.props["data-hid"]=t._h=ww(t.key))}}},p1={hooks:{"tags:resolve":t=>{const e=n=>{var r;return(r=t.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of s1)for(const s of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(s.tagPriority.replace(n,""));typeof i<"u"&&(s._p=i+r)}t.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>Bl(n)-Bl(r))}}},g1={hooks:{"tags:resolve":t=>{var o;const{tags:e}=t,n=(o=e.find(a=>a.tag==="title"))==null?void 0:o.textContent,r=e.findIndex(a=>a.tag==="templateParams"),s=r!==-1?e[r].props:{},i=s.separator||"|";delete s.separator,s.pageTitle=Mr(s.pageTitle||n||"",s,i);for(const a of e)a.processTemplateParams!==!1&&(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string"?a.textContent=Mr(a.textContent,s,i):a.tag==="meta"&&typeof a.props.content=="string"?a.props.content=Mr(a.props.content,s,i):a.tag==="link"&&typeof a.props.href=="string"?a.props.href=Mr(a.props.href,s,i):a.processTemplateParams===!0&&(a.innerHTML?a.innerHTML=Mr(a.innerHTML,s,i):a.textContent&&(a.textContent=Mr(a.textContent,s,i))));t.tags=e.filter(a=>a.tag!=="templateParams")}}},m1={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(s=>s.tag==="titleTemplate");const r=e.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=Vm(e[n].textContent,e[r].textContent);s!==null?e[r].textContent=s||e[r].textContent:delete e[r]}else if(n!==-1){const s=Vm(e[n].textContent);s!==null&&(e[n].textContent=s,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}};let Rw;function _1(t={}){const e=y1(t);return e.use(a1()),Rw=e}function Hm(t,e){return!t||t==="server"&&e||t==="client"&&!e}function y1(t={}){const e=Uv();e.addHooks(t.hooks||{}),t.document=t.document||(ZO?document:void 0);const n=!t.document;t.plugins=[c1,u1,h1,d1,p1,g1,m1,...(t==null?void 0:t.plugins)||[]];const r=()=>{o.dirty=!0,e.callHook("entries:updated",o)};let s=0,i=[];const o={dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(a){const l=typeof a=="function"?a(o):a;Hm(l.mode,n)&&e.addHooks(l.hooks||{})},push(a,l){l==null||delete l.head;const c={_i:s++,input:a,...l};return Hm(c.mode,n)&&(i.push(c),r()),{dispose(){i=i.filter(u=>u._i!==c._i),e.callHook("entries:updated",o),r()},patch(u){i=i.map(h=>(h._i===c._i&&(h.input=c.input=u),h)),r()}}},async resolveTags(){const a={tags:[],entries:[...i]};await e.callHook("entries:resolve",a);for(const l of a.entries){const c=l.resolvedInput||l.input;if(l.resolvedInput=await(l.transform?l.transform(c):c),l.resolvedInput)for(const u of await r1(l)){const h={tag:u,entry:l,resolvedOptions:o.resolvedOptions};await e.callHook("tag:normalise",h),a.tags.push(h.tag)}}return await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),a.tags},ssr:n};return t.plugins.forEach(a=>o.use(a)),o.hooks.callHook("init",o),o}function v1(){return Rw}const E1=Pv.startsWith("3");function T1(t){return typeof t=="function"?t():Ce(t)}function $l(t,e=""){if(t instanceof Promise)return t;const n=T1(t);return!t||!n?n:Array.isArray(n)?n.map(r=>$l(r,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,Ce(s)]:[r,$l(s,r)])):n}const w1={hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=$l(e.input)}}},Cw="usehead";function I1(t){return{install(n){E1&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Cw,t))}}.install}function A1(t={}){t.domDelayFn=t.domDelayFn||(n=>cs(()=>setTimeout(()=>n(),0)));const e=_1(t);return e.use(w1),e.install=I1(e),e}const Kh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zh="__unhead_injection_handler__";function b1(t){Kh[zh]=t}function R1(){if(zh in Kh)return Kh[zh]();const t=ht(Cw);return t||v1()}function C1(t,e={}){const n=e.head||R1();if(n)return n.ssr?n.push(t,e):S1(n,t,e)}function S1(t,e,n={}){const r=Je(!1),s=Je({});VA(()=>{s.value=r.value?{}:$l(e)});const i=t.push(s.value,n);return yr(s,a=>{i.patch(a)}),us()&&(dc(()=>{i.dispose()}),rv(()=>{r.value=!0}),nv(()=>{r.value=!1})),i}function Du(t){return t!==null&&typeof t=="object"}function Gh(t,e,n=".",r){if(!Du(e))return Gh(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Du(o)&&Du(s[i])?s[i]=Gh(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function P1(t){return(...e)=>e.reduce((n,r)=>Gh(n,r,"",t),{})}const k1=P1();function N1(t,e){try{return e in t}catch{return!1}}var O1=Object.defineProperty,D1=(t,e,n)=>e in t?O1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Lr=(t,e,n)=>(D1(t,typeof e!="symbol"?e+"":e,n),n);class Yh extends Error{constructor(e,n={}){super(e,n),Lr(this,"statusCode",500),Lr(this,"fatal",!1),Lr(this,"unhandled",!1),Lr(this,"statusMessage"),Lr(this,"data"),Lr(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Xh(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Sw(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}Lr(Yh,"__h3_error__",!0);function Qh(t){if(typeof t=="string")return new Yh(t);if(x1(t))return t;const e=new Yh(t.message??t.statusMessage??"",{cause:t.cause||t});if(N1(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Xh(t.statusCode,e.statusCode):t.status&&(e.statusCode=Xh(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Sw(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function x1(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const M1=/[^\u0009\u0020-\u007E]/g;function Sw(t=""){return t.replace(M1,"")}function Xh(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const Pw=Symbol("layout-meta"),ga=Symbol("route"),gs=()=>{var t;return(t=Pe())==null?void 0:t.$router},Xc=()=>pv()?ht(ga,Pe()._route):Pe()._route;/*! @__NO_SIDE_EFFECTS__ */const L1=()=>{try{if(Pe()._processingMiddleware)return!0}catch{return!0}return!1},w2=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:xv(t.path||"/",t.query||{})+(t.hash||"");if(e!=null&&e.open){{const{target:a="_blank",windowFeatures:l={}}=e.open,c=Object.entries(l).filter(([u,h])=>h!==void 0).map(([u,h])=>`${u.toLowerCase()}=${h}`).join(", ");open(n,a,c)}return Promise.resolve()}const r=(e==null?void 0:e.external)||Qo(n,{acceptRelative:!0});if(r){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const a=_c(n).protocol;if(a&&AR(a))throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)}const s=L1();if(!r&&s)return t;const i=gs(),o=Pe();return r?(e!=null&&e.replace?location.replace(n):location.href=n,s?o.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?i.replace(t):i.push(t)},Jc=()=>Ff(Pe().payload,"error"),Ds=t=>{const e=ma(t);try{const n=Pe(),r=Jc();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},V1=async(t={})=>{const e=Pe(),n=Jc();e.callHook("app:error:cleared",t),t.redirect&&await gs().replace(t.redirect),n.value=null},F1=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),ma=t=>{const e=Qh(t);return e.__nuxt_error=!0,e},jm=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),I2=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),U1=t=>{const e=Pe();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{jm(t)}):jm(t)},B1=()=>null;function $1(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);let[n,r,s={}]=t;if(typeof n!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof r!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");s.server=s.server??!0,s.default=s.default??B1,s.lazy=s.lazy??!1,s.immediate=s.immediate??!0;const i=Pe(),o=()=>i.isHydrating?i.payload.data[n]:i.static.data[n],a=()=>o()!==void 0;(!i._asyncData[n]||!s.immediate)&&(i._asyncData[n]={data:Je(o()??s.default()),pending:Je(!a()),error:Ff(i.payload._errors,n),status:Je("idle")});const l={...i._asyncData[n]};l.refresh=l.execute=(f={})=>{if(i._asyncDataPromises[n]){if(f.dedupe===!1)return i._asyncDataPromises[n];i._asyncDataPromises[n].cancelled=!0}if((f._initial||i.isHydrating&&f._initial!==!1)&&a())return o();l.pending.value=!0,l.status.value="pending";const d=new Promise((p,y)=>{try{p(r(i))}catch(T){y(T)}}).then(p=>{if(d.cancelled)return i._asyncDataPromises[n];let y=p;s.transform&&(y=s.transform(p)),s.pick&&(y=H1(y,s.pick)),l.data.value=y,l.error.value=null,l.status.value="success"}).catch(p=>{if(d.cancelled)return i._asyncDataPromises[n];l.error.value=p,l.data.value=Ce(s.default()),l.status.value="error"}).finally(()=>{d.cancelled||(l.pending.value=!1,i.payload.data[n]=l.data.value,l.error.value&&(i.payload._errors[n]=ma(l.error.value)),delete i._asyncDataPromises[n])});return i._asyncDataPromises[n]=d,i._asyncDataPromises[n]};const c=()=>l.refresh({_initial:!0}),u=s.server!==!1&&i.payload.serverRendered;{const f=us();if(f&&!f._nuxtOnBeforeMountCbs){f._nuxtOnBeforeMountCbs=[];const p=f._nuxtOnBeforeMountCbs;f&&(iv(()=>{p.forEach(y=>{y()}),p.splice(0,p.length)}),dl(()=>p.splice(0,p.length)))}u&&i.isHydrating&&a()?(l.pending.value=!1,l.status.value=l.error.value?"error":"success"):f&&(i.payload.serverRendered&&i.isHydrating||s.lazy)&&s.immediate?f._nuxtOnBeforeMountCbs.push(c):s.immediate&&c(),s.watch&&yr(s.watch,()=>l.refresh());const d=i.hook("app:data:refresh",p=>{if(!p||p.includes(n))return l.refresh()});f&&dl(d)}const h=Promise.resolve(i._asyncDataPromises[n]).then(()=>l);return Object.assign(h,l),h}function H1(t,e){const n={};for(const r of e)n[r]=t[r];return n}const Wm="__nuxt_component";async function j1(t,e){const n=Pe(),r=Xc(),s=us(),{fetchKey:i,_fetchKeyBase:o}=s.proxy.$options,a=(typeof i=="function"?i(()=>""):i)||[o,r.fullPath,r.matched.findIndex(u=>Object.values(u.components||{}).includes(s.type))].join(":"),{data:l,error:c}=await $1(`options:asyncdata:${a}`,()=>n.runWithContext(()=>e(n)));if(c.value)throw ma(c.value);l.value&&typeof l.value=="object"&&Object.assign(await t,_A(Yn(l.value)))}const W1=function(...e){const[n,r]=e,{setup:s}=n;return!s&&!n.asyncData&&!n.head?{[Wm]:!0,...n}:{[Wm]:!0,_fetchKeyBase:r,...n,setup(i,o){const a=Pe(),l=s?Promise.resolve(a.runWithContext(()=>s(i,o))).then(u=>u||{}):{},c=[];if(n.asyncData&&c.push(j1(l,n.asyncData)),n.head){const u=Pe();C1(typeof n.head=="function"?()=>n.head(u):n.head)}return Promise.resolve(l).then(()=>Promise.all(c)).then(()=>l).finally(()=>{c.length=0})}}},q1="$s";function sp(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,r]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s=q1+n,i=Pe(),o=Ff(i.payload.state,s);if(o.value===void 0&&r){const a=r();if(Xe(a))return i.payload.state[s]=a,a;o.value=a}return o}const K1="modulepreload",z1=function(t,e){return t[0]==="."?new URL(t,e).href:t},qm={},G1=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=z1(i,r),i in qm)return;qm[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":K1,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Uo=(...t)=>G1(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),Y1=-1,Q1=-2,X1=-3,J1=-4,Z1=-5,eD=-6;function tD(t,e){return nD(JSON.parse(t),e)}function nD(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===Y1)return;if(i===X1)return NaN;if(i===J1)return 1/0;if(i===Z1)return-1/0;if(i===eD)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],c=e==null?void 0:e[l];if(c)return r[i]=c(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const u=new Set;r[i]=u;for(let d=1;d<a.length;d+=1)u.add(s(a[d]));break;case"Map":const h=new Map;r[i]=h;for(let d=1;d<a.length;d+=2)h.set(s(a[d]),s(a[d+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const f=Object.create(null);r[i]=f;for(let d=1;d<a.length;d+=2)f[a[d]]=s(a[d+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let c=0;c<a.length;c+=1){const u=a[c];u!==Q1&&(l[c]=s(u))}}else{const l={};r[i]=l;for(const c in a){const u=a[c];l[c]=s(u)}}return r[i]}return s(0)}const rD=!1,Jh=!1,sD=!1,iD="#__nuxt";function Km(t,e={}){const n=oD(t,e),r=Pe(),s=r._payloadCache=r._payloadCache||{};return n in s||(s[n]=aD().then(i=>i?kw(n).then(o=>o||(delete s[n],null)):(s[n]=null,null))),s[n]}const zm="json";function oD(t,e={}){const n=new URL(t,"http://localhost");if(n.search)throw new Error("Payload URL cannot contain search params: "+t);if(n.host!=="localhost"||Qo(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=e.hash||(e.fresh?Date.now():"");return Xo(yc().app.baseURL,n.pathname,r?`_payload.${r}.${zm}`:`_payload.${zm}`)}async function kw(t){const e=fetch(t).then(n=>n.text().then(Nw));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function aD(t=Xc().path){return!!Pe().payload.prerenderedAt}let ja=null;async function lD(){if(ja)return ja;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=Nw(t.textContent||""),n=t.dataset.src?await kw(t.dataset.src):void 0;return ja={...e,...n,...window.__NUXT__},ja}function Nw(t){return tD(t,Pe()._payloadRevivers)}function Zh(t,e){Pe()._payloadRevivers[t]=e}function cD(t={}){const e=t.path||window.location.pathname;let n={};try{n=ml(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Pe().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const uD=uC(()=>{Zh("JSONifiable",t=>{const e=JSON.parse(t);return"seconds"in e&&"nanoseconds"in e?cl(new je(e.seconds,e.nanoseconds)):"latitude"in e&&"longitude"in e?cl(new pa(e.latitude,e.longitude)):e}),Zh("DocumentData",t=>{const e=typeof t=="string"?JSON.parse(t):t,n=e.id;return delete e.id,Object.defineProperty(e,"id",{value:n})})}),Gm={NuxtError:t=>ma(t),EmptyShallowRef:t=>Qs(t==="_"?void 0:t==="0n"?BigInt(0):ml(t)),EmptyRef:t=>Je(t==="_"?void 0:t==="0n"?BigInt(0):ml(t)),ShallowRef:t=>Qs(t),ShallowReactive:t=>zo(t),Ref:t=>Je(t),Reactive:t=>Yn(t)},hD=mn({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const r in Gm)Zh(r,Gm[r]);Object.assign(t.payload,([e,n]=El(()=>t.runWithContext(lD)),e=await e,n(),e)),window.__NUXT__=t.payload}}),fD=[],dD=mn({name:"nuxt:head",enforce:"pre",setup(t){const e=A1({plugins:fD});b1(()=>Pe().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await bw(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ks=typeof window<"u";function pD(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function xu(t,e){const n={};for(const r in e){const s=e[r];n[r]=pn(s)?s.map(t):t(s)}return n}const ao=()=>{},pn=Array.isArray,gD=/\/$/,mD=t=>t.replace(gD,"");function Mu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=ED(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function _D(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ym(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function yD(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fi(e.matched[r],n.matched[s])&&Ow(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ow(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vD(t[n],e[n]))return!1;return!0}function vD(t,e){return pn(t)?Qm(t,e):pn(e)?Qm(e,t):t===e}function Qm(t,e){return pn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ED(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Bo;(function(t){t.pop="pop",t.push="push"})(Bo||(Bo={}));var lo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(lo||(lo={}));function TD(t){if(!t)if(ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mD(t)}const wD=/^[^#]+#/;function ID(t,e){return t.replace(wD,"#")+e}function AD(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Zc=()=>({left:window.pageXOffset,top:window.pageYOffset});function bD(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=AD(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Xm(t,e){return(history.state?history.state.position-e:-1)+t}const ef=new Map;function RD(t,e){ef.set(t,e)}function CD(t){const e=ef.get(t);return ef.delete(t),e}let SD=()=>location.protocol+"//"+location.host;function Dw(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Ym(l,"")}return Ym(n,t)+r+s}function PD(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=Dw(t,location),p=n.value,y=e.value;let T=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}T=y?f.position-y.position:0}else r(d);s.forEach(m=>{m(n.value,p,{delta:T,type:Bo.pop,direction:T?T>0?lo.forward:lo.back:lo.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Ie({},f.state,{scroll:Zc()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Jm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Zc():null}}function kD(t){const{history:e,location:n}=window,r={value:Dw(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:SD()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Ie({},e.state,Jm(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=Ie({},s.value,e.state,{forward:l,scroll:Zc()});i(u.current,u,!0);const h=Ie({},Jm(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function xw(t){t=TD(t);const e=kD(t),n=PD(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ie({location:"",base:t,go:r,createHref:ID.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ND(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),xw(t)}function OD(t){return typeof t=="string"||t&&typeof t=="object"}function Mw(t){return typeof t=="string"||typeof t=="symbol"}const vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Lw=Symbol("");var Zm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Zm||(Zm={}));function di(t,e){return Ie(new Error,{type:t,[Lw]:!0},e)}function Un(t,e){return t instanceof Error&&Lw in t&&(e==null||!!(t.type&e))}const e_="[^/]+?",DD={sensitive:!1,strict:!1,start:!0,end:!0},xD=/[.+*?^${}()[\]/\\]/g;function MD(t,e){const n=Ie({},DD,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(xD,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:y,optional:T,regexp:m}=f;i.push({name:p,repeatable:y,optional:T});const g=m||e_;if(g!==e_){d+=10;try{new RegExp(`(${g})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${p}" (${g}): `+E.message)}}let w=y?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;h||(w=T&&c.length<2?`(?:/${w})`:"/"+w),T&&(w+="?"),s+=w,d+=20,T&&(d+=-8),y&&(d+=-20),g===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=i[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:y,optional:T}=d,m=p in c?c[p]:"";if(pn(m)&&!y)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const g=pn(m)?m.join("/"):m;if(!g)if(T)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=g}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function LD(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function VD(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=LD(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(t_(r))return 1;if(t_(s))return-1}return s.length-r.length}function t_(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const FD={type:0,value:""},UD=/[a-zA-Z0-9_]/;function BD(t){if(!t)return[[]];if(t==="/")return[[FD]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:UD.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function $D(t,e,n){const r=MD(BD(t.path),n),s=Ie(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function HD(t,e){const n=[],r=new Map;e=s_({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const d=!f,p=jD(u);p.aliasOf=f&&f.record;const y=s_(e,u),T=[p];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of w)T.push(Ie({},p,{components:f?f.record.components:p.components,path:E,aliasOf:f?f.record:p}))}let m,g;for(const w of T){const{path:E}=w;if(h&&E[0]!=="/"){const A=h.record.path,O=A[A.length-1]==="/"?"":"/";w.path=h.record.path+(E&&O+E)}if(m=$D(w,h,y),f?f.alias.push(m):(g=g||m,g!==m&&g.alias.push(m),d&&u.name&&!r_(m)&&o(u.name)),p.children){const A=p.children;for(let O=0;O<A.length;O++)i(A[O],m,f&&f.children[O])}f=f||m,(m.record.components&&Object.keys(m.record.components).length||m.record.name||m.record.redirect)&&l(m)}return g?()=>{o(g)}:ao}function o(u){if(Mw(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&VD(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Vw(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!r_(u)&&r.set(u.record.name,u)}function c(u,h){let f,d={},p,y;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw di(1,{location:u});y=f.record.name,d=Ie(n_(h.params,f.keys.filter(g=>!g.optional).map(g=>g.name)),u.params&&n_(u.params,f.keys.map(g=>g.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(g=>g.re.test(p)),f&&(d=f.parse(p),y=f.record.name);else{if(f=h.name?r.get(h.name):n.find(g=>g.re.test(h.path)),!f)throw di(1,{location:u,currentLocation:h});y=f.record.name,d=Ie({},h.params,u.params),p=f.stringify(d)}const T=[];let m=f;for(;m;)T.unshift(m.record),m=m.parent;return{name:y,path:p,params:d,matched:T,meta:qD(T)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function n_(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function jD(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:WD(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function WD(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function r_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qD(t){return t.reduce((e,n)=>Ie(e,n.meta),{})}function s_(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Vw(t,e){return e.children.some(n=>n===t||Vw(t,n))}const Fw=/#/g,KD=/&/g,zD=/\//g,GD=/=/g,YD=/\?/g,Uw=/\+/g,QD=/%5B/g,XD=/%5D/g,Bw=/%5E/g,JD=/%60/g,$w=/%7B/g,ZD=/%7C/g,Hw=/%7D/g,ex=/%20/g;function ip(t){return encodeURI(""+t).replace(ZD,"|").replace(QD,"[").replace(XD,"]")}function tx(t){return ip(t).replace($w,"{").replace(Hw,"}").replace(Bw,"^")}function tf(t){return ip(t).replace(Uw,"%2B").replace(ex,"+").replace(Fw,"%23").replace(KD,"%26").replace(JD,"`").replace($w,"{").replace(Hw,"}").replace(Bw,"^")}function nx(t){return tf(t).replace(GD,"%3D")}function rx(t){return ip(t).replace(Fw,"%23").replace(YD,"%3F")}function sx(t){return t==null?"":rx(t).replace(zD,"%2F")}function Hl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ix(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Uw," "),o=i.indexOf("="),a=Hl(o<0?i:i.slice(0,o)),l=o<0?null:Hl(i.slice(o+1));if(a in e){let c=e[a];pn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function i_(t){let e="";for(let n in t){const r=t[n];if(n=nx(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(pn(r)?r.map(i=>i&&tf(i)):[r&&tf(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ox(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=pn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ax=Symbol(""),o_=Symbol(""),op=Symbol(""),ap=Symbol(""),nf=Symbol("");function Vi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function fr(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(di(4,{from:n,to:e})):h instanceof Error?a(h):OD(h)?a(di(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Lu(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(lx(a)){const c=(a.__vccOpts||a)[e];c&&s.push(fr(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=pD(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&fr(f,n,r,i,o)()}))}}return s}function lx(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function a_(t){const e=ht(op),n=ht(ap),r=Kt(()=>e.resolve(Ce(t.to))),s=Kt(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(fi.bind(null,u));if(f>-1)return f;const d=l_(l[c-2]);return c>1&&l_(u)===d&&h[h.length-1].path!==d?h.findIndex(fi.bind(null,l[c-2])):f}),i=Kt(()=>s.value>-1&&fx(n.params,r.value.params)),o=Kt(()=>s.value>-1&&s.value===n.matched.length-1&&Ow(n.params,r.value.params));function a(l={}){return hx(l)?e[Ce(t.replace)?"replace":"push"](Ce(t.to)).catch(ao):Promise.resolve()}return{route:r,href:Kt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const cx=Ln({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:a_,setup(t,{slots:e}){const n=Yn(a_(t)),{options:r}=ht(op),s=Kt(()=>({[c_(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[c_(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Lt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ux=cx;function hx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function fx(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!pn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function l_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const c_=(t,e,n)=>t??e??n,dx=Ln({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ht(nf),s=Kt(()=>t.route||r.value),i=ht(o_,0),o=Kt(()=>{let c=Ce(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Kt(()=>s.value.matched[o.value]);Yr(o_,Kt(()=>o.value+1)),Yr(ax,a),Yr(nf,s);const l=Je();return yr(()=>[l.value,a.value,t.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!fi(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return u_(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,T=Lt(f,Ie({},p,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return u_(n.default,{Component:T,route:c})||T}}});function u_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jw=dx;function px(t){const e=HD(t.routes,t),n=t.parseQuery||ix,r=t.stringifyQuery||i_,s=t.history,i=Vi(),o=Vi(),a=Vi(),l=Qs(vn);let c=vn;ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=xu.bind(null,C=>""+C),h=xu.bind(null,sx),f=xu.bind(null,Hl);function d(C,W){let V,Y;return Mw(C)?(V=e.getRecordMatcher(C),Y=W):Y=C,e.addRoute(Y,V)}function p(C){const W=e.getRecordMatcher(C);W&&e.removeRoute(W)}function y(){return e.getRoutes().map(C=>C.record)}function T(C){return!!e.getRecordMatcher(C)}function m(C,W){if(W=Ie({},W||l.value),typeof C=="string"){const I=Mu(n,C,W.path),b=e.resolve({path:I.path},W),P=s.createHref(I.fullPath);return Ie(I,b,{params:f(b.params),hash:Hl(I.hash),redirectedFrom:void 0,href:P})}let V;if("path"in C)V=Ie({},C,{path:Mu(n,C.path,W.path).path});else{const I=Ie({},C.params);for(const b in I)I[b]==null&&delete I[b];V=Ie({},C,{params:h(I)}),W.params=h(W.params)}const Y=e.resolve(V,W),Te=C.hash||"";Y.params=u(f(Y.params));const _=_D(r,Ie({},C,{hash:tx(Te),path:Y.path})),v=s.createHref(_);return Ie({fullPath:_,hash:Te,query:r===i_?ox(C.query):C.query||{}},Y,{redirectedFrom:void 0,href:v})}function g(C){return typeof C=="string"?Mu(n,C,l.value.path):Ie({},C)}function w(C,W){if(c!==C)return di(8,{from:W,to:C})}function E(C){return x(C)}function A(C){return E(Ie(g(C),{replace:!0}))}function O(C){const W=C.matched[C.matched.length-1];if(W&&W.redirect){const{redirect:V}=W;let Y=typeof V=="function"?V(C):V;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=g(Y):{path:Y},Y.params={}),Ie({query:C.query,hash:C.hash,params:"path"in Y?{}:C.params},Y)}}function x(C,W){const V=c=m(C),Y=l.value,Te=C.state,_=C.force,v=C.replace===!0,I=O(V);if(I)return x(Ie(g(I),{state:typeof I=="object"?Ie({},Te,I.state):Te,force:_,replace:v}),W||V);const b=V;b.redirectedFrom=W;let P;return!_&&yD(r,Y,V)&&(P=di(16,{to:b,from:Y}),_n(Y,Y,!0,!1)),(P?Promise.resolve(P):j(b,Y)).catch(k=>Un(k)?Un(k,2)?k:sr(k):Ee(k,b,Y)).then(k=>{if(k){if(Un(k,2))return x(Ie({replace:v},g(k.to),{state:typeof k.to=="object"?Ie({},Te,k.to.state):Te,force:_}),W||b)}else k=$(b,Y,!0,v,Te);return te(b,Y,k),k})}function R(C,W){const V=w(C,W);return V?Promise.reject(V):Promise.resolve()}function q(C){const W=Es.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(C):C()}function j(C,W){let V;const[Y,Te,_]=gx(C,W);V=Lu(Y.reverse(),"beforeRouteLeave",C,W);for(const I of Y)I.leaveGuards.forEach(b=>{V.push(fr(b,C,W))});const v=R.bind(null,C,W);return V.push(v),dt(V).then(()=>{V=[];for(const I of i.list())V.push(fr(I,C,W));return V.push(v),dt(V)}).then(()=>{V=Lu(Te,"beforeRouteUpdate",C,W);for(const I of Te)I.updateGuards.forEach(b=>{V.push(fr(b,C,W))});return V.push(v),dt(V)}).then(()=>{V=[];for(const I of _)if(I.beforeEnter)if(pn(I.beforeEnter))for(const b of I.beforeEnter)V.push(fr(b,C,W));else V.push(fr(I.beforeEnter,C,W));return V.push(v),dt(V)}).then(()=>(C.matched.forEach(I=>I.enterCallbacks={}),V=Lu(_,"beforeRouteEnter",C,W),V.push(v),dt(V))).then(()=>{V=[];for(const I of o.list())V.push(fr(I,C,W));return V.push(v),dt(V)}).catch(I=>Un(I,8)?I:Promise.reject(I))}function te(C,W,V){a.list().forEach(Y=>q(()=>Y(C,W,V)))}function $(C,W,V,Y,Te){const _=w(C,W);if(_)return _;const v=W===vn,I=ks?history.state:{};V&&(Y||v?s.replace(C.fullPath,Ie({scroll:v&&I&&I.scroll},Te)):s.push(C.fullPath,Te)),l.value=C,_n(C,W,V,v),sr()}let ee;function K(){ee||(ee=s.listen((C,W,V)=>{if(!ba.listening)return;const Y=m(C),Te=O(Y);if(Te){x(Ie(Te,{replace:!0}),Y).catch(ao);return}c=Y;const _=l.value;ks&&RD(Xm(_.fullPath,V.delta),Zc()),j(Y,_).catch(v=>Un(v,12)?v:Un(v,2)?(x(v.to,Y).then(I=>{Un(I,20)&&!V.delta&&V.type===Bo.pop&&s.go(-1,!1)}).catch(ao),Promise.reject()):(V.delta&&s.go(-V.delta,!1),Ee(v,Y,_))).then(v=>{v=v||$(Y,_,!1),v&&(V.delta&&!Un(v,8)?s.go(-V.delta,!1):V.type===Bo.pop&&Un(v,20)&&s.go(-1,!1)),te(Y,_,v)}).catch(ao)}))}let We=Vi(),fe=Vi(),ye;function Ee(C,W,V){sr(C);const Y=fe.list();return Y.length?Y.forEach(Te=>Te(C,W,V)):console.error(C),Promise.reject(C)}function Fn(){return ye&&l.value!==vn?Promise.resolve():new Promise((C,W)=>{We.add([C,W])})}function sr(C){return ye||(ye=!C,K(),We.list().forEach(([W,V])=>C?V(C):W()),We.reset()),C}function _n(C,W,V,Y){const{scrollBehavior:Te}=t;if(!ks||!Te)return Promise.resolve();const _=!V&&CD(Xm(C.fullPath,0))||(Y||!V)&&history.state&&history.state.scroll||null;return cs().then(()=>Te(C,W,_)).then(v=>v&&bD(v)).catch(v=>Ee(v,C,W))}const kt=C=>s.go(C);let vs;const Es=new Set,ba={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:T,getRoutes:y,resolve:m,options:t,push:E,replace:A,go:kt,back:()=>kt(-1),forward:()=>kt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:fe.add,isReady:Fn,install(C){const W=this;C.component("RouterLink",ux),C.component("RouterView",jw),C.config.globalProperties.$router=W,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>Ce(l)}),ks&&!vs&&l.value===vn&&(vs=!0,E(s.location).catch(Te=>{}));const V={};for(const Te in vn)Object.defineProperty(V,Te,{get:()=>l.value[Te],enumerable:!0});C.provide(op,W),C.provide(ap,zo(V)),C.provide(nf,l);const Y=C.unmount;Es.add(C),C.unmount=function(){Es.delete(C),Es.size<1&&(c=vn,ee&&ee(),ee=null,l.value=vn,vs=!1,ye=!1),Y()}}};function dt(C){return C.reduce((W,V)=>W.then(()=>q(V)),Promise.resolve())}return ba}function gx(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>fi(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>fi(c,l))||s.push(l))}return[n,r,s]}function mx(){return ht(ap)}const h_=[{name:"index",path:"/",meta:{},alias:[],redirect:void 0,component:()=>Uo(()=>import("./index.afa27e9b.js"),["./index.afa27e9b.js","./order.19527cba.js","./index.93f25b46.css"],import.meta.url).then(t=>t.default||t)}],_x={scrollBehavior(t,e,n){var c;const r=Pe(),s=((c=gs().options)==null?void 0:c.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&yx(e,t)&&(i={left:0,top:0}),t.path===e.path){if(e.hash&&!t.hash)return{left:0,top:0};if(t.hash)return{el:t.hash,top:f_(t.hash),behavior:s}}const a=u=>!!(u.meta.pageTransition??Jh),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(u=>{r.hooks.hookOnce(l,async()=>{await cs(),t.hash&&(i={el:t.hash,top:f_(t.hash),behavior:s}),u(i)})})}};function f_(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}function yx(t,e){return e.path!==t.path||JSON.stringify(t.params)!==JSON.stringify(e.params)}const vx={},Nt={...vx,..._x},Ex=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=Pe(),s=gs();if(([e,n]=El(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=ma({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`}),a=s.beforeResolve(c=>{if(a(),c===t){const u=s.afterEach(async()=>{u(),await r.runWithContext(()=>Ds(o)),window.history.pushState({},"",t.fullPath)});return!1}})},Tx=[Ex],co={};function wx(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const c=i.includes(t.slice(o))?t.slice(o).length:1;let u=i.slice(c);return u[0]!=="/"&&(u="/"+u),bg(u,"")}const a=bg(r,t),l=!n||kR(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const Ix=mn({name:"nuxt:router",enforce:"pre",async setup(t){var y,T;let e,n,r=yc().app.baseURL;Nt.hashMode&&!r.includes("#")&&(r+="#");const s=((y=Nt.history)==null?void 0:y.call(Nt,r))??(Nt.hashMode?ND(r):xw(r)),i=((T=Nt.routes)==null?void 0:T.call(Nt,h_))??h_;let o;const a=wx(r,window.location,t.payload.path),l=px({...Nt,scrollBehavior:(m,g,w)=>{var E;if(g===vn){o=w;return}return l.options.scrollBehavior=Nt.scrollBehavior,(E=Nt.scrollBehavior)==null?void 0:E.call(Nt,m,vn,o||w)},history:s,routes:i});t.vueApp.use(l);const c=Qs(l.currentRoute.value);l.afterEach((m,g)=>{c.value=g}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=Qs(l.resolve(a)),h=()=>{u.value=l.currentRoute.value};t.hook("page:finish",h),l.afterEach((m,g)=>{var w,E,A,O;((E=(w=m.matched[0])==null?void 0:w.components)==null?void 0:E.default)===((O=(A=g.matched[0])==null?void 0:A.components)==null?void 0:O.default)&&h()});const f={};for(const m in u.value)Object.defineProperty(f,m,{get:()=>u.value[m]});t._route=zo(f),t._middleware=t._middleware||{global:[],named:{}};const d=Jc();try{[e,n]=El(()=>l.isReady()),await e,n()}catch(m){[e,n]=El(()=>t.runWithContext(()=>Ds(m))),await e,n()}const p=t.payload.state._layout;return l.beforeEach(async(m,g)=>{var w;m.meta=Yn(m.meta),t.isHydrating&&p&&!Zr(m.meta.layout)&&(m.meta.layout=p),t._processingMiddleware=!0;{const E=new Set([...Tx,...t._middleware.global]);for(const A of m.matched){const O=A.meta.middleware;if(O)if(Array.isArray(O))for(const x of O)E.add(x);else E.add(O)}for(const A of E){const O=typeof A=="string"?t._middleware.named[A]||await((w=co[A])==null?void 0:w.call(co).then(R=>R.default||R)):A;if(!O)throw new Error(`Unknown route middleware: '${A}'.`);const x=await t.runWithContext(()=>O(m,g));if(!t.payload.serverRendered&&t.isHydrating&&(x===!1||x instanceof Error)){const R=x||Qh({statusCode:404,statusMessage:`Page Not Found: ${a}`});return await t.runWithContext(()=>Ds(R)),!1}if(x!==!0&&(x||x===!1))return x}}}),l.onError(()=>{delete t._processingMiddleware}),l.afterEach(async(m,g,w)=>{delete t._processingMiddleware,!t.isHydrating&&d.value&&await t.runWithContext(V1),m.matched.length===0&&await t.runWithContext(()=>Ds(Qh({statusCode:404,fatal:!1,statusMessage:`Page not found: ${m.fullPath}`})))}),t.hooks.hookOnce("app:created",async()=>{try{await l.replace({...l.resolve(a),name:void 0,force:!0}),l.options.scrollBehavior=Nt.scrollBehavior}catch(m){await t.runWithContext(()=>Ds(m))}}),{provide:{router:l}}}}),Ax=mn({name:"nuxt:payload",setup(t){gs().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await Km(e.path);r&&Object.assign(t.static.data,r.data)}),U1(()=>{t.hooks.hook("link:prefetch",async e=>{_c(e).protocol||await Km(e)})})}}),bx=nh(()=>Uo(()=>Promise.resolve().then(()=>GU),void 0,import.meta.url).then(t=>t.default)),Rx=[["NuxtScrollbar",bx]],Cx=mn({name:"nuxt:global-components",setup(t){for(const[e,n]of Rx)t.vueApp.component(e,n),t.vueApp.component("Lazy"+e,n)}}),Wr={default:()=>Uo(()=>import("./default.660aca48.js"),["./default.660aca48.js","./order.19527cba.js","./default.7525f2bb.css"],import.meta.url).then(t=>t.default||t)},Sx=mn({name:"nuxt:prefetch",setup(t){const e=gs();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Wr[r]=="function"&&await Wr[r]()})}),t.hooks.hook("link:prefetch",n=>{var o,a,l,c;if(Qo(n))return;const r=e.resolve(n);if(!r)return;const s=(o=r==null?void 0:r.meta)==null?void 0:o.layout;let i=Array.isArray((a=r==null?void 0:r.meta)==null?void 0:a.middleware)?(l=r==null?void 0:r.meta)==null?void 0:l.middleware:[(c=r==null?void 0:r.meta)==null?void 0:c.middleware];i=i.filter(u=>typeof u=="string");for(const u of i)typeof co[u]=="function"&&co[u]();s&&typeof Wr[s]=="function"&&Wr[s]()})}});/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function bn(t){return getComputedStyle(t)}function xt(t,e){for(var n in e){var r=e[n];typeof r=="number"&&(r=r+"px"),t.style[n]=r}return t}function Wa(t){var e=document.createElement("div");return e.className=t,e}var d_=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function gr(t,e){if(!d_)throw new Error("No element matching method supported");return d_.call(t,e)}function xs(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function p_(t,e){return Array.prototype.filter.call(t.children,function(n){return gr(n,e)})}var Ge={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},Ww={x:null,y:null};function qw(t,e){var n=t.element.classList,r=Ge.state.scrolling(e);n.contains(r)?clearTimeout(Ww[e]):n.add(r)}function Kw(t,e){Ww[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(Ge.state.scrolling(e))},t.settings.scrollingThreshold)}function Px(t,e){qw(t,e),Kw(t,e)}var _a=function(e){this.element=e,this.handlers={}},zw={isEmpty:{configurable:!0}};_a.prototype.bind=function(e,n){typeof this.handlers[e]>"u"&&(this.handlers[e]=[]),this.handlers[e].push(n),this.element.addEventListener(e,n,!1)};_a.prototype.unbind=function(e,n){var r=this;this.handlers[e]=this.handlers[e].filter(function(s){return n&&s!==n?!0:(r.element.removeEventListener(e,s,!1),!1)})};_a.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e)};zw.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return t.handlers[e].length===0})};Object.defineProperties(_a.prototype,zw);var Si=function(){this.eventElements=[]};Si.prototype.eventElement=function(e){var n=this.eventElements.filter(function(r){return r.element===e})[0];return n||(n=new _a(e),this.eventElements.push(n)),n};Si.prototype.bind=function(e,n,r){this.eventElement(e).bind(n,r)};Si.prototype.unbind=function(e,n,r){var s=this.eventElement(e);s.unbind(n,r),s.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(s),1)};Si.prototype.unbindAll=function(){this.eventElements.forEach(function(e){return e.unbindAll()}),this.eventElements=[]};Si.prototype.once=function(e,n,r){var s=this.eventElement(e),i=function(o){s.unbind(n,i),r(o)};s.bind(n,i)};function qa(t){if(typeof window.CustomEvent=="function")return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function jl(t,e,n,r,s){r===void 0&&(r=!0),s===void 0&&(s=!1);var i;if(e==="top")i=["contentHeight","containerHeight","scrollTop","y","up","down"];else if(e==="left")i=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");kx(t,n,i,r,s)}function kx(t,e,n,r,s){var i=n[0],o=n[1],a=n[2],l=n[3],c=n[4],u=n[5];r===void 0&&(r=!0),s===void 0&&(s=!1);var h=t.element;t.reach[l]=null,h[a]<1&&(t.reach[l]="start"),h[a]>t[i]-t[o]-1&&(t.reach[l]="end"),e&&(h.dispatchEvent(qa("ps-scroll-"+l)),e<0?h.dispatchEvent(qa("ps-scroll-"+c)):e>0&&h.dispatchEvent(qa("ps-scroll-"+u)),r&&Px(t,l)),t.reach[l]&&(e||s)&&h.dispatchEvent(qa("ps-"+l+"-reach-"+t.reach[l]))}function Be(t){return parseInt(t,10)||0}function Nx(t){return gr(t,"input,[contenteditable]")||gr(t,"select,[contenteditable]")||gr(t,"textarea,[contenteditable]")||gr(t,"button,[contenteditable]")}function Ox(t){var e=bn(t);return Be(e.width)+Be(e.paddingLeft)+Be(e.paddingRight)+Be(e.borderLeftWidth)+Be(e.borderRightWidth)}var Ns={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function er(t){var e=t.element,n=Math.floor(e.scrollTop),r=e.getBoundingClientRect();t.containerWidth=Math.round(r.width),t.containerHeight=Math.round(r.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(p_(e,Ge.element.rail("x")).forEach(function(s){return xs(s)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(p_(e,Ge.element.rail("y")).forEach(function(s){return xs(s)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=g_(t,Be(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=Be((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=g_(t,Be(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=Be(n*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),Dx(e,t),t.scrollbarXActive?e.classList.add(Ge.state.active("x")):(e.classList.remove(Ge.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=t.isRtl===!0?t.contentWidth:0),t.scrollbarYActive?e.classList.add(Ge.state.active("y")):(e.classList.remove(Ge.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function g_(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function Dx(t,e){var n={width:e.railXWidth},r=Math.floor(t.scrollTop);e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-r:n.top=e.scrollbarXTop+r,xt(e.scrollbarXRail,n);var s={top:r,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?s.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:s.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?s.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth*2-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:s.left=e.scrollbarYLeft+t.scrollLeft,xt(e.scrollbarYRail,s),xt(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),xt(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function xx(t){t.element,t.event.bind(t.scrollbarY,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var n=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,r=n>t.scrollbarYTop?1:-1;t.element.scrollTop+=r*t.containerHeight,er(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var n=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,r=n>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=r*t.containerWidth,er(t),e.stopPropagation()})}function Mx(t){m_(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),m_(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function m_(t,e){var n=e[0],r=e[1],s=e[2],i=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=t.element,f=null,d=null,p=null;function y(g){g.touches&&g.touches[0]&&(g[s]=g.touches[0].pageY),h[l]=f+p*(g[s]-d),qw(t,c),er(t),g.stopPropagation(),g.type.startsWith("touch")&&g.changedTouches.length>1&&g.preventDefault()}function T(){Kw(t,c),t[u].classList.remove(Ge.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",y)}function m(g,w){f=h[l],w&&g.touches&&(g[s]=g.touches[0].pageY),d=g[s],p=(t[r]-t[n])/(t[i]-t[a]),w?t.event.bind(t.ownerDocument,"touchmove",y):(t.event.bind(t.ownerDocument,"mousemove",y),t.event.once(t.ownerDocument,"mouseup",T),g.preventDefault()),t[u].classList.add(Ge.state.clicking),g.stopPropagation()}t.event.bind(t[o],"mousedown",function(g){m(g)}),t.event.bind(t[o],"touchstart",function(g){m(g,!0)})}function Lx(t){var e=t.element,n=function(){return gr(e,":hover")},r=function(){return gr(t.scrollbarX,":focus")||gr(t.scrollbarY,":focus")};function s(i,o){var a=Math.floor(e.scrollTop);if(i===0){if(!t.scrollbarYActive)return!1;if(a===0&&o>0||a>=t.contentHeight-t.containerHeight&&o<0)return!t.settings.wheelPropagation}var l=e.scrollLeft;if(o===0){if(!t.scrollbarXActive)return!1;if(l===0&&i<0||l>=t.contentWidth-t.containerWidth&&i>0)return!t.settings.wheelPropagation}return!0}t.event.bind(t.ownerDocument,"keydown",function(i){if(!(i.isDefaultPrevented&&i.isDefaultPrevented()||i.defaultPrevented)&&!(!n()&&!r())){var o=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(o){if(o.tagName==="IFRAME")o=o.contentDocument.activeElement;else for(;o.shadowRoot;)o=o.shadowRoot.activeElement;if(Nx(o))return}var a=0,l=0;switch(i.which){case 37:i.metaKey?a=-t.contentWidth:i.altKey?a=-t.containerWidth:a=-30;break;case 38:i.metaKey?l=t.contentHeight:i.altKey?l=t.containerHeight:l=30;break;case 39:i.metaKey?a=t.contentWidth:i.altKey?a=t.containerWidth:a=30;break;case 40:i.metaKey?l=-t.contentHeight:i.altKey?l=-t.containerHeight:l=-30;break;case 32:i.shiftKey?l=t.containerHeight:l=-t.containerHeight;break;case 33:l=t.containerHeight;break;case 34:l=-t.containerHeight;break;case 36:l=t.contentHeight;break;case 35:l=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&a!==0||t.settings.suppressScrollY&&l!==0||(e.scrollTop-=l,e.scrollLeft+=a,er(t),s(a,l)&&i.preventDefault())}})}function Vx(t){var e=t.element;function n(o,a){var l=Math.floor(e.scrollTop),c=e.scrollTop===0,u=l+e.offsetHeight===e.scrollHeight,h=e.scrollLeft===0,f=e.scrollLeft+e.offsetWidth===e.scrollWidth,d;return Math.abs(a)>Math.abs(o)?d=c||u:d=h||f,d?!t.settings.wheelPropagation:!0}function r(o){var a=o.deltaX,l=-1*o.deltaY;return(typeof a>"u"||typeof l>"u")&&(a=-1*o.wheelDeltaX/6,l=o.wheelDeltaY/6),o.deltaMode&&o.deltaMode===1&&(a*=10,l*=10),a!==a&&l!==l&&(a=0,l=o.wheelDelta),o.shiftKey?[-l,-a]:[a,l]}function s(o,a,l){if(!Ns.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(o))return!1;for(var c=o;c&&c!==e;){if(c.classList.contains(Ge.element.consuming))return!0;var u=bn(c);if(l&&u.overflowY.match(/(scroll|auto)/)){var h=c.scrollHeight-c.clientHeight;if(h>0&&(c.scrollTop>0&&l<0||c.scrollTop<h&&l>0))return!0}if(a&&u.overflowX.match(/(scroll|auto)/)){var f=c.scrollWidth-c.clientWidth;if(f>0&&(c.scrollLeft>0&&a<0||c.scrollLeft<f&&a>0))return!0}c=c.parentNode}return!1}function i(o){var a=r(o),l=a[0],c=a[1];if(!s(o.target,l,c)){var u=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(c?e.scrollTop-=c*t.settings.wheelSpeed:e.scrollTop+=l*t.settings.wheelSpeed,u=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(l?e.scrollLeft+=l*t.settings.wheelSpeed:e.scrollLeft-=c*t.settings.wheelSpeed,u=!0):(e.scrollTop-=c*t.settings.wheelSpeed,e.scrollLeft+=l*t.settings.wheelSpeed),er(t),u=u||n(l,c),u&&!o.ctrlKey&&(o.stopPropagation(),o.preventDefault())}}typeof window.onwheel<"u"?t.event.bind(e,"wheel",i):typeof window.onmousewheel<"u"&&t.event.bind(e,"mousewheel",i)}function Fx(t){if(!Ns.supportsTouch&&!Ns.supportsIePointer)return;var e=t.element;function n(p,y){var T=Math.floor(e.scrollTop),m=e.scrollLeft,g=Math.abs(p),w=Math.abs(y);if(w>g){if(y<0&&T===t.contentHeight-t.containerHeight||y>0&&T===0)return window.scrollY===0&&y>0&&Ns.isChrome}else if(g>w&&(p<0&&m===t.contentWidth-t.containerWidth||p>0&&m===0))return!0;return!0}function r(p,y){e.scrollTop-=y,e.scrollLeft-=p,er(t)}var s={},i=0,o={},a=null;function l(p){return p.targetTouches?p.targetTouches[0]:p}function c(p){return p.pointerType&&p.pointerType==="pen"&&p.buttons===0?!1:!!(p.targetTouches&&p.targetTouches.length===1||p.pointerType&&p.pointerType!=="mouse"&&p.pointerType!==p.MSPOINTER_TYPE_MOUSE)}function u(p){if(c(p)){var y=l(p);s.pageX=y.pageX,s.pageY=y.pageY,i=new Date().getTime(),a!==null&&clearInterval(a)}}function h(p,y,T){if(!e.contains(p))return!1;for(var m=p;m&&m!==e;){if(m.classList.contains(Ge.element.consuming))return!0;var g=bn(m);if(T&&g.overflowY.match(/(scroll|auto)/)){var w=m.scrollHeight-m.clientHeight;if(w>0&&(m.scrollTop>0&&T<0||m.scrollTop<w&&T>0))return!0}if(y&&g.overflowX.match(/(scroll|auto)/)){var E=m.scrollWidth-m.clientWidth;if(E>0&&(m.scrollLeft>0&&y<0||m.scrollLeft<E&&y>0))return!0}m=m.parentNode}return!1}function f(p){if(c(p)){var y=l(p),T={pageX:y.pageX,pageY:y.pageY},m=T.pageX-s.pageX,g=T.pageY-s.pageY;if(h(p.target,m,g))return;r(m,g),s=T;var w=new Date().getTime(),E=w-i;E>0&&(o.x=m/E,o.y=g/E,i=w),n(m,g)&&p.preventDefault()}}function d(){t.settings.swipeEasing&&(clearInterval(a),a=setInterval(function(){if(t.isInitialized){clearInterval(a);return}if(!o.x&&!o.y){clearInterval(a);return}if(Math.abs(o.x)<.01&&Math.abs(o.y)<.01){clearInterval(a);return}if(!t.element){clearInterval(a);return}r(o.x*30,o.y*30),o.x*=.8,o.y*=.8},10))}Ns.supportsTouch?(t.event.bind(e,"touchstart",u),t.event.bind(e,"touchmove",f),t.event.bind(e,"touchend",d)):Ns.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",u),t.event.bind(e,"pointermove",f),t.event.bind(e,"pointerup",d)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",u),t.event.bind(e,"MSPointerMove",f),t.event.bind(e,"MSPointerUp",d)))}var Ux=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},Bx={"click-rail":xx,"drag-thumb":Mx,keyboard:Lx,wheel:Vx,touch:Fx},ya=function(e,n){var r=this;if(n===void 0&&(n={}),typeof e=="string"&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=e,e.classList.add(Ge.main),this.settings=Ux();for(var s in n)this.settings[s]=n[s];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var i=function(){return e.classList.add(Ge.state.focus)},o=function(){return e.classList.remove(Ge.state.focus)};this.isRtl=bn(e).direction==="rtl",this.isRtl===!0&&e.classList.add(Ge.rtl),this.isNegativeScroll=function(){var c=e.scrollLeft,u=null;return e.scrollLeft=-1,u=e.scrollLeft<0,e.scrollLeft=c,u}(),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new Si,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=Wa(Ge.element.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=Wa(Ge.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",i),this.event.bind(this.scrollbarX,"blur",o),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var a=bn(this.scrollbarXRail);this.scrollbarXBottom=parseInt(a.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=Be(a.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=Be(a.borderLeftWidth)+Be(a.borderRightWidth),xt(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=Be(a.marginLeft)+Be(a.marginRight),xt(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=Wa(Ge.element.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=Wa(Ge.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",i),this.event.bind(this.scrollbarY,"blur",o),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var l=bn(this.scrollbarYRail);this.scrollbarYRight=parseInt(l.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=Be(l.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?Ox(this.scrollbarY):null,this.railBorderYWidth=Be(l.borderTopWidth)+Be(l.borderBottomWidth),xt(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=Be(l.marginTop)+Be(l.marginBottom),xt(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(c){return Bx[c](r)}),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",function(c){return r.onScroll(c)}),er(this)};ya.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,xt(this.scrollbarXRail,{display:"block"}),xt(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=Be(bn(this.scrollbarXRail).marginLeft)+Be(bn(this.scrollbarXRail).marginRight),this.railYMarginHeight=Be(bn(this.scrollbarYRail).marginTop)+Be(bn(this.scrollbarYRail).marginBottom),xt(this.scrollbarXRail,{display:"none"}),xt(this.scrollbarYRail,{display:"none"}),er(this),jl(this,"top",0,!1,!0),jl(this,"left",0,!1,!0),xt(this.scrollbarXRail,{display:""}),xt(this.scrollbarYRail,{display:""}))};ya.prototype.onScroll=function(e){this.isAlive&&(er(this),jl(this,"top",this.element.scrollTop-this.lastScrollTop),jl(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)};ya.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),xs(this.scrollbarX),xs(this.scrollbarY),xs(this.scrollbarXRail),xs(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)};ya.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(e){return!e.match(/^ps([-_].+|)$/)}).join(" ")};const __=["scroll","ps-scroll-y","ps-scroll-x","ps-scroll-up","ps-scroll-down","ps-scroll-left","ps-scroll-right","ps-y-reach-start","ps-y-reach-end","ps-x-reach-start","ps-x-reach-end"];var As={name:"PerfectScrollbar",props:{options:{type:Object,required:!1,default:()=>{}},tag:{type:String,required:!1,default:"div"},watchOptions:{type:Boolean,required:!1,default:!1}},emits:__,data(){return{ps:null}},watch:{watchOptions(t){!t&&this.watcher?this.watcher():this.createWatcher()}},mounted(){this.create(),this.watchOptions&&this.createWatcher()},updated(){this.$nextTick(()=>{this.update()})},beforeUnmount(){this.destroy()},methods:{create(){this.ps&&this.$isServer||(this.ps=new ya(this.$el,this.options),__.forEach(t=>{this.ps.element.addEventListener(t,e=>this.$emit(t,e))}))},createWatcher(){this.watcher=this.$watch("options",()=>{this.destroy(),this.create()},{deep:!0})},update(){this.ps&&this.ps.update()},destroy(){this.ps&&(this.ps.destroy(),this.ps=null)}},render(){return Lt(this.tag,{class:"ps"},this.$slots.default&&this.$slots.default())}},$x={install:(t,e)=>{e&&(e.name&&typeof e.name=="string"&&(As.name=e.name),e.options&&typeof e.options=="object"&&(As.props.options.default=()=>e.options),e.tag&&typeof e.tag=="string"&&(As.props.tag.default=e.tag),e.watchOptions&&typeof e.watchOptions=="boolean"&&(As.props.watchOptions=e.watchOptions)),t.component(As.name,As)}};const Hx=mn(t=>{t.vueApp.use($x)});var jx="firebase",Wx="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt(jx,Wx,"app");const qx=mn(()=>({provide:{firebaseApp:Jv(yc().public.vuefire.config)}}));function Gw(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Yw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kx=Yw,Qw=new Ei("auth","Firebase",Yw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=new Jo("@firebase/auth");function zx(t,...e){Wl.logLevel<=ce.WARN&&Wl.warn(`Auth (${Ti}): ${t}`,...e)}function il(t,...e){Wl.logLevel<=ce.ERROR&&Wl.error(`Auth (${Ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t,...e){throw lp(t,...e)}function Xw(t,...e){return lp(t,...e)}function Gx(t,e,n){const r=Object.assign(Object.assign({},Kx()),{[e]:n});return new Ei("auth","Firebase",r).create(e,{appName:t.name})}function lp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qw.create(t,...e)}function Ae(t,e,...n){if(!t)throw lp(e,...n)}function uo(t){const e="INTERNAL ASSERTION FAILED: "+t;throw il(e),new Error(e)}function ql(t,e){t||uo(e)}function Yx(){return v_()==="http:"||v_()==="https:"}function v_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yx()||AC()||"connection"in navigator)?navigator.onLine:!0}function Xx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n){this.shortDelay=e,this.longDelay=n,ql(n>e,"Short delay should be less than long delay!"),this.isMobile=ed()||Kv()}get(){return Qx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(t,e){ql(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;uo("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;uo("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;uo("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM=new va(3e4,6e4);function tM(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cp(t,e,n,r,s={}){return Zw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=td(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Jw.fetch()(eI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Zw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Zx),e);try{const s=new nM(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ka(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ka(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ka(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ka(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Gx(t,u,c);y_(t,u)}}catch(s){if(s instanceof nr)throw s;y_(t,"network-request-failed",{message:String(s)})}}function eI(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Jx(t.config,s):`${t.config.apiScheme}://${s}`}class nM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xw(this.auth,"network-request-failed")),eM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ka(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Xw(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rM(t,e){return cp(t,"POST","/v1/accounts:delete",e)}async function sM(t,e){return cp(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iM(t,e=!1){const n=Jt(t),r=await n.getIdToken(e),s=tI(r);Ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ho(Vu(s.auth_time)),issuedAtTime:ho(Vu(s.iat)),expirationTime:ho(Vu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vu(t){return Number(t)*1e3}function tI(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return il("JWT malformed, contained fewer than 3 sections"),null;try{const s=wl(n);return s?JSON.parse(s):(il("Failed to decode base64 JWT payload"),null)}catch(s){return il("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function oM(t){const e=tI(t);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rf(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nr&&aM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function aM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ho(this.lastLoginAt),this.creationTime=ho(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await rf(t,sM(n,{idToken:r}));Ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hM(i.providerUserInfo):[],a=uM(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new nI(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function cM(t){const e=Jt(t);await Kl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uM(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function hM(t){return t.map(e=>{var{providerId:n}=e,r=Gw(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fM(t,e){const n=await Zw(t,{},async()=>{const r=td({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=eI(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oM(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Ae(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fM(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $o;return r&&(Ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $o,this.toJSON())}_performRefresh(){return uo("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,e){Ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ks{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Gw(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nI(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await rf(this,this.stsTokenManager.getToken(this.auth,e));return Ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iM(this,e)}reload(){return cM(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ks(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await rf(this,rM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:E,isAnonymous:A,providerData:O,stsTokenManager:x}=n;Ae(w&&x,e,"internal-error");const R=$o.fromJSON(this.name,x);Ae(typeof w=="string",e,"internal-error"),ur(h,e.name),ur(f,e.name),Ae(typeof E=="boolean",e,"internal-error"),Ae(typeof A=="boolean",e,"internal-error"),ur(d,e.name),ur(p,e.name),ur(y,e.name),ur(T,e.name),ur(m,e.name),ur(g,e.name);const q=new Ks({uid:w,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:A,photoURL:p,phoneNumber:d,tenantId:y,stsTokenManager:R,createdAt:m,lastLoginAt:g});return O&&Array.isArray(O)&&(q.providerData=O.map(j=>Object.assign({},j))),T&&(q._redirectEventId=T),q}static async _fromIdTokenResponse(e,n,r=!1){const s=new $o;s.updateFromServerResponse(n);const i=new Ks({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Kl(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=new Map;function qr(t){ql(t instanceof Function,"Expected a class definition");let e=E_.get(t);return e?(ql(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,E_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rI.type="NONE";const T_=rI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t,e,n){return`firebase:${t}:${e}:${n}`}class zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fu(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ks._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zs(qr(T_),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||qr(T_);const o=Fu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Ks._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new zs(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new zs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mM(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dM(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yM(e))return"Blackberry";if(vM(e))return"Webos";if(pM(e))return"Safari";if((e.includes("chrome/")||gM(e))&&!e.includes("edge/"))return"Chrome";if(_M(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function dM(t=On()){return/firefox\//i.test(t)}function pM(t=On()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gM(t=On()){return/crios\//i.test(t)}function mM(t=On()){return/iemobile/i.test(t)}function _M(t=On()){return/android/i.test(t)}function yM(t=On()){return/blackberry/i.test(t)}function vM(t=On()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t,e=[]){let n;switch(t){case"Browser":n=w_(On());break;case"Worker":n=`${w_(On())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ti}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TM(t,e={}){return cp(t,"GET","/v2/passwordPolicy",tM(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM=6;class IM{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new I_(this),this.idTokenSubscription=new I_(this),this.beforeStateQueue=new EM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Jt(e):null;return n&&Ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TM(this),n=new IM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qr(e)||this._popupRedirectResolver;Ae(n,this,"argument-error"),this.redirectPersistenceManager=await zs.create(this,[qr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bM(t){return Jt(t)}class I_{constructor(e){this.auth=e,this.observer=null,this.addObserver=OC(n=>this.observer=n)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function RM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}new va(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new va(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new va(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new va(5e3,15e3);var A_="@firebase/auth",b_="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function PM(t){Dn(new hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sI(t)},c=new AM(r,s,i,l);return RM(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dn(new hn("auth-internal",e=>{const n=bM(e.getProvider("auth").getImmediate());return(r=>new CM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(A_,b_,SM(t)),Bt(A_,b_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kM=5*60;wC("authIdTokenMaxAge");PM("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NM=new Map,OM={activated:!1,tokenObservers:[]};function gn(t){return NM.get(t)||Object.assign({},OM)}const R_={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new wo,await xM(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new wo,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function xM(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},zl=new Ei("appCheck","AppCheck",MM);function iI(t){if(!gn(t).activated)throw zl.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM="firebase-app-check-database",VM=1,sf="firebase-app-check-store";let za=null;function FM(){return za||(za=new Promise((t,e)=>{try{const n=indexedDB.open(LM,VM);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(zl.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(sf,{keyPath:"compositeKey"})}}}catch(n){e(zl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),za)}function UM(t,e){return BM($M(t),e)}async function BM(t,e){const r=(await FM()).transaction(sf,"readwrite"),i=r.objectStore(sf).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var c;a(zl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function $M(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=new Jo("@firebase/app-check");function C_(t,e){return Gv()?UM(t,e).catch(n=>{of.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HM={error:"UNKNOWN_ERROR"};function jM(t){return vc.encodeString(JSON.stringify(t),!1)}async function af(t,e=!1){const n=t.app;iI(n);const r=gn(n);let s=r.token,i;if(s&&!Qi(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(Qi(l)?s=l:await C_(n,void 0))}if(!e&&s&&Qi(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await gn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?of.warn(l.message):of.error(l),i=l}let a;return s?i?Qi(s)?a={token:s.token,internalError:i}:a=P_(i):(a={token:s.token},r.token=s,await C_(n,s)):a=P_(i),o&&zM(n,a),a}async function WM(t){const e=t.app;iI(e);const{provider:n}=gn(e);{const{token:r}=await n.getToken();return{token:r}}}function qM(t,e,n,r){const{app:s}=t,i=gn(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Qi(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),S_(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>S_(t))}function oI(t,e){const n=gn(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function S_(t){const{app:e}=t,n=gn(e);let r=n.tokenRefresher;r||(r=KM(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function KM(t){const{app:e}=t;return new DM(async()=>{const n=gn(e);let r;if(n.token?r=await af(t,!0):r=await af(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=gn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},R_.RETRIAL_MIN_WAIT,R_.RETRIAL_MAX_WAIT)}function zM(t,e){const n=gn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Qi(t){return t.expireTimeMillis-Date.now()>0}function P_(t){return{token:jM(HM),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=gn(this.app);for(const n of e)oI(this.app,n.next);return Promise.resolve()}}function YM(t,e){return new GM(t,e)}function QM(t){return{getToken:e=>af(t,e),getLimitedUseToken:()=>WM(t),addTokenListener:e=>qM(t,"INTERNAL",e),removeTokenListener:e=>oI(t.app,e)}}const XM="@firebase/app-check",JM="0.8.0",ZM="app-check",k_="app-check-internal";function eL(){Dn(new hn(ZM,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return YM(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(k_).initialize()})),Dn(new hn(k_,t=>{const e=t.getProvider("app-check").getImmediate();return QM(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Bt(XM,JM)}eL();const aI=Symbol("firebaseApp");function up(t){return us()&&ht(aI,null)||Zv(t)}const Rn=()=>{};function hp(t,e){return e.split(".").reduce((n,r)=>n&&n[r],t)}function tL(t,e,n){const r=(""+e).split("."),s=r.pop(),i=r.reduce((o,a)=>o&&o[a],t);if(i!=null)return Array.isArray(i)?i.splice(Number(s),1,n):i[s]=n}function ms(t){return!!t&&typeof t=="object"}const nL=Object.prototype;function rL(t){return ms(t)&&Object.getPrototypeOf(t)===nL}function fp(t){return ms(t)&&t.type==="document"}function sL(t){return ms(t)&&t.type==="collection"}function iL(t){return fp(t)||sL(t)}function oL(t){return ms(t)&&t.type==="query"}function aL(t){return ms(t)&&"ref"in t}function lL(t){return ms(t)&&typeof t.bucket=="string"}function cL(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const uL=Symbol.for("v-scx");function hL(){return!!ht(uL,0)}const N_="@firebase/database",O_="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lI="";function fL(t){lI=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ut(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Io(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return rr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dL(e)}}catch{}return new pL},Kr=cI("localStorage"),lf=cI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=new Jo("@firebase/database"),gL=function(){let t=1;return function(){return t++}}(),uI=function(t){const e=LC(t),n=new NC;n.update(e);const r=n.digest();return vc.encodeByteArray(r)},Ea=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ea.apply(null,r):typeof r=="object"?e+=ut(r):e+=r,e+=" "}return e};let Jr=null,D_=!0;const mL=function(t,e){F(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Gs.logLevel=ce.VERBOSE,Jr=Gs.log.bind(Gs),e&&lf.set("logging_enabled",!0)):typeof t=="function"?Jr=t:(Jr=null,lf.remove("logging_enabled"))},_t=function(...t){if(D_===!0&&(D_=!1,Jr===null&&lf.get("logging_enabled")===!0&&mL(!0)),Jr){const e=Ea.apply(null,t);Jr(e)}},Ta=function(t){return function(...e){_t(t,...e)}},cf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ea(...t);Gs.error(e)},ss=function(...t){const e=`FIREBASE FATAL ERROR: ${Ea(...t)}`;throw Gs.error(e),new Error(e)},$t=function(...t){const e="FIREBASE WARNING: "+Ea(...t);Gs.warn(e)},_L=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$t("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hI=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},yL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},pi="[MIN_NAME]",is="[MAX_NAME]",Pi=function(t,e){if(t===e)return 0;if(t===pi||e===is)return-1;if(e===pi||t===is)return 1;{const n=x_(t),r=x_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},vL=function(t,e){return t===e?0:t<e?-1:1},Fi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ut(e))},dp=function(t){if(typeof t!="object"||t===null)return ut(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ut(e[r]),n+=":",n+=dp(t[e[r]]);return n+="}",n},fI=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Zt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const dI=function(t){F(!hI(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},EL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},TL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},wL=new RegExp("^-?(0*)\\d{1,10}$"),IL=-2147483648,AL=2147483647,x_=function(t){if(wL.test(t)){const e=Number(t);if(e>=IL&&e<=AL)return e}return null},wa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw $t("Exception was thrown by user callback.",n),e},Math.floor(0))}},bL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){$t(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(_t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$t(e)}}class uf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}uf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="5",pI="v",gI="s",mI="r",_I="f",yI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vI="ls",EI="p",hf="ac",TI="websocket",wI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function PL(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function II(t,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let r;if(e===TI)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===wI)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);PL(t)&&(n.ns=t.namespace);const s=[];return Zt(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(){this.counters_={}}incrementCounter(e,n=1){rr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return pC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu={},Bu={};function gp(t){const e=t.toString();return Uu[e]||(Uu[e]=new kL),Uu[e]}function NL(t,e){const n=t.toString();return Bu[n]||(Bu[n]=e()),Bu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&wa(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="start",DL="close",xL="pLPCommand",ML="pRTLPCB",AI="id",bI="pw",RI="ser",LL="cb",VL="seg",FL="ts",UL="d",BL="dframe",CI=1870,SI=30,$L=CI-SI,HL=25e3,jL=3e4;class Ms{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ta(e),this.stats_=gp(n),this.urlFn=l=>(this.appCheckToken&&(l[hf]=this.appCheckToken),II(n,wI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new OL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jL)),yL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mp((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===M_)this.id=a,this.password=l;else if(o===DL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[M_]="t",r[RI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[LL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[pI]=pp,this.transportSessionId&&(r[gI]=this.transportSessionId),this.lastSessionId&&(r[vI]=this.lastSessionId),this.applicationId&&(r[EI]=this.applicationId),this.appCheckToken&&(r[hf]=this.appCheckToken),typeof location<"u"&&location.hostname&&yI.test(location.hostname)&&(r[mI]=_I);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ms.forceAllow_=!0}static forceDisallow(){Ms.forceDisallow_=!0}static isAvailable(){return Ms.forceAllow_?!0:!Ms.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!EL()&&!TL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=jv(n),s=fI(r,$L);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[BL]="t",r[AI]=e,r[bI]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ut(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class mp{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gL(),window[xL+this.uniqueCallbackIdentifier]=e,window[ML+this.uniqueCallbackIdentifier]=n,this.myIFrame=mp.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){_t("frame writing exception"),a.stack&&_t(a.stack),_t(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_t("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[AI]=this.myID,e[bI]=this.myPW,e[RI]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+SI+r.length<=CI;){const o=this.pendingSegs.shift();r=r+"&"+VL+s+"="+o.seg+"&"+FL+s+"="+o.ts+"&"+UL+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(HL)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{_t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL=16384,qL=45e3;let Gl=null;typeof MozWebSocket<"u"?Gl=MozWebSocket:typeof WebSocket<"u"&&(Gl=WebSocket);class sn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ta(this.connId),this.stats_=gp(n),this.connURL=sn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[pI]=pp,typeof location<"u"&&location.hostname&&yI.test(location.hostname)&&(o[mI]=_I),n&&(o[gI]=n),r&&(o[vI]=r),s&&(o[hf]=s),i&&(o[EI]=i),II(e,TI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kr.set("previous_websocket_failure",!0);try{let r;zv(),this.mySock=new Gl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Gl!==null&&!sn.forceDisallow_}static previouslyFailed(){return Kr.isInMemoryStorage||Kr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Io(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=fI(n,WL);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qL))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}sn.responsesRequiredToBeHealthy=2;sn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ms,sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=sn&&sn.isAvailable();let r=n&&!sn.previouslyFailed();if(e.webSocketOnly&&(n||$t("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[sn];else{const s=this.transports_=[];for(const i of Ho.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ho.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ho.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KL=6e4,zL=5e3,GL=10*1024,YL=100*1024,$u="t",L_="d",QL="s",V_="r",XL="e",F_="o",U_="a",B_="n",$_="p",JL="h";class ZL{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ta("c:"+this.id+":"),this.transportManager_=new Ho(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=fo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>YL?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GL?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($u in e){const n=e[$u];n===U_?this.upgradeIfSecondaryHealthy_():n===V_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===F_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Fi("t",e),r=Fi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:U_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:B_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Fi("t",e),r=Fi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Fi($u,e);if(L_ in e){const r=e[L_];if(n===JL){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===B_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===QL?this.onConnectionShutdown_(r):n===V_?this.onReset_(r):n===XL?cf("Server Error: "+r):n===F_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),pp!==r&&$t("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),fo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(KL))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zL))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends kI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ed()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Yl}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=32,j_=768;class Fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Se(){return new Fe("")}function pe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Sr(t){return t.pieces_.length-t.pieceNum_}function xe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Fe(t.pieces_,e)}function NI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function eV(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function OI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function DI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Fe(e,0)}function st(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Fe(n,0)}function he(t){return t.pieceNum_>=t.pieces_.length}function Qt(t,e){const n=pe(t),r=pe(e);if(n===null)return e;if(n===r)return Qt(xe(t),xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function xI(t,e){if(Sr(t)!==Sr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function an(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Sr(t)>Sr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class tV{constructor(e,n){this.errorPrefix_=n,this.parts_=OI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ec(this.parts_[r]);MI(this)}}function nV(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ec(e),MI(t)}function rV(t){const e=t.parts_.pop();t.byteLength_-=Ec(e),t.parts_.length>0&&(t.byteLength_-=1)}function MI(t){if(t.byteLength_>j_)throw new Error(t.errorPrefix_+"has a key path longer than "+j_+" bytes ("+t.byteLength_+").");if(t.parts_.length>H_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+H_+") or object contains a cycle "+Vr(t))}function Vr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p extends kI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new _p}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=1e3,sV=60*5*1e3,W_=30*1e3,iV=1.3,oV=3e4,aV="server_kill",q_=3;class zn extends PI{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=zn.nextPersistentConnectionId_++,this.log_=Ta("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ui,this.maxReconnectDelay_=sV,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!zv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_p.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Yl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(ut(i)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new wo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;zn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&rr(e,"w")){const r=ni(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();$t(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=W_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=PC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ut(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):cf("Unrecognized action received from server: "+ut(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>oV&&(this.reconnectDelay_=Ui),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*iV)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+zn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?_t("getToken() completed but was canceled"):(_t("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new ZL(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,d=>{$t(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(aV)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&$t(h),l())}}}interrupt(e){_t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],kg(this.interruptReasons_)&&(this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>dp(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Fe(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){_t("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=q_&&(this.reconnectDelay_=W_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){_t("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=q_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+lI.replace(/\./g,"-")]=1,ed()?e["framework.cordova"]=1:Kv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yl.getInstance().currentlyOnline();return kg(this.interruptReasons_)&&e}}zn.nextPersistentConnectionId_=0;zn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ge(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ge(pi,e),s=new ge(pi,n);return this.compare(r,s)!==0}minPost(){return ge.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ga;class LI extends eu{static get __EMPTY_NODE(){return Ga}static set __EMPTY_NODE(e){Ga=e}compare(e,n){return Pi(e.name,n.name)}isDefinedOn(e){throw vi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ge.MIN}maxPost(){return new ge(is,Ga)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new ge(e,Ga)}toString(){return".key"}}const Ys=new LI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??Mt.EMPTY_NODE,this.right=i??Mt.EMPTY_NODE}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Mt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class lV{copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Mt{constructor(e,n=Mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(e){return new Mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ya(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ya(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ya(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ya(this.root_,null,this.comparator_,!0,e)}}Mt.EMPTY_NODE=new lV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cV(t,e){return Pi(t.name,e.name)}function yp(t,e){return Pi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ff;function uV(t){ff=t}const VI=function(t){return typeof t=="number"?"number:"+dI(t):"string:"+t},FI=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&rr(e,".sv"),"Priority must be a string or number.")}else F(t===ff||t.isEmpty(),"priority of unexpected type.");F(t===ff||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let K_;class tt{constructor(e,n=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),FI(this.priorityNode_)}static set __childrenNodeConstructor(e){K_=e}static get __childrenNodeConstructor(){return K_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return he(e)?this:pe(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=pe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(F(r!==".priority"||Sr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(xe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+VI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=dI(this.value_):e+=this.value_,this.lazyHash_=uI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=tt.VALUE_TYPE_ORDER.indexOf(n),i=tt.VALUE_TYPE_ORDER.indexOf(r);return F(s>=0,"Unknown leaf type: "+n),F(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let UI,BI;function hV(t){UI=t}function fV(t){BI=t}class dV extends eu{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Pi(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ge.MIN}maxPost(){return new ge(is,new tt("[PRIORITY-POST]",BI))}makePost(e,n){const r=UI(e);return new ge(n,new tt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Tt=new dV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV=Math.log(2);class gV{constructor(e){const n=i=>parseInt(Math.log(i)/pV,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ql=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new rt(f,h.node,rt.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=s(l,d),y=s(d+1,c);return h=t[d],f=n?n(h):h,new rt(f,h.node,rt.BLACK,p,y)}},i=function(l){let c=null,u=null,h=t.length;const f=function(p,y){const T=h-p,m=h;h-=p;const g=s(T+1,m),w=t[T],E=n?n(w):w;d(new rt(E,w.node,y,null,g))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const y=l.nextBitIsOne(),T=Math.pow(2,l.count-(p+1));y?f(T,rt.BLACK):(f(T,rt.BLACK),f(T,rt.RED))}return u},o=new gV(t.length),a=i(o);return new Mt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu;const bs={};class Wn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return F(bs&&Tt,"ChildrenNode.ts has not been loaded"),Hu=Hu||new Wn({".priority":bs},{".priority":Tt}),Hu}get(e){const n=ni(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Mt?n:null}hasIndex(e){return rr(this.indexSet_,e.toString())}addIndex(e,n){F(e!==Ys,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(ge.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Ql(r,e.getCompare()):a=bs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Wn(u,c)}addToIndexes(e,n){const r=Il(this.indexes_,(s,i)=>{const o=ni(this.indexSet_,i);if(F(o,"Missing index implementation for "+i),s===bs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ge.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ql(a,o.getCompare())}else return bs;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new ge(e.name,a))),l.insert(e,e.node)}});return new Wn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Il(this.indexes_,s=>{if(s===bs)return s;{const i=n.get(e.name);return i?s.remove(new ge(e.name,i)):s}});return new Wn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi;class we{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&FI(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bi||(Bi=new we(new Mt(yp),null,Wn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bi}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bi:n}}getChild(e){const n=pe(e);return n===null?this:this.getImmediateChild(n).getChild(xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ge(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Bi:this.priorityNode_;return new we(s,o,i)}}updateChild(e,n){const r=pe(e);if(r===null)return n;{F(pe(e)!==".priority"||Sr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(xe(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Tt,(o,a)=>{n[o]=a.val(e),r++,i&&we.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+VI(this.getPriority().val())+":"),this.forEachChild(Tt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":uI(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new ge(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ge(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ge(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ge.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ge.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ia?-1:0}withIndex(e){if(e===Ys||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ys||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Tt),s=n.getIterator(Tt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ys?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mV extends we{constructor(){super(new Mt(yp),we.EMPTY_NODE,Wn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const Ia=new mV;Object.defineProperties(ge,{MIN:{value:new ge(pi,we.EMPTY_NODE)},MAX:{value:new ge(is,Ia)}});LI.__EMPTY_NODE=we.EMPTY_NODE;tt.__childrenNodeConstructor=we;uV(Ia);fV(Ia);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _V=!0;function yt(t,e=null){if(t===null)return we.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new tt(n,yt(e))}if(!(t instanceof Array)&&_V){const n=[];let r=!1;if(Zt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=yt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ge(o,l)))}}),n.length===0)return we.EMPTY_NODE;const i=Ql(n,cV,o=>o.name,yp);if(r){const o=Ql(n,Tt.getCompare());return new we(i,yt(e),new Wn({".priority":o},{".priority":Tt}))}else return new we(i,yt(e),Wn.Default)}else{let n=we.EMPTY_NODE;return Zt(t,(r,s)=>{if(rr(t,r)&&r.substring(0,1)!=="."){const i=yt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(yt(e))}}hV(yt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV extends eu{constructor(e){super(),this.indexPath_=e,F(!he(e)&&pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Pi(e.name,n.name):i}makePost(e,n){const r=yt(e),s=we.EMPTY_NODE.updateChild(this.indexPath_,r);return new ge(n,s)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,Ia);return new ge(is,e)}toString(){return OI(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV extends eu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Pi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ge.MIN}maxPost(){return ge.MAX}makePost(e,n){const r=yt(e);return new ge(n,r)}toString(){return".value"}}const EV=new vV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TV(t){return{type:"value",snapshotNode:t}}function wV(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function IV(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function z_(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function AV(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Tt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pi}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:is}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Tt}copy(){const e=new vp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function G_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Tt?n="$priority":t.index_===EV?n="$value":t.index_===Ys?n="$key":(F(t.index_ instanceof yV,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ut(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ut(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ut(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ut(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ut(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Y_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Tt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends PI{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Ta("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Xl.getListenId_(e,r),a={};this.listens_[o]=a;const l=G_(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),ni(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=Xl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=G_(e._queryParams),r=e._path.toString(),s=new wo;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+td(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Io(a.responseText)}catch{$t("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&$t("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bV{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){return{value:null,children:new Map}}function $I(t,e,n){if(he(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=pe(e);t.children.has(r)||t.children.set(r,Jl());const s=t.children.get(r);e=xe(e),$I(s,e,n)}}function df(t,e,n){t.value!==null?n(e,t.value):RV(t,(r,s)=>{const i=new Fe(e.toString()+"/"+r);df(s,i,n)})}function RV(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Zt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=10*1e3,SV=30*1e3,PV=5*60*1e3;class kV{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new CV(e);const r=Q_+(SV-Q_)*Math.random();fo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Zt(e,(s,i)=>{i>0&&rr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),fo(this.reportStats_.bind(this),Math.floor(Math.random()*2*PV))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Cn||(Cn={}));function HI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function jI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function WI(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Cn.ACK_USER_WRITE,this.source=HI()}operationForChild(e){if(he(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Fe(e));return new Zl(Se(),n,this.revert)}}else return F(pe(this.path)===e,"operationForChild called for unrelated child."),new Zl(xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Cn.OVERWRITE}operationForChild(e){return he(this.path)?new os(this.source,Se(),this.snap.getImmediateChild(e)):new os(this.source,xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Cn.MERGE}operationForChild(e){if(he(this.path)){const n=this.children.subtree(new Fe(e));return n.isEmpty()?null:n.value?new os(this.source,Se(),n.value):new jo(this.source,Se(),n)}else return F(pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jo(this.source,xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(he(e))return this.isFullyInitialized()&&!this.filtered_;const n=pe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function NV(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(AV(o.childName,o.snapshotNode))}),$i(t,s,"child_removed",e,r,n),$i(t,s,"child_added",e,r,n),$i(t,s,"child_moved",i,r,n),$i(t,s,"child_changed",e,r,n),$i(t,s,"value",e,r,n),s}function $i(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>DV(t,a,l)),o.forEach(a=>{const l=OV(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function OV(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function DV(t,e,n){if(e.childName==null||n.childName==null)throw vi("Should only compare child_ events.");const r=new ge(e.childName,e.snapshotNode),s=new ge(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t,e){return{eventCache:t,serverCache:e}}function po(t,e,n,r){return qI(new Ep(e,n,r),t.serverCache)}function KI(t,e,n,r){return qI(t.eventCache,new Ep(e,n,r))}function pf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function as(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ju;const xV=()=>(ju||(ju=new Mt(vL)),ju);class Oe{constructor(e,n=xV()){this.value=e,this.children=n}static fromObject(e){let n=new Oe(null);return Zt(e,(r,s)=>{n=n.set(new Fe(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Se(),value:this.value};if(he(e))return null;{const r=pe(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(xe(e),n);return i!=null?{path:st(new Fe(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(he(e))return this;{const n=pe(e),r=this.children.get(n);return r!==null?r.subtree(xe(e)):new Oe(null)}}set(e,n){if(he(e))return new Oe(n,this.children);{const r=pe(e),i=(this.children.get(r)||new Oe(null)).set(xe(e),n),o=this.children.insert(r,i);return new Oe(this.value,o)}}remove(e){if(he(e))return this.children.isEmpty()?new Oe(null):new Oe(null,this.children);{const n=pe(e),r=this.children.get(n);if(r){const s=r.remove(xe(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Oe(null):new Oe(this.value,i)}else return this}}get(e){if(he(e))return this.value;{const n=pe(e),r=this.children.get(n);return r?r.get(xe(e)):null}}setTree(e,n){if(he(e))return n;{const r=pe(e),i=(this.children.get(r)||new Oe(null)).setTree(xe(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Oe(this.value,o)}}fold(e){return this.fold_(Se(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(st(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Se(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(he(e))return null;{const i=pe(e),o=this.children.get(i);return o?o.findOnPath_(xe(e),st(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Se(),n)}foreachOnPath_(e,n,r){if(he(e))return this;{this.value&&r(n,this.value);const s=pe(e),i=this.children.get(s);return i?i.foreachOnPath_(xe(e),st(n,s),r):new Oe(null)}}foreach(e){this.foreach_(Se(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(st(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.writeTree_=e}static empty(){return new un(new Oe(null))}}function go(t,e,n){if(he(e))return new un(new Oe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Qt(s,e);return i=i.updateChild(o,n),new un(t.writeTree_.set(s,i))}else{const s=new Oe(n),i=t.writeTree_.setTree(e,s);return new un(i)}}}function X_(t,e,n){let r=t;return Zt(n,(s,i)=>{r=go(r,st(e,s),i)}),r}function J_(t,e){if(he(e))return un.empty();{const n=t.writeTree_.setTree(e,new Oe(null));return new un(n)}}function gf(t,e){return _s(t,e)!=null}function _s(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Qt(n.path,e)):null}function Z_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Tt,(r,s)=>{e.push(new ge(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new ge(r,s.value))}),e}function Ir(t,e){if(he(e))return t;{const n=_s(t,e);return n!=null?new un(new Oe(n)):new un(t.writeTree_.subtree(e))}}function mf(t){return t.writeTree_.isEmpty()}function gi(t,e){return zI(Se(),t.writeTree_,e)}function zI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(F(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=zI(st(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(st(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t,e){return ZI(e,t)}function MV(t,e,n,r,s){F(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=go(t.visibleWrites,e,n)),t.lastWriteId=r}function LV(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function VV(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&FV(a,r.path)?s=!1:an(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return UV(t),!0;if(r.snap)t.visibleWrites=J_(t.visibleWrites,r.path);else{const a=r.children;Zt(a,l=>{t.visibleWrites=J_(t.visibleWrites,st(r.path,l))})}return!0}else return!1}function FV(t,e){if(t.snap)return an(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&an(st(t.path,n),e))return!0;return!1}function UV(t){t.visibleWrites=YI(t.allWrites,BV,Se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function BV(t){return t.visible}function YI(t,e,n){let r=un.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)an(n,o)?(a=Qt(n,o),r=go(r,a,i.snap)):an(o,n)&&(a=Qt(o,n),r=go(r,Se(),i.snap.getChild(a)));else if(i.children){if(an(n,o))a=Qt(n,o),r=X_(r,a,i.children);else if(an(o,n))if(a=Qt(o,n),he(a))r=X_(r,Se(),i.children);else{const l=ni(i.children,pe(a));if(l){const c=l.getChild(xe(a));r=go(r,Se(),c)}}}else throw vi("WriteRecord should have .snap or .children")}}return r}function QI(t,e,n,r,s){if(!r&&!s){const i=_s(t.visibleWrites,e);if(i!=null)return i;{const o=Ir(t.visibleWrites,e);if(mf(o))return n;if(n==null&&!gf(o,Se()))return null;{const a=n||we.EMPTY_NODE;return gi(o,a)}}}else{const i=Ir(t.visibleWrites,e);if(!s&&mf(i))return n;if(!s&&n==null&&!gf(i,Se()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(an(c.path,e)||an(e,c.path))},a=YI(t.allWrites,o,e),l=n||we.EMPTY_NODE;return gi(a,l)}}}function $V(t,e,n){let r=we.EMPTY_NODE;const s=_s(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Tt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Ir(t.visibleWrites,e);return n.forEachChild(Tt,(o,a)=>{const l=gi(Ir(i,new Fe(o)),a);r=r.updateImmediateChild(o,l)}),Z_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Ir(t.visibleWrites,e);return Z_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function HV(t,e,n,r,s){F(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=st(e,n);if(gf(t.visibleWrites,i))return null;{const o=Ir(t.visibleWrites,i);return mf(o)?s.getChild(n):gi(o,s.getChild(n))}}function jV(t,e,n,r){const s=st(e,n),i=_s(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Ir(t.visibleWrites,s);return gi(o,r.getNode().getImmediateChild(n))}else return null}function WV(t,e){return _s(t.visibleWrites,e)}function qV(t,e,n,r,s,i,o){let a;const l=Ir(t.visibleWrites,e),c=_s(l,Se());if(c!=null)a=c;else if(n!=null)a=gi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let d=f.getNext();for(;d&&u.length<s;)h(d,r)!==0&&u.push(d),d=f.getNext();return u}else return[]}function KV(){return{visibleWrites:un.empty(),allWrites:[],lastWriteId:-1}}function _f(t,e,n,r){return QI(t.writeTree,t.treePath,e,n,r)}function XI(t,e){return $V(t.writeTree,t.treePath,e)}function ey(t,e,n,r){return HV(t.writeTree,t.treePath,e,n,r)}function ec(t,e){return WV(t.writeTree,st(t.treePath,e))}function zV(t,e,n,r,s,i){return qV(t.writeTree,t.treePath,e,n,r,s,i)}function Tp(t,e,n){return jV(t.writeTree,t.treePath,e,n)}function JI(t,e){return ZI(st(t.treePath,e),t.writeTree)}function ZI(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,z_(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,IV(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,wV(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,z_(r,e.snapshotNode,s.oldSnap));else throw vi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YV{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const e0=new YV;class wp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ep(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Tp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:as(this.viewCache_),i=zV(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function QV(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function XV(t,e,n,r,s){const i=new GV;let o,a;if(n.type===Cn.OVERWRITE){const c=n;c.source.fromUser?o=yf(t,e,c.path,c.snap,r,s,i):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!he(c.path),o=tc(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===Cn.MERGE){const c=n;c.source.fromUser?o=ZV(t,e,c.path,c.children,r,s,i):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=vf(t,e,c.path,c.children,r,s,a,i))}else if(n.type===Cn.ACK_USER_WRITE){const c=n;c.revert?o=nF(t,e,c.path,r,s,i):o=eF(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===Cn.LISTEN_COMPLETE)o=tF(t,e,n.path,r,i);else throw vi("Unknown operation type: "+n.type);const l=i.getChanges();return JV(e,o,l),{viewCache:o,changes:l}}function JV(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=pf(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(TV(pf(e)))}}function t0(t,e,n,r,s,i){const o=e.eventCache;if(ec(r,n)!=null)return e;{let a,l;if(he(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=as(e),u=c instanceof we?c:we.EMPTY_NODE,h=XI(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=_f(r,as(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=pe(n);if(c===".priority"){F(Sr(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=ey(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=xe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=ey(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Tp(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,i):a=o.getNode()}}return po(e,a,o.isFullyInitialized()||he(n),t.filter.filtersNodes())}}function tc(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(he(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),d,null)}else{const d=pe(n);if(!l.isCompleteForPath(n)&&Sr(n)>1)return e;const p=xe(n),T=l.getNode().getImmediateChild(d).updateChild(p,r);d===".priority"?c=u.updatePriority(l.getNode(),T):c=u.updateChild(l.getNode(),d,T,p,e0,null)}const h=KI(e,c,l.isFullyInitialized()||he(n),u.filtersNodes()),f=new wp(s,h,i);return t0(t,h,n,s,f,a)}function yf(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new wp(s,e,i);if(he(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=po(e,c,!0,t.filter.filtersNodes());else{const h=pe(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=po(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=xe(n),d=a.getNode().getImmediateChild(h);let p;if(he(f))p=r;else{const y=u.getCompleteChild(h);y!=null?NI(f)===".priority"&&y.getChild(DI(f)).isEmpty()?p=y:p=y.updateChild(f,r):p=we.EMPTY_NODE}if(d.equals(p))l=e;else{const y=t.filter.updateChild(a.getNode(),h,p,f,u,o);l=po(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ty(t,e){return t.eventCache.isCompleteForChild(e)}function ZV(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=st(n,l);ty(e,pe(u))&&(a=yf(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=st(n,l);ty(e,pe(u))||(a=yf(t,a,u,c,s,i,o))}),a}function ny(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function vf(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;he(n)?c=r:c=new Oe(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=ny(t,d,f);l=tc(t,l,new Fe(h),p,s,i,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),y=ny(t,p,f);l=tc(t,l,new Fe(h),y,s,i,o,a)}}),l}function eF(t,e,n,r,s,i,o){if(ec(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(he(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return tc(t,e,n,l.getNode().getChild(n),s,i,a,o);if(he(n)){let c=new Oe(null);return l.getNode().forEachChild(Ys,(u,h)=>{c=c.set(new Fe(u),h)}),vf(t,e,n,c,s,i,a,o)}else return e}else{let c=new Oe(null);return r.foreach((u,h)=>{const f=st(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),vf(t,e,n,c,s,i,a,o)}}function tF(t,e,n,r,s){const i=e.serverCache,o=KI(e,i.getNode(),i.isFullyInitialized()||he(n),i.isFiltered());return t0(t,o,n,r,e0,s)}function nF(t,e,n,r,s,i){let o;if(ec(r,n)!=null)return e;{const a=new wp(r,e,s),l=e.eventCache.getNode();let c;if(he(n)||pe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=_f(r,as(e));else{const h=e.serverCache.getNode();F(h instanceof we,"serverChildren would be complete if leaf node"),u=XI(r,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=pe(n);let h=Tp(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,xe(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,we.EMPTY_NODE,xe(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=_f(r,as(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||ec(r,Se())!=null,po(e,c,o,t.filter.filtersNodes())}}function rF(t,e){const n=as(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!he(e)&&!n.getImmediateChild(pe(e)).isEmpty())?n.getChild(e):null}function ry(t,e,n,r){e.type===Cn.MERGE&&e.source.queryId!==null&&(F(as(t.viewCache_),"We should always have a full cache before handling merges"),F(pf(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=XV(t.processor_,s,e,n,r);return QV(t.processor_,i.viewCache),F(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,sF(t,i.changes,i.viewCache.eventCache.getNode(),null)}function sF(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return NV(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sy;function iF(t){F(!sy,"__referenceConstructor has already been defined"),sy=t}function Ip(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return F(i!=null,"SyncTree gave us an op for an invalid query."),ry(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(ry(o,e,n,r));return i}}function Ap(t,e){let n=null;for(const r of t.views.values())n=n||rF(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iy;function oF(t){F(!iy,"__referenceConstructor has already been defined"),iy=t}class oy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Oe(null),this.pendingWriteTree_=KV(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function aF(t,e,n,r,s){return MV(t.pendingWriteTree_,e,n,r,s),s?nu(t,new os(HI(),e,n)):[]}function Ls(t,e,n=!1){const r=LV(t.pendingWriteTree_,e);if(VV(t.pendingWriteTree_,e)){let i=new Oe(null);return r.snap!=null?i=i.set(Se(),!0):Zt(r.children,o=>{i=i.set(new Fe(o),!0)}),nu(t,new Zl(r.path,i,n))}else return[]}function tu(t,e,n){return nu(t,new os(jI(),e,n))}function lF(t,e,n){const r=Oe.fromObject(n);return nu(t,new jo(jI(),e,r))}function cF(t,e,n,r){const s=i0(t,r);if(s!=null){const i=o0(s),o=i.path,a=i.queryId,l=Qt(o,e),c=new os(WI(a),l,n);return a0(t,o,c)}else return[]}function uF(t,e,n,r){const s=i0(t,r);if(s){const i=o0(s),o=i.path,a=i.queryId,l=Qt(o,e),c=Oe.fromObject(n),u=new jo(WI(a),l,c);return a0(t,o,u)}else return[]}function n0(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Qt(o,e),c=Ap(a,l);if(c)return c});return QI(s,e,i,n,!0)}function nu(t,e){return r0(e,t.syncPointTree_,null,GI(t.pendingWriteTree_,Se()))}function r0(t,e,n,r){if(he(t.path))return s0(t,e,n,r);{const s=e.get(Se());n==null&&s!=null&&(n=Ap(s,Se()));let i=[];const o=pe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=JI(r,o);i=i.concat(r0(a,l,c,u))}return s&&(i=i.concat(Ip(s,t,r,n))),i}}function s0(t,e,n,r){const s=e.get(Se());n==null&&s!=null&&(n=Ap(s,Se()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=JI(r,o),u=t.operationForChild(o);u&&(i=i.concat(s0(u,a,l,c)))}),s&&(i=i.concat(Ip(s,t,r,n))),i}function i0(t,e){return t.tagToQueryMap.get(e)}function o0(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Fe(t.substr(0,e))}}function a0(t,e,n){const r=t.syncPointTree_.get(e);F(r,"Missing sync point for query tag that we're tracking");const s=GI(t.pendingWriteTree_,e);return Ip(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new bp(n)}node(){return this.node_}}class Rp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=st(this.path_,e);return new Rp(this.syncTree_,n)}node(){return n0(this.syncTree_,this.path_)}}const hF=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ay=function(t,e,n){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return fF(t[".sv"],e,n);if(typeof t[".sv"]=="object")return dF(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},fF=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+t)}},dF=function(t,e,n){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&F(!1,"Unexpected increment value: "+r);const s=e.node();if(F(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},pF=function(t,e,n,r){return Cp(e,new Rp(n,t),r)},gF=function(t,e,n){return Cp(t,new bp(e),n)};function Cp(t,e,n){const r=t.getPriority().val(),s=ay(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=ay(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new tt(a,yt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new tt(s))),o.forEachChild(Tt,(a,l)=>{const c=Cp(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Pp(t,e){let n=e instanceof Fe?e:new Fe(e),r=t,s=pe(n);for(;s!==null;){const i=ni(r.node.children,s)||{children:{},childCount:0};r=new Sp(s,r,i),n=xe(n),s=pe(n)}return r}function ki(t){return t.node.value}function l0(t,e){t.node.value=e,Ef(t)}function c0(t){return t.node.childCount>0}function mF(t){return ki(t)===void 0&&!c0(t)}function ru(t,e){Zt(t.node.children,(n,r)=>{e(new Sp(n,t,r))})}function u0(t,e,n,r){n&&!r&&e(t),ru(t,s=>{u0(s,e,!0,r)}),n&&r&&e(t)}function _F(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Aa(t){return new Fe(t.parent===null?t.name:Aa(t.parent)+"/"+t.name)}function Ef(t){t.parent!==null&&yF(t.parent,t.name,t)}function yF(t,e,n){const r=mF(n),s=rr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Ef(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Ef(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vF=/[\[\].#$\/\u0000-\u001F\u007F]/,EF=/[\[\].#$\u0000-\u001F\u007F]/,Wu=10*1024*1024,h0=function(t){return typeof t=="string"&&t.length!==0&&!vF.test(t)},TF=function(t){return typeof t=="string"&&t.length!==0&&!EF.test(t)},wF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),TF(t)},f0=function(t,e,n){const r=n instanceof Fe?new tV(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Vr(r)+" with contents = "+e.toString());if(hI(e))throw new Error(t+"contains "+e.toString()+" "+Vr(r));if(typeof e=="string"&&e.length>Wu/3&&Ec(e)>Wu)throw new Error(t+"contains a string greater than "+Wu+" utf8 bytes "+Vr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Zt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!h0(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nV(r,o),f0(t,a,r),rV(r)}),s&&i)throw new Error(t+' contains ".value" child '+Vr(r)+" in addition to actual children.")}},IF=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!h0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!wF(n))throw new Error(MC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bF(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!xI(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function ys(t,e,n){bF(t,n),RF(t,r=>an(r,e)||an(e,r))}function RF(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(CF(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function CF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Jr&&_t("event: "+n.toString()),wa(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SF="repo_interrupt",PF=25;class kF{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new AF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jl(),this.transactionQueueTree_=new Sp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function NF(t,e,n){if(t.stats_=gp(t.repoInfo_),t.forceRestClient_||bL())t.server_=new Xl(t.repoInfo_,(r,s,i,o)=>{ly(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>cy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ut(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new zn(t.repoInfo_,e,(r,s,i,o)=>{ly(t,r,s,i,o)},r=>{cy(t,r)},r=>{DF(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=NL(t.repoInfo_,()=>new kV(t.stats_,t.server_)),t.infoData_=new bV,t.infoSyncTree_=new oy({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=tu(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),kp(t,"connected",!1),t.serverSyncTree_=new oy({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);ys(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function OF(t){const n=t.infoData_.getNode(new Fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function d0(t){return hF({timestamp:OF(t)})}function ly(t,e,n,r,s){t.dataUpdateCount++;const i=new Fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Il(n,c=>yt(c));o=uF(t.serverSyncTree_,i,l,s)}else{const l=yt(n);o=cF(t.serverSyncTree_,i,l,s)}else if(r){const l=Il(n,c=>yt(c));o=lF(t.serverSyncTree_,i,l)}else{const l=yt(n);o=tu(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Op(t,i)),ys(t.eventQueue_,a,o)}function cy(t,e){kp(t,"connected",e),e===!1&&MF(t)}function DF(t,e){Zt(e,(n,r)=>{kp(t,n,r)})}function kp(t,e,n){const r=new Fe("/.info/"+e),s=yt(n);t.infoData_.updateSnapshot(r,s);const i=tu(t.infoSyncTree_,r,s);ys(t.eventQueue_,r,i)}function xF(t){return t.nextWriteId_++}function MF(t){p0(t,"onDisconnectEvents");const e=d0(t),n=Jl();df(t.onDisconnect_,Se(),(s,i)=>{const o=pF(s,i,t.serverSyncTree_,e);$I(n,s,o)});let r=[];df(n,Se(),(s,i)=>{r=r.concat(tu(t.serverSyncTree_,s,i));const o=UF(t,s);Op(t,o)}),t.onDisconnect_=Jl(),ys(t.eventQueue_,Se(),r)}function LF(t){t.persistentConnection_&&t.persistentConnection_.interrupt(SF)}function p0(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),_t(n,...e)}function g0(t,e,n){return n0(t.serverSyncTree_,e,n)||we.EMPTY_NODE}function Np(t,e=t.transactionQueueTree_){if(e||su(t,e),ki(e)){const n=_0(t,e);F(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&VF(t,Aa(e),n)}else c0(e)&&ru(e,n=>{Np(t,n)})}function VF(t,e,n){const r=n.map(c=>c.currentWriteId),s=g0(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];F(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Qt(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{p0(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Ls(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();su(t,Pp(t.transactionQueueTree_,e)),Np(t,t.transactionQueueTree_),ys(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)wa(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{$t("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Op(t,e)}},o)}function Op(t,e){const n=m0(t,e),r=Aa(n),s=_0(t,n);return FF(t,s,r),r}function FF(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Qt(n,l.path);let u=!1,h;if(F(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Ls(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=PF)u=!0,h="maxretry",s=s.concat(Ls(t.serverSyncTree_,l.currentWriteId,!0));else{const f=g0(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){f0("transaction failed: Data returned ",d,l.path);let p=yt(d);typeof d=="object"&&d!=null&&rr(d,".priority")||(p=p.updatePriority(f.getPriority()));const T=l.currentWriteId,m=d0(t),g=gF(p,f,m);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=g,l.currentWriteId=xF(t),o.splice(o.indexOf(T),1),s=s.concat(aF(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),s=s.concat(Ls(t.serverSyncTree_,T,!0))}else u=!0,h="nodata",s=s.concat(Ls(t.serverSyncTree_,l.currentWriteId,!0))}ys(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}su(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)wa(r[a]);Np(t,t.transactionQueueTree_)}function m0(t,e){let n,r=t.transactionQueueTree_;for(n=pe(e);n!==null&&ki(r)===void 0;)r=Pp(r,n),e=xe(e),n=pe(e);return r}function _0(t,e){const n=[];return y0(t,e,n),n.sort((r,s)=>r.order-s.order),n}function y0(t,e,n){const r=ki(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);ru(e,s=>{y0(t,s,n)})}function su(t,e){const n=ki(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,l0(e,n.length>0?n:void 0)}ru(e,r=>{su(t,r)})}function UF(t,e){const n=Aa(m0(t,e)),r=Pp(t.transactionQueueTree_,e);return _F(r,s=>{qu(t,s)}),qu(t,r),u0(r,s=>{qu(t,s)}),n}function qu(t,e){const n=ki(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(F(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(F(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ls(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?l0(e,void 0):n.length=i+1,ys(t.eventQueue_,Aa(e),s);for(let o=0;o<r.length;o++)wa(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BF(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function $F(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):$t(`Invalid query segment '${n}' in query '${t}'`)}return e}const uy=function(t,e){const n=HF(t),r=n.namespace;n.domain==="firebase.com"&&ss(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ss("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_L();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new SL(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Fe(n.pathString)}},HF=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=BF(t.substring(u,h)));const f=$F(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return he(this._path)?null:NI(this._path)}get ref(){return new Ni(this._repo,this._path)}get _queryIdentifier(){const e=Y_(this._queryParams),n=dp(e);return n==="{}"?"default":n}get _queryObject(){return Y_(this._queryParams)}isEqual(e){if(e=Jt(e),!(e instanceof Dp))return!1;const n=this._repo===e._repo,r=xI(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+eV(this._path)}}class Ni extends Dp{constructor(e,n){super(e,n,new vp,!1)}get parent(){const e=DI(this._path);return e===null?null:new Ni(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}iF(Ni);oF(Ni);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jF="FIREBASE_DATABASE_EMULATOR_HOST",Tf={};let WF=!1;function qF(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||ss("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_t("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=uy(i,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[jF]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=uy(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new uf(uf.OWNER):new CL(t.name,t.options,e);IF("Invalid Firebase Database URL",o),he(o.path)||ss("Database URL must point to the root of a Firebase Database (not including a child path).");const h=zF(a,t,u,new RL(t.name,n));return new GF(h,t)}function KF(t,e){const n=Tf[e];(!n||n[t.key]!==t)&&ss(`Database ${e}(${t.repoInfo_}) has already been deleted.`),LF(t),delete n[t.key]}function zF(t,e,n,r){let s=Tf[e.name];s||(s={},Tf[e.name]=s);let i=s[t.toURLString()];return i&&ss("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new kF(t,WF,n,r),s[t.toURLString()]=i,i}class GF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(NF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ni(this._repo,Se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(KF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ss("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YF(t){fL(Ti),Dn(new hn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return qF(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Bt(N_,O_,t),Bt(N_,O_,"esm2017")}zn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};zn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};YF();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="firebasestorage.googleapis.com",QF="storageBucket",XF=2*60*1e3,JF=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends nr{constructor(e,n,r=0){super(Ku(e),`Firebase Storage: ${n} (${Ku(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Vn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ku(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Mn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Mn||(Mn={}));function Ku(t){return"storage/"+t}function ZF(){const t="An unknown error occurred, please check the error payload for server response.";return new Vn(Mn.UNKNOWN,t)}function eU(){return new Vn(Mn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function tU(){return new Vn(Mn.CANCELED,"User canceled the upload/download.")}function nU(t){return new Vn(Mn.INVALID_URL,"Invalid URL '"+t+"'.")}function rU(t){return new Vn(Mn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function hy(t){return new Vn(Mn.INVALID_ARGUMENT,t)}function E0(){return new Vn(Mn.APP_DELETED,"The Firebase app was deleted.")}function sU(t){return new Vn(Mn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ln.makeFromUrl(e,n)}catch{return new ln(e,"")}if(r.path==="")return r;throw rU(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},y=n===v0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",m=new RegExp(`^https?://${y}/${s}/${T}`,"i"),w=[{regex:a,indices:l,postModify:i},{regex:d,indices:p,postModify:c},{regex:m,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<w.length;E++){const A=w[E],O=A.regex.exec(e);if(O){const x=O[A.indices.bucket];let R=O[A.indices.path];R||(R=""),r=new ln(x,R),A.postModify(r);break}}if(r==null)throw nU(e);return r}}class iU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oU(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...T){c||(c=!0,e.apply(null,T))}function h(T){s=setTimeout(()=>{s=null,t(d,l())},T)}function f(){i&&clearTimeout(i)}function d(T,...m){if(c){f();return}if(T){f(),u.call(null,T,...m);return}if(l()||o){f(),u.call(null,T,...m);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,h(w)}let p=!1;function y(T){p||(p=!0,f(),!c&&(s!==null?(T||(a=2),clearTimeout(s),h(0)):T||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function aU(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lU(t){return t!==void 0}function fy(t,e,n,r){if(r<e)throw hy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw hy(`Invalid value for '${t}'. Expected ${n} or less.`)}function cU(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(nc||(nc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uU(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hU{constructor(e,n,r,s,i,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Qa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===nc.NO_ERROR,l=i.getStatus();if(!a||uU(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===nc.ABORT;r(!1,new Qa(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Qa(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());lU(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=ZF();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?E0():tU();o(l)}else{const l=eU();o(l)}};this.canceled_?n(!1,new Qa(!1,null,!0)):this.backoffId_=oU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Qa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function fU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mU(t,e,n,r,s,i,o=!0){const a=cU(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return pU(c,e),fU(c,n),dU(c,i),gU(c,r),new hU(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _U(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function yU(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n){this._service=e,n instanceof ln?this._location=n:this._location=ln.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new rc(e,n)}get root(){const e=new ln(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yU(this._location.path)}get storage(){return this._service}get parent(){const e=_U(this._location.path);if(e===null)return null;const n=new ln(this._location.bucket,e);return new rc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sU(e)}}function dy(t,e){const n=e==null?void 0:e[QF];return n==null?null:ln.makeFromBucketSpec(n,t)}class vU{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=v0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=XF,this._maxUploadRetryTime=JF,this._requests=new Set,s!=null?this._bucket=ln.makeFromBucketSpec(s,this._host):this._bucket=dy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ln.makeFromBucketSpec(this._url,e):this._bucket=dy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rc(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new iU(E0());{const o=mU(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const py="@firebase/storage",gy="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EU="storage";function TU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new vU(n,r,s,e,Ti)}function wU(){Dn(new hn(EU,TU,"PUBLIC").setMultipleInstances(!0)),Bt(py,gy,""),Bt(py,gy,"esm2017")}wU();const zu=new WeakMap;function xp(t,e){return zu.has(e)||zu.set(e,t||{f:{},r:{},s:{},u:{}}),zu.get(e)}function IU(t,e,n,r){if(!t)return n;const[s,i]=T0(t);if(!s)return n;const o=xp(void 0,r)[s]||{},a=e||i;return a&&a in o?o[a]:n}function AU(t,e,n,r){if(!t)return;const[s,i]=T0(t);if(!s)return;const o=xp(void 0,r)[s],a=e||i;if(a)return n.then(l=>{o[a]=l}).catch(Rn),a}function T0(t){return iL(t)||oL(t)?["f",t.path]:aL(t)?["r",t.toString()]:lL(t)?["s",t.toString()]:[]}const Gu=new WeakMap;function bU(t,e,n){const r=up();Gu.has(r)||Gu.set(r,new Map);const s=Gu.get(r),i=AU(e,n,t,r);return i&&s.set(i,t),i?()=>s.delete(i):Rn}const RU={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function wf(t,e,n,r){if(!rL(t))return[t,{}];const s=[{},{}],i=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const p=Object.getOwnPropertyDescriptor(a,d);p&&!p.enumerable&&Object.defineProperty(h,d,p)});for(const d in a){const p=a[d];if(p==null||p instanceof Date||p instanceof je||p instanceof pa)h[d]=p;else if(fp(p)){const y=c+d;h[d]=y in n?l[d]:p.path,f[y]=p.converter?p:p.withConverter(r.converter)}else if(Array.isArray(p)){h[d]=Array(p.length);for(let y=0;y<p.length;y++){const T=p[y];T&&T.path in i&&(h[d][y]=i[T.path])}o(p,l[d]||h[d],c+d+".",[h[d],f])}else ms(p)?(h[d]={},o(p,l[d],c+d+".",[h[d],f])):h[d]=p}}return o(t,e,"",s),s}const Mp={reset:!1,wait:!0,maxRefDepth:2,converter:RU,snapshotOptions:{serverTimestamps:"estimate"}};function sc(t){for(const e in t)t[e].unsub()}function If(t,e,n,r,s,i,o,a,l){const[c,u]=wf(r.data(t.snapshotOptions),hp(e,n),s,t);i.set(e,n,c),Af(t,e,n,s,u,i,o,a,l)}function CU({ref:t,target:e,path:n,depth:r,resolve:s,reject:i,ops:o},a){const l=Object.create(null);let c=Rn;return a.once?vw(t).then(u=>{u.exists()?If(a,e,n,u,l,o,r,s,i):(o.set(e,n,null),s())}).catch(i):c=rp(t,u=>{u.exists()?If(a,e,n,u,l,o,r,s,i):(o.set(e,n,null),s())},i),()=>{c(),sc(l)}}function Af(t,e,n,r,s,i,o,a,l){const c=Object.keys(s);if(Object.keys(r).filter(y=>c.indexOf(y)<0).forEach(y=>{r[y].unsub(),delete r[y]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function p(y){y in d&&++h>=f&&a(n)}c.forEach(y=>{const T=r[y],m=s[y],g=`${n}.${y}`;if(d[g]=!0,T)if(T.path!==m.path)T.unsub();else return;r[y]={data:()=>hp(e,g),unsub:CU({ref:m,target:e,path:g,depth:o,ops:i,resolve:p.bind(null,g),reject:l},t),path:m.path}})}function SU(t,e,n,r,s,i){const o=Object.assign({},Mp,i),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=Je(c?[]:t.value);c||n.set(t,h,[]);const d=r;let p,y=Rn;const T=[],m={added:({newIndex:w,doc:E})=>{T.splice(w,0,Object.create(null));const A=T[w],[O,x]=wf(E.data(l),void 0,A,o);n.add($n(f),w,O),Af(o,f,`${h}.${w}`,A,x,n,0,r.bind(null,E),s)},modified:({oldIndex:w,newIndex:E,doc:A})=>{const O=$n(f),x=T[w],R=O[w],[q,j]=wf(A.data(l),R,x,o);T.splice(E,0,x),n.remove(O,w),n.add(O,E,q),Af(o,f,`${h}.${E}`,x,j,n,0,r,s)},removed:({oldIndex:w})=>{const E=$n(f);n.remove(E,w),sc(T.splice(w,1)[0])}};function g(w){const E=w.docChanges(a);if(!p&&E.length){p=!0;let A=0;const O=E.length,x=Object.create(null);for(let R=0;R<O;R++)x[E[R].doc.id]=!0;r=R=>{R&&R.id in x&&++A>=O&&(c&&(n.set(t,h,$n(f)),f=t),d($n(f)),r=Rn)}}E.forEach(A=>{m[A.type](A)}),E.length||(c&&(n.set(t,h,$n(f)),f=t),r($n(f)))}return u?zO(e).then(g).catch(s):y=rp(e,g,s),w=>{if(y(),w){const E=typeof w=="function"?w():[];n.set(t,h,E)}T.forEach(sc)}}function PU(t,e,n,r,s,i){const o=Object.assign({},Mp,i),a="value",l=Object.create(null);r=cL(r,()=>hp(t,a));let c=Rn;function u(h){h.exists()?If(o,t,a,h,l,n,0,r,s):(n.set(t,a,null),r(null))}return o.once?vw(e).then(u).catch(s):c=rp(e,u,s),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}sc(l)}}const my=Symbol();function w0(t,e){let n=Rn;const r=Object.assign({},Mp,e),s=$n(t),i=r.target||Je();hL()&&(r.once=!0);const o=IU(s,r.ssrKey,my,up()),a=o!==my;a&&(i.value=o);let l=!a;const c=Je(!1),u=Je(),h=Qs(),f=Cy();let d=Rn;function p(){let m=$n(t);const g=new Promise((w,E)=>{if(n(r.reset),!m)return n=Rn,w(null);c.value=l,l=!0,m.converter||(m=m.withConverter(r.converter)),n=(fp(m)?PU:SU)(i,m,kU,w,E,r)}).catch(w=>(h.value===g&&(u.value=w),Promise.reject(w))).finally(()=>{h.value===g&&(c.value=!1)});h.value=g}let y=Rn;Xe(t)&&(y=yr(t,p)),p(),s&&(d=bU(h.value,s,r.ssrKey)),f&&$0(T);function T(m=r.reset){y(),d(),n(m)}return Object.defineProperties(i,{error:{get:()=>u},data:{get:()=>i},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>T}})}const kU={set:(t,e,n)=>tL(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function A2(t,e){return w0(t,{target:Je([]),...e})}function NU(t,e){return w0(t,e)}function OU(t){return OO(up(t))}function DU(t,{firebaseApp:e,modules:n=[]}){t.provide(aI,e);for(const r of n)r(e,t)}const xU=mn(t=>{var n;const e=t.$firebaseApp;t.vueApp.use(DU,{firebaseApp:e}),(n=t.payload)!=null&&n.vuefire&&xp(t.payload.vuefire,e)}),MU=mn({name:"nuxt:chunk-reload",setup(t){const e=gs(),n=yc(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href.startsWith("#")?n.app.baseURL+i.href:Xo(n.app.baseURL,i.fullPath);cD({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),LU=[uD,hD,dD,Ix,Ax,Cx,Sx,Hx,qx,xU,MU],VU=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),bf=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&VU(t.route,n));return typeof r=="function"?r(t.route):r},FU=(t,e)=>({default:()=>t?Lt(jA,t===!0?{}:t,e):e}),UU=Ln({name:"RouteProvider",props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s]});return Yr(ga,zo(r)),()=>Lt(t.vnode,{ref:t.vnodeRef})}}),I0=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?Lt(t,e,n):(r=n.default)==null?void 0:r.call(n)}}),BU=Ln({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,expose:n}){const r=Pe(),s=Je(),i=ht(ga,null);n({pageRef:s});const o=ht(Pw,null);let a;const l=r.deferHydration();return()=>Lt(jw,{name:t.name,route:t.route,...e},{default:c=>{const u=jU(i,c.route,c.Component),h=i&&i.matched.length===c.route.matched.length;if(!c.Component)return a&&!h?a:void 0;if(a&&o&&!o.isCurrent(c.route))return a;if(u&&i&&(!o||o!=null&&o.isCurrent(i)))return h?a:null;const f=bf(c,t.pageKey),d=!!(t.transition??c.route.meta.pageTransition??Jh),p=d&&HU([t.transition,c.route.meta.pageTransition,Jh,{onAfterLeave:()=>{r.callHook("page:transition:finish",c.Component)}}].filter(Boolean));return a=I0(mc,d&&p,FU(t.keepalive??c.route.meta.keepalive??sD,Lt($f,{suspensible:!0,onPending:()=>r.callHook("page:start",c.Component),onResolve:()=>{cs(()=>r.callHook("page:finish",c.Component).finally(l))}},{default:()=>Lt(UU,{key:f,vnode:c.Component,route:c.route,renderKey:f,trackRootNodes:d,vnodeRef:s})}))).default(),a}})}});function $U(t){return Array.isArray(t)?t:t?[t]:[]}function HU(t){const e=t.map(n=>({...n,onAfterLeave:$U(n.onAfterLeave)}));return k1(...e)}function jU(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&bf({route:e,Component:n})!==bf({route:t,Component:n})}const WU=Ln({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:n}){const r=Je(!1);return Yo(()=>{r.value=!0}),s=>{var l;if(r.value)return(l=e.default)==null?void 0:l.call(e);const i=e.fallback||e.placeholder;if(i)return i();const o=s.fallback||s.placeholder||"",a=s.fallbackTag||s.placeholderTag||"span";return gb(a,n,o)}}}),qU=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},KU=W1({props:{options:{type:Object,required:!1,default:()=>({})},tag:{type:String,required:!1,default:"div"},watchOptions:{type:Boolean,required:!1,default:!1}},computed:{handlers(){return["scroll","ps-scroll-y","ps-scroll-x","ps-scroll-up","ps-scroll-down","ps-scroll-left","ps-scroll-right","ps-y-reach-start","ps-y-reach-end","ps-x-reach-start","ps-x-reach-end"].reduce((e,n)=>(e[n]=(...r)=>this.$emit(n,...r),e),{})}}},"$5GjKioyWkT");function zU(t,e,n,r,s,i){const o=YA("perfect-scrollbar"),a=WU;return qt(),nn(a,null,{fallback:dr(()=>[(qt(),nn(cv(t.tag),Ay(zf(t.$attrs)),{default:dr(()=>[Jp(t.$slots,"default")]),_:3},16))]),default:dr(()=>[Ue(o,Yf({ref:"el",tag:t.tag,options:t.options,"watch-options":t.watchOptions},t.$attrs,QA(t.handlers)),{default:dr(()=>[Jp(t.$slots,"default")]),_:3},16,["tag","options","watch-options"])]),_:3})}const A0=qU(KU,[["render",zU]]),GU=Object.freeze(Object.defineProperty({__proto__:null,default:A0},Symbol.toStringTag,{value:"Module"})),YU=Ln({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await Wr[t.name]().then(r=>r.default||r);return()=>Lt(n,t.layoutProps,e.slots)}}),QU=Ln({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const n=Pe(),r=ht(ga),s=r===Xc()?mx():r,i=Kt(()=>Ce(t.name)??s.meta.layout??"default"),o=Je();e.expose({layoutRef:o});const a=n.deferHydration();return()=>{const l=i.value&&i.value in Wr,c=s.meta.layoutTransition??rD;return I0(mc,l&&c,{default:()=>Lt($f,{suspensible:!0,onResolve:()=>{cs(a)}},{default:()=>Lt(XU,{layoutProps:Yf(e.attrs,{ref:o}),key:i.value,name:i.value,shouldProvide:!t.name,hasTransition:!!c},e.slots)})}).default()}}}),XU=Ln({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&Yr(Pw,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Wr)?(s=(r=e.slots).default)==null?void 0:s.call(r):Lt(YU,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}});var b0=(t=>(t.newOrder="new-order",t.home="home",t.getOrder="get-order",t))(b0||{});const b2=()=>sp("orderId",()=>""),R2=()=>sp("showPanel",()=>!1),JU=()=>sp("orderType",()=>"home"),ZU="AppInfo",e2=()=>{const t=OU(),e=kO(t,ZU,"1");return NU(e)},t2=Ln({__name:"app",setup(t){const e=JU();return e2(),Yo(()=>{window.addEventListener("beforeunload",n=>{n.preventDefault(),n.returnValue=""})}),(n,r)=>{const s=BU,i=A0,o=QU;return qt(),nn(o,{class:"layout-container"},{default:dr(()=>[Ue(i,{id:"layout-content",class:Ko({"without-footer":Ce(e)==("ORDER_TYPES"in n?n.ORDER_TYPES:Ce(b0)).home})},{default:dr(()=>[Ue(s)]),_:1},8,["class"])]),_:1})}}});const n2={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;(n.stack||"").split(`
`).splice(1).map(h=>({text:h.replace("webpack:/","").replace(".vue",".js").trim(),internal:h.includes("node_modules")&&!h.includes(".cache")||h.includes("internal")||h.includes("new Promise")})).map(h=>`<span class="stack${h.internal?" internal":""}">${h.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,u=s?nh(()=>Uo(()=>import("./error-404.5e940193.js"),["./error-404.5e940193.js","./error-404.7fc72018.css"],import.meta.url).then(h=>h.default||h)):nh(()=>Uo(()=>import("./error-500.005c2131.js"),["./error-500.005c2131.js","./error-500.c5df6088.css"],import.meta.url).then(h=>h.default||h));return(h,f)=>(qt(),nn(Ce(u),Ay(zf({statusCode:Ce(r),statusMessage:Ce(i),description:Ce(o),stack:Ce(a)})),null,16))}},r2=n2,s2={__name:"nuxt-root",setup(t){const e=()=>null,n=Pe(),r=n.deferHydration(),s=!1;Yr(ga,Xc()),n.hooks.callHookWith(a=>a.map(l=>l()),"vue:setup");const i=Jc();av((a,l,c)=>{if(n.hooks.callHook("vue:error",a,l,c).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),F1(a)&&(a.fatal||a.unhandled))return n.runWithContext(()=>Ds(a)),!1});const o=!1;return(a,l)=>(qt(),nn($f,{onResolve:Ce(r)},{default:dr(()=>[Ce(i)?(qt(),nn(Ce(r2),{key:0,error:Ce(i)},null,8,["error"])):Ce(o)?(qt(),nn(Ce(e),{key:1,context:Ce(o)},null,8,["context"])):Ce(s)?(qt(),nn(cv(Ce(s)),{key:2})):(qt(),nn(Ce(t2),{key:3}))]),_:1},8,["onResolve"]))}},_y=s2;globalThis.$fetch||(globalThis.$fetch=KR.create({baseURL:GR()}));let yy;{let t;yy=async function(){var i,o;if(t)return t;const r=!!((i=window.__NUXT__)!=null&&i.serverRendered||((o=document.getElementById("__NUXT_DATA__"))==null?void 0:o.dataset.ssr)==="true")?tR(_y):eR(_y),s=aC({vueApp:r});try{await cC(s,LU)}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(iD),await s.hooks.callHook("app:mounted",r),await cs()}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}return r},t=yy().catch(e=>{console.error("Error while mounting app:",e)})}export{zO as $,o2 as A,a2 as B,b2 as C,JU as D,yr as E,Ce as F,l2 as G,h2 as H,Xe as I,d2 as J,Ko as K,u2 as L,Dt as M,c2 as N,b0 as O,nn as P,Xc as Q,R2 as R,f2 as S,A0 as T,e2 as U,Jp as V,OU as W,y2 as X,A2 as Y,kO as Z,qU as _,U1 as a,v2 as a0,E2 as a1,sp as a2,T2 as a3,NU as a4,vw as a5,jm as b,Kt as c,Ln as d,dc as e,I2 as f,Lt as g,Qo as h,YA as i,_R as j,Dv as k,Pe as l,C1 as m,w2 as n,Yo as o,_c as p,qt as q,Je as r,gb as s,bv as t,gs as u,i2 as v,fh as w,Ue as x,dr as y,Rv as z};
