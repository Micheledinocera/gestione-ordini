import{X as b,r as g,Y as C,Z as _,c as T,E as G,$ as v,a0 as x,a1 as B,a2 as Y,a3 as P,S as j,C as k,a4 as S,a5 as y,a6 as A}from"./entry.e7b31ff6.js";const U=(s,r,a)=>!s||!s[r.id]?[]:s[r.id].filter(o=>a.prodotti.map(t=>t==null?void 0:t.id).includes(o.id)),Q=(s,r)=>{let a=0;a=s.map(t=>{var e;return((e=t.data)==null?void 0:e.price)??0}).reduce((t,e)=>(t??0)+(e??0),0)??0;let o=s.filter(t=>!t.data.isGift).length-(r.limitPrice??0);return r.limitPrice&&o>0&&(a+=o*(r.extraPrice??0)),a},V=(s,r,a)=>{let o=0;return r.forEach(t=>{var e=U(s,t,a);o+=Q(e,t)}),o},$={type:"square",color:"#33b663",gradient:{type:"radial",rotation:0,colorStops:[{offset:0,color:"#33b663"},{offset:1,color:"#1e8b49"}]}},z={type:"square",color:"#1e8b49",gradient:null},H={type:"square",gradient:{type:"radial",rotation:0,colorStops:[{offset:0,color:"#69ca8c"},{offset:1,color:"#21914c"}]}},D="Categories",J=()=>{const s=b(),r=N(),a=F(),o=g(0),{getMenuItemsFromCategory:t}=w(),e=g(),E=C(s,D),d=_(E),i=T(async()=>{var n=d.value.map(async f=>{const I=await t(g(f).value);return{[g(f).value.id]:I}}),m={};return(await Promise.all(n)).forEach(f=>{m={...m,...f}}),m});i.value.then(n=>{e.value=n});const p=T(()=>e.value?d.value.filter(n=>e.value[n==null?void 0:n.id]?e.value[n.id].length>0:!1).sort((n,m)=>n.order-m.order):d.value);return G([r,a],()=>{o.value=V(e.value,d.value,r.value),i.value.then(n=>{e.value=n})},{deep:!0}),{categoriesCollection:d,menuItemsWithCategories:i,orderTotal:o,menuItems:e,activeCategories:p}},M="MenuItems",w=()=>{const s=b(),r=C(s,M);return{serverMenuItemsCollection:_(r).value.map(e=>({ref:e.id,data:e})),getMenuItemsFromCategory:async e=>{const E=v(s,D,e.id),d=await x(B(C(s,M),Y("category","==",E)));let i=[];return d.forEach(p=>{i.push({id:p.id,data:p.data()})}),i}}},h=(s,r,a={})=>{const o={prodotti:{...a.prodotti}};return o.prodotti[r.nome]=r.prodotti.map(t=>v(s,M,t.id)),o},W={nome:"",prodotti:[]},X={prodotti:{}},O="Orders",N=()=>P("order",()=>structuredClone(W)),F=()=>P("globalOrder",()=>structuredClone(X)),K=()=>{const{serverMenuItemsCollection:s}=w(),r=N(),a=j(),o=F(),t=k(),e=b(),E=C(e,O),d=_(E),i=()=>{const c=d.value.length+"",u=h(e,r.value),l=v(e,O,c);S(l,u),o.value=y(l),t.value=c},p=async()=>{const c=v(e,O,t.value),u=(await A(c)).data(),l=h(e,r.value,u);S(v(e,O,t.value),l)},n=async c=>{const u=v(e,O,t.value),l=(await A(u)).data(),R=h(e,r.value,l);delete R.prodotti[c],S(v(e,O,t.value),R)},m=()=>{const c=v(e,O,t.value);o.value=y(c)},f=c=>{var u;return(u=s.find(l=>l.ref==c.id))==null?void 0:u.data},I=c=>{var l;var u=(l=o.value)==null?void 0:l.prodotti[c].map(R=>({id:R.id,data:f(R)}));r.value={nome:c,prodotti:u},a.value=!1},q=T(()=>Object.keys(o.value?o.value.prodotti:{})),L=T(()=>o.value?Object.keys(o.value.prodotti).length==0:!0);return{ordersCollection:d,updateOrder:p,createOrder:i,getGlobalOrder:m,deleteOrder:n,getItemFromId:f,selectOrder:I,isEmptyOrder:L,users:q}};export{z as C,$ as D,X as E,K as a,N as b,Q as c,J as d,V as e,H as f,U as g,W as h,F as u};