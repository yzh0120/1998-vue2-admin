let layout = () => import("@/layout/index.vue")
import baseForm from "./modules/1-base-form.js"
import vxeTable from "./modules/2-vxe-table.js"
import fastCopy from "./modules/3-fastCopy.js"

import localCopyjs from "./modules/5-localCopy.js"
import style from "./modules/6-style.js"
import svgIcon from "./modules/7-svgIcon.js"
import socket from "./modules/8-socket.js"
import pdf from "./modules/9-pdf.js"
import vCharts from "./modules/10-vCharts.js"
import elementUI from "./modules/11-element-ui.js"
import print from "./modules/12-print.js"
import tagsView from "./modules/13-tagsView.js"
import panel from "./modules/14-panel.js"
import edit from "./modules/15-edit.js"
import bus from "./modules/16-bus.js"
import vBtn from "./modules/17-v-btn.js"
import aes from "./modules/18-aes.js"

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: layout,
    meta: {},
    children: [{
      path: 'home',
      name: 'home',
      component: () => import("@/views/base/home.vue"),
      meta: {
        title: '首页',
        icon: 'dashboard',
        isAffix: true,
        // hidden: true,
      }
    }]
  },
  {
    path: '/blank',
    name: 'blank',
    component: layout,
    meta: {
      hidden: true,
    },
  },

  {
    path: "/login",
    name: 'login',
    component: () => import("@/views/base/login.vue")
  },
  {
		path: '/404',
		name: '404',
		component: () => import( /* webpackChunkName: "404" */ "@/views/base/404.vue"),
		meta: {
			hidden: true,
			title: '404',
			// icon: 'el-icon-location',
		}
	},
	{
		path: '/401',
		name: '401',
		component: () => import( /* webpackChunkName: "401" */ "@/views/base/401.vue"),
		meta: {
			hidden: true,
			title: '401',
			// icon: 'el-icon-location',
		}
	},
  baseForm, //表单
  vxeTable,
  fastCopy,
  localCopyjs,
  style,
  svgIcon,
  socket,
  pdf,
  vCharts,
  elementUI,
  print,
  tagsView,
  panel,
  edit,
  bus,
  vBtn,
  aes
]

export default routes
