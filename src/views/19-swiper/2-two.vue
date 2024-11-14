<template>
  <page>
	
	<swiper :options="swiperOption" ref="mySwiper" >
	      <!-- <swiper-slide><img :src="require('@/assets/imgs/swiper/1.jpg')" alt="" class="bannerImg"></swiper-slide>
	      <swiper-slide><img :src="require('@/assets/imgs/swiper/2.jpg')" alt="" class="bannerImg"></swiper-slide>
	      <swiper-slide><img :src="require('@/assets/imgs/swiper/3.jpg')" alt="" class="bannerImg"></swiper-slide>
		  <swiper-slide><img :src="require('@/assets/imgs/swiper/1.jpg')" alt="" class="bannerImg"></swiper-slide>
		  <swiper-slide><img :src="require('@/assets/imgs/swiper/2.jpg')" alt="" class="bannerImg"></swiper-slide>
		  <swiper-slide><img :src="require('@/assets/imgs/swiper/3.jpg')" alt="" class="bannerImg"></swiper-slide> -->
		  
		  <swiper-slide><img src="https://s4.ax1x.com/2022/02/08/H1uxk8.md.jpg" alt="" class="bannerImg"></swiper-slide>
		  <swiper-slide><img src="https://s4.ax1x.com/2022/02/08/H1ujTf.md.jpg" alt="" class="bannerImg"></swiper-slide>
		  <swiper-slide><img src="https://s4.ax1x.com/2022/02/08/H1uX0P.md.jpg" alt="" class="bannerImg"></swiper-slide>
		  <swiper-slide><img src="https://s4.ax1x.com/2022/02/08/H1uxk8.md.jpg" alt="" class="bannerImg"></swiper-slide>
		  <swiper-slide><img src="https://s4.ax1x.com/2022/02/08/H1ujTf.md.jpg" alt="" class="bannerImg"></swiper-slide>
		  <swiper-slide><img src="https://s4.ax1x.com/2022/02/08/H1uX0P.md.jpg" alt="" class="bannerImg"></swiper-slide>
		  
	      <div class="swiper-pagination" slot="pagination"></div>  <!--分页-->
	      <div class="swiper-button-prev" slot="button-prev"></div>  <!--上一项-->
	      <div class="swiper-button-next" slot="button-next"></div>  <!--下一项-->
	</swiper>

	
	
  </page>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	components:{
		swiper,
		swiperSlide
	},
  name: 'home',
  data(){
	  const _self = this; //_self
	  return {
			swiperOption: {
				/* 
				 核心代码
				 如果是 1.xx 会在最后一张图片的右边是空白
				 */
				slidesPerView: "2",//默认1, 同时显示的slides数量,auto 代表根据轮播图的宽度排列  //
				//spaceBetween: 30, //轮播图之间的间距
				centeredSlides: true,//当前图片居中
				loop: true,//循环
				//autoplay: true,   //自动播放
				//initialSlide: 1, // 初始化定位
				on: {//内置事件
					slideChangeTransitionEnd: function(){//切换结束事件
					   console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
					   
					   // 如果是第一张
					   // if(this.activeIndex == 0){
					   //     this.setTranslate(0); // 因为左边会空出一张图的距离，所以设置位移为0,this.setTranslate是swiper内置的方法
					   // }
					},
				},
				//分页器设置    
				pagination: {
					el: ".swiper-pagination",
					clickable: true //允许分页点击跳转
				},
				// 左右点击
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				}
			}
	  }
  },
  methods: {
        onSwiper(swiper) {
          console.log(swiper);
        },
        onSlideChange() {
          console.log('slide change');
        },
      },
}
</script>

<style scoped="scoped" lang="scss">
	::v-deep {
		
		.swiper-button-next,
		.swiper-button-prev{
			width: 100px !important;
			height: 100px !important ;
		}
		
		// 核心代码
		.swiper-slide{
			transition: all .3s;
		}
		
		.swiper-slide-prev,
		.swiper-slide-next{
			transform: scale(0.6);
		}	
		.swiper-slide-active{
			transform: scale(1.2);
		}

		.swiper-wrapper img{
					width: 100%;
			        height: 250px;
		}
	}
	
</style>
