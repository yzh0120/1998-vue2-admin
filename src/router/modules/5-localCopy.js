let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/base/blank.vue") //二级菜单专属

export default {
  path: '/localCopy',
  name: 'localCopy',
  component: layout,
  meta: {
    title: '局部复制',
    icon: "shezhi1",
  },
  children: [{
    path: 'disabled',
    name: 'localCopy-disabled',
    component: () => import( /* webpackChunkName: "localCopy-disabled" */ "@/views/5-localCopy/1-disabled.vue"),
    meta: {
      title: '禁用全部按钮',
      icon: "shezhi1",
    }
  },
  {
    path: 'fastAlert',
    name: 'localCopy-fastAlert',
    component: () => import( /* webpackChunkName: "localCopy-fastAlert" */ "@/views/5-localCopy/2-fastAlert.vue"),
    meta: {
      title: '快速弹窗方便校验',
      icon: "shezhi1",
    }
    },
    {
      path: 'popSelect',
      name: 'localCopy-popSelect',
      component: () => import( /* webpackChunkName: "localCopy-popSelect" */ "@/views/5-localCopy/3-popSelect.vue"),
      meta: {
        title: 'popSelect',
        icon: "shezhi1",
      }
    },
    {
      path: 'inputIcon',
      name: 'localCopy-inputIcon',
      component: () => import( /* webpackChunkName: "localCopy-inputIcon" */ "@/views/5-localCopy/4-inputIcon.vue"),
      meta: {
        title: 'inputIcon',
        icon: "shezhi1",
      }
    },
    {
      path: 'move',
      name: 'localCopy-move',
      component: () => import( /* webpackChunkName: "localCopy-move" */ "@/views/5-localCopy/5-move.vue"),
      meta: {
        title: 'localCopy-move',
        icon: "shezhi1",
      }
    }
  ]
}
