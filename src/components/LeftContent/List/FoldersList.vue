<template>
    <div class="folderslist" >
        <div class="content" v-for="folder in firstFoldersLength" :key="folder">
            <div class="block" id="folder" @click="selectFolder()">
                <img src="@/assets/24gf-folderOpen.png" width="40px">
                <span class="demonstration">{{ firstFolders[folder-1] }}</span>
            </div>
        </div>
    </div>
</template>
<script>
import ForderListApi from "@/api/getFordersList.js";
export default{
data(){
    return{
        totalData:[],
        firstFolders:[],
        firstFoldersLength:0,
        secondFolders:[],
        secondFoldersLength:0,
    }
},
created(){
    this.getFordersList()
},
methods:{
    getFordersList(){
        ForderListApi
        .getFordersList()
        .then(response => {
          const resp = response.data.folders;
          console.log(resp);
          console.log(resp.length);
          this.totalData=resp;
          resp.forEach((value,index) => {
            this.firstFolders[index]=value.name;
          });
          this.firstFoldersLength=resp.length;
        }).catch(error=>{
            console.log(error.message)
        })
    },
    selectFolder(){
        
    }
}
}
</script>
<style>
.folderslist{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    padding: 20px;
    overflow: auto;
}
.block{
    padding: 20px;
    display: flex;
    flex-direction: column;
    font-size: small;
}
</style>