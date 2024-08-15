<template>
  <div>
    <vxe-modal v-model="applyRefund" width="390" height="390" title="绑定二维码" class="my_alert">
   
        <!-- <div></div> -->
        <div style="display: flex;justify-content: center;align-items: center;height: 85%;position: relative;">
          <div @click="() => { express = false }" v-if="express"
            style="width: 230px;height: 230px;background-color: rgba(0, 0, 0, 0.5);position: absolute;z-index: 999;display: flex;justify-content: center;align-items: center;">
            <div style="color: white;">
              二维码已过期, 请点击获取
            </div>
          </div>
          <img :src="`${imgUrl}`" width="230px" height="230px" style="position: absolute;" />
        </div>
        <div style="text-align: center">
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
      express: false,
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
      .vxe-modal--header {
      background-color: transparent !important;
      border: 0px !important;
      min-height: 50px !important;
      position: relative;

      .vxe-modal--header-title {
        // text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        padding: 0px;
        transform: translate(-50%,-50%);
        font-size: 20px;
        color: black;
      }

      .vxe-modal--header-right {
        position: absolute;
        right: 14px;
        top: 50%;
        padding: 0px;
        transform: translateY(-50%);
      }
    }

    .vxe-modal--content {
      padding: 0px !important;
    }
    }


  }
}
</style>
