import{W as C,X as f,Y as T,Z as l,$ as w,a0 as q,a1 as F,a2 as b,R as L,C as G,c as S,a3 as g,a4 as y,a5 as _}from"./entry.50920f08.js";const x=(s,o,a)=>s[o.id].filter(r=>a.prodotti.map(e=>e.id).includes(r.id)),B=(s,o)=>{let a=0;a=s.map(e=>{var t;return((t=e.data)==null?void 0:t.price)??0}).reduce((e,t)=>(e??0)+(t??0),0)??0;let r=s.filter(e=>!e.data.isGift).length-(o.limitPrice??0);return o.limitPrice&&r>0&&(a+=r*(o.extraPrice??0)),a},W=(s,o,a)=>{let r=0;return o.forEach(e=>{r+=B(x(s,e,a),e)}),r},X={type:"square",color:"#33b663",gradient:{type:"radial",rotation:0,colorStops:[{offset:0,color:"#33b663"},{offset:1,color:"#1e8b49"}]}},Z={type:"square",color:"#1e8b49",gradient:null},$={type:"square",gradient:{type:"radial",rotation:0,colorStops:[{offset:0,color:"#69ca8c"},{offset:1,color:"#21914c"}]}},M="Categories",z=()=>{const s=C(),o=f(s,M);return T(o)},E="MenuItems",Y=()=>{const s=C(),o=f(s,E);return{serverMenuItemsCollection:T(o).value.map(t=>({ref:t.id,data:t})),getMenuItemsFromCategory:async t=>{const v=l(s,M,t.id),O=await w(q(f(s,E),F("category","==",v)));let p=[];return O.forEach(m=>{p.push({id:m.id,data:m.data()})}),p}}},R=(s,o,a={})=>{const r={prodotti:{...a.prodotti}};return r.prodotti[o.nome]=o.prodotti.map(e=>l(s,E,e.id)),r},j={nome:"",prodotti:[]},k={prodotti:{}},i="Orders",U=()=>b("order",()=>structuredClone(j)),Q=()=>b("globalOrder",()=>structuredClone(k)),H=()=>{const{serverMenuItemsCollection:s}=Y(),o=U(),a=L(),r=Q(),e=G(),t=C(),v=f(t,i),O=T(v),p=()=>{const c=O.value.length+"",d=R(t,o.value),n=l(t,i,c);g(n,d),r.value=y(n),e.value=c},m=async()=>{const c=l(t,i,e.value),d=(await _(c)).data(),n=R(t,o.value,d);g(l(t,i,e.value),n)},A=async c=>{const d=l(t,i,e.value),n=(await _(d)).data(),u=R(t,o.value,n);delete u.prodotti[c],g(l(t,i,e.value),u)},h=()=>{const c=l(t,i,e.value);r.value=y(c)},I=c=>{var d;return(d=s.find(n=>n.ref==c.id))==null?void 0:d.data},D=c=>{var n;var d=(n=r.value)==null?void 0:n.prodotti[c].map(u=>({id:u.id,data:I(u)}));o.value={nome:c,prodotti:d},a.value=!1},P=S(()=>Object.keys(r.value?r.value.prodotti:{})),N=S(()=>r.value?Object.keys(r.value.prodotti).length==0:!0);return{ordersCollection:O,updateOrder:m,createOrder:p,getGlobalOrder:h,deleteOrder:A,getItemFromId:I,selectOrder:D,isEmptyOrder:N,users:P}};export{Z as C,X as D,k as E,H as a,U as b,B as c,z as d,Y as e,W as f,x as g,$ as h,j as i,Q as u};
