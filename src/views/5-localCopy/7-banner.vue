<template>
  <div class="abc">
    <el-carousel id="el-carousel">
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
        <img :src="item.imgurl" alt="" width="100%" class="my_img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerHeight: 550,//走马灯高度
      screenWidth: 1920,//屏幕宽度
      bannerList: [
        { imgurl: require("@/assets/banner/1.png") },
        { imgurl: require("@/assets/banner/2.png") },
        { imgurl: require("@/assets/banner/3.png") },
      ]
    }
  },
  mounted() {
    this.setSize1();
    const that = this;
    //监听浏览器窗口大小改变
    window.addEventListener('resize', function () {
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      that.screenWidth = width;
      that.setSize();
    }, false);
  },
  methods: {
    setSize1: function () {
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.screenWidth = width;
      //图片                高 / 宽  700 / 1920
      this.bannerHeight = 550 / 1920 * this.screenWidth 
      document.getElementById('el-carousel').style.height = this.bannerHeight + 'px';
    },
    setSize: function () {
      this.bannerHeight = 550 / 1920 * this.screenWidth 
      document.getElementById('el-carousel').style.height = this.bannerHeight + 'px';
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
  .el-carousel__container {
    height: 100% !important;
  }
}
.my_img {
  object-fit: cover;
  height: 100%;
  // margin-bottom: 50px;
}
</style>
