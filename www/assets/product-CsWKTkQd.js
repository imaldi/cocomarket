import{q as o}from"./index-4IDQ8Fy6.js";import{a as r}from"./apiClient-Duzv9xlq.js";const a=o("product",()=>({getHistory:async()=>r.get("/api/history"),getHistoryByid:async t=>r.get(`/api/history/${t}`),getProductById:async t=>r.get(`/api/product/${t}`)}));export{a as u};
