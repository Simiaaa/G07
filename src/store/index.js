import Vue from "vue";
import Vuex from "vuex";
import folders from "./modules/folders";
import files from "./modules/files";
import keywordList from "./modules/keywordList";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    folders,
    files,
    keywordList
  }
});

export default store;
