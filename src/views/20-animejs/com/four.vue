<template>
    <div class="bo">
        <img src="@/assets/h5/top.png" alt="" class="top4">
        <img src="@/assets/h5/bottom.png" alt="" class="bottom4">
        <div class="content4">

            <div class="title4">
                股东信息
            </div>

            <div class="Profile4">SHAREHOLDER INFORMATION</div>
            <img src="@/assets/h5/zkylogo.png" alt="" class="zky">
            <div class="div41">
                <div class="contenttitle">
                    合作机构
                </div>
                <div class="contentNr">
                    中科院深圳先进技术研究院是中国科学院与深圳市政府及香港中文大学于2006年联合共建的新型研究机构。
                </div>
            </div>
            <div class="div42">
                <div class="contenttitle">
                    运营系统
                </div>
                <div class="contentNr">
                    目前已初步构建了以交叉学科科研为主的集科研、教育、产业、资本为一体的微型协同创新生态系统。
                </div>
            </div>
            <div class="div43">
                <div class="contenttitle">
                    组织规模
                </div>
                <div class="contentNr">
                    由六个研究所、一所特色学院、四个特色产业育成基地，超过1000名全职科研人员组成。
                </div>
            </div>
            <div class="div44">
                <div class="contenttitle">
                    科研团队
                </div>
                <div class="contentNr">
                    先进院数字所以人工智能、云计算和大数据方向为特色，汇聚了一支海归为主，高水平、国际化的师资队伍，以具备国际视野和一流学科建设经验的学术带头人为中心组建了富有特色的学术团队。
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
    animation9:"",
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
        targets: [".top4"],
        top:[-302,0],
        // translateY: ["-1600rem","0"],

        // scale: [10,1],
        duration: 500,
        // delay: 1000,
        easing: 'easeInOutQuad'
      });
      this.animation2 =anime({
        targets: [".bottom4"],
        // translateY: ["111600rem","0"],
        bottom:[-151,0],
        // scale: [10,1],
        duration: 500,
        // delay: 1000,
        easing: 'easeInOutQuad'
      });
    
      this.animation3 =anime({
        targets: [".content4"],
        scale: [0,1],
        duration: 500,
        delay: 800,
        easing: 'easeInOutQuad'
      });
      this.animation4 =anime({
        targets: [".title4",'.Profile4'],
        scale: [0,1],
        duration: 500,
        delay: 1000,
        easing: 'easeInOutQuad'
      });
      this.animation5 =anime({
        targets: [".zky"],
        translateX: ["-300rem",0],
        scale: [0,1],
        duration: 500,
        delay: 1500,
        easing: 'linear'
        // easing: 'easeInOutQuad'
      });
      this.animation6 =anime({
        targets: [".div41"],
        scale: [0,1],
        duration:500,
        delay: 2000,
        easing: 'easeInOutQuad'
      });
      this.animation7 =anime({
        targets: [".div42"],
        scale: [0,1],
        duration: 500,
        delay: 2500,
        easing: 'easeInOutQuad'
      });
      this.animation8 =anime({
        targets: [".div43"],
        scale: [0,1],
        duration: 500,
        delay: 3000,
        easing: 'easeInOutQuad'
      });
      this.animation9 =anime({
        targets: [".div44"],
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

.top4 {
    z-index: 999;
    width: 100vw;
    height: 300rem;
    position: absolute;
    top: 0rem;
    left: 0rem;
    top: -302rem;
}

.bottom4 {
    z-index: 999;
    width: 100vw;
    height: 150rem;
    position: absolute;
    bottom: 0rem;
    left: 0rem;
    bottom:-151rem;
}

.content4 {
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

.title4 {
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

.Profile4 {
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

.zky {
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
.zkycontent{
    font-size: 20rem;
    line-height: 32rem;

}
</style>
  