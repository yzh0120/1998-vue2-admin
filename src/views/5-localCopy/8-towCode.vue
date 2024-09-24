<template>
  <div>
    <vxe-modal v-model="applyRefund" width="390" height="390" title=" " class="my_alert">

      <div style="color:#1B1B1B;font-size: 20px;text-align: center;font-weight: 600;">绑定二维码</div>
      <div style="display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      top: 10px;">
        <div @click="() => { express = false }" v-if="express"
          style="width: 230px;height: 230px;
          background-color: rgba(0, 0, 0, 0.5);
          position: absolute;
          z-index: 999;
          display: flex;
          justify-content: center;
          align-items: center;">
          <div style="color: white; 
          ">
            二维码已过期, 请点击获取
          </div>
        </div>
        <img :src="`${imgUrl}`" width="230px" height="230px"  />
      </div>
      <div style="text-align: center;margin-top: 40px;" >
        使用微信扫码，绑定微信公众号，可实时获取开函进度。
      </div>


    </vxe-modal>

    <el-button @click="() => { applyRefund = true }">点击</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      applyRefund: false,
      express: true,
      imgUrl: "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQGk7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAySVUtbjhnY09lTkYxQ0dZWjFDY3QAAgRufL1mAwQ8AAAA"
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  width: 100%;

}

::v-deep {
  .my_alert {
    .vxe-modal--box {
      background-color: white !important;
      background-image: url('~@/assets/imgs/bgTwo.png');
      border: 0px;

      .vxe-modal--header {
        background-color: transparent !important;
        border: 0px !important;
        height: 30px !important;
      }

      .vxe-modal--body {
        padding: 0px !important;
      }
    }

  }
  //这是3.8的
  // .my_alert {
  //   .vxe-modal--box {
  //     background-color: white !important;
  //     background-image: url('~@/assets/imgs/bgTwo.png');
  //     border: 0px;

  //     .vxe-modal--header {
  //       background-color: transparent !important;
  //       border: 0px !important;
  //       height: 30px !important;

  //     }

  //     .vxe-modal--content {
  //       padding: 0px !important;
  //     }
  //   }

  // }


}
</style>
