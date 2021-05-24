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
  //items do menu
  {
    path: "",
    name: "Sistema",
    meta: {
      menu: true,
      icon: "settings",
    },
    children: [
      {
        path: "",
        name: "Cadastros",
        meta: {
          menu: true,
          icon: "create",
        },
        children: [
          {
            path: "/sistema/cadastros/modulos",
            name: "Módulos",
            meta: {
              menu: true,
              icon: "keyboard_tab",
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
