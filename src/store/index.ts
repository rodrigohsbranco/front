import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token"),
  },
  mutations: {
    LOGIN(state, data) {
      // localStorage.setItem("refreshToken", data.refresh_token);
      // localStorage.setItem(
      //   "expire",
      //   String(Math.floor(Date.now() / 1000) + data.expire / 1000)
      // );
      localStorage.setItem("token", data.token);

      state.token = data.token;
    },
    LOGOUT(state) {
      sessionStorage.clear();
      localStorage.clear();
      state.token = "";
    },
  },
  actions: {},
  modules: {},
});
