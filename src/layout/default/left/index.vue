<template>
  <el-aside width="auto" >

    <div class="default_2_div" :class="{ 'isCollapse': isCollapse }">
      <Logo></Logo>
      <!-- 50px 是logo组件的大小 //写死的布局数据-->
      <el-scrollbar class="default_left_2_shu_el-scrollbar" ref="scrollbarRef"
        style="height:calc(100% - 50px) !important">
        <el-menu :collapse="isCollapse" :collapse-transition="false" :unique-opened="false" :default-active="activeName"
          @select="selectMenu">
          <menutree :data="routes" />
        </el-menu>
      </el-scrollbar>
    </div>
  </el-aside>
</template>

<script>
import menutree from "./MenuTree.vue";
import Logo from "./Logo.vue";
export default {
  data() {
    return {
      activeName: this.$route.name,
    };
  },
  mounted() {

  },
  watch: {
    $route() {
      const { meta, path, name } = this.$route;
      this.activeName = name;
    },
  },
  methods: {
    //选择叶子节点
    selectMenu(item, indexPath) {
      const arr = item.split(",");
      if (arr[0] !== "undefined") {
        this.$router.push({ name: arr[0] });
      }
    },
    //更新滚动条，防止不出现
    updateScrollbar() {
      this.$refs.scrollbarRef.update();
    },
  },
  components: {
    menutree,
    Logo
  },
  computed: {
    routes() {
      return this.$store.getters.routes;
    },
    isCollapse() {
      return this.$store.getters.isCollapse;
    },
  },
}
</script>

<style lang="scss" scoped>
.isCollapse {
  width: 53px !important;//控制整体高度
}
</style>
