import types from "../types";
import FolderListApi from "@/api/getFoldersList.js";
const state = {
  folders: []
};

const mutations = {
  [types.SET_FOLDERS](state, folders) {
    console.log(folders);
    state.folders = folders;
  }
};

const actions = {
  fetchFolders({ commit }) {
    FolderListApi.getFoldersList().then(response => {
      const folders = response.data.folders;
      console.log(folders);
      commit("SET_FOLDERS", folders);
    });
  }
};

export default {
  state,
  mutations,
  actions
};
