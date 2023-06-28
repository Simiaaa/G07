import types from "../types";
import ForderListApi from "@/api/getFordersList.js";
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
    ForderListApi.getFordersList()
      .then(response => {
        const folders = response.data.folders;
        console.log(folders);
        commit("SET_FOLDERS", folders);
      })
      .catch(error => {
        console.log(error.message);
        this.$message({
          message: error.message,
          type: "warning"
        });
      });
  }
};

export default {
  state,
  mutations,
  actions
};
