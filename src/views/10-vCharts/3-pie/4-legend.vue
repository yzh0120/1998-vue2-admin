<!--
 * @Author: yz
 * @Date: 2022-05-20 14:05:57
 * @Description: 
 * @FilePath: \workTo30_vue2Admin\src\views\10-vCharts\3-pie\3-radiusAndCenter.vue
 * 
-->
<template>
  <page>
    <!-- extend: {
        series: {
          center: ['50%', '50%'],
          radius: [0, '60%']
        }
      } -->
    <ve-pie :data="chartData" :after-config="afterConfig"></ve-pie>
  </page>
</template>

<script>
export default {
  data() {
    return {
      // extend: {
      //   series: {
      //     center: ['50%', '50%'],
      //     radius: [0, '60%']
      //   }
      // },
      chartData: {
        columns: ["name", "count"],
        rows: [
          { name: "1/1", count: 1393 },
          { name: "1/2", count: 3530 },
          { name: "1/3", count: 2923 },
          { name: "1/4", count: 1723 },
          { name: "1/5", count: 3792 },
          { name: "1/6", count: 4593 },
        ],
      },
    };
  },
  methods: {
    afterConfig(options) {

      // options.series[0] = Object.assign(options.series[0], {
      //   center: ['50%', '50%'],
      //   radius: [0, '10%']//内半径 外半径
      // })

      /*			
      图例位置
      options.legend.x= "left"
			options.legend.y = "bottom"*/

      options.legend.formatter = function (name) {
				// 获取legend显示内容
				let data = options.series[0].data;
				let total = 0;
				let tarValue = 0;
				for (let i = 0, l = data.length; i < l; i++) {
					total += data[i].value;
					if (data[i].name == name) {
						tarValue = data[i].value;
					}
				}
				let p = (tarValue / total * 100).toFixed(2);
			/*return name + ' ' + ' ' + p + '%';*/
				return `${name}-${tarValue}笔, 占比:${p}%`
			
			
				
			}

      console.log(options, "123")

      return options
    },
  },
};
</script>
