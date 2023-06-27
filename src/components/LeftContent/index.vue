<template>
    <div class="left">
        <list-url></list-url>
        <folders-list></folders-list>
        <files-list></files-list>
    </div>
</template>
<script>
import ListUrl from "@/components/LeftContent/List/ListURL.vue";
import FoldersList from "@/components/LeftContent/List/FoldersList.vue";
import FilesList from "@/components/LeftContent/List/FilesList.vue"
export default{
    components:{
        ListUrl,
        FoldersList,
        FilesList,
    }
}
</script>
<style>
.listurl{
    height: 5%;
    padding: 5px;
}
.folderslist{
    margin-top: 2%;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    height: 33%;
    background-color: rgba(190, 199, 222, 0.5);
}
.fileslist{
    margin-top: 1%;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    height: 50%;
    background-color: rgba(190, 199, 222, 0.5);

}
</style>