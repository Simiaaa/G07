import myaxios from "../utils/myaxios";
//import axios from "axios";
export default {
  getKeywordList(keyword, folderPath) {
    return myaxios({
      url: "/system/keywordList",
      method: "post",
      data: {
        //请求参数：两个字符串
        keyword,
        folderPath
      }
    });
  }
};
