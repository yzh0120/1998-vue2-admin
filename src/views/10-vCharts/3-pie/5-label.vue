<!--
 * @Author: yz
 * @Date: 2022-05-20 14:05:57
 * @Description: 
 * @FilePath: \workTo30_vue2Admin\src\views\10-vCharts\3-pie\3-radiusAndCenter.vue
 * 
-->
<template>
  <page>
    <ve-pie :data="chartData" :after-config="afterConfig"></ve-pie>
  </page>
</template>

<script>
export default {
  data() {
    return {
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
      /*
      https://blog.csdn.net/qq_38718629/article/details/126892957
      https://blog.csdn.net/weixin_45907435/article/details/136884137
      */
      console.log(options.series, "options.series[0]")
      // options.series[0].label.formatter = "{d|{d}%} \n {b|{b}}"
      /*
      这里使用字符串模板进行设置，其中模板变量有{a}, {b}, {c}, {d}，在不同图表类型下代表含义分别为
      折线图、柱状图、K线图：{a} (系列名称)、{b}(类目值)，{c}(数值)，{d}（无）
      散点图（气泡）图 : {a}（系列名称），{b}（数据名称），{c}（数值数组）, {d}（无）
      地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
      饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
      */
      options.series[0].label = {

        show: true,
        formatter: "{d|{d}%} \n {c|{c}}",
        rich: {
          d: {
                  color: '#000',
                  fontSize: 16,
                  lineHeight: 24,
                  height: 24
                },
                c: {
                  color: "#000",
                  fontSize: 14,
                  lineHeight: 20,
                  align: 'left',
                }
        },
        textStyle: {
          color: "#fff",
          align: "right",
          fontSize: 14,
        },
      }



      return options
    },
  },
};
</script>
