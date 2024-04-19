let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
  path: '/pdf',
  name: 'pdf',
  component: layout,
  meta: {
    title: 'pdf',
    icon: "shezhi1",
  },
  children: [{
    path: 'pdfShowAll',
    name: 'pdfShowAll',
    component: () => import( /* webpackChunkName: "socket-base" */ "@/views/9-pdf/1-pdfShowAll.vue"),
    meta: {
      title: 'pdfShowAll',
      icon: "shezhi1",
    }
  },
  {
    path: 'pdfPage',
    name: 'pdfPage',
    component: () => import( /* webpackChunkName: "socket-base" */ "@/views/9-pdf/2-pdfPage.vue"),
    meta: {
      title: 'pdfPage',
      icon: "shezhi1",
    }
  }]
}
