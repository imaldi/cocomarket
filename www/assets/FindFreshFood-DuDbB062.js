import{_ as W}from"./template-food-qcoBph53.js";import{d as D,y as H,u as T,f as c,k as U,r as j,o as l,c as a,e,g as q,a as i,w as J,q as g,s as y,t as n,b as K,x as O,z as Q,p as X,i as Y,_ as Z}from"./index-BCIiqLPX.js";import{u as ee,r as te}from"./rupiah-DkzBrtMb.js";import{u as oe}from"./cart-CTscroSw.js";import{i as f}from"./index-Kh5timzF.js";import{u as se}from"./home-VdF01os5.js";import"./apiClient-C9X9s8qD.js";import"./change-image-profile-D1INqY5j.js";const w=d=>(X("data-v-cc37e7de"),d=d(),Y(),d),le={class:"container"},ae={class:"bg-white shadow-xl rounded-xl p-8"},re={class:"flex"},ce=w(()=>e("div",{class:"w-full justify-center flex font-bold"},"Find Fresh Food",-1)),ne={class:"flex relative pt-4"},ie={class:"mx-8"},de=w(()=>e("div",{class:"font-bold"},"Category",-1)),ue={class:"grid grid-cols-2 gap-6"},he=["onClick"],_e=["src"],fe={class:"text-center font-500"},ve={class:"mx-8 pb-20"},me=w(()=>e("div",{class:"flex justify-between pt-4 pb-4"},[e("div",{class:"font-bold"},"Fresh Vegan")],-1)),pe={class:"pl-4 pb-20"},ge={class:"grid grid-cols-2 gap-4"},ye=["onClick"],we=["src"],xe={key:1,src:W,width:"80",height:"80",class:"w-full justify-center",alt:""},be={class:"flex justify-between"},Ce={class:"font-500"},ke={class:"fixed w-full bg-white rounded-lg shadow-md",style:{bottom:"0"}},Fe={class:"flex w-full justify-between p-4"},Se={class:"flex p-4 mr-8 rounded-2xl bg-primary w-full justify-center text-white"},je={class:"flex justify-between w-full"},De={class:"my-auto"},Ie={class:"font-bold text-xl"},Ve={class:"text-xs"},$e={class:"flex my-auto"},Ae={class:"text-2xl font-bold mr-2"},Ne=D({__name:"FindFreshFoodForm",setup(d){const x=H(()=>{if(r.value){const t=parseFloat(r.value.amount);return te(t)}return"Rp. 0"}),u=T(),b=ee(),I=oe(),C=c([]),k=c([]),F=c(""),S=c(!1),V=()=>{S.value=!S.value},$=async()=>{try{const t=await b.getAllCategory();C.value=t.data}catch(t){console.log(t)}finally{}},v=c([]),A=se(),m=c(!1),N=async t=>{if(t){m.value=!0;try{const s=await A.getAllSearch(t);v.value=s.data}catch(s){console.error("Error:",s)}finally{m.value=!1}}else v.value=[]},p=c([]),r=c(null),B=async()=>{try{const t=await I.getCartTotal();r.value=t.data,p.value=r.value.products.map(h=>h.name.replace(/\d+/g,""));const s=p.value.map(h=>h.replace(/\d+/g,""));console.log(s)}catch(t){console.log(t)}finally{}},L=async()=>{try{const t=await b.getAllProduct();k.value=t.data}catch(t){console.log(t)}finally{}},P=t=>{const s=["#eef8f2","#f2eef8","#f8f2ee","#eeeff8"];return s[t%s.length]},R=t=>{u.push(`/detailcategory/${t}`)},z=t=>{u.push(`/configaddfreshfood/${t}`)},E=t=>{u.push(`/freshfooddetail/${t}`)};return U(()=>{$(),L(),B()}),(t,s)=>{const h=j("el-option"),G=j("el-select");return l(),a("div",null,[e("div",le,[e("div",ae,[e("div",re,[e("div",{onClick:s[0]||(s[0]=o=>q(u).push("/home"))},[i(f,{icon:"arrow-circle-black",color:"#000",width:"28",height:"28"})]),ce]),e("div",ne,[i(G,{modelValue:F.value,"onUpdate:modelValue":s[1]||(s[1]=o=>F.value=o),filterable:"",remote:"",size:"medium","reserve-keyword":"",placeholder:"Search Food, Drinks, etc","remote-show-suffix":"","remote-method":N,loading:m.value,style:{width:"100%"}},{default:J(()=>[(l(!0),a(g,null,y(v.value,o=>(l(),O(h,{key:o.name,label:o.name,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","loading"]),i(f,{icon:"search",class:"my-auto ml-2",color:"#E68027",width:"18",height:"18"})])]),e("div",ie,[e("div",{class:"flex justify-between pt-4 pb-4"},[de,e("div",{onClick:V,class:"text-gray"},"See all")]),e("div",null,[e("div",ue,[(l(!0),a(g,null,y(C.value,(o,_)=>(l(),a("div",{onClick:M=>R(o.id),key:_,class:"rounded-xl p-6 border border-solid border-[#00000035]",style:Q({backgroundColor:P(_)})},[e("img",{src:o.image,width:"80",height:"80",class:"w-full justify-center",alt:""},null,8,_e),e("div",fe,n(o.name),1)],12,he))),128))])])]),e("div",ve,[me,e("div",pe,[e("div",ge,[(l(!0),a(g,null,y(k.value,(o,_)=>(l(),a("div",{key:_,class:"rounded-xl p-0 mr-4 bg-white",onClick:M=>E(o.id)},[o.image!==null?(l(),a("img",{key:0,src:o.image,width:"80",height:"80",class:"w-full justify-center",alt:""},null,8,we)):(l(),a("img",xe)),e("div",null,[e("div",null,n(o.name),1)]),e("div",be,[e("div",Ce,n(Number(o.price).toLocaleString("id-ID",{style:"currency",currency:"IDR"})),1),i(f,{icon:"fill-plus",color:"#7ACDD6",width:"28",height:"28"})])],8,ye))),128))])])]),r.value&&r.value.total!=="0"?(l(),a("div",{key:0,onClick:s[2]||(s[2]=o=>z(r.value.carts_id)),class:"relative"},[e("div",ke,[e("div",Fe,[e("div",Se,[e("div",je,[e("div",De,[e("div",Ie,n(r.value.total)+" Item",1),e("div",Ve,n(p.value.join(", ")),1)]),e("div",$e,[e("div",Ae,n(x.value),1),i(f,{icon:"shopping-bag",class:"mr-4",color:"#fff",width:"28",height:"28"})])])])])])])):K("",!0)])])}}}),Be=Z(Ne,[["__scopeId","data-v-cc37e7de"]]),He=D({__name:"FindFreshFood",setup(d){return(x,u)=>(l(),a("div",null,[i(Be)]))}});export{He as default};
