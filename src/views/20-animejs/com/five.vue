<template>
    <div class="bo">
        <img src="@/assets/h5/top.png" alt="" class="top5">
        <img src="@/assets/h5/bottom.png" alt="" class="bottom5">
        <div class="content5">

            <div class="title5">
                荣誉成果
            </div>

            <div class="Profile5">Honorary achievements</div>
            <div class="imgcontent">
                <img src="@/assets/h5/one.png" alt="" class="imgs1" style="margin-right: 14rem;">
                <img src="@/assets/h5/two.png" alt="" class="imgs2">
            </div>
            <div class="imgtext">平台系统已获公安部信息系统安全等级保护第3级备案证明、中国仪器仪表学会科学技术进步奖三等奖</div>
            <div  class="imgcontent">
                <img src="@/assets/h5/three.png" alt="" class="imgs3"  style="margin-right: 14rem;">
                <img src="@/assets/h5/four.png" alt="" class="imgs3">
            </div>
            <div class="texts">
                <span style="margin-left: 66rem;margin-right: 80rem;">相关专利：4项</span>
                <span>软件著作权：30项</span>
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
    animation10:"",
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
      this.animation10.pause()

      this.animation1.seek(0)
      this.animation2.seek(0)
      this.animation3.seek(0)
      this.animation4.seek(0)
      this.animation5.seek(0)
      
      this.animation6.seek(0)
      this.animation7.seek(0)
      this.animation8.seek(0)
      this.animation9.seek(0)
      this.animation10.seek(0)
     }
    },
    fn() {
        this.animation1 = anime({
        targets: [".top5"],
        top:[-302,0],
        // translateY: ["-1600rem","0"],

        // scale: [10,1],
        duration: 500,
        // delay: 1000,
        easing: 'easeInOutQuad'
      });
      this.animation2 =anime({
        targets: [".bottom5"],
        // translateY: ["111600rem","0"],
        bottom:[-151,0],
        // scale: [10,1],
        duration: 500,
        // delay: 1000,
        easing: 'easeInOutQuad'
      });
    
      this.animation3 =  anime({
        targets: [".content5"],
        scale: [0,1],
        duration: 500,
        delay: 800,
        easing: 'easeInOutQuad'
      });
      this.animation4 = anime({
        targets: [".title5",'.Profile5'],
        scale: [0,1],
        duration: 500,
        delay: 1000,
        easing: 'easeInOutQuad'
      });
      this.animation5 = anime({
        targets: [".imgs1"],
        scale: [0,1],
        duration: 500,
        delay: 1500,
        easing: 'easeInOutQuad'
      });
      this.animation6 = anime({
        targets: [".imgs2"],
        scale: [0,1],
        duration: 500,
        delay: 2000,
        easing: 'easeInOutQuad'
      });
      this.animation7 =anime({
        targets: [".imgtext"],
        scale: [0,1],
        duration: 500,
        delay: 2500,
        easing: 'easeInOutQuad'
      });
      this.animation8 = anime({
        targets: [".imgs3"],
        scale: [0,1],
        duration: 500,
        delay: 3000,
        easing: 'easeInOutQuad'
      });
      this.animation9 = anime({
        targets: [".imgs4"],
        scale: [0,1],
        duration: 500,
        delay: 3500,
        easing: 'easeInOutQuad'
      });
      this.animation10 = anime({
        targets: [".texts"],
        scale: [0,1],
        duration: 500,
        delay: 4000,
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

.top5 {
    z-index: 999;
    width: 100vw;
    height: 300rem;
    position: absolute;
    top: 0rem;
    left: 0rem;
    top: -302rem;
}

.bottom5 {
    z-index: 999;
    width: 100vw;
    height: 150rem;
    position: absolute;
    bottom: 0rem;
    left: 0rem;
    bottom:-151rem;
}

.content5 {
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

.title5 {
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

.Profile5 {
    //  width: 250rem;
    height: 28rem;
    opacity: 1;
    color: #333333ff;
    font-size: 20rem;
    font-weight: 500;
    //font-family: "PingFang SC";
    text-align: left;
    letter-spacing: 4.2rem;
    margin-left: 123rem;
}

.imgs1{
    width: 264rem;
height: 180rem;
border-radius: 4rem;
opacity: 1;
border: 1rem solid #da0326ff;
}
.imgs2{
    width: 264rem;
height: 180rem;
border-radius: 4rem;
opacity: 1;
border: 1rem solid #da0326ff;
}
.imgs3{
    width: 264rem;
height: 180rem;
border-radius: 4rem;
opacity: 1;
border: 1rem solid #da0326ff;
}
.imgs4{
    width: 264rem;
height: 180rem;
border-radius: 4rem;
opacity: 1;
border: 1rem solid #da0326ff;
}
.imgcontent{
    margin-top: 30rem;
    margin-left: 28rem;
}
.imgtext{
    text-align: center;
 line-height: 32rem;
 color: #333333ff;
 font-size: 20rem;
 font-weight: 500;
 //font-family: "PingFang SC";
 margin-left: 39rem;
 margin-right: 39rem;
 margin-bottom: 40rem;
}
.texts{
    margin-top: 14rem;
}
</style>
  