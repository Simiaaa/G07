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
  width: 60%;
  background-color: #F2F6FC;
  left: 0px;
  top: 0px;
  bottom: 0px;
  padding: 3%;
  overflow-y: auto;
}
.right {
  position: absolute;
  background-color: rgba(190, 199, 222, 0.5);
  left: 66%;
  right: 0px;
  bottom: 0px;
  top:0px;
  padding: 10px;
  overflow-y: auto;
  box-shadow: inset 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
  </style>
  