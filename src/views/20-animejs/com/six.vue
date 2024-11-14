<template>
    <div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>

<!-- <template>
    <div class="bo">
        <img src="@/assets/h5/top.png" alt="" class="top6">
        <img src="@/assets/h5/bottom.png" alt="" class="bottom6">
        <div class="content6">

            <div class="title6">
                地址导航
            </div>

            <div class="Profile6">Address navigation</div>
            <div class="map">
                <baidu-map class="left" :center="circlePath.center" :zoom="18" :scroll-wheel-zoom="true" @ready="mapReady"
                    @click="clickMap">
                    <bm-overlay pane="labelPane" :class="{ sample: true, active }" @draw="draw"
                        @mouseover.native="active = true" @mouseleave.native="active = false">
                        <img :src="require(`@/assets/imgHome/logoo.png`)" alt="" style="width: 100%;height:100%;">
                    </bm-overlay>

                </baidu-map>
            </div>
            <div class="div61">
                <div class="maptitle">地址</div>
                <div class="mapcontent">深圳市福田区沙头街道天安社区车公庙泰然七路1号博今商务广场A座26层</div>
            </div>

            <div class="div62">
                <div class="maptitle">电话</div>
                <div class="mapcontent">400-0755-268</div>
            </div>

            <div class="div63">
                <div class="maptitle">官网</div>
                <div class="mapcontent">https://www.zksj.com.cn/</div>
            </div>

            <div class="div64">
                <div class="maptitle">邮箱</div>
                <div class="mapcontent">hr@zksj.com.cn</div>
            </div>

        </div>
    </div>
</template>
  
<script>
import anime from 'animejs/lib/anime.js';
export default {
    data() {
        return {
            active: 1,
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
            animation1: "",
            animation2: "",
            animation3: "",
            animation4: "",
            animation5: "",
            animation6: "",
            animation7: "",
            animation8: "",
            animation9: "",

        }
    },
    methods: {
        leave() {
            if (this.animation1) {
                this.animation1.pause()
                this.animation2.pause()
                this.animation3.pause()
                this.animation4.pause()
                this.animation5.pause()
                this.animation6.pause()
                this.animation7.pause()
                this.animation8.pause()
                this.animation9.pause()

                this.animation1.seek(0)
                this.animation2.seek(0)
                this.animation3.seek(0)
                this.animation4.seek(0)
                this.animation5.seek(0)

                this.animation6.seek(0)
                this.animation7.seek(0)
                this.animation8.seek(0)
                this.animation9.seek(0)

            }
        },
        fn() {
            this.animation1 = anime({
                targets: [".top6"],
                top: [-302, 0],
                // translateY: ["-1600rem","0"],

                // scale: [10,1],
                duration: 500,
                // delay: 1000,
                easing: 'easeInOutQuad'
            });
            this.animation2 = anime({
                targets: [".bottom6"],
                // translateY: ["111600rem","0"],
                bottom: [-151, 0],
                // scale: [10,1],
                duration: 500,
                // delay: 1000,
                easing: 'easeInOutQuad'
            });

            this.animation3 = anime({
                targets: [".content6"],
                scale: [0, 1],
                duration: 500,
                delay: 800,
                easing: 'easeInOutQuad'
            });
            this.animation4 = anime({
                targets: [".title6", '.Profile6'],
                scale: [0, 1],
                duration: 500,
                delay: 1000,
                easing: 'easeInOutQuad'
            });
            this.animation5 = anime({
                targets: [".map"],
                scale: [0, 1],
                duration: 1000,
                delay: 1500,
                easing: 'easeInOutQuad'
            });
            this.animation6 = anime({
                targets: [".div61"],
                scale: [0, 1],
                duration: 1000,
                delay: 2000,
                easing: 'easeInOutQuad'
            });

            this.animation7 = anime({
                targets: [".div62"],
                scale: [0, 1],
                duration: 1000,
                delay: 2300,
                easing: 'easeInOutQuad'
            });
            this.animation8 = anime({
                targets: [".div63"],
                scale: [0, 1],
                duration: 1000,
                delay: 2600,
                easing: 'easeInOutQuad'
            });
            this.animation9 = anime({
                targets: [".div64"],
                scale: [0, 1],
                duration: 1000,
                delay: 2900,
                easing: 'easeInOutQuad'
            });

        },
        draw({ el, BMap, map }) {
            const pixel = map.pointToOverlayPixel(new BMap.Point(114.033578, 22.536139))
            el.style.left = pixel.x + 35 + 'rem'
            el.style.top = pixel.y - 40 + 'rem'
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
        /////////////////////////////////https://dafrok.github.io/vue-baidu-map/#/zh/overlay/info-window
        activefn(val) {
            this.active = val
        },
    },
}
</script>
  
<style lang="scss" scoped>
.bo {
    width: 100vw;
    height: 100vh;
    // background-color: red;
    background-image: url("~@/assets/h5/bg.png");
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
}

.top6 {
    z-index: 999;
    width: 100vw;
    height: 300rem;
    position: absolute;
    top: 0rem;
    left: 0rem;
    top: -302rem;
}

.bottom6 {
    z-index: 999;
    width: 100vw;
    height: 150rem;
    position: absolute;
    bottom: 0rem;
    left: 0rem;
    bottom: -151rem;
}

.content6 {
    width: 598rem;
    height: 1048rem;
    border-radius: 30rem;
    opacity: 1;
    border: 2rem solid #da0326ff;
    background: #ffffffff;
    position: absolute;
    top: 146rem;
    left: 76rem;
    transform: scale(0);
}

.title6 {
    // width: 230rem;
    height: 70rem;
    opacity: 1;
    color: #da0326ff;
    font-size: 50rem;
    font-weight: 700;
    //font-family: "PingFang SC";
    text-align: left;
    letter-spacing: 10rem;
    margin-top: 50rem;
    margin-left: 184rem;
}

.Profile6 {
    //  width: 250rem;
    height: 28rem;
    opacity: 1;
    color: #333333ff;
    font-size: 20rem;
    font-weight: 500;
    //font-family: "PingFang SC";
    text-align: left;
    letter-spacing: 4.2rem;
    margin-left: 156rem;
}

.map {
    width: 440rem;
    height: 228rem;
    opacity: 1;
    background: #d9d9d9ff;
    margin-top: 50rem;
    margin-left: 79rem;
    margin-bottom: 60rem;
}

.left {
    width: 440rem;
    height: 228rem;
}

.maptitle {
    width: 68rem;
    height: 36rem;
    opacity: 1;
    background: #da0326ff;
    color: #ffffffff;
    margin-left: 79rem;
    text-align: center;
    font-size: 20rem;
    margin-top: 30rem;
}

.mapcontent {
    color: #333333ff;
    font-size: 20rem;
    font-weight: 500;
    //font-family: "PingFang SC";
    text-align: left;
    margin-left: 79rem;
    margin-right: 64rem;
    margin-top: 5rem;
}

.sample {
    width: 93rem;
  height: 55rem;
  line-height: 60rem;
  background-color: #fff;
  overflow: hidden;
  color: #fff;
  text-align: center;
  // padding: 10px;
  position: absolute;
}
</style>
   -->
