<!--
 * @Author: yz
 * @Date: 2022-05-05 16:21:14
 * @Description: 
 * @FilePath: \workTo30_vue2Admin\src\views\10-vCharts\1-histogram\other\10-minInterval.vue
 * 
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
          { '日期': '1/1', '访问用户': 0, '下单用户': 0, '下单率': 0 },
          { '日期': '1/1', '访问用户': 110, '下单用户': 20, '下单率': 0 },
          // { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          // { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          // { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          // { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      }
    }
  },
  methods: {
    afterConfig(options) {
      options.yAxis[0].splitLine = false;//不显示图表的分割线
      // 纵坐标为整数
      options.yAxis[0].interval = 10                //间隔
      //options.yAxis[0].minInterval = 10           //最小间隔
      // options.yAxis[0].type = "value"

      return options;


    },
  }
}
</script>
