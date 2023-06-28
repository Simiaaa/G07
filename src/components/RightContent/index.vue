<template>
  <div class="right">
    <div v-if="count == 0">
      <el-empty description="还没有检索的结果哦~快去检索文件吧"></el-empty>
    </div>
    <div v-else-if="count != 0" v-for="card in count" :key="card">
      <el-card class="box-card" id="card" shadow="hover" ref="myCard">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          >
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
    </div>
    <el-button
      class="downloadBtn"
      type="primary"
      icon="el-icon-download"
      circle
    ></el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    };
  }
};
</script>
<style>
.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
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
}

.downloadBtn {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.5);
}
</style>
