import{X as M,r as C,Y as g,Z as _,c as T,E as L,$ as v,a0 as G,a1 as x,a2 as B,a3 as A,S as Y,C as j,a4 as I,a5 as b,a6 as y}from"./entry.b9ea099d.js";const k=(s,o,n)=>!s||!s[o.id]?[]:s[o.id].filter(r=>n.prodotti.map(e=>e==null?void 0:e.id).includes(r.id)),U=(s,o)=>{let n=0;n=s.map(e=>{var t;return((t=e.data)==null?void 0:t.price)??0}).reduce((e,t)=>(e??0)+(t??0),0)??0;let r=s.filter(e=>!e.data.isGift).length-(o.limitPrice??0);return o.limitPrice&&r>0&&(n+=r*(o.extraPrice??0)),n},Q=(s,o,n)=>{let r=0;return o.forEach(e=>{var t=k(s,e,n);r+=U(t,e)}),r},$={type:"square",color:"#33b663",gradient:{type:"radial",rotation:0,colorStops:[{offset:0,color:"#33b663"},{offset:1,color:"#1e8b49"}]}},z={type:"square",color:"#1e8b49",gradient:null},H={type:"square",gradient:{type:"radial",rotation:0,colorStops:[{offset:0,color:"#69ca8c"},{offset:1,color:"#21914c"}]}},P="Categories",J=()=>{const s=M(),o=w(),n=C(0),{getMenuItemsFromCategory:r}=D(),e=C(),t=g(s,P),u=_(t),i=T(async()=>{var a=u.value.map(async p=>{const R=await r(C(p).value);return{[C(p).value.id]:R}}),m={};return(await Promise.all(a)).forEach(p=>{m={...m,...p}}),m});i.value.then(a=>{e.value=a});const O=T(()=>e.value?u.value.filter(a=>e.value[a==null?void 0:a.id]?e.value[a.id].length>0:!1).sort((a,m)=>a.order-m.order):u.value);return L([o,n],()=>{n.value=Q(e.value,u.value,o.value),i.value.then(a=>{e.value=a})},{deep:!0}),{categoriesCollection:u,menuItemsWithCategories:i,orderTotal:n,menuItems:e,activeCategories:O}},h="MenuItems",D=()=>{const s=M(),o=g(s,h);return{serverMenuItemsCollection:_(o).value.map(t=>({ref:t.id,data:t})),getMenuItemsFromCategory:async t=>{const u=v(s,P,t.id),i=await G(x(g(s,h),B("category","==",u)));let O=[];return i.forEach(a=>{O.push({id:a.id,data:a.data()})}),O}}},S=(s,o,n={})=>{const r={prodotti:{...n.prodotti}};return r.prodotti[o.nome]=o.prodotti.map(e=>v(s,h,e.id)),r},V={nome:"",prodotti:[]},W={prodotti:{}},f="Orders",w=()=>A("order",()=>structuredClone(V)),X=()=>A("globalOrder",()=>structuredClone(W)),K=()=>{const{serverMenuItemsCollection:s}=D(),o=w(),n=Y(),r=X(),e=j(),t=M(),u=g(t,f),i=_(u),O=()=>{const c=i.value.length+"",d=S(t,o.value),l=v(t,f,c);I(l,d),r.value=b(l),e.value=c},a=async()=>{const c=v(t,f,e.value),d=(await y(c)).data(),l=S(t,o.value,d);I(v(t,f,e.value),l)},m=async c=>{const d=v(t,f,e.value),l=(await y(d)).data(),E=S(t,o.value,l);delete E.prodotti[c],I(v(t,f,e.value),E)},p=()=>{const c=v(t,f,e.value);r.value=b(c)},R=c=>{var d;return(d=s.find(l=>l.ref==c.id))==null?void 0:d.data},N=c=>{var l;var d=(l=r.value)==null?void 0:l.prodotti[c].map(E=>({id:E.id,data:R(E)}));o.value={nome:c,prodotti:d},n.value=!1},F=T(()=>Object.keys(r.value?r.value.prodotti:{})),q=T(()=>r.value?Object.keys(r.value.prodotti).length==0:!0);return{ordersCollection:i,updateOrder:a,createOrder:O,getGlobalOrder:p,deleteOrder:m,getItemFromId:R,selectOrder:N,isEmptyOrder:q,users:F}};export{z as C,$ as D,W as E,K as a,w as b,U as c,J as d,Q as e,H as f,k as g,V as h,X as u};
