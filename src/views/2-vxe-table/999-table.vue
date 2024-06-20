<template>
  <page>
    <!--  -->
    <p>原生的横向表格</p>
    <table class="table">
      <tbody>
        <tr>
          <td class="title">时间</td>
          <td v-for="(item, index) in table1" :key="uuid() + index">
            {{ item.date }}
          </td>
        </tr>
        <tr>
          <td class="title">收入</td>
          <td v-for="(item, index) in table1" :key="uuid() + index">
            {{ item.xxx }}
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <p>普通</p>
    <table class="table" >
      <tbody>
        <tr>
          <td >企业名称</td>
          <td colspan="5"></td>
        </tr>
        <tr>
          <td width="16.6%">法人代表姓名</td>
          <td width="16.6%">11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</td>
          <td width="16.6%">法人代表身份证</td>
          <td width="16.6%">xxx东方闪电家得福东方闪电家得福东方闪电家得福东方闪电家得福东方闪电家得福东方闪电家得福东方闪电家得福东方闪电家得福东方闪电家得福东方闪电家得福东方闪电家得福东方闪电家得福东方闪电家得福东方闪电家得福东方闪电家得福东方闪电家得福东方闪电家得福</td>
          <td width="16.6%">法人手机</td>
          <td width="16.6%"></td> 
        </tr>

        <tr>
          <td>实控人代表姓名</td>
          <td></td>
          <td>实控人代表身份证</td>
          <td></td>
          <td>实控人手机</td>
          <td></td> 
        </tr>
      </tbody>
    </table>
    <br />
    <p>keyvalue模式</p>
    <table class="table keyvalue">
      <tbody>
        <tr>
          <td>企业名称</td>
          <td colspan="5"></td>
        
          <!-- <td></td> -->
        </tr>
        <tr>
          <td>法人代表姓名</td>
          <td></td>

          <td>法人代表身份证</td>
          <td>xxx</td>
          <td>法人手机</td>
          <td></td> 
        </tr>

        <tr>
          <td>实控人代表姓名</td>
          <td></td>
          <td>实控人代表身份证</td>
          <td></td>
          <td>实控人手机</td>
          <td></td> 
        </tr>
      </tbody>
    </table>
    <br />
    <br />
    <!--  -->
    <p>斑马</p>
    <table class="table row">
      <tbody>
        <tr>
          <td>企业名称</td>
          <td colspan="5"></td>
        </tr>
        <tr>
          <td>法人代表姓名</td>
          <td></td>

          <td>法人代表身份证</td>
          <td>xxx</td>
          <td>法人手机</td>
          <td></td> 
        </tr>

        <tr>
          <td>实控人代表姓名</td>
          <td></td>
          <td>实控人代表身份证</td>
          <td></td>
          <td>实控人手机</td>
          <td></td> 
        </tr>
      </tbody>
    </table>
    <br />


    <!--  -->
    <panel>
      <div slot="header">
        panel
      </div>

      <table class="table keyvalue">
      <tbody>
        <tr>
          <td>企业名称</td>
          <td></td>
          <td colspan="3"></td>
          <td>统一社会信用代码</td>
          <td></td>
        </tr>
        <tr>
          <td>法人代表姓名</td>
          <td></td>

          <td>法人代表身份证</td>
          <td>xxx</td>
          <td>法人手机</td>
          <td></td>
        </tr>

        <tr>
          <td>实控人代表姓名</td>
          <td></td>
          <td>实控人代表身份证</td>
          <td></td>
          <td>实控人手机</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    </panel>
  </page>
</template>

<script>
export default {
  data() {
    return {
      table1: [{ date: "2018" }, {}, {}, {}, {}, {}, {}],
    };
  },
  methods: {
    uuid() {
      var s = [];
      var hexDigits = "0123456789abcdef";
      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = "-";

      var uuid = s.join("");
      return uuid;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
