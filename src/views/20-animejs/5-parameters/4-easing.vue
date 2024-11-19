<template>
  <page isTest>
    <div style="padding: 20px;display: flex;">
      <div :class="`div${index}`" style="background-color: #c26eff;width: 6px;height: 6px;margin-top: 250px;margin-right: 6px;"
        v-for="(item, index) in 36"></div>
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
    var easingNames = ["linear"]

    // var easingNames = [
    //   'easeInQuad',
    //   'easeInCubic',
    //   'easeInQuart',
    //   'easeInQuint',
    //   'easeInSine',
    //   'easeInExpo',
    //   'easeInCirc',
    //   'easeInBack',
    //   'easeOutQuad',
    //   'easeOutCubic',
    //   'easeOutQuart',
    //   'easeOutQuint',
    //   'easeOutSine',
    //   'easeOutExpo',
    //   'easeOutCirc',
    //   'easeOutBack',
    //   'easeInBounce',
    //   'easeInOutQuad',
    //   'easeInOutCubic',
    //   'easeInOutQuart',
    //   'easeInOutQuint',
    //   'easeInOutSine',
    //   'easeInOutExpo',
    //   'easeInOutCirc',
    //   'easeInOutBack',
    //   'easeInOutBounce',
    //   'easeOutBounce',
    //   'easeOutInQuad',
    //   'easeOutInCubic',
    //   'easeOutInQuart',
    //   'easeOutInQuint',
    //   'easeOutInSine',
    //   'easeOutInExpo',
    //   'easeOutInCirc',
    //   'easeOutInBack',
    //   'easeOutInBounce',
    // ]

    // var easingNames = ["cubicBezier(.5, .05, .1, .3)"]

    // var easingNames = ["spring(1, 80, 10, 0)"]

    // var easingNames = [
    //   "easeInElastic(1, .6)",
    //   "easeOutElastic(1, .6)",
    //   "easeInOutElastic(1, .6)",
    //   "easeOutInElastic(1, .6)"
    // ]

    // var easingNames = ["steps(1)","steps(2)","steps(3)","steps(4)","steps(5)","steps(6)"]
    

    let self = this
    easingNames.forEach(function (easeName, index) {
      self.fn(easeName, index);
    });
  },
  methods: {
    // https://animejs.com/documentation/  官网
    fn(easeName, index) {
      this.animation1 = anime({
        targets: [`.div${index}`],//作用对象
        keyframes: [
          { translateY: -250 },
        ],
        loop: true,
        duration: 3000,//动画的持续时间
        easing: easeName
        /*
        linear

        Penner's functions

        cubicBezier(.5, .05, .1, .3)

        spring(1, 80, 10, 0)

        easeInElastic(1, .6)
        easeOutElastic(1, .6)
        easeInOutElastic(1, .6)
        easeOutInElastic(1, .6)

        steps(5)

        easing: function(el, i, total) {
          return function (t) {
            let res = Math.pow(Math.sin(t * (i + 1)), total);
            console.log(res,"res")
            return res
          }
        }
        */

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
