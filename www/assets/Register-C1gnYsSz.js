import{d as v,u as b,f as n,o as m,c as _,e as a,g as r,v as c,h as w,i as g,p as y,j as x,_ as S,a as A}from"./index-CvbjM0q9.js";import{_ as V,a as k,b as I}from"./facebook-logo-C9MazKPo.js";import{u as U}from"./auth-zYHTKayh.js";import"./apiClient-DZfQYoOf.js";const o=s=>(y("data-v-4fd17f2a"),s=s(),x(),s),N={class:"container text-center"},R=o(()=>a("div",{class:"register-title"},[a("h1",null,"Create Account"),a("h5",null,"Fill your information below or register with your social account")],-1)),B=o(()=>a("p",{class:"input-title"},"Name",-1)),C=o(()=>a("p",{class:"input-title"},"Email",-1)),F=o(()=>a("p",{class:"input-title"},"Password",-1)),L=g('<div class="term-checkbox" data-v-4fd17f2a><input type="checkbox" data-v-4fd17f2a><label class="term-label" data-v-4fd17f2a>Agree with <a href="#" class="term-condition" data-v-4fd17f2a>Term &amp; Condition</a></label></div><button type="submit" class="submit-button" data-v-4fd17f2a>Sign Up</button>',2),E=g('<div class="or-sign-section" data-v-4fd17f2a><hr class="line" data-v-4fd17f2a><p class="or-sign-in-with" data-v-4fd17f2a>Or With</p><hr class="line" data-v-4fd17f2a></div><div class="sign-in-social" data-v-4fd17f2a><div class="apple" data-v-4fd17f2a><img src="'+V+'" alt="Logo Apple" class="logo-icon" data-v-4fd17f2a></div><div class="google" data-v-4fd17f2a><img src="'+k+'" alt="Logo Apple" class="logo-icon" data-v-4fd17f2a></div><div class="facebook" data-v-4fd17f2a><img src="'+I+'" alt="Logo Apple" class="logo-icon" data-v-4fd17f2a></div></div><p class="sign-up-title" data-v-4fd17f2a> Already Have an account? <a href="#" class="sign-up" data-v-4fd17f2a>Sign In</a></p>',3),M=v({__name:"RegisterForm",setup(s){const p=b(),f=U(),i=n(""),l=n(""),d=n(""),h=async()=>{const u={email:i.value,password:l.value,name:d.value};try{const t=await f.register(u);console.log(t),p.push("/")}catch{}};return(u,t)=>(m(),_("div",N,[R,a("form",{onSubmit:w(h,["prevent"]),class:"register-form"},[B,r(a("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>d.value=e),placeholder:"name",class:"input-field"},null,512),[[c,d.value]]),C,r(a("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e),placeholder:"Username",class:"input-field"},null,512),[[c,i.value]]),F,r(a("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>l.value=e),placeholder:"Password",class:"input-field"},null,512),[[c,l.value]]),L],32),E]))}}),P=S(M,[["__scopeId","data-v-4fd17f2a"]]),O=v({__name:"Register",setup(s){return(p,f)=>(m(),_("div",null,[A(P)]))}});export{O as default};
