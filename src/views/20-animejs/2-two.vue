<template>
  <page>
    <div class="footer">

      <span class="xx11">深</span>
      <span class="xx21">圳</span>
      <span class="xx31">市</span>
      <span class="xx1">中</span>
      <span class="xx2">科</span>
      <span class="xx3">数</span>
      <span class="xx4">建</span>
      <span class="xx5">科</span>
      <span class="xx6">技</span>
      <span class="xx7">有</span>
      <span class="xx8">限</span>
      <span class="xx9">公</span>
      <span class="xx10">司</span>

    </div>
  </page>
</template>

<script>
import anime from 'animejs/lib/anime.js';
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.fn()
  },
  methods: {
    fn() {
      var myTimeline = anime.timeline({
        // opacity:0,

      })
      myTimeline.add({
        targets: ".xx11",
        opacity: [0, 1],
        duration: 100,
        delay: 1500
      })
        .add({
          targets: ".xx21",
          opacity: [0, 1],
          duration: 100,
        })
        .add({
          targets: ".xx31",
          opacity: [0, 1],
          duration: 100,
        })
        .add({
          targets: ".xx1",
          opacity: [0, 1],
          duration: 100,
        })
        .add({
          targets: ".xx2",
          opacity: [0, 1],
          duration: 100,
        })
        .add({
          targets: ".xx3",
          opacity: [0, 1],
          duration: 100,
        })
        .add({
          targets: ".xx4",
          opacity: [0, 1],
          duration: 100,
        })
        .add({
          targets: ".xx5",
          opacity: [0, 1],
          duration: 100,
        })
        .add({
          targets: ".xx6",
          opacity: [0, 1],
          duration: 100,
        })
        .add({
          targets: ".xx7",
          opacity: [0, 1],
          duration: 100,
        })
        .add({
          targets: ".xx8",
          opacity: [0, 1],
          duration: 100,
        })
        .add({
          targets: ".xx9",
          opacity: [0, 1],
          duration: 100,
        })
        .add({
          targets: ".xx10",
          opacity: [0, 1],
          duration: 100,
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  font-size: 30px;
  position: absolute;
  left: 0px;
  top: 0px;
}
</style>
