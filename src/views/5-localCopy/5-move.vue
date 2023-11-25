<template>
  <div>
    <div class="fixed" @mousedown.prevent="goTouchstart()" @mouseup.prevent="goTouchend()" v-drag>
      <i class="el-icon-menu" :size="36"></i>
    </div>
  </div>
</template>

<script>
  export default {
  methods: {
    goTouchstart() {
      let _this = this;
      clearTimeout(_this.timeOutEvent);
      _this.timeOutEvent = setTimeout(function () {
        _this.timeOutEvent = 0;
        //  处理长按事件...
      }, 100);
    },
    //手如果在600毫秒内就释放，则取消长按事件
    goTouchend() {
      console.log(this.timeOutEvent, "this.timeOutEvent")
      let _this = this;
      clearTimeout(_this.timeOutEvent);
      if (_this.timeOutEvent !== 0) {
        //  处理单击事件
        this.go0000()
      }
      },
      //单击事件
      go0000() { 
        this.$message.success("单击事件")
      },
  },
  }
</script>

<style lang="scss" scoped>
.fixed {
  width: 40px;
  height: 40px;
  // border-radius: 50%;
  // background-color: rgba(255, 255, 255, 0.9);
  // color: #409eff;
  // box-shadow: 0 0 10px #999;
  background-color: #409eff;
  color: #ffffff;
  position: fixed;
  right: 0px;
  top: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  z-index: 99;
  cursor: pointer;
}
</style>
