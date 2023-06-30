import myaxios from "../utils/myaxios";
//import axios from "axios";
export default {
  getFoldersList() {
    return myaxios({
      /* url: "/folders/folders.sh", */
      url: "/system/folders",
      method: "get"
      //不需要请求参数
    });
  }
};
