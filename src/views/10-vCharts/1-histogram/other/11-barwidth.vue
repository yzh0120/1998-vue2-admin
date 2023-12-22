<!--
 * @Author: yz
 * @Date: 2022-05-05 16:13:01
 * @Description: 
 * @FilePath: \workTo30_vue2Admin\src\views\10-vCharts\1-histogram\other\11-barwidth.vue
 * 
-->

<!--
  color: ['rgba(64, 158, 255, 1)']
  legend: {data: Array(1), formatter: ƒ}
  series: [{…}]
  tooltip: {trigger: 'axis', formatter: ƒ}
  xAxis: (2) [{…}, {…}]
  yAxis: [{…}]

-->
<template>
  <page>
    <ve-histogram :data="chartData" :after-config="afterConfig"></ve-histogram>
  </page>
</template>
<script>
export default {
  data() {
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 3200 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      }
    }
  },
  methods: {
    afterConfig(options) {
      console.log(options,"options")

      // barwidth
      // options.series[0].barWidth = 10
      options.series.forEach((e) => { 
        e.barWidth = 10
      })

      return options;


    },
  }
}
</script>
