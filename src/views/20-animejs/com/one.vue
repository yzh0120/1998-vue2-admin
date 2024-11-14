<template>
  <div class="bo">

    <div class="mc"></div>
    <img src="@/assets/h5/logo.png" alt="" class="logo">
    <img src="@/assets/h5/1s.png" alt="" class="titleLogo">

    <div class="enterprise">

        ENTERPRISE

    </div>


    <div class="bottom">
      <div class="span1">CORPORATE BROCHURE</div>
      <div class="span2">企业宣传册</div>
      <div class="span3">科技创新、电子保函、诚信服务</div>
    </div>


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

    <img src="@/assets/h5/1f.png" alt="" class="ff">
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
  mounted() {
    // setTimeout(() => { 
    //   this.fn()
    // },100)
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
      
      this.animation1.seek(0)
      this.animation2.seek(0)
      this.animation3.seek(0)
      this.animation4.seek(0)
      this.animation5.seek(0)
      this.animation6.seek(0)
    
      
     }
    },
    fn() {
      this.animation1 =  anime({
        targets: [".span1",".span2"],
        // translateX: 250,
        scale: [0,1],
        duration: 800,
        delay: 1000,
        easing: 'easeInOutQuad'
      });
      this.animation2 = anime({
        targets: [".span3"],
        scale: [0,1],
        duration: 1000,
        delay: 1500,
        easing: 'easeInOutQuad'
      });

      this.animation3 =  anime({
        targets: '.logo',
        left: ["-176rem","80rem"],
        duration: 800,
      });
      //titleLogo
      this.animation4 =  anime({
        targets: ".mc",
        // left: "80rem",
        opacity:[1,0],
        easing: "linear",
        duration: 1000,
      });
      //enterprise
      this.animation5 = anime({
        targets: ".enterprise",
        scale:[0,1],
        rotate: ["270deg", "270deg"],
        
        duration: 1000,
        easing: 'easeInOutQuad'
      });

      this.animation6 =  anime({
        targets: ".titleLogo",
        // left: "80rem",
        opacity:[0,1],
        easing: "linear",
        duration: 1000,
      });


      var myTimeline = anime.timeline({
        // opacity:0,
      
      })
      myTimeline.add({
        targets: ".xx11",
        opacity: [0, 1],
        duration: 100,
        delay:1500
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
.bo {
  width: 100vw;
  height: 100vh;
  // background-color: red;
  background-image: url("~@/assets/h5/bg.png");
  background-size: 100% 100%;
  position: relative;

.mc{
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
  opacity: 1;
  z-index: 99;
  
}
  .titleLogo {


    opacity: 0;
    width: 100%;
    position: absolute;
    top: 10rem;
  }

  .logo {
    z-index: 999;
    width: 174rem;
    height: 91rem;
    position: absolute;
    top: 80rem;
    left: -174rem;
  }

  .enterprise {
    z-index: 999;
    position: absolute;
    top: 517rem;//760rem;
    // left: 110rem;
    left: -150rem;
    height: 56rem;
    width: 475rem;
    transform: rotate(270deg) scale(0);
    transform-origin: 50%;

    color: #646464ff;
    font-size: 40rem;
    font-weight: 500;
    //font-family: "PingFang SC";
    text-align: left;
    letter-spacing: 25.6rem;
  }
  


  .bottom {
    z-index: 999;
    position: absolute;
    left: 60rem;
    top: 900rem;

    .span1 {
      color: #DA0326;
      font-size: 26rem;
      font-weight: 500;
      //font-family: "PingFang SC";
      transform: scale(0,0);
    }

    .span2 {
      margin: 10rem 0;
      color: #DA0326;
      font-size: 80rem;
      font-weight: 700;
      //font-family: "PingFang SC";
      transform: scale(0,0);
    }

    .span3 {
      letter-spacing: 3.84rem;
      color: #333333;
      font-size: 24rem;
      padding: 10rem 30rem;
      border: 1rem solid #333333;
      border-radius: 33rem;
      transform: scale(0,0);
    }
  }

  .footer {
    //font-family: "PingFang SC";
    font-size: 24rem;
    position: absolute;
    left: 60rem;
    bottom: 53rem;
  }

  .ff {
    position: absolute;
    right: 0rem;
    bottom: 45rem;

    width: 363rem;
  }
}
</style>
