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
  <el-input v-model="showinput" :type="item.type" :disabled="item.disabled" :placeholder="_getPlaceholder(item)"
    @clear="setValueNull" @blur="blur(data[item.field])" @focus="focus(data[item.field])"
    @input="input(data[item.field])" clearable :class="[item.btn ? 'self_btn' : '']" :maxlength="item.max">
    <template slot="prepend" v-if="item.prepend">{{ item.prepend }}</template>
    <template slot="append" v-if="item.append">{{ item.append }}</template>
    <!-- style="background:#409EFF;color:#fff;" -->
    <el-button @click="search" slot="append" v-if="item.btn">{{
    item.btn
  }}</el-button>
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
  data() {
    return {
      focused: false,
    };
  },
  methods: {
    blur(value) {
      this.focused = false;
      this.$emit("baseFormEvent", {
        name: "blur",
        value: value,
      });
    },
    focus(value) {
      this.focused = true;
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
  computed: {
    pointNum() {
      if (this.item.pointNum) {
        return this.item.pointNum
      } else { 
        return 2
      }
    },
    showinput: {
      get() {
        if (this.focused) {
          return this.data[this.item.field];
        } else {
          var decimalPart = String(this.data[this.item.field]).split('.')[1];
          if (this.data[this.item.field] === null || this.data[this.item.field] === "" || this.data[this.item.field] === undefined) {
            return this.data[this.item.field];
          } else if (String(this.data[this.item.field]).split(".").length >= 3) { 
            return this.data[this.item.field];
          }else if (!this.$fn.isNumber(this.data[this.item.field])) { 
            return this.data[this.item.field];
          }else if (decimalPart && decimalPart.length > 2) { 
            return this.data[this.item.field];
          }
          else {
            // let str = this.data[this.item.field] + ""
            // let str1 = this.$fn.formatMoney(str,this.pointNum)
            // return str1
            var reg = /^(\-|\+)?\d+(\.\d+)?$/;
            if (reg.test(this.data[this.item.field]) == false) {
              return  this.data[this.item.field];
            } else { 
              let str = this.data[this.item.field] + ""
              let str1 = this.$fn.formatMoney(str,this.pointNum)
              return str1
            }
          }

          // return this.data[this.item.field]?.replace(
          //   /(\d)(?=(?:\d{3})+$)/g,
          //   "$1,"
          // );
        }
      },
      set(value) {
        this.data[this.item.field] = value?.replace(/,|，|\s/gi, "");
      },
    },
  },
};
</script>

<style lang="scss">
// .btn .el-input-group__append{
//   background-color: #409eff;
//   color: white;
//   border-radius: 0px;
// }
// .self_btn .el-input-group__append {
//         // background: #409EFF;
//         border: 1px solid #409EFF;
//         border-left: 0;
//     }
</style>
