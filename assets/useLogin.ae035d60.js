import{W as E,X as x}from"./index.962c6c21.js";const oe="/v-simple-admin/assets/vite.4a748afd.svg";var I=typeof global=="object"&&global&&global.Object===Object&&global;const z=I;var N=typeof self=="object"&&self&&self.Object===Object&&self,D=z||N||Function("return this")();const g=D;var F=g.Symbol;const c=F;var w=Object.prototype,A=w.hasOwnProperty,M=w.toString,l=c?c.toStringTag:void 0;function H(t){var e=A.call(t,l),r=t[l];try{t[l]=void 0;var n=!0}catch{}var a=M.call(t);return n&&(e?t[l]=r:delete t[l]),a}var G=Object.prototype,R=G.toString;function L(t){return R.call(t)}var U="[object Null]",K="[object Undefined]",m=c?c.toStringTag:void 0;function T(t){return t==null?t===void 0?K:U:m&&m in Object(t)?H(t):L(t)}function X(t){return t!=null&&typeof t=="object"}var J="[object Symbol]";function _(t){return typeof t=="symbol"||X(t)&&T(t)==J}function W(t,e){for(var r=-1,n=t==null?0:t.length,a=Array(n);++r<n;)a[r]=e(t[r],r,t);return a}var Y=Array.isArray;const y=Y;var Z=1/0,S=c?c.prototype:void 0,$=S?S.toString:void 0;function j(t){if(typeof t=="string")return t;if(y(t))return W(t,j)+"";if(_(t))return $?$.call(t):"";var e=t+"";return e=="0"&&1/t==-Z?"-0":e}function P(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var q="[object AsyncFunction]",V="[object Function]",B="[object GeneratorFunction]",Q="[object Proxy]";function k(t){if(!P(t))return!1;var e=T(t);return e==V||e==B||e==q||e==Q}var tt=g["__core-js_shared__"];const d=tt;var O=function(){var t=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function et(t){return!!O&&O in t}var rt=Function.prototype,nt=rt.toString;function at(t){if(t!=null){try{return nt.call(t)}catch{}try{return t+""}catch{}}return""}var ot=/[\\^$.*+?()[\]{}|]/g,st=/^\[object .+?Constructor\]$/,it=Function.prototype,ct=Object.prototype,ut=it.toString,lt=ct.hasOwnProperty,ft=RegExp("^"+ut.call(lt).replace(ot,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ht(t){if(!P(t)||et(t))return!1;var e=k(t)?ft:st;return e.test(at(t))}function pt(t,e){return t==null?void 0:t[e]}function C(t,e){var r=pt(t,e);return ht(r)?r:void 0}function dt(t,e){return t===e||t!==t&&e!==e}var gt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_t=/^\w*$/;function yt(t,e){if(y(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||_(t)?!0:_t.test(t)||!gt.test(t)||e!=null&&t in Object(e)}var bt=C(Object,"create");const f=bt;function vt(){this.__data__=f?f(null):{},this.size=0}function mt(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var St="__lodash_hash_undefined__",$t=Object.prototype,Ot=$t.hasOwnProperty;function wt(t){var e=this.__data__;if(f){var r=e[t];return r===St?void 0:r}return Ot.call(e,t)?e[t]:void 0}var Tt=Object.prototype,jt=Tt.hasOwnProperty;function Pt(t){var e=this.__data__;return f?e[t]!==void 0:jt.call(e,t)}var Ct="__lodash_hash_undefined__";function Et(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=f&&e===void 0?Ct:e,this}function s(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=vt;s.prototype.delete=mt;s.prototype.get=wt;s.prototype.has=Pt;s.prototype.set=Et;function xt(){this.__data__=[],this.size=0}function h(t,e){for(var r=t.length;r--;)if(dt(t[r][0],e))return r;return-1}var It=Array.prototype,zt=It.splice;function Nt(t){var e=this.__data__,r=h(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():zt.call(e,r,1),--this.size,!0}function Dt(t){var e=this.__data__,r=h(e,t);return r<0?void 0:e[r][1]}function Ft(t){return h(this.__data__,t)>-1}function At(t,e){var r=this.__data__,n=h(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}function u(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}u.prototype.clear=xt;u.prototype.delete=Nt;u.prototype.get=Dt;u.prototype.has=Ft;u.prototype.set=At;var Mt=C(g,"Map");const Ht=Mt;function Gt(){this.size=0,this.__data__={hash:new s,map:new(Ht||u),string:new s}}function Rt(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function p(t,e){var r=t.__data__;return Rt(e)?r[typeof e=="string"?"string":"hash"]:r.map}function Lt(t){var e=p(this,t).delete(t);return this.size-=e?1:0,e}function Ut(t){return p(this,t).get(t)}function Kt(t){return p(this,t).has(t)}function Xt(t,e){var r=p(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}function i(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}i.prototype.clear=Gt;i.prototype.delete=Lt;i.prototype.get=Ut;i.prototype.has=Kt;i.prototype.set=Xt;var Jt="Expected a function";function b(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Jt);var r=function(){var n=arguments,a=e?e.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var v=t.apply(this,n);return r.cache=o.set(a,v)||o,v};return r.cache=new(b.Cache||i),r}b.Cache=i;var Wt=500;function Yt(t){var e=b(t,function(n){return r.size===Wt&&r.clear(),n}),r=e.cache;return e}var Zt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qt=/\\(\\)?/g,Vt=Yt(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Zt,function(r,n,a,o){e.push(a?o.replace(qt,"$1"):n||r)}),e});const Bt=Vt;function Qt(t){return t==null?"":j(t)}function kt(t,e){return y(t)?t:yt(t,e)?[t]:Bt(Qt(t))}var te=1/0;function ee(t){if(typeof t=="string"||_(t))return t;var e=t+"";return e=="0"&&1/t==-te?"-0":e}function re(t,e){e=kt(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[ee(e[r++])];return r&&r==n?t:void 0}function se(t,e,r){var n=t==null?void 0:re(t,e);return n===void 0?r:n}function ie(t){return t==null}class ne extends Error{constructor(e){super(e),this.name="ElementPlusError"}}function ce(t,e){throw new ne(`[${t}] ${e}`)}function ue(t,e){}const le=t=>t,fe=()=>{const t=E(),{push:e}=x();return{login:async a=>{await t.update(a),e({name:"Dashboard"})},logout:async()=>{await t.update({username:null,password:null}),e({name:"Login"})}}};export{u as L,Ht as M,c as S,oe as _,k as a,X as b,T as c,y as d,dt as e,z as f,C as g,i as h,P as i,kt as j,ee as k,se as l,le as m,ie as n,ue as o,ce as p,g as r,at as t,fe as u};
