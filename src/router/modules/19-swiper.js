/*
 * @Author: yz
 * @Date: 2022-11-09 10:15:12
 * @Description: 
 * 
 */
let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
  path: '/swiper',
  name: 'swiper',
  component: layout,
  meta: {
    title: 'swiper',
    icon: "shezhi1",
  },
  children: [
    {
      path: 'index',
      name: 'swiper-index',
      component: () => import( /* webpackChunkName: "swiper-index" */ "@/views/19-swiper/1-index.vue"),
      meta: {
        title: 'index',
        icon: "shezhi1",
      }
    },
    {
      path: 'two',
      name: 'swiper-two',
      component: () => import( /* webpackChunkName: "swiper-index" */ "@/views/19-swiper/2-two.vue"),
      meta: {
        title: 'two',
        icon: "shezhi1",
      }
    },
    {
      path: 'three',
      name: 'swiper-three',
      component: () => import( /* webpackChunkName: "swiper-index" */ "@/views/19-swiper/3-three.vue"),
      meta: {
        title: 'three',
        icon: "shezhi1",
      }
    }
  ]
}
