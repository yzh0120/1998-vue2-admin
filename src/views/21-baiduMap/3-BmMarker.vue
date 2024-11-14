<template>
	<div style="height: 80vh;">
		<baidu-map class="map" :center="circlePath.center" :zoom="12" :scroll-wheel-zoom='true' @ready="mapReady">
			<!-- 标注 -->
			<bm-marker :position="circlePath.center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
				<!-- 文字 -->
				<bm-label content="一段文字" :labelStyle="{ color: 'green', fontSize: '24px' }" :offset="{ width: -35, height: 30 }" />
			</bm-marker>

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
