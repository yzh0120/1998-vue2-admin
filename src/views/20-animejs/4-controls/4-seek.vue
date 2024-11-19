<template>
  <page isTest>
    <div class="div1" style="margin-left: 100px;"></div>

    <div style="text-align: center;width: 80%;margin: 0 auto;">
      <!-- <el-button type="primary" @click="restart">重置</el-button> -->
      <el-slider v-model="value1" @input="input"></el-slider>
    </div>
  </page>
</template>

<script>
import anime from 'animejs/lib/anime.js';
export default {
  data() {
    return {
      value1:0,
      animation1: ""
    }
  },
  mounted() {
    this.fn()
  },
  methods: {
    input() { 
      this.animation1.seek(this.animation1.duration * (this.value1 / 100));
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
        easing: 'easeInOutSine',
        loop: true,
        autoplay: false
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
