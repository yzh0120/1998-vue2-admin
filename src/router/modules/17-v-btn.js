let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
  path: '/v-btn',
  name: 'v-btn',
  component: layout,
  meta: {
    title: '自定义指令',
    icon: "shezhi1",
  },
  children: [
    {
      path: 'base',
      name: 'v-btn-base',
      component: () => import( /* webpackChunkName: "-v-btn-base" */ "@/views/17-v-btn/1-base.vue"),
      meta: {
        title: '按钮权限',
        icon: "shezhi1",
      }
    },
    // {
    //   path: 'two',
    //   name: 'bus-two',
    //   component: () => import( /* webpackChunkName: "bus-base" */ "@/views/16-bus/two.vue"),
    //   meta: {
    //     title: '接受事件',
    //     icon: "shezhi1",
    //   }
    // }
  ]
}
