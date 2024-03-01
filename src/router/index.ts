import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "main",
    component: () => import("../layouts/Main.vue"),
    children: [
      {
        path: "/",
        name: "Login",
        component: () => import("../views/Login.vue"),
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("../views/Register.vue"),
      },
      {
        path: "/profile",
        name: "Profile",
        component: () => import("../views/Profile.vue"),
      },
      {
        path: "/completeyourprofile",
        name: "CompleteYourProfile",
        component: () => import("../views/CompleteYourProfile.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
