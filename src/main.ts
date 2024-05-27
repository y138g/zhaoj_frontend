import { createApp } from "vue";
import App from "./App.vue";
import ArcoVue from "@arco-design/web-vue";
import router from "./router";
import "@arco-design/web-vue/dist/arco.css";
import store from "./store";
import "@/plugins/axios.ts";
import "@/access";
import "bytemd/dist/index.css";
import "@arco-design/web-vue/es/icon";
import ArcoVueIcon from "@arco-design/web-vue/es/icon";

createApp(App)
  .use(ArcoVueIcon)
  .use(ArcoVue)
  .use(store)
  .use(router)
  .mount("#app");
