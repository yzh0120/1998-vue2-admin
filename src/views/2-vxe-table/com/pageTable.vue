<template>
  <page>

    <!-- 表格 -->
    <vxe-grid v-bind="gridOptions" auto-resize>

    </vxe-grid>

    <!-- 分页 -->
    <pager :data="pagerData" @pageChange="getData" @sizeChange="getData" />


  </page>
</template>

<script>
// import * as testApi from "@/api/test";
export default {
  props: {
    arr: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  data() {
    let self = this;
    return {
      //表格
      gridOptions: {
        loading: false,
        height: self.$store.state.config.tableheight,
        align: "center",
        columns: [
          {
            field: "no",
            title: "序号",
          }
        ],
        data: [],
      },
      //分页
      pagerData: {
        pageNo: 1, //第一页
        pageSize: 20, //每页显示20张
        total: 0, //总数
      },

    };
  },
  mounted() {
    this.getData();
    this.pagerData.total = this.arr.length
  },
  methods: {
    getData() { 
      this.gridOptions.data = this.$fn.deepClone(this.arr).splice((this.pagerData.pageNo - 1) * this.pagerData.pageSize, this.pagerData.pageSize)
      
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

