let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
  path: '/promise',
  name: ' promise',
  component: layout,
  meta: {
    title: '异步',
    icon: "shezhi1",
  },
  children: [
    {
      path: 'base',
      name: 'promise-base',
      component: () => import( /* webpackChunkName: "18- promise-base" */ "@/views/22-promise/1-index.vue"),
      meta: {
        title: '异步',
        icon: "shezhi1",
      }
    }
  ]
}
