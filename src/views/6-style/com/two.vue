<template>
  <div>
    <div class="box">
      <div class="son" v-for="(item,index) in sonArr" :key="index">{{ index }}</div>
    </div>
  </div>
</template>

<script>
  export default {
  data() { 
      return {
        sonArr: [{},{},{},{},{},{},{}]
      }
  },
  }
</script>

<style lang="scss" scoped>
// https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool


// .box{
//   width: 90%;
//   margin: 0 auto;
//   border: 1px solid #ccc;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   .son{
//     width: 200px;
//     height: 200px;
//     margin: 20px 0;
//     background-color: green;
//   }
// }

.box{
  width: 1000px;
  margin: 0 auto;
  border: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  // align-content: flex-start;
  padding-left: 22px;//重点
  .son{
    width: 200px;
    height: 200px;
    margin: 20px 20px 20px 20px;
    background-color: green;
  }
}
</style>
