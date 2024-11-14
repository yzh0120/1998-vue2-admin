<template>
  <div>
    <swiper :options="op" ref="mySwiper">
      <swiper-slide>
        <!-- <two ></two> -->
        <one ref="el1"></one>
      </swiper-slide>

      <swiper-slide>
        <two ref="el2"></two>
      </swiper-slide>
      <swiper-slide>
        <three ref="el3"></three>
      </swiper-slide>
      <swiper-slide>
        <four ref="el4"></four>
      </swiper-slide>
      <swiper-slide>
        <five ref="el5"></five>
      </swiper-slide>
      <swiper-slide>
        <six ref="el6"></six>
      </swiper-slide>
    </swiper>
  </div>
</template>


<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import one from '@/views/20-animejs/com/one.vue'
import two from '@/views/20-animejs/com/two.vue'
import three from '@/views/20-animejs/com/three.vue'
import four from '@/views/20-animejs/com/four.vue'
import five from '@/views/20-animejs/com/five.vue'
import six from '@/views/20-animejs/com/six.vue'
export default {
  components: {
    swiper,
    swiperSlide,
    one,
    two,
    three,
    four,
    five,
    six
  },
  data() {
    let self = this;
    return {
      active: 1,
      op: {
        //       lazy: {
        //   loadPrevNext: true,
        // },
        lazy: true,
        slidesPerView: "1",
        centeredSlides: true,//当前图片居中
        // loop: true,//循环
        direction: "vertical",
        on: {//内置事件
          slideChangeTransitionEnd: function () {
            self.activeIndex = this.activeIndex
            console.log(this, self.activeIndex,this.previousIndex);//切换结束时，告诉我现在是第几个slide
            setTimeout(() => {
              self.$refs[`el${this.activeIndex + 1}`].fn()
              self.$refs[`el${this.previousIndex + 1}`].leave()//previousIndex
            }, 100)

          },
        },
      }
    }
  },
  mounted(){
    setTimeout(()=>{
      this.$refs[`el${1}`].fn()
      // document.title = '深圳市中科数建科技有限公司'
    },100)
  },

  watch:{
    // "$store.state.config.mobile":{
    //   handler(){
    //       console.log(this.$store.state.config.mobile,"123")
    //       if(this.$store.state.config.mobile){

    //       }else{
    //         this.$router.push({path:"/aboutUs"})
    //       }
    //   },
    //   immediate: true,
    // }
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
  .swiper-wrapper {
    height: 100vh;
  }
}
</style>
