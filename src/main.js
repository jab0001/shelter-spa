import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/index.css";
import "@/assets/css/fonts.css";
import "@/assets/fontello/css/fontello.css";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
