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
        keyframes: [
        { translateX: 250 },
          { translateY: 250 },
          { translateX: 0 },
          { translateY: 0 }
        ],
        duration: 4000,//动画的持续时间
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
