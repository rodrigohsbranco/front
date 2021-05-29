import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token"),
    userId: localStorage.getItem("userId"),
    expire: localStorage.getItem("expire"),
  },

  getters: {
    getUserRole: (state) => () => {
      // return state.userInfo.filter((role) => role);
    },
  },
  mutations: {
    LOGIN(state, data) {
      // localStorage.setItem("refreshToken", data.refresh_token);
      localStorage.setItem("expire", data.expire);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user.id);
      state.userId = data.user.id;
      state.token = data.token;
      state.expire = data.expire;
    },
    LOGOUT(state) {
      sessionStorage.clear();
      localStorage.clear();
      state.token = "";
      state.userId = "";
      state.expire = "";
    },
  },
  actions: {},
  modules: {},
});
