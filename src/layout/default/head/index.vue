<template>
    <el-header height="auto" class="default_header_2_el-header">
      <navbar></navbar>
    <tagsView></tagsView>
    </el-header>
</template>

<script>
import navbar from "./navbar";
import tagsView from "./tagsView";
export default {
  components: {
    navbar,
    tagsView,
  },
  data() {
    return {
      // heigth: "70px",
    };
  },
}
</script>

<style lang="scss" scoped>
</style>
