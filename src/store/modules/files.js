import types from "../types";
import FilesListApi from "@/api/getFilesList.js";
const state = {
  files: [],
  folderPath: ""
};

const mutations = {
  [types.SET_FILES](state, { files, folderPath }) {
    state.files = files;
    state.folderPath = folderPath;
  }
};

const actions = {
  fetchFiles({ commit }, folderPath) {
    FilesListApi.getFilesList(folderPath).then(response => {
      const files = response.data.data.files;
      console.log(files);
      commit("SET_FILES", { files, folderPath: [folderPath] });
    });
  }
};

export default {
  state,
  mutations,
  actions
};
