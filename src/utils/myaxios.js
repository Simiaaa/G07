import axios from "axios";
import { Loading, Message } from "element-ui";

const loading = {
  loadingInstance: null,
  open: function() {
    if (this.loadingInstance === null) {
      this.loadingInstance = Loading.service({
        target: ".main",
        text: "玩命加载中",
        background: "rgba(255,255,255,1)"
      });
    }
  },
  close: function() {
    if (this.loadingInstance != null) {
      this.loadingInstance.close();
    }
    this.loadingInstance = null;
  }
};

//改进并封装原生的axios
const myaxios = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
  /* timeout: 5000 */
});

// 添加请求拦截器
myaxios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    loading.open();
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    loading.close();
    return Promise.reject(error);
  }
);

// 添加响应拦截器
myaxios.interceptors.response.use(
  function(response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    loading.close();
    /*     const resp = response.data; */
    /*     if (resp.code != 200) {
      Message({
        message: resp.message,
        type: "warning",
        duration: 5000,
        showClose: true
      });
    } */
    return response;
  },
  function(error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    loading.close();
    Message({
      message: error.message,
      type: "error",
      duration: 5000
    });
    return Promise.reject(error);
  }
);

/* myaxios.get('/data.json')
    .then(resp=>{
        console.log(resp.data)
    })
    .catch(err=>{
        console.log("请求失败"+err)
    }) */
export default myaxios;
