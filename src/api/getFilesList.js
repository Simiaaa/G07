import myaxios from "../utils/myaxios";
//import axios from "axios";
export default {
  getFilesList(folderPath) {
    return myaxios({
      url: "/system/files",
      method: "post",
      //请求参数：字符串
      data: folderPath
    });
  }
};
