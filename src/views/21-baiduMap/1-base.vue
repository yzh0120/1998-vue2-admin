<template>
	<div style="height: 80vh;">
		<baidu-map class="map" :center="circlePath.center" :zoom="12" :scroll-wheel-zoom='true' @ready="mapReady">



		</baidu-map>
	</div>
</template>

<script>
// //所有的独立组件均存放在 vue-baidu-map/components 文件夹下，按需引用即可
// import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
	data() {
		return {
			BMap: null,
			map: null,
			circlePath: {
				center: {//坐标
					lng: 116.404,
					lat: 39.915
				},
				radius: 5//单位 米
			}
		}
	},
	methods: {

		/* 
		ready 事件中使用返回的 BMap 类和 map 实例进行手动控制 
		 */
		mapReady({ BMap, map }) {
			this.BMap = BMap
			this.map = map
			console.log(BMap, map)
			this.getCurlocation()
		},
		getCurlocation() { // 获取浏览器当前定位
			let { BMap, map, circlePath } = this
			new BMap.Geolocation().getCurrentPosition(function (r) {
				circlePath.center = r.point
			})
		},

	}
}
</script>



<style lang="scss" soped>
.map {
	width: 100%;
	// position: absolute;
	height: 100%;
	overflow: auto;
}
</style>


<!-- 
 <template>
     <fixed-page :noPadding="true">
 		<baidu-map  @ready="handler" style="height:1080px" @click="getClickInfo" :scroll-wheel-zoom='true'
 			ak="bNm1NF0Hri3kO9MLsYZRU5siYrMIS9GQ">
 			
 			<bm-marker ak="bNm1NF0Hri3kO9MLsYZRU5siYrMIS9GQ"
 			:position="currentCenter" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
 			      <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
 			    </bm-marker>
 			
 			<BmCircle ak="bNm1NF0Hri3kO9MLsYZRU5siYrMIS9GQ"
 				:center="currentCenter" :radius="5000000" strokeColor="blue" :strokeWeight="10" fillColor="#E2E8F1" :fillOpacity="0.6" 
 				@lineupdate="updateCirclePath" :editing="true"
 			></BmCircle>
 			
 		</baidu-map>
 	</fixed-page>
 </template>
 <script>
 	import { BaiduMap, BmScale, BmGeolocation ,BmCircle,BmMarker,BmLabel} from 'vue-baidu-map'
 export default {
   name: 'TestBaiDu',
   components:{
 	  BaiduMap, BmScale, BmGeolocation,BmCircle,BmMarker,BmLabel
   },
 	  data () {
 		return {
 		  
 		  
 		  BMap:null,
 		  map:null,
 		  
 		  
 		  currentCenter:''//
 		}
 	  },
 	  methods: {
 			  /* 
 			  地图组件渲染完毕时触发，返回一个百度地图的核心类(可调用百度api)和地图实例。百度地图组件是异步加载，
 			  请不要尝试在组件的生命周期中访问 BMap 核心类和 map 实例，如有需要，请在所需组件的 ready 事件回调函数的参数中获取。
 			  */
 			handler ({BMap, map}) {
 				this.BMap = BMap
 				this.map = map
 				this.getCurlocation()
 			},
 			getClickInfo (e) {
 			  console.log(e.point.lng)
 			  console.log(e.point.lat)
 			  this.center.lng = e.point.lng
 			  this.center.lat = e.point.lat
 			},
 			updateCirclePath(){
 				
 			},
 			
 			getCurlocation() { // 获取浏览器当前定位
 				let {BMap,map} = this
 				new BMap.Geolocation().getCurrentPosition(function(r) {
 					this.currentCenter = r.point
 
 					map.centerAndZoom(this.currentCenter, 13)//将坐标居中 并且设置缩放等级
 					
 					/* 
 					 new BMap.Marker(point)  是一个小红点
 					 */
 					var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25), {
 						offset: new BMap.Size(10, 25), // 指定定位位置
 						imageOffset: new BMap.Size(0, 0 - 10 * 25) // 设置图片偏移使用左侧的图片
 					  //  imageOffset: new BMap.Size(-20, 0 - 10 * 25) // 设置图片偏移使用右侧的图片0-x*25代表使用第x+1张图片
 					});
 					var marker=new BMap.Marker(this.currentCenter,{icon:myIcon}); // 创建标注
 					
 					map.addOverlay(marker) // 将标注添加到地图中
 					// var circle = new BMap.Circle(this.currentCenter, 500, //创建圆
 					// 	{
 					// 	            strokeColor: "blue",
 					// 	            strokeWeight: 1,
 					// 	            fillColor: "#E2E8F1",
 					// 	            fillOpacity: 0.6
 					// 	        }
 					// )
 					// map.addOverlay(circle)
 				
 				})
 			}
 	   },
 	}
 </script>
 
 
 
 
 
 
 
 -->
