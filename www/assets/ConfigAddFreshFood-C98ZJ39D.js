import{_ as A}from"./meat1-Dm4ZR8Pd.js";import{d as y,u as I,x as $,f,n as j,r as q,o as _,c as u,e as t,m as g,a as r,F as B,q as R,t as l,p as P,j as E,_ as N}from"./index-DHLn-rP9.js";import{u as Q}from"./category-Dq7gn17E.js";import{u as T}from"./cart-BX3JU0B2.js";import"./apiClient-DuBlyIv1.js";const h=c=>(P("data-v-d97421f6"),c=c(),E(),c),V={class:"container"},L={class:"bg-white shadow-md rounded-xl p-8"},M={class:"flex"},z=h(()=>t("div",{class:"w-full justify-center flex font-bold"},"Shopping Cart",-1)),G={class:"mx-8 pt-4 h-screen overflow-y"},H={class:"scrollable-content"},J=h(()=>t("div",{class:"bg-gray rounded-lg"},[t("img",{src:A,alt:""})],-1)),K={class:"flex justify-between w-full"},O={class:"ml-4 my-auto"},U={class:"font-500"},W={class:"font-bold"},X={class:"ml-4 my-auto"},Y=["onClick"],Z={class:"p-2 text-gray"},tt=["onClick"],ot=["onClick"],et={class:"relative"},st={class:"fixed w-full bg-white rounded-lg shadow-md",style:{bottom:"4em"}},at={class:"flex w-full justify-between p-4"},ct={class:"my-auto"},nt=h(()=>t("div",null,"Total Price",-1)),it={class:"font-500"},lt=h(()=>t("div",{class:"text-2xl text-white"},"Continue",-1)),rt=[lt],dt=y({__name:"ConfigAddFreshFoodForm",setup(c){const v=I(),p=$(),C=Q(),w=T(),d=f([]),s=f([]),k=()=>{let o=0;return d.value.forEach((e,a)=>{o+=e.price*s.value[a]}),o},b=async o=>{try{const e=await C.getProductByCategory(o);s.value=new Array(e.data.length).fill(1),d.value=e.data}catch(e){console.log(e)}},x=async o=>{try{const e=await w.getCartDetail(o);console.log(e)}catch(e){console.log(e)}},S=o=>{s.value[o]+=1},D=o=>{s.value[o]>0&&(s.value[o]-=1)},F=o=>{d.value.splice(o,1),s.value.splice(o,1)};return j(()=>{b(p.params.id),x(p.params.id)}),(o,e)=>{const a=q("icon");return _(),u("div",null,[t("div",V,[t("div",L,[t("div",M,[t("div",{onClick:e[0]||(e[0]=n=>g(v).back())},[r(a,{icon:"ion:arrow-back-circle-outline",color:"#000",width:"28",height:"28"})]),z])]),t("div",G,[t("div",H,[(_(!0),u(B,null,R(d.value,(n,i)=>(_(),u("div",{key:i,class:"flex shadow-md p-4 rounded-md"},[J,t("div",K,[t("div",O,[t("div",U,l(n.name),1),t("div",null,"Stock : "+l(n.total_stock),1),t("div",W,"Rp. "+l(n.price),1)]),t("div",X,[t("div",{onClick:m=>D(i)},[r(a,{icon:"mage:minus-square",color:"#7ACDD6",width:"28",height:"28"})],8,Y),t("div",Z,l(s.value[i]),1),t("div",{onClick:m=>S(i)},[r(a,{icon:"mage:plus-square",color:"#7ACDD6",width:"28",height:"28"})],8,tt),t("div",{onClick:m=>F(i)},[r(a,{icon:"mage:trash",color:"#7ACDD6",width:"28",height:"28"})],8,ot)])])]))),128))])]),t("div",et,[t("div",st,[t("div",at,[t("div",ct,[nt,t("div",it,"Rp. "+l(k()),1)]),t("div",{onClick:e[1]||(e[1]=n=>g(v).push("/checkout")),class:"flex p-4 mr-8 rounded-2xl bg-primary w-1/2 justify-center"},rt)])])])])])}}}),_t=N(dt,[["__scopeId","data-v-d97421f6"]]),ft=y({__name:"ConfigAddFreshFood",setup(c){return(v,p)=>(_(),u("div",null,[r(_t)]))}});export{ft as default};
