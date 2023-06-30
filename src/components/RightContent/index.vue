<template>
  <div class="right">
    <div v-if="count == 0">
      <el-empty description="还没有检索的结果哦~快去检索文件吧"></el-empty>
    </div>
    <div
      v-else-if="count != 0"
      v-for="keywordNote in keywordNotes"
      :key="keywordNote.id"
    >
      <el-card class="box-card" id="card" shadow="hover" ref="myCard">
        <div slot="header" class="clearfix">
          <span>{{ keywordNote.path }}</span>
          <el-checkbox
            v-model="selectedNotes"
            :label="keywordNote.id"
          ></el-checkbox>
        </div>
        <div
          v-for="keywordContent in keywordNote.data"
          :key="keywordContent"
          class="text item"
        >
          <span class="line-number">行号{{ keywordContent.rowIndex }}</span>
          <span
            v-html="highlightKeywords(keywordContent.content, keyword)"
          ></span>
        </div>
      </el-card>
    </div>
    <el-button
      class="downloadBtn"
      type="primary"
      icon="el-icon-download"
      circle
      @click="downloadSelectedNotes"
    ></el-button>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      selectedNotes: []
    };
  },
  computed: {
    keywordNotes() {
      return this.$store.state.keywordList.keywordList;
    },
    count() {
      return this.$store.state.keywordList.keywordList.length;
    },
    keyword() {
      return this.$store.state.keywordList.keyword || [];
    }
  },
  methods: {
    downloadSelectedNotes() {
      if (this.selectedNotes.length === 0) {
        // 如果没有选中任何记录，则提示用户选择至少一条记录
        alert("请至少选择一条记录");
        return;
      }

      // 合并选中的记录为一个文本
      const mergedText = this.selectedNotes
        .map(noteId => {
          const note = this.keywordNotes.find(note => note.id === noteId);
          const content = note.data
            .map(item => `行号${item.rowIndex} ${item.content}`)
            .join("\n");
          return `${note.path}\n-----------------------------\n${content}\n`;
        })
        .join("\n");

      // 创建一个下载链接并触发下载
      const element = document.createElement("a");
      const file = new Blob([mergedText], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "merged_notes.txt";
      document.body.appendChild(element); // 将链接元素添加到页面中
      element.click(); // 触发下载
      document.body.removeChild(element); // 下载完成后移除链接元素
    },
    highlightKeywords(content, keyword) {
      const regex = new RegExp(`(${keyword.join("|")})`, "gi");
      return content.replace(regex, '<span class="highlight">$1</span>');
    }
  }
};
</script>
<style>
.right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 10px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 350px;
  height: fit-content;
  margin-bottom: 10px;
  text-align: left;
}

.box-card .el-checkbox {
  float: right;
}

.box-card .el-checkbox__inner {
  width: 22px;
  height: 22px;
  border-color: #409eff;
}

.downloadBtn {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.5);
}
.line-number {
  background-color: #409eff;
}
.highlight {
  color: red;
  font-weight: bold;
}
</style>
