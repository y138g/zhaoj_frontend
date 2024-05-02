import { createApp } from "vue";
import App from "./App.vue";
import ArcoVue from "@arco-design/web-vue";
import router from "./router";
import "@arco-design/web-vue/dist/arco.css";
import store from "./store";
import "@/plugins/axios.ts";
import "@/access";
import "bytemd/dist/index.css";

createApp(App).use(ArcoVue).use(store).use(router).mount("#app");
