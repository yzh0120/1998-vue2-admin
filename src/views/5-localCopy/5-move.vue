<template>
  <div>
    
      <div class="fixed"  v-drag>
        <div class="box1" @mousedown.prevent="goTouchstart()" @mouseup.prevent="goTouchend()">
          <i class="el-icon-menu" :size="36"></i>
        </div>
        <div v-if="changeBoolean" class="fly">123123</div>
      </div>
     
 

  </div>
</template>

<script>
export default {
  data() {
    return {
      changeBoolean: true,
    }
  },
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
      this.changeBoolean = !this.changeBoolean
      this.$message.success("单击事件")
    },
  },
}
</script>

<style lang="scss" scoped>
.fly {

  cursor: pointer;
  box-sizing: border-box;
  // width: 100%;
  // height: 100%;
  width: 200px; //////////////////////////////////////////////////////////////////
  height: 300px; //////////////////////////////////////////////////////////////////
  background:red;
  position: absolute;
  left: 0px; //////////////////////////////////////////////////////////////////
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding: 30px;
  box-shadow: 0px 10px 20px 0px rgba(22, 45, 80, 0.08);
}
.box1{
    width: 40px;
  height: 40px;
  // border-radius: 50%;
  // background-color: rgba(255, 255, 255, 0.9);
  // color: #409eff;
  // box-shadow: 0 0 10px #999;
  background-color: #409eff;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  z-index: 99;
  cursor: pointer;
}
.fixed {
  position: fixed; //////////////////////////////////////////////////////////////////
  left: 0px; //right: 0px;
  // top: 600px;
  bottom: 300px;
  z-index: 9999999999;
  width: 1px; //////////////////////////////////////////////////////////////////
  height: 1px; //////////////////////////////////////////////////////////////////
  // width: 40px;
  // height: 40px;
  // // border-radius: 50%;
  // // background-color: rgba(255, 255, 255, 0.9);
  // // color: #409eff;
  // // box-shadow: 0 0 10px #999;
  // background-color: #409eff;
  // color: #ffffff;
  // position: fixed;
  // right: 0px;
  // top: 60%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // font-size: 30px;
  // z-index: 99;
  // cursor: pointer;
}
</style>
