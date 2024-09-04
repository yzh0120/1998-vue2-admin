<template>
  <page>
    <el-divider>复选框</el-divider>
    <base-form :data="form1" ref="form1" @event="formEvent"></base-form>
    <el-divider>下拉框</el-divider>
    <base-form :data="form2" ref="form2" @event="formEvent"></base-form>
    <el-divider>多个复选框嵌套控制 1控制2 2控制3 可以导致1让3消失</el-divider>
    <base-form :data="form3" ref="form3" @event="formEvent"></base-form>
    <el-divider>先复选框控制 + 后watch控制(这个和3的有区别是)</el-divider>
    <base-form :data="form4" ref="form4" @event="formEvent"></base-form>
    <el-divider>还没想好</el-divider>
    <base-form :data="form5" ref="form5" @event="formEvent"></base-form>
  </page>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      form1: {
        span: true,
        list: [
          {
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
            title: "普通输入框(看这个)",
            span: 12,
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$validator.numberpoint },
            ],
          },
        ],
        data: {},
      },
      form2: {
        span: true,
        list: [
          {
            slotSelect: true,
            checkArr: [`_input222`],
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
            title: "普通输入框(看这个)",
            span: 12,
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$validator.numberpoint },
            ],
          },
        ],
        data: {},
      },
      form3: {
        span: true,
        list: [
          {
            slotCheck: "选择1",
            checkArr: [`ccc`],
            trueLabel: 1,
            falseLabel: 0,
            field: "ccc1",
            span: 12,
          },
          {
            slotCheck: "选择2",
            checkArr: [`_input222`],
            trueLabel: 1,
            falseLabel: 0,
            field: "ccc",
            span: 12,
          },
          {
            type: "input",
            field: "_input222",
            title: "普通输入框(看这个)",
            span: 12,
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$validator.numberpoint },
            ],
          },
        ],
        data: {},
      },
      form4: {
        span: true,
        list: [
          {
            slotCheck: "显示详细",
            checkArr: [`_input52`, `_input555551`, `_input555552`],//也可以在这里写checkArr: [`_input52`]
            trueLabel: 1,
            falseLabel: 0,
            field: "ccc555",
            span: 12,
          },
          {
            type: "select",
            field: "_input52",
            title: "普通下拉框(看这个)",
            span: 12,
            trueLabel: 1,
            falseLabel: 0,
            opt: [
              { text: "显示1", value: "1" },
              { text: "显示2", value: "2" }
            ]
          },
          {
            type: "input",
            field: "_input555551",
            title: "我是一(看这个)",
            span: 12,
            show: false,
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$validator.numberpoint },
            ],
          },
          {
            type: "input",
            field: "_input555552",
            title: "我是二(看这个)",
            show: false,
            span: 12,
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$validator.numberpoint },
            ],
          },
        ],
        data: {},
      },
      form5: {
        span: true,
        list: [
          {
            slotCheck: "选择1",
            checkArr: [`ccc`],
            trueLabel: 1,
            falseLabel: 0,
            field: "ccc1",
            span: 12,
          },
          {
            type: "input",
            title: "123",
            field: "ccc",
            span: 12,
          }
        ],
        data: {},
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.form1.data.ccc = 1

      this.form2.data.ccc = 0
    }, 1000)
  },
  watch: {
    "form1.data": {
      handler() {
        if (this.$refs.form1) {
          this.$refs.form1.slotCheckAll()
        }
      },
      immediate: true,
      deep: true
    },
    "form2.data": {
      handler() {
        if (this.$refs.form2) {
          this.$refs.form2.slotSelectAll()
        }
      },
      immediate: true,
      deep: true
    },
    "form3.data": {
      handler() {
        if (this.$refs.form3) {
          this.$refs.form3.slotCheckAll()
        }
      },
      immediate: true,
      deep: true
    },
    "form4.data": {
      handler() {
        if (this.$refs.form4) {
          this.$refs.form4.slotCheckAll()

          if (this.form4.data.ccc555 == 1) {
            if (this.form4.data._input52 === "1") {
              this._set(this.form4, "_input555551", { show: true })
              this._set(this.form4, "_input555552", { show: false })
            } else if (this.form4.data._input52 === "2") {
              this._set(this.form4, "_input555551", { show: false })
              this._set(this.form4, "_input555552", { show: true })
            } else {
              this._set(this.form4, "_input555551", { show: false })
              this._set(this.form4, "_input555552", { show: false })
            }
          } else {
            //如果 checkArr: [`_input52`]  需要在这里写
            // this._set(this.form4, "_input555551", { show: false })
            // this._set(this.form4, "_input555552", { show: false })
          }

        }
      },
      immediate: true,
      deep: true
    },
    "form5.data": {
      handler() {
        if (this.$refs.form5) {
          this.$refs.form5.slotCheckAll()
        }
        const randomNumber = Math.floor(Math.random() * 100);
            if (randomNumber % 2 === 0) {
            console.log(randomNumber % 2, "randomNumber")
            this.$set(this.form5.data, "ccc1", 1)
            this._set(this.form5, "ccc1", { disabled: true })
            } else {
              this.$set(this.form5.data, "ccc1", null)
            this._set(this.form5, "ccc1", { disabled: false })
          }
       

      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    formEvent(e) {
      // if (e.item.field == "_input52") { 

      // }
    },
  },
};
</script>

<style lang="scss" scoped></style>
