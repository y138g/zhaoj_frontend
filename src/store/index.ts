import { createStore } from "vuex";
import user from "./user";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  mutations: {},
  actions: {},
  modules: {
    user,
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
      key: "vuex",
      paths: ["user"], // 指定需要持久化的状态路径
    }),
  ],
});
