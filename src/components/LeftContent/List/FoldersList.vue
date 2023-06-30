<template>
  <div class="folders">
    <div class="folderslist">
      <ul>
        <li class="content" v-for="folder in folders" :key="folder.id">
          <div
            class="block"
            id="folder"
            @click.stop="selectFolder(folder)"
            :class="{ 'active-folder': isFolderActive }"
          >
            <img src="@/assets/24gf-folderOpen.png" width="40px" />
            <span class="demonstration">{{ folder.name }}</span>
          </div>
          <ul v-if="folder.expanded">
            <li
              v-for="subFolder in folder.folders"
              :key="subFolder.id"
              :class="{ 'checked-folder': isFolderChecked(subFolder) }"
            >
              <div class="block" id="subFolder" @click="checkFolder(subFolder)">
                <img src="@/assets/24gf-folderOpen.png" width="40px" />
                <span class="demonstration">{{ subFolder.name }}</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="btn">
      <el-button
        type="primary"
        class="backBtn"
        v-if="isSecondLevel"
        @click="goToFirstLevel()"
        >返回</el-button
      >
      <el-button
        type="primary"
        class="sureBtn"
        v-if="isFolderActive"
        @click="saveSelectedFolder"
        :disabled="isNoFolderChecked"
        >确定</el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeFolderId: null,
      checkedFolderId: null,
      isSecondLevel: false,
      selectedFolderName: "",
      parentFolderName: ""
    };
  },
  created() {
    this.getFoldersList();
  },
  methods: {
    getFoldersList() {
      this.$store.dispatch("fetchFolders");
    },
    selectFolder(folder) {
      folder.expanded = !folder.expanded;
      this.activeFolderId = folder.expanded ? folder.id : null;
      this.isSecondLevel = folder.expanded;
      this.updateFolderStatus(folder);
    },
    checkFolder(subFolder) {
      subFolder.checked = !subFolder.checked;
      this.checkedFolderId = subFolder.checked ? subFolder : null;
    },
    goToFirstLevel() {
      this.isSecondLevel = false;
      this.updateFolderStatus(null);
      this.checkedFolderId = null;
    },
    updateFolderStatus(selectedFolder) {
      this.folders.forEach(folder => {
        folder.expanded = folder === selectedFolder;
      });
    },
    saveSelectedFolder() {
      const parentFolder = this.folders.find(folder => folder.expanded);
      if (parentFolder) {
        this.parentFolderName = parentFolder.name;
        const selectedFolder = parentFolder.folders.find(
          subFolder => subFolder.checked
        );
        this.selectedFolderName = selectedFolder.name;
      }
      this.$store.dispatch(
        "fetchFiles",
        "/" + this.parentFolderName + "/" + this.selectedFolderName
      );
    }
  },
  computed: {
    folders() {
      return this.$store.state.folders.folders;
    },
    isFolderActive() {
      return this.folders.find(folder => folder.expanded);
    },
    isFolderChecked() {
      return subFolder => subFolder === this.checkedFolderId;
    },
    isNoFolderChecked() {
      /* return this.folders.every((folder) => {
        return !folder.folders.some((subFolder) => subFolder.checked);
      }); */
      return !this.checkedFolderId;
    }
  }
};
</script>
<style type="text/javascript">
.folderslist {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  padding: 20px;
  overflow: auto;
}
.block {
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-size: small;
  align-items: center;
}
.active-folder {
  display: none;
}
.checked-folder {
  background-color: grey;
}
.folderslist ul li {
  float: left;
  margin-left: 0px;
}
/* .folders .btn{
  left: 50%;
} */
</style>
