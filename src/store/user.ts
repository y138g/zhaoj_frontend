// initial state
import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: {
    loginUser: {
      username: "未登录",
      role: "notLogin",
    },
  },
  getters: {},
  actions: {
    getLoginUser({ commit, state }, payload) {
      //todo 改成远程请求获取登录信息
      commit("updateUser", { username: "刘伟" });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
