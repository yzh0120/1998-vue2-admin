<template>
  <page>

    <tablePage>
      <template #form>
        <!-- 表单 -->
        <base-form :data="formSearch">
          <template #button>
            <el-button type="primary" @click="search" native-type="submit">搜索</el-button>
            <el-button type="primary" @click="addData">新增</el-button>
          </template>
        </base-form>
      </template>
      <template #table>
        <!-- 表格 -->
        <vxe-grid v-bind="gridOptions" auto-resize>
          <template #num_default="{ rowIndex }">
            <span>{{ (pagerData.pageNo - 1) * pagerData.pageSize + rowIndex + 1 }}</span>
          </template>
          <template #do="{ row, rowIndex }">
            <el-button type="text" @click="tableEdit(row, rowIndex)">编辑</el-button>
            <el-button type="text" @click="tableDel(row, rowIndex)">删除</el-button>
          </template>
        </vxe-grid>
      </template>
    </tablePage>
    <!-- 分页 -->
    <pager :data="pagerData" @pageChange="getData" @sizeChange="getData" :fixed="true"/>

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
        showOverflow: true,
        height: "100%", 
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
        alert: false
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    //点击按钮搜索数据
    search() {
      this.pagerData.pageNo = 1
      this.getData()
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
          if (res.data.records.length == 0 && this.pagerData.pageNo != 1) {
            this.pagerData.pageNo--
            this.getData()
          } else {
            this.gridOptions.data = res.data.contents;
            this.pagerData.total = res.data.total;
          }
          // this.gridOptions.data = res.data.contents;
          // this.pagerData.total = res.data.total;
        } else {
          this.$message.error(res.info);
        }
      });
    },
    //增加数据
    addData() {
      this.alertData.alert = true
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
        this.$store.state.config.al = true
        testApi[url](this.addApplyForm.data).then((res) => {
          this.$store.state.config.al = false
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

<style lang="scss" scoped></style>
