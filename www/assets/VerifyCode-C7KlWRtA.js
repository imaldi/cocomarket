import{d as v,u as y,f,k as b,r as h,o as _,c as x,e as o,a as i,g as C,l as r,v as a,m as V,w as k,j as D,p as g,i as S,_ as j}from"./index-B8-fnmfM.js";import{u as B}from"./auth-DpX5ttV1.js";import{i as I}from"./index-CD-PGjbr.js";import"./apiClient-DM8wi-aP.js";import"./change-image-profile-D1INqY5j.js";const c=n=>(g("data-v-300dc516"),n=n(),S(),n),U={class:"container"},A=c(()=>o("div",{class:"mx-8 flex flex-col items-center"},[o("h1",{class:"text-2xl color-black font-bold my-1"},"Verify Code"),o("p",{class:"text-sm text-center my-1"}," Please enter the code we just sent to email JohnDoe@Gmail.com ")],-1)),M={class:"text-center pt-4"},N=c(()=>o("div",null,"Didn't receive OTP?",-1)),T=c(()=>o("a",{class:"underline font-bold color-black",href:"#"},"Resend Code",-1)),$=v({__name:"VerifyCodeForm",setup(n){const u=B(),p=y(),t=f(["","","",""]),w=f("");b(async()=>{});const m=async()=>{const d=t.value.join("");console.log(`Verifying code: ${d}`);const e={otp:d,email:w.value};try{const l=await u.verifyCode(e);console.log(l)}catch{}};return(d,e)=>{const l=h("Button");return _(),x("div",U,[o("div",{onClick:e[0]||(e[0]=s=>C(p).back()),class:"w-full flex justify-start"},[i(I,{class:"px-8 pt-20 pb-10",icon:"outline-arrow-left",color:"#7ACDD6",width:"53",height:"53"})]),A,o("form",{class:"w-full flex justify-center pt-4",onSubmit:V(m,["prevent"])},[r(o("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>t.value[0]=s),class:"w-[16vw] border-[#00000035] rounded-xl h-8 mr-2",type:"number"},null,512),[[a,t.value[0]]]),r(o("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>t.value[1]=s),class:"w-[16vw] border-[#00000035] rounded-xl h-8 mr-2",type:"number"},null,512),[[a,t.value[1]]]),r(o("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>t.value[2]=s),class:"w-[16vw] border-[#00000035] rounded-xl h-8 mr-2",type:"number"},null,512),[[a,t.value[2]]]),r(o("input",{"onUpdate:modelValue":e[4]||(e[4]=s=>t.value[3]=s),class:"w-[16vw] border-[#00000035] rounded-xl h-8",type:"number"},null,512),[[a,t.value[3]]])],32),o("div",M,[N,T,i(l,{onClick:m,class:"w-[80vw] bg-[#7ACDD6] mt-8 text-white font-bold"},{default:k(()=>[D("Verify")]),_:1})])])}}}),F=j($,[["__scopeId","data-v-300dc516"]]),O=v({__name:"VerifyCode",setup(n){return(u,p)=>(_(),x("div",null,[i(F)]))}});export{O as default};
