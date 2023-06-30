<template>
  <div class="fileslist">
    <div class="list">
      <ul v-for="file in files" :key="file.id">
        <li>
          <span class="fileBlock" v-if="file.type == 'pdf'">
            <img src="@/assets/PDF.png" width="25px" />
            {{ file.name }}</span
          >
          <span class="fileBlock" v-if="file.type == 'word'">
            <img src="@/assets/word.png" width="25px" />
            {{ file.name }}</span
          >
        </li>
      </ul>
    </div>
    <div class="input">
      <el-input
        placeholder="请输入关键词"
        prefix-icon="el-icon-search"
        v-model="keyword"
      >
      </el-input>
      <el-button
        class="inputBtn"
        type="primary"
        icon="el-icon-search"
        @click="keywordSearch()"
        >搜索</el-button
      >
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    keywordSearch() {
      this.$store.dispatch("fetchKeywordList", {
        keyword: this.keyword,
        folderPath: this.$store.state.files.folderPath
      });
    }
  },
  computed: {
    files() {
      return this.$store.state.files.files;
    }
  }
};
</script>
<style lang="less">
.fileslist {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.input {
  display: flex;
  margin: 10px;
  flex-direction: row;
}

.input .el-input__inner {
  border-radius: 4px 0px 0px 4px;
  border-width: 0px;
}

.list {
  overflow: auto;
}

.list .el-checkbox__label {
  font-size: 20px;
}
ul li {
  list-style: none;
  float: left;
  margin-left: 30px;
}

ul li .fileBlock {
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-size: small;
  align-items: center;
}
ul li img {
  display: inline-block;
  vertical-align: bottom;
}
</style>
