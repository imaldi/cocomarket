import{k as r}from"./index-Dygp_ztf.js";import{a}from"./apiClient-CkWH4JTq.js";const i=r("cart",()=>({getCartTotal:async()=>a.get("/api/cart/total"),getCartDetail:async t=>a.get(`/api/cart/${t}/show-details`),addToCart:async t=>a.post("/api/cart",t)}));export{i as u};
