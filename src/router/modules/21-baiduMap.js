/*
 * @Author: yz
 * @Date: 2022-11-09 10:15:12
 * @Description: 
 * 
 */
let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
  path: '/baiduMap',
  name: 'baiduMap',
  component: layout,
  meta: {
    title: 'baiduMap',
    icon: "shezhi1",
  },
  children: [
    {
      path: 'base',
      name: 'baiduMap-base',
      component: () => import( /* webpackChunkName: "baiduMap-index" */ "@/views/21-baiduMap/1-base.vue"),
      meta: {
        title: 'base',
        icon: "shezhi1",
      }
    },
    {
      path: 'BmCircle',
      name: 'baiduMap-BmCircle',
      component: () => import( /* webpackChunkName: "baiduMap-index" */ "@/views/21-baiduMap/2-BmCircle.vue"),
      meta: {
        title: '圆',
        icon: "shezhi1",
      }
    },
    {
      path: 'BmMarker',
      name: 'baiduMap-BmMarker',
      component: () => import( /* webpackChunkName: "baiduMap-index" */ "@/views/21-baiduMap/3-BmMarker.vue"),
      meta: {
        title: '标注',
        icon: "shezhi1",
      }
    },
    {
      path: 'overlay',
      name: 'baiduMap-overlay',
      component: () => import( /* webpackChunkName: "baiduMap-index" */ "@/views/21-baiduMap/4-overlay.vue"),
      meta: {
        title: '自定义覆盖物',
        icon: "shezhi1",
      }
    }
  ]
}
