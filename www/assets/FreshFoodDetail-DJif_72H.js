import{k,d as f,x as S,f as p,y as P,n as j,u as F,r as I,o as u,c as _,e as t,l as B,a as i,t as n,b as D,p as R,j as $,_ as q}from"./index-2gbzrnVN.js";import{a as N}from"./apiClient-DF06Se1J.js";import{u as T}from"./cart-B4PT_u0u.js";const V=k("product",()=>({getProductById:async d=>N.get(`/api/product/${d}`)})),l=c=>(R("data-v-b85be3d6"),c=c(),$(),c),Q={key:0,class:"container"},A={class:"w-full flex"},E={class:"absolute w-full"},M={class:"bg-gray rounded-xl p-8"},z={class:"text-center",style:{height:"30vh",opacity:"0.5"}},G=["src"],H=l(()=>t("div",{class:"text-center text-4xl"},"...",-1)),J={class:"mx-8"},K={class:"pt-4 pb-4"},L={class:"font-bold"},O={class:"flex justify-between"},U={class:"flex items-center"},W={class:"p-3"},X={class:"font-bold text-2xl"},Y=l(()=>t("hr",null,null,-1)),Z={class:"flex justify-between"},tt=l(()=>t("div",{class:"font-500 pt-2"},"Product Detail",-1)),et={class:"mt-2"},ot={class:"text-justify text-gray text-sm"},st={class:"relative"},it={class:"fixed w-full bg-white rounded-lg shadow-md",style:{bottom:"4em"}},ct={class:"flex w-full justify-between p-4"},at={class:"my-auto"},nt=l(()=>t("div",null,"Total Price",-1)),lt={class:"font-bold"},dt=l(()=>t("div",{type:"button",class:"text-lg font-500 text-white"}," Add to Cart ",-1)),rt=f({__name:"FreshFoodDetailForm",setup(c){const d=S(),h=V(),m=T(),o=p(null),a=p(1),g=()=>{a.value+=1},y=()=>{a.value>1&&(a.value-=1)},x=r=>{if(o.value){const e={products_id:r};try{const s=m.addToCart(e);console.log(s),v.push("/addfreshfood")}catch{}}},w=P(()=>o.value?o.value.price*a.value:0),b=async r=>{try{const e=await h.getProductById(r);console.log(e),o.value=e.data.product}catch(e){console.log(e)}finally{}};j(()=>{b(d.params.id)});const v=F();return(r,e)=>{const s=I("icon");return u(),_("div",null,[o.value?(u(),_("div",Q,[t("div",A,[t("div",E,[t("div",{onClick:e[0]||(e[0]=C=>B(v).push("/findfreshfood")),class:"justify-between flex w-full"},[i(s,{class:"relative p-8",icon:"ion:chevron-back",color:"#000",width:"28",height:"28"}),i(s,{class:"relative p-8",icon:"ion:share-outline",color:"#000",width:"28",height:"28"})])])]),t("div",M,[t("div",z,[t("img",{src:o.value.image,width:"200",height:"200",alt:""},null,8,G)]),H]),t("div",J,[t("div",null,[t("div",K,[t("div",L,n(o.value.name),1)]),t("div",null,[t("div",O,[t("div",U,[t("div",{onClick:y},[i(s,{icon:"mage:minus-square",color:"#555",width:"50",height:"50"})]),t("div",W,n(a.value),1),t("div",{onClick:g},[i(s,{icon:"mage:plus-square",color:"#555",width:"50",height:"50"})])]),t("div",X," Rp. "+n(o.value.price),1)])])]),Y,t("div",Z,[tt,t("div",et,[i(s,{icon:"ion:chevron-down",class:"my-auto",color:"#555",width:"28",height:"28"})])]),t("div",ot,n(o.value.description),1)]),t("div",st,[t("div",it,[t("div",ct,[t("div",at,[nt,t("div",lt,"Rp. "+n(w.value),1)]),t("div",{onClick:e[1]||(e[1]=C=>x(o.value.id)),class:"flex p-4 mr-8 rounded-2xl bg-primary w-1/2 justify-center"},[i(s,{icon:"tabler:shopping-bag-plus",class:"mr-4",color:"#fff",width:"28",height:"28"}),dt])])])])])):D("",!0)])}}}),ut=q(rt,[["__scopeId","data-v-b85be3d6"]]),pt=f({__name:"FreshFoodDetail",setup(c){return(d,h)=>(u(),_("div",null,[i(ut)]))}});export{pt as default};
