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
}
.folderslist{
    margin-top: 2%;
    border: 1px solid black;
    border-radius: 4px;
    height: 23%;
}
.fileslist{
    margin-top: 1%;
    border: 1px solid black;
    border-radius: 4px;
    height: 65%;
}
</style>