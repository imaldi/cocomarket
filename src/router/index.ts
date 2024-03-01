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
        path: "/splashScreen",
        name: "SplashScreen",
        component: () => import("../views/SplashScreen/SplashScreen.vue"),
      },
      {
        path: "/splashScreen1",
        name: "SplashScreen1",
        component: () => import("../views/SplashScreen/SplashScreen1.vue"),
      },
      {
        path: "/splashScreen2",
        name: "SplashScreen2",
        component: () => import("../views/SplashScreen/SplashScreen2.vue"),
      },
      {
        path: "/splashScreen3",
        name: "SplashScreen3",
        component: () => import("../views/SplashScreen/SplashScreen3.vue"),
      },
      {
        path: "/splashScreen4",
        name: "SplashScreen4",
        component: () => import("../views/SplashScreen/SplashScreen4.vue"),
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
