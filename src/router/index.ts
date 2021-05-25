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
      roles: [0,1]
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
  //item 2
  {
    path: "",
    name: "Administração",
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
            name: "Pessoas",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
              ),
          },
          {
            path: "/sistema/cadastros/modulos",
            name: "Funcionários",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
              ),
          },

          {
            path: "/sistema/cadastros/modulos",
            name: "Bairros",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
              ),
          },

          {
            path: "/sistema/cadastros/modulos",
            name: "Logradouros",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
              ),
          },

          {
            path: "/sistema/cadastros/modulos",
            name: "Empresas",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
              ),
          },

          {
            path: "/sistema/cadastros/modulos",
            name: "Imóveis",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
              ),
          },

          {
            path: "/sistema/cadastros/modulos",
            name: "Contrução Civil",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
              ),
          },

          {
            path: "/sistema/cadastros/modulos",
            name: "Bancos",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
              ),
          },

          {
            path: "/sistema/cadastros/modulos",
            name: "Cartórios",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
              ),
          },

          {
            path: "/sistema/cadastros/modulos",
            name: "Contadores",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
              ),
          },

          {
            path: "/sistema/cadastros/modulos",
            name: "Aidf",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
              ),
          },

          {
            path: "/sistema/cadastros/modulos",
            name: "Atividades",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
              ),
          },

          {
            path: "/sistema/cadastros/modulos",
            name: "Prefixos",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
              ),
          },

          {
            path: "/sistema/cadastros/modulos",
            name: "Cidades",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
              ),
          },

          {
            path: "/sistema/cadastros/modulos",
            name: "Serviços",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
              ),
          },

          {
            path: "/sistema/cadastros/modulos",
            name: "Alíquotas do Municípios",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
              ),
          },

          {
            path: "/sistema/cadastros/modulos",
            name: "UF",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
              ),
          },

          {
            path: "/sistema/cadastros/modulos",
            name: "Materiais",
            meta: {
              menu: true,
              icon: "keyboard_tab",
            },
            beforeEnter(to, from, next) {
              store.state.token ? next() : next("login");
            },
            component: () =>
              import(
                /* webpackChunkName: "about" */ "@/views/sistema/cadastros/Modulos.vue" // criar os components
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
