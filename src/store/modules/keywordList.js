import types from "../types";
import KeywordListApi from "@/api/getKeywordList";
const state = {
  keywordList: [],
  keyword: ""
};

const mutations = {
  [types.SET_KEYWORDLIST](state, { keywordList, keyword }) {
    state.keywordList = keywordList;
    state.keyword = keyword;
  }
};

const actions = {
  fetchKeywordList({ commit }, { keyword, folderPath }) {
    KeywordListApi.getKeywordList(keyword, folderPath).then(response => {
      const keywordList = response.data.data.files;
      console.log(keywordList);
      commit(types.SET_KEYWORDLIST, { keywordList, keyword: [keyword] });
    });
  }
};

export default {
  state,
  mutations,
  actions
};
