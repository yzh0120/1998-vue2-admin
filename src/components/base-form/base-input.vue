<!-- 输入框
 type:'input '                              控件类型
 field:xxx                                  控件对应的字段      
 title: '账号',                             控件描述
 rules:[],                                  控件校验规则
 btn:str                                    是否显示右部的按钮
 prepend:str                                是否显示前缀文字
 append:str                                 是否显示后缀文字
 tip:true                                   内容溢出悬浮显示
 disabled:true                              禁用
 -->
<!--  -->
<template>
  <el-input  v-model="data[item.field]" :type="item.type" :disabled="item.disabled" :placeholder="_getPlaceholder(item)"
    @clear="setValueNull" @blur="blur(data[item.field])" @focus="focus(data[item.field])"
    @input="input(data[item.field])" clearable :maxlength="item.max">
    <!-- <template slot="suffix" v-if="item.hide">
      <span class="el-icon-view" @click="togglePasswordVisibility"></span>
    </template> -->
  </el-input>
  
  <!--  -->
</template>

<script>
export default {
  //   props: ["data", "item"],
  props: {
    data: {
      type: Object,
      default: () => { },
    },
    item: {
      type: Object,
      default: () => { },
    },
  },
  computed: {
    // xxx: {
    //   get() {
    //      console.log(this.data[this.item.field],"this.data[this.item.field]")
    //     if (this.item.hide) {
    //       if (this.passwordVisible) {
    //         return  this.data[this.item.field]?.replace(/./g, '*');
    //       } else {
    //         return this.data[this.item.field];
    //       }
    //     } else {
    //       return this.data[this.item.field];
    //     }
    //   },
    //   set(val) {
    //     console.log(val,"val")
    //     this.$set(this.data, this.item.field, val);
    //   },
    // }
  },
  data() {
    return {
      passwordVisible: true
    };
  },
  methods: {

    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
      console.log(this.passwordVisible, "this.passwordVisible")
    },
    blur(value) {
      this.$emit("baseFormEvent", {
        name: "blur",
        value: value,
      });
    },
    focus(value) {
      this.$emit("baseFormEvent", {
        name: "focus",
        value: value,
      });
    },
    // search() {
    //   this.$emit("baseFormEvent", {
    //     name: "btn",
    //     value: this.data[this.item.field],
    //   });
    // },
    input(value) {
      this.$emit("baseFormEvent", {
        name: "input",
        value: value,
      });
    },
    setValueNull() {
      this.$emit("baseFormEvent", {
        name: "clear",
        value: undefined,
      });
    },
  },

};
</script>

<style lang="scss">
// .self_btn .el-input-group__append {
//   background: #F6384C;
//   border: 1px solid #F6384C;
//   border-left: 0;

//   button {
//     background: red;
//     color: #fff;
//   }
// }

// .is-disabled.self_btn .el-input-group__append {
//   border-left: 0;
//   background-color: #fb9ca6 !important;
//   border-color: #fb9ca6 !important;

//   button {
//     background: #fb9ca6;
//     color: #fff;
//   }
// }
</style>
