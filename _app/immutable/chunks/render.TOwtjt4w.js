import{N as m,O as E,P as D,K as R,C as Y,Q as q,R as C,S as H,U as L,q as B,l as $,m as j,V as T,s as w,o as P,M as K,p,W as Q,X as U,Y as X,Z,_ as x,a0 as z,i as F,I as G,t as J,k as S,x as rr,c as er}from"./runtime.CqPVqPrB.js";import{r as tr}from"./svelte-head.C2C_H7xE.js";import{b as ar}from"./disclose-version.BvcpX-oJ.js";const nr=["touchstart","touchmove"];function sr(r){return nr.includes(r)}let k=!1;function ir(){k||(k=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var e;if(!r.defaultPrevented)for(const a of r.target.elements)(e=a.__on_r)==null||e.call(a)})},{capture:!0}))}function I(r){var e=D,a=R;m(null),E(null);try{return r()}finally{m(e),E(a)}}function dr(r,e,a,i=a){r.addEventListener(e,()=>I(a));const n=r.__on_r;n?r.__on_r=()=>{n(),i(!0)}:r.__on_r=()=>i(!0),ir()}const or=new Set,A=new Set;function ur(r,e,a,i){function n(t){if(i.capture||y.call(e,t),!t.cancelBubble)return I(()=>a.call(this,t))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?q(()=>{e.addEventListener(r,n,i)}):e.addEventListener(r,n,i),n}function hr(r,e,a,i,n){var t={capture:i,passive:n},u=ur(r,e,a,t);(e===document.body||e===window||e===document)&&Y(()=>{e.removeEventListener(r,u,t)})}function y(r){var O;var e=this,a=e.ownerDocument,i=r.type,n=((O=r.composedPath)==null?void 0:O.call(r))||[],t=n[0]||r.target,u=0,d=r.__root;if(d){var c=n.indexOf(d);if(c!==-1&&(e===document||e===window)){r.__root=e;return}var h=n.indexOf(e);if(h===-1)return;c<=h&&(u=c)}if(t=n[u]||r.target,t!==e){C(r,"currentTarget",{configurable:!0,get(){return t||a}});var b=D,f=R;m(null),E(null);try{for(var s,o=[];t!==null;){var l=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+i];if(_!==void 0&&!t.disabled)if(H(_)){var[M,...W]=_;M.apply(t,[r,...W])}else _.call(t,r)}catch(g){s?o.push(g):s=g}if(r.cancelBubble||l===e||l===null)break;t=l}if(s){for(let g of o)queueMicrotask(()=>{throw g});throw s}}finally{r.__root=e,delete r.currentTarget,m(b),E(f)}}}function vr(r,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a==null?"":a+"")}function fr(r,e){return V(r,e)}function pr(r,e){L(),e.intro=e.intro??!1;const a=e.target,i=S,n=p;try{for(var t=B(a);t&&(t.nodeType!==8||t.data!==$);)t=j(t);if(!t)throw T;w(!0),P(t),K();const u=V(r,{...e,anchor:t});if(p===null||p.nodeType!==8||p.data!==Q)throw U(),T;return w(!1),u}catch(u){if(u===T)return e.recover===!1&&X(),L(),Z(a),w(!1),fr(r,e);throw u}finally{w(i),P(n),tr()}}const v=new Map;function V(r,{target:e,anchor:a,props:i={},events:n,context:t,intro:u=!0}){L();var d=new Set,c=f=>{for(var s=0;s<f.length;s++){var o=f[s];if(!d.has(o)){d.add(o);var l=sr(o);e.addEventListener(o,y,{passive:l});var _=v.get(o);_===void 0?(document.addEventListener(o,y,{passive:l}),v.set(o,1)):v.set(o,_+1)}}};c(x(or)),A.add(c);var h=void 0,b=z(()=>{var f=a??e.appendChild(F());return G(()=>{if(t){J({});var s=er;s.c=t}n&&(i.$$events=n),S&&ar(f,null),h=r(f,i)||{},S&&(R.nodes_end=p),t&&rr()}),()=>{var l;for(var s of d){e.removeEventListener(s,y);var o=v.get(s);--o===0?(document.removeEventListener(s,y),v.delete(s)):v.set(s,o)}A.delete(c),f!==a&&((l=f.parentNode)==null||l.removeChild(f))}});return N.set(h,b),h}let N=new WeakMap;function yr(r,e){const a=N.get(r);return a?(N.delete(r),a(e)):Promise.resolve()}export{ir as a,hr as e,pr as h,dr as l,fr as m,vr as s,yr as u};
