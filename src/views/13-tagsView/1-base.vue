<!--
 * @Author: yz
 * @Date: 2023-02-15 17:32:54
 * @Description: 
 * 
-->
<template>
  <div>
    <el-button type="success" @click="closeCurrentTagsView">跳转另一个页面</el-button>
  </div>
</template>

<script>
import keepAlive from "@/mixins/keepAlive";
export default {
  mixins: [keepAlive],
  data() { 
      return {

      }
  },
  methods: {
    closeCurrentTagsView() { 
      this._closeCurrentTagsView(this.$route,
        {
          path: "/tagsView/demo",
          query:{}
        },
        "getData")
    }
  },
  }
</script>

<style lang="scss" scoped>

</style>
