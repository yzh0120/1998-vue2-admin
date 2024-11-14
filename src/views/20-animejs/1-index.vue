<template>
  <div>
    <div class="div1"></div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.js';
  export default {
  data() { 
    return{
      animation1:""
    }
  },
  mounted() {
    this.fn()
  },
  methods: {
    // https://animejs.com/documentation/  官网
    fn() { 
      this.animation1 =  anime({
        targets: [".div1"],//作用对象
        // translateX: 250,
        scale: [0,1],//如何动画
        duration: 800,//动画持续时间
        delay: 1000,//延迟
        easing: 'easeInOutQuad'//动画样式
      });
    },
  },
  }
</script>

<style lang="scss" scoped>
.div1{
  width: 100px;
  height: 100px;
  background:green;
}
</style>
