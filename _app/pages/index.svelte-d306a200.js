import{S as Xe,i as Ze,s as $e,e as l,t as g,k as E,c as s,a as d,h as y,d as r,m as T,b as t,g as ee,J as e,j as V,K as et,L as fe,M as Ue,N as Ve,O as Ie,n as Ke,P as tt,Q as rt,w as at}from"../chunks/index-3f3af9b4.js";function lt(h,o){let n=[];const i=h.trim().toLowerCase();for(const u of o){if(u[0].includes(i)){n.push(u);continue}const p=u[1],_=Object.values(p);for(const j of _)if(j.includes(i)){n.push(u);break}}return n}function Qe(h,o,n){const i=h.slice();return i[8]=o[n][0],i[9]=o[n][1],i}function Fe(h){let o,n,i=h[8]+"",u,L,p,_=h[9].dmg+"",j,q,A,f=h[9].eir+"",I,K,H,C=h[9].ijmes+"",B,Q,J,M=h[9].ijmesD+"",F,D,P,w=h[9].is+"",X,Z,O,k=h[9].loc+"",m,G;return{c(){o=l("tr"),n=l("td"),u=g(i),L=E(),p=l("td"),j=g(_),q=E(),A=l("td"),I=g(f),K=E(),H=l("td"),B=g(C),Q=E(),J=l("td"),F=g(M),D=E(),P=l("td"),X=g(w),Z=E(),O=l("td"),m=g(k),G=E(),this.h()},l(x){o=s(x,"TR",{});var c=d(o);n=s(c,"TD",{lang:!0,class:!0});var N=d(n);u=y(N,i),N.forEach(r),L=T(c),p=s(c,"TD",{class:!0});var R=d(p);j=y(R,_),R.forEach(r),q=T(c),A=s(c,"TD",{class:!0});var te=d(A);I=y(te,f),te.forEach(r),K=T(c),H=s(c,"TD",{class:!0});var re=d(H);B=y(re,C),re.forEach(r),Q=T(c),J=s(c,"TD",{class:!0});var W=d(J);F=y(W,M),W.forEach(r),D=T(c),P=s(c,"TD",{class:!0});var Y=d(P);X=y(Y,w),Y.forEach(r),Z=T(c),O=s(c,"TD",{class:!0});var ae=d(O);m=y(ae,k),ae.forEach(r),G=T(c),c.forEach(r),this.h()},h(){t(n,"lang","ar"),t(n,"class","px-3 py-2 text-2xl border-r border-gray-400 font-persian text-center"),t(p,"class","px-3 border-r border-gray-400"),t(A,"class","px-3 border-r border-gray-400"),t(H,"class","px-3 border-r border-gray-400"),t(J,"class","px-3 border-r border-gray-400"),t(P,"class","px-3 border-r border-gray-400"),t(O,"class","px-3")},m(x,c){ee(x,o,c),e(o,n),e(n,u),e(o,L),e(o,p),e(p,j),e(o,q),e(o,A),e(A,I),e(o,K),e(o,H),e(H,B),e(o,Q),e(o,J),e(J,F),e(o,D),e(o,P),e(P,X),e(o,Z),e(o,O),e(O,m),e(o,G)},p(x,c){c&2&&i!==(i=x[8]+"")&&V(u,i),c&2&&_!==(_=x[9].dmg+"")&&V(j,_),c&2&&f!==(f=x[9].eir+"")&&V(I,f),c&2&&C!==(C=x[9].ijmes+"")&&V(B,C),c&2&&M!==(M=x[9].ijmesD+"")&&V(F,M),c&2&&w!==(w=x[9].is+"")&&V(X,w),c&2&&k!==(k=x[9].loc+"")&&V(m,k)},d(x){x&&r(o)}}}function st(h){let o,n,i,u,L,p,_,j,q,A,f,I,K,H,C=h[0].length+"",B,Q,J,M,F,D,P,w,X,Z,O,k,m,G,x,c,N,R,te,re,W,Y,ae,pe,le,se,be,ve,oe,ne,ge,Ee,de,ye,Te,ce,he,we,De,$,xe,Me,ie=h[1],z=[];for(let a=0;a<ie.length;a+=1)z[a]=Fe(Qe(h,ie,a));return{c(){o=l("meta"),n=l("meta"),i=E(),u=l("h1"),L=g("Persian romanization examples"),p=E(),_=l("p"),j=l("em"),q=g("Loading words\u2026"),A=E(),f=l("div"),I=l("p"),K=g("In total, there are "),H=l("code"),B=g(C),Q=g(` words so far. You
		can search for specific patterns below.`),J=E(),M=l("img"),D=l("input"),P=l("button"),w=l("img"),Z=E(),O=l("table"),k=l("thead"),m=l("tr"),G=l("th"),x=g("Orig."),c=E(),N=l("th"),R=l("a"),te=g("DMG"),re=E(),W=l("th"),Y=l("a"),ae=g("EIr"),pe=E(),le=l("th"),se=l("a"),be=g("IJMES"),ve=E(),oe=l("th"),ne=l("a"),ge=g("IJMES-D"),Ee=E(),de=l("th"),ye=g("IS"),Te=E(),ce=l("th"),he=l("a"),we=g("LOC"),De=E(),$=l("tbody");for(let a=0;a<z.length;a+=1)z[a].c();this.h()},l(a){const b=et('[data-svelte="svelte-1oeam4c"]',document.head);o=s(b,"META",{name:!0,content:!0}),n=s(b,"META",{name:!0,content:!0}),b.forEach(r),i=T(a),u=s(a,"H1",{class:!0});var v=d(u);L=y(v,"Persian romanization examples"),v.forEach(r),p=T(a),_=s(a,"P",{class:!0});var ue=d(_);j=s(ue,"EM",{});var Oe=d(j);q=y(Oe,"Loading words\u2026"),Oe.forEach(r),ue.forEach(r),A=T(a),f=s(a,"DIV",{});var U=d(f);I=s(U,"P",{class:!0});var me=d(I);K=y(me,"In total, there are "),H=s(me,"CODE",{class:!0});var je=d(H);B=y(je,C),je.forEach(r),Q=y(me,` words so far. You
		can search for specific patterns below.`),me.forEach(r),J=T(U),M=s(U,"IMG",{src:!0,alt:!0,height:!0,width:!0,class:!0}),D=s(U,"INPUT",{id:!0,class:!0,placeholder:!0}),P=s(U,"BUTTON",{});var Se=d(P);w=s(Se,"IMG",{src:!0,alt:!0,height:!0,width:!0,class:!0}),Se.forEach(r),Z=T(U),O=s(U,"TABLE",{class:!0});var _e=d(O);k=s(_e,"THEAD",{class:!0});var Ae=d(k);m=s(Ae,"TR",{});var S=d(m);G=s(S,"TH",{class:!0});var He=d(G);x=y(He,"Orig."),He.forEach(r),c=T(S),N=s(S,"TH",{class:!0});var Pe=d(N);R=s(Pe,"A",{href:!0});var ke=d(R);te=y(ke,"DMG"),ke.forEach(r),Pe.forEach(r),re=T(S),W=s(S,"TH",{class:!0});var Le=d(W);Y=s(Le,"A",{href:!0});var Ce=d(Y);ae=y(Ce,"EIr"),Ce.forEach(r),Le.forEach(r),pe=T(S),le=s(S,"TH",{class:!0});var Je=d(le);se=s(Je,"A",{href:!0});var Ge=d(se);be=y(Ge,"IJMES"),Ge.forEach(r),Je.forEach(r),ve=T(S),oe=s(S,"TH",{class:!0});var qe=d(oe);ne=s(qe,"A",{href:!0});var Be=d(ne);ge=y(Be,"IJMES-D"),Be.forEach(r),qe.forEach(r),Ee=T(S),de=s(S,"TH",{class:!0});var Ne=d(de);ye=y(Ne,"IS"),Ne.forEach(r),Te=T(S),ce=s(S,"TH",{class:!0});var Re=d(ce);he=s(Re,"A",{href:!0});var We=d(he);we=y(We,"LOC"),We.forEach(r),Re.forEach(r),S.forEach(r),Ae.forEach(r),De=T(_e),$=s(_e,"TBODY",{class:!0});var Ye=d($);for(let ze=0;ze<z.length;ze+=1)z[ze].l(Ye);Ye.forEach(r),_e.forEach(r),U.forEach(r),this.h()},h(){t(o,"name","description"),t(o,"content","Examples of Persian words, romanized according to different standards"),t(n,"name","twitter:title"),t(n,"content","Persian romanization examples"),document.title="Persian romanization examples",t(u,"class","text-3xl mb-4"),t(_,"class","mb-4 text-lg"),fe(_,"hidden",h[2]),t(H,"class","text-rose-700"),t(I,"class","text-lg mb-3"),Ue(M.src,F="/rmnz/search-icon.svg")||t(M,"src",F),t(M,"alt","Magnifying glass icon"),t(M,"height","20"),t(M,"width","20"),t(M,"class","absolute ml-2.5 mt-2.5 pointer-events-none"),t(D,"id","search-box"),t(D,"class","border border-solid border-gray-400 mb-6 rounded text-lg pl-9 pr-8 py-1 w-80 placeholder-gray-500"),t(D,"placeholder","Search words"),D.readOnly=h[4],Ue(w.src,X="/rmnz/cancel.svg")||t(w,"src",X),t(w,"alt","Cancel search"),t(w,"height","20"),t(w,"width","20"),t(w,"class","absolute -mt-4 -ml-7"),fe(w,"hidden",!h[4]),t(G,"class","px-3 py-2 border-r border-gray-400 font-normal"),t(R,"href","/rmnz/docs/dmg.pdf"),t(N,"class","px-3 border-r border-gray-400 font-normal text-blue-700 anyfine:hover:underline"),t(Y,"href","/rmnz/docs/eir.pdf"),t(W,"class","px-3 border-r border-gray-400 font-normal text-blue-700 anyfine:hover:underline"),t(se,"href","/rmnz/docs/ijmes-full.pdf"),t(le,"class","px-3 border-r border-gray-400 font-normal text-blue-700 anyfine:hover:underline"),t(ne,"href","/rmnz/ijmes-d"),t(oe,"class","px-3 border-r border-gray-400 font-normal text-blue-700 anyfine:hover:underline"),t(de,"class","px-3 border-r border-gray-400 font-normal"),t(he,"href","/rmnz/docs/loc.pdf"),t(ce,"class","px-3 font-normal text-blue-700 anyfine:hover:underline"),t(k,"class","text-xl bg-blue-300/25"),t($,"class","divide-y divide-gray-400"),t(O,"class","table-auto divide-y-2 divide-gray-400 text-lg"),fe(f,"hidden",!h[2])},m(a,b){e(document.head,o),e(document.head,n),ee(a,i,b),ee(a,u,b),e(u,L),ee(a,p,b),ee(a,_,b),e(_,j),e(j,q),ee(a,A,b),ee(a,f,b),e(f,I),e(I,K),e(I,H),e(H,B),e(I,Q),e(f,J),e(f,M),e(f,D),Ve(D,h[3]),e(f,P),e(P,w),e(f,Z),e(f,O),e(O,k),e(k,m),e(m,G),e(G,x),e(m,c),e(m,N),e(N,R),e(R,te),e(m,re),e(m,W),e(W,Y),e(Y,ae),e(m,pe),e(m,le),e(le,se),e(se,be),e(m,ve),e(m,oe),e(oe,ne),e(ne,ge),e(m,Ee),e(m,de),e(de,ye),e(m,Te),e(m,ce),e(ce,he),e(he,we),e(O,De),e(O,$);for(let v=0;v<z.length;v+=1)z[v].m($,null);xe||(Me=[Ie(D,"input",h[7]),Ie(D,"keydown",h[5]),Ie(w,"click",h[6])],xe=!0)},p(a,[b]){if(b&4&&fe(_,"hidden",a[2]),b&1&&C!==(C=a[0].length+"")&&V(B,C),b&16&&(D.readOnly=a[4]),b&8&&D.value!==a[3]&&Ve(D,a[3]),b&16&&fe(w,"hidden",!a[4]),b&2){ie=a[1];let v;for(v=0;v<ie.length;v+=1){const ue=Qe(a,ie,v);z[v]?z[v].p(ue,b):(z[v]=Fe(ue),z[v].c(),z[v].m($,null))}for(;v<z.length;v+=1)z[v].d(1);z.length=ie.length}b&4&&fe(f,"hidden",!a[2])},i:Ke,o:Ke,d(a){r(o),r(n),a&&r(i),a&&r(u),a&&r(p),a&&r(_),a&&r(A),a&&r(f),tt(z,a),xe=!1,rt(Me)}}}function ot(h,o,n){let i=[],u=[],L=!1,p="",_=!1;function j(f){f.key==="Enter"&&(n(4,_=!0),n(1,u=lt(p,i)))}function q(){n(3,p=""),n(4,_=!1),n(1,u=i)}at(async()=>{const I=await(await fetch("/rmnz/words.json")).json();n(0,i=Object.entries(I)),n(1,u=i),n(2,L=!0)});function A(){p=this.value,n(3,p)}return[i,u,L,p,_,j,q,A]}class dt extends Xe{constructor(o){super(),Ze(this,o,ot,st,$e,{})}}export{dt as default};
