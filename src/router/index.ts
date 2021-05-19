import store from "@/store";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/home",
    name: "Home",
    meta: {
      home: true,
    },
    component: Home,
  },
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
    alias: "/login",
    meta: {
      public: true,
    },
    beforeEnter(to, from, next) {
      store.commit("LOGOUT");
      next();
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
