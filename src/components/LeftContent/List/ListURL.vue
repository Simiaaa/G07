<template>
    <div class="listurl">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">root</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">etc</a></el-breadcrumb-item>
            <el-breadcrumb-item>opt</el-breadcrumb-item>
            <el-breadcrumb-item>data</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<style lang="less">
.listurl .el-breadcrumb__inner {
    padding-left: 10px;
    font-size: 28px;
}
</style>