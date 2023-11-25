let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
  path: '/panel',
  name: 'panel',
  component: layout,
  meta: {
    title: 'panel',
    icon: "shezhi1",
  },
  children: [{
    path: 'base',
    name: 'panel-base',
    component: () => import( /* webpackChunkName: "panel-base" */ "@/views/14-panel/1-base.vue"),
    meta: {
      title: 'panel',
      icon: "shezhi1",
    }
  }]
}
