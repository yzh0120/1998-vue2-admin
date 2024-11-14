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

      <el-divider></el-divider>

      <!-- 网址 https://animate.style/ -->
      <el-button type="primary" @click="click2">显示/隐藏by 'animate.css'作用元素一定需要宽度;</el-button>
      <transition enter-active-class="animate__animated animate__slideOutUp"
        leave-active-class="animate__animated animate__zoomInDown">
        <p v-if="show2" style="width: 100px;height:100px;background-color: burlywood">hello</p>
      </transition>

      <el-divider></el-divider>


      <el-button type="primary" @click="click3">手动添加</el-button>
      <!-- 第一种 直接使用动画-->
      <!-- <div ref="div1" :class="[`animate__animated`, toggle ? `animate__flipInY` : ``]">123123</div> -->
      <!-- 第二种自定义 -->
      <div r :class="[`animate__animated`, toggle ? `view` : ``]" style="width: 80px;height:20px;background-color: burlywood">123123</div>
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
    click2() {
      this.show2 = !this.show2
    },
    click3() {
      this.toggle = true
      clearTimeout(this.viewTimer)
      this.viewTimer = setTimeout(() => { this.toggle = false }, 1000)
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
.view {
  animation: jumpBoxHandler 0.5s infinite;
}

@keyframes jumpBoxHandler {
  0% {
    transform: translateX(0px);
    /*开始位置*/
  }

  33% {
    transform: translateX(15px);
    /* 可配置跳动方向 */
  }

  33% {
    transform: translateX(-15px);
    /* 可配置跳动方向 */
  }

  100% {
    transform: translateX(0px);
    /*结束位置*/
  }
}
</style>
