<template>
  <el-container class="default_1_el-container">
    <!-- 侧边栏 -->
    <left></left>
    <el-container class="default_1_head_main" direction="vertical">
      <!-- 头部 -->
      <headTop></headTop>
      <!-- 主体 -->
      <mainCon></mainCon>
    </el-container>
  </el-container>
</template>

<script>
import mainCon from "./main/index"
import headTop from "./head/index"
import left from "./left/index"
export default {
  components: {
    mainCon,
    headTop,
    left
  }
}
</script>

<style lang="scss" scoped>
</style>
