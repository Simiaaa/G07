import Vue from "vue";
import Vuex from "vuex";
import folders from "./modules/folders";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    folders
  }
});

export default store;
