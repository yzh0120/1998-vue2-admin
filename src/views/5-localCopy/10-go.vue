<template>
  <div>
    <!-- 回到底部 -->
    <div class="go_bottom" @click="go_down">
      <i class="el-icon-caret-bottom"></i>
    </div>

    <!-- 回到顶部 -->
    <div class="go_up" @click="go_up">
      <i class="el-icon-upload2"></i>
    </div>



    <div id="go_up"></div>
    <div style="height: 2000px; background-color: green;"></div>
    <div id="go_down"></div>
  </div>
</template>

<script>
export default {
  methods: {
    go_down() {
      if (document.getElementById("go_down")) {
        document.getElementById("go_down").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    go_up() {
      if (document.getElementById("go_up")) {
        document.getElementById("go_up").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
  },
}
</script>

<style lang="scss" scoped>

.go_bottom {
  position: fixed;
  width: 40px;
  height: 40px;
  right: 30px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  z-index: 5;
  border-radius: 50%;
  color: #409eff;
  box-shadow: 0 0 6px rgba(0, 0, 0, .12);
  bottom: 100px;
}

.go_up {
  position: fixed;
  width: 40px;
  height: 40px;
  right: 30px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  z-index: 5;
  border-radius: 50%;
  color: #409eff;
  box-shadow: 0 0 6px rgba(0, 0, 0, .12);
  bottom: 50px;
}
</style>
