<template>
  <page>
    <el-button @click="set_checkbox">设置勾选1</el-button>
    <el-button @click="get_checkbox">获取勾选1</el-button>
    <el-tree
      show-checkbox
      @check-change="handleCheckChange"
      ref="tree"
      :data="data"
      node-key="id"
    >
    </el-tree>
  </page>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          parentId:null,
          label: "一级 1",
          children: [
            {
              id: 11,
              parentId:1,
              label: "二级 1-1",
              children: [
                {
                  id: 111,
                  parentId:11,
                  label: "三级 1-1-1",
                },
                {
                  id: 112,
                  parentId:11,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 21,
              label: "二级 2-1",
            },
            {
              id: 22,
              label: "二级 2-2",
            },
          ],
        },

      ],
    };
  },
  methods: {
    get_checkbox(){
      // console.log(this.$refs.tree.getCheckedNodes(false,false))
      // console.log(this.$refs.tree.getCheckedKeys(false))
      // console.log(this.$refs.tree.getHalfCheckedKeys())


      // const CheckedNodes = this.$refs.tree.getCheckedNodes()
      const CheckedKeys = this.$refs.tree.getCheckedKeys()
      // const arr = [...CheckedKeys,this.$refs.tree.getHalfCheckedKeys()]
      console.log([].concat(this.$refs.tree.getHalfCheckedKeys()).concat(CheckedKeys))
    },
    // set_checkbox() {// node对象 的键值对 需要和 data里面的一样
    // 	this.$refs.tree.setCheckedNodes([{
    // 	             id: 10,
    // 	             label: '三级 1-1-2'
    // 	           }])
    // 	console.log(this.$refs.tree.getCheckedNodes())
    // },
    set_checkbox() {
      //搭配key-node

      this.$refs.tree.setCheckedKeys([4]); //[4]  和 [9,10]  效果一样

      // console.log(this.$refs.tree.getCheckedKeys())
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
  },
};
</script>

<style>
</style>
