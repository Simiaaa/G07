<template>
    <div>
      <left-content></left-content>
      <right-content></right-content>
    </div>
  </template>
  <script>
  import LeftContent from "@/components/LeftContent";
  import RightContent from "@/components/RightContent";
  export default {
    components: {
        LeftContent,
        RightContent
    }
  };
  </script>
  <style>
.left {
  position: absolute;
  width: 700px;
  background-color: #ffffff;
  left: 0px;
  top: 0px;
  bottom: 0px;
  padding: 30px;
  overflow-y: auto;
  border-right: 1px black solid;
}
.right {
  position: absolute;
  /*     background-color: #1e2020; */
  left: 760px;
  right: 0px;
  bottom: 0px;
  top:0px;
  padding: 10px;
  overflow-y: auto;
}
  </style>
  