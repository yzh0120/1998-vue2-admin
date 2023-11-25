<template>
  <div class="disabled_all">
    <button>原生按钮</button>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {}
  },
  mounted() {
    setTimeout(() => {
              this.$nextTick(() => {
                $(".disabled_all").find("input,textarea").attr("disabled", "disabled");
                $(".disabled_all").find("button").attr("disabled", "disabled");

                $(".disabled_all").find(".el-input").addClass("is-disabled")
                $(".disabled_all").find(".el-textarea").addClass("is-disabled")
                $(".disabled_all").find("button").addClass("is-disabled")
              });
            }, 500)
  },
}
</script>

<style lang="scss" scoped>

</style>
