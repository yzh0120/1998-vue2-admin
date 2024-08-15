<template>
  <div>
    <el-popover placement="left-start" trigger="hover">
        <div class="gzh1">
          <img src="../../assets/imgs/gzh1.png" alt="" width="80px">
          <span class="span1">关注公众号</span>
          <span class="span2">获取保函办理进度</span>
        </div>

        <div class="hover2" slot="reference">
          <img src="" alt="">
          <span>
            公众号
          </span>
        </div>

      </el-popover>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.gzh1 {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;


  width: 110px;
  height: 120px;
  // border-color: red;
  // background-color: red;
  box-sizing: border-box;
  padding: 10px 4px;

  .span1 {
    font-size: 12px;
    color: #4E5969;
  }

  .span2 {
    transform: scale(0.9);
    font-size: 12px;
    color: #B1B3B8;
  }
}

.hover2 {
  // position: fixed;
  // top: 380px;
  // right: 0px;
  // z-index: 999;

  display: flex;
  flex-direction: column;
  // justify-content: center;
  cursor: pointer;
  align-items: center;
  width: 70px;
  height: 80px;
  box-sizing: border-box;
  padding: 12px 11px;
  background-color: #F9F9F9;

  & img {
    width: 24px;
    height: 24px;
    margin-bottom: 10px;
    content: url("~@/assets/imgs/7.png");
  }

  span {
    font-size: 12px;
    color: #4E5969;
  }


  &:hover {
    background-color: #F6384C;

    span {
      // font-size: 12px;
      color: white;
    }

    & img {
      content: url("~@/assets/imgs/8.png");
    }
  }



}
</style>
