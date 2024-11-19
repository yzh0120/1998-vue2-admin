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
  children: [{
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
    },
    {
      path: 'controls',
      name: "animejs-controls",
      component: blank, //() => import(/* webpackChunkName: "VCharts-Pie" */"@/views/10-vCharts/pie.vue"),
      meta: {
        title: '动画控制',
        icon: "shezhi1",
      },
      children: [{
          path: 'playAndpause',
          name: "animejs-controls-playAndpause",
          meta: {
            title: '播放和暂停',
            icon: "shezhi1",
          },
          component: () => import( /* webpackChunkName: "VCharts-histogram-other-one" */ "@/views/20-animejs/4-controls/1-playAndpause.vue"),
        },
        {
          path: 'restart',
          name: "animejs-controls-restart",
          meta: {
            title: '重置',
            icon: "shezhi1",
          },
          component: () => import( /* webpackChunkName: "VCharts-histogram-other-one" */ "@/views/20-animejs/4-controls/2-restart.vue"),
        },
        {
          path: 'reverse',
          name: "animejs-controls-reverse",
          meta: {
            title: '反方向',
            icon: "shezhi1",
          },
          component: () => import( /* webpackChunkName: "VCharts-histogram-other-one" */ "@/views/20-animejs/4-controls/3-reverse.vue"),
        },
        {
          path: 'seek',
          name: "animejs-controls-seek",
          meta: {
            title: '精确到',
            icon: "shezhi1",
          },
          component: () => import( /* webpackChunkName: "VCharts-histogram-other-one" */ "@/views/20-animejs/4-controls/4-seek.vue"),
        },
        {
          path: 'timeline',
          name: "animejs-controls-timeline",
          meta: {
            title: '时间线',
            icon: "shezhi1",
          },
          component: () => import( /* webpackChunkName: "VCharts-histogram-other-one" */ "@/views/20-animejs/4-controls/5-timeline.vue"),
        }
      ]
    },
    {
      path: 'parameters',
      name: "animejs-parameters",
      component: blank, //() => import(/* webpackChunkName: "VCharts-Pie" */"@/views/10-vCharts/pie.vue"),
      meta: {
        title: '属性的参数',
        icon: "shezhi1",
      },
      children: [{
          path: 'playAndpause',
          name: "animejs-parameters-playAndpause",
          meta: {
            title: '动画持续时间',
            icon: "shezhi1",
          },
          component: () => import( /* webpackChunkName: "VCharts-histogram-other-one" */ "@/views/20-animejs/5-parameters/1-duration.vue"),
        },
        {
          path: 'delay',
          name: "animejs-parameters-delay",
          meta: {
            title: '动画延迟时间',
            icon: "shezhi1",
          },
          component: () => import( /* webpackChunkName: "VCharts-histogram-other-one" */ "@/views/20-animejs/5-parameters/2-delay.vue"),
        },
        {
          path: 'endDelay',
          name: "animejs-parameters-endDelay",
          meta: {
            title: '动画结束延迟时间',
            icon: "shezhi1",
          },
          component: () => import( /* webpackChunkName: "VCharts-histogram-other-one" */ "@/views/20-animejs/5-parameters/3-endDelay.vue"),
        },
        {
          path: 'easing',
          name: "animejs-parameters-easing",
          meta: {
            title: '如何动画',
            icon: "shezhi1",
          },
          component: () => import( /* webpackChunkName: "VCharts-histogram-other-one" */ "@/views/20-animejs/5-parameters/4-easing.vue"),
        },
        {
          path: 'round',
          name: "animejs-parameters-round",
          meta: {
            title: '数字滚动',
            icon: "shezhi1",
          },
          component: () => import( /* webpackChunkName: "VCharts-histogram-other-one" */ "@/views/20-animejs/5-parameters/5-round.vue"),
        },
        {
          path: 'SpecificPropertyParameters',
          name: "animejs-parameters-SpecificPropertyParameters",
          meta: {
            title: '特定属性参数',
            icon: "shezhi1",
          },
          component: () => import( /* webpackChunkName: "VCharts-histogram-other-one" */ "@/views/20-animejs/5-parameters/6-SpecificPropertyParameters.vue"),
        },
        {
          path: 'FunctionBasedParameters',
          name: "animejs-parameters-FunctionBasedParameters",
          meta: {
            title: '基于函数的参数',
            icon: "shezhi1",
          },
          component: () => import( /* webpackChunkName: "VCharts-histogram-other-one" */ "@/views/20-animejs/5-parameters/7-FunctionBasedParameters.vue"),
        },
      ]
    },
    {
      path: 'AnimationParameters',
      name: "animejs-AnimationParameters",
      component: blank, //() => import(/* webpackChunkName: "VCharts-Pie" */"@/views/10-vCharts/pie.vue"),
      meta: {
        title: '动画的参数',
        icon: "shezhi1",
      },
      children: [
        {
          path: 'direction',
          name: 'animejs-AnimationParameters-direction',
          component: () => import( /* webpackChunkName: "animejs-index" */ "@/views/20-animejs/6-AnimationParameters/1-direction.vue"),
          meta: {
            title: '动画方向',
            icon: "shezhi1",
          }
        },
        {
          path: 'loop',
          name: 'animejs-AnimationParameters-loop',
          component: () => import( /* webpackChunkName: "animejs-index" */ "@/views/20-animejs/6-AnimationParameters/2-loop.vue"),
          meta: {
            title: '动画循环次数',
            icon: "shezhi1",
          }
        },
        {
          path: 'autoplay',
          name: 'animejs-AnimationParameters-autoplay',
          component: () => import( /* webpackChunkName: "animejs-index" */ "@/views/20-animejs/6-AnimationParameters/3-autoplay.vue"),
          meta: {
            title: '动画是否自动播放',
            icon: "shezhi1",
          }
        },
      ]
    }
  ]
}
