<template>
  <page isTest>
    <div class="div1" style="margin-left: 100px;"></div>

    <div style="text-align: center;">
      <el-button type="primary" @click="play">播放</el-button>
      <el-button type="warning" @click="pause">暂停</el-button>
    </div>
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
    play() { 
      this.animation1.play()
    },
    pause() { 
      this.animation1.pause()
    },
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
        duration: 4000,
        easing: 'easeOutElastic(1, .8)',
        loop: true,
        autoplay: false,
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
