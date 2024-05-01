import Vue from "vue";
import Vuex from "vuex";

import home from "./modules/home";
import shelters from "./modules/shelters";
import blogs from "./modules/blogs";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    shelters,
    blogs,
  },
});
