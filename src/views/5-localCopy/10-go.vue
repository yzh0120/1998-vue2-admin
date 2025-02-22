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
        // document.getElementById("go_up").scrollIntoView({
        //   behavior: "smooth",
        //   block: "start",
        // });

        /*
                  // 假设我们有一个目标元素
          const targetElement = document.getElementById("go_up");
          // 获取目标元素的边界矩形
          const rect = targetElement.getBoundingClientRect();
          // 计算目标元素顶部相对于视口顶部的距离
          const targetTop = rect.top + window.pageYOffset;
          // 定义一个偏移量（例如，我们希望目标元素滚动到视口顶部下方50像素的位置）
          const offset = 100;
          // 计算滚动到的目标位置
          const scrollToPosition = targetTop - offset;
          // 使用 window.scrollTo 进行滚动，并设置平滑滚动
          window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
          });
        */
                  // 假设我们有一个目标元素
                  const elmain = document.getElementById("elmain");
          const targetElement = document.getElementById("go_up");
          const rect = targetElement.getBoundingClientRect();
          const targetTop = rect.top  + elmain.scrollTop
          const offset = 212.9326171875;
          const scrollToPosition = targetTop - offset;
          console.log( rect.top,elmain.scrollTop,scrollToPosition,"elmain.scrollTop")
          // elmain.scrollTop =  0;
          elmain.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
          })
        
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
