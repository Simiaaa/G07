<template>
  <div class="left">
    <list-url></list-url>
    <folders></folders>
    <files-list></files-list>
  </div>
</template>
<script type="text/javascript">
import ListUrl from "@/components/LeftContent/List/ListURL.vue";
import Folders from "@/components/LeftContent/List/FoldersList.vue";
import FilesList from "@/components/LeftContent/List/FilesList.vue";
export default {
  components: {
    ListUrl,
    Folders,
    FilesList
  }
};
</script>
<style>
.listurl {
  height: 5%;
  padding: 5px;
}
.folders {
  margin-top: 2%;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  height: 33%;
  background-color: rgba(190, 199, 222, 0.5);
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.fileslist {
  margin-top: 1%;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  height: 50%;
  background-color: rgba(190, 199, 222, 0.5);
}
</style>
