let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
  path: '/aes',
  name: 'aes',
  component: layout,
  meta: {
    title: '加解密',
    icon: "shezhi1",
  },
  children: [
    {
      path: 'base',
      name: 'aes-base',
      component: () => import( /* webpackChunkName: "18-aes-base" */ "@/views/18-aes/1-base.vue"),
      meta: {
        title: '加解密',
        icon: "shezhi1",
      }
    }
  ]
}
