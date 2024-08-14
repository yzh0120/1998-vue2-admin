<template>
  <el-main class="default_2_el-main">
    <el-scrollbar class="default_main_2_shu_el-scrollbar" ref="layoutScrollbarRef">
      <div ref="keepAliveContainer" class="app_main" id="app_main">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <router-view :key="key" />
          </keep-alive>
        </transition>
      </div>
    </el-scrollbar>
  </el-main>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    if (this.$refs.keepAliveContainer) {
      this.$root.keepAlive =
        this.$refs.keepAliveContainer.childNodes[0].__vue__._vnode.componentInstance;
    }
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
  watch: {
    // 监听路由的变化
    $route: {
      handler(to) {
        this.$refs.layoutScrollbarRef.wrap.scrollTop = 0;
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss" scoped>
/* fade-transform */
.fade-transform--move,
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .1s;
}

.fade-transform-leave-active {
  position: absolute;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
