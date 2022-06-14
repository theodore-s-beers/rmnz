import{S as $e,i as et,s as tt,e as l,t as g,k as E,c as s,a as n,h as y,d as r,m as T,b as t,g as ee,J as e,j as V,K as rt,L as ue,M as Ke,N as Qe,O as Me,n as Fe,P as at,Q as lt,w as st}from"../chunks/index-3f3af9b4.js";function ot(h,o){let d=[];const i=h.trim().toLowerCase();for(const u of o){if(u[0].includes(i)){d.push(u);continue}const p=u[1],_=Object.values(p);for(const j of _)if(j.includes(i)){d.push(u);break}}return d}function Xe(h,o,d){const i=h.slice();return i[8]=o[d][0],i[9]=o[d][1],i}function Ze(h){let o,d,i=h[8]+"",u,L,p,_=h[9].dmg+"",j,q,S,f=h[9].eir+"",I,K,H,C=h[9].ijmes+"",B,Q,J,M=h[9].ijmesD+"",F,D,P,w=h[9].is+"",X,Z,O,k=h[9].loc+"",m,G;return{c(){o=l("tr"),d=l("td"),u=g(i),L=E(),p=l("td"),j=g(_),q=E(),S=l("td"),I=g(f),K=E(),H=l("td"),B=g(C),Q=E(),J=l("td"),F=g(M),D=E(),P=l("td"),X=g(w),Z=E(),O=l("td"),m=g(k),G=E(),this.h()},l(x){o=s(x,"TR",{});var c=n(o);d=s(c,"TD",{lang:!0,class:!0});var N=n(d);u=y(N,i),N.forEach(r),L=T(c),p=s(c,"TD",{class:!0});var R=n(p);j=y(R,_),R.forEach(r),q=T(c),S=s(c,"TD",{class:!0});var te=n(S);I=y(te,f),te.forEach(r),K=T(c),H=s(c,"TD",{class:!0});var re=n(H);B=y(re,C),re.forEach(r),Q=T(c),J=s(c,"TD",{class:!0});var W=n(J);F=y(W,M),W.forEach(r),D=T(c),P=s(c,"TD",{class:!0});var Y=n(P);X=y(Y,w),Y.forEach(r),Z=T(c),O=s(c,"TD",{class:!0});var ae=n(O);m=y(ae,k),ae.forEach(r),G=T(c),c.forEach(r),this.h()},h(){t(d,"lang","ar"),t(d,"class","border-r border-gray-400 px-3 py-2 text-center font-persian text-2xl"),t(p,"class","border-r border-gray-400 px-3"),t(S,"class","border-r border-gray-400 px-3"),t(H,"class","border-r border-gray-400 px-3"),t(J,"class","border-r border-gray-400 px-3"),t(P,"class","border-r border-gray-400 px-3"),t(O,"class","px-3")},m(x,c){ee(x,o,c),e(o,d),e(d,u),e(o,L),e(o,p),e(p,j),e(o,q),e(o,S),e(S,I),e(o,K),e(o,H),e(H,B),e(o,Q),e(o,J),e(J,F),e(o,D),e(o,P),e(P,X),e(o,Z),e(o,O),e(O,m),e(o,G)},p(x,c){c&2&&i!==(i=x[8]+"")&&V(u,i),c&2&&_!==(_=x[9].dmg+"")&&V(j,_),c&2&&f!==(f=x[9].eir+"")&&V(I,f),c&2&&C!==(C=x[9].ijmes+"")&&V(B,C),c&2&&M!==(M=x[9].ijmesD+"")&&V(F,M),c&2&&w!==(w=x[9].is+"")&&V(X,w),c&2&&k!==(k=x[9].loc+"")&&V(m,k)},d(x){x&&r(o)}}}function nt(h){let o,d,i,u,L,p,_,j,q,S,f,I,K,H,C=h[0].length+"",B,Q,J,M,F,D,P,w,X,Z,O,k,m,G,x,c,N,R,te,re,W,Y,ae,be,le,se,ve,ge,oe,ne,Ee,ye,de,ce,Te,we,he,ie,De,xe,$,ze,Oe,fe=h[1],z=[];for(let a=0;a<fe.length;a+=1)z[a]=Ze(Xe(h,fe,a));return{c(){o=l("meta"),d=l("meta"),i=E(),u=l("h1"),L=g("Persian romanization examples"),p=E(),_=l("p"),j=l("em"),q=g("Loading words\u2026"),S=E(),f=l("div"),I=l("p"),K=g("In total, there are "),H=l("code"),B=g(C),Q=g(` words so far. You
		can search for specific patterns below.`),J=E(),M=l("img"),D=l("input"),P=l("button"),w=l("img"),Z=E(),O=l("table"),k=l("thead"),m=l("tr"),G=l("th"),x=g("Orig."),c=E(),N=l("th"),R=l("a"),te=g("DMG"),re=E(),W=l("th"),Y=l("a"),ae=g("EIr"),be=E(),le=l("th"),se=l("a"),ve=g("IJMES"),ge=E(),oe=l("th"),ne=l("a"),Ee=g("IJMES-D"),ye=E(),de=l("th"),ce=l("a"),Te=g("IS"),we=E(),he=l("th"),ie=l("a"),De=g("LOC"),xe=E(),$=l("tbody");for(let a=0;a<z.length;a+=1)z[a].c();this.h()},l(a){const b=rt('[data-svelte="svelte-1oeam4c"]',document.head);o=s(b,"META",{name:!0,content:!0}),d=s(b,"META",{name:!0,content:!0}),b.forEach(r),i=T(a),u=s(a,"H1",{class:!0});var v=n(u);L=y(v,"Persian romanization examples"),v.forEach(r),p=T(a),_=s(a,"P",{class:!0});var me=n(_);j=s(me,"EM",{});var je=n(j);q=y(je,"Loading words\u2026"),je.forEach(r),me.forEach(r),S=T(a),f=s(a,"DIV",{});var U=n(f);I=s(U,"P",{class:!0});var _e=n(I);K=y(_e,"In total, there are "),H=s(_e,"CODE",{class:!0});var Ae=n(H);B=y(Ae,C),Ae.forEach(r),Q=y(_e,` words so far. You
		can search for specific patterns below.`),_e.forEach(r),J=T(U),M=s(U,"IMG",{src:!0,alt:!0,height:!0,width:!0,class:!0}),D=s(U,"INPUT",{id:!0,class:!0,placeholder:!0}),P=s(U,"BUTTON",{});var Se=n(P);w=s(Se,"IMG",{src:!0,alt:!0,height:!0,width:!0,class:!0}),Se.forEach(r),Z=T(U),O=s(U,"TABLE",{class:!0});var pe=n(O);k=s(pe,"THEAD",{class:!0});var He=n(k);m=s(He,"TR",{});var A=n(m);G=s(A,"TH",{class:!0});var Pe=n(G);x=y(Pe,"Orig."),Pe.forEach(r),c=T(A),N=s(A,"TH",{class:!0});var ke=n(N);R=s(ke,"A",{href:!0});var Le=n(R);te=y(Le,"DMG"),Le.forEach(r),ke.forEach(r),re=T(A),W=s(A,"TH",{class:!0});var Ce=n(W);Y=s(Ce,"A",{href:!0});var Je=n(Y);ae=y(Je,"EIr"),Je.forEach(r),Ce.forEach(r),be=T(A),le=s(A,"TH",{class:!0});var Ge=n(le);se=s(Ge,"A",{href:!0});var qe=n(se);ve=y(qe,"IJMES"),qe.forEach(r),Ge.forEach(r),ge=T(A),oe=s(A,"TH",{class:!0});var Be=n(oe);ne=s(Be,"A",{href:!0});var Ne=n(ne);Ee=y(Ne,"IJMES-D"),Ne.forEach(r),Be.forEach(r),ye=T(A),de=s(A,"TH",{class:!0});var Re=n(de);ce=s(Re,"A",{href:!0});var We=n(ce);Te=y(We,"IS"),We.forEach(r),Re.forEach(r),we=T(A),he=s(A,"TH",{class:!0});var Ye=n(he);ie=s(Ye,"A",{href:!0});var Ue=n(ie);De=y(Ue,"LOC"),Ue.forEach(r),Ye.forEach(r),A.forEach(r),He.forEach(r),xe=T(pe),$=s(pe,"TBODY",{class:!0});var Ve=n($);for(let Ie=0;Ie<z.length;Ie+=1)z[Ie].l(Ve);Ve.forEach(r),pe.forEach(r),U.forEach(r),this.h()},h(){t(o,"name","description"),t(o,"content","Examples of Persian words, romanized according to different standards"),t(d,"name","twitter:title"),t(d,"content","Persian romanization examples"),document.title="Persian romanization examples",t(u,"class","mb-4 text-3xl"),t(_,"class","mb-4 text-lg"),ue(_,"hidden",h[2]),t(H,"class","text-rose-700"),t(I,"class","mb-3 text-lg"),Ke(M.src,F="/rmnz/search-icon.svg")||t(M,"src",F),t(M,"alt","Magnifying glass icon"),t(M,"height","20"),t(M,"width","20"),t(M,"class","pointer-events-none absolute ml-2.5 mt-2.5"),t(D,"id","search-box"),t(D,"class","mb-6 w-80 rounded border border-solid border-gray-400 py-1 pl-9 pr-8 text-lg placeholder-gray-500"),t(D,"placeholder","Search words"),D.readOnly=h[4],Ke(w.src,X="/rmnz/cancel.svg")||t(w,"src",X),t(w,"alt","Cancel search"),t(w,"height","20"),t(w,"width","20"),t(w,"class","absolute -mt-4 -ml-7"),ue(w,"hidden",!h[4]),t(G,"class","border-r border-gray-400 px-3 py-2 font-normal"),t(R,"href","/rmnz/docs/dmg.pdf"),t(N,"class","border-r border-gray-400 px-3 font-normal text-blue-700 anyfine:hover:underline"),t(Y,"href","/rmnz/docs/eir.pdf"),t(W,"class","border-r border-gray-400 px-3 font-normal text-blue-700 anyfine:hover:underline"),t(se,"href","/rmnz/docs/ijmes-full.pdf"),t(le,"class","border-r border-gray-400 px-3 font-normal text-blue-700 anyfine:hover:underline"),t(ne,"href","/rmnz/ijmes-d"),t(oe,"class","border-r border-gray-400 px-3 font-normal text-blue-700 anyfine:hover:underline"),t(ce,"href","/rmnz/docs/is.pdf"),t(de,"class","border-r border-gray-400 px-3 font-normal text-blue-700 anyfine:hover:underline"),t(ie,"href","/rmnz/docs/loc.pdf"),t(he,"class","px-3 font-normal text-blue-700 anyfine:hover:underline"),t(k,"class","bg-blue-300/25 text-xl"),t($,"class","divide-y divide-gray-400"),t(O,"class","table-auto divide-y-2 divide-gray-400 text-lg"),ue(f,"hidden",!h[2])},m(a,b){e(document.head,o),e(document.head,d),ee(a,i,b),ee(a,u,b),e(u,L),ee(a,p,b),ee(a,_,b),e(_,j),e(j,q),ee(a,S,b),ee(a,f,b),e(f,I),e(I,K),e(I,H),e(H,B),e(I,Q),e(f,J),e(f,M),e(f,D),Qe(D,h[3]),e(f,P),e(P,w),e(f,Z),e(f,O),e(O,k),e(k,m),e(m,G),e(G,x),e(m,c),e(m,N),e(N,R),e(R,te),e(m,re),e(m,W),e(W,Y),e(Y,ae),e(m,be),e(m,le),e(le,se),e(se,ve),e(m,ge),e(m,oe),e(oe,ne),e(ne,Ee),e(m,ye),e(m,de),e(de,ce),e(ce,Te),e(m,we),e(m,he),e(he,ie),e(ie,De),e(O,xe),e(O,$);for(let v=0;v<z.length;v+=1)z[v].m($,null);ze||(Oe=[Me(D,"input",h[7]),Me(D,"keydown",h[5]),Me(w,"click",h[6])],ze=!0)},p(a,[b]){if(b&4&&ue(_,"hidden",a[2]),b&1&&C!==(C=a[0].length+"")&&V(B,C),b&16&&(D.readOnly=a[4]),b&8&&D.value!==a[3]&&Qe(D,a[3]),b&16&&ue(w,"hidden",!a[4]),b&2){fe=a[1];let v;for(v=0;v<fe.length;v+=1){const me=Xe(a,fe,v);z[v]?z[v].p(me,b):(z[v]=Ze(me),z[v].c(),z[v].m($,null))}for(;v<z.length;v+=1)z[v].d(1);z.length=fe.length}b&4&&ue(f,"hidden",!a[2])},i:Fe,o:Fe,d(a){r(o),r(d),a&&r(i),a&&r(u),a&&r(p),a&&r(_),a&&r(S),a&&r(f),at(z,a),ze=!1,lt(Oe)}}}function dt(h,o,d){let i=[],u=[],L=!1,p="",_=!1;function j(f){f.key==="Enter"&&(d(4,_=!0),d(1,u=ot(p,i)))}function q(){d(3,p=""),d(4,_=!1),d(1,u=i)}st(async()=>{const I=await(await fetch("/rmnz/words.json")).json();d(0,i=Object.entries(I)),d(1,u=i),d(2,L=!0)});function S(){p=this.value,d(3,p)}return[i,u,L,p,_,j,q,S]}class ht extends $e{constructor(o){super(),et(this,o,dt,nt,tt,{})}}export{ht as default};
