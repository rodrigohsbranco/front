import TokenValid from "@/plugins/verifyToken";
import store from "@/store";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const ifAuthenticated = (to: any, from: any, next: any) => {
  if (store.state.token && TokenValid) {
    next();
    return;
  }
  router.push("login");
};

const routes: RouteConfig[] = [
  {
    path: "/logout",
    name: "Logout",
    meta: { public: true },
    beforeEnter(to, from, next) {
      store.commit("LOGOUT");
      next("login");
    },
  },
  {
    path: "*",
    name: "notFound",
    meta: { public: true },
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/login",
    name: "Login",
    alias: "/",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
    meta: { public: true },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/components/Dashboard.vue"),
    meta: {
      home: true,
      menu: true,
      desc: "Dashboard",
      icon: "dashboard",
    },
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/sistema",
    meta: { menu: true, icon: "settings", desc: "Sistema" },
    component: {
      render(c) {
        return c("router-view");
      },
    },
    beforeEnter: ifAuthenticated,
    children: [
      {
        path: "/modulos",
        name: "Modulos",
        meta: { menu: true, desc: "Módulos" },
        component: () =>
          import(
            /* ebpackChwunkName: "modulos" */ "@/views/sistema/Modulos.vue"
          ),
      },
      {
        path: "/users",
        name: "Users",
        meta: { menu: true, desc: "Usuários" },
        component: () =>
          import(/* webpackChunkName: "modulos" */ "@/views/sistema/Users.vue"),
      },
    ],
  },

  //item 2
  {
    path: "/cadastros",
    meta: { menu: true, icon: "create", desc: "Cadastros" },
    component: {
      render(c) {
        return c("router-view");
      },
    },
    beforeEnter: ifAuthenticated,
    children: [
      {
        path: "/pessoas",
        name: "Pessoas",
        meta: { menu: true, desc: "Pessoas" },
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/cadastros/Pessoas.vue" // criar os components
          ),
      },
      {
        path: "/funcionarios",
        name: "Funcionarios",
        meta: {
          menu: true,
          desc: "Funcionários",
        },
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/cadastros/Funcionarios.vue" // criar os components
          ),
      },

      {
        path: "/bairros",
        name: "Bairros",
        meta: {
          menu: true,
          desc: "Bairros",
        },
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/cadastros/Bairros.vue" // criar os components
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
