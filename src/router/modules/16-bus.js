let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
  path: '/bus',
  name: 'bus',
  component: layout,
  meta: {
    title: '事件车',
    icon: "shezhi1",
  },
  children: [
    {
      path: 'one',
      name: 'bus-one',
      component: () => import( /* webpackChunkName: "bus-base" */ "@/views/16-bus/one.vue"),
      meta: {
        title: '触发事件',
        icon: "shezhi1",
      }
    },
    {
      path: 'two',
      name: 'bus-two',
      component: () => import( /* webpackChunkName: "bus-base" */ "@/views/16-bus/two.vue"),
      meta: {
        title: '接受事件',
        icon: "shezhi1",
      }
    }
  ]
}
