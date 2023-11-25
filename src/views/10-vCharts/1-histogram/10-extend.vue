<!--
 * @Author: yz
 * @Date: 2022-05-05 16:13:01
 * @Description: 
 * @FilePath: \workTo30_vue2Admin\src\views\10-vCharts\1-histogram\10-extend.vue
 * 
-->
<template>
	<page>
		<ve-histogram :data="chartData" :extend="extend"></ve-histogram>
	</page>
</template>
<script>
export default {
	data() {
		/*
		extend 表示继承 不需要和afterConfig一样指定 seires[0]  xAxis[0],对象默认作用到数组的每个对象
		*/
		this.extend = {//会合并默认配置
			//       'xAxis.0.axisLabel.rotate': 45,
			// color:['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
			xAxis: {
				axisLabel: {
					rotate: 45
				}
			}
		}
		return {
			chartData: {
				columns: ['日期', '访问用户', '下单用户', '下单率'],
				rows: [
					{ '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
					{ '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
					{ '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
					{ '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
					{ '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
					{ '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
				]
			}
		}
	}
}
</script>

<!-- 
https://zizorg.github.io/v-charts/#/props
 
 this.extend = {
	 grid: [object, array],
	 colors: array,
	 visualMap: [object, array],
	 dataZoom: [object, array],
	 toolbox: [object, array],
	 title: object,
	 legend: [object, array],
	 xAxis: [object, array],
	 yAxis: [object, array],
	 radar: object,
	 tooltip: object,
	 axisPointer: object,
	 brush: [object, array],
	 geo: object,
	 timeline: [object, array],
	 graphic: [object, array],
	 series: [object, array],
	 backgroundColor: [object, string],
	 textStyle: object,
	 animation: object
	 
	 
 }
 
 -->
