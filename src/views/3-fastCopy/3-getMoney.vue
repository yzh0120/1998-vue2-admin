<template>
  <div>
    <div style="width: 1000px;margin: 0px auto;">
      <!-- <div style="height:600px"> -->
      <template v-if="payList.length">
        <baseCard header="请选择支付方式" shadow="never" noborder>

          <el-radio-group v-model="paymentType" size="default">
            <el-radio :label="item.payType" border v-for="(item, index) in payList" :key="index">
              <img :src="require(`@/assets/payment/yinlian.png`)" v-if="item.payType == 1" />
              <img :src="require(`@/assets/payment/Wechat.png`)" v-if="item.payType == 2" />
              <img :src="require(`@/assets/payment/Alipay.png`)" v-if="item.payType == 3" />
              <span>{{ item.payType | payTypeFilter }}</span>
            </el-radio>
          </el-radio-group>
        </baseCard>
        <baseCard header="收款信息" shadow="never" noborder>
          <table class="basic table table-bordered keyvalue" style="margin-bottom: 30px;color: rgba(0,0,0,0.6);">
            <tbody>
              <tr>
                <td width="50%">项目名称</td>
                <td>{{ activePay.projectName }}</td>
              </tr>
              <tr>
                <td> 被保证人名称</td>
                <td>{{ activePay.insureCompanyName }} </td>
              </tr>
              <tr>
                <td> 受益人名称</td>
                <td>{{ activePay.beneficiaryName }} </td>
              </tr>
              <tr>
                <td> 担保金额（元）</td>
                <td>{{ activePay.bidAmount }} </td>
              </tr>
              <tr>
                <td> 期限（月）</td>
                <td>{{ activePay.guaranteeValidity }} </td>
              </tr>
              <tr>
                <td> 保函起始日</td>
                <td>{{ activePay.guaranteeBeginDate }} </td>
              </tr>
              <tr>
                <td> 保函截止日</td>
                <td>{{ activePay.guaranteeEndDate }} </td>
              </tr>
              <tr>
                <td> 担保费（元）</td>
                <td>{{ activePay.danBaoAmount }} </td>
              </tr>
              <tr>
                <td> 保证金（元）</td>
                <td>{{ activePay.baoZhengAmount }} </td>
              </tr>
              <tr>
                <td> 合计需支付金额（元）</td>
                <td>{{ activePay.totalPayAmount }} </td>
              </tr>
            </tbody>
          </table>
        </baseCard>

        <!-- 对公支付 -->
        <baseCard header="收款信息" shadow="never" noborder v-if="paymentType == 1">
          <table class="basic table table-bordered keyvalue" style="margin-bottom: 30px;color: rgba(0,0,0,0.6);">
            <tbody>
              <tr>
                <td width="50%">
                  收款账户名称
                </td>
                <td>
                  {{ activePay.accountName }}
                </td>
              </tr>
              <tr>
                <td>
                  收款账户开户银行
                </td>
                <td>
                  {{ activePay.accountBank }}
                </td>
              </tr>
              <tr>
                <td>
                  收款账户帐号
                </td>
                <td>
                  {{ activePay.accountNo }}
                </td>
              </tr>
              <tr>
                <td>
                  备注
                </td>
                <td>
                  {{ activePay.remark }}
                </td>
              </tr>
              <tr>
                <td>
                  付款金额（元）
                </td>
                <td>
                  {{ activePay.payAmount }}
                </td>
              </tr>
            </tbody>
          </table>
          <!-- <baseCard>
          <div class="notice">
            <p style="font-size: 18px;color:#F6384C;margin-bottom: 12px;">注意事项</p>
            <p>1、每次支付都会生成订单对应的新收款帐号，请按照页面提示帐号进行付款。</p>
            <p>2、请投标人使用对公账户付款，使用非对公帐户付款将会打款失败。</p>
            <p>3、订单金额与转账金额必须一致，请勿多转帐、少转帐或分次转账。</p>
            <p>4、请在转帐时，按照收款信息备注的内容，填写附言/摘要/备注。</p>
            <p>5、对公支付因各银行不同，会影响实际到账时间，最终支付时间以到账时间为准，请合理安排付款时间。</p>
            <p>6、如有疑问，请拨打客服电话：400-0755-268</p>
          </div>
        </baseCard> -->
          <tip title="注意事项">
            <div class="notice">
              <p>1、每次支付都会生成订单对应的新收款帐号，请按照页面提示帐号进行付款。</p>
              <p>2、请申请人使用申请企业对公账户付款，使用非对公帐户付款将会打款失败。</p>
              <p>3、订单金额与转账金额必须一致，请勿多转帐、少转帐或分次转账。</p>
              <p>4、请在转帐时，按照收款信息备注的内容，填写附言/摘要/备注。</p>
              <p>5、对公支付因各银行不同，会影响实际到账时间，最终支付时间以到账时间为准，请合理安排付款时间。</p>
            </div>
          </tip>
        </baseCard>

        <!-- 二维码 -->
        <div v-if="paymentType == 2 || paymentType == 3" class="er_wei_ma">
          <div class="er_wei_ma_box">
            <img :src="activePay.qrCode" alt="" width="100%" height="100%" style="position: absolute;">
          </div>
          <div class="er_wei_ma_bottom">
            <img :src="require(`@/assets/payment/Wechat.png`)" alt="" width="25px" align="absmiddle"
              v-if="paymentType == 2">
            <img :src="require(`@/assets/payment/Alipay.png`)" alt="" width="25px" align="absmiddle"
              v-if="paymentType == 3">
            <span style="color: #606266 ;">
              {{ paymentType == 2 ? '微信' : '支付宝' }}扫码, 支付 <span style="color: #F6384C;">{{
        activePay.payAmount }}</span> 元
            </span>
          </div>
        </div>

      </template>


      <template v-else>
        <div style="padding-top: 60px;">
          <panel type="mxh">
            <div slot="header">
              金融机构审核中
            </div>
            <div style="text-align: center;font-size: 20px; color: red;">
              机构审核中,请耐心等待,审核完成后将自动刷新
            </div>

            <div style="text-align: center">
              <el-button size="primary" @click="getPayList">刷新状态</el-button>
            </div>
          </panel>
        </div>

      </template>

    </div>
  </div>

</template>

<script>
// import * as mxhApi from "@/api/mxh"
export default {
  data() {
    return {
      timer: null,
      payList: [],
      paymentType: 1,
    }
  },
  filters: {
    payTypeFilter(text) {
      if (text == 1) {
        return "公对公转账"
      } else if (text == 2) {
        return "微信支付"
      } else if (text == 3) {
        return "支付宝支付"
      }
    }
  },
  computed: {
    activePay() {
      let obj = this.payList.find((e) => {
        return e.payType == this.paymentType
      })

      if (obj) {
        return obj
      } else {
        return {}
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  mounted() {
    this.getPayList()
    this.timer = setInterval(() => {
      this.getPayList()
    }, 1000 * 60 * 5)
  },
  methods: {
    // 获取支付方式
    getPayList() {
      this.payList = [{
        payType: 1
      }]
      // mxhApi.getPayInfo({ applyno: this.$route.query.applyNo }).then((res) => {
      //   if (res.code == 200) {
      //     if (res.data && res.data.length) {
      //       this.payList = res.data
      //     } else { 

      //     }

      //   } else {
      //     this.$message.error(res.msg)
      //   }
      // })
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .el-radio__label {
  img {
    max-width: 16px;
    vertical-align: middle;
    margin-right: 5px;
  }
}
</style>
