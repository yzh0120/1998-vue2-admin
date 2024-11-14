<template>
    <div class="bo">
        <img src="@/assets/h5/top.png" alt="" class="top3">
        <img src="@/assets/h5/bottom.png" alt="" class="bottom3">
        <div class="content3">

            <div class="title3">
                股东信息
            </div>

            <div class="Profile3">SHAREHOLDER INFORMATION</div>
            <img src="@/assets/h5/mxhlogo.png" alt="" class="mxh">
            <div class="div1">
                <div class="contenttitle">
                    专业化的科技孵化与持股平台
                </div>
                <div class="contentNr">
                    成立于2013年，专业化的科技孵化与持股平台，先后投资参股薪汇科技、中科数建等多家高新技术企业。
                </div>
            </div>
            <div class="div2">
                <div class="contenttitle">
                    科技型控股平台及产学研科技一体化载体
                </div>
                <div class="contentNr">
                    先后合作院校及机构有：先后合作院校及机构有：湖南大学、南方科技大学、清华大学工程研究院、国家超级计算机中心湖南分中心、中国科学院深圳先进技术研究院、软通动力信息技术(集团)有限公司等。
                </div>
            </div>
            <div class="div3">
                <div class="contenttitle">
                    建立多层次产学研用合作模式
                </div>
                <div class="contentNr">
                    以突破制约产业发展的共性技术难题为牵引，建立多层次产学研用合作模式，实现产、学、研、用四大创新主体的密切结合与协同作战。
                </div>
            </div>
            <div class="div4">
                <div class="contenttitle">
                    打造科技创新共同体
                </div>
                <div class="contentNr">
                    推进研发与市场相结合，把科研创新成果转化为现实生产力。
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import anime from 'animejs/lib/anime.js';
export default {
    data(){
  return {
    animation1:"",
    animation2:"",
    animation3:"",
    animation4:"",
    animation5:"",
    animation6:"",
    animation7:"",
    animation8:"",
    
  }
  },
    methods: {
        leave(){
     if(this.animation1){
        this.animation1.pause()
      this.animation2.pause()
      this.animation3.pause()
      this.animation4.pause()
      this.animation5.pause()
      this.animation6.pause()
      this.animation7.pause()
      this.animation8.pause()
     

      this.animation1.seek(0)
      this.animation2.seek(0)
      this.animation3.seek(0)
      this.animation4.seek(0)
      this.animation5.seek(0)
      
      this.animation6.seek(0)
      this.animation7.seek(0)
      this.animation8.seek(0)
     }
    },
    fn() {
        this.animation1 = anime({
        targets: [".top3"],
        top:["-302rem",0],
        // translateY: ["-1600rem","0"],

        // scale: [10,1],
        duration: 500,
        // delay: 1000,
        easing: 'easeInOutQuad'
      });
      this.animation2 = anime({
        targets: [".bottom3"],
        // translateY: ["111600rem","0"],
        bottom:["-151rem",0],
        // scale: [10,1],
        duration: 500,
        // delay: 1000,
        easing: 'easeInOutQuad'
      });
    
      this.animation2 = anime({
        targets: [".content3"],
        scale: [0,1],
        duration: 500,
        delay: 800,
        easing: 'easeInOutQuad'
      });
      this.animation3 = anime({
        targets: [".title3",'.Profile3'],
        scale: [0,1],
        duration: 500,
        delay: 1000,
        easing: 'easeInOutQuad'
      });
      this.animation4 = anime({
        targets: [".mxh"],
        translateX: ["-300rem",0],
        scale: [0,1],
        duration: 500,
        delay: 1500,
        easing: 'linear'
        // easing: 'easeInOutQuad'
      });
      this.animation5 = anime({
        targets: [".div1"],
        scale: [0,1],
        duration: 500,
        delay: 2000,
        easing: 'easeInOutQuad'
      });
      this.animation6 = anime({
        targets: [".div2"],
        scale: [0,1],
        duration: 500,
        delay: 2500,
        easing: 'easeInOutQuad'
      });
      this.animation7 = anime({
        targets: [".div3"],
        scale: [0,1],
        duration: 500,
        delay: 3000,
        easing: 'easeInOutQuad'
      });
      this.animation8 = anime({
        targets: [".div4"],
        scale: [0,1],
        duration: 500,
        delay: 3500,
        easing: 'easeInOutQuad'
      });
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

.top3 {
    z-index: 999;
    width: 100vw;
    height: 300rem;
    position: absolute;
    top: -302rem;
    left: 0rem;
}

.bottom3 {
    z-index: 999;
    width: 100vw;
    height: 150rem;
    position: absolute;
    bottom:-151rem;
    left: 0rem;
}

.content3 {
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

.title3 {
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

.Profile3 {
    //  width: 250rem;
    height: 28rem;
    opacity: 1;
    color: #333333ff;
    font-size: 20rem;
    font-weight: 500;
    //font-family: "PingFang SC";
    text-align: left;
    letter-spacing: 4.2rem;
    margin-left: 90rem;
}

.mxh {
    width: 200rem;
    height: 90rem;
    margin-top: 30rem;
    margin-left: 49rem;
    margin-bottom: 30rem;
}

.contenttitle {

    color: #da0326ff;
    font-size: 20rem;
    font-weight: 500;
    //font-family: "PingFang SC";
    text-align: left;
    line-height: 20rem;
    margin-left: 49rem;
    margin-bottom: 15rem;
}

.contentNr {
    color: #333333ff;
    font-size: 16rem;
    font-weight: 500;
    //font-family: "PingFang SC";
    text-align: left;
    line-height: 30rem;
    margin-left: 49rem;
    margin-right: 57rem;
    margin-bottom: 30rem;
}
</style>
  