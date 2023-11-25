let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
  path: '/tagsView',
  name: 'tagsView',
  component: layout,
  meta: {
    title: 'tagsView',
    icon: "shezhi1",
  },
  children: [{
    path: 'base',
    name: 'tagsView-base',
    component: () => import( /* webpackChunkName: "tagsView-base" */ "@/views/13-tagsView/1-base.vue"),
    meta: {
      title: 'tagsView',
      icon: "shezhi1",
    }
  },{
    path: 'demo',
    name: 'tagsView-demo',
    component: () => import( /* webpackChunkName: "tagsView-demo" */ "@/views/13-tagsView/2-demo.vue"),
    meta: {
      title: 'tagsView_demo',
      icon: "shezhi1",
    }
  }]
}
