<template>
  <page>
		<el-divider content-position="left">
		    <span class="label">多张同时出现,以及同时展现两边部分</span>
		</el-divider>
		
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
	  return {
			swiperOption: {
				slidesPerView: "3.8",//默认1, 同时显示的slides数量,auto 代表根据轮播图的宽度排列
				spaceBetween: 30, //轮播图之间的间距
				centeredSlides: true,//当前图片居中
				loop: true,//循环
				//autoplay: true,   //自动播放
				on: {//内置事件
					slideChangeTransitionEnd: function(){
					   console.log(this);//切换结束时，告诉我现在是第几个slide
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
	
	::v-deep{
		.swiper-button-next,
		.swiper-button-prev{
			width: 100px !important;
			height: 100px !important ;
		}
			
		.swiper-wrapper img{
					width: 100%;
					object-fit: cover;
		}
	}
		
</style>
