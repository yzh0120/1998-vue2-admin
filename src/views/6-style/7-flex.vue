<template>
  <div>
    <el-divider> 左侧固定布局 </el-divider>
    <one></one>

    <el-divider> 瀑布流 </el-divider>
    <two></two>
  </div>
</template>

<script>
import one from "./com/one"
import two from "./com/two"
  export default {
  components: {
      one,
      two
  },
  }
</script>

<style lang="scss" scoped>

</style>
