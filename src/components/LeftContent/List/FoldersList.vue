<template>
    <div class="folderslist" >
        <div class="content" v-for="folder in 30" :key="folder">
            <div class="block" id="folder">
                <img src="@/assets/24gf-folderOpen.png" width="40px">
                <span class="demonstration">默认</span>
            </div>
        </div>
    </div>
</template>
<script>

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