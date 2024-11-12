<template>
  <div>
    <div class="shu">
      <el-radio-group size="default" v-model="radio">
        <el-radio :label="item.id" border v-for="(item, index) in payList" :key="index">
          <div class="item">
            <div class="one">{{ item.companyName }}</div>
            <div class="two">{{ item.project }}</div>
            <div class="three">
              <div class="tit">中标时间：</div>
              <div class="value">{{ item.time }}</div>
              &nbsp;
              <div class="tit">中标金额：</div>
              <div class="value">{{ item.money }}</div>
            </div>
          </div>
        </el-radio>
      </el-radio-group>
    </div>

    <div class="heng">
      <el-radio-group size="default" v-model="radio">
        <el-radio :label="item.id" border v-for="(item, index) in payList" :key="index">
          <div class="item2">
            <div class="img"></div>
            <div>耳机</div>
            <!-- <div class="one">{{ item.companyName }}</div>
            <div class="two">{{ item.project }}</div>
            <div class="three">
              <div class="tit">中标时间：</div>
              <div class="value">{{ item.time }}</div>
              &nbsp;
              <div class="tit">中标金额：</div>
              <div class="value">{{ item.money }}</div>
            </div> -->
          </div>
        </el-radio>
      </el-radio-group>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      payList: [
        {
          id: "1",
          companyName: "翼城县农村公路水毁重建修复项目",
          project: "JL0100G23013",
          time: "2023年1月2日",
          money: "12,000,000元"
        },
        {
          id: "2",
          companyName: "长春汽车经济技术开发区常兴街道路建设工程、丙四十一街道路排水工程监理",
          project: "CCS20230419FJSZ10001",
          time: "2023年1月2日",
          money: "2,000,000元"
        },
        {
          id: "3",
          companyName: "袁州区老旧小区改造项目—秀江街道高士居小居",
          project: "36090220230403020291",
          time: "2023年1月2日",
          money: "8,000,000元"
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
  .shu {
    .el-radio-group {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .el-radio.is-bordered+.el-radio {
      margin-bottom: 20px;
    }

    .el-radio.is-bordered.is-checked {
      background-color: #FFFAFA;
    }

    .el-radio.is-bordered {
      padding: 0px 20px 0 10px;
    }

    .el-radio {
      margin-left: 0px !important;
      background: #F7F7F7;
      // height: auto;
      display: flex;
      margin: 0;
      margin-bottom: 20px;
      width: 100%;
      height: 120px;

      .el-radio__input {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .heng{
    .el-radio-group {
      width: 100%;
      display: flex;
      // flex-wrap: wrap;
      justify-content: space-around;
    }

    .el-radio.is-bordered+.el-radio {
      margin-bottom: 20px;
    }

    .el-radio.is-bordered.is-checked {
      background-color: #FFFAFA;
    }

    .el-radio.is-bordered {
      padding: 0px 20px 0 10px;
    }

    .el-radio {
      width: 164px !important;
      height: 126px !important;
      margin-left: 0px !important;
      background: #F7F7F7;
      // height: auto;
      display: flex;
      margin: 0;
      margin-bottom: 20px;
      width: 100%;
      height: 120px;

      .el-radio__input {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

}

//////////////////
.item {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .one {
    // color: #E6000000;
    height: 22px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.9);
    line-height: 22px;
  }

  .two {
    height: 22px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.9);
    line-height: 22px;
    color: rgba(0, 0, 0, 0.6);
    margin: 8px 0;
  }

  .three {
    display: flex;

    .tit {
      height: 22px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.9);
      line-height: 22px;
    }

    .value {
      height: 22px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      line-height: 22px;
    }
  }
}
.item2{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .img{
    width: 90px;
    height: 90px;
    background-color: red;
  }
}
</style>
