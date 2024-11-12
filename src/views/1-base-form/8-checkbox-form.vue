<template>
  <page>
    <el-button type="primary" @click="go">校验</el-button>
    <base-form :data="form" ref="form" @event="formEvent">
      <template #mySlot>
        <el-checkbox v-model="form.data.checked">备选项1</el-checkbox>
      </template>

      <template #mySlot2>
        <el-checkbox v-model="form.data.checked2">备选项2</el-checkbox>
      </template>
    </base-form>
  </page>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      form: {
        span: true,
        list: [
          { slot: "mySlot", field: "checked", title: "多选框1", span: 24, },
          {
            type: "input",
            field: "_input3",
            title: "普通输入框1",
            span: 12,
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$validator.numberpoint },
            ],
          },
          { slot: "mySlot2", field: "checked2", title: "多选框2", span: 24, },
          {
            type: "input",
            field: "_input4",
            title: "普通输入框4",
            span: 12,

            rules: [
              { required: true, message: "请输入" },
              { validator: self.$validator.numberpoint },
            ],
          },
        ],
        data: { checked: true },
        // titleWidth: "160px",
      },
    };
  },
  watch: {
    "form.data": {
      handler() {
        if (this.form.data.checked) {
          this._setDatas(this.form, ["_input3", "mySlot2"], { show: true })
          if (this.form.data.checked2) {
            this._setDatas(this.form, ["_input4"], { show: true })
          } else {
            this._setDatas(this.form, ["_input4"], { show: false })
          }
        } else {
          this._setDatas(this.form, ["_input3", "mySlot2","_input4"], { show: false })
        }

      },
      deep: true,
      immediate: true
    },
  },
  methods: {
    formEvent(e) {
    },
    go() {
      this.$refs.form.check();
    },
  },
};
</script>

<style lang="scss" scoped></style>
