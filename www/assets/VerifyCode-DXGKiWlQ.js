import{e as _,u as h,f,l as C,r as v,o as x,c as w,d as o,a as c,g as V,m as r,v as a,n as k,w as D,k as g,p as S,j as B,_ as j}from"./index-ChTS1shc.js";import{u as I}from"./auth-CL8T-rCq.js";import"./apiClient-CjKOsRA0.js";const i=s=>(S("data-v-010f8a35"),s=s(),B(),s),U={class:"container"},A=i(()=>o("div",{class:"mx-8 flex flex-col items-center"},[o("h1",{class:"text-2xl color-black font-bold my-1"},"Verify Code"),o("p",{class:"text-sm text-center my-1"}," Please enter the code we just sent to email JohnDoe@Gmail.com ")],-1)),M={class:"text-center pt-4"},N=i(()=>o("div",null,"Didn't receive OTP?",-1)),T=i(()=>o("a",{class:"underline font-bold color-black",href:"#"},"Resend Code",-1)),$=_({__name:"VerifyCodeForm",setup(s){const u=I(),m=h(),t=f(["","","",""]),y=f("");C(async()=>{});const p=async()=>{const d=t.value.join("");console.log(`Verifying code: ${d}`);const e={otp:d,email:y.value};try{const l=await u.verifyCode(e);console.log(l)}catch{}};return(d,e)=>{const l=v("icon"),b=v("Button");return x(),w("div",U,[o("div",{onClick:e[0]||(e[0]=n=>V(m).back()),class:"mx-8"},[c(l,{icon:"ion:arrow-back-outline",color:"#7ACDD6",width:"38",height:"38"})]),A,o("form",{class:"w-full flex justify-center pt-4",onSubmit:k(p,["prevent"])},[r(o("input",{"onUpdate:modelValue":e[1]||(e[1]=n=>t.value[0]=n),class:"w-[16vw] border-[#00000035] rounded-xl h-8 mr-2",type:"number"},null,512),[[a,t.value[0]]]),r(o("input",{"onUpdate:modelValue":e[2]||(e[2]=n=>t.value[1]=n),class:"w-[16vw] border-[#00000035] rounded-xl h-8 mr-2",type:"number"},null,512),[[a,t.value[1]]]),r(o("input",{"onUpdate:modelValue":e[3]||(e[3]=n=>t.value[2]=n),class:"w-[16vw] border-[#00000035] rounded-xl h-8 mr-2",type:"number"},null,512),[[a,t.value[2]]]),r(o("input",{"onUpdate:modelValue":e[4]||(e[4]=n=>t.value[3]=n),class:"w-[16vw] border-[#00000035] rounded-xl h-8",type:"number"},null,512),[[a,t.value[3]]])],32),o("div",M,[N,T,c(b,{onClick:p,class:"w-[80vw] bg-[#7ACDD6] mt-8 text-white font-bold"},{default:D(()=>[g("Verify")]),_:1})])])}}}),F=j($,[["__scopeId","data-v-010f8a35"]]),G=_({__name:"VerifyCode",setup(s){return(u,m)=>(x(),w("div",null,[c(F)]))}});export{G as default};
