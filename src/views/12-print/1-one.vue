<template>
  <page>
    <el-card>
      <div slot="header">
        <el-button type="primary" @click="one">打印单张</el-button>
      </div>

      <!-- 弹出的表格 -->
      <div id="one" style="display: none">
        <h2 style="text-align: center; padding: 0; margin: 0">付款通知书</h2>
        <p style="display: flex; justify-content: space-between">
          <span>付款单位：深圳市民信惠融资担保有限公司</span>
          <span></span>
        </p>

        <table
          border="1"
          cellspacing="0"
          cellpadding="10"
          style="
            width: 100%;
            border: 1px solid #000000;
            border-collapse: collapse;
          "
        >
          <!-- <table class="table" border="1"> -->
          <tbody>
            <tr>
              <td width="15%">收款单位</td>
              <td colspan="5"></td>
            </tr>
            <tr>
              <td>账号</td>
              <td colspan="2"></td>
              <td>开户行</td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td>付款方式</td>
              <td colspan="5">支票 □ 电汇 □ 信汇 □ 票汇 □ 现金 □</td>
            </tr>
            <tr>
              <td>品种</td>
              <td></td>
              <td>数量</td>
              <td></td>
              <td>单价</td>
              <td></td>
            </tr>
            <tr>
              <td>金额</td>
              <td colspan="3"></td>
              <td>¥</td>
              <td></td>
            </tr>
            <tr>
              <td>备注</td>
              <td colspan="5">退保证金</td>
            </tr>
          </tbody>
        </table>
        <br />
        <div style="overflow: hidden">
          <div style="width: 33.33%; float: right">经办：</div>
          <div style="width: 33.33%; float: right">审核：</div>
          <div style="width: 33.33%; float: right">单位主管：</div>
        </div>
      </div>
    </el-card>
  </page>
</template>

<script>
export default {
  data() {
    return {
      //   sectionNotice: [{}, {}, {}],
    };
  },
  methods: {
    one() {
      // 第一步异步请求获取打印数据
      this.$nextTick(() => {
        var headstr = "<html><head><title></title></head><body>";
        var footstr = "</body></html>";
        var printData = "";

        // printData = document.getElementById("printtbNotice").innerHTML;

        printData = document.getElementById("one").innerHTML;

        var wind = window.open(
          "",
          "_blank",
          "toolbar=no,scrollbars=yes,menubar=no,width=1200,height=800"
        );
        // var wind = window.open(
        //   "",
        //   "_blank",
        //   "toolbar=no,scrollbars=yes,menubar=no,width=12,height=8"
        // );

        wind.document.body.innerHTML = headstr + printData + footstr; //新窗口合并代码
        wind.document.body.style.fontFamily = "仿宋";
        // wind.document.body.style.paddingLeft = "100px";
        // wind.document.body.style.paddingTop = "100px";
        wind.print();
        wind.close();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>