import{a as j,t as Z}from"../chunks/disclose-version.BvcpX-oJ.js";import"../chunks/legacy.BI8BHjgl.js";import{i as _e,j as me,k as z,o as q,M as be,S as ge,_ as ne,a1 as xe,a2 as Q,s as B,p as O,a3 as H,a4 as le,I as oe,a5 as pe,K as $,a6 as ye,a7 as we,Z as Ee,a8 as ke,J as Ae,q as Ie,W as ze,P as Te,D as Me,a9 as ee,aa as Se,ab as Le,ac as Ce,m as De,ad as Ne,ae as Oe,af as Re,b as He,ag as Pe,t as Ve,y as w,v as We,w as re,x as Ye,E as M,g as E,$ as Je,n as ae,ah as R,z as k,A as x}from"../chunks/runtime.CqPVqPrB.js";import{a as je,l as qe,e as G,s as S}from"../chunks/render.TOwtjt4w.js";import{h as Be}from"../chunks/svelte-head.C2C_H7xE.js";import{i as Ge}from"../chunks/lifecycle.C02_eioS.js";import{o as Ke}from"../chunks/index-client.BXYwvlxb.js";function Ue(e,r){return r}function Xe(e,r,a,l){for(var t=[],n=r.length,i=0;i<n;i++)we(r[i].e,t,!0);var u=n>0&&t.length===0&&a!==null;if(u){var h=a.parentNode;Ee(h),h.append(a),l.clear(),L(e,r[0].prev,r[n-1].next)}ke(t,()=>{for(var v=0;v<n;v++){var b=r[v];u||(l.delete(b.k),L(e,b.prev,b.next)),Ae(b.e,!u)}})}function Ze(e,r,a,l,t,n=null){var i=e,u={flags:r,items:new Map,first:null};{var h=e;i=z?q(Ie(h)):h.appendChild(_e())}z&&be();var v=null,b=!1;me(()=>{var s=a(),c=ge(s)?s:s==null?[]:ne(s),o=c.length;if(b&&o===0)return;b=o===0;let f=!1;if(z){var _=i.data===xe;_!==(o===0)&&(i=Q(),q(i),B(!1),f=!0)}if(z){for(var p=null,A,d=0;d<o;d++){if(O.nodeType===8&&O.data===ze){i=O,f=!0,B(!1);break}var g=c[d],m=l(g,d);A=ie(O,u,p,null,g,m,d,t,r),u.items.set(m,A),p=A}o>0&&q(Q())}if(!z){var y=Te;Fe(c,u,i,t,r,(y.f&H)!==0,l)}n!==null&&(o===0?v?le(v):v=oe(()=>n(i)):v!==null&&pe(v,()=>{v=null})),f&&B(!0),a()}),z&&(i=O)}function Fe(e,r,a,l,t,n,i,u){var h=e.length,v=r.items,b=r.first,s=b,c,o=null,f=[],_=[],p,A,d,g;for(g=0;g<h;g+=1){if(p=e[g],A=i(p,g),d=v.get(A),d===void 0){var m=s?s.e.nodes_start:a;o=ie(m,r,o,o===null?r.first:o.next,p,A,g,l,t),v.set(A,o),f=[],_=[],s=o.next;continue}if(Qe(d,p,g),d.e.f&H&&le(d.e),d!==s){if(c!==void 0&&c.has(d)){if(f.length<_.length){var y=_[0],I;o=y.prev;var T=f[0],C=f[f.length-1];for(I=0;I<f.length;I+=1)te(f[I],y,a);for(I=0;I<_.length;I+=1)c.delete(_[I]);L(r,T.prev,C.next),L(r,o,T),L(r,C,y),s=y,o=C,g-=1,f=[],_=[]}else c.delete(d),te(d,s,a),L(r,d.prev,d.next),L(r,d,o===null?r.first:o.next),L(r,o,d),o=d;continue}for(f=[],_=[];s!==null&&s.k!==A;)(n||!(s.e.f&H))&&(c??(c=new Set)).add(s),_.push(s),s=s.next;if(s===null)continue;d=s}f.push(d),o=d,s=d.next}if(s!==null||c!==void 0){for(var D=c===void 0?[]:ne(c);s!==null;)(n||!(s.e.f&H))&&D.push(s),s=s.next;var P=D.length;if(P>0){var N=h===0?a:null;Xe(r,D,N,v)}}$.first=r.first&&r.first.e,$.last=o&&o.e}function Qe(e,r,a,l){ye(e.v,r),e.i=a}function ie(e,r,a,l,t,n,i,u,h,v){var b=(h&Le)!==0,s=(h&Ce)===0,c=b?s?Me(t):ee(t):t,o=h&Se?ee(i):i,f={i:o,v:c,k:n,a:null,e:null,prev:a,next:l};try{return f.e=oe(()=>u(e,c,o),z),f.e.prev=a&&a.e,f.e.next=l&&l.e,a===null?r.first=f:(a.next=f,a.e.next=f.e),l!==null&&(l.prev=f,l.e.prev=f.e),f}finally{}}function te(e,r,a){for(var l=e.next?e.next.e.nodes_start:a,t=r?r.e.nodes_start:a,n=e.e.nodes_start;n!==l;){var i=De(n);t.before(n),n=i}}function L(e,r,a){r===null?e.first=a:(r.next=a,r.e.next=a&&a.e),a!==null&&(a.prev=r,a.e.prev=r&&r.e)}function $e(e){if(z){var r=!1,a=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var l=e.value;se(e,"value",null),e.value=l}if(e.hasAttribute("checked")){var t=e.checked;se(e,"checked",null),e.checked=t}}};e.__on_r=a,Ne(a),je()}}function se(e,r,a,l){var t=e.__attributes??(e.__attributes={});z&&(t[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||t[r]!==(t[r]=a)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[Oe]=a),e.removeAttribute(r))}function K(e,r,a){if(a){if(e.classList.contains(r))return;e.classList.add(r)}else{if(!e.classList.contains(r))return;e.classList.remove(r)}}function er(e,r,a=r){var l=Re();qe(e,"input",t=>{var n=t?e.defaultValue:e.value;if(n=U(e)?X(n):n,a(n),l&&n!==(n=r())){var i=e.selectionStart,u=e.selectionEnd;e.value=n??"",u!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(u,e.value.length))}}),(z&&e.defaultValue!==e.value||He(r)==null&&e.value)&&a(U(e)?X(e.value):e.value),Pe(()=>{var t=r();U(e)&&t===X(e.value)||e.type==="date"&&!t&&!e.value||t!==e.value&&(e.value=t??"")})}function U(e){var r=e.type;return r==="number"||r==="range"}function X(e){return e===""?null:+e}function rr(e,r){let a=[];const l=e.trim().toLowerCase();for(const t of r){if(t[0].includes(l)){a.push(t);continue}const i=t[1],u=Object.values(i);for(const h of u)if(h.includes(l)){a.push(t);break}}return a}var ar=Z('<meta name="description" content="Examples of Persian words, romanized according to different standards"> <meta name="twitter:title" content="Persian romanization examples">',1),tr=Z('<tr><td lang="ar" class="border-r border-gray-400 px-3 py-2 text-center font-persian text-2xl"> </td><td class="border-r border-gray-400 px-3"> </td><td class="border-r border-gray-400 px-3"> </td><td class="border-r border-gray-400 px-3"> </td><td class="border-r border-gray-400 px-3"> </td><td class="border-r border-gray-400 px-3"> </td><td class="px-3"> </td></tr>'),sr=Z(`<h1 class="mb-4 text-3xl">Persian romanization examples</h1> <p class="mb-4 text-lg"><em>Loading words…</em></p> <div><p class="mb-3 text-lg">In total, there are <code class="text-rose-700"> </code> words so far. You can search
		for specific patterns below.</p> <img src="/rmnz/search-icon.svg" alt="Magnifying glass icon" height="20" width="20" class="pointer-events-none absolute ml-2.5 mt-2.5"><input id="search-box" class="mb-6 w-80 rounded border border-solid border-gray-400 py-1 pl-9 pr-8 text-lg placeholder-gray-500" placeholder="Search words"><button><img src="/rmnz/cancel.svg" alt="Cancel search" height="20" width="20" class="absolute -ml-7 -mt-4"></button> <table class="table-auto divide-y-2 divide-gray-400 text-lg"><thead class="bg-blue-300/25 text-xl"><tr><th class="border-r border-gray-400 px-3 py-2 font-normal">Orig.</th><th class="border-r border-gray-400 px-3 font-normal text-blue-700 anyfine:hover:underline"><a href="/rmnz/docs/dmg.pdf">DMG</a></th><th class="border-r border-gray-400 px-3 font-normal text-blue-700 anyfine:hover:underline"><a href="/rmnz/docs/eir.pdf">EIr</a></th><th class="border-r border-gray-400 px-3 font-normal text-blue-700 anyfine:hover:underline"><a href="/rmnz/docs/ijmes-full.pdf">IJMES</a></th><th class="border-r border-gray-400 px-3 font-normal text-blue-700 anyfine:hover:underline"><a href="/rmnz/ijmes-d">IJMES-D</a></th><th class="border-r border-gray-400 px-3 font-normal text-blue-700 anyfine:hover:underline"><a href="/rmnz/docs/is.pdf">IS</a></th><th class="px-3 font-normal text-blue-700 anyfine:hover:underline"><a href="/rmnz/docs/loc.pdf">LOC</a></th></tr></thead><tbody class="divide-y divide-gray-400"></tbody></table></div>`,1);function vr(e,r){Ve(r,!1);let a=R([]),l=R([]),t=R(!1),n=R(""),i=R(!1);function u(m){m.key==="Enter"&&(M(i,!0),M(l,rr(E(n),E(a))))}function h(){M(n,""),M(i,!1),M(l,E(a))}Ke(async()=>{const y=await(await fetch("/rmnz/words.json")).json();M(a,Object.entries(y)),M(l,E(a)),M(t,!0)}),Ge();var v=sr();Be(m=>{var y=ar();Je.title="Persian romanization examples",ae(2),j(m,y)});var b=w(We(v),2),s=w(b,2),c=k(s),o=w(k(c)),f=k(o,!0);x(o),ae(),x(c);var _=w(c,3);$e(_);var p=w(_),A=k(p);x(p);var d=w(p,2),g=w(k(d));Ze(g,5,()=>E(l),Ue,(m,y)=>{let I=()=>E(y)[0],T=()=>E(y)[1];var C=tr(),D=k(C),P=k(D,!0);x(D);var N=w(D),de=k(N,!0);x(N);var V=w(N),fe=k(V,!0);x(V);var W=w(V),ce=k(W,!0);x(W);var Y=w(W),ve=k(Y,!0);x(Y);var J=w(Y),ue=k(J,!0);x(J);var F=w(J),he=k(F,!0);x(F),x(C),re(()=>{S(P,I()),S(de,T().dmg),S(fe,T().eir),S(ce,T().ijmes),S(ve,T().ijmesD),S(ue,T().is),S(he,T().loc)}),j(m,C)}),x(g),x(d),x(s),re(()=>{K(b,"hidden",E(t)),K(s,"hidden",!E(t)),S(f,E(a).length),_.readOnly=E(i),K(A,"hidden",!E(i))}),er(_,()=>E(n),m=>M(n,m)),G("keydown",_,u),G("click",p,h),G("keydown",p,m=>{m.key==="Enter"&&h()}),j(e,v),Ye()}export{vr as component};
