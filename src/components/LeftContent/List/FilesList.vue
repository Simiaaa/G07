<template>
    <div class="fileslist">
            <el-input
            class="input"
            placeholder="请输入关键词"
            prefix-icon="el-icon-search"
            v-model="keywords">
            <template slot="append">
                <el-button class="inputBtn" type="primary" icon="el-icon-search">搜索</el-button>
            </template>
            </el-input>
            <h1>可选文件列表</h1>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        keywords:"",
      };
    }
  };
</script>
<style>

</style>

