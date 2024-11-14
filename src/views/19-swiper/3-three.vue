<template>
  <page>
	<el-divider content-position="left">
	    <span class="label">垂直播放</span>
	</el-divider>
	
	<div class="container">
		<swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
		      <!-- <swiper-slide><img :src="require('@/assets/imgs/swiper/1.jpg')" alt="" class="bannerImg" @click="j"></swiper-slide>
		      <swiper-slide><img :src="require('@/assets/imgs/swiper/2.jpg')" alt="" class="bannerImg" @click="j"></swiper-slide>
		      <swiper-slide><img :src="require('@/assets/imgs/swiper/3.jpg')" alt="" class="bannerImg" @click="j"></swiper-slide>
			  <swiper-slide><img :src="require('@/assets/imgs/swiper/1.jpg')" alt="" class="bannerImg" @click="j"></swiper-slide>
			  <swiper-slide><img :src="require('@/assets/imgs/swiper/2.jpg')" alt="" class="bannerImg" @click="j"></swiper-slide>
			  <swiper-slide><img :src="require('@/assets/imgs/swiper/3.jpg')" alt="" class="bannerImg" @click="j"></swiper-slide> -->
			  
			  <swiper-slide><img src="https://s4.ax1x.com/2022/02/08/H1uxk8.md.jpg" alt="" class="bannerImg"></swiper-slide>
			  <swiper-slide><img src="https://s4.ax1x.com/2022/02/08/H1ujTf.md.jpg" alt="" class="bannerImg"></swiper-slide>
			  <swiper-slide><img src="https://s4.ax1x.com/2022/02/08/H1uX0P.md.jpg" alt="" class="bannerImg"></swiper-slide>
			  <swiper-slide><img src="https://s4.ax1x.com/2022/02/08/H1uxk8.md.jpg" alt="" class="bannerImg"></swiper-slide>
			  <swiper-slide><img src="https://s4.ax1x.com/2022/02/08/H1ujTf.md.jpg" alt="" class="bannerImg"></swiper-slide>
			  <swiper-slide><img src="https://s4.ax1x.com/2022/02/08/H1uX0P.md.jpg" alt="" class="bannerImg"></swiper-slide>
			  
		      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
		      <div class="swiper-button-prev" slot="button-prev"></div>  <!--上一项-->
		      <div class="swiper-button-next" slot="button-next"></div>  <!--下一项-->
		</swiper>
	</div>

	
	
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
				slidesPerView: '1',//默认1, 同时显示的slides数量,auto 代表根据轮播图的宽度排列
				// spaceBetween: 30, //轮播图之间的间距
				centeredSlides: true,//当前图片居中
				loop: true,//循环
				direction: 'vertical',//竖向滚动
				//autoplay: true,   //自动播放
				on: {//内置事件
					slideChangeTransitionEnd: function(){
					   console.log(this,this.activeIndex);//切换结束时，告诉我现在是第几个slide
					},
				},
				//分页器设置    
				pagination: {
					el: ".swiper-pagination",
					clickable: true //允许分页点击跳转
				},
				// 左右点击 挂载的类名
				navigation: {
					nextEl: ".swiper-button-next",//下一张标签类名可以自定义
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
		j(){
			console.log(1)
		}
      },
}
</script>

<style scoped="scoped" lang="scss">
//核心代码
.container{
	 position: relative; 
	 padding: 100px 0;
}
//核心代码
.swiper-box{
			position: static !important;
}
	
::v-deep {
	.swiper-wrapper {
		height: 250px;
	}
	
	//核心代码
	.swiper-button-next,
	.swiper-button-prev{
		position: absolute;
		left: 50%;
	}
	//核心代码
	.swiper-button-next{
		top: 100%;
		transform: translateY(-100%) rotate(90deg);
		
	}
	//核心代码
	.swiper-button-prev{
		top: 0%;
		transform: translateY(100%) rotate(90deg);
	}
	
	.swiper-wrapper img{
		width: 100%;
		height: 250px;
	}
}

</style>
