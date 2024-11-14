<template>
	<div style="height: 80vh;">
		<baidu-map class="map" :center="circlePath.center" :zoom="12" :scroll-wheel-zoom='true' @ready="mapReady">

			<bm-circle :center="circlePath.center" :radius="circlePath.radius" stroke-color="blue" :stroke-opacity="0.5"
				:stroke-weight="2" ref="circle" @lineupdate="updateCirclePath" :editing="true" @click="circleClick"></bm-circle>

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
				radius: 5000//单位 米
			}
		}
	},
	methods: {
		updateCirclePath(e) {
			console.log(e.target.getCenter(), e.target.getRadius(), "e.target")
			this.circlePath.center = e.target.getCenter()
			this.circlePath.radius = e.target.getRadius()
		},
		/* 
		ready 事件中使用返回的 BMap 类和 map 实例进行手动控制 
		 */
		mapReady({ BMap, map }) {
			this.BMap = BMap
			this.map = map
			this.getCurlocation()
		},
		getCurlocation() { // 获取浏览器当前定位
			let { BMap, map, circlePath } = this
			new BMap.Geolocation().getCurrentPosition(function (r) {
				circlePath.center = r.point
			})
		},
		circleClick(type, target, point, pixel) {
			console.log(type, target, point, pixel, 'type, target, point, pixel')
		}
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
