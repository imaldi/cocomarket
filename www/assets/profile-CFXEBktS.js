import{A as t}from"./index-B9g0HWFr.js";import{a as r}from"./apiClient-Cq4AAmw1.js";const n=t("profile",()=>({updatePhotoProfile:async e=>r.post("/api/user/uploadprofile",e,{headers:{"Content-Type":"multipart/form-data"}}),updateProfile:async e=>r.put("/api/user/profile",e),updatePassword:async e=>r.post("/api/auth/change",e),getProfile:async()=>r.get("/api/user/profile")}));export{n as u};
