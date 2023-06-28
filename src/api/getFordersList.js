import myaxios from "../utils/myaxios";
export default {
  getFordersList() {
    return myaxios({
      url: "/system/folders",
      method: "get"
    });
  }
};
