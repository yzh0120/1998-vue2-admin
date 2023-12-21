
<!-- 多选框
 type:'checkbox '                           控件类型
 field:xxx                                  控件对应的字段      
 title: '账号',                             控件描述
 rules:[],                                  控件校验规则
 
 opt : [text:'描述',value:'值']            控件下拉选项
 text:"aaa",                                opt对应的text
 value:'bbb'                                opt对应的value
-->
<template>
  <div>
    <template v-if="item.checkAll">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
    </template>
    <el-checkbox-group v-model="xxx" @change="change">
      <el-checkbox :label="childItem[value]" v-for="(childItem, childIndex) in item.opt" :key="childIndex">{{
        childItem[text] }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  props: ["data", "item"],
  data() {
    return {
      checkAll: false,//控制是否全选的组件时候显示全选
      isIndeterminate: true//不确定状态
    };
  },
  methods: {
    handleCheckAllChange(val) {
      if (val) {
        //需要全选
        let arr = this.item.opt.map((e) => {
          return e[this.value]
        })
        this.xxx = arr
      } else { 
        this.xxx = []
      }
      this.isIndeterminate = false;
    },
    change(e) {
      let checkedCount = e.length;//是否全部选择
      this.checkAll = checkedCount === this.item.opt.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.item.opt.length;//不确定状态
      ///////////////////////////
      this.$emit("baseFormEvent", { name: "change", value: e });
      //兼容以前
      this.$emit("baseFormEvent", { name: "checkbox", value: e });
    },
  },
  computed: {
    xxx: {
      get() {
        if (this.$fn.type(this.data[this.item.field]) != "arr") {
          this.$set(this.data, this.item.field, []);
        }
        return this.data[this.item.field];
      },
      set(val) {
        this.$set(this.data, this.item.field, val);
      },
      // get() {
      //   if (this.$fn.type(this.data[this.item.field]) != "arr") {
      //     this.data[this.item.field] = [];
      //   }
      //   return this.data[this.item.field];
      // },
      // set(val) {
      //   this.data[this.item.field] = val;
      // },
    },
    text() {
      if (this.item.text) {
        return this.item.text;
      } else {
        return "text";
      }
    },
    value() {
      if (this.item.value) {
        return this.item.value;
      } else {
        return "value";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
