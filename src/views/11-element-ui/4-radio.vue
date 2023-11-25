<template>
  <div>
    <el-alert title="注意事项" type="warning" show-icon>
      <template>
        <div>若选择公对公转账，可上传企业盖章版合同扫描件或者使用e签宝电子签署合同。</div>
        <div>若选择微信支付（适用于保函金额100万元（含）以下的项目），需使用e签宝电子签署合同。</div>
      </template>
    </el-alert>

    <br>


    <panel type="mxh">
      <div slot="header">
        选择签署方式
      </div>

      <el-radio-group v-model="radio1">
        <el-radio :label="1" :class="[radio1 == 1? `active`:``]">
          <div class="flex1">
            <div class="left">
              <img src="../../assets/mkd/21.png" alt="" v-if="radio1 == 1">
              <img src="../../assets/mkd/20.png" alt="" v-else>
            </div>
            <div class="right">
              <div>电子签署</div>
              <div>(自动出函)</div>
            </div>
          </div>
        </el-radio>
        <el-radio :label="2" :class="[radio1 == 2? `active`:``]">
          <div class="flex1">
            <div class="left">
              <img src="../../assets/mkd/23.png" alt="" v-if="radio1 == 2">
              <img src="../../assets/mkd/22.png" alt="" v-else>
            </div>
            <div class="right">
              <div>上传盖实体章的材料文件 </div>
              <div>(不支持微信支付)</div>
            </div>
          </div>
        </el-radio>
      </el-radio-group>

    </panel>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {

        }
      }
    }
  },
  data() {
    return {
      radio1: 1
    }
  }
}
</script>

<style lang="scss" scoped>
*{
  box-sizing: border-box;
}
::v-deep {
  .el-radio-group {
    display: flex;
  }

  .el-radio {
    display: flex;
    padding: 10px;
    background: #F6F6F9;
    width: 265px;
    height: 80px;
    &.active{
      border: 1px solid #F6384C ;
      background: #FFFAFA;
    }
    .el-radio__input {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.flex1 {
  display: flex;

  .right {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div:nth-child(1) {
      color: rgba(0, 0, 0, 0.6);
    }
    div:nth-child(2) {
      color: rgba(0,0,0,0.4);
      font-weight: 400;
    }
  }
}
</style>
