import Vue from "vue";
import Main from "@/components/Main.vue";
import router from "./router";
import store from "./store";
import vuetify from "@/plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(Main),
}).$mount("#app");
