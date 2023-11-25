<template>
  <page>
    <!-- <base-form :data="form" ref="form" @event="formEvent">
      <template #mySlot>
        <el-checkbox v-model="form.data.xxx">是否勾选</el-checkbox>



      </template>
    </base-form> -->


    <base-form :data="form2" ref="form2" @event="formEvent"></base-form>

    <base-form :data="form3" ref="form3" @event="formEvent"></base-form>
  </page>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      // form: {
      //   span: true,
      //   list: [
      //     {
      //       type: "input",
      //       field: "_input",
      //       title: "普通输入框",
      //       span: 12,
      //       rules: [
      //         { required: true, message: "请输入" },
      //         { validator: self.$validator.numberpoint },
      //       ],
      //     },
      //     {
      //       type: "input",
      //       field: "_input",
      //       title: "普通输入框",
      //       span: 12,
      //       rules: [
      //         { required: true, message: "请输入" },
      //         { validator: self.$validator.numberpoint },
      //       ],
      //     },


      //     { slot: "mySlot", field: "xxx", title: "", span: 24, labelWidth: "0px" },//labelWidth:"0px"

      //     {
      //       type: "input",
      //       field: "_input1",
      //       title: "普通输入框",
      //       span: 12,
      //       rules: [
      //         { required: true, message: "请输入" },
      //         { validator: self.$validator.numberpoint },
      //       ],
      //     },
      //     {
      //       type: "input",
      //       field: "_input2",
      //       title: "普通输入框",
      //       span: 12,
      //       rules: [
      //         { required: true, message: "请输入" },
      //         { validator: self.$validator.numberpoint },
      //       ],
      //     },
      //   ],
      //   data: {},
      //   // titleWidth: "160px",
      // },
      form2: {
        span: true,
        list: [
          {
            type: "input",
            field: "_input1",
            title: "普通输入框111",
            span: 12,
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$validator.numberpoint },
            ],
          },
          {
            // type: "slotCheck",
            slotCheck: "选择",
            checkArr: [`_input222`],
            trueLabel: 1,
            falseLabel: 0,
            field: "ccc",
            span: 12,
          },
          {
            type: "input",
            field: "_input222",
            title: "普通输入框",
            span: 12,
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$validator.numberpoint },
            ],
          },


          // { slot: "mySlot", field: "xxx", title: "", },//labelWidth:"0px"
        ],
        data: {},
        // titleWidth: "160px",
      },
      form3: {
        span: true,
        list: [
          {
            type: "input",
            field: "_input1",
            title: "普通输入框111",
            span: 12,
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$validator.numberpoint },
            ],
          },
          {
            type: "select",
            field: "sssss",
            title: "普通框111",
            span: 12,
            opt: [{
              text: "是",
              value: 0
            }, {
              text: "否",
              value: 1
            }],
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$validator.numberpoint },
            ],
          },
          {
            slotSelect: true,
            checkArr: [`_input222`,`_inpu333`],
            title: "请选择",
            trueLabel: 0,
            falseLabel: 1,
            opt: [{
              text: "是",
              value: 0
            }, {
              text: "否",
              value: 1
            }],
            field: "ccc",
            span: 12,
          },
          {
            type: "input",
            field: "_input222",
            title: "普通输入框",
            span: 12,
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$validator.numberpoint },
            ],
          },
          {
            type: "input",
            field: "_inpu333",
            title: "普通输入框",
            span: 12,
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$validator.numberpoint },
            ],
          },
        ],
        data: {},
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.form2.data.ccc = 1

      this.form3.data.ccc = 0
    }, 1000)
  },
  watch: {
    // "form.data": {
    //   handler() {
    //     if (this.form.data.xxx) {
    //       this._set(this.form, "_input1", { show: true });
    //       this._set(this.form, "_input2", { show: true });
    //     } else {
    //       this._set(this.form, "_input1", { show: false });
    //       this._set(this.form, "_input2", { show: false });
    //     }
    //   },
    //   immediate: true,
    //   deep: true
    // },
    "form2.data": {
      handler() {
        if (this.$refs.form2) {
          this.$refs.form2.slotCheckAll()
        }
      },
      immediate: true,
      deep: true
    },
    "form3.data": {
      handler() {
        if (this.$refs.form3) {
          this.$refs.form3.slotSelectAll()
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {

    formEvent(e) {
      // console.log(e, "表单事件");
      // if (e.item.field == "_input_btn") {
      //   if ((e.name = "btn")) {
      //     console.log(this.form.data);
      //   }
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
