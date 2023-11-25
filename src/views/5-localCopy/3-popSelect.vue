<template>
  <div>
    <el-popover placement="bottom" width="200" trigger="click">
      <el-button slot="reference" type="primary" class="edit1">下载word合同</el-button>

      <el-cascader placeholder="请选择合同模板" v-model="cascader_value" :options="listAndTemplateArr" ref="cascader"
        collapse-tags :props="props_cascader" clearable
        @visible-change="v => visibleChange(v, 'cascader', down_cascader)">
      </el-cascader>

    </el-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cascader_value: [],
      listAndTemplateArr: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'zhinan-1',
          label: '指南-1',
        }, {
          value: 'zhinan-2',
          label: '指南-2',
        }]
      }],
      props_cascader: {
        multiple: true,
        // children: "templateList",
        // value: "id",
        // label: "templateFileName",
        emitPath: false,
      },
    }
  },
  methods: {
    /**
* 为element-ui的Select和Cascader添加弹层底部操作按钮
* @param visible
* @param refName 设定的ref名称
* @param onClick 底部操作按钮点击监听
*/
    visibleChange(visible, refName, onClick) {
      if (visible) {
        const ref = this.$refs[refName];
        let popper = ref.$refs.popper;
        if (popper.$el) popper = popper.$el;
        if (!Array.from(popper.children).some(v => v.className === 'el-cascader-menu__list')) {
          const el = document.createElement('ul');
          el.className = 'el-cascader-menu__list';
          el.style = 'border-top: solid 1px #E4E7ED; padding:0; color: #606266;';
          el.innerHTML = `<li class="el-cascader-node" style="height:38px;line-height: 38px">
<i class="el-icon-menu"></i>
<span class="el-cascader-node__label">确认选择</span>
<i class="el-icon-arrow-right el-cascader-node__postfix"/>
</li>`;
          popper.appendChild(el);
          el.onclick = () => {
            // 底部按钮的点击事件 点击后想触发的逻辑也可以直接写在这
            onClick && onClick();

            // 以下代码实现点击后弹层隐藏 不需要可以删掉
            if (ref.toggleDropDownVisible) {
              ref.toggleDropDownVisible(false);
            } else {
              ref.visible = false;
            }
          };
        }
      }
    },


    down_cascader() {
      console.log(this.$refs.cascader.getCheckedNodes(true),"this.$refs.cascader.getCheckedNodes(true)")
      if (this.$refs.cascader.getCheckedNodes(true)) { 
        console.log("下载")
      }
     
    }
  },

}
</script>

<style lang="scss" scoped>

</style>
