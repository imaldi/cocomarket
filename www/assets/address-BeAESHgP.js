import{q as d}from"./index-4IDQ8Fy6.js";import{a as e}from"./apiClient-Duzv9xlq.js";const i=d("address",()=>({getListAddress:async()=>e.get("/api/addresses"),getAddressDetail:async s=>e.get(`/api/addresses/${s}`),addAddress:async s=>e.post("/api/addresses",s)}));export{i as u};
