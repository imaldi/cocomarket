import{e as f,u as m,f as b,l as x,r as y,o as l,c as a,d as s,g as p,a as d,s as w,x as g,t as c,p as A,j as k,_ as D}from"./index-4IDQ8Fy6.js";import{u as C}from"./address-BeAESHgP.js";import"./apiClient-Duzv9xlq.js";const F=o=>(A("data-v-0d2b3967"),o=o(),k(),o),S={class:"container"},j={class:"bg-white shadow-md rounded-xl p-8"},M={class:"flex"},I=F(()=>s("div",{class:"w-full justify-center flex font-bold"},"My Address",-1)),B={class:"mx-8 my-14"},L={class:"w-1/6 flex justify-center"},N={class:"w-1/1 text-sm"},$={class:"font-bold"},E={class:"font-300"},V={class:"w-1/6 flex items-center justify-center"},R={class:"my-8 flex justify-around px-10 py-4 bg-[#EFFDFF] border-dotted border-2 rounded-3xl border-[#7ACDD6]"},q=f({__name:"MyAddressForm",setup(o){const i=m(),u=C(),_=b([]),h=async()=>{try{const t=await u.getListAddress();_.value=t.data,console.log(t)}catch(t){console.log(t)}finally{}};return x(()=>{h()}),(t,r)=>{const n=y("icon");return l(),a("div",null,[s("div",S,[s("div",j,[s("div",M,[s("div",{onClick:r[0]||(r[0]=e=>p(i).push("profile"))},[d(n,{icon:"ion:arrow-back-circle-outline",color:"#000",width:"28",height:"28"})]),I])]),s("div",B,[s("div",null,[(l(!0),a(w,null,g(_.value,(e,v)=>(l(),a("div",{key:v,class:"flex w-full border border-dotted border-gray border-x-0 border-t-0 pb-4 mb-4"},[s("div",L,[d(n,{class:"rounded-full",icon:"solar:map-point-linear",width:"24",color:"black"})]),s("div",N,[s("div",$,c(e.name),1),s("div",E,c(e.city)+", "+c(e.address)+","+c(e.district),1)]),s("div",V,[d(n,{class:"rounded-full",icon:"mingcute:right-line",width:"24",color:"black"})])]))),128))]),s("div",R,[s("div",null,[d(n,{icon:"tabler:plus",color:"#7ACDD6",width:"28",height:"28"})]),s("div",{onClick:r[1]||(r[1]=e=>p(i).push("addaddress")),class:"font-bold text-xl text-[#7ACDD6]"}," Add New Address ")])])])])}}}),z=D(q,[["__scopeId","data-v-0d2b3967"]]),K=f({__name:"MyAddress",setup(o){return(i,u)=>(l(),a("div",null,[d(z)]))}});export{K as default};
