module.exports = {
  devServer: {
    port: 8888,
    open: true,
    https: false,
    host: "localhost",
    proxy: {
      //'/dev-apis':{
      [process.env.VUE_APP_BASE_API]: {
        //target:'http://localhost:8080/',
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: {
          //'^/dev-apis':''
          ["^" + process.env.VUE_APP_BASE_API]: "",
        },
      },
    },
  },
  publicPath:"/",
  lintOnSave: false, //关闭格式检查
  productionSourceMap: false, //打包时不生成.map文件，加快打包速度
};
