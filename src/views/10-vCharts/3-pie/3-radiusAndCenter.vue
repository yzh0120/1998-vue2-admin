
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
        columns: ["日期", "访问用户"],
        rows: [
          { 日期: "1/1", 访问用户: 1393 },
          { 日期: "1/2", 访问用户: 3530 },
          { 日期: "1/3", 访问用户: 2923 },
          { 日期: "1/4", 访问用户: 1723 },
          { 日期: "1/5", 访问用户: 3792 },
          { 日期: "1/6", 访问用户: 4593 },
        ],
      },
    };
  },
  methods: {
    afterConfig(options) {

      options.series[0] = Object.assign(options.series[0], {
        center: ['50%', '50%'],
        radius: [0, '10%']//内半径 外半径
      })



      console.log(options, "123")

      return options
    },
  },
};
</script>
