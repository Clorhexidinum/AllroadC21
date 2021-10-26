import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueThreeSixty from 'vue-360';

createApp(App).use(store).use(router).use(VueThreeSixty).mount("#app");