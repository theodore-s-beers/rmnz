var qn=Array.isArray,Pn=Array.from,Fn=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyDescriptors,Ln=Object.prototype,Mn=Array.prototype,Jt=Object.getPrototypeOf;const Yn=()=>{};function jn(t){return t()}function yt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,wt=4,j=8,ut=16,m=32,W=64,nt=128,D=256,G=512,h=1024,k=2048,H=4096,b=8192,q=16384,Qt=32768,Tt=65536,Hn=1<<17,tn=1<<19,mt=1<<20,pt=Symbol("$state"),Bn=Symbol("legacy props"),Un=Symbol("");function At(t){return t===this.v}function nn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function gt(t){return!nn(t,this.v)}function rn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function en(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function ln(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Vn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Gn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function $n(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Kn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function un(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function Zn(){X=!0}const zn=1,Wn=2,Xn=16,Jn=1,Qn=2,tr=4,nr=8,rr=16,er=1,sr=2,on="[",fn="[!",_n="]",kt={},lr=Symbol();function ot(t,n){var r={f:0,v:t,reactions:null,equals:At,version:0};return r}function ar(t){return Rt(ot(t))}function cn(t,n=!1){var e;const r=ot(t);return n||(r.equals=gt),X&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function ur(t,n=!1){return Rt(cn(t,n))}function Rt(t){return o!==null&&o.f&y&&(T===null?xn([t]):T.push(t)),t}function or(t,n){return o!==null&&_t()&&o.f&(y|ut)&&(T===null||!T.includes(t))&&un(),vn(t,n)}function vn(t,n){return t.equals(n)||(t.v=n,t.version=Gt(),xt(t,k),_t()&&u!==null&&u.f&h&&!(u.f&m)&&(v!==null&&v.includes(t)?(A(u,k),tt(u)):g===null?Sn([t]):g.push(t))),n}function xt(t,n){var r=t.reactions;if(r!==null)for(var e=_t(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&k||!e&&a===u||(A(a,n),i&(h|D)&&(i&y?xt(a,H):tt(a)))}}function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let x=!1;function ir(t){x=t}let w;function F(t){if(t===null)throw St(),kt;return w=t}function fr(){return F(I(w))}function _r(t){if(x){if(I(w)!==null)throw St(),kt;w=t}}function cr(t=1){if(x){for(var n=t,r=w;n--;)r=I(r);w=r}}function vr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===_n){if(t===0)return n;t-=1}else(r===on||r===fn)&&(t+=1)}var e=I(n);n.remove(),n=e}}var ht,pn,Dt,It;function pr(){if(ht===void 0){ht=window,pn=document;var t=Element.prototype,n=Node.prototype;Dt=vt(n,"firstChild").get,It=vt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Dt.call(t)}function I(t){return It.call(t)}function hr(t,n){if(!x)return et(t);var r=et(w);if(r===null)r=w.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),F(e),e}return F(r),r}function dr(t,n){if(!x){var r=et(t);return r instanceof Comment&&r.data===""?I(r):r}return w}function Er(t,n=1,r=!1){let e=x?w:t;for(var s;n--;)s=e,e=I(e);if(!x)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=rt();return e===null?s==null||s.after(a):e.before(a),F(a),a}return F(e),e}function yr(t){t.textContent=""}function hn(t){var n=y|k;u===null?n|=D:u.f|=mt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:At,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function wr(t){const n=hn(t);return n.equals=gt,n}function Ot(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?it(e):S(e)}}}function dn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ct(t){var n,r=u;z(dn(t));try{Ot(t),n=$t(t)}finally{z(r)}return n}function Nt(t){var n=Ct(t),r=(O||t.f&D)&&t.deps!==null?H:h;A(t,r),t.equals(n)||(t.v=n,t.version=Gt())}function it(t){Ot(t),Y(t,0),A(t,q),t.v=t.children=t.deps=t.ctx=t.reactions=null}function bt(t){u===null&&o===null&&sn(),o!==null&&o.f&D&&en(),ft&&rn()}function En(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&W)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=C;try{dt(!0),Q(a),a.f|=Qt}catch(_){throw S(a),_}finally{dt(i)}}else n!==null&&tt(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&mt)===0;if(!p&&!s&&e&&(l!==null&&En(a,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function Tr(t){const n=P(j,null,!1);return A(n,h),n.teardown=t,n}function mr(t){bt();var n=u!==null&&(u.f&m)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=qt(t);return e}}function Ar(t){return bt(),yn(t)}function gr(t){const n=P(W,t,!0);return(r={})=>new Promise(e=>{r.outro?mn(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function qt(t){return P(wt,t,!1)}function yn(t){return P(j,t,!0)}function kr(t){return wn(t)}function wn(t,n=0){return P(j|ut|n,t,!0)}function Rr(t,n=!0){return P(j|m,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=ft,e=o;Et(!0),Z(null);try{n.call(null)}finally{Et(r),Z(e)}}}function Ft(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)it(n[r])}}function Lt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;S(r,n),r=e}}function Tn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||S(n),n=r}}function S(t,n=!0){var r=!1;if((n||t.f&tn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:I(e);e.remove(),e=l}r=!0}Lt(t,n&&!r),Ft(t),Y(t,0),A(t,q);var a=t.transitions;if(a!==null)for(const p of a)p.stop();Pt(t);var i=t.parent;i!==null&&i.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function mn(t,n){var r=[];Yt(t,r,!0),An(r,()=>{S(t),n&&n()})}function An(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Yt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&Tt)!==0||(e.f&m)!==0;Yt(e,n,l?r:!1),e=s}}}function xr(t){jt(t,!0)}function jt(t,n){if(t.f&b){B(t)&&Q(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&Tt)!==0||(r.f&m)!==0;jt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const gn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let $=!1,K=!1,st=[],lt=[];function Ht(){$=!1;const t=st.slice();st=[],yt(t)}function Bt(){K=!1;const t=lt.slice();lt=[],yt(t)}function Sr(t){$||($=!0,queueMicrotask(Ht)),st.push(t)}function Dr(t){K||(K=!0,gn(Bt)),lt.push(t)}function kn(){$&&Ht(),K&&Bt()}const Ut=0,Rn=1;let U=!1,V=Ut,L=!1,M=null,C=!1,ft=!1;function dt(t){C=t}function Et(t){ft=t}let R=[],N=0;let o=null;function Z(t){o=t}let u=null;function z(t){u=t}let T=null;function xn(t){T=t}let v=null,E=0,g=null;function Sn(t){g=t}let Vt=0,O=!1,f=null;function Gt(){return++Vt}function _t(){return!X||f!==null&&f.l===null}function B(t){var a,i;var n=t.f;if(n&k)return!0;if(n&H){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&G){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=G}for(s=0;s<r.length;s++){var l=r[s];if(B(l)&&Nt(l),e&&u!==null&&!O&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||A(t,h)}return!1}function Dn(t,n){for(var r=n;r!==null;){if(r.f&nt)try{r.fn(t);return}catch{r.f^=nt}r=r.parent}throw U=!1,t}function In(t){return(t.f&q)===0&&(t.parent===null||(t.parent.f&nt)===0)}function J(t,n,r,e){if(U){if(r===null&&(U=!1),In(n))throw t;return}r!==null&&(U=!0);{Dn(t,n);return}}function $t(t){var ct;var n=v,r=E,e=g,s=o,l=O,a=T,i=f,p=t.f;v=null,E=0,g=null,o=p&(m|W)?null:t,O=!C&&(p&D)!==0,T=null,f=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(Y(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!O)for(c=E;c<_.length;c++)((ct=_[c]).reactions??(ct.reactions=[])).push(t)}else _!==null&&E<_.length&&(Y(t,E),_.length=E);return d}finally{v=n,E=r,g=e,o=s,O=l,T=a,f=i}}function On(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(A(n,H),n.f&(D|G)||(n.f^=G),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)On(t,r[e])}function Q(t){var n=t.f;if(!(n&q)){A(t,h);var r=u,e=f;u=t;try{n&ut?Tn(t):Lt(t),Ft(t),Pt(t);var s=$t(t);t.teardown=typeof s=="function"?s:null,t.version=Vt}catch(l){J(l,t,r,e||t.ctx)}finally{u=r}}}function Kt(){if(N>1e3){N=0;try{ln()}catch(t){if(M!==null)J(t,M,null);else throw t}}N++}function Zt(t){var n=t.length;if(n!==0){Kt();var r=C;C=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];zt(s,l),Cn(l)}}finally{C=r}}}function Cn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(q|b)))try{B(e)&&(Q(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(s){J(s,e,null,e.ctx)}}}function Nn(){if(L=!1,N>1001)return;const t=R;R=[],Zt(t),L||(N=0,M=null)}function tt(t){V===Ut&&(L||(L=!0,queueMicrotask(Nn))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|m)){if(!(r&h))return;n.f^=h}}R.push(n)}function zt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&m)!==0,a=l&&(s&h)!==0,i=r.next;if(!a&&!(s&b))if(s&j){if(l)r.f^=h;else try{B(r)&&Q(r)}catch(c){J(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&wt&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],n.push(p),zt(p,n)}function Wt(t){var n=V,r=R;try{Kt();const s=[];V=Rn,R=s,L=!1,Zt(r);var e=t==null?void 0:t();return kn(),(R.length>0||s.length>0)&&Wt(),N=0,M=null,e}finally{V=n,R=r}}async function Ir(){await Promise.resolve(),Wt()}function Or(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&q){var e=Ct(t);return it(t),e}if(o!==null){T!==null&&T.includes(t)&&an();var s=o.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),g!==null&&u!==null&&u.f&h&&!(u.f&m)&&g.includes(t)&&(A(u,k),tt(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,i=l;a!==null;)if(a.f&y){var p=a;i=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(l=t,B(l)&&Nt(l)),t.v}function Cr(t){const n=o;try{return o=null,t()}finally{o=n}}const bn=~(k|H|h);function A(t,n){t.f=t.f&bn|n}function Nr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(f.l={s:null,u:null,r1:[],r2:ot(!1)})}function br(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];z(l.effect),Z(l.reaction),qt(l.fn)}}finally{z(r),Z(e)}}f=n.p,n.m=!0}return{}}function qr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=Jt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Xt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{pn as $,_r as A,Yn as B,Tr as C,cn as D,or as E,X as F,Tt as G,tn as H,Rr as I,S as J,u as K,sr as L,fr as M,Z as N,z as O,o as P,Sr as Q,Fn as R,qn as S,er as T,pr as U,kt as V,_n as W,St as X,Vn as Y,yr as Z,Pn as _,mr as a,gr as a0,fn as a1,vr as a2,b as a3,xr as a4,mn as a5,vn as a6,Yt as a7,An as a8,ot as a9,Bn as aA,wr as aB,rr as aC,Wt as aD,Ir as aE,ar as aF,nn as aG,Wn as aa,zn as ab,Xn as ac,Dr as ad,Un as ae,_t as af,yn as ag,ur as ah,pt as ai,Ln as aj,Mn as ak,$n as al,vt as am,lr as an,Kn as ao,Jt as ap,qt as aq,Gn as ar,Hn as as,tr as at,gt as au,m as av,W as aw,Jn as ax,Qn as ay,nr as az,Cr as b,f as c,yt as d,qr as e,hn as f,Or as g,Zn as h,rt as i,wn as j,x as k,on as l,I as m,cr as n,F as o,w as p,et as q,jn as r,ir as s,Nr as t,Ar as u,dr as v,kr as w,br as x,Er as y,hr as z};