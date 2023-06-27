<template>
    <div class="fileslist">
      <div class="input">
        <el-input
            placeholder="请输入关键词"
            prefix-icon="el-icon-search"
            v-model="keywords">
            </el-input>
            <el-button class="inputBtn" type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <div class="list">
        <ul v-for="li in 50" :key="li">
          <li>
            <el-checkbox v-model="checked">
              <img src="@/assets/PDF.png" width="25px">
              备选项.pdf</el-checkbox>
              <el-checkbox v-model="checked">
              <img src="@/assets/word.png" width="25px">
              文档.docx</el-checkbox>
          </li>
        </ul>
      </div>
      <el-button type="primary" plain>保存结果</el-button>
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
<style lang="less">
.fileslist{
  display: flex;
  flex-direction: column;
  justify-content:space-around; 
}
.input{
  display: flex;
  margin: 10px;
  flex-direction:row;
}

.input .el-input__inner{
  border-radius: 4px 0px 0px 4px;
  border-width: 0px;
}

.input .el-button{
  border-radius: 0px 4px 4px 0px;
}

.fileslist .el-button--primary.is-plain{
  color: #FFF;
  background-color: #409EFF;
}

.list{
  overflow: auto;
}

.list .el-checkbox__label{
  font-size: 20px;
}
ul li{
    list-style: none;
    float: left;
    margin-left: 30px;
}
ul li img{
  display: inline-block;
  vertical-align:bottom;
}
</style>

