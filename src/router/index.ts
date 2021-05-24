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
    beforeEnter(to, from, next) {
      store.state.token ? next() : next("login");
    },
  },
  {
    path: "/logout",
    name: "Logout",
    meta: {
      public: true,
    },
    beforeEnter(to, from, next) {
      store.commit("LOGOUT");
      next("login");
    },
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
  },
  //1 item do menu
  {
    path: "/sistema/cadastros/modulos",
    name: "Modulo",
    meta: {
      menu: true,
      icon: "home",
    },
    children: [
      {
        path: "/menu",
        name: "Menu",
        meta: {
          menu: true,
          icon: "home",
        },
        children: [
          {
            path: "/submenu",
            name: "Sub",
            meta: {
              menu: true,
              icon: "png",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue"
              ),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
