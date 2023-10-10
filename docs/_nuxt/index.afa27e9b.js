import{d as R,C as b,D,E as M,O as h,q as l,s as c,t as r,F as e,G as Y,H as x,I as K,J as A,K as T,v as g,A as B,B as G,_ as P,r as k,c as I,L as f,M as E,N as $,P as S,Q as L,o as U}from"./entry.ef616368.js";import{u as N,a as w,b as F,g as z,c as H,d as J,e as Q,f as j}from"./order.19527cba.js";const W=i=>(B("data-v-3787c970"),i=i(),G(),i),X={class:"order-container"},Z={class:"buttons-container"},ee=W(()=>r("div",{class:"oppure"}," Oppure ",-1)),te={class:"aggiungi"},se=R({__name:"OrderContainer",setup(i){const s=b(),_=D(),d=N(),{getGlobalOrder:a,isEmptyOrder:y}=w();return M(d,()=>{d.value!==null&&!y.value?(_.value=h.getOrder,s.value=d.value.id??""):s.value=""}),(u,n)=>(l(),c("div",X,[r("div",Z,[r("div",{class:"crea",onClick:n[0]||(n[0]=t=>_.value=("ORDER_TYPES"in u?u.ORDER_TYPES:e(h)).newOrder)}," Crea Nuovo Ordine "),ee,r("div",te,[Y(r("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=t=>K(s)?s.value=t:null),placeholder:"ID ordine",onKeydown:n[2]||(n[2]=A((...t)=>e(a)&&e(a)(...t),["enter"]))},null,544),[[x,e(s)]]),r("div",{onClick:n[3]||(n[3]=(...t)=>e(a)&&e(a)(...t)),class:T(["get-order",{inactive:e(s).length==0},{error:e(s).length==0&&e(d)}])},g(e(s).length==0&&e(d)?"Errore":"Cerca Ordine"),3)])])]))}});const oe=P(se,[["__scopeId","data-v-3787c970"]]),ne={class:"label"},re={class:"counter-container"},ae={class:"counter"},le={key:0,class:"max"},de={class:"menu-items-container"},ce=["onClick"],ie={class:"label"},ue={key:0,class:"price"},_e=R({__name:"CategoryItem",props:{category:{},menuItems:{}},setup(i){const s=i,_=F(),d=k(!1),a=I(()=>_.value.prodotti.map(t=>t.id)),y=t=>{let v=_.value.prodotti;const p=a.value.indexOf(t.id);p!=-1?v.splice(p,1):v.push(t),_.value.prodotti=v},u=I(()=>z(s.menuItems,s.category,_.value)),n=I(()=>H(u.value,s.category)??0);return(t,v)=>{var p,C;return l(),c("div",{class:T(["category-item",{collapsed:e(d)}])},[r("div",{class:"label-container",onClick:v[0]||(v[0]=o=>d.value=!e(d))},[r("div",ne,g(t.category.value+(e(n)>0?" - "+e(n)+"€":"")),1),r("div",re,[r("div",ae,g(e(u).length),1),(p=t.category)!=null&&p.max?(l(),c("div",le," /"+g((C=t.category)==null?void 0:C.max),1)):f("",!0)])]),r("div",de,[(l(!0),c(E,null,$(t.menuItems?t.menuItems[t.category.id]:[],o=>{var m;return l(),c("div",{class:T(["menu-item",{selected:e(a).includes(o.id),inactive:e(u).length==((m=t.category)==null?void 0:m.max)}]),key:"menuItem_"+o.id,onClick:()=>y(o)},[r("div",ie,g(o.data.label+(o.data.isGift?" - gratuita":"")),1),o.data.price?(l(),c("div",ue,g(o.data.price)+"€ ",1)):f("",!0)],10,ce)}),128))])],2)}}});const ve=P(_e,[["__scopeId","data-v-03ce0fcc"]]),V=i=>(B("data-v-f072090e"),i=i(),G(),i),pe={class:"menu-items-selector"},me={class:"label"},ge={class:"user-input-container"},ye=V(()=>r("div",{class:"label"}," Ordine per: ",-1)),Oe={key:0,class:"users-container"},he=V(()=>r("div",{class:"label"}," Oppure modifica ordine per: ",-1)),fe={class:"user-items-container"},Ie=["onClick"],Ce={key:1,class:"categories-container"},Ee=R({__name:"MenuItemsSelector",setup(i){const s=F(),_=D(),d=b(),a=J(),{getMenuItemsFromCategory:y}=Q(),{selectOrder:u,users:n}=w(),t=k(),v=async o=>{const m=await y(o.value);t.value={...t.value,[o.value.id]:m}};a.value.forEach(o=>{v(k(o))});const p=I(()=>t.value?a.value.filter(o=>t.value[o==null?void 0:o.id]?t.value[o.id].length>0:!1).sort((o,m)=>o.order-m.order):a.value),C=I(()=>j(t.value,a.value,s.value));return(o,m)=>{const q=ve;return l(),c("div",pe,[r("div",me,g(e(_)==("ORDER_TYPES"in o?o.ORDER_TYPES:e(h)).newOrder?"Nuovo Ordine":"Ordine n: "+e(d))+" - "+g(e(s).nome!==""?e(C):"")+"€",1),r("div",ge,[ye,Y(r("input",{type:"text",placeholder:"Aggiungi nome","onUpdate:modelValue":m[0]||(m[0]=O=>e(s).nome=O)},null,512),[[x,e(s).nome]])]),e(n).length>0&&e(s).nome==""?(l(),c("div",Oe,[he,r("div",fe,[(l(!0),c(E,null,$(e(n),O=>(l(),c("div",{class:"user-item",key:"header_user_"+O,onClick:()=>e(u)(O)},g(O),9,Ie))),128))])])):f("",!0),e(s).nome!=""?(l(),c("div",Ce,[(l(!0),c(E,null,$(e(p),O=>(l(),S(q,{key:"category_"+O.id,category:O,menuItems:e(t)},null,8,["category","menuItems"]))),128))])):f("",!0)])}}});const Re=P(Ee,[["__scopeId","data-v-f072090e"]]),$e=R({__name:"index",setup(i){const s=N(),{getGlobalOrder:_,isEmptyOrder:d}=w(),a=D(),y=L(),u=b();return U(()=>{y.query.code&&(u.value=y.query.code,_())}),M(s,()=>{s.value!==null&&!d.value?(a.value=h.getOrder,u.value=s.value.id??""):u.value=""}),(n,t)=>{const v=oe,p=Re;return l(),c(E,null,[e(a)==("ORDER_TYPES"in n?n.ORDER_TYPES:e(h)).home?(l(),S(v,{key:0})):f("",!0),e(a)!=("ORDER_TYPES"in n?n.ORDER_TYPES:e(h)).home?(l(),S(p,{key:1})):f("",!0)],64)}}});export{$e as default};