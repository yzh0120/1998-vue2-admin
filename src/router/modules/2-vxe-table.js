/*
 * @Author: yz
 * @Date: 2023-02-03 15:17:51
 * @Description: 
 * 
 */
let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
  path: '/vxeTable',
  name: 'vxeTable',
  component: layout,
  meta: {
    title: 'vxeTable',
    icon: "shezhi1",
  },
  children: [{
      path: 'base',
      name: 'vxeTable-base',
      component: () => import( /* webpackChunkName: "vxeTable-base" */ "@/views/2-vxe-table/1-base.vue"),
      meta: {
        title: '基础',
        icon: "shezhi1",
      }
    },
    {
      path: 'checkbox',
      name: 'vxeTable-checkbox',
      component: () => import( /* webpackChunkName: "vxeTable-checkbox" */ "@/views/2-vxe-table/2-checkbox.vue"),
      meta: {
        title: '多选',
        icon: "shezhi1",
      }
    },
    {
      path: 'radio',
      name: 'vxeTable-radio',
      component: () => import( /* webpackChunkName: "vxeTable-radio" */ "@/views/2-vxe-table/3-radio.vue"),
      meta: {
        title: '单选',
        icon: "shezhi1",
      }
    },
    {
      path: 'isCurrent',
      name: 'vxeTable-isCurrent',
      component: () => import( /* webpackChunkName: "vxeTable-isCurrent" */ "@/views/2-vxe-table/4-isCurrent.vue"),
      meta: {
        title: '选中当前行',
        icon: "shezhi1",
      }
    },
    {
      path: 'sum',
      name: 'vxeTable-sum',
      component: () => import( /* webpackChunkName: "vxeTable-sum" */ "@/views/2-vxe-table/5-sum.vue"),
      meta: {
        title: '合计',
        icon: "shezhi1",
      }
    },
    {
      path: 'shu',
      name: 'vxeTable-shu',
      component: () => import( /* webpackChunkName: "vxeTable-shu" */ "@/views/2-vxe-table/6-shu.vue"),
      meta: {
        title: '竖向表格',
        icon: "shezhi1",
      }
    },
    {
      path: 'input',
      name: 'vxeTable-input',
      component: () => import( /* webpackChunkName: "vxeTable-input" */ "@/views/2-vxe-table/7-input.vue"),
      meta: {
        title: 'input表格',
        icon: "shezhi1",
      }
    },

    {
      path: 'table',
      name: 'vxeTable-table',
      component: () => import( /* webpackChunkName: "vxeTable-table" */ "@/views/2-vxe-table/999-table.vue"),
      meta: {
        title: '原生表格',
        icon: "shezhi1",
      }
    }
  ]
}
