<template>
  <div class="bo">
    <!-- <div class="mc"></div> -->
    <img src="@/assets/h5/top.png" alt="" class="top">
    <img src="@/assets/h5/bottom.png" alt="" class="bottom">
    <div class="content">
      <div class="title">
        公司介绍
      </div>
      <div class="Profile">Company Profile</div>
      <div class="zksj">
        <p style="text-indent: 24px;">深圳市中科数建科技有限公司（以下简称“中科数建”）成立于2020年12月31日。由中国科学院深圳先进技术研究院，深圳市民信惠科技服务有限公司以及苏州保盟咨询管理有限公司共同出资成立，公司注册资本5000万元。中科数建充分整合深圳先进院的科技研发能力及民信惠科技的行业经验和市场资源，是深圳市产学研相结合，推进研发与市场相结合的典型。</p> <p style="text-indent: 24px;">中科数建现有各类研发人员近百人,主要致力于为各地政府及行业管理部门搭建公共资源交易中心政务平台、为大中型企业搭建电子化招采平台、提供供应链一站式解决方案、为担保公同及各类合作机构提供风险赋能及SAAS服务。中科数建已成功为全国超20个行业主管部门、公共资源交易中心提供信息化解决方案、信息化系统与服务。</p>
      </div>
      <div class="yjtitle">
        业绩概况
      </div>
      <div class="yjcontent">
        <!-- <img src="@/assets/h5/yejikuang.png" alt="" class="yj"> -->
        <div class="one">
          <div class="num">100,000+</div>
          <div class="nummm">服务客户数量</div>
        </div>
        <div class="two">
          <div class="num">40+</div>
          <div  class="nummm">覆盖城市数量</div>
        </div>
        <div class="three">
          <div class="num">500,000+</div>
          <div  class="nummm">出函笔数</div>
        </div>
        <div class="four">
          <div class="num">700+</div>
          <div  class="nummm">总担保金额(亿)</div>
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
     }else{
      console.log("没有")
     }
    },
    fn() {
      this.animation1 = anime({
        targets: [".mc"],
        opacity: [1, 0],
        duration: 10000,
      });


      this.animation2 =  anime({
        targets: [".top"],
        top:[-302,0],
        // translateY: ["-1600rem","0"],

        // scale: [10,1],
        duration: 500,
        // delay: 10,
        easing: 'easeInOutQuad'
      });
      this.animation3 = anime({
        targets: [".bottom"],
        // translateY: ["111600rem","0"],
        bottom:[-151,0],
        // scale: [10,1],
        duration: 500,
        // delay: 10,
        easing: 'easeInOutQuad'
      });
      
      this.animation4 = anime({
        targets: [".content"],
        scale: [0,1],
        duration: 500,
        delay: 500,
        easing: 'easeInOutQuad'
      });
      this.animation5 = anime({
        targets: [".title",'.Profile'],
        scale: [0,1],
        duration: 500,
        delay: 1000,
        easing: 'easeInOutQuad'
      });
      this.animation6 = anime({
        targets: [".zksj"],
        translateX: ["-300rem",0],
        scale: [0,1],
        duration: 500,
        delay: 1500,
        easing: 'linear'
        // easing: 'easeInOutQuad'
      });
      this.animation7 = anime({
        targets: [".yjtitle"],
        scale: [0,1],
        duration: 500,
        delay: 2000,
        easing: 'easeInOutQuad'
      });
      this.animation8 = anime({
        targets: [".yjcontent"],
        scale: [0,1],
        duration: 1000,
        delay: 2500,
        easing: 'easeInOutQuad'
      });
      this.animation9 = anime({
        targets: [".one",".two",".three",".four"],
        scale: [0,1],
        duration: 1000,
        delay: 3000,
        easing: 'easeInOutQuad'
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.mc{
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
  z-index: 9999999999999;
}
.bo {
  width: 100vw;
  height: 100vh;
  // background-color: red;
  background-image: url("~@/assets/h5/bg.png");
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
}

.top {
  z-index: 999;
  width: 100vw;
  height: 300rem;
  position: absolute;
  top: -302rem;
  left: 0rem;
  // transform: translateY(-1000rem);
}

.bottom {
  z-index: 999;
  width: 100vw;
  height: 150rem;
  position: absolute;
  bottom: -151rem;
  left: 0rem;
}


.content {
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

.title {
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

.Profile {
  //  width: 250rem;
  height: 28rem;
  opacity: 1;
  color: #333333ff;
  font-size: 20rem;
  font-weight: 500;
  //font-family: "PingFang SC";
  text-align: left;
  letter-spacing: 4.2rem;
  padding-left: 174rem;
}

.zksj {
  width: 500rem;
  height: 508rem;
  opacity: 1;
  color: #333333ff;
  font-size: 20rem;
  font-weight: 500;
  //font-family: "PingFang SC";
  text-align: left;
  line-height: 32rem;
  // margin-left: 49rem;
  // margin-top: 30rem;
  margin: 30rem auto 0;
  overflow: hidden;
}

.yjtitle {
  // width: 184rem;
  height: 56rem;
  opacity: 1;
  color: #da0326ff;
  font-size: 40rem;
  font-weight: 700;
  //font-family: "PingFang SC";
  text-align: left;
  letter-spacing: 8rem;
  margin-top: 40rem;
  margin-left: 207rem;
}

.yjcontent {
  width: 480rem;
  height: 200rem;
  background-image: url("~@/assets/h5/yejikuang.png");
  background-size: 100% 100%;
  position: relative;
  margin-top: 20rem;
  margin-left: 59rem;
 
}
.yj{
  width: 480rem;
  height: 200rem;
 margin-top: 20rem;
 margin-left: 59rem;
}
.one{
  width: 174rem;
  height: 58rem;
  position: absolute;
  text-align: center;
 left: 45rem;
 top: 25rem;
}
.two{
  position: absolute;
  text-align: center;
 right: 45rem;
 top: 25rem;
}
.three{
  position: absolute;
  left: 55rem;
  text-align: center;
 top: 117rem;
}
.four{
  position: absolute;
  text-align: center;
 right: 40rem;
 top: 117rem;
}
.num{
  opacity: 1;
 color: #333333ff;
 font-size: 30rem;
 font-weight: 700;
 //font-family: "PingFang SC";
 
 line-height: 30rem;
 margin-bottom: 10rem;
}
.nummm{
  
  opacity: 1;
 color: #333333ff;
 font-size: 18rem;
 font-weight: 500;
 //font-family: "PingFang SC";

 line-height: 18rem;
}
</style>
