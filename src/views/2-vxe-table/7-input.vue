<!--
 * @Author: yz
 * @Date: 2023-02-19 14:27:24
 * @Description: 
 * 
-->
<template>
  <div>
    <vxe-grid v-bind="gridOptions" ref="xTable" :edit-rules="validRules">

      <template #paidAmountSlot="scope">
        <vxe-input v-enter-money v-model="scope.row.paidAmount" @change="$refs.xTable.updateStatus(scope)"></vxe-input>
      </template>

      <template #tradingTimeSlot="scope">
        <vxe-input v-model="scope.row.tradingTime" placeholder="日期选择" type="date" transfer
          @change="$refs.xTable.updateStatus(scope)"></vxe-input>
      </template>

    </vxe-grid>

    <el-button type="primary" @click="submit">提交</el-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      gridOptions: {
        align: "left",
        editConfig: {
          trigger: "click",
          mode: "cell",
        },
        columns: [
          {
            field: "paidAmount",
            title: "实收金额(元)",
            editRender: {
              // autofocus: ".vxe-input--inner",
              placeholder: "请点击输入...",
            },
            slots: { edit: "paidAmountSlot" },
          },
          {
            field: "tradingTime",
            title: "交易时间",
            editRender: {
              // autofocus: ".vxe-input--inner",
              placeholder: "请点击输入...",
            },
            slots: { edit: "tradingTimeSlot" },
          },
        ],
        data: [{}],
      },
      validRules: {
        // bankTransactionNum: [{ required: false, message: "不能为空" }],
        paidAmount: [{ required: true, message: "不能为空" }],
        // payerName: [{ required: false, message: "不能为空" }],
        // receivingBank: [{ required: false, message: "不能为空" }],
        tradingTime: [{ required: true, message: "不能为空" }],
      },
    }
  },
  mounted() { 
    this.getData()
  },
  methods: {
    async submit() { 
      const $table = this.$refs.xTable;
      const errMap = await $table.validate(true).catch((errMap) => errMap);
      if (errMap) {
        this.$message.warning("校验不通过！");
      } else { 
        this.$message.success("校验通过！");
      }
    },
    getData() { 

    },
  },
}
</script>

<style lang="scss" scoped>
</style>
