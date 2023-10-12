import{d as R,C as b,D as S,E as w,O as h,q as a,s as d,t as n,F as e,G as x,H as Y,I as q,J as A,K as E,v,A as M,B as N,_ as D,r as F,c as k,L as O,M as I,N as T,P as K,z,Q as $,R as L,o as U}from"./entry.e7b31ff6.js";import{u as B,a as P,b as G,g as H,c as J,d as Q}from"./order.6bab38fc.js";const j=i=>(M("data-v-3787c970"),i=i(),N(),i),W={class:"order-container"},X={class:"buttons-container"},Z=j(()=>n("div",{class:"oppure"}," Oppure ",-1)),ee={class:"aggiungi"},te=R({__name:"OrderContainer",setup(i){const s=b(),l=S(),r=B(),{getGlobalOrder:c,isEmptyOrder:m}=P();return w(r,()=>{r.value!==null&&!m.value?(l.value=h.getOrder,s.value=r.value.id??""):s.value=""}),(_,o)=>(a(),d("div",W,[n("div",X,[n("div",{class:"crea",onClick:o[0]||(o[0]=t=>l.value=("ORDER_TYPES"in _?_.ORDER_TYPES:e(h)).newOrder)}," Crea Nuovo Ordine "),Z,n("div",ee,[x(n("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=t=>q(s)?s.value=t:null),placeholder:"ID ordine",onKeydown:o[2]||(o[2]=A((...t)=>e(c)&&e(c)(...t),["enter"]))},null,544),[[Y,e(s)]]),n("div",{onClick:o[3]||(o[3]=(...t)=>e(c)&&e(c)(...t)),class:E(["get-order",{inactive:e(s).length==0},{error:e(s).length==0&&e(r)}])},v(e(s).length==0&&e(r)?"Errore":"Cerca Ordine"),3)])])]))}});const se=D(te,[["__scopeId","data-v-3787c970"]]),oe={class:"label"},ne={class:"counter-container"},re={class:"counter"},ae={key:0,class:"max"},de=["onClick"],ce={class:"label"},ie={key:0,class:"price"},le=R({__name:"CategoryItem",props:{category:{},menuItems:{}},setup(i){const s=i,l=G(),r=F(!1),c=k(()=>l.value.prodotti.map(t=>t.id)),m=t=>{const p=c.value.indexOf(t.id);p!=-1?l.value.prodotti.splice(p,1):l.value.prodotti.push(t)},_=k(()=>H(s.menuItems,s.category,l.value)),o=k(()=>J(_.value,s.category)??0);return(t,p)=>{var y,C,f;return a(),d("div",{class:E(["category-item",{collapsed:e(r)}])},[n("div",{class:"label-container",onClick:p[0]||(p[0]=u=>r.value=!e(r))},[n("div",oe,v(t.category.value+(e(o)>0?" - "+e(o)+"€":"")),1),n("div",ne,[n("div",re,v(e(_).length),1),(y=t.category)!=null&&y.max?(a(),d("div",ae," /"+v((C=t.category)==null?void 0:C.max),1)):O("",!0)])]),n("div",{class:E(["menu-items-container",{inactive:e(_).length==((f=t.category)==null?void 0:f.max)}])},[(a(!0),d(I,null,T(t.menuItems?t.menuItems[t.category.id]:[],u=>(a(),d("div",{class:E(["menu-item",{selected:e(c).includes(u.id)}]),key:"menuItem_"+u.id,onClick:()=>m(u)},[n("div",ce,v(u.data.label+(u.data.isGift?" - gratuita":"")),1),u.data.price?(a(),d("div",ie,v(u.data.price)+"€ ",1)):O("",!0)],10,de))),128))],2)],2)}}});const _e=D(le,[["__scopeId","data-v-9f16c8a2"]]),V=i=>(M("data-v-9b3472d2"),i=i(),N(),i),ue={class:"menu-items-selector"},pe={class:"label"},ve={key:0},me={class:"user-input-container"},ge=V(()=>n("div",{class:"label"}," Ordine per: ",-1)),ye={key:0,class:"users-container"},Oe=V(()=>n("div",{class:"label"}," Oppure modifica ordine per: ",-1)),he={class:"user-items-container"},Ce=["onClick"],fe={key:1,class:"categories-container"},Ee=R({__name:"MenuItemsSelector",async setup(i){let s,l;const r=G(),c=S(),m=b(),{orderTotal:_,menuItems:o,activeCategories:t}=([s,l]=K(()=>Q()),s=await s,l(),s),{selectOrder:p,users:y}=P();return(C,f)=>{const u=_e;return a(),d("div",ue,[n("div",pe,[z(v(e(c)==("ORDER_TYPES"in C?C.ORDER_TYPES:e(h)).newOrder?"Nuovo Ordine":"Ordine n: "+e(m))+" ",1),e(r).nome!==""?(a(),d("span",ve," - "+v(e(_))+"€",1)):O("",!0)]),n("div",me,[ge,x(n("input",{type:"text",placeholder:"Aggiungi nome","onUpdate:modelValue":f[0]||(f[0]=g=>e(r).nome=g)},null,512),[[Y,e(r).nome]])]),e(y).length>0&&e(r).nome==""?(a(),d("div",ye,[Oe,n("div",he,[(a(!0),d(I,null,T(e(y),g=>(a(),d("div",{class:"user-item",key:"header_user_"+g,onClick:()=>e(p)(g)},v(g),9,Ce))),128))])])):O("",!0),e(r).nome!=""?(a(),d("div",fe,[(a(!0),d(I,null,T(e(t),g=>(a(),$(u,{key:"category_"+g.id,category:g,menuItems:e(o)},null,8,["category","menuItems"]))),128))])):O("",!0)])}}});const Ie=D(Ee,[["__scopeId","data-v-9b3472d2"]]),Te=R({__name:"index",setup(i){const s=B(),{getGlobalOrder:l,isEmptyOrder:r}=P(),c=S(),m=L(),_=b();return U(()=>{m.query.code&&(_.value=m.query.code,l())}),w(s,()=>{s.value!==null&&!r.value?(c.value=h.getOrder,_.value=s.value.id??""):_.value=""}),(o,t)=>{const p=se,y=Ie;return a(),d(I,null,[e(c)==("ORDER_TYPES"in o?o.ORDER_TYPES:e(h)).home?(a(),$(p,{key:0})):O("",!0),e(c)!=("ORDER_TYPES"in o?o.ORDER_TYPES:e(h)).home?(a(),$(y,{key:1})):O("",!0)],64)}}});export{Te as default};
