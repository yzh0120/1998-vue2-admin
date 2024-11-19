<!--
 * @Author: yz
 * @Date: 2022-11-09 14:28:34
 * @Description: 
 * 
-->
<template>
  <page>

    <div style="height:10000px">
      <el-button type="primary" @click="click">显示/隐藏(自己写的动画)</el-button>
      <transition name="fade">
        <!-- 
        vue提供的wrapper包装组件——transition，在包裹的元素中，有涉及到v-if，,v-show, 动态组件,组件根节点,，都会给它们添加进入/离开的过渡效果。
       -->
        <p v-if="show" style="width: 100px;height:100px;background-color: burlywood">hello</p>
      </transition>

   


    </div>
  </page>
</template>

<script>
import 'animate.css';
export default {
  data() {
    return {
      
      show: true,
      show2: true,
      toggle: false,
      viewTimer: null,
    }
  },
  methods: {
    click() {
      this.show = !this.show
    },
  },
}
</script>

<style lang="scss" scoped>
// 活动的
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
// 
.animate__self{
  //animation: bounce 2s; 
  animation: zoomInDown 2s; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}
// 
</style>
