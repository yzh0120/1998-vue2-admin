/*
 * @Author: yz
 * @Date: 2022-11-09 10:15:12
 * @Description: 
 * 
 */
let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
  path: '/animejs',
  name: 'animejs',
  component: layout,
  meta: {
    title: 'animejs',
    icon: "shezhi1",
  },
  children: [
    {
      path: 'index',
      name: 'animejs-index',
      component: () => import( /* webpackChunkName: "animejs-index" */ "@/views/20-animejs/1-index.vue"),
      meta: {
        title: 'index',
        icon: "shezhi1",
      }
    }
  ]
}
