let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
  path: '/fastCopy',
  name: 'fastCopy',
  component: layout,
  meta: {
    title: '整个页面复制',
    icon: "shezhi1",
  },
  children: [{
    path: 'base',
    name: 'fastCopy-base',
    component: () => import( /* webpackChunkName: "fastCopy-base" */ "@/views/3-fastCopy/1-tableAlert.vue"),
    meta: {
      title: '表单弹窗页面',
      icon: "shezhi1",
    }
  }, {
    path: 'navPage',
    name: 'fastCopy-navPage',
    component: () => import( /* webpackChunkName: "fastCopy-navPage" */ "@/views/3-fastCopy/2-nav-page.vue"),
    meta: {
      title: '导航页面',
      icon: "shezhi1",
    }
  }, {
    path: 'getMoney',
    name: 'fastCopy-getMoney',
    component: () => import( /* webpackChunkName: "fastCopy-getMoney" */ "@/views/3-fastCopy/3-getMoney.vue"),
    meta: {
      title: '收银台',
      icon: "shezhi1",
    }
  }]
}
