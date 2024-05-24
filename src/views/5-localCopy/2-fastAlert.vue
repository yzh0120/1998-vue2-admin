<template>
  <div>
    <el-button type="primary" @click="click">校验</el-button>
    <el-button type="primary" @click="() => {  modal = true }">再弹一次</el-button>

    <!-- 弹窗 -->
    <!-- <alert :data="alertData" @cancel="alertCancel" @close="alertCancel" @confirm="alertConfirm" ref="modal">
      
    </alert> -->
    <vxe-modal v-model="modal" title="开函资料" width="90%" height="80%" show-footer show-zoom resize ref="modal">
        <base-form :data="formAlert" ref="formAlert"></base-form>
      <template #footer>
        <div>
          <el-button >取消</el-button>
          <el-button type="primary" >保存</el-button>
        </div>
      </template>
    </vxe-modal>
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
      modal:false,
    }
  },
  mounted() {
    this.$refs.modal.$el.style.display = "none";
    this.modal = true;
    this.$nextTick(() => {
      this.modal = false;
      setTimeout(() => {
        this.$refs.modal.$el.style.display = "";
      }, 1000);
    });
  },
  methods: {
    click() { 
      console.log(this.$refs.formAlert)
    },


  },
}
</script>

<style lang="scss" scoped>

</style>
