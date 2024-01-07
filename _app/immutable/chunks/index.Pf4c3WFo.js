import{r as h,n as p,h as v,i as E,j as b,k as S,l as w,m as C,p as T,q as N,v as j,w as B,x as D}from"./scheduler.V7bLW0bx.js";let $=!1;function H(){$=!0}function L(){$=!1}function I(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function P(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let l=0;l<t.length;l++){const o=t[l];o.claim_order!==void 0&&s.push(o)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const l=t[s].claim_order,o=(r>0&&t[n[r]].claim_order<=l?r+1:I(1,r,d=>t[n[d]].claim_order,l))-1;i[s]=n[o]+1;const u=o+1;n[u]=s,r=Math.max(u,r)}const c=[],a=[];let f=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(c.push(t[s-1]);f>=s;f--)a.push(t[f]);f--}for(;f>=0;f--)a.push(t[f]);c.reverse(),a.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<a.length;s++){for(;l<c.length&&a[s].claim_order>=c[l].claim_order;)l++;const o=l<c.length?c[l]:null;e.insertBefore(a[s],o)}}function q(e,t){if($){for(P(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function X(e,t,n){$&&!n?q(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function M(e){e.parentNode&&e.parentNode.removeChild(e)}function Y(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function O(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function Z(){return y(" ")}function k(){return y("")}function ee(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function te(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ne(e){return e.dataset.svelteH}function R(e){return Array.from(e.childNodes)}function z(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function A(e,t,n,i,r=!1){z(e);const c=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const f=e[a];if(t(f)){const s=n(f);return s===void 0?e.splice(a,1):e[a]=s,r||(e.claim_info.last_index=a),f}}for(let a=e.claim_info.last_index-1;a>=0;a--){const f=e[a];if(t(f)){const s=n(f);return s===void 0?e.splice(a,1):e[a]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,f}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function U(e,t,n,i){return A(e,r=>r.nodeName===t,r=>{const c=[];for(let a=0;a<r.attributes.length;a++){const f=r.attributes[a];n[f.name]||c.push(f.name)}c.forEach(a=>r.removeAttribute(a))},()=>i(t))}function ie(e,t,n){return U(e,t,n,O)}function V(e,t){return A(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>y(t),!0)}function re(e){return V(e," ")}function se(e,t){t=""+t,e.data!==t&&(e.data=t)}function le(e,t){e.value=t??""}function ae(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function ce(e,t,n){e.classList.toggle(t,!!n)}function fe(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${e}_END`?(i-=1,n.push(r)):c===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ue(e,t){return new e(t)}const m=new Set;let _;function oe(){_={r:0,c:[],p:_}}function _e(){_.r||h(_.c),_=_.p}function W(e,t){e&&e.i&&(m.delete(e),e.i(t))}function de(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function me(e){e&&e.c()}function he(e,t){e&&e.l(t)}function F(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),w(()=>{const c=e.$$.on_mount.map(j).filter(b);e.$$.on_destroy?e.$$.on_destroy.push(...c):h(c),e.$$.on_mount=[]}),r.forEach(w)}function G(e,t){const n=e.$$;n.fragment!==null&&(C(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function J(e,t){e.$$.dirty[0]===-1&&(B.push(e),D(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function $e(e,t,n,i,r,c,a=null,f=[-1]){const s=T;N(e);const l=e.$$={fragment:null,ctx:[],props:c,update:p,not_equal:r,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:v(),dirty:f,skip_bound:!1,root:t.target||s.$$.root};a&&a(l.root);let o=!1;if(l.ctx=n?n(e,t.props||{},(u,d,...x)=>{const g=x.length?x[0]:d;return l.ctx&&r(l.ctx[u],l.ctx[u]=g)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](g),o&&J(e,u)),d}):[],l.update(),o=!0,h(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){H();const u=R(t.target);l.fragment&&l.fragment.l(u),u.forEach(M)}else l.fragment&&l.fragment.c();t.intro&&W(e.$$.fragment),F(e,t.target,t.anchor),L(),E()}N(s)}class pe{$$=void 0;$$set=void 0;$destroy(){G(this,1),this.$destroy=p}$on(t,n){if(!b(n))return p;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!S(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const K="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(K);export{ce as A,le as B,ee as C,Y as D,pe as S,X as a,_e as b,re as c,W as d,k as e,M as f,O as g,ie as h,$e as i,R as j,te as k,ae as l,y as m,V as n,se as o,oe as p,ue as q,me as r,Z as s,de as t,he as u,F as v,G as w,q as x,fe as y,ne as z};
