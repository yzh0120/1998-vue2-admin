<template>
  <page isTest>
    <div class="div1" style="margin-left: 100px;"></div>
  </page>
</template>

<script>
import anime from 'animejs/lib/anime.js';
export default {
  data() {
    return {
      animation1: ""
    }
  },
  mounted() {
    this.fn()
  },
  methods: {
    // https://animejs.com/documentation/  官网
    fn() {
      this.animation1 = anime({
        targets: [".div1"],//作用对象
        translateX: {
          value: 250,
          duration: 800
        },
        rotate: {
          value: 360,
          duration: 1800,
          easing: 'easeInOutSine'
        },
        scale: {
          value: 2,
          duration: 1600,
          delay: 800,
          easing: 'easeInOutQuart'
        },
        delay: 250 // 除“scale”外的所有属性都继承250ms延迟  其实这个文件的目的就是优先级
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.div1 {
  width: 100px;
  height: 100px;
  background: green;
}
</style>
