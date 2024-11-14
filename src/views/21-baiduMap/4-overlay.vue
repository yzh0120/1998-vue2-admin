<template>
  <div style="height: 80vh;">
      <baidu-map class="map" :center="circlePath.center" :zoom="18" :scroll-wheel-zoom="true" @ready="mapReady"
      @click="clickMap">
      <bm-overlay pane="labelPane" :class="{ sample: true, active:active }" @draw="draw" @mouseover.native="active = true"
        @mouseleave.native="active = false">
        <img :src="require(`@/assets/imgs/logo2.png`)" alt="" style="width: 100%;height:100%;">
      </bm-overlay>

    </baidu-map>


  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      BMap: null,
      map: null,
      circlePath: {
        center: {
          //坐标
          lng: 114.033578,
          lat: 22.536139,
        },
        radius: 10, //单位 米
      },
    }
  },
  methods: {
    draw({ el, BMap, map }) {
      const pixel = map.pointToOverlayPixel(new BMap.Point(114.033578, 22.536139))
      el.style.left = pixel.x - 40 + "px"
      el.style.top = pixel.y - 100 + "px"
      console.log(el,"el")
    },
    clickMap(e) {
      console.log(e)
    },
    /* 
 ready 事件中使用返回的 BMap 类和 map 实例进行手动控制 
  */
    mapReady({ BMap, map }) {
      this.BMap = BMap;
      this.map = map;
      // this.getCurlocation();
    },
    getCurlocation() {
      // 获取浏览器当前定位
      let { BMap, map, circlePath } = this;
      new BMap.Geolocation().getCurrentPosition(function (r) {
        console.log(r.point, "r.point")
        circlePath.center = r.point;
      });
    },
  }
}
</script>

<style lang="scss" scoped>

.map {
    width: 100%;
    height: 100%;
}
.sample {
    width: 100px;
  height: 55px;
  background-color: #fff;
  overflow: hidden;
  color: #fff;
  text-align: center;
  position: absolute;
}
</style>
