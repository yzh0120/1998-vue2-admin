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
        title: '基础',
        icon: "shezhi1",
      }
    },
    {
      path: 'two',
      name: 'animejs-two',
      component: () => import( /* webpackChunkName: "animejs-index" */ "@/views/20-animejs/2-two.vue"),
      meta: {
        title: '多个元素接力',
        icon: "shezhi1",
      }
    },
    {
      path: 'keyArray',
      name: 'animejs-keyArray',
      component: () => import( /* webpackChunkName: "animejs-index" */ "@/views/20-animejs/3-keyArray.vue"),
      meta: {
        title: '关键帧数组',
        icon: "shezhi1",
      }
    }
  ]
}
