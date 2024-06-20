let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
  path: '/vuex',
  name: 'vuex',
  component: layout,
  meta: {
    title: 'vuex',
    icon: "shezhi1",
  },
  children: [
    {
      path: 'base',
      name: 'vuex-base',
      component: () => import( /* webpackChunkName: "18-vuex-base" */ "@/views/18-vuex/1-base.vue"),
      meta: {
        title: 'vuex',
        icon: "shezhi1",
      }
    }
  ]
}
