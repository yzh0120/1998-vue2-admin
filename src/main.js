/*
 * @Author: wjs
 * @Date: 2022-03-21 14:16:14
 * @Description: 
 * @FilePath: \ele-customer\src\main.js
 * 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/////////////////////////////////////////////////////////////////////////////////////////
import '@/styles/index.scss'; //全局样式




/** 自定义组件 *******************************************************************************************************/
//图标组件
import svgIcon from '@/components/svgIcon'
Vue.component("svgIcon", svgIcon)

//page
import page from '@/components/base/page'
Vue.component("page", page)

//baseform
import baseForm from '@/components/base-form'
Vue.component("baseForm", baseForm)

import timeliness from '@/components/base-form/timeliness'
Vue.component("timeliness", timeliness)

//文件
import fileList from '@/components/file/fileList'
Vue.component("fileList", fileList)

import fileListShow from '@/components/file/fileListShow'
Vue.component("fileListShow", fileListShow)

import oneFile from '@/components/file/oneFile'
Vue.component("oneFile", oneFile)

//alert
import alert from '@/components/alert'
Vue.component("alert", alert)

//pager
import basePager from '@/components/base-pager'
Vue.component("pager", basePager)

//panel
import panel from '@/components/panel'
Vue.component("panel", panel)

import panel2 from '@/components/panel2'
Vue.component("panel2", panel2)

//navPage
import navPage from '@/components/base/navPage'
Vue.component("navPage", navPage)

//pdfShowAll
import pdfShowAll from '@/components/pdf/pdfShowAll'
Vue.component("pdfShowAll", pdfShowAll)

import pdfPage from '@/components/pdf/pdfPage'
Vue.component("pdfPage", pdfPage)

import tablePage from "@/components/tablePage"
Vue.component('tablePage', tablePage)

import baseCard from '@/components/baseCard'
Vue.component('baseCard', baseCard)

import tip from '@/components/tip'
Vue.component("tip", tip)
import card from '@/components/card'
Vue.component("card", card)
/** mixin *******************************************************************************************************/
import baseFormMixin from "@/mixins/baseForm";
Vue.mixin(baseFormMixin)

import btn from "@/mixins/btn";
Vue.mixin(btn)

/** 原型链 *******************************************************************************************************/
//常用函数
import * as fn from "@/utils/fn.js"
Vue.prototype.$fn = fn;

//校验规则
import * as validator from "@/utils/validate"
Vue.prototype.$validator = validator;

//文件后缀名
Vue.prototype.$fileType = ["pdf", "doc", "docx", "xls", "xlsx", "jpg", "jpeg", "gif", "png"]

/** 自定义指令 *******************************************************************************************************/
//对金额的输入框去除逗号（,）时，只需加上指令 v-enter-money 即可
Vue.directive("enterMoney", {
  bind: function (el) {
    el = el.nodeName == "INPUT" ? el : el.children[0];
    el.addEventListener("change", function () {
      el.value = el.value.replace(/,|，|\s/gi, "");
      el.dispatchEvent(new Event("input"));
    })
  }
})
/** 自定义过滤器 *******************************************************************************************************/
//格式日期
Vue.filter("formatDate", (value, format) => {
  if (value != "0001-01-01 00:00:00" && value != "0001-01-01T00:00:00" && value) {
    return date.formatDate(value, format)
  } else {
    return "";
  }
})
///格式文件大小
Vue.filter("fileSize", (value) => {
  if (value) {
    return num.numberFormatter(value);
  } else {
    return "";
  }
})
//格式金额
Vue.filter("formatMoney", (value, num) => {
  if (value != "undefined" && value != undefined && value != null) {
    return num.formatMoney(value, num || 2)
  }
})
//格式金额
Vue.filter("formatMoney_null", (value, num) => {
  if (value) {
    return num.formatMoney(value, num || 2)
  } else {
    return ""
  }
})

/** 插件 *******************************************************************************************************/
//VueSocketIO
import VueSocketIO from 'vue-socket.io'
Vue.use(new VueSocketIO({
  debug: true, //开启debug模式
  connection: 'http://localhost:4000', //连接地址
  options: {
    autoConnect: false, //是否一进网站就链接socket
    query: {
      token: ''
    },
  },
}))

//elemnet
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import PuzzleVerification from 'vue-puzzle-verification'
Vue.use(PuzzleVerification)

//vxe
import XEUtils from 'xe-utils'
Vue.prototype.$utils = XEUtils
// import VXETable from 'vxe-table'
// import 'vxe-table/lib/style.css'
// Vue.use(VXETable)
// 完整导入 UI 组件库
import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'
// 完整导入 表格库
import VxeUITable from 'vxe-table'
import 'vxe-table/lib/style.css'
Vue.use(VxeUI)
Vue.use(VxeUITable)
VxeUITable.setConfig({
  size: "small",
  table: {
    border: true, //显示边框
    stripe: true, //斑马线
    resizable: true, //手动改变列宽度
    showOverflow: true, //溢出悬浮
    // align: 'center', //居中
    highlightCurrentRow: true, //高亮当前行
    showFooter: true, //显示底部
  }
})


//v-charts
import 'echarts/lib/component/dataZoom'
import 'v-charts/lib/style.css'
import VCharts from 'v-charts'
Vue.use(VCharts)
//v-charts组件出现（undefined (reading ‘map‘）bug解决方案
Vue._watchers = Vue.prototype._watchers = [];





import bus from '@/utils/bus.js'
Vue.prototype.$bus = bus

/*发射
this.$bus.$emit('busEvent', 0)
*/

/*接收
this.$bus.$on('busEvent', val => {
  this.updateJs()
})
*/

/*销毁
beforeDestroy() {
    this.$root.$off('busEvent')
  },
*/


//////////////////////////////////////////////////////////////////////////////////////

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
