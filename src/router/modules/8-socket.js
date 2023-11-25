let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
  path: '/socket',
  name: 'socket',
  component: layout,
  meta: {
    title: 'socket后端推送',
    icon: "shezhi1",
  },
  children: [{
    path: 'base',
    name: 'socket-base',
    component: () => import( /* webpackChunkName: "socket-base" */ "@/views/8-socket/1-base.vue"),
    meta: {
      title: 'socket后端推送',
      icon: "shezhi1",
    }
  }]
}
