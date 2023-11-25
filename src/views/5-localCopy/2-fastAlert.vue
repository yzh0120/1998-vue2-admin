<template>
  <div>
    <el-button type="primary" @click="click">校验</el-button>

    <!-- 弹窗 -->
    <alert :data="alertData" @cancel="alertCancel" @close="alertCancel" @confirm="alertConfirm" ref="modal">
      <base-form :data="formAlert" ref="formAlert"></base-form>
    </alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    }
  },
  mounted() {
    this.$refs.modal.$el.style.display = "none";
    this.alertData.alert = true;
    this.$nextTick(() => {
      this.alertData.alert = false;
      setTimeout(() => {
        this.$refs.modal.$el.style.display = "";
      }, 1000);
    });
  },
  methods: {
    click() { 
      console.log(this.$refs.formAlert.check())
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
        testApi[url](this.addApplyForm.data).then((res) => {
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
}
</script>

<style lang="scss" scoped>

</style>
