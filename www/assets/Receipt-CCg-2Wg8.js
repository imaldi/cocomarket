import{_ as y}from"./gerobak-BUEbGpGi.js";import{u as g}from"./product-CsWKTkQd.js";import{e as f,A as k,f as x,y as j,l as R,r as S,o as c,c as l,d as t,g as D,a as p,t as o,b as _,s as C,x as F,D as P,p as B,j as I,_ as V}from"./index-4IDQ8Fy6.js";import"./apiClient-Duzv9xlq.js";const s=n=>(B("data-v-75977a0b"),n=n(),I(),n),N={class:"container"},T={class:"bg-white shadow-md rounded-xl p-8"},q=s(()=>t("div",{class:"w-full justify-center flex font-bold"},"Receipt",-1)),E={class:"my-auto mx-8 py-8"},L={class:"bg-white border-solid border border-gray rounded-2xl px-4 py-2 mb-4 flex flex-col justify-between"},$={class:"flex items-center justify-center my-4"},A=s(()=>t("div",{class:"w-1/3 flex justify-center items-center"},[t("img",{class:"border border-solid border-gray rounded-full bg-white p-2",src:y,alt:"Cocomaret Logo",width:"28",height:"28"})],-1)),H={key:0,class:"w-1/1"},M={class:"flex flex-col justify-center mr-2"},z={class:"font-bold text-md tracking-tighter"},G={class:"font-normal text-gray text-sm"},J={class:"border border-solid border-gray border-x-0 border-t-0 pb-2 mb-2"},K={class:"px-4 flex items-center mb-2"},O={class:"font-300 text-sm w-2/3"},Q={class:"font-300 text-sm w-1/10"},U={class:"font-semibold text-sm w-1/3 text-end"},W={class:"border border-solid border-gray border-x-0 border-t-0 pb-2 mb-2"},X={class:"px-4 flex items-center mb-2"},Y=s(()=>t("div",{class:"font-300 text-md w-2/3"},"Sub Total",-1)),Z={class:"font-300 text-md w-1/10"},tt={class:"font-semibold text-md w-1/3 text-end"},et={key:0,class:"px-4 flex items-center mb-2"},st=s(()=>t("div",{class:"font-300 text-sm w-2/3"},"Delivery Cost",-1)),ot=s(()=>t("div",{class:"font-300 text-sm w-1/10"},null,-1)),dt={class:"font-semibold text-sm w-1/3 text-end"},it={key:1,class:"px-4 flex items-center mb-2"},ct=s(()=>t("div",{class:"font-300 text-sm w-2/3"},"Tax",-1)),lt=s(()=>t("div",{class:"font-300 text-sm w-1/10"},null,-1)),nt={class:"font-semibold text-sm w-1/3 text-end"},at={key:2,class:"px-4 flex items-center mb-2"},rt=s(()=>t("div",{class:"font-300 text-sm w-2/3"},"Discount",-1)),_t=s(()=>t("div",{class:"font-300 text-sm w-1/10"},null,-1)),ut={class:"font-semibold text-sm w-1/3 text-end"},mt={class:"px-4 flex items-center mb-2"},vt=s(()=>t("div",{class:"font-bold text-md w-2/3"},"Total Payment",-1)),xt=s(()=>t("div",{class:"font-300 text-md w-1/10"},null,-1)),ft={class:"font-bold text-md w-1/3 text-end text-[#E68027]"},pt=s(()=>t("div",{class:"flex w-full justify-between p-4"},[t("div",{class:"flex p-2 mr-8 rounded-2xl bg-primary w-full justify-center items-center"},[t("div",{class:"text-2xl text-white"},"Save Receipt")])],-1)),ht=f({__name:"ReceiptForm",setup(n){const m=g(),v=k(),e=x(null),r=x([]),h=j(()=>{let a=0;return r.value.length>0&&e.value&&(a=r.value.reduce((u,i)=>u+parseFloat(i.price),0)+parseFloat(e.value.delivery_cost)-parseFloat(e.value.discount_amount)),a.toFixed(2)}),b=async a=>{try{const d=await m.getHistoryByid(a);console.log(d),r.value=d.data.order_details,e.value=d.data}catch(d){console.log(d)}finally{}};return R(()=>{b(v.params.id)}),(a,d)=>{const u=S("icon");return c(),l("div",null,[t("div",N,[t("div",T,[t("div",{onClick:d[0]||(d[0]=i=>D(P).push("/findfreshfood")),class:"flex"},[t("div",null,[p(u,{icon:"ion:arrow-back-circle-outline",color:"#000",width:"28",height:"28"})]),q])]),t("div",E,[t("div",L,[t("div",null,[t("div",$,[A,e.value?(c(),l("div",H,[t("div",M,[t("div",z,o(e.value.description),1),t("div",G,o(e.value.date),1)])])):_("",!0)])]),(c(!0),l(C,null,F(r.value,(i,w)=>(c(),l("div",{key:w},[t("div",J,[t("div",K,[t("div",O,o(i.products.name),1),t("div",Q,o(i.quantity),1),t("div",U," Rp."+o(i.price),1)])]),t("div",W,[t("div",X,[Y,t("div",Z,o(i.quantity),1),t("div",tt,o(i.price),1)]),e.value?(c(),l("div",et,[st,ot,t("div",dt,o(e.value.delivery_cost),1)])):_("",!0),e.value?(c(),l("div",it,[ct,lt,t("div",nt,o(e.value.tax_amount),1)])):_("",!0),e.value?(c(),l("div",at,[rt,_t,t("div",ut,o(e.value.discount_amount),1)])):_("",!0)])]))),128)),t("div",null,[t("div",mt,[vt,xt,t("div",ft,o(h.value),1)])]),pt])])])])}}}),bt=V(ht,[["__scopeId","data-v-75977a0b"]]),jt=f({__name:"Receipt",setup(n){return(m,v)=>(c(),l("div",null,[p(bt)]))}});export{jt as default};
