<template>
  <page>

    <!-- 表格 -->
    <vxe-grid v-bind="gridOptions" auto-resize :footer-method="footerMethod" show-footer>
      <template #num_default="{ rowIndex }">
        <span>{{ (pagerData.pageNo - 1) * pagerData.pageSize + rowIndex + 1 }}</span>
      </template>
      <template #do="{ row, rowIndex }">
        <el-button type="text" @click="tableEdit(row, rowIndex)">编辑</el-button>
        <el-button type="text" @click="tableDel(row, rowIndex)">删除</el-button>
      </template>
    </vxe-grid>

    <!-- 分页 -->
    <pager :data="pagerData" @pageChange="getData" @sizeChange="getData" />

    <!-- 弹窗 -->
    <alert :data="alertData" @cancel="alertCancel" @close="alertCancel" @confirm="alertConfirm">
      <base-form :data="formAlert" ref="formAlert"></base-form>
    </alert>
  </page>
</template>

<script>

import * as testApi from "@/api/test";
export default {
  data() {
    let self = this;
    return {
      //筛选表单
      formSearch: {
        list: [
          { title: "姓名", field: "__input", type: "input" },
          { slot: "button" },
        ],
        data: {},
        inline: true,
      },
      //表格
      gridOptions: {
        loading: false,
        // border: true,
        // showOverflow: true,
        height: self.$store.state.config.tableheight,
        align: "center",
        columns: [
          {
            title: "序号",
            width: "60px",
            slots: {
              default: "num_default",
            },
          },
          {
            field: "projectNo",
            title: "项目编号",
          },
          {
            field: "userName",
            title: "用户名",
          },
          {
            title: "操作",
            width: "150px",
            fixed: "right",
            slots: {
              default: "do",
            },
          },
        ],
        data: [],
      },
      //分页
      pagerData: {
        pageNo: 1, //第一页
        pageSize: 20, //每页显示20张
        total: 0, //总数
      },
      //弹窗表单
      formAlert: {
        span: true,
        list: [
          { title: "角色名称", field: "roleName", type: "input", span: 12 },
          { slot: "button" },
        ],
        data: {},
      },
      //弹窗字段
      alertData: {
        loading:false,
        alert: false
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    footerMethod(param) {
      //重点
      //columns 是 某一个列 其中  property 就是 列的字段
      //data 是 后端返回的数组

      const { columns, data } = param;
      console.log(data, "columns, data")
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          //第一列一般是合计
          sums[index] = "合计";
          return;
        }
        // if (index === 1) {
        //   //设置某一列是 固定
        //   sums[index] = "";
        //   return;
        // }
        const values = data.map(item => {//value就是整列的数据
          if ((column.property == "projectNo" || column.property == "paidAmount") && item[column.property]) {//特殊操作
            return Number(item[column.property])
          }
          else {
            return NaN
          }
        });
        //列里面有一个数据不是数字则显示N/A
        //开始合计
        if (values.every((value) => isNaN(value))) {
          sums[index] = "";
        } else {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr; //prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] = sums[index].toFixed(2);
        }
      });
      return [sums];
    },
    //获取数据
    getData() {
      let data = Object.assign(
        {
          pageNo: this.pagerData.pageNo,
          pageSize: this.pagerData.pageSize,
        },
        this.formSearch.data
      );
      this.gridOptions.loading = true
      testApi.pageList(data).then((res) => {
        this.gridOptions.loading = false
        if (res.code == 200) {
          this.gridOptions.data = res.data.contents;
          this.pagerData.total = res.data.total;
        } else {
          this.$message.error(res.info);
        }
      });
    },
    //表格编辑
    tableEdit(row, index) {
      this.alertData.alert = true;
      this.formAlert.data = this.$utils.clone(row, true);
    },
    //表格删除
    async tableDel(row, index) {
      let con = await this.$confirm(`确定移除 ？`);
      if (con == "confirm") {
        testApi.del({ id: row.id }).then((res) => {
          if (res.code == 200) {
            this.$message.success(res.info);
            this.getData();
          } else {
            this.$message.error(res.info);
          }
        });
      } else {
        //右上角取消
      }
    },
    // 弹窗取消
    alertCancel() {
      this.formAlert.data = {};
      this.alertData.alert = false;
    },
    // 弹窗确认
    alertConfirm() {
      if (this.$refs.formAlert.check()) {
        let url = this.formAlert.data.id ? "update" : "save";
        this.alertData.loading =  true
        testApi[url](this.addApplyForm.data).then((res) => {
          this.alertData.loading =  false
          if (res.code == 200) {
            this.$message.success(res.info);
            this.getData();
            this.alertCancel();
          } else {
            this.$message.error(res.info);
          }
        });
      }
    },


  },
};
</script>

<style lang="scss" scoped>

</style>

