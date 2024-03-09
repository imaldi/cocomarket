import{d as g,f as r,u as N,r as h,o as u,c as p,e as o,a as s,w as x,g as i,F as b,t as S,b as B,j as D,h as F,p as I,i as L,_ as T}from"./index-B9g0HWFr.js";import{u as U}from"./profile-CFXEBktS.js";import{P as j}from"./SuccessDialog-BU5D-Qv2.js";import"./apiClient-Cq4AAmw1.js";const m=t=>(I("data-v-c7939002"),t=t(),L(),t),A={class:"container"},E={class:"bg-white shadow-md rounded-xl p-8"},M=m(()=>o("div",{class:"w-full justify-center flex font-bold"}," Change Password ",-1)),R={class:"mx-8 my-6"},$=m(()=>o("label",{for:"password",class:"my-2 text-base font-bold text-sm text-black text-left"},"New Password",-1)),q={class:"text-danger text-left text-sm mt-0"},z=m(()=>o("label",{class:"my-2 text-base font-bold text-sm text-black text-left",for:"confirmPassword"},"Confirm New Password",-1)),G={key:0,class:"text-red-500 text-sm"},H=g({__name:"ChangePasswordForm",setup(t){const n=r(!1),a=r(""),l=r(""),f=r(!1),w=N(),v=U(),P=()=>{w.push("/profile")},y=()=>{w.push("/")},C=async()=>{if(a.value!==l.value){f.value=!0;return}const _={newPassword:a.value,passwordConfirmation:l.value};try{const e=await v.updatePassword(_);console.log(e),n.value=!0}catch(e){console.error(e)}};return(_,e)=>{const V=h("icon"),k=h("Button");return u(),p("div",null,[o("div",A,[o("div",E,[o("div",{onClick:P,class:"flex"},[o("div",null,[s(V,{icon:"ion:arrow-back-circle-outline",color:"#000",width:"28",height:"28"})]),M])]),o("div",R,[s(i(F),{class:"flex flex-col px-2 pt-6",onSubmit:C},{default:x(({errors:d})=>[$,s(i(b),{name:"password",class:"shadow appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white",id:"password",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=c=>a.value=c),type:"password",rules:"maxLength:12|minLength:8",placeholder:"*********"},null,8,["modelValue"]),o("p",q,S(d.password),1),z,s(i(b),{name:"confirmPassword",modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=c=>l.value=c),class:"shadow appearance-none border border-black border-solid rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white",id:"confirmPassword",type:"password",placeholder:"*********"},null,8,["modelValue"]),f.value?(u(),p("div",G," Passwords tidak sesuai. ")):B("",!0),s(k,{type:"submit",class:"w-[80vw] bg-[#7ACDD6] text-white mt-6 font-bold"},{default:x(()=>[D("Change Password")]),_:1})]),_:1})]),s(j,{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=d=>n.value=d),message:"Password Update Successfully",title:"Back To Login",onConfirm:y},null,8,["modelValue"])])])}}}),J=T(H,[["__scopeId","data-v-c7939002"]]),X=g({__name:"ChangePassword",setup(t){return(n,a)=>(u(),p("div",null,[s(J)]))}});export{X as default};
