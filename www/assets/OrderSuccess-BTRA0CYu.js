import{_ as p}from"./order-success-CbsiTQmJ.js";import{e as c,A as _,u as f,r as v,o as n,c as l,d as e,a as i,g as x}from"./index-4IDQ8Fy6.js";const w={class:"bg-white"},b=e("div",{class:"flex flex-col items-center mt-[15vh]"},[e("img",{class:"w-[60vw]",src:p,alt:"Order Success Picture"}),e("h1",{class:"text-2xl color-black font-bold my-1 w-[55vw] text-center"}," Your order successfully done "),e("p",{class:"text-sm color-black font-normal w-[55vw] my-1 text-center"}," You can track the delivery in the “in process” Section ")],-1),h={class:"absolute justify-center flex w-full",style:{bottom:"7rem"}},k={class:"flex flex-col items-center"},y=c({__name:"OrderSuccessForm",setup(a){const o=_(),s=f(),d=()=>{s.push(`/receipt/${o.params.id}`)},u=()=>{s.push(`/revieworder/${o.params.id}`)};return(C,t)=>{const m=v("icon");return n(),l("div",w,[e("div",{onClick:t[0]||(t[0]=r=>x(s).back()),class:"flex justify-items-start px-6 pt-10"},[i(m,{class:"color-black",icon:"ph:arrow-circle-left-thin",width:"15vw"})]),b,e("div",h,[e("div",k,[e("a",{onClick:t[1]||(t[1]=r=>d()),class:"text-[#7ACDD6] font-bold mb-2"},"Receipt"),e("div",{onClick:t[2]||(t[2]=r=>u()),class:"text-center p-2 rounded-md w-[80vw] bg-[#7ACDD6] font-bold text-white"}," Review Order ")])])])}}}),R=c({__name:"OrderSuccess",setup(a){return(o,s)=>(n(),l("div",null,[i(y)]))}});export{R as default};
