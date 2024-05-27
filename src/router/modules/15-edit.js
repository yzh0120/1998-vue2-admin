let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
  path: '/edit',
  name: 'edit',
  component: layout,
  meta: {
    title: '富文本1',
    icon: "shezhi1",
  },
  children: [{
    path: 'base',
    name: 'edit-base',
    component: () => import( /* webpackChunkName: "edit-base" */ "@/views/15-edit/1-base.vue"),
    meta: {
      title: '富文本2',
      icon: "shezhi1",
    }
  }]
}
