import{A as r}from"./index-B9g0HWFr.js";import{a as e}from"./apiClient-Cq4AAmw1.js";const c=r("homeStore",()=>({getAllSearch:async t=>e.get(`/api/product?search=${t}`),getBestDeal:async()=>e.get("/api/best"),getAmountWallet:async()=>e.get("/api/wallet")}));export{c as u};
